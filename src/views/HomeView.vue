<template>
  <div class="home">
    <div class="home__menu">
      <Button
          class="home__btn"
          ui-type="green"
          @click="startGame"
      >
        New game
      </Button>
      <Button
          class="home__btn"
          ui-type="green"
          type="router-link"
          :disabled="!duets.length"
          to="/duets"
      >
        Saved games
      </Button>
      <Button
          class="home__btn"
          ui-type="green"
          type="router-link"
          to="/about"
      >
        Rules
      </Button>
      <Button
          class="home__btn"
          ui-type="green"
          type="router-link"
          to="/timer"
      >
        Timer
      </Button>
    </div>
  </div>
</template>
<script lang="ts">
import Button from "@/components/Button/Button.vue";
import Component from "vue-class-component";
import Vue from "vue";
import playerModule from "@/store/player"
import duets from "@/constants/duets";

@Component({
  name: "HomeView",
  components: {Button},
})
export default class HomeView extends Vue {
  duets = duets;
  startGame(): void {
    if (duets.length) {
      this.$router.push("/game");
      playerModule.playSong();
      console.log(duets);
    } else {
      playerModule.playSong();
      this.$router.push("/game");
    }
  }
}
</script>
<style lang="scss">
.home {
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  margin-top: 120px;
  &__menu-title {
    text-align: center;
    font-size: 40px;
    margin-bottom: 120px;
  }
  &__btn {
    justify-content: center;
    margin: 0 auto 40px;
    span {
      text-align: center;
    }
  }
}
</style>
