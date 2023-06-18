<template>
  <v-container>
      <section data-postres="agregados">
              <h3>Mis recetas</h3>
              <div v-if="postresAgregados.length > 0">
                  <div data-postres="cards">
                      <div v-for="x of postresAgregados" :key="x.id">
                      <picture>
                          <img src="https://img.freepik.com/vector-gratis/deliciosos-postres-pintados-mano_53876-97749.jpg?w=2000" :alt="x.nombre">
                      </picture>
                  <div>
                  <h4>{{x.nombre}}</h4>
              </div>
          </div>
      </div>
              </div>
              <p v-else>{{sin_datos}}</p>
      </section>
  </v-container>
</template>

<script>
  export default {
    name: 'MisRecetasComponent',

  data: () => ({
      postresAgregados : [],
      sin_datos : "",
  
  }),

  mounted: function(){ 
      if(localStorage.postresAgregados){
          this.postresAgregados = JSON.parse(localStorage.getItem("postresAgregados"));

      } else{	
          this.sin_datos = "No hay recetas que mostrar :("

      }

  },
}
</script>