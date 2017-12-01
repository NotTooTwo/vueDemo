<template>
    <div class="box">
      <h1>MAIN</h1>
      <button @click="toggleShow">{{show?'hidden':'show'}}</button>
      <transition-group   name="fade" mode="in-out" tag="div" class="relative-box">
        <p class="animated" v-text="show?'hello':'bey~'" :key="show">hello</p>
        <!--<p class="" v-if="show" key="k2">BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB</p>-->
        <!--<p v-else key="k3">AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</p>-->
        <!--<p v-else="" class="">bey~</p>-->
      </transition-group>
      <div id="flip-list-demo" class="demo">
        <button v-on:click="shuffle">Shuffle</button>
        <!--<ul class="rad-box">-->
          <transition-group name="flip-list" tag="ul" class="rad-box">
            <li v-for="item in items" v-bind:key="item">
              {{ item }}
            </li>
          </transition-group>
        <!--</ul>-->
      </div>
    </div>
</template>
<script type="es6">
  import lodash from 'lodash'

export default {
  name: 'mainView',
  data(){
    return {
      show:false,
      items: []

    }
  },
  mounted(){
    for(var i=0;i<100;i++){
      this.items.push(i)
    }
  },
  methods:{
    toggleShow(){
      this.show=!this.show;
    },
    shuffle: function () {
      this.items = _.shuffle(this.items)
    }
  }
}

</script>
<style scoped>
  .rad-box{
    width: 100vw;
    height: 100vw;
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
  }
  .rad-box>li{
    width: 10vw;
    height:10vw;
    box-sizing: border-box;
    border: 1px solid #eee;
    text-align: center;
    line-height: 10vw;
  }
  .relative-box{
    position: relative;
    height: 100px;
  }
  .box{
    /*padding: 1.2rem;*/
  }
  p{
    -ms-word-wrap: break-word;
    word-wrap: break-word;
  }
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
  .flip-list-move {
    transition: transform 1s;
  }

  .list-complete-item {
    transition: all 1s;
    display: inline-block;
    margin-right: 10px;
  }
  .list-complete-enter, .list-complete-leave-to
    /* .list-complete-leave-active for below version 2.1.8 */ {
    opacity: 0;
    transform: translateY(30px);
  }
  .list-complete-leave-active {
    position: absolute;
  }

  .list-item {
    display: inline-block;
    margin-right: 10px;
  }
  .list-enter-active, .list-leave-active {
    transition: all 1s;
  }
  .list-enter, .list-leave-to
    /* .list-leave-active for below version 2.1.8 */ {
    opacity: 0;
    transform: translateY(30px);
  }
</style>
