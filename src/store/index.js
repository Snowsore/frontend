import { ref } from "vue";

const timer = ref(false);

export function useTimer() {
  const toggleTimer = (value) => {
    timer.value = value;
  };

  return [timer, toggleTimer];
}
