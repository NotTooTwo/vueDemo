<template>
    <div class="box">
      <h1>lorem</h1>
      <h2>id:{{$route.params.id}}</h2>
      <!--<keep-alive>-->
        <!--<component :is="currentView" :key="currentView"></component>-->
      <!--</keep-alive>-->
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis cum distinctio dolorum eligendi esse facilis mollitia non nostrum pariatur perferendis porro praesentium, provident quia quidem ratione recusandae sapiente similique sint?</p>
    </div>
</template>
<script type="es6">
  import bolls from '../../some/bolls.vue'

  export default {
    name: '',
    data(){
      return {
        currentView:this.$route.params.components
      }
    },
    components:{bolls}
}

</script>
<style scoped>
  .box{
    padding: 1.2rem;
  }
  h1{
    text-align: center;
    font-size: 1.8rem;
    color: #333;
    font-weight: bold;
  }
</style>
