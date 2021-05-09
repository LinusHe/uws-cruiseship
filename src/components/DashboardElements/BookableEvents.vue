<template>
  <v-container id="bookableEvents">
    <v-btn @click="close()" fab x-small elevation="0" class="myfab btn-close" color="#162346"><v-icon color="white">mdi-close</v-icon> </v-btn>

    <v-row justify="center">
      <p class="section-name">Bookable Events</p>
    </v-row>

    <v-row align-content="center">
      <v-container class="booking-container">
        <v-alert dense outlined type="error" class="mx-auto my-auto" width="18rem" icon="mdi-account-hard-hat">
          Sorry, this Element is still under construction
        </v-alert>
      </v-container>
    </v-row>
  </v-container>
</template>

<script>
import $ from "jquery";
import Velocity from "velocity-animate";

export default {
  name: "BookableEvents",

  components: {
    //
  },

  created: function() {
    //
  },

  mounted() {
    Velocity($("#bookableEvents"), { opacity: "0" }, 0);
    Velocity($("#bookableEvents"), { opacity: "1" }, { delay: 400 }, 300);
  },

  data: () => ({
    //
  }),

  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script>
