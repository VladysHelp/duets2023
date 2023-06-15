<template>
  <div class="loading">
    <div class="loader-block">
      <div class="loader__sonic">
        <img src="~@/assets/sonic-sonic-waiting.gif">
      </div>
      <div class="loading__loader loader">
        <p class="loader__text">Loading.</p>
        <div class="loader__progress">
          <div class="loader__progress-bar"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import {Prop} from "vue-property-decorator";
@Component({
  name: "Button",
})
export default class Button extends Vue {
  @Prop(Boolean)model!: boolean;
}
</script>
<style lang="scss">
.loading {
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  background: #000;
  align-items: center;
  justify-content: center;
}
.loader-block {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.loader {
  &__sonic{
    margin: 0 auto;
    img {
      max-width: 250px;
    }
  }
  &__progress {
    width: 320px;
    margin-top: 40px;
    border-top: 4px solid #808080;
    border-bottom: 4px solid #808080;
    height: 40px;
    position: relative;
    &:after {
      position: absolute;
      height: 100%;
      border-left: 16px solid #808080;
      left: 100%;
      transform: translateX(-8px);
      top: 0;
      content: "";
    }
    &:before {
      position: absolute;
      height: 100%;
      border-left: 16px solid #808080;
      z-index: 1;
      right: 100%;
      transform: translateX(8px);
      top: 0;
      content: "";
    }
  }
  &__progress-bar {
    height: 100%;
    width: 0;
    position: relative;
    animation: 10s animLoading linear forwards;
    animation-delay: 2s;
    background: greenyellow;
  }
  &__text {
    color: #fff;
    width: 280.01px;
    padding-left: 40px;
    margin: 0 auto;
    font-size: 24px;
    &:after {
      animation: 5s animDotsLoading infinite;
      content: "";
    }
  }
}
.rednote-block {

}
@keyframes animLoading {
  0% {
    width: 0;
  }
  20% {
    width: 20%;
  }
  30% {
    width: 20%;
  }
  40% {
    width: 35%;
  }
  60% {
    width: 40%;
  }
  70% {
    width: 60%;
  }
  90% {
    width: 87%;
  }
  100% {
    width: 100%;
  }
}
@keyframes animDotsLoading {
  0% {
    content: "";
  }
  33% {
    content: "."
  }
  66% {
    content: ".."
  }
}
</style>

