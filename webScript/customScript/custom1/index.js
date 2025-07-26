window.googlePluginEnhanceWebInit = () => {
  let btnObj = {
    btn1: {
      text: '按钮1',
      click: () => {
        console.log('按钮1点击了')
      }
    }
  }
  window.googlePluginEnhanceWebInstance.btnObj = btnObj
  window.googlePluginEnhanceWebInstance.$forceUpdate();
}