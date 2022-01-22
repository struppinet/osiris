<template>
  <aside class="w-full sm:w-1/3 md:w-1/4 px-2 bg-gray-100">
    <router-link :to="{ name: 'home' }">Osiris Postmortem</router-link>

    <div class="sticky top-0 p-4 w-full">
      <ul class="flex flex-col overflow-hidden">
        <div v-for="i in 10">
          <router-link :to="{ name: 'detail', params: { id: i } }">
            {{ i }}
          </router-link>
        </div>
      </ul>
    </div>
  </aside>
</template>
