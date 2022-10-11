<template>
  <v-app>
    <Layout>
      <v-content>
        <Hero />
        <Keynotes />
        <div style="height: 18px"></div>
        <Tickets />
        <div class="tickets"></div>
        <Sponsors />
        <div style="height: 18px"></div>
        <PastConference />
      </v-content>
    </Layout>
  </v-app>
</template>

<script>
import Hero from "@/components/Hero";
import Keynotes from "@/components/Keynotes";
import Tickets from "@/components/Tickets";
import Sponsors from "@/components/Sponsors";
import PastConference from "@/components/PastConference";

export default {
  components: {
    Hero,
    Keynotes,
    Tickets,
    Sponsors,
    PastConference,
  },
  metaInfo() {
    return {
      title: "Home",
    };
  },
};
</script>

<style scoped>
.tickets {
  height: 50px;
  background: var(--v-secondary-base);
}
</style>




<page-query>
query currentSessions {
  keynote1: allSession(
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
  keynote2: allSession(
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