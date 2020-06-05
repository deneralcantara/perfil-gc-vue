<template>
    <div>
        <div class="container" v-if="profile.data">
            
            <Casual v-if="profile.data.player.expertise >= 25 && profile.data.player.expertise < 49" :profile="profile" />
            <Competitive v-if="profile.data.player.expertise >= 50 && profile.data.player.expertise <= 74" :profile="profile" />
            <Amateur v-if="profile.data.player.expertise >= 75 && profile.data.player.expertise < 100" :profile="profile" />
            <Pro v-if="profile.data.player.expertise == 100" :profile="profile" />
            
        </div>

        <div v-else>
            Carregando...
        </div>
    </div>

</template>

<script>
//IMPORT AXIOS TO GET PROFILE DATA
import axios from 'axios';

import Casual from '../components/expertises/Casual.vue'
import Amateur from '../components/expertises/Amateur.vue'
import Competitive from '../components/expertises/Competitive.vue'
import Pro from '../components/expertises/Pro.vue'

export default {

    name: 'ProfilePage',
    components: {
        Casual,
        Amateur,
        Competitive,
        Pro,
    },
  
    data: function() {
        return {
            profile: {},
        }
    },

  methods: {

      //FUNCTION TO GET THE DATA PROFILE
        getProfile: function()
        {
            //GET DATA TO BUILD PROFILE
            axios
                .get(`http://www.mocky.io/v2/${this.$route.params.id}`)
                .then(response => {
                    this.profile = response.data;
                })
        },

    },

    mounted : function() {
        //CALL FUNCION WHEN PAGE LOADS;
        this.getProfile();
    }

}
</script>

<style scoped>
</style>