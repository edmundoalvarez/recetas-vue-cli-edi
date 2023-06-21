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
    <div class="introduccion">
      <div>
        <h2>¡Bienvenidos a "tu postre favorito"!</h2>
        <p>Estás listo para conocer a la base de datos de recetas de postres más grande del mundo, en donde los usuarios agregan sus recetas favoritas y todos los meses publicamos las 4 favoritas de nuestros usuarios?. Quiénes serán los ganadores de este mes?</p>
      </div>
    </div>
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
<style scope>
.introduccion{
  background: rgba(90, 40, 9, 0.9);
  padding: 20px;
}
.introduccion > div{
  width: 80%;
  margin: 60px auto;
  color: white;
  padding:20px 40px;
}
</style>