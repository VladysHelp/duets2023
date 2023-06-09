<template>
  <div class="home">
    <div class="main" :class="{ active: isMain }">
      <div class="users-list">
        <div
            class="users-list__user"
            v-for="(user, index) in users"
            :class="{
                active: index === currentAnimIndex,
                chosen: index === chosenUserIndex,
              }"
        >
          <img :src="user.photo" alt="" />
        </div>
      </div>
      <div class="cloud1" />
      <div class="cloud2" />
      <div class="container">
        <div class="central-grid">
          <div class="main-lottery">
            <button class="main-lottery__btn" @click="getDuet">Get Players</button>
            <div class="main-lottery__user empty" v-if="currentDuet.length < 1">
              <div class="main-lottery__user-photo " />
              <p class="main-lottery__user-name"></p>
            </div>
            <div class="main-lottery__user" v-for="(user, index) in currentDuet">
              <img class="main-lottery__user-photo" :src="user.photo" alt="">
              <p class="main-lottery__user-name">{{user.name}}</p>
            </div>
            <div class="main-lottery__user empty" v-if="currentDuet.length < 2">
              <div class="main-lottery__user-photo"/>
              <p class="main-lottery__user-name"></p>
            </div>
          </div>
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
    <div class="rednote-block" :class="{ active: !isMain }">
      <div class="rednote-block__container">
        <div class="rednote-block__red">
          <img :src="redImg" alt=""/>
        </div>
        <div class="rednote-block__note">
          <img :src="noteImg" alt=""/>
        </div>
        <div class="rednote-block__reborne">
          <img :src="reborne" alt=""/>
        </div>
        <div class="rednote-block__two">
          <img :src="two" alt=""/>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";
import redImg from "@/assets/red.png";
import noteImg from "@/assets/note.png";
import reborne from "@/assets/reborne.png";
import two from "@/assets/2.png";

