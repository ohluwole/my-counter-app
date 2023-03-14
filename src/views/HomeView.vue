<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1>COUNTER APP</h1>
    <P
      >Click on the
      <router-link to="/counter">
        <button on-click="">COUNTER</button>
      </router-link>
      Icon
    </P>
  </div>
</template>

<script>
export default {
  name: "HomeView",
};
</script>
<style>
.home {
  background-color: #85ffbd;
  background-image: linear-gradient(45deg, #85ffbd 0%, #fffb7d 100%);
  font-family: Arial, Helvetica, sans-serif;
  height: 100vh;
}
h1{
  font-size: 50px;
}
p{
  font-size: 20px;
}


  button{
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

  button:hover{
    background-color: #3e8e41;
  }
</style>
