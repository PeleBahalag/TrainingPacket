<template>
  <div class="nituach-isuk">
    <div class="banner">
        ניתוח עיסוק
    </div>
    <p v-show="showNew" class="highlight">מאחר וזו הפעם הראשונה שאתם משתמשים בלומדה, עליכם לקרוא על ניתוח עיסוק.</p>
    <p>חיילים בחיל הגנת הגבולות צריכים להיות חזקים פיזית ומנטלית.</p>
    <h2>לוחמי איסוף</h2>
    <p>
        צריכים לסחוב משקל כבד (אמצעי אמלח) וללכת איתו בשטחים משתנים למרחקים שבין 9-20 ק''מ ולשהות סטטית עם הציוד עליהם.
        <br>
        הלוחמים גם נדרשים לפנות פצועים באלונקה עד לנקודת פינוי.
    </p>
    <h2>לוחמי חי"ר גבולות</h2>
    <p>
        צריכים להיות מוכנים לריצות קצרות על מנת לקפוץ בהתקלויות והסתערויות, לסחוב פקלים שונים במשקלים שונים ובנוסף ציוד מלא בפטרולים ומארבים, ובמידת הצורך גם לפנות פצועים באלונקה.
    </p>
    <h2 class="higlight" style="text-align:center;">איך אני מתאמן בהתאם לניתוח העיסוק שלי?</h2>
    <p>
        לוחמי איסוף- אימוני נד"ב, אימוני פילאטיס וליבה, אימוני כוח חיזוק פלג גוף עליון (החזקת משקלים כבדים) ופלג גוף תחתון (הליכה עם המשקלים).
    </p>
    <p>
        לוחמי חי"ר גבולות- מארז 3, מקטעים, עליות, קרב מגע וכוח מתפרץ.
    </p>
    <img src="../assets/bniyatLochem.jpg" class="res"/>
    <div class="buffer"></div>
    <button v-show="showNew" class="my-btn" @click="done">הבנתי,
        <br> אפשר להמשיך >>
    </button>
    <div id="navs" @click="rth" v-show="!showNew">
                <img src="../assets/return.png" id="nav">
                <p>חזרה</p>
    </div>
    <div class="buffer"></div>
  </div>
</template>

<script>
export default {
    computed : {
        showNew(){
            //I named it first visit stupidly even though when its true it signifies that its NOT the first visit but... too late i guess
            const firstVisit = localStorage.getItem('firstVisit');
            return !firstVisit
        }
    },
    methods : {
        rth(){
            this.$router.push('general')
        },
        done(){
            localStorage.setItem('firstVisit' , true);
            this.$router.push('general');
        }
    }
}
</script>

<style>
.nituach-isuk{
    height: 95%;
    width:100vw;
    position: relative;
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

.highlight{
    color : #fdff85;
    font-weight: bold;
}

.buffer{
    height:6vh;
}

.my-btn{
    background-color:#fdff85;
    margin-bottom: 2%;
    font-size: 1rem;
    border-radius: 20px;
    margin-right: 1%;
    color:#2f2f2f;
    position: relative;
    right:57%;
}

.res{
    width: 100%;
}
</style>