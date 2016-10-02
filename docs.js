Vue.component('story', {
    template: '#template-story-raw',
    props: ['story'],
})


var vm = new Vue({
    el: '#wrapper',
    components: {
        VPaginator: VuePaginator
    },
    data: {
        animals: [],
        animal: {},
        options: {},
    },
    methods: {
        updateResource (data) {
            this.animals = data
        }
    }
});
