<template>
  <v-container>
    <v-layout text-center wrap>
      <v-flex xs12 justify="center">
        <section
          class="top-flex"
          :style="{
            backgroundImage: `url(${band1})`,
            backgroundSize: 'cover'
          }"
        >
          <v-img
            :src="require('@/assets/samsara-logo.jpg')"
            class="my-3 samsara-logo"
            contain
            height="400"
          ></v-img>
        </section>
      </v-flex>

      <v-flex mb-4>
        <h1 class="mb-3">
          poly-rhythmic multi-ethnic groove-fusion
        </h1>
        <p class="subheading font-weight-regular">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae
          harum iusto
          <br />dolor sit amet, consectetur adipisicing elit. Repellendus
          <a href="https://community.vuetifyjs.com" target="_blank"
            >Discord Community</a
          >
        </p>
      </v-flex>

      <v-flex mb-5 xs12>
        <h2 class="mb-3">What's next?</h2>

        <v-layout justify-center>
          <a
            v-for="(next, i) in whatsNext"
            :key="i"
            :href="next.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ next.text }}
          </a>
        </v-layout>
      </v-flex>

      <v-flex xs12 mb-5>
        <h2 class="mb-3">Important Links</h2>

        <v-layout justify-center>
          <a
            v-for="(link, i) in importantLinks"
            :key="i"
            :href="link.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ link.text }}
          </a>
        </v-layout>
      </v-flex>

      <v-flex xs12 mb-5>
        <h2 class="mb-3">Ecosystem</h2>

        <v-layout justify-center>
          <a
            v-for="(eco, i) in ecosystem"
            :key="i"
            :href="eco.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ eco.text }}
          </a>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import band1 from "@/assets/band1.jpg";
export default {
  name: "Home",

  data: () => ({
    ecosystem: [
      {
        text: "vuetify-loader",
        href: "https://github.com/vuetifyjs/vuetify-loader"
      },
      {
        text: "github",
        href: "https://github.com/vuetifyjs/vuetify"
      },
      {
        text: "awesome-vuetify",
        href: "https://github.com/vuetifyjs/awesome-vuetify"
      }
    ],
    importantLinks: [
      {
        text: "Chat",
        href: "https://community.vuetifyjs.com"
      },
      {
        text: "Made with Vuetify",
        href: "https://madewithvuejs.com/vuetify"
      },
      {
        text: "Twitter",
        href: "https://twitter.com/vuetifyjs"
      },
      {
        text: "Articles",
        href: "https://medium.com/vuetify"
      }
    ],
    whatsNext: [
      {
        text: "Explore components",
        href: "https://vuetifyjs.com/components/api-explorer"
      },
      {
        text: "Select a layout",
        href: "https://vuetifyjs.com/layout/pre-defined"
      },
      {
        text: "Frequently Asked Questions",
        href: "https://vuetifyjs.com/getting-started/frequently-asked-questions"
      }
    ],
    band1
  })
};
</script>
<style lang="scss">
.samsara-logo {
  opacity: 0.8;
}
</style>
