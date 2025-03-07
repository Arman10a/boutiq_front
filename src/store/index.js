import {createStore} from 'vuex';
import axios from "axios";
import router from "@/router";


export const store = createStore({
    state: {
        user: {},
    },
    mutations: {
        setUser(state, user) {
            state.user = user;
        },
        clearUser(state) {
            state.user = null;
        }
    },
    actions: {
        async login({ commit }, userInfo) {
            const response = axios.post('http://127.0.0.1:8000/api/login' ,{
                email: userInfo.email,
                password: userInfo.password

            })
            response.success = 1;

            if (response.success) {
                commit('setUser', response.user);
            } else {
                throw new Error('Login failed');
            }
        },
        async logout  ({ commit }) {
            try {
                const response = await axios.post('http://127.0.0.1:8000/api/logout' ,{}, {
                    headers: {
                        Authorization: 'Bearer ' + localStorage.getItem('token')
                    }
                })
                if (response) {
                    localStorage.removeItem('token');
                    localStorage.removeItem('access_token');
                    localStorage.removeItem("chatUser");
                    localStorage.removeItem('access_token');
                    commit('clearUser');
                    await router.push('/');
                } else {
                    console.error('Logout response has no data:', response);
                }
            } catch (error) {
                console.log(localStorage.getItem('token'))
                if (error.response) {
                    console.error('Error response:', error.response.data);

            }
            }
        },
        // eslint-disable-next-line no-unused-vars
        getUserData({commit}, token){
            axios.post('http://127.0.0.1:8000/api/user' , {},
                {
                        headers: {
                            Authorization: `Bearer ${token}`  //``- es nshane u es greladzeve ${} haskanauma popoxakan stringi mej
                        }
                    }
                )
        }

    },
    getters: {

        user: (state) => state.user

    },
});



