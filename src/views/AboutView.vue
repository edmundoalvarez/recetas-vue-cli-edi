<template>
  <div class="container">
    <div class="form">
      <h1>Editar</h1>
      <form v-on:submit.prevent>
        <v-text-field
          v-model="nuevoObj.recetaNombre"
          label="Autor"
          counter="20"
        ></v-text-field>

        <v-textarea
          label="Frase"
          v-model="nuevoObj.recetaDescripción"
          rows="2"
          row-height="20"
        >
        </v-textarea>
        <v-select
          :items="items"
          label="Seleccionar Categoría"
          multiple
          id="selec"
          v-model="nuevoObj.selected"
        >
        </v-select>


        <v-text-field
        v-model="nuevoObj.origen"
        label="Origen/Historia">
      </v-text-field>


        <div class="center">
          <v-btn
            rounded
            color="teal"
            dark
            @click="editar(nuevoObj)"
            class="guardar"
            value="Guardar"
            >Guardar
          </v-btn>
        </div>
      </form>
    </div>
  </div>
</template> 

<script>
export default {
  name: "AboutView",
  data: function () {
    return {
      nuevoObj: {
          recetaNombre: this.$route.params.recetaNombre,
          recetaDescripción: this.$route.params.recetaDescripción,
          selected: this.$route.params.selected.split(","),
          origen: this.$route.params.origen,
          id: this.$route.params.id,
      },
      items: ["Chocolate", "Vainilla", "Crema", "Fruta", "Otro"],
    };
  },
  

  methods: {
   

    editar: function () {
      this.local = JSON.parse(localStorage.getItem("form"));

      for (var i = 0; i < this.local.length; i++) {
        if (this.local[i].id == this.nuevoObj.id) {
          this.local.splice(i, 1);

          console.log("es igual, se borra");
        }
      }

      this.local.push(this.nuevoObj);
      localStorage.setItem("form", JSON.stringify(this.local));

      this.$router.push("/recetasguardadas");
    },
  },
};
</script>


