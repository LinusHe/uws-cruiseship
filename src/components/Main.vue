<template>
  <class class="main-content">
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
      <div id="monitor" v-if="monitorIsActive">
        <div id="monitorscreen" v-bind:class="{ active: monitorIsActive }">
          <Dashboard ref="dashboard"></Dashboard>
        </div>
      </div>
      <v-row
        @click="monitorIsActive = !monitorIsActive"
        class="mt-12"
        v-if="!monitorIsActive"
        align="center"
        justify="center"
        eager
      >
        <v-img
          style="cursor: pointer"
          src="@/assets/img/remote.svg"
          contain
          max-height="800"
          id="remote"
          eager
        ></v-img>
      </v-row>
    </v-container>
  </class>
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
    monitorIsActive: true,
  }),

  methods: {
    sendNotification() {
      this.$refs.dashboard.$refs.notifications.triggerNotification();
    },
  },
};
</script>
