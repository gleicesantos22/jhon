(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [83314], {
        490026: function(e, t) {
            "use strict";
            var n, r, o, u;
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e, t) {
                    for (var n in t) Object.defineProperty(e, n, {
                        enumerable: !0,
                        get: t[n]
                    })
                }(t, {
                    ACTION_FAST_REFRESH: function() {
                        return s
                    },
                    ACTION_NAVIGATE: function() {
                        return f
                    },
                    ACTION_PREFETCH: function() {
                        return c
                    },
                    ACTION_REFRESH: function() {
                        return l
                    },
                    ACTION_RESTORE: function() {
                        return a
                    },
                    ACTION_SERVER_ACTION: function() {
                        return d
                    },
                    ACTION_SERVER_PATCH: function() {
                        return i
                    },
                    PrefetchCacheEntryStatus: function() {
                        return r
                    },
                    PrefetchKind: function() {
                        return n
                    },
                    isThenable: function() {
                        return p
                    }
                });
            let l = "refresh",
                f = "navigate",
                a = "restore",
                i = "server-patch",
                c = "prefetch",
                s = "fast-refresh",
                d = "server-action";

            function p(e) {
                return e && ("object" == typeof e || "function" == typeof e) && "function" == typeof e.then
            }(o = n || (n = {})).AUTO = "auto", o.FULL = "full", o.TEMPORARY = "temporary", (u = r || (r = {})).fresh = "fresh", u.reusable = "reusable", u.expired = "expired", u.stale = "stale", ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        840521: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "getDomainLocale", {
                enumerable: !0,
                get: function() {
                    return o
                }
            });
            let r = n(215815);

            function o(e, t, o, u) {
                {
                    let l = n(855129).normalizeLocalePath,
                        f = n(2504).detectDomainLocale,
                        a = t || l(e, o).detectedLocale,
                        i = f(u, void 0, a);
                    if (i) {
                        let t = "http" + (i.http ? "" : "s") + "://",
                            n = a === i.defaultLocale ? "" : "/" + a;
                        return "" + t + i.domain + (0, r.normalizePathTrailingSlash)("" + n + e)
                    }
                    return !1
                }
            }("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        675720: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return g
                }
            });
            let r = n(42430),
                o = n(552676),
                u = r._(n(275271)),
                l = n(842441),
                f = n(885771),
                a = n(954872),
                i = n(508994),
                c = n(395044),
                s = n(756115),
                d = n(705507),
                p = n(104012),
                h = n(840521),
                b = n(720301),
                y = n(490026),
                _ = new Set;

            function v(e, t, n, r, o, u) {
                if (u || (0, f.isLocalURL)(t)) {
                    if (!r.bypassPrefetchedCheck) {
                        let o = t + "%" + n + "%" + (void 0 !== r.locale ? r.locale : "locale" in e ? e.locale : void 0);
                        if (_.has(o)) return;
                        _.add(o)
                    }(async () => u ? e.prefetch(t, o) : e.prefetch(t, n, r))().catch(e => {})
                }
            }

            function O(e) {
                return "string" == typeof e ? e : (0, a.formatUrl)(e)
            }
            let g = u.default.forwardRef(function(e, t) {
                let n, r;
                let {
                    href: a,
                    as: _,
                    children: g,
                    prefetch: P = null,
                    passHref: j,
                    replace: C,
                    shallow: m,
                    scroll: E,
                    locale: M,
                    onClick: T,
                    onMouseEnter: R,
                    onTouchStart: L,
                    legacyBehavior: A = !1,
                    ...k
                } = e;
                n = g, A && ("string" == typeof n || "number" == typeof n) && (n = (0, o.jsx)("a", {
                    children: n
                }));
                let I = u.default.useContext(s.RouterContext),
                    x = u.default.useContext(d.AppRouterContext),
                    S = null != I ? I : x,
                    N = !I,
                    U = !1 !== P,
                    w = null === P ? y.PrefetchKind.AUTO : y.PrefetchKind.FULL,
                    {
                        href: K,
                        as: F
                    } = u.default.useMemo(() => {
                        if (!I) {
                            let e = O(a);
                            return {
                                href: e,
                                as: _ ? O(_) : e
                            }
                        }
                        let [e, t] = (0, l.resolveHref)(I, a, !0);
                        return {
                            href: e,
                            as: _ ? (0, l.resolveHref)(I, _) : t || e
                        }
                    }, [I, a, _]),
                    H = u.default.useRef(K),
                    z = u.default.useRef(F);
                A && (r = u.default.Children.only(n));
                let D = A ? r && "object" == typeof r && r.ref : t,
                    [V, q, B] = (0, p.useIntersection)({
                        rootMargin: "200px"
                    }),
                    G = u.default.useCallback(e => {
                        (z.current !== F || H.current !== K) && (B(), z.current = F, H.current = K), V(e), D && ("function" == typeof D ? D(e) : "object" == typeof D && (D.current = e))
                    }, [F, D, K, B, V]);
                u.default.useEffect(() => {
                    S && q && U && v(S, K, F, {
                        locale: M
                    }, {
                        kind: w
                    }, N)
                }, [F, K, q, M, U, null == I ? void 0 : I.locale, S, N, w]);
                let Y = {
                    ref: G,
                    onClick(e) {
                        A || "function" != typeof T || T(e), A && r.props && "function" == typeof r.props.onClick && r.props.onClick(e), S && !e.defaultPrevented && function(e, t, n, r, o, l, a, i, c) {
                            let {
                                nodeName: s
                            } = e.currentTarget;
                            if ("A" === s.toUpperCase() && (function(e) {
                                    let t = e.currentTarget.getAttribute("target");
                                    return t && "_self" !== t || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.nativeEvent && 2 === e.nativeEvent.which
                                }(e) || !c && !(0, f.isLocalURL)(n))) return;
                            e.preventDefault();
                            let d = () => {
                                let e = null == a || a;
                                "beforePopState" in t ? t[o ? "replace" : "push"](n, r, {
                                    shallow: l,
                                    locale: i,
                                    scroll: e
                                }) : t[o ? "replace" : "push"](r || n, {
                                    scroll: e
                                })
                            };
                            c ? u.default.startTransition(d) : d()
                        }(e, S, K, F, C, m, E, M, N)
                    },
                    onMouseEnter(e) {
                        A || "function" != typeof R || R(e), A && r.props && "function" == typeof r.props.onMouseEnter && r.props.onMouseEnter(e), S && (U || !N) && v(S, K, F, {
                            locale: M,
                            priority: !0,
                            bypassPrefetchedCheck: !0
                        }, {
                            kind: w
                        }, N)
                    },
                    onTouchStart: function(e) {
                        A || "function" != typeof L || L(e), A && r.props && "function" == typeof r.props.onTouchStart && r.props.onTouchStart(e), S && (U || !N) && v(S, K, F, {
                            locale: M,
                            priority: !0,
                            bypassPrefetchedCheck: !0
                        }, {
                            kind: w
                        }, N)
                    }
                };
                if ((0, i.isAbsoluteUrl)(F)) Y.href = F;
                else if (!A || j || "a" === r.type && !("href" in r.props)) {
                    let e = void 0 !== M ? M : null == I ? void 0 : I.locale,
                        t = (null == I ? void 0 : I.isLocaleDomain) && (0, h.getDomainLocale)(F, e, null == I ? void 0 : I.locales, null == I ? void 0 : I.domainLocales);
                    Y.href = t || (0, b.addBasePath)((0, c.addLocale)(F, e, null == I ? void 0 : I.defaultLocale))
                }
                return A ? u.default.cloneElement(r, Y) : (0, o.jsx)("a", { ...k,
                    ...Y,
                    children: n
                })
            });
            ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        855129: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "normalizeLocalePath", {
                enumerable: !0,
                get: function() {
                    return r
                }
            });
            let r = (e, t) => n(126850).normalizeLocalePath(e, t);
            ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        104012: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "useIntersection", {
                enumerable: !0,
                get: function() {
                    return a
                }
            });
            let r = n(275271),
                o = n(162496),
                u = "function" == typeof IntersectionObserver,
                l = new Map,
                f = [];

            function a(e) {
                let {
                    rootRef: t,
                    rootMargin: n,
                    disabled: a
                } = e, i = a || !u, [c, s] = (0, r.useState)(!1), d = (0, r.useRef)(null), p = (0, r.useCallback)(e => {
                    d.current = e
                }, []);
                return (0, r.useEffect)(() => {
                    if (u) {
                        if (i || c) return;
                        let e = d.current;
                        if (e && e.tagName) return function(e, t, n) {
                            let {
                                id: r,
                                observer: o,
                                elements: u
                            } = function(e) {
                                let t;
                                let n = {
                                        root: e.root || null,
                                        margin: e.rootMargin || ""
                                    },
                                    r = f.find(e => e.root === n.root && e.margin === n.margin);
                                if (r && (t = l.get(r))) return t;
                                let o = new Map;
                                return t = {
                                    id: n,
                                    observer: new IntersectionObserver(e => {
                                        e.forEach(e => {
                                            let t = o.get(e.target),
                                                n = e.isIntersecting || e.intersectionRatio > 0;
                                            t && n && t(n)
                                        })
                                    }, e),
                                    elements: o
                                }, f.push(n), l.set(n, t), t
                            }(n);
                            return u.set(e, t), o.observe(e),
                                function() {
                                    if (u.delete(e), o.unobserve(e), 0 === u.size) {
                                        o.disconnect(), l.delete(r);
                                        let e = f.findIndex(e => e.root === r.root && e.margin === r.margin);
                                        e > -1 && f.splice(e, 1)
                                    }
                                }
                        }(e, e => e && s(e), {
                            root: null == t ? void 0 : t.current,
                            rootMargin: n
                        })
                    } else if (!c) {
                        let e = (0, o.requestIdleCallback)(() => s(!0));
                        return () => (0, o.cancelIdleCallback)(e)
                    }
                }, [i, n, t, c, d.current]), [p, c, (0, r.useCallback)(() => {
                    s(!1)
                }, [])]
            }("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        183314: function(e, t, n) {
            e.exports = n(675720)
        }
    }
]);
//# sourceMappingURL=83314-800723dddd505e32.js.map