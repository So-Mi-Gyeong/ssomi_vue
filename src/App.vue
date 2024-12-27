<template>
  <div id="app">
    <article class="menu">
      <ul class="menu-list">
        <li><router-link class="menu-item" to="/">Home</router-link></li>
        <li><router-link class="menu-item" to="/about">Study</router-link></li>
        <li><router-link class="menu-item" to="/animation">Animation</router-link></li>

        <!-- guide -->
        <li><router-link class="menu-item" to="/guideButton">Button</router-link></li>
        <li><router-link class="menu-item" to="/guideText">Text</router-link></li>
        <!-- <li><router-link class="menu-item" to="/guideTooltip">Tooltip</router-link></li> -->
      </ul>
    </article>
    <router-view></router-view><!-- 이곳에 해당하는 컴포넌트가 렌더링됩니다 -->
  </div>
</template>
<style scoped lang="scss">
  .menu{
    width: 100%;
    min-height: 7rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: .5rem solid #dedbd1;
    background-color: #222;
    // background: linear-gradient(#fff 20%, rgba(255, 255, 255, 0.8) 50%, rgba(255, 255, 255, 0));
    position: relative;
    z-index: 99;
    overflow-x: auto;
    &-list{
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      gap: 1.6rem;
    }
    &-item{
      font: var(--font-b2-700);
      background-color: #000;
      padding: .8rem 1.6rem;
      border-radius: 5rem;
      color: #dedbd1;
    }

    @media screen and (max-width: 500px){
      min-height: 15rem;
    }
  }
</style>