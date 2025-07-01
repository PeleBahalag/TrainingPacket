<template>
    <div id="general">
        <div class="banner">מידע כללי
        </div>
        <h2>פתח דבר</h2>
        <div class="texts">{{ openings.importance.join('\n') }}</div>
        <div class="texts">{{ openings.forChail.join('\n') }}</div>
        <div class="texts">{{ openings.forMefaked.join('\n') }}</div>
        <h2>מבנה אימון</h2>
        <div class="accordion" id="accordionExample">
            <div class="accordion-item">
                <h2 class="accordion-header">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    פתיחה
                </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <p>{{ openings.workoutOpening }}</p>
                </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    חימום
                </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <p>{{ openings.warmup.join('\n') }}</p>
                    <p>{{ openings.chimumShichrur[0] }}</p>
                </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    חלק עיקרי
                </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <p>{{ openings.woMain }}</p>
                </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                    שחרור
                </button>
                </h2>
                <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <p>{{ openings.sikum }}</p>
                    <p>{{ openings.chimumShichrur[1] }}</p>
                </div>
                </div>
            </div>
        </div>
        <h2>גיוון האימונים</h2>
        <p>{{ openings.givunP }}</p>
        <ul>
            <li v-for="(item , index) in openings.givunList" :key="index">{{ item }}</li>
        </ul>
        <h3>סופר סט</h3>
        <ul>
            <li v-for="(item , index) in openings.superSet" :key="index">{{ item }}</li>
        </ul>
        <h2>הוראות בטיחות</h2>
        <p>{{ openings.timeGaps }}</p>
        <ul>
            <li v-for="(item , index) in openings.tgList" :key="index">{{ item }}</li>
        </ul>
        <p>{{ openings.chipuk }}</p>
        <ul>
            <li v-for="(item , index) in openings.chipukList" :key="index">{{ item }}</li>
        </ul>
        <a href="">טבלאות עומס חום וקור<br></a>
        <a href="">תוצאות כש"ג<br></a>
        <div id="navs" @click="rth">
            <img src="../assets/return.png" id="nav">
            <p>לעמוד הבית</p>
        </div>
    </div>
</template>

<script>
import  openings from "../assets/texts/openings.json"
export default {
    data(){
        return{
            openings,

        }
    },
    methods : {
        scrollToBottom(){
            const container = this.$refs.scrollContainer;
            if (container) {
                container.scrollTo({ top: container.scrollHeight, behavior: 'smooth' });
            }
        } ,
        rth(){
            this.$router.push("/")
        }
    },
}
</script>

<style scoped>
@font-face {
    font-family: "titles";
    src: url("../assets/fonts/titles.ttf");
}

@font-face {
    font-family: "text";
    src: url("../assets/fonts/text.ttf");
}

#general{
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
    width:90%;
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
}

a{
    color : #fdff85;
    text-decoration: underline;
    font-size: 1.25rem;
}

p{
    font-size: 1.2rem;
    padding:2%;
    line-height: 1;
}

.btns-container{
    display: flex;
    flex-flow: column nowrap;
}

.btn{
    background-color:#fdff85;
    margin: 3%;
    font-size: 1.5rem;
    border-radius: 20px;
}

.texts{
    white-space: pre-line;
    font-size: 1.2rem;
    padding:2%;
    line-height: 1;
    margin-bottom: 1rem;
}

h2{
    font-size: 1.5rem;
    font-family: "titles" !important;
    text-align: right;
    padding-right: 1rem;
}

h3{
    text-align: right !important;
    padding-right: 1rem;
}

.readMore{
    opacity:0.7;
    text-decoration: underline;
}

li{
    /* width:90%; */
    text-align: right;
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