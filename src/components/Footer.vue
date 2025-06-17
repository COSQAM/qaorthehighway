<template>
  <v-footer absolute app height="auto" dark color="primary">
    <v-btn text small class="caption pa-0" target="_blank" rel="noreferrer"
      href="https://join.slack.com/t/qaorthehwy/shared_invite/zt-18erd50r8-1hzOCOkriNCvVdLgHDKMKQ">
      <v-icon>$vuetify.icons.slack</v-icon>
      <span class="pl-2 text-none">Join us on Slack</span>
    </v-btn>
    <v-spacer />
    <div>
      <v-btn text small class="caption pa-0 text-none" @click="showForm = true">
        <v-icon class="pr-2">mdi-email</v-icon>
        Sign up for Updates
      </v-btn>
      <v-dialog v-model="showForm" eager max-width="425px">
        <div ref="senderFormContainer"></div>
      </v-dialog>
    </div>
  </v-footer>


</template>

<script>
export default {
  data() {
    return {
      social: [
        {
          icon: "$vuetify.icons.linkedin",
          url: "https://www.linkedin.com/in/ryanquellhorst/",
          title: "Ryan Quellhorst LinkedIn",
        },
        {
          icon: "$vuetify.icons.github",
          url: "https://github.com/rquellh",
          title: "Ryan Quellhorst Github",
        },
      ],
      showForm: false,
      formLoaded: false,
    };
  },
  mounted() {
    if (window.sender) {
      window.sender('703d8bdf1b6784');
    }
  },
  watch: {
    showForm(newVal) {
      if (newVal && !this.formLoaded) {
        this.loadSenderForm();
        this.formLoaded = true;
      }
    },
  },
  methods: {
    loadSenderForm() {
      this.$nextTick(() => {
        if (window.sender && this.$refs.senderFormContainer) {
          this.$refs.senderFormContainer.innerHTML = `<div class="sender-form-field" data-sender-form-id="e0RDX3"></div>`;
          window.sender('703d8bdf1b6784');
        }
      });
    },
  },
};
</script>

<style scoped></style>
