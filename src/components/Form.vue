<template>
    <v-container>
      <!-- <v-row class="text-center">
        <v-col cols="12">
          <v-img
            :src="require('../assets/logo.svg')"
            class="my-3"
            contain
            height="200"
          />
        </v-col>
  
        <v-col class="mb-4">
          <h1 class="display-2 font-weight-bold mb-3">
            HOLA MICA
          </h1>
  
          <p class="subheading font-weight-regular">
            For help and collaboration with other Vuetify developers,
            <br>please join our online
            <a
              href="https://community.vuetifyjs.com"
              target="_blank"
            >Discord Community</a>
          </p>
        </v-col>
  
        <v-col
          class="mb-5"
          cols="12"
        >
        </v-col>
      </v-row> -->
      <section data-postres="form">
		<h3>Subí tu postre</h3>
			<form action="#" method="post" enctype="multipart/form-data" v-on:submit.prevent>

                <div data-form="nombre">
                  <label for="nombre">Nombre</label>
                  <input type="text" id="nombre" name="nombre" v-model="form_data.nombre">
                </div>

                <div data-form="categorias">
                  <p>Categoría</p>
                  <div  v-for="item of form_data.categorias" :key="item.id"  data-categorias="categoria">
                    <input type="checkbox" :name="item.nombre" :value="item.nombre" :id="item.id" @change="agregarCategoria">
                    <label :for="item.id">{{item.nombre}}</label>
                  </div>
                </div>

                <div data-form="ingredientes">
                  <label for="ingredientes">Ingredientes</label>
				  <div data-ingredientes="ingredientes">
				  	<p v-for="item in form_data.ingredientesCargados" :key="item">{{item}}, </p>
				  </div>
                  <input type="text" id="ingredientes" name="ingredientes" v-model="form_data.ingrediente">
                  <button @click="agregarIngrediente()" type="button">Agregar</button>
                </div>

				<div data-form="imagen">
					<label for="img">Imagen:</label>
					<input @change="cargaImg" type="file" id="img" name="img" accept="image/png, image/jpeg">
				</div>

                <div data-form="receta">
                  <label for="receta">Receta</label>
                  <textarea v-model="form_data.receta" name="receta" id="receta"></textarea>
                </div>

                <div data-form="origen">
                  <label for="origen">Origen/historia</label>
                  <textarea v-model="form_data.historia" name="origen" id="origen"></textarea>
                </div>
				<div data-form="cargar-postre">
					<button @click="agregarPostre(form_data)" type="submit"> Cargar postre</button>
				</div>
			</form>

			<div data-form="errores" v-if="form_data.enviado === true">
				<div v-if="erroresForm">
					<ol data-poste="errores">
						<li v-for="x in form_data.errores" :key="x.id">{{x}}</li>
					</ol>
				</div>
				<div v-else>
					<p data-poste="cargado">Postre cargado correctamente</p>
				</div>
 			</div>
		</section>
    </v-container>
  </template>
  
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
</script>
  