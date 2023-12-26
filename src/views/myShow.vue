<template>
  <p>{{respData}}</p>
</template>

<script>
export default {
  name: "myShow",
  data() {
    return {
      respData:localStorage.getItem("mutationBody")
    };
  },
}
</script>

<style scoped>

</style>