<template>
  <v-container id="lightControl" transition="fade-transition">
    <v-btn @click="close()" fab x-small elevation="0" class="myfab btn-close" color="#162346"><v-icon color="white">mdi-close</v-icon> </v-btn>

    <v-row justify="center">
      <p class="section-name">Light Control</p>
    </v-row>

    <v-row>
      <v-container class="lamp-container" v-for="(lamp, index) in lamps" :key="lamp.name" :data-index="index">
        <v-row justify="center">
          <b class="lamp-name">{{ lamp.name }}</b>
        </v-row>
        <v-row justify="center">
          <div class="divider-xs"></div>
        </v-row>
        <v-row justify="center" class="align-center">
          <v-btn @click="changeBrightness(lamp, -5)" fab elevation="0" class="myfab-xxs" color="#ffffff">
            <v-icon color="#162346">mdi-minus</v-icon>
          </v-btn>
          <p class="number">{{ lamp.brightness }}%</p>
          <v-btn @click="changeBrightness(lamp, 5)" tex fab x-small elevation="0" class="myfab-xxs" color="#ffffff">
            <v-icon color="#162346">mdi-plus</v-icon>
          </v-btn>
        </v-row>
        <v-row>
          <v-slider 
            hide-details 
            v-model="lamp.color" 
            :class="{ fullColors: lamp.fullColors }" 
            class="hueSlider" 
            dense 
            max="100" min="0">
          </v-slider>
        </v-row>
        <v-row class="brightness-gradient" :style="lamp.gradientstyle">
          <img :src="require(`@/assets/img/icon/dashboard/${lamp.icon}`)" class="lamp-icon" alt="" />
        </v-row>
      </v-container>
    </v-row>
  </v-container>
</template>

<script>
import $ from "jquery";
import Velocity from "velocity-animate";

export default {
  name: "LightControl",

  components: {
    //
  },

  created: function() {
    this.lamps.forEach((lamp) => {
      this.updateGradientStyle(lamp);
    });
  },

  mounted() {
    Velocity($("#lightControl"), { opacity: "0" }, 0);
    Velocity($("#lightControl"), { opacity: "1" }, { delay: 400 }, 300);
  },

  data: () => ({
    lamps: [
      {
        name: "Bed Lamp - Left",
        brightness: 80,
        color: 20,
        fullColors: false,
        icon: "lamp.svg",
        gradientstyle: "",
      },
      {
        name: "Bed Lamp - Right",
        brightness: 70,
        color: 30,
        fullColors: false,
        icon: "lamp.svg",
        gradientstyle: "",
      },
      {
        name: "Ambient Light",
        brightness: 30,
        color: 50,
        fullColors: true,
        icon: "light-2.svg",
        gradientstyle: "",
      },
      {
        name: "Ceiling Lamp",
        brightness: 85,
        color: 70,
        fullColors: false,
        icon: "light.svg",
        gradientstyle: "",
      },
    ],
  }),

  methods: {
    close() {
      this.$emit("close");
    },
    changeBrightness(lamp, value) {
      if (lamp.brightness + value <= 100 && lamp.brightness + value >= 0) {
        lamp.brightness = lamp.brightness + value;
        this.updateGradientStyle(lamp);
        this.updateAvg();
      }
    },
    updateGradientStyle(lamp) {
      lamp.gradientstyle = 
        "background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) " 
        + lamp.brightness + "%, rgba(199,212,220,1) " + lamp.brightness + "%);";
    },
    updateAvg() {
      let sum = 0;
      this.lamps.forEach((lamp) => {
        sum += lamp.brightness;
      });
      this.$emit("update", Math.round(sum / 4));
    },
  },
};
</script>
