<template>
    <div>
        <h1>{{hello}} world</h1>
        <compontent-g></compontent-g>
    </div>
</template>
<script type="es6">
    export default {
        name: 'helloWorld',
        data(){
            return {
                hello: 'Hello'
            }
        },
    }

</script>
<style scoped>
  h1{
    text-align: center;
      font-weight: bold;
      color: #ff0;
  }
</style>