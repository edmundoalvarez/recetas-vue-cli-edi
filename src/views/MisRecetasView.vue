<template>
    <v-container>
        <MisRecetasComponent></MisRecetasComponent>
    </v-container>
</template>

<script>
import MisRecetasComponent from "../components/MisRecetas.vue";


export default {
  name: "MisRecetasView",
  components: { 
      MisRecetasComponent
  },

  mounted: function(){ 
      if(localStorage.postresAgregados){
          this.postresAgregados = JSON.parse(localStorage.getItem("postresAgregados"));

      } else{	
          this.sin_datos = "No hay recetas que mostrar :("

      }

  }

};



</script>

<style scope>
h4{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.fav::after{
    content: " ";
    width: 25px;
    height: 25px;
    display: inline-block;
    background-image: url(../assets/fav.svg);
    background-position: center;
    background-repeat: no-repeat;


  }
  .no-fav::after{
    content: " ";
    width: 25px;
    height: 25px;
    display: inline-block;
    background-image: url(../assets/no-fav.svg);
    background-position: center;
    background-repeat: no-repeat;

  }
</style>
