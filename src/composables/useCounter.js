import { useStore } from "vuex";
import { computed } from "vue";

export default function useCounter() {
  const counterStore = useStore();
  const inputValue = computed(() => {
    return counterStore.state.value;
  });
  function updateValue(event) {
    counterStore.commit("inputValueUpdate", event.target.value);
  }

  function increment() {
    counterStore.commit("increment");
  }

  function decrement() {
    counterStore.commit("decrement");
  }

  function reset() {
    counterStore.commit("reset");
  }

  function setValue() {
    counterStore.commit("setValue");
  }

  return {
    counterStore,
    increment,
    decrement,
    reset,
    setValue,
    inputValue,
    updateValue,
  };
}
