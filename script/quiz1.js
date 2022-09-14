var quiz1Canvas;
var quiz1Context;
var quiz3Canvas1;
var quiz3Context1;
var quiz4Canvas1;
var quiz4Context1;

window.addEventListener("load", initQuiz1Canvas, false);

var q1mouseX = 0;
var q1mouseY = 0;
var q1curX = 0;
var q1curY = 0;

var q1curColor = 0;
var shapes;
var q1points;
var q1selections;

var q1DotCnt = 0;
var q1GraphFinished = false;
var q1RadioFinished = false;

function initQuiz1Canvas()
{
    quiz1Canvas = document.getElementById("quiz1Canvas");
	quiz1Context = quiz1Canvas.getContext("2d");
    quiz3Canvas1 = document.getElementById("quiz3Canvas1");
	quiz3Context1 = quiz3Canvas1.getContext("2d");
    quiz4Canvas1 = document.getElementById("quiz4Canvas1");
	quiz4Context1 = quiz4Canvas1.getContext("2d");

    shapes = [
        document.getElementById("dot"),
        document.getElementById("square"),
        document.getElementById("triangle")
    ];

    q1points = [
        [0, 50, 80, 90, 92, 94, 95, 96, 96],
        [0, 65, 90, 97, 100, 102, 104, 105, 105],
        [0, 90, 105, 110, 112, 113, 114, 115, 115],
    ];

    q1selections = [0, 0, 0];
    document.getElementById("quiz1-select1").options [0].selected = true;
    document.getElementById("quiz1-select2").options [0].selected = true;
    document.getElementById("quiz1-select3").options [0].selected = true;

	//document.getElementsByName("quiz1pen")[0].checked = true;
	document.getElementsByName("quiz1radio")[0].checked = false;
	document.getElementsByName("quiz1radio")[1].checked = false;
    q1RadioFinished = false

	//quiz1Canvas.addEventListener("mousemove", q1EventMouseMove, true);
	//quiz1Canvas.addEventListener("click", q1EventMouseClick, true);

    quiz1Context.scale(0.75, 0.75);
    quiz3Context1.scale(0.75, 0.75);
    quiz4Context1.scale(0.75, 0.75);
    drawQuiz1Canvas();
}

function drawQuiz1Canvas()
{
    drawQuiz1Board(quiz1Context);
    drawQuiz1Lines(quiz1Context, q1points);
    //drawQuiz1Cursor(quiz1Context, q1curColor, q1curX, q1curY);

    drawQuiz1Board(quiz3Context1);
    drawQuiz1Lines(quiz3Context1, q1points);

    drawQuiz1Board(quiz4Context1);
    drawQuiz1Lines(quiz4Context1, q1points);
}

function drawQuiz1Board(ctx)
{
    ctx.clearRect(0, 0, 430, 400);

    ctx.lineWidth = 1;
    ctx.font="14px Lato";
    ctx.fillStyle = "black";
    ctx.strokeStyle = "black";

    ctx.beginPath();
    ctx.moveTo(20, 10);
    ctx.lineTo(20, 384);
    ctx.lineTo(390, 384);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(20, 20);
    ctx.lineTo(390, 20);

    ctx.moveTo(20, 76);
    ctx.lineTo(390, 76);

    ctx.moveTo(20, 132);
    ctx.lineTo(390, 132);

    ctx.moveTo(20, 188);
    ctx.lineTo(390, 188);

    ctx.moveTo(20, 244);
    ctx.lineTo(390, 244);

    ctx.moveTo(20, 300);
    ctx.lineTo(390, 300);

    ctx.moveTo(20, 356);
    ctx.lineTo(390, 356);
    ctx.stroke();

    ctx.fillText("20", 0, 384);
    ctx.fillText("21", 0, 356);
    ctx.fillText("23", 0, 300);
    ctx.fillText("25", 0, 244);
    ctx.fillText("27", 0, 188);
    ctx.fillText("29", 0, 132);
    ctx.fillText("31", 0, 76);
    ctx.fillText("33", 0, 20);

    ctx.fillText("0", 20, 398);
    ctx.fillText("25", 62, 398);
    ctx.fillText("50", 104, 398);
    ctx.fillText("75", 146, 398);
    ctx.fillText("100", 188, 398);
    ctx.fillText("125", 230, 398);
    ctx.fillText("150", 272, 398);
    ctx.fillText("175", 314, 398);
    ctx.fillText("200", 356, 398);		
}

