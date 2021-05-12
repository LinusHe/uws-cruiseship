<template>
  <v-alert :value="alert" color="#162346" dark icon="mdi-information" transition="scale-transition" class="alert">
    <b>{{ msg }}</b>
    <div class="event-container">
      <div class="event" :class="'type-' + event.type">
        <v-row class="event-content">
          <v-col class="flex-grow-0">
            <img class="icon" :src="require(`@/assets/img/icon/notifications/${event.icon}`)" alt="" />
          </v-col>
          <v-col>
            <v-row>
              <p class="time">{{ event.time }}</p>
            </v-row>
            <v-row>
              <p class="name">{{ event.name }}</p>
            </v-row>
            <v-row>
              <p class="location">
                <img class="pin" src="@/assets/img/icon/dashboard/pin.svg" alt="" />
                {{ event.location }}
              </p>
            </v-row>
          </v-col>
        </v-row>
        <div class="badge" v-if="event.type == 'arrival' || event.type == 'boarding'"></div>
      </div>
    </div>
  </v-alert>
</template>

<script>
import changeData from "../schedule/changes";
import { updateEvent } from "../schedule/schedule";
import { removeEvent } from "../schedule/schedule";
import { addEvent } from "../schedule/schedule";

export default {
  name: "Notifications",

  components: {
    //
  },

  data: () => ({
    msg: "",
    icon: "",
    alert: false,
    event: {},
  }),

  created() {},

  methods: {
    triggerNotification() {
      let displayCount = 0;
      changeData.forEach((element) => {
        element.displayed ? (displayCount = displayCount + 1) : null;
      });

      let randomID = Math.floor(Math.random() * changeData.length);

      if (changeData[randomID].displayed == false) {
        changeData[randomID].displayed = true;
        this.msg = changeData[randomID].msg;
        this.triggerChange(randomID);
        this.alert = true;
        setTimeout(() => {
          this.alert = false;
        }, 5000);
      } else if (displayCount != changeData.length) this.triggerNotification();
      else window.location.reload();
    },
    triggerChange(id) {
      let change = changeData[id];
      switch (change.type) {
        case "change":
          updateEvent(change.eventID, change.newEvent);
          break;
        case "cancel":
          removeEvent(change.eventID);
          break;
        case "add":
          addEvent(change.newEvent);
          break;
        default:
          break;
      }
      this.event = change.newEvent;
      this.$parent.$refs.notificationBar.$forceUpdate();
    },
  },
};
</script>
