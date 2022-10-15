<template>
  <div class="background">
    <div
              :class="
            $vuetify.breakpoint.smAndDown
              ? 'text-h4 font-weight-black white--text text-center padding-small'
              : 'text-h4 font-weight-black white--text text-center padding-large'
          "
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

.padding-large {
  padding: 60px 60px
}
.padding-small {
  padding: 60px 20px
}

.color {
  color: white;
  bottom: 0;
  position: absolute
}
</style>