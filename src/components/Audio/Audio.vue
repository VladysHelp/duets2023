<template>
  <div class="loading__audio">
    <audio ref="audioRef" autoplay>
      <source :src="audio" type="audio/mp3">
    </audio>
  </div>
</template>
<script lang="ts">
import audio from "@/assets/SYNTHWAVE_bude_pomig_nas.mp3";
import audio2 from "@/assets/Volt_Age_Volt_s_Theme.mp3";
import Component from "vue-class-component";
import Vue from "vue";
@Component({
  name: "Audio",
})
export default class Audio extends Vue {
  audio = audio;
  tracks = [
    audio,
    audio2,
  ];
  loadTrack(index: number): void {
    this.$refs.audioRef.src = this.tracks[index];
  }
  playAudio(): void {
  let index = 0;
    this.$refs.audioRef.play();
    this.$refs.audioRef.addEventListener('ended', () => {
     if((index + 1) < this.tracks.length) {
       index++;
       this.loadTrack(index);
       this.$refs.audioRef.play();
     } else {
       index = 0;
       this.loadTrack(index);
       this.$refs.audioRef.play();
     }
   })
  }
}
</script>
