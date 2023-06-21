<template>
  <div class="container">
    <h1 class="brown--text">Compartinos tu receta</h1>
      <v-form ref="form">
        <v-text-field
          v-model="form_data.recetaNombre"
          label="Nombre"
          counter="20">
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
      return this.errores.length; // Devuelve cantidad errores
    },
  },

  methods: {
    guardar: function (form_data) {
      console.log(form_data.selected);

      this.control = true; //queremos evaluar que los mensajes se muestren solo cuando se ejecute la funcion
      this.errores = []; //vaciamos el array de errores

      console.log(this.contacto);

      if (!this.form_data.recetaNombre) {
        console.log(!this.form_data.recetaNombre);
        this.errores.push("El nombre es obligatorio.");
      }

      if (this.form_data.recetaNombre && this.form_data.recetaNombre.length < 5) {
        this.errores.push("El nombre de la receta debe tener más de 5 caracteres.");
      }

      if (!this.form_data.recetaDescripcion) {
        this.errores.push("La descriçión de la receta no puede estar vacía.");
      }

      console.log(form_data.selected);

      if (form_data.selected.length === 0) {
        this.errores.push("Debe seleccionar una categoría.");
      }

      if (!form_data.origen) {
        this.errores.push("El origen o historia de tu receta no puede estar vacía.");
      }

      if (this.errores.length == 0) {
        form_data = Object.assign({}, form_data, { id: new Date().getTime() });
        console.log(form_data);

        if (!localStorage.form) {
          this.datosForm = [];
        } else {
          this.datosForm = JSON.parse(localStorage.getItem("form"));
        }

        this.datosForm.push(form_data);
        localStorage.setItem("form", JSON.stringify(this.datosForm));
        //this.$router.push("/recetaDescripcionsguardadas");
        this.$router.push("/recetasguardadas");
      }
    },
  },
};
</script>


































 <!--
  
  <script>
    export default {
      name: 'FormComponent',
  
    data: () => ({
        
        form_data:{
            id			: null,
            nombre		: null,
            categorias	: [
                {
                    nombre : "Chocolate",
                    id : 1
                },
                {
                    nombre : "Vainilla",
                    id : 2
                },
                {
                    nombre : "Crema",
                    id : 3
                },
                {
                    nombre : "Frutas",
                    id : 4
                },

            ],
            categoriasCargadas 		: [],
            ingrediente 			: null,
            ingredientesCargados	: [],
            receta					: null,
            historia				: null,
            img						: null,
            errores 				: [],
            enviado  				: false,
        },
        postresAgregados : [],
        local : [],
		
    }),
     methods: {
        agregarCategoria(e){

            for (const c of this.form_data.categorias) {
                
                if(e.target.id == c.id){
                    this.form_data.categoriasCargadas.push(c);

                }
            }
        },
        cargaImg(e){
            this.form_data.img = e.target.value;
        },
        agregarIngrediente:function(){

            if(this.form_data.ingrediente != null){
                this.form_data.ingredientesCargados.push(this.form_data.ingrediente);
                this.form_data.ingrediente = null;

            }
        },
        agregarPostre:function(form_data){

            this.form_data.enviado = true;
            this.form_data.errores = [];

            if (!this.form_data.nombre) {
                this.form_data.errores.push('El nombre es obligatorio.');
            
            }
            if(this.form_data.categoriasCargadas.length == 0){
                this.form_data.errores.push('Debe seleccionar una categoría.');
            }
            if (this.form_data.ingredientesCargados.length < 2) {
            this.form_data.errores.push('Debe ingresar al menos 2 ingredientes.');
            
            }
            if (this.form_data.receta == null) {
            this.form_data.errores.push('Debe ingresar una receta.');
            
            }
            if(this.form_data.errores.length == 0){

                if(!localStorage.postresAgregados){
                    this.postresAgregados = [];
                } else {
                    this.postresAgregados = JSON.parse(localStorage.getItem("postresAgregados"));
                }

                let id 		= this.postresAgregados.length;
                let idMax 	= this.postresAgregados.length;
                if(id == idMax){
                    id++;
                    form_data.id = id;
                }
                idMax = id;

                let nuevaReceta = {
                    id : this.form_data.id,
                    nombre: this.form_data.nombre,
                    categorias: this.form_data.categoriasCargadas,
                    ingredientes: this.form_data.ingredientesCargados,
                    img: this.form_data.img,
                    receta: this.form_data.receta,
                    historia: this.form_data.historia,
                }
                this.postresAgregados.push(nuevaReceta);
                localStorage.setItem("postresAgregados",JSON.stringify(this.postresAgregados));

            }
        },
	},

    computed : {
		erroresForm: function(){
			return this.form_data.errores.length;  
		}
	}
}
</script>-->
  