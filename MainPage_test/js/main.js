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