!function(a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
            if (!a.document)
                throw new Error("jQuery requires a window with a document");
            return b(a)
        }
        : b(a)
}("undefined" != typeof window ? window : this, function(a, b) {
    function c(a) {
        var b = "length"in a && a.length
            , c = ea.type(a);
        return "function" !== c && !ea.isWindow(a) && (!(1 !== a.nodeType || !b) || ("array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a))
    }
    function d(a, b, c) {
        if (ea.isFunction(b))
            return ea.grep(a, function(a, d) {
                return !!b.call(a, d, a) !== c
            });
        if (b.nodeType)
            return ea.grep(a, function(a) {
                return a === b !== c
            });
        if ("string" == typeof b) {
            if (ma.test(b))
                return ea.filter(b, a, c);
            b = ea.filter(b, a)
        }
        return ea.grep(a, function(a) {
            return ea.inArray(a, b) >= 0 !== c
        })
    }
    function e(a, b) {
        do
            a = a[b];
        while (a && 1 !== a.nodeType);return a
    }
    function f(a) {
        var b = ua[a] = {};
        return ea.each(a.match(ta) || [], function(a, c) {
            b[c] = !0
        }),
            b
    }
    function g() {
        oa.addEventListener ? (oa.removeEventListener("DOMContentLoaded", h, !1),
            a.removeEventListener("load", h, !1)) : (oa.detachEvent("onreadystatechange", h),
            a.detachEvent("onload", h))
    }
    function h() {
        (oa.addEventListener || "load" === event.type || "complete" === oa.readyState) && (g(),
            ea.ready())
    }
    function i(a, b, c) {
        if (void 0 === c && 1 === a.nodeType) {
            var d = "data-" + b.replace(za, "-$1").toLowerCase();
            if (c = a.getAttribute(d),
                "string" == typeof c) {
                try {
                    c = "true" === c || "false" !== c && ("null" === c ? null : +c + "" === c ? +c : ya.test(c) ? ea.parseJSON(c) : c)
                } catch (e) {}
                ea.data(a, b, c)
            } else
                c = void 0
        }
        return c
    }
    function j(a) {
        var b;
        for (b in a)
            if (("data" !== b || !ea.isEmptyObject(a[b])) && "toJSON" !== b)
                return !1;
        return !0
    }
    function k(a, b, c, d) {
        if (ea.acceptData(a)) {
            var e, f, g = ea.expando, h = a.nodeType, i = h ? ea.cache : a, j = h ? a[g] : a[g] && g;
            if (j && i[j] && (d || i[j].data) || void 0 !== c || "string" != typeof b)
                return j || (j = h ? a[g] = W.pop() || ea.guid++ : g),
                i[j] || (i[j] = h ? {} : {
                    toJSON: ea.noop
                }),
                "object" != typeof b && "function" != typeof b || (d ? i[j] = ea.extend(i[j], b) : i[j].data = ea.extend(i[j].data, b)),
                    f = i[j],
                d || (f.data || (f.data = {}),
                    f = f.data),
                void 0 !== c && (f[ea.camelCase(b)] = c),
                    "string" == typeof b ? (e = f[b],
                    null == e && (e = f[ea.camelCase(b)])) : e = f,
                    e
        }
    }
    function l(a, b, c) {
        if (ea.acceptData(a)) {
            var d, e, f = a.nodeType, g = f ? ea.cache : a, h = f ? a[ea.expando] : ea.expando;
            if (g[h]) {
                if (b && (d = c ? g[h] : g[h].data)) {
                    ea.isArray(b) ? b = b.concat(ea.map(b, ea.camelCase)) : b in d ? b = [b] : (b = ea.camelCase(b),
                        b = b in d ? [b] : b.split(" ")),
                        e = b.length;
                    for (; e--; )
                        delete d[b[e]];
                    if (c ? !j(d) : !ea.isEmptyObject(d))
                        return
                }
                (c || (delete g[h].data,
                    j(g[h]))) && (f ? ea.cleanData([a], !0) : ca.deleteExpando || g != g.window ? delete g[h] : g[h] = null)
            }
        }
    }
    function m() {
        return !0
    }
    function n() {
        return !1
    }
    function o() {
        try {
            return oa.activeElement
        } catch (a) {}
    }
    function p(a) {
        var b = Ka.split("|")
            , c = a.createDocumentFragment();
        if (c.createElement)
            for (; b.length; )
                c.createElement(b.pop());
        return c
    }
    function q(a, b) {
        var c, d, e = 0, f = typeof a.getElementsByTagName !== xa ? a.getElementsByTagName(b || "*") : typeof a.querySelectorAll !== xa ? a.querySelectorAll(b || "*") : void 0;
        if (!f)
            for (f = [],
                     c = a.childNodes || a; null != (d = c[e]); e++)
                !b || ea.nodeName(d, b) ? f.push(d) : ea.merge(f, q(d, b));
        return void 0 === b || b && ea.nodeName(a, b) ? ea.merge([a], f) : f
    }
    function r(a) {
        Ea.test(a.type) && (a.defaultChecked = a.checked)
    }
    function s(a, b) {
        return ea.nodeName(a, "table") && ea.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }
    function t(a) {
        return a.type = (null !== ea.find.attr(a, "type")) + "/" + a.type,
            a
    }
    function u(a) {
        var b = Va.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"),
            a
    }
    function v(a, b) {
        for (var c, d = 0; null != (c = a[d]); d++)
            ea._data(c, "globalEval", !b || ea._data(b[d], "globalEval"))
    }
    function w(a, b) {
        if (1 === b.nodeType && ea.hasData(a)) {
            var c, d, e, f = ea._data(a), g = ea._data(b, f), h = f.events;
            if (h) {
                delete g.handle,
                    g.events = {};
                for (c in h)
                    for (d = 0,
                             e = h[c].length; d < e; d++)
                        ea.event.add(b, c, h[c][d])
            }
            g.data && (g.data = ea.extend({}, g.data))
        }
    }
    function x(a, b) {
        var c, d, e;
        if (1 === b.nodeType) {
            if (c = b.nodeName.toLowerCase(),
                !ca.noCloneEvent && b[ea.expando]) {
                e = ea._data(b);
                for (d in e.events)
                    ea.removeEvent(b, d, e.handle);
                b.removeAttribute(ea.expando)
            }
            "script" === c && b.text !== a.text ? (t(b).text = a.text,
                u(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML),
            ca.html5Clone && a.innerHTML && !ea.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && Ea.test(a.type) ? (b.defaultChecked = b.checked = a.checked,
            b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue)
        }
    }
    function y(b, c) {
        var d, e = ea(c.createElement(b)).appendTo(c.body), f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : ea.css(e[0], "display");
        return e.detach(),
            f
    }
    function z(a) {
        var b = oa
            , c = _a[a];
        return c || (c = y(a, b),
        "none" !== c && c || ($a = ($a || ea("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),
            b = ($a[0].contentWindow || $a[0].contentDocument).document,
            b.write(),
            b.close(),
            c = y(a, b),
            $a.detach()),
            _a[a] = c),
            c
    }
    function A(a, b) {
        return {
            get: function() {
                var c = a();
                if (null != c)
                    return c ? void delete this.get : (this.get = b).apply(this, arguments)
            }
        }
    }
    function B(a, b) {
        if (b in a)
            return b;
        for (var c = b.charAt(0).toUpperCase() + b.slice(1), d = b, e = mb.length; e--; )
            if (b = mb[e] + c,
                b in a)
                return b;
        return d
    }
    function C(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; g < h; g++)
            d = a[g],
            d.style && (f[g] = ea._data(d, "olddisplay"),
                c = d.style.display,
                b ? (f[g] || "none" !== c || (d.style.display = ""),
                "" === d.style.display && Ca(d) && (f[g] = ea._data(d, "olddisplay", z(d.nodeName)))) : (e = Ca(d),
                (c && "none" !== c || !e) && ea._data(d, "olddisplay", e ? c : ea.css(d, "display"))));
        for (g = 0; g < h; g++)
            d = a[g],
            d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a
    }
    function D(a, b, c) {
        var d = ib.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
    }
    function E(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; f < 4; f += 2)
            "margin" === c && (g += ea.css(a, c + Ba[f], !0, e)),
                d ? ("content" === c && (g -= ea.css(a, "padding" + Ba[f], !0, e)),
                "margin" !== c && (g -= ea.css(a, "border" + Ba[f] + "Width", !0, e))) : (g += ea.css(a, "padding" + Ba[f], !0, e),
                "padding" !== c && (g += ea.css(a, "border" + Ba[f] + "Width", !0, e)));
        return g
    }
    function F(a, b, c) {
        var d = !0
            , e = "width" === b ? a.offsetWidth : a.offsetHeight
            , f = ab(a)
            , g = ca.boxSizing && "border-box" === ea.css(a, "boxSizing", !1, f);
        if (e <= 0 || null == e) {
            if (e = bb(a, b, f),
                (e < 0 || null == e) && (e = a.style[b]),
                    db.test(e))
                return e;
            d = g && (ca.boxSizingReliable() || e === a.style[b]),
                e = parseFloat(e) || 0
        }
        return e + E(a, b, c || (g ? "border" : "content"), d, f) + "px"
    }
    function G(a, b, c, d, e) {
        return new G.prototype.init(a,b,c,d,e)
    }
    function H() {
        return setTimeout(function() {
            nb = void 0
        }),
            nb = ea.now()
    }
    function I(a, b) {
        var c, d = {
            height: a
        }, e = 0;
        for (b = b ? 1 : 0; e < 4; e += 2 - b)
            c = Ba[e],
                d["margin" + c] = d["padding" + c] = a;
        return b && (d.opacity = d.width = a),
            d
    }
    function J(a, b, c) {
        for (var d, e = (tb[b] || []).concat(tb["*"]), f = 0, g = e.length; f < g; f++)
            if (d = e[f].call(c, b, a))
                return d
    }
    function K(a, b, c) {
        var d, e, f, g, h, i, j, k, l = this, m = {}, n = a.style, o = a.nodeType && Ca(a), p = ea._data(a, "fxshow");
        c.queue || (h = ea._queueHooks(a, "fx"),
        null == h.unqueued && (h.unqueued = 0,
                i = h.empty.fire,
                h.empty.fire = function() {
                    h.unqueued || i()
                }
        ),
            h.unqueued++,
            l.always(function() {
                l.always(function() {
                    h.unqueued--,
                    ea.queue(a, "fx").length || h.empty.fire()
                })
            })),
        1 === a.nodeType && ("height"in b || "width"in b) && (c.overflow = [n.overflow, n.overflowX, n.overflowY],
            j = ea.css(a, "display"),
            k = "none" === j ? ea._data(a, "olddisplay") || z(a.nodeName) : j,
        "inline" === k && "none" === ea.css(a, "float") && (ca.inlineBlockNeedsLayout && "inline" !== z(a.nodeName) ? n.zoom = 1 : n.display = "inline-block")),
        c.overflow && (n.overflow = "hidden",
        ca.shrinkWrapBlocks() || l.always(function() {
            n.overflow = c.overflow[0],
                n.overflowX = c.overflow[1],
                n.overflowY = c.overflow[2]
        }));
        for (d in b)
            if (e = b[d],
                    pb.exec(e)) {
                if (delete b[d],
                        f = f || "toggle" === e,
                    e === (o ? "hide" : "show")) {
                    if ("show" !== e || !p || void 0 === p[d])
                        continue;
                    o = !0
                }
                m[d] = p && p[d] || ea.style(a, d)
            } else
                j = void 0;
        if (ea.isEmptyObject(m))
            "inline" === ("none" === j ? z(a.nodeName) : j) && (n.display = j);
        else {
            p ? "hidden"in p && (o = p.hidden) : p = ea._data(a, "fxshow", {}),
            f && (p.hidden = !o),
                o ? ea(a).show() : l.done(function() {
                    ea(a).hide()
                }),
                l.done(function() {
                    var b;
                    ea._removeData(a, "fxshow");
                    for (b in m)
                        ea.style(a, b, m[b])
                });
            for (d in m)
                g = J(o ? p[d] : 0, d, l),
                d in p || (p[d] = g.start,
                o && (g.end = g.start,
                    g.start = "width" === d || "height" === d ? 1 : 0))
        }
    }
    function L(a, b) {
        var c, d, e, f, g;
        for (c in a)
            if (d = ea.camelCase(c),
                    e = b[d],
                    f = a[c],
                ea.isArray(f) && (e = f[1],
                    f = a[c] = f[0]),
                c !== d && (a[d] = f,
                    delete a[c]),
                    g = ea.cssHooks[d],
                g && "expand"in g) {
                f = g.expand(f),
                    delete a[d];
                for (c in f)
                    c in a || (a[c] = f[c],
                        b[c] = e)
            } else
                b[d] = e
    }
    function M(a, b, c) {
        var d, e, f = 0, g = sb.length, h = ea.Deferred().always(function() {
            delete i.elem
        }), i = function() {
            if (e)
                return !1;
            for (var b = nb || H(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; g < i; g++)
                j.tweens[g].run(f);
            return h.notifyWith(a, [j, f, c]),
                f < 1 && i ? c : (h.resolveWith(a, [j]),
                    !1)
        }, j = h.promise({
            elem: a,
            props: ea.extend({}, b),
            opts: ea.extend(!0, {
                specialEasing: {}
            }, c),
            originalProperties: b,
            originalOptions: c,
            startTime: nb || H(),
            duration: c.duration,
            tweens: [],
            createTween: function(b, c) {
                var d = ea.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                return j.tweens.push(d),
                    d
            },
            stop: function(b) {
                var c = 0
                    , d = b ? j.tweens.length : 0;
                if (e)
                    return this;
                for (e = !0; c < d; c++)
                    j.tweens[c].run(1);
                return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]),
                    this
            }
        }), k = j.props;
        for (L(k, j.opts.specialEasing); f < g; f++)
            if (d = sb[f].call(j, a, k, j.opts))
                return d;
        return ea.map(k, J, j),
        ea.isFunction(j.opts.start) && j.opts.start.call(a, j),
            ea.fx.timer(ea.extend(i, {
                elem: a,
                anim: j,
                queue: j.opts.queue
            })),
            j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }
    function N(a) {
        return function(b, c) {
            "string" != typeof b && (c = b,
                b = "*");
            var d, e = 0, f = b.toLowerCase().match(ta) || [];
            if (ea.isFunction(c))
                for (; d = f[e++]; )
                    "+" === d.charAt(0) ? (d = d.slice(1) || "*",
                        (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }
    function O(a, b, c, d) {
        function e(h) {
            var i;
            return f[h] = !0,
                ea.each(a[h] || [], function(a, h) {
                    var j = h(b, c, d);
                    return "string" != typeof j || g || f[j] ? g ? !(i = j) : void 0 : (b.dataTypes.unshift(j),
                        e(j),
                        !1)
                }),
                i
        }
        var f = {}
            , g = a === Rb;
        return e(b.dataTypes[0]) || !f["*"] && e("*")
    }
    function P(a, b) {
        var c, d, e = ea.ajaxSettings.flatOptions || {};
        for (d in b)
            void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]);
        return c && ea.extend(!0, a, c),
            a
    }
    function Q(a, b, c) {
        for (var d, e, f, g, h = a.contents, i = a.dataTypes; "*" === i[0]; )
            i.shift(),
            void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type"));
        if (e)
            for (g in h)
                if (h[g] && h[g].test(e)) {
                    i.unshift(g);
                    break
                }
        if (i[0]in c)
            f = i[0];
        else {
            for (g in c) {
                if (!i[0] || a.converters[g + " " + i[0]]) {
                    f = g;
                    break
                }
                d || (d = g)
            }
            f = f || d
        }
        if (f)
            return f !== i[0] && i.unshift(f),
                c[f]
    }
    function R(a, b, c, d) {
        var e, f, g, h, i, j = {}, k = a.dataTypes.slice();
        if (k[1])
            for (g in a.converters)
                j[g.toLowerCase()] = a.converters[g];
        for (f = k.shift(); f; )
            if (a.responseFields[f] && (c[a.responseFields[f]] = b),
                !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)),
                    i = f,
                    f = k.shift())
                if ("*" === f)
                    f = i;
                else if ("*" !== i && i !== f) {
                    if (g = j[i + " " + f] || j["* " + f],
                            !g)
                        for (e in j)
                            if (h = e.split(" "),
                                h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                                g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0],
                                    k.unshift(h[1]));
                                break
                            }
                    if (g !== !0)
                        if (g && a["throws"])
                            b = g(b);
                        else
                            try {
                                b = g(b)
                            } catch (l) {
                                return {
                                    state: "parsererror",
                                    error: g ? l : "No conversion from " + i + " to " + f
                                }
                            }
                }
        return {
            state: "success",
            data: b
        }
    }
    function S(a, b, c, d) {
        var e;
        if (ea.isArray(b))
            ea.each(b, function(b, e) {
                c || Vb.test(a) ? d(a, e) : S(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
            });
        else if (c || "object" !== ea.type(b))
            d(a, b);
        else
            for (e in b)
                S(a + "[" + e + "]", b[e], c, d)
    }
    function T() {
        try {
            return new a.XMLHttpRequest
        } catch (b) {}
    }
    function U() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP")
        } catch (b) {}
    }
    function V(a) {
        return ea.isWindow(a) ? a : 9 === a.nodeType && (a.defaultView || a.parentWindow)
    }
    var W = []
        , X = W.slice
        , Y = W.concat
        , Z = W.push
        , $ = W.indexOf
        , _ = {}
        , aa = _.toString
        , ba = _.hasOwnProperty
        , ca = {}
        , da = "1.11.3"
        , ea = function(a, b) {
        return new ea.fn.init(a,b)
    }
        , fa = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
        , ga = /^-ms-/
        , ha = /-([\da-z])/gi
        , ia = function(a, b) {
        return b.toUpperCase()
    };
    ea.fn = ea.prototype = {
        jquery: da,
        constructor: ea,
        selector: "",
        length: 0,
        toArray: function() {
            return X.call(this)
        },
        get: function(a) {
            return null != a ? a < 0 ? this[a + this.length] : this[a] : X.call(this)
        },
        pushStack: function(a) {
            var b = ea.merge(this.constructor(), a);
            return b.prevObject = this,
                b.context = this.context,
                b
        },
        each: function(a, b) {
            return ea.each(this, a, b)
        },
        map: function(a) {
            return this.pushStack(ea.map(this, function(b, c) {
                return a.call(b, c, b)
            }))
        },
        slice: function() {
            return this.pushStack(X.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(a) {
            var b = this.length
                , c = +a + (a < 0 ? b : 0);
            return this.pushStack(c >= 0 && c < b ? [this[c]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: Z,
        sort: W.sort,
        splice: W.splice
    },
        ea.extend = ea.fn.extend = function() {
            var a, b, c, d, e, f, g = arguments[0] || {}, h = 1, i = arguments.length, j = !1;
            for ("boolean" == typeof g && (j = g,
                g = arguments[h] || {},
                h++),
                 "object" == typeof g || ea.isFunction(g) || (g = {}),
                 h === i && (g = this,
                     h--); h < i; h++)
                if (null != (e = arguments[h]))
                    for (d in e)
                        a = g[d],
                            c = e[d],
                        g !== c && (j && c && (ea.isPlainObject(c) || (b = ea.isArray(c))) ? (b ? (b = !1,
                            f = a && ea.isArray(a) ? a : []) : f = a && ea.isPlainObject(a) ? a : {},
                            g[d] = ea.extend(j, f, c)) : void 0 !== c && (g[d] = c));
            return g
        }
        ,
        ea.extend({
            expando: "jQuery" + (da + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(a) {
                throw new Error(a)
            },
            noop: function() {},
            isFunction: function(a) {
                return "function" === ea.type(a)
            },
            isArray: Array.isArray || function(a) {
                return "array" === ea.type(a)
            }
            ,
            isWindow: function(a) {
                return null != a && a == a.window
            },
            isNumeric: function(a) {
                return !ea.isArray(a) && a - parseFloat(a) + 1 >= 0
            },
            isEmptyObject: function(a) {
                var b;
                for (b in a)
                    return !1;
                return !0
            },
            isPlainObject: function(a) {
                var b;
                if (!a || "object" !== ea.type(a) || a.nodeType || ea.isWindow(a))
                    return !1;
                try {
                    if (a.constructor && !ba.call(a, "constructor") && !ba.call(a.constructor.prototype, "isPrototypeOf"))
                        return !1
                } catch (c) {
                    return !1
                }
                if (ca.ownLast)
                    for (b in a)
                        return ba.call(a, b);
                for (b in a)
                    ;
                return void 0 === b || ba.call(a, b)
            },
            type: function(a) {
                return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? _[aa.call(a)] || "object" : typeof a
            },
            globalEval: function(b) {
                b && ea.trim(b) && (a.execScript || function(b) {
                        a.eval.call(a, b)
                    }
                )(b)
            },
            camelCase: function(a) {
                return a.replace(ga, "ms-").replace(ha, ia)
            },
            nodeName: function(a, b) {
                return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
            },
            each: function(a, b, d) {
                var e, f = 0, g = a.length, h = c(a);
                if (d) {
                    if (h)
                        for (; f < g && (e = b.apply(a[f], d),
                        e !== !1); f++)
                            ;
                    else
                        for (f in a)
                            if (e = b.apply(a[f], d),
                                e === !1)
                                break
                } else if (h)
                    for (; f < g && (e = b.call(a[f], f, a[f]),
                    e !== !1); f++)
                        ;
                else
                    for (f in a)
                        if (e = b.call(a[f], f, a[f]),
                            e === !1)
                            break;
                return a
            },
            trim: function(a) {
                return null == a ? "" : (a + "").replace(fa, "")
            },
            makeArray: function(a, b) {
                var d = b || [];
                return null != a && (c(Object(a)) ? ea.merge(d, "string" == typeof a ? [a] : a) : Z.call(d, a)),
                    d
            },
            inArray: function(a, b, c) {
                var d;
                if (b) {
                    if ($)
                        return $.call(b, a, c);
                    for (d = b.length,
                             c = c ? c < 0 ? Math.max(0, d + c) : c : 0; c < d; c++)
                        if (c in b && b[c] === a)
                            return c
                }
                return -1
            },
            merge: function(a, b) {
                for (var c = +b.length, d = 0, e = a.length; d < c; )
                    a[e++] = b[d++];
                if (c !== c)
                    for (; void 0 !== b[d]; )
                        a[e++] = b[d++];
                return a.length = e,
                    a
            },
            grep: function(a, b, c) {
                for (var d, e = [], f = 0, g = a.length, h = !c; f < g; f++)
                    d = !b(a[f], f),
                    d !== h && e.push(a[f]);
                return e
            },
            map: function(a, b, d) {
                var e, f = 0, g = a.length, h = c(a), i = [];
                if (h)
                    for (; f < g; f++)
                        e = b(a[f], f, d),
                        null != e && i.push(e);
                else
                    for (f in a)
                        e = b(a[f], f, d),
                        null != e && i.push(e);
                return Y.apply([], i)
            },
            guid: 1,
            proxy: function(a, b) {
                var c, d, e;
                if ("string" == typeof b && (e = a[b],
                        b = a,
                        a = e),
                        ea.isFunction(a))
                    return c = X.call(arguments, 2),
                        d = function() {
                            return a.apply(b || this, c.concat(X.call(arguments)))
                        }
                        ,
                        d.guid = a.guid = a.guid || ea.guid++,
                        d
            },
            now: function() {
                return +new Date
            },
            support: ca
        }),
        ea.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
            _["[object " + b + "]"] = b.toLowerCase()
        });
    var ja = function(a) {
        function b(a, b, c, d) {
            var e, f, g, h, i, j, l, n, o, p;
            if ((b ? b.ownerDocument || b : O) !== G && F(b),
                    b = b || G,
                    c = c || [],
                    h = b.nodeType,
                "string" != typeof a || !a || 1 !== h && 9 !== h && 11 !== h)
                return c;
            if (!d && I) {
                if (11 !== h && (e = sa.exec(a)))
                    if (g = e[1]) {
                        if (9 === h) {
                            if (f = b.getElementById(g),
                                !f || !f.parentNode)
                                return c;
                            if (f.id === g)
                                return c.push(f),
                                    c
                        } else if (b.ownerDocument && (f = b.ownerDocument.getElementById(g)) && M(b, f) && f.id === g)
                            return c.push(f),
                                c
                    } else {
                        if (e[2])
                            return $.apply(c, b.getElementsByTagName(a)),
                                c;
                        if ((g = e[3]) && v.getElementsByClassName)
                            return $.apply(c, b.getElementsByClassName(g)),
                                c
                    }
                if (v.qsa && (!J || !J.test(a))) {
                    if (n = l = N,
                            o = b,
                            p = 1 !== h && a,
                        1 === h && "object" !== b.nodeName.toLowerCase()) {
                        for (j = z(a),
                                 (l = b.getAttribute("id")) ? n = l.replace(ua, "\\$&") : b.setAttribute("id", n),
                                 n = "[id='" + n + "'] ",
                                 i = j.length; i--; )
                            j[i] = n + m(j[i]);
                        o = ta.test(a) && k(b.parentNode) || b,
                            p = j.join(",")
                    }
                    if (p)
                        try {
                            return $.apply(c, o.querySelectorAll(p)),
                                c
                        } catch (q) {} finally {
                            l || b.removeAttribute("id")
                        }
                }
            }
            return B(a.replace(ia, "$1"), b, c, d)
        }
        function c() {
            function a(c, d) {
                return b.push(c + " ") > w.cacheLength && delete a[b.shift()],
                    a[c + " "] = d
            }
            var b = [];
            return a
        }
        function d(a) {
            return a[N] = !0,
                a
        }
        function e(a) {
            var b = G.createElement("div");
            try {
                return !!a(b)
            } catch (c) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b),
                    b = null
            }
        }
        function f(a, b) {
            for (var c = a.split("|"), d = a.length; d--; )
                w.attrHandle[c[d]] = b
        }
        function g(a, b) {
            var c = b && a
                , d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || V) - (~a.sourceIndex || V);
            if (d)
                return d;
            if (c)
                for (; c = c.nextSibling; )
                    if (c === b)
                        return -1;
            return a ? 1 : -1
        }
        function h(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }
        function i(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }
        function j(a) {
            return d(function(b) {
                return b = +b,
                    d(function(c, d) {
                        for (var e, f = a([], c.length, b), g = f.length; g--; )
                            c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                    })
            })
        }
        function k(a) {
            return a && "undefined" != typeof a.getElementsByTagName && a
        }
        function l() {}
        function m(a) {
            for (var b = 0, c = a.length, d = ""; b < c; b++)
                d += a[b].value;
            return d
        }
        function n(a, b, c) {
            var d = b.dir
                , e = c && "parentNode" === d
                , f = Q++;
            return b.first ? function(b, c, f) {
                    for (; b = b[d]; )
                        if (1 === b.nodeType || e)
                            return a(b, c, f)
                }
                : function(b, c, g) {
                    var h, i, j = [P, f];
                    if (g) {
                        for (; b = b[d]; )
                            if ((1 === b.nodeType || e) && a(b, c, g))
                                return !0
                    } else
                        for (; b = b[d]; )
                            if (1 === b.nodeType || e) {
                                if (i = b[N] || (b[N] = {}),
                                    (h = i[d]) && h[0] === P && h[1] === f)
                                    return j[2] = h[2];
                                if (i[d] = j,
                                        j[2] = a(b, c, g))
                                    return !0
                            }
                }
        }
        function o(a) {
            return a.length > 1 ? function(b, c, d) {
                    for (var e = a.length; e--; )
                        if (!a[e](b, c, d))
                            return !1;
                    return !0
                }
                : a[0]
        }
        function p(a, c, d) {
            for (var e = 0, f = c.length; e < f; e++)
                b(a, c[e], d);
            return d
        }
        function q(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; h < i; h++)
                (f = a[h]) && (c && !c(f, d, e) || (g.push(f),
                j && b.push(h)));
            return g
        }
        function r(a, b, c, e, f, g) {
            return e && !e[N] && (e = r(e)),
            f && !f[N] && (f = r(f, g)),
                d(function(d, g, h, i) {
                    var j, k, l, m = [], n = [], o = g.length, r = d || p(b || "*", h.nodeType ? [h] : h, []), s = !a || !d && b ? r : q(r, m, a, h, i), t = c ? f || (d ? a : o || e) ? [] : g : s;
                    if (c && c(s, t, h, i),
                            e)
                        for (j = q(t, n),
                                 e(j, [], h, i),
                                 k = j.length; k--; )
                            (l = j[k]) && (t[n[k]] = !(s[n[k]] = l));
                    if (d) {
                        if (f || a) {
                            if (f) {
                                for (j = [],
                                         k = t.length; k--; )
                                    (l = t[k]) && j.push(s[k] = l);
                                f(null, t = [], j, i)
                            }
                            for (k = t.length; k--; )
                                (l = t[k]) && (j = f ? aa(d, l) : m[k]) > -1 && (d[j] = !(g[j] = l))
                        }
                    } else
                        t = q(t === g ? t.splice(o, t.length) : t),
                            f ? f(null, g, t, i) : $.apply(g, t)
                })
        }
        function s(a) {
            for (var b, c, d, e = a.length, f = w.relative[a[0].type], g = f || w.relative[" "], h = f ? 1 : 0, i = n(function(a) {
                return a === b
            }, g, !0), j = n(function(a) {
                return aa(b, a) > -1
            }, g, !0), k = [function(a, c, d) {
                var e = !f && (d || c !== C) || ((b = c).nodeType ? i(a, c, d) : j(a, c, d));
                return b = null,
                    e
            }
            ]; h < e; h++)
                if (c = w.relative[a[h].type])
                    k = [n(o(k), c)];
                else {
                    if (c = w.filter[a[h].type].apply(null, a[h].matches),
                            c[N]) {
                        for (d = ++h; d < e && !w.relative[a[d].type]; d++)
                            ;
                        return r(h > 1 && o(k), h > 1 && m(a.slice(0, h - 1).concat({
                            value: " " === a[h - 2].type ? "*" : ""
                        })).replace(ia, "$1"), c, h < d && s(a.slice(h, d)), d < e && s(a = a.slice(d)), d < e && m(a))
                    }
                    k.push(c)
                }
            return o(k)
        }
        function t(a, c) {
            var e = c.length > 0
                , f = a.length > 0
                , g = function(d, g, h, i, j) {
                var k, l, m, n = 0, o = "0", p = d && [], r = [], s = C, t = d || f && w.find.TAG("*", j), u = P += null == s ? 1 : Math.random() || .1, v = t.length;
                for (j && (C = g !== G && g); o !== v && null != (k = t[o]); o++) {
                    if (f && k) {
                        for (l = 0; m = a[l++]; )
                            if (m(k, g, h)) {
                                i.push(k);
                                break
                            }
                        j && (P = u)
                    }
                    e && ((k = !m && k) && n--,
                    d && p.push(k))
                }
                if (n += o,
                    e && o !== n) {
                    for (l = 0; m = c[l++]; )
                        m(p, r, g, h);
                    if (d) {
                        if (n > 0)
                            for (; o--; )
                                p[o] || r[o] || (r[o] = Y.call(i));
                        r = q(r)
                    }
                    $.apply(i, r),
                    j && !d && r.length > 0 && n + c.length > 1 && b.uniqueSort(i)
                }
                return j && (P = u,
                    C = s),
                    p
            };
            return e ? d(g) : g
        }
        var u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N = "sizzle" + 1 * new Date, O = a.document, P = 0, Q = 0, R = c(), S = c(), T = c(), U = function(a, b) {
            return a === b && (E = !0),
                0
        }, V = 1 << 31, W = {}.hasOwnProperty, X = [], Y = X.pop, Z = X.push, $ = X.push, _ = X.slice, aa = function(a, b) {
            for (var c = 0, d = a.length; c < d; c++)
                if (a[c] === b)
                    return c;
            return -1
        }, ba = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", ca = "[\\x20\\t\\r\\n\\f]", da = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", ea = da.replace("w", "w#"), fa = "\\[" + ca + "*(" + da + ")(?:" + ca + "*([*^$|!~]?=)" + ca + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ea + "))|)" + ca + "*\\]", ga = ":(" + da + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + fa + ")*)|.*)\\)|)", ha = new RegExp(ca + "+","g"), ia = new RegExp("^" + ca + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ca + "+$","g"), ja = new RegExp("^" + ca + "*," + ca + "*"), ka = new RegExp("^" + ca + "*([>+~]|" + ca + ")" + ca + "*"), la = new RegExp("=" + ca + "*([^\\]'\"]*?)" + ca + "*\\]","g"), ma = new RegExp(ga), na = new RegExp("^" + ea + "$"), oa = {
            ID: new RegExp("^#(" + da + ")"),
            CLASS: new RegExp("^\\.(" + da + ")"),
            TAG: new RegExp("^(" + da.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + fa),
            PSEUDO: new RegExp("^" + ga),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ca + "*(even|odd|(([+-]|)(\\d*)n|)" + ca + "*(?:([+-]|)" + ca + "*(\\d+)|))" + ca + "*\\)|)","i"),
            bool: new RegExp("^(?:" + ba + ")$","i"),
            needsContext: new RegExp("^" + ca + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ca + "*((?:-\\d)?\\d*)" + ca + "*\\)|)(?=[^-]|$)","i")
        }, pa = /^(?:input|select|textarea|button)$/i, qa = /^h\d$/i, ra = /^[^{]+\{\s*\[native \w/, sa = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ta = /[+~]/, ua = /'|\\/g, va = new RegExp("\\\\([\\da-f]{1,6}" + ca + "?|(" + ca + ")|.)","ig"), wa = function(a, b, c) {
            var d = "0x" + b - 65536;
            return d !== d || c ? b : d < 0 ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
        }, xa = function() {
            F()
        };
        try {
            $.apply(X = _.call(O.childNodes), O.childNodes),
                X[O.childNodes.length].nodeType
        } catch (ya) {
            $ = {
                apply: X.length ? function(a, b) {
                        Z.apply(a, _.call(b))
                    }
                    : function(a, b) {
                        for (var c = a.length, d = 0; a[c++] = b[d++]; )
                            ;
                        a.length = c - 1
                    }
            }
        }
        v = b.support = {},
            y = b.isXML = function(a) {
                var b = a && (a.ownerDocument || a).documentElement;
                return !!b && "HTML" !== b.nodeName
            }
            ,
            F = b.setDocument = function(a) {
                var b, c, d = a ? a.ownerDocument || a : O;
                return d !== G && 9 === d.nodeType && d.documentElement ? (G = d,
                    H = d.documentElement,
                    c = d.defaultView,
                c && c !== c.top && (c.addEventListener ? c.addEventListener("unload", xa, !1) : c.attachEvent && c.attachEvent("onunload", xa)),
                    I = !y(d),
                    v.attributes = e(function(a) {
                        return a.className = "i",
                            !a.getAttribute("className")
                    }),
                    v.getElementsByTagName = e(function(a) {
                        return a.appendChild(d.createComment("")),
                            !a.getElementsByTagName("*").length
                    }),
                    v.getElementsByClassName = ra.test(d.getElementsByClassName),
                    v.getById = e(function(a) {
                        return H.appendChild(a).id = N,
                        !d.getElementsByName || !d.getElementsByName(N).length
                    }),
                    v.getById ? (w.find.ID = function(a, b) {
                            if ("undefined" != typeof b.getElementById && I) {
                                var c = b.getElementById(a);
                                return c && c.parentNode ? [c] : []
                            }
                        }
                            ,
                            w.filter.ID = function(a) {
                                var b = a.replace(va, wa);
                                return function(a) {
                                    return a.getAttribute("id") === b
                                }
                            }
                    ) : (delete w.find.ID,
                            w.filter.ID = function(a) {
                                var b = a.replace(va, wa);
                                return function(a) {
                                    var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                                    return c && c.value === b
                                }
                            }
                    ),
                    w.find.TAG = v.getElementsByTagName ? function(a, b) {
                            return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : v.qsa ? b.querySelectorAll(a) : void 0
                        }
                        : function(a, b) {
                            var c, d = [], e = 0, f = b.getElementsByTagName(a);
                            if ("*" === a) {
                                for (; c = f[e++]; )
                                    1 === c.nodeType && d.push(c);
                                return d
                            }
                            return f
                        }
                    ,
                    w.find.CLASS = v.getElementsByClassName && function(a, b) {
                        if (I)
                            return b.getElementsByClassName(a)
                    }
                    ,
                    K = [],
                    J = [],
                (v.qsa = ra.test(d.querySelectorAll)) && (e(function(a) {
                    H.appendChild(a).innerHTML = "<a id='" + N + "'></a><select id='" + N + "-\f]' msallowcapture=''><option selected=''></option></select>",
                    a.querySelectorAll("[msallowcapture^='']").length && J.push("[*^$]=" + ca + "*(?:''|\"\")"),
                    a.querySelectorAll("[selected]").length || J.push("\\[" + ca + "*(?:value|" + ba + ")"),
                    a.querySelectorAll("[id~=" + N + "-]").length || J.push("~="),
                    a.querySelectorAll(":checked").length || J.push(":checked"),
                    a.querySelectorAll("a#" + N + "+*").length || J.push(".#.+[+~]")
                }),
                    e(function(a) {
                        var b = d.createElement("input");
                        b.setAttribute("type", "hidden"),
                            a.appendChild(b).setAttribute("name", "D"),
                        a.querySelectorAll("[name=d]").length && J.push("name" + ca + "*[*^$|!~]?="),
                        a.querySelectorAll(":enabled").length || J.push(":enabled", ":disabled"),
                            a.querySelectorAll("*,:x"),
                            J.push(",.*:")
                    })),
                (v.matchesSelector = ra.test(L = H.matches || H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && e(function(a) {
                    v.disconnectedMatch = L.call(a, "div"),
                        L.call(a, "[s!='']:x"),
                        K.push("!=", ga)
                }),
                    J = J.length && new RegExp(J.join("|")),
                    K = K.length && new RegExp(K.join("|")),
                    b = ra.test(H.compareDocumentPosition),
                    M = b || ra.test(H.contains) ? function(a, b) {
                            var c = 9 === a.nodeType ? a.documentElement : a
                                , d = b && b.parentNode;
                            return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
                        }
                        : function(a, b) {
                            if (b)
                                for (; b = b.parentNode; )
                                    if (b === a)
                                        return !0;
                            return !1
                        }
                    ,
                    U = b ? function(a, b) {
                            if (a === b)
                                return E = !0,
                                    0;
                            var c = !a.compareDocumentPosition - !b.compareDocumentPosition;
                            return c ? c : (c = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1,
                                1 & c || !v.sortDetached && b.compareDocumentPosition(a) === c ? a === d || a.ownerDocument === O && M(O, a) ? -1 : b === d || b.ownerDocument === O && M(O, b) ? 1 : D ? aa(D, a) - aa(D, b) : 0 : 4 & c ? -1 : 1)
                        }
                        : function(a, b) {
                            if (a === b)
                                return E = !0,
                                    0;
                            var c, e = 0, f = a.parentNode, h = b.parentNode, i = [a], j = [b];
                            if (!f || !h)
                                return a === d ? -1 : b === d ? 1 : f ? -1 : h ? 1 : D ? aa(D, a) - aa(D, b) : 0;
                            if (f === h)
                                return g(a, b);
                            for (c = a; c = c.parentNode; )
                                i.unshift(c);
                            for (c = b; c = c.parentNode; )
                                j.unshift(c);
                            for (; i[e] === j[e]; )
                                e++;
                            return e ? g(i[e], j[e]) : i[e] === O ? -1 : j[e] === O ? 1 : 0
                        }
                    ,
                    d) : G
            }
            ,
            b.matches = function(a, c) {
                return b(a, null, null, c)
            }
            ,
            b.matchesSelector = function(a, c) {
                if ((a.ownerDocument || a) !== G && F(a),
                        c = c.replace(la, "='$1']"),
                    v.matchesSelector && I && (!K || !K.test(c)) && (!J || !J.test(c)))
                    try {
                        var d = L.call(a, c);
                        if (d || v.disconnectedMatch || a.document && 11 !== a.document.nodeType)
                            return d
                    } catch (e) {}
                return b(c, G, null, [a]).length > 0
            }
            ,
            b.contains = function(a, b) {
                return (a.ownerDocument || a) !== G && F(a),
                    M(a, b)
            }
            ,
            b.attr = function(a, b) {
                (a.ownerDocument || a) !== G && F(a);
                var c = w.attrHandle[b.toLowerCase()]
                    , d = c && W.call(w.attrHandle, b.toLowerCase()) ? c(a, b, !I) : void 0;
                return void 0 !== d ? d : v.attributes || !I ? a.getAttribute(b) : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
            }
            ,
            b.error = function(a) {
                throw new Error("Syntax error, unrecognized expression: " + a)
            }
            ,
            b.uniqueSort = function(a) {
                var b, c = [], d = 0, e = 0;
                if (E = !v.detectDuplicates,
                        D = !v.sortStable && a.slice(0),
                        a.sort(U),
                        E) {
                    for (; b = a[e++]; )
                        b === a[e] && (d = c.push(e));
                    for (; d--; )
                        a.splice(c[d], 1)
                }
                return D = null,
                    a
            }
            ,
            x = b.getText = function(a) {
                var b, c = "", d = 0, e = a.nodeType;
                if (e) {
                    if (1 === e || 9 === e || 11 === e) {
                        if ("string" == typeof a.textContent)
                            return a.textContent;
                        for (a = a.firstChild; a; a = a.nextSibling)
                            c += x(a)
                    } else if (3 === e || 4 === e)
                        return a.nodeValue
                } else
                    for (; b = a[d++]; )
                        c += x(b);
                return c
            }
            ,
            w = b.selectors = {
                cacheLength: 50,
                createPseudo: d,
                match: oa,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(a) {
                        return a[1] = a[1].replace(va, wa),
                            a[3] = (a[3] || a[4] || a[5] || "").replace(va, wa),
                        "~=" === a[2] && (a[3] = " " + a[3] + " "),
                            a.slice(0, 4)
                    },
                    CHILD: function(a) {
                        return a[1] = a[1].toLowerCase(),
                            "nth" === a[1].slice(0, 3) ? (a[3] || b.error(a[0]),
                                a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])),
                                a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && b.error(a[0]),
                            a
                    },
                    PSEUDO: function(a) {
                        var b, c = !a[6] && a[2];
                        return oa.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && ma.test(c) && (b = z(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b),
                            a[2] = c.slice(0, b)),
                            a.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(a) {
                        var b = a.replace(va, wa).toLowerCase();
                        return "*" === a ? function() {
                                return !0
                            }
                            : function(a) {
                                return a.nodeName && a.nodeName.toLowerCase() === b
                            }
                    },
                    CLASS: function(a) {
                        var b = R[a + " "];
                        return b || (b = new RegExp("(^|" + ca + ")" + a + "(" + ca + "|$)")) && R(a, function(a) {
                            return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(a, c, d) {
                        return function(e) {
                            var f = b.attr(e, a);
                            return null == f ? "!=" === c : !c || (f += "",
                                "=" === c ? f === d : "!=" === c ? f !== d : "^=" === c ? d && 0 === f.indexOf(d) : "*=" === c ? d && f.indexOf(d) > -1 : "$=" === c ? d && f.slice(-d.length) === d : "~=" === c ? (" " + f.replace(ha, " ") + " ").indexOf(d) > -1 : "|=" === c && (f === d || f.slice(0, d.length + 1) === d + "-"))
                        }
                    },
                    CHILD: function(a, b, c, d, e) {
                        var f = "nth" !== a.slice(0, 3)
                            , g = "last" !== a.slice(-4)
                            , h = "of-type" === b;
                        return 1 === d && 0 === e ? function(a) {
                                return !!a.parentNode
                            }
                            : function(b, c, i) {
                                var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling", q = b.parentNode, r = h && b.nodeName.toLowerCase(), s = !i && !h;
                                if (q) {
                                    if (f) {
                                        for (; p; ) {
                                            for (l = b; l = l[p]; )
                                                if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType)
                                                    return !1;
                                            o = p = "only" === a && !o && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (o = [g ? q.firstChild : q.lastChild],
                                        g && s) {
                                        for (k = q[N] || (q[N] = {}),
                                                 j = k[a] || [],
                                                 n = j[0] === P && j[1],
                                                 m = j[0] === P && j[2],
                                                 l = n && q.childNodes[n]; l = ++n && l && l[p] || (m = n = 0) || o.pop(); )
                                            if (1 === l.nodeType && ++m && l === b) {
                                                k[a] = [P, n, m];
                                                break
                                            }
                                    } else if (s && (j = (b[N] || (b[N] = {}))[a]) && j[0] === P)
                                        m = j[1];
                                    else
                                        for (; (l = ++n && l && l[p] || (m = n = 0) || o.pop()) && ((h ? l.nodeName.toLowerCase() !== r : 1 !== l.nodeType) || !++m || (s && ((l[N] || (l[N] = {}))[a] = [P, m]),
                                        l !== b)); )
                                            ;
                                    return m -= e,
                                    m === d || m % d === 0 && m / d >= 0
                                }
                            }
                    },
                    PSEUDO: function(a, c) {
                        var e, f = w.pseudos[a] || w.setFilters[a.toLowerCase()] || b.error("unsupported pseudo: " + a);
                        return f[N] ? f(c) : f.length > 1 ? (e = [a, a, "", c],
                                w.setFilters.hasOwnProperty(a.toLowerCase()) ? d(function(a, b) {
                                    for (var d, e = f(a, c), g = e.length; g--; )
                                        d = aa(a, e[g]),
                                            a[d] = !(b[d] = e[g])
                                }) : function(a) {
                                    return f(a, 0, e)
                                }
                        ) : f
                    }
                },
                pseudos: {
                    not: d(function(a) {
                        var b = []
                            , c = []
                            , e = A(a.replace(ia, "$1"));
                        return e[N] ? d(function(a, b, c, d) {
                            for (var f, g = e(a, null, d, []), h = a.length; h--; )
                                (f = g[h]) && (a[h] = !(b[h] = f))
                        }) : function(a, d, f) {
                            return b[0] = a,
                                e(b, null, f, c),
                                b[0] = null,
                                !c.pop()
                        }
                    }),
                    has: d(function(a) {
                        return function(c) {
                            return b(a, c).length > 0
                        }
                    }),
                    contains: d(function(a) {
                        return a = a.replace(va, wa),
                            function(b) {
                                return (b.textContent || b.innerText || x(b)).indexOf(a) > -1
                            }
                    }),
                    lang: d(function(a) {
                        return na.test(a || "") || b.error("unsupported lang: " + a),
                            a = a.replace(va, wa).toLowerCase(),
                            function(b) {
                                var c;
                                do
                                    if (c = I ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang"))
                                        return c = c.toLowerCase(),
                                        c === a || 0 === c.indexOf(a + "-");
                                while ((b = b.parentNode) && 1 === b.nodeType);return !1
                            }
                    }),
                    target: function(b) {
                        var c = a.location && a.location.hash;
                        return c && c.slice(1) === b.id
                    },
                    root: function(a) {
                        return a === H
                    },
                    focus: function(a) {
                        return a === G.activeElement && (!G.hasFocus || G.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                    },
                    enabled: function(a) {
                        return a.disabled === !1
                    },
                    disabled: function(a) {
                        return a.disabled === !0
                    },
                    checked: function(a) {
                        var b = a.nodeName.toLowerCase();
                        return "input" === b && !!a.checked || "option" === b && !!a.selected
                    },
                    selected: function(a) {
                        return a.parentNode && a.parentNode.selectedIndex,
                        a.selected === !0
                    },
                    empty: function(a) {
                        for (a = a.firstChild; a; a = a.nextSibling)
                            if (a.nodeType < 6)
                                return !1;
                        return !0
                    },
                    parent: function(a) {
                        return !w.pseudos.empty(a)
                    },
                    header: function(a) {
                        return qa.test(a.nodeName)
                    },
                    input: function(a) {
                        return pa.test(a.nodeName)
                    },
                    button: function(a) {
                        var b = a.nodeName.toLowerCase();
                        return "input" === b && "button" === a.type || "button" === b
                    },
                    text: function(a) {
                        var b;
                        return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                    },
                    first: j(function() {
                        return [0]
                    }),
                    last: j(function(a, b) {
                        return [b - 1]
                    }),
                    eq: j(function(a, b, c) {
                        return [c < 0 ? c + b : c]
                    }),
                    even: j(function(a, b) {
                        for (var c = 0; c < b; c += 2)
                            a.push(c);
                        return a
                    }),
                    odd: j(function(a, b) {
                        for (var c = 1; c < b; c += 2)
                            a.push(c);
                        return a
                    }),
                    lt: j(function(a, b, c) {
                        for (var d = c < 0 ? c + b : c; --d >= 0; )
                            a.push(d);
                        return a
                    }),
                    gt: j(function(a, b, c) {
                        for (var d = c < 0 ? c + b : c; ++d < b; )
                            a.push(d);
                        return a
                    })
                }
            },
            w.pseudos.nth = w.pseudos.eq;
        for (u in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            w.pseudos[u] = h(u);
        for (u in {
            submit: !0,
            reset: !0
        })
            w.pseudos[u] = i(u);
        return l.prototype = w.filters = w.pseudos,
            w.setFilters = new l,
            z = b.tokenize = function(a, c) {
                var d, e, f, g, h, i, j, k = S[a + " "];
                if (k)
                    return c ? 0 : k.slice(0);
                for (h = a,
                         i = [],
                         j = w.preFilter; h; ) {
                    d && !(e = ja.exec(h)) || (e && (h = h.slice(e[0].length) || h),
                        i.push(f = [])),
                        d = !1,
                    (e = ka.exec(h)) && (d = e.shift(),
                        f.push({
                            value: d,
                            type: e[0].replace(ia, " ")
                        }),
                        h = h.slice(d.length));
                    for (g in w.filter)
                        !(e = oa[g].exec(h)) || j[g] && !(e = j[g](e)) || (d = e.shift(),
                            f.push({
                                value: d,
                                type: g,
                                matches: e
                            }),
                            h = h.slice(d.length));
                    if (!d)
                        break
                }
                return c ? h.length : h ? b.error(a) : S(a, i).slice(0)
            }
            ,
            A = b.compile = function(a, b) {
                var c, d = [], e = [], f = T[a + " "];
                if (!f) {
                    for (b || (b = z(a)),
                             c = b.length; c--; )
                        f = s(b[c]),
                            f[N] ? d.push(f) : e.push(f);
                    f = T(a, t(e, d)),
                        f.selector = a
                }
                return f
            }
            ,
            B = b.select = function(a, b, c, d) {
                var e, f, g, h, i, j = "function" == typeof a && a, l = !d && z(a = j.selector || a);
                if (c = c || [],
                    1 === l.length) {
                    if (f = l[0] = l[0].slice(0),
                        f.length > 2 && "ID" === (g = f[0]).type && v.getById && 9 === b.nodeType && I && w.relative[f[1].type]) {
                        if (b = (w.find.ID(g.matches[0].replace(va, wa), b) || [])[0],
                                !b)
                            return c;
                        j && (b = b.parentNode),
                            a = a.slice(f.shift().value.length)
                    }
                    for (e = oa.needsContext.test(a) ? 0 : f.length; e-- && (g = f[e],
                        !w.relative[h = g.type]); )
                        if ((i = w.find[h]) && (d = i(g.matches[0].replace(va, wa), ta.test(f[0].type) && k(b.parentNode) || b))) {
                            if (f.splice(e, 1),
                                    a = d.length && m(f),
                                    !a)
                                return $.apply(c, d),
                                    c;
                            break
                        }
                }
                return (j || A(a, l))(d, b, !I, c, ta.test(a) && k(b.parentNode) || b),
                    c
            }
            ,
            v.sortStable = N.split("").sort(U).join("") === N,
            v.detectDuplicates = !!E,
            F(),
            v.sortDetached = e(function(a) {
                return 1 & a.compareDocumentPosition(G.createElement("div"))
            }),
        e(function(a) {
            return a.innerHTML = "<a href='#'></a>",
            "#" === a.firstChild.getAttribute("href")
        }) || f("type|href|height|width", function(a, b, c) {
            if (!c)
                return a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }),
        v.attributes && e(function(a) {
            return a.innerHTML = "<input/>",
                a.firstChild.setAttribute("value", ""),
            "" === a.firstChild.getAttribute("value")
        }) || f("value", function(a, b, c) {
            if (!c && "input" === a.nodeName.toLowerCase())
                return a.defaultValue
        }),
        e(function(a) {
            return null == a.getAttribute("disabled")
        }) || f(ba, function(a, b, c) {
            var d;
            if (!c)
                return a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }),
            b
    }(a);
    ea.find = ja,
        ea.expr = ja.selectors,
        ea.expr[":"] = ea.expr.pseudos,
        ea.unique = ja.uniqueSort,
        ea.text = ja.getText,
        ea.isXMLDoc = ja.isXML,
        ea.contains = ja.contains;
    var ka = ea.expr.match.needsContext
        , la = /^<(\w+)\s*\/?>(?:<\/\1>|)$/
        , ma = /^.[^:#\[\.,]*$/;
    ea.filter = function(a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"),
            1 === b.length && 1 === d.nodeType ? ea.find.matchesSelector(d, a) ? [d] : [] : ea.find.matches(a, ea.grep(b, function(a) {
                return 1 === a.nodeType
            }))
    }
        ,
        ea.fn.extend({
            find: function(a) {
                var b, c = [], d = this, e = d.length;
                if ("string" != typeof a)
                    return this.pushStack(ea(a).filter(function() {
                        for (b = 0; b < e; b++)
                            if (ea.contains(d[b], this))
                                return !0
                    }));
                for (b = 0; b < e; b++)
                    ea.find(a, d[b], c);
                return c = this.pushStack(e > 1 ? ea.unique(c) : c),
                    c.selector = this.selector ? this.selector + " " + a : a,
                    c
            },
            filter: function(a) {
                return this.pushStack(d(this, a || [], !1))
            },
            not: function(a) {
                return this.pushStack(d(this, a || [], !0))
            },
            is: function(a) {
                return !!d(this, "string" == typeof a && ka.test(a) ? ea(a) : a || [], !1).length
            }
        });
    var na, oa = a.document, pa = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, qa = ea.fn.init = function(a, b) {
            var c, d;
            if (!a)
                return this;
            if ("string" == typeof a) {
                if (c = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : pa.exec(a),
                    !c || !c[1] && b)
                    return !b || b.jquery ? (b || na).find(a) : this.constructor(b).find(a);
                if (c[1]) {
                    if (b = b instanceof ea ? b[0] : b,
                            ea.merge(this, ea.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : oa, !0)),
                        la.test(c[1]) && ea.isPlainObject(b))
                        for (c in b)
                            ea.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
                    return this
                }
                if (d = oa.getElementById(c[2]),
                    d && d.parentNode) {
                    if (d.id !== c[2])
                        return na.find(a);
                    this.length = 1,
                        this[0] = d
                }
                return this.context = oa,
                    this.selector = a,
                    this
            }
            return a.nodeType ? (this.context = this[0] = a,
                this.length = 1,
                this) : ea.isFunction(a) ? "undefined" != typeof na.ready ? na.ready(a) : a(ea) : (void 0 !== a.selector && (this.selector = a.selector,
                this.context = a.context),
                ea.makeArray(a, this))
        }
    ;
    qa.prototype = ea.fn,
        na = ea(oa);
    var ra = /^(?:parents|prev(?:Until|All))/
        , sa = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    ea.extend({
        dir: function(a, b, c) {
            for (var d = [], e = a[b]; e && 9 !== e.nodeType && (void 0 === c || 1 !== e.nodeType || !ea(e).is(c)); )
                1 === e.nodeType && d.push(e),
                    e = e[b];
            return d
        },
        sibling: function(a, b) {
            for (var c = []; a; a = a.nextSibling)
                1 === a.nodeType && a !== b && c.push(a);
            return c
        }
    }),
        ea.fn.extend({
            has: function(a) {
                var b, c = ea(a, this), d = c.length;
                return this.filter(function() {
                    for (b = 0; b < d; b++)
                        if (ea.contains(this, c[b]))
                            return !0
                })
            },
            closest: function(a, b) {
                for (var c, d = 0, e = this.length, f = [], g = ka.test(a) || "string" != typeof a ? ea(a, b || this.context) : 0; d < e; d++)
                    for (c = this[d]; c && c !== b; c = c.parentNode)
                        if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && ea.find.matchesSelector(c, a))) {
                            f.push(c);
                            break
                        }
                return this.pushStack(f.length > 1 ? ea.unique(f) : f)
            },
            index: function(a) {
                return a ? "string" == typeof a ? ea.inArray(this[0], ea(a)) : ea.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(a, b) {
                return this.pushStack(ea.unique(ea.merge(this.get(), ea(a, b))))
            },
            addBack: function(a) {
                return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
            }
        }),
        ea.each({
            parent: function(a) {
                var b = a.parentNode;
                return b && 11 !== b.nodeType ? b : null
            },
            parents: function(a) {
                return ea.dir(a, "parentNode")
            },
            parentsUntil: function(a, b, c) {
                return ea.dir(a, "parentNode", c)
            },
            next: function(a) {
                return e(a, "nextSibling")
            },
            prev: function(a) {
                return e(a, "previousSibling")
            },
            nextAll: function(a) {
                return ea.dir(a, "nextSibling")
            },
            prevAll: function(a) {
                return ea.dir(a, "previousSibling")
            },
            nextUntil: function(a, b, c) {
                return ea.dir(a, "nextSibling", c)
            },
            prevUntil: function(a, b, c) {
                return ea.dir(a, "previousSibling", c)
            },
            siblings: function(a) {
                return ea.sibling((a.parentNode || {}).firstChild, a)
            },
            children: function(a) {
                return ea.sibling(a.firstChild)
            },
            contents: function(a) {
                return ea.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : ea.merge([], a.childNodes)
            }
        }, function(a, b) {
            ea.fn[a] = function(c, d) {
                var e = ea.map(this, b, c);
                return "Until" !== a.slice(-5) && (d = c),
                d && "string" == typeof d && (e = ea.filter(d, e)),
                this.length > 1 && (sa[a] || (e = ea.unique(e)),
                ra.test(a) && (e = e.reverse())),
                    this.pushStack(e)
            }
        });
    var ta = /\S+/g
        , ua = {};
    ea.Callbacks = function(a) {
        a = "string" == typeof a ? ua[a] || f(a) : ea.extend({}, a);
        var b, c, d, e, g, h, i = [], j = !a.once && [], k = function(f) {
            for (c = a.memory && f,
                     d = !0,
                     g = h || 0,
                     h = 0,
                     e = i.length,
                     b = !0; i && g < e; g++)
                if (i[g].apply(f[0], f[1]) === !1 && a.stopOnFalse) {
                    c = !1;
                    break
                }
            b = !1,
            i && (j ? j.length && k(j.shift()) : c ? i = [] : l.disable())
        }, l = {
            add: function() {
                if (i) {
                    var d = i.length;
                    !function f(b) {
                        ea.each(b, function(b, c) {
                            var d = ea.type(c);
                            "function" === d ? a.unique && l.has(c) || i.push(c) : c && c.length && "string" !== d && f(c)
                        })
                    }(arguments),
                        b ? e = i.length : c && (h = d,
                            k(c))
                }
                return this
            },
            remove: function() {
                return i && ea.each(arguments, function(a, c) {
                    for (var d; (d = ea.inArray(c, i, d)) > -1; )
                        i.splice(d, 1),
                        b && (d <= e && e--,
                        d <= g && g--)
                }),
                    this
            },
            has: function(a) {
                return a ? ea.inArray(a, i) > -1 : !(!i || !i.length)
            },
            empty: function() {
                return i = [],
                    e = 0,
                    this
            },
            disable: function() {
                return i = j = c = void 0,
                    this
            },
            disabled: function() {
                return !i
            },
            lock: function() {
                return j = void 0,
                c || l.disable(),
                    this
            },
            locked: function() {
                return !j
            },
            fireWith: function(a, c) {
                return !i || d && !j || (c = c || [],
                    c = [a, c.slice ? c.slice() : c],
                    b ? j.push(c) : k(c)),
                    this
            },
            fire: function() {
                return l.fireWith(this, arguments),
                    this
            },
            fired: function() {
                return !!d
            }
        };
        return l
    }
        ,
        ea.extend({
            Deferred: function(a) {
                var b = [["resolve", "done", ea.Callbacks("once memory"), "resolved"], ["reject", "fail", ea.Callbacks("once memory"), "rejected"], ["notify", "progress", ea.Callbacks("memory")]]
                    , c = "pending"
                    , d = {
                    state: function() {
                        return c
                    },
                    always: function() {
                        return e.done(arguments).fail(arguments),
                            this
                    },
                    then: function() {
                        var a = arguments;
                        return ea.Deferred(function(c) {
                            ea.each(b, function(b, f) {
                                var g = ea.isFunction(a[b]) && a[b];
                                e[f[1]](function() {
                                    var a = g && g.apply(this, arguments);
                                    a && ea.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                                })
                            }),
                                a = null
                        }).promise()
                    },
                    promise: function(a) {
                        return null != a ? ea.extend(a, d) : d
                    }
                }
                    , e = {};
                return d.pipe = d.then,
                    ea.each(b, function(a, f) {
                        var g = f[2]
                            , h = f[3];
                        d[f[1]] = g.add,
                        h && g.add(function() {
                            c = h
                        }, b[1 ^ a][2].disable, b[2][2].lock),
                            e[f[0]] = function() {
                                return e[f[0] + "With"](this === e ? d : this, arguments),
                                    this
                            }
                            ,
                            e[f[0] + "With"] = g.fireWith
                    }),
                    d.promise(e),
                a && a.call(e, e),
                    e
            },
            when: function(a) {
                var b, c, d, e = 0, f = X.call(arguments), g = f.length, h = 1 !== g || a && ea.isFunction(a.promise) ? g : 0, i = 1 === h ? a : ea.Deferred(), j = function(a, c, d) {
                    return function(e) {
                        c[a] = this,
                            d[a] = arguments.length > 1 ? X.call(arguments) : e,
                            d === b ? i.notifyWith(c, d) : --h || i.resolveWith(c, d)
                    }
                };
                if (g > 1)
                    for (b = new Array(g),
                             c = new Array(g),
                             d = new Array(g); e < g; e++)
                        f[e] && ea.isFunction(f[e].promise) ? f[e].promise().done(j(e, d, f)).fail(i.reject).progress(j(e, c, b)) : --h;
                return h || i.resolveWith(d, f),
                    i.promise()
            }
        });
    var va;
    ea.fn.ready = function(a) {
        return ea.ready.promise().done(a),
            this
    }
        ,
        ea.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function(a) {
                a ? ea.readyWait++ : ea.ready(!0)
            },
            ready: function(a) {
                if (a === !0 ? !--ea.readyWait : !ea.isReady) {
                    if (!oa.body)
                        return setTimeout(ea.ready);
                    ea.isReady = !0,
                    a !== !0 && --ea.readyWait > 0 || (va.resolveWith(oa, [ea]),
                    ea.fn.triggerHandler && (ea(oa).triggerHandler("ready"),
                        ea(oa).off("ready")))
                }
            }
        }),
        ea.ready.promise = function(b) {
            if (!va)
                if (va = ea.Deferred(),
                    "complete" === oa.readyState)
                    setTimeout(ea.ready);
                else if (oa.addEventListener)
                    oa.addEventListener("DOMContentLoaded", h, !1),
                        a.addEventListener("load", h, !1);
                else {
                    oa.attachEvent("onreadystatechange", h),
                        a.attachEvent("onload", h);
                    var c = !1;
                    try {
                        c = null == a.frameElement && oa.documentElement
                    } catch (d) {}
                    c && c.doScroll && !function e() {
                        if (!ea.isReady) {
                            try {
                                c.doScroll("left")
                            } catch (a) {
                                return setTimeout(e, 50)
                            }
                            g(),
                                ea.ready()
                        }
                    }()
                }
            return va.promise(b)
        }
    ;
    var wa, xa = "undefined";
    for (wa in ea(ca))
        break;
    ca.ownLast = "0" !== wa,
        ca.inlineBlockNeedsLayout = !1,
        ea(function() {
            var a, b, c, d;
            c = oa.getElementsByTagName("body")[0],
            c && c.style && (b = oa.createElement("div"),
                d = oa.createElement("div"),
                d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px",
                c.appendChild(d).appendChild(b),
            typeof b.style.zoom !== xa && (b.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",
                ca.inlineBlockNeedsLayout = a = 3 === b.offsetWidth,
            a && (c.style.zoom = 1)),
                c.removeChild(d))
        }),
        function() {
            var a = oa.createElement("div");
            if (null == ca.deleteExpando) {
                ca.deleteExpando = !0;
                try {
                    delete a.test
                } catch (b) {
                    ca.deleteExpando = !1
                }
            }
            a = null
        }(),
        ea.acceptData = function(a) {
            var b = ea.noData[(a.nodeName + " ").toLowerCase()]
                , c = +a.nodeType || 1;
            return (1 === c || 9 === c) && (!b || b !== !0 && a.getAttribute("classid") === b)
        }
    ;
    var ya = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
        , za = /([A-Z])/g;
    ea.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(a) {
            return a = a.nodeType ? ea.cache[a[ea.expando]] : a[ea.expando],
            !!a && !j(a)
        },
        data: function(a, b, c) {
            return k(a, b, c)
        },
        removeData: function(a, b) {
            return l(a, b)
        },
        _data: function(a, b, c) {
            return k(a, b, c, !0)
        },
        _removeData: function(a, b) {
            return l(a, b, !0)
        }
    }),
        ea.fn.extend({
            data: function(a, b) {
                var c, d, e, f = this[0], g = f && f.attributes;
                if (void 0 === a) {
                    if (this.length && (e = ea.data(f),
                        1 === f.nodeType && !ea._data(f, "parsedAttrs"))) {
                        for (c = g.length; c--; )
                            g[c] && (d = g[c].name,
                            0 === d.indexOf("data-") && (d = ea.camelCase(d.slice(5)),
                                i(f, d, e[d])));
                        ea._data(f, "parsedAttrs", !0)
                    }
                    return e
                }
                return "object" == typeof a ? this.each(function() {
                    ea.data(this, a)
                }) : arguments.length > 1 ? this.each(function() {
                    ea.data(this, a, b)
                }) : f ? i(f, a, ea.data(f, a)) : void 0
            },
            removeData: function(a) {
                return this.each(function() {
                    ea.removeData(this, a)
                })
            }
        }),
        ea.extend({
            queue: function(a, b, c) {
                var d;
                if (a)
                    return b = (b || "fx") + "queue",
                        d = ea._data(a, b),
                    c && (!d || ea.isArray(c) ? d = ea._data(a, b, ea.makeArray(c)) : d.push(c)),
                    d || []
            },
            dequeue: function(a, b) {
                b = b || "fx";
                var c = ea.queue(a, b)
                    , d = c.length
                    , e = c.shift()
                    , f = ea._queueHooks(a, b)
                    , g = function() {
                    ea.dequeue(a, b)
                };
                "inprogress" === e && (e = c.shift(),
                    d--),
                e && ("fx" === b && c.unshift("inprogress"),
                    delete f.stop,
                    e.call(a, g, f)),
                !d && f && f.empty.fire()
            },
            _queueHooks: function(a, b) {
                var c = b + "queueHooks";
                return ea._data(a, c) || ea._data(a, c, {
                    empty: ea.Callbacks("once memory").add(function() {
                        ea._removeData(a, b + "queue"),
                            ea._removeData(a, c)
                    })
                })
            }
        }),
        ea.fn.extend({
            queue: function(a, b) {
                var c = 2;
                return "string" != typeof a && (b = a,
                    a = "fx",
                    c--),
                    arguments.length < c ? ea.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                        var c = ea.queue(this, a, b);
                        ea._queueHooks(this, a),
                        "fx" === a && "inprogress" !== c[0] && ea.dequeue(this, a)
                    })
            },
            dequeue: function(a) {
                return this.each(function() {
                    ea.dequeue(this, a)
                })
            },
            clearQueue: function(a) {
                return this.queue(a || "fx", [])
            },
            promise: function(a, b) {
                var c, d = 1, e = ea.Deferred(), f = this, g = this.length, h = function() {
                    --d || e.resolveWith(f, [f])
                };
                for ("string" != typeof a && (b = a,
                    a = void 0),
                         a = a || "fx"; g--; )
                    c = ea._data(f[g], a + "queueHooks"),
                    c && c.empty && (d++,
                        c.empty.add(h));
                return h(),
                    e.promise(b)
            }
        });
    var Aa = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
        , Ba = ["Top", "Right", "Bottom", "Left"]
        , Ca = function(a, b) {
        return a = b || a,
        "none" === ea.css(a, "display") || !ea.contains(a.ownerDocument, a)
    }
        , Da = ea.access = function(a, b, c, d, e, f, g) {
        var h = 0
            , i = a.length
            , j = null == c;
        if ("object" === ea.type(c)) {
            e = !0;
            for (h in c)
                ea.access(a, b, h, c[h], !0, f, g)
        } else if (void 0 !== d && (e = !0,
            ea.isFunction(d) || (g = !0),
            j && (g ? (b.call(a, d),
                b = null) : (j = b,
                    b = function(a, b, c) {
                        return j.call(ea(a), c)
                    }
            )),
                b))
            for (; h < i; h++)
                b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
        return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
    }
        , Ea = /^(?:checkbox|radio)$/i;
    !function() {
        var a = oa.createElement("input")
            , b = oa.createElement("div")
            , c = oa.createDocumentFragment();
        if (b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
                ca.leadingWhitespace = 3 === b.firstChild.nodeType,
                ca.tbody = !b.getElementsByTagName("tbody").length,
                ca.htmlSerialize = !!b.getElementsByTagName("link").length,
                ca.html5Clone = "<:nav></:nav>" !== oa.createElement("nav").cloneNode(!0).outerHTML,
                a.type = "checkbox",
                a.checked = !0,
                c.appendChild(a),
                ca.appendChecked = a.checked,
                b.innerHTML = "<textarea>x</textarea>",
                ca.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue,
                c.appendChild(b),
                b.innerHTML = "<input type='radio' checked='checked' name='t'/>",
                ca.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked,
                ca.noCloneEvent = !0,
            b.attachEvent && (b.attachEvent("onclick", function() {
                ca.noCloneEvent = !1
            }),
                b.cloneNode(!0).click()),
            null == ca.deleteExpando) {
            ca.deleteExpando = !0;
            try {
                delete b.test
            } catch (d) {
                ca.deleteExpando = !1
            }
        }
    }(),
        function() {
            var b, c, d = oa.createElement("div");
            for (b in {
                submit: !0,
                change: !0,
                focusin: !0
            })
                c = "on" + b,
                (ca[b + "Bubbles"] = c in a) || (d.setAttribute(c, "t"),
                    ca[b + "Bubbles"] = d.attributes[c].expando === !1);
            d = null
        }();
    var Fa = /^(?:input|select|textarea)$/i
        , Ga = /^key/
        , Ha = /^(?:mouse|pointer|contextmenu)|click/
        , Ia = /^(?:focusinfocus|focusoutblur)$/
        , Ja = /^([^.]*)(?:\.(.+)|)$/;
    ea.event = {
        global: {},
        add: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = ea._data(a);
            if (q) {
                for (c.handler && (i = c,
                    c = i.handler,
                    e = i.selector),
                     c.guid || (c.guid = ea.guid++),
                     (g = q.events) || (g = q.events = {}),
                     (k = q.handle) || (k = q.handle = function(a) {
                         return typeof ea === xa || a && ea.event.triggered === a.type ? void 0 : ea.event.dispatch.apply(k.elem, arguments)
                     }
                         ,
                         k.elem = a),
                         b = (b || "").match(ta) || [""],
                         h = b.length; h--; )
                    f = Ja.exec(b[h]) || [],
                        n = p = f[1],
                        o = (f[2] || "").split(".").sort(),
                    n && (j = ea.event.special[n] || {},
                        n = (e ? j.delegateType : j.bindType) || n,
                        j = ea.event.special[n] || {},
                        l = ea.extend({
                            type: n,
                            origType: p,
                            data: d,
                            handler: c,
                            guid: c.guid,
                            selector: e,
                            needsContext: e && ea.expr.match.needsContext.test(e),
                            namespace: o.join(".")
                        }, i),
                    (m = g[n]) || (m = g[n] = [],
                        m.delegateCount = 0,
                    j.setup && j.setup.call(a, d, o, k) !== !1 || (a.addEventListener ? a.addEventListener(n, k, !1) : a.attachEvent && a.attachEvent("on" + n, k))),
                    j.add && (j.add.call(a, l),
                    l.handler.guid || (l.handler.guid = c.guid)),
                        e ? m.splice(m.delegateCount++, 0, l) : m.push(l),
                        ea.event.global[n] = !0);
                a = null
            }
        },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = ea.hasData(a) && ea._data(a);
            if (q && (k = q.events)) {
                for (b = (b || "").match(ta) || [""],
                         j = b.length; j--; )
                    if (h = Ja.exec(b[j]) || [],
                            n = p = h[1],
                            o = (h[2] || "").split(".").sort(),
                            n) {
                        for (l = ea.event.special[n] || {},
                                 n = (d ? l.delegateType : l.bindType) || n,
                                 m = k[n] || [],
                                 h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                                 i = f = m.length; f--; )
                            g = m[f],
                            !e && p !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (m.splice(f, 1),
                            g.selector && m.delegateCount--,
                            l.remove && l.remove.call(a, g));
                        i && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || ea.removeEvent(a, n, q.handle),
                            delete k[n])
                    } else
                        for (n in k)
                            ea.event.remove(a, n + b[j], c, d, !0);
                ea.isEmptyObject(k) && (delete q.handle,
                    ea._removeData(a, "events"))
            }
        },
        trigger: function(b, c, d, e) {
            var f, g, h, i, j, k, l, m = [d || oa], n = ba.call(b, "type") ? b.type : b, o = ba.call(b, "namespace") ? b.namespace.split(".") : [];
            if (h = k = d = d || oa,
                3 !== d.nodeType && 8 !== d.nodeType && !Ia.test(n + ea.event.triggered) && (n.indexOf(".") >= 0 && (o = n.split("."),
                    n = o.shift(),
                    o.sort()),
                    g = n.indexOf(":") < 0 && "on" + n,
                    b = b[ea.expando] ? b : new ea.Event(n,"object" == typeof b && b),
                    b.isTrigger = e ? 2 : 3,
                    b.namespace = o.join("."),
                    b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
                    b.result = void 0,
                b.target || (b.target = d),
                    c = null == c ? [b] : ea.makeArray(c, [b]),
                    j = ea.event.special[n] || {},
                e || !j.trigger || j.trigger.apply(d, c) !== !1)) {
                if (!e && !j.noBubble && !ea.isWindow(d)) {
                    for (i = j.delegateType || n,
                         Ia.test(i + n) || (h = h.parentNode); h; h = h.parentNode)
                        m.push(h),
                            k = h;
                    k === (d.ownerDocument || oa) && m.push(k.defaultView || k.parentWindow || a)
                }
                for (l = 0; (h = m[l++]) && !b.isPropagationStopped(); )
                    b.type = l > 1 ? i : j.bindType || n,
                        f = (ea._data(h, "events") || {})[b.type] && ea._data(h, "handle"),
                    f && f.apply(h, c),
                        f = g && h[g],
                    f && f.apply && ea.acceptData(h) && (b.result = f.apply(h, c),
                    b.result === !1 && b.preventDefault());
                if (b.type = n,
                    !e && !b.isDefaultPrevented() && (!j._default || j._default.apply(m.pop(), c) === !1) && ea.acceptData(d) && g && d[n] && !ea.isWindow(d)) {
                    k = d[g],
                    k && (d[g] = null),
                        ea.event.triggered = n;
                    try {
                        d[n]()
                    } catch (p) {}
                    ea.event.triggered = void 0,
                    k && (d[g] = k)
                }
                return b.result
            }
        },
        dispatch: function(a) {
            a = ea.event.fix(a);
            var b, c, d, e, f, g = [], h = X.call(arguments), i = (ea._data(this, "events") || {})[a.type] || [], j = ea.event.special[a.type] || {};
            if (h[0] = a,
                    a.delegateTarget = this,
                !j.preDispatch || j.preDispatch.call(this, a) !== !1) {
                for (g = ea.event.handlers.call(this, a, i),
                         b = 0; (e = g[b++]) && !a.isPropagationStopped(); )
                    for (a.currentTarget = e.elem,
                             f = 0; (d = e.handlers[f++]) && !a.isImmediatePropagationStopped(); )
                        a.namespace_re && !a.namespace_re.test(d.namespace) || (a.handleObj = d,
                            a.data = d.data,
                            c = ((ea.event.special[d.origType] || {}).handle || d.handler).apply(e.elem, h),
                        void 0 !== c && (a.result = c) === !1 && (a.preventDefault(),
                            a.stopPropagation()));
                return j.postDispatch && j.postDispatch.call(this, a),
                    a.result
            }
        },
        handlers: function(a, b) {
            var c, d, e, f, g = [], h = b.delegateCount, i = a.target;
            if (h && i.nodeType && (!a.button || "click" !== a.type))
                for (; i != this; i = i.parentNode || this)
                    if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
                        for (e = [],
                                 f = 0; f < h; f++)
                            d = b[f],
                                c = d.selector + " ",
                            void 0 === e[c] && (e[c] = d.needsContext ? ea(c, this).index(i) >= 0 : ea.find(c, this, null, [i]).length),
                            e[c] && e.push(d);
                        e.length && g.push({
                            elem: i,
                            handlers: e
                        })
                    }
            return h < b.length && g.push({
                elem: this,
                handlers: b.slice(h)
            }),
                g
        },
        fix: function(a) {
            if (a[ea.expando])
                return a;
            var b, c, d, e = a.type, f = a, g = this.fixHooks[e];
            for (g || (this.fixHooks[e] = g = Ha.test(e) ? this.mouseHooks : Ga.test(e) ? this.keyHooks : {}),
                     d = g.props ? this.props.concat(g.props) : this.props,
                     a = new ea.Event(f),
                     b = d.length; b--; )
                c = d[b],
                    a[c] = f[c];
            return a.target || (a.target = f.srcElement || oa),
            3 === a.target.nodeType && (a.target = a.target.parentNode),
                a.metaKey = !!a.metaKey,
                g.filter ? g.filter(a, f) : a
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode),
                    a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, b) {
                var c, d, e, f = b.button, g = b.fromElement;
                return null == a.pageX && null != b.clientX && (d = a.target.ownerDocument || oa,
                    e = d.documentElement,
                    c = d.body,
                    a.pageX = b.clientX + (e && e.scrollLeft || c && c.scrollLeft || 0) - (e && e.clientLeft || c && c.clientLeft || 0),
                    a.pageY = b.clientY + (e && e.scrollTop || c && c.scrollTop || 0) - (e && e.clientTop || c && c.clientTop || 0)),
                !a.relatedTarget && g && (a.relatedTarget = g === a.target ? b.toElement : g),
                a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0),
                    a
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== o() && this.focus)
                        try {
                            return this.focus(),
                                !1
                        } catch (a) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === o() && this.blur)
                        return this.blur(),
                            !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if (ea.nodeName(this, "input") && "checkbox" === this.type && this.click)
                        return this.click(),
                            !1
                },
                _default: function(a) {
                    return ea.nodeName(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        },
        simulate: function(a, b, c, d) {
            var e = ea.extend(new ea.Event, c, {
                type: a,
                isSimulated: !0,
                originalEvent: {}
            });
            d ? ea.event.trigger(e, null, b) : ea.event.dispatch.call(b, e),
            e.isDefaultPrevented() && c.preventDefault()
        }
    },
        ea.removeEvent = oa.removeEventListener ? function(a, b, c) {
                a.removeEventListener && a.removeEventListener(b, c, !1)
            }
            : function(a, b, c) {
                var d = "on" + b;
                a.detachEvent && (typeof a[d] === xa && (a[d] = null),
                    a.detachEvent(d, c))
            }
        ,
        ea.Event = function(a, b) {
            return this instanceof ea.Event ? (a && a.type ? (this.originalEvent = a,
                this.type = a.type,
                this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? m : n) : this.type = a,
            b && ea.extend(this, b),
                this.timeStamp = a && a.timeStamp || ea.now(),
                void (this[ea.expando] = !0)) : new ea.Event(a,b)
        }
        ,
        ea.Event.prototype = {
            isDefaultPrevented: n,
            isPropagationStopped: n,
            isImmediatePropagationStopped: n,
            preventDefault: function() {
                var a = this.originalEvent;
                this.isDefaultPrevented = m,
                a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
            },
            stopPropagation: function() {
                var a = this.originalEvent;
                this.isPropagationStopped = m,
                a && (a.stopPropagation && a.stopPropagation(),
                    a.cancelBubble = !0)
            },
            stopImmediatePropagation: function() {
                var a = this.originalEvent;
                this.isImmediatePropagationStopped = m,
                a && a.stopImmediatePropagation && a.stopImmediatePropagation(),
                    this.stopPropagation()
            }
        },
        ea.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(a, b) {
            ea.event.special[a] = {
                delegateType: b,
                bindType: b,
                handle: function(a) {
                    var c, d = this, e = a.relatedTarget, f = a.handleObj;
                    return e && (e === d || ea.contains(d, e)) || (a.type = f.origType,
                        c = f.handler.apply(this, arguments),
                        a.type = b),
                        c
                }
            }
        }),
    ca.submitBubbles || (ea.event.special.submit = {
        setup: function() {
            return !ea.nodeName(this, "form") && void ea.event.add(this, "click._submit keypress._submit", function(a) {
                var b = a.target
                    , c = ea.nodeName(b, "input") || ea.nodeName(b, "button") ? b.form : void 0;
                c && !ea._data(c, "submitBubbles") && (ea.event.add(c, "submit._submit", function(a) {
                    a._submit_bubble = !0
                }),
                    ea._data(c, "submitBubbles", !0))
            })
        },
        postDispatch: function(a) {
            a._submit_bubble && (delete a._submit_bubble,
            this.parentNode && !a.isTrigger && ea.event.simulate("submit", this.parentNode, a, !0))
        },
        teardown: function() {
            return !ea.nodeName(this, "form") && void ea.event.remove(this, "._submit")
        }
    }),
    ca.changeBubbles || (ea.event.special.change = {
        setup: function() {
            return Fa.test(this.nodeName) ? ("checkbox" !== this.type && "radio" !== this.type || (ea.event.add(this, "propertychange._change", function(a) {
                "checked" === a.originalEvent.propertyName && (this._just_changed = !0)
            }),
                ea.event.add(this, "click._change", function(a) {
                    this._just_changed && !a.isTrigger && (this._just_changed = !1),
                        ea.event.simulate("change", this, a, !0)
                })),
                !1) : void ea.event.add(this, "beforeactivate._change", function(a) {
                var b = a.target;
                Fa.test(b.nodeName) && !ea._data(b, "changeBubbles") && (ea.event.add(b, "change._change", function(a) {
                    !this.parentNode || a.isSimulated || a.isTrigger || ea.event.simulate("change", this.parentNode, a, !0)
                }),
                    ea._data(b, "changeBubbles", !0))
            })
        },
        handle: function(a) {
            var b = a.target;
            if (this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type)
                return a.handleObj.handler.apply(this, arguments)
        },
        teardown: function() {
            return ea.event.remove(this, "._change"),
                !Fa.test(this.nodeName)
        }
    }),
    ca.focusinBubbles || ea.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var c = function(a) {
            ea.event.simulate(b, a.target, ea.event.fix(a), !0)
        };
        ea.event.special[b] = {
            setup: function() {
                var d = this.ownerDocument || this
                    , e = ea._data(d, b);
                e || d.addEventListener(a, c, !0),
                    ea._data(d, b, (e || 0) + 1)
            },
            teardown: function() {
                var d = this.ownerDocument || this
                    , e = ea._data(d, b) - 1;
                e ? ea._data(d, b, e) : (d.removeEventListener(a, c, !0),
                    ea._removeData(d, b))
            }
        }
    }),
        ea.fn.extend({
            on: function(a, b, c, d, e) {
                var f, g;
                if ("object" == typeof a) {
                    "string" != typeof b && (c = c || b,
                        b = void 0);
                    for (f in a)
                        this.on(f, b, c, a[f], e);
                    return this
                }
                if (null == c && null == d ? (d = b,
                        c = b = void 0) : null == d && ("string" == typeof b ? (d = c,
                        c = void 0) : (d = c,
                        c = b,
                        b = void 0)),
                    d === !1)
                    d = n;
                else if (!d)
                    return this;
                return 1 === e && (g = d,
                    d = function(a) {
                        return ea().off(a),
                            g.apply(this, arguments)
                    }
                    ,
                    d.guid = g.guid || (g.guid = ea.guid++)),
                    this.each(function() {
                        ea.event.add(this, a, d, c, b)
                    })
            },
            one: function(a, b, c, d) {
                return this.on(a, b, c, d, 1)
            },
            off: function(a, b, c) {
                var d, e;
                if (a && a.preventDefault && a.handleObj)
                    return d = a.handleObj,
                        ea(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler),
                        this;
                if ("object" == typeof a) {
                    for (e in a)
                        this.off(e, b, a[e]);
                    return this
                }
                return b !== !1 && "function" != typeof b || (c = b,
                    b = void 0),
                c === !1 && (c = n),
                    this.each(function() {
                        ea.event.remove(this, a, c, b)
                    })
            },
            trigger: function(a, b) {
                return this.each(function() {
                    ea.event.trigger(a, b, this)
                })
            },
            triggerHandler: function(a, b) {
                var c = this[0];
                if (c)
                    return ea.event.trigger(a, b, c, !0)
            }
        });
    var Ka = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video"
        , La = / jQuery\d+="(?:null|\d+)"/g
        , Ma = new RegExp("<(?:" + Ka + ")[\\s/>]","i")
        , Na = /^\s+/
        , Oa = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi
        , Pa = /<([\w:]+)/
        , Qa = /<tbody/i
        , Ra = /<|&#?\w+;/
        , Sa = /<(?:script|style|link)/i
        , Ta = /checked\s*(?:[^=]|=\s*.checked.)/i
        , Ua = /^$|\/(?:java|ecma)script/i
        , Va = /^true\/(.*)/
        , Wa = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g
        , Xa = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: ca.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    }
        , Ya = p(oa)
        , Za = Ya.appendChild(oa.createElement("div"));
    Xa.optgroup = Xa.option,
        Xa.tbody = Xa.tfoot = Xa.colgroup = Xa.caption = Xa.thead,
        Xa.th = Xa.td,
        ea.extend({
            clone: function(a, b, c) {
                var d, e, f, g, h, i = ea.contains(a.ownerDocument, a);
                if (ca.html5Clone || ea.isXMLDoc(a) || !Ma.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (Za.innerHTML = a.outerHTML,
                        Za.removeChild(f = Za.firstChild)),
                        !(ca.noCloneEvent && ca.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || ea.isXMLDoc(a)))
                    for (d = q(f),
                             h = q(a),
                             g = 0; null != (e = h[g]); ++g)
                        d[g] && x(e, d[g]);
                if (b)
                    if (c)
                        for (h = h || q(a),
                                 d = d || q(f),
                                 g = 0; null != (e = h[g]); g++)
                            w(e, d[g]);
                    else
                        w(a, f);
                return d = q(f, "script"),
                d.length > 0 && v(d, !i && q(a, "script")),
                    d = h = e = null,
                    f
            },
            buildFragment: function(a, b, c, d) {
                for (var e, f, g, h, i, j, k, l = a.length, m = p(b), n = [], o = 0; o < l; o++)
                    if (f = a[o],
                        f || 0 === f)
                        if ("object" === ea.type(f))
                            ea.merge(n, f.nodeType ? [f] : f);
                        else if (Ra.test(f)) {
                            for (h = h || m.appendChild(b.createElement("div")),
                                     i = (Pa.exec(f) || ["", ""])[1].toLowerCase(),
                                     k = Xa[i] || Xa._default,
                                     h.innerHTML = k[1] + f.replace(Oa, "<$1></$2>") + k[2],
                                     e = k[0]; e--; )
                                h = h.lastChild;
                            if (!ca.leadingWhitespace && Na.test(f) && n.push(b.createTextNode(Na.exec(f)[0])),
                                    !ca.tbody)
                                for (f = "table" !== i || Qa.test(f) ? "<table>" !== k[1] || Qa.test(f) ? 0 : h : h.firstChild,
                                         e = f && f.childNodes.length; e--; )
                                    ea.nodeName(j = f.childNodes[e], "tbody") && !j.childNodes.length && f.removeChild(j);
                            for (ea.merge(n, h.childNodes),
                                     h.textContent = ""; h.firstChild; )
                                h.removeChild(h.firstChild);
                            h = m.lastChild
                        } else
                            n.push(b.createTextNode(f));
                for (h && m.removeChild(h),
                     ca.appendChecked || ea.grep(q(n, "input"), r),
                         o = 0; f = n[o++]; )
                    if ((!d || ea.inArray(f, d) === -1) && (g = ea.contains(f.ownerDocument, f),
                            h = q(m.appendChild(f), "script"),
                        g && v(h),
                            c))
                        for (e = 0; f = h[e++]; )
                            Ua.test(f.type || "") && c.push(f);
                return h = null,
                    m
            },
            cleanData: function(a, b) {
                for (var c, d, e, f, g = 0, h = ea.expando, i = ea.cache, j = ca.deleteExpando, k = ea.event.special; null != (c = a[g]); g++)
                    if ((b || ea.acceptData(c)) && (e = c[h],
                            f = e && i[e])) {
                        if (f.events)
                            for (d in f.events)
                                k[d] ? ea.event.remove(c, d) : ea.removeEvent(c, d, f.handle);
                        i[e] && (delete i[e],
                            j ? delete c[h] : typeof c.removeAttribute !== xa ? c.removeAttribute(h) : c[h] = null,
                            W.push(e))
                    }
            }
        }),
        ea.fn.extend({
            text: function(a) {
                return Da(this, function(a) {
                    return void 0 === a ? ea.text(this) : this.empty().append((this[0] && this[0].ownerDocument || oa).createTextNode(a))
                }, null, a, arguments.length)
            },
            append: function() {
                return this.domManip(arguments, function(a) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var b = s(this, a);
                        b.appendChild(a)
                    }
                })
            },
            prepend: function() {
                return this.domManip(arguments, function(a) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var b = s(this, a);
                        b.insertBefore(a, b.firstChild)
                    }
                })
            },
            before: function() {
                return this.domManip(arguments, function(a) {
                    this.parentNode && this.parentNode.insertBefore(a, this)
                })
            },
            after: function() {
                return this.domManip(arguments, function(a) {
                    this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
                })
            },
            remove: function(a, b) {
                for (var c, d = a ? ea.filter(a, this) : this, e = 0; null != (c = d[e]); e++)
                    b || 1 !== c.nodeType || ea.cleanData(q(c)),
                    c.parentNode && (b && ea.contains(c.ownerDocument, c) && v(q(c, "script")),
                        c.parentNode.removeChild(c));
                return this
            },
            empty: function() {
                for (var a, b = 0; null != (a = this[b]); b++) {
                    for (1 === a.nodeType && ea.cleanData(q(a, !1)); a.firstChild; )
                        a.removeChild(a.firstChild);
                    a.options && ea.nodeName(a, "select") && (a.options.length = 0)
                }
                return this
            },
            clone: function(a, b) {
                return a = null != a && a,
                    b = null == b ? a : b,
                    this.map(function() {
                        return ea.clone(this, a, b)
                    })
            },
            html: function(a) {
                return Da(this, function(a) {
                    var b = this[0] || {}
                        , c = 0
                        , d = this.length;
                    if (void 0 === a)
                        return 1 === b.nodeType ? b.innerHTML.replace(La, "") : void 0;
                    if ("string" == typeof a && !Sa.test(a) && (ca.htmlSerialize || !Ma.test(a)) && (ca.leadingWhitespace || !Na.test(a)) && !Xa[(Pa.exec(a) || ["", ""])[1].toLowerCase()]) {
                        a = a.replace(Oa, "<$1></$2>");
                        try {
                            for (; c < d; c++)
                                b = this[c] || {},
                                1 === b.nodeType && (ea.cleanData(q(b, !1)),
                                    b.innerHTML = a);
                            b = 0
                        } catch (e) {}
                    }
                    b && this.empty().append(a)
                }, null, a, arguments.length)
            },
            replaceWith: function() {
                var a = arguments[0];
                return this.domManip(arguments, function(b) {
                    a = this.parentNode,
                        ea.cleanData(q(this)),
                    a && a.replaceChild(b, this)
                }),
                    a && (a.length || a.nodeType) ? this : this.remove()
            },
            detach: function(a) {
                return this.remove(a, !0)
            },
            domManip: function(a, b) {
                a = Y.apply([], a);
                var c, d, e, f, g, h, i = 0, j = this.length, k = this, l = j - 1, m = a[0], n = ea.isFunction(m);
                if (n || j > 1 && "string" == typeof m && !ca.checkClone && Ta.test(m))
                    return this.each(function(c) {
                        var d = k.eq(c);
                        n && (a[0] = m.call(this, c, d.html())),
                            d.domManip(a, b)
                    });
                if (j && (h = ea.buildFragment(a, this[0].ownerDocument, !1, this),
                        c = h.firstChild,
                    1 === h.childNodes.length && (h = c),
                        c)) {
                    for (f = ea.map(q(h, "script"), t),
                             e = f.length; i < j; i++)
                        d = h,
                        i !== l && (d = ea.clone(d, !0, !0),
                        e && ea.merge(f, q(d, "script"))),
                            b.call(this[i], d, i);
                    if (e)
                        for (g = f[f.length - 1].ownerDocument,
                                 ea.map(f, u),
                                 i = 0; i < e; i++)
                            d = f[i],
                            Ua.test(d.type || "") && !ea._data(d, "globalEval") && ea.contains(g, d) && (d.src ? ea._evalUrl && ea._evalUrl(d.src) : ea.globalEval((d.text || d.textContent || d.innerHTML || "").replace(Wa, "")));
                    h = c = null
                }
                return this
            }
        }),
        ea.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(a, b) {
            ea.fn[a] = function(a) {
                for (var c, d = 0, e = [], f = ea(a), g = f.length - 1; d <= g; d++)
                    c = d === g ? this : this.clone(!0),
                        ea(f[d])[b](c),
                        Z.apply(e, c.get());
                return this.pushStack(e)
            }
        });
    var $a, _a = {};
    !function() {
        var a;
        ca.shrinkWrapBlocks = function() {
            if (null != a)
                return a;
            a = !1;
            var b, c, d;
            return c = oa.getElementsByTagName("body")[0],
                c && c.style ? (b = oa.createElement("div"),
                    d = oa.createElement("div"),
                    d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px",
                    c.appendChild(d).appendChild(b),
                typeof b.style.zoom !== xa && (b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",
                    b.appendChild(oa.createElement("div")).style.width = "5px",
                    a = 3 !== b.offsetWidth),
                    c.removeChild(d),
                    a) : void 0
        }
    }();
    var ab, bb, cb = /^margin/, db = new RegExp("^(" + Aa + ")(?!px)[a-z%]+$","i"), eb = /^(top|right|bottom|left)$/;
    a.getComputedStyle ? (ab = function(b) {
            return b.ownerDocument.defaultView.opener ? b.ownerDocument.defaultView.getComputedStyle(b, null) : a.getComputedStyle(b, null)
        }
            ,
            bb = function(a, b, c) {
                var d, e, f, g, h = a.style;
                return c = c || ab(a),
                    g = c ? c.getPropertyValue(b) || c[b] : void 0,
                c && ("" !== g || ea.contains(a.ownerDocument, a) || (g = ea.style(a, b)),
                db.test(g) && cb.test(b) && (d = h.width,
                    e = h.minWidth,
                    f = h.maxWidth,
                    h.minWidth = h.maxWidth = h.width = g,
                    g = c.width,
                    h.width = d,
                    h.minWidth = e,
                    h.maxWidth = f)),
                    void 0 === g ? g : g + ""
            }
    ) : oa.documentElement.currentStyle && (ab = function(a) {
            return a.currentStyle
        }
            ,
            bb = function(a, b, c) {
                var d, e, f, g, h = a.style;
                return c = c || ab(a),
                    g = c ? c[b] : void 0,
                null == g && h && h[b] && (g = h[b]),
                db.test(g) && !eb.test(b) && (d = h.left,
                    e = a.runtimeStyle,
                    f = e && e.left,
                f && (e.left = a.currentStyle.left),
                    h.left = "fontSize" === b ? "1em" : g,
                    g = h.pixelLeft + "px",
                    h.left = d,
                f && (e.left = f)),
                    void 0 === g ? g : g + "" || "auto"
            }
    ),
        function() {
            function b() {
                var b, c, d, e;
                c = oa.getElementsByTagName("body")[0],
                c && c.style && (b = oa.createElement("div"),
                    d = oa.createElement("div"),
                    d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px",
                    c.appendChild(d).appendChild(b),
                    b.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",
                    f = g = !1,
                    i = !0,
                a.getComputedStyle && (f = "1%" !== (a.getComputedStyle(b, null) || {}).top,
                    g = "4px" === (a.getComputedStyle(b, null) || {
                        width: "4px"
                    }).width,
                    e = b.appendChild(oa.createElement("div")),
                    e.style.cssText = b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",
                    e.style.marginRight = e.style.width = "0",
                    b.style.width = "1px",
                    i = !parseFloat((a.getComputedStyle(e, null) || {}).marginRight),
                    b.removeChild(e)),
                    b.innerHTML = "<table><tr><td></td><td>t</td></tr></table>",
                    e = b.getElementsByTagName("td"),
                    e[0].style.cssText = "margin:0;border:0;padding:0;display:none",
                    h = 0 === e[0].offsetHeight,
                h && (e[0].style.display = "",
                    e[1].style.display = "none",
                    h = 0 === e[0].offsetHeight),
                    c.removeChild(d))
            }
            var c, d, e, f, g, h, i;
            c = oa.createElement("div"),
                c.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
                e = c.getElementsByTagName("a")[0],
                d = e && e.style,
            d && (d.cssText = "float:left;opacity:.5",
                ca.opacity = "0.5" === d.opacity,
                ca.cssFloat = !!d.cssFloat,
                c.style.backgroundClip = "content-box",
                c.cloneNode(!0).style.backgroundClip = "",
                ca.clearCloneStyle = "content-box" === c.style.backgroundClip,
                ca.boxSizing = "" === d.boxSizing || "" === d.MozBoxSizing || "" === d.WebkitBoxSizing,
                ea.extend(ca, {
                    reliableHiddenOffsets: function() {
                        return null == h && b(),
                            h
                    },
                    boxSizingReliable: function() {
                        return null == g && b(),
                            g
                    },
                    pixelPosition: function() {
                        return null == f && b(),
                            f
                    },
                    reliableMarginRight: function() {
                        return null == i && b(),
                            i
                    }
                }))
        }(),
        ea.swap = function(a, b, c, d) {
            var e, f, g = {};
            for (f in b)
                g[f] = a.style[f],
                    a.style[f] = b[f];
            e = c.apply(a, d || []);
            for (f in b)
                a.style[f] = g[f];
            return e
        }
    ;
    var fb = /alpha\([^)]*\)/i
        , gb = /opacity\s*=\s*([^)]*)/
        , hb = /^(none|table(?!-c[ea]).+)/
        , ib = new RegExp("^(" + Aa + ")(.*)$","i")
        , jb = new RegExp("^([+-])=(" + Aa + ")","i")
        , kb = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
        , lb = {
        letterSpacing: "0",
        fontWeight: "400"
    }
        , mb = ["Webkit", "O", "Moz", "ms"];
    ea.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = bb(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": ca.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = ea.camelCase(b), i = a.style;
                if (b = ea.cssProps[h] || (ea.cssProps[h] = B(i, h)),
                        g = ea.cssHooks[b] || ea.cssHooks[h],
                    void 0 === c)
                    return g && "get"in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b];
                if (f = typeof c,
                    "string" === f && (e = jb.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(ea.css(a, b)),
                        f = "number"),
                    null != c && c === c && ("number" !== f || ea.cssNumber[h] || (c += "px"),
                    ca.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"),
                        !(g && "set"in g && void 0 === (c = g.set(a, c, d)))))
                    try {
                        i[b] = c
                    } catch (j) {}
            }
        },
        css: function(a, b, c, d) {
            var e, f, g, h = ea.camelCase(b);
            return b = ea.cssProps[h] || (ea.cssProps[h] = B(a.style, h)),
                g = ea.cssHooks[b] || ea.cssHooks[h],
            g && "get"in g && (f = g.get(a, !0, c)),
            void 0 === f && (f = bb(a, b, d)),
            "normal" === f && b in lb && (f = lb[b]),
                "" === c || c ? (e = parseFloat(f),
                    c === !0 || ea.isNumeric(e) ? e || 0 : f) : f
        }
    }),
        ea.each(["height", "width"], function(a, b) {
            ea.cssHooks[b] = {
                get: function(a, c, d) {
                    if (c)
                        return hb.test(ea.css(a, "display")) && 0 === a.offsetWidth ? ea.swap(a, kb, function() {
                            return F(a, b, d)
                        }) : F(a, b, d)
                },
                set: function(a, c, d) {
                    var e = d && ab(a);
                    return D(a, c, d ? E(a, b, d, ca.boxSizing && "border-box" === ea.css(a, "boxSizing", !1, e), e) : 0)
                }
            }
        }),
    ca.opacity || (ea.cssHooks.opacity = {
        get: function(a, b) {
            return gb.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""
        },
        set: function(a, b) {
            var c = a.style
                , d = a.currentStyle
                , e = ea.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : ""
                , f = d && d.filter || c.filter || "";
            c.zoom = 1,
            (b >= 1 || "" === b) && "" === ea.trim(f.replace(fb, "")) && c.removeAttribute && (c.removeAttribute("filter"),
            "" === b || d && !d.filter) || (c.filter = fb.test(f) ? f.replace(fb, e) : f + " " + e)
        }
    }),
        ea.cssHooks.marginRight = A(ca.reliableMarginRight, function(a, b) {
            if (b)
                return ea.swap(a, {
                    display: "inline-block"
                }, bb, [a, "marginRight"])
        }),
        ea.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(a, b) {
            ea.cssHooks[a + b] = {
                expand: function(c) {
                    for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; d < 4; d++)
                        e[a + Ba[d] + b] = f[d] || f[d - 2] || f[0];
                    return e
                }
            },
            cb.test(a) || (ea.cssHooks[a + b].set = D)
        }),
        ea.fn.extend({
            css: function(a, b) {
                return Da(this, function(a, b, c) {
                    var d, e, f = {}, g = 0;
                    if (ea.isArray(b)) {
                        for (d = ab(a),
                                 e = b.length; g < e; g++)
                            f[b[g]] = ea.css(a, b[g], !1, d);
                        return f
                    }
                    return void 0 !== c ? ea.style(a, b, c) : ea.css(a, b)
                }, a, b, arguments.length > 1)
            },
            show: function() {
                return C(this, !0)
            },
            hide: function() {
                return C(this)
            },
            toggle: function(a) {
                return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                    Ca(this) ? ea(this).show() : ea(this).hide()
                })
            }
        }),
        ea.Tween = G,
        G.prototype = {
            constructor: G,
            init: function(a, b, c, d, e, f) {
                this.elem = a,
                    this.prop = c,
                    this.easing = e || "swing",
                    this.options = b,
                    this.start = this.now = this.cur(),
                    this.end = d,
                    this.unit = f || (ea.cssNumber[c] ? "" : "px")
            },
            cur: function() {
                var a = G.propHooks[this.prop];
                return a && a.get ? a.get(this) : G.propHooks._default.get(this)
            },
            run: function(a) {
                var b, c = G.propHooks[this.prop];
                return this.options.duration ? this.pos = b = ea.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a,
                    this.now = (this.end - this.start) * b + this.start,
                this.options.step && this.options.step.call(this.elem, this.now, this),
                    c && c.set ? c.set(this) : G.propHooks._default.set(this),
                    this
            }
        },
        G.prototype.init.prototype = G.prototype,
        G.propHooks = {
            _default: {
                get: function(a) {
                    var b;
                    return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = ea.css(a.elem, a.prop, ""),
                        b && "auto" !== b ? b : 0) : a.elem[a.prop]
                },
                set: function(a) {
                    ea.fx.step[a.prop] ? ea.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[ea.cssProps[a.prop]] || ea.cssHooks[a.prop]) ? ea.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
                }
            }
        },
        G.propHooks.scrollTop = G.propHooks.scrollLeft = {
            set: function(a) {
                a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
            }
        },
        ea.easing = {
            linear: function(a) {
                return a
            },
            swing: function(a) {
                return .5 - Math.cos(a * Math.PI) / 2
            }
        },
        ea.fx = G.prototype.init,
        ea.fx.step = {};
    var nb, ob, pb = /^(?:toggle|show|hide)$/, qb = new RegExp("^(?:([+-])=|)(" + Aa + ")([a-z%]*)$","i"), rb = /queueHooks$/, sb = [K], tb = {
        "*": [function(a, b) {
            var c = this.createTween(a, b)
                , d = c.cur()
                , e = qb.exec(b)
                , f = e && e[3] || (ea.cssNumber[a] ? "" : "px")
                , g = (ea.cssNumber[a] || "px" !== f && +d) && qb.exec(ea.css(c.elem, a))
                , h = 1
                , i = 20;
            if (g && g[3] !== f) {
                f = f || g[3],
                    e = e || [],
                    g = +d || 1;
                do
                    h = h || ".5",
                        g /= h,
                        ea.style(c.elem, a, g + f);
                while (h !== (h = c.cur() / d) && 1 !== h && --i)
            }
            return e && (g = c.start = +g || +d || 0,
                c.unit = f,
                c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]),
                c
        }
        ]
    };
    ea.Animation = ea.extend(M, {
        tweener: function(a, b) {
            ea.isFunction(a) ? (b = a,
                a = ["*"]) : a = a.split(" ");
            for (var c, d = 0, e = a.length; d < e; d++)
                c = a[d],
                    tb[c] = tb[c] || [],
                    tb[c].unshift(b)
        },
        prefilter: function(a, b) {
            b ? sb.unshift(a) : sb.push(a)
        }
    }),
        ea.speed = function(a, b, c) {
            var d = a && "object" == typeof a ? ea.extend({}, a) : {
                complete: c || !c && b || ea.isFunction(a) && a,
                duration: a,
                easing: c && b || b && !ea.isFunction(b) && b
            };
            return d.duration = ea.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in ea.fx.speeds ? ea.fx.speeds[d.duration] : ea.fx.speeds._default,
            null != d.queue && d.queue !== !0 || (d.queue = "fx"),
                d.old = d.complete,
                d.complete = function() {
                    ea.isFunction(d.old) && d.old.call(this),
                    d.queue && ea.dequeue(this, d.queue)
                }
                ,
                d
        }
        ,
        ea.fn.extend({
            fadeTo: function(a, b, c, d) {
                return this.filter(Ca).css("opacity", 0).show().end().animate({
                    opacity: b
                }, a, c, d)
            },
            animate: function(a, b, c, d) {
                var e = ea.isEmptyObject(a)
                    , f = ea.speed(b, c, d)
                    , g = function() {
                    var b = M(this, ea.extend({}, a), f);
                    (e || ea._data(this, "finish")) && b.stop(!0)
                };
                return g.finish = g,
                    e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
            },
            stop: function(a, b, c) {
                var d = function(a) {
                    var b = a.stop;
                    delete a.stop,
                        b(c)
                };
                return "string" != typeof a && (c = b,
                    b = a,
                    a = void 0),
                b && a !== !1 && this.queue(a || "fx", []),
                    this.each(function() {
                        var b = !0
                            , e = null != a && a + "queueHooks"
                            , f = ea.timers
                            , g = ea._data(this);
                        if (e)
                            g[e] && g[e].stop && d(g[e]);
                        else
                            for (e in g)
                                g[e] && g[e].stop && rb.test(e) && d(g[e]);
                        for (e = f.length; e--; )
                            f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c),
                                b = !1,
                                f.splice(e, 1));
                        !b && c || ea.dequeue(this, a)
                    })
            },
            finish: function(a) {
                return a !== !1 && (a = a || "fx"),
                    this.each(function() {
                        var b, c = ea._data(this), d = c[a + "queue"], e = c[a + "queueHooks"], f = ea.timers, g = d ? d.length : 0;
                        for (c.finish = !0,
                                 ea.queue(this, a, []),
                             e && e.stop && e.stop.call(this, !0),
                                 b = f.length; b--; )
                            f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0),
                                f.splice(b, 1));
                        for (b = 0; b < g; b++)
                            d[b] && d[b].finish && d[b].finish.call(this);
                        delete c.finish
                    })
            }
        }),
        ea.each(["toggle", "show", "hide"], function(a, b) {
            var c = ea.fn[b];
            ea.fn[b] = function(a, d, e) {
                return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(I(b, !0), a, d, e)
            }
        }),
        ea.each({
            slideDown: I("show"),
            slideUp: I("hide"),
            slideToggle: I("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(a, b) {
            ea.fn[a] = function(a, c, d) {
                return this.animate(b, a, c, d)
            }
        }),
        ea.timers = [],
        ea.fx.tick = function() {
            var a, b = ea.timers, c = 0;
            for (nb = ea.now(); c < b.length; c++)
                a = b[c],
                a() || b[c] !== a || b.splice(c--, 1);
            b.length || ea.fx.stop(),
                nb = void 0
        }
        ,
        ea.fx.timer = function(a) {
            ea.timers.push(a),
                a() ? ea.fx.start() : ea.timers.pop()
        }
        ,
        ea.fx.interval = 13,
        ea.fx.start = function() {
            ob || (ob = setInterval(ea.fx.tick, ea.fx.interval))
        }
        ,
        ea.fx.stop = function() {
            clearInterval(ob),
                ob = null
        }
        ,
        ea.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        },
        ea.fn.delay = function(a, b) {
            return a = ea.fx ? ea.fx.speeds[a] || a : a,
                b = b || "fx",
                this.queue(b, function(b, c) {
                    var d = setTimeout(b, a);
                    c.stop = function() {
                        clearTimeout(d)
                    }
                })
        }
        ,
        function() {
            var a, b, c, d, e;
            b = oa.createElement("div"),
                b.setAttribute("className", "t"),
                b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
                d = b.getElementsByTagName("a")[0],
                c = oa.createElement("select"),
                e = c.appendChild(oa.createElement("option")),
                a = b.getElementsByTagName("input")[0],
                d.style.cssText = "top:1px",
                ca.getSetAttribute = "t" !== b.className,
                ca.style = /top/.test(d.getAttribute("style")),
                ca.hrefNormalized = "/a" === d.getAttribute("href"),
                ca.checkOn = !!a.value,
                ca.optSelected = e.selected,
                ca.enctype = !!oa.createElement("form").enctype,
                c.disabled = !0,
                ca.optDisabled = !e.disabled,
                a = oa.createElement("input"),
                a.setAttribute("value", ""),
                ca.input = "" === a.getAttribute("value"),
                a.value = "t",
                a.setAttribute("type", "radio"),
                ca.radioValue = "t" === a.value
        }();
    var ub = /\r/g;
    ea.fn.extend({
        val: function(a) {
            var b, c, d, e = this[0];
            {
                if (arguments.length)
                    return d = ea.isFunction(a),
                        this.each(function(c) {
                            var e;
                            1 === this.nodeType && (e = d ? a.call(this, c, ea(this).val()) : a,
                                null == e ? e = "" : "number" == typeof e ? e += "" : ea.isArray(e) && (e = ea.map(e, function(a) {
                                    return null == a ? "" : a + ""
                                })),
                                b = ea.valHooks[this.type] || ea.valHooks[this.nodeName.toLowerCase()],
                            b && "set"in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                        });
                if (e)
                    return b = ea.valHooks[e.type] || ea.valHooks[e.nodeName.toLowerCase()],
                        b && "get"in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value,
                            "string" == typeof c ? c.replace(ub, "") : null == c ? "" : c)
            }
        }
    }),
        ea.extend({
            valHooks: {
                option: {
                    get: function(a) {
                        var b = ea.find.attr(a, "value");
                        return null != b ? b : ea.trim(ea.text(a))
                    }
                },
                select: {
                    get: function(a) {
                        for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || e < 0, g = f ? null : [], h = f ? e + 1 : d.length, i = e < 0 ? h : f ? e : 0; i < h; i++)
                            if (c = d[i],
                                (c.selected || i === e) && (ca.optDisabled ? !c.disabled : null === c.getAttribute("disabled")) && (!c.parentNode.disabled || !ea.nodeName(c.parentNode, "optgroup"))) {
                                if (b = ea(c).val(),
                                        f)
                                    return b;
                                g.push(b)
                            }
                        return g
                    },
                    set: function(a, b) {
                        for (var c, d, e = a.options, f = ea.makeArray(b), g = e.length; g--; )
                            if (d = e[g],
                                ea.inArray(ea.valHooks.option.get(d), f) >= 0)
                                try {
                                    d.selected = c = !0
                                } catch (h) {
                                    d.scrollHeight
                                }
                            else
                                d.selected = !1;
                        return c || (a.selectedIndex = -1),
                            e
                    }
                }
            }
        }),
        ea.each(["radio", "checkbox"], function() {
            ea.valHooks[this] = {
                set: function(a, b) {
                    if (ea.isArray(b))
                        return a.checked = ea.inArray(ea(a).val(), b) >= 0
                }
            },
            ca.checkOn || (ea.valHooks[this].get = function(a) {
                    return null === a.getAttribute("value") ? "on" : a.value
                }
            )
        });
    var vb, wb, xb = ea.expr.attrHandle, yb = /^(?:checked|selected)$/i, zb = ca.getSetAttribute, Ab = ca.input;
    ea.fn.extend({
        attr: function(a, b) {
            return Da(this, ea.attr, a, b, arguments.length > 1)
        },
        removeAttr: function(a) {
            return this.each(function() {
                ea.removeAttr(this, a)
            })
        }
    }),
        ea.extend({
            attr: function(a, b, c) {
                var d, e, f = a.nodeType;
                if (a && 3 !== f && 8 !== f && 2 !== f)
                    return typeof a.getAttribute === xa ? ea.prop(a, b, c) : (1 === f && ea.isXMLDoc(a) || (b = b.toLowerCase(),
                        d = ea.attrHooks[b] || (ea.expr.match.bool.test(b) ? wb : vb)),
                        void 0 === c ? d && "get"in d && null !== (e = d.get(a, b)) ? e : (e = ea.find.attr(a, b),
                            null == e ? void 0 : e) : null !== c ? d && "set"in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""),
                            c) : void ea.removeAttr(a, b))
            },
            removeAttr: function(a, b) {
                var c, d, e = 0, f = b && b.match(ta);
                if (f && 1 === a.nodeType)
                    for (; c = f[e++]; )
                        d = ea.propFix[c] || c,
                            ea.expr.match.bool.test(c) ? Ab && zb || !yb.test(c) ? a[d] = !1 : a[ea.camelCase("default-" + c)] = a[d] = !1 : ea.attr(a, c, ""),
                            a.removeAttribute(zb ? c : d)
            },
            attrHooks: {
                type: {
                    set: function(a, b) {
                        if (!ca.radioValue && "radio" === b && ea.nodeName(a, "input")) {
                            var c = a.value;
                            return a.setAttribute("type", b),
                            c && (a.value = c),
                                b
                        }
                    }
                }
            }
        }),
        wb = {
            set: function(a, b, c) {
                return b === !1 ? ea.removeAttr(a, c) : Ab && zb || !yb.test(c) ? a.setAttribute(!zb && ea.propFix[c] || c, c) : a[ea.camelCase("default-" + c)] = a[c] = !0,
                    c
            }
        },
        ea.each(ea.expr.match.bool.source.match(/\w+/g), function(a, b) {
            var c = xb[b] || ea.find.attr;
            xb[b] = Ab && zb || !yb.test(b) ? function(a, b, d) {
                    var e, f;
                    return d || (f = xb[b],
                        xb[b] = e,
                        e = null != c(a, b, d) ? b.toLowerCase() : null,
                        xb[b] = f),
                        e
                }
                : function(a, b, c) {
                    if (!c)
                        return a[ea.camelCase("default-" + b)] ? b.toLowerCase() : null
                }
        }),
    Ab && zb || (ea.attrHooks.value = {
        set: function(a, b, c) {
            return ea.nodeName(a, "input") ? void (a.defaultValue = b) : vb && vb.set(a, b, c)
        }
    }),
    zb || (vb = {
        set: function(a, b, c) {
            var d = a.getAttributeNode(c);
            if (d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c)),
                    d.value = b += "",
                "value" === c || b === a.getAttribute(c))
                return b
        }
    },
        xb.id = xb.name = xb.coords = function(a, b, c) {
            var d;
            if (!c)
                return (d = a.getAttributeNode(b)) && "" !== d.value ? d.value : null
        }
        ,
        ea.valHooks.button = {
            get: function(a, b) {
                var c = a.getAttributeNode(b);
                if (c && c.specified)
                    return c.value
            },
            set: vb.set
        },
        ea.attrHooks.contenteditable = {
            set: function(a, b, c) {
                vb.set(a, "" !== b && b, c)
            }
        },
        ea.each(["width", "height"], function(a, b) {
            ea.attrHooks[b] = {
                set: function(a, c) {
                    if ("" === c)
                        return a.setAttribute(b, "auto"),
                            c
                }
            }
        })),
    ca.style || (ea.attrHooks.style = {
        get: function(a) {
            return a.style.cssText || void 0
        },
        set: function(a, b) {
            return a.style.cssText = b + ""
        }
    });
    var Bb = /^(?:input|select|textarea|button|object)$/i
        , Cb = /^(?:a|area)$/i;
    ea.fn.extend({
        prop: function(a, b) {
            return Da(this, ea.prop, a, b, arguments.length > 1)
        },
        removeProp: function(a) {
            return a = ea.propFix[a] || a,
                this.each(function() {
                    try {
                        this[a] = void 0,
                            delete this[a]
                    } catch (b) {}
                })
        }
    }),
        ea.extend({
            propFix: {
                "for": "htmlFor",
                "class": "className"
            },
            prop: function(a, b, c) {
                var d, e, f, g = a.nodeType;
                if (a && 3 !== g && 8 !== g && 2 !== g)
                    return f = 1 !== g || !ea.isXMLDoc(a),
                    f && (b = ea.propFix[b] || b,
                        e = ea.propHooks[b]),
                        void 0 !== c ? e && "set"in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get"in e && null !== (d = e.get(a, b)) ? d : a[b]
            },
            propHooks: {
                tabIndex: {
                    get: function(a) {
                        var b = ea.find.attr(a, "tabindex");
                        return b ? parseInt(b, 10) : Bb.test(a.nodeName) || Cb.test(a.nodeName) && a.href ? 0 : -1
                    }
                }
            }
        }),
    ca.hrefNormalized || ea.each(["href", "src"], function(a, b) {
        ea.propHooks[b] = {
            get: function(a) {
                return a.getAttribute(b, 4)
            }
        }
    }),
    ca.optSelected || (ea.propHooks.selected = {
        get: function(a) {
            var b = a.parentNode;
            return b && (b.selectedIndex,
            b.parentNode && b.parentNode.selectedIndex),
                null
        }
    }),
        ea.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            ea.propFix[this.toLowerCase()] = this
        }),
    ca.enctype || (ea.propFix.enctype = "encoding");
    var Db = /[\t\r\n\f]/g;
    ea.fn.extend({
        addClass: function(a) {
            var b, c, d, e, f, g, h = 0, i = this.length, j = "string" == typeof a && a;
            if (ea.isFunction(a))
                return this.each(function(b) {
                    ea(this).addClass(a.call(this, b, this.className))
                });
            if (j)
                for (b = (a || "").match(ta) || []; h < i; h++)
                    if (c = this[h],
                            d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(Db, " ") : " ")) {
                        for (f = 0; e = b[f++]; )
                            d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                        g = ea.trim(d),
                        c.className !== g && (c.className = g)
                    }
            return this
        },
        removeClass: function(a) {
            var b, c, d, e, f, g, h = 0, i = this.length, j = 0 === arguments.length || "string" == typeof a && a;
            if (ea.isFunction(a))
                return this.each(function(b) {
                    ea(this).removeClass(a.call(this, b, this.className))
                });
            if (j)
                for (b = (a || "").match(ta) || []; h < i; h++)
                    if (c = this[h],
                            d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(Db, " ") : "")) {
                        for (f = 0; e = b[f++]; )
                            for (; d.indexOf(" " + e + " ") >= 0; )
                                d = d.replace(" " + e + " ", " ");
                        g = a ? ea.trim(d) : "",
                        c.className !== g && (c.className = g)
                    }
            return this
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : ea.isFunction(a) ? this.each(function(c) {
                ea(this).toggleClass(a.call(this, c, this.className, b), b)
            }) : this.each(function() {
                if ("string" === c)
                    for (var b, d = 0, e = ea(this), f = a.match(ta) || []; b = f[d++]; )
                        e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
                else
                    c !== xa && "boolean" !== c || (this.className && ea._data(this, "__className__", this.className),
                        this.className = this.className || a === !1 ? "" : ea._data(this, "__className__") || "")
            })
        },
        hasClass: function(a) {
            for (var b = " " + a + " ", c = 0, d = this.length; c < d; c++)
                if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(Db, " ").indexOf(b) >= 0)
                    return !0;
            return !1
        }
    }),
        ea.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
            ea.fn[b] = function(a, c) {
                return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
            }
        }),
        ea.fn.extend({
            hover: function(a, b) {
                return this.mouseenter(a).mouseleave(b || a)
            },
            bind: function(a, b, c) {
                return this.on(a, null, b, c)
            },
            unbind: function(a, b) {
                return this.off(a, null, b)
            },
            delegate: function(a, b, c, d) {
                return this.on(b, a, c, d)
            },
            undelegate: function(a, b, c) {
                return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
            }
        });
    var Eb = ea.now()
        , Fb = /\?/
        , Gb = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    ea.parseJSON = function(b) {
        if (a.JSON && a.JSON.parse)
            return a.JSON.parse(b + "");
        var c, d = null, e = ea.trim(b + "");
        return e && !ea.trim(e.replace(Gb, function(a, b, e, f) {
            return c && b && (d = 0),
                0 === d ? a : (c = e || b,
                    d += !f - !e,
                    "")
        })) ? Function("return " + e)() : ea.error("Invalid JSON: " + b)
    }
        ,
        ea.parseXML = function(b) {
            var c, d;
            if (!b || "string" != typeof b)
                return null;
            try {
                a.DOMParser ? (d = new DOMParser,
                    c = d.parseFromString(b, "text/xml")) : (c = new ActiveXObject("Microsoft.XMLDOM"),
                    c.async = "false",
                    c.loadXML(b))
            } catch (e) {
                c = void 0
            }
            return c && c.documentElement && !c.getElementsByTagName("parsererror").length || ea.error("Invalid XML: " + b),
                c
        }
    ;
    var Hb, Ib, Jb = /#.*$/, Kb = /([?&])_=[^&]*/, Lb = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Mb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Nb = /^(?:GET|HEAD)$/, Ob = /^\/\//, Pb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, Qb = {}, Rb = {}, Sb = "*/".concat("*");
    try {
        Ib = location.href
    } catch (Tb) {
        Ib = oa.createElement("a"),
            Ib.href = "",
            Ib = Ib.href
    }
    Hb = Pb.exec(Ib.toLowerCase()) || [],
        ea.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: Ib,
                type: "GET",
                isLocal: Mb.test(Hb[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Sb,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /xml/,
                    html: /html/,
                    json: /json/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": ea.parseJSON,
                    "text xml": ea.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(a, b) {
                return b ? P(P(a, ea.ajaxSettings), b) : P(ea.ajaxSettings, a)
            },
            ajaxPrefilter: N(Qb),
            ajaxTransport: N(Rb),
            ajax: function(a, b) {
                function c(a, b, c, d) {
                    var e, k, r, s, u, w = b;
                    2 !== t && (t = 2,
                    h && clearTimeout(h),
                        j = void 0,
                        g = d || "",
                        v.readyState = a > 0 ? 4 : 0,
                        e = a >= 200 && a < 300 || 304 === a,
                    c && (s = Q(l, v, c)),
                        s = R(l, s, v, e),
                        e ? (l.ifModified && (u = v.getResponseHeader("Last-Modified"),
                        u && (ea.lastModified[f] = u),
                            u = v.getResponseHeader("etag"),
                        u && (ea.etag[f] = u)),
                            204 === a || "HEAD" === l.type ? w = "nocontent" : 304 === a ? w = "notmodified" : (w = s.state,
                                k = s.data,
                                r = s.error,
                                e = !r)) : (r = w,
                        !a && w || (w = "error",
                        a < 0 && (a = 0))),
                        v.status = a,
                        v.statusText = (b || w) + "",
                        e ? o.resolveWith(m, [k, w, v]) : o.rejectWith(m, [v, w, r]),
                        v.statusCode(q),
                        q = void 0,
                    i && n.trigger(e ? "ajaxSuccess" : "ajaxError", [v, l, e ? k : r]),
                        p.fireWith(m, [v, w]),
                    i && (n.trigger("ajaxComplete", [v, l]),
                    --ea.active || ea.event.trigger("ajaxStop")))
                }
                "object" == typeof a && (b = a,
                    a = void 0),
                    b = b || {};
                var d, e, f, g, h, i, j, k, l = ea.ajaxSetup({}, b), m = l.context || l, n = l.context && (m.nodeType || m.jquery) ? ea(m) : ea.event, o = ea.Deferred(), p = ea.Callbacks("once memory"), q = l.statusCode || {}, r = {}, s = {}, t = 0, u = "canceled", v = {
                    readyState: 0,
                    getResponseHeader: function(a) {
                        var b;
                        if (2 === t) {
                            if (!k)
                                for (k = {}; b = Lb.exec(g); )
                                    k[b[1].toLowerCase()] = b[2];
                            b = k[a.toLowerCase()]
                        }
                        return null == b ? null : b
                    },
                    getAllResponseHeaders: function() {
                        return 2 === t ? g : null
                    },
                    setRequestHeader: function(a, b) {
                        var c = a.toLowerCase();
                        return t || (a = s[c] = s[c] || a,
                            r[a] = b),
                            this
                    },
                    overrideMimeType: function(a) {
                        return t || (l.mimeType = a),
                            this
                    },
                    statusCode: function(a) {
                        var b;
                        if (a)
                            if (t < 2)
                                for (b in a)
                                    q[b] = [q[b], a[b]];
                            else
                                v.always(a[v.status]);
                        return this
                    },
                    abort: function(a) {
                        var b = a || u;
                        return j && j.abort(b),
                            c(0, b),
                            this
                    }
                };
                if (o.promise(v).complete = p.add,
                        v.success = v.done,
                        v.error = v.fail,
                        l.url = ((a || l.url || Ib) + "").replace(Jb, "").replace(Ob, Hb[1] + "//"),
                        l.type = b.method || b.type || l.method || l.type,
                        l.dataTypes = ea.trim(l.dataType || "*").toLowerCase().match(ta) || [""],
                    null == l.crossDomain && (d = Pb.exec(l.url.toLowerCase()),
                        l.crossDomain = !(!d || d[1] === Hb[1] && d[2] === Hb[2] && (d[3] || ("http:" === d[1] ? "80" : "443")) === (Hb[3] || ("http:" === Hb[1] ? "80" : "443")))),
                    l.data && l.processData && "string" != typeof l.data && (l.data = ea.param(l.data, l.traditional)),
                        O(Qb, l, b, v),
                    2 === t)
                    return v;
                i = ea.event && l.global,
                i && 0 === ea.active++ && ea.event.trigger("ajaxStart"),
                    l.type = l.type.toUpperCase(),
                    l.hasContent = !Nb.test(l.type),
                    f = l.url,
                l.hasContent || (l.data && (f = l.url += (Fb.test(f) ? "&" : "?") + l.data,
                    delete l.data),
                l.cache === !1 && (l.url = Kb.test(f) ? f.replace(Kb, "$1_=" + Eb++) : f + (Fb.test(f) ? "&" : "?") + "_=" + Eb++)),
                l.ifModified && (ea.lastModified[f] && v.setRequestHeader("If-Modified-Since", ea.lastModified[f]),
                ea.etag[f] && v.setRequestHeader("If-None-Match", ea.etag[f])),
                (l.data && l.hasContent && l.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", l.contentType),
                    v.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + ("*" !== l.dataTypes[0] ? ", " + Sb + "; q=0.01" : "") : l.accepts["*"]);
                for (e in l.headers)
                    v.setRequestHeader(e, l.headers[e]);
                if (l.beforeSend && (l.beforeSend.call(m, v, l) === !1 || 2 === t))
                    return v.abort();
                u = "abort";
                for (e in {
                    success: 1,
                    error: 1,
                    complete: 1
                })
                    v[e](l[e]);
                if (j = O(Rb, l, b, v)) {
                    v.readyState = 1,
                    i && n.trigger("ajaxSend", [v, l]),
                    l.async && l.timeout > 0 && (h = setTimeout(function() {
                        v.abort("timeout")
                    }, l.timeout));
                    try {
                        t = 1,
                            j.send(r, c)
                    } catch (w) {
                        if (!(t < 2))
                            throw w;
                        c(-1, w)
                    }
                } else
                    c(-1, "No Transport");
                return v
            },
            getJSON: function(a, b, c) {
                return ea.get(a, b, c, "json")
            },
            getScript: function(a, b) {
                return ea.get(a, void 0, b, "script")
            }
        }),
        ea.each(["get", "post"], function(a, b) {
            ea[b] = function(a, c, d, e) {
                return ea.isFunction(c) && (e = e || d,
                    d = c,
                    c = void 0),
                    ea.ajax({
                        url: a,
                        type: b,
                        dataType: e,
                        data: c,
                        success: d
                    })
            }
        }),
        ea._evalUrl = function(a) {
            return ea.ajax({
                url: a,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                "throws": !0
            })
        }
        ,
        ea.fn.extend({
            wrapAll: function(a) {
                if (ea.isFunction(a))
                    return this.each(function(b) {
                        ea(this).wrapAll(a.call(this, b))
                    });
                if (this[0]) {
                    var b = ea(a, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && b.insertBefore(this[0]),
                        b.map(function() {
                            for (var a = this; a.firstChild && 1 === a.firstChild.nodeType; )
                                a = a.firstChild;
                            return a
                        }).append(this)
                }
                return this
            },
            wrapInner: function(a) {
                return ea.isFunction(a) ? this.each(function(b) {
                    ea(this).wrapInner(a.call(this, b))
                }) : this.each(function() {
                    var b = ea(this)
                        , c = b.contents();
                    c.length ? c.wrapAll(a) : b.append(a)
                })
            },
            wrap: function(a) {
                var b = ea.isFunction(a);
                return this.each(function(c) {
                    ea(this).wrapAll(b ? a.call(this, c) : a)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    ea.nodeName(this, "body") || ea(this).replaceWith(this.childNodes)
                }).end()
            }
        }),
        ea.expr.filters.hidden = function(a) {
            return a.offsetWidth <= 0 && a.offsetHeight <= 0 || !ca.reliableHiddenOffsets() && "none" === (a.style && a.style.display || ea.css(a, "display"))
        }
        ,
        ea.expr.filters.visible = function(a) {
            return !ea.expr.filters.hidden(a)
        }
    ;
    var Ub = /%20/g
        , Vb = /\[\]$/
        , Wb = /\r?\n/g
        , Xb = /^(?:submit|button|image|reset|file)$/i
        , Yb = /^(?:input|select|textarea|keygen)/i;
    ea.param = function(a, b) {
        var c, d = [], e = function(a, b) {
            b = ea.isFunction(b) ? b() : null == b ? "" : b,
                d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
        };
        if (void 0 === b && (b = ea.ajaxSettings && ea.ajaxSettings.traditional),
            ea.isArray(a) || a.jquery && !ea.isPlainObject(a))
            ea.each(a, function() {
                e(this.name, this.value)
            });
        else
            for (c in a)
                S(c, a[c], b, e);
        return d.join("&").replace(Ub, "+")
    }
        ,
        ea.fn.extend({
            serialize: function() {
                return ea.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var a = ea.prop(this, "elements");
                    return a ? ea.makeArray(a) : this
                }).filter(function() {
                    var a = this.type;
                    return this.name && !ea(this).is(":disabled") && Yb.test(this.nodeName) && !Xb.test(a) && (this.checked || !Ea.test(a))
                }).map(function(a, b) {
                    var c = ea(this).val();
                    return null == c ? null : ea.isArray(c) ? ea.map(c, function(a) {
                        return {
                            name: b.name,
                            value: a.replace(Wb, "\r\n")
                        }
                    }) : {
                        name: b.name,
                        value: c.replace(Wb, "\r\n")
                    }
                }).get()
            }
        }),
        ea.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function() {
                return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && T() || U()
            }
            : T;
    var Zb = 0
        , $b = {}
        , _b = ea.ajaxSettings.xhr();
    a.attachEvent && a.attachEvent("onunload", function() {
        for (var a in $b)
            $b[a](void 0, !0)
    }),
        ca.cors = !!_b && "withCredentials"in _b,
        _b = ca.ajax = !!_b,
    _b && ea.ajaxTransport(function(a) {
        if (!a.crossDomain || ca.cors) {
            var b;
            return {
                send: function(c, d) {
                    var e, f = a.xhr(), g = ++Zb;
                    if (f.open(a.type, a.url, a.async, a.username, a.password),
                            a.xhrFields)
                        for (e in a.xhrFields)
                            f[e] = a.xhrFields[e];
                    a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType),
                    a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
                    for (e in c)
                        void 0 !== c[e] && f.setRequestHeader(e, c[e] + "");
                    f.send(a.hasContent && a.data || null),
                        b = function(c, e) {
                            var h, i, j;
                            if (b && (e || 4 === f.readyState))
                                if (delete $b[g],
                                        b = void 0,
                                        f.onreadystatechange = ea.noop,
                                        e)
                                    4 !== f.readyState && f.abort();
                                else {
                                    j = {},
                                        h = f.status,
                                    "string" == typeof f.responseText && (j.text = f.responseText);
                                    try {
                                        i = f.statusText
                                    } catch (k) {
                                        i = ""
                                    }
                                    h || !a.isLocal || a.crossDomain ? 1223 === h && (h = 204) : h = j.text ? 200 : 404
                                }
                            j && d(h, i, j, f.getAllResponseHeaders())
                        }
                        ,
                        a.async ? 4 === f.readyState ? setTimeout(b) : f.onreadystatechange = $b[g] = b : b()
                },
                abort: function() {
                    b && b(void 0, !0)
                }
            }
        }
    }),
        ea.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /(?:java|ecma)script/
            },
            converters: {
                "text script": function(a) {
                    return ea.globalEval(a),
                        a
                }
            }
        }),
        ea.ajaxPrefilter("script", function(a) {
            void 0 === a.cache && (a.cache = !1),
            a.crossDomain && (a.type = "GET",
                a.global = !1)
        }),
        ea.ajaxTransport("script", function(a) {
            if (a.crossDomain) {
                var b, c = oa.head || ea("head")[0] || oa.documentElement;
                return {
                    send: function(d, e) {
                        b = oa.createElement("script"),
                            b.async = !0,
                        a.scriptCharset && (b.charset = a.scriptCharset),
                            b.src = a.url,
                            b.onload = b.onreadystatechange = function(a, c) {
                                (c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null,
                                b.parentNode && b.parentNode.removeChild(b),
                                    b = null,
                                c || e(200, "success"))
                            }
                            ,
                            c.insertBefore(b, c.firstChild)
                    },
                    abort: function() {
                        b && b.onload(void 0, !0)
                    }
                }
            }
        });
    var ac = []
        , bc = /(=)\?(?=&|$)|\?\?/;
    ea.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = ac.pop() || ea.expando + "_" + Eb++;
            return this[a] = !0,
                a
        }
    }),
        ea.ajaxPrefilter("json jsonp", function(b, c, d) {
            var e, f, g, h = b.jsonp !== !1 && (bc.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && bc.test(b.data) && "data");
            if (h || "jsonp" === b.dataTypes[0])
                return e = b.jsonpCallback = ea.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback,
                    h ? b[h] = b[h].replace(bc, "$1" + e) : b.jsonp !== !1 && (b.url += (Fb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e),
                    b.converters["script json"] = function() {
                        return g || ea.error(e + " was not called"),
                            g[0]
                    }
                    ,
                    b.dataTypes[0] = "json",
                    f = a[e],
                    a[e] = function() {
                        g = arguments
                    }
                    ,
                    d.always(function() {
                        a[e] = f,
                        b[e] && (b.jsonpCallback = c.jsonpCallback,
                            ac.push(e)),
                        g && ea.isFunction(f) && f(g[0]),
                            g = f = void 0
                    }),
                    "script"
        }),
        ea.parseHTML = function(a, b, c) {
            if (!a || "string" != typeof a)
                return null;
            "boolean" == typeof b && (c = b,
                b = !1),
                b = b || oa;
            var d = la.exec(a)
                , e = !c && [];
            return d ? [b.createElement(d[1])] : (d = ea.buildFragment([a], b, e),
            e && e.length && ea(e).remove(),
                ea.merge([], d.childNodes))
        }
    ;
    var cc = ea.fn.load;
    ea.fn.load = function(a, b, c) {
        if ("string" != typeof a && cc)
            return cc.apply(this, arguments);
        var d, e, f, g = this, h = a.indexOf(" ");
        return h >= 0 && (d = ea.trim(a.slice(h, a.length)),
            a = a.slice(0, h)),
            ea.isFunction(b) ? (c = b,
                b = void 0) : b && "object" == typeof b && (f = "POST"),
        g.length > 0 && ea.ajax({
            url: a,
            type: f,
            dataType: "html",
            data: b
        }).done(function(a) {
            e = arguments,
                g.html(d ? ea("<div>").append(ea.parseHTML(a)).find(d) : a)
        }).complete(c && function(a, b) {
            g.each(c, e || [a.responseText, b, a])
        }
        ),
            this
    }
        ,
        ea.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
            ea.fn[b] = function(a) {
                return this.on(b, a)
            }
        }),
        ea.expr.filters.animated = function(a) {
            return ea.grep(ea.timers, function(b) {
                return a === b.elem
            }).length
        }
    ;
    var dc = a.document.documentElement;
    ea.offset = {
        setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j, k = ea.css(a, "position"), l = ea(a), m = {};
            "static" === k && (a.style.position = "relative"),
                h = l.offset(),
                f = ea.css(a, "top"),
                i = ea.css(a, "left"),
                j = ("absolute" === k || "fixed" === k) && ea.inArray("auto", [f, i]) > -1,
                j ? (d = l.position(),
                    g = d.top,
                    e = d.left) : (g = parseFloat(f) || 0,
                    e = parseFloat(i) || 0),
            ea.isFunction(b) && (b = b.call(a, c, h)),
            null != b.top && (m.top = b.top - h.top + g),
            null != b.left && (m.left = b.left - h.left + e),
                "using"in b ? b.using.call(a, m) : l.css(m)
        }
    },
        ea.fn.extend({
            offset: function(a) {
                if (arguments.length)
                    return void 0 === a ? this : this.each(function(b) {
                        ea.offset.setOffset(this, a, b)
                    });
                var b, c, d = {
                    top: 0,
                    left: 0
                }, e = this[0], f = e && e.ownerDocument;
                if (f)
                    return b = f.documentElement,
                        ea.contains(b, e) ? (typeof e.getBoundingClientRect !== xa && (d = e.getBoundingClientRect()),
                            c = V(f),
                            {
                                top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0),
                                left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0)
                            }) : d
            },
            position: function() {
                if (this[0]) {
                    var a, b, c = {
                        top: 0,
                        left: 0
                    }, d = this[0];
                    return "fixed" === ea.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(),
                        b = this.offset(),
                    ea.nodeName(a[0], "html") || (c = a.offset()),
                        c.top += ea.css(a[0], "borderTopWidth", !0),
                        c.left += ea.css(a[0], "borderLeftWidth", !0)),
                        {
                            top: b.top - c.top - ea.css(d, "marginTop", !0),
                            left: b.left - c.left - ea.css(d, "marginLeft", !0)
                        }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var a = this.offsetParent || dc; a && !ea.nodeName(a, "html") && "static" === ea.css(a, "position"); )
                        a = a.offsetParent;
                    return a || dc
                })
            }
        }),
        ea.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(a, b) {
            var c = /Y/.test(b);
            ea.fn[a] = function(d) {
                return Da(this, function(a, d, e) {
                    var f = V(a);
                    return void 0 === e ? f ? b in f ? f[b] : f.document.documentElement[d] : a[d] : void (f ? f.scrollTo(c ? ea(f).scrollLeft() : e, c ? e : ea(f).scrollTop()) : a[d] = e)
                }, a, d, arguments.length, null)
            }
        }),
        ea.each(["top", "left"], function(a, b) {
            ea.cssHooks[b] = A(ca.pixelPosition, function(a, c) {
                if (c)
                    return c = bb(a, b),
                        db.test(c) ? ea(a).position()[b] + "px" : c
            })
        }),
        ea.each({
            Height: "height",
            Width: "width"
        }, function(a, b) {
            ea.each({
                padding: "inner" + a,
                content: b,
                "": "outer" + a
            }, function(c, d) {
                ea.fn[d] = function(d, e) {
                    var f = arguments.length && (c || "boolean" != typeof d)
                        , g = c || (d === !0 || e === !0 ? "margin" : "border");
                    return Da(this, function(b, c, d) {
                        var e;
                        return ea.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement,
                            Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? ea.css(b, c, g) : ea.style(b, c, d, g)
                    }, b, f ? d : void 0, f, null)
                }
            })
        }),
        ea.fn.size = function() {
            return this.length
        }
        ,
        ea.fn.andSelf = ea.fn.addBack,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return ea
    });
    var ec = a.jQuery
        , fc = a.$;
    return ea.noConflict = function(b) {
        return a.$ === ea && (a.$ = fc),
        b && a.jQuery === ea && (a.jQuery = ec),
            ea
    }
        ,
    typeof b === xa && (a.jQuery = a.$ = ea),
        ea
}),
    function(exports, global) {
        var origDefine = global.define
            , get = function(a) {
                var b, c = a.split("."), d = global;
                for (b = 0; b < c.length && d; b++)
                    d = d[c[b]];
                return d
            }
            , modules = global.define && global.define.modules || global._define && global._define.modules || {}
            , ourDefine = global.define = function(a, b, c) {
                var d;
                "function" == typeof b && (c = b,
                    b = []);
                var e, f = [];
                for (e = 0; e < b.length; e++)
                    f.push(exports[b[e]] ? get(exports[b[e]]) : modules[b[e]] || get(b[e]));
                if (!b.length && c.length) {
                    d = {
                        exports: {}
                    };
                    var g = function(a) {
                        return exports[a] ? get(exports[a]) : modules[a]
                    };
                    f.push(g, d.exports, d)
                } else
                    f[0] || "exports" !== b[0] || (d = {
                        exports: {}
                    },
                        f[0] = d.exports);
                global.define = origDefine;
                var h = c ? c.apply(null, f) : void 0;
                global.define = ourDefine,
                    modules[a] = d && d.exports ? d.exports : h
            }
        ;
        global.define.orig = origDefine,
            global.define.modules = modules,
            global.define.amd = !0,
            global.System = {
                define: function(__name, __code) {
                    global.define = origDefine,
                        eval("(function() { " + __code + " \n }).call(global);"),
                        global.define = ourDefine
                },
                orig: global.System
            }
    }({
        jquery: "jQuery",
        zepto: "Zepto"
    }, window),
    define("jquerypp/dom/animate/animate", ["jquery"], function(a) {
        var b = 0
            , c = null
            , d = []
            , e = null
            , f = a.fn.animate
            , g = function() {
            if (!c) {
                var a = document.createElement("style");
                a.setAttribute("type", "text/css"),
                    a.setAttribute("media", "screen"),
                    document.getElementsByTagName("head")[0].appendChild(a),
                window.createPopup || a.appendChild(document.createTextNode("")),
                    c = a.sheet
            }
            return c
        }
            , h = function(a, b) {
            for (var c = a.cssRules.length - 1; c >= 0; c--) {
                var d = a.cssRules[c];
                if (7 === d.type && d.name == b)
                    return void a.deleteRule(c)
            }
        }
            , i = function(b, c, d, e) {
            var f = !(this[0] && this[0].nodeType)
                , g = !f && "inline" === a(this).css("display") && "none" === a(this).css("float")
                , h = k();
            for (var i in b)
                if ("show" == b[i] || "hide" == b[i] || "toggle" == b[i] || a.isArray(b[i]) || b[i] < 0 || "zIndex" == i || "z-index" == i || "scrollTop" == i || "scrollLeft" == i)
                    return !0;
            return b.jquery === !0 || null === h || "-o-" === h.prefix || a.isEmptyObject(b) || d || d && "string" == typeof d || a.isPlainObject(c) || g || f
        }
            , j = function(b, c) {
            return "number" != typeof c || a.cssNumber[b] ? c : c += "px"
        }
            , k = function() {
            if (!e) {
                var a, b = document.createElement("fakeelement"), c = {
                    transition: {
                        transitionEnd: "transitionEnd",
                        prefix: ""
                    },
                    MozTransition: {
                        transitionEnd: "animationend",
                        prefix: "-moz-"
                    },
                    WebkitTransition: {
                        transitionEnd: "webkitAnimationEnd",
                        prefix: "-webkit-"
                    },
                    OTransition: {
                        transitionEnd: "oTransitionEnd",
                        prefix: "-o-"
                    }
                };
                for (a in c)
                    a in b.style && (e = c[a])
            }
            return e
        }
            , l = {
            top: function(a) {
                return a.position().top
            },
            left: function(a) {
                return a.position().left
            },
            width: function(a) {
                return a.width()
            },
            height: function(a) {
                return a.height()
            },
            fontSize: function(a) {
                return "1em"
            }
        }
            , m = function(b) {
            var c = {};
            return a.each(b, function(a, b) {
                c[k().prefix + a] = b
            }),
                c
        }
            , n = function(c) {
            var e, f, i;
            return a.each(d, function(a, b) {
                c === b.style ? (f = b.name,
                    b.age = 0) : b.age += 1
            }),
            f || (e = g(),
                f = "jquerypp_animation_" + b++,
                e.insertRule("@" + k().prefix + "keyframes " + f + " " + c, e.cssRules && e.cssRules.length || 0),
                d.push({
                    name: f,
                    style: c,
                    age: 0
                }),
                d.sort(function(a, b) {
                    return a.age - b.age
                }),
            d.length > 20 && (i = d.pop(),
                h(e, i.name))),
                f
        };
        return a.fn.animate = function(b, c, d, e) {
            if (i.apply(this, arguments))
                return f.apply(this, arguments);
            var g = a.speed(c, d, e)
                , h = [];
            return ("height"in b || "width"in b) && (h = [this[0].style.overflow, this[0].style.overflowX, this[0].style.overflowY],
                this.css("overflow", "hidden")),
                this.queue(g.queue, function(c) {
                    var d, e, f, i, o = [], p = "", q = a(this), r = g.duration, s = "{ from {", t = function(b, c) {
                        c ? q.css("overflow", "") : (q[0].style.overflow = h[0],
                            q[0].style.overflowX = h[1],
                            q[0].style.overflowY = h[2]),
                            q.css(b),
                            q.css(m({
                                "animation-duration": "",
                                "animation-name": "",
                                "animation-fill-mode": "",
                                "animation-play-state": ""
                            })),
                        a.isFunction(g.old) && c && g.old.call(q[0], !0),
                            a.removeData(q, i, !0)
                    }, u = function() {
                        t(b, !0),
                            c()
                    };
                    for (e in b)
                        o.push(e);
                    "-moz-" === k().prefix && a.each(o, function(b, c) {
                        var d = l[a.camelCase(c)];
                        d && "auto" == q.css(c) && q.css(c, d(q))
                    }),
                        d = q.css.apply(q, o),
                        a.each(o, function(a, c) {
                            var e = c.replace(/([A-Z]|^ms)/g, "-$1").toLowerCase();
                            s += e + " : " + j(c, d[c]) + "; ",
                                p += e + " : " + j(c, b[c]) + "; "
                        }),
                        s += "} to {" + p + " }}",
                        f = n(s),
                        i = f + ".run",
                        a._data(this, i, {
                            stop: function(a) {
                                q.css(m({
                                    "animation-play-state": "paused"
                                })),
                                    q.off(k().transitionEnd, u),
                                    a ? t(b, !0) : t(q.styles.apply(q, o), !1)
                            }
                        }),
                        q.css(m({
                            "animation-duration": r + "ms",
                            "animation-name": f,
                            "animation-fill-mode": "forwards"
                        })),
                        q.one(k().transitionEnd, u)
                }),
                this
        }
            ,
            a
    }),
    function() {
        window._define = window.define,
            window.define = window.define.orig,
            window.System = window.System.orig
    }(),
    function(a) {
        function b() {
            c && (f(b),
                a.fx.tick())
        }
        for (var c, d = 0, e = ["webkit", "moz"], f = window.requestAnimationFrame, g = window.cancelAnimationFrame; d < e.length && !f; d++)
            f = window[e[d] + "RequestAnimationFrame"],
                g = g || window[e[d] + "CancelAnimationFrame"] || window[e[d] + "CancelRequestAnimationFrame"];
        f ? (window.requestAnimationFrame = f,
                window.cancelAnimationFrame = g,
                a.fx.timer = function(d) {
                    d() && a.timers.push(d) && !c && (c = !0,
                        b())
                }
                ,
                a.fx.stop = function() {
                    c = !1
                }
        ) : (window.requestAnimationFrame = function(a, b) {
                var c = (new Date).getTime()
                    , e = Math.max(0, 16 - (c - d))
                    , f = window.setTimeout(function() {
                    a(c + e)
                }, e);
                return d = c + e,
                    f
            }
                ,
                window.cancelAnimationFrame = function(a) {
                    clearTimeout(a)
                }
        )
    }(jQuery);
var _g = "undefined" != typeof window ? window : global;
_g.$JOII = {
    REVISION: 25,
    PublicAPI: {
        Class: function(a, b) {
            return b || (b = a,
                a = {}),
                new _g.$JOII.ClassBuilder(a,b)
        },
        Interface: function(a, b) {
            return b || (b = a,
                a = {}),
                new _g.$JOII.InterfaceBuilder(a,b)
        },
        RegisterJOIIPlugin: function(a, b) {
            _g.$JOII.Plugins[a] = {
                compile: b.compile || function() {}
                ,
                supports: b.supports || function() {
                    return !0
                }
                ,
                scope: b.scope || {}
            }
        }
    },
    PublicClassAPI: {
        "super": function(a) {
            var b = Array.prototype.slice.call(arguments, 1)
                , c = this
                , d = this.__joii__
                , e = function(a, b, f) {
                if ("undefined" == typeof a)
                    throw new Error('Parent method "' + b + '" does not exist.');
                if ("undefined" != typeof a.__joii__.parent && "undefined" == typeof a.__joii__.parent.prototype[b])
                    return e(a.__joii__.parent, b, f);
                if ("undefined" == typeof a.__joii__.parent)
                    throw new Error('Method "' + b + '" does not exist.');
                var g = a.__joii__.parent.prototype[b];
                c.__joii__ = a.__joii__.parent.prototype.__joii__;
                var h = g.apply(c, f);
                return c.__joii__ = d,
                    h
            };
            return e(this, a, b)
        },
        instanceOf: function(a) {
            if ("undefined" != typeof a.__joii__ && (a = a.__joii__.clean_prototype),
                "undefined" != typeof a.__interface__)
                return _g.$JOII.Compat.indexOf(this.__joii__.interfaces, a.__interface__) !== -1;
            var b = function(a, c) {
                var d = a;
                return "undefined" != typeof a.__joii__ && (a = a.__joii__.clean_prototype),
                a === c || ("undefined" != typeof d.__joii__ && "undefined" != typeof d.__joii__.parent ? b(d.__joii__.parent, c) : d === c)
            };
            return b(this, a)
        }
    },
    Plugins: {},
    Interfaces: {},
    Namespace: {},
    RegisterInNS: function(a, b) {
        _g.$JOII.Namespace[a] = b
    },
    InterfaceBuilder: function(a, b) {
        var c = {}
            , d = _g.$JOII.System.guid()();
        for (var e in b)
            if (b.hasOwnProperty(e)) {
                if ("string" != typeof b[e])
                    throw new Error("An interface definition must be a string, defining the property type.");
                c[e] = b[e]
            }
        return _g.$JOII.Compat.CreateProperty(c, "__interface__", d),
            _g.$JOII.Interfaces[d] = c,
        "object" == typeof a["extends"] && a["extends"].__interface__ && (c = _g.$JOII.System.extendInterface(c, a["extends"])),
            c
    },
    ClassBuilder: function(a, b) {
        if ("object" != typeof b)
            throw new Error("Class body must be an Object, " + typeof b + "given");
        var c = _g.$JOII.System.ApplyPrototype(function() {
            var a = function() {}
                , d = null
                , e = _g.$JOII.Compat.extend(!0, {}, Object.create(this));
            a.prototype = e,
                c = Object.create(new a),
                _g.$JOII.Compat.CreateProperty(c, "__joii__", this.__joii__);
            for (d in _g.$JOII.PublicClassAPI) {
                if ("undefined" != typeof c.i)
                    throw new Error('Method "' + d + '" is reserved by JOII.');
                _g.$JOII.Compat.CreateProperty(c, d, _g.$JOII.PublicClassAPI[d])
            }
            if (_g.$JOII.System.ApplyPlugins(c, b),
                "function" == typeof c.__construct) {
                var f = c.__construct.apply(c, arguments);
                if ("object" == typeof f) {
                    a = {};
                    for (d in f)
                        "function" == typeof f[d] ? a[d] = f[d].bind(c) : a[d] = f[d];
                    if (_g.$JOII.Compat.CreateProperty(a, "__joii__", this.__joii__),
                            _g.$JOII.Compat.CreateProperty(a, b, _g.$JOII.PublicClassAPI[d]),
                            _g.$JOII.System.ApplyPlugins(a, b),
                        "undefined" != typeof c.__joii__.interfaces && this.__joii__.interfaces.length > 0)
                        for (d in c.__joii__.interfaces)
                            if ("undefined" != typeof c.__joii__.interfaces[d]) {
                                var g = _g.$JOII.Interfaces[c.__joii__.interfaces[d]];
                                for (var h in g)
                                    if (g.hasOwnProperty(h) && typeof a[h] !== g[h])
                                        throw new Error("Public API must implement " + g[h] + ' "' + h + '" as defined in the interface the class implements.')
                            }
                    return a
                }
            }
            for (var i in c.__joii__.implementation_list) {
                var j = c.__joii__.implementation_list[i];
                if (typeof c[i] !== j && "_" !== i.charAt(0) && "_" !== i.charAt(1) && "string" == typeof j)
                    throw "undefined" == typeof c[i] ? new Error("Class is missing " + j + ' implementation of property "' + i + '".') : new Error('Property "' + i + '" must be of type "' + j + '", ' + typeof i + " detected.")
            }
            return c
        }, b);
        if ("undefined" != typeof a["final"] && (c.__joii__.is_final = a["final"]),
            "function" == typeof a["extends"] && "object" == typeof a["extends"].prototype) {
            if ("undefined" != typeof a["extends"].__joii__ && "undefined" != typeof a["extends"].__joii__.is_final && a["extends"].__joii__.is_final === !0)
                throw new Error("Unable to extend a class that is final.");
            c = _g.$JOII.System.ApplyParent(c, a["extends"])
        } else if ("object" == typeof a["extends"])
            c = _g.$JOII.System.ApplyTrait(c, a["extends"]);
        else if ("undefined" != typeof a["extends"])
            throw new Error("Parent class must be a function containing a prototype.");
        if ("undefined" != typeof a.uses) {
            "undefined" == typeof a.uses[0] && (i = a.uses,
                a.uses = [i]);
            for (i in a.uses)
                if ("object" == typeof a.uses[i])
                    for (var d in a.uses[i]) {
                        var e = a.uses[i][d];
                        "undefined" == typeof c.prototype[d] && (c.prototype[d] = e)
                    }
        }
        return "undefined" != typeof a["implements"] && "undefined" == typeof a["implements"][0] && (i = a["implements"],
            a["implements"] = [],
            a["implements"].push(i)),
            a["implements"] = a["implements"] || [],
            c.__joii__["implements"] = a["implements"],
            c.__joii__.interfaces = [],
            _g.$JOII.System.ApplyInterfaces(c),
            c.__joii__.clean_prototype = b,
            _g.$JOII.Compat.CreateProperty(c.prototype, "__joii__", c.__joii__),
            c
    },
    System: {
        ApplyPrototype: function(a, b) {
            _g.$JOII.Compat.CreateProperty(a, "__joii__", {});
            for (var c in b)
                a.prototype[c] = b[c];
            return a
        },
        ApplyParent: function(a, b) {
            if ("object" == typeof b.__joii__.is_final) {
                var c = a.__joii__.is_final || [];
                if (c !== !0 && "object" == typeof c)
                    for (var d in b.__joii__.is_final)
                        b.__joii__.is_final.hasOwnProperty(d) && c.push(b.__joii__.is_final[d]);
                a.__joii__.is_final = c
            }
            a.__joii__.parent = {},
                a.__joii__.parent.prototype = b.prototype,
            "object" == typeof b.__joii__ && (a.__joii__.parent.__joii__ = b.__joii__);
            for (var d in b.prototype)
                if ("undefined" == typeof a.prototype[d])
                    a.prototype[d] = b.prototype[d];
                else if ("undefined" != typeof b.__joii__ && "object" == typeof b.__joii__.is_final)
                    for (var e in b.__joii__.is_final)
                        if (b.__joii__.is_final.hasOwnProperty(e))
                            throw new Error('Unable to override method "' + d + '", because it is marked as final in the parent class.');
            return a
        },
        ApplyTrait: function(a, b) {
            if ("undefined" != typeof Object.getOwnPropertyNames) {
                var c = Object.getOwnPropertyNames(b);
                for (var d in c)
                    "undefined" == typeof a.prototype[c[d]] && (a.prototype[c[d]] = Math[c[d]])
            } else
                for (var e in b)
                    "undefined" == typeof a.prototype[e] && (a.prototype[e] = b[e]);
            return a
        },
        ApplyPlugins: function(a, b) {
            tmp_product = _g.$JOII.Compat.extend(!0, {}, a),
                tmp_product.prototype = tmp_product;
            for (var c in _g.$JOII.Plugins)
                if (_g.$JOII.Plugins[c].supports(tmp_product)) {
                    a.prototype = a,
                    void 0 !== (p = _g.$JOII.Plugins[c].compile(a)) && ("undefined" != typeof p.prototype && (p = p.prototype),
                        a = p),
                    "undefined" != typeof a.prototype && delete a.prototype;
                    for (var d in _g.$JOII.Plugins[c].scope) {
                        if ("undefined" != typeof a[d]) {
                            if ("undefined" != typeof b[d])
                                throw new Error('Method "' + d + '" is reserved by plugin "' + c + '".');
                            for (var e in _g.$JOII.Plugins)
                                for (var f in _g.$JOII.Plugins[e].scope)
                                    if (f === d && c !== e)
                                        throw new Error('Method "' + d + '" from plugin "' + c + '" is already in use by plugin "' + e + '".')
                        }
                        a[d] = _g.$JOII.Plugins[c].scope[d]
                    }
                }
        },
        ApplyInterfaces: function(a) {
            var b = function(c, d) {
                d = d || {};
                for (var e in c.__joii__["implements"]) {
                    a.__joii__.interfaces.push(c.__joii__["implements"][e].__interface__);
                    for (var f in c.__joii__["implements"][e])
                        d[f] = c.__joii__["implements"][e][f]
                }
                if ("undefined" != typeof c.__joii__.parent) {
                    var g = b(c.__joii__.parent, d);
                    for (e in g)
                        d[e] = g[e]
                }
                return d
            };
            a.__joii__.implementation_list = b(a)
        },
        extendInterface: function(a, b) {
            var c = a.__interface__;
            for (var d in b)
                b.hasOwnProperty(d) && (a.hasOwnProperty(d) || (a[d] = b[d]));
            return _g.$JOII.Interfaces[c] = a,
                a
        },
        guid: function() {
            function a() {
                return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
            }
            return function() {
                return a() + a() + "-" + a() + "-" + a() + "-" + a() + "-" + a() + a() + a()
            }
        }
    },
    Compat: {
        isArray: function(a) {
            var b = a.length
                , c = typeof a;
            return "function" !== c && ("undefined" == typeof window || a !== window) && (!(1 !== a.nodeType || !b) || "[object Array]" === Object.prototype.toString.call(a))
        },
        extend: function() {
            var a, b, c, d, e = !1, f = arguments[0] || {}, g = 1, h = arguments.length, i = !1;
            for ("boolean" == typeof f && (i = f,
                f = arguments[g] || {},
                g++),
                 "object" != typeof f && "function" != typeof f && (f = {}); g < h; g++)
                if (null !== (a = arguments[g]) && void 0 !== arguments[g])
                    for (var j in a)
                        b = f[j],
                            c = a[j],
                        f !== c && (i && c && (_g.$JOII.Compat.isPlainObject(c) || (e = _g.$JOII.Compat.isArray(c))) ? (e ? (e = !1,
                            d = b && _g.$JOII.Compat.isArray(b) ? b : []) : d = b && _g.$JOII.Compat.isPlainObject(b) ? b : {},
                            f[j] = _g.$JOII.Compat.extend(i, d, c)) : void 0 !== c && (f[j] = c));
            return f
        },
        isPlainObject: function(a) {
            var b = {}.hasOwnProperty;
            return !("object" != typeof a || a.nodeType || "undefined" != typeof window && a === window) && !(a.constructor && !b.call(a.constructor.prototype, "isPrototypeOf"))
        },
        indexOf: function(a, b) {
            for (var c in a)
                if (a[c] === b)
                    return c;
            return -1
        },
        CreateNamespaceObject: function(a, b) {
            for (var c, d = window || global, e = a.split("."); e.length > 0; ) {
                if (c = e.shift(),
                    "undefined" == typeof d[c] && (d[c] = {}),
                    "undefined" != typeof b && 0 === e.length)
                    return d[c] = b,
                        d;
                d = d[c]
            }
            return d
        },
        CreateProperty: function(a, b, c) {
            try {
                "undefined" != typeof Object.defineProperty ? Object.defineProperty(a, b, {
                    writable: !0,
                    enumerable: !1,
                    value: c
                }) : a[b] = c
            } catch (d) {
                a[b] = c
            }
        }
    },
    initialize: function() {
        var a;
        if ("undefined" == typeof window && "undefined" != typeof module)
            module.exports = _g.$JOII.PublicAPI,
                a = _g;
        else {
            var b = document.getElementsByTagName("script")
                , c = b[b.length - 1];
            (a = c.getAttribute("data-ns")) || (a = _g),
            "string" == typeof a && (a = _g.$JOII.Compat.CreateNamespaceObject(a))
        }
        for (var d in _g.$JOII.PublicAPI)
            _g.$JOII.PublicAPI.hasOwnProperty(d) && (a[d] = _g.$JOII.PublicAPI[d]);
        _g.$JOII.Namespace = a
    }
},
"undefined" == typeof Object.create && (Object.create = function() {
    function a() {}
    return function(b) {
        if (1 != arguments.length)
            throw new Error("Object.create implementation only accepts one parameter.");
        return a.prototype = b,
            new a
    }
}()),
Function.prototype.bind || (Function.prototype.bind = function(a) {
        if ("function" != typeof this)
            throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
        var b = Array.prototype.slice.call(arguments, 1)
            , c = this
            , d = function() {}
            , e = function() {
            return c.apply(this instanceof d && a ? this : a, b.concat(Array.prototype.slice.call(arguments)))
        };
        return d.prototype = this.prototype,
            e.prototype = new d,
            e
    }
),
    _g.$JOII.initialize();
var subtopic = function() {
    "use strict";
    var a = {}
        , b = function(b, c, d) {
        for (var e = b.split("/"); e[0]; ) {
            if (a[b]) {
                var f = a[b]
                    , g = f.length - 1;
                for (g; g >= 0; g -= 1)
                    f[g].apply(d || this, c || [])
            }
            e.pop(),
                b = e.join("/")
        }
    }
        , c = function(b, c) {
        return a[b] || (a[b] = []),
            a[b].push(c),
            [b, c]
    }
        , d = function(b, c) {
        var d = b[0]
            , e = a[d].length - 1;
        if (a[d])
            for (e; e >= 0; e -= 1)
                a[d][e] === b[1] && (a[d].splice(a[d][e], 1),
                c && delete a[d])
    };
    return {
        publish: b,
        subscribe: c,
        unsubscribe: d
    }
}();
!function(a) {
    "use strict";
    var b = {}
        , c = function(a, c, d) {
        for (var e = a.split("/"); e[0]; ) {
            if (b[a]) {
                var f = b[a]
                    , g = f.length - 1;
                for (g; g >= 0; g -= 1)
                    f[g].apply(d || this, c || [])
            }
            e.pop(),
                a = e.join("/")
        }
    }
        , d = function(a, c) {
        return b[a] || (b[a] = []),
            b[a].push(c),
            [a, c]
    }
        , e = function(a, c) {
        var d = a[0]
            , e = b[d].length - 1;
        if (b[d])
            for (e; e >= 0; e -= 1)
                b[d][e] === a[1] && (b[d].splice(b[d][e], 1),
                c && delete b[d])
    };
    a.publish = c,
        a.subscribe = d,
        a.unsubscribe = e
}(jQuery),
    +function(a) {
        "use strict";
        function b(b) {
            return this.each(function() {
                var d = a(this)
                    , e = d.data("bs.button")
                    , f = "object" == typeof b && b;
                e || d.data("bs.button", e = new c(this,f)),
                    "toggle" == b ? e.toggle() : b && e.setState(b)
            })
        }
        var c = function(b, d) {
            this.$element = a(b),
                this.options = a.extend({}, c.DEFAULTS, d),
                this.isLoading = !1
        };
        c.VERSION = "3.3.6",
            c.DEFAULTS = {
                loadingText: "loading..."
            },
            c.prototype.setState = function(b) {
                var c = "disabled"
                    , d = this.$element
                    , e = d.is("input") ? "val" : "html"
                    , f = d.data();
                b += "Text",
                null == f.resetText && d.data("resetText", d[e]()),
                    setTimeout(a.proxy(function() {
                        d[e](null == f[b] ? this.options[b] : f[b]),
                            "loadingText" == b ? (this.isLoading = !0,
                                d.addClass(c).attr(c, c)) : this.isLoading && (this.isLoading = !1,
                                d.removeClass(c).removeAttr(c))
                    }, this), 0)
            }
            ,
            c.prototype.toggle = function() {
                var a = !0
                    , b = this.$element.closest('[data-toggle="buttons"]');
                if (b.length) {
                    var c = this.$element.find("input");
                    "radio" == c.prop("type") ? (c.prop("checked") && (a = !1),
                        b.find(".active").removeClass("active"),
                        this.$element.addClass("active")) : "checkbox" == c.prop("type") && (c.prop("checked") !== this.$element.hasClass("active") && (a = !1),
                        this.$element.toggleClass("active")),
                        c.prop("checked", this.$element.hasClass("active")),
                    a && c.trigger("change")
                } else
                    this.$element.attr("aria-pressed", !this.$element.hasClass("active")),
                        this.$element.toggleClass("active")
            }
        ;
        var d = a.fn.button;
        a.fn.button = b,
            a.fn.button.Constructor = c,
            a.fn.button.noConflict = function() {
                return a.fn.button = d,
                    this
            }
            ,
            a(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(c) {
                var d = a(c.target);
                d.hasClass("btn") || (d = d.closest(".btn")),
                    b.call(d, "toggle"),
                a(c.target).is('input[type="radio"]') || a(c.target).is('input[type="checkbox"]') || c.preventDefault()
            }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(b) {
                a(b.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(b.type))
            })
    }(jQuery),
    +function(a) {
        "use strict";
        function b(b) {
            var c = b.attr("data-target");
            c || (c = b.attr("href"),
                c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, ""));
            var d = c && a(c);
            return d && d.length ? d : b.parent()
        }
        function c(c) {
            c && 3 === c.which || (a(e).remove(),
                a(f).each(function() {
                    var d = a(this)
                        , e = b(d)
                        , f = {
                        relatedTarget: this
                    };
                    e.hasClass("open") && (c && "click" == c.type && /input|textarea/i.test(c.target.tagName) && a.contains(e[0], c.target) || (e.trigger(c = a.Event("hide.bs.dropdown", f)),
                    c.isDefaultPrevented() || (d.attr("aria-expanded", "false"),
                        e.removeClass("open").trigger(a.Event("hidden.bs.dropdown", f)))))
                }))
        }
        function d(b) {
            return this.each(function() {
                var c = a(this)
                    , d = c.data("bs.dropdown");
                d || c.data("bs.dropdown", d = new g(this)),
                "string" == typeof b && d[b].call(c)
            })
        }
        var e = ".dropdown-backdrop"
            , f = '[data-toggle="dropdown"]'
            , g = function(b) {
            a(b).on("click.bs.dropdown", this.toggle)
        };
        g.VERSION = "3.3.6",
            g.prototype.toggle = function(d) {
                var e = a(this);
                if (!e.is(".disabled, :disabled")) {
                    var f = b(e)
                        , g = f.hasClass("open");
                    if (c(),
                            !g) {
                        "ontouchstart"in document.documentElement && !f.closest(".navbar-nav").length && a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click", c);
                        var h = {
                            relatedTarget: this
                        };
                        if (f.trigger(d = a.Event("show.bs.dropdown", h)),
                                d.isDefaultPrevented())
                            return;
                        e.trigger("focus").attr("aria-expanded", "true"),
                            f.toggleClass("open").trigger(a.Event("shown.bs.dropdown", h))
                    }
                    return !1
                }
            }
            ,
            g.prototype.keydown = function(c) {
                if (/(38|40|27|32)/.test(c.which) && !/input|textarea/i.test(c.target.tagName)) {
                    var d = a(this);
                    if (c.preventDefault(),
                            c.stopPropagation(),
                            !d.is(".disabled, :disabled")) {
                        var e = b(d)
                            , g = e.hasClass("open");
                        if (!g && 27 != c.which || g && 27 == c.which)
                            return 27 == c.which && e.find(f).trigger("focus"),
                                d.trigger("click");
                        var h = " li:not(.disabled):visible a"
                            , i = e.find(".dropdown-menu" + h);
                        if (i.length) {
                            var j = i.index(c.target);
                            38 == c.which && j > 0 && j--,
                            40 == c.which && j < i.length - 1 && j++,
                            ~j || (j = 0),
                                i.eq(j).trigger("focus")
                        }
                    }
                }
            }
        ;
        var h = a.fn.dropdown;
        a.fn.dropdown = d,
            a.fn.dropdown.Constructor = g,
            a.fn.dropdown.noConflict = function() {
                return a.fn.dropdown = h,
                    this
            }
            ,
            a(document).on("click.bs.dropdown.data-api", c).on("click.bs.dropdown.data-api", ".dropdown form", function(a) {
                a.stopPropagation()
            }).on("click.bs.dropdown.data-api", f, g.prototype.toggle).on("keydown.bs.dropdown.data-api", f, g.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", g.prototype.keydown)
    }(jQuery),
    +function(a) {
        "use strict";
        function b(b, d) {
            return this.each(function() {
                var e = a(this)
                    , f = e.data("bs.modal")
                    , g = a.extend({}, c.DEFAULTS, e.data(), "object" == typeof b && b);
                f || e.data("bs.modal", f = new c(this,g)),
                    "string" == typeof b ? f[b](d) : g.show && f.show(d)
            })
        }
        var c = function(b, c) {
            this.options = c,
                this.$body = a(document.body),
                this.$element = a(b),
                this.$dialog = this.$element.find(".modal-dialog"),
                this.$backdrop = null,
                this.isShown = null,
                this.originalBodyPad = null,
                this.scrollbarWidth = 0,
                this.ignoreBackdropClick = !1,
            this.options.remote && this.$element.find(".modal-content").load(this.options.remote, a.proxy(function() {
                this.$element.trigger("loaded.bs.modal")
            }, this))
        };
        c.VERSION = "3.3.6",
            c.TRANSITION_DURATION = 300,
            c.BACKDROP_TRANSITION_DURATION = 150,
            c.DEFAULTS = {
                backdrop: !0,
                keyboard: !0,
                show: !0
            },
            c.prototype.toggle = function(a) {
                return this.isShown ? this.hide() : this.show(a)
            }
            ,
            c.prototype.show = function(b) {
                var d = this
                    , e = a.Event("show.bs.modal", {
                    relatedTarget: b
                });
                this.$element.trigger(e),
                this.isShown || e.isDefaultPrevented() || (this.isShown = !0,
                    this.checkScrollbar(),
                    this.setScrollbar(),
                    this.$body.addClass("modal-open"),
                    this.escape(),
                    this.resize(),
                    this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)),
                    this.$dialog.on("mousedown.dismiss.bs.modal", function() {
                        d.$element.one("mouseup.dismiss.bs.modal", function(b) {
                            a(b.target).is(d.$element) && (d.ignoreBackdropClick = !0)
                        })
                    }),
                    this.backdrop(function() {
                        var e = a.support.transition && d.$element.hasClass("fade");
                        d.$element.parent().length || d.$element.appendTo(d.$body),
                            d.$element.show().scrollTop(0),
                            d.adjustDialog(),
                        e && d.$element[0].offsetWidth,
                            d.$element.addClass("in"),
                            d.enforceFocus();
                        var f = a.Event("shown.bs.modal", {
                            relatedTarget: b
                        });
                        e ? d.$dialog.one("bsTransitionEnd", function() {
                            d.$element.trigger("focus").trigger(f)
                        }).emulateTransitionEnd(c.TRANSITION_DURATION) : d.$element.trigger("focus").trigger(f)
                    }))
            }
            ,
            c.prototype.hide = function(b) {
                b && b.preventDefault(),
                    b = a.Event("hide.bs.modal"),
                    this.$element.trigger(b),
                this.isShown && !b.isDefaultPrevented() && (this.isShown = !1,
                    this.escape(),
                    this.resize(),
                    a(document).off("focusin.bs.modal"),
                    this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),
                    this.$dialog.off("mousedown.dismiss.bs.modal"),
                    a.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", a.proxy(this.hideModal, this)).emulateTransitionEnd(c.TRANSITION_DURATION) : this.hideModal())
            }
            ,
            c.prototype.enforceFocus = function() {
                a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function(a) {
                    this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.trigger("focus")
                }, this))
            }
            ,
            c.prototype.escape = function() {
                this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", a.proxy(function(a) {
                    27 == a.which && this.hide()
                }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
            }
            ,
            c.prototype.resize = function() {
                this.isShown ? a(window).on("resize.bs.modal", a.proxy(this.handleUpdate, this)) : a(window).off("resize.bs.modal")
            }
            ,
            c.prototype.hideModal = function() {
                var a = this;
                this.$element.hide(),
                    this.backdrop(function() {
                        a.$body.removeClass("modal-open"),
                            a.resetAdjustments(),
                            a.resetScrollbar(),
                            a.$element.trigger("hidden.bs.modal")
                    })
            }
            ,
            c.prototype.removeBackdrop = function() {
                this.$backdrop && this.$backdrop.remove(),
                    this.$backdrop = null
            }
            ,
            c.prototype.backdrop = function(b) {
                var d = this
                    , e = this.$element.hasClass("fade") ? "fade" : "";
                if (this.isShown && this.options.backdrop) {
                    var f = a.support.transition && e;
                    if (this.$backdrop = a(document.createElement("div")).addClass("modal-backdrop " + e).appendTo(this.$body),
                            this.$element.on("click.dismiss.bs.modal", a.proxy(function(a) {
                                return this.ignoreBackdropClick ? void (this.ignoreBackdropClick = !1) : void (a.target === a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
                            }, this)),
                        f && this.$backdrop[0].offsetWidth,
                            this.$backdrop.addClass("in"),
                            !b)
                        return;
                    f ? this.$backdrop.one("bsTransitionEnd", b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : b()
                } else if (!this.isShown && this.$backdrop) {
                    this.$backdrop.removeClass("in");
                    var g = function() {
                        d.removeBackdrop(),
                        b && b()
                    };
                    a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : g()
                } else
                    b && b()
            }
            ,
            c.prototype.handleUpdate = function() {
                this.adjustDialog()
            }
            ,
            c.prototype.adjustDialog = function() {
                var a = this.$element[0].scrollHeight > document.documentElement.clientHeight;
                this.$element.css({
                    paddingLeft: !this.bodyIsOverflowing && a ? this.scrollbarWidth : "",
                    paddingRight: this.bodyIsOverflowing && !a ? this.scrollbarWidth : ""
                })
            }
            ,
            c.prototype.resetAdjustments = function() {
                this.$element.css({
                    paddingLeft: "",
                    paddingRight: ""
                })
            }
            ,
            c.prototype.checkScrollbar = function() {
                var a = window.innerWidth;
                if (!a) {
                    var b = document.documentElement.getBoundingClientRect();
                    a = b.right - Math.abs(b.left)
                }
                this.bodyIsOverflowing = document.body.clientWidth < a,
                    this.scrollbarWidth = this.measureScrollbar()
            }
            ,
            c.prototype.setScrollbar = function() {
                var a = parseInt(this.$body.css("padding-right") || 0, 10);
                this.originalBodyPad = document.body.style.paddingRight || "",
                this.bodyIsOverflowing && this.$body.css("padding-right", a + this.scrollbarWidth)
            }
            ,
            c.prototype.resetScrollbar = function() {
                this.$body.css("padding-right", this.originalBodyPad)
            }
            ,
            c.prototype.measureScrollbar = function() {
                var a = document.createElement("div");
                a.className = "modal-scrollbar-measure",
                    this.$body.append(a);
                var b = a.offsetWidth - a.clientWidth;
                return this.$body[0].removeChild(a),
                    b
            }
        ;
        var d = a.fn.modal;
        a.fn.modal = b,
            a.fn.modal.Constructor = c,
            a.fn.modal.noConflict = function() {
                return a.fn.modal = d,
                    this
            }
            ,
            a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(c) {
                var d = a(this)
                    , e = d.attr("href")
                    , f = a(d.attr("data-target") || e && e.replace(/.*(?=#[^\s]+$)/, ""))
                    , g = f.data("bs.modal") ? "toggle" : a.extend({
                    remote: !/#/.test(e) && e
                }, f.data(), d.data());
                d.is("a") && c.preventDefault(),
                    f.one("show.bs.modal", function(a) {
                        a.isDefaultPrevented() || f.one("hidden.bs.modal", function() {
                            d.is(":visible") && d.trigger("focus")
                        })
                    }),
                    b.call(f, g, this)
            })
    }(jQuery),
    +function(a) {
        "use strict";
        function b(b) {
            return this.each(function() {
                var d = a(this)
                    , e = d.data("bs.tooltip")
                    , f = "object" == typeof b && b;
                !e && /destroy|hide/.test(b) || (e || d.data("bs.tooltip", e = new c(this,f)),
                "string" == typeof b && e[b]())
            })
        }
        var c = function(a, b) {
            this.type = null,
                this.options = null,
                this.enabled = null,
                this.timeout = null,
                this.hoverState = null,
                this.$element = null,
                this.inState = null,
                this.init("tooltip", a, b)
        };
        c.VERSION = "3.3.6",
            c.TRANSITION_DURATION = 150,
            c.DEFAULTS = {
                animation: !0,
                placement: "top",
                selector: !1,
                template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
                trigger: "hover focus",
                title: "",
                delay: 0,
                html: !1,
                container: !1,
                viewport: {
                    selector: "body",
                    padding: 0
                }
            },
            c.prototype.init = function(b, c, d) {
                if (this.enabled = !0,
                        this.type = b,
                        this.$element = a(c),
                        this.options = this.getOptions(d),
                        this.$viewport = this.options.viewport && a(a.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport),
                        this.inState = {
                            click: !1,
                            hover: !1,
                            focus: !1
                        },
                    this.$element[0]instanceof document.constructor && !this.options.selector)
                    throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
                for (var e = this.options.trigger.split(" "), f = e.length; f--; ) {
                    var g = e[f];
                    if ("click" == g)
                        this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this));
                    else if ("manual" != g) {
                        var h = "hover" == g ? "mouseenter" : "focusin"
                            , i = "hover" == g ? "mouseleave" : "focusout";
                        this.$element.on(h + "." + this.type, this.options.selector, a.proxy(this.enter, this)),
                            this.$element.on(i + "." + this.type, this.options.selector, a.proxy(this.leave, this))
                    }
                }
                this.options.selector ? this._options = a.extend({}, this.options, {
                    trigger: "manual",
                    selector: ""
                }) : this.fixTitle()
            }
            ,
            c.prototype.getDefaults = function() {
                return c.DEFAULTS
            }
            ,
            c.prototype.getOptions = function(b) {
                return b = a.extend({}, this.getDefaults(), this.$element.data(), b),
                b.delay && "number" == typeof b.delay && (b.delay = {
                    show: b.delay,
                    hide: b.delay
                }),
                    b
            }
            ,
            c.prototype.getDelegateOptions = function() {
                var b = {}
                    , c = this.getDefaults();
                return this._options && a.each(this._options, function(a, d) {
                    c[a] != d && (b[a] = d)
                }),
                    b
            }
            ,
            c.prototype.enter = function(b) {
                var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
                return c || (c = new this.constructor(b.currentTarget,this.getDelegateOptions()),
                    a(b.currentTarget).data("bs." + this.type, c)),
                b instanceof a.Event && (c.inState["focusin" == b.type ? "focus" : "hover"] = !0),
                    c.tip().hasClass("in") || "in" == c.hoverState ? void (c.hoverState = "in") : (clearTimeout(c.timeout),
                        c.hoverState = "in",
                        c.options.delay && c.options.delay.show ? void (c.timeout = setTimeout(function() {
                            "in" == c.hoverState && c.show()
                        }, c.options.delay.show)) : c.show())
            }
            ,
            c.prototype.isInStateTrue = function() {
                for (var a in this.inState)
                    if (this.inState[a])
                        return !0;
                return !1
            }
            ,
            c.prototype.leave = function(b) {
                var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
                if (c || (c = new this.constructor(b.currentTarget,this.getDelegateOptions()),
                        a(b.currentTarget).data("bs." + this.type, c)),
                    b instanceof a.Event && (c.inState["focusout" == b.type ? "focus" : "hover"] = !1),
                        !c.isInStateTrue())
                    return clearTimeout(c.timeout),
                        c.hoverState = "out",
                        c.options.delay && c.options.delay.hide ? void (c.timeout = setTimeout(function() {
                            "out" == c.hoverState && c.hide()
                        }, c.options.delay.hide)) : c.hide()
            }
            ,
            c.prototype.show = function() {
                var b = a.Event("show.bs." + this.type);
                if (this.hasContent() && this.enabled) {
                    this.$element.trigger(b);
                    var d = a.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
                    if (b.isDefaultPrevented() || !d)
                        return;
                    var e = this
                        , f = this.tip()
                        , g = this.getUID(this.type);
                    this.setContent(),
                        f.attr("id", g),
                        this.$element.attr("aria-describedby", g),
                    this.options.animation && f.addClass("fade");
                    var h = "function" == typeof this.options.placement ? this.options.placement.call(this, f[0], this.$element[0]) : this.options.placement
                        , i = /\s?auto?\s?/i
                        , j = i.test(h);
                    j && (h = h.replace(i, "") || "top"),
                        f.detach().css({
                            top: 0,
                            left: 0,
                            display: "block"
                        }).addClass(h).data("bs." + this.type, this),
                        this.options.container ? f.appendTo(this.options.container) : f.insertAfter(this.$element),
                        this.$element.trigger("inserted.bs." + this.type);
                    var k = this.getPosition()
                        , l = f[0].offsetWidth
                        , m = f[0].offsetHeight;
                    if (j) {
                        var n = h
                            , o = this.getPosition(this.$viewport);
                        h = "bottom" == h && k.bottom + m > o.bottom ? "top" : "top" == h && k.top - m < o.top ? "bottom" : "right" == h && k.right + l > o.width ? "left" : "left" == h && k.left - l < o.left ? "right" : h,
                            f.removeClass(n).addClass(h)
                    }
                    var p = this.getCalculatedOffset(h, k, l, m);
                    this.applyPlacement(p, h);
                    var q = function() {
                        var a = e.hoverState;
                        e.$element.trigger("shown.bs." + e.type),
                            e.hoverState = null,
                        "out" == a && e.leave(e)
                    };
                    a.support.transition && this.$tip.hasClass("fade") ? f.one("bsTransitionEnd", q).emulateTransitionEnd(c.TRANSITION_DURATION) : q()
                }
            }
            ,
            c.prototype.applyPlacement = function(b, c) {
                var d = this.tip()
                    , e = d[0].offsetWidth
                    , f = d[0].offsetHeight
                    , g = parseInt(d.css("margin-top"), 10)
                    , h = parseInt(d.css("margin-left"), 10);
                isNaN(g) && (g = 0),
                isNaN(h) && (h = 0),
                    b.top += g,
                    b.left += h,
                    a.offset.setOffset(d[0], a.extend({
                        using: function(a) {
                            d.css({
                                top: Math.round(a.top),
                                left: Math.round(a.left)
                            })
                        }
                    }, b), 0),
                    d.addClass("in");
                var i = d[0].offsetWidth
                    , j = d[0].offsetHeight;
                "top" == c && j != f && (b.top = b.top + f - j);
                var k = this.getViewportAdjustedDelta(c, b, i, j);
                k.left ? b.left += k.left : b.top += k.top;
                var l = /top|bottom/.test(c)
                    , m = l ? 2 * k.left - e + i : 2 * k.top - f + j
                    , n = l ? "offsetWidth" : "offsetHeight";
                d.offset(b),
                    this.replaceArrow(m, d[0][n], l)
            }
            ,
            c.prototype.replaceArrow = function(a, b, c) {
                this.arrow().css(c ? "left" : "top", 50 * (1 - a / b) + "%").css(c ? "top" : "left", "")
            }
            ,
            c.prototype.setContent = function() {
                var a = this.tip()
                    , b = this.getTitle();
                a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b),
                    a.removeClass("fade in top bottom left right")
            }
            ,
            c.prototype.hide = function(b) {
                function d() {
                    "in" != e.hoverState && f.detach(),
                        e.$element.removeAttr("aria-describedby").trigger("hidden.bs." + e.type),
                    b && b()
                }
                var e = this
                    , f = a(this.$tip)
                    , g = a.Event("hide.bs." + this.type);
                if (this.$element.trigger(g),
                        !g.isDefaultPrevented())
                    return f.removeClass("in"),
                        a.support.transition && f.hasClass("fade") ? f.one("bsTransitionEnd", d).emulateTransitionEnd(c.TRANSITION_DURATION) : d(),
                        this.hoverState = null,
                        this
            }
            ,
            c.prototype.fixTitle = function() {
                var a = this.$element;
                (a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "")
            }
            ,
            c.prototype.hasContent = function() {
                return this.getTitle()
            }
            ,
            c.prototype.getPosition = function(b) {
                b = b || this.$element;
                var c = b[0]
                    , d = "BODY" == c.tagName
                    , e = c.getBoundingClientRect();
                null == e.width && (e = a.extend({}, e, {
                    width: e.right - e.left,
                    height: e.bottom - e.top
                }));
                var f = d ? {
                    top: 0,
                    left: 0
                } : b.offset()
                    , g = {
                    scroll: d ? document.documentElement.scrollTop || document.body.scrollTop : b.scrollTop()
                }
                    , h = d ? {
                    width: a(window).width(),
                    height: a(window).height()
                } : null;
                return a.extend({}, e, g, h, f)
            }
            ,
            c.prototype.getCalculatedOffset = function(a, b, c, d) {
                return "bottom" == a ? {
                    top: b.top + b.height,
                    left: b.left + b.width / 2 - c / 2
                } : "top" == a ? {
                    top: b.top - d,
                    left: b.left + b.width / 2 - c / 2
                } : "left" == a ? {
                    top: b.top + b.height / 2 - d / 2,
                    left: b.left - c
                } : {
                    top: b.top + b.height / 2 - d / 2,
                    left: b.left + b.width
                }
            }
            ,
            c.prototype.getViewportAdjustedDelta = function(a, b, c, d) {
                var e = {
                    top: 0,
                    left: 0
                };
                if (!this.$viewport)
                    return e;
                var f = this.options.viewport && this.options.viewport.padding || 0
                    , g = this.getPosition(this.$viewport);
                if (/right|left/.test(a)) {
                    var h = b.top - f - g.scroll
                        , i = b.top + f - g.scroll + d;
                    h < g.top ? e.top = g.top - h : i > g.top + g.height && (e.top = g.top + g.height - i)
                } else {
                    var j = b.left - f
                        , k = b.left + f + c;
                    j < g.left ? e.left = g.left - j : k > g.right && (e.left = g.left + g.width - k)
                }
                return e
            }
            ,
            c.prototype.getTitle = function() {
                var a, b = this.$element, c = this.options;
                return a = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title)
            }
            ,
            c.prototype.getUID = function(a) {
                do
                    a += ~~(1e6 * Math.random());
                while (document.getElementById(a));return a
            }
            ,
            c.prototype.tip = function() {
                if (!this.$tip && (this.$tip = a(this.options.template),
                    1 != this.$tip.length))
                    throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
                return this.$tip
            }
            ,
            c.prototype.arrow = function() {
                return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
            }
            ,
            c.prototype.enable = function() {
                this.enabled = !0
            }
            ,
            c.prototype.disable = function() {
                this.enabled = !1
            }
            ,
            c.prototype.toggleEnabled = function() {
                this.enabled = !this.enabled
            }
            ,
            c.prototype.toggle = function(b) {
                var c = this;
                b && (c = a(b.currentTarget).data("bs." + this.type),
                c || (c = new this.constructor(b.currentTarget,this.getDelegateOptions()),
                    a(b.currentTarget).data("bs." + this.type, c))),
                    b ? (c.inState.click = !c.inState.click,
                        c.isInStateTrue() ? c.enter(c) : c.leave(c)) : c.tip().hasClass("in") ? c.leave(c) : c.enter(c)
            }
            ,
            c.prototype.destroy = function() {
                var a = this;
                clearTimeout(this.timeout),
                    this.hide(function() {
                        a.$element.off("." + a.type).removeData("bs." + a.type),
                        a.$tip && a.$tip.detach(),
                            a.$tip = null,
                            a.$arrow = null,
                            a.$viewport = null
                    })
            }
        ;
        var d = a.fn.tooltip;
        a.fn.tooltip = b,
            a.fn.tooltip.Constructor = c,
            a.fn.tooltip.noConflict = function() {
                return a.fn.tooltip = d,
                    this
            }
    }(jQuery),
    +function(a) {
        "use strict";
        function b(b) {
            return this.each(function() {
                var d = a(this)
                    , e = d.data("bs.popover")
                    , f = "object" == typeof b && b;
                !e && /destroy|hide/.test(b) || (e || d.data("bs.popover", e = new c(this,f)),
                "string" == typeof b && e[b]())
            })
        }
        var c = function(a, b) {
            this.init("popover", a, b)
        };
        if (!a.fn.tooltip)
            throw new Error("Popover requires tooltip.js");
        c.VERSION = "3.3.6",
            c.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, {
                placement: "right",
                trigger: "click",
                content: "",
                template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
            }),
            c.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype),
            c.prototype.constructor = c,
            c.prototype.getDefaults = function() {
                return c.DEFAULTS
            }
            ,
            c.prototype.setContent = function() {
                var a = this.tip()
                    , b = this.getTitle()
                    , c = this.getContent();
                a.find(".popover-title")[this.options.html ? "html" : "text"](b),
                    a.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof c ? "html" : "append" : "text"](c),
                    a.removeClass("fade top bottom left right in"),
                a.find(".popover-title").html() || a.find(".popover-title").hide()
            }
            ,
            c.prototype.hasContent = function() {
                return this.getTitle() || this.getContent()
            }
            ,
            c.prototype.getContent = function() {
                var a = this.$element
                    , b = this.options;
                return a.attr("data-content") || ("function" == typeof b.content ? b.content.call(a[0]) : b.content)
            }
            ,
            c.prototype.arrow = function() {
                return this.$arrow = this.$arrow || this.tip().find(".arrow")
            }
        ;
        var d = a.fn.popover;
        a.fn.popover = b,
            a.fn.popover.Constructor = c,
            a.fn.popover.noConflict = function() {
                return a.fn.popover = d,
                    this
            }
    }(jQuery),
    +function(a) {
        "use strict";
        function b(c, d) {
            this.$body = a(document.body),
                this.$scrollElement = a(a(c).is(document.body) ? window : c),
                this.options = a.extend({}, b.DEFAULTS, d),
                this.selector = (this.options.target || "") + " .nav li > a",
                this.offsets = [],
                this.targets = [],
                this.activeTarget = null,
                this.scrollHeight = 0,
                this.$scrollElement.on("scroll.bs.scrollspy", a.proxy(this.process, this)),
                this.refresh(),
                this.process()
        }
        function c(c) {
            return this.each(function() {
                var d = a(this)
                    , e = d.data("bs.scrollspy")
                    , f = "object" == typeof c && c;
                e || d.data("bs.scrollspy", e = new b(this,f)),
                "string" == typeof c && e[c]()
            })
        }
        b.VERSION = "3.3.6",
            b.DEFAULTS = {
                offset: 10
            },
            b.prototype.getScrollHeight = function() {
                return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
            }
            ,
            b.prototype.refresh = function() {
                var b = this
                    , c = "offset"
                    , d = 0;
                this.offsets = [],
                    this.targets = [],
                    this.scrollHeight = this.getScrollHeight(),
                a.isWindow(this.$scrollElement[0]) || (c = "position",
                    d = this.$scrollElement.scrollTop()),
                    this.$body.find(this.selector).map(function() {
                        var b = a(this)
                            , e = b.data("target") || b.attr("href")
                            , f = /^#./.test(e) && a(e);
                        return f && f.length && f.is(":visible") && [[f[c]().top + d, e]] || null
                    }).sort(function(a, b) {
                        return a[0] - b[0]
                    }).each(function() {
                        b.offsets.push(this[0]),
                            b.targets.push(this[1])
                    })
            }
            ,
            b.prototype.process = function() {
                var a, b = this.$scrollElement.scrollTop() + this.options.offset, c = this.getScrollHeight(), d = this.options.offset + c - this.$scrollElement.height(), e = this.offsets, f = this.targets, g = this.activeTarget;
                if (this.scrollHeight != c && this.refresh(),
                    b >= d)
                    return g != (a = f[f.length - 1]) && this.activate(a);
                if (g && b < e[0])
                    return this.activeTarget = null,
                        this.clear();
                for (a = e.length; a--; )
                    g != f[a] && b >= e[a] && (void 0 === e[a + 1] || b < e[a + 1]) && this.activate(f[a])
            }
            ,
            b.prototype.activate = function(b) {
                this.activeTarget = b,
                    this.clear();
                var c = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]'
                    , d = a(c).parents("li").addClass("active");
                d.parent(".dropdown-menu").length && (d = d.closest("li.dropdown").addClass("active")),
                    d.trigger("activate.bs.scrollspy")
            }
            ,
            b.prototype.clear = function() {
                a(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
            }
        ;
        var d = a.fn.scrollspy;
        a.fn.scrollspy = c,
            a.fn.scrollspy.Constructor = b,
            a.fn.scrollspy.noConflict = function() {
                return a.fn.scrollspy = d,
                    this
            }
            ,
            a(window).on("load.bs.scrollspy.data-api", function() {
                a('[data-spy="scroll"]').each(function() {
                    var b = a(this);
                    c.call(b, b.data())
                })
            })
    }(jQuery),
    +function(a) {
        "use strict";
        function b(b) {
            return this.each(function() {
                var d = a(this)
                    , e = d.data("bs.tab");
                e || d.data("bs.tab", e = new c(this)),
                "string" == typeof b && e[b]()
            })
        }
        var c = function(b) {
            this.element = a(b)
        };
        c.VERSION = "3.3.6",
            c.TRANSITION_DURATION = 150,
            c.prototype.show = function() {
                var b = this.element
                    , c = b.closest("ul:not(.dropdown-menu)")
                    , d = b.data("target");
                if (d || (d = b.attr("href"),
                        d = d && d.replace(/.*(?=#[^\s]*$)/, "")),
                        !b.parent("li").hasClass("active")) {
                    var e = c.find(".active:last a")
                        , f = a.Event("hide.bs.tab", {
                        relatedTarget: b[0]
                    })
                        , g = a.Event("show.bs.tab", {
                        relatedTarget: e[0]
                    });
                    if (e.trigger(f),
                            b.trigger(g),
                        !g.isDefaultPrevented() && !f.isDefaultPrevented()) {
                        var h = a(d);
                        this.activate(b.closest("li"), c),
                            this.activate(h, h.parent(), function() {
                                e.trigger({
                                    type: "hidden.bs.tab",
                                    relatedTarget: b[0]
                                }),
                                    b.trigger({
                                        type: "shown.bs.tab",
                                        relatedTarget: e[0]
                                    })
                            })
                    }
                }
            }
            ,
            c.prototype.activate = function(b, d, e) {
                function f() {
                    g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1),
                        b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0),
                        h ? (b[0].offsetWidth,
                            b.addClass("in")) : b.removeClass("fade"),
                    b.parent(".dropdown-menu").length && b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0),
                    e && e()
                }
                var g = d.find("> .active")
                    , h = e && a.support.transition && (g.length && g.hasClass("fade") || !!d.find("> .fade").length);
                g.length && h ? g.one("bsTransitionEnd", f).emulateTransitionEnd(c.TRANSITION_DURATION) : f(),
                    g.removeClass("in")
            }
        ;
        var d = a.fn.tab;
        a.fn.tab = b,
            a.fn.tab.Constructor = c,
            a.fn.tab.noConflict = function() {
                return a.fn.tab = d,
                    this
            }
        ;
        var e = function(c) {
            c.preventDefault(),
                b.call(a(this), "show")
        };
        a(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', e).on("click.bs.tab.data-api", '[data-toggle="pill"]', e)
    }(jQuery),
    +function(a) {
        "use strict";
        function b(b) {
            var c, d = b.attr("data-target") || (c = b.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, "");
            return a(d)
        }
        function c(b) {
            return this.each(function() {
                var c = a(this)
                    , e = c.data("bs.collapse")
                    , f = a.extend({}, d.DEFAULTS, c.data(), "object" == typeof b && b);
                !e && f.toggle && /show|hide/.test(b) && (f.toggle = !1),
                e || c.data("bs.collapse", e = new d(this,f)),
                "string" == typeof b && e[b]()
            })
        }
        var d = function(b, c) {
            this.$element = a(b),
                this.options = a.extend({}, d.DEFAULTS, c),
                this.$trigger = a('[data-toggle="collapse"][href="#' + b.id + '"],[data-toggle="collapse"][data-target="#' + b.id + '"]'),
                this.transitioning = null,
                this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger),
            this.options.toggle && this.toggle()
        };
        d.VERSION = "3.3.6",
            d.TRANSITION_DURATION = 350,
            d.DEFAULTS = {
                toggle: !0
            },
            d.prototype.dimension = function() {
                var a = this.$element.hasClass("width");
                return a ? "width" : "height"
            }
            ,
            d.prototype.show = function() {
                if (!this.transitioning && !this.$element.hasClass("in")) {
                    var b, e = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
                    if (!(e && e.length && (b = e.data("bs.collapse"),
                        b && b.transitioning))) {
                        var f = a.Event("show.bs.collapse");
                        if (this.$element.trigger(f),
                                !f.isDefaultPrevented()) {
                            e && e.length && (c.call(e, "hide"),
                            b || e.data("bs.collapse", null));
                            var g = this.dimension();
                            this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded", !0),
                                this.$trigger.removeClass("collapsed").attr("aria-expanded", !0),
                                this.transitioning = 1;
                            var h = function() {
                                this.$element.removeClass("collapsing").addClass("collapse in")[g](""),
                                    this.transitioning = 0,
                                    this.$element.trigger("shown.bs.collapse")
                            };
                            if (!a.support.transition)
                                return h.call(this);
                            var i = a.camelCase(["scroll", g].join("-"));
                            this.$element.one("bsTransitionEnd", a.proxy(h, this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])
                        }
                    }
                }
            }
            ,
            d.prototype.hide = function() {
                if (!this.transitioning && this.$element.hasClass("in")) {
                    var b = a.Event("hide.bs.collapse");
                    if (this.$element.trigger(b),
                            !b.isDefaultPrevented()) {
                        var c = this.dimension();
                        this.$element[c](this.$element[c]())[0].offsetHeight,
                            this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1),
                            this.$trigger.addClass("collapsed").attr("aria-expanded", !1),
                            this.transitioning = 1;
                        var e = function() {
                            this.transitioning = 0,
                                this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                        };
                        return a.support.transition ? void this.$element[c](0).one("bsTransitionEnd", a.proxy(e, this)).emulateTransitionEnd(d.TRANSITION_DURATION) : e.call(this)
                    }
                }
            }
            ,
            d.prototype.toggle = function() {
                this[this.$element.hasClass("in") ? "hide" : "show"]()
            }
            ,
            d.prototype.getParent = function() {
                return a(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(a.proxy(function(c, d) {
                    var e = a(d);
                    this.addAriaAndCollapsedClass(b(e), e)
                }, this)).end()
            }
            ,
            d.prototype.addAriaAndCollapsedClass = function(a, b) {
                var c = a.hasClass("in");
                a.attr("aria-expanded", c),
                    b.toggleClass("collapsed", !c).attr("aria-expanded", c)
            }
        ;
        var e = a.fn.collapse;
        a.fn.collapse = c,
            a.fn.collapse.Constructor = d,
            a.fn.collapse.noConflict = function() {
                return a.fn.collapse = e,
                    this
            }
            ,
            a(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(d) {
                var e = a(this);
                e.attr("data-target") || d.preventDefault();
                var f = b(e)
                    , g = f.data("bs.collapse")
                    , h = g ? "toggle" : e.data();
                c.call(f, h)
            })
    }(jQuery),
    +function(a) {
        "use strict";
        function b() {
            var a = document.createElement("bootstrap")
                , b = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
            for (var c in b)
                if (void 0 !== a.style[c])
                    return {
                        end: b[c]
                    };
            return !1
        }
        a.fn.emulateTransitionEnd = function(b) {
            var c = !1
                , d = this;
            a(this).one("bsTransitionEnd", function() {
                c = !0
            });
            var e = function() {
                c || a(d).trigger(a.support.transition.end)
            };
            return setTimeout(e, b),
                this
        }
            ,
            a(function() {
                a.support.transition = b(),
                a.support.transition && (a.event.special.bsTransitionEnd = {
                    bindType: a.support.transition.end,
                    delegateType: a.support.transition.end,
                    handle: function(b) {
                        if (a(b.target).is(this))
                            return b.handleObj.handler.apply(this, arguments)
                    }
                })
            })
    }(jQuery),
    function(a) {
        var b = function() {
            "use strict";
            return {
                isMsie: function() {
                    return !!/(msie|trident)/i.test(navigator.userAgent) && navigator.userAgent.match(/(msie |rv:)(\d+(.\d+)?)/i)[2]
                },
                isBlankString: function(a) {
                    return !a || /^\s*$/.test(a)
                },
                escapeRegExChars: function(a) {
                    return a.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
                },
                isString: function(a) {
                    return "string" == typeof a
                },
                isNumber: function(a) {
                    return "number" == typeof a
                },
                isArray: a.isArray,
                isFunction: a.isFunction,
                isObject: a.isPlainObject,
                isUndefined: function(a) {
                    return "undefined" == typeof a
                },
                toStr: function(a) {
                    return b.isUndefined(a) || null === a ? "" : a + ""
                },
                bind: a.proxy,
                each: function(b, c) {
                    function d(a, b) {
                        return c(b, a)
                    }
                    a.each(b, d)
                },
                map: a.map,
                filter: a.grep,
                every: function(b, c) {
                    var d = !0;
                    return b ? (a.each(b, function(a, e) {
                        if (!(d = c.call(null, e, a, b)))
                            return !1
                    }),
                        !!d) : d
                },
                some: function(b, c) {
                    var d = !1;
                    return b ? (a.each(b, function(a, e) {
                        if (d = c.call(null, e, a, b))
                            return !1
                    }),
                        !!d) : d
                },
                mixin: a.extend,
                getUniqueId: function() {
                    var a = 0;
                    return function() {
                        return a++
                    }
                }(),
                templatify: function(b) {
                    function c() {
                        return String(b)
                    }
                    return a.isFunction(b) ? b : c
                },
                defer: function(a) {
                    setTimeout(a, 0)
                },
                debounce: function(a, b, c) {
                    var d, e;
                    return function() {
                        var f, g, h = this, i = arguments;
                        return f = function() {
                            d = null,
                            c || (e = a.apply(h, i))
                        }
                            ,
                            g = c && !d,
                            clearTimeout(d),
                            d = setTimeout(f, b),
                        g && (e = a.apply(h, i)),
                            e
                    }
                },
                throttle: function(a, b) {
                    var c, d, e, f, g, h;
                    return g = 0,
                        h = function() {
                            g = new Date,
                                e = null,
                                f = a.apply(c, d)
                        }
                        ,
                        function() {
                            var i = new Date
                                , j = b - (i - g);
                            return c = this,
                                d = arguments,
                                j <= 0 ? (clearTimeout(e),
                                    e = null,
                                    g = i,
                                    f = a.apply(c, d)) : e || (e = setTimeout(h, j)),
                                f
                        }
                },
                noop: function() {}
            }
        }()
            , c = function() {
            return {
                wrapper: '<span class="twitter-typeahead"></span>',
                dropdown: '<span class="tt-dropdown-menu"></span>',
                dataset: '<div class="tt-dataset-%CLASS%"></div>',
                suggestions: '<span class="tt-suggestions"></span>',
                suggestion: '<div class="tt-suggestion"></div>'
            }
        }()
            , d = function() {
            "use strict";
            var a = {
                wrapper: {
                    position: "relative",
                    display: "inline-block"
                },
                hint: {
                    position: "absolute",
                    top: "0",
                    left: "0",
                    borderColor: "transparent",
                    boxShadow: "none",
                    opacity: "1"
                },
                input: {
                    position: "relative",
                    verticalAlign: "top",
                    backgroundColor: "transparent"
                },
                inputWithNoHint: {
                    position: "relative",
                    verticalAlign: "top"
                },
                dropdown: {
                    position: "absolute",
                    top: "100%",
                    left: "0",
                    zIndex: "100",
                    display: "none"
                },
                suggestions: {
                    display: "block"
                },
                suggestion: {
                    whiteSpace: "nowrap",
                    cursor: "pointer"
                },
                suggestionChild: {
                    whiteSpace: "normal"
                },
                ltr: {
                    left: "0",
                    right: "auto"
                },
                rtl: {
                    left: "auto",
                    right: " 0"
                }
            };
            return b.isMsie() && b.mixin(a.input, {
                backgroundImage: "url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)"
            }),
            b.isMsie() && b.isMsie() <= 7 && b.mixin(a.input, {
                marginTop: "-1px"
            }),
                a
        }()
            , e = function() {
            "use strict";
            function c(b) {
                b && b.el || a.error("EventBus initialized without el"),
                    this.$el = a(b.el)
            }
            var d = "typeahead:";
            return b.mixin(c.prototype, {
                trigger: function(a) {
                    var b = [].slice.call(arguments, 1);
                    this.$el.trigger(d + a, b)
                }
            }),
                c
        }()
            , f = function() {
            "use strict";
            function a(a, b, c, d) {
                var e;
                if (!c)
                    return this;
                for (b = b.split(i),
                         c = d ? h(c, d) : c,
                         this._callbacks = this._callbacks || {}; e = b.shift(); )
                    this._callbacks[e] = this._callbacks[e] || {
                        sync: [],
                        async: []
                    },
                        this._callbacks[e][a].push(c);
                return this
            }
            function b(b, c, d) {
                return a.call(this, "async", b, c, d)
            }
            function c(b, c, d) {
                return a.call(this, "sync", b, c, d)
            }
            function d(a) {
                var b;
                if (!this._callbacks)
                    return this;
                for (a = a.split(i); b = a.shift(); )
                    delete this._callbacks[b];
                return this
            }
            function e(a) {
                var b, c, d, e, g;
                if (!this._callbacks)
                    return this;
                for (a = a.split(i),
                         d = [].slice.call(arguments, 1); (b = a.shift()) && (c = this._callbacks[b]); )
                    e = f(c.sync, this, [b].concat(d)),
                        g = f(c.async, this, [b].concat(d)),
                    e() && j(g);
                return this
            }
            function f(a, b, c) {
                function d() {
                    for (var d, e = 0, f = a.length; !d && e < f; e += 1)
                        d = a[e].apply(b, c) === !1;
                    return !d
                }
                return d
            }
            function g() {
                var a;
                return a = window.setImmediate ? function(a) {
                        setImmediate(function() {
                            a()
                        })
                    }
                    : function(a) {
                        setTimeout(function() {
                            a()
                        }, 0)
                    }
            }
            function h(a, b) {
                return a.bind ? a.bind(b) : function() {
                    a.apply(b, [].slice.call(arguments, 0))
                }
            }
            var i = /\s+/
                , j = g();
            return {
                onSync: c,
                onAsync: b,
                off: d,
                trigger: e
            }
        }()
            , g = function(a) {
            "use strict";
            function c(a, c, d) {
                for (var e, f = [], g = 0, h = a.length; g < h; g++)
                    f.push(b.escapeRegExChars(a[g]));
                return e = d ? "\\b(" + f.join("|") + ")\\b" : "(" + f.join("|") + ")",
                    c ? new RegExp(e) : new RegExp(e,"i")
            }
            var d = {
                node: null,
                pattern: null,
                tagName: "strong",
                className: null,
                wordsOnly: !1,
                caseSensitive: !1
            };
            return function(e) {
                function f(b) {
                    var c, d, f;
                    return (c = h.exec(b.data)) && (f = a.createElement(e.tagName),
                    e.className && (f.className = e.className),
                        d = b.splitText(c.index),
                        d.splitText(c[0].length),
                        f.appendChild(d.cloneNode(!0)),
                        b.parentNode.replaceChild(f, d)),
                        !!c
                }
                function g(a, b) {
                    for (var c, d = 3, e = 0; e < a.childNodes.length; e++)
                        c = a.childNodes[e],
                            c.nodeType === d ? e += b(c) ? 1 : 0 : g(c, b)
                }
                var h;
                e = b.mixin({}, d, e),
                e.node && e.pattern && (e.pattern = b.isArray(e.pattern) ? e.pattern : [e.pattern],
                    h = c(e.pattern, e.caseSensitive, e.wordsOnly),
                    g(e.node, f))
            }
        }(window.document)
            , h = function() {
            "use strict";
            function c(c) {
                var e, f, g, i, j = this;
                c = c || {},
                c.input || a.error("input is missing"),
                    e = b.bind(this._onBlur, this),
                    f = b.bind(this._onFocus, this),
                    g = b.bind(this._onKeydown, this),
                    i = b.bind(this._onInput, this),
                    this.$hint = a(c.hint),
                    this.$input = a(c.input).on("blur.tt", e).on("focus.tt", f).on("keydown.tt", g),
                0 === this.$hint.length && (this.setHint = this.getHint = this.clearHint = this.clearHintIfInvalid = b.noop),
                    b.isMsie() ? this.$input.on("keydown.tt keypress.tt cut.tt paste.tt", function(a) {
                        h[a.which || a.keyCode] || b.defer(b.bind(j._onInput, j, a))
                    }) : this.$input.on("input.tt", i),
                    this.query = this.$input.val(),
                    this.$overflowHelper = d(this.$input)
            }
            function d(b) {
                return a('<pre aria-hidden="true"></pre>').css({
                    position: "absolute",
                    visibility: "hidden",
                    whiteSpace: "pre",
                    fontFamily: b.css("font-family"),
                    fontSize: b.css("font-size"),
                    fontStyle: b.css("font-style"),
                    fontVariant: b.css("font-variant"),
                    fontWeight: b.css("font-weight"),
                    wordSpacing: b.css("word-spacing"),
                    letterSpacing: b.css("letter-spacing"),
                    textIndent: b.css("text-indent"),
                    textRendering: b.css("text-rendering"),
                    textTransform: b.css("text-transform")
                }).insertAfter(b)
            }
            function e(a, b) {
                return c.normalizeQuery(a) === c.normalizeQuery(b)
            }
            function g(a) {
                return a.altKey || a.ctrlKey || a.metaKey || a.shiftKey
            }
            var h;
            return h = {
                9: "tab",
                27: "esc",
                37: "left",
                39: "right",
                13: "enter",
                38: "up",
                40: "down"
            },
                c.normalizeQuery = function(a) {
                    return (a || "").replace(/^\s*/g, "").replace(/\s{2,}/g, " ")
                }
                ,
                b.mixin(c.prototype, f, {
                    _onBlur: function() {
                        this.resetInputValue(),
                            this.trigger("blurred")
                    },
                    _onFocus: function() {
                        this.trigger("focused")
                    },
                    _onKeydown: function(a) {
                        var b = h[a.which || a.keyCode];
                        this._managePreventDefault(b, a),
                        b && this._shouldTrigger(b, a) && this.trigger(b + "Keyed", a)
                    },
                    _onInput: function() {
                        this._checkInputValue()
                    },
                    _managePreventDefault: function(a, b) {
                        var c, d, e;
                        switch (a) {
                            case "tab":
                                d = this.getHint(),
                                    e = this.getInputValue(),
                                    c = d && d !== e && !g(b);
                                break;
                            case "up":
                            case "down":
                                c = !g(b);
                                break;
                            default:
                                c = !1
                        }
                        c && b.preventDefault()
                    },
                    _shouldTrigger: function(a, b) {
                        var c;
                        switch (a) {
                            case "tab":
                                c = !g(b);
                                break;
                            default:
                                c = !0
                        }
                        return c
                    },
                    _checkInputValue: function() {
                        var a, b, c;
                        a = this.getInputValue(),
                            b = e(a, this.query),
                            c = !!b && this.query.length !== a.length,
                            this.query = a,
                            b ? c && this.trigger("whitespaceChanged", this.query) : this.trigger("queryChanged", this.query)
                    },
                    focus: function() {
                        this.$input.focus()
                    },
                    blur: function() {
                        this.$input.blur()
                    },
                    getQuery: function() {
                        return this.query
                    },
                    setQuery: function(a) {
                        this.query = a
                    },
                    getInputValue: function() {
                        return this.$input.val()
                    },
                    setInputValue: function(a, b) {
                        this.$input.val(a),
                            b ? this.clearHint() : this._checkInputValue()
                    },
                    resetInputValue: function() {
                        this.setInputValue(this.query, !0)
                    },
                    getHint: function() {
                        return this.$hint.val()
                    },
                    setHint: function(a) {
                        this.$hint.val(a)
                    },
                    clearHint: function() {
                        this.setHint("")
                    },
                    clearHintIfInvalid: function() {
                        var a, b, c, d;
                        a = this.getInputValue(),
                            b = this.getHint(),
                            c = a !== b && 0 === b.indexOf(a),
                            d = "" !== a && c && !this.hasOverflow(),
                        !d && this.clearHint()
                    },
                    getLanguageDirection: function() {
                        return (this.$input.css("direction") || "ltr").toLowerCase()
                    },
                    hasOverflow: function() {
                        var a = this.$input.width() - 2;
                        return this.$overflowHelper.text(this.getInputValue()),
                        this.$overflowHelper.width() >= a
                    },
                    isCursorAtEnd: function() {
                        var a, c, d;
                        return a = this.$input.val().length,
                            c = this.$input[0].selectionStart,
                            b.isNumber(c) ? c === a : !document.selection || (d = document.selection.createRange(),
                                d.moveStart("character", -a),
                            a === d.text.length)
                    },
                    destroy: function() {
                        this.$hint.off(".tt"),
                            this.$input.off(".tt"),
                            this.$hint = this.$input = this.$overflowHelper = null
                    }
                }),
                c
        }()
            , i = function() {
            "use strict";
            function e(d) {
                d = d || {},
                    d.templates = d.templates || {},
                d.source || a.error("missing source"),
                d.name && !j(d.name) && a.error("invalid dataset name: " + d.name),
                    this.query = null,
                    this.highlight = !!d.highlight,
                    this.name = d.name || b.getUniqueId(),
                    this.source = d.source,
                    this.displayFn = h(d.display || d.displayKey),
                    this.templates = i(d.templates, this.displayFn),
                    this.$el = a(c.dataset.replace("%CLASS%", this.name))
            }
            function h(a) {
                function c(b) {
                    return b[a]
                }
                return a = a || "value",
                    b.isFunction(a) ? a : c
            }
            function i(a, c) {
                function d(a) {
                    return "<p>" + c(a) + "</p>"
                }
                return {
                    empty: a.empty && b.templatify(a.empty),
                    header: a.header && b.templatify(a.header),
                    footer: a.footer && b.templatify(a.footer),
                    suggestion: a.suggestion || d
                }
            }
            function j(a) {
                return /^[_a-zA-Z0-9-]+$/.test(a)
            }
            var k = "ttDataset"
                , l = "ttValue"
                , m = "ttDatum";
            return e.extractDatasetName = function(b) {
                return a(b).data(k)
            }
                ,
                e.extractValue = function(b) {
                    return a(b).data(l)
                }
                ,
                e.extractDatum = function(b) {
                    return a(b).data(m)
                }
                ,
                b.mixin(e.prototype, f, {
                    _render: function(e, f) {
                        function h() {
                            return p.templates.empty({
                                query: e,
                                isEmpty: !0
                            })
                        }
                        function i() {
                            function h(b) {
                                var e;
                                return e = a(c.suggestion).append(p.templates.suggestion(b)).data(k, p.name).data(l, p.displayFn(b)).data(m, b),
                                    e.children().each(function() {
                                        a(this).css(d.suggestionChild)
                                    }),
                                    e
                            }
                            var i, j;
                            return i = a(c.suggestions).css(d.suggestions),
                                j = b.map(f, h),
                                i.append.apply(i, j),
                            p.highlight && g({
                                className: "tt-highlight",
                                node: i[0],
                                pattern: e
                            }),
                                i
                        }
                        function j() {
                            return p.templates.header({
                                query: e,
                                isEmpty: !o
                            })
                        }
                        function n() {
                            return p.templates.footer({
                                query: e,
                                isEmpty: !o
                            })
                        }
                        if (this.$el) {
                            var o, p = this;
                            this.$el.empty(),
                                o = f && f.length,
                                !o && this.templates.empty ? this.$el.html(h()).prepend(p.templates.header ? j() : null).append(p.templates.footer ? n() : null) : o && this.$el.html(i()).prepend(p.templates.header ? j() : null).append(p.templates.footer ? n() : null),
                                this.trigger("rendered")
                        }
                    },
                    getRoot: function() {
                        return this.$el
                    },
                    update: function(a) {
                        function b(b) {
                            c.canceled || a !== c.query || c._render(a, b)
                        }
                        var c = this;
                        this.query = a,
                            this.canceled = !1,
                            this.source(a, b)
                    },
                    cancel: function() {
                        this.canceled = !0
                    },
                    clear: function() {
                        this.cancel(),
                            this.$el.empty(),
                            this.trigger("rendered")
                    },
                    isEmpty: function() {
                        return this.$el.is(":empty")
                    },
                    destroy: function() {
                        this.$el = null
                    }
                }),
                e
        }()
            , j = function() {
            "use strict";
            function c(c) {
                var d, f, g, h = this;
                c = c || {},
                c.menu || a.error("menu is required"),
                    this.isOpen = !1,
                    this.isEmpty = !0,
                    this.datasets = b.map(c.datasets, e),
                    d = b.bind(this._onSuggestionClick, this),
                    f = b.bind(this._onSuggestionMouseEnter, this),
                    g = b.bind(this._onSuggestionMouseLeave, this),
                    this.$menu = a(c.menu).on("click.tt", ".tt-suggestion", d).on("mouseenter.tt", ".tt-suggestion", f).on("mouseleave.tt", ".tt-suggestion", g),
                    b.each(this.datasets, function(a) {
                        h.$menu.append(a.getRoot()),
                            a.onSync("rendered", h._onRendered, h)
                    })
            }
            function e(a) {
                return new i(a)
            }
            return b.mixin(c.prototype, f, {
                _onSuggestionClick: function(b) {
                    this.trigger("suggestionClicked", a(b.currentTarget))
                },
                _onSuggestionMouseEnter: function(b) {
                    this._removeCursor(),
                        this._setCursor(a(b.currentTarget), !0)
                },
                _onSuggestionMouseLeave: function() {
                    this._removeCursor()
                },
                _onRendered: function() {
                    function a(a) {
                        return a.isEmpty()
                    }
                    this.isEmpty = b.every(this.datasets, a),
                        this.isEmpty ? this._hide() : this.isOpen && this._show(),
                        this.trigger("datasetRendered")
                },
                _hide: function() {
                    this.$menu.hide()
                },
                _show: function() {
                    this.$menu.css("display", "block")
                },
                _getSuggestions: function() {
                    return this.$menu.find(".tt-suggestion")
                },
                _getCursor: function() {
                    return this.$menu.find(".tt-cursor").first()
                },
                _setCursor: function(a, b) {
                    a.first().addClass("tt-cursor"),
                    !b && this.trigger("cursorMoved")
                },
                _removeCursor: function() {
                    this._getCursor().removeClass("tt-cursor")
                },
                _moveCursor: function(a) {
                    var b, c, d, e;
                    if (this.isOpen) {
                        if (c = this._getCursor(),
                                b = this._getSuggestions(),
                                this._removeCursor(),
                                d = b.index(c) + a,
                                d = (d + 1) % (b.length + 1) - 1,
                            d === -1)
                            return void this.trigger("cursorRemoved");
                        d < -1 && (d = b.length - 1),
                            this._setCursor(e = b.eq(d)),
                            this._ensureVisible(e)
                    }
                },
                _ensureVisible: function(a) {
                    var b, c, d, e;
                    b = a.position().top,
                        c = b + a.outerHeight(!0),
                        d = this.$menu.scrollTop(),
                        e = this.$menu.height() + parseInt(this.$menu.css("paddingTop"), 10) + parseInt(this.$menu.css("paddingBottom"), 10),
                        b < 0 ? this.$menu.scrollTop(d + b) : e < c && this.$menu.scrollTop(d + (c - e))
                },
                close: function() {
                    this.isOpen && (this.isOpen = !1,
                        this._removeCursor(),
                        this._hide(),
                        this.trigger("closed"))
                },
                open: function() {
                    this.isOpen || (this.isOpen = !0,
                    !this.isEmpty && this._show(),
                        this.trigger("opened"))
                },
                setLanguageDirection: function(a) {
                    this.$menu.css("ltr" === a ? d.ltr : d.rtl)
                },
                moveCursorUp: function() {
                    this._moveCursor(-1)
                },
                moveCursorDown: function() {
                    this._moveCursor(1)
                },
                getDatumForSuggestion: function(a) {
                    var b = null;
                    return a.length && (b = {
                        raw: i.extractDatum(a),
                        value: i.extractValue(a),
                        datasetName: i.extractDatasetName(a)
                    }),
                        b
                },
                getDatumForCursor: function() {
                    return this.getDatumForSuggestion(this._getCursor().first())
                },
                getDatumForTopSuggestion: function() {
                    return this.getDatumForSuggestion(this._getSuggestions().first())
                },
                update: function(a) {
                    function c(b) {
                        b.update(a)
                    }
                    b.each(this.datasets, c)
                },
                empty: function() {
                    function a(a) {
                        a.clear()
                    }
                    b.each(this.datasets, a),
                        this.isEmpty = !0
                },
                isVisible: function() {
                    return this.isOpen && !this.isEmpty
                },
                destroy: function() {
                    function a(a) {
                        a.destroy()
                    }
                    this.$menu.off(".tt"),
                        this.$menu = null,
                        b.each(this.datasets, a)
                }
            }),
                c
        }()
            , k = function() {
            "use strict";
            function f(c) {
                var d, f, i;
                c = c || {},
                c.input || a.error("missing input"),
                    this.isActivated = !1,
                    this.autoselect = !!c.autoselect,
                    this.minLength = b.isNumber(c.minLength) ? c.minLength : 1,
                    this.$node = g(c.input, c.withHint),
                    d = this.$node.find(".tt-dropdown-menu"),
                    f = this.$node.find(".tt-input"),
                    i = this.$node.find(".tt-hint"),
                    f.on("blur.tt", function(a) {
                        var c, e, g;
                        c = document.activeElement,
                            e = d.is(c),
                            g = d.has(c).length > 0,
                        b.isMsie() && (e || g) && (a.preventDefault(),
                            a.stopImmediatePropagation(),
                            b.defer(function() {
                                f.focus()
                            }))
                    }),
                    d.on("mousedown.tt", function(a) {
                        a.preventDefault()
                    }),
                    this.eventBus = c.eventBus || new e({
                        el: f
                    }),
                    this.dropdown = new j({
                        menu: d,
                        datasets: c.datasets
                    }).onSync("suggestionClicked", this._onSuggestionClicked, this).onSync("cursorMoved", this._onCursorMoved, this).onSync("cursorRemoved", this._onCursorRemoved, this).onSync("opened", this._onOpened, this).onSync("closed", this._onClosed, this).onAsync("datasetRendered", this._onDatasetRendered, this),
                    this.input = new h({
                        input: f,
                        hint: i
                    }).onSync("focused", this._onFocused, this).onSync("blurred", this._onBlurred, this).onSync("enterKeyed", this._onEnterKeyed, this).onSync("tabKeyed", this._onTabKeyed, this).onSync("escKeyed", this._onEscKeyed, this).onSync("upKeyed", this._onUpKeyed, this).onSync("downKeyed", this._onDownKeyed, this).onSync("leftKeyed", this._onLeftKeyed, this).onSync("rightKeyed", this._onRightKeyed, this).onSync("queryChanged", this._onQueryChanged, this).onSync("whitespaceChanged", this._onWhitespaceChanged, this),
                    this._setLanguageDirection()
            }
            function g(b, e) {
                var f, g, h, j;
                f = a(b),
                    g = a(c.wrapper).css(d.wrapper),
                    h = a(c.dropdown).css(d.dropdown),
                    j = f.clone().css(d.hint).css(i(f)),
                    j.val("").removeData().addClass("tt-hint").removeAttr("id name placeholder required").prop("readonly", !0).attr({
                        autocomplete: "off",
                        spellcheck: "false",
                        tabindex: -1
                    }),
                    f.data(l, {
                        dir: f.attr("dir"),
                        autocomplete: f.attr("autocomplete"),
                        spellcheck: f.attr("spellcheck"),
                        style: f.attr("style")
                    }),
                    f.addClass("tt-input").attr({
                        autocomplete: "off",
                        spellcheck: !1
                    }).css(e ? d.input : d.inputWithNoHint);
                try {
                    !f.attr("dir") && f.attr("dir", "auto")
                } catch (k) {}
                return f.wrap(g).parent().prepend(e ? j : null).append(h)
            }
            function i(a) {
                return {
                    backgroundAttachment: a.css("background-attachment"),
                    backgroundClip: a.css("background-clip"),
                    backgroundColor: a.css("background-color"),
                    backgroundImage: a.css("background-image"),
                    backgroundOrigin: a.css("background-origin"),
                    backgroundPosition: a.css("background-position"),
                    backgroundRepeat: a.css("background-repeat"),
                    backgroundSize: a.css("background-size")
                }
            }
            function k(a) {
                var c = a.find(".tt-input");
                b.each(c.data(l), function(a, d) {
                    b.isUndefined(a) ? c.removeAttr(d) : c.attr(d, a)
                }),
                    c.detach().removeData(l).removeClass("tt-input").insertAfter(a),
                    a.remove()
            }
            var l = "ttAttrs";
            return b.mixin(f.prototype, {
                _onSuggestionClicked: function(a, b) {
                    var c;
                    (c = this.dropdown.getDatumForSuggestion(b)) && this._select(c)
                },
                _onCursorMoved: function() {
                    var a = this.dropdown.getDatumForCursor();
                    this.input.setInputValue(a.value, !0),
                        this.eventBus.trigger("cursorchanged", a.raw, a.datasetName)
                },
                _onCursorRemoved: function() {
                    this.input.resetInputValue(),
                        this._updateHint()
                },
                _onDatasetRendered: function() {
                    this._updateHint()
                },
                _onOpened: function() {
                    this._updateHint(),
                        this.eventBus.trigger("opened")
                },
                _onClosed: function() {
                    this.input.clearHint(),
                        this.eventBus.trigger("closed")
                },
                _onFocused: function() {
                    this.isActivated = !0,
                        this.dropdown.open()
                },
                _onBlurred: function() {
                    this.isActivated = !1,
                        this.dropdown.empty(),
                        this.dropdown.close()
                },
                _onEnterKeyed: function(a, b) {
                    var c, d;
                    c = this.dropdown.getDatumForCursor(),
                        d = this.dropdown.getDatumForTopSuggestion(),
                        c ? (this._select(c),
                            b.preventDefault()) : this.autoselect && d && (this._select(d),
                            b.preventDefault())
                },
                _onTabKeyed: function(a, b) {
                    var c;
                    (c = this.dropdown.getDatumForCursor()) ? (this._select(c),
                        b.preventDefault()) : this._autocomplete(!0)
                },
                _onEscKeyed: function() {
                    this.dropdown.close(),
                        this.input.resetInputValue()
                },
                _onUpKeyed: function() {
                    var a = this.input.getQuery();
                    this.dropdown.isEmpty && a.length >= this.minLength ? this.dropdown.update(a) : this.dropdown.moveCursorUp(),
                        this.dropdown.open()
                },
                _onDownKeyed: function() {
                    var a = this.input.getQuery();
                    this.dropdown.isEmpty && a.length >= this.minLength ? this.dropdown.update(a) : this.dropdown.moveCursorDown(),
                        this.dropdown.open()
                },
                _onLeftKeyed: function() {
                    "rtl" === this.dir && this._autocomplete()
                },
                _onRightKeyed: function() {
                    "ltr" === this.dir && this._autocomplete()
                },
                _onQueryChanged: function(a, b) {
                    this.input.clearHintIfInvalid(),
                        b.length >= this.minLength ? this.dropdown.update(b) : this.dropdown.empty(),
                        this.dropdown.open(),
                        this._setLanguageDirection()
                },
                _onWhitespaceChanged: function() {
                    this._updateHint(),
                        this.dropdown.open()
                },
                _setLanguageDirection: function() {
                    var a;
                    this.dir !== (a = this.input.getLanguageDirection()) && (this.dir = a,
                        this.$node.css("direction", a),
                        this.dropdown.setLanguageDirection(a))
                },
                _updateHint: function() {
                    var a, c, d, e, f, g;
                    a = this.dropdown.getDatumForTopSuggestion(),
                        a && this.dropdown.isVisible() && !this.input.hasOverflow() ? (c = this.input.getInputValue(),
                            d = h.normalizeQuery(c),
                            e = b.escapeRegExChars(d),
                            f = new RegExp("^(?:" + e + ")(.+$)","i"),
                            g = f.exec(a.value),
                            g ? this.input.setHint(c + g[1]) : this.input.clearHint()) : this.input.clearHint()
                },
                _autocomplete: function(a) {
                    var b, c, d, e;
                    b = this.input.getHint(),
                        c = this.input.getQuery(),
                        d = a || this.input.isCursorAtEnd(),
                    b && c !== b && d && (e = this.dropdown.getDatumForTopSuggestion(),
                    e && this.input.setInputValue(e.value),
                        this.eventBus.trigger("autocompleted", e.raw, e.datasetName))
                },
                _select: function(a) {
                    this.input.setQuery(a.value),
                        this.input.setInputValue(a.value, !0),
                        this._setLanguageDirection(),
                        this.eventBus.trigger("selected", a.raw, a.datasetName),
                        this.dropdown.close(),
                        b.defer(b.bind(this.dropdown.empty, this.dropdown));
                },
                open: function() {
                    this.dropdown.open()
                },
                close: function() {
                    this.dropdown.close()
                },
                setVal: function(a) {
                    a = b.toStr(a),
                        this.isActivated ? this.input.setInputValue(a) : (this.input.setQuery(a),
                            this.input.setInputValue(a, !0)),
                        this._setLanguageDirection()
                },
                getVal: function() {
                    return this.input.getQuery()
                },
                destroy: function() {
                    this.input.destroy(),
                        this.dropdown.destroy(),
                        k(this.$node),
                        this.$node = null
                }
            }),
                f
        }();
        !function() {
            "use strict";
            var c, d, f;
            c = a.fn.typeahead,
                d = "ttTypeahead",
                f = {
                    initialize: function(c, f) {
                        function g() {
                            var g, h, i = a(this);
                            b.each(f, function(a) {
                                a.highlight = !!c.highlight
                            }),
                                h = new k({
                                    input: i,
                                    eventBus: g = new e({
                                        el: i
                                    }),
                                    withHint: !!b.isUndefined(c.hint) || !!c.hint,
                                    minLength: c.minLength,
                                    autoselect: c.autoselect,
                                    datasets: f
                                }),
                                i.data(d, h)
                        }
                        return f = b.isArray(f) ? f : [].slice.call(arguments, 1),
                            c = c || {},
                            this.each(g)
                    },
                    open: function() {
                        function b() {
                            var b, c = a(this);
                            (b = c.data(d)) && b.open()
                        }
                        return this.each(b)
                    },
                    close: function() {
                        function b() {
                            var b, c = a(this);
                            (b = c.data(d)) && b.close()
                        }
                        return this.each(b)
                    },
                    val: function(b) {
                        function c() {
                            var c, e = a(this);
                            (c = e.data(d)) && c.setVal(b)
                        }
                        function e(a) {
                            var b, c;
                            return (b = a.data(d)) && (c = b.getVal()),
                                c
                        }
                        return arguments.length ? this.each(c) : e(this.first())
                    },
                    destroy: function() {
                        function b() {
                            var b, c = a(this);
                            (b = c.data(d)) && (b.destroy(),
                                c.removeData(d))
                        }
                        return this.each(b)
                    }
                },
                a.fn.typeahead = function(b) {
                    var c;
                    return f[b] && "initialize" !== b ? (c = this.filter(function() {
                        return !!a(this).data(d)
                    }),
                        f[b].apply(c, [].slice.call(arguments, 1))) : f.initialize.apply(this, arguments)
                }
                ,
                a.fn.typeahead.noConflict = function() {
                    return a.fn.typeahead = c,
                        this
                }
        }()
    }(window.jQuery),
    function(a) {
        var b = function() {
            "use strict";
            return {
                isMsie: function() {
                    return !!/(msie|trident)/i.test(navigator.userAgent) && navigator.userAgent.match(/(msie |rv:)(\d+(.\d+)?)/i)[2]
                },
                isBlankString: function(a) {
                    return !a || /^\s*$/.test(a)
                },
                escapeRegExChars: function(a) {
                    return a.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
                },
                isString: function(a) {
                    return "string" == typeof a
                },
                isNumber: function(a) {
                    return "number" == typeof a
                },
                isArray: a.isArray,
                isFunction: a.isFunction,
                isObject: a.isPlainObject,
                isUndefined: function(a) {
                    return "undefined" == typeof a
                },
                toStr: function(a) {
                    return b.isUndefined(a) || null === a ? "" : a + ""
                },
                bind: a.proxy,
                each: function(b, c) {
                    function d(a, b) {
                        return c(b, a)
                    }
                    a.each(b, d)
                },
                map: a.map,
                filter: a.grep,
                every: function(b, c) {
                    var d = !0;
                    return b ? (a.each(b, function(a, e) {
                        if (!(d = c.call(null, e, a, b)))
                            return !1
                    }),
                        !!d) : d
                },
                some: function(b, c) {
                    var d = !1;
                    return b ? (a.each(b, function(a, e) {
                        if (d = c.call(null, e, a, b))
                            return !1
                    }),
                        !!d) : d
                },
                mixin: a.extend,
                getUniqueId: function() {
                    var a = 0;
                    return function() {
                        return a++
                    }
                }(),
                templatify: function(b) {
                    function c() {
                        return String(b)
                    }
                    return a.isFunction(b) ? b : c
                },
                defer: function(a) {
                    setTimeout(a, 0)
                },
                debounce: function(a, b, c) {
                    var d, e;
                    return function() {
                        var f, g, h = this, i = arguments;
                        return f = function() {
                            d = null,
                            c || (e = a.apply(h, i))
                        }
                            ,
                            g = c && !d,
                            clearTimeout(d),
                            d = setTimeout(f, b),
                        g && (e = a.apply(h, i)),
                            e
                    }
                },
                throttle: function(a, b) {
                    var c, d, e, f, g, h;
                    return g = 0,
                        h = function() {
                            g = new Date,
                                e = null,
                                f = a.apply(c, d)
                        }
                        ,
                        function() {
                            var i = new Date
                                , j = b - (i - g);
                            return c = this,
                                d = arguments,
                                j <= 0 ? (clearTimeout(e),
                                    e = null,
                                    g = i,
                                    f = a.apply(c, d)) : e || (e = setTimeout(h, j)),
                                f
                        }
                },
                noop: function() {}
            }
        }()
            , c = "0.10.5"
            , d = function() {
            "use strict";
            function a(a) {
                return a = b.toStr(a),
                    a ? a.split(/\s+/) : []
            }
            function c(a) {
                return a = b.toStr(a),
                    a ? a.split(/\W+/) : []
            }
            function d(a) {
                return function() {
                    var c = [].slice.call(arguments, 0);
                    return function(d) {
                        var e = [];
                        return b.each(c, function(c) {
                            e = e.concat(a(b.toStr(d[c])))
                        }),
                            e
                    }
                }
            }
            return {
                nonword: c,
                whitespace: a,
                obj: {
                    nonword: d(c),
                    whitespace: d(a)
                }
            }
        }()
            , e = function() {
            "use strict";
            function c(c) {
                this.maxSize = b.isNumber(c) ? c : 100,
                    this.reset(),
                this.maxSize <= 0 && (this.set = this.get = a.noop)
            }
            function d() {
                this.head = this.tail = null
            }
            function e(a, b) {
                this.key = a,
                    this.val = b,
                    this.prev = this.next = null
            }
            return b.mixin(c.prototype, {
                set: function(a, b) {
                    var c, d = this.list.tail;
                    this.size >= this.maxSize && (this.list.remove(d),
                        delete this.hash[d.key]),
                        (c = this.hash[a]) ? (c.val = b,
                            this.list.moveToFront(c)) : (c = new e(a,b),
                            this.list.add(c),
                            this.hash[a] = c,
                            this.size++)
                },
                get: function(a) {
                    var b = this.hash[a];
                    if (b)
                        return this.list.moveToFront(b),
                            b.val
                },
                reset: function() {
                    this.size = 0,
                        this.hash = {},
                        this.list = new d
                }
            }),
                b.mixin(d.prototype, {
                    add: function(a) {
                        this.head && (a.next = this.head,
                            this.head.prev = a),
                            this.head = a,
                            this.tail = this.tail || a
                    },
                    remove: function(a) {
                        a.prev ? a.prev.next = a.next : this.head = a.next,
                            a.next ? a.next.prev = a.prev : this.tail = a.prev
                    },
                    moveToFront: function(a) {
                        this.remove(a),
                            this.add(a)
                    }
                }),
                c
        }()
            , f = function() {
            "use strict";
            function a(a) {
                this.prefix = ["__", a, "__"].join(""),
                    this.ttlKey = "__ttl__",
                    this.keyMatcher = new RegExp("^" + b.escapeRegExChars(this.prefix))
            }
            function c() {
                return (new Date).getTime()
            }
            function d(a) {
                return JSON.stringify(b.isUndefined(a) ? null : a)
            }
            function e(a) {
                return JSON.parse(a)
            }
            var f, g;
            try {
                f = window.localStorage,
                    f.setItem("~~~", "!"),
                    f.removeItem("~~~")
            } catch (h) {
                f = null
            }
            return g = f && window.JSON ? {
                _prefix: function(a) {
                    return this.prefix + a
                },
                _ttlKey: function(a) {
                    return this._prefix(a) + this.ttlKey
                },
                get: function(a) {
                    return this.isExpired(a) && this.remove(a),
                        e(f.getItem(this._prefix(a)))
                },
                set: function(a, e, g) {
                    return b.isNumber(g) ? f.setItem(this._ttlKey(a), d(c() + g)) : f.removeItem(this._ttlKey(a)),
                        f.setItem(this._prefix(a), d(e))
                },
                remove: function(a) {
                    return f.removeItem(this._ttlKey(a)),
                        f.removeItem(this._prefix(a)),
                        this
                },
                clear: function() {
                    var a, b, c = [], d = f.length;
                    for (a = 0; a < d; a++)
                        (b = f.key(a)).match(this.keyMatcher) && c.push(b.replace(this.keyMatcher, ""));
                    for (a = c.length; a--; )
                        this.remove(c[a]);
                    return this
                },
                isExpired: function(a) {
                    var d = e(f.getItem(this._ttlKey(a)));
                    return !!(b.isNumber(d) && c() > d)
                }
            } : {
                get: b.noop,
                set: b.noop,
                remove: b.noop,
                clear: b.noop,
                isExpired: b.noop
            },
                b.mixin(a.prototype, g),
                a
        }()
            , g = function() {
            "use strict";
            function c(b) {
                b = b || {},
                    this.cancelled = !1,
                    this.lastUrl = null,
                    this._send = b.transport ? d(b.transport) : a.ajax,
                    this._get = b.rateLimiter ? b.rateLimiter(this._get) : this._get,
                    this._cache = b.cache === !1 ? new e(0) : i
            }
            function d(c) {
                return function(d, e) {
                    function f(a) {
                        b.defer(function() {
                            h.resolve(a)
                        })
                    }
                    function g(a) {
                        b.defer(function() {
                            h.reject(a)
                        })
                    }
                    var h = a.Deferred();
                    return c(d, e, f, g),
                        h
                }
            }
            var f = 0
                , g = {}
                , h = 6
                , i = new e(10);
            return c.setMaxPendingRequests = function(a) {
                h = a
            }
                ,
                c.resetCache = function() {
                    i.reset()
                }
                ,
                b.mixin(c.prototype, {
                    _get: function(a, b, c) {
                        function d(b) {
                            c && c(null, b),
                                k._cache.set(a, b)
                        }
                        function e() {
                            c && c(!0)
                        }
                        function i() {
                            f--,
                                delete g[a],
                            k.onDeckRequestArgs && (k._get.apply(k, k.onDeckRequestArgs),
                                k.onDeckRequestArgs = null)
                        }
                        var j, k = this;
                        this.cancelled || a !== this.lastUrl || ((j = g[a]) ? j.done(d).fail(e) : f < h ? (f++,
                            g[a] = this._send(a, b).done(d).fail(e).always(i)) : this.onDeckRequestArgs = [].slice.call(arguments, 0))
                    },
                    get: function(a, c, d) {
                        var e;
                        return b.isFunction(c) && (d = c,
                            c = {}),
                            this.cancelled = !1,
                            this.lastUrl = a,
                            (e = this._cache.get(a)) ? b.defer(function() {
                                d && d(null, e)
                            }) : this._get(a, c, d),
                            !!e
                    },
                    cancel: function() {
                        this.cancelled = !0
                    }
                }),
                c
        }()
            , h = function() {
            "use strict";
            function c(b) {
                b = b || {},
                b.datumTokenizer && b.queryTokenizer || a.error("datumTokenizer and queryTokenizer are both required"),
                    this.datumTokenizer = b.datumTokenizer,
                    this.queryTokenizer = b.queryTokenizer,
                    this.reset()
            }
            function d(a) {
                return a = b.filter(a, function(a) {
                    return !!a
                }),
                    a = b.map(a, function(a) {
                        return a.toLowerCase()
                    })
            }
            function e() {
                return {
                    ids: [],
                    children: {}
                }
            }
            function f(a) {
                for (var b = {}, c = [], d = 0, e = a.length; d < e; d++)
                    b[a[d]] || (b[a[d]] = !0,
                        c.push(a[d]));
                return c
            }
            function g(a, b) {
                function c(a, b) {
                    return a - b
                }
                var d = 0
                    , e = 0
                    , f = [];
                a = a.sort(c),
                    b = b.sort(c);
                for (var g = a.length, h = b.length; d < g && e < h; )
                    a[d] < b[e] ? d++ : a[d] > b[e] ? e++ : (f.push(a[d]),
                        d++,
                        e++);
                return f
            }
            return b.mixin(c.prototype, {
                bootstrap: function(a) {
                    this.datums = a.datums,
                        this.trie = a.trie
                },
                add: function(a) {
                    var c = this;
                    a = b.isArray(a) ? a : [a],
                        b.each(a, function(a) {
                            var f, g;
                            f = c.datums.push(a) - 1,
                                g = d(c.datumTokenizer(a)),
                                b.each(g, function(a) {
                                    var b, d, g;
                                    for (b = c.trie,
                                             d = a.split(""); g = d.shift(); )
                                        b = b.children[g] || (b.children[g] = e()),
                                            b.ids.push(f)
                                })
                        })
                },
                get: function(a) {
                    var c, e, h = this;
                    return c = d(this.queryTokenizer(a)),
                        b.each(c, function(a) {
                            var b, c, d, f;
                            if (e && 0 === e.length)
                                return !1;
                            for (b = h.trie,
                                     c = a.split(""); b && (d = c.shift()); )
                                b = b.children[d];
                            return b && 0 === c.length ? (f = b.ids.slice(0),
                                void (e = e ? g(e, f) : f)) : (e = [],
                                !1)
                        }),
                        e ? b.map(f(e), function(a) {
                            return h.datums[a]
                        }) : []
                },
                reset: function() {
                    this.datums = [],
                        this.trie = e()
                },
                serialize: function() {
                    return {
                        datums: this.datums,
                        trie: this.trie
                    }
                }
            }),
                c
        }()
            , i = function() {
            "use strict";
            function d(a) {
                return a.local || null
            }
            function e(d) {
                var e, f;
                return f = {
                    url: null,
                    thumbprint: "",
                    ttl: 864e5,
                    filter: null,
                    ajax: {}
                },
                (e = d.prefetch || null) && (e = b.isString(e) ? {
                    url: e
                } : e,
                    e = b.mixin(f, e),
                    e.thumbprint = c + e.thumbprint,
                    e.ajax.type = e.ajax.type || "GET",
                    e.ajax.dataType = e.ajax.dataType || "json",
                !e.url && a.error("prefetch requires url to be set")),
                    e
            }
            function f(c) {
                function d(a) {
                    return function(c) {
                        return b.debounce(c, a)
                    }
                }
                function e(a) {
                    return function(c) {
                        return b.throttle(c, a)
                    }
                }
                var f, g;
                return g = {
                    url: null,
                    cache: !0,
                    wildcard: "%QUERY",
                    replace: null,
                    rateLimitBy: "debounce",
                    rateLimitWait: 300,
                    send: null,
                    filter: null,
                    ajax: {}
                },
                (f = c.remote || null) && (f = b.isString(f) ? {
                    url: f
                } : f,
                    f = b.mixin(g, f),
                    f.rateLimiter = /^throttle$/i.test(f.rateLimitBy) ? e(f.rateLimitWait) : d(f.rateLimitWait),
                    f.ajax.type = f.ajax.type || "GET",
                    f.ajax.dataType = f.ajax.dataType || "json",
                    delete f.rateLimitBy,
                    delete f.rateLimitWait,
                !f.url && a.error("remote requires url to be set")),
                    f
            }
            return {
                local: d,
                prefetch: e,
                remote: f
            }
        }();
        !function(c) {
            "use strict";
            function e(b) {
                b && (b.local || b.prefetch || b.remote) || a.error("one of local, prefetch, or remote is required"),
                    this.limit = b.limit || 5,
                    this.sorter = j(b.sorter),
                    this.dupDetector = b.dupDetector || k,
                    this.local = i.local(b),
                    this.prefetch = i.prefetch(b),
                    this.remote = i.remote(b),
                    this.cacheKey = this.prefetch ? this.prefetch.cacheKey || this.prefetch.url : null,
                    this.index = new h({
                        datumTokenizer: b.datumTokenizer,
                        queryTokenizer: b.queryTokenizer
                    }),
                    this.storage = this.cacheKey ? new f(this.cacheKey) : null
            }
            function j(a) {
                function c(b) {
                    return b.sort(a)
                }
                function d(a) {
                    return a
                }
                return b.isFunction(a) ? c : d
            }
            function k() {
                return !1
            }
            var l, m;
            return l = c.Bloodhound,
                m = {
                    data: "data",
                    protocol: "protocol",
                    thumbprint: "thumbprint"
                },
                c.Bloodhound = e,
                e.noConflict = function() {
                    return c.Bloodhound = l,
                        e
                }
                ,
                e.tokenizers = d,
                b.mixin(e.prototype, {
                    _loadPrefetch: function(b) {
                        function c(a) {
                            f.clear(),
                                f.add(b.filter ? b.filter(a) : a),
                                f._saveToStorage(f.index.serialize(), b.thumbprint, b.ttl)
                        }
                        var d, e, f = this;
                        return (d = this._readFromStorage(b.thumbprint)) ? (this.index.bootstrap(d),
                            e = a.Deferred().resolve()) : e = a.ajax(b.url, b.ajax).done(c),
                            e
                    },
                    _getFromRemote: function(a, b) {
                        function c(a, c) {
                            b(a ? [] : f.remote.filter ? f.remote.filter(c) : c)
                        }
                        var d, e, f = this;
                        if (this.transport)
                            return a = a || "",
                                e = encodeURIComponent(a),
                                d = this.remote.replace ? this.remote.replace(this.remote.url, a) : this.remote.url.replace(this.remote.wildcard, e),
                                this.transport.get(d, this.remote.ajax, c)
                    },
                    _cancelLastRemoteRequest: function() {
                        this.transport && this.transport.cancel()
                    },
                    _saveToStorage: function(a, b, c) {
                        this.storage && (this.storage.set(m.data, a, c),
                            this.storage.set(m.protocol, location.protocol, c),
                            this.storage.set(m.thumbprint, b, c))
                    },
                    _readFromStorage: function(a) {
                        var b, c = {};
                        return this.storage && (c.data = this.storage.get(m.data),
                            c.protocol = this.storage.get(m.protocol),
                            c.thumbprint = this.storage.get(m.thumbprint)),
                            b = c.thumbprint !== a || c.protocol !== location.protocol,
                            c.data && !b ? c.data : null
                    },
                    _initialize: function() {
                        function c() {
                            e.add(b.isFunction(f) ? f() : f)
                        }
                        var d, e = this, f = this.local;
                        return d = this.prefetch ? this._loadPrefetch(this.prefetch) : a.Deferred().resolve(),
                        f && d.done(c),
                            this.transport = this.remote ? new g(this.remote) : null,
                            this.initPromise = d.promise()
                    },
                    initialize: function(a) {
                        return !this.initPromise || a ? this._initialize() : this.initPromise
                    },
                    add: function(a) {
                        this.index.add(a)
                    },
                    get: function(a, c) {
                        function d(a) {
                            var d = f.slice(0);
                            b.each(a, function(a) {
                                var c;
                                return c = b.some(d, function(b) {
                                    return e.dupDetector(a, b)
                                }),
                                !c && d.push(a),
                                d.length < e.limit
                            }),
                            c && c(e.sorter(d))
                        }
                        var e = this
                            , f = []
                            , g = !1;
                        f = this.index.get(a),
                            f = this.sorter(f).slice(0, this.limit),
                            f.length < this.limit ? g = this._getFromRemote(a, d) : this._cancelLastRemoteRequest(),
                        g || (f.length > 0 || !this.transport) && c && c(f)
                    },
                    clear: function() {
                        this.index.reset()
                    },
                    clearPrefetchCache: function() {
                        this.storage && this.storage.clear()
                    },
                    clearRemoteCache: function() {
                        this.transport && g.resetCache()
                    },
                    ttAdapter: function() {
                        return b.bind(this.get, this)
                    }
                }),
                e
        }(this)
    }(window.jQuery),
    function(a) {
        "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof module && module.exports ? module.exports = a(require("jquery")) : a(jQuery)
    }(function(a) {
        var b = Array.prototype.slice
            , c = Array.prototype.splice
            , d = {
            topSpacing: 0,
            bottomSpacing: 0,
            className: "is-sticky",
            wrapperClassName: "sticky-wrapper",
            center: !1,
            getWidthFrom: "",
            widthFromWrapper: !0,
            responsiveWidth: !1
        }
            , e = a(window)
            , f = a(document)
            , g = []
            , h = e.height()
            , i = function() {
            for (var b = e.scrollTop(), c = f.height(), d = c - h, i = b > d ? d - b : 0, j = 0, k = g.length; j < k; j++) {
                var l = g[j]
                    , m = l.stickyWrapper.offset().top
                    , n = m - l.topSpacing - i;
                if (l.stickyWrapper.css("height", l.stickyElement.outerHeight()),
                    b <= n)
                    null !== l.currentTop && (l.stickyElement.css({
                        width: "",
                        position: "",
                        top: ""
                    }),
                        l.stickyElement.parent().removeClass(l.className),
                        l.stickyElement.trigger("sticky-end", [l]),
                        l.currentTop = null);
                else {
                    var o = c - l.stickyElement.outerHeight() - l.topSpacing - l.bottomSpacing - b - i;
                    if (o < 0 ? o += l.topSpacing : o = l.topSpacing,
                        l.currentTop !== o) {
                        var p;
                        l.getWidthFrom ? p = a(l.getWidthFrom).width() || null : l.widthFromWrapper && (p = l.stickyWrapper.width()),
                        null == p && (p = l.stickyElement.width()),
                            l.stickyElement.css("width", p).css("position", "fixed").css("top", o),
                            l.stickyElement.parent().addClass(l.className),
                            null === l.currentTop ? l.stickyElement.trigger("sticky-start", [l]) : l.stickyElement.trigger("sticky-update", [l]),
                            l.currentTop === l.topSpacing && l.currentTop > o || null === l.currentTop && o < l.topSpacing ? l.stickyElement.trigger("sticky-bottom-reached", [l]) : null !== l.currentTop && o === l.topSpacing && l.currentTop < o && l.stickyElement.trigger("sticky-bottom-unreached", [l]),
                            l.currentTop = o
                    }
                    var q = l.stickyWrapper.parent()
                        , r = l.stickyElement.offset().top + l.stickyElement.outerHeight() >= q.offset().top + q.outerHeight() && l.stickyElement.offset().top <= l.topSpacing;
                    r ? l.stickyElement.css("position", "absolute").css("top", "").css("bottom", 0) : l.stickyElement.css("position", "fixed").css("top", o).css("bottom", "")
                }
            }
        }
            , j = function() {
            h = e.height();
            for (var b = 0, c = g.length; b < c; b++) {
                var d = g[b]
                    , f = null;
                d.getWidthFrom ? d.responsiveWidth && (f = a(d.getWidthFrom).width()) : d.widthFromWrapper && (f = d.stickyWrapper.width()),
                null != f && d.stickyElement.css("width", f)
            }
        }
            , k = {
            init: function(b) {
                var c = a.extend({}, d, b);
                return this.each(function() {
                    var b = a(this)
                        , e = b.attr("id")
                        , f = e ? e + "-" + d.wrapperClassName : d.wrapperClassName
                        , h = a("<div></div>").attr("id", f).addClass(c.wrapperClassName);
                    b.wrapAll(h);
                    var i = b.parent();
                    c.center && i.css({
                        width: b.outerWidth(),
                        marginLeft: "auto",
                        marginRight: "auto"
                    }),
                    "right" === b.css("float") && b.css({
                        "float": "none"
                    }).parent().css({
                        "float": "right"
                    }),
                        c.stickyElement = b,
                        c.stickyWrapper = i,
                        c.currentTop = null,
                        g.push(c),
                        k.setWrapperHeight(this),
                        k.setupChangeListeners(this)
                })
            },
            setWrapperHeight: function(b) {
                var c = a(b)
                    , d = c.parent();
                d && d.css("height", c.outerHeight())
            },
            setupChangeListeners: function(a) {
                if (window.MutationObserver) {
                    var b = new window.MutationObserver(function(b) {
                            (b[0].addedNodes.length || b[0].removedNodes.length) && k.setWrapperHeight(a)
                        }
                    );
                    b.observe(a, {
                        subtree: !0,
                        childList: !0
                    })
                } else
                    a.addEventListener("DOMNodeInserted", function() {
                        k.setWrapperHeight(a)
                    }, !1),
                        a.addEventListener("DOMNodeRemoved", function() {
                            k.setWrapperHeight(a)
                        }, !1)
            },
            update: i,
            unstick: function(b) {
                return this.each(function() {
                    for (var b = this, d = a(b), e = -1, f = g.length; f-- > 0; )
                        g[f].stickyElement.get(0) === b && (c.call(g, f, 1),
                            e = f);
                    e !== -1 && (d.unwrap(),
                        d.css({
                            width: "",
                            position: "",
                            top: "",
                            "float": ""
                        }))
                })
            }
        };
        window.addEventListener ? (window.addEventListener("scroll", i, !1),
            window.addEventListener("resize", j, !1)) : window.attachEvent && (window.attachEvent("onscroll", i),
            window.attachEvent("onresize", j)),
            a.fn.sticky = function(c) {
                return k[c] ? k[c].apply(this, b.call(arguments, 1)) : "object" != typeof c && c ? void a.error("Method " + c + " does not exist on jQuery.sticky") : k.init.apply(this, arguments)
            }
            ,
            a.fn.unstick = function(c) {
                return k[c] ? k[c].apply(this, b.call(arguments, 1)) : "object" != typeof c && c ? void a.error("Method " + c + " does not exist on jQuery.sticky") : k.unstick.apply(this, arguments)
            }
            ,
            a(function() {
                setTimeout(i, 0)
            })
    }),
    function(a, b) {
        "object" == typeof module && module.exports ? module.exports = b() : "function" == typeof define && define.amd ? define(b) : a.Spinner = b()
    }(this, function() {
        "use strict";
        function a(a, b) {
            var c, d = document.createElement(a || "div");
            for (c in b)
                d[c] = b[c];
            return d
        }
        function b(a) {
            for (var b = 1, c = arguments.length; b < c; b++)
                a.appendChild(arguments[b]);
            return a
        }
        function c(a, b, c, d) {
            var e = ["opacity", b, ~~(100 * a), c, d].join("-")
                , f = .01 + c / d * 100
                , g = Math.max(1 - (1 - a) / b * (100 - f), a)
                , h = j.substring(0, j.indexOf("Animation")).toLowerCase()
                , i = h && "-" + h + "-" || "";
            return m[e] || (k.insertRule("@" + i + "keyframes " + e + "{0%{opacity:" + g + "}" + f + "%{opacity:" + a + "}" + (f + .01) + "%{opacity:1}" + (f + b) % 100 + "%{opacity:" + a + "}100%{opacity:" + g + "}}", k.cssRules.length),
                m[e] = 1),
                e
        }
        function d(a, b) {
            var c, d, e = a.style;
            if (b = b.charAt(0).toUpperCase() + b.slice(1),
                void 0 !== e[b])
                return b;
            for (d = 0; d < l.length; d++)
                if (c = l[d] + b,
                    void 0 !== e[c])
                    return c
        }
        function e(a, b) {
            for (var c in b)
                a.style[d(a, c) || c] = b[c];
            return a
        }
        function f(a) {
            for (var b = 1; b < arguments.length; b++) {
                var c = arguments[b];
                for (var d in c)
                    void 0 === a[d] && (a[d] = c[d])
            }
            return a
        }
        function g(a, b) {
            return "string" == typeof a ? a : a[b % a.length]
        }
        function h(a) {
            this.opts = f(a || {}, h.defaults, n)
        }
        function i() {
            function c(b, c) {
                return a("<" + b + ' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">', c)
            }
            k.addRule(".spin-vml", "behavior:url(#default#VML)"),
                h.prototype.lines = function(a, d) {
                    function f() {
                        return e(c("group", {
                            coordsize: k + " " + k,
                            coordorigin: -j + " " + -j
                        }), {
                            width: k,
                            height: k
                        })
                    }
                    function h(a, h, i) {
                        b(m, b(e(f(), {
                            rotation: 360 / d.lines * a + "deg",
                            left: ~~h
                        }), b(e(c("roundrect", {
                            arcsize: d.corners
                        }), {
                            width: j,
                            height: d.scale * d.width,
                            left: d.scale * d.radius,
                            top: -d.scale * d.width >> 1,
                            filter: i
                        }), c("fill", {
                            color: g(d.color, a),
                            opacity: d.opacity
                        }), c("stroke", {
                            opacity: 0
                        }))))
                    }
                    var i, j = d.scale * (d.length + d.width), k = 2 * d.scale * j, l = -(d.width + d.length) * d.scale * 2 + "px", m = e(f(), {
                        position: "absolute",
                        top: l,
                        left: l
                    });
                    if (d.shadow)
                        for (i = 1; i <= d.lines; i++)
                            h(i, -2, "progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");
                    for (i = 1; i <= d.lines; i++)
                        h(i);
                    return b(a, m)
                }
                ,
                h.prototype.opacity = function(a, b, c, d) {
                    var e = a.firstChild;
                    d = d.shadow && d.lines || 0,
                    e && b + d < e.childNodes.length && (e = e.childNodes[b + d],
                        e = e && e.firstChild,
                        e = e && e.firstChild,
                    e && (e.opacity = c))
                }
        }
        var j, k, l = ["webkit", "Moz", "ms", "O"], m = {}, n = {
            lines: 12,
            length: 7,
            width: 5,
            radius: 10,
            scale: 1,
            corners: 1,
            color: "#000",
            opacity: .25,
            rotate: 0,
            direction: 1,
            speed: 1,
            trail: 100,
            fps: 20,
            zIndex: 2e9,
            className: "spinner",
            top: "50%",
            left: "50%",
            shadow: !1,
            hwaccel: !1,
            position: "absolute"
        };
        if (h.defaults = {},
                f(h.prototype, {
                    spin: function(b) {
                        this.stop();
                        var c = this
                            , d = c.opts
                            , f = c.el = a(null, {
                            className: d.className
                        });
                        if (e(f, {
                                position: d.position,
                                width: 0,
                                zIndex: d.zIndex,
                                left: d.left,
                                top: d.top
                            }),
                            b && b.insertBefore(f, b.firstChild || null),
                                f.setAttribute("role", "progressbar"),
                                c.lines(f, c.opts),
                                !j) {
                            var g, h = 0, i = (d.lines - 1) * (1 - d.direction) / 2, k = d.fps, l = k / d.speed, m = (1 - d.opacity) / (l * d.trail / 100), n = l / d.lines;
                            !function o() {
                                h++;
                                for (var a = 0; a < d.lines; a++)
                                    g = Math.max(1 - (h + (d.lines - a) * n) % l * m, d.opacity),
                                        c.opacity(f, a * d.direction + i, g, d);
                                c.timeout = c.el && setTimeout(o, ~~(1e3 / k))
                            }()
                        }
                        return c
                    },
                    stop: function() {
                        var a = this.el;
                        return a && (clearTimeout(this.timeout),
                        a.parentNode && a.parentNode.removeChild(a),
                            this.el = void 0),
                            this
                    },
                    lines: function(d, f) {
                        function h(b, c) {
                            return e(a(), {
                                position: "absolute",
                                width: f.scale * (f.length + f.width) + "px",
                                height: f.scale * f.width + "px",
                                background: b,
                                boxShadow: c,
                                transformOrigin: "left",
                                transform: "rotate(" + ~~(360 / f.lines * k + f.rotate) + "deg) translate(" + f.scale * f.radius + "px,0)",
                                borderRadius: (f.corners * f.scale * f.width >> 1) + "px"
                            })
                        }
                        for (var i, k = 0, l = (f.lines - 1) * (1 - f.direction) / 2; k < f.lines; k++)
                            i = e(a(), {
                                position: "absolute",
                                top: 1 + ~(f.scale * f.width / 2) + "px",
                                transform: f.hwaccel ? "translate3d(0,0,0)" : "",
                                opacity: f.opacity,
                                animation: j && c(f.opacity, f.trail, l + k * f.direction, f.lines) + " " + 1 / f.speed + "s linear infinite"
                            }),
                            f.shadow && b(i, e(h("#000", "0 0 4px #000"), {
                                top: "2px"
                            })),
                                b(d, b(i, h(g(f.color, k), "0 0 1px rgba(0,0,0,.1)")));
                        return d
                    },
                    opacity: function(a, b, c) {
                        b < a.childNodes.length && (a.childNodes[b].style.opacity = c)
                    }
                }),
            "undefined" != typeof document) {
            k = function() {
                var c = a("style", {
                    type: "text/css"
                });
                return b(document.getElementsByTagName("head")[0], c),
                c.sheet || c.styleSheet
            }();
            var o = e(a("group"), {
                behavior: "url(#default#VML)"
            });
            !d(o, "transform") && o.adj ? i() : j = d(o, "animation")
        }
        return h
    }),
    function(a) {
        if ("object" == typeof exports)
            a(require("jquery"), require("spin.js"));
        else if ("function" == typeof define && define.amd)
            define(["jquery", "spin"], a);
        else {
            if (!window.Spinner)
                throw new Error("Spin.js not present");
            a(window.jQuery, window.Spinner)
        }
    }(function(a, b) {
        a.fn.spin = function(c, d) {
            return this.each(function() {
                var e = a(this)
                    , f = e.data();
                f.spinner && (f.spinner.stop(),
                    delete f.spinner),
                c !== !1 && (c = a.extend({
                    color: d || e.css("color")
                }, a.fn.spin.presets[c] || c),
                    f.spinner = new b(c).spin(this))
            })
        }
            ,
            a.fn.spin.presets = {
                tiny: {
                    lines: 8,
                    length: 2,
                    width: 2,
                    radius: 3
                },
                small: {
                    lines: 8,
                    length: 4,
                    width: 3,
                    radius: 5
                },
                large: {
                    lines: 10,
                    length: 8,
                    width: 4,
                    radius: 8
                }
            }
    }),
    function(a) {
        "use strict";
        "function" == typeof define && define.amd ? define(["jquery"], a) : "undefined" != typeof module && module.exports ? module.exports = a(require("jquery")) : a(jQuery)
    }(function(a) {
        "use strict";
        function b(b) {
            return !b.nodeName || a.inArray(b.nodeName.toLowerCase(), ["iframe", "#document", "html", "body"]) !== -1
        }
        function c(b) {
            return a.isFunction(b) || a.isPlainObject(b) ? b : {
                top: b,
                left: b
            }
        }
        var d = a.scrollTo = function(b, c, d) {
                return a(window).scrollTo(b, c, d)
            }
        ;
        return d.defaults = {
            axis: "xy",
            duration: 0,
            limit: !0
        },
            a.fn.scrollTo = function(e, f, g) {
                "object" == typeof f && (g = f,
                    f = 0),
                "function" == typeof g && (g = {
                    onAfter: g
                }),
                "max" === e && (e = 9e9),
                    g = a.extend({}, d.defaults, g),
                    f = f || g.duration;
                var h = g.queue && g.axis.length > 1;
                return h && (f /= 2),
                    g.offset = c(g.offset),
                    g.over = c(g.over),
                    this.each(function() {
                        function i(b) {
                            var c = a.extend({}, g, {
                                queue: !0,
                                duration: f,
                                complete: b && function() {
                                    b.call(l, n, g)
                                }
                            });
                            m.animate(o, c)
                        }
                        if (null !== e) {
                            var j, k = b(this), l = k ? this.contentWindow || window : this, m = a(l), n = e, o = {};
                            switch (typeof n) {
                                case "number":
                                case "string":
                                    if (/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(n)) {
                                        n = c(n);
                                        break
                                    }
                                    n = k ? a(n) : a(n, l);
                                case "object":
                                    if (0 === n.length)
                                        return;
                                    (n.is || n.style) && (j = (n = a(n)).offset())
                            }
                            var p = a.isFunction(g.offset) && g.offset(l, n) || g.offset;
                            a.each(g.axis.split(""), function(a, b) {
                                var c = "x" === b ? "Left" : "Top"
                                    , e = c.toLowerCase()
                                    , f = "scroll" + c
                                    , q = m[f]()
                                    , r = d.max(l, b);
                                if (j)
                                    o[f] = j[e] + (k ? 0 : q - m.offset()[e]),
                                    g.margin && (o[f] -= parseInt(n.css("margin" + c), 10) || 0,
                                        o[f] -= parseInt(n.css("border" + c + "Width"), 10) || 0),
                                        o[f] += p[e] || 0,
                                    g.over[e] && (o[f] += n["x" === b ? "width" : "height"]() * g.over[e]);
                                else {
                                    var s = n[e];
                                    o[f] = s.slice && "%" === s.slice(-1) ? parseFloat(s) / 100 * r : s
                                }
                                g.limit && /^\d+$/.test(o[f]) && (o[f] = o[f] <= 0 ? 0 : Math.min(o[f], r)),
                                !a && g.axis.length > 1 && (q === o[f] ? o = {} : h && (i(g.onAfterFirst),
                                    o = {}))
                            }),
                                i(g.onAfter)
                        }
                    })
            }
            ,
            d.max = function(c, d) {
                var e = "x" === d ? "Width" : "Height"
                    , f = "scroll" + e;
                if (!b(c))
                    return c[f] - a(c)[e.toLowerCase()]();
                var g = "client" + e
                    , h = c.ownerDocument || c.document
                    , i = h.documentElement
                    , j = h.body;
                return Math.max(i[f], j[f]) - Math.min(i[g], j[g])
            }
            ,
            a.Tween.propHooks.scrollLeft = a.Tween.propHooks.scrollTop = {
                get: function(b) {
                    return a(b.elem)[b.prop]()
                },
                set: function(b) {
                    var c = this.get(b);
                    if (b.options.interrupt && b._last && b._last !== c)
                        return a(b.elem).stop();
                    var d = Math.round(b.now);
                    c !== d && (a(b.elem)[b.prop](d),
                        b._last = this.get(b))
                }
            },
            d
    }),
    function(a, b, c, d) {
        "use strict";
        function e(a, b) {
            return a[b] === d ? t[b] : a[b]
        }
        function f() {
            var a = b.pageYOffset;
            return a === d ? r.scrollTop : a
        }
        function g(a, b) {
            var c = t["on" + a];
            c && (w(c) ? c.call(b[0]) : (c.addClass && b.addClass(c.addClass),
            c.removeClass && b.removeClass(c.removeClass))),
                b.trigger("lazy" + a, [b]),
                k()
        }
        function h(b) {
            g(b.type, a(this).off(p, h))
        }
        function i(c) {
            if (z.length) {
                c = c || t.forceLoad,
                    A = 1 / 0;
                var d, e, i = f(), j = b.innerHeight || r.clientHeight, k = b.innerWidth || r.clientWidth;
                for (d = 0,
                         e = z.length; d < e; d++) {
                    var l, m = z[d], q = m[0], s = m[n], u = !1, v = c || y(q, o) < 0;
                    if (a.contains(r, q)) {
                        if (c || !s.visibleOnly || q.offsetWidth || q.offsetHeight) {
                            if (!v) {
                                var x = q.getBoundingClientRect()
                                    , B = s.edgeX
                                    , C = s.edgeY;
                                l = x.top + i - C - j,
                                    v = l <= i && x.bottom > -C && x.left <= k + B && x.right > -B
                            }
                            if (v) {
                                m.on(p, h),
                                    g("show", m);
                                var D = s.srcAttr
                                    , E = w(D) ? D(m) : q.getAttribute(D);
                                E && (q.src = E),
                                    u = !0
                            } else
                                l < A && (A = l)
                        }
                    } else
                        u = !0;
                    u && (y(q, o, 0),
                        z.splice(d--, 1),
                        e--)
                }
                e || g("complete", a(r))
            }
        }
        function j() {
            B > 1 ? (B = 1,
                i(),
                setTimeout(j, t.throttle)) : B = 0
        }
        function k(a) {
            z.length && (a && "scroll" === a.type && a.currentTarget === b && A >= f() || (B || setTimeout(j, 0),
                B = 2))
        }
        function l() {
            v.lazyLoadXT()
        }
        function m() {
            i(!0)
        }
        var n = "lazyLoadXT"
            , o = "lazied"
            , p = "load error"
            , q = "lazy-hidden"
            , r = c.documentElement || c.body
            , s = b.onscroll === d || !!b.operamini || !r.getBoundingClientRect
            , t = {
            autoInit: !0,
            selector: "img[data-src]",
            blankImage: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
            throttle: 99,
            forceLoad: s,
            loadEvent: "pageshow",
            updateEvent: "load orientationchange resize scroll touchmove focus",
            forceEvent: "",
            oninit: {
                removeClass: "lazy"
            },
            onshow: {
                addClass: q
            },
            onload: {
                removeClass: q,
                addClass: "lazy-loaded"
            },
            onerror: {
                removeClass: q
            },
            checkDuplicates: !0
        }
            , u = {
            srcAttr: "data-src",
            edgeX: 0,
            edgeY: 0,
            visibleOnly: !0
        }
            , v = a(b)
            , w = a.isFunction
            , x = a.extend
            , y = a.data || function(b, c) {
            return a(b).data(c)
        }
            , z = []
            , A = 0
            , B = 0;
        a[n] = x(t, u, a[n]),
            a.fn[n] = function(c) {
                c = c || {};
                var d, f = e(c, "blankImage"), h = e(c, "checkDuplicates"), i = e(c, "scrollContainer"), j = e(c, "show"), l = {};
                a(i).on("scroll", k);
                for (d in u)
                    l[d] = e(c, d);
                return this.each(function(d, e) {
                    if (e === b)
                        a(t.selector).lazyLoadXT(c);
                    else {
                        var i = h && y(e, o)
                            , m = a(e).data(o, j ? -1 : 1);
                        if (i)
                            return void k();
                        f && "IMG" === e.tagName && !e.src && (e.src = f),
                            m[n] = x({}, l),
                            g("init", m),
                            z.push(m),
                            k()
                    }
                })
            }
            ,
            a(c).ready(function() {
                g("start", v),
                    v.on(t.loadEvent, l).on(t.updateEvent, k).on(t.forceEvent, m),
                    a(c).on(t.updateEvent, k),
                t.autoInit && l()
            })
    }(window.jQuery || window.Zepto || window.$, window, document),
    function(a) {
        "use strict";
        "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof module && module.exports ? module.exports = a(require("jquery")) : a(window.jQuery)
    }(function(a) {
        "use strict";
        a.fn.ratingLocales = {};
        var b, c, d, e, f, g, h, i, j;
        b = 0,
            c = 5,
            d = .5,
            e = function(b, c) {
                return null === b || void 0 === b || 0 === b.length || c && "" === a.trim(b)
            }
            ,
            f = function(a, b) {
                a.removeClass(b).addClass(b)
            }
            ,
            g = function(a, b, c) {
                var d = e(a.data(b)) ? a.attr(b) : a.data(b);
                return d ? d : c[b]
            }
            ,
            h = function(a) {
                var b = ("" + a).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
                return b ? Math.max(0, (b[1] ? b[1].length : 0) - (b[2] ? +b[2] : 0)) : 0
            }
            ,
            i = function(a, b) {
                return parseFloat(a.toFixed(b))
            }
            ,
            j = function(b, c) {
                this.$element = a(b),
                    this.init(c)
            }
            ,
            j.prototype = {
                constructor: j,
                _parseAttr: function(a, f) {
                    var h, i, j, k = this, l = k.$element, m = l.attr("type");
                    if ("range" === m || "number" === m) {
                        switch (i = g(l, a, f),
                            a) {
                            case "min":
                                j = b;
                                break;
                            case "max":
                                j = c;
                                break;
                            default:
                                j = d
                        }
                        return h = e(i) ? j : i,
                            parseFloat(h)
                    }
                    return parseFloat(f[a])
                },
                listenClick: function(a, b) {
                    a.on("click touchstart", function(a) {
                        return a.stopPropagation(),
                            a.preventDefault(),
                        a.handled !== !0 && (b(a),
                            void (a.handled = !0))
                    })
                },
                setDefault: function(a, b) {
                    var c = this;
                    e(c[a]) && (c[a] = b)
                },
                getPosition: function(a) {
                    var b = e(a.pageX) ? a.originalEvent.touches[0].pageX : a.pageX;
                    return b - this.$rating.offset().left
                },
                listen: function() {
                    var b, c, d = this;
                    d.initTouch(),
                        d.listenClick(d.$rating, function(a) {
                            return !d.inactive && (b = d.getPosition(a),
                                d.setStars(b),
                                d.$element.trigger("change").trigger("rating.change", [d.$element.val(), d.$caption.html()]),
                                void (d.starClicked = !0))
                        }),
                        d.$rating.on("mousemove", function(a) {
                            d.hoverEnabled && !d.inactive && (d.starClicked = !1,
                                b = d.getPosition(a),
                                c = d.calculate(b),
                                d.toggleHover(c),
                                d.$element.trigger("rating.hover", [c.val, c.caption, "stars"]))
                        }),
                        d.$rating.on("mouseleave", function() {
                            !d.hoverEnabled || d.inactive || d.starClicked || (c = d.cache,
                                d.toggleHover(c),
                                d.$element.trigger("rating.hoverleave", ["stars"]))
                        }),
                        d.$clear.on("mousemove", function() {
                            var a, b, e;
                            d.hoverEnabled && !d.inactive && d.hoverOnClear && (d.clearClicked = !1,
                                a = '<span class="' + d.clearCaptionClass + '">' + d.clearCaption + "</span>",
                                b = d.clearValue,
                                e = d.getWidthFromValue(b),
                                c = {
                                    caption: a,
                                    width: e,
                                    val: b
                                },
                                d.toggleHover(c),
                                d.$element.trigger("rating.hover", [b, a, "clear"]))
                        }),
                        d.$clear.on("mouseleave", function() {
                            d.hoverEnabled && !d.inactive && !d.clearClicked && d.hoverOnClear && (c = d.cache,
                                d.toggleHover(c),
                                d.$element.trigger("rating.hoverleave", ["clear"]))
                        }),
                        d.listenClick(d.$clear, function() {
                            d.inactive || (d.clear(),
                                d.clearClicked = !0)
                        }),
                        a(d.$element[0].form).on("reset", function() {
                            d.inactive || d.reset()
                        })
                },
                destroy: function() {
                    var b = this
                        , c = b.$element;
                    e(b.$container) || b.$container.before(c).remove(),
                        a.removeData(c.get(0)),
                        c.off("rating").removeClass("hide")
                },
                create: function(a) {
                    var b = this
                        , c = b.$element;
                    a = a || b.options || {},
                        b.destroy(),
                        c.rating(a)
                },
                setTouch: function(a, b) {
                    var c, d, f, g, h, i, j, k = this, l = "ontouchstart"in window || window.DocumentTouch && document instanceof window.DocumentTouch;
                    l && !k.inactive && (c = a.originalEvent,
                        d = e(c.touches) ? c.touches : c.changedTouches,
                        f = k.getPosition(d[0]),
                        b ? (k.setStars(f),
                            k.$element.trigger("change").trigger("rating.change", [k.$element.val(), k.$caption.html()]),
                            k.starClicked = !0) : (g = k.calculate(f),
                            h = g.val <= k.clearValue ? k.fetchCaption(k.clearValue) : g.caption,
                            i = k.getWidthFromValue(k.clearValue),
                            j = g.val <= k.clearValue ? k.rtl ? 100 - i + "%" : i + "%" : g.width,
                            k.$caption.html(h),
                            k.$stars.css("width", j)))
                },
                initTouch: function() {
                    var a = this;
                    a.$rating.on("touchstart touchmove touchend", function(b) {
                        var c = "touchend" === b.type;
                        a.setTouch(b, c)
                    })
                },
                initSlider: function(a) {
                    var f = this;
                    e(f.$element.val()) && f.$element.val(0),
                        f.initialValue = f.$element.val(),
                        f.setDefault("min", f._parseAttr("min", a)),
                        f.setDefault("max", f._parseAttr("max", a)),
                        f.setDefault("step", f._parseAttr("step", a)),
                    (isNaN(f.min) || e(f.min)) && (f.min = b),
                    (isNaN(f.max) || e(f.max)) && (f.max = c),
                    (isNaN(f.step) || e(f.step) || 0 === f.step) && (f.step = d),
                        f.diff = f.max - f.min
                },
                init: function(b) {
                    var c, d, g, h = this, i = h.$element;
                    h.options = b,
                        a.each(b, function(a, b) {
                            h[a] = b
                        }),
                        h.starClicked = !1,
                        h.clearClicked = !1,
                        h.initSlider(b),
                        h.checkDisabled(),
                        h.setDefault("rtl", i.attr("dir")),
                    h.rtl && i.attr("dir", "rtl"),
                        c = h.glyphicon ? "" : "★",
                        h.setDefault("symbol", c),
                        h.setDefault("clearButtonBaseClass", "clear-rating"),
                        h.setDefault("clearButtonActiveClass", "clear-rating-active"),
                        h.setDefault("clearValue", h.min),
                        f(i, "form-control hide"),
                        h.$clearElement = e(b.clearElement) ? null : a(b.clearElement),
                        h.$captionElement = e(b.captionElement) ? null : a(b.captionElement),
                    void 0 === h.$rating && void 0 === h.$container && (h.$rating = a(document.createElement("div")).html('<div class="rating-stars"></div>'),
                        h.$container = a(document.createElement("div")),
                        h.$container.before(h.$rating).append(h.$rating),
                        i.before(h.$container).appendTo(h.$rating)),
                        h.$stars = h.$rating.find(".rating-stars"),
                        h.generateRating(),
                        h.$clear = e(h.$clearElement) ? h.$container.find("." + h.clearButtonBaseClass) : h.$clearElement,
                        h.$caption = e(h.$captionElement) ? h.$container.find(".caption") : h.$captionElement,
                        h.setStars(),
                        h.listen(),
                    h.showClear && h.$clear.attr({
                        "class": h.getClearClass()
                    }),
                        d = i.val(),
                        g = h.getWidthFromValue(d),
                        h.cache = {
                            caption: h.$caption.html(),
                            width: (h.rtl ? 100 - g : g) + "%",
                            val: d
                        },
                        i.removeClass("rating-loading")
                },
                checkDisabled: function() {
                    var a = this;
                    a.disabled = g(a.$element, "disabled", a.options),
                        a.readonly = g(a.$element, "readonly", a.options),
                        a.inactive = a.disabled || a.readonly
                },
                getClearClass: function() {
                    return this.clearButtonBaseClass + " " + (this.inactive ? "" : this.clearButtonActiveClass)
                },
                generateRating: function() {
                    var a = this
                        , b = a.renderClear()
                        , c = a.renderCaption()
                        , d = a.rtl ? "rating-container-rtl" : "rating-container"
                        , g = a.getStars();
                    d += a.glyphicon ? ("" === a.symbol ? " rating-gly-star" : " rating-gly") + a.ratingClass : e(a.ratingClass) ? " rating-uni" : " " + a.ratingClass,
                        a.$rating.attr("class", d),
                        a.$rating.attr("data-content", g),
                        a.$stars.attr("data-content", g),
                        d = a.rtl ? "star-rating-rtl" : "star-rating",
                        a.$container.attr("class", d + " rating-" + a.size),
                        a.$container.removeClass("rating-active rating-disabled"),
                        a.inactive ? a.$container.addClass("rating-disabled") : a.$container.addClass("rating-active"),
                    e(a.$caption) && (a.rtl ? a.$container.prepend(c) : a.$container.append(c)),
                    e(a.$clear) && (a.rtl ? a.$container.append(b) : a.$container.prepend(b)),
                    e(a.containerClass) || f(a.$container, a.containerClass)
                },
                getStars: function() {
                    var a, b = this, c = b.stars, d = "";
                    for (a = 1; a <= c; a++)
                        d += b.symbol;
                    return d
                },
                renderClear: function() {
                    var a, b = this;
                    return b.showClear ? (a = b.getClearClass(),
                        e(b.$clearElement) ? '<div class="' + a + '" title="' + b.clearButtonTitle + '">' + b.clearButton + "</div>" : (f(b.$clearElement, a),
                            b.$clearElement.attr({
                                title: b.clearButtonTitle
                            }).html(b.clearButton),
                            "")) : ""
                },
                renderCaption: function() {
                    var a, b = this, c = b.$element.val();
                    return b.showCaption ? (a = b.fetchCaption(c),
                        e(b.$captionElement) ? '<div class="caption">' + a + "</div>" : (f(b.$captionElement, "caption"),
                            b.$captionElement.html(a),
                            "")) : ""
                },
                fetchCaption: function(a) {
                    var b, c, d, f, g, h = this, i = parseFloat(a), j = h.starCaptions, k = h.starCaptionClasses;
                    return f = "function" == typeof k ? k(i) : k[i],
                        d = "function" == typeof j ? j(i) : j[i],
                        c = e(d) ? h.defaultCaption.replace(/\{rating}/g, i) : d,
                        b = e(f) ? h.clearCaptionClass : f,
                        g = i === h.clearValue ? h.clearCaption : c,
                    '<span class="' + b + '">' + g + "</span>"
                },
                getWidthFromValue: function(a) {
                    var b = this
                        , c = b.min
                        , d = b.max;
                    return a <= c || c === d ? 0 : a >= d ? 100 : 100 * (a - c) / (d - c)
                },
                getValueFromPosition: function(a) {
                    var b, c, d = this, e = h(d.step), f = d.$rating.width();
                    return c = d.diff * a / (f * d.step),
                        c = d.rtl ? Math.floor(c) : Math.ceil(c),
                        b = i(parseFloat(d.min + c * d.step), e),
                        b = Math.max(Math.min(b, d.max), d.min),
                        d.rtl ? d.max - b : b
                },
                toggleHover: function(a) {
                    var b, c, d, e = this;
                    e.hoverChangeCaption && (d = a.val <= e.clearValue ? e.fetchCaption(e.clearValue) : a.caption,
                        e.$caption.html(d)),
                    e.hoverChangeStars && (b = e.getWidthFromValue(e.clearValue),
                        c = a.val <= e.clearValue ? e.rtl ? 100 - b + "%" : b + "%" : a.width,
                        e.$stars.css("width", c))
                },
                calculate: function(a) {
                    var b = this
                        , c = e(b.$element.val()) ? 0 : b.$element.val()
                        , d = arguments.length ? b.getValueFromPosition(a) : c
                        , f = b.fetchCaption(d)
                        , g = b.getWidthFromValue(d);
                    return b.rtl && (g = 100 - g),
                        g += "%",
                        {
                            caption: f,
                            width: g,
                            val: d
                        }
                },
                setStars: function(a) {
                    var b = this
                        , c = arguments.length ? b.calculate(a) : b.calculate();
                    b.$element.val(c.val),
                        b.$stars.css("width", c.width),
                        b.$caption.html(c.caption),
                        b.cache = c
                },
                clear: function() {
                    var a = this
                        , b = '<span class="' + a.clearCaptionClass + '">' + a.clearCaption + "</span>";
                    a.$stars.removeClass("rated"),
                    a.inactive || a.$caption.html(b),
                        a.$element.val(a.clearValue),
                        a.setStars(),
                        a.$element.trigger("rating.clear")
                },
                reset: function() {
                    var a = this;
                    a.$element.val(a.initialValue),
                        a.setStars(),
                        a.$element.trigger("rating.reset")
                },
                update: function(a) {
                    var b = this;
                    arguments.length && (b.$element.val(a),
                        b.setStars())
                },
                refresh: function(b) {
                    var c = this;
                    arguments.length && (c.$rating.off("rating"),
                    void 0 !== c.$clear && c.$clear.off(),
                        c.init(a.extend(c.options, b)),
                        c.showClear ? c.$clear.show() : c.$clear.hide(),
                        c.showCaption ? c.$caption.show() : c.$caption.hide(),
                        c.$element.trigger("rating.refresh"))
                }
            },
            a.fn.rating = function(b) {
                var c = Array.apply(null, arguments)
                    , d = [];
                switch (c.shift(),
                    this.each(function() {
                        var f, g = a(this), h = g.data("rating"), i = "object" == typeof b && b, k = i.language || g.data("language") || "en";
                        h || (f = a.extend({}, a.fn.rating.defaults),
                        "en" === k || e(a.fn.ratingLocales[k]) || (f = a.extend(f, a.fn.ratingLocales[k])),
                            h = new j(this,a.extend(f, i, g.data())),
                            g.data("rating", h)),
                        "string" == typeof b && d.push(h[b].apply(h, c))
                    }),
                    d.length) {
                    case 0:
                        return this;
                    case 1:
                        return d[0];
                    default:
                        return d
                }
            }
            ,
            a.fn.rating.defaults = {
                language: "en",
                stars: 5,
                glyphicon: !0,
                symbol: null,
                ratingClass: "",
                disabled: !1,
                readonly: !1,
                rtl: !1,
                size: "md",
                showClear: !0,
                showCaption: !0,
                starCaptionClasses: {
                    .5: "label label-danger",
                    1: "label label-danger",
                    1.5: "label label-warning",
                    2: "label label-warning",
                    2.5: "label label-info",
                    3: "label label-info",
                    3.5: "label label-primary",
                    4: "label label-primary",
                    4.5: "label label-success",
                    5: "label label-success"
                },
                clearButton: '<i class="glyphicon glyphicon-minus-sign"></i>',
                clearButtonBaseClass: "clear-rating",
                clearButtonActiveClass: "clear-rating-active",
                clearCaptionClass: "label label-default",
                clearValue: null,
                captionElement: null,
                clearElement: null,
                containerClass: null,
                hoverEnabled: !0,
                hoverChangeCaption: !0,
                hoverChangeStars: !0,
                hoverOnClear: !0
            },
            a.fn.ratingLocales.en = {
                defaultCaption: "{rating} Stars",
                starCaptions: {
                    .5: "Half Star",
                    1: "One Star",
                    1.5: "One & Half Star",
                    2: "Two Stars",
                    2.5: "Two & Half Stars",
                    3: "Three Stars",
                    3.5: "Three & Half Stars",
                    4: "Four Stars",
                    4.5: "Four & Half Stars",
                    5: "Five Stars"
                },
                clearButtonTitle: "Clear",
                clearCaption: "Not Rated"
            },
            a.extend(a.fn.rating.defaults, a.fn.ratingLocales.en),
            a.fn.rating.Constructor = j,
            a("input.rating").addClass("rating-loading"),
            a(document).ready(function() {
                var b = a("input.rating")
                    , c = Object.keys(b).length;
                c > 0 && b.rating()
            })
    }),
    function(a) {
        a.extend(a.lazyLoadXT, {
            autoInit: !1,
            blankImage: !1,
            forceEvent: "lazyLoadXT.forceLoadAll",
            edgeY: 150
        })
    }(jQuery),
    function(a) {
        "use strict";
        var b = a.lazyLoadXT
            , c = b.bgAttr || "data-bg";
        b.selector += ",[" + c + "]",
            a(document).on("lazyshow", function(b) {
                var d = a(b.target)
                    , e = d.attr(c);
                e && d.css("background-image", "url('" + e + "')").removeAttr(c).triggerHandler("load")
            })
    }(window.jQuery || window.Zepto || window.$),
    function() {
        var a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y = [].slice, z = [].indexOf || function(a) {
                for (var b = 0, c = this.length; b < c; b++)
                    if (b in this && this[b] === a)
                        return b;
                return -1
            }
        ;
        a = window.jQuery || window.Zepto || window.$,
            a.payment = {},
            a.payment.fn = {},
            a.fn.payment = function() {
                var b, c;
                return c = arguments[0],
                    b = 2 <= arguments.length ? y.call(arguments, 1) : [],
                    a.payment.fn[c].apply(this, b)
            }
            ,
            e = /(\d{1,4})/g,
            a.payment.cards = d = [{
                type: "visaelectron",
                pattern: /^4(026|17500|405|508|844|91[37])/,
                format: e,
                length: [16],
                cvcLength: [3],
                luhn: !0
            }, {
                type: "maestro",
                pattern: /^(5(018|0[23]|[68])|6(39|7))/,
                format: e,
                length: [12, 13, 14, 15, 16, 17, 18, 19],
                cvcLength: [3],
                luhn: !0
            }, {
                type: "forbrugsforeningen",
                pattern: /^600/,
                format: e,
                length: [16],
                cvcLength: [3],
                luhn: !0
            }, {
                type: "dankort",
                pattern: /^5019/,
                format: e,
                length: [16],
                cvcLength: [3],
                luhn: !0
            }, {
                type: "visa",
                pattern: /^4/,
                format: e,
                length: [13, 16],
                cvcLength: [3],
                luhn: !0
            }, {
                type: "mastercard",
                pattern: /^(5[1-5]|2[2-7])/,
                format: e,
                length: [16],
                cvcLength: [3],
                luhn: !0
            }, {
                type: "amex",
                pattern: /^3[47]/,
                format: /(\d{1,4})(\d{1,6})?(\d{1,5})?/,
                length: [15],
                cvcLength: [3, 4],
                luhn: !0
            }, {
                type: "dinersclub",
                pattern: /^3[0689]/,
                format: /(\d{1,4})(\d{1,6})?(\d{1,4})?/,
                length: [14],
                cvcLength: [3],
                luhn: !0
            }, {
                type: "discover",
                pattern: /^6([045]|22)/,
                format: e,
                length: [16],
                cvcLength: [3],
                luhn: !0
            }, {
                type: "unionpay",
                pattern: /^(62|88)/,
                format: e,
                length: [16, 17, 18, 19],
                cvcLength: [3],
                luhn: !1
            }, {
                type: "jcb",
                pattern: /^35/,
                format: e,
                length: [16],
                cvcLength: [3],
                luhn: !0
            }],
            b = function(a) {
                var b, c, e;
                for (a = (a + "").replace(/\D/g, ""),
                         c = 0,
                         e = d.length; c < e; c++)
                    if (b = d[c],
                            b.pattern.test(a))
                        return b
            }
            ,
            c = function(a) {
                var b, c, e;
                for (c = 0,
                         e = d.length; c < e; c++)
                    if (b = d[c],
                        b.type === a)
                        return b
            }
            ,
            m = function(a) {
                var b, c, d, e, f, g;
                for (d = !0,
                         e = 0,
                         c = (a + "").split("").reverse(),
                         f = 0,
                         g = c.length; f < g; f++)
                    b = c[f],
                        b = parseInt(b, 10),
                    (d = !d) && (b *= 2),
                    b > 9 && (b -= 9),
                        e += b;
                return e % 10 === 0
            }
            ,
            l = function(a) {
                var b;
                return null != a.prop("selectionStart") && a.prop("selectionStart") !== a.prop("selectionEnd") || !(null == ("undefined" != typeof document && null !== document && null != (b = document.selection) ? b.createRange : void 0) || !document.selection.createRange().text)
            }
            ,
            w = function(a, b) {
                var c, d, e;
                try {
                    c = b.prop("selectionStart")
                } catch (f) {
                    d = f,
                        c = null
                }
                if (e = b.val(),
                        b.val(a),
                    null !== c && b.is(":focus"))
                    return c === e.length && (c = a.length),
                        b.prop("selectionStart", c),
                        b.prop("selectionEnd", c)
            }
            ,
            r = function(a) {
                var b, c, d, e, f, g, h, i;
                for (null == a && (a = ""),
                         d = "０１２３４５６７８９",
                         e = "0123456789",
                         g = "",
                         c = a.split(""),
                         h = 0,
                         i = c.length; h < i; h++)
                    b = c[h],
                        f = d.indexOf(b),
                    f > -1 && (b = e[f]),
                        g += b;
                return g
            }
            ,
            q = function(b) {
                return setTimeout(function() {
                    var c, d;
                    return c = a(b.currentTarget),
                        d = c.val(),
                        d = r(d),
                        d = d.replace(/\D/g, ""),
                        w(d, c)
                })
            }
            ,
            o = function(b) {
                return setTimeout(function() {
                    var c, d;
                    return c = a(b.currentTarget),
                        d = c.val(),
                        d = r(d),
                        d = a.payment.formatCardNumber(d),
                        w(d, c)
                })
            }
            ,
            h = function(c) {
                var d, e, f, g, h, i, j;
                if (f = String.fromCharCode(c.which),
                    /^\d+$/.test(f) && (d = a(c.currentTarget),
                        j = d.val(),
                        e = b(j + f),
                        g = (j.replace(/\D/g, "") + f).length,
                        i = 16,
                    e && (i = e.length[e.length.length - 1]),
                        !(g >= i || null != d.prop("selectionStart") && d.prop("selectionStart") !== j.length)))
                    return h = e && "amex" === e.type ? /^(\d{4}|\d{4}\s\d{6})$/ : /(?:^|\s)(\d{4})$/,
                        h.test(j) ? (c.preventDefault(),
                            setTimeout(function() {
                                return d.val(j + " " + f)
                            })) : h.test(j + f) ? (c.preventDefault(),
                            setTimeout(function() {
                                return d.val(j + f + " ")
                            })) : void 0
            }
            ,
            f = function(b) {
                var c, d;
                if (c = a(b.currentTarget),
                        d = c.val(),
                    8 === b.which && (null == c.prop("selectionStart") || c.prop("selectionStart") === d.length))
                    return /\d\s$/.test(d) ? (b.preventDefault(),
                        setTimeout(function() {
                            return c.val(d.replace(/\d\s$/, ""))
                        })) : /\s\d?$/.test(d) ? (b.preventDefault(),
                        setTimeout(function() {
                            return c.val(d.replace(/\d$/, ""))
                        })) : void 0
            }
            ,
            p = function(b) {
                return setTimeout(function() {
                    var c, d;
                    return c = a(b.currentTarget),
                        d = c.val(),
                        d = r(d),
                        d = a.payment.formatExpiry(d),
                        w(d, c)
                })
            }
            ,
            i = function(b) {
                var c, d, e;
                if (d = String.fromCharCode(b.which),
                        /^\d+$/.test(d))
                    return c = a(b.currentTarget),
                        e = c.val() + d,
                        /^\d$/.test(e) && "0" !== e && "1" !== e ? (b.preventDefault(),
                            setTimeout(function() {
                                return c.val("0" + e + " / ")
                            })) : /^\d\d$/.test(e) ? (b.preventDefault(),
                            setTimeout(function() {
                                return c.val("" + e + " / ")
                            })) : void 0
            }
            ,
            j = function(b) {
                var c, d, e;
                if (d = String.fromCharCode(b.which),
                        /^\d+$/.test(d))
                    return c = a(b.currentTarget),
                        e = c.val(),
                        /^\d\d$/.test(e) ? c.val("" + e + " / ") : void 0
            }
            ,
            k = function(b) {
                var c, d, e;
                if (e = String.fromCharCode(b.which),
                    "/" === e || " " === e)
                    return c = a(b.currentTarget),
                        d = c.val(),
                        /^\d$/.test(d) && "0" !== d ? c.val("0" + d + " / ") : void 0
            }
            ,
            g = function(b) {
                var c, d;
                if (c = a(b.currentTarget),
                        d = c.val(),
                    8 === b.which && (null == c.prop("selectionStart") || c.prop("selectionStart") === d.length))
                    return /\d\s\/\s$/.test(d) ? (b.preventDefault(),
                        setTimeout(function() {
                            return c.val(d.replace(/\d\s\/\s$/, ""))
                        })) : void 0
            }
            ,
            n = function(b) {
                return setTimeout(function() {
                    var c, d;
                    return c = a(b.currentTarget),
                        d = c.val(),
                        d = r(d),
                        d = d.replace(/\D/g, "").slice(0, 4),
                        w(d, c)
                })
            }
            ,
            v = function(a) {
                var b;
                return !(!a.metaKey && !a.ctrlKey) || 32 !== a.which && (0 === a.which || (a.which < 33 || (b = String.fromCharCode(a.which),
                    !!/[\d\s]/.test(b))))
            }
            ,
            t = function(c) {
                var d, e, f, g;
                if (d = a(c.currentTarget),
                        f = String.fromCharCode(c.which),
                    /^\d+$/.test(f) && !l(d))
                    return g = (d.val() + f).replace(/\D/g, ""),
                        e = b(g),
                        e ? g.length <= e.length[e.length.length - 1] : g.length <= 16
            }
            ,
            u = function(b) {
                var c, d, e;
                if (c = a(b.currentTarget),
                        d = String.fromCharCode(b.which),
                    /^\d+$/.test(d) && !l(c))
                    return e = c.val() + d,
                        e = e.replace(/\D/g, ""),
                    !(e.length > 6) && void 0
            }
            ,
            s = function(b) {
                var c, d, e;
                if (c = a(b.currentTarget),
                        d = String.fromCharCode(b.which),
                    /^\d+$/.test(d) && !l(c))
                    return e = c.val() + d,
                    e.length <= 4
            }
            ,
            x = function(b) {
                var c, e, f, g, h;
                if (c = a(b.currentTarget),
                        h = c.val(),
                        g = a.payment.cardType(h) || "unknown",
                        !c.hasClass(g))
                    return e = function() {
                        var a, b, c;
                        for (c = [],
                                 a = 0,
                                 b = d.length; a < b; a++)
                            f = d[a],
                                c.push(f.type);
                        return c
                    }(),
                        c.removeClass("unknown"),
                        c.removeClass(e.join(" ")),
                        c.addClass(g),
                        c.toggleClass("identified", "unknown" !== g),
                        c.trigger("payment.cardType", g)
            }
            ,
            a.payment.fn.formatCardCVC = function() {
                return this.on("keypress", v),
                    this.on("keypress", s),
                    this.on("paste", n),
                    this.on("change", n),
                    this.on("input", n),
                    this
            }
            ,
            a.payment.fn.formatCardExpiry = function() {
                return this.on("keypress", v),
                    this.on("keypress", u),
                    this.on("keypress", i),
                    this.on("keypress", k),
                    this.on("keypress", j),
                    this.on("keydown", g),
                    this.on("change", p),
                    this.on("input", p),
                    this
            }
            ,
            a.payment.fn.formatCardNumber = function() {
                return this.on("keypress", v),
                    this.on("keypress", t),
                    this.on("keypress", h),
                    this.on("keydown", f),
                    this.on("keyup", x),
                    this.on("paste", o),
                    this.on("change", o),
                    this.on("input", o),
                    this.on("input", x),
                    this
            }
            ,
            a.payment.fn.restrictNumeric = function() {
                return this.on("keypress", v),
                    this.on("paste", q),
                    this.on("change", q),
                    this.on("input", q),
                    this
            }
            ,
            a.payment.fn.cardExpiryVal = function() {
                return a.payment.cardExpiryVal(a(this).val())
            }
            ,
            a.payment.cardExpiryVal = function(a) {
                var b, c, d, e;
                return e = a.split(/[\s\/]+/, 2),
                    b = e[0],
                    d = e[1],
                2 === (null != d ? d.length : void 0) && /^\d+$/.test(d) && (c = (new Date).getFullYear(),
                    c = c.toString().slice(0, 2),
                    d = c + d),
                    b = parseInt(b, 10),
                    d = parseInt(d, 10),
                    {
                        month: b,
                        year: d
                    }
            }
            ,
            a.payment.validateCardNumber = function(a) {
                var c, d;
                return a = (a + "").replace(/\s+|-/g, ""),
                !!/^\d+$/.test(a) && (c = b(a),
                !!c && (d = a.length,
                z.call(c.length, d) >= 0 && (c.luhn === !1 || m(a))))
            }
            ,
            a.payment.validateCardExpiry = function(b, c) {
                var d, e, f;
                return "object" == typeof b && "month"in b && (f = b,
                    b = f.month,
                    c = f.year),
                !(!b || !c) && (b = a.trim(b),
                    c = a.trim(c),
                !!/^\d+$/.test(b) && (!!/^\d+$/.test(c) && (1 <= b && b <= 12 && (2 === c.length && (c = c < 70 ? "20" + c : "19" + c),
                4 === c.length && (e = new Date(c,b),
                    d = new Date,
                    e.setMonth(e.getMonth() - 1),
                    e.setMonth(e.getMonth() + 1, 1),
                e > d)))))
            }
            ,
            a.payment.validateCardCVC = function(b, d) {
                var e, f;
                return b = a.trim(b),
                !!/^\d+$/.test(b) && (e = c(d),
                    null != e ? (f = b.length,
                    z.call(e.cvcLength, f) >= 0) : b.length >= 3 && b.length <= 4)
            }
            ,
            a.payment.cardType = function(a) {
                var c;
                return a ? (null != (c = b(a)) ? c.type : void 0) || null : null
            }
            ,
            a.payment.formatCardNumber = function(c) {
                var d, e, f, g;
                return c = c.replace(/\D/g, ""),
                    (d = b(c)) ? (f = d.length[d.length.length - 1],
                        c = c.slice(0, f),
                        d.format.global ? null != (g = c.match(d.format)) ? g.join(" ") : void 0 : (e = d.format.exec(c),
                            null != e ? (e.shift(),
                                e = a.grep(e, function(a) {
                                    return a
                                }),
                                e.join(" ")) : void 0)) : c
            }
            ,
            a.payment.formatExpiry = function(a) {
                var b, c, d, e;
                return (c = a.match(/^\D*(\d{1,2})(\D+)?(\d{1,4})?/)) ? (b = c[1] || "",
                    d = c[2] || "",
                    e = c[3] || "",
                    e.length > 0 ? d = " / " : " /" === d ? (b = b.substring(0, 1),
                        d = "") : 2 === b.length || d.length > 0 ? d = " / " : 1 === b.length && "0" !== b && "1" !== b && (b = "0" + b,
                        d = " / "),
                b + d + e) : ""
            }
    }
        .call(this),
    function(a) {
        if ("function" == typeof define && define.amd)
            define(a);
        else if ("object" == typeof exports)
            module.exports = a();
        else {
            var b = window.Cookies
                , c = window.Cookies = a();
            c.noConflict = function() {
                return window.Cookies = b,
                    c
            }
        }
    }(function() {
        function a() {
            for (var a = 0, b = {}; a < arguments.length; a++) {
                var c = arguments[a];
                for (var d in c)
                    b[d] = c[d]
            }
            return b
        }
        function b(c) {
            function d(b, e, f) {
                var g;
                if (arguments.length > 1) {
                    if (f = a({
                            path: "/"
                        }, d.defaults, f),
                        "number" == typeof f.expires) {
                        var h = new Date;
                        h.setMilliseconds(h.getMilliseconds() + 864e5 * f.expires),
                            f.expires = h
                    }
                    try {
                        g = JSON.stringify(e),
                        /^[\{\[]/.test(g) && (e = g)
                    } catch (i) {}
                    return e = encodeURIComponent(String(e)),
                        e = e.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent),
                        b = encodeURIComponent(String(b)),
                        b = b.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent),
                        b = b.replace(/[\(\)]/g, escape),
                        document.cookie = [b, "=", e, f.expires && "; expires=" + f.expires.toUTCString(), f.path && "; path=" + f.path, f.domain && "; domain=" + f.domain, f.secure ? "; secure" : ""].join("")
                }
                b || (g = {});
                for (var j = document.cookie ? document.cookie.split("; ") : [], k = /(%[0-9A-Z]{2})+/g, l = 0; l < j.length; l++) {
                    var m = j[l].split("=")
                        , n = m[0].replace(k, decodeURIComponent)
                        , o = m.slice(1).join("=");
                    '"' === o.charAt(0) && (o = o.slice(1, -1));
                    try {
                        if (o = c && c(o, n) || o.replace(k, decodeURIComponent),
                                this.json)
                            try {
                                o = JSON.parse(o)
                            } catch (i) {}
                        if (b === n) {
                            g = o;
                            break
                        }
                        b || (g[n] = o)
                    } catch (i) {}
                }
                return g
            }
            return d.get = d.set = d,
                d.getJSON = function() {
                    return d.apply({
                        json: !0
                    }, [].slice.call(arguments))
                }
                ,
                d.defaults = {},
                d.remove = function(b, c) {
                    d(b, "", a(c, {
                        expires: -1
                    }))
                }
                ,
                d.withConverter = b,
                d
        }
        return b()
    }),
    function(a) {
        "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : jQuery)
    }(function(a) {
        var b, c = navigator.userAgent, d = /iphone/i.test(c), e = /chrome/i.test(c), f = /android/i.test(c);
        a.mask = {
            definitions: {
                9: "[0-9]",
                a: "[A-Za-z]",
                "*": "[A-Za-z0-9]"
            },
            autoclear: !0,
            dataName: "rawMaskFn",
            placeholder: "_"
        },
            a.fn.extend({
                caret: function(a, b) {
                    var c;
                    if (0 !== this.length && !this.is(":hidden"))
                        return "number" == typeof a ? (b = "number" == typeof b ? b : a,
                            this.each(function() {
                                this.setSelectionRange ? this.setSelectionRange(a, b) : this.createTextRange && (c = this.createTextRange(),
                                    c.collapse(!0),
                                    c.moveEnd("character", b),
                                    c.moveStart("character", a),
                                    c.select())
                            })) : (this[0].setSelectionRange ? (a = this[0].selectionStart,
                            b = this[0].selectionEnd) : document.selection && document.selection.createRange && (c = document.selection.createRange(),
                            a = 0 - c.duplicate().moveStart("character", -1e5),
                            b = a + c.text.length),
                            {
                                begin: a,
                                end: b
                            })
                },
                unmask: function() {
                    return this.trigger("unmask")
                },
                mask: function(c, g) {
                    var h, i, j, k, l, m, n, o;
                    if (!c && this.length > 0) {
                        h = a(this[0]);
                        var p = h.data(a.mask.dataName);
                        return p ? p() : void 0
                    }
                    return g = a.extend({
                        autoclear: a.mask.autoclear,
                        placeholder: a.mask.placeholder,
                        completed: null
                    }, g),
                        i = a.mask.definitions,
                        j = [],
                        k = n = c.length,
                        l = null,
                        a.each(c.split(""), function(a, b) {
                            "?" == b ? (n--,
                                k = a) : i[b] ? (j.push(new RegExp(i[b])),
                            null === l && (l = j.length - 1),
                            a < k && (m = j.length - 1)) : j.push(null)
                        }),
                        this.trigger("unmask").each(function() {
                            function h() {
                                if (g.completed) {
                                    for (var a = l; a <= m; a++)
                                        if (j[a] && C[a] === p(a))
                                            return;
                                    g.completed.call(B)
                                }
                            }
                            function p(a) {
                                return a < g.placeholder.length ? g.placeholder.charAt(a) : g.placeholder.charAt(0)
                            }
                            function q(a) {
                                for (; ++a < n && !j[a]; )
                                    ;
                                return a
                            }
                            function r(a) {
                                for (; --a >= 0 && !j[a]; )
                                    ;
                                return a
                            }
                            function s(a, b) {
                                var c, d;
                                if (!(a < 0)) {
                                    for (c = a,
                                             d = q(b); c < n; c++)
                                        if (j[c]) {
                                            if (!(d < n && j[c].test(C[d])))
                                                break;
                                            C[c] = C[d],
                                                C[d] = p(d),
                                                d = q(d)
                                        }
                                    z(),
                                        B.caret(Math.max(l, a))
                                }
                            }
                            function t(a) {
                                var b, c, d, e;
                                for (b = a,
                                         c = p(a); b < n; b++)
                                    if (j[b]) {
                                        if (d = q(b),
                                                e = C[b],
                                                C[b] = c,
                                                !(d < n && j[d].test(e)))
                                            break;
                                        c = e
                                    }
                            }
                            function u(a) {
                                var b = B.val()
                                    , c = B.caret();
                                if (o && o.length && o.length > b.length) {
                                    for (A(!0); c.begin > 0 && !j[c.begin - 1]; )
                                        c.begin--;
                                    if (0 === c.begin)
                                        for (; c.begin < l && !j[c.begin]; )
                                            c.begin++;
                                    B.caret(c.begin, c.begin)
                                } else {
                                    for (A(!0); c.begin < n && !j[c.begin]; )
                                        c.begin++;
                                    B.caret(c.begin, c.begin)
                                }
                                h()
                            }
                            function v(a) {
                                A(),
                                B.val() != E && B.change()
                            }
                            function w(a) {
                                if (!B.prop("readonly")) {
                                    var b, c, e, f = a.which || a.keyCode;
                                    o = B.val(),
                                        8 === f || 46 === f || d && 127 === f ? (b = B.caret(),
                                            c = b.begin,
                                            e = b.end,
                                        e - c === 0 && (c = 46 !== f ? r(c) : e = q(c - 1),
                                            e = 46 === f ? q(e) : e),
                                            y(c, e),
                                            s(c, e - 1),
                                            a.preventDefault()) : 13 === f ? v.call(this, a) : 27 === f && (B.val(E),
                                            B.caret(0, A()),
                                            a.preventDefault())
                                }
                            }
                            function x(b) {
                                if (!B.prop("readonly")) {
                                    var c, d, e, g = b.which || b.keyCode, i = B.caret();
                                    if (!(b.ctrlKey || b.altKey || b.metaKey || g < 32) && g && 13 !== g) {
                                        if (i.end - i.begin !== 0 && (y(i.begin, i.end),
                                                s(i.begin, i.end - 1)),
                                                c = q(i.begin - 1),
                                            c < n && (d = String.fromCharCode(g),
                                                j[c].test(d))) {
                                            if (t(c),
                                                    C[c] = d,
                                                    z(),
                                                    e = q(c),
                                                    f) {
                                                var k = function() {
                                                    a.proxy(a.fn.caret, B, e)()
                                                };
                                                setTimeout(k, 0)
                                            } else
                                                B.caret(e);
                                            i.begin <= m && h()
                                        }
                                        b.preventDefault()
                                    }
                                }
                            }
                            function y(a, b) {
                                var c;
                                for (c = a; c < b && c < n; c++)
                                    j[c] && (C[c] = p(c))
                            }
                            function z() {
                                B.val(C.join(""))
                            }
                            function A(a) {
                                var b, c, d, e = B.val(), f = -1;
                                for (b = 0,
                                         d = 0; b < n; b++)
                                    if (j[b]) {
                                        for (C[b] = p(b); d++ < e.length; )
                                            if (c = e.charAt(d - 1),
                                                    j[b].test(c)) {
                                                C[b] = c,
                                                    f = b;
                                                break
                                            }
                                        if (d > e.length) {
                                            y(b + 1, n);
                                            break
                                        }
                                    } else
                                        C[b] === e.charAt(d) && d++,
                                        b < k && (f = b);
                                return a ? z() : f + 1 < k ? g.autoclear || C.join("") === D ? (B.val() && B.val(""),
                                    y(0, n)) : z() : (z(),
                                    B.val(B.val().substring(0, f + 1))),
                                    k ? b : l
                            }
                            var B = a(this)
                                , C = a.map(c.split(""), function(a, b) {
                                if ("?" != a)
                                    return i[a] ? p(b) : a
                            })
                                , D = C.join("")
                                , E = B.val();
                            B.data(a.mask.dataName, function() {
                                return a.map(C, function(a, b) {
                                    return j[b] && a != p(b) ? a : null
                                }).join("")
                            }),
                                B.one("unmask", function() {
                                    B.off(".mask").removeData(a.mask.dataName)
                                }).on("focus.mask", function() {
                                    if (!B.prop("readonly")) {
                                        clearTimeout(b);
                                        var a;
                                        E = B.val(),
                                            a = A(),
                                            b = setTimeout(function() {
                                                B.get(0) === document.activeElement && (z(),
                                                    a == c.replace("?", "").length ? B.caret(0, a) : B.caret(a))
                                            }, 10)
                                    }
                                }).on("blur.mask", v).on("keydown.mask", w).on("keypress.mask", x).on("input.mask paste.mask", function() {
                                    B.prop("readonly") || setTimeout(function() {
                                        var a = A(!0);
                                        B.caret(a),
                                            h()
                                    }, 0)
                                }),
                            e && f && B.off("input.mask").on("input.mask", u),
                                A()
                        })
                }
            })
    }),
    function(a) {
        var b = a(window);
        a.fn.visible = function(a, c, d) {
            if (!(this.length < 1)) {
                var e = this.length > 1 ? this.eq(0) : this
                    , f = e.get(0)
                    , g = b.width()
                    , h = b.height()
                    , d = d ? d : "both"
                    , i = c !== !0 || f.offsetWidth * f.offsetHeight;
                if ("function" == typeof f.getBoundingClientRect) {
                    var j = f.getBoundingClientRect()
                        , k = j.top >= 0 && j.top < h
                        , l = j.bottom > 0 && j.bottom <= h
                        , m = j.left >= 0 && j.left < g
                        , n = j.right > 0 && j.right <= g
                        , o = a ? k || l : k && l
                        , p = a ? m || n : m && n;
                    if ("both" === d)
                        return i && o && p;
                    if ("vertical" === d)
                        return i && o;
                    if ("horizontal" === d)
                        return i && p
                } else {
                    var q = b.scrollTop()
                        , r = q + h
                        , s = b.scrollLeft()
                        , t = s + g
                        , u = e.offset()
                        , v = u.top
                        , w = v + e.height()
                        , x = u.left
                        , y = x + e.width()
                        , z = a === !0 ? w : v
                        , A = a === !0 ? v : w
                        , B = a === !0 ? y : x
                        , C = a === !0 ? x : y;
                    if ("both" === d)
                        return !!i && A <= r && z >= q && C <= t && B >= s;
                    if ("vertical" === d)
                        return !!i && A <= r && z >= q;
                    if ("horizontal" === d)
                        return !!i && C <= t && B >= s
                }
            }
        }
    }(jQuery),
    function(a, b, c, d) {
        c.fn.spin.presets["default"] = {
            lines: 11,
            length: 6,
            width: 2,
            radius: 5,
            corners: 0,
            rotate: 0,
            direction: 1,
            color: "#000",
            speed: 1.2,
            trail: 30,
            shadow: !1,
            hwaccel: !0,
            className: "spinner",
            zIndex: 2e9,
            top: "50%",
            left: "50%"
        }
    }(window, document, jQuery),
    function(a, b, c, d) {
        d.AjaxTrait = {
            ajax: function(b) {
                var d = c.Deferred()
                    , e = c(".payment-status-checking.avoid-refresh-page");
                return b.context = b.context || this,
                    b.dataType = b.dataType || "json",
                    b.url += /\?/.test(b.url) ? "&" : "?",
                    b.url += "currentUrl=" + encodeURIComponent(a.location.href),
                    c.ajax(b).fail(function(a, b, c) {
                        d.rejectWith(this, [a, b, c])
                    }).done(function(b, c, f) {
                        return "error" === b.status ? d.rejectWith(this, [f, c, b.message]) : ("redirect" === b.status && (e.removeClass("avoid-refresh-page"),
                            a.location.href.toString() === b.to ? a.location.reload(!0) : a.location.href = b.to),
                            d.resolveWith(this, [b, c, f]))
                    }),
                    d.promise()
            }
        }
    }(window, document, jQuery, _FD),
    function(a, b, c, d) {
        d.DirectionTrait = {
            isRtlTextDirection: null,
            directionReplacements: {
                left: "right",
                Left: "Right",
                right: "left",
                Right: "Left"
            },
            isDirectionRTL: function() {
                return null === this.isRtlTextDirection && (this.isRtlTextDirection = "rtl" === c("body").css("direction")),
                    this.isRtlTextDirection
            },
            setCssProperty: function(a, b, d) {
                var e = b;
                this.isDirectionRTL() && (e = e.replace(/(left|right)/i, c.proxy(function(a, b) {
                    return this.directionReplacements[b]
                }, this))),
                    c(a).css(e, d)
            }
        }
    }(window, document, jQuery, _FD),
    function(a, b, c, d) {
        d.LoadingIndicatorTrait = {
            loadingConfig: {
                loadingClass: "loading"
            },
            startElementLoading: function(a, b, d) {
                var e = c.extend(!0, {}, c.fn.spin.presets["default"], d || {})
                    , f = c.extend(!0, {}, this.loadingConfig, b || {});
                if (!a.hasClass(f.loadingClass))
                    return a.addClass(f.loadingClass).spin(e)
            },
            stopElementLoading: function(a) {
                return a.removeClass(this.loadingConfig.loadingClass).spin(!1)
            }
        }
    }(window, document, jQuery, _FD),
    function(a, b, c, d) {
        d.OnloadTrait = {
            onload: function(b) {
                a.__onload ? b.apply(this) : c(a).one("load", c.proxy(b, this))
            }
        }
    }(window, document, jQuery, _FD),
    function(a, b, c, d) {
        d.TrackingTrait = {
            pushTrackingEvent: function(b, c) {
                if (this.isTrackingEnabled() && "undefined" !== b && "" !== b) {
                    var d = a.tracking.getDataLayerObjectName();
                    c !== Object(c) && (c = {}),
                        c.event = b,
                        a[d].push(c)
                }
            },
            isTrackingEnabled: function() {
                var b = !1;
                return "undefined" != typeof a.tracking && a.tracking.isGtmActive() && (b = !0),
                    b
            }
        }
    }(window, document, jQuery, _FD),
    function(a, b, c, d) {
        d.Base = Class({
            __config: {},
            __initialized: !1,
            __construct: function(a) {
                c.extend(!0, this.__config, a)
            },
            init: function() {
                if (this.__initialized)
                    throw new Error(this.__name + " already initialised!");
                this.__initialized = !0
            },
            hasFullJsSupport: function() {
                return this.__config.hasFullJsSupport
            },
            getConfig: function(a) {
                return "undefined" == typeof a ? this.__config[this.__name] : a === !1 ? this.__config : this.__config[a]
            }
        })
    }(window, document, jQuery, _FD),
    function(a, b, c, d) {
        "use strict";
        var e = {
            HOLDER_NAME: "holder_name",
            CC_NUMBER: "cc_number",
            CVC_NUMBER: "cvc_number",
            EXPIRY_DATE: "expiry_date"
        }
            , f = Class({
            elements: {},
            getElement: function(a) {
                return "undefined" == typeof this.elements[a] && (this.elements[a] = c(a)),
                    this.elements[a]
            },
            clearElementCache: function(a) {
                delete this.elements[a]
            },
            clearCache: function() {
                this.elements = {}
            }
        })
            , g = Class({
            validationErrorMessages: {},
            domElementsProvider: null,
            $container: null,
            __construct: function(a, b) {
                this.domElementsProvider = a,
                    this.$container = b
            },
            setValidationErrorMessages: function(a) {
                if ("undefined" == typeof a)
                    throw new Error('Invalid argument, "validationErrorMessages" not defined');
                this.validationErrorMessages = a
            },
            getValidationErrorMessage: function(a) {
                if ("undefined" == typeof this.validationErrorMessages[a])
                    throw new Error("Validation type " + a + " does not have validation error message configured");
                return this.validationErrorMessages[a]
            },
            validateCreditCardElements: function(a) {
                var b = {}
                    , d = 0
                    , f = this;
                return c.each(a, function(a, g) {
                    var h = !0;
                    switch (a) {
                        case e.HOLDER_NAME:
                            h = "" !== f.domElementsProvider.getElement(g).val();
                            break;
                        case e.CC_NUMBER:
                            h = c.payment.validateCardNumber(f.domElementsProvider.getElement(g).val());
                            break;
                        case e.CVC_NUMBER:
                            h = c.payment.validateCardCVC(f.domElementsProvider.getElement(g).val());
                            break;
                        case e.EXPIRY_DATE:
                            var i = f.domElementsProvider.getElement(g[0]).find(":selected").text()
                                , j = f.domElementsProvider.getElement(g[1]).find(":selected").text();
                            h = c.payment.validateCardExpiry(i, j)
                    }
                    !1 === h && (d++,
                        b[a] = f.getValidationErrorMessage(a))
                }),
                !d || b
            },
            clearValidationErrorMessages: function() {
                this.$container.find(".errors").remove(),
                    this.$container.find(".has-error").removeClass("has-error")
            },
            attachValidationErrorMessageToInputElement: function(a, b) {
                c.isArray(a) && (a = a[0]);
                var d = this.domElementsProvider.getElement(a)
                    , e = d.parents(".form-group")
                    , f = e.find(".form-input-errors-container");
                e.addClass("has-error"),
                    c("<ul />", {
                        "class": "errors"
                    }).append(c("<li />").html(b)).appendTo(f)
            },
            validate: function(a) {
                var b = this
                    , d = this.validateCreditCardElements(a);
                return this.clearValidationErrorMessages(),
                !0 !== d && c.each(d, function(c, d) {
                    b.attachValidationErrorMessageToInputElement(a[c], d)
                }),
                    d
            }
        })
            , h = Class({
            isActive: !0,
            adyenCsePaymentFormSelector: null,
            publicKey: null,
            validationErrorMessages: null,
            paysWithNewCard: null,
            domElementsProvider: null,
            elements: {
                container: ".adyen-cse-payment-controller-container",
                formValidationErrors: ".adyen-cse-payment-controller-container .errors",
                creditCardChoices: 'input[name="payment_handler_adyen_cse_payment_type[recurring_detail]"]',
                payWithNewCard: ".adyen-cse-payment-pay-with-new-card",
                pay: "#payment_handler_adyen_cse_payment_type_pay",
                expiryDateSelects: ".adyen-encrypted-form-expiry-date-select",
                submitButton: "#shop_checkout_type_place_order_button"
            },
            urls: {
                creditCardResource: "/adyen/customer-recurring-detail"
            },
            __construct: function(a, b, c, d) {
                this.domElementsProvider = a,
                    this.adyenCsePaymentFormSelector = b,
                    this.publicKey = c,
                    this.validationErrorMessages = d
            },
            setActive: function(a) {
                this.isActive = a
            },
            onLoad: function() {
                this.bindAdyenEncryptedForm(),
                    this.bindCreditCardChoice(),
                    this.bindCreditCardNumberVariant(),
                    this.setPayWithNewCard(!1 === this.hasCreditCards()),
                    this.refreshViewState(),
                    this.unblockWhenViewStateRendered()
            },
            unblockWhenViewStateRendered: function() {
                this.domElementsProvider.getElement(this.elements.container).show()
            },
            bindCreditCardChoice: function() {
                var a = this
                    , b = c(a.elements.submitButton);
                this.domElementsProvider.getElement(this.elements.expiryDateSelects).change(function() {
                    a.copyMonthYearToAdyenInputs()
                }),
                    this.domElementsProvider.getElement(this.elements.creditCardChoices).change(function() {
                        var d = c("#cvc_td_" + c(this).attr("id"));
                        d.length && d.html(c("#adyen-payment-oneclick-cvc")),
                            a.setPayWithNewCard(!1),
                            a.refreshViewState(),
                            c(a.elements.creditCardChoices).is(":checked") ? b.removeClass("disabled") : b.addClass("disabled")
                    }),
                    this.domElementsProvider.getElement(this.elements.payWithNewCard).click(function(c) {
                        c.preventDefault(),
                            a.setPayWithNewCard(!a.paysWithNewCard),
                            a.refreshViewState(),
                            a.paysWithNewCard ? b.removeClass("disabled") : b.addClass("disabled")
                    }),
                    this.domElementsProvider.getElement(".adyen-cse-payment-delete-card").click(function(b) {
                        b.preventDefault();
                        var d = c(this).data("recurring-detail-reference");
                        a.removeCreditCard(d),
                            a.refreshViewState()
                    })
            },
            bindCreditCardNumberVariant: function() {
                var a = this
                    , b = a.domElementsProvider.getElement("#adyen-encrypted-form-number")
                    , d = a.domElementsProvider.getElement(".adyen-cse-payment-form-new-card .cart-type-icon");
                b.on("input", function() {
                    var a = b.val()
                        , e = c.payment.cardType(a)
                        , f = d.data("cardType");
                    f !== e && (f && d.removeClass(f).data("cardType", ""),
                    e && d.addClass(e).data("cardType", e))
                })
            },
            bindAdyenEncryptedForm: function() {
                if ("undefined" == typeof adyen)
                    throw new Error("Adyen JavaScript library for Client-side Encryption is not included");
                var a = this
                    , b = this.domElementsProvider.getElement(this.adyenCsePaymentFormSelector)[0]
                    , c = {
                    enableValidations: !1,
                    submitButtonAlwaysEnabled: !0,
                    numberIgnoreNonNumeric: !0,
                    onsubmit: function(b) {
                        a.isActive && a.onFormSubmit(b)
                    }
                };
                adyen.encrypt.createEncryptedForm(b, this.publicKey, c)
            },
            onFormSubmit: function(a) {
                if (this.paysWithNewCard) {
                    var b = {};
                    b[e.HOLDER_NAME] = "#adyen-encrypted-form-holder-name",
                        b[e.CC_NUMBER] = "#adyen-encrypted-form-number",
                        b[e.CVC_NUMBER] = "#adyen-encrypted-form-cvc",
                        b[e.EXPIRY_DATE] = ["#adyen-encrypted-form-expiry-month-select", "#adyen-encrypted-form-expiry-year-select"];
                    var d = this.domElementsProvider.getElement(this.elements.container)
                        , f = new g(this.domElementsProvider,d);
                    f.setValidationErrorMessages(this.validationErrorMessages),
                    !0 !== f.validate(b) && (a.preventDefault(),
                        c.publish("PAYMENT_VALIDATION", [!1]))
                }
            },
            refreshViewState: function() {
                var a = null;
                !1 === this.hasCreditCards() ? (this.setPayWithNewCard(!0),
                    this.domElementsProvider.getElement(".adyen-cse-payment-card-choices").slideUp(),
                    this.domElementsProvider.getElement(this.elements.payWithNewCard).remove()) : this.hasFormValidationErrors() && !this.hasCreditCardChosen() && this.setPayWithNewCard(!0),
                    this.paysWithNewCard ? (a = !0,
                        this.clearCreditCardChoice(),
                        this.setFormDisplayed(!0)) : (a = this.hasCreditCardChosen(),
                        this.setFormDisplayed(!1)),
                    this.domElementsProvider.getElement(this.elements.pay).toggle(a),
                    this.domElementsProvider.clearCache()
            },
            hasFormValidationErrors: function() {
                return 0 < this.domElementsProvider.getElement(this.elements.formValidationErrors).length
            },
            copyMonthYearToAdyenInputs: function() {
                var a = this.domElementsProvider.getElement("#adyen-encrypted-form-expiry-month-select").find(":selected").text()
                    , b = this.domElementsProvider.getElement("#adyen-encrypted-form-expiry-year-select").find(":selected").text();
                this.domElementsProvider.getElement("#adyen-encrypted-form-expiry-month").val(a),
                    this.domElementsProvider.getElement("#adyen-encrypted-form-expiry-year").val(b)
            },
            removeCreditCard: function(a) {
                this.removeCreditCardFromList(a),
                    c.ajax({
                        headers: {
                            "X-HTTP-METHOD-OVERRIDE": "DELETE"
                        },
                        type: "POST",
                        url: this.urls.creditCardResource + "/" + a
                    })
            },
            removeCreditCardFromList: function(a) {
                var b = this.domElementsProvider.getElement(this.elements.creditCardChoices);
                c.each(b, function(b, d) {
                    var e = c(d);
                    if (parseInt(a) === parseInt(e.val()))
                        return e.parents(".adyen-cse-payment-card-choice").remove(),
                            !1
                }),
                    this.domElementsProvider.clearCache()
            },
            hasCreditCardChosen: function() {
                var a = this.domElementsProvider.getElement(this.elements.creditCardChoices).filter(":checked");
                return 0 < a.length
            },
            hasCreditCards: function() {
                var a = this.domElementsProvider.getElement(this.elements.creditCardChoices);
                return 0 < a.length
            },
            isFormVisible: function() {
                return this.domElementsProvider.getElement(".adyen-cse-payment-form-new-card").is(":visible")
            },
            setPayWithNewCard: function(a) {
                this.paysWithNewCard = a
            },
            clearCreditCardChoice: function() {
                this.domElementsProvider.getElement(this.elements.creditCardChoices).prop("checked", !1)
            },
            setFormDisplayed: function(a) {
                var b = this.domElementsProvider.getElement(".adyen-cse-payment-pay-with-new-card-hidden")
                    , c = this.domElementsProvider.getElement(".adyen-cse-payment-pay-with-new-card-shown")
                    , d = this.domElementsProvider.getElement(".adyen-cse-payment-form-new-card")
                    , e = "slow";
                a ? (b.hide(),
                    c.show(),
                    d.slideDown(e)) : (b.show(),
                    c.hide(),
                    d.slideUp(e))
            }
        });
        d.AdyenCsePaymentFormController = Class({
            "extends": d.Base
        }, {
            __name: "AdyenCsePaymentFormController",
            __config: {
                AdyenCsePaymentFormController: {
                    enableConditionallySelector: null,
                    adyenCsePaymentFormSelector: null,
                    publicKey: null,
                    validationErrorMessages: {}
                }
            },
            adyenFormController: null,
            domElementsProvider: null,
            validationTypes: e,
            init: function() {
                this["super"].apply(this, c.merge(["init"], arguments)),
                    this.onLoad()
            },
            onLoad: function() {
                var a = this.getConfig().publicKey
                    , b = this.getConfig().adyenCsePaymentFormSelector
                    , c = this.getConfig().validationErrorMessages;
                this.domElementsProvider = new f,
                    this.adyenFormController = new h(this.domElementsProvider,b,a,c),
                    this.adyenFormController.onLoad(),
                    this.bindPaymentMethodEnablers()
            },
            bindPaymentMethodEnablers: function() {
                if (null !== this.getConfig().enableConditionallySelector) {
                    var a = this
                        , b = this.domElementsProvider.getElement(this.getConfig().enableConditionallySelector);
                    b.on("change", function() {
                        a.setActiveIfPaymentMethodEnabled(c(this))
                    }),
                        b.each(function() {
                            a.setActiveIfPaymentMethodEnabled(c(this))
                        })
                }
            },
            setActiveIfPaymentMethodEnabled: function(a) {
                var b = a.parents(".payment-type")
                    , c = "adyen" === b.data("payment-type-code")
                    , d = a.is(":checked");
                d && !c ? this.adyenFormController.setActive(!1) : c && this.adyenFormController.setActive(d)
            }
        })
    }(window, document, jQuery, _FD),
    function(a, b, c, d) {
        d.AuthController = Class({
            "extends": d.Base,
            uses: [d.AjaxTrait, d.LoadingIndicatorTrait]
        }, {
            __name: "AuthController",
            __config: {
                AuthController: {
                    trigger: ".js-auth-login",
                    loginRegisterContainer: ".js-login-register-flow",
                    loginRegisterContentBlock: ".login-register-content-block",
                    tabPaneActive: ".tab-pane.active",
                    targetPathReviewOrder: ".js-review-order-target-path",
                    forgotPasswordElement: ".login__forgot-password a",
                    changeMobileElement: ".resend-mobile-code__add-mobile a",
                    cookieName: "js-enabled",
                    resendLink: ".resend-mobile-code__link",
                    verifyViaCallLink: ".verify-via-call__link",
                    isCustomerVerificationVoipActivated: null,
                    verificationFailedPath: null,
                    timeToShowResendSms: null,
                    timeToShowIvrPopup: null
                }
            },
            $trigger: null,
            $modal: null,
            $loginRegisterForm: null,
            $resendLink: null,
            $isResendCodeLinkClicked: !1,
            $timeToShowResendSms: null,
            $timeToShowIvrPopup: null,
            init: function() {
                this["super"].apply(this, c.merge(["init"], arguments)),
                this.hasCookie() || this.setCookieJsEnabled(),
                    this.trackReviewOrderPage(),
                    this.$trigger = c(this.getConfig().trigger),
                    this.$loginRegisterForm = c(this.getConfig().loginRegisterContainer).find("form"),
                0 === this.$trigger.length && 0 === this.$loginRegisterForm.length || (this.bindLoginClickEvent(),
                    this.$resendLink = c(this.getConfig().resendLink),
                    this.$timeToShowResendSms = this.getConfig().timeToShowResendSms,
                    this.$timeToShowIvrPopup = this.getConfig().timeToShowIvrPopup,
                    this.handleResendAndVerifyViaCallLinks(),
                    this.trackNotModalPageOnLoad(),
                    this.emptyPasswordField())
            },
            handleResendAndVerifyViaCallLinks: function() {
                if (0 !== this.$resendLink.length) {
                    var a, b = parseInt(this.$timeToShowResendSms, 10) + parseInt(this.$timeToShowIvrPopup, 10), d = c("#mobile_confirmation_mobileConfirmationCode");
                    a = setInterval(c.proxy(function() {
                        c(".verify-me-via-call").length > 0 || c("#add_mobile_mobileNumber").length > 0 ? clearInterval(a) : (b === parseInt(this.$timeToShowResendSms, 10) && (d.length > 0 && !d.is(":disabled") && (this.$resendLink.show(),
                            this.$resendLink.off("click", c.proxy(this.resendMobileCode, this)).on("click", c.proxy(this.resendMobileCode, this))),
                            c(".verify-via-call").show()),
                        --b < 0 && (clearInterval(a),
                            this.$resendLink.remove(),
                            this.$loginRegisterForm.off("click", this.getConfig().verifyViaCallLink, c.proxy(this.loadModal, this)).on("click", this.getConfig().verifyViaCallLink, c.proxy(this.loadModal, this)),
                            c(this.getConfig().verifyViaCallLink).trigger("click")))
                    }, this), 1e3)
                }
            },
            resendMobileCode: function(a) {
                var b, d = c(a.currentTarget);
                a.preventDefault(),
                    this.startElementLoading(this.$loginRegisterForm),
                    this.$isResendCodeLinkClicked = !0,
                    this.ajax({
                        url: d.attr("href"),
                        cache: !1
                    }).done(function(a) {
                        d.remove(),
                            b = '<div class="alert alert-success">' + a.html + "</div>",
                            c(".resend-mobile-code").append(b),
                            this.stopElementLoading(this.$loginRegisterForm)
                    }).fail(function() {
                        this.stopElementLoading(this.$loginRegisterForm)
                    })
            },
            showVerifyViaCallForm: function() {
                var a = c("#mobile_confirmation_mobileConfirmationCode");
                0 !== a.length && a.is(":disabled") && c(this.getConfig().verifyViaCallLink).trigger("click")
            },
            hasCookie: function() {
                return "undefined" != typeof Cookies.get(this.getConfig().cookieName)
            },
            setCookieJsEnabled: function() {
                Cookies.set(this.getConfig().cookieName, 1, {
                    path: "/"
                })
            },
            bindLoginClickEvent: function() {
                this.$trigger.on("click", c.proxy(this.loadModal, this)),
                    this.$loginRegisterForm.on("click", this.getConfig().verifyViaCallLink, c.proxy(this.loadModal, this)),
                    this.$loginRegisterForm.on("submit", c.proxy(this.handleLoginRegisterSubmit, this)),
                    this.$loginRegisterForm.on("click", this.getConfig().forgotPasswordElement, c.proxy(this.handleLoginRegisterSubmit, this)),
                    this.$loginRegisterForm.on("click", this.getConfig().changeMobileElement, c.proxy(this.handleLoginRegisterSubmit, this)),
                    c(this.getConfig().loginRegisterContainer).on("click", ".init-facebook-login", c.proxy(this.trackFacebookLoginClick, this))
            },
            loadModal: function(a) {
                var b = "GET";
                a.preventDefault();
                var d = c(a.currentTarget);
                d.button("loading"),
                null !== this.$modal && this.$modal.remove(),
                d.is(".verify-via-call__link") && (b = "POST"),
                    this.ajax({
                        url: d.attr("href"),
                        cache: !1,
                        type: b
                    }).done(function(a) {
                        this.$modal = c(a.html),
                            c("body").append(this.$modal.modal("show")),
                            this.$modal.find(".modal-content").find(this.getConfig().targetPathReviewOrder).remove(),
                            this.$modal.find(".modal-content").find(".auth__errors").hide(),
                            this.$modal.on("click", ".init-facebook-login", c.proxy(this.trackFacebookLoginClick, this)),
                            this.emptyPasswordField(),
                            this.trackModalPageOnLoad()
                    }).done(this.bindAuthModalContent).always(function() {
                        d.button("reset")
                    })
            },
            bindAuthModalContent: function() {
                this.$modal.find("form").on("submit", c.proxy(this.handleModalAjaxEvent, this)).end().find(".modal-body").on("click", "a:not(.js-modal-ignore)", c.proxy(this.handleModalAjaxEvent, this)),
                    this.$modal.find(".modal-body").on("click", ".no-call", c.proxy(function() {
                        this.$modal.modal("hide")
                    }, this))
            },
            handleModalAjaxEvent: function(a) {
                var b = c(a.currentTarget);
                if ("submit" === a.type && !this.validateLoginFormSubmit())
                    return !1;
                if ("_blank" === b.attr("target"))
                    return !0;
                a.preventDefault(),
                    this.$modal.find(".verify-me-via-call__form").hide(),
                    this.$modal.find(".verify-me-via-call__wait-for-call").show();
                var d = {}
                    , e = this.$modal.find(".modal-content");
                "click" === a.type ? d = {
                    url: b.attr("href")
                } : (d = {
                    url: b.attr("action"),
                    data: b.serialize(),
                    type: b.attr("method")
                },
                    this.trackModalFormSubmit(a)),
                    this.startElementLoading(e);
                var f = this.ajax(d);
                f.done(function(a) {
                    this.$modal.find(".modal-content").replaceWith(c(a.html).find(".modal-content")),
                        this.$modal.find(".modal-content").find(this.getConfig().targetPathReviewOrder).remove(),
                    0 === this.$modal.find(".try-again").length && this.checkCustomerVerificationStatus(a.message),
                        this.$modal.off("click", ".init-facebook-login", c.proxy(this.trackFacebookLoginClick, this)).on("click", ".init-facebook-login", c.proxy(this.trackFacebookLoginClick, this)),
                        this.emptyPasswordField(),
                        this.trackModalPageOnLoad(),
                        this.trackModalFormSubmitResponse(c(".content-block"))
                }),
                    f.done(this.bindAuthModalContent),
                    f.fail(function() {
                        this.stopElementLoading(e)
                    })
            },
            validateLoginFormSubmit: function() {
                var a = c("#customer_login_email")
                    , b = c(".auth__errors-email").text()
                    , d = c("#customer_login_password")
                    , e = c(".auth__errors-password").text()
                    , f = !0;
                return a.length > 0 && "" === a.val() && (this.showPopover(a, b),
                    f = !1),
                d.length > 0 && "" === d.val() && (this.showPopover(d, e),
                    f = !1),
                    f
            },
            showPopover: function(b, c) {
                b.popover({
                    title: "",
                    content: c,
                    trigger: "manual",
                    placement: "top",
                    show: !0
                }),
                    b.popover("show"),
                    a.setTimeout(function() {
                        b.popover("destroy")
                    }, 4e3)
            },
            checkCustomerVerificationStatus: function(b) {
                var d, e = this.$modal.find(".verify-me-via-call__form"), f = this.$modal.find(".verify-me-via-call__wait-for-call"), g = this.$modal.find(".verify-me-via-call__verification-complete"), h = 6, i = 1e4, j = 2e3, k = this;
                this.getConfig().isCustomerVerificationVoipActivated || (h = 60,
                    i = 3e4),
                    e.hide(),
                    f.show(),
                f.length > 0 && (d = setInterval(function() {
                    c.ajax({
                        type: "POST",
                        url: b,
                        cache: !1,
                        dataType: "json",
                        success: function(b) {
                            var c = b.html;
                            (f.is(":visible") === !1 || --h < 0) && clearInterval(d),
                            "true" === c && (clearInterval(d),
                                f.hide(),
                                g.show(),
                            "" !== b.to && setTimeout(function() {
                                a.location.href = b.to
                            }, j)),
                            h < 0 && k.showVerificationFailedForm()
                        }
                    })
                }, i))
            },
            showVerificationFailedForm: function() {
                var a = this.$modal.find(".modal-content");
                this.startElementLoading(a),
                    c.ajax({
                        url: this.getConfig().verificationFailedPath,
                        cache: !1,
                        dataType: "json",
                        success: c.proxy(function(b) {
                            this.$modal.find(".modal-content").replaceWith(c(b.html).find(".modal-content")),
                                this.stopElementLoading(a),
                                this.bindAuthModalContent()
                        }, this)
                    })
            },
            handleLoginRegisterSubmit: function(a) {
                var b, d, e, f, g = c(a.currentTarget);
                return b = g.parents().find(this.getConfig().tabPaneActive),
                !("submit" === a.type && b.is("#login") && !this.validateLoginFormSubmit()) && void (g.is(".resend-mobile-code__link") || g.find("#reset_password_reset").length > 0 || g.is(".verify-via-call__link") || (a.preventDefault(),
                    this.trackNotModalFormSubmit(a),
                    b.length > 0 ? (e = b,
                    g.parent().hasClass("login__forgot-password") && (e = c(this.getConfig().loginRegisterContainer))) : (d = g.parents().find(this.getConfig().loginRegisterContentBlock),
                    d.length > 0 && (e = d)),
                    f = this.getConfig().loginRegisterContentBlock,
                    this.handleLoginRegisterAjaxRequest(e, f, a)))
            },
            handleLoginRegisterAjaxRequest: function(a, b, d) {
                var e, f, g = {};
                return "click" === d.type ? g = {
                    url: c(d.currentTarget).attr("href"),
                    cache: !1
                } : (e = a.find("form"),
                    g = {
                        url: e.attr("action"),
                        data: e.serialize(),
                        type: e.attr("method"),
                        cache: !1
                    }),
                    this.startElementLoading(a),
                    f = this.ajax(g),
                    f.done(function(d) {
                        "" !== d.html && (a.is(b) ? a.replaceWith(c(d.html).find(b)) : a.html(c(d.html).find(b))),
                            c(".flash-messages").hide(),
                            c(".alert-danger, .alert-success").remove(),
                            c(".modal").remove(),
                            this.bindSubmitAndClickEventAfterAjaxResponse(),
                            this.showVerifyViaCallForm(),
                            this.stopElementLoading(a),
                            this.emptyPasswordField(),
                            this.trackNotModalFormSubmitResponse(c(d.html))
                    }),
                    f.fail(function() {
                        this.stopElementLoading(a)
                    }),
                    !1
            },
            bindSubmitAndClickEventAfterAjaxResponse: function() {
                c(this.getConfig().loginRegisterContainer).off("click", this.getConfig().forgotPasswordElement, c.proxy(this.handleLoginRegisterSubmit, this)).on("click", this.getConfig().forgotPasswordElement, c.proxy(this.handleLoginRegisterSubmit, this)),
                    c(this.getConfig().loginRegisterContainer).off("click", this.getConfig().changeMobileElement, c.proxy(this.handleLoginRegisterSubmit, this)).on("click", this.getConfig().changeMobileElement, c.proxy(this.handleLoginRegisterSubmit, this)),
                    c(this.getConfig().loginRegisterContainer).find("form").off("submit", c.proxy(this.handleLoginRegisterSubmit, this)).on("submit", c.proxy(this.handleLoginRegisterSubmit, this)),
                    c(this.getConfig().loginRegisterContainer).off("click", this.getConfig().verifyViaCallLink, c.proxy(this.loadModal, this)).on("click", this.getConfig().verifyViaCallLink, c.proxy(this.loadModal, this))
            },
            emptyPasswordField: function() {
                c(b).ready(function() {
                    var a = c("#customer_login_password");
                    if (a.length > 0) {
                        var b = setInterval(function() {
                            (a.val().length >= 4 || a.is(":focus")) && (a.val(""),
                                clearInterval(b))
                        }, 10);
                        setTimeout(function() {
                            clearInterval(b)
                        }, 2e3)
                    }
                })
            },
            trackModalPageOnLoad: function() {
                if ("undefined" != typeof this.$modal) {
                    var b = this.$modal.find(".alert")
                        , c = this.$modal.find(".errors");
                    if (0 === b.length && 0 === c.length) {
                        var d, e = this.$modal.find("form"), f = {};
                        "object" == typeof a.dataLayer && (e.is(".login") ? d = "logIn" : e.is(".sign-up") ? d = "signUp" : e.is(".forgot-password__form") && (d = "recoverAccount"),
                        d && (f.event = "user_account",
                            f.user_account = d,
                            f.user_account_flow = "pop-up",
                            a.dataLayer.push(f)))
                    }
                }
            },
            trackModalFormSubmit: function(a) {
                this.trackNotModalFormSubmit(a)
            },
            trackModalFormSubmitResponse: function(a) {
                this.trackNotModalFormSubmitResponse(a)
            },
            trackNotModalPageOnLoad: function() {
                if ("undefined" != typeof a.dataLayer) {
                    var b, d = c(".content-block").find("form").filter(":visible"), e = d.find(".errors"), f = {};
                    d.is(".login") ? b = "logIn" : d.is(".reset-password__form") ? e.length > 0 ? (delete f.user_account_flow,
                        f.event = "validation_error",
                        f.error_message = e.find("li").filter(":first").text(),
                        a.dataLayer.push(f)) : b = "setPassword" : d.is(".add-mobile__form") ? b = "enterMobile" : d.is(".verify-mobile") && (b = "verifyMobile"),
                    b && (f.event = "user_account",
                        f.user_account = b,
                        f.user_account_flow = this.$trigger.length > 0 ? "pop-up" : "page",
                        a.dataLayer.push(f))
                }
            },
            trackNotModalFormSubmit: function(b) {
                if ("undefined" != typeof a.dataLayer) {
                    var d, e, f = c(b.currentTarget), g = {};
                    "click" === b.type ? f.parent().is(".login__forgot-password") && (g.event = "user_account",
                        g.user_account = "recoverAccount",
                        g.user_account_flow = "page",
                        a.dataLayer.push(g)) : (f.is(".login") ? (d = "logIn_attempt",
                        e = "logIn") : f.is(".sign-up") ? (d = "signUp_attempt",
                        e = "signUp") : f.is(".forgot-password__form") && (d = "request_link",
                        e = !0),
                    d && e && (g.event = d,
                        g[d] = e,
                        a.dataLayer.push(g)))
                }
            },
            trackNotModalFormSubmitResponse: function(b) {
                if ("undefined" != typeof a.dataLayer) {
                    var d, e, f, g = {}, h = b.find(".alert"), i = b.find("form"), j = b.find(".errors");
                    h.length > 0 || j.length > 0 ? (g.event = "validation_error",
                        i.is(".login") ? (d = "logIn_attempt",
                            e = "logIn",
                            f = "logIn fail",
                            g[d] = e) : i.is(".sign-up") ? (d = "signUp_attempt",
                            e = "signUp",
                            f = "signUp fail",
                            g[d] = e) : (i.is(".forgot-password__form") || i.is(".add-mobile__form") || i.is(".verify-mobile")) && (f = j.find("li").filter(":first").text()),
                        g.error_message = f,
                        a.dataLayer.push(g)) : i.is(".verify-mobile") && (g.event = "user_account",
                        g.user_account = "verifyMobile",
                        g.user_account_flow = c(this.getConfig().loginRegisterContainer).length > 0 ? "page" : "pop-up",
                        a.dataLayer.push(g))
                }
            },
            trackFacebookLoginClick: function(b) {
                if ("undefined" != typeof a.dataLayer) {
                    b.preventDefault();
                    var d, e = {};
                    d = c(".modal").find(".login-tabs__login").is(".active") || "login" === c(".tab-content").find(".tab-pane.active").attr("id") ? "logIn_attempt" : "signUp-attempt",
                        e.event = d,
                        e[d] = "facebook",
                        a.dataLayer.push(e),
                        a.location.href = c(b.currentTarget).attr("href")
                }
            },
            trackResendCodeClick: function() {
                "undefined" == typeof a.dataLayer && this.$isResendCodeLinkClicked || a.dataLayer.push({
                    event: "resend_code",
                    resend_code: !0
                })
            },
            trackReviewOrderPage: function() {
                var b = c(".checkout-review");
                if (0 !== b.length && "undefined" != typeof a.dataLayer) {
                    var d = {};
                    d.event = "user_account",
                        d.user_account = "reviewOrder",
                        d.user_account_flow = c(".checkout-review-back-to-restaurant").length > 0 ? "pop-up" : "page",
                        a.dataLayer.push(d)
                }
            }
        })
    }(window, document, jQuery, _FD),
    function(a, b, c, d) {
        d.BlockChoiceController = Class({
            "extends": d.Base
        }, {
            __name: "BlockChoiceController",
            __config: {
                BlockChoiceController: {
                    container: ".block-choices",
                    choice: ".block-choice",
                    extra: ".block-choice-extras",
                    extras: ".block-choices-extras",
                    input: "input.block-choice-input"
                }
            },
            init: function() {
                this["super"].apply(this, c.merge(["init"], arguments))
            },
            checkPreselectedGroupChoice: function() {
                var a = this.getGroupChoices()
                    , b = this.getGroupChoiceInputs(a).filter(":checked");
                b.length > 0 && b.trigger("change")
            },
            initGroupChoices: function() {
                var a = this.getGroupChoiceContainer();
                a.each(c.proxy(function(a, b) {
                    var d = c(b)
                        , e = this.getGroupChoiceExtrasContainers(d)
                        , f = this.getGroupChoices(d);
                    f.each(c.proxy(function(a, b) {
                        var d = c(b)
                            , f = d.next(this.getConfig().extra)
                            , g = this.getGroupChoiceInputs(d)
                            , h = g.val();
                        f.data("groupChoiceValue", h),
                            f.detach().appendTo(e),
                            g.on("change", c.proxy(function() {
                                this.selectGroupChoice(d, f)
                            }, this))
                    }, this))
                }, this)),
                    this.hideGroupChoiceExtras()
            },
            hideGroupChoiceExtras: function() {
                this.getGroupChoiceExtras().hide()
            },
            selectGroupChoice: function(a, b) {
                this.hideGroupChoiceExtras(),
                    this.getGroupChoices().removeClass("active"),
                    a.addClass("active"),
                void 0 !== b.html() && "" !== b.html().trim() && b.show()
            },
            getGroupChoiceContainer: function(a) {
                return "undefined" == typeof a && (a = c("body")),
                    a.find(this.getConfig().container)
            },
            getGroupChoices: function(a) {
                return "undefined" == typeof a && (a = this.getGroupChoiceContainer()),
                    a.find(this.getConfig().choice)
            },
            getGroupChoiceInputs: function(a) {
                return "undefined" == typeof a && (a = this.getGroupChoiceContainer()),
                    a.find(this.getConfig().input)
            },
            getGroupChoiceExtras: function(a) {
                return "undefined" == typeof a && (a = this.getGroupChoiceContainer()),
                    a.find(this.getConfig().extra)
            },
            getGroupChoiceExtrasContainers: function(a) {
                return "undefined" == typeof a && (a = this.getGroupChoiceContainer()),
                    a.find(this.getConfig().extras)
            }
        })
    }(window, document, jQuery, _FD),
    function(a, b, c, d) {
        d.CartController = Class({
            "extends": d.Base,
            uses: [d.AjaxTrait, d.LoadingIndicatorTrait]
        }, {
            __name: "CartController",
            __config: {
                CartController: {
                    container: ".cart-container",
                    minimalCartElement: ".cart__minimal",
                    minimalCartAmountElement: ".cart__minimal__amount",
                    superminimalCartElement: ".cart__superminimal",
                    superminimalCartClass: "cart__superminimal",
                    cartElement: ".cart",
                    loadingElement: ".cart__inner",
                    productsElement: ".cart__products",
                    closeCartElement: ".header-mobile__your-basket .icon",
                    cartRefreshUrl: "",
                    quantityElements: ".product__amount-controls a.product__quantity__amount-control, a.product__price__remove-product",
                    quantityControlsToggle: ".product__quantity__wrapper",
                    showPopupIfMinimumOrderAmountIsNotReached: null,
                    checkoutButton: ".js-checkout-btn",
                    showMinimumOrderAmountNotReachedModal: ".minimum-order-amount-difference-modal",
                    dataIsMinimumOrderValueReached: "is-minimum-order-value-reached",
                    dataCustomerHasValidLocation: "customer-has-valid-location",
                    dataCountProducts: "count-products",
                    editBasketElement: ".header-mobile__edit-your-basket"
                }
            },
            $body: c("body"),
            $cart: null,
            $container: null,
            viewportHeight: 0,
            isSuperMinimalCartEnabled: null,
            init: function() {
                this["super"].apply(this, c.merge(["init"], arguments)),
                    c.subscribe("CART_PRODUCT_ADDED", c.proxy(this.refreshCart, this)),
                    c.subscribe("CART_REFRESH", c.proxy(this.refreshCart, this)),
                    c.subscribe("CART_LOADING_START", c.proxy(this.showLoadingIndicator, this)),
                    c.subscribe("CART_LOADING_END", c.proxy(this.hideLoadingIndicator, this)),
                    c.subscribe("CART_LOADING_END", c.proxy(this.initQuantityControlsVisibilityToggle, this)),
                    this.$container = c(this.getConfig().container),
                    this.$cart = c(this.getConfig().cartElement),
                    this.viewportHeight = this.getViewportHeight(),
                    this.initQuantityChange(),
                    this.refreshScrollableContents(),
                    this.initMinimalCart(),
                    this.initCheckoutButton(),
                    c("body").on("click", c.proxy(this.hideLoadingIndicatorToppingChoice, this)),
                    c(a).resize(c.proxy(this.refreshScrollableContents, this)),
                    c.subscribe("STICKY_ELEMENTS_REFRESHED", c.proxy(this.checkViewportHeightChange, this)),
                    this.initQuantityControlsVisibilityToggle(),
                    this.initAmountControlsVisibilityToggle()
            },
            initAmountControlsVisibilityToggle: function() {
                this.$container.on("click", this.getConfig().editBasketElement, c.proxy(this.toggleAmountControlsVisibility, this))
            },
            toggleAmountControlsVisibility: function() {
                this.$cart.toggleClass("with-controls")
            },
            initQuantityControlsVisibilityToggle: function() {
                this.$container.on("click", this.getConfig().quantityControlsToggle, c.proxy(this.toggleControlsVisibility, this))
            },
            toggleControlsVisibility: function(a) {
                c(a.target).parents("td").toggleClass("active")
            },
            initMinimalCart: function() {
                this.$container.on("click", this.getConfig().minimalCartElement, c.proxy(this.toggleMinimalCart, this)),
                    this.$container.on("click", this.getConfig().closeCartElement, c.proxy(this.hideMinimalCart, this)),
                    this.refreshMinimalCart()
            },
            checkIfSuperMinimalCartisEnabled: function() {
                this.isSuperMinimalCartEnabled = c(this.getConfig().superminimalCartElement).length > 0
            },
            refreshMinimalCart: function() {
                0 === this.getProductCount() ? (this.$body.removeClass("has-cart"),
                    this.hideMinimalCart(),
                    this.$container.addClass("out")) : this.$body.hasClass("has-cart") || (this.$container.removeClass("out"),
                    this.$body.addClass("has-cart"))
            },
            toggleMinimalCart: function(a) {
                c(a.target).is(this.getConfig().checkoutButton) || (a.preventDefault(),
                    this.$container.hasClass("open") ? this.hideMinimalCart() : this.showMinimalCart())
            },
            hideMinimalCart: function() {
                c(".header-mobile-container__cart").animate({
                    marginTop: this.viewportHeight
                }, 400, c.proxy(function() {
                    c(".header-mobile-container__cart").css({
                        marginTop: "auto"
                    })
                }, this)),
                    c(this.getConfig().loadingElement).animate({
                        marginTop: this.viewportHeight
                    }, 400, c.proxy(function() {
                        this.$container.removeClass("open"),
                            this.$body.removeClass("modal-open"),
                            c(this.getConfig().loadingElement).css({
                                marginTop: "auto"
                            }),
                            c(this.getConfig().minimalCartElement).removeClass("active")
                    }, this)),
                this.isSuperMinimalCartEnabled && c(this.getConfig().superminimalCartElement).animate({
                    marginBottom: -this.viewportHeight
                }, 400, c.proxy(function() {
                    c(this.getConfig().superminimalCartElement).css({
                        marginBottom: "auto"
                    })
                }, this))
            },
            showMinimalCart: function() {
                this.checkIfSuperMinimalCartisEnabled(),
                    this.$container.addClass("open"),
                    this.$body.addClass("modal-open"),
                    c(this.getConfig().loadingElement).scrollTop(0).addClass("opening").css({
                        marginTop: this.viewportHeight
                    }).animate({
                        marginTop: 0
                    }, 400, c.proxy(function() {
                        c(this.getConfig().minimalCartElement).addClass("active"),
                            c(this.getConfig().loadingElement).removeClass("opening")
                    }, this))
            },
            getProductCount: function() {
                var a = this.$container.find(this.getConfig().checkoutButton).filter("[data-" + this.getConfig().dataCountProducts + "]").data(this.getConfig().dataCountProducts);
                return parseInt(a, 10)
            },
            isMinimumOrderAmountReached: function() {
                return !!this.$container.find(this.getConfig().checkoutButton).filter("[data-" + this.getConfig().dataIsMinimumOrderValueReached + "]").data(this.getConfig().dataIsMinimumOrderValueReached)
            },
            customerHasValidLocation: function() {
                return !!this.$container.find(this.getConfig().checkoutButton).filter("[data-" + this.getConfig().dataCustomerHasValidLocation + "]").data(this.getConfig().dataCustomerHasValidLocation)
            },
            initCheckoutButton: function() {
                this.$container.on("click", this.getConfig().checkoutButton, c.proxy(this.validateCheckout, this))
            },
            validateCheckout: function(a) {
                this.getConfig().showPopupIfMinimumOrderAmountIsNotReached && !this.isMinimumOrderAmountReached() && (a.preventDefault(),
                    this.showMinimumOrderAmountNotReachedModal()),
                this.isMinimumOrderAmountReached() || (a.preventDefault(),
                    this.showMinimumOrderAmountNotReachedMessage()),
                this.customerHasValidLocation() || (a.preventDefault(),
                    c.publish("ADD_TO_CART_WITHOUT_VALID_LOCATION_ATTEMPT"))
            },
            initQuantityChange: function() {
                this.$container.on("click", this.getConfig().quantityElements, c.proxy(this.bindQuantityChange, this))
            },
            bindQuantityChange: function(a) {
                a.preventDefault(),
                    this.showLoadingIndicator(),
                    this.ajax({
                        url: c(a.currentTarget).attr("href"),
                        cache: !1
                    }).always(this.refreshCart)
            },
            refreshCart: function() {
                this.showLoadingIndicator(),
                    this.checkIfSuperMinimalCartisEnabled(),
                    this.ajax({
                        url: this.getConfig().cartRefreshUrl,
                        cache: !1
                    }).done(function(b) {
                        var d = c(b.html);
                        if (this.isSuperMinimalCartEnabled) {
                            var e = d.find(this.getConfig().minimalCartElement);
                            e.addClass(this.getConfig().superminimalCartClass),
                            this.$container.hasClass("open") && e.addClass("active")
                        }
                        this.$cart.html(d.find(this.getConfig().cartElement).html()),
                        b.is_pickup_order && c(".pickup-available-in-wrapper").html(b.pickup_available_in_text),
                            c(this.getConfig().minimalCartAmountElement).addClass("active"),
                            a.setTimeout(c.proxy(function() {
                                c(this.getConfig().minimalCartAmountElement).removeClass("active")
                            }, this), 750),
                            c.publish("CART_REFRESHED")
                    }).fail(function() {
                        a.location.reload(!0)
                    }).always(this.hideLoadingIndicator).always(this.refreshScrollableContents).always(this.refreshMinimalCart).always(this.bindTooltipExpressDeliveryCartHasProduct)
            },
            bindTooltipExpressDeliveryCartHasProduct: function() {
                var a = c(".js-tooltip-container")
                    , b = c(".cart__inner .js-tooltip-trigger");
                0 !== b.length && b.popover({
                    placement: "bottom",
                    trigger: "hover focus",
                    container: a
                })
            },
            showLoadingIndicator: function() {
                this.startElementLoading(c(this.getConfig().loadingElement))
            },
            hideLoadingIndicator: function() {
                this.stopElementLoading(c(this.getConfig().loadingElement))
            },
            hideLoadingIndicatorToppingChoice: function() {
                c(".modal-body").length > 0 && this.stopElementLoading(c(this.getConfig().loadingElement))
            },
            checkViewportHeightChange: function() {
                var a = this.getViewportHeight();
                this.viewportHeight !== a && (this.viewportHeight = a,
                    this.refreshScrollableContents())
            },
            refreshScrollableContents: function() {
                var a, b, d, e, f = this.$cart.find(this.getConfig().productsElement);
                f.removeClass("cart__products--scroll").css("max-height", "none"),
                    a = this.$cart.outerHeight() + 40,
                    b = this.getViewportHeight(),
                    d = f.outerHeight(),
                    e = a - d,
                a > b && b - e > 100 && f.addClass("cart__products--scroll").css("max-height", b - e),
                    c.publish("STICKY_REFRESH")
            },
            getViewportHeight: function() {
                return Math.floor(c(a).outerHeight() - this.getTopStickySpacing())
            },
            showMinimumOrderAmountNotReachedModal: function() {
                this.$body.children(this.getConfig().showMinimumOrderAmountNotReachedModal).remove(),
                    this.$modal = c(this.getConfig().showMinimumOrderAmountNotReachedModal).clone(),
                    this.$body.append(this.$modal),
                    this.$modal.modal("show")
            },
            showMinimumOrderAmountNotReachedMessage: function() {
                if (c(this.getConfig().minimalCartElement).is(":visible")) {
                    var b = c(this.getConfig().minimalCartElement).find(".cart__message");
                    b.length > 0 && (b.slideDown(),
                        a.setTimeout(function() {
                            b.slideUp()
                        }, 5e3))
                }
            },
            getTopStickySpacing: function() {
                var a = c(".location-search-ajax-container")
                    , b = 0;
                return "fixed" === a.css("position") && (b = a.height()),
                    b
            }
        })
    }(window, document, jQuery, _FD),
    function(a, b, c, d) {
        d.ChangeLocationLinkController = Class({
            "extends": d.Base,
            uses: [d.AjaxTrait, d.LoadingIndicatorTrait]
        }, {
            __name: "ChangeLocationLinkController",
            __config: {
                ChangeLocationLinkController: {
                    locationHeaderElement: '.vendors-heading-container .location-header[data-has-valid-location="true"],.vendors-heading-container .location-address-container',
                    linkElement: ".js-change-location-link",
                    linkElementVendorDetail: ".js-change-location-link-vendor-detail",
                    appendTo: ".js-change-location-box-add-target",
                    appendToVendorDetail: ".vendor-detail-location-search",
                    closeButton: ".js-close-change-location",
                    classNameToLoadOnlyOne: ".js-change-location-ajax-box-loaded",
                    vendorDetailDeliveryMessage: ".js-vendor-detail-delivery-message",
                    loadingContainer: ".location-search-ajax-container"
                }
            },
            $locationHeaderElement: null,
            $linkElement: null,
            $linkElementVendorDetail: null,
            $appendTo: null,
            $appendToVendorDetail: null,
            $closeButton: null,
            linkClicked: !1,
            isLoading: !1,
            init: function() {
                this["super"].apply(this, c.merge(["init"], arguments)),
                    c.subscribe("CHANGE_LOCATION_LINK_CONTROLLER_INIT", c.proxy(this.run, this)),
                    this.run()
            },
            run: function() {
                this.$locationHeaderElement = c(this.getConfig().locationHeaderElement),
                    this.$linkElement = c(this.getConfig().linkElement),
                    this.$linkElementVendorDetail = c(this.getConfig().linkElementVendorDetail),
                    this.$appendTo = c(this.getConfig().appendTo),
                    this.$appendToVendorDetail = c(this.getConfig().appendToVendorDetail),
                    this.$closeButton = c(this.getConfig().closeButton),
                this.$closeButton.length && this.$linkElementVendorDetail.length && this.$linkElementVendorDetail.hide(),
                    this.bindLocationLinkClick()
            },
            bindLocationLinkClick: function() {
                this.$linkElement.click(c.proxy(this.handleLocationLinkClick, this)),
                    this.$locationHeaderElement.click(c.proxy(this.handleLocationLinkClick, this)),
                    this.$closeButton.click(c.proxy(this.closeChangeLocationBox, this))
            },
            handleLocationLinkClick: function(a) {
                a.preventDefault();
                var b = c(a.currentTarget);
                if ((!b.hasClass("location-header") || !this.$linkElement.is(":visible") && !this.$linkElementVendorDetail.is(":visible")) && this.isLoading !== !0) {
                    this.isLoading = !0;
                    var d, e = b.attr("data-href-vendor") || !1, f = this.$appendTo.find(this.getConfig().loadingContainer);
                    0 === f.length && (f = this.$linkElement),
                        this.startElementLoading(f),
                        d = e || this.getConfig().fromElementUrlForVendorListPage,
                        this.ajax({
                            url: d,
                            cache: !1
                        }).done(function(a) {
                            c(".vendors-heading-container").hide(),
                                this.$appendTo.html(c(a.html).show()),
                                this.$closeButton = c(this.getConfig().closeButton),
                                this.$linkElementVendorDetail = c(this.getConfig().linkElementVendorDetail),
                            this.$closeButton.length && this.$linkElementVendorDetail.length && this.$linkElementVendorDetail.hide(),
                            this.$linkElementVendorDetail.length && c(".fixed-for-modal").size() && c("html, body").animate({
                                scrollTop: 0
                            }),
                                c(".overlay-before-ready").removeClass("overlay-before-ready"),
                                c.publish("STICKY_REFRESH"),
                                c.publish("CHANGE_LOCATION_NOPOPUP_LOADED", [{
                                    $targetDomElement: this.$appendTo
                                }]),
                                c.publish("CHANGE_LOCATION_LINK_CONTROLLER_INIT")
                        }).always(c.proxy(function() {
                            this.isLoading = !1,
                                this.stopElementLoading(f)
                        }, this))
                }
            },
            closeChangeLocationBox: function(a) {
                a.preventDefault(),
                    c(".vendors-heading-container").show(),
                    0 === this.$appendToVendorDetail.length ? this.$appendTo.html("") : (this.$appendToVendorDetail.html(""),
                        this.$closeButton.hide(),
                        this.$linkElementVendorDetail.show()),
                    c.publish("STICKY_REFRESH")
            }
        })
    }(window, document, jQuery, _FD),
    function(a, b, c, d) {
        d.CheckoutController = Class({
            "extends": d.Base,
            uses: [d.AjaxTrait, d.LoadingIndicatorTrait]
        }, {
            __name: "CheckoutController",
            __config: {
                CheckoutController: {
                    orderTimeType: {
                        preorderDateSelector: "#shop_order_cart_type_orderTime_preorderDate",
                        preorderTimeSelector: "#shop_order_cart_type_orderTime_preorderTime",
                        preorderDays: [],
                        deliveryTimeEstimationDescription: "#delivery-time-estimation-description",
                        pickupTimeEstimationDescription: "#pickup-time-estimation-description",
                        deliveryTimeTitle: "#delivery-time-title",
                        pickupTimeTitle: "#pickup-time-title",
                        preorderTypeSelector: 'input[name="shop_order_cart_type[deliveryTimeMode]"]',
                        preorderTimeChecked: 'input[name="shop_order_cart_type[deliveryTimeMode]"][value="preorder"]:checked',
                        preorderTypeCheckedSelector: 'input[name="shop_order_cart_type[deliveryTimeMode]"]:checked',
                        preorderDatetimeSelector: ".js-preorder-datetime-selector",
                        preorderDetailsContainer: ".js-preorder-details-container"
                    },
                    expeditionType: {
                        updateExpeditionTypeUrl: "",
                        expeditionTypeSelector: 'input[name="shop_order_cart_type[expeditionType]"]',
                        pickupLocationChecked: 'input[name="shop_order_cart_type[expeditionType]"][value="pickup"]:checked',
                        expeditionTypeChecked: 'input[name="shop_order_cart_type[expeditionType]"]:checked',
                        expeditionTypeDelivery: ".review-delivery-information.delivery",
                        expeditionTypeExpressDelivery: ".review-delivery-information.express-delivery",
                        submitTrigger: ".checkout-review-delivery button",
                        container: ".checkout-review",
                        reviewForm: "form",
                        orderContainer: ".checkout-review-order",
                        reviewContainer: ".checkout-review-delivery",
                        reviewOrderContainer: ".checkout-review",
                        pickupDetailsContainer: ".js-pickup-location-details-container",
                        pickupLocationSelector: ".js-pickup-location-selector",
                        deliveryTimeModeNowContainer: "#delivery-time-mode-now-container",
                        expeditionTypeUpdateButton: "#shop_order_cart_type_update_expedition_type",
                        emptyCart: ".checkout-review-order-empty-cart",
                        checkoutButton: "#shop_order_cart_type_checkout_primary_button",
                        clearButton: "#shop_order_cart_type_voucher_clear_button"
                    },
                    invoice: {
                        input: 'input[name="shop_checkout_type[useInvoice]"]',
                        container: ".checkout-invoice"
                    },
                    voucher: {
                        input: ".input-voucher",
                        button: ".btn-voucher",
                        container: ".checkout-review",
                        clearButton: ".btn-voucher-clear"
                    },
                    checkout: {
                        form: "form.payment-form",
                        customerPhone: 'input[name="shop_checkout_type[orderMetaData][customer][mobileNumber]"]',
                        expressDeliveryAvailability: null,
                        vendorExpressDeliveryCheckPath: null
                    },
                    cart: {
                        container: ".cart-container",
                        cartTotal: ".total .total-price",
                        orderTotal: ".checkout-form-totals-body .total"
                    }
                }
            },
            $modal: null,
            $walletAlertModal: null,
            isLastPaymentEligibleForWallet: !0,
            $isContinueCheckoutButtonClicked: !1,
            init: function() {
                this["super"].apply(this, c.merge(["init"], arguments)),
                    this.initOrderTimeType(),
                    this.initInvoice(),
                    this.initReviewExpedition(),
                    this.voucherSubmitButton(),
                    this.voucherClearButton(),
                    this.initPreorderTypeSelector(),
                    this.initCheckoutForm(),
                    this.updateTotalOnCartRefresh(),
                    this.validateDateBeforeSubmit(),
                    c.subscribe("PAYMENT_VALIDATION", c.proxy(this.paymentValidation, this)),
                    c.subscribe("CHECKOUT_PAYMENT_TYPE_SELECTED", c.proxy(this.onPaymentTypeChangesWalletAlert, this))
            },
            initPreorderTypeSelector: function() {
                0 === c(this.getConfig().orderTimeType.preorderTimeChecked).length && this.disablePreorderDetailsContainer(),
                    c(this.getConfig().orderTimeType.preorderTypeSelector).on("change", c.proxy(this.preorderTypeSelectorChange, this)),
                    c(this.getConfig().orderTimeType.preorderTypeSelector).on("change", c.proxy(this.refreshDeliveryType, this)),
                    this.preorderTypeSelectorChange()
            },
            preorderTypeSelectorChange: function() {
                c(this.getConfig().orderTimeType.preorderTimeChecked).length > 0 ? (this.enablePreorderDetailsContainer(),
                    this.disableExpressDelivery()) : (this.disablePreorderDetailsContainer(),
                    this.enableExpressDelivery())
            },
            enablePreorderDetailsContainer: function() {
                var a = c(this.getConfig().orderTimeType.preorderDetailsContainer);
                a.find(this.getConfig().orderTimeType.preorderDatetimeSelector).attr("disabled", !1),
                    a.show()
            },
            disablePreorderDetailsContainer: function() {
                c(this.getConfig().orderTimeType.preorderDetailsContainer).hide().find(this.getConfig().orderTimeType.preorderDatetimeSelector).attr("disabled", "disabled")
            },
            enableExpressDelivery: function() {
                c(this.getConfig().expeditionType.expeditionTypeExpressDelivery).length > 0 && (c(this.getConfig().expeditionType.expeditionTypeExpressDelivery).show(),
                    c(this.getConfig().expeditionType.expeditionTypeDelivery).hide())
            },
            disableExpressDelivery: function() {
                c(this.getConfig().expeditionType.expeditionTypeExpressDelivery).length > 0 && (c(this.getConfig().expeditionType.expeditionTypeExpressDelivery).hide(),
                    c(this.getConfig().expeditionType.expeditionTypeDelivery).show())
            },
            voucherSubmitButton: function() {
                c(this.getConfig().voucher.container).on("input", this.getConfig().voucher.input, c.proxy(this.voucherButtonToggle, this)),
                    this.voucherButtonToggle()
            },
            voucherButtonToggle: function() {
                var a = c(this.getConfig().voucher.button)
                    , b = c(this.getConfig().voucher.input);
                b && b.val() && "" === b.val().trim() ? a.hide() : a.show()
            },
            voucherClearButton: function() {
                var a = c(this.getConfig().voucher.input);
                this.updateClearVoucherButtonState(),
                    a.on("input", c.proxy(this.updateClearVoucherButtonState, this))
            },
            validateDateBeforeSubmit: function() {
                c('button[type="submit"]:not(.btn-voucher-clear)').on("click", function(a) {
                    var b = c("#co-review");
                    if (b.find('[name="shop_order_cart_type[deliveryTimeMode]"][value="preorder"]').is(":checked") && ("" === b.find("#shop_order_cart_type_orderTime_preorderDate").val() || "" === b.find("#shop_order_cart_type_orderTime_preorderTime").val())) {
                        var d = b.find("#shop_order_cart_type_vouchers");
                        "" !== d.val().split(" ").join("") && (d.next("div.alert-danger").length || d.after(c("<div />").addClass("alert alert-danger mt15").append(c("<ul />").addClass("errors").append(c("<li />").html(b.data("preorder-validation"))))),
                            a.preventDefault())
                    }
                })
            },
            updateClearVoucherButtonState: function() {
                var a = c(this.getConfig().voucher.clearButton)
                    , b = c(this.getConfig().voucher.input);
                b.val() ? a.removeClass("hidden") : a.addClass("hidden")
            },
            initReviewExpedition: function() {
                var a = this.getConfig().expeditionType
                    , b = c(a.reviewOrderContainer);
                0 === c(a.pickupLocationChecked).length && this.disablePickupDetailsContainer(),
                    b.on("click", a.checkoutButton, function(b) {
                        c(this).parents(a.emptyCart).length > 0 && (b.preventDefault(),
                            b.stopPropagation())
                    }),
                    c(a.emptyCart).on("click", a.reviewContainer, function(a) {
                        a.stopPropagation(),
                            a.preventDefault()
                    })
            },
            enablePickupDetailsContainer: function() {
                var a = c(this.getConfig().expeditionType.pickupDetailsContainer);
                a.find(this.getConfig().expeditionType.pickupLocationSelector).attr("disabled", !1),
                    a.show()
            },
            disablePickupDetailsContainer: function() {
                c(this.getConfig().expeditionType.pickupDetailsContainer).hide().find(this.getConfig().expeditionType.pickupLocationSelector).attr("disabled", "disabled")
            },
            refreshExpeditionType: function() {
                var a = c(this.getConfig().expeditionType.expeditionTypeChecked)
                    , b = [];
                b.push({
                    name: a.attr("name"),
                    value: a.val()
                }),
                    this.updateExpedition(b)
            },
            initInvoice: function() {
                var a = c(this.getConfig().invoice.input);
                a.on("change", c.proxy(this.toggleInvoice, this)),
                    this.toggleInvoice()
            },
            toggleInvoice: function() {
                var a = c(this.getConfig().invoice.input)
                    , b = c(this.getConfig().invoice.container);
                a.is(":checked") ? b.slideDown() : b.slideUp()
            },
            initOrderTimeType: function() {
                var a = c(this.getConfig().orderTimeType.preorderDateSelector)
                    , b = c(this.getConfig().orderTimeType.preorderTimeSelector)
                    , d = c(this.getConfig().expeditionType.expeditionTypeSelector);
                a.on("change", c.proxy(this.changeSelectDeliveryTimes, this)),
                    d.on("change", c.proxy(this.changeExpeditionType, this)),
                    b.on("change", c.proxy(this.refreshDeliveryDateTime, this))
            },
            changeExpeditionType: function() {
                this.changeOrderTimeEstimationAndTitle(),
                    this.changeSelectDeliveryDates(),
                    c(this.getConfig().expeditionType.pickupLocationChecked).length > 0 ? (this.enablePickupDetailsContainer(),
                        this.updateTimeModeNowContainerBasedOnDataField("is-pickup-available"),
                        c(this.getConfig().expeditionType.checkoutButton).removeClass("disabled"),
                        c(this.getConfig().expeditionType.checkoutButton).prop("disabled", !1)) : (this.disablePickupDetailsContainer(),
                        this.updateTimeModeNowContainerBasedOnDataField("is-delivery-available")),
                    this.refreshExpeditionType()
            },
            updateTimeModeNowContainerBasedOnDataField: function(a) {
                var b = c(this.getConfig().expeditionType.deliveryTimeModeNowContainer);
                b.data(a) ? b.removeClass("hidden").show() : b.hide()
            },
            changeOrderTimeEstimationAndTitle: function() {
                c(this.getConfig().orderTimeType.deliveryTimeTitle).toggleClass("hidden"),
                    c(this.getConfig().orderTimeType.pickupTimeTitle).toggleClass("hidden"),
                    c(this.getConfig().orderTimeType.deliveryTimeEstimationDescription).toggleClass("hidden"),
                    c(this.getConfig().orderTimeType.pickupTimeEstimationDescription).toggleClass("hidden")
            },
            changeSelectDeliveryTimes: function() {
                this.clearSelectDeliveryTime();
                var a = c(this.getConfig().orderTimeType.preorderDateSelector).val();
                if ("" !== a) {
                    var b = c(this.getConfig().orderTimeType.preorderTimeSelector)
                        , d = c(this.getConfig().expeditionType.expeditionTypeChecked).val()
                        , e = this.getConfig().orderTimeType.preorderDays[d][a] || [];
                    c.each(e, function(a, d) {
                        b.append(c("<option></option>").attr("value", a).text(d))
                    })
                }
            },
            refreshDeliveryType: function() {
                var a = []
                    , b = c(this.getConfig().orderTimeType.preorderTypeCheckedSelector);
                a.push({
                    name: b.attr("name"),
                    value: b.val()
                }),
                    this.updateExpedition(a)
            },
            refreshDeliveryDateTime: function() {
                var a = c(this.getConfig().orderTimeType.preorderDateSelector)
                    , b = c(this.getConfig().orderTimeType.preorderTimeSelector)
                    , d = [];
                d.push({
                    name: a.attr("name"),
                    value: a.val()
                }),
                    d.push({
                        name: b.attr("name"),
                        value: b.val()
                    }),
                    this.updateExpedition(d)
            },
            updateExpedition: function(a) {
                var b = c(this.getConfig().expeditionType.container)
                    , d = b.find(this.getConfig().expeditionType.orderContainer);
                this.startElementLoading(d),
                    this.ajax({
                        url: this.getConfig().expeditionType.updateExpeditionTypeUrl,
                        type: "POST",
                        data: a
                    }).done(function(a) {
                        var b = c(a.html);
                        d.html(b.find(this.getConfig().expeditionType.orderContainer).html())
                    }).done(this.disableReviewCheckoutButton).always(function() {
                        this.stopElementLoading(d)
                    })
            },
            disableReviewCheckoutButton: function() {
                var a = c(".checkout-not-allowed-notice");
                0 === c(this.getConfig().expeditionType.pickupLocationChecked).length && a.length > 0 && "" !== a.find(".title").text() && (c(this.getConfig().expeditionType.checkoutButton).addClass("disabled"),
                    c(this.getConfig().expeditionType.checkoutButton).prop("disabled", !0))
            },
            changeSelectDeliveryDates: function() {
                var a = c(this.getConfig().orderTimeType.preorderDateSelector);
                if (0 !== a.length) {
                    this.clearSelectDeliveryDate(),
                        this.clearSelectDeliveryTime();
                    var b = c(this.getConfig().expeditionType.expeditionTypeChecked).val()
                        , d = this.getConfig().orderTimeType.preorderDays[b] || [];
                    c.each(d, function(b) {
                        a.append(c("<option></option>").attr("value", b).text(b))
                    })
                }
            },
            clearSelectDeliveryDate: function() {
                c(this.getConfig().orderTimeType.preorderDateSelector).find("option:gt(0)").remove()
            },
            clearSelectDeliveryTime: function() {
                c(this.getConfig().orderTimeType.preorderTimeSelector).find("option:gt(0)").remove()
            },
            initCheckoutForm: function() {
                var a = c(this.getConfig().checkout.form);
                this.initPhoneMask(),
                    a.on("submit", c.proxy(this.showExpressDeliveryWarning, this))
            },
            initPhoneMask: function() {
                var a = c(this.getConfig().checkout.customerPhone)
                    , b = a.data("mask");
                b && a.is('input[type="text"]') && a.mask(b)
            },
            disableCheckoutButton: function(a) {
                var b = c(this.getConfig().checkout.form);
                "undefined" != typeof a && (b = c(a.currentTarget),
                b.hasClass("disabled") && a.preventDefault()),
                    b.addClass("disabled").find('submit, button[type="submit"]').button("loading")
            },
            showExpressDeliveryWarning: function(a) {
                var b, d = this;
                if (this.$isContinueCheckoutButtonClicked)
                    return !0;
                if (!this.getConfig().checkout.expressDeliveryAvailability)
                    return d.disableCheckoutButton(),
                        !0;
                c.subscribe("CHECKOUT_PAYMENT_TYPE_SELECTED", function(a) {
                    if ("online" !== c(a).data("payment-type"))
                        return d.disableCheckoutButton(),
                            !0
                }),
                    a.preventDefault(),
                null !== this.$modal && this.$modal.remove();
                var e = {
                    url: this.getConfig().checkout.vendorExpressDeliveryCheckPath,
                    cache: !1
                };
                this.startElementLoading(c(this.getConfig().checkout.form)),
                    b = this.ajax(e),
                    b.done(c.proxy(function(a) {
                        "" !== a.html ? (this.$modal = c(a.html),
                            c("body").append(this.$modal.modal("show"))) : (this.disableCheckoutButton(),
                            this.continueRegularCheckout()),
                            this.stopElementLoading(c(this.getConfig().checkout.form))
                    }, this)),
                    b.always(c.proxy(function() {
                        this.bindExpressDeliveryModalContent()
                    }, this))
            },
            bindExpressDeliveryModalContent: function() {
                c(".continue-checkout").on("click", c.proxy(this.continueRegularCheckout, this))
            },
            continueRegularCheckout: function(a) {
                "undefined" != typeof a && "click" === a.type && a.preventDefault(),
                null !== this.$modal && this.$modal.remove(),
                    this.$isContinueCheckoutButtonClicked = !0,
                    c(this.getConfig().checkout.form).submit()
            },
            paymentValidation: function(a) {
                a === !1 && this.allowCheckoutRetry()
            },
            allowCheckoutRetry: function() {
                var a = c(this.getConfig().checkout.form);
                a.removeClass("disabled").find('submit, button[type="submit"]').button("reset")
            },
            onPaymentTypeChangesWalletAlert: function(a) {
                var b = c(this.getConfig().cart.container)
                    , d = b.data("is-wallet-used");
                if (d) {
                    var e = c(a).data("wallet-discount-eligible");
                    this.isLastPaymentEligibleForWallet && !e ? (this.$walletAlertModal = c(".wallet-discount-not-eligible"),
                        c("body").append(this.$walletAlertModal.modal("show")),
                        this.isLastPaymentEligibleForWallet = !1) : e && (this.isLastPaymentEligibleForWallet = !0)
                }
            },
            updateTotalOnCartRefresh: function() {
                c.subscribe("CART_REFRESHED", c.proxy(function() {
                    var a = c(this.getConfig().cart.cartTotal).html().trim();
                    0 !== a.length && c(this.getConfig().cart.orderTotal).html(a)
                }, this))
            }
        })
    }(window, document, jQuery, _FD),
    function(a, b, c, d) {
        d.CheckoutCustomerAddressesController = Class({
            "extends": d.Base
        }, {
            __name: "CheckoutCustomerAddressesController",
            __config: {
                CheckoutCustomerAddressesController: {
                    checkoutForm: ".payment-form",
                    container: ".checkout-delivery-addresses",
                    customerAddress: ".checkout-customer-address",
                    customerAddressRadio: ".checkout-customer-address:not(.disabled) :radio",
                    customerAddressesToggle: "#checkout-toggle-customer-addresses",
                    createNewAddressButton: '.checkout-delivery-addresses-selector-button[data-type="create-new-address"]',
                    postcodeField: "div.address-field-postcode .form-control",
                    customerLocation: ".customer-location",
                    maxDisplayedAddresses: 2
                }
            },
            init: function() {
                this["super"].apply(this, c.merge(["init"], arguments));
                var a = this.getConfig()
                    , b = c(a.container)
                    , d = c(a.checkoutForm)
                    , e = d.find(a.postcodeField)
                    , f = c(a.createNewAddressButton)
                    , g = e.length ? e.val() : "";
                b.find(c(a.customerAddressRadio)).on("change", function() {
                    var e = c(this);
                    b.find(a.customerAddress).removeClass("active"),
                        c(a.customerLocation).find(".area").html(c(this).data("area")),
                        c(a.customerLocation).find(".city").html(c(this).data("city")),
                    e.prop("checked") && (e.closest(".checkout-customer-address").addClass("active"),
                        c.each(c(this).data(), function(a) {
                            if ("area" !== a && "city" !== a) {
                                var b = d.find("div.address-field-" + a + " .form-control");
                                b.length && b.val(e.data(a))
                            }
                        }))
                }),
                    f.on("click", function() {
                        e.length && e.val(g)
                    });
                var h = b.find(a.customerAddress);
                h.length > a.maxDisplayedAddresses && c(a.customerAddressesToggle).css("display", "block"),
                    b.on("click", a.customerAddressesToggle, function(a) {
                        a.preventDefault(),
                            c(this).fadeOut("fast"),
                            h.fadeIn("fast")
                    })
            }
        })
    }(window, document, jQuery, _FD),
    function(a, b, c, d) {
        d.CheckoutLoyaltyProgramController = Class({
            "extends": d.BlockChoiceController
        }, {
            __name: "CheckoutLoyaltyProgramController",
            __config: {
                CheckoutLoyaltyProgramController: {
                    container: ".checkout-loyalty-programs",
                    choice: ".loyalty-program",
                    extra: ".loyalty-program-extras",
                    extras: ".loyalty-programs-extras",
                    input: "input.loyalty-program-input",
                    useLoyaltyProgramInput: 'input[name="shop_checkout_type[orderMetaData][useLoyaltyPrograms]"]',
                    useLoyaltyProgramContainer: ".checkout-loyalty-programs"
                }
            },
            init: function() {
                this["super"].apply(this, c.merge(["init"], arguments)),
                    this.initGroupChoices(),
                    this.checkPreselectedGroupChoice(),
                    this.initUseLoyaltyProgram()
            },
            initUseLoyaltyProgram: function() {
                var a = c(this.getConfig().useLoyaltyProgramInput);
                a.on("change", c.proxy(this.toggleLoyaltyPrograms, this)),
                    this.toggleLoyaltyPrograms()
            },
            toggleLoyaltyPrograms: function() {
                var a = c(this.getConfig().useLoyaltyProgramInput);
                a.is(":checked") ? this.showLoyaltyPrograms() : this.hideLoyaltyPrograms()
            },
            hideLoyaltyPrograms: function() {
                var a = c(this.getConfig().useLoyaltyProgramContainer)
                    , b = a.find("input, select");
                a.slideUp(),
                    b.each(function() {
                        var a = c(this);
                        a.data("disabled", !!a.attr("disabled")),
                            a.attr("disabled", "disabled")
                    })
            },
            showLoyaltyPrograms: function() {
                var a = c(this.getConfig().useLoyaltyProgramContainer)
                    , b = a.find("input, select");
                a.slideDown(),
                    b.each(function() {
                        var a = c(this);
                        a.data("disabled") ? a.attr("disabled", "disabled") : a.removeAttr("disabled")
                    })
            }
        })
    }(window, document, jQuery, _FD),
    function(a, b, c, d) {
        d.CheckoutPaymentTypeController = Class({
            "extends": d.Base,
            uses: [d.AjaxTrait, d.LoadingIndicatorTrait]
        }, {
            __name: "CheckoutPaymentTypeController",
            __config: {
                CheckoutPaymentTypeController: {
                    container: ".checkout-payment-types",
                    mainContainer: ".checkout-payment-type-container",
                    choice: ".payment-type",
                    extra: ".payment-type-extras",
                    input: ".payment-type-input",
                    label: ".payment-type-label",
                    wrapper: ".payment-type-wrapper",
                    paymentTypeId: 'input[name="shop_checkout_type[orderMetaData][paymentTypeId]"]',
                    adyenPaymentTypeId: null,
                    setPaymentTypePath: "",
                    elements: {
                        dropDownCards: "#existing_cards_form_cards",
                        dropDownPhoneNumbers: "#existing_mobiles_form_mobileNumber",
                        dropDownProvidersFormWithoutPhones: "#new_mobile_form_providerName",
                        dropDownProvidersFormWithPhones: "#existing_mobiles_form_providerName",
                        containerCard: ".direct-pay-card-payment-controller-container",
                        containerMobile: ".direct-pay-mobile-payment-controller-container",
                        existingCardsForm: ".existing-cards-form",
                        existingMobileForm: ".existing-mobile-form",
                        tabContainerPayment: ".payment-type-wrapper",
                        emptyAddress: ".dp-empty-address",
                        newContent: ".tgl-sib"
                    },
                    pathUrl: {
                        getCards: "/directpay/customer-get-cards",
                        getProviders: "/directpay/get-providers-mobile"
                    }
                }
            },
            init: function() {
                this["super"].apply(this, c.merge(["init"], arguments)),
                    this.bindPaymentExtraInfoContainersVisibility(),
                    this.bindEvents(),
                    this.toggleSubmitButton(),
                    this.handleSingleGroupSelection(),
                    this.handleSingleElementsSelection(),
                    this.checkPreselectedGroupChoice(),
                    this.bindPaymentTypeSelection()
            },
            checkPreselectedGroupChoice: function() {
                var a, b = this.getGroupChoices(), c = this.getGroupChoiceInputs(b);
                1 === c.length && c.attr("checked", "checked"),
                    a = c.filter(":checked"),
                a.length > 0 && a.closest(this.getConfig().choice).trigger("click")
            },
            getGroupChoices: function() {
                return c(this.getConfig().choice)
            },
            getGroupChoiceInputs: function(a) {
                return a.find(this.getConfig().input)
            },
            toggleSubmitButton: function() {
                var a = c(this.getConfig().paymentTypeId)
                    , b = c('input[name="payment_handler_adyen_cse_payment_type[recurring_detail]"]')
                    , d = c("#adyen-encrypted-form-number")
                    , e = c("#shop_checkout_type_place_order_button")
                    , f = this.getConfig().adyenPaymentTypeId;
                a.on("change", function(c) {
                    c.preventDefault(),
                        parseInt(a.filter(":checked").val()) === parseInt(f) && b.length > 0 && b.is(":checked") === !1 && d.is(":visible") === !1 ? e.addClass("disabled") : e.removeClass("disabled")
                })
            },
            handleSingleGroupSelection: function() {
                1 === c(this.getConfig().mainContainer).length && c(this.getConfig().mainContainer).find(".checkout-payment-type-button").trigger("click")
            },
            handleSingleElementsSelection: function() {
                var a = this.getConfig()
                    , b = c(a.mainContainer).find(".full-height");
                c.each(b, function(b, d) {
                    var e = c(d).children(a.choice);
                    1 === e.length ? (e.find(a.label).trigger("click"),
                        e.children(a.extra).show()) : e.children(a.extra).hide()
                })
            },
            removeAllSelectedChoices: function() {
                var a = this.getGroupChoices()
                    , b = this.getGroupChoiceInputs(a);
                b.prop("checked", !1)
            },
            bindPaymentExtraInfoContainersVisibility: function() {
                var a = this.getConfig();
                c(a.wrapper).on("click", function() {
                    c(this).closest(a.mainContainer).find(a.extra).hide(),
                        c(this).closest(a.choice).find(a.extra).show()
                }).on("click", "input", function(a) {
                    a.stopPropagation()
                })
            },
            bindPaymentTypeSelection: function() {
                var a = this.getConfig();
                c(a.wrapper).on("click", c.proxy(function(b) {
                    var d = c(b.currentTarget).parent();
                    c.publish("CHECKOUT_PAYMENT_TYPE_SELECTED", d);
                    var e = d.find(a.paymentTypeId).val()
                        , f = d.data("payment-type-code");
                    this.submitPaymentType(e),
                    "direct_pay_card" === f && 0 === c(a.elements.dropDownCards).has("option").length && this.getDirectPayCards(),
                    "direct_pay_mobile" === f && 0 === c(a.elements.dropDownProvidersFormWithoutPhones).has("option").length && this.getProviders()
                }, this))
            },
            bindEvents: function() {
                c.subscribe("TOGGLE_ELEMENTS_WRAPPER_OPENED", c.proxy(this.handleSingleElementsSelection, this)),
                    c.subscribe("TOGGLE_ELEMENTS_WRAPPER_CLOSED", c.proxy(this.removeAllSelectedChoices, this))
            },
            getDirectPayCards: function() {
                var a = this
                    , b = this.getConfig()
                    , d = c(b.elements.containerCard);
                this.startElementLoading(d),
                    a.ajax({
                        url: b.pathUrl.getCards,
                        type: "POST"
                    }).done(function(e) {
                        c(b.elements.dropDownCards).empty(),
                            e ? (c(b.elements.existingCardsForm).removeClass("hidden"),
                                a.appendOptionDropDown(c(b.elements.dropDownCards), e)) : c(b.elements.containerCard).find(b.elements.newContent).show(),
                            this.stopElementLoading(d)
                    })
            },
            getProviders: function() {
                var a = this
                    , b = this.getConfig()
                    , d = c(b.elements.containerMobile);
                this.startElementLoading(d),
                    a.ajax({
                        url: b.pathUrl.getProviders,
                        type: "POST"
                    }).done(function(e) {
                        e.emptyAddress ? (d.hide(),
                            c(b.extra).find(b.elements.emptyAddress).removeClass("hidden")) : (d.show(),
                            c(b.extra).find(b.elements.emptyAddress).addClass("hidden")),
                            c(b.elements.dropDownProvidersFormWithPhones).empty(),
                            c(b.elements.dropDownProvidersFormWithoutPhones).empty(),
                            c(b.elements.dropDownPhoneNumbers).empty(),
                        e.providersList && (a.appendOptionDropDown(c(b.elements.dropDownProvidersFormWithoutPhones), e.providersList),
                            a.appendOptionDropDown(c(b.elements.dropDownProvidersFormWithPhones), e.providersList)),
                            e.phoneNumbers ? (c(b.elements.existingMobileForm).removeClass("hidden"),
                                a.appendOptionDropDown(c(b.elements.dropDownPhoneNumbers), e.phoneNumbers)) : d.find(b.elements.newContent).show(),
                            this.stopElementLoading(d)
                    })
            },
            appendOptionDropDown: function(a, b) {
                c.each(b, function(b, d) {
                    b ? a.append(c("<option></option>").val(b).html(d)) : a.prepend(c("<option selected></option>").val(b).html(d))
                })
            },
            submitPaymentType: function(a) {
                this.ajax({
                    url: this.getConfig().setPaymentTypePath,
                    type: "POST",
                    data: {
                        payment_type_id: a
                    }
                }).done(function() {
                    c.publish("CART_REFRESH")
                })
            }
        })
    }(window, document, jQuery, _FD),
    function(a, b, c, d) {
        d.CookieNoticeController = Class({
            "extends": d.Base
        }, {
            __name: "CookieNoticeController",
            __config: {
                CookieNoticeController: {
                    container: ".js-cookie-notice",
                    close: ".js-cookie-notice-close",
                    cookieName: "",
                    cookieExpires: ""
                }
            },
            $container: null,
            init: function() {
                this.$container = c(this.getConfig().container),
                    this.$container.on("click", this.getConfig().close, c.proxy(this.cookieNoticeCloseClick, this))
            },
            cookieNoticeCloseClick: function() {
                this.saveCookie(),
                    this.removeNotice()
            },
            saveCookie: function() {
                Cookies.set(this.getConfig().cookieName, 1, {
                    path: "/",
                    expires: this.getConfig().cookieExpires
                })
            },
            removeNotice: function() {
                this.$container.fadeOut()
            }
        })
    }(window, document, jQuery, _FD),
    function(a, b, c, d) {
        d.DeliveryAddressController = Class({
            "extends": d.Base
        }, {
            __name: "DeliveryAddressController",
            __config: {
                DeliveryAddressController: {
                    deliveryAddress: {
                        mainContainer: ".checkout-delivery-information",
                        mainInput: ".checkout-customer-address-id",
                        mainFormElements: "input, textarea",
                        enabledMainFormElementsFilter: ":not([readonly])",
                        addressesContainer: ".checkout-delivery-addresses",
                        form: ".checkout-delivery-addresses-form",
                        selector: ".checkout-delivery-addresses-selector",
                        selectorSelectedClassName: "selected",
                        selectorHiddenClassName: "hidden",
                        selectorButton: ".checkout-delivery-addresses-selector-button",
                        containerButton: ".checkout-delivery-addresses-selector-button-container",
                        containerButtonList: ".checkout-delivery-addresses-selector-button-container-list",
                        containerButtonForm: ".checkout-delivery-addresses-selector-button-container-form",
                        closeFormButton: ".checkout-delivery-addresses-close-form-button",
                        createNewAddress: "create-new-address",
                        useExistingAddress: "use-existing-address",
                        selectorUseExistingAddressButton: '[data-type="use-existing-address"]',
                        selectorCreateNewAddressButton: '[data-type="create-new-address"]',
                        changeAddressButton: ".checkout-delivery-addresses-change-address",
                        displayOneAddressClassName: "display-one-address",
                        disabledClassName: "disabled",
                        selectedCustomerAddress: '[name="customer_address_id"]:checked',
                        addressMatchingLocation: ".address-matching-location"
                    },
                    checkout: {
                        form: "form.payment-form",
                        customerPhone: 'input[name="shop_checkout_type[orderMetaData][customer][mobileNumber]"]',
                        customerAddress: ".checkout-customer-address",
                        customerAddressLabel: ".checkout-customer-address-label"
                    }
                }
            },
            deliveryAddressFormInitialValues: [],
            init: function() {
                this["super"].apply(this, c.merge(["init"], arguments)),
                    this.deliveryAddress = this.getConfig().deliveryAddress,
                    this.selectFirstEnabledAddress(),
                    this.bindEvents()
            },
            getDeliveryAddressFormInitialValues: function() {
                var a = this
                    , b = c(this.deliveryAddress.form).find(this.deliveryAddress.mainFormElements);
                b.each(function() {
                    var b = c(this);
                    "" !== b.val() && (a.deliveryAddressFormInitialValues[b.attr("name")] = b.val())
                })
            },
            selectFirstEnabledAddress: function() {
                if (!c(this.deliveryAddress.form).hasClass("errors")) {
                    var a, b = c(this.deliveryAddress.addressesContainer), d = b.find(this.getConfig().checkout.customerAddress), e = b.find(this.deliveryAddress.selectedCustomerAddress);
                    a = e.length ? e : d.filter(":not(." + this.deliveryAddress.disabledClassName + ")").filter(this.deliveryAddress.addressMatchingLocation).first(),
                    a.length && (a.find(this.deliveryAddress.mainInput).trigger("click"),
                        c.publish("FIRST_ENABLED_ADDRESS_SELECTED"))
                }
            },
            bindEvents: function() {
                var a = this.deliveryAddress;
                c(a.mainContainer).on("click", a.selectorButton, c.proxy(function(b) {
                    b.preventDefault(),
                        b.stopPropagation();
                    var d = c(b.currentTarget);
                    if (!d.hasClass(a.disabledClassName) && !d.hasClass(a.selectorSelectedClassName))
                        switch (this.unselectDeliveryAddressButtons(),
                            d.addClass(a.selectorSelectedClassName),
                            d.attr("data-type")) {
                            case a.createNewAddress:
                                this.hideDeliveryAddressesContainer(),
                                    this.displayDeliveryAddressesForm(),
                                    this.handleDeliveryAddressFormLocation(d),
                                    this.unselectDeliveryAddresses(),
                                    this.clearMainForm(),
                                    c.publish("PREFILL_REFRESH");
                                break;
                            case a.useExistingAddress:
                                this.clearMainForm(),
                                    this.hideDeliveryAddressesForm(),
                                    this.displayDeliveryAddressesContainer()
                        }
                }, this)).on("click", a.changeAddressButton, c.proxy(function(b) {
                    var d = c(b.currentTarget)
                        , e = d.parents(a.selector)
                        , f = a.displayOneAddressClassName;
                    e.hasClass(f) && (e.removeClass(f),
                        this.handleDeliveryAddressButtonSelection(a.selectorUseExistingAddressButton),
                        this.displayDeliveryAddressesContainer()),
                        b.preventDefault(),
                        b.stopPropagation()
                }, this)).on("click", a.closeFormButton, c.proxy(function() {
                    this.hideDeliveryAddressesForm(),
                        this.displayDeliveryAddressesContainer()
                }, this)),
                    c.subscribe("FIRST_ENABLED_ADDRESS_SELECTED", function() {
                        this.getDeliveryAddressFormInitialValues()
                    }
                        .apply(this))
            },
            handleDeliveryAddressButtonSelection: function(a) {
                this.unselectDeliveryAddressButtons(),
                    c(this.deliveryAddress.selectorButton).filter(a).addClass(this.deliveryAddress.selectorSelectedClassName)
            },
            unselectDeliveryAddressButtons: function() {
                c(this.deliveryAddress.selectorButton).removeClass(this.deliveryAddress.selectorSelectedClassName)
            },
            displayDeliveryAddressesContainer: function() {
                c(this.deliveryAddress.addressesContainer).removeClass(this.deliveryAddress.selectorHiddenClassName).show()
            },
            hideDeliveryAddressesContainer: function() {
                c(this.deliveryAddress.addressesContainer).hide()
            },
            displayDeliveryAddressesForm: function() {
                c(this.deliveryAddress.form).show()
            },
            hideDeliveryAddressesForm: function() {
                c(this.deliveryAddress.form).hide()
            },
            unselectDeliveryAddresses: function() {
                var a = c(this.deliveryAddress.addressesContainer).find(this.deliveryAddress.mainInput);
                c(this.getConfig().checkout.customerAddress).removeClass("active"),
                    a.each(function() {
                        c(this).prop("checked", !1)
                    })
            },
            handleDeliveryAddressFormLocation: function(a) {
                var b, d = c(this.deliveryAddress.form);
                switch (a.attr("data-type")) {
                    case this.deliveryAddress.createNewAddress:
                        b = c(this.deliveryAddress.containerButtonForm);
                        break;
                    default:
                        b = c(this.deliveryAddress.containerButtonList)
                }
                b.append(d)
            },
            clearMainForm: function() {
                var a = c(this.deliveryAddress.form).find(this.deliveryAddress.mainFormElements).filter(this.deliveryAddress.enabledMainFormElementsFilter);
                a.each(function() {
                    c(this).val("")
                })
            }
        })
    }(window, document, jQuery, _FD),
    function(a, b, c, d) {
        d.DirectPayController = Class({
            "extends": d.Base,
            uses: [d.AjaxTrait, d.LoadingIndicatorTrait]
        }, {
            __name: "DirectPayController",
            __config: {
                DirectPayController: {
                    cardInfo: {
                        cardNumber: {
                            inputSelector: "#new_card_form_cardNumber"
                        },
                        expirationDateMonth: {
                            inputSelector: "#new_card_form_expiryMonth"
                        },
                        expirationDateYear: {
                            inputSelector: "#new_card_form_expiryYear"
                        },
                        cvvNumber: {
                            inputSelector: "#new_card_form_ccv"
                        },
                        holderName: {
                            inputSelector: "#new_card_form_cardHolderName"
                        }
                    },
                    elements: {
                        deleteCardButton: "#existing_cards_form_deleteCard",
                        dropDownCards: "#existing_cards_form_cards",
                        container: ".direct-pay-card-payment-controller-container",
                        existingCardsForm: ".existing-cards-form",
                        newCardsContent: ".tgl-sib"
                    },
                    pathUrl: {
                        deleteCard: "/directpay/customer-delete-card/"
                    }
                }
            },
            init: function() {
                this.initAddCardFieldsSwitch(),
                    this.clearFields(),
                    this.deleteCard()
            },
            initAddCardFieldsSwitch: function() {
                c(this.getConfig().cardInfo.cardNumber.inputSelector).on("keyup", c.proxy(this.cardNumberFieldChange, this)),
                    c(this.getConfig().cardInfo.expirationDateMonth.inputSelector).on("change", c.proxy(this.expirationDateMonthFieldChange, this)),
                    c(this.getConfig().cardInfo.expirationDateYear.inputSelector).on("change", c.proxy(this.expirationDateYearFieldChange, this))
            },
            cardNumberFieldChange: function() {
                var a = c.trim(c(this.getConfig().cardInfo.cardNumber.inputSelector).val());
                this.showCreditCardIcon(a),
                16 === a.length && c(this.getConfig().cardInfo.expirationDateMonth.inputSelector).focus()
            },
            showCreditCardIcon: function(b) {
                var d = c("#cc-i");
                d.attr("class", "hide cart-type-icon");
                try {
                    var e = a.creditCardType(b)
                        , f = ["visa", "master-card", "maestro"]
                        , g = ["visa", "mastercard", "maestro"];
                    b.length && e.length && f.indexOf(e[0].type) > -1 && (d.addClass(g[f.indexOf(e[0].type)]),
                        d.removeClass("hide"))
                } catch (h) {}
            },
            expirationDateMonthFieldChange: function() {
                c(this.getConfig().cardInfo.expirationDateYear.inputSelector).focus()
            },
            expirationDateYearFieldChange: function() {
                c(this.getConfig().cardInfo.cvvNumber.inputSelector).focus()
            },
            clearFields: function() {
                var a = this.getConfig();
                c(a.elements.dropDownCards).on("change", function() {
                    c(this).parent().removeClass("has-error"),
                    c(this).val() && (c(a.cardInfo.cardNumber.inputSelector).val(""),
                        c(a.cardInfo.cvvNumber.inputSelector).val(""),
                        c(a.cardInfo.holderName.inputSelector).val(""))
                }),
                    c(a.cardInfo.cardNumber.inputSelector + ", " + a.cardInfo.cvvNumber.inputSelector + ", " + a.cardInfo.holderName.inputSelector).on("focus", function() {
                        c(a.elements.dropDownCards).find("option:eq(0)").prop("selected", !0)
                    })
            },
            deleteCard: function() {
                var a = this.getConfig()
                    , b = this
                    , d = c(a.elements.container);
                c(a.elements.deleteCardButton).on("click", function(e) {
                    e.preventDefault();
                    var f = c(a.elements.dropDownCards).find(":selected").val();
                    return f ? (b.startElementLoading(d),
                        b.ajax({
                            url: a.pathUrl.deleteCard + f,
                            type: "DELETE"
                        }).done(function(e) {
                            c(a.elements.dropDownCards).empty(),
                                e ? (c(a.elements.existingCardsForm).removeClass("hidden"),
                                    b.appendOptionDropDown(c(a.elements.dropDownCards), e)) : (c(a.elements.container).find(a.elements.newCardsContent).show(),
                                    c(a.elements.existingCardsForm).addClass("hidden")),
                                b.stopElementLoading(d)
                        })) : c(a.elements.dropDownCards).parent().addClass("has-error"),
                        !1
                })
            },
            appendOptionDropDown: function(a, b) {
                c.each(b, function(b, d) {
                    b ? a.append(c("<option></option>").val(b).html(d)) : a.prepend(c("<option selected></option>").val(b).html(d))
                })
            }
        })
    }(window, document, jQuery, _FD),
    function(a, b, c, d) {
        d.DirectPayMobileController = Class({
            "extends": d.Base,
            uses: [d.AjaxTrait, d.LoadingIndicatorTrait]
        }, {
            __name: "DirectPayMobileController",
            __config: {
                DirectPayMobileController: {
                    elements: {
                        deletePhoneButton: "#existing_mobiles_form_deleteMobile",
                        inputNewMobile: "#new_mobile_form_mobileNumber",
                        dropDownMobileNumber: "#existing_mobiles_form_mobileNumber",
                        container: ".direct-pay-mobile-payment-controller-container",
                        existingMobilesForm: ".existing-mobile-form",
                        newContent: ".tgl-sib"
                    },
                    pathUrl: {
                        deletePhone: "/directpay/customer-delete-phone/"
                    }
                }
            },
            init: function() {
                this.deletePhoneNumber(),
                    this.clearFields()
            },
            clearFields: function() {
                var a = this.getConfig();
                c(a.elements.dropDownMobileNumber).on("change", function() {
                    c(this).parent().removeClass("has-error"),
                    c(this).val() && c(a.elements.inputNewMobile).val("")
                }),
                    c(a.elements.inputNewMobile).on("focus", function() {
                        c(a.elements.dropDownMobileNumber).find("option:eq(0)").prop("selected", !0)
                    })
            },
            deletePhoneNumber: function() {
                var a = this.getConfig()
                    , b = this
                    , d = c(a.elements.container);
                c(a.elements.deletePhoneButton).on("click", function(e) {
                    e.preventDefault();
                    var f = c(a.elements.dropDownMobileNumber).find(":selected").val();
                    return f ? (b.startElementLoading(d),
                        b.ajax({
                            url: a.pathUrl.deletePhone + f,
                            type: "DELETE"
                        }).done(function(e) {
                            c(a.elements.dropDownMobileNumber).empty(),
                                e.phoneNumbers ? (c(a.elements.existingMobilesForm).removeClass("hidden"),
                                    b.appendOptionDropDown(c(a.elements.dropDownMobileNumber), e.phoneNumbers)) : (c(a.elements.container).find(a.elements.newContent).show(),
                                    c(a.elements.existingMobilesForm).addClass("hidden")),
                                b.stopElementLoading(d)
                        })) : c(a.elements.dropDownMobileNumber).parent().addClass("has-error"),
                        !1
                })
            },
            appendOptionDropDown: function(a, b) {
                c.each(b, function(b, d) {
                    b ? a.append(c("<option></option>").val(b).html(d)) : a.prepend(c("<option selected></option>").val(b).html(d))
                })
            }
        })
    }(window, document, jQuery, _FD),
    function(a, b, c, d) {
        d.DominosController = Class({
            "extends": d.Base,
            uses: [d.AjaxTrait, d.LoadingIndicatorTrait]
        }, {
            __name: "DominosController",
            __config: {
                DominosController: {
                    createPopup: !0,
                    autoPopup: !1,
                    container: ".custom-location.dominos",
                    switchLocationContainer: ".switch-location",
                    currentLocationContainer: ".current-location",
                    form: "form",
                    city: ".city",
                    cityContainer: ".city-container",
                    locality: ".locality",
                    localityContainer: ".locality-container",
                    subLocality: ".sub-locality",
                    subLocalityContainer: ".sub-locality-container",
                    payment: {
                        form: "form.dominos-sub-type-form",
                        subPaymentTypeChoices: 'input[name="payment_handler_form_dominos_payment_sub_type_selection[dominos_payment_sub_type_group]"]'
                    }
                }
            },
            $container: null,
            $switchLocationContainer: null,
            $currentLocationContainer: null,
            $modal: null,
            $locationWrapper: null,
            init: function() {
                this.initPaymentForm(),
                    this.$container = c(this.getConfig().container),
                0 !== this.$container.length && (this.$switchLocationContainer = this.$container.find(this.getConfig().switchLocationContainer),
                    this.$currentLocationContainer = this.$container.find(this.getConfig().currentLocationContainer),
                this.getConfig().createPopup && this.createModal(),
                    this.bindDominosLocation(),
                    this.bindChangeLocation(),
                this.getConfig().createPopup && this.getConfig().autoPopup && this.showDominosModal(),
                    this.$container.find(this.getConfig().form).on("submit", c.proxy(this.bindSubmitLocation, this)),
                    c.subscribe("ADD_TO_CART_WITHOUT_VALID_LOCATION_ATTEMPT", c.proxy(this.showDominosModal, this)))
            },
            bindChangeLocation: function() {
                c(".change-location").on("click", c.proxy(this.showDominosModal, this))
            },
            createModal: function() {
                var a = '<div class="modal fade custom-location-modal dominos"><div class="modal-dialog"><div class="modal-content"><div class="modal-body"><div class="custom-location dominos"></div></div></div></div></div>';
                this.$modal = c(a),
                    c("body").append(this.$modal),
                    this.$modal.modal("hide"),
                    this.$switchLocationContainer.wrap('<div class="custom-location-on-page-wrapper"></div>'),
                    this.$locationWrapper = c(".custom-location-on-page-wrapper")
            },
            showDominosModal: function() {
                return this.$modal.find(this.getConfig().container).append(this.$switchLocationContainer.detach()),
                    this.$modal.modal("show"),
                    !1
            },
            hideDominosModal: function() {
                return this.$modal.modal("hide"),
                    this.$locationWrapper.append(this.$modal.find(this.getConfig().switchLocationContainer).detach()),
                    !1
            },
            bindDominosLocation: function() {
                var a = this.$switchLocationContainer.find(this.getConfig().form);
                a.find(this.getConfig().city).on("change", c.proxy(this.updateCity, this)),
                    a.find(this.getConfig().locality).on("change", c.proxy(this.updateLocality, this)),
                    a.find(this.getConfig().subLocality).on("change", c.proxy(this.updateSublocality, this)),
                    a.find("button").on("click", c.proxy(this.updateLocationForm, this))
            },
            updateCity: function() {
                this.disableLocality(),
                    this.disableSubLocality(),
                    this.updateLocationForm()
            },
            disableLocality: function() {
                this.$container.find(this.getConfig().localityContainer).hide().find(this.getConfig().locality).attr("disabled", "disabled")
            },
            disableSubLocality: function() {
                this.$container.find(this.getConfig().subLocalityContainer).hide().find(this.getConfig().subLocality).attr("disabled", "disabled")
            },
            updateLocality: function() {
                this.disableSubLocality(),
                    this.updateLocationForm()
            },
            updateSublocality: function() {
                this.updateLocationForm()
            },
            updateLocationForm: function(a) {
                var b = this.$switchLocationContainer.find(this.getConfig().form)
                    , d = b.serializeArray();
                "undefined" != typeof a && (a.preventDefault(),
                    d.push({
                        name: b.find("button").attr("name"),
                        value: 1
                    })),
                    this.startLoadingIndicator(),
                    this.ajax({
                        url: b.attr("action"),
                        type: "POST",
                        data: d
                    }).done(function(a) {
                        this.$switchLocationContainer.html(c(a.html).find(this.getConfig().switchLocationContainer).html())
                    }).done(this.bindDominosLocation).always(function(a) {
                        a && "undefined" != typeof a.status && "redirect" === a.status || this.stopLoadingIndicator()
                    })
            },
            startLoadingIndicator: function() {
                this.startElementLoading(this.$switchLocationContainer)
            },
            stopLoadingIndicator: function() {
                this.stopElementLoading(this.$switchLocationContainer)
            },
            initPaymentForm: function() {
                0 !== c(this.getConfig().payment.form).length && (this.bindPaymentFormSubmit(),
                    this.disablePayButton(),
                    this.bindSubPaymentSelection())
            },
            bindPaymentFormSubmit: function() {
                var a = c(this.getConfig().payment.form);
                a.on("submit", c.proxy(this.disablePayButton, this)),
                    a.on("submit", c.proxy(this.setLoadingPayButton, this))
            },
            disablePayButton: function() {
                var a = c(this.getConfig().payment.form);
                a.addClass("disabled").find('submit, button[type="submit"]').attr("disabled", "disabled")
            },
            setLoadingPayButton: function() {
                var a = c(event.currentTarget);
                a.find('submit, button[type="submit"]').button("loading")
            },
            bindSubPaymentSelection: function() {
                var a = c(this.getConfig().payment.form);
                a.find(this.getConfig().payment.subPaymentTypeChoices).on("change", c.proxy(this.enablePayButton, this))
            },
            enablePayButton: function() {
                var a = c(this.getConfig().payment.form);
                a.removeClass("disabled").find('submit, button[type="submit"]').removeAttr("disabled")
            }
        })
    }(window, document, jQuery, _FD),
    function(a, b, c, d) {
        d.DropdownToTypeaheadController = Class({
            "extends": d.Base
        }, {
            __name: "DropdownToTypeaheadController",
            __config: {
                DropdownToTypeaheadController: {
                    typeaheadElementMarkup: '<input class="form-control twitter-typeahead" type="text">',
                    wrapperElementMarkup: '<div class="dropdown-typeahead-wrapper">',
                    citySelect: ".city select"
                }
            },
            elements: 0,
            suggestionsTopCities: [],
            suggestionsMoreCities: [],
            bannedDropdownElementsValues: ["top_cities"],
            init: function() {
                this["super"].apply(this, c.merge(["init"], arguments)),
                    this.config = this.getConfig(),
                    this.listenToCreatorEvent()
            },
            listenToCreatorEvent: function() {
                c.subscribe("CREATE_TYPEAHEAD_FROM_DROPDOWN", c.proxy(function(a) {
                    if (void 0 === a)
                        throw new Error("DropdownToTypeahead: No data set.");
                    if (!(void 0 !== a.$dropdown && a.$dropdown instanceof jQuery && a.$dropdown.length > 0))
                        throw new Error("DropdownToTypeahead: Please select a dropdown to be transformed.");
                    this.$dropdown = a.$dropdown,
                        this.topCitiesHeader = c(this.config.citySelect).find("option[value=top_cities]"),
                        this.moreCitiesHeader = c(this.config.citySelect).find(":disabled"),
                        this.createTypeahead(),
                        this.$dropdown.triggerHandler("change"),
                    void 0 !== a.callbackOnElementSelected && (this.callback = a.callbackOnElementSelected)
                }, this))
            },
            createTypeahead: function() {
                this.setupElements(),
                    this.createWrapper(),
                    this.getDropdownData(),
                    this.initializeTypeahead(),
                    this.bindEvents()
            },
            setupElements: function() {
                this.elements++,
                    this.$newInputElement = c(this.config.typeaheadElementMarkup),
                    this.$newWrapperElement = c(this.config.wrapperElementMarkup),
                    this.originalValue = this.getDropdownFirstElement().text(),
                    this.selectedElement = "",
                    this.$newWrapperElement.attr("id", "wrapper-element-" + this.elements),
                    this.$dropdown.removeAttr("required")
            },
            createWrapper: function() {
                this.$dropdown.after(this.$newWrapperElement),
                    this.$newWrapperElement.append(this.$dropdown, this.$newInputElement)
            },
            getDropdownData: function() {
                var a = this.$dropdown.find("option")
                    , b = this.getDropdownFirstElement()
                    , d = [];
                void 0 !== b && (this.setNewSelectedElement(b.text()),
                    c(this.config.citySelect).val(b.val())),
                    this.topCitiesHeader.length > 0 ? this.getDropdownDataWithTopCities(a) : (a.each(function() {
                        this.value && d.push({
                            value: this.text,
                            id: this.value
                        })
                    }),
                        this.suggestionsMoreCities = d)
            },
            getDropdownDataWithTopCities: function(a) {
                var b = 0
                    , d = []
                    , e = []
                    , f = [this.topCitiesHeader.val(), this.moreCitiesHeader.val()]
                    , g = 0;
                a.each(function() {
                    return this.value === f[1] ? (b = g,
                        !1) : void g++
                }),
                    a.each(function() {
                        c.inArray(this.value, f) === -1 && (this.index < b ? d.push({
                            value: this.text,
                            id: this.value
                        }) : e.push({
                            value: this.text,
                            id: this.value
                        }))
                    }),
                    this.suggestionsTopCities = d,
                    this.suggestionsMoreCities = e
            },
            getDropdownSelectedElement: function() {
                return this.$dropdown.find("option:selected")
            },
            getDropdownFirstElement: function() {
                var a, b = this.getDropdownSelectedElement(), c = this.bannedDropdownElementsValues.indexOf(b.val());
                return a = c > -1 ? this.$dropdown.find("option").filter(':not([value="' + this.bannedDropdownElementsValues[c] + '"])').first() : b
            },
            initializeTypeahead: function() {
                var a = ""
                    , b = "";
                this.topCitiesHeader.length > 0 && (a = '<p class="city-option-header">' + this.topCitiesHeader.text() + "</p>",
                    b = '<p class="city-option-header">' + this.moreCitiesHeader.text() + "</p>"),
                    this.$newInputElement.typeahead({
                        highlight: !0,
                        hint: !0,
                        minLength: 0,
                        autoselect: !0
                    }, {
                        name: "typeahead-top-cities",
                        displayKey: "value",
                        source: c.proxy(this.suggestionMatcherTopCities, this),
                        templates: {
                            header: a
                        }
                    }, {
                        name: "typeahead-more-cities",
                        displayKey: "value",
                        source: c.proxy(this.suggestionMatcherMoreCities, this),
                        templates: {
                            header: b
                        }
                    })
            },
            bindEvents: function() {
                c.subscribe("FINISHED_PREFILLING", c.proxy(function() {
                    this.setNewSelectedElement(this.getDropdownSelectedElement().text())
                }, this)),
                    this.$newInputElement.filter(".tt-input").attr("autocomplete", "false"),
                    this.$newInputElement.on("focus", c.proxy(function(a) {
                        var b = c(a.currentTarget)
                            , d = c.Event("keydown")
                            , e = this.$newInputElement.val();
                        d.keyCode = d.which = 40,
                            b.trigger(d),
                        e && e !== this.originalValue || (this.$newInputElement.val(""),
                            this.$newInputElement.typeahead("val", ""))
                    }, this)),
                    this.$newInputElement.on("blur", c.proxy(function() {
                        this.$newInputElement.val() || this.$newInputElement.val(this.selectedElement),
                            c.each(this.suggestionsTopCities, c.proxy(function(a, b) {
                                b.value.toLowerCase() === this.$newInputElement.val().toLowerCase() && (this.$newInputElement.val(b.value),
                                    c(this.config.citySelect).val(b.id),
                                    this.updateDataLayer(b.value))
                            }, this)),
                            c.each(this.suggestionsMoreCities, c.proxy(function(a, b) {
                                b.value.toLowerCase() === this.$newInputElement.val().toLowerCase() && (this.$newInputElement.val(b.value),
                                    c(this.config.citySelect).val(b.id),
                                    this.updateDataLayer(b.value))
                            }, this))
                    }, this)),
                    this.$newInputElement.on("typeahead:selected typeahead:autocompleted", c.proxy(function(a, b) {
                        var c = b.id
                            , d = b.value;
                        d !== this.selectedElement && (this.$dropdown.val(c),
                            this.setNewSelectedElement(d),
                        void 0 !== this.callback && this.callback(c, d))
                    }, this))
            },
            updateDataLayer: function(b) {
                "object" == typeof a.dataLayer && "object" == typeof a.dataLayer[0] && "undefined" != typeof a.dataLayer[0].city_name && c("body").hasClass("home") && (a.dataLayer[0].city_name = b)
            },
            setNewSelectedElement: function(a) {
                this.selectedElement = a || this.selectedElement,
                    this.$newInputElement.val(this.selectedElement)
            },
            suggestionMatcherTopCities: function(a, b) {
                var d, e, f = this;
                d = [],
                    "" === a ? d = this.suggestionsTopCities : (e = new RegExp(a,"i"),
                        c.each(this.suggestionsTopCities, function(a, b) {
                            e.test(f.normalizeSpecialCharacters(b.value)) && d.push(b)
                        })),
                    b(d)
            },
            suggestionMatcherMoreCities: function(a, b) {
                var d, e, f = this;
                d = [],
                    "" === a ? d = this.suggestionsMoreCities : (e = new RegExp(a,"i"),
                        c.each(this.suggestionsMoreCities, function(a, b) {
                            e.test(f.normalizeSpecialCharacters(b.value)) && d.push(b)
                        })),
                    b(d)
            },
            normalizeSpecialCharacters: function(a) {
                for (var b = "", c = {
                    "á": "a",
                    "Á": "A",
                    "à": "a",
                    "À": "A",
                    "é": "e",
                    "É": "E",
                    "í": "i",
                    "Í": "I",
                    "ó": "o",
                    "Ó": "O",
                    "ú": "u",
                    "Ú": "U",
                    "ü": "u",
                    "Ü": "U",
                    "ñ": "n",
                    "Ñ": "N"
                }, d = 0; d < a.length; d++)
                    b += c[a.charAt(d)] || a.charAt(d);
                return b
            }
        })
    }(window, document, jQuery, _FD),
    function(a, b, c, d) {
        d.EventController = Class({
            "extends": d.Base
        }, {
            __name: "EventController",
            __config: {
                EventController: {
                    eventModalId: "",
                    warningEvent: "",
                    closeEvent: ""
                }
            },
            init: function() {
                this.showEventModal(),
                    this.trackEvent()
            },
            showEventModal: function() {
                var a = c("#" + this.getConfig().eventModalId);
                a.length > 0 && a.modal()
            },
            trackEvent: function() {
                var b = this.getConfig().warningEvent
                    , c = this.getConfig().closeEvent
                    , d = "";
                "undefined" != typeof a.dataLayer && (b || c) && (b && c ? d = "both" : b ? d = b : c && (d = c),
                d && a.dataLayer.push({
                    event: "flood_feature",
                    flood_feature_type: d
                }))
            }
        })
    }(window, document, jQuery, _FD),
    function(a, b, c, d) {
        d.FormController = Class({
            "extends": d.Base
        }, {
            __name: "FormController",
            __config: {
                FormController: {
                    infoPopoverTemplate: '<div class="popover info"><div class="arrow"></div><div class="popover-content"></div></div>',
                    standaloneInfoElement: "span.info",
                    formInfoElement: "input.info, select.info, span.info"
                }
            },
            init: function() {
                this["super"].apply(this, c.merge(["init"], arguments)),
                    this.initInfoFormBlocks(),
                    this.initMaskedFormInputFields()
            },
            initMaskedFormInputFields: function() {
                var a = c("input.js-input-mask[data-mask]");
                a.each(function() {
                    var a = c(this);
                    a.mask(a.data("mask"))
                })
            },
            initInfoFormBlocks: function() {
                var a = {
                    trigger: "hover",
                    html: !0,
                    placement: "top",
                    content: this._getInfoElementContent,
                    template: this.getConfig().infoPopoverTemplate
                };
                c(this.getConfig().standaloneInfoElement).popover(c.extend({}, a, {
                    trigger: "hover"
                })),
                    c(this.getConfig().formInfoElement).popover(c.extend({}, a, {
                        trigger: "focus"
                    }))
            },
            _getInfoElementContent: function() {
                return c(this).parent().find("p.info").html() || !1
            }
        })
    }(window, document, jQuery, _FD),
    function(a, b, c, d) {
        d.LazyImageController = Class({
            "extends": d.Base,
            uses: d.OnloadTrait
        }, {
            __name: "LazyImageController",
            __config: {
                LazyImageController: {
                    forceLoadTimeout: 1e4
                }
            },
            init: function() {
                this["super"].apply(this, c.merge(["init"], arguments)),
                    this.initLazyImages()
            },
            initLazyImages: function() {
                c.extend(c.lazyLoadXT, {
                    forceEvent: "lazyLoadXT.forceLoadAll",
                    onerror: function() {
                        c(this).hide()
                    }
                }),
                    c(a).on("lazycomplete", c.proxy(this.onComplete, this)).lazyLoadXT(),
                    this.onload(this.forceImageLoad)
            },
            onComplete: function() {
                c.publish("STICKY_REFRESH")
            },
            forceImageLoad: function() {
                setTimeout(function() {
                    c(a).trigger("lazyLoadXT.forceLoadAll")
                }, this.getConfig().forceLoadTimeout)
            }
        })
    }(window, document, jQuery, _FD),
    function(a, b, c, d) {
        d.LazyImageSimplifiedController = Class({
            "extends": d.Base,
            uses: d.OnloadTrait
        }, {
            __name: "LazyImageController",
            __config: {
                LazyImageController: {
                    images: "img[data-src]"
                }
            },
            $images: null,
            init: function() {
                this["super"].apply(this, c.merge(["init"], arguments)),
                    this.$images = c(this.getConfig().images),
                0 !== this.$images.length && this.initLazyImages()
            },
            initLazyImages: function() {
                this.$images.each(function() {
                    var a = c(this);
                    a.attr("src", a.data("src"))
                })
            }
        })
    }(window, document, jQuery, _FD),
    function(a, b, c, d) {
        d.LivechatController = Class({
            "extends": d.Base,
            uses: d.OnloadTrait
        }, {
            __name: "LivechatController",
            __config: {
                LivechatController: {
                    license: null,
                    name: "Guest",
                    email: "",
                    element: ".link-livechat",
                    scriptUrl: "//cdn.livechatinc.com/tracking.js"
                }
            },
            livechatLoaded: !1,
            $element: null,
            init: function() {
                this["super"].apply(this, c.merge(["init"], arguments)),
                    this.$element = c(this.getConfig().element),
                    this.onload(function() {
                        setTimeout(c.proxy(this.initLivechat, this), 5e3)
                    })
            },
            initLivechat: function() {
                a.__lc = {
                    license: this.getConfig().license,
                    visitor: {
                        name: this.getConfig().name,
                        email: this.getConfig().email
                    }
                },
                    a.LC_API = a.LC_API || {},
                    a.LC_API.on_after_load = c.proxy(this.setLivechatLoaded, this),
                    $LAB.script(this.getConfig().scriptUrl),
                    this.$element.on("click", c.proxy(this.toggleLivechat, this))
            },
            setLivechatLoaded: function() {
                this.livechatLoaded = !0,
                    this.$element.removeClass("hide")
            },
            toggleLivechat: function(b) {
                "undefined" != typeof b && b.preventDefault(),
                this.livechatLoaded && (a.LC_API.chat_window_minimized() ? a.LC_API.open_chat_window() : a.LC_API.chat_window_maximized() && a.LC_API.minimize_chat_window())
            }
        })
    }(window, document, jQuery, _FD),
    function(a, b, c, d) {
        d.LocationSearchController = Class({
            "extends": d.Base,
            uses: [d.AjaxTrait, d.LoadingIndicatorTrait, d.TrackingTrait]
        }, {
            __name: "LocationSearchController",
            __config: {
                LocationSearchController: {
                    parentLoadingElement: ".location-search-ajax-container",
                    locationSearchContainerElement: ".js-location-search",
                    formElement: ".js-location-search form",
                    elements: {
                        area: {
                            selector: '.area input[type!="hidden"]'
                        },
                        address: {
                            selector: '.address input[type!="hidden"]'
                        },
                        postcode: {
                            selector: '.postcode input[type!="hidden"]'
                        }
                    },
                    containerMessage: "> .container:not(.arrow-more-info-container)",
                    cityDropdownClass: ".city select",
                    rateLimitWait: 1e3,
                    enableAreaDropdown: !1,
                    areaSuggestionUrl: "",
                    checkMissingAddressFieldsUrl: "",
                    backdropTime: 150,
                    backdropHtml: '<div class="modal-backdrop fade force-select-location"></div>',
                    backdropClass: ".modal-backdrop",
                    vendorTypeSelector: ".vendor-type",
                    vendorTypeLabel: ".vendor-type > .label",
                    vendorTypeContainer: ".vendor-type__options-container",
                    vendorTypeOptions: ".vendor-type__options-container li",
                    unreachableToVendorElement: ".is-unreachable-to-vendor",
                    locationBackdropElement: ".location-backdrop",
                    locationBoxDetailPage: ".js-change-location-box-add-target.vendor-detail",
                    locationTrackingIdElement: "#tracking_id",
                    submitButtonText: "",
                    missingFieldsElement: ".location-missing-fields"
                }
            },
            Backdrop: null,
            locationSelectedFromDropdown: !1,
            selectedLocationFromDropdown: null,
            areaSuggestions: [],
            suggestionEngineForAreas: null,
            isRedirectedToDeliveringOutlet: !1,
            checkMissingAddressFields: !0,
            init: function() {
                this["super"].apply(this, c.merge(["init"], arguments)),
                    this.Backdrop = new e(this.getConfig().backdropTime,this.getConfig().backdropHtml,this.getConfig().backdropClass),
                    c(this.getConfig().formElement).each(c.proxy(function(a, b) {
                        this.bindLocationSearch(c(b))
                    }, this)),
                    this.areaDropdownFeatureInit(),
                    this.createTypeaheadFromDropdown(),
                    c.subscribe("CHANGE_LOCATION_NOPOPUP_LOADED", c.proxy(function(a) {
                        this.bindLocationSearch(a.$targetDomElement.find("form")),
                            setTimeout(c.proxy(function() {
                                this.areaDropdownFeatureInit(),
                                    this.createTypeaheadFromDropdown()
                            }, this), 10)
                    }, this)),
                    c.subscribe("ADD_TO_CART_WITHOUT_VALID_LOCATION_ATTEMPT", c.proxy(this.addToCartWithoutValidLocationAttempt, this)),
                    c(this.getConfig().vendorTypeSelector).on("click", c.proxy(this.toggleVendorTypeContainerVisibility, this)),
                    c(this.getConfig().vendorTypeOptions).on("click", c.proxy(this.handleVendorTypeOptionSelection, this)),
                    this.initLocationErrorMessageSrcoll(),
                    this.initVendorCode(),
                    this.removeSearchFormOverlay(),
                    this.getConfig().submitButtonText = c("#button").text()
            },
            initVendorCode: function() {
                if (this.vendorCode = null,
                        this.isTrackingEnabled()) {
                    var b = a.tracking.getDataLayerObjectName();
                    a[b] && a[b][0] && a[b][0].vendor_code && (this.vendorCode = a[b][0].vendor_code)
                }
            },
            centerLocationErrorPopup: function(b, d) {
                this.vendorCode && this.pushTrackingEvent("enterLocation");
                var e = c(a).height() - b.outerHeight(!0);
                if (b.addClass("hide"),
                        b.css({
                            marginTop: e,
                            opacity: 0
                        }),
                        b.removeClass("hide"),
                        b.find(".fixed-for-modal__close-button").remove(),
                    0 === c(".fixed-for-modal__close-button").length) {
                    var f = c('<div class="fixed-for-modal__close-button">&times;</div>');
                    f.on("click", c.proxy(function() {
                        this.showErrorMessageModal = !1,
                            this.disappearBackdropForErrorPopup(b, d),
                        this.vendorCode && this.pushTrackingEvent("enterLocationClose", {
                            location_action: "close"
                        })
                    }, this)),
                        b.find(".container").first().append(f);
                    var g = c(this.getConfig().locationBoxDetailPage);
                    "" !== g.html() && (g.find(".is-unreachable-to-vendor").css({
                        position: "fixed"
                    }),
                        g.css({
                            height: "300px"
                        }))
                }
                a.setTimeout(function() {
                    var d = b.outerHeight()
                        , e = (c(a).height() - d) / 2;
                    b.animate({
                        marginTop: e,
                        opacity: 1
                    })
                }, 1)
            },
            uncenterLocationErrorPopup: function(b) {
                var d = c(a).height() - b.outerHeight(!0)
                    , e = c(this.getConfig().locationBoxDetailPage);
                "" === e.html() ? (b.addClass("removing-fixed-for-modal"),
                    b.animate({
                        marginTop: d,
                        opacity: 0
                    }, {
                        complete: function() {
                            b.removeClass("removing-fixed-for-modal"),
                                b.css({
                                    marginTop: "auto",
                                    opacity: 1
                                })
                        }
                    })) : b.css({
                    marginTop: "auto",
                    opacity: 1
                }),
                    b.removeClass("fixed-for-modal"),
                    b.removeClass("fixed"),
                    c(".fixed-for-modal__close-button").remove()
            },
            disappearBackdropForErrorPopup: function(a, b) {
                var d = c(this.getConfig().locationBoxDetailPage);
                "" === d.html() ? (b.addClass("hiding-backdrop"),
                    b.animate({
                        opacity: 0
                    }, function() {
                        b.addClass("hide"),
                            b.removeClass("hiding-backdrop")
                    })) : (b.addClass("hide"),
                    c(".cart-container--vendor").css({
                        opacity: 1
                    }),
                    d.css({
                        height: "auto"
                    }),
                    d.find(".is-unreachable-to-vendor").css({
                        position: "relative"
                    })),
                a.hasClass("fixed-for-modal") && this.uncenterLocationErrorPopup(a)
            },
            initLocationErrorMessageSrcoll: function() {
                this.showErrorMessageModal = !0;
                var b = c(this.getConfig().unreachableToVendorElement);
                if (0 !== b.length) {
                    var d = c(this.getConfig().locationBackdropElement);
                    d.on("click", c.proxy(function() {
                        this.showErrorMessageModal = !1,
                            this.disappearBackdropForErrorPopup(b, d)
                    }, this));
                    var e = b.outerHeight(!0)
                        , f = b.offset().top + e
                        , g = f + 10
                        , h = g + 600
                        , i = h + 600;
                    c(a).scroll(c.proxy(function() {
                        if (this.showErrorMessageModal && !b.hasClass("fixed-forever") && c(".vendor-tabs__menu").hasClass("active")) {
                            var e = c(a).scrollTop();
                            e > i && (d.hasClass("hide") && d.removeClass("hide").css({
                                opacity: 0
                            }).animate({
                                opacity: 1
                            }),
                            b.hasClass("fixed-for-modal") || (b.addClass("fixed").addClass("fixed-for-modal"),
                                this.centerLocationErrorPopup(b, d)))
                        }
                    }, this))
                }
            },
            toggleVendorTypeContainerVisibility: function() {
                c(this.getConfig().vendorTypeContainer).toggleClass("active")
            },
            handleVendorTypeOptionSelection: function(a) {
                var b = c(a.currentTarget);
                c(this.getConfig().vendorTypeOptions).removeClass("active"),
                    b.addClass("active"),
                    c(this.getConfig().vendorTypeLabel).html(b.data("label")),
                    c(this.getConfig().vendorTypeContainer).removeClass("active")
            },
            areaDropdownFeatureInit: function() {
                var a, b = c(this.getConfig().cityDropdownClass);
                a = this.getConfig().enableAreaDropdown ? this.bindAreaDropdownCityChange : this.bindClearAreaInputTypeahead,
                    b.on("change", c.proxy(a, this))
            },
            createTypeaheadFromDropdown: function() {
                var a = c(this.getConfig().cityDropdownClass);
                a.length > 0 && c.publish("CREATE_TYPEAHEAD_FROM_DROPDOWN", [{
                    $dropdown: a,
                    callbackOnElementSelected: c.proxy(function(a) {
                        this.clearAreaTypeahead(),
                            this.loadAreaSuggestions(a)
                    }, this)
                }])
            },
            bindAreaDropdownCityChange: function(a) {
                var b, d = c(a.currentTarget);
                d.length && (b = d.val()) && b.length && this.loadAreaSuggestions(parseInt(b, 10)),
                    this.clearAreaTypeahead()
            },
            bindClearAreaInputTypeahead: function() {
                this.clearAreaTypeahead()
            },
            bindLocationSearch: function(a) {
                a.on("submit", c.proxy(this.handleFormSubmit, this)),
                    c.each(this.getConfig().elements, c.proxy(function(b, c) {
                        var d = a.find(c.selector);
                        this.initLocationSearchElement(a, d)
                    }, this))
            },
            handleFormSubmit: function(b) {
                var d = c(b.currentTarget)
                    , e = d.parents(this.getConfig().parentLoadingElement)
                    , f = c("#streetNumber")
                    , g = !0
                    , h = !1;
                this.removeMissingFieldsElement(),
                "undefined" != typeof a.isStreetNumberRequired && (h = this.getConfig().isStreetNumberRequired || a.isStreetNumberRequired),
                0 === e.length && (e = d),
                f.length > 0 && "" === f.val() && h && (g = !1);
                var i = d.find(".tt-input").last();
                if (("" === i.val() || "string" == typeof this.selectedLocationFromDropdown && this.selectedLocationFromDropdown !== i.val()) && (this.locationSelectedFromDropdown = !1),
                    this.locationSelectedFromDropdown === !1 || g === !1)
                    return b.preventDefault(),
                        i.trigger("focus"),
                        void this.showPopoverSuggestionNotSelected();
                if (this.vendorCode && this.pushTrackingEvent("enterLocationSubmit", {
                        location_action: "submit"
                    }),
                        this.showButtonSpinner(),
                        this.checkMissingAddressFields) {
                    var j = c(this.getConfig().locationTrackingIdElement).val();
                    return this.ajax({
                        url: this.getConfig().checkMissingAddressFieldsUrl,
                        dataType: "json",
                        data: {
                            tracking_id: j
                        }
                    }).done(c.proxy(function(a) {
                        "ok" === a.status ? (this.checkMissingAddressFields = !1,
                            d.trigger("submit")) : (c(this.getConfig().locationSearchContainerElement).append(c(a.html)),
                            c(this.getConfig().missingFieldsElement).hide().fadeIn(),
                            this.hideButtonSpinner())
                    }, this)).fail(c.proxy(function() {
                        this.checkMissingAddressFields = !1,
                            d.trigger("submit")
                    }, this)),
                        !1
                }
                var k = d.parents("[data-form-action]");
                if (0 === k.length)
                    return !0;
                this.startElementLoading(e);
                var l = d.serializeArray();
                return this.ajax({
                    url: k.attr("data-form-action"),
                    data: l,
                    type: "POST",
                    beforeSend: function() {
                        this.locationSelectedFromDropdown = !1
                    }
                }).done(this.redirectToDeliveringOutlet).done(function(a) {
                    if (!this.isRedirectedToDeliveringOutlet) {
                        var b = c(a.html);
                        this.prefillAjaxResponseForm(b, l),
                            c.publish("LOCATION_CHANGED", [a.hasValidLocation]),
                            c.publish("CHANGE_LOCATION_LINK_CONTROLLER_INIT")
                    }
                }).always(function() {
                    this.isRedirectedToDeliveringOutlet || this.Backdrop.close()
                }),
                    !1
            },
            showPopoverSuggestionNotSelected: function() {
                var b = this
                    , d = c("#streetNumber")
                    , e = "";
                "undefined" != typeof a.isStreetNumberRequired && a.isStreetNumberRequired && (e = this.getConfig().streetNumberRequiredMessage || a.streetNumberRequiredMessage),
                    c.each(this.getConfig().elements, function(a, d) {
                        var e = c(d.selector);
                        e && "" === e.filter(".tt-input").val() && b.showPopover(e, b.getConfig().msgSelectAreaFromDropdown)
                    }),
                d.length > 0 && "" === d.val() && "" !== e && this.showPopover(d, e)
            },
            prefillAjaxResponseForm: function(a, b) {
                var d, e = ["_token"];
                c.each(b, function(b, f) {
                    "undefined" == typeof f.name || "undefined" == typeof f.value || c.inArray(f.name, e) > -1 || (d = a.find('[name="' + f.name + '"]'),
                    0 !== d.length && d.each(function(a, b) {
                        c(b).val(f.value)
                    }))
                })
            },
            redirectToDeliveringOutlet: function(b) {
                "undefined" != typeof b.vendorIsNotDeliveringButOutletIs && "undefined" != typeof b.deliveringOutletUrl && b.vendorIsNotDeliveringButOutletIs && b.deliveringOutletUrl ? (a.location = b.deliveringOutletUrl,
                    this.isRedirectedToDeliveringOutlet = !0) : this.isRedirectedToDeliveringOutlet = !1
            },
            showPopover: function(b, c) {
                b.popover({
                    title: "",
                    content: c,
                    trigger: "manual",
                    placement: "top",
                    show: !0
                }),
                    b.popover("show"),
                    a.setTimeout(function() {
                        b.popover("destroy")
                    }, 4e3)
            },
            initLocationSearchElement: function(a, b) {
                0 !== b.length && (b.val() && (this.locationSelectedFromDropdown = !0,
                    this.selectedLocationFromDropdown = b.val()),
                    this.createTypeaheadOnElement(a, b),
                    this.bindOnTypeaheadOptionSelected(a, b))
            },
            createTypeaheadOnElement: function(a, b) {
                var d = b.data("min-length");
                d = !!c.isNumeric(d) && d;
                var e = function(a) {
                    var b = c(a.currentTarget)
                        , d = c.Event("keydown");
                    return d.keyCode = d.which = 40,
                        b.trigger(d),
                        !0
                };
                if (this.getConfig().enableAreaDropdown)
                    b.on("focus", function() {
                        b.attr("placeholder", "").val("").typeahead("val", "")
                    }),
                        b.typeahead({
                            highlight: !0,
                            hint: !0,
                            minLength: d === !1 ? 0 : d,
                            autoselect: !0
                        }, {
                            name: b.attr("name"),
                            displayKey: "value",
                            source: c.proxy(this.suggestionAreaMatcher, this)
                        }).on("focus", c.proxy(function(a) {
                            this.shouldIgnoreKey(a.which) || (this.locationSelectedFromDropdown = !1),
                                e(a)
                        }, this));
                else {
                    var f = this.createSuggestionEngine(a, b)
                        , g = b.attr("name");
                    f.initialize(),
                        b.typeahead({
                            highlight: !0,
                            hint: !0,
                            minLength: d === !1 ? 2 : d,
                            autoselect: !0
                        }, {
                            name: g,
                            displayKey: function(a) {
                                var b = a.value;
                                return "undefined" != typeof a.fillSearchFormOnSelect[g] && (b = a.fillSearchFormOnSelect[g]),
                                    b
                            },
                            source: f.ttAdapter(),
                            templates: {
                                suggestion: function(a) {
                                    return "<p>" + a.value + "</p>"
                                }
                            }
                        });
                    var h = function(a) {
                        var b = c(a.currentTarget);
                        b.data("originalValue", b.val())
                    };
                    b.one("focus", c.proxy(h, this)).on("focus", c.proxy(function(a) {
                        this.locationSelectedFromDropdown === !1 && e(a)
                    }, this)).on("typeahead:selected", c.proxy(h, this)).on("keydown", c.proxy(function(b) {
                        var d = c(b.currentTarget)
                            , e = d.data("originalValue");
                        if ("undefined" != typeof e && !this.shouldIgnoreKey(b.which)) {
                            var f = a.find('[name="lat"], [name="lng"]');
                            f.length > 0 && f.val(""),
                                d.parents("form").first().find('input[type="hidden"]').filter(':not([name="_token"])').val("")
                        }
                    }, this))
                }
            },
            selectDopdownElement: function(a) {
                c.each(a, c.proxy(function(a, b) {
                    c("#" + a).val(b)
                }, this))
            },
            clearAreaTypeahead: function() {
                c(this.getConfig().elements.address.selector).val("").typeahead("val", ""),
                    c(this.getConfig().elements.area.selector).val("").typeahead("val", "")
            },
            suggestionAreaMatcher: function(a, b) {
                var d, e, f = this;
                d = [],
                    "" === a ? d = this.areaSuggestions : (e = new RegExp(a,"i"),
                        c.each(this.areaSuggestions, function(a, b) {
                            e.test(b.value) && d.push(b)
                        }),
                    1 === d.length && f.selectIfExactMatch(d[0], a)),
                    b(d)
            },
            selectIfExactMatch: function(a, b) {
                a.value.toLowerCase() === b.toLowerCase() || "undefined" != typeof a.fillSearchFormOnSelect.postcode && a.fillSearchFormOnSelect.postcode && a.fillSearchFormOnSelect.postcode.toLowerCase() === b.toLowerCase() ? (this.locationSelectedFromDropdown = !0,
                    this.selectedLocationFromDropdown = a.value,
                    this.selectDopdownElement(a.fillSearchFormOnSelect)) : this.locationSelectedFromDropdown = !1
            },
            createSuggestionEngine: function(a, b) {
                var d, e = null;
                return new Bloodhound({
                    datumTokenizer: Bloodhound.tokenizers.obj.whitespace("value"),
                    queryTokenizer: Bloodhound.tokenizers.whitespace,
                    limit: 100,
                    remote: {
                        url: this.getConfig().suggestionUrl,
                        rateLimitWait: this.getConfig().rateLimitWait,
                        replace: c.proxy(function(b) {
                            var c = a.serialize();
                            return b += /\?/.test(b) ? "&" : "?",
                                b += c
                        }, this),
                        ajax: {
                            beforeSend: c.proxy(function(a) {
                                null !== e && e.abort(),
                                    e = a,
                                    d = this.showSpinner(b),
                                    this.locationSelectedFromDropdown = !1
                            }, this),
                            success: c.proxy(function(c) {
                                this.handleSuggestionEngineResponse(a, b, c)
                            }, this),
                            error: c.proxy(function() {}, this),
                            complete: c.proxy(function() {
                                this.stopElementLoading(d)
                            }, this)
                        }
                    }
                })
            },
            showSpinner: function(a) {
                var b = a.parent();
                return this.startElementLoading(b, {}, {
                    left: b.width() - 30 + "px"
                })
            },
            handleSuggestionEngineResponse: function(a, b, c) {
                0 === c.length ? this.showPopover(b, this.getConfig().msgNoAreasFound) : this.selectIfExactMatch(c[0], b.val())
            },
            bindOnTypeaheadOptionSelected: function(a, b) {
                b.on("typeahead:selected typeahead:autocompleted", c.proxy(this.handleTypeaheadOptionSelected, this, a, b))
            },
            handleTypeaheadOptionSelected: function(a, b, d, e) {
                this.locationSelectedFromDropdown = !0,
                    this.selectedLocationFromDropdown = b.val(),
                    c.each(e.fillSearchFormOnSelect, function(c, d) {
                        c !== b.attr("name") && a.find('input[name="' + c + '"]').val(d)
                    })
            },
            isOnVendorDetailPage: function() {
                return !!c("body").attr("data-is-on-vendor-detail")
            },
            isOnVendorDetailChainPage: function() {
                return !!c("body").attr("data-is-on-vendor-detail-chain")
            },
            loadAreaSuggestions: function(a) {
                var b = this.showSpinner(c(this.getConfig().elements.area.selector))
                    , d = this.getConfig().areaSuggestionUrl.replace("CITY_ID", a);
                this.getConfig().enableAreaDropdown && (d += "?natural-sort=true"),
                    c.get(d).success(c.proxy(function(a) {
                        this.areaSuggestions = a
                    }, this)).done(c.proxy(function() {
                        this.stopElementLoading(b)
                    }, this))
            },
            addToCartWithoutValidLocationAttempt: function() {
                var a = c(".is-unreachable-to-vendor")
                    , b = c(".location-backdrop");
                a.addClass("fixed"),
                    a.addClass("fixed-for-modal"),
                    a.addClass("fixed-forever"),
                b.hasClass("hide") && b.removeClass("hide").css({
                    opacity: 0
                }).animate({
                    opacity: 1
                });
                var d = c(this.getConfig().locationBoxDetailPage);
                return "" !== d.html() && c(".cart-container--vendor").css({
                    opacity: .9
                }),
                    this.centerLocationErrorPopup(a, b),
                    !1
            },
            shake: function() {
                var a = c(this.getConfig().parentLoadingElement).find(this.getConfig().containerMessage);
                setTimeout(function() {
                    a.addClass("shake")
                }, 1),
                    setTimeout(function() {
                        a.removeClass("shake")
                    }, 2e3)
            },
            shouldIgnoreKey: function(a) {
                return 20 === a || 16 === a || 9 === a || 27 === a || 17 === a || 91 === a || 19 === a || 18 === a || 93 === a || a >= 35 && a <= 40 || 45 === a || a >= 33 && a <= 34 || a >= 112 && a <= 123 || a >= 144 && a <= 145 || 13 === a
            },
            showButtonSpinner: function() {
                c("#find-restaurant-spinner").show(),
                    c(".location-search-inner .find-food").addClass("searching"),
                    c("#button").html("")
            },
            hideButtonSpinner: function() {
                c("#find-restaurant-spinner").hide(),
                    c(".location-search-inner .find-food").removeClass("searching"),
                    c("#button").html(this.getConfig().submitButtonText)
            },
            removeSearchFormOverlay: function() {
                c(".overlay-before-ready").removeClass("overlay-before-ready")
            },
            removeMissingFieldsElement: function() {
                c(this.getConfig().missingFieldsElement).remove()
            }
        });
        var e = Class({
            backdropTime: 150,
            backdropHtml: "",
            backdropClass: ".modal-backdrop",
            __construct: function(a, b, c) {
                return this.backdropTime = a || this.backdropTime,
                    this.backdropHtml = b || this.backdropHtml,
                    this.backdropClass = c || this.backdropClass,
                    {
                        open: this.open,
                        close: this.close
                    }
            },
            open: function() {
                var b = this
                    , d = b._createBackdrop();
                d.hasClass("in") || a.setTimeout(function() {
                    d.show().addClass("in").on("click", c.proxy(b.close, b))
                }, b.backdropTime)
            },
            close: function() {
                var a = c(this.backdropClass);
                a.hasClass("in") && a.hide().removeClass("in")
            },
            _createBackdrop: function() {
                var a = c(this.backdropClass);
                return 0 === a.length && (a = c(this.backdropHtml).hide(),
                    c("body").append(a)),
                    a
            }
        })
    }(window, document, jQuery, _FD),
    function(a, b, c, d) {
        d.LoginRegisterTabsController = Class({
            "extends": d.Base
        }, {
            __name: "LoginRegisterTabsController",
            __config: {
                LoginRegisterTabsController: {
                    loginTabs: ".login-tabs",
                    activeTabFromUrl: "a.js-tab[href=" + a.location.hash.replace(/[^\w\-#]/gi, "") + "]",
                    tabLink: 'a.js-tab[href^="#"]'
                }
            },
            $loginTabs: null,
            isSignUpTabClicked: !1,
            init: function() {
                this["super"].apply(this, c.merge(["init"], arguments)),
                    this.activeTabFromUrl = this.getConfig().activeTabFromUrl,
                    this.$loginTabs = c(this.getConfig().loginTabs),
                0 !== this.$loginTabs.length && (this.bindTabChange(),
                    this.autoSelectTabFromUrlAnchor(),
                    this.bindHashChange())
            },
            autoSelectTabFromUrlAnchor: function() {
                if (a.location.hash)
                    try {
                        var b;
                        this.$loginTabs.length > 0 && (b = this.$loginTabs.find(this.activeTabFromUrl)),
                        b.length && (b.tab("show"),
                            this.trackNotModalSignUpOnLoad())
                    } catch (c) {}
            },
            bindTabChange: function() {
                this.$loginTabs && this.$loginTabs.find(this.getConfig().tabLink).on("shown.bs.tab", function() {
                    c.publish("STICKY_REFRESH")
                })
            },
            bindHashChange: function() {
                var b = this;
                c(a).on("hashchange", function() {
                    b.activeTabFromUrl = "a[href=" + a.location.hash.replace(/[^\w\-#]/gi, "") + "]",
                    b.$loginTabs && b.$loginTabs.find("li").removeClass("active"),
                        b.autoSelectTabFromUrlAnchor()
                })
            },
            trackNotModalSignUpOnLoad: function() {
                var b = a.location.pathname
                    , c = a.location.hash;
                this.isSignUpTabClicked || "/login" !== b || "#sign-up" !== c || "object" != typeof a.dataLayer || (this.isSignUpTabClicked = !0,
                    a.dataLayer.push({
                        event: "user_account",
                        user_account: "signUp",
                        user_account_flow: "page"
                    }))
            }
        })
    }(window, document, jQuery, _FD),
    function(a, b, c, d) {
        d.MiddlewareIntegrationController = Class({
            "extends": d.Base,
            uses: [d.AjaxTrait, d.LoadingIndicatorTrait]
        }, {
            __name: "MiddlewareIntegrationController",
            __config: {
                MiddlewareIntegrationController: {
                    createPopup: !0,
                    autoPopup: !1,
                    form: "form",
                    container: ".custom-location.middleware-integration",
                    inputWrapper: ".js-input-wrapper",
                    switchLocationContainer: ".switch-location",
                    currentLocationContainer: ".current-location"
                }
            },
            $container: null,
            $switchLocationContainer: null,
            $currentLocationContainer: null,
            $modal: null,
            $locationWrapper: null,
            init: function() {
                this.$container = c(this.getConfig().container),
                0 !== this.$container.length && (this.$switchLocationContainer = this.$container.find(this.getConfig().switchLocationContainer),
                    this.$currentLocationContainer = this.$container.find(this.getConfig().currentLocationContainer),
                this.getConfig().createPopup && this.createModal(),
                    this.bindLocation(),
                    this.bindChangeLocation(),
                this.getConfig().createPopup && this.getConfig().autoPopup && this.showModal(),
                    c.subscribe("ADD_TO_CART_WITHOUT_VALID_LOCATION_ATTEMPT", c.proxy(this.showModal, this)))
            },
            bindChangeLocation: function() {
                c(".change-location").on("click", c.proxy(this.showModal, this))
            },
            createModal: function() {
                var a = '<div class="modal fade custom-location-modal middleware-integration"><div class="modal-dialog"><div class="modal-content"><div class="modal-body"><div class="custom-location middleware-integration"></div></div></div></div></div>';
                this.$modal = c(a),
                    c("body").append(this.$modal),
                    this.$modal.modal("hide"),
                    this.$switchLocationContainer.wrap('<div class="custom-location-on-page-wrapper"></div>'),
                    this.$locationWrapper = c(".custom-location-on-page-wrapper")
            },
            showModal: function() {
                return this.$modal.find(this.getConfig().container).append(this.$switchLocationContainer.detach()),
                    this.$modal.modal("show"),
                    !1
            },
            bindLocation: function() {
                var a = this.$switchLocationContainer.find(this.getConfig().form);
                a.find("select").on("change", c.proxy(this.changeSelectBox, this)),
                    a.find("button").on("click", c.proxy(this.updateLocationForm, this))
            },
            changeSelectBox: function(a) {
                var b = this.$switchLocationContainer.find(this.getConfig().form)
                    , d = c(a.target)
                    , e = d.data("index");
                b.find(this.getConfig().inputWrapper).each(function(a, b) {
                    var d = c(b);
                    d.data("index") > e && d.remove()
                }),
                    this.updateLocationForm(a)
            },
            updateLocationForm: function(a) {
                var b = this.$switchLocationContainer.find(this.getConfig().form)
                    , d = b.serializeArray();
                "undefined" != typeof a && (a.preventDefault(),
                    d.push({
                        name: b.find("button").attr("name"),
                        value: 1
                    })),
                    this.startLoadingIndicator(),
                    this.ajax({
                        url: b.attr("action"),
                        type: "POST",
                        data: d
                    }).done(function(a) {
                        this.$switchLocationContainer.html(c(a.html).find(this.getConfig().switchLocationContainer).html())
                    }).done(this.bindLocation).always(function(a) {
                        a && "undefined" != typeof a.status && "redirect" === a.status || this.stopLoadingIndicator()
                    })
            },
            startLoadingIndicator: function() {
                this.startElementLoading(this.$switchLocationContainer)
            },
            stopLoadingIndicator: function() {
                this.stopElementLoading(this.$switchLocationContainer)
            }
        })
    }(window, document, jQuery, _FD),
    function(a, b, c, d) {
        d.MobileAppController = Class({
            "extends": d.Base
        }, {
            __name: "MobileAppController",
            __config: {
                MobileAppController: {
                    container: ".home-mobile",
                    mobileAppsContainer: ".mobile-apps",
                    backgroundImageContainer: ".homepage-area-selection-container",
                    iconElement: ".app-icon",
                    iosIcon: ".app-icon-ios",
                    androidIcon: ".app-icon-android",
                    isIosDevice: null,
                    isAndroidDevice: null
                }
            },
            $container: null,
            $mobileAppsContainer: null,
            init: function() {
                this["super"].apply(this, c.merge(["init"], arguments)),
                    this.$container = c(this.getConfig().container),
                    this.$mobileAppsContainer = c(this.getConfig().mobileAppsContainer),
                0 !== this.$container.length && this.initMobileApps()
            },
            initMobileApps: function() {
                0 !== this.$mobileAppsContainer.length && (this.$mobileAppsContainer.show(),
                    this.getConfig().isIosDevice ? c(this.getConfig().iosIcon).show() : this.getConfig().isAndroidDevice && c(this.getConfig().androidIcon).show(),
                0 === c(this.getConfig().iconElement + ":visible").length && this.$mobileAppsContainer.hide());
            }
        })
    }(window, document, jQuery, _FD),
    function(a, b, c, d) {
        d.MobileController = Class({
            "extends": d.Base,
            uses: d.OnloadTrait
        }, {
            __name: "MobileController",
            __config: {
                LivechatController: {}
            },
            viewportMeta: void 0,
            bodyScrollTop: !1,
            init: function() {
                this["super"].apply(this, c.merge(["init"], arguments)),
                    this.viewportMeta = b.querySelector && b.querySelector('meta[name="viewport"]'),
                    this.initMobile()
            },
            initMobile: function() {
                this.mobileClassSwitch(),
                    this.scaleFix(),
                    this.iosModalPositionFix(),
                    this.iosPreventZoomFix(),
                    this.hideUrlBarOnLoad(),
                    this.ieMobileViewportFix()
            },
            mobileClassSwitch: function() {
                c("html").removeClass("desktop").addClass("mobile")
            },
            getScrollTop: function() {
                return a.pageYOffset || "CSS1Compat" === b.compatMode && b.documentElement.scrollTop || b.body.scrollTop || 0
            },
            hideUrlBar: function() {
                location.hash || this.bodyScrollTop === !1 || a.scrollTo(0, 1 === this.bodyScrollTop ? 0 : 1)
            },
            hideUrlBarOnLoad: function() {
                a.navigator.standalone || location.hash || !a.addEventListener || (a.scrollTo(0, 0),
                    this.bodyScrollTop = this.getScrollTop(),
                this.getScrollTop() < 20 && this.hideUrlBar())
            },
            scaleFix: function() {
                this.viewportMeta && this.deviceIsIos() && !this.deviceIsOperaMini() && !this.deviceIsIeMobile10() && (this.viewportMeta.content = "width=device-width, minimum-scale=1.0, maximum-scale=1.0",
                    c(b).on("gesturestart", c.proxy(this.gestureStart, this)))
            },
            gestureStart: function() {
                this.viewportMeta.content = "width=device-width, minimum-scale=0.25, maximum-scale=1.6"
            },
            iosPreventZoomFix: function() {
                if (this.viewportMeta && this.deviceIsIos()) {
                    var a = "width=device-width, initial-scale=1, maximum-scale="
                        , b = c.proxy(function() {
                        this.viewportMeta.content = a + "10"
                    }, this)
                        , d = c.proxy(function() {
                        this.viewportMeta.content = a + "1"
                    }, this);
                    c("body").on("focus", "input, select, textarea", b).on("blur", "input, select, textarea", d)
                }
            },
            iosModalPositionFix: function() {
                this.deviceIsIos() && c("body").on("shown.bs.modal", c.proxy(function(d) {
                    c(d.currentTarget).css({
                        position: "absolute",
                        marginTop: c(a).scrollTop() + "px",
                        bottom: "auto"
                    }),
                        c(".modal-backdrop").css({
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: Math.max(b.body.scrollHeight, b.body.offsetHeight, b.body.clientHeight, b.documentElement.scrollHeight, b.documentElement.offsetHeight, b.documentElement.clientHeight) + "px"
                        })
                }, this))
            },
            ieMobileViewportFix: function() {
                if (this.deviceIsIeMobile10()) {
                    var a = b.createElement("style");
                    a.appendChild(b.createTextNode("@-ms-viewport{width:auto!important}")),
                        b.getElementsByTagName("head")[0].appendChild(a)
                }
            },
            deviceIsIos: function() {
                return !!navigator.platform.match(/iPad|iPhone|iPod/i)
            },
            deviceIsOperaMini: function() {
                return !(!navigator.userAgent.match(/Opera Mini/i) && !navigator.userAgent.match(/OPiOS\//i))
            },
            deviceIsIeMobile10: function() {
                return !!navigator.userAgent.match(/IEMobile\/10\.0/)
            }
        })
    }(window, document, jQuery, _FD),
    function(a, b, c, d) {
        d.MobileMenuController = Class({
            "extends": d.Base,
            uses: [d.DirectionTrait]
        }, {
            __name: "MobileMenuController",
            __config: {
                MobileMenuController: {
                    container: ".mobile-side-menu",
                    menuToggleElement: ".mobile-menu__menu-toggle",
                    containerElement: ".mobile-side-menu__container",
                    headerElement: ".mobile-side-menu__header",
                    menuContainerElement: ".mobile-side-menu__menu",
                    footerElement: ".mobile-side-menu__footer"
                }
            },
            $container: null,
            $menuToggleElement: null,
            $containerElement: null,
            $headerElement: null,
            $menuContainerElement: null,
            $footerElement: null,
            init: function() {
                this["super"].apply(this, c.merge(["init"], arguments)),
                    this.$container = c(this.getConfig().container),
                0 !== this.$container.length && (this.$menuToggleElement = c(this.getConfig().menuToggleElement),
                    this.$headerElement = c(this.getConfig().headerElement),
                    this.$containerElement = c(this.getConfig().containerElement),
                    this.$menuContainerElement = c(this.getConfig().menuContainerElement),
                    this.$footerElement = c(this.getConfig().footerElement),
                    this.initMenu())
            },
            initMenu: function() {
                this.setMenuMaximiumHeight(),
                    this.$menuToggleElement.on("click", c.proxy(this.showMenu, this)),
                    this.$container.on("click", c.proxy(this.hideMenu, this)).on("click", "#sw-lang", function(b) {
                        this.onchange = function() {
                            a.location.href = this.value
                        }
                            ,
                            b.stopPropagation()
                    }),
                    this.$container.on(this.getSwipeEvent(), c.proxy(this.hideMenu, this))
            },
            getSwipeEvent: function() {
                return "swipe" + (this.isDirectionRTL() ? "right" : "left")
            },
            showMenu: function() {
                this.$container.fadeIn(),
                    this.setCssProperty(this.$containerElement, "marginLeft", -this.$container.width());
                var a = {};
                a[this.isDirectionRTL() ? "marginRight" : "marginLeft"] = 0,
                    this.$containerElement.animate(a)
            },
            hideMenu: function() {
                this.$container.fadeOut();
                var a = {};
                a[this.isDirectionRTL() ? "marginRight" : "marginLeft"] = -this.$container.width(),
                    this.$containerElement.animate(a)
            },
            setMenuMaximiumHeight: function() {
                this.$container.show(),
                    this.setCssProperty(this.$container, "marginLeft", -1e3);
                var b = c(a).height()
                    , d = this.$headerElement.height()
                    , e = this.$footerElement.height();
                this.$menuContainerElement.css({
                    maxHeight: b - d - e
                }),
                    this.setCssProperty(this.$menuContainerElement, "marginLeft", 0),
                    this.$container.hide(),
                    this.setCssProperty(this.$container, "marginLeft", 0)
            }
        })
    }(window, document, jQuery, _FD),
    function(a, b, c, d) {
        d.NewsletterController = Class({
            "extends": d.Base,
            uses: [d.AjaxTrait, d.LoadingIndicatorTrait]
        }, {
            __name: "NewsletterController",
            __config: {
                NewsletterController: {
                    container: ".js-newsletter",
                    termsAndConditionElement: "#newsletter_subscribe_termsAndConditionsAccepted",
                    form: "form"
                }
            },
            $container: null,
            init: function() {
                this["super"].apply(this, c.merge(["init"], arguments)),
                    this.bindNewsletter()
            },
            bindNewsletter: function() {
                this.$container = c(this.getConfig().container),
                    this.$container.on("submit", this.getConfig().form, c.proxy(this.loadAndBindNewsletter, this)),
                    c(this.getConfig().termsAndConditionElement).prop("checked", !0)
            },
            loadAndBindNewsletter: function(a) {
                a.preventDefault();
                var b = c(a.currentTarget);
                this.startElementLoading(this.$container),
                    this.ajax({
                        url: b.attr("action"),
                        type: "POST",
                        data: b.serialize()
                    }).done(function(a) {
                        this.$container.replaceWith(a.html)
                    }).done(this.bindNewsletter).always(function() {
                        this.stopElementLoading(this.$container)
                    })
            }
        })
    }(window, document, jQuery, _FD),
    function(a, b, c, d) {
        d.OrderStepsController = Class({
            "extends": d.Base,
            uses: d.OnloadTrait
        }, {
            __name: "OrderStepsController",
            __config: {
                OrderStepsController: {
                    container: ".order-steps-container",
                    trigger: ".trigger",
                    content: ".order-steps"
                }
            },
            $container: null,
            $trigger: null,
            $content: null,
            init: function() {
                this["super"].apply(this, c.merge(["init"], arguments)),
                    this.$container = c(this.getConfig().container),
                0 !== this.$container.length && (this.initOrderSteps(),
                    this.bindOrderStepsToggle())
            },
            initOrderSteps: function() {
                this.$trigger = this.$container.find(this.getConfig().trigger),
                    this.$content = this.$container.find(this.getConfig().content)
            },
            bindOrderStepsToggle: function() {
                this.$trigger.on("click", c.proxy(this.toggleOrderSteps, this))
            },
            toggleOrderSteps: function() {
                this.isOrderStepsOpen() ? this.hideOrderSteps() : this.showOrderSteps()
            },
            isOrderStepsOpen: function() {
                return this.$container.hasClass("open")
            },
            showOrderSteps: function() {
                this.$container.addClass("open"),
                    this.$content.slideDown()
            },
            hideOrderSteps: function() {
                this.$container.removeClass("open"),
                    this.$content.slideUp()
            }
        })
    }(window, document, jQuery, _FD),
    function(a, b, c, d) {
        d.PaymentGatewayController = Class({
            "extends": d.Base,
            uses: [d.AjaxTrait, d.LoadingIndicatorTrait]
        }, {
            __name: "PaymentGatewayController",
            __config: {
                PaymentGatewayController: {
                    loadingElement: ".payment-status-checking",
                    avoidRefreshPage: ".avoid-refresh-page",
                    paymentStatusRefreshTimeMilliseconds: 15e3,
                    paymentStatusRefreshUrl: null
                }
            },
            init: function() {
                this["super"].apply(this, c.merge(["init"], arguments)),
                    this.showLoadingIndicator(),
                    this.checkOrderPaymentStatusUntilInProgress(),
                    this.avoidRefreshPage()
            },
            showLoadingIndicator: function() {
                this.startElementLoading(c(this.getConfig().loadingElement))
            },
            checkOrderPaymentStatusUntilInProgress: function() {
                null != this.getConfig().paymentStatusRefreshUrl && setInterval(c.proxy(function() {
                    this.ajax({
                        url: this.getConfig().paymentStatusRefreshUrl,
                        cache: !1
                    })
                }, this), this.getConfig().paymentStatusRefreshTimeMilliseconds)
            },
            avoidRefreshPage: function() {
                var b = a.attachEvent || a.addEventListener
                    , d = a.attachEvent ? "onbeforeunload" : "beforeunload"
                    , e = this;
                b(d, function(b) {
                    if (c(e.getConfig().avoidRefreshPage).length) {
                        var d = " ";
                        return (b || a.event).returnValue = d,
                            d
                    }
                    return null
                })
            }
        })
    }(window, document, jQuery, _FD),
    function(a, b, c, d) {
        d.PinLocationController = Class({
            "extends": d.Base
        }, {
            __name: "PinLocationController",
            __config: {
                PinLocationController: {
                    defaultPos: {
                        lat: 0,
                        lng: 0
                    },
                    form: {
                        inputLat: '[name="customerLat"]',
                        inputLng: '[name="customerLng"]',
                        checkoutInputLat: "#shop_checkout_type_orderMetaData_customerAddress_customer_latitude",
                        checkoutInputLng: "#shop_checkout_type_orderMetaData_customerAddress_customer_longitude"
                    }
                }
            },
            globalMap: null,
            html5Location: null,
            myMarker: null,
            init: function() {
                var b = this.getConfig();
                this["super"].apply(this, c.merge(["init"], arguments)),
                    a.initPinLocation = c.proxy(this.initPinLocation, this),
                    c("<script />", {
                        src: b.mapsUrl + "&callback=initPinLocation",
                        type: "text/javascript"
                    }).appendTo("body")
            },
            initPinLocation: function() {
                c("#my-loc").on("shown.bs.modal", c.proxy(function(a) {
                    this.myMarker = new google.maps.Marker({}),
                        this.globalMap = this.createMap();
                    var b = c(a.relatedTarget)
                        , d = {
                        lat: b.data("lat"),
                        lng: b.data("lng")
                    };
                    "new-address" === b.data("address-id") && this.saveWithNoRequest(b),
                    b.data("will-ajax") === !0 && this.ajaxPostForm(b),
                        d.lat && d.lng ? (this.myMarker.setOptions({
                            position: d,
                            map: this.globalMap
                        }),
                            this.globalMap.setCenter(d)) : this.tryHtml5Geolocation(this.globalMap, this.myMarker),
                    c("#f-lat-lng").length && (c('input[name="customerAddressId"]').val(b.data("address-id")),
                        c('input[name="customerLat"]').val(d.lat),
                        c('input[name="customerLng"]').val(d.lng)),
                        this.bindPinLocation(this.globalMap, this.myMarker)
                }, this))
            },
            createMap: function() {
                return new google.maps.Map(b.getElementById("g-map"),{
                    streetViewControl: !1,
                    clickableIcons: !1,
                    zoom: 15
                })
            },
            bindPinLocation: function(a, b) {
                google.maps.event.addListener(a, "click", c.proxy(function(c) {
                    b.setOptions({
                        position: c.latLng,
                        map: a
                    }),
                        this.setChoosedLatLngInForm(b)
                }, this))
            },
            tryHtml5Geolocation: function(a, b) {
                navigator.geolocation ? navigator.geolocation.getCurrentPosition(function(c) {
                    var d = {
                        lat: c.coords.latitude,
                        lng: c.coords.longitude
                    };
                    b.setOptions({
                        position: d,
                        map: a
                    }),
                        a.setCenter(d)
                }, this.handleLocationError()) : this.handleLocationError()
            },
            handleLocationError: function() {
                this.myMarker.setOptions({
                    position: this.__config.PinLocationController.defaultPos,
                    map: this.globalMap
                }),
                    this.globalMap.setCenter(this.__config.PinLocationController.defaultPos)
            },
            setChoosedLatLngInForm: function(a) {
                c(this.__config.PinLocationController.form.inputLat).val(a.getPosition().lat()),
                    c(this.__config.PinLocationController.form.inputLng).val(a.getPosition().lng())
            },
            ajaxPostForm: function(a) {
                c("#f-lat-lng").off().on("submit", c.proxy(function(b) {
                    b.preventDefault();
                    var d, e = c(b.target), f = e.serialize(), g = a.parent();
                    g.next(".errors").remove(),
                        d = c.ajax({
                            url: e.attr("action"),
                            type: "post",
                            data: f
                        }),
                        d.done(this.updateStaticMap(e, a)),
                        d.fail(function() {
                            g.after(c("<ul>", {
                                "class": "errors fw"
                            }).append(c("<li>", {
                                text: "An unknown error occurred, please try again later"
                            })))
                        }),
                        c("#my-loc").modal("hide")
                }, this))
            },
            saveWithNoRequest: function(a) {
                c("#f-lat-lng").off().on("submit", c.proxy(function(b) {
                    b.preventDefault();
                    var d = c(b.target)
                        , e = d.find(this.__config.PinLocationController.form.inputLat).val()
                        , f = d.find(this.__config.PinLocationController.form.inputLng).val();
                    c(this.__config.PinLocationController.form.checkoutInputLat).attr("value", e),
                        c(this.__config.PinLocationController.form.checkoutInputLng).attr("value", f),
                        this.updateStaticMap(d, a),
                        c("#my-loc").modal("hide")
                }, this))
            },
            updateStaticMap: function(a, b) {
                var d = a.find(this.__config.PinLocationController.form.inputLat).val()
                    , e = a.find(this.__config.PinLocationController.form.inputLng).val()
                    , f = b.data("url-sample");
                b.find("img").remove(),
                    f = f.replace("%latitude%", d),
                    f = f.replace("%longitude%", e),
                    c("<img />", {
                        src: f
                    }).prependTo(b),
                    b.data("lat", parseFloat(d)),
                    b.data("lng", parseFloat(e))
            }
        })
    }(window, document, jQuery, _FD),
    function(a, b, c, d) {
        d.PrefillController = Class({
            "extends": d.Base
        }, {
            __name: "PrefillController",
            __config: {
                PrefillController: {
                    selector: "input[data-prefill], select[data-prefill], textarea[data-prefill]",
                    customer: {
                        firstName: "",
                        lastName: "",
                        email: ""
                    },
                    location: {
                        cityId: "",
                        areaName: "",
                        areaId: "",
                        subareaName: "",
                        subareaId: "",
                        addressName: "",
                        streetNumber: "",
                        postcode: ""
                    }
                }
            },
            init: function() {
                this["super"].apply(this, c.merge(["init"], arguments)),
                    this.prefillElements(c(this.getConfig().selector)),
                    c.subscribe("CHANGE_LOCATION_NOPOPUP_LOADED", c.proxy(this.refresh, this)),
                    c.subscribe("UPDATE_LOCATION_DATA", c.proxy(this.update, this)),
                    c.subscribe("PREFILL_REFRESH", c.proxy(this.refresh, this))
            },
            update: function() {
                arguments[0] && this.updateValues(c(arguments[0].$targetDomElement).find(this.getConfig().selector))
            },
            refresh: function() {
                this.prefillElements(c(this.getConfig().selector))
            },
            updateValues: function(a) {
                0 !== a.length && a.each(c.proxy(function(a, b) {
                    if (b) {
                        var d = c(b)
                            , e = d.data("prefill")
                            , f = d.val()
                            , g = e.split(".")
                            , h = this.getConfig();
                        f && (h[g.shift()][g.shift()] = f)
                    }
                }, this))
            },
            prefillElements: function(a) {
                0 !== a.length && (a.each(c.proxy(function(a, b) {
                    if (b) {
                        var d, e = c(b), f = e.data("prefill"), g = e.val(), h = e.is("select");
                        f && (g && !h || g && h && e.find('option[value=""]').length > 0 || (d = this.getPrefillValueByDotNotationKey(f),
                        d && (e.is('input[type="checkbox"]') || e.is('input[type="radio"]') || (e.val(d),
                        e.is("input") && e.attr("value", d)))))
                    }
                }, this)),
                    c.publish("FINISHED_PREFILLING"))
            },
            getPrefillValueByDotNotationKey: function(a) {
                for (var b = a.split("."), c = this.getConfig(); b.length && (c = c[b.shift()]); )
                    ;
                return c
            }
        })
    }(window, document, jQuery, _FD),
    function(a, b, c, d) {
        d.RatingController = Class({
            "extends": d.Base,
            uses: [d.AjaxTrait, d.LoadingIndicatorTrait, d.TrackingTrait]
        }, {
            __name: "RatingController",
            __config: {
                RatingController: {
                    container: ".review-last-order",
                    loadingContainer: ".review-last-order-modal .modal-content",
                    modalBody: ".modal-body",
                    skipReviewLink: "#skip-review-link",
                    closeModalButton: "#skip-review-close-button",
                    submitReviewButton: "#shop_vendor_review_submit",
                    ratingWidget: "#shop_vendor_review_rating",
                    rateOrderTooltip: ".rate-order-tooltip",
                    ratingDescription: {}
                }
            },
            $container: null,
            $modal: null,
            $ratingWidgetInputs: null,
            $loadingContainer: null,
            init: function() {
                this["super"].apply(this, c.merge(["init"], arguments)),
                    this.$container = c(this.getConfig().container),
                0 !== this.$container.length && (this.fireTrackingEvent(),
                    this.initModal(),
                    this.initReviewComponents(),
                    this.showModal())
            },
            initReviewComponents: function() {
                this.initRatings(),
                    this.initTooltip(),
                    this.bindControlClick()
            },
            initRatings: function() {
                var a = this.$container.find(this.getConfig().ratingWidget);
                this.$ratingWidgetInputs = a.find("[type=radio]");
                var b = this.$ratingWidgetInputs.filter(":checked").val();
                a.rating({
                    starCaptions: this.getConfig().ratingDescription
                }),
                    a.on("rating.change", c.proxy(function(a, b) {
                        this.updateUserPostedRating(b)
                    }, this)),
                b > 0 && a.rating("update", b)
            },
            initTooltip: function() {
                c(this.getConfig().rateOrderTooltip).tooltip()
            },
            initModal: function() {
                var a = '<div class="modal fade review-last-order-modal" data-backdrop="static" data-keyboard="false">    <div class="modal-dialog">        <div class="modal-content">            <button type="button" class="close" data-dismiss="modal" id="skip-review-close-button">&times;</button>            <div class="modal-body">            </div>        </div>    </div></div>';
                this.$modal = c(a),
                    this.$modal.find(this.getConfig().modalBody).append(this.$container.detach()),
                    c("body").append(this.$modal),
                    this.$modal.modal("hide"),
                    this.$loadingContainer = c(this.getConfig().loadingContainer)
            },
            showModal: function() {
                return null !== this.$modal && (this.$container.removeClass("hide"),
                    this.$modal.modal("show")),
                    !1
            },
            bindControlClick: function() {
                c(this.getConfig().skipReviewLink).click(c.proxy(this.handleSkipReviewClick, this)),
                    c(this.getConfig().closeModalButton).click(c.proxy(this.handleCloseModal, this)),
                    this.$container.find("form").submit(c.proxy(this.handleSubmitReviewClick, this))
            },
            handleCloseModal: function(a) {
                a.preventDefault(),
                    c(this.getConfig().skipReviewLink).trigger("click")
            },
            handleSkipReviewClick: function(a) {
                var b = c(a.currentTarget);
                return "_blank" === b.attr("target") || (a.preventDefault(),
                    this.startElementLoading(this.$loadingContainer),
                    void this.ajax({
                        url: b.attr("href"),
                        cache: !1
                    }).done(function(a) {
                        c("ok" === a.status) && this.$modal.modal("hide")
                    }).always(function() {
                        this.stopElementLoading(this.$loadingContainer)
                    }))
            },
            handleSubmitReviewClick: function(a) {
                var b = c(a.currentTarget);
                return "_blank" === b.attr("target") || (a.preventDefault(),
                    this.startElementLoading(this.$loadingContainer),
                    void this.ajax({
                        url: b.attr("action"),
                        data: b.serialize(),
                        type: b.attr("method")
                    }).done(function(a) {
                        c("ok" === a.status) && this.$modal.modal("hide")
                    }).fail(function(a) {
                        void 0 !== a.responseJSON && (this.$modal.find(this.getConfig().modalBody).html(a.responseJSON.html),
                            this.$container = c(this.getConfig().container),
                            this.$container.removeClass("hide"),
                            this.initReviewComponents())
                    }).always(function() {
                        this.stopElementLoading(this.$loadingContainer)
                    }))
            },
            updateUserPostedRating: function(a) {
                this.$ratingWidgetInputs.val([a]),
                    c(this.getConfig().submitReviewButton).data("review_stars", a)
            },
            fireTrackingEvent: function() {
                this.pushTrackingEvent("vendorReview", this.$container.data())
            }
        })
    }(window, document, jQuery, _FD),
    function(a, b, c, d) {
        d.SiteOverrideController = Class({
            "extends": d.Base
        }, {
            __name: "SiteOverrideController",
            __config: {
                SiteOverrideController: {
                    active: !1,
                    iframeCookieName: "FD_isFramed",
                    iframeOnly: !1,
                    isIframed: !1,
                    isIframeAssumed: !0
                }
            },
            isWindowFramed: !1,
            init: function() {
                this["super"].apply(this, c.merge(["init"], arguments)),
                    this.detectWindowIsFramed(),
                    this.setIframeCookie(),
                this.getConfig().active && this.initIframeCheck()
            },
            detectWindowIsFramed: function() {
                this.isWindowFramed = a.top !== a.self,
                this.isWindowFramed && c("body").addClass("framed")
            },
            setIframeCookie: function() {
                Cookies.set(this.getConfig().iframeCookieName, this.isWindowFramed ? 1 : 0, {
                    path: "/"
                })
            },
            initIframeCheck: function() {
                this.getConfig().iframeOnly && !this.isWindowFramed && a.location.reload(!0),
                this.getConfig().isIframeAssumed || this.isWindowFramed === this.getConfig().isIframed || a.location.reload(!0)
            }
        })
    }(window, document, jQuery, _FD),
    function(a, b, c, d) {
        d.SmartbannerController = Class({
            "extends": d.Base,
            uses: [d.TrackingTrait]
        }, {
            __name: "SmartbannerController",
            __config: {
                SmartbannerController: {
                    cookieName: "",
                    cookieExpireDays: 0,
                    smartBannerContainer: ".smartbanner-container",
                    banner: ".smartbanner__inner",
                    close: ".smartbanner__close",
                    link: ".smartbanner__button a",
                    deeplinkSelector: !1,
                    mobileAppsContainer: ".mobile-apps__container"
                }
            },
            $smartBannerContainer: null,
            $mobileAppsContainer: null,
            init: function() {
                this["super"].apply(this, c.merge(["init"], arguments)),
                    this.$smartBannerContainer = c(this.getConfig().smartBannerContainer),
                    this.$mobileAppsContainer = c(this.getConfig().mobileAppsContainer),
                0 === this.$smartBannerContainer.length && 0 === this.$mobileAppsContainer.length || (this.initSmartbanner(),
                    this.initMobileApps())
            },
            initMobileApps: function() {
                this.adjustMobileAppLinks()
            },
            initSmartbanner: function() {
                return this.isDismissed() ? void this.$smartBannerContainer.remove() : (this.appendDeeplink(),
                    this.showSmartbanner(),
                    this.bindDeepLinkClick(),
                    void this.bindCloseSmartbanner())
            },
            adjustMobileAppLinks: function() {
                var a = this.$mobileAppsContainer.find("a.app-icon")
                    , b = this.buildUtmParameters()
                    , d = this.getDeeplinkFromAppIndexing();
                "undefined" != typeof b && d && a.each(function() {
                    var a = c(this)
                        , e = a.attr("href");
                    e && (e = [e.slice(0, e.indexOf("?") + 1), b, "&deep_link=", encodeURIComponent(d.slice(0, d.indexOf("utm_campaign")))].join(""),
                        a.attr("href", e))
                })
            },
            appendDeeplink: function() {
                var a, b, c, d = this.$smartBannerContainer.find(this.getConfig().link), e = this.getDeeplinkFromAppIndexing();
                e && (a = d.attr("href"),
                    c = this.buildUtmParameters(),
                    b = "undefined" != typeof c ? a.slice(0, a.indexOf("campaign=")) + c : a,
                    a = [b, a.indexOf("?") > -1 ? "&" : "?", "deep_link=", encodeURIComponent(e)].join(""),
                    d.attr("href", a))
            },
            getUtmParametersFromUrl: function() {
                var b, c, d = a.location.href;
                d.indexOf("?utm_source") > -1 && d.indexOf("?") > -1 && d.indexOf("?") < d.indexOf("?utm_source") && (d = d.replace("?utm_source", "&utm_source")),
                    b = d.slice(d.indexOf("?") + 1).split("&");
                for (var e = 0; e < b.length; ++e)
                    c = b[e].split("="),
                        b[c[0]] = c[1];
                return b
            },
            buildUtmParameters: function() {
                var a = this.getUtmParametersFromUrl()
                    , b = ""
                    , c = ""
                    , d = "";
                if ("undefined" != typeof a)
                    return "utm_source"in a && (b = a.utm_source),
                    "utm_campaign"in a && (c = a.utm_campaign),
                    "utm_medium"in a && (d = a.utm_medium),
                        ["campaign=" + b, "adgroup=" + d, "creative=" + c].join("&")
            },
            getDeeplinkFromAppIndexing: function() {
                var a, b, d, e, f = this.getConfig().deeplinkSelector, g = !!f && c('head link[rel="alternate"][href^="' + f + '"]');
                return !g || g.length <= 0 ? "" : (a = g.attr("href"),
                    a.indexOf("foodpanda/?") > -1 ? b = a.indexOf("foodpanda/?") : a.indexOf("hellofood/?") > -1 && (b = a.indexOf("hellofood/?")),
                a.indexOf("&utm_source=") > -1 && (d = a.indexOf("&utm_source=")),
                b && d && (a = a.slice(b, d),
                    e = a.replace("/?", "://?")),
                    e)
            },
            isDismissed: function() {
                return "undefined" != typeof this.getCookie()
            },
            showSmartbanner: function() {
                this.$smartBannerContainer.show()
            },
            closeSmartbanner: function() {
                return this.setCookie(),
                    this.$smartBannerContainer.remove(),
                    this.fireCloseSmartBannerTrackingEvent(),
                    !1
            },
            bindCloseSmartbanner: function() {
                this.$smartBannerContainer.on("click", this.getConfig().close, c.proxy(this.closeSmartbanner, this))
            },
            bindDeepLinkClick: function() {
                this.$smartBannerContainer.on("click", this.getConfig().link, c.proxy(this.fireDeepLinkClickTrackingEvent, this))
            },
            setCookie: function() {
                Cookies.set(this.getConfig().cookieName, !0, {
                    path: "/",
                    expires: this.getCookieExpireDays()
                })
            },
            getCookie: function() {
                return Cookies.get(this.getConfig().cookieName)
            },
            getCookieExpireDays: function() {
                return Math.max(parseInt(this.getConfig().cookieExpireDays, 10), 0)
            },
            fireCloseSmartBannerTrackingEvent: function() {
                this.pushTrackingEvent("smartBannerClose", {
                    smartBanner_action: "close"
                })
            },
            fireDeepLinkClickTrackingEvent: function() {
                this.pushTrackingEvent("smartBannerDownload", {
                    smartBanner_action: "download"
                })
            }
        })
    }(window, document, jQuery, _FD),
    function(a, b, c, d) {
        d.SmoothScrollController = Class({
            "extends": d.Base
        }, {
            __name: "SmoothScrollController",
            __config: {
                SmoothScrollController: {
                    anchorLinks: 'a[href^="#"]:not(.js-tab)',
                    scrollConfig: {
                        duration: 500,
                        offset: {
                            top: -120
                        }
                    }
                }
            },
            init: function() {
                this["super"].apply(this, c.merge(["init"], arguments)),
                    this.initSmoothScroll()
            },
            initSmoothScroll: function() {
                c(b).on("click", this.getConfig().anchorLinks, c.proxy(this.bindScrollEvent, this))
            },
            bindScrollEvent: function(a) {
                if (!a.isDefaultPrevented()) {
                    a.preventDefault();
                    var b = a.currentTarget.hash;
                    this.scrollTo(b, this.appendAfterScrollCorrectionEvent(b, this.getConfig().scrollConfig))
                }
            },
            scrollTo: function(a, b) {
                c.scrollTo(a, b)
            },
            appendAfterScrollCorrectionEvent: function(a, b) {
                return c.extend(!0, {}, b, {
                    onAfter: c.proxy(this.scrollTo, this, a, b)
                })
            }
        })
    }(window, document, jQuery, _FD),
    function(a, b, c, d) {
        d.StickyElementController = Class({
            "extends": d.Base,
            uses: d.OnloadTrait
        }, {
            __name: "StickyElementController",
            __config: {
                StickyElementController: {
                    element: ".js-sticky-element",
                    spacingModifierTop: ".js-sticky-element-consider-top",
                    parentElementToCalculateSpacingFrom: ".js-sticky-height-calculate-container",
                    topSpacing: 20,
                    bottomSpacing: 20
                }
            },
            $window: c(a),
            init: function() {
                this["super"].apply(this, c.merge(["init"], arguments)),
                0 !== this.getElements().length && this.initStickyElements()
            },
            initStickyElements: function() {
                this.handleWindowResize(),
                    this.subscribeToExternalEvents(),
                    this.refreshStickies(),
                    this.onload(this.refreshStickies)
            },
            getElements: function() {
                return c(this.getConfig().element)
            },
            makeMenuSticky: function(a) {
                if (!(this.$window.height() < a.outerHeight() + this.getTopSpacing(a) || this.$window.width() < 992)) {
                    var b = a.parents(this.getConfig().parentElementToCalculateSpacingFrom);
                    a.unstick().sticky({
                        topSpacing: this.getTopSpacing(a, b),
                        bottomSpacing: this.getBottomSpacing(a, b)
                    }).sticky("update")
                }
            },
            getTopSpacing: function(a) {
                var b = parseInt(a.attr("data-sticky-top-margin"), 10)
                    , d = 0;
                d = isNaN(b) ? this.getConfig().topSpacing : b;
                var e = c(this.getConfig().spacingModifierTop);
                return e && a[0] !== e[0] && (d += e.outerHeight()),
                    d
            },
            getBottomSpacing: function(a, d) {
                var e = parseInt(a.attr("data-sticky-bottom-margin"), 10)
                    , f = 0;
                return f = isNaN(e) ? this.getConfig().bottomSpacing : e,
                    f += c(b).outerHeight() - d.offset().top - d.innerHeight() - parseInt(d.css("margin-top"), 10)
            },
            unstickMenu: function(a) {
                a.unstick()
            },
            refreshStickies: function() {
                var a = this;
                a.getElements().each(function(b, d) {
                    a.unstickMenu(c(d)),
                        a.makeMenuSticky(c(d))
                }),
                    c.publish("STICKY_ELEMENTS_REFRESHED")
            },
            handleWindowResize: function() {
                this.$window.on("resize", c.proxy(this.refreshStickies, this))
            },
            subscribeToExternalEvents: function() {
                c.subscribe("STICKY_REFRESH", c.proxy(this.refreshStickies, this)),
                    c.subscribe("CART_REFRESH", c.proxy(this.refreshStickies, this))
            }
        })
    }(window, document, jQuery, _FD),
    function(a, b, c, d) {
        d.ToggleElementsController = Class({
            "extends": d.Base
        }, {
            __name: "ToggleElementsController",
            __config: {
                ToggleElementsController: {
                    parent: "body",
                    containersWrapper: ".toggle-elements-containers-wrapper",
                    container: ".toggle-elements-container",
                    button: ".toggle-elements-button",
                    wrapper: ".toggle-elements-wrapper",
                    actionClass: "full-height",
                    selectedClass: "selected",
                    allowClosingClass: "allow-closing",
                    denyClosingOthersClass: "deny-closing-others",
                    hideIfWrapperEmpty: !0
                }
            },
            initialized: !1,
            init: function() {
                this["super"].apply(this, c.merge(["init"], arguments)),
                    this.selectors = this.getConfig(),
                    this.bindEvents(),
                this.selectors.hideIfWrapperEmpty && this.hideContainersWithEmptyElements()
            },
            hideContainersWithEmptyElements: function() {
                var a = this
                    , b = c(a.selectors.wrapper);
                b.each(function(b, d) {
                    var e = c(d);
                    c.trim(e.html()) || e.parents(a.selectors.container).hide()
                })
            },
            unselectAllSectionButtons: function(a) {
                var b = this.getContextContainer(a);
                b.parents(this.selectors.containersWrapper).find(this.selectors.button).not(a).removeClass(this.selectors.selectedClass)
            },
            selectButton: function(a) {
                a.toggleClass(this.selectors.selectedClass)
            },
            closeAllSectionWrappers: function(a) {
                var b = this.getContextContainer(a)
                    , d = b.parents(this.selectors.containersWrapper).find(this.selectors.wrapper)
                    , e = this.getWrapper(a);
                d.not(e).removeClass(this.selectors.actionClass),
                    c.publish("TOGGLE_ELEMENTS_WRAPPER_CLOSED")
            },
            getWrapper: function(a) {
                var b = this.getContextContainer(a);
                return void 0 !== b ? b.find(this.selectors.wrapper) : void 0
            },
            getContextContainer: function(a) {
                return a.parents(this.selectors.container)
            },
            openWrapper: function(a) {
                var b = this.getWrapper(a);
                void 0 !== b && (b.toggleClass(this.selectors.actionClass),
                    c.publish("TOGGLE_ELEMENTS_WRAPPER_OPENED"))
            },
            bindEvents: function() {
                var a = this;
                c(this.selectors.parent).on("click", this.selectors.button, function(b) {
                    var d = c(b.currentTarget)
                        , e = d.hasClass(a.selectors.selectedClass);
                    (!e || e && d.hasClass(a.selectors.allowClosingClass)) && (d.hasClass(a.selectors.denyClosingOthersClass) || (a.closeAllSectionWrappers(d),
                        a.unselectAllSectionButtons(d)),
                        a.selectButton(d),
                        a.openWrapper(d)),
                        b.preventDefault(),
                        b.stopPropagation()
                })
            }
        })
    }(window, document, jQuery, _FD),
    function(a, b, c, d) {
        d.TooltipController = Class({
            "extends": d.Base
        }, {
            __name: "TooltipController",
            __config: {
                TooltipController: {
                    duration: 400,
                    triggers: "[data-tooltip-element]"
                }
            },
            init: function() {
                this["super"].apply(this, c.merge(["init"], arguments)),
                    this.$triggers = c(this.getConfig().triggers),
                0 !== this.$triggers.length && this.initTooltips()
            },
            initTooltips: function() {
                c(b).on("mouseenter mouseleave", this.getConfig().triggers, c.proxy(this.bindTooltip, this))
            },
            buildTooltipContainer: function(a) {
                return c("body").append(c("<div>").addClass("tooltip-container " + a)),
                    c("." + a)
            },
            bindTooltip: function(a) {
                var b, d = c(a.currentTarget);
                if (void 0 !== d.data("tooltip-random-class"))
                    b = c("." + d.data("tooltip-random-class"));
                else {
                    var e = "tc-" + this.getRandomString();
                    b = this.buildTooltipContainer(e),
                        d.data("tooltip-random-class", e)
                }
                "mouseenter" === a.type ? this.loadTooltip(b, d) : "mouseleave" === a.type && this.unloadTooltip(b)
            },
            loadTooltip: function(a, b) {
                var d = c(b.data("tooltip-element"));
                0 !== d.length && (a.html(d.html()),
                    a.css(this.getTooltipPosition(a, b)),
                    a.fadeIn(this.duration))
            },
            unloadTooltip: function(a) {
                a.fadeOut(this.duration)
            },
            getTooltipPosition: function(a, b) {
                a.show();
                var c = a.outerWidth(!0)
                    , d = a.outerHeight();
                a.hide();
                var e = b.offset()
                    , f = b.width();
                return {
                    top: e.top - d - 10,
                    left: e.left - c / 2 + f / 2
                }
            },
            getRandomString: function() {
                return Math.random().toString(36).substring(7)
            }
        })
    }(window, document, jQuery, _FD),
    function(a, b, c, d) {
        d.TrackingInitController = Class({
            "extends": d.Base,
            uses: d.OnloadTrait
        }, {
            __name: "TrackingInitController",
            __config: {
                TrackingInitController: {
                    loadingDelay: 1e3
                }
            },
            init: function() {
                this["super"].apply(this, c.merge(["init"], arguments)),
                "undefined" != typeof a.tracking && (this.initTracking(),
                    c.subscribe("VENDOR_LISTING_INFINITE_SCROLL_LOADED", c.proxy(this.bindCustomUiEvents, this)))
            },
            bindCustomUiEvents: function() {
                var b = a.tracking.getDataLayerObjectName();
                c(".js-fire-click-tracking-event").unbind("click").on("click", function() {
                    var d = c(this).data();
                    d.event && a[b].push(d)
                })
            },
            initTracking: function() {
                if (a.tracking.isGtmActive()) {
                    var b = this.getConfig().loadingDelay;
                    this.onload(function() {
                        setTimeout(a.tracking.loadGtm, b)
                    }),
                        this.bindCustomUiEvents()
                }
            }
        })
    }(window, document, jQuery, _FD),
    function(a, b, c, d) {
        d.VendorDetailCategoryController = Class({
            "extends": d.Base
        }, {
            __name: "VendorDetailCategoryController",
            __config: {
                VendorDetailCategoryController: {
                    container: ".vendor-menu .menu",
                    headerCategoryTitleElement: ".header-mobile__selected-category .selected-category-text",
                    headerCategories: ".header-mobile__contents__categories li a",
                    categoryElement: ".menu__category"
                }
            },
            init: function() {
                this["super"].apply(this, c.merge(["init"], arguments)),
                    this.$container = c(this.getConfig().container),
                0 !== this.$container.length && (this.initHeader(),
                    this.initHeaderBarVisibilityToggle(),
                    this.initCategoriesMenuLite())
            },
            initHeader: function() {
                c(".header-mobile__selected-category").click(function() {
                    c(".header-mobile-container__categories").toggleClass("active"),
                        c(".header-mobile__selected-category").toggleClass("active"),
                        c(".header-mobile__filter-button").removeClass("active"),
                        c(".header-mobile__contents__categories").slideToggle()
                }),
                    c(".header-mobile__contents__categories").css({
                        maxHeight: c(a).height() - 55
                    })
            },
            initHeaderBarVisibilityToggle: function() {
                c(a).scroll(function() {
                    var b = c(".vendor-menu__menus").offset().top - 150;
                    c(a).scrollTop() > b ? c(".header-mobile-container__categories").is(":visible") || c(".header-mobile-container__categories").slideDown() : c(".header-mobile-container__categories").is(":visible") && c(".header-mobile-container__categories").slideUp()
                })
            },
            closeHeaderCategoriesMenu: function() {
                c(".header-mobile-container__categories").removeClass("active"),
                    c(".header-mobile__selected-category").removeClass("active"),
                    c(".header-mobile__contents__categories").slideUp()
            },
            initCategoriesMenu: function() {
                this.openFirstMenuCategory(),
                    c("body").on("click", this.getConfig().headerCategories, c.proxy(this.onCategoryChange, this))
            },
            initCategoriesMenuLite: function() {
                this.setTitleForFirstMenuCategory(),
                    c("body").on("click", this.getConfig().headerCategories, c.proxy(this.onCategoryChangeLite, this))
            },
            changeCategory: function(a) {
                var b = a.attr("href");
                this.changeHeaderCategoryTitle(a.html()),
                    this.openMenuCategory(b),
                    this.closeHeaderCategoriesMenu()
            },
            changeCategoryLite: function(a) {
                this.changeHeaderCategoryTitle(a.html()),
                    this.closeHeaderCategoriesMenu()
            },
            openFirstMenuCategory: function() {
                c(this.getConfig().headerCategoryTitleElement).hide();
                var a = c(this.getConfig().headerCategories).first();
                this.changeCategory(a),
                    c(this.getConfig().headerCategoryTitleElement).fadeIn()
            },
            setTitleForFirstMenuCategory: function() {
                var a = c(this.getConfig().headerCategories).first();
                this.changeHeaderCategoryTitle(a.html())
            },
            onCategoryChange: function(a) {
                var b = c(a.currentTarget);
                this.changeCategory(b),
                    a.preventDefault()
            },
            onCategoryChangeLite: function(a) {
                var b = c(a.currentTarget);
                this.changeCategoryLite(b)
            },
            changeHeaderCategoryTitle: function(a) {
                c(this.getConfig().headerCategoryTitleElement).html(a)
            },
            openMenuCategory: function(a) {
                c(this.getConfig().categoryElement + ":visible").slideUp(),
                    c(a).parents(this.getConfig().categoryElement).slideDown()
            }
        })
    }(window, document, jQuery, _FD),
    function(a, b, c, d) {
        d.VendorDetailFiltersController = Class({
            "extends": d.Base
        }, {
            __name: "VendorDetailFiltersController",
            __config: {
                VendorDetailFiltersController: {
                    container: ".vendor-menu .menu",
                    filterableMenuItems: ".menu-item[data-dish-characteristic-codes]",
                    unfilterableMenuItems: ".menu-item:not([data-dish-characteristic-codes])",
                    menuCategory: ".menu__category",
                    menuItem: ".menu-item",
                    filteredResultsTitleElement: ".header-mobile__selected-category"
                }
            },
            CATEGORY_ALLERGENS: "allergen-alerts",
            filtersShouldBeAppliedManually: !0,
            filters: {},
            init: function() {
                this["super"].apply(this, c.merge(["init"], arguments)),
                    this.$container = c(this.getConfig().container),
                0 !== this.$container.length && (this.initHeader(),
                    this.initFilters())
            },
            initHeader: function() {
                c(".header-mobile__filter-button").click(this.toggleFiltersVisibility),
                    c(".header-mobile__title__filters__back").click(this.toggleFiltersVisibility),
                    c(".header-mobile__contents__filters").css({
                        maxHeight: c(a).height() - 55
                    }),
                    c(".header-mobile__contents__filters__footer__apply").click(c.proxy(this.applySelectedFilters, this)),
                    c(".header-mobile__contents__filters__footer__clear").click(c.proxy(this.clearAllFilters, this)),
                    c(".header-mobile__title__filters__clear").click(c.proxy(this.clearAllFilters, this))
            },
            initFilters: function() {
                c(".header-mobile__contents__filters__categories__category__filters li").click(c.proxy(this.handleFilterClick, this))
            },
            toggleFiltersVisibility: function() {
                c(".header-mobile-container__filters").toggleClass("active"),
                    c(".header-mobile__filter-button").toggleClass("active"),
                    c(".header-mobile__selected-category").removeClass("active"),
                    c(".header-mobile-container__categories").removeClass("active"),
                    c(".header-mobile__contents__categories").hide(),
                    c(".header-mobile-container__filters").slideToggle(),
                c(".header-mobile-container__filters").hasClass("active") || c("html, body").animate({
                    scrollTop: c(".vendor-tabs").offset().top
                }, 0)
            },
            handleFilterClick: function(a) {
                var b = c(a.currentTarget)
                    , d = b.data("dish-characteristic-category")
                    , e = parseInt(b.data("dish-characteristic-code"));
                b.toggleClass("active"),
                void 0 === this.filters[d] && (this.filters[d] = []),
                    this.isFilterActive(b) ? this.filters[d].push(e) : (this.filters[d].splice(this.filters[d].indexOf(e), 1),
                    0 === this.filters[d].length && delete this.filters[d]),
                this.filtersShouldBeAppliedManually || (this.isAnyFilterSelected() ? this.applySelectedFilters() : this.clearAllFilters())
            },
            isFilterActive: function(a) {
                return a.hasClass("active")
            },
            isAnyFilterSelected: function() {
                var a = [];
                return Object.keys(this.filters).forEach(c.proxy(function(b) {
                    a = a.concat(this.filters[b])
                }, this)),
                a.length > 0
            },
            applySelectedFilters: function() {
                return this.filtersShouldBeAppliedManually && !this.isAnyFilterSelected() ? void this.clearAllFilters() : (c(this.getConfig().menuItem).hide(),
                    c(this.getConfig().filterableMenuItems).filter(c.proxy(this.handleMenuItemsWithDishCharacteristicsFiltering, this)).show(),
                    this.handleMenuItemsWithoutDishCharacteristicsFiltering(),
                    c(this.getConfig().menuCategory).show().filter(c.proxy(function(a, b) {
                        return c(b).find(this.getConfig().menuItem + ":visible").length <= 0
                    }, this)).hide(),
                    c(this.getConfig().filteredResultsTitleElement).addClass("with-filtered-results"),
                    void (this.filtersShouldBeAppliedManually && this.toggleFiltersVisibility()))
            },
            handleMenuItemsWithDishCharacteristicsFiltering: function(a, b) {
                var d, e = c(b), f = e.data("dish-characteristic-codes"), g = {};
                return Object.keys(this.filters).forEach(c.proxy(function(a) {
                    g[a] = !1;
                    for (var b = 0; b < this.filters[a].length; b++) {
                        var c = this.filters[a][b];
                        if (f[a] && f[a].indexOf(c) > -1) {
                            var e = !0;
                            a === this.CATEGORY_ALLERGENS && (e = !1),
                                g[a] = e;
                            break
                        }
                        a === this.CATEGORY_ALLERGENS && (!f[a] || f[a] && f[a].indexOf(c) === -1) && (g[a] = !0)
                    }
                    d = (d || void 0 === d) && g[a]
                }, this)),
                d === !0
            },
            handleMenuItemsWithoutDishCharacteristicsFiltering: function() {
                this.isAllergensTheOnlyFilterSelected() && c(this.getConfig().unfilterableMenuItems).show()
            },
            clearAllFilters: function() {
                c(this.getConfig().menuCategory).show(),
                    c(this.getConfig().menuItem).show(),
                    c(this.getConfig().filteredResultsTitleElement).removeClass("with-filtered-results"),
                this.filtersShouldBeAppliedManually && (this.toggleFiltersVisibility(),
                    c(".header-mobile__contents__filters__categories__category__filters li.active").removeClass("active"))
            },
            isAllergensTheOnlyFilterSelected: function() {
                return 1 === Object.keys(this.filters).length && !!this.filters[this.CATEGORY_ALLERGENS]
            }
        })
    }(window, document, jQuery, _FD),
    function(a, b, c, d) {
        d.VendorDetailMenuScrollSpyController = Class({
            "extends": d.Base
        }, {
            __name: "VendorDetailMenuScrollSpyController",
            __config: {
                VendorDetailMenuScrollSpyController: {
                    menu: ".js-vendor-detail-menu-categories",
                    selector: ".js-vendor-detail-menu-categories ul li > a",
                    activeSelector: ".js-vendor-detail-menu-categories ul li.active > a",
                    headerCategoryTitleElement: ".header-mobile__selected-category .selected-category-text"
                }
            },
            $window: c(a),
            $menu: null,
            init: function() {
                this["super"].apply(this, c.merge(["init"], arguments)),
                    this.$menu = c(this.getConfig().menu),
                0 !== this.$menu.length && this.menuScrollSpy()
            },
            menuScrollSpy: function() {
                var a = c("body");
                a.scrollspy({
                    target: this.getConfig().menu,
                    offset: 140
                }),
                    a.data("bs.scrollspy").selector = this.getConfig().selector,
                    a.scrollspy("refresh"),
                    a.scrollspy("process"),
                    a.on("activate.bs.scrollspy", c.proxy(function() {
                        var a = c(this.getConfig().activeSelector);
                        c(this.getConfig().headerCategoryTitleElement).html(a.html())
                    }, this))
            }
        })
    }(window, document, jQuery, _FD),
    function(a, b, c, d) {
        d.VendorDetailProductVariationController = Class({
            "extends": d.Base,
            uses: d.AjaxTrait
        }, {
            __name: "VendorDetailProductVariationController",
            __config: {
                VendorDetailProductVariationController: {
                    container: ".menu",
                    variation: ".menu-item__variation",
                    button: ".btn",
                    addToCartIcon: ".icon-add-to-cart",
                    addedToCartIcon: ".icon-added-to-cart",
                    modal: ".js-product-variation-modal",
                    hasCustomerValidLocation: !1,
                    isClosed: !1,
                    isPreorderAvailable: !1,
                    dishCharacteristicItem: ".menu-item__dish-characteristic",
                    maximiumQuantityReachedMessage: "",
                    toppingsErrorMessageElement: ".choices-toppings__error"
                }
            },
            $container: null,
            hasCustomerValidLocation: !1,
            readyToClick: !1,
            init: function() {
                this["super"].apply(this, c.merge(["init"], arguments)),
                    this.$container = c(this.getConfig().container),
                0 !== this.$container.length && (this.hasCustomerValidLocation = this.getConfig().hasCustomerValidLocation,
                    this.vendorIsClosed = this.getConfig().isClosed,
                    this.vendorIsPreorderAvailable = this.getConfig().isPreorderAvailable,
                    this.vendorIsEnabled = this.hasCustomerValidLocation && (!this.vendorIsClosed || this.vendorIsPreorderAvailable),
                    this.readyToClick = !0,
                    this.bindProductVariation(),
                    this.refreshLocationValidityButtonStyle(),
                    this.bindChoicesToppingsSubtitleStyle(),
                    this.initTooltipDishCharacteristics(),
                    c.subscribe("LOCATION_CHANGED", c.proxy(this.locationChanged, this)))
            },
            initTooltipDishCharacteristics: function() {
                this.$container.find(this.getConfig().dishCharacteristicItem).tooltip()
            },
            bindProductVariation: function() {
                this.$container.on("click", this.getConfig().variation, c.proxy(this.loadAndBindProductVariationModal, this))
            },
            bindChoicesToppingsSubtitleStyle: function() {
                c("body").on("click", ".choices-toppings-checkbox", c.proxy(this.toggleChoicesToppingsSubtitleBackground, this))
            },
            toggleChoicesToppingsSubtitleBackground: function(a) {
                var b = c(a.currentTarget)
                    , d = b.parents(".choices-toppings-checkbox-wrapper")
                    , e = d.find(".choices-toppings__subtitle")
                    , f = e.data("minselect")
                    , g = d.find("input:checkbox").filter(":checked");
                b.prop("checked") && g.length >= f ? e.addClass("choices-toppings-min-select") : (g.length < f || e.hasClass("choices-toppings-optional") && g.length === f) && e.removeClass("choices-toppings-min-select")
            },
            removeModal: function() {
                var a = this.getModalElement();
                a.length && a.detach().one("hidden.bs.modal", function() {
                    a.remove()
                }).modal("hide")
            },
            getModalElement: function() {
                return c(this.getConfig().modal)
            },
            loadAndBindProductVariationModal: function(b) {
                if (b.preventDefault(),
                        b.stopPropagation(),
                        this.vendorIsEnabled) {
                    if (!this.readyToClick)
                        return;
                    this.readyToClick = !1,
                        this.removeModal();
                    var d = c(b.currentTarget).find(this.getConfig().button)
                        , e = d.is("a") ? d.attr("href") : d.parents("form").attr("action");
                    d.parents(".menu-item").animate({
                        opacity: .3
                    }),
                        c.publish("CART_LOADING_START"),
                        this.ajax({
                            url: e,
                            cache: !1
                        }).done(function(b) {
                            var e = "" !== b.html;
                            this.removeModal(),
                                e ? (c("body").append(c(b.html).modal("show")),
                                    this.bindProductVariationContent(),
                                    c.publish("CART_LOADING_STOP")) : c.publish("CART_PRODUCT_ADDED"),
                                d.parents(".menu-item").animate({
                                    opacity: 1
                                }),
                                d.find(this.getConfig().addToCartIcon).fadeOut(),
                                d.find(this.getConfig().addedToCartIcon).fadeIn(),
                                a.setTimeout(c.proxy(function() {
                                    d.find(this.getConfig().addToCartIcon).fadeIn(),
                                        d.find(this.getConfig().addedToCartIcon).fadeOut()
                                }, this), 2e3)
                        }).fail(function() {
                            c.publish("CART_LOADING_STOP")
                        }).always(function() {
                            this.readyToClick = !0
                        })
                } else
                    this.hasCustomerValidLocation ? this.scrollTo(".location-search-ajax-container") : c.publish("ADD_TO_CART_WITHOUT_VALID_LOCATION_ATTEMPT");
                this.stickToLocationForm()
            },
            bindProductVariationContent: function() {
                this.bindProductToppings(),
                    this.getModalElement().find("form").on("submit", c.proxy(function(a) {
                        var b = c(a.currentTarget)
                            , d = b.find('button[type="submit"]');
                        d.button("loading"),
                            a.preventDefault(),
                            this.ajax({
                                url: b.attr("action"),
                                data: b.serialize(),
                                type: b.attr("method"),
                                cache: !1
                            }).done(function(a) {
                                var b = "" === a.html;
                                b ? (c.publish("CART_PRODUCT_ADDED"),
                                    this.removeModal()) : this.getModalElement().find(".modal-content").replaceWith(c(a.html).find(".modal-content"))
                            }).done(this.bindProductVariationContent).always(function() {
                                d.button("reset")
                            })
                    }, this))
            },
            bindProductToppings: function() {
                this.getModalElement().find("input").on("change", c.proxy(this.onToppingSelectionChanges, this))
            },
            onToppingSelectionChanges: function(a) {
                var b = c(a.currentTarget)
                    , d = b.parents("ul.choices-toppings__elements__container").first()
                    , e = b.attr("name")
                    , f = parseInt(d.data("maxselect"))
                    , g = {};
                c.each(c(".choices-toppings__form").serializeArray(), function(a, b) {
                    void 0 === g[b.name] && (g[b.name] = []),
                        g[b.name].push(b.value)
                });
                var h;
                g[e].length > f ? (h = d.find(this.getConfig().toppingsErrorMessageElement),
                    h.remove(),
                    d.find("input:checked").last().parent().append(c("<div>").addClass("choices-toppings__error").html(this.getConfig().maximiumQuantityReachedMessage))) : (h = d.find(this.getConfig().toppingsErrorMessageElement),
                h.length > 0 && h.remove())
            },
            locationChanged: function(b) {
                this.hasCustomerValidLocation = b,
                    this.refreshLocationValidityButtonStyle(),
                    a.location.reload(!0)
            },
            refreshLocationValidityButtonStyle: function() {},
            scrollTo: function(a) {
                var b = c(a)
                    , d = b.length ? b : c("body");
                c.scrollTo(d)
            },
            stickToLocationForm: function() {
                var b = function(b) {
                    b = b || function() {}
                    ;
                    var d = 6;
                    !function e() {
                        e.attempt = "attempt"in e ? e.attempt += 1 : 0,
                            c(".force-select-location").hasClass("in", "modal-backdrop") ? b() : e.attempt < d && a.setTimeout(e, 100)
                    }()
                };
                b(function() {
                    var a = c(".arrow-more-info");
                    a.addClass("arrow-more-info-sticky"),
                        c("body").on("click", function() {
                            a.removeClass("arrow-more-info-sticky")
                        })
                })
            }
        })
    }(window, document, jQuery, _FD),
    function(a, b, c, d) {
        d.VendorDetailReviewInfiniteScrollController = Class({
            "extends": d.Base,
            uses: [d.AjaxTrait]
        }, {
            __name: "VendorDetailReviewInfiniteScrollController",
            __config: {
                VendorDetailReviewInfiniteScrollController: {
                    reviewsTab: "#reviews",
                    reviewsContainer: ".vendor-reviews",
                    reviewsScrollMore: ".infinite-scroll-more"
                }
            },
            $reviewsTab: null,
            $reviewsContainer: null,
            $reviewsScrollMore: null,
            $lastHiddenReview: null,
            $window: null,
            init: function() {
                this["super"].apply(this, c.merge(["init"], arguments)),
                    this.$reviewsTab = c(this.getConfig().reviewsTab),
                    this.$reviewsContainer = c(this.getConfig().reviewsContainer),
                    this.$reviewsScrollMore = c(this.getConfig().reviewsScrollMore),
                0 !== this.$reviewsTab.length && 0 !== this.$reviewsContainer.length && 0 !== this.$reviewsScrollMore.length && (this.$window = c(a),
                    this.initForContainer())
            },
            initForContainer: function() {
                this.$lastHiddenReview = this.$reviewsScrollMore.last(),
                    this.$window.on("scroll", c.proxy(this.handleWindowScroll, this))
            },
            handleWindowScroll: function() {
                var a = this.$reviewsContainer.offset().top + this.$reviewsContainer.height()
                    , b = this.$window.scrollTop() + this.$window.height();
                b + this.$window.height() / 2 >= a && this.loadMoreResults()
            },
            loadMoreResults: function() {
                this.$reviewsTab.hasClass("active") === !1 || this.$lastHiddenReview.is(":visible") || (this.$reviewsScrollMore.each(function(a, b) {
                    var d = 30;
                    a <= d && c(b).removeClass("infinite-scroll-more")
                }),
                    this.$reviewsScrollMore = c(this.getConfig().reviewsScrollMore))
            }
        })
    }(window, document, jQuery, _FD),
    function(a, b, c, d) {
        d.VendorDetailTabsController = Class({
            "extends": d.Base
        }, {
            __name: "VendorDetailTabsController",
            __config: {
                VendorDetailTabsController: {
                    tabs: ".vendor-tabs",
                    activeTabFromUrl: "a.js-tab[href=" + a.location.hash.replace(/[^\w\-#]/gi, "") + "]",
                    tabLink: 'a.js-tab[href^="#"]'
                }
            },
            $tabs: null,
            init: function() {
                this["super"].apply(this, c.merge(["init"], arguments)),
                    this.activeTabFromUrl = this.getConfig().activeTabFromUrl,
                    this.$tabs = c(this.getConfig().tabs),
                0 !== this.$tabs.length && (this.bindTabChange(),
                    this.autoSelectTabFromUrlAnchor(),
                    this.bindHashChange())
            },
            autoSelectTabFromUrlAnchor: function() {
                if (a.location.hash)
                    try {
                        var b = this.$tabs.find(this.activeTabFromUrl);
                        b.length && b.tab("show")
                    } catch (c) {}
            },
            bindTabChange: function() {
                this.$tabs.find(this.getConfig().tabLink).on("shown.bs.tab", function() {
                    c.publish("STICKY_REFRESH")
                })
            },
            bindHashChange: function() {
                var b = this;
                c(a).on("hashchange", function() {
                    b.activeTabFromUrl = "a[href=" + a.location.hash.replace(/[^\w\-#]/gi, "") + "]",
                        b.$tabs.find("li").removeClass("active"),
                        b.autoSelectTabFromUrlAnchor()
                })
            }
        })
    }(window, document, jQuery, _FD),
    function(a, b, c, d) {
        d.VendorListingInfiniteScrollController = Class({
            "extends": d.Base,
            uses: [d.AjaxTrait, d.LoadingIndicatorTrait]
        }, {
            __name: "VendorListingInfiniteScrollController",
            __config: {
                VendorListingInfiniteScrollController: {
                    container: ".js-infscroll-container",
                    form: ".js-vendor-list-form",
                    loadMore: ".js-infscroll-load-more-here",
                    currentPage: ".js-infscroll-page-current",
                    nextPage: ".js-infscroll-page",
                    indicator: ".js-infscroll-indicator",
                    pagination: ".js-pagination"
                }
            },
            isLoadingMoreResults: !1,
            lastPage: 0,
            currentPage: 0,
            $container: null,
            $form: null,
            $loadMore: null,
            $window: null,
            $indicator: null,
            init: function() {
                this["super"].apply(this, c.merge(["init"], arguments)),
                    this.$container = c(this.getConfig().container),
                    this.$form = c(this.getConfig().form),
                0 !== this.$container.length && 0 !== this.$form.length && (this.$window = c(a),
                    this.initForContainer())
            },
            initForContainer: function() {
                this.hidePagination(),
                    this.$form.find(this.getConfig().nextPage).each(c.proxy(function(a, b) {
                        var d = parseInt(c(b).attr("value"), 10);
                        this.lastPage < d && (this.lastPage = d)
                    }, this));
                var a = this.$form.find(this.getConfig().currentPage);
                0 !== a.length && (this.currentPage = parseInt(a.attr("value"), 10),
                    this.$window.on("scroll", c.proxy(this.handleWindowScroll, this)))
            },
            handleWindowScroll: function() {
                if (!this.isLoadingMoreResults) {
                    var a = this.$container.offset().top + this.$container.height()
                        , b = this.$window.scrollTop() + this.$window.height();
                    b + this.$window.height() / 2 >= a && this.loadMoreResults()
                }
            },
            loadMoreResults: function() {
                if (!(this.isLoadingMoreResults || this.currentPage >= this.lastPage)) {
                    this.beginLoadingMoreResults();
                    for (var b = this.$form.serializeArray(), d = 0; d < b.length; d++)
                        "page" === b[d].name && (b[d].value = this.currentPage);
                    this.ajax({
                        url: a.location.pathname,
                        data: b
                    }).done(function(a) {
                        this.getLoadMore().append(a.html),
                            c.publish("VENDOR_LISTING_INFINITE_SCROLL_LOADED")
                    }).always(this.endLoadingMoreResults)
                }
            },
            beginLoadingMoreResults: function() {
                this.currentPage++,
                    this.isLoadingMoreResults = !0,
                    this.startElementLoading(this.getIndicator().show())
            },
            endLoadingMoreResults: function() {
                this.isLoadingMoreResults = !1,
                    this.getIndicator().hide()
            },
            hidePagination: function() {
                c(this.getConfig().pagination).hide()
            },
            getIndicator: function() {
                return null === this.$indicator && (this.$indicator = c(this.getConfig().indicator)),
                    this.$indicator
            },
            getLoadMore: function() {
                return null === this.$loadMore && (this.$loadMore = c(this.getConfig().loadMore)),
                    this.$loadMore
            }
        })
    }(window, document, jQuery, _FD),
    function(a, b, c, d) {
        d.VendorListingMenuFilterFormController = Class({
            "extends": d.Base
        }, {
            __name: "VendorListingMenuFilterFormController",
            __config: {
                VendorListingMenuFilterFormController: {
                    form: ".js-vendor-list-form",
                    elements: "li",
                    inputElements: 'input[type="checkbox"]',
                    selectedInputElements: 'input[type="checkbox"]:checked',
                    selectElements: "select",
                    filterToggle: ".filter__trigger__item",
                    filterContent: ".filter__container"
                }
            },
            $form: null,
            init: function() {
                this["super"].apply(this, c.merge(["init"], arguments)),
                    this.$form = c(this.getConfig().form),
                0 !== this.$form.length && (this.bindSubmitFormOnSelectChange(),
                    this.bindFilterToggle(),
                    this.bindCuisineToggle(),
                    this.resetFilterSelection())
            },
            bindCuisineToggle: function() {
                var a, b = c(".filter__container .cuisines"), d = b.find(".filter__expander"), e = b.find(this.getConfig().elements), f = 6, g = 0, h = [];
                if (e.each(function() {
                        h.push({
                            quantity: c(this).data("quantity"),
                            element: c(this)
                        })
                    }),
                        h.sort(function(a, b) {
                            return b.quantity - a.quantity
                        }),
                        a = h.length,
                    a > f) {
                    for (var i = 0; i < a; i++)
                        g === f ? h[i].element.hide() : g++;
                    e.filter(":has(" + this.getConfig().selectedInputElements + ")").show(),
                        d.on("click", function() {
                            b.find("li").show(),
                                c.publish("STICKY_REFRESH"),
                                d.remove()
                        }).show(),
                        c.publish("STICKY_REFRESH")
                }
            },
            bindFilterToggle: function() {
                c(this.getConfig().filterToggle).on("click", c.proxy(this.handleFilterToggleChange, this))
            },
            handleFilterToggleChange: function(a) {
                var b = c(this.getConfig().filterContent)
                    , d = b.filter(c(a.currentTarget).data("toggle"))
                    , e = d.is(":visible");
                b.not(d).slideUp(),
                    e ? d.slideUp() : d.slideDown()
            },
            bindSubmitFormOnSelectChange: function() {
                this.$form.on("change", this.getConfig().selectElements, c.proxy(this.handleSubmitFormOnSelectChange, this))
            },
            handleSubmitFormOnSelectChange: function(a) {
                c(a.delegateTarget).trigger("submit")
            },
            resetFilterSelection: function() {
                c("[data-reset-id]").on("click", function() {
                    var a = c("#" + c(this).data("reset-id"));
                    a.find("input:checkbox").removeAttr("checked")
                })
            }
        })
    }(window, document, jQuery, _FD),
    function(window, document, $, _FD) {
        _FD.InitController = Class({
            "extends": _FD.Base
        }, {
            __config: {
                AuthController: {
                    enable: !0
                },
                LocationSearchController: {
                    enable: !0
                },
                StickyElementController: {
                    enable: !0
                },
                VendorListingMenuFilterFormController: {
                    enable: !1
                },
                VendorDetailMenuScrollSpyController: {
                    enable: !1
                },
                ChangeLocationLinkController: {
                    enable: !0
                },
                TooltipController: {
                    enable: !0
                },
                VendorDetailProductVariationController: {
                    enable: !1
                },
                VendorDetailTabsController: {
                    enable: !1
                },
                VendorDetailCategoryController: {
                    enable: !1
                },
                VendorDetailFiltersController: {
                    enable: !1
                },
                CartController: {
                    enable: !1
                },
                LivechatController: {
                    enable: !1
                },
                FormController: {
                    enable: !0
                },
                CheckoutController: {
                    enable: !1
                },
                SmoothScrollController: {
                    enable: !0
                },
                PaymentGatewayController: {
                    enable: !0
                },
                VendorListingInfiniteScrollController: {
                    enable: !1
                },
                TrackingInitController: {
                    enable: !0
                },
                CheckoutLoyaltyProgramController: {
                    enable: !1
                },
                CheckoutPaymentTypeController: {
                    enable: !1
                },
                LazyImageController: {
                    enable: !0
                },
                LazyImageSimplifiedController: {
                    enable: !0
                },
                PrefillController: {
                    enable: !0
                },
                NewsletterController: {
                    enable: !1
                },
                MobileAppController: {
                    enable: !1
                },
                MobileController: {
                    enable: !1
                },
                AdyenCsePaymentFormController: {
                    enable: !1
                },
                SiteOverrideController: {
                    enable: !0
                },
                CheckoutCustomerAddressesController: {
                    enable: !1
                },
                DominosController: {
                    enable: !1
                },
                DirectPayController: {
                    enable: !1
                },
                DirectPayMobileController: {
                    enable: !1
                },
                OrderStepsController: {
                    enable: !1
                },
                RatingController: {
                    enable: !1
                },
                DropdownToTypeaheadController: {
                    enable: !0
                },
                DeliveryAddressController: {
                    enable: !1
                },
                VendorDetailReviewInfiniteScrollController: {
                    enable: !1
                },
                EventController: {
                    enable: !1
                },
                CookieNoticeController: {
                    enable: !1
                },
                ToggleElementsController: {
                    enable: !1
                },
                SmartbannerController: {
                    enable: !1
                },
                MiddlewareIntegrationController: {
                    enable: !1
                },
                LoginRegisterTabsController: {
                    enable: !1
                },
                MobileMenuController: {
                    enable: !0
                },
                PinLocationController: {
                    enable: !1,
                    mapsUrl: null
                }
            },
            init: function() {
                this["super"].apply(this, $.merge(["init"], arguments)),
                    this.hasFullJsSupport() ? (this.initController("Auth"),
                        this.initController("DropdownToTypeahead"),
                        this.initController("Prefill"),
                        this.initController("LocationSearch"),
                        this.initController("VendorListingMenuFilterForm"),
                        this.initController("VendorDetailMenuScrollSpy"),
                        this.initController("ChangeLocationLink"),
                        this.initController("Tooltip"),
                        this.initController("VendorDetailProductVariation"),
                        this.initController("VendorDetailTabs"),
                        this.initController("VendorDetailCategory"),
                        this.initController("VendorDetailFilters"),
                        this.initController("Cart"),
                        this.initController("Livechat"),
                        this.initController("Form"),
                        this.initController("ToggleElements"),
                        this.initController("Checkout"),
                        this.initController("SmoothScroll"),
                        this.initController("PaymentGateway"),
                        this.initController("VendorListingInfiniteScroll"),
                        this.initController("TrackingInit"),
                        this.initController("CheckoutLoyaltyProgram"),
                        this.initController("CheckoutPaymentType"),
                        this.initController("AdyenCsePaymentForm"),
                        this.initController("LazyImage"),
                        this.initController("Newsletter"),
                        this.initController("MobileApp"),
                        this.initController("Mobile"),
                        this.initController("SiteOverride"),
                        this.initController("StickyElement"),
                        this.initController("CheckoutCustomerAddresses"),
                        this.initController("DeliveryAddress"),
                        this.initController("Dominos"),
                        this.initController("DirectPay"),
                        this.initController("DirectPayMobile"),
                        this.initController("MiddlewareIntegration"),
                        this.initController("OrderSteps"),
                        this.initController("Rating"),
                        this.initController("VendorDetailReviewInfiniteScroll"),
                        this.initController("Event"),
                        this.initController("CookieNotice"),
                        this.initController("Smartbanner"),
                        this.initController("LoginRegisterTabs"),
                        this.initController("MobileMenu"),
                        this.initController("PinLocation")) : (this.initController("Mobile"),
                        this.initController("SiteOverride"),
                        this.initController("LazyImageSimplified"),
                        this.initController("OrderSteps"))
            },
            initController: function(a, b) {
                var c = a + "Controller";
                "undefined" != typeof this.__config[c] && this.__config[c].enable && this.getController.call(this, a, b).init()
            },
            getController: function getController(controller, args) {
                var controllerName = controller + "Controller";
                return "undefined" == typeof this[controllerName] && (this[controllerName] = eval('new _FD["' + controllerName + '"](this.getConfig(false)' + (args ? "," + args.join(",") : "") + ")")),
                    this[controllerName]
            }
        }),
            $(document).ready(function() {
                new _FD.InitController(FD.getConfig()).init()
            })
    }(window, document, jQuery, _FD),
    function(a, b) {
        "function" == typeof define && define.amd ? define("deeplink", b(a)) : "object" == typeof exports ? module.exports = b(a) : a.deeplink = b(a)
    }(window || this, function(a) {
        "use strict";
        if (a.document && a.navigator) {
            var b, c = {}, d = {
                iOS: {},
                android: {},
                androidDisabled: !1,
                fallback: !0,
                delay: 1e3,
                delta: 500
            }, e = function(a, b) {
                var c = {};
                for (var d in a)
                    c[d] = a[d];
                for (var d in b)
                    c[d] = b[d];
                return c
            }, f = function() {
                var a = "itms-apps://itunes.apple.com/app/"
                    , b = c.iOS.appName
                    , d = c.iOS.appId;
                return d && b ? a + b + "/id" + d + "?mt=8" : null
            }, g = function() {
                var a = "market://details?id="
                    , b = c.android.appId;
                return b ? a + b : null
            }, h = function() {
                var a = {
                    ios: c.iOS.storeUrl || f(),
                    android: c.android.storeUrl || g()
                };
                return a[c.platform]
            }, i = function() {
                return navigator.userAgent.match("Android")
            }, j = function() {
                return navigator.userAgent.match("iPad") || navigator.userAgent.match("iPhone") || navigator.userAgent.match("iPod")
            }, k = function() {
                return i() || j()
            }, l = function(a) {
                return function() {
                    var b = h()
                        , d = c.delay + c.delta;
                    "string" == typeof b && Date.now() - a < d && (window.location.href = b)
                }
            }, m = function(a) {
                c = e(d, a),
                i() && (c.platform = "android"),
                j() && (c.platform = "ios")
            }, n = function(a) {
                if (!k())
                    return !1;
                if (!i() || !c.androidDisabled) {
                    if (i() && !navigator.userAgent.match(/Firefox/)) {
                        var d = a.match(/([^:]+):\/\/(.+)$/i);
                        a = "intent://" + d[2] + "#Intent;scheme=" + d[1],
                            a += ";package=" + c.android.appId + ";end"
                    }
                    c.fallback && (b = setTimeout(l(Date.now()), c.delay));
                    var e = document.createElement("iframe");
                    return e.onload = function() {
                        clearTimeout(b),
                            e.parentNode.removeChild(e),
                            window.location.href = a
                    }
                        ,
                        e.src = a,
                        e.setAttribute("style", "display:none;"),
                        document.body.appendChild(e),
                        !0
                }
            };
            return {
                setup: m,
                open: n
            }
        }
    }),
    !function(a) {
        if ("object" == typeof exports && "undefined" != typeof module)
            module.exports = a();
        else if ("function" == typeof define && define.amd)
            define([], a);
        else {
            var b;
            "undefined" != typeof window ? b = window : "undefined" != typeof global ? b = global : "undefined" != typeof self && (b = self),
                b.creditCardType = a()
        }
    }(function() {
        return function a(b, c, d) {
            function e(g, h) {
                if (!c[g]) {
                    if (!b[g]) {
                        var i = "function" == typeof require && require;
                        if (!h && i)
                            return i(g, !0);
                        if (f)
                            return f(g, !0);
                        var j = new Error("Cannot find module '" + g + "'");
                        throw j.code = "MODULE_NOT_FOUND",
                            j
                    }
                    var k = c[g] = {
                        exports: {}
                    };
                    b[g][0].call(k.exports, function(a) {
                        var c = b[g][1][a];
                        return e(c ? c : a)
                    }, k, k.exports, a, b, c, d)
                }
                return c[g].exports
            }
            for (var f = "function" == typeof require && require, g = 0; g < d.length; g++)
                e(d[g]);
            return e
        }({
            1: [function(a, b, c) {
                "use strict";
                function d(a) {
                    var b, c, d;
                    return a ? (b = a.prefixPattern.source,
                        c = a.exactPattern.source,
                        d = JSON.parse(JSON.stringify(a)),
                        d.prefixPattern = b,
                        d.exactPattern = c,
                        d) : null
                }
                function e(a) {
                    var b, c, e, g = [], h = [];
                    if (!("string" == typeof a || a instanceof String))
                        return [];
                    for (e = 0; e < s.length; e++)
                        b = s[e],
                            c = f[b],
                            0 !== a.length ? c.exactPattern.test(a) ? h.push(d(c)) : c.prefixPattern.test(a) && g.push(d(c)) : g.push(d(c));
                    return h.length ? h : g
                }
                var f = {}
                    , g = "visa"
                    , h = "master-card"
                    , i = "american-express"
                    , j = "diners-club"
                    , k = "discover"
                    , l = "jcb"
                    , m = "unionpay"
                    , n = "maestro"
                    , o = "CVV"
                    , p = "CID"
                    , q = "CVC"
                    , r = "CVN"
                    , s = [g, h, i, j, k, l, m, n];
                f[g] = {
                    niceType: "Visa",
                    type: g,
                    prefixPattern: /^4$/,
                    exactPattern: /^4\d*$/,
                    gaps: [4, 8, 12],
                    lengths: [16, 18, 19],
                    code: {
                        name: o,
                        size: 3
                    }
                },
                    f[h] = {
                        niceType: "MasterCard",
                        type: h,
                        prefixPattern: /^(5|5[1-5]|2|22|222|222[1-9]|2[3-6]|27|27[0-2]|2720)$/,
                        exactPattern: /^(5[1-5]|222[1-9]|2[3-6]|27[0-1]|2720)\d*$/,
                        gaps: [4, 8, 12],
                        lengths: [16],
                        code: {
                            name: q,
                            size: 3
                        }
                    },
                    f[i] = {
                        niceType: "American Express",
                        type: i,
                        prefixPattern: /^(3|34|37)$/,
                        exactPattern: /^3[47]\d*$/,
                        isAmex: !0,
                        gaps: [4, 10],
                        lengths: [15],
                        code: {
                            name: p,
                            size: 4
                        }
                    },
                    f[j] = {
                        niceType: "Diners Club",
                        type: j,
                        prefixPattern: /^(3|3[0689]|30[0-5])$/,
                        exactPattern: /^3(0[0-5]|[689])\d*$/,
                        gaps: [4, 10],
                        lengths: [14, 16, 19],
                        code: {
                            name: o,
                            size: 3
                        }
                    },
                    f[k] = {
                        niceType: "Discover",
                        type: k,
                        prefixPattern: /^(6|60|601|6011|65|64|64[4-9])$/,
                        exactPattern: /^(6011|65|64[4-9])\d*$/,
                        gaps: [4, 8, 12],
                        lengths: [16, 19],
                        code: {
                            name: p,
                            size: 3
                        }
                    },
                    f[l] = {
                        niceType: "JCB",
                        type: l,
                        prefixPattern: /^(2|21|213|2131|1|18|180|1800|3|35)$/,
                        exactPattern: /^(2131|1800|35)\d*$/,
                        gaps: [4, 8, 12],
                        lengths: [16],
                        code: {
                            name: o,
                            size: 3
                        }
                    },
                    f[m] = {
                        niceType: "UnionPay",
                        type: m,
                        prefixPattern: /^((6|62|62\d|(621(?!83|88|98|99))|622(?!06)|627[02,06,07]|628(?!0|1)|629[1,2])|622018)$/,
                        exactPattern: /^(((620|(621(?!83|88|98|99))|622(?!06|018)|62[3-6]|627[02,06,07]|628(?!0|1)|629[1,2]))\d*|622018\d{12})$/,
                        gaps: [4, 8, 12],
                        lengths: [16, 17, 18, 19],
                        code: {
                            name: r,
                            size: 3
                        }
                    },
                    f[n] = {
                        niceType: "Maestro",
                        type: n,
                        prefixPattern: /^(5|5[06-9]|6\d*)$/,
                        exactPattern: /^(5[06-9]|6[37])\d*$/,
                        gaps: [4, 8, 12],
                        lengths: [12, 13, 14, 15, 16, 17, 18, 19],
                        code: {
                            name: q,
                            size: 3
                        }
                    },
                    e.getTypeInfo = function(a) {
                        return d(f[a])
                    }
                    ,
                    e.types = {
                        VISA: g,
                        MASTERCARD: h,
                        AMERICAN_EXPRESS: i,
                        DINERS_CLUB: j,
                        DISCOVER: k,
                        JCB: l,
                        UNIONPAY: m,
                        MAESTRO: n
                    },
                    b.exports = e
            }
                , {}]
        }, {}, [1])(1)
    });
