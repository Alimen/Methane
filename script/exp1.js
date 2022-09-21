function prepareExp1BottleA() {
    document.getElementById("exp1-bottleA").contentWindow.document.getElementById("bottle-content-label").innerHTML = "空氣<br>+<br>水<br>+<br>空氣";
}

function prepareExp1BottleB() {
    document.getElementById("exp1-bottleB").contentWindow.document.getElementById("bottle-label").innerHTML = "B 瓶";
}

function prepareExp1BottleC() {
    document.getElementById("exp1-bottleC").contentWindow.document.getElementById("bottle-label").innerHTML = "C 瓶";
    document.getElementById("exp1-bottleC").contentWindow.document.getElementById("bottle-content-label").innerHTML = "空氣<br>+<br>水<br>+<br>CH<span class=\"gwd-span-afl5\">4</span>";
}

var exp1Sec = 0;
var exp1Tick = -1;
var exp1Paused = true;
var exp1Finished = false;

window.addEventListener("load", exp1Init);

function exp1Init()
{
    const FPS = 30;
    var intervalTime = 1000 / FPS;
    setInterval(exp1update, intervalTime);
}

function exp1update()
{
    if(exp1Paused) {
        return;
    }

    if (exp1Tick == 0) {
        document.getElementById("exp1-bottleA").contentWindow.gwd.auto_Test_btnClick();
    } else if (exp1Tick == 10) {
        document.getElementById("exp1-bottleB").contentWindow.gwd.auto_Test_btnClick();
    } else if (exp1Tick == 20) {
        document.getElementById("exp1-bottleC").contentWindow.gwd.auto_Test_btnClick();
    } else if (exp1Tick == 100) {
        exp1Paused = true;
        exp1Sec = 2;
        updateExp1Desc();
        updateExp1NavBtn();

    } else if (exp1Tick == 110) {
        document.getElementById("exp1-bottleA").contentWindow.gwd.auto_Test_btn2Click();
    } else if (exp1Tick == 130) {
        document.getElementById("exp1-bottleB").contentWindow.gwd.auto_Test_btn2Click();
    } else if (exp1Tick == 150) {
        document.getElementById("exp1-bottleC").contentWindow.gwd.auto_Test_btn2Click();
    } else if (exp1Tick == 280) {
        exp1Paused = true;
        exp1Sec = 4;
        updateExp1Desc();
        updateExp1NavBtn();

    } else if (320 <= exp1Tick && exp1Tick <= 560) {
        updateExp1Table();
    } else if (exp1Tick == 561) {
        exp1Paused = true;
        exp1Sec = 6;
        updateExp1NavBtn();
    }

    exp1Tick++;
}

function updateExp1Table()
{
    var startTick = 320;
    var endTick = 560;

    var t = exp1Tick - startTick;
    if (t < 0) {
        t = 0;
    } else if (t > (endTick - startTick - 1)) {
        t = (endTick - startTick - 1);
    }    
    document.getElementById("exp1TimerBar").width = 306 * t / (endTick - startTick - 1);

    if (t <= 30) {
        document.getElementById("exp1row1").innerHTML = "<td>25</td><td> </td><td> </td><td> </td>";
    } else {
        document.getElementById("exp1row1").innerHTML = "<td>25</td><td>25.5</td><td>26.5</td><td>29.0</td>";
    }
    if (t <= 60) {
        document.getElementById("exp1row2").innerHTML = "<td>50</td><td> </td><td> </td><td> </td>";
    } else {
        document.getElementById("exp1row2").innerHTML = "<td>50</td><td>28.0</td><td>29.0</td><td>30.5</td>";
    }
    if (t <= 90) {
        document.getElementById("exp1row3").innerHTML = "<td>75</td><td> </td><td> </td><td> </td>";
    } else {
        document.getElementById("exp1row3").innerHTML = "<td>75</td><td>29.0</td><td>29.7</td><td>31.0</td>";
    }
    if (t <= 120) {
        document.getElementById("exp1row4").innerHTML = "<td>100</td><td> </td><td> </td><td> </td>";
    } else {
        document.getElementById("exp1row4").innerHTML = "<td>100</td><td>29.2</td><td>30.0</td><td>31.2</td>";
    }
    if (t <= 150) {
        document.getElementById("exp1row5").innerHTML = "<td>125</td><td> </td><td> </td><td> </td>";
    } else {
        document.getElementById("exp1row5").innerHTML = "<td>125</td><td>29.4</td><td>30.2</td><td>31.3</td>";
    }
    if (t <= 180) {
        document.getElementById("exp1row6").innerHTML = "<td>150</td><td> </td><td> </td><td> </td>";
    } else {
        document.getElementById("exp1row6").innerHTML = "<td>150</td><td>29.5</td><td>30.4</td><td>31.4</td>";
    }
    if (t <= 210) {
        document.getElementById("exp1row7").innerHTML = "<td>175</td><td> </td><td> </td><td> </td>";
    } else {
        document.getElementById("exp1row7").innerHTML = "<td>175</td><td>29.6</td><td>30.5</td><td>31.5</td>";
    }
    if (t <= 238) {
        document.getElementById("exp1row8").innerHTML = "<td>200</td><td> </td><td> </td><td> </td>";
    } else {
        document.getElementById("exp1row8").innerHTML = "<td>200</td><td>29.6</td><td>30.5</td><td>31.5</td>";
    }
}

