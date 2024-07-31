import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Users from "@/views/Users.vue";
import UserDetails from "@/views/UserDetails.vue";
import AddUser from "@/views/AddUser.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/users",
      name: "users",
      component: Users,
    },
    {
      path: "/users/:id",
      name: "UserDetails",
      component: UserDetails,
      props: true,
    },
    { path: "/users/add", component: AddUser },
  ],
});

export default router;
