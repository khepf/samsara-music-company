<template>
  <header
    v-click-outside="closeHamburgerMenu"
    v-handle-scroll="closeHamburgerMenu"
  >
    <v-app-bar app>
      <v-app-bar-nav-icon
        @click="hamburgerMenuOpen = !hamburgerMenuOpen"
      ></v-app-bar-nav-icon>

      <v-toolbar-title>Samsara Music Company</v-toolbar-title>
      <v-spacer />
      <v-btn icon color="black">
        <v-icon>mdi-facebook</v-icon>
      </v-btn>
      <v-btn icon color="black">
        <v-icon>mdi-spotify</v-icon>
      </v-btn>
      <v-btn icon color="black">
        <v-icon>mdi-instagram</v-icon>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer
      v-model="hamburgerMenuOpen"
      left
      color="primary"
      dark
      app
    >
      <v-list nav>
        <v-list-item v-for="(item, i) of links" :key="i" :to="item.url">
          {{ item.label }}
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-content>
      <v-container grid-list-xl> </v-container>
    </v-content>
  </header>
</template>
<script>
import clickOutside from "@/directives/click-outside";
import handleScroll from "@/directives/handle-scroll";
export default {
  name: "TheNavbar",
  directives: {
    clickOutside,
    handleScroll
  },
  data: () => ({
    hamburgerMenuOpen: false,
    links: [
      {
        label: "Home",
        url: "/"
      },
      {
        label: "About",
        url: "/about"
      },
      {
        label: "Media",
        url: "/media"
      },
      {
        label: "Releases",
        url: "/releases"
      },
      {
        label: "Store",
        url: "/store"
      },
      {
        label: "Shows",
        url: "/shows"
      }
    ]
  }),
  methods: {
    closeHamburgerMenu() {
      this.hamburgerMenuOpen = false;
    }
  }
};
</script>
<style>
.v-overlay {
  z-index: 6 !important;
}
</style>
