<template>
  <div class="duets">
    <div class="duets__duet" v-for="duet in duets">
      <div class="duets__duet-item" v-for="user in duet">
        <img :src="user.photo" alt="" class="duets__duet-photo" />
        <p class="duets__duet-name"> {{user.name}}</p>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";
import duets2023 from "@/constants/duets";

@Component({
  name: "Duets",
  components: { },
})
export default class Duets extends Vue {
  duets = [];
  mounted(): void {
    if (duets2023.length) {
      this.duets = duets2023;
    } else {
      const duets = localStorage.getItem("duets");
      if (duets) {
        this.duets = JSON.parse(duets);
      }
    }
  }
}

</script>
<style lang="scss">
.duets {
  padding: 40px;
  gap: 32px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  position: relative;

  &__duet {
    display: flex;
    gap: 12px;
    position: relative;
    &:after {
      position: absolute;
      left: 50%;
      bottom: 100%;
      transform: translateX(-50%);
      width: 150px;
      height: 20px;
      border: 5px solid #fff;
      border-bottom: none;
      content: "";
    }
  }
  &__duet-item {
    max-width: 200px;
    background-color: #c0c0c0;
    padding: 12px;
    position: relative;
  }
  &__duet-photo{
    display: block;
    width: 100%;
  }
  &__duet-name {
    padding: 4px;
    text-align: center;
  }
}
</style>
