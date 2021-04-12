import { REGISTER_USER } from '../../gql';
import { apolloClient } from '../../vue-apollo';
const state = {
    user:{},
    token: localStorage.getItem('apollo-token') || null,
    authStatus: false,
};
const getters = {
    user: state => state.user,
    isAuth: state=> !!state.token,
    authStatus: state=> state.authStatus,
};
const actions = {
    async registerUser({ 
        //eslint-disable-next-line
        commit },userData){
        let resp = await apolloClient.mutate({
            mutation: REGISTER_USER,
            variables: userData
        });
        console.log("RESPONSE_APOLLO", resp);
        //commit('LOGIN_USER',{
        //    user: userData
        //});
        //commit('SET_TOKEN', '1234567890');
    }
    
};
const mutations = {
    LOGIN_USER(state, payload){
        state.user = payload.user;
        state.authStatus = true;
    },
    SET_TOKEN(state, payload){
        state.token = payload;
    }
};

export default {
    state,
    getters,
    actions,
    mutations,
    namespaced: true
}