@Component({
  name: "HomeView",
  components: { },
})
export default class HomeView extends Vue {
  currentAnimIndex: number | null = null;
  chosenUserIndex: number | null = null;
  isMain = false;
  isAllowNextDuet = true;
  users = [
    {
      name: "Владислав Кухлій",
      photo: "https://lh3.googleusercontent.com/pw/AJFCJaX3DQEZgXQfJHTS0AuXWjDLD7OHujpOnpWF0hOYczJ011WL4AnCxNfDgE_vXgrfQ73V3prh0NqVrnYdQy5eFzmNjaU76NUnVFntjhXylL37oeCqnlDDmN58pYpqlQgCT9a92XtFFz7PgxjCd26RseU=w645-h969-s-no?authuser=1",
    },
    {
      name: "Alex Protasenya",
      photo: "https://lh3.googleusercontent.com/pw/AJFCJaW85mQppsgeMx4SSbwZB08zY__BjCA5jjdc6mCJCKGwDLfUNCVtKMDjoj9089hlmhPtps1t9jUb3Ls6EiN3Q6m65YHvCf7_IePV8iextHvVs6Vyx4aLDm3x5f-JykaDnMH43WSbuId0Ig28FBAMdWE=w631-h969-s-no?authuser=1",
    },
    {
      name: "Jimmy Page1",
      photo: "https://lh3.googleusercontent.com/pw/AJFCJaX3DQEZgXQfJHTS0AuXWjDLD7OHujpOnpWF0hOYczJ011WL4AnCxNfDgE_vXgrfQ73V3prh0NqVrnYdQy5eFzmNjaU76NUnVFntjhXylL37oeCqnlDDmN58pYpqlQgCT9a92XtFFz7PgxjCd26RseU=w645-h969-s-no?authuser=1",
    },
    {
      name: "Robert Plant1",
      photo: "https://lh3.googleusercontent.com/pw/AJFCJaW85mQppsgeMx4SSbwZB08zY__BjCA5jjdc6mCJCKGwDLfUNCVtKMDjoj9089hlmhPtps1t9jUb3Ls6EiN3Q6m65YHvCf7_IePV8iextHvVs6Vyx4aLDm3x5f-JykaDnMH43WSbuId0Ig28FBAMdWE=w631-h969-s-no?authuser=1",
    },
    {
      name: "Jimmy Page2",
      photo: "https://lh3.googleusercontent.com/pw/AJFCJaX3DQEZgXQfJHTS0AuXWjDLD7OHujpOnpWF0hOYczJ011WL4AnCxNfDgE_vXgrfQ73V3prh0NqVrnYdQy5eFzmNjaU76NUnVFntjhXylL37oeCqnlDDmN58pYpqlQgCT9a92XtFFz7PgxjCd26RseU=w645-h969-s-no?authuser=1",
    },
    {
      name: "Robert Plant2",
      photo: "https://lh3.googleusercontent.com/pw/AJFCJaW85mQppsgeMx4SSbwZB08zY__BjCA5jjdc6mCJCKGwDLfUNCVtKMDjoj9089hlmhPtps1t9jUb3Ls6EiN3Q6m65YHvCf7_IePV8iextHvVs6Vyx4aLDm3x5f-JykaDnMH43WSbuId0Ig28FBAMdWE=w631-h969-s-no?authuser=1",
    },
  ];
  currentDuet: any = [];
  chosenDuets: any = [];
  redImg = redImg;
  noteImg = noteImg;
  reborne = reborne;
  two = two;
  runAnimation() {
    const interval = setInterval(() => {
      this.currentAnimIndex = Math.floor(Math.random() * (this.users.length));
    }, 200);
    setTimeout(() => {
      clearInterval(interval);
      this.chosenUserIndex = this.currentAnimIndex;
      setTimeout(() => {
        this.currentDuet.push(this.users[this.currentAnimIndex as number]);
        this.users.splice(this.currentAnimIndex as number, 1);
        this.chosenUserIndex = null;
        this.currentAnimIndex = null;
        if (this.currentDuet.length < 2) this.runAnimation();
        if (this.currentDuet.length === 2) {
          this.isAllowNextDuet = true;
        }
        if (this.users.length === 2) {
          this.chosenDuets.push(this.currentDuet);
          setTimeout(() => {
            this.currentDuet = [...this.users];
            this.users = [];
            setTimeout(() => {
              this.chosenDuets.push(this.currentDuet);
              this.currentDuet = [];
              this.$router.push("/");
            }, 10000);
          }, 2500);
        }
      }, 1000)
    }, 2500)
  }
  getDuet() {
    if (!this.isAllowNextDuet) return
    this.isAllowNextDuet = false;
    if (this.currentDuet.length) {
      this.chosenDuets.push(this.currentDuet);
      this.currentDuet = [];
    }
    this.runAnimation();
  }
  mounted(): void {
    setTimeout(() => {
      this.isMain = true;
    }, 6000);
  }
}
</script>
<style lang="scss">
@keyframes animClouds {
  from {
    transform: translateX(-400px);
  }
  to {
    transform: translateX(100vw);
  }
}
.main {
  opacity: 0;
  visibility: hidden;
  transition: 0.5s;
  &.active {
    opacity: 1;
    visibility: visible;
  }
}
.cloud1 {
    width: 550px;
    height: 400px;
    position: absolute;
    bottom: 150px;
    background-image: url("~@/assets/cloud1.PNG") ;
    background-repeat: no-repeat;
    background-size: contain;
    content: "";
    animation: 70s linear animClouds infinite;
}
.cloud2 {
  width: 550px;
  height: 300px;
  position: absolute;
  top: 20%;
  background-image: url("~@/assets/cloud2.PNG") ;
  background-repeat: no-repeat;
  background-size: contain;
  content: "";
  animation: 35s linear animClouds infinite;
}
body {
  overflow-x: hidden;
  &:before {
    position: fixed;
    z-index: -1;
    width: 100vw;
    height: 100vh;
    background-image: url('~@/assets/background.png');
    background-size: cover;
    content: "";
  }
}
.container {
  z-index: 1;
  position: relative;
}
$border: 5px;
.home{
  padding: 32px;
  overflow-x: hidden;
}
.main-lottery {
  display: flex;
  gap: 60px;
  max-width: 1000px;
  margin: 0 auto;
  position: relative;
  justify-content: center;
  &__user {
    width: 550px;
    display: flex;
    flex-direction: column;
    position: relative;
    &:before {
      content: '';
      position: absolute;
      top: 0; right: 0; bottom: 0; left: 0;
      z-index: -1;
      margin: -$border; /* !importanté */
      border-radius: inherit; /* !importanté */
      background: linear-gradient(-45deg,#d0368a, #708ad4);
    }
    &:last-child &:before{
      background: linear-gradient(45deg,#d0368a, #708ad4);
    }
  }
  &__user-photo {;
    width: 510px;
    height: 786px;
    margin: 20px;
    background-color: #c0c0c0;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

  }
  &__user.empty &__user-photo {
    &:after {
      position: absolute;
      top: 55%;
      left: 55%;
      transform: translate(-50%, -50%) scaleY(1.5);
      color: #989898;
      font-size: 300px;
      content: "?";
    }
  }
  &__user.empty &__user-name{
    background-color: #c0c0c0;
  }
  &__user-name {
    font-size: 28px;
    text-align: center;
    min-height: 52px;
    margin: 20px;
    padding: 12px;
    background-color: #fff;
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &__btn {
    width: 150px;
    height: 150px;
    background-color: #D60C31;
    background-image: radial-gradient(#708ad4,#2e1b5b, #2e1b5b);
    color: #fff;
    font-size: 16px;
    font-family: inherit;
    border-radius: 50%;
    border: none;
    position: absolute;
    top:40%;
    left: 50%;
    line-height: 1.4;
    text-align: center;
    transform: translate(-50%,-50%);
    z-index: 2;
  }
}
.selected-duets {
  gap: 40px;
  display: flex;
  flex-wrap: wrap;
  padding-right: 20px;
  width: 70%;
  margin: 0 auto;
  margin-top: 60px;
  &__duet {
    display: flex;
    gap: 12px;
    position: relative;
    &:before {
      position: absolute;
      left: 50%;
      bottom: 100%;
      transform: translateX(-50%);
      width: 150px;
      height: 20px;
      border: 10px solid #fff;
      border-bottom: none;
      z-index: 2;
      content: "";
    }
    &:nth-of-type(6n) {
      &:after {
        display: none;
      }
    }
  }
  &__duet-item {
    max-width: 200px;
    background-color: #c0c0c0;
    padding: 12px;
    position: relative;
  }
  &__duet + &__duet {
    &:after {
      height: 100%;
      border-left: 8px solid #2c3e50;
      position: absolute;
      right: 100%;
      margin-right: 12px;
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
    font-size: 14px;
    margin-top: 12px;
  }
}
.users-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  max-width: 70%;
  margin: 0 auto;
  z-index: 4;
  position: relative;
  margin-bottom: 60px;
  &__user {
    border: 8px solid #c0c0c0;
    display: flex;
    flex-direction: column;

    img {
      display: block;
      width: 200px;
      height: 200px;
      overflow: hidden;
      object-fit: cover;
      object-position: top;
    }
    p {
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: 8px;
      background-color: #fff;
      border-top: 4px solid #c0c0c0;
      flex-grow: 1;
      font-size: 14px;
    }
    &.active {
      border: 8px solid #D60C31;
    }
    &.chosen {
      z-index: 2;
      transform: scale(4);
      transition: 0.3s;
      transform-origin: top left;
    }
  }
}
.central-grid {
  display: flex;
}
.rednote-block {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  visibility: hidden;
  transition: 1s;
  &.active {
    opacity: 1;
    visibility: visible;
  }
  &__container {
    width: 990px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    position: relative;
    animation: rotate 0.5s linear;
    animation-delay: 5s;
    animation-iteration-count: 1, 1, 1, 1;
    transform-origin: bottom left;
  }
  &__red {
    transform: translate(-150%, 150%) scale(0);
    animation: 1s appearLeft forwards ;
    animation-delay: 1s;
  }
  &__note {
    transform: translate(150%, 150%) scale(0);
    animation: 1s appearRight forwards;
    animation-delay: 2s;
  }
  &__reborne {
    transform: translate(150%, 150%) scale(0);
    animation: 1s appearBottom forwards;
    animation-delay: 3s;
  }
  &__two {
    position: absolute;
    top: 50%;
    left: 100%;
    margin-left: -10%;
    transform: translate(500%, -50%) rotate(2000deg);
    animation: linear 1s appearRotate forwards;
    animation-delay: 4s;

  }
}
@keyframes rotate {
  0% {
    transform: rotate(0);
  }
  50% {
    transform: rotate(-35deg)
  }
  100% {
    transform: rotate(0)
  }
}
@keyframes shake {
  0% {
    transform: translateX(-10%);
  }
  10%{
    transform: translateX(10%);
  }
  20%{
    transform: translateX(-10%);
  }
  30%{
    transform: translateX(10%);
  }
  40%{
    transform: translateX(-10%);
  }
  60%{
    transform: translateX(0%);
  }
  80%{
    transform: translateX(5%);
  }
  90% {
    transform: translateX(-5%);
  }
  100% {
    transform: translateX(0);
  }
}
@keyframes appearRotate {
  from {
    transform: translate(500%, -50%) rotate(2000deg);
  }
  to {
    transform: translate(0, -50%) rotate(0);
  }
}
@keyframes appearLeft {
  from {
    transform: translate(-150%, 150%) scale(0);
  }
  to {
    transform: translate(0, 0) scale(1);
  }
}
@keyframes appearRight {
  from {
    transform: translate(150%, 150%) scale(0);
  }
  to {
    transform: translate(0, 0) scale(1);
  }
}
@keyframes appearBottom {
  from {
    transform: translate(0, 150%) scale(0);
  }
  to {
    transform: translate(0, 0) scale(1);
  }
}
</style>
