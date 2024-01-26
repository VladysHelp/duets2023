<template>
  <div class="timer">
    <div class="cloud1" />
    <div class="cloud2" />
    <div class="timer__click" v-if="new Date().getTime() < passedData">
      <p>REDROCK<br/>Пісня буде поміж нас <br/>Winter Edition<br/>in:</p>
      <div class="timer__days">{{ time.days }}</div>
      <div class="timer__hours">{{ time.hours }}</div>
      <div class="timer__minutes"> {{ time.minutes }} </div>
      <div class="timer__seconds"> {{ time.seconds }}</div>
    </div>
    <div v-else class="timer__passed">
      <div class="timer__banana">
        <img :src="bananaImg" alt="surprise" />
      </div>
      <p>You have successfully passed duets concert, congratulations!!!</p>
      <p> To be continue...</p>
      <div class="timer__heroes">
        <div class="hero">
          <img src="~@/assets/shark_run.gif" alt="">
        </div>
        <div class="hero">
          <img src="~@/assets/man_run.gif" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Component from "vue-class-component";
import Button from "@/components/Button/Button.vue";
import bananaImg from "@/assets/banana-dance-dancing-banana.gif";
import Vue from "vue";

@Component({
  name: "TimerView",
  components: {Button},
})
export default class TimerView extends Vue {
  time = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  }
  bananaImg = bananaImg;
  endData = new Date("01/28/2024").getTime() + (18 * 60 * 60 * 1000);
  passedData = new Date("01/28/2024").getTime() + (22 * 60 * 60 * 1000);
  timeout: number | null = null;
  differenceObj(currDate: number, endDate: number) {
    let delta = Math.floor((endDate - currDate) / 1000);
    let days = Math.floor((delta)/(60*60*24))< 10 ? '0' + (Math.floor((delta)/(60*60*24)) || 0) : Math.floor((delta)/(60*60*24) || 0);
    delta -= days as number * (60*60*24);
    let hours = Math.floor(delta / (60*60)) % 24 < 10 ? '0' + Math.floor(delta / (60*60)) % 24 : Math.floor(delta / (60*60)) % 24;
    delta -= hours as number * (60*60);
    let minutes = Math.floor(delta / 60) % 60 < 10 ? '0' + Math.floor(delta / 60) % 60 : Math.floor(delta / 60) % 60;
    delta -= minutes as number * 60;
    let seconds = delta % 60 < 10 ? '0' + delta % 60 : delta % 60 ;
    return {
      days: days >=0 ? days : '00',
      hours: hours >=0 ? hours : '00',
      minutes: minutes >=0 ? minutes : '00',
      seconds: seconds >=0 ? seconds : '00',
    }
  }
  setTimerValues(){
    if (this.timeout && Date.now() > this.endData) {
      clearInterval(this.timeout);
      return;
    }
    let valueObj = this.differenceObj(Date.now(), this.endData);
    if(valueObj.seconds !== this.time.seconds){
      this.time.seconds = valueObj.seconds as number;
    }
    if(valueObj.minutes !== this.time.minutes){
      this.time.minutes = valueObj.minutes as number;
    }
    if(valueObj.hours !== this.time.hours){
      this.time.hours = valueObj.hours as number;
    }
    if(valueObj.days !== this.time.days){
      this.time.days = valueObj.days as number;
    }
  }
  mounted() {
    this.time = this.differenceObj(Date.now(), this.endData as number) as any;
    this.timeout = setInterval(()=>{
      this.setTimerValues();
    },1000);
  }
}
</script>
<style lang="scss" scoped>
.cloud1 {
  z-index: -1;
  zoom: 0.5;
}
.cloud2 {
  zoom: 0.5;
  z-index: -1;
}
.timer {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
  width: 100%;
  padding: 0 12px;
  &__click {
    display: flex;
    justify-content: center;
    gap: 10px;
    flex-wrap: wrap;
    p {
      width: 100%;
      text-align: center;
      font-size: 44px;
      line-height: 1.4;
    }
    & > div {
      padding: 20px;
      background-color: #3a3a3a;
      font-size: 42px;
      color: lightgreen;
      @media all and (max-width: 768px) {
        font-size: 16px;
        padding: 12px;
      }
    }
  }
  &__passed {
    max-width: 400px;
    width: 100%;
    line-height: 1.5;
    text-align: center;
    font-size: 18px;
  }
  &__banana {
    width: 300px;
    margin: 0 auto;
    position: relative;
    &:after {
      position: absolute;
      left: 0;
      bottom: 14%;
      content: "";
      width: 100%;
      height: 40px;
      background-color: #adff2f;
      z-index: -1;
      transform: skew(-30deg);
    }
    img {
      display: block;
      width: 100%;
    }
  }
  &__heroes {
    display: flex;
    justify-content: center;
    position: relative;
    max-width: 400px;
    &:after {
      position: absolute;
      bottom: -8px;
      left: 0;
      width: 100%;
      height: 40px;
      background: linear-gradient(90deg, #d0368a, #708ad4 ,darkcyan ,#d0368a, #708ad4);
      background-size: 450% 450%;
      animation: movingAnim 4s linear infinite;
      content: "";
      z-index: -1;
      transform: skew(-30deg);
    }
    .hero {
      img {
        display: block;
        max-height: 100px;
      }
    }
  }
}
@keyframes movingAnim {
  0%{background-position:0% 50%}
  100%{background-position:100% 50%}
}
</style>
