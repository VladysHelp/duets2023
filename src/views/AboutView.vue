<template>
  <div class="about">
    <div class="about__top-bg"/>
    <p>I. Один гравець бере участь лише в одному дуеті.</p>
    <p>II. Кожен дует виконує дві пісні в різних жанрах.</p>
    <p>III. Партнера по дуету після оголошення дуету змінити не можна.</p>
  </div>
</template>
<style lang="scss">
.about {
  background: #ffd9a4;
  overflow: hidden;
  max-height: 0;
  width: 741px;
  margin: 30px auto 0;
  padding: 20px;
  padding-top: 150px;
  border-left: 4px solid #ffeecc;
  animation: 2s animScroll forwards;
  animation-delay: 1s;
  p {
    margin: 30px;
    font-size: 16px;
    line-height: 1.5;
  }
  &__top-bg {
    position: absolute;
    width: 1182px;
    height: 184px;
    left: 50%;
    top: 90px;
    margin-left: 5px;
    transform: translateX(-50%);
    background-image: url("~@/assets/Untitled-2-clean.png");
    background-size: cover;
  }
}
@keyframes animScroll {
  from {
    max-height: 0;
    min-height: 0;
  }
  to {
    max-height: calc(100vh - 130px);
    min-height: 600px;
  }
}
</style>
