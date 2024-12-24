<script>
</script>
<template>
  <article class="guide">
    <h2>Text</h2>
    <p class="guide-txt">
      가독성을 고려하여 폰트의 Size와 Weight를 텍스트 스타일로 지정해 디자인과 개발 효율을 높이는 것을 목표로 합니다.<br>
      1줄이상의 행간값은 동일하게 가져가며, 디바이스의 너비에 따라 확대 또는 축소됩니다. <br>
      가이드 행간은 너비 375px을 기준이며, 1px=0.1rem으로 퍼블에서 적용된다. <br>
      예) 360px 너비에서 행간은 0.09rem으로 적용됩니다.
    </p>

    <h3>heading</h3>
    <div class="guide-box">
      <div class="guide-wrap">
        <h1 class="h-1"><guide></guide>Heading 1</h1>
        <h2 class="h-2"><guide></guide>Heading 2</h2>
        <h3 class="h-3"><guide></guide>Heading 3</h3>
        <h4 class="h-4"><guide></guide>Heading 4</h4>
        <h5 class="h-5"><guide></guide>Heading 5</h5>
      </div>
    </div>

    <h3>body Text</h3>
    <div class="guide-box">
      <div class="guide-wrap">
        <p class="body-1-700"><guide></guide>body 1-700</p>
        <p class="body-1-400"><guide></guide>body 1-400</p>
        <hr class="line">
        <p class="body-2-700"><guide></guide>body 2-700</p>
        <p class="body-2-500"><guide></guide>body 2-500</p>
        <p class="body-2-400"><guide></guide>body 2-400</p>
        <p class="body-2-300"><guide></guide>body 2-300</p>
        <hr class="line">
        <p class="body-3-700"><guide></guide>body 3-700</p>
        <p class="body-3-500"><guide></guide>body 3-500</p>
        <p class="body-3-400"><guide></guide>body 3-400</p>
        <hr class="line">
        <p class="body-4-700"><guide></guide>body 4-700</p>
        <p class="body-4-500"><guide></guide>body 4-500</p>
        <p class="body-4-400"><guide></guide>body 4-400</p>
        <p class="body-4-300"><guide></guide>body 4-300</p>
      </div>
    </div>

    <h3>em Text</h3>
    <div class="guide-box">
      <div class="guide-wrap">
        <em class="em-1"><guide></guide>em 1</em>
      </div>
    </div>

    <h3>caption Text</h3>
    <div class="guide-box">
      <div class="guide-wrap">
        <p class="cpt-1-400"><guide></guide>caption 1-400</p>
        <p class="cpt-1-300"><guide></guide>caption 1-300</p>
        <p class="cpt-2"><guide></guide>caption 2</p>
      </div>
    </div>
  </article>
</template>

<style scoped lang="scss">
  .guide{
    padding: 3rem 2.4rem;
    > h2{
      font-size: 2rem;
      font-weight: 700;
      color: #000;
    }
    > h3{
      font-size: 1.6rem;
      font-weight: 500;
      color: #000;
      margin-top: 2rem;
    }
    > h4{
      margin-bottom: .8rem;
    }
    .guide-txt{
      font-size: 1.2rem;
      font-weight: 300;
      color: #000;
    }
    &-box{
      padding: 2.4rem;
      margin-top: 2rem;
      border: 0.1rem dashed #919191;
      border-radius: 1.2rem;
    }
    &-wrap{
      display: flex;
      flex-direction: column;
      gap: 1.6rem;
      position: relative;
    }
  }

  .line{
    display: block;
    width: 100%;
    padding: 0;
    margin: 2.4rem auto;
    border-top: .1rem solid #eee;
  }
</style>