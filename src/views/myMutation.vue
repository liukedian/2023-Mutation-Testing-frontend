<template>
<p>{{respData}}</p>
</template>

<script>
export default {
  name: "myMutation",
  data() {
    return {
      respData:localStorage.getItem("testResult")
    };
  },
}
</script>

<style scoped>

</style>