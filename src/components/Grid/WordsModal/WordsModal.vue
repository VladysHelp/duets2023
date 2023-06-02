<template>
  <div class="modal words-modal" v-show="isModalOpened">
    <div class="modal__back" @click="close"></div>
    <div class="modal__content">
      <div class="modal__header">
        {{title}}
      </div>
      <div class="modal__body">
        <pre>{{words}}</pre>
      </div>
      <div class="modal__footer">
        <Button @click="close">Close</Button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Button from "@/components/Button/Button.vue";
import Component from "vue-class-component";
import { Prop, PropSync} from "vue-property-decorator";
import Vue from "vue";
@Component({
  name: "WordsModal",
  components: {
    Button
  }
})
export default class WordsModal extends Vue {
  @Prop(String) title!: string;
  @Prop(String) words!: string;
  @PropSync("model") isModalOpened!: boolean;
  close(): void {
    this.isModalOpened = false;
  }
}

</script>
<style src="./WordsModal.scss" lang="scss"/>
