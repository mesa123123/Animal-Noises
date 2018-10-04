<template>
  <div id="pig">
    <v-card>
      <v-card-title id="animalTitle">
        <v-flex offset-md4 offset-sm4 offset-xs4 offset-lg4 sm4 xs4 md4>
          <h1  justify-center align-center text-md-center text-xs-center text-sm-center text-lg-center>{{ animalPhrase }}</h1>
        </v-flex>
      </v-card-title>
      <v-flex justify-center align-center offset-md4 offset-sm4 offset-xs4 offset-lg4 sm4 xs4 md4>
        <v-card-media id="animalPic">
          <v-img :src= "pig_pic" v-on:click="saypig" height= "20vw" width="24vw"/>
        </v-card-media>
      </v-flex>
    </v-card>  
  </div>
</template>

<script>
import pigPic from "@/assets/images/pig.svg";
import pig from "@/assets/audio/pig.mp3";

const pigSound = new Audio(pig);

export default {
  name: "pig",
  data() {
    return {
      animalPhrase: "What does the pig say?",
      pig_pic: pigPic,
      pigSound: pigSound
    };
  },
  methods: {
    sayPig: function(event) {
      pigSound.play();
    }
  }
};
</script>

<style scoped>
#animalTitle {
  border-bottom: 5px solid rgba(125, 125, 125, 0.3);
}
#animalPic {
  padding-bottom: 5vh;
  padding-top: 5vh;
}
</style>
