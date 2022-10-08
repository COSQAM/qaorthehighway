<template>
  <v-app-bar app dense dark flat color="primary">
    <v-avatar size="25">
      <img :src="require('@/assets/images/header.png')" alt="QA or the Highway logo"/>
    </v-avatar>
    <div class="pl-3 branded_font">QA or the Highway</div>
    <v-spacer></v-spacer>
    <v-btn outlined @click="favorites.filterall = !favorites.filterall">
      <div v-if="favorites.filterall" class="text-capitalize">
        Filtered
        <v-icon right small color="amber">$starsolid</v-icon>
      </div>
      <div v-else class="text-capitalize">
        Filter
        <v-icon right small>$staroutline</v-icon>
      </div>
    </v-btn>
  </v-app-bar>
</template>


<script>;

export default {
  props: ["favorites"]
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Montserrat:500&display=swap');
.branded_font {
  font-family: 'Montserrat', 'Roboto', sans-serif; 
}
</style>

