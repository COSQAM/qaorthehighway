<template>
  <v-app>
    <Layout>
      <v-main>
        <Header title="Tickets" />
        <!--
        <v-col class="headline font-weight-bold pt-3 text-center">
          Tickets currently not on sale. Please check back later.
        </v-col>
        -->

        <v-row class="my-5" align-content="center">
          <v-spacer v-if="$vuetify.breakpoint.mdAndUp"/>
          <v-col cols="12" md="6">
            <iframe
              id="eventbrite-widget-container-1144070578899"
              src="/eventbrite.html"
              frameborder="0"
              width="100%"
              height="820px"
            ></iframe>
          </v-col>
          <v-spacer v-if="$vuetify.breakpoint.mdAndUp"/>
        </v-row>
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
  metaInfo() {
    return {
      title: "Tickets",
    };
  },
};
</script>

<style scoped>
.max-center {
  margin: 0 auto;
  float: none;
}
</style>