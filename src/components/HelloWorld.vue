<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  h1{
    font-family: 'base';
    font-size: 10rem;
    color: #dedbd1;
    word-break: break-word;
    text-align: center;
    @media (max-width: 750px) {
      font-size: 8rem;
    }
  }

</style>
