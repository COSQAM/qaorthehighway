<template>
  <v-container pa-0 fluid>
    <v-layout row wrap fluid>
      <v-flex>
        <v-list>
          <v-subheader class="title font-weight-bold pa-0 pl-2 header">
            {{ sessions.edges[0].node.time }}
          </v-subheader>
          <div v-for="(session, index) in sortedSessions" :key="index">
            <v-list-item :class="[timeFiltered, 'px-2']" :href="session.node.path">
              <v-list-item-content>
                <v-list-item-title class="font-weight-medium">
                  {{ session.node.title }}
                </v-list-item-title>
                <v-list-item-subtitle>
                  <div class="two-line-clamp">
                    {{ session.node.summary }}
                  </div>
                  <v-layout align-center wrap class="pt-2">
                    <v-flex xs12 sm6 class="py-1">
                      <v-avatar size="32">
                        <v-img 
                          :src="findImage(session.node.speaker)" 
                          :alt="session.node.speaker"
                        />
                      </v-avatar>
                      <span class="pl-2">{{ session.node.speaker }}</span>
                      <span v-if="session.node.speaker2" class="pl-4">
                        <v-avatar size="32">
                          <v-img 
                            :src="findImage(session.node.speaker2)" 
                            :alt="session.node.speaker2"
                          />
                        </v-avatar>
                        <span class="pl-2">{{ session.node.speaker2 }}</span>
                      </span>
                    </v-flex>
                    <v-flex xs12 sm6 class="py-1">
                      <v-icon small :class="getRoomClass(session.node.room)">
                        $circlesolid
                      </v-icon>
                      {{ session.node.room }}
                      <span class="pl-2">({{ getFloorByRoom(session.node.room) }})</span>
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
  name: "SessionList",
  
  props: {
    sessions: {
      type: Object,
      required: true,
      validator(sessions) {
        return sessions.edges && Array.isArray(sessions.edges);
      }
    }
  },

  data() {
    return {
      timeFiltered: `t${this.sessions.edges[0].node.time.replace(/:|-| /g, "")}`,
      filter: false,
      roomFloorMap: {
        'greathall12': '1st Floor',
        'greathall3': '1st Floor',
        'eastballroom': '2nd Floor',
        'studentalumniroom': '2nd Floor',
        'westballroom': '2nd Floor',
        'cartoonroom': '3rd Floor',
        'interfaithroom': '3rd Floor'
      }
    };
  },

  computed: {
    sortedSessions() {
      return [...this.sessions.edges].sort((a, b) => {
        const roomA = a.node.room.toLowerCase();
        const roomB = b.node.room.toLowerCase();
        return roomA.localeCompare(roomB);
      });
    }
  },

  methods: {
    getRoomClass(room) {
      return room.replace(/:|-| |&/g, "").toLowerCase();
    },

    removeSpaces(text) {
      return text.replace(/\s/g, "");
    },

    findImage(speaker) {
      if (!speaker) return require("@/assets/images/generic-profile.png");
      
      try {
        return require(`@/assets/images/speakers/${speaker.toLowerCase()}.webp`);
      } catch (error) {
        console.warn(`Speaker image not found for: ${speaker}`);
        return require("@/assets/images/generic-profile.png");
      }
    },

    getFloorByRoom(room) {
      const roomKey = room.replace(/:|-| |&/g, "").toLowerCase();
      return this.roomFloorMap[roomKey] || "Unknown Floor";
    },

    // Legacy method support (keeping for backwards compatibility)
    roomFiltered(index) {
      return this.sessions.edges[index].node.room
        .replace(/:|-| |&/g, "")
        .toLowerCase();
    },

    findFloor(index) {
      const room = this.sessions.edges[index].node.room;
      return this.getFloorByRoom(room);
    }
  }
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

.header {
  background: #e0e0e0;
  font-weight: bold;
  text-transform: uppercase;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  font-size: 1.1rem;
  letter-spacing: 1px;
  text-align: left;
}
</style>
