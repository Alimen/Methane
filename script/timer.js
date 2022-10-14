const clickEvents = {
    "step0": "點擊 側邊欄 前言 1",
    "step1": "點擊 側邊欄 實驗 1",
    "step2": "點擊 側邊欄 問題 1&2",
    "step3": "點擊 側邊欄 實驗 2",
    "step4": "點擊 側邊欄 問題 3",
    "step5": "點擊 側邊欄 問題 3",
    "step6": "點擊 側邊欄 問題 5&6",
    "step7": "點擊 側邊欄 前言 2",
    "step8": "點擊 側邊欄 前言 2（續）",
    "step9": "點擊 側邊欄 問題 7",
    "step10": "點擊 側邊欄 問題 8",
    "step11": "點擊 側邊欄 問題 9",
    "step12": "點擊 側邊欄 問題 10",

    "next0": "點擊 實驗開始",

    "exp1-prvbtn": "點擊 實驗 1 觀看實驗 (「<」上一步)",
    "exp1-nxtbtn": "點擊 實驗 1 觀看實驗 (「>」下一步)",
    "prv1": "點擊 返回前言 1",
    "next1": "點擊 前往問題 1&2",

    "quiz1-select1": "點擊 問題 1 曲線與圖例 - 三角形圖示",
    "quiz1-select2": "點擊 問題 1 曲線與圖例 - 圓形圖示",
    "quiz1-select3": "點擊 問題 1 曲線與圖例 - 菱形圖示",
    "quiz2radio1-1": "點擊 問題 2 (A) 實驗組",
    "quiz2radio1-2": "點擊 問題 2 (B) 對照組",
    "quiz2radio1-3": "點擊 問題 2 (C) 光照組",
    "quiz2radio2-1": "點擊 問題 2 (D) 氣體密度",
    "quiz2radio2-2": "點擊 問題 2 (E) 氣體體積",
    "quiz2radio2-3": "點擊 問題 2 (F) 不同暖化指數的氣體",
    "prv2": "點擊 返回實驗 1",
    "next2": "點擊 前往實驗 2",

    "exp2-prvbtn": "點擊 實驗 2 觀看實驗 (「<」上一步)",
    "exp2-nxtbtn": "點擊 實驗 2 觀看實驗 (「>」下一步)",
    "prv3": "點擊 返回問題 1&2",
    "next3": "點擊 前往問題 3",

    "quiz3-select1": "點擊 問題 3 曲線與圖例 - 三角形圖示",
    "quiz3-select2": "點擊 問題 3 曲線與圖例 - 圓形圖示",
    "quiz3-select3": "點擊 問題 3 曲線與圖例 - 菱形圖示",
    "prv4": "點擊 返回實驗 2",
    "next4": "點擊 前往問題 4",

    "quiz4checkbox1": "點擊 問題 4 A曲線幾乎不變",
    "quiz4checkbox2": "點擊 問題 4 B曲線有明顯變化",
    "quiz4checkbox3": "點擊 問題 4 C曲線幾乎不變",
    "quiz4checkbox4": "點擊 問題 4 C曲線變得更貼近 B曲線",
    "quiz4checkbox5": "點擊 問題 4 C曲線和 B曲線疊合",
    "prv5": "點擊 返回問題 3",
    "next5": "點擊 前往問題 5&6",

    "ans1": "點擊 問題 5 作答區",
    "ans2": "點擊 問題 6 作答區",
    "prv6": "點擊 返回問題 4",
    "next6": "點擊 前往前言 2",

    "prv7": "點擊 返回問題 5&6",
    "next7": "點擊 前往前言 2 (續)",

    "prv8": "點擊 返回前言 2",
    "next8": "點擊 前往問題 7",

    "quiz7-popup": "點擊 前言 2 提示",
    "prv9": "點擊 返回前言 2 (續)",
    "next9": "點擊 前往問題 8",

    "portrait_0": "點擊 問題 8 頭像 1",
    "portrait_1": "點擊 問題 8 頭像 2",
    "portrait_2": "點擊 問題 8 頭像 3",
    "portrait_3": "點擊 問題 8 頭像 4",
    "portrait_4": "點擊 問題 8 頭像 5",
    "portrait_5": "點擊 問題 8 頭像 6",
    "portrait_6": "點擊 問題 8 頭像 7",
    "portrait_7": "點擊 問題 8 頭像 8",
    "quiz8radio1": "點擊 問題 8 簽署",
    "quiz8radio2": "點擊 問題 8 不簽署",
    "ans8-1": "點擊 問題 8 簽署理由作答區",
    "ans8-1": "點擊 問題 8 實施政策作答區",
    "prv10": "點擊 返回問題 7",
    "next10": "點擊 前往問題 9",

    "quiz9-addbtn": "點擊 問題 9 新增輸入框",
    "prv11": "點擊 返回問題 8",
    "next11": "點擊 前往問題 10",

    "quiz10radio1": "點擊 問題 10 「無，沒有想法。」",
    "quiz10radio2": "點擊 問題 10 「有，我想要 ......」",
    "ans10": "點擊 問題 10 作答區",
    "prv12": "點擊 返回問題 9",
    "next12": "點擊 交卷"
};

