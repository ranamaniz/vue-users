<script setup>
import { useUserStore } from '@/stores/userStore';
import { RouterLink } from 'vue-router';


const userStore = useUserStore();

const deleteUser = async (id) => {
    try {
        await userStore.deleteUser(id);
    } catch (error) {
        console.error('Error deleting user:', error);
    }
};
</script>

<template>
    <main class="p-4">
        <h1 class="text-2xl font-bold mb-4 text-center">User List</h1>

        <div class="mb-4 flex justify-end">
            <RouterLink to="/users/add" class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                Add User
            </RouterLink>
        </div>

        <div class="overflow-x-auto">
            <table class="min-w-full bg-white border border-gray-300 table-fixed">
                <thead>
                    <tr class="bg-gray-100 text-left">

                        <th class="py-3 px-4 border-b border-gray-300">Name</th>
                        <th class="py-3 px-4 border-b border-gray-300">Email</th>
                        <th class="py-3 px-4 border-b border-gray-300">Age</th>
                        <th class="py-3 px-4 border-b border-gray-300">Address</th>
                        <th class="py-3 px-4 border-b border-gray-300">Phone</th>
                        <th class="py-3 px-4 border-b border-gray-300">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="user in userStore.users" :key="user.id" class="hover:bg-gray-50">

                        <td class="py-3 px-4 border-b border-gray-300">{{ user.name }}</td>
                        <td class="py-3 px-4 border-b border-gray-300">{{ user.email }}</td>
                        <td class="py-3 px-4 border-b border-gray-300">{{ user.age }}</td>
                        <td class="py-3 px-4 border-b border-gray-300">{{ user.address }}</td>
                        <td class="py-3 px-4 border-b border-gray-300">{{ user.phone }}</td>
                        <td class="py-3 px-4 border-b border-gray-300 flex space-x-2">
                            <RouterLink :to="`/users/${user.id}`" class="text-blue-500 hover:underline">View
                            </RouterLink>
                            <button @click="deleteUser(user.id)" class="text-red-500 hover:underline">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </main>
</template>
