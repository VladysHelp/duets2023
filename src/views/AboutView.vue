<template>
  <div class="about">
    <div class="about__top-bg"/>
    <div class="about__bottom-bg"/>
    <router-link to="/" class="about__link"><img src="~@/assets/Arrow.png" alt=""> Back to Menu</router-link>
    <div class="about__content">
      <h1>Правила</h1>
      <p>I. Один гравець бере участь лише в одному дуеті.</p>
      <p>II. Кожен дует виконує дві пісні в різних жанрах.</p>
      <p>III. Партнера по дуету після оголошення дуету змінити не можна.</p>
      <div class="about__img">
        <img src="~@/assets/tumblr.gif">
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.about {
  margin: 30px auto 0;
  padding-top: 330px;
  position: relative;
  display: block;
  zoom: 0.4;
  &__link {
    display: flex;
    align-items: center;
    gap: 28px;
    img {
      max-width: 100px;
    }
    font-size: 36px;
    position: absolute;
    color: #fff;
    text-decoration: none;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }
  h1 {
    font-size: 50px;
    margin-bottom: 80px;
    text-align: center;
  }
  &__img{
    margin-top: 40px;
    max-width: 300px;
    display: flex;
    margin-left: auto;
    img {
      width: 100%;
      display: block;
      object-fit: contain;
      margin-left: auto;
    }
  }
  &__content {
    width: 100%;
    padding: 90px 40px;
    max-width: 1889px;
    margin: 0 auto;
    border-left: 4px solid #ffeecc;
    animation: 2s animScroll forwards;
    animation-delay: 1s;
    background: #ffd9a4;
    max-height: 0;
    overflow: hidden;
    p {
      font-size: 36px;
      line-height: 2;
      & + p {
        margin-top: 80px;
      }
    }
  }
  &__top-bg, &__bottom-bg {
    position: absolute;
    width: 3005px;
    height: 460px;
    left: 50%;
    top: 0;
    margin-left: 5px;
    transform: translateX(-50%);
    background-image: url("~@/assets/Untitled-2-clean.png");
    background-size: cover;
  }
  &__bottom-bg {
    left: 50%;
    top: auto;
    bottom: 0;
    margin-left: 5px;
    transform: translateX(-50%) translateY(80%) rotate(180deg);
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
    min-height: 1200px;
  }
}
</style>
