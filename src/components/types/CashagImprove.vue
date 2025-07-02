<template>
    <div id="cashag">
        <div class="banner">איך משפרים כש"ג?
        </div>
        <p>בוחן כש"ג בוחן 5 מרכיבי כושר:</p>
        <ul>
            <li v-for="(item , index) in types.cashagList" :key="index">{{ item }}</li>
        </ul>
        <p>ועל מנת להשתפר בכל אחד מהם עלינו להשתמש בכמה מעקרונות הכשג-</p>
        <ol>
            <li v-for="(item , index) in types.principles" :key="index">{{ item }}</li>
        </ol>
        <h4>אבל מה אם אני לא יכול/ה להתאמן על מרכיב מסויים בעקבות פציעה?</h4>
        <p>כל תרגיל בכש"ג מהווה מרכיב כושר, אותו אפשר לאמן גם באמצעות תרגילים אחרים.</p>
        <p>תרגילים וחלופות:</p>
        <ul>
            <li v-for="(item , index) in types.alts" :key="index">{{ item }}</li>
        </ul>
        <div id="navs" @click="goBack">
            <img src="../../assets/return.png" id="nav">
            <p>חזרה לתפריט</p>
        </div>
    </div>
</template>

<script>
import types from '../../assets/texts/types.json'
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
@font-face {
    font-family: "titles";
    src: url("../assets/fonts/titles.ttf");
}

@font-face {
    font-family: "text";
    src: url("../assets/fonts/text.ttf");
}

#cashag{
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