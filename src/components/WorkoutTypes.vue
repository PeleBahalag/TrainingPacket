<template>
    <div id="types">
        <div class="banner">סוגי האימונים ומערכי
            <br>
            הכושר הקרבי
        </div>
        <p class="texts">בחרו נושא כדי לעיין</p>
        <div class="btns-container">
            <button v-for="(btn , index) in btns" :key="index" @click="goTo(index)" class="my-btn">{{ btn }}</button>
        </div>
        <div id="navs" @click="rth">
            <img src="../assets/return.png" id="nav">
            <p>לעמוד הבית</p>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            btns : ["סוגי האימונים השונים" , "שיפור כש''ג" , "תזונה" , "פיזיותרפיה + מניעת פציעות" , "קרב מגע"]
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
    margin-right: 1%;
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
</style>