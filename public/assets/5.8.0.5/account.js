/*!
 * Knockout JavaScript library v3.2.0
 * (c) Steven Sanderson - http://knockoutjs.com/
 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
 */

(function () {
    (function (p) {
        var s = this || (0, eval)("this"), v = s.document, L = s.navigator, w = s.jQuery, D = s.JSON;
        (function (p) {
            "function" === typeof require && "object" === typeof exports && "object" === typeof module ? p(module.exports || exports, require) : "function" === typeof define && define.amd ? define(["exports", "require"], p) : p(s.ko = {})
        })(function (M, N) {
            function H(a, d) {
                return null === a || typeof a in R ? a === d : !1
            }

            function S(a, d) {
                var c;
                return function () {
                    c || (c = setTimeout(function () {
                        c = p;
                        a()
                    }, d))
                }
            }

            function T(a, d) {
                var c;
                return function () {
                    clearTimeout(c);
                    c = setTimeout(a, d)
                }
            }

            function I(b, d, c, e) {
                a.d[b] = {
                    init: function (b, h, k, f, m) {
                        var l, q;
                        a.s(function () {
                            var f = a.a.c(h()), k = !c !== !f, z = !q;
                            if (z || d || k !== l) z && a.Y.la() && (q = a.a.ia(a.f.childNodes(b), !0)), k ? (z || a.f.T(b, a.a.ia(q)), a.Ca(e ? e(m, f) : m, b)) : a.f.ja(b), l = k
                        }, null, {o: b});
                        return {controlsDescendantBindings: !0}
                    }
                };
                a.h.ha[b] = !1;
                a.f.Q[b] = !0
            }

            var a = "undefined" !== typeof M ? M : {};
            a.b = function (b, d) {
                for (var c = b.split("."), e = a, g = 0; g < c.length - 1; g++) e = e[c[g]];
                e[c[c.length - 1]] = d
            };
            a.A = function (a, d, c) {
                a[d] = c
            };
            a.version = "3.2.0";
            a.b("version", a.version);
            a.a = function () {
                function b(a, b) {
                    for (var c in a) a.hasOwnProperty(c) && b(c, a[c])
                }

                function d(a, b) {
                    if (b) for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
                    return a
                }

                function c(a, b) {
                    a.__proto__ = b;
                    return a
                }

                var e = {__proto__: []} instanceof Array, g = {}, h = {};
                g[L && /Firefox\/2/i.test(L.userAgent) ? "KeyboardEvent" : "UIEvents"] = ["keyup", "keydown", "keypress"];
                g.MouseEvents = "click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave".split(" ");
                b(g, function (a, b) {
                    if (b.length) for (var c =
                        0, d = b.length; c < d; c++) h[b[c]] = a
                });
                var k = {propertychange: !0}, f = v && function () {
                    for (var a = 3, b = v.createElement("div"), c = b.getElementsByTagName("i"); b.innerHTML = "\x3c!--[if gt IE " + ++a + "]><i></i><![endif]--\x3e", c[0];) ;
                    return 4 < a ? a : p
                }();
                return {
                    vb: ["authenticity_token", /^__RequestVerificationToken(_.*)?$/], u: function (a, b) {
                        for (var c = 0, d = a.length; c < d; c++) b(a[c], c)
                    }, m: function (a, b) {
                        if ("function" == typeof Array.prototype.indexOf) return Array.prototype.indexOf.call(a, b);
                        for (var c = 0, d = a.length; c < d; c++) if (a[c] ===
                            b) return c;
                        return -1
                    }, qb: function (a, b, c) {
                        for (var d = 0, f = a.length; d < f; d++) if (b.call(c, a[d], d)) return a[d];
                        return null
                    }, ua: function (m, b) {
                        var c = a.a.m(m, b);
                        0 < c ? m.splice(c, 1) : 0 === c && m.shift()
                    }, rb: function (m) {
                        m = m || [];
                        for (var b = [], c = 0, d = m.length; c < d; c++) 0 > a.a.m(b, m[c]) && b.push(m[c]);
                        return b
                    }, Da: function (a, b) {
                        a = a || [];
                        for (var c = [], d = 0, f = a.length; d < f; d++) c.push(b(a[d], d));
                        return c
                    }, ta: function (a, b) {
                        a = a || [];
                        for (var c = [], d = 0, f = a.length; d < f; d++) b(a[d], d) && c.push(a[d]);
                        return c
                    }, ga: function (a, b) {
                        if (b instanceof
                            Array) a.push.apply(a, b); else for (var c = 0, d = b.length; c < d; c++) a.push(b[c]);
                        return a
                    }, ea: function (b, c, d) {
                        var f = a.a.m(a.a.Xa(b), c);
                        0 > f ? d && b.push(c) : d || b.splice(f, 1)
                    }, xa: e, extend: d, za: c, Aa: e ? c : d, G: b, na: function (a, b) {
                        if (!a) return a;
                        var c = {}, d;
                        for (d in a) a.hasOwnProperty(d) && (c[d] = b(a[d], d, a));
                        return c
                    }, Ka: function (b) {
                        for (; b.firstChild;) a.removeNode(b.firstChild)
                    }, oc: function (b) {
                        b = a.a.S(b);
                        for (var c = v.createElement("div"), d = 0, f = b.length; d < f; d++) c.appendChild(a.R(b[d]));
                        return c
                    }, ia: function (b, c) {
                        for (var d =
                            0, f = b.length, e = []; d < f; d++) {
                            var k = b[d].cloneNode(!0);
                            e.push(c ? a.R(k) : k)
                        }
                        return e
                    }, T: function (b, c) {
                        a.a.Ka(b);
                        if (c) for (var d = 0, f = c.length; d < f; d++) b.appendChild(c[d])
                    }, Lb: function (b, c) {
                        var d = b.nodeType ? [b] : b;
                        if (0 < d.length) {
                            for (var f = d[0], e = f.parentNode, k = 0, g = c.length; k < g; k++) e.insertBefore(c[k], f);
                            k = 0;
                            for (g = d.length; k < g; k++) a.removeNode(d[k])
                        }
                    }, ka: function (a, b) {
                        if (a.length) {
                            for (b = 8 === b.nodeType && b.parentNode || b; a.length && a[0].parentNode !== b;) a.shift();
                            if (1 < a.length) {
                                var c = a[0], d = a[a.length - 1];
                                for (a.length =
                                         0; c !== d;) if (a.push(c), c = c.nextSibling, !c) return;
                                a.push(d)
                            }
                        }
                        return a
                    }, Nb: function (a, b) {
                        7 > f ? a.setAttribute("selected", b) : a.selected = b
                    }, cb: function (a) {
                        return null === a || a === p ? "" : a.trim ? a.trim() : a.toString().replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
                    }, vc: function (a, b) {
                        a = a || "";
                        return b.length > a.length ? !1 : a.substring(0, b.length) === b
                    }, cc: function (a, b) {
                        if (a === b) return !0;
                        if (11 === a.nodeType) return !1;
                        if (b.contains) return b.contains(3 === a.nodeType ? a.parentNode : a);
                        if (b.compareDocumentPosition) return 16 == (b.compareDocumentPosition(a) &
                            16);
                        for (; a && a != b;) a = a.parentNode;
                        return !!a
                    }, Ja: function (b) {
                        return a.a.cc(b, b.ownerDocument.documentElement)
                    }, ob: function (b) {
                        return !!a.a.qb(b, a.a.Ja)
                    }, t: function (a) {
                        return a && a.tagName && a.tagName.toLowerCase()
                    }, n: function (b, c, d) {
                        var e = f && k[c];
                        if (!e && w) w(b).bind(c, d); else if (e || "function" != typeof b.addEventListener) if ("undefined" != typeof b.attachEvent) {
                            var g = function (a) {
                                d.call(b, a)
                            }, h = "on" + c;
                            b.attachEvent(h, g);
                            a.a.w.da(b, function () {
                                b.detachEvent(h, g)
                            })
                        } else throw Error("Browser doesn't support addEventListener or attachEvent");
                        else b.addEventListener(c, d, !1)
                    }, oa: function (b, c) {
                        if (!b || !b.nodeType) throw Error("element must be a DOM node when calling triggerEvent");
                        var d;
                        "input" === a.a.t(b) && b.type && "click" == c.toLowerCase() ? (d = b.type, d = "checkbox" == d || "radio" == d) : d = !1;
                        if (w && !d) w(b).trigger(c); else if ("function" == typeof v.createEvent) if ("function" == typeof b.dispatchEvent) d = v.createEvent(h[c] || "HTMLEvents"), d.initEvent(c, !0, !0, s, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, b), b.dispatchEvent(d); else throw Error("The supplied element doesn't support dispatchEvent");
                        else if (d && b.click) b.click(); else if ("undefined" != typeof b.fireEvent) b.fireEvent("on" + c); else throw Error("Browser doesn't support triggering events");
                    }, c: function (b) {
                        return a.C(b) ? b() : b
                    }, Xa: function (b) {
                        return a.C(b) ? b.v() : b
                    }, Ba: function (b, c, d) {
                        if (c) {
                            var f = /\S+/g, e = b.className.match(f) || [];
                            a.a.u(c.match(f), function (b) {
                                a.a.ea(e, b, d)
                            });
                            b.className = e.join(" ")
                        }
                    }, bb: function (b, c) {
                        var d = a.a.c(c);
                        if (null === d || d === p) d = "";
                        var f = a.f.firstChild(b);
                        !f || 3 != f.nodeType || a.f.nextSibling(f) ? a.f.T(b, [b.ownerDocument.createTextNode(d)]) :
                            f.data = d;
                        a.a.fc(b)
                    }, Mb: function (a, b) {
                        a.name = b;
                        if (7 >= f) try {
                            a.mergeAttributes(v.createElement("<input name='" + a.name + "'/>"), !1)
                        } catch (c) {
                        }
                    }, fc: function (a) {
                        9 <= f && (a = 1 == a.nodeType ? a : a.parentNode, a.style && (a.style.zoom = a.style.zoom))
                    }, dc: function (a) {
                        if (f) {
                            var b = a.style.width;
                            a.style.width = 0;
                            a.style.width = b
                        }
                    }, sc: function (b, c) {
                        b = a.a.c(b);
                        c = a.a.c(c);
                        for (var d = [], f = b; f <= c; f++) d.push(f);
                        return d
                    }, S: function (a) {
                        for (var b = [], c = 0, d = a.length; c < d; c++) b.push(a[c]);
                        return b
                    }, yc: 6 === f, zc: 7 === f, L: f, xb: function (b, c) {
                        for (var d =
                            a.a.S(b.getElementsByTagName("input")).concat(a.a.S(b.getElementsByTagName("textarea"))), f = "string" == typeof c ? function (a) {
                            return a.name === c
                        } : function (a) {
                            return c.test(a.name)
                        }, e = [], k = d.length - 1; 0 <= k; k--) f(d[k]) && e.push(d[k]);
                        return e
                    }, pc: function (b) {
                        return "string" == typeof b && (b = a.a.cb(b)) ? D && D.parse ? D.parse(b) : (new Function("return " + b))() : null
                    }, eb: function (b, c, d) {
                        if (!D || !D.stringify) throw Error("Cannot find JSON.stringify(). Some browsers (e.g., IE < 8) don't support it natively, but you can overcome this by adding a script reference to json2.js, downloadable from http://www.json.org/json2.js");
                        return D.stringify(a.a.c(b), c, d)
                    }, qc: function (c, d, f) {
                        f = f || {};
                        var e = f.params || {}, k = f.includeFields || this.vb, g = c;
                        if ("object" == typeof c && "form" === a.a.t(c)) for (var g = c.action, h = k.length - 1; 0 <= h; h--) for (var r = a.a.xb(c, k[h]), E = r.length - 1; 0 <= E; E--) e[r[E].name] = r[E].value;
                        d = a.a.c(d);
                        var y = v.createElement("form");
                        y.style.display = "none";
                        y.action = g;
                        y.method = "post";
                        for (var p in d) c = v.createElement("input"), c.type = "hidden", c.name = p, c.value = a.a.eb(a.a.c(d[p])), y.appendChild(c);
                        b(e, function (a, b) {
                            var c = v.createElement("input");
                            c.type = "hidden";
                            c.name = a;
                            c.value = b;
                            y.appendChild(c)
                        });
                        v.body.appendChild(y);
                        f.submitter ? f.submitter(y) : y.submit();
                        setTimeout(function () {
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
            a.b("utils.fieldsIncludedWithJsonPost",
                a.a.vb);
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
            Function.prototype.bind || (Function.prototype.bind = function (a) {
                var d =
                    this, c = Array.prototype.slice.call(arguments);
                a = c.shift();
                return function () {
                    return d.apply(a, c.concat(Array.prototype.slice.call(arguments)))
                }
            });
            a.a.e = new function () {
                function a(b, h) {
                    var k = b[c];
                    if (!k || "null" === k || !e[k]) {
                        if (!h) return p;
                        k = b[c] = "ko" + d++;
                        e[k] = {}
                    }
                    return e[k]
                }

                var d = 0, c = "__ko__" + (new Date).getTime(), e = {};
                return {
                    get: function (c, d) {
                        var e = a(c, !1);
                        return e === p ? p : e[d]
                    }, set: function (c, d, e) {
                        if (e !== p || a(c, !1) !== p) a(c, !0)[d] = e
                    }, clear: function (a) {
                        var b = a[c];
                        return b ? (delete e[b], a[c] = null, !0) : !1
                    }, F: function () {
                        return d++ +
                            c
                    }
                }
            };
            a.b("utils.domData", a.a.e);
            a.b("utils.domData.clear", a.a.e.clear);
            a.a.w = new function () {
                function b(b, d) {
                    var f = a.a.e.get(b, c);
                    f === p && d && (f = [], a.a.e.set(b, c, f));
                    return f
                }

                function d(c) {
                    var e = b(c, !1);
                    if (e) for (var e = e.slice(0), f = 0; f < e.length; f++) e[f](c);
                    a.a.e.clear(c);
                    a.a.w.cleanExternalData(c);
                    if (g[c.nodeType]) for (e = c.firstChild; c = e;) e = c.nextSibling, 8 === c.nodeType && d(c)
                }

                var c = a.a.e.F(), e = {1: !0, 8: !0, 9: !0}, g = {1: !0, 9: !0};
                return {
                    da: function (a, c) {
                        if ("function" != typeof c) throw Error("Callback must be a function");
                        b(a, !0).push(c)
                    }, Kb: function (d, e) {
                        var f = b(d, !1);
                        f && (a.a.ua(f, e), 0 == f.length && a.a.e.set(d, c, p))
                    }, R: function (b) {
                        if (e[b.nodeType] && (d(b), g[b.nodeType])) {
                            var c = [];
                            a.a.ga(c, b.getElementsByTagName("*"));
                            for (var f = 0, m = c.length; f < m; f++) d(c[f])
                        }
                        return b
                    }, removeNode: function (b) {
                        a.R(b);
                        b.parentNode && b.parentNode.removeChild(b)
                    }, cleanExternalData: function (a) {
                        w && "function" == typeof w.cleanData && w.cleanData([a])
                    }
                }
            };
            a.R = a.a.w.R;
            a.removeNode = a.a.w.removeNode;
            a.b("cleanNode", a.R);
            a.b("removeNode", a.removeNode);
            a.b("utils.domNodeDisposal",
                a.a.w);
            a.b("utils.domNodeDisposal.addDisposeCallback", a.a.w.da);
            a.b("utils.domNodeDisposal.removeDisposeCallback", a.a.w.Kb);
            (function () {
                a.a.ba = function (b) {
                    var d;
                    if (w) if (w.parseHTML) d = w.parseHTML(b) || []; else {
                        if ((d = w.clean([b])) && d[0]) {
                            for (b = d[0]; b.parentNode && 11 !== b.parentNode.nodeType;) b = b.parentNode;
                            b.parentNode && b.parentNode.removeChild(b)
                        }
                    } else {
                        var c = a.a.cb(b).toLowerCase();
                        d = v.createElement("div");
                        c = c.match(/^<(thead|tbody|tfoot)/) && [1, "<table>", "</table>"] || !c.indexOf("<tr") && [2, "<table><tbody>",
                            "</tbody></table>"] || (!c.indexOf("<td") || !c.indexOf("<th")) && [3, "<table><tbody><tr>", "</tr></tbody></table>"] || [0, "", ""];
                        b = "ignored<div>" + c[1] + b + c[2] + "</div>";
                        for ("function" == typeof s.innerShiv ? d.appendChild(s.innerShiv(b)) : d.innerHTML = b; c[0]--;) d = d.lastChild;
                        d = a.a.S(d.lastChild.childNodes)
                    }
                    return d
                };
                a.a.$a = function (b, d) {
                    a.a.Ka(b);
                    d = a.a.c(d);
                    if (null !== d && d !== p) if ("string" != typeof d && (d = d.toString()), w) w(b).html(d); else for (var c = a.a.ba(d), e = 0; e < c.length; e++) b.appendChild(c[e])
                }
            })();
            a.b("utils.parseHtmlFragment",
                a.a.ba);
            a.b("utils.setHtml", a.a.$a);
            a.D = function () {
                function b(c, d) {
                    if (c) if (8 == c.nodeType) {
                        var g = a.D.Gb(c.nodeValue);
                        null != g && d.push({bc: c, mc: g})
                    } else if (1 == c.nodeType) for (var g = 0, h = c.childNodes, k = h.length; g < k; g++) b(h[g], d)
                }

                var d = {};
                return {
                    Ua: function (a) {
                        if ("function" != typeof a) throw Error("You can only pass a function to ko.memoization.memoize()");
                        var b = (4294967296 * (1 + Math.random()) | 0).toString(16).substring(1) + (4294967296 * (1 + Math.random()) | 0).toString(16).substring(1);
                        d[b] = a;
                        return "\x3c!--[ko_memo:" +
                            b + "]--\x3e"
                    }, Rb: function (a, b) {
                        var g = d[a];
                        if (g === p) throw Error("Couldn't find any memo with ID " + a + ". Perhaps it's already been unmemoized.");
                        try {
                            return g.apply(null, b || []), !0
                        } finally {
                            delete d[a]
                        }
                    }, Sb: function (c, d) {
                        var g = [];
                        b(c, g);
                        for (var h = 0, k = g.length; h < k; h++) {
                            var f = g[h].bc, m = [f];
                            d && a.a.ga(m, d);
                            a.D.Rb(g[h].mc, m);
                            f.nodeValue = "";
                            f.parentNode && f.parentNode.removeChild(f)
                        }
                    }, Gb: function (a) {
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
                throttle: function (b, d) {
                    b.throttleEvaluation = d;
                    var c = null;
                    return a.j({
                        read: b, write: function (a) {
                            clearTimeout(c);
                            c = setTimeout(function () {
                                b(a)
                            }, d)
                        }
                    })
                }, rateLimit: function (a, d) {
                    var c, e, g;
                    "number" == typeof d ? c = d : (c = d.timeout, e = d.method);
                    g = "notifyWhenChangesStop" == e ? T : S;
                    a.Ta(function (a) {
                        return g(a, c)
                    })
                }, notify: function (a, d) {
                    a.equalityComparer = "always" == d ? null : H
                }
            };
            var R =
                {undefined: 1, "boolean": 1, number: 1, string: 1};
            a.b("extenders", a.La);
            a.Pb = function (b, d, c) {
                this.target = b;
                this.wa = d;
                this.ac = c;
                this.Cb = !1;
                a.A(this, "dispose", this.K)
            };
            a.Pb.prototype.K = function () {
                this.Cb = !0;
                this.ac()
            };
            a.P = function () {
                a.a.Aa(this, a.P.fn);
                this.M = {}
            };
            var G = "change", A = {
                U: function (b, d, c) {
                    var e = this;
                    c = c || G;
                    var g = new a.Pb(e, d ? b.bind(d) : b, function () {
                        a.a.ua(e.M[c], g);
                        e.nb && e.nb()
                    });
                    e.va && e.va(c);
                    e.M[c] || (e.M[c] = []);
                    e.M[c].push(g);
                    return g
                }, notifySubscribers: function (b, d) {
                    d = d || G;
                    if (this.Ab(d)) try {
                        a.k.Ea();
                        for (var c = this.M[d].slice(0), e = 0, g; g = c[e]; ++e) g.Cb || g.wa(b)
                    } finally {
                        a.k.end()
                    }
                }, Ta: function (b) {
                    var d = this, c = a.C(d), e, g, h;
                    d.qa || (d.qa = d.notifySubscribers, d.notifySubscribers = function (a, b) {
                        b && b !== G ? "beforeChange" === b ? d.kb(a) : d.qa(a, b) : d.lb(a)
                    });
                    var k = b(function () {
                        c && h === d && (h = d());
                        e = !1;
                        d.Pa(g, h) && d.qa(g = h)
                    });
                    d.lb = function (a) {
                        e = !0;
                        h = a;
                        k()
                    };
                    d.kb = function (a) {
                        e || (g = a, d.qa(a, "beforeChange"))
                    }
                }, Ab: function (a) {
                    return this.M[a] && this.M[a].length
                }, yb: function () {
                    var b = 0;
                    a.a.G(this.M, function (a, c) {
                        b += c.length
                    });
                    return b
                }, Pa: function (a, d) {
                    return !this.equalityComparer || !this.equalityComparer(a, d)
                }, extend: function (b) {
                    var d = this;
                    b && a.a.G(b, function (b, e) {
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
            a.Db = function (a) {
                return null != a && "function" == typeof a.U && "function" == typeof a.notifySubscribers
            };
            a.b("subscribable", a.P);
            a.b("isSubscribable", a.Db);
            a.Y = a.k = function () {
                function b(a) {
                    c.push(e);
                    e = a
                }

                function d() {
                    e = c.pop()
                }

                var c = [], e, g = 0;
                return {
                    Ea: b, end: d, Jb: function (b) {
                        if (e) {
                            if (!a.Db(b)) throw Error("Only subscribable things can act as dependencies");
                            e.wa(b, b.Vb || (b.Vb = ++g))
                        }
                    }, B: function (a, c, f) {
                        try {
                            return b(), a.apply(c, f || [])
                        } finally {
                            d()
                        }
                    }, la: function () {
                        if (e) return e.s.la()
                    }, ma: function () {
                        if (e) return e.ma
                    }
                }
            }();
            a.b("computedContext", a.Y);
            a.b("computedContext.getDependenciesCount", a.Y.la);
            a.b("computedContext.isInitial", a.Y.ma);
            a.b("computedContext.isSleeping", a.Y.Ac);
            a.p = function (b) {
                function d() {
                    if (0 <
                        arguments.length) return d.Pa(c, arguments[0]) && (d.X(), c = arguments[0], d.W()), this;
                    a.k.Jb(d);
                    return c
                }

                var c = b;
                a.P.call(d);
                a.a.Aa(d, a.p.fn);
                d.v = function () {
                    return c
                };
                d.W = function () {
                    d.notifySubscribers(c)
                };
                d.X = function () {
                    d.notifySubscribers(c, "beforeChange")
                };
                a.A(d, "peek", d.v);
                a.A(d, "valueHasMutated", d.W);
                a.A(d, "valueWillMutate", d.X);
                return d
            };
            a.p.fn = {equalityComparer: H};
            var F = a.p.rc = "__ko_proto__";
            a.p.fn[F] = a.p;
            a.a.xa && a.a.za(a.p.fn, a.P.fn);
            a.Ma = function (b, d) {
                return null === b || b === p || b[F] === p ? !1 : b[F] ===
                d ? !0 : a.Ma(b[F], d)
            };
            a.C = function (b) {
                return a.Ma(b, a.p)
            };
            a.Ra = function (b) {
                return "function" == typeof b && b[F] === a.p || "function" == typeof b && b[F] === a.j && b.hc ? !0 : !1
            };
            a.b("observable", a.p);
            a.b("isObservable", a.C);
            a.b("isWriteableObservable", a.Ra);
            a.b("isWritableObservable", a.Ra);
            a.aa = function (b) {
                b = b || [];
                if ("object" != typeof b || !("length" in b)) throw Error("The argument passed when initializing an observable array must be an array, or null, or undefined.");
                b = a.p(b);
                a.a.Aa(b, a.aa.fn);
                return b.extend({trackArrayChanges: !0})
            };
            a.aa.fn = {
                remove: function (b) {
                    for (var d = this.v(), c = [], e = "function" != typeof b || a.C(b) ? function (a) {
                        return a === b
                    } : b, g = 0; g < d.length; g++) {
                        var h = d[g];
                        e(h) && (0 === c.length && this.X(), c.push(h), d.splice(g, 1), g--)
                    }
                    c.length && this.W();
                    return c
                }, removeAll: function (b) {
                    if (b === p) {
                        var d = this.v(), c = d.slice(0);
                        this.X();
                        d.splice(0, d.length);
                        this.W();
                        return c
                    }
                    return b ? this.remove(function (c) {
                        return 0 <= a.a.m(b, c)
                    }) : []
                }, destroy: function (b) {
                    var d = this.v(), c = "function" != typeof b || a.C(b) ? function (a) {
                        return a === b
                    } : b;
                    this.X();
                    for (var e = d.length - 1; 0 <= e; e--) c(d[e]) && (d[e]._destroy = !0);
                    this.W()
                }, destroyAll: function (b) {
                    return b === p ? this.destroy(function () {
                        return !0
                    }) : b ? this.destroy(function (d) {
                        return 0 <= a.a.m(b, d)
                    }) : []
                }, indexOf: function (b) {
                    var d = this();
                    return a.a.m(d, b)
                }, replace: function (a, d) {
                    var c = this.indexOf(a);
                    0 <= c && (this.X(), this.v()[c] = d, this.W())
                }
            };
            a.a.u("pop push reverse shift sort splice unshift".split(" "), function (b) {
                a.aa.fn[b] = function () {
                    var a = this.v();
                    this.X();
                    this.sb(a, b, arguments);
                    a = a[b].apply(a, arguments);
                    this.W();
                    return a
                }
            });
            a.a.u(["slice"], function (b) {
                a.aa.fn[b] = function () {
                    var a = this();
                    return a[b].apply(a, arguments)
                }
            });
            a.a.xa && a.a.za(a.aa.fn, a.p.fn);
            a.b("observableArray", a.aa);
            var J = "arrayChange";
            a.La.trackArrayChanges = function (b) {
                function d() {
                    if (!c) {
                        c = !0;
                        var d = b.notifySubscribers;
                        b.notifySubscribers = function (a, b) {
                            b && b !== G || ++g;
                            return d.apply(this, arguments)
                        };
                        var f = [].concat(b.v() || []);
                        e = null;
                        b.U(function (c) {
                            c = [].concat(c || []);
                            if (b.Ab(J)) {
                                var d;
                                if (!e || 1 < g) e = a.a.Fa(f, c, {sparse: !0});
                                d = e;
                                d.length && b.notifySubscribers(d,
                                    J)
                            }
                            f = c;
                            e = null;
                            g = 0
                        })
                    }
                }

                if (!b.sb) {
                    var c = !1, e = null, g = 0, h = b.U;
                    b.U = b.subscribe = function (a, b, c) {
                        c === J && d();
                        return h.apply(this, arguments)
                    };
                    b.sb = function (b, d, m) {
                        function l(a, b, c) {
                            return q[q.length] = {status: a, value: b, index: c}
                        }

                        if (c && !g) {
                            var q = [], h = b.length, t = m.length, z = 0;
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
                                    for (var h = 1 === t ? h : Math.min(d + (m[1] || 0),
                                        h), t = d + t - 2, z = Math.max(h, t), u = [], r = [], E = 2; d < z; ++d, ++E) d < h && r.push(l("deleted", b[d], d)), d < t && u.push(l("added", m[E], d));
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
            a.s = a.j = function (b, d, c) {
                function e() {
                    a.a.G(v, function (a, b) {
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
                                wa: function (a, b) {
                                    c[b] || (c[b] = 1, ++C)
                                }, s: f, ma: p
                            });
                            C = 0;
                            q = r.call(d)
                        } finally {
                            a.k.end(), t = !1
                        } else try {
                            var e = v, m = C;
                            a.k.Ea({
                                wa: function (a, b) {
                                    u || (m && e[b] ? (v[b] = e[b], ++C, delete e[b], --m) : v[b] || (v[b] = a.U(h), ++C))
                                }, s: f, ma: E ? p : !C
                            });
                            v = {};
                            C = 0;
                            try {
                                var l = d ? r.call(d) : r()
                            } finally {
                                a.k.end(), m && a.a.G(e, function (a, b) {
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
                        if ("function" === typeof O) O.apply(d,
                            arguments); else throw Error("Cannot write a value to a ko.computed unless you specify a 'write' option. If you wish to read the current value, don't pass any parameters.");
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

                var q, n = !0, t = !1, z = !1, u = !1, r = b, E = !1, y = !1;
                r && "object" == typeof r ? (c = r, r = c.read) : (c = c || {}, r || (r = c.read));
                if ("function" != typeof r) throw Error("Pass a function that returns the value of the ko.computed");
                var O = c.write, x = c.disposeWhenNodeIsRemoved ||
                    c.o || null, B = c.disposeWhen || c.Ia, w = B, s = g, v = {}, C = 0, P = null;
                d || (d = c.owner);
                a.P.call(f);
                a.a.Aa(f, a.j.fn);
                f.v = m;
                f.la = function () {
                    return C
                };
                f.hc = "function" === typeof c.write;
                f.K = function () {
                    s()
                };
                f.Z = l;
                var A = f.Ta;
                f.Ta = function (a) {
                    A.call(f, a);
                    f.ib = function () {
                        f.kb(q);
                        n = !0;
                        f.lb(f)
                    }
                };
                c.pure ? (y = E = !0, f.va = function () {
                    y && (y = !1, k(!0))
                }, f.nb = function () {
                    f.yb() || (e(), y = n = !0)
                }) : c.deferEvaluation && (f.va = function () {
                    m();
                    delete f.va
                });
                a.A(f, "peek", f.v);
                a.A(f, "dispose", f.K);
                a.A(f, "isActive", f.Z);
                a.A(f, "getDependenciesCount",
                    f.la);
                x && (z = !0, x.nodeType && (w = function () {
                    return !a.a.Ja(x) || B && B()
                }));
                y || c.deferEvaluation || k();
                x && l() && x.nodeType && (s = function () {
                    a.a.w.Kb(x, s);
                    g()
                }, a.a.w.da(x, s));
                return f
            };
            a.jc = function (b) {
                return a.Ma(b, a.j)
            };
            A = a.p.rc;
            a.j[A] = a.p;
            a.j.fn = {equalityComparer: H};
            a.j.fn[A] = a.j;
            a.a.xa && a.a.za(a.j.fn, a.P.fn);
            a.b("dependentObservable", a.j);
            a.b("computed", a.j);
            a.b("isComputed", a.jc);
            a.Ib = function (b, d) {
                if ("function" === typeof b) return a.s(b, d, {pure: !0});
                b = a.a.extend({}, b);
                b.pure = !0;
                return a.s(b, d)
            };
            a.b("pureComputed",
                a.Ib);
            (function () {
                function b(a, g, h) {
                    h = h || new c;
                    a = g(a);
                    if ("object" != typeof a || null === a || a === p || a instanceof Date || a instanceof String || a instanceof Number || a instanceof Boolean) return a;
                    var k = a instanceof Array ? [] : {};
                    h.save(a, k);
                    d(a, function (c) {
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
                        "function" ==
                        typeof a.toJSON && b("toJSON")
                    } else for (c in a) b(c)
                }

                function c() {
                    this.keys = [];
                    this.hb = []
                }

                a.Qb = function (c) {
                    if (0 == arguments.length) throw Error("When calling ko.toJS, pass the object you want to convert.");
                    return b(c, function (b) {
                        for (var c = 0; a.C(b) && 10 > c; c++) b = b();
                        return b
                    })
                };
                a.toJSON = function (b, c, d) {
                    b = a.Qb(b);
                    return a.a.eb(b, c, d)
                };
                c.prototype = {
                    save: function (b, c) {
                        var d = a.a.m(this.keys, b);
                        0 <= d ? this.hb[d] = c : (this.keys.push(b), this.hb.push(c))
                    }, get: function (b) {
                        b = a.a.m(this.keys, b);
                        return 0 <= b ? this.hb[b] : p
                    }
                }
            })();
            a.b("toJS", a.Qb);
            a.b("toJSON", a.toJSON);
            (function () {
                a.i = {
                    q: function (b) {
                        switch (a.a.t(b)) {
                            case "option":
                                return !0 === b.__ko__hasDomDataOptionValue__ ? a.a.e.get(b, a.d.options.Va) : 7 >= a.a.L ? b.getAttributeNode("value") && b.getAttributeNode("value").specified ? b.value : b.text : b.value;
                            case "select":
                                return 0 <= b.selectedIndex ? a.i.q(b.options[b.selectedIndex]) : p;
                            default:
                                return b.value
                        }
                    }, ca: function (b, d, c) {
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
                                for (var e = -1, g = 0, h = b.options.length, k; g < h; ++g) if (k = a.i.q(b.options[g]), k == d || "" == k && d === p) {
                                    e = g;
                                    break
                                }
                                if (c || 0 <= e || d === p && 1 < b.size) b.selectedIndex = e;
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
            a.b("selectExtensions.writeValue",
                a.i.ca);
            a.h = function () {
                function b(b) {
                    b = a.a.cb(b);
                    123 === b.charCodeAt(0) && (b = b.slice(1, -1));
                    var c = [], d = b.match(e), k, n, t = 0;
                    if (d) {
                        d.push(",");
                        for (var z = 0, u; u = d[z]; ++z) {
                            var r = u.charCodeAt(0);
                            if (44 === r) {
                                if (0 >= t) {
                                    k && c.push(n ? {key: k, value: n.join("")} : {unknown: k});
                                    k = n = t = 0;
                                    continue
                                }
                            } else if (58 === r) {
                                if (!n) continue
                            } else if (47 === r && z && 1 < u.length) (r = d[z - 1].match(g)) && !h[r[0]] && (b = b.substr(b.indexOf(u) + 1), d = b.match(e), d.push(","), z = -1, u = "/"); else if (40 === r || 123 === r || 91 === r) ++t; else if (41 === r || 125 === r || 93 === r) --t;
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
                    g = /[\])"'A-Za-z0-9_$]+$/, h = {"in": 1, "return": 1, "typeof": 1}, k = {};
                return {
                    ha: [], V: k, Wa: b, ya: function (f, m) {
                        function e(b, m) {
                            var f;
                            if (!z) {
                                var u = a.getBindingHandler(b);
                                if (u && u.preprocess &&
                                    !(m = u.preprocess(m, b, e))) return;
                                if (u = k[b]) f = m, 0 <= a.a.m(d, f) ? f = !1 : (u = f.match(c), f = null === u ? !1 : u[1] ? "Object(" + u[1] + ")" + u[2] : f), u = f;
                                u && h.push("'" + b + "':function(_z){" + f + "=_z}")
                            }
                            t && (m = "function(){return " + m + " }");
                            g.push("'" + b + "':" + m)
                        }

                        m = m || {};
                        var g = [], h = [], t = m.valueAccessors, z = m.bindingParams,
                            u = "string" === typeof f ? b(f) : f;
                        a.a.u(u, function (a) {
                            e(a.key || a.unknown, a.value)
                        });
                        h.length && e("_ko_property_writers", "{" + h.join(",") + " }");
                        return g.join(",")
                    }, lc: function (a, b) {
                        for (var c = 0; c < a.length; c++) if (a[c].key ==
                            b) return !0;
                        return !1
                    }, pa: function (b, c, d, e, k) {
                        if (b && a.C(b)) !a.Ra(b) || k && b.v() === e || b(e); else if ((b = c.get("_ko_property_writers")) && b[d]) b[d](e)
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
            (function () {
                function b(a) {
                    return 8 ==
                        a.nodeType && h.test(g ? a.text : a.nodeValue)
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
                    k = g ? /^\x3c!--\s*\/ko\s*--\x3e$/ : /^\s*\/ko\s*$/, f = {ul: !0, ol: !0};
                a.f = {
                    Q: {}, childNodes: function (a) {
                        return b(a) ? c(a) : a.childNodes
                    }, ja: function (c) {
                        if (b(c)) {
                            c = a.f.childNodes(c);
                            for (var d = 0, f = c.length; d < f; d++) a.removeNode(c[d])
                        } else a.a.Ka(c)
                    }, T: function (c, d) {
                        if (b(c)) {
                            a.f.ja(c);
                            for (var f = c.nextSibling, e = 0, k = d.length; e < k; e++) f.parentNode.insertBefore(d[e], f)
                        } else a.a.T(c, d)
                    }, Hb: function (a, c) {
                        b(a) ? a.parentNode.insertBefore(c, a.nextSibling) : a.firstChild ? a.insertBefore(c, a.firstChild) : a.appendChild(c)
                    }, Bb: function (c,
                                     d, f) {
                        f ? b(c) ? c.parentNode.insertBefore(d, f.nextSibling) : f.nextSibling ? c.insertBefore(d, f.nextSibling) : c.appendChild(d) : a.f.Hb(c, d)
                    }, firstChild: function (a) {
                        return b(a) ? !a.nextSibling || d(a.nextSibling) ? null : a.nextSibling : a.firstChild
                    }, nextSibling: function (a) {
                        b(a) && (a = e(a));
                        return a.nextSibling && d(a.nextSibling) ? null : a.nextSibling
                    }, gc: b, xc: function (a) {
                        return (a = (g ? a.text : a.nodeValue).match(h)) ? a[1] : null
                    }, Fb: function (c) {
                        if (f[a.a.t(c)]) {
                            var k = c.firstChild;
                            if (k) {
                                do if (1 === k.nodeType) {
                                    var g;
                                    g = k.firstChild;
                                    var h = null;
                                    if (g) {
                                        do if (h) h.push(g); else if (b(g)) {
                                            var t = e(g, !0);
                                            t ? g = t : h = [g]
                                        } else d(g) && (h = [g]); while (g = g.nextSibling)
                                    }
                                    if (g = h) for (h = k.nextSibling, t = 0; t < g.length; t++) h ? c.insertBefore(g[t], h) : c.appendChild(g[t])
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
            (function () {
                a.J = function () {
                    this.Yb =
                        {}
                };
                a.a.extend(a.J.prototype, {
                    nodeHasBindings: function (b) {
                        switch (b.nodeType) {
                            case 1:
                                return null != b.getAttribute("data-bind") || a.g.getComponentNameForNode(b);
                            case 8:
                                return a.f.gc(b);
                            default:
                                return !1
                        }
                    }, getBindings: function (b, d) {
                        var c = this.getBindingsString(b, d), c = c ? this.parseBindingsString(c, d, b) : null;
                        return a.g.mb(c, b, d, !1)
                    }, getBindingAccessors: function (b, d) {
                        var c = this.getBindingsString(b, d),
                            c = c ? this.parseBindingsString(c, d, b, {valueAccessors: !0}) : null;
                        return a.g.mb(c, b, d, !0)
                    }, getBindingsString: function (b) {
                        switch (b.nodeType) {
                            case 1:
                                return b.getAttribute("data-bind");
                            case 8:
                                return a.f.xc(b);
                            default:
                                return null
                        }
                    }, parseBindingsString: function (b, d, c, e) {
                        try {
                            var g = this.Yb, h = b + (e && e.valueAccessors || ""), k;
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
            (function () {
                function b(a) {
                    return function () {
                        return a
                    }
                }

                function d(a) {
                    return a()
                }

                function c(b) {
                    return a.a.na(a.k.B(b), function (a, c) {
                        return function () {
                            return b()[c]
                        }
                    })
                }

                function e(a, b) {
                    return c(this.getBindings.bind(this, a, b))
                }

                function g(b, c, d) {
                    var f, e = a.f.firstChild(c), k = a.J.instance, g = k.preprocessNode;
                    if (g) {
                        for (; f = e;) e = a.f.nextSibling(f), g.call(k, f);
                        e = a.f.firstChild(c)
                    }
                    for (; f = e;) e = a.f.nextSibling(f), h(b, f, d)
                }

                function h(b, c, d) {
                    var e = !0, k = 1 === c.nodeType;
                    k && a.f.Fb(c);
                    if (k && d || a.J.instance.nodeHasBindings(c)) e = f(c, null, b, d).shouldBindDescendants;
                    e && !l[a.a.t(c)] && g(b, c, !k)
                }

                function k(b) {
                    var c =
                        [], d = {}, f = [];
                    a.a.G(b, function y(e) {
                        if (!d[e]) {
                            var k = a.getBindingHandler(e);
                            k && (k.after && (f.push(e), a.a.u(k.after, function (c) {
                                if (b[c]) {
                                    if (-1 !== a.a.m(f, c)) throw Error("Cannot combine the following bindings, because they have a cyclic dependency: " + f.join(", "));
                                    y(c)
                                }
                            }), f.length--), c.push({key: e, zb: k}));
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
                    }
                    !m && g && a.Ob(b, f);
                    var l;
                    if (c && "function" !==
                        typeof c) l = c; else {
                        var h = a.J.instance, n = h.getBindingAccessors || e, s = a.j(function () {
                            (l = c ? c(f, b) : n.call(h, b, f)) && f.I && f.I();
                            return l
                        }, null, {o: b});
                        l && s.Z() || (s = null)
                    }
                    var v;
                    if (l) {
                        var w = s ? function (a) {
                            return function () {
                                return d(s()[a])
                            }
                        } : function (a) {
                            return l[a]
                        }, A = function () {
                            return a.a.na(s ? s() : l, d)
                        };
                        A.get = function (a) {
                            return l[a] && d(w(a))
                        };
                        A.has = function (a) {
                            return a in l
                        };
                        g = k(l);
                        a.a.u(g, function (c) {
                            var d = c.zb.init, e = c.zb.update, k = c.key;
                            if (8 === b.nodeType && !a.f.Q[k]) throw Error("The binding '" + k + "' cannot be used with virtual elements");
                            try {
                                "function" == typeof d && a.k.B(function () {
                                    var a = d(b, w(k), A, f.$data, f);
                                    if (a && a.controlsDescendantBindings) {
                                        if (v !== p) throw Error("Multiple bindings (" + v + " and " + k + ") are trying to control descendant bindings of the same element. You cannot use these bindings together on the same element.");
                                        v = k
                                    }
                                }), "function" == typeof e && a.j(function () {
                                    e(b, w(k), A, f.$data, f)
                                }, null, {o: b})
                            } catch (g) {
                                throw g.message = 'Unable to process binding "' + k + ": " + l[k] + '"\nMessage: ' + g.message, g;
                            }
                        })
                    }
                    return {shouldBindDescendants: v === p}
                }

                function m(b) {
                    return b && b instanceof a.N ? b : new a.N(b)
                }

                a.d = {};
                var l = {script: !0};
                a.getBindingHandler = function (b) {
                    return a.d[b]
                };
                a.N = function (b, c, d, f) {
                    var e = this, k = "function" == typeof b && !a.C(b), g, m = a.j(function () {
                        var g = k ? b() : b, l = a.a.c(g);
                        c ? (c.I && c.I(), a.a.extend(e, c), m && (e.I = m)) : (e.$parents = [], e.$root = l, e.ko = a);
                        e.$rawData = g;
                        e.$data = l;
                        d && (e[d] = l);
                        f && f(e, c, l);
                        return e.$data
                    }, null, {
                        Ia: function () {
                            return g && !a.a.ob(g)
                        }, o: !0
                    });
                    m.Z() && (e.I = m, m.equalityComparer = null, g = [], m.Tb = function (b) {
                        g.push(b);
                        a.a.w.da(b,
                            function (b) {
                                a.a.ua(g, b);
                                g.length || (m.K(), e.I = m = p)
                            })
                    })
                };
                a.N.prototype.createChildContext = function (b, c, d) {
                    return new a.N(b, this, c, function (a, b) {
                        a.$parentContext = b;
                        a.$parent = b.$data;
                        a.$parents = (b.$parents || []).slice(0);
                        a.$parents.unshift(a.$parent);
                        d && d(a)
                    })
                };
                a.N.prototype.extend = function (b) {
                    return new a.N(this.I || this.$data, this, null, function (c, d) {
                        c.$rawData = d.$rawData;
                        a.a.extend(c, "function" == typeof b ? b() : b)
                    })
                };
                var q = a.a.e.F(), n = a.a.e.F();
                a.Ob = function (b, c) {
                    if (2 == arguments.length) a.a.e.set(b, n, c),
                    c.I && c.I.Tb(b); else return a.a.e.get(b, n)
                };
                a.ra = function (b, c, d) {
                    1 === b.nodeType && a.f.Fb(b);
                    return f(b, c, m(d), !0)
                };
                a.Wb = function (d, f, e) {
                    e = m(e);
                    return a.ra(d, "function" === typeof f ? c(f.bind(null, e, d)) : a.a.na(f, b), e)
                };
                a.Ca = function (a, b) {
                    1 !== b.nodeType && 8 !== b.nodeType || g(m(a), b, !0)
                };
                a.pb = function (a, b) {
                    !w && s.jQuery && (w = s.jQuery);
                    if (b && 1 !== b.nodeType && 8 !== b.nodeType) throw Error("ko.applyBindings: first parameter should be your view model; second parameter should be a DOM node");
                    b = b || s.document.body;
                    h(m(a),
                        b, !0)
                };
                a.Ha = function (b) {
                    switch (b.nodeType) {
                        case 1:
                        case 8:
                            var c = a.Ob(b);
                            if (c) return c;
                            if (b.parentNode) return a.Ha(b.parentNode)
                    }
                    return p
                };
                a.$b = function (b) {
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
            (function (b) {
                function d(d, f) {
                    var e = g.hasOwnProperty(d) ? g[d] : b, l;
                    e || (e = g[d] = new a.P, c(d, function (a) {
                        h[d] = a;
                        delete g[d];
                        l ? e.notifySubscribers(a) : setTimeout(function () {
                            e.notifySubscribers(a)
                        }, 0)
                    }), l = !0);
                    e.U(f)
                }

                function c(a, b) {
                    e("getConfig", [a], function (c) {
                        c ? e("loadComponent", [a, c], function (a) {
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
                            if (n.apply(h, d.concat(function (a) {
                                t ? g(null) : null !== a ? g(a) : e(c, d, g, l)
                            })) !== b && (t = !0, !h.suppressLoaderExceptions)) throw Error("Component loaders must supply values by invoking the callback, not by returning values synchronously.");
                        } else e(c, d, g, l)
                    } else g(null)
                }

                var g = {}, h = {};
                a.g = {
                    get: function (a, c) {
                        var e = h.hasOwnProperty(a) ? h[a] : b;
                        e ? setTimeout(function () {
                            c(e)
                        }, 0) : d(a, c)
                    }, tb: function (a) {
                        delete h[a]
                    }, jb: e
                };
                a.g.loaders = [];
                a.b("components", a.g);
                a.b("components.get", a.g.get);
                a.b("components.clearCachedDefinition", a.g.tb)
            })();
            (function () {
                function b(b, c, d, e) {
                    function k() {
                        0 === --u && e(h)
                    }

                    var h = {}, u = 2, r = d.template;
                    d = d.viewModel;
                    r ? g(c, r, function (c) {
                        a.g.jb("loadTemplate", [b, c], function (a) {
                            h.template = a;
                            k()
                        })
                    }) : k();
                    d ? g(c, d, function (c) {
                        a.g.jb("loadViewModel",
                            [b, c], function (a) {
                                h[f] = a;
                                k()
                            })
                    }) : k()
                }

                function d(a, b, c) {
                    if ("function" === typeof b) c(function (a) {
                        return new b(a)
                    }); else if ("function" === typeof b[f]) c(b[f]); else if ("instance" in b) {
                        var e = b.instance;
                        c(function () {
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
                    return s.DocumentFragment ?
                        a instanceof DocumentFragment : a && 11 === a.nodeType
                }

                function g(a, b, c) {
                    "string" === typeof b.require ? N || s.require ? (N || s.require)([b.require], c) : a("Uses require, but no AMD loader is present") : c(b)
                }

                function h(a) {
                    return function (b) {
                        throw Error("Component '" + a + "': " + b);
                    }
                }

                var k = {};
                a.g.tc = function (b, c) {
                    if (!c) throw Error("Invalid configuration for " + b);
                    if (a.g.Qa(b)) throw Error("Component " + b + " is already registered");
                    k[b] = c
                };
                a.g.Qa = function (a) {
                    return a in k
                };
                a.g.wc = function (b) {
                    delete k[b];
                    a.g.tb(b)
                };
                a.g.ub = {
                    getConfig: function (a,
                                         b) {
                        b(k.hasOwnProperty(a) ? k[a] : null)
                    }, loadComponent: function (a, c, d) {
                        var e = h(a);
                        g(e, c, function (c) {
                            b(a, e, c, d)
                        })
                    }, loadTemplate: function (b, d, f) {
                        b = h(b);
                        if ("string" === typeof d) f(a.a.ba(d)); else if (d instanceof Array) f(d); else if (e(d)) f(a.a.S(d.childNodes)); else if (d.element) if (d = d.element, s.HTMLElement ? d instanceof HTMLElement : d && d.tagName && 1 === d.nodeType) f(c(d)); else if ("string" === typeof d) {
                            var k = v.getElementById(d);
                            k ? f(c(k)) : b("Cannot find element with ID " + d)
                        } else b("Unknown element type: " + d); else b("Unknown template value: " +
                            d)
                    }, loadViewModel: function (a, b, c) {
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
            (function () {
                function b(b, e) {
                    var g = b.getAttribute("params");
                    if (g) {
                        var g = d.parseBindingsString(g, e, b, {valueAccessors: !0, bindingParams: !0}),
                            g = a.a.na(g, function (d) {
                                return a.s(d, null, {o: b})
                            }), h = a.a.na(g, function (d) {
                                return d.Z() ? a.s(function () {
                                        return a.a.c(d())
                                    },
                                    null, {o: b}) : d.v()
                            });
                        h.hasOwnProperty("$raw") || (h.$raw = g);
                        return h
                    }
                    return {$raw: {}}
                }

                a.g.getComponentNameForNode = function (b) {
                    b = a.a.t(b);
                    return a.g.Qa(b) && b
                };
                a.g.mb = function (c, d, g, h) {
                    if (1 === d.nodeType) {
                        var k = a.g.getComponentNameForNode(d);
                        if (k) {
                            c = c || {};
                            if (c.component) throw Error('Cannot use the "component" binding on a custom element matching a component');
                            var f = {name: k, params: b(d, g)};
                            c.component = h ? function () {
                                return f
                            } : f
                        }
                    }
                    return c
                };
                var d = new a.J;
                9 > a.a.L && (a.g.register = function (a) {
                    return function (b) {
                        v.createElement(b);
                        return a.apply(this, arguments)
                    }
                }(a.g.register), v.createDocumentFragment = function (b) {
                    return function () {
                        var d = b(), g = a.g.Ub, h;
                        for (h in g) g.hasOwnProperty(h) && d.createElement(h);
                        return d
                    }
                }(v.createDocumentFragment))
            })();
            (function () {
                var b = 0;
                a.d.component = {
                    init: function (d, c, e, g, h) {
                        function k() {
                            var a = f && f.dispose;
                            "function" === typeof a && a.call(f);
                            m = null
                        }

                        var f, m;
                        a.a.w.da(d, k);
                        a.s(function () {
                            var e = a.a.c(c()), g, n;
                            "string" === typeof e ? g = e : (g = a.a.c(e.name), n = a.a.c(e.params));
                            if (!g) throw Error("No component name specified");
                            var t = m = ++b;
                            a.g.get(g, function (b) {
                                if (m === t) {
                                    k();
                                    if (!b) throw Error("Unknown component '" + g + "'");
                                    var c = b.template;
                                    if (!c) throw Error("Component '" + g + "' has no template");
                                    c = a.a.ia(c);
                                    a.f.T(d, c);
                                    var c = n, e = b.createViewModel;
                                    b = e ? e.call(b, c, {element: d}) : c;
                                    c = h.createChildContext(b);
                                    f = b;
                                    a.Ca(c, d)
                                }
                            })
                        }, null, {o: d});
                        return {controlsDescendantBindings: !0}
                    }
                };
                a.f.Q.component = !0
            })();
            var Q = {"class": "className", "for": "htmlFor"};
            a.d.attr = {
                update: function (b, d) {
                    var c = a.a.c(d()) || {};
                    a.a.G(c, function (c, d) {
                        d = a.a.c(d);
                        var h =
                            !1 === d || null === d || d === p;
                        h && b.removeAttribute(c);
                        8 >= a.a.L && c in Q ? (c = Q[c], h ? b.removeAttribute(c) : b[c] = d) : h || b.setAttribute(c, d.toString());
                        "name" === c && a.a.Mb(b, h ? "" : d.toString())
                    })
                }
            };
            (function () {
                a.d.checked = {
                    after: ["value", "attr"], init: function (b, d, c) {
                        function e() {
                            var e = b.checked, k = q ? h() : e;
                            if (!a.Y.ma() && (!f || e)) {
                                var g = a.k.B(d);
                                m ? l !== k ? (e && (a.a.ea(g, k, !0), a.a.ea(g, l, !1)), l = k) : a.a.ea(g, k, e) : a.h.pa(g, c, "checked", k, !0)
                            }
                        }

                        function g() {
                            var c = a.a.c(d());
                            b.checked = m ? 0 <= a.a.m(c, h()) : k ? c : h() === c
                        }

                        var h = a.Ib(function () {
                            return c.has("checkedValue") ?
                                a.a.c(c.get("checkedValue")) : c.has("value") ? a.a.c(c.get("value")) : b.value
                        }), k = "checkbox" == b.type, f = "radio" == b.type;
                        if (k || f) {
                            var m = k && a.a.c(d()) instanceof Array, l = m ? h() : p, q = f || m;
                            f && !b.name && a.d.uniqueName.init(b, function () {
                                return !0
                            });
                            a.s(e, null, {o: b});
                            a.a.n(b, "click", e);
                            a.s(g, null, {o: b})
                        }
                    }
                };
                a.h.V.checked = !0;
                a.d.checkedValue = {
                    update: function (b, d) {
                        b.value = a.a.c(d())
                    }
                }
            })();
            a.d.css = {
                update: function (b, d) {
                    var c = a.a.c(d());
                    "object" == typeof c ? a.a.G(c, function (c, d) {
                        d = a.a.c(d);
                        a.a.Ba(b, c, d)
                    }) : (c = String(c || ""),
                        a.a.Ba(b, b.__ko__cssValue, !1), b.__ko__cssValue = c, a.a.Ba(b, c, !0))
                }
            };
            a.d.enable = {
                update: function (b, d) {
                    var c = a.a.c(d());
                    c && b.disabled ? b.removeAttribute("disabled") : c || b.disabled || (b.disabled = !0)
                }
            };
            a.d.disable = {
                update: function (b, d) {
                    a.d.enable.update(b, function () {
                        return !a.a.c(d())
                    })
                }
            };
            a.d.event = {
                init: function (b, d, c, e, g) {
                    var h = d() || {};
                    a.a.G(h, function (k) {
                        "string" == typeof k && a.a.n(b, k, function (b) {
                            var h, l = d()[k];
                            if (l) {
                                try {
                                    var q = a.a.S(arguments);
                                    e = g.$data;
                                    q.unshift(e);
                                    h = l.apply(e, q)
                                } finally {
                                    !0 !== h && (b.preventDefault ?
                                        b.preventDefault() : b.returnValue = !1)
                                }
                                !1 === c.get(k + "Bubble") && (b.cancelBubble = !0, b.stopPropagation && b.stopPropagation())
                            }
                        })
                    })
                }
            };
            a.d.foreach = {
                Eb: function (b) {
                    return function () {
                        var d = b(), c = a.a.Xa(d);
                        if (!c || "number" == typeof c.length) return {foreach: d, templateEngine: a.O.Oa};
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
                }, init: function (b,
                                   d) {
                    return a.d.template.init(b, a.d.foreach.Eb(d))
                }, update: function (b, d, c, e, g) {
                    return a.d.template.update(b, a.d.foreach.Eb(d), c, e, g)
                }
            };
            a.h.ha.foreach = !1;
            a.f.Q.foreach = !0;
            a.d.hasfocus = {
                init: function (b, d, c) {
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

                    var g = e.bind(null, !0), h = e.bind(null, !1);
                    a.a.n(b, "focus", g);
                    a.a.n(b, "focusin",
                        g);
                    a.a.n(b, "blur", h);
                    a.a.n(b, "focusout", h)
                }, update: function (b, d) {
                    var c = !!a.a.c(d());
                    b.__ko_hasfocusUpdating || b.__ko_hasfocusLastValue === c || (c ? b.focus() : b.blur(), a.k.B(a.a.oa, null, [b, c ? "focusin" : "focusout"]))
                }
            };
            a.h.V.hasfocus = !0;
            a.d.hasFocus = a.d.hasfocus;
            a.h.V.hasFocus = !0;
            a.d.html = {
                init: function () {
                    return {controlsDescendantBindings: !0}
                }, update: function (b, d) {
                    a.a.$a(b, d())
                }
            };
            I("if");
            I("ifnot", !1, !0);
            I("with", !0, !1, function (a, d) {
                return a.createChildContext(d)
            });
            var K = {};
            a.d.options = {
                init: function (b) {
                    if ("select" !==
                        a.a.t(b)) throw Error("options binding applies only to SELECT elements");
                    for (; 0 < b.length;) b.remove(0);
                    return {controlsDescendantBindings: !0}
                }, update: function (b, d, c) {
                    function e() {
                        return a.a.ta(b.options, function (a) {
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

                    var k = 0 != b.length && b.multiple ? b.scrollTop : null, f = a.a.c(d()),
                        m = c.get("optionsIncludeDestroyed");
                    d = {};
                    var l, q;
                    q = b.multiple ? a.a.Da(e(), a.i.q) : 0 <= b.selectedIndex ? [a.i.q(b.options[b.selectedIndex])] : [];
                    f && ("undefined" == typeof f.length && (f = [f]), l = a.a.ta(f, function (b) {
                        return m || b === p || null === b || !a.a.c(b._destroy)
                    }), c.has("optionsCaption") && (f = a.a.c(c.get("optionsCaption")), null !== f && f !== p && l.unshift(K)));
                    var n = !1;
                    d.beforeRemove = function (a) {
                        b.removeChild(a)
                    };
                    f = h;
                    c.has("optionsAfterRender") && (f = function (b, d) {
                        h(0, d);
                        a.k.B(c.get("optionsAfterRender"), null, [d[0], b !== K ? b : p])
                    });
                    a.a.Za(b, l, function (d, e, f) {
                        f.length &&
                        (q = f[0].selected ? [a.i.q(f[0])] : [], n = !0);
                        e = b.ownerDocument.createElement("option");
                        d === K ? (a.a.bb(e, c.get("optionsCaption")), a.i.ca(e, p)) : (f = g(d, c.get("optionsValue"), d), a.i.ca(e, a.a.c(f)), d = g(d, c.get("optionsText"), f), a.a.bb(e, d));
                        return [e]
                    }, d, f);
                    a.k.B(function () {
                        c.get("valueAllowUnset") && c.has("value") ? a.i.ca(b, a.a.c(c.get("value")), !0) : (b.multiple ? q.length && e().length < q.length : q.length && 0 <= b.selectedIndex ? a.i.q(b.options[b.selectedIndex]) !== q[0] : q.length || 0 <= b.selectedIndex) && a.a.oa(b, "change")
                    });
                    a.a.dc(b);
                    k && 20 < Math.abs(k - b.scrollTop) && (b.scrollTop = k)
                }
            };
            a.d.options.Va = a.a.e.F();
            a.d.selectedOptions = {
                after: ["options", "foreach"], init: function (b, d, c) {
                    a.a.n(b, "change", function () {
                        var e = d(), g = [];
                        a.a.u(b.getElementsByTagName("option"), function (b) {
                            b.selected && g.push(a.i.q(b))
                        });
                        a.h.pa(e, c, "selectedOptions", g)
                    })
                }, update: function (b, d) {
                    if ("select" != a.a.t(b)) throw Error("values binding applies only to SELECT elements");
                    var c = a.a.c(d());
                    c && "number" == typeof c.length && a.a.u(b.getElementsByTagName("option"),
                        function (b) {
                            var d = 0 <= a.a.m(c, a.i.q(b));
                            a.a.Nb(b, d)
                        })
                }
            };
            a.h.V.selectedOptions = !0;
            a.d.style = {
                update: function (b, d) {
                    var c = a.a.c(d() || {});
                    a.a.G(c, function (c, d) {
                        d = a.a.c(d);
                        if (null === d || d === p || !1 === d) d = "";
                        b.style[c] = d
                    })
                }
            };
            a.d.submit = {
                init: function (b, d, c, e, g) {
                    if ("function" != typeof d()) throw Error("The value for a submit binding must be a function");
                    a.a.n(b, "submit", function (a) {
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
                init: function () {
                    return {controlsDescendantBindings: !0}
                },
                update: function (b, d) {
                    a.a.bb(b, d())
                }
            };
            a.f.Q.text = !0;
            (function () {
                if (s && s.navigator) var b = function (a) {
                        if (a) return parseFloat(a[1])
                    }, d = s.opera && s.opera.version && parseInt(s.opera.version()), c = s.navigator.userAgent,
                    e = b(c.match(/^(?:(?!chrome).)*version\/([^ ]*) safari/i)), g = b(c.match(/Firefox\/([^ ]*)/));
                if (10 > a.a.L) var h = a.a.e.F(), k = a.a.e.F(), f = function (b) {
                    var c = this.activeElement;
                    (c = c && a.a.e.get(c, k)) && c(b)
                }, m = function (b, c) {
                    var d = b.ownerDocument;
                    a.a.e.get(d, h) || (a.a.e.set(d, h, !0), a.a.n(d, "selectionchange",
                        f));
                    a.a.e.set(b, k, c)
                };
                a.d.textInput = {
                    init: function (b, c, f) {
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

                        var s = b.value, y, v;
                        10 > a.a.L ? (k("propertychange", function (a) {
                                "value" === a.propertyName && r()
                            }), 8 == a.a.L && (k("keyup", r), k("keydown", r)), 8 <= a.a.L && (m(b, r), k("dragend", u))) :
                            (k("input", r), 5 > e && "textarea" === a.a.t(b) ? (k("keydown", u), k("paste", u), k("cut", u)) : 11 > d ? k("keydown", u) : 4 > g && (k("DOMAutoComplete", r), k("dragdrop", r), k("drop", r)));
                        k("change", r);
                        a.s(h, null, {o: b})
                    }
                };
                a.h.V.textInput = !0;
                a.d.textinput = {
                    preprocess: function (a, b, c) {
                        c("textInput", a)
                    }
                }
            })();
            a.d.uniqueName = {
                init: function (b, d) {
                    if (d()) {
                        var c = "ko_unique_" + ++a.d.uniqueName.Zb;
                        a.a.Mb(b, c)
                    }
                }
            };
            a.d.uniqueName.Zb = 0;
            a.d.value = {
                after: ["options", "foreach"], init: function (b, d, c) {
                    if ("input" != b.tagName.toLowerCase() || "checkbox" !=
                        b.type && "radio" != b.type) {
                        var e = ["change"], g = c.get("valueUpdate"), h = !1, k = null;
                        g && ("string" == typeof g && (g = [g]), a.a.ga(e, g), e = a.a.rb(e));
                        var f = function () {
                            k = null;
                            h = !1;
                            var e = d(), f = a.i.q(b);
                            a.h.pa(e, c, "value", f)
                        };
                        !a.a.L || "input" != b.tagName.toLowerCase() || "text" != b.type || "off" == b.autocomplete || b.form && "off" == b.form.autocomplete || -1 != a.a.m(e, "propertychange") || (a.a.n(b, "propertychange", function () {
                            h = !0
                        }), a.a.n(b, "focus", function () {
                            h = !1
                        }), a.a.n(b, "blur", function () {
                            h && f()
                        }));
                        a.a.u(e, function (c) {
                            var d = f;
                            a.a.vc(c,
                                "after") && (d = function () {
                                k = a.i.q(b);
                                setTimeout(f, 0)
                            }, c = c.substring(5));
                            a.a.n(b, c, d)
                        });
                        var m = function () {
                            var e = a.a.c(d()), f = a.i.q(b);
                            if (null !== k && e === k) setTimeout(m, 0); else if (e !== f) if ("select" === a.a.t(b)) {
                                var g = c.get("valueAllowUnset"), f = function () {
                                    a.i.ca(b, e, g)
                                };
                                f();
                                g || e === a.i.q(b) ? setTimeout(f, 0) : a.k.B(a.a.oa, null, [b, "change"])
                            } else a.i.ca(b, e)
                        };
                        a.s(m, null, {o: b})
                    } else a.ra(b, {checkedValue: d})
                }, update: function () {
                }
            };
            a.h.V.value = !0;
            a.d.visible = {
                update: function (b, d) {
                    var c = a.a.c(d()), e = "none" != b.style.display;
                    c && !e ? b.style.display = "" : !c && e && (b.style.display = "none")
                }
            };
            (function (b) {
                a.d[b] = {
                    init: function (d, c, e, g, h) {
                        return a.d.event.init.call(this, d, function () {
                            var a = {};
                            a[b] = c();
                            return a
                        }, e, g, h)
                    }
                }
            })("click");
            a.H = function () {
            };
            a.H.prototype.renderTemplateSource = function () {
                throw Error("Override renderTemplateSource");
            };
            a.H.prototype.createJavaScriptEvaluatorBlock = function () {
                throw Error("Override createJavaScriptEvaluatorBlock");
            };
            a.H.prototype.makeTemplateSource = function (b, d) {
                if ("string" == typeof b) {
                    d = d || v;
                    var c =
                        d.getElementById(b);
                    if (!c) throw Error("Cannot find template with ID " + b);
                    return new a.r.l(c)
                }
                if (1 == b.nodeType || 8 == b.nodeType) return new a.r.fa(b);
                throw Error("Unknown template type: " + b);
            };
            a.H.prototype.renderTemplate = function (a, d, c, e) {
                a = this.makeTemplateSource(a, e);
                return this.renderTemplateSource(a, d, c)
            };
            a.H.prototype.isTemplateRewritten = function (a, d) {
                return !1 === this.allowTemplateRewriting ? !0 : this.makeTemplateSource(a, d).data("isRewritten")
            };
            a.H.prototype.rewriteTemplate = function (a, d, c) {
                a = this.makeTemplateSource(a,
                    c);
                d = d(a.text());
                a.text(d);
                a.data("isRewritten", !0)
            };
            a.b("templateEngine", a.H);
            a.fb = function () {
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
                    d = "ko.__tr_ambtns(function($context,$element){return(function(){return{ " + a.h.ya(b, {valueAccessors: !0}) + " } })()},'" + d.toLowerCase() +
                        "')";
                    return k.createJavaScriptEvaluatorBlock(d) + c
                }

                var d = /(<([a-z]+\d*)(?:\s+(?!data-bind\s*=\s*)[a-z0-9\-]+(?:=(?:\"[^\"]*\"|\'[^\']*\'))?)*\s+)data-bind\s*=\s*(["'])([\s\S]*?)\3/gi,
                    c = /\x3c!--\s*ko\b\s*([\s\S]*?)\s*--\x3e/g;
                return {
                    ec: function (b, c, d) {
                        c.isTemplateRewritten(b, d) || c.rewriteTemplate(b, function (b) {
                            return a.fb.nc(b, c)
                        }, d)
                    }, nc: function (a, g) {
                        return a.replace(d, function (a, c, d, e, l) {
                            return b(l, c, d, g)
                        }).replace(c, function (a, c) {
                            return b(c, "\x3c!-- ko --\x3e", "#comment", g)
                        })
                    }, Xb: function (b, c) {
                        return a.D.Ua(function (d,
                                                k) {
                            var f = d.nextSibling;
                            f && f.nodeName.toLowerCase() === c && a.ra(f, b, k)
                        })
                    }
                }
            }();
            a.b("__tr_ambtns", a.fb.Xb);
            (function () {
                a.r = {};
                a.r.l = function (a) {
                    this.l = a
                };
                a.r.l.prototype.text = function () {
                    var b = a.a.t(this.l), b = "script" === b ? "text" : "textarea" === b ? "value" : "innerHTML";
                    if (0 == arguments.length) return this.l[b];
                    var d = arguments[0];
                    "innerHTML" === b ? a.a.$a(this.l, d) : this.l[b] = d
                };
                var b = a.a.e.F() + "_";
                a.r.l.prototype.data = function (c) {
                    if (1 === arguments.length) return a.a.e.get(this.l, b + c);
                    a.a.e.set(this.l, b + c, arguments[1])
                };
                var d = a.a.e.F();
                a.r.fa = function (a) {
                    this.l = a
                };
                a.r.fa.prototype = new a.r.l;
                a.r.fa.prototype.text = function () {
                    if (0 == arguments.length) {
                        var b = a.a.e.get(this.l, d) || {};
                        b.gb === p && b.Ga && (b.gb = b.Ga.innerHTML);
                        return b.gb
                    }
                    a.a.e.set(this.l, d, {gb: arguments[0]})
                };
                a.r.l.prototype.nodes = function () {
                    if (0 == arguments.length) return (a.a.e.get(this.l, d) || {}).Ga;
                    a.a.e.set(this.l, d, {Ga: arguments[0]})
                };
                a.b("templateSources", a.r);
                a.b("templateSources.domElement", a.r.l);
                a.b("templateSources.anonymousTemplate", a.r.fa)
            })();
            (function () {
                function b(b,
                           c, d) {
                    var e;
                    for (c = a.f.nextSibling(c); b && (e = b) !== c;) b = a.f.nextSibling(e), d(e, b)
                }

                function d(c, d) {
                    if (c.length) {
                        var e = c[0], g = c[c.length - 1], h = e.parentNode, n = a.J.instance, t = n.preprocessNode;
                        if (t) {
                            b(e, g, function (a, b) {
                                var c = a.previousSibling, d = t.call(n, a);
                                d && (a === e && (e = d[0] || b), a === g && (g = d[d.length - 1] || c))
                            });
                            c.length = 0;
                            if (!e) return;
                            e === g ? c.push(e) : (c.push(e, g), a.a.ka(c, h))
                        }
                        b(e, g, function (b) {
                            1 !== b.nodeType && 8 !== b.nodeType || a.pb(d, b)
                        });
                        b(e, g, function (b) {
                            1 !== b.nodeType && 8 !== b.nodeType || a.D.Sb(b, [d])
                        });
                        a.a.ka(c,
                            h)
                    }
                }

                function c(a) {
                    return a.nodeType ? a : 0 < a.length ? a[0] : null
                }

                function e(b, e, h, l, q) {
                    q = q || {};
                    var n = b && c(b), n = n && n.ownerDocument, t = q.templateEngine || g;
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
                a.ab = function (b) {
                    if (b != p && !(b instanceof a.H)) throw Error("templateEngine must inherit from ko.templateEngine");
                    g = b
                };
                a.Ya = function (b, d, h, l, q) {
                    h = h || {};
                    if ((h.templateEngine || g) == p) throw Error("Set a template engine before calling renderTemplate");
                    q = q || "replaceChildren";
                    if (l) {
                        var n = c(l);
                        return a.j(function () {
                            var g = d && d instanceof a.N ? d : new a.N(a.a.c(d)),
                                p = a.C(b) ? b() : "function" === typeof b ? b(g.$data, g) : b, g = e(l, q, p, g, h);
                            "replaceNode" == q && (l = g, n = c(l))
                        }, null, {
                            Ia: function () {
                                return !n || !a.a.Ja(n)
                            }, o: n && "replaceNode" == q ? n.parentNode : n
                        })
                    }
                    return a.D.Ua(function (c) {
                        a.Ya(b, d, h, c, "replaceNode")
                    })
                };
                a.uc = function (b, c, g, h, q) {
                    function n(a, b) {
                        d(b, s);
                        g.afterRender && g.afterRender(b, a)
                    }

                    function t(c, d) {
                        s = q.createChildContext(c, g.as, function (a) {
                            a.$index = d
                        });
                        var f = a.C(b) ? b() : "function" === typeof b ? b(c, s) : b;
                        return e(null, "ignoreTargetNode", f, s, g)
                    }

                    var s;
                    return a.j(function () {
                        var b = a.a.c(c) || [];
                        "undefined" == typeof b.length && (b = [b]);
                        b = a.a.ta(b,
                            function (b) {
                                return g.includeDestroyed || b === p || null === b || !a.a.c(b._destroy)
                            });
                        a.k.B(a.a.Za, null, [h, b, t, g, n])
                    }, null, {o: h})
                };
                var h = a.a.e.F();
                a.d.template = {
                    init: function (b, c) {
                        var d = a.a.c(c());
                        "string" == typeof d || d.name ? a.f.ja(b) : (d = a.f.childNodes(b), d = a.a.oc(d), (new a.r.fa(b)).nodes(d));
                        return {controlsDescendantBindings: !0}
                    }, update: function (b, c, d, e, g) {
                        var n = c(), t;
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
                a.h.ha.template = function (b) {
                    b = a.h.Wa(b);
                    return 1 == b.length && b[0].unknown || a.h.lc(b, "name") ? null : "This template engine does not support anonymous templates nested within its templates"
                };
                a.f.Q.template = !0
            })();
            a.b("setTemplateEngine", a.ab);
            a.b("renderTemplate", a.Ya);
            a.a.wb = function (a, d, c) {
                if (a.length &&
                    d.length) {
                    var e, g, h, k, f;
                    for (e = g = 0; (!c || e < c) && (k = a[g]); ++g) {
                        for (h = 0; f = d[h]; ++h) if (k.value === f.value) {
                            k.moved = f.index;
                            f.moved = k.index;
                            d.splice(h, 1);
                            e = h = 0;
                            break
                        }
                        e += h
                    }
                }
            };
            a.a.Fa = function () {
                function b(b, c, e, g, h) {
                    var k = Math.min, f = Math.max, m = [], l, q = b.length, n, p = c.length, s = p - q || 1,
                        u = q + p + 1, r, v, w;
                    for (l = 0; l <= q; l++) for (v = r, m.push(r = []), w = k(p, l + s), n = f(0, l - 1); n <= w; n++) r[n] = n ? l ? b[l - 1] === c[n - 1] ? v[n - 1] : k(v[n] || u, r[n - 1] || u) + 1 : n + 1 : l + 1;
                    k = [];
                    f = [];
                    s = [];
                    l = q;
                    for (n = p; l || n;) p = m[l][n] - 1, n && p === m[l][n - 1] ? f.push(k[k.length] = {
                        status: e,
                        value: c[--n], index: n
                    }) : l && p === m[l - 1][n] ? s.push(k[k.length] = {
                        status: g,
                        value: b[--l],
                        index: l
                    }) : (--n, --l, h.sparse || k.push({status: "retained", value: c[n]}));
                    a.a.wb(f, s, 10 * q);
                    return k.reverse()
                }

                return function (a, c, e) {
                    e = "boolean" === typeof e ? {dontLimitMoves: e} : e || {};
                    a = a || [];
                    c = c || [];
                    return a.length <= c.length ? b(a, c, "added", "deleted", e) : b(c, a, "deleted", "added", e)
                }
            }();
            a.b("utils.compareArrays", a.a.Fa);
            (function () {
                function b(b, d, g, h, k) {
                    var f = [], m = a.j(function () {
                        var l = d(g, k, a.a.ka(f, b)) || [];
                        0 < f.length && (a.a.Lb(f,
                            l), h && a.k.B(h, null, [g, l, k]));
                        f.length = 0;
                        a.a.ga(f, l)
                    }, null, {
                        o: b, Ia: function () {
                            return !a.a.ob(f)
                        }
                    });
                    return {$: f, j: m.Z() ? m : p}
                }

                var d = a.a.e.F();
                a.a.Za = function (c, e, g, h, k) {
                    function f(b, d) {
                        x = q[d];
                        r !== d && (A[b] = x);
                        x.Na(r++);
                        a.a.ka(x.$, c);
                        s.push(x);
                        w.push(x)
                    }

                    function m(b, c) {
                        if (b) for (var d = 0, e = c.length; d < e; d++) c[d] && a.a.u(c[d].$, function (a) {
                            b(a, d, c[d].sa)
                        })
                    }

                    e = e || [];
                    h = h || {};
                    var l = a.a.e.get(c, d) === p, q = a.a.e.get(c, d) || [], n = a.a.Da(q, function (a) {
                        return a.sa
                    }), t = a.a.Fa(n, e, h.dontLimitMoves), s = [], u = 0, r = 0, v = [], w = [];
                    e =
                        [];
                    for (var A = [], n = [], x, B = 0, D, F; D = t[B]; B++) switch (F = D.moved, D.status) {
                        case "deleted":
                            F === p && (x = q[u], x.j && x.j.K(), v.push.apply(v, a.a.ka(x.$, c)), h.beforeRemove && (e[B] = x, w.push(x)));
                            u++;
                            break;
                        case "retained":
                            f(B, u++);
                            break;
                        case "added":
                            F !== p ? f(B, F) : (x = {sa: D.value, Na: a.p(r++)}, s.push(x), w.push(x), l || (n[B] = x))
                    }
                    m(h.beforeMove, A);
                    a.a.u(v, h.beforeRemove ? a.R : a.removeNode);
                    for (var B = 0, l = a.f.firstChild(c), G; x = w[B]; B++) {
                        x.$ || a.a.extend(x, b(c, g, x.sa, k, x.Na));
                        for (u = 0; t = x.$[u]; l = t.nextSibling, G = t, u++) t !== l && a.f.Bb(c,
                            t, G);
                        !x.ic && k && (k(x.sa, x.$, x.Na), x.ic = !0)
                    }
                    m(h.beforeRemove, e);
                    m(h.afterMove, A);
                    m(h.afterAdd, n);
                    a.a.e.set(c, d, s)
                }
            })();
            a.b("utils.setDomNodeChildrenFromArrayMapping", a.a.Za);
            a.O = function () {
                this.allowTemplateRewriting = !1
            };
            a.O.prototype = new a.H;
            a.O.prototype.renderTemplateSource = function (b) {
                var d = (9 > a.a.L ? 0 : b.nodes) ? b.nodes() : null;
                if (d) return a.a.S(d.cloneNode(!0).childNodes);
                b = b.text();
                return a.a.ba(b)
            };
            a.O.Oa = new a.O;
            a.ab(a.O.Oa);
            a.b("nativeTemplateEngine", a.O);
            (function () {
                a.Sa = function () {
                    var a = this.kc =
                        function () {
                            if (!w || !w.tmpl) return 0;
                            try {
                                if (0 <= w.tmpl.tag.tmpl.open.toString().indexOf("__")) return 2
                            } catch (a) {
                            }
                            return 1
                        }();
                    this.renderTemplateSource = function (b, e, g) {
                        g = g || {};
                        if (2 > a) throw Error("Your version of jQuery.tmpl is too old. Please upgrade to jQuery.tmpl 1.0.0pre or later.");
                        var h = b.data("precompiled");
                        h || (h = b.text() || "", h = w.template(null, "{{ko_with $item.koBindingContext}}" + h + "{{/ko_with}}"), b.data("precompiled", h));
                        b = [e.$data];
                        e = w.extend({koBindingContext: e}, g.templateOptions);
                        e = w.tmpl(h,
                            b, e);
                        e.appendTo(v.createElement("div"));
                        w.fragments = {};
                        return e
                    };
                    this.createJavaScriptEvaluatorBlock = function (a) {
                        return "{{ko_code ((function() { return " + a + " })()) }}"
                    };
                    this.addTemplate = function (a, b) {
                        v.write("<script type='text/html' id='" + a + "'>" + b + "\x3c/script>")
                    };
                    0 < a && (w.tmpl.tag.ko_code = {open: "__.push($1 || '');"}, w.tmpl.tag.ko_with = {
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
/**
 * Custom bindings for knockout
 *
 * @type {{init: Function, update: Function}}
 */
ko.bindingHandlers.boxSlider = {
    init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {

        // This will be called when the binding is first applied to an element
        // Set up any initial state, event handlers, etc. here

        if (typeof ($.fn.bxSlider) === 'undefined') {
            return false;
        }

        var $el = $(element);
        var options = valueAccessor() || {};

        setTimeout(function () {
            $el.data('boxSlider', $el.bxSlider(options));
        }, 200);

    },
    update: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
        // This will be called once when the binding is first applied to an element,
        // and again whenever any observables/computeds that are accessed change
        // Update the DOM element based on the supplied values here.

        var oSlider = $(element).data("boxSlider");
        if (oSlider) {
            oSlider.redrawSlider();
        }
    }
};

/**
 * Display tips to the element
 *
 * @type {{init: Function, update: Function}}
 */
ko.bindingHandlers.tipsy = {
    init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {

        // This will be called when the binding is first applied to an element
        // Set up any initial state, event handlers, etc. here

        if (typeof ($.fn.tipsy) === 'undefined') {
            return false;
        }

        var $el = $(element);
        var options = valueAccessor() || {};

        if (typeof (options.content) === 'string') {
            $el.attr('data-wtip', options.content);
            options.title = 'data-wtip';
        }

        $el.tipsy(options);

    },
    update: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
        // This will be called once when the binding is first applied to an element,
        // and again whenever any observables/computeds that are accessed change
        // Update the DOM element based on the supplied values here.
    }
};


/**
 * Custom bindings for knockout select2 plugin
 *
 * @type {{init: Function, update: Function}}
 */
ko.bindingHandlers.select2 = {
    init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {

        // This will be called when the binding is first applied to an element
        // Set up any initial state, event handlers, etc. here

        if (typeof ($.fn.select2) === 'undefined') {
            return false;
        }

        var $el = $(element);
        var options = valueAccessor() || {};

        $el.select2(options);

    },
    update: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
        // This will be called once when the binding is first applied to an element,
        // and again whenever any observables/computeds that are accessed change
        // Update the DOM element based on the supplied values here.
    }
};


/**
 * Timer button build
 *
 * @type {{init: Function, update: Function}}
 */
ko.bindingHandlers.timerButton = {
    init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {

        var options = valueAccessor() || {time_end: 0, total_time: 0, current_time: 0};
        var $element = $(element);

        var oProgressBtn = new ProgressButton(element, {
            statusTime: 10,
            callback: function (oInstance) {
                //Set progress class
                $element.addClass('progress-button');

                //Save jquery object data
                $element.data('oProgressButton', oInstance);
                $element.data('options', options);
                $element.attr('data-progress-button', true);
            }
        });

        $(element).trigger('StartTimer'); //Hack to automatic start the button
    },
    update: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
        // This will be called once when the binding is first applied to an element,
        // and again whenever any observables/computeds that are accessed change
        // Update the DOM element based on the supplied values here.«
    }

};


/**
 * Display tips to the element
 *
 * @type {{init: Function, update: Function}}
 */
ko.bindingHandlers.scrollbar = {
    init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {

        // This will be called when the binding is first applied to an element
        // Set up any initial state, event handlers, etc. here

        var $el = $(element);
        var options = valueAccessor() || {};
        $el.addClass('perefect-scroll');

        $el.data('oScroll', omerta.GUI.scroll.build($el, options));


    },
    update: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
        // This will be called once when the binding is first applied to an element,
        // and again whenever any observables/computeds that are accessed change
        // Update the DOM element based on the supplied values here.

        var $el = $(element);
        var options = valueAccessor() || {};

        var oScroll = $el.data('oScroll');

        if (typeof (oScroll) === 'undefined') {
            return;
        }

        if (typeof (oScroll) === 'object') {
            omerta.GUI.scroll.refresh(oScroll, options);
        }
    }
};


/**
 * Hall of fame widget
 */
ko.components.register('widget-hof', {
    viewModel: function (params) {

        this.title = ko.observable('Loading');
        this.subTitle = ko.observable('');
        this.hof = ko.observableArray([]);

        var self = this;

        var $jqxhr = $.ajax('/?module=Homepage.Reset&action=hof');
        $jqxhr.done(function (data) {
            self.title(data.title);
            self.subTitle(data.subtitle);
            self.hof(data.hof);
        });
    },
    template: {element: 'widget-hof'}
});
/*=============================================================================
 Author:			Eric M. Barnard - @ericmbarnard
 License:		MIT (http://opensource.org/licenses/mit-license.php)

 Description:	Validation Library for KnockoutJS
 Version:		2.0.3
 URL:           https://github.com/Knockout-Contrib/Knockout-Validation
 ===============================================================================
 */
/*globals require: false, exports: false, define: false, ko: false */

(function (factory) {
    // Module systems magic dance.

    if (typeof require === "function" && typeof exports === "object" && typeof module === "object") {
        // CommonJS or Node: hard-coded dependency on "knockout"
        factory(require("knockout"), exports);
    } else if (typeof define === "function" && define["amd"]) {
        // AMD anonymous module with hard-coded dependency on "knockout"
        define(["knockout", "exports"], factory);
    } else {
        // <script> tag: use the global `ko` object, attaching a `mapping` property
        factory(ko, ko.validation = {});
    }
}(function (ko, exports) {

    if (typeof (ko) === 'undefined') {
        throw new Error('Knockout is required, please ensure it is loaded before loading this validation plug-in');
    }

    // create our namespace object
    ko.validation = exports;

    var kv = ko.validation,
        koUtils = ko.utils,
        unwrap = koUtils.unwrapObservable,
        forEach = koUtils.arrayForEach,
        extend = koUtils.extend;
    ;/*global ko: false*/

    var defaults = {
        registerExtenders: true,
        messagesOnModified: true,
        errorsAsTitle: true,            // enables/disables showing of errors as title attribute of the target element.
        errorsAsTitleOnModified: false, // shows the error when hovering the input field (decorateElement must be true)
        messageTemplate: null,
        insertMessages: true,           // automatically inserts validation messages as <span></span>
        parseInputAttributes: false,    // parses the HTML5 validation attribute from a form element and adds that to the object
        writeInputAttributes: false,    // adds HTML5 input validation attributes to form elements that ko observable's are bound to
        decorateInputElement: false,         // false to keep backward compatibility
        decorateElementOnModified: true,// true to keep backward compatibility
        errorClass: null,               // single class for error message and element
        errorElementClass: 'validationElement',  // class to decorate error element
        errorMessageClass: 'validationMessage',  // class to decorate error message
        allowHtmlMessages: false,		// allows HTML in validation messages
        grouping: {
            deep: false,        //by default grouping is shallow
            observable: true,   //and using observables
            live: false		    //react to changes to observableArrays if observable === true
        },
        validate: {
            // throttle: 10
        }
    };

// make a copy  so we can use 'reset' later
    var configuration = extend({}, defaults);

    configuration.html5Attributes = ['required', 'pattern', 'min', 'max', 'step'];
    configuration.html5InputTypes = ['email', 'number', 'date'];

    configuration.reset = function () {
        extend(configuration, defaults);
    };

    kv.configuration = configuration;
    ;kv.utils = (function () {
        var seedId = new Date().getTime();

        var domData = {}; //hash of data objects that we reference from dom elements
        var domDataKey = '__ko_validation__';

        return {
            isArray: function (o) {
                return o.isArray || Object.prototype.toString.call(o) === '[object Array]';
            },
            isObject: function (o) {
                return o !== null && typeof o === 'object';
            },
            isNumber: function (o) {
                return !isNaN(o);
            },
            isObservableArray: function (instance) {
                return !!instance &&
                    typeof instance["remove"] === "function" &&
                    typeof instance["removeAll"] === "function" &&
                    typeof instance["destroy"] === "function" &&
                    typeof instance["destroyAll"] === "function" &&
                    typeof instance["indexOf"] === "function" &&
                    typeof instance["replace"] === "function";
            },
            values: function (o) {
                var r = [];
                for (var i in o) {
                    if (o.hasOwnProperty(i)) {
                        r.push(o[i]);
                    }
                }
                return r;
            },
            getValue: function (o) {
                return (typeof o === 'function' ? o() : o);
            },
            hasAttribute: function (node, attr) {
                return node.getAttribute(attr) !== null;
            },
            getAttribute: function (element, attr) {
                return element.getAttribute(attr);
            },
            setAttribute: function (element, attr, value) {
                return element.setAttribute(attr, value);
            },
            isValidatable: function (o) {
                return !!(o && o.rules && o.isValid && o.isModified);
            },
            insertAfter: function (node, newNode) {
                node.parentNode.insertBefore(newNode, node.nextSibling);
            },
            newId: function () {
                return seedId += 1;
            },
            getConfigOptions: function (element) {
                var options = kv.utils.contextFor(element);

                return options || kv.configuration;
            },
            setDomData: function (node, data) {
                var key = node[domDataKey];

                if (!key) {
                    node[domDataKey] = key = kv.utils.newId();
                }

                domData[key] = data;
            },
            getDomData: function (node) {
                var key = node[domDataKey];

                if (!key) {
                    return undefined;
                }

                return domData[key];
            },
            contextFor: function (node) {
                switch (node.nodeType) {
                    case 1:
                    case 8:
                        var context = kv.utils.getDomData(node);
                        if (context) {
                            return context;
                        }
                        if (node.parentNode) {
                            return kv.utils.contextFor(node.parentNode);
                        }
                        break;
                }
                return undefined;
            },
            isEmptyVal: function (val) {
                if (val === undefined) {
                    return true;
                }
                if (val === null) {
                    return true;
                }
                if (val === "") {
                    return true;
                }
            },
            getOriginalElementTitle: function (element) {
                var savedOriginalTitle = kv.utils.getAttribute(element, 'data-orig-title'),
                    currentTitle = element.title,
                    hasSavedOriginalTitle = kv.utils.hasAttribute(element, 'data-orig-title');

                return hasSavedOriginalTitle ?
                    savedOriginalTitle : currentTitle;
            },
            async: function (expr) {
                if (window.setImmediate) {
                    window.setImmediate(expr);
                } else {
                    window.setTimeout(expr, 0);
                }
            },
            forEach: function (object, callback) {
                if (kv.utils.isArray(object)) {
                    return forEach(object, callback);
                }
                for (var prop in object) {
                    if (object.hasOwnProperty(prop)) {
                        callback(object[prop], prop);
                    }
                }
            }
        };
    }());
    ;var api = (function () {

        var isInitialized = 0,
            configuration = kv.configuration,
            utils = kv.utils;

        function cleanUpSubscriptions(context) {
            forEach(context.subscriptions, function (subscription) {
                subscription.dispose();
            });
            context.subscriptions = [];
        }

        function dispose(context) {
            if (context.options.deep) {
                forEach(context.flagged, function (obj) {
                    delete obj.__kv_traversed;
                });
                context.flagged.length = 0;
            }

            if (!context.options.live) {
                cleanUpSubscriptions(context);
            }
        }

        function runTraversal(obj, context) {
            context.validatables = [];
            cleanUpSubscriptions(context);
            traverseGraph(obj, context);
            dispose(context);
        }

        function traverseGraph(obj, context, level) {
            var objValues = [],
                val = obj.peek ? obj.peek() : obj;

            if (obj.__kv_traversed === true) {
                return;
            }

            if (context.options.deep) {
                obj.__kv_traversed = true;
                context.flagged.push(obj);
            }

            //default level value depends on deep option.
            level = (level !== undefined ? level : context.options.deep ? 1 : -1);

            // if object is observable then add it to the list
            if (ko.isObservable(obj)) {
                // ensure it's validatable but don't extend validatedObservable because it
                // would overwrite isValid property.
                if (!obj.errors && !utils.isValidatable(obj)) {
                    obj.extend({validatable: true});
                }
                context.validatables.push(obj);

                if (context.options.live && utils.isObservableArray(obj)) {
                    context.subscriptions.push(obj.subscribe(function () {
                        context.graphMonitor.valueHasMutated();
                    }));
                }
            }

            //get list of values either from array or object but ignore non-objects
            // and destroyed objects
            if (val && !val._destroy) {
                if (utils.isArray(val)) {
                    objValues = val;
                } else if (utils.isObject(val)) {
                    objValues = utils.values(val);
                }
            }

            //process recursively if it is deep grouping
            if (level !== 0) {
                utils.forEach(objValues, function (observable) {
                    //but not falsy things and not HTML Elements
                    if (observable && !observable.nodeType && (!ko.isComputed(observable) || observable.rules)) {
                        traverseGraph(observable, context, level + 1);
                    }
                });
            }
        }

        function collectErrors(array) {
            var errors = [];
            forEach(array, function (observable) {
                // Do not collect validatedObservable errors
                if (utils.isValidatable(observable) && !observable.isValid()) {
                    // Use peek because we don't want a dependency for 'error' property because it
                    // changes before 'isValid' does. (Issue #99)
                    errors.push(observable.error.peek());
                }
            });
            return errors;
        }

        return {
            //Call this on startup
            //any config can be overridden with the passed in options
            init: function (options, force) {
                //done run this multiple times if we don't really want to
                if (isInitialized > 0 && !force) {
                    return;
                }

                //because we will be accessing options properties it has to be an object at least
                options = options || {};
                //if specific error classes are not provided then apply generic errorClass
                //it has to be done on option so that options.errorClass can override default
                //errorElementClass and errorMessage class but not those provided in options
                options.errorElementClass = options.errorElementClass || options.errorClass || configuration.errorElementClass;
                options.errorMessageClass = options.errorMessageClass || options.errorClass || configuration.errorMessageClass;

                extend(configuration, options);

                if (configuration.registerExtenders) {
                    kv.registerExtenders();
                }

                isInitialized = 1;
            },

            // resets the config back to its original state
            reset: kv.configuration.reset,

            // recursively walks a viewModel and creates an object that
            // provides validation information for the entire viewModel
            // obj -> the viewModel to walk
            // options -> {
            //	  deep: false, // if true, will walk past the first level of viewModel properties
            //	  observable: false // if true, returns a computed observable indicating if the viewModel is valid
            // }
            group: function group(obj, options) { // array of observables or viewModel
                options = extend(extend({}, configuration.grouping), options);

                var context = {
                    options: options,
                    graphMonitor: ko.observable(),
                    flagged: [],
                    subscriptions: [],
                    validatables: []
                };

                var result = null;

                //if using observables then traverse structure once and add observables
                if (options.observable) {
                    result = ko.computed(function () {
                        context.graphMonitor(); //register dependency
                        runTraversal(obj, context);
                        return collectErrors(context.validatables);
                    });
                } else { //if not using observables then every call to error() should traverse the structure
                    result = function () {
                        runTraversal(obj, context);
                        return collectErrors(context.validatables);
                    };
                }

                result.showAllMessages = function (show) { // thanks @heliosPortal
                    if (show === undefined) {//default to true
                        show = true;
                    }

                    result.forEach(function (observable) {
                        if (utils.isValidatable(observable)) {
                            observable.isModified(show);
                        }
                    });
                };

                result.isAnyMessageShown = function () {
                    var invalidAndModifiedPresent;

                    invalidAndModifiedPresent = !!result.find(function (observable) {
                        return utils.isValidatable(observable) && !observable.isValid() && observable.isModified();
                    });
                    return invalidAndModifiedPresent;
                };

                result.filter = function (predicate) {
                    predicate = predicate || function () {
                        return true;
                    };
                    // ensure we have latest changes
                    result();

                    return koUtils.arrayFilter(context.validatables, predicate);
                };

                result.find = function (predicate) {
                    predicate = predicate || function () {
                        return true;
                    };
                    // ensure we have latest changes
                    result();

                    return koUtils.arrayFirst(context.validatables, predicate);
                };

                result.forEach = function (callback) {
                    callback = callback || function () {
                    };
                    // ensure we have latest changes
                    result();

                    forEach(context.validatables, callback);
                };

                result.map = function (mapping) {
                    mapping = mapping || function (item) {
                        return item;
                    };
                    // ensure we have latest changes
                    result();

                    return koUtils.arrayMap(context.validatables, mapping);
                };

                /**
                 * @private You should not rely on this method being here.
                 * It's a private method and it may change in the future.
                 *
                 * @description Updates the validated object and collects errors from it.
                 */
                result._updateState = function (newValue) {
                    if (!utils.isObject(newValue)) {
                        throw new Error('An object is required.');
                    }
                    obj = newValue;
                    if (options.observable) {
                        context.graphMonitor.valueHasMutated();
                    } else {
                        runTraversal(newValue, context);
                        return collectErrors(context.validatables);
                    }
                };
                return result;
            },

            formatMessage: function (message, params, observable) {
                if (utils.isObject(params) && params.typeAttr) {
                    params = params.value;
                }
                if (typeof message === 'function') {
                    return message(params, observable);
                }
                var replacements = unwrap(params);
                if (replacements == null) {
                    replacements = [];
                }
                if (!utils.isArray(replacements)) {
                    replacements = [replacements];
                }
                return message.replace(/{(\d+)}/gi, function (match, index) {
                    if (typeof replacements[index] !== 'undefined') {
                        return replacements[index];
                    }
                    return match;
                });
            },

            // addRule:
            // This takes in a ko.observable and a Rule Context - which is just a rule name and params to supply to the validator
            // ie: kv.addRule(myObservable, {
            //		  rule: 'required',
            //		  params: true
            //	  });
            //
            addRule: function (observable, rule) {
                observable.extend({validatable: true});

                var hasRule = !!koUtils.arrayFirst(observable.rules(), function (item) {
                    return item.rule && item.rule === rule.rule;
                });

                if (!hasRule) {
                    //push a Rule Context to the observables local array of Rule Contexts
                    observable.rules.push(rule);
                }
                return observable;
            },

            // addAnonymousRule:
            // Anonymous Rules essentially have all the properties of a Rule, but are only specific for a certain property
            // and developers typically are wanting to add them on the fly or not register a rule with the 'kv.rules' object
            //
            // Example:
            // var test = ko.observable('something').extend{(
            //	  validation: {
            //		  validator: function(val, someOtherVal){
            //			  return true;
            //		  },
            //		  message: "Something must be really wrong!',
            //		  params: true
            //	  }
            //  )};
            addAnonymousRule: function (observable, ruleObj) {
                if (ruleObj['message'] === undefined) {
                    ruleObj['message'] = 'Error';
                }

                //make sure onlyIf is honoured
                if (ruleObj.onlyIf) {
                    ruleObj.condition = ruleObj.onlyIf;
                }

                //add the anonymous rule to the observable
                kv.addRule(observable, ruleObj);
            },

            addExtender: function (ruleName) {
                ko.extenders[ruleName] = function (observable, params) {
                    //params can come in a few flavors
                    // 1. Just the params to be passed to the validator
                    // 2. An object containing the Message to be used and the Params to pass to the validator
                    // 3. A condition when the validation rule to be applied
                    //
                    // Example:
                    // var test = ko.observable(3).extend({
                    //	  max: {
                    //		  message: 'This special field has a Max of {0}',
                    //		  params: 2,
                    //		  onlyIf: function() {
                    //					  return specialField.IsVisible();
                    //				  }
                    //	  }
                    //  )};
                    //
                    if (params && (params.message || params.onlyIf)) { //if it has a message or condition object, then its an object literal to use
                        return kv.addRule(observable, {
                            rule: ruleName,
                            message: params.message,
                            params: utils.isEmptyVal(params.params) ? true : params.params,
                            condition: params.onlyIf
                        });
                    } else {
                        return kv.addRule(observable, {
                            rule: ruleName,
                            params: params
                        });
                    }
                };
            },

            // loops through all kv.rules and adds them as extenders to
            // ko.extenders
            registerExtenders: function () { // root extenders optional, use 'validation' extender if would cause conflicts
                if (configuration.registerExtenders) {
                    for (var ruleName in kv.rules) {
                        if (kv.rules.hasOwnProperty(ruleName)) {
                            if (!ko.extenders[ruleName]) {
                                kv.addExtender(ruleName);
                            }
                        }
                    }
                }
            },

            //creates a span next to the @element with the specified error class
            insertValidationMessage: function (element) {
                var span = document.createElement('SPAN');
                span.className = utils.getConfigOptions(element).errorMessageClass;
                utils.insertAfter(element, span);
                return span;
            },

            // if html-5 validation attributes have been specified, this parses
            // the attributes on @element
            parseInputValidationAttributes: function (element, valueAccessor) {
                forEach(kv.configuration.html5Attributes, function (attr) {
                    if (utils.hasAttribute(element, attr)) {

                        var params = element.getAttribute(attr) || true;

                        if (attr === 'min' || attr === 'max') {
                            // If we're validating based on the min and max attributes, we'll
                            // need to know what the 'type' attribute is set to
                            var typeAttr = element.getAttribute('type');
                            if (typeof typeAttr === "undefined" || !typeAttr) {
                                // From http://www.w3.org/TR/html-markup/input:
                                //   An input element with no type attribute specified represents the
                                //   same thing as an input element with its type attribute set to "text".
                                typeAttr = "text";
                            }
                            params = {typeAttr: typeAttr, value: params};
                        }

                        kv.addRule(valueAccessor(), {
                            rule: attr,
                            params: params
                        });
                    }
                });

                var currentType = element.getAttribute('type');
                forEach(kv.configuration.html5InputTypes, function (type) {
                    if (type === currentType) {
                        kv.addRule(valueAccessor(), {
                            rule: (type === 'date') ? 'dateISO' : type,
                            params: true
                        });
                    }
                });
            },

            // writes html5 validation attributes on the element passed in
            writeInputValidationAttributes: function (element, valueAccessor) {
                var observable = valueAccessor();

                if (!observable || !observable.rules) {
                    return;
                }

                var contexts = observable.rules(); // observable array

                // loop through the attributes and add the information needed
                forEach(kv.configuration.html5Attributes, function (attr) {
                    var ctx = koUtils.arrayFirst(contexts, function (ctx) {
                        return ctx.rule && ctx.rule.toLowerCase() === attr.toLowerCase();
                    });

                    if (!ctx) {
                        return;
                    }

                    // we have a rule matching a validation attribute at this point
                    // so lets add it to the element along with the params
                    ko.computed({
                        read: function () {
                            var params = ko.unwrap(ctx.params);

                            // we have to do some special things for the pattern validation
                            if (ctx.rule === "pattern" && params instanceof RegExp) {
                                // we need the pure string representation of the RegExpr without the //gi stuff
                                params = params.source;
                            }

                            element.setAttribute(attr, params);
                        },
                        disposeWhenNodeIsRemoved: element
                    });
                });

                contexts = null;
            },

            //take an existing binding handler and make it cause automatic validations
            makeBindingHandlerValidatable: function (handlerName) {
                var init = ko.bindingHandlers[handlerName].init;

                ko.bindingHandlers[handlerName].init = function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {

                    init(element, valueAccessor, allBindingsAccessor, viewModel, bindingContext);

                    return ko.bindingHandlers['validationCore'].init(element, valueAccessor, allBindingsAccessor, viewModel, bindingContext);
                };
            },

            // visit an objects properties and apply validation rules from a definition
            setRules: function (target, definition) {
                var setRules = function (target, definition) {
                    if (!target || !definition) {
                        return;
                    }

                    for (var prop in definition) {
                        if (!definition.hasOwnProperty(prop)) {
                            continue;
                        }
                        var ruleDefinitions = definition[prop];

                        //check the target property exists and has a value
                        if (!target[prop]) {
                            continue;
                        }
                        var targetValue = target[prop],
                            unwrappedTargetValue = unwrap(targetValue),
                            rules = {},
                            nonRules = {};

                        for (var rule in ruleDefinitions) {
                            if (!ruleDefinitions.hasOwnProperty(rule)) {
                                continue;
                            }
                            if (kv.rules[rule]) {
                                rules[rule] = ruleDefinitions[rule];
                            } else {
                                nonRules[rule] = ruleDefinitions[rule];
                            }
                        }

                        //apply rules
                        if (ko.isObservable(targetValue)) {
                            targetValue.extend(rules);
                        }

                        //then apply child rules
                        //if it's an array, apply rules to all children
                        if (unwrappedTargetValue && utils.isArray(unwrappedTargetValue)) {
                            for (var i = 0; i < unwrappedTargetValue.length; i++) {
                                setRules(unwrappedTargetValue[i], nonRules);
                            }
                            //otherwise, just apply to this property
                        } else {
                            setRules(unwrappedTargetValue, nonRules);
                        }
                    }
                };
                setRules(target, definition);
            }
        };

    }());

// expose api publicly
    extend(ko.validation, api);
    ;//Validation Rules:
// You can view and override messages or rules via:
// kv.rules[ruleName]
//
// To implement a custom Rule, simply use this template:
// kv.rules['<custom rule name>'] = {
//      validator: function (val, param) {
//          <custom logic>
//          return <true or false>;
//      },
//      message: '<custom validation message>' //optionally you can also use a '{0}' to denote a placeholder that will be replaced with your 'param'
// };
//
// Example:
// kv.rules['mustEqual'] = {
//      validator: function( val, mustEqualVal ){
//          return val === mustEqualVal;
//      },
//      message: 'This field must equal {0}'
// };
//
    kv.rules = {};
    kv.rules['required'] = {
        validator: function (val, required) {
            var testVal;

            if (val === undefined || val === null) {
                return !required;
            }

            testVal = val;
            if (typeof (val) === 'string') {
                if (String.prototype.trim) {
                    testVal = val.trim();
                } else {
                    testVal = val.replace(/^\s+|\s+$/g, '');
                }
            }

            if (!required) {// if they passed: { required: false }, then don't require this
                return true;
            }

            return ((testVal + '').length > 0);
        },
        message: 'This field is required.'
    };

    function minMaxValidatorFactory(validatorName) {
        var isMaxValidation = validatorName === "max";

        return function (val, options) {
            if (kv.utils.isEmptyVal(val)) {
                return true;
            }

            var comparisonValue, type;
            if (options.typeAttr === undefined) {
                // This validator is being called from javascript rather than
                // being bound from markup
                type = "text";
                comparisonValue = options;
            } else {
                type = options.typeAttr;
                comparisonValue = options.value;
            }

            // From http://www.w3.org/TR/2012/WD-html5-20121025/common-input-element-attributes.html#attr-input-min,
            // if the value is parseable to a number, then the minimum should be numeric
            if (!isNaN(comparisonValue) && !(comparisonValue instanceof Date)) {
                type = "number";
            }

            var regex, valMatches, comparisonValueMatches;
            switch (type.toLowerCase()) {
                case "week":
                    regex = /^(\d{4})-W(\d{2})$/;
                    valMatches = val.match(regex);
                    if (valMatches === null) {
                        throw new Error("Invalid value for " + validatorName + " attribute for week input.  Should look like " +
                            "'2000-W33' http://www.w3.org/TR/html-markup/input.week.html#input.week.attrs.min");
                    }
                    comparisonValueMatches = comparisonValue.match(regex);
                    // If no regex matches were found, validation fails
                    if (!comparisonValueMatches) {
                        return false;
                    }

                    if (isMaxValidation) {
                        return (valMatches[1] < comparisonValueMatches[1]) || // older year
                            // same year, older week
                            ((valMatches[1] === comparisonValueMatches[1]) && (valMatches[2] <= comparisonValueMatches[2]));
                    } else {
                        return (valMatches[1] > comparisonValueMatches[1]) || // newer year
                            // same year, newer week
                            ((valMatches[1] === comparisonValueMatches[1]) && (valMatches[2] >= comparisonValueMatches[2]));
                    }
                    break;

                case "month":
                    regex = /^(\d{4})-(\d{2})$/;
                    valMatches = val.match(regex);
                    if (valMatches === null) {
                        throw new Error("Invalid value for " + validatorName + " attribute for month input.  Should look like " +
                            "'2000-03' http://www.w3.org/TR/html-markup/input.month.html#input.month.attrs.min");
                    }
                    comparisonValueMatches = comparisonValue.match(regex);
                    // If no regex matches were found, validation fails
                    if (!comparisonValueMatches) {
                        return false;
                    }

                    if (isMaxValidation) {
                        return ((valMatches[1] < comparisonValueMatches[1]) || // older year
                            // same year, older month
                            ((valMatches[1] === comparisonValueMatches[1]) && (valMatches[2] <= comparisonValueMatches[2])));
                    } else {
                        return (valMatches[1] > comparisonValueMatches[1]) || // newer year
                            // same year, newer month
                            ((valMatches[1] === comparisonValueMatches[1]) && (valMatches[2] >= comparisonValueMatches[2]));
                    }
                    break;

                case "number":
                case "range":
                    if (isMaxValidation) {
                        return (!isNaN(val) && parseFloat(val) <= parseFloat(comparisonValue));
                    } else {
                        return (!isNaN(val) && parseFloat(val) >= parseFloat(comparisonValue));
                    }
                    break;

                default:
                    if (isMaxValidation) {
                        return val <= comparisonValue;
                    } else {
                        return val >= comparisonValue;
                    }
            }
        };
    }

    kv.rules['min'] = {
        validator: minMaxValidatorFactory("min"),
        message: 'Please enter a value greater than or equal to {0}.'
    };

    kv.rules['max'] = {
        validator: minMaxValidatorFactory("max"),
        message: 'Please enter a value less than or equal to {0}.'
    };

    kv.rules['minLength'] = {
        validator: function (val, minLength) {
            if (kv.utils.isEmptyVal(val)) {
                return true;
            }
            var normalizedVal = kv.utils.isNumber(val) ? ('' + val) : val;
            return normalizedVal.length >= minLength;
        },
        message: 'Please enter at least {0} characters.'
    };

    kv.rules['maxLength'] = {
        validator: function (val, maxLength) {
            if (kv.utils.isEmptyVal(val)) {
                return true;
            }
            var normalizedVal = kv.utils.isNumber(val) ? ('' + val) : val;
            return normalizedVal.length <= maxLength;
        },
        message: 'Please enter no more than {0} characters.'
    };

    kv.rules['pattern'] = {
        validator: function (val, regex) {
            return kv.utils.isEmptyVal(val) || val.toString().match(regex) !== null;
        },
        message: 'Please check this value.'
    };

    kv.rules['step'] = {
        validator: function (val, step) {

            // in order to handle steps of .1 & .01 etc.. Modulus won't work
            // if the value is a decimal, so we have to correct for that
            if (kv.utils.isEmptyVal(val) || step === 'any') {
                return true;
            }
            var dif = (val * 100) % (step * 100);
            return Math.abs(dif) < 0.00001 || Math.abs(1 - dif) < 0.00001;
        },
        message: 'The value must increment by {0}.'
    };

    kv.rules['email'] = {
        validator: function (val, validate) {
            if (!validate) {
                return true;
            }

            //I think an empty email address is also a valid entry
            //if one want's to enforce entry it should be done with 'required: true'
            return kv.utils.isEmptyVal(val) || (
                // jquery validate regex - thanks Scott Gonzalez
                validate && /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(val)
            );
        },
        message: 'Please enter a proper email address.'
    };

    kv.rules['date'] = {
        validator: function (value, validate) {
            if (!validate) {
                return true;
            }
            return kv.utils.isEmptyVal(value) || (validate && !/Invalid|NaN/.test(new Date(value)));
        },
        message: 'Please enter a proper date.'
    };

    kv.rules['dateISO'] = {
        validator: function (value, validate) {
            if (!validate) {
                return true;
            }
            return kv.utils.isEmptyVal(value) || (validate && /^\d{4}[-/](?:0?[1-9]|1[012])[-/](?:0?[1-9]|[12][0-9]|3[01])$/.test(value));
        },
        message: 'Please enter a proper date.'
    };

    kv.rules['number'] = {
        validator: function (value, validate) {
            if (!validate) {
                return true;
            }
            return kv.utils.isEmptyVal(value) || (validate && /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(value));
        },
        message: 'Please enter a number.'
    };

    kv.rules['digit'] = {
        validator: function (value, validate) {
            if (!validate) {
                return true;
            }
            return kv.utils.isEmptyVal(value) || (validate && /^\d+$/.test(value));
        },
        message: 'Please enter a digit.'
    };

    kv.rules['phoneUS'] = {
        validator: function (phoneNumber, validate) {
            if (!validate) {
                return true;
            }
            if (kv.utils.isEmptyVal(phoneNumber)) {
                return true;
            } // makes it optional, use 'required' rule if it should be required
            if (typeof (phoneNumber) !== 'string') {
                return false;
            }
            phoneNumber = phoneNumber.replace(/\s+/g, "");
            return validate && phoneNumber.length > 9 && phoneNumber.match(/^(1-?)?(\([2-9]\d{2}\)|[2-9]\d{2})-?[2-9]\d{2}-?\d{4}$/);
        },
        message: 'Please specify a valid phone number.'
    };

    kv.rules['equal'] = {
        validator: function (val, params) {
            var otherValue = params;
            return val === kv.utils.getValue(otherValue);
        },
        message: 'Values must equal.'
    };

    kv.rules['notEqual'] = {
        validator: function (val, params) {
            var otherValue = params;
            return val !== kv.utils.getValue(otherValue);
        },
        message: 'Please choose another value.'
    };

//unique in collection
// options are:
//    collection: array or function returning (observable) array
//              in which the value has to be unique
//    valueAccessor: function that returns value from an object stored in collection
//              if it is null the value is compared directly
//    external: set to true when object you are validating is automatically updating collection
    kv.rules['unique'] = {
        validator: function (val, options) {
            var c = kv.utils.getValue(options.collection),
                external = kv.utils.getValue(options.externalValue),
                counter = 0;

            if (!val || !c) {
                return true;
            }

            koUtils.arrayFilter(c, function (item) {
                if (val === (options.valueAccessor ? options.valueAccessor(item) : item)) {
                    counter++;
                }
            });
            // if value is external even 1 same value in collection means the value is not unique
            return counter < (!!external ? 1 : 2);
        },
        message: 'Please make sure the value is unique.'
    };


//now register all of these!
    (function () {
        kv.registerExtenders();
    }());
    ;// The core binding handler
// this allows us to setup any value binding that internally always
// performs the same functionality
    ko.bindingHandlers['validationCore'] = (function () {

        return {
            init: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
                var config = kv.utils.getConfigOptions(element);
                var observable = valueAccessor();

                // parse html5 input validation attributes, optional feature
                if (config.parseInputAttributes) {
                    kv.utils.async(function () {
                        kv.parseInputValidationAttributes(element, valueAccessor);
                    });
                }

                // if requested insert message element and apply bindings
                if (config.insertMessages && kv.utils.isValidatable(observable)) {

                    // insert the <span></span>
                    var validationMessageElement = kv.insertValidationMessage(element);

                    // if we're told to use a template, make sure that gets rendered
                    if (config.messageTemplate) {
                        ko.renderTemplate(config.messageTemplate, {field: observable}, null, validationMessageElement, 'replaceNode');
                    } else {
                        ko.applyBindingsToNode(validationMessageElement, {validationMessage: observable});
                    }
                }

                // write the html5 attributes if indicated by the config
                if (config.writeInputAttributes && kv.utils.isValidatable(observable)) {

                    kv.writeInputValidationAttributes(element, valueAccessor);
                }

                // if requested, add binding to decorate element
                if (config.decorateInputElement && kv.utils.isValidatable(observable)) {
                    ko.applyBindingsToNode(element, {validationElement: observable});
                }
            }
        };

    }());

// override for KO's default 'value', 'checked', 'textInput' and selectedOptions bindings
    kv.makeBindingHandlerValidatable("value");
    kv.makeBindingHandlerValidatable("checked");
    if (ko.bindingHandlers.textInput) {
        kv.makeBindingHandlerValidatable("textInput");
    }
    kv.makeBindingHandlerValidatable("selectedOptions");


    ko.bindingHandlers['validationMessage'] = { // individual error message, if modified or post binding
        update: function (element, valueAccessor) {
            var obsv = valueAccessor(),
                config = kv.utils.getConfigOptions(element),
                val = unwrap(obsv),
                msg = null,
                isModified = false,
                isValid = false;

            if (obsv === null || typeof obsv === 'undefined') {
                throw new Error('Cannot bind validationMessage to undefined value. data-bind expression: ' +
                    element.getAttribute('data-bind'));
            }

            isModified = obsv.isModified && obsv.isModified();
            isValid = obsv.isValid && obsv.isValid();

            var error = null;
            if (!config.messagesOnModified || isModified) {
                error = isValid ? null : obsv.error;
            }

            var isVisible = !config.messagesOnModified || isModified ? !isValid : false;
            var isCurrentlyVisible = element.style.display !== "none";

            if (config.allowHtmlMessages) {
                koUtils.setHtml(element, error);
            } else {
                ko.bindingHandlers.text.update(element, function () {
                    return error;
                });
            }

            if (isCurrentlyVisible && !isVisible) {
                element.style.display = 'none';
            } else if (!isCurrentlyVisible && isVisible) {
                element.style.display = '';
            }
        }
    };

    ko.bindingHandlers['validationElement'] = {
        update: function (element, valueAccessor, allBindingsAccessor) {
            var obsv = valueAccessor(),
                config = kv.utils.getConfigOptions(element),
                val = unwrap(obsv),
                msg = null,
                isModified = false,
                isValid = false;

            if (obsv === null || typeof obsv === 'undefined') {
                throw new Error('Cannot bind validationElement to undefined value. data-bind expression: ' +
                    element.getAttribute('data-bind'));
            }

            isModified = obsv.isModified && obsv.isModified();
            isValid = obsv.isValid && obsv.isValid();

            // create an evaluator function that will return something like:
            // css: { validationElement: true }
            var cssSettingsAccessor = function () {
                var css = {};

                var shouldShow = ((!config.decorateElementOnModified || isModified) ? !isValid : false);

                // css: { validationElement: false }
                css[config.errorElementClass] = shouldShow;

                return css;
            };

            //add or remove class on the element;
            ko.bindingHandlers.css.update(element, cssSettingsAccessor, allBindingsAccessor);
            if (!config.errorsAsTitle) {
                return;
            }

            ko.bindingHandlers.attr.update(element, function () {
                var
                    hasModification = !config.errorsAsTitleOnModified || isModified,
                    title = kv.utils.getOriginalElementTitle(element);

                if (hasModification && !isValid) {
                    return {title: obsv.error, 'data-orig-title': title};
                } else if (!hasModification || isValid) {
                    return {title: title, 'data-orig-title': null};
                }
            });
        }
    };

// ValidationOptions:
// This binding handler allows you to override the initial config by setting any of the options for a specific element or context of elements
//
// Example:
// <div data-bind="validationOptions: { insertMessages: true, messageTemplate: 'customTemplate', errorMessageClass: 'mySpecialClass'}">
//      <input type="text" data-bind="value: someValue"/>
//      <input type="text" data-bind="value: someValue2"/>
// </div>
    ko.bindingHandlers['validationOptions'] = (function () {
        return {
            init: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
                var options = unwrap(valueAccessor());
                if (options) {
                    var newConfig = extend({}, kv.configuration);
                    extend(newConfig, options);

                    //store the validation options on the node so we can retrieve it later
                    kv.utils.setDomData(element, newConfig);
                }
            }
        };
    }());
    ;// Validation Extender:
// This is for creating custom validation logic on the fly
// Example:
// var test = ko.observable('something').extend{(
//      validation: {
//          validator: function(val, someOtherVal){
//              return true;
//          },
//          message: "Something must be really wrong!',
//          params: true
//      }
//  )};
    ko.extenders['validation'] = function (observable, rules) { // allow single rule or array
        forEach(kv.utils.isArray(rules) ? rules : [rules], function (rule) {
            // the 'rule' being passed in here has no name to identify a core Rule,
            // so we add it as an anonymous rule
            // If the developer is wanting to use a core Rule, but use a different message see the 'addExtender' logic for examples
            kv.addAnonymousRule(observable, rule);
        });
        return observable;
    };

//This is the extender that makes a Knockout Observable also 'Validatable'
//examples include:
// 1. var test = ko.observable('something').extend({validatable: true});
// this will ensure that the Observable object is setup properly to respond to rules
//
// 2. test.extend({validatable: false});
// this will remove the validation properties from the Observable object should you need to do that.
    ko.extenders['validatable'] = function (observable, options) {
        if (!kv.utils.isObject(options)) {
            options = {enable: options};
        }

        if (!('enable' in options)) {
            options.enable = true;
        }

        if (options.enable && !kv.utils.isValidatable(observable)) {
            var config = kv.configuration.validate || {};
            var validationOptions = {
                throttleEvaluation: options.throttle || config.throttle
            };

            observable.error = ko.observable(null); // holds the error message, we only need one since we stop processing validators when one is invalid

            // observable.rules:
            // ObservableArray of Rule Contexts, where a Rule Context is simply the name of a rule and the params to supply to it
            //
            // Rule Context = { rule: '<rule name>', params: '<passed in params>', message: '<Override of default Message>' }
            observable.rules = ko.observableArray(); //holds the rule Contexts to use as part of validation

            //in case async validation is occurring
            observable.isValidating = ko.observable(false);

            //the true holder of whether the observable is valid or not
            observable.__valid__ = ko.observable(true);

            observable.isModified = ko.observable(false);

            // a semi-protected observable
            observable.isValid = ko.computed(observable.__valid__);

            //manually set error state
            observable.setError = function (error) {
                var previousError = observable.error.peek();
                var previousIsValid = observable.__valid__.peek();

                observable.error(error);
                observable.__valid__(false);

                if (previousError !== error && !previousIsValid) {
                    // if the observable was not valid before then isValid will not mutate,
                    // hence causing any grouping to not display the latest error.
                    observable.isValid.notifySubscribers();
                }
            };

            //manually clear error state
            observable.clearError = function () {
                observable.error(null);
                observable.__valid__(true);
                return observable;
            };

            //subscribe to changes in the observable
            var h_change = observable.subscribe(function () {
                observable.isModified(true);
            });

            // we use a computed here to ensure that anytime a dependency changes, the
            // validation logic evaluates
            var h_obsValidationTrigger = ko.computed(extend({
                read: function () {
                    var obs = observable(),
                        ruleContexts = observable.rules();

                    kv.validateObservable(observable);

                    return true;
                }
            }, validationOptions));

            extend(h_obsValidationTrigger, validationOptions);

            observable._disposeValidation = function () {
                //first dispose of the subscriptions
                observable.isValid.dispose();
                observable.rules.removeAll();
                h_change.dispose();
                h_obsValidationTrigger.dispose();

                delete observable['rules'];
                delete observable['error'];
                delete observable['isValid'];
                delete observable['isValidating'];
                delete observable['__valid__'];
                delete observable['isModified'];
                delete observable['setError'];
                delete observable['clearError'];
                delete observable['_disposeValidation'];
            };
        } else if (options.enable === false && observable._disposeValidation) {
            observable._disposeValidation();
        }
        return observable;
    };

    function validateSync(observable, rule, ctx) {
        //Execute the validator and see if its valid
        if (!rule.validator(observable(), (ctx.params === undefined ? true : unwrap(ctx.params)))) { // default param is true, eg. required = true

            //not valid, so format the error message and stick it in the 'error' variable
            observable.setError(kv.formatMessage(
                ctx.message || rule.message,
                unwrap(ctx.params),
                observable));
            return false;
        } else {
            return true;
        }
    }

    function validateAsync(observable, rule, ctx) {
        observable.isValidating(true);

        var callBack = function (valObj) {
            var isValid = false,
                msg = '';

            if (!observable.__valid__()) {

                // since we're returning early, make sure we turn this off
                observable.isValidating(false);

                return; //if its already NOT valid, don't add to that
            }

            //we were handed back a complex object
            if (valObj['message']) {
                isValid = valObj.isValid;
                msg = valObj.message;
            } else {
                isValid = valObj;
            }

            if (!isValid) {
                //not valid, so format the error message and stick it in the 'error' variable
                observable.error(kv.formatMessage(
                    msg || ctx.message || rule.message,
                    unwrap(ctx.params),
                    observable));
                observable.__valid__(isValid);
            }

            // tell it that we're done
            observable.isValidating(false);
        };

        kv.utils.async(function () {
            //fire the validator and hand it the callback
            rule.validator(observable(), ctx.params === undefined ? true : unwrap(ctx.params), callBack);
        });
    }

    kv.validateObservable = function (observable) {
        var i = 0,
            rule, // the rule validator to execute
            ctx, // the current Rule Context for the loop
            ruleContexts = observable.rules(), //cache for iterator
            len = ruleContexts.length; //cache for iterator

        for (; i < len; i++) {

            //get the Rule Context info to give to the core Rule
            ctx = ruleContexts[i];

            // checks an 'onlyIf' condition
            if (ctx.condition && !ctx.condition()) {
                continue;
            }

            //get the core Rule to use for validation
            rule = ctx.rule ? kv.rules[ctx.rule] : ctx;

            if (rule['async'] || ctx['async']) {
                //run async validation
                validateAsync(observable, rule, ctx);

            } else {
                //run normal sync validation
                if (!validateSync(observable, rule, ctx)) {
                    return false; //break out of the loop
                }
            }
        }
        //finally if we got this far, make the observable valid again!
        observable.clearError();
        return true;
    };
    ;
    var _locales = {};
    var _currentLocale;

    kv.defineLocale = function (name, values) {
        if (name && values) {
            _locales[name.toLowerCase()] = values;
            return values;
        }
        return null;
    };

    kv.locale = function (name) {
        if (name) {
            name = name.toLowerCase();

            if (_locales.hasOwnProperty(name)) {
                kv.localize(_locales[name]);
                _currentLocale = name;
            } else {
                throw new Error('Localization ' + name + ' has not been loaded.');
            }
        }
        return _currentLocale;
    };

//quick function to override rule messages
    kv.localize = function (msgTranslations) {
        var rules = kv.rules;

        //loop the properties in the object and assign the msg to the rule
        for (var ruleName in msgTranslations) {
            if (rules.hasOwnProperty(ruleName)) {
                rules[ruleName].message = msgTranslations[ruleName];
            }
        }
    };

// Populate default locale (this will make en-US.js somewhat redundant)
    (function () {
        var localeData = {};
        var rules = kv.rules;

        for (var ruleName in rules) {
            if (rules.hasOwnProperty(ruleName)) {
                localeData[ruleName] = rules[ruleName].message;
            }
        }
        kv.defineLocale('en-us', localeData);
    })();

// No need to invoke locale because the messages are already defined along with the rules for en-US
    _currentLocale = 'en-us';
    ;/**
     * Possible invocations:
     *        applyBindingsWithValidation(viewModel)
     *        applyBindingsWithValidation(viewModel, options)
     *        applyBindingsWithValidation(viewModel, rootNode)
     *        applyBindingsWithValidation(viewModel, rootNode, options)
     */
    ko.applyBindingsWithValidation = function (viewModel, rootNode, options) {
        var node = document.body,
            config;

        if (rootNode && rootNode.nodeType) {
            node = rootNode;
            config = options;
        } else {
            config = rootNode;
        }

        kv.init();

        if (config) {
            config = extend(extend({}, kv.configuration), config);
            kv.utils.setDomData(node, config);
        }

        ko.applyBindings(viewModel, node);
    };

//override the original applyBindings so that we can ensure all new rules and what not are correctly registered
    var origApplyBindings = ko.applyBindings;
    ko.applyBindings = function (viewModel, rootNode) {

        kv.init();

        origApplyBindings(viewModel, rootNode);
    };

    ko.validatedObservable = function (initialValue, options) {
        if (!options && !kv.utils.isObject(initialValue)) {
            return ko.observable(initialValue).extend({validatable: true});
        }

        var obsv = ko.observable(initialValue);
        obsv.errors = kv.group(kv.utils.isObject(initialValue) ? initialValue : {}, options);
        obsv.isValid = ko.observable(obsv.errors().length === 0);

        if (ko.isObservable(obsv.errors)) {
            obsv.errors.subscribe(function (errors) {
                obsv.isValid(errors.length === 0);
            });
        } else {
            ko.computed(obsv.errors).subscribe(function (errors) {
                obsv.isValid(errors.length === 0);
            });
        }

        obsv.subscribe(function (newValue) {
            if (!kv.utils.isObject(newValue)) {
                /*
                 * The validation group works on objects.
                 * Since the new value is a primitive (scalar, null or undefined) we need
                 * to create an empty object to pass along.
                 */
                newValue = {};
            }
            // Force the group to refresh
            obsv.errors._updateState(newValue);
            obsv.isValid(obsv.errors().length === 0);
        });

        return obsv;
    };
    ;
}));
!function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory(require('jquery'));
    } else {
        factory(root.jQuery);
    }
}(this, function ($) {

    /*!
     @package noty - jQuery Notification Plugin
     @version version: 2.3.7
     @contributors https://github.com/needim/noty/graphs/contributors

     @documentation Examples and Documentation - http://needim.github.com/noty/

     @license Licensed under the MIT licenses: http://www.opensource.org/licenses/mit-license.php
     */

    if (typeof Object.create !== 'function') {
        Object.create = function (o) {
            function F() {
            }

            F.prototype = o;
            return new F();
        };
    }

    var NotyObject = {

        init: function (options) {

            // Mix in the passed in options with the default options
            this.options = $.extend({}, $.noty.defaults, options);

            this.options.layout = (this.options.custom) ? $.noty.layouts['inline'] : $.noty.layouts[this.options.layout];

            if ($.noty.themes[this.options.theme])
                this.options.theme = $.noty.themes[this.options.theme];
            else
                options.themeClassName = this.options.theme;

            delete options.layout;
            delete options.theme;

            this.options = $.extend({}, this.options, this.options.layout.options);
            this.options.id = 'noty_' + (new Date().getTime() * Math.floor(Math.random() * 1000000));

            this.options = $.extend({}, this.options, options);

            // Build the noty dom initial structure
            this._build();

            // return this so we can chain/use the bridge with less code.
            return this;
        }, // end init

        _build: function () {

            // Generating noty bar
            var $bar = $('<div class="noty_bar noty_type_' + this.options.type + '"></div>').attr('id', this.options.id);
            $bar.append(this.options.template).find('.noty_text').html(this.options.text);

            this.$bar = (this.options.layout.parent.object !== null) ? $(this.options.layout.parent.object).css(this.options.layout.parent.css).append($bar) : $bar;

            if (this.options.themeClassName)
                this.$bar.addClass(this.options.themeClassName).addClass('noty_container_type_' + this.options.type);

            // Set buttons if available
            if (this.options.buttons) {

                // If we have button disable closeWith & timeout options
                this.options.closeWith = [];
                this.options.timeout = false;

                var $buttons = $('<div/>').addClass('noty_buttons');

                (this.options.layout.parent.object !== null) ? this.$bar.find('.noty_bar').append($buttons) : this.$bar.append($buttons);

                var self = this;

                $.each(this.options.buttons, function (i, button) {
                    var $button = $('<button/>').addClass((button.addClass) ? button.addClass : 'gray').html(button.text).attr('id', button.id ? button.id : 'button-' + i)
                        .attr('title', button.title)
                        .appendTo(self.$bar.find('.noty_buttons'))
                        .on('click', function (event) {
                            if ($.isFunction(button.onClick)) {
                                button.onClick.call($button, self, event);
                            }
                        });
                });
            }

            // For easy access
            this.$message = this.$bar.find('.noty_message');
            this.$closeButton = this.$bar.find('.noty_close');
            this.$buttons = this.$bar.find('.noty_buttons');

            $.noty.store[this.options.id] = this; // store noty for api

        }, // end _build

        show: function () {

            var self = this;

            (self.options.custom) ? self.options.custom.find(self.options.layout.container.selector).append(self.$bar) : $(self.options.layout.container.selector).append(self.$bar);

            if (self.options.theme && self.options.theme.style)
                self.options.theme.style.apply(self);

            ($.type(self.options.layout.css) === 'function') ? this.options.layout.css.apply(self.$bar) : self.$bar.css(this.options.layout.css || {});

            self.$bar.addClass(self.options.layout.addClass);

            self.options.layout.container.style.apply($(self.options.layout.container.selector), [self.options.within]);

            self.showing = true;

            if (self.options.theme && self.options.theme.style)
                self.options.theme.callback.onShow.apply(this);

            if ($.inArray('click', self.options.closeWith) > -1)
                self.$bar.css('cursor', 'pointer').one('click', function (evt) {
                    self.stopPropagation(evt);
                    if (self.options.callback.onCloseClick) {
                        self.options.callback.onCloseClick.apply(self);
                    }
                    self.close();
                });

            if ($.inArray('hover', self.options.closeWith) > -1)
                self.$bar.one('mouseenter', function () {
                    self.close();
                });

            if ($.inArray('button', self.options.closeWith) > -1)
                self.$closeButton.one('click', function (evt) {
                    self.stopPropagation(evt);
                    self.close();
                });

            if ($.inArray('button', self.options.closeWith) == -1)
                self.$closeButton.remove();

            if (self.options.callback.onShow)
                self.options.callback.onShow.apply(self);

            if (typeof self.options.animation.open == 'string') {
                self.$bar.css('height', self.$bar.innerHeight());
                self.$bar.on('click', function (e) {
                    self.wasClicked = true;
                });
                self.$bar.show().addClass(self.options.animation.open).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
                    if (self.options.callback.afterShow) self.options.callback.afterShow.apply(self);
                    self.showing = false;
                    self.shown = true;
                    if (self.hasOwnProperty('wasClicked')) {
                        self.$bar.off('click', function (e) {
                            self.wasClicked = true;
                        });
                        self.close();
                    }
                });

            } else {
                self.$bar.animate(
                    self.options.animation.open,
                    self.options.animation.speed,
                    self.options.animation.easing,
                    function () {
                        if (self.options.callback.afterShow) self.options.callback.afterShow.apply(self);
                        self.showing = false;
                        self.shown = true;
                    });
            }

            // If noty is have a timeout option
            if (self.options.timeout)
                self.$bar.delay(self.options.timeout).promise().done(function () {
                    self.close();
                });

            return this;

        }, // end show

        close: function () {

            if (this.closed) return;
            if (this.$bar && this.$bar.hasClass('i-am-closing-now')) return;

            var self = this;

            if (this.showing) {
                self.$bar.queue(
                    function () {
                        self.close.apply(self);
                    }
                );
                return;
            }

            if (!this.shown && !this.showing) { // If we are still waiting in the queue just delete from queue
                var queue = [];
                $.each($.noty.queue, function (i, n) {
                    if (n.options.id != self.options.id) {
                        queue.push(n);
                    }
                });
                $.noty.queue = queue;
                return;
            }

            self.$bar.addClass('i-am-closing-now');

            if (self.options.callback.onClose) {
                self.options.callback.onClose.apply(self);
            }

            if (typeof self.options.animation.close == 'string') {
                self.$bar.addClass(self.options.animation.close).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
                    if (self.options.callback.afterClose) self.options.callback.afterClose.apply(self);
                    self.closeCleanUp();
                });
            } else {
                self.$bar.clearQueue().stop().animate(
                    self.options.animation.close,
                    self.options.animation.speed,
                    self.options.animation.easing,
                    function () {
                        if (self.options.callback.afterClose) self.options.callback.afterClose.apply(self);
                    })
                    .promise().done(function () {
                    self.closeCleanUp();
                });
            }

        }, // end close

        closeCleanUp: function () {

            var self = this;

            // Modal Cleaning
            if (self.options.modal) {
                $.notyRenderer.setModalCount(-1);
                if ($.notyRenderer.getModalCount() == 0) $('.noty_modal').fadeOut(self.options.animation.fadeSpeed, function () {
                    $(this).remove();
                });
            }

            // Layout Cleaning
            $.notyRenderer.setLayoutCountFor(self, -1);
            if ($.notyRenderer.getLayoutCountFor(self) == 0) $(self.options.layout.container.selector).remove();

            // Make sure self.$bar has not been removed before attempting to remove it
            if (typeof self.$bar !== 'undefined' && self.$bar !== null) {

                if (typeof self.options.animation.close == 'string') {
                    self.$bar.css('transition', 'all 100ms ease').css('border', 0).css('margin', 0).height(0);
                    self.$bar.one('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd', function () {
                        self.$bar.remove();
                        self.$bar = null;
                        self.closed = true;

                        if (self.options.theme.callback && self.options.theme.callback.onClose) {
                            self.options.theme.callback.onClose.apply(self);
                        }
                    });
                } else {
                    self.$bar.remove();
                    self.$bar = null;
                    self.closed = true;
                }
            }

            delete $.noty.store[self.options.id]; // deleting noty from store

            if (self.options.theme.callback && self.options.theme.callback.onClose) {
                self.options.theme.callback.onClose.apply(self);
            }

            if (!self.options.dismissQueue) {
                // Queue render
                $.noty.ontap = true;

                $.notyRenderer.render();
            }

            if (self.options.maxVisible > 0 && self.options.dismissQueue) {
                $.notyRenderer.render();
            }

        }, // end close clean up

        setText: function (text) {
            if (!this.closed) {
                this.options.text = text;
                this.$bar.find('.noty_text').html(text);
            }
            return this;
        },

        setType: function (type) {
            if (!this.closed) {
                this.options.type = type;
                this.options.theme.style.apply(this);
                this.options.theme.callback.onShow.apply(this);
            }
            return this;
        },

        setTimeout: function (time) {
            if (!this.closed) {
                var self = this;
                this.options.timeout = time;
                self.$bar.delay(self.options.timeout).promise().done(function () {
                    self.close();
                });
            }
            return this;
        },

        stopPropagation: function (evt) {
            evt = evt || window.event;
            if (typeof evt.stopPropagation !== "undefined") {
                evt.stopPropagation();
            } else {
                evt.cancelBubble = true;
            }
        },

        closed: false,
        showing: false,
        shown: false

    }; // end NotyObject

    $.notyRenderer = {};

    $.notyRenderer.init = function (options) {

        // Renderer creates a new noty
        var notification = Object.create(NotyObject).init(options);

        if (notification.options.killer)
            $.noty.closeAll();

        (notification.options.force) ? $.noty.queue.unshift(notification) : $.noty.queue.push(notification);

        $.notyRenderer.render();

        return ($.noty.returns == 'object') ? notification : notification.options.id;
    };

    $.notyRenderer.render = function () {

        var instance = $.noty.queue[0];

        if ($.type(instance) === 'object') {
            if (instance.options.dismissQueue) {
                if (instance.options.maxVisible > 0) {
                    if ($(instance.options.layout.container.selector + ' > li').length < instance.options.maxVisible) {
                        $.notyRenderer.show($.noty.queue.shift());
                    } else {

                    }
                } else {
                    $.notyRenderer.show($.noty.queue.shift());
                }
            } else {
                if ($.noty.ontap) {
                    $.notyRenderer.show($.noty.queue.shift());
                    $.noty.ontap = false;
                }
            }
        } else {
            $.noty.ontap = true; // Queue is over
        }

    };

    $.notyRenderer.show = function (notification) {

        if (notification.options.modal) {
            $.notyRenderer.createModalFor(notification);
            $.notyRenderer.setModalCount(+1);
        }

        // Where is the container?
        if (notification.options.custom) {
            if (notification.options.custom.find(notification.options.layout.container.selector).length == 0) {
                notification.options.custom.append($(notification.options.layout.container.object).addClass('i-am-new'));
            } else {
                notification.options.custom.find(notification.options.layout.container.selector).removeClass('i-am-new');
            }
        } else {
            if ($(notification.options.layout.container.selector).length == 0) {
                $('body').append($(notification.options.layout.container.object).addClass('i-am-new'));
            } else {
                $(notification.options.layout.container.selector).removeClass('i-am-new');
            }
        }

        $.notyRenderer.setLayoutCountFor(notification, +1);

        notification.show();
    };

    $.notyRenderer.createModalFor = function (notification) {
        if ($('.noty_modal').length == 0) {
            var modal = $('<div/>').addClass('noty_modal').addClass(notification.options.theme).data('noty_modal_count', 0);

            if (notification.options.theme.modal && notification.options.theme.modal.css)
                modal.css(notification.options.theme.modal.css);

            modal.prependTo($('body')).fadeIn(notification.options.animation.fadeSpeed);

            if ($.inArray('backdrop', notification.options.closeWith) > -1)
                modal.on('click', function (e) {
                    $.noty.closeAll();
                });
        }
    };

    $.notyRenderer.getLayoutCountFor = function (notification) {
        return $(notification.options.layout.container.selector).data('noty_layout_count') || 0;
    };

    $.notyRenderer.setLayoutCountFor = function (notification, arg) {
        return $(notification.options.layout.container.selector).data('noty_layout_count', $.notyRenderer.getLayoutCountFor(notification) + arg);
    };

    $.notyRenderer.getModalCount = function () {
        return $('.noty_modal').data('noty_modal_count') || 0;
    };

    $.notyRenderer.setModalCount = function (arg) {
        return $('.noty_modal').data('noty_modal_count', $.notyRenderer.getModalCount() + arg);
    };

    // This is for custom container
    $.fn.noty = function (options) {
        options.custom = $(this);
        return $.notyRenderer.init(options);
    };

    $.noty = {};
    $.noty.queue = [];
    $.noty.ontap = true;
    $.noty.layouts = {};
    $.noty.themes = {};
    $.noty.returns = 'object';
    $.noty.store = {};

    $.noty.get = function (id) {
        return $.noty.store.hasOwnProperty(id) ? $.noty.store[id] : false;
    };

    $.noty.close = function (id) {
        return $.noty.get(id) ? $.noty.get(id).close() : false;
    };

    $.noty.setText = function (id, text) {
        return $.noty.get(id) ? $.noty.get(id).setText(text) : false;
    };

    $.noty.setType = function (id, type) {
        return $.noty.get(id) ? $.noty.get(id).setType(type) : false;
    };

    $.noty.clearQueue = function () {
        $.noty.queue = [];
    };

    $.noty.closeAll = function () {
        $.noty.clearQueue();
        $.each($.noty.store, function (id, noty) {
            noty.close();
        });
    };

    var windowAlert = window.alert;

    $.noty.consumeAlert = function (options) {
        window.alert = function (text) {
            if (options)
                options.text = text;
            else
                options = {text: text};

            $.notyRenderer.init(options);
        };
    };

    $.noty.stopConsumeAlert = function () {
        window.alert = windowAlert;
    };

    $.noty.defaults = {
        layout: 'top',
        theme: 'defaultTheme',
        type: 'alert',
        text: '',
        dismissQueue: true,
        template: '<div class="noty_message"><span class="noty_text"></span><div class="noty_close"></div></div>',
        animation: {
            open: {height: 'toggle'},
            close: {height: 'toggle'},
            easing: 'swing',
            speed: 500,
            fadeSpeed: 'fast',
        },
        timeout: false,
        force: false,
        modal: false,
        maxVisible: 5,
        killer: false,
        closeWith: ['click'],
        callback: {
            onShow: function () {
            },
            afterShow: function () {
            },
            onClose: function () {
            },
            afterClose: function () {
            },
            onCloseClick: function () {
            }
        },
        buttons: false
    };

    $(window).on('resize', function () {
        $.each($.noty.layouts, function (index, layout) {
            layout.container.style.apply($(layout.container.selector));
        });
    });

    // Helpers
    window.noty = function noty(options) {
        return $.notyRenderer.init(options);
    };

    $.noty.layouts.bottom = {
        name: 'bottom',
        options: {},
        container: {
            object: '<ul id="noty_bottom_layout_container" />',
            selector: 'ul#noty_bottom_layout_container',
            style: function () {
                $(this).css({
                    bottom: 0,
                    left: '5%',
                    position: 'fixed',
                    width: '90%',
                    height: 'auto',
                    margin: 0,
                    padding: 0,
                    listStyleType: 'none',
                    zIndex: 9999999
                });
            }
        },
        parent: {
            object: '<li />',
            selector: 'li',
            css: {}
        },
        css: {
            display: 'none'
        },
        addClass: ''
    };

    $.noty.layouts.bottomCenter = {
        name: 'bottomCenter',
        options: { // overrides options

        },
        container: {
            object: '<ul id="noty_bottomCenter_layout_container" />',
            selector: 'ul#noty_bottomCenter_layout_container',
            style: function () {
                $(this).css({
                    bottom: 20,
                    left: 0,
                    position: 'fixed',
                    width: '310px',
                    height: 'auto',
                    margin: 0,
                    padding: 0,
                    listStyleType: 'none',
                    zIndex: 10000000
                });

                $(this).css({
                    left: ($(window).width() - $(this).outerWidth(false)) / 2 + 'px'
                });
            }
        },
        parent: {
            object: '<li />',
            selector: 'li',
            css: {}
        },
        css: {
            display: 'none',
            width: '310px'
        },
        addClass: ''
    };


    $.noty.layouts.bottomLeft = {
        name: 'bottomLeft',
        options: { // overrides options

        },
        container: {
            object: '<ul id="noty_bottomLeft_layout_container" />',
            selector: 'ul#noty_bottomLeft_layout_container',
            style: function () {
                $(this).css({
                    bottom: 20,
                    left: 20,
                    position: 'fixed',
                    width: '310px',
                    height: 'auto',
                    margin: 0,
                    padding: 0,
                    listStyleType: 'none',
                    zIndex: 10000000
                });

                if (window.innerWidth < 600) {
                    $(this).css({
                        left: 5
                    });
                }
            }
        },
        parent: {
            object: '<li />',
            selector: 'li',
            css: {}
        },
        css: {
            display: 'none',
            width: '310px'
        },
        addClass: ''
    };
    $.noty.layouts.bottomRight = {
        name: 'bottomRight',
        options: { // overrides options

        },
        container: {
            object: '<ul id="noty_bottomRight_layout_container" />',
            selector: 'ul#noty_bottomRight_layout_container',
            style: function () {
                $(this).css({
                    bottom: 20,
                    right: 20,
                    position: 'fixed',
                    width: '310px',
                    height: 'auto',
                    margin: 0,
                    padding: 0,
                    listStyleType: 'none',
                    zIndex: 10000000
                });

                if (window.innerWidth < 600) {
                    $(this).css({
                        right: 5
                    });
                }
            }
        },
        parent: {
            object: '<li />',
            selector: 'li',
            css: {}
        },
        css: {
            display: 'none',
            width: '310px'
        },
        addClass: ''
    };
    $.noty.layouts.center = {
        name: 'center',
        options: { // overrides options

        },
        container: {
            object: '<ul id="noty_center_layout_container" />',
            selector: 'ul#noty_center_layout_container',
            style: function () {
                $(this).css({
                    position: 'fixed',
                    width: '310px',
                    height: 'auto',
                    margin: 0,
                    padding: 0,
                    listStyleType: 'none',
                    zIndex: 10000000
                });

                // getting hidden height
                var dupe = $(this).clone().css({
                    visibility: "hidden",
                    display: "block",
                    position: "absolute",
                    top: 0,
                    left: 0
                }).attr('id', 'dupe');
                $("body").append(dupe);
                dupe.find('.i-am-closing-now').remove();
                dupe.find('li').css('display', 'block');
                var actual_height = dupe.height();
                dupe.remove();

                if ($(this).hasClass('i-am-new')) {
                    $(this).css({
                        left: ($(window).width() - $(this).outerWidth(false)) / 2 + 'px',
                        top: ($(window).height() - actual_height) / 2 + 'px'
                    });
                } else {
                    $(this).animate({
                        left: ($(window).width() - $(this).outerWidth(false)) / 2 + 'px',
                        top: ($(window).height() - actual_height) / 2 + 'px'
                    }, 500);
                }

            }
        },
        parent: {
            object: '<li />',
            selector: 'li',
            css: {}
        },
        css: {
            display: 'none',
            width: '310px'
        },
        addClass: ''
    };
    $.noty.layouts.centerLeft = {
        name: 'centerLeft',
        options: { // overrides options

        },
        container: {
            object: '<ul id="noty_centerLeft_layout_container" />',
            selector: 'ul#noty_centerLeft_layout_container',
            style: function () {
                $(this).css({
                    left: 20,
                    position: 'fixed',
                    width: '310px',
                    height: 'auto',
                    margin: 0,
                    padding: 0,
                    listStyleType: 'none',
                    zIndex: 10000000
                });

                // getting hidden height
                var dupe = $(this).clone().css({
                    visibility: "hidden",
                    display: "block",
                    position: "absolute",
                    top: 0,
                    left: 0
                }).attr('id', 'dupe');
                $("body").append(dupe);
                dupe.find('.i-am-closing-now').remove();
                dupe.find('li').css('display', 'block');
                var actual_height = dupe.height();
                dupe.remove();

                if ($(this).hasClass('i-am-new')) {
                    $(this).css({
                        top: ($(window).height() - actual_height) / 2 + 'px'
                    });
                } else {
                    $(this).animate({
                        top: ($(window).height() - actual_height) / 2 + 'px'
                    }, 500);
                }

                if (window.innerWidth < 600) {
                    $(this).css({
                        left: 5
                    });
                }

            }
        },
        parent: {
            object: '<li />',
            selector: 'li',
            css: {}
        },
        css: {
            display: 'none',
            width: '310px'
        },
        addClass: ''
    };

    $.noty.layouts.centerRight = {
        name: 'centerRight',
        options: { // overrides options

        },
        container: {
            object: '<ul id="noty_centerRight_layout_container" />',
            selector: 'ul#noty_centerRight_layout_container',
            style: function () {
                $(this).css({
                    right: 20,
                    position: 'fixed',
                    width: '310px',
                    height: 'auto',
                    margin: 0,
                    padding: 0,
                    listStyleType: 'none',
                    zIndex: 10000000
                });

                // getting hidden height
                var dupe = $(this).clone().css({
                    visibility: "hidden",
                    display: "block",
                    position: "absolute",
                    top: 0,
                    left: 0
                }).attr('id', 'dupe');
                $("body").append(dupe);
                dupe.find('.i-am-closing-now').remove();
                dupe.find('li').css('display', 'block');
                var actual_height = dupe.height();
                dupe.remove();

                if ($(this).hasClass('i-am-new')) {
                    $(this).css({
                        top: ($(window).height() - actual_height) / 2 + 'px'
                    });
                } else {
                    $(this).animate({
                        top: ($(window).height() - actual_height) / 2 + 'px'
                    }, 500);
                }

                if (window.innerWidth < 600) {
                    $(this).css({
                        right: 5
                    });
                }

            }
        },
        parent: {
            object: '<li />',
            selector: 'li',
            css: {}
        },
        css: {
            display: 'none',
            width: '310px'
        },
        addClass: ''
    };
    $.noty.layouts.inline = {
        name: 'inline',
        options: {},
        container: {
            object: '<ul class="noty_inline_layout_container" />',
            selector: 'ul.noty_inline_layout_container',
            style: function () {
                $(this).css({
                    width: '100%',
                    height: 'auto',
                    margin: 0,
                    padding: 0,
                    listStyleType: 'none',
                    zIndex: 9999999
                });
            }
        },
        parent: {
            object: '<li />',
            selector: 'li',
            css: {}
        },
        css: {
            display: 'none'
        },
        addClass: ''
    };
    $.noty.layouts.top = {
        name: 'top',
        options: {},
        container: {
            object: '<ul id="noty_top_layout_container" />',
            selector: 'ul#noty_top_layout_container',
            style: function () {
                $(this).css({
                    top: 0,
                    left: '5%',
                    position: 'fixed',
                    width: '90%',
                    height: 'auto',
                    margin: 0,
                    padding: 0,
                    listStyleType: 'none',
                    zIndex: 9999999
                });
            }
        },
        parent: {
            object: '<li />',
            selector: 'li',
            css: {}
        },
        css: {
            display: 'none'
        },
        addClass: ''
    };
    $.noty.layouts.topCenter = {
        name: 'topCenter',
        options: { // overrides options

        },
        container: {
            object: '<ul id="noty_topCenter_layout_container" />',
            selector: 'ul#noty_topCenter_layout_container',
            style: function () {
                $(this).css({
                    top: 20,
                    left: 0,
                    position: 'fixed',
                    width: '310px',
                    height: 'auto',
                    margin: 0,
                    padding: 0,
                    listStyleType: 'none',
                    zIndex: 10000000
                });

                $(this).css({
                    left: ($(window).width() - $(this).outerWidth(false)) / 2 + 'px'
                });
            }
        },
        parent: {
            object: '<li />',
            selector: 'li',
            css: {}
        },
        css: {
            display: 'none',
            width: '310px'
        },
        addClass: ''
    };

    $.noty.layouts.topLeft = {
        name: 'topLeft',
        options: { // overrides options

        },
        container: {
            object: '<ul id="noty_topLeft_layout_container" />',
            selector: 'ul#noty_topLeft_layout_container',
            style: function () {
                $(this).css({
                    top: 20,
                    left: 20,
                    position: 'fixed',
                    width: '310px',
                    height: 'auto',
                    margin: 0,
                    padding: 0,
                    listStyleType: 'none',
                    zIndex: 10000000
                });

                if (window.innerWidth < 600) {
                    $(this).css({
                        left: 5
                    });
                }
            }
        },
        parent: {
            object: '<li />',
            selector: 'li',
            css: {}
        },
        css: {
            display: 'none',
            width: '310px'
        },
        addClass: ''
    };
    $.noty.layouts.topRight = {
        name: 'topRight',
        options: { // overrides options

        },
        container: {
            object: '<ul id="noty_topRight_layout_container" />',
            selector: 'ul#noty_topRight_layout_container',
            style: function () {
                $(this).css({
                    top: 20,
                    right: 20,
                    position: 'fixed',
                    width: '310px',
                    height: 'auto',
                    margin: 0,
                    padding: 0,
                    listStyleType: 'none',
                    zIndex: 10000000
                });

                if (window.innerWidth < 600) {
                    $(this).css({
                        right: 5
                    });
                }
            }
        },
        parent: {
            object: '<li />',
            selector: 'li',
            css: {}
        },
        css: {
            display: 'none',
            width: '310px'
        },
        addClass: ''
    };
    $.noty.themes.bootstrapTheme = {
        name: 'bootstrapTheme',
        modal: {
            css: {
                position: 'fixed',
                width: '100%',
                height: '100%',
                backgroundColor: '#000',
                zIndex: 10000,
                opacity: 0.6,
                display: 'none',
                left: 0,
                top: 0
            }
        },
        style: function () {

            var containerSelector = this.options.layout.container.selector;
            $(containerSelector).addClass('list-group');

            this.$closeButton.append('<span aria-hidden="true">&times;</span><span class="sr-only">Close</span>');
            this.$closeButton.addClass('close');

            this.$bar.addClass("list-group-item").css('padding', '0px');

            switch (this.options.type) {
                case 'alert':
                case 'notification':
                    this.$bar.addClass("list-group-item-info");
                    break;
                case 'warning':
                    this.$bar.addClass("list-group-item-warning");
                    break;
                case 'error':
                    this.$bar.addClass("list-group-item-danger");
                    break;
                case 'information':
                    this.$bar.addClass("list-group-item-info");
                    break;
                case 'success':
                    this.$bar.addClass("list-group-item-success");
                    break;
            }

            this.$message.css({
                fontSize: '13px',
                lineHeight: '16px',
                textAlign: 'center',
                padding: '8px 10px 9px',
                width: 'auto',
                position: 'relative'
            });
        },
        callback: {
            onShow: function () {
            },
            onClose: function () {
            }
        }
    };


    $.noty.themes.defaultTheme = {
        name: 'defaultTheme',
        helpers: {
            borderFix: function () {
                if (this.options.dismissQueue) {
                    var selector = this.options.layout.container.selector + ' ' + this.options.layout.parent.selector;
                    switch (this.options.layout.name) {
                        case 'top':
                            $(selector).css({borderRadius: '0px 0px 0px 0px'});
                            $(selector).last().css({borderRadius: '0px 0px 5px 5px'});
                            break;
                        case 'topCenter':
                        case 'topLeft':
                        case 'topRight':
                        case 'bottomCenter':
                        case 'bottomLeft':
                        case 'bottomRight':
                        case 'center':
                        case 'centerLeft':
                        case 'centerRight':
                        case 'inline':
                            $(selector).css({borderRadius: '0px 0px 0px 0px'});
                            $(selector).first().css({
                                'border-top-left-radius': '5px',
                                'border-top-right-radius': '5px'
                            });
                            $(selector).last().css({
                                'border-bottom-left-radius': '5px',
                                'border-bottom-right-radius': '5px'
                            });
                            break;
                        case 'bottom':
                            $(selector).css({borderRadius: '0px 0px 0px 0px'});
                            $(selector).first().css({borderRadius: '5px 5px 0px 0px'});
                            break;
                        default:
                            break;
                    }
                }
            }
        },
        modal: {
            css: {
                position: 'fixed',
                width: '100%',
                height: '100%',
                backgroundColor: '#000',
                zIndex: 10000,
                opacity: 0.6,
                display: 'none',
                left: 0,
                top: 0
            }
        },
        style: function () {

            this.$bar.css({
                overflow: 'hidden',
                background: "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAoCAQAAAClM0ndAAAAhklEQVR4AdXO0QrCMBBE0bttkk38/w8WRERpdyjzVOc+HxhIHqJGMQcFFkpYRQotLLSw0IJ5aBdovruMYDA/kT8plF9ZKLFQcgF18hDj1SbQOMlCA4kao0iiXmah7qBWPdxpohsgVZyj7e5I9KcID+EhiDI5gxBYKLBQYKHAQoGFAoEks/YEGHYKB7hFxf0AAAAASUVORK5CYII=') repeat-x scroll left top #fff"
            });

            this.$message.css({
                fontSize: '13px',
                lineHeight: '16px',
                textAlign: 'center',
                padding: '8px 10px 9px',
                width: 'auto',
                position: 'relative'
            });

            this.$closeButton.css({
                position: 'absolute',
                top: 4, right: 4,
                width: 10, height: 10,
                background: "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAQAAAAnOwc2AAAAxUlEQVR4AR3MPUoDURSA0e++uSkkOxC3IAOWNtaCIDaChfgXBMEZbQRByxCwk+BasgQRZLSYoLgDQbARxry8nyumPcVRKDfd0Aa8AsgDv1zp6pYd5jWOwhvebRTbzNNEw5BSsIpsj/kurQBnmk7sIFcCF5yyZPDRG6trQhujXYosaFoc+2f1MJ89uc76IND6F9BvlXUdpb6xwD2+4q3me3bysiHvtLYrUJto7PD/ve7LNHxSg/woN2kSz4txasBdhyiz3ugPGetTjm3XRokAAAAASUVORK5CYII=)",
                display: 'none',
                cursor: 'pointer'
            });

            this.$buttons.css({
                padding: 5,
                textAlign: 'right',
                borderTop: '1px solid #ccc',
                backgroundColor: '#fff'
            });

            this.$buttons.find('button').css({
                marginLeft: 5
            });

            this.$buttons.find('button:first').css({
                marginLeft: 0
            });

            this.$bar.on({
                mouseenter: function () {
                    $(this).find('.noty_close').stop().fadeTo('normal', 1);
                },
                mouseleave: function () {
                    $(this).find('.noty_close').stop().fadeTo('normal', 0);
                }
            });

            switch (this.options.layout.name) {
                case 'top':
                    this.$bar.css({
                        borderRadius: '0px 0px 5px 5px',
                        borderBottom: '2px solid #eee',
                        borderLeft: '2px solid #eee',
                        borderRight: '2px solid #eee',
                        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
                    });
                    break;
                case 'topCenter':
                case 'center':
                case 'bottomCenter':
                case 'inline':
                    this.$bar.css({
                        borderRadius: '5px',
                        border: '1px solid #eee',
                        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
                    });
                    this.$message.css({fontSize: '13px', textAlign: 'center'});
                    break;
                case 'topLeft':
                case 'topRight':
                case 'bottomLeft':
                case 'bottomRight':
                case 'centerLeft':
                case 'centerRight':
                    this.$bar.css({
                        borderRadius: '5px',
                        border: '1px solid #eee',
                        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
                    });
                    this.$message.css({fontSize: '13px', textAlign: 'left'});
                    break;
                case 'bottom':
                    this.$bar.css({
                        borderRadius: '5px 5px 0px 0px',
                        borderTop: '2px solid #eee',
                        borderLeft: '2px solid #eee',
                        borderRight: '2px solid #eee',
                        boxShadow: "0 -2px 4px rgba(0, 0, 0, 0.1)"
                    });
                    break;
                default:
                    this.$bar.css({
                        border: '2px solid #eee',
                        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
                    });
                    break;
            }

            switch (this.options.type) {
                case 'alert':
                case 'notification':
                    this.$bar.css({backgroundColor: '#FFF', borderColor: '#CCC', color: '#444'});
                    break;
                case 'warning':
                    this.$bar.css({backgroundColor: '#FFEAA8', borderColor: '#FFC237', color: '#826200'});
                    this.$buttons.css({borderTop: '1px solid #FFC237'});
                    break;
                case 'error':
                    this.$bar.css({backgroundColor: 'red', borderColor: 'darkred', color: '#FFF'});
                    this.$message.css({fontWeight: 'bold'});
                    this.$buttons.css({borderTop: '1px solid darkred'});
                    break;
                case 'information':
                    this.$bar.css({backgroundColor: '#57B7E2', borderColor: '#0B90C4', color: '#FFF'});
                    this.$buttons.css({borderTop: '1px solid #0B90C4'});
                    break;
                case 'success':
                    this.$bar.css({backgroundColor: 'lightgreen', borderColor: '#50C24E', color: 'darkgreen'});
                    this.$buttons.css({borderTop: '1px solid #50C24E'});
                    break;
                default:
                    this.$bar.css({backgroundColor: '#FFF', borderColor: '#CCC', color: '#444'});
                    break;
            }
        },
        callback: {
            onShow: function () {
                $.noty.themes.defaultTheme.helpers.borderFix.apply(this);
            },
            onClose: function () {
                $.noty.themes.defaultTheme.helpers.borderFix.apply(this);
            }
        }
    };

    $.noty.themes.relax = {
        name: 'relax',
        helpers: {},
        modal: {
            css: {
                position: 'fixed',
                width: '100%',
                height: '100%',
                backgroundColor: '#000',
                zIndex: 10000,
                opacity: 0.6,
                display: 'none',
                left: 0,
                top: 0
            }
        },
        style: function () {

            this.$bar.css({
                overflow: 'hidden',
                margin: '4px 0',
                borderRadius: '2px'
            });

            this.$message.css({
                fontSize: '14px',
                lineHeight: '16px',
                textAlign: 'center',
                padding: '10px',
                width: 'auto',
                position: 'relative'
            });

            this.$closeButton.css({
                position: 'absolute',
                top: 4, right: 4,
                width: 10, height: 10,
                background: "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAQAAAAnOwc2AAAAxUlEQVR4AR3MPUoDURSA0e++uSkkOxC3IAOWNtaCIDaChfgXBMEZbQRByxCwk+BasgQRZLSYoLgDQbARxry8nyumPcVRKDfd0Aa8AsgDv1zp6pYd5jWOwhvebRTbzNNEw5BSsIpsj/kurQBnmk7sIFcCF5yyZPDRG6trQhujXYosaFoc+2f1MJ89uc76IND6F9BvlXUdpb6xwD2+4q3me3bysiHvtLYrUJto7PD/ve7LNHxSg/woN2kSz4txasBdhyiz3ugPGetTjm3XRokAAAAASUVORK5CYII=)",
                display: 'none',
                cursor: 'pointer'
            });

            this.$buttons.css({
                padding: 5,
                textAlign: 'right',
                borderTop: '1px solid #ccc',
                backgroundColor: '#fff'
            });

            this.$buttons.find('button').css({
                marginLeft: 5
            });

            this.$buttons.find('button:first').css({
                marginLeft: 0
            });

            this.$bar.on({
                mouseenter: function () {
                    $(this).find('.noty_close').stop().fadeTo('normal', 1);
                },
                mouseleave: function () {
                    $(this).find('.noty_close').stop().fadeTo('normal', 0);
                }
            });

            switch (this.options.layout.name) {
                case 'top':
                    this.$bar.css({
                        borderBottom: '2px solid #eee',
                        borderLeft: '2px solid #eee',
                        borderRight: '2px solid #eee',
                        borderTop: '2px solid #eee',
                        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
                    });
                    break;
                case 'topCenter':
                case 'center':
                case 'bottomCenter':
                case 'inline':
                    this.$bar.css({
                        border: '1px solid #eee',
                        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
                    });
                    this.$message.css({fontSize: '13px', textAlign: 'center'});
                    break;
                case 'topLeft':
                case 'topRight':
                case 'bottomLeft':
                case 'bottomRight':
                case 'centerLeft':
                case 'centerRight':
                    this.$bar.css({
                        border: '1px solid #eee',
                        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
                    });
                    this.$message.css({fontSize: '13px', textAlign: 'left'});
                    break;
                case 'bottom':
                    this.$bar.css({
                        borderTop: '2px solid #eee',
                        borderLeft: '2px solid #eee',
                        borderRight: '2px solid #eee',
                        borderBottom: '2px solid #eee',
                        boxShadow: "0 -2px 4px rgba(0, 0, 0, 0.1)"
                    });
                    break;
                default:
                    this.$bar.css({
                        border: '2px solid #eee',
                        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
                    });
                    break;
            }

            switch (this.options.type) {
                case 'alert':
                case 'notification':
                    this.$bar.css({backgroundColor: '#FFF', borderColor: '#dedede', color: '#444'});
                    break;
                case 'warning':
                    this.$bar.css({backgroundColor: '#FFEAA8', borderColor: '#FFC237', color: '#826200'});
                    this.$buttons.css({borderTop: '1px solid #FFC237'});
                    break;
                case 'error':
                    this.$bar.css({backgroundColor: '#FF8181', borderColor: '#e25353', color: '#FFF'});
                    this.$message.css({fontWeight: 'bold'});
                    this.$buttons.css({borderTop: '1px solid darkred'});
                    break;
                case 'information':
                    this.$bar.css({backgroundColor: '#78C5E7', borderColor: '#3badd6', color: '#FFF'});
                    this.$buttons.css({borderTop: '1px solid #0B90C4'});
                    break;
                case 'success':
                    this.$bar.css({backgroundColor: '#BCF5BC', borderColor: '#7cdd77', color: 'darkgreen'});
                    this.$buttons.css({borderTop: '1px solid #50C24E'});
                    break;
                default:
                    this.$bar.css({backgroundColor: '#FFF', borderColor: '#CCC', color: '#444'});
                    break;
            }
        },
        callback: {
            onShow: function () {

            },
            onClose: function () {

            }
        }
    };


    return window.noty;

});
omerta = {
    config: {},
    GUI: {},
    model: {},
    loaded: {
        settings: ko.observableArray(),
        deadAccounts: ko.observableArray(),
        character: ko.observable(),
        preview: ko.observableArray(),
    },
    footerOpen: ko.observable(false),
    tab: ko.observable('settings')
}

ko.components.register('character-wrapper', {
    viewModel: {instance: omerta.loaded.character},
    template: {element: 'my-character'}
});

/**
 * Hall of fame widget
 */
ko.components.register('widget-server', {
    viewModel: function (params) {

        this.title = ko.observable('Loading');
        this.subTitle = ko.observable('');
        this.hof = ko.observableArray([]);
        this.releaseDate = ko.observable('');
        this.onlineGangsters = ko.observable(0);
        this.aliveGangsters = ko.observable(0);
        this.totalGangsters = ko.observable(0);

        var self = this;

        var $jqxhr = $.ajax('/?module=Homepage.Reset&action=hof');
        $jqxhr.done(function (data) {
            self.title(data.title);
            self.subTitle(data.subtitle);
            self.hof(data.hof);
            self.releaseDate(data.release_date);
            self.onlineGangsters(data.stats.online);
            self.aliveGangsters(data.stats.alive);
            self.totalGangsters(data.stats.total);
        });
    },
    template: {element: 'widget-server'}
});
omerta.config = {
    tabs: {SETTINGS: 'settings', DEAD_ACCOUNTS: 'dead_accounts', HELP: 'help'}
};
omerta.GUI = {
    toggleFooter: function (object, event) {
        var $element = $(event.target),
            openClass = 'closed';

        var bOpen = $element.hasClass(openClass);

        if (bOpen) {
            omerta.footerOpen(true);
        } else {
            omerta.footerOpen(false);
        }
    },

    showOmertician: function () {
        $('#wrapper').addClass('blur');
        $("#dead-container").fadeTo(1000, 1);
        $("#dead-container .dead-skull img").fadeTo(3000, 1);
    }
};
omerta.model.Character = function (oData) {

    var self = this;

    var bNewUser = oData.bNewUser;
    this.bNewUser = bNewUser;

    this.bLoading = ko.observable((typeof (oData.bLoading) == 'boolean') ? oData.bLoading : true);

    this.name = ko.observable(oData.name || '').extend({
        maxLength: 12,
        minLength: 2,
        required: {message: 'You must choose an ingame before start'}
    });
    this.sex = ko.observable(oData.sex || 1);

    this.sexKeyName = ko.computed(function () {
        return self.sex() == 2 ? 'female' : 'male'
    })

    this.rankName = oData.rankName || 'Empty-suit';
    this.lastrank = oData.lastrank || 0;

    this.milestones = [
        new omerta.model.Milestone({type: 100}),
        new omerta.model.Milestone({type: 200}),
        new omerta.model.Milestone({type: 300}),
        //new omerta.model.Milestone({type: 400}),
        new omerta.model.Milestone({type: 500, value: 100, changeable: false}),
        new omerta.model.Milestone({type: 700}),
    ];

    this.getPreview = function (key, milestoneType) {
        // Get milestone type and value
        var value = -1;
        for (var m in this.milestones) {
            if (this.milestones[m].type == milestoneType) {
                value = this.milestones[m].value() / 10;
            }
        }

        if (omerta.loaded.preview() && omerta.loaded.preview()[value] && omerta.loaded.preview()[value][key]) {
            return omerta.loaded.preview()[value][key];
        }

        return 0;
    };


    /**
     * Forward to profile page
     */
    this.goToProfile = function () {
        window.location.href = '/';
    };

    /**
     * Trigger next step process, to go on user account page or save the user
     * @returns {*}
     */
    this.open = function () {

        var bPrompt = confirm("Are you sure that you want to continue ?");
        if (!bPrompt) {
            return false;
        }

        // If user is not new, then go to profile
        if (!bNewUser) {
            this.goToProfile();
            return true;
        }

        // If our model has errors, then display it
        var aErrors = this.errors();
        if (aErrors.length > 0) {
            for (var i = 0 in aErrors) {
                omerta.showMessages([{type: 'error', text: aErrors[i]}]);
            }
            return false;
        }

        // Get model data and send to our controller
        var sData = ko.toJSON(self);
        // Milestones selected?
        var iMilestones = 0;
        for (var i in self.milestones) {
            iMilestones += self.milestones[i].value();
        }

        if (iMilestones < 100 && $(".milestones-used").length > 0) {
            bPrompt = confirm("You did not select all milestones, ARE YOU SURE you want to proceed? (This action is non-reversible)");
            if (!bPrompt) {
                return false;
            }
        }

        self.bLoading(true);

        var $jqxhr = $.ajax({
            type: 'POST',
            dataType: "json",
            url: "/?module=Account&action=create",
            data: {character: sData}
        });

        $jqxhr.done(function (data) {

            var oData = $.parseJSON(sData);
            omerta.showMessages(data.messages);

            // Reload character
            if (data.aliveUser instanceof Object) {

                // Load user with filled data, when the user fail form, it saves input
                data.aliveUser.name = oData.name;
                data.aliveUser.sex = oData.sex;

                // Set loading status for new user creation, it gives some seconds to go to user profile
                if (data.aliveUser.bNewUser === false) {
                    data.aliveUser.bLoading = true;
                    setTimeout(self.goToProfile, 3000);
                } else {
                    //omerta.loaded.character(new omerta.model.Character(data.aliveUser));
                    omerta.loaded.character().bLoading(false);
                }
            }
        });


        return $jqxhr;
    };

    /**
     * Get image src for our character
     * @returns {string}
     */
    this.getImage = function () {
        var iRank = self.lastrank;
        if (iRank <= 0) {
            iRank = 1;
        }
        return 'assets/omerta/modules/UserInformation/assets/img/ranks/' + self.sexKeyName() + '/' + iRank + '.png';
    };

    /**
     * Select male option
     * @type {*|function(this:omerta.model.Character)}
     */
    this.selectMale = function () {
        if (bNewUser) {
            this.sex(1);
        }
    }.bind(this);

    /**
     * Select female option
     * @type {*|function(this:omerta.model.Character)}
     */
    this.selectFemale = function () {
        if (bNewUser) {
            this.sex(2);
        }
    }.bind(this);

    /**
     * Check if user is male
     * @returns {boolean}
     */
    this.isMale = function () {
        return this.sex() == 1;
    };

    /**
     * Check if user is female
     * @returns {boolean}
     */
    this.isFemale = function () {
        return this.sex() == 2;
    };

    /**
     * Force sex to be a value between 1 or 2
     */
    this.sex.subscribe(function (val) {
        if (val < 1 || val > 2) {
            self.sex(1);
        }
    });


    // Validation messages
    this.errors = ko.validation.group(self);
};

/**
 * Field factory, used to render input fields.
 *
 * @param oItem
 * @returns {{attr: {type: *, value: *, name: *, disabled: boolean}, name: *, value: *, showValue: *, label: *, skipField: boolean, editable: boolean, toggleForm: *}}
 * @constructor
 */
omerta.model.Field = function (oItem, bMultiple) {

    var readValue = oItem.value,
        disabled = false;

    bMultiple = bMultiple || false;

    oItem.editable = true;

    oItem.description = oItem.description || '';
    oItem.options = oItem.options || [];
    oItem.readValue = oItem.readValue || false;

    switch (oItem.type) {
        case 'multiple':
            // Multiple fields
            oItem.fields = oItem.fields || [];

            var aFields = [];
            for (var idx in oItem.fields) {
                aFields.push(new omerta.model.Field(oItem.fields[idx], true));
            }

            var aReturn = {
                'label': oItem.label,
                'showValue': ko.observable(false),
                'toggleForm': omerta.fieldToggleForm,
                'description': oItem.description,
                'style': oItem.style || 'inline',
                'editable': oItem.editable || true,
                'value': readValue,
                'fields': aFields
            };

            return aReturn;
            break;
        case 'password':
            readValue = '';
            break;
        case 'mail':
            disabled = true;
            oItem.editable = false;
            break;
        case 'select':
            var aSelectValue = ko.utils.arrayFilter(oItem.options, function (opt) {
                if (opt.key == oItem.value) {
                    return true;
                }
            });

            if (aSelectValue.length > 0) {
                readValue = aSelectValue[0].text;
            }
            break;
    }

    if (oItem.readValue) {
        readValue = oItem.readValue;
    }

    oItem.skipField = false;
    if (oItem.value === false && oItem.name === 'halloffame') {
        oItem.skipField = true;
    }


    return {
        'attr': {type: oItem.type, value: oItem.value, 'name': oItem.name, 'disabled': disabled},
        'name': oItem.name,
        'value': readValue,
        'label': oItem.label,
        'description': oItem.description,
        'skipField': oItem.skipField,
        'editable': oItem.editable,
        'options': oItem.options,
        'showValue': ko.observable(bMultiple),
        'toggleForm': omerta.fieldToggleForm,
        'fields': [],
        'optionsValue': function (item) {
            return item.key
        },
        'optionsText': function (item) {
            return item.text
        }
    };
};
/**
 * This model is used for milestone creation
 * @param oData
 * @constructor
 */
omerta.model.Milestone = function (oData, previews) {

    /**
     * @TODO: Give translation support
     * @type {{100: string, 200: string, 300: string, 400: string, 500: string, 600: string, 700: string}}
     */
    var oLabels = {
        100: 'Rank Progress',
        200: 'Bullets',
        300: 'Bustouts',
        400: 'Kills',
        500: 'Work Experience',
        600: 'Possessions',
        700: 'Money'
    };

    if (typeof (oData.type) === 'undefined') {
        throw "Type is required to build a milestone";
    }

    if (typeof (oLabels[oData.type]) == 'undefined') {
        throw "The type of milestone is not valid";
    }

    // set?
    this.value = ko.observable(oData.hasOwnProperty('value') ? oData.value : 0);
    this.label = oLabels[oData.type];
    this.type = oData.type;
    this.changeable = oData.hasOwnProperty('changeable') ? oData.changeable : true;

    /**
     * Get width percentage
     * @returns {string}
     */
    this.getWidth = function () {
        var width = parseInt(this.value() * 100 / parseInt(this.getMaxTextValue())) / 10;
        return width + '%';
    }

    /**
     * Validate if it is possible to increase the value
     * @returns {boolean}
     */
    this.isIncreaseDisabled = function () {


        if (this.type == 100 && this.value() >= 30) {
            return true;
        }

        if (this.type == 300 && this.value() >= 40) {
            return true;
        }

        var sumvalue = omerta.sumMilestones();
        if (sumvalue >= 10) {
            return true;
        }

        if (!this.changeable) {
            return true;
        }

        return false;
    }

    /**
     * Validate if it is possible to decrease the value
     * @returns {boolean}
     */
    this.isDecreaseDisabled = function () {

        if (this.value() === 0) {
            return true;
        }

        if (!this.changeable) {
            return true;
        }


        return false;
    }

    /**
     * Increase value of milestone
     * @type {*|function(this:omerta.model.Milestone)}
     */
    this.increase = function () {

        if (this.isIncreaseDisabled()) {
            return false;
        }

        var value = this.value();
        if (value >= 100) {
            return false;
        }

        this.value(value + 10);

    }.bind(this);

    /**
     * Decrease value of milestone
     * @type {*|function(this:omerta.model.Milestone)}
     */
    this.decrease = function () {
        if (!this.changeable) {
            return false;
        }

        var value = this.value();
        if (value <= 0) {
            return false;
        }

        this.value(value - 10);
    }.bind(this);

    /**
     * Get friendly label
     * @returns {*}
     */
    this.getTextValue = function () {
        var value = this.value();

        if (value <= 0) {
            return "0";
        }

        value = value / 10;

        return value;
    };
    this.getMaxTextValue = function () {
        if (this.type == 100) {
            return 3;
        }
        if (this.type == 300) {
            return 4;
        }

        return 10;
    };

    /**
     * Calculate the progress bar background color
     * @returns {string}
     */
    this.getClassName = function () {
        var aClasses = [
            'progressbar',
        ];
        var value = this.value();

        if (value <= 20) {
            aClasses.push('red-bg');
        }

        if (value > 20 && value <= 50) {
            aClasses.push('orange-bg');
        }

        if (value > 50 && value <= 80) {
            aClasses.push('yellow-bg');
        }

        if (value > 80) {
            aClasses.push('green-bg');
        }

        return aClasses.join(' ');
    }


    this.hasMilestone = ko.computed(function () {

        if (this.type === 100) {
            return !(omerta.loaded.preview() && omerta.loaded.preview()[10] && (omerta.loaded.preview()[10]['rank'] == 'Empty-Suit' && omerta.loaded.preview()[10]['rankp'] == '0'));
        }

        if (this.type === 200) {
            return !(omerta.loaded.preview() && omerta.loaded.preview()[10] && (omerta.loaded.preview()[10]['bullets'] == 0));
        }

        if (this.type === 300) {
            return !(omerta.loaded.preview() && omerta.loaded.preview()[10] && (omerta.loaded.preview()[10]['bustouts'] == 0));
        }

        if (this.type === 500) {
            return !(
                omerta.loaded.preview() && omerta.loaded.preview()[10] && (omerta.loaded.preview()[10]['crimeattempts'] == 0) &&
                omerta.loaded.preview() && omerta.loaded.preview()[10] && (omerta.loaded.preview()[10]['carattempts'] == 0) &&
                omerta.loaded.preview() && omerta.loaded.preview()[10] && (omerta.loaded.preview()[10]['boozeattempts'] == 0) &&
                omerta.loaded.preview() && omerta.loaded.preview()[10] && (omerta.loaded.preview()[10]['narcattempts'] == 0)
            );
        }

        if (this.type === 700) {
            return !(omerta.loaded.preview() && omerta.loaded.preview()[10] && (omerta.loaded.preview()[10]['money'] == 0));
        }

        return true;

    }, this);
};

omerta.model.Setting = function (data) {
    /**
     * Object of fields
     */
    var fields = data.fields;

    /**
     * Map all fields and return a valid object used to render knockout view
     * @returns {Array}
     */
    this.getFields = function () {
        var aReturn = [];

        for (var i = 0 in fields) {
            var oField = new omerta.model.Field(fields[i]);

            if (oField.skipField) {
                continue;
            }

            aReturn.push(oField);
        }

        return aReturn;
    };


};
omerta.GUI = {
    toggleFooter: function (object, event) {
        var $element = $(event.target),
            openClass = 'closed';

        var bOpen = $element.hasClass(openClass);

        if (bOpen) {
            omerta.footerOpen(true);
        } else {
            omerta.footerOpen(false);
        }
    },

    showOmertician: function () {
        $('#wrapper').addClass('blur');
        $("#dead-container").fadeTo(1000, 1);
        $("#dead-container .dead-skull img").fadeTo(3000, 1);
    }
};
/**
 * Knockout extender
 */
omerta.tab.extend({notify: 'always'});


omerta.loadEndpoint = function (sName) {

    var sUrl = '/?module=Account&action=' + sName + 'Endpoint';
    var $jQxhr = $.ajax(sUrl, {
        dataType: 'json'
    });

    return $jQxhr;
};

/**
 * Tab logic
 */
omerta.setTabSettings = function () {
    omerta.tab(omerta.config.tabs.SETTINGS);
};

omerta.setTabDead = function () {
    omerta.tab(omerta.config.tabs.DEAD_ACCOUNTS);
};

omerta.setTabHelp = function () {
    omerta.tab(omerta.config.tabs.HELP);
};

omerta.isEnabledTabSetting = function () {
    return omerta.tab() === omerta.config.tabs.SETTINGS;
};

omerta.isEnabledTabHelp = function () {
    return omerta.tab() === omerta.config.tabs.HELP;
};

omerta.isEnabledTabDead = function () {
    return omerta.tab() === omerta.config.tabs.DEAD_ACCOUNTS;
};


/**
 * Open footer content
 */
omerta.footerOpen.subscribe(function (bOpen) {

    if (bOpen) {
        $('#tabs').stop().slideDown();
    } else {
        $('#tabs').stop().slideUp();
    }

});

/**
 * Open footer on tab selection
 */

omerta.tab.subscribe(function (sTabName) {

    if (typeof (sTabName) === 'string') {
        setTimeout(function () {
            omerta.footerOpen(true);
        }, 100);
    }

});


omerta.loadDeadContainer = function () {
    var $deadContainer = $("#dead-container");

    if (typeof ($deadContainer) !== 'undefined' && $deadContainer.length > 0) {
        omerta.GUI.showOmertician();
    }

    $(document).on('click touchend', '#revenge-button', function (event) {
        event.preventDefault();
        $deadContainer.fadeTo(500, 0, function () {
            $('#wrapper').removeClass('blur');
            $deadContainer.hide();
        });
    });
};


/**
 * Toggle inline elements for single input fields
 * @param oData
 */
omerta.fieldToggleForm = function (oData, oEvent) {
    if (oData.showValue()) {
        var jqhr = omerta.saveForm(oData, oEvent);

        if (!(jqhr instanceof Object)) {
            oData.showValue(false);
        }

    } else {
        oData.showValue(true);
    }
};

/**
 *
 */
omerta.saveForm = function (oData, oEvent) {

    var $element = $(oEvent.target),
        $fieldset = $element.parents('fieldset'),
        $inputs = $fieldset.find('input, select, textarea');

    var sData = $inputs.serialize();

    if (!typeof (oData.editable) !== 'undefined' && !oData.editable) {
        return false;
    }

    var $footerJql = $.ajax({
        type: "POST",
        url: "/?module=Account&action=saveSetting",
        data: sData,
        dataType: "json"
    });

    // When success reload settings
    $footerJql.done(function (da) {
        if (da.messages.length == 0) {
            var oSettings = new omerta.model.Setting(da.settings);
            // Clean all events and set new one
            omerta.loaded.settings(oSettings.getFields());
        } else {
            omerta.showMessages(da.messages);
        }
    });

    return $footerJql;

};

/**
 * Display messages
 * @param aMsg
 */
omerta.showMessages = function (aMsg) {

    if (!(aMsg instanceof Array)) {
        return false;
    }

    for (var i = 0 in aMsg) {
        var a = noty(aMsg[i]);
    }
};

omerta.open = function () {
    return omerta.loaded.character().open();
};

omerta.loadUser = function () {
    omerta.loaded.character(new omerta.model.Character({}));
    var jqhxr = omerta.loadEndpoint('AliveUser');
    jqhxr.done(function (data) {
        if (data.length != 0 && data instanceof Object) {
            omerta.loaded.character(new omerta.model.Character(data));
        }
        if (data.aPreviews) {
            omerta.loaded.preview(data.aPreviews);
        }
    });

    return jqhxr;
};

omerta.sumMilestones = function () {
    var value = 0;
    for (var i = 0 in omerta.loaded.character().milestones) {
        // Ignore milestones
        if (omerta.loaded.character().milestones[i].type == 500) {
            continue;
        }
        value += omerta.loaded.character().milestones[i].value();
    }

    if (value <= 0) {
        return 0;
    }

    return value / 10;
};

$(document).ready(function () {

    ko.applyBindings(omerta);

    var $footerJql = omerta.loadEndpoint('Footer');

    $footerJql.done(function (da) {
        var oSettings = new omerta.model.Setting(da.settings);
        omerta.loaded.settings(oSettings.getFields());
        omerta.loaded.deadAccounts(da.dead);
    });


    omerta.loadUser();





    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });

});

