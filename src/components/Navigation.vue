<script setup>
import { onMounted, computed } from 'vue';
import { useUserStore } from '../stores/userStore';
import { RouterLink } from 'vue-router';

const userStore = useUserStore();
const topUsers = computed(() => userStore.topUsers);

onMounted(async () => {
    if (!userStore.users.length || userStore.users.length===0 ) {
        await userStore.fetchUsers();
    }
});
</script>

<template>
    <nav class="bg-gray-800 text-white p-4">
        <ul class="flex space-x-4">
            <li>
                <RouterLink to="/" class="hover:text-gray-300">Home</RouterLink>
            </li>
            <li>
                <RouterLink to="/users" class="hover:text-gray-300">Users</RouterLink>
            </li>
            <li class="relative group">
                <button class="hover:text-gray-300 focus:outline-none">
                    User List
                </button>
                <ul
                    class="absolute bg-white text-gray-800 mt-0 p-0 shadow-lg w-48 invisible group-hover:visible group-focus:visible">
                    <li v-for="user in topUsers" :key="user.id" class="hover:bg-gray-100 p-2">
                        <RouterLink :to="`/users/${user.id}`" class="text-blue-500 hover:underline">
                            {{ user.name }}
                        </RouterLink>
                    </li>
                </ul>
            </li>
        </ul>
    </nav>
</template>
