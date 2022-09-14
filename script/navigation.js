var sectionIds = ["intro", "exp1", "quiz1", "exp2", "quiz3", "quiz4", "quiz5", "intro2", "intro2-2", "quiz7"/*, "quiz8", "quiz9", "quiz10"*/];
var intro2Readed = false;
var intro22Readed = false;

var quiz7Ch4Total = "";
var quiz7Sources = ["item_0"];
var quiz7Consumes = [];

window.addEventListener("scroll", updateStep);

function updateStep()
{
    var h = document.documentElement.scrollTop;
    var i, min, max, doc;

    for (i = 0; i < sectionIds.length; i++) {
        doc = document.getElementById(sectionIds [i]).getBoundingClientRect();
        min = doc.top + h - 400;
        max = doc.bottom + h - 400;

        if (h <= min) {
            document.getElementById("step" + i).className = "disabled step";
        } else if (min < h && h <= max) {
            document.getElementById("step" + i).className = "active step";
        } else {
            document.getElementById("step" + i).className = "completed step";
        }
    }
    
    updateCheck();
}

function updateCheck()
{
    if (exp1Finished) {
        document.getElementById("cm1").classList.remove("hidden");
    } else {
        document.getElementById("cm1").classList.add("hidden");
    }

    if (q1GraphFinished && q1RadioFinished) {
        document.getElementById("cm2").classList.remove("hidden");
        document.getElementById("next2").classList.remove("disabled");
        document.getElementById("next2-hint").innerHTML = "";
    } else {
        document.getElementById("cm2").classList.add("hidden");
        document.getElementById("next2").classList.add("disabled");
        document.getElementById("next2-hint").innerHTML = "<br>問題 1<small>&amp;</small>2 尚未完成作答";
    }

    if (exp2Finished) {
        document.getElementById("cm3").classList.remove("hidden");
    } else {
        document.getElementById("cm3").classList.add("hidden");
    }

    if (q2GraphFinished) {
        document.getElementById("cm4").classList.remove("hidden");
        document.getElementById("next4").classList.remove("disabled");
        document.getElementById("next4-hint").innerHTML = "";
    } else {
        document.getElementById("cm4").classList.add("hidden");
        document.getElementById("next4").classList.add("disabled");
        document.getElementById("next4-hint").innerHTML = "<br>問題 3 尚未完成作答";
    }

    if (q3CheckFinished) {
        document.getElementById("cm5").classList.remove("hidden");
        document.getElementById("next5").classList.remove("disabled");
        document.getElementById("next5-hint").innerHTML = "";
    } else {
        document.getElementById("cm5").classList.add("hidden");
        document.getElementById("next5").classList.add("disabled");
        document.getElementById("next5-hint").innerHTML = "<br>問題 4 尚未完成作答";
    }

    if (document.getElementById("ans1").value && document.getElementById("ans2").value) {
        document.getElementById("cm6").classList.remove("hidden");
        document.getElementById("next6").classList.remove("disabled");
        document.getElementById("next6-hint").innerHTML = "";
    } else {
        document.getElementById("cm6").classList.add("hidden");
        document.getElementById("next6").classList.add("disabled");
        document.getElementById("next6-hint").innerHTML = "<br>問題 5<small>&amp;</small>6 尚未完成作答";
    }

    if (intro2Readed) {
        document.getElementById("cm7").classList.remove("hidden");
    } else {
        document.getElementById("cm7").classList.add("hidden");
    }

    if (intro22Readed) {
        document.getElementById("cm8").classList.remove("hidden");
    } else {
        document.getElementById("cm8").classList.add("hidden");
    }

    if (quiz7Ch4Total && (quiz7Sources.length + quiz7Consumes.length >= 7)) {
        document.getElementById("cm9").classList.remove("hidden");
        document.getElementById("next10").classList.remove("disabled");
        document.getElementById("next7-hint").innerHTML = "";
    } else {
        document.getElementById("cm9").classList.add("hidden");
        document.getElementById("next10").classList.add("disabled");
        document.getElementById("next7-hint").innerHTML = "<br>問題 7 尚未完成作答";
    }
}

function scrollToSection(secId)
{
    var target = document.getElementById(sectionIds [secId]);
    window.scrollTo({ 'behavior': 'smooth', 'top': target.offsetTop });
}

function markIntro2Readed()
{
    if (!intro2Readed) {
        intro2Readed = true;
        updateCheck();
    }
}

function markIntro22Readed()
{
    if (!intro22Readed) {
        intro22Readed = true;
        updateCheck();
    }
}

function quiz7UpdateCh4Total(amount)
{
    quiz7Ch4Total = amount;
    updateCheck();
}

function quiz7UpdateItems(sourceLst, consumeLst)
{
    quiz7Sources = sourceLst.slice(0);
    quiz7Consumes = consumeLst.slice(0);
    updateCheck();
}

function sumitAnswers()
{
    //document.getElementById("answer1").value = expGraphToString(q1points);
    document.getElementById("answer1").value = quizSelectorToString(q1selections);

    if (document.getElementsByName("quiz1radio")[0].checked) {
        document.getElementById("answer2").value = document.getElementsByName("quiz1radio")[0].value;
    } else {
        document.getElementById("answer2").value = document.getElementsByName("quiz1radio")[1].value;
    }

    //document.getElementById("answer3").value = expGraphToString(q2points);
    document.getElementById("answer3").value = quizSelectorToString(q2selections);

    q3ans = [];
    for (i = 0; i < 5; i++) {
        if (document.getElementsByName("quiz3checkbox")[i].checked) {
            q3ans.push(document.getElementsByName("quiz3checkbox")[i].value);
        }
    }
    document.getElementById("answer4").value = q3ans.join(", ");

    document.getElementById("answer5").value = document.getElementById("ans1").value;
    document.getElementById("answer6").value = document.getElementById("ans2").value;

    document.getElementById("answerForm").submit();
}

function expGraphToString(points)
{
    a = [];
    for (i = 0; i < 9; i++) {
        if (points[0][i] >= 0) {
            a.push((20 + points[0][i] * 0.1).toFixed(1));
        } else {
            a.push("-1");
        }
    }

    b = [];
    for (i = 0; i < 9; i++) {
        if (points[1][i] >= 0) {
            b.push((20 + points[1][i] * 0.1).toFixed(1));
        } else {
            b.push("-1");
        }
    }

    c = [];
    for (i = 0; i < 9; i++) {
        if (points[2][i] >= 0) {
            c.push((20 + points[2][i] * 0.1).toFixed(1));
        } else {
            c.push("-1");
        }
    }

    output = "A:[" + a.join(", ") + "], B:[" + b.join(", ") + "], C:[" + c.join(", ") + "]";
    return output;
}

function quizSelectorToString(selections)
{
    output = "A:" + numToAlphabet(selections [1]) + ", B:" + numToAlphabet(selections [2]) + ", C:" + numToAlphabet(selections [0]);
    return output;
}

function numToAlphabet(num)
{
    switch(num) {
    case 1:
        return "A";
    case 2:
        return "B";
    case 3:
        return "C";
    default:
        return "?";
    }
}
