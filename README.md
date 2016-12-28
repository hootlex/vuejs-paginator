# Vue.js Paginator [![CircleCI](https://circleci.com/gh/hootlex/vuejs-paginator.svg?style=shield&circle-token=:circle-ci-badge-token)](https://circleci.com/gh/hootlex/vuejs-paginator) [![npm downloads](https://img.shields.io/npm/dt/vuejs-paginator.svg)](https://www.npmjs.com/package/vuejs-paginator) <a href="https://www.npmjs.com/package/vuejs-paginator"><img src="https://img.shields.io/npm/v/vuejs-paginator.svg" alt="Version"></a> [![Software License](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat)](LICENSE)
> A Vue.js plugin to easily integrate pagination in your projects.

VueJs Paginator is a simple but powerful plugin since it gives you access on how to render the data, instead of using a predefined table.

![vue paginator preview](http://i.imgur.com/2jah1qt.gif)

The way you use it is similar to Laravel's paginator.

## Installation
> For Vue 1.* use [v1.0.15](https://github.com/hootlex/vuejs-paginator/tree/v1.0.15).

### Through npm
``` bash
npm install vuejs-paginator --save
```

### From a cdn
```HTML
<script src="https://cdnjs.cloudflare.com/ajax/libs/vuejs-paginator/2.0.0/vuejs-paginator.js"></script>
<!-- or -->
<script src="https://cdn.jsdelivr.net/vuejs-paginator/2.0.0/vuejs-paginator.min.js"></script>
```

## Usage
Use VPaginator in the HTML.
```html
<v-paginator resource_url="api/animals" @update="updateResource"></v-paginator>
```

Prepare the Vue instance.
```js
// if you are not using the cdn version you have to import VuePaginator.
// import VuePaginator from 'vuejs-paginator'
new Vue({
    data () {
      return {
        animals: []
      }
    },
    components: {
        VPaginator: VuePaginator
    },
    methods: {
      updateResource(data){
        this.animals = data
      }
    }
  ...
});
```

### Thats it

Every time a page is changed or fetched, resource variable will contain the returned data.

```html
<ul>
  <li v-for="animal in animals">
    {{ animal.name }}
  </li>
</ul>
```

### Documentation
[Here you can find the detailed Documentation](http://hootlex.github.io/vuejs-paginator/)

## Build Setup

``` bash
# install dependencies
npm install

# build for production with minification
npm run build

# run unit tests
npm run unit
# run all tests
npm test
```
