$(function() {
    $(".panel-collapse").on('show.bs.collapse', function() {
        $(this).siblings('.card_a_close').addClass('active');
        console.log("open");
    })
    $('.panel-collapse').on('hide.bs.collapse', function () {
        $(this).siblings('.card_a_close').removeClass('active');
        console.log("hide");
    })
    // page change
    $('.nav-link').on('click',function(){
        let POV = $($(this).attr('href'));
        //console.log(POV);
        //console.log(POV.offset().top);
        $('html,body').animate({scrollTop: POV.offset().top},800);
    })
    let a = document.querySelector(".navbar-toggler");
    $(".navbar-nav li a").on("click",function () {
        a.click();
    });
    
});

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

const groupInfo = {
    "COORDINATOR": [{
        "name": "陳昱安",
        "school": "國立政治大學",
        "department": "數位內容碩士學位學程"
    }, 
    {
        "name": "洪揚",
        "school": "國立陽明交通大學",
        "department": "傳播與科技學系"
    }, 
    {
        "name": "巫芊瑩",
        "school": "國立臺灣大學",
        "department": "資訊管理學系"
    }],
    "GENERAL AFFAIRS": [{
        "name": "于庭歡",
        "school": "國立臺灣大學",
        "department": "經濟系"
    }],
    "HUMAN RESOURCE": [{
        "name": "許筑涵",
        "school": "國立政治大學",
        "department": "企業管理學系 / 數位內容學程"
    },
    {
        "name": "曾雅婕",
        "school": "國立陽明交通大學",
        "department": "教育所數位學習組"
    },
    {
        "name": "盧姿惠",
        "school": "國立政治大學",
        "department": "公共行政學系 / 數位內容"
    }],
    "PHOTOGRAPHY": [{
        "name": "左雅致",
        "school": "崑山科技大學",
        "department": "資訊管理學系"
    },
    {
        "name": "丁容",
        "school": "國立臺灣大學",
        "department": "園藝暨景觀學系 景觀遊憩組"
    }],
    "SPEECH HOST": [{
        "name": "吳冠霖",
        "school": "國立臺灣大學",
        "department": "工商管理學系"
    },
    {
        "name": "劉芷聿",
        "school": "國立政治大學",
        "department": "數位內容碩士學位學程"
    },
    {
        "name": "馮介怡",
        "school": "國立陽明交通大學",
        "department": "傳播與科技學系"
    }],
    "SPONSORSHIP": [{
        "name": "高慈憶",
        "school": "國立雲林科技大學",
        "department": "前瞻學士學位學程"
    },
    {
        "name": "劉佳昀",
        "school": "國立中山大學",
        "department": "中國文學系"
    }],
    "WEB SERVICE": [{
        "name": "李欣霏",
        "school": "國立政治大學",
        "department": "數位內容碩士學位學程"
    },
    {
        "name": "楊馥蓉",
        "school": "國立政治大學",
        "department": "數位內容碩士學位學程"
    },
    {
        "name": "黃柏維",
        "school": "國立臺灣科技大學",
        "department": "電子工程系"
    }],
    "DESIGN LECTURE": [{
        "name": "翁憶如",
        "school": "國立臺灣師範大學",
        "department": " 設計系 視覺設計組"
    },
    {
        "name": "袁婕",
        "school": "國立清華大學",
        "department": "服務科學研究所"
    },
    {
        "name": "姚怡均",
        "school": "國立陽明交通大學",
        "department": "傳播與科技學系"
    }],
    "TECH LECTURE": [{
        "name": "黃詠瑞",
        "school": "國立政治大學",
        "department": "數位內容碩士學位學程"
    },
    {
        "name": "林敬翔",
        "school": "國立臺灣大學",
        "department": "工程科學及海洋工程"
    },
    {
        "name": "艾奎華",
        "school": "國立陽明交通大學",
        "department": "多媒體工程所"
    }],
    "VISUAL DESIGN": [{
        "name": "鞏持靚",
        "school": "國立政治大學",
        "department": "數位內容碩士學位學程"
    },
    {
        "name": "林芷萱",
        "school": "國立政治大學",
        "department": "數位內容碩士學位學程"
    },
    {
        "name": "范愷祐",
        "school": "國立政治大學",
        "department": "廣電系"
    },
    {
        "name": "李悦恩",
        "school": "臺北市立大學",
        "department": "城市發展系 / 視覺藝術系"
    },
    {
        "name": "吳泓玉",
        "school": "台南應用科大",
        "department": "服飾設計管理系"
    },
    {
        "name": "張瑞庭",
        "school": "國立政治大學",
        "department": "資訊管理 / 數位內容學程"
    }],
    "PUBLICITY": [{
        "name": "林雨翾",
        "school": "國立政治大學",
        "department": "廣告系"
    },
    {
        "name": "林思穎",
        "school": "國立中央大學",
        "department": "法文系"
    },
    {
        "name": "許玟心",
        "school": "國立陽明交通大學",
        "department": "傳播所"
    },
    {
        "name": "甄曌珞",
        "school": "國立政治大學",
        "department": "廣告系 / 數位內容學程"
    }],
    "TEACHING ASSISTANT": [{
        "name": "徐薪淳",
        "school": "國立臺灣大學",
        "department": "心理所"
    },
    {
        "name": "卓宜璇",
        "school": "國立陽明交通大學",
        "department": "傳播與科技學系"
    },
    {
        "name": "賴宜君",
        "school": "國立陽明交通大學",
        "department": "傳播研究所"
    },
    {
        "name": "許立融",
        "school": "國立陽明交通大學",
        "department": "傳播研究所"
    },
    {
        "name": "周雨欣",
        "school": "國立清華大學",
        "department": "藝術與設計學系"
    },
    {
        "name": "金容安",
        "school": "東吳大學",
        "department": "心理所工商組"
    },
    {
        "name": "王秉中",
        "school": "國立臺灣藝術大學",
        "department": "圖文傳播藝術學系"
    },
    {
        "name": "黃永雯",
        "school": "國立臺灣大學",
        "department": "資訊工程學系 / 神經生物與認知科學學程"
    },
    {
        "name": "陳睿芊",
        "school": "國立清華大學",
        "department": "科管院學士班"
    },
    {
        "name": "曾紘遠",
        "school": "國立臺北科技大學",
        "department": "電子工程系"
    },
    {
        "name": "黃晴",
        "school": "國立清華大學",
        "department": "電機資訊學院學士班"
    }],
}

function group_information_insertion() {
    const groupSection = document.querySelector("#Group .box");
    let member = ``;
    for (const [key, value] of Object.entries(groupInfo)) {
        let content = `<div class="card_a">
                    <div class="card_a_close">
                        <card-title id="card_a_title"><t-24>${key}<t-24></card-title>
                        <i class="fa-solid fa-chevron-down" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse_${key}" aria-expanded="true" aria-controls="collapse_${key}"></i>
                    </div>
                    <div id="collapse_${key}" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne" style="width: 100%;">
                        <div class="row group_member">`;
        value.forEach((person) => {
            content += `<div class="col-10 col-md-4 group_member_block">
                            <p><b style="font-size: 18px;">${person.name}</b><br>${person.school}<br>${person.department}</p>
                            </div>`
        })
        content += `</div></div></div>`
        member += content;
    }
    groupSection.insertAdjacentHTML("beforeend", member);
}

group_information_insertion();

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