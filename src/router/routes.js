import authRoutes from "./auth-routes";
import mainRoutes from "./main-routes";
//import emptyRoutes from "./empty-routes"

const routes = [
  { ...authRoutes },
  { ...mainRoutes },
  //  { ...emptyRoutes },

  // catch all redirect to home page
  //{ path: '/:pathMatch(.*)*', redirect: '/' },
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];
export default routes;
