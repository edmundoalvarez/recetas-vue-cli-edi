<template>
    <v-row>
        <v-col cols="12">
            <v-container>
                <section data-postres="agregados">
                    <h1 class="brown--text">Mis recetas</h1>
                    <div v-if="datosForm.length > 0">
                        <div data-postres="cards">
                            <v-card v-for="x of datosForm" :key="x.id" width="600px" class="mx-auto my-12">
                                <picture>
                                    <img src="https://img.freepik.com/vector-gratis/deliciosos-postres-pintados-mano_53876-97749.jpg?w=200" v-bind:alt="x.recetaNombre" height="300px" width="600px">
                                </picture>
                                <div class="title">
                                    <v-card-title>
                                        <h4 :class="x.fav == true ? 'fav' : 'no-fav'" >{{x.recetaNombre}}</h4>
                                    </v-card-title>

                                    <v-card-text class="d-block">Descripción: {{x.recetaDescripcion}}</v-card-text>
                                    <v-card-text v-for="(s, i) in x.selected" class="d-block" :key="s[i].id">Categoria: {{s}}</v-card-text>
                                    <v-card-text class="d-block">Origen: {{x.origen}}</v-card-text>
                                
                                    <v-card-actions>
                                        <FavoritosComponent :x="x">Agregar a favoritos</FavoritosComponent>
                                        <v-btn rounded color="brown" dark :to="'/editar/' + x.id" :x="x">Editar</v-btn>
                                        <v-btn
                                          rounded
                                          class="space--text m-3"
                                          color="red"
                                          :key="x.id"
                                          @click="borrar(x)"
                                          >Borrar
                                        </v-btn>
                                    </v-card-actions>
                                </div>
                            </v-card>
                        </div>
                    </div>
                    <p v-else>{{sin_datos}}</p>
                </section>
            </v-container>
        </v-col>
    </v-row>
</template>

<script>
 import FavoritosComponent from "../components/Favoritos.vue";

  export default {
    name: 'MisRecetasComponent',

    components: { 
        FavoritosComponent,
    },


    data: () => ({
        datosForm : [],
        sin_datos : "",
        selection: 1,

    
    }),

    methods: {
    recetasLocal: function() {
      
      if (localStorage.form) {
        this.datosForm = JSON.parse(localStorage.getItem("form"));

      } else{	
        this.sin_datos = "No hay recetas que mostrar :("

      }

    },

    borrar(x) {
    this.datosForm = JSON.parse(localStorage.getItem("form"));

    for (var i = 0; i < this.datosForm.length; i++) {
      if (this.datosForm[i].id == x.id) {
        var rta = confirm(
          "Confirmación de borrado de la frase de:  " + this.datosForm[i].recetaNombre
        );
        if (rta == true) {
          this.datosForm.splice(i, 1);
        }
      }
    }

    localStorage.setItem("form", JSON.stringify(this.datosForm));

    this.recetasLocal();
    },

  },

  mounted: function() {
      this.recetasLocal();
  }

};

  
</script>


