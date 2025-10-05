(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [20207], {
        612069: function(t, e, n) {
            "use strict";
            n.d(e, {
                b: function() {
                    return u
                }
            });
            var r = n(275271),
                a = n(282187),
                i = n.n(a);

            function u(t) {
                let {
                    children: e,
                    className: n,
                    ...a
                } = t, u = i()(n, "hrt-avatar-lockup");
                return r.createElement("div", {
                    className: u,
                    ...a
                }, e)
            }
        },
        170110: function(t, e, n) {
            "use strict";
            n.d(e, {
                y: function() {
                    return u
                }
            });
            var r = n(275271),
                a = n(282187),
                i = n.n(a);

            function u(t) {
                let {
                    children: e,
                    className: n
                } = t, a = i()(n, "hrt-avatar-lockup-content");
                return r.createElement("div", {
                    className: a,
                    "data-testid": "hrt-avatar-lockup-content"
                }, e)
            }
        },
        253765: function(t, e, n) {
            "use strict";
            n.d(e, {
                s: function() {
                    return u
                }
            });
            var r = n(275271),
                a = n(282187),
                i = n.n(a);

            function u(t) {
                let {
                    className: e,
                    children: n
                } = t, a = i()(e, "hrt-avatar-lockup-image");
                return r.createElement("div", {
                    className: a,
                    "data-testid": "hrt-avatar-lockup-image"
                }, n)
            }
        },
        727002: function(t, e, n) {
            "use strict";
            n.d(e, {
                J: function() {
                    return u
                }
            });
            var r = n(275271),
                a = n(282187),
                i = n.n(a);
            let u = t => {
                let {
                    maxAvatars: e = 3,
                    variant: n = "horizontal",
                    size: a = "large",
                    surface: u,
                    className: o,
                    ...l
                } = t, {
                    avatarStackClasses: c,
                    displayedAvatars: s
                } = function(t) {
                    let {
                        className: e,
                        children: n,
                        variant: a,
                        size: u
                    } = t, o = "maxAvatars" in t ? t.maxAvatars : void 0, l = r.Children.toArray(n), c = "horizontal" === a ? null != o ? o : 3 : "decorative" === a || "cluster" === a ? 3 : null != o ? o : 3, s = "horizontal" === a || "decorative" === a ? [...l].reverse().slice(0, c) : l.slice(-c), f = s.length;
                    return {
                        avatarStackClasses: i()("hrt-list-unstyled", "hrt-avatar-stack", `hrt-avatar-stack--${a}`, "decorative" === a && f >= 3 && "hrt-avatar-stack--decorative-special", "horizontal" !== a && "decorative" !== a && `hrt-avatar-stack--${u}`, "horizontal" !== a && "decorative" !== a && `hrt-avatar-stack--count-${f}`, e),
                        displayedAvatars: s,
                        avatarCount: f
                    }
                }({
                    maxAvatars: e,
                    variant: n,
                    size: a,
                    surface: u,
                    className: o,
                    ...l
                });
                return r.createElement("ul", {
                    className: c,
                    ...l
                }, s.map((t, e) => {
                    let n = r.cloneElement(t, {
                        size: a,
                        surface: u
                    });
                    return r.createElement("li", {
                        className: `hrt-avatar-stack-item hrt-avatar-stack-item--${e}`,
                        key: e
                    }, n)
                }))
            };
            u.displayName = "AvatarStack"
        },
        783068: function(t, e, n) {
            "use strict";
            n.d(e, {
                z: function() {
                    return l
                }
            });
            var r = n(275271),
                a = n(282187),
                i = n.n(a),
                u = n(495192),
                o = n(154218);
            let l = (0, r.forwardRef)((t, e) => {
                let {
                    className: n,
                    label: a,
                    isLabelScreenReaderOnly: l,
                    progress: c,
                    variant: s = "default",
                    ...f
                } = t, d = (0, r.useId)(), m = (0, r.useRef)(null);
                (0, r.useImperativeHandle)(e, () => m.current);
                let [h, v] = (0, r.useState)(0);
                (0, r.useEffect)(() => {
                    if (!(0, u.n)(".hrt-goal-bar")) {
                        v(c);
                        return
                    }(async () => {
                        await (0, o.n)([".hrt-goal-bar"]), v(c)
                    })()
                }, [c]);
                let g = i()(n, "hrt-goal-bar", `hrt-goal-bar--${s||"default"}`, h >= 97 && "hrt-goal-bar--never-full", h <= 3 && "hrt-goal-bar--never-empty"),
                    Z = i()("hrt-goal-bar-label", `hrt-goal-bar-label--${s||"default"}`, l && "hrt-sr-only");
                return r.createElement(r.Fragment, null, r.createElement("progress", {
                    className: g,
                    id: d,
                    max: "100",
                    ref: m,
                    value: h,
                    ...f
                }), a && r.createElement("label", {
                    className: Z,
                    htmlFor: d
                }, a))
            });
            l.displayName = "GoalBar"
        },
        984905: function(t, e, n) {
            "use strict";
            n.d(e, {
                $: function() {
                    return u
                }
            });
            var r = n(275271),
                a = n(282187),
                i = n.n(a);
            let u = (0, r.forwardRef)((t, e) => {
                let {
                    bg: n = "default",
                    className: a,
                    children: u,
                    topEdge: o,
                    bottomEdge: l,
                    ...c
                } = t, s = (0, r.useRef)(null);
                (0, r.useImperativeHandle)(e, () => s.current);
                let f = i()(a, "hrt-section", {
                    [`hrt-surface-${n}`]: n,
                    [`hrt-section-top-edge--${o}`]: o,
                    [`hrt-section-bottom-edge--${l}`]: l
                });
                return r.createElement("section", {
                    className: f,
                    ref: s,
                    ...c
                }, u)
            });
            u.displayName = "Section"
        },
        146468: function(t, e, n) {
            "use strict";
            n.d(e, {
                i: function() {
                    return o
                }
            });
            var r = n(275271),
                a = n(991862),
                i = n.n(a),
                u = n(736348);
            let o = t => {
                let {
                    className: e,
                    name: n,
                    size: a,
                    ...o
                } = t;
                return r.createElement(u.s, {
                    className: e,
                    href: `${i()}#${n}`,
                    size: a,
                    ...o
                })
            };
            o.displayName = "FeatureIcon"
        },
        875020: function(t, e, n) {
            "use strict";
            n.d(e, {
                R: function() {
                    return u
                }
            });
            var r = n(275271),
                a = n(282187),
                i = n.n(a);
            let u = (0, r.forwardRef)((t, e) => {
                let {
                    className: n,
                    items: a,
                    ...u
                } = t, o = i()(n, "hrt-list-unstyled", "hrt-meta-list");
                return r.createElement("ul", {
                    className: o
                }, a.map((t, e) => r.createElement("li", {
                    className: "hrt-meta-list-item",
                    key: e
                }, t)))
            });
            u.displayName = "MetaList"
        },
        274175: function(t, e, n) {
            "use strict";
            n.d(e, {
                _: function() {
                    return o
                }
            });
            var r = n(275271),
                a = n(495192),
                i = n(154218);

            function u(t, e) {
                return function() {
                    let n = Array.from(document.querySelectorAll(e));
                    return new Promise(0 === n.length ? (t, n) => {
                        n(`attachAnimation could not find element(s) matching "${e}"`)
                    } : "#" === e[0] && n.length > 1 ? (t, n) => {
                        n(`attachAnimation found multiple elements matching id "${e}"`)
                    } : (r, u) => {
                        let o = async () => {
                            n.forEach(e => e.classList.add(t)), await (0, i.n)([e]), n.forEach(e => e.classList.remove(t)), r(n)
                        };
                        (0, a.n)(e, t) ? u(`cannot animate ${e}. it is already animating with ${t}`): o()
                    })
                }
            }
            let o = function(t) {
                var e;
                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "bottom",
                    i = arguments.length > 2 ? arguments[2] : void 0,
                    o = ["up", "left", "right"][
                        ["bottom", "right", "left"].findIndex(t => t === n)
                    ],
                    l = i ? `.hrt-overlay-stack-${i}` : ".hrt-overlay",
                    c = i ? `.hrt-dialog-stack-${i}` : ".hrt-base-dialog",
                    s = {
                        up: "hrt-modal-close-down",
                        left: "hrt-modal-close-right",
                        right: "hrt-modal-close-left"
                    }[o],
                    f = (e = [u("hrt-overlay-fade-out", l), u(s, c)], function() {
                        return Promise.all(e.map(t => t()))
                    });
                return (0, r.useCallback)(async () => {
                    (0, a.n)(l, "hrt-overlay-fade-in") || (0, a.n)(l, "hrt-overlay-fade-out") || (0, a.n)(c, `hrt-modal-open-${o}`) || (0, a.n)(c, s) || (await f(), t())
                }, [l, c, o, s, f, t])
            }
        },
        495192: function(t, e, n) {
            "use strict";

            function r(t, e) {
                let n = Array.from(document.querySelectorAll(t));
                return 0 === n.length ? (console.error(`isAnimating could not find element(s) matching "${t}"`), !1) : "#" === t[0] && n.length > 1 ? (console.error(`isAnimating found multiple elements matching id "${t}"`), !1) : n.every(t => t.getAnimations().some(t => e ? t instanceof CSSAnimation && t.animationName.includes(e) : t instanceof CSSAnimation))
            }
            n.d(e, {
                n: function() {
                    return r
                }
            })
        },
        154218: function(t, e, n) {
            "use strict";

            function r(t) {
                return function(t, e) {
                    if (0 === e.length) throw Error("querySelectors is empty []. what are you waiting for?");
                    let n = {
                        animationend: "waitForAnimations",
                        transitionend: "waitForTransitions"
                    }[t];
                    return Promise.all(e.map(function(e) {
                        let r = Array.from(document.querySelectorAll(e));
                        return 0 === r.length ? new Promise((t, r) => {
                            r(`${n} could not find element(s) matching "${e}"`)
                        }) : "#" === e[0] && r.length > 1 ? new Promise((t, r) => {
                            r(`${n} found multiple elements matching id "${e}"`)
                        }) : Promise.all(r.map(e => new Promise(n => {
                            let r = () => {
                                e.removeEventListener(t, r), n(e)
                            };
                            e.addEventListener(t, r)
                        })))
                    }))
                }("animationend", t)
            }
            n.d(e, {
                n: function() {
                    return r
                }
            })
        },
        92964: function(t, e, n) {
            "use strict";
            n.d(e, {
                U: function() {
                    return o
                }
            });
            var r = n(275271),
                a = n(282187),
                i = n.n(a),
                u = n(146468);
            let o = (0, r.forwardRef)((t, e) => {
                let {
                    className: n,
                    description: a,
                    headingLevel: o,
                    icon: l,
                    title: c,
                    ...s
                } = t, f = (0, r.useRef)(null);
                (0, r.useImperativeHandle)(e, () => f.current);
                let d = i()(n, "hrt-value-prop hrt-disp-flex");
                return r.createElement("div", {
                    className: d,
                    ref: f,
                    ...s
                }, r.createElement(u.i, {
                    className: "hrt-mr-2",
                    name: l,
                    size: "large"
                }), r.createElement("div", null, r.createElement(o || "h3", {
                    className: "hrt-value-prop-title hrt-text-body-md hrt-font-bold hrt-mb-0"
                }, c), r.createElement("p", {
                    className: "hrt-value-prop-description"
                }, a)))
            });
            o.displayName = "ValueProp"
        },
        715105: function(t, e, n) {
            "use strict";
            n.d(e, {
                u: function() {
                    return a
                }
            });
            var r = {
                ceil: Math.ceil,
                round: Math.round,
                floor: Math.floor,
                trunc: function(t) {
                    return t < 0 ? Math.ceil(t) : Math.floor(t)
                }
            };

            function a(t) {
                return t ? r[t] : r.trunc
            }
        },
        59914: function(t, e, n) {
            "use strict";
            n.d(e, {
                Z: function() {
                    return i
                }
            });
            var r = n(749424),
                a = n(850751);

            function i(t, e) {
                (0, a.Z)(2, arguments);
                var n = (0, r.Z)(t),
                    i = (0, r.Z)(e),
                    u = n.getTime() - i.getTime();
                return u > 0 ? -1 : u < 0 ? 1 : u
            }
        },
        237447: function(t, e, n) {
            "use strict";
            n.d(e, {
                Z: function() {
                    return u
                }
            });
            var r = n(261783),
                a = n(611379),
                i = n(850751);

            function u(t, e) {
                (0, i.Z)(2, arguments);
                var n = (0, a.Z)(t),
                    u = (0, a.Z)(e);
                return Math.round((n.getTime() - (0, r.Z)(n) - (u.getTime() - (0, r.Z)(u))) / 864e5)
            }
        },
        776058: function(t, e, n) {
            "use strict";
            n.d(e, {
                Z: function() {
                    return o
                }
            });
            var r = n(749424),
                a = n(237447),
                i = n(850751);

            function u(t, e) {
                var n = t.getFullYear() - e.getFullYear() || t.getMonth() - e.getMonth() || t.getDate() - e.getDate() || t.getHours() - e.getHours() || t.getMinutes() - e.getMinutes() || t.getSeconds() - e.getSeconds() || t.getMilliseconds() - e.getMilliseconds();
                return n < 0 ? -1 : n > 0 ? 1 : n
            }

            function o(t, e) {
                (0, i.Z)(2, arguments);
                var n = (0, r.Z)(t),
                    o = (0, r.Z)(e),
                    l = u(n, o),
                    c = Math.abs((0, a.Z)(n, o));
                n.setDate(n.getDate() - l * c);
                var s = Number(u(n, o) === -l),
                    f = l * (c - s);
                return 0 === f ? 0 : f
            }
        },
        136883: function(t, e, n) {
            "use strict";
            n.d(e, {
                Z: function() {
                    return o
                }
            });
            var r = n(693623),
                a = n(882731),
                i = n(850751),
                u = n(715105);

            function o(t, e, n) {
                (0, i.Z)(2, arguments);
                var o = (0, a.Z)(t, e) / r.vh;
                return (0, u.u)(null == n ? void 0 : n.roundingMethod)(o)
            }
        },
        882731: function(t, e, n) {
            "use strict";
            n.d(e, {
                Z: function() {
                    return i
                }
            });
            var r = n(749424),
                a = n(850751);

            function i(t, e) {
                return (0, a.Z)(2, arguments), (0, r.Z)(t).getTime() - (0, r.Z)(e).getTime()
            }
        },
        697568: function(t, e, n) {
            "use strict";
            n.d(e, {
                Z: function() {
                    return o
                }
            });
            var r = n(693623),
                a = n(882731),
                i = n(850751),
                u = n(715105);

            function o(t, e, n) {
                (0, i.Z)(2, arguments);
                var o = (0, a.Z)(t, e) / r.yJ;
                return (0, u.u)(null == n ? void 0 : n.roundingMethod)(o)
            }
        },
        10479: function(t, e, n) {
            "use strict";
            n.d(e, {
                Z: function() {
                    return i
                }
            });
            var r = n(611379),
                a = n(850751);

            function i(t, e) {
                (0, a.Z)(2, arguments);
                var n = (0, r.Z)(t),
                    i = (0, r.Z)(e);
                return n.getTime() === i.getTime()
            }
        },
        254206: function(t, e, n) {
            "use strict";
            n.d(e, {
                Z: function() {
                    return i
                }
            });
            var r = n(10479),
                a = n(850751);

            function i(t) {
                return (0, a.Z)(1, arguments), (0, r.Z)(t, Date.now())
            }
        },
        723490: function(t, e, n) {
            "use strict";
            n.d(e, {
                Z: function() {
                    return u
                }
            });
            var r = n(10479),
                a = n(71976),
                i = n(850751);

            function u(t) {
                return (0, i.Z)(1, arguments), (0, r.Z)(t, (0, a.Z)(Date.now(), 1))
            }
        },
        357759: function(t, e, n) {
            "use strict";
            n.d(e, {
                Z: function() {
                    return i
                }
            });
            var r = n(749424),
                a = n(850751);

            function i(t) {
                if ((0, a.Z)(1, arguments), "string" == typeof t) {
                    var e = t.match(/(\d{4})-(\d{2})-(\d{2})[T ](\d{2}):(\d{2}):(\d{2})(?:\.(\d{0,7}))?(?:Z|(.)(\d{2}):?(\d{2})?)?/);
                    return new Date(e ? Date.UTC(+e[1], +e[2] - 1, +e[3], +e[4] - (+e[9] || 0) * ("-" == e[8] ? -1 : 1), +e[5] - (+e[10] || 0) * ("-" == e[8] ? -1 : 1), +e[6], +((e[7] || "0") + "00").substring(0, 3)) : NaN)
                }
                return (0, r.Z)(t)
            }
        },
        611379: function(t, e, n) {
            "use strict";
            n.d(e, {
                Z: function() {
                    return i
                }
            });
            var r = n(749424),
                a = n(850751);

            function i(t) {
                (0, a.Z)(1, arguments);
                var e = (0, r.Z)(t);
                return e.setHours(0, 0, 0, 0), e
            }
        },
        71976: function(t, e, n) {
            "use strict";
            n.d(e, {
                Z: function() {
                    return u
                }
            });
            var r = n(90198),
                a = n(850751),
                i = n(942077);

            function u(t, e) {
                (0, a.Z)(2, arguments);
                var n = (0, i.Z)(e);
                return (0, r.Z)(t, -n)
            }
        },
        991862: function(t) {
            t.exports = "/_next/static/images/feature-fec07435a4e5c70d4d0bd2bfed6e6d3df980292ea41cb20f6849533d38549fe1.svg"
        }
    }
]);
//# sourceMappingURL=20207-bb76ac2886e39912.js.map