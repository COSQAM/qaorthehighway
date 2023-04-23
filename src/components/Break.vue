<template>
  <div class="title font-weight-bold py-3 background pl-3 white--text text-truncate">
    <span>{{ time }}</span>
    <span class="pl-5">{{ activity }}</span>
    <span class="pl-5 font-weight-light text-subtitle-1">{{ loc }}</span>
  </div>
</template>

<script>
export default {
  props: {
    time: { type: String, required: true },
    activity: { type: String, required: true },
    loc: { type: String, default: "" },
  },
};
</script>

<style scoped>
.background {
  background-color: var(--v-primary-base);
}
</style>