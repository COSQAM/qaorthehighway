<template>
  <v-app>
    <Layout>
      <v-main>
        <Header title="Archive" />
        <div class="max-center">
          <h3 class="text-h5 font-weight-bold mb-1 primary--text text-center">
            This is still being worked on
          </h3>
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
  metaInfo() {
    return {
      title: "Archive",
    };
  },
};
</script>

<style scoped>
.max-center {
  max-width: 1200px;
  margin: 0 auto;
  float: none;
}
</style>