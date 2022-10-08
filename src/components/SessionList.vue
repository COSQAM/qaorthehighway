<template>
  <v-container pa-0 fluid>
    <v-layout row wrap fluid>
      <v-flex>
        <v-list three-line>
          <v-subheader class="title font-weight-bold pa-0 background pl-3">{{
            sessions.edges[0].node.time
          }}</v-subheader>
          <div
            v-show="
              favorites.sessions[indexOf(session.node.speaker)].saved ||
              !favorites.filterall
            "
            v-for="(session, index) in sessions.edges"
            :key="index"
          >
            <v-list-item
              :class="timeFiltered"
              :href="`./${removeSpaces(session.node.speaker)}`"
            >
              <v-list-item-content>
                <v-list-item-title>{{ session.node.title }}</v-list-item-title>
                <v-list-item-subtitle>
                  <v-layout ma-0 pa-0 wrap>
                    <v-flex xs12 sm6 class="pb-1">
                      {{ session.node.speaker }}
                      <span v-if="session.node.speaker2"
                        >& {{ session.node.speaker2 }}</span
                      >
                    </v-flex>
                    <v-flex xs12 sm6>
                      <v-icon small :class="roomFiltered([index])"
                        >$circlesolid</v-icon
                      >
                      {{ session.node.room }}
                      <span class="pl-2">({{ findFloor(index) }})</span>
                    </v-flex>
                  </v-layout>
                </v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-action>
                <v-btn
                  icon
                  ripple
                  :title="`${session.node.speaker} Like Button`"
                  @click.prevent.stop="
                    favorites.sessions[indexOf(session.node.speaker)].saved =
                      !favorites.sessions[indexOf(session.node.speaker)].saved
                  "
                >
                  <v-icon
                    v-if="
                      favorites.sessions[indexOf(session.node.speaker)].saved
                    "
                    small
                    color="amber"
                    >$starsolid</v-icon
                  >
                  <v-icon v-else small color="grey">$staroutline</v-icon>
                </v-btn>
              </v-list-item-action>
            </v-list-item>
            <v-divider />
          </div>
        </v-list>
      </v-flex>
    </v-layout>
  </v-container>
</template>



<script>
export default {
  props: ["sessions", "favorites"],
  data: function () {
    return {
      timeFiltered: `t${this.sessions.edges[0].node.time.replace(
        /:|-| /g,
        ""
      )}`,
      filter: false,
    };
  },
  methods: {
    indexOf: function (speakerName) {
      var indexPos = this.$props.favorites.sessions
        .map(function (instance) {
          return instance.speaker;
        })
        .indexOf(speakerName);
      return indexPos;
    },
    roomFiltered: function (index) {
      return this.sessions.edges[index].node.room
        .replace(/:|-| |&/g, "")
        .toLowerCase();
    },
    removeSpaces: function (text) {
      return text.replace(/\s/g, "");
    },
    findFloor: function (room) {
      var floorfilter = this.roomFiltered(room);
      if (floorfilter == "greathall12" || floorfilter == "greathall3") {
        return "1st Floor";
      } else if (
        floorfilter == "eastballroom" ||
        floorfilter == "studentalumniroom" ||
        floorfilter == "westballroom"
      ) {
        return "2nd Floor";
      } else if (
        floorfilter == "interfaithroom" ||
        floorfilter == "cartoonroom"
      ) {
        return "3rd Floor";
      } else {
        return "Error";
      }
    },
  },
};
</script>

<style scoped>
.background {
  background-color: #E0E0E0;
}

.cartoonroom {
  color: #90caf9;
}
.greathall12 {
  color: #b39ddb;
}
.greathall3 {
  color: #a5d6a7;
}
.interfaithroom {
  color: #fff59d;
}
.studentalumniroom {
  color: #ef9a9a;
}
.westballroom {
  color: #ffcc80;
}
.eastballroom {
  color: #80cbc4;
}
.right {
  right: 5%;
  bottom: 1rem;
  position: absolute;
}
.time-font {
  font-size: 2rem;
}
</style>


