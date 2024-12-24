<script>
// @ is an alias to /src
import myVue from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    myVue
  }
}
</script>

<template>
  <div class="home">
    <myVue msg="SSOMI's Guide"/>
  </div>
</template>

<style lang="scss">
  .home{
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100dvh - 5.5rem);
    background-color: #222;
  }
</style>