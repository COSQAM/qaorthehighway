<template>
  <v-app>
    <Layout>
      <v-main>
        <Header :title="$page.session.title" />
        <div class="max-center pt-5">
          <v-row class="pb-5 ma-1">
            <v-col cols="12" class="text-color">
              <div class="pb-3">
                <v-row justify="space-around">
                  <v-col cols="12" md="6">
                    <span class="pr-2"> <v-icon small>$clock</v-icon></span>
                    <span class="pr-5">{{ $page.session.time }} </span>
                    <span class="pr-2">
                      <v-icon small :class="roomFiltered($page.session.room)"
                        >$circlesolid</v-icon
                      >
                    </span>
                    <span>{{ $page.session.room }}</span>
                    <span class="pl-2">
                      <v-dialog
                        v-model="dialog"
                        transition="dialog-bottom-transition"
                      >
                        <template v-slot:activator="{ on, attrs }">
                          <v-btn
                            small
                            outlined
                            class="text-none"
                            color="primary"
                            v-bind="attrs"
                            v-on="on"
                            >Map</v-btn
                          >
                        </template>
                        <template v-slot:default="dialog">
                          <v-card>
                            <v-card-actions class="justify-end">
                              <v-btn
                                outlined
                                class="text-none"
                                @click="dialog.value = false"
                                >Close</v-btn
                              >
                            </v-card-actions>
                            <img :src="findImage($page.session.room)" alt="" />
                          </v-card>
                        </template> </v-dialog
                    ></span>
                  </v-col>
                  <v-spacer></v-spacer>
                  <v-col cols="12" md="auto">
                    <v-btn
                      small
                      outlined
                      class="text-none"
                      href="https://docs.google.com/forms/d/e/1FAIpQLSdLEJnLY9pzGm9YKkXRdMmqfyWKxzThUtTzaXTPVOxXeImkEw/viewform?usp=pp_url&entry.539325667=Speaker"
                      target="_blank"
                      color="primary"
                      >Leave Feeback</v-btn
                    >
                  </v-col>
                </v-row>
              </div>
              <v-divider class="pt-3" />
              <div class="pre-formatted">{{ $page.session.abstract }}</div>
            </v-col>
          </v-row>
          <SpeakerBio
            :speaker="$page.session.speaker"
            :bio="$page.session.bio"
            :linkUrl="$page.session.linkedin"
            :twitUrl="$page.session.twitter"
            :webUrl="$page.session.website"
            :youtubeUrl="$page.session.youtube"
            class="py-5"
          />
          <SpeakerBio
            v-if="$page.session.speaker2"
            :speaker="$page.session.speaker2"
            :bio="$page.session.bio2"
            :linkUrl="$page.session.linkedin2"
            :twitUrl="$page.session.twitter2"
            :webUrl="$page.session.website2"
            :youtubeUrl="$page.session.youtube2"
            class="pb-5"
          />
        </div>
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
import Header from "@/components/Header";

export default {
  components: {
    Layout,
    SessionNavbar,
    SpeakerBio,
    Header,
  },
  metaInfo() {
    return {
      title: this.$page.session.speaker,
    };
  },
  methods: {
    roomFiltered: function (room) {
      return room.replace(/:|-| |&/g, "").toLowerCase();
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
      var floorfilter = this.roomFiltered(floor);
      try {
        return require(`@/assets/images/rooms/${floorfilter}.png`);
      } catch (error) {
        return require("@/assets/images/generic-profile.png");
      }
    },
    roomFiltered: function (room) {
      return room.replace(/:|-| |&/g, "").toLowerCase();
    },
  },
};
</script>

<style scoped>
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
.max-center {
  max-width: 1200px;
  margin: 0 auto;
  float: none;
}
.text-color {
  color: rgba(0, 0, 0, 0.5);
}
.cartoonroom {
  color: #90caf9;
}
.greathall12 {
  color: #b39ddb;
}
.greathall3 {
  color: #a5d6a7;
}
.interfaithroom {
  color: #fff59d;
}
.studentalumniroom {
  color: #ef9a9a;
}
.westballroom {
  color: #ffcc80;
}
.eastballroom {
  color: #80cbc4;
}
</style>

