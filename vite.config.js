const { resolve } = require('path');
import vue from '@vitejs/plugin-vue';
import Icons from 'unplugin-icons/vite';

export default ({ command }) => {
    const env = 'app';
    const paths = {
        app: resolve(__dirname, 'resources/js/app.js'),
    };

    return {
        publicDir: 'public',
        build: {
            outDir: resolve(__dirname, 'public/dist/'),
            emptyOutDir: false,
            sourcemap: false,
            manifest: false,

            rollupOptions: {
                output: {
                    assetFileNames: 'assets/[name].[ext]',
                    entryFileNames: 'assets/[name].js',
                    chunkFileNames: 'assets/[name].js',
                    manualChunks(id) {
                        return env;
                    },
                },

                input: env ? { [env]: paths[env] } : paths,
            },
        },

        plugins: [vue(), Icons()],

        resolve: {
            alias: {
                '@': resolve('./resources/js'),
            },
        },
    };
};