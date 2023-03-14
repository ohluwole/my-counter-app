<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/counter">Counter</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: red;
 background-image: linear-gradient(45deg, #85FFBD 0%, #FFFB7D 100%);;  
font-family: Arial, Helvetica, sans-serif;

}

nav a {
  padding: 10px;
  text-decoration: none;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
