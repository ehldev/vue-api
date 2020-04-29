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
  }
}
</script>
