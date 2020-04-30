<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import axios from 'axios'

// Components
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  data() {
    return {
      title: 'Home Rick and Morty',
      image: 'https://www.lavanguardia.com/r/GODO/LV/p6/WebSite/2019/10/07/Recortada/img_jgarriga_20191007-125340_imagenes_lv_terceros_captura_de_pantalla_2019-10-07_a_las_125046-ktFD-U47855722597hT-992x558@LaVanguardia-Web.png'
    }
  },
  mounted() {
    this.getCharacters()
  },
  components: {
    HelloWorld
  },
  methods: {
    getCharacters() {
      let url = 'https://rickandmortyapi.com/api/character/?page=1'

      axios(url)
        .then(res => {
          let charactes = res.data.results

          this.$store.commit('setCharacters', charactes)
        })
        .catch(error => console.log(error))
    }
  },
  metaInfo() {
        return { 
            title: "Epiloge - Build your network in your field of interest",
            meta: [
                {property: 'og:title', content: `${this.title}`},
                {property: 'og:site_name', content: 'Vue Example'},
                {property: 'og:type', content: 'website'},
                {property: 'og:image', content:  `${this.image}`},
                {property: 'og:description', content: 'Vue sample site showing off Twitter and Facebook Cards.'}
            ]
        }
    }
}
</script>
