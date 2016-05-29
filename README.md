# Vue.js Paginator [![CircleCI](https://circleci.com/gh/hootlex/vuejs-paginator.svg?style=shield&circle-token=:circle-ci-badge-token)](https://circleci.com/gh/hootlex/vuejs-paginator)

> A Vue.js plugin to easily integrate pagination to your projects.

## Install Through npm
``` bash
npm install vuejs-paginator -save
```

## Usage
Register VPaginator component inside your Vue instance.

Use it in your HTML file.

```html
<v-paginator :resource.sync="animals" :resource_url="api/animals"></v-paginator>
```

### THATS IT

Then you will have access to the returned data inside your `resource` variable, in this example **animals**, and you'll be able to render it as you would normally do.
```html
<v-for="animal in animal">
  {{ animal.name }}
</v-for>
```

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
