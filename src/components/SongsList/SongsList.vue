<template>
  <div class="songs-list">
    <Button type="router-link" to="/">
      Home
    </Button>
    <div class="songs-list__topbar">
      <Button type="router-link" to="songs/editor">
        Add New
      </Button>
    </div>
    <div class="songs-list__items">
      <router-link
          :to="`songs/editor/${index}`"
          class="songs-list__item"
          v-for="(song, index) in songs"
          :key="song.title"
      >
        {{ song.title }}
      </router-link>
    </div>
  </div>
</template>
<script lang="ts">
import SongsModule from "@/store/songs";
import Component from "vue-class-component";
import Vue from "vue";
import Button from "@/components/Button/Button.vue";
@Component({
  name: "SongsList",
  components: {Button},
})
export default class SongsList extends Vue {
  get songs(): any {
    return SongsModule.getSongs;
  }

  mounted(): void {
    SongsModule.fetchSongs();
  }
}
</script>
<style lang="scss" src="./styles.scss" />
