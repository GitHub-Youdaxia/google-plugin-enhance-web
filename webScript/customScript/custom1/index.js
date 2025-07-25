const mainComponentUrl111 = document.querySelector('#aaaaaaaa').getAttribute('url')
new Vue({
  el: '#aaaaaaaa',
  components: {
    'my-component': httpVueLoader(mainComponentUrl111)
  },
  template: '<my-component></my-component>'
})
// https://github-youdaxia.github.io/google-plugin-enhance-web/webScript/index.html
