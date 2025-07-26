setTimeout(() => {
  window.googlePluginEnhanceWeb()
}, 2000);
window.googlePluginEnhanceWeb = () => {
  // let baseUrl = `https://github-youdaxia.github.io/google-plugin-enhance-web/webScript`
  // let com = httpVueLoader(`${baseUrl}/publicScript/components/main.vue`)
  
  let pluginJs = document.querySelector('#aaaaaaaa').getAttribute('url')
  let pluginCom = httpVueLoader(pluginJs)
  new Vue({
    el: '#aaaaaaaa',
    components: {
      'my-component': pluginCom
    },
    template: '<my-component></my-component>'
  })
}
