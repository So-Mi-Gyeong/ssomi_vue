<script>
import myVueText from '@/components/HelloWorld.vue'

export default {
  components: {
    myVueText
  },
  data() {
    return {
      animatedText: "SSOMI'sGuide"
    };
  }
}
</script>

<template>
  <div class="home">
    <myVueText msg="SSOMI'sGuide"/>
  </div>
</template>

<style scoped lang="scss">
  .home{
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100dvh - 5.5rem);
    background-color: #222;
  }
</style>