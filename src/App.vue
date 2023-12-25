<template>
  <div id="title">
    <H1>变异测试框架/工具</H1>
  </div>

  <div class="navigation-container" >
    <div class="item-div">
      <router-link to="/"  >上传文件</router-link>
    </div>
  <div class="item-div">
    <router-link to="/show" > 变异体查看</router-link>
  </div>
  <div class="item-div">
    <router-link to="/mutation" >变异结果查看</router-link>
  </div>

  </div>

  <div>
    <router-view></router-view>
  </div>

</template>
<script>

export default {
  name: 'App',
  components: {

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.navigation-container{
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: start;
  box-shadow: var(--el-box-shadow-light);
  box-sizing: border-box;
  background-color: #545c64;
  overflow: hidden;
  transition: all 0.5s;
}

a {
  text-decoration: none;
}
.router-link-active {
  text-decoration: none;
}

.item-div{
  color: #FFF8DC;
  line-height: 40px;
  margin:0 30px;
  font-size: 20px;
}
a{
  text-decoration: none;
  color: white;
}

.el-menu{
  margin-left: 40px;
}

.router-link-active{
  color: #DAA520;
}

</style>
