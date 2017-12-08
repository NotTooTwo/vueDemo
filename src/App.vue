<template>
  <div id="app">
    <!--<viewHeader :text="headerTest" :numb="num" @update:num="val => num = val"></viewHeader>-->
    <div class="viewMain">
      <!--<transitionOpacity>-->
        <!--<keep-alive>-->
          <!--<component :is="currentView" :key="currentView"></component>-->
        <!--</keep-alive>-->
      <!--</transitionOpacity>-->
      <!--<mainView :is="currentView"></mainView>-->
      <!--<select name="" id="">-->
        <!--<option value="1">{{num}}</option>-->
        <!--<compontent-g></compontent-g>-->
        <!--<optionC></optionC>-->
      <!--</select>-->
      <!--<compontent-slot>-->
        <!--<p>这是一个插槽</p>-->
      <!--</compontent-slot>-->
      <!--缓存组件-->
      <!--<transitionOpacity>-->
        <!--<keep-alive >-->
          <!--<router-view v-if="$route.meta.keepAlive"></router-view>-->
        <!--</keep-alive>-->
      <!--</transitionOpacity>-->
      <!--<transitionOpacity>-->
        <!--<router-view v-if="!$route.meta.keepAlive"></router-view>-->
      <!--</transitionOpacity>-->
      <transitionOpacity>
        <router-view></router-view>
      </transitionOpacity>
    </div>
    <!--<viewFooter v-on:tabIsChange="changeHeader"></viewFooter>-->
    <div id="viewFooter" v-show="$route.meta.navShow">
      <router-link tag="span" active-class="active" v-for="(item,key) in tab" :key="item.text"  :to="item.link" @click="tabChange(key)" exact>{{item.text}}</router-link>
    </div>
  </div>
</template>

<script type="es6">
  import viewFooter from "./components/footer.vue"
  import transitionOpacity from './components/transition/opacity.vue'
  import animate from 'animate.css'

  export default {
    name: 'app',
    data () {
      return {
        num: 1,
        headerTest: 'indexView',
        currentView: 'indexView',
        tab:[
          {text:'indexView',link:'/'},
          {text:'mainView',link:'/mainView'},
          {text:'myView',link:'/myView/evan'}
        ],
        activeTab:0
      }
    },
    watch: {
      '$route' (to, from) {
        // 对路由变化作出响应...
        //console.log(to,from)
      }
    },
    components: {viewFooter,transitionOpacity},
    methods: {
      changeHeader(msg){
        this.headerTest = msg.tab.text;
      },
      tabChange(key){
        this.activeTab=key;
        //this.$emit('tabIsChange',{
        //  tab: this.tab[key]
        //})
      }
    },

  }
</script>

<style>
  #viewFooter{
    width: 100%;
    height: 50px;
    line-height: 50px;
    font-size: 15px;
    font-weight: bold;
    text-align: center;
    /*border-top: 1px solid #35495E;*/
    color: #fff;
    position: fixed;
    bottom: 0;
    left: 0;
    display: -webkit-flex;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  #viewFooter>span{
    flex: 1;
    height: 100%;
    background: #789;
    color: #fff;
    transition: all 0.5s
  }
  #viewFooter>span.active{
    background: #35495E;
  }
  #viewFooter>span:not(:last-child){
    border-right: 1px solid #fff;
  }
  #app {
    font-size: 1.4rem;
    color: #2c3e50;
  }
  .viewMain{
    padding:0 0 50px;
  }
  .viewMain>img{
    width: 20px;
  }

</style>
