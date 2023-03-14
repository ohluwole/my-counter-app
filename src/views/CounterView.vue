<template>
  <div class="counter">
    <div class="container">
    <h1>Counter</h1>
    <p>Count: {{ $store.state.counter }}</p>
    <div class="buttons">
    <button class="increment" @click="increment">+</button>
    <button class="decrement" @click="decrement">-</button>
    <button class="reset" @click="reset">&#x21bb;</button>
    <input class="value" type="number" :value="inputValue" @input="updateValue" />
    <button  class="setvalue" @click="setValue">Set Value</button>
    </div>
    </div>
  </div>
</template>

<script>
import useCounter from "../composables/useCounter";
export default {
  setup() {
    const {
      increment,
      decrement,
      reset,
      setValue,
      updateValue,
      inputValue,
      counterStore,
    } = useCounter();

    return {
      increment,
      decrement,
      reset,
      setValue,
      updateValue,
      inputValue,
      counterStore,
    };
  },
};
</script>

<style scoped>
.counter{
  background-color: #85FFBD;
 background-image: linear-gradient(45deg, #85FFBD 0%, #FFFB7D 100%);;  
font-family: Arial, Helvetica, sans-serif;
height: 100vh;
}
 .container{
    
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    border-radius: 5%;
    border: 1px solid ;
    box-shadow: #85FFBD 0px 19px 38px, #FFFB7D 0px 15px 12px;
    padding: 0px 200px 0px 200px;
} 
h1{
    font-size: 70px;
}
p{
    font-size: 60px;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
.buttons{
    display: inline-block;
    padding: 25px;
}
.increment, .decrement {
    background-color: #4CAF50;
    border: none;
    color: white;
    padding: 1rem;
    text-align: center;
    text-decoration: none;
    font-size: 10px;
    cursor: pointer;
    border-radius: 0.5rem;
    transition: background-color 0.3s;
    margin: 5px;
    font-size: 15px;
  }

  .increment:hover, .decrement:hover {
    background-color: #3e8e41;
  }
  .reset, .setvalue {
    background-color: #f44336;
    border: none;
    color: white;
    padding: 1rem;
    text-align: center;
    text-decoration: none;
    font-size: 10px;
    cursor: pointer;
    border-radius: 0.5rem;
    transition: background-color 0.3s;
    margin: 5px;
    font-size: 15px;
  }

  .reset:hover, .setvalue:hover {
    background-color: #c62828;
  }
  .value{
    width: 200px;
    border-radius: 5px;
    height: 25px;
    font-size: 30px;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    text-align: center;
  }

</style>
