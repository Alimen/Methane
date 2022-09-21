function prepareExp2BottleA() {
    document.getElementById("exp2-bottleA").contentWindow.document.getElementById("bottle-content-label").innerHTML = "空氣<br>+<br>水<br>+<br>空氣";
}

function prepareExp2BottleB() {
    document.getElementById("exp2-bottleB").contentWindow.document.getElementById("bottle-label").innerHTML = "B 瓶";
}

function prepareExp2BottleC() {
    document.getElementById("exp2-bottleC").contentWindow.document.getElementById("bottle-label").innerHTML = "C 瓶";
    document.getElementById("exp2-bottleC").contentWindow.document.getElementById("bottle-content-label").innerHTML = "空氣<br>+<br>水<br>+<br>CH<span class=\"gwd-span-afl5\">4</span>";
}

var exp2Sec = 0;
var exp2Tick = -1;
var exp2Paused = true;
var exp2Finished = false;

window.addEventListener("load", exp2Init, false);

function exp2Init()
{
    const FPS = 30;
    var intervalTime = 1000 / FPS;
    setInterval(exp2update, intervalTime);
}

function exp2update()
{
    if (exp2Paused) {
        return;
    }

    if (exp2Tick == 0) {
        document.getElementById("exp2-bottleA").contentWindow.gwd.auto_Test_btn1bClick();
    } else if (exp2Tick == 10) {
        document.getElementById("exp2-bottleB").contentWindow.gwd.auto_Test_btn1bClick();
    } else if (exp2Tick == 20) {
        document.getElementById("exp2-bottleC").contentWindow.gwd.auto_Test_btn1bClick();
    } else if (exp2Tick == 200) {
        exp2Paused = true;
        exp2Sec = 2;
        updateExp2Desc();
        updateExp2NavBtn();

    } else if (221 <= exp2Tick && exp2Tick <= 461) {
        updateExp2Table();
    } else if (exp2Tick == 462) {
        exp2Paused = true;
        exp2Sec = 4;
        updateExp2NavBtn();
    }

    exp2Tick++;
}

function updateExp2Table()
{
    var startTick = 221;
    var endTick = 461;

    var t = exp2Tick - startTick;
    if (t < 0) {
        t = 0;
    } else if (t > (endTick - startTick - 1)) {
        t = (endTick - startTick - 1);
    }    
    document.getElementById("exp2TimerBar").width = 306 * t / (endTick - startTick - 1);

    if (t <= 30) {
        document.getElementById("exp2row1").innerHTML = "<td>25</td><td> </td><td> </td><td> </td>";
    } else {
        document.getElementById("exp2row1").innerHTML = "<td>25</td><td>25.6</td><td>26.6</td><td>27.4</td>";
    }
    if (t <= 60) {
        document.getElementById("exp2row2").innerHTML = "<td>50</td><td> </td><td> </td><td> </td>";
    } else {
        document.getElementById("exp2row2").innerHTML = "<td>50</td><td>28.1</td><td>29.0</td><td>29.6</td>";
    }
    if (t <= 90) {
        document.getElementById("exp2row3").innerHTML = "<td>75</td><td> </td><td> </td><td> </td>";
    } else {
        document.getElementById("exp2row3").innerHTML = "<td>75</td><td>29.0</td><td>29.7</td><td>30.2</td>";
    }
    if (t <= 120) {
        document.getElementById("exp2row4").innerHTML = "<td>100</td><td> </td><td> </td><td> </td>";
    } else {
        document.getElementById("exp2row4").innerHTML = "<td>100</td><td>29.3</td><td>30.0</td><td>30.4</td>";
    }
    if (t <= 150) {
        document.getElementById("exp2row5").innerHTML = "<td>125</td><td> </td><td> </td><td> </td>";
    } else {
        document.getElementById("exp2row5").innerHTML = "<td>125</td><td>29.4</td><td>30.2</td><td>30.7</td>";
    }
    if (t <= 180) {
        document.getElementById("exp2row6").innerHTML = "<td>150</td><td> </td><td> </td><td> </td>";
    } else {
        document.getElementById("exp2row6").innerHTML = "<td>150</td><td>29.6</td><td>30.5</td><td>30.8</td>";
    }
    if (t <= 210) {
        document.getElementById("exp2row7").innerHTML = "<td>175</td><td> </td><td> </td><td> </td>";
    } else {
        document.getElementById("exp2row7").innerHTML = "<td>175</td><td>29.6</td><td>30.5</td><td>30.9</td>";
    }
    if (t <= 237) {
        document.getElementById("exp2row8").innerHTML = "<td>200</td><td> </td><td> </td><td> </td>";
    } else {
        document.getElementById("exp2row8").innerHTML = "<td>200</td><td>29.6</td><td>30.5</td><td>30.9</td>";
    }
}

