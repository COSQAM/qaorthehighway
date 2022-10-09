<template>
  <div class="background">
    <div
      class="text-h4 font-weight-black white--text text-center margin-top"
    >
      {{ title }}
    </div>
    <div style="height: 30px"></div>
    <Break class="color" />
  </div>
</template>

<script>
import Break from "@/components/icons/Break";

export default {
  components: {
    Break,
  },
  props: ["title"],
};
</script>

<style scoped>
.background {
  background-color: var(--v-primary-base) !important;
  height: 200px;
}

.margin-top {
  padding-top: 80px;
}

.color {
  color: white;
  bottom: none;
}
</style>