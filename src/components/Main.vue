<template>
  <div>
    <v-container>
      <div id="monitor">
        <div id="monitorscreen" v-bind:class="{ active: monitorIsActive }">
          <Dashboard ref="dashboard"></Dashboard>
        </div>
      </div>

      <v-row align="center" justify="center">
        <v-btn
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
        <v-btn @click="sendNotification" elevation="2" large class="ml-3">
          <v-icon left> mdi-bell </v-icon>
          Send Example Notification
        </v-btn>
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

  data: () => ({
    monitorIsActive: true,
    fullscreen: true,
  }),

  methods: {
    sendNotification() {
      this.$refs.dashboard.$refs.notifications.triggerNotification();
    },
  },
};
</script>
