<template>
  <div id="app">
    <h2 class="title">Планирование</h2>
    <Main/>
  </div>
</template>

<script>

import Main from "@/pages/Main";

export default {
  name: 'App',
  components: {
    Main
  }
}
</script>

<style lang="scss">

@import "assets/styles/fonts";

body {
  background: #E5E5E5;
  font-family: 'Roboto Condensed', Arial, sans-serif;
}

#app {
}

.title {
  font-style: normal;
  font-weight: bold;
  font-size: 72px;
  line-height: 120%;
  margin-top: 0;
  margin-bottom: 39px;
}
</style>
