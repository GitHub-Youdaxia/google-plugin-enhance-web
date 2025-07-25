<template>
  <div class="example" style="position:fixed;left:0;top:0;z-index:9999;">
    <h1>{{ message }}</h1>
    <el-button @click="count++">Clicked {{ count }} times</el-button>
   <el-button @click="visible = true">Button</el-button>
    <el-dialog :visible.sync="visible" title="Hello world">
      <p>Try Element</p>
    </el-dialog>
  </div>
</template>

<script>
module.exports = {
  data () {
    return {
      visible: false,
      message: 'Hello from Vue 2 component!',
      count: 0
    }
  }
}
</script>

<style scoped>
.example {
  color: #42b983;
  font-family: Arial;
}
</style>
