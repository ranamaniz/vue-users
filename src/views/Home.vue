<script setup>
import Card from '@/components/Card.vue';
import { useUserStore } from '@/stores/userStore';
import { computed } from 'vue';

const userStore = useUserStore();
const userCount = computed(() => userStore.users.length)

</script>

<template>
  <main class="flex-grow flex justify-center">
    <Card class="bg-white mt-20 p-8 rounded-lg shadow-md w-full max-w-md">
      <h1 class="text-2xl font-semibold text-center text-gray-900 mb-4">Total Users</h1>
      <RouterLink to="/users" class="text-6xl font-bold text-blue-600 text-center block">
        {{ userCount }}
      </RouterLink>
    </Card>
  </main>
</template>
