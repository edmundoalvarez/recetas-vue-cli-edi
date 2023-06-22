<template>
  <div class="container">
    <h1 class="brown--text">Compartinos tu receta</h1>
      <v-form ref="form">

        <v-text-field
          v-model="form_data.recetaNombre"
          label="Nombre"
          counter="20"
          >
        </v-text-field>

        <v-textarea
          label="Receta"
          v-model="form_data.recetaDescripcion"
          rows="2"
          row-height="20">
        </v-textarea>

        <v-select
          :items="items"
          label="Categoría del postre"
          multiple
          v-model="form_data.selected">
        </v-select>

        <v-text-field
          v-model="form_data.origen"
          label="Origen/Historia">
        </v-text-field>

      <div class="guardar">
        <v-btn rounded color="amber" dark @click="guardar(form_data)">
          Guardar
        </v-btn>
      </div>
    </v-form>

    <div>
      <div v-if="control === true">
        <div v-if="cantidadErrores" :class="muestraError">
          <ul>
            <li v-for="x in errores" :key="x">{{ x }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  </template>

<script>
export default {
  name: "IngresarReceta",

  data: function () {
    return {
      form_data: {
        recetaNombre: "",
        recetaDescripcion: "",
        selected: [],
        origen: "",
        id: "",
        fav: false,
      },
      items: ["Chocolate", "Vainilla", "Crema", "Fruta", "Otro"],
      errores: [],
      datosForm: [],
      control: false,
      muestraError: "pink mt-5 space--text",
      hoy: new Date(),
    };
  },

  computed: {
    cantidadErrores: function () {
      return this.errores.length; // Devolvemos la de cantidad errores
    },
  },

  methods: {
    guardar: function (form_data) {

      this.control = true; //evaluamos que los mensajes se ejecuten sólo cuando se ejecute la función
      this.errores = []; //vaciamos el array de errores

      if (!this.form_data.recetaNombre) {
        this.errores.push("El nombre es obligatorio.");
      }

      if (this.form_data.recetaNombre && this.form_data.recetaNombre.length < 5) {
        this.errores.push("El nombre de la receta debe tener más de 5 caracteres.");
      }

      if (!this.form_data.recetaDescripcion) {
        this.errores.push("La descriçión de la receta no puede estar vacía.");
      }

      if (form_data.selected.length === 0) {
        this.errores.push("Debe seleccionar una categoría.");
      }

      if (!form_data.origen) {
        this.errores.push("El origen o historia de tu receta no puede estar vacía.");
      }

      if (this.errores.length == 0) {
        form_data = Object.assign({}, form_data, { id: new Date().getTime() });

        if (!localStorage.form) {
          this.datosForm = [];
        } else {
          this.datosForm = JSON.parse(localStorage.getItem("form"));
        }
        
        this.datosForm.push(form_data);
        localStorage.setItem("form", JSON.stringify(this.datosForm));
        this.$router.push("/recetasguardadas");
      }
    },
  },
};
</script>
