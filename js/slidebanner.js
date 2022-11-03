$(document).ready(function () {
    //초기값 선언
    var current = 0;
    var i = 0; //자동실행을 위한 초기값
    var setIntervalid; //마우스를 올리면 자동 실행을 멈추기 위한 초기값
    
    $('#main_img').hover(
        function() {
            clearInterval(setIntervalid);
        },
        function() {
            timer();
        });

    timer();
    function timer() {
        setIntervalid = setInterval(function () {
            
            i = i + 1;
            if (i == 5) {  //최대값이 되었을 때 최소값으로 이동을 제어
                i = 0
            }
            $('.btns > li').removeClass('on');
            $('.btns > li').eq(i).addClass('on');
            move(i); 
        }, 3000);

        $('.btns > li').removeClass('on');
        $('.btns > li').eq(i).addClass('on');
    }


    $('.next').click(function () {
        i = i + 1;
        if (i == 5) {  //최대값이 되었을 때 최소값으로 이동을 제어
            i = 0;
        }
        move(i);
        $('.btns > li').removeClass('on');
        $('.btns > li').eq(i).addClass('on');
    });
    
    $('.prev').click(function () {
        i = i + 1;
        if (i == 3) {  //최소값이 되었을 때 최대값으로 이동을 제어
            i = 0;
        }
        move2(i);
        $('.btns > li').removeClass('on');
        $('.btns > li').eq(i).addClass('on');
    });


    function move(n) {
        if (current == n) return;
        // 현재 보이는 슬라이드와 클릭한 버튼의 인덱스 값이 같다면 이 다음 코딩은 수행하지 않고 나감

        var currentEl = $('.fade > div').eq(current); 
        var nextEl = $('.fade > div').eq(n); 

        // currentEl.stop().css({ opacity : 0 }).animate({ opacity : 1 });
        // nextEl.stop().css({ opacity : 1 }).animate({ opacity : 0 });
        currentEl.stop().css({ left: '0%' }).animate({ left: '-100%' });
        nextEl.stop().css({ left: '100%' }).animate({ left: '0%' });

        current = n;
    }

    function move2(n) {
        if (current == n) return;
        // 현재 보이는 슬라이드와 클릭한 버튼의 인덱스 값이 같다면 이 다음 코딩은 수행하지 않고 나감

        var currentEl = $('.fade > div').eq(current); 
        var nextEl = $('.fade > div').eq(n); 

        // currentEl.stop().css({ opacity : 1 }).animate({ opacity : 0 });
        // nextEl.stop().css({ opacity : 0 }).animate({ opacity : 1 });
        currentEl.stop().css({ left: '0%' }).animate({ left: '100%' });
        nextEl.stop().css({ left: '-100%' }).animate({ left: '0%' });

        current = n;
    }
});