<script setup>
import { ref } from 'vue';
import { useUserStore } from '@/stores/userStore';
import { useRouter } from 'vue-router';


const user = ref({
    name: '',
    email: '',
    age: null,
    address: '',
    phone: ''
});


const userStore = useUserStore();
const router = useRouter();

const addUser = async () => {
    try {
        await userStore.addUser(user.value);
        alert('User added successfully!');
        router.push('/users'); 
    } catch (error) {
        console.error('Error adding user:', error);
    }
};
</script>

<template>
    <div class="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
        <h1 class="text-2xl font-semibold mb-4 text-center text-gray-800">Add New User</h1>
        <form @submit.prevent="addUser" class="space-y-4">
            <div>
                <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
                <input v-model="user.name" type="text" id="name"
                    class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    required />
            </div>
            <div>
                <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                <input v-model="user.email" type="email" id="email"
                    class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    required />
            </div>
            <div>
                <label for="age" class="block text-sm font-medium text-gray-700">Age</label>
                <input v-model="user.age" type="number" id="age"
                    class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    required />
            </div>
            <div>
                <label for="address" class="block text-sm font-medium text-gray-700">Address</label>
                <input v-model="user.address" type="text" id="address"
                    class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    required />
            </div>
            <div>
                <label for="phone" class="block text-sm font-medium text-gray-700">Phone</label>
                <input v-model="user.phone" type="text" id="phone"
                    class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    required />
            </div>
            <div class="flex justify-end">
                <button type="submit"
                    class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                    Add User
                </button>
            </div>
        </form>
    </div>
</template>
