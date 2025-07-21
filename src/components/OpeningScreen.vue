<template>
    <div id="opening-screen" ref="scrollContainer">
        <div class="banner">   חוברת כושר <br>
                גופני למפקד
        </div>
        
        <h2>{{ openings.opening }}</h2>
        <p>{{ openings.btnsMsg }}</p>
        <div class="btns-container">
            <button v-for="(btn , index) in openings.btns" :key="index" @click="goTo(index)" class="my-btn">{{ btn }}</button>
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
        goTo(index) {
            switch(index){
                case(0) :
                    this.$router.push('speach') ;
                    break ;
                case(1) :
                    this.$router.push('general') ;
                    break ;
                case(2) : 
                    this.$router.push('workout-types')
                default :
                    this.$router.push('workouts') ;
                    break ;
            }
        },

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

#opening-screen{
    height: 95%;
    width:100vw;
    position: relative;
    left:9.7%;
    top: -3%;
    font-family: "text";
    color: white;
    overflow: auto;
}

.banner{
    height: 10%;
    width:70%;
    right:0;
    background-image: url("../assets/banner.png");
    background-size: cover;
    font-family: "titles" !important;
    position:relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: right;
    padding: 3%;
    padding-right: 2%;
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
    margin-right: 2%;
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
    padding: .5rem;
}


li{
    /* width:90%; */
    text-align: right;
}
</style>