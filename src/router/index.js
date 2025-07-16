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
import RunningComp from '../components/workouts/RunningComp.vue'
import SecondPack from '../components/workouts/SecondPack.vue'
import ThirdPack from '../components/workouts/ThirdPack.vue'
import ShetachComp from '../components/workouts/ShetachComp.vue'
import ShortsComp from '../components/workouts/ShortsComp.vue'
import SpeachComp from '../components/SpeachComp.vue'

const routes = [
    {path : '/' , component : OpeningScreen},
    {path : '/general' , component: GeneralInfo},
    {path : '/workout-types' , component : WorkoutTypes},
    {path : '/workouts', component : WorkoutSubjects , 
      children : [
        { path : '/demos' , component : ExerciseDemos },
        { path : '/running' , component : RunningComp } ,
        { path : '/2' , component : SecondPack } , 
        { path : '/3' , component : ThirdPack } , 
        { path : '/shetach' , component : ShetachComp } ,
        { path : '/shorts' , component : ShortsComp }
      ]
    },
    {path : '/maarachim' , component : MaarachimComp},
    {path : '/cashag' , component: CashagImprove},
    {path : '/nutrition' , component : NutritionComp},
    {path: '/phisyo' , component : PhisyoTherapy},
    {path : '/kamag' , component : KravMaga},
    {path : '/speach' , component : SpeachComp}
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})
export default router

