<template>
  <v-app>
    <Layout>
      <v-main>
        <Header title="Tickets" />
        <v-col class="headline font-weight-bold pt-3 text-center">
          Tickets currently not on sale. Please check back later.
        </v-col>
        <!--
        <v-row class="my-5" align-content="center">
          <v-spacer />
          <v-col cols="auto">
            <iframe
              id="eventbrite-widget-container-129775290387"
              src="/eventbrite.html"
              frameborder="0"
              width="800px"
              height="1200px"
            ></iframe>
          </v-col>
          <v-spacer />
        </v-row>
        -->
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