<template>
  <v-container class="my-5 max-center">
    <div class="header text-center">
      Session Speakers
    </div>
    <div class="carousel-container mb-5">
      <div class="carousel-wrapper py-5">
        <div
          class="carousel"
          :style="{
            transform: `translateX(-${currentSlide * slideWidth}%)`,
            transition: isTransitioning ? 'transform 0.5s ease-in-out' : 'none',
          }"
          @transitionend="handleTransitionEnd"
        >
          <div
            class="carousel-item"
            v-for="(speaker, index) in infiniteSpeakers"
            :key="index"
          >
            <v-card class="speaker-card" hover link :href="speaker.path" outlined>
              <v-row align="center" class="ml-5 my-5">
                <v-avatar size="80">
                  <img
                    :src="findImage(speaker.speaker)"
                    :alt="`${speaker.speaker} Photo`"
                  />
                </v-avatar>
                <div class="pl-3">
                  <div class="speaker-name headline font-weight-bold">
                    {{ speaker.speaker }}
                  </div>
                  <div class="speaker-bio text-subtitle-1">
                    {{ speaker.shortbio }}
                  </div>
                </div>
              </v-row>
              <v-row class="ma-0">
                <v-col cols="12" class="text-center px-5 pb-5">
                  <div class="speaker-title headline font-weight-bold">
                    {{ speaker.title }}
                  </div>
                </v-col>
              </v-row>
            </v-card>
          </div>
        </div>
      </div>
      <div class="carousel-control prev" @click="prevSlide">
        <ChevronLeft />
      </div>
      <div class="carousel-control next" @click="nextSlide">
        <ChevronLeft class="flipped" />
      </div>
    </div>
    <Break class="color" />
  </v-container>
</template>

<script>
import Break from "@/components/icons/Break";
import ChevronLeft from "./icons/ChevronLeft.vue";

export default {
  components: {
    Break,
    ChevronLeft,
  },
  props: {
    speakers: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      currentSlide: 3, // Start at the first "real" slide (after the clones)
      isTransitioning: false,
      slideWidth: 33.33, // Percentage width of each slide (100% / 3 speakers = 33.33%)
      shuffledSpeakers: [], // Local copy of speakers for shuffling
    };
  },
  computed: {
    infiniteSpeakers() {
      // Add clones of the first and last 3 items for infinite scrolling
      if (this.shuffledSpeakers.length > 0) {
        const cloneStart = this.shuffledSpeakers.slice(0, 3); // First 3 speakers
        const cloneEnd = this.shuffledSpeakers.slice(-3); // Last 3 speakers
        return [...cloneEnd, ...this.shuffledSpeakers, ...cloneStart];
      }
      return [];
    },
  },
  watch: {
    speakers: {
      immediate: true, // Run the watcher immediately when the component is created
      handler(newSpeakers) {
        // Shuffle the speakers array and assign it to shuffledSpeakers
        this.shuffledSpeakers = this.shuffleArray([...newSpeakers]);
      },
    },
  },
  methods: {
    shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    },
    nextSlide() {
      if (!this.isTransitioning) {
        this.isTransitioning = true;
        this.currentSlide++;
      }
    },
    prevSlide() {
      if (!this.isTransitioning) {
        this.isTransitioning = true;
        this.currentSlide--;
      }
    },
    handleTransitionEnd() {
      this.isTransitioning = false;

      // Handle infinite loop logic
      if (this.currentSlide === 0) {
        // Jump to the last "real" slide
        this.currentSlide = this.shuffledSpeakers.length;
      } else if (this.currentSlide === this.shuffledSpeakers.length + 3) {
        // Jump back to the first "real" slide
        this.currentSlide = 3;
      }
    },
    findImage: function(speaker) {
      try {
        return require(`@/assets/images/speakers/${speaker.toLowerCase()}.webp`);
      } catch (error) {
        return require("@/assets/images/generic-profile.png");
      }
    },
  },
  mounted() {
    // Automatically move the carousel every 3 seconds
    setInterval(() => {
      this.nextSlide();
    }, 3000);
  },
};
</script>

<style scoped>
.color {
  color: var(--v-secondary-base);
  bottom: none;
}

.carousel-container {
  position: relative;
  overflow: hidden;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

.carousel-wrapper {
  overflow: hidden;
  width: 100%;
}

.carousel {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.carousel-item {
  flex: 0 0 33.33%; /* Each item takes up 33.33% of the carousel width */
  display: flex;
  justify-content: center;
}

.speaker-card {
  text-align: left;
  width: 350px;
}

.speaker-photo {
  width: 50%;
  height: auto;
  border-radius: 50%;
}

.speaker-name {
  margin: 0;
  width: 200px;
  white-space: normal; /* Allow text to wrap */
  word-wrap: break-word; /* Break long words if necessary */
  hyphens: auto; /* Hyphenate long words */
}

.speaker-bio {
  color: #9e9e9e;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap; /* Truncate the bio to a single line */
  max-width: 220px; /* Adjust width to control truncation */
}

.speaker-title {
  font-size: 1.2rem;
  font-weight: bold;
  margin: 0;
}

.carousel-control {
  position: absolute;
  top: 50%;
  color: #d6d5d5;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
}

.carousel-control:hover {
  color: var(--v-primary-base);
  cursor: pointer;
}

.carousel-control.prev {
  left: 5px;
}

.carousel-control.next {
  right: 5px;
}

.flipped {
  transform: scaleX(-1); /* Flip the icon horizontally */
}

.header {
  background: var(--v-primary-base); /* Adjust color as needed */
  color: #fff;
  font-weight: bold;
  text-transform: uppercase;
  padding: 0.75rem 1.5rem;
  border-radius: 6px 6px 0 0;
  font-size: 1.1rem;
  letter-spacing: 1px;
  text-align: left;
}
.max-center {
  max-width: 1200px;
  margin: 0 auto;
  float: none;
}
</style>
