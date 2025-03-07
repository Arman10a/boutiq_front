<template>
    <GoogleSignInButton
        client-id="788162147924-ptpn7tc3fgn4elksebqtl6muo8nqio3n.apps.googleusercontent.com"
        @success="handleLoginSuccess"
        @error="handleLoginError"
    />
</template>

<script setup>
import { GoogleSignInButton } from "vue3-google-signin";
import axios from "axios";
import {store} from "@/store";



// const clientId = '788162147924-ptpn7tc3fgn4elksebqtl6muo8nqio3n.apps.googleusercontent.com';
// const redirectUri = 'http://localhost:8080/login-page/';
// const scope = 'email profile';
// const responseType = 'code';
// const url = `https://accounts.google.com/o/oauth2/auth?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&response_type=${responseType}&scope=${encodeURIComponent(scope)}`;

const handleLoginSuccess = async (response) => {
    try {
        const res = await axios.post("http://127.0.0.1:8000/api/auth/google", {
            credential: response.credential,
        });
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("access_token", res.data.access_token);
        store.commit('setUser' ,res.data.user);
        window.location.replace('http://127.0.0.1:8000/api/google/redirect');
        console.log("Google login success:", response);
    } catch (error) {
        console.error("Google auth error:", error);
    }

};

const handleLoginError = (error) => {
    console.error("Google login failed", error);
};
</script>

