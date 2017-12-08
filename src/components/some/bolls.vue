<template>
    <transition-group name="fade" tag="div">
      <canvas id="box" key="canvas"></canvas>
    </transition-group>
</template>
<script type="es6">
export default {
  name: 'transition-opacity',
  data(){
    return {

    }
  },
  mounted(){
    const canvas = document.getElementById('box');
    const ctx = canvas.getContext('2d');
    canvas.width = document.body.clientWidth;
    canvas.height = document.body.clientWidth;
    class Ball{
      //构造器
      constructor(x,y,color){
        this.x = x;
        this.y = y;
        this.color = color;
        this.r = 40
      }
      //绘制球
      render(){
        ctx.save();
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.r,0,Math.PI*2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.restore();
      }
    };
    //移动球//继承父类
    class MoveBall extends Ball{
      constructor(x,y,color){
        super(x,y,color);
        this.dX = _.random(-2,2);
        this.dY = _.random(-2,2);
        this.dR = _.random(1,2);
       }

      upData(){
        this.x += this.dX;
        this.y += this.dY;
        this.r -= this.dR;
        if(this.r < 0){
          this.r = 0
        }
      }
    }
    let ballArr = [];
    let colorArr = ['#f0f','#ff0','#a19','#e33','#8ae'];

    canvas.addEventListener('mousemove',function(e){
      let the = e || event;
     ballArr.push( new MoveBall(the.offsetX,the.offsetY,colorArr[_.random(0,colorArr.length-1)]));
      //boll.render();
    })
    setInterval(function () {
      ctx.clearRect(0,0,canvas.width,canvas.height);
      for( let i = 0;i<ballArr.length;i++){
        ballArr[i].render();
        ballArr[i].upData();
      }
    },10)
  },
  methods:{

  }
}

</script>
<style scoped>
  #box{
    margin:0 auto;
    background-color: #000;
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
</style>
