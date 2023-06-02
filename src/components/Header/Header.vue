<template>
  <header class="header">
    <router-link to="/" class="header__logo">
      <img :src="logo" alt="logo">
    </router-link>
  </header>
</template>
<script>
import Component from "vue-class-component";
import Vue from 'vue';
import logo from "@/assets/rednote 1.svg";

@Component({
  name: "Header",
})
export default class Header extends Vue {
  logo = logo;
}
</script>
<style src="./styles.scss" lang="scss" />
