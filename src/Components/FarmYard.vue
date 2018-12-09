<template>
  <v-container fill-height>
    <v-flex (xs2| sm2 | md2 lg2 xl2)></v-flex>
    <v-layout align-center justify-center row wrap>
      <v-flex v-for="(animal) in barnyard" :key="animal" (xs5 | sm5 md5 lg5 xl5) ma-1>
        <v-img :src="animal"/>
      </v-flex>
    </v-layout>
    <v-flex (xs2| sm2 | md2 lg2 xl2)></v-flex>
  </v-container>
</template>

<script>
import pigPic from "../assets/images/pig.svg";
import pigSound from "../assets/audio/pig.mp3";
import foxPic from "../assets/images/fox.svg";
import foxSound from "../assets/audio/fox.mp3";
import cowPic from "../assets/images/cow.svg";
import cowSound from "../assets/audio/cow.mp3";

const foxsSound = new Audio(foxSound);
const cowsSound = new Audio(cowSound);
const pigsSound = new Audio(pigSound);

export default {
  name: "FarmYard",
  data() {
    return {
      barnyard: [cowPic, cowPic, cowPic, cowPic]
    };
  },
  methods: {
    selectAnimal: function(inputAnimal) {
      if (inputAnimal === "fox") {
        this.centerPhrase = function(event) {
          foxsSound.play();
        };
        this.animalPhrase = "Fox says";
      } else if (inputAnimal === "cow") {
        this.centerPhrase = function(event) {
          cowsSound.play();
        };
        this.animalPhrase = "Cow says";
      } else if (inputAnimal === "pig") {
        this.centerPhrase = function(event) {
          pigsSound.play();
        };
        this.animalPhrase = "Pig says";
      }
    }
  }
};
</script>


<style scoped>
</style>
