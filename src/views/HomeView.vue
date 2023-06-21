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
    <v-container class="introduccion">
      <v-card>
        <h1 class="brown--text">¡Bienvenidos a "Tus Postres Favoritos"!</h1>
        <p>¿Estás listo para conocer tu anotador de postres favoritos?. En esta app podrás llevar un registro de tus recetas que estará disponible en todo momento. Además, podrás indicar el origen de la misma por lo que siempre recordarás donde la aprendiste o quien fue el creador.</p>
        <p>¡No esperes más y cargá tu primera receta o chequeá las que ya cargaste!</p>
        <v-card-actions >
          <v-btn :to="'/cargar'" rounded color="brown" dark>Cargá nueva receta</v-btn>
          <v-btn :to="'/recetasguardadas'" rounded color="amber" dark>Ver recetas cargadas</v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
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
  padding: 20px;
  background-color: rgba(206, 170, 112, 0.8);
  margin: 0px;
  max-width: 100%;
}
.introduccion > div{
  width: 80%;
  margin: 60px auto;
  color: rgb(21, 21, 21);
  padding:20px 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
p {
  margin: 0px !important;
}
</style>