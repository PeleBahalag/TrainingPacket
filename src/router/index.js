import { createRouter, createWebHistory } from 'vue-router'
import OpeningScreen from '../components/OpeningScreen.vue'
import WorkoutSubjects from '../components/WorkoutSubjects.vue'
import WorkoutTypes from '../components/WorkoutTypes.vue'
import ExerciseDemos from '../components/ExerciseDemos.vue'

const routes = [
    {path : '/' , component : OpeningScreen},
    {path : '/workout-types' , component : WorkoutTypes},
    {path : '/workouts', component : WorkoutSubjects},
    {path : '/exercises' , component : ExerciseDemos}
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})
export default router

