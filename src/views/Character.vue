<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-img">
            <img :src="character.image" :alt="character.name" class="img-fluid" />
          </div>
          <div class="card-body">
            <h1>{{ character.name }}</h1>
            <p class="lead">{{ character.location }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* import { mapState } from "vuex"; */
import axios from 'axios'

export default {
  data() {
    return {
      id: this.$route.params.id,
      character: {}
    };
  },
  mounted() {
    this.getInfo();
  },
  props: ["info"],
  computed: {
    /* ...mapState(["characters"]), */
    getId: function() {
      return this.$route.params.id;
    }
  },
  methods: {
    getInfo() {
      let url = `https://rickandmortyapi.com/api/character/${this.id}`

      axios(url)
        .then(response => {
          this.character = response.data
        })

      /* this.characters.forEach(item => {
        let id = this.getId;

        if (item.id === id) {
          console.log(item);

          this.character = item;

          return;
        }
      }); */
    }
  },
  metaInfo() {
        return { 
            title: `${this.character.name}`,
            meta: [
                {property: 'og:title', content: `${this.character.name}`},
                {property: 'og:site_name', content: 'Vue Example'},
                {property: 'og:type', content: 'website'},
                {property: 'og:image', content:  `${this.character.image}`},
                {property: 'og:description', content: `${this.character.name}`}
            ]
        }
    }
};
</script>

<style lang="scss" scoped>
</style>