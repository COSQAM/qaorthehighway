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
            <div v-if="speaker[1].length > 1">
              <v-menu>
                <template v-slot:activator="{ on, attrs }">
                  <a v-on="on" v-bind="attrs">
                    <v-avatar size="250">
                      <v-img
                        aspect-ratio="1:1"
                        :src="findImage(speaker[1][0].name)"
                      />
                    </v-avatar>
                    <div class="speaker headline font-weight-bold pt-3">
                      {{ speaker[1][0].name }}
                    </div>
                    <div class="bio text-subtitle-1">
                      {{ speaker[1][0].shortbio }}
                    </div>
                  </a>
                </template>
                <v-list>
                  <v-list-subheader class="text-subtitle-2 grey--text pl-4" >SELECT A SESSION</v-list-subheader>
                  <v-list-item
                    v-for="(session, index) in speaker[1]"
                    :key="index"
                    :href="session.path"
                  >
                    <v-list-item-title>{{ session.title }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </div>
            <div v-else>
              <a :href="speaker[1][0].path">
                <v-avatar size="250">
                  <v-img
                    aspect-ratio="1:1"
                    :src="findImage(speaker[1][0].name)"
                  />
                </v-avatar>
                <div class="speaker headline font-weight-bold pt-3">
                  {{ speaker[1][0].name }}
                </div>
                <div class="bio text-subtitle-1">
                  {{ speaker[1][0].shortbio }}
                </div>
              </a>
            </div>
          </v-col>
        </v-row>
        <!--
        <div class="text-caption grey--text text-center pa-3">
          This speaker list is not complete and will continue to grow as the
          committee recieves confirmation from the selected speakers. We are
          planning 30 session talks and 2 keynotes.
        </div>
        -->
      </v-content>
    </Layout>
  </v-app>
</template>

<script>
import Header from "@/components/Header";
import _ from "lodash";

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
    combineSpeakers: (speakerArray) => {
      let speakerList = [];
      speakerArray.map((session) => {
        speakerList.push({
          name: session.node.speaker,
          url: session.node.speaker,
          shortbio: session.node.shortbio,
          title: session.node.title,
          path: session.node.path,
        });
        if (session.node.speaker2) {
          speakerList.push({
            name: session.node.speaker2,
            url: session.node.speaker,
            title: session.node.title,
            shortbio: session.node.shortbio2,

            path: session.node.path,
          });
        }
      });
      let speakerListNoDups = Object.entries(_.groupBy(speakerList, "name"));
      return speakerListNoDups;
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
        path
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
  color: var(--v-primary-base);
}
.speaker {
  color: black;
}

a:hover .bio {
  color: var(--v-primary-base);
}
.bio {
  color: #9e9e9e;
}
</style>