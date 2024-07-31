import { defineStore } from "pinia";
import {
  createUser,
  deleteUser,
  getUsers,
  getUserById,
  updateUser,
} from "@/services/userService";

export const useUserStore = defineStore("user", {
  state: () => ({
    users: [],
    error: null,
  }),
  actions: {
    async fetchUsers() {
      try {
        const data = await getUsers();
        this.users = data;
      } catch (err) {
        this.error = "Failed to fetch users.";
        console.error("Error fetching users:", this.error);
      }
    },

    async addUser(newUser) {
      try {
        const data = await createUser(newUser);
        this.users.push(data);
      } catch (err) {
        this.error = "Failed to add user.";
        console.error("Error adding user:", this.error);
      }
    },
    async updateUser(updatedUser) {
      try {
        await updateUser(updatedUser.id, updatedUser);
        const index = this.users.findIndex(
          (user) => user.id === updatedUser.id
        );
        if (index !== -1) {
          this.users[index] = updatedUser;
        }
      } catch (err) {
        this.error = "Failed to update user.";
        console.error("Error updating user:", this.error);
      }
    },
    async deleteUser(userId) {
      try {
        await deleteUser(userId);
        this.users = this.users.filter((user) => user.id !== userId);
      } catch (err) {
        this.error = "Failed to delete user.";
        console.error("Error deleting user:", this.error);
      }
    },
  },
  getters: {
    topUsers: (state) => {
      return state.users
        .sort((a, b) => a.name.localeCompare(b.name))
        .slice(0, 3);
    },
  },
});
