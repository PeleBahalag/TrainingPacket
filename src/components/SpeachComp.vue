<template>
    <div id="general">
        <div class="banner">מידע כללי
        </div>
        <div>
            <h2>פתח דבר</h2>
            <div class="texts">{{ openings.importance.join('\n') }}</div>
            <div class="texts">{{ openings.forChail.join('\n') }}</div>
            <div class="texts">{{ openings.forMefaked.join('\n') }}</div>
            <p>
                פה עבורכם לכל התייעצות או שאלה- שני ברט קאגית גדוד הפיקוד <br>
0546663235

            </p>
        </div>
        <div id="navs" @click="rth">
            <img src="../assets/return.png" id="nav">
            <p>חזרה לבית</p>
        </div>
    </div>
</template>

<script>
import openings from "../assets/texts/openings.json"
export default {
    data() {
        return {
            openings
        }
    } , 
    methods : {
        rth(){
            this.$router.push("/")
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
    padding-right:0 ;
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

.my-btn{
    background-color:#fdff85;
    margin: 3%;
    margin-left: 5%;
    font-size: 1.5rem;
    border-radius: 20px;
    color:#2f2f2f;
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

.res{
    width: 90%;
}
</style>