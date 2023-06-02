<template>
  <div class="grid">
    <SongCard
        v-for="item in songs"
        :item="item"
        @openModal="openModal"
    />
    <ItemsModal
        :items="modalItems"
        :model.sync="isItemsModalOpened"
        title="Choose Items"
    />
    <WordsModal
        :model.sync="isWordsModalOpened"
        title="Words"
        :words="currentWords"
    />
    <Loading :model="isLoading"/>
  </div>
</template>
<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";
import SongCard from "@/components/Grid/SongCard/SongCard.vue";
import ItemsModal from "@/components/Grid/ItemsModal/ItemsModal.vue";
import WordsModal from "@/components/Grid/WordsModal/WordsModal.vue";
import SongsModule from "@/store/songs";
import Loading from "@/components/Loading/Loading.vue";
@Component({
  name: "Grid",
  components: {Loading, WordsModal, ItemsModal, SongCard},
})
export default class Grid extends Vue {
  modalItems = [];
  currentWords = "";
  isItemsModalOpened = false;
  isWordsModalOpened = false;
  openModal(modalName: string, data: any) {
    console.log(modalName, data);
    switch (modalName) {
      case "words":
        this.currentWords = data;
        this.isWordsModalOpened = true;
        break;
      default:
        this.modalItems = data;
        this.isItemsModalOpened = true;
        break;
    }
  }
  get songs(): any {
    return SongsModule.getSongs;
  }
  get isLoading(): boolean {
    return SongsModule.isSongLoading;
  }
  mounted(): void {
    SongsModule.fetchSongs();
  }
}
</script>
<style lang="scss">
  .grid {
    padding: 40px 20px;
    border: 1px solid #ccc;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 20px;
  }
</style>
