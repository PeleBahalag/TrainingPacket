<template>
    <div>
        <h2>הדגמות תרגילים</h2>
        <div class="menu" v-if="!isInSub">
            <div class="mycard" @click="navigate('pull')">
                <img src="../assets/pull.png" class="cardimg"/>
                <h2 style="color: black;">משיכה</h2>
            </div>
            <div class="mycard" @click="navigate('push')">
                <img src="../assets/push.png" class="cardimg"/>
                <h2 style="color: black;">דחיפה</h2>
            </div>
            <div class="mycard" @click="navigate('legs')">
                <img src="../assets/legday.png" class="cardimg"/>
                <h2 style="color: black;">פלג גוף תחתון</h2>
            </div>
        </div>
        <router-view></router-view>
        <div id="navs" @click="rth">
            <img src="../assets/return.png" id="nav">
            <p>חזרה</p>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    computed : {
        isInSub(){
            return (this.$route.path.includes('push') || this.$route.path.includes('pull') || this.$route.path.includes('legs'))
        }
    },
    methods : {
        navigate(name){
            this.$router.push("/"+name)
        },
        rth(){
            console.log('happening')
            if(!this.isInSub){
                this.$router.push('/workouts')
            }
            else{
                this.$router.push('/demos')
            }
        }
    },
    
}
</script>

<style scoped>
h2{
    font-size: 1.5rem;
    font-family: "titles" !important;
    text-align: right;
    padding-right: 1rem;
}

.menu{
    height: 80%;
    display:flex;
    flex-flow: column nowrap;
    width:96%;
}

.mycard{
    width: 99%;
    margin:1%;
    height: 36%;
    background-color: #fdff85;
    display:flex;
    flex-flow: column nowrap;
    padding: 6%;
    align-items: center;
    border-radius: 20px;
    user-select: none;
    cursor: pointer;
}

.cardimg{
    width: 40%;
    height: 40%;
}

</style>