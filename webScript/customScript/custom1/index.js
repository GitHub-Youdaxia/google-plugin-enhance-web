window.googlePluginEnhanceWebInit = () => {
  let btnObj = {
    btn1: {
      text: '按钮1',
      click: () => {
        console.log('按钮1点击了')
      }
    },
    btn2: {
      text: '按钮2',
      click: () => {
        console.log('按钮2点击了')
      }
    }
  }
  window.googlePluginEnhanceWebInstance.btnObj = btnObj
  window.googlePluginEnhanceWebInstance.$forceUpdate();
}