setTimeout(() => {
  window.googlePluginEnhanceWeb()
}, 3333);
window.googlePluginEnhanceWeb = () => {
  // let baseUrl = `https://github-youdaxia.github.io/google-plugin-enhance-web/webScript`
  // let com = httpVueLoader(`${baseUrl}/publicScript/components/main.vue`)
  let pluginJs = document.querySelector('#aaaaaaaa').getAttribute('url')
  let pluginCom = httpVueLoader(pluginJs)
  try {
    // googlePluginEnhanceWebInit() // 执行报错，功能不正常了，没找到原因
    // pluginCom();
    new Vue({
      el: '#aaaaaaaa',
      components: {
        'my-component': pluginCom
      },
      template: '<my-component></my-component>'
    })
  } catch (error) {
    console.log(error)
  }
}
window.googlePluginEnhanceWebInit = ()=> {
  try {
    
    // 注册全局指令 v-drag
    Vue.directive('drag', {
      bind(el) {
        let isDragging = false;
        let offsetX = 0;
        let offsetY = 0;
    
        // 鼠标按下事件
        el.addEventListener('mousedown', (e) => {
          isDragging = true;
          offsetX = e.clientX - el.offsetLeft;
          offsetY = e.clientY - el.offsetTop;
          el.style.cursor = 'grabbing';
        });
    
        // 鼠标移动事件
        document.addEventListener('mousemove', (e) => {
          if (isDragging) {
            el.style.left = `${e.clientX - offsetX}px`;
            el.style.top = `${e.clientY - offsetY}px`;
            el.style.position = 'fixed';
          }
        });
    
        // 鼠标松开事件
        document.addEventListener('mouseup', () => {
          isDragging = false;
          el.style.cursor = 'grab';
        });
      }
    });
  } catch (error) {
    console.log(error)
  }
}
