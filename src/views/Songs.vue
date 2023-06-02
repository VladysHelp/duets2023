<template>
  <div class="container songs">
    <router-view/>
    <Loading :model="isLoading"/>
  </div>
</template>
<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";
import SongsModule from "@/store/songs";
import Loading from "@/components/Loading/Loading.vue";

@Component({
  name: "Songs",
  components: {Loading},
})
export default class Songs extends Vue {
  get isLoading(): boolean {
    return SongsModule.isSongLoading;
  }
}
</script>
<style lang="scss">
  .songs {
    padding-top: 20px;
  }
</style>
