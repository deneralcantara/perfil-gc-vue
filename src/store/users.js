import { updateImage, getImage } from '../services/users'; //requisições com axios

export const users = {
    state: {
        data: {essay:{}},
        loading: true,
        error: null
    },
    mutations: {
        uploadImageSuccess(state, payload){
            state.data = payload
            state.loading = false
            state.error = null
        },
        uploadImageError(state, payload){
            state = { ...state, error: payload, loading: false}
        },
        uploadImageDispatch(state){
            state.loading = true;
            state.error = null;
        },
    },
    actions: { //passsa as informaçoes para as mutations mudarem os estados

        async uploadImage({commit}, {form, user_id}) {
            commit('uploadImageDispatch')
            try {
                const {data} = await updateImage(form, user_id);

                commit('uploadImageSuccess')

                location.reload();
                return data;

            } catch (e) {

                console.error(e);
                commit('uploadImageError')

            }

        },

    },
    getters: { // retorna os states
        users: state => state
    }

};

export const userimage = {
    state: {
        data: {essay:{}},
        loading: true,
        error: null
    },
    mutations: {
        userImageSuccess(state, payload){
            state.data = payload
            state.loading = false
            state.error = null
        },
        userImageError(state, payload){
            state = { ...state, error: payload, loading: false}
        },
        userImageDispatch(state){
            state.loading = true;
            state.error = null;
        },
    },
    actions: { //passsa as informaçoes para as mutations mudarem os estados

        getImage({commit}, user_id) {
            commit('userImageDispatch');
            getImage(user_id) // funcao do service -> requisicao com axios
            .then(response => {
                commit('userImageSuccess', response.data.userimage) // chama a mutation de sucesso de login
            })
            .catch(error => {
                commit('userImageError', (error.response) ? error.response.data.message : 'Ocorreu um erro') // chama a mutation de erro de login
            })
        },

    },
    getters: { // retorna os states
        userimage: state => state
    }

};
