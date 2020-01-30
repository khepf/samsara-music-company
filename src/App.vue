<template>
  <v-app>
    <the-navbar />

    <v-content>
      <router-view></router-view>
    </v-content>
    <the-footer />
  </v-app>
</template>

<script>
import TheFooter from "@/components/TheFooter";
import TheNavbar from "@/components/TheNavbar";
export default {
  name: "App",
  components: { TheFooter, TheNavbar },
  data: () => ({
    //
  })
};
</script>
<style>
* {
  font-family: "Kalam", cursive;
}
</style>
