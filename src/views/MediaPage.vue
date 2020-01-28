<template>
  <div class="media">
    <h1 class="text-center mb-3">This is a media page</h1>
    <v-row>
      <v-card class="mx-auto" max-width="560" outlined>
        <v-list-item three-line>
          <v-list-item-content>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/YgBGb73WmrY"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </v-list-item-content>
        </v-list-item>
      </v-card>
      <v-card class="mx-auto" max-width="560" outlined>
        <v-list-item three-line>
          <v-list-item-content>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/L_Rzy9W1sdg"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </v-list-item-content>
        </v-list-item>
      </v-card>
    </v-row>
  </div>
</template>
