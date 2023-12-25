import { createRouter, createWebHashHistory } from "vue-router";

// 定义路由组件.
import home from "../views/Home.vue";
import show from "../views/myShow.vue";
import mutation from "../views/myMutation.vue"

// 定义一些路由
// 每个路由都需要映射到一个组件。
const routes = [
    { path: "/", component: home },
    {path :"/show",component: show},
    {path :"/mutation",component: mutation},
];

// 创建路由实例并传递 `routes` 配置
const Router = createRouter({
    // 使用 hash 模式。
    history: createWebHashHistory(),
    routes, // `routes: routes` 的缩写,
});

export default Router;