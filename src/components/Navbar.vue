<template>
  <nav>
    <v-app-bar app dark fixed elevate-on-scroll color="primary">
      <v-col class="pa-0">
        <a href="/"
          ><v-icon :size="$vuetify.breakpoint.xsOnly ? 140 : 225"
            >$vuetify.icons.qalogo</v-icon
          ></a
        >
      </v-col>
      <v-app-bar-title
        class="hidden-sm-and-down center"
        v-for="link in links"
        :key="link.title"
      >
        <v-btn text :href="link.path">{{ link.title }}</v-btn>
      </v-app-bar-title>
      <v-btn color="accent" outlined href="/tickets">Tickets</v-btn>
      <v-app-bar-nav-icon @click="drawer = !drawer" class="hidden-md-and-up" />
    </v-app-bar>

    <v-navigation-drawer dark right disable-resize-watcher app v-model="drawer">
      <v-list two-line>
        <v-list-item
          v-for="link in links"
          :key="link.title"
          :href="link.path"
          ripple
          class="padding-left"
        >
          <v-list-item-content>{{ link.title }}</v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      links: [
        {
          icon: "fa-chalkboard-teacher",
          title: "Speakers",
          path: "/speakers",
        },
        { title: "Schedule", path: "/schedule" },
        { title: "Venue", path: "/venue" },
        { title: "FAQ", path: "/faq" },
        { title: "Committee", path: "/committee" },
        { title: "Contact", path: "/contact" },
        { title: "Archive", path: "/archive" },
      ],
    };
  },
};
</script>

<style scoped>
.navigation a {
  margin-right: 1rem;
  text-decoration: none;
  color: black;
  background: transparent;
}
.center {
  margin: 0 auto;
  display: block;
}
.theme--dark.v-toolbar {
  background-color: var(--v-primary-base);
}
.theme--dark.v-navigation-drawer {
  background-color: var(--v-primary-base);
}
.padding-left {
  padding-left: 2.5rem;
}
</style>