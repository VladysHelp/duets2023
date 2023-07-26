<template>
  <div class="loading__audio">
    <div class="audio-controls">
      <p>Player</p>
      <div class="audio-controls__play" v-if="!isPlay" @click="play"/>
      <div class="audio-controls__play pause" v-else @click="pause"/>
      <div class="audio-controls__play next" @click="nextSong"/>
      <p class="audio-controls__song-name" title="songName">{{ songName }}</p>
    </div>
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
  play() {
    playerModule.playSong();
  }
  pause() {
    playerModule.pauseSong();
  }
  nextSong() {
    playerModule.nextSong();
  }
  get isPlay(): boolean {
    return playerModule.isPlay;
  }
  get songName(): string {
    return playerModule.songName;
  }
  mounted(): void {
    playerModule.setPlayerAction(this.$refs.audioRef);
  }
}
</script>
<style scoped lang="scss">
.audio-controls {
  z-index: -1;
  position: fixed;
  bottom: 20px;
  left: 20px;
  min-width: 250px;
  max-width: 350px;
  padding: 16px;
  background-color: cadetblue;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 10px;
  &__play {
    display: flex;
    cursor: pointer;
    margin-left: auto;
    &:before {
      font-size: 24px;
      transform: rotate(90deg);
      content: "\25b2";
    }
    &.pause {
      &:before {
        content: "||";
        letter-spacing: -10px;
        font-weight: 800;
        transform: none;
      }
    }
    &.next {
      margin-left: 0;
      &:before {
        content: ">|";
        letter-spacing: -10px;
        font-weight: 800;
        transform: none;
      }
    }
  }
  &__song-name {
    width: 100%;
    font-size: 12px;
    white-space: nowrap;
    color: yellow;
    text-overflow: ellipsis;
    overflow: hidden;
  }
}
</style>
