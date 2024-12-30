<template>
  <div class="not-found">
    <h1>404 - 페이지를 찾을 수 없습니다.</h1>
    <p>요청한 페이지는 존재하지 않습니다.</p>
    <router-link to="/">홈으로 돌아가기</router-link>
  </div>
</template>

<script>
export default {
  name: 'NotFound',
};
</script>

<style scoped>
.not-found {
  text-align: center;
  padding: 20px;
  margin-top: 50px;
}

.not-found h1 {
  font-size: 3rem;
  color: #f44336;
}

.not-found p {
  font-size: 1.5rem;
}

.not-found a {
  font-size: 1.2rem;
  color: #1976d2;
  text-decoration: none;
}

.not-found a:hover {
  text-decoration: underline;
}
</style>
