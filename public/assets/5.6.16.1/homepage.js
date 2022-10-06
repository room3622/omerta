/*! jQuery-Impromptu - v6.2.1 - 2015-05-10
 * http://trentrichardson.com/Impromptu
 * Copyright (c) 2015 Trent Richardson; Licensed MIT */
(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else {
        factory(root.jQuery);
    }
}(this, function($) {
    'use strict';
    var Imp = function(message, options) {
        var t = this;
        t.id = Imp.count++;
        Imp.lifo.push(t);
        if (message) {
            t.open(message, options);
        }
        return t;
    };
    Imp.defaults = {
        prefix: 'jqi',
        classes: {
            box: '',
            fade: '',
            prompt: '',
            form: '',
            close: '',
            title: '',
            message: '',
            buttons: '',
            button: '',
            defaultButton: ''
        },
        title: '',
        closeText: '&times;',
        buttons: {
            Ok: true
        },
        buttonTimeout: 1000,
        loaded: function(e) {},
        submit: function(e, v, m, f) {},
        close: function(e, v, m, f) {},
        statechanging: function(e, from, to) {},
        statechanged: function(e, to) {},
        opacity: 0.6,
        zIndex: 999,
        overlayspeed: 'slow',
        promptspeed: 'fast',
        show: 'fadeIn',
        hide: 'fadeOut',
        focus: 0,
        defaultButton: 0,
        useiframe: false,
        top: '15%',
        position: {
            container: null,
            x: null,
            y: null,
            arrow: null,
            width: null
        },
        persistent: true,
        timeout: 0,
        states: {},
        initialState: 0,
        state: {
            name: null,
            title: '',
            html: '',
            buttons: {
                Ok: true
            },
            focus: 0,
            defaultButton: 0,
            position: {
                container: null,
                x: null,
                y: null,
                arrow: null,
                width: null
            },
            submit: function(e, v, m, f) {
                return true;
            }
        }
    };
    Imp.setDefaults = function(o) {
        Imp.defaults = $.extend({}, Imp.defaults, o);
    };
    Imp.setStateDefaults = function(o) {
        Imp.defaults.state = $.extend({}, Imp.defaults.state, o);
    };
    Imp.count = 0;
    Imp.lifo = [];
    Imp.getLast = function() {
        var l = Imp.lifo.length;
        return (l > 0) ? Imp.lifo[l - 1] : false;
    };
    Imp.removeFromStack = function(id) {
        for (var i = Imp.lifo.length - 1; i >= 0; i--) {
            if (Imp.lifo[i].id === id) {
                return Imp.lifo.splice(i, 1)[0];
            }
        }
    };
    Imp.prototype = {
        id: null,
        open: function(message, options) {
            var t = this;
            t.options = $.extend({}, Imp.defaults, options);
            if (t.timeout) {
                clearTimeout(t.timeout);
            }
            t.timeout = false;
            var opts = t.options,
                $body = $(document.body),
                $window = $(window);
            var msgbox = '<div class="' + opts.prefix + 'box ' + opts.classes.box + '">';
            if (opts.useiframe && ($('object, applet').length > 0)) {
                msgbox += '<iframe src="javascript:false;" class="' + opts.prefix + 'fade ' + opts.classes.fade + '"></iframe>';
            } else {
                msgbox += '<div class="' + opts.prefix + 'fade ' + opts.classes.fade + '"></div>';
            }
            msgbox += '<div class="' + opts.prefix + ' ' + opts.classes.prompt + '">' +
                '<form action="#" class="' + opts.prefix + 'form ' + opts.classes.form + '">' +
                '<div class="' + opts.prefix + 'close ' + opts.classes.close + '">' + opts.closeText + '</div>' +
                '<div class="' + opts.prefix + 'states"></div>' +
                '</form>' +
                '</div>' +
                '</div>';
            t.jqib = $(msgbox).appendTo($body);
            t.jqi = t.jqib.children('.' + opts.prefix);
            t.jqif = t.jqib.children('.' + opts.prefix + 'fade');
            if (message.constructor === String) {
                message = {
                    state0: {
                        title: opts.title,
                        html: message,
                        buttons: opts.buttons,
                        position: opts.position,
                        focus: opts.focus,
                        defaultButton: opts.defaultButton,
                        submit: opts.submit
                    }
                };
            }
            t.options.states = {};
            var k, v;
            for (k in message) {
                v = $.extend({}, Imp.defaults.state, {
                    name: k
                }, message[k]);
                t.addState(v.name, v);
                if (t.currentStateName === '') {
                    t.currentStateName = v.name;
                }
            }
            t.jqi.on('click', '.' + opts.prefix + 'buttons button', function(e) {
                var $t = $(this),
                    $state = $t.parents('.' + opts.prefix + 'state'),
                    statename = $state.data('jqi-name'),
                    stateobj = t.options.states[statename],
                    msg = $state.children('.' + opts.prefix + 'message'),
                    clicked = stateobj.buttons[$t.text()] || stateobj.buttons[$t.html()],
                    forminputs = {};
                if (t.options.buttonTimeout > 0) {
                    t.disableStateButtons(statename);
                    setTimeout(function() {
                        t.enableStateButtons(statename);
                    }, t.options.buttonTimeout);
                }
                if (clicked === undefined) {
                    for (var i in stateobj.buttons) {
                        if (stateobj.buttons[i].title === $t.text() || stateobj.buttons[i].title === $t.html()) {
                            clicked = stateobj.buttons[i].value;
                        }
                    }
                }
                $.each(t.jqi.children('form').serializeArray(), function(i, obj) {
                    if (forminputs[obj.name] === undefined) {
                        forminputs[obj.name] = obj.value;
                    } else if (typeof forminputs[obj.name] === Array || typeof forminputs[obj.name] === 'object') {
                        forminputs[obj.name].push(obj.value);
                    } else {
                        forminputs[obj.name] = [forminputs[obj.name], obj.value];
                    }
                });
                var promptsubmite = new $.Event('impromptu:submit');
                promptsubmite.stateName = stateobj.name;
                promptsubmite.state = $state;
                $state.trigger(promptsubmite, [clicked, msg, forminputs]);
                if (!promptsubmite.isDefaultPrevented()) {
                    t.close(true, clicked, msg, forminputs);
                }
            });
            var fadeClicked = function() {
                if (opts.persistent) {
                    var offset = (opts.top.toString().indexOf('%') >= 0 ? ($window.height() * (parseInt(opts.top, 10) / 100)) : parseInt(opts.top, 10)),
                        top = parseInt(t.jqi.css('top').replace('px', ''), 10) - offset;
                    $('html,body').animate({
                        scrollTop: top
                    }, 'fast', function() {
                        var i = 0;
                        t.jqib.addClass(opts.prefix + 'warning');
                        var intervalid = setInterval(function() {
                            t.jqib.toggleClass(opts.prefix + 'warning');
                            if (i++ > 1) {
                                clearInterval(intervalid);
                                t.jqib.removeClass(opts.prefix + 'warning');
                            }
                        }, 100);
                    });
                } else {
                    t.close(true);
                }
            };
            var keyDownEventHandler = function(e) {
                var key = (window.event) ? event.keyCode : e.keyCode;
                if (key === 27) {
                    fadeClicked();
                }
                if (key === 13) {
                    var $defBtn = t.getCurrentState().find('.' + opts.prefix + 'defaultbutton');
                    var $tgt = $(e.target);
                    if ($tgt.is('textarea,.' + opts.prefix + 'button') === false && $defBtn.length > 0) {
                        e.preventDefault();
                        $defBtn.click();
                    }
                }
                if (key === 9) {
                    var $inputels = $('input,select,textarea,button', t.getCurrentState());
                    var fwd = !e.shiftKey && e.target === $inputels[$inputels.length - 1];
                    var back = e.shiftKey && e.target === $inputels[0];
                    if (fwd || back) {
                        setTimeout(function() {
                            if (!$inputels) {
                                return;
                            }
                            var el = $inputels[back === true ? $inputels.length - 1 : 0];
                            if (el) {
                                el.focus();
                            }
                        }, 10);
                        return false;
                    }
                }
            };
            t.position();
            t.style();
            t._windowResize = function(e) {
                t.position(e);
            };
            $window.resize({
                animate: false
            }, t._windowResize);
            t.jqif.click(fadeClicked);
            t.jqi.find('.' + opts.prefix + 'close').click(function() {
                t.close();
            });
            t.jqi.find('.' + opts.prefix + 'form').submit(function() {
                return false;
            });
            t.jqib.on("keydown", keyDownEventHandler).on('impromptu:loaded', opts.loaded).on('impromptu:close', opts.close).on('impromptu:statechanging', opts.statechanging).on('impromptu:statechanged', opts.statechanged);
            t.jqif[opts.show](opts.overlayspeed);
            t.jqi[opts.show](opts.promptspeed, function() {
                t.goToState(isNaN(opts.initialState) ? opts.initialState : t.jqi.find('.' + opts.prefix + 'states .' + opts.prefix + 'state').eq(opts.initialState).data('jqi-name'));
                t.jqib.trigger('impromptu:loaded');
            });
            if (opts.timeout > 0) {
                t.timeout = setTimeout(function() {
                    t.close(true);
                }, opts.timeout);
            }
            return t;
        },
        close: function(callCallback, clicked, msg, formvals) {
            var t = this;
            Imp.removeFromStack(t.id);
            if (t.timeout) {
                clearTimeout(t.timeout);
                t.timeout = false;
            }
            if (t.jqib) {
                t.jqib[t.options.hide]('fast', function() {
                    t.jqib.trigger('impromptu:close', [clicked, msg, formvals]);
                    t.jqib.remove();
                    $(window).off('resize', t._windowResize);
                    if (typeof callCallback === 'function') {
                        callCallback();
                    }
                });
            }
            t.currentStateName = "";
            return t;
        },
        addState: function(statename, stateobj, afterState) {
            var t = this,
                state = '',
                $state = null,
                arrow = '',
                title = '',
                opts = t.options,
                $jqistates = t.jqi.find('.' + opts.prefix + 'states'),
                buttons = [],
                showHtml, defbtn, k, v, l, i = 0;
            stateobj = $.extend({}, Imp.defaults.state, {
                name: statename
            }, stateobj);
            if (stateobj.position.arrow !== null) {
                arrow = '<div class="' + opts.prefix + 'arrow ' + opts.prefix + 'arrow' + stateobj.position.arrow + '"></div>';
            }
            if (stateobj.title && stateobj.title !== '') {
                title = '<div class="lead ' + opts.prefix + 'title ' + opts.classes.title + '">' + stateobj.title + '</div>';
            }
            showHtml = stateobj.html;
            if (typeof stateobj.html === 'function') {
                showHtml = 'Error: html function must return text';
            }
            state += '<div class="' + opts.prefix + 'state" data-jqi-name="' + statename + '">' +
                arrow + title +
                '<div class="' + opts.prefix + 'message ' + opts.classes.message + '">' + showHtml + '</div>' +
                '<div class="' + opts.prefix + 'buttons' + ($.isEmptyObject(stateobj.buttons) ? 'hide ' : ' ') + opts.classes.buttons + '">';
            if ($.isArray(stateobj.buttons)) {
                buttons = stateobj.buttons;
            } else if ($.isPlainObject(stateobj.buttons)) {
                for (k in stateobj.buttons) {
                    if (stateobj.buttons.hasOwnProperty(k)) {
                        buttons.push({
                            title: k,
                            value: stateobj.buttons[k]
                        });
                    }
                }
            }
            for (i = 0, l = buttons.length; i < l; i++) {
                v = buttons[i], defbtn = stateobj.focus === i || (isNaN(stateobj.focus) && stateobj.defaultButton === i) ? (opts.prefix + 'defaultbutton ' + opts.classes.defaultButton) : '';
                state += '<button class="' + opts.classes.button + ' ' + opts.prefix + 'button ' + defbtn;
                if (typeof v.classes !== "undefined") {
                    state += ' ' + ($.isArray(v.classes) ? v.classes.join(' ') : v.classes) + ' ';
                }
                state += '" name="' + opts.prefix + '_' + statename + '_button' + v.title.replace(/[^a-z0-9]+/gi, '') + '" value="' + v.value + '">' + v.title + '</button>';
            }
            state += '</div></div>';
            $state = $(state).css({
                display: 'none'
            });
            $state.on('impromptu:submit', stateobj.submit);
            if (afterState !== undefined) {
                t.getState(afterState).after($state);
            } else {
                $jqistates.append($state);
            }
            t.options.states[statename] = stateobj;
            return $state;
        },
        removeState: function(state, newState) {
            var t = this,
                $state = t.getState(state),
                rm = function() {
                    $state.remove();
                };
            if ($state.length === 0) {
                return false;
            }
            if ($state.css('display') !== 'none') {
                if (newState !== undefined && t.getState(newState).length > 0) {
                    t.goToState(newState, false, rm);
                } else if ($state.next().length > 0) {
                    t.nextState(rm);
                } else if ($state.prev().length > 0) {
                    t.prevState(rm);
                } else {
                    t.close();
                }
            } else {
                $state.slideUp('slow', rm);
            }
            return true;
        },
        getApi: function() {
            return this;
        },
        getBox: function() {
            return this.jqib;
        },
        getPrompt: function() {
            return this.jqi;
        },
        getState: function(statename) {
            return this.jqi.find('[data-jqi-name="' + statename + '"]');
        },
        getCurrentState: function() {
            return this.getState(this.getCurrentStateName());
        },
        getCurrentStateName: function() {
            return this.currentStateName;
        },
        disableStateButtons: function(statename, buttons, enable) {
            var t = this;
            if ($.isArray(statename)) {
                buttons = statename;
                statename = null;
            }
            t.getState(statename || t.getCurrentStateName()).find('.' + t.options.prefix + 'button').each(function(i, btn) {
                if (buttons === undefined || $.inArray(btn.value, buttons) !== -1) {
                    btn.disabled = !enable;
                }
            });
        },
        enableStateButtons: function(statename, buttons) {
            this.disableStateButtons(statename, buttons, true);
        },
        position: function(e) {
            var t = this,
                restoreFx = $.fx.off,
                $state = t.getCurrentState(),
                stateObj = t.options.states[$state.data('jqi-name')],
                pos = stateObj ? stateObj.position : undefined,
                $window = $(window),
                bodyHeight = document.body.scrollHeight,
                windowHeight = $(window).height(),
                documentHeight = $(document).height(),
                height = (bodyHeight > windowHeight) ? bodyHeight : windowHeight,
                scrollTop = parseInt($window.scrollTop(), 10),
                top = scrollTop + (t.options.top.toString().indexOf('%') >= 0 ? (windowHeight * (parseInt(t.options.top, 10) / 100)) : parseInt(t.options.top, 10));
            if (e !== undefined && e.data.animate === false) {
                $.fx.off = true;
            }
            t.jqib.css({
                position: "absolute",
                height: height,
                width: "100%",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0
            });
            t.jqif.css({
                position: "fixed",
                height: height,
                width: "100%",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0
            });
            if (pos && pos.container) {
                var offset = $(pos.container).offset(),
                    hasScrolled = false;
                if ($.isPlainObject(offset) && offset.top !== undefined) {
                    top = (offset.top + pos.y) - (t.options.top.toString().indexOf('%') >= 0 ? (windowHeight * (parseInt(t.options.top, 10) / 100)) : parseInt(t.options.top, 10));
                    t.jqi.css({
                        position: "absolute"
                    });
                    t.jqi.animate({
                        top: offset.top + pos.y,
                        left: offset.left + pos.x,
                        marginLeft: 0,
                        width: (pos.width !== undefined) ? pos.width : null
                    }, function() {
                        if (!hasScrolled && (offset.top + pos.y + t.jqi.outerHeight(true)) > (scrollTop + windowHeight)) {
                            $('html,body').animate({
                                scrollTop: top
                            }, 'slow', 'swing', function() {});
                            hasScrolled = true;
                        }
                    });
                    if (top < scrollTop || top > scrollTop + windowHeight) {
                        $('html,body').animate({
                            scrollTop: top
                        }, 'slow', 'swing', function() {});
                        hasScrolled = true;
                    }
                }
            } else if (pos && pos.width) {
                t.jqi.css({
                    position: "absolute",
                    left: '50%'
                });
                t.jqi.animate({
                    top: pos.y || top,
                    left: pos.x || '50%',
                    marginLeft: ((pos.width / 2) * -1),
                    width: pos.width
                });
            } else {
                t.jqi.css({
                    position: "absolute",
                    top: top,
                    left: '50%',
                    marginLeft: ((t.jqi.outerWidth(false) / 2) * -1)
                });
            }
            if (e !== undefined && e.data.animate === false) {
                $.fx.off = restoreFx;
            }
        },
        style: function() {
            var t = this;
            t.jqif.css({
                zIndex: t.options.zIndex,
                display: "none",
                opacity: t.options.opacity
            });
            t.jqi.css({
                zIndex: t.options.zIndex + 1,
                display: "none"
            });
            t.jqib.css({
                zIndex: t.options.zIndex
            });
        },
        goToState: function(state, subState, callback) {
            var t = this,
                $jqi = t.jqi,
                jqiopts = t.options,
                $state = t.getState(state),
                stateobj = jqiopts.states[$state.data('jqi-name')],
                promptstatechanginge = new $.Event('impromptu:statechanging'),
                opts = t.options;
            if (stateobj !== undefined) {
                if (typeof stateobj.html === 'function') {
                    var contentLaterFunc = stateobj.html;
                    $state.find('.' + opts.prefix + 'message ').html(contentLaterFunc());
                }
                if (typeof subState === 'function') {
                    callback = subState;
                    subState = false;
                }
                t.jqib.trigger(promptstatechanginge, [t.getCurrentStateName(), state]);
                if (!promptstatechanginge.isDefaultPrevented() && $state.length > 0) {
                    t.jqi.find('.' + opts.prefix + 'parentstate').removeClass(opts.prefix + 'parentstate');
                    if (subState) {
                        t.jqi.find('.' + opts.prefix + 'substate').not($state).slideUp(jqiopts.promptspeed).removeClass('.' + opts.prefix + 'substate').find('.' + opts.prefix + 'arrow').hide();
                        t.jqi.find('.' + opts.prefix + 'state:visible').addClass(opts.prefix + 'parentstate');
                        $state.addClass(opts.prefix + 'substate');
                    } else {
                        t.jqi.find('.' + opts.prefix + 'state').not($state).slideUp(jqiopts.promptspeed).find('.' + opts.prefix + 'arrow').hide();
                    }
                    t.currentStateName = stateobj.name;
                    $state.slideDown(jqiopts.promptspeed, function() {
                        var $t = $(this);
                        t.enableStateButtons();
                        if (typeof(stateobj.focus) === 'string') {
                            $t.find(stateobj.focus).eq(0).focus();
                        } else {
                            $t.find('.' + opts.prefix + 'defaultbutton').focus();
                        }
                        $t.find('.' + opts.prefix + 'arrow').show(jqiopts.promptspeed);
                        if (typeof callback === 'function') {
                            t.jqib.on('impromptu:statechanged', callback);
                        }
                        t.jqib.trigger('impromptu:statechanged', [state]);
                        if (typeof callback === 'function') {
                            t.jqib.off('impromptu:statechanged', callback);
                        }
                    });
                    if (!subState) {
                        t.position();
                    }
                }
            }
            return $state;
        },
        nextState: function(callback) {
            var t = this,
                $next = t.getCurrentState().next();
            if ($next.length > 0) {
                t.goToState($next.data('jqi-name'), callback);
            }
            return $next;
        },
        prevState: function(callback) {
            var t = this,
                $prev = t.getCurrentState().prev();
            if ($prev.length > 0) {
                t.goToState($prev.data('jqi-name'), callback);
            }
            return $prev;
        }
    };
    $.prompt = function(message, options) {
        var api = new Imp(message, options);
        return api.jqi;
    };
    $.each(Imp, function(k, v) {
        $.prompt[k] = v;
    });
    $.each(Imp.prototype, function(k, v) {
        $.prompt[k] = function() {
            var api = Imp.getLast();
            if (api && typeof api[k] === "function") {
                return api[k].apply(api, arguments);
            }
        };
    });
    $.fn.prompt = function(options) {
        if (options === undefined) {
            options = {};
        }
        if (options.withDataAndEvents === undefined) {
            options.withDataAndEvents = false;
        }
        $.prompt($(this).clone(options.withDataAndEvents).html(), options);
    };
    window.Impromptu = Imp;
}));
/*! Copyright (c) 2013 Brandon Aaron (http://brandon.aaron.sh)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Version: 3.1.12
 *
 * Requires: jQuery 1.2.2+
 */
