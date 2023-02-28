<template>
  <v-app>
    <Layout>
      <v-content>
        <Header title="Speakers" />

        <v-row class="text-center max-center mt-5">
          <!--
          <v-col class="text-h5 primary--text font-weight-bold pt-3">
            <div>
              We are still reviewing speaker submissions for the 2023
              conference.
            </div>
            <div class="pt-3">
              We'll be releasing the full list of speakers on March 31, 2023.
            </div>
          </v-col>
          -->
          <v-col
            cols="12"
            md="4"
            class="my-5"
            v-for="(speaker, index) in combineSpeakers($page.speakers.edges)"
            :key="index"
          >
            <a :href="`/${removeSpaces(speaker.url)}`">
              <v-avatar size="250">
                <v-img aspect-ratio="1:1" :src="findImage(speaker.name)" />
              </v-avatar>
              <div class="speaker headline font-weight-bold pt-3">
                {{ speaker.name }}
              </div>
              <div class="bio text-subtitle-1">
                {{ speaker.shortbio }}
              </div>
            </a>
          </v-col>
        </v-row>
        <div class="text-caption grey--text text-center pa-3">
          This speaker list is not complete and will continue to grow as the
          committee recieves confirmation from the selected speakers. We are
          planning 30 session talks and 2 keynotes.
        </div>
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
        return require(`@/assets/images/speakers/${speaker.toLowerCase()}.webp`);
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
          shortbio: session.node.shortbio,
        });
        if (session.node.speaker2) {
          speakerList.push({
            name: session.node.speaker2,
            url: session.node.speaker,
            shortbio: session.node.shortbio2,
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
        shortbio
        shortbio2
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
a {
  text-decoration: none;
}
a:hover .v-image {
  transform: scale(1.03);
  opacity: 0.8;
}
a:hover .speaker {
  color: var(--v-primary-base)
}
.speaker {
  color: black
}

a:hover .bio {
  color: var(--v-primary-base)
}
.bio {
  color: #9e9e9e
}
</style>