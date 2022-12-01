<template>
  <v-app class="white">
    <Layout>
      <v-content>
        <Header title="Schedule" />
        <div class="headline font-weight-bold pt-3 text-center">
          The schedule have not been announced for the 2023 conference. Please check
          back later.
        </div>
        <!--
        <div class="max-center">
          <div class="ma-3">
            <SessionList
              :sessions="$page.session1"
              :favorites="favorites2022"
            />
            <SessionList
              :sessions="$page.session2"
              :favorites="favorites2022"
            />
            <SessionList
              :sessions="$page.session3"
              :favorites="favorites2022"
            />
            <SessionList
              :sessions="$page.session4"
              :favorites="favorites2022"
            />
            <SessionList
              :sessions="$page.session5"
              :favorites="favorites2022"
            />
            <SessionList
              :sessions="$page.session6"
              :favorites="favorites2022"
            />
            <SessionList
              :sessions="$page.session7"
              :favorites="favorites2022"
            />
          </div>
        </div>
        -->
      </v-content>
    </Layout>
  </v-app>
</template>

<script>
import SessionList from "@/components/SessionList";
import IndexNavbar from "@/components/IndexNavbar";
import favorites2022 from "@/data/favorites.json";
import Header from "@/components/Header";

export default {
  components: {
    SessionList,
    IndexNavbar,
    Header,
  },
  data: function () {
    return {
      favorites2022,
    };
  },
  //This is checking if there is any information in local storage, compare and update to recent favorites list, and saving to favorites
  mounted() {
    if (localStorage.favorites2022) {
      console.log("mounted");
      const oldFavorites = JSON.parse(localStorage.favorites2022);
      let speakers = new Set(
        oldFavorites.sessions.map((session) => session.speaker)
      );
      let mergedSpeakers = [
        ...oldFavorites.sessions,
        ...this.favorites2022.sessions.filter(
          (session) => !speakers.has(session.speaker)
        ),
      ];
      this.favorites2022.sessions = mergedSpeakers;
      localStorage.setItem("favorites2022", this.favorites2022);
    }
  },
  //This is watching for changes in favorites and saving them to local storage
  watch: {
    favorites2022: {
      handler() {
        console.log("favorites changed");
        localStorage.setItem(
          "favorites2022",
          JSON.stringify(this.favorites2022)
        );
      },
      deep: true,
    },
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
        abstract
        time
        room
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
        abstract
        time
        room
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
        abstract
        time
        room
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
        abstract
        time
        room
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
        abstract
        time
        room
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
        abstract
        time
        room
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
        abstract
        time
        room
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