const editCompleteEvents = {
    "ans1": "完成 問題 5 作答區",
    "ans2": "完成 問題 6 作答區",
    "ch4_total": "完成 問題 7 甲烷總量",
    "ch4_future": "完成 問題 7 甲烷預測",
    "ans8-1": "完成 問題 8 簽署理由作答區",
    "ans8-1": "完成 問題 8 實施政策作答區",
    "ans10": "完成 問題 10 作答區"
};

const dragEvents = {
    "item_0": "開始拖曳 問題 7 化石燃料",
    "item_1": "開始拖曳 問題 7 農、畜牧業",
    "item_2": "開始拖曳 問題 7 生物性燃燒",
    "item_3": "開始拖曳 問題 7 濕地",
    "item_4": "開始拖曳 問題 7 地質湖泊、海洋",
    "item_5": "開始拖曳 問題 7 氣溶膠沉降",
    "item_6": "開始拖曳 問題 7 光化學反應"
};

var timerHistory = "";

window.addEventListener('load', resetTimer);
window.addEventListener('load', injectEvents);

function resetTimer()
{
    timerHistory = "History:\n";
}

function injectEvents()
{
    for (var id in clickEvents) {
        let item = document.getElementById(id);
        item.addEventListener("click", recordClickEvent);
    }

    for (var id in editCompleteEvents) {
        let item = document.getElementById(id);
        item.addEventListener('change', recordEditEvent);
    }

    for (var id in dragEvents) {
        let item = document.getElementById(id);
        item.addEventListener('dragstart', recordDragEvent);
    }

    document.getElementById("ans9-1").addEventListener("click", recordQuiz9ClickEvent);
    document.getElementById("ans9-2").addEventListener("click", recordQuiz9ClickEvent);
    document.getElementById("ans9-3").addEventListener("click", recordQuiz9ClickEvent);

    document.getElementById("ans9-1").addEventListener("change", recordQuiz9EditEvent);
    document.getElementById("ans9-2").addEventListener("change", recordQuiz9EditEvent);
    document.getElementById("ans9-3").addEventListener("change", recordQuiz9EditEvent);
}

function recordClickEvent(e)
{
    recordEvent(clickEvents[e.currentTarget.id]);
}

function recordEditEvent(e)
{
    recordEvent(editCompleteEvents[e.currentTarget.id]);
}

function recordDragEvent(e)
{
    recordEvent(dragEvents[e.currentTarget.id]);
}

function recordQuiz9ClickEvent(e)
{
    recordEvent("點擊 問題 9 作答區" + e.currentTarget.id.substring(5));
}

function recordQuiz9EditEvent(e) {
    recordEvent("完成 問題 9 作答區" + e.currentTarget.id.substring(5));
}

function recordEvent(msg)
{
    let str = "\"" + getTimestamp() + "\":";
    str += "\"" + msg + "\"";
    //console.log(msg);

    if (timerHistory.length > 12) {
        timerHistory += ",\n";
    }
    timerHistory += str;
}

function getTimestamp()
{
    const dateObj = new Date(Date.now());
    let str = dateObj.getFullYear() + "-" + (String(dateObj.getMonth() + 1)).padStart(2, '0') + "-" + (String(dateObj.getDate()).padStart(2, '0'));
    str += " " + (String(dateObj.getHours()).padStart(2, '0')) + ":" + (String(dateObj.getMinutes()).padStart(2, '0')) + ":" + (String(dateObj.getSeconds()).padStart(2, '0'));
    str += "." + (String(dateObj.getMilliseconds()).padStart(3, '0')) + "00";

    return str;
}
