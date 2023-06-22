<template>
  <div class="contenedor">
  <h2>Los postres destacados</h2>
    <v-card width="600" v-for="item in local" :key="item.id" class="centrado">
       <!-- <v-img :src="item.img" :alt="item.alt">  </v-img>-->
        <img :src="' https://tu-postre.000webhostapp.com/api/' +  item.img " :alt="item.alt" />
        <v-card-title primary-title>
          <div>
            <h2 class="headline mb-0">{{item.nombre}}</h2>
            <div>
              <p> {{item.detalle}} </p>
            </div>
          </div>
        </v-card-title>
      </v-card>
  </div>
</template>

<script>
  export default {
    name: 'CardServer',
    data: () => ({
      local:[],
    }),

    methods:{
      ver: function(){
        this.local=JSON.parse(localStorage.getItem("dato"))
       }
    },
    mounted:function(){
        this.ver();
    },
  }
</script>

<style>
h2{color:grey; width:100%; text-align:center; font-size: 32px;}
.contenedor{width:100%; margin: 60px 0px}
.centrado, .centrado > div{ margin:20px auto; overflow: hidden;}

p {
  margin: 0px !important;
  font-size: 16px;
  -webkit-hyphens: auto;
  -ms-hyphens: auto;
  hyphens: auto;
}
</style>