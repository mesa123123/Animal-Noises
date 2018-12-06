<template>
  <div>
    <v-container>
      <v-layout>
        <v-card>
          <v-card-media>
            
         </v-card-media>  
        </v-card>  
      </v-layout>
    </v-container>
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
  name: "farmYard",

};
</script>

<style scoped>
</style>