$(function () {

    // 메인메뉴 호버 이벤트(브랜드 스토리 완료 전까지 막아둠)
    // $('.topmenu a').hover(
    //     function () {
    //         $('.topmenu a').not(this).css('opacity', '60%')
    //     },
    //     function () {
    //         $('.topmenu a').css('opacity', '100%')
    //     }
    // );

    // 메인메뉴 스크롤 이벤트
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 0) {
            $('header').addClass('scroll');
        } else {
            $('header').removeClass('scroll');
        }
    });

    // 모바일 메뉴 + 오픈시 스크롤 방지
    $('.hamburger').on('click', function () {
        $('.topmenu').addClass('open');

        if ($('.topmenu').hasClass('open')) {
            $('body').addClass('noscroll');
        } else {
            $('body').removeClass('noscroll');
        }
    });

    $('.closeBtn').on('click', function () {
        $('.topmenu').removeClass('open');
        $('body').removeClass('noscroll');
    })


    // 리사이즈시 클레스 제거
    $(window).on('resize', function () {
        $('.topmenu').removeClass('open');
        $('body').removeClass('noscroll');
    });


    // 준비중 얼랏 창
    $('.menu_bs').on('click', function (e) {
        e.preventDefault();
    });

    // $('.menu_ex').on('click', function (e) {
    //     e.preventDefault();
    //     alert('준비중 입니다.');
    // });


    // 경험 페이지 완료 전까지 임시 메뉴 스크롤
    // $('.menu_ex').on('click', function (e) {
    //     e.preventDefault(); // 기본 a 태그 이동 막기
    //     const target = $($(this).attr('href')); // href 속성에서 id 가져오기

    //     if (target.length) {
    //         $('html, body').animate({
    //             scrollTop: target.offset().top
    //         }, 300); // 600ms 동안 스무스하게 이동
    //     }

    //     if ($(window).width() <= 1240) {
    //         $('.topmenu').removeClass('open');
    //         $('body').removeClass('noscroll'); // 스크롤 잠금 풀어주기 (있으면)
    //     }
    // });

    // 탑 버튼
    $('.topbutton').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 500);
    });


    // experience 페이지 탭메뉴
    // $('.web_menu, .pr_3d_menu, .visual_menu').on('click', function (e) {
    //     e.preventDefault(); // 기본 a 태그 이동 막기
    //     const target = $($(this).attr('href')); // href 속성에서 id 가져오기

    //     if (target.length) {
    //         $('html, body').stop().animate({
    //             scrollTop: target.offset().top
    //         }, 300); // 600ms 동안 부드럽게 스크롤
    //     }
    // });


    // 탭메뉴 이벤트
    // $('.tab_menu a').hover(
    //     function () {
    //         $('.tab_menu a').not(this).css('color', '#99999A')
    //     },
    //     function () {
    //         $('.tab_menu a').css('color', '#1d1d1f')
    //     }
    // );


});