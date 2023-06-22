<template>
  <v-btn rounded color="amber" dark @click="guardar(recetaCargada)" v-if="this.recetaCargada.fav == true">Quitar de fav</v-btn>
  <v-btn rounded color="amber" dark @click="guardar(recetaCargada)" v-else-if="this.recetaCargada.fav == false">Agregar a fav</v-btn>
</template>

<script>
export default {
  name: "FavoritosComponent",

  data: function () {
    return {
      favoritos : [],
      recetaCargada : this.x,
      datosForm : []

    };
  },

  props:["x"],

  methods: {
    guardar: function () {
      
      //console.log(this.recetaCargada.id);
    
      if (!localStorage.favoritos) {
        this.favoritos = [];
        
      } else {
        this.favoritos = JSON.parse(localStorage.getItem("favoritos"));
         
      }
    
      if (!localStorage.form) {
        this.datosForm = [];
        
      } else {
        this.datosForm = JSON.parse(localStorage.getItem("form"));
         
      }

      this.recetaCargada.fav == false ? this.recetaCargada.fav = true : this.recetaCargada.fav = false;

      for (const dato of this.datosForm) {
        if(this.recetaCargada.id == dato.id){
          dato.fav = this.recetaCargada.fav;
        }
        
      }
      
      if(this.recetaCargada.fav == true){

        if(this.favoritos.length > 0){

          for (const f of this.favoritos) {

            if(this.recetaCargada.id != f.id){
              this.favoritos.push(this.recetaCargada);

            }

          }
        } else {
          this.favoritos.push(this.recetaCargada);

        } 

      } else {

        if(this.favoritos.length > 0){

          for (const f of this.favoritos) {

            if(this.recetaCargada.id == f.id){
              this.favoritos.pop(f.id);

            }

          }
        } 

      } 

      localStorage.setItem("favoritos", JSON.stringify(this.favoritos));
      localStorage.setItem("form", JSON.stringify(this.datosForm));
    },

    mounted: function (){
      if(localStorage.favoritos){
          this.favoritos = JSON.parse(localStorage.getItem("favoritos"));

      }
    }
  },
}
</script>