<template>
  <v-app>
    <Layout>
      <v-content>
        <Hero />
        <span>{{ $page.keynote1.edges[0].node.speaker }}</span>
      </v-content>
    </Layout>
  </v-app>
</template>

<script>
import Hero from "@/components/Hero";

export default {
  components: {
    Hero,
  },
};
</script>


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