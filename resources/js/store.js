import { reactive } from 'vue';

export const store = reactive({
    pageTitle: 'Post mortem',
    inBackground: false,
    theme: window.themeMode ?? 'dark',

    errors: [],
});