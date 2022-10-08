<template>
  <v-app class="pre-formatted">
    <SessionNavbar :speaker="$page.session.speaker" />
    <Layout>
      <v-main class="my-1">
        <v-container ma-0 pa-0 fluid align-center>
          <v-layout ma-0 pa-0 row wrap justify-space-between fill-height>
            <v-flex xs12 md8 pa-3>
              <div class="headline font-weight-bold">{{ $page.session.title }}</div>
              <v-divider class="my-2"/>
              <div class="subheading pre-formatted text-color">{{ $page.session.abstract }}</div>
            </v-flex>
            <v-flex xs12 md4 pa-3>
              <div class="headline font-weight-bold">Session Information</div>
              <v-divider class="my-2"/>
              <v-layout align-center justify-start>
                <div class="pr-5 text-color">
                  <div class="subheading">Time: {{ $page.session.time }}</div>
                  <div class="subheading">Room: {{ $page.session.room }} <span>({{findFloor($page.session.room)}})</span></div>
                </div>
                <v-dialog
                  v-model="dialog"
                  hide-overlay
                  transition="dialog-bottom-transition"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn outlined class="text-none" color="primary" v-bind="attrs" v-on="on">Map</v-btn>
                  </template>
                  <template v-slot:default="dialog">
                    <v-card>
                      <v-card-actions class="justify-end">
                        <v-btn outlined class="text-none" @click="dialog.value = false">Close</v-btn>
                      </v-card-actions>
                      <img :src="findImage($page.session.room)" alt="">
                    </v-card>
                  </template>
                </v-dialog>
              </v-layout>
            </v-flex>
          </v-layout>
          <SpeakerBio
            :speaker="$page.session.speaker"
            :bio="$page.session.bio"
            :linkUrl="$page.session.linkedin"
            :twitUrl="$page.session.twitter"
            :webUrl="$page.session.website"
            :youtubeUrl="$page.session.youtube"
          />
          <SpeakerBio
            v-if="$page.session.speaker2"
            :speaker="$page.session.speaker2"
            :bio="$page.session.bio2"
            :linkUrl="$page.session.linkedin2"
            :twitUrl="$page.session.twitter2"
            :webUrl="$page.session.website2"
            :youtubeUrl="$page.session.youtube2"
          />
        </v-container>
      </v-main>
    </Layout>
  </v-app>
</template>

<page-query>
query Session ($path: String!) {
  session (path: $path) {
    speaker
    speaker2
    bio
    bio2
    title
    abstract
    time
    room
    linkedin
    twitter
    website
    linkedin2
    twitter2
    website2
    youtube
    youtube2
  }
}
</page-query>

<script>
import Layout from "@/layouts/Default";
import SessionNavbar from "@/components/SessionNavbar";
import SpeakerBio from "@/components/SpeakerBio";

export default {
  components: {
    Layout,
    SessionNavbar,
    SpeakerBio,
  },
  metaInfo() {
    return {
      title: this.$page.session.speaker,
    };
  },
  methods: {
    roomFiltered: function(room) {
      return room
        .replace(/:|-| |&/g, "")
        .toLowerCase();
    },
    findFloor: function (room) {
      var floorfilter = this.roomFiltered(room);
      if (floorfilter == "greathall12" || floorfilter == "greathall3") {
        return "1st Floor";
      } else if (
        floorfilter == "eastballroom" ||
        floorfilter == "studentalumniroom" ||
        floorfilter == "westballroom"
      ) {
        return "2nd Floor";
      } else if (
        floorfilter == "interfaithroom" ||
        floorfilter == "cartoonroom"
      ) {
        return "3rd Floor";
      } else {
        return "Error";
      }
    },
    findImage: function (floor) {
    var floorfilter = this.roomFiltered(floor)
      try {
        return require(`@/assets/images/rooms/${floorfilter}.png`);
      } catch (error) {
        return require("@/assets/images/generic-profile.png");
      }
    }
  }
};
</script>

<style scoped>
.text-color {
  color: rgba(0,0,0,.6);
}
.pre-formatted {
  white-space: pre-wrap;
}
img {
  max-width: 100%;
  max-height: 80vh;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>

