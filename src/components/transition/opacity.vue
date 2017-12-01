<template>
    <transition name="fade">
      <slot></slot>
    </transition>
</template>
<script type="es6">
export default {
  name: 'transition-opacity',
  data(){
    return {

    }
  }
}

</script>
<style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
    position: absolute;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */ {
    opacity: 0
  }
  .fade-move {
    transition: transform 1s;
  }
</style>
