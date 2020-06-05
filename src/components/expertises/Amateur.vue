<template>
    <div class="header-green border py-5">
        
        <!-- First content -->
        <div class="row align-items-center px-3">
            <div class="col-md-3">
                <div class="row align-items-center">
                    <div class="col-md-4">
                        <img class="px-1 py-1 rounded-circle border-avatar w-100" :src="profile.data.player.avatar" />
                    </div>

                    <div class="col-md-8">
                        <p class="text-white">{{profile.data.player.nickname}}</p>
                        <p class="text-muted mt-n3">ID: {{profile.data.player.id}}</p>
                    </div>
                </div>
            </div>

            <div class="col-md-6">
                <div class="row">
                    <div class="text-white" v-for="(expertise, index) in profile.data.expertiseProgress" :key="expertise.key">
                        <div class="row px-5 mx-1 pb-2">
                            <div v-if="index % 2 == 0">
                                {{expertise.label}}
                                <img style="fill: blue;" src="../../assets/images/marker.svg">
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-12">
                    <div class="progress">
                        <div class="progress-bar-green" 
                                    role="progressbar" 
                                    v-bind:style="{width: profile.data.player.expertise + '%'}" 
                                    aria-valuenow="0" 
                                    aria-valuemin="0" 
                                    aria-valuemax="100"
                        >
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="text-white" v-for="(expertise, index) in profile.data.expertiseProgress" :key="expertise.key">
                        <div class="row px-5 mx-1 pt-1">
                            <div v-if="index % 2 == 1">
                                <img src="../../assets/images/marker.svg">
                                {{expertise.label}}
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div class="col-md-3 text-right">
                <img class="border-green" :src="profile.data.featuredMedal.image">
            </div>
        </div>

        <!-- SECOND CONTENT -->
        <div class="row second-line align-items-center mt-3 pt-0 mx-0 px-0">

            <!-- CAMPEONATOS -->
            <div class="col-md-4 card-height px-0 mx-0 border-separate">
                <div class="col-md-12 mt-3">
                    <img src="../../assets/images/trophy.png"> <span class="title ml-2">Campeonatos</span>
                </div>

                <div class="row div-camp mt-4 py-3 mx-3">
                    <div class="col-md-12">
                        <button v-if="profile.data.tournaments.nextTournament.status == 'openRegistration'"
                        type="button" class="btn btn-sm btn-green">Inscrições Abertas</button>
                    </div>

                    <div class="col-md-12 mt-3">
                        <span class="title">
                            {{profile.data.tournaments.nextTournament.name}}
                            
                        </span>
                    </div>

                    <div class="col-md-12 mt-4">
                        <div class="row">
                            <div class="col-md-6">
                                <span class="teams">
                                Times inscritos
                                </span>
                            </div>

                            <div class="col-md-6 text-right">
                                {{profile.data.tournaments.nextTournament.currentTeams}}/{{profile.data.tournaments.nextTournament.maxTeams}}
                            </div>
                        </div>

                        

                        <div class="progress progress-teams">
                            <div class="progress-bar-blue"
                                    v-bind:style="{width: (profile.data.tournaments.nextTournament.currentTeams / profile.data.tournaments.nextTournament.maxTeams) * 100 + '%'}" 
                                    aria-valuenow="0" 
                                    aria-valuemin="0" 
                                    aria-valuemax="100">
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <!-- LOBBY -->
            <div class="col-md-4 card-height px-0 mx-0 border-separate">
                <div class="col-md-12 mt-3 text-left">
                    <img src="../../assets/images/door.png"> <span class="title ml-2">Lobby</span>
                </div>

                <div class="row justify-content-center mt-4 py-3 px-0 mx-0">
                    <!-- PARTIDAS -->
                    <div class="col-md-3 mx-1 card-gc">
                        <span class="matches">{{profile.data.lobby.matches}}</span>
                        <p class="title">Partidas</p>
                    </div>

                    <!-- Vitórias -->
                    <div class="col-md-3 mx-1 card-gc">
                        <span class="wins">{{profile.data.lobby.wins}}</span>
                            <p class="title">Vitórias</p>
                    </div>

                    <!-- Derrotas -->
                    <div class="col-md-3 mx-1 card-gc">
                        <span class="losses">{{profile.data.lobby.losses}}</span>
                            <p class="title">Derrotas</p>
                    </div>
                </div>

                <div class="col-md-12">
                    <button class="btn btn-lobby btn-block"><img class="mr-2" src="../../assets/images/arrow.png"> IR PARA LOBBY</button>
                </div>
            </div>

            <!-- LOBBY -->
            <div class="col-md-4 card-height px-0 mx-0 border-separate">
                <div class="col-md-12 mt-3 text-left">
                    <img src="../../assets/images/door.png"> <span class="title ml-2">{{profile.data.ranked.label}}</span>
                </div>

                <div class="col-md-12 mt-4 py-3 px-0 mx-0">
                        <!-- PARTIDAS -->
                    <div class="row justify-content-center">
                        <div class="col-md-3 mx-1 card-gc">
                            <span class="matches">{{profile.data.lobby.matches}}</span>
                            Partidas
                        </div>

                        <!-- Vitórias -->
                        <div class="col-md-3 mx-1 card-gc">
                            <span class="wins">{{profile.data.lobby.wins}}</span>
                            Vitórias
                        </div>

                        <!-- Derrotas -->
                        <div class="col-md-3 mx-1 card-gc">
                            <span class="losses">{{profile.data.lobby.losses}}</span>
                            Derrotas
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>


    export default {
        name: 'Amateur',

        props: ['profile'],
        data() {
            return{
                
            }
        },

        methods : {

        },

        mounted(){

        }
    }


</script>