$(function () {

    // 메인메뉴 호버 이벤트
    $('.topmenu a').hover(
        function () {
            $('.topmenu a').not(this).css('opacity', '60%')
        },
        function () {
            $('.topmenu a').css('opacity', '100%')
        }
    );

    // 메인메뉴 스크롤 이벤트
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 0) {
            $('header').addClass('scroll');
            $('.logo img').attr('src', './img/PI.svg');
            $('.hamburger img').attr('src', './img/mmenu.svg');
        } else {
            $('header').removeClass('scroll');
            $('.logo img').attr('src', './img/PI-w.svg');
            $('.hamburger img').attr('src', './img/mmenu-w.svg');
        }
    });

    // 모바일 메뉴
    $('.hamburger').on('click', function () {
        $('.topmenu').toggleClass('open');
    });


    // 리사이즈시 클레스 제거
    $(window).on('resize', function () {
        $('.topmenu').removeClass('open');
    });


    // 준비중 얼랏 창
    $('.menu_bs').on('click', function (e) {
        e.preventDefault();
        alert('준비중 입니다.');
    });

    $('.menu_ex').on('click', function (e) {
        e.preventDefault();
        alert('준비중 입니다.');
    });

    // 탑 버튼
    $('.topbutton').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 500);
    });



});