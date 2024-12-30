<script setup>
import myVueText from '@/components/HelloWorld.vue';

// 문자열 변수 선언
const animatedText = "SSOMI'sGuide";
</script>

<template>
  <div class="home">
    <!-- myVueText에 msg prop 전달 -->
    <myVueText :msg="animatedText" />
  </div>
</template>

<style scoped lang="scss">
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100dvh - 5.5rem);
  background-color: #222;
  padding: 1rem;
}
</style>
