<template>
  <div class="timer">
    <p>Duets Concert<br/>in:</p>
    <div class="timer__days">{{ time.days }}</div>
    <div class="timer__hours">{{ time.hours }}</div>
    <div class="timer__minutes"> {{ time.minutes }} </div>
    <div class="timer__seconds"> {{ time.seconds }}</div>
  </div>
</template>
<script lang="ts">
import Component from "vue-class-component";
import Button from "@/components/Button/Button.vue";
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
  endData = new Date("07/30/2023").getTime();
  differenceObj(currDate: number, endDate: number) {
    let delta = Math.floor((endDate - currDate) / 1000);
    let days = Math.floor((delta)/(60*60*24))< 10 ? '0' + Math.floor((delta)/(60*60*24)) : Math.floor((delta)/(60*60*24));
    delta -= days as number * (60*60*24);
    let hours = Math.floor(delta / (60*60)) % 24 < 10 ? '0' + Math.floor(delta / (60*60)) % 24 : Math.floor(delta / (60*60)) % 24;
    delta -= hours as number * (60*60);
    let minutes = Math.floor(delta / 60) % 60 < 10 ? '0' + Math.floor(delta / 60) % 60 : Math.floor(delta / 60) % 60;
    delta -= minutes as number * 60;
    let seconds = delta % 60 < 10 ? '0' + delta % 60 : delta % 60 ;
    return {
      days,
      hours,
      minutes,
      seconds,
    }
  }
  setTimerValues(){
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
    setInterval(()=>{
      this.setTimerValues();
    },1000);
  }
}
</script>
<style lang="scss" scoped>
.timer {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
  p {
    width: 100%;
    text-align: center;
    font-size: 44px;
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
</style>
