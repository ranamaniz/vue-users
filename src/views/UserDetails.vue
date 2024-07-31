<script setup>
import { getUserById } from '@/services/userService';
import { useUserStore } from '@/stores/userStore';
import {
    onMounted, ref, computed, watch
} from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const userStore = useUserStore();


const userId = route.params.id

const currentUser = ref({})

onMounted(async () => {
    currentUser.value = await getUserById(userId);
});

watch(() => route.params.id, async (newId, oldId) => {
    currentUser.value = await getUserById(newId);
})


const handleUpdateUser = async () => {
    try {

        await userStore.updateUser(currentUser.value);
        alert('User updated successfully!');
        router.push('/users');

    } catch (error) {
        console.error('Error updating user:', error);
        alert('Failed to update user. Please try again.');
    }
};
</script>

<template>
    <div class="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
        <h1 class="text-2xl font-semibold mb-6 text-center text-gray-800">User Details</h1>
        <div v-if="currentUser">
            <form @submit.prevent="handleUpdateUser" class="space-y-4">
                <div>
                    <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
                    <input v-model="currentUser.name" type="text" id="name"
                        class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                </div>
                <div>
                    <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                    <input v-model="currentUser.email" type="email" id="email"
                        class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                </div>
                <div>
                    <label for="age" class="block text-sm font-medium text-gray-700">Age</label>
                    <input v-model="currentUser.age" type="number" id="age"
                        class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                </div>
                <div>
                    <label for="address" class="block text-sm font-medium text-gray-700">Address</label>
                    <input v-model="currentUser.address" type="text" id="address"
                        class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                </div>
                <div>
                    <label for="phone" class="block text-sm font-medium text-gray-700">Phone</label>
                    <input v-model="currentUser.phone" type="text" id="phone"
                        class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                </div>
                <div class="flex justify-end">
                    <button type="submit"
                        class="px-4 py-2 bg-blue-500 text-white rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                        Update
                    </button>
                </div>
            </form>
        </div>
        <div v-else>
            <p class="text-center text-gray-600">Loading...</p>
        </div>
    </div>
</template>
