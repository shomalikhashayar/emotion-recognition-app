import MainLayout from "src/layouts/MainLayout.vue";
import DashboardPage from "src/pages/DashboardPage.vue";
export default {
  path: "/dashboard",
  component: MainLayout,
  name: "dashboard",
  children: [
    {
      path: "/",
      component: DashboardPage,
    },
    { path: "/", redirect: "/dashboard" },
  ],
  
};
