<template>
  <div>
    <v-container>
      <v-row align="center" justify="center" class="mt-5">
        <v-btn
          v-if="!monitorIsActive"
          @click="monitorIsActive = !monitorIsActive"
          tile
          elevation="2"
          color="success"
          large
          class="mr-3"
        >
          <v-icon left> mdi-power </v-icon>
          Turn On
        </v-btn>
        <v-btn
          v-if="monitorIsActive"
          @click="monitorIsActive = !monitorIsActive"
          tile
          elevation="2"
          color="warning"
          large
          class="mr-3"
        >
          <v-icon left> mdi-power </v-icon>
          Turn Off
        </v-btn>
        <v-btn
          v-if="monitorIsActive"
          @click="sendNotification"
          color="rgb(22, 35, 70)"
          dark
          elevation="2"
          large
          class="ml-3"
        >
          <v-icon left> mdi-bell </v-icon>
          Send Example Notification
        </v-btn>
      </v-row>
      <div id="monitor">
        <div id="monitorscreen" v-bind:class="{ active: monitorIsActive }">
          <Dashboard v-if="monitorIsActive" ref="dashboard"></Dashboard>
        </div>
      </div>
      <v-row align="center" justify="center">
        <div id="remote-container" class="pa-5">
          <v-row align="center" justify="center">
            <h1 class="ma-5">Remote Control Design</h1>
          </v-row>
          <v-row align="center" justify="center">
            <v-img
              src="@/assets/img/remote.svg"
              contain
              max-height="800"
              id="remote"
            ></v-img>
          </v-row>
        </div>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Dashboard from "./Dashboard";

export default {
  name: "Main",

  components: {
    Dashboard,
  },

  mounted() {},

  data: () => ({
    monitorIsActive: false,
  }),

  methods: {
    sendNotification() {
      this.$refs.dashboard.$refs.notifications.triggerNotification();
    },
  },
};
</script>
