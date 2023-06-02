<template>
  <div class="loading" v-show="model">
    <div class="loading__el">
      <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import {Prop} from "vue-property-decorator";
@Component({
  name: "Button",
})
export default class Button extends Vue {
  @Prop(Boolean)model!: boolean;
}
</script>
<style lang="scss" src="./styles.scss" />