! function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof exports ? module.exports = a : a(jQuery)
}(function(a) {
    function b(b) {
        var g = b || window.event,
            h = i.call(arguments, 1),
            j = 0,
            l = 0,
            m = 0,
            n = 0,
            o = 0,
            p = 0;
        if (b = a.event.fix(g), b.type = "mousewheel", "detail" in g && (m = -1 * g.detail), "wheelDelta" in g && (m = g.wheelDelta), "wheelDeltaY" in g && (m = g.wheelDeltaY), "wheelDeltaX" in g && (l = -1 * g.wheelDeltaX), "axis" in g && g.axis === g.HORIZONTAL_AXIS && (l = -1 * m, m = 0), j = 0 === m ? l : m, "deltaY" in g && (m = -1 * g.deltaY, j = m), "deltaX" in g && (l = g.deltaX, 0 === m && (j = -1 * l)), 0 !== m || 0 !== l) {
            if (1 === g.deltaMode) {
                var q = a.data(this, "mousewheel-line-height");
                j *= q, m *= q, l *= q
            } else if (2 === g.deltaMode) {
                var r = a.data(this, "mousewheel-page-height");
                j *= r, m *= r, l *= r
            }
            if (n = Math.max(Math.abs(m), Math.abs(l)), (!f || f > n) && (f = n, d(g, n) && (f /= 40)), d(g, n) && (j /= 40, l /= 40, m /= 40), j = Math[j >= 1 ? "floor" : "ceil"](j / f), l = Math[l >= 1 ? "floor" : "ceil"](l / f), m = Math[m >= 1 ? "floor" : "ceil"](m / f), k.settings.normalizeOffset && this.getBoundingClientRect) {
                var s = this.getBoundingClientRect();
                o = b.clientX - s.left, p = b.clientY - s.top
            }
            return b.deltaX = l, b.deltaY = m, b.deltaFactor = f, b.offsetX = o, b.offsetY = p, b.deltaMode = 0, h.unshift(b, j, l, m), e && clearTimeout(e), e = setTimeout(c, 200), (a.event.dispatch || a.event.handle).apply(this, h)
        }
    }

    function c() {
        f = null
    }

    function d(a, b) {
        return k.settings.adjustOldDeltas && "mousewheel" === a.type && b % 120 === 0
    }
    var e, f, g = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
        h = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
        i = Array.prototype.slice;
    if (a.event.fixHooks)
        for (var j = g.length; j;) a.event.fixHooks[g[--j]] = a.event.mouseHooks;
    var k = a.event.special.mousewheel = {
        version: "3.1.12",
        setup: function() {
            if (this.addEventListener)
                for (var c = h.length; c;) this.addEventListener(h[--c], b, !1);
            else this.onmousewheel = b;
            a.data(this, "mousewheel-line-height", k.getLineHeight(this)), a.data(this, "mousewheel-page-height", k.getPageHeight(this))
        },
        teardown: function() {
            if (this.removeEventListener)
                for (var c = h.length; c;) this.removeEventListener(h[--c], b, !1);
            else this.onmousewheel = null;
            a.removeData(this, "mousewheel-line-height"), a.removeData(this, "mousewheel-page-height")
        },
        getLineHeight: function(b) {
            var c = a(b),
                d = c["offsetParent" in a.fn ? "offsetParent" : "parent"]();
            return d.length || (d = a("body")), parseInt(d.css("fontSize"), 10) || parseInt(c.css("fontSize"), 10) || 16
        },
        getPageHeight: function(b) {
            return a(b).height()
        },
        settings: {
            adjustOldDeltas: !0,
            normalizeOffset: !0
        }
    };
    a.fn.extend({
        mousewheel: function(a) {
            return a ? this.bind("mousewheel", a) : this.trigger("mousewheel")
        },
        unmousewheel: function(a) {
            return this.unbind("mousewheel", a)
        }
    })
});
(function e(t, n, r) {
    function s(o, u) {
        if (!n[o]) {
            if (!t[o]) {
                var a = typeof require == "function" && require;
                if (!u && a) return a(o, !0);
                if (i) return i(o, !0);
                var f = new Error("Cannot find module '" + o + "'");
                throw f.code = "MODULE_NOT_FOUND", f
            }
            var l = n[o] = {
                exports: {}
            };
            t[o][0].call(l.exports, function(e) {
                var n = t[o][1][e];
                return s(n ? n : e)
            }, l, l.exports, e, t, n, r)
        }
        return n[o].exports
    }
    var i = typeof require == "function" && require;
    for (var o = 0; o < r.length; o++) s(r[o]);
    return s
})({
    1: [function(require, module, exports) {
        'use strict';
        var ps = require('../main'),
            psInstances = require('../plugin/instances');

        function mountJQuery(jQuery) {
            jQuery.fn.perfectScrollbar = function(settingOrCommand) {
                return this.each(function() {
                    if (typeof settingOrCommand === 'object' || typeof settingOrCommand === 'undefined') {
                        var settings = settingOrCommand;
                        if (!psInstances.get(this)) {
                            ps.initialize(this, settings);
                        }
                    } else {
                        var command = settingOrCommand;
                        if (command === 'update') {
                            ps.update(this);
                        } else if (command === 'destroy') {
                            ps.destroy(this);
                        }
                    }
                    return jQuery(this);
                });
            };
        }
        if (typeof define === 'function' && define.amd) {
            define(['jquery'], mountJQuery);
        } else {
            var jq = window.jQuery ? window.jQuery : window.$;
            if (typeof jq !== 'undefined') {
                mountJQuery(jq);
            }
        }
        module.exports = mountJQuery;
    }, {
        "../main": 7,
        "../plugin/instances": 18
    }],
    2: [function(require, module, exports) {
        'use strict';

        function oldAdd(element, className) {
            var classes = element.className.split(' ');
            if (classes.indexOf(className) < 0) {
                classes.push(className);
            }
            element.className = classes.join(' ');
        }

        function oldRemove(element, className) {
            var classes = element.className.split(' ');
            var idx = classes.indexOf(className);
            if (idx >= 0) {
                classes.splice(idx, 1);
            }
            element.className = classes.join(' ');
        }
        exports.add = function(element, className) {
            if (element.classList) {
                element.classList.add(className);
            } else {
                oldAdd(element, className);
            }
        };
        exports.remove = function(element, className) {
            if (element.classList) {
                element.classList.remove(className);
            } else {
                oldRemove(element, className);
            }
        };
        exports.list = function(element) {
            if (element.classList) {
                return element.classList;
            } else {
                return element.className.split(' ');
            }
        };
    }, {}],
    3: [function(require, module, exports) {
        'use strict';
        exports.e = function(tagName, className) {
            var element = document.createElement(tagName);
            element.className = className;
            return element;
        };
        exports.appendTo = function(child, parent) {
            parent.appendChild(child);
            return child;
        };

        function cssGet(element, styleName) {
            return window.getComputedStyle(element)[styleName];
        }

        function cssSet(element, styleName, styleValue) {
            if (typeof styleValue === 'number') {
                styleValue = styleValue.toString() + 'px';
            }
            element.style[styleName] = styleValue;
            return element;
        }

        function cssMultiSet(element, obj) {
            for (var key in obj) {
                var val = obj[key];
                if (typeof val === 'number') {
                    val = val.toString() + 'px';
                }
                element.style[key] = val;
            }
            return element;
        }
        exports.css = function(element, styleNameOrObject, styleValue) {
            if (typeof styleNameOrObject === 'object') {
                return cssMultiSet(element, styleNameOrObject);
            } else {
                if (typeof styleValue === 'undefined') {
                    return cssGet(element, styleNameOrObject);
                } else {
                    return cssSet(element, styleNameOrObject, styleValue);
                }
            }
        };
        exports.matches = function(element, query) {
            if (typeof element.matches !== 'undefined') {
                return element.matches(query);
            } else {
                if (typeof element.matchesSelector !== 'undefined') {
                    return element.matchesSelector(query);
                } else if (typeof element.webkitMatchesSelector !== 'undefined') {
                    return element.webkitMatchesSelector(query);
                } else if (typeof element.mozMatchesSelector !== 'undefined') {
                    return element.mozMatchesSelector(query);
                } else if (typeof element.msMatchesSelector !== 'undefined') {
                    return element.msMatchesSelector(query);
                }
            }
        };
        exports.remove = function(element) {
            if (typeof element.remove !== 'undefined') {
                element.remove();
            } else {
                if (element.parentNode) {
                    element.parentNode.removeChild(element);
                }
            }
        };
    }, {}],
    4: [function(require, module, exports) {
        'use strict';
        var EventElement = function(element) {
            this.element = element;
            this.events = {};
        };
        EventElement.prototype.bind = function(eventName, handler) {
            if (typeof this.events[eventName] === 'undefined') {
                this.events[eventName] = [];
            }
            this.events[eventName].push(handler);
            this.element.addEventListener(eventName, handler, false);
        };
        EventElement.prototype.unbind = function(eventName, handler) {
            var isHandlerProvided = (typeof handler !== 'undefined');
            this.events[eventName] = this.events[eventName].filter(function(hdlr) {
                if (isHandlerProvided && hdlr !== handler) {
                    return true;
                }
                this.element.removeEventListener(eventName, hdlr, false);
                return false;
            }, this);
        };
        EventElement.prototype.unbindAll = function() {
            for (var name in this.events) {
                this.unbind(name);
            }
        };
        var EventManager = function() {
            this.eventElements = [];
        };
        EventManager.prototype.eventElement = function(element) {
            var ee = this.eventElements.filter(function(eventElement) {
                return eventElement.element === element;
            })[0];
            if (typeof ee === 'undefined') {
                ee = new EventElement(element);
                this.eventElements.push(ee);
            }
            return ee;
        };
        EventManager.prototype.bind = function(element, eventName, handler) {
            this.eventElement(element).bind(eventName, handler);
        };
        EventManager.prototype.unbind = function(element, eventName, handler) {
            this.eventElement(element).unbind(eventName, handler);
        };
        EventManager.prototype.unbindAll = function() {
            for (var i = 0; i < this.eventElements.length; i++) {
                this.eventElements[i].unbindAll();
            }
        };
        EventManager.prototype.once = function(element, eventName, handler) {
            var ee = this.eventElement(element);
            var onceHandler = function(e) {
                ee.unbind(eventName, onceHandler);
                handler(e);
            };
            ee.bind(eventName, onceHandler);
        };
        module.exports = EventManager;
    }, {}],
    5: [function(require, module, exports) {
        'use strict';
        module.exports = (function() {
            function s4() {
                return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
            }
            return function() {
                return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
                    s4() + '-' + s4() + s4() + s4();
            };
        })();
    }, {}],
    6: [function(require, module, exports) {
        'use strict';
        var cls = require('./class'),
            d = require('./dom');
        exports.toInt = function(x) {
            return parseInt(x, 10) || 0;
        };
        exports.clone = function(obj) {
            if (obj === null) {
                return null;
            } else if (typeof obj === 'object') {
                var result = {};
                for (var key in obj) {
                    result[key] = this.clone(obj[key]);
                }
                return result;
            } else {
                return obj;
            }
        };
        exports.extend = function(original, source) {
            var result = this.clone(original);
            for (var key in source) {
                result[key] = this.clone(source[key]);
            }
            return result;
        };
        exports.isEditable = function(el) {
            return d.matches(el, "input,[contenteditable]") || d.matches(el, "select,[contenteditable]") || d.matches(el, "textarea,[contenteditable]") || d.matches(el, "button,[contenteditable]");
        };
        exports.removePsClasses = function(element) {
            var clsList = cls.list(element);
            for (var i = 0; i < clsList.length; i++) {
                var className = clsList[i];
                if (className.indexOf('ps-') === 0) {
                    cls.remove(element, className);
                }
            }
        };
        exports.outerWidth = function(element) {
            return this.toInt(d.css(element, 'width')) +
                this.toInt(d.css(element, 'paddingLeft')) +
                this.toInt(d.css(element, 'paddingRight')) +
                this.toInt(d.css(element, 'borderLeftWidth')) +
                this.toInt(d.css(element, 'borderRightWidth'));
        };
        exports.startScrolling = function(element, axis) {
            cls.add(element, 'ps-in-scrolling');
            if (typeof axis !== 'undefined') {
                cls.add(element, 'ps-' + axis);
            } else {
                cls.add(element, 'ps-x');
                cls.add(element, 'ps-y');
            }
        };
        exports.stopScrolling = function(element, axis) {
            cls.remove(element, 'ps-in-scrolling');
            if (typeof axis !== 'undefined') {
                cls.remove(element, 'ps-' + axis);
            } else {
                cls.remove(element, 'ps-x');
                cls.remove(element, 'ps-y');
            }
        };
        exports.env = {
            isWebKit: 'WebkitAppearance' in document.documentElement.style,
            supportsTouch: (('ontouchstart' in window) || window.DocumentTouch && document instanceof window.DocumentTouch),
            supportsIePointer: window.navigator.msMaxTouchPoints !== null
        };
    }, {
        "./class": 2,
        "./dom": 3
    }],
    7: [function(require, module, exports) {
        'use strict';
        var destroy = require('./plugin/destroy'),
            initialize = require('./plugin/initialize'),
            update = require('./plugin/update');
        module.exports = {
            initialize: initialize,
            update: update,
            destroy: destroy
        };
    }, {
        "./plugin/destroy": 9,
        "./plugin/initialize": 17,
        "./plugin/update": 20
    }],
    8: [function(require, module, exports) {
        'use strict';
        module.exports = {
            wheelSpeed: 1,
            wheelPropagation: false,
            swipePropagation: true,
            minScrollbarLength: null,
            maxScrollbarLength: null,
            useBothWheelAxes: false,
            useKeyboard: true,
            suppressScrollX: false,
            suppressScrollY: false,
            scrollXMarginOffset: 0,
            scrollYMarginOffset: 0,
            stopPropagationOnClick: true
        };
    }, {}],
    9: [function(require, module, exports) {
        'use strict';
        var d = require('../lib/dom'),
            h = require('../lib/helper'),
            instances = require('./instances');
        module.exports = function(element) {
            var i = instances.get(element);
            if (!i) {
                return;
            }
            i.event.unbindAll();
            d.remove(i.scrollbarX);
            d.remove(i.scrollbarY);
            d.remove(i.scrollbarXRail);
            d.remove(i.scrollbarYRail);
            h.removePsClasses(element);
            instances.remove(element);
        };
    }, {
        "../lib/dom": 3,
        "../lib/helper": 6,
        "./instances": 18
    }],
    10: [function(require, module, exports) {
        'use strict';
        var h = require('../../lib/helper'),
            instances = require('../instances'),
            updateGeometry = require('../update-geometry');

        function bindClickRailHandler(element, i) {
            function pageOffset(el) {
                return el.getBoundingClientRect();
            }
            var stopPropagation = window.Event.prototype.stopPropagation.bind;
            if (i.settings.stopPropagationOnClick) {
                i.event.bind(i.scrollbarY, 'click', stopPropagation);
            }
            i.event.bind(i.scrollbarYRail, 'click', function(e) {
                var halfOfScrollbarLength = h.toInt(i.scrollbarYHeight / 2);
                var positionTop = i.railYRatio * (e.pageY - window.scrollY - pageOffset(i.scrollbarYRail).top - halfOfScrollbarLength);
                var maxPositionTop = i.railYRatio * (i.railYHeight - i.scrollbarYHeight);
                var positionRatio = positionTop / maxPositionTop;
                if (positionRatio < 0) {
                    positionRatio = 0;
                } else if (positionRatio > 1) {
                    positionRatio = 1;
                }
                element.scrollTop = (i.contentHeight - i.containerHeight) * positionRatio;
                updateGeometry(element);
                e.stopPropagation();
            });
            if (i.settings.stopPropagationOnClick) {
                i.event.bind(i.scrollbarX, 'click', stopPropagation);
            }
            i.event.bind(i.scrollbarXRail, 'click', function(e) {
                var halfOfScrollbarLength = h.toInt(i.scrollbarXWidth / 2);
                var positionLeft = i.railXRatio * (e.pageX - window.scrollX - pageOffset(i.scrollbarXRail).left - halfOfScrollbarLength);
                var maxPositionLeft = i.railXRatio * (i.railXWidth - i.scrollbarXWidth);
                var positionRatio = positionLeft / maxPositionLeft;
                if (positionRatio < 0) {
                    positionRatio = 0;
                } else if (positionRatio > 1) {
                    positionRatio = 1;
                }
                element.scrollLeft = ((i.contentWidth - i.containerWidth) * positionRatio) - i.negativeScrollAdjustment;
                updateGeometry(element);
                e.stopPropagation();
            });
        }
        module.exports = function(element) {
            var i = instances.get(element);
            bindClickRailHandler(element, i);
        };
    }, {
        "../../lib/helper": 6,
        "../instances": 18,
        "../update-geometry": 19
    }],
    11: [function(require, module, exports) {
        'use strict';
        var d = require('../../lib/dom'),
            h = require('../../lib/helper'),
            instances = require('../instances'),
            updateGeometry = require('../update-geometry');

        function bindMouseScrollXHandler(element, i) {
            var currentLeft = null;
            var currentPageX = null;

            function updateScrollLeft(deltaX) {
                var newLeft = currentLeft + (deltaX * i.railXRatio);
                var maxLeft = i.scrollbarXRail.getBoundingClientRect().left + (i.railXRatio * (i.railXWidth - i.scrollbarXWidth));
                if (newLeft < 0) {
                    i.scrollbarXLeft = 0;
                } else if (newLeft > maxLeft) {
                    i.scrollbarXLeft = maxLeft;
                } else {
                    i.scrollbarXLeft = newLeft;
                }
                var scrollLeft = h.toInt(i.scrollbarXLeft * (i.contentWidth - i.containerWidth) / (i.containerWidth - (i.railXRatio * i.scrollbarXWidth))) - i.negativeScrollAdjustment;
                element.scrollLeft = scrollLeft;
            }
            var mouseMoveHandler = function(e) {
                updateScrollLeft(e.pageX - currentPageX);
                updateGeometry(element);
                e.stopPropagation();
                e.preventDefault();
            };
            var mouseUpHandler = function() {
                h.stopScrolling(element, 'x');
                i.event.unbind(i.ownerDocument, 'mousemove', mouseMoveHandler);
            };
            i.event.bind(i.scrollbarX, 'mousedown', function(e) {
                currentPageX = e.pageX;
                currentLeft = h.toInt(d.css(i.scrollbarX, 'left')) * i.railXRatio;
                h.startScrolling(element, 'x');
                i.event.bind(i.ownerDocument, 'mousemove', mouseMoveHandler);
                i.event.once(i.ownerDocument, 'mouseup', mouseUpHandler);
                e.stopPropagation();
                e.preventDefault();
            });
        }

        function bindMouseScrollYHandler(element, i) {
            var currentTop = null;
            var currentPageY = null;

            function updateScrollTop(deltaY) {
                var newTop = currentTop + (deltaY * i.railYRatio);
                var maxTop = i.scrollbarYRail.getBoundingClientRect().top + (i.railYRatio * (i.railYHeight - i.scrollbarYHeight));
                if (newTop < 0) {
                    i.scrollbarYTop = 0;
                } else if (newTop > maxTop) {
                    i.scrollbarYTop = maxTop;
                } else {
                    i.scrollbarYTop = newTop;
                }
                var scrollTop = h.toInt(i.scrollbarYTop * (i.contentHeight - i.containerHeight) / (i.containerHeight - (i.railYRatio * i.scrollbarYHeight)));
                element.scrollTop = scrollTop;
            }
            var mouseMoveHandler = function(e) {
                updateScrollTop(e.pageY - currentPageY);
                updateGeometry(element);
                e.stopPropagation();
                e.preventDefault();
            };
            var mouseUpHandler = function() {
                h.stopScrolling(element, 'y');
                i.event.unbind(i.ownerDocument, 'mousemove', mouseMoveHandler);
            };
            i.event.bind(i.scrollbarY, 'mousedown', function(e) {
                currentPageY = e.pageY;
                currentTop = h.toInt(d.css(i.scrollbarY, 'top')) * i.railYRatio;
                h.startScrolling(element, 'y');
                i.event.bind(i.ownerDocument, 'mousemove', mouseMoveHandler);
                i.event.once(i.ownerDocument, 'mouseup', mouseUpHandler);
                e.stopPropagation();
                e.preventDefault();
            });
        }
        module.exports = function(element) {
            var i = instances.get(element);
            bindMouseScrollXHandler(element, i);
            bindMouseScrollYHandler(element, i);
        };
    }, {
        "../../lib/dom": 3,
        "../../lib/helper": 6,
        "../instances": 18,
        "../update-geometry": 19
    }],
    12: [function(require, module, exports) {
        'use strict';
        var h = require('../../lib/helper'),
            instances = require('../instances'),
            updateGeometry = require('../update-geometry');

        function bindKeyboardHandler(element, i) {
            var hovered = false;
            i.event.bind(element, 'mouseenter', function() {
                hovered = true;
            });
            i.event.bind(element, 'mouseleave', function() {
                hovered = false;
            });
            var shouldPrevent = false;

            function shouldPreventDefault(deltaX, deltaY) {
                var scrollTop = element.scrollTop;
                if (deltaX === 0) {
                    if (!i.scrollbarYActive) {
                        return false;
                    }
                    if ((scrollTop === 0 && deltaY > 0) || (scrollTop >= i.contentHeight - i.containerHeight && deltaY < 0)) {
                        return !i.settings.wheelPropagation;
                    }
                }
                var scrollLeft = element.scrollLeft;
                if (deltaY === 0) {
                    if (!i.scrollbarXActive) {
                        return false;
                    }
                    if ((scrollLeft === 0 && deltaX < 0) || (scrollLeft >= i.contentWidth - i.containerWidth && deltaX > 0)) {
                        return !i.settings.wheelPropagation;
                    }
                }
                return true;
            }
            i.event.bind(i.ownerDocument, 'keydown', function(e) {
                if (e.isDefaultPrevented && e.isDefaultPrevented()) {
                    return;
                }
                if (!hovered) {
                    return;
                }
                var activeElement = document.activeElement ? document.activeElement : i.ownerDocument.activeElement;
                if (activeElement) {
                    while (activeElement.shadowRoot) {
                        activeElement = activeElement.shadowRoot.activeElement;
                    }
                    if (h.isEditable(activeElement)) {
                        return;
                    }
                }
                var deltaX = 0;
                var deltaY = 0;
                switch (e.which) {
                    case 37:
                        deltaX = -30;
                        break;
                    case 38:
                        deltaY = 30;
                        break;
                    case 39:
                        deltaX = 30;
                        break;
                    case 40:
                        deltaY = -30;
                        break;
                    case 33:
                        deltaY = 90;
                        break;
                    case 32:
                    case 34:
                        deltaY = -90;
                        break;
                    case 35:
                        if (e.ctrlKey) {
                            deltaY = -i.contentHeight;
                        } else {
                            deltaY = -i.containerHeight;
                        }
                        break;
                    case 36:
                        if (e.ctrlKey) {
                            deltaY = element.scrollTop;
                        } else {
                            deltaY = i.containerHeight;
                        }
                        break;
                    default:
                        return;
                }
                element.scrollTop = element.scrollTop - deltaY;
                element.scrollLeft = element.scrollLeft + deltaX;
                updateGeometry(element);
                shouldPrevent = shouldPreventDefault(deltaX, deltaY);
                if (shouldPrevent) {
                    e.preventDefault();
                }
            });
        }
        module.exports = function(element) {
            var i = instances.get(element);
            bindKeyboardHandler(element, i);
        };
    }, {
        "../../lib/helper": 6,
        "../instances": 18,
        "../update-geometry": 19
    }],
    13: [function(require, module, exports) {
        'use strict';
        var h = require('../../lib/helper'),
            instances = require('../instances'),
            updateGeometry = require('../update-geometry');

        function bindMouseWheelHandler(element, i) {
            var shouldPrevent = false;

            function shouldPreventDefault(deltaX, deltaY) {
                var scrollTop = element.scrollTop;
                if (deltaX === 0) {
                    if (!i.scrollbarYActive) {
                        return false;
                    }
                    if ((scrollTop === 0 && deltaY > 0) || (scrollTop >= i.contentHeight - i.containerHeight && deltaY < 0)) {
                        return !i.settings.wheelPropagation;
                    }
                }
                var scrollLeft = element.scrollLeft;
                if (deltaY === 0) {
                    if (!i.scrollbarXActive) {
                        return false;
                    }
                    if ((scrollLeft === 0 && deltaX < 0) || (scrollLeft >= i.contentWidth - i.containerWidth && deltaX > 0)) {
                        return !i.settings.wheelPropagation;
                    }
                }
                return true;
            }

            function getDeltaFromEvent(e) {
                var deltaX = e.deltaX;
                var deltaY = -1 * e.deltaY;
                if (typeof deltaX === "undefined" || typeof deltaY === "undefined") {
                    deltaX = -1 * e.wheelDeltaX / 6;
                    deltaY = e.wheelDeltaY / 6;
                }
                if (e.deltaMode && e.deltaMode === 1) {
                    deltaX *= 10;
                    deltaY *= 13;
                }
                if (deltaX !== deltaX && deltaY !== deltaY) {
                    deltaX = 0;
                    deltaY = e.wheelDelta;
                }
                return [deltaX, deltaY];
            }

            function shouldBeConsumedByTextarea(deltaX, deltaY) {
                var hoveredTextarea = element.querySelector('textarea:hover');
                if (hoveredTextarea) {
                    var maxScrollTop = hoveredTextarea.scrollHeight - hoveredTextarea.clientHeight;
                    if (maxScrollTop > 0) {
                        if (!(hoveredTextarea.scrollTop === 0 && deltaY > 0) && !(hoveredTextarea.scrollTop === maxScrollTop && deltaY < 0)) {
                            return true;
                        }
                    }
                    var maxScrollLeft = hoveredTextarea.scrollLeft - hoveredTextarea.clientWidth;
                    if (maxScrollLeft > 0) {
                        if (!(hoveredTextarea.scrollLeft === 0 && deltaX < 0) && !(hoveredTextarea.scrollLeft === maxScrollLeft && deltaX > 0)) {
                            return true;
                        }
                    }
                }
                return false;
            }

            function mousewheelHandler(e) {
                if (!h.env.isWebKit && element.querySelector('select:focus')) {
                    return;
                }
                var delta = getDeltaFromEvent(e);
                var deltaX = delta[0];
                var deltaY = delta[1];
                if (shouldBeConsumedByTextarea(deltaX, deltaY)) {
                    return;
                }
                shouldPrevent = false;
                if (!i.settings.useBothWheelAxes) {
                    element.scrollTop = element.scrollTop - (deltaY * i.settings.wheelSpeed);
                    element.scrollLeft = element.scrollLeft + (deltaX * i.settings.wheelSpeed);
                } else if (i.scrollbarYActive && !i.scrollbarXActive) {
                    if (deltaY) {
                        element.scrollTop = element.scrollTop - (deltaY * i.settings.wheelSpeed);
                    } else {
                        element.scrollTop = element.scrollTop + (deltaX * i.settings.wheelSpeed);
                    }
                    shouldPrevent = true;
                } else if (i.scrollbarXActive && !i.scrollbarYActive) {
                    if (deltaX) {
                        element.scrollLeft = element.scrollLeft + (deltaX * i.settings.wheelSpeed);
                    } else {
                        element.scrollLeft = element.scrollLeft - (deltaY * i.settings.wheelSpeed);
                    }
                    shouldPrevent = true;
                }
                updateGeometry(element);
                shouldPrevent = (shouldPrevent || shouldPreventDefault(deltaX, deltaY));
                if (shouldPrevent) {
                    e.stopPropagation();
                    e.preventDefault();
                }
            }
            if (typeof window.onwheel !== "undefined") {
                i.event.bind(element, 'wheel', mousewheelHandler);
            } else if (typeof window.onmousewheel !== "undefined") {
                i.event.bind(element, 'mousewheel', mousewheelHandler);
            }
        }
        module.exports = function(element) {
            var i = instances.get(element);
            bindMouseWheelHandler(element, i);
        };
    }, {
        "../../lib/helper": 6,
        "../instances": 18,
        "../update-geometry": 19
    }],
    14: [function(require, module, exports) {
        'use strict';
        var instances = require('../instances'),
            updateGeometry = require('../update-geometry');

        function bindNativeScrollHandler(element, i) {
            i.event.bind(element, 'scroll', function() {
                updateGeometry(element);
            });
        }
        module.exports = function(element) {
            var i = instances.get(element);
            bindNativeScrollHandler(element, i);
        };
    }, {
        "../instances": 18,
        "../update-geometry": 19
    }],
    15: [function(require, module, exports) {
        'use strict';
        var h = require('../../lib/helper'),
            instances = require('../instances'),
            updateGeometry = require('../update-geometry');

        function bindSelectionHandler(element, i) {
            function getRangeNode() {
                var selection = window.getSelection ? window.getSelection() : document.getSelection ? document.getSelection() : '';
                if (selection.toString().length === 0) {
                    return null;
                } else {
                    return selection.getRangeAt(0).commonAncestorContainer;
                }
            }
            var scrollingLoop = null;
            var scrollDiff = {
                top: 0,
                left: 0
            };

            function startScrolling() {
                if (!scrollingLoop) {
                    scrollingLoop = setInterval(function() {
                        if (!instances.get(element)) {
                            clearInterval(scrollingLoop);
                            return;
                        }
                        element.scrollTop = element.scrollTop + scrollDiff.top;
                        element.scrollLeft = element.scrollLeft + scrollDiff.left;
                        updateGeometry(element);
                    }, 50);
                }
            }

            function stopScrolling() {
                if (scrollingLoop) {
                    clearInterval(scrollingLoop);
                    scrollingLoop = null;
                }
                h.stopScrolling(element);
            }
            var isSelected = false;
            i.event.bind(i.ownerDocument, 'selectionchange', function() {
                if (element.contains(getRangeNode())) {
                    isSelected = true;
                } else {
                    isSelected = false;
                    stopScrolling();
                }
            });
            i.event.bind(window, 'mouseup', function() {
                if (isSelected) {
                    isSelected = false;
                    stopScrolling();
                }
            });
            i.event.bind(window, 'mousemove', function(e) {
                if (isSelected) {
                    var mousePosition = {
                        x: e.pageX,
                        y: e.pageY
                    };
                    var containerGeometry = {
                        left: element.offsetLeft,
                        right: element.offsetLeft + element.offsetWidth,
                        top: element.offsetTop,
                        bottom: element.offsetTop + element.offsetHeight
                    };
                    if (mousePosition.x < containerGeometry.left + 3) {
                        scrollDiff.left = -5;
                        h.startScrolling(element, 'x');
                    } else if (mousePosition.x > containerGeometry.right - 3) {
                        scrollDiff.left = 5;
                        h.startScrolling(element, 'x');
                    } else {
                        scrollDiff.left = 0;
                    }
                    if (mousePosition.y < containerGeometry.top + 3) {
                        if (containerGeometry.top + 3 - mousePosition.y < 5) {
                            scrollDiff.top = -5;
                        } else {
                            scrollDiff.top = -20;
                        }
                        h.startScrolling(element, 'y');
                    } else if (mousePosition.y > containerGeometry.bottom - 3) {
                        if (mousePosition.y - containerGeometry.bottom + 3 < 5) {
                            scrollDiff.top = 5;
                        } else {
                            scrollDiff.top = 20;
                        }
                        h.startScrolling(element, 'y');
                    } else {
                        scrollDiff.top = 0;
                    }
                    if (scrollDiff.top === 0 && scrollDiff.left === 0) {
                        stopScrolling();
                    } else {
                        startScrolling();
                    }
                }
            });
        }
        module.exports = function(element) {
            var i = instances.get(element);
            bindSelectionHandler(element, i);
        };
    }, {
        "../../lib/helper": 6,
        "../instances": 18,
        "../update-geometry": 19
    }],
    16: [function(require, module, exports) {
        'use strict';
        var instances = require('../instances'),
            updateGeometry = require('../update-geometry');

        function bindTouchHandler(element, i, supportsTouch, supportsIePointer) {
            function shouldPreventDefault(deltaX, deltaY) {
                var scrollTop = element.scrollTop;
                var scrollLeft = element.scrollLeft;
                var magnitudeX = Math.abs(deltaX);
                var magnitudeY = Math.abs(deltaY);
                if (magnitudeY > magnitudeX) {
                    if (((deltaY < 0) && (scrollTop === i.contentHeight - i.containerHeight)) || ((deltaY > 0) && (scrollTop === 0))) {
                        return !i.settings.swipePropagation;
                    }
                } else if (magnitudeX > magnitudeY) {
                    if (((deltaX < 0) && (scrollLeft === i.contentWidth - i.containerWidth)) || ((deltaX > 0) && (scrollLeft === 0))) {
                        return !i.settings.swipePropagation;
                    }
                }
                return true;
            }

            function applyTouchMove(differenceX, differenceY) {
                element.scrollTop = element.scrollTop - differenceY;
                element.scrollLeft = element.scrollLeft - differenceX;
                updateGeometry(element);
            }
            var startOffset = {};
            var startTime = 0;
            var speed = {};
            var easingLoop = null;
            var inGlobalTouch = false;
            var inLocalTouch = false;

            function globalTouchStart() {
                inGlobalTouch = true;
            }

            function globalTouchEnd() {
                inGlobalTouch = false;
            }

            function getTouch(e) {
                if (e.targetTouches) {
                    return e.targetTouches[0];
                } else {
                    return e;
                }
            }

            function shouldHandle(e) {
                if (e.targetTouches && e.targetTouches.length === 1) {
                    return true;
                }
                if (e.pointerType && e.pointerType !== 'mouse' && e.pointerType !== e.MSPOINTER_TYPE_MOUSE) {
                    return true;
                }
                return false;
            }

            function touchStart(e) {
                if (shouldHandle(e)) {
                    inLocalTouch = true;
                    var touch = getTouch(e);
                    startOffset.pageX = touch.pageX;
                    startOffset.pageY = touch.pageY;
                    startTime = (new Date()).getTime();
                    if (easingLoop !== null) {
                        clearInterval(easingLoop);
                    }
                    e.stopPropagation();
                }
            }

            function touchMove(e) {
                if (!inGlobalTouch && inLocalTouch && shouldHandle(e)) {
                    var touch = getTouch(e);
                    var currentOffset = {
                        pageX: touch.pageX,
                        pageY: touch.pageY
                    };
                    var differenceX = currentOffset.pageX - startOffset.pageX;
                    var differenceY = currentOffset.pageY - startOffset.pageY;
                    applyTouchMove(differenceX, differenceY);
                    startOffset = currentOffset;
                    var currentTime = (new Date()).getTime();
                    var timeGap = currentTime - startTime;
                    if (timeGap > 0) {
                        speed.x = differenceX / timeGap;
                        speed.y = differenceY / timeGap;
                        startTime = currentTime;
                    }
                    if (shouldPreventDefault(differenceX, differenceY)) {
                        e.stopPropagation();
                        e.preventDefault();
                    }
                }
            }

            function touchEnd() {
                if (!inGlobalTouch && inLocalTouch) {
                    inLocalTouch = false;
                    clearInterval(easingLoop);
                    easingLoop = setInterval(function() {
                        if (!instances.get(element)) {
                            clearInterval(easingLoop);
                            return;
                        }
                        if (Math.abs(speed.x) < 0.01 && Math.abs(speed.y) < 0.01) {
                            clearInterval(easingLoop);
                            return;
                        }
                        applyTouchMove(speed.x * 30, speed.y * 30);
                        speed.x *= 0.8;
                        speed.y *= 0.8;
                    }, 10);
                }
            }
            if (supportsTouch) {
                i.event.bind(window, 'touchstart', globalTouchStart);
                i.event.bind(window, 'touchend', globalTouchEnd);
                i.event.bind(element, 'touchstart', touchStart);
                i.event.bind(element, 'touchmove', touchMove);
                i.event.bind(element, 'touchend', touchEnd);
            }
            if (supportsIePointer) {
                if (window.PointerEvent) {
                    i.event.bind(window, 'pointerdown', globalTouchStart);
                    i.event.bind(window, 'pointerup', globalTouchEnd);
                    i.event.bind(element, 'pointerdown', touchStart);
                    i.event.bind(element, 'pointermove', touchMove);
                    i.event.bind(element, 'pointerup', touchEnd);
                } else if (window.MSPointerEvent) {
                    i.event.bind(window, 'MSPointerDown', globalTouchStart);
                    i.event.bind(window, 'MSPointerUp', globalTouchEnd);
                    i.event.bind(element, 'MSPointerDown', touchStart);
                    i.event.bind(element, 'MSPointerMove', touchMove);
                    i.event.bind(element, 'MSPointerUp', touchEnd);
                }
            }
        }
        module.exports = function(element, supportsTouch, supportsIePointer) {
            var i = instances.get(element);
            bindTouchHandler(element, i, supportsTouch, supportsIePointer);
        };
    }, {
        "../instances": 18,
        "../update-geometry": 19
    }],
    17: [function(require, module, exports) {
        'use strict';
        var cls = require('../lib/class'),
            h = require('../lib/helper'),
            instances = require('./instances'),
            updateGeometry = require('./update-geometry');
        var clickRailHandler = require('./handler/click-rail'),
            dragScrollbarHandler = require('./handler/drag-scrollbar'),
            keyboardHandler = require('./handler/keyboard'),
            mouseWheelHandler = require('./handler/mouse-wheel'),
            nativeScrollHandler = require('./handler/native-scroll'),
            selectionHandler = require('./handler/selection'),
            touchHandler = require('./handler/touch');
        module.exports = function(element, userSettings) {
            userSettings = typeof userSettings === 'object' ? userSettings : {};
            cls.add(element, 'ps-container');
            var i = instances.add(element);
            i.settings = h.extend(i.settings, userSettings);
            clickRailHandler(element);
            dragScrollbarHandler(element);
            mouseWheelHandler(element);
            nativeScrollHandler(element);
            selectionHandler(element);
            if (h.env.supportsTouch || h.env.supportsIePointer) {
                touchHandler(element, h.env.supportsTouch, h.env.supportsIePointer);
            }
            if (i.settings.useKeyboard) {
                keyboardHandler(element);
            }
            updateGeometry(element);
        };
    }, {
        "../lib/class": 2,
        "../lib/helper": 6,
        "./handler/click-rail": 10,
        "./handler/drag-scrollbar": 11,
        "./handler/keyboard": 12,
        "./handler/mouse-wheel": 13,
        "./handler/native-scroll": 14,
        "./handler/selection": 15,
        "./handler/touch": 16,
        "./instances": 18,
        "./update-geometry": 19
    }],
    18: [function(require, module, exports) {
        'use strict';
        var d = require('../lib/dom'),
            defaultSettings = require('./default-setting'),
            EventManager = require('../lib/event-manager'),
            guid = require('../lib/guid'),
            h = require('../lib/helper');
        var instances = {};

        function Instance(element) {
            var i = this;
            i.settings = h.clone(defaultSettings);
            i.containerWidth = null;
            i.containerHeight = null;
            i.contentWidth = null;
            i.contentHeight = null;
            i.isRtl = d.css(element, 'direction') === "rtl";
            i.isNegativeScroll = (function() {
                var originalScrollLeft = element.scrollLeft;
                var result = null;
                element.scrollLeft = -1;
                result = element.scrollLeft < 0;
                element.scrollLeft = originalScrollLeft;
                return result;
            })();
            i.negativeScrollAdjustment = i.isNegativeScroll ? element.scrollWidth - element.clientWidth : 0;
            i.event = new EventManager();
            i.ownerDocument = element.ownerDocument || document;
            i.scrollbarXRail = d.appendTo(d.e('div', 'ps-scrollbar-x-rail'), element);
            i.scrollbarX = d.appendTo(d.e('div', 'ps-scrollbar-x'), i.scrollbarXRail);
            i.scrollbarXActive = null;
            i.scrollbarXWidth = null;
            i.scrollbarXLeft = null;
            i.scrollbarXBottom = h.toInt(d.css(i.scrollbarXRail, 'bottom'));
            i.isScrollbarXUsingBottom = i.scrollbarXBottom === i.scrollbarXBottom;
            i.scrollbarXTop = i.isScrollbarXUsingBottom ? null : h.toInt(d.css(i.scrollbarXRail, 'top'));
            i.railBorderXWidth = h.toInt(d.css(i.scrollbarXRail, 'borderLeftWidth')) + h.toInt(d.css(i.scrollbarXRail, 'borderRightWidth'));
            d.css(i.scrollbarXRail, 'display', 'block');
            i.railXMarginWidth = h.toInt(d.css(i.scrollbarXRail, 'marginLeft')) + h.toInt(d.css(i.scrollbarXRail, 'marginRight'));
            d.css(i.scrollbarXRail, 'display', '');
            i.railXWidth = null;
            i.railXRatio = null;
            i.scrollbarYRail = d.appendTo(d.e('div', 'ps-scrollbar-y-rail'), element);
            i.scrollbarY = d.appendTo(d.e('div', 'ps-scrollbar-y'), i.scrollbarYRail);
            i.scrollbarYActive = null;
            i.scrollbarYHeight = null;
            i.scrollbarYTop = null;
            i.scrollbarYRight = h.toInt(d.css(i.scrollbarYRail, 'right'));
            i.isScrollbarYUsingRight = i.scrollbarYRight === i.scrollbarYRight;
            i.scrollbarYLeft = i.isScrollbarYUsingRight ? null : h.toInt(d.css(i.scrollbarYRail, 'left'));
            i.scrollbarYOuterWidth = i.isRtl ? h.outerWidth(i.scrollbarY) : null;
            i.railBorderYWidth = h.toInt(d.css(i.scrollbarYRail, 'borderTopWidth')) + h.toInt(d.css(i.scrollbarYRail, 'borderBottomWidth'));
            d.css(i.scrollbarYRail, 'display', 'block');
            i.railYMarginHeight = h.toInt(d.css(i.scrollbarYRail, 'marginTop')) + h.toInt(d.css(i.scrollbarYRail, 'marginBottom'));
            d.css(i.scrollbarYRail, 'display', '');
            i.railYHeight = null;
            i.railYRatio = null;
        }

        function getId(element) {
            if (typeof element.dataset === 'undefined') {
                return element.getAttribute('data-ps-id');
            } else {
                return element.dataset.psId;
            }
        }

        function setId(element, id) {
            if (typeof element.dataset === 'undefined') {
                element.setAttribute('data-ps-id', id);
            } else {
                element.dataset.psId = id;
            }
        }

        function removeId(element) {
            if (typeof element.dataset === 'undefined') {
                element.removeAttribute('data-ps-id');
            } else {
                delete element.dataset.psId;
            }
        }
        exports.add = function(element) {
            var newId = guid();
            setId(element, newId);
            instances[newId] = new Instance(element);
            return instances[newId];
        };
        exports.remove = function(element) {
            delete instances[getId(element)];
            removeId(element);
        };
        exports.get = function(element) {
            return instances[getId(element)];
        };
    }, {
        "../lib/dom": 3,
        "../lib/event-manager": 4,
        "../lib/guid": 5,
        "../lib/helper": 6,
        "./default-setting": 8
    }],
    19: [function(require, module, exports) {
        'use strict';
        var cls = require('../lib/class'),
            d = require('../lib/dom'),
            h = require('../lib/helper'),
            instances = require('./instances');

        function getThumbSize(i, thumbSize) {
            if (i.settings.minScrollbarLength) {
                thumbSize = Math.max(thumbSize, i.settings.minScrollbarLength);
            }
            if (i.settings.maxScrollbarLength) {
                thumbSize = Math.min(thumbSize, i.settings.maxScrollbarLength);
            }
            return thumbSize;
        }

        function updateCss(element, i) {
            var xRailOffset = {
                width: i.railXWidth
            };
            if (i.isRtl) {
                xRailOffset.left = i.negativeScrollAdjustment + element.scrollLeft + i.containerWidth - i.contentWidth;
            } else {
                xRailOffset.left = element.scrollLeft;
            }
            if (i.isScrollbarXUsingBottom) {
                xRailOffset.bottom = i.scrollbarXBottom - element.scrollTop;
            } else {
                xRailOffset.top = i.scrollbarXTop + element.scrollTop;
            }
            d.css(i.scrollbarXRail, xRailOffset);
            var yRailOffset = {
                top: element.scrollTop,
                height: i.railYHeight
            };
            if (i.isScrollbarYUsingRight) {
                if (i.isRtl) {
                    yRailOffset.right = i.contentWidth - (i.negativeScrollAdjustment + element.scrollLeft) - i.scrollbarYRight - i.scrollbarYOuterWidth;
                } else {
                    yRailOffset.right = i.scrollbarYRight - element.scrollLeft;
                }
            } else {
                if (i.isRtl) {
                    yRailOffset.left = i.negativeScrollAdjustment + element.scrollLeft + i.containerWidth * 2 - i.contentWidth - i.scrollbarYLeft - i.scrollbarYOuterWidth;
                } else {
                    yRailOffset.left = i.scrollbarYLeft + element.scrollLeft;
                }
            }
            d.css(i.scrollbarYRail, yRailOffset);
            d.css(i.scrollbarX, {
                left: i.scrollbarXLeft,
                width: i.scrollbarXWidth - i.railBorderXWidth
            });
            d.css(i.scrollbarY, {
                top: i.scrollbarYTop,
                height: i.scrollbarYHeight - i.railBorderYWidth
            });
        }
        module.exports = function(element) {
            var i = instances.get(element);
            i.containerWidth = element.clientWidth;
            i.containerHeight = element.clientHeight;
            i.contentWidth = element.scrollWidth;
            i.contentHeight = element.scrollHeight;
            if (!element.contains(i.scrollbarXRail)) {
                d.appendTo(i.scrollbarXRail, element);
            }
            if (!element.contains(i.scrollbarYRail)) {
                d.appendTo(i.scrollbarYRail, element);
            }
            if (!i.settings.suppressScrollX && i.containerWidth + i.settings.scrollXMarginOffset < i.contentWidth) {
                i.scrollbarXActive = true;
                i.railXWidth = i.containerWidth - i.railXMarginWidth;
                i.railXRatio = i.containerWidth / i.railXWidth;
                i.scrollbarXWidth = getThumbSize(i, h.toInt(i.railXWidth * i.containerWidth / i.contentWidth));
                i.scrollbarXLeft = h.toInt((i.negativeScrollAdjustment + element.scrollLeft) * (i.railXWidth - i.scrollbarXWidth) / (i.contentWidth - i.containerWidth));
            } else {
                i.scrollbarXActive = false;
                i.scrollbarXWidth = 0;
                i.scrollbarXLeft = 0;
                element.scrollLeft = 0;
            }
            if (!i.settings.suppressScrollY && i.containerHeight + i.settings.scrollYMarginOffset < i.contentHeight) {
                i.scrollbarYActive = true;
                i.railYHeight = i.containerHeight - i.railYMarginHeight;
                i.railYRatio = i.containerHeight / i.railYHeight;
                i.scrollbarYHeight = getThumbSize(i, h.toInt(i.railYHeight * i.containerHeight / i.contentHeight));
                i.scrollbarYTop = h.toInt(element.scrollTop * (i.railYHeight - i.scrollbarYHeight) / (i.contentHeight - i.containerHeight));
            } else {
                i.scrollbarYActive = false;
                i.scrollbarYHeight = 0;
                i.scrollbarYTop = 0;
                element.scrollTop = 0;
            }
            if (i.scrollbarXLeft >= i.railXWidth - i.scrollbarXWidth) {
                i.scrollbarXLeft = i.railXWidth - i.scrollbarXWidth;
            }
            if (i.scrollbarYTop >= i.railYHeight - i.scrollbarYHeight) {
                i.scrollbarYTop = i.railYHeight - i.scrollbarYHeight;
            }
            updateCss(element, i);
            cls[i.scrollbarXActive ? 'add' : 'remove'](element, 'ps-active-x');
            cls[i.scrollbarYActive ? 'add' : 'remove'](element, 'ps-active-y');
        };
    }, {
        "../lib/class": 2,
        "../lib/dom": 3,
        "../lib/helper": 6,
        "./instances": 18
    }],
    20: [function(require, module, exports) {
        'use strict';
        var d = require('../lib/dom'),
            h = require('../lib/helper'),
            instances = require('./instances'),
            updateGeometry = require('./update-geometry');
        module.exports = function(element) {
            var i = instances.get(element);
            if (!i) {
                return;
            }
            i.negativeScrollAdjustment = i.isNegativeScroll ? element.scrollWidth - element.clientWidth : 0;
            d.css(i.scrollbarXRail, 'display', 'block');
            d.css(i.scrollbarYRail, 'display', 'block');
            i.railXMarginWidth = h.toInt(d.css(i.scrollbarXRail, 'marginLeft')) + h.toInt(d.css(i.scrollbarXRail, 'marginRight'));
            i.railYMarginHeight = h.toInt(d.css(i.scrollbarYRail, 'marginTop')) + h.toInt(d.css(i.scrollbarYRail, 'marginBottom'));
            d.css(i.scrollbarXRail, 'display', 'none');
            d.css(i.scrollbarYRail, 'display', 'none');
            updateGeometry(element);
            d.css(i.scrollbarXRail, 'display', '');
            d.css(i.scrollbarYRail, 'display', '');
        };
    }, {
        "../lib/dom": 3,
        "../lib/helper": 6,
        "./instances": 18,
        "./update-geometry": 19
    }]
}, {}, [1]);
/*! jQuery Validation Plugin - v1.13.0 - 7/1/2014
 * http://jqueryvalidation.org/
 * Copyright (c) 2014 JÃƒÂ¶rn Zaefferer; Licensed MIT */
