import { createApp } from 'vue/dist/vue.esm-bundler';
import ErrorUi from './Components/ErrorUi.vue';

import mitt from 'mitt';
import { store } from './store';
import axios from 'axios';
import { createRouter, createWebHistory } from 'vue-router';

import './../css/app.css';

const bus = mitt();

const { log, info } = console;

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

window.bus = bus;

class AppError extends Error {}
window.AppError = AppError;

window.throw_unless = (condition, message) => {
    if (!condition) {
        throw new AppError(message);
    }
};

const errorHandler = {
    handle(error) {
        bus.emit('error', { error });
    },
};

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('./Pages/Home.vue'),

        children: [
            {
                path: 'detail/:id',
                name: 'detail',
                component: () => import('./Pages/Detail.vue'),
            },
        ],
    },
];

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(),
    routes, // short for `routes: routes`
});

// Add a response interceptor
axios.interceptors.response.use(
    function (response) {
        log('REQUEST RESPONSE', response.request.responseURL ?? '-', response);
        return response;
    },
    function (error) {
        log('REQUEST ERROR', error);
        bus.emit('error', { error, content: error.response.data });
        return Promise.reject(error);
    }
);

const isDarkMode =
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches);

if (isDarkMode) {
    store.theme = 'dark';
} else {
    store.theme = 'light';
}

document.addEventListener(
    'visibilitychange',
    () => (store.inBackground = document.hidden),
    false
);

window.onerror = (message, source, lineno, colno, error) => {
    log('FROM ONERROR', message, source, lineno, colno, error);
    console.error(error);
    errorHandler.handle(error);
};

window.addEventListener('error', (error) => {
    log('FROM ERROR LISTENER', e);
    console.error(e);
    errorHandler.handle(error);
});

const app = createApp({
    template: `
      <router-view></router-view>

      <error-ui />
    `,
    components: {
        ErrorUi,
    },
});

app.config.errorHandler = (error) => {
    log('FROM ERROR HANDLER', error);
    errorHandler.handle(error);
};

app.use(router)
    .mount('#app');
