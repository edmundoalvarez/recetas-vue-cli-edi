<template>
  <v-app>

    <h1 class="d-none">Tus postres favoritos</h1>
    <v-navigation-drawer v-model="drawer" app class="brown">
      <v-list tag="ul">
        <li v-for="item in items" :key="item.titulo">
          <v-list-item :to="item.path">
            <v-list-item-action >
              <v-icon class="space--text">mdi-{{ item.icono }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title class="space--text">
                {{ item.titulo }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </li>
      </v-list>
    </v-navigation-drawer>


    <v-app-bar class="amber" app >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="space--text">TUS POSTRES FAVORITOS</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>


  <v-footer height="auto">
      <v-card class="flex" flat tile>
        <v-card-title class="blue-grey">
          <v-spacer></v-spacer>

          <v-btn v-for="icon in icons" :key="icon" class="mx-3" dark icon>
            <v-icon size="24px">{{ icon }}</v-icon>
          </v-btn>
        </v-card-title>

        <v-card-actions class="brown justify-center mb-0">
          <span>&copy;2023 - Edi Alvarez y Mica Zayas</span>
        </v-card-actions>
      </v-card>
    </v-footer>
  </v-app>


</template>

<script>
export default {
  name: "App",
  data: () => ({
    datosForm: [],
    recetas: [],
    icons: ["mdi-facebook", "mdi-twitter", "mdi-instagram", "mdi-youtube", "mdi-linkedin"],
    items: [
      {
        titulo: "Home",
        icono: "home",
        path: "/",
      },
      {
        titulo: "Agregar recetas",
        icono: "cake",
        path: "/cargar",
      },
      {
        titulo: "Mis recetas",
        icono: "heart",
        path: "/recetasguardadas",
      },
    ],
    drawer: null,
  }),

  mounted(){
    fetch("https://tu-postre.000webhostapp.com/api/api.php")
    .then(response => response.json())
    .then(response => {
      this.recetas = response;
      console.log(response);
      localStorage.setItem("dato", JSON.stringify(this.recetas));
    })
    .catch( err => console.log("Problemas acá: ",err));
  }
};
</script>

<style scoped>
.theme--light.v-list {
  padding: 0;
}

.theme--light.v-footer {
  padding: 0;

}
</style>
