<template>
    <div id="viewFooter">
      <span v-for="(item,key) in tab" :class="{active:activeTab===key}" @click="tabChange(key)">{{item.text}}</span>
    </div>
</template>
<script type="es6">
export default {
  name: 'viewFooter',
  data(){
    return {
      tab:[
        {text:'indexView'},
        {text:'mainView'},
        {text:'myView'}
      ],
      activeTab:0
    }
  },
  methods:{
    tabChange(key){
      this.activeTab=key;
      this.$emit('tabIsChange',{
        tab: this.tab[key]
      })
    }
  }
}

</script>
<style scoped>
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
  }
  #viewFooter>span.active{
    background: #35495E;
  }
  #viewFooter>span:not(:last-child){
    border-right: 1px solid #fff;
  }
</style>