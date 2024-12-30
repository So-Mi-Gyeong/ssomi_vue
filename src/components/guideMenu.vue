<script setup>

</script>

<template>
  <article class="guidemenu">
    <ul class="guidemenu-list">
      <li><router-link class="guidemenu-item" to="/guideHome/guideButton">Button</router-link></li>
      <li><router-link class="guidemenu-item" to="/guideHome/guideText">Text</router-link></li>
    </ul>
  </article>
</template>

<style scoped lang="scss">
  .guidemenu{
    &-list{
      display: flex;
      justify-content: center;
      align-items: center;
      gap: .8rem;
      margin-top: 2rem;
      li{
        a{
          display: flex;
          justify-content: center;
          align-items: center;
          gap: .8rem;
          font: var(--font-b1-400);
          color: var(--gray_60);
          &::after{
            content: '|';
          }
        }
        &:last-child a::after{display: none;}
      }
    }
  }
</style>