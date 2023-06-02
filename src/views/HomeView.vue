<template>
  <div class="home">
    <div class="container">
      <div class="users-list">
        <button class="main-lottery__btn" @click="getDuet">Get duet</button>
        <div
            class="users-list__user"
            v-for="(user, index) in users"
            :class="{
              active: index === currentAnimIndex,
              chosen: index === chosenUserIndex,
            }"
        >
          <img :src="user.photo" alt="" />
          <p>{{ user.name }}</p>
        </div>
      </div>
      <div class="main-lottery">
        <div class="main-lottery__user" v-for="(user, index) in currentDuet">
          <img class="main-lottery__user-photo" :src="user.photo" alt="">
          <p class="main-lottery__user-name">{{user.name}}</p>
        </div>
      </div>

      <div class="selected-duets">
        <div class="selected-duets__duet" v-for="duet in chosenDuets">
          <div class="selected-duets__duet-item" v-for="user in duet">
            <img :src="user.photo" alt="" class="selected-duets__duet-photo" />
            <p class="selected-duets__duet-name"> {{user.name}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";

@Component({
  name: "HomeView",
  components: { },
})
export default class HomeView extends Vue {
  currentAnimIndex: number | null = null;
  chosenUserIndex: number | null = null;
  users = [
    {
      name: "Vladyslav Kukhlii",
      photo: "https://lh3.googleusercontent.com/pw/AJFCJaX3DQEZgXQfJHTS0AuXWjDLD7OHujpOnpWF0hOYczJ011WL4AnCxNfDgE_vXgrfQ73V3prh0NqVrnYdQy5eFzmNjaU76NUnVFntjhXylL37oeCqnlDDmN58pYpqlQgCT9a92XtFFz7PgxjCd26RseU=w645-h969-s-no?authuser=1",
    },
    {
      name: "Alex Protasenya",
      photo: "https://lh3.googleusercontent.com/pw/AJFCJaW85mQppsgeMx4SSbwZB08zY__BjCA5jjdc6mCJCKGwDLfUNCVtKMDjoj9089hlmhPtps1t9jUb3Ls6EiN3Q6m65YHvCf7_IePV8iextHvVs6Vyx4aLDm3x5f-JykaDnMH43WSbuId0Ig28FBAMdWE=w631-h969-s-no?authuser=1",
    },
    {
      name: "Jimmy Page",
      photo: "https://lh3.googleusercontent.com/pw/AJFCJaX3DQEZgXQfJHTS0AuXWjDLD7OHujpOnpWF0hOYczJ011WL4AnCxNfDgE_vXgrfQ73V3prh0NqVrnYdQy5eFzmNjaU76NUnVFntjhXylL37oeCqnlDDmN58pYpqlQgCT9a92XtFFz7PgxjCd26RseU=w645-h969-s-no?authuser=1",
    },
    {
      name: "Robert Plant",
      photo: "https://lh3.googleusercontent.com/pw/AJFCJaW85mQppsgeMx4SSbwZB08zY__BjCA5jjdc6mCJCKGwDLfUNCVtKMDjoj9089hlmhPtps1t9jUb3Ls6EiN3Q6m65YHvCf7_IePV8iextHvVs6Vyx4aLDm3x5f-JykaDnMH43WSbuId0Ig28FBAMdWE=w631-h969-s-no?authuser=1",
    },
    {
      name: "Jimmy Page",
      photo: "https://lh3.googleusercontent.com/pw/AJFCJaX3DQEZgXQfJHTS0AuXWjDLD7OHujpOnpWF0hOYczJ011WL4AnCxNfDgE_vXgrfQ73V3prh0NqVrnYdQy5eFzmNjaU76NUnVFntjhXylL37oeCqnlDDmN58pYpqlQgCT9a92XtFFz7PgxjCd26RseU=w645-h969-s-no?authuser=1",
    },
    {
      name: "Robert Plant",
      photo: "https://lh3.googleusercontent.com/pw/AJFCJaW85mQppsgeMx4SSbwZB08zY__BjCA5jjdc6mCJCKGwDLfUNCVtKMDjoj9089hlmhPtps1t9jUb3Ls6EiN3Q6m65YHvCf7_IePV8iextHvVs6Vyx4aLDm3x5f-JykaDnMH43WSbuId0Ig28FBAMdWE=w631-h969-s-no?authuser=1",
    }
  ];
  currentDuet: any = [];
  chosenDuets: any = [];
  runAnimation() {
    const interval = setInterval(() => {
      this.currentAnimIndex = Math.floor(Math.random() * (this.users.length));
    }, 100);
    setTimeout(() => {
      clearInterval(interval);
      this.chosenUserIndex = this.currentAnimIndex;
      setTimeout(() => {
        this.currentDuet.push(this.users[this.currentAnimIndex as number]);
        this.users.splice(this.currentAnimIndex as number, 1);
        this.chosenUserIndex = null;
        this.currentAnimIndex = null;
        if (this.currentDuet.length < 2) this.runAnimation();
        if (this.users.length === 0) {
          this.chosenDuets.push(this.currentDuet);
          this.currentDuet = [];
        }
      }, 600)
    }, 10000)
  }
  getDuet() {
    if (this.currentDuet.length) {
      this.chosenDuets.push(this.currentDuet);
      this.currentDuet = [];
    }
    this.runAnimation();
  }
}
</script>
<style lang="scss">
.home{
  padding: 32px;
}
.main-lottery {
  display: flex;
  gap: 80px;
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  &__user {
    max-width: 350px;
  }
  &__user-photo {
    padding: 20px;
    display: block;
    width: 100%;
    background-color: #c0c0c0;
  }
  &__user-name {
    font-size: 32px;
    text-align: center;
    margin-top: 20px;
    padding: 12px;
    background-color: #c0c0c0;
  }
  &__btn {
    width: 50px;
    height: 50px;
    background-color: #D60C31;
    color: #fff;
    border-radius: 50%;
    border: none;
  }
}
.selected-duets {
  display: flex;
  gap: 32px;
  margin-top: 32px;
  &__duet {
    display: flex;
    gap: 12px;
    position: relative;
  }
  &__duet-item {
    max-width: 200px;
    background-color: #c0c0c0;
    padding: 12px;
    position: relative;
  }
  &__duet + &__duet {
    &:after {
      height: 80%;
      border-left: 2px solid #2c3e50;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 100%;
      margin-right: 16px;
      content: "";
    }
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
.users-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 20px;
  &__user {
    max-width: 158px;
    width: 100%;
    border: 4px solid #c0c0c0;
    transition: 0.1s;
    img {
      display: block;
      width: 150px;
      height: 150px;
      overflow: hidden;
      object-fit: cover;
      object-position: top;
    }
    p {
      text-align: center;
      padding: 8px;
      background-color: #fff;
      border-top: 4px solid #c0c0c0;
    }
    &.active {
      border: 4px solid #D60C31;
    }
    &.chosen {
      z-index: 2;
      transform: scale(3);
    }
  }
}
</style>
