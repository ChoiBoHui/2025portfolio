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









    // 3d_pi 퍼스널 아이덴티티 메인 비주얼 영상
    const pivideo = $('.pivideo').get(0);

    // 영상 재생 시작 → 버튼은 pause 아이콘
    $(pivideo).on('play', function () {
        $('.ppbtn>img').attr('src', './img/pauseBtn.svg');
        $('.view_video').removeClass('paused');
    });

    // 영상 정지 → 버튼은 play 아이콘
    $(pivideo).on('pause ended', function () {
        $('.ppbtn>img').attr('src', './img/playBtn.svg');
        $('.view_video').addClass('paused');
    });

    // 영상 종료 → 처음으로 되돌리고, 버튼은 play 아이콘
    $(pivideo).on('ended', function () {
        pivideo.currentTime = 0;
        // $('.ppbtn>img').attr('src', './img/playBtn.svg');
        // $('.video-wrap').addClass('paused');
    });

    // 버튼 클릭 시 재생/정지 토글
    $('.ppbtn').on('click', function () {
        if (pivideo.paused) {
            pivideo.play();
        } else {
            pivideo.pause();
        }
    });



    // 대하 레이아웃 영상
    const dhvideo = $('.dh_video').get(0);

    // 영상 재생 시작 → 버튼은 pause 아이콘
    $(dhvideo).on('play', function () {
        $('.dhppbtn>img').attr('src', './img/pauseBtn.svg');
        $('.dh_layout_video').removeClass('paused');
    });

    // 영상 정지 → 버튼은 play 아이콘
    $(dhvideo).on('pause ended', function () {
        $('.dhppbtn>img').attr('src', './img/playBtn.svg');
        $('.dh_layout_video').addClass('paused');
    });

    // 영상 종료 → 처음으로 되돌리고, 버튼은 play 아이콘
    $(dhvideo).on('ended', function () {
        dhvideo.currentTime = 0;
    });

    // 버튼 클릭 시 재생/정지 토글
    $('.dhppbtn').on('click', function () {
        if (dhvideo.paused) {
            dhvideo.play();
        } else {
            dhvideo.pause();
        }
    });















});