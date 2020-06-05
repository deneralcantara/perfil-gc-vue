import Vuex from 'vuex';
import Vue from 'vue';

/* modules */
import { users, userimage } from './users';

Vue.use(Vuex);

export const store = new Vuex.Store({
    namespaced: true,
    modules: {
        users: users,
        userimage: userimage,
    }
});