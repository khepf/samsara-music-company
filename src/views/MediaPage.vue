<template>
  <v-container fluid>
    <h1 class="text-center mb-3">This is a media page</h1>
    <v-row justify="center" align="center">
      <v-card class="mx-auto" outlined>
        <v-card-title>Leaves</v-card-title>
        <v-list-item three-line>
          <v-list-item-content class="iframe-container">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/YgBGb73WmrY"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope;
            picture-in-picture"
              allowfullscreen
            >
            </iframe>
          </v-list-item-content>
        </v-list-item>
      </v-card>
      <v-card class="mx-auto" outlined>
        <v-card-title>Meester Jubenesah</v-card-title>
        <v-list-item three-line>
          <v-list-item-content class="iframe-container">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/L_Rzy9W1sdg"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </v-list-item-content>
        </v-list-item>
      </v-card>
    </v-row>
  </v-container>
</template>
<style>
.iframe-container {
  overflow: hidden;
}
</style>
