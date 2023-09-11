/*
FullCalendar v5.8.0
Docs & License: https://fullcalendar.io/
(c) 2021 Adam Shaw
*/
var FullCalendar = function (e) {
    "use strict";
    var t = function (e, n) {
        return (t = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function (e, t) {
            e.__proto__ = t
        } || function (e, t) {
            for (var n in t) 
                Object
                    .prototype
                    .hasOwnProperty
                    .call(t, n) && (e[n] = t[n])
            })(e, n)
    };
    function n(e, n) {
        if ("function" != typeof n && null !== n) 
            throw new TypeError(
                "Class extends value " + String(n) + " is not a constructor or null"
            );
        function r() {
            this.constructor = e
        }
        t(e, n),
        e.prototype = null === n
            ? Object.create(n)
            : (r.prototype = n.prototype, new r)
    }
    var r = function () {
        return (r = Object.assign || function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++) 
                for (var o in t = arguments[n]) 
                    Object
                        .prototype
                        .hasOwnProperty
                        .call(t, o) && (e[o] = t[o]);
            return e
        }).apply(this, arguments)
    };
    function o(e, t) {
        for (var n = 0, r = t.length, o = e.length; n < r; n++, o++) 
            e[o] = t[n];
        return e
    }
    var i,
        a,
        s,
        l,
        u,
        c = {},
        d = [],
        p = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
    function f(e, t) {
        for (var n in t) 
            e[n] = t[n];
        return e
    }
    function h(e) {
        var t = e.parentNode;
        t && t.removeChild(e)
    }
    function v(e, t, n) {
        var r,
            o,
            i,
            a = arguments,
            s = {};
        for (i in t) 
            "key" == i
                ? r = t[i]
                : "ref" == i
                    ? o = t[i]
                    : s[i] = t[i];
        if (arguments.length > 3) 
            for (n = [n], i = 3; i < arguments.length; i++) 
                n.push(a[i]);
    if (
            null != n && (s.children = n),
            "function" == typeof e && null != e.defaultProps
        ) 
            for (i in e.defaultProps) 
                void 0 === s[i] && (s[i] = e.defaultProps[i]);
    return g(e, s, r, o, null)
    }
    function g(e, t, n, r, o) {
        var a = {
            type: e,
            props: t,
            key: n,
            ref: r,
            __k: null,
            __: null,
            __b: 0,
            __e: null,
            __d: void 0,
            __c: null,
            __h: null,
            constructor: void 0,
            __v: null == o
                ? ++i.__v
                : o
        };
        return null != i.vnode && i.vnode(a),
        a
    }
    function m(e) {
        return e.children
    }
    function y(e, t) {
        this.props = e,
        this.context = t
    }
    function E(e, t) {
        if (null == t) 
            return e.__
                ? E(e.__, e.__.__k.indexOf(e) + 1)
                : null;
        for (var n; t < e.__k.length; t++) 
            if (null != (n = e.__k[t]) && null != n.__e) 
                return n.__e;
    return "function" == typeof e.type
            ? E(e)
            : null
    }
    function S(e) {
        var t,
            n;
        if (null != (e = e.__) && null != e.__c) {
            for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++) 
                if (null != (n = e.__k[t]) && null != n.__e) {
                    e.__e = e.__c.base = n.__e;
                    break
                }
            return S(e)
        }
    }
    function D(e) {
        (!e.__d && (e.__d = !0) && a.push(e) && !b.__r++ || l !== i.debounceRendering) && (
            (l = i.debounceRendering) || s
        )(b)
    }
    function b() {
        for (var e; b.__r = a.length;) 
            e = a.sort((function (e, t) {
                return e.__v.__b - t.__v.__b
            })),
            a = [],
            e.some((function (e) {
                var t,
                    n,
                    r,
                    o,
                    i,
                    a;
                e.__d && (
                    i = (o = (t = e).__v).__e,
                    (a = t.__P) && (n = [], (r = f({}, o)).__v = o.__v + 1, P(
                        a,
                        o,
                        r,
                        t.__n,
                        void 0 !== a.ownerSVGElement,
                        null != o.__h
                            ? [i]
                            : null,
                        n,
                        null == i
                            ? E(o)
                            : i,
                        o.__h
                    ), I(n, o), o.__e != i && S(o))
                )
            }))
    }
    function C(e, t, n, r, o, i, a, s, l, u) {
        var p,
            f,
            h,
            v,
            y,
            S,
            D,
            b = r && r.__k || d,
            C = b.length;
        for (n.__k = [], p = 0; p < t.length; p++) 
            if (null != (
                v = n.__k[p] = null == (v = t[p]) || "boolean" == typeof v
                    ? null
                    : "string" == typeof v || "number" == typeof v || "bigint" == typeof v
                        ? g(null, v, null, null, v)
                        : Array.isArray(v)
                            ? g(m, {
                                children: v
                            }, null, null, null)
                            : v.__b > 0
                                ? g(v.type, v.props, v.key, null, v.__v)
                                : v
            )) {
                if (
                    v.__ = n,
                    v.__b = n.__b + 1,
                    null === (h = b[p]) || h && v.key == h.key && v.type === h.type
                ) 
                    b[p] = void 0;
                else 
                    for (f = 0; f < C; f++) {
                        if ((h = b[f]) && v.key == h.key && v.type === h.type) {
                            b[f] = void 0;
                            break
                        }
                        h = null
                    }
                P(e, v, h = h || c, o, i, a, s, l, u),
                y = v.__e,
                (f = v.ref) && h.ref != f && (
                    D || (D = []),
                    h.ref && D.push(h.ref, null, v),
                    D.push(f, v.__c || y, v)
                ),
                null != y
                    ? (
                        null == S && (S = y),
                        "function" == typeof v.type && null != v.__k && v.__k === h.__k
                            ? v.__d = l = w(v, l, e)
                            : l = _(e, v, h, b, y, l),
                        u || "option" !== n.type
                            ? "function" == typeof n.type && (n.__d = l)
                            : e.value = ""
                    )
                    : l && h.__e == l && l.parentNode != e && (l = E(h))
            }
        for (n.__e = S, p = C; p--;) 
            null != b[p] && (
                "function" == typeof n.type && null != b[p].__e && b[p].__e == n.__d && (n.__d = E(r, p + 1)),
                O(b[p], b[p])
            );
        if (D) 
            for (p = 0; p < D.length; p++) 
                H(D[p], D[++p], D[++p])
    }
    function w(e, t, n) {
        var r,
            o;
        for (r = 0; r < e.__k.length; r++) 
            (o = e.__k[r]) && (
                o.__ = e,
                t = "function" == typeof o.type
                    ? w(o, t, n)
                    : _(n, o, o, e.__k, o.__e, t)
            );
        return t
    }
    function R(e, t) {
        return t = t || [],
        null == e || "boolean" == typeof e || (
            Array.isArray(e)
                ? e.some((function (e) {
                    R(e, t)
                }))
                : t.push(e)
        ),
        t
    }
    function _(e, t, n, r, o, i) {
        var a,
            s,
            l;
        if (void 0 !== t.__d) 
            a = t.__d,
            t.__d = void 0;
        else if (null == n || o != i || null == o.parentNode) 
            e : if (null == i || i.parentNode !== e) 
                e.appendChild(o),
                a = null;
            else {
                for (s = i, l = 0; (s = s.nextSibling) && l < r.length; l += 2) 
                    if (s == o) 
                        break e;
            e.insertBefore(o, i),
                a = i
            }
        return void 0 !== a
            ? a
            : o.nextSibling
    }
    function T(e, t, n) {
        "-" === t[0]
            ? e.setProperty(t, n)
            : e[t] = null == n
                ? ""
                : "number" != typeof n || p.test(t)
                    ? n
                    : n + "px"
    }
    function k(e, t, n, r, o) {
        var i;
        e : if ("style" === t) 
            if ("string" == typeof n) 
                e.style.cssText = n;
            else {
                if ("string" == typeof r && (e.style.cssText = r = ""), r) 
                    for (t in r) 
                        n && t in n || T(e.style, t, "");
            if (n) 
                    for (t in n) 
                        r && n[t] === r[t] || T(e.style, t, n[t])
            }
        else if ("o" === t[0] && "n" === t[1]) 
            i = t !== (t = t.replace(/Capture$/, "")),
            t = t.toLowerCase() in e
                ? t
                    .toLowerCase()
                    .slice(2)
                : t.slice(2),
            e.l || (e.l = {}),
            e.l[t + i] = n,
            n
                ? r || e.addEventListener(
                    t,
                    i
                        ? M
                        : x,
                    i
                )
                : e.removeEventListener(
                    t,
                    i
                        ? M
                        : x,
                    i
                );
        else if ("dangerouslySetInnerHTML" !== t) {
            if (o) 
                t = t
                    .replace(/xlink[H:h]/, "h")
                    .replace(/sName$/, "s");
            else if ("href" !== t && "list" !== t && "form" !== t && "tabIndex" !== t && "download" !== t && t in e) 
                try {
                    e[t] = null == n
                        ? ""
                        : n;
                    break e
                } catch (e) {}
            "function" == typeof n || (
                null != n && (!1 !== n || "a" === t[0] && "r" === t[1])
                    ? e.setAttribute(t, n)
                    : e.removeAttribute(t)
            )
        }
    }
    function x(e) {
        this.l[e.type + !1](
            i.event
                ? i.event(e)
                : e
        )
    }
    function M(e) {
        this.l[e.type + !0](
            i.event
                ? i.event(e)
                : e
        )
    }
    function P(e, t, n, r, o, a, s, l, u) {
        var c,
            d,
            p,
            h,
            v,
            g,
            E,
            S,
            D,
            b,
            w,
            R = t.type;
        if (void 0 !== t.constructor) 
            return null;
        null != n.__h && (u = n.__h, l = t.__e = n.__e, t.__h = null, a = [l]),
        (c = i.__b) && c(t);
        try {
            e : if ("function" == typeof R) {
                if (
                    S = t.props,
                    D = (c = R.contextType) && r[c.__c],
                    b = c
                        ? D
                            ? D.props.value
                            : c.__
                        : r,
                    n.__c
                        ? E = (d = t.__c = n.__c).__ = d.__E
                        : (
                            "prototype" in R && R.prototype.render
                                ? t.__c = d = new R(S, b)
                                : (t.__c = d = new y(S, b), d.constructor = R, d.render = A),
                            D && D.sub(d),
                            d.props = S,
                            d.state || (d.state = {}),
                            d.context = b,
                            d.__n = r,
                            p = d.__d = !0,
                            d.__h = []
                        ),
                    null == d.__s && (d.__s = d.state),
                    null != R.getDerivedStateFromProps && (
                        d.__s == d.state && (d.__s = f({}, d.__s)),
                        f(d.__s, R.getDerivedStateFromProps(S, d.__s))
                    ),
                    h = d.props,
                    v = d.state,
                    p
                ) 
                    null == R.getDerivedStateFromProps && null != d.componentWillMount && d.componentWillMount(),
                    null != d.componentDidMount && d
                        .__h
                        .push(d.componentDidMount);
                else {
                    if (
                        null == R.getDerivedStateFromProps && S !== h && null != d.componentWillReceiveProps && d.componentWillReceiveProps(S, b),
                        !d.__e && null != d.shouldComponentUpdate && !1 === d.shouldComponentUpdate(S, d.__s, b) || t.__v === n.__v
                    ) {
                        d.props = S,
                        d.state = d.__s,
                        t.__v !== n.__v && (d.__d = !1),
                        d.__v = t,
                        t.__e = n.__e,
                        t.__k = n.__k,
                        t
                            .__k
                            .forEach((function (e) {
                                e && (e.__ = t)
                            })),
                        d.__h.length && s.push(d);
                        break e
                    }
                    null != d.componentWillUpdate && d.componentWillUpdate(S, d.__s, b),
                    null != d.componentDidUpdate && d
                        .__h
                        .push((function () {
                            d.componentDidUpdate(h, v, g)
                        }))
                }
                d.context = b,
                d.props = S,
                d.state = d.__s,
                (c = i.__r) && c(t),
                d.__d = !1,
                d.__v = t,
                d.__P = e,
                c = d.render(d.props, d.state, d.context),
                d.state = d.__s,
                null != d.getChildContext && (r = f(f({}, r), d.getChildContext())),
                p || null == d.getSnapshotBeforeUpdate || (g = d.getSnapshotBeforeUpdate(h, v)),
                w = null != c && c.type === m && null == c.key
                    ? c.props.children
                    : c,
                C(
                    e,
                    Array.isArray(w)
                        ? w
                        : [w],
                    t,
                    n,
                    r,
                    o,
                    a,
                    s,
                    l,
                    u
                ),
                d.base = t.__e,
                t.__h = null,
                d.__h.length && s.push(d),
                E && (d.__E = d.__ = null),
                d.__e = !1
            } else 
                null == a && t.__v === n.__v
                    ? (t.__k = n.__k, t.__e = n.__e)
                    : t.__e = N(n.__e, t, n, r, o, a, s, u);
            
            (c = i.diffed) && c(t)
        } catch (e) {
            t.__v = null,
            (u || null != a) && (t.__e = l, t.__h = !!u, a[a.indexOf(l)] = null),
            i.__e(e, t, n)
        }
    }
    function I(e, t) {
        i.__c && i.__c(t, e),
        e.some((function (t) {
            try {
                e = t.__h,
                t.__h = [],
                e.some((function (e) {
                    e.call(t)
                }))
            } catch (e) {
                i.__e(e, t.__v)
            }
        }))
    }
    function N(e, t, n, r, o, i, a, s) {
        var l,
            u,
            p,
            f,
            v = n.props,
            g = t.props,
            m = t.type,
            y = 0;
        if ("svg" === m && (o = !0), null != i) 
            for (; y < i.length; y++) 
                if ((l = i[y]) && (l === e || (
                    m
                        ? l.localName == m
                        : 3 == l.nodeType
                ))) {
                    e = l,
                    i[y] = null;
                    break
                }
            if (null == e) {
            if (null === m) 
                return document.createTextNode(g);
            e = o
                ? document.createElementNS("http://www.w3.org/2000/svg", m)
                : document.createElement(m, g.is && g),
            i = null,
            s = !1
        }
        if (null === m) 
            v === g || s && e.data === g || (e.data = g);
        else {
            if (
                i = i && d.slice.call(e.childNodes),
                u = (v = n.props || c).dangerouslySetInnerHTML,
                p = g.dangerouslySetInnerHTML,
                !s
            ) {
                if (null != i) 
                    for (v = {}, f = 0; f < e.attributes.length; f++) 
                        v[
                            e
                                .attributes[f]
                                .name
                        ] = e
                            .attributes[f]
                            .value;
                (p || u) && (
                    p && (u && p.__html == u.__html || p.__html === e.innerHTML) || (e.innerHTML = p && p.__html || "")
                )
            }
            if (function (e, t, n, r, o) {
                var i;
                for (i in n) 
                    "children" === i || "key" === i || i in t || k(e, i, null, n[i], r);
                for (i in t) 
                    o && "function" != typeof t[i] || "children" === i || "key" === i || "value" === i || "checked" === i || n[i] === t[i] || k(
                        e,
                        i,
                        t[i],
                        n[i],
                        r
                    )
            }(e, g, v, o, s), p) 
                t.__k = [];
            else if (y = t.props.children, C(
                e,
                Array.isArray(y)
                    ? y
                    : [y],
                t,
                n,
                r,
                o && "foreignObject" !== m,
                i,
                a,
                e.firstChild,
                s
            ), null != i) 
                for (y = i.length; y--;) 
                    null != i[y] && h(i[y]);
        s || (
                "value" in g && void 0 !== (y = g.value) && (y !== e.value || "progress" === m && !y) && k(e, "value", y, v.value, !1),
                "checked" in g && void 0 !== (y = g.checked) && y !== e.checked && k(e, "checked", y, v.checked, !1)
            )
        }
        return e
    }
    function H(e, t, n) {
        try {
            "function" == typeof e
                ? e(t)
                : e.current = t
        } catch (e) {
            i.__e(e, n)
        }
    }
    function O(e, t, n) {
        var r,
            o,
            a;
        if (
            i.unmount && i.unmount(e),
            (r = e.ref) && (r.current && r.current !== e.__e || H(r, null, t)),
            n || "function" == typeof e.type || (n = null != (o = e.__e)),
            e.__e = e.__d = void 0,
            null != (r = e.__c)
        ) {
            if (r.componentWillUnmount) 
                try {
                    r.componentWillUnmount()
                } catch (e) {
                    i.__e(e, t)
                }
            r.base = r.__P = null
        }
        if (r = e.__k) 
            for (a = 0; a < r.length; a++) 
                r[a] && O(r[a], t, n);
    null != o && h(o)
    }
    function A(e, t, n) {
        return this.constructor(e, n)
    }
    function U(e, t, n) {
        var r,
            o,
            a;
        i.__ && i.__(e, t),
        o = (r = "function" == typeof n)
            ? null
            : n && n.__k || t.__k,
        a = [],
        P(
            t,
            e = (!r && n || t).__k = v(m, null, [e]),
            o || c,
            c,
            void 0 !== t.ownerSVGElement,
            !r && n
                ? [n]
                : o
                    ? null
                    : t.firstChild
                        ? d.slice.call(t.childNodes)
                        : null,
            a,
            !r && n
                ? n
                : o
                    ? o.__e
                    : t.firstChild,
            r
        ),
        I(a, e)
    }
    i = {
        __e: function (e, t) {
            for (var n, r, o; t = t.__;) 
                if ((n = t.__c) && !n.__) 
                    try {
                        if (
                            (r = n.constructor) && null != r.getDerivedStateFromError && (n.setState(r.getDerivedStateFromError(e)), o = n.__d),
                            null != n.componentDidCatch && (n.componentDidCatch(e), o = n.__d),
                            o
                        ) 
                            return n.__E = n
                    } catch (t) {
                        e = t
                    }
                throw e
        },
        __v: 0
    },
    y.prototype.setState = function (e, t) {
        var n;
        n = null != this.__s && this.__s !== this.state
            ? this.__s
            : this.__s = f({}, this.state),
        "function" == typeof e && (e = e(f({}, n), this.props)),
        e && f(n, e),
        null != e && this.__v && (t && this.__h.push(t), D(this))
    },
    y.prototype.forceUpdate = function (e) {
        this.__v && (this.__e = !0, e && this.__h.push(e), D(this))
    },
    y.prototype.render = m,
    a = [],
    s = "function" == typeof Promise
        ? Promise
            .prototype
            .then
            .bind(Promise.resolve())
        : setTimeout,
    b.__r = 0,
    u = 0;
    var L,
        W = [],
        V = i.__b,
        F = i.__r,
        z = i.diffed,
        B = i.__c,
        j = i.unmount;
    function G() {
        W.forEach((function (e) {
            if (e.__P) 
                try {
                    e
                        .__H
                        .__h
                        .forEach(Y),
                    e
                        .__H
                        .__h
                        .forEach(Z),
                    e.__H.__h = []
                } catch (t) {
                    e.__H.__h = [],
                    i.__e(t, e.__v)
                }
            })),
        W = []
    }
    i.__b = function (e) {
        V && V(e)
    },
    i.__r = function (e) {
        F && F(e);
        var t = e.__c.__H;
        t && (t.__h.forEach(Y), t.__h.forEach(Z), t.__h = [])
    },
    i.diffed = function (e) {
        z && z(e);
        var t = e.__c;
        t && t.__H && t.__H.__h.length && (
            1 !== W.push(t) && L === i.requestAnimationFrame || ((L = i.requestAnimationFrame) || function (e) {
                var t,
                    n = function () {
                        clearTimeout(r),
                        q && cancelAnimationFrame(t),
                        setTimeout(e)
                    },
                    r = setTimeout(n, 100);
                q && (t = requestAnimationFrame(n))
            })(G)
        )
    },
    i.__c = function (e, t) {
        t.some((function (e) {
            try {
                e
                    .__h
                    .forEach(Y),
                e.__h = e
                    .__h
                    .filter((function (e) {
                        return !e.__ || Z(e)
                    }))
            } catch (n) {
                t.some((function (e) {
                    e.__h && (e.__h = [])
                })),
                t = [],
                i.__e(n, e.__v)
            }
        })),
        B && B(e, t)
    },
    i.unmount = function (e) {
        j && j(e);
        var t = e.__c;
        if (t && t.__H) 
            try {
                t
                    .__H
                    .__
                    .forEach(Y)
            } catch (e) {
                i.__e(e, t.__v)
            }
        };
    var q = "function" == typeof requestAnimationFrame;
    function Y(e) {
        "function" == typeof e.__c && e.__c()
    }
    function Z(e) {
        e.__c = e.__()
    }
    function X(e, t) {
        for (var n in e) 
            if ("__source" !== n && !(n in t)) 
                return !0;
    for (var r in t) 
            if ("__source" !== r && e[r] !== t[r]) 
                return !0;
    return !1
    }
    function K(e) {
        this.props = e
    }(K.prototype = new y).isPureReactComponent = !0,
    K.prototype.shouldComponentUpdate = function (e, t) {
        return X(this.props, e) || X(this.state, t)
    };
    var $ = i.__b;
    i.__b = function (e) {
        e.type && e.type.__f && e.ref && (e.props.ref = e.ref, e.ref = null),
        $ && $(e)
    };
    var J = i.__e;
    i.__e = function (e, t, n) {
        if (e.then) 
            for (var r, o = t; o = o.__;) 
                if ((r = o.__c) && r.__c) 
                    return null == t.__e && (t.__e = n.__e, t.__k = n.__k),
                    r.__c(e, t);
    J(e, t, n)
    };
    var Q = i.unmount;
    function ee() {
        this.__u = 0,
        this.t = null,
        this.__b = null
    }
    function te(e) {
        var t = e.__.__c;
        return t && t.__e && t.__e(e)
    }
    function ne() {
        this.u = null,
        this.o = null
    }
    i.unmount = function (e) {
        var t = e.__c;
        t && t.__R && t.__R(),
        t && !0 === e.__h && (e.type = null),
        Q && Q(e)
    },
    (ee.prototype = new y).__c = function (e, t) {
        var n = t.__c,
            r = this;
        null == r.t && (r.t = []),
        r
            .t
            .push(n);
        var o = te(r.__v),
            i = !1,
            a = function () {
                i || (
                    i = !0,
                    n.__R = null,
                    o
                        ? o(s)
                        : s()
                )
            };
        n.__R = a;
        var s = function () {
                if (!--r.__u) {
                    if (r.state.__e) {
                        var e = r.state.__e;
                        r
                            .__v
                            .__k[0] = function e(t, n, r) {
                                return t && (
                                    t.__v = null,
                                    t.__k = t.__k && t.__k.map((function (t) {
                                        return e(t, n, r)
                                    })),
                                    t.__c && t.__c.__P === n && (t.__e && r.insertBefore(t.__e, t.__d), t.__c.__e = !0, t.__c.__P = r)
                                ),
                                t
                            }(e, e.__c.__P, e.__c.__O)
                    }
                    var t;
                    for (r.setState({
                        __e: r.__b = null
                    }); t = r.t.pop();) 
                        t.forceUpdate()
                }
            },
            l = !0 === t.__h;
        r.__u++ || l || r.setState({
            __e: r.__b = r
                .__v
                .__k[0]
        }),
        e.then(a, a)
    },
    ee.prototype.componentWillUnmount = function () {
        this.t = []
    },
    ee.prototype.render = function (e, t) {
        if (this.__b) {
            if (this.__v.__k) {
                var n = document.createElement("div"),
                    r = this
                        .__v
                        .__k[0]
                        .__c;
                this
                    .__v
                    .__k[0] = function e(t, n, r) {
                        return t && (
                            t.__c && t.__c.__H && (t.__c.__H.__.forEach((function (e) {
                                "function" == typeof e.__c && e.__c()
                            })), t.__c.__H = null),
                            null != (t = function (e, t) {
                                for (var n in t) 
                                    e[n] = t[n];
                                return e
                            }({}, t)).__c && (t.__c.__P === r && (t.__c.__P = n), t.__c = null),
                            t.__k = t.__k && t.__k.map((function (t) {
                                return e(t, n, r)
                            }))
                        ),
                        t
                    }(this.__b, n, r.__O = r.__P)
            }
            this.__b = null
        }
        var o = t.__e && v(m, null, e.fallback);
        return o && (o.__h = null),
        [
            v(
                m,
                null,
                t.__e
                    ? null
                    : e.children
            ),
            o
        ]
    };
    var re = function (e, t, n) {
        if (
            ++n[1] === n[0] && e.o.delete(t),
            e.props.revealOrder && ("t" !== e.props.revealOrder[0] || !e.o.size)
        ) 
            for (n = e.u; n;) {
                for (; n.length > 3;) 
                    n.pop()();
                if (n[1] < n[0]) 
                    break;
                e.u = n = n[2]
            }
        };
    function oe(e) {
        return this.getChildContext = function () {
            return e.context
        },
        e.children
    }
    function ie(e) {
        var t = this,
            n = e.i;
        t.componentWillUnmount = function () {
            U(null, t.l),
            t.l = null,
            t.i = null
        },
        t.i && t.i !== n && t.componentWillUnmount(),
        e.__v
            ? (t.l || (t.i = n, t.l = {
                nodeType: 1,
                parentNode: n,
                childNodes: [],
                appendChild: function (e) {
                    this
                        .childNodes
                        .push(e),
                    t
                        .i
                        .appendChild(e)
                },
                insertBefore: function (e, n) {
                    this
                        .childNodes
                        .push(e),
                    t
                        .i
                        .appendChild(e)
                },
                removeChild: function (e) {
                    this
                        .childNodes
                        .splice(this.childNodes.indexOf(e) >>> 1, 1),
                    t
                        .i
                        .removeChild(e)
                }
            }), U(v(oe, {
                context: t.context
            }, e.__v), t.l))
            : t.l && t.componentWillUnmount()
    }(ne.prototype = new y).__e = function (e) {
        var t = this,
            n = te(t.__v),
            r = t
                .o
                .get(e);
        return r[0]++,
        function (o) {
            var i = function () {
                t.props.revealOrder
                    ? (r.push(o), re(t, e, r))
                    : o()
            };
            n
                ? n(i)
                : i()
        }
    },
    ne.prototype.render = function (e) {
        this.u = null,
        this.o = new Map;
        var t = R(e.children);
        e.revealOrder && "b" === e.revealOrder[0] && t.reverse();
        for (var n = t.length; n--;) 
            this
                .o
                .set(t[n], this.u = [1, 0, this.u]);
        return e.children
    },
    ne.prototype.componentDidUpdate = ne.prototype.componentDidMount = function () {
        var e = this;
        this
            .o
            .forEach((function (t, n) {
                re(e, n, t)
            }))
    };
    var ae = "undefined" != typeof Symbol && Symbol.for && Symbol.for (
            "react.element"
        ) || 60103,
            se = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
            le = function (e) {
                return (
                    "undefined" != typeof Symbol && "symbol" == typeof Symbol()
                        ? /fil|che|rad/i
                        : /fil|che|ra/i
                ).test(e)
            };
    y.prototype.isReactComponent = {},
    ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(
        (function (e) {
            Object.defineProperty(y.prototype, e, {
                configurable: !0,
                get: function () {
                    return this["UNSAFE_" + e]
                },
                set: function (t) {
                    Object.defineProperty(this, e, {
                        configurable: !0,
                        writable: !0,
                        value: t
                    })
                }
            })
        })
    );
    var ue = i.event;
    function ce() {}
    function de() {
        return this.cancelBubble
    }
    function pe() {
        return this.defaultPrevented
    }
    i.event = function (e) {
        return ue && (e = ue(e)),
        e.persist = ce,
        e.isPropagationStopped = de,
        e.isDefaultPrevented = pe,
        e.nativeEvent = e
    };
    var fe = {
            configurable: !0,
            get: function () {
                return this.class
            }
        },
        he = i.vnode;
    i.vnode = function (e) {
        var t = e.type,
            n = e.props,
            r = n;
        if ("string" == typeof t) {
            for (var o in r = {}, n) {
                var i = n[o];
                "value" === o && "defaultValue" in n && null == i || (
                    "defaultValue" === o && "value" in n && null == n.value
                        ? o = "value"
                        : "download" === o && !0 === i
                            ? i = ""
                            : /ondoubleclick/i.test(o)
                                ? o = "ondblclick"
                                : /^onchange(textarea|input)/i.test(o + t) && !le(n.type)
                                    ? o = "oninput"
                                    : /^on(Ani|Tra|Tou|BeforeInp)/.test(o)
                                        ? o = o.toLowerCase()
                                        : se.test(o)
                                            ? o = o.replace(/[A-Z0-9]/, "-$&").toLowerCase()
                                            : null === i && (i = void 0),
                    r[o] = i
                )
            }
            "select" == t && r.multiple && Array.isArray(r.value) && (
                r.value = R(n.children).forEach((function (e) {
                    e.props.selected = -1 != r
                        .value
                        .indexOf(e.props.value)
                }))
            ),
            "select" == t && null != r.defaultValue && (
                r.value = R(n.children).forEach((function (e) {
                    e.props.selected = r.multiple
                        ? -1 != r
                            .defaultValue
                            .indexOf(e.props.value)
                        : r.defaultValue == e.props.value
                }))
            ),
            e.props = r
        }
        t && n.class != n.className && (
            fe.enumerable = "className" in n,
            null != n.className && (r.class = n.className),
            Object.defineProperty(r, "className", fe)
        ),
        e.$$typeof = ae,
        he && he(e)
    };
    var ve = i.__r;
    i.__r = function (e) {
        ve && ve(e)
    },
    "object" == typeof performance && "function" == typeof performance.now && performance
        .now
        .bind(performance);
    var ge = "undefined" != typeof globalThis
        ? globalThis
        : window;
    ge.FullCalendarVDom
        ? console.warn("FullCalendar VDOM already loaded")
        : ge.FullCalendarVDom = {
            Component: y,
            createElement: v,
            render: U,
            createRef: function () {
                return {current: null}
            },
            Fragment: m,
            createContext: function (e) {
                var t = function (e, t) {
                        var n = {
                            __c: t = "__cC" + u++,
                            __: e,
                            Consumer: function (e, t) {
                                return e.children(t)
                            },
                            Provider: function (e) {
                                var n,
                                    r;
                                return this.getChildContext || (
                                    n = [],
                                    (r = {})[t] = this,
                                    this.getChildContext = function () {
                                        return r
                                    },
                                    this.shouldComponentUpdate = function (e) {
                                        this.props.value !== e.value && n.some(D)
                                    },
                                    this.sub = function (e) {
                                        n.push(e);
                                        var t = e.componentWillUnmount;
                                        e.componentWillUnmount = function () {
                                            n.splice(n.indexOf(e), 1),
                                            t && t.call(e)
                                        }
                                    }
                                ),
                                e.children
                            }
                        };
                        return n.Provider.__ = n.Consumer.contextType = n
                    }(e),
                    n = t.Provider;
                return t.Provider = function () {
                    var e = this,
                        t = !this.getChildContext,
                        r = n.apply(this, arguments);
                    if (t) {
                        var o = [];
                        this.shouldComponentUpdate = function (t) {
                            e.props.value !== t.value && o.forEach((function (e) {
                                e.context = t.value,
                                e.forceUpdate()
                            }))
                        },
                        this.sub = function (e) {
                            o.push(e);
                            var t = e.componentWillUnmount;
                            e.componentWillUnmount = function () {
                                o.splice(o.indexOf(e), 1),
                                t && t.call(e)
                            }
                        }
                    }
                    return r
                },
                t
            },
            createPortal: function (e, t) {
                return v(ie, {
                    __v: e,
                    i: t
                })
            },
            flushToDom: function () {
                var e = i.debounceRendering,
                    t = [];
                function n(e) {
                    t.push(e)
                }
                i.debounceRendering = n,
                U(v(me, {}), document.createElement("div"));
                for (; t.length;) 
                    t.shift()();
                i.debounceRendering = e
            },
            unmountComponentAtNode: function (e) {
                U(null, e)
            }
        };
    var me = function (e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return n(t, e),
        t.prototype.render = function () {
            return v("div", {})
        },
        t.prototype.componentDidMount = function () {
            this.setState({})
        },
        t
    }(y);
    var ye = function () {
        function e(e, t) {
            this.context = e,
            this.internalEventSource = t
        }
        return e.prototype.remove = function () {
            this
                .context
                .dispatch(
                    {type: "REMOVE_EVENT_SOURCE", sourceId: this.internalEventSource.sourceId}
                )
        },
        e.prototype.refetch = function () {
            this
                .context
                .dispatch({
                    type: "FETCH_EVENT_SOURCES",
                    sourceIds: [this.internalEventSource.sourceId],
                    isRefetch: !0
                })
        },
        Object.defineProperty(e.prototype, "id", {
            get: function () {
                return this.internalEventSource.publicId
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "url", {
            get: function () {
                return this.internalEventSource.meta.url
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "format", {
            get: function () {
                return this.internalEventSource.meta.format
            },
            enumerable: !1,
            configurable: !0
        }),
        e
    }();
    function Ee(e) {
        e.parentNode && e
            .parentNode
            .removeChild(e)
    }
    function Se(e, t) {
        if (e.closest) 
            return e.closest(t);
        if (!document.documentElement.contains(e)) 
            return null;
        do {
            if (De(e, t)) 
                return e;
            e = e.parentElement || e.parentNode
        } while (null !== e && 1 === e.nodeType);
        return null
    }
    function De(e, t) {
        return (e.matches || e.matchesSelector || e.msMatchesSelector).call(e, t)
    }
    function be(e, t) {
        for (
            var n = e instanceof HTMLElement
                ? [e]
                : e,
            r = [],
            o = 0; o < n.length; o += 1
        ) 
            for (var i = n[o].querySelectorAll(t), a = 0; a < i.length; a += 1) 
                r.push(i[a]);
    return r
    }
    var Ce = /(top|left|right|bottom|width|height)$/i;
    function we(e, t) {
        for (var n in t) 
            Re(e, n, t[n])
    }
    function Re(e, t, n) {
        null == n
            ? e.style[t] = ""
            : "number" == typeof n && Ce.test(t)
                ? e.style[t] = n + "px"
                : e.style[t] = n
    }
    function _e(e) {
        var t,
            n;
        return null !== (
            n = null === (t = e.composedPath) || void 0 === t
                ? void 0
                : t.call(e)[0]
        ) && void 0 !== n
            ? n
            : e.target
    }
    function Te(e) {
        e.preventDefault()
    }
    function ke(e, t) {
        return function (n) {
            var r = Se(n.target, e);
            r && t.call(r, n, r)
        }
    }
    function xe(e, t, n, r) {
        var o = ke(n, r);
        return e.addEventListener(t, o),
        function () {
            e.removeEventListener(t, o)
        }
    }
    var Me = ["webkitTransitionEnd", "otransitionend", "oTransitionEnd", "msTransitionEnd", "transitionend"];
    function Pe(e, t) {
        var n = function (r) {
            t(r),
            Me.forEach((function (t) {
                e.removeEventListener(t, n)
            }))
        };
        Me.forEach((function (t) {
            e.addEventListener(t, n)
        }))
    }
    var Ie = 0;
    function Ne() {
        return String(Ie += 1)
    }
    function He() {
        document
            .body
            .classList
            .add("fc-not-allowed")
    }
    function Oe() {
        document
            .body
            .classList
            .remove("fc-not-allowed")
    }
    function Ae(e) {
        e
            .classList
            .add("fc-unselectable"),
        e.addEventListener("selectstart", Te)
    }
    function Ue(e) {
        e
            .classList
            .remove("fc-unselectable"),
        e.removeEventListener("selectstart", Te)
    }
    function Le(e) {
        e.addEventListener("contextmenu", Te)
    }
    function We(e) {
        e.removeEventListener("contextmenu", Te)
    }
    function Ve(e) {
        var t,
            n,
            r = [],
            o = [];
        for (
            "string" == typeof e
                ? o = e.split(/\s*,\s*/)
                : "function" == typeof e
                    ? o = [e]
                    : Array.isArray(e) && (o = e),
            t = 0; t < o.length; t += 1
        ) 
            "string" == typeof(n = o[t])
                ? r.push(
                    "-" === n.charAt(0)
                        ? {
                            field: n.substring(1),
                            order: -1
                        }
                        : {
                            field: n,
                            order: 1
                        }
                )
                : "function" == typeof n && r.push({func: n});
        return r
    }
    function Fe(e, t, n) {
        var r,
            o;
        for (r = 0; r < n.length; r += 1) 
            if (o = ze(e, t, n[r])) 
                return o;
    return 0
    }
    function ze(e, t, n) {
        return n.func
            ? n.func(e, t)
            : Be(e[n.field], t[n.field]) * (n.order || 1)
    }
    function Be(e, t) {
        return e || t
            ? null == t
                ? -1
                : null == e
                    ? 1
                    : "string" == typeof e || "string" == typeof t
                        ? String(e).localeCompare(String(t))
                        : e - t
            : 0
    }
    function je(e, t) {
        var n = String(e);
        return "000".substr(0, t - n.length) + n
    }
    function Ge(e, t) {
        return e - t
    }
    function qe(e) {
        return e % 1 == 0
    }
    function Ye(e) {
        var t = e.querySelector(".fc-scrollgrid-shrink-frame"),
            n = e.querySelector(".fc-scrollgrid-shrink-cushion");
        if (!t) 
            throw new Error("needs fc-scrollgrid-shrink-frame className");
        if (!n) 
            throw new Error("needs fc-scrollgrid-shrink-cushion className");
        return e
            .getBoundingClientRect()
            .width - t
            .getBoundingClientRect()
            .width + n
            .getBoundingClientRect()
            .width
    }
    var Ze = [
        "sun",
        "mon",
        "tue",
        "wed",
        "thu",
        "fri",
        "sat"
    ];
    function Xe(e, t) {
        var n = lt(e);
        return n[2] += 7 * t,
        ut(n)
    }
    function Ke(e, t) {
        var n = lt(e);
        return n[2] += t,
        ut(n)
    }
    function $e(e, t) {
        var n = lt(e);
        return n[6] += t,
        ut(n)
    }
    function Je(e, t) {
        return Qe(e, t) / 7
    }
    function Qe(e, t) {
        return (t.valueOf() - e.valueOf()) / 864e5
    }
    function et(e, t) {
        var n = rt(e),
            r = rt(t);
        return {
            years: 0,
            months: 0,
            days: Math.round(Qe(n, r)),
            milliseconds: t.valueOf() - r.valueOf() - (e.valueOf() - n.valueOf())
        }
    }
    function tt(e, t) {
        var n = nt(e, t);
        return null !== n && n % 7 == 0
            ? n / 7
            : null
    }
    function nt(e, t) {
        return dt(e) === dt(t)
            ? Math.round(Qe(e, t))
            : null
    }
    function rt(e) {
        return ut([e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate()])
    }
    function ot(e, t, n, r) {
        var o = ut([
                t, 0, 1 + it(t, n, r)
            ]),
            i = rt(e),
            a = Math.round(Qe(o, i));
        return Math.floor(a / 7) + 1
    }
    function it(e, t, n) {
        var r = 7 + t - n;
        return -((7 + ut([e, 0, r]).getUTCDay() - t) % 7) + r - 1
    }
    function at(e) {
        return [
            e.getFullYear(),
            e.getMonth(),
            e.getDate(),
            e.getHours(),
            e.getMinutes(),
            e.getSeconds(),
            e.getMilliseconds()
        ]
    }
    function st(e) {
        return new Date(
            e[0],
            e[1] || 0,
            null == e[2]
                ? 1
                : e[2],
            e[3] || 0,
            e[4] || 0,
            e[5] || 0
        )
    }
    function lt(e) {
        return [
            e.getUTCFullYear(),
            e.getUTCMonth(),
            e.getUTCDate(),
            e.getUTCHours(),
            e.getUTCMinutes(),
            e.getUTCSeconds(),
            e.getUTCMilliseconds()
        ]
    }
    function ut(e) {
        return 1 === e.length && (e = e.concat([0])),
        new Date(Date.UTC.apply(Date, e))
    }
    function ct(e) {
        return !isNaN(e.valueOf())
    }
    function dt(e) {
        return 1e3 * e.getUTCHours() * 60 * 60 + 1e3 * e.getUTCMinutes() * 60 + 1e3 * e.getUTCSeconds() + e.getUTCMilliseconds()
    }
    function pt(e, t, n, r) {
        return {
            instanceId: Ne(),
            defId: e,
            range: t,
            forcedStartTzo: null == n
                ? null
                : n,
            forcedEndTzo: null == r
                ? null
                : r
        }
    }
    var ft = Object.prototype.hasOwnProperty;
    function ht(e, t) {
        var n = {};
        if (t) 
            for (var r in t) {
                for (var o = [], i = e.length - 1; i >= 0; i -= 1) {
                    var a = e[i][r];
                    if ("object" == typeof a && a) 
                        o.unshift(a);
                    else if (void 0 !== a) {
                        n[r] = a;
                        break
                    }
                }
                o.length && (n[r] = ht(o))
            }
        for (i = e.length - 1; i >= 0; i -= 1) {
            var s = e[i];
            for (var l in s) 
                l in n || (n[l] = s[l])
        }
        return n
    }
    function vt(e, t) {
        var n = {};
        for (var r in e) 
            t(e[r], r) && (n[r] = e[r]);
        return n
    }
    function gt(e, t) {
        var n = {};
        for (var r in e) 
            n[r] = t(e[r], r);
        return n
    }
    function mt(e) {
        for (var t = {}, n = 0, r = e; n < r.length; n++) {
            t[r[n]] = !0
        }
        return t
    }
    function yt(e) {
        var t = [];
        for (var n in e) 
            t.push(e[n]);
        return t
    }
    function Et(e, t) {
        if (e === t) 
            return !0;
        for (var n in e) 
            if (ft.call(e, n) && !(n in t)) 
                return !1;
    for (var n in t) 
            if (ft.call(t, n) && e[n] !== t[n]) 
                return !1;
    return !0
    }
    function St(e, t) {
        var n = [];
        for (var r in e) 
            ft.call(e, r) && (r in t || n.push(r));
        for (var r in t) 
            ft.call(t, r) && e[r] !== t[r] && n.push(r);
        return n
    }
    function Dt(e, t, n) {
        if (void 0 === n && (n = {}), e === t) 
            return !0;
        for (var r in t) 
            if (!(r in e) || !bt(e[r], t[r], n[r])) 
                return !1;
    for (var r in e) 
            if (!(r in t)) 
                return !1;
    return !0
    }
    function bt(e, t, n) {
        return e === t || !0 === n || !!n && n(e, t)
    }
    function Ct(e, t, n, r) {
        void 0 === t && (t = 0),
        void 0 === r && (r = 1);
        var o = [];
        null == n && (n = Object.keys(e).length);
        for (var i = t; i < n; i += r) {
            var a = e[i];
            void 0 !== a && o.push(a)
        }
        return o
    }
    function wt(e, t, n) {
        var r = n.dateEnv,
            o = n.pluginHooks,
            i = n.options,
            a = e.defs,
            s = e.instances;
        for (var l in s = vt(s, (function (e) {
            return !a[e.defId].recurringDef
        })), a) {
            var u = a[l];
            if (u.recurringDef) {
                var c = u.recurringDef.duration;
                c || (
                    c = u.allDay
                        ? i.defaultAllDayEventDuration
                        : i.defaultTimedEventDuration
                );
                for (var d = 0, p = Rt(u, c, t, r, o.recurringTypes); d < p.length; d++) {
                    var f = p[d],
                        h = pt(l, {
                            start: f,
                            end: r.add(f, c)
                        });
                    s[h.instanceId] = h
                }
            }
        }
        return {defs: a, instances: s}
    }
    function Rt(e, t, n, r, o) {
        var i = o[e.recurringDef.typeId].expand(e.recurringDef.typeData, {
            start: r.subtract(n.start, t),
            end: n.end
        }, r);
        return e.allDay && (i = i.map(rt)),
        i
    }
    var _t = [
            "years", "months", "days", "milliseconds"
        ],
        Tt = /^(-?)(?:(\d+)\.)?(\d+):(\d\d)(?::(\d\d)(?:\.(\d\d\d))?)?/;
    function kt(e, t) {
        var n;
        return "string" == typeof e
            ? function (e) {
                var t = Tt.exec(e);
                if (t) {
                    var n = t[1]
                        ? -1
                        : 1;
                    return {
                        years: 0,
                        months: 0,
                        days: n * (
                            t[2]
                                ? parseInt(t[2], 10)
                                : 0
                        ),
                        milliseconds: n * (60 * (
                            t[3]
                                ? parseInt(t[3], 10)
                                : 0
                        ) * 60 * 1e3 + 60 * (
                            t[4]
                                ? parseInt(t[4], 10)
                                : 0
                        ) * 1e3 + 1e3 * (
                            t[5]
                                ? parseInt(t[5], 10)
                                : 0
                        ) + (
                            t[6]
                                ? parseInt(t[6], 10)
                                : 0
                        ))
                    }
                }
                return null
            }(e)
            : "object" == typeof e && e
                ? xt(e)
                : "number" == typeof e
                    ? xt(((n = {})[t || "milliseconds"] = e, n))
                    : null
    }
    function xt(e) {
        var t = {
                years: e.years || e.year || 0,
                months: e.months || e.month || 0,
                days: e.days || e.day || 0,
                milliseconds: 60 *(e.hours || e.hour || 0) * 60 * 1e3 + 60 *(
                    e.minutes || e.minute || 0
                ) * 1e3 + 1e3 *(e.seconds || e.second || 0) + (
                    e.milliseconds || e.millisecond || e.ms || 0
                )
            },
            n = e.weeks || e.week;
        return n && (t.days += 7 * n, t.specifiedWeeks = !0),
        t
    }
    function Mt(e, t) {
        return {
            years: e.years + t.years,
            months: e.months + t.months,
            days: e.days + t.days,
            milliseconds: e.milliseconds + t.milliseconds
        }
    }
    function Pt(e, t) {
        return {
            years: e.years * t,
            months: e.months * t,
            days: e.days * t,
            milliseconds: e.milliseconds * t
        }
    }
    function It(e) {
        return Nt(e) / 864e5
    }
    function Nt(e) {
        return 31536e6 * e.years + 2592e6 * e.months + 864e5 * e.days + e.milliseconds
    }
    function Ht(e, t) {
        for (var n = null, r = 0; r < _t.length; r += 1) {
            var o = _t[r];
            if (t[o]) {
                var i = e[o] / t[o];
                if (!qe(i) || null !== n && n !== i) 
                    return null;
                n = i
            } else if (e[o]) 
                return null
        }
        return n
    }
    function Ot(e) {
        var t = e.milliseconds;
        if (t) {
            if (t % 1e3 != 0) 
                return {unit: "millisecond", value: t};
            if (t % 6e4 != 0) 
                return {
                    unit: "second",
                    value: t / 1e3
                };
            if (t % 36e5 != 0) 
                return {
                    unit: "minute",
                    value: t / 6e4
                };
            if (t) 
                return {
                    unit: "hour",
                    value: t / 36e5
                }
            }
        return e.days
            ? e.specifiedWeeks && e.days % 7 == 0
                ? {
                    unit: "week",
                    value: e.days / 7
                }
                : {
                    unit: "day",
                    value: e.days
                }
            : e.months
                ? {
                    unit: "month",
                    value: e.months
                }
                : e.years
                    ? {
                        unit: "year",
                        value: e.years
                    }
                    : {
                        unit: "millisecond",
                        value: 0
                    }
    }
    function At(e, t, n) {
        void 0 === n && (n = !1);
        var r = e.toISOString();
        return r = r.replace(".000", ""),
        n && (r = r.replace("T00:00:00Z", "")),
        r.length > 10 && (
            null == t
                ? r = r.replace("Z", "")
                : 0 !== t && (r = r.replace("Z", Wt(t, !0)))
        ),
        r
    }
    function Ut(e) {
        return e
            .toISOString()
            .replace(/T.*$/, "")
    }
    function Lt(e) {
        return je(e.getUTCHours(), 2) + ":" + je(e.getUTCMinutes(), 2) + ":" + je(
            e.getUTCSeconds(),
            2
        )
    }
    function Wt(e, t) {
        void 0 === t && (t = !1);
        var n = e < 0
                ? "-"
                : "+",
            r = Math.abs(e),
            o = Math.floor(r / 60),
            i = Math.round(r % 60);
        return t
            ? n + je(o, 2) + ":" + je(i, 2)
            : "GMT" + n + o + (
                i
                    ? ":" + je(i, 2)
                    : ""
            )
    }
    function Vt(e, t, n) {
        if (e === t) 
            return !0;
        var r,
            o = e.length;
        if (o !== t.length) 
            return !1;
        for (r = 0; r < o; r += 1) 
            if (!(
                n
                    ? n(e[r], t[r])
                    : e[r] === t[r]
            )) 
                return !1;
    return !0
    }
    function Ft(e, t, n) {
        var r,
            o;
        return function () {
            for (var i = [], a = 0; a < arguments.length; a++) 
                i[a] = arguments[a];
            if (r) {
                if (!Vt(r, i)) {
                    n && n(o);
                    var s = e.apply(this, i);
                    t && t(s, o) || (o = s)
                }
            } else 
                o = e.apply(this, i);
            return r = i,
            o
        }
    }
    function zt(e, t, n) {
        var r,
            o,
            i = this;
        return function (a) {
            if (r) {
                if (!Et(r, a)) {
                    n && n(o);
                    var s = e.call(i, a);
                    t && t(s, o) || (o = s)
                }
            } else 
                o = e.call(i, a);
            return r = a,
            o
        }
    }
    var Bt = {
            week: 3,
            separator: 0,
            omitZeroMinute: 0,
            meridiem: 0,
            omitCommas: 0
        },
        jt = {
            timeZoneName: 7,
            era: 6,
            year: 5,
            month: 4,
            day: 2,
            weekday: 2,
            hour: 1,
            minute: 1,
            second: 1
        },
        Gt = /\s*([ap])\.?m\.?/i,
        qt = /,/g,
        Yt = /\s+/g,
        Zt = /\u200e/g,
        Xt = /UTC|GMT/,
        Kt = function () {
            function e(e) {
                var t = {},
                    n = {},
                    r = 0;
                for (var o in e) 
                    o in Bt
                        ? (n[o] = e[o], r = Math.max(Bt[o], r))
                        : (t[o] = e[o], o in jt && (r = Math.max(jt[o], r)));
                this.standardDateProps = t,
                this.extendedSettings = n,
                this.severity = r,
                this.buildFormattingFunc = Ft($t)
            }
            return e.prototype.format = function (e, t) {
                return this.buildFormattingFunc(
                    this.standardDateProps,
                    this.extendedSettings,
                    t
                )(e)
            },
            e.prototype.formatRange = function (e, t, n, r) {
                var o = this.standardDateProps,
                    i = this.extendedSettings,
                    a = function (e, t, n) {
                        if (n.getMarkerYear(e) !== n.getMarkerYear(t)) 
                            return 5;
                        if (n.getMarkerMonth(e) !== n.getMarkerMonth(t)) 
                            return 4;
                        if (n.getMarkerDay(e) !== n.getMarkerDay(t)) 
                            return 2;
                        if (dt(e) !== dt(t)) 
                            return 1;
                        return 0
                    }(e.marker, t.marker, n.calendarSystem);
                if (!a) 
                    return this.format(e, n);
                var s = a;
                !(s > 1) || "numeric" !== o.year && "2-digit" !== o.year || "numeric" !== o.month && "2-digit" !== o.month || "numeric" !== o.day && "2-digit" !== o.day || (
                    s = 1
                );
                var l = this.format(e, n),
                    u = this.format(t, n);
                if (l === u) 
                    return l;
                var c = $t(function (e, t) {
                        var n = {};
                        for (var r in e) 
                            (!(r in jt) || jt[r] <= t) && (n[r] = e[r]);
                        return n
                    }(o, s), i, n),
                    d = c(e),
                    p = c(t),
                    f = function (e, t, n, r) {
                        var o = 0;
                        for (; o < e.length;) {
                            var i = e.indexOf(t, o);
                            if (-1 === i) 
                                break;
                            var a = e.substr(0, i);
                            o = i + t.length;
                            for (var s = e.substr(o), l = 0; l < n.length;) {
                                var u = n.indexOf(r, l);
                                if (-1 === u) 
                                    break;
                                var c = n.substr(0, u);
                                l = u + r.length;
                                var d = n.substr(l);
                                if (a === c && s === d) 
                                    return {before: a, after: s}
                                }
                        }
                        return null
                    }(l, d, u, p),
                    h = i.separator || r || n.defaultSeparator || "";
                return f
                    ? f.before + d + h + p + f.after
                    : l + h + u
            },
            e.prototype.getLargestUnit = function () {
                switch (this.severity) {
                    case 7:
                    case 6:
                    case 5:
                        return "year";
                    case 4:
                        return "month";
                    case 3:
                        return "week";
                    case 2:
                        return "day";
                    default:
                        return "time"
                }
            },
            e
        }();
    function $t(e, t, n) {
        var o = Object
            .keys(e)
            .length;
        return 1 === o && "short" === e.timeZoneName
            ? function (e) {
                return Wt(e.timeZoneOffset)
            }
            : 0 === o && t.week
                ? function (e) {
                    return function (e, t, n, r) {
                        var o = [];
                        "narrow" === r
                            ? o.push(t)
                            : "short" === r && o.push(t, " ");
                        o.push(n.simpleNumberFormat.format(e)),
                        "rtl" === n.options.direction && o.reverse();
                        return o.join("")
                    }(n.computeWeekNumber(e.marker), n.weekText, n.locale, t.week)
                }
                : function (e, t, n) {
                    e = r({}, e),
                    t = r({}, t),
                    function (e, t) {
                        e.timeZoneName && (
                            e.hour || (e.hour = "2-digit"),
                            e.minute || (e.minute = "2-digit")
                        );
                        "long" === e.timeZoneName && (e.timeZoneName = "short");
                        t.omitZeroMinute && (e.second || e.millisecond) && delete t.omitZeroMinute
                    }(e, t),
                    e.timeZone = "UTC";
                    var o,
                        i = new Intl.DateTimeFormat(n.locale.codes, e);
                    if (t.omitZeroMinute) {
                        var a = r({}, e);
                        delete a.minute,
                        o = new Intl.DateTimeFormat(n.locale.codes, a)
                    }
                    return function (r) {
                        var a = r.marker;
                        return function (e, t, n, r, o) {
                            e = e.replace(Zt, ""),
                            "short" === n.timeZoneName && (e = function (e, t) {
                                var n = !1;
                                e = e.replace(Xt, (function () {
                                    return n = !0,
                                    t
                                })),
                                n || (e += " " + t);
                                return e
                            }(
                                e,
                                "UTC" === o.timeZone || null == t.timeZoneOffset
                                    ? "UTC"
                                    : Wt(t.timeZoneOffset)
                            ));
                            r.omitCommas && (e = e.replace(qt, "").trim());
                            r.omitZeroMinute && (e = e.replace(":00", ""));
                            !1 === r.meridiem
                                ? e = e
                                    .replace(Gt, "")
                                    .trim()
                                : "narrow" === r.meridiem
                                    ? e = e.replace(Gt, (function (e, t) {
                                        return t.toLocaleLowerCase()
                                    }))
                                    : "short" === r.meridiem
                                        ? e = e.replace(Gt, (function (e, t) {
                                            return t.toLocaleLowerCase() + "m"
                                        }))
                                        : "lowercase" === r.meridiem && (e = e.replace(Gt, (function (e) {
                                            return e.toLocaleLowerCase()
                                        })));
                            return e = (e = e.replace(Yt, " ")).trim()
                        }((
                            o && !a.getUTCMinutes()
                                ? o
                                : i
                        ).format(a), r, e, t, n)
                    }
                }(e, t, n)
    }
    function Jt(e, t) {
        var n = t.markerToArray(e.marker);
        return {
            marker: e.marker,
            timeZoneOffset: e.timeZoneOffset,
            array: n,
            year: n[0],
            month: n[1],
            day: n[2],
            hour: n[3],
            minute: n[4],
            second: n[5],
            millisecond: n[6]
        }
    }
    function Qt(e, t, n, r) {
        var o = Jt(e, n.calendarSystem);
        return {
            date: o,
            start: o,
            end: t
                ? Jt(t, n.calendarSystem)
                : null,
            timeZone: n.timeZone,
            localeCodes: n.locale.codes,
            defaultSeparator: r || n.defaultSeparator
        }
    }
    var en = function () {
            function e(e) {
                this.cmdStr = e
            }
            return e.prototype.format = function (e, t, n) {
                return t.cmdFormatter(this.cmdStr, Qt(e, null, t, n))
            },
            e.prototype.formatRange = function (e, t, n, r) {
                return n.cmdFormatter(this.cmdStr, Qt(e, t, n, r))
            },
            e
        }(),
        tn = function () {
            function e(e) {
                this.func = e
            }
            return e.prototype.format = function (e, t, n) {
                return this.func(Qt(e, null, t, n))
            },
            e.prototype.formatRange = function (e, t, n, r) {
                return this.func(Qt(e, t, n, r))
            },
            e
        }();
    function nn(e) {
        return "object" == typeof e && e
            ? new Kt(e)
            : "string" == typeof e
                ? new en(e)
                : "function" == typeof e
                    ? new tn(e)
                    : null
    }
    var rn = {
            navLinkDayClick: fn,
            navLinkWeekClick: fn,
            duration: kt,
            bootstrapFontAwesome: fn,
            buttonIcons: fn,
            customButtons: fn,
            defaultAllDayEventDuration: kt,
            defaultTimedEventDuration: kt,
            nextDayThreshold: kt,
            scrollTime: kt,
            scrollTimeReset: Boolean,
            slotMinTime: kt,
            slotMaxTime: kt,
            dayPopoverFormat: nn,
            slotDuration: kt,
            snapDuration: kt,
            headerToolbar: fn,
            footerToolbar: fn,
            defaultRangeSeparator: String,
            titleRangeSeparator: String,
            forceEventDuration: Boolean,
            dayHeaders: Boolean,
            dayHeaderFormat: nn,
            dayHeaderClassNames: fn,
            dayHeaderContent: fn,
            dayHeaderDidMount: fn,
            dayHeaderWillUnmount: fn,
            dayCellClassNames: fn,
            dayCellContent: fn,
            dayCellDidMount: fn,
            dayCellWillUnmount: fn,
            initialView: String,
            aspectRatio: Number,
            weekends: Boolean,
            weekNumberCalculation: fn,
            weekNumbers: Boolean,
            weekNumberClassNames: fn,
            weekNumberContent: fn,
            weekNumberDidMount: fn,
            weekNumberWillUnmount: fn,
            editable: Boolean,
            viewClassNames: fn,
            viewDidMount: fn,
            viewWillUnmount: fn,
            nowIndicator: Boolean,
            nowIndicatorClassNames: fn,
            nowIndicatorContent: fn,
            nowIndicatorDidMount: fn,
            nowIndicatorWillUnmount: fn,
            showNonCurrentDates: Boolean,
            lazyFetching: Boolean,
            startParam: String,
            endParam: String,
            timeZoneParam: String,
            timeZone: String,
            locales: fn,
            locale: fn,
            themeSystem: String,
            dragRevertDuration: Number,
            dragScroll: Boolean,
            allDayMaintainDuration: Boolean,
            unselectAuto: Boolean,
            dropAccept: fn,
            eventOrder: Ve,
            eventOrderStrict: Boolean,
            handleWindowResize: Boolean,
            windowResizeDelay: Number,
            longPressDelay: Number,
            eventDragMinDistance: Number,
            expandRows: Boolean,
            height: fn,
            contentHeight: fn,
            direction: String,
            weekNumberFormat: nn,
            eventResizableFromStart: Boolean,
            displayEventTime: Boolean,
            displayEventEnd: Boolean,
            weekText: String,
            progressiveEventRendering: Boolean,
            businessHours: fn,
            initialDate: fn,
            now: fn,
            eventDataTransform: fn,
            stickyHeaderDates: fn,
            stickyFooterScrollbar: fn,
            viewHeight: fn,
            defaultAllDay: Boolean,
            eventSourceFailure: fn,
            eventSourceSuccess: fn,
            eventDisplay: String,
            eventStartEditable: Boolean,
            eventDurationEditable: Boolean,
            eventOverlap: fn,
            eventConstraint: fn,
            eventAllow: fn,
            eventBackgroundColor: String,
            eventBorderColor: String,
            eventTextColor: String,
            eventColor: String,
            eventClassNames: fn,
            eventContent: fn,
            eventDidMount: fn,
            eventWillUnmount: fn,
            selectConstraint: fn,
            selectOverlap: fn,
            selectAllow: fn,
            droppable: Boolean,
            unselectCancel: String,
            slotLabelFormat: fn,
            slotLaneClassNames: fn,
            slotLaneContent: fn,
            slotLaneDidMount: fn,
            slotLaneWillUnmount: fn,
            slotLabelClassNames: fn,
            slotLabelContent: fn,
            slotLabelDidMount: fn,
            slotLabelWillUnmount: fn,
            dayMaxEvents: fn,
            dayMaxEventRows: fn,
            dayMinWidth: Number,
            slotLabelInterval: kt,
            allDayText: String,
            allDayClassNames: fn,
            allDayContent: fn,
            allDayDidMount: fn,
            allDayWillUnmount: fn,
            slotMinWidth: Number,
            navLinks: Boolean,
            eventTimeFormat: nn,
            rerenderDelay: Number,
            moreLinkText: fn,
            selectMinDistance: Number,
            selectable: Boolean,
            selectLongPressDelay: Number,
            eventLongPressDelay: Number,
            selectMirror: Boolean,
            eventMaxStack: Number,
            eventMinHeight: Number,
            eventMinWidth: Number,
            eventShortHeight: Number,
            slotEventOverlap: Boolean,
            plugins: fn,
            firstDay: Number,
            dayCount: Number,
            dateAlignment: String,
            dateIncrement: kt,
            hiddenDays: fn,
            monthMode: Boolean,
            fixedWeekCount: Boolean,
            validRange: fn,
            visibleRange: fn,
            titleFormat: fn,
            noEventsText: String,
            moreLinkClick: fn,
            moreLinkClassNames: fn,
            moreLinkContent: fn,
            moreLinkDidMount: fn,
            moreLinkWillUnmount: fn
        },
        on = {
            eventDisplay: "auto",
            defaultRangeSeparator: " - ",
            titleRangeSeparator: " – ",
            defaultTimedEventDuration: "01:00:00",
            defaultAllDayEventDuration: {
                day: 1
            },
            forceEventDuration: !1,
            nextDayThreshold: "00:00:00",
            dayHeaders: !0,
            initialView: "",
            aspectRatio: 1.35,
            headerToolbar: {
                start: "title",
                center: "",
                end: "today prev,next"
            },
            weekends: !0,
            weekNumbers: !1,
            weekNumberCalculation: "local",
            editable: !1,
            nowIndicator: !1,
            scrollTime: "06:00:00",
            scrollTimeReset: !0,
            slotMinTime: "00:00:00",
            slotMaxTime: "24:00:00",
            showNonCurrentDates: !0,
            lazyFetching: !0,
            startParam: "start",
            endParam: "end",
            timeZoneParam: "timeZone",
            timeZone: "local",
            locales: [],
            locale: "",
            themeSystem: "standard",
            dragRevertDuration: 500,
            dragScroll: !0,
            allDayMaintainDuration: !1,
            unselectAuto: !0,
            dropAccept: "*",
            eventOrder: "start,-duration,allDay,title",
            dayPopoverFormat: {
                month: "long",
                day: "numeric",
                year: "numeric"
            },
            handleWindowResize: !0,
            windowResizeDelay: 100,
            longPressDelay: 1e3,
            eventDragMinDistance: 5,
            expandRows: !1,
            navLinks: !1,
            selectable: !1,
            eventMinHeight: 15,
            eventMinWidth: 30,
            eventShortHeight: 30
        },
        an = {
            datesSet: fn,
            eventsSet: fn,
            eventAdd: fn,
            eventChange: fn,
            eventRemove: fn,
            windowResize: fn,
            eventClick: fn,
            eventMouseEnter: fn,
            eventMouseLeave: fn,
            select: fn,
            unselect: fn,
            loading: fn,
            _unmount: fn,
            _beforeprint: fn,
            _afterprint: fn,
            _noEventDrop: fn,
            _noEventResize: fn,
            _resize: fn,
            _scrollRequest: fn
        },
        sn = {
            buttonText: fn,
            views: fn,
            plugins: fn,
            initialEvents: fn,
            events: fn,
            eventSources: fn
        },
        ln = {
            headerToolbar: un,
            footerToolbar: un,
            buttonText: un,
            buttonIcons: un
        };
    function un(e, t) {
        return "object" == typeof e && "object" == typeof t && e && t
            ? Et(e, t)
            : e === t
    }
    var cn = {
        type: String,
        component: fn,
        buttonText: String,
        buttonTextKey: String,
        dateProfileGeneratorClass: fn,
        usesMinMaxTime: Boolean,
        classNames: fn,
        content: fn,
        didMount: fn,
        willUnmount: fn
    };
    function dn(e) {
        return ht(e, ln)
    }
    function pn(e, t) {
        var n = {},
            r = {};
        for (var o in t) 
            o in e && (n[o] = t[o](e[o]));
        for (var o in e) 
            o in t || (r[o] = e[o]);
        return {refined: n, extra: r}
    }
    function fn(e) {
        return e
    }
    function hn(e, t, n, r) {
        for (var o = {
            defs: {},
            instances: {}
        }, i = Pn(n), a = 0, s = e; a < s.length; a++) {
            var l = xn(s[a], t, n, r, i);
            l && vn(l, o)
        }
        return o
    }
    function vn(e, t) {
        return void 0 === t && (t = {
            defs: {},
            instances: {}
        }),
        t.defs[e.def.defId] = e.def,
        e.instance && (t.instances[e.instance.instanceId] = e.instance),
        t
    }
    function gn(e, t) {
        var n = e.instances[t];
        if (n) {
            var r = e.defs[n.defId],
                o = En(e, (function (e) {
                    return t = r,
                    n = e,
                    Boolean(t.groupId && t.groupId === n.groupId);
                    var t,
                        n
                }));
            return o.defs[r.defId] = r,
            o.instances[n.instanceId] = n,
            o
        }
        return {defs: {}, instances: {}}
    }
    function mn() {
        return {defs: {}, instances: {}}
    }
    function yn(e, t) {
        return {
            defs: r(r({}, e.defs), t.defs),
            instances: r(r({}, e.instances), t.instances)
        }
    }
    function En(e, t) {
        var n = vt(e.defs, t),
            r = vt(e.instances, (function (e) {
                return n[e.defId]
            }));
        return {defs: n, instances: r}
    }
    function Sn(e) {
        return Array.isArray(e)
            ? e
            : "string" == typeof e
                ? e.split(/\s+/)
                : []
    }
    var Dn = {
            display: String,
            editable: Boolean,
            startEditable: Boolean,
            durationEditable: Boolean,
            constraint: fn,
            overlap: fn,
            allow: fn,
            className: Sn,
            classNames: Sn,
            color: String,
            backgroundColor: String,
            borderColor: String,
            textColor: String
        },
        bn = {
            display: null,
            startEditable: null,
            durationEditable: null,
            constraints: [],
            overlap: null,
            allows: [],
            backgroundColor: "",
            borderColor: "",
            textColor: "",
            classNames: []
        };
    function Cn(e, t) {
        var n = function (e, t) {
            return Array.isArray(e)
                ? hn(e, null, t, !0)
                : "object" == typeof e && e
                    ? hn([e], null, t, !0)
                    : null != e
                        ? String(e)
                        : null
        }(e.constraint, t);
        return {
            display: e.display || null,
            startEditable: null != e.startEditable
                ? e.startEditable
                : e.editable,
            durationEditable: null != e.durationEditable
                ? e.durationEditable
                : e.editable,
            constraints: null != n
                ? [n]
                : [],
            overlap: null != e.overlap
                ? e.overlap
                : null,
            allows: null != e.allow
                ? [e.allow]
                : [],
            backgroundColor: e.backgroundColor || e.color || "",
            borderColor: e.borderColor || e.color || "",
            textColor: e.textColor || "",
            classNames: (e.className || []).concat(e.classNames || [])
        }
    }
    function wn(e) {
        return e.reduce(Rn, bn)
    }
    function Rn(e, t) {
        return {
            display: null != t.display
                ? t.display
                : e.display,
            startEditable: null != t.startEditable
                ? t.startEditable
                : e.startEditable,
            durationEditable: null != t.durationEditable
                ? t.durationEditable
                : e.durationEditable,
            constraints: e
                .constraints
                .concat(t.constraints),
            overlap: "boolean" == typeof t.overlap
                ? t.overlap
                : e.overlap,
            allows: e
                .allows
                .concat(t.allows),
            backgroundColor: t.backgroundColor || e.backgroundColor,
            borderColor: t.borderColor || e.borderColor,
            textColor: t.textColor || e.textColor,
            classNames: e
                .classNames
                .concat(t.classNames)
        }
    }
    var _n = {
            id: String,
            groupId: String,
            title: String,
            url: String
        },
        Tn = {
            start: fn,
            end: fn,
            date: fn,
            allDay: Boolean
        },
        kn = r(r(r({}, _n), Tn), {extendedProps: fn});
    function xn(e, t, n, r, o) {
        void 0 === o && (o = Pn(n));
        var i = Mn(e, n, o),
            a = i.refined,
            s = i.extra,
            l = function (e, t) {
                var n = null;
                e && (n = e.defaultAllDay);
                null == n && (n = t.options.defaultAllDay);
                return n
            }(t, n),
            u = function (e, t, n, r) {
                for (var o = 0; o < r.length; o += 1) {
                    var i = r[o].parse(e, n);
                    if (i) {
                        var a = e.allDay;
                        return null == a && null == (a = t) && null == (a = i.allDayGuess) && (a = !1), {
                            allDay: a,
                            duration: i.duration,
                            typeData: i.typeData,
                            typeId: o
                        }
                    }
                }
                return null
            }(a, l, n.dateEnv, n.pluginHooks.recurringTypes);
        if (u) 
            return (c = In(
                a,
                s,
                t
                    ? t.sourceId
                    : "",
                u.allDay,
                Boolean(u.duration),
                n
            )).recurringDef = {
                typeId: u.typeId,
                typeData: u.typeData,
                duration: u.duration
            }
        , {
            def: c,
            instance: null
        };
        var c,
            d = function (e, t, n, r) {
                var o,
                    i,
                    a = e.allDay,
                    s = null,
                    l = !1,
                    u = null,
                    c = null != e.start
                        ? e.start
                        : e.date;
                if (o = n.dateEnv.createMarkerMeta(c)) 
                    s = o.marker;
                else if (!r) 
                    return null;
                null != e.end && (i = n.dateEnv.createMarkerMeta(e.end));
                null == a && (
                    a = null != t
                        ? t
                        : (!o || o.isTimeUnspecified) && (!i || i.isTimeUnspecified)
                );
                a && s && (s = rt(s));
                i && (u = i.marker, a && (u = rt(u)), s && u <= s && (u = null));
                u
                    ? l = !0
                    : r || (l = n.options.forceEventDuration || !1, u = n.dateEnv.add(
                        s,
                        a
                            ? n.options.defaultAllDayEventDuration
                            : n.options.defaultTimedEventDuration
                    ));
                return {
                    allDay: a,
                    hasEnd: l,
                    range: {
                        start: s,
                        end: u
                    },
                    forcedStartTzo: o
                        ? o.forcedTzo
                        : null,
                    forcedEndTzo: i
                        ? i.forcedTzo
                        : null
                }
            }(a, l, n, r);
        return d
            ? {
                def: c = In(
                    a,
                    s,
                    t
                        ? t.sourceId
                        : "",
                    d.allDay,
                    d.hasEnd,
                    n
                ),
                instance: pt(c.defId, d.range, d.forcedStartTzo, d.forcedEndTzo)
            }
            : null
    }
    function Mn(e, t, n) {
        return void 0 === n && (n = Pn(t)),
        pn(e, n)
    }
    function Pn(e) {
        return r(r(r({}, Dn), kn), e.pluginHooks.eventRefiners)
    }
    function In(e, t, n, o, i, a) {
        for (var s = {
            title: e.title || "",
            groupId: e.groupId || "",
            publicId: e.id || "",
            url: e.url || "",
            recurringDef: null,
            defId: Ne(),
            sourceId: n,
            allDay: o,
            hasEnd: i,
            ui: Cn(e, a),
            extendedProps: r(r({}, e.extendedProps || {}), t)
        }, l = 0, u = a.pluginHooks.eventDefMemberAdders; l < u.length; l++) {
            var c = u[l];
            r(s, c(e))
        }
        return Object.freeze(s.ui.classNames),
        Object.freeze(s.extendedProps),
        s
    }
    function Nn(e) {
        var t = Math.floor(Qe(e.start, e.end)) || 1,
            n = rt(e.start);
        return {
            start: n,
            end: Ke(n, t)
        }
    }
    function Hn(e, t) {
        void 0 === t && (t = kt(0));
        var n = null,
            r = null;
        if (e.end) {
            r = rt(e.end);
            var o = e
                .end
                .valueOf() - r.valueOf();
            o && o >= Nt(t) && (r = Ke(r, 1))
        }
        return e.start && (n = rt(e.start), r && r <= n && (r = Ke(n, 1))), {
            start: n,
            end: r
        }
    }
    function On(e) {
        var t = Hn(e);
        return Qe(t.start, t.end) > 1
    }
    function An(e, t, n, r) {
        return "year" === r
            ? kt(n.diffWholeYears(e, t), "year")
            : "month" === r
                ? kt(n.diffWholeMonths(e, t), "month")
                : et(e, t)
    }
    function Un(e, t) {
        var n,
            r,
            o = [],
            i = t.start;
        for (e.sort(Ln), n = 0; n < e.length; n += 1) 
            (r = e[n]).start > i && o.push({start: i, end: r.start}),
            r.end > i && (i = r.end);
        return i < t.end && o.push({start: i, end: t.end}),
        o
    }
    function Ln(e, t) {
        return e
            .start
            .valueOf() - t
            .start
            .valueOf()
    }
    function Wn(e, t) {
        var n = e.start,
            r = e.end,
            o = null;
        return null !== t.start && (
            n = null === n
                ? t.start
                : new Date(Math.max(n.valueOf(), t.start.valueOf()))
        ),
        null != t.end && (
            r = null === r
                ? t.end
                : new Date(Math.min(r.valueOf(), t.end.valueOf()))
        ),
        (null === n || null === r || n < r) && (o = {
            start: n,
            end: r
        }),
        o
    }
    function Vn(e, t) {
        return (
            null === e.start
                ? null
                : e.start.valueOf()
        ) === (
            null === t.start
                ? null
                : t.start.valueOf()
        ) && (
            null === e.end
                ? null
                : e.end.valueOf()
        ) === (
            null === t.end
                ? null
                : t.end.valueOf()
        )
    }
    function Fn(e, t) {
        return (null === e.end || null === t.start || e.end > t.start) && (
            null === e.start || null === t.end || e.start < t.end
        )
    }
    function zn(e, t) {
        return (null === e.start || null !== t.start && t.start >= e.start) && (
            null === e.end || null !== t.end && t.end <= e.end
        )
    }
    function Bn(e, t) {
        return (null === e.start || t >= e.start) && (null === e.end || t < e.end)
    }
    function jn(e, t, n, r) {
        var o = {},
            i = {},
            a = {},
            s = [],
            l = [],
            u = Zn(e.defs, t);
        for (var c in e.defs) {
            "inverse-background" === (f = u[(S = e.defs[c]).defId]).display && (
                S.groupId
                    ? (o[S.groupId] = [], a[S.groupId] || (a[S.groupId] = S))
                    : i[c] = []
            )
        }
        for (var d in e.instances) {
            var p = e.instances[d],
                f = u[(S = e.defs[p.defId]).defId],
                h = p.range,
                v = !S.allDay && r
                    ? Hn(h, r)
                    : h,
                g = Wn(v, n);
            g && (
                "inverse-background" === f.display
                    ? S.groupId
                        ? o[S.groupId].push(g)
                        : i[p.defId].push(g)
                    : "none" !== f.display && (
                        "background" === f.display
                            ? s
                            : l
                    ).push({
                        def: S,
                        ui: f,
                        instance: p,
                        range: g,
                        isStart: v.start && v
                            .start
                            .valueOf() === g
                            .start
                            .valueOf(),
                        isEnd: v.end && v
                            .end
                            .valueOf() === g
                            .end
                            .valueOf()
                    })
            )
        }
        for (var m in o) 
            for (var y = 0, E = Un(o[m], n); y < E.length; y++) {
                var S,
                    D = E[y];
                f = u[(S = a[m]).defId];
                s.push({
                    def: S,
                    ui: f,
                    instance: null,
                    range: D,
                    isStart: !1,
                    isEnd: !1
                })
            }
        for (var c in i) 
            for (var b = 0, C = Un(i[c], n); b < C.length; b++) {
                D = C[b];
                s.push({
                    def: e.defs[c],
                    ui: u[c],
                    instance: null,
                    range: D,
                    isStart: !1,
                    isEnd: !1
                })
            }
        return {bg: s, fg: l}
    }
    function Gn(e) {
        return "background" === e.ui.display || "inverse-background" === e.ui.display
    }
    function qn(e, t) {
        e.fcSeg = t
    }
    function Yn(e) {
        return e.fcSeg || e.parentNode.fcSeg || null
    }
    function Zn(e, t) {
        return gt(e, (function (e) {
            return Xn(e, t)
        }))
    }
    function Xn(e, t) {
        var n = [];
        return t[""] && n.push(t[""]),
        t[e.defId] && n.push(t[e.defId]),
        n.push(e.ui),
        wn(n)
    }
    function Kn(e, t) {
        var n = e.map($n);
        return n.sort((function (e, n) {
            return Fe(e, n, t)
        })),
        n.map((function (e) {
            return e._seg
        }))
    }
    function $n(e) {
        var t = e.eventRange,
            n = t.def,
            o = t.instance
                ? t.instance.range
                : t.range,
            i = o.start
                ? o
                    .start
                    .valueOf()
                : 0,
            a = o.end
                ? o
                    .end
                    .valueOf()
                : 0;
        return r(r(r({}, n.extendedProps), n), {
            id: n.publicId,
            start: i,
            end: a,
            duration: a - i,
            allDay: Number(n.allDay),
            _seg: e
        })
    }
    function Jn(e, t) {
        for (
            var n = t.pluginHooks.isDraggableTransformers,
            r = e.eventRange,
            o = r.def,
            i = r.ui,
            a = i.startEditable,
            s = 0,
            l = n;
            s < l.length;
            s++
        ) {
            a = (0, l[s])(a, o, i, t)
        }
        return a
    }
    function Qn(e, t) {
        return e.isStart && e.eventRange.ui.durationEditable && t.options.eventResizableFromStart
    }
    function er(e, t) {
        return e.isEnd && e.eventRange.ui.durationEditable
    }
    function tr(e, t, n, r, o, i, a) {
        var s = n.dateEnv,
            l = n.options,
            u = l.displayEventTime,
            c = l.displayEventEnd,
            d = e.eventRange.def,
            p = e.eventRange.instance;
        null == u && (u = !1 !== r),
        null == c && (c = !1 !== o);
        var f = p.range.start,
            h = p.range.end,
            v = i || e.start || e.eventRange.range.start,
            g = a || e.end || e.eventRange.range.end,
            m = rt(f).valueOf() === rt(v).valueOf(),
            y = rt($e(h, -1)).valueOf() === rt($e(g, -1)).valueOf();
        return u && !d.allDay && (m || y)
            ? (
                v = m
                    ? f
                    : v,
                g = y
                    ? h
                    : g,
                c && d.hasEnd
                    ? s.formatRange(v, g, t, {
                        forcedStartTzo: i
                            ? null
                            : p.forcedStartTzo,
                        forcedEndTzo: a
                            ? null
                            : p.forcedEndTzo
                    })
                    : s.format(v, t, {
                        forcedTzo: i
                            ? null
                            : p.forcedStartTzo
                    })
            )
            : ""
    }
    function nr(e, t, n) {
        var r = e.eventRange.range;
        return {
            isPast: r.end < (n || t.start),
            isFuture: r.start >= (n || t.end),
            isToday: t && Bn(t, r.start)
        }
    }
    function rr(e) {
        var t = ["fc-event"];
        return e.isMirror && t.push("fc-event-mirror"),
        e.isDraggable && t.push("fc-event-draggable"),
        (e.isStartResizable || e.isEndResizable) && t.push("fc-event-resizable"),
        e.isDragging && t.push("fc-event-dragging"),
        e.isResizing && t.push("fc-event-resizing"),
        e.isSelected && t.push("fc-event-selected"),
        e.isStart && t.push("fc-event-start"),
        e.isEnd && t.push("fc-event-end"),
        e.isPast && t.push("fc-event-past"),
        e.isToday && t.push("fc-event-today"),
        e.isFuture && t.push("fc-event-future"),
        t
    }
    function or(e) {
        return e.instance
            ? e.instance.instanceId
            : e.def.defId + ":" + e
                .range
                .start
                .toISOString()
    }
    var ir = {
        start: fn,
        end: fn,
        allDay: Boolean
    };
    function ar(e, t, n) {
        var o = function (e, t) {
                var n = pn(e, ir),
                    o = n.refined,
                    i = n.extra,
                    a = o.start
                        ? t.createMarkerMeta(o.start)
                        : null,
                    s = o.end
                        ? t.createMarkerMeta(o.end)
                        : null,
                    l = o.allDay;
                null == l && (l = a && a.isTimeUnspecified && (!s || s.isTimeUnspecified));
                return r({
                    range: {
                        start: a
                            ? a.marker
                            : null,
                        end: s
                            ? s.marker
                            : null
                    },
                    allDay: l
                }, i)
            }(e, t),
            i = o.range;
        if (!i.start) 
            return null;
        if (!i.end) {
            if (null == n) 
                return null;
            i.end = t.add(i.start, n)
        }
        return o
    }
    function sr(e, t) {
        return Vn(e.range, t.range) && e.allDay === t.allDay && function (e, t) {
            for (var n in t) 
                if ("range" !== n && "allDay" !== n && e[n] !== t[n]) 
                    return !1;
        for (var n in e) 
                if (!(n in t)) 
                    return !1;
        return !0
        }(e, t)
    }
    function lr(e, t, n) {
        return r(r({}, ur(e, t, n)), {timeZone: t.timeZone})
    }
    function ur(e, t, n) {
        return {
            start: t.toDate(e.start),
            end: t.toDate(e.end),
            startStr: t.formatIso(e.start, {omitTime: n}),
            endStr: t.formatIso(e.end, {omitTime: n})
        }
    }
    function cr(e, t, n) {
        var r = Mn({
                editable: !1
            }, n),
            o = In(r.refined, r.extra, "", e.allDay, !0, n);
        return {
            def: o,
            ui: Xn(o, t),
            instance: pt(o.defId, e.range),
            range: e.range,
            isStart: !0,
            isEnd: !0
        }
    }
    function dr(e, t, n) {
        n
            .emitter
            .trigger("select", r(r({}, pr(e, n)), {
                jsEvent: t
                    ? t.origEvent
                    : null,
                view: n.viewApi || n.calendarApi.view
            }))
    }
    function pr(e, t) {
        for (
            var n,
            o,
            i = {},
            a = 0,
            s = t.pluginHooks.dateSpanTransforms;
            a < s.length;
            a++
        ) {
            var l = s[a];
            r(i, l(e, t))
        }
        return r(
            i,
            (n = e, o = t.dateEnv, r(r({}, ur(n.range, o, n.allDay)), {allDay: n.allDay}))
        ),
        i
    }
    function fr(e, t, n) {
        var r = n.dateEnv,
            o = n.options,
            i = t;
        return e
            ? (i = rt(i), i = r.add(i, o.defaultAllDayEventDuration))
            : i = r.add(i, o.defaultTimedEventDuration),
        i
    }
    function hr(e, t, n, r) {
        var o = Zn(e.defs, t),
            i = {
                defs: {},
                instances: {}
            };
        for (var a in e.defs) {
            var s = e.defs[a];
            i.defs[a] = vr(s, o[a], n, r)
        }
        for (var l in e.instances) {
            var u = e.instances[l];
            s = i.defs[u.defId];
            i.instances[l] = gr(u, s, o[u.defId], n, r)
        }
        return i
    }
    function vr(e, t, n, o) {
        var i = n.standardProps || {};
        null == i.hasEnd && t.durationEditable && (n.startDelta || n.endDelta) && (
            i.hasEnd = !0
        );
        var a = r(r(r({}, e), i), {
            ui: r(r({}, e.ui), i.ui)
        });
        n.extendedProps && (
            a.extendedProps = r(r({}, a.extendedProps), n.extendedProps)
        );
        for (var s = 0, l = o.pluginHooks.eventDefMutationAppliers; s < l.length; s++) {
            (0, l[s])(a, n, o)
        }
        return !a.hasEnd && o.options.forceEventDuration && (a.hasEnd = !0),
        a
    }
    function gr(e, t, n, o, i) {
        var a = i.dateEnv,
            s = o.standardProps && !0 === o.standardProps.allDay,
            l = o.standardProps && !1 === o.standardProps.hasEnd,
            u = r({}, e);
        return s && (u.range = Nn(u.range)),
        o.datesDelta && n.startEditable && (u.range = {
            start: a.add(u.range.start, o.datesDelta),
            end: a.add(u.range.end, o.datesDelta)
        }),
        o.startDelta && n.durationEditable && (u.range = {
            start: a.add(u.range.start, o.startDelta),
            end: u.range.end
        }),
        o.endDelta && n.durationEditable && (u.range = {
            start: u.range.start,
            end: a.add(u.range.end, o.endDelta)
        }),
        l && (u.range = {
            start: u.range.start,
            end: fr(t.allDay, u.range.start, i)
        }),
        t.allDay && (u.range = {
            start: rt(u.range.start),
            end: rt(u.range.end)
        }),
        u.range.end < u.range.start && (u.range.end = fr(t.allDay, u.range.start, i)),
        u
    }
    var mr = function () {
            function e(e, t, n) {
                this.type = e,
                this.getCurrentData = t,
                this.dateEnv = n
            }
            return Object.defineProperty(e.prototype, "calendar", {
                get: function () {
                    return this
                        .getCurrentData()
                        .calendarApi
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "title", {
                get: function () {
                    return this
                        .getCurrentData()
                        .viewTitle
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "activeStart", {
                get: function () {
                    return this
                        .dateEnv
                        .toDate(this.getCurrentData().dateProfile.activeRange.start)
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "activeEnd", {
                get: function () {
                    return this
                        .dateEnv
                        .toDate(this.getCurrentData().dateProfile.activeRange.end)
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "currentStart", {
                get: function () {
                    return this
                        .dateEnv
                        .toDate(this.getCurrentData().dateProfile.currentRange.start)
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "currentEnd", {
                get: function () {
                    return this
                        .dateEnv
                        .toDate(this.getCurrentData().dateProfile.currentRange.end)
                },
                enumerable: !1,
                configurable: !0
            }),
            e.prototype.getOption = function (e) {
                return this
                    .getCurrentData()
                    .options[e]
            },
            e
        }(),
        yr = {
            id: String,
            defaultAllDay: Boolean,
            url: String,
            format: String,
            events: fn,
            eventDataTransform: fn,
            success: fn,
            failure: fn
        };
    function Er(e, t, n) {
        var r;
        if (
            void 0 === n && (n = Sr(t)),
            "string" == typeof e
                ? r = {
                    url: e
                }
                : "function" == typeof e || Array.isArray(e)
                    ? r = {
                        events: e
                    }
                    : "object" == typeof e && e && (r = e),
            r
        ) {
            var o = pn(r, n),
                i = o.refined,
                a = o.extra,
                s = function (e, t) {
                    for (var n = t.pluginHooks.eventSourceDefs, r = n.length - 1; r >= 0; r -= 1) {
                        var o = n[r].parseMeta(e);
                        if (o) 
                            return {sourceDefId: r, meta: o}
                        }
                    return null
                }(i, t);
            if (s) 
                return {
                    _raw: e,
                    isFetching: !1,
                    latestFetchId: "",
                    fetchRange: null,
                    defaultAllDay: i.defaultAllDay,
                    eventDataTransform: i.eventDataTransform,
                    success: i.success,
                    failure: i.failure,
                    publicId: i.id || "",
                    sourceId: Ne(),
                    sourceDefId: s.sourceDefId,
                    meta: s.meta,
                    ui: Cn(i, t),
                    extendedProps: a
                }
            }
        return null
    }
    function Sr(e) {
        return r(r(r({}, Dn), yr), e.pluginHooks.eventSourceRefiners)
    }
    function Dr(e, t) {
        return "function" == typeof e && (e = e()),
        null == e
            ? t.createNowMarker()
            : t.createMarker(e)
    }
    var br = function () {
            function e() {}
            return e.prototype.getCurrentData = function () {
                return this
                    .currentDataManager
                    .getCurrentData()
            },
            e.prototype.dispatch = function (e) {
                return this
                    .currentDataManager
                    .dispatch(e)
            },
            Object.defineProperty(e.prototype, "view", {
                get: function () {
                    return this
                        .getCurrentData()
                        .viewApi
                },
                enumerable: !1,
                configurable: !0
            }),
            e.prototype.batchRendering = function (e) {
                e()
            },
            e.prototype.updateSize = function () {
                this.trigger("_resize", !0)
            },
            e.prototype.setOption = function (e, t) {
                this.dispatch({type: "SET_OPTION", optionName: e, rawOptionValue: t})
            },
            e.prototype.getOption = function (e) {
                return this
                    .currentDataManager
                    .currentCalendarOptionsInput[e]
            },
            e.prototype.getAvailableLocaleCodes = function () {
                return Object.keys(this.getCurrentData().availableRawLocales)
            },
            e.prototype.on = function (e, t) {
                var n = this.currentDataManager;
                n.currentCalendarOptionsRefiners[e]
                    ? n
                        .emitter
                        .on(e, t)
                    : console.warn("Unknown listener name '" + e + "'")
            },
            e.prototype.off = function (e, t) {
                this
                    .currentDataManager
                    .emitter
                    .off(e, t)
            },
            e.prototype.trigger = function (e) {
                for (var t, n = [], r = 1; r < arguments.length; r++) 
                    n[r - 1] = arguments[r];
                
                (t = this.currentDataManager.emitter)
                    .trigger
                    .apply(t, o([e], n))
            },
            e.prototype.changeView = function (e, t) {
                var n = this;
                this.batchRendering((function () {
                    if (n.unselect(), t) 
                        if (t.start && t.end) 
                            n.dispatch({type: "CHANGE_VIEW_TYPE", viewType: e}),
                            n.dispatch({type: "SET_OPTION", optionName: "visibleRange", rawOptionValue: t});
                        else {
                            var r = n
                                .getCurrentData()
                                .dateEnv;
                            n.dispatch(
                                {type: "CHANGE_VIEW_TYPE", viewType: e, dateMarker: r.createMarker(t)}
                            )
                        }
                    else 
                        n.dispatch({type: "CHANGE_VIEW_TYPE", viewType: e})
                }))
            },
            e.prototype.zoomTo = function (e, t) {
                var n;
                t = t || "day",
                n = this
                    .getCurrentData()
                    .viewSpecs[t] || this.getUnitViewSpec(t),
                this.unselect(),
                n
                    ? this.dispatch({type: "CHANGE_VIEW_TYPE", viewType: n.type, dateMarker: e})
                    : this.dispatch({type: "CHANGE_DATE", dateMarker: e})
            },
            e.prototype.getUnitViewSpec = function (e) {
                var t,
                    n,
                    r = this.getCurrentData(),
                    o = r.viewSpecs,
                    i = r.toolbarConfig,
                    a = [].concat(i.viewsWithButtons);
                for (var s in o) 
                    a.push(s);
                for (t = 0; t < a.length; t += 1) 
                    if ((n = o[a[t]]) && n.singleUnit === e) 
                        return n;
            return null
            },
            e.prototype.prev = function () {
                this.unselect(),
                this.dispatch({type: "PREV"})
            },
            e.prototype.next = function () {
                this.unselect(),
                this.dispatch({type: "NEXT"})
            },
            e.prototype.prevYear = function () {
                var e = this.getCurrentData();
                this.unselect(),
                this.dispatch({
                    type: "CHANGE_DATE",
                    dateMarker: e
                        .dateEnv
                        .addYears(e.currentDate, -1)
                })
            },
            e.prototype.nextYear = function () {
                var e = this.getCurrentData();
                this.unselect(),
                this.dispatch({
                    type: "CHANGE_DATE",
                    dateMarker: e
                        .dateEnv
                        .addYears(e.currentDate, 1)
                })
            },
            e.prototype.today = function () {
                var e = this.getCurrentData();
                this.unselect(),
                this.dispatch({
                    type: "CHANGE_DATE",
                    dateMarker: Dr(e.calendarOptions.now, e.dateEnv)
                })
            },
            e.prototype.gotoDate = function (e) {
                var t = this.getCurrentData();
                this.unselect(),
                this.dispatch({
                    type: "CHANGE_DATE", dateMarker: t
                        .dateEnv
                        .createMarker(e)
                })
            },
            e.prototype.incrementDate = function (e) {
                var t = this.getCurrentData(),
                    n = kt(e);
                n && (this.unselect(), this.dispatch({
                    type: "CHANGE_DATE",
                    dateMarker: t
                        .dateEnv
                        .add(t.currentDate, n)
                }))
            },
            e.prototype.getDate = function () {
                var e = this.getCurrentData();
                return e
                    .dateEnv
                    .toDate(e.currentDate)
            },
            e.prototype.formatDate = function (e, t) {
                var n = this
                    .getCurrentData()
                    .dateEnv;
                return n.format(n.createMarker(e), nn(t))
            },
            e.prototype.formatRange = function (e, t, n) {
                var r = this
                    .getCurrentData()
                    .dateEnv;
                return r.formatRange(r.createMarker(e), r.createMarker(t), nn(n), n)
            },
            e.prototype.formatIso = function (e, t) {
                var n = this
                    .getCurrentData()
                    .dateEnv;
                return n.formatIso(n.createMarker(e), {omitTime: t})
            },
            e.prototype.select = function (e, t) {
                var n;
                n = null == t
                    ? null != e.start
                        ? e
                        : {
                            start: e,
                            end: null
                        }
                    : {
                        start: e,
                        end: t
                    };
                var r = this.getCurrentData(),
                    o = ar(n, r.dateEnv, kt({days: 1}));
                o && (this.dispatch({type: "SELECT_DATES", selection: o}), dr(o, null, r))
            },
            e.prototype.unselect = function (e) {
                var t = this.getCurrentData();
                t.dateSelection && (this.dispatch({type: "UNSELECT_DATES"}), function (e, t) {
                    t
                        .emitter
                        .trigger("unselect", {
                            jsEvent: e
                                ? e.origEvent
                                : null,
                            view: t.viewApi || t.calendarApi.view
                        })
                }(e, t))
            },
            e.prototype.addEvent = function (e, t) {
                if (e instanceof Cr) {
                    var n = e._def,
                        r = e._instance;
                    return this
                        .getCurrentData()
                        .eventStore
                        .defs[n.defId] || (this.dispatch({
                        type: "ADD_EVENTS",
                        eventStore: vn({def: n, instance: r})
                    }), this.triggerEventAdd(e)),
                    e
                }
                var o,
                    i = this.getCurrentData();
                if (t instanceof ye) 
                    o = t.internalEventSource;
                else if ("boolean" == typeof t) 
                    t && (o = yt(i.eventSources)[0]);
                else if (null != t) {
                    var a = this.getEventSourceById(t);
                    if (!a) 
                        return console.warn('Could not find an event source with ID "' + t + '"'),
                        null;
                    o = a.internalEventSource
                }
                var s = xn(e, o, i, !1);
                if (s) {
                    var l = new Cr(
                        i,
                        s.def,
                        s.def.recurringDef
                            ? null
                            : s.instance
                    );
                    return this.dispatch({type: "ADD_EVENTS", eventStore: vn(s)}),
                    this.triggerEventAdd(l),
                    l
                }
                return null
            },
            e.prototype.triggerEventAdd = function (e) {
                var t = this;
                this
                    .getCurrentData()
                    .emitter
                    .trigger("eventAdd", {
                        event: e,
                        relatedEvents: [],
                        revert: function () {
                            t.dispatch({type: "REMOVE_EVENTS", eventStore: wr(e)})
                        }
                    })
            },
            e.prototype.getEventById = function (e) {
                var t = this.getCurrentData(),
                    n = t.eventStore,
                    r = n.defs,
                    o = n.instances;
                for (var i in e = String(e), r) {
                    var a = r[i];
                    if (a.publicId === e) {
                        if (a.recurringDef) 
                            return new Cr(t, a, null);
                        for (var s in o) {
                            var l = o[s];
                            if (l.defId === a.defId) 
                                return new Cr(t, a, l)
                        }
                    }
                }
                return null
            },
            e.prototype.getEvents = function () {
                var e = this.getCurrentData();
                return Rr(e.eventStore, e)
            },
            e.prototype.removeAllEvents = function () {
                this.dispatch({type: "REMOVE_ALL_EVENTS"})
            },
            e.prototype.getEventSources = function () {
                var e = this.getCurrentData(),
                    t = e.eventSources,
                    n = [];
                for (var r in t) 
                    n.push(new ye(e, t[r]));
                return n
            },
            e.prototype.getEventSourceById = function (e) {
                var t = this.getCurrentData(),
                    n = t.eventSources;
                for (var r in e = String(e), n) 
                    if (n[r].publicId === e) 
                        return new ye(t, n[r]);
            return null
            },
            e.prototype.addEventSource = function (e) {
                var t = this.getCurrentData();
                if (e instanceof ye) 
                    return t.eventSources[e.internalEventSource.sourceId] || this.dispatch({
                        type: "ADD_EVENT_SOURCES",
                        sources: [e.internalEventSource]
                    }),
                    e;
                var n = Er(e, t);
                return n
                    ? (this.dispatch({type: "ADD_EVENT_SOURCES", sources: [n]}), new ye(t, n))
                    : null
            },
            e.prototype.removeAllEventSources = function () {
                this.dispatch({type: "REMOVE_ALL_EVENT_SOURCES"})
            },
            e.prototype.refetchEvents = function () {
                this.dispatch({
                    type: "FETCH_EVENT_SOURCES",
                    isRefetch: !0
                })
            },
            e.prototype.scrollToTime = function (e) {
                var t = kt(e);
                t && this.trigger("_scrollRequest", {time: t})
            },
            e
        }(),
        Cr = function () {
            function e(e, t, n) {
                this._context = e,
                this._def = t,
                this._instance = n || null
            }
            return e.prototype.setProp = function (e, t) {
                var n,
                    r;
                if (e in Tn) 
                    console.warn(
                        "Could not set date-related prop 'name'. Use one of the date-related methods in" +
                        "stead."
                    );
                else if ("id" === e) 
                    t = _n[e](t),
                    this.mutate({
                        standardProps: {
                            publicId: t
                        }
                    });
                else if (e in _n) 
                    t = _n[e](t),
                    this.mutate({
                        standardProps: (n = {}, n[e] = t, n)
                    });
                else if (e in Dn) {
                    var o = Dn[e](t);
                    "color" === e
                        ? o = {
                            backgroundColor: t,
                            borderColor: t
                        }
                        : "editable" === e
                            ? o = {
                                startEditable: t,
                                durationEditable: t
                            }
                            : ((r = {})[e] = t, o = r),
                    this.mutate({
                        standardProps: {
                            ui: o
                        }
                    })
                } else 
                    console.warn(
                        "Could not set prop '" + e + "'. Use setExtendedProp instead."
                    )
            },
            e.prototype.setExtendedProp = function (e, t) {
                var n;
                this.mutate({
                    extendedProps: (n = {}, n[e] = t, n)
                })
            },
            e.prototype.setStart = function (e, t) {
                void 0 === t && (t = {});
                var n = this._context.dateEnv,
                    r = n.createMarker(e);
                if (r && this._instance) {
                    var o = An(this._instance.range.start, r, n, t.granularity);
                    t.maintainDuration
                        ? this.mutate({datesDelta: o})
                        : this.mutate({startDelta: o})
                }
            },
            e.prototype.setEnd = function (e, t) {
                void 0 === t && (t = {});
                var n,
                    r = this._context.dateEnv;
                if ((null == e || (n = r.createMarker(e))) && this._instance) 
                    if (n) {
                        var o = An(this._instance.range.end, n, r, t.granularity);
                        this.mutate({endDelta: o})
                    } else 
                        this.mutate({
                            standardProps: {
                                hasEnd: !1
                            }
                        })
            },
            e.prototype.setDates = function (e, t, n) {
                void 0 === n && (n = {});
                var r,
                    o,
                    i,
                    a = this._context.dateEnv,
                    s = {
                        allDay: n.allDay
                    },
                    l = a.createMarker(e);
                if (l && ((null == t || (r = a.createMarker(t))) && this._instance)) {
                    var u = this._instance.range;
                    !0 === n.allDay && (u = Nn(u));
                    var c = An(u.start, l, a, n.granularity);
                    if (r) {
                        var d = An(u.end, r, a, n.granularity);
                        i = d,
                        (o = c).years === i.years && o.months === i.months && o.days === i.days && o.milliseconds === i.milliseconds
                            ? this.mutate({datesDelta: c, standardProps: s})
                            : this.mutate({startDelta: c, endDelta: d, standardProps: s})
                    } else 
                        s.hasEnd = !1,
                        this.mutate({datesDelta: c, standardProps: s})
                }
            },
            e.prototype.moveStart = function (e) {
                var t = kt(e);
                t && this.mutate({startDelta: t})
            },
            e.prototype.moveEnd = function (e) {
                var t = kt(e);
                t && this.mutate({endDelta: t})
            },
            e.prototype.moveDates = function (e) {
                var t = kt(e);
                t && this.mutate({datesDelta: t})
            },
            e.prototype.setAllDay = function (e, t) {
                void 0 === t && (t = {});
                var n = {
                        allDay: e
                    },
                    r = t.maintainDuration;
                null == r && (r = this._context.options.allDayMaintainDuration),
                this._def.allDay !== e && (n.hasEnd = r),
                this.mutate({standardProps: n})
            },
            e.prototype.formatRange = function (e) {
                var t = this._context.dateEnv,
                    n = this._instance,
                    r = nn(e);
                return this._def.hasEnd
                    ? t.formatRange(n.range.start, n.range.end, r, {
                        forcedStartTzo: n.forcedStartTzo,
                        forcedEndTzo: n.forcedEndTzo
                    })
                    : t.format(n.range.start, r, {forcedTzo: n.forcedStartTzo})
            },
            e.prototype.mutate = function (t) {
                var n = this._instance;
                if (n) {
                    var r = this._def,
                        o = this._context,
                        i = o
                            .getCurrentData()
                            .eventStore,
                        a = gn(i, n.instanceId);
                    a = hr(a, {
                        "": {
                            display: "",
                            startEditable: !0,
                            durationEditable: !0,
                            constraints: [],
                            overlap: null,
                            allows: [],
                            backgroundColor: "",
                            borderColor: "",
                            textColor: "",
                            classNames: []
                        }
                    }, t, o);
                    var s = new e(o, r, n);
                    this._def = a.defs[r.defId],
                    this._instance = a.instances[n.instanceId],
                    o.dispatch({type: "MERGE_EVENTS", eventStore: a}),
                    o
                        .emitter
                        .trigger("eventChange", {
                            oldEvent: s,
                            event: this,
                            relatedEvents: Rr(a, o, n),
                            revert: function () {
                                o.dispatch({type: "RESET_EVENTS", eventStore: i})
                            }
                        })
                }
            },
            e.prototype.remove = function () {
                var e = this._context,
                    t = wr(this);
                e.dispatch({type: "REMOVE_EVENTS", eventStore: t}),
                e
                    .emitter
                    .trigger("eventRemove", {
                        event: this,
                        relatedEvents: [],
                        revert: function () {
                            e.dispatch({type: "MERGE_EVENTS", eventStore: t})
                        }
                    })
            },
            Object.defineProperty(e.prototype, "source", {
                get: function () {
                    var e = this._def.sourceId;
                    return e
                        ? new ye(this._context, this._context.getCurrentData().eventSources[e])
                        : null
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "start", {
                get: function () {
                    return this._instance
                        ? this
                            ._context
                            .dateEnv
                            .toDate(this._instance.range.start)
                        : null
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "end", {
                get: function () {
                    return this._instance && this._def.hasEnd
                        ? this
                            ._context
                            .dateEnv
                            .toDate(this._instance.range.end)
                        : null
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "startStr", {
                get: function () {
                    var e = this._instance;
                    return e
                        ? this
                            ._context
                            .dateEnv
                            .formatIso(e.range.start, {
                                omitTime: this._def.allDay,
                                forcedTzo: e.forcedStartTzo
                            })
                        : ""
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "endStr", {
                get: function () {
                    var e = this._instance;
                    return e && this._def.hasEnd
                        ? this
                            ._context
                            .dateEnv
                            .formatIso(e.range.end, {
                                omitTime: this._def.allDay,
                                forcedTzo: e.forcedEndTzo
                            })
                        : ""
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "id", {
                get: function () {
                    return this._def.publicId
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "groupId", {
                get: function () {
                    return this._def.groupId
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "allDay", {
                get: function () {
                    return this._def.allDay
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "title", {
                get: function () {
                    return this._def.title
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "url", {
                get: function () {
                    return this._def.url
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "display", {
                get: function () {
                    return this._def.ui.display || "auto"
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "startEditable", {
                get: function () {
                    return this._def.ui.startEditable
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "durationEditable", {
                get: function () {
                    return this._def.ui.durationEditable
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "constraint", {
                get: function () {
                    return this
                        ._def
                        .ui
                        .constraints[0] || null
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "overlap", {
                get: function () {
                    return this._def.ui.overlap
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "allow", {
                get: function () {
                    return this
                        ._def
                        .ui
                        .allows[0] || null
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "backgroundColor", {
                get: function () {
                    return this._def.ui.backgroundColor
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "borderColor", {
                get: function () {
                    return this._def.ui.borderColor
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "textColor", {
                get: function () {
                    return this._def.ui.textColor
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "classNames", {
                get: function () {
                    return this._def.ui.classNames
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "extendedProps", {
                get: function () {
                    return this._def.extendedProps
                },
                enumerable: !1,
                configurable: !0
            }),
            e.prototype.toPlainObject = function (e) {
                void 0 === e && (e = {});
                var t = this._def,
                    n = t.ui,
                    o = this.startStr,
                    i = this.endStr,
                    a = {};
                return t.title && (a.title = t.title),
                o && (a.start = o),
                i && (a.end = i),
                t.publicId && (a.id = t.publicId),
                t.groupId && (a.groupId = t.groupId),
                t.url && (a.url = t.url),
                n.display && "auto" !== n.display && (a.display = n.display),
                e.collapseColor && n.backgroundColor && n.backgroundColor === n.borderColor
                    ? a.color = n.backgroundColor
                    : (
                        n.backgroundColor && (a.backgroundColor = n.backgroundColor),
                        n.borderColor && (a.borderColor = n.borderColor)
                    ),
                n.textColor && (a.textColor = n.textColor),
                n.classNames.length && (a.classNames = n.classNames),
                Object
                    .keys(t.extendedProps)
                    .length && (
                        e.collapseExtendedProps
                            ? r(a, t.extendedProps)
                            : a.extendedProps = t.extendedProps
                    ),
                a
            },
            e.prototype.toJSON = function () {
                return this.toPlainObject()
            },
            e
        }();
    function wr(e) {
        var t,
            n,
            r = e._def,
            o = e._instance;
        return {
            defs: (t = {}, t[r.defId] = r, t),
            instances: o
                ? (n = {}, n[o.instanceId] = o, n)
                : {}
        }
    }
    function Rr(e, t, n) {
        var r = e.defs,
            o = e.instances,
            i = [],
            a = n
                ? n.instanceId
                : "";
        for (var s in o) {
            var l = o[s],
                u = r[l.defId];
            l.instanceId !== a && i.push(new Cr(t, u, l))
        }
        return i
    }
    var _r = {};
    var Tr,
        kr = function () {
            function e() {}
            return e.prototype.getMarkerYear = function (e) {
                return e.getUTCFullYear()
            },
            e.prototype.getMarkerMonth = function (e) {
                return e.getUTCMonth()
            },
            e.prototype.getMarkerDay = function (e) {
                return e.getUTCDate()
            },
            e.prototype.arrayToMarker = function (e) {
                return ut(e)
            },
            e.prototype.markerToArray = function (e) {
                return lt(e)
            },
            e
        }();
    Tr = kr,
    _r["gregory"] = Tr;
    var xr = /^\s*(\d{4})(-?(\d{2})(-?(\d{2})([T ](\d{2}):?(\d{2})(:?(\d{2})(\.(\d+))?)?(Z|(([-+])(\d{2})(:?(\d{2}))?))?)?)?)?$/;
    function Mr(e) {
        var t = xr.exec(e);
        if (t) {
            var n = new Date(Date.UTC(
                Number(t[1]),
                t[3]
                    ? Number(t[3]) - 1
                    : 0,
                Number(t[5] || 1),
                Number(t[7] || 0),
                Number(t[8] || 0),
                Number(t[10] || 0),
                t[12]
                    ? 1e3 * Number("0." + t[12])
                    : 0
            ));
            if (ct(n)) {
                var r = null;
                return t[13] && (r = (
                    "-" === t[15]
                        ? -1
                        : 1
                ) * (60 * Number(t[16] || 0) + Number(t[18] || 0))), {
                    marker: n,
                    isTimeUnspecified: !t[6],
                    timeZoneOffset: r
                }
            }
        }
        return null
    }
    var Pr = function () {
            function e(e) {
                var t = this.timeZone = e.timeZone,
                    n = "local" !== t && "UTC" !== t;
                e.namedTimeZoneImpl && n && (
                    this.namedTimeZoneImpl = new e.namedTimeZoneImpl(t)
                ),
                this.canComputeOffset = Boolean(!n || this.namedTimeZoneImpl),
                this.calendarSystem = function (e) {
                    return new _r[e]
                }(e.calendarSystem),
                this.locale = e.locale,
                this.weekDow = e.locale.week.dow,
                this.weekDoy = e.locale.week.doy,
                "ISO" === e.weekNumberCalculation && (this.weekDow = 1, this.weekDoy = 4),
                "number" == typeof e.firstDay && (this.weekDow = e.firstDay),
                "function" == typeof e.weekNumberCalculation && (
                    this.weekNumberFunc = e.weekNumberCalculation
                ),
                this.weekText = null != e.weekText
                    ? e.weekText
                    : e.locale.options.weekText,
                this.cmdFormatter = e.cmdFormatter,
                this.defaultSeparator = e.defaultSeparator
            }
            return e.prototype.createMarker = function (e) {
                var t = this.createMarkerMeta(e);
                return null === t
                    ? null
                    : t.marker
            },
            e.prototype.createNowMarker = function () {
                return this.canComputeOffset
                    ? this.timestampToMarker((new Date).valueOf())
                    : ut(at(new Date))
            },
            e.prototype.createMarkerMeta = function (e) {
                if ("string" == typeof e) 
                    return this.parse(e);
                var t = null;
                return "number" == typeof e
                    ? t = this.timestampToMarker(e)
                    : e instanceof Date
                        ? (e = e.valueOf(), isNaN(e) || (t = this.timestampToMarker(e)))
                        : Array.isArray(e) && (t = ut(e)),
                null !== t && ct(t)
                    ? {
                        marker: t,
                        isTimeUnspecified: !1,
                        forcedTzo: null
                    }
                    : null
            },
            e.prototype.parse = function (e) {
                var t = Mr(e);
                if (null === t) 
                    return null;
                var n = t.marker,
                    r = null;
                return null !== t.timeZoneOffset && (
                    this.canComputeOffset
                        ? n = this.timestampToMarker(n.valueOf() - 60 * t.timeZoneOffset * 1e3)
                        : r = t.timeZoneOffset
                ), {
                    marker: n,
                    isTimeUnspecified: t.isTimeUnspecified,
                    forcedTzo: r
                }
            },
            e.prototype.getYear = function (e) {
                return this
                    .calendarSystem
                    .getMarkerYear(e)
            },
            e.prototype.getMonth = function (e) {
                return this
                    .calendarSystem
                    .getMarkerMonth(e)
            },
            e.prototype.add = function (e, t) {
                var n = this
                    .calendarSystem
                    .markerToArray(e);
                return n[0] += t.years,
                n[1] += t.months,
                n[2] += t.days,
                n[6] += t.milliseconds,
                this
                    .calendarSystem
                    .arrayToMarker(n)
            },
            e.prototype.subtract = function (e, t) {
                var n = this
                    .calendarSystem
                    .markerToArray(e);
                return n[0] -= t.years,
                n[1] -= t.months,
                n[2] -= t.days,
                n[6] -= t.milliseconds,
                this
                    .calendarSystem
                    .arrayToMarker(n)
            },
            e.prototype.addYears = function (e, t) {
                var n = this
                    .calendarSystem
                    .markerToArray(e);
                return n[0] += t,
                this
                    .calendarSystem
                    .arrayToMarker(n)
            },
            e.prototype.addMonths = function (e, t) {
                var n = this
                    .calendarSystem
                    .markerToArray(e);
                return n[1] += t,
                this
                    .calendarSystem
                    .arrayToMarker(n)
            },
            e.prototype.diffWholeYears = function (e, t) {
                var n = this.calendarSystem;
                return dt(e) === dt(t) && n.getMarkerDay(e) === n.getMarkerDay(t) && n.getMarkerMonth(
                    e
                ) === n.getMarkerMonth(t)
                    ? n.getMarkerYear(t) - n.getMarkerYear(e)
                    : null
            },
            e.prototype.diffWholeMonths = function (e, t) {
                var n = this.calendarSystem;
                return dt(e) === dt(t) && n.getMarkerDay(e) === n.getMarkerDay(t)
                    ? n.getMarkerMonth(t) - n.getMarkerMonth(e) + 12 * (
                        n.getMarkerYear(t) - n.getMarkerYear(e)
                    )
                    : null
            },
            e.prototype.greatestWholeUnit = function (e, t) {
                var n = this.diffWholeYears(e, t);
                return null !== n
                    ? {
                        unit: "year",
                        value: n
                    }
                    : null !== (n = this.diffWholeMonths(e, t))
                        ? {
                            unit: "month",
                            value: n
                        }
                        : null !== (n = tt(e, t))
                            ? {
                                unit: "week",
                                value: n
                            }
                            : null !== (n = nt(e, t))
                                ? {
                                    unit: "day",
                                    value: n
                                }
                                : qe(n = function (e, t) {
                                    return (t.valueOf() - e.valueOf()) / 36e5
                                }(e, t))
                                    ? {
                                        unit: "hour",
                                        value: n
                                    }
                                    : qe(n = function (e, t) {
                                        return (t.valueOf() - e.valueOf()) / 6e4
                                    }(e, t))
                                        ? {
                                            unit: "minute",
                                            value: n
                                        }
                                        : qe(n = function (e, t) {
                                            return (t.valueOf() - e.valueOf()) / 1e3
                                        }(e, t))
                                            ? {
                                                unit: "second",
                                                value: n
                                            }
                                            : {
                                                unit: "millisecond",
                                                value: t.valueOf() - e.valueOf()
                                            }
            },
            e.prototype.countDurationsBetween = function (e, t, n) {
                var r;
                return n.years && null !== (r = this.diffWholeYears(e, t))
                    ? r / (It(n) / 365)
                    : n.months && null !== (r = this.diffWholeMonths(e, t))
                        ? r / function (e) {
                            return It(e) / 30
                        }(n)
                        : n.days && null !== (r = nt(e, t))
                            ? r / It(n)
                            : (t.valueOf() - e.valueOf()) / Nt(n)
            },
            e.prototype.startOf = function (e, t) {
                return "year" === t
                    ? this.startOfYear(e)
                    : "month" === t
                        ? this.startOfMonth(e)
                        : "week" === t
                            ? this.startOfWeek(e)
                            : "day" === t
                                ? rt(e)
                                : "hour" === t
                                    ? function (e) {
                                        return ut(
                                            [e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate(), e.getUTCHours()]
                                        )
                                    }(e)
                                    : "minute" === t
                                        ? function (e) {
                                            return ut(
                                                [e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate(), e.getUTCHours(), e.getUTCMinutes()]
                                            )
                                        }(e)
                                        : "second" === t
                                            ? function (e) {
                                                return ut([
                                                    e.getUTCFullYear(),
                                                    e.getUTCMonth(),
                                                    e.getUTCDate(),
                                                    e.getUTCHours(),
                                                    e.getUTCMinutes(),
                                                    e.getUTCSeconds()
                                                ])
                                            }(e)
                                            : null
            },
            e.prototype.startOfYear = function (e) {
                return this
                    .calendarSystem
                    .arrayToMarker([
                        this
                            .calendarSystem
                            .getMarkerYear(e)
                    ])
            },
            e.prototype.startOfMonth = function (e) {
                return this
                    .calendarSystem
                    .arrayToMarker([
                        this
                            .calendarSystem
                            .getMarkerYear(e),
                        this
                            .calendarSystem
                            .getMarkerMonth(e)
                    ])
            },
            e.prototype.startOfWeek = function (e) {
                return this
                    .calendarSystem
                    .arrayToMarker([
                        this
                            .calendarSystem
                            .getMarkerYear(e),
                        this
                            .calendarSystem
                            .getMarkerMonth(e),
                        e.getUTCDate() - (e.getUTCDay() - this.weekDow + 7) % 7
                    ])
            },
            e.prototype.computeWeekNumber = function (e) {
                return this.weekNumberFunc
                    ? this.weekNumberFunc(this.toDate(e))
                    : function (e, t, n) {
                        var r = e.getUTCFullYear(),
                            o = ot(e, r, t, n);
                        if (o < 1) 
                            return ot(e, r - 1, t, n);
                        var i = ot(e, r + 1, t, n);
                        return i >= 1
                            ? Math.min(o, i)
                            : o
                    }(e, this.weekDow, this.weekDoy)
            },
            e.prototype.format = function (e, t, n) {
                return void 0 === n && (n = {}),
                t.format({
                    marker: e,
                    timeZoneOffset: null != n.forcedTzo
                        ? n.forcedTzo
                        : this.offsetForMarker(e)
                }, this)
            },
            e.prototype.formatRange = function (e, t, n, r) {
                return void 0 === r && (r = {}),
                r.isEndExclusive && (t = $e(t, -1)),
                n.formatRange({
                    marker: e,
                    timeZoneOffset: null != r.forcedStartTzo
                        ? r.forcedStartTzo
                        : this.offsetForMarker(e)
                }, {
                    marker: t,
                    timeZoneOffset: null != r.forcedEndTzo
                        ? r.forcedEndTzo
                        : this.offsetForMarker(t)
                }, this, r.defaultSeparator)
            },
            e.prototype.formatIso = function (e, t) {
                void 0 === t && (t = {});
                var n = null;
                return t.omitTimeZoneOffset || (
                    n = null != t.forcedTzo
                        ? t.forcedTzo
                        : this.offsetForMarker(e)
                ),
                At(e, n, t.omitTime)
            },
            e.prototype.timestampToMarker = function (e) {
                return "local" === this.timeZone
                    ? ut(at(new Date(e)))
                    : "UTC" !== this.timeZone && this.namedTimeZoneImpl
                        ? ut(this.namedTimeZoneImpl.timestampToArray(e))
                        : new Date(e)
            },
            e.prototype.offsetForMarker = function (e) {
                return "local" === this.timeZone
                    ? -st(lt(e)).getTimezoneOffset()
                    : "UTC" === this.timeZone
                        ? 0
                        : this.namedTimeZoneImpl
                            ? this
                                .namedTimeZoneImpl
                                .offsetForArray(lt(e))
                            : null
            },
            e.prototype.toDate = function (e, t) {
                return "local" === this.timeZone
                    ? st(lt(e))
                    : "UTC" === this.timeZone
                        ? new Date(e.valueOf())
                        : this.namedTimeZoneImpl
                            ? new Date(
                                e.valueOf() - 1e3 * this.namedTimeZoneImpl.offsetForArray(lt(e)) * 60
                            )
                            : new Date(e.valueOf() - (t || 0))
            },
            e
        }(),
        Ir = [],
        Nr = {
            code: "en",
            week: {
                dow: 0,
                doy: 4
            },
            direction: "ltr",
            buttonText: {
                prev: "prev",
                next: "next",
                prevYear: "prev year",
                nextYear: "next year",
                year: "year",
                today: "today",
                month: "month",
                week: "week",
                day: "day",
                list: "list"
            },
            weekText: "W",
            allDayText: "all-day",
            moreLinkText: "more",
            noEventsText: "No events to display"
        };
    function Hr(e) {
        for (
            var t = e.length > 0
                ? e[0].code
                : "en",
            n = Ir.concat(e),
            r = {
                en: Nr
            },
            o = 0,
            i = n; o < i.length; o++
        ) {
            var a = i[o];
            r[a.code] = a
        }
        return {map: r, defaultCode: t}
    }
    function Or(e, t) {
        return "object" != typeof e || Array.isArray(e)
            ? function (e, t) {
                var n = [].concat(e || []),
                    r = function (e, t) {
                        for (var n = 0; n < e.length; n += 1) 
                            for (var r = e[n].toLocaleLowerCase().split("-"), o = r.length; o > 0; o -= 1) {
                                var i = r
                                    .slice(0, o)
                                    .join("-");
                                if (t[i]) 
                                    return t[i]
                            }
                        return null
                    }(n, t) || Nr;
                return Ar(e, n, r)
            }(e, t)
            : Ar(e.code, [e.code], e)
    }
    function Ar(e, t, n) {
        var r = ht([
            Nr, n
        ], ["buttonText"]);
        delete r.code;
        var o = r.week;
        return delete r.week, {
            codeArg: e,
            codes: t,
            week: o,
            simpleNumberFormat: new Intl.NumberFormat(e),
            options: r
        }
    }
    function Ur(e) {
        var t = Or(e.locale || "en", Hr([]).map);
        return new Pr(r(r({
            timeZone: on.timeZone,
            calendarSystem: "gregory"
        }, e), {locale: t}))
    }
    var Lr,
        Wr = {
            startTime: "09:00",
            endTime: "17:00",
            daysOfWeek: [
                1, 2, 3, 4, 5
            ],
            display: "inverse-background",
            classNames: "fc-non-business",
            groupId: "_businessHours"
        };
    function Vr(e, t) {
        return hn(function (e) {
            var t;
            t = !0 === e
                ? [{}]
                : Array.isArray(e)
                    ? e.filter((function (e) {
                        return e.daysOfWeek
                    }))
                    : "object" == typeof e && e
                        ? [e]
                        : [];
            return t = t.map((function (e) {
                return r(r({}, Wr), e)
            }))
        }(e), null, t)
    }
    function Fr(e, t) {
        return e.left >= t.left && e.left < t.right && e.top >= t.top && e.top < t.bottom
    }
    function zr(e, t) {
        var n = {
            left: Math.max(e.left, t.left),
            right: Math.min(e.right, t.right),
            top: Math.max(e.top, t.top),
            bottom: Math.min(e.bottom, t.bottom)
        };
        return n.left < n.right && n.top < n.bottom && n
    }
    function Br(e, t) {
        return {
            left: Math.min(Math.max(e.left, t.left), t.right),
            top: Math.min(Math.max(e.top, t.top), t.bottom)
        }
    }
    function jr(e) {
        return {
            left: (e.left + e.right) / 2,
            top: (e.top + e.bottom) / 2
        }
    }
    function Gr(e, t) {
        return {
            left: e.left - t.left,
            top: e.top - t.top
        }
    }
    function qr() {
        return null == Lr && (Lr = function () {
            if ("undefined" == typeof document) 
                return !0;
            var e = document.createElement("div");
            e.style.position = "absolute",
            e.style.top = "0px",
            e.style.left = "0px",
            e.innerHTML = "<table><tr><td><div></div></td></tr></table>",
            e
                .querySelector("table")
                .style
                .height = "100px",
            e
                .querySelector("div")
                .style
                .height = "100%",
            document
                .body
                .appendChild(e);
            var t = e
                .querySelector("div")
                .offsetHeight > 0;
            return document
                .body
                .removeChild(e),
            t
        }()),
        Lr
    }
    var Yr = {
            defs: {},
            instances: {}
        },
        Zr = function () {
            function e() {
                this.getKeysForEventDefs = Ft(this._getKeysForEventDefs),
                this.splitDateSelection = Ft(this._splitDateSpan),
                this.splitEventStore = Ft(this._splitEventStore),
                this.splitIndividualUi = Ft(this._splitIndividualUi),
                this.splitEventDrag = Ft(this._splitInteraction),
                this.splitEventResize = Ft(this._splitInteraction),
                this.eventUiBuilders = {}
            }
            return e.prototype.splitProps = function (e) {
                var t = this,
                    n = this.getKeyInfo(e),
                    r = this.getKeysForEventDefs(e.eventStore),
                    o = this.splitDateSelection(e.dateSelection),
                    i = this.splitIndividualUi(e.eventUiBases, r),
                    a = this.splitEventStore(e.eventStore, r),
                    s = this.splitEventDrag(e.eventDrag),
                    l = this.splitEventResize(e.eventResize),
                    u = {};
                for (var c in this.eventUiBuilders = gt(n, (function (e, n) {
                    return t.eventUiBuilders[n] || Ft(Xr)
                })), n) {
                    var d = n[c],
                        p = a[c] || Yr,
                        f = this.eventUiBuilders[c];
                    u[c] = {
                        businessHours: d.businessHours || e.businessHours,
                        dateSelection: o[c] || null,
                        eventStore: p,
                        eventUiBases: f(e.eventUiBases[""], d.ui, i[c]),
                        eventSelection: p.instances[e.eventSelection]
                            ? e.eventSelection
                            : "",
                        eventDrag: s[c] || null,
                        eventResize: l[c] || null
                    }
                }
                return u
            },
            e.prototype._splitDateSpan = function (e) {
                var t = {};
                if (e) 
                    for (var n = 0, r = this.getKeysForDateSpan(e); n < r.length; n++) {
                        t[r[n]] = e
                    }
                return t
            },
            e.prototype._getKeysForEventDefs = function (e) {
                var t = this;
                return gt(e.defs, (function (e) {
                    return t.getKeysForEventDef(e)
                }))
            },
            e.prototype._splitEventStore = function (e, t) {
                var n = e.defs,
                    r = e.instances,
                    o = {};
                for (var i in n) 
                    for (var a = 0, s = t[i]; a < s.length; a++) {
                        o[p = s[a]] || (o[p] = {
                            defs: {},
                            instances: {}
                        }),
                        o[p].defs[i] = n[i]
                    }
                for (var l in r) 
                    for (var u = r[l], c = 0, d = t[u.defId]; c < d.length; c++) {
                        var p;
                        o[p = d[c]] && (o[p].instances[l] = u)
                    }
                return o
            },
            e.prototype._splitIndividualUi = function (e, t) {
                var n = {};
                for (var r in e) 
                    if (r) 
                        for (var o = 0, i = t[r]; o < i.length; o++) {
                            var a = i[o];
                            n[a] || (n[a] = {}),
                            n[a][r] = e[r]
                        }
                    return n
            },
            e.prototype._splitInteraction = function (e) {
                var t = {};
                if (e) {
                    var n = this._splitEventStore(
                            e.affectedEvents,
                            this._getKeysForEventDefs(e.affectedEvents)
                        ),
                        r = this._getKeysForEventDefs(e.mutatedEvents),
                        o = this._splitEventStore(e.mutatedEvents, r),
                        i = function (r) {
                            t[r] || (t[r] = {
                                affectedEvents: n[r] || Yr,
                                mutatedEvents: o[r] || Yr,
                                isEvent: e.isEvent
                            })
                        };
                    for (var a in n) 
                        i(a);
                    for (var a in o) 
                        i(a)
                }
                return t
            },
            e
        }();
    function Xr(e, t, n) {
        var o = [];
        e && o.push(e),
        t && o.push(t);
        var i = {
            "": wn(o)
        };
        return n && r(i, n),
        i
    }
    function Kr(e, t, n, r) {
        return {
            dow: e.getUTCDay(),
            isDisabled: Boolean(r && !Bn(r.activeRange, e)),
            isOther: Boolean(r && !Bn(r.currentRange, e)),
            isToday: Boolean(t && Bn(t, e)),
            isPast: Boolean(
                n
                    ? e < n
                    : !!t && e < t.start
            ),
            isFuture: Boolean(
                n
                    ? e > n
                    : !!t && e >= t.end
            )
        }
    }
    function $r(e, t) {
        var n = [
            "fc-day", "fc-day-" + Ze[e.dow]
        ];
        return e.isDisabled
            ? n.push("fc-day-disabled")
            : (
                e.isToday && (n.push("fc-day-today"), n.push(t.getClass("today"))),
                e.isPast && n.push("fc-day-past"),
                e.isFuture && n.push("fc-day-future"),
                e.isOther && n.push("fc-day-other")
            ),
        n
    }
    function Jr(e, t) {
        return void 0 === t && (t = "day"),
        JSON.stringify({date: Ut(e), type: t})
    }
    var Qr,
        eo = null;
    function to() {
        return null === eo && (eo = function () {
            var e = document.createElement("div");
            we(e, {
                position: "absolute",
                top: -1e3,
                left: 0,
                border: 0,
                padding: 0,
                overflow: "scroll",
                direction: "rtl"
            }),
            e.innerHTML = "<div></div>",
            document
                .body
                .appendChild(e);
            var t = e
                .firstChild
                .getBoundingClientRect()
                .left > e
                .getBoundingClientRect()
                .left;
            return Ee(e),
            t
        }()),
        eo
    }
    function no() {
        return Qr || (Qr = function () {
            var e = document.createElement("div");
            e.style.overflow = "scroll",
            e.style.position = "absolute",
            e.style.top = "-9999px",
            e.style.left = "-9999px",
            document
                .body
                .appendChild(e);
            var t = ro(e);
            return document
                .body
                .removeChild(e),
            t
        }()),
        Qr
    }
    function ro(e) {
        return {
            x: e.offsetHeight - e.clientHeight,
            y: e.offsetWidth - e.clientWidth
        }
    }
    function oo(e, t) {
        void 0 === t && (t = !1);
        var n = window.getComputedStyle(e),
            r = parseInt(n.borderLeftWidth, 10) || 0,
            o = parseInt(n.borderRightWidth, 10) || 0,
            i = parseInt(n.borderTopWidth, 10) || 0,
            a = parseInt(n.borderBottomWidth, 10) || 0,
            s = ro(e),
            l = s.y - r - o,
            u = {
                borderLeft: r,
                borderRight: o,
                borderTop: i,
                borderBottom: a,
                scrollbarBottom: s.x - i - a,
                scrollbarLeft: 0,
                scrollbarRight: 0
            };
        return to() && "rtl" === n.direction
            ? u.scrollbarLeft = l
            : u.scrollbarRight = l,
        t && (
            u.paddingLeft = parseInt(n.paddingLeft, 10) || 0,
            u.paddingRight = parseInt(n.paddingRight, 10) || 0,
            u.paddingTop = parseInt(n.paddingTop, 10) || 0,
            u.paddingBottom = parseInt(n.paddingBottom, 10) || 0
        ),
        u
    }
    function io(e, t, n) {
        void 0 === t && (t = !1);
        var r = n
                ? e.getBoundingClientRect()
                : ao(e),
            o = oo(e, t),
            i = {
                left: r.left + o.borderLeft + o.scrollbarLeft,
                right: r.right - o.borderRight - o.scrollbarRight,
                top: r.top + o.borderTop,
                bottom: r.bottom - o.borderBottom - o.scrollbarBottom
            };
        return t && (
            i.left += o.paddingLeft,
            i.right -= o.paddingRight,
            i.top += o.paddingTop,
            i.bottom -= o.paddingBottom
        ),
        i
    }
    function ao(e) {
        var t = e.getBoundingClientRect();
        return {
            left: t.left + window.pageXOffset,
            top: t.top + window.pageYOffset,
            right: t.right + window.pageXOffset,
            bottom: t.bottom + window.pageYOffset
        }
    }
    function so(e) {
        for (var t = []; e instanceof HTMLElement;) {
            var n = window.getComputedStyle(e);
            if ("fixed" === n.position) 
                break;
            
/ (auto | scroll) /.test(n.overflow + n.overflowY + n.overflowX) && t.push(
                e
            ),
            e = e.parentNode
        }
        return t
    }
    function lo(e, t, n) {
        var r = !1,
            o = function () {
                r || (r = !0, t.apply(this, arguments))
            },
            i = function () {
                r || (r = !0, n && n.apply(this, arguments))
            },
            a = e(o, i);
        a && "function" == typeof a.then && a.then(o, i)
    }
    var uo = function () {
        function e() {
            this.handlers = {},
            this.thisContext = null
        }
        return e.prototype.setThisContext = function (e) {
            this.thisContext = e
        },
        e.prototype.setOptions = function (e) {
            this.options = e
        },
        e.prototype.on = function (e, t) {
            !function (e, t, n) {
                (e[t] || (e[t] = [])).push(n)
            }(this.handlers, e, t)
        },
        e.prototype.off = function (e, t) {
            !function (e, t, n) {
                n
                    ? e[t] && (e[t] = e[t].filter((function (e) {
                        return e !== n
                    })))
                    : delete e[t]
            }(this.handlers, e, t)
        },
        e.prototype.trigger = function (e) {
            for (var t = [], n = 1; n < arguments.length; n++) 
                t[n - 1] = arguments[n];
            for (
                var r = this.handlers[e] || [],
                o = this.options && this.options[e],
                i = [].concat(o || [], r),
                a = 0,
                s = i;
                a < s.length;
                a++
            ) {
                var l = s[a];
                l.apply(this.thisContext, t)
            }
        },
        e.prototype.hasHandlers = function (e) {
            return this.handlers[e] && this
                .handlers[e]
                .length || this
                .options && this
                .options[e]
        },
        e
    }();
    var co = function () {
            function e(e, t, n, r) {
                this.els = t;
                var o = this.originClientRect = e.getBoundingClientRect();
                n && this.buildElHorizontals(o.left),
                r && this.buildElVerticals(o.top)
            }
            return e.prototype.buildElHorizontals = function (e) {
                for (var t = [], n = [], r = 0, o = this.els; r < o.length; r++) {
                    var i = o[r].getBoundingClientRect();
                    t.push(i.left - e),
                    n.push(i.right - e)
                }
                this.lefts = t,
                this.rights = n
            },
            e.prototype.buildElVerticals = function (e) {
                for (var t = [], n = [], r = 0, o = this.els; r < o.length; r++) {
                    var i = o[r].getBoundingClientRect();
                    t.push(i.top - e),
                    n.push(i.bottom - e)
                }
                this.tops = t,
                this.bottoms = n
            },
            e.prototype.leftToIndex = function (e) {
                var t,
                    n = this.lefts,
                    r = this.rights,
                    o = n.length;
                for (t = 0; t < o; t += 1) 
                    if (e >= n[t] && e < r[t]) 
                        return t
            },
            e.prototype.topToIndex = function (e) {
                var t,
                    n = this.tops,
                    r = this.bottoms,
                    o = n.length;
                for (t = 0; t < o; t += 1) 
                    if (e >= n[t] && e < r[t]) 
                        return t
            },
            e.prototype.getWidth = function (e) {
                return this.rights[e] - this.lefts[e]
            },
            e.prototype.getHeight = function (e) {
                return this.bottoms[e] - this.tops[e]
            },
            e
        }(),
        po = function () {
            function e() {}
            return e.prototype.getMaxScrollTop = function () {
                return this.getScrollHeight() - this.getClientHeight()
            },
            e.prototype.getMaxScrollLeft = function () {
                return this.getScrollWidth() - this.getClientWidth()
            },
            e.prototype.canScrollVertically = function () {
                return this.getMaxScrollTop() > 0
            },
            e.prototype.canScrollHorizontally = function () {
                return this.getMaxScrollLeft() > 0
            },
            e.prototype.canScrollUp = function () {
                return this.getScrollTop() > 0
            },
            e.prototype.canScrollDown = function () {
                return this.getScrollTop() < this.getMaxScrollTop()
            },
            e.prototype.canScrollLeft = function () {
                return this.getScrollLeft() > 0
            },
            e.prototype.canScrollRight = function () {
                return this.getScrollLeft() < this.getMaxScrollLeft()
            },
            e
        }(),
        fo = function (e) {
            function t(t) {
                var n = e.call(this) || this;
                return n.el = t,
                n
            }
            return n(t, e),
            t.prototype.getScrollTop = function () {
                return this.el.scrollTop
            },
            t.prototype.getScrollLeft = function () {
                return this.el.scrollLeft
            },
            t.prototype.setScrollTop = function (e) {
                this.el.scrollTop = e
            },
            t.prototype.setScrollLeft = function (e) {
                this.el.scrollLeft = e
            },
            t.prototype.getScrollWidth = function () {
                return this.el.scrollWidth
            },
            t.prototype.getScrollHeight = function () {
                return this.el.scrollHeight
            },
            t.prototype.getClientHeight = function () {
                return this.el.clientHeight
            },
            t.prototype.getClientWidth = function () {
                return this.el.clientWidth
            },
            t
        }(po),
        ho = function (e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return n(t, e),
            t.prototype.getScrollTop = function () {
                return window.pageYOffset
            },
            t.prototype.getScrollLeft = function () {
                return window.pageXOffset
            },
            t.prototype.setScrollTop = function (e) {
                window.scroll(window.pageXOffset, e)
            },
            t.prototype.setScrollLeft = function (e) {
                window.scroll(e, window.pageYOffset)
            },
            t.prototype.getScrollWidth = function () {
                return document.documentElement.scrollWidth
            },
            t.prototype.getScrollHeight = function () {
                return document.documentElement.scrollHeight
            },
            t.prototype.getClientHeight = function () {
                return document.documentElement.clientHeight
            },
            t.prototype.getClientWidth = function () {
                return document.documentElement.clientWidth
            },
            t
        }(po),
        vo = function () {
            function e(e) {
                this.iconOverrideOption && this.setIconOverride(e[this.iconOverrideOption])
            }
            return e.prototype.setIconOverride = function (e) {
                var t,
                    n;
                if ("object" == typeof e && e) {
                    for (n in t = r({}, this.iconClasses), e) 
                        t[n] = this.applyIconOverridePrefix(e[n]);
                    this.iconClasses = t
                } else 
                    !1 === e && (this.iconClasses = {})
            },
            e.prototype.applyIconOverridePrefix = function (e) {
                var t = this.iconOverridePrefix;
                return t && 0 !== e.indexOf(t) && (e = t + e),
                e
            },
            e.prototype.getClass = function (e) {
                return this.classes[e] || ""
            },
            e.prototype.getIconClass = function (e, t) {
                var n;
                return (
                    n = t && this.rtlIconClasses && this.rtlIconClasses[e] || this.iconClasses[e]
                )
                    ? this.baseIconClass + " " + n
                    : ""
            },
            e.prototype.getCustomButtonIconClass = function (e) {
                var t;
                return this.iconOverrideCustomButtonOption && (
                    t = e[this.iconOverrideCustomButtonOption]
                )
                    ? this.baseIconClass + " " + this.applyIconOverridePrefix(t)
                    : ""
            },
            e
        }();
    if (
        vo.prototype.classes = {},
        vo.prototype.iconClasses = {},
        vo.prototype.baseIconClass = "",
        vo.prototype.iconOverridePrefix = "",
        "undefined" == typeof FullCalendarVDom
    ) 
        throw new Error(
            "Please import the top-level fullcalendar lib before attempting to import a plu" +
            "gin."
        );
    var go = FullCalendarVDom.Component,
        mo = FullCalendarVDom.createElement,
        yo = FullCalendarVDom.render,
        Eo = FullCalendarVDom.createRef,
        So = FullCalendarVDom.Fragment,
        Do = FullCalendarVDom.createContext,
        bo = FullCalendarVDom.createPortal,
        Co = FullCalendarVDom.flushToDom,
        wo = FullCalendarVDom.unmountComponentAtNode,
        Ro = function () {
            function e(e, t, n, o) {
                var i = this;
                this.execFunc = e,
                this.emitter = t,
                this.scrollTime = n,
                this.scrollTimeReset = o,
                this.handleScrollRequest = function (e) {
                    i.queuedRequest = r({}, i.queuedRequest || {}, e),
                    i.drain()
                },
                t.on("_scrollRequest", this.handleScrollRequest),
                this.fireInitialScroll()
            }
            return e.prototype.detach = function () {
                this
                    .emitter
                    .off("_scrollRequest", this.handleScrollRequest)
            },
            e.prototype.update = function (e) {
                e && this.scrollTimeReset
                    ? this.fireInitialScroll()
                    : this.drain()
            },
            e.prototype.fireInitialScroll = function () {
                this.handleScrollRequest({time: this.scrollTime})
            },
            e.prototype.drain = function () {
                this.queuedRequest && this.execFunc(this.queuedRequest) && (
                    this.queuedRequest = null
                )
            },
            e
        }(),
        _o = Do({});
    function To(e, t, n, r, o, i, a, s, l, u, c, d, p) {
        return {
            dateEnv: o,
            options: n,
            pluginHooks: a,
            emitter: u,
            dispatch: s,
            getCurrentData: l,
            calendarApi: c,
            viewSpec: e,
            viewApi: t,
            dateProfileGenerator: r,
            theme: i,
            isRtl: "rtl" === n.direction,
            addResizeHandler: function (e) {
                u.on("_resize", e)
            },
            removeResizeHandler: function (e) {
                u.off("_resize", e)
            },
            createScrollResponder: function (e) {
                return new Ro(e, u, kt(n.scrollTime), n.scrollTimeReset)
            },
            registerInteractiveComponent: d,
            unregisterInteractiveComponent: p
        }
    }
    var ko = function (e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return n(t, e),
        t.prototype.shouldComponentUpdate = function (e, t) {
            return this.debug && console.log(St(e, this.props), St(t, this.state)),
            !Dt(this.props, e, this.propEquality) || !Dt(this.state, t, this.stateEquality)
        },
        t.addPropsEquality = Mo,
        t.addStateEquality = Po,
        t.contextType = _o,
        t
    }(go);
    ko.prototype.propEquality = {},
    ko.prototype.stateEquality = {};
    var xo = function (e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return n(t, e),
        t.contextType = _o,
        t
    }(ko);
    function Mo(e) {
        var t = Object.create(this.prototype.propEquality);
        r(t, e),
        this.prototype.propEquality = t
    }
    function Po(e) {
        var t = Object.create(this.prototype.stateEquality);
        r(t, e),
        this.prototype.stateEquality = t
    }
    function Io(e, t) {
        "function" == typeof e
            ? e(t)
            : e && (e.current = t)
    }
    var No = function (e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.uid = Ne(),
            t
        }
        return n(t, e),
        t.prototype.prepareHits = function () {},
        t.prototype.queryHit = function (e, t, n, r) {
            return null
        },
        t.prototype.isValidSegDownEl = function (e) {
            return !this.props.eventDrag && !this.props.eventResize && !Se(
                e,
                ".fc-event-mirror"
            )
        },
        t.prototype.isValidDateDownEl = function (e) {
            return !(
                Se(e, ".fc-event:not(.fc-bg-event)") || Se(e, ".fc-more-link") || Se(e, "a[data-navlink]") || Se(e, ".fc-popover")
            )
        },
        t
    }(xo);
    function Ho(e) {
        return {
            id: Ne(),
            deps: e.deps || [],
            reducers: e.reducers || [],
            isLoadingFuncs: e.isLoadingFuncs || [],
            contextInit: [].concat(e.contextInit || []),
            eventRefiners: e.eventRefiners || {},
            eventDefMemberAdders: e.eventDefMemberAdders || [],
            eventSourceRefiners: e.eventSourceRefiners || {},
            isDraggableTransformers: e.isDraggableTransformers || [],
            eventDragMutationMassagers: e.eventDragMutationMassagers || [],
            eventDefMutationAppliers: e.eventDefMutationAppliers || [],
            dateSelectionTransformers: e.dateSelectionTransformers || [],
            datePointTransforms: e.datePointTransforms || [],
            dateSpanTransforms: e.dateSpanTransforms || [],
            views: e.views || {},
            viewPropsTransformers: e.viewPropsTransformers || [],
            isPropsValid: e.isPropsValid || null,
            externalDefTransforms: e.externalDefTransforms || [],
            viewContainerAppends: e.viewContainerAppends || [],
            eventDropTransformers: e.eventDropTransformers || [],
            componentInteractions: e.componentInteractions || [],
            calendarInteractions: e.calendarInteractions || [],
            themeClasses: e.themeClasses || {},
            eventSourceDefs: e.eventSourceDefs || [],
            cmdFormatter: e.cmdFormatter,
            recurringTypes: e.recurringTypes || [],
            namedTimeZonedImpl: e.namedTimeZonedImpl,
            initialView: e.initialView || "",
            elementDraggingImpl: e.elementDraggingImpl,
            optionChangeHandlers: e.optionChangeHandlers || {},
            scrollGridImpl: e.scrollGridImpl || null,
            contentTypeHandlers: e.contentTypeHandlers || {},
            listenerRefiners: e.listenerRefiners || {},
            optionRefiners: e.optionRefiners || {},
            propSetHandlers: e.propSetHandlers || {}
        }
    }
    function Oo() {
        var e,
            t = [],
            n = [];
        return function (o, i) {
            return e && Vt(o, t) && Vt(i, n) || (e = function (e, t) {
                var n = {},
                    o = {
                        reducers: [],
                        isLoadingFuncs: [],
                        contextInit: [],
                        eventRefiners: {},
                        eventDefMemberAdders: [],
                        eventSourceRefiners: {},
                        isDraggableTransformers: [],
                        eventDragMutationMassagers: [],
                        eventDefMutationAppliers: [],
                        dateSelectionTransformers: [],
                        datePointTransforms: [],
                        dateSpanTransforms: [],
                        views: {},
                        viewPropsTransformers: [],
                        isPropsValid: null,
                        externalDefTransforms: [],
                        viewContainerAppends: [],
                        eventDropTransformers: [],
                        componentInteractions: [],
                        calendarInteractions: [],
                        themeClasses: {},
                        eventSourceDefs: [],
                        cmdFormatter: null,
                        recurringTypes: [],
                        namedTimeZonedImpl: null,
                        initialView: "",
                        elementDraggingImpl: null,
                        optionChangeHandlers: {},
                        scrollGridImpl: null,
                        contentTypeHandlers: {},
                        listenerRefiners: {},
                        optionRefiners: {},
                        propSetHandlers: {}
                    };
                function i(e) {
                    for (var t = 0, a = e; t < a.length; t++) {
                        var s = a[t];
                        n[s.id] || (n[s.id] = !0, i(s.deps), u = s, o = {
                            reducers: (l = o)
                                .reducers
                                .concat(u.reducers),
                            isLoadingFuncs: l
                                .isLoadingFuncs
                                .concat(u.isLoadingFuncs),
                            contextInit: l
                                .contextInit
                                .concat(u.contextInit),
                            eventRefiners: r(r({}, l.eventRefiners), u.eventRefiners),
                            eventDefMemberAdders: l
                                .eventDefMemberAdders
                                .concat(u.eventDefMemberAdders),
                            eventSourceRefiners: r(r({}, l.eventSourceRefiners), u.eventSourceRefiners),
                            isDraggableTransformers: l
                                .isDraggableTransformers
                                .concat(u.isDraggableTransformers),
                            eventDragMutationMassagers: l
                                .eventDragMutationMassagers
                                .concat(u.eventDragMutationMassagers),
                            eventDefMutationAppliers: l
                                .eventDefMutationAppliers
                                .concat(u.eventDefMutationAppliers),
                            dateSelectionTransformers: l
                                .dateSelectionTransformers
                                .concat(u.dateSelectionTransformers),
                            datePointTransforms: l
                                .datePointTransforms
                                .concat(u.datePointTransforms),
                            dateSpanTransforms: l
                                .dateSpanTransforms
                                .concat(u.dateSpanTransforms),
                            views: r(r({}, l.views), u.views),
                            viewPropsTransformers: l
                                .viewPropsTransformers
                                .concat(u.viewPropsTransformers),
                            isPropsValid: u.isPropsValid || l.isPropsValid,
                            externalDefTransforms: l
                                .externalDefTransforms
                                .concat(u.externalDefTransforms),
                            viewContainerAppends: l
                                .viewContainerAppends
                                .concat(u.viewContainerAppends),
                            eventDropTransformers: l
                                .eventDropTransformers
                                .concat(u.eventDropTransformers),
                            calendarInteractions: l
                                .calendarInteractions
                                .concat(u.calendarInteractions),
                            componentInteractions: l
                                .componentInteractions
                                .concat(u.componentInteractions),
                            themeClasses: r(r({}, l.themeClasses), u.themeClasses),
                            eventSourceDefs: l
                                .eventSourceDefs
                                .concat(u.eventSourceDefs),
                            cmdFormatter: u.cmdFormatter || l.cmdFormatter,
                            recurringTypes: l
                                .recurringTypes
                                .concat(u.recurringTypes),
                            namedTimeZonedImpl: u.namedTimeZonedImpl || l.namedTimeZonedImpl,
                            initialView: l.initialView || u.initialView,
                            elementDraggingImpl: l.elementDraggingImpl || u.elementDraggingImpl,
                            optionChangeHandlers: r(r({}, l.optionChangeHandlers), u.optionChangeHandlers),
                            scrollGridImpl: u.scrollGridImpl || l.scrollGridImpl,
                            contentTypeHandlers: r(r({}, l.contentTypeHandlers), u.contentTypeHandlers),
                            listenerRefiners: r(r({}, l.listenerRefiners), u.listenerRefiners),
                            optionRefiners: r(r({}, l.optionRefiners), u.optionRefiners),
                            propSetHandlers: r(r({}, l.propSetHandlers), u.propSetHandlers)
                        })
                    }
                    var l,
                        u
                }
                return e && i(e),
                i(t),
                o
            }(o, i)),
            t = o,
            n = i,
            e
        }
    }
    var Ao = function (e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return n(t, e),
        t
    }(vo);
    function Uo(e, t, n, o) {
        if (t[e]) 
            return t[e];
        var i = function (e, t, n, o) {
            var i = n[e],
                a = o[e],
                s = function (e) {
                    return i && null !== i[e]
                        ? i[e]
                        : a && null !== a[e]
                            ? a[e]
                            : null
                },
                l = s("component"),
                u = s("superType"),
                c = null;
            if (u) {
                if (u === e) 
                    throw new Error("Can't have a custom view type that references itself");
                c = Uo(u, t, n, o)
            }
            !l && c && (l = c.component);
            if (!l) 
                return null;
            return {
                type: e,
                component: l,
                defaults: r(
                    r(
                        {},
                        c
                            ? c.defaults
                            : {}
                    ),
                    i
                        ? i.rawOptions
                        : {}
                ),
                overrides: r(
                    r(
                        {},
                        c
                            ? c.overrides
                            : {}
                    ),
                    a
                        ? a.rawOptions
                        : {}
                )
            }
        }(e, t, n, o);
        return i && (t[e] = i),
        i
    }
    Ao.prototype.classes = {
        root: "fc-theme-standard",
        tableCellShaded: "fc-cell-shaded",
        buttonGroup: "fc-button-group",
        button: "fc-button fc-button-primary",
        buttonActive: "fc-button-active"
    },
    Ao.prototype.baseIconClass = "fc-icon",
    Ao.prototype.iconClasses = {
        close: "fc-icon-x",
        prev: "fc-icon-chevron-left",
        next: "fc-icon-chevron-right",
        prevYear: "fc-icon-chevrons-left",
        nextYear: "fc-icon-chevrons-right"
    },
    Ao.prototype.rtlIconClasses = {
        prev: "fc-icon-chevron-right",
        next: "fc-icon-chevron-left",
        prevYear: "fc-icon-chevrons-right",
        nextYear: "fc-icon-chevrons-left"
    },
    Ao.prototype.iconOverrideOption = "buttonIcons",
    Ao.prototype.iconOverrideCustomButtonOption = "icon",
    Ao.prototype.iconOverridePrefix = "fc-icon-";
    var Lo = function (e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.rootElRef = Eo(),
                t.handleRootEl = function (e) {
                    Io(t.rootElRef, e),
                    t.props.elRef && Io(t.props.elRef, e)
                },
                t
            }
            return n(t, e),
            t.prototype.render = function () {
                var e = this,
                    t = this.props,
                    n = t.hookProps;
                return mo(zo, {
                    hookProps: n,
                    didMount: t.didMount,
                    willUnmount: t.willUnmount,
                    elRef: this.handleRootEl
                }, (function (r) {
                    return mo(Vo, {
                        hookProps: n,
                        content: t.content,
                        defaultContent: t.defaultContent,
                        backupElRef: e.rootElRef
                    }, (function (e, o) {
                        return t.children(r, jo(t.classNames, n), e, o)
                    }))
                }))
            },
            t
        }(xo),
        Wo = Do(0);
    function Vo(e) {
        return mo(Wo.Consumer, null, (function (t) {
            return mo(Fo, r({
                renderId: t
            }, e))
        }))
    }
    var Fo = function (e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.innerElRef = Eo(),
                t
            }
            return n(t, e),
            t.prototype.render = function () {
                return this
                    .props
                    .children(this.innerElRef, this.renderInnerContent())
            },
            t.prototype.componentDidMount = function () {
                this.updateCustomContent()
            },
            t.prototype.componentDidUpdate = function () {
                this.updateCustomContent()
            },
            t.prototype.componentWillUnmount = function () {
                this.customContentInfo && this.customContentInfo.destroy && this
                    .customContentInfo
                    .destroy()
            },
            t.prototype.renderInnerContent = function () {
                var e = this.context.pluginHooks.contentTypeHandlers,
                    t = this.props,
                    n = this.customContentInfo,
                    o = Go(t.content, t.hookProps),
                    i = null;
                if (void 0 === o && (o = Go(t.defaultContent, t.hookProps)), void 0 !== o) {
                    if (n) 
                        n.contentVal = o[n.contentKey];
                    else if ("object" == typeof o) 
                        for (var a in e) 
                            if (void 0 !== o[a]) {
                                var s = e[a]();
                                n = this.customContentInfo = r({
                                    contentKey: a,
                                    contentVal: o[a]
                                }, s);
                                break
                            }
                        i = n
                        ? []
                        : o
                }
                return i
            },
            t.prototype.updateCustomContent = function () {
                this.customContentInfo && this
                    .customContentInfo
                    .render(
                        this.innerElRef.current || this.props.backupElRef.current,
                        this.customContentInfo.contentVal
                    )
            },
            t
        }(xo),
        zo = function (e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.handleRootEl = function (e) {
                    t.rootEl = e,
                    t.props.elRef && Io(t.props.elRef, e)
                },
                t
            }
            return n(t, e),
            t.prototype.render = function () {
                return this
                    .props
                    .children(this.handleRootEl)
            },
            t.prototype.componentDidMount = function () {
                var e = this.props.didMount;
                e && e(r(r({}, this.props.hookProps), {el: this.rootEl}))
            },
            t.prototype.componentWillUnmount = function () {
                var e = this.props.willUnmount;
                e && e(r(r({}, this.props.hookProps), {el: this.rootEl}))
            },
            t
        }(xo);
    function Bo() {
        var e,
            t,
            n = [];
        return function (r, o) {
            return t && Et(t, o) && r === e || (e = r, t = o, n = jo(r, o)),
            n
        }
    }
    function jo(e, t) {
        return "function" == typeof e && (e = e(t)),
        Sn(e)
    }
    function Go(e, t) {
        return "function" == typeof e
            ? e(t, mo)
            : e
    }
    var qo = function (e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.normalizeClassNames = Bo(),
            t
        }
        return n(t, e),
        t.prototype.render = function () {
            var e = this.props,
                t = this.context,
                n = t.options,
                r = {
                    view: t.viewApi
                },
                o = this.normalizeClassNames(n.viewClassNames, r);
            return mo(zo, {
                hookProps: r,
                didMount: n.viewDidMount,
                willUnmount: n.viewWillUnmount,
                elRef: e.elRef
            }, (function (t) {
                return e.children(t, [
                    "fc-" + e.viewSpec.type + "-view",
                    "fc-view"
                ].concat(o))
            }))
        },
        t
    }(xo);
    function Yo(e) {
        return gt(e, Zo)
    }
    function Zo(e) {
        var t,
            n = "function" == typeof e
                ? {
                    component: e
                }
                : e,
            o = n.component;
        return n.content && (t = n, o = function (e) {
            return mo(_o.Consumer, null, (function (n) {
                return mo(qo, {
                    viewSpec: n.viewSpec
                }, (function (o, i) {
                    var a = r(r({}, e), {nextDayThreshold: n.options.nextDayThreshold});
                    return mo(Lo, {
                        hookProps: a,
                        classNames: t.classNames,
                        content: t.content,
                        didMount: t.didMount,
                        willUnmount: t.willUnmount,
                        elRef: o
                    }, (function (e, t, n, r) {
                        return mo("div", {
                            className: i
                                .concat(t)
                                .join(" "),
                            ref: e
                        }, r)
                    }))
                }))
            }))
        }), {
            superType: n.type,
            component: o,
            rawOptions: n
        }
    }
    function Xo(e, t, n, o) {
        var i = Yo(e),
            a = Yo(t.views);
        return gt(function (e, t) {
            var n,
                r = {};
            for (n in e) 
                Uo(n, r, e, t);
            for (n in t) 
                Uo(n, r, e, t);
            return r
        }(i, a), (function (e) {
            return function (e, t, n, o, i) {
                var a = e.overrides.duration || e.defaults.duration || o.duration || n.duration,
                    s = null,
                    l = "",
                    u = "",
                    c = {};
                if (a && (s = function (e) {
                    var t = JSON.stringify(e),
                        n = Ko[t];
                    void 0 === n && (n = kt(e), Ko[t] = n);
                    return n
                }(a))) {
                    var d = Ot(s);
                    l = d.unit,
                    1 === d.value && (
                        u = l,
                        c = t[l]
                            ? t[l].rawOptions
                            : {}
                    )
                }
                var p = function (t) {
                    var n = t.buttonText || {},
                        r = e.defaults.buttonTextKey;
                    return null != r && null != n[r]
                        ? n[r]
                        : null != n[e.type]
                            ? n[e.type]
                            : null != n[u]
                                ? n[u]
                                : null
                };
                return {
                    type: e.type,
                    component: e.component,
                    duration: s,
                    durationUnit: l,
                    singleUnit: u,
                    optionDefaults: e.defaults,
                    optionOverrides: r(r({}, c), e.overrides),
                    buttonTextOverride: p(o) || p(n) || e.overrides.buttonText,
                    buttonTextDefault: p(i) || e.defaults.buttonText || p(on) || e.type
                }
            }(e, a, t, n, o)
        }))
    }
    var Ko = {};
    var $o = function () {
        function e(e) {
            this.props = e,
            this.nowDate = Dr(e.nowInput, e.dateEnv),
            this.initHiddenDays()
        }
        return e.prototype.buildPrev = function (e, t, n) {
            var r = this.props.dateEnv,
                o = r.subtract(r.startOf(t, e.currentRangeUnit), e.dateIncrement);
            return this.build(o, -1, n)
        },
        e.prototype.buildNext = function (e, t, n) {
            var r = this.props.dateEnv,
                o = r.add(r.startOf(t, e.currentRangeUnit), e.dateIncrement);
            return this.build(o, 1, n)
        },
        e.prototype.build = function (e, t, n) {
            void 0 === n && (n = !0);
            var r,
                o,
                i,
                a,
                s,
                l,
                u,
                c,
                d = this.props;
            return r = this.buildValidRange(),
            r = this.trimHiddenDays(r),
            n && (
                u = e,
                e = null != (c = r).start && u < c.start
                    ? c.start
                    : null != c.end && u >= c.end
                        ? new Date(c.end.valueOf() - 1)
                        : u
            ),
            o = this.buildCurrentRangeInfo(e, t),
            i = /^(year|month|week|day)$/.test(o.unit),
            a = this.buildRenderRange(this.trimHiddenDays(o.range), o.unit, i),
            s = a = this.trimHiddenDays(a),
            d.showNonCurrentDates || (s = Wn(s, o.range)),
            s = Wn(s = this.adjustActiveRange(s), r),
            l = Fn(o.range, r), {
                validRange: r,
                currentRange: o.range,
                currentRangeUnit: o.unit,
                isRangeAllDay: i,
                activeRange: s,
                renderRange: a,
                slotMinTime: d.slotMinTime,
                slotMaxTime: d.slotMaxTime,
                isValid: l,
                dateIncrement: this.buildDateIncrement(o.duration)
            }
        },
        e.prototype.buildValidRange = function () {
            var e = this.props.validRangeInput,
                t = "function" == typeof e
                    ? e.call(this.props.calendarApi, this.nowDate)
                    : e;
            return this.refineRange(t) || {
                start: null,
                end: null
            }
        },
        e.prototype.buildCurrentRangeInfo = function (e, t) {
            var n,
                r = this.props,
                o = null,
                i = null,
                a = null;
            return r.duration
                ? (
                    o = r.duration,
                    i = r.durationUnit,
                    a = this.buildRangeFromDuration(e, t, o, i)
                )
                : (n = this.props.dayCount)
                    ? (i = "day", a = this.buildRangeFromDayCount(e, t, n))
                    : (a = this.buildCustomVisibleRange(e))
                        ? i = r
                            .dateEnv
                            .greatestWholeUnit(a.start, a.end)
                            .unit
                        : (
                            i = Ot(o = this.getFallbackDuration()).unit,
                            a = this.buildRangeFromDuration(e, t, o, i)
                        ), {
                duration: o,
                unit: i,
                range: a
            }
        },
        e.prototype.getFallbackDuration = function () {
            return kt({day: 1})
        },
        e.prototype.adjustActiveRange = function (e) {
            var t = this.props,
                n = t.dateEnv,
                r = t.usesMinMaxTime,
                o = t.slotMinTime,
                i = t.slotMaxTime,
                a = e.start,
                s = e.end;
            return r && (
                It(o) < 0 && (a = rt(a), a = n.add(a, o)),
                It(i) > 1 && (s = Ke(s = rt(s), -1), s = n.add(s, i))
            ), {
                start: a,
                end: s
            }
        },
        e.prototype.buildRangeFromDuration = function (e, t, n, r) {
            var o,
                i,
                a,
                s = this.props,
                l = s.dateEnv,
                u = s.dateAlignment;
            if (!u) {
                var c = this.props.dateIncrement;
                u = c && Nt(c) < Nt(n)
                    ? Ot(c).unit
                    : r
            }
            function d() {
                o = l.startOf(e, u),
                i = l.add(o, n),
                a = {
                    start: o,
                    end: i
                }
            }
            return It(n) <= 1 && this.isHiddenDay(o) && (
                o = rt(o = this.skipHiddenDays(o, t))
            ),
            d(),
            this.trimHiddenDays(a) || (e = this.skipHiddenDays(e, t), d()),
            a
        },
        e.prototype.buildRangeFromDayCount = function (e, t, n) {
            var r,
                o = this.props,
                i = o.dateEnv,
                a = o.dateAlignment,
                s = 0,
                l = e;
            a && (l = i.startOf(l, a)),
            l = rt(l),
            r = l = this.skipHiddenDays(l, t);
            do {
                r = Ke(r, 1),
                this.isHiddenDay(r) || (s += 1)
            } while (s < n);
            return {start: l, end: r}
        },
        e.prototype.buildCustomVisibleRange = function (e) {
            var t = this.props,
                n = t.visibleRangeInput,
                r = "function" == typeof n
                    ? n.call(t.calendarApi, t.dateEnv.toDate(e))
                    : n,
                o = this.refineRange(r);
            return !o || null != o.start && null != o.end
                ? o
                : null
        },
        e.prototype.buildRenderRange = function (e, t, n) {
            return e
        },
        e.prototype.buildDateIncrement = function (e) {
            var t,
                n = this.props.dateIncrement;
            return n || (
                (t = this.props.dateAlignment)
                    ? kt(1, t)
                    : e || kt({days: 1})
            )
        },
        e.prototype.refineRange = function (e) {
            if (e) {
                var t = (
                    n = e,
                    r = this.props.dateEnv,
                    o = null,
                    i = null,
                    n.start && (o = r.createMarker(n.start)),
                    n.end && (i = r.createMarker(n.end)),
                    o || i
                        ? o && i && i < o
                            ? null
                            : {
                                start: o,
                                end: i
                            }
                        : null
                );
                return t && (t = Hn(t)),
                t
            }
            var n,
                r,
                o,
                i;
            return null
        },
        e.prototype.initHiddenDays = function () {
            var e,
                t = this.props.hiddenDays || [],
                n = [],
                r = 0;
            for (!1 === this.props.weekends && t.push(0, 6), e = 0; e < 7; e += 1) 
                (n[e] = -1 !== t.indexOf(e)) || (r += 1);
            if (!r) 
                throw new Error("invalid hiddenDays");
            this.isHiddenDayHash = n
        },
        e.prototype.trimHiddenDays = function (e) {
            var t = e.start,
                n = e.end;
            return t && (t = this.skipHiddenDays(t)),
            n && (n = this.skipHiddenDays(n, -1, !0)),
            null == t || null == n || t < n
                ? {
                    start: t,
                    end: n
                }
                : null
        },
        e.prototype.isHiddenDay = function (e) {
            return e instanceof Date && (e = e.getUTCDay()),
            this.isHiddenDayHash[e]
        },
        e.prototype.skipHiddenDays = function (e, t, n) {
            for (
                void 0 === t && (t = 1),
                void 0 === n && (n = !1);
                this.isHiddenDayHash[(e.getUTCDay() + (
                        n
                            ? t
                            : 0
                    ) + 7) % 7];
            ) 
                e = Ke(e, t);
            return e
        },
        e
    }();
    function Jo(e, t, n) {
        var r = t
            ? t.activeRange
            : null;
        return ti({}, function (e, t) {
            var n = Sr(t),
                r = [].concat(e.eventSources || []),
                o = [];
            e.initialEvents && r.unshift(e.initialEvents);
            e.events && r.unshift(e.events);
            for (var i = 0, a = r; i < a.length; i++) {
                var s = Er(a[i], t, n);
                s && o.push(s)
            }
            return o
        }(e, n), r, n)
    }
    function Qo(e, t, n, o) {
        var i,
            a,
            s = n
                ? n.activeRange
                : null;
        switch (t.type) {
            case "ADD_EVENT_SOURCES":
                return ti(e, t.sources, s, o);
            case "REMOVE_EVENT_SOURCE":
                return i = e,
                a = t.sourceId,
                vt(i, (function (e) {
                    return e.sourceId !== a
                }));
            case "PREV":
            case "NEXT":
            case "CHANGE_DATE":
            case "CHANGE_VIEW_TYPE":
                return n
                    ? ni(e, s, o)
                    : e;
            case "FETCH_EVENT_SOURCES":
                return ri(
                    e,
                    t.sourceIds
                        ? mt(t.sourceIds)
                        : ii(e, o),
                    s,
                    t.isRefetch || !1,
                    o
                );
            case "RECEIVE_EVENTS":
            case "RECEIVE_EVENT_ERROR":
                return function (e, t, n, o) {
                    var i,
                        a = e[t];
                    if (a && n === a.latestFetchId) 
                        return r(r({}, e), ((i = {})[t] = r(r({}, a), {
                            isFetching: !1,
                            fetchRange: o
                        }), i));
                    return e
                }(e, t.sourceId, t.fetchId, t.fetchRange);
            case "REMOVE_ALL_EVENT_SOURCES":
                return {};
            default:
                return e
        }
    }
    function ei(e) {
        for (var t in e) 
            if (e[t].isFetching) 
                return !0;
    return !1
    }
    function ti(e, t, n, o) {
        for (var i = {}, a = 0, s = t; a < s.length; a++) {
            var l = s[a];
            i[l.sourceId] = l
        }
        return n && (i = ni(i, n, o)),
        r(r({}, e), i)
    }
    function ni(e, t, n) {
        return ri(e, vt(e, (function (e) {
            return function (e, t, n) {
                if (!ai(e, n)) 
                    return !e.latestFetchId;
                return !n.options.lazyFetching || !e.fetchRange || e.isFetching || t.start < e.fetchRange.start || t.end > e.fetchRange.end
            }(e, t, n)
        })), t, !1, n)
    }
    function ri(e, t, n, r, o) {
        var i = {};
        for (var a in e) {
            var s = e[a];
            t[a]
                ? i[a] = oi(s, n, r, o)
                : i[a] = s
        }
        return i
    }
    function oi(e, t, n, o) {
        var i = o.options,
            a = o.calendarApi,
            s = o
                .pluginHooks
                .eventSourceDefs[e.sourceDefId],
            l = Ne();
        return s.fetch({
            eventSource: e,
            range: t,
            isRefetch: n,
            context: o
        }, (function (n) {
            var r = n.rawEvents;
            i.eventSourceSuccess && (r = i.eventSourceSuccess.call(a, r, n.xhr) || r),
            e.success && (r = e.success.call(a, r, n.xhr) || r),
            o.dispatch(
                {type: "RECEIVE_EVENTS", sourceId: e.sourceId, fetchId: l, fetchRange: t, rawEvents: r}
            )
        }), (function (n) {
            console.warn(n.message, n),
            i.eventSourceFailure && i
                .eventSourceFailure
                .call(a, n),
            e.failure && e.failure(n),
            o.dispatch(
                {type: "RECEIVE_EVENT_ERROR", sourceId: e.sourceId, fetchId: l, fetchRange: t, error: n}
            )
        })),
        r(r({}, e), {
            isFetching: !0,
            latestFetchId: l
        })
    }
    function ii(e, t) {
        return vt(e, (function (e) {
            return ai(e, t)
        }))
    }
    function ai(e, t) {
        return !t
            .pluginHooks
            .eventSourceDefs[e.sourceDefId]
            .ignoreRange
    }
    function si(e, t, n, r, o) {
        switch (t.type) {
            case "RECEIVE_EVENTS":
                return function (e, t, n, r, o, i) {
                    if (t && n === t.latestFetchId) {
                        var a = hn(function (e, t, n) {
                            var r = n.options.eventDataTransform,
                                o = t
                                    ? t.eventDataTransform
                                    : null;
                            o && (e = li(e, o));
                            r && (e = li(e, r));
                            return e
                        }(o, t, i), t, i);
                        return r && (a = wt(a, r, i)),
                        yn(ui(e, t.sourceId), a)
                    }
                    return e
                }(e, n[t.sourceId], t.fetchId, t.fetchRange, t.rawEvents, o);
            case "ADD_EVENTS":
                return function (e, t, n, r) {
                    n && (t = wt(t, n, r));
                    return yn(e, t)
                }(
                    e,
                    t.eventStore,
                    r
                        ? r.activeRange
                        : null,
                    o
                );
            case "RESET_EVENTS":
                return t.eventStore;
            case "MERGE_EVENTS":
                return yn(e, t.eventStore);
            case "PREV":
            case "NEXT":
            case "CHANGE_DATE":
            case "CHANGE_VIEW_TYPE":
                return r
                    ? wt(e, r.activeRange, o)
                    : e;
            case "REMOVE_EVENTS":
                return function (e, t) {
                    var n = e.defs,
                        r = e.instances,
                        o = {},
                        i = {};
                    for (var a in n) 
                        t.defs[a] || (o[a] = n[a]);
                    for (var s in r) 
                        !t.instances[s] && o[r[s].defId] && (i[s] = r[s]);
                    return {defs: o, instances: i}
                }(e, t.eventStore);
            case "REMOVE_EVENT_SOURCE":
                return ui(e, t.sourceId);
            case "REMOVE_ALL_EVENT_SOURCES":
                return En(e, (function (e) {
                    return !e.sourceId
                }));
            case "REMOVE_ALL_EVENTS":
                return {defs: {}, instances: {}};
            default:
                return e
        }
    }
    function li(e, t) {
        var n;
        if (t) {
            n = [];
            for (var r = 0, o = e; r < o.length; r++) {
                var i = o[r],
                    a = t(i);
                a
                    ? n.push(a)
                    : null == a && n.push(i)
            }
        } else 
            n = e;
        return n
    }
    function ui(e, t) {
        return En(e, (function (e) {
            return e.sourceId !== t
        }))
    }
    function ci(e, t) {
        switch (t.type) {
            case "UNSELECT_DATES":
                return null;
            case "SELECT_DATES":
                return t.selection;
            default:
                return e
        }
    }
    function di(e, t) {
        switch (t.type) {
            case "UNSELECT_EVENT":
                return "";
            case "SELECT_EVENT":
                return t.eventInstanceId;
            default:
                return e
        }
    }
    function pi(e, t) {
        var n;
        switch (t.type) {
            case "UNSET_EVENT_DRAG":
                return null;
            case "SET_EVENT_DRAG":
                return {
                    affectedEvents: (n = t.state).affectedEvents,
                    mutatedEvents: n.mutatedEvents,
                    isEvent: n.isEvent
                };
            default:
                return e
        }
    }
    function fi(e, t) {
        var n;
        switch (t.type) {
            case "UNSET_EVENT_RESIZE":
                return null;
            case "SET_EVENT_RESIZE":
                return {
                    affectedEvents: (n = t.state).affectedEvents,
                    mutatedEvents: n.mutatedEvents,
                    isEvent: n.isEvent
                };
            default:
                return e
        }
    }
    function hi(e, t, n, r, o) {
        var i = [];
        return {
            headerToolbar: e.headerToolbar
                ? vi(e.headerToolbar, e, t, n, r, o, i)
                : null,
            footerToolbar: e.footerToolbar
                ? vi(e.footerToolbar, e, t, n, r, o, i)
                : null,
            viewsWithButtons: i
        }
    }
    function vi(e, t, n, r, o, i, a) {
        return gt(e, (function (e) {
            return function (e, t, n, r, o, i, a) {
                var s = "rtl" === t.direction,
                    l = t.customButtons || {},
                    u = n.buttonText || {},
                    c = t.buttonText || {};
                return (
                    e
                        ? e.split(" ")
                        : []
                ).map((function (e) {
                    return e
                        .split(",")
                        .map((function (e) {
                            return "title" === e
                                ? {
                                    buttonName: e
                                }
                                : (
                                    (t = l[e])
                                        ? (
                                            d = function (e) {
                                                t.click && t
                                                    .click
                                                    .call(e.target, e, e.target)
                                            },
                                            (p = r.getCustomButtonIconClass(t)) || (p = r.getIconClass(e, s)) || (
                                                f = t.text
                                            )
                                        )
                                        : (n = o[e])
                                            ? (
                                                a.push(e),
                                                d = function () {
                                                    i.changeView(e)
                                                },
                                                (f = n.buttonTextOverride) || (p = r.getIconClass(e, s)) || (
                                                    f = n.buttonTextDefault
                                                )
                                            )
                                            : i[e] && (d = function () {
                                                i[e]()
                                            }, (f = u[e]) || (p = r.getIconClass(e, s)) || (f = c[e])),
                                    {
                                        buttonName: e,
                                        buttonClick: d,
                                        buttonIcon: p,
                                        buttonText: f
                                    }
                                );
                            var t,
                                n,
                                d,
                                p,
                                f
                        }))
                }))
            }(e, t, n, r, o, i, a)
        }))
    }
    function gi(e, t, n, r, o) {
        var i = null;
        "GET" === (e = e.toUpperCase())
            ? t = function (e, t) {
                return e + (
                    -1 === e.indexOf("?")
                        ? "?"
                        : "&"
                ) + mi(t)
            }(t, n)
            : i = mi(n);
        var a = new XMLHttpRequest;
        a.open(e, t, !0),
        "GET" !== e && a.setRequestHeader(
            "Content-Type",
            "application/x-www-form-urlencoded"
        ),
        a.onload = function () {
            if (a.status >= 200 && a.status < 400) {
                var e = !1,
                    t = void 0;
                try {
                    t = JSON.parse(a.responseText),
                    e = !0
                } catch (e) {}
                e
                    ? r(t, a)
                    : o("Failure parsing JSON", a)
            } else 
                o("Request failed", a)
        },
        a.onerror = function () {
            o("Request failed", a)
        },
        a.send(i)
    }
    function mi(e) {
        var t = [];
        for (var n in e) 
            t.push(encodeURIComponent(n) + "=" + encodeURIComponent(e[n]));
        return t.join("&")
    }
    function yi(e, t) {
        for (
            var n = yt(t.getCurrentData().eventSources),
            r = [],
            o = 0,
            i = e;
            o < i.length;
            o++
        ) {
            for (var a = i[o], s = !1, l = 0; l < n.length; l += 1) 
                if (n[l]._raw === a) {
                    n.splice(l, 1),
                    s = !0;
                    break
                }
            s || r.push(a)
        }
        for (var u = 0, c = n; u < c.length; u++) {
            var d = c[u];
            t.dispatch({type: "REMOVE_EVENT_SOURCE", sourceId: d.sourceId})
        }
        for (var p = 0, f = r; p < f.length; p++) {
            var h = f[p];
            t
                .calendarApi
                .addEventSource(h)
        }
    }
    var Ei = [
        Ho({
            eventSourceDefs: [
                {
                    ignoreRange: !0,
                    parseMeta: function (e) {
                        return Array.isArray(e.events)
                            ? e.events
                            : null
                    },
                    fetch: function (e, t) {
                        t({rawEvents: e.eventSource.meta})
                    }
                }
            ]
        }),
        Ho({
            eventSourceDefs: [
                {
                    parseMeta: function (e) {
                        return "function" == typeof e.events
                            ? e.events
                            : null
                    },
                    fetch: function (e, t, n) {
                        var r = e.context.dateEnv;
                        lo(e.eventSource.meta.bind(null, lr(e.range, r)), (function (e) {
                            t({rawEvents: e})
                        }), n)
                    }
                }
            ]
        }),
        Ho({
            eventSourceRefiners: {
                method: String,
                extraParams: fn,
                startParam: String,
                endParam: String,
                timeZoneParam: String
            },
            eventSourceDefs: [
                {
                    parseMeta: function (e) {
                        return !e.url || "json" !== e.format && e.format
                            ? null
                            : {
                                url: e.url,
                                format: "json",
                                method: (e.method || "GET").toUpperCase(),
                                extraParams: e.extraParams,
                                startParam: e.startParam,
                                endParam: e.endParam,
                                timeZoneParam: e.timeZoneParam
                            }
                    },
                    fetch: function (e, t, n) {
                        var o = e.eventSource.meta,
                            i = function (e, t, n) {
                                var o,
                                    i,
                                    a,
                                    s,
                                    l = n.dateEnv,
                                    u = n.options,
                                    c = {};
                                null == (o = e.startParam) && (o = u.startParam);
                                null == (i = e.endParam) && (i = u.endParam);
                                null == (a = e.timeZoneParam) && (a = u.timeZoneParam);
                                s = "function" == typeof e.extraParams
                                    ? e.extraParams()
                                    : e.extraParams || {};
                                r(c, s),
                                c[o] = l.formatIso(t.start),
                                c[i] = l.formatIso(t.end),
                                "local" !== l.timeZone && (c[a] = l.timeZone);
                                return c
                            }(o, e.range, e.context);
                        gi(o.method, o.url, i, (function (e, n) {
                            t({rawEvents: e, xhr: n})
                        }), (function (e, t) {
                            n({message: e, xhr: t})
                        }))
                    }
                }
            ]
        }),
        Ho({
            recurringTypes: [
                {
                    parse: function (e, t) {
                        if (e.daysOfWeek || e.startTime || e.endTime || e.startRecur || e.endRecur) {
                            var n = {
                                    daysOfWeek: e.daysOfWeek || null,
                                    startTime: e.startTime || null,
                                    endTime: e.endTime || null,
                                    startRecur: e.startRecur
                                        ? t.createMarker(e.startRecur)
                                        : null,
                                    endRecur: e.endRecur
                                        ? t.createMarker(e.endRecur)
                                        : null
                                },
                                r = void 0;
                            return e.duration && (r = e.duration),
                            !r && e.startTime && e.endTime && (o = e.endTime, i = e.startTime, r = {
                                years: o.years - i.years,
                                months: o.months - i.months,
                                days: o.days - i.days,
                                milliseconds: o.milliseconds - i.milliseconds
                            }), {
                                allDayGuess: Boolean(!e.startTime && !e.endTime),
                                duration: r,
                                typeData: n
                            }
                        }
                        var o,
                            i;
                        return null
                    },
                    expand: function (e, t, n) {
                        var r = Wn(t, {
                            start: e.startRecur,
                            end: e.endRecur
                        });
                        return r
                            ? function (e, t, n, r) {
                                var o = e
                                        ? mt(e)
                                        : null,
                                    i = rt(n.start),
                                    a = n.end,
                                    s = [];
                                for (; i < a;) {
                                    var l = void 0;
                                    o && !o[i.getUTCDay()] || (
                                        l = t
                                            ? r.add(i, t)
                                            : i,
                                        s.push(l)
                                    ),
                                    i = Ke(i, 1)
                                }
                                return s
                            }(e.daysOfWeek, e.startTime, r, n)
                            : []
                    }
                }
            ],
            eventRefiners: {
                daysOfWeek: fn,
                startTime: kt,
                endTime: kt,
                duration: kt,
                startRecur: fn,
                endRecur: fn
            }
        }),
        Ho({
            optionChangeHandlers: {
                events: function (e, t) {
                    yi([e], t)
                },
                eventSources: yi
            }
        }),
        Ho({
            isLoadingFuncs: [function (e) {
                    return ei(e.eventSources)
                }
            ],
            contentTypeHandlers: {
                html: function () {
                    return {render: Si}
                },
                domNodes: function () {
                    return {render: Di}
                }
            },
            propSetHandlers: {
                dateProfile: function (e, t) {
                    t
                        .emitter
                        .trigger("datesSet", r(r({}, lr(e.activeRange, t.dateEnv)), {view: t.viewApi}))
                },
                eventStore: function (e, t) {
                    var n = t.emitter;
                    n.hasHandlers("eventsSet") && n.trigger("eventsSet", Rr(e, t))
                }
            }
        })
    ];
    function Si(e, t) {
        e.innerHTML = t
    }
    function Di(e, t) {
        var n = Array
                .prototype
                .slice
                .call(e.childNodes),
            r = Array
                .prototype
                .slice
                .call(t);
        if (!Vt(n, r)) {
            for (var o = 0, i = r; o < i.length; o++) {
                var a = i[o];
                e.appendChild(a)
            }
            n.forEach(Ee)
        }
    }
    var bi = function () {
            function e(e) {
                this.drainedOption = e,
                this.isRunning = !1,
                this.isDirty = !1,
                this.pauseDepths = {},
                this.timeoutId = 0
            }
            return e.prototype.request = function (e) {
                this.isDirty = !0,
                this.isPaused() || (
                    this.clearTimeout(),
                    null == e
                        ? this.tryDrain()
                        : this.timeoutId = setTimeout(this.tryDrain.bind(this), e)
                )
            },
            e.prototype.pause = function (e) {
                void 0 === e && (e = "");
                var t = this.pauseDepths;
                t[e] = (t[e] || 0) + 1,
                this.clearTimeout()
            },
            e.prototype.resume = function (e, t) {
                void 0 === e && (e = "");
                var n = this.pauseDepths;
                if (e in n) {
                    if (t) 
                        delete n[e];
                    else 
                        n[e] -= 1,
                        n[e] <= 0 && delete n[e];
                    this.tryDrain()
                }
            },
            e.prototype.isPaused = function () {
                return Object
                    .keys(this.pauseDepths)
                    .length
            },
            e.prototype.tryDrain = function () {
                if (!this.isRunning && !this.isPaused()) {
                    for (this.isRunning = !0; this.isDirty;) 
                        this.isDirty = !1,
                        this.drained();
                    this.isRunning = !1
                }
            },
            e.prototype.clear = function () {
                this.clearTimeout(),
                this.isDirty = !1,
                this.pauseDepths = {}
            },
            e.prototype.clearTimeout = function () {
                this.timeoutId && (clearTimeout(this.timeoutId), this.timeoutId = 0)
            },
            e.prototype.drained = function () {
                this.drainedOption && this.drainedOption()
            },
            e
        }(),
        Ci = function () {
            function e(e, t) {
                this.runTaskOption = e,
                this.drainedOption = t,
                this.queue = [],
                this.delayedRunner = new bi(this.drain.bind(this))
            }
            return e.prototype.request = function (e, t) {
                this
                    .queue
                    .push(e),
                this
                    .delayedRunner
                    .request(t)
            },
            e.prototype.pause = function (e) {
                this
                    .delayedRunner
                    .pause(e)
            },
            e.prototype.resume = function (e, t) {
                this
                    .delayedRunner
                    .resume(e, t)
            },
            e.prototype.drain = function () {
                for (var e = this.queue; e.length;) {
                    for (var t = [], n = void 0; n = e.shift();) 
                        this.runTask(n),
                        t.push(n);
                    this.drained(t)
                }
            },
            e.prototype.runTask = function (e) {
                this.runTaskOption && this.runTaskOption(e)
            },
            e.prototype.drained = function (e) {
                this.drainedOption && this.drainedOption(e)
            },
            e
        }();
    function wi(e, t, n) {
        var r;
        return r = /^(year|month)$/.test(e.currentRangeUnit)
            ? e.currentRange
            : e.activeRange,
        n.formatRange(r.start, r.end, nn(t.titleFormat || function (e) {
            var t = e.currentRangeUnit;
            if ("year" === t) 
                return {year: "numeric"};
            if ("month" === t) 
                return {year: "numeric", month: "long"};
            var n = nt(e.currentRange.start, e.currentRange.end);
            if (null !== n && n > 1) 
                return {year: "numeric", month: "short", day: "numeric"};
            return {year: "numeric", month: "long", day: "numeric"}
        }(e)), {
            isEndExclusive: e.isRangeAllDay,
            defaultSeparator: t.titleRangeSeparator
        })
    }
    var Ri = function () {
        function e(e) {
            var t = this;
            this.computeOptionsData = Ft(this._computeOptionsData),
            this.computeCurrentViewData = Ft(this._computeCurrentViewData),
            this.organizeRawLocales = Ft(Hr),
            this.buildLocale = Ft(Or),
            this.buildPluginHooks = Oo(),
            this.buildDateEnv = Ft(_i),
            this.buildTheme = Ft(Ti),
            this.parseToolbars = Ft(hi),
            this.buildViewSpecs = Ft(Xo),
            this.buildDateProfileGenerator = zt(ki),
            this.buildViewApi = Ft(xi),
            this.buildViewUiProps = zt(Ii),
            this.buildEventUiBySource = Ft(Mi, Et),
            this.buildEventUiBases = Ft(Pi),
            this.parseContextBusinessHours = zt(Hi),
            this.buildTitle = Ft(wi),
            this.emitter = new uo,
            this.actionRunner = new Ci(
                this._handleAction.bind(this),
                this.updateData.bind(this)
            ),
            this.currentCalendarOptionsInput = {},
            this.currentCalendarOptionsRefined = {},
            this.currentViewOptionsInput = {},
            this.currentViewOptionsRefined = {},
            this.currentCalendarOptionsRefiners = {},
            this.getCurrentData = function () {
                return t.data
            },
            this.dispatch = function (e) {
                t
                    .actionRunner
                    .request(e)
            },
            this.props = e,
            this
                .actionRunner
                .pause();
            var n = {},
                o = this.computeOptionsData(e.optionOverrides, n, e.calendarApi),
                i = o.calendarOptions.initialView || o.pluginHooks.initialView,
                a = this.computeCurrentViewData(i, o, e.optionOverrides, n);
            e.calendarApi.currentDataManager = this,
            this
                .emitter
                .setThisContext(e.calendarApi),
            this
                .emitter
                .setOptions(a.options);
            var s,
                l,
                u,
                c = (
                    s = o.calendarOptions,
                    l = o.dateEnv,
                    null != (u = s.initialDate)
                        ? l.createMarker(u)
                        : Dr(s.now, l)
                ),
                d = a
                    .dateProfileGenerator
                    .build(c);
            Bn(d.activeRange, c) || (c = d.currentRange.start);
            for (var p = {
                dateEnv: o.dateEnv,
                options: o.calendarOptions,
                pluginHooks: o.pluginHooks,
                calendarApi: e.calendarApi,
                dispatch: this.dispatch,
                emitter: this.emitter,
                getCurrentData: this.getCurrentData
            }, f = 0, h = o.pluginHooks.contextInit; f < h.length; f++) {
                (0, h[f])(p)
            }
            for (var v = Jo(o.calendarOptions, d, p), g = {
                dynamicOptionOverrides: n,
                currentViewType: i,
                currentDate: c,
                dateProfile: d,
                businessHours: this.parseContextBusinessHours(p),
                eventSources: v,
                eventUiBases: {},
                eventStore: {
                    defs: {},
                    instances: {}
                },
                renderableEventStore: {
                    defs: {},
                    instances: {}
                },
                dateSelection: null,
                eventSelection: "",
                eventDrag: null,
                eventResize: null,
                selectionConfig: this
                    .buildViewUiProps(p)
                    .selectionConfig
            }, m = r(r({}, p), g), y = 0, E = o.pluginHooks.reducers; y < E.length; y++) {
                var S = E[y];
                r(g, S(null, null, m))
            }
            Ni(g, p) && this
                .emitter
                .trigger("loading", !0),
            this.state = g,
            this.updateData(),
            this
                .actionRunner
                .resume()
        }
        return e.prototype.resetOptions = function (e, t) {
            var n = this.props;
            n.optionOverrides = t
                ? r(r({}, n.optionOverrides), e)
                : e,
            this
                .actionRunner
                .request({type: "NOTHING"})
        },
        e.prototype._handleAction = function (e) {
            var t = this,
                n = t.props,
                o = t.state,
                i = t.emitter,
                a = function (e, t) {
                    var n;
                    switch (t.type) {
                        case "SET_OPTION":
                            return r(r({}, e), ((n = {})[t.optionName] = t.rawOptionValue, n));
                        default:
                            return e
                    }
                }(o.dynamicOptionOverrides, e),
                s = this.computeOptionsData(n.optionOverrides, a, n.calendarApi),
                l = function (e, t) {
                    switch (t.type) {
                        case "CHANGE_VIEW_TYPE":
                            e = t.viewType
                    }
                    return e
                }(o.currentViewType, e),
                u = this.computeCurrentViewData(l, s, n.optionOverrides, a);
            n.calendarApi.currentDataManager = this,
            i.setThisContext(n.calendarApi),
            i.setOptions(u.options);
            var c = {
                    dateEnv: s.dateEnv,
                    options: s.calendarOptions,
                    pluginHooks: s.pluginHooks,
                    calendarApi: n.calendarApi,
                    dispatch: this.dispatch,
                    emitter: i,
                    getCurrentData: this.getCurrentData
                },
                d = o.currentDate,
                p = o.dateProfile;
            this.data && this.data.dateProfileGenerator !== u.dateProfileGenerator && (
                p = u.dateProfileGenerator.build(d)
            ),
            p = function (e, t, n, r) {
                var o;
                switch (t.type) {
                    case "CHANGE_VIEW_TYPE":
                        return r.build(t.dateMarker || n);
                    case "CHANGE_DATE":
                        return r.build(t.dateMarker);
                    case "PREV":
                        if ((o = r.buildPrev(e, n)).isValid) 
                            return o;
                        break;
                    case "NEXT":
                        if ((o = r.buildNext(e, n)).isValid) 
                            return o
                    }
                return e
            }(p, e, d = function (e, t) {
                switch (t.type) {
                    case "CHANGE_DATE":
                        return t.dateMarker;
                    default:
                        return e
                }
            }(d, e), u.dateProfileGenerator),
            "PREV" !== e.type && "NEXT" !== e.type && Bn(p.currentRange, d) || (
                d = p.currentRange.start
            );
            for (
                var f = Qo(o.eventSources, e, p, c),
                h = si(o.eventStore, e, f, p, c),
                v = ei(f) && !u.options.progressiveEventRendering && o.renderableEventStore || h,
                g = this.buildViewUiProps(c),
                m = g.eventUiSingleBase,
                y = g.selectionConfig,
                E = this.buildEventUiBySource(f),
                S = {
                    dynamicOptionOverrides: a,
                    currentViewType: l,
                    currentDate: d,
                    dateProfile: p,
                    eventSources: f,
                    eventStore: h,
                    renderableEventStore: v,
                    selectionConfig: y,
                    eventUiBases: this.buildEventUiBases(v.defs, m, E),
                    businessHours: this.parseContextBusinessHours(c),
                    dateSelection: ci(o.dateSelection, e),
                    eventSelection: di(o.eventSelection, e),
                    eventDrag: pi(o.eventDrag, e),
                    eventResize: fi(o.eventResize, e)
                },
                D = r(r({}, c), S),
                b = 0,
                C = s.pluginHooks.reducers;
                b < C.length;
                b++
            ) {
                var w = C[b];
                r(S, w(o, e, D))
            }
            var R = Ni(o, c),
                _ = Ni(S, c);
            !R && _
                ? i.trigger("loading", !0)
                : R && !_ && i.trigger("loading", !1),
            this.state = S,
            n.onAction && n.onAction(e)
        },
        e.prototype.updateData = function () {
            var e,
                t,
                n,
                o,
                i,
                a,
                s,
                l,
                u,
                c = this.props,
                d = this.state,
                p = this.data,
                f = this.computeOptionsData(
                    c.optionOverrides,
                    d.dynamicOptionOverrides,
                    c.calendarApi
                ),
                h = this.computeCurrentViewData(
                    d.currentViewType,
                    f,
                    c.optionOverrides,
                    d.dynamicOptionOverrides
                ),
                v = this.data = r(r(r({
                    viewTitle: this.buildTitle(d.dateProfile, h.options, f.dateEnv),
                    calendarApi: c.calendarApi,
                    dispatch: this.dispatch,
                    emitter: this.emitter,
                    getCurrentData: this.getCurrentData
                }, f), h), d),
                g = f.pluginHooks.optionChangeHandlers,
                m = p && p.calendarOptions,
                y = f.calendarOptions;
            if (m && m !== y) 
                for (var E in m.timeZone !== y.timeZone && (d.eventSources = v.eventSources = (
                    a = v.eventSources,
                    s = d.dateProfile,
                    l = v,
                    u = s
                        ? s.activeRange
                        : null,
                    ri(a, ii(a, l), u, !0, l)
                ), d.eventStore = v.eventStore = (
                    e = v.eventStore,
                    t = p.dateEnv,
                    n = v.dateEnv,
                    o = e.defs,
                    i = gt(e.instances, (function (e) {
                        var i = o[e.defId];
                        return i.allDay || i.recurringDef
                            ? e
                            : r(r({}, e), {
                                range: {
                                    start: n.createMarker(t.toDate(e.range.start, e.forcedStartTzo)),
                                    end: n.createMarker(t.toDate(e.range.end, e.forcedEndTzo))
                                },
                                forcedStartTzo: n.canComputeOffset
                                    ? null
                                    : e.forcedStartTzo,
                                forcedEndTzo: n.canComputeOffset
                                    ? null
                                    : e.forcedEndTzo
                            })
                    })),
                    {
                        defs: o,
                        instances: i
                    }
                )), g) 
                    m[E] !== y[E] && g[E](y[E], v);
        c.onData && c.onData(v)
        },
        e.prototype._computeOptionsData = function (e, t, n) {
            var r = this.processRawCalendarOptions(e, t),
                o = r.refinedOptions,
                i = r.pluginHooks,
                a = r.localeDefaults,
                s = r.availableLocaleData;
            Oi(r.extra);
            var l = this.buildDateEnv(
                    o.timeZone,
                    o.locale,
                    o.weekNumberCalculation,
                    o.firstDay,
                    o.weekText,
                    i,
                    s,
                    o.defaultRangeSeparator
                ),
                u = this.buildViewSpecs(i.views, e, t, a),
                c = this.buildTheme(o, i);
            return {
                calendarOptions: o,
                pluginHooks: i,
                dateEnv: l,
                viewSpecs: u,
                theme: c,
                toolbarConfig: this.parseToolbars(o, e, c, u, n),
                localeDefaults: a,
                availableRawLocales: s.map
            }
        },
        e.prototype.processRawCalendarOptions = function (e, t) {
            var n = dn([on, e, t]),
                o = n.locales,
                i = n.locale,
                a = this.organizeRawLocales(o),
                s = a.map,
                l = this
                    .buildLocale(i || a.defaultCode, s)
                    .options,
                u = this.buildPluginHooks(e.plugins || [], Ei),
                c = this.currentCalendarOptionsRefiners = r(
                    r(r(r(r({}, rn), an), sn), u.listenerRefiners),
                    u.optionRefiners
                ),
                d = {},
                p = dn([on, l, e, t]),
                f = {},
                h = this.currentCalendarOptionsInput,
                v = this.currentCalendarOptionsRefined,
                g = !1;
            for (var m in p) 
                "plugins" !== m && (
                    p[m] === h[m] || ln[m] && m in h && ln[m](h[m], p[m])
                        ? f[m] = v[m]
                        : c[m]
                            ? (f[m] = c[m](p[m]), g = !0)
                            : d[m] = h[m]
                );
            return g && (
                this.currentCalendarOptionsInput = p,
                this.currentCalendarOptionsRefined = f
            ), {
                rawOptions: this.currentCalendarOptionsInput,
                refinedOptions: this.currentCalendarOptionsRefined,
                pluginHooks: u,
                availableLocaleData: a,
                localeDefaults: l,
                extra: d
            }
        },
        e.prototype._computeCurrentViewData = function (e, t, n, r) {
            var o = t.viewSpecs[e];
            if (!o) 
                throw new Error(
                    'viewType "' + e + "\" is not available. Please make sure you've loaded all nec" +
                    "cessary plugins"
                );
            var i = this.processRawViewOptions(o, t.pluginHooks, t.localeDefaults, n, r),
                a = i.refinedOptions;
            return Oi(i.extra), {
                viewSpec: o,
                options: a,
                dateProfileGenerator: this.buildDateProfileGenerator({
                    dateProfileGeneratorClass: o.optionDefaults.dateProfileGeneratorClass,
                    duration: o.duration,
                    durationUnit: o.durationUnit,
                    usesMinMaxTime: o.optionDefaults.usesMinMaxTime,
                    dateEnv: t.dateEnv,
                    calendarApi: this.props.calendarApi,
                    slotMinTime: a.slotMinTime,
                    slotMaxTime: a.slotMaxTime,
                    showNonCurrentDates: a.showNonCurrentDates,
                    dayCount: a.dayCount,
                    dateAlignment: a.dateAlignment,
                    dateIncrement: a.dateIncrement,
                    hiddenDays: a.hiddenDays,
                    weekends: a.weekends,
                    nowInput: a.now,
                    validRangeInput: a.validRange,
                    visibleRangeInput: a.visibleRange,
                    monthMode: a.monthMode,
                    fixedWeekCount: a.fixedWeekCount
                }),
                viewApi: this.buildViewApi(e, this.getCurrentData, t.dateEnv)
            }
        },
        e.prototype.processRawViewOptions = function (e, t, n, o, i) {
            var a = dn([
                    on,
                    e.optionDefaults,
                    n,
                    o,
                    e.optionOverrides,
                    i
                ]),
                s = r(r(r(r(r(r({}, rn), an), sn), cn), t.listenerRefiners), t.optionRefiners),
                l = {},
                u = this.currentViewOptionsInput,
                c = this.currentViewOptionsRefined,
                d = !1,
                p = {};
            for (var f in a) 
                a[f] === u[f]
                    ? l[f] = c[f]
                    : (
                        a[f] === this.currentCalendarOptionsInput[f]
                            ? f in this.currentCalendarOptionsRefined && (
                                l[f] = this.currentCalendarOptionsRefined[f]
                            )
                            : s[f]
                                ? l[f] = s[f](a[f])
                                : p[f] = a[f],
                        d = !0
                    );
            return d && (
                this.currentViewOptionsInput = a,
                this.currentViewOptionsRefined = l
            ), {
                rawOptions: this.currentViewOptionsInput,
                refinedOptions: this.currentViewOptionsRefined,
                extra: p
            }
        },
        e
    }();
    function _i(e, t, n, r, o, i, a, s) {
        var l = Or(t || a.defaultCode, a.map);
        return new Pr({
            calendarSystem: "gregory",
            timeZone: e,
            namedTimeZoneImpl: i.namedTimeZonedImpl,
            locale: l,
            weekNumberCalculation: n,
            firstDay: r,
            weekText: o,
            cmdFormatter: i.cmdFormatter,
            defaultSeparator: s
        })
    }
    function Ti(e, t) {
        return new(t.themeClasses[e.themeSystem] || Ao)(e)
    }
    function ki(e) {
        return new(e.dateProfileGeneratorClass || $o)(e)
    }
    function xi(e, t, n) {
        return new mr(e, t, n)
    }
    function Mi(e) {
        return gt(e, (function (e) {
            return e.ui
        }))
    }
    function Pi(e, t, n) {
        var r = {
            "": t
        };
        for (var o in e) {
            var i = e[o];
            i.sourceId && n[i.sourceId] && (r[o] = n[i.sourceId])
        }
        return r
    }
    function Ii(e) {
        var t = e.options;
        return {
            eventUiSingleBase: Cn({
                display: t.eventDisplay,
                editable: t.editable,
                startEditable: t.eventStartEditable,
                durationEditable: t.eventDurationEditable,
                constraint: t.eventConstraint,
                overlap: "boolean" == typeof t.eventOverlap
                    ? t.eventOverlap
                    : void 0,
                allow: t.eventAllow,
                backgroundColor: t.eventBackgroundColor,
                borderColor: t.eventBorderColor,
                textColor: t.eventTextColor,
                color: t.eventColor
            }, e),
            selectionConfig: Cn({
                constraint: t.selectConstraint,
                overlap: "boolean" == typeof t.selectOverlap
                    ? t.selectOverlap
                    : void 0,
                allow: t.selectAllow
            }, e)
        }
    }
    function Ni(e, t) {
        for (var n = 0, r = t.pluginHooks.isLoadingFuncs; n < r.length; n++) {
            if ((0, r[n])(e)) 
                return !0
        }
        return !1
    }
    function Hi(e) {
        return Vr(e.options.businessHours, e)
    }
    function Oi(e, t) {
        for (var n in e) 
            console.warn("Unknown option '" + n + "'" + (
                t
                    ? " for view '" + t + "'"
                    : ""
            ))
    }
    var Ai = function (e) {
        function t(t) {
            var n = e.call(this, t) || this;
            return n.handleData = function (e) {
                n.dataManager
                    ? n.setState(e)
                    : n.state = e
            },
            n.dataManager = new Ri(
                {optionOverrides: t.optionOverrides, calendarApi: t.calendarApi, onData: n.handleData}
            ),
            n
        }
        return n(t, e),
        t.prototype.render = function () {
            return this
                .props
                .children(this.state)
        },
        t.prototype.componentDidUpdate = function (e) {
            var t = this.props.optionOverrides;
            t !== e.optionOverrides && this
                .dataManager
                .resetOptions(t)
        },
        t
    }(go);
    var Ui = function (e) {
            this.timeZoneName = e
        },
        Li = function () {
            function e() {
                this.strictOrder = !1,
                this.allowReslicing = !1,
                this.maxCoord = -1,
                this.maxStackCnt = -1,
                this.levelCoords = [],
                this.entriesByLevel = [],
                this.stackCnts = {}
            }
            return e.prototype.addSegs = function (e) {
                for (var t = [], n = 0, r = e; n < r.length; n++) {
                    var o = r[n];
                    this.insertEntry(o, t)
                }
                return t
            },
            e.prototype.insertEntry = function (e, t) {
                var n = this.findInsertion(e);
                return this.isInsertionValid(n, e)
                    ? (this.insertEntryAt(e, n), 1)
                    : this.handleInvalidInsertion(n, e, t)
            },
            e.prototype.isInsertionValid = function (e, t) {
                return (-1 === this.maxCoord || e.levelCoord + t.thickness <= this.maxCoord) && (
                    -1 === this.maxStackCnt || e.stackCnt < this.maxStackCnt
                )
            },
            e.prototype.handleInvalidInsertion = function (e, t, n) {
                return this.allowReslicing && e.touchingEntry
                    ? this.splitEntry(t, e.touchingEntry, n)
                    : (n.push(t), 0)
            },
            e.prototype.splitEntry = function (e, t, n) {
                var r = 0,
                    i = [],
                    a = e.span,
                    s = t.span;
                return a.start < s.start && (r += this.insertEntry({
                    index: e.index,
                    thickness: e.thickness,
                    span: {
                        start: a.start,
                        end: s.start
                    }
                }, i)),
                a.end > s.end && (r += this.insertEntry({
                    index: e.index,
                    thickness: e.thickness,
                    span: {
                        start: s.end,
                        end: a.end
                    }
                }, i)),
                r
                    ? (n.push.apply(n, o([
                        {
                            index: e.index,
                            thickness: e.thickness,
                            span: Bi(s, a)
                        }
                    ], i)), r)
                    : (n.push(e), 0)
            },
            e.prototype.insertEntryAt = function (e, t) {
                var n = this.entriesByLevel,
                    r = this.levelCoords,
                    o = t.level;
                o >= r.length || r[o] > t.levelCoord
                    ? (ji(r, o, t.levelCoord), ji(n, o, [e]))
                    : ji(n[o], t.lateralEnd, e),
                this.stackCnts[Vi(e)] = t.stackCnt
            },
            e.prototype.findInsertion = function (e) {
                for (
                    var t = this,
                    n = t.levelCoords,
                    r = t.entriesByLevel,
                    o = t.stackCnts,
                    i = t.strictOrder,
                    a = n.length,
                    s = 0,
                    l = 0,
                    u = 0,
                    c = 0,
                    d = -1,
                    p = null,
                    f = 0;
                    f < a;
                    f += 1
                ) {
                    var h = n[f];
                    if (!i && h >= s + e.thickness) 
                        break;
                    var v = r[f],
                        g = void 0,
                        m = Gi(v, e.span.start, Wi);
                    for (c = u = m[0] + m[1]; (g = v[c]) && g.span.start < e.span.end;) 
                        (i || s < h + g.thickness && s + e.thickness > h) && (
                            s = h + g.thickness,
                            d = f,
                            p = g
                        ),
                        c += 1;
                    h < s && (l = f + 1)
                }
                return {
                    level: l,
                    levelCoord: s,
                    lateralStart: u,
                    lateralEnd: c,
                    touchingLevel: d,
                    touchingEntry: p,
                    stackCnt: p
                        ? o[Vi(p)] + 1
                        : 0
                }
            },
            e.prototype.toRects = function () {
                for (
                    var e = this.entriesByLevel,
                    t = this.levelCoords,
                    n = e.length,
                    o = [],
                    i = 0;
                    i < n;
                    i += 1
                ) 
                    for (var a = e[i], s = t[i], l = 0, u = a; l < u.length; l++) {
                        var c = u[l];
                        o.push(r(r({}, c), {levelCoord: s}))
                    }
                return o
            },
            e
        }();
    function Wi(e) {
        return e.span.end
    }
    function Vi(e) {
        return e.index + ":" + e.span.start
    }
    function Fi(e) {
        for (var t = [], n = 0, r = e; n < r.length; n++) {
            for (var o = r[n], i = [], a = {
                span: o.span,
                entries: [o]
            }, s = 0, l = t; s < l.length; s++) {
                var u = l[s];
                Bi(u.span, a.span)
                    ? a = {
                        entries: u
                            .entries
                            .concat(a.entries),
                        span: zi(u.span, a.span)
                    }
                    : i.push(u)
            }
            i.push(a),
            t = i
        }
        return t
    }
    function zi(e, t) {
        return {
            start: Math.min(e.start, t.start),
            end: Math.max(e.end, t.end)
        }
    }
    function Bi(e, t) {
        var n = Math.max(e.start, t.start),
            r = Math.min(e.end, t.end);
        return n < r
            ? {
                start: n,
                end: r
            }
            : null
    }
    function ji(e, t, n) {
        e.splice(t, 0, n)
    }
    function Gi(e, t, n) {
        var r = 0,
            o = e.length;
        if (!o || t < n(e[r])) 
            return [0, 0];
        if (t > n(e[o - 1])) 
            return [o, 0];
        for (; r < o;) {
            var i = Math.floor(r + (o - r) / 2),
                a = n(e[i]);
            if (t < a) 
                o = i;
            else {
                if (!(t > a)) 
                    return [i, 1];
                r = i + 1
            }
        }
        return [r, 0]
    }
    var qi = function () {
        function e(e) {
            this.component = e.component,
            this.isHitComboAllowed = e.isHitComboAllowed || null
        }
        return e.prototype.destroy = function () {},
        e
    }();
    function Yi(e, t) {
        return {
            component: e,
            el: t.el,
            useEventCenter: null == t.useEventCenter || t.useEventCenter,
            isHitComboAllowed: t.isHitComboAllowed || null
        }
    }
    function Zi(e) {
        var t;
        return (t = {})[e.component.uid] = e,
        t
    }
    var Xi = {},
        Ki = function () {
            function e(e, t) {
                this.emitter = new uo
            }
            return e.prototype.destroy = function () {},
            e.prototype.setMirrorIsVisible = function (e) {},
            e.prototype.setMirrorNeedsRevert = function (e) {},
            e.prototype.setAutoScrollEnabled = function (e) {},
            e
        }(),
        $i = {},
        Ji = {
            startTime: kt,
            duration: kt,
            create: Boolean,
            sourceId: String
        };
    function Qi(e) {
        var t = pn(e, Ji),
            n = t.refined,
            r = t.extra;
        return {
            startTime: n.startTime || null,
            duration: n.duration || null,
            create: null == n.create || n.create,
            sourceId: n.sourceId,
            leftoverProps: r
        }
    }
    var ea = function (e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return n(t, e),
            t.prototype.render = function () {
                var e = this,
                    t = this
                        .props
                        .widgetGroups
                        .map((function (t) {
                            return e.renderWidgetGroup(t)
                        }));
                return mo.apply(void 0, o([
                    "div", {
                        className: "fc-toolbar-chunk"
                    }
                ], t))
            },
            t.prototype.renderWidgetGroup = function (e) {
                for (
                    var t = this.props,
                    n = this.context.theme,
                    i = [],
                    a = !0,
                    s = 0,
                    l = e;
                    s < l.length;
                    s++
                ) {
                    var u = l[s],
                        c = u.buttonName,
                        d = u.buttonClick,
                        p = u.buttonText,
                        f = u.buttonIcon;
                    if ("title" === c) 
                        a = !1,
                        i.push(mo("h2", {
                            className: "fc-toolbar-title"
                        }, t.title));
                    else {
                        var h = f
                                ? {
                                    "aria-label": c
                                }
                                : {},
                            v = [
                                "fc-" + c + "-button",
                                n.getClass("button")
                            ];
                        c === t.activeButton && v.push(n.getClass("buttonActive"));
                        var g = !t.isTodayEnabled && "today" === c || !t.isPrevEnabled && "prev" === c || !t.isNextEnabled && "next" === c;
                        i.push(mo("button", r({
                            disabled: g,
                            className: v.join(" "),
                            onClick: d,
                            type: "button"
                        }, h), p || (
                            f
                                ? mo("span", {className: f})
                                : ""
                        )))
                    }
                }
                if (i.length > 1) {
                    var m = a && n.getClass("buttonGroup") || "";
                    return mo.apply(void 0, o([
                        "div", {
                            className: m
                        }
                    ], i))
                }
                return i[0]
            },
            t
        }(xo),
        ta = function (e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return n(t, e),
            t.prototype.render = function () {
                var e,
                    t,
                    n = this.props,
                    r = n.model,
                    o = n.extraClassName,
                    i = !1,
                    a = r.center;
                return r.left
                    ? (i = !0, e = r.left)
                    : e = r.start,
                r.right
                    ? (i = !0, t = r.right)
                    : t = r.end,
                mo(
                    "div",
                    {
                        className: [
                            o || "",
                            "fc-toolbar",
                            i
                                ? "fc-toolbar-ltr"
                                : ""
                        ].join(" ")
                    },
                    this.renderSection("start", e || []),
                    this.renderSection("center", a || []),
                    this.renderSection("end", t || [])
                )
            },
            t.prototype.renderSection = function (e, t) {
                var n = this.props;
                return mo(ea, {
                    key: e,
                    widgetGroups: t,
                    title: n.title,
                    activeButton: n.activeButton,
                    isTodayEnabled: n.isTodayEnabled,
                    isPrevEnabled: n.isPrevEnabled,
                    isNextEnabled: n.isNextEnabled
                })
            },
            t
        }(xo),
        na = function (e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.state = {
                    availableWidth: null
                },
                t.handleEl = function (e) {
                    t.el = e,
                    Io(t.props.elRef, e),
                    t.updateAvailableWidth()
                },
                t.handleResize = function () {
                    t.updateAvailableWidth()
                },
                t
            }
            return n(t, e),
            t.prototype.render = function () {
                var e = this.props,
                    t = this.state,
                    n = e.aspectRatio,
                    r = [
                        "fc-view-harness", n || e.liquid || e.height
                            ? "fc-view-harness-active"
                            : "fc-view-harness-passive"
                    ],
                    o = "",
                    i = "";
                return n
                    ? null !== t.availableWidth
                        ? o = t.availableWidth / n
                        : i = 1 / n * 100 + "%"
                    : o = e.height || "",
                mo("div", {
                    ref: this.handleEl,
                    onClick: e.onClick,
                    className: r.join(" "),
                    style: {
                        height: o,
                        paddingBottom: i
                    }
                }, e.children)
            },
            t.prototype.componentDidMount = function () {
                this
                    .context
                    .addResizeHandler(this.handleResize)
            },
            t.prototype.componentWillUnmount = function () {
                this
                    .context
                    .removeResizeHandler(this.handleResize)
            },
            t.prototype.updateAvailableWidth = function () {
                this.el && this.props.aspectRatio && this.setState(
                    {availableWidth: this.el.offsetWidth}
                )
            },
            t
        }(xo),
        ra = function (e) {
            function t(t) {
                var n = e.call(this, t) || this;
                return n.handleSegClick = function (e, t) {
                    var r = n.component,
                        o = r.context,
                        i = Yn(t);
                    if (i && r.isValidSegDownEl(e.target)) {
                        var a = Se(e.target, ".fc-event-forced-url"),
                            s = a
                                ? a
                                    .querySelector("a[href]")
                                    .href
                                : "";
                        o
                            .emitter
                            .trigger("eventClick", {
                                el: t,
                                event: new Cr(r.context, i.eventRange.def, i.eventRange.instance),
                                jsEvent: e,
                                view: o.viewApi
                            }),
                        s && !e.defaultPrevented && (window.location.href = s)
                    }
                },
                n.destroy = xe(t.el, "click", ".fc-event", n.handleSegClick),
                n
            }
            return n(t, e),
            t
        }(qi),
        oa = function (e) {
            function t(t) {
                var n,
                    r,
                    o,
                    i,
                    a,
                    s = e.call(this, t) || this;
                return s.handleEventElRemove = function (e) {
                    e === s.currentSegEl && s.handleSegLeave(null, s.currentSegEl)
                },
                s.handleSegEnter = function (e, t) {
                    Yn(t) && (s.currentSegEl = t, s.triggerEvent("eventMouseEnter", e, t))
                },
                s.handleSegLeave = function (e, t) {
                    s.currentSegEl && (
                        s.currentSegEl = null,
                        s.triggerEvent("eventMouseLeave", e, t)
                    )
                },
                s.removeHoverListeners = (
                    n = t.el,
                    r = ".fc-event",
                    o = s.handleSegEnter,
                    i = s.handleSegLeave,
                    xe(n, "mouseover", r, (function (e, t) {
                        if (t !== a) {
                            a = t,
                            o(e, t);
                            var n = function (e) {
                                a = null,
                                i(e, t),
                                t.removeEventListener("mouseleave", n)
                            };
                            t.addEventListener("mouseleave", n)
                        }
                    }))
                ),
                s
            }
            return n(t, e),
            t.prototype.destroy = function () {
                this.removeHoverListeners()
            },
            t.prototype.triggerEvent = function (e, t, n) {
                var r = this.component,
                    o = r.context,
                    i = Yn(n);
                t && !r.isValidSegDownEl(t.target) || o
                    .emitter
                    .trigger(e, {
                        el: n,
                        event: new Cr(o, i.eventRange.def, i.eventRange.instance),
                        jsEvent: t,
                        view: o.viewApi
                    })
            },
            t
        }(qi),
        ia = function (e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.buildViewContext = Ft(To),
                t.buildViewPropTransformers = Ft(sa),
                t.buildToolbarProps = Ft(aa),
                t.handleNavLinkClick = ke("a[data-navlink]", t._handleNavLinkClick.bind(t)),
                t.headerRef = Eo(),
                t.footerRef = Eo(),
                t.interactionsStore = {},
                t.registerInteractiveComponent = function (e, n) {
                    var r = Yi(e, n),
                        o = [ra, oa]
                            .concat(t.props.pluginHooks.componentInteractions)
                            .map((function (e) {
                                return new e(r)
                            }));
                    t.interactionsStore[e.uid] = o,
                    Xi[e.uid] = r
                },
                t.unregisterInteractiveComponent = function (e) {
                    for (var n = 0, r = t.interactionsStore[e.uid]; n < r.length; n++) {
                        r[n].destroy()
                    }
                    delete t.interactionsStore[e.uid],
                    delete Xi[e.uid]
                },
                t.resizeRunner = new bi((function () {
                    t
                        .props
                        .emitter
                        .trigger("_resize", !0),
                    t
                        .props
                        .emitter
                        .trigger("windowResize", {view: t.props.viewApi})
                })),
                t.handleWindowResize = function (e) {
                    var n = t.props.options;
                    n.handleWindowResize && e.target === window && t
                        .resizeRunner
                        .request(n.windowResizeDelay)
                },
                t
            }
            return n(t, e),
            t.prototype.render = function () {
                var e,
                    t = this.props,
                    n = t.toolbarConfig,
                    o = t.options,
                    i = this.buildToolbarProps(
                        t.viewSpec,
                        t.dateProfile,
                        t.dateProfileGenerator,
                        t.currentDate,
                        Dr(t.options.now, t.dateEnv),
                        t.viewTitle
                    ),
                    a = !1,
                    s = "";
                t.isHeightAuto || t.forPrint
                    ? s = ""
                    : null != o.height
                        ? a = !0
                        : null != o.contentHeight
                            ? s = o.contentHeight
                            : e = Math.max(o.aspectRatio, .5);
                var l = this.buildViewContext(
                    t.viewSpec,
                    t.viewApi,
                    t.options,
                    t.dateProfileGenerator,
                    t.dateEnv,
                    t.theme,
                    t.pluginHooks,
                    t.dispatch,
                    t.getCurrentData,
                    t.emitter,
                    t.calendarApi,
                    this.registerInteractiveComponent,
                    this.unregisterInteractiveComponent
                );
                return mo(_o.Provider, {
                    value: l
                }, n.headerToolbar && mo(ta, r({
                    ref: this.headerRef,
                    extraClassName: "fc-header-toolbar",
                    model: n.headerToolbar
                }, i)), mo(na, {
                    liquid: a,
                    height: s,
                    aspectRatio: e,
                    onClick: this.handleNavLinkClick
                }, this.renderView(t), this.buildAppendContent()), n.footerToolbar && mo(ta, r({
                    ref: this.footerRef,
                    extraClassName: "fc-footer-toolbar",
                    model: n.footerToolbar
                }, i)))
            },
            t.prototype.componentDidMount = function () {
                var e = this.props;
                this.calendarInteractions = e
                    .pluginHooks
                    .calendarInteractions
                    .map((function (t) {
                        return new t(e)
                    })),
                window.addEventListener("resize", this.handleWindowResize);
                var t = e.pluginHooks.propSetHandlers;
                for (var n in t) 
                    t[n](e[n], e)
            },
            t.prototype.componentDidUpdate = function (e) {
                var t = this.props,
                    n = t.pluginHooks.propSetHandlers;
                for (var r in n) 
                    t[r] !== e[r] && n[r](t[r], t)
            },
            t.prototype.componentWillUnmount = function () {
                window.removeEventListener("resize", this.handleWindowResize),
                this
                    .resizeRunner
                    .clear();
                for (var e = 0, t = this.calendarInteractions; e < t.length; e++) {
                    t[e].destroy()
                }
                this
                    .props
                    .emitter
                    .trigger("_unmount")
            },
            t.prototype._handleNavLinkClick = function (e, t) {
                var n = this.props,
                    r = n.dateEnv,
                    o = n.options,
                    i = n.calendarApi,
                    a = t.getAttribute("data-navlink");
                a = a
                    ? JSON.parse(a)
                    : {};
                var s = r.createMarker(a.date),
                    l = a.type,
                    u = "day" === l
                        ? o.navLinkDayClick
                        : "week" === l
                            ? o.navLinkWeekClick
                            : null;
                "function" == typeof u
                    ? u.call(i, r.toDate(s), e)
                    : ("string" == typeof u && (l = u), i.zoomTo(s, l))
            },
            t.prototype.buildAppendContent = function () {
                var e = this.props,
                    t = e
                        .pluginHooks
                        .viewContainerAppends
                        .map((function (t) {
                            return t(e)
                        }));
                return mo.apply(void 0, o([
                    So, {}
                ], t))
            },
            t.prototype.renderView = function (e) {
                for (
                    var t = e.pluginHooks,
                    n = e.viewSpec,
                    o = {
                        dateProfile: e.dateProfile,
                        businessHours: e.businessHours,
                        eventStore: e.renderableEventStore,
                        eventUiBases: e.eventUiBases,
                        dateSelection: e.dateSelection,
                        eventSelection: e.eventSelection,
                        eventDrag: e.eventDrag,
                        eventResize: e.eventResize,
                        isHeightAuto: e.isHeightAuto,
                        forPrint: e.forPrint
                    },
                    i = 0,
                    a = this.buildViewPropTransformers(t.viewPropsTransformers); i < a.length; i++
                ) {
                    var s = a[i];
                    r(o, s.transform(o, e))
                }
                var l = n.component;
                return mo(l, r({}, o))
            },
            t
        }(ko);
    function aa(e, t, n, r, o, i) {
        var a = n.build(o, void 0, !1),
            s = n.buildPrev(t, r, !1),
            l = n.buildNext(t, r, !1);
        return {
            title: i,
            activeButton: e.type,
            isTodayEnabled: a.isValid && !Bn(t.currentRange, o),
            isPrevEnabled: s.isValid,
            isNextEnabled: l.isValid
        }
    }
    function sa(e) {
        return e.map((function (e) {
            return new e
        }))
    }
    var la = function (e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.state = {
                forPrint: !1
            },
            t.handleBeforePrint = function () {
                t.setState({
                    forPrint: !0
                })
            },
            t.handleAfterPrint = function () {
                t.setState({
                    forPrint: !1
                })
            },
            t
        }
        return n(t, e),
        t.prototype.render = function () {
            var e = this.props,
                t = e.options,
                n = this.state.forPrint,
                r = n || "auto" === t.height || "auto" === t.contentHeight,
                o = r || null == t.height
                    ? ""
                    : t.height,
                i = [
                    "fc", n
                        ? "fc-media-print"
                        : "fc-media-screen",
                    "fc-direction-" + t.direction,
                    e
                        .theme
                        .getClass("root")
                ];
            return qr() || i.push("fc-liquid-hack"),
            e.children(i, o, r, n)
        },
        t.prototype.componentDidMount = function () {
            var e = this.props.emitter;
            e.on("_beforeprint", this.handleBeforePrint),
            e.on("_afterprint", this.handleAfterPrint)
        },
        t.prototype.componentWillUnmount = function () {
            var e = this.props.emitter;
            e.off("_beforeprint", this.handleBeforePrint),
            e.off("_afterprint", this.handleAfterPrint)
        },
        t
    }(xo);
    function ua(e, t) {
        return nn(
            !e || t > 10
                ? {
                    weekday: "short"
                }
                : t > 1
                    ? {
                        weekday: "short",
                        month: "numeric",
                        day: "numeric",
                        omitCommas: !0
                    }
                    : {
                        weekday: "long"
                    }
        )
    }
    var ca = "fc-col-header-cell";
    function da(e) {
        return e.text
    }
    var pa = function (e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return n(t, e),
            t.prototype.render = function () {
                var e = this.context,
                    t = e.dateEnv,
                    n = e.options,
                    o = e.theme,
                    i = e.viewApi,
                    a = this.props,
                    s = a.date,
                    l = a.dateProfile,
                    u = Kr(s, a.todayRange, null, l),
                    c = [ca].concat($r(u, o)),
                    d = t.format(s, a.dayHeaderFormat),
                    p = n.navLinks && !u.isDisabled && a.colCnt > 1
                        ? {
                            "data-navlink": Jr(s),
                            tabIndex: 0
                        }
                        : {},
                    f = r(r(r({
                        date: t.toDate(s),
                        view: i
                    }, a.extraHookProps), {text: d}), u);
                return mo(Lo, {
                    hookProps: f,
                    classNames: n.dayHeaderClassNames,
                    content: n.dayHeaderContent,
                    defaultContent: da,
                    didMount: n.dayHeaderDidMount,
                    willUnmount: n.dayHeaderWillUnmount
                }, (function (e, t, n, o) {
                    return mo("th", r({
                        ref: e,
                        className: c
                            .concat(t)
                            .join(" "),
                        "data-date": u.isDisabled
                            ? void 0
                            : Ut(s),
                        colSpan: a.colSpan
                    }, a.extraDataAttrs), mo("div", {
                        className: "fc-scrollgrid-sync-inner"
                    }, !u.isDisabled && mo("a", r({
                        ref: n,
                        className: [
                            "fc-col-header-cell-cushion", a.isSticky
                                ? "fc-sticky"
                                : ""
                        ].join(" ")
                    }, p), o)))
                }))
            },
            t
        }(xo),
        fa = function (e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return n(t, e),
            t.prototype.render = function () {
                var e = this.props,
                    t = this.context,
                    n = t.dateEnv,
                    o = t.theme,
                    i = t.viewApi,
                    a = t.options,
                    s = Ke(new Date(2592e5), e.dow),
                    l = {
                        dow: e.dow,
                        isDisabled: !1,
                        isFuture: !1,
                        isPast: !1,
                        isToday: !1,
                        isOther: !1
                    },
                    u = [ca].concat($r(l, o), e.extraClassNames || []),
                    c = n.format(s, e.dayHeaderFormat),
                    d = r(r(r(r({
                        date: s
                    }, l), {view: i}), e.extraHookProps), {text: c});
                return mo(Lo, {
                    hookProps: d,
                    classNames: a.dayHeaderClassNames,
                    content: a.dayHeaderContent,
                    defaultContent: da,
                    didMount: a.dayHeaderDidMount,
                    willUnmount: a.dayHeaderWillUnmount
                }, (function (t, n, o, i) {
                    return mo("th", r({
                        ref: t,
                        className: u
                            .concat(n)
                            .join(" "),
                        colSpan: e.colSpan
                    }, e.extraDataAttrs), mo("div", {
                        className: "fc-scrollgrid-sync-inner"
                    }, mo("a", {
                        className: [
                            "fc-col-header-cell-cushion", e.isSticky
                                ? "fc-sticky"
                                : ""
                        ].join(" "),
                        ref: o
                    }, i)))
                }))
            },
            t
        }(xo),
        ha = function (e) {
            function t(t, n) {
                var r = e.call(this, t, n) || this;
                return r.initialNowDate = Dr(n.options.now, n.dateEnv),
                r.initialNowQueriedMs = (new Date).valueOf(),
                r.state = r
                    .computeTiming()
                    .currentState,
                r
            }
            return n(t, e),
            t.prototype.render = function () {
                var e = this.props,
                    t = this.state;
                return e.children(t.nowDate, t.todayRange)
            },
            t.prototype.componentDidMount = function () {
                this.setTimeout()
            },
            t.prototype.componentDidUpdate = function (e) {
                e.unit !== this.props.unit && (this.clearTimeout(), this.setTimeout())
            },
            t.prototype.componentWillUnmount = function () {
                this.clearTimeout()
            },
            t.prototype.computeTiming = function () {
                var e = this.props,
                    t = this.context,
                    n = $e(this.initialNowDate, (new Date).valueOf() - this.initialNowQueriedMs),
                    r = t
                        .dateEnv
                        .startOf(n, e.unit),
                    o = t
                        .dateEnv
                        .add(r, kt(1, e.unit)),
                    i = o.valueOf() - n.valueOf();
                return i = Math.min(864e5, i), {
                    currentState: {
                        nowDate: r,
                        todayRange: va(r)
                    },
                    nextState: {
                        nowDate: o,
                        todayRange: va(o)
                    },
                    waitMs: i
                }
            },
            t.prototype.setTimeout = function () {
                var e = this,
                    t = this.computeTiming(),
                    n = t.nextState,
                    r = t.waitMs;
                this.timeoutId = setTimeout((function () {
                    e.setState(n, (function () {
                        e.setTimeout()
                    }))
                }), r)
            },
            t.prototype.clearTimeout = function () {
                this.timeoutId && clearTimeout(this.timeoutId)
            },
            t.contextType = _o,
            t
        }(go);
    function va(e) {
        var t = rt(e);
        return {
            start: t,
            end: Ke(t, 1)
        }
    }
    var ga = function (e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.createDayHeaderFormatter = Ft(ma),
            t
        }
        return n(t, e),
        t.prototype.render = function () {
            var e = this.context,
                t = this.props,
                n = t.dates,
                r = t.dateProfile,
                o = t.datesRepDistinctDays,
                i = t.renderIntro,
                a = this.createDayHeaderFormatter(e.options.dayHeaderFormat, o, n.length);
            return mo(ha, {
                unit: "day"
            }, (function (e, t) {
                return mo("tr", null, i && i("day"), n.map((function (e) {
                    return o
                        ? mo(pa, {
                            key: e.toISOString(),
                            date: e,
                            dateProfile: r,
                            todayRange: t,
                            colCnt: n.length,
                            dayHeaderFormat: a
                        })
                        : mo(fa, {
                            key: e.getUTCDay(),
                            dow: e.getUTCDay(),
                            dayHeaderFormat: a
                        })
                })))
            }))
        },
        t
    }(xo);
    function ma(e, t, n) {
        return e || ua(t, n)
    }
    var ya = function () {
            function e(e, t) {
                for (var n = e.start, r = e.end, o = [], i = [], a = -1; n < r;) 
                    t.isHiddenDay(n)
                        ? o.push(a + .5)
                        : (a += 1, o.push(a), i.push(n)),
                    n = Ke(n, 1);
                this.dates = i,
                this.indices = o,
                this.cnt = i.length
            }
            return e.prototype.sliceRange = function (e) {
                var t = this.getDateDayIndex(e.start),
                    n = this.getDateDayIndex(Ke(e.end, -1)),
                    r = Math.max(0, t),
                    o = Math.min(this.cnt - 1, n);
                return (r = Math.ceil(r)) <= (o = Math.floor(o))
                    ? {
                        firstIndex: r,
                        lastIndex: o,
                        isStart: t === r,
                        isEnd: n === o
                    }
                    : null
            },
            e.prototype.getDateDayIndex = function (e) {
                var t = this.indices,
                    n = Math.floor(Qe(this.dates[0], e));
                return n < 0
                    ? t[0] - 1
                    : n >= t.length
                        ? t[t.length - 1] + 1
                        : t[n]
            },
            e
        }(),
        Ea = function () {
            function e(e, t) {
                var n,
                    r,
                    o,
                    i = e.dates;
                if (t) {
                    for (
                        r = i[0].getUTCDay(),
                        n = 1;
                        n < i.length && i[n].getUTCDay() !== r;
                        n += 1
                    ) 
                    ;
                    o = Math.ceil(i.length / n)
                } else 
                    o = 1,
                    n = i.length;
                this.rowCnt = o,
                this.colCnt = n,
                this.daySeries = e,
                this.cells = this.buildCells(),
                this.headerDates = this.buildHeaderDates()
            }
            return e.prototype.buildCells = function () {
                for (var e = [], t = 0; t < this.rowCnt; t += 1) {
                    for (var n = [], r = 0; r < this.colCnt; r += 1) 
                        n.push(this.buildCell(t, r));
                    e.push(n)
                }
                return e
            },
            e.prototype.buildCell = function (e, t) {
                var n = this
                    .daySeries
                    .dates[e * this.colCnt + t];
                return {key: n.toISOString(), date: n}
            },
            e.prototype.buildHeaderDates = function () {
                for (var e = [], t = 0; t < this.colCnt; t += 1) 
                    e.push(this.cells[0][t].date);
                return e
            },
            e.prototype.sliceRange = function (e) {
                var t = this.colCnt,
                    n = this
                        .daySeries
                        .sliceRange(e),
                    r = [];
                if (n) 
                    for (var o = n.firstIndex, i = n.lastIndex, a = o; a <= i;) {
                        var s = Math.floor(a / t),
                            l = Math.min((s + 1) * t, i + 1);
                        r.push({
                            row: s,
                            firstCol: a % t,
                            lastCol: (l - 1) % t,
                            isStart: n.isStart && a === o,
                            isEnd: n.isEnd && l - 1 === i
                        }),
                        a = l
                    }
                return r
            },
            e
        }(),
        Sa = function () {
            function e() {
                this.sliceBusinessHours = Ft(this._sliceBusinessHours),
                this.sliceDateSelection = Ft(this._sliceDateSpan),
                this.sliceEventStore = Ft(this._sliceEventStore),
                this.sliceEventDrag = Ft(this._sliceInteraction),
                this.sliceEventResize = Ft(this._sliceInteraction),
                this.forceDayIfListItem = !1
            }
            return e.prototype.sliceProps = function (e, t, n, r) {
                for (var i = [], a = 4; a < arguments.length; a++) 
                    i[a - 4] = arguments[a];
                var s = e.eventUiBases,
                    l = this
                        .sliceEventStore
                        .apply(this, o([
                            e.eventStore, s, t, n
                        ], i));
                return {
                    dateSelectionSegs: this
                        .sliceDateSelection
                        .apply(this, o([
                            e.dateSelection, s, r
                        ], i)),
                    businessHourSegs: this
                        .sliceBusinessHours
                        .apply(this, o([
                            e.businessHours, t, n, r
                        ], i)),
                    fgEventSegs: l.fg,
                    bgEventSegs: l.bg,
                    eventDrag: this
                        .sliceEventDrag
                        .apply(this, o([
                            e.eventDrag, s, t, n
                        ], i)),
                    eventResize: this
                        .sliceEventResize
                        .apply(this, o([
                            e.eventResize, s, t, n
                        ], i)),
                    eventSelection: e.eventSelection
                }
            },
            e.prototype.sliceNowDate = function (e, t) {
                for (var n = [], r = 2; r < arguments.length; r++) 
                    n[r - 2] = arguments[r];
                return this
                    ._sliceDateSpan
                    .apply(this, o([
                        {
                            range: {
                                start: e,
                                end: $e(e, 1)
                            },
                            allDay: !1
                        }, {},
                        t
                    ], n))
            },
            e.prototype._sliceBusinessHours = function (e, t, n, r) {
                for (var i = [], a = 4; a < arguments.length; a++) 
                    i[a - 4] = arguments[a];
                return e
                    ? this
                        ._sliceEventStore
                        .apply(this, o([
                            wt(e, Da(t, Boolean(n)), r), {},
                            t,
                            n
                        ], i))
                        .bg
                    : []
            },
            e.prototype._sliceEventStore = function (e, t, n, r) {
                for (var o = [], i = 4; i < arguments.length; i++) 
                    o[i - 4] = arguments[i];
                if (e) {
                    var a = jn(e, t, Da(n, Boolean(r)), r);
                    return {
                        bg: this.sliceEventRanges(a.bg, o),
                        fg: this.sliceEventRanges(a.fg, o)
                    }
                }
                return {bg: [], fg: []}
            },
            e.prototype._sliceInteraction = function (e, t, n, r) {
                for (var o = [], i = 4; i < arguments.length; i++) 
                    o[i - 4] = arguments[i];
                if (!e) 
                    return null;
                var a = jn(e.mutatedEvents, t, Da(n, Boolean(r)), r);
                return {
                    segs: this.sliceEventRanges(a.fg, o),
                    affectedInstances: e.affectedEvents.instances,
                    isEvent: e.isEvent
                }
            },
            e.prototype._sliceDateSpan = function (e, t, n) {
                for (var r = [], i = 3; i < arguments.length; i++) 
                    r[i - 3] = arguments[i];
                if (!e) 
                    return [];
                for (
                    var a = cr(e, t, n),
                    s = this.sliceRange.apply(this, o([e.range], r)),
                    l = 0,
                    u = s;
                    l < u.length;
                    l++
                ) {
                    var c = u[l];
                    c.eventRange = a
                }
                return s
            },
            e.prototype.sliceEventRanges = function (e, t) {
                for (var n = [], r = 0, o = e; r < o.length; r++) {
                    var i = o[r];
                    n
                        .push
                        .apply(n, this.sliceEventRange(i, t))
                }
                return n
            },
            e.prototype.sliceEventRange = function (e, t) {
                var n = e.range;
                this.forceDayIfListItem && "list-item" === e.ui.display && (n = {
                    start: n.start,
                    end: Ke(n.start, 1)
                });
                for (
                    var r = this.sliceRange.apply(this, o([n], t)),
                    i = 0,
                    a = r;
                    i < a.length;
                    i++
                ) {
                    var s = a[i];
                    s.eventRange = e,
                    s.isStart = e.isStart && s.isStart,
                    s.isEnd = e.isEnd && s.isEnd
                }
                return r
            },
            e
        }();
    function Da(e, t) {
        var n = e.activeRange;
        return t
            ? n
            : {
                start: $e(n.start, e.slotMinTime.milliseconds),
                end: $e(n.end, e.slotMaxTime.milliseconds - 864e5)
            }
    }
    function ba(e, t, n) {
        var r = e.mutatedEvents.instances;
        for (var o in r) 
            if (!zn(t.validRange, r[o].range)) 
                return !1;
    return wa({
            eventDrag: e
        }, n)
    }
    function Ca(e, t, n) {
        return !!zn(t.validRange, e.range) && wa({
            dateSelection: e
        }, n)
    }
    function wa(e, t) {
        var n = t.getCurrentData(),
            o = r({
                businessHours: n.businessHours,
                dateSelection: "",
                eventStore: n.eventStore,
                eventUiBases: n.eventUiBases,
                eventSelection: "",
                eventDrag: null,
                eventResize: null
            }, e);
        return (t.pluginHooks.isPropsValid || Ra)(o, t)
    }
    function Ra(e, t, n, o) {
        return void 0 === n && (n = {}),
        !(e.eventDrag && !function (e, t, n, o) {
            var i = t.getCurrentData(),
                a = e.eventDrag,
                s = a.mutatedEvents,
                l = s.defs,
                u = s.instances,
                c = Zn(
                    l,
                    a.isEvent
                        ? e.eventUiBases
                        : {
                            "": i.selectionConfig
                        }
                );
            o && (c = gt(c, o));
            var d = (v = e.eventStore, g = a.affectedEvents.instances, {
                    defs: v.defs,
                    instances: vt(v.instances, (function (e) {
                        return !g[e.instanceId]
                    }))
                }),
                p = d.defs,
                f = d.instances,
                h = Zn(p, e.eventUiBases);
            var v,
                g;
            for (var m in u) {
                var y = u[m],
                    E = y.range,
                    S = c[y.defId],
                    D = l[y.defId];
                if (!_a(S.constraints, E, d, e.businessHours, t)) 
                    return !1;
                var b = t.options.eventOverlap,
                    C = "function" == typeof b
                        ? b
                        : null;
                for (var w in f) {
                    var R = f[w];
                    if (Fn(E, R.range)) {
                        if (!1 === h[R.defId].overlap && a.isEvent) 
                            return !1;
                        if (!1 === S.overlap) 
                            return !1;
                        if (C && !C(new Cr(t, p[R.defId], R), new Cr(t, D, y))) 
                            return !1
                    }
                }
                for (var _ = i.eventStore, T = 0, k = S.allows; T < k.length; T++) {
                    var x = k[T],
                        M = r(r({}, n), {
                            range: y.range,
                            allDay: D.allDay
                        }),
                        P = _.defs[D.defId],
                        I = _.instances[m],
                        N = void 0;
                    if (
                        N = P
                            ? new Cr(t, P, I)
                            : new Cr(t, D),
                        !x(pr(M, t), N)
                    ) 
                        return !1
                }
            }
            return !0
        }(e, t, n, o)) && !(e.dateSelection && !function (e, t, n, o) {
            var i = e.eventStore,
                a = i.defs,
                s = i.instances,
                l = e.dateSelection,
                u = l.range,
                c = t
                    .getCurrentData()
                    .selectionConfig;
            o && (c = o(c));
            if (!_a(c.constraints, u, i, e.businessHours, t)) 
                return !1;
            var d = t.options.selectOverlap,
                p = "function" == typeof d
                    ? d
                    : null;
            for (var f in s) {
                var h = s[f];
                if (Fn(u, h.range)) {
                    if (!1 === c.overlap) 
                        return !1;
                    if (p && !p(new Cr(t, a[h.defId], h), null)) 
                        return !1
                }
            }
            for (var v = 0, g = c.allows; v < g.length; v++) {
                if (!(0, g[v])(pr(r(r({}, n), l), t), null)) 
                    return !1
            }
            return !0
        }(e, t, n, o))
    }
    function _a(e, t, n, r, o) {
        for (var i = 0, a = e; i < a.length; i++) {
            if (!xa(Ta(a[i], t, n, r, o), t)) 
                return !1
        }
        return !0
    }
    function Ta(e, t, n, r, o) {
        return "businessHours" === e
            ? ka(wt(r, t, o))
            : "string" == typeof e
                ? ka(En(n, (function (t) {
                    return t.groupId === e
                })))
                : "object" == typeof e && e
                    ? ka(wt(e, t, o))
                    : []
    }
    function ka(e) {
        var t = e.instances,
            n = [];
        for (var r in t) 
            n.push(t[r].range);
        return n
    }
    function xa(e, t) {
        for (var n = 0, r = e; n < r.length; n++) {
            if (zn(r[n], t)) 
                return !0
        }
        return !1
    }
    var Ma = /^(visible|hidden)$/,
        Pa = function (e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.handleEl = function (e) {
                    t.el = e,
                    Io(t.props.elRef, e)
                },
                t
            }
            return n(t, e),
            t.prototype.render = function () {
                var e = this.props,
                    t = e.liquid,
                    n = e.liquidIsAbsolute,
                    r = t && n,
                    o = ["fc-scroller"];
                return t && (
                    n
                        ? o.push("fc-scroller-liquid-absolute")
                        : o.push("fc-scroller-liquid")
                ),
                mo("div", {
                    ref: this.handleEl,
                    className: o.join(" "),
                    style: {
                        overflowX: e.overflowX,
                        overflowY: e.overflowY,
                        left: r && -(e.overcomeLeft || 0) || "",
                        right: r && -(e.overcomeRight || 0) || "",
                        bottom: r && -(e.overcomeBottom || 0) || "",
                        marginLeft: !r && -(e.overcomeLeft || 0) || "",
                        marginRight: !r && -(e.overcomeRight || 0) || "",
                        marginBottom: !r && -(e.overcomeBottom || 0) || "",
                        maxHeight: e.maxHeight || ""
                    }
                }, e.children)
            },
            t.prototype.needsXScrolling = function () {
                if (Ma.test(this.props.overflowX)) 
                    return !1;
                for (
                    var e = this.el,
                    t = this.el.getBoundingClientRect().width - this.getYScrollbarWidth(),
                    n = e.children,
                    r = 0;
                    r < n.length;
                    r += 1
                ) {
                    if (n[r].getBoundingClientRect().width > t) 
                        return !0
                }
                return !1
            },
            t.prototype.needsYScrolling = function () {
                if (Ma.test(this.props.overflowY)) 
                    return !1;
                for (
                    var e = this.el,
                    t = this.el.getBoundingClientRect().height - this.getXScrollbarWidth(),
                    n = e.children,
                    r = 0;
                    r < n.length;
                    r += 1
                ) {
                    if (n[r].getBoundingClientRect().height > t) 
                        return !0
                }
                return !1
            },
            t.prototype.getXScrollbarWidth = function () {
                return Ma.test(this.props.overflowX)
                    ? 0
                    : this.el.offsetHeight - this.el.clientHeight
            },
            t.prototype.getYScrollbarWidth = function () {
                return Ma.test(this.props.overflowY)
                    ? 0
                    : this.el.offsetWidth - this.el.clientWidth
            },
            t
        }(xo),
        Ia = function () {
            function e(e) {
                var t = this;
                this.masterCallback = e,
                this.currentMap = {},
                this.depths = {},
                this.callbackMap = {},
                this.handleValue = function (e, n) {
                    var r = t,
                        o = r.depths,
                        i = r.currentMap,
                        a = !1,
                        s = !1;
                    null !== e
                        ? (a = n in i, i[n] = e, o[n] = (o[n] || 0) + 1, s = !0)
                        : (o[n] -= 1, o[n] || (delete i[n], delete t.callbackMap[n], a = !0)),
                    t.masterCallback && (
                        a && t.masterCallback(null, String(n)),
                        s && t.masterCallback(e, String(n))
                    )
                }
            }
            return e.prototype.createRef = function (e) {
                var t = this,
                    n = this.callbackMap[e];
                return n || (n = this.callbackMap[e] = function (n) {
                    t.handleValue(n, String(e))
                }),
                n
            },
            e.prototype.collect = function (e, t, n) {
                return Ct(this.currentMap, e, t, n)
            },
            e.prototype.getAll = function () {
                return yt(this.currentMap)
            },
            e
        }();
    function Na(e) {
        for (var t = 0, n = 0, r = be(e, ".fc-scrollgrid-shrink"); n < r.length; n++) {
            var o = r[n];
            t = Math.max(t, Ye(o))
        }
        return Math.ceil(t)
    }
    function Ha(e, t) {
        return e.liquid && t.liquid
    }
    function Oa(e, t) {
        return null != t.maxHeight || Ha(e, t)
    }
    function Aa(e, t, n) {
        var r = n.expandRows;
        return "function" == typeof t.content
            ? t.content(n)
            : mo("table", {
                className: [
                    t.tableClassName, e.syncRowHeights
                        ? "fc-scrollgrid-sync-table"
                        : ""
                ].join(" "),
                style: {
                    minWidth: n.tableMinWidth,
                    width: n.clientWidth,
                    height: r
                        ? n.clientHeight
                        : ""
                }
            }, n.tableColGroupNode, mo(
                "tbody",
                {},
                "function" == typeof t.rowContent
                    ? t.rowContent(n)
                    : t.rowContent
            ))
    }
    function Ua(e, t) {
        return Vt(e, t, Et)
    }
    function La(e, t) {
        for (var n = [], r = 0, i = e; r < i.length; r++) 
            for (var a = i[r], s = a.span || 1, l = 0; l < s; l += 1) 
                n.push(mo("col", {
                    style: {
                        width: "shrink" === a.width
                            ? Wa(t)
                            : a.width || "",
                        minWidth: a.minWidth || ""
                    }
                }));
    return mo.apply(void 0, o([
            "colgroup", {}
        ], n))
    }
    function Wa(e) {
        return null == e
            ? 4
            : e
    }
    function Va(e) {
        for (var t = 0, n = e; t < n.length; t++) {
            if ("shrink" === n[t].width) 
                return !0
        }
        return !1
    }
    function Fa(e, t) {
        var n = [
            "fc-scrollgrid", t
                .theme
                .getClass("table")
        ];
        return e && n.push("fc-scrollgrid-liquid"),
        n
    }
    function za(e, t) {
        var n = [
            "fc-scrollgrid-section", "fc-scrollgrid-section-" + e.type,
            e.className
        ];
        return t && e.liquid && null == e.maxHeight && n.push(
            "fc-scrollgrid-section-liquid"
        ),
        e.isSticky && n.push("fc-scrollgrid-section-sticky"),
        n
    }
    function Ba(e) {
        return mo("div", {
            className: "fc-scrollgrid-sticky-shim",
            style: {
                width: e.clientWidth,
                minWidth: e.tableMinWidth
            }
        })
    }
    function ja(e) {
        var t = e.stickyHeaderDates;
        return null != t && "auto" !== t || (
            t = "auto" === e.height || "auto" === e.viewHeight
        ),
        t
    }
    function Ga(e) {
        var t = e.stickyFooterScrollbar;
        return null != t && "auto" !== t || (
            t = "auto" === e.height || "auto" === e.viewHeight
        ),
        t
    }
    var qa = function (e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.processCols = Ft((function (e) {
                return e
            }), Ua),
            t.renderMicroColGroup = Ft(La),
            t.scrollerRefs = new Ia,
            t.scrollerElRefs = new Ia(t._handleScrollerEl.bind(t)),
            t.state = {
                shrinkWidth: null,
                forceYScrollbars: !1,
                scrollerClientWidths: {},
                scrollerClientHeights: {}
            },
            t.handleSizing = function () {
                t.setState(r({
                    shrinkWidth: t.computeShrinkWidth()
                }, t.computeScrollerDims()))
            },
            t
        }
        return n(t, e),
        t.prototype.render = function () {
            var e = this,
                t = e.props,
                n = e.state,
                r = e.context,
                i = t.sections || [],
                a = this.processCols(t.cols),
                s = this.renderMicroColGroup(a, n.shrinkWidth),
                l = Fa(t.liquid, r);
            t.collapsibleWidth && l.push("fc-scrollgrid-collapsible");
            for (
                var u,
                c = i.length,
                d = 0,
                p = [],
                f = [],
                h = [];
                d < c && "header" === (u = i[d]).type;
            ) 
                p.push(this.renderSection(u, s)),
                d += 1;
            for (; d < c && "body" === (u = i[d]).type;) 
                f.push(this.renderSection(u, s)),
                d += 1;
            for (; d < c && "footer" === (u = i[d]).type;) 
                h.push(this.renderSection(u, s)),
                d += 1;
            var v = !qr();
            return mo("table", {
                className: l.join(" "),
                style: {
                    height: t.height
                }
            }, Boolean(!v && p.length) && mo.apply(void 0, o([
                "thead", {}
            ], p)), Boolean(!v && f.length) && mo.apply(void 0, o([
                "tbody", {}
            ], f)), Boolean(!v && h.length) && mo.apply(void 0, o([
                "tfoot", {}
            ], h)), v && mo.apply(void 0, o(o(o([
                "tbody", {}
            ], p), f), h)))
        },
        t.prototype.renderSection = function (e, t) {
            return "outerContent" in e
                ? mo(So, {
                    key: e.key
                }, e.outerContent)
                : mo("tr", {
                    key: e.key,
                    className: za(e, this.props.liquid).join(" ")
                }, this.renderChunkTd(e, t, e.chunk))
        },
        t.prototype.renderChunkTd = function (e, t, n) {
            if ("outerContent" in n) 
                return n.outerContent;
            var r = this.props,
                o = this.state,
                i = o.forceYScrollbars,
                a = o.scrollerClientWidths,
                s = o.scrollerClientHeights,
                l = Oa(r, e),
                u = Ha(r, e),
                c = r.liquid
                    ? i
                        ? "scroll"
                        : l
                            ? "auto"
                            : "hidden"
                    : "visible",
                d = e.key,
                p = Aa(e, n, {
                    tableColGroupNode: t,
                    tableMinWidth: "",
                    clientWidth: r.collapsibleWidth || void 0 === a[d]
                        ? null
                        : a[d],
                    clientHeight: void 0 !== s[d]
                        ? s[d]
                        : null,
                    expandRows: e.expandRows,
                    syncRowHeights: !1,
                    rowSyncHeights: [],
                    reportRowHeightChange: function () {}
                });
            return mo("td", {
                ref: n.elRef
            }, mo("div", {
                className: "fc-scroller-harness" + (
                    u
                        ? " fc-scroller-harness-liquid"
                        : ""
                )
            }, mo(Pa, {
                ref: this
                    .scrollerRefs
                    .createRef(d),
                elRef: this
                    .scrollerElRefs
                    .createRef(d),
                overflowY: c,
                overflowX: r.liquid
                    ? "hidden"
                    : "visible",
                maxHeight: e.maxHeight,
                liquid: u,
                liquidIsAbsolute: !0
            }, p)))
        },
        t.prototype._handleScrollerEl = function (e, t) {
            var n = function (e, t) {
                for (var n = 0, r = e; n < r.length; n++) {
                    var o = r[n];
                    if (o.key === t) 
                        return o
                }
                return null
            }(this.props.sections, t);
            n && Io(n.chunk.scrollerElRef, e)
        },
        t.prototype.componentDidMount = function () {
            this.handleSizing(),
            this
                .context
                .addResizeHandler(this.handleSizing)
        },
        t.prototype.componentDidUpdate = function () {
            this.handleSizing()
        },
        t.prototype.componentWillUnmount = function () {
            this
                .context
                .removeResizeHandler(this.handleSizing)
        },
        t.prototype.computeShrinkWidth = function () {
            return Va(this.props.cols)
                ? Na(this.scrollerElRefs.getAll())
                : 0
        },
        t.prototype.computeScrollerDims = function () {
            var e = no(),
                t = this.scrollerRefs,
                n = this.scrollerElRefs,
                r = !1,
                o = {},
                i = {};
            for (var a in t.currentMap) {
                var s = t.currentMap[a];
                if (s && s.needsYScrolling()) {
                    r = !0;
                    break
                }
            }
            for (var l = 0, u = this.props.sections; l < u.length; l++) {
                a = u[l].key;
                var c = n.currentMap[a];
                if (c) {
                    var d = c.parentNode;
                    o[a] = Math.floor(d.getBoundingClientRect().width - (
                        r
                            ? e.y
                            : 0
                    )),
                    i[a] = Math.floor(d.getBoundingClientRect().height)
                }
            }
            return {forceYScrollbars: r, scrollerClientWidths: o, scrollerClientHeights: i}
        },
        t
    }(xo);
    qa.addStateEquality({scrollerClientWidths: Et, scrollerClientHeights: Et});
    var Ya = function (e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.elRef = Eo(),
                t
            }
            return n(t, e),
            t.prototype.render = function () {
                var e = this.props,
                    t = this.context,
                    n = t.options,
                    r = e.seg,
                    o = r.eventRange,
                    i = o.ui,
                    a = {
                        event: new Cr(t, o.def, o.instance),
                        view: t.viewApi,
                        timeText: e.timeText,
                        textColor: i.textColor,
                        backgroundColor: i.backgroundColor,
                        borderColor: i.borderColor,
                        isDraggable: !e.disableDragging && Jn(r, t),
                        isStartResizable: !e.disableResizing && Qn(r, t),
                        isEndResizable: !e.disableResizing && er(r),
                        isMirror: Boolean(e.isDragging || e.isResizing || e.isDateSelecting),
                        isStart: Boolean(r.isStart),
                        isEnd: Boolean(r.isEnd),
                        isPast: Boolean(e.isPast),
                        isFuture: Boolean(e.isFuture),
                        isToday: Boolean(e.isToday),
                        isSelected: Boolean(e.isSelected),
                        isDragging: Boolean(e.isDragging),
                        isResizing: Boolean(e.isResizing)
                    },
                    s = rr(a).concat(i.classNames);
                return mo(Lo, {
                    hookProps: a,
                    classNames: n.eventClassNames,
                    content: n.eventContent,
                    defaultContent: e.defaultContent,
                    didMount: n.eventDidMount,
                    willUnmount: n.eventWillUnmount,
                    elRef: this.elRef
                }, (function (t, n, r, o) {
                    return e.children(t, s.concat(n), r, o, a)
                }))
            },
            t.prototype.componentDidMount = function () {
                qn(this.elRef.current, this.props.seg)
            },
            t.prototype.componentDidUpdate = function (e) {
                var t = this.props.seg;
                t !== e.seg && qn(this.elRef.current, t)
            },
            t
        }(xo),
        Za = function (e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return n(t, e),
            t.prototype.render = function () {
                var e = this.props,
                    t = this.context,
                    n = e.seg,
                    o = t.options.eventTimeFormat || e.defaultTimeFormat,
                    i = tr(n, o, t, e.defaultDisplayEventTime, e.defaultDisplayEventEnd);
                return mo(Ya, {
                    seg: n,
                    timeText: i,
                    disableDragging: e.disableDragging,
                    disableResizing: e.disableResizing,
                    defaultContent: e.defaultContent || Xa,
                    isDragging: e.isDragging,
                    isResizing: e.isResizing,
                    isDateSelecting: e.isDateSelecting,
                    isSelected: e.isSelected,
                    isPast: e.isPast,
                    isFuture: e.isFuture,
                    isToday: e.isToday
                }, (function (t, o, i, a, s) {
                    return mo(
                        "a",
                        r({
                            className: e
                                .extraClassNames
                                .concat(o)
                                .join(" "),
                            style: {
                                borderColor: s.borderColor,
                                backgroundColor: s.backgroundColor
                            },
                            ref: t
                        }, function (e) {
                            var t = e.eventRange.def.url;
                            return t
                                ? {
                                    href: t
                                }
                                : {}
                        }(n)),
                        mo("div", {
                            className: "fc-event-main",
                            ref: i,
                            style: {
                                color: s.textColor
                            }
                        }, a),
                        s.isStartResizable && mo("div", {className: "fc-event-resizer fc-event-resizer-start"}),
                        s.isEndResizable && mo("div", {className: "fc-event-resizer fc-event-resizer-end"})
                    )
                }))
            },
            t
        }(xo);
    function Xa(e) {
        return mo("div", {
            className: "fc-event-main-frame"
        }, e.timeText && mo("div", {
            className: "fc-event-time"
        }, e.timeText), mo("div", {
            className: "fc-event-title-container"
        }, mo("div", {
            className: "fc-event-title fc-sticky"
        }, e.event.title || mo(So, null, " "))))
    }
    var Ka = function (e) {
            return mo(_o.Consumer, null, (function (t) {
                var n = t.options,
                    r = {
                        isAxis: e.isAxis,
                        date: t
                            .dateEnv
                            .toDate(e.date),
                        view: t.viewApi
                    };
                return mo(Lo, {
                    hookProps: r,
                    classNames: n.nowIndicatorClassNames,
                    content: n.nowIndicatorContent,
                    didMount: n.nowIndicatorDidMount,
                    willUnmount: n.nowIndicatorWillUnmount
                }, e.children)
            }))
        },
        $a = nn({day: "numeric"}),
        Ja = function (e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return n(t, e),
            t.prototype.render = function () {
                var e = this.props,
                    t = this.context,
                    n = t.options,
                    r = Qa({
                        date: e.date,
                        dateProfile: e.dateProfile,
                        todayRange: e.todayRange,
                        showDayNumber: e.showDayNumber,
                        extraProps: e.extraHookProps,
                        viewApi: t.viewApi,
                        dateEnv: t.dateEnv
                    });
                return mo(Vo, {
                    hookProps: r,
                    content: n.dayCellContent,
                    defaultContent: e.defaultContent
                }, e.children)
            },
            t
        }(xo);
    function Qa(e) {
        var t = e.date,
            n = e.dateEnv,
            o = Kr(t, e.todayRange, null, e.dateProfile);
        return r(r(r({
            date: n.toDate(t),
            view: e.viewApi
        }, o), {
            dayNumberText: e.showDayNumber
                ? n.format(t, $a)
                : ""
        }), e.extraProps)
    }
    var es = function (e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.refineHookProps = zt(Qa),
            t.normalizeClassNames = Bo(),
            t
        }
        return n(t, e),
        t.prototype.render = function () {
            var e = this.props,
                t = this.context,
                n = t.options,
                r = this.refineHookProps({
                    date: e.date,
                    dateProfile: e.dateProfile,
                    todayRange: e.todayRange,
                    showDayNumber: e.showDayNumber,
                    extraProps: e.extraHookProps,
                    viewApi: t.viewApi,
                    dateEnv: t.dateEnv
                }),
                o = $r(r, t.theme).concat(
                    r.isDisabled
                        ? []
                        : this.normalizeClassNames(n.dayCellClassNames, r)
                ),
                i = r.isDisabled
                    ? {}
                    : {
                        "data-date": Ut(e.date)
                    };
            return mo(zo, {
                hookProps: r,
                didMount: n.dayCellDidMount,
                willUnmount: n.dayCellWillUnmount,
                elRef: e.elRef
            }, (function (t) {
                return e.children(t, o, i, r.isDisabled)
            }))
        },
        t
    }(xo);
    function ts(e) {
        return mo("div", {
            className: "fc-" + e
        })
    }
    var ns = function (e) {
        return mo(Ya, {
            defaultContent: rs,
            seg: e.seg,
            timeText: "",
            disableDragging: !0,
            disableResizing: !0,
            isDragging: !1,
            isResizing: !1,
            isDateSelecting: !1,
            isSelected: !1,
            isPast: e.isPast,
            isFuture: e.isFuture,
            isToday: e.isToday
        }, (function (e, t, n, r, o) {
            return mo("div", {
                ref: e,
                className: ["fc-bg-event"]
                    .concat(t)
                    .join(" "),
                style: {
                    backgroundColor: o.backgroundColor
                }
            }, r)
        }))
    };
    function rs(e) {
        return e.event.title && mo("div", {
            className: "fc-event-title"
        }, e.event.title)
    }
    var os = function (e) {
        return mo(_o.Consumer, null, (function (t) {
            var n = t.dateEnv,
                r = t.options,
                o = e.date,
                i = r.weekNumberFormat || e.defaultFormat,
                a = n.computeWeekNumber(o),
                s = n.format(o, i);
            return mo(Lo, {
                hookProps: {
                    num: a,
                    text: s,
                    date: o
                },
                classNames: r.weekNumberClassNames,
                content: r.weekNumberContent,
                defaultContent: is,
                didMount: r.weekNumberDidMount,
                willUnmount: r.weekNumberWillUnmount
            }, e.children)
        }))
    };
    function is(e) {
        return e.text
    }
    var as = function (e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.handleRootEl = function (e) {
                    t.rootEl = e,
                    t.props.elRef && Io(t.props.elRef, e)
                },
                t.handleDocumentMousedown = function (e) {
                    var n = _e(e);
                    t
                        .rootEl
                        .contains(n) || t.handleCloseClick()
                },
                t.handleCloseClick = function () {
                    var e = t.props.onClose;
                    e && e()
                },
                t
            }
            return n(t, e),
            t.prototype.render = function () {
                var e = this.context.theme,
                    t = this.props,
                    n = ["fc-popover", e.getClass("popover")].concat(t.extraClassNames || []);
                return bo(mo("div", r({
                    className: n.join(" ")
                }, t.extraAttrs, {ref: this.handleRootEl}), mo("div", {
                    className: "fc-popover-header " + e.getClass("popoverHeader")
                }, mo("span", {
                    className: "fc-popover-title"
                }, t.title), mo("span", {
                    className: "fc-popover-close " + e.getIconClass("close"),
                    onClick: this.handleCloseClick
                })), mo("div", {
                    className: "fc-popover-body " + e.getClass("popoverContent")
                }, t.children)), t.parentEl)
            },
            t.prototype.componentDidMount = function () {
                document.addEventListener("mousedown", this.handleDocumentMousedown),
                this.updateSize()
            },
            t.prototype.componentWillUnmount = function () {
                document.removeEventListener("mousedown", this.handleDocumentMousedown)
            },
            t.prototype.updateSize = function () {
                var e = this.context.isRtl,
                    t = this.props,
                    n = t.alignmentEl,
                    r = t.alignGridTop,
                    o = this.rootEl,
                    i = function (e) {
                        for (
                            var t = so(e),
                            n = e.getBoundingClientRect(),
                            r = 0,
                            o = t;
                            r < o.length;
                            r++
                        ) {
                            var i = zr(n, o[r].getBoundingClientRect());
                            if (!i) 
                                return null;
                            n = i
                        }
                        return n
                    }(n);
                if (i) {
                    var a = o.getBoundingClientRect(),
                        s = r
                            ? Se(n, ".fc-scrollgrid")
                                .getBoundingClientRect()
                                .top
                            : i.top,
                        l = e
                            ? i.right - a.width
                            : i.left;
                    s = Math.max(s, 10),
                    l = Math.min(l, document.documentElement.clientWidth - 10 - a.width),
                    l = Math.max(l, 10);
                    var u = o
                        .offsetParent
                        .getBoundingClientRect();
                    we(o, {
                        top: s - u.top,
                        left: l - u.left
                    })
                }
            },
            t
        }(xo),
        ss = function (e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.handleRootEl = function (e) {
                    t.rootEl = e,
                    e
                        ? t
                            .context
                            .registerInteractiveComponent(t, {
                                el: e,
                                useEventCenter: !1
                            })
                        : t
                            .context
                            .unregisterInteractiveComponent(t)
                },
                t
            }
            return n(t, e),
            t.prototype.render = function () {
                var e = this.context,
                    t = e.options,
                    n = e.dateEnv,
                    r = this.props,
                    o = r.startDate,
                    i = r.todayRange,
                    a = r.dateProfile,
                    s = n.format(o, t.dayPopoverFormat);
                return mo(es, {
                    date: o,
                    dateProfile: a,
                    todayRange: i,
                    elRef: this.handleRootEl
                }, (function (e, t, n) {
                    return mo(as, {
                        elRef: e,
                        title: s,
                        extraClassNames: ["fc-more-popover"].concat(t),
                        extraAttrs: n,
                        parentEl: r.parentEl,
                        alignmentEl: r.alignmentEl,
                        alignGridTop: r.alignGridTop,
                        onClose: r.onClose
                    }, mo(Ja, {
                        date: o,
                        dateProfile: a,
                        todayRange: i
                    }, (function (e, t) {
                        return t && mo("div", {
                            className: "fc-more-popover-misc",
                            ref: e
                        }, t)
                    })), r.children)
                }))
            },
            t.prototype.queryHit = function (e, t, n, o) {
                var i = this.rootEl,
                    a = this.props;
                return e >= 0 && e < n && t >= 0 && t < o
                    ? {
                        dateProfile: a.dateProfile,
                        dateSpan: r({
                            allDay: !0,
                            range: {
                                start: a.startDate,
                                end: a.endDate
                            }
                        }, a.extraDateSpan),
                        dayEl: i,
                        rect: {
                            left: 0,
                            top: 0,
                            right: n,
                            bottom: o
                        },
                        layer: 1
                    }
                    : null
            },
            t
        }(No),
        ls = function (e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.linkElRef = Eo(),
                t.state = {
                    isPopoverOpen: !1
                },
                t.handleClick = function (e) {
                    var n = t,
                        r = n.props,
                        o = n.context,
                        i = o.options.moreLinkClick,
                        a = cs(r).start;
                    function s(e) {
                        var t = e.eventRange,
                            n = t.def,
                            r = t.instance,
                            i = t.range;
                        return {
                            event: new Cr(o, n, r),
                            start: o
                                .dateEnv
                                .toDate(i.start),
                            end: o
                                .dateEnv
                                .toDate(i.end),
                            isStart: e.isStart,
                            isEnd: e.isEnd
                        }
                    }
                    "function" == typeof i && (i = i({
                        date: a,
                        allDay: Boolean(r.allDayDate),
                        allSegs: r
                            .allSegs
                            .map(s),
                        hiddenSegs: r
                            .hiddenSegs
                            .map(s),
                        jsEvent: e,
                        view: o.viewApi
                    })),
                    i && "popover" !== i
                        ? "string" == typeof i && o
                            .calendarApi
                            .zoomTo(a, i)
                        : t.setState({
                            isPopoverOpen: !0
                        })
                },
                t.handlePopoverClose = function () {
                    t.setState({
                        isPopoverOpen: !1
                    })
                },
                t
            }
            return n(t, e),
            t.prototype.render = function () {
                var e = this,
                    t = this.props;
                return mo(_o.Consumer, null, (function (n) {
                    var r = n.viewApi,
                        o = n.options,
                        i = n.calendarApi,
                        a = o.moreLinkText,
                        s = t.moreCnt,
                        l = cs(t),
                        u = {
                            num: s,
                            shortText: "+" + s,
                            text: "function" == typeof a
                                ? a.call(i, s)
                                : "+" + s + " " + a,
                            view: r
                        };
                    return mo(So, null, Boolean(t.moreCnt) && mo(Lo, {
                        elRef: e.linkElRef,
                        hookProps: u,
                        classNames: o.moreLinkClassNames,
                        content: o.moreLinkContent,
                        defaultContent: t.defaultContent || us,
                        didMount: o.moreLinkDidMount,
                        willUnmount: o.moreLinkWillUnmount
                    }, (function (n, r, o, i) {
                        return t.children(n, ["fc-more-link"].concat(r), o, i, e.handleClick)
                    })), e.state.isPopoverOpen && mo(ss, {
                        startDate: l.start,
                        endDate: l.end,
                        dateProfile: t.dateProfile,
                        todayRange: t.todayRange,
                        extraDateSpan: t.extraDateSpan,
                        parentEl: e.parentEl,
                        alignmentEl: t.alignmentElRef.current,
                        alignGridTop: t.alignGridTop,
                        onClose: e.handlePopoverClose
                    }, t.popoverContent()))
                }))
            },
            t.prototype.componentDidMount = function () {
                this.updateParentEl()
            },
            t.prototype.componentDidUpdate = function () {
                this.updateParentEl()
            },
            t.prototype.updateParentEl = function () {
                this.linkElRef.current && (
                    this.parentEl = Se(this.linkElRef.current, ".fc-view-harness")
                )
            },
            t
        }(xo);
    function us(e) {
        return e.text
    }
    function cs(e) {
        if (e.allDayDate) 
            return {
                start: e.allDayDate,
                end: Ke(e.allDayDate, 1)
            };
        var t,
            n = e.hiddenSegs;
        return {
            start: ds(n),
            end: (t = n, t.reduce(fs).eventRange.range.end)
        }
    }
    function ds(e) {
        return e
            .reduce(ps)
            .eventRange
            .range
            .start
    }
    function ps(e, t) {
        return e.eventRange.range.start < t.eventRange.range.start
            ? e
            : t
    }
    function fs(e, t) {
        return e.eventRange.range.end > t.eventRange.range.end
            ? e
            : t
    }
    var hs = function (e) {
        function t(t, n) {
            void 0 === n && (n = {});
            var o = e.call(this) || this;
            return o.isRendering = !1,
            o.isRendered = !1,
            o.currentClassNames = [],
            o.customContentRenderId = 0,
            o.handleAction = function (e) {
                switch (e.type) {
                    case "SET_EVENT_DRAG":
                    case "SET_EVENT_RESIZE":
                        o
                            .renderRunner
                            .tryDrain()
                }
            },
            o.handleData = function (e) {
                o.currentData = e,
                o
                    .renderRunner
                    .request(e.calendarOptions.rerenderDelay)
            },
            o.handleRenderRequest = function () {
                if (o.isRendering) {
                    o.isRendered = !0;
                    var e = o.currentData;
                    yo(mo(la, {
                        options: e.calendarOptions,
                        theme: e.theme,
                        emitter: e.emitter
                    }, (function (t, n, i, a) {
                        return o.setClassNames(t),
                        o.setHeight(n),
                        mo(Wo.Provider, {
                            value: o.customContentRenderId
                        }, mo(ia, r({
                            isHeightAuto: i,
                            forPrint: a
                        }, e)))
                    })), o.el)
                } else 
                    o.isRendered && (
                        o.isRendered = !1,
                        wo(o.el),
                        o.setClassNames([]),
                        o.setHeight("")
                    );
                Co()
            },
            o.el = t,
            o.renderRunner = new bi(o.handleRenderRequest),
            new Ri(
                {optionOverrides: n, calendarApi: o, onAction: o.handleAction, onData: o.handleData}
            ),
            o
        }
        return n(t, e),
        Object.defineProperty(t.prototype, "view", {
            get: function () {
                return this.currentData.viewApi
            },
            enumerable: !1,
            configurable: !0
        }),
        t.prototype.render = function () {
            var e = this.isRendering;
            e
                ? this.customContentRenderId += 1
                : this.isRendering = !0,
            this
                .renderRunner
                .request(),
            e && this.updateSize()
        },
        t.prototype.destroy = function () {
            this.isRendering && (this.isRendering = !1, this.renderRunner.request())
        },
        t.prototype.updateSize = function () {
            e
                .prototype
                .updateSize
                .call(this),
            Co()
        },
        t.prototype.batchRendering = function (e) {
            this
                .renderRunner
                .pause("batchRendering"),
            e(),
            this
                .renderRunner
                .resume("batchRendering")
        },
        t.prototype.pauseRendering = function () {
            this
                .renderRunner
                .pause("pauseRendering")
        },
        t.prototype.resumeRendering = function () {
            this
                .renderRunner
                .resume("pauseRendering", !0)
        },
        t.prototype.resetOptions = function (e, t) {
            this
                .currentDataManager
                .resetOptions(e, t)
        },
        t.prototype.setClassNames = function (e) {
            if (!Vt(e, this.currentClassNames)) {
                for (
                    var t = this.el.classList,
                    n = 0,
                    r = this.currentClassNames;
                    n < r.length;
                    n++
                ) {
                    var o = r[n];
                    t.remove(o)
                }
                for (var i = 0, a = e; i < a.length; i++) {
                    o = a[i];
                    t.add(o)
                }
                this.currentClassNames = e
            }
        },
        t.prototype.setHeight = function (e) {
            Re(this.el, "height", e)
        },
        t
    }(br);
    $i.touchMouseIgnoreWait = 500;
    var vs = 0,
        gs = 0,
        ms = !1,
        ys = function () {
            function e(e) {
                var t = this;
                this.subjectEl = null,
                this.selector = "",
                this.handleSelector = "",
                this.shouldIgnoreMove = !1,
                this.shouldWatchScroll = !0,
                this.isDragging = !1,
                this.isTouchDragging = !1,
                this.wasTouchScroll = !1,
                this.handleMouseDown = function (e) {
                    if (!t.shouldIgnoreMouse() && function (e) {
                        return 0 === e.button && !e.ctrlKey
                    }(e) && t.tryStart(e)) {
                        var n = t.createEventFromMouse(e, !0);
                        t
                            .emitter
                            .trigger("pointerdown", n),
                        t.initScrollWatch(n),
                        t.shouldIgnoreMove || document.addEventListener("mousemove", t.handleMouseMove),
                        document.addEventListener("mouseup", t.handleMouseUp)
                    }
                },
                this.handleMouseMove = function (e) {
                    var n = t.createEventFromMouse(e);
                    t.recordCoords(n),
                    t
                        .emitter
                        .trigger("pointermove", n)
                },
                this.handleMouseUp = function (e) {
                    document.removeEventListener("mousemove", t.handleMouseMove),
                    document.removeEventListener("mouseup", t.handleMouseUp),
                    t
                        .emitter
                        .trigger("pointerup", t.createEventFromMouse(e)),
                    t.cleanup()
                },
                this.handleTouchStart = function (e) {
                    if (t.tryStart(e)) {
                        t.isTouchDragging = !0;
                        var n = t.createEventFromTouch(e, !0);
                        t
                            .emitter
                            .trigger("pointerdown", n),
                        t.initScrollWatch(n);
                        var r = e.target;
                        t.shouldIgnoreMove || r.addEventListener("touchmove", t.handleTouchMove),
                        r.addEventListener("touchend", t.handleTouchEnd),
                        r.addEventListener("touchcancel", t.handleTouchEnd),
                        window.addEventListener("scroll", t.handleTouchScroll, !0)
                    }
                },
                this.handleTouchMove = function (e) {
                    var n = t.createEventFromTouch(e);
                    t.recordCoords(n),
                    t
                        .emitter
                        .trigger("pointermove", n)
                },
                this.handleTouchEnd = function (e) {
                    if (t.isDragging) {
                        var n = e.target;
                        n.removeEventListener("touchmove", t.handleTouchMove),
                        n.removeEventListener("touchend", t.handleTouchEnd),
                        n.removeEventListener("touchcancel", t.handleTouchEnd),
                        window.removeEventListener("scroll", t.handleTouchScroll, !0),
                        t
                            .emitter
                            .trigger("pointerup", t.createEventFromTouch(e)),
                        t.cleanup(),
                        t.isTouchDragging = !1,
                        vs += 1,
                        setTimeout((function () {
                            vs -= 1
                        }), $i.touchMouseIgnoreWait)
                    }
                },
                this.handleTouchScroll = function () {
                    t.wasTouchScroll = !0
                },
                this.handleScroll = function (e) {
                    if (!t.shouldIgnoreMove) {
                        var n = window.pageXOffset - t.prevScrollX + t.prevPageX,
                            r = window.pageYOffset - t.prevScrollY + t.prevPageY;
                        t
                            .emitter
                            .trigger("pointermove", {
                                origEvent: e,
                                isTouch: t.isTouchDragging,
                                subjectEl: t.subjectEl,
                                pageX: n,
                                pageY: r,
                                deltaX: n - t.origPageX,
                                deltaY: r - t.origPageY
                            })
                    }
                },
                this.containerEl = e,
                this.emitter = new uo,
                e.addEventListener("mousedown", this.handleMouseDown),
                e.addEventListener("touchstart", this.handleTouchStart, {
                    passive: !0
                }),
                1 === (gs += 1) && window.addEventListener("touchmove", Es, {
                    passive: !1
                })
            }
            return e.prototype.destroy = function () {
                this
                    .containerEl
                    .removeEventListener("mousedown", this.handleMouseDown),
                this
                    .containerEl
                    .removeEventListener("touchstart", this.handleTouchStart, {
                        passive: !0
                    }),
                (gs -= 1) || window.removeEventListener("touchmove", Es, {
                    passive: !1
                })
            },
            e.prototype.tryStart = function (e) {
                var t = this.querySubjectEl(e),
                    n = e.target;
                return !(!t || this.handleSelector && !Se(n, this.handleSelector)) && (
                    this.subjectEl = t,
                    this.isDragging = !0,
                    this.wasTouchScroll = !1,
                    !0
                )
            },
            e.prototype.cleanup = function () {
                ms = !1,
                this.isDragging = !1,
                this.subjectEl = null,
                this.destroyScrollWatch()
            },
            e.prototype.querySubjectEl = function (e) {
                return this.selector
                    ? Se(e.target, this.selector)
                    : this.containerEl
            },
            e.prototype.shouldIgnoreMouse = function () {
                return vs || this.isTouchDragging
            },
            e.prototype.cancelTouchScroll = function () {
                this.isDragging && (ms = !0)
            },
            e.prototype.initScrollWatch = function (e) {
                this.shouldWatchScroll && (
                    this.recordCoords(e),
                    window.addEventListener("scroll", this.handleScroll, !0)
                )
            },
            e.prototype.recordCoords = function (e) {
                this.shouldWatchScroll && (
                    this.prevPageX = e.pageX,
                    this.prevPageY = e.pageY,
                    this.prevScrollX = window.pageXOffset,
                    this.prevScrollY = window.pageYOffset
                )
            },
            e.prototype.destroyScrollWatch = function () {
                this.shouldWatchScroll && window.removeEventListener(
                    "scroll",
                    this.handleScroll,
                    !0
                )
            },
            e.prototype.createEventFromMouse = function (e, t) {
                var n = 0,
                    r = 0;
                return t
                    ? (this.origPageX = e.pageX, this.origPageY = e.pageY)
                    : (n = e.pageX - this.origPageX, r = e.pageY - this.origPageY), {
                    origEvent: e,
                    isTouch: !1,
                    subjectEl: this.subjectEl,
                    pageX: e.pageX,
                    pageY: e.pageY,
                    deltaX: n,
                    deltaY: r
                }
            },
            e.prototype.createEventFromTouch = function (e, t) {
                var n,
                    r,
                    o = e.touches,
                    i = 0,
                    a = 0;
                return o && o.length
                    ? (n = o[0].pageX, r = o[0].pageY)
                    : (n = e.pageX, r = e.pageY),
                t
                    ? (this.origPageX = n, this.origPageY = r)
                    : (i = n - this.origPageX, a = r - this.origPageY), {
                    origEvent: e,
                    isTouch: !0,
                    subjectEl: this.subjectEl,
                    pageX: n,
                    pageY: r,
                    deltaX: i,
                    deltaY: a
                }
            },
            e
        }();
    function Es(e) {
        ms && e.preventDefault()
    }
    var Ss = function () {
            function e() {
                this.isVisible = !1,
                this.sourceEl = null,
                this.mirrorEl = null,
                this.sourceElRect = null,
                this.parentNode = document.body,
                this.zIndex = 9999,
                this.revertDuration = 0
            }
            return e.prototype.start = function (e, t, n) {
                this.sourceEl = e,
                this.sourceElRect = this
                    .sourceEl
                    .getBoundingClientRect(),
                this.origScreenX = t - window.pageXOffset,
                this.origScreenY = n - window.pageYOffset,
                this.deltaX = 0,
                this.deltaY = 0,
                this.updateElPosition()
            },
            e.prototype.handleMove = function (e, t) {
                this.deltaX = e - window.pageXOffset - this.origScreenX,
                this.deltaY = t - window.pageYOffset - this.origScreenY,
                this.updateElPosition()
            },
            e.prototype.setIsVisible = function (e) {
                e
                    ? this.isVisible || (
                        this.mirrorEl && (this.mirrorEl.style.display = ""),
                        this.isVisible = e,
                        this.updateElPosition()
                    )
                    : this.isVisible && (
                        this.mirrorEl && (this.mirrorEl.style.display = "none"),
                        this.isVisible = e
                    )
            },
            e.prototype.stop = function (e, t) {
                var n = this,
                    r = function () {
                        n.cleanup(),
                        t()
                    };
                e && this.mirrorEl && this.isVisible && this.revertDuration && (
                    this.deltaX || this.deltaY
                )
                    ? this.doRevertAnimation(r, this.revertDuration)
                    : setTimeout(r, 0)
            },
            e.prototype.doRevertAnimation = function (e, t) {
                var n = this.mirrorEl,
                    r = this
                        .sourceEl
                        .getBoundingClientRect();
                n.style.transition = "top " + t + "ms,left " + t + "ms",
                we(n, {
                    left: r.left,
                    top: r.top
                }),
                Pe(n, (function () {
                    n.style.transition = "",
                    e()
                }))
            },
            e.prototype.cleanup = function () {
                this.mirrorEl && (Ee(this.mirrorEl), this.mirrorEl = null),
                this.sourceEl = null
            },
            e.prototype.updateElPosition = function () {
                this.sourceEl && this.isVisible && we(this.getMirrorEl(), {
                    left: this.sourceElRect.left + this.deltaX,
                    top: this.sourceElRect.top + this.deltaY
                })
            },
            e.prototype.getMirrorEl = function () {
                var e = this.sourceElRect,
                    t = this.mirrorEl;
                return t || (
                    (t = this.mirrorEl = this.sourceEl.cloneNode(!0)).classList.add("fc-unselectable"),
                    t.classList.add("fc-event-dragging"),
                    we(t, {
                        position: "fixed",
                        zIndex: this.zIndex,
                        visibility: "",
                        boxSizing: "border-box",
                        width: e.right - e.left,
                        height: e.bottom - e.top,
                        right: "auto",
                        bottom: "auto",
                        margin: 0
                    }),
                    this.parentNode.appendChild(t)
                ),
                t
            },
            e
        }(),
        Ds = function (e) {
            function t(t, n) {
                var r = e.call(this) || this;
                return r.handleScroll = function () {
                    r.scrollTop = r
                        .scrollController
                        .getScrollTop(),
                    r.scrollLeft = r
                        .scrollController
                        .getScrollLeft(),
                    r.handleScrollChange()
                },
                r.scrollController = t,
                r.doesListening = n,
                r.scrollTop = r.origScrollTop = t.getScrollTop(),
                r.scrollLeft = r.origScrollLeft = t.getScrollLeft(),
                r.scrollWidth = t.getScrollWidth(),
                r.scrollHeight = t.getScrollHeight(),
                r.clientWidth = t.getClientWidth(),
                r.clientHeight = t.getClientHeight(),
                r.clientRect = r.computeClientRect(),
                r.doesListening && r
                    .getEventTarget()
                    .addEventListener("scroll", r.handleScroll),
                r
            }
            return n(t, e),
            t.prototype.destroy = function () {
                this.doesListening && this
                    .getEventTarget()
                    .removeEventListener("scroll", this.handleScroll)
            },
            t.prototype.getScrollTop = function () {
                return this.scrollTop
            },
            t.prototype.getScrollLeft = function () {
                return this.scrollLeft
            },
            t.prototype.setScrollTop = function (e) {
                this
                    .scrollController
                    .setScrollTop(e),
                this.doesListening || (
                    this.scrollTop = Math.max(Math.min(e, this.getMaxScrollTop()), 0),
                    this.handleScrollChange()
                )
            },
            t.prototype.setScrollLeft = function (e) {
                this
                    .scrollController
                    .setScrollLeft(e),
                this.doesListening || (
                    this.scrollLeft = Math.max(Math.min(e, this.getMaxScrollLeft()), 0),
                    this.handleScrollChange()
                )
            },
            t.prototype.getClientWidth = function () {
                return this.clientWidth
            },
            t.prototype.getClientHeight = function () {
                return this.clientHeight
            },
            t.prototype.getScrollWidth = function () {
                return this.scrollWidth
            },
            t.prototype.getScrollHeight = function () {
                return this.scrollHeight
            },
            t.prototype.handleScrollChange = function () {},
            t
        }(po),
        bs = function (e) {
            function t(t, n) {
                return e.call(this, new fo(t), n) || this
            }
            return n(t, e),
            t.prototype.getEventTarget = function () {
                return this.scrollController.el
            },
            t.prototype.computeClientRect = function () {
                return io(this.scrollController.el)
            },
            t
        }(Ds),
        Cs = function (e) {
            function t(t) {
                return e.call(this, new ho, t) || this
            }
            return n(t, e),
            t.prototype.getEventTarget = function () {
                return window
            },
            t.prototype.computeClientRect = function () {
                return {
                    left: this.scrollLeft,
                    right: this.scrollLeft + this.clientWidth,
                    top: this.scrollTop,
                    bottom: this.scrollTop + this.clientHeight
                }
            },
            t.prototype.handleScrollChange = function () {
                this.clientRect = this.computeClientRect()
            },
            t
        }(Ds),
        ws = "function" == typeof performance
            ? performance.now
            : Date.now,
        Rs = function () {
            function e() {
                var e = this;
                this.isEnabled = !0,
                this.scrollQuery = [
                    window, ".fc-scroller"
                ],
                this.edgeThreshold = 50,
                this.maxVelocity = 300,
                this.pointerScreenX = null,
                this.pointerScreenY = null,
                this.isAnimating = !1,
                this.scrollCaches = null,
                this.everMovedUp = !1,
                this.everMovedDown = !1,
                this.everMovedLeft = !1,
                this.everMovedRight = !1,
                this.animate = function () {
                    if (e.isAnimating) {
                        var t = e.computeBestEdge(
                            e.pointerScreenX + window.pageXOffset,
                            e.pointerScreenY + window.pageYOffset
                        );
                        if (t) {
                            var n = ws();
                            e.handleSide(t, (n - e.msSinceRequest) / 1e3),
                            e.requestAnimation(n)
                        } else 
                            e.isAnimating = !1
                    }
                }
            }
            return e.prototype.start = function (e, t) {
                this.isEnabled && (
                    this.scrollCaches = this.buildCaches(),
                    this.pointerScreenX = null,
                    this.pointerScreenY = null,
                    this.everMovedUp = !1,
                    this.everMovedDown = !1,
                    this.everMovedLeft = !1,
                    this.everMovedRight = !1,
                    this.handleMove(e, t)
                )
            },
            e.prototype.handleMove = function (e, t) {
                if (this.isEnabled) {
                    var n = e - window.pageXOffset,
                        r = t - window.pageYOffset,
                        o = null === this.pointerScreenY
                            ? 0
                            : r - this.pointerScreenY,
                        i = null === this.pointerScreenX
                            ? 0
                            : n - this.pointerScreenX;
                    o < 0
                        ? this.everMovedUp = !0
                        : o > 0 && (this.everMovedDown = !0),
                    i < 0
                        ? this.everMovedLeft = !0
                        : i > 0 && (this.everMovedRight = !0),
                    this.pointerScreenX = n,
                    this.pointerScreenY = r,
                    this.isAnimating || (this.isAnimating = !0, this.requestAnimation(ws()))
                }
            },
            e.prototype.stop = function () {
                if (this.isEnabled) {
                    this.isAnimating = !1;
                    for (var e = 0, t = this.scrollCaches; e < t.length; e++) {
                        t[e].destroy()
                    }
                    this.scrollCaches = null
                }
            },
            e.prototype.requestAnimation = function (e) {
                this.msSinceRequest = e,
                requestAnimationFrame(this.animate)
            },
            e.prototype.handleSide = function (e, t) {
                var n = e.scrollCache,
                    r = this.edgeThreshold,
                    o = r - e.distance,
                    i = o * o / (r * r) * this.maxVelocity * t,
                    a = 1;
                switch (e.name) {
                    case "left":
                        a = -1;
                    case "right":
                        n.setScrollLeft(n.getScrollLeft() + i * a);
                        break;
                    case "top":
                        a = -1;
                    case "bottom":
                        n.setScrollTop(n.getScrollTop() + i * a)
                }
            },
            e.prototype.computeBestEdge = function (e, t) {
                for (
                    var n = this.edgeThreshold,
                    r = null,
                    o = 0,
                    i = this.scrollCaches;
                    o < i.length;
                    o++
                ) {
                    var a = i[o],
                        s = a.clientRect,
                        l = e - s.left,
                        u = s.right - e,
                        c = t - s.top,
                        d = s.bottom - t;
                    l >= 0 && u >= 0 && c >= 0 && d >= 0 && (
                        c <= n && this.everMovedUp && a.canScrollUp() && (!r || r.distance > c) && (r = {
                            scrollCache: a,
                            name: "top",
                            distance: c
                        }),
                        d <= n && this.everMovedDown && a.canScrollDown() && (!r || r.distance > d) && (r = {
                            scrollCache: a,
                            name: "bottom",
                            distance: d
                        }),
                        l <= n && this.everMovedLeft && a.canScrollLeft() && (!r || r.distance > l) && (r = {
                            scrollCache: a,
                            name: "left",
                            distance: l
                        }),
                        u <= n && this.everMovedRight && a.canScrollRight() && (!r || r.distance > u) && (r = {
                            scrollCache: a,
                            name: "right",
                            distance: u
                        })
                    )
                }
                return r
            },
            e.prototype.buildCaches = function () {
                return this
                    .queryScrollEls()
                    .map((function (e) {
                        return e === window
                            ? new Cs(!1)
                            : new bs(e, !1)
                    }))
            },
            e.prototype.queryScrollEls = function () {
                for (var e = [], t = 0, n = this.scrollQuery; t < n.length; t++) {
                    var r = n[t];
                    "object" == typeof r
                        ? e.push(r)
                        : e
                            .push
                            .apply(e, Array.prototype.slice.call(document.querySelectorAll(r)))
                }
                return e
            },
            e
        }(),
        _s = function (e) {
            function t(t, n) {
                var r = e.call(this, t) || this;
                r.delay = null,
                r.minDistance = 0,
                r.touchScrollAllowed = !0,
                r.mirrorNeedsRevert = !1,
                r.isInteracting = !1,
                r.isDragging = !1,
                r.isDelayEnded = !1,
                r.isDistanceSurpassed = !1,
                r.delayTimeoutId = null,
                r.onPointerDown = function (e) {
                    r.isDragging || (
                        r.isInteracting = !0,
                        r.isDelayEnded = !1,
                        r.isDistanceSurpassed = !1,
                        Ae(document.body),
                        Le(document.body),
                        e.isTouch || e.origEvent.preventDefault(),
                        r.emitter.trigger("pointerdown", e),
                        r.isInteracting && !r.pointer.shouldIgnoreMove && (
                            r.mirror.setIsVisible(!1),
                            r.mirror.start(e.subjectEl, e.pageX, e.pageY),
                            r.startDelay(e),
                            r.minDistance || r.handleDistanceSurpassed(e)
                        )
                    )
                },
                r.onPointerMove = function (e) {
                    if (r.isInteracting) {
                        if (r.emitter.trigger("pointermove", e), !r.isDistanceSurpassed) {
                            var t = r.minDistance,
                                n = e.deltaX,
                                o = e.deltaY;
                            n * n + o * o >= t * t && r.handleDistanceSurpassed(e)
                        }
                        r.isDragging && ("scroll" !== e.origEvent.type && (
                            r.mirror.handleMove(e.pageX, e.pageY),
                            r.autoScroller.handleMove(e.pageX, e.pageY)
                        ), r.emitter.trigger("dragmove", e))
                    }
                },
                r.onPointerUp = function (e) {
                    r.isInteracting && (
                        r.isInteracting = !1,
                        Ue(document.body),
                        We(document.body),
                        r.emitter.trigger("pointerup", e),
                        r.isDragging && (r.autoScroller.stop(), r.tryStopDrag(e)),
                        r.delayTimeoutId && (clearTimeout(r.delayTimeoutId), r.delayTimeoutId = null)
                    )
                };
                var o = r.pointer = new ys(t);
                return o
                    .emitter
                    .on("pointerdown", r.onPointerDown),
                o
                    .emitter
                    .on("pointermove", r.onPointerMove),
                o
                    .emitter
                    .on("pointerup", r.onPointerUp),
                n && (o.selector = n),
                r.mirror = new Ss,
                r.autoScroller = new Rs,
                r
            }
            return n(t, e),
            t.prototype.destroy = function () {
                this
                    .pointer
                    .destroy(),
                this.onPointerUp({})
            },
            t.prototype.startDelay = function (e) {
                var t = this;
                "number" == typeof this.delay
                    ? this.delayTimeoutId = setTimeout((function () {
                        t.delayTimeoutId = null,
                        t.handleDelayEnd(e)
                    }), this.delay)
                    : this.handleDelayEnd(e)
            },
            t.prototype.handleDelayEnd = function (e) {
                this.isDelayEnded = !0,
                this.tryStartDrag(e)
            },
            t.prototype.handleDistanceSurpassed = function (e) {
                this.isDistanceSurpassed = !0,
                this.tryStartDrag(e)
            },
            t.prototype.tryStartDrag = function (e) {
                this.isDelayEnded && this.isDistanceSurpassed && (
                    this.pointer.wasTouchScroll && !this.touchScrollAllowed || (
                        this.isDragging = !0,
                        this.mirrorNeedsRevert = !1,
                        this.autoScroller.start(e.pageX, e.pageY),
                        this.emitter.trigger("dragstart", e),
                        !1 === this.touchScrollAllowed && this.pointer.cancelTouchScroll()
                    )
                )
            },
            t.prototype.tryStopDrag = function (e) {
                this
                    .mirror
                    .stop(this.mirrorNeedsRevert, this.stopDrag.bind(this, e))
            },
            t.prototype.stopDrag = function (e) {
                this.isDragging = !1,
                this
                    .emitter
                    .trigger("dragend", e)
            },
            t.prototype.setIgnoreMove = function (e) {
                this.pointer.shouldIgnoreMove = e
            },
            t.prototype.setMirrorIsVisible = function (e) {
                this
                    .mirror
                    .setIsVisible(e)
            },
            t.prototype.setMirrorNeedsRevert = function (e) {
                this.mirrorNeedsRevert = e
            },
            t.prototype.setAutoScrollEnabled = function (e) {
                this.autoScroller.isEnabled = e
            },
            t
        }(Ki),
        Ts = function () {
            function e(e) {
                this.origRect = ao(e),
                this.scrollCaches = so(e).map((function (e) {
                    return new bs(e, !0)
                }))
            }
            return e.prototype.destroy = function () {
                for (var e = 0, t = this.scrollCaches; e < t.length; e++) {
                    t[e].destroy()
                }
            },
            e.prototype.computeLeft = function () {
                for (
                    var e = this.origRect.left,
                    t = 0,
                    n = this.scrollCaches;
                    t < n.length;
                    t++
                ) {
                    var r = n[t];
                    e += r.origScrollLeft - r.getScrollLeft()
                }
                return e
            },
            e.prototype.computeTop = function () {
                for (
                    var e = this.origRect.top,
                    t = 0,
                    n = this.scrollCaches;
                    t < n.length;
                    t++
                ) {
                    var r = n[t];
                    e += r.origScrollTop - r.getScrollTop()
                }
                return e
            },
            e.prototype.isWithinClipping = function (e, t) {
                for (var n, r, o = {
                    left: e,
                    top: t
                }, i = 0, a = this.scrollCaches; i < a.length; i++) {
                    var s = a[i];
                    if (
                        n = s.getEventTarget(),
                        r = void 0,
                        "HTML" !== (r = n.tagName) && "BODY" !== r && !Fr(o, s.clientRect)
                    ) 
                        return !1
                }
                return !0
            },
            e
        }();
    var ks = function () {
        function e(e, t) {
            var n = this;
            this.useSubjectCenter = !1,
            this.requireInitial = !0,
            this.initialHit = null,
            this.movingHit = null,
            this.finalHit = null,
            this.handlePointerDown = function (e) {
                var t = n.dragging;
                n.initialHit = null,
                n.movingHit = null,
                n.finalHit = null,
                n.prepareHits(),
                n.processFirstCoord(e),
                n.initialHit || !n.requireInitial
                    ? (t.setIgnoreMove(!1), n.emitter.trigger("pointerdown", e))
                    : t.setIgnoreMove(!0)
            },
            this.handleDragStart = function (e) {
                n
                    .emitter
                    .trigger("dragstart", e),
                n.handleMove(e, !0)
            },
            this.handleDragMove = function (e) {
                n
                    .emitter
                    .trigger("dragmove", e),
                n.handleMove(e)
            },
            this.handlePointerUp = function (e) {
                n.releaseHits(),
                n
                    .emitter
                    .trigger("pointerup", e)
            },
            this.handleDragEnd = function (e) {
                n.movingHit && n
                    .emitter
                    .trigger("hitupdate", null, !0, e),
                n.finalHit = n.movingHit,
                n.movingHit = null,
                n
                    .emitter
                    .trigger("dragend", e)
            },
            this.droppableStore = t,
            e
                .emitter
                .on("pointerdown", this.handlePointerDown),
            e
                .emitter
                .on("dragstart", this.handleDragStart),
            e
                .emitter
                .on("dragmove", this.handleDragMove),
            e
                .emitter
                .on("pointerup", this.handlePointerUp),
            e
                .emitter
                .on("dragend", this.handleDragEnd),
            this.dragging = e,
            this.emitter = new uo
        }
        return e.prototype.processFirstCoord = function (e) {
            var t,
                n = {
                    left: e.pageX,
                    top: e.pageY
                },
                r = n,
                o = e.subjectEl;
            o !== document && (r = Br(r, t = ao(o)));
            var i = this.initialHit = this.queryHitForOffset(r.left, r.top);
            if (i) {
                if (this.useSubjectCenter && t) {
                    var a = zr(t, i.rect);
                    a && (r = jr(a))
                }
                this.coordAdjust = Gr(r, n)
            } else 
                this.coordAdjust = {
                    left: 0,
                    top: 0
                }
            },
        e.prototype.handleMove = function (e, t) {
            var n = this.queryHitForOffset(
                e.pageX + this.coordAdjust.left,
                e.pageY + this.coordAdjust.top
            );
            !t && xs(this.movingHit, n) || (
                this.movingHit = n,
                this.emitter.trigger("hitupdate", n, !1, e)
            )
        },
        e.prototype.prepareHits = function () {
            this.offsetTrackers = gt(this.droppableStore, (function (e) {
                return e
                    .component
                    .prepareHits(),
                new Ts(e.el)
            }))
        },
        e.prototype.releaseHits = function () {
            var e = this.offsetTrackers;
            for (var t in e) 
                e[t].destroy();
            this.offsetTrackers = {}
        },
        e.prototype.queryHitForOffset = function (e, t) {
            var n = this.droppableStore,
                r = this.offsetTrackers,
                o = null;
            for (var i in n) {
                var a = n[i].component,
                    s = r[i];
                if (s && s.isWithinClipping(e, t)) {
                    var l = s.computeLeft(),
                        u = s.computeTop(),
                        c = e - l,
                        d = t - u,
                        p = s.origRect,
                        f = p.right - p.left,
                        h = p.bottom - p.top;
                    if (c >= 0 && c < f && d >= 0 && d < h) {
                        var v = a.queryHit(c, d, f, h);
                        v && zn(v.dateProfile.activeRange, v.dateSpan.range) && (
                            !o || v.layer > o.layer
                        ) && (
                            v.componentId = i,
                            v.context = a.context,
                            v.rect.left += l,
                            v.rect.right += l,
                            v.rect.top += u,
                            v.rect.bottom += u,
                            o = v
                        )
                    }
                }
            }
            return o
        },
        e
    }();
    function xs(e, t) {
        return !e && !t || Boolean(e) === Boolean(t) && sr(e.dateSpan, t.dateSpan)
    }
    function Ms(e, t) {
        for (
            var n,
            o,
            i = {},
            a = 0,
            s = t.pluginHooks.datePointTransforms;
            a < s.length;
            a++
        ) {
            var l = s[a];
            r(i, l(e, t))
        }
        return r(i, (n = e, {
            date: (o = t.dateEnv).toDate(n.range.start),
            dateStr: o.formatIso(n.range.start, {omitTime: n.allDay}),
            allDay: n.allDay
        })),
        i
    }
    var Ps = function (e) {
            function t(t) {
                var n = e.call(this, t) || this;
                n.handlePointerDown = function (e) {
                    var t = n.dragging,
                        r = e.origEvent.target;
                    t.setIgnoreMove(!n.component.isValidDateDownEl(r))
                },
                n.handleDragEnd = function (e) {
                    var t = n.component;
                    if (!n.dragging.pointer.wasTouchScroll) {
                        var o = n.hitDragging,
                            i = o.initialHit,
                            a = o.finalHit;
                        if (i && a && xs(i, a)) {
                            var s = t.context,
                                l = r(r({}, Ms(i.dateSpan, s)), {
                                    dayEl: i.dayEl,
                                    jsEvent: e.origEvent,
                                    view: s.viewApi || s.calendarApi.view
                                });
                            s
                                .emitter
                                .trigger("dateClick", l)
                        }
                    }
                },
                n.dragging = new _s(t.el),
                n.dragging.autoScroller.isEnabled = !1;
                var o = n.hitDragging = new ks(n.dragging, Zi(t));
                return o
                    .emitter
                    .on("pointerdown", n.handlePointerDown),
                o
                    .emitter
                    .on("dragend", n.handleDragEnd),
                n
            }
            return n(t, e),
            t.prototype.destroy = function () {
                this
                    .dragging
                    .destroy()
            },
            t
        }(qi),
        Is = function (e) {
            function t(t) {
                var n = e.call(this, t) || this;
                n.dragSelection = null,
                n.handlePointerDown = function (e) {
                    var t = n,
                        r = t.component,
                        o = t.dragging,
                        i = r.context.options.selectable && r.isValidDateDownEl(e.origEvent.target);
                    o.setIgnoreMove(!i),
                    o.delay = e.isTouch
                        ? function (e) {
                            var t = e.context.options,
                                n = t.selectLongPressDelay;
                            null == n && (n = t.longPressDelay);
                            return n
                        }(r)
                        : null
                },
                n.handleDragStart = function (e) {
                    n
                        .component
                        .context
                        .calendarApi
                        .unselect(e)
                },
                n.handleHitUpdate = function (e, t) {
                    var o = n.component.context,
                        i = null,
                        a = !1;
                    if (e) {
                        var s = n.hitDragging.initialHit;
                        e.componentId === s.componentId && n.isHitComboAllowed && !n.isHitComboAllowed(
                            s,
                            e
                        ) || (i = function (e, t, n) {
                            var o = e.dateSpan,
                                i = t.dateSpan,
                                a = [o.range.start, o.range.end, i.range.start, i.range.end];
                            a.sort(Ge);
                            for (var s = {}, l = 0, u = n; l < u.length; l++) {
                                var c = (0, u[l])(e, t);
                                if (!1 === c) 
                                    return null;
                                c && r(s, c)
                            }
                            return s.range = {
                                start: a[0],
                                end: a[3]
                            },
                            s.allDay = o.allDay,
                            s
                        }(s, e, o.pluginHooks.dateSelectionTransformers)),
                        i && Ca(i, e.dateProfile, o) || (a = !0, i = null)
                    }
                    i
                        ? o.dispatch({type: "SELECT_DATES", selection: i})
                        : t || o.dispatch({type: "UNSELECT_DATES"}),
                    a
                        ? He()
                        : Oe(),
                    t || (n.dragSelection = i)
                },
                n.handlePointerUp = function (e) {
                    n.dragSelection && (
                        dr(n.dragSelection, e, n.component.context),
                        n.dragSelection = null
                    )
                };
                var o = t.component.context.options,
                    i = n.dragging = new _s(t.el);
                i.touchScrollAllowed = !1,
                i.minDistance = o.selectMinDistance || 0,
                i.autoScroller.isEnabled = o.dragScroll;
                var a = n.hitDragging = new ks(n.dragging, Zi(t));
                return a
                    .emitter
                    .on("pointerdown", n.handlePointerDown),
                a
                    .emitter
                    .on("dragstart", n.handleDragStart),
                a
                    .emitter
                    .on("hitupdate", n.handleHitUpdate),
                a
                    .emitter
                    .on("pointerup", n.handlePointerUp),
                n
            }
            return n(t, e),
            t.prototype.destroy = function () {
                this
                    .dragging
                    .destroy()
            },
            t
        }(qi);
    var Ns = function (e) {
        function t(n) {
            var o = e.call(this, n) || this;
            o.subjectEl = null,
            o.subjectSeg = null,
            o.isDragging = !1,
            o.eventRange = null,
            o.relevantEvents = null,
            o.receivingContext = null,
            o.validMutation = null,
            o.mutatedRelevantEvents = null,
            o.handlePointerDown = function (e) {
                var t = e.origEvent.target,
                    n = o,
                    r = n.component,
                    i = n.dragging,
                    a = i.mirror,
                    s = r.context.options,
                    l = r.context;
                o.subjectEl = e.subjectEl;
                var u = o.subjectSeg = Yn(e.subjectEl),
                    c = (o.eventRange = u.eventRange).instance.instanceId;
                o.relevantEvents = gn(l.getCurrentData().eventStore, c),
                i.minDistance = e.isTouch
                    ? 0
                    : s.eventDragMinDistance,
                i.delay = e.isTouch && c !== r.props.eventSelection
                    ? function (e) {
                        var t = e.context.options,
                            n = t.eventLongPressDelay;
                        null == n && (n = t.longPressDelay);
                        return n
                    }(r)
                    : null,
                s.fixedMirrorParent
                    ? a.parentNode = s.fixedMirrorParent
                    : a.parentNode = Se(t, ".fc"),
                a.revertDuration = s.dragRevertDuration;
                var d = r.isValidSegDownEl(t) && !Se(t, ".fc-event-resizer");
                i.setIgnoreMove(!d),
                o.isDragging = d && e
                    .subjectEl
                    .classList
                    .contains("fc-event-draggable")
            },
            o.handleDragStart = function (e) {
                var t = o.component.context,
                    n = o.eventRange,
                    r = n.instance.instanceId;
                e.isTouch
                    ? r !== o.component.props.eventSelection && t.dispatch(
                        {type: "SELECT_EVENT", eventInstanceId: r}
                    )
                    : t.dispatch({type: "UNSELECT_EVENT"}),
                o.isDragging && (
                    t.calendarApi.unselect(e),
                    t.emitter.trigger("eventDragStart", {
                        el: o.subjectEl,
                        event: new Cr(t, n.def, n.instance),
                        jsEvent: e.origEvent,
                        view: t.viewApi
                    })
                )
            },
            o.handleHitUpdate = function (e, t) {
                if (o.isDragging) {
                    var n = o.relevantEvents,
                        r = o.hitDragging.initialHit,
                        i = o.component.context,
                        a = null,
                        s = null,
                        l = null,
                        u = !1,
                        c = {
                            affectedEvents: n,
                            mutatedEvents: {
                                defs: {},
                                instances: {}
                            },
                            isEvent: !0
                        };
                    if (e) {
                        var d = (a = e.context).options;
                        i === a || d.editable && d.droppable
                            ? (s = function (e, t, n) {
                                var r = e.dateSpan,
                                    o = t.dateSpan,
                                    i = r.range.start,
                                    a = o.range.start,
                                    s = {};
                                r.allDay !== o.allDay && (
                                    s.allDay = o.allDay,
                                    s.hasEnd = t.context.options.allDayMaintainDuration,
                                    o.allDay && (i = rt(i))
                                );
                                var l = An(
                                    i,
                                    a,
                                    e.context.dateEnv,
                                    e.componentId === t.componentId
                                        ? e.largeUnit
                                        : null
                                );
                                l.milliseconds && (s.allDay = !1);
                                for (var u = {
                                    datesDelta: l,
                                    standardProps: s
                                }, c = 0, d = n; c < d.length; c++) {
                                    (0, d[c])(u, e, t)
                                }
                                return u
                            }(r, e, a.getCurrentData().pluginHooks.eventDragMutationMassagers)) && (
                                l = hr(n, a.getCurrentData().eventUiBases, s, a),
                                c.mutatedEvents = l,
                                ba(c, e.dateProfile, a) || (u = !0, s = null, l = null, c.mutatedEvents = {
                                    defs: {},
                                    instances: {}
                                })
                            )
                            : a = null
                    }
                    o.displayDrag(a, c),
                    u
                        ? He()
                        : Oe(),
                    t || (
                        i === a && xs(r, e) && (s = null),
                        o.dragging.setMirrorNeedsRevert(!s),
                        o.dragging.setMirrorIsVisible(!e || !document.querySelector(".fc-event-mirror")),
                        o.receivingContext = a,
                        o.validMutation = s,
                        o.mutatedRelevantEvents = l
                    )
                }
            },
            o.handlePointerUp = function () {
                o.isDragging || o.cleanup()
            },
            o.handleDragEnd = function (e) {
                if (o.isDragging) {
                    var t = o.component.context,
                        n = t.viewApi,
                        i = o,
                        a = i.receivingContext,
                        s = i.validMutation,
                        l = o.eventRange.def,
                        u = o.eventRange.instance,
                        c = new Cr(t, l, u),
                        d = o.relevantEvents,
                        p = o.mutatedRelevantEvents,
                        f = o.hitDragging.finalHit;
                    if (o.clearDrag(), t.emitter.trigger("eventDragStop", {
                        el: o.subjectEl,
                        event: c,
                        jsEvent: e.origEvent,
                        view: n
                    }), s) {
                        if (a === t) {
                            var h = new Cr(
                                t,
                                p.defs[l.defId],
                                u
                                    ? p.instances[u.instanceId]
                                    : null
                            );
                            t.dispatch({type: "MERGE_EVENTS", eventStore: p});
                            for (
                                var v = {
                                    oldEvent: c,
                                    event: h,
                                    relatedEvents: Rr(p, t, u),
                                    revert: function () {
                                        t.dispatch({type: "MERGE_EVENTS", eventStore: d})
                                    }
                                },
                                g = {},
                                m = 0,
                                y = t.getCurrentData().pluginHooks.eventDropTransformers; m < y.length; m++
                            ) {
                                var E = y[m];
                                r(g, E(s, t))
                            }
                            t
                                .emitter
                                .trigger("eventDrop", r(r(r({}, v), g), {
                                    el: e.subjectEl,
                                    delta: s.datesDelta,
                                    jsEvent: e.origEvent,
                                    view: n
                                })),
                            t
                                .emitter
                                .trigger("eventChange", v)
                        } else if (a) {
                            var S = {
                                event: c,
                                relatedEvents: Rr(d, t, u),
                                revert: function () {
                                    t.dispatch({type: "MERGE_EVENTS", eventStore: d})
                                }
                            };
                            t
                                .emitter
                                .trigger("eventLeave", r(r({}, S), {
                                    draggedEl: e.subjectEl,
                                    view: n
                                })),
                            t.dispatch({type: "REMOVE_EVENTS", eventStore: d}),
                            t
                                .emitter
                                .trigger("eventRemove", S);
                            var D = p.defs[l.defId],
                                b = p.instances[u.instanceId],
                                C = new Cr(a, D, b);
                            a.dispatch({type: "MERGE_EVENTS", eventStore: p});
                            var w = {
                                event: C,
                                relatedEvents: Rr(p, a, b),
                                revert: function () {
                                    a.dispatch({type: "REMOVE_EVENTS", eventStore: p})
                                }
                            };
                            a
                                .emitter
                                .trigger("eventAdd", w),
                            e.isTouch && a.dispatch({type: "SELECT_EVENT", eventInstanceId: u.instanceId}),
                            a
                                .emitter
                                .trigger("drop", r(r({}, Ms(f.dateSpan, a)), {
                                    draggedEl: e.subjectEl,
                                    jsEvent: e.origEvent,
                                    view: f.context.viewApi
                                })),
                            a
                                .emitter
                                .trigger("eventReceive", r(r({}, w), {
                                    draggedEl: e.subjectEl,
                                    view: f.context.viewApi
                                }))
                        }
                    } else 
                        t
                            .emitter
                            .trigger("_noEventDrop")
                    }
                o.cleanup()
            };
            var i = o.component.context.options,
                a = o.dragging = new _s(n.el);
            a.pointer.selector = t.SELECTOR,
            a.touchScrollAllowed = !1,
            a.autoScroller.isEnabled = i.dragScroll;
            var s = o.hitDragging = new ks(o.dragging, Xi);
            return s.useSubjectCenter = n.useEventCenter,
            s
                .emitter
                .on("pointerdown", o.handlePointerDown),
            s
                .emitter
                .on("dragstart", o.handleDragStart),
            s
                .emitter
                .on("hitupdate", o.handleHitUpdate),
            s
                .emitter
                .on("pointerup", o.handlePointerUp),
            s
                .emitter
                .on("dragend", o.handleDragEnd),
            o
        }
        return n(t, e),
        t.prototype.destroy = function () {
            this
                .dragging
                .destroy()
        },
        t.prototype.displayDrag = function (e, t) {
            var n = this.component.context,
                r = this.receivingContext;
            r && r !== e && (
                r === n
                    ? r.dispatch({
                        type: "SET_EVENT_DRAG",
                        state: {
                            affectedEvents: t.affectedEvents,
                            mutatedEvents: {
                                defs: {},
                                instances: {}
                            },
                            isEvent: !0
                        }
                    })
                    : r.dispatch({type: "UNSET_EVENT_DRAG"})
            ),
            e && e.dispatch({type: "SET_EVENT_DRAG", state: t})
        },
        t.prototype.clearDrag = function () {
            var e = this.component.context,
                t = this.receivingContext;
            t && t.dispatch({type: "UNSET_EVENT_DRAG"}),
            e !== t && e.dispatch({type: "UNSET_EVENT_DRAG"})
        },
        t.prototype.cleanup = function () {
            this.subjectSeg = null,
            this.isDragging = !1,
            this.eventRange = null,
            this.relevantEvents = null,
            this.receivingContext = null,
            this.validMutation = null,
            this.mutatedRelevantEvents = null
        },
        t.SELECTOR = ".fc-event-draggable, .fc-event-resizable",
        t
    }(qi);
    var Hs = function (e) {
        function t(t) {
            var n = e.call(this, t) || this;
            n.draggingSegEl = null,
            n.draggingSeg = null,
            n.eventRange = null,
            n.relevantEvents = null,
            n.validMutation = null,
            n.mutatedRelevantEvents = null,
            n.handlePointerDown = function (e) {
                var t = n.component,
                    r = Yn(n.querySegEl(e)),
                    o = n.eventRange = r.eventRange;
                n.dragging.minDistance = t.context.options.eventDragMinDistance,
                n
                    .dragging
                    .setIgnoreMove(
                        !n.component.isValidSegDownEl(e.origEvent.target) || e.isTouch && n.component.props.eventSelection !== o.instance.instanceId
                    )
            },
            n.handleDragStart = function (e) {
                var t = n.component.context,
                    r = n.eventRange;
                n.relevantEvents = gn(
                    t.getCurrentData().eventStore,
                    n.eventRange.instance.instanceId
                );
                var o = n.querySegEl(e);
                n.draggingSegEl = o,
                n.draggingSeg = Yn(o),
                t
                    .calendarApi
                    .unselect(),
                t
                    .emitter
                    .trigger("eventResizeStart", {
                        el: o,
                        event: new Cr(t, r.def, r.instance),
                        jsEvent: e.origEvent,
                        view: t.viewApi
                    })
            },
            n.handleHitUpdate = function (e, t, r) {
                var o = n.component.context,
                    i = n.relevantEvents,
                    a = n.hitDragging.initialHit,
                    s = n.eventRange.instance,
                    l = null,
                    u = null,
                    c = !1,
                    d = {
                        affectedEvents: i,
                        mutatedEvents: {
                            defs: {},
                            instances: {}
                        },
                        isEvent: !0
                    };
                e && (
                    e.componentId === a.componentId && n.isHitComboAllowed && !n.isHitComboAllowed(a, e) || (l = function (e, t, n, r) {
                        var o = e.context.dateEnv,
                            i = e.dateSpan.range.start,
                            a = t.dateSpan.range.start,
                            s = An(i, a, o, e.largeUnit);
                        if (n) {
                            if (o.add(r.start, s) < r.end) 
                                return {startDelta: s}
                            } else if (o.add(r.end, s) > r.start) 
                            return {endDelta: s};
                        return null
                    }(a, e, r.subjectEl.classList.contains("fc-event-resizer-start"), s.range))
                );
                l && (
                    u = hr(i, o.getCurrentData().eventUiBases, l, o),
                    d.mutatedEvents = u,
                    ba(d, e.dateProfile, o) || (c = !0, l = null, u = null, d.mutatedEvents = null)
                ),
                u
                    ? o.dispatch({type: "SET_EVENT_RESIZE", state: d})
                    : o.dispatch({type: "UNSET_EVENT_RESIZE"}),
                c
                    ? He()
                    : Oe(),
                t || (
                    l && xs(a, e) && (l = null),
                    n.validMutation = l,
                    n.mutatedRelevantEvents = u
                )
            },
            n.handleDragEnd = function (e) {
                var t = n.component.context,
                    o = n.eventRange.def,
                    i = n.eventRange.instance,
                    a = new Cr(t, o, i),
                    s = n.relevantEvents,
                    l = n.mutatedRelevantEvents;
                if (t.emitter.trigger("eventResizeStop", {
                    el: n.draggingSegEl,
                    event: a,
                    jsEvent: e.origEvent,
                    view: t.viewApi
                }), n.validMutation) {
                    var u = new Cr(
                        t,
                        l.defs[o.defId],
                        i
                            ? l.instances[i.instanceId]
                            : null
                    );
                    t.dispatch({type: "MERGE_EVENTS", eventStore: l});
                    var c = {
                        oldEvent: a,
                        event: u,
                        relatedEvents: Rr(l, t, i),
                        revert: function () {
                            t.dispatch({type: "MERGE_EVENTS", eventStore: s})
                        }
                    };
                    t
                        .emitter
                        .trigger("eventResize", r(r({}, c), {
                            el: n.draggingSegEl,
                            startDelta: n.validMutation.startDelta || kt(0),
                            endDelta: n.validMutation.endDelta || kt(0),
                            jsEvent: e.origEvent,
                            view: t.viewApi
                        })),
                    t
                        .emitter
                        .trigger("eventChange", c)
                } else 
                    t
                        .emitter
                        .trigger("_noEventResize");
                n.draggingSeg = null,
                n.relevantEvents = null,
                n.validMutation = null
            };
            var o = t.component,
                i = n.dragging = new _s(t.el);
            i.pointer.selector = ".fc-event-resizer",
            i.touchScrollAllowed = !1,
            i.autoScroller.isEnabled = o.context.options.dragScroll;
            var a = n.hitDragging = new ks(n.dragging, Zi(t));
            return a
                .emitter
                .on("pointerdown", n.handlePointerDown),
            a
                .emitter
                .on("dragstart", n.handleDragStart),
            a
                .emitter
                .on("hitupdate", n.handleHitUpdate),
            a
                .emitter
                .on("dragend", n.handleDragEnd),
            n
        }
        return n(t, e),
        t.prototype.destroy = function () {
            this
                .dragging
                .destroy()
        },
        t.prototype.querySegEl = function (e) {
            return Se(e.subjectEl, ".fc-event")
        },
        t
    }(qi);
    var Os = function () {
            function e(e) {
                var t = this;
                this.context = e,
                this.isRecentPointerDateSelect = !1,
                this.matchesCancel = !1,
                this.matchesEvent = !1,
                this.onSelect = function (e) {
                    e.jsEvent && (t.isRecentPointerDateSelect = !0)
                },
                this.onDocumentPointerDown = function (e) {
                    var n = t.context.options.unselectCancel,
                        r = e.origEvent.target;
                    t.matchesCancel = !!Se(r, n),
                    t.matchesEvent = !!Se(r, Ns.SELECTOR)
                },
                this.onDocumentPointerUp = function (e) {
                    var n = t.context,
                        r = t.documentPointer,
                        o = n.getCurrentData();
                    if (!r.wasTouchScroll) {
                        if (o.dateSelection && !t.isRecentPointerDateSelect) {
                            var i = n.options.unselectAuto;
                            !i || i && t.matchesCancel || n
                                .calendarApi
                                .unselect(e)
                        }
                        o.eventSelection && !t.matchesEvent && n.dispatch({type: "UNSELECT_EVENT"})
                    }
                    t.isRecentPointerDateSelect = !1
                };
                var n = this.documentPointer = new ys(document);
                n.shouldIgnoreMove = !0,
                n.shouldWatchScroll = !1,
                n
                    .emitter
                    .on("pointerdown", this.onDocumentPointerDown),
                n
                    .emitter
                    .on("pointerup", this.onDocumentPointerUp),
                e
                    .emitter
                    .on("select", this.onSelect)
            }
            return e.prototype.destroy = function () {
                this
                    .context
                    .emitter
                    .off("select", this.onSelect),
                this
                    .documentPointer
                    .destroy()
            },
            e
        }(),
        As = {
            fixedMirrorParent: fn
        },
        Us = {
            dateClick: fn,
            eventDragStart: fn,
            eventDragStop: fn,
            eventDrop: fn,
            eventResizeStart: fn,
            eventResizeStop: fn,
            eventResize: fn,
            drop: fn,
            eventReceive: fn,
            eventLeave: fn
        },
        Ls = function () {
            function e(e, t) {
                var n = this;
                this.receivingContext = null,
                this.droppableEvent = null,
                this.suppliedDragMeta = null,
                this.dragMeta = null,
                this.handleDragStart = function (e) {
                    n.dragMeta = n.buildDragMeta(e.subjectEl)
                },
                this.handleHitUpdate = function (e, t, o) {
                    var i = n.hitDragging.dragging,
                        a = null,
                        s = null,
                        l = !1,
                        u = {
                            affectedEvents: {
                                defs: {},
                                instances: {}
                            },
                            mutatedEvents: {
                                defs: {},
                                instances: {}
                            },
                            isEvent: n.dragMeta.create
                        };
                    e && (
                        a = e.context,
                        n.canDropElOnCalendar(o.subjectEl, a) && (s = function (e, t, n) {
                            for (
                                var o = r({}, t.leftoverProps),
                                i = 0,
                                a = n.pluginHooks.externalDefTransforms;
                                i < a.length;
                                i++
                            ) {
                                var s = a[i];
                                r(o, s(e, t))
                            }
                            var l = Mn(o, n),
                                u = l.refined,
                                c = l.extra,
                                d = In(
                                    u,
                                    c,
                                    t.sourceId,
                                    e.allDay,
                                    n.options.forceEventDuration || Boolean(t.duration),
                                    n
                                ),
                                p = e.range.start;
                            e.allDay && t.startTime && (p = n.dateEnv.add(p, t.startTime));
                            var f = t.duration
                                    ? n
                                        .dateEnv
                                        .add(p, t.duration)
                                    : fr(e.allDay, p, n),
                                h = pt(d.defId, {
                                    start: p,
                                    end: f
                                });
                            return {def: d, instance: h}
                        }(e.dateSpan, n.dragMeta, a), u.mutatedEvents = vn(s), (
                            l = !ba(u, e.dateProfile, a)
                        ) && (u.mutatedEvents = {
                            defs: {},
                            instances: {}
                        }, s = null))
                    ),
                    n.displayDrag(a, u),
                    i.setMirrorIsVisible(t || !s || !document.querySelector(".fc-event-mirror")),
                    l
                        ? He()
                        : Oe(),
                    t || (i.setMirrorNeedsRevert(!s), n.receivingContext = a, n.droppableEvent = s)
                },
                this.handleDragEnd = function (e) {
                    var t = n,
                        o = t.receivingContext,
                        i = t.droppableEvent;
                    if (n.clearDrag(), o && i) {
                        var a = n.hitDragging.finalHit,
                            s = a.context.viewApi,
                            l = n.dragMeta;
                        if (o.emitter.trigger("drop", r(r({}, Ms(a.dateSpan, o)), {
                            draggedEl: e.subjectEl,
                            jsEvent: e.origEvent,
                            view: s
                        })), l.create) {
                            var u = vn(i);
                            o.dispatch({type: "MERGE_EVENTS", eventStore: u}),
                            e.isTouch && o.dispatch(
                                {type: "SELECT_EVENT", eventInstanceId: i.instance.instanceId}
                            ),
                            o
                                .emitter
                                .trigger("eventReceive", {
                                    event: new Cr(o, i.def, i.instance),
                                    relatedEvents: [],
                                    revert: function () {
                                        o.dispatch({type: "REMOVE_EVENTS", eventStore: u})
                                    },
                                    draggedEl: e.subjectEl,
                                    view: s
                                })
                        }
                    }
                    n.receivingContext = null,
                    n.droppableEvent = null
                };
                var o = this.hitDragging = new ks(e, Xi);
                o.requireInitial = !1,
                o
                    .emitter
                    .on("dragstart", this.handleDragStart),
                o
                    .emitter
                    .on("hitupdate", this.handleHitUpdate),
                o
                    .emitter
                    .on("dragend", this.handleDragEnd),
                this.suppliedDragMeta = t
            }
            return e.prototype.buildDragMeta = function (e) {
                return "object" == typeof this.suppliedDragMeta
                    ? Qi(this.suppliedDragMeta)
                    : "function" == typeof this.suppliedDragMeta
                        ? Qi(this.suppliedDragMeta(e))
                        : Qi(
                            (t = function (e, t) {
                                var n = $i.dataAttrPrefix,
                                    r = (
                                        n
                                            ? n + "-"
                                            : ""
                                    ) + t;
                                return e.getAttribute("data-" + r) || ""
                            }(e, "event"))
                                ? JSON.parse(t)
                                : {
                                    create: !1
                                }
                        );
                var t
            },
            e.prototype.displayDrag = function (e, t) {
                var n = this.receivingContext;
                n && n !== e && n.dispatch({type: "UNSET_EVENT_DRAG"}),
                e && e.dispatch({type: "SET_EVENT_DRAG", state: t})
            },
            e.prototype.clearDrag = function () {
                this.receivingContext && this
                    .receivingContext
                    .dispatch({type: "UNSET_EVENT_DRAG"})
            },
            e.prototype.canDropElOnCalendar = function (e, t) {
                var n = t.options.dropAccept;
                return "function" == typeof n
                    ? n.call(t.calendarApi, e)
                    : "string" != typeof n || !n || Boolean(De(e, n))
            },
            e
        }();
    $i.dataAttrPrefix = "";
    var Ws = function () {
            function e(e, t) {
                var n = this;
                void 0 === t && (t = {}),
                this.handlePointerDown = function (e) {
                    var t = n.dragging,
                        r = n.settings,
                        o = r.minDistance,
                        i = r.longPressDelay;
                    t.minDistance = null != o
                        ? o
                        : e.isTouch
                            ? 0
                            : on.eventDragMinDistance,
                    t.delay = e.isTouch
                        ? null != i
                            ? i
                            : on.longPressDelay
                        : 0
                },
                this.handleDragStart = function (e) {
                    e.isTouch && n.dragging.delay && e
                        .subjectEl
                        .classList
                        .contains("fc-event") && n
                        .dragging
                        .mirror
                        .getMirrorEl()
                        .classList
                        .add("fc-event-selected")
                },
                this.settings = t;
                var r = this.dragging = new _s(e);
                r.touchScrollAllowed = !1,
                null != t.itemSelector && (r.pointer.selector = t.itemSelector),
                null != t.appendTo && (r.mirror.parentNode = t.appendTo),
                r
                    .emitter
                    .on("pointerdown", this.handlePointerDown),
                r
                    .emitter
                    .on("dragstart", this.handleDragStart),
                new Ls(r, t.eventData)
            }
            return e.prototype.destroy = function () {
                this
                    .dragging
                    .destroy()
            },
            e
        }(),
        Vs = function (e) {
            function t(t) {
                var n = e.call(this, t) || this;
                n.shouldIgnoreMove = !1,
                n.mirrorSelector = "",
                n.currentMirrorEl = null,
                n.handlePointerDown = function (e) {
                    n
                        .emitter
                        .trigger("pointerdown", e),
                    n.shouldIgnoreMove || n
                        .emitter
                        .trigger("dragstart", e)
                },
                n.handlePointerMove = function (e) {
                    n.shouldIgnoreMove || n
                        .emitter
                        .trigger("dragmove", e)
                },
                n.handlePointerUp = function (e) {
                    n
                        .emitter
                        .trigger("pointerup", e),
                    n.shouldIgnoreMove || n
                        .emitter
                        .trigger("dragend", e)
                };
                var r = n.pointer = new ys(t);
                return r
                    .emitter
                    .on("pointerdown", n.handlePointerDown),
                r
                    .emitter
                    .on("pointermove", n.handlePointerMove),
                r
                    .emitter
                    .on("pointerup", n.handlePointerUp),
                n
            }
            return n(t, e),
            t.prototype.destroy = function () {
                this
                    .pointer
                    .destroy()
            },
            t.prototype.setIgnoreMove = function (e) {
                this.shouldIgnoreMove = e
            },
            t.prototype.setMirrorIsVisible = function (e) {
                if (e) 
                    this.currentMirrorEl && (
                        this.currentMirrorEl.style.visibility = "",
                        this.currentMirrorEl = null
                    );
                else {
                    var t = this.mirrorSelector
                        ? document.querySelector(this.mirrorSelector)
                        : null;
                    t && (this.currentMirrorEl = t, t.style.visibility = "hidden")
                }
            },
            t
        }(Ki),
        Fs = function () {
            function e(e, t) {
                var n = document;
                e === document || e instanceof Element
                    ? (n = e, t = t || {})
                    : t = e || {};
                var r = this.dragging = new Vs(n);
                "string" == typeof t.itemSelector
                    ? r.pointer.selector = t.itemSelector
                    : n === document && (r.pointer.selector = "[data-event]"),
                "string" == typeof t.mirrorSelector && (r.mirrorSelector = t.mirrorSelector),
                new Ls(r, t.eventData)
            }
            return e.prototype.destroy = function () {
                this
                    .dragging
                    .destroy()
            },
            e
        }(),
        zs = Ho({
            componentInteractions: [
                Ps, Is, Ns, Hs
            ],
            calendarInteractions: [Os],
            elementDraggingImpl: _s,
            optionRefiners: As,
            listenerRefiners: Us
        }),
        Bs = function (e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.headerElRef = Eo(),
                t
            }
            return n(t, e),
            t.prototype.renderSimpleLayout = function (e, t) {
                var n = this.props,
                    r = this.context,
                    o = [],
                    i = ja(r.options);
                return e && o.push({
                    type: "header",
                    key: "header",
                    isSticky: i,
                    chunk: {
                        elRef: this.headerElRef,
                        tableClassName: "fc-col-header",
                        rowContent: e
                    }
                }),
                o.push({
                    type: "body",
                    key: "body",
                    liquid: !0,
                    chunk: {
                        content: t
                    }
                }),
                mo(qo, {
                    viewSpec: r.viewSpec
                }, (function (e, t) {
                    return mo("div", {
                        ref: e,
                        className: ["fc-daygrid"]
                            .concat(t)
                            .join(" ")
                    }, mo(qa, {
                        liquid: !n.isHeightAuto && !n.forPrint,
                        collapsibleWidth: n.forPrint,
                        cols: [],
                        sections: o
                    }))
                }))
            },
            t.prototype.renderHScrollLayout = function (e, t, n, r) {
                var o = this.context.pluginHooks.scrollGridImpl;
                if (!o) 
                    throw new Error("No ScrollGrid implementation");
                var i = this.props,
                    a = this.context,
                    s = !i.forPrint && ja(a.options),
                    l = !i.forPrint && Ga(a.options),
                    u = [];
                return e && u.push({
                    type: "header",
                    key: "header",
                    isSticky: s,
                    chunks: [
                        {
                            key: "main",
                            elRef: this.headerElRef,
                            tableClassName: "fc-col-header",
                            rowContent: e
                        }
                    ]
                }),
                u.push({
                    type: "body",
                    key: "body",
                    liquid: !0,
                    chunks: [
                        {
                            key: "main",
                            content: t
                        }
                    ]
                }),
                l && u.push({
                    type: "footer",
                    key: "footer",
                    isSticky: !0,
                    chunks: [
                        {
                            key: "main",
                            content: Ba
                        }
                    ]
                }),
                mo(qo, {
                    viewSpec: a.viewSpec
                }, (function (e, t) {
                    return mo("div", {
                        ref: e,
                        className: ["fc-daygrid"]
                            .concat(t)
                            .join(" ")
                    }, mo(o, {
                        liquid: !i.isHeightAuto && !i.forPrint,
                        collapsibleWidth: i.forPrint,
                        colGroups: [
                            {
                                cols: [
                                    {
                                        span: n,
                                        minWidth: r
                                    }
                                ]
                            }
                        ],
                        sections: u
                    }))
                }))
            },
            t
        }(No);
    function js(e, t) {
        for (var n = [], r = 0; r < t; r += 1) 
            n[r] = [];
        for (var o = 0, i = e; o < i.length; o++) {
            var a = i[o];
            n[a.row].push(a)
        }
        return n
    }
    function Gs(e, t) {
        for (var n = [], r = 0; r < t; r += 1) 
            n[r] = [];
        for (var o = 0, i = e; o < i.length; o++) {
            var a = i[o];
            n[a.firstCol].push(a)
        }
        return n
    }
    function qs(e, t) {
        var n = [];
        if (e) {
            for (a = 0; a < t; a += 1) 
                n[a] = {
                    affectedInstances: e.affectedInstances,
                    isEvent: e.isEvent,
                    segs: []
                };
            for (var r = 0, o = e.segs; r < o.length; r++) {
                var i = o[r];
                n[i.row]
                    .segs
                    .push(i)
            }
        } else 
            for (var a = 0; a < t; a += 1) 
                n[a] = null;
    return n
    }
    var Ys = function (e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return n(t, e),
        t.prototype.render = function () {
            var e = this.props,
                t = this.context.options.navLinks
                    ? {
                        "data-navlink": Jr(e.date),
                        tabIndex: 0
                    }
                    : {};
            return mo(Ja, {
                date: e.date,
                dateProfile: e.dateProfile,
                todayRange: e.todayRange,
                showDayNumber: e.showDayNumber,
                extraHookProps: e.extraHookProps,
                defaultContent: Zs
            }, (function (n, o) {
                return (o || e.forceDayTop) && mo("div", {
                    className: "fc-daygrid-day-top",
                    ref: n
                }, mo("a", r({
                    className: "fc-daygrid-day-number"
                }, t), o || mo(So, null, " ")))
            }))
        },
        t
    }(xo);
    function Zs(e) {
        return e.dayNumberText
    }
    var Xs = nn({
        hour: "numeric",
        minute: "2-digit",
        omitZeroMinute: !0,
        meridiem: "narrow"
    });
    function Ks(e) {
        var t = e.eventRange.ui.display;
        return "list-item" === t || "auto" === t && !e.eventRange.def.allDay && e.firstCol === e.lastCol && e.isStart && e.isEnd
    }
    var $s = function (e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return n(t, e),
            t.prototype.render = function () {
                var e = this.props;
                return mo(Za, r({}, e, {
                    extraClassNames: [
                        "fc-daygrid-event", "fc-daygrid-block-event", "fc-h-event"
                    ],
                    defaultTimeFormat: Xs,
                    defaultDisplayEventEnd: e.defaultDisplayEventEnd,
                    disableResizing: !e.seg.eventRange.def.allDay
                }))
            },
            t
        }(xo),
        Js = function (e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return n(t, e),
            t.prototype.render = function () {
                var e = this.props,
                    t = this.context,
                    n = t.options.eventTimeFormat || Xs,
                    o = tr(e.seg, n, t, !0, e.defaultDisplayEventEnd);
                return mo(Ya, {
                    seg: e.seg,
                    timeText: o,
                    defaultContent: Qs,
                    isDragging: e.isDragging,
                    isResizing: !1,
                    isDateSelecting: !1,
                    isSelected: e.isSelected,
                    isPast: e.isPast,
                    isFuture: e.isFuture,
                    isToday: e.isToday
                }, (function (t, n, o, i) {
                    return mo("a", r({
                        className: ["fc-daygrid-event", "fc-daygrid-dot-event"]
                            .concat(n)
                            .join(" "),
                        ref: t
                    }, (
                        a = e.seg,
                        (s = a.eventRange.def.url)
                            ? {
                                href: s
                            }
                            : {}
                    )), i);
                    var a,
                        s
                }))
            },
            t
        }(xo);
    function Qs(e) {
        return mo(So, null, mo("div", {
            className: "fc-daygrid-event-dot",
            style: {
                borderColor: e.borderColor || e.backgroundColor
            }
        }), e.timeText && mo("div", {
            className: "fc-event-time"
        }, e.timeText), mo("div", {
            className: "fc-event-title"
        }, e.event.title || mo(So, null, " ")))
    }
    var el = function (e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.compileSegs = Ft(tl),
            t
        }
        return n(t, e),
        t.prototype.render = function () {
            var e = this.props,
                t = this.compileSegs(e.singlePlacements),
                n = t.allSegs,
                o = t.invisibleSegs;
            return mo(ls, {
                dateProfile: e.dateProfile,
                todayRange: e.todayRange,
                allDayDate: e.allDayDate,
                moreCnt: e.moreCnt,
                allSegs: n,
                hiddenSegs: o,
                alignmentElRef: e.alignmentElRef,
                alignGridTop: e.alignGridTop,
                extraDateSpan: e.extraDateSpan,
                popoverContent: function () {
                    var t = (
                        e.eventDrag
                            ? e.eventDrag.affectedInstances
                            : null
                    ) || (
                        e.eventResize
                            ? e.eventResize.affectedInstances
                            : null
                    ) || {};
                    return mo(So, null, n.map((function (n) {
                        var o = n.eventRange.instance.instanceId;
                        return mo(
                            "div",
                            {
                                className: "fc-daygrid-event-harness",
                                key: o,
                                style: {
                                    visibility: t[o]
                                        ? "hidden"
                                        : ""
                                }
                            },
                            Ks(n)
                                ? mo(Js, r({
                                    seg: n,
                                    isDragging: !1,
                                    isSelected: o === e.eventSelection,
                                    defaultDisplayEventEnd: !1
                                }, nr(n, e.todayRange)))
                                : mo($s, r({
                                    seg: n,
                                    isDragging: !1,
                                    isResizing: !1,
                                    isDateSelecting: !1,
                                    isSelected: o === e.eventSelection,
                                    defaultDisplayEventEnd: !1
                                }, nr(n, e.todayRange)))
                        )
                    })))
                }
            }, (function (e, t, n, r, o) {
                return mo("a", {
                    ref: e,
                    className: ["fc-daygrid-more-link"]
                        .concat(t)
                        .join(" "),
                    onClick: o
                }, r)
            }))
        },
        t
    }(xo);
    function tl(e) {
        for (var t = [], n = [], r = 0, o = e; r < o.length; r++) {
            var i = o[r];
            t.push(i.seg),
            i.isVisible || n.push(i.seg)
        }
        return {allSegs: t, invisibleSegs: n}
    }
    var nl = nn({week: "narrow"}),
        rl = function (e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.rootElRef = Eo(),
                t.handleRootEl = function (e) {
                    Io(t.rootElRef, e),
                    Io(t.props.elRef, e)
                },
                t
            }
            return n(t, e),
            t.prototype.render = function () {
                var e = this,
                    t = e.props,
                    n = e.context,
                    o = e.rootElRef,
                    i = n.options,
                    a = t.date,
                    s = t.dateProfile,
                    l = i.navLinks
                        ? {
                            "data-navlink": Jr(a, "week"),
                            tabIndex: 0
                        }
                        : {};
                return mo(es, {
                    date: a,
                    dateProfile: s,
                    todayRange: t.todayRange,
                    showDayNumber: t.showDayNumber,
                    extraHookProps: t.extraHookProps,
                    elRef: this.handleRootEl
                }, (function (e, n, i, u) {
                    return mo("td", r({
                        ref: e,
                        className: ["fc-daygrid-day"]
                            .concat(n, t.extraClassNames || [])
                            .join(" ")
                    }, i, t.extraDataAttrs), mo("div", {
                        className: "fc-daygrid-day-frame fc-scrollgrid-sync-inner",
                        ref: t.innerElRef
                    }, t.showWeekNumber && mo(os, {
                        date: a,
                        defaultFormat: nl
                    }, (function (e, t, n, o) {
                        return mo("a", r({
                            ref: e,
                            className: ["fc-daygrid-week-number"]
                                .concat(t)
                                .join(" ")
                        }, l), o)
                    })), !u && mo(Ys, {
                        date: a,
                        dateProfile: s,
                        showDayNumber: t.showDayNumber,
                        forceDayTop: t.forceDayTop,
                        todayRange: t.todayRange,
                        extraHookProps: t.extraHookProps
                    }), mo("div", {
                        className: "fc-daygrid-day-events",
                        ref: t.fgContentElRef
                    }, t.fgContent, mo("div", {
                        className: "fc-daygrid-day-bottom",
                        style: {
                            marginTop: t.moreMarginTop
                        }
                    }, mo(el, {
                        allDayDate: a,
                        singlePlacements: t.singlePlacements,
                        moreCnt: t.moreCnt,
                        alignmentElRef: o,
                        alignGridTop: !t.showDayNumber,
                        extraDateSpan: t.extraDateSpan,
                        dateProfile: t.dateProfile,
                        eventSelection: t.eventSelection,
                        eventDrag: t.eventDrag,
                        eventResize: t.eventResize,
                        todayRange: t.todayRange
                    }))), mo("div", {
                        className: "fc-daygrid-day-bg"
                    }, t.bgContent)))
                }))
            },
            t
        }(No);
    function ol(e, t, n, r, o, i, a) {
        var s = new al;
        s.allowReslicing = !0,
        s.strictOrder = r,
        !0 === t || !0 === n
            ? (s.maxCoord = i, s.hiddenConsumes = !0)
            : "number" == typeof t
                ? s.maxStackCnt = t
                : "number" == typeof n && (s.maxStackCnt = n, s.hiddenConsumes = !0);
        for (var l = [], u = [], c = 0; c < e.length; c += 1) {
            var d = o[(R = e[c]).eventRange.instance.instanceId];
            null != d
                ? l.push({
                    index: c,
                    thickness: d,
                    span: {
                        start: R.firstCol,
                        end: R.lastCol + 1
                    }
                })
                : u.push(R)
        }
        for (
            var p = s.addSegs(l),
            f = function (e, t, n) {
                for (
                    var r = function (e, t) {
                        for (var n = [], r = 0; r < t; r += 1) 
                            n.push([]);
                        for (var o = 0, i = e; o < i.length; o++) {
                            var a = i[o];
                            for (r = a.span.start; r < a.span.end; r += 1) 
                                n[r].push(a)
                        }
                        return n
                    }(e, n.length),
                    o = [],
                    i = [],
                    a = [],
                    s = 0; s < n.length; s += 1
                ) {
                    for (var l = r[s], u = [], c = 0, d = 0, p = 0, f = l; p < f.length; p++) {
                        var h = t[(y = f[p]).index];
                        u.push({
                            seg: il(h, s, s + 1, n),
                            isVisible: !0,
                            isAbsolute: !1,
                            absoluteTop: 0,
                            marginTop: y.levelCoord - c
                        }),
                        c = y.levelCoord + y.thickness
                    }
                    var v = [];
                    c = 0,
                    d = 0;
                    for (var g = 0, m = l; g < m.length; g++) {
                        h = t[(y = m[g]).index];
                        var y,
                            E = y.span.end - y.span.start > 1,
                            S = y.span.start === s;
                        d += y.levelCoord - c,
                        c = y.levelCoord + y.thickness,
                        E
                            ? (d += y.thickness, S && v.push({
                                seg: il(h, y.span.start, y.span.end, n),
                                isVisible: !0,
                                isAbsolute: !0,
                                absoluteTop: y.levelCoord,
                                marginTop: 0
                            }))
                            : S && (v.push({
                                seg: il(h, y.span.start, y.span.end, n),
                                isVisible: !0,
                                isAbsolute: !1,
                                absoluteTop: 0,
                                marginTop: d
                            }), d = 0)
                    }
                    o.push(u),
                    i.push(v),
                    a.push(d)
                }
                return {singleColPlacements: o, multiColPlacements: i, leftoverMargins: a}
            }(s.toRects(), e, a),
            h = f.singleColPlacements,
            v = f.multiColPlacements,
            g = f.leftoverMargins,
            m = [],
            y = [],
            E = 0,
            S = u; E < S.length; E++
        ) {
            v[(R = S[E]).firstCol].push({
                seg: R,
                isVisible: !1,
                isAbsolute: !0,
                absoluteTop: 0,
                marginTop: 0
            });
            for (var D = R.firstCol; D <= R.lastCol; D += 1) 
                h[D].push({
                    seg: il(R, D, D + 1, a),
                    isVisible: !1,
                    isAbsolute: !1,
                    absoluteTop: 0,
                    marginTop: 0
                })
        }
        for (D = 0; D < a.length; D += 1) 
            m.push(0);
        for (var b = 0, C = p; b < C.length; b++) {
            var w = C[b],
                R = e[w.index],
                _ = w.span;
            v[_.start].push({
                seg: il(R, _.start, _.end, a),
                isVisible: !1,
                isAbsolute: !0,
                absoluteTop: 0,
                marginTop: 0
            });
            for (D = _.start; D < _.end; D += 1) 
                m[D] += 1,
                h[D].push({
                    seg: il(R, D, D + 1, a),
                    isVisible: !1,
                    isAbsolute: !1,
                    absoluteTop: 0,
                    marginTop: 0
                })
        }
        for (D = 0; D < a.length; D += 1) 
            y.push(g[D]);
        return {singleColPlacements: h, multiColPlacements: v, moreCnts: m, moreMarginTops: y}
    }
    function il(e, t, n, o) {
        if (e.firstCol === t && e.lastCol === n - 1) 
            return e;
        var i = e.eventRange,
            a = i.range,
            s = Wn(a, {
                start: o[t].date,
                end: Ke(o[n - 1].date, 1)
            });
        return r(r({}, e), {
            firstCol: t,
            lastCol: n - 1,
            eventRange: {
                def: i.def,
                ui: r(r({}, i.ui), {
                    durationEditable: !1
                }),
                instance: i.instance,
                range: s
            },
            isStart: e.isStart && s
                .start
                .valueOf() === a
                .start
                .valueOf(),
            isEnd: e.isEnd && s
                .end
                .valueOf() === a
                .end
                .valueOf()
        })
    }
    var al = function (e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.hiddenConsumes = !1,
                t.forceHidden = {},
                t
            }
            return n(t, e),
            t.prototype.addSegs = function (t) {
                for (
                    var n = this,
                    r = e.prototype.addSegs.call(this, t),
                    o = this.entriesByLevel,
                    i = function (e) {
                        return !n.forceHidden[Vi(e)]
                    },
                    a = 0;
                    a < o.length;
                    a += 1
                ) 
                    o[a] = o[a].filter(i);
                return r
            },
            t.prototype.handleInvalidInsertion = function (t, n, o) {
                var i = this.entriesByLevel,
                    a = this.forceHidden,
                    s = t.touchingLevel;
                if (this.hiddenConsumes && s >= 0) 
                    for (var l = t.lateralStart; l < t.lateralEnd; l += 1) {
                        var u = i[s][l];
                        if (this.allowReslicing) {
                            var c = r(r({}, u), {
                                span: Bi(u.span, n.span)
                            });
                            a[d = Vi(c)] || (a[d] = !0, i[s][l] = c, this.splitEntry(u, n, o))
                        } else {
                            var d;
                            a[d = Vi(u)] || (a[d] = !0, o.push(u))
                        }
                    }
                return e
                    .prototype
                    .handleInvalidInsertion
                    .call(this, t, n, o)
            },
            t
        }(Li),
        sl = function (e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.cellElRefs = new Ia,
                t.frameElRefs = new Ia,
                t.fgElRefs = new Ia,
                t.segHarnessRefs = new Ia,
                t.rootElRef = Eo(),
                t.state = {
                    framePositions: null,
                    maxContentHeight: null,
                    eventInstanceHeights: {}
                },
                t
            }
            return n(t, e),
            t.prototype.render = function () {
                var e = this,
                    t = this,
                    n = t.props,
                    r = t.state,
                    o = t.context.options,
                    i = n.cells.length,
                    a = Gs(n.businessHourSegs, i),
                    s = Gs(n.bgEventSegs, i),
                    l = Gs(this.getHighlightSegs(), i),
                    u = Gs(this.getMirrorSegs(), i),
                    c = ol(
                        Kn(n.fgEventSegs, o.eventOrder),
                        n.dayMaxEvents,
                        n.dayMaxEventRows,
                        o.eventOrderStrict,
                        r.eventInstanceHeights,
                        r.maxContentHeight,
                        n.cells
                    ),
                    d = c.singleColPlacements,
                    p = c.multiColPlacements,
                    f = c.moreCnts,
                    h = c.moreMarginTops,
                    v = n.eventDrag && n.eventDrag.affectedInstances || n.eventResize && n.eventResize.affectedInstances || {};
                return mo("tr", {
                    ref: this.rootElRef
                }, n.renderIntro && n.renderIntro(), n.cells.map((function (t, r) {
                    var o = e.renderFgSegs(
                            r,
                            n.forPrint
                                ? d[r]
                                : p[r],
                            n.todayRange,
                            v
                        ),
                        i = e.renderFgSegs(
                            r,
                            function (e, t) {
                                if (!e.length) 
                                    return [];
                                var n = function (e) {
                                    for (var t = {}, n = 0, r = e; n < r.length; n++) 
                                        for (var o = 0, i = r[n]; o < i.length; o++) {
                                            var a = i[o];
                                            t[a.seg.eventRange.instance.instanceId] = a.absoluteTop
                                        }
                                    return e
                                }(t);
                                return e.map((function (e) {
                                    return {
                                        seg: e,
                                        isVisible: !0,
                                        isAbsolute: !0,
                                        absoluteTop: n[e.eventRange.instance.instanceId],
                                        marginTop: 0
                                    }
                                }))
                            }(u[r], p),
                            n.todayRange,
                            {},
                            Boolean(n.eventDrag),
                            Boolean(n.eventResize),
                            !1
                        );
                    return mo(rl, {
                        key: t.key,
                        elRef: e
                            .cellElRefs
                            .createRef(t.key),
                        innerElRef: e
                            .frameElRefs
                            .createRef(t.key),
                        dateProfile: n.dateProfile,
                        date: t.date,
                        showDayNumber: n.showDayNumbers,
                        showWeekNumber: n.showWeekNumbers && 0 === r,
                        forceDayTop: n.showWeekNumbers,
                        todayRange: n.todayRange,
                        eventSelection: n.eventSelection,
                        eventDrag: n.eventDrag,
                        eventResize: n.eventResize,
                        extraHookProps: t.extraHookProps,
                        extraDataAttrs: t.extraDataAttrs,
                        extraClassNames: t.extraClassNames,
                        extraDateSpan: t.extraDateSpan,
                        moreCnt: f[r],
                        moreMarginTop: h[r],
                        singlePlacements: d[r],
                        fgContentElRef: e
                            .fgElRefs
                            .createRef(t.key),
                        fgContent: mo(So, null, mo(So, null, o), mo(So, null, i)),
                        bgContent: mo(
                            So,
                            null,
                            e.renderFillSegs(l[r], "highlight"),
                            e.renderFillSegs(a[r], "non-business"),
                            e.renderFillSegs(s[r], "bg-event")
                        )
                    })
                })))
            },
            t.prototype.componentDidMount = function () {
                this.updateSizing(!0)
            },
            t.prototype.componentDidUpdate = function (e, t) {
                var n = this.props;
                this.updateSizing(!Et(e, n))
            },
            t.prototype.getHighlightSegs = function () {
                var e = this.props;
                return e.eventDrag && e.eventDrag.segs.length
                    ? e.eventDrag.segs
                    : e.eventResize && e.eventResize.segs.length
                        ? e.eventResize.segs
                        : e.dateSelectionSegs
            },
            t.prototype.getMirrorSegs = function () {
                var e = this.props;
                return e.eventResize && e.eventResize.segs.length
                    ? e.eventResize.segs
                    : []
            },
            t.prototype.renderFgSegs = function (e, t, n, o, i, a, s) {
                var l = this.context,
                    u = this.props.eventSelection,
                    c = this.state.framePositions,
                    d = 1 === this.props.cells.length,
                    p = i || a || s,
                    f = [];
                if (c) 
                    for (var h = 0, v = t; h < v.length; h++) {
                        var g = v[h],
                            m = g.seg,
                            y = m.eventRange.instance.instanceId,
                            E = y + ":" + e,
                            S = g.isVisible && !o[y],
                            D = g.isAbsolute,
                            b = "",
                            C = "";
                        D && (
                            l.isRtl
                                ? (C = 0, b = c.lefts[m.lastCol] - c.lefts[m.firstCol])
                                : (b = 0, C = c.rights[m.firstCol] - c.rights[m.lastCol])
                        ),
                        f.push(mo(
                            "div",
                            {
                                className: "fc-daygrid-event-harness" + (
                                    D
                                        ? " fc-daygrid-event-harness-abs"
                                        : ""
                                ),
                                key: E,
                                ref: p
                                    ? null
                                    : this
                                        .segHarnessRefs
                                        .createRef(E),
                                style: {
                                    visibility: S
                                        ? ""
                                        : "hidden",
                                    marginTop: D
                                        ? ""
                                        : g.marginTop,
                                    top: D
                                        ? g.absoluteTop
                                        : "",
                                    left: b,
                                    right: C
                                }
                            },
                            Ks(m)
                                ? mo(Js, r({
                                    seg: m,
                                    isDragging: i,
                                    isSelected: y === u,
                                    defaultDisplayEventEnd: d
                                }, nr(m, n)))
                                : mo($s, r({
                                    seg: m,
                                    isDragging: i,
                                    isResizing: a,
                                    isDateSelecting: s,
                                    isSelected: y === u,
                                    defaultDisplayEventEnd: d
                                }, nr(m, n)))
                        ))
                    }
                return f
            },
            t.prototype.renderFillSegs = function (e, t) {
                var n = this.context.isRtl,
                    i = this.props.todayRange,
                    a = this.state.framePositions,
                    s = [];
                if (a) 
                    for (var l = 0, u = e; l < u.length; l++) {
                        var c = u[l],
                            d = n
                                ? {
                                    right: 0,
                                    left: a.lefts[c.lastCol] - a.lefts[c.firstCol]
                                }
                                : {
                                    left: 0,
                                    right: a.rights[c.firstCol] - a.rights[c.lastCol]
                                };
                        s.push(mo(
                            "div",
                            {
                                key: or(c.eventRange),
                                className: "fc-daygrid-bg-harness",
                                style: d
                            },
                            "bg-event" === t
                                ? mo(ns, r({
                                    seg: c
                                }, nr(c, i)))
                                : ts(t)
                        ))
                    }
                return mo.apply(void 0, o([
                    So, {}
                ], s))
            },
            t.prototype.updateSizing = function (e) {
                var t = this.props,
                    n = this.frameElRefs;
                if (!t.forPrint && null !== t.clientWidth) {
                    if (e) {
                        var r = t
                            .cells
                            .map((function (e) {
                                return n.currentMap[e.key]
                            }));
                        if (r.length) {
                            var o = this.rootElRef.current;
                            this.setState({
                                framePositions: new co(o, r, !0, !1)
                            })
                        }
                    }
                    var i = !0 === t.dayMaxEvents || !0 === t.dayMaxEventRows;
                    this.setState({
                        eventInstanceHeights: this.queryEventInstanceHeights(),
                        maxContentHeight: i
                            ? this.computeMaxContentHeight()
                            : null
                    })
                }
            },
            t.prototype.queryEventInstanceHeights = function () {
                var e = this.segHarnessRefs.currentMap,
                    t = {};
                for (var n in e) {
                    var r = Math.round(e[n].getBoundingClientRect().height),
                        o = n.split(":")[0];
                    t[o] = Math.max(t[o] || 0, r)
                }
                return t
            },
            t.prototype.computeMaxContentHeight = function () {
                var e = this
                        .props
                        .cells[0]
                        .key,
                    t = this
                        .cellElRefs
                        .currentMap[e],
                    n = this
                        .fgElRefs
                        .currentMap[e];
                return t
                    .getBoundingClientRect()
                    .bottom - n
                    .getBoundingClientRect()
                    .top
            },
            t.prototype.getCellEls = function () {
                var e = this.cellElRefs.currentMap;
                return this
                    .props
                    .cells
                    .map((function (t) {
                        return e[t.key]
                    }))
            },
            t
        }(No);
    sl.addStateEquality({eventInstanceHeights: Et});
    var ll = function (e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.splitBusinessHourSegs = Ft(js),
            t.splitBgEventSegs = Ft(js),
            t.splitFgEventSegs = Ft(js),
            t.splitDateSelectionSegs = Ft(js),
            t.splitEventDrag = Ft(qs),
            t.splitEventResize = Ft(qs),
            t.rowRefs = new Ia,
            t.handleRootEl = function (e) {
                t.rootEl = e,
                e
                    ? t
                        .context
                        .registerInteractiveComponent(t, {
                            el: e,
                            isHitComboAllowed: t.props.isHitComboAllowed
                        })
                    : t
                        .context
                        .unregisterInteractiveComponent(t)
            },
            t
        }
        return n(t, e),
        t.prototype.render = function () {
            var e = this,
                t = this.props,
                n = t.dateProfile,
                r = t.dayMaxEventRows,
                o = t.dayMaxEvents,
                i = t.expandRows,
                a = t.cells.length,
                s = this.splitBusinessHourSegs(t.businessHourSegs, a),
                l = this.splitBgEventSegs(t.bgEventSegs, a),
                u = this.splitFgEventSegs(t.fgEventSegs, a),
                c = this.splitDateSelectionSegs(t.dateSelectionSegs, a),
                d = this.splitEventDrag(t.eventDrag, a),
                p = this.splitEventResize(t.eventResize, a),
                f = !0 === o || !0 === r;
            return f && !i && (f = !1, r = null, o = null),
            mo("div", {
                className: [
                    "fc-daygrid-body", f
                        ? "fc-daygrid-body-balanced"
                        : "fc-daygrid-body-unbalanced",
                    i
                        ? ""
                        : "fc-daygrid-body-natural"
                ].join(" "),
                ref: this.handleRootEl,
                style: {
                    width: t.clientWidth,
                    minWidth: t.tableMinWidth
                }
            }, mo(ha, {
                unit: "day"
            }, (function (f, h) {
                return mo(So, null, mo("table", {
                    className: "fc-scrollgrid-sync-table",
                    style: {
                        width: t.clientWidth,
                        minWidth: t.tableMinWidth,
                        height: i
                            ? t.clientHeight
                            : ""
                    }
                }, t.colGroupNode, mo("tbody", null, t.cells.map((function (i, f) {
                    return mo(sl, {
                        ref: e
                            .rowRefs
                            .createRef(f),
                        key: i.length
                            ? i[0]
                                .date
                                .toISOString()
                            : f,
                        showDayNumbers: a > 1,
                        showWeekNumbers: t.showWeekNumbers,
                        todayRange: h,
                        dateProfile: n,
                        cells: i,
                        renderIntro: t.renderRowIntro,
                        businessHourSegs: s[f],
                        eventSelection: t.eventSelection,
                        bgEventSegs: l[f].filter(ul),
                        fgEventSegs: u[f],
                        dateSelectionSegs: c[f],
                        eventDrag: d[f],
                        eventResize: p[f],
                        dayMaxEvents: o,
                        dayMaxEventRows: r,
                        clientWidth: t.clientWidth,
                        clientHeight: t.clientHeight,
                        forPrint: t.forPrint
                    })
                })))))
            })))
        },
        t.prototype.prepareHits = function () {
            this.rowPositions = new co(
                this.rootEl,
                this.rowRefs.collect().map((function (e) {
                    return e.getCellEls()[0]
                })),
                !1,
                !0
            ),
            this.colPositions = new co(
                this.rootEl,
                this.rowRefs.currentMap[0].getCellEls(),
                !0,
                !1
            )
        },
        t.prototype.queryHit = function (e, t) {
            var n = this.colPositions,
                o = this.rowPositions,
                i = n.leftToIndex(e),
                a = o.topToIndex(t);
            if (null != a && null != i) {
                var s = this
                    .props
                    .cells[a][i];
                return {
                    dateProfile: this.props.dateProfile,
                    dateSpan: r({
                        range: this.getCellRange(a, i),
                        allDay: !0
                    }, s.extraDateSpan),
                    dayEl: this.getCellEl(a, i),
                    rect: {
                        left: n.lefts[i],
                        right: n.rights[i],
                        top: o.tops[a],
                        bottom: o.bottoms[a]
                    },
                    layer: 0
                }
            }
            return null
        },
        t.prototype.getCellEl = function (e, t) {
            return this
                .rowRefs
                .currentMap[e]
                .getCellEls()[t]
        },
        t.prototype.getCellRange = function (e, t) {
            var n = this
                .props
                .cells[e][t]
                .date;
            return {
                start: n,
                end: Ke(n, 1)
            }
        },
        t
    }(No);
    function ul(e) {
        return e.eventRange.def.allDay
    }
    var cl = function (e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.forceDayIfListItem = !0,
                t
            }
            return n(t, e),
            t.prototype.sliceRange = function (e, t) {
                return t.sliceRange(e)
            },
            t
        }(Sa),
        dl = function (e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.slicer = new cl,
                t.tableRef = Eo(),
                t
            }
            return n(t, e),
            t.prototype.render = function () {
                var e = this.props,
                    t = this.context;
                return mo(ll, r(
                    {
                        ref: this.tableRef
                    },
                    this.slicer.sliceProps(e, e.dateProfile, e.nextDayThreshold, t, e.dayTableModel),
                    {
                        dateProfile: e.dateProfile,
                        cells: e.dayTableModel.cells,
                        colGroupNode: e.colGroupNode,
                        tableMinWidth: e.tableMinWidth,
                        renderRowIntro: e.renderRowIntro,
                        dayMaxEvents: e.dayMaxEvents,
                        dayMaxEventRows: e.dayMaxEventRows,
                        showWeekNumbers: e.showWeekNumbers,
                        expandRows: e.expandRows,
                        headerAlignElRef: e.headerAlignElRef,
                        clientWidth: e.clientWidth,
                        clientHeight: e.clientHeight,
                        forPrint: e.forPrint
                    }
                ))
            },
            t
        }(No),
        pl = function (e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.buildDayTableModel = Ft(fl),
                t.headerRef = Eo(),
                t.tableRef = Eo(),
                t
            }
            return n(t, e),
            t.prototype.render = function () {
                var e = this,
                    t = this.context,
                    n = t.options,
                    r = t.dateProfileGenerator,
                    o = this.props,
                    i = this.buildDayTableModel(o.dateProfile, r),
                    a = n.dayHeaders && mo(ga, {
                        ref: this.headerRef,
                        dateProfile: o.dateProfile,
                        dates: i.headerDates,
                        datesRepDistinctDays: 1 === i.rowCnt
                    }),
                    s = function (t) {
                        return mo(dl, {
                            ref: e.tableRef,
                            dateProfile: o.dateProfile,
                            dayTableModel: i,
                            businessHours: o.businessHours,
                            dateSelection: o.dateSelection,
                            eventStore: o.eventStore,
                            eventUiBases: o.eventUiBases,
                            eventSelection: o.eventSelection,
                            eventDrag: o.eventDrag,
                            eventResize: o.eventResize,
                            nextDayThreshold: n.nextDayThreshold,
                            colGroupNode: t.tableColGroupNode,
                            tableMinWidth: t.tableMinWidth,
                            dayMaxEvents: n.dayMaxEvents,
                            dayMaxEventRows: n.dayMaxEventRows,
                            showWeekNumbers: n.weekNumbers,
                            expandRows: !o.isHeightAuto,
                            headerAlignElRef: e.headerElRef,
                            clientWidth: t.clientWidth,
                            clientHeight: t.clientHeight,
                            forPrint: o.forPrint
                        })
                    };
                return n.dayMinWidth
                    ? this.renderHScrollLayout(a, s, i.colCnt, n.dayMinWidth)
                    : this.renderSimpleLayout(a, s)
            },
            t
        }(Bs);
    function fl(e, t) {
        var n = new ya(e.renderRange, t);
        return new Ea(n, /year|month|week/.test(e.currentRangeUnit))
    }
    var hl = Ho({
            initialView: "dayGridMonth",
            views: {
                dayGrid: {
                    component: pl,
                    dateProfileGeneratorClass: function (e) {
                        function t() {
                            return null !== e && e.apply(this, arguments) || this
                        }
                        return n(t, e),
                        t.prototype.buildRenderRange = function (t, n, r) {
                            var o,
                                i = this.props.dateEnv,
                                a = e
                                    .prototype
                                    .buildRenderRange
                                    .call(this, t, n, r),
                                s = a.start,
                                l = a.end;
                            (/^(year|month)$/.test(n) && (
                                s = i.startOfWeek(s),
                                (o = i.startOfWeek(l)).valueOf() !== l.valueOf() && (l = Xe(o, 1))
                            ), this.props.monthMode && this.props.fixedWeekCount) && (
                                l = Xe(l, 6 - Math.ceil(Je(s, l)))
                            );
                            return {start: s, end: l}
                        },
                        t
                    }($o)
                },
                dayGridDay: {
                    type: "dayGrid",
                    duration: {
                        days: 1
                    }
                },
                dayGridWeek: {
                    type: "dayGrid",
                    duration: {
                        weeks: 1
                    }
                },
                dayGridMonth: {
                    type: "dayGrid",
                    duration: {
                        months: 1
                    },
                    monthMode: !0,
                    fixedWeekCount: !0
                }
            }
        }),
        vl = function (e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return n(t, e),
            t.prototype.getKeyInfo = function () {
                return {allDay: {}, timed: {}}
            },
            t.prototype.getKeysForDateSpan = function (e) {
                return e.allDay
                    ? ["allDay"]
                    : ["timed"]
            },
            t.prototype.getKeysForEventDef = function (e) {
                return e.allDay
                    ? Gn(e)
                        ? ["timed", "allDay"]
                        : ["allDay"]
                    : ["timed"]
            },
            t
        }(Zr),
        gl = nn({
            hour: "numeric",
            minute: "2-digit",
            omitZeroMinute: !0,
            meridiem: "short"
        });
    function ml(e) {
        var t = [
            "fc-timegrid-slot", "fc-timegrid-slot-label", e.isLabeled
                ? "fc-scrollgrid-shrink"
                : "fc-timegrid-slot-minor"
        ];
        return mo(_o.Consumer, null, (function (n) {
            if (!e.isLabeled) 
                return mo("td", {
                    className: t.join(" "),
                    "data-time": e.isoTimeStr
                });
            var r = n.dateEnv,
                o = n.options,
                i = n.viewApi,
                a = null == o.slotLabelFormat
                    ? gl
                    : Array.isArray(o.slotLabelFormat)
                        ? nn(o.slotLabelFormat[0])
                        : nn(o.slotLabelFormat),
                s = {
                    level: 0,
                    time: e.time,
                    date: r.toDate(e.date),
                    view: i,
                    text: r.format(e.date, a)
                };
            return mo(Lo, {
                hookProps: s,
                classNames: o.slotLabelClassNames,
                content: o.slotLabelContent,
                defaultContent: yl,
                didMount: o.slotLabelDidMount,
                willUnmount: o.slotLabelWillUnmount
            }, (function (n, r, o, i) {
                return mo("td", {
                    ref: n,
                    className: t
                        .concat(r)
                        .join(" "),
                    "data-time": e.isoTimeStr
                }, mo("div", {
                    className: "fc-timegrid-slot-label-frame fc-scrollgrid-shrink-frame"
                }, mo("div", {
                    className: "fc-timegrid-slot-label-cushion fc-scrollgrid-shrink-cushion",
                    ref: o
                }, i)))
            }))
        }))
    }
    function yl(e) {
        return e.text
    }
    var El = function (e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return n(t, e),
            t.prototype.render = function () {
                return this
                    .props
                    .slatMetas
                    .map((function (e) {
                        return mo("tr", {
                            key: e.key
                        }, mo(ml, r({}, e)))
                    }))
            },
            t
        }(xo),
        Sl = nn({week: "short"}),
        Dl = function (e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.allDaySplitter = new vl,
                t.headerElRef = Eo(),
                t.rootElRef = Eo(),
                t.scrollerElRef = Eo(),
                t.state = {
                    slatCoords: null
                },
                t.handleScrollTopRequest = function (e) {
                    var n = t.scrollerElRef.current;
                    n && (n.scrollTop = e)
                },
                t.renderHeadAxis = function (e, n) {
                    void 0 === n && (n = "");
                    var o = t.context.options,
                        i = t.props.dateProfile.renderRange,
                        a = Qe(i.start, i.end),
                        s = o.navLinks && 1 === a
                            ? {
                                "data-navlink": Jr(i.start, "week"),
                                tabIndex: 0
                            }
                            : {};
                    return o.weekNumbers && "day" === e
                        ? mo(os, {
                            date: i.start,
                            defaultFormat: Sl
                        }, (function (e, t, o, i) {
                            return mo("th", {
                                ref: e,
                                className: ["fc-timegrid-axis", "fc-scrollgrid-shrink"]
                                    .concat(t)
                                    .join(" ")
                            }, mo(
                                "div",
                                {
                                    className: "fc-timegrid-axis-frame fc-scrollgrid-shrink-frame fc-timegrid-axis-frame-liqui" +
                                            "d",
                                    style: {
                                        height: n
                                    }
                                },
                                mo("a", r({
                                    ref: o,
                                    className: "fc-timegrid-axis-cushion fc-scrollgrid-shrink-cushion fc-scrollgrid-sync-inner"
                                }, s), i)
                            ))
                        }))
                        : mo("th", {
                            className: "fc-timegrid-axis"
                        }, mo("div", {
                            className: "fc-timegrid-axis-frame",
                            style: {
                                height: n
                            }
                        }))
                },
                t.renderTableRowAxis = function (e) {
                    var n = t.context,
                        r = n.options,
                        o = n.viewApi,
                        i = {
                            text: r.allDayText,
                            view: o
                        };
                    return mo(Lo, {
                        hookProps: i,
                        classNames: r.allDayClassNames,
                        content: r.allDayContent,
                        defaultContent: bl,
                        didMount: r.allDayDidMount,
                        willUnmount: r.allDayWillUnmount
                    }, (function (t, n, r, o) {
                        return mo("td", {
                            ref: t,
                            className: ["fc-timegrid-axis", "fc-scrollgrid-shrink"]
                                .concat(n)
                                .join(" ")
                        }, mo("div", {
                            className: "fc-timegrid-axis-frame fc-scrollgrid-shrink-frame" + (
                                null == e
                                    ? " fc-timegrid-axis-frame-liquid"
                                    : ""
                            ),
                            style: {
                                height: e
                            }
                        }, mo(
                            "span",
                            {
                                className: "fc-timegrid-axis-cushion fc-scrollgrid-shrink-cushion fc-scrollgrid-sync-inner",
                                ref: r
                            },
                            o
                        )))
                    }))
                },
                t.handleSlatCoords = function (e) {
                    t.setState({slatCoords: e})
                },
                t
            }
            return n(t, e),
            t.prototype.renderSimpleLayout = function (e, t, n) {
                var r = this.context,
                    o = this.props,
                    i = [],
                    a = ja(r.options);
                return e && i.push({
                    type: "header",
                    key: "header",
                    isSticky: a,
                    chunk: {
                        elRef: this.headerElRef,
                        tableClassName: "fc-col-header",
                        rowContent: e
                    }
                }),
                t && (i.push({
                    type: "body",
                    key: "all-day",
                    chunk: {
                        content: t
                    }
                }), i.push({
                    type: "body",
                    key: "all-day-divider",
                    outerContent: mo("tr", {
                        className: "fc-scrollgrid-section"
                    }, mo("td", {
                        className: "fc-timegrid-divider " + r
                            .theme
                            .getClass("tableCellShaded")
                    }))
                })),
                i.push({
                    type: "body",
                    key: "body",
                    liquid: !0,
                    expandRows: Boolean(r.options.expandRows),
                    chunk: {
                        scrollerElRef: this.scrollerElRef,
                        content: n
                    }
                }),
                mo(qo, {
                    viewSpec: r.viewSpec,
                    elRef: this.rootElRef
                }, (function (e, t) {
                    return mo("div", {
                        className: ["fc-timegrid"]
                            .concat(t)
                            .join(" "),
                        ref: e
                    }, mo(qa, {
                        liquid: !o.isHeightAuto && !o.forPrint,
                        collapsibleWidth: o.forPrint,
                        cols: [
                            {
                                width: "shrink"
                            }
                        ],
                        sections: i
                    }))
                }))
            },
            t.prototype.renderHScrollLayout = function (e, t, n, r, o, i, a) {
                var s = this,
                    l = this.context.pluginHooks.scrollGridImpl;
                if (!l) 
                    throw new Error("No ScrollGrid implementation");
                var u = this.context,
                    c = this.props,
                    d = !c.forPrint && ja(u.options),
                    p = !c.forPrint && Ga(u.options),
                    f = [];
                e && f.push({
                    type: "header",
                    key: "header",
                    isSticky: d,
                    syncRowHeights: !0,
                    chunks: [
                        {
                            key: "axis",
                            rowContent: function (e) {
                                return mo("tr", null, s.renderHeadAxis("day", e.rowSyncHeights[0]))
                            }
                        }, {
                            key: "cols",
                            elRef: this.headerElRef,
                            tableClassName: "fc-col-header",
                            rowContent: e
                        }
                    ]
                }),
                t && (f.push({
                    type: "body",
                    key: "all-day",
                    syncRowHeights: !0,
                    chunks: [
                        {
                            key: "axis",
                            rowContent: function (e) {
                                return mo("tr", null, s.renderTableRowAxis(e.rowSyncHeights[0]))
                            }
                        }, {
                            key: "cols",
                            content: t
                        }
                    ]
                }), f.push({
                    key: "all-day-divider",
                    type: "body",
                    outerContent: mo("tr", {
                        className: "fc-scrollgrid-section"
                    }, mo("td", {
                        colSpan: 2,
                        className: "fc-timegrid-divider " + u
                            .theme
                            .getClass("tableCellShaded")
                    }))
                }));
                var h = u.options.nowIndicator;
                return f.push({
                    type: "body",
                    key: "body",
                    liquid: !0,
                    expandRows: Boolean(u.options.expandRows),
                    chunks: [
                        {
                            key: "axis",
                            content: function (e) {
                                return mo("div", {
                                    className: "fc-timegrid-axis-chunk"
                                }, mo("table", {
                                    style: {
                                        height: e.expandRows
                                            ? e.clientHeight
                                            : ""
                                    }
                                }, e.tableColGroupNode, mo("tbody", null, mo(El, {slatMetas: i}))), mo("div", {
                                    className: "fc-timegrid-now-indicator-container"
                                }, mo(ha, {
                                    unit: h
                                        ? "minute"
                                        : "day"
                                }, (function (e) {
                                    var t = h && a && a.safeComputeTop(e);
                                    return "number" == typeof t
                                        ? mo(Ka, {
                                            isAxis: !0,
                                            date: e
                                        }, (function (e, n, r, o) {
                                            return mo("div", {
                                                ref: e,
                                                className: ["fc-timegrid-now-indicator-arrow"]
                                                    .concat(n)
                                                    .join(" "),
                                                style: {
                                                    top: t
                                                }
                                            }, o)
                                        }))
                                        : null
                                }))))
                            }
                        }, {
                            key: "cols",
                            scrollerElRef: this.scrollerElRef,
                            content: n
                        }
                    ]
                }),
                p && f.push({
                    key: "footer",
                    type: "footer",
                    isSticky: !0,
                    chunks: [
                        {
                            key: "axis",
                            content: Ba
                        }, {
                            key: "cols",
                            content: Ba
                        }
                    ]
                }),
                mo(qo, {
                    viewSpec: u.viewSpec,
                    elRef: this.rootElRef
                }, (function (e, t) {
                    return mo("div", {
                        className: ["fc-timegrid"]
                            .concat(t)
                            .join(" "),
                        ref: e
                    }, mo(l, {
                        liquid: !c.isHeightAuto && !c.forPrint,
                        collapsibleWidth: !1,
                        colGroups: [
                            {
                                width: "shrink",
                                cols: [
                                    {
                                        width: "shrink"
                                    }
                                ]
                            }, {
                                cols: [
                                    {
                                        span: r,
                                        minWidth: o
                                    }
                                ]
                            }
                        ],
                        sections: f
                    }))
                }))
            },
            t.prototype.getAllDayMaxEventProps = function () {
                var e = this.context.options,
                    t = e.dayMaxEvents,
                    n = e.dayMaxEventRows;
                return !0 !== t && !0 !== n || (t = void 0, n = 5), {
                    dayMaxEvents: t,
                    dayMaxEventRows: n
                }
            },
            t
        }(No);
    function bl(e) {
        return e.text
    }
    var Cl = function () {
            function e(e, t, n) {
                this.positions = e,
                this.dateProfile = t,
                this.slotDuration = n
            }
            return e.prototype.safeComputeTop = function (e) {
                var t = this.dateProfile;
                if (Bn(t.currentRange, e)) {
                    var n = rt(e),
                        r = e.valueOf() - n.valueOf();
                    if (r >= Nt(t.slotMinTime) && r < Nt(t.slotMaxTime)) 
                        return this.computeTimeTop(kt(r))
                }
                return null
            },
            e.prototype.computeDateTop = function (e, t) {
                return t || (t = rt(e)),
                this.computeTimeTop(kt(e.valueOf() - t.valueOf()))
            },
            e.prototype.computeTimeTop = function (e) {
                var t,
                    n,
                    r = this.positions,
                    o = this.dateProfile,
                    i = r.els.length,
                    a = (e.milliseconds - Nt(o.slotMinTime)) / Nt(this.slotDuration);
                return a = Math.max(0, a),
                a = Math.min(i, a),
                t = Math.floor(a),
                n = a - (t = Math.min(t, i - 1)),
                r.tops[t] + r.getHeight(t) * n
            },
            e
        }(),
        wl = function (e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return n(t, e),
            t.prototype.render = function () {
                var e = this.props,
                    t = this.context,
                    n = t.options,
                    o = e.slatElRefs;
                return mo("tbody", null, e.slatMetas.map((function (i, a) {
                    var s = {
                            time: i.time,
                            date: t
                                .dateEnv
                                .toDate(i.date),
                            view: t.viewApi
                        },
                        l = [
                            "fc-timegrid-slot", "fc-timegrid-slot-lane", i.isLabeled
                                ? ""
                                : "fc-timegrid-slot-minor"
                        ];
                    return mo("tr", {
                        key: i.key,
                        ref: o.createRef(i.key)
                    }, e.axis && mo(ml, r({}, i)), mo(Lo, {
                        hookProps: s,
                        classNames: n.slotLaneClassNames,
                        content: n.slotLaneContent,
                        didMount: n.slotLaneDidMount,
                        willUnmount: n.slotLaneWillUnmount
                    }, (function (e, t, n, r) {
                        return mo("td", {
                            ref: e,
                            className: l
                                .concat(t)
                                .join(" "),
                            "data-time": i.isoTimeStr
                        }, r)
                    })))
                })))
            },
            t
        }(xo),
        Rl = function (e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.rootElRef = Eo(),
                t.slatElRefs = new Ia,
                t
            }
            return n(t, e),
            t.prototype.render = function () {
                var e = this.props,
                    t = this.context;
                return mo("div", {
                    className: "fc-timegrid-slots",
                    ref: this.rootElRef
                }, mo("table", {
                    className: t
                        .theme
                        .getClass("table"),
                    style: {
                        minWidth: e.tableMinWidth,
                        width: e.clientWidth,
                        height: e.minHeight
                    }
                }, e.tableColGroupNode, mo(wl, {
                    slatElRefs: this.slatElRefs,
                    axis: e.axis,
                    slatMetas: e.slatMetas
                })))
            },
            t.prototype.componentDidMount = function () {
                this.updateSizing()
            },
            t.prototype.componentDidUpdate = function () {
                this.updateSizing()
            },
            t.prototype.componentWillUnmount = function () {
                this.props.onCoords && this
                    .props
                    .onCoords(null)
            },
            t.prototype.updateSizing = function () {
                var e,
                    t = this.context,
                    n = this.props;
                n.onCoords && null !== n.clientWidth && (
                    this.rootElRef.current.offsetHeight && n.onCoords(new Cl(new co(
                        this.rootElRef.current,
                        (e = this.slatElRefs.currentMap, n.slatMetas.map((function (t) {
                            return e[t.key]
                        }))),
                        !1,
                        !0
                    ), this.props.dateProfile, t.options.slotDuration))
                )
            },
            t
        }(xo);
    function _l(e, t) {
        var n,
            r = [];
        for (n = 0; n < t; n += 1) 
            r.push([]);
        if (e) 
            for (n = 0; n < e.length; n += 1) 
                r[e[n].col].push(e[n]);
    return r
    }
    function Tl(e, t) {
        var n = [];
        if (e) {
            for (a = 0; a < t; a += 1) 
                n[a] = {
                    affectedInstances: e.affectedInstances,
                    isEvent: e.isEvent,
                    segs: []
                };
            for (var r = 0, o = e.segs; r < o.length; r++) {
                var i = o[r];
                n[i.col]
                    .segs
                    .push(i)
            }
        } else 
            for (var a = 0; a < t; a += 1) 
                n[a] = null;
    return n
    }
    var kl = function (e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.rootElRef = Eo(),
            t
        }
        return n(t, e),
        t.prototype.render = function () {
            var e = this,
                t = this.props;
            return mo(ls, {
                allDayDate: null,
                moreCnt: t.hiddenSegs.length,
                allSegs: t.hiddenSegs,
                hiddenSegs: t.hiddenSegs,
                alignmentElRef: this.rootElRef,
                defaultContent: xl,
                extraDateSpan: t.extraDateSpan,
                dateProfile: t.dateProfile,
                todayRange: t.todayRange,
                popoverContent: function () {
                    return Vl(t.hiddenSegs, t)
                }
            }, (function (n, r, o, i, a) {
                return mo("a", {
                    ref: function (t) {
                        Io(n, t),
                        Io(e.rootElRef, t)
                    },
                    className: ["fc-timegrid-more-link"]
                        .concat(r)
                        .join(" "),
                    style: {
                        top: t.top,
                        bottom: t.bottom
                    },
                    onClick: a
                }, mo("div", {
                    ref: o,
                    className: "fc-timegrid-more-link-inner fc-sticky"
                }, i))
            }))
        },
        t
    }(xo);
    function xl(e) {
        return e.shortText
    }
    function Ml(e, t, n) {
        var o = new Li;
        null != t && (o.strictOrder = t),
        null != n && (o.maxStackCnt = n);
        var i,
            a,
            s,
            l = Fi(o.addSegs(e)),
            u = function (e) {
                var t = e.entriesByLevel,
                    n = Hl((function (e, t) {
                        return e + ":" + t
                    }), (function (o, i) {
                        var a = Pl(function (e, t, n) {
                                for (
                                    var r = e.levelCoords,
                                    o = e.entriesByLevel,
                                    i = o[t][n],
                                    a = r[t] + i.thickness,
                                    s = r.length,
                                    l = t;
                                    l < s && r[l] < a;
                                    l += 1
                                ) 
                                ;
                                for (; l < s; l += 1) {
                                    for (
                                        var u = o[l],
                                        c = void 0,
                                        d = Gi(u, i.span.start, Wi),
                                        p = d[0] + d[1],
                                        f = p;
                                        (c = u[f]) && c.span.start < i.span.end;
                                    ) 
                                        f += 1;
                                    if (p < f) 
                                        return {level: l, lateralStart: p, lateralEnd: f}
                                    }
                                return null
                            }(e, o, i), n),
                            s = t[o][i];
                        return [
                            r(r({}, s), {nextLevelNodes: a[0]}),
                            s.thickness + a[1]
                        ]
                    }));
                return Pl(
                    t.length
                        ? {
                            level: 0,
                            lateralStart: 0,
                            lateralEnd: t[0].length
                        }
                        : null,
                    n
                )[0]
            }(o);
        return i = u,
        a = 1,
        s = Hl((function (e, t, n) {
            return Vi(e)
        }), (function (e, t, n) {
            var o,
                i = e.nextLevelNodes,
                l = e.thickness,
                u = l + n,
                c = l / u,
                d = [];
            if (i.length) 
                for (var p = 0, f = i; p < f.length; p++) {
                    var h = f[p];
                    if (void 0 === o) 
                        o = (v = s(h, t, u))[0],
                        d.push(v[1]);
                    else {
                        var v = s(h, o, 0);
                        d.push(v[1])
                    }
                }
            else 
                o = a;
            var g = (o - t) * c;
            return [
                o - g,
                r(r({}, e), {
                    thickness: g,
                    nextLevelNodes: d
                })
            ]
        })), {
            segRects: function (e) {
                var t = [],
                    n = Hl((function (e, t, n) {
                        return Vi(e)
                    }), (function (e, n, i) {
                        var a = r(r({}, e), {
                            levelCoord: n,
                            stackDepth: i,
                            stackForward: 0
                        });
                        return t.push(a),
                        a.stackForward = o(e.nextLevelNodes, n + e.thickness, i + 1) + 1
                    }));
                function o(e, t, r) {
                    for (var o = 0, i = 0, a = e; i < a.length; i++) {
                        var s = a[i];
                        o = Math.max(n(s, t, r), o)
                    }
                    return o
                }
                return o(e, 0, 0),
                t
            }(u = i.map((function (e) {
                return s(e, 0, 0)[1]
            }))),
            hiddenGroups: l
        }
    }
    function Pl(e, t) {
        if (!e) 
            return [[], 0];
        for (
            var n = e.level,
            r = e.lateralStart,
            o = e.lateralEnd,
            i = r,
            a = [];
            i < o;
        ) 
            a.push(t(n, i)),
            i += 1;
        return a.sort(Il),
        [
            a.map(Nl), a[0][1]
        ]
    }
    function Il(e, t) {
        return t[1] - e[1]
    }
    function Nl(e) {
        return e[0]
    }
    function Hl(e, t) {
        var n = {};
        return function () {
            for (var r = [], o = 0; o < arguments.length; o++) 
                r[o] = arguments[o];
            var i = e.apply(void 0, r);
            return i in n
                ? n[i]
                : n[i] = t.apply(void 0, r)
        }
    }
    function Ol(e, t, n, r) {
        void 0 === n && (n = null),
        void 0 === r && (r = 0);
        var o = [];
        if (n) 
            for (var i = 0; i < e.length; i += 1) {
                var a = e[i],
                    s = n.computeDateTop(a.start, t),
                    l = Math.max(s + (r || 0), n.computeDateTop(a.end, t));
                o.push({start: Math.round(s), end: Math.round(l)})
            }
        return o
    }
    var Al = nn({
            hour: "numeric",
            minute: "2-digit",
            meridiem: !1
        }),
        Ul = function (e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return n(t, e),
            t.prototype.render = function () {
                var e = ["fc-timegrid-event", "fc-v-event"];
                return this.props.isShort && e.push("fc-timegrid-event-short"),
                mo(Za, r({}, this.props, {
                    defaultTimeFormat: Al,
                    extraClassNames: e
                }))
            },
            t
        }(xo),
        Ll = function (e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return n(t, e),
            t.prototype.render = function () {
                var e = this.props;
                return mo(Ja, {
                    date: e.date,
                    dateProfile: e.dateProfile,
                    todayRange: e.todayRange,
                    extraHookProps: e.extraHookProps
                }, (function (e, t) {
                    return t && mo("div", {
                        className: "fc-timegrid-col-misc",
                        ref: e
                    }, t)
                }))
            },
            t
        }(xo),
        Wl = function (e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.sortEventSegs = Ft(Kn),
                t
            }
            return n(t, e),
            t.prototype.render = function () {
                var e = this,
                    t = this.props,
                    n = this.context,
                    o = n.options.selectMirror,
                    i = t.eventDrag && t.eventDrag.segs || t.eventResize && t.eventResize.segs || o && t.dateSelectionSegs || [],
                    a = t.eventDrag && t.eventDrag.affectedInstances || t.eventResize && t.eventResize.affectedInstances || {},
                    s = this.sortEventSegs(t.fgEventSegs, n.options.eventOrder);
                return mo(es, {
                    elRef: t.elRef,
                    date: t.date,
                    dateProfile: t.dateProfile,
                    todayRange: t.todayRange,
                    extraHookProps: t.extraHookProps
                }, (function (n, l, u) {
                    return mo("td", r({
                        ref: n,
                        className: ["fc-timegrid-col"]
                            .concat(l, t.extraClassNames || [])
                            .join(" ")
                    }, u, t.extraDataAttrs), mo(
                        "div",
                        {
                            className: "fc-timegrid-col-frame"
                        },
                        mo(
                            "div",
                            {
                                className: "fc-timegrid-col-bg"
                            },
                            e.renderFillSegs(t.businessHourSegs, "non-business"),
                            e.renderFillSegs(t.bgEventSegs, "bg-event"),
                            e.renderFillSegs(t.dateSelectionSegs, "highlight")
                        ),
                        mo("div", {
                            className: "fc-timegrid-col-events"
                        }, e.renderFgSegs(s, a, !1, !1, !1)),
                        mo("div", {
                            className: "fc-timegrid-col-events"
                        }, e.renderFgSegs(i, {}, Boolean(t.eventDrag), Boolean(t.eventResize), Boolean(o))),
                        mo("div", {
                            className: "fc-timegrid-now-indicator-container"
                        }, e.renderNowIndicator(t.nowIndicatorSegs)),
                        mo(Ll, {
                            date: t.date,
                            dateProfile: t.dateProfile,
                            todayRange: t.todayRange,
                            extraHookProps: t.extraHookProps
                        })
                    ))
                }))
            },
            t.prototype.renderFgSegs = function (e, t, n, r, o) {
                var i = this.props;
                return i.forPrint
                    ? Vl(e, i)
                    : this.renderPositionedFgSegs(e, t, n, r, o)
            },
            t.prototype.renderPositionedFgSegs = function (e, t, n, o, i) {
                var a = this,
                    s = this.context.options,
                    l = s.eventMaxStack,
                    u = s.eventShortHeight,
                    c = s.eventOrderStrict,
                    d = s.eventMinHeight,
                    p = this.props,
                    f = p.date,
                    h = p.slatCoords,
                    v = p.eventSelection,
                    g = p.todayRange,
                    m = p.nowDate,
                    y = n || o || i,
                    E = function (e, t, n, r) {
                        for (var o = [], i = [], a = 0; a < e.length; a += 1) {
                            var s = t[a];
                            s
                                ? o.push({index: a, thickness: 1, span: s})
                                : i.push(e[a])
                        }
                        for (
                            var l = Ml(o, n, r),
                            u = l.segRects,
                            c = l.hiddenGroups,
                            d = [],
                            p = 0,
                            f = u;
                            p < f.length;
                            p++
                        ) {
                            var h = f[p];
                            d.push({
                                seg: e[h.index],
                                rect: h
                            })
                        }
                        for (var v = 0, g = i; v < g.length; v++) {
                            var m = g[v];
                            d.push({seg: m, rect: null})
                        }
                        return {segPlacements: d, hiddenGroups: c}
                    }(e, Ol(e, f, h, d), c, l),
                    S = E.segPlacements,
                    D = E.hiddenGroups;
                return mo(So, null, this.renderHiddenGroups(D, e), S.map((function (e) {
                    var s = e.seg,
                        l = e.rect,
                        c = s.eventRange.instance.instanceId,
                        d = y || Boolean(!t[c] && l),
                        p = Fl(l && l.span),
                        f = !y && l
                            ? a.computeSegHStyle(l)
                            : {
                                left: 0,
                                right: 0
                            },
                        h = Boolean(l) && l.stackForward > 0,
                        E = Boolean(l) && l.span.end - l.span.start < u;
                    return mo("div", {
                        className: "fc-timegrid-event-harness" + (
                            h
                                ? " fc-timegrid-event-harness-inset"
                                : ""
                        ),
                        key: c,
                        style: r(r({
                            visibility: d
                                ? ""
                                : "hidden"
                        }, p), f)
                    }, mo(Ul, r({
                        seg: s,
                        isDragging: n,
                        isResizing: o,
                        isDateSelecting: i,
                        isSelected: c === v,
                        isShort: E
                    }, nr(s, g, m))))
                })))
            },
            t.prototype.renderHiddenGroups = function (e, t) {
                var n = this.props,
                    r = n.extraDateSpan,
                    o = n.dateProfile,
                    i = n.todayRange,
                    a = n.nowDate,
                    s = n.eventSelection,
                    l = n.eventDrag,
                    u = n.eventResize;
                return mo(So, null, e.map((function (e) {
                    var n,
                        c,
                        d = Fl(e.span),
                        p = (n = e.entries, c = t, n.map((function (e) {
                            return c[e.index]
                        })));
                    return mo(kl, {
                        key: At(ds(p)),
                        hiddenSegs: p,
                        top: d.top,
                        bottom: d.bottom,
                        extraDateSpan: r,
                        dateProfile: o,
                        todayRange: i,
                        nowDate: a,
                        eventSelection: s,
                        eventDrag: l,
                        eventResize: u
                    })
                })))
            },
            t.prototype.renderFillSegs = function (e, t) {
                var n = this.props,
                    o = this.context,
                    i = Ol(e, n.date, n.slatCoords, o.options.eventMinHeight).map(
                        (function (o, i) {
                            var a = e[i];
                            return mo(
                                "div",
                                {
                                    key: or(a.eventRange),
                                    className: "fc-timegrid-bg-harness",
                                    style: Fl(o)
                                },
                                "bg-event" === t
                                    ? mo(ns, r({
                                        seg: a
                                    }, nr(a, n.todayRange, n.nowDate)))
                                    : ts(t)
                            )
                        })
                    );
                return mo(So, null, i)
            },
            t.prototype.renderNowIndicator = function (e) {
                var t = this.props,
                    n = t.slatCoords,
                    r = t.date;
                return n
                    ? e.map((function (e, t) {
                        return mo(Ka, {
                            isAxis: !1,
                            date: r,
                            key: t
                        }, (function (t, o, i, a) {
                            return mo("div", {
                                ref: t,
                                className: ["fc-timegrid-now-indicator-line"]
                                    .concat(o)
                                    .join(" "),
                                style: {
                                    top: n.computeDateTop(e.start, r)
                                }
                            }, a)
                        }))
                    }))
                    : null
            },
            t.prototype.computeSegHStyle = function (e) {
                var t,
                    n,
                    r = this.context,
                    o = r.isRtl,
                    i = r.options.slotEventOverlap,
                    a = e.levelCoord,
                    s = e.levelCoord + e.thickness;
                i && (s = Math.min(1, a + 2 * (s - a))),
                o
                    ? (t = 1 - s, n = a)
                    : (t = a, n = 1 - s);
                var l = {
                    zIndex: e.stackDepth + 1,
                    left: 100 *t + "%",
                    right: 100 *n + "%"
                };
                return i && !e.stackForward && (l[
                    o
                        ? "marginLeft"
                        : "marginRight"
                ] = 20),
                l
            },
            t
        }(xo);
    function Vl(e, t) {
        var n = t.todayRange,
            o = t.nowDate,
            i = t.eventSelection,
            a = t.eventDrag,
            s = t.eventResize,
            l = (
                a
                    ? a.affectedInstances
                    : null
            ) || (
                s
                    ? s.affectedInstances
                    : null
            ) || {};
        return mo(So, null, e.map((function (e) {
            var t = e.eventRange.instance.instanceId;
            return mo("div", {
                key: t,
                style: {
                    visibility: l[t]
                        ? "hidden"
                        : ""
                }
            }, mo(Ul, r({
                seg: e,
                isDragging: !1,
                isResizing: !1,
                isDateSelecting: !1,
                isSelected: t === i,
                isShort: !1
            }, nr(e, n, o))))
        })))
    }
    function Fl(e) {
        return e
            ? {
                top: e.start,
                bottom: -e.end
            }
            : {
                top: "",
                bottom: ""
            }
    }
    var zl = function (e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.splitFgEventSegs = Ft(_l),
            t.splitBgEventSegs = Ft(_l),
            t.splitBusinessHourSegs = Ft(_l),
            t.splitNowIndicatorSegs = Ft(_l),
            t.splitDateSelectionSegs = Ft(_l),
            t.splitEventDrag = Ft(Tl),
            t.splitEventResize = Ft(Tl),
            t.rootElRef = Eo(),
            t.cellElRefs = new Ia,
            t
        }
        return n(t, e),
        t.prototype.render = function () {
            var e = this,
                t = this.props,
                n = this.context.options.nowIndicator && t.slatCoords && t
                    .slatCoords
                    .safeComputeTop(t.nowDate),
                r = t.cells.length,
                o = this.splitFgEventSegs(t.fgEventSegs, r),
                i = this.splitBgEventSegs(t.bgEventSegs, r),
                a = this.splitBusinessHourSegs(t.businessHourSegs, r),
                s = this.splitNowIndicatorSegs(t.nowIndicatorSegs, r),
                l = this.splitDateSelectionSegs(t.dateSelectionSegs, r),
                u = this.splitEventDrag(t.eventDrag, r),
                c = this.splitEventResize(t.eventResize, r);
            return mo("div", {
                className: "fc-timegrid-cols",
                ref: this.rootElRef
            }, mo("table", {
                style: {
                    minWidth: t.tableMinWidth,
                    width: t.clientWidth
                }
            }, t.tableColGroupNode, mo("tbody", null, mo("tr", null, t.axis && mo("td", {
                className: "fc-timegrid-col fc-timegrid-axis"
            }, mo("div", {
                className: "fc-timegrid-col-frame"
            }, mo("div", {
                className: "fc-timegrid-now-indicator-container"
            }, "number" == typeof n && mo(Ka, {
                isAxis: !0,
                date: t.nowDate
            }, (function (e, t, r, o) {
                return mo("div", {
                    ref: e,
                    className: ["fc-timegrid-now-indicator-arrow"]
                        .concat(t)
                        .join(" "),
                    style: {
                        top: n
                    }
                }, o)
            }))))), t.cells.map((function (n, r) {
                return mo(Wl, {
                    key: n.key,
                    elRef: e
                        .cellElRefs
                        .createRef(n.key),
                    dateProfile: t.dateProfile,
                    date: n.date,
                    nowDate: t.nowDate,
                    todayRange: t.todayRange,
                    extraHookProps: n.extraHookProps,
                    extraDataAttrs: n.extraDataAttrs,
                    extraClassNames: n.extraClassNames,
                    extraDateSpan: n.extraDateSpan,
                    fgEventSegs: o[r],
                    bgEventSegs: i[r],
                    businessHourSegs: a[r],
                    nowIndicatorSegs: s[r],
                    dateSelectionSegs: l[r],
                    eventDrag: u[r],
                    eventResize: c[r],
                    slatCoords: t.slatCoords,
                    eventSelection: t.eventSelection,
                    forPrint: t.forPrint
                })
            }))))))
        },
        t.prototype.componentDidMount = function () {
            this.updateCoords()
        },
        t.prototype.componentDidUpdate = function () {
            this.updateCoords()
        },
        t.prototype.updateCoords = function () {
            var e,
                t = this.props;
            t.onColCoords && null !== t.clientWidth && t.onColCoords(new co(
                this.rootElRef.current,
                (e = this.cellElRefs.currentMap, t.cells.map((function (t) {
                    return e[t.key]
                }))),
                !0,
                !1
            ))
        },
        t
    }(xo);
    var Bl = function (e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.processSlotOptions = Ft(jl),
            t.state = {
                slatCoords: null
            },
            t.handleRootEl = function (e) {
                e
                    ? t
                        .context
                        .registerInteractiveComponent(t, {
                            el: e,
                            isHitComboAllowed: t.props.isHitComboAllowed
                        })
                    : t
                        .context
                        .unregisterInteractiveComponent(t)
            },
            t.handleScrollRequest = function (e) {
                var n = t.props.onScrollTopRequest,
                    r = t.state.slatCoords;
                if (n && r) {
                    if (e.time) {
                        var o = r.computeTimeTop(e.time);
                        (o = Math.ceil(o)) && (o += 1),
                        n(o)
                    }
                    return !0
                }
                return !1
            },
            t.handleColCoords = function (e) {
                t.colCoords = e
            },
            t.handleSlatCoords = function (e) {
                t.setState({slatCoords: e}),
                t.props.onSlatCoords && t
                    .props
                    .onSlatCoords(e)
            },
            t
        }
        return n(t, e),
        t.prototype.render = function () {
            var e = this.props,
                t = this.state;
            return mo("div", {
                className: "fc-timegrid-body",
                ref: this.handleRootEl,
                style: {
                    width: e.clientWidth,
                    minWidth: e.tableMinWidth
                }
            }, mo(Rl, {
                axis: e.axis,
                dateProfile: e.dateProfile,
                slatMetas: e.slatMetas,
                clientWidth: e.clientWidth,
                minHeight: e.expandRows
                    ? e.clientHeight
                    : "",
                tableMinWidth: e.tableMinWidth,
                tableColGroupNode: e.axis
                    ? e.tableColGroupNode
                    : null,
                onCoords: this.handleSlatCoords
            }), mo(zl, {
                cells: e.cells,
                axis: e.axis,
                dateProfile: e.dateProfile,
                businessHourSegs: e.businessHourSegs,
                bgEventSegs: e.bgEventSegs,
                fgEventSegs: e.fgEventSegs,
                dateSelectionSegs: e.dateSelectionSegs,
                eventSelection: e.eventSelection,
                eventDrag: e.eventDrag,
                eventResize: e.eventResize,
                todayRange: e.todayRange,
                nowDate: e.nowDate,
                nowIndicatorSegs: e.nowIndicatorSegs,
                clientWidth: e.clientWidth,
                tableMinWidth: e.tableMinWidth,
                tableColGroupNode: e.tableColGroupNode,
                slatCoords: t.slatCoords,
                onColCoords: this.handleColCoords,
                forPrint: e.forPrint
            }))
        },
        t.prototype.componentDidMount = function () {
            this.scrollResponder = this
                .context
                .createScrollResponder(this.handleScrollRequest)
        },
        t.prototype.componentDidUpdate = function (e) {
            this
                .scrollResponder
                .update(e.dateProfile !== this.props.dateProfile)
        },
        t.prototype.componentWillUnmount = function () {
            this
                .scrollResponder
                .detach()
        },
        t.prototype.queryHit = function (e, t) {
            var n = this.context,
                o = n.dateEnv,
                i = n.options,
                a = this.colCoords,
                s = this.props.dateProfile,
                l = this.state.slatCoords,
                u = this.processSlotOptions(this.props.slotDuration, i.snapDuration),
                c = u.snapDuration,
                d = u.snapsPerSlot,
                p = a.leftToIndex(e),
                f = l
                    .positions
                    .topToIndex(t);
            if (null != p && null != f) {
                var h = this
                        .props
                        .cells[p],
                    v = l
                        .positions
                        .tops[f],
                    g = l
                        .positions
                        .getHeight(f),
                    m = (t - v) / g,
                    y = f * d + Math.floor(m * d),
                    E = this
                        .props
                        .cells[p]
                        .date,
                    S = Mt(s.slotMinTime, Pt(c, y)),
                    D = o.add(E, S),
                    b = o.add(D, c);
                return {
                    dateProfile: s,
                    dateSpan: r({
                        range: {
                            start: D,
                            end: b
                        },
                        allDay: !1
                    }, h.extraDateSpan),
                    dayEl: a.els[p],
                    rect: {
                        left: a.lefts[p],
                        right: a.rights[p],
                        top: v,
                        bottom: v + g
                    },
                    layer: 0
                }
            }
            return null
        },
        t
    }(No);
    function jl(e, t) {
        var n = t || e,
            r = Ht(e, n);
        return null === r && (n = e, r = 1), {
            snapDuration: n,
            snapsPerSlot: r
        }
    }
    var Gl = function (e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return n(t, e),
            t.prototype.sliceRange = function (e, t) {
                for (var n = [], r = 0; r < t.length; r += 1) {
                    var o = Wn(e, t[r]);
                    o && n.push({
                        start: o.start,
                        end: o.end,
                        isStart: o
                            .start
                            .valueOf() === e
                            .start
                            .valueOf(),
                        isEnd: o
                            .end
                            .valueOf() === e
                            .end
                            .valueOf(),
                        col: r
                    })
                }
                return n
            },
            t
        }(Sa),
        ql = function (e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.buildDayRanges = Ft(Yl),
                t.slicer = new Gl,
                t.timeColsRef = Eo(),
                t
            }
            return n(t, e),
            t.prototype.render = function () {
                var e = this,
                    t = this.props,
                    n = this.context,
                    o = t.dateProfile,
                    i = t.dayTableModel,
                    a = n.options.nowIndicator,
                    s = this.buildDayRanges(i, o, n.dateEnv);
                return mo(ha, {
                    unit: a
                        ? "minute"
                        : "day"
                }, (function (l, u) {
                    return mo(Bl, r({
                        ref: e.timeColsRef
                    }, e.slicer.sliceProps(t, o, null, n, s), {
                        forPrint: t.forPrint,
                        axis: t.axis,
                        dateProfile: o,
                        slatMetas: t.slatMetas,
                        slotDuration: t.slotDuration,
                        cells: i.cells[0],
                        tableColGroupNode: t.tableColGroupNode,
                        tableMinWidth: t.tableMinWidth,
                        clientWidth: t.clientWidth,
                        clientHeight: t.clientHeight,
                        expandRows: t.expandRows,
                        nowDate: l,
                        nowIndicatorSegs: a && e
                            .slicer
                            .sliceNowDate(l, n, s),
                        todayRange: u,
                        onScrollTopRequest: t.onScrollTopRequest,
                        onSlatCoords: t.onSlatCoords
                    }))
                }))
            },
            t
        }(No);
    function Yl(e, t, n) {
        for (var r = [], o = 0, i = e.headerDates; o < i.length; o++) {
            var a = i[o];
            r.push({
                start: n.add(a, t.slotMinTime),
                end: n.add(a, t.slotMaxTime)
            })
        }
        return r
    }
    var Zl = [
        {
            hours: 1
        }, {
            minutes: 30
        }, {
            minutes: 15
        }, {
            seconds: 30
        }, {
            seconds: 15
        }
    ];
    function Xl(e, t, n, r, o) {
        for (
            var i = new Date(0),
            a = e,
            s = kt(0),
            l = n || function (e) {
                var t,
                    n,
                    r;
                for (t = Zl.length - 1; t >= 0; t -= 1) 
                    if (null !== (r = Ht(n = kt(Zl[t]), e)) && r > 1) 
                        return n;
            return e
            }(r),
            u = []; Nt(a) < Nt(t);
        ) {
            var c = o.add(i, a),
                d = null !== Ht(s, l);
            u.push(
                {date: c, time: a, key: c.toISOString(), isoTimeStr: Lt(c), isLabeled: d}
            ),
            a = Mt(a, r),
            s = Mt(s, r)
        }
        return u
    }
    var Kl = function (e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.buildTimeColsModel = Ft($l),
            t.buildSlatMetas = Ft(Xl),
            t
        }
        return n(t, e),
        t.prototype.render = function () {
            var e = this,
                t = this.context,
                n = t.options,
                o = t.dateEnv,
                i = t.dateProfileGenerator,
                a = this.props,
                s = a.dateProfile,
                l = this.buildTimeColsModel(s, i),
                u = this
                    .allDaySplitter
                    .splitProps(a),
                c = this.buildSlatMetas(
                    s.slotMinTime,
                    s.slotMaxTime,
                    n.slotLabelInterval,
                    n.slotDuration,
                    o
                ),
                d = n.dayMinWidth,
                p = !d,
                f = d,
                h = n.dayHeaders && mo(ga, {
                    dates: l.headerDates,
                    dateProfile: s,
                    datesRepDistinctDays: !0,
                    renderIntro: p
                        ? this.renderHeadAxis
                        : null
                }),
                v = !1 !== n.allDaySlot && function (t) {
                    return mo(dl, r({}, u.allDay, {
                        dateProfile: s,
                        dayTableModel: l,
                        nextDayThreshold: n.nextDayThreshold,
                        tableMinWidth: t.tableMinWidth,
                        colGroupNode: t.tableColGroupNode,
                        renderRowIntro: p
                            ? e.renderTableRowAxis
                            : null,
                        showWeekNumbers: !1,
                        expandRows: !1,
                        headerAlignElRef: e.headerElRef,
                        clientWidth: t.clientWidth,
                        clientHeight: t.clientHeight,
                        forPrint: a.forPrint
                    }, e.getAllDayMaxEventProps()))
                },
                g = function (t) {
                    return mo(ql, r({}, u.timed, {
                        dayTableModel: l,
                        dateProfile: s,
                        axis: p,
                        slotDuration: n.slotDuration,
                        slatMetas: c,
                        forPrint: a.forPrint,
                        tableColGroupNode: t.tableColGroupNode,
                        tableMinWidth: t.tableMinWidth,
                        clientWidth: t.clientWidth,
                        clientHeight: t.clientHeight,
                        onSlatCoords: e.handleSlatCoords,
                        expandRows: t.expandRows,
                        onScrollTopRequest: e.handleScrollTopRequest
                    }))
                };
            return f
                ? this.renderHScrollLayout(h, v, g, l.colCnt, d, c, this.state.slatCoords)
                : this.renderSimpleLayout(h, v, g)
        },
        t
    }(Dl);
    function $l(e, t) {
        var n = new ya(e.renderRange, t);
        return new Ea(n, !1)
    }
    var Jl = Ho({
            initialView: "timeGridWeek",
            optionRefiners: {
                allDaySlot: Boolean
            },
            views: {
                timeGrid: {
                    component: Kl,
                    usesMinMaxTime: !0,
                    allDaySlot: !0,
                    slotDuration: "00:30:00",
                    slotEventOverlap: !0
                },
                timeGridDay: {
                    type: "timeGrid",
                    duration: {
                        days: 1
                    }
                },
                timeGridWeek: {
                    type: "timeGrid",
                    duration: {
                        weeks: 1
                    }
                }
            }
        }),
        Ql = function (e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return n(t, e),
            t.prototype.render = function () {
                var e = this.props,
                    t = e.dayDate,
                    n = e.todayRange,
                    o = this.context,
                    i = o.theme,
                    a = o.dateEnv,
                    s = o.options,
                    l = o.viewApi,
                    u = Kr(t, n),
                    c = s.listDayFormat
                        ? a.format(t, s.listDayFormat)
                        : "",
                    d = s.listDaySideFormat
                        ? a.format(t, s.listDaySideFormat)
                        : "",
                    p = s.navLinks
                        ? Jr(t)
                        : null,
                    f = r({
                        date: a.toDate(t),
                        view: l,
                        text: c,
                        sideText: d,
                        navLinkData: p
                    }, u),
                    h = ["fc-list-day"].concat($r(u, i));
                return mo(Lo, {
                    hookProps: f,
                    classNames: s.dayHeaderClassNames,
                    content: s.dayHeaderContent,
                    defaultContent: eu,
                    didMount: s.dayHeaderDidMount,
                    willUnmount: s.dayHeaderWillUnmount
                }, (function (e, n, r, o) {
                    return mo("tr", {
                        ref: e,
                        className: h
                            .concat(n)
                            .join(" "),
                        "data-date": Ut(t)
                    }, mo("th", {
                        colSpan: 3
                    }, mo("div", {
                        className: "fc-list-day-cushion " + i.getClass("tableCellShaded"),
                        ref: r
                    }, o)))
                }))
            },
            t
        }(xo);
    function eu(e) {
        var t = e.navLinkData
            ? {
                "data-navlink": e.navLinkData,
                tabIndex: 0
            }
            : {};
        return mo(So, null, e.text && mo("a", r({
            className: "fc-list-day-text"
        }, t), e.text), e.sideText && mo("a", r({
            className: "fc-list-day-side-text"
        }, t), e.sideText))
    }
    var tu = nn({hour: "numeric", minute: "2-digit", meridiem: "short"}),
        nu = function (e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return n(t, e),
            t.prototype.render = function () {
                var e = this.props,
                    t = this.context,
                    n = e.seg,
                    r = t.options.eventTimeFormat || tu;
                return mo(Ya, {
                    seg: n,
                    timeText: "",
                    disableDragging: !0,
                    disableResizing: !0,
                    defaultContent: ru,
                    isPast: e.isPast,
                    isFuture: e.isFuture,
                    isToday: e.isToday,
                    isSelected: e.isSelected,
                    isDragging: e.isDragging,
                    isResizing: e.isResizing,
                    isDateSelecting: e.isDateSelecting
                }, (function (e, o, i, a, s) {
                    return mo("tr", {
                        className: [
                            "fc-list-event", s.event.url
                                ? "fc-event-forced-url"
                                : ""
                        ]
                            .concat(o)
                            .join(" "),
                        ref: e
                    }, function (e, t, n) {
                        var r = n.options;
                        if (!1 !== r.displayEventTime) {
                            var o = e.eventRange.def,
                                i = e.eventRange.instance,
                                a = !1,
                                s = void 0;
                            if (
                                o.allDay
                                    ? a = !0
                                    : On(e.eventRange.range)
                                        ? e.isStart
                                            ? s = tr(e, t, n, null, null, i.range.start, e.end)
                                            : e.isEnd
                                                ? s = tr(e, t, n, null, null, e.start, i.range.end)
                                                : a = !0
                                        : s = tr(e, t, n),
                                a
                            ) {
                                var l = {
                                    text: n.options.allDayText,
                                    view: n.viewApi
                                };
                                return mo(Lo, {
                                    hookProps: l,
                                    classNames: r.allDayClassNames,
                                    content: r.allDayContent,
                                    defaultContent: ou,
                                    didMount: r.allDayDidMount,
                                    willUnmount: r.allDayWillUnmount
                                }, (function (e, t, n, r) {
                                    return mo("td", {
                                        className: ["fc-list-event-time"]
                                            .concat(t)
                                            .join(" "),
                                        ref: e
                                    }, r)
                                }))
                            }
                            return mo("td", {
                                className: "fc-list-event-time"
                            }, s)
                        }
                        return null
                    }(n, r, t), mo("td", {
                        className: "fc-list-event-graphic"
                    }, mo("span", {
                        className: "fc-list-event-dot",
                        style: {
                            borderColor: s.borderColor || s.backgroundColor
                        }
                    })), mo("td", {
                        className: "fc-list-event-title",
                        ref: i
                    }, a))
                }))
            },
            t
        }(xo);
    function ru(e) {
        var t = e.event,
            n = t.url;
        return mo("a", r(
            {},
            n
                ? {
                    href: n
                }
                : {}
        ), t.title)
    }
    function ou(e) {
        return e.text
    }
    var iu = function (e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.computeDateVars = Ft(su),
            t.eventStoreToSegs = Ft(t._eventStoreToSegs),
            t.setRootEl = function (e) {
                e
                    ? t
                        .context
                        .registerInteractiveComponent(t, {el: e})
                    : t
                        .context
                        .unregisterInteractiveComponent(t)
            },
            t
        }
        return n(t, e),
        t.prototype.render = function () {
            var e = this,
                t = this.props,
                n = this.context,
                r = [
                    "fc-list", n
                        .theme
                        .getClass("table"),
                    !1 !== n.options.stickyHeaderDates
                        ? "fc-list-sticky"
                        : ""
                ],
                o = this.computeDateVars(t.dateProfile),
                i = o.dayDates,
                a = o.dayRanges,
                s = this.eventStoreToSegs(t.eventStore, t.eventUiBases, a);
            return mo(qo, {
                viewSpec: n.viewSpec,
                elRef: this.setRootEl
            }, (function (n, o) {
                return mo("div", {
                    ref: n,
                    className: r
                        .concat(o)
                        .join(" ")
                }, mo(
                    Pa,
                    {
                        liquid: !t.isHeightAuto,
                        overflowX: t.isHeightAuto
                            ? "visible"
                            : "hidden",
                        overflowY: t.isHeightAuto
                            ? "visible"
                            : "auto"
                    },
                    s.length > 0
                        ? e.renderSegList(s, i)
                        : e.renderEmptyMessage()
                ))
            }))
        },
        t.prototype.renderEmptyMessage = function () {
            var e = this.context,
                t = e.options,
                n = e.viewApi,
                r = {
                    text: t.noEventsText,
                    view: n
                };
            return mo(Lo, {
                hookProps: r,
                classNames: t.noEventsClassNames,
                content: t.noEventsContent,
                defaultContent: au,
                didMount: t.noEventsDidMount,
                willUnmount: t.noEventsWillUnmount
            }, (function (e, t, n, r) {
                return mo("div", {
                    className: ["fc-list-empty"]
                        .concat(t)
                        .join(" "),
                    ref: e
                }, mo("div", {
                    className: "fc-list-empty-cushion",
                    ref: n
                }, r))
            }))
        },
        t.prototype.renderSegList = function (e, t) {
            var n = this.context,
                o = n.theme,
                i = n.options,
                a = function (e) {
                    var t,
                        n,
                        r = [];
                    for (t = 0; t < e.length; t += 1) 
                        (r[(n = e[t]).dayIndex] || (r[n.dayIndex] = [])).push(n);
                    return r
                }(e);
            return mo(ha, {
                unit: "day"
            }, (function (e, n) {
                for (var s = [], l = 0; l < a.length; l += 1) {
                    var u = a[l];
                    if (u) {
                        var c = t[l].toISOString();
                        s.push(mo(Ql, {
                            key: c,
                            dayDate: t[l],
                            todayRange: n
                        }));
                        for (var d = 0, p = u = Kn(u, i.eventOrder); d < p.length; d++) {
                            var f = p[d];
                            s.push(mo(nu, r({
                                key: c + ":" + f.eventRange.instance.instanceId,
                                seg: f,
                                isDragging: !1,
                                isResizing: !1,
                                isDateSelecting: !1,
                                isSelected: !1
                            }, nr(f, n, e))))
                        }
                    }
                }
                return mo("table", {
                    className: "fc-list-table " + o.getClass("table")
                }, mo("tbody", null, s))
            }))
        },
        t.prototype._eventStoreToSegs = function (e, t, n) {
            return this.eventRangesToSegs(jn(
                e,
                t,
                this.props.dateProfile.activeRange,
                this.context.options.nextDayThreshold
            ).fg, n)
        },
        t.prototype.eventRangesToSegs = function (e, t) {
            for (var n = [], r = 0, o = e; r < o.length; r++) {
                var i = o[r];
                n
                    .push
                    .apply(n, this.eventRangeToSegs(i, t))
            }
            return n
        },
        t.prototype.eventRangeToSegs = function (e, t) {
            var n,
                r,
                o,
                i = this.context.dateEnv,
                a = this.context.options.nextDayThreshold,
                s = e.range,
                l = e.def.allDay,
                u = [];
            for (n = 0; n < t.length; n += 1) 
                if ((r = Wn(s, t[n])) && (
                    o = {
                        component: this,
                        eventRange: e,
                        start: r.start,
                        end: r.end,
                        isStart: e.isStart && r
                            .start
                            .valueOf() === s
                            .start
                            .valueOf(),
                        isEnd: e.isEnd && r
                            .end
                            .valueOf() === s
                            .end
                            .valueOf(),
                        dayIndex: n
                    },
                    u.push(o),
                    !o.isEnd && !l && n + 1 < t.length && s.end < i.add(t[n + 1].start, a)
                )) {
                    o.end = s.end,
                    o.isEnd = !0;
                    break
                }
            return u
        },
        t
    }(No);
    function au(e) {
        return e.text
    }
    function su(e) {
        for (
            var t = rt(e.renderRange.start),
            n = e.renderRange.end,
            r = [],
            o = [];
            t < n;
        ) 
            r.push(t),
            o.push({
                start: t,
                end: Ke(t, 1)
            }),
            t = Ke(t, 1);
        return {dayDates: r, dayRanges: o}
    }
    function lu(e) {
        return !1 === e
            ? null
            : nn(e)
    }
    var uu = Ho({
            optionRefiners: {
                listDayFormat: lu,
                listDaySideFormat: lu,
                noEventsClassNames: fn,
                noEventsContent: fn,
                noEventsDidMount: fn,
                noEventsWillUnmount: fn
            },
            views: {
                list: {
                    component: iu,
                    buttonTextKey: "list",
                    listDayFormat: {
                        month: "long",
                        day: "numeric",
                        year: "numeric"
                    }
                },
                listDay: {
                    type: "list",
                    duration: {
                        days: 1
                    },
                    listDayFormat: {
                        weekday: "long"
                    }
                },
                listWeek: {
                    type: "list",
                    duration: {
                        weeks: 1
                    },
                    listDayFormat: {
                        weekday: "long"
                    },
                    listDaySideFormat: {
                        month: "long",
                        day: "numeric",
                        year: "numeric"
                    }
                },
                listMonth: {
                    type: "list",
                    duration: {
                        month: 1
                    },
                    listDaySideFormat: {
                        weekday: "long"
                    }
                },
                listYear: {
                    type: "list",
                    duration: {
                        year: 1
                    },
                    listDaySideFormat: {
                        weekday: "long"
                    }
                }
            }
        }),
        cu = function (e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return n(t, e),
            t
        }(vo);
    cu.prototype.classes = {
        root: "fc-theme-bootstrap",
        table: "table-bordered",
        tableCellShaded: "table-active",
        buttonGroup: "btn-group",
        button: "btn btn-primary",
        buttonActive: "active",
        popover: "popover",
        popoverHeader: "popover-header",
        popoverContent: "popover-body"
    },
    cu.prototype.baseIconClass = "fa",
    cu.prototype.iconClasses = {
        close: "fa-times",
        prev: "fa-chevron-left",
        next: "fa-chevron-right",
        prevYear: "fa-angle-double-left",
        nextYear: "fa-angle-double-right"
    },
    cu.prototype.rtlIconClasses = {
        prev: "fa-chevron-right",
        next: "fa-chevron-left",
        prevYear: "fa-angle-double-right",
        nextYear: "fa-angle-double-left"
    },
    cu.prototype.iconOverrideOption = "bootstrapFontAwesome",
    cu.prototype.iconOverrideCustomButtonOption = "bootstrapFontAwesome",
    cu.prototype.iconOverridePrefix = "fa-";
    var du = Ho({
            themeClasses: {
                bootstrap: cu
            }
        }),
        pu = "https://www.googleapis.com/calendar/v3/calendars";
    var fu = Ho({
        eventSourceDefs: [
            {
                parseMeta: function (e) {
                    var t = e.googleCalendarId;
                    return !t && e.url && (t = function (e) {
                        var t;
                        if (/^[^/]+@([^/.]+\.)*(google|googlemail|gmail)\.com$/.test(e)) 
                            return e;
                        if ((t = /^https:\/\/www.googleapis.com\/calendar\/v3\/calendars\/([^/]*)/.exec(e)) || (t = /^https?:\/\/www.google.com\/calendar\/feeds\/([^/]*)/.exec(e))) 
                            return decodeURIComponent(t[1]);
                        return null
                    }(e.url)),
                    t
                        ? {
                            googleCalendarId: t,
                            googleCalendarApiKey: e.googleCalendarApiKey,
                            googleCalendarApiBase: e.googleCalendarApiBase,
                            extraParams: e.extraParams
                        }
                        : null
                },
                fetch: function (e, t, n) {
                    var o = e.context,
                        i = o.dateEnv,
                        a = o.options,
                        s = e.eventSource.meta,
                        l = s.googleCalendarApiKey || a.googleCalendarApiKey;
                    if (l) {
                        var u = function (e) {
                                var t = e.googleCalendarApiBase;
                                t || (t = pu);
                                return t + "/" + encodeURIComponent(e.googleCalendarId) + "/events"
                            }(s),
                            c = s.extraParams,
                            d = "function" == typeof c
                                ? c()
                                : c,
                            p = function (e, t, n, o) {
                                var i,
                                    a,
                                    s;
                                o.canComputeOffset
                                    ? (a = o.formatIso(e.start), s = o.formatIso(e.end))
                                    : (a = Ke(e.start, -1).toISOString(), s = Ke(e.end, 1).toISOString());
                                i = r(r({}, n || {}), {
                                    key: t,
                                    timeMin: a,
                                    timeMax: s,
                                    singleEvents: !0,
                                    maxResults: 9999
                                }),
                                "local" !== o.timeZone && (i.timeZone = o.timeZone);
                                return i
                            }(e.range, l, d, i);
                        gi("GET", u, p, (function (e, r) {
                            var o,
                                i;
                            e.error
                                ? n({
                                    message: "Google Calendar API: " + e.error.message,
                                    errors: e.error.errors,
                                    xhr: r
                                })
                                : t({
                                    rawEvents: (o = e.items, i = p.timeZone, o.map((function (e) {
                                        return function (e, t) {
                                            var n = e.htmlLink || null;
                                            n && t && (n = function (e, t) {
                                                return e.replace(/(\?.*?)?(#|$)/, (function (e, n, r) {
                                                    return (
                                                        n
                                                            ? n + "&"
                                                            : "?"
                                                    ) + t + r
                                                }))
                                            }(n, "ctz=" + t));
                                            return {
                                                id: e.id,
                                                title: e.summary,
                                                start: e.start.dateTime || e.start.date,
                                                end: e.end.dateTime || e.end.date,
                                                url: n,
                                                location: e.location,
                                                description: e.description,
                                                attachments: e.attachments || [],
                                                extendedProps: (e.extendedProperties || {}).shared || {}
                                            }
                                        }(e, i)
                                    }))),
                                    xhr: r
                                })
                        }), (function (e, t) {
                            n({message: e, xhr: t})
                        }))
                    } else 
                        n({
                            message: "Specify a googleCalendarApiKey. See http://fullcalendar.io/docs/google_calenda" +
                                "r/"
                        })
                }
            }
        ],
        optionRefiners: {
            googleCalendarApiKey: String
        },
        eventSourceRefiners: {
            googleCalendarApiKey: String,
            googleCalendarId: String,
            googleCalendarApiBase: String,
            extraParams: fn
        }
    });
    return Ei.push(zs, hl, Jl, uu, du, fu),
    e.BASE_OPTION_DEFAULTS = on,
    e.BASE_OPTION_REFINERS = rn,
    e.BaseComponent = xo,
    e.BgEvent = ns,
    e.BootstrapTheme = cu,
    e.Calendar = hs,
    e.CalendarApi = br,
    e.CalendarContent = ia,
    e.CalendarDataManager = Ri,
    e.CalendarDataProvider = Ai,
    e.CalendarRoot = la,
    e.Component = go,
    e.ContentHook = Vo,
    e.CustomContentRenderContext = Wo,
    e.DateComponent = No,
    e.DateEnv = Pr,
    e.DateProfileGenerator = $o,
    e.DayCellContent = Ja,
    e.DayCellRoot = es,
    e.DayGridView = pl,
    e.DayHeader = ga,
    e.DaySeriesModel = ya,
    e.DayTable = dl,
    e.DayTableModel = Ea,
    e.DayTableSlicer = cl,
    e.DayTimeCols = ql,
    e.DayTimeColsSlicer = Gl,
    e.DayTimeColsView = Kl,
    e.DelayedRunner = bi,
    e.Draggable = Ws,
    e.ElementDragging = Ki,
    e.ElementScrollController = fo,
    e.Emitter = uo,
    e.EventApi = Cr,
    e.EventRoot = Ya,
    e.EventSourceApi = ye,
    e.FeaturefulElementDragging = _s,
    e.Fragment = So,
    e.Interaction = qi,
    e.ListView = iu,
    e.MoreLinkRoot = ls,
    e.MountHook = zo,
    e.NamedTimeZoneImpl = Ui,
    e.NowIndicatorRoot = Ka,
    e.NowTimer = ha,
    e.PointerDragging = ys,
    e.PositionCache = co,
    e.RefMap = Ia,
    e.RenderHook = Lo,
    e.ScrollController = po,
    e.ScrollResponder = Ro,
    e.Scroller = Pa,
    e.SegHierarchy = Li,
    e.SimpleScrollGrid = qa,
    e.Slicer = Sa,
    e.Splitter = Zr,
    e.StandardEvent = Za,
    e.Table = ll,
    e.TableDateCell = pa,
    e.TableDowCell = fa,
    e.TableView = Bs,
    e.Theme = vo,
    e.ThirdPartyDraggable = Fs,
    e.TimeCols = Bl,
    e.TimeColsSlatsCoords = Cl,
    e.TimeColsView = Dl,
    e.ViewApi = mr,
    e.ViewContextType = _o,
    e.ViewRoot = qo,
    e.WeekNumberRoot = os,
    e.WindowScrollController = ho,
    e.addDays = Ke,
    e.addDurations = Mt,
    e.addMs = $e,
    e.addWeeks = Xe,
    e.allowContextMenu = We,
    e.allowSelection = Ue,
    e.applyMutationToEventStore = hr,
    e.applyStyle = we,
    e.applyStyleProp = Re,
    e.asCleanDays = function (e) {
        return e.years || e.months || e.milliseconds
            ? 0
            : e.days
    },
    e.asRoughMinutes = function (e) {
        return Nt(e) / 6e4
    },
    e.asRoughMs = Nt,
    e.asRoughSeconds = function (e) {
        return Nt(e) / 1e3
    },
    e.binarySearch = Gi,
    e.buildClassNameNormalizer = Bo,
    e.buildDayRanges = Yl,
    e.buildDayTableModel = fl,
    e.buildEntryKey = Vi,
    e.buildEventApis = Rr,
    e.buildEventRangeKey = or,
    e.buildHashFromArray = function (e, t) {
        for (var n = {}, r = 0; r < e.length; r += 1) {
            var o = t(e[r], r);
            n[o[0]] = o[1]
        }
        return n
    },
    e.buildIsoString = At,
    e.buildNavLinkData = Jr,
    e.buildSegCompareObj = $n,
    e.buildSegTimeText = tr,
    e.buildSlatMetas = Xl,
    e.buildTimeColsModel = $l,
    e.collectFromHash = Ct,
    e.combineEventUis = wn,
    e.compareByFieldSpec = ze,
    e.compareByFieldSpecs = Fe,
    e.compareNumbers = Ge,
    e.compareObjs = Dt,
    e.computeEarliestSegStart = ds,
    e.computeEdges = oo,
    e.computeFallbackHeaderFormat = ua,
    e.computeHeightAndMargins = function (e) {
        return e
            .getBoundingClientRect()
            .height + function (e) {
                var t = window.getComputedStyle(e);
                return parseInt(t.marginTop, 10) + parseInt(t.marginBottom, 10)
            }(e)
    },
    e.computeInnerRect = io,
    e.computeRect = ao,
    e.computeSegDraggable = Jn,
    e.computeSegEndResizable = er,
    e.computeSegStartResizable = Qn,
    e.computeShrinkWidth = Na,
    e.computeSmallestCellWidth = Ye,
    e.computeVisibleDayRange = Hn,
    e.config = $i,
    e.constrainPoint = Br,
    e.createContext = Do,
    e.createDuration = kt,
    e.createElement = mo,
    e.createEmptyEventStore = mn,
    e.createEventInstance = pt,
    e.createEventUi = Cn,
    e.createFormatter = nn,
    e.createPlugin = Ho,
    e.createPortal = bo,
    e.createRef = Eo,
    e.diffDates = An,
    e.diffDayAndTime = et,
    e.diffDays = Qe,
    e.diffPoints = Gr,
    e.diffWeeks = Je,
    e.diffWholeDays = nt,
    e.diffWholeWeeks = tt,
    e.disableCursor = He,
    e.elementClosest = Se,
    e.elementMatches = De,
    e.enableCursor = Oe,
    e.eventTupleToStore = vn,
    e.filterEventStoreDefs = En,
    e.filterHash = vt,
    e.findDirectChildren = function (e, t) {
        for (
            var n = e instanceof HTMLElement
                ? [e]
                : e,
            r = [],
            o = 0; o < n.length; o += 1
        ) 
            for (var i = n[o].children, a = 0; a < i.length; a += 1) {
                var s = i[a];
                t && !De(s, t) || r.push(s)
            }
        return r
    },
    e.findElements = be,
    e.flexibleCompare = Be,
    e.flushToDom = Co,
    e.formatDate = function (e, t) {
        void 0 === t && (t = {});
        var n = Ur(t),
            r = nn(t),
            o = n.createMarkerMeta(e);
        return o
            ? n.format(o.marker, r, {forcedTzo: o.forcedTzo})
            : ""
    },
    e.formatDayString = Ut,
    e.formatIsoTimeString = Lt,
    e.formatRange = function (e, t, n) {
        var r = Ur(
                "object" == typeof n && n
                    ? n
                    : {}
            ),
            o = nn(n),
            i = r.createMarkerMeta(e),
            a = r.createMarkerMeta(t);
        return i && a
            ? r.formatRange(i.marker, a.marker, o, {
                forcedStartTzo: i.forcedTzo,
                forcedEndTzo: a.forcedTzo,
                isEndExclusive: n.isEndExclusive,
                defaultSeparator: on.defaultRangeSeparator
            })
            : ""
    },
    e.getAllowYScrolling = Oa,
    e.getCanVGrowWithinCell = qr,
    e.getClippingParents = so,
    e.getDateMeta = Kr,
    e.getDayClassNames = $r,
    e.getDefaultEventEnd = fr,
    e.getElSeg = Yn,
    e.getEntrySpanEnd = Wi,
    e.getEventClassNames = rr,
    e.getIsRtlScrollbarOnLeft = to,
    e.getRectCenter = jr,
    e.getRelevantEvents = gn,
    e.getScrollGridClassNames = Fa,
    e.getScrollbarWidths = no,
    e.getSectionClassNames = za,
    e.getSectionHasLiquidHeight = Ha,
    e.getSegMeta = nr,
    e.getSlotClassNames = function (e, t) {
        var n = [
            "fc-slot", "fc-slot-" + Ze[e.dow]
        ];
        return e.isDisabled
            ? n.push("fc-slot-disabled")
            : (
                e.isToday && (n.push("fc-slot-today"), n.push(t.getClass("today"))),
                e.isPast && n.push("fc-slot-past"),
                e.isFuture && n.push("fc-slot-future")
            ),
        n
    },
    e.getStickyFooterScrollbar = Ga,
    e.getStickyHeaderDates = ja,
    e.getUnequalProps = St,
    e.globalLocales = Ir,
    e.globalPlugins = Ei,
    e.greatestDurationDenominator = Ot,
    e.groupIntersectingEntries = Fi,
    e.guid = Ne,
    e.hasBgRendering = Gn,
    e.hasShrinkWidth = Va,
    e.identity = fn,
    e.interactionSettingsStore = Xi,
    e.interactionSettingsToStore = Zi,
    e.intersectRanges = Wn,
    e.intersectRects = zr,
    e.intersectSpans = Bi,
    e.isArraysEqual = Vt,
    e.isColPropsEqual = Ua,
    e.isDateSelectionValid = Ca,
    e.isDateSpansEqual = sr,
    e.isInt = qe,
    e.isInteractionValid = ba,
    e.isMultiDayRange = On,
    e.isPropsEqual = Et,
    e.isPropsValid = Ra,
    e.isValidDate = ct,
    e.joinSpans = zi,
    e.listenBySelector = xe,
    e.mapHash = gt,
    e.memoize = Ft,
    e.memoizeArraylike = function (e, t, n) {
        var r = this,
            o = [],
            i = [];
        return function (a) {
            for (var s = o.length, l = a.length, u = 0; u < s; u += 1) 
                if (a[u]) {
                    if (!Vt(o[u], a[u])) {
                        n && n(i[u]);
                        var c = e.apply(r, a[u]);
                        t && t(c, i[u]) || (i[u] = c)
                    }
                }
            else 
                n && n(i[u]);
            for (; u < l; u += 1) 
                i[u] = e.apply(r, a[u]);
            return o = a,
            i.splice(l),
            i
        }
    },
    e.memoizeHashlike = function (e, t, n) {
        var r = this,
            o = {},
            i = {};
        return function (a) {
            var s = {};
            for (var l in a) 
                if (i[l]) 
                    if (Vt(o[l], a[l])) 
                        s[l] = i[l];
                    else {
                        n && n(i[l]);
                        var u = e.apply(r, a[l]);
                        s[l] = t && t(u, i[l])
                            ? i[l]
                            : u
                    }
                else 
                s[l] = e.apply(r, a[l]);
            return o = a,
            i = s,
            s
        }
    },
    e.memoizeObjArg = zt,
    e.mergeEventStores = yn,
    e.multiplyDuration = Pt,
    e.padStart = je,
    e.parseBusinessHours = Vr,
    e.parseClassNames = Sn,
    e.parseDragMeta = Qi,
    e.parseEventDef = In,
    e.parseFieldSpecs = Ve,
    e.parseMarker = Mr,
    e.pointInsideRect = Fr,
    e.preventContextMenu = Le,
    e.preventDefault = Te,
    e.preventSelection = Ae,
    e.rangeContainsMarker = Bn,
    e.rangeContainsRange = zn,
    e.rangesEqual = Vn,
    e.rangesIntersect = Fn,
    e.refineEventDef = Mn,
    e.refineProps = pn,
    e.removeElement = Ee,
    e.removeExact = function (e, t) {
        for (var n = 0, r = 0; r < e.length;) 
            e[r] === t
                ? (e.splice(r, 1), n += 1)
                : r += 1;
        return n
    },
    e.render = yo,
    e.renderChunkContent = Aa,
    e.renderFill = ts,
    e.renderMicroColGroup = La,
    e.renderScrollShim = Ba,
    e.requestJson = gi,
    e.sanitizeShrinkWidth = Wa,
    e.setElSeg = qn,
    e.setRef = Io,
    e.sliceEventStore = jn,
    e.sliceEvents = function (e, t) {
        return jn(
            e.eventStore,
            e.eventUiBases,
            e.dateProfile.activeRange,
            t
                ? e.nextDayThreshold
                : null
        ).fg
    },
    e.sortEventSegs = Kn,
    e.startOfDay = rt,
    e.translateRect = function (e, t, n) {
        return {
            left: e.left + t,
            right: e.right + t,
            top: e.top + n,
            bottom: e.bottom + n
        }
    },
    e.triggerDateSelect = dr,
    e.unmountComponentAtNode = wo,
    e.unpromisify = lo,
    e.version = "5.8.0",
    e.whenTransitionDone = Pe,
    e.wholeDivideDurations = Ht,
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e
}({});