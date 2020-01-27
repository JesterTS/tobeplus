$(document).ready(function () {

});

function historyTabs(idBl, th, idSection) {
    $('#content_th_' + idSection + ' .tab_history a').removeClass('active');
    $(th).addClass('active');
    $('#content_th_' + idSection + ' .text_history').hide();
    $('#content_his_' + idBl).show();
}
function historyTabs2(idBl, th) {
    $('.tab_block_product a').removeClass('active');
    $(th).addClass('active');
    $('.tabDesck').hide();
    $('#ct_' + idBl).show();
}

function prevYear() {
    var widthWindow = $(window).width();
    if (widthWindow < 996) {
        var heightYear = $('.item_selecter.next_year').width();
        var numYear = parseInt($('.next_year').attr('data-blockS'));
        var numYearPrev = parseInt($('.prev_year').attr('data-blockS'));
        var lastYear = parseInt($('.active').attr('data-blockS'));
        var translateIndex = numYearPrev * heightYear;
        if (lastYear === 1) {
            numYearPrev = 6;
            var translateIndex2 = numYearPrev * heightYear;
            $('.data_year_' + numYearPrev).addClass('prev_year');
            $('.content_year').css('transform', 'translate( -' + translateIndex2 + 'px, 0px)');
        }
        $('.item_selecter').removeClass('active');
        $('.prev_year').addClass('active');
        $('.data_year_' + numYearPrev).removeClass('prev_year');
        $('.data_year_' + numYear).removeClass('next_year');
        $('.content_tabs_history').hide();
        $('.content_tabs_history').removeClass('opacityRim');

        $('#content_th_' + numYearPrev).addClass('opacityRim');


        if (numYear === 1) {
            numYear = 6;
        } else {

            numYear = numYear - 1;
        }

        if (numYearPrev === 1) {

            numYearPrev = 6;
        } else {

            numYearPrev--;
        }

        $('.data_year_' + numYear).addClass('next_year');
        $('.data_year_' + numYearPrev).addClass('prev_year');
        $('.content_year').css('transform', 'translate( -' + translateIndex + 'px, 0px)');
    } else {
        var heightYear = $('.item_selecter.next_year').height();
        var numYear = parseInt($('.next_year').attr('data-blockS'));
        var numYearPrev = parseInt($('.prev_year').attr('data-blockS'));
        var lastYear = parseInt($('.active').attr('data-blockS'));
        var translateIndex = numYearPrev * heightYear;
        if (lastYear === 1) {
            numYearPrev = 6;
            var translateIndex2 = numYearPrev * heightYear;
            $('.data_year_' + numYearPrev).addClass('prev_year');
            $('.content_year').css('transform', 'translate( 0px, -' + translateIndex2 + 'px)');
        }
        $('.item_selecter').removeClass('active');
        $('.prev_year').addClass('active');
        $('.data_year_' + numYearPrev).removeClass('prev_year');
        $('.data_year_' + numYear).removeClass('next_year');
        $('.content_tabs_history').hide();
        $('.content_tabs_history').removeClass('opacityRim');

        $('#content_th_' + numYearPrev).addClass('opacityRim');

        if (numYear === 1) {
            numYear = 6;
        } else {

            numYear = numYear - 1;
        }

        if (numYearPrev) {
            numYearPrev--;

        } else {
            numYearPrev = 6;
        }

        $('.data_year_' + numYear).addClass('next_year');
        $('.data_year_' + numYearPrev).addClass('prev_year');
        $('.content_year').css('transform', 'translate( 0px, -' + translateIndex + 'px)');
    }

}

function nextYear() {
    var widthWindow = $(window).width();
    if (widthWindow < 996) {
        var heightYear = $('.item_selecter.next_year').width();
        var numYear = parseInt($('.next_year').attr('data-blockS'));
        var numYearPrev = parseInt($('.prev_year').attr('data-blockS'));
        var lastYear = parseInt($('.active').attr('data-blockS'));
        var translateIndex = numYear * heightYear;

        if (lastYear === 6) {
            numYear = 1;
            $('.data_year_' + numYear).addClass('next_year');
            $('.content_year').css('transform', 'translate( 0, 0px)');

        }
        $('.item_selecter').removeClass('active');
        $('.next_year').addClass('active');
        $('.data_year_' + numYearPrev).removeClass('prev_year');
        $('.data_year_' + numYear).removeClass('next_year');
        $('.content_tabs_history').hide();
        $('.content_tabs_history').removeClass('opacityRim');

        $('#content_th_' + numYear).addClass('opacityRim');



        if (numYear === 6) {
            numYear = 1;
        } else {
            numYear++;
        }

        if (numYearPrev) {
            numYearPrev++;
        } else {
            numYearPrev = 1;
        }


        $('.data_year_' + numYear).addClass('next_year');
        $('.data_year_' + numYearPrev).addClass('prev_year');
        $('.content_year').css('transform', 'translate(  -' + translateIndex + 'px, 0px)');
    } else {


        var heightYear = $('.item_selecter.next_year').height();
        var numYear = $('.next_year').attr('data-blockS');
        var numYearPrev = $('.prev_year').attr('data-blockS');
        var lastYear = $('.active').attr('data-blockS');
        var translateIndex = numYear * heightYear;
        if (lastYear === '6') {
            numYear = 1;
            $('.data_year_' + numYear).addClass('next_year');
            $('.content_year').css('transform', 'translate( 0px, -70px)');

        }
        $('.item_selecter').removeClass('active');
        $('.next_year').addClass('active');
        $('.data_year_' + numYearPrev).removeClass('prev_year');
        $('.data_year_' + numYear).removeClass('next_year');
       $('.content_tabs_history').hide();
        $('.content_tabs_history').removeClass('opacityRim');

        $('#content_th_' + numYear).addClass('opacityRim');

        if (numYear === '6') {
            numYear = 1;
        } else {
            numYear++;
        }



        if (numYearPrev) {
            numYearPrev++;
        } else {
            numYearPrev = 1;
        }


        $('.data_year_' + numYear).addClass('next_year');
        $('.data_year_' + numYearPrev).addClass('prev_year');
        $('.content_year').css('transform', 'translate( 0px, -' + translateIndex + 'px)');
    }
}