<template>
  <div v-show="isOpened" class="modal modal-items">
    <div class="modal__back" @click="close"></div>
    <div class="modal__content">
      <div class="modal__header">
        {{ title }}
      </div>
      <div class="modal__body">
        <div class="modal-items__items">
          <BntTab
              v-for="item in items"
              :link="item.link"
              :key="item.title"
              class="modal-items__item"
          >
            {{item.title}}
          </BntTab>
        </div>
      </div>
      <div class="modal__footer">
        <Button @click="close">Close</Button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";
import {Prop, PropSync} from "vue-property-decorator";
import Button from "@/components/Button/Button.vue";
import BntTab from "@/components/BtnTab/BntTab.vue";

@Component({
  name: "ItemsModal",
  components: {BntTab, Button},
})
export default class ItemsModal extends Vue {
  @Prop(String) title!: string;
  @Prop(Array) items!: any;
  @PropSync("model") isOpened!: boolean;
  close(): void {
    console.log("close");
    this.isOpened = false;
  }
}
</script>
<style lang="scss">
.modal-items{
  &__items {
    display: flex;
    flex-wrap: wrap;
  }
  &__item{
    margin-left: 16px;
  }
}
</style>
