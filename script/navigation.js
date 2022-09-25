const sectionIds = ["intro", "exp1", "quiz1", "exp2", "quiz3", "quiz4", "quiz5", "intro2", "intro2-2", "quiz7", "quiz8", "quiz9", "quiz10"];
var browseHistory = ["intro"];
var maxStep = 0;

var intro2Readed = false;
var intro22Readed = false;

var quiz7Ch4Total = "";
var quiz7Ch4Future = "";
var quiz7Sources = ["0"];
var quiz7Consumes = [];

window.addEventListener("scroll", updateStep);
window.addEventListener("load", updateCheck);

function updateStep()
{
    var h = document.documentElement.scrollTop;
    if (h > maxStep) {
        maxStep = h;
    }

    for (let i = 0; i < sectionIds.length; i++) {
        let doc = document.getElementById(sectionIds [i]).getBoundingClientRect();
        let min = doc.top + h - 400;
        let max = doc.bottom + h - 400;

        if (maxStep <= min) {
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
    let unansweredQ = [];
    if (exp1Finished) {
        document.getElementById("cm1").classList.remove("hidden");
        document.getElementById("next1").classList.remove("disabled");
        document.getElementById("next1-hint").innerHTML = "";
    } else {
        document.getElementById("cm1").classList.add("hidden");
        document.getElementById("next1").classList.add("disabled");
        document.getElementById("next1-hint").innerHTML = "<br>實驗 1 尚未完成";
    }

    if (q1GraphFinished && q2Radio1Finished && q2Radio2Finished) {
        document.getElementById("cm2").classList.remove("hidden");
        document.getElementById("next2").classList.remove("disabled");
        document.getElementById("next2-hint").innerHTML = "";
    } else {
        document.getElementById("cm2").classList.add("hidden");
        document.getElementById("next2").classList.add("disabled");
        document.getElementById("next2-hint").innerHTML = "<br>問題 1<small>&amp;</small>2 尚未完成作答";

        if (!q1GraphFinished) {
	    unansweredQ.push(1);
        }
        if (!q2Radio1Finished || !q2Radio2Finished) {
	    unansweredQ.push(2);
        }
    }

    if (exp2Finished) {
        document.getElementById("cm3").classList.remove("hidden");
        document.getElementById("next3").classList.remove("disabled");
        document.getElementById("next3-hint").innerHTML = "";
    } else {
        document.getElementById("cm3").classList.add("hidden");
        document.getElementById("next3").classList.add("disabled");
        document.getElementById("next3-hint").innerHTML = "<br>實驗 2 尚未完成";
    }

    if (q2GraphFinished) {
        document.getElementById("cm4").classList.remove("hidden");
        document.getElementById("next4").classList.remove("disabled");
        document.getElementById("next4-hint").innerHTML = "";
    } else {
        document.getElementById("cm4").classList.add("hidden");
        document.getElementById("next4").classList.add("disabled");
        document.getElementById("next4-hint").innerHTML = "<br>問題 3 尚未完成作答";
	unansweredQ.push(3);
    }

    if (q3CheckFinished) {
        document.getElementById("cm5").classList.remove("hidden");
        document.getElementById("next5").classList.remove("disabled");
        document.getElementById("next5-hint").innerHTML = "";
    } else {
        document.getElementById("cm5").classList.add("hidden");
        document.getElementById("next5").classList.add("disabled");
        document.getElementById("next5-hint").innerHTML = "<br>問題 4 尚未完成作答";
	unansweredQ.push(4);
    }

    if (document.getElementById("ans1").value && document.getElementById("ans2").value) {
        document.getElementById("cm6").classList.remove("hidden");
        document.getElementById("next6").classList.remove("disabled");
        document.getElementById("next6-hint").innerHTML = "";
    } else {
        document.getElementById("cm6").classList.add("hidden");
        document.getElementById("next6").classList.add("disabled");
        document.getElementById("next6-hint").innerHTML = "<br>問題 5<small>&amp;</small>6 尚未完成作答";

        if (!document.getElementById("ans1").value) {
	    unansweredQ.push(5);
        }
        if (!document.getElementById("ans2").value) {
	    unansweredQ.push(6);
        }
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

    if (quiz7Ch4Total && quiz7Ch4Future && (quiz7Sources.length + quiz7Consumes.length >= 7)) {
        document.getElementById("cm9").classList.remove("hidden");
        document.getElementById("next9").classList.remove("disabled");
        document.getElementById("next9-hint").innerHTML = "";
    } else {
        document.getElementById("cm9").classList.add("hidden");
        document.getElementById("next9").classList.add("disabled");
        document.getElementById("next9-hint").innerHTML = "<br>問題 7 尚未完成作答";
	unansweredQ.push(7);
    }

    if (document.getElementById("ans8").value) {
        document.getElementById("cm10").classList.remove("hidden");
        document.getElementById("next10").classList.remove("disabled");
        document.getElementById("next10-hint").innerHTML = "";
    } else {
        document.getElementById("cm10").classList.add("hidden");
        document.getElementById("next10").classList.add("disabled");
        document.getElementById("next10-hint").innerHTML = "<br>問題 8 尚未完成作答";
	unansweredQ.push(8);
    }

    if (q9TextInputed) {
        document.getElementById("cm11").classList.remove("hidden");
        document.getElementById("next11").classList.remove("disabled");
        document.getElementById("next11-hint").innerHTML = "";
    } else {
        document.getElementById("cm11").classList.add("hidden");
        document.getElementById("next11").classList.add("disabled");
        document.getElementById("next11-hint").innerHTML = "<br>問題 9 尚未完成作答";
	unansweredQ.push(9);
    }

    if (q10Finished) {
        document.getElementById("cm12").classList.remove("hidden");
    } else {
        document.getElementById("cm12").classList.add("hidden");
	unansweredQ.push(10);
    }

    if (unansweredQ.length <= 0) {
        document.getElementById("next12").classList.remove("disabled");
        document.getElementById("next12-hint").innerHTML = "";
    } else {
        document.getElementById("next12").classList.add("disabled");
        document.getElementById("next12-hint").innerHTML = "<br>問題 " + unansweredQ.join(", ") + " 尚未完成作答";
    }
}

function scrollToSection(secId)
{
    var target = document.getElementById(sectionIds [secId]);
    window.scrollTo({ 'behavior': 'smooth', 'top': target.offsetTop });
    browseHistory.push(sectionIds [secId]);
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

function quiz7PopupToggle()
{
   document.getElementById("quiz7-popup").classList.toggle("show");   
}

function quiz7UpdateCh4Total(amount)
{
    quiz7Ch4Total = amount;
    updateCheck();
}

function quiz7UpdateCh4Future(amount)
{
    quiz7Ch4Future = amount;
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

    document.getElementById("answer1").value = quizSelectorToString(q1selections);    
    document.getElementById("answer2").value = document.querySelector('input[name="quiz1radio1"]:checked').value + ", " + document.querySelector('input[name="quiz1radio2"]:checked').value;
    document.getElementById("answer3").value = quizSelectorToString(q2selections);

    q4ans = [];
    for (i = 0; i < 5; i++) {
        if (document.getElementsByName("quiz3checkbox")[i].checked) {
            q4ans.push(document.getElementsByName("quiz3checkbox")[i].value);
        }
    }
    document.getElementById("answer4").value = q4ans.join(", ");

    document.getElementById("answer5").value = document.getElementById("ans1").value;
    document.getElementById("answer6").value = document.getElementById("ans2").value;
    document.getElementById("answer7").value = quiz7Answer();
    document.getElementById("answer8").value = document.getElementById("ans8").value;
    document.getElementById("answer9").value = quiz9Answer();
    document.getElementById("answer10").value = document.querySelector('input[name="quiz10radio"]:checked').value + document.getElementById("ans10").value;

    document.getElementById("history").value = browseHistory.join(" > ");
    //document.getElementById("answerForm").submit();
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

function quiz7Answer()
{
    var output = "source:\"";
    for (i = 0; i < quiz7Sources.length; i++) {
        output += quiz7Sources [i];
        if (i != quiz7Sources.length - 1) {
            output += ",";
        }
    }
    output += "\", comsume:\"";

    for (i = 0; i < quiz7Consumes.length; i++) {
        output += quiz7Consumes [i];
        if (i != quiz7Consumes.length - 1) {
            output += ",";
        }
    }
    output += "\", total:\"" + quiz7Ch4Total + "\"";
    output += "\", future:\"" + quiz7Ch4Future + "\"";

    return output;
}
