<template>
  <div id="running">
    <h4>פקלים קצרים - 15 דק כוח אחרי פטרול ארוך</h4>
    <div class="accordion" id="accordionExample">
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              פק"ל מתח 1
          </button>
        </h2>
        <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <ul>
              <li v-for="(item, index) in workouts.pullups.slice(0,5)" :key="index">{{ item }}</li>
            </ul>
            <p>{{ workouts.pullups[5] }}</p>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            פק"ל מתח 2
          </button>
          </h2>
          <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <ul>
              <li v-for="(item, index) in workouts.pullupsTwo.slice(0,3)" :key="index">{{ item }}</li>
            </ul>
            <p>{{ workouts.pullupsTwo[3] }}</p>
          </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
             פק"ל מקבילים
          </button>
        </h2>
        <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <ul>
              <li v-for="(item, index) in workouts.dips.slice(0,5)" :key="index">{{ item }}</li>
            </ul>
            <p>{{ workouts.dips[5] }}</p>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
            פק"ל פולבאדי
          </button>
        </h2>
        <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <ul>
              <li v-for="(item, index) in workouts.fullbody.slice(0,6)" :key="index">{{ item }}</li>
            </ul>
            <p>{{ workouts.fullbody[6] }}</p>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
            פק"ל פלג גוף תחתון
          </button>
        </h2>
        <div id="collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <ul>
              <li v-for="(item, index) in workouts.lowerbody.slice(0,4)" :key="index">{{ item }}</li>
            </ul>
            <p>{{ workouts.lowerbody[4] }}</p>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
            פק"ל ליבה
          </button>
        </h2>
        <div id="collapseSix" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <ul>
              <li v-for="(item, index) in workouts.core.slice(0,7)" :key="index">{{ item }}</li>
            </ul>
            <p>{{ workouts.core[7] }}</p>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
            פק"ל לסחיבת משקלים
          </button>
        </h2>
        <div id="collapseSeven" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <p v-for="(item, index) in workouts.carry.slice(0,2)" :key="index">{{ item }}</p>
            <ul>
              <li v-for="(item , index) in workouts.bruce.slice(2,11)" :key="index">{{ item }}</li>
            </ul>
          </div>
        </div>
      </div>
      
    </div>
    <div id="navs" @click="rth">
      <img src="../../assets/return.png" id="nav">
      <p>חזרה</p>
    </div>
  </div>
</template>

<script>
import workouts from "../../assets/texts/workouts.json"
export default {
  data(){
    return{
      workouts
    }
  },
  methods : {
    rth(){
      this.$router.push("/workouts")
    }
  }
}
</script>

<style>
@font-face {
  font-family: 'titles';
  src: url('../../assets/fonts/titles.ttf');
}

h4{
  font-family: 'titles';
  font-size: 1.2rem;
  text-align: right;
}
</style>