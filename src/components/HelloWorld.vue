<script>
export default {
  props: {
    msg: String
  }
}
</script>

<template>
 <div>
    <p class="bouncy-text">
      <span v-for="(char, index) in msg" :key="index">{{ char }}</span>
    </p>
  </div>
</template>

<style scoped lang="scss">
  .bouncy-text {
    font-size: 10rem;
    font-weight: bold;
    color: #dedbd1;
    display: inline-block;
    word-break: break-word;
    @media (max-width: 750px) {
      font-size: 8rem;
    }
    @media (max-width: 600px) {
      font-size: 4rem;
      span:nth-child(8) {margin-left: 2rem !important;}
    }
  }

  .bouncy-text span {
    display: inline-block;
    opacity: 0;
    animation: bounce 1s ease forwards;
  }

  .bouncy-text span:nth-child(1) {
    animation-delay: 0s;
  }
  .bouncy-text span:nth-child(2) {
    animation-delay: 0.1s;
  }
  .bouncy-text span:nth-child(3) {
    animation-delay: 0.2s;
  }
  .bouncy-text span:nth-child(4) {
    animation-delay: 0.3s;
  }
  .bouncy-text span:nth-child(5) {
    animation-delay: 0.4s;
  }
  .bouncy-text span:nth-child(6) {
    animation-delay: 0.5s;
  }
  .bouncy-text span:nth-child(7) {
    animation-delay: 0.6s;
  }
  .bouncy-text span:nth-child(8) {
    animation-delay: 0.7s;
    margin-left: 4rem;
  }
  .bouncy-text span:nth-child(9) {
    animation-delay: 0.8s;
  }
  .bouncy-text span:nth-child(10) {
    animation-delay: 0.9s;
  }
  .bouncy-text span:nth-child(11) {
    animation-delay: 1s;
  }

  @keyframes bounce {
    0%, 100% {
      transform: translateY(0);
      opacity: 1;
    }
    25% {
      transform: translateY(-.1rem);
      color: #222;
    }
    50% {
      transform: translateY(0);
    }
    75% {
      transform: translateY(-.5rem);
    }
  }
</style>