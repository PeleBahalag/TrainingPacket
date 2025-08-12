import { createRouter, createWebHistory } from 'vue-router'
import OpeningScreen from '../components/OpeningScreen.vue'
import WorkoutSubjects from '../components/WorkoutSubjects.vue'
import WorkoutTypes from '../components/WorkoutTypes.vue'
import ExerciseDemos from '../components/ExerciseDemos.vue'
import GeneralInfo from '../components/GeneralInfo.vue'
import RunningComp from '../components/workouts/RunningComp.vue'
import SecondPack from '../components/workouts/SecondPack.vue'
import ThirdPack from '../components/workouts/ThirdPack.vue'
import ShetachComp from '../components/workouts/ShetachComp.vue'
import ShortsComp from '../components/workouts/ShortsComp.vue'
import SpeachComp from '../components/SpeachComp.vue'
import PushDay from '../components/workouts/PushDay.vue'
import PullDay from '../components/workouts/PullDay.vue'
import LegDay from '../components/workouts/LegDay.vue'
import NituachIsuk from '../components/NituachIsuk.vue'

const routes = [
    {path : '/' , component : OpeningScreen},
    {path : '/general' , component: GeneralInfo},
    {path : '/workout-types' , component : WorkoutTypes},
    {path : '/workouts', component : WorkoutSubjects , 
      children : [
        { path : '/demos' , component : ExerciseDemos ,
          children : [
            { path : '/push' , component : PushDay },
            { path : '/pull' , component : PullDay },
            { path : '/legs' , component : LegDay }
          ]
        },
        { path : '/running' , component : RunningComp } ,
        { path : '/2' , component : SecondPack } , 
        { path : '/3' , component : ThirdPack } , 
        { path : '/shetach' , component : ShetachComp } ,
        { path : '/shorts' , component : ShortsComp }
      ]
    },
    {path : '/speach' , component : SpeachComp},
    {path : '/nituachIsuk' , component : NituachIsuk}
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})
export default router