function drawQuiz1Lines(ctx, points)
{    
    ctx.lineWidth = 2;

    ctx.strokeStyle = "#db2828";    
    ctx.beginPath();
    pointCnt = 0;
    for (i = 0; i < 9; i++) {
        if (points[0][i] >= 0) {
            if (pointCnt == 0) {
                ctx.moveTo(20 + i * 42, 384 - points[0][i] * 2.8);
            } else {
                ctx.lineTo(20 + i * 42, 384 - points[0][i] * 2.8);
            }
            pointCnt++;
        }
    }
    if (pointCnt > 1) {
        ctx.stroke();
    }

    ctx.strokeStyle = "#fbbd08";    
    ctx.beginPath();
    pointCnt = 0;
    for (i = 0; i < 9; i++) {
        if (points[1][i] >= 0) {
            if (pointCnt == 0) {
                ctx.moveTo(20 + i * 42, 384 - points[1][i] * 2.8);
            } else {
                ctx.lineTo(20 + i * 42, 384 - points[1][i] * 2.8);
            }
            pointCnt++;
        }
    }
    if (pointCnt > 1) {
        ctx.stroke();
    }

    ctx.strokeStyle = "#00b5ad";    
    ctx.beginPath();
    pointCnt = 0;
    for (i = 0; i < 9; i++) {
        if (points[2][i] >= 0) {
            if (pointCnt == 0) {
                ctx.moveTo(20 + i * 42, 384 - points[2][i] * 2.8);
            } else {
                ctx.lineTo(20 + i * 42, 384 - points[2][i] * 2.8);
            }
            pointCnt++;
        }
    }
    if (pointCnt > 1) {
        ctx.stroke();
    }

     for (i = 0; i < 3; i++) {
        for (j = 0; j < 9; j++) {
            if (points[i][j] >= 0) {
                x = 20 + j * 42;
                y = 384 - points[i][j] * 2.8;
                ctx.drawImage(shapes [i], x - 6, y - 6);
            }
        }
    }
}

function drawQuiz1Cursor(ctx, curColor, curX, curY)
{
    x = 20 + curX * 42;
    y = 384 - curY * 2.8;

	ctx.fillText("(" + (curX * 25) + "," + (20 + curY * 0.1).toFixed(1) + ")", x + 6, y + 6);
    
    ctx.globalAlpha = 0.5;
    ctx.drawImage(shapes [curColor], x - 6, y - 6);
    ctx.globalAlpha = 1;
}

function q1EventMouseMove(e)
{
	if(e.offsetX || e.offsetX == 0) {
		q1mouseX = e.offsetX;
		q1mouseY = e.offsetY;
	} else if(e.layerX || e.layerX == 0) {
		q1mouseX = e.layerX - quiz1Canvas.offsetLeft;
		q1mouseY = e.layerY - quiz1Canvas.offsetTop;
	}

    x = Math.round((q1mouseX - 20) / 42);
    if (x > 8) {
        x = 8;
    } else if (x < 0) {
        x = 0;
    }

    y = Math.round((384 - q1mouseY) / 2.8);
    if (y > 130) {
        y = 130;
    } else if (y < 0) {
        y = 0;
    }
    
    if (x != q1curX || y != q1curY) {
        q1curX = x;
        q1curY = y;
        drawQuiz1Canvas();
    }
}

function q1EventMouseClick(e)
{
    if (q1points [q1curColor][q1curX] < 0) {
        q1DotCnt++;
        if (q1DotCnt >= 27) {
            q1GraphFinished = true;
            if (q1GraphFinished && q1RadioFinished) {
                updateCheck();
            }
        }
    }

    q1points [q1curColor][q1curX] = q1curY;
    drawQuiz1Canvas();
}

function q1SetColor(i)
{
    q1curColor = i;
    drawQuiz1Canvas();
}

function q1RadioChanged()
{
    if (!q1RadioFinished) {
        q1RadioFinished = true;
        if (q1GraphFinished && q1RadioFinished) {
            updateCheck();
        }
    }
}

function q1SelectChanged(selectorId)
{
    x = document.getElementById("quiz1-select" + selectorId).selectedIndex;
    q1selections [selectorId - 1] = x;

    for (i = 1; i < 4; i++) {
        if (x != 0 && i != selectorId) {
            s = document.getElementById("quiz1-select" + i);
            if (s.selectedIndex == x) {
                s.options [0].selected = true;
                q1selections [i - 1] = 0;
            }
        }
    }

    q1GraphFinished = true;
    for (i = 0; i < 3; i++) {
        if (q1selections [i] == 0) {
            q1GraphFinished = false;
            break;
        }
    }

    updateCheck();
}
