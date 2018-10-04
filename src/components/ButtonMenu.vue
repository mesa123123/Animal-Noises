<template>
  <v-layout column id="buttonMenu">
    <v-flex>
        <table id="animalsMenu">
          <tr>
            <router-link to="/fox">
              <v-fab-transition>
              <v-btn color="orange" fab v-show="menuOut">
                <v-icon >add</v-icon>
              </v-btn>
            </v-fab-transition>
            </router-link>
          </tr>
          <tr>
            <router-link to="/pig">
              <v-fab-transition>
              <v-btn color="orange" fab v-show="menuOut">
                <v-icon>add</v-icon>
              </v-btn>
            </v-fab-transition>
            </router-link>
          </tr>
          <tr>
            <router-link to="/cow">
              <v-fab-transition>
                <v-btn color="orange" fab v-show="menuOut" >
                  <v-icon>add</v-icon>
                </v-btn>
              </v-fab-transition>
            </router-link>
          </tr>
          <tr>
            <v-btn color="red" fab @click.native="menuOut = !menuOut">
              <v-icon>menu</v-icon>
            </v-btn>  
          </tr>
        </table>
    </v-flex>
  </v-layout>
</template>

<script>
import fox_logo from "@/assets/images/fox logo.svg";

export default {
  name: "buttonMenu",
  data() {
    return {
      menuOut: false,
      foxLogo: fox_logo
    };
  }
};
</script>

<style scoped>
#buttonMenu {
  position: absolute;
  bottom: 5%;
  right: 10%;
}
</style>
