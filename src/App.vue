<template>
  <div id="app">
    <v-app 
      id="barnYard" 
      class="transparent">
      <v-container>
        <!-- Card to store the animal noise -->
        <v-flex
          offset-md1
          offset-sm1
          offset-xs1
          offset-lg1
        >
          <h1
            id="animalTitle"
            justify-center
            align-center
            text-md-center
            text-xs-center
            text-sm-center
            text-lg-center
          >{{ animalPhrase }}</h1>
        </v-flex>
        <FarmYard/>
      </v-container>
      <v-container app>
        <!-- Button Menu in lower corner -->
        <v-layout row id="buttonMenu">
          <table id="animalsMenu">
            <td>
              <v-fab-transition>
                <v-btn v-show="menuOut" color="orange" fab>
                  <v-icon>add</v-icon>
                </v-btn>
              </v-fab-transition>
            </td>
            <td>
              <v-fab-transition>
                <v-btn v-show="menuOut" color="pink" fab>
                  <v-icon>add</v-icon>
                </v-btn>
              </v-fab-transition>
            </td>
            <td>
              <v-fab-transition>
                <v-btn v-show="menuOut" color="black" fab>
                  <v-icon color="white">add</v-icon>
                </v-btn>
              </v-fab-transition>
            </td>
            <td>
              <v-btn color="red" fab @click.native="menuOpen()">
                <v-icon>add</v-icon>
              </v-btn>
            </td>
          </table>
        </v-layout>
      </v-container>
    </v-app>
  </div>
</template>

<script>
import FarmYard from "./components/FarmYard.vue";

export default {
  name: "App",
  components: {
    FarmYard
  },
  data() {
    return {
      menuOut: false,
      firstSelection: false,
      animalPhrase: "Open The Menu Below",
      centerPhrase: "none",
      centerPicture: "none",
      foxsSound: foxsSound,
      pigsSound: pigsSound,
      cowsSound: cowsSound
    };
  },
  methods: {
    menuOpen: function(event) {
      if (!this.firstSelection) {
        this.animalPhrase = "Pick an Animal";
        this.firstSelection = true;
      }
      this.menuOut = !this.menuOut;
    }
  }
};
</script>

<style>
#animalTitle {
  font-size: 10vw;
}
#animalPic {
  padding-bottom: 5vh;
  padding-top: 5vh;
}
#buttonMenu {
  position: absolute;
  bottom: 5%;
  right: 5%;
}
#animalsMenu {
  width: 100%;
}
</style>
