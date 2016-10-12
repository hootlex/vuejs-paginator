/* eslint-env mocha */
/* global expect */
import Vue from 'vue/dist/vue.js'
import VueResource from 'vue-resource'
import VPaginator from 'dist/vuejs-paginator'
import {mockedResponse, options} from './data.js'
Vue.use(VueResource)

describe('VPaginator.vue', () => {
  it('should render the paginator', () => {
    const vm = new Vue({
      data: { dummies: [] },
      template: '<div><v-paginator resource_url=""></v-paginator></div>',
      components: { VPaginator }
    }).$mount()
    expect(vm.$el.querySelector('.v-paginator').textContent).to.contain('Previous')
  })
  it('should render the paginator with custom button texts', () => {
    const options = { previous_button_text: 'Go back' }
    const vm = new Vue({
      data: { dummies: [], options: options },
      template: '<div><v-paginator resource_url="" :resource.sync="dummies" :options="options"></v-paginator></div>',
      components: { VPaginator }
    }).$mount()
    expect(vm.$el.querySelector('.v-paginator').textContent).to.contain('Go back')
  })
  it('should set pagination data correctly', () => {
    const vm = new Vue({
      data: { dummies: [], options: options },
      template: '<div><v-paginator resource_url="" :resource.sync="dummies" :options="options"></v-paginator></div>',
      components: { VPaginator }
    }).$mount()
    vm.$children[0].handleResponseData(mockedResponse)
    // expect that pagination data have been set correctly
    expect(vm.$children[0].next_page_url).to.equal(mockedResponse.nested.next_page_url)
    expect(vm.$children[0].next_page_url).to.not.equal('something else')
    expect(vm.$children[0].prev_page_url).to.equal(mockedResponse.nested.prev_page_url)
    expect(vm.$children[0].current_page).to.equal(mockedResponse.nested.current_page)
    expect(vm.$children[0].last_page).to.equal(mockedResponse.nested.last_page)
  })
  it('should emit update after fetching data', () => {
    var resource = []
    const vm = new Vue({
      data: { dummies: [], options: options },
      template: '<div><v-paginator resource_url="" :options="options" @update="updateResource"></v-paginator></div>',
      components: { VPaginator },
      methods: {
        updateResource (data) {
          resource = data
        }
      }
    }).$mount()
    vm.$children[0].handleResponseData(mockedResponse)
    // check that response data have been reflected to current instance
    expect(resource).to.have.length(5)
  })
  it('should merge options with default config', () => {
    const options = { previous_button_text: 'Go back' }
    const vm = new Vue({
      data: { dummies: [], options: options },
      template: '<div><v-paginator resource_url="" :resource.sync="dummies" :options="options"></v-paginator></div>',
      components: { VPaginator }
    }).$mount()
    vm.$children[0].initConfig()
    // check that response data have been reflected to current instance
    expect(vm.$children[0].config.previous_button_text).to.equal('Go back')
  })

  it('should render the paginator with custom button icons', () => {
    const options = { next_button_icon: 'glyphicon glyphicon-bold' }
    const vm = new Vue({
      data: { options: options },
      template: '<div><v-paginator resource_url="" :options="options"></v-paginator></div>',
      components: { VPaginator }
    }).$mount()
    expect(vm.$el.querySelector('.v-paginator > button > span[class="glyphicon glyphicon-bold"]')).to.exist
  })
  it('should render the paginator with page numbers and icons by default', () => {
    const options = { page_numbers: true }
    const vm = new Vue({
      data: { options: options },
      template: '<div><v-paginator :options="options" resource_url=""></v-paginator></div>',
      components: { VPaginator }
    }).$mount()
    expect(vm.$el.querySelector('.v-paginator > span > div[class="btn-group"]')).to.exist
    expect(vm.$el.querySelector('.v-paginator > button > span[class="glyphicon glyphicon-chevron-left"]')).to.exist
    expect(vm.$el.querySelector('.v-paginator > button > span[class="glyphicon glyphicon-chevron-right"]')).to.exist
  })
  it('should render the paginator with page numbers and custom icons', () => {
    const options = { next_button_icon: 'glyphicon glyphicon-bold', page_numbers: true }
    const vm = new Vue({
      data: { options: options },
      template: '<div><v-paginator :options="options" resource_url=""></v-paginator></div>',
      components: { VPaginator }
    }).$mount()
    vm.$children[0].initConfig()
    expect(vm.$el.querySelector('.v-paginator > span > div[class="btn-group"]')).to.exist
    expect(vm.$el.querySelector('.v-paginator > button > span[class="glyphicon glyphicon-chevron-left"]')).to.exist
    expect(vm.$el.querySelector('.v-paginator > button > span[class="glyphicon glyphicon-bold"]')).to.exist
  })
  it('should render the paginator with page numbers and custom text and icon overriding the default icons', () => {
    const options = { previous_button_text: 'Go back', next_button_icon: 'glyphicon glyphicon-bold', page_numbers: true }
    const vm = new Vue({
      data: { dummies: [], options: options },
      template: '<div><v-paginator :options="options" resource_url=""></v-paginator></div>',
      components: { VPaginator }
    }).$mount()
    vm.$children[0].initConfig()
    expect(vm.$el.querySelector('.v-paginator > span > div[class="btn-group"]')).to.exist
    expect(vm.$el.querySelector('.v-paginator > button > span[class="glyphicon glyphicon-chevron-left"]')).to.not.exist
    expect(vm.$el.querySelector('.v-paginator').textContent).to.contain('Go back')
    expect(vm.$el.querySelector('.v-paginator > button > span[class="glyphicon glyphicon-bold"]')).to.exist
  })
  it('should atest that icons have precedence over text when both are given within `options`, with and without `page_numbers`', () => {
    const options1 = { previous_button_icon: 'glyphicon glyphicon-font', previous_button_text: 'Go back', page_numbers: true }
    const options2 = { previous_button_icon: 'glyphicon glyphicon-bold', previous_button_text: 'Go back', page_numbers: false }
    const vm1 = new Vue({
      data: { options1: options1 }, components: { VPaginator }, template: '<div><v-paginator :options="options1" resource_url=""></v-paginator></div>'
    }).$mount()
    vm1.$children[0].initConfig()
    const vm2 = new Vue({
      data: { options2: options2 }, components: { VPaginator }, template: '<div><v-paginator :options="options2" resource_url=""></v-paginator></div>'
    }).$mount()
    vm2.$children[0].initConfig()

    expect(vm1.$el.querySelector('.v-paginator > span > div[class="btn-group"]')).to.exist
    expect(vm1.$el.querySelector('.v-paginator > button > span[class="glyphicon glyphicon-chevron-left"]')).to.not.exist
    expect(vm1.$el.querySelector('.v-paginator > button > span[class="glyphicon glyphicon-font"]')).to.exist
    expect(vm1.$el.querySelector('.v-paginator').textContent).to.not.contain('Go back')
    expect(vm1.$el.querySelector('.v-paginator').textContent).to.not.contain('Previous')

    expect(vm2.$el.querySelector('.v-paginator > span > div[class="btn-group"]')).to.not.exist
    expect(vm2.$el.querySelector('.v-paginator > button > span[class="glyphicon glyphicon-chevron-left"]')).to.not.exist
    expect(vm2.$el.querySelector('.v-paginator > button > span[class="glyphicon glyphicon-bold"]')).to.exist
    expect(vm2.$el.querySelector('.v-paginator').textContent).to.not.contain('Go back')
  })
  it('should atest that text have precendence over default icon when only text are given within `options`, with and without `page_numbers`', () => {
    const options1 = { previous_button_text: 'Go back', page_numbers: true }
    const options2 = { next_button_text: 'Forward, always', page_numbers: false }
    const vm1 = new Vue({
      data: { options1: options1 }, components: { VPaginator }, template: '<div><v-paginator :options="options1" resource_url=""></v-paginator></div>'
    }).$mount()
    vm1.$children[0].initConfig()
    const vm2 = new Vue({
      data: { options2: options2 }, components: { VPaginator }, template: '<div><v-paginator :options="options2" resource_url=""></v-paginator></div>'
    }).$mount()
    vm2.$children[0].initConfig()

    expect(vm1.$el.querySelector('.v-paginator > span > div[class="btn-group"]')).to.exist
    expect(vm1.$el.querySelector('.v-paginator > button > span[class="glyphicon glyphicon-chevron-left"]')).to.not.exist
    expect(vm1.$el.querySelector('.v-paginator').textContent).to.contain('Go back')

    expect(vm2.$el.querySelector('.v-paginator > span > div[class="btn-group"]')).to.not.exist
    expect(vm2.$el.querySelector('.v-paginator > button > span[class="glyphicon glyphicon-chevron-right"]')).to.not.exist
    expect(vm2.$el.querySelector('.v-paginator').textContent).to.contain('Forward, always')
  })
  it('should atest that icon have precendence over default text when only icon are given within `options`, with and without `page_numbers`', () => {
    const options1 = { previous_button_icon: 'glyphicon glyphicon-font', page_numbers: true }
    const options2 = { next_button_icon: 'glyphicon glyphicon-bold', page_numbers: false }
    const vm1 = new Vue({
      data: { options1: options1 }, components: { VPaginator }, template: '<div><v-paginator :options="options1" resource_url=""></v-paginator></div>'
    }).$mount()
    vm1.$children[0].initConfig()
    const vm2 = new Vue({
      data: { options2: options2 }, components: { VPaginator }, template: '<div><v-paginator :options="options2" resource_url=""></v-paginator></div>'
    }).$mount()
    vm2.$children[0].initConfig()

    expect(vm1.$el.querySelector('.v-paginator > span > div[class="btn-group"]')).to.exist
    expect(vm1.$el.querySelector('.v-paginator > button > span[class="glyphicon glyphicon-chevron-left"]')).to.not.exist
    expect(vm1.$el.querySelector('.v-paginator > button > span[class="glyphicon glyphicon-font"]')).to.exist
    expect(vm1.$el.querySelector('.v-paginator').textContent).to.not.contain('Previous')

    expect(vm2.$el.querySelector('.v-paginator > span > div[class="btn-group"]')).to.not.exist
    expect(vm2.$el.querySelector('.v-paginator > button > span[class="glyphicon glyphicon-chevron-right"]')).to.not.exist
    expect(vm2.$el.querySelector('.v-paginator > button > span[class="glyphicon glyphicon-bold"]')).to.exist
    expect(vm2.$el.querySelector('.v-paginator').textContent).to.not.contain('Next')
  })
  var tests = [
      {page: 1, ellipses: false, expected: '12345610'},
      {page: 2, ellipses: true, expected: '12345...10'},
      {page: 3, ellipses: false, expected: '12345610'},
      {page: 4, ellipses: true, expected: '12345...10'},
      {page: 5, ellipses: false, expected: '13456710'},
      {page: 6, ellipses: true, expected: '1...567...10'},
      {page: 7, ellipses: false, expected: '15678910'},
      {page: 8, ellipses: true, expected: '1...678910'},
      {page: 9, ellipses: false, expected: '15678910'},
      {page: 10, ellipses: true, expected: '1...678910'}
  ]
  function getMountedComponent (Component, propsData) {
    const Ctor = Vue.extend(Component)
    const vm = new Ctor({ propsData }).$mount()
    return vm
  }
  tests.forEach(function (test) {
    it(`should generate the page buttons correctly. Page: ${test.page} of 10, \`ellipses\` option: ${test.ellipses}. Expect: ${test.expected}`, done => {
      let vm = getMountedComponent(VPaginator, {
        resource_url: '',
        options: { page_numbers: true, ellipses: test.ellipses }
      })
      vm.$set(vm.$data, 'current_page', test.page)
      vm.$set(vm.$data, 'last_page', 10)
      vm.$nextTick(() => {
        expect(vm.$el.textContent.replace(/\n*/g, '').replace(/\s*/g, '')).to.equal(test.expected)
        done()
      })
    })
  })
})
