<template>
  <v-app>
    <v-app-bar app>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          :src="require('./assets/policyflycolorful.png')"
          transition="scale-transition"
          width="160px"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn href="https://www.policyfly.com/" target="_blank" text>
        <span class="mr-2">Website</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container class="pt-8">
        <VehiclePage />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import VehiclePage from "./pages/VehiclePage";

export default {
  name: "App",

  components: {
    VehiclePage,
  },

  data: () => ({
    //
  }),
};
</script>

<style lang="scss">
@media (min-width: 960px) {
  .container {
    max-width: 960px;
  }
}

.custom-loader {
  animation: loader 1s infinite;
  display: flex;
}
@-moz-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-webkit-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-o-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
