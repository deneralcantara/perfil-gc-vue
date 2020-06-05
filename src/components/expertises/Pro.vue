<template>
    <div class="header-red border py-5">
        
        <!-- First content -->
        <div class="row align-items-center px-3">
            <div class="col-md-3">
                <div class="row align-items-center">
                    <div class="col-md-4">
                        <img v-if="userimage.data" width="70" height="60" class="px-1 py-1 rounded-circle border-avatar w-100" :src="userimage.data.image_url" />
                        <img v-else class="px-1 py-1 rounded-circle border-avatar w-100" :src="profile.data.player.avatar" />
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
                        <div class="row px-4 mx-4 pb-2">
                            <div v-if="index % 2 == 0">
                                {{expertise.label}}
                                <img :style="profile.data.player.expertise >= expertise.limit ? null : 'filter: grayscale(100%);-webkit-filter: grayscale(100%);'" src="../../assets/images/red_pin.png">
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-12">
                    <div class="progress">
                        <div class="progress-bar-red" 
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
                        <div class="col-md-12 px-4 mx-4 pt-1">
                            <div v-if="index % 2 == 1">
                                <img :style="profile.data.player.expertise >= expertise.limit ? null : 'filter: grayscale(100%);-webkit-filter: grayscale(100%);'" class="rotate90" src="../../assets/images/red_pin.png">
                                {{expertise.label}}
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div class="col-md-3 text-right">
                <img class="border-red" :src="profile.data.featuredMedal.image">
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

                <div class="row justify-content-center mt-2 my-2 py-3 px-0 mx-0">
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

             <!-- RANKED -->
            <div class="col-md-4 card-height px-0 mx-0 border-separate">
                <div class="col-md-12 mt-2 text-left">
                    <img src="../../assets/images/medal.svg"> <span class="title ml-2">{{profile.data.ranked.label}}</span>
                </div>

                <div class="row justify-content-center mt-2 py-3 my-2 px-0 mx-0">
                    <!-- PARTIDAS -->
                    <div class="col-md-3 mx-1 card-gc">
                        <span class="matches_ranked_red">{{profile.data.ranked.matches}}</span>
                        <p class="title">Partidas</p>
                    </div>

                    <!-- Vitórias -->
                    <div class="col-md-3 mx-1 card-gc">
                        <span class="wins">{{profile.data.ranked.wins}}</span>
                            <p class="title">Vitórias</p>
                    </div>

                    <!-- Derrotas -->
                    <div class="col-md-3 mx-1 card-gc">
                        <span class="losses">{{profile.data.ranked.losses}}</span>
                            <p class="title">Derrotas</p>
                    </div>
                </div>

                <div class="col-md-12">
                    <button class="btn btn-ranked-red btn-block text-white"><img class="mr-2" width="20" src="../../assets/images/users.svg"> ENTRAR NA FILA</button>
                </div>
            </div>

        </div>

        <div class="third_content container">
            <div class="row align-items-center">
                <div class="col-md-8 text-white">
                    <button class="btn btn-grey btn-sm mr-3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <img src="../../assets/images/cog.svg">
                    </button>

                    <div class="dropdown-menu drop_menu mt-2">
                        <div class="caret_drop">
                            <i class="fas fa-caret-up"></i>
                        </div>
                        <a @click='selectPicture()' class="dropdown-item drop_item"><img class="mr-2" width="20px" src="../../assets/images/avatar.svg"> Alterar Avatar</a>
                        <input type="file" :id="'picture'" ref="new_image" style="display:none"  accept="image/*" @change='onImageChange($event)'>
                        <a @click="hideCheats()" class="dropdown-item drop_item">
                            <img class="mr-2" width="20px" src="../../assets/images/eye.svg"> Ocultar Cheaters Banidos
                        </a>
                    </div>

                    <a target="_blank" :href="profile.data.anticheat.download">
                        <button type="button" class="btn btn-anti-cheat">
                            <img class="mr-2" width="20px" src="../../assets/images/download.svg"> BAIXAR GAMERSCLUB ANTI-CHEAT
                        </button>
                    </a>
                </div>
                
                <div v-for="report in profile.data.reports" :key="report.type" class="col-md-2 text-right">
                    <div class="row align-items-center">
                        <div :class="report.label == 'Jogadores ' ? 'col-md-6 total_report_blue' : 'col-md-6 total_report_red'">{{report.total}}</div>
                        <div class="col-md-6 label_report_blue text-white">{{report.label}}</div>
                        <div :class="report.label == 'Jogadores ' ? 'col-md-12 label_report_blue' : 'col-md-12 label_report_red'">{{report.label2}}</div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
    import {mapState} from 'vuex';

    export default {
        name: 'Amateur',
        computed: {...mapState(['userimage'])},

        props: ['profile'],
        data() {
            return{
                
            }
        },

        methods : {
            selectPicture(){
                document.getElementById('picture').click()
            },

            onImageChange: function (event) {

                try {
                    let form = new FormData;
                    form.append('file', event.target.files[0], event.target.files[0].name);
                    form.append('media_type', 'image');

                    console.log(form);
                 
                    this.$store.dispatch('uploadImage', {form: form, user_id: this.$route.params.id});

                } catch (e) {
                    alert("Erro ao enviar imagem!");
                    console.log(e);
                }
            },

            getImage: function(){
                this.$store.dispatch('getImage', this.$route.params.id, this.userImage);
            },

            hideCheats: function(){

                
                //SE REPORT CHEATS NÃO ESTIVER PREENCHIDO, É PQ O USUÁRIO OCULTOU;
                if(!this.report_cheats){
                    this.profile.data.reports.forEach((report, index) => {
                        if(report.label == 'Cheaters Banidos '){
                            //SALVAR CASO USUARIO QUEIRA MOSTRAR;
                            this.report_cheats = this.profile.data.reports[index]

                            //SLICE NO ARRAY DE REPORT
                            this.profile.data.reports.splice(index, 1);
                        }
                    })
                }
                else{
                    //MOSTRAR CHEATS
                    this.profile.data.reports.push(this.report_cheats);
                    this.report_cheats = null;
                }
            }
        },

        mounted(){
            this.profile.data.reports.forEach(report => {
                var label = report.label.split("**");
     
                report.label = label[0];
                report.label2 = label[1];
            })

            this.getImage();
        }
    }


</script>