function onExp1PrvBtn()
{
    if (exp1Sec <= 2) {
        exp1Sec = 0;
        exp1Tick = 0;
        document.getElementById("exp1-bottleA").contentWindow.gwd.auto_Test_btn1bClick();
        document.getElementById("exp1-bottleB").contentWindow.gwd.auto_Test_btn1bClick();
        document.getElementById("exp1-bottleC").contentWindow.gwd.auto_Test_btn1bClick();
    } else if (exp1Sec <= 4) {
        exp1Sec = 2;
        exp1Tick = 101;
        document.getElementById("exp1-bottleA").contentWindow.gwd.auto_Test_btn2bClick();
        document.getElementById("exp1-bottleB").contentWindow.gwd.auto_Test_btn2bClick();
        document.getElementById("exp1-bottleC").contentWindow.gwd.auto_Test_btn2bClick();
    } else {
        exp1Sec = 4;
        exp1Tick = 261;
        document.getElementById("exp1-bottleA").contentWindow.gwd.auto_Test_btn3bClick();
        document.getElementById("exp1-bottleB").contentWindow.gwd.auto_Test_btn3bClick();
        document.getElementById("exp1-bottleC").contentWindow.gwd.auto_Test_btn3bClick();
        updateExp1Table();
    }

    exp1Paused = true;
    updateExp1Desc();
    updateExp1NavBtn();
}

function onExp1NxtBtn()
{
    exp1Sec++;
    updateExp1Desc();
    updateExp1NavBtn();

    switch (exp1Sec) {
        case 1:
            exp1Tick = 0;
            exp1Paused = false;
            break;
        case 2:
            exp1Tick = 101;
            exp1Paused = true;
            document.getElementById("exp1-bottleA").contentWindow.gwd.auto_Test_btn2bClick();
            document.getElementById("exp1-bottleB").contentWindow.gwd.auto_Test_btn2bClick();
            document.getElementById("exp1-bottleC").contentWindow.gwd.auto_Test_btn2bClick();
            break;
        case 3:
            exp1Tick = 101;
            exp1Paused = false;
            break;
        case 4:
            exp1Tick = 281;
            exp1Paused = true;
            document.getElementById("exp1-bottleA").contentWindow.gwd.auto_Test_btn3bClick();
            document.getElementById("exp1-bottleB").contentWindow.gwd.auto_Test_btn3bClick();
            document.getElementById("exp1-bottleC").contentWindow.gwd.auto_Test_btn3bClick();
            break;
        case 5:
            exp1Tick = 281;
            exp1Paused = false;
            document.getElementById("exp1-bottleA").contentWindow.gwd.auto_Test_btn3Click();
            document.getElementById("exp1-bottleB").contentWindow.gwd.auto_Test_btn3Click();
            document.getElementById("exp1-bottleC").contentWindow.gwd.auto_Test_btn3Click();
            break;
        case 6:
            exp1Tick = 561;
            exp1Paused = true;
            updateExp1Table();
            updateExp1NavBtn();
            break;
    }
}

function updateExp1NavBtn()
{
    if (exp1Sec != 0) {
        document.getElementById("exp1-prvbtn").classList.remove("disabled");
    } else {
        document.getElementById("exp1-prvbtn").classList.add("disabled");
    }

    if (exp1Sec != 6) {
        document.getElementById("exp1-nxtbtn").classList.remove("disabled");
    } else {
        document.getElementById("exp1-nxtbtn").classList.add("disabled");

        if (!exp1Finished) {
            exp1Finished = true;
            updateCheck();
        }
    }    
}

function updateExp1Desc()
{
    if (exp1Sec < 2) {
        document.getElementById("exp1-desc").innerHTML = "<p style=\"text-indent: -1em;\">1.  小柯取了三個2公升裝的寶特瓶，各自滴入一滴的水並裝滿空氣後鎖緊（此時水會蒸發成水蒸氣），分別編號A、B、C。</p>";          
    } else if (exp1Sec < 4) {
        document.getElementById("exp1-desc").innerHTML = "<p style=\"text-indent: -1em;\">2.  A瓶、B瓶及C瓶先各自抽出5毫升的空氣，然後添加5毫升的空氣到A瓶，5毫升的 CO<span style=\"font-size: 12px\">2</span> 到B瓶，5毫升的 CH<span style=\"font-size: 12px\">4</span> 到C瓶。</p>";
    } else {
        document.getElementById("exp1-desc").innerHTML = "<p style=\"text-indent: -1em;\">3.  小柯開啟60瓦的燈泡持續對三個寶特瓶進行照射，並將三個寶特瓶內氣體上升溫度隨時間的變化紀錄下來如【表1】。</p>";
    }
}
