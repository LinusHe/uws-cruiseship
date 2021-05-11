<template>
  <div class="event-wrapper">
    <div class="event" :class="'type-' + currentEvent.type">
      <v-row class="event-content">
        <v-col class="flex-grow-0">
          <img class="icon" :src="require(`@/assets/img/icon/notifications/${currentEvent.icon}`)" alt="" />
        </v-col>
        <v-col>
          <v-row>
            <p class="time">
              <span v-if="type != 'notification'">{{ currentEvent.date }}</span
              >{{ currentEvent.time }}
            </p>
          </v-row>
          <v-row>
            <p class="name">{{ currentEvent.name }}</p>
          </v-row>
          <v-row>
            <p class="location">
              <img class="pin" src="../../assets/img/icon/dashboard/pin.svg" alt="" />
              {{ currentEvent.location }}
              <span class="freeSlots" v-if="type != 'notification'">{{ currentEvent.slotsFree }} Slots available</span>
            </p>
          </v-row>
        </v-col>
        <v-col v-if="type == 'bookable'" class="flex-grow-0">
          <v-btn @click="$emit('eventDetails')" depressed class="side-button" color="#A2E19D">
              <v-icon color="#162346">mdi-star-plus</v-icon><p>book</p>
          </v-btn>
        </v-col>
      </v-row>
      <div class="badge" v-if="currentEvent.type == 'arrival' || currentEvent.type == 'boarding'"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "currentEventElement",

  props: {
    currentEvent: Object,
    type: String,
  },

  components: {
    //
  },

  data: () => ({
    //
  }),

  methods: {
    //
  },
};
</script>
