import { createRouter, createWebHistory } from 'vue-router'
import AddTutorial from "./components/AddTutorial.vue";
import TutorialsList from "./components/TutorialsList.vue";
import Tutorial from "./components/Tutorial.vue";

const routes = [ 
    {
        path: "/",
        alias: "/tutorials",
        name: "tutorials",
      component: TutorialsList,
    },
    {
        path: "/tutorials/:id",
        name: "tutorial-details",
        component:  Tutorial,
      },
      {
        path: "/add",
        name: "add",
        component: AddTutorial,
      }
  ];

  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
export default router





 
 