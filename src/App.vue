<template>
  <div id="app">
    <Header />
    <router-view/>
  </div>
</template>

<style>
</style>
<script lang="ts">
import Header from "@/components/Header/Header.vue";
import Component from "vue-class-component";
import Vue from 'vue';
@Component({
  name: "App",
  components: {Header},
})
export default class App extends Vue {
  mounted(): void {
    console.log(process.env.BASE_URL);
  }
}
</script>
