<template>
  <div id="app">
    <viewHeader :text="headerTest" :numb="num" @update:num="val => num = val"></viewHeader>
    <div class="viewMain">
      <select name="" id="">
        <option value="1">{{num}}</option>
        <compontent-g></compontent-g>
        <optionC></optionC>
      </select>
      <compontent-slot>
        <p>这是一个插槽</p>
      </compontent-slot>
      <router-view/>
    </div>
    <viewFooter v-on:tabIsChange="changeHeader"></viewFooter>
  </div>
</template>

<script type="es6">
  import viewHeader from "./components/header.vue"
  import viewFooter from "./components/footer.vue"
  import optionC from "./components/option.vue"

  export default {
  name: 'app',
  data () {
    return {
      num:1,
      headerTest: 'main'
    }
  },
  components:{ viewHeader,viewFooter,optionC },
    methods:{
      changeHeader(msg){
        console.log(msg);
        this.headerTest=msg.tab.text;
      }
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.viewMain{
  padding: 50px 0;
}
  .viewMain>img{
    width: 20px;
  }
</style>
