<template>
  <div>
    <header>
      <router-link to="/"><img src="./assets/img/logo.png" height="50"></router-link>
    </header>
    <div id="app">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
@import "./assets/sass/variables";
@import "./assets/sass/mixins";
@import "./assets/sass/common";

header {
  padding: 0 15%;
}
</style>
