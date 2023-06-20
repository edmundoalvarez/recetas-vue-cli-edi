<template>
    <v-container>
        <MisRecetasComponent></MisRecetasComponent>
    </v-container>
</template>
  
   
  //<script>
  import MisRecetasComponent from "../components/MisRecetas.vue";

  export default {
    name: "MisRecetasView",
    components: { 
        MisRecetasComponent
    },

    mounted: function(){ 
      if(localStorage.form){
        this.datosForm = JSON.parse(localStorage.getItem("form"));

      } else{	
        this.sin_datos = "No hay recetas que mostrar :("

      }

    }
  
  };



  </script>

  <style>

  h3 {
    margin-top: 40px !important;
    font-size: 2em;
  }
  .fav::after{
    content: " ";
    width: 20px;
    height: 20px;
    display: inline-block;
    background-image: url(../assets/fav.svg);
    background-position: center;
    background-repeat: no-repeat;
  }
  .no-fav::after{
    content: " ";
    width: 20px;
    height: 20px;
    display: inline-block;
    background-image: url(../assets/no-fav.svg);
    background-position: center;
    background-repeat: no-repeat;
  }
  [data-postres="form"]{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

}
[data-postres="form"] h3 {
    color: #66320a;
    margin: 0px 0px 40px 0px;
}

[data-postres="form"] form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 20px;
    background-color: #66320a;
    border-radius: 8px;
    color: #fff5dc;
    padding: 40px;
    width: 100%;

}
[data-postres="form"] form > div{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 5px;
    width: 100%;

}
[data-postres="form"] form > div > input {
    width: 100%;
    padding: 5px 20px;
    border-radius: 5px;
    border: #66320a 2px solid;
    background-color: white;
}

[data-postres="form"] form > div > textarea {
    width: 100%;
    padding: 5px 20px;
    border-radius: 5px;
    border: #66320a 2px solid;
    height: 150px;
    overflow-y: scroll;
}
[data-postres="form"] form > div > label {
    font-weight: 500;
    font-size: 1.1em;
}


[data-form="categorias"] {
    display: flex;
    flex-direction: row !important;
    justify-content: flex-start !important;
    align-content: center !important;
    align-items: center !important;
    column-gap: 40px !important;
    flex-wrap: wrap;
}
[data-form="categorias"] > p{
    margin: 0px;
    font-weight: 500;
    font-size: 1.1em;
    width: 100%;
}
[data-categorias="categoria"]{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 5px;
    color: white;
}
[data-form="ingredientes"]{
    display: flex;
    flex-direction: row !important;
    justify-content: flex-start !important;
    align-content: center !important;
    align-items: center !important;
    column-gap: 10px !important;
    flex-wrap: wrap;
}
[data-form="ingredientes"] > label {
    width: 100%;
}
[data-form="ingredientes"] p {
    margin: 0px;
    color: white;
}
[data-form="ingredientes"] > input {
    width: 70% !important;
}
[data-form="ingredientes"]> button {
    color: #66320a;
    background-color: #fff5dc;
    border-radius: 3px;
    border: none;
    padding: 5px 20px;
    transition: 0.3s;

}
[data-form="ingredientes"]> button:hover{
    background-color: #ebcba4;
    transition: 0.3s;
}
[data-ingredientes="ingredientes"]{
    display: flex;
    width: 100%;
    flex-direction: row !important;
    gap: 5px;
}
[data-postres="form"] form > div > textarea {
    resize: none;
    background-color: white;
}
[data-form="cargar-postre"]{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
}
[data-form="cargar-postre"] button{
    padding: 10px 20px;
    border: none;
    background-color: #fff5dc;
    color: #66320a;
    border-radius: 5px;
    margin: auto;
    transition: 0.3s;

}
[data-form="cargar-postre"]> button:hover{
    background-color: #ebcba4;
    transition: 0.3s;
}
[data-form="imagen"] > input{
    padding: 5px 0px !important;
    background-color: #66320a !important;
}

[data-poste="cargado"]{
    color: green;
    margin: 40px 0px 0px 0px;
    font-weight: 500;
}

[data-poste="errores"]{
    color: red;
    margin: 40px;
}
[data-poste="errores"] li {
    margin: 0px 0px 10px 0px;
    padding: 0;
}

[data-postres="agregados"]{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin: 20px 0px;
}
[data-postres="agregados"] div{
    width: 100%;
}

[data-postres="agregados"] h3 {
    color: #66320a;
    margin: 40px 0px 0px 0px;
}
[data-form="errores"] ol{
    margin: 40px 0px 0px 0px;
}



[data-postres="cards"]{
    margin: 40px 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    align-content: center;
    gap: 20px;}

[data-postres="cards"] > div{
    width: 700px;
    height: 150px;
    background-color: white;
    box-shadow: 1px 2px 9px 0px rgba(0,0,0,0.35);
    border-radius: 8px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    overflow: hidden;

}
[data-postres="cards"] > div > picture {
    background-color: grey;
    width: 50%;
    height: 100%;
}
[data-postres="cards"] > div > picture > img {
    width: 100%;
}
[data-postres="cards"] > div > div{
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.separacion{
    border: 3px solid #66320a;
    margin: 10px;
    border-radius: 50px;
    padding: 3rem;
    list-style: none;
  
  }
  
  .card{
    --bs-card-bg: none !important;
    background: none;
    margin: 0;
    border: none !important;
  }
  
  .card-body{
    background-color: none;
    margin: 0;
    border: none;
  }

.row.center-row{
    justify-content:center;
}
  
.img-fluid {
    width: 100% !important;
    height: 400px;
    margin-bottom: 1rem;
}

.btn-brown {
background-color: #66320a;
}

a.btn-brown {
    color: white;
}
  </style>