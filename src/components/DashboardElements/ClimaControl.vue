<template>
  <v-container id="climaControl">
    <v-btn
      @click="close()"
      fab
      x-small
      elevation="0"
      class="myfab btn-close"
      color="#162346"
      ><v-icon color="white">mdi-close</v-icon>
    </v-btn>

    <v-row justify="center">
      <p class="section-name">Temperature Control</p>
    </v-row>

    <!-- Temp -->
    <v-row justify="center" class="mt-0">
      <v-col sm="12" justify="center" align="center">
        <p class="control-label temp">Room Temperature</p>
      </v-col>
      <v-row sm="12" justify="center" class="control-row">
        <v-btn
          :disabled="autoMode"
          @click="changeTemp(-0.5)"
          fab
          elevation="0"
          class="myfab-xxs"
          color="#162346"
          ><v-icon color="white">mdi-minus</v-icon>
        </v-btn>
        <p :style="tempGradient" class="number temp">
          {{ temperature }}<span>°C</span>
        </p>
        <v-btn
          :disabled="autoMode"
          @click="changeTemp(0.5)"
          fab
          x-small
          elevation="0"
          class="myfab-xxs"
          color="#162346"
          ><v-icon color="white">mdi-plus</v-icon>
        </v-btn>
      </v-row>
      <v-col sm="12" justify="center" align="center">
        <div class="divider-xs"></div>
      </v-col>
    </v-row>

    <!-- Fan -->
    <v-row justify="center">
      <v-col sm="12" justify="center" align="center">
        <p class="control-label">Fan Speed</p>
      </v-col>
      <v-row sm="12" justify="center" class="control-row">
        <v-btn
          :disabled="autoMode"
          @click="changeFan(-1)"
          fab
          elevation="0"
          class="myfab-xxs"
          color="#162346"
          ><v-icon color="white">mdi-minus</v-icon> </v-btn
        ><img src="../../assets/img/icon/dashboard/ventilation.svg" />
        <p class="number fan">{{ fanSpeed }}</p>
        <v-btn
          :disabled="autoMode"
          @click="changeFan(1)"
          fab
          x-small
          elevation="0"
          class="myfab-xxs"
          color="#162346"
          ><v-icon color="white">mdi-plus</v-icon>
        </v-btn>
      </v-row>
      <v-col sm="12" align="center" justify="center">
        <v-checkbox
          @change="toggleAutoMode"
          hide-details=""
          v-model="autoMode"
          label="Automatic air conditioning"
        ></v-checkbox>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import $ from "jquery";
import Velocity from "velocity-animate";

export default {
  name: "ClimaControl",

  components: {
    //
  },

  data: () => ({
    temperature: 22,
    fanSpeed: 4,
    tempGradient: "",
    autoMode: false,
  }),

  created: function () {
    this.updateTempGradient();
  },

  mounted() {
    Velocity($("#climaControl"), { opacity: "0" }, 0);
    Velocity($("#climaControl"), { opacity: "1" }, { delay: 400 }, 300);
  },

  methods: {
    toggleAutoMode() {
      if (this.autoMode) {
        this.temperature = 22;
        this.fanSpeed = 1;
        this.updateTempGradient();
      }
    },
    changeTemp(value) {
      if (this.temperature + value <= 26 && this.temperature + value >= 17) {
        this.temperature = this.temperature + value;
      }
      this.updateTempGradient();
    },
    changeFan(value) {
      if (this.fanSpeed + value <= 5 && this.fanSpeed + value >= 0) {
        this.fanSpeed = this.fanSpeed + value;
      }
      this.updateTempGradient();
    },
    updateTempGradient() {
      this.tempGradient =
        "background: linear-gradient(90deg, rgba(81,217,215,1) 0%, rgba(81,217,215,1) " +
        ((this.temperature - 17) * 100) / 9 +
        "%, rgba(212,212,212,1) " +
        ((this.temperature - 17) * 100) / 9 +
        "%);";
    },
    close() {
      this.$emit("close");
    },
  },
};
</script>
