<template>
  <p>{{respData}}</p>
</template>

<script>
export default {
  name: "myShow",
  data() {
    return {
      respData:localStorage.getItem("respData")
    };
  },
}
</script>

<style scoped>

</style>