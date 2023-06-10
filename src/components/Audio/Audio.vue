<template>
  <div class="loading__audio">
    <audio ref="audioRef">
      <source :src="audio" type="audio/mp3">
    </audio>
  </div>
</template>
<script lang="ts">
import audio from "@/assets/SYNTHWAVE_bude_pomig_nas.mp3";
import Component from "vue-class-component";
import playerModule from "@/store/player"
import Vue from "vue";
@Component({
  name: "Audio",
})
export default class Audio extends Vue {
  audio = audio;
  mounted(): void {
    playerModule.setPlayerAction(this.$refs.audioRef);
  }
}
</script>
