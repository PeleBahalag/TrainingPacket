<template>
    <div id="types">
        <div class="banner">סוגי האימונים ומערכי
            <br>
            הכושר הקרבי
        </div>
        <!-- <p class="texts">בחרו נושא כדי לעיין</p>
        <div class="btns-container">
            <button v-for="(btn , index) in btns" :key="index" @click="goTo(index)" class="my-btn">{{ btn }}</button>
        </div> -->
        <div class="accordion" id="accordionExample">
            <div class="accordion-item">
                <h2 class="accordion-header">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    מערכי הכוח
                </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <p>{{ types.strengthP.join('\n') }}</p>
                    <h4>מארז 1</h4>
                    <p>{{ types.firstPacket }}</p>
                    <h4>מארז 2</h4>
                    <p>{{ types.secondPacket }}</p>
                    <h4>מארז 3</h4>
                    <p>{{ types.thirdPacket }}</p>
                    <a href="https://drive.google.com/file/d/1JLZptl0PSJr7dvxA8WHI26GU_q-0oF0a/view?usp=sharing">לצפייה במערך</a>
                </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                    מערכי הריצה
                </button>
                </h2>
                <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <p>{{ types.runningP.join('\n') }}</p>
                    <h4>אימוני ריצת רצף</h4>
                    <ul>
                        <li v-for="(item , index) in types.continous" :key="index">{{ item }}</li>
                    </ul>
                    <h4>אימוני מקטעים</h4>
                    <p>{{ types.segments }}</p>
                    <h4>אימוני עליות</h4>
                    <p>{{ types.uphills }}</p>
                    <a href="https://drive.google.com/file/d/15alM_HheVoR76K78kEFlEiyFpNtBFeqN/view?usp=sharing">לצפייה במערך</a>
                </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                    מערכי הפילאטיס
                </button>
                </h2>
                <div id="collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <p>{{ types.pilates }}</p>
                    <a href="https://drive.google.com/file/d/1QVbWq4YLVx_x9NuuqMRo_ensU0fPRmZq/view?usp=sharing">לצפייה במערך</a>
                </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    אימוני נד"ב
                </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <p>{{ types.nadav }}</p>
                    <a href="https://drive.google.com/file/d/1JtJ-q2AhnmMNlDcICSJfmiI1H67hfxSJ/view?usp=drive_link">לצפייה במערך</a>
                </div>
                </div>
            </div>
        </div>
        <div id="navs" @click="rth">
            <img src="../assets/return.png" id="nav">
            <p>לעמוד הבית</p>
        </div>
    </div>
</template>

<script>
import types from "../assets/texts/types.json"
export default {
    data(){
        return{
            btns : ["סוגי האימונים השונים" , "שיפור כש''ג" , "תזונה" , "פיזיותרפיה + מניעת פציעות" , "קרב מגע"] ,
            types
        }
    } , 
    methods :{
        goTo(index){
            switch(index){
                case(0) : 
                    this.$router.push("maarachim") ;
                    break;
                case(1) :
                    this.$router.push("cashag");
                    break;
                case(2) :
                    this.$router.push("nutrition");
                    break;
                case(3) :
                    this.$router.push("phisyo");
                    break;
                default : 
                    this.$router.push("kamag");
                    break;
            }
        },
        rth(){
            this.$router.push("/")
        }
    }
}
</script>

<style scoped>
#types{
    height: 95%;
    width:100vw;
    position: relative;
    left: 8.5%;
    top: -3%;
    font-family: "text";
    color: white;
    overflow: auto;
}

.banner{
    height: 10%;
    width:70%;
    background-image: url("../assets/banner.png");
    background-size: cover;
    font-family: "titles" !important;
    position:relative;
    right:0%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: right;
    padding: 3%;
    font-size: 1.3rem;
    color: #2f2f2f;
    text-shadow: white 2px 2px 2px;
    padding-right:0 ;
}

.btns-container{
    display: flex;
    position: relative;
    right:0%;
    flex-flow: column nowrap;
}

.my-btn{
    background-color:#fdff85;
    margin-bottom: 2%;
    font-size: 1.5rem;
    border-radius: 20px;
    width:96%;
    /* margin-right: 1%; */
    color:#2f2f2f;
}
.texts{
    white-space: pre-line;
    font-size: 1.2rem;
    padding:2%;
    line-height: 1;
    margin-bottom: 1rem;
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

.accordion{
    width: 95% !important;
    position: relative !important;
    right:1% !important;
    margin-bottom: 1rem;
}

.accordion-button{
    background-color: #fdff85;
}

.accordion-header{
    background-color: #fdff85;
}

.accordion-button:not(.collapsed) {
    background-color: #c4c468;
}
a{
    color : #9b9468;
    text-decoration: underline;
    font-size: 1.25rem;
}
</style>