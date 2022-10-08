<template>
  <v-footer absolute app height="auto" dark color="primary">
    <v-btn
      text
      small
      class="caption pa-0"
      target="_blank"
      rel="noreferrer"
      href="https://join.slack.com/t/qaorthehwy/shared_invite/zt-18erd50r8-1hzOCOkriNCvVdLgHDKMKQ"
    >
      <v-icon>$vuetify.icons.slack</v-icon>
      <span class="pl-2 text-none">Join us on Slack</span>
    </v-btn>
    <v-spacer />
    <div class="pr-2 caption">© Ryan Quellhorst</div>
    <v-btn
      v-for="(site, index) in social"
      :key="index"
      :href="site.url"
      :title="site.title"
      rel="noreferrer"
      icon
      target="_blank"
    >
      <v-icon>{{ site.icon }}</v-icon>
    </v-btn>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
      social: [
        {
          icon: "$vuetify.icons.linkedin",
          url: "https://www.linkedin.com/in/ryanquellhorst/",
          title: "Ryan Quellhorst LinkedIn",
        },
        {
          icon: "$vuetify.icons.github",
          url: "https://github.com/rquellh",
          title: "Ryan Quellhorst Github",
        },
      ],
    };
  },
};
</script>


