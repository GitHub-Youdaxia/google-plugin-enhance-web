(()=>{
let baseUrl = `https://github-youdaxia.github.io/google-plugin-enhance-web/webScript`

new Vue({
  el: '#aaaaaaaa',
  components: {
    'my-component': httpVueLoader(`${baseUrl}/publicScript/components/main.vue`)
  },
  template: '<my-component></my-component>'
})

})()