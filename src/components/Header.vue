<template>
  <div class="background">
    <div
      class="text-h4 font-weight-black white--text text-center padding"
    >
      {{ title }}
    </div>
    <div style="min-height: 30px"></div>
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
  min-height: 200px;
  position: relative;
}

.padding {
  padding: 60px 60px
}

.color {
  color: white;
  bottom: 0;
  position: absolute
}
</style>