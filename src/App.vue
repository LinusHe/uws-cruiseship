<template>
  <v-app id="app">
    <v-main>
      <Main />
    </v-main>
  </v-app>
</template>

<script>
import Main from "./components/Main";
import "../src/assets/scss/style.scss";

export default {
  name: "App",

  components: {
    Main,
  },

  data: () => ({
    //
  }),
};
</script>
