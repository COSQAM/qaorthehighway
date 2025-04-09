<template>
  <v-app>
    <Layout>
      <v-main>
        <Hero />
        <Keynotes />
        <SpeakersCarousel :speakers="speakers" />
        <div style="height: 18px"></div>
        <Tickets />
        <div class="tickets"></div>
        <Sponsors />
        <div style="height: 18px"></div>
        <PastConference />
      </v-main>
    </Layout>
  </v-app>
</template>

<script>
import Hero from "@/components/Hero";
import Keynotes from "@/components/Keynotes";
import Tickets from "@/components/Tickets";
import Sponsors from "@/components/Sponsors";
import PastConference from "@/components/PastConference";
import SpeakersCarousel from "@/components/SpeakersCarousel";

export default {
  components: {
    Hero,
    Keynotes,
    Tickets,
    Sponsors,
    PastConference,
    SpeakersCarousel,
  },
  data() {
    return {
      speakers: [],
    };
  },
  async mounted() {
    const { $page } = this;
    this.speakers = $page.allSpeakers.edges.map((edge) => edge.node);
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
        shortbio
        path
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
        shortbio
        path
      }
    }
  },
  allSpeakers: allSession(
    filter: { time: { nin: ["8:00 - 9:00", "4:15 - 5:15"] } }
    sortBy: "speaker"
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
        shortbio
        path
      }
    }
  }
}
</page-query>