! function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery)
}(function(a) {
    a.extend(a.fn, {
        validate: function(b) {
            if (!this.length) return void(b && b.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing."));
            var c = a.data(this[0], "validator");
            return c ? c : (this.attr("novalidate", "novalidate"), c = new a.validator(b, this[0]), a.data(this[0], "validator", c), c.settings.onsubmit && (this.validateDelegate(":submit", "click", function(b) {
                c.settings.submitHandler && (c.submitButton = b.target), a(b.target).hasClass("cancel") && (c.cancelSubmit = !0), void 0 !== a(b.target).attr("formnovalidate") && (c.cancelSubmit = !0)
            }), this.submit(function(b) {
                function d() {
                    var d;
                    return c.settings.submitHandler ? (c.submitButton && (d = a("<input type='hidden'/>").attr("name", c.submitButton.name).val(a(c.submitButton).val()).appendTo(c.currentForm)), c.settings.submitHandler.call(c, c.currentForm, b), c.submitButton && d.remove(), !1) : !0
                }
                return c.settings.debug && b.preventDefault(), c.cancelSubmit ? (c.cancelSubmit = !1, d()) : c.form() ? c.pendingRequest ? (c.formSubmitted = !0, !1) : d() : (c.focusInvalid(), !1)
            })), c)
        },
        valid: function() {
            var b, c;
            return a(this[0]).is("form") ? b = this.validate().form() : (b = !0, c = a(this[0].form).validate(), this.each(function() {
                b = c.element(this) && b
            })), b
        },
        removeAttrs: function(b) {
            var c = {},
                d = this;
            return a.each(b.split(/\s/), function(a, b) {
                c[b] = d.attr(b), d.removeAttr(b)
            }), c
        },
        rules: function(b, c) {
            var d, e, f, g, h, i, j = this[0];
            if (b) switch (d = a.data(j.form, "validator").settings, e = d.rules, f = a.validator.staticRules(j), b) {
                case "add":
                    a.extend(f, a.validator.normalizeRule(c)), delete f.messages, e[j.name] = f, c.messages && (d.messages[j.name] = a.extend(d.messages[j.name], c.messages));
                    break;
                case "remove":
                    return c ? (i = {}, a.each(c.split(/\s/), function(b, c) {
                        i[c] = f[c], delete f[c], "required" === c && a(j).removeAttr("aria-required")
                    }), i) : (delete e[j.name], f)
            }
            return g = a.validator.normalizeRules(a.extend({}, a.validator.classRules(j), a.validator.attributeRules(j), a.validator.dataRules(j), a.validator.staticRules(j)), j), g.required && (h = g.required, delete g.required, g = a.extend({
                required: h
            }, g), a(j).attr("aria-required", "true")), g.remote && (h = g.remote, delete g.remote, g = a.extend(g, {
                remote: h
            })), g
        }
    }), a.extend(a.expr[":"], {
        blank: function(b) {
            return !a.trim("" + a(b).val())
        },
        filled: function(b) {
            return !!a.trim("" + a(b).val())
        },
        unchecked: function(b) {
            return !a(b).prop("checked")
        }
    }), a.validator = function(b, c) {
        this.settings = a.extend(!0, {}, a.validator.defaults, b), this.currentForm = c, this.init()
    }, a.validator.format = function(b, c) {
        return 1 === arguments.length ? function() {
            var c = a.makeArray(arguments);
            return c.unshift(b), a.validator.format.apply(this, c)
        } : (arguments.length > 2 && c.constructor !== Array && (c = a.makeArray(arguments).slice(1)), c.constructor !== Array && (c = [c]), a.each(c, function(a, c) {
            b = b.replace(new RegExp("\\{" + a + "\\}", "g"), function() {
                return c
            })
        }), b)
    }, a.extend(a.validator, {
        defaults: {
            messages: {},
            groups: {},
            rules: {},
            errorClass: "error",
            validClass: "valid",
            errorElement: "label",
            focusInvalid: !0,
            errorContainer: a([]),
            errorLabelContainer: a([]),
            onsubmit: !0,
            ignore: ":hidden",
            ignoreTitle: !1,
            onfocusin: function(a) {
                this.lastActive = a, this.settings.focusCleanup && !this.blockFocusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, a, this.settings.errorClass, this.settings.validClass), this.hideThese(this.errorsFor(a)))
            },
            onfocusout: function(a) {
                this.checkable(a) || !(a.name in this.submitted) && this.optional(a) || this.element(a)
            },
            onkeyup: function(a, b) {
                (9 !== b.which || "" !== this.elementValue(a)) && (a.name in this.submitted || a === this.lastElement) && this.element(a)
            },
            onclick: function(a) {
                a.name in this.submitted ? this.element(a) : a.parentNode.name in this.submitted && this.element(a.parentNode)
            },
            highlight: function(b, c, d) {
                "radio" === b.type ? this.findByName(b.name).addClass(c).removeClass(d) : a(b).addClass(c).removeClass(d)
            },
            unhighlight: function(b, c, d) {
                "radio" === b.type ? this.findByName(b.name).removeClass(c).addClass(d) : a(b).removeClass(c).addClass(d)
            }
        },
        setDefaults: function(b) {
            a.extend(a.validator.defaults, b)
        },
        messages: {
            required: "This field is required.",
            remote: "Please fix this field.",
            email: "Please enter a valid email address.",
            url: "Please enter a valid URL.",
            date: "Please enter a valid date.",
            dateISO: "Please enter a valid date ( ISO ).",
            number: "Please enter a valid number.",
            digits: "Please enter only digits.",
            creditcard: "Please enter a valid credit card number.",
            equalTo: "Please enter the same value again.",
            maxlength: a.validator.format("Please enter no more than {0} characters."),
            minlength: a.validator.format("Please enter at least {0} characters."),
            rangelength: a.validator.format("Please enter a value between {0} and {1} characters long."),
            range: a.validator.format("Please enter a value between {0} and {1}."),
            max: a.validator.format("Please enter a value less than or equal to {0}."),
            min: a.validator.format("Please enter a value greater than or equal to {0}.")
        },
        autoCreateRanges: !1,
        prototype: {
            init: function() {
                function b(b) {
                    var c = a.data(this[0].form, "validator"),
                        d = "on" + b.type.replace(/^validate/, ""),
                        e = c.settings;
                    e[d] && !this.is(e.ignore) && e[d].call(c, this[0], b)
                }
                this.labelContainer = a(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || a(this.currentForm), this.containers = a(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
                var c, d = this.groups = {};
                a.each(this.settings.groups, function(b, c) {
                    "string" == typeof c && (c = c.split(/\s/)), a.each(c, function(a, c) {
                        d[c] = b
                    })
                }), c = this.settings.rules, a.each(c, function(b, d) {
                    c[b] = a.validator.normalizeRule(d)
                }), a(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox']", "focusin focusout keyup", b).validateDelegate("select, option, [type='radio'], [type='checkbox']", "click", b), this.settings.invalidHandler && a(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler), a(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required", "true")
            },
            form: function() {
                return this.checkForm(), a.extend(this.submitted, this.errorMap), this.invalid = a.extend({}, this.errorMap), this.valid() || a(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
            },
            checkForm: function() {
                this.prepareForm();
                for (var a = 0, b = this.currentElements = this.elements(); b[a]; a++) this.check(b[a]);
                return this.valid()
            },
            element: function(b) {
                var c = this.clean(b),
                    d = this.validationTargetFor(c),
                    e = !0;
                return this.lastElement = d, void 0 === d ? delete this.invalid[c.name] : (this.prepareElement(d), this.currentElements = a(d), e = this.check(d) !== !1, e ? delete this.invalid[d.name] : this.invalid[d.name] = !0), a(b).attr("aria-invalid", !e), this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), e
            },
            showErrors: function(b) {
                if (b) {
                    a.extend(this.errorMap, b), this.errorList = [];
                    for (var c in b) this.errorList.push({
                        message: b[c],
                        element: this.findByName(c)[0]
                    });
                    this.successList = a.grep(this.successList, function(a) {
                        return !(a.name in b)
                    })
                }
                this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
            },
            resetForm: function() {
                a.fn.resetForm && a(this.currentForm).resetForm(), this.submitted = {}, this.lastElement = null, this.prepareForm(), this.hideErrors(), this.elements().removeClass(this.settings.errorClass).removeData("previousValue").removeAttr("aria-invalid")
            },
            numberOfInvalids: function() {
                return this.objectLength(this.invalid)
            },
            objectLength: function(a) {
                var b, c = 0;
                for (b in a) c++;
                return c
            },
            hideErrors: function() {
                this.hideThese(this.toHide)
            },
            hideThese: function(a) {
                a.not(this.containers).text(""), this.addWrapper(a).hide()
            },
            valid: function() {
                return 0 === this.size()
            },
            size: function() {
                return this.errorList.length
            },
            focusInvalid: function() {
                if (this.settings.focusInvalid) try {
                    a(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
                } catch (b) {}
            },
            findLastActive: function() {
                var b = this.lastActive;
                return b && 1 === a.grep(this.errorList, function(a) {
                    return a.element.name === b.name
                }).length && b
            },
            elements: function() {
                var b = this,
                    c = {};
                return a(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function() {
                    return !this.name && b.settings.debug && window.console && console.error("%o has no name assigned", this), this.name in c || !b.objectLength(a(this).rules()) ? !1 : (c[this.name] = !0, !0)
                })
            },
            clean: function(b) {
                return a(b)[0]
            },
            errors: function() {
                var b = this.settings.errorClass.split(" ").join(".");
                return a(this.settings.errorElement + "." + b, this.errorContext)
            },
            reset: function() {
                this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = a([]), this.toHide = a([]), this.currentElements = a([])
            },
            prepareForm: function() {
                this.reset(), this.toHide = this.errors().add(this.containers)
            },
            prepareElement: function(a) {
                this.reset(), this.toHide = this.errorsFor(a)
            },
            elementValue: function(b) {
                var c, d = a(b),
                    e = b.type;
                return "radio" === e || "checkbox" === e ? a("input[name='" + b.name + "']:checked").val() : "number" === e && "undefined" != typeof b.validity ? b.validity.badInput ? !1 : d.val() : (c = d.val(), "string" == typeof c ? c.replace(/\r/g, "") : c)
            },
            check: function(b) {
                b = this.validationTargetFor(this.clean(b));
                var c, d, e, f = a(b).rules(),
                    g = a.map(f, function(a, b) {
                        return b
                    }).length,
                    h = !1,
                    i = this.elementValue(b);
                for (d in f) {
                    e = {
                        method: d,
                        parameters: f[d]
                    };
                    try {
                        if (c = a.validator.methods[d].call(this, i, b, e.parameters), "dependency-mismatch" === c && 1 === g) {
                            h = !0;
                            continue
                        }
                        if (h = !1, "pending" === c) return void(this.toHide = this.toHide.not(this.errorsFor(b)));
                        if (!c) return this.formatAndAdd(b, e), !1
                    } catch (j) {
                        throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + b.id + ", check the '" + e.method + "' method.", j), j
                    }
                }
                if (!h) return this.objectLength(f) && this.successList.push(b), !0
            },
            customDataMessage: function(b, c) {
                return a(b).data("msg" + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()) || a(b).data("msg")
            },
            customMessage: function(a, b) {
                var c = this.settings.messages[a];
                return c && (c.constructor === String ? c : c[b])
            },
            findDefined: function() {
                for (var a = 0; a < arguments.length; a++)
                    if (void 0 !== arguments[a]) return arguments[a];
                return void 0
            },
            defaultMessage: function(b, c) {
                return this.findDefined(this.customMessage(b.name, c), this.customDataMessage(b, c), !this.settings.ignoreTitle && b.title || void 0, a.validator.messages[c], "<strong>Warning: No message defined for " + b.name + "</strong>")
            },
            formatAndAdd: function(b, c) {
                var d = this.defaultMessage(b, c.method),
                    e = /\$?\{(\d+)\}/g;
                "function" == typeof d ? d = d.call(this, c.parameters, b) : e.test(d) && (d = a.validator.format(d.replace(e, "{$1}"), c.parameters)), this.errorList.push({
                    message: d,
                    element: b,
                    method: c.method
                }), this.errorMap[b.name] = d, this.submitted[b.name] = d
            },
            addWrapper: function(a) {
                return this.settings.wrapper && (a = a.add(a.parent(this.settings.wrapper))), a
            },
            defaultShowErrors: function() {
                var a, b, c;
                for (a = 0; this.errorList[a]; a++) c = this.errorList[a], this.settings.highlight && this.settings.highlight.call(this, c.element, this.settings.errorClass, this.settings.validClass), this.showLabel(c.element, c.message);
                if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)
                    for (a = 0; this.successList[a]; a++) this.showLabel(this.successList[a]);
                if (this.settings.unhighlight)
                    for (a = 0, b = this.validElements(); b[a]; a++) this.settings.unhighlight.call(this, b[a], this.settings.errorClass, this.settings.validClass);
                this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
            },
            validElements: function() {
                return this.currentElements.not(this.invalidElements())
            },
            invalidElements: function() {
                return a(this.errorList).map(function() {
                    return this.element
                })
            },
            showLabel: function(b, c) {
                var d, e, f, g = this.errorsFor(b),
                    h = this.idOrName(b),
                    i = a(b).attr("aria-describedby");
                g.length ? (g.removeClass(this.settings.validClass).addClass(this.settings.errorClass), g.html(c)) : (g = a("<" + this.settings.errorElement + ">").attr("id", h + "-error").addClass(this.settings.errorClass).html(c || ""), d = g, this.settings.wrapper && (d = g.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.length ? this.labelContainer.append(d) : this.settings.errorPlacement ? this.settings.errorPlacement(d, a(b)) : d.insertAfter(b), g.is("label") ? g.attr("for", h) : 0 === g.parents("label[for='" + h + "']").length && (f = g.attr("id"), i ? i.match(new RegExp("\b" + f + "\b")) || (i += " " + f) : i = f, a(b).attr("aria-describedby", i), e = this.groups[b.name], e && a.each(this.groups, function(b, c) {
                    c === e && a("[name='" + b + "']", this.currentForm).attr("aria-describedby", g.attr("id"))
                }))), !c && this.settings.success && (g.text(""), "string" == typeof this.settings.success ? g.addClass(this.settings.success) : this.settings.success(g, b)), this.toShow = this.toShow.add(g)
            },
            errorsFor: function(b) {
                var c = this.idOrName(b),
                    d = a(b).attr("aria-describedby"),
                    e = "label[for='" + c + "'], label[for='" + c + "'] *";
                return d && (e = e + ", #" + d.replace(/\s+/g, ", #")), this.errors().filter(e)
            },
            idOrName: function(a) {
                return this.groups[a.name] || (this.checkable(a) ? a.name : a.id || a.name)
            },
            validationTargetFor: function(a) {
                return this.checkable(a) && (a = this.findByName(a.name).not(this.settings.ignore)[0]), a
            },
            checkable: function(a) {
                return /radio|checkbox/i.test(a.type)
            },
            findByName: function(b) {
                return a(this.currentForm).find("[name='" + b + "']")
            },
            getLength: function(b, c) {
                switch (c.nodeName.toLowerCase()) {
                    case "select":
                        return a("option:selected", c).length;
                    case "input":
                        if (this.checkable(c)) return this.findByName(c.name).filter(":checked").length
                }
                return b.length
            },
            depend: function(a, b) {
                return this.dependTypes[typeof a] ? this.dependTypes[typeof a](a, b) : !0
            },
            dependTypes: {
                "boolean": function(a) {
                    return a
                },
                string: function(b, c) {
                    return !!a(b, c.form).length
                },
                "function": function(a, b) {
                    return a(b)
                }
            },
            optional: function(b) {
                var c = this.elementValue(b);
                return !a.validator.methods.required.call(this, c, b) && "dependency-mismatch"
            },
            startRequest: function(a) {
                this.pending[a.name] || (this.pendingRequest++, this.pending[a.name] = !0)
            },
            stopRequest: function(b, c) {
                this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[b.name], c && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (a(this.currentForm).submit(), this.formSubmitted = !1) : !c && 0 === this.pendingRequest && this.formSubmitted && (a(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
            },
            previousValue: function(b) {
                return a.data(b, "previousValue") || a.data(b, "previousValue", {
                    old: null,
                    valid: !0,
                    message: this.defaultMessage(b, "remote")
                })
            }
        },
        classRuleSettings: {
            required: {
                required: !0
            },
            email: {
                email: !0
            },
            url: {
                url: !0
            },
            date: {
                date: !0
            },
            dateISO: {
                dateISO: !0
            },
            number: {
                number: !0
            },
            digits: {
                digits: !0
            },
            creditcard: {
                creditcard: !0
            }
        },
        addClassRules: function(b, c) {
            b.constructor === String ? this.classRuleSettings[b] = c : a.extend(this.classRuleSettings, b)
        },
        classRules: function(b) {
            var c = {},
                d = a(b).attr("class");
            return d && a.each(d.split(" "), function() {
                this in a.validator.classRuleSettings && a.extend(c, a.validator.classRuleSettings[this])
            }), c
        },
        attributeRules: function(b) {
            var c, d, e = {},
                f = a(b),
                g = b.getAttribute("type");
            for (c in a.validator.methods) "required" === c ? (d = b.getAttribute(c), "" === d && (d = !0), d = !!d) : d = f.attr(c), /min|max/.test(c) && (null === g || /number|range|text/.test(g)) && (d = Number(d)), d || 0 === d ? e[c] = d : g === c && "range" !== g && (e[c] = !0);
            return e.maxlength && /-1|2147483647|524288/.test(e.maxlength) && delete e.maxlength, e
        },
        dataRules: function(b) {
            var c, d, e = {},
                f = a(b);
            for (c in a.validator.methods) d = f.data("rule" + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()), void 0 !== d && (e[c] = d);
            return e
        },
        staticRules: function(b) {
            var c = {},
                d = a.data(b.form, "validator");
            return d.settings.rules && (c = a.validator.normalizeRule(d.settings.rules[b.name]) || {}), c
        },
        normalizeRules: function(b, c) {
            return a.each(b, function(d, e) {
                if (e === !1) return void delete b[d];
                if (e.param || e.depends) {
                    var f = !0;
                    switch (typeof e.depends) {
                        case "string":
                            f = !!a(e.depends, c.form).length;
                            break;
                        case "function":
                            f = e.depends.call(c, c)
                    }
                    f ? b[d] = void 0 !== e.param ? e.param : !0 : delete b[d]
                }
            }), a.each(b, function(d, e) {
                b[d] = a.isFunction(e) ? e(c) : e
            }), a.each(["minlength", "maxlength"], function() {
                b[this] && (b[this] = Number(b[this]))
            }), a.each(["rangelength", "range"], function() {
                var c;
                b[this] && (a.isArray(b[this]) ? b[this] = [Number(b[this][0]), Number(b[this][1])] : "string" == typeof b[this] && (c = b[this].replace(/[\[\]]/g, "").split(/[\s,]+/), b[this] = [Number(c[0]), Number(c[1])]))
            }), a.validator.autoCreateRanges && (b.min && b.max && (b.range = [b.min, b.max], delete b.min, delete b.max), b.minlength && b.maxlength && (b.rangelength = [b.minlength, b.maxlength], delete b.minlength, delete b.maxlength)), b
        },
        normalizeRule: function(b) {
            if ("string" == typeof b) {
                var c = {};
                a.each(b.split(/\s/), function() {
                    c[this] = !0
                }), b = c
            }
            return b
        },
        addMethod: function(b, c, d) {
            a.validator.methods[b] = c, a.validator.messages[b] = void 0 !== d ? d : a.validator.messages[b], c.length < 3 && a.validator.addClassRules(b, a.validator.normalizeRule(b))
        },
        methods: {
            required: function(b, c, d) {
                if (!this.depend(d, c)) return "dependency-mismatch";
                if ("select" === c.nodeName.toLowerCase()) {
                    var e = a(c).val();
                    return e && e.length > 0
                }
                return this.checkable(c) ? this.getLength(b, c) > 0 : a.trim(b).length > 0
            },
            email: function(a, b) {
                return this.optional(b) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(a)
            },
            url: function(a, b) {
                return this.optional(b) || /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(a)
            },
            date: function(a, b) {
                return this.optional(b) || !/Invalid|NaN/.test(new Date(a).toString())
            },
            dateISO: function(a, b) {
                return this.optional(b) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(a)
            },
            number: function(a, b) {
                return this.optional(b) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a)
            },
            digits: function(a, b) {
                return this.optional(b) || /^\d+$/.test(a)
            },
            creditcard: function(a, b) {
                if (this.optional(b)) return "dependency-mismatch";
                if (/[^0-9 \-]+/.test(a)) return !1;
                var c, d, e = 0,
                    f = 0,
                    g = !1;
                if (a = a.replace(/\D/g, ""), a.length < 13 || a.length > 19) return !1;
                for (c = a.length - 1; c >= 0; c--) d = a.charAt(c), f = parseInt(d, 10), g && (f *= 2) > 9 && (f -= 9), e += f, g = !g;
                return e % 10 === 0
            },
            minlength: function(b, c, d) {
                var e = a.isArray(b) ? b.length : this.getLength(a.trim(b), c);
                return this.optional(c) || e >= d
            },
            maxlength: function(b, c, d) {
                var e = a.isArray(b) ? b.length : this.getLength(a.trim(b), c);
                return this.optional(c) || d >= e
            },
            rangelength: function(b, c, d) {
                var e = a.isArray(b) ? b.length : this.getLength(a.trim(b), c);
                return this.optional(c) || e >= d[0] && e <= d[1]
            },
            min: function(a, b, c) {
                return this.optional(b) || a >= c
            },
            max: function(a, b, c) {
                return this.optional(b) || c >= a
            },
            range: function(a, b, c) {
                return this.optional(b) || a >= c[0] && a <= c[1]
            },
            equalTo: function(b, c, d) {
                var e = a(d);
                return this.settings.onfocusout && e.unbind(".validate-equalTo").bind("blur.validate-equalTo", function() {
                    a(c).valid()
                }), b === e.val()
            },
            remote: function(b, c, d) {
                if (this.optional(c)) return "dependency-mismatch";
                var e, f, g = this.previousValue(c);
                return this.settings.messages[c.name] || (this.settings.messages[c.name] = {}), g.originalMessage = this.settings.messages[c.name].remote, this.settings.messages[c.name].remote = g.message, d = "string" == typeof d && {
                    url: d
                } || d, g.old === b ? g.valid : (g.old = b, e = this, this.startRequest(c), f = {}, f[c.name] = b, a.ajax(a.extend(!0, {
                    url: d,
                    mode: "abort",
                    port: "validate" + c.name,
                    dataType: "json",
                    data: f,
                    context: e.currentForm,
                    success: function(d) {
                        var f, h, i, j = d === !0 || "true" === d;
                        e.settings.messages[c.name].remote = g.originalMessage, j ? (i = e.formSubmitted, e.prepareElement(c), e.formSubmitted = i, e.successList.push(c), delete e.invalid[c.name], e.showErrors()) : (f = {}, h = d || e.defaultMessage(c, "remote"), f[c.name] = g.message = a.isFunction(h) ? h(b) : h, e.invalid[c.name] = !0, e.showErrors(f)), g.valid = j, e.stopRequest(c, j)
                    }
                }, d)), "pending")
            }
        }
    }), a.format = function() {
        throw "$.format has been deprecated. Please use $.validator.format instead."
    };
    var b, c = {};
    a.ajaxPrefilter ? a.ajaxPrefilter(function(a, b, d) {
        var e = a.port;
        "abort" === a.mode && (c[e] && c[e].abort(), c[e] = d)
    }) : (b = a.ajax, a.ajax = function(d) {
        var e = ("mode" in d ? d : a.ajaxSettings).mode,
            f = ("port" in d ? d : a.ajaxSettings).port;
        return "abort" === e ? (c[f] && c[f].abort(), c[f] = b.apply(this, arguments), c[f]) : b.apply(this, arguments)
    }), a.extend(a.fn, {
        validateDelegate: function(b, c, d) {
            return this.bind(c, function(c) {
                var e = a(c.target);
                return e.is(b) ? d.apply(e, arguments) : void 0
            })
        }
    })
});
/*! jQuery Validation Plugin - v1.13.0 - 7/1/2014
 * http://jqueryvalidation.org/
 * Copyright (c) 2014 JÃƒÂ¶rn Zaefferer; Licensed MIT */
! function(a) {
    "function" == typeof define && define.amd ? define(["jquery", "./jquery.validate.min"], a) : a(jQuery)
}(function(a) {
    ! function() {
        function b(a) {
            return a.replace(/<.[^<>]*?>/g, " ").replace(/&nbsp;|&#160;/gi, " ").replace(/[.(),;:!?%#$'\"_+=\/\-Ã¢â‚¬Å“Ã¢â‚¬ÂÃ¢â‚¬â„¢]*/g, "")
        }
        a.validator.addMethod("maxWords", function(a, c, d) {
            return this.optional(c) || b(a).match(/\b\w+\b/g).length <= d
        }, a.validator.format("Please enter {0} words or less.")), a.validator.addMethod("minWords", function(a, c, d) {
            return this.optional(c) || b(a).match(/\b\w+\b/g).length >= d
        }, a.validator.format("Please enter at least {0} words.")), a.validator.addMethod("rangeWords", function(a, c, d) {
            var e = b(a),
                f = /\b\w+\b/g;
            return this.optional(c) || e.match(f).length >= d[0] && e.match(f).length <= d[1]
        }, a.validator.format("Please enter between {0} and {1} words."))
    }(), a.validator.addMethod("accept", function(b, c, d) {
        var e, f, g = "string" == typeof d ? d.replace(/\s/g, "").replace(/,/g, "|") : "image/*",
            h = this.optional(c);
        if (h) return h;
        if ("file" === a(c).attr("type") && (g = g.replace(/\*/g, ".*"), c.files && c.files.length))
            for (e = 0; e < c.files.length; e++)
                if (f = c.files[e], !f.type.match(new RegExp(".?(" + g + ")$", "i"))) return !1;
        return !0
    }, a.validator.format("Please enter a value with a valid mimetype.")), a.validator.addMethod("alphanumeric", function(a, b) {
        return this.optional(b) || /^\w+$/i.test(a)
    }, "Letters, numbers, and underscores only please"), a.validator.addMethod("bankaccountNL", function(a, b) {
        if (this.optional(b)) return !0;
        if (!/^[0-9]{9}|([0-9]{2} ){3}[0-9]{3}$/.test(a)) return !1;
        var c, d, e, f = a.replace(/ /g, ""),
            g = 0,
            h = f.length;
        for (c = 0; h > c; c++) d = h - c, e = f.substring(c, c + 1), g += d * e;
        return g % 11 === 0
    }, "Please specify a valid bank account number"), a.validator.addMethod("bankorgiroaccountNL", function(b, c) {
        return this.optional(c) || a.validator.methods.bankaccountNL.call(this, b, c) || a.validator.methods.giroaccountNL.call(this, b, c)
    }, "Please specify a valid bank or giro account number"), a.validator.addMethod("bic", function(a, b) {
        return this.optional(b) || /^([A-Z]{6}[A-Z2-9][A-NP-Z1-2])(X{3}|[A-WY-Z0-9][A-Z0-9]{2})?$/.test(a)
    }, "Please specify a valid BIC code"), a.validator.addMethod("cifES", function(a) {
        "use strict";
        var b, c, d, e, f, g, h = [];
        if (a = a.toUpperCase(), !a.match("((^[A-Z]{1}[0-9]{7}[A-Z0-9]{1}$|^[T]{1}[A-Z0-9]{8}$)|^[0-9]{8}[A-Z]{1}$)")) return !1;
        for (d = 0; 9 > d; d++) h[d] = parseInt(a.charAt(d), 10);
        for (c = h[2] + h[4] + h[6], e = 1; 8 > e; e += 2) f = (2 * h[e]).toString(), g = f.charAt(1), c += parseInt(f.charAt(0), 10) + ("" === g ? 0 : parseInt(g, 10));
        return /^[ABCDEFGHJNPQRSUVW]{1}/.test(a) ? (c += "", b = 10 - parseInt(c.charAt(c.length - 1), 10), a += b, h[8].toString() === String.fromCharCode(64 + b) || h[8].toString() === a.charAt(a.length - 1)) : !1
    }, "Please specify a valid CIF number."), a.validator.addMethod("creditcardtypes", function(a, b, c) {
        if (/[^0-9\-]+/.test(a)) return !1;
        a = a.replace(/\D/g, "");
        var d = 0;
        return c.mastercard && (d |= 1), c.visa && (d |= 2), c.amex && (d |= 4), c.dinersclub && (d |= 8), c.enroute && (d |= 16), c.discover && (d |= 32), c.jcb && (d |= 64), c.unknown && (d |= 128), c.all && (d = 255), 1 & d && /^(5[12345])/.test(a) ? 16 === a.length : 2 & d && /^(4)/.test(a) ? 16 === a.length : 4 & d && /^(3[47])/.test(a) ? 15 === a.length : 8 & d && /^(3(0[012345]|[68]))/.test(a) ? 14 === a.length : 16 & d && /^(2(014|149))/.test(a) ? 15 === a.length : 32 & d && /^(6011)/.test(a) ? 16 === a.length : 64 & d && /^(3)/.test(a) ? 16 === a.length : 64 & d && /^(2131|1800)/.test(a) ? 15 === a.length : 128 & d ? !0 : !1
    }, "Please enter a valid credit card number."), a.validator.addMethod("currency", function(a, b, c) {
        var d, e = "string" == typeof c,
            f = e ? c : c[0],
            g = e ? !0 : c[1];
        return f = f.replace(/,/g, ""), f = g ? f + "]" : f + "]?", d = "^[" + f + "([1-9]{1}[0-9]{0,2}(\\,[0-9]{3})*(\\.[0-9]{0,2})?|[1-9]{1}[0-9]{0,}(\\.[0-9]{0,2})?|0(\\.[0-9]{0,2})?|(\\.[0-9]{1,2})?)$", d = new RegExp(d), this.optional(b) || d.test(a)
    }, "Please specify a valid currency"), a.validator.addMethod("dateFA", function(a, b) {
        return this.optional(b) || /^[1-4]\d{3}\/((0?[1-6]\/((3[0-1])|([1-2][0-9])|(0?[1-9])))|((1[0-2]|(0?[7-9]))\/(30|([1-2][0-9])|(0?[1-9]))))$/.test(a)
    }, "Please enter a correct date"), a.validator.addMethod("dateITA", function(a, b) {
        var c, d, e, f, g, h = !1,
            i = /^\d{1,2}\/\d{1,2}\/\d{4}$/;
        return i.test(a) ? (c = a.split("/"), d = parseInt(c[0], 10), e = parseInt(c[1], 10), f = parseInt(c[2], 10), g = new Date(f, e - 1, d, 12, 0, 0, 0), h = g.getUTCFullYear() === f && g.getUTCMonth() === e - 1 && g.getUTCDate() === d ? !0 : !1) : h = !1, this.optional(b) || h
    }, "Please enter a correct date"), a.validator.addMethod("dateNL", function(a, b) {
        return this.optional(b) || /^(0?[1-9]|[12]\d|3[01])[\.\/\-](0?[1-9]|1[012])[\.\/\-]([12]\d)?(\d\d)$/.test(a)
    }, "Please enter a correct date"), a.validator.addMethod("extension", function(a, b, c) {
        return c = "string" == typeof c ? c.replace(/,/g, "|") : "png|jpe?g|gif", this.optional(b) || a.match(new RegExp(".(" + c + ")$", "i"))
    }, a.validator.format("Please enter a value with a valid extension.")), a.validator.addMethod("giroaccountNL", function(a, b) {
        return this.optional(b) || /^[0-9]{1,7}$/.test(a)
    }, "Please specify a valid giro account number"), a.validator.addMethod("iban", function(a, b) {
        if (this.optional(b)) return !0;
        var c, d, e, f, g, h, i, j, k, l = a.replace(/ /g, "").toUpperCase(),
            m = "",
            n = !0,
            o = "",
            p = "";
        if (!/^([a-zA-Z0-9]{4} ){2,8}[a-zA-Z0-9]{1,4}|[a-zA-Z0-9]{12,34}$/.test(l)) return !1;
        if (c = l.substring(0, 2), h = {
            AL: "\\d{8}[\\dA-Z]{16}",
            AD: "\\d{8}[\\dA-Z]{12}",
            AT: "\\d{16}",
            AZ: "[\\dA-Z]{4}\\d{20}",
            BE: "\\d{12}",
            BH: "[A-Z]{4}[\\dA-Z]{14}",
            BA: "\\d{16}",
            BR: "\\d{23}[A-Z][\\dA-Z]",
            BG: "[A-Z]{4}\\d{6}[\\dA-Z]{8}",
            CR: "\\d{17}",
            HR: "\\d{17}",
            CY: "\\d{8}[\\dA-Z]{16}",
            CZ: "\\d{20}",
            DK: "\\d{14}",
            DO: "[A-Z]{4}\\d{20}",
            EE: "\\d{16}",
            FO: "\\d{14}",
            FI: "\\d{14}",
            FR: "\\d{10}[\\dA-Z]{11}\\d{2}",
            GE: "[\\dA-Z]{2}\\d{16}",
            DE: "\\d{18}",
            GI: "[A-Z]{4}[\\dA-Z]{15}",
            GR: "\\d{7}[\\dA-Z]{16}",
            GL: "\\d{14}",
            GT: "[\\dA-Z]{4}[\\dA-Z]{20}",
            HU: "\\d{24}",
            IS: "\\d{22}",
            IE: "[\\dA-Z]{4}\\d{14}",
            IL: "\\d{19}",
            IT: "[A-Z]\\d{10}[\\dA-Z]{12}",
            KZ: "\\d{3}[\\dA-Z]{13}",
            KW: "[A-Z]{4}[\\dA-Z]{22}",
            LV: "[A-Z]{4}[\\dA-Z]{13}",
            LB: "\\d{4}[\\dA-Z]{20}",
            LI: "\\d{5}[\\dA-Z]{12}",
            LT: "\\d{16}",
            LU: "\\d{3}[\\dA-Z]{13}",
            MK: "\\d{3}[\\dA-Z]{10}\\d{2}",
            MT: "[A-Z]{4}\\d{5}[\\dA-Z]{18}",
            MR: "\\d{23}",
            MU: "[A-Z]{4}\\d{19}[A-Z]{3}",
            MC: "\\d{10}[\\dA-Z]{11}\\d{2}",
            MD: "[\\dA-Z]{2}\\d{18}",
            ME: "\\d{18}",
            NL: "[A-Z]{4}\\d{10}",
            NO: "\\d{11}",
            PK: "[\\dA-Z]{4}\\d{16}",
            PS: "[\\dA-Z]{4}\\d{21}",
            PL: "\\d{24}",
            PT: "\\d{21}",
            RO: "[A-Z]{4}[\\dA-Z]{16}",
            SM: "[A-Z]\\d{10}[\\dA-Z]{12}",
            SA: "\\d{2}[\\dA-Z]{18}",
            RS: "\\d{18}",
            SK: "\\d{20}",
            SI: "\\d{15}",
            ES: "\\d{20}",
            SE: "\\d{20}",
            CH: "\\d{5}[\\dA-Z]{12}",
            TN: "\\d{20}",
            TR: "\\d{5}[\\dA-Z]{17}",
            AE: "\\d{3}\\d{16}",
            GB: "[A-Z]{4}\\d{14}",
            VG: "[\\dA-Z]{4}\\d{16}"
        }, g = h[c], "undefined" != typeof g && (i = new RegExp("^[A-Z]{2}\\d{2}" + g + "$", ""), !i.test(l))) return !1;
        for (d = l.substring(4, l.length) + l.substring(0, 4), j = 0; j < d.length; j++) e = d.charAt(j), "0" !== e && (n = !1), n || (m += "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ".indexOf(e));
        for (k = 0; k < m.length; k++) f = m.charAt(k), p = "" + o + f, o = p % 97;
        return 1 === o
    }, "Please specify a valid IBAN"), a.validator.addMethod("integer", function(a, b) {
        return this.optional(b) || /^-?\d+$/.test(a)
    }, "A positive or negative non-decimal number please"), a.validator.addMethod("ipv4", function(a, b) {
        return this.optional(b) || /^(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)$/i.test(a)
    }, "Please enter a valid IP v4 address."), a.validator.addMethod("ipv6", function(a, b) {
        return this.optional(b) || /^((([0-9A-Fa-f]{1,4}:){7}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}:[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){5}:([0-9A-Fa-f]{1,4}:)?[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){4}:([0-9A-Fa-f]{1,4}:){0,2}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){3}:([0-9A-Fa-f]{1,4}:){0,3}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){2}:([0-9A-Fa-f]{1,4}:){0,4}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(([0-9A-Fa-f]{1,4}:){0,5}:((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(::([0-9A-Fa-f]{1,4}:){0,5}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|([0-9A-Fa-f]{1,4}::([0-9A-Fa-f]{1,4}:){0,5}[0-9A-Fa-f]{1,4})|(::([0-9A-Fa-f]{1,4}:){0,6}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){1,7}:))$/i.test(a)
    }, "Please enter a valid IP v6 address."), a.validator.addMethod("lettersonly", function(a, b) {
        return this.optional(b) || /^[a-z]+$/i.test(a)
    }, "Letters only please"), a.validator.addMethod("letterswithbasicpunc", function(a, b) {
        return this.optional(b) || /^[a-z\-.,()'"\s]+$/i.test(a)
    }, "Letters or punctuation only please"), a.validator.addMethod("mobileNL", function(a, b) {
        return this.optional(b) || /^((\+|00(\s|\s?\-\s?)?)31(\s|\s?\-\s?)?(\(0\)[\-\s]?)?|0)6((\s|\s?\-\s?)?[0-9]){8}$/.test(a)
    }, "Please specify a valid mobile number"), a.validator.addMethod("mobileUK", function(a, b) {
        return a = a.replace(/\(|\)|\s+|-/g, ""), this.optional(b) || a.length > 9 && a.match(/^(?:(?:(?:00\s?|\+)44\s?|0)7(?:[1345789]\d{2}|624)\s?\d{3}\s?\d{3})$/)
    }, "Please specify a valid mobile number"), a.validator.addMethod("nieES", function(a) {
        "use strict";
        return a = a.toUpperCase(), a.match("((^[A-Z]{1}[0-9]{7}[A-Z0-9]{1}$|^[T]{1}[A-Z0-9]{8}$)|^[0-9]{8}[A-Z]{1}$)") ? /^[T]{1}/.test(a) ? a[8] === /^[T]{1}[A-Z0-9]{8}$/.test(a) : /^[XYZ]{1}/.test(a) ? a[8] === "TRWAGMYFPDXBNJZSQVHLCKE".charAt(a.replace("X", "0").replace("Y", "1").replace("Z", "2").substring(0, 8) % 23) : !1 : !1
    }, "Please specify a valid NIE number."), a.validator.addMethod("nifES", function(a) {
        "use strict";
        return a = a.toUpperCase(), a.match("((^[A-Z]{1}[0-9]{7}[A-Z0-9]{1}$|^[T]{1}[A-Z0-9]{8}$)|^[0-9]{8}[A-Z]{1}$)") ? /^[0-9]{8}[A-Z]{1}$/.test(a) ? "TRWAGMYFPDXBNJZSQVHLCKE".charAt(a.substring(8, 0) % 23) === a.charAt(8) : /^[KLM]{1}/.test(a) ? a[8] === String.fromCharCode(64) : !1 : !1
    }, "Please specify a valid NIF number."), a.validator.addMethod("nowhitespace", function(a, b) {
        return this.optional(b) || /^\S+$/i.test(a)
    }, "No white space please"), a.validator.addMethod("pattern", function(a, b, c) {
        return this.optional(b) ? !0 : ("string" == typeof c && (c = new RegExp(c)), c.test(a))
    }, "Invalid format."), a.validator.addMethod("phoneNL", function(a, b) {
        return this.optional(b) || /^((\+|00(\s|\s?\-\s?)?)31(\s|\s?\-\s?)?(\(0\)[\-\s]?)?|0)[1-9]((\s|\s?\-\s?)?[0-9]){8}$/.test(a)
    }, "Please specify a valid phone number."), a.validator.addMethod("phoneUK", function(a, b) {
        return a = a.replace(/\(|\)|\s+|-/g, ""), this.optional(b) || a.length > 9 && a.match(/^(?:(?:(?:00\s?|\+)44\s?)|(?:\(?0))(?:\d{2}\)?\s?\d{4}\s?\d{4}|\d{3}\)?\s?\d{3}\s?\d{3,4}|\d{4}\)?\s?(?:\d{5}|\d{3}\s?\d{3})|\d{5}\)?\s?\d{4,5})$/)
    }, "Please specify a valid phone number"), a.validator.addMethod("phoneUS", function(a, b) {
        return a = a.replace(/\s+/g, ""), this.optional(b) || a.length > 9 && a.match(/^(\+?1-?)?(\([2-9]([02-9]\d|1[02-9])\)|[2-9]([02-9]\d|1[02-9]))-?[2-9]([02-9]\d|1[02-9])-?\d{4}$/)
    }, "Please specify a valid phone number"), a.validator.addMethod("phonesUK", function(a, b) {
        return a = a.replace(/\(|\)|\s+|-/g, ""), this.optional(b) || a.length > 9 && a.match(/^(?:(?:(?:00\s?|\+)44\s?|0)(?:1\d{8,9}|[23]\d{9}|7(?:[1345789]\d{8}|624\d{6})))$/)
    }, "Please specify a valid uk phone number"), a.validator.addMethod("postalCodeCA", function(a, b) {
        return this.optional(b) || /^[ABCEGHJKLMNPRSTVXY]\d[A-Z] \d[A-Z]\d$/.test(a)
    }, "Please specify a valid postal code"), a.validator.addMethod("postalcodeIT", function(a, b) {
        return this.optional(b) || /^\d{5}$/.test(a)
    }, "Please specify a valid postal code"), a.validator.addMethod("postalcodeNL", function(a, b) {
        return this.optional(b) || /^[1-9][0-9]{3}\s?[a-zA-Z]{2}$/.test(a)
    }, "Please specify a valid postal code"), a.validator.addMethod("postcodeUK", function(a, b) {
        return this.optional(b) || /^((([A-PR-UWYZ][0-9])|([A-PR-UWYZ][0-9][0-9])|([A-PR-UWYZ][A-HK-Y][0-9])|([A-PR-UWYZ][A-HK-Y][0-9][0-9])|([A-PR-UWYZ][0-9][A-HJKSTUW])|([A-PR-UWYZ][A-HK-Y][0-9][ABEHMNPRVWXY]))\s?([0-9][ABD-HJLNP-UW-Z]{2})|(GIR)\s?(0AA))$/i.test(a)
    }, "Please specify a valid UK postcode"), a.validator.addMethod("require_from_group", function(b, c, d) {
        var e = a(d[1], c.form),
            f = e.eq(0),
            g = f.data("valid_req_grp") ? f.data("valid_req_grp") : a.extend({}, this),
            h = e.filter(function() {
                return g.elementValue(this)
            }).length >= d[0];
        return f.data("valid_req_grp", g), a(c).data("being_validated") || (e.data("being_validated", !0), e.each(function() {
            g.element(this)
        }), e.data("being_validated", !1)), h
    }, a.validator.format("Please fill at least {0} of these fields.")), a.validator.addMethod("skip_or_fill_minimum", function(b, c, d) {
        var e = a(d[1], c.form),
            f = e.eq(0),
            g = f.data("valid_skip") ? f.data("valid_skip") : a.extend({}, this),
            h = e.filter(function() {
                return g.elementValue(this)
            }).length,
            i = 0 === h || h >= d[0];
        return f.data("valid_skip", g), a(c).data("being_validated") || (e.data("being_validated", !0), e.each(function() {
            g.element(this)
        }), e.data("being_validated", !1)), i
    }, a.validator.format("Please either skip these fields or fill at least {0} of them.")), jQuery.validator.addMethod("stateUS", function(a, b, c) {
        var d, e = "undefined" == typeof c,
            f = e || "undefined" == typeof c.caseSensitive ? !1 : c.caseSensitive,
            g = e || "undefined" == typeof c.includeTerritories ? !1 : c.includeTerritories,
            h = e || "undefined" == typeof c.includeMilitary ? !1 : c.includeMilitary;
        return d = g || h ? g && h ? "^(A[AEKLPRSZ]|C[AOT]|D[CE]|FL|G[AU]|HI|I[ADLN]|K[SY]|LA|M[ADEINOPST]|N[CDEHJMVY]|O[HKR]|P[AR]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY])$" : g ? "^(A[KLRSZ]|C[AOT]|D[CE]|FL|G[AU]|HI|I[ADLN]|K[SY]|LA|M[ADEINOPST]|N[CDEHJMVY]|O[HKR]|P[AR]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY])$" : "^(A[AEKLPRZ]|C[AOT]|D[CE]|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|PA|RI|S[CD]|T[NX]|UT|V[AT]|W[AIVY])$" : "^(A[KLRZ]|C[AOT]|D[CE]|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|PA|RI|S[CD]|T[NX]|UT|V[AT]|W[AIVY])$", d = f ? new RegExp(d) : new RegExp(d, "i"), this.optional(b) || d.test(a)
    }, "Please specify a valid state"), a.validator.addMethod("strippedminlength", function(b, c, d) {
        return a(b).text().length >= d
    }, a.validator.format("Please enter at least {0} characters")), a.validator.addMethod("time", function(a, b) {
        return this.optional(b) || /^([01]\d|2[0-3])(:[0-5]\d){1,2}$/.test(a)
    }, "Please enter a valid time, between 00:00 and 23:59"), a.validator.addMethod("time12h", function(a, b) {
        return this.optional(b) || /^((0?[1-9]|1[012])(:[0-5]\d){1,2}(\ ?[AP]M))$/i.test(a)
    }, "Please enter a valid time in 12-hour am/pm format"), a.validator.addMethod("url2", function(a, b) {
        return this.optional(b) || /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)*(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(a)
    }, a.validator.messages.url), a.validator.addMethod("vinUS", function(a) {
        if (17 !== a.length) return !1;
        var b, c, d, e, f, g, h = ["A", "B", "C", "D", "E", "F", "G", "H", "J", "K", "L", "M", "N", "P", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
            i = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 7, 9, 2, 3, 4, 5, 6, 7, 8, 9],
            j = [8, 7, 6, 5, 4, 3, 2, 10, 0, 9, 8, 7, 6, 5, 4, 3, 2],
            k = 0;
        for (b = 0; 17 > b; b++) {
            if (e = j[b], d = a.slice(b, b + 1), 8 === b && (g = d), isNaN(d)) {
                for (c = 0; c < h.length; c++)
                    if (d.toUpperCase() === h[c]) {
                        d = i[c], d *= e, isNaN(g) && 8 === c && (g = h[c]);
                        break
                    }
            } else d *= e;
            k += d
        }
        return f = k % 11, 10 === f && (f = "X"), f === g ? !0 : !1
    }, "The specified vehicle identification number (VIN) is invalid."), a.validator.addMethod("zipcodeUS", function(a, b) {
        return this.optional(b) || /^\d{5}(-\d{4})?$/.test(a)
    }, "The specified US ZIP Code is invalid"), a.validator.addMethod("ziprange", function(a, b) {
        return this.optional(b) || /^90[2-5]\d\{2\}-\d{4}$/.test(a)
    }, "Your ZIP-code must be in the range 902xx-xxxx to 905xx-xxxx")
});
/*!
 * Knockout JavaScript library v3.2.0
 * (c) Steven Sanderson - http://knockoutjs.com/
 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
 */
(function() {
    (function(p) {
        var s = this || (0, eval)("this"),
            v = s.document,
            L = s.navigator,
            w = s.jQuery,
            D = s.JSON;
        (function(p) {
            "function" === typeof require && "object" === typeof exports && "object" === typeof module ? p(module.exports || exports, require) : "function" === typeof define && define.amd ? define(["exports", "require"], p) : p(s.ko = {})
        })(function(M, N) {
            function H(a, d) {
                return null === a || typeof a in R ? a === d : !1
            }

            function S(a, d) {
                var c;
                return function() {
                    c || (c = setTimeout(function() {
                        c = p;
                        a()
                    }, d))
                }
            }

            function T(a, d) {
                var c;
                return function() {
                    clearTimeout(c);
                    c = setTimeout(a, d)
                }
            }

            function I(b, d, c, e) {
                a.d[b] = {
                    init: function(b, h, k, f, m) {
                        var l, q;
                        a.s(function() {
                            var f = a.a.c(h()),
                                k = !c !== !f,
                                z = !q;
                            if (z || d || k !== l) z && a.Y.la() && (q = a.a.ia(a.f.childNodes(b), !0)), k ? (z || a.f.T(b, a.a.ia(q)), a.Ca(e ? e(m, f) : m, b)) : a.f.ja(b), l = k
                        }, null, {
                            o: b
                        });
                        return {
                            controlsDescendantBindings: !0
                        }
                    }
                };
                a.h.ha[b] = !1;
                a.f.Q[b] = !0
            }
            var a = "undefined" !== typeof M ? M : {};
            a.b = function(b, d) {
                for (var c = b.split("."), e = a, g = 0; g < c.length - 1; g++) e = e[c[g]];
                e[c[c.length - 1]] = d
            };
            a.A = function(a, d, c) {
                a[d] = c
            };
            a.version = "3.2.0";
            a.b("version", a.version);
            a.a = function() {
                function b(a, b) {
                    for (var c in a) a.hasOwnProperty(c) && b(c, a[c])
                }

                function d(a, b) {
                    if (b)
                        for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
                    return a
                }

                function c(a, b) {
                    a.__proto__ = b;
                    return a
                }
                var e = {
                        __proto__: []
                    }
                    instanceof Array, g = {}, h = {};
                g[L && /Firefox\/2/i.test(L.userAgent) ? "KeyboardEvent" : "UIEvents"] = ["keyup", "keydown", "keypress"];
                g.MouseEvents = "click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave".split(" ");
                b(g, function(a, b) {
                    if (b.length)
                        for (var c = 0, d = b.length; c < d; c++) h[b[c]] = a
                });
                var k = {
                        propertychange: !0
                    },
                    f = v && function() {
                        for (var a = 3, b = v.createElement("div"), c = b.getElementsByTagName("i"); b.innerHTML = "\x3c!--[if gt IE " + ++a + "]><i></i><![endif]--\x3e", c[0];);
                        return 4 < a ? a : p
                    }();
                return {
                    vb: ["authenticity_token", /^__RequestVerificationToken(_.*)?$/],
                    u: function(a, b) {
                        for (var c = 0, d = a.length; c < d; c++) b(a[c], c)
                    },
                    m: function(a, b) {
                        if ("function" == typeof Array.prototype.indexOf) return Array.prototype.indexOf.call(a, b);
                        for (var c = 0, d = a.length; c < d; c++)
                            if (a[c] === b) return c;
                        return -1
                    },
                    qb: function(a, b, c) {
                        for (var d = 0, f = a.length; d < f; d++)
                            if (b.call(c, a[d], d)) return a[d];
                        return null
                    },
                    ua: function(m, b) {
                        var c = a.a.m(m, b);
                        0 < c ? m.splice(c, 1) : 0 === c && m.shift()
                    },
                    rb: function(m) {
                        m = m || [];
                        for (var b = [], c = 0, d = m.length; c < d; c++) 0 > a.a.m(b, m[c]) && b.push(m[c]);
                        return b
                    },
                    Da: function(a, b) {
                        a = a || [];
                        for (var c = [], d = 0, f = a.length; d < f; d++) c.push(b(a[d], d));
                        return c
                    },
                    ta: function(a, b) {
                        a = a || [];
                        for (var c = [], d = 0, f = a.length; d < f; d++) b(a[d], d) && c.push(a[d]);
                        return c
                    },
                    ga: function(a, b) {
                        if (b instanceof Array) a.push.apply(a, b);
                        else
                            for (var c = 0, d = b.length; c < d; c++) a.push(b[c]);
                        return a
                    },
                    ea: function(b, c, d) {
                        var f = a.a.m(a.a.Xa(b), c);
                        0 > f ? d && b.push(c) : d || b.splice(f, 1)
                    },
                    xa: e,
                    extend: d,
                    za: c,
                    Aa: e ? c : d,
                    G: b,
                    na: function(a, b) {
                        if (!a) return a;
                        var c = {},
                            d;
                        for (d in a) a.hasOwnProperty(d) && (c[d] = b(a[d], d, a));
                        return c
                    },
                    Ka: function(b) {
                        for (; b.firstChild;) a.removeNode(b.firstChild)
                    },
                    oc: function(b) {
                        b = a.a.S(b);
                        for (var c = v.createElement("div"), d = 0, f = b.length; d < f; d++) c.appendChild(a.R(b[d]));
                        return c
                    },
                    ia: function(b, c) {
                        for (var d = 0, f = b.length, e = []; d < f; d++) {
                            var k = b[d].cloneNode(!0);
                            e.push(c ? a.R(k) : k)
                        }
                        return e
                    },
                    T: function(b, c) {
                        a.a.Ka(b);
                        if (c)
                            for (var d = 0, f = c.length; d < f; d++) b.appendChild(c[d])
                    },
                    Lb: function(b, c) {
                        var d = b.nodeType ? [b] : b;
                        if (0 < d.length) {
                            for (var f = d[0], e = f.parentNode, k = 0, g = c.length; k < g; k++) e.insertBefore(c[k], f);
                            k = 0;
                            for (g = d.length; k < g; k++) a.removeNode(d[k])
                        }
                    },
                    ka: function(a, b) {
                        if (a.length) {
                            for (b = 8 === b.nodeType && b.parentNode || b; a.length && a[0].parentNode !== b;) a.shift();
                            if (1 < a.length) {
                                var c = a[0],
                                    d = a[a.length - 1];
                                for (a.length = 0; c !== d;)
                                    if (a.push(c), c = c.nextSibling, !c) return;
                                a.push(d)
                            }
                        }
                        return a
                    },
                    Nb: function(a, b) {
                        7 > f ? a.setAttribute("selected", b) : a.selected = b
                    },
                    cb: function(a) {
                        return null === a || a === p ? "" : a.trim ? a.trim() : a.toString().replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
                    },
                    vc: function(a, b) {
                        a = a || "";
                        return b.length > a.length ? !1 : a.substring(0, b.length) === b
                    },
                    cc: function(a, b) {
                        if (a === b) return !0;
                        if (11 === a.nodeType) return !1;
                        if (b.contains) return b.contains(3 === a.nodeType ? a.parentNode : a);
                        if (b.compareDocumentPosition) return 16 == (b.compareDocumentPosition(a) & 16);
                        for (; a && a != b;) a = a.parentNode;
                        return !!a
                    },
                    Ja: function(b) {
                        return a.a.cc(b, b.ownerDocument.documentElement)
                    },
                    ob: function(b) {
                        return !!a.a.qb(b, a.a.Ja)
                    },
                    t: function(a) {
                        return a && a.tagName && a.tagName.toLowerCase()
                    },
                    n: function(b, c, d) {
                        var e = f && k[c];
                        if (!e && w) w(b).bind(c, d);
                        else if (e || "function" != typeof b.addEventListener)
                            if ("undefined" != typeof b.attachEvent) {
                                var g = function(a) {
                                        d.call(b, a)
                                    },
                                    h = "on" + c;
                                b.attachEvent(h, g);
                                a.a.w.da(b, function() {
                                    b.detachEvent(h, g)
                                })
                            } else throw Error("Browser doesn't support addEventListener or attachEvent");
                        else b.addEventListener(c, d, !1)
                    },
                    oa: function(b, c) {
                        if (!b || !b.nodeType) throw Error("element must be a DOM node when calling triggerEvent");
                        var d;
                        "input" === a.a.t(b) && b.type && "click" == c.toLowerCase() ? (d = b.type, d = "checkbox" == d || "radio" == d) : d = !1;
                        if (w && !d) w(b).trigger(c);
                        else if ("function" == typeof v.createEvent)
                            if ("function" == typeof b.dispatchEvent) d = v.createEvent(h[c] || "HTMLEvents"), d.initEvent(c, !0, !0, s, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, b), b.dispatchEvent(d);
                            else throw Error("The supplied element doesn't support dispatchEvent");
                        else if (d && b.click) b.click();
                        else if ("undefined" != typeof b.fireEvent) b.fireEvent("on" + c);
                        else throw Error("Browser doesn't support triggering events");
                    },
                    c: function(b) {
                        return a.C(b) ? b() : b
                    },
                    Xa: function(b) {
                        return a.C(b) ? b.v() : b
                    },
                    Ba: function(b, c, d) {
                        if (c) {
                            var f = /\S+/g,
                                e = b.className.match(f) || [];
                            a.a.u(c.match(f), function(b) {
                                a.a.ea(e, b, d)
                            });
                            b.className = e.join(" ")
                        }
                    },
                    bb: function(b, c) {
                        var d = a.a.c(c);
                        if (null === d || d === p) d = "";
                        var f = a.f.firstChild(b);
                        !f || 3 != f.nodeType || a.f.nextSibling(f) ? a.f.T(b, [b.ownerDocument.createTextNode(d)]) : f.data = d;
                        a.a.fc(b)
                    },
                    Mb: function(a, b) {
                        a.name = b;
                        if (7 >= f) try {
                            a.mergeAttributes(v.createElement("<input name='" + a.name + "'/>"), !1)
                        } catch (c) {}
                    },
                    fc: function(a) {
                        9 <= f && (a = 1 == a.nodeType ? a : a.parentNode, a.style && (a.style.zoom = a.style.zoom))
                    },
                    dc: function(a) {
                        if (f) {
                            var b = a.style.width;
                            a.style.width = 0;
                            a.style.width = b
                        }
                    },
                    sc: function(b, c) {
                        b = a.a.c(b);
                        c = a.a.c(c);
                        for (var d = [], f = b; f <= c; f++) d.push(f);
                        return d
                    },
                    S: function(a) {
                        for (var b = [], c = 0, d = a.length; c < d; c++) b.push(a[c]);
                        return b
                    },
                    yc: 6 === f,
                    zc: 7 === f,
                    L: f,
                    xb: function(b, c) {
                        for (var d = a.a.S(b.getElementsByTagName("input")).concat(a.a.S(b.getElementsByTagName("textarea"))), f = "string" == typeof c ? function(a) {
                            return a.name === c
                        } : function(a) {
                            return c.test(a.name)
                        }, e = [], k = d.length - 1; 0 <= k; k--) f(d[k]) && e.push(d[k]);
                        return e
                    },
                    pc: function(b) {
                        return "string" == typeof b && (b = a.a.cb(b)) ? D && D.parse ? D.parse(b) : (new Function("return " + b))() : null
                    },
                    eb: function(b, c, d) {
                        if (!D || !D.stringify) throw Error("Cannot find JSON.stringify(). Some browsers (e.g., IE < 8) don't support it natively, but you can overcome this by adding a script reference to json2.js, downloadable from http://www.json.org/json2.js");
                        return D.stringify(a.a.c(b), c, d)
                    },
                    qc: function(c, d, f) {
                        f = f || {};
                        var e = f.params || {},
                            k = f.includeFields || this.vb,
                            g = c;
                        if ("object" == typeof c && "form" === a.a.t(c))
                            for (var g = c.action, h = k.length - 1; 0 <= h; h--)
                                for (var r = a.a.xb(c, k[h]), E = r.length - 1; 0 <= E; E--) e[r[E].name] = r[E].value;
                        d = a.a.c(d);
                        var y = v.createElement("form");
                        y.style.display = "none";
                        y.action = g;
                        y.method = "post";
                        for (var p in d) c = v.createElement("input"), c.type = "hidden", c.name = p, c.value = a.a.eb(a.a.c(d[p])), y.appendChild(c);
                        b(e, function(a, b) {
                            var c = v.createElement("input");
                            c.type = "hidden";
                            c.name = a;
                            c.value = b;
                            y.appendChild(c)
                        });
                        v.body.appendChild(y);
                        f.submitter ? f.submitter(y) : y.submit();
                        setTimeout(function() {
                            y.parentNode.removeChild(y)
                        }, 0)
                    }
                }
            }();
            a.b("utils", a.a);
            a.b("utils.arrayForEach", a.a.u);
            a.b("utils.arrayFirst", a.a.qb);
            a.b("utils.arrayFilter", a.a.ta);
            a.b("utils.arrayGetDistinctValues", a.a.rb);
            a.b("utils.arrayIndexOf", a.a.m);
            a.b("utils.arrayMap", a.a.Da);
            a.b("utils.arrayPushAll", a.a.ga);
            a.b("utils.arrayRemoveItem", a.a.ua);
            a.b("utils.extend", a.a.extend);
            a.b("utils.fieldsIncludedWithJsonPost", a.a.vb);
            a.b("utils.getFormFields", a.a.xb);
            a.b("utils.peekObservable", a.a.Xa);
            a.b("utils.postJson", a.a.qc);
            a.b("utils.parseJson", a.a.pc);
            a.b("utils.registerEventHandler", a.a.n);
            a.b("utils.stringifyJson", a.a.eb);
            a.b("utils.range", a.a.sc);
            a.b("utils.toggleDomNodeCssClass", a.a.Ba);
            a.b("utils.triggerEvent", a.a.oa);
            a.b("utils.unwrapObservable", a.a.c);
            a.b("utils.objectForEach", a.a.G);
            a.b("utils.addOrRemoveItem", a.a.ea);
            a.b("unwrap", a.a.c);
            Function.prototype.bind || (Function.prototype.bind = function(a) {
                var d = this,
                    c = Array.prototype.slice.call(arguments);
                a = c.shift();
                return function() {
                    return d.apply(a, c.concat(Array.prototype.slice.call(arguments)))
                }
            });
            a.a.e = new function() {
                function a(b, h) {
                    var k = b[c];
                    if (!k || "null" === k || !e[k]) {
                        if (!h) return p;
                        k = b[c] = "ko" + d++;
                        e[k] = {}
                    }
                    return e[k]
                }
                var d = 0,
                    c = "__ko__" + (new Date).getTime(),
                    e = {};
                return {
                    get: function(c, d) {
                        var e = a(c, !1);
                        return e === p ? p : e[d]
                    },
                    set: function(c, d, e) {
                        if (e !== p || a(c, !1) !== p) a(c, !0)[d] = e
                    },
                    clear: function(a) {
                        var b = a[c];
                        return b ? (delete e[b], a[c] = null, !0) : !1
                    },
                    F: function() {
                        return d++ +
                            c
                    }
                }
            };
            a.b("utils.domData", a.a.e);
            a.b("utils.domData.clear", a.a.e.clear);
            a.a.w = new function() {
                function b(b, d) {
                    var f = a.a.e.get(b, c);
                    f === p && d && (f = [], a.a.e.set(b, c, f));
                    return f
                }

                function d(c) {
                    var e = b(c, !1);
                    if (e)
                        for (var e = e.slice(0), f = 0; f < e.length; f++) e[f](c);
                    a.a.e.clear(c);
                    a.a.w.cleanExternalData(c);
                    if (g[c.nodeType])
                        for (e = c.firstChild; c = e;) e = c.nextSibling, 8 === c.nodeType && d(c)
                }
                var c = a.a.e.F(),
                    e = {
                        1: !0,
                        8: !0,
                        9: !0
                    },
                    g = {
                        1: !0,
                        9: !0
                    };
                return {
                    da: function(a, c) {
                        if ("function" != typeof c) throw Error("Callback must be a function");
                        b(a, !0).push(c)
                    },
                    Kb: function(d, e) {
                        var f = b(d, !1);
                        f && (a.a.ua(f, e), 0 == f.length && a.a.e.set(d, c, p))
                    },
                    R: function(b) {
                        if (e[b.nodeType] && (d(b), g[b.nodeType])) {
                            var c = [];
                            a.a.ga(c, b.getElementsByTagName("*"));
                            for (var f = 0, m = c.length; f < m; f++) d(c[f])
                        }
                        return b
                    },
                    removeNode: function(b) {
                        a.R(b);
                        b.parentNode && b.parentNode.removeChild(b)
                    },
                    cleanExternalData: function(a) {
                        w && "function" == typeof w.cleanData && w.cleanData([a])
                    }
                }
            };
            a.R = a.a.w.R;
            a.removeNode = a.a.w.removeNode;
            a.b("cleanNode", a.R);
            a.b("removeNode", a.removeNode);
            a.b("utils.domNodeDisposal", a.a.w);
            a.b("utils.domNodeDisposal.addDisposeCallback", a.a.w.da);
            a.b("utils.domNodeDisposal.removeDisposeCallback", a.a.w.Kb);
            (function() {
                a.a.ba = function(b) {
                    var d;
                    if (w)
                        if (w.parseHTML) d = w.parseHTML(b) || [];
                        else {
                            if ((d = w.clean([b])) && d[0]) {
                                for (b = d[0]; b.parentNode && 11 !== b.parentNode.nodeType;) b = b.parentNode;
                                b.parentNode && b.parentNode.removeChild(b)
                            }
                        }
                    else {
                        var c = a.a.cb(b).toLowerCase();
                        d = v.createElement("div");
                        c = c.match(/^<(thead|tbody|tfoot)/) && [1, "<table>", "</table>"] || !c.indexOf("<tr") && [2, "<table><tbody>", "</tbody></table>"] || (!c.indexOf("<td") || !c.indexOf("<th")) && [3, "<table><tbody><tr>", "</tr></tbody></table>"] || [0, "", ""];
                        b = "ignored<div>" + c[1] + b + c[2] + "</div>";
                        for ("function" == typeof s.innerShiv ? d.appendChild(s.innerShiv(b)) : d.innerHTML = b; c[0]--;) d = d.lastChild;
                        d = a.a.S(d.lastChild.childNodes)
                    }
                    return d
                };
                a.a.$a = function(b, d) {
                    a.a.Ka(b);
                    d = a.a.c(d);
                    if (null !== d && d !== p)
                        if ("string" != typeof d && (d = d.toString()), w) w(b).html(d);
                        else
                            for (var c = a.a.ba(d), e = 0; e < c.length; e++) b.appendChild(c[e])
                }
            })();
            a.b("utils.parseHtmlFragment", a.a.ba);
            a.b("utils.setHtml", a.a.$a);
            a.D = function() {
                function b(c, d) {
                    if (c)
                        if (8 == c.nodeType) {
                            var g = a.D.Gb(c.nodeValue);
                            null != g && d.push({
                                bc: c,
                                mc: g
                            })
                        } else if (1 == c.nodeType)
                            for (var g = 0, h = c.childNodes, k = h.length; g < k; g++) b(h[g], d)
                }
                var d = {};
                return {
                    Ua: function(a) {
                        if ("function" != typeof a) throw Error("You can only pass a function to ko.memoization.memoize()");
                        var b = (4294967296 * (1 + Math.random()) | 0).toString(16).substring(1) + (4294967296 * (1 + Math.random()) | 0).toString(16).substring(1);
                        d[b] = a;
                        return "\x3c!--[ko_memo:" +
                            b + "]--\x3e"
                    },
                    Rb: function(a, b) {
                        var g = d[a];
                        if (g === p) throw Error("Couldn't find any memo with ID " + a + ". Perhaps it's already been unmemoized.");
                        try {
                            return g.apply(null, b || []), !0
                        } finally {
                            delete d[a]
                        }
                    },
                    Sb: function(c, d) {
                        var g = [];
                        b(c, g);
                        for (var h = 0, k = g.length; h < k; h++) {
                            var f = g[h].bc,
                                m = [f];
                            d && a.a.ga(m, d);
                            a.D.Rb(g[h].mc, m);
                            f.nodeValue = "";
                            f.parentNode && f.parentNode.removeChild(f)
                        }
                    },
                    Gb: function(a) {
                        return (a = a.match(/^\[ko_memo\:(.*?)\]$/)) ? a[1] : null
                    }
                }
            }();
            a.b("memoization", a.D);
            a.b("memoization.memoize", a.D.Ua);
            a.b("memoization.unmemoize", a.D.Rb);
            a.b("memoization.parseMemoText", a.D.Gb);
            a.b("memoization.unmemoizeDomNodeAndDescendants", a.D.Sb);
            a.La = {
                throttle: function(b, d) {
                    b.throttleEvaluation = d;
                    var c = null;
                    return a.j({
                        read: b,
                        write: function(a) {
                            clearTimeout(c);
                            c = setTimeout(function() {
                                b(a)
                            }, d)
                        }
                    })
                },
                rateLimit: function(a, d) {
                    var c, e, g;
                    "number" == typeof d ? c = d : (c = d.timeout, e = d.method);
                    g = "notifyWhenChangesStop" == e ? T : S;
                    a.Ta(function(a) {
                        return g(a, c)
                    })
                },
                notify: function(a, d) {
                    a.equalityComparer = "always" == d ? null : H
                }
            };
            var R = {
                undefined: 1,
                "boolean": 1,
                number: 1,
                string: 1
            };
            a.b("extenders", a.La);
            a.Pb = function(b, d, c) {
                this.target = b;
                this.wa = d;
                this.ac = c;
                this.Cb = !1;
                a.A(this, "dispose", this.K)
            };
            a.Pb.prototype.K = function() {
                this.Cb = !0;
                this.ac()
            };
            a.P = function() {
                a.a.Aa(this, a.P.fn);
                this.M = {}
            };
            var G = "change",
                A = {
                    U: function(b, d, c) {
                        var e = this;
                        c = c || G;
                        var g = new a.Pb(e, d ? b.bind(d) : b, function() {
                            a.a.ua(e.M[c], g);
                            e.nb && e.nb()
                        });
                        e.va && e.va(c);
                        e.M[c] || (e.M[c] = []);
                        e.M[c].push(g);
                        return g
                    },
                    notifySubscribers: function(b, d) {
                        d = d || G;
                        if (this.Ab(d)) try {
                            a.k.Ea();
                            for (var c = this.M[d].slice(0), e = 0, g; g = c[e]; ++e) g.Cb || g.wa(b)
                        } finally {
                            a.k.end()
                        }
                    },
                    Ta: function(b) {
                        var d = this,
                            c = a.C(d),
                            e, g, h;
                        d.qa || (d.qa = d.notifySubscribers, d.notifySubscribers = function(a, b) {
                            b && b !== G ? "beforeChange" === b ? d.kb(a) : d.qa(a, b) : d.lb(a)
                        });
                        var k = b(function() {
                            c && h === d && (h = d());
                            e = !1;
                            d.Pa(g, h) && d.qa(g = h)
                        });
                        d.lb = function(a) {
                            e = !0;
                            h = a;
                            k()
                        };
                        d.kb = function(a) {
                            e || (g = a, d.qa(a, "beforeChange"))
                        }
                    },
                    Ab: function(a) {
                        return this.M[a] && this.M[a].length
                    },
                    yb: function() {
                        var b = 0;
                        a.a.G(this.M, function(a, c) {
                            b += c.length
                        });
                        return b
                    },
                    Pa: function(a, d) {
                        return !this.equalityComparer || !this.equalityComparer(a, d)
                    },
                    extend: function(b) {
                        var d = this;
                        b && a.a.G(b, function(b, e) {
                            var g = a.La[b];
                            "function" == typeof g && (d = g(d, e) || d)
                        });
                        return d
                    }
                };
            a.A(A, "subscribe", A.U);
            a.A(A, "extend", A.extend);
            a.A(A, "getSubscriptionsCount", A.yb);
            a.a.xa && a.a.za(A, Function.prototype);
            a.P.fn = A;
            a.Db = function(a) {
                return null != a && "function" == typeof a.U && "function" == typeof a.notifySubscribers
            };
            a.b("subscribable", a.P);
            a.b("isSubscribable", a.Db);
            a.Y = a.k = function() {
                function b(a) {
                    c.push(e);
                    e = a
                }

                function d() {
                    e = c.pop()
                }
                var c = [],
                    e, g = 0;
                return {
                    Ea: b,
                    end: d,
                    Jb: function(b) {
                        if (e) {
                            if (!a.Db(b)) throw Error("Only subscribable things can act as dependencies");
                            e.wa(b, b.Vb || (b.Vb = ++g))
                        }
                    },
                    B: function(a, c, f) {
                        try {
                            return b(), a.apply(c, f || [])
                        } finally {
                            d()
                        }
                    },
                    la: function() {
                        if (e) return e.s.la()
                    },
                    ma: function() {
                        if (e) return e.ma
                    }
                }
            }();
            a.b("computedContext", a.Y);
            a.b("computedContext.getDependenciesCount", a.Y.la);
            a.b("computedContext.isInitial", a.Y.ma);
            a.b("computedContext.isSleeping", a.Y.Ac);
            a.p = function(b) {
                function d() {
                    if (0 < arguments.length) return d.Pa(c, arguments[0]) && (d.X(), c = arguments[0], d.W()), this;
                    a.k.Jb(d);
                    return c
                }
                var c = b;
                a.P.call(d);
                a.a.Aa(d, a.p.fn);
                d.v = function() {
                    return c
                };
                d.W = function() {
                    d.notifySubscribers(c)
                };
                d.X = function() {
                    d.notifySubscribers(c, "beforeChange")
                };
                a.A(d, "peek", d.v);
                a.A(d, "valueHasMutated", d.W);
                a.A(d, "valueWillMutate", d.X);
                return d
            };
            a.p.fn = {
                equalityComparer: H
            };
            var F = a.p.rc = "__ko_proto__";
            a.p.fn[F] = a.p;
            a.a.xa && a.a.za(a.p.fn, a.P.fn);
            a.Ma = function(b, d) {
                return null === b || b === p || b[F] === p ? !1 : b[F] === d ? !0 : a.Ma(b[F], d)
            };
            a.C = function(b) {
                return a.Ma(b, a.p)
            };
            a.Ra = function(b) {
                return "function" == typeof b && b[F] === a.p || "function" == typeof b && b[F] === a.j && b.hc ? !0 : !1
            };
            a.b("observable", a.p);
            a.b("isObservable", a.C);
            a.b("isWriteableObservable", a.Ra);
            a.b("isWritableObservable", a.Ra);
            a.aa = function(b) {
                b = b || [];
                if ("object" != typeof b || !("length" in b)) throw Error("The argument passed when initializing an observable array must be an array, or null, or undefined.");
                b = a.p(b);
                a.a.Aa(b, a.aa.fn);
                return b.extend({
                    trackArrayChanges: !0
                })
            };
            a.aa.fn = {
                remove: function(b) {
                    for (var d = this.v(), c = [], e = "function" != typeof b || a.C(b) ? function(a) {
                        return a === b
                    } : b, g = 0; g < d.length; g++) {
                        var h = d[g];
                        e(h) && (0 === c.length && this.X(), c.push(h), d.splice(g, 1), g--)
                    }
                    c.length && this.W();
                    return c
                },
                removeAll: function(b) {
                    if (b === p) {
                        var d = this.v(),
                            c = d.slice(0);
                        this.X();
                        d.splice(0, d.length);
                        this.W();
                        return c
                    }
                    return b ? this.remove(function(c) {
                        return 0 <= a.a.m(b, c)
                    }) : []
                },
                destroy: function(b) {
                    var d = this.v(),
                        c = "function" != typeof b || a.C(b) ? function(a) {
                            return a === b
                        } : b;
                    this.X();
                    for (var e = d.length - 1; 0 <= e; e--) c(d[e]) && (d[e]._destroy = !0);
                    this.W()
                },
                destroyAll: function(b) {
                    return b === p ? this.destroy(function() {
                        return !0
                    }) : b ? this.destroy(function(d) {
                        return 0 <= a.a.m(b, d)
                    }) : []
                },
                indexOf: function(b) {
                    var d = this();
                    return a.a.m(d, b)
                },
                replace: function(a, d) {
                    var c = this.indexOf(a);
                    0 <= c && (this.X(), this.v()[c] = d, this.W())
                }
            };
            a.a.u("pop push reverse shift sort splice unshift".split(" "), function(b) {
                a.aa.fn[b] = function() {
                    var a = this.v();
                    this.X();
                    this.sb(a, b, arguments);
                    a = a[b].apply(a, arguments);
                    this.W();
                    return a
                }
            });
            a.a.u(["slice"], function(b) {
                a.aa.fn[b] = function() {
                    var a = this();
                    return a[b].apply(a, arguments)
                }
            });
            a.a.xa && a.a.za(a.aa.fn, a.p.fn);
            a.b("observableArray", a.aa);
            var J = "arrayChange";
            a.La.trackArrayChanges = function(b) {
                function d() {
                    if (!c) {
                        c = !0;
                        var d = b.notifySubscribers;
                        b.notifySubscribers = function(a, b) {
                            b && b !== G || ++g;
                            return d.apply(this, arguments)
                        };
                        var f = [].concat(b.v() || []);
                        e = null;
                        b.U(function(c) {
                            c = [].concat(c || []);
                            if (b.Ab(J)) {
                                var d;
                                if (!e || 1 < g) e = a.a.Fa(f, c, {
                                    sparse: !0
                                });
                                d = e;
                                d.length && b.notifySubscribers(d, J)
                            }
                            f = c;
                            e = null;
                            g = 0
                        })
                    }
                }
                if (!b.sb) {
                    var c = !1,
                        e = null,
                        g = 0,
                        h = b.U;
                    b.U = b.subscribe = function(a, b, c) {
                        c === J && d();
                        return h.apply(this, arguments)
                    };
                    b.sb = function(b, d, m) {
                        function l(a, b, c) {
                            return q[q.length] = {
                                status: a,
                                value: b,
                                index: c
                            }
                        }
                        if (c && !g) {
                            var q = [],
                                h = b.length,
                                t = m.length,
                                z = 0;
                            switch (d) {
                                case "push":
                                    z = h;
                                case "unshift":
                                    for (d = 0; d < t; d++) l("added", m[d], z + d);
                                    break;
                                case "pop":
                                    z = h - 1;
                                case "shift":
                                    h && l("deleted", b[z], z);
                                    break;
                                case "splice":
                                    d = Math.min(Math.max(0, 0 > m[0] ? h + m[0] : m[0]), h);
                                    for (var h = 1 === t ? h : Math.min(d + (m[1] || 0), h), t = d + t - 2, z = Math.max(h, t), u = [], r = [], E = 2; d < z; ++d, ++E) d < h && r.push(l("deleted", b[d], d)), d < t && u.push(l("added", m[E], d));
                                    a.a.wb(r, u);
                                    break;
                                default:
                                    return
                            }
                            e = q
                        }
                    }
                }
            };
            a.s = a.j = function(b, d, c) {
                function e() {
                    a.a.G(v, function(a, b) {
                        b.K()
                    });
                    v = {}
                }

                function g() {
                    e();
                    C = 0;
                    u = !0;
                    n = !1
                }

                function h() {
                    var a = f.throttleEvaluation;
                    a && 0 <= a ? (clearTimeout(P), P = setTimeout(k, a)) : f.ib ? f.ib() : k()
                }

                function k(b) {
                    if (t) {
                        if (E) throw Error("A 'pure' computed must not be called recursively");
                    } else if (!u) {
                        if (w && w()) {
                            if (!z) {
                                s();
                                return
                            }
                        } else z = !1;
                        t = !0;
                        if (y) try {
                            var c = {};
                            a.k.Ea({
                                wa: function(a, b) {
                                    c[b] || (c[b] = 1, ++C)
                                },
                                s: f,
                                ma: p
                            });
                            C = 0;
                            q = r.call(d)
                        } finally {
                            a.k.end(), t = !1
                        } else try {
                            var e = v,
                                m = C;
                            a.k.Ea({
                                wa: function(a, b) {
                                    u || (m && e[b] ? (v[b] = e[b], ++C, delete e[b], --m) : v[b] || (v[b] = a.U(h), ++C))
                                },
                                s: f,
                                ma: E ? p : !C
                            });
                            v = {};
                            C = 0;
                            try {
                                var l = d ? r.call(d) : r()
                            } finally {
                                a.k.end(), m && a.a.G(e, function(a, b) {
                                    b.K()
                                }), n = !1
                            }
                            f.Pa(q, l) && (f.notifySubscribers(q, "beforeChange"), q = l, !0 !== b && f.notifySubscribers(q))
                        } finally {
                            t = !1
                        }
                        C || s()
                    }
                }

                function f() {
                    if (0 < arguments.length) {
                        if ("function" === typeof O) O.apply(d, arguments);
                        else throw Error("Cannot write a value to a ko.computed unless you specify a 'write' option. If you wish to read the current value, don't pass any parameters.");
                        return this
                    }
                    a.k.Jb(f);
                    n && k(!0);
                    return q
                }

                function m() {
                    n && !C && k(!0);
                    return q
                }

                function l() {
                    return n || 0 < C
                }
                var q, n = !0,
                    t = !1,
                    z = !1,
                    u = !1,
                    r = b,
                    E = !1,
                    y = !1;
                r && "object" == typeof r ? (c = r, r = c.read) : (c = c || {}, r || (r = c.read));
                if ("function" != typeof r) throw Error("Pass a function that returns the value of the ko.computed");
                var O = c.write,
                    x = c.disposeWhenNodeIsRemoved || c.o || null,
                    B = c.disposeWhen || c.Ia,
                    w = B,
                    s = g,
                    v = {},
                    C = 0,
                    P = null;
                d || (d = c.owner);
                a.P.call(f);
                a.a.Aa(f, a.j.fn);
                f.v = m;
                f.la = function() {
                    return C
                };
                f.hc = "function" === typeof c.write;
                f.K = function() {
                    s()
                };
                f.Z = l;
                var A = f.Ta;
                f.Ta = function(a) {
                    A.call(f, a);
                    f.ib = function() {
                        f.kb(q);
                        n = !0;
                        f.lb(f)
                    }
                };
                c.pure ? (y = E = !0, f.va = function() {
                    y && (y = !1, k(!0))
                }, f.nb = function() {
                    f.yb() || (e(), y = n = !0)
                }) : c.deferEvaluation && (f.va = function() {
                    m();
                    delete f.va
                });
                a.A(f, "peek", f.v);
                a.A(f, "dispose", f.K);
                a.A(f, "isActive", f.Z);
                a.A(f, "getDependenciesCount", f.la);
                x && (z = !0, x.nodeType && (w = function() {
                    return !a.a.Ja(x) || B && B()
                }));
                y || c.deferEvaluation || k();
                x && l() && x.nodeType && (s = function() {
                    a.a.w.Kb(x, s);
                    g()
                }, a.a.w.da(x, s));
                return f
            };
            a.jc = function(b) {
                return a.Ma(b, a.j)
            };
            A = a.p.rc;
            a.j[A] = a.p;
            a.j.fn = {
                equalityComparer: H
            };
            a.j.fn[A] = a.j;
            a.a.xa && a.a.za(a.j.fn, a.P.fn);
            a.b("dependentObservable", a.j);
            a.b("computed", a.j);
            a.b("isComputed", a.jc);
            a.Ib = function(b, d) {
                if ("function" === typeof b) return a.s(b, d, {
                    pure: !0
                });
                b = a.a.extend({}, b);
                b.pure = !0;
                return a.s(b, d)
            };
            a.b("pureComputed", a.Ib);
            (function() {
                function b(a, g, h) {
                    h = h || new c;
                    a = g(a);
                    if ("object" != typeof a || null === a || a === p || a instanceof Date || a instanceof String || a instanceof Number || a instanceof Boolean) return a;
                    var k = a instanceof Array ? [] : {};
                    h.save(a, k);
                    d(a, function(c) {
                        var d = g(a[c]);
                        switch (typeof d) {
                            case "boolean":
                            case "number":
                            case "string":
                            case "function":
                                k[c] = d;
                                break;
                            case "object":
                            case "undefined":
                                var l = h.get(d);
                                k[c] = l !== p ? l : b(d, g, h)
                        }
                    });
                    return k
                }

                function d(a, b) {
                    if (a instanceof Array) {
                        for (var c = 0; c < a.length; c++) b(c);
                        "function" == typeof a.toJSON && b("toJSON")
                    } else
                        for (c in a) b(c)
                }

                function c() {
                    this.keys = [];
                    this.hb = []
                }
                a.Qb = function(c) {
                    if (0 == arguments.length) throw Error("When calling ko.toJS, pass the object you want to convert.");
                    return b(c, function(b) {
                        for (var c = 0; a.C(b) && 10 > c; c++) b = b();
                        return b
                    })
                };
                a.toJSON = function(b, c, d) {
                    b = a.Qb(b);
                    return a.a.eb(b, c, d)
                };
                c.prototype = {
                    save: function(b, c) {
                        var d = a.a.m(this.keys, b);
                        0 <= d ? this.hb[d] = c : (this.keys.push(b), this.hb.push(c))
                    },
                    get: function(b) {
                        b = a.a.m(this.keys, b);
                        return 0 <= b ? this.hb[b] : p
                    }
                }
            })();
            a.b("toJS", a.Qb);
            a.b("toJSON", a.toJSON);
            (function() {
                a.i = {
                    q: function(b) {
                        switch (a.a.t(b)) {
                            case "option":
                                return !0 === b.__ko__hasDomDataOptionValue__ ? a.a.e.get(b, a.d.options.Va) : 7 >= a.a.L ? b.getAttributeNode("value") && b.getAttributeNode("value").specified ? b.value : b.text : b.value;
                            case "select":
                                return 0 <= b.selectedIndex ? a.i.q(b.options[b.selectedIndex]) : p;
                            default:
                                return b.value
                        }
                    },
                    ca: function(b, d, c) {
                        switch (a.a.t(b)) {
                            case "option":
                                switch (typeof d) {
                                    case "string":
                                        a.a.e.set(b, a.d.options.Va, p);
                                        "__ko__hasDomDataOptionValue__" in
                                        b && delete b.__ko__hasDomDataOptionValue__;
                                        b.value = d;
                                        break;
                                    default:
                                        a.a.e.set(b, a.d.options.Va, d), b.__ko__hasDomDataOptionValue__ = !0, b.value = "number" === typeof d ? d : ""
                                }
                                break;
                            case "select":
                                if ("" === d || null === d) d = p;
                                for (var e = -1, g = 0, h = b.options.length, k; g < h; ++g)
                                    if (k = a.i.q(b.options[g]), k == d || "" == k && d === p) {
                                        e = g;
                                        break
                                    } if (c || 0 <= e || d === p && 1 < b.size) b.selectedIndex = e;
                                break;
                            default:
                                if (null === d || d === p) d = "";
                                b.value = d
                        }
                    }
                }
            })();
            a.b("selectExtensions", a.i);
            a.b("selectExtensions.readValue", a.i.q);
            a.b("selectExtensions.writeValue", a.i.ca);
            a.h = function() {
                function b(b) {
                    b = a.a.cb(b);
                    123 === b.charCodeAt(0) && (b = b.slice(1, -1));
                    var c = [],
                        d = b.match(e),
                        k, n, t = 0;
                    if (d) {
                        d.push(",");
                        for (var z = 0, u; u = d[z]; ++z) {
                            var r = u.charCodeAt(0);
                            if (44 === r) {
                                if (0 >= t) {
                                    k && c.push(n ? {
                                        key: k,
                                        value: n.join("")
                                    } : {
                                        unknown: k
                                    });
                                    k = n = t = 0;
                                    continue
                                }
                            } else if (58 === r) {
                                if (!n) continue
                            } else if (47 === r && z && 1 < u.length)(r = d[z - 1].match(g)) && !h[r[0]] && (b = b.substr(b.indexOf(u) + 1), d = b.match(e), d.push(","), z = -1, u = "/");
                            else if (40 === r || 123 === r || 91 === r) ++t;
                            else if (41 === r || 125 === r || 93 === r) --t;
                            else if (!k && !n) {
                                k = 34 === r || 39 === r ? u.slice(1, -1) : u;
                                continue
                            }
                            n ? n.push(u) : n = [u]
                        }
                    }
                    return c
                }
                var d = ["true", "false", "null", "undefined"],
                    c = /^(?:[$_a-z][$\w]*|(.+)(\.\s*[$_a-z][$\w]*|\[.+\]))$/i,
                    e = RegExp("\"(?:[^\"\\\\]|\\\\.)*\"|'(?:[^'\\\\]|\\\\.)*'|/(?:[^/\\\\]|\\\\.)*/w*|[^\\s:,/][^,\"'{}()/:[\\]]*[^\\s,\"'{}()/:[\\]]|[^\\s]", "g"),
                    g = /[\])"'A-Za-z0-9_$]+$/,
                    h = {
                        "in": 1,
                        "return": 1,
                        "typeof": 1
                    },
                    k = {};
                return {
                    ha: [],
                    V: k,
                    Wa: b,
                    ya: function(f, m) {
                        function e(b, m) {
                            var f;
                            if (!z) {
                                var u = a.getBindingHandler(b);
                                if (u && u.preprocess && !(m = u.preprocess(m, b, e))) return;
                                if (u = k[b]) f = m, 0 <= a.a.m(d, f) ? f = !1 : (u = f.match(c), f = null === u ? !1 : u[1] ? "Object(" + u[1] + ")" + u[2] : f), u = f;
                                u && h.push("'" + b + "':function(_z){" + f + "=_z}")
                            }
                            t && (m = "function(){return " + m + " }");
                            g.push("'" + b + "':" + m)
                        }
                        m = m || {};
                        var g = [],
                            h = [],
                            t = m.valueAccessors,
                            z = m.bindingParams,
                            u = "string" === typeof f ? b(f) : f;
                        a.a.u(u, function(a) {
                            e(a.key || a.unknown, a.value)
                        });
                        h.length && e("_ko_property_writers", "{" + h.join(",") + " }");
                        return g.join(",")
                    },
                    lc: function(a, b) {
                        for (var c = 0; c < a.length; c++)
                            if (a[c].key == b) return !0;
                        return !1
                    },
                    pa: function(b, c, d, e, k) {
                        if (b && a.C(b)) !a.Ra(b) || k && b.v() === e || b(e);
                        else if ((b = c.get("_ko_property_writers")) && b[d]) b[d](e)
                    }
                }
            }();
            a.b("expressionRewriting", a.h);
            a.b("expressionRewriting.bindingRewriteValidators", a.h.ha);
            a.b("expressionRewriting.parseObjectLiteral", a.h.Wa);
            a.b("expressionRewriting.preProcessBindings", a.h.ya);
            a.b("expressionRewriting._twoWayBindings", a.h.V);
            a.b("jsonExpressionRewriting", a.h);
            a.b("jsonExpressionRewriting.insertPropertyAccessorsIntoJson", a.h.ya);
            (function() {
                function b(a) {
                    return 8 == a.nodeType && h.test(g ? a.text : a.nodeValue)
                }

                function d(a) {
                    return 8 == a.nodeType && k.test(g ? a.text : a.nodeValue)
                }

                function c(a, c) {
                    for (var f = a, e = 1, k = []; f = f.nextSibling;) {
                        if (d(f) && (e--, 0 === e)) return k;
                        k.push(f);
                        b(f) && e++
                    }
                    if (!c) throw Error("Cannot find closing comment tag to match: " + a.nodeValue);
                    return null
                }

                function e(a, b) {
                    var d = c(a, b);
                    return d ? 0 < d.length ? d[d.length - 1].nextSibling : a.nextSibling : null
                }
                var g = v && "\x3c!--test--\x3e" === v.createComment("test").text,
                    h = g ? /^\x3c!--\s*ko(?:\s+([\s\S]+))?\s*--\x3e$/ : /^\s*ko(?:\s+([\s\S]+))?\s*$/,
                    k = g ? /^\x3c!--\s*\/ko\s*--\x3e$/ : /^\s*\/ko\s*$/,
                    f = {
                        ul: !0,
                        ol: !0
                    };
                a.f = {
                    Q: {},
                    childNodes: function(a) {
                        return b(a) ? c(a) : a.childNodes
                    },
                    ja: function(c) {
                        if (b(c)) {
                            c = a.f.childNodes(c);
                            for (var d = 0, f = c.length; d < f; d++) a.removeNode(c[d])
                        } else a.a.Ka(c)
                    },
                    T: function(c, d) {
                        if (b(c)) {
                            a.f.ja(c);
                            for (var f = c.nextSibling, e = 0, k = d.length; e < k; e++) f.parentNode.insertBefore(d[e], f)
                        } else a.a.T(c, d)
                    },
                    Hb: function(a, c) {
                        b(a) ? a.parentNode.insertBefore(c, a.nextSibling) : a.firstChild ? a.insertBefore(c, a.firstChild) : a.appendChild(c)
                    },
                    Bb: function(c, d, f) {
                        f ? b(c) ? c.parentNode.insertBefore(d, f.nextSibling) : f.nextSibling ? c.insertBefore(d, f.nextSibling) : c.appendChild(d) : a.f.Hb(c, d)
                    },
                    firstChild: function(a) {
                        return b(a) ? !a.nextSibling || d(a.nextSibling) ? null : a.nextSibling : a.firstChild
                    },
                    nextSibling: function(a) {
                        b(a) && (a = e(a));
                        return a.nextSibling && d(a.nextSibling) ? null : a.nextSibling
                    },
                    gc: b,
                    xc: function(a) {
                        return (a = (g ? a.text : a.nodeValue).match(h)) ? a[1] : null
                    },
                    Fb: function(c) {
                        if (f[a.a.t(c)]) {
                            var k = c.firstChild;
                            if (k) {
                                do
                                    if (1 === k.nodeType) {
                                        var g;
                                        g = k.firstChild;
                                        var h = null;
                                        if (g) {
                                            do
                                                if (h) h.push(g);
                                                else if (b(g)) {
                                                    var t = e(g, !0);
                                                    t ? g = t : h = [g]
                                                } else d(g) && (h = [g]);
                                            while (g = g.nextSibling)
                                        }
                                        if (g = h)
                                            for (h = k.nextSibling, t = 0; t < g.length; t++) h ? c.insertBefore(g[t], h) : c.appendChild(g[t])
                                    } while (k = k.nextSibling)
                            }
                        }
                    }
                }
            })();
            a.b("virtualElements", a.f);
            a.b("virtualElements.allowedBindings", a.f.Q);
            a.b("virtualElements.emptyNode", a.f.ja);
            a.b("virtualElements.insertAfter", a.f.Bb);
            a.b("virtualElements.prepend", a.f.Hb);
            a.b("virtualElements.setDomNodeChildren", a.f.T);
            (function() {
                a.J = function() {
                    this.Yb = {}
                };
                a.a.extend(a.J.prototype, {
                    nodeHasBindings: function(b) {
                        switch (b.nodeType) {
                            case 1:
                                return null != b.getAttribute("data-bind") || a.g.getComponentNameForNode(b);
                            case 8:
                                return a.f.gc(b);
                            default:
                                return !1
                        }
                    },
                    getBindings: function(b, d) {
                        var c = this.getBindingsString(b, d),
                            c = c ? this.parseBindingsString(c, d, b) : null;
                        return a.g.mb(c, b, d, !1)
                    },
                    getBindingAccessors: function(b, d) {
                        var c = this.getBindingsString(b, d),
                            c = c ? this.parseBindingsString(c, d, b, {
                                valueAccessors: !0
                            }) : null;
                        return a.g.mb(c, b, d, !0)
                    },
                    getBindingsString: function(b) {
                        switch (b.nodeType) {
                            case 1:
                                return b.getAttribute("data-bind");
                            case 8:
                                return a.f.xc(b);
                            default:
                                return null
                        }
                    },
                    parseBindingsString: function(b, d, c, e) {
                        try {
                            var g = this.Yb,
                                h = b + (e && e.valueAccessors || ""),
                                k;
                            if (!(k = g[h])) {
                                var f, m = "with($context){with($data||{}){return{" + a.h.ya(b, e) + "}}}";
                                f = new Function("$context", "$element", m);
                                k = g[h] = f
                            }
                            return k(d, c)
                        } catch (l) {
                            throw l.message = "Unable to parse bindings.\nBindings value: " + b + "\nMessage: " + l.message, l;
                        }
                    }
                });
                a.J.instance = new a.J
            })();
            a.b("bindingProvider", a.J);
            (function() {
                function b(a) {
                    return function() {
                        return a
                    }
                }

                function d(a) {
                    return a()
                }

                function c(b) {
                    return a.a.na(a.k.B(b), function(a, c) {
                        return function() {
                            return b()[c]
                        }
                    })
                }

                function e(a, b) {
                    return c(this.getBindings.bind(this, a, b))
                }

                function g(b, c, d) {
                    var f, e = a.f.firstChild(c),
                        k = a.J.instance,
                        g = k.preprocessNode;
                    if (g) {
                        for (; f = e;) e = a.f.nextSibling(f), g.call(k, f);
                        e = a.f.firstChild(c)
                    }
                    for (; f = e;) e = a.f.nextSibling(f), h(b, f, d)
                }

                function h(b, c, d) {
                    var e = !0,
                        k = 1 === c.nodeType;
                    k && a.f.Fb(c);
                    if (k && d || a.J.instance.nodeHasBindings(c)) e = f(c, null, b, d).shouldBindDescendants;
                    e && !l[a.a.t(c)] && g(b, c, !k)
                }

                function k(b) {
                    var c = [],
                        d = {},
                        f = [];
                    a.a.G(b, function y(e) {
                        if (!d[e]) {
                            var k = a.getBindingHandler(e);
                            k && (k.after && (f.push(e), a.a.u(k.after, function(c) {
                                if (b[c]) {
                                    if (-1 !== a.a.m(f, c)) throw Error("Cannot combine the following bindings, because they have a cyclic dependency: " + f.join(", "));
                                    y(c)
                                }
                            }), f.length--), c.push({
                                key: e,
                                zb: k
                            }));
                            d[e] = !0
                        }
                    });
                    return c
                }

                function f(b, c, f, g) {
                    var m = a.a.e.get(b, q);
                    if (!c) {
                        if (m) throw Error("You cannot apply bindings multiple times to the same element.");
                        a.a.e.set(b, q, !0)
                    }!m && g && a.Ob(b, f);
                    var l;
                    if (c && "function" !== typeof c) l = c;
                    else {
                        var h = a.J.instance,
                            n = h.getBindingAccessors || e,
                            s = a.j(function() {
                                (l = c ? c(f, b) : n.call(h, b, f)) && f.I && f.I();
                                return l
                            }, null, {
                                o: b
                            });
                        l && s.Z() || (s = null)
                    }
                    var v;
                    if (l) {
                        var w = s ? function(a) {
                                return function() {
                                    return d(s()[a])
                                }
                            } : function(a) {
                                return l[a]
                            },
                            A = function() {
                                return a.a.na(s ? s() : l, d)
                            };
                        A.get = function(a) {
                            return l[a] && d(w(a))
                        };
                        A.has = function(a) {
                            return a in l
                        };
                        g = k(l);
                        a.a.u(g, function(c) {
                            var d = c.zb.init,
                                e = c.zb.update,
                                k = c.key;
                            if (8 === b.nodeType && !a.f.Q[k]) throw Error("The binding '" + k + "' cannot be used with virtual elements");
                            try {
                                "function" == typeof d && a.k.B(function() {
                                    var a = d(b, w(k), A, f.$data, f);
                                    if (a && a.controlsDescendantBindings) {
                                        if (v !== p) throw Error("Multiple bindings (" + v + " and " + k + ") are trying to control descendant bindings of the same element. You cannot use these bindings together on the same element.");
                                        v = k
                                    }
                                }), "function" == typeof e && a.j(function() {
                                    e(b, w(k), A, f.$data, f)
                                }, null, {
                                    o: b
                                })
                            } catch (g) {
                                throw g.message = 'Unable to process binding "' + k + ": " + l[k] + '"\nMessage: ' + g.message, g;
                            }
                        })
                    }
                    return {
                        shouldBindDescendants: v === p
                    }
                }

                function m(b) {
                    return b && b instanceof a.N ? b : new a.N(b)
                }
                a.d = {};
                var l = {
                    script: !0
                };
                a.getBindingHandler = function(b) {
                    return a.d[b]
                };
                a.N = function(b, c, d, f) {
                    var e = this,
                        k = "function" == typeof b && !a.C(b),
                        g, m = a.j(function() {
                            var g = k ? b() : b,
                                l = a.a.c(g);
                            c ? (c.I && c.I(), a.a.extend(e, c), m && (e.I = m)) : (e.$parents = [], e.$root = l, e.ko = a);
                            e.$rawData = g;
                            e.$data = l;
                            d && (e[d] = l);
                            f && f(e, c, l);
                            return e.$data
                        }, null, {
                            Ia: function() {
                                return g && !a.a.ob(g)
                            },
                            o: !0
                        });
                    m.Z() && (e.I = m, m.equalityComparer = null, g = [], m.Tb = function(b) {
                        g.push(b);
                        a.a.w.da(b, function(b) {
                            a.a.ua(g, b);
                            g.length || (m.K(), e.I = m = p)
                        })
                    })
                };
                a.N.prototype.createChildContext = function(b, c, d) {
                    return new a.N(b, this, c, function(a, b) {
                        a.$parentContext = b;
                        a.$parent = b.$data;
                        a.$parents = (b.$parents || []).slice(0);
                        a.$parents.unshift(a.$parent);
                        d && d(a)
                    })
                };
                a.N.prototype.extend = function(b) {
                    return new a.N(this.I || this.$data, this, null, function(c, d) {
                        c.$rawData = d.$rawData;
                        a.a.extend(c, "function" == typeof b ? b() : b)
                    })
                };
                var q = a.a.e.F(),
                    n = a.a.e.F();
                a.Ob = function(b, c) {
                    if (2 == arguments.length) a.a.e.set(b, n, c), c.I && c.I.Tb(b);
                    else return a.a.e.get(b, n)
                };
                a.ra = function(b, c, d) {
                    1 === b.nodeType && a.f.Fb(b);
                    return f(b, c, m(d), !0)
                };
                a.Wb = function(d, f, e) {
                    e = m(e);
                    return a.ra(d, "function" === typeof f ? c(f.bind(null, e, d)) : a.a.na(f, b), e)
                };
                a.Ca = function(a, b) {
                    1 !== b.nodeType && 8 !== b.nodeType || g(m(a), b, !0)
                };
                a.pb = function(a, b) {
                    !w && s.jQuery && (w = s.jQuery);
                    if (b && 1 !== b.nodeType && 8 !== b.nodeType) throw Error("ko.applyBindings: first parameter should be your view model; second parameter should be a DOM node");
                    b = b || s.document.body;
                    h(m(a), b, !0)
                };
                a.Ha = function(b) {
                    switch (b.nodeType) {
                        case 1:
                        case 8:
                            var c = a.Ob(b);
                            if (c) return c;
                            if (b.parentNode) return a.Ha(b.parentNode)
                    }
                    return p
                };
                a.$b = function(b) {
                    return (b = a.Ha(b)) ? b.$data : p
                };
                a.b("bindingHandlers", a.d);
                a.b("applyBindings", a.pb);
                a.b("applyBindingsToDescendants", a.Ca);
                a.b("applyBindingAccessorsToNode", a.ra);
                a.b("applyBindingsToNode", a.Wb);
                a.b("contextFor", a.Ha);
                a.b("dataFor", a.$b)
            })();
            (function(b) {
                function d(d, f) {
                    var e = g.hasOwnProperty(d) ? g[d] : b,
                        l;
                    e || (e = g[d] = new a.P, c(d, function(a) {
                        h[d] = a;
                        delete g[d];
                        l ? e.notifySubscribers(a) : setTimeout(function() {
                            e.notifySubscribers(a)
                        }, 0)
                    }), l = !0);
                    e.U(f)
                }

                function c(a, b) {
                    e("getConfig", [a], function(c) {
                        c ? e("loadComponent", [a, c], function(a) {
                            b(a)
                        }) : b(null)
                    })
                }

                function e(c, d, g, l) {
                    l || (l = a.g.loaders.slice(0));
                    var h = l.shift();
                    if (h) {
                        var n = h[c];
                        if (n) {
                            var t = !1;
                            if (n.apply(h, d.concat(function(a) {
                                t ? g(null) : null !== a ? g(a) : e(c, d, g, l)
                            })) !== b && (t = !0, !h.suppressLoaderExceptions)) throw Error("Component loaders must supply values by invoking the callback, not by returning values synchronously.");
                        } else e(c, d, g, l)
                    } else g(null)
                }
                var g = {},
                    h = {};
                a.g = {
                    get: function(a, c) {
                        var e = h.hasOwnProperty(a) ? h[a] : b;
                        e ? setTimeout(function() {
                            c(e)
                        }, 0) : d(a, c)
                    },
                    tb: function(a) {
                        delete h[a]
                    },
                    jb: e
                };
                a.g.loaders = [];
                a.b("components", a.g);
                a.b("components.get", a.g.get);
                a.b("components.clearCachedDefinition", a.g.tb)
            })();
            (function() {
                function b(b, c, d, e) {
                    function k() {
                        0 === --u && e(h)
                    }
                    var h = {},
                        u = 2,
                        r = d.template;
                    d = d.viewModel;
                    r ? g(c, r, function(c) {
                        a.g.jb("loadTemplate", [b, c], function(a) {
                            h.template = a;
                            k()
                        })
                    }) : k();
                    d ? g(c, d, function(c) {
                        a.g.jb("loadViewModel", [b, c], function(a) {
                            h[f] = a;
                            k()
                        })
                    }) : k()
                }

                function d(a, b, c) {
                    if ("function" === typeof b) c(function(a) {
                        return new b(a)
                    });
                    else if ("function" === typeof b[f]) c(b[f]);
                    else if ("instance" in b) {
                        var e = b.instance;
                        c(function() {
                            return e
                        })
                    } else "viewModel" in b ? d(a, b.viewModel, c) : a("Unknown viewModel value: " + b)
                }

                function c(b) {
                    switch (a.a.t(b)) {
                        case "script":
                            return a.a.ba(b.text);
                        case "textarea":
                            return a.a.ba(b.value);
                        case "template":
                            if (e(b.content)) return a.a.ia(b.content.childNodes)
                    }
                    return a.a.ia(b.childNodes)
                }

                function e(a) {
                    return s.DocumentFragment ? a instanceof DocumentFragment : a && 11 === a.nodeType
                }

                function g(a, b, c) {
                    "string" === typeof b.require ? N || s.require ? (N || s.require)([b.require], c) : a("Uses require, but no AMD loader is present") : c(b)
                }

                function h(a) {
                    return function(b) {
                        throw Error("Component '" + a + "': " + b);
                    }
                }
                var k = {};
                a.g.tc = function(b, c) {
                    if (!c) throw Error("Invalid configuration for " + b);
                    if (a.g.Qa(b)) throw Error("Component " + b + " is already registered");
                    k[b] = c
                };
                a.g.Qa = function(a) {
                    return a in k
                };
                a.g.wc = function(b) {
                    delete k[b];
                    a.g.tb(b)
                };
                a.g.ub = {
                    getConfig: function(a, b) {
                        b(k.hasOwnProperty(a) ? k[a] : null)
                    },
                    loadComponent: function(a, c, d) {
                        var e = h(a);
                        g(e, c, function(c) {
                            b(a, e, c, d)
                        })
                    },
                    loadTemplate: function(b, d, f) {
                        b = h(b);
                        if ("string" === typeof d) f(a.a.ba(d));
                        else if (d instanceof Array) f(d);
                        else if (e(d)) f(a.a.S(d.childNodes));
                        else if (d.element)
                            if (d = d.element, s.HTMLElement ? d instanceof HTMLElement : d && d.tagName && 1 === d.nodeType) f(c(d));
                            else if ("string" === typeof d) {
                                var k = v.getElementById(d);
                                k ? f(c(k)) : b("Cannot find element with ID " + d)
                            } else b("Unknown element type: " + d);
                        else b("Unknown template value: " +
                                d)
                    },
                    loadViewModel: function(a, b, c) {
                        d(h(a), b, c)
                    }
                };
                var f = "createViewModel";
                a.b("components.register", a.g.tc);
                a.b("components.isRegistered", a.g.Qa);
                a.b("components.unregister", a.g.wc);
                a.b("components.defaultLoader", a.g.ub);
                a.g.loaders.push(a.g.ub);
                a.g.Ub = k
            })();
            (function() {
                function b(b, e) {
                    var g = b.getAttribute("params");
                    if (g) {
                        var g = d.parseBindingsString(g, e, b, {
                                valueAccessors: !0,
                                bindingParams: !0
                            }),
                            g = a.a.na(g, function(d) {
                                return a.s(d, null, {
                                    o: b
                                })
                            }),
                            h = a.a.na(g, function(d) {
                                return d.Z() ? a.s(function() {
                                    return a.a.c(d())
                                }, null, {
                                    o: b
                                }) : d.v()
                            });
                        h.hasOwnProperty("$raw") || (h.$raw = g);
                        return h
                    }
                    return {
                        $raw: {}
                    }
                }
                a.g.getComponentNameForNode = function(b) {
                    b = a.a.t(b);
                    return a.g.Qa(b) && b
                };
                a.g.mb = function(c, d, g, h) {
                    if (1 === d.nodeType) {
                        var k = a.g.getComponentNameForNode(d);
                        if (k) {
                            c = c || {};
                            if (c.component) throw Error('Cannot use the "component" binding on a custom element matching a component');
                            var f = {
                                name: k,
                                params: b(d, g)
                            };
                            c.component = h ? function() {
                                return f
                            } : f
                        }
                    }
                    return c
                };
                var d = new a.J;
                9 > a.a.L && (a.g.register = function(a) {
                    return function(b) {
                        v.createElement(b);
                        return a.apply(this, arguments)
                    }
                }(a.g.register), v.createDocumentFragment = function(b) {
                    return function() {
                        var d = b(),
                            g = a.g.Ub,
                            h;
                        for (h in g) g.hasOwnProperty(h) && d.createElement(h);
                        return d
                    }
                }(v.createDocumentFragment))
            })();
            (function() {
                var b = 0;
                a.d.component = {
                    init: function(d, c, e, g, h) {
                        function k() {
                            var a = f && f.dispose;
                            "function" === typeof a && a.call(f);
                            m = null
                        }
                        var f, m;
                        a.a.w.da(d, k);
                        a.s(function() {
                            var e = a.a.c(c()),
                                g, n;
                            "string" === typeof e ? g = e : (g = a.a.c(e.name), n = a.a.c(e.params));
                            if (!g) throw Error("No component name specified");
                            var t = m = ++b;
                            a.g.get(g, function(b) {
                                if (m === t) {
                                    k();
                                    if (!b) throw Error("Unknown component '" + g + "'");
                                    var c = b.template;
                                    if (!c) throw Error("Component '" + g + "' has no template");
                                    c = a.a.ia(c);
                                    a.f.T(d, c);
                                    var c = n,
                                        e = b.createViewModel;
                                    b = e ? e.call(b, c, {
                                        element: d
                                    }) : c;
                                    c = h.createChildContext(b);
                                    f = b;
                                    a.Ca(c, d)
                                }
                            })
                        }, null, {
                            o: d
                        });
                        return {
                            controlsDescendantBindings: !0
                        }
                    }
                };
                a.f.Q.component = !0
            })();
            var Q = {
                "class": "className",
                "for": "htmlFor"
            };
            a.d.attr = {
                update: function(b, d) {
                    var c = a.a.c(d()) || {};
                    a.a.G(c, function(c, d) {
                        d = a.a.c(d);
                        var h = !1 === d || null === d || d === p;
                        h && b.removeAttribute(c);
                        8 >= a.a.L && c in Q ? (c = Q[c], h ? b.removeAttribute(c) : b[c] = d) : h || b.setAttribute(c, d.toString());
                        "name" === c && a.a.Mb(b, h ? "" : d.toString())
                    })
                }
            };
            (function() {
                a.d.checked = {
                    after: ["value", "attr"],
                    init: function(b, d, c) {
                        function e() {
                            var e = b.checked,
                                k = q ? h() : e;
                            if (!a.Y.ma() && (!f || e)) {
                                var g = a.k.B(d);
                                m ? l !== k ? (e && (a.a.ea(g, k, !0), a.a.ea(g, l, !1)), l = k) : a.a.ea(g, k, e) : a.h.pa(g, c, "checked", k, !0)
                            }
                        }

                        function g() {
                            var c = a.a.c(d());
                            b.checked = m ? 0 <= a.a.m(c, h()) : k ? c : h() === c
                        }
                        var h = a.Ib(function() {
                                return c.has("checkedValue") ? a.a.c(c.get("checkedValue")) : c.has("value") ? a.a.c(c.get("value")) : b.value
                            }),
                            k = "checkbox" == b.type,
                            f = "radio" == b.type;
                        if (k || f) {
                            var m = k && a.a.c(d()) instanceof Array,
                                l = m ? h() : p,
                                q = f || m;
                            f && !b.name && a.d.uniqueName.init(b, function() {
                                return !0
                            });
                            a.s(e, null, {
                                o: b
                            });
                            a.a.n(b, "click", e);
                            a.s(g, null, {
                                o: b
                            })
                        }
                    }
                };
                a.h.V.checked = !0;
                a.d.checkedValue = {
                    update: function(b, d) {
                        b.value = a.a.c(d())
                    }
                }
            })();
            a.d.css = {
                update: function(b, d) {
                    var c = a.a.c(d());
                    "object" == typeof c ? a.a.G(c, function(c, d) {
                        d = a.a.c(d);
                        a.a.Ba(b, c, d)
                    }) : (c = String(c || ""), a.a.Ba(b, b.__ko__cssValue, !1), b.__ko__cssValue = c, a.a.Ba(b, c, !0))
                }
            };
            a.d.enable = {
                update: function(b, d) {
                    var c = a.a.c(d());
                    c && b.disabled ? b.removeAttribute("disabled") : c || b.disabled || (b.disabled = !0)
                }
            };
            a.d.disable = {
                update: function(b, d) {
                    a.d.enable.update(b, function() {
                        return !a.a.c(d())
                    })
                }
            };
            a.d.event = {
                init: function(b, d, c, e, g) {
                    var h = d() || {};
                    a.a.G(h, function(k) {
                        "string" == typeof k && a.a.n(b, k, function(b) {
                            var h, l = d()[k];
                            if (l) {
                                try {
                                    var q = a.a.S(arguments);
                                    e = g.$data;
                                    q.unshift(e);
                                    h = l.apply(e, q)
                                } finally {
                                    !0 !== h && (b.preventDefault ? b.preventDefault() : b.returnValue = !1)
                                }!1 === c.get(k + "Bubble") && (b.cancelBubble = !0, b.stopPropagation && b.stopPropagation())
                            }
                        })
                    })
                }
            };
            a.d.foreach = {
                Eb: function(b) {
                    return function() {
                        var d = b(),
                            c = a.a.Xa(d);
                        if (!c || "number" == typeof c.length) return {
                            foreach: d,
                            templateEngine: a.O.Oa
                        };
                        a.a.c(d);
                        return {
                            foreach: c.data,
                            as: c.as,
                            includeDestroyed: c.includeDestroyed,
                            afterAdd: c.afterAdd,
                            beforeRemove: c.beforeRemove,
                            afterRender: c.afterRender,
                            beforeMove: c.beforeMove,
                            afterMove: c.afterMove,
                            templateEngine: a.O.Oa
                        }
                    }
                },
                init: function(b, d) {
                    return a.d.template.init(b, a.d.foreach.Eb(d))
                },
                update: function(b, d, c, e, g) {
                    return a.d.template.update(b, a.d.foreach.Eb(d), c, e, g)
                }
            };
            a.h.ha.foreach = !1;
            a.f.Q.foreach = !0;
            a.d.hasfocus = {
                init: function(b, d, c) {
                    function e(e) {
                        b.__ko_hasfocusUpdating = !0;
                        var f = b.ownerDocument;
                        if ("activeElement" in f) {
                            var g;
                            try {
                                g = f.activeElement
                            } catch (h) {
                                g = f.body
                            }
                            e = g === b
                        }
                        f = d();
                        a.h.pa(f, c, "hasfocus", e, !0);
                        b.__ko_hasfocusLastValue = e;
                        b.__ko_hasfocusUpdating = !1
                    }
                    var g = e.bind(null, !0),
                        h = e.bind(null, !1);
                    a.a.n(b, "focus", g);
                    a.a.n(b, "focusin", g);
                    a.a.n(b, "blur", h);
                    a.a.n(b, "focusout", h)
                },
                update: function(b, d) {
                    var c = !!a.a.c(d());
                    b.__ko_hasfocusUpdating || b.__ko_hasfocusLastValue === c || (c ? b.focus() : b.blur(), a.k.B(a.a.oa, null, [b, c ? "focusin" : "focusout"]))
                }
            };
            a.h.V.hasfocus = !0;
            a.d.hasFocus = a.d.hasfocus;
            a.h.V.hasFocus = !0;
            a.d.html = {
                init: function() {
                    return {
                        controlsDescendantBindings: !0
                    }
                },
                update: function(b, d) {
                    a.a.$a(b, d())
                }
            };
            I("if");
            I("ifnot", !1, !0);
            I("with", !0, !1, function(a, d) {
                return a.createChildContext(d)
            });
            var K = {};
            a.d.options = {
                init: function(b) {
                    if ("select" !== a.a.t(b)) throw Error("options binding applies only to SELECT elements");
                    for (; 0 < b.length;) b.remove(0);
                    return {
                        controlsDescendantBindings: !0
                    }
                },
                update: function(b, d, c) {
                    function e() {
                        return a.a.ta(b.options, function(a) {
                            return a.selected
                        })
                    }

                    function g(a, b, c) {
                        var d = typeof b;
                        return "function" == d ? b(a) : "string" == d ? a[b] : c
                    }

                    function h(c, d) {
                        if (q.length) {
                            var e = 0 <= a.a.m(q, a.i.q(d[0]));
                            a.a.Nb(d[0], e);
                            n && !e && a.k.B(a.a.oa, null, [b, "change"])
                        }
                    }
                    var k = 0 != b.length && b.multiple ? b.scrollTop : null,
                        f = a.a.c(d()),
                        m = c.get("optionsIncludeDestroyed");
                    d = {};
                    var l, q;
                    q = b.multiple ? a.a.Da(e(), a.i.q) : 0 <= b.selectedIndex ? [a.i.q(b.options[b.selectedIndex])] : [];
                    f && ("undefined" == typeof f.length && (f = [f]), l = a.a.ta(f, function(b) {
                        return m || b === p || null === b || !a.a.c(b._destroy)
                    }), c.has("optionsCaption") && (f = a.a.c(c.get("optionsCaption")), null !== f && f !== p && l.unshift(K)));
                    var n = !1;
                    d.beforeRemove = function(a) {
                        b.removeChild(a)
                    };
                    f = h;
                    c.has("optionsAfterRender") && (f = function(b, d) {
                        h(0, d);
                        a.k.B(c.get("optionsAfterRender"), null, [d[0], b !== K ? b : p])
                    });
                    a.a.Za(b, l, function(d, e, f) {
                        f.length && (q = f[0].selected ? [a.i.q(f[0])] : [], n = !0);
                        e = b.ownerDocument.createElement("option");
                        d === K ? (a.a.bb(e, c.get("optionsCaption")), a.i.ca(e, p)) : (f = g(d, c.get("optionsValue"), d), a.i.ca(e, a.a.c(f)), d = g(d, c.get("optionsText"), f), a.a.bb(e, d));
                        return [e]
                    }, d, f);
                    a.k.B(function() {
                        c.get("valueAllowUnset") && c.has("value") ? a.i.ca(b, a.a.c(c.get("value")), !0) : (b.multiple ? q.length && e().length < q.length : q.length && 0 <= b.selectedIndex ? a.i.q(b.options[b.selectedIndex]) !== q[0] : q.length || 0 <= b.selectedIndex) && a.a.oa(b, "change")
                    });
                    a.a.dc(b);
                    k && 20 < Math.abs(k - b.scrollTop) && (b.scrollTop = k)
                }
            };
            a.d.options.Va = a.a.e.F();
            a.d.selectedOptions = {
                after: ["options", "foreach"],
                init: function(b, d, c) {
                    a.a.n(b, "change", function() {
                        var e = d(),
                            g = [];
                        a.a.u(b.getElementsByTagName("option"), function(b) {
                            b.selected && g.push(a.i.q(b))
                        });
                        a.h.pa(e, c, "selectedOptions", g)
                    })
                },
                update: function(b, d) {
                    if ("select" != a.a.t(b)) throw Error("values binding applies only to SELECT elements");
                    var c = a.a.c(d());
                    c && "number" == typeof c.length && a.a.u(b.getElementsByTagName("option"), function(b) {
                        var d = 0 <= a.a.m(c, a.i.q(b));
                        a.a.Nb(b, d)
                    })
                }
            };
            a.h.V.selectedOptions = !0;
            a.d.style = {
                update: function(b, d) {
                    var c = a.a.c(d() || {});
                    a.a.G(c, function(c, d) {
                        d = a.a.c(d);
                        if (null === d || d === p || !1 === d) d = "";
                        b.style[c] = d
                    })
                }
            };
            a.d.submit = {
                init: function(b, d, c, e, g) {
                    if ("function" != typeof d()) throw Error("The value for a submit binding must be a function");
                    a.a.n(b, "submit", function(a) {
                        var c, e = d();
                        try {
                            c = e.call(g.$data, b)
                        } finally {
                            !0 !== c && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
                        }
                    })
                }
            };
            a.d.text = {
                init: function() {
                    return {
                        controlsDescendantBindings: !0
                    }
                },
                update: function(b, d) {
                    a.a.bb(b, d())
                }
            };
            a.f.Q.text = !0;
            (function() {
                if (s && s.navigator) var b = function(a) {
                        if (a) return parseFloat(a[1])
                    },
                    d = s.opera && s.opera.version && parseInt(s.opera.version()),
                    c = s.navigator.userAgent,
                    e = b(c.match(/^(?:(?!chrome).)*version\/([^ ]*) safari/i)),
                    g = b(c.match(/Firefox\/([^ ]*)/));
                if (10 > a.a.L) var h = a.a.e.F(),
                    k = a.a.e.F(),
                    f = function(b) {
                        var c = this.activeElement;
                        (c = c && a.a.e.get(c, k)) && c(b)
                    },
                    m = function(b, c) {
                        var d = b.ownerDocument;
                        a.a.e.get(d, h) || (a.a.e.set(d, h, !0), a.a.n(d, "selectionchange", f));
                        a.a.e.set(b, k, c)
                    };
                a.d.textInput = {
                    init: function(b, c, f) {
                        function k(c, d) {
                            a.a.n(b, c, d)
                        }

                        function h() {
                            var d = a.a.c(c());
                            if (null === d || d === p) d = "";
                            v !== p && d === v ? setTimeout(h, 4) : b.value !== d && (s = d, b.value = d)
                        }

                        function u() {
                            y || (v = b.value, y = setTimeout(r, 4))
                        }

                        function r() {
                            clearTimeout(y);
                            v = y = p;
                            var d = b.value;
                            s !== d && (s = d, a.h.pa(c(), f, "textInput", d))
                        }
                        var s = b.value,
                            y, v;
                        10 > a.a.L ? (k("propertychange", function(a) {
                            "value" === a.propertyName && r()
                        }), 8 == a.a.L && (k("keyup", r), k("keydown", r)), 8 <= a.a.L && (m(b, r), k("dragend", u))) : (k("input", r), 5 > e && "textarea" === a.a.t(b) ? (k("keydown", u), k("paste", u), k("cut", u)) : 11 > d ? k("keydown", u) : 4 > g && (k("DOMAutoComplete", r), k("dragdrop", r), k("drop", r)));
                        k("change", r);
                        a.s(h, null, {
                            o: b
                        })
                    }
                };
                a.h.V.textInput = !0;
                a.d.textinput = {
                    preprocess: function(a, b, c) {
                        c("textInput", a)
                    }
                }
            })();
            a.d.uniqueName = {
                init: function(b, d) {
                    if (d()) {
                        var c = "ko_unique_" + ++a.d.uniqueName.Zb;
                        a.a.Mb(b, c)
                    }
                }
            };
            a.d.uniqueName.Zb = 0;
            a.d.value = {
                after: ["options", "foreach"],
                init: function(b, d, c) {
                    if ("input" != b.tagName.toLowerCase() || "checkbox" != b.type && "radio" != b.type) {
                        var e = ["change"],
                            g = c.get("valueUpdate"),
                            h = !1,
                            k = null;
                        g && ("string" == typeof g && (g = [g]), a.a.ga(e, g), e = a.a.rb(e));
                        var f = function() {
                            k = null;
                            h = !1;
                            var e = d(),
                                f = a.i.q(b);
                            a.h.pa(e, c, "value", f)
                        };
                        !a.a.L || "input" != b.tagName.toLowerCase() || "text" != b.type || "off" == b.autocomplete || b.form && "off" == b.form.autocomplete || -1 != a.a.m(e, "propertychange") || (a.a.n(b, "propertychange", function() {
                            h = !0
                        }), a.a.n(b, "focus", function() {
                            h = !1
                        }), a.a.n(b, "blur", function() {
                            h && f()
                        }));
                        a.a.u(e, function(c) {
                            var d = f;
                            a.a.vc(c, "after") && (d = function() {
                                k = a.i.q(b);
                                setTimeout(f, 0)
                            }, c = c.substring(5));
                            a.a.n(b, c, d)
                        });
                        var m = function() {
                            var e = a.a.c(d()),
                                f = a.i.q(b);
                            if (null !== k && e === k) setTimeout(m, 0);
                            else if (e !== f)
                                if ("select" === a.a.t(b)) {
                                    var g = c.get("valueAllowUnset"),
                                        f = function() {
                                            a.i.ca(b, e, g)
                                        };
                                    f();
                                    g || e === a.i.q(b) ? setTimeout(f, 0) : a.k.B(a.a.oa, null, [b, "change"])
                                } else a.i.ca(b, e)
                        };
                        a.s(m, null, {
                            o: b
                        })
                    } else a.ra(b, {
                        checkedValue: d
                    })
                },
                update: function() {}
            };
            a.h.V.value = !0;
            a.d.visible = {
                update: function(b, d) {
                    var c = a.a.c(d()),
                        e = "none" != b.style.display;
                    c && !e ? b.style.display = "" : !c && e && (b.style.display = "none")
                }
            };
            (function(b) {
                a.d[b] = {
                    init: function(d, c, e, g, h) {
                        return a.d.event.init.call(this, d, function() {
                            var a = {};
                            a[b] = c();
                            return a
                        }, e, g, h)
                    }
                }
            })("click");
            a.H = function() {};
            a.H.prototype.renderTemplateSource = function() {
                throw Error("Override renderTemplateSource");
            };
            a.H.prototype.createJavaScriptEvaluatorBlock = function() {
                throw Error("Override createJavaScriptEvaluatorBlock");
            };
            a.H.prototype.makeTemplateSource = function(b, d) {
                if ("string" == typeof b) {
                    d = d || v;
                    var c = d.getElementById(b);
                    if (!c) throw Error("Cannot find template with ID " + b);
                    return new a.r.l(c)
                }
                if (1 == b.nodeType || 8 == b.nodeType) return new a.r.fa(b);
                throw Error("Unknown template type: " + b);
            };
            a.H.prototype.renderTemplate = function(a, d, c, e) {
                a = this.makeTemplateSource(a, e);
                return this.renderTemplateSource(a, d, c)
            };
            a.H.prototype.isTemplateRewritten = function(a, d) {
                return !1 === this.allowTemplateRewriting ? !0 : this.makeTemplateSource(a, d).data("isRewritten")
            };
            a.H.prototype.rewriteTemplate = function(a, d, c) {
                a = this.makeTemplateSource(a, c);
                d = d(a.text());
                a.text(d);
                a.data("isRewritten", !0)
            };
            a.b("templateEngine", a.H);
            a.fb = function() {
                function b(b, c, d, k) {
                    b = a.h.Wa(b);
                    for (var f = a.h.ha, m = 0; m < b.length; m++) {
                        var l = b[m].key;
                        if (f.hasOwnProperty(l)) {
                            var q = f[l];
                            if ("function" === typeof q) {
                                if (l = q(b[m].value)) throw Error(l);
                            } else if (!q) throw Error("This template engine does not support the '" + l + "' binding within its templates");
                        }
                    }
                    d = "ko.__tr_ambtns(function($context,$element){return(function(){return{ " + a.h.ya(b, {
                            valueAccessors: !0
                        }) + " } })()},'" + d.toLowerCase() +
                        "')";
                    return k.createJavaScriptEvaluatorBlock(d) + c
                }
                var d = /(<([a-z]+\d*)(?:\s+(?!data-bind\s*=\s*)[a-z0-9\-]+(?:=(?:\"[^\"]*\"|\'[^\']*\'))?)*\s+)data-bind\s*=\s*(["'])([\s\S]*?)\3/gi,
                    c = /\x3c!--\s*ko\b\s*([\s\S]*?)\s*--\x3e/g;
                return {
                    ec: function(b, c, d) {
                        c.isTemplateRewritten(b, d) || c.rewriteTemplate(b, function(b) {
                            return a.fb.nc(b, c)
                        }, d)
                    },
                    nc: function(a, g) {
                        return a.replace(d, function(a, c, d, e, l) {
                            return b(l, c, d, g)
                        }).replace(c, function(a, c) {
                            return b(c, "\x3c!-- ko --\x3e", "#comment", g)
                        })
                    },
                    Xb: function(b, c) {
                        return a.D.Ua(function(d, k) {
                            var f = d.nextSibling;
                            f && f.nodeName.toLowerCase() === c && a.ra(f, b, k)
                        })
                    }
                }
            }();
            a.b("__tr_ambtns", a.fb.Xb);
            (function() {
                a.r = {};
                a.r.l = function(a) {
                    this.l = a
                };
                a.r.l.prototype.text = function() {
                    var b = a.a.t(this.l),
                        b = "script" === b ? "text" : "textarea" === b ? "value" : "innerHTML";
                    if (0 == arguments.length) return this.l[b];
                    var d = arguments[0];
                    "innerHTML" === b ? a.a.$a(this.l, d) : this.l[b] = d
                };
                var b = a.a.e.F() + "_";
                a.r.l.prototype.data = function(c) {
                    if (1 === arguments.length) return a.a.e.get(this.l, b + c);
                    a.a.e.set(this.l, b + c, arguments[1])
                };
                var d = a.a.e.F();
                a.r.fa = function(a) {
                    this.l = a
                };
                a.r.fa.prototype = new a.r.l;
                a.r.fa.prototype.text = function() {
                    if (0 == arguments.length) {
                        var b = a.a.e.get(this.l, d) || {};
                        b.gb === p && b.Ga && (b.gb = b.Ga.innerHTML);
                        return b.gb
                    }
                    a.a.e.set(this.l, d, {
                        gb: arguments[0]
                    })
                };
                a.r.l.prototype.nodes = function() {
                    if (0 == arguments.length) return (a.a.e.get(this.l, d) || {}).Ga;
                    a.a.e.set(this.l, d, {
                        Ga: arguments[0]
                    })
                };
                a.b("templateSources", a.r);
                a.b("templateSources.domElement", a.r.l);
                a.b("templateSources.anonymousTemplate", a.r.fa)
            })();
            (function() {
                function b(b, c, d) {
                    var e;
                    for (c = a.f.nextSibling(c); b && (e = b) !== c;) b = a.f.nextSibling(e), d(e, b)
                }

                function d(c, d) {
                    if (c.length) {
                        var e = c[0],
                            g = c[c.length - 1],
                            h = e.parentNode,
                            n = a.J.instance,
                            t = n.preprocessNode;
                        if (t) {
                            b(e, g, function(a, b) {
                                var c = a.previousSibling,
                                    d = t.call(n, a);
                                d && (a === e && (e = d[0] || b), a === g && (g = d[d.length - 1] || c))
                            });
                            c.length = 0;
                            if (!e) return;
                            e === g ? c.push(e) : (c.push(e, g), a.a.ka(c, h))
                        }
                        b(e, g, function(b) {
                            1 !== b.nodeType && 8 !== b.nodeType || a.pb(d, b)
                        });
                        b(e, g, function(b) {
                            1 !== b.nodeType && 8 !== b.nodeType || a.D.Sb(b, [d])
                        });
                        a.a.ka(c, h)
                    }
                }

                function c(a) {
                    return a.nodeType ? a : 0 < a.length ? a[0] : null
                }

                function e(b, e, h, l, q) {
                    q = q || {};
                    var n = b && c(b),
                        n = n && n.ownerDocument,
                        t = q.templateEngine || g;
                    a.fb.ec(h, t, n);
                    h = t.renderTemplate(h, l, q, n);
                    if ("number" != typeof h.length || 0 < h.length && "number" != typeof h[0].nodeType) throw Error("Template engine must return an array of DOM nodes");
                    n = !1;
                    switch (e) {
                        case "replaceChildren":
                            a.f.T(b, h);
                            n = !0;
                            break;
                        case "replaceNode":
                            a.a.Lb(b, h);
                            n = !0;
                            break;
                        case "ignoreTargetNode":
                            break;
                        default:
                            throw Error("Unknown renderMode: " +
                                e);
                    }
                    n && (d(h, l), q.afterRender && a.k.B(q.afterRender, null, [h, l.$data]));
                    return h
                }
                var g;
                a.ab = function(b) {
                    if (b != p && !(b instanceof a.H)) throw Error("templateEngine must inherit from ko.templateEngine");
                    g = b
                };
                a.Ya = function(b, d, h, l, q) {
                    h = h || {};
                    if ((h.templateEngine || g) == p) throw Error("Set a template engine before calling renderTemplate");
                    q = q || "replaceChildren";
                    if (l) {
                        var n = c(l);
                        return a.j(function() {
                            var g = d && d instanceof a.N ? d : new a.N(a.a.c(d)),
                                p = a.C(b) ? b() : "function" === typeof b ? b(g.$data, g) : b,
                                g = e(l, q, p, g, h);
                            "replaceNode" == q && (l = g, n = c(l))
                        }, null, {
                            Ia: function() {
                                return !n || !a.a.Ja(n)
                            },
                            o: n && "replaceNode" == q ? n.parentNode : n
                        })
                    }
                    return a.D.Ua(function(c) {
                        a.Ya(b, d, h, c, "replaceNode")
                    })
                };
                a.uc = function(b, c, g, h, q) {
                    function n(a, b) {
                        d(b, s);
                        g.afterRender && g.afterRender(b, a)
                    }

                    function t(c, d) {
                        s = q.createChildContext(c, g.as, function(a) {
                            a.$index = d
                        });
                        var f = a.C(b) ? b() : "function" === typeof b ? b(c, s) : b;
                        return e(null, "ignoreTargetNode", f, s, g)
                    }
                    var s;
                    return a.j(function() {
                        var b = a.a.c(c) || [];
                        "undefined" == typeof b.length && (b = [b]);
                        b = a.a.ta(b, function(b) {
                            return g.includeDestroyed || b === p || null === b || !a.a.c(b._destroy)
                        });
                        a.k.B(a.a.Za, null, [h, b, t, g, n])
                    }, null, {
                        o: h
                    })
                };
                var h = a.a.e.F();
                a.d.template = {
                    init: function(b, c) {
                        var d = a.a.c(c());
                        "string" == typeof d || d.name ? a.f.ja(b) : (d = a.f.childNodes(b), d = a.a.oc(d), (new a.r.fa(b)).nodes(d));
                        return {
                            controlsDescendantBindings: !0
                        }
                    },
                    update: function(b, c, d, e, g) {
                        var n = c(),
                            t;
                        c = a.a.c(n);
                        d = !0;
                        e = null;
                        "string" == typeof c ? c = {} : (n = c.name, "if" in c && (d = a.a.c(c["if"])), d && "ifnot" in c && (d = !a.a.c(c.ifnot)), t = a.a.c(c.data));
                        "foreach" in c ? e = a.uc(n || b, d && c.foreach || [], c, b, g) : d ? (g = "data" in c ? g.createChildContext(t, c.as) : g, e = a.Ya(n || b, g, c, b)) : a.f.ja(b);
                        g = e;
                        (t = a.a.e.get(b, h)) && "function" == typeof t.K && t.K();
                        a.a.e.set(b, h, g && g.Z() ? g : p)
                    }
                };
                a.h.ha.template = function(b) {
                    b = a.h.Wa(b);
                    return 1 == b.length && b[0].unknown || a.h.lc(b, "name") ? null : "This template engine does not support anonymous templates nested within its templates"
                };
                a.f.Q.template = !0
            })();
            a.b("setTemplateEngine", a.ab);
            a.b("renderTemplate", a.Ya);
            a.a.wb = function(a, d, c) {
                if (a.length && d.length) {
                    var e, g, h, k, f;
                    for (e = g = 0;
                         (!c || e < c) && (k = a[g]); ++g) {
                        for (h = 0; f = d[h]; ++h)
                            if (k.value === f.value) {
                                k.moved = f.index;
                                f.moved = k.index;
                                d.splice(h, 1);
                                e = h = 0;
                                break
                            } e += h
                    }
                }
            };
            a.a.Fa = function() {
                function b(b, c, e, g, h) {
                    var k = Math.min,
                        f = Math.max,
                        m = [],
                        l, q = b.length,
                        n, p = c.length,
                        s = p - q || 1,
                        u = q + p + 1,
                        r, v, w;
                    for (l = 0; l <= q; l++)
                        for (v = r, m.push(r = []), w = k(p, l + s), n = f(0, l - 1); n <= w; n++) r[n] = n ? l ? b[l - 1] === c[n - 1] ? v[n - 1] : k(v[n] || u, r[n - 1] || u) + 1 : n + 1 : l + 1;
                    k = [];
                    f = [];
                    s = [];
                    l = q;
                    for (n = p; l || n;) p = m[l][n] - 1, n && p === m[l][n - 1] ? f.push(k[k.length] = {
                        status: e,
                        value: c[--n],
                        index: n
                    }) : l && p === m[l - 1][n] ? s.push(k[k.length] = {
                        status: g,
                        value: b[--l],
                        index: l
                    }) : (--n, --l, h.sparse || k.push({
                        status: "retained",
                        value: c[n]
                    }));
                    a.a.wb(f, s, 10 * q);
                    return k.reverse()
                }
                return function(a, c, e) {
                    e = "boolean" === typeof e ? {
                        dontLimitMoves: e
                    } : e || {};
                    a = a || [];
                    c = c || [];
                    return a.length <= c.length ? b(a, c, "added", "deleted", e) : b(c, a, "deleted", "added", e)
                }
            }();
            a.b("utils.compareArrays", a.a.Fa);
            (function() {
                function b(b, d, g, h, k) {
                    var f = [],
                        m = a.j(function() {
                            var l = d(g, k, a.a.ka(f, b)) || [];
                            0 < f.length && (a.a.Lb(f, l), h && a.k.B(h, null, [g, l, k]));
                            f.length = 0;
                            a.a.ga(f, l)
                        }, null, {
                            o: b,
                            Ia: function() {
                                return !a.a.ob(f)
                            }
                        });
                    return {
                        $: f,
                        j: m.Z() ? m : p
                    }
                }
                var d = a.a.e.F();
                a.a.Za = function(c, e, g, h, k) {
                    function f(b, d) {
                        x = q[d];
                        r !== d && (A[b] = x);
                        x.Na(r++);
                        a.a.ka(x.$, c);
                        s.push(x);
                        w.push(x)
                    }

                    function m(b, c) {
                        if (b)
                            for (var d = 0, e = c.length; d < e; d++) c[d] && a.a.u(c[d].$, function(a) {
                                b(a, d, c[d].sa)
                            })
                    }
                    e = e || [];
                    h = h || {};
                    var l = a.a.e.get(c, d) === p,
                        q = a.a.e.get(c, d) || [],
                        n = a.a.Da(q, function(a) {
                            return a.sa
                        }),
                        t = a.a.Fa(n, e, h.dontLimitMoves),
                        s = [],
                        u = 0,
                        r = 0,
                        v = [],
                        w = [];
                    e = [];
                    for (var A = [], n = [], x, B = 0, D, F; D = t[B]; B++) switch (F = D.moved, D.status) {
                        case "deleted":
                            F === p && (x = q[u], x.j && x.j.K(), v.push.apply(v, a.a.ka(x.$, c)), h.beforeRemove && (e[B] = x, w.push(x)));
                            u++;
                            break;
                        case "retained":
                            f(B, u++);
                            break;
                        case "added":
                            F !== p ? f(B, F) : (x = {
                                sa: D.value,
                                Na: a.p(r++)
                            }, s.push(x), w.push(x), l || (n[B] = x))
                    }
                    m(h.beforeMove, A);
                    a.a.u(v, h.beforeRemove ? a.R : a.removeNode);
                    for (var B = 0, l = a.f.firstChild(c), G; x = w[B]; B++) {
                        x.$ || a.a.extend(x, b(c, g, x.sa, k, x.Na));
                        for (u = 0; t = x.$[u]; l = t.nextSibling, G = t, u++) t !== l && a.f.Bb(c, t, G);
                        !x.ic && k && (k(x.sa, x.$, x.Na), x.ic = !0)
                    }
                    m(h.beforeRemove, e);
                    m(h.afterMove, A);
                    m(h.afterAdd, n);
                    a.a.e.set(c, d, s)
                }
            })();
            a.b("utils.setDomNodeChildrenFromArrayMapping", a.a.Za);
            a.O = function() {
                this.allowTemplateRewriting = !1
            };
            a.O.prototype = new a.H;
            a.O.prototype.renderTemplateSource = function(b) {
                var d = (9 > a.a.L ? 0 : b.nodes) ? b.nodes() : null;
                if (d) return a.a.S(d.cloneNode(!0).childNodes);
                b = b.text();
                return a.a.ba(b)
            };
            a.O.Oa = new a.O;
            a.ab(a.O.Oa);
            a.b("nativeTemplateEngine", a.O);
            (function() {
                a.Sa = function() {
                    var a = this.kc = function() {
                        if (!w || !w.tmpl) return 0;
                        try {
                            if (0 <= w.tmpl.tag.tmpl.open.toString().indexOf("__")) return 2
                        } catch (a) {}
                        return 1
                    }();
                    this.renderTemplateSource = function(b, e, g) {
                        g = g || {};
                        if (2 > a) throw Error("Your version of jQuery.tmpl is too old. Please upgrade to jQuery.tmpl 1.0.0pre or later.");
                        var h = b.data("precompiled");
                        h || (h = b.text() || "", h = w.template(null, "{{ko_with $item.koBindingContext}}" + h + "{{/ko_with}}"), b.data("precompiled", h));
                        b = [e.$data];
                        e = w.extend({
                            koBindingContext: e
                        }, g.templateOptions);
                        e = w.tmpl(h, b, e);
                        e.appendTo(v.createElement("div"));
                        w.fragments = {};
                        return e
                    };
                    this.createJavaScriptEvaluatorBlock = function(a) {
                        return "{{ko_code ((function() { return " + a + " })()) }}"
                    };
                    this.addTemplate = function(a, b) {
                        v.write("<script type='text/html' id='" + a + "'>" + b + "\x3c/script>")
                    };
                    0 < a && (w.tmpl.tag.ko_code = {
                        open: "__.push($1 || '');"
                    }, w.tmpl.tag.ko_with = {
                        open: "with($1) {",
                        close: "} "
                    })
                };
                a.Sa.prototype = new a.H;
                var b = new a.Sa;
                0 < b.kc && a.ab(b);
                a.b("jqueryTmplTemplateEngine", a.Sa)
            })()
        })
    })();
})();

function HomepageViewModel() {
    var self = this;
    self.user_email = ko.observable('');
    self.user_password = ko.observable('');
    self.formErrors = ko.observable(false);
    self.isFormLoading = ko.observable(false);
    self.showRegisterForm = ko.observable(false);
    self.timeoutErrorId = 0;
    self.featureTab = ko.observable(1);
    self.checkLogin = function(element) {
        if (self.isFormLoading()) {
            return false;
        }
        self.setFormErrors(false);
        var _data = $(element).serialize();
        self.setFormLoading(true);
        var xhr = $.ajax({
            type: "POST",
            url: '/?module=Homepage.Login&r=' + Math.random(),
            data: _data,
            dataType: 'json'
        });
        xhr.done(self.checkLoginStatus);
    };
    self.setFormErrors = function(status) {
        self.formErrors(status);
        if (status === true) {
            $(".login").stop(true).effect("shake", {
                distance: 10,
                times: 3
            });
            if (self.timeoutErrorId !== 0) {
                clearTimeout(self.timeoutErrorId);
            }
            self.timeoutErrorId = window.setTimeout(function() {
                self.formErrors(false);
            }, 10000);
        }
    };
    self.setFormLoading = function(status) {
        self.isFormLoading(status);
    };
    self.toggleRegisterForm = function(model, event) {
        if (self.showRegisterForm() === true) {
            self.showRegisterForm(false);
            $('#register-form').get(0).reset();
            self.reloadCaptcha();
        } else {
            self.showRegisterForm(true);
        }
    };
    self.reloadCaptcha = function() {
        if (typeof(reloadImageCode) === 'function') {
            reloadImageCode(document.getElementById('imgcode'));
        }
        $('#input-captcha').val('');
    };
    self.checkLoginStatus = function(response) {
        self.setFormLoading(false);
        var status = response.code || 0;
        response.data = response.data || {};
        var forward = response.data.forward || 0;
        if (status === 0 && forward === 0) {
            window.location.reload();
            return;
        }
        if (status === 0 && forward !== 0) {
            window.location = forward;
            return;
        }
        self.setFormErrors(true);
        self.displayFlashMessages(response);
    };
    self.doFacebookLogin = function(model, event) {
        var $btn = $(event.target);
        var href = $btn.data('href');
        window.location = href;
    };
    self.doRegister = function(element) {
        var _data = $(element).serialize();
        var xhr = $.ajax({
            type: "POST",
            url: '/?module=Homepage.Register&r=' + Math.random(),
            data: _data,
            dataType: 'json'
        });
        xhr.done(function(data) {
            var code = data.code;
            self.displayFlashMessages(data);
            if (code !== 0) {
                self.reloadCaptcha();
            }
        });
    };
    self.doForgottenPassword = function(model, event) {};
    self.messagifyEntries = function(messages) {
        if (typeof(messages) === 'string') {
            messages = [messages];
        }
        if (typeof(messages) === 'object') {
            var tmp_messages = $.map(messages, function(value, index) {
                return [value];
            });
            messages = tmp_messages;
        }
        return messages;
    };
    self.displayFlashMessages = function(response) {
        var code = response.code;
        if (code === 0) {
            self.toggleRegisterForm(true);
            var messages = self.messagifyEntries(response.data.success);
            hmessage.promptSuccess(messages);
            return true;
        }
        var messages = self.messagifyEntries(response.data.message);
        hmessage.promptErrors(messages);
        return true;
    };
    self.promptInline = function(model, event) {
        var $element = $(event.target);
        var inline_id = $element.attr('href');
        var $content = $(inline_id);
        if ($content.size() === 0) {
            return false;
        }
        var title = $element.attr('title') || '';
        $.prompt([{
            title: title,
            buttons: {
                "Close": false
            },
            html: $content.html()
        }]);
    };
    self.getFeatureTab = function() {
        return self.featureTab() || 1;
    };
    self.setFeatureTab = function(tab) {
        self.featureTab(tab);
        $('.scroll-pane').perfectScrollbar();
    };
    self.isFeatureTab = function(tab) {
        return self.getFeatureTab() === tab;
    };
}