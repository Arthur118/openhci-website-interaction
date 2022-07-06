// function click_card_open() {
//     document.getElementById('card_a_content').style.display='block';
//     document.getElementById('card_a_btn_close').style.display='block';
//     document.getElementById('card_a_btn_open').style.display='none';
//     document.getElementById('card_a_title').style.color='#56FAFB';
// }

// function click_card_close() {
//     document.getElementById('card_a_content').style.display='none';
//     document.getElementById('card_a_btn_close').style.display='none';
//     document.getElementById('card_a_btn_open').style.display='block';
//     document.getElementById('card_a_title').style.color='#fff';
// }

$(function() {
    $(".panel-collapse").on('show.bs.collapse', function() {
        $(this).siblings('.card_a_close').addClass('active');
        console.log("open");
    })
    $('.panel-collapse').on('hide.bs.collapse', function () {
        $(this).siblings('.card_a_close').removeClass('active');
        console.log("hide");
    })
});

$('.panel-collapse').on('hidden.bs.collapse', function () {
    console.log("open");
});

$('.panel-collapse').on('show.bs.collapse', function () {
    console.log("close");
})

// $('.panel-collapse').on('show.bs.collapse', function () {
//     $(this).siblings('.card_a_close').addClass('active');
//     console.log("open");
// });

// $('.panel-collapse').on('hide.bs.collapse', function () {
//     $(this).siblings('.card_a_close').removeClass('active');
//     console.log("hide");
// });

const scheduleInfo = {
    "前置工作坊": [
        {
            "08:00 ~ 09:00": "學員報到/各組相見歡",
            "09:00 ~ 10:00": "開場和破冰",
            "10:00 ~ 11:30": "演講",
            "12:00 ~ 13:00": "午餐",
            "13:00 ~ 14:00": "設計思考工作坊：同理、定義",
            "14:00 ~ 15:30": "演講",
            "15:30 ~ 17:00": "學員討論",
            "17:00 ~ 18:00": "晚餐",
            "18:00 ~ 19:00": "工具課程： Processing",
            "19:00 ~ 20:30": "學員討論"
        },
        {
            "08:00 ~ 09:00": "學員報到",
            "09:00 ~ 10:00": "工具課程： SparkAR",
            "10:00 ~ 11:00": "設計思考工作坊：<br>發想、原型製作、測試",
            "11:00 ~ 12:00": "工具課程",
            "12:00 ~ 13:00": "午餐",
            "13:00 ~ 15:00": "學員討論",
            "15:00 ~ 17:00": "小發表"
        }],
    "正式工作坊": [
        { 
            "08:00 ~ 09:00": "學員報到/各組相見歡",
            "09:00 ~ 11:00": "開場演講",
            "11:00 ~ 12:00": "學員討論",
            "12:00 ~ 13:00": "午餐",
            "13:00 ~ 15:00": "學員討論",
            "15:00 ~ 17:00": "期中提案",
            "17:00 ~ 18:00": "晚餐",
            "18:00 ~ 19:00": "行業動態：<br>學長姐經驗分享座談會",
            "19:00 ~ 20:00": "學員討論"
        },
        {
            "08:00 ~ 09:00": "學員報到",
            "09:00 ~ 10:30": "演講",
            "10:30 ~ 12:00": "顧問諮詢與交流",
            "12:00 ~ 13:00": "午餐",
            "13:00 ~ 15:30": "學員討論",
            "15:30 ~ 17:00": "演講",
            "17:00 ~ 18:00": "晚餐",
            "18:00 ~ 20:00": "學員討論"
        },
        {
            "08:00 ~ 09:00": "學員報到",
            "09:00 ~ 11:00": "學員討論",
            "11:00 ~ 12:00": "會場布置",
            "12:00 ~ 13:00": "午餐",
            "13:00 ~ 15:30": "期末發表",
            "15:30 ~ 17:30": "互動成果展示",
            "17:30 ~ 18:30": "頒獎 / 閉幕"
        }]
}

function schedule_information_insertion() {
    const scheduleSection = document.querySelector("#schedule .box .schedule_box");
    let workshop = "";
    for (const [key, value] of Object.entries(scheduleInfo)) {
        value.forEach((schedule, idx) => {
            let content = `<div class="card_b">
                                <card-title>
                                    <t-24>${key}</t-24>
                                    <br>
                                    <t-24><blue-text> Day${idx+1} </blue-text></t-24>
                                </card-title>`;
            let index = 1;
            for (const [key, value] of Object.entries(schedule)) {
                content += `<div class="schedule-text">
                                <div class="left-text">${key}</div>  
                                <div class="right-text">${value}</div>
                            </div>`;
                if (index < Object.entries(schedule).length) {
                    content += "<white-line></white-line>";
                    index += 1;
                }
            }
            content += `</div>`;
            workshop += content;
        })
    }
    scheduleSection.insertAdjacentHTML("beforeend", workshop);
}
schedule_information_insertion();