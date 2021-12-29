<template>
  <div id="app">
    <TheHeader />
    <router-view/>
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";


export default {
  components: {
    TheHeader,
    TheFooter
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}

body, ul, li, h1, h2, p {
  padding: 0;
  margin: 0;
}

ul {
  list-style: none;
}

body {
  /*font-family: 'Cardo', serif;*/
  font-family: 'Kumbh Sans', sans-serif;
  font-size: 16px;
  /*font-family: 'Noto Serif', serif;*/
}

a {
  color: hsl(219, 9%, 45%);
  list-style: none;
  display: block;
}

img {
  max-width: 100%;
  display: block;
}
</style>
