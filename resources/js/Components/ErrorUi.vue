<template>
    <div v-show="hasError">
        <div
            class="fixed z-10 inset-0 bg-gray-800 blur-sm bg-opacity-50"
            @click="close"
        ></div>

        <div
            class="fixed inset-0 m-auto m-10 rounded-lg shadow-lg shadow-gray-600 bg-white z-20 p-3 overflow-y-auto"
        >
            <component :is="htmlTag" v-html="html" class="text-sm"></component>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const hasError = ref(false);

const html = ref('');
const htmlTag = ref('div');

const close = () => {
    hasError.value = false;
    html.value = null;
    htmlTag.value = 'div';
};

onMounted(() => {
    bus.on('error', ({ content, error }) => {
        console.error(error);
        let errorHtml = null;

        if (content) {
            if (typeof content === 'object') {
                errorHtml = JSON.stringify(content, null, 2);
                htmlTag.value = 'pre';
            }

            if (content?.errors && Object.keys(content.errors).length > 0) {
                return;
            }

            console.log(content);
            html.value = errorHtml;
            hasError.value = true;
        } else if (error instanceof AppError || vapp.env !== 'production') {
            notify.danger(error.message ?? 'Something went wrong', 'Error');
        }
    });
});
</script>