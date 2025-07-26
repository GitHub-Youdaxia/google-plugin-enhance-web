<template>
  <div class="chajian-container" style="">
    <el-button class="qiehuanzhuangtai" @click="handleClick">{{editable?'编辑态':'原始态'}}</el-button>
    <el-button class="qiehuanzhuangtai" @click="visible = true">Button</el-button>
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
      message: '',
      editable: false
    }
  },
  methods:{
    handleClick () {
      this.editable=!this.editable
      document.body.setAttribute('contenteditable',this.editable)
    }
  }
}
</script>

<style scoped>
.chajian-container {
  position:fixed;left:0;top:0;z-index:9999;
}
.chajian-container .qiehuanzhuangtai {
  opacity: 0;
}
.chajian-container .qiehuanzhuangtai:hover {
  opacity: 1;
}
</style>
