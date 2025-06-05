<template>
  <v-app class="white">
    <Layout>
      <v-main>
        <Header title="Schedule" />
        <!-- Show when schedule is not yet finalized -->
        <v-row v-if="!isScheduleReady" class="text-center max-center mt-5">
          <v-col class="text-h5 primary--text font-weight-bold pt-3">
            <div>
              We are currently waiting for speaker confirmations and finalizing the schedule.
            </div>
            <div class="pt-3">
              We'll be releasing the schedule this week.
            </div>
          </v-col>
        </v-row>
        <!-- Show when schedule is available -->
        <div v-else class="max-center">
          <div class="ma-3">
            <template v-for="(item, index) in scheduleItems">
              <Break 
                v-if="item.type === 'break'" 
                :key="`break-${index}`"
                :time="item.time" 
                :activity="item.activity" 
                :loc="item.loc" 
              />
              <SessionList 
                v-else-if="item.type === 'session' && item.data" 
                :key="`session-${index}`"
                :sessions="item.data" 
              />
            </template>
          </div>

          <div class="text-caption grey--text text-center pa-3">
            This session list is not complete and will continue to grow as the
            committee receives confirmation from the selected speakers. We are
            planning 30 session talks and 2 keynotes.
          </div>
        </div>
      </v-main>
    </Layout>
  </v-app>
</template>

<script>
import SessionList from "@/components/SessionList";
import IndexNavbar from "@/components/IndexNavbar";
import Header from "@/components/Header";
import Break from "@/components/Break";

export default {
  components: {
    SessionList,
    IndexNavbar,
    Header,
    Break,
  },
  metaInfo() {
    return {
      title: "Schedule",
    };
  },
  data() {
    return {
      isScheduleReady: true, // Flag to check if schedule data is ready for the public
    };
  },
  computed: {
    // Group sessions by their time slot
    sessionsByTime() {
      if (!this.$page.allSession) return {};
      
      return this.$page.allSession.edges.reduce((acc, { node }) => {
        if (!acc[node.time]) {
          acc[node.time] = { edges: [] };
        }
        acc[node.time].edges.push({ node });
        return acc;
      }, {});
    },
    
    // Schedule data containing both sessions and breaks
    scheduleItems() {
      return [
        { type: 'break', time: "7:00 - 7:50", activity: "Breakfast", loc: "East Ballroom (2nd Floor)" },
        { type: 'session', time: "8:00 - 9:00", data: this.sessionsByTime["8:00 - 9:00"] },
        { type: 'session', time: "9:15 - 10:15", data: this.sessionsByTime["9:15 - 10:15"] },
        { type: 'session', time: "10:30 - 11:30", data: this.sessionsByTime["10:30 - 11:30"] },
        { type: 'break', time: "11:30 - 12:45", activity: "Lunch", loc: "East Ballroom (2nd Floor)" },
        { type: 'session', time: "12:45 - 1:45", data: this.sessionsByTime["12:45 - 1:45"] },
        { type: 'session', time: "1:55 - 2:55", data: this.sessionsByTime["1:55 - 2:55"] },
        { type: 'break', time: "2:55 - 3:05", activity: "Snacks & Refreshments", loc: "Traditions Room (2nd Floor)" },
        { type: 'session', time: "3:05 - 4:05", data: this.sessionsByTime["3:05 - 4:05"] },
        { type: 'session', time: "4:15 - 5:15", data: this.sessionsByTime["4:15 - 5:15"] }
      ];
    }
  }
};
</script>

<page-query>
query currentSessions {
  allSession(sortBy: "time,room", order: ASC) {
    edges {
      node {
        speaker
        speaker2
        title
        summary
        abstract
        time
        room
        path
      }
    }
  }
}
</page-query>

<style scoped>
.max-center {
  max-width: 1200px;
  margin: 0px auto;
  float: none;
}
</style>
