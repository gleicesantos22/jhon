"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [58108], {
        842838: function(e, t, r) {
            r.d(t, {
                n: function() {
                    return i
                }
            });
            var n = r(275271),
                l = r(282187),
                a = r.n(l),
                o = r(825040);

            function i(e) {
                let t, {
                        autoPlay: r,
                        className: l,
                        height: i = "100%",
                        mediaId: u,
                        mediaType: s,
                        width: c = "100%"
                    } = e,
                    [m, d] = (0, n.useState)(!0),
                    p = a()("m-video", l),
                    f = a()("m-video-iframe", {
                        "hrt-disp-none": m
                    }),
                    v = a()("m-video-loading-dots", {
                        "hrt-disp-none": !m
                    });
                return 2 === s ? t = `https://player.vimeo.com/video/${u}?playsinline=0` : 0 === s ? t = `https://www.youtube-nocookie.com/embed/${u}?${r?"autoplay=1&":""}rel=0` : console.warn(`Media type ${s} with media id ${u} is not recognized as a embed video`), (0, n.useEffect)(() => {
                    d(!1)
                }, [u]), n.createElement("div", {
                    className: p
                }, n.createElement(n.Fragment, null, n.createElement(o.x, {
                    className: v,
                    color: "white",
                    size: "large"
                }), n.createElement("iframe", { ...r && {
                        allow: "autoplay"
                    },
                    allowFullScreen: !0,
                    "aria-label": "Video frame",
                    className: f,
                    "data-chromatic": "ignore",
                    frameBorder: 0,
                    height: i,
                    key: u,
                    onLoad: () => {
                        d(!1)
                    },
                    src: t,
                    width: c
                })))
            }
        },
        19008: function(e, t, r) {
            r.d(t, {
                U: function() {
                    return u
                }
            });
            var n = r(275271),
                l = r(282187),
                a = r.n(l),
                o = r(171923),
                i = r(183433);
            let u = e => {
                let {
                    autoDismissDuration: t = 5e3,
                    className: r,
                    children: l,
                    icon: u,
                    isOpen: s,
                    overlayContent: c = !0,
                    title: m,
                    ...d
                } = e, [p, f] = (0, n.useState)(s), v = (0, n.useRef)(), b = a()(r, "hrt-auto-dismiss-alert", {
                    "hrt-auto-dismiss-alert--overlay": c
                }), h = (0, n.useCallback)(() => window.setTimeout(() => {
                    f(!1)
                }, t), [t]), E = (0, n.useCallback)(() => {
                    v.current = h()
                }, [h]), g = (0, n.useCallback)(() => {
                    window.clearTimeout(v.current)
                }, []);
                return (0, n.useEffect)(() => {
                    if (t) return E(), () => {
                        g()
                    }
                }, [t, g, E, v]), (0, n.useEffect)(() => {
                    f(s)
                }, [s]), n.createElement("div", {
                    className: "hrt-auto-dismiss-alert-wrapper",
                    onBlurCapture: () => {
                        E()
                    },
                    onFocusCapture: () => {
                        g()
                    },
                    onMouseEnter: () => {
                        g()
                    },
                    onMouseLeave: () => {
                        E()
                    }
                }, n.createElement(i.j, {
                    className: b,
                    isOpen: p,
                    ...d
                }, n.createElement(o.$, {
                    icon: u,
                    overlayContent: c,
                    title: m,
                    variant: "positive"
                }, l)))
            };
            u.displayName = "AutoDismissAlert"
        },
        177970: function(e, t, r) {
            r.d(t, {
                r: function() {
                    return o
                }
            });
            var n = r(275271),
                l = r(282187),
                a = r.n(l);
            let o = (0, n.forwardRef)((e, t) => {
                let {
                    as: r,
                    className: l,
                    children: o,
                    columns: i,
                    columnGap: u,
                    rowGap: s,
                    desktopColumnsOnly: c,
                    ...m
                } = e, d = (0, n.useRef)(null);
                (0, n.useImperativeHandle)(t, () => d.current);
                let p = a()(l, "hrt-grid-columns", {
                    "hrt-grid-columns--2": 2 === i,
                    "hrt-grid-columns--3": 3 === i,
                    "hrt-grid-columns--4": 4 === i,
                    "hrt-grid-columns--5": 5 === i,
                    "hrt-grid-columns--6": 6 === i,
                    "hrt-grid-columns--desktop-only": c,
                    "hrt-list-unstyled": "ul" === r,
                    [`hrt-grid-columns--column-gap-${u}`]: u,
                    [`hrt-grid-columns--row-gap-${s}`]: s
                });
                return n.createElement(r, {
                    className: p,
                    ref: d,
                    ...m
                }, o)
            });
            o.displayName = "Grid"
        },
        448004: function(e, t, r) {
            r.d(t, {
                m: function() {
                    return o
                }
            });
            var n = r(275271),
                l = r(282187),
                a = r.n(l);
            let o = e => {
                let {
                    className: t,
                    children: r,
                    ...l
                } = e, o = a()(t, "hrt-modal-footer");
                return n.createElement("div", {
                    className: o,
                    ...l
                }, r)
            };
            o.displayName = "ModalFooter"
        },
        198034: function(e, t, r) {
            r.d(t, {
                J: function() {
                    return m
                }
            });
            var n = r(275271),
                l = r(282187),
                a = r.n(l),
                o = r(556934),
                i = r(758655),
                u = r(287808),
                s = r(196792);
            let c = e => {
                    let {
                        arrowLocation: t,
                        children: r,
                        className: l,
                        ...o
                    } = e, i = a()(l, "hrt-bubble", `hrt-bubble--arrow-${t}`);
                    return n.createElement("div", {
                        className: i,
                        ...o
                    }, r)
                },
                m = e => {
                    let {
                        autoAdjustVertically: t = !0,
                        bubbleClassName: r,
                        bubblePosition: l,
                        button: m,
                        className: d,
                        children: p,
                        dataTrackingId: f,
                        dismissButton: v = "icon",
                        dismissButtonLabel: b,
                        onDismiss: h,
                        setShow: E,
                        title: g,
                        willClickOutsideClose: w = !0,
                        ...N
                    } = e, [y, k] = (0, n.useState)(!!E), C = (0, n.useRef)(null), $ = (0, n.useRef)(null), L = a()(d, "hrt-popover"), {
                        placementH: S,
                        placementV: R,
                        isPositioned: x
                    } = (0, s.I)({
                        autoAdjustVertically: t,
                        bubbleRef: C,
                        isOpen: y,
                        placementV: l
                    }), P = a()("hrt-popover-bubble", `hrt-popover-bubble--${R}`, `hrt-popover-bubble--${S}`, {
                        "hrt-popover-bubble--open": y && x
                    }), B = `${{top:"bottom",bottom:"top"}[R]}-${S}`, z = (0, n.useCallback)(() => {
                        k(!1), null == h || h()
                    }, [h]), A = (0, n.useCallback)(e => {
                        C.current && !C.current.contains(e.target) && w && z()
                    }, [z, w]), D = (0, n.useCallback)(e => {
                        "Escape" === e.key && z()
                    }, [z]);
                    return (0, n.useEffect)(() => (y && (document.addEventListener("mousedown", A), document.addEventListener("keydown", D)), () => {
                        document.removeEventListener("mousedown", A), document.removeEventListener("keydown", D)
                    }), [A, D, y]), n.createElement("div", {
                        className: L,
                        ...N
                    }, n.createElement("div", {
                        className: "hrt-popover-button",
                        onClick: () => {
                            y || x || k(!0)
                        },
                        ref: $
                    }, m), n.createElement("div", {
                        className: P,
                        ref: C,
                        role: "status"
                    }, (y || x) && n.createElement(c, { ...x && !y ? {
                            "aria-hidden": "true"
                        } : {},
                        arrowLocation: B,
                        className: r
                    }, n.createElement("div", {
                        className: "hrt-disp-flex"
                    }, n.createElement("div", null, g && n.createElement("div", {
                        className: "hrt-font-bold hrt-mb-1"
                    }, g), p, "text" === v && b && n.createElement(o.K, {
                        as: "button",
                        className: "hrt-popover-bubble-close--text",
                        "data-tracking-id": f,
                        onClick: z,
                        size: "small",
                        variant: "on-media"
                    }, b)), "icon" === v && n.createElement(i.j, {
                        as: "button",
                        buttonLabel: "close",
                        className: "hrt-popover-bubble-close",
                        "data-tracking-id": f,
                        onClick: z,
                        size: "medium"
                    }, n.createElement(u.J, {
                        name: "close",
                        size: "small"
                    }))))))
                };
            m.displayName = "Popover"
        },
        552471: function(e, t, r) {
            r.d(t, {
                $: function() {
                    return i
                }
            });
            var n = r(275271),
                l = r(282187),
                a = r.n(l),
                o = r(954589);
            let i = e => {
                let {
                    children: t,
                    className: r,
                    icon: l,
                    iconAlign: i = "start",
                    size: u = "large",
                    title: s,
                    variant: c,
                    ...m
                } = e, d = a()(r, "hrt-promo-banner", `hrt-promo-banner--${u}`, `hrt-promo-banner--${c}`), p = a()("hrt-disp-flex", "hrt-p-0", {
                    [`hrt-align-${i}`]: l,
                    "hrt-text-body-sm": "small" === u || "xsmall" === u,
                    "hrt-text-body-md": "large" === u
                }), f = a()("hrt-promo-banner-content");
                return n.createElement("div", {
                    className: d,
                    ...m
                }, n.createElement(o.W, {
                    className: p
                }, l && n.createElement("div", {
                    className: "hrt-promo-banner-icon"
                }, l), n.createElement("div", {
                    className: f
                }, s && n.createElement("div", {
                    className: "hrt-font-bold"
                }, s), t)))
            };
            i.displayName = "PromoBanner"
        },
        702077: function(e, t, r) {
            r.d(t, {
                t: function() {
                    return o
                }
            });
            var n = r(275271),
                l = r(282187),
                a = r.n(l);
            let o = e => {
                let {
                    className: t,
                    children: r,
                    activeIndex: l,
                    tabStyle: o = "underline",
                    onTabChange: i,
                    ...u
                } = e, s = (0, n.useId)(), c = a()("hrt-tab-list hrt-list-unstyled", t), m = (0, n.useRef)(null), [d, p] = (0, n.useState)(null != l ? l : 0), f = (0, n.useCallback)(e => {
                    let t = document.getElementById(`${s}-tab-${e}`);
                    null == t || t.focus()
                }, [s]);
                (0, n.useEffect)(() => {
                    p(null != l ? l : 0)
                }, [l]);
                let v = (e, t, r) => {
                        e.preventDefault(), null == r || r(e), p(t), null == i || i(t)
                    },
                    b = (0, n.useCallback)(() => {
                        let e = d + 1;
                        d < r.length - 1 && (p(e), f(e))
                    }, [d, r.length, f]),
                    h = (0, n.useCallback)(() => {
                        let e = d - 1;
                        d > 0 && (p(e), f(e))
                    }, [d, f]);
                return (0, n.useEffect)(() => {
                    if (!m.current) return;
                    let e = m.current,
                        t = e => {
                            let {
                                key: t
                            } = e;
                            "ArrowRight" === t && b(), "ArrowLeft" === t && h()
                        };
                    return e.addEventListener("keydown", t), () => {
                        e.removeEventListener("keydown", t)
                    }
                }, [h, b]), n.createElement("ul", {
                    className: c,
                    ref: m,
                    role: "tablist",
                    ...u,
                    "data-testid": "hrt-tab-list"
                }, r.map((e, t) => {
                    let r = e.props.tabStyle,
                        l = d === t,
                        a = l && {
                            "aria-selected": !0
                        };
                    return n.createElement("li", {
                        key: t,
                        role: "presentation"
                    }, n.cloneElement(e, {
                        onClick: r => v(r, t, e.props.onClick),
                        tabStyle: null != r ? r : o,
                        id: `${s}-tab-${t}`,
                        isActive: l,
                        role: "tab",
                        ...a
                    }))
                }))
            };
            o.displayName = "TabList"
        },
        196792: function(e, t, r) {
            r.d(t, {
                I: function() {
                    return o
                }
            });
            var n = r(275271);
            let l = e => {
                    let t = function(e, t, r) {
                        for (; null !== e;) {
                            if (window.getComputedStyle(e).getPropertyValue(t) === r) return e;
                            e = e.parentElement
                        }
                        return null
                    }(e, "overflow", "hidden");
                    if (e && t) {
                        let e = t.getBoundingClientRect();
                        return {
                            top: e.top,
                            right: e.right,
                            bottom: e.bottom,
                            left: e.left
                        }
                    }
                    return {
                        top: 0,
                        right: window.innerWidth,
                        bottom: window.innerHeight,
                        left: 0
                    }
                },
                a = (e, t) => {
                    var r, n;
                    if (!e.current) return;
                    let a = null === (n = null === (r = e.current) || void 0 === r ? void 0 : r.firstElementChild) || void 0 === n ? void 0 : n.getBoundingClientRect(),
                        {
                            top: o,
                            right: i,
                            bottom: u,
                            left: s
                        } = l(e.current);
                    if (!a) return;
                    let c = a.top < o,
                        m = a.right > i,
                        d = a.bottom > u;
                    return {
                        hPlacement: a.left < s ? "left" : m ? "right" : "center",
                        vPlacement: c ? "bottom" : d ? "top" : t
                    }
                },
                o = e => {
                    let {
                        autoAdjustVertically: t = !0,
                        bubbleRef: r,
                        isOpen: l,
                        placementH: o = "center",
                        placementV: i = "top"
                    } = e, [u, s] = (0, n.useState)(!1), [c, m] = (0, n.useState)(o), [d, p] = (0, n.useState)(i), f = (0, n.useCallback)(() => {
                        !l && u && (m(o), p(i), s(!1))
                    }, [l, u, o, i]);
                    return (0, n.useEffect)(() => {
                        var e, n, c, d;
                        let v;
                        if (l && !u && r.current) {
                            let l = null !== (n = null === (e = a(r, i)) || void 0 === e ? void 0 : e.hPlacement) && void 0 !== n ? n : o,
                                u = t && null !== (d = null === (c = a(r, i)) || void 0 === c ? void 0 : c.vPlacement) && void 0 !== d ? d : i;
                            m(l), p(u), s(!0)
                        }
                        return !l && u && (v = setTimeout(f, 150)), () => {
                            clearTimeout(v)
                        }
                    }, [l, f, u, r, i, o, t]), {
                        placementH: c,
                        placementV: d,
                        isPositioned: u,
                        handleTransitionEnd: f
                    }
                }
        },
        90198: function(e, t, r) {
            r.d(t, {
                Z: function() {
                    return o
                }
            });
            var n = r(942077),
                l = r(749424),
                a = r(850751);

            function o(e, t) {
                (0, a.Z)(2, arguments);
                var r = (0, l.Z)(e),
                    o = (0, n.Z)(t);
                return isNaN(o) ? new Date(NaN) : (o && r.setDate(r.getDate() + o), r)
            }
        }
    }
]);
//# sourceMappingURL=58108-d153b2ae4a3cd5ed.js.map