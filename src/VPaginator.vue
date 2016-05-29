<template>
  <div class="v-paginator">
    <button class="btn btn-default" @click="fetchData(prev_page_url)" :disabled="!prev_page_url">
      {{config.previous_button_text}}
    </button>
    <span>Page {{current_page}} of {{last_page}}</span>
    <button class="btn btn-default" @click="fetchData(next_page_url)" :disabled="!next_page_url">
      {{config.next_button_text}}
    </button>
  </div>
</template>

<script>
import {utils} from './utils'
export default {
  props: {
    resource: {
      required: true,
      twoWay: true
    },
    resource_url: {
      type: String,
      required: true
    },
    custom_template : '',
    options: {
      type: Object,
      required: false,
      default () {
        return {}
      }
    }
  },
  data () {
    return {
      current_page: '',
      last_page: '',
      next_page_url: '',
      prev_page_url: '',
      config: {
          remote_data: 'data',
          remote_current_page: 'current_page',
          remote_last_page: 'last_page',
          remote_next_page_url: 'next_page_url',
          remote_prev_page_url: 'prev_page_url',
          previous_button_text: 'Previous',
          next_button_text: 'Next'
      }
    }
  },
  watch: {
    'resource_url': function() {
      this.fetchData()
    }
  },
  methods: {
    fetchData (pageUrl) {
      pageUrl = pageUrl || this.resource_url
      this.$http.get(pageUrl, {}, { headers: this.config.headers })
      .then(function (response) {
        this.handleResponseData(response.data)
      }).catch(function (response) {
        console.log('Fetching data failed.', response)
      })
    },
    handleResponseData (response) {
      this.makePagination(response)
      this.$set('resource', utils.getNestedValue(response, this.config.remote_data)),
      this.setPaginationDataGlobally()
    },
    makePagination (data) {
      this.current_page = utils.getNestedValue(data, this.config.remote_current_page)
      this.last_page = utils.getNestedValue(data, this.config.remote_last_page)
      this.next_page_url = utils.getNestedValue(data, this.config.remote_next_page_url)
      this.prev_page_url = utils.getNestedValue(data, this.config.remote_prev_page_url)
    },
    setPaginationDataGlobally(){
      try {
        VuePaginator.meta.current_page = this.current_page
        VuePaginator.meta.last_page = this.last_page
        VuePaginator.meta.next_page_url = this.next_page_url
        VuePaginator.meta.prev_page_url = this.prev_page_url
      }
      catch(err) {
          console.log('[VuePaginator] Global VuePaginator object not found. You will not have access to VuePaginator.meta data.')
      }
    },
    initConfig(){
      this.config = utils.merge_objects(this.config, this.options)
    }
  },
  created () {
    this.initConfig()
    this.fetchData()
  }
}
</script>
