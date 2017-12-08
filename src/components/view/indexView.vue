<template>
    <div>
      <anchored-heading :level="2">INDEX</anchored-heading>
      <keep-alive>
        <bolls key="boll1"></bolls>
      </keep-alive>
      <ul class="list">
        <li v-for="item in list"  :key="item.title" @click="jumpTo(item.id,item.components)">
          <!--<router-link :to="'/newDetail/'+item.id"  v-for="item in list"  :key="item.title" tag="li">-->
            <div>{{item.title}}</div>
            <p>{{item.info}}</p>
          <!--</router-link>-->
        </li>
        <li v-for="item in list"  :key="item.title" @click="jumpTo(item.id,item.components)">
          <div>{{item.title}}</div>
          <p>{{item.info}}</p>
        </li>
        <li v-for="item in list"  :key="item.title" @click="jumpTo(item.id,item.components)">
          <div>{{item.title}}</div>
          <p>{{item.info}}</p>
        </li>
        <li v-for="item in list"  :key="item.title" @click="jumpTo(item.id,item.components)">
          <div>{{item.title}}</div>
          <p>{{item.info}}</p>
        </li>
        <li v-for="item in list"  :key="item.title" @click="jumpTo(item.id,item.components)">
          <div>{{item.title}}</div>
          <p>{{item.info}}</p>
        </li>
        <li v-for="item in list"  :key="item.title" @click="jumpTo(item.id,item.components)">
          <div>{{item.title}}</div>
          <p>{{item.info}}</p>
        </li>
      </ul>
    </div>
</template>
<script type="es6">
  import Vue from 'vue'
  import bolls from '../some/bolls.vue'

  Vue.component('anchoredHeading', {
    render: function (createElement) {
      return createElement(
        'h' + this.level,   // tag name 标签名称
        this.$slots.default // 子组件中的阵列
      )
    },
    props: {
      level: {
        type: Number,
        required: true
      }
    }
  })

export default {
  name: 'indexView',
  data(){
    return {
      list:[
        {
          id:1,
          title:'title',
          components:'bolls',
          info:'Lorem perspiciatis possimus, quisquam sed tempora temporibus vitae voluptatibus!'
        }
      ]
    }
  },
  methods:{
    jumpTo(id,components){
      console.log( this.$router)
      this.$router.push({
        name:'newDetail',
        params:{id,components}
      })
    }
  },
  components:{bolls},
  updated () {
    this.$nextTick(function(){
      //let position = this.$store.state.position //返回页面取出来
      //window.scroll(0, position)
    })
  },
  beforeRouteEnter (to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建
    next(vm => {
      // 通过 `vm` 访问组件实例
    })
    console.log('index enter')
  },
  beforeRouteUpdate (to, from, next) {
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
    next(vm => {
      // 通过 `vm` 访问组件实例
    })
    console.log('index update')
  },
  beforeRouteLeave (to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
    let position = window.scrollY;
    //this.$store.commit('SAVE_POSITION', position) //vuex-离开路由时把位置存起来
    next(vm => {
      // 通过 `vm` 访问组件实例
    })
    console.log('index leave')
  }
}

</script>
<style scoped>
  .list{
    padding: 1.2rem;
    width: 100%;
  }
  .list>li{
    width:100%;
    margin: 0 auto;
    padding:1.2rem 0;
    border-bottom: 1px dashed #2c3e50;
  }
  .list>li>div{
    font-size: 1.5rem;
    font-weight: bold;
  }
  .list>li>p{
    font-size: 1.4rem;
  }
</style>
