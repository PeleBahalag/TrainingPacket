<template>
    <div id="phsiyo">
        <div class="banner">פיזיותרפיה
            <br>
            ומניעת פציעות
        </div>
        <h2>עקרונות מרכזיים</h2>
        <ol>
            <li v-for="(item , index) in types.physioPrinciples" :key="index">{{ item }}</li>
        </ol>
        <h2>פציעות נפוצות ודרכי מניעה</h2>
        <ul>
            <li v-for="(item , index) in types.commonInjuries" :key="index">{{ item }}</li>
        </ul>
        <h2>המלצות נוספות למפקדים</h2>
        <ul>
            <li v-for="(item , index) in types.recs" :key="index">{{ item }}</li>
        </ul>
        <a href="https://drive.google.com/file/d/1KP88jvOu94ElRTXXhIlIGJAzSTr5Rye7/view?usp=sharing">פרוטוקולים</a>
        <div id="navs" @click="goBack">
            <img src="../../assets/return.png" id="nav">
            <p>חזרה לתפריט</p>
        </div>
    </div>
</template>

<script>
import types from "../../assets/texts/types.json"
export default {
    data(){
        return{
            types,
        }
    },
    methods : {
        goBack(){
            this.$router.push('/workout-types')
        }
    }
}
</script>

<style scoped>
#phsiyo{
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
    background-image: url("../../assets/banner.png");
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
    color : #9b9468;
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

h4{
    text-align: right;
}
</style>