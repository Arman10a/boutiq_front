import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router/index.js';
import './input.css';
import { store } from './store';
import VueCookies from 'vue-cookies';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import GoogleSignInPlugin from "vue3-google-signin";


const app = createApp(App);

app.use(VueCookies);
app.use(store);
app.use(createPinia());
app.use(router);
app.component('VueDatePicker', VueDatePicker);
app.use(GoogleSignInPlugin, {
    clientId: '788162147924-ptpn7tc3fgn4elksebqtl6muo8nqio3n.apps.googleusercontent.com',
});

app.component('VueDatePicker', VueDatePicker);
app.mount('#app');
