const routes = [
  {
    path: "/",
    component: () => import("layouts/AuthLayout.vue"),
    children: [{ path: "", component: () => import("pages/LoginPage.vue") }],
  },
  {
    path: "/dashboard",
    component: () => import("layouts/Mainlayout.vue"),
    children: [{ path: "", component: () => import("pages/InexPage.vue") }],
  },

  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
