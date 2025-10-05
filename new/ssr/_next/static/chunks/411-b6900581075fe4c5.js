"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [411], {
        560352: function(t, e, n) {
            n.d(e, {
                dp: function() {
                    return u
                },
                oo: function() {
                    return i
                }
            });
            var r = n(347129);

            function o(t, e, n) {
                let o, {
                        reference: i,
                        floating: l
                    } = t,
                    u = (0, r.Qq)(e),
                    f = (0, r.Wh)(e),
                    c = (0, r.I4)(f),
                    s = (0, r.k3)(e),
                    a = "y" === u,
                    d = i.x + i.width / 2 - l.width / 2,
                    p = i.y + i.height / 2 - l.height / 2,
                    h = i[c] / 2 - l[c] / 2;
                switch (s) {
                    case "top":
                        o = {
                            x: d,
                            y: i.y - l.height
                        };
                        break;
                    case "bottom":
                        o = {
                            x: d,
                            y: i.y + i.height
                        };
                        break;
                    case "right":
                        o = {
                            x: i.x + i.width,
                            y: p
                        };
                        break;
                    case "left":
                        o = {
                            x: i.x - l.width,
                            y: p
                        };
                        break;
                    default:
                        o = {
                            x: i.x,
                            y: i.y
                        }
                }
                switch ((0, r.hp)(e)) {
                    case "start":
                        o[f] -= h * (n && a ? -1 : 1);
                        break;
                    case "end":
                        o[f] += h * (n && a ? -1 : 1)
                }
                return o
            }
            let i = async (t, e, n) => {
                let {
                    placement: r = "bottom",
                    strategy: i = "absolute",
                    middleware: l = [],
                    platform: u
                } = n, f = l.filter(Boolean), c = await (null == u.isRTL ? void 0 : u.isRTL(e)), s = await u.getElementRects({
                    reference: t,
                    floating: e,
                    strategy: i
                }), {
                    x: a,
                    y: d
                } = o(s, r, c), p = r, h = {}, g = 0;
                for (let n = 0; n < f.length; n++) {
                    let {
                        name: l,
                        fn: m
                    } = f[n], {
                        x: y,
                        y: w,
                        data: x,
                        reset: v
                    } = await m({
                        x: a,
                        y: d,
                        initialPlacement: r,
                        placement: p,
                        strategy: i,
                        middlewareData: h,
                        rects: s,
                        platform: u,
                        elements: {
                            reference: t,
                            floating: e
                        }
                    });
                    if (a = null != y ? y : a, d = null != w ? w : d, h = { ...h,
                            [l]: { ...h[l],
                                ...x
                            }
                        }, v && g <= 50) {
                        g++, "object" == typeof v && (v.placement && (p = v.placement), v.rects && (s = !0 === v.rects ? await u.getElementRects({
                            reference: t,
                            floating: e,
                            strategy: i
                        }) : v.rects), {
                            x: a,
                            y: d
                        } = o(s, p, c)), n = -1;
                        continue
                    }
                }
                return {
                    x: a,
                    y: d,
                    placement: p,
                    strategy: i,
                    middlewareData: h
                }
            };
            async function l(t, e) {
                var n;
                void 0 === e && (e = {});
                let {
                    x: o,
                    y: i,
                    platform: l,
                    rects: u,
                    elements: f,
                    strategy: c
                } = t, {
                    boundary: s = "clippingAncestors",
                    rootBoundary: a = "viewport",
                    elementContext: d = "floating",
                    altBoundary: p = !1,
                    padding: h = 0
                } = (0, r.ku)(e, t), g = (0, r.yd)(h), m = f[p ? "floating" === d ? "reference" : "floating" : d], y = (0, r.JB)(await l.getClippingRect({
                    element: null == (n = await (null == l.isElement ? void 0 : l.isElement(m))) || n ? m : m.contextElement || await (null == l.getDocumentElement ? void 0 : l.getDocumentElement(f.floating)),
                    boundary: s,
                    rootBoundary: a,
                    strategy: c
                })), w = "floating" === d ? { ...u.floating,
                    x: o,
                    y: i
                } : u.reference, x = await (null == l.getOffsetParent ? void 0 : l.getOffsetParent(f.floating)), v = await (null == l.isElement ? void 0 : l.isElement(x)) && await (null == l.getScale ? void 0 : l.getScale(x)) || {
                    x: 1,
                    y: 1
                }, b = (0, r.JB)(l.convertOffsetParentRelativeRectToViewportRelativeRect ? await l.convertOffsetParentRelativeRectToViewportRelativeRect({
                    rect: w,
                    offsetParent: x,
                    strategy: c
                }) : w);
                return {
                    top: (y.top - b.top + g.top) / v.y,
                    bottom: (b.bottom - y.bottom + g.bottom) / v.y,
                    left: (y.left - b.left + g.left) / v.x,
                    right: (b.right - y.right + g.right) / v.x
                }
            }
            let u = function(t) {
                return void 0 === t && (t = {}), {
                    name: "size",
                    options: t,
                    async fn(e) {
                        let n, o;
                        let {
                            placement: i,
                            rects: u,
                            platform: f,
                            elements: c
                        } = e, {
                            apply: s = () => {},
                            ...a
                        } = (0, r.ku)(t, e), d = await l(e, a), p = (0, r.k3)(i), h = (0, r.hp)(i), g = "y" === (0, r.Qq)(i), {
                            width: m,
                            height: y
                        } = u.floating;
                        "top" === p || "bottom" === p ? (n = p, o = h === (await (null == f.isRTL ? void 0 : f.isRTL(c.floating)) ? "start" : "end") ? "left" : "right") : (o = p, n = "end" === h ? "top" : "bottom");
                        let w = y - d[n],
                            x = m - d[o],
                            v = !e.middlewareData.shift,
                            b = w,
                            R = x;
                        if (g) {
                            let t = m - d.left - d.right;
                            R = h || v ? (0, r.VV)(x, t) : t
                        } else {
                            let t = y - d.top - d.bottom;
                            b = h || v ? (0, r.VV)(w, t) : t
                        }
                        if (v && !h) {
                            let t = (0, r.Fp)(d.left, 0),
                                e = (0, r.Fp)(d.right, 0),
                                n = (0, r.Fp)(d.top, 0),
                                o = (0, r.Fp)(d.bottom, 0);
                            g ? R = m - 2 * (0 !== t || 0 !== e ? t + e : (0, r.Fp)(d.left, d.right)) : b = y - 2 * (0 !== n || 0 !== o ? n + o : (0, r.Fp)(d.top, d.bottom))
                        }
                        await s({ ...e,
                            availableWidth: R,
                            availableHeight: b
                        });
                        let E = await f.getDimensions(c.floating);
                        return m !== E.width || y !== E.height ? {
                            reset: {
                                rects: !0
                            }
                        } : {}
                    }
                }
            }
        },
        900411: function(t, e, n) {
            n.d(e, {
                YF: function() {
                    return Y
                }
            });
            var r = n(347129),
                o = n(560352);

            function i(t) {
                return f(t) ? (t.nodeName || "").toLowerCase() : "#document"
            }

            function l(t) {
                var e;
                return (null == t ? void 0 : null == (e = t.ownerDocument) ? void 0 : e.defaultView) || window
            }

            function u(t) {
                var e;
                return null == (e = (f(t) ? t.ownerDocument : t.document) || window.document) ? void 0 : e.documentElement
            }

            function f(t) {
                return t instanceof Node || t instanceof l(t).Node
            }

            function c(t) {
                return t instanceof Element || t instanceof l(t).Element
            }

            function s(t) {
                return t instanceof HTMLElement || t instanceof l(t).HTMLElement
            }

            function a(t) {
                return "undefined" != typeof ShadowRoot && (t instanceof ShadowRoot || t instanceof l(t).ShadowRoot)
            }

            function d(t) {
                let {
                    overflow: e,
                    overflowX: n,
                    overflowY: r,
                    display: o
                } = m(t);
                return /auto|scroll|overlay|hidden|clip/.test(e + r + n) && !["inline", "contents"].includes(o)
            }

            function p(t) {
                let e = h(),
                    n = m(t);
                return "none" !== n.transform || "none" !== n.perspective || !!n.containerType && "normal" !== n.containerType || !e && !!n.backdropFilter && "none" !== n.backdropFilter || !e && !!n.filter && "none" !== n.filter || ["transform", "perspective", "filter"].some(t => (n.willChange || "").includes(t)) || ["paint", "layout", "strict", "content"].some(t => (n.contain || "").includes(t))
            }

            function h() {
                return "undefined" != typeof CSS && !!CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")
            }

            function g(t) {
                return ["html", "body", "#document"].includes(i(t))
            }

            function m(t) {
                return l(t).getComputedStyle(t)
            }

            function y(t) {
                return c(t) ? {
                    scrollLeft: t.scrollLeft,
                    scrollTop: t.scrollTop
                } : {
                    scrollLeft: t.pageXOffset,
                    scrollTop: t.pageYOffset
                }
            }

            function w(t) {
                if ("html" === i(t)) return t;
                let e = t.assignedSlot || t.parentNode || a(t) && t.host || u(t);
                return a(e) ? e.host : e
            }

            function x(t) {
                let e = m(t),
                    n = parseFloat(e.width) || 0,
                    o = parseFloat(e.height) || 0,
                    i = s(t),
                    l = i ? t.offsetWidth : n,
                    u = i ? t.offsetHeight : o,
                    f = (0, r.NM)(n) !== l || (0, r.NM)(o) !== u;
                return f && (n = l, o = u), {
                    width: n,
                    height: o,
                    $: f
                }
            }

            function v(t) {
                return c(t) ? t : t.contextElement
            }

            function b(t) {
                let e = v(t);
                if (!s(e)) return (0, r.ze)(1);
                let n = e.getBoundingClientRect(),
                    {
                        width: o,
                        height: i,
                        $: l
                    } = x(e),
                    u = (l ? (0, r.NM)(n.width) : n.width) / o,
                    f = (l ? (0, r.NM)(n.height) : n.height) / i;
                return u && Number.isFinite(u) || (u = 1), f && Number.isFinite(f) || (f = 1), {
                    x: u,
                    y: f
                }
            }
            let R = (0, r.ze)(0);

            function E(t) {
                let e = l(t);
                return h() && e.visualViewport ? {
                    x: e.visualViewport.offsetLeft,
                    y: e.visualViewport.offsetTop
                } : R
            }

            function k(t, e, n, o) {
                var i;
                void 0 === e && (e = !1), void 0 === n && (n = !1);
                let u = t.getBoundingClientRect(),
                    f = v(t),
                    s = (0, r.ze)(1);
                e && (o ? c(o) && (s = b(o)) : s = b(t));
                let a = (void 0 === (i = n) && (i = !1), o && (!i || o === l(f)) && i) ? E(f) : (0, r.ze)(0),
                    d = (u.left + a.x) / s.x,
                    p = (u.top + a.y) / s.y,
                    h = u.width / s.x,
                    g = u.height / s.y;
                if (f) {
                    let t = l(f),
                        e = o && c(o) ? l(o) : o,
                        n = t.frameElement;
                    for (; n && o && e !== t;) {
                        let t = b(n),
                            e = n.getBoundingClientRect(),
                            r = m(n),
                            o = e.left + (n.clientLeft + parseFloat(r.paddingLeft)) * t.x,
                            i = e.top + (n.clientTop + parseFloat(r.paddingTop)) * t.y;
                        d *= t.x, p *= t.y, h *= t.x, g *= t.y, d += o, p += i, n = l(n).frameElement
                    }
                }
                return (0, r.JB)({
                    width: h,
                    height: g,
                    x: d,
                    y: p
                })
            }

            function C(t) {
                return k(u(t)).left + y(t).scrollLeft
            }

            function T(t, e, n) {
                let o;
                if ("viewport" === e) o = function(t, e) {
                    let n = l(t),
                        r = u(t),
                        o = n.visualViewport,
                        i = r.clientWidth,
                        f = r.clientHeight,
                        c = 0,
                        s = 0;
                    if (o) {
                        i = o.width, f = o.height;
                        let t = h();
                        (!t || t && "fixed" === e) && (c = o.offsetLeft, s = o.offsetTop)
                    }
                    return {
                        width: i,
                        height: f,
                        x: c,
                        y: s
                    }
                }(t, n);
                else if ("document" === e) o = function(t) {
                    let e = u(t),
                        n = y(t),
                        o = t.ownerDocument.body,
                        i = (0, r.Fp)(e.scrollWidth, e.clientWidth, o.scrollWidth, o.clientWidth),
                        l = (0, r.Fp)(e.scrollHeight, e.clientHeight, o.scrollHeight, o.clientHeight),
                        f = -n.scrollLeft + C(t),
                        c = -n.scrollTop;
                    return "rtl" === m(o).direction && (f += (0, r.Fp)(e.clientWidth, o.clientWidth) - i), {
                        width: i,
                        height: l,
                        x: f,
                        y: c
                    }
                }(u(t));
                else if (c(e)) o = function(t, e) {
                    let n = k(t, !0, "fixed" === e),
                        o = n.top + t.clientTop,
                        i = n.left + t.clientLeft,
                        l = s(t) ? b(t) : (0, r.ze)(1),
                        u = t.clientWidth * l.x;
                    return {
                        width: u,
                        height: t.clientHeight * l.y,
                        x: i * l.x,
                        y: o * l.y
                    }
                }(e, n);
                else {
                    let n = E(t);
                    o = { ...e,
                        x: e.x - n.x,
                        y: e.y - n.y
                    }
                }
                return (0, r.JB)(o)
            }

            function L(t, e) {
                return s(t) && "fixed" !== m(t).position ? e ? e(t) : t.offsetParent : null
            }

            function S(t, e) {
                let n = l(t);
                if (!s(t)) return n;
                let r = L(t, e);
                for (; r && ["table", "td", "th"].includes(i(r)) && "static" === m(r).position;) r = L(r, e);
                return r && ("html" === i(r) || "body" === i(r) && "static" === m(r).position && !p(r)) ? n : r || function(t) {
                    let e = w(t);
                    for (; s(e) && !g(e);) {
                        if (p(e)) return e;
                        e = w(e)
                    }
                    return null
                }(t) || n
            }
            let F = async function(t) {
                    let {
                        reference: e,
                        floating: n,
                        strategy: o
                    } = t, l = this.getOffsetParent || S, f = this.getDimensions;
                    return {
                        reference: function(t, e, n) {
                            let o = s(e),
                                l = u(e),
                                f = "fixed" === n,
                                c = k(t, !0, f, e),
                                a = {
                                    scrollLeft: 0,
                                    scrollTop: 0
                                },
                                p = (0, r.ze)(0);
                            if (o || !o && !f) {
                                if (("body" !== i(e) || d(l)) && (a = y(e)), o) {
                                    let t = k(e, !0, f, e);
                                    p.x = t.x + e.clientLeft, p.y = t.y + e.clientTop
                                } else l && (p.x = C(l))
                            }
                            return {
                                x: c.left + a.scrollLeft - p.x,
                                y: c.top + a.scrollTop - p.y,
                                width: c.width,
                                height: c.height
                            }
                        }(e, await l(n), o),
                        floating: {
                            x: 0,
                            y: 0,
                            ...await f(n)
                        }
                    }
                },
                M = {
                    convertOffsetParentRelativeRectToViewportRelativeRect: function(t) {
                        let {
                            rect: e,
                            offsetParent: n,
                            strategy: o
                        } = t, l = s(n), f = u(n);
                        if (n === f) return e;
                        let c = {
                                scrollLeft: 0,
                                scrollTop: 0
                            },
                            a = (0, r.ze)(1),
                            p = (0, r.ze)(0);
                        if ((l || !l && "fixed" !== o) && (("body" !== i(n) || d(f)) && (c = y(n)), s(n))) {
                            let t = k(n);
                            a = b(n), p.x = t.x + n.clientLeft, p.y = t.y + n.clientTop
                        }
                        return {
                            width: e.width * a.x,
                            height: e.height * a.y,
                            x: e.x * a.x - c.scrollLeft * a.x + p.x,
                            y: e.y * a.y - c.scrollTop * a.y + p.y
                        }
                    },
                    getDocumentElement: u,
                    getClippingRect: function(t) {
                        let {
                            element: e,
                            boundary: n,
                            rootBoundary: o,
                            strategy: u
                        } = t, f = [..."clippingAncestors" === n ? function(t, e) {
                            let n = e.get(t);
                            if (n) return n;
                            let r = (function t(e, n) {
                                    var r;
                                    void 0 === n && (n = []);
                                    let o = function t(e) {
                                            let n = w(e);
                                            return g(n) ? e.ownerDocument ? e.ownerDocument.body : e.body : s(n) && d(n) ? n : t(n)
                                        }(e),
                                        i = o === (null == (r = e.ownerDocument) ? void 0 : r.body),
                                        u = l(o);
                                    return i ? n.concat(u, u.visualViewport || [], d(o) ? o : []) : n.concat(o, t(o))
                                })(t).filter(t => c(t) && "body" !== i(t)),
                                o = null,
                                u = "fixed" === m(t).position,
                                f = u ? w(t) : t;
                            for (; c(f) && !g(f);) {
                                let e = m(f),
                                    n = p(f);
                                n || "fixed" !== e.position || (o = null), (u ? !n && !o : !n && "static" === e.position && !!o && ["absolute", "fixed"].includes(o.position) || d(f) && !n && function t(e, n) {
                                    let r = w(e);
                                    return !(r === n || !c(r) || g(r)) && ("fixed" === m(r).position || t(r, n))
                                }(t, f)) ? r = r.filter(t => t !== f) : o = e, f = w(f)
                            }
                            return e.set(t, r), r
                        }(e, this._c) : [].concat(n), o], a = f[0], h = f.reduce((t, n) => {
                            let o = T(e, n, u);
                            return t.top = (0, r.Fp)(o.top, t.top), t.right = (0, r.VV)(o.right, t.right), t.bottom = (0, r.VV)(o.bottom, t.bottom), t.left = (0, r.Fp)(o.left, t.left), t
                        }, T(e, a, u));
                        return {
                            width: h.right - h.left,
                            height: h.bottom - h.top,
                            x: h.left,
                            y: h.top
                        }
                    },
                    getOffsetParent: S,
                    getElementRects: F,
                    getClientRects: function(t) {
                        return Array.from(t.getClientRects())
                    },
                    getDimensions: function(t) {
                        return x(t)
                    },
                    getScale: b,
                    isElement: c,
                    isRTL: function(t) {
                        return "rtl" === m(t).direction
                    }
                },
                V = (t, e, n) => {
                    let r = new Map,
                        i = {
                            platform: M,
                            ...n
                        },
                        l = { ...i.platform,
                            _c: r
                        };
                    return (0, o.oo)(t, e, { ...i,
                        platform: l
                    })
                };
            var D = n(275271),
                P = n.t(D, 2),
                N = n(230967),
                O = "undefined" != typeof document ? D.useLayoutEffect : D.useEffect;

            function B(t, e) {
                let n, r, o;
                if (t === e) return !0;
                if (typeof t != typeof e) return !1;
                if ("function" == typeof t && t.toString() === e.toString()) return !0;
                if (t && e && "object" == typeof t) {
                    if (Array.isArray(t)) {
                        if ((n = t.length) != e.length) return !1;
                        for (r = n; 0 != r--;)
                            if (!B(t[r], e[r])) return !1;
                        return !0
                    }
                    if ((n = (o = Object.keys(t)).length) !== Object.keys(e).length) return !1;
                    for (r = n; 0 != r--;)
                        if (!({}).hasOwnProperty.call(e, o[r])) return !1;
                    for (r = n; 0 != r--;) {
                        let n = o[r];
                        if (("_owner" !== n || !t.$$typeof) && !B(t[n], e[n])) return !1
                    }
                    return !0
                }
                return t != t && e != e
            }

            function W(t) {
                return "undefined" == typeof window ? 1 : (t.ownerDocument.defaultView || window).devicePixelRatio || 1
            }

            function z(t, e) {
                let n = W(t);
                return Math.round(e * n) / n
            }

            function H(t) {
                let e = D.useRef(t);
                return O(() => {
                    e.current = t
                }), e
            }
            var _ = "undefined" != typeof document ? D.useLayoutEffect : D.useEffect;
            let A = !1,
                J = 0,
                j = () => "floating-ui-" + J++,
                I = P["useId".toString()] || function() {
                    let [t, e] = D.useState(() => A ? j() : void 0);
                    return _(() => {
                        null == t && e(j())
                    }, []), D.useEffect(() => {
                        A || (A = !0)
                    }, []), t
                },
                q = D.createContext(null),
                Q = () => D.useContext(q),
                $ = P["useInsertionEffect".toString()] || (t => t());

            function Y(t) {
                var e;
                void 0 === t && (t = {});
                let {
                    open: n = !1,
                    onOpenChange: r,
                    nodeId: o
                } = t, [i, l] = D.useState(null), u = (null == (e = t.elements) ? void 0 : e.reference) || i, f = function(t) {
                    void 0 === t && (t = {});
                    let {
                        placement: e = "bottom",
                        strategy: n = "absolute",
                        middleware: r = [],
                        platform: o,
                        elements: {
                            reference: i,
                            floating: l
                        } = {},
                        transform: u = !0,
                        whileElementsMounted: f,
                        open: c
                    } = t, [s, a] = D.useState({
                        x: 0,
                        y: 0,
                        strategy: n,
                        placement: e,
                        middlewareData: {},
                        isPositioned: !1
                    }), [d, p] = D.useState(r);
                    B(d, r) || p(r);
                    let [h, g] = D.useState(null), [m, y] = D.useState(null), w = D.useCallback(t => {
                        t != R.current && (R.current = t, g(t))
                    }, [g]), x = D.useCallback(t => {
                        t !== E.current && (E.current = t, y(t))
                    }, [y]), v = i || h, b = l || m, R = D.useRef(null), E = D.useRef(null), k = D.useRef(s), C = H(f), T = H(o), L = D.useCallback(() => {
                        if (!R.current || !E.current) return;
                        let t = {
                            placement: e,
                            strategy: n,
                            middleware: d
                        };
                        T.current && (t.platform = T.current), V(R.current, E.current, t).then(t => {
                            let e = { ...t,
                                isPositioned: !0
                            };
                            S.current && !B(k.current, e) && (k.current = e, N.flushSync(() => {
                                a(e)
                            }))
                        })
                    }, [d, e, n, T]);
                    O(() => {
                        !1 === c && k.current.isPositioned && (k.current.isPositioned = !1, a(t => ({ ...t,
                            isPositioned: !1
                        })))
                    }, [c]);
                    let S = D.useRef(!1);
                    O(() => (S.current = !0, () => {
                        S.current = !1
                    }), []), O(() => {
                        if (v && (R.current = v), b && (E.current = b), v && b) {
                            if (C.current) return C.current(v, b, L);
                            L()
                        }
                    }, [v, b, L, C]);
                    let F = D.useMemo(() => ({
                            reference: R,
                            floating: E,
                            setReference: w,
                            setFloating: x
                        }), [w, x]),
                        M = D.useMemo(() => ({
                            reference: v,
                            floating: b
                        }), [v, b]),
                        P = D.useMemo(() => {
                            let t = {
                                position: n,
                                left: 0,
                                top: 0
                            };
                            if (!M.floating) return t;
                            let e = z(M.floating, s.x),
                                r = z(M.floating, s.y);
                            return u ? { ...t,
                                transform: "translate(" + e + "px, " + r + "px)",
                                ...W(M.floating) >= 1.5 && {
                                    willChange: "transform"
                                }
                            } : {
                                position: n,
                                left: e,
                                top: r
                            }
                        }, [n, u, M.floating, s.x, s.y]);
                    return D.useMemo(() => ({ ...s,
                        update: L,
                        refs: F,
                        elements: M,
                        floatingStyles: P
                    }), [s, L, F, M, P])
                }(t), s = Q(), a = function(t) {
                    let e = D.useRef(() => {});
                    return $(() => {
                        e.current = t
                    }), D.useCallback(function() {
                        for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                        return null == e.current ? void 0 : e.current(...n)
                    }, [])
                }((t, e) => {
                    t && (p.current.openEvent = e), null == r || r(t, e)
                }), d = D.useRef(null), p = D.useRef({}), h = D.useState(() => (function() {
                    let t = new Map;
                    return {
                        emit(e, n) {
                            var r;
                            null == (r = t.get(e)) || r.forEach(t => t(n))
                        },
                        on(e, n) {
                            t.set(e, [...t.get(e) || [], n])
                        },
                        off(e, n) {
                            var r;
                            t.set(e, (null == (r = t.get(e)) ? void 0 : r.filter(t => t !== n)) || [])
                        }
                    }
                })())[0], g = I(), m = D.useCallback(t => {
                    let e = c(t) ? {
                        getBoundingClientRect: () => t.getBoundingClientRect(),
                        contextElement: t
                    } : t;
                    f.refs.setReference(e)
                }, [f.refs]), y = D.useCallback(t => {
                    (c(t) || null === t) && (d.current = t, l(t)), (c(f.refs.reference.current) || null === f.refs.reference.current || null !== t && !c(t)) && f.refs.setReference(t)
                }, [f.refs]), w = D.useMemo(() => ({ ...f.refs,
                    setReference: y,
                    setPositionReference: m,
                    domReference: d
                }), [f.refs, y, m]), x = D.useMemo(() => ({ ...f.elements,
                    domReference: u
                }), [f.elements, u]), v = D.useMemo(() => ({ ...f,
                    refs: w,
                    elements: x,
                    dataRef: p,
                    nodeId: o,
                    floatingId: g,
                    events: h,
                    open: n,
                    onOpenChange: a
                }), [f, o, g, h, n, a, w, x]);
                return _(() => {
                    let t = null == s ? void 0 : s.nodesRef.current.find(t => t.id === o);
                    t && (t.context = v)
                }), D.useMemo(() => ({ ...f,
                    context: v,
                    refs: w,
                    elements: x
                }), [f, w, x, v])
            }
        },
        347129: function(t, e, n) {
            n.d(e, {
                Fp: function() {
                    return o
                },
                I4: function() {
                    return s
                },
                JB: function() {
                    return h
                },
                NM: function() {
                    return i
                },
                Qq: function() {
                    return a
                },
                VV: function() {
                    return r
                },
                Wh: function() {
                    return d
                },
                hp: function() {
                    return c
                },
                k3: function() {
                    return f
                },
                ku: function() {
                    return u
                },
                yd: function() {
                    return p
                },
                ze: function() {
                    return l
                }
            });
            let r = Math.min,
                o = Math.max,
                i = Math.round,
                l = t => ({
                    x: t,
                    y: t
                });

            function u(t, e) {
                return "function" == typeof t ? t(e) : t
            }

            function f(t) {
                return t.split("-")[0]
            }

            function c(t) {
                return t.split("-")[1]
            }

            function s(t) {
                return "y" === t ? "height" : "width"
            }

            function a(t) {
                return ["top", "bottom"].includes(f(t)) ? "y" : "x"
            }

            function d(t) {
                return "x" === a(t) ? "y" : "x"
            }

            function p(t) {
                return "number" != typeof t ? {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                    ...t
                } : {
                    top: t,
                    right: t,
                    bottom: t,
                    left: t
                }
            }

            function h(t) {
                return { ...t,
                    top: t.y,
                    left: t.x,
                    right: t.x + t.width,
                    bottom: t.y + t.height
                }
            }
        }
    }
]);
//# sourceMappingURL=411-b6900581075fe4c5.js.map