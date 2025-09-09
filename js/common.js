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
        } else {
            $('header').removeClass('scroll');
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









    // 아래는 이전에 작업했던거 참고용!!



    // 메인메뉴 클릭 이벤트
    $('.nav .mainMenu').on('click', function () {
        let li = $(this).closest('li');
        let subMenu = $(this).siblings('.subMenu');

        // mainMenu 적용
        $(this).addClass('open');
        li.siblings().find('.mainMenu').removeClass('open');

        // subMenu 적용
        subMenu.addClass('view');
        li.siblings().find('.subMenu').removeClass('view');
    });

    // 서브메뉴 클릭 이벤트
    $('.nav .subMenu .subMenuList li a').on('click', function () {
        // let li = $(this).closest('li');
        $('html, body').scrollTop(0);

        $('.nav .subMenu .subMenuList li').removeClass('view');
        $(this).closest('li').addClass('view');
    });

    // 네비게이션 fix, 모바일 메뉴
    $('.triggerBtn').on('click', function () {
        $(this).toggleClass('fix');
        $('header').toggleClass('fix');
        $('footer').toggleClass('fix');
        $('.mainMenu').removeClass('open');
        $('.subMenu').removeClass('open');

        let mopen = $('.mopen')
        if ($(this).hasClass('fix')) {
            mopen.html("close");
        } else (
            mopen.html("menu")
        );

        // 메뉴 닫을때 보이는 서브메뉴 복귀
        $('.subMenu').removeClass('view');
        $('.subMenuList li.view').closest('.subMenu').addClass('view');
    });



});