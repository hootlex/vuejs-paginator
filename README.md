# Vue.js Paginator [![CircleCI](https://circleci.com/gh/hootlex/vuejs-paginator.svg?style=shield&circle-token=:circle-ci-badge-token)](https://circleci.com/gh/hootlex/vuejs-paginator)

> A Vue.js plugin to easily integrate pagination to your projects.

VueJs Paginator is a simple but powerful plugin, since it gives you access on how to render the data, instead of using a predefined table.

Just give it a variable where you want the returned data to be stored. Every time the user changes page, your variable will update immediately.

The way you use it is similar to Laravel's paginator.

>Vuejs Paginator takes a `resource_url` and a `resource` empty variable and it fetches the data from the provided URL. When the call is done, it adds the returned data to the `resource` variable.

## Installation
### Through npm
``` bash
npm install vuejs-paginator -save
```

### From a cdn
```HTML
<script src="https://cdnjs.cloudflare.com/ajax/libs/vuejs-paginator/1.0.11/vuejs-paginator.js">
//OR
<script src="https://cdn.jsdelivr.net/vuejs-paginator/1.0.11/vuejs-paginator.min.js">
```

## Usage
Register VPaginator component inside your Vue instance.

```js
// if you are not using the cdn version you have to import VuePaginator.
// import VuePaginator from 'vuejs-paginator'
new Vue({
    ...
    components: {
        VPaginator: VuePaginator
    },
  ...
});
```

Use it in your HTML.

```html
<v-paginator :resource.sync="animals" :resource_url="api/animals"></v-paginator>
```

### THATS IT

Then you will have access to the returned data inside your `resource` variable, in this example **animals**, and you'll be able to render it as you would normally do.
```html
<ul>
  <li v-for="animal in animals">
    {{ animal.name }}
  </li>
</ul>
```

### Documentation
[Here you can find a more detailed Documentation along with a few examples.](http://hootlex.github.io/vuejs-paginator/)

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
