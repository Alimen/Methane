var quiz2Canvas;
var quiz2Context;
var quiz3Canvas2;
var quiz3Context2;
var quiz4Canvas2;
var quiz4Context2;

window.addEventListener("load", initQuiz2Canvas, false);

var q2mouseX = 0;
var q2mouseY = 0;
var q2curX = 0;
var q2curY = 0;

var q2curColor = 0;
var q2points;
var q2selections;

var q2DotCnt = 0;
var q2GraphFinished = false;

function initQuiz2Canvas()
{
    quiz2Canvas = document.getElementById("quiz2Canvas");
	quiz2Context = quiz2Canvas.getContext("2d");
    quiz3Canvas2 = document.getElementById("quiz3Canvas2");
	quiz3Context2 = quiz3Canvas2.getContext("2d");
    quiz4Canvas2 = document.getElementById("quiz4Canvas2");
	quiz4Context2 = quiz4Canvas2.getContext("2d");

    q2points = [
        [0, 56, 81, 90, 93, 94, 96, 96, 96],
        [0, 66, 90, 97, 100, 102, 105, 105, 105],
        [0, 74, 96, 102, 104, 107, 108, 109, 109],
    ];

    q2selections = [0, 0, 0];
    document.getElementById("quiz3-select1").options [0].selected = true;
    document.getElementById("quiz3-select2").options [0].selected = true;
    document.getElementById("quiz3-select3").options [0].selected = true;

	//document.getElementsByName("quiz2pen")[0].checked = true;

	//quiz2Canvas.addEventListener("mousemove", q2EventMouseMove, true);
	//quiz2Canvas.addEventListener("click", q2EventMouseClick, true);

    quiz2Context.scale(0.75, 0.75);
    quiz3Context2.scale(0.75, 0.75);
    quiz4Context2.scale(0.75, 0.75);
    drawQuiz2Canvas();
}

function drawQuiz2Canvas()
{
    drawQuiz1Board(quiz2Context);
    drawQuiz1Lines(quiz2Context, q2points);
    //drawQuiz1Cursor(quiz2Context, q2curColor, q2curX, q2curY);

    drawQuiz1Board(quiz3Context2);
    drawQuiz1Lines(quiz3Context2, q2points);

    drawQuiz1Board(quiz4Context2);
    drawQuiz1Lines(quiz4Context2, q2points);
}

function q2EventMouseMove(e)
{
	if(e.offsetX || e.offsetX == 0) {
		q2mouseX = e.offsetX;
		q2mouseY = e.offsetY;
	} else if(e.layerX || e.layerX == 0) {
		q2mouseX = e.layerX - quiz2Canvas.offsetLeft;
		q2mouseY = e.layerY - quiz2Canvas.offsetTop;
	}

    x = Math.round((q2mouseX - 20) / 42);
    if (x > 8) {
        x = 8;
    } else if (x < 0) {
        x = 0;
    }

    y = Math.round((384 - q2mouseY) / 2.8);
    if (y > 130) {
        y = 130;
    } else if (y < 0) {
        y = 0;
    }
    
    if (x != q2curX || y != q2curY) {
        q2curX = x;
        q2curY = y;
        drawQuiz2Canvas();
    }
}

function q2EventMouseClick(e)
{
    if (q2points [q2curColor][q2curX] < 0) {
        q2DotCnt++;
        if (q2DotCnt >= 27) {
            q2GraphFinished = true;
            updateCheck();
        }
    }

    q2points [q2curColor][q2curX] = q2curY;
    drawQuiz2Canvas();
}

function q2SetColor(i)
{
    q2curColor = i;
    drawQuiz2Canvas();
}

window.addEventListener("load", resetCheckboxes, false);
var checkedList = [];
var q3CheckFinished = false;

function resetCheckboxes()
{
    for (i = 0; i < 5; i++) {
        document.getElementsByName("quiz3checkbox")[i].checked = false;
    }
}

function onCheckboxChange(x)
{
    if (document.getElementsByName("quiz3checkbox")[x].checked) {
        if (checkedList.length >= 2) {
            document.getElementsByName("quiz3checkbox")[checkedList.shift()].checked = false;
        }
        checkedList.push(x);

    } else {
        i = checkedList.indexOf(x);
        if (i >= 0) {
            checkedList.splice(i, 1);
        }
    }

    if (checkedList.length == 2) {
        q3CheckFinished = true;
    } else {
        q3CheckFinished = false;
    }
    updateCheck();
}

function q3SelectChanged(selectorId)
{
    x = document.getElementById("quiz3-select" + selectorId).selectedIndex;
    q2selections [selectorId - 1] = x;

    for (i = 1; i < 4; i++) {
        if (x != 0 && i != selectorId) {
            s = document.getElementById("quiz3-select" + i);
            if (s.selectedIndex == x) {
                s.options [0].selected = true;
                q2selections [i - 1] = 0;
            }
        }
    }

    q2GraphFinished = true;
    for (i = 0; i < 3; i++) {
        if (q2selections [i] == 0) {
            q2GraphFinished = false;
            break;
        }
    }

    updateCheck();
}
