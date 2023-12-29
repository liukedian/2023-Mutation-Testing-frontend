<template>

  <div id="textdivout" v-for="(item,index) in body" :key="index" >
    <H2>变异体{{index+1}}</H2>
    <div id="textdivinner">
      <p class="text-wrapper">{{item}}</p>
      <div class="text1" v-if="this.result[index].charAt(24)==0">
        <p> isKilled</p>
      </div>
      <div class="text2" v-if="this.result[index].charAt(24)==1">
        <p>notKilled</p>
      </div>
      <div id="res">
        <p style="line-height: 60px">{{result[index].substring(0,74)}}</p>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "myShow",
  data() {
    return {
      respData:localStorage.getItem("body"),
      body:[],
      respRes:localStorage.getItem("result"),
      result:[],
    };
  },
  mounted: function () {
    this.fetch();
  },
  methods:{
    fetch(){
      //var len=localStorage.getItem("bodyLen");
      this.body=JSON.parse(this.respData);
      this.result=JSON.parse(this.respRes);
    }
  }
}


</script>

<style scoped>

#textdivinner{
  margin: 0  400px;
  border:5px solid #545c64;
}
#res{
 background-color: #545c64;
  height: 60px;
  margin-bottom: 0px;
  color:white;
}
.text1{
  background-color: chartreuse;
  margin: 0 280px;
  color: white;
  font-size: 28px;
}
.text2{
  background-color: crimson;
  margin: 0 280px;
  color: white;
  font-size: 28px;
}
.text-wrapper {
  white-space: pre-wrap;
  text-align: left;
  margin-left: 80px;
  margin-top: 40px;
}

</style>