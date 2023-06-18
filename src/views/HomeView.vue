<template>
  <div>
    <v-carousel :show-arrows="false">
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
        class="p-0 m-0">
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

 
//<script>
//import Favoritos from "../components/Favoritos.vue";

export default {
  name: "HomeView",
  //components: { Favoritos },

  data: () => ({
    items: [
    {
      src: require("@/assets/frutas.jpg"),
    },
    {
      src: require("@/assets/chocolate.jpg"),
    },
    {
      src: require("@/assets/crema.webp"),
    },
    {
      src: require("@/assets/postre-choco.jpg"),
    },
   ],

  }),

};
</script>