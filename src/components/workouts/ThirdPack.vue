<template>
  <div id="third">
    <h2>אימוני מארז 3</h2>
    <div class="accordion" id="accordionExample">
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            אימון מארז 3 באולם 1
          </button>
        </h2>
        <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <p v-for="(item, index) in workouts.auditoriumTwo.slice(0,4)" :key="index">{{ item }}</p>
              <ul>
                <li v-for="(item , index) in workouts.auditoriumTwo.slice(4,12)" :key="index">{{ item }}</li>
              </ul>
              <p>{{ workouts.auditoriumTwo[12] }}</p>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            אימון מארז 3 באולם 2
          </button>
        </h2>
        <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <p v-for="(item, index) in workouts.auditoriumThree.slice(0,4)" :key="index">{{ item }}</p>
              <ul>
                <li v-for="(item , index) in workouts.auditoriumThree.slice(4,14)" :key="index">{{ item }}</li>
              </ul>
              <p>{{ workouts.auditoriumThree[14] }}</p>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            אימון מארז 3 באולם 3
          </button>
        </h2>
        <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <p v-for="(item, index) in workouts.auditoriumFour.slice(0,4)" :key="index">{{ item }}</p>
              <ul>
                <li v-for="(item , index) in workouts.auditoriumFour.slice(4,14)" :key="index">{{ item }}</li>
              </ul>
              <p>{{ workouts.auditoriumFour[14] }}</p>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
             אימון מארז 3 בחדר כושר
          </button>
        </h2>
        <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <p v-for="(item, index) in workouts.gymNine.slice(0,3)" :key="index">{{ item }}</p>
              <ul>
                <li v-for="(item , index) in workouts.gymNine.slice(3,11)" :key="index">{{ item }}</li>
              </ul>
              <p>{{ workouts.gymNine[11] }}</p>
              <p>{{ workouts.gymNine[12] }}</p>
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
      workouts,
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

</style>