var page_name = $('#page_name').val();
var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
var screen_height = document.body.clientHeight;
if (page_name == 'home') {
    var comment_left_top = $('.box-wrap .home-img-box1 .img2').offset().top;
    var comment_right_top = $('.box-wrap .home-img-box1 .img3').offset().top;
    var internet_top = $('.box-wrap .home-img-box3 .img1').offset().top;
    var testi_top = $('#sec_testi').offset().top;
    var ball_top = $('.box-wrap .home-com-box2 .ball-container').offset().top;
    var ball_mobile_top = $('.box-wrap .home-img-box2 .ball-container').offset().top
}
var ball_x_scale = 0;
var ball_rotate_scale = 0;
var testi_y_scale = 141;
var internet_scale = 0.4;
var comment_x_scale = 20;
var comment_y_scale = 100;
var comment_rotate_scale = -45;
var comment_opacity_scale = 0;
var x_scale = -20;
var y_scale = 100;
var rotate_scale = 45;
var opacity_scale = 0;
var cur_offset = 0;
var map_position = [{
    "top": 138,
    "left": 273
}, {
    "top": 188,
    "left": 540
}, {
    "top": 240,
    "left": 399
}, {
    "top": 302,
    "left": 298
}, {
    "top": 317,
    "left": 435
}, {
    "top": 372,
    "left": 399
}, {
    "top": 387,
    "left": 450
}];

