<template>
    <div class="box">
      <h1>MAIN</h1>
      <button @click="toggleShow">{{show?'hidden':'show'}}</button>
      <transition-group   name="fade" mode="in-out">
        <p class="animated" v-text="show?'hello':'bey~'" key="k1">hello</p>
        <p class="" v-if="show" key="k2" class="animated">BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB</p>
        <p v-else key="k3" class="animated">AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</p>
        <!--<p v-else="" class="">bey~</p>-->
      </transition-group>
    </div>
</template>
<script type="es6">
export default {
  name: 'mainView',
  data(){
    return {
      show:false
    }
  },
  methods:{
    toggleShow(){
      this.show=!this.show;
    }
  }
}

</script>
<style scoped>
  .box{
    padding: 1.2rem;
  }
  p{
    -ms-word-wrap: break-word;
    word-wrap: break-word;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */ {
    opacity: 0
  }
</style>
