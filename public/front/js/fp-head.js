!function(a) {
    function b(a) {
        return "[object Function]" == Object.prototype.toString.call(a)
    }
    function c(a) {
        return "[object Array]" == Object.prototype.toString.call(a)
    }
    function d(a, b) {
        var c = /^\w+\:\/\//;
        return /^\/\/\/?/.test(a) ? a = location.protocol + a : c.test(a) || "/" == a.charAt(0) || (a = (b || "") + a),
            c.test(a) ? a : ("/" == a.charAt(0) ? r : q) + a
    }
    function e(a, b) {
        for (var c in a)
            a.hasOwnProperty(c) && (b[c] = a[c]);
        return b
    }
    function f(a) {
        for (var b = !1, c = 0; c < a.scripts.length; c++)
            a.scripts[c].ready && a.scripts[c].exec_trigger && (b = !0,
                a.scripts[c].exec_trigger(),
                a.scripts[c].exec_trigger = null);
        return b
    }
    function g(a, b, c, d) {
        a.onload = a.onreadystatechange = function() {
            a.readyState && "complete" != a.readyState && "loaded" != a.readyState || b[c] || (a.onload = a.onreadystatechange = null,
                d())
        }
    }
    function h(a) {
        a.ready = a.finished = !0;
        for (var b = 0; b < a.finished_listeners.length; b++)
            a.finished_listeners[b]();
        a.ready_listeners = [],
            a.finished_listeners = []
    }
    function i(a, b, c, d, e) {
        setTimeout(function() {
            var f, h, i = b.real_src;
            if ("item"in s) {
                if (!s[0])
                    return void setTimeout(arguments.callee, 25);
                s = s[0]
            }
            f = document.createElement("script"),
            b.type && (f.type = b.type),
            b.charset && (f.charset = b.charset),
                e ? w ? (c.elem = f,
                    v ? (f.preload = !0,
                        f.onpreload = d) : f.onreadystatechange = function() {
                        "loaded" == f.readyState && d()
                    }
                    ,
                    f.src = i) : e && 0 == i.indexOf(r) && a[l] ? (h = new XMLHttpRequest,
                    h.onreadystatechange = function() {
                        4 == h.readyState && (h.onreadystatechange = function() {}
                            ,
                            c.text = h.responseText + "\n//@ sourceURL=" + i,
                            d())
                    }
                    ,
                    h.open("GET", i),
                    h.send()) : (f.type = "text/cache-script",
                    g(f, c, "ready", function() {
                        s.removeChild(f),
                            d()
                    }),
                    f.src = i,
                    s.insertBefore(f, s.firstChild)) : x ? (f.async = !1,
                    g(f, c, "finished", d),
                    f.src = i,
                    s.insertBefore(f, s.firstChild)) : (g(f, c, "finished", d),
                    f.src = i,
                    s.insertBefore(f, s.firstChild))
        }, 0)
    }
    function j() {
        function q(a, b, c) {
            function d() {
                null != e && (e = null,
                    h(c))
            }
            var e;
            A[b.src].finished || (a[n] || (A[b.src].finished = !0),
                e = c.elem || document.createElement("script"),
            b.type && (e.type = b.type),
            b.charset && (e.charset = b.charset),
                g(e, c, "finished", d),
                c.elem ? c.elem = null : c.text ? (e.onload = e.onreadystatechange = null,
                    e.text = c.text) : e.src = b.real_src,
                s.insertBefore(e, s.firstChild),
            c.text && d())
        }
        function r(a, b, c, e) {
            var f, g, j = function() {
                b.ready_cb(b, function() {
                    q(a, b, f)
                })
            }, k = function() {
                b.finished_cb(b, c)
            };
            b.src = d(b.src, a[p]),
                b.real_src = b.src + (a[o] ? (/\?.*$/.test(b.src) ? "&_" : "?_") + ~~(1e9 * Math.random()) + "=" : ""),
            A[b.src] || (A[b.src] = {
                items: [],
                finished: !1
            }),
                g = A[b.src].items,
                a[n] || 0 == g.length ? (f = g[g.length] = {
                    ready: !1,
                    finished: !1,
                    ready_listeners: [j],
                    finished_listeners: [k]
                },
                    i(a, b, f, e ? function() {
                            f.ready = !0;
                            for (var a = 0; a < f.ready_listeners.length; a++)
                                f.ready_listeners[a]();
                            f.ready_listeners = []
                        }
                        : function() {
                            h(f)
                        }
                        , e)) : (f = g[0],
                    f.finished ? k() : f.finished_listeners.push(k))
        }
        function t() {
            function a(a, b) {
                a.ready = !0,
                    a.exec_trigger = b,
                    g()
            }
            function d(a, b) {
                a.ready = a.finished = !0,
                    a.exec_trigger = null;
                for (var c = 0; c < b.scripts.length; c++)
                    if (!b.scripts[c].finished)
                        return;
                b.finished = !0,
                    g()
            }
            function g() {
                for (; n < l.length; )
                    if (b(l[n]))
                        try {
                            l[n++]()
                        } catch (a) {}
                    else {
                        if (!l[n].finished) {
                            if (f(l[n]))
                                continue;
                            break
                        }
                        n++
                    }
                n == l.length && (o = !1,
                    j = !1)
            }
            function h() {
                j && j.scripts || l.push(j = {
                    scripts: [],
                    finished: !0
                })
            }
            var i, j, k = e(v, {}), l = [], n = 0, o = !1;
            return i = {
                script: function() {
                    for (var f = 0; f < arguments.length; f++)
                        !function(f, g) {
                            var l;
                            c(f) || (g = [f]);
                            for (var n = 0; n < g.length; n++)
                                h(),
                                    f = g[n],
                                b(f) && (f = f()),
                                f && (c(f) ? (l = [].slice.call(f),
                                    l.unshift(n, 1),
                                    [].splice.apply(g, l),
                                    n--) : ("string" == typeof f && (f = {
                                    src: f
                                }),
                                    f = e(f, {
                                        ready: !1,
                                        ready_cb: a,
                                        finished: !1,
                                        finished_cb: d
                                    }),
                                    j.finished = !1,
                                    j.scripts.push(f),
                                    r(k, f, j, x && o),
                                    o = !0,
                                k[m] && i.wait()))
                        }(arguments[f], arguments[f]);
                    return i
                },
                wait: function() {
                    if (arguments.length > 0) {
                        for (var a = 0; a < arguments.length; a++)
                            l.push(arguments[a]);
                        j = l[l.length - 1]
                    } else
                        j = !1;
                    return g(),
                        i
                }
            },
                {
                    script: i.script,
                    wait: i.wait,
                    setOptions: function(a) {
                        return e(a, k),
                            i
                    }
                }
        }
        var u, v = {}, x = w || y, z = [], A = {};
        return v[l] = !0,
            v[m] = !1,
            v[n] = !1,
            v[o] = !1,
            v[p] = "",
            u = {
                setGlobalDefaults: function(a) {
                    return e(a, v),
                        u
                },
                setOptions: function() {
                    return t().setOptions.apply(null, arguments)
                },
                script: function() {
                    return t().script.apply(null, arguments)
                },
                wait: function() {
                    return t().wait.apply(null, arguments)
                },
                queueScript: function() {
                    return z[z.length] = {
                        type: "script",
                        args: [].slice.call(arguments)
                    },
                        u
                },
                queueWait: function() {
                    return z[z.length] = {
                        type: "wait",
                        args: [].slice.call(arguments)
                    },
                        u
                },
                runQueue: function() {
                    for (var a, b = u, c = z.length, d = c; --d >= 0; )
                        a = z.shift(),
                            b = b[a.type].apply(null, a.args);
                    return b
                },
                noConflict: function() {
                    return a.$LAB = k,
                        u
                },
                sandbox: function() {
                    return j()
                }
            }
    }
    var k = a.$LAB
        , l = "UseLocalXHR"
        , m = "AlwaysPreserveOrder"
        , n = "AllowDuplicates"
        , o = "CacheBust"
        , p = "BasePath"
        , q = /^[^?#]*\//.exec(location.href)[0]
        , r = /^\w+\:\/\/\/?[^\/]+/.exec(q)[0]
        , s = document.head || document.getElementsByTagName("head")
        , t = a.opera && "[object Opera]" == Object.prototype.toString.call(a.opera) || "MozAppearance"in document.documentElement.style
        , u = document.createElement("script")
        , v = "boolean" == typeof u.preload
        , w = v || u.readyState && "uninitialized" == u.readyState
        , x = !w && u.async === !0
        , y = !w && !x && !t;
    a.$LAB = j(),
        function(a, b, c) {
            null == document.readyState && document[a] && (document.readyState = "loading",
                document[a](b, c = function() {
                        document.removeEventListener(b, c, !1),
                            document.readyState = "complete"
                    }
                    , !1))
        }("addEventListener", "DOMContentLoaded")
}(this),
    window.tracking = function(a, b) {
        var c = !1
            , d = !1
            , e = "dataLayer"
            , f = !1
            , g = "ga"
            , h = !1
            , i = function(a) {
            c = a
        }
            , j = function() {
            return !!c
        }
            , k = function(a) {
            d = a
        }
            , l = function() {
            return d
        }
            , m = function(a) {
            e = a
        }
            , n = function() {
            return e
        }
            , o = function(a) {
            f = a
        }
            , p = function() {
            return !!f
        }
            , q = function(a) {
            g = a
        }
            , r = function() {
            return g
        }
            , s = function() {
            var a = null;
            j() && v(),
            p() && (u(),
                w(),
                a = y)
        }
            , t = function() {
            p() && y()
        }
            , u = function() {
            var b = r();
            a.GoogleAnalyticsObject = b,
            a[b] || (a[b] = function() {
                    a[b].q = a[b].q || [],
                        a[b].q.push(arguments)
                }
            ),
                a[b].l = 1 * new Date
        }
            , v = function() {
            var b = n();
            a[b] = a[b] || [],
                a[b].push({
                    "gtm.start": (new Date).getTime(),
                    event: "gtm.js"
                })
        }
            , w = function() {
            $LAB.script("//www.google-analytics.com/analytics.js")
        }
            , x = function() {
            $LAB.script("//www.googletagmanager.com/gtm.js?id=" + l() + "&l=" + n())
        }
            , y = function() {
            var c = a[n()][0]
                , d = a[r()];
            if ("undefined" != typeof c.ga_code && "undefined" != typeof d && !h) {
                if (h = !0,
                        d("create", c.ga_code, c.ga_domain || "auto"),
                    "undefined" != typeof c.referrer && d("set", "referrer", c.referrer),
                        d("require", "linkid", "linkid.js"),
                        d("require", "displayfeatures"),
                    "undefined" != typeof c.app_version && d("set", "Version", c.app_version),
                    "undefined" != typeof c.city_id && "undefined" != typeof c.area_id && d("set", "dimension1", c.city_id + "_" + c.area_id),
                    "undefined" != typeof c.ab_group && d("set", "dimension2", c.ab_group),
                    "undefined" != typeof c.country_id && d("set", "dimension3", c.country_id),
                    "undefined" != typeof c.city_id && "undefined" != typeof c.lat && "undefined" != typeof c.lng && d("set", "dimension4", c.city_id + "_" + c.lat + "+" + c.lng),
                    "undefined" != typeof c.customer_control && d("set", "dimension5", c.customer_control),
                    "undefined" != typeof c.payment_type && d("set", "dimension6", c.payment_type),
                    "undefined" != typeof c.customer_status && d("set", "dimension7", c.customer_status),
                        "number" == typeof c.customer_id ? d("set", "&uid", c.customer_id) : d("set", "&uid", b),
                    "undefined" != typeof c.newsletter_id && c.newsletter_id && d("send", "event", "Lead", "type_02", c.newsletter_id, 1, {
                        nonInteraction: 1
                    }),
                    "undefined" != typeof c.transactionId && "Order Success Page" === c.page_type) {
                    d("require", "ecommerce", "ecommerce.js");
                    var e = {
                        id: c.transactionId
                    };
                    if ("undefined" != typeof c.transactionAffiliation && (e.affiliation = c.transactionAffiliation),
                        "undefined" != typeof c.transactionTotal && (e.revenue = c.transactionTotal),
                        "undefined" != typeof c.transactionShipping && (e.shipping = c.transactionShipping),
                        "undefined" != typeof c.transactionTax && (e.tax = c.transactionTax),
                            d("ecommerce:addTransaction", e),
                        "undefined" != typeof c.transactionProducts && c.transactionProducts.length > 0)
                        for (var f = 0; f < c.transactionProducts.length; f++)
                            d("ecommerce:addItem", c.transactionProducts[f]);
                    d("ecommerce:send"),
                    "undefined" != typeof c.conversion_duration && d("send", "timing", "Conversion Duration", "Time to order", c.conversion_duration, c.transactionId),
                        d("ecommerce:clear")
                }
                d("send", "pageview")
            }
        };
        return {
            isGtmActive: j,
            setGtmActive: i,
            setGtmId: k,
            setDataLayerObjectName: m,
            getDataLayerObjectName: n,
            isGaActive: p,
            setGaActive: o,
            setGaObjectName: q,
            loadGtm: x,
            initTracking: s,
            fireTracking: t
        }
    }(window),
    function(a, b) {
        a._FD = {},
            a.FD = {},
            a.FD._config = {},
            a.FD.getConfig = function() {
                return a.FD._config
            }
            ,
            a.FD.setControllerConfig = function(b, c, d) {
                b += "Controller",
                    a.FD._config[b] = a.FD._config[b] || {};
                for (var e = a.FD._config[b], f = c.split("."); f.length; )
                    c = f.shift(),
                        e[c] = e[c] || {},
                    0 === f.length && (e[c] = d),
                        e = e[c];
                return a.FD
            }
    }(window),
    function(a, b, c, d) {
        a[c] = !1;
        var e = function() {
            (b.addEventListener || "load" === event.type || "complete" === b.readyState) && (a[c] = !0)
        };
        "complete" === b.readyState ? a[c] = !0 : b.addEventListener ? a.addEventListener("load", e, !1) : a.attachEvent("onload", e)
    }(window, document, "__onload"),
    function(a, b) {
        var c = !0;
        b.match(/Opera Mini/i) && (c = !1),
        b.match(/OPiOS\//i) && (c = !1),
        b.match(/IEMobile\/10\.0/) && (c = !1),
            a.hasFullJsSupport = c
    }(window.FD._config, navigator.userAgent),
    function(a, b, c) {
        b.className = a ? b.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + " js " : b.className + " minimal-js "
    }(window.FD._config.hasFullJsSupport, document.documentElement);
