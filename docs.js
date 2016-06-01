Vue.component('story', {
    template: '#template-story-raw',
    props: ['story'],
})


var vm = new Vue({
    el: 'body',
    components: {
        VPaginator: VuePaginator
    },
    data: {
        animals: []
    }
});
