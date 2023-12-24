<template>

  <div id="select">
  <el-select v-model="value" clearable placeholder="Select">
    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
  </el-select>
  </div>


</template>

<script setup>
import { ref } from 'vue'

const value = ref('')
const options = [
  {
    value: 'Java',
    label: 'Java',
  },
  {
    value: 'Python',
    label: 'Python',
  }
]
</script>

<script>
export default {
  name: 'mySelect',
  props: {
    msg: String
  }
}
</script>

<style scoped>

#select{
  margin: 20px;
}
</style>
