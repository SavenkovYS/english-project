export const NAMESPACE = 'auth';

export const module = {
    namespaced: true,
    state: {
        user: null
    },
    getters: {
        user: state => state.user
    },
    mutations: {
        SET_USER(state, user) {
            state.user = user;
        }
    },
    actions: {
        setUser({ commit }, user) {
            commit('SET_USER', user);
        }
    }
};