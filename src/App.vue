<template>
  <div id="app">
    <Audio ref="audioRef" />
    <div class="banner" :class="{ active: isBanner }">
      <button class="start-game" @click="startGame">
        Start game
      </button>
    </div>
    <Loading v-if="isLoading" />
    <Header />
    <router-view v-if="isView"/>
  </div>
</template>

<style>
</style>
<script lang="ts">
import Header from "@/components/Header/Header.vue";
import Component from "vue-class-component";
import Vue from 'vue';
import Loading from "@/components/Loading/Loading.vue";
import Audio from "@/components/Audio/Audio.vue";
@Component({
  name: "App",
  components: {Audio, Loading, Header},
})
export default class App extends Vue {
  isBanner = false;
  isLoading = false;
  isView = false;
  startGame(): void {
    this.isBanner = false;
    this.isLoading = true;
    this.$refs.audioRef.playAudio();
    setTimeout(() => {
      this.isLoading = false;
      this.isView = true;
    }, 12000)
  }
  mounted(): void {
    if (this.$route.name === "game") {
      this.isBanner = true;
    } else {
      this.isView = true;
    }
  }
}
</script>
<style lang="scss">
.banner {
  position: fixed;
  top: 0;
  left: 0;
  background-image: url('~@/assets/background.png');
  background-size: cover;
  width: 100%;
  height: 100%;
  z-index: 2;
  opacity: 0;
  visibility: hidden;
  transition: 1s;
  &.active {
    opacity: 1;
    visibility: visible;
 }
}
.start-game {
  width: 350px;
  height: 350px;
  background-color: #D60C31;
  background-image: radial-gradient(#3b5fd9, #2e1b5b);
  color: #fff;
  font-size: 40px;
  font-family: inherit;
  border-radius: 50%;
  border: none;
  position: absolute;
  top:50%;
  left: 50%;
  line-height: 2;
  text-align: center;
  transform: translate(-50%,-50%);
  cursor: pointer;
  z-index: 2;
  transition: 0.3s;
  &:after {
    width: 100%;
    height: 100%;
    position: absolute;
    background-image: radial-gradient(#9237c9,#9237c9, #d0368a);
    z-index: -1;
    opacity: 0;
    top: 0;
    left: 0;
    border-radius: 50%;
    transition: 0.3s;
    content: "";
  }
  &:hover:after {
    opacity: 1;
  }
}
</style>
