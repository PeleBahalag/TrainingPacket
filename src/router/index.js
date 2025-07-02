import { createRouter, createWebHistory } from 'vue-router'
import OpeningScreen from '../components/OpeningScreen.vue'
import WorkoutSubjects from '../components/WorkoutSubjects.vue'
import WorkoutTypes from '../components/WorkoutTypes.vue'
import ExerciseDemos from '../components/ExerciseDemos.vue'
import GeneralInfo from '../components/GeneralInfo.vue'
import MaarachimComp from '../components/types/maarachimComp.vue'
import CashagImprove from '../components/types/CashagImprove.vue'
import NutritionComp from '../components/types/NutritionComp.vue'
import PhisyoTherapy from '../components/types/PhisyoTherapy.vue'
import KravMaga from '../components/types/KravMaga.vue'

const routes = [
    {path : '/' , component : OpeningScreen},
    {path : '/general' , component: GeneralInfo},
    {path : '/workout-types' , component : WorkoutTypes},
    {path : '/workouts', component : WorkoutSubjects},
    {path : '/maarachim' , component : MaarachimComp},
    {path : '/cashag' , component: CashagImprove},
    {path : '/nutrition' , component : NutritionComp},
    {path: '/phsiyo' , component : PhisyoTherapy},
    {path : '/kamag' , component : KravMaga}
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})
export default router

