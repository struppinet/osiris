<template>
  <div class="flex flex-row flex-wrap min-h-screen">
    <Navigation />
    <router-view />
  </div>
</template>

<script setup>
import Navigation from '../Components/Navigation.vue';
import Logs from '../Components/Logs.vue';
</script>
