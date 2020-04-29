<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8" v-for="item in characters" :key="item.id">

        <!-- Character -->
        <div class="card">
          <div class="card-body">
            <div class="row">

              <!-- Image -->
              <div class="col-md-4">
                <img :src="item.image" alt="Character" class="img-fluid">
              </div>

              <!-- Description -->
              <div class="col-md-8 text-left">
                <!-- {{ item  }} -->
                <h1 class="card-title">{{ item.name }}</h1>
                <p class="lead text-muted">{{ item.location.name }}</p>

                <router-link :to="{name: 'Character', params: {id: item.id}}" class="btn btn-outline-primary px-3">Ver más</router-link>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
    }
  },
  computed: {
    ...mapState(['characters'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
