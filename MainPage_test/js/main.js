$(function() {
//btn open
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
        $('html,body').animate({scrollTop: POV.offset().top, scrollLeft: 0},800);
    })
    let a = document.querySelector(".navbar-toggler");
    $(".navbar-nav li a").on("click",function () {
        a.click();
    });

//show section on scroll
    const ah = [];
    for (var i = 1; i <= 16; i++) { 
        var position = $(('section:nth-of-type('+i+')')).offset(). top;
        
        ah[ i-1 ] = position;
        console.log(i+'p=' +position);
        console.log(i+'ap=' +ah);
    }

    var windowHeight = window.innerHeight;
    console.log('window h = ' + windowHeight);

    let navs = document.querySelectorAll('.nav-link');

    $(document).scroll(function() {
        $('html,body').scrollLeft(0);
        var scrollPos = $(this).scrollTop();
        for (var i = 1; i <= 16; i++) {
            if(scrollPos >= ah[i-1] - windowHeight/1.5){
                $(('section:nth-of-type('+i+')')).addClass('fade_in');
             //   console.log(scrollPos);
             //   console.log('show');
            }
        }
    })

    // hide and show navbar
    $(window).scroll(function () {
        let sc = $(window).scrollTop();
        //let card_start = $("#theme").offset().top;
        //console.log('max height: ' + card_start);
        let windowWidth = window.innerWidth;
        let windowHeight = window.innerHeight;
    
        if (windowWidth > 768) {
            if(sc > windowHeight){
                $("#com-navbar").fadeIn();
                $("#top_navbar").fadeIn();
            }
            else {
                $("#com-navbar").fadeOut();
                $("#top_navbar").fadeOut();
            }
        }
    });
});

//導航列位置指示
//scrollmagic init
let controller = new ScrollMagic.Controller();
// let sections = [$("#theme_href"),$("#speaker_href"),$("#schedule_href"),$("#Apply_href"),$("#FAQ_href"),$("#Group_href")];
let sections = [$("#theme"),$("#speaker"),$("#schedule"),$("#Apply"),$("#FAQ"),$("#Group")];

for(i=0; i<sections.length; i++) {
	let sectionId = sections[i].attr("id");
	let sectionHeight = sections[i].outerHeight() + window.innerHeight/2 ;
	let scene = new ScrollMagic.Scene({triggerElement: "#"+sectionId, duration: sectionHeight})
	.setClassToggle("#menu"+i, "active")
	.addTo(controller);
}

function setNavBar(){
    $("#com-navbar").css('display', 'none');
}

setNavBar();

function getOffset(el) {
    const rect = el.getBoundingClientRect();
    return {
      left: rect.left + window.scrollX,
      top: rect.top + window.scrollY
    };
}

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
                        <card-title id="card_a_title"><t-20>${key}<t-20></card-title>
                        <i class="fa-solid fa-chevron-down" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse_${key}" aria-expanded="true" aria-controls="collapse_${key}"></i>
                    </div>
                    <div id="collapse_${key}" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne" style="width: 100%;">
                        <div class="row group_member">`;
        value.forEach((person) => {
            content += `<div class="col-10 col-md-4 group_member_block">
                            <p><b style="font-size: 16px;">${person.name}</b><br>${person.school}<br>${person.department}</p>
                            </div>`
        })
        content += `</div></div></div>`
        member += content;
    }
    groupSection.insertAdjacentHTML("beforeend", member);
}

group_information_insertion();

function schedule_information_insertion(type) {
    const scheduleSection = document.querySelector("#carouselSchedule");
    const scheduleSectionPhone = document.querySelector("#schedule_phone .schedule_box");
    let workshop = ``;
    let endDiv = ``;
    switch(type) {
        case "desktop":
            workshop = `<div class="carousel-inner">`;
            endDiv = `</div></div>`;
            break;
        case "phone":
            endDiv = `</div>`;
            break;
    }
    for (const [key, value] of Object.entries(scheduleInfo)) {
        value.forEach((schedule, idx) => {
            let activeDiv = ``;
            if (type == "desktop") {
                activeDiv = (idx == 0 && key == "前置工作坊")  ? `<div class="carousel-item active">`: `<div class="carousel-item">`;
            }
            let content = `${activeDiv}
                            <div class="card_b">
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
            content += endDiv;
            workshop += content;
        })
    }
    if (type == "desktop") {
        workshop += `</div>`;
        scheduleSection.insertAdjacentHTML("afterbegin", workshop);
    } else {
        scheduleSectionPhone.insertAdjacentHTML("afterbegin", workshop);
    }
}
schedule_information_insertion("phone");
schedule_information_insertion("desktop");

