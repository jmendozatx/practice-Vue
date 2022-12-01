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
        <add-vehicle />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import AddVehicle from "./components/AddVehicle";

export default {
  name: "App",

  components: {
    AddVehicle,
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
</style>
