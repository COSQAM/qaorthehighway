<template>
  <v-container pa-0 fluid>
    <v-layout row wrap fluid>
      <v-flex>
        <v-list>
          <v-subheader class="title font-weight-bold pa-0 background pl-2">{{
            sessions.edges[0].node.time
          }}</v-subheader>
          <div v-for="(session, index) in sessions.edges" :key="index">
            <v-list-item :class="[timeFiltered, 'px-2']" :href="session.node.path">
              <v-list-item-content>
                <v-list-item-title class="font-weight-medium">{{session.node.title}}</v-list-item-title>
                <v-list-item-subtitle>
                  <div class="two-line-clamp">
                    {{session.node.summary}}
                  </div>
                  <v-layout align-center wrap class="pt-2">
                    <v-flex xs12 sm6 class="py-1">
                      <v-avatar size="32">
                        <v-img
                          :src="findImage(session.node.speaker)"
                          :alt="session.node.speaker"
                        ></v-img>
                      </v-avatar>
                      <span class="pl-2">{{ session.node.speaker }}</span>
                      <span v-if="session.node.speaker2" class="pl-4">
                        <v-avatar size="32">
                          <v-img
                            :src="findImage(session.node.speaker2)"
                            :alt="session.node.speaker"
                          ></v-img>
                        </v-avatar>
                        <span class="pl-2">{{ session.node.speaker2 }}</span>
                      </span>
                    </v-flex>
                    <v-flex xs12 sm6 class="py-1">
                      <v-icon small :class="roomFiltered([index])"
                        >$circlesolid</v-icon
                      >
                      {{ session.node.room }}
                      <span class="pl-2">({{ findFloor(index) }})</span>
                    </v-flex>
                  </v-layout>
                </v-list-item-subtitle>
              </v-list-item-content>
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
  props: ["sessions"],
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
    roomFiltered: function (index) {
      return this.sessions.edges[index].node.room
        .replace(/:|-| |&/g, "")
        .toLowerCase();
    },
    removeSpaces: function (text) {
      return text.replace(/\s/g, "");
    },
    findImage: function (speaker) {
      try {
        return require(`@/assets/images/speakers/${speaker.toLowerCase()}.webp`);
      } catch (error) {
        return require("@/assets/images/generic-profile.png");
      }
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
  background-color: #e0e0e0;
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
.time-font {
  font-size: 2rem;
}
.two-line-clamp {
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
</style>


