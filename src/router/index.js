import { createRouter, createWebHashHistory } from "vue-router";

// 定义路由组件.
import Home from "../views/Home.vue";


// 定义一些路由
// 每个路由都需要映射到一个组件。
const routes = [
    { path: "/", component: Home },
];

// 创建路由实例并传递 `routes` 配置
const Router = createRouter({
    // 使用 hash 模式。
    history: createWebHashHistory(),
    routes, // `routes: routes` 的缩写,
});

export default Router;