<template>
    <v-container>
        <h3>{{this.recetaCargada.recetaNombre}}</h3>
        <p>{{ this.recetaCargada.recetaDescripcion }}</p>
        <p>{{ this.recetaCargada.origen }}</p>
        <p>{{ this.recetaCargada.fav }}</p>
    </v-container>
</template>
  
  <script>
  export default {
    name: "RecetaDetalleComponent",
  
    data: function () {
      return {
        recetaCargada : {},
        datosForm: []
  
      };
    },
  
    props:["id"],
  
    mounted: function(){

      if (!localStorage.form) {
        this.datosForm = [];
        
      } else {
        this.datosForm = JSON.parse(localStorage.getItem("form"));
         
      }

      this.recetaSeleccionada();
  
    },

    methods : {
        recetaSeleccionada: function (){
            if(this.datosForm.length > 0) {

                for (const d of this.datosForm) {

                    if(this.$route.params.id == d.id){
                        this.recetaCargada = d;
                        console.log("Receta cargada: ", this.recetaCargada);
                    }
                    
                }

            }
        }
    }
  }
  </script>