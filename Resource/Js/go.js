(function($) {
    var selectors = [];
    var check_binded = !1;
    var check_lock = !1;
    var defaults = {
        interval: 250,
        force_process: !1
    }
    var $window = $(window);
    var $prior_appeared;

    function process() {
        check_lock = !1;
        for (var index = 0; index < selectors.length; index++) {
            var $appeared = $(selectors[index]).filter(function() {
                return $(this).is(':appeared')
            });
            $appeared.trigger('appear', [$appeared]);
            if ($prior_appeared) {
                var $disappeared = $prior_appeared.not($appeared);
                $disappeared.trigger('disappear', [$disappeared])
            }
            $prior_appeared = $appeared
        }
    }
    $.expr[':'].appeared = function(element) {
        var $element = $(element);
        if (!$element.is(':visible')) {
            return !1
        }
        var window_left = $window.scrollLeft();
        var window_top = $window.scrollTop();
        var offset = $element.offset();
        var left = offset.left;
        var top = offset.top;
        var windowsheight = document.body.clientHeight;
        if (top + $element.height() >= window_top && top <= window_top + windowsheight) {
            return !0
        } else {
            return !1
        }
    }
    $.fn.extend({
        appear: function(options) {
            var opts = $.extend({}, defaults, options || {});
            var selector = this.selector || this;
            if (!check_binded) {
                var on_check = function() {
                    if (check_lock) {
                        return
                    }
                    check_lock = !0;
                    setTimeout(process, opts.interval)
                };
                $(window).scroll(on_check).resize(on_check);
                check_binded = !0
            }
            if (opts.force_process) {
                setTimeout(process, opts.interval)
            }
            selectors.push(selector);
            return $(selector)
        }
    });
    $.extend({
        force_appear: function() {
            if (check_binded) {
                process();
                return !0
            };
            return !1
        }
    })
})(jQuery);
(function($) {
    '$:nomunge';
    var cache = {},
        doTimeout = 'doTimeout',
        aps = Array.prototype.slice;
    $[doTimeout] = function() {
        return p_doTimeout.apply(window, [0].concat(aps.call(arguments)))
    };
    $.fn[doTimeout] = function() {
        var args = aps.call(arguments),
            result = p_doTimeout.apply(this, [doTimeout + args[0]].concat(args));
        return typeof args[0] === 'number' || typeof args[1] === 'number' ? this : result
    };

    function p_doTimeout(jquery_data_key) {
        var that = this,
            elem, data = {},
            method_base = jquery_data_key ? $.fn : $,
            args = arguments,
            slice_args = 4,
            id = args[1],
            delay = args[2],
            callback = args[3];
        if (typeof id !== 'string') {
            slice_args--;
            id = jquery_data_key = 0;
            delay = args[1];
            callback = args[2]
        }
        if (jquery_data_key) {
            elem = that.eq(0);
            elem.data(jquery_data_key, data = elem.data(jquery_data_key) || {})
        } else if (id) {
            data = cache[id] || (cache[id] = {})
        }
        data.id && clearTimeout(data.id);
        delete data.id;

        function cleanup() {
            if (jquery_data_key) {
                elem.removeData(jquery_data_key)
            } else if (id) {
                delete cache[id]
            }
        };

        function actually_setTimeout() {
            data.id = setTimeout(function() {
                data.fn()
            }, delay)
        };
        if (callback) {
            data.fn = function(no_polling_loop) {
                if (typeof callback === 'string') {
                    callback = method_base[callback]
                }
                callback.apply(that, aps.call(args, slice_args)) === !0 && !no_polling_loop ? actually_setTimeout() : cleanup()
            };
            actually_setTimeout()
        } else if (data.fn) {
            delay === undefined ? cleanup() : data.fn(delay === !1);
            return !0
        } else {
            cleanup()
        }
    }
})(jQuery);
$('.animatedParent').appear();
$('.animatedClick').click(function() {
    var target = $(this).attr('data-target');
    if ($(this).attr('data-sequence') != undefined) {
        var firstId = $("." + target + ":first").attr('data-id');
        var lastId = $("." + target + ":last").attr('data-id');
        var number = firstId;
        if ($("." + target + "[data-id=" + number + "]").hasClass('go')) {
            $("." + target + "[data-id=" + number + "]").addClass('goAway');
            $("." + target + "[data-id=" + number + "]").removeClass('go')
        } else {
            $("." + target + "[data-id=" + number + "]").addClass('go');
            $("." + target + "[data-id=" + number + "]").removeClass('goAway')
        }
        number++;
        delay = Number($(this).attr('data-sequence'));
        $.doTimeout(delay, function() {
            console.log(lastId);
            if ($("." + target + "[data-id=" + number + "]").hasClass('go')) {
                $("." + target + "[data-id=" + number + "]").addClass('goAway');
                $("." + target + "[data-id=" + number + "]").removeClass('go')
            } else {
                $("." + target + "[data-id=" + number + "]").addClass('go');
                $("." + target + "[data-id=" + number + "]").removeClass('goAway')
            }
            ++number;
            if (number <= lastId) {
                return !0
            }
        })
    } else {
        if ($('.' + target).hasClass('go')) {
            $('.' + target).addClass('goAway');
            $('.' + target).removeClass('go')
        } else {
            $('.' + target).addClass('go');
            $('.' + target).removeClass('goAway')
        }
    }
});
$(document.body).on('appear', '.animatedParent', function(e, $affected) {
    var ele = $(this).find('.animated');
    console.log(ele);
    var parent = $(this);
    if (parent.attr('data-sequence') != undefined) {
        var firstId = $(this).find('.animated:first').attr('data-id');
        var number = firstId;
        var lastId = $(this).find('.animated:last').attr('data-id');
        $(parent).find(".animated[data-id=" + number + "]").addClass('go');
        number++;
        delay = Number(parent.attr('data-sequence'));
        $.doTimeout(delay, function() {
            $(parent).find(".animated[data-id=" + number + "]").addClass('go');
            ++number;
            if (number <= lastId) {
                return !0
            }
        })
    } else {
        ele.addClass('go')
    }
});
$(document.body).on('disappear', '.animatedParent', function(e, $affected) {
    if (!$(this).hasClass('animateOnce')) {
        $(this).find('.animated').removeClass('go')
    }
})