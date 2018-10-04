<template>
  <div id="cow">
    <v-card>
      <v-card-title id="animalTitle">
        <v-flex offset-md4 offset-sm4 offset-xs4 offset-lg4 sm4 xs4 md4>
          <h1  justify-center align-center text-md-center text-xs-center text-sm-center text-lg-center>{{ animalPhrase }}</h1>
        </v-flex>
      </v-card-title>
      <v-flex justify-center align-center offset-md4 offset-sm4 offset-xs4 offset-lg4 sm4 xs4 md4>
        <v-card-media id="animalPic">
          <v-img :src= "cow_pic" v-on:click="saycow" height= "20vw" width="24vw"/>
        </v-card-media>
      </v-flex>
    </v-card>  
  </div>
</template>

<script>
import cow_pic from "@/assets/images/cow.svg";
import cow from "@/assets/audio/cow.mp3";

const cowSound = new Audio(cow);

export default {
  name: "cow",
  data() {
    return {
      animalPhrase: "What does the cow say?",
      cow_pic: cow_pic,
      cowSound: cowSound
    };
  },
  methods: {
    saycow: function(event) {
      cowSound.play();
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
