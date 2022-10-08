<template>
  <nav>
    <v-app-bar flat app dark absolute color="primary">
        <v-col>
            <a href="./"><v-icon size="250">$vuetify.icons.website</v-icon></a>
        </v-col>
          <v-app-bar-title
            class="hidden-sm-and-down center"
            v-for="link in links"
            :key="link.title"
          >
            <v-btn text :href="link.path">{{ link.title }}</v-btn>
          </v-app-bar-title>
          <v-btn outlined href="./outline">Tickets</v-btn>
          <v-spacer class="hidden-md-and-up" />
          <v-app-bar-nav-icon
            @click="drawer = !drawer"
            class="hidden-md-and-up"
          />
    </v-app-bar>

    <v-navigation-drawer dark right disable-resize-watcher app v-model="drawer">
      <v-list two-line>
        <v-list-item
          v-for="link in links"
          :key="link.title"
          :href="link.path"
          ripple
        >
          <v-list-item-action>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-item-action>
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
        { icon: "fa-chalkboard-teacher", title: "Speakers", path: "/speakers" },
        { icon: "fa-list-alt", title: "Schedule", path: "/schedule" },
        { icon: "fa-map-pin", title: "Venue", path: "/venue" },
        { icon: "fa-question-circle", title: "FAQ", path: "/faq" },
        { icon: "fa-users", title: "Committee", path: "/committee" },
        { icon: "fa-at", title: "Contact", path: "/contact" },
        { icon: "fa-history", title: "Archive", path: "/archive" },
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
</style>