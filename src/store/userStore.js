import { defineStore } from 'pinia';
import axios from "axios";

export const useUserStore = defineStore('user', {
    state: () => ({
        userData: JSON.parse(localStorage.getItem('user_data')) || null,
    }),
    actions: {
        async fetchUserData() {
            try {
                const response = await axios.post('http://127.0.0.1:8000/api/login', {
                    headers: {
                        'token': `Bearer ${localStorage.getItem('token')}`,
                    },
                });

                this.userData = response.data;
                localStorage.setItem('user_data', JSON.stringify(response.data));
            } catch (err) {
                console.error('Error fetching user data', err);
            }
        },
        logout() {
            this.userData = null;
            localStorage.removeItem('user_data');
        },
    },
});