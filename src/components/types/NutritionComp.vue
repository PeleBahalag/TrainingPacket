<template>
    <div id="nutrition">
        <div class="banner">תזונה
        </div>
        <p v-for="(line , index) in types.nutrition" :key="index">{{ line }}</p>
        <h2>הנחיות תזונה לשבוע עומס מוגבר/ שגרת מלחמה/מארב ארוך- נוהל אכילה ושתיה מבצעית 1:2:6: </h2>
        <ul>
            <li v-for="(item , index) in types.nutriList" :key="index">{{ item }}</li>
        </ul>
        <img src="../../assets/tzuna.jpg" id="infopic">
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
@font-face {
    font-family: "titles";
    src: url("../assets/fonts/titles.ttf");
}

@font-face {
    font-family: "text";
    src: url("../assets/fonts/text.ttf");
}

#nutrition{
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

#infopic{
    width: 95%;
    position: relative;
    right:50%;
    transform: translateX(50%);
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