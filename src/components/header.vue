<template>
    <div id="viewHeader" @click="addNum">
      {{text}}{{numb}}
    </div>
</template>
<script type="es6">
export default {
  name: 'viewHeader',
  data(){
    return {
        numb:this.num
    }
  },
  props:{
    text:{
      type:String,
      default: function () {
        return "main"
      }
    },
    num:{
      default : function () {
        return 1
      }
    }
  },
  methods:{
    addNum(){
      this.numb+=1;
      this.$emit('update:num', this.numb)
    }
  }
}

</script>
<style>
  #viewHeader{
    width: 100%;
    height: 50px;
    line-height: 50px;
    font-size: 15px;
    font-weight: bold;
    text-align: center;
    background: #35495E;
    color: #fff;
    position: fixed;
    top: 0;
    left: 0;
  }
</style>