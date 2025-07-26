(()=>{
let baseUrl = `https://github-youdaxia.github.io/google-plugin-enhance-web/webScript`

new Vue({
  el: '#aaaaaaaa',
  components: {
    'my-component': httpVueLoader(`${baseUrl}/pulicScript/components/main.vue`)
  },
  template: '<my-component></my-component>'
})

})()