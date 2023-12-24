<script setup>
const options = [
  {
    value: 'ABS',
    label: 'ABS',
  },
  {
    value: 'AOR',
    label: 'AOR',
  },
  {
    value: 'AOR',
    label: 'AOR',
  },
  {
    value: 'ROR',
    label: 'ROR',
  },
  {
    value: 'UOI',
    label: 'UOI',
  },
]
</script>
<template>
  <div id="title">
    <H2>请选择要上传的文件格式</H2>
  </div>
  <mySelect/>
  <div>
    <H2>请选择要使用的变异算子</H2>
      <el-select v-model="loadFileParams" >
        <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"/>
      </el-select>
  </div>
  <el-upload
      drag
      :action="uploadFileURL"
      :data="loadFileParams"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      multiple>
    <i class="el-icon-upload"></i>
    <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
  </el-upload>

  <el-button
      size="large"
      @click="submitUpload"
      plain
      color="rgb(1, 132, 127)"
  >将信息上传到服务器
  </el-button>

</template>

<script>
import mySelect from '../components/mySelect.vue'
import axios from "axios";
import {ElMessageBox} from "element-plus";
import {ref} from "vue";

export default {
  data() {
    return {
      uploadFileURL:"http://127.0.0.1:8080/user/register",
      loadFileParams:ref(''),
      coursesU: [],
      type: [],
    };
  },


  methods: {
    submitUpload() {
        axios
            .post(this.uploadFileURL, this.loadFileParams)
            .then(function (res) {
              console.log(res);
            });
        ElMessageBox.alert("您已成功上传链接", {
          confirmButtonText: "确定",
        });
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file, this.loadFileParams);
    },
  },

  name: "myHome",
  components: {
    mySelect,
  },
};
</script>

<style scoped>

#title{
  margin-top: 30px;
}
</style>