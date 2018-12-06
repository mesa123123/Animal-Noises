<template>
  <div id="app">
    <v-app id="barnYard" class="transparent">
      <v-container>
        <!-- Card to store the animal noise -->
        <v-flex offset-md1 offset-sm1 offset-xs1 offset-lg1>
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
        <v-flex justify-center align-center offset-md3 offset-sm3 offset-xs3 offset-lg3>
          <v-responsive id="animalPic">
            <v-img :src="centerPicture" v-on:click="centerPhrase" height="40vw" width="48vw"/>
          </v-responsive>
        </v-flex>
      </v-container>
      <v-container app>
        <!-- Button Menu in lower corner -->
        <v-layout row id="buttonMenu">
          <table id="animalsMenu">
            <td>
              <v-fab-transition>
                <v-btn color="orange" fab v-show="menuOut" @click.native="selectAnimal('fox')">
                  <v-icon>add</v-icon>
                </v-btn>
              </v-fab-transition>
            </td>
            <td>
              <v-fab-transition>
                <v-btn color="pink" fab v-show="menuOut" @click.native="selectAnimal('pig')">
                  <v-icon>add</v-icon>
                </v-btn>
              </v-fab-transition>
            </td>
            <td>
              <v-fab-transition>
                <v-btn color="black" fab v-show="menuOut" @click.native="selectAnimal('cow')">
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
import pig_pic from "@/assets/images/pig.svg";
import pigSound from "@/assets/audio/pig.mp3";
import fox_pic from "@/assets/images/fox.svg";
import foxSound from "@/assets/audio/fox.mp3";
import cow_pic from "@/assets/images/cow.svg";
import cowSound from "@/assets/audio/cow.mp3";

const foxsSound = new Audio(foxSound);
const cowsSound = new Audio(cowSound);
const pigsSound = new Audio(pigSound);

export default {
  name: "app",
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
    },
    selectAnimal: function(inputAnimal) {
      if (inputAnimal === "fox") {
        this.centerPhrase = function(event) {
          foxsSound.play();
        };
        this.centerPicture = fox_pic;
        this.animalPhrase = "Fox says";
      } else if (inputAnimal === "cow") {
        this.centerPhrase = function(event) {
          cowsSound.play();
        };
        this.centerPicture = cow_pic;
        this.animalPhrase = "Cow says";
      } else if (inputAnimal === "pig") {
        this.centerPhrase = function(event) {
          pigsSound.play();
        };
        this.centerPicture = pig_pic;
        this.animalPhrase = "Pig says";
      }
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