const speakerInfo = [{
    "name": "梁容輝",
    "title": "臺科大設計系 | 副教授",
    "profile_picture": "./image/speaker/梁容輝老師.jpg",
    "speech_title": "物件召喚的可能世界與纏結美學",
    "speech_description": "資訊科技快速發展的今日，設計物將具備更高的智能，以及更高的自主性與能動性。上世紀模態邏輯學及文學領域中所發展的可能世界理論，將人類所認知的實在(reality)從現實世界(actual world)拓展到可能世界(possible world)。然而，以人類為中心所建構的可能世界，正在面臨新的挑戰：智慧型的物件，如何邀請人類進入非人類中心的可能世界並召喚纏結的經驗。"
},{
    "name": "陳彥仰",
    "title": "臺大資訊工程學系 / 資訊網路與多媒體研究所 | 教授",
    "profile_picture": "./image/speaker/profile_default_2.jpeg",
    "speech_title": "敬請期待",
    "speech_description": ""
},{
    "name": "何樵暐",
    "title": "Digital Medicine Lab | 負責人",
    "profile_picture": "./image/speaker/profile_default_2.jpeg",
    "speech_title": "敬請期待",
    "speech_description": ""
},{
    "name": "楊振甫",
    "title": "DreamVok / 5% design action | 執行長",
    "profile_picture": "./image/speaker/profile_default_2.jpeg",
    "speech_title": "敬請期待",
    "speech_description": ""
},{
    "name": "陳威帆",
    "title": "Fourdesire | 創辦人暨產品製作人",
    "profile_picture": "./image/speaker/profile_default_2.jpeg",
    "speech_title": "敬請期待",
    "speech_description": ""
}]

function speaker_information_insertion(type) {
    const speakerSection = document.querySelector("#carouselSpeaker");
    const speakerSectionPhone = document.querySelector("#Speaker_phone .schedule_box");
    let speakerContent = ``;
    let endDiv = ``;
    switch(type) {
        case "desktop":
            speakerContent = `<div class="carousel-inner">`;
            endDiv = `</div></div>`;
            break;
        case "phone":
            endDiv = `</div>`;
            break;
    }
    speakerInfo.forEach((speaker, idx) => {
        console.log(speaker)
        let activeDiv = "";
        if (type == "desktop") {
            activeDiv = idx == 0  ? `<div class="carousel-item active">`: `<div class="carousel-item">`;
        }
        let content = `${activeDiv}<div class="card_d">
                            <img class="card_d_img" src="${speaker.profile_picture}">
                            <p style="font-size: 24px;">${speaker.name}</p>
                            <p style="font-size: 14px;">${speaker.title}</p>
                            <span style="font-size: 14px;">演講主題</span>
                            <p style="font-size: 18px; color:#A9EEFD;">${speaker.speech_title}</p>
                            <p style="font-size: 14px;">${speaker.speech_description}</p>`;
        
        content += endDiv;
        console.log(content)
        speakerContent += content;
    })
    console.log(speakerContent);
    if (type == "desktop") {
        speakerSection.insertAdjacentHTML("afterbegin", speakerContent);
    } else {
        speakerSectionPhone.insertAdjacentHTML("afterbegin", speakerContent);
    }
}

speaker_information_insertion("phone");
speaker_information_insertion("desktop");