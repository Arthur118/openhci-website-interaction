function click_card_open() {
    document.getElementById('card_a_content').style.display='block';
    document.getElementById('card_a_btn_close').style.display='block';
    document.getElementById('card_a_btn_open').style.display='none';
    document.getElementById('card_a_title').style.color='#56FAFB';
}

function click_card_close() {
    document.getElementById('card_a_content').style.display='none';
    document.getElementById('card_a_btn_close').style.display='none';
    document.getElementById('card_a_btn_open').style.display='block';
    document.getElementById('card_a_title').style.color='#fff';
}