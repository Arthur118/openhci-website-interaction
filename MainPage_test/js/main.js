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

<<<<<<< Updated upstream
$('.panel-collapse').on('show.bs.collapse', function () {
    console.log("close");
})
=======
function group_information_insertion() {
    const groupSection = document.querySelector("#Group .box");
    let member = ``;
    for (const [key, value] of Object.entries(groupInfo)) {
        let content = `<div class="card_a">
                    <div class="card_a_close">
                        <card-title id="card_a_title"><t-16>${key}<t-16></card-title>
                        <i class="fa-solid fa-chevron-down" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse_${key}" aria-expanded="true" aria-controls="collapse_${key}"></i>
                    </div>
                    <div id="collapse_${key}" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne" style="width: 100%;">
                        <div class="row group_member">`;
        value.forEach((person) => {
            content += `<div class="col-10 col-md-4 group_member_block">
                            <p><b style="font-size: 14px;">${person.name}</b></p>
                            <p style="font-size: 12px;">${person.school}<br>${person.department}</p>
                            </div>`
        })
        content += `</div></div></div>`
        member += content;
    }
    groupSection.insertAdjacentHTML("beforeend", member);
}
>>>>>>> Stashed changes

// $('.panel-collapse').on('show.bs.collapse', function () {
//     $(this).siblings('.card_a_close').addClass('active');
//     console.log("open");
// });

<<<<<<< Updated upstream
// $('.panel-collapse').on('hide.bs.collapse', function () {
//     $(this).siblings('.card_a_close').removeClass('active');
//     console.log("hide");
// });
=======
function schedule_information_insertion() {
    const scheduleSection = document.querySelector("#carouselSchedule");
    let workshop = `<div class="carousel-inner">`;
    for (const [key, value] of Object.entries(scheduleInfo)) {
        value.forEach((schedule, idx) => {
            let activeDiv = (idx == 0 && key == "前置工作坊")  ? `<div class="carousel-item active">`: `<div class="carousel-item">`;
            let content = `${activeDiv}
                            <div class="card_b">
                                <card-title>
                                    <t-20>${key}</t-20>
                                    <br>
                                    <t-16><blue-text> Day${idx+1} </blue-text></t-16>
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
            content += `</div></div>`;
            workshop += content;
        })
    }
    workshop += `</div>`;
    scheduleSection.insertAdjacentHTML("afterbegin", workshop);
}
schedule_information_insertion();
>>>>>>> Stashed changes