function onExp2PrvBtn()
{
    if (exp2Sec <= 2) {
        exp2Sec = 0;
        exp2Tick = 0;
        document.getElementById("exp2-bottleA").contentWindow.gwd.auto_Test_btn1aClick();
        document.getElementById("exp2-bottleB").contentWindow.gwd.auto_Test_btn1aClick();
        document.getElementById("exp2-bottleC").contentWindow.gwd.auto_Test_btn1aClick();
    } else {
        exp2Sec = 2;
        exp2Tick = 201;
        document.getElementById("exp2-bottleA").contentWindow.gwd.auto_Test_btn2aClick();
        document.getElementById("exp2-bottleB").contentWindow.gwd.auto_Test_btn2aClick();
        document.getElementById("exp2-bottleC").contentWindow.gwd.auto_Test_btn2aClick();
        updateExp2Table();
    }

    exp2Paused = true;
    updateExp2Desc();
    updateExp2NavBtn();
}

function onExp2NxtBtn()
{
    exp2Sec++;
    updateExp2Desc();
    updateExp2NavBtn();

    switch (exp2Sec) {
        case 1:
            exp2Tick = 0;
            exp2Paused = false;
            break;
        case 2:
            exp2Tick = 201;
            exp2Paused = true;
            document.getElementById("exp2-bottleA").contentWindow.gwd.auto_Test_btn2aClick();
            document.getElementById("exp2-bottleB").contentWindow.gwd.auto_Test_btn2aClick();
            document.getElementById("exp2-bottleC").contentWindow.gwd.auto_Test_btn2aClick();
            break;
        case 3:
            exp2Tick = 201;
            exp2Paused = false;
            document.getElementById("exp2-bottleA").contentWindow.gwd.auto_Test_btn2bClick();
            document.getElementById("exp2-bottleB").contentWindow.gwd.auto_Test_btn2bClick();
            document.getElementById("exp2-bottleC").contentWindow.gwd.auto_Test_btn2bClick();
            break;
        case 4:
            exp2Tick = 462;
            exp2Paused = true;
            updateExp2Table();
            updateExp2NavBtn();
            break;
    }
}

function updateExp2NavBtn()
{
    if (exp2Sec != 0) {
        document.getElementById("exp2-prvbtn").classList.remove("disabled");
    } else {
        document.getElementById("exp2-prvbtn").classList.add("disabled");
    }

    if (exp2Sec != 4) {
        document.getElementById("exp2-nxtbtn").classList.remove("disabled");
    } else {
        document.getElementById("exp2-nxtbtn").classList.add("disabled");

        if (!exp2Finished) {
            exp2Finished = true;
            updateCheck();
        }
    }    
}

function updateExp2Desc()
{
    if (exp2Sec < 2) {
        document.getElementById("exp2-desc").innerHTML = "<p style=\"text-indent: -1em;\">1.  小柯知道水蒸氣會因為紫外線照射而形成．OH，故進行實驗2時，先以紫外燈照射三個寶特瓶一段時間後，才開啟燈泡進行與實驗1相同的實驗步驟來進行探究。</p>";          
    } else {
        document.getElementById("exp2-desc").innerHTML = "<p style=\"text-indent: -1em;\">2.  再次開啟燈泡持續對三個寶特瓶進行照射，並將三個寶特瓶內氣體上升溫度隨時間的變化紀錄下來如【表2】。</p>";
    }
}
