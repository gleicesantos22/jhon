(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [229], {
        33522: function(e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/home", function() {
                return n(262633)
            }])
        },
        194119: function(e, t, n) {
            "use strict";
            n.d(t, {
                b: function() {
                    return o
                }
            });
            var r = n(275271),
                a = n(282187),
                s = n.n(a);

            function o(e) {
                let {
                    background: t,
                    children: n,
                    className: a,
                    dataViewId: o,
                    isAnimating: i,
                    isOpen: c,
                    sandOverlay: l
                } = e, d = s()(a, "a-overlay", {
                    "a-overlay--animating": i,
                    "a-overlay--open": c,
                    "a-overlay--bg-sand": l || "sand" === t,
                    "a-overlay--bg-gray": "gray" === t
                });
                return r.createElement("div", {
                    className: d,
                    "data-view-id": o
                }, n)
            }
            o.displayName = "Overlay"
        },
        312802: function(e, t, n) {
            "use strict";
            n.d(t, {
                A: function() {
                    return i
                }
            });
            var r = n(275271),
                a = n(282187),
                s = n.n(a),
                o = n(825040);
            let i = (0, r.forwardRef)((e, t) => {
                let {
                    className: n,
                    children: a,
                    color: i = "gray-dark",
                    disabled: c,
                    pending: l,
                    pendingAltText: d,
                    variant: u = "underlined",
                    ...h
                } = e, m = (0, r.useRef)(null);
                (0, r.useImperativeHandle)(t, () => m.current);
                let _ = s()(n, "hrt-text-button", `hrt-text-button--${i}`, `hrt-text-button--${u}`, {
                    "hrt-text-button--pending": l
                });
                return r.createElement("button", {
                    className: _,
                    disabled: c || l,
                    ref: m,
                    ...h
                }, "string" == typeof a ? r.createElement("span", null, a) : a, l && r.createElement(o.x, {
                    altText: d,
                    className: "hrt-position-absolute",
                    color: "gray"
                }))
            });
            i.displayName = "TextButton"
        },
        168436: function(e, t, n) {
            "use strict";
            n.d(t, {
                j: function() {
                    return o
                }
            });
            var r = n(275271),
                a = n(282187),
                s = n.n(a);
            let o = e => {
                let {
                    children: t,
                    className: n,
                    src: a
                } = e, o = s()(n, "hrt-media-card-image");
                return r.createElement("div", {
                    className: o,
                    style: {
                        backgroundImage: "url(" + a + ")"
                    }
                }, t)
            };
            o.displayName = "MediaCardImage"
        },
        380480: function(e, t, n) {
            "use strict";
            n.d(t, {
                $: function() {
                    return o
                }
            });
            var r = n(275271),
                a = n(282187),
                s = n.n(a);
            let o = e => {
                let {
                    className: t,
                    gutterPull: n,
                    type: a
                } = e, o = s()(t, "hrt-rule", `hrt-rule--${a}`, {
                    "hrt-rule--pull": n && "horizontal" === a
                });
                return r.createElement("div", {
                    className: o
                })
            };
            o.displayName = "Rule"
        },
        800908: function(e, t, n) {
            "use strict";
            n.d(t, {
                c: function() {
                    return i
                }
            });
            var r = n(275271),
                a = n(282187),
                s = n.n(a),
                o = n(524430);
            let i = (0, r.forwardRef)((e, t) => {
                let {
                    buttonLabel: n,
                    className: a,
                    children: i,
                    circle: c,
                    disabled: l,
                    size: d,
                    variant: u,
                    ...h
                } = e, m = (0, r.useRef)(null);
                (0, r.useImperativeHandle)(t, () => m.current);
                let _ = s()(a, "hrt-secondary-icon-button", `hrt-secondary-icon-button--${d}`, c && "hrt-secondary-icon-button--circle", `hrt-secondary-icon-button--${u||"default"}`, l && "hrt-base-button--disabled");
                return r.createElement(o.Y, {
                    "aria-label": n,
                    className: _,
                    disabled: "button" === h.as && l,
                    ref: m,
                    ..."button" !== h.as && l ? {
                        "aria-disabled": l
                    } : null,
                    ...h,
                    ..."a" === h.as && l ? {
                        href: ""
                    } : null
                }, i)
            });
            i.displayName = "SecondaryIconButton"
        },
        135397: function(e, t, n) {
            "use strict";
            n.d(t, {
                JO: function() {
                    return a.J
                },
                W2: function() {
                    return r.W
                },
                xv: function() {
                    return s.x
                }
            });
            var r = n(954589),
                a = n(287808),
                s = n(646124)
        },
        555279: function(e, t, n) {
            "use strict";
            n.d(t, {
                W: function() {
                    return r.W
                },
                x: function() {
                    return a.x
                }
            });
            var r = n(954589),
                a = n(646124)
        },
        455518: function(e, t, n) {
            "use strict";
            n.d(t, {
                J: function() {
                    return r.J
                },
                r: function() {
                    return a.r
                }
            });
            var r = n(287808),
                a = n(527795)
        },
        344286: function(e, t, n) {
            "use strict";
            n.d(t, {
                J: function() {
                    return r.J
                },
                k: function() {
                    return a.k
                }
            });
            var r = n(287808),
                a = n(708349)
        },
        835481: function(e, t, n) {
            "use strict";
            n.d(t, {
                K: function() {
                    return r.K
                }
            });
            var r = n(556934)
        },
        299794: function(e, t, n) {
            "use strict";
            n.d(t, {
                k: function() {
                    return r.k
                }
            });
            var r = n(708349)
        },
        811940: function(e, t, n) {
            "use strict";
            n.d(t, {
                V: function() {
                    return r.V
                }
            });
            var r = n(164703)
        },
        674942: function(e, t, n) {
            "use strict";
            n.d(t, {
                x: function() {
                    return r.x
                }
            });
            var r = n(646124)
        },
        262633: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                __N_SSP: function() {
                    return ts
                },
                default: function() {
                    return ta
                }
            });
            var r = n(552676),
                a = n(275271),
                s = n(282187),
                o = n.n(s),
                i = n(650863),
                c = n(555279),
                l = n(835481),
                d = n(618158);

            function u(e) {
                let {
                    as: t = "PrimaryButton",
                    children: n,
                    className: a,
                    disabled: s,
                    isOrganizerWithDraftFundraisers: o = !1
                } = e, i = l.K, c = (0, d.Om)();
                return (0, r.jsx)(i, {
                    as: "a",
                    className: a,
                    "data-button-type": "not sticky",
                    "data-element-id": "btn_hero_primary",
                    "data-testid": "hero-cta-btn",
                    "data-tracking-id": o ? "view drafts page" : "start fundraiser from hero",
                    disabled: s,
                    href: o ? "/create/fundraiser/drafts" : "/create/fundraiser",
                    id: "home-start-cta",
                    onClick: o ? void 0 : e => c(e.currentTarget.textContent, "home page hero", e.currentTarget.href),
                    variant: "default",
                    children: n
                })
            }
            var h = n(893269),
                m = n(45798),
                _ = n(637469),
                p = n(795523),
                g = n(363456),
                v = n(24352),
                f = n(35166),
                x = n(818861),
                b = n.n(x);
            let w = () => (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsxs)("div", {
                    className: b().blurredImagesOuter,
                    children: [(0, r.jsx)("img", {
                        alt: "",
                        className: o()(b().blurredImage1, b().blurredImageMedium),
                        src: "/nextassets/home/hero-animals-1.png"
                    }), (0, r.jsx)("img", {
                        alt: "",
                        className: o()(b().blurredImage2, b().blurredImageMedium),
                        src: "/nextassets/home/hero-business-1.png"
                    }), (0, r.jsx)("img", {
                        alt: "",
                        className: o()(b().blurredImage3, b().blurredImageMedium),
                        src: "/nextassets/home/hero-business-3.png"
                    }), (0, r.jsx)("img", {
                        alt: "",
                        className: o()(b().blurredImage4, b().blurredImageMedium),
                        src: "/nextassets/home/hero-business-4.png"
                    })]
                }), (0, r.jsxs)("div", {
                    className: b().blurredImagesInner,
                    children: [(0, r.jsx)("img", {
                        alt: "",
                        className: o()(b().blurredImage5, b().blurredImageSmall),
                        src: "/nextassets/home/hero-education-2.png"
                    }), (0, r.jsx)("img", {
                        alt: "",
                        className: o()(b().blurredImage6, b().blurredImageSmall),
                        src: "/nextassets/home/hero-education-1.png"
                    }), (0, r.jsx)("img", {
                        alt: "",
                        className: o()(b().blurredImage7, b().blurredImageSmall),
                        src: "/nextassets/home/hero-animals-2.png"
                    })]
                })]
            });
            var y = n(919548),
                $ = n(545944),
                N = n(926566),
                j = n(811940),
                S = n(110017),
                E = n.n(S);
            let k = () => (0, r.jsxs)("svg", {
                className: E().goalRing,
                fill: "none",
                viewBox: "0 0 124 124",
                xmlns: "http://www.w3.org/2000/svg",
                children: [(0, r.jsx)("path", {
                    className: E().lightGradient,
                    d: "M62 3C69.748 3 77.4201 4.52608 84.5783 7.4911C91.7365 10.4561 98.2406 14.802 103.719 20.2807C109.198 25.7594 113.544 32.2635 116.509 39.4217C119.474 46.5799 121 54.252 121 62C121 69.748 119.474 77.4201 116.509 84.5783C113.544 91.7365 109.198 98.2406 103.719 103.719C98.2406 109.198 91.7365 113.544 84.5783 116.509C77.4201 119.474 69.748 121 62 121",
                    stroke: "url(#paint0_linear_832_20089)",
                    strokeLinecap: "round",
                    strokeWidth: "6"
                }), (0, r.jsx)("path", {
                    className: E().darkGradient,
                    d: "M62 3C54.252 3 46.5799 4.52608 39.4217 7.49111C32.2635 10.4561 25.7593 14.802 20.2807 20.2807C14.802 25.7594 10.4561 32.2635 7.4911 39.4217C4.52607 46.5799 3 54.252 3 62C3 69.748 4.52608 77.4201 7.49111 84.5783C10.4561 91.7365 14.8021 98.2407 20.2807 103.719C25.7594 109.198 32.2635 113.544 39.4217 116.509C46.5799 119.474 54.252 121 62 121",
                    stroke: "url(#paint1_linear_832_20089)",
                    strokeLinecap: "round",
                    strokeWidth: "6"
                }), (0, r.jsxs)("defs", {
                    children: [(0, r.jsxs)("linearGradient", {
                        gradientUnits: "userSpaceOnUse",
                        id: "paint0_linear_832_20089",
                        x1: "62",
                        x2: "62",
                        y1: "3",
                        y2: "121",
                        children: [(0, r.jsx)("stop", {
                            stopColor: "#E9FCCE"
                        }), (0, r.jsx)("stop", {
                            offset: "1",
                            stopColor: "#7cc95a"
                        })]
                    }), (0, r.jsxs)("linearGradient", {
                        gradientUnits: "userSpaceOnUse",
                        id: "paint1_linear_832_20089",
                        x1: "62",
                        x2: "62",
                        y1: "3",
                        y2: "121",
                        children: [(0, r.jsx)("stop", {
                            stopColor: "#4A9D44"
                        }), (0, r.jsx)("stop", {
                            offset: "1",
                            stopColor: "#7cc95a"
                        })]
                    })]
                })]
            });
            var I = n(750628),
                C = n.n(I);
            let L = e => {
                let {
                    className: t,
                    current: n,
                    dataElementId: s,
                    imgAlt: c,
                    imgSrc: l,
                    index: d,
                    slide: u,
                    link: h,
                    title: m,
                    ..._
                } = e, [g, v] = (0, a.useState)(!1), f = (0, p.a)(p.z.MEDIUM_DOWN);
                return (0, r.jsx)(i.df, {
                    as: "div",
                    className: o()(C().categoryBubbleWrapper, C()[`categoryBubble${u}`], t),
                    threshold: .5,
                    ..._,
                    onChange: e => {
                        v(e)
                    },
                    children: (0, r.jsxs)("a", {
                        "aria-hidden": !g,
                        "aria-label": u ? `${m} - category ${u} of 6` : void 0,
                        className: C().categoryBubble,
                        "data-element-id": s,
                        href: h,
                        id: `link-${d}`,
                        tabIndex: f ? n === d ? 0 : -1 : g ? 0 : -1,
                        children: [(0, r.jsx)("div", {
                            className: C().imageWrapper,
                            children: (0, r.jsx)("img", {
                                alt: c || "",
                                src: l
                            })
                        }), (0, r.jsx)(k, {}), (0, r.jsx)(j.V, {
                            className: C().categoryBubbleTag,
                            color: "neutral",
                            children: m
                        })]
                    })
                })
            };
            var M = n(358167),
                H = n.n(M);
            let T = e => {
                    let {
                        countryCode: t,
                        language: n
                    } = e, r = "/c/start";
                    t === h.Ec.NETHERLANDS ? r = "/c/?start=business-fundraising" : t === h.Ec.UNITED_STATES && (r = n === h.y4.SPANISH ? "/c/?start=negocios" : "/c/start/business-fundraising");
                    let a = [{
                        title: (0, g.t)("Your cause", {
                            ns: "home"
                        }),
                        image: "/nextassets/home/hero-your-cause-1.png",
                        imageAlt: (0, g.t)("A man and a woman share a hug with a young boy", {
                            ns: "home"
                        }),
                        link: "/c/start",
                        slide: 1,
                        animationOrder: 3
                    }, {
                        title: (0, g.t)("Medical"),
                        image: "/nextassets/home/hero-medical-1.png",
                        imageAlt: (0, g.t)("A zoomed in hospital setting showing a patient’s hand being held by a loved one", {
                            ns: "home"
                        }),
                        link: "/c/start/medical-fundraising",
                        slide: 2,
                        animationOrder: 5
                    }, {
                        title: (0, g.t)("Emergency"),
                        image: "/nextassets/home/hero-emergency-1.png",
                        imageAlt: (0, g.t)("A woman stands at a work bench assembling a box of water bottles and other emergency supplies", {
                            ns: "home"
                        }),
                        link: "/c/start/emergency-fundraising",
                        slide: 3,
                        animationOrder: 1
                    }, {
                        title: (0, g.t)("Business"),
                        image: "/nextassets/home/hero-business-2.png",
                        imageAlt: (0, g.t)("A man in a restaurant smiles over a plate of food", {
                            ns: "home"
                        }),
                        link: r,
                        slide: 4,
                        animationOrder: 4
                    }, {
                        title: (0, g.t)("Animal", {
                            ns: "home"
                        }),
                        image: "/nextassets/home/hero-animals-2.png",
                        imageAlt: (0, g.t)("A woman in a straw hat holds a baby goat", {
                            ns: "home"
                        }),
                        link: "/c/start/animal-fundraising",
                        slide: 5,
                        animationOrder: 2
                    }, {
                        title: (0, g.t)("Education"),
                        image: "/nextassets/home/hero-education-3.png",
                        imageAlt: (0, g.t)("Seven women from a robotics team gathering around their robot", {
                            ns: "home"
                        }),
                        link: "/c/start/education-fundraising",
                        slide: 6,
                        animationOrder: 0
                    }];
                    return [...a, ...a]
                },
                A = () => {
                    let e = (0, a.useRef)(null),
                        {
                            locale: t,
                            countryCode: n,
                            language: s
                        } = (0, m.bN)(),
                        i = (0, $.E)(t).localeSegment,
                        c = T({
                            countryCode: n,
                            language: s
                        }),
                        l = c.length,
                        [d, u] = (0, a.useState)(0),
                        [h, _] = (0, a.useState)(164),
                        [v, f] = (0, a.useState)(140),
                        [x, b] = (0, a.useState)(0),
                        w = (0, p.a)(p.z.MEDIUM_DOWN);
                    (0, a.useEffect)(() => {
                        if (!w) return;
                        let t = e.current,
                            n = e => {
                                b(e.touches[0].clientX)
                            },
                            r = e => {
                                let t = e.changedTouches[0].clientX;
                                x - t > 15 ? u(e => (d + 1) % l) : t - x > 15 && u(e => (d - 1 + l) % l)
                            };
                        return t && (t.addEventListener("touchstart", n), t.addEventListener("touchend", r)), () => {
                            t && (t.removeEventListener("touchstart", n), t.removeEventListener("touchend", r))
                        }
                    }, [w, x]), (0, a.useEffect)(() => {
                        if (!w) return;
                        let t = e.current,
                            n = e => {
                                let t = d;
                                if ("ArrowLeft" === e.key) t = (d - 1 + l) % l;
                                else {
                                    if ("ArrowRight" !== e.key) return;
                                    t = (d + 1) % l
                                }
                                u(t);
                                let n = document.querySelector(`#link-${t}`);
                                n && n.focus()
                            };
                        return t && t.addEventListener("keydown", n), () => {
                            t && t.removeEventListener("keydown", n)
                        }
                    }, [d, l, w]), (0, N.w)(() => {
                        let e = 24,
                            t = 140;
                        window.innerWidth >= 768 && (e = 24, t = 170), _(t + e), f(t)
                    });
                    let j = (0, a.useMemo)(() => {
                        let e = -(100 * d),
                            t = (l - d) * 100,
                            n = -(100 * (d + l));
                        switch (d) {
                            case 0:
                                return [`calc(${e}% + 50vw - ${h}px), 0`, `calc(${e}% + 50vw - ${h}px), 0`, `calc(${e}% + 50vw - ${h}px), -40%`, `calc(${e}% + 50vw - ${h}px), -100%`, `calc(${e}% + 50vw - ${h}px), -100vh`, `calc(${e}% + 50vw - ${h}px), -100vh`, `calc(${e}% + 50vw - ${h}px), -100vh`, `calc(${n}% + 50vw - ${h}px), -100vh`, `calc(${n}% + 50vw - ${h}px), -100vh`, `calc(${n}% + 50vw - ${h}px), -100vh`, `calc(${n}% + 50vw - ${h}px), -100%`, `calc(${n}% + 50vw - ${h}px), -40%`];
                            case 1:
                                return [`calc(${e}% + 50vw - ${h}px), -40%`, `calc(${e}% + 50vw - ${h}px), 0`, `calc(${e}% + 50vw - ${h}px), 0`, `calc(${e}% + 50vw - ${h}px), -40%`, `calc(${e}% + 50vw - ${h}px), -100%`, `calc(${e}% + 50vw - ${h}px), -100vh`, `calc(${e}% + 50vw - ${h}px), -100vh`, `calc(${e}% + 50vw - ${h}px), -100vh`, `calc(${n}% + 50vw - ${h}px), -100vh`, `calc(${n}% + 50vw - ${h}px), -100vh`, `calc(${n}% + 50vw - ${h}px), -100vh`, `calc(${n}% + 50vw - ${h}px), -100%`];
                            case 2:
                                return [`calc(${e}% + 50vw - ${h}px), -100%`, `calc(${e}% + 50vw - ${h}px), -40%`, `calc(${e}% + 50vw - ${h}px), 0`, `calc(${e}% + 50vw - ${h}px), 0`, `calc(${e}% + 50vw - ${h}px), -40%`, `calc(${e}% + 50vw - ${h}px), -100%`, `calc(${e}% + 50vw - ${h}px), -100vh`, `calc(${e}% + 50vw - ${h}px), -100vh`, `calc(${e}% + 50vw - ${h}px), -100vh`, `calc(${n}% + 50vw - ${h}px), -100vh`, `calc(${n}% + 50vw - ${h}px), -100vh`, `calc(${n}% + 50vw - ${h}px), -100vh`];
                            case 3:
                                return [`calc(${e}% + 50vw - ${h}px), -100vh`, `calc(${e}% + 50vw - ${h}px), -100%`, `calc(${e}% + 50vw - ${h}px), -40%`, `calc(${e}% + 50vw - ${h}px), 0`, `calc(${e}% + 50vw - ${h}px), 0`, `calc(${e}% + 50vw - ${h}px), -40%`, `calc(${e}% + 50vw - ${h}px), -100%`, `calc(${e}% + 50vw - ${h}px), -100vh`, `calc(${e}% + 50vw - ${h}px), -100vh`, `calc(${e}% + 50vw - ${h}px), -100vh`, `calc(${n}% + 50vw - ${h}px), -100vh`, `calc(${n}% + 50vw - ${h}px), -100vh`];
                            case 4:
                                return [`calc(${e}% + 50vw - ${h}px), -100vh`, `calc(${e}% + 50vw - ${h}px), -100vh`, `calc(${e}% + 50vw - ${h}px), -100%`, `calc(${e}% + 50vw - ${h}px), -40%`, `calc(${e}% + 50vw - ${h}px), 0`, `calc(${e}% + 50vw - ${h}px), 0`, `calc(${e}% + 50vw - ${h}px), -40%`, `calc(${e}% + 50vw - ${h}px), -100%`, `calc(${e}% + 50vw - ${h}px), -100vh`, `calc(${e}% + 50vw - ${h}px), -100vh`, `calc(${e}% + 50vw - ${h}px), -100vh`, `calc(${n}% + 50vw - ${h}px), -100vh`];
                            case 5:
                                return [`calc(${e}% + 50vw - ${h}px), -100vh`, `calc(${e}% + 50vw - ${h}px), -100vh`, `calc(${e}% + 50vw - ${h}px), -100vh`, `calc(${e}% + 50vw - ${h}px), -100%`, `calc(${e}% + 50vw - ${h}px), -40%`, `calc(${e}% + 50vw - ${h}px), 0`, `calc(${e}% + 50vw - ${h}px), 0`, `calc(${e}% + 50vw - ${h}px), -40%`, `calc(${e}% + 50vw - ${h}px), -100%`, `calc(${e}% + 50vw - ${h}px), -100vh`, `calc(${e}% + 50vw - ${h}px), -100vh`, `calc(${e}% + 50vw - ${h}px), -100vh`];
                            case 6:
                                return [`calc(${t}% + 50vw - ${h}px), -100vh`, `calc(${e}% + 50vw - ${h}px), -100vh`, `calc(${e}% + 50vw - ${h}px), -100vh`, `calc(${e}% + 50vw - ${h}px), -100vh`, `calc(${e}% + 50vw - ${h}px), -100%`, `calc(${e}% + 50vw - ${h}px), -40%`, `calc(${e}% + 50vw - ${h}px), 0`, `calc(${e}% + 50vw - ${h}px), 0`, `calc(${e}% + 50vw - ${h}px), -40%`, `calc(${e}% + 50vw - ${h}px), -100%`, `calc(${e}% + 50vw - ${h}px), -100vh`, `calc(${e}% + 50vw - ${h}px), -100vh`];
                            case 7:
                                return [`calc(${t}% + 50vw - ${h}px), -100vh`, `calc(${t}% + 50vw - ${h}px), -100vh`, `calc(${e}% + 50vw - ${h}px), -100vh`, `calc(${e}% + 50vw - ${h}px), -100vh`, `calc(${e}% + 50vw - ${h}px), -100vh`, `calc(${e}% + 50vw - ${h}px), -100%`, `calc(${e}% + 50vw - ${h}px), -40%`, `calc(${e}% + 50vw - ${h}px), 0`, `calc(${e}% + 50vw - ${h}px), 0`, `calc(${e}% + 50vw - ${h}px), -40%`, `calc(${e}% + 50vw - ${h}px), -100%`, `calc(${e}% + 50vw - ${h}px), -100vh`];
                            case 8:
                                return [`calc(${t}% + 50vw - ${h}px), -100vh`, `calc(${t}% + 50vw - ${h}px), -100vh`, `calc(${t}% + 50vw - ${h}px), -100vh`, `calc(${e}% + 50vw - ${h}px), -100vh`, `calc(${e}% + 50vw - ${h}px), -100vh`, `calc(${e}% + 50vw - ${h}px), -100vh`, `calc(${e}% + 50vw - ${h}px), -100%`, `calc(${e}% + 50vw - ${h}px), -40%`, `calc(${e}% + 50vw - ${h}px), 0`, `calc(${e}% + 50vw - ${h}px), 0`, `calc(${e}% + 50vw - ${h}px), -40%`, `calc(${e}% + 50vw - ${h}px), -100%`];
                            case 9:
                                return [`calc(${t}% + 50vw - ${h}px), -100%`, `calc(${t}% + 50vw - ${h}px), -100vh`, `calc(${t}% + 50vw - ${h}px), -100vh`, `calc(${t}% + 50vw - ${h}px), -100vh`, `calc(${e}% + 50vw - ${h}px), -100vh`, `calc(${e}% + 50vw - ${h}px), -100vh`, `calc(${e}% + 50vw - ${h}px), -100vh`, `calc(${e}% + 50vw - ${h}px), -100%`, `calc(${e}% + 50vw - ${h}px), -40%`, `calc(${e}% + 50vw - ${h}px), 0`, `calc(${e}% + 50vw - ${h}px), 0`, `calc(${e}% + 50vw - ${h}px), -40%`];
                            case 10:
                                return [`calc(${t}% + 50vw - ${h}px), -40%`, `calc(${t}% + 50vw - ${h}px), -100%`, `calc(${t}% + 50vw - ${h}px), -100vh`, `calc(${t}% + 50vw - ${h}px), -100vh`, `calc(${t}% + 50vw - ${h}px), -100vh`, `calc(${e}% + 50vw - ${h}px), -100vh`, `calc(${e}% + 50vw - ${h}px), -100vh`, `calc(${e}% + 50vw - ${h}px), -100vh`, `calc(${e}% + 50vw - ${h}px), -100%`, `calc(${e}% + 50vw - ${h}px), -40%`, `calc(${e}% + 50vw - ${h}px), 0`, `calc(${e}% + 50vw - ${h}px), 0`];
                            case 11:
                                return [`calc(${t}% + 50vw - ${h}px), 0`, `calc(${t}% + 50vw - ${h}px), -40%`, `calc(${t}% + 50vw - ${h}px), -100%`, `calc(${t}% + 50vw - ${h}px), -100vh`, `calc(${t}% + 50vw - ${h}px), -100vh`, `calc(${t}% + 50vw - ${h}px), -100vh`, `calc(${e}% + 50vw - ${h}px), -100vh`, `calc(${e}% + 50vw - ${h}px), -100vh`, `calc(${e}% + 50vw - ${h}px), -100vh`, `calc(${e}% + 50vw - ${h}px), -100%`, `calc(${e}% + 50vw - ${h}px), -40%`, `calc(${e}% + 50vw - ${h}px), 0`];
                            default:
                                return []
                        }
                    }, [d, v, h]);
                    return (0, r.jsxs)("div", {
                        className: "hrt-position-relative",
                        children: [(0, r.jsxs)("div", {
                            "aria-label": "choose a category",
                            className: H().carouselControls,
                            role: "group",
                            children: [(0, r.jsx)(y.j, {
                                as: "button",
                                buttonLabel: (0, g.t)("show previous category", {
                                    ns: "home"
                                }),
                                onClick: () => {
                                    u(e => (e - 1 + l) % l)
                                },
                                size: "small",
                                children: (0, r.jsx)(y.J, {
                                    name: "arrow-left",
                                    size: "small"
                                })
                            }), (0, r.jsx)(y.j, {
                                as: "button",
                                buttonLabel: (0, g.t)("show next category", {
                                    ns: "home"
                                }),
                                onClick: () => {
                                    u(e => (e + 1) % l)
                                },
                                size: "small",
                                children: (0, r.jsx)(y.J, {
                                    name: "arrow-right",
                                    size: "small"
                                })
                            })]
                        }), (0, r.jsx)("div", {
                            className: H().categoryBubblesWrapper,
                            children: (0, r.jsx)("div", {
                                "aria-label": (0, g.t)("fundraising categories", {
                                    ns: "home"
                                }),
                                className: o()(H().categoryBubbles, "category-bubbles"),
                                ref: e,
                                role: "region",
                                children: c.map((e, t) => {
                                    let n = {
                                        "--animation-order": e.animationOrder,
                                        transform: `translate(${j[t]})`
                                    };
                                    return (0, r.jsx)(L, {
                                        className: o()(H()[`item${t}`]),
                                        current: d,
                                        "data-index": t,
                                        imgAlt: e.imageAlt,
                                        imgSrc: e.image,
                                        index: t,
                                        link: `${i}${e.link}`,
                                        slide: e.slide,
                                        style: n,
                                        title: e.title
                                    }, t)
                                })
                            })
                        })]
                    })
                };
            var Q = n(674942),
                G = n(84481),
                B = n.n(G);

            function R() {
                let {
                    countryCode: e,
                    countryCodeFromIP: t
                } = (0, m.bN)(), n = t === h.Ec.NETHERLANDS, a = e === h.Ec.ITALY;
                return n || a ? (0, r.jsxs)(Q.x, {
                    as: "p",
                    className: o()(B().fadeInText, "hrt-m-0"),
                    color: "supporting",
                    variant: "body-sm",
                    children: [n && (0, g.t)("No fees to start a fundraiser. Standard processing fee of {{feePrecentage}}% + {{currency}} {{feeAmount}} per donation apply.", {
                        currency: "€",
                        feeAmount: "0,25",
                        feePrecentage: "2,9",
                        ns: "home"
                    }), a && (0, g.t)("A contribution for the Platform is added to the donation amount. This contribution is optional and can be modified, and is preset at {{defaultFeePrecentage}}%. A {{feePrecentage}}% + {{feeAmount}} {{currency}} fee is deducted from donations.", {
                        currency: "€",
                        feeAmount: "0,25",
                        feePrecentage: "2,9",
                        defaultFeePrecentage: "10",
                        ns: "home"
                    })]
                }) : null
            }

            function U() {
                let {
                    isLoading: e,
                    isLoggedIn: t
                } = (0, v.jY)(), {
                    locale: n
                } = (0, m.bN)(), {
                    data: s,
                    loading: i
                } = (0, _.OPZ)({
                    skip: !t
                }), [l, d] = (0, a.useState)(!1), x = (0, p.a)(p.z.MEDIUM_DOWN), b = {
                    [h.Qv.GERMAN_AT]: "45 Millionen Euro",
                    [h.Qv.GERMAN_DE]: "45 Millionen Euro",
                    [h.Qv.GERMAN_CH]: "45 Millionen Franken",
                    [h.Qv.SPANISH_ES]: "45 millones de euros",
                    [h.Qv.SPANISH_MX]: "MX$1 mil millones",
                    [h.Qv.SPANISH_US]: "$50 millones",
                    [h.Qv.FRENCH_FR]: "45 millions d’euros",
                    [h.Qv.FRENCH_BE]: "45 millions d’euros",
                    [h.Qv.FRENCH_CH]: "45 millions de francs",
                    [h.Qv.FRENCH_LU]: "45 millions d’euros",
                    [h.Qv.FRENCH_CA]: "50 M$",
                    [h.Qv.ITALIAN_IT]: "45 milioni di euro",
                    [h.Qv.DUTCH_NL]: "45 miljoen euro",
                    [h.Qv.DUTCH_BE]: "45 miljoen euro",
                    [h.Qv.PORTUGUESE_PT]: "€45 milh\xf5es",
                    [h.Qv.ENGLISH_DK]: "kr 500M",
                    [h.Qv.ENGLISH_IE]: "€45 million",
                    [h.Qv.ENGLISH_FI]: "€45 million",
                    [h.Qv.ENGLISH_NO]: "kr 500M",
                    [h.Qv.ENGLISH_SE]: "kr 500M",
                    [h.Qv.ENGLISH_GB]: "\xa335 million",
                    [h.Qv.ENGLISH_US]: "$50 million",
                    [h.Qv.ENGLISH_AU]: "$50 million",
                    [h.Qv.ENGLISH_CA]: "$50 million"
                }[n] || "$50 million", y = x ? "display-md" : new Set([h.Qv.SPANISH_ES, h.Qv.SPANISH_MX, h.Qv.SPANISH_US, h.Qv.DUTCH_NL, h.Qv.DUTCH_BE, h.Qv.PORTUGUESE_PT, h.Qv.FRENCH_CA]).has(n) ? "display-md" : "display-lg";
                return (0, a.useEffect)(() => {
                    e || i || l || d(!0)
                }, [e, i]), (0, r.jsxs)("section", {
                    className: o()("home-hero-bubbles", B().hero),
                    children: [(0, r.jsxs)(c.W, {
                        className: o()(B().heroContent, {
                            [B().isFadeInContent]: l
                        }),
                        children: [(0, r.jsx)("div", {
                            className: "hrt-hide-max-md",
                            children: (0, r.jsx)(w, {})
                        }), (0, r.jsx)(c.x, {
                            alignment: "center",
                            as: "h1",
                            className: o()("hrt-m-0", B().h1, B().fadeInText),
                            variant: "heading-sm",
                            children: (0, g.t)("#1 crowdfunding platform", {
                                ns: "home"
                            })
                        }), (0, r.jsx)("div", {
                            className: B().heroHeadline,
                            children: (0, r.jsx)(c.x, {
                                alignment: "center",
                                as: "h2",
                                className: o()(B().heroHeadlineText, B().fadeInText),
                                variant: y,
                                children: (0, g.t)("Successful fundraisers start here", {
                                    ns: "home"
                                })
                            })
                        }), (0, r.jsx)(u, {
                            as: "PrimaryButton",
                            className: B().button,
                            isOrganizerWithDraftFundraisers: (s ? .viewer ? .createdFundraisers || []).length > 0,
                            children: (0, f.Jn)()
                        })]
                    }), (0, r.jsx)("div", {
                        className: "hrt-hide-max-md",
                        children: (0, r.jsx)(A, {})
                    }), (0, r.jsxs)(c.W, {
                        className: o()(B().heroColumnContent, "hrt-px-3", {
                            [B().isFadeInContent]: l
                        }),
                        children: [(0, r.jsx)(c.x, {
                            as: "h2",
                            className: o()("hrt-m-0", B().fadeInText),
                            variant: "heading-lg",
                            children: (0, g.t)("More than {{amount}} is raised every week on GoFundMe.*", {
                                amount: b,
                                ns: "home"
                            })
                        }), (0, r.jsxs)("div", {
                            children: [(0, r.jsx)(c.x, {
                                as: "p",
                                className: B().fadeInText,
                                color: "supporting",
                                variant: "body-lg",
                                children: (0, g.t)("Get started in just a few minutes — with helpful new tools, it’s easier than ever to pick the perfect title, write a compelling story, and share it with the world.", {
                                    ns: "home"
                                })
                            }), (0, r.jsx)(R, {})]
                        })]
                    })]
                })
            }
            var F = n(407156),
                O = n(714985),
                D = n.n(O),
                P = function() {
                    let [e, t] = (0, a.useState)(!1), {
                        locale: n
                    } = (0, m.bN)(), s = (0, $.E)(n).localeSegment, c = `${s}/c/crowdfunding`, l = `${s}/c/how-it-works`, d = `${s}/c/questions`, u = `${s}/start/medical-fundraising`, h = `${s}/start/charity-fundraising`, _ = `${s}/start/funeral-fundraising`;
                    return (0, r.jsx)(i.df, {
                        onChange: e => {
                            t(e)
                        },
                        threshold: .25,
                        children: (0, r.jsx)("section", {
                            children: (0, r.jsxs)("div", {
                                className: "hrt-disp-grid",
                                children: [(0, r.jsx)("div", {
                                    className: o()(D().background, {
                                        [D().backgroundInView]: e
                                    })
                                }), (0, r.jsx)("div", {
                                    className: o()(D().content, {
                                        [D().contentInView]: e
                                    }),
                                    children: (0, r.jsxs)("div", {
                                        className: D().innerContent,
                                        children: [(0, r.jsx)(Q.x, {
                                            as: "h2",
                                            className: o()(D().heading, "hrt-mb-5"),
                                            variant: "heading-lg",
                                            children: (0, g.t)("Fundraising on GoFundMe is easy, powerful, and trusted.", {
                                                ns: "home"
                                            })
                                        }), (0, r.jsxs)(g.cC, {
                                            ns: "home",
                                            children: [(0, r.jsxs)("p", {
                                                className: o()("hrt-text-body-lg"),
                                                children: ["Get what you need to help your fundraiser succeed on GoFundMe, whether you’re raising money for yourself, friends, family, or charity. With no fee to start, GoFundMe is the world’s leading", " ", (0, r.jsx)("a", {
                                                    href: c,
                                                    rel: "noreferrer",
                                                    target: "_blank",
                                                    children: "crowdfunding"
                                                }), " ", "platform—from", " ", (0, r.jsx)("a", {
                                                    href: _,
                                                    rel: "noreferrer",
                                                    target: "_blank",
                                                    children: "memorial"
                                                }), " ", "tributes and funerals to", " ", (0, r.jsx)("a", {
                                                    href: u,
                                                    rel: "noreferrer",
                                                    target: "_blank",
                                                    children: "medical"
                                                }), " ", "emergencies and", " ", (0, r.jsx)("a", {
                                                    href: h,
                                                    rel: "noreferrer",
                                                    target: "_blank",
                                                    children: "nonprofits"
                                                }), ". Whenever you need help, you can ask here."]
                                            }), (0, r.jsxs)("p", {
                                                className: o()("hrt-text-body-lg hrt-mt-5"),
                                                children: ["Still have", " ", (0, r.jsx)("a", {
                                                    href: d,
                                                    rel: "noreferrer",
                                                    target: "_blank",
                                                    children: "questions"
                                                }), "? Learn more about", " ", (0, r.jsx)("a", {
                                                    href: l,
                                                    rel: "noreferrer",
                                                    target: "_blank",
                                                    children: "how GoFundMe works"
                                                }), "."]
                                            })]
                                        })]
                                    })
                                })]
                            })
                        })
                    })
                },
                Z = n(613210),
                W = n.n(Z);

            function z() {
                let e = (0, a.useRef)(null),
                    [t, n] = (0, a.useState)(!1),
                    {
                        locale: s
                    } = (0, m.bN)(),
                    l = (0, $.E)(s).localeSegment,
                    [d, u] = (0, a.useState)(0),
                    [_, p] = (0, a.useState)(0),
                    [v, f] = (0, a.useState)(!1),
                    [x, b] = (0, a.useState)(!1);
                (0, a.useEffect)(() => {
                    let e;
                    return t && !x && (e = setInterval(() => {
                        p(e => e >= 80 ? (f(!0), u(e => (e + 1) % 3), p(0), setTimeout(() => f(!1), 50), 0) : e + 1)
                    }, 100)), () => clearInterval(e)
                }, [t, x]), (0, a.useEffect)(() => {
                    if (e.current) {
                        let t = Math.floor(_ / 80 * 100);
                        e.current.style.setProperty("--value", `${t}%`)
                    }
                }, [_]);
                let w = e => () => {
                        u(e), f(!0), p(0), setTimeout(() => f(!1), 50)
                    },
                    y = function(e) {
                        let t = {
                                [h.Qv.GERMAN_AT]: "de-de",
                                [h.Qv.GERMAN_DE]: "de-de",
                                [h.Qv.GERMAN_CH]: "de-ch",
                                [h.Qv.SPANISH_ES]: "es-es",
                                [h.Qv.SPANISH_MX]: "es-mx",
                                [h.Qv.SPANISH_US]: "es-us",
                                [h.Qv.FRENCH_FR]: "fr-fr",
                                [h.Qv.FRENCH_BE]: "fr-fr",
                                [h.Qv.FRENCH_CH]: "fr-fr",
                                [h.Qv.FRENCH_LU]: "fr-fr",
                                [h.Qv.FRENCH_CA]: "fr-ca",
                                [h.Qv.ITALIAN_IT]: "it-it",
                                [h.Qv.DUTCH_NL]: "nl-nl",
                                [h.Qv.DUTCH_BE]: "nl-nl",
                                [h.Qv.PORTUGUESE_PT]: "pt-pt",
                                [h.Qv.PORTUGUESE_BR]: "pt-pt",
                                [h.Qv.ENGLISH_DK]: "en-dk",
                                [h.Qv.ENGLISH_IE]: "en-euro",
                                [h.Qv.ENGLISH_FI]: "en-euro",
                                [h.Qv.ENGLISH_NO]: "en-no",
                                [h.Qv.ENGLISH_SE]: "en-se",
                                [h.Qv.ENGLISH_GB]: "en-gb",
                                [h.Qv.ENGLISH_US]: "en-us",
                                [h.Qv.ENGLISH_AU]: "en-us",
                                [h.Qv.ENGLISH_CA]: "en-us"
                            }[e] || "en-us",
                            n = t.split("-")[0];
                        return [{
                            src: `/nextassets/home/howitworks/step-1.${t}.png`,
                            alt: (0, g.t)("Wireframe mobile UI for creating a fundraiser and setting a monetary goal", {
                                ns: "home"
                            })
                        }, {
                            src: `/nextassets/home/howitworks/step-2.${n}.png`,
                            alt: (0, g.t)("Wireframe mobile UI for sharing a fundraiser link to social networks", {
                                ns: "home"
                            })
                        }, {
                            src: `/nextassets/home/howitworks/step-3.${t}.png`,
                            alt: (0, g.t)("Wireframe mobile UI for bank transfer settings", {
                                ns: "home"
                            })
                        }]
                    }(s);
                return (0, r.jsx)(i.df, {
                    onChange: e => {
                        n(e)
                    },
                    threshold: .15,
                    children: (0, r.jsx)("section", {
                        className: W().wrapper,
                        children: (0, r.jsxs)(c.W, {
                            className: W().content,
                            children: [(0, r.jsx)(c.x, {
                                alignment: "center",
                                as: "h2",
                                className: W().heading,
                                variant: "heading-lg",
                                children: (0, g.t)("Fundraising on GoFundMe is easy, powerful, and trusted", {
                                    ns: "home"
                                })
                            }), (0, r.jsxs)("div", {
                                className: W().columns,
                                children: [(0, r.jsxs)("div", {
                                    className: W().imageContainer,
                                    children: [(0, r.jsx)("button", {
                                        "aria-label": (0, g.t)("pause motion", {
                                            ns: "home"
                                        }),
                                        "aria-pressed": x,
                                        className: o()(W().pauseButton, {
                                            [W().paused]: x
                                        }),
                                        onClick: () => {
                                            b(e => !e)
                                        },
                                        children: (0, r.jsx)("div", {
                                            className: W().pauseButtonIcon
                                        })
                                    }), y.map((e, t) => (0, r.jsx)("img", {
                                        alt: e.alt,
                                        "aria-describedby": `step${t}`,
                                        "aria-hidden": d !== t,
                                        className: o()("home-how-it-works-image", W().image, {
                                            [W().imageInView]: d === t
                                        }),
                                        src: e.src
                                    }, t)), (0, r.jsx)("progress", {
                                        "aria-label": (0, g.t)("seconds remaining until next step", {
                                            ns: "home"
                                        }),
                                        className: o()(W().progressBar, {
                                            [W().noTransition]: v
                                        }),
                                        max: "80",
                                        ref: e,
                                        value: _
                                    })]
                                }), (0, r.jsxs)("ol", {
                                    className: W().steps,
                                    children: [(0, r.jsxs)("li", {
                                        className: o()(W().step, {
                                            [W().active]: 0 === d
                                        }),
                                        id: "step0",
                                        children: [(0, r.jsx)("button", {
                                            "aria-label": (0, g.t)("Show the image associated with creating a fundraiser", {
                                                ns: "home"
                                            }),
                                            className: W().stepButton,
                                            onClick: w(0)
                                        }), (0, r.jsx)(c.x, {
                                            as: "h3",
                                            variant: "heading-sm",
                                            children: (0, g.t)("Use our tools to create your fundraiser", {
                                                ns: "home"
                                            })
                                        }), (0, r.jsx)(c.x, {
                                            as: "p",
                                            className: W().stepText,
                                            color: "supporting",
                                            variant: "body-lg",
                                            children: (0, g.t)("You’ll be guided by prompts to add fundraiser details and set your goal. Make updates anytime.", {
                                                ns: "home"
                                            })
                                        }), (0, r.jsx)(g.cC, {
                                            ns: "home",
                                            children: (0, r.jsxs)(c.x, {
                                                as: "p",
                                                className: W().stepHelpText,
                                                color: "supporting",
                                                variant: "body-sm",
                                                children: ["Get tips for", " ", (0, r.jsx)("a", {
                                                    className: "hrt-text-supporting",
                                                    href: `${l}/start`,
                                                    rel: "noreferrer",
                                                    target: "_blank",
                                                    children: "starting your fundraiser"
                                                }), "."]
                                            })
                                        })]
                                    }), (0, r.jsxs)("li", {
                                        className: o()(W().step, {
                                            [W().active]: 1 === d
                                        }),
                                        id: "step1",
                                        children: [(0, r.jsx)("button", {
                                            "aria-label": (0, g.t)("Show the image associated with sharing a fundraiser", {
                                                ns: "home"
                                            }),
                                            className: W().stepButton,
                                            onClick: w(1)
                                        }), (0, r.jsx)(c.x, {
                                            as: "h3",
                                            variant: "heading-sm",
                                            children: (0, g.t)("Reach donors by sharing", {
                                                ns: "home"
                                            })
                                        }), (0, r.jsx)(c.x, {
                                            as: "p",
                                            className: W().stepText,
                                            color: "supporting",
                                            variant: "body-lg",
                                            children: (0, g.t)("Share your fundraiser link and use the resources in your dashboard to gain momentum.", {
                                                ns: "home"
                                            })
                                        })]
                                    }), (0, r.jsxs)("li", {
                                        className: o()(W().step, {
                                            [W().active]: 2 === d
                                        }),
                                        id: "step2",
                                        children: [(0, r.jsx)("button", {
                                            "aria-label": (0, g.t)("Show the image associated with receiving fundraiser donations", {
                                                ns: "home"
                                            }),
                                            className: W().stepButton,
                                            onClick: w(2)
                                        }), (0, r.jsx)(c.x, {
                                            as: "h3",
                                            variant: "heading-sm",
                                            children: (0, g.t)("Securely receive funds", {
                                                ns: "home"
                                            })
                                        }), (0, r.jsx)(c.x, {
                                            as: "p",
                                            className: W().stepText,
                                            color: "supporting",
                                            variant: "body-lg",
                                            children: (0, g.t)("Add your bank information, or invite your fundraiser beneficiary to add theirs, and start receiving funds.", {
                                                ns: "home"
                                            })
                                        })]
                                    })]
                                })]
                            })]
                        })
                    })
                })
            }
            var V = n(53032),
                J = n(493631),
                Y = n(970019),
                q = n(507959),
                K = n(168436),
                X = n(164703),
                ee = function() {
                    return (0, r.jsx)("svg", {
                        viewBox: "0 0 19 19",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, r.jsx)("g", {
                            className: "nc-icon-wrapper",
                            fill: "currentColor",
                            stroke: "none",
                            children: (0, r.jsx)("path", {
                                d: "M12.043 10.5L5.646 4.104a.5.5 0 1 1 .708-.708l6.75 6.75a.5.5 0 0 1 0 .708l-6.75 6.75a.5.5 0 0 1-.708-.708z",
                                fillRule: "evenodd"
                            })
                        })
                    })
                },
                et = n(50034),
                en = n.n(et);
            let er = o()(en()["merch-unit-button"], "hrt-text-default");

            function ea(e) {
                let {
                    buttonLink: t,
                    image: n,
                    bannerHeader: a,
                    bannerId: s,
                    bannerRegion: i,
                    title: c,
                    description: l,
                    buttonText: d,
                    cardIndex: u,
                    merchUnitsCount: h,
                    layout: m,
                    showDescription: _
                } = e, g = !(0, p.a)(p.z.SMALL_ONLY), v = o()(en()["merch-unit"], en()["carousel-item"], en()[`merch-unit--${h}-col`]), f = en()["merch-unit-link"], x = en()["merch-unit-link"];
                return (0, r.jsx)("li", {
                    className: v,
                    "data-testid": "merch-card",
                    children: (0, r.jsx)(J.f, {
                        as: "a",
                        className: f,
                        "data-banner-id": s,
                        "data-banner-region": i,
                        "data-element-id": "banner_merch_unit",
                        "data-merch-card-location": u,
                        "data-testid": `merch-unit-card-${u}`,
                        href: t,
                        children: (0, r.jsxs)(Y.P, {
                            className: x,
                            "data-testid": u,
                            layout: m,
                            outline: "transparent",
                            children: [(0, r.jsx)(K.j, {
                                className: en()["merch-unit-image"],
                                "data-testid": "merch-card-img",
                                src: n,
                                children: (0, r.jsx)(X.V, {
                                    className: o()(en()["merch-unit-tag"]),
                                    color: "accent-purple",
                                    "data-testid": "merch-card-tag",
                                    children: (0, r.jsx)("strong", {
                                        children: a
                                    })
                                })
                            }), (0, r.jsxs)(q.O, {
                                className: o()(en()["merch-unit-content"], "hrt-disp-flex", "hrt-flex-dir-column"),
                                children: [(0, r.jsx)("h3", {
                                    className: o()(en()["merch-unit-title"], "hrt-text-default", "hrt-text-heading-sm"),
                                    "data-testid": "merch-card-title",
                                    children: c
                                }), g && _ && (0, r.jsx)("p", {
                                    className: o()(en()["merch-unit-description"], "hrt-text-supporting"),
                                    "data-testid": "merch-card-text",
                                    children: l
                                }), (0, r.jsxs)("div", {
                                    className: er,
                                    "data-testid": "merch-card-cta-btn",
                                    children: [(0, r.jsx)("span", {
                                        className: o()(en()["merch-unit-button-text"]),
                                        children: d
                                    }), (0, r.jsx)(ee, {})]
                                })]
                            })]
                        })
                    })
                })
            }
            var es = n(147336),
                eo = n(783955),
                ei = n(385248),
                ec = n.n(ei);
            let el = o()(ec()["progress-dots"], "hrt-list-unstyled", "hrt-mt-3"),
                ed = o()(ec()["merch-units-list"], "hrt-list-unstyled", ec()["grid-merch-units"]),
                eu = o()(ec()["skeleton-loader"], ec()["skeleton-loader--overlay"]),
                eh = e => [h.Qv.SPANISH_US].includes(e);

            function em(e) {
                let {
                    styleOverrides: t
                } = e, {
                    countryCode: n,
                    locale: s
                } = (0, m.bN)(), l = `merchunits/${n?.toLowerCase().replace("br","pt")}`, {
                    data: d,
                    error: u,
                    isLoading: h
                } = (0, V.Z)(l, () => (0, es.d)(l)), _ = (0, a.useRef)(null), v = (0, a.useRef)(null), f = (0, p.a)(p.z.SMALL_ONLY), x = [], b = eh(s) ? [] : d ? .references ? .merchunits || [], w = b.length, y = o()(ed, {
                    [ec().carousel]: f,
                    [ec()[`grid-merch-units--${w}`]]: w > 0
                }), $ = () => {
                    let e;
                    if (f) x.push("card1"), e = {
                        type: "view:banner_merch_unit",
                        bannerRegion: b[0].bannerRegion,
                        bannerId: b[0].bannerId,
                        merchCardLocation: "card1"
                    }, eo.mt.push(e);
                    else {
                        let t = b.map(e => e.bannerId);
                        e = {
                            type: "view:banner_merch_unit",
                            bannerRegion: b[0].bannerRegion,
                            bannerId: t,
                            merchCardLocation: ""
                        }, eo.mt.push(e)
                    }
                }, N = (0, r.jsxs)(c.W, {
                    className: eu,
                    children: [(0, r.jsx)("div", {
                        className: o()("hrt-mb-4", ec()["heading-1"], ec()["skeleton-loader-title"]),
                        children: (0, g.t)("Featured topics")
                    }), (0, r.jsx)("div", {
                        className: o()(ec()["skeleton-loader-item"], ec()["skeleton-loader-content"])
                    })]
                }), j = () => {
                    if (!_.current) return;
                    let e = _.current,
                        t = Math.round(e.scrollLeft / e.scrollWidth * w),
                        n = "card" + (t + 1);
                    if (v.current && v.current.setAttribute("data-position", t.toString()), !x.includes(n)) {
                        x.push(n);
                        let e = {
                            type: "view:banner_merch_unit",
                            bannerRegion: b[t].bannerRegion,
                            bannerId: b[t].bannerId,
                            merchCardLocation: n
                        };
                        eo.mt.push(e)
                    }
                };
                return (0, a.useEffect)(() => {
                    if (_.current) return _.current.addEventListener("scroll", j), () => {
                        _.current && _.current.removeEventListener("scroll", j)
                    }
                }), u ? null : (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(i.df, {
                        onChange: e => {
                            e && b ? .length && $()
                        },
                        threshold: 0,
                        triggerOnce: !0
                    }), (0, r.jsx)("section", {
                        "aria-live": "polite",
                        "data-testid": "merch-unit-wrapper",
                        children: (0, r.jsx)(c.W, {
                            className: o()(ec().homepageSection, t, {
                                [ec()["show-skeleton-loader"]]: h
                            }),
                            children: h ? N : (0, r.jsxs)("div", {
                                children: [w > 0 && (0, r.jsx)("header", {
                                    className: ec().header,
                                    children: (0, r.jsx)(c.x, {
                                        as: "h2",
                                        "data-testid": "merch-unit-header",
                                        variant: "heading-lg",
                                        children: (0, g.t)("Featured topics")
                                    })
                                }), (0, r.jsx)("ul", {
                                    className: y,
                                    "data-element-id": "list_merch_units",
                                    "data-testid": "merch-units",
                                    ref: _,
                                    children: b.map((e, t) => {
                                        let n = 1 === w || 4 === w && 0 === t ? "responsive" : "stacked",
                                            a = w < 3 || 0 === t && 4 === w;
                                        return (0, r.jsx)(ea, { ...e,
                                            cardIndex: t,
                                            layout: n,
                                            merchUnitsCount: w,
                                            showDescription: a
                                        }, `merch-unit-${t}`)
                                    })
                                }), w > 1 && f && (0, r.jsx)("div", {
                                    className: ec().progressDotsContainer,
                                    children: (0, r.jsxs)("ul", {
                                        "aria-hidden": "true",
                                        className: el,
                                        "data-position": "0",
                                        "data-testid": "progress-dots",
                                        ref: v,
                                        children: [
                                            [...Array(w).keys()].map(e => (0, r.jsx)("li", {
                                                className: ec()["progress-dots-item"]
                                            }, `merch-unit-progress-${e}`)), (0, r.jsx)("li", {
                                                className: ec()["progress-dots-item"]
                                            }, w)
                                        ]
                                    })
                                })]
                            })
                        })
                    })]
                })
            }
            var e_ = n(263371),
                ep = n.n(e_);
            let eg = o()(ep().startContainer, "js-header-sticky-button", "hrt-width-full", "hrt-hide-min-lg", "hrt-p-2"),
                ev = o()(ep().startButton, "hrt-width-full");
            var ef = function() {
                    let e = (0, d.Om)();
                    return (0, r.jsx)("div", {
                        className: eg,
                        "data-chromatic": "ignore",
                        children: (0, r.jsx)(l.K, {
                            as: "a",
                            className: ev,
                            "data-button-type": "sticky",
                            "data-element-id": "btn_hero_primary",
                            "data-testid": "hero-sticky-cta-btn",
                            "data-tracking-id": "start fundraiser from sticky",
                            href: "/create/fundraiser",
                            onClick: t => e(t.currentTarget.textContent, "home page hero", t.currentTarget.href),
                            variant: "default",
                            children: (0, f.Jn)()
                        })
                    })
                },
                ex = n(135397),
                eb = n(451537),
                ew = n.n(eb);
            let ey = Math.floor(3 * Math.random());

            function e$() {
                let [e, t] = (0, a.useState)(3);
                return (0, a.useEffect)(() => {
                    localStorage.getItem("isFirstLoad") ? t(ey) : (t(0), localStorage.setItem("isFirstLoad", "false"))
                }, []), (0, r.jsx)("div", {
                    className: ew().statsBar,
                    children: (0, r.jsx)(ex.W2, {
                        children: (0, r.jsxs)("ul", {
                            className: ew().statsList,
                            "data-chromatic": "ignore",
                            children: [(0, r.jsx)("li", {
                                className: o()(ew().statsItem, 0 === e && ew().statsItemMobile),
                                children: (0, r.jsxs)(ex.xv, {
                                    alignment: "center",
                                    as: "span",
                                    color: "tip-strong",
                                    variant: "body-md",
                                    children: [(0, r.jsx)(ex.JO, {
                                        className: ew().statsIcon,
                                        name: "flash",
                                        size: "default"
                                    }), (0, g.t)("No fee to start fundraising", {
                                        ns: "home"
                                    })]
                                })
                            }), (0, r.jsx)("li", {
                                "aria-hidden": "true",
                                className: ew().statsDivider
                            }), (0, r.jsx)("li", {
                                className: o()(ew().statsItem, 1 === e && ew().statsItemMobile),
                                children: (0, r.jsxs)(ex.xv, {
                                    alignment: "center",
                                    as: "span",
                                    color: "tip-strong",
                                    variant: "body-md",
                                    children: [(0, r.jsx)(ex.JO, {
                                        className: ew().statsIcon,
                                        name: "donations",
                                        size: "default"
                                    }), (0, r.jsxs)(g.cC, {
                                        ns: "home",
                                        children: [(0, r.jsxs)("span", {
                                            className: "hrt-pr-half hrt-font-bold",
                                            children: ["1", (0, r.jsx)(r.Fragment, {
                                                children: " "
                                            })]
                                        }), (0, r.jsx)("span", {
                                            children: "donation made every second"
                                        })]
                                    })]
                                })
                            }), (0, r.jsx)("li", {
                                "aria-hidden": "true",
                                className: ew().statsDivider
                            }), (0, r.jsx)("li", {
                                className: o()(ew().statsItem, 2 === e && ew().statsItemMobile),
                                children: (0, r.jsxs)(ex.xv, {
                                    alignment: "center",
                                    as: "span",
                                    color: "tip-strong",
                                    variant: "body-md",
                                    children: [(0, r.jsx)(ex.JO, {
                                        className: ew().statsIcon,
                                        name: "fundraisers",
                                        size: "default"
                                    }), (0, r.jsxs)(g.cC, {
                                        ns: "home",
                                        children: [(0, r.jsxs)("span", {
                                            className: "hrt-pr-half hrt-font-bold",
                                            children: ["8K+", (0, r.jsx)(r.Fragment, {
                                                children: " "
                                            })]
                                        }), (0, r.jsx)("span", {
                                            children: "fundraisers started daily"
                                        })]
                                    })]
                                })
                            })]
                        })
                    })
                })
            }
            var eN = n(954589),
                ej = n(287808),
                eS = n(527795),
                eE = n(708349),
                ek = n(311499),
                eI = n(828424),
                eC = n.n(eI);

            function eL(e) {
                let {
                    className: t,
                    locale: n,
                    size: a
                } = e;
                return (0, r.jsx)(eE.k, {
                    as: "a",
                    className: t,
                    href: `${n}/c/fundraising-ideas`,
                    size: a,
                    variant: "default",
                    children: (0, g.t)("View all")
                })
            }

            function eM(e) {
                let {
                    iconName: t,
                    text: n,
                    href: a
                } = e;
                return (0, r.jsx)("li", {
                    className: eC().tip,
                    children: (0, r.jsxs)(eS.r, {
                        className: o()(eC().link, "hrt-text-heading-sm"),
                        href: a,
                        unstyled: !0,
                        children: [(0, r.jsx)("span", {
                            className: eC().icon,
                            children: (0, r.jsx)(ej.J, {
                                name: t,
                                size: "small"
                            })
                        }), n, (0, r.jsx)(ej.J, {
                            name: "arrow-right",
                            size: "default"
                        })]
                    })
                })
            }

            function eH() {
                let {
                    locale: e
                } = (0, m.bN)(), t = (0, ek.EJ)(e).localeSegment;
                return (0, r.jsxs)(eN.W, {
                    children: [(0, r.jsxs)("div", {
                        className: "hrt-disp-flex hrt-align-center hrt-justify-between hrt-mb-5",
                        children: [(0, r.jsx)("h2", {
                            className: "heading-lg hrt-mb-0",
                            children: (0, g.t)("Top crowdfunding tips")
                        }), (0, r.jsx)(eL, {
                            className: "hrt-hide-max-lg",
                            locale: t,
                            size: "small"
                        })]
                    }), (0, r.jsxs)("ul", {
                        className: eC().tips,
                        children: [(0, r.jsx)(eM, {
                            href: `${t}/c/fundraising-tips`,
                            iconName: "lightbulb",
                            text: (0, g.t)("Top tips for your GoFundMe fundraiser")
                        }), (0, r.jsx)(eM, {
                            href: `${t}/c/blog/campaign-story`,
                            iconName: "edit",
                            text: (0, g.t)("Tips for telling a great fundraiser story")
                        }), (0, r.jsx)(eM, {
                            href: `${t}/c/fundraising-tips/sharing`,
                            iconName: "help-sent",
                            text: (0, g.t)("Tips for sharing your fundraiser")
                        })]
                    }), (0, r.jsx)(eL, {
                        className: "hrt-hide-min-lg",
                        locale: t,
                        size: "large"
                    })]
                })
            }
            var eT = n(880869),
                eA = n(556934),
                eQ = n(646124),
                eG = n(768836),
                eB = n(679609),
                eR = n.n(eB);
            let eU = e => {
                switch (e) {
                    case h.Qv.ENGLISH_US:
                        return "8EUGN4C33e8";
                    case h.Qv.ENGLISH_DK:
                    case h.Qv.ENGLISH_FI:
                    case h.Qv.ENGLISH_NO:
                    case h.Qv.ENGLISH_SE:
                    case h.Qv.ENGLISH_GB:
                        return "v5wbODeVHC8";
                    case h.Qv.ENGLISH_IE:
                        return "OHrNNRztz7k";
                    case h.Qv.ENGLISH_AU:
                        return "3OZ3EMtnr4s";
                    case h.Qv.ENGLISH_CA:
                        return "BO4FfoiwvP4";
                    case h.Qv.DUTCH_BE:
                    case h.Qv.DUTCH_NL:
                        return "8-16cgB6dKY";
                    case h.Qv.FRENCH_CA:
                        return "S9915cN62mY";
                    case h.Qv.FRENCH_BE:
                    case h.Qv.FRENCH_CH:
                    case h.Qv.FRENCH_LU:
                    case h.Qv.FRENCH_FR:
                        return "Dn_0Vji7j5s";
                    case h.Qv.GERMAN_AT:
                    case h.Qv.GERMAN_CH:
                    case h.Qv.GERMAN_DE:
                        return "LblT3OiE1rE";
                    case h.Qv.ITALIAN_IT:
                        return "DtMyVdLMIVU";
                    case h.Qv.PORTUGUESE_PT:
                        return "lijtya8oxtM";
                    case h.Qv.SPANISH_US:
                        return "CEI6tPV2YVA";
                    case h.Qv.SPANISH_ES:
                        return "In3c7k_0kKc";
                    case h.Qv.SPANISH_MX:
                        return "CEI6tPV2YVA";
                    default:
                        return "8EUGN4C33e8"
                }
            };

            function eF() {
                let {
                    language: e,
                    locale: t,
                    countryCodeFromIP: n
                } = (0, m.bN)(), [s, i] = (0, a.useState)(!1), c = e === h.y4.ENGLISH && n === h.Ec.UNITED_KINGDOM, l = e => {
                    if (!e) return !1;
                    let t = !1 !== e.Advertising,
                        n = !1 !== e.Analytics,
                        r = !1 !== e.Functional;
                    return t && n && r
                }, [d, u] = (0, a.useState)(c), _ = e => {
                    let t = { ...window.airgap ? .getConsent().purposes,
                        Advertising : !0,
                        Analytics: !0,
                        Functional: !0
                    };
                    window.airgap ? .setConsent(e.nativeEvent, t)
                };
                return (0, a.useEffect)(() => {
                    let e = e => {
                            let {
                                detail: {
                                    consent: {
                                        purposes: t
                                    }
                                }
                            } = e, n = l(t);
                            !n !== d && u(!n)
                        },
                        t = async () => {
                            await window.airgap ? .sync();
                            let t = window.airgap ? .getConsent().purposes && l(window.airgap.getConsent().purposes);
                            d && t && u(!1), window.airgap ? .addEventListener ? .("consent-change", e)
                        },
                        n = c ? setTimeout(t, 200) : void 0;
                    return () => {
                        window.airgap ? .removeEventListener ? .("consent-change", e), clearTimeout(n)
                    }
                }, [c, d]), (0, r.jsx)("section", {
                    className: o()(eR().homepageSectionExperiment),
                    children: (0, r.jsxs)(eN.W, {
                        children: [(0, r.jsxs)("header", {
                            className: o()("hrt-disp-flex", "hrt-justify-between", "hrt-flex-dir-row", eR().header),
                            children: [(0, r.jsx)(eQ.x, {
                                as: "h2",
                                className: eR().videoHeading,
                                variant: "heading-lg",
                                children: (0, g.t)("How GoFundMe works")
                            }), (0, r.jsx)(eE.k, {
                                as: "a",
                                className: o()(eR().learnMoreButton, eR().learnMoreButtonTop),
                                href: `${(0,f._l)(t?.replace("BR","PT"))}/c/how-it-works`,
                                size: "small",
                                variant: "default",
                                children: (0, g.t)("Learn more")
                            })]
                        }), (0, r.jsxs)("div", {
                            className: eR().videoPreviewContainer,
                            children: [(0, r.jsxs)("picture", {
                                children: [(0, r.jsx)("source", {
                                    media: "(max-width: 22.5rem)",
                                    srcSet: "https://d25oniaj7o2jcw.cloudfront.net/homepage-refresh-how-it-works-video-still-m-7-23.jpg"
                                }), (0, r.jsx)("source", {
                                    media: "(min-width: 22.6rem)",
                                    srcSet: "https://d25oniaj7o2jcw.cloudfront.net/homepage-refresh-how-it-works-video-still-d-7-23.jpg"
                                }), (0, r.jsx)("img", {
                                    alt: "",
                                    className: eR().image,
                                    loading: "lazy",
                                    src: "https://d25oniaj7o2jcw.cloudfront.net/homepage-refresh-how-it-works-video-still-m-7-23.jpg"
                                })]
                            }), d && (0, r.jsxs)("div", {
                                className: eR().notice,
                                children: [(0, r.jsx)("p", {
                                    className: "hrt-mb-half",
                                    children: (0, g.t)("This video needs your consent to load. The video player may collect data for functionality, analytics, and advertising.", {
                                        ns: "home"
                                    })
                                }), (0, r.jsx)("p", {
                                    className: "hrt-mb-0",
                                    children: (0, r.jsxs)(g.cC, {
                                        ns: "home",
                                        children: ["See our ", (0, r.jsx)("a", {
                                            href: "/en-gb/c/privacy",
                                            children: "Privacy Notice"
                                        }), " and", " ", (0, r.jsx)("a", {
                                            href: "/en-gb/c/gofundme-cookie-policy",
                                            children: "Cookie Policy"
                                        }), " for details."]
                                    })
                                })]
                            }), (0, r.jsxs)(eA.K, {
                                as: "button",
                                className: o()(eR().playButton, "hrt-shadow-strong"),
                                "data-tracking-id": "how gfm works",
                                onClick: e => {
                                    c && d && _(e), i(!0)
                                },
                                variant: "on-media",
                                children: [(0, r.jsx)(ej.J, {
                                    className: eR().icon,
                                    name: "play",
                                    size: "small"
                                }), d ? (0, g.t)("Opt in and play 1 min video", {
                                    ns: "home"
                                }) : (0, g.t)("Play 1 min video", {
                                    ns: "home"
                                })]
                            })]
                        }), s && (0, r.jsx)(eG.V, {
                            iFrameTitle: (0, g.t)("How GoFundMe Works"),
                            onCloseVideo: () => {
                                i(!1)
                            },
                            video: {
                                embedId: eU(t),
                                type: h.Ok.YOUTUBE
                            },
                            autoPlay: !0
                        }), (0, r.jsx)(eE.k, {
                            as: "a",
                            className: o()(eR().learnMoreButton, eR().learnMoreButtonBottom),
                            href: `${(0,f._l)(t?.replace("BR","PT"))}/c/how-it-works`,
                            size: "medium",
                            variant: "default",
                            children: (0, g.t)("Learn more")
                        })]
                    })
                })
            }
            var eO = n(825446),
                eD = n.n(eO),
                eP = n(196393),
                eZ = e => {
                    let {
                        children: t
                    } = e;
                    return (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsxs)(eD(), {
                            children: [(0, r.jsx)("title", {
                                children: (0, g.t)("GoFundMe | The #1 Crowdfunding and Fundraising Platform", {
                                    ns: "home"
                                })
                            }), (0, r.jsx)("meta", {
                                content: (0, g.t)("Start your fundraiser in minutes with tools to help you succeed. GoFundMe is the global leader in crowdfunding, trusted by 100+ million people.", {
                                    ns: "home"
                                }),
                                name: "description"
                            }), (0, r.jsx)("link", {
                                href: "ios-app://id734130700/gofundme/",
                                rel: "alternate"
                            }), (0, r.jsx)("style", {
                                children: "body {height:auto !important;}"
                            })]
                        }), (0, r.jsx)(eP.d, {}), t]
                    })
                },
                eW = n(630542),
                ez = n.n(eW),
                eV = () => {
                    let e = (0, p.a)(p.z.MEDIUM_DOWN);
                    (0, a.useEffect)(() => {
                        let t;
                        let n = document.querySelector("header"),
                            r = n ? .querySelector("shared-default-header-sign-up-button") || n ? .querySelector(`.${ez()["shared-default-header-sign-up-button"]}`),
                            a = document.querySelector(".js-header-sticky-button"),
                            s = document.querySelector("main"),
                            o = s ? .querySelector(".js-hero-cta-button"),
                            i = new IntersectionObserver(t => {
                                (r || a) && t.forEach(t => {
                                    if (t.isIntersecting) r && (r.classList.replace("hrt-primary-button", "hrt-secondary-button"), r.setAttribute("data-button-type", "not sticky")), a && a.classList.add("hrt-disp-none");
                                    else if (r && (r.classList.replace("hrt-secondary-button", "hrt-primary-button"), r.setAttribute("data-button-type", "sticky")), a) {
                                        if (e && n) {
                                            let e = Array.from(n.classList).find(e => e.match("--shadow"));
                                            e && n.classList.remove(e)
                                        }
                                        a.classList.remove("hrt-disp-none")
                                    }
                                })
                            }, {
                                rootMargin: "-136px 0px 0px 0px",
                                threshold: .25
                            }),
                            c = new MutationObserver(e => {
                                e.forEach(e => {
                                    "childList" === e.type && e.removedNodes.length > 0 && (o && i.unobserve(o), (t = document.querySelector(".js-hero-cta-button")) && i.observe(t))
                                })
                            });
                        return s && c.observe(s, {
                            childList: !0
                        }), o && i.observe(o), () => {
                            c.disconnect(), o && i.unobserve(o), t && i.unobserve(t)
                        }
                    }, [e])
                },
                eJ = n(603263),
                eY = n(314885),
                eq = n(456200),
                eK = n.n(eq),
                eX = n(675613),
                e0 = n.n(eX),
                e1 = function(e) {
                    let {
                        style: t = "default"
                    } = e, [n, s] = (0, a.useState)(!1), {
                        data: i
                    } = (0, eY.R)(), c = (0, p.a)(p.z.LARGE_UP), l = "pill" === t, d = l ? e0() : eK(), u = () => {
                        window.scrollY <= 0 ? s(!1) : n || s(!0)
                    }, h = () => {
                        setTimeout(() => {
                            let e = document.querySelectorAll(".shared-default-header-mobile-cta-button");
                            if (e)
                                for (let t of e) t instanceof HTMLElement && Object.prototype.hasOwnProperty.call(t.dataset, "elementId") && "btn_nav_sign_up" === t.dataset.elementId && t.setAttribute("data-button-type", "not sticky")
                        }, 0)
                    };
                    return (0, a.useEffect)(() => {
                        window.addEventListener("scroll", u);
                        let e = document.querySelector(".shared-default-header-mobile > button");
                        return !c && e && e.addEventListener("click", h), window.requestAnimationFrame(() => {
                            let e = document.querySelector(".hrt-persistent-banner-wrapper");
                            if (e) {
                                let t = e.querySelector("button");
                                if (t ? .classList.toString().indexOf("ErrorAlert_retry") !== -1) {
                                    let e = document.getElementsByTagName("header");
                                    e && (e[0].style.position = "relative")
                                }
                            }
                        }), window.scrollY > 0 && s(!0), () => {
                            window.removeEventListener("scroll", u), e && e.removeEventListener("click", h)
                        }
                    }, []), eV(), (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(eJ.yR, {
                            authenticatedPerson: i,
                            className: o()(d["homepage-header-fixed"], {
                                [d["homepage-header-fixed--scrolled"]]: n,
                                [d["homepage-header-fixed--shadow"]]: n,
                                [d["homepage-header-fixed--transparent"]]: "transparent" === t
                            }),
                            isFixedScroll: !0,
                            searchPageType: "homepage",
                            useProvidedIdentity: !0
                        }), l && (0, r.jsx)("div", {
                            className: o()(d["homepage-header-animation"], {
                                [d["homepage-header-animation--unscrolled"]]: !n,
                                [d["homepage-header-animation--scrolled"]]: n
                            }),
                            "data-testid": "home-header-background-animation",
                            id: "background-animation"
                        })]
                    })
                },
                e5 = () => {
                    let {
                        locale: e
                    } = (0, m.bN)();
                    (0, a.useEffect)(() => {
                        let t = () => {
                            eo.mt.getPlatform("Amplitude").setData({
                                languageUI: e,
                                basePage: "nextjs"
                            }), eo.mt.push({
                                type: "mp_page_view",
                                viewId: "pg_homepage_norma_index"
                            })
                        };
                        return window.addEventListener("load", t), () => {
                            window.removeEventListener("load", t)
                        }
                    }, [])
                },
                e2 = n(173032),
                e4 = n(667385),
                e3 = n(703624),
                e6 = n(733877),
                e7 = n.n(e6);

            function e8(e) {
                let {
                    children: t
                } = e;
                return e5(), (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(eZ, {}), (0, r.jsxs)("div", {
                        "data-tracking-surface": "home",
                        "data-view-id": "pg_homepage_norma_index",
                        children: [(0, r.jsx)("div", {
                            id: "portal"
                        }), (0, r.jsx)(e1, {
                            style: "transparent"
                        }), (0, r.jsx)(e4.S, {
                            children: (0, r.jsx)("main", {
                                id: "main",
                                children: t
                            })
                        }), (0, r.jsx)("div", {
                            className: e7().footerContainer,
                            children: (0, r.jsx)(e2.q, {
                                onLocaleChange: e => {
                                    let {
                                        locale: t
                                    } = e;
                                    return (0, f.SX)(t), !0
                                }
                            })
                        })]
                    }), (0, r.jsx)(e3.K, {
                        surface: "homepage"
                    })]
                })
            }
            var e9 = n(940625),
                te = n(5911),
                tt = n(187751),
                tn = n.n(tt);
            let tr = "hrt-primary-button--green";

            function ta() {
                let [e, t] = (0, a.useState)(!1), [n, s] = (0, a.useState)(0), {
                    enabled: l
                } = (0, F.ph)();
                return (0, a.useEffect)(() => {
                    let e = document.getElementById("home-start-cta");
                    e && s(e.getBoundingClientRect().top + e.getBoundingClientRect().height)
                }, []), (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(i.df, {
                        onChange: e => {
                            t(!e)
                        },
                        style: {
                            position: "absolute",
                            top: n
                        },
                        threshold: [0, 1]
                    }), (0, r.jsx)(i.df, {
                        onChange: e => {
                            let t = document.querySelector("[data-element-id=btn_nav_sign_up]");
                            !t || (e && t.classList.contains(tr) && (t.classList.replace("hrt-primary-button", "hrt-secondary-button"), t.classList.remove(tr)), e || t.classList.contains(tr) || (t.classList.replace("hrt-secondary-button", "hrt-primary-button"), t.classList.add(tr)))
                        },
                        style: {
                            position: "absolute",
                            top: n - 175
                        },
                        threshold: [0, 1]
                    }), (0, r.jsx)(U, {}), (0, r.jsx)(e$, {}), (0, r.jsxs)("div", {
                        className: tn().container,
                        children: [(0, r.jsx)(z, {}), l && (0, r.jsxs)(c.W, {
                            className: o()(tn().homepageSectionExperiment),
                            children: [(0, r.jsx)(c.x, {
                                as: "h2",
                                className: tn().collectionsHeading,
                                variant: "heading-lg",
                                children: (0, g.t)("Discover fundraisers inspired by what you care about", {
                                    ns: "home"
                                })
                            }), (0, r.jsx)(e9.q, {
                                children: (0, r.jsx)(te.Collections, {})
                            })]
                        }), (0, r.jsx)(em, {
                            styleOverrides: tn().homepageSectionExperiment
                        }), (0, r.jsx)(P, {}), (0, r.jsx)(eF, {}), (0, r.jsx)(eT.W, {}), (0, r.jsx)(eH, {}), (0, r.jsx)(c.W, {
                            children: (0, r.jsx)(c.x, {
                                as: "p",
                                className: "hrt-mt-5",
                                color: "supporting",
                                variant: "body-sm",
                                children: (0, g.t)("*Statistics on this page are averaged figures based on 2023–2024 GoFundMe data.", {
                                    ns: "home"
                                })
                            })
                        })]
                    }), e && (0, r.jsx)(ef, {})]
                })
            }
            ta.getLayout = function(e) {
                return (0, r.jsx)(e8, {
                    children: e
                })
            };
            var ts = !0
        },
        407156: function(e, t, n) {
            "use strict";
            n.d(t, {
                pe: function() {
                    return c.pe
                },
                nW: function() {
                    return l
                },
                ph: function() {
                    return i
                }
            });
            var r = n(132922),
                a = n.n(r),
                s = n(771813),
                o = n(363456);
            let i = () => {
                let [{
                    enabled: e
                }, t] = (0, s.rm)("fe-ssr-cp-collections"), n = (0, o.t)("More ways to make a difference. Find fundraisers inspired by what you care about.");
                return t ? {
                    enabled: e,
                    collectionsIntroText: n
                } : {
                    enabled: !1,
                    collectionsIntroText: n
                }
            };
            var c = n(806347);
            let l = a()(() => Promise.all([n.e(89341), n.e(411), n.e(5911), n.e(36520)]).then(n.bind(n, 5911)).then(e => e.Collections), {
                loadableGenerated: {
                    webpack: () => [5911]
                }
            })
        },
        880869: function(e, t, n) {
            "use strict";
            n.d(t, {
                W: function() {
                    return p
                }
            });
            var r = n(552676),
                a = n(275271),
                s = n(282187),
                o = n.n(s),
                i = n(650863),
                c = n(135397),
                l = n(545944),
                d = n(45798),
                u = n(144334),
                h = n(363456),
                m = n(829683),
                _ = n.n(m);

            function p() {
                let [e, t] = (0, a.useState)(!1), {
                    countryCode: n,
                    locale: s
                } = (0, d.bN)(), m = (0, l.E)(s).localeSegment, p = `${m}/c/pricing#${n?.replace("BR","PT")}`, g = `${m}/c/safety`, v = (0, u.N)();
                return (0, r.jsx)(i.df, {
                    onChange: e => {
                        t(e)
                    },
                    threshold: .25,
                    children: (0, r.jsx)("section", {
                        className: o()(_().homepageSectionExperiment, _().section),
                        children: (0, r.jsxs)("div", {
                            className: _().wrapper,
                            children: [(0, r.jsx)("div", {
                                className: o()(_().background, {
                                    [_().backgroundInView]: e
                                }),
                                "data-testid": "value-prop"
                            }), (0, r.jsxs)(c.W2, {
                                className: o()(_().content, {
                                    [_().contentInView]: e
                                }),
                                children: [(0, r.jsx)(c.xv, {
                                    as: "p",
                                    className: o()(_().text, _().opacity),
                                    color: "default-on-strong",
                                    "data-testid": "value-prop-header",
                                    variant: "heading-lg",
                                    children: (0, h.t)("We’ve got you covered.", {
                                        ns: "home"
                                    })
                                }), (0, r.jsx)("br", {}), (0, r.jsxs)(c.xv, {
                                    as: "p",
                                    className: o()(_().text, _().textSmallForSmall),
                                    color: "default-on-strong",
                                    variant: "body-lg",
                                    children: [(0, r.jsxs)("span", {
                                        className: _().opacity,
                                        "data-testid": "value-prop-text-1",
                                        children: [(0, h.t)("GoFundMe is a trusted leader in online fundraising. ", {
                                            ns: "home"
                                        }), (0, r.jsx)(r.Fragment, {
                                            children: " "
                                        })]
                                    }), (0, r.jsx)("span", {
                                        className: _().opacity,
                                        dangerouslySetInnerHTML: {
                                            __html: (0, h.t)("With {{-pricingTag}}simple pricing{{-closingTag}} and a team of {{-trustTag}}Trust & Safety{{-closingTag}} ", {
                                                pricingTag: `<a href="${p}">`,
                                                trustTag: `<a href="${g}">`,
                                                closingTag: "</a>",
                                                ns: "home"
                                            })
                                        },
                                        "data-testid": "value-prop-text-2"
                                    }), (0, r.jsxs)("span", {
                                        className: _().opacity,
                                        "data-testid": "value-prop-text-3",
                                        children: [(0, r.jsx)(r.Fragment, {
                                            children: " "
                                        }), (0, h.t)("experts in your corner, you can raise money or ", {
                                            ns: "home"
                                        }), (0, r.jsx)(r.Fragment, {
                                            children: " "
                                        })]
                                    }), (0, r.jsx)("span", {
                                        className: _().opacity,
                                        "data-testid": "value-prop-text-4",
                                        children: (0, h.t)("make a donation with peace of mind.", {
                                            ns: "home"
                                        })
                                    })]
                                }), (0, r.jsx)("br", {}), (0, r.jsx)(c.JO, {
                                    className: "hrt-text-on-strong hrt-mr-1 hrt-pb-half",
                                    name: "gofundme-giving-guarantee",
                                    size: "default"
                                }), (0, r.jsx)(h.cC, {
                                    ns: "home",
                                    children: (0, r.jsxs)(c.xv, {
                                        as: "span",
                                        color: "default-on-strong",
                                        variant: "body-md",
                                        children: ["Read the", " ", (0, r.jsx)("a", {
                                            className: "hrt-text-on-strong",
                                            href: v,
                                            rel: "noreferrer",
                                            target: "_blank",
                                            children: "GoFundMe Giving Guarantee"
                                        })]
                                    })
                                })]
                            })]
                        })
                    })
                })
            }
        },
        147336: function(e, t, n) {
            "use strict";
            n.d(t, {
                d: function() {
                    return s
                }
            });
            var r = n(362950),
                a = n(600488);
            let s = async e => {
                let t = await fetch(`${a.config.environment.nativeGatewayDomain}/feed/${e}`, {
                    method: "GET",
                    headers: {
                        Accept: "application/json",
                        "GFM-Request-Id": (0, r.Z)()
                    }
                });
                return await t.json()
            }
        },
        768836: function(e, t, n) {
            "use strict";
            n.d(t, {
                V: function() {
                    return _
                }
            });
            var r = n(552676),
                a = n(275271),
                s = n(153280),
                o = n(287808),
                i = n(194119),
                c = n(781998),
                l = n(758655),
                d = n(893269),
                u = n(956572),
                h = n.n(u);
            let m = function(e) {
                let t, n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                switch (e.type) {
                    case d.Ok.YOUTUBE:
                        t = new URL(`https://www.youtube-nocookie.com/embed/${e.embedId}`);
                        break;
                    case d.Ok.VIMEO:
                        t = new URL(`https://player.vimeo.com/video/${e.embedId}`);
                        break;
                    default:
                        return ""
                }
                return n && t.searchParams.append("autoplay", "1"), t.toString()
            };
            var _ = e => {
                let {
                    onCloseVideo: t,
                    video: n,
                    autoPlay: d = !1,
                    iFrameTitle: u = "Video Lightbox"
                } = e, [_, p] = (0, a.useState)("");
                return (0, a.useEffect)(() => {
                    let e = m(n, d);
                    e || t(), p(e)
                }, [n]), (0, r.jsx)(c.h, {
                    elementId: "portal",
                    children: (0, r.jsx)(i.b, {
                        isAnimating: !1,
                        isOpen: !0,
                        children: (0, r.jsx)(s.Y, {
                            onClickOutside: t,
                            onEscapeKey: t,
                            children: (0, r.jsxs)("div", {
                                className: h().videoWrapper,
                                children: [(0, r.jsx)(l.j, {
                                    as: "button",
                                    buttonLabel: "close",
                                    className: h().closeBtn,
                                    onClick: t,
                                    size: "small",
                                    children: (0, r.jsx)(o.J, {
                                        name: "close",
                                        size: "small"
                                    })
                                }), (0, r.jsx)("iframe", {
                                    allow: "autoplay",
                                    "data-testid": "partner-embedded-video",
                                    frameBorder: "0",
                                    src: _,
                                    title: u,
                                    allowFullScreen: !0
                                })]
                            })
                        })
                    })
                })
            }
        },
        806347: function(e, t, n) {
            "use strict";
            n.d(t, {
                Yb: function() {
                    return o
                },
                eT: function() {
                    return c
                },
                pe: function() {
                    return i
                },
                qr: function() {
                    return d
                }
            });
            var r, a, s, o, i, c, l = n(637469);
            (r = o || (o = {})).NEARBY = "NEARBY", r.TRENDING_CITY = "TRENDING_CITY";
            let d = { ...o,
                ...l.ylh
            };
            (a = i || (i = {})).DARK = "dark", a.LIGHT = "light", (s = c || (c = {})).FEATURED = "featured", s.INLINE = "inline", s.REGULAR = "regular"
        },
        545944: function(e, t, n) {
            "use strict";
            n.d(t, {
                E: function() {
                    return s
                }
            });
            var r = n(893269),
                a = n(252135);
            let s = e => {
                e === r.Qv.PORTUGUESE_BR && (e = r.Qv.PORTUGUESE_PT);
                let t = (0, a.hc)(e || "en-us").toLowerCase();
                return {
                    localeSegment: t && "en-us" !== t ? `/${t}` : "",
                    bcp47Locale: t
                }
            }
        },
        546782: function(e, t, n) {
            "use strict";
            n.d(t, {
                h: function() {
                    return d
                }
            });
            var r = n(552676);
            n(275271);
            var a = n(282187),
                s = n.n(a),
                o = n(936956),
                i = n(954589),
                c = n(312802),
                l = n(363456);

            function d(e) {
                let {
                    children: t,
                    className: n,
                    cta: a,
                    onClose: d,
                    onReset: u = () => window.location.reload()
                } = e;
                return (0, r.jsx)(i.W, {
                    className: s()(n, "hrt-mb-2"),
                    children: (0, r.jsx)(o.b, {
                        closeButtonLabel: (0, l.t)("Close alert"),
                        isOpen: !0,
                        onClose: d,
                        overlayContent: !1,
                        title: (0, r.jsxs)("p", {
                            className: "hrt-mb-0",
                            children: [t || (0, l.t)("We’re sorry. Something went wrong."), (0, r.jsx)(r.Fragment, {
                                children: " "
                            }), a || (0, r.jsx)(c.A, {
                                onClick: u,
                                children: (0, l.t)("Please try again.")
                            })]
                        }),
                        variant: "negative"
                    })
                })
            }
        },
        667385: function(e, t, n) {
            "use strict";
            n.d(t, {
                S: function() {
                    return c
                }
            });
            var r = n(552676);
            n(275271);
            var a = n(36130),
                s = n(546782),
                o = n(943214);
            let i = e => {
                let {
                    resetErrorBoundary: t
                } = e;
                return (0, r.jsx)(s.h, {
                    onReset: t
                })
            };
            var c = function(e) {
                let {
                    children: t,
                    type: n = "alert",
                    onReset: s = () => window.location.reload(),
                    onError: c
                } = e, l = (0, o.q)();
                return (0, r.jsx)(a.ErrorBoundary, {
                    FallbackComponent: {
                        alert: i,
                        suppress: () => null
                    }[n],
                    onError: function(e) {
                        l.noticeError({
                            error: e
                        }), c ? .(e)
                    },
                    onReset: s,
                    children: t
                })
            }
        },
        196393: function(e, t, n) {
            "use strict";
            n.d(t, {
                d: function() {
                    return d
                }
            });
            var r = n(552676),
                a = n(825446),
                s = n.n(a),
                o = n(920647),
                i = n(600488),
                c = n(893269),
                l = n(252135);

            function d(e) {
                let {
                    path: t = ""
                } = e, n = (0, o.useRouter)().locale, a = i.config.environment.canonicalDomain, d = Object.values(c.Qv), u = e => {
                    let n = e === c.Qv.ENGLISH_US ? "" : `/${(0,l.hc)(e).toLowerCase()}`;
                    return `${a}${n}${t}`
                };
                return (0, r.jsxs)(s(), {
                    children: [(0, r.jsx)("link", {
                        href: u(n),
                        rel: "canonical"
                    }), d.map(e => {
                        let t = (0, l.hc)(e).toLowerCase();
                        return (0, r.jsx)("link", {
                            href: u(e),
                            hrefLang: t,
                            rel: "alternate"
                        }, t)
                    }), (0, r.jsx)("link", {
                        href: u(c.Qv.ENGLISH_US),
                        hrefLang: "x-default",
                        rel: "alternate"
                    })]
                })
            }
        },
        703624: function(e, t, n) {
            "use strict";
            n.d(t, {
                K: function() {
                    return a
                }
            });
            var r = n(552676);

            function a(e) {
                let {
                    surface: t
                } = e;
                return (0, r.jsx)("img", {
                    alt: "",
                    id: "zero-fox-pixel",
                    referrerPolicy: "no-referrer-when-downgrade",
                    src: {
                        homepage: "https://d21y75miwcfqoq.cloudfront.net/ab42fd2f",
                        create: "https://d21y75miwcfqoq.cloudfront.net/8b51d3eb",
                        donate: "https://d21y75miwcfqoq.cloudfront.net/48196d7e",
                        login: "https://d21y75miwcfqoq.cloudfront.net/b0b2879d"
                    }[t],
                    style: {
                        position: "absolute"
                    }
                })
            }
        },
        926566: function(e, t, n) {
            "use strict";
            n.d(t, {
                w: function() {
                    return a
                }
            });
            var r = n(275271);

            function a(e) {
                (0, r.useEffect)(() => (e(), window.addEventListener("resize", e), () => {
                    window.removeEventListener("resize", e)
                }), [])
            }
        },
        943214: function(e, t, n) {
            "use strict";
            n.d(t, {
                q: function() {
                    return s
                }
            });
            var r = n(275271),
                a = n(933587);

            function s() {
                return (0, r.useMemo)(() => (0, a.p)(), [])
            }
        },
        526827: function(e, t, n) {
            "use strict";
            n.d(t, {
                RK: function() {
                    return a
                },
                n3: function() {
                    return s
                },
                _s: function() {
                    return o
                }
            });
            var r = n(363456);
            let a = () => ({
                    10: {
                        href: "/discover/travel-fundraiser",
                        keyname: "Travel",
                        name: (0, r.t)("Travel")
                    },
                    11: {
                        href: "/discover/medical-fundraiser",
                        keyname: "Medical",
                        name: (0, r.t)("Medical")
                    },
                    12: {
                        href: "/discover/faith-fundraiser",
                        keyname: "Faith",
                        name: (0, r.t)("Faith")
                    },
                    13: {
                        href: "/discover/charity-fundraiser",
                        keyname: "Charity",
                        name: (0, r.t)("Non-Profits & Charities")
                    },
                    14: {
                        href: "/discover/newlywed-fundraiser",
                        keyname: "Newlyweds",
                        name: (0, r.t)("Newlyweds")
                    },
                    15: {
                        href: "/discover",
                        keyname: "Other",
                        name: (0, r.t)("Other")
                    },
                    16: {
                        href: "/discover/sports-fundraiser",
                        keyname: "Sports",
                        name: (0, r.t)("Sports")
                    },
                    17: {
                        href: "/discover/education-fundraiser",
                        keyname: "Education",
                        name: (0, r.t)("Education")
                    },
                    18: {
                        href: "/discover/volunteer-fundraiser",
                        keyname: "Volunteer",
                        name: (0, r.t)("Volunteer")
                    },
                    19: {
                        href: "/discover/competition-fundraiser",
                        keyname: "Competitions",
                        name: (0, r.t)("Competitions")
                    },
                    2: {
                        href: "/discover/emergency-fundraiser",
                        keyname: "Emergencies",
                        name: (0, r.t)("Emergencies")
                    },
                    20: {
                        href: "/discover/wishes-fundraiser",
                        keyname: "Wishes",
                        name: (0, r.t)("Wishes")
                    },
                    3: {
                        href: "/discover/animal-fundraiser",
                        keyname: "Animals",
                        name: (0, r.t)("Animals")
                    },
                    342: {
                        href: "/discover/environment-fundraiser",
                        keyname: "Environment",
                        name: (0, r.t)("Environment")
                    },
                    344: {
                        href: "/discover/financial-emergency-fundraiser",
                        keyname: "Bills",
                        name: (0, r.t)("Rent, Food & Monthly Bills")
                    },
                    4: {
                        href: "/discover/family-fundraiser",
                        keyname: "Family",
                        name: (0, r.t)("Family")
                    },
                    5: {
                        href: "/discover/business-fundraiser",
                        keyname: "Business",
                        name: (0, r.t)("Business")
                    },
                    6: {
                        href: "/discover/event-fundraiser",
                        keyname: "Events",
                        name: (0, r.t)("Events")
                    },
                    7: {
                        href: "/discover/community-fundraiser",
                        keyname: "Community",
                        name: (0, r.t)("Community")
                    },
                    8: {
                        href: "/discover/creative-fundraiser",
                        keyname: "Creative",
                        name: (0, r.t)("Creative")
                    },
                    9: {
                        href: "/discover/memorial-fundraiser",
                        keyname: "Memorials",
                        name: (0, r.t)("Funerals & Memorials")
                    }
                }),
                s = (e, t) => {
                    let n = a();
                    if (void 0 === e) return console.error(`Unexpected undefined value. Variable: id, campaign url: ${t}`), n["15"];
                    let s = n[e.toString()] ? n[e.toString()] : n[15];
                    return { ...s,
                        name: (0, r.t)(s.name)
                    }
                },
                o = e => {
                    let t = a(),
                        n = t[e] ? t[e] : t["15"];
                    return { ...n,
                        name: (0, r.t)(n.name)
                    }
                }
        },
        869649: function(e, t, n) {
            "use strict";
            n.d(t, {
                iZ: function() {
                    return T
                },
                pC: function() {
                    return F
                },
                HQ: function() {
                    return U
                },
                WU: function() {
                    return Q
                },
                RA: function() {
                    return R
                },
                iS: function() {
                    return B
                },
                BK: function() {
                    return G
                }
            });
            var r = n(131524),
                a = n(479140),
                s = n(941118),
                o = n(117142),
                i = n(632631),
                c = n(518957),
                l = n(893269),
                d = n(902529),
                u = n(267778),
                h = n(291727),
                m = n(428900),
                _ = n(136478),
                p = n(88781),
                g = n(9405),
                v = n(843862),
                f = n(229235),
                x = n(631986),
                b = n(601497),
                w = n(390450),
                y = n(218847),
                $ = n(741027);
            let N = {
                xSeconds: {
                    standalone: {
                        one: "1 Sekunde",
                        other: "{{count}} Sekunden"
                    },
                    withPreposition: {
                        one: "1 Sekunde",
                        other: "{{count}} Sekunden"
                    }
                },
                xMinutes: {
                    standalone: {
                        one: "1 Min",
                        other: "{{count}} Min"
                    },
                    withPreposition: {
                        one: "1 Min",
                        other: "{{count}} Min"
                    }
                },
                xHours: {
                    standalone: {
                        one: "1 Std",
                        other: "{{count}} Std"
                    },
                    withPreposition: {
                        one: "1 Std",
                        other: "{{count}} Std"
                    }
                },
                xDays: {
                    standalone: {
                        one: "1 T",
                        other: "{{count}} T"
                    },
                    withPreposition: {
                        one: "1 T",
                        other: "{{count}} T"
                    }
                },
                xMonths: {
                    standalone: {
                        one: "1 Mo",
                        other: "{{count}} Mo"
                    },
                    withPreposition: {
                        one: "1 Mo",
                        other: "{{count}} Mo"
                    }
                },
                xYears: {
                    standalone: {
                        one: "1 Jahr",
                        other: "{{count}} Jahre"
                    },
                    withPreposition: {
                        one: "1 Jahr",
                        other: "{{count}} Jahren"
                    }
                }
            };
            var j = (e, t, n) => {
                let r;
                let a = n ? .addSuffix ? N[e].withPreposition : N[e].standalone;
                return (r = "string" == typeof a ? a : 1 === t ? a.one : a.other.replace("{{count}}", String(t)), n ? .addSuffix) ? n.comparison && n.comparison > 0 ? "in " + r : "vor " + r : r
            };
            let S = {
                xSeconds: "Just now",
                xMinutes: {
                    one: "1 min",
                    other: "{{count}} mins"
                },
                xHours: {
                    one: "1 hr",
                    other: "{{count}} hrs"
                },
                xDays: {
                    one: "1 d",
                    other: "{{count}} d"
                },
                xMonths: {
                    one: "1 mo",
                    other: "{{count}} mos"
                },
                xYears: {
                    one: "1 yr",
                    other: "{{count}} yrs"
                }
            };
            var E = (e, t, n) => {
                let r;
                let a = S[e];
                if (r = "string" == typeof a ? a : 1 === t ? a.one : a.other.replace("{{count}}", t.toString()), null != n && n.addSuffix) {
                    if (n.comparison && n.comparison > 0) return "in " + r;
                    if (a !== S.xSeconds) return r + " ago"
                }
                return r
            };
            let k = {
                    xSeconds: {
                        one: "1 segundo",
                        other: "{{count}} segundos"
                    },
                    xMinutes: {
                        one: "1 min",
                        other: "{{count}} mins"
                    },
                    xHours: {
                        one: "1 hr",
                        other: "{{count}} hrs"
                    },
                    xDays: {
                        one: "1 d",
                        other: "{{count}} d"
                    },
                    xMonths: {
                        one: "1 mes",
                        other: "{{count}} meses"
                    },
                    xYears: {
                        one: "1 a\xf1o",
                        other: "{{count}} a\xf1os"
                    }
                },
                I = {
                    xSeconds: {
                        one: "1 seconde",
                        other: "{{count}} secondes"
                    },
                    xMinutes: {
                        one: "1 min.",
                        other: "{{count}} min."
                    },
                    xHours: {
                        one: "1 h",
                        other: "{{count}} h"
                    },
                    xDays: {
                        one: "1 j",
                        other: "{{count}} j"
                    },
                    xMonths: {
                        one: "1 mois",
                        other: "{{count}} mois"
                    },
                    xYears: {
                        one: "1 an",
                        other: "{{count}} ans"
                    }
                };
            var C = (e, t, n) => {
                let r;
                let a = I[e];
                return (r = "string" == typeof a ? a : 1 === t ? a.one : a.other.replace("{{count}}", String(t)), n ? .addSuffix) ? n.comparison && n.comparison > 0 ? "dans " + r : "il y a " + r : r
            };
            let L = {
                    xSeconds: {
                        one: "1 secondo",
                        other: "{{count}} secondi"
                    },
                    xMinutes: {
                        one: "1 m",
                        other: "{{count}} m"
                    },
                    xHours: {
                        one: "1 h",
                        other: "{{count}} h"
                    },
                    xDays: {
                        one: "1 g",
                        other: "{{count}} g"
                    },
                    xMonths: {
                        one: "1 mese",
                        other: "{{count}} mesi"
                    },
                    xYears: {
                        one: "1 anno",
                        other: "{{count}} anni"
                    }
                },
                M = {
                    xSeconds: {
                        one: "1 seconde",
                        other: "{{count}} seconden"
                    },
                    xMinutes: {
                        one: "1 min.",
                        other: "{{count}} min."
                    },
                    xHours: {
                        one: "1 u.",
                        other: "{{count}} u."
                    },
                    xDays: {
                        one: "1 d.",
                        other: "{{count}} d."
                    },
                    xMonths: {
                        one: "1 mnd.",
                        other: "{{count}} mnd."
                    },
                    xYears: {
                        one: "1 jaar",
                        other: "{{count}} jaar"
                    }
                };
            var H = (e, t, n) => {
                let r;
                let a = M[e];
                return (r = "string" == typeof a ? a : 1 === t ? a.one : a.other.replace("{{count}}", String(t)), n ? .addSuffix) ? n.comparison && n.comparison > 0 ? "over " + r : r + " geleden" : r
            };
            d.Z.formatDistance = j, u.Z.formatDistance = j, h.Z.formatDistance = E, m.Z.formatDistance = E, _.Z.formatDistance = E, p.Z.formatDistance = E, g.Z.formatDistance = E, v.Z.formatDistance = (e, t, n) => {
                let r;
                let a = k[e];
                return (r = "string" == typeof a ? a : 1 === t ? a.one : a.other.replace("{{count}}", t.toString()), n ? .addSuffix) ? n.comparison && n.comparison > 0 ? "en " + r : "hace " + r : r
            }, f.Z.formatDistance = C, x.Z.formatDistance = C, b.Z.formatDistance = C, w.Z.formatDistance = (e, t, n) => {
                let r;
                let a = L[e];
                return (r = "string" == typeof a ? a : 1 === t ? a.one : a.other.replace("{{count}}", t.toString()), n ? .addSuffix) ? n.comparison && n.comparison > 0 ? "tra " + r : r + " fa" : r
            }, y.Z.formatDistance = H, $.Z.formatDistance = H;
            let T = "yyyy-MM-dd",
                A = {
                    [l.Qv.GERMAN_DE]: d.Z,
                    [l.Qv.GERMAN_AT]: u.Z,
                    [l.Qv.GERMAN_CH]: d.Z,
                    [l.Qv.ENGLISH_AU]: h.Z,
                    [l.Qv.ENGLISH_CA]: m.Z,
                    [l.Qv.ENGLISH_GB]: _.Z,
                    [l.Qv.ENGLISH_IE]: p.Z,
                    [l.Qv.ENGLISH_US]: g.Z,
                    [l.Qv.ENGLISH_DK]: g.Z,
                    [l.Qv.ENGLISH_FI]: g.Z,
                    [l.Qv.ENGLISH_NO]: g.Z,
                    [l.Qv.ENGLISH_SE]: g.Z,
                    [l.Qv.SPANISH_ES]: v.Z,
                    [l.Qv.SPANISH_US]: v.Z,
                    [l.Qv.SPANISH_MX]: v.Z,
                    [l.Qv.FRENCH_FR]: f.Z,
                    [l.Qv.FRENCH_CA]: x.Z,
                    [l.Qv.FRENCH_CH]: b.Z,
                    [l.Qv.FRENCH_LU]: f.Z,
                    [l.Qv.FRENCH_BE]: f.Z,
                    [l.Qv.ITALIAN_IT]: w.Z,
                    [l.Qv.DUTCH_NL]: y.Z,
                    [l.Qv.DUTCH_BE]: $.Z,
                    [l.Qv.PORTUGUESE_PT]: i.Z,
                    [l.Qv.PORTUGUESE_BR]: c.Z
                };

            function Q(e, t) {
                return n => (0, s.Z)({
                    locale: A[e] ? ? g.Z
                }, t)(n)
            }

            function G(e) {
                let {
                    addSuffix: t = !1,
                    locale: n
                } = e;
                return (0, o.Z)({
                    addSuffix: t,
                    locale: A[n] ? ? g.Z
                }, new Date)
            }

            function B(e, t) {
                return new Date((0, r.Z)(e)).toLocaleDateString(t, {
                    month: "short",
                    day: "numeric"
                })
            }

            function R(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "short";
                return new Date((0, r.Z)(e)).toLocaleDateString(t, {
                    year: "numeric",
                    month: n,
                    day: "numeric"
                })
            }

            function U(e) {
                let t = e ? new Date(e).toISOString().slice(0, 19).replace("T", " ") : "";
                return e ? (0, a.Z)(new Date(t), T) : e || ""
            }

            function F(e) {
                let t = e ? new Date((0, r.Z)(e)).toISOString().slice(0, 19).replace("T", " ") : "";
                return e ? (0, a.Z)(new Date(t), "yyyy-MM-dd HH:mm:ss") : e || ""
            }
        },
        487222: function(e, t, n) {
            "use strict";
            n.d(t, {
                BK: function() {
                    return r.BK
                },
                HQ: function() {
                    return r.HQ
                },
                RA: function() {
                    return r.RA
                },
                WU: function() {
                    return r.WU
                },
                iS: function() {
                    return r.iS
                },
                iZ: function() {
                    return r.iZ
                },
                pC: function() {
                    return r.pC
                }
            });
            var r = n(869649)
        },
        35166: function(e, t, n) {
            "use strict";
            n.d(t, {
                _l: function() {
                    return u
                },
                Jn: function() {
                    return h
                },
                SX: function() {
                    return c
                }
            });
            var r = n(600488),
                a = n(893269),
                s = n(363456),
                o = n(786642),
                i = n(252135);
            let c = e => {
                    let t = (0, i.hc)(e).toLowerCase();
                    d(o.L.getItem("visitor")).locale !== e && (o.L.removeItem("visitor", "/", `.${r.config.environment.domain}`), window.location.href = l(t))
                },
                l = e => "en-us" === e ? "/" : `/${e}`,
                d = e => {
                    try {
                        return JSON.parse(decodeURIComponent(e || "{}"))
                    } catch (e) {
                        return {}
                    }
                },
                u = e => e && e !== a.Qv.ENGLISH_US ? (0, i.hc)(e).toLowerCase() : "",
                h = () => (0, s.t)("Start a GoFundMe")
        },
        565569: function(e, t, n) {
            "use strict";
            n.d(t, {
                St: function() {
                    return s
                },
                lD: function() {
                    return i
                },
                D9: function() {
                    return o
                }
            });
            var r = n(600488),
                a = n(329721);

            function s(e) {
                try {
                    return sessionStorage.getItem(e)
                } catch (t) {
                    return !(0, r.yv)() && (0, a.ML)() && console.log(`${e} cannot be retrieved from session storage`, t), null
                }
            }

            function o(e, t) {
                try {
                    return sessionStorage.setItem(e, t), !0
                } catch (t) {
                    return !(0, r.yv)() && (0, a.ML)() && console.log(`${e} cannot be set in session storage`, t), !1
                }
            }

            function i(e) {
                try {
                    return sessionStorage.removeItem(e), !0
                } catch (t) {
                    return !(0, r.yv)() && (0, a.ML)() && console.log(`${e} cannot be removed from session storage`, t), !1
                }
            }
        },
        965690: function(e, t, n) {
            "use strict";
            n.d(t, {
                $G: function() {
                    return o
                },
                Bw: function() {
                    return c
                },
                Ch: function() {
                    return a
                },
                G8: function() {
                    return i
                },
                hU: function() {
                    return s
                },
                kC: function() {
                    return r
                }
            });
            let r = e => {
                    if (e.length) {
                        let t = e.toLowerCase(),
                            n = t.charAt(0).toUpperCase();
                        return e.length > 1 ? n + t.slice(1) : n
                    }
                    return e
                },
                a = e => e.replace(/(<([^>]+)>)/gi, ""),
                s = e => e.replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, "$1<br/>$2"),
                o = function(e, t) {
                    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
                    if (e.length <= t) return e;
                    let r = e.substring(0, t);
                    if (n) {
                        let e = r.lastIndexOf(" ");
                        if (e > 0) {
                            let t = Math.min(r.length, e);
                            return r.substr(0, t)
                        }
                    }
                    return r
                },
                i = e => e.charAt(0).toUpperCase() + e.toLowerCase().slice(1),
                c = e => {
                    let t = e.trim().toLowerCase(),
                        n = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t);
                    return {
                        sanitizedEmail: t,
                        isValid: n,
                        error: n ? void 0 : "Invalid email address"
                    }
                }
        },
        714985: function(e) {
            e.exports = {
                background: "about-gfm_background__KWuIP",
                backgroundInView: "about-gfm_backgroundInView__Ibh9t",
                heading: "about-gfm_heading__Efo2L",
                content: "about-gfm_content__pL7xR",
                contentInView: "about-gfm_contentInView__aQUQE",
                innerContent: "about-gfm_innerContent__RL6Ey"
            }
        },
        675613: function(e) {
            e.exports = {
                "homepage-header-fixed": "header-pill_homepage-header-fixed__MDtd9",
                "homepage-header-fixed--transparent": "header-pill_homepage-header-fixed--transparent__9_jdA",
                "homepage-header-fixed--with-cookie-banner": "header-pill_homepage-header-fixed--with-cookie-banner__9SO76",
                "homepage-header-fixed--scrolled": "header-pill_homepage-header-fixed--scrolled__eIwYQ",
                "homepage-header-animation--unscrolled": "header-pill_homepage-header-animation--unscrolled__GULdP",
                "homepage-header-animation": "header-pill_homepage-header-animation___0utl",
                "homepage-header-animation--scrolled": "header-pill_homepage-header-animation--scrolled__qwguP"
            }
        },
        456200: function(e) {
            e.exports = {
                "homepage-header-fixed": "header_homepage-header-fixed__JbfMx",
                "homepage-header-fixed--transparent": "header_homepage-header-fixed--transparent__2lozc",
                "homepage-header-fixed--with-cookie-banner": "header_homepage-header-fixed--with-cookie-banner__0BuZO",
                "homepage-header-fixed--scrolled": "header_homepage-header-fixed--scrolled__B8vbC"
            }
        },
        818861: function(e) {
            e.exports = {
                blurredImagesOuter: "blurred-images_blurredImagesOuter__limww",
                blurredImagesInner: "blurred-images_blurredImagesInner__NZ2qu",
                "spin-clockwise": "blurred-images_spin-clockwise__OURxV",
                zoomIn: "blurred-images_zoomIn__ITTTp",
                "spin-counterclockwise": "blurred-images_spin-counterclockwise__lTXzE",
                blurredImageSmall: "blurred-images_blurredImageSmall__JllFe",
                blurredImageMedium: "blurred-images_blurredImageMedium__7TXeW",
                blurredImage1: "blurred-images_blurredImage1__p9ub_",
                blurredImage2: "blurred-images_blurredImage2__koIYC",
                blurredImage3: "blurred-images_blurredImage3__Xlw1M",
                blurredImage4: "blurred-images_blurredImage4__VuNUa",
                blurredImage5: "blurred-images_blurredImage5__aIPW6",
                blurredImage6: "blurred-images_blurredImage6__zbvMz",
                blurredImage7: "blurred-images_blurredImage7__eYia_"
            }
        },
        750628: function(e) {
            e.exports = {
                categoryBubbleWrapper: "category-bubble_categoryBubbleWrapper__sJXR7",
                categoryBubble: "category-bubble_categoryBubble__MojZU",
                imageWrapper: "category-bubble_imageWrapper__aBMsq",
                scaleUp: "category-bubble_scaleUp__ek9Zz",
                categoryBubbleTag: "category-bubble_categoryBubbleTag__4qC2_",
                grow: "category-bubble_grow__UzvZF",
                categoryBubble1: "category-bubble_categoryBubble1__H6Jpt",
                categoryBubble2: "category-bubble_categoryBubble2__cAfX0",
                categoryBubble3: "category-bubble_categoryBubble3__N4StQ",
                categoryBubble4: "category-bubble_categoryBubble4__V8Za_",
                categoryBubble5: "category-bubble_categoryBubble5__KM_Sr",
                categoryBubble6: "category-bubble_categoryBubble6__iUBTh",
                fadeIn: "category-bubble_fadeIn__17pJ_",
                fadeOut: "category-bubble_fadeOut__c_Q4y",
                fadeInAndUp: "category-bubble_fadeInAndUp__sYDlk",
                fadeOutAndUp: "category-bubble_fadeOutAndUp__iyJd3",
                fadeOutAndDown: "category-bubble_fadeOutAndDown__UGTGG",
                bloop: "category-bubble_bloop__J6m4R",
                clockwiseSpin: "category-bubble_clockwiseSpin__Fb6Ka",
                counterClockwiseSpin: "category-bubble_counterClockwiseSpin__63n3o",
                snakeChase: "category-bubble_snakeChase__6SHrQ",
                scaleDown: "category-bubble_scaleDown__k9o4W"
            }
        },
        358167: function(e) {
            e.exports = {
                categoryBubblesWrapper: "category-bubbles_categoryBubblesWrapper__ADIpl",
                categoryBubbles: "category-bubbles_categoryBubbles__XdJzB",
                carouselControls: "category-bubbles_carouselControls___Z7KU",
                item0: "category-bubbles_item0__cFOto",
                item1: "category-bubbles_item1__LvnQ_",
                item2: "category-bubbles_item2__AAd0V",
                item3: "category-bubbles_item3__ilKIf",
                item4: "category-bubbles_item4__o3_rb",
                item5: "category-bubbles_item5__481JL"
            }
        },
        110017: function(e) {
            e.exports = {
                goalRing: "goal-ring_goalRing__jX7Xn",
                lightGradient: "goal-ring_lightGradient__HuRbY",
                darkGradient: "goal-ring_darkGradient__rXE4w",
                "fade-in": "goal-ring_fade-in__MhPn2",
                "enter-light-gradient": "goal-ring_enter-light-gradient___FgXn",
                "enter-dark-gradient": "goal-ring_enter-dark-gradient__4_bJl"
            }
        },
        84481: function(e) {
            e.exports = {
                hero: "hero-bubbles_hero__BNoNJ",
                headlineText: "hero-bubbles_headlineText__wYBGj",
                button: "hero-bubbles_button__lcsBn",
                heroContent: "hero-bubbles_heroContent__6uuUK",
                fadeInText: "hero-bubbles_fadeInText__wqWiQ",
                heroColumnContent: "hero-bubbles_heroColumnContent__kaR_f",
                heroHeadline: "hero-bubbles_heroHeadline__6NyOu",
                grow: "hero-bubbles_grow__VOfgM",
                spin: "hero-bubbles_spin__HBei_",
                heroHeadlineText: "hero-bubbles_heroHeadlineText__ZWCAo",
                isFadeInContent: "hero-bubbles_isFadeInContent__FVMQz",
                fadeIn: "hero-bubbles_fadeIn__CXEoa"
            }
        },
        613210: function(e) {
            e.exports = {
                wrapper: "how-it-works-steps_wrapper__xfeHl",
                content: "how-it-works-steps_content__gC9HX",
                heading: "how-it-works-steps_heading__Xy_ZL",
                columns: "how-it-works-steps_columns__SU7vs",
                imageContainer: "how-it-works-steps_imageContainer__y0dWy",
                image: "how-it-works-steps_image__PZqHb",
                imageInView: "how-it-works-steps_imageInView__4UKS_",
                progressBar: "how-it-works-steps_progressBar__bvtNU",
                noTransition: "how-it-works-steps_noTransition__fGnn_",
                pauseButton: "how-it-works-steps_pauseButton__i4EQH",
                pauseButtonIcon: "how-it-works-steps_pauseButtonIcon__mY3Ov",
                paused: "how-it-works-steps_paused__IHa_A",
                steps: "how-it-works-steps_steps__u_kJz",
                stepButton: "how-it-works-steps_stepButton__ANvMO",
                step: "how-it-works-steps_step__CDHok",
                stepText: "how-it-works-steps_stepText__gUxJ0",
                stepHelpText: "how-it-works-steps_stepHelpText__aMUy5",
                active: "how-it-works-steps_active__NbGSG"
            }
        },
        50034: function(e) {
            e.exports = {
                "hide-x-overflow": "merch-card_hide-x-overflow__pXqsn",
                homepageSection: "merch-card_homepageSection__30sLl",
                homepageSectionExperiment: "merch-card_homepageSectionExperiment__kPC_j",
                heading: "merch-card_heading__9VCEV",
                subheading: "merch-card_subheading__m3bcQ",
                "grid-columns": "merch-card_grid-columns__THFWO",
                "heading-1": "merch-card_heading-1__lk6WL",
                carousel: "merch-card_carousel__L8hNP",
                "carousel-item": "merch-card_carousel-item__Fr_fC",
                "merch-unit-title": "merch-card_merch-unit-title__N6ksd",
                "merch-unit": "merch-card_merch-unit__936GP",
                "merch-unit-link": "merch-card_merch-unit-link__U4Zki",
                "merch-unit-link--inline": "merch-card_merch-unit-link--inline__8HSBK",
                "merch-unit-link--stacked": "merch-card_merch-unit-link--stacked__EVGjO",
                "merch-unit-image": "merch-card_merch-unit-image__S5lyz",
                "merch-unit-tag": "merch-card_merch-unit-tag__tAN2z",
                "merch-unit-content": "merch-card_merch-unit-content__OtFU9",
                "merch-unit-button": "merch-card_merch-unit-button__ZOIy0",
                "merch-unit--1-col": "merch-card_merch-unit--1-col__O4C34",
                "merch-unit-description": "merch-card_merch-unit-description__iic_N",
                "merch-unit--2-col": "merch-card_merch-unit--2-col__H3iQS",
                "merch-unit--3-col": "merch-card_merch-unit--3-col__X7b2p",
                "merch-unit--4-col": "merch-card_merch-unit--4-col__jpec6"
            }
        },
        385248: function(e) {
            e.exports = {
                "hide-x-overflow": "merch-unit_hide-x-overflow__84jbd",
                homepageSection: "merch-unit_homepageSection__pBKc8",
                homepageSectionExperiment: "merch-unit_homepageSectionExperiment__ShWXL",
                heading: "merch-unit_heading__gLIEm",
                subheading: "merch-unit_subheading__A_opR",
                "grid-columns": "merch-unit_grid-columns__8QaMy",
                "heading-1": "merch-unit_heading-1__jPD3V",
                "show-skeleton-loader": "merch-unit_show-skeleton-loader__6PNIb",
                "skeleton-loader": "merch-unit_skeleton-loader__Amy9y",
                "skeleton-loader--overlay": "merch-unit_skeleton-loader--overlay__cMtG9",
                "skeleton-loader--done": "merch-unit_skeleton-loader--done__sVqun",
                "skeleton-loader-item": "merch-unit_skeleton-loader-item__ZZSEp",
                "skeleton-loader-title": "merch-unit_skeleton-loader-title__QG4M_",
                "skeleton-loader-content": "merch-unit_skeleton-loader-content__vYFeD",
                "skeleton-loader-list": "merch-unit_skeleton-loader-list__pbSur",
                "skeleton-loader-list--overlay4x": "merch-unit_skeleton-loader-list--overlay4x__O890o",
                carousel: "merch-unit_carousel__Crw93",
                "carousel-item": "merch-unit_carousel-item__GkXw1",
                "progress-dots": "merch-unit_progress-dots__a9xrH",
                "progress-dots-item": "merch-unit_progress-dots-item__D4i_8",
                header: "merch-unit_header___jv_v",
                title: "merch-unit_title___13xz",
                "merch-units-list": "merch-unit_merch-units-list__omQaI",
                "grid-merch-units": "merch-unit_grid-merch-units__rzvnV",
                "grid-merch-units--1": "merch-unit_grid-merch-units--1__i9zFC",
                "grid-merch-units--2": "merch-unit_grid-merch-units--2__zY5Jc",
                "grid-merch-units--3": "merch-unit_grid-merch-units--3__g0RFc",
                "grid-merch-units--4": "merch-unit_grid-merch-units--4__O6XWT",
                progressDotsContainer: "merch-unit_progressDotsContainer__Y_QA3"
            }
        },
        263371: function(e) {
            e.exports = {
                startContainer: "mobile-fixed-start-button_startContainer__1Gb6m",
                fadeInAndUp: "mobile-fixed-start-button_fadeInAndUp__mBR03",
                startButton: "mobile-fixed-start-button_startButton__u7c6c",
                fadeIn: "mobile-fixed-start-button_fadeIn__2guK5",
                fadeOut: "mobile-fixed-start-button_fadeOut__3ppEm",
                fadeOutAndUp: "mobile-fixed-start-button_fadeOutAndUp__udVSr",
                fadeOutAndDown: "mobile-fixed-start-button_fadeOutAndDown__5wb_O",
                bloop: "mobile-fixed-start-button_bloop__Ruy_v",
                clockwiseSpin: "mobile-fixed-start-button_clockwiseSpin__Zugdg",
                counterClockwiseSpin: "mobile-fixed-start-button_counterClockwiseSpin___58Qa",
                snakeChase: "mobile-fixed-start-button_snakeChase__0FebW",
                scaleUp: "mobile-fixed-start-button_scaleUp__cGJDo",
                scaleDown: "mobile-fixed-start-button_scaleDown__g70Co"
            }
        },
        451537: function(e) {
            e.exports = {
                statsBar: "stats_statsBar__vm_hE",
                statsList: "stats_statsList__6Wemg",
                statsItem: "stats_statsItem__vYX6g",
                statsItemMobile: "stats_statsItemMobile__Wlzls",
                statsIcon: "stats_statsIcon__ZvgC3",
                statsDivider: "stats_statsDivider__nJaK2"
            }
        },
        828424: function(e) {
            e.exports = {
                tips: "top-crowdfunding-tips_tips__2mTZ_",
                tip: "top-crowdfunding-tips_tip__9hmc8",
                link: "top-crowdfunding-tips_link__eNDgO",
                icon: "top-crowdfunding-tips_icon__MsOEO"
            }
        },
        829683: function(e) {
            e.exports = {
                "hide-x-overflow": "trust-and-safety_hide-x-overflow__NEA7O",
                homepageSection: "trust-and-safety_homepageSection__3SpUn",
                homepageSectionExperiment: "trust-and-safety_homepageSectionExperiment__jJtgR",
                heading: "trust-and-safety_heading__WBGc0",
                subheading: "trust-and-safety_subheading__mN0mF",
                "grid-columns": "trust-and-safety_grid-columns__I29BS",
                "heading-1": "trust-and-safety_heading-1__922Mo",
                wrapper: "trust-and-safety_wrapper__qGmwc",
                background: "trust-and-safety_background__A22kJ",
                backgroundInView: "trust-and-safety_backgroundInView__cvwlc",
                content: "trust-and-safety_content__qoJOv",
                contentInView: "trust-and-safety_contentInView__ymq5S",
                text: "trust-and-safety_text__DG7Mo",
                textSmallForSmall: "trust-and-safety_textSmallForSmall__XGpnp",
                opacity: "trust-and-safety_opacity__6Gvp1"
            }
        },
        679609: function(e) {
            e.exports = {
                "hide-x-overflow": "video_hide-x-overflow__9zYpW",
                homepageSection: "video_homepageSection__DJap3",
                homepageSectionExperiment: "video_homepageSectionExperiment__fHQvK",
                heading: "video_heading__v69fR",
                subheading: "video_subheading__pLejj",
                "grid-columns": "video_grid-columns__1nxsI",
                "heading-1": "video_heading-1__40CT1",
                header: "video_header__QhYpy",
                videoHeading: "video_videoHeading__btGfn",
                learnMoreButton: "video_learnMoreButton__NJ097",
                learnMoreButtonTop: "video_learnMoreButtonTop__Sghdk",
                learnMoreButtonBottom: "video_learnMoreButtonBottom__4SNcN",
                videoPreviewContainer: "video_videoPreviewContainer__waGpY",
                image: "video_image__NT0b7",
                icon: "video_icon__bn9t0",
                playButton: "video_playButton__ZO5Lv",
                notice: "video_notice__d4KkQ"
            }
        },
        733877: function(e) {
            e.exports = {
                footerContainer: "home_footerContainer__UGfb8"
            }
        },
        187751: function(e) {
            e.exports = {
                "hide-x-overflow": "home-page_hide-x-overflow__dNETc",
                homepageSection: "home-page_homepageSection__Qrr1Z",
                homepageSectionExperiment: "home-page_homepageSectionExperiment__V5Ytj",
                heading: "home-page_heading__aBpke",
                subheading: "home-page_subheading__mMYAg",
                "grid-columns": "home-page_grid-columns__8FCPI",
                "heading-1": "home-page_heading-1__5cozn",
                container: "home-page_container__5hXsR",
                collectionsHeading: "home-page_collectionsHeading__umMyc",
                homepageCollectionsSection: "home-page_homepageCollectionsSection__bdTrG"
            }
        },
        956572: function(e) {
            e.exports = {
                videoWrapper: "video-light-box_videoWrapper__eDFiq",
                closeBtn: "video-light-box_closeBtn__X6hVN"
            }
        }
    },
    function(e) {
        e.O(0, [87829, 83314, 69564, 98494, 79140, 58923, 6351, 24316, 411, 30628, 84757, 9431, 3263, 73032, 5911, 89341, 92888, 49774, 40179], function() {
            return e(e.s = 33522)
        }), _N_E = e.O()
    }
]);
//# sourceMappingURL=home-f670a107bde63880.js.map