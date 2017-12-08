<template>
    <div>
      <h1>MY</h1>
      <h2>id:{{$route.params.myId}}</h2>
      <!--<live></live>-->
    </div>
</template>
<script type="es6">
  //import live from "../transition/demoLive.vue"
export default {
  name: 'myView',
  data(){
    return {

    }
  },
  watch: {
    '$route' (to, from) {
      // 对路由变化作出响应...
      console.log(to,from)
    }
  }
}

</script>
<style scoped></style>
