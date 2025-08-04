<template>
  <div id="shetach">
    <h2>אימוני שטח</h2>
    <div class="accordion" id="accordionExample">
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              אימון מארז 2 עם ברוס לשטח
          </button>
        </h2>
        <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <p v-for="(item, index) in workouts.bruce.slice(0,4)" :key="index">{{ item }}</p>
            <ul>
              <li v-for="(item , index) in workouts.bruce.slice(4,13)" :key="index">{{ item }}</li>
            </ul>
            <p>{{ workouts.bruce[13] }}</p>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            אימון מארז 2 ללא ציוד לשטח
          </button>
          </h2>
          <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <p v-for="(item, index) in workouts.noEquipment.slice(0,4)" :key="index">{{ item }}</p>
            <ul>
              <li v-for="(item , index) in workouts.noEquipment.slice(4,12)" :key="index">{{ item }}</li>
            </ul>
            <p>{{ workouts.noEquipment[12] }}</p>
            </div>
          </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            אימון מארז 2 ללא ציוד לשטח
          </button>
        </h2>
        <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
          <div class="accordion-body">
              <p v-for="(item, index) in workouts.noEquipmentTwo.slice(0,4)" :key="index">{{ item }}</p>
            <ul>
              <li v-for="(item , index) in workouts.noEquipmentTwo.slice(4,11)" :key="index">{{ item }}</li>
            </ul>
            <p>{{ workouts.noEquipmentTwo[11] }}</p>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
            אימון מארז 2 בשטח
          </button>
        </h2>
        <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <p v-for="(item, index) in workouts.mixedEq.slice(0,4)" :key="index">{{ item }}</p>
            <ul>
              <li v-for="(item , index) in workouts.mixedEq.slice(4,11)" :key="index">{{ item }}</li>
            </ul>
            <p>{{ workouts.mixedEq[11] }}</p>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
            מארז 2 עם מתח מקבילים
          </button>
        </h2>
        <div id="collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <p v-for="(item, index) in workouts.pullupBar.slice(0,4)" :key="index">{{ item }}</p>
            <ul>
              <li v-for="(item , index) in workouts.pullupBar.slice(4,9)" :key="index">{{ item }}</li>
            </ul>
            <p>{{ workouts.pullupBar[9] }}</p>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
            מארז 2 עם גומיה
          </button>
        </h2>
        <div id="collapseSix" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <p v-for="(item, index) in workouts.band.slice(0,4)" :key="index">{{ item }}</p>
            <ul>
              <li v-for="(item , index) in workouts.band.slice(4,8)" :key="index">{{ item }}</li>
            </ul>
            <p>{{ workouts.band[8] }}</p>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
            מארז 2 בעמדת איסוף
          </button>
        </h2>
        <div id="collapseSeven" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <p v-for="(item, index) in workouts.isuf.slice(0,4)" :key="index">{{ item }}</p>
            <ul>
              <li v-for="(item , index) in workouts.isuf.slice(4,13)" :key="index">{{ item }}</li>
            </ul>
            <p>{{ workouts.isuf[13] }}</p>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
            מארז 3 בעמדת איסוף
          </button>
        </h2>
        <div id="collapseEight" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
          <div class="accordion-body">
           <p v-for="(item, index) in workouts.isufTwo.slice(0,4)" :key="index">{{ item }}</p>
            <ul>
              <li v-for="(item , index) in workouts.isufTwo.slice(4,14)" :key="index">{{ item }}</li>
            </ul>
            <p>{{ workouts.isufTwo[14] }}</p>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
            מארז 3 עם וסט בשטח
          </button>
        </h2>
        <div id="collapseNine" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <p v-for="(item, index) in workouts.vest.slice(0,4)" :key="index">{{ item }}</p>
            <ul>
              <li v-for="(item , index) in workouts.vest.slice(4,10)" :key="index">{{ item }}</li>
            </ul>
            <p>{{ workouts.vest[10] }}</p>
            <ul>
              <li v-for="(item , index) in workouts.vest.slice(11,17)" :key="index">{{ item }}</li>
            </ul>
            <p>{{ workouts.vest[17] }}</p>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
            מארז 3 ללא ציוד לשטח
          </button>
        </h2>
        <div id="collapseTen" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <p v-for="(item, index) in workouts.noEquipmentThree.slice(0,4)" :key="index">{{ item }}</p>
            <ul>
              <li v-for="(item , index) in workouts.noEquipmentThree.slice(4,13)" :key="index">{{ item }}</li>
            </ul>
            <p>{{ workouts.noEquipmentThree[13] }}</p>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEleven" aria-expanded="false" aria-controls="collapseEleven">
            מארז 3 ללא ציוד לשטח
          </button>
        </h2>
        <div id="collapseEleven" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <p v-for="(item, index) in workouts.noEquipmentFour.slice(0,4)" :key="index">{{ item }}</p>
            <ul>
              <li v-for="(item , index) in workouts.noEquipmentFour.slice(4,10)" :key="index">{{ item }}</li>
            </ul>
            <p>{{ workouts.vest[10] }}</p>
            <ul>
              <li v-for="(item , index) in workouts.noEquipmentFour.slice(11,16)" :key="index">{{ item }}</li>
            </ul>
            <p>{{ workouts.noEquipmentFour[16] }}</p>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwelve" aria-expanded="false" aria-controls="collapseTwelve">
            מארז 3 ללא ציוד לשטח
          </button>
        </h2>
        <div id="collapseTwelve" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <p v-for="(item, index) in workouts.noEquipmentFive.slice(0,4)" :key="index">{{ item }}</p>
            <ul>
              <li v-for="(item , index) in workouts.noEquipmentFive.slice(4,12)" :key="index">{{ item }}</li>
            </ul>
            <p>{{ workouts.noEquipmentFive[12] }}</p>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThirteen" aria-expanded="false" aria-controls="collapseThirteen">
            מארז 3 ללא ציוד לשטח
          </button>
        </h2>
        <div id="collapseThirteen" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <p v-for="(item, index) in workouts.noEquipmentSix.slice(0,4)" :key="index">{{ item }}</p>
            <table>
              <tr v-for="(row , index) in workouts.noEquipmentSix.slice(4,8)" :key="index">
                <td v-for="(cell , index) in row" :key="index">
                  <p v-if="!Array.isArray(cell)">{{ cell }}</p>
                  <ul v-else>
                    <li v-for="(line , index) in cell" :key="index">{{ line }}</li>
                  </ul>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFourteen" aria-expanded="false" aria-controls="collapseFourteen">
            אימון מארז 3 ללא ציוד לשטח
          </button>
        </h2>
        <div id="collapseFourteen" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <p v-for="(item, index) in workouts.noEquipmentSeven.slice(0,5)" :key="index">{{ item }}</p>
            <ul>
              <li v-for="(item , index) in workouts.noEquipmentSeven.slice(4,11)" :key="index">{{ item }}</li>
            </ul>
            <p>{{ workouts.noEquipmentSeven[11] }}</p>
            <ul>
              <li v-for="(item , index) in workouts.noEquipmentSeven.slice(12,19)" :key="index">{{ item }}</li>
            </ul>
            <p>{{ workouts.noEquipmentSeven[19] }}</p>
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