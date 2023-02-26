<template>
  <v-app>
    <v-app-bar app>
      <div class="d-flex align-center logo">
        <v-img
          alt="joseph mendoza Logo"
          class="mr-3"
          contain
          :src="require('./assets/logo.svg')"
          transition="scale-transition"
          width="40px"
        />
        <span>Joseph</span> Mendoza
      </div>
      <v-spacer></v-spacer>
      <v-btn href="https://josephmendoza.com/" target="_blank" text>
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

  data: () => ({}),

  components: {
    VehiclePage,
  },
};
</script>

<style lang="scss">
.v-main {
  background: #f1f1f1;
}
.logo {
  .v-image {
    box-shadow: 0 0 10px 2px #05f184;
    border-radius: 10px;
  }

  span {
    font-weight: bold;
    margin-right: 5px;
  }
}

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
