<template>
    <div id="workouts">
        <div class="banner">אימונים
        </div>
        <div v-if="!isInSub">
            <p>לפניכם אימונים שונים למצבים וזמינויות ציוד שונים. תמיד ניתן לחזור לכאן</p>
            <div class="btns-container">
                <button v-for="(item , index) in btns" :key="index" class="my-btn"
                @click="go(item.id)"
                >{{ item.text }}</button>
            </div>
        </div>
        <router-view></router-view>
        
    </div>
</template>

<script>
export default {
    data() {
        return{
            btns : [
                { id : "demos" , text : "הדגמות תרגילים" },
                { id : "running" , text : "ריצות"} ,
                { id : "2" , text : "מארז 2"} , 
                { id : "3" , text : "מארז 3"} ,
                { id : "shetach" , text : "שטח"} ,
                { id: "shorts" , text : "פק''לים קצרים"}
            ],
        }
    },
    computed : {
        isInSub(){
            return this.$route.path.includes('running') || this.$route.path.includes('shorts') || this.$route.path.includes('shetach') ||
            this.$route.path.includes('2') || this.$route.path.includes('3') || this.$route.path.includes('demos')
        }
    },
    methods : {
        go(id){
            this.$router.push(id);
        }
    }
}
</script>

<style scoped>
#workouts{
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
    margin-right: 1%;
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
</style>