<template>
  <div class="song-card">
    <p class="song-card__title">{{item.title}}</p>
    <div class="song-card__items">
      <BntTab
          v-if="item.gtp"
          :link="item.gtp"
          class="song-card__item"
      >
        GTP
      </BntTab>
      <BntTab
          v-if="item.pdf.length"
          type="button"
          class="song-card__item"
          @click.native="openModal('pdf',item.pdf)"
      >
        PDF
      </BntTab>
      <BntTab
          v-if="item.words"
          type="button"
          class="song-card__item"
          @click.native="openModal('words', item.words)"
      >
        LYRICS
      </BntTab>
    </div>
  </div>
</template>
<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";
import {Prop} from "vue-property-decorator";
import BntTab from "@/components/BtnTab/BntTab.vue";
@Component({
  name: "GridItem",
  components: {BntTab},
})
export default class GridItem extends Vue {
  @Prop(Object) item!: any;
  openModal(modalName: string, data: any): void {
    this.$emit("openModal",modalName, data);

  }
}
</script>
<style lang="scss" src="./SongCard.scss" />
