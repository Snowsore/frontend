<template>
  <div class="box">
    Tinyteam<br />
    Author: Rend
  </div>
</template>

<script>
// @ is an alias to /src

import { useTimer } from "./../store";
const [timer, setTimer] = useTimer();

console.log(timer.value);
setTimer(false);
console.log(timer.value);
setTimer(true);
console.log(timer.value);

export default {
  name: "Home",
  components: {},
};
</script>

<style scoped>
.box {
  outline: 3px solid #32b97b;
  border-radius: 3px;
  background-color: #87deb6;
  color: #fcfcfd;
  font-weight: bold;
  font-size: 3rem;

  padding: 60px;
}
</style>
