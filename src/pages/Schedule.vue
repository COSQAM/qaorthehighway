<template>
  <v-app class="white">
    <Layout>
      <v-content>
        <Header title="Schedule" />
        <!--
        <v-row class="text-center max-center mt-5">
          <v-col class="text-h5 primary--text font-weight-bold pt-3">
            <div>
              We are currently waiting for speaker confirmations and finalizing the schedule.
            </div>
            <div class="pt-3">
              We'll be releasing the schedule on April 7, 2023.
            </div>
          </v-col>
        </v-row>
        -->
        <div class="max-center">
          <div class="ma-3">
            <Break time="7:00 - 7:50" activity="Breakfast" loc="East Ballroom (2nd Floor)"/>
            <SessionList :sessions="$page.session1" />
            <SessionList :sessions="$page.session2" />
            <SessionList :sessions="$page.session3" />
            <Break time="11:30 - 12:45" activity="Lunch" loc="East Ballroom (2nd Floor)"/>
            <SessionList :sessions="$page.session4" />
            <SessionList :sessions="$page.session5" />
            <Break time="2:55 - 3:05" activity="Snacks & Refreshments" loc="Traditions Room (2nd Floor)"/>
            <SessionList :sessions="$page.session6" />
            <SessionList :sessions="$page.session7" />
          </div>
          <div class="text-caption grey--text text-center pa-3">
            This session list is not complete and will continue to grow as the
            committee recieves confirmation from the selected speakers. We are
            planning 30 session talks and 2 keynotes.
          </div>
        </div>
      </v-content>
    </Layout>
  </v-app>
</template>

<script>
import SessionList from "@/components/SessionList";
import IndexNavbar from "@/components/IndexNavbar";
import favorites2022 from "@/data/favorites.json";
import Header from "@/components/Header";
import Break from "@/components/Break";

export default {
  components: {
    SessionList,
    IndexNavbar,
    Header,
    Break
  },
  metaInfo() {
    return {
      title: "Schedule",
    };
  },
};
</script>

<page-query>
query currentSessions {
  session1: allSession(
    filter: { time: { eq: "8:00 - 9:00" } }
    sortBy: "room"
    order: ASC
  ) {
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
  },
  session2: allSession(
    filter: { time: { eq: "9:15 - 10:15" } }
    sortBy: "room"
    order: ASC
  ) {
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
  },
  session3: allSession(
    filter: { time: { eq: "10:30 - 11:30" } }
    sortBy: "room"
    order: ASC
  ) {
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
  },
  session4: allSession(
    filter: { time: { eq: "12:45 - 1:45" } }
    sortBy: "room"
    order: ASC
  ) {
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
  },
  session5: allSession(
    filter: { time: { eq: "1:55 - 2:55" } }
    sortBy: "room"
    order: ASC
  ) {
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
  },
  session6: allSession(
    filter: { time: { eq: "3:05 - 4:05" } }
    sortBy: "room"
    order: ASC
  ) {
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
  session7: allSession(
    filter: { time: { eq: "4:15 - 5:15" } }
    sortBy: "room"
    order: ASC
  ) {
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
