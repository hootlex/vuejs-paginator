<template>
  <div class="v-paginator">
    <button class="btn btn-default" @click="fetchData(prev_page_url)" :disabled="!prev_page_url">
      <span v-if="config.previous_button_icon && !page_numbers || !config.previous_button_text" :class="config.previous_button_icon"></span>
      <span v-else>{{config.previous_button_text}}</span>
    </button>
    <span v-if="page_numbers">
      <div class="btn-group" role="group">
        <button
          v-for="page in pages" @click="fetchData(page.url)"
          class="btn btn-default" :class="{'btn-primary': current_page==page.value}">
          {{page.value}}
        </button>
      </div>
    </span>
    <span v-else>Page {{current_page}} of {{last_page}}</span>
    <button class="btn btn-default" @click="fetchData(next_page_url)" :disabled="!next_page_url">
      <span v-if="config.next_button_icon && !page_numbers || !config.next_button_text" :class="config.next_button_icon"></span>
      <span v-else>{{config.next_button_text}}</span>
    </button>
  </div>
</template>

<script>
import {utils} from './utils'
export default {
  props: {
    page_numbers: {
      type: Boolean,
      required: false,
      default: false
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
          previous_button_icon: this.page_numbers ? 'glyphicon glyphicon-chevron-left' : '',
          previous_button_text: this.page_numbers ? '' : 'Previous',
          next_button_icon: this.page_numbers ? 'glyphicon glyphicon-chevron-right' : '',
          next_button_text: this.page_numbers ? '' : 'Next'
      }
    }
  },
  computed: {
    pages: function(){
      if (this.page_numbers) {
        return utils.createPageNumbers(this.resource_url, this.last_page)
      }
      return {}
    }
  },
  methods: {
    fetchData (pageUrl) {
      pageUrl = pageUrl || this.resource_url
      var self = this
      this.$http.get(pageUrl, { headers: this.config.headers })
      .then(function (response) {
        self.handleResponseData(response.data)
      }).catch(function (response) {
        console.log('Fetching data failed.', response)
      })
    },
    handleResponseData (response) {
      this.makePagination(response)
      let data = utils.getNestedValue(response, this.config.remote_data)
      this.$emit('update', data)
    },
    makePagination (data) {
      this.current_page = utils.getNestedValue(data, this.config.remote_current_page)
      this.last_page = utils.getNestedValue(data, this.config.remote_last_page)
      this.next_page_url = (this.current_page === this.last_page) ? null : utils.getNestedValue(data, this.config.remote_next_page_url);
      this.prev_page_url = (this.current_page === 1) ? null : utils.getNestedValue(data, this.config.remote_prev_page_url);
    },
    initConfig(){
      this.config = utils.mergeObjects(this.config, this.options)
    }
  },
  watch : {
    resource_url () {
      this.fetchData()
    }
  },
  created () {
    this.initConfig()
    this.fetchData()
  }
}
</script>
