<template>
  <v-app>
    <Layout>
      <v-main>
        <Header title="Frequently Asked Questions" />
        <div class="max-center my-5">
          <div
            v-for="(question, index) in questions"
            :key="index"
            class="mx-3 preline"
          >
            <div class="text-h6 font-weight-bold primary--text">
              {{ question.q }}
            </div>
            <div class="font-weight-light margin-top">
              {{ question.a
              }}<span v-if="question.btnName" class="pl-3"
                ><v-btn
                  x-small
                  color="primary"
                  :href="question.link"
                  :target="question.target"
                  >{{ question.btnName }}</v-btn
                ></span
              >
            </div>
          </div>
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
  data() {
    return {
      questions: [
        {
          q: "When and where do I register?​",
          a: "Ticket holders may register for the conference beginning at 7:00 AM at the registration desk which is located on the North side of the first floor by the main stairway. Refer to the Venue floorplans for more information. Stop by to get your lanyard, parking voucher, and free conference swag!",
          btnName: "Venue floorplan",
          link: "/venue",
        },
        {
          q: "What if I'm hungry?​",
          a: "A full breakfast including food with hot and cold drinks will be available from 7:00 AM to 7:50 AM inside the East Ballroom on the second floor. \n\nA buffet lunch will be offered at 11:30 AM inside the East Ballroom. \n\nAfternoon refreshments and treats will be provided at the 2:55 PM break in the Danny Price Student Lounge on the second floor. \n\nThe Ohio Union also has several food and beverage options located on the first floor.",
        },
        {
          q: "What about vegetarians or vegans?",
          a: "If you prefer a vegetarian or vegan meal for lunch, please indicate so when you buy your ticket. We will have a separate breakfast and lunch buffet station with vegitarian and vegan options.",
        },
        {
          q: "How do I connect to Wi-Fi?",
          a: "Complimentary wireless internet access is available throughout the Ohio Union. To access it:\n\n1. Connect to “WiFi@OSU”. No password is required.\n\n2. After waiting 10-15 seconds to establish a connection, open a web browser. Most devices will automatically be redirected to an authentication page. If this does not occur within 30 seconds of opening your browser, type www.osu.edu into the browser’s address bar. \n\n3. Upon reaching the authentication page and reviewing the terms and conditions, check the box under the “Guests” column and click “Log-in”. \n\n4. You may be required to repeat Step 3 after several hours of inactivity.",
        },
        {
          q: "Are elevators available?",
          a: "There are two sets of elevators available in addition to the stairs. Refer to the Venue floorplans for more information.",
          btnName: "Venue floorplan",
          link: "/venue",
        },
        {
          q: "Is there any information about building accessability?",
          a: "Attendees with questions about access, accessible parking while attending the conference can contact the Ohio Union for the accessibility contact person and latest disability entrances.",
          btnName: "Ohio Union - Accessibility",
          link: "https://ohiounion.osu.edu/visiting/accessibility/",
        },
        {
          q: "Do you have any free stuff?​",
          a: "Plenty! Visit our passionate sponsors on the second floor outside the East Ballroom.  And, be sure to stay for our second keynote and closing remarks.  There are lots of prizes to win during the raffle starting at 5:15.",
        },
        {
          q: "Where can I get copies of the presentations?",
          a: "Many past slide decks from previous years are available on Slideshare.net. After this years conference, we encourage all speakers to make their slide decks available there, as well.",
          btnName: "Slideshare",
          link: "https://www.slideshare.net/qaoth",
          target: "_blank",
        },
        {
          q: "How can I tell you about my experience?",
          a: "We love feedback! Face-to-face works best. Find any Organizer or Volunteer and let them know what you think. Alternately, you can scan the QR Code on your badge to leave session-specific feedback online.",
        },
        {
          q: "I have another question that is not covered by this FAQ.",
          a: "Reach out to us via our Contact form, and we'll try to answer any additional questions to might have",
          btnName: "Contact us",
          link: "/contact",
        },
      ],
    };
  },
  metaInfo() {
    return {
      title: "FAQ",
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
.preline {
  white-space: pre-line;
}
.margin-top {
  margin-top: -1.5rem;
}
</style>