function scrollFunction() {
    console.log('a');
    if (width >= 768) {
        if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
            document.getElementById("navbar").style.top = "0"
        } else {
            document.getElementById("navbar").style.top = "-70px"
        }
    }
    if (page_name == 'home') {
        if ((document.body.scrollTop > (comment_left_top - (screen_height / 4 * 3))) && (document.body.scrollTop < (comment_left_top - screen_height / 4 * 3 + 200))) {
            cur_offset = (document.body.scrollTop - (comment_left_top - screen_height / 4 * 3)) / 200;
            x_scale = (-1) * (20 - cur_offset * 20);
            y_scale = 100 - cur_offset * 100;
            rotate_scale = 45 - cur_offset * 45;
            opacity_scale = cur_offset;
            $('.box-wrap .home-img-box1 .img2').css('opacity', opacity_scale);
            $('.box-wrap .home-img-box1 .img2').css('transform', 'translate\(' + x_scale + 'px\,' + y_scale + 'px\) rotate\(' + rotate_scale + 'deg\)');
            comment_x_scale = 20 - (cur_offset * 20);
            comment_y_scale = 100 - cur_offset * 100;
            comment_rotate_scale = cur_offset * 45 - 45;
            comment_opacity_scale = cur_offset;
            $('.box-wrap .home-img-box1 .img3').css('opacity', comment_opacity_scale);
            $('.box-wrap .home-img-box1 .img3').css('transform', 'translate\(' + comment_x_scale + 'px\,' + comment_y_scale + 'px\) rotate\(' + comment_rotate_scale + 'deg\)')
        }
        if ((document.body.scrollTop > (ball_top - (screen_height / 2))) && (document.body.scrollTop < (ball_top - screen_height / 2 + 200))) {
            cur_offset = (document.body.scrollTop - (ball_top - screen_height / 2)) / 200;
            ball_x_scale = -146 * cur_offset;
            ball_rotate_scale = -390 * cur_offset;
            $('.box-wrap .home-com-box2 .round-ball').css('transform', 'translateX\(' + ball_x_scale + 'px\) rotate\(' + ball_rotate_scale + 'deg\)');
            $('.box-wrap .home-com-box2 .backdrop-ball').css('transform', 'translateX\(' + ball_x_scale + 'px\)')
        }
        if ((document.body.scrollTop > (ball_mobile_top - (screen_height / 2))) && (document.body.scrollTop < (ball_mobile_top - screen_height / 2 + 200))) {
            cur_offset = (document.body.scrollTop - (ball_mobile_top - screen_height / 2)) / 200;
            ball_x_scale = -120 * cur_offset;
            ball_rotate_scale = -390 * cur_offset;
            $('.box-wrap .home-img-box2 .round-ball').css('transform', 'translateX\(' + ball_x_scale + 'px\) rotate\(' + ball_rotate_scale + 'deg\)');
            $('.box-wrap .home-img-box2 .backdrop-ball').css('transform', 'translateX\(' + ball_x_scale + 'px\)')
        }
        if ((document.body.scrollTop > (internet_top - (screen_height / 2))) && (document.body.scrollTop < (internet_top - screen_height / 2 + 200))) {
            cur_offset = (document.body.scrollTop - (internet_top - screen_height / 2)) / 200;
            internet_scale = cur_offset * 0.6 + 0.4;
            $('.box-wrap .home-img-box3 .img1').css('transform', 'scale\(' + internet_scale + '\,' + internet_scale + '\)')
        }
        if ((document.body.scrollTop > (testi_top - screen_height)) && (document.body.scrollTop < (testi_top - screen_height + screen_height / 10 * 8))) {
            cur_offset = (document.body.scrollTop - (testi_top - screen_height)) / (screen_height / 10 * 8);
            testi_y_scale = 141 - cur_offset * 141;
            console.log(testi_y_scale);
            $('#sec_testi .left_testi_wrap').css('transform', 'translateY\(' + testi_y_scale + 'px\)');
            $('#sec_testi .home-map-wrap').css('transform', 'translateY\(' + (-1) * testi_y_scale + 'px\)')
        }
    }
}
window.onscroll = function() {
    scrollFunction()
};
var mobilemenuSt = !1;
$('#toggle_btn').click(function() {
    if (mobilemenuSt === !1) {
        $('header').css('position', 'relative');
        $('#toggle_btn img').attr('src', 'Resource/Img/muti-ico.png')
    } else {
        setTimeout(function() {
            $('#toggle_btn img').attr('src', 'Resource/Img/sandwich.png');
            $('header').css('position', 'absolute')
        }, 220)
    }
    mobilemenuSt = !mobilemenuSt
});
$('.login-btn').click(function() {
    $('.login_modal').modal({
        backdrop: 'static',
        keyboard: !1
    })
});
$('.login_modal_link').click(function() {
    $('.register_modal .close').click();
    setTimeout(function() {
        $('.login_modal').modal();
        setTimeout(function(){var top = (document.body.clientHeight - $('.login_modal').find('.modal-dialog').height())/2-25;
        $('.login_modal .modal-dialog').css('top',top);},200);
    }, 500);
});
$('.signup_modal_link').click(function() {
    $('.login_modal .close').click();
    setTimeout(function() {
        $('.register_modal').modal()
        setTimeout(function(){var top = (document.body.clientHeight - $('.register_modal').find('.modal-dialog').height())/2-25;
        $('.register_modal .modal-dialog').css('top',top);},200);
    }, 500);
});
$(document).ready(function() {
    $('#testi_div').on('slide.bs.carousel', function() {
        var old_id = $(this).find('.carousel-item.active').attr("alt");
        var count = $(this).find('.carousel-item').length;
        var window_width = $(document).width();
        var new_top = 0,
            new_left = 0;
        if (old_id == 2) {
            new_top = map_position[4].top;
            new_left = map_position[4].left;
            if (window_width < 1280 && window_width >= 768) {
                new_left = new_left + 144
            } else if (window_width < 768 && window_width >= 320) {
                new_left = new_left - 209;
                new_top = new_top + 237
            }
            $('#sec_testi .home-map-wrap .yellow_dot').css("top", new_top);
            $('#sec_testi .home-map-wrap .yellow_dot').css("left", new_left)
        } else if (old_id == 4) {
            new_top = map_position[2].top;
            new_left = map_position[2].left;
            if (window_width < 1280 && window_width >= 768) {
                new_left = new_left + 144
            } else if (window_width < 768 && window_width >= 320) {
                new_left = new_left - 202;
                new_top = new_top + 234
            }
            $('#sec_testi .home-map-wrap .yellow_dot').css("top", new_top);
            $('#sec_testi .home-map-wrap .yellow_dot').css("left", new_left)
        }
    });
    (function($) {
        var elActive = '';
        $.fn.selectCF = function(options) {
            var settings = $.extend({
                color: "#424242",
                backgroundColor: "transparent",
                change: function() {},
            }, options);
            return this.each(function() {
                var selectParent = $(this);
                list = [], html = '';
                $(selectParent).hide();
                if ($(selectParent).children('option').length == 0) {
                    return
                }
                $(selectParent).children('option').each(function() {
                    if ($(this).is(':selected')) {
                        s = 1;
                        title = $(this).text()
                    } else {
                        s = 0
                    }
                    list.push({
                        value: $(this).attr('value'),
                        text: $(this).text(),
                        selected: s,
                    })
                })
                var style = " background: " + settings.backgroundColor + "; color: " + settings.color + " ";
                html += "<ul class='selectCF'>";
                html += "<li>";
                html += "<span class='titleCF' style='" + style + ";'>" + title + "</span>";
                html += "<ul>";
                $.each(list, function(k, v) {
                    s = (v.selected == 1) ? "selected" : "";
                    html += "<li value=" + v.value + " class='" + s + "'>" + v.text + "</li>"
                })
                html += "</ul>";
                html += "</li>";
                html += "</ul>";
                $(selectParent).after(html);
                var customSelect = $(this).next('ul.selectCF');
                $(customSelect).unbind('click').bind('click', function(e) {
                    e.stopPropagation();
                    if ($(this).parent('.select_box_container').hasClass('onCF')) {
                        elActive = '';
                        $(this).parent('.select_box_container').removeClass('onCF')
                    } else {
                        if (elActive != '') {
                            $(elActive).parent('.select_box_container').removeClass('onCF')
                        }
                        elActive = $(this);
                        $(this).parent('.select_box_container').addClass('onCF')
                    }
                })
                var optionSelect = $(customSelect).children('li').children('ul').children('li');
                $(optionSelect).bind('click', function(e) {
                    var value = $(this).attr('value');
                    if ($(this).hasClass('selected')) {} else {
                        $(optionSelect).removeClass('selected');
                        $(this).addClass('selected');
                        $(customSelect).children('li').children('.titleCF').html($(this).html());
                        $(selectParent).val(value);
                        settings.change.call(selectParent)
                    }
                })
            })
        };
        $(document).click(function() {
            if (elActive != '') {
                $(elActive).parent('.select_box_container').removeClass('onCF')
            }
        })
    }(jQuery));
    $(function() {
      /**
      * SET CUSTOM DROPDOWN
      */
        $(".price_select_box").selectCF();
        $(".language_select_box").selectCF();
      /**
      * ACCORDION FOR PRICE PAGE
      */
        $('.price_question_ac_title').click(function() {
            if ($(this).parent().find('.price_question_ac_desc').css('display') == 'none') {
                $(this).parent().parent().find('.price_question_accordion_grey').each(function(e) {
                    $(this).find('.price_question_ac_title').click()
                });
                $(this).parent().removeClass('price_question_accordion_border');
                $(this).parent().addClass('price_question_accordion_grey');
                $(this).parent().find('.price_question_ac_desc').slideDown(500);
                $(this).parent().find('.price_ac_top img').css('-webkit-transform', 'unset');
                $(this).parent().find('.price_ac_top img').css('-moz-transform', 'unset');
                $(this).parent().find('.price_ac_top img').css('-o-transform', 'unset');
                $(this).parent().find('.price_ac_top img').css('-ms-transform', 'unset');
                $(this).parent().find('.price_ac_top img').css('transform', 'unset')
            } else {
                $(this).parent().removeClass('price_question_accordion_grey');
                if ($(this).parent().is(':last-child')) {
                    $(this).parent().addClass('price_question_accordion')
                } else {
                    $(this).parent().addClass('price_question_accordion_border')
                }
                $(this).parent().find('.price_question_ac_desc').slideUp(500);
                $(this).parent().find('.price_ac_top img').css('-webkit-transform', 'rotate(180deg)');
                $(this).parent().find('.price_ac_top img').css('-moz-transform', 'rotate(180deg)');
                $(this).parent().find('.price_ac_top img').css('-o-transform', 'rotate(180deg)');
                $(this).parent().find('.price_ac_top img').css('-ms-transform', 'rotate(180deg)');
                $(this).parent().find('.price_ac_top img').css('transform', 'rotate(180deg)')
            }
        });
      /**
      * EMAIL SUBMIT FORM FOR PRICE PAGE
      */
        $('#price_enter_form button').click(function() {
            $('#price_enter_form').hide();
            $('.about_mail_success').fadeIn(500)
        })
      /**
      * PASSWORD VIEW BUTTON
      */
        $('.signup_modal .pass_input p').mousedown(function(){
            $(this).addClass('show');
            $(this).parent().find('input').attr('type','text');
        });
        $('.signup_modal').mouseup(function(){
            $('.signup_modal .pass_input p').removeClass('show');
            $('.signup_modal .pass_input p').parent().find('input').attr('type','password');
        });
      
      /**
      * FORM SUBMIT VALIDATION
      */
       $('#register_form').submit(function(event){
          event.preventDefault();
          $(this).find('input').each(function(){
            if($(this).val() === '')
              {
                $(this).parent('.form-group').addClass('error_input');
                $(this).parent('.form-group').find('.error_msg').html('Field Required');
                $(this).focus();
                if($(this).attr('id') == 'signup_pass')
                  {
                    $(this).parent().parent('.form-group').addClass('error_input');
                    $(this).parent().parent('.form-group').find('.error_msg').html('Field Required');
                    $(this).focus();
                  }
              }
          }); 
       });
      
       $('#login_form').submit(function(event){
         event.preventDefault();
         if($('#login_email').val()==='')
           {
              $('#login_email').parent('.form-group').addClass('error_input');
              $('#login_email').parent('.form-group').find('.error_msg').html('Field Required');
              $('#login_email').focus();
           }
         if($('#login_pass').val() ==='')
           {
              $('#login_pass').parent().parent('.form-group').addClass('error_input');
              $('#login_pass').parent().parent('.form-group').find('.error_msg').html('Field Required');
              $('#login_pass').focus();
           }
       })
      
      /**
      * login form
      */
      $('.login-btn').click(function(){
        $('.login_modal').modal();
        setTimeout(function(){var top = (document.body.clientHeight - $('.login_modal').find('.modal-dialog').height())/2-25;
        $('.login_modal .modal-dialog').css('top',top);},200);
      });
      
      /**
      * enterprise modal
      */
      $('.price_enterprise_box').find('button').click(function(){
        $('.price_contact_modal').modal();
        setTimeout(function(){var top = (document.body.clientHeight - $('.price_contact_modal').find('.modal-dialog').height())/2-25;
        $('.price_contact_modal .modal-dialog').css('top',top);},200);
      });
    })
})