<template>
  <v-app>
    <Layout>
      <v-main>
        <Header title="Contact" />
        <v-row align-content="center" class="mt-3">
          <v-spacer v-if="$vuetify.breakpoint.mdAndUp"/>
          <v-col cols="12" md="6">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLScoRUuJxCIESsj0QburLy3UEN-uK8nI7gbdscXUf1ZFZavyLw/viewform?embedded=true"
              width="100%"
              height="1025px"
              frameborder="0"
              marginheight="0"
              marginwidth="0"
              >Loading…</iframe
            >
          </v-col>
          <v-spacer v-if="$vuetify.breakpoint.mdAndUp"/>
        </v-row>
        <div class="max-center">
          <v-row justify="center" class="ma-5">
            <v-col cols="12" md="5">
              <h3 class="text-h6 font-weight-bold mb-1 primary--text">
                Email
                <span class="text-subtitle-1 font-weight-light black--text pl-5"
                  >COSQAM@gmail.com</span
                >
              </h3>
            </v-col>
            <v-col cols="12" md="4">
              <h3 class="text-h6 font-weight-bold mb-1 primary--text">
                Social Media
              </h3>
              <div v-for="(social, index) in socials" :key="index" class="pb-3">
                <v-btn
                  text
                  class=""
                  target="_blank"
                  :href="social.href"
                  :title="`COSQAM ${social.title}`"
                  x-large
                >
                  <v-icon :style="{ color: `${social.color}` }">{{
                    social.icon
                  }}</v-icon>
                  <span class="ml-5">{{ social.title }}</span>
                </v-btn>
              </div>
            </v-col>
          </v-row>
        </div>
      </v-main>
    </Layout>
  </v-app>
</template>

<script>
import Header from "@/components/Header";

export default {
  components: {
    Header,
  },
  data() {
    return {
      socials: [
        {
          title: "Twitter",
          icon: "$vuetify.icons.twitter",
          color: "#000000",
          href: "https://twitter.com/QAortheHighway",
        },
        {
          title: "LinkedIn",
          icon: "$vuetify.icons.linkedin",
          color: "#0072b1",
          href: "https://www.linkedin.com/company/qa-or-the-highway/",
        },
        {
          title: "Slack",
          icon: "$vuetify.icons.slack",
          color: "#ECB22E",
          href: "https://qaorthehwy.slack.com/join/shared_invite/zt-18erd50r8-1hzOCOkriNCvVdLgHDKMKQ#/shared-invite/email",
        },
      ],
    };
  },
  metaInfo() {
    return {
      title: "Contact",
    };
  },
};
</script>

<style scoped>
.max-center {
  max-width: 800px;
  margin: 0 auto;
  float: none;
}
</style>