$(document).ready(function(){
        // page02
        $(".controlbtn").on('click',function(){
            $('.controlbtn').css({'color':'#fff'}).css('background-color','#858585').css('border-bottom','solid 5px #a740f3');
            $('.playbtn').css({'color':'#000'}).css('background-color','#ffffff00').css('border-bottom','solid 5px #61ff62');
            $('.control').css({'opacity':'1'}).css({'z-index':'5'});
            $('.play').css({'opacity':'0'}).css({'z-index':'0'});
        });
        $(".playbtn").on('click',function(){
            $('.playbtn').css({'color':'#fff'}).css('background-color','#858585').css('border-bottom','solid 5px #a740f3');
            $('.controlbtn').css({'color':'#000'}).css('background-color','#ffffff00').css('border-bottom','solid 5px #61ff62');
            $('.control').css({'opacity':'0'}).css({'z-index':'0'});
            $('.play').css({'opacity':'1'}).css({'z-index':'5'});
        });

        // page03
        $(".hideimg").on('mouseover',function(){
            $(".hideimg").css({'opacity':'0'}).css({'transition':'0.8s'}).css({'cursor':'pointer'});
        });
        $(".hideimg").on('mouseleave',function(){
            $(".hideimg").css({'opacity':'1'}).css({'transition':'0.8s'});
        });
        $(".hideimg").on('click',function(){
            $(this).css('display','none');
            $(".hideinfo").css('opacity','1').css('transition','0.4s');
        });

        // page04
        $(".what1").on('click',function(){
            $(".eventcon1").css('opacity','1').css('transition','0.4s');
            $(this).css('display','none').css('visibility','hidden');
            $("#event1").css('background-color','#ff6569').css('transition','0.4s');
        })
        $(".what2").on('click',function(){
            $(".eventcon2").css('opacity','1').css('transition','0.4s');
            $(this).css('display','none').css('visibility','hidden');
            $("#event2").css('background-color','#6dedff').css('transition','0.4s');

        })
        $(".what3").on('click',function(){
            $(".eventcon3").css('opacity','1').css('transition','0.4s');
            $(this).css('display','none').css('visibility','hidden');
            $("#event3").css('background-color','#49ff5a').css('transition','0.4s');

        })
        $(".what4").on('click',function(){
            $(".eventcon4").css('opacity','1').css('transition','0.4s');
            $(this).css('display','none').css('visibility','hidden');
            $("#event4").css('background-color','#cb2dff').css('transition','0.4s');

        })

})

