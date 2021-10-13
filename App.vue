<template>
  <div id="app">
    <router-link class="link" to="/">Home</router-link>
    <router-link class="link" to="/dynamic/a">A things</router-link>
    <router-link class="link" to="/dynamic/b">B things</router-link>
    <router-link class="link" to="/dynamic/c">C things</router-link>
    <br />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
};
</script>

<style>
#app {
  margin: 60px;
}

.link {
  display: inline-block;
  padding: 10px;
}

.router-link-active {
  color: green;
}
</style>