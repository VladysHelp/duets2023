<template>
  <div>
    <a v-if="type === 'link'" :href="link" class="btn-tab">
      <slot/>
    </a>
    <button v-else class="btn-tab">
      <slot />
    </button>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import {Prop} from "vue-property-decorator";
@Component({
  name: "BtnTab",
})
export default class BtnTab extends Vue {
  @Prop({
    type: String,
    default: "link",
  }) type!: "link" | "button";
  @Prop( String) link!: string;
}
</script>
<style src="./BtnTab.scss" lang="scss" />
