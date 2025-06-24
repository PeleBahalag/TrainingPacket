<template>
    <div id="opening-screen" ref="scrollContainer">
        <div class="banner">חוברת אימונים
            <br>
            חיל הגנת הגבולות
        </div>
        <p>{{ openings.opening }}</p>
        <a href="#" @click.prevent="scrollToBottom">{{ openings.link }}</a>
        <div class="texts">{{ openings.importance.join('\n') }}</div>
        <div class="texts">{{ openings.forChail.join('\n') }}</div>
        <div class="texts">{{ openings.forMefaked.join('\n') }}</div>
        <h2>מבנה אימון</h2>
        <p>{{ openings.workoutOpening }}</p>
        <div class="texts">{{ openings.warmup.join('\n') }}
            <span v-show="wurm">{{ openings.chimumShichrur[0] }}</span>
            <br v-show="wurm">
            <span @click="toggleWURM" class="readMore"> {{ wurmText }}</span>
        </div>
        <p>{{ openings.woMain }}</p>
        <p>{{ openings.sikum }}
            <span v-show="srm">{{ openings.chimumShichrur[1] }}</span>
            <br v-show="srm">
            <span @click="toggleSRM" class="readMore"> {{ srmText }}</span></p>
        <h2>גיוון האימונים</h2>
        <p>{{ openings.givunP }}</p>
        <ul>
            <li v-for="(item , index) in openings.givunList" :key="index">{{ item }}</li>
        </ul>
        <h2>סופר סט</h2>
        <ul>
            <li v-for="(item , index) in openings.superSet" :key="index">{{ item }}</li>
        </ul>
        <!--all of the text-->
        <p>{{ openings.btnsMsg }}</p>
        <div class="btns-container">
            <button v-for="(btn , index) in openings.btns" :key="index" @click="goTo(index)" class="btn">{{ btn }}</button>
        </div>
        
    </div>
</template>

<script>
import  openings from "../assets/texts/openings.json"
export default {
    data(){
        return{
            openings,
            wurm : false,
            srm : false,
        }
    },
    methods : {
        scrollToBottom(){
            const container = this.$refs.scrollContainer;
            if (container) {
                container.scrollTo({ top: container.scrollHeight, behavior: 'smooth' });
            }
        } ,
        goTo(index) {
            
        },
        toggleWURM(){
            if(this.wurm){
                this.wurm = false
            }
            else{
                this.wurm = true;
            }
        },
        toggleSRM(){
            if(this.srm){
                this.srm = false
            }
            else{
                this.srm = true;
            }
        }
    },
    computed : {
        wurmText(){
            if(this.wurm){return "סגור"} else{return "קרא עוד..."}
        },
        srmText(){
            if(this.srm){return "סגור"} else{return "קרא עוד..."}
        }
    }
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

#opening-screen{
    height: 90%;
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
}

.readMore{
    opacity:0.7;
    text-decoration: underline;
}

li{
    /* width:90%; */
    text-align: right;
}
</style>