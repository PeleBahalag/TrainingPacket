<template>
  <div id="running">
    <h2>אימוני ריצה</h2>
    <div class="accordion" id="accordionExample">
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              אימון רצף נרחב
          </button>
        </h2>
        <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <p v-for="(item , index) in workouts.spreadSequence" :key="index">{{ item }}</p>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            אימון רצף בינוני קבוע
          </button>
          </h2>
          <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <ul>
                <p v-for="(item , index) in workouts.medStatSequence" :key="index">{{ item }}</p>
              </ul>
            </div>
          </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            אימון רצף משתנה 1
          </button>
        </h2>
        <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <p v-for="(item, index) in workouts.changingSeqOne.slice(0,4)" :key="index">{{ item }}</p>
            <ul>
              <li v-for="(item , index) in workouts.changingSeqOne.slice(4,7)" :key="index">{{ item }}</li>
            </ul>
            <p>{{ workouts.changingSeqOne[7] }}</p>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
            אימון רצף משתנה 2
          </button>
        </h2>
        <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <p v-for="(item, index) in workouts.changingSeqTwo.slice(0,4)" :key="index">{{ item }}</p>
            <ul>
              <li v-for="(item , index) in workouts.changingSeqTwo.slice(4,7)" :key="index">{{ item }}</li>
            </ul>
            <p>{{ workouts.changingSeqTwo[7] }}</p>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
            אימון עליות
          </button>
        </h2>
        <div id="collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <p v-for="(item, index) in workouts.uphills.slice(0,4)" :key="index">{{ item }}</p>
            <ul>
              <li v-for="(item , index) in workouts.uphills.slice(4,11)" :key="index">{{ item }}</li>
            </ul>
            <p>{{ workouts.uphills[11] }}</p>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
            אימון מקטעים 1
          </button>
        </h2>
        <div id="collapseSix" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <p v-for="(item, index) in workouts.segmentsOne.slice(0,4)" :key="index">{{ item }}</p>
            <ul>
              <li v-for="(item , index) in workouts.segmentsOne.slice(4,9)" :key="index">{{ item }}</li>
            </ul>
            <p>{{ workouts.segmentsOne[9] }}</p>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
            אימון מקטעים 2
          </button>
        </h2>
        <div id="collapseSeven" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <p v-for="(item, index) in workouts.segmentsTwo.slice(0,4)" :key="index">{{ item }}</p>
            <ul>
              <li v-for="(item , index) in workouts.segmentsTwo.slice(4,6)" :key="index">{{ item }}</li>
            </ul>
            <p>{{ workouts.segmentsTwo[6] }}</p>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
            ריצת רצף משתנה 3
          </button>
        </h2>
        <div id="collapseEight" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <p v-for="(item, index) in workouts.changingSeqThree.slice(0,5)" :key="index">{{ item }}</p>
            <ul>
              <li v-for="(item , index) in workouts.changingSeqThree.slice(5,10)" :key="index">{{ item }}</li>
            </ul>
            <p>{{ workouts.changingSeqThree[10] }}</p>
            <ul>
              <li v-for="(item , index) in workouts.changingSeqThree.slice(11,17)" :key="index">{{ item }}</li>
            </ul>
            <p>{{ workouts.changingSeqThree[17] }}</p>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
            אימון ריצה קצב מתפתח
          </button>
        </h2>
        <div id="collapseNine" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <p v-for="(item, index) in workouts.evolvingRhythm.slice(0,4)" :key="index">{{ item }}</p>
            <ul>
              <li v-for="(item , index) in workouts.evolvingRhythm.slice(4,9)" :key="index">{{ item }}</li>
            </ul>
            <p>{{ workouts.evolvingRhythm[9] }}</p>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
            אימון מקטעים 3
          </button>
        </h2>
        <div id="collapseTen" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <p v-for="(item, index) in workouts.segmentsThree.slice(0,4)" :key="index">{{ item }}</p>
            <ul>
              <li v-for="(item , index) in workouts.segmentsThree.slice(4,7)" :key="index">{{ item }}</li>
            </ul>
            <p>{{ workouts.segmentsThree[7] }}</p>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEleven" aria-expanded="false" aria-controls="collapseEleven">
            אימון מדרגות
          </button>
        </h2>
        <div id="collapseEleven" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <p v-for="(item, index) in workouts.stairs.slice(0,4)" :key="index">{{ item }}</p>
            <ol>
              <li v-for="(item , index) in workouts.stairs.slice(4,15)" :key="index">{{ item }}</li>
            </ol>
            <p>{{ workouts.stairs[15] }}</p>
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
      workouts , 
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
h2{
    font-size: 1.5rem;
    font-family: "titles" !important;
    text-align: right;
    padding-right: 1rem;
}

.accordion{
    width: 95% !important;
    position: relative !important;
    right:1% !important;
    margin-bottom: 1rem;
}

.accordion-button{
    background-color: #fdff85 !important;
}

.accordion-header{
    background-color: #fdff85;
}

.accordion-button:not(.collapsed) {
    background-color: #c4c468;
}

li{
  text-align: right;
}

#navs{
    height: 4%;
    width:70%;
    position: fixed;
    right:3%;
    bottom: 3%;
    display: flex;
    flex-flow: row nowrap;
    color : #fdff85;
    text-decoration: underline;
    font-size: 1.25rem;
    user-select: none;
}

#navs :active{
    opacity:0.7;
}

#nav{
    height: 100%;
    width:20%;
    
    }
</style>