<template>
    <div class="container py-5">
        <div class="col-md-12 text-center">

            <!-- ROUTE TO NAVIGATE INTO VUE ROUTER -->
            <router-link to="/profile/5ec7dd672f00003b0a427579">
                <button type="button" class="btn btn-primary mx-5">Visitar Perfil do Muleklizzo</button>
            </router-link>
            
            <router-link to="/profile/5ecbe07d3000005a67ddd9df">
                <button type="button" class="btn btn-primary mx-5">Visitar Perfil do Fallen</button>
            </router-link>
        </div>
    </div>

</template>

<script>

export default {

    name: 'ProfilePage',
  
    data: function() {
        return {
            profile: {},
        }
    },

  methods: {

    },

    mounted : function() {
        
    }

}
</script>

<style scoped>
    .header-blue{
        background: linear-gradient(180deg, rgba(73, 163, 253, 0.16) 0%, rgba(73, 163, 253, 0) 100%),
        linear-gradient(90deg, #212335 17.54%, rgba(33, 35, 53, 0.64) 51.46%, #212335 82.67%), 
        url('~@/assets/images/header-blue.png'), #212335;
    }

    .header-red{
        background: linear-gradient(180deg, rgba(251, 75, 86, 0.08) 0%, rgba(251, 75, 86, 0) 100%),
        linear-gradient(90deg, #212335 17.54%, rgba(33, 35, 53, 0.64) 51.46%, #212335 82.67%),
        url('~@/assets/images/header-red.png'), #212335;
    }

    .border-avatar {
        border: 2px solid !important;
        border-color:#9CC00C !important;
    }

    .bg-blue{
        background:linear-gradient(90deg, #49A3FD 0%, #61B3FA 100%);
    }
</style>