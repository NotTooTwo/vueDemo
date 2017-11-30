<template>
    <div>
      <h1>INDEX</h1>
      <ul class="list">
        <li v-for="item in list">
          <div>{{item.title}}</div>
          <p>{{item.info}}</p>
        </li>
      </ul>
    </div>
</template>
<script type="es6">
export default {
  name: 'indexView',
  data(){
    return {
      list:[
        {
          title:'title',
          info:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad animi delectus dolorem, ducimus eligendi, hic ipsum iure labore nam non nulla odit perspiciatis possimus, quisquam sed tempora temporibus vitae voluptatibus!'
        },
        {
          title:'title1',
          info:'Lorem1 ipsum dolor sit amet, consectetur adipisicing elit. Ad animi delectus dolorem, ducimus eligendi, hic ipsum iure labore nam non nulla odit perspiciatis possimus, quisquam sed tempora temporibus vitae voluptatibus!'
        },
        {
          title:'title2',
          info:'Lorem2 ipsum dolor sit amet, consectetur adipisicing elit. Ad animi delectus dolorem, ducimus eligendi, hic ipsum iure labore nam non nulla odit perspiciatis possimus, quisquam sed tempora temporibus vitae voluptatibus!'
        },
        {
          title:'title3',
          info:'Lorem3 ipsum dolor sit amet, consectetur adipisicing elit. Ad animi delectus dolorem, ducimus eligendi, hic ipsum iure labore nam non nulla odit perspiciatis possimus, quisquam sed tempora temporibus vitae voluptatibus!'
        }
      ]
    }
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
