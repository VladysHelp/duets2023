<template>
  <div>
    <router-link to="/" class="duets__back"><img src="~@/assets/Arrow.png" alt=""> Back to Menu</router-link>
    <div class="duets">
      <div class="duets__duet" v-for="duet in duets">
        <div class="duets__duet-item" v-for="user in duet">
          <img :src="user.photo" alt="" class="duets__duet-photo" />
          <p class="duets__duet-name"> {{user.name}}</p>
        </div>
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
  gap: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  position: relative;

  &__duet {
    gap: 12px;
    position: relative;
    display: flex;
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
    display: flex;
    flex-direction: column;
  }
  &__duet-item:last-child &__duet-photo {
    transform: rotateY(180deg);
  }
  &__duet-photo{
    display: block;
    width: 100%;
    height: 270px;
    object-fit: cover;
  }
  &__duet-name {
    padding: 12px 4px;
    text-align: center;
    font-size: 12px;
    line-height: 1.5;
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &__back {
    display: flex;
    align-items: center;
    gap: 28px;
    padding-left: 40px;
    margin-bottom: 40px;
    img {
      max-width: 50px;
    }
    font-size: 24px;
    color: #fff;
    text-decoration: none;
  }
}
</style>
