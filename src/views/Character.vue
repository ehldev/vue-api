<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-img">
                        <img :src="character.image" :alt="character.name" class="img-fluid">
                    </div>
                    <div class="card-body">
                        <h1>{{ character.name }}</h1>
                        <p class="lead">
                            {{ character.location.name }}
                        </p>
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
            character: {}
        }
    },
    mounted() {
        this.getInfo()
    },
    props: ['info'],
    computed: {
        ...mapState(['characters']),
        getId: function() {
            return this.$route.params.id
        }
    },
    methods: {
        getInfo() {
            console.log(this.characters)
            this.characters.forEach(item => {

               let id = this.getId
                
                if(item.id === id) {
                    console.log(item)

                    this.character = item

                    return
                }
            })
        }
    }
}
</script>

<style lang="scss" scoped>

</style>