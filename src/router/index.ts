import App from "@/App.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "/",
      redirect: "/home",
    },
    {
      path: "/home",
      name: "home",
      component: () => import("@/views/contentview/home.vue"),
    },
    {
      path: "/project",
      name: "project",
      component: () => import("@/views/contentview/project.vue"),
    },
    {
      path: "/blog",
      name: "blog",
      component: () => import("@/views/contentview/blog.vue"),
    },
    {
      path: "/bcontent",
      name: "bcontent",
      component: () =>
        import("@/views/contentview/blog-content/blog-content.vue"),
    },
    {
      path: "/ant",
      name: "ant",
      component: () =>
        import("@/views/contentview/ant-travel/about-ant-travel.vue"),
    },

    {
      path: "/fourwheeled",
      name: "fourwheeled",
      component: () =>
        import("@/views/contentview/project-content/Four-wheeled.vue"),
    },
    // 测试用路由
    {
      path: "/test",
      name: "test",
      component: () =>
        import("@/views/contentview/project-content/md-to-html.vue"),
    },
    {
      path: "/testone",
      name: "testone",
      component: () =>
        import("@/views/contentview/project-content/html-display-view.vue"),
    },
  ],
});

export default router;
