<template>
  <div id="running">
    <h2>אימוני מארז 2</h2>
    <div class="accordion" id="accordionExample">
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              אימון באולם
          </button>
        </h2>
        <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <p v-for="(item, index) in workouts.auditorium.slice(0,4)" :key="index">{{ item }}</p>
           <table>
              <tr>
                <th v-for="(item , index) in workouts.auditorium.slice(4,7)" :key="index">{{ item }}</th>
              </tr>
              <tr>
                <td v-for="(subarray , index) in workouts.auditorium.slice(7,10)" :key="index">
                  <ul>
                    <li v-for="(item , index) in subarray" :key="index">{{ item }}</li>
                  </ul>
                </td>
              </tr>
            </table>
            <p>{{ workouts.auditorium[10] }}</p>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            אימון בחדר כושר 1
          </button>
          </h2>
          <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <p v-for="(item, index) in workouts.gym.slice(0,4)" :key="index">{{ item }}</p>
              <ul>
                <li v-for="(item , index) in workouts.gym.slice(4,10)" :key="index">{{ item }}</li>
              </ul>
              <p>{{ workouts.gym[10] }}</p>
            </div>
          </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
             אימון בחדר כושר 2
          </button>
        </h2>
        <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <p v-for="(item, index) in workouts.gymTwo.slice(0,3)" :key="index">{{ item }}</p>
            <table>
              <tr>
                <th v-for="(item , index) in workouts.gymTwo.slice(3,7)" :key="index">{{ item }}</th>
              </tr>
              <tr>
                <td v-for="(item , index) in workouts.gymTwo.slice(7,11)" :key="index">{{ item }}</td>
              </tr>
            </table>
            <p>{{ workouts.gymTwo[11] }}</p>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
            אימון בחדר כושר 3
          </button>
        </h2>
        <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <p v-for="(item, index) in workouts.gymThree.slice(0,3)" :key="index">{{ item }}</p>
            <table>
              <tr>
                <th v-for="(item , index) in workouts.gymThree.slice(3,6)" :key="index">{{ item }}</th>
              </tr>
              <tr>
                <td v-for="(subarray , index) in workouts.gymThree.slice(6,9)" :key="index">
                  <ul>
                    <li v-for="(item , index) in subarray" :key="index">{{ item }}</li>
                  </ul>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
            אימון בחדר כושר 4
          </button>
        </h2>
        <div id="collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <p v-for="(item, index) in workouts.gymFour.slice(0,4)" :key="index">{{ item }}</p>
            <ul>
              <li v-for="(item , index) in workouts.gymFour.slice(4,13)" :key="index">{{ item }}</li>
            </ul>
            <p>{{ workouts.gymFour[13] }}</p>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
            אימון בחדר כושר 5
          </button>
        </h2>
        <div id="collapseSix" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <p v-for="(item, index) in workouts.gymFive.slice(0,4)" :key="index">{{ item }}</p>
            <ul>
              <li v-for="(item , index) in workouts.gymFive.slice(4,9)" :key="index">{{ item }}</li>
            </ul>
            <p>{{ workouts.gymFive[9] }}</p>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
            אימון בחדר כושר 6
          </button>
        </h2>
        <div id="collapseSeven" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <p v-for="(item, index) in workouts.gymSix.slice(0,2)" :key="index">{{ item }}</p>
            <table>
              <tr>
                <th v-for="(item , index) in workouts.gymSix.slice(2,5)" :key="index">{{ item }}</th>
              </tr>
              <tr>
                <td v-for="(subarray , index) in workouts.gymSix.slice(5,9)" :key="index">
                  <ul>
                    <li v-for="(item , index) in subarray" :key="index">{{ item }}</li>
                  </ul>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
            אימון בחדר כושר 7
          </button>
        </h2>
        <div id="collapseEight" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <p v-for="(item, index) in workouts.gymSeven.slice(0,4)" :key="index">{{ item }}</p>
            <table>
              <tr>
                <th v-for="(item , index) in workouts.gymSeven.slice(4,8)" :key="index">{{ item }}</th>
              </tr>
              <tr>
                <td v-for="(item , index) in workouts.gymSeven.slice(8,12)" :key="index">{{ item }}</td>
              </tr>
            </table>
            <p>{{ workouts.gymSeven[12] }}</p>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
            אימון בחדר כושר 8
          </button>
        </h2>
        <div id="collapseNine" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <p v-for="(item, index) in workouts.gymEight.slice(0,4)" :key="index">{{ item }}</p>
            <ul>
              <li v-for="(item , index) in workouts.gymEight.slice(4,12)" :key="index">{{ item }}</li>
            </ul>
            <p>{{ workouts.gymEight[12] }}</p>
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
td , th{
  border-width: 2px;
  border-style: solid;
  border-color:#2f2f2f;
}

table{
  position: relative;
  right:-5%;
  padding: 0;
  margin:0;
}

td li{
  font-size: 0.8rem;
  margin:0;
  padding:0;
}

th{
  font-size: 0.8rem;
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