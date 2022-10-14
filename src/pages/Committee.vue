<template>
  <v-app>
    <Layout>
      <v-content>
        <Header title="Committee" />
        <div class="max-center-small font-weight-light pa-5">
          <div class="pb-5">
            ​The QA or the Highway conference is organized by COSQAM (Central
            Ohio Software Quality Assurance & Management), which is backed by QA
            leaders from several Central Ohio organizations
          </div>
          <div class="pb-5">
            In addition to organizing and running the QA or the Highway
            conference, COSQAM also offers quarterly Lunch & Learn presentations
            on QA and Testing topics.
          </div>
          <div class="pb-5">
            ​At COSQAM, we are dedicated to elevating the QA and Testing
            industry – for us, it is QA or the Highway!
          </div>
        </div>
        <v-row class="text-center max-center my-5">
          <v-col
            sm="12"
            md="4"
            class="my-5"
            v-for="(member, index) in members"
            :key="index"
          >
            <v-avatar size="300">
              <img :src="findImage(member.name)" />
            </v-avatar>
            <div class="headline font-weight-bold pt-3">
              {{ member.name }}
            </div>
            <p class="text-subtitle-1 grey--text">
              {{ member.title }}
            </p>
          </v-col>
        </v-row>

        <Break class="color" />
        <div style="height: 50px"></div>
        <div class="background">
          <div class="max-center-small pa-5">
            <h3 class="text-h5 font-weight-black white--text text-center pb-5">
              COSQAM Cares
            </h3>
            <div class="font-weight-light">
              <div class="pb-5">
                At COSQAM, we like to provide support in multiple ways. This
                includes offering monetary donations towards STEM-related
                subjects at local schools.
              </div>
              <div class="pb-5">
                In 2020, COSQAM made a $2,000 donation to the South-Western City
                School district. The money was used by the Math department at
                Westland High School towards the purchase of their first 3D
                printer! We received this from Executive Director of Secondary
                Education, Erik Shuey, Ed.D:
              </div>
              <div class="pb-5">
                We offer 18 different math courses in our building to a very
                diverse population of students, and we are planning on using
                this printer in as many of those classes as possible.
              </div>
              <div class="pb-5">
                Students will be able to use algebra and geometry concepts such
                as equations, functions, angles, shapes, proportions, and
                fractions when designing or altering a 3d object. Students will
                have the opportunity to see and hold the result of their work
                and computations, which will bring real connections to their
                thinking, learning, and understanding. This will allow students
                to push their math knowledge and see that simple objects can be
                made with simple math, and complex objects can be created with
                complex math.
              </div>
              <div class="pb-5">
                We know that connections to math and tangible objects, real life
                situations, and modeling with math are very important to both
                student interest and understanding. We cannot wait to find ways
                to get started with this in our classrooms. Our math team is
                excited to incorporate this into our lesson planning and
                teaching, and continue to get students excited about their
                learning.
              </div>
            </div>
          </div>
        </div>
      </v-content>
    </Layout>
  </v-app>
</template>

<script>
import Header from "@/components/Header";
import Break from "@/components/icons/Break";

export default {
  components: {
    Header,
    Break,
  },
  data() {
    return {
      members: [
        { name: "Joe Beale", title: "President", bio: "", image: "" },
        { name: "Jared Kiste", title: "Treasurer", bio: "", image: "" },
        { name: "Barry Kuck", title: "", bio: "", image: "" },
        { name: "Jenna Davis", title: "", bio: "", image: "" },
        { name: "Krishna Bandarupalli", title: "", bio: "", image: "" },
        { name: "Anna Heiermann", title: "", bio: "", image: "" },
        { name: "Dave Sadlon", title: "", bio: "", image: "" },
        { name: "Ryan Quellhorst", title: "", bio: "", image: "" },
      ],
    };
  },
  methods: {
    findImage: (speaker) => {
      try {
        return require(`@/assets/images/${speaker.toLowerCase()}.webp`);
      } catch (error) {
        return require("@/assets/images/generic-profile.png");
      }
    },
  },
  metaInfo() {
    return {
      title: "Committee",
    };
  },
};
</script>

<style scoped>
.color {
  color: var(--v-secondary-base);
  bottom: none;
}
.background {
  background-color: var(--v-secondary-base);
}
.max-center {
  max-width: 1200px;
  margin: 0 auto;
  float: none;
}
.max-center-small {
  max-width: 1000px;
  margin: 0 auto;
  float: none;
}
</style>