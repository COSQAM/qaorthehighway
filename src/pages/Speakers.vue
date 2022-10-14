<template>
  <v-app>
    <Layout>
      <v-content>
        <Header title="Speakers" />
        <v-row class="text-center max-center mt-5">
          <v-col
            cols="12"
            md="4"
            class="my-5"
            v-for="(speaker, index) in combineSpeakers($page.speakers.edges)"
            :key="index"
          >
            <a :href="`./${removeSpaces(speaker.url)}`">
              <v-avatar size="250">
                <img :src="findImage(speaker.name)" />
              </v-avatar>
            </a>
            <div class="headline font-weight-bold pt-3">
              {{ speaker.name }}
            </div>
          </v-col>
        </v-row>
      </v-content>
    </Layout>
  </v-app>
</template>

<script>
import Header from "@/components/Header";

export default {
  components: {
    Header,
  },
  methods: {
    findImage: (speaker) => {
      try {
        return require(`@/assets/images/${speaker.toLowerCase()}.webp`);
      } catch (error) {
        return require("@/assets/images/generic-profile.png");
      }
    },
    removeSpaces: function (text) {
      return text.replace(/\s/g, "");
    },
    combineSpeakers: (speakerArray) => {
      let speakerList = [];
      speakerArray.map((session) => {
        speakerList.push({
          name: session.node.speaker,
          url: session.node.speaker,
        });
        if (session.node.speaker2) {
          speakerList.push({
            name: session.node.speaker2,
            url: session.node.speaker,
          });
        }
      });
      return speakerList;
    },
  },
  metaInfo() {
    return {
      title: "Speakers",
    };
  },
};
</script>

<page-query>
query currentSessions {
  speakers: allSession(
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
}
</page-query>

<style scoped>
.max-center {
  max-width: 1200px;
  margin: 0 auto;
  float: none;
}
</style>