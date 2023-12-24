<template>
    <div>
      <H1>变异测试框架/工具</H1>
    </div>
  <div class="h-6" />
  <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      @select="handleSelect"
  >
    <el-menu-item index="1">上传文件</el-menu-item>
    <el-menu-item index="2" >变异体查看</el-menu-item>
    <el-menu-item index="3">变异结果查看</el-menu-item>
  </el-menu>
</template>

<script setup>
import { ref } from 'vue'
const activeIndex2 = ref('1')


</script>

<script>
export default {
  name: "myNavigation"
}
</script>

<style scoped>

</style>