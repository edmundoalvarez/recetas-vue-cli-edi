<template>
  <v-container>
    <section data-postres="agregados">
        <h3>Mis recetas</h3>
        <div v-if="datosForm.length > 0">
            <div data-postres="cards">
                <v-card v-for="x of datosForm" :key="x.id">
                    <picture>
                        <img src="https://img.freepik.com/vector-gratis/deliciosos-postres-pintados-mano_53876-97749.jpg?w=2000" :alt="x.nombre">
                    </picture>
                    <div>
                        <v-card-title>
                            <h4 :class="x.fav == true ? 'fav' : 'no-fav'" >{{x.recetaNombre}}</h4>
                        </v-card-title>
                        <v-card-actions>
                            <FavoritosComponent :x="x"></FavoritosComponent>
                            <v-btn rounded color="brown" dark :x="x" :to="'/recetas/' + x.id" > Ver Detalle </v-btn>
                        </v-card-actions>
                    </div>
                </v-card>
            </div>
        </div>
        <p v-else>{{sin_datos}}</p>
    </section>
  </v-container>
</template>

<script>
  import FavoritosComponent from "../components/Favoritos.vue";
  //import RecetaDetalleComponent from "../components/RecetaDetalle.vue";

  export default {
    name: 'MisRecetasComponent',

    components: { 
        FavoritosComponent,
        //RecetaDetalleComponent
    },


    data: () => ({
        datosForm : [],
        sin_datos : "",
    
    }),

    mounted: function(){ 
        if(localStorage.form){
            this.datosForm = JSON.parse(localStorage.getItem("form"));

        } else{	
            this.sin_datos = "No hay recetas que mostrar :("

        }

    },


  }
  
</script>