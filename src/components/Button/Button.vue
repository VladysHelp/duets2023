<template>
  <button
      v-if="type === 'button'"
      :class="['button',uiType ? `button--${uiType}`: '']"
      @click="$emit('click')"
  >
    <span class="button__content">
      <slot />
    </span>
  </button>
  <router-link
      v-else-if="type === 'router-link'"
      :class="['button',uiType ? `button--${uiType}`: '']"
      :to="to"
  >
    <span class="button__content">
      <slot />
    </span>
  </router-link>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import {Prop} from "vue-property-decorator";
@Component({
  name: "Button",
})
export default class Button extends Vue {
  @Prop({
    type: String,
    default: "button",
  }) type!: "button" | "router-link";
  @Prop({
    type: String,
    default: "/",
  }) to!: string;
  @Prop({
    type: String,
    default: null
  }) uiType!: string;
}
</script>
<style lang="scss" src="./button.scss" />
