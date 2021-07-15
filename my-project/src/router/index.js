import Vue from "vue";
import VueRouter from "vue-router";
import Login from '../views/Login.vue';
import Main from '../views/main';
import User from '../views/user';
import Menu from '../views/menu'
import Personl from '../views/personl'


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login
  },
  {
    path: "/main",
    name: "Main",
    component: Main,
    children:[
      {
        path: "/user",
<<<<<<< HEAD
        name: "人员管理",
        component: User,
       },
      {
        
        path: "",
        name: "人员管理",
        children:[
        
         {
          path: "/personl",
          name: "用户管理",
          component: Personl,
         }
        ]
        },
      {
        path: "",
        name: "产品管理",
        children:[
          {
          path: "/menu",
          name: "菜单管理",
          component: Menu,
          }
        ]
      },
    ]
=======
        name: "员工管理",
        component: User,
       },
       {
        path: "/personl",
        name: "用户管理",
        component: Personl,
       },
      ]
  },
  {
    path: "/mian2",
    name: "导航2",
    component: Main,
    children:[
    
       {
        path: "/menu",
        name: "菜单管理",
        component: Menu,
        }
    
    
 ]
>>>>>>> 48423dd2b0dbaa9d58e03159deae769723eeadb0
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "*",
    name: "NoFound",
    component: ()=>import("../views/NoFound.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
