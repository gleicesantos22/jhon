(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [69564], {
        527795: function(e, t, a) {
            "use strict";
            a.d(t, {
                r: function() {
                    return s
                }
            });
            var r = a(275271),
                l = a(282187),
                n = a.n(l);
            let s = (0, r.forwardRef)((e, t) => {
                let {
                    children: a,
                    className: l,
                    color: s = "gray-dark",
                    unstyled: c,
                    variant: i = "underlined",
                    ...d
                } = e, o = (0, r.useRef)(null);
                (0, r.useImperativeHandle)(t, () => o.current);
                let m = n()(l, "hrt-link", `hrt-link--${s}`, `hrt-link--${i}`, {
                    "hrt-link--unstyled": c
                });
                return r.createElement("a", {
                    className: m,
                    ref: o,
                    ...d
                }, a)
            });
            s.displayName = "Link"
        },
        934821: function(e, t, a) {
            "use strict";
            a.d(t, {
                C: function() {
                    return i
                }
            });
            var r = a(275271),
                l = a(282187),
                n = a.n(l),
                s = a(825040),
                c = a(524430);
            let i = (0, r.forwardRef)((e, t) => {
                let {
                    children: a,
                    className: l,
                    fontWeight: i = "regular",
                    layout: d = "inline",
                    pending: o,
                    pendingAltText: m,
                    size: u = "medium",
                    variant: h = "default",
                    ...f
                } = e, E = (0, r.useRef)(null);
                (0, r.useImperativeHandle)(t, () => E.current);
                let p = n()(l, "hrt-tertiary-button", `hrt-tertiary-button--${d}`, `hrt-tertiary-button--${h}`, {
                    "hrt-tertiary-button--small": "small" === u,
                    "hrt-tertiary-button--font-weight-medium": "medium" === i,
                    "hrt-tertiary-button--disabled hrt-base-button--disabled": f.disabled,
                    "hrt-tertiary-button--disabled hrt-base-button--disabled hrt-base-button--pending": o
                });
                return r.createElement(c.Y, {
                    className: p,
                    ref: E,
                    ...f,
                    ..."button" !== f.as && (f.disabled || o) ? {
                        "aria-disabled": f.disabled || o
                    } : null,
                    ..."a" === f.as && (f.disabled || o) ? {
                        href: ""
                    } : null,
                    disabled: "button" === f.as && (f.disabled || o)
                }, o && r.createElement(s.x, {
                    altText: m,
                    className: "hrt-position-absolute",
                    color: "gray"
                }), "string" == typeof a ? r.createElement("span", null, a) : a)
            });
            i.displayName = "TertiaryButton"
        },
        39827: function(e, t, a) {
            "use strict";
            a.d(t, {
                h: function() {
                    return p
                }
            });
            var r = a(275271),
                l = a(282187),
                n = a.n(l),
                s = a(934821),
                c = a(954589),
                i = a(527795),
                d = a(646124);
            let o = e => {
                let {
                    className: t,
                    href: a,
                    status: l,
                    src: s,
                    title: c,
                    ...o
                } = e, m = n()(t, "hrt-header-manage-fundraiser");
                return r.createElement(i.r, {
                    className: m,
                    href: a,
                    unstyled: !0,
                    ...o
                }, r.createElement("div", {
                    className: "hrt-header-manage-fundraiser-image-container"
                }, r.createElement("img", {
                    alt: "",
                    className: "hrt-header-manage-fundraiser-image",
                    src: s
                })), r.createElement(d.x, {
                    as: "span",
                    className: "hrt-header-manage-fundraiser-title",
                    variant: "body-sm"
                }, c), r.createElement(d.x, {
                    as: "span",
                    className: "hrt-header-manage-fundraiser-status",
                    color: "supporting",
                    variant: "body-sm"
                }, l))
            };
            o.displayName = "Header.ManageFundraiser";
            let m = e => {
                let {
                    children: t,
                    className: a,
                    ariaLabel: l,
                    ...s
                } = e, c = n()(a, "hrt-header-donate-carousel"), i = (0, r.useRef)(null), d = r.Children.toArray(t).length, o = (0, r.useRef)(null), [m, u] = (0, r.useState)(0);
                return (0, r.useEffect)(() => {
                    let e = () => {
                        if (!i.current) return;
                        let e = i.current,
                            t = Math.round(e.scrollLeft / e.scrollWidth * d);
                        o.current && u(t)
                    };
                    if (!i.current) return;
                    let t = i.current;
                    return t.addEventListener("scroll", e), () => {
                        t && t.removeEventListener("scroll", e)
                    }
                }, [d]), r.createElement("section", {
                    className: c,
                    ...s
                }, r.createElement("div", {
                    "aria-label": l,
                    className: "hrt-header-donate-carousel-container",
                    ref: i,
                    role: "region"
                }, r.Children.map(t, e => r.isValidElement(e) ? (0, r.cloneElement)(e, {
                    currentCard: m
                }) : e)), d > 1 && r.createElement("div", {
                    "aria-hidden": "true",
                    className: "hrt-header-donate-carousel-dots-container"
                }, r.createElement("div", {
                    className: "hrt-header-donate-carousel-dots",
                    "data-position": m.toString(),
                    ref: o
                }, [...Array(d).keys()].map(e => r.createElement("div", {
                    className: "hrt-header-donate-carousel-dot",
                    key: `carousel-unit-progress-${e}`
                })), r.createElement("div", {
                    className: "hrt-header-donate-carousel-dot",
                    key: d
                }))))
            };
            m.displayName = "Header.MobileDonateCarousel";
            let u = e => {
                let {
                    bannerId: t,
                    bannerRegion: a,
                    buttonLink: l,
                    cardIndex: n,
                    cardQty: s,
                    currentCard: c,
                    dataElementId: d,
                    image: o,
                    title: m,
                    ...u
                } = e;
                return r.createElement("div", {
                    "aria-hidden": c !== n,
                    "aria-label": `Slide ${n+1} of ${s}`,
                    "aria-roledescription": "Slide",
                    className: "hrt-header-donate-carousel-card",
                    role: "group",
                    ...u
                }, r.createElement(i.r, {
                    "aria-disabled": c !== n,
                    className: "hrt-header-donate-carousel-card-link",
                    "data-banner-id": t,
                    "data-banner-region": a,
                    "data-carousel-card-location": n,
                    "data-element-id": d,
                    href: l,
                    tabIndex: c === n ? 0 : -1,
                    unstyled: !0
                }, r.createElement("span", {
                    className: "hrt-header-donate-carousel-card-title"
                }, m), r.createElement("img", {
                    alt: "",
                    className: "hrt-header-donate-carousel-card-image",
                    src: o
                })))
            };
            u.displayName = "Header.MobileDonateCarouselCard";
            let h = e => {
                    let {
                        link: t,
                        label: a,
                        icon: l,
                        textContent: n,
                        dataElementId: s
                    } = e;
                    return r.createElement("li", {
                        className: "hrt-header-fundraise-carousel-block",
                        "data-element-id": s
                    }, r.createElement(i.r, {
                        href: t,
                        unstyled: !0
                    }, r.createElement("span", {
                        className: "hrt-header-fundraise-carousel-tile"
                    }, l || n), a && r.createElement("span", {
                        className: "hrt-header-fundraise-carousel-label"
                    }, a)))
                },
                f = e => {
                    let {
                        categories: t,
                        className: a,
                        title: l,
                        ...n
                    } = e;
                    return r.createElement("section", {
                        "aria-labelledby": "fundraise_carousel_title",
                        className: a,
                        ...n
                    }, r.createElement(d.x, {
                        as: "span",
                        className: "",
                        id: "fundraise_carousel_title",
                        variant: "legend"
                    }, l), r.createElement("ul", {
                        className: "hrt-header-fundraise-carousel hrt-list-unstyled"
                    }, t.map(e => r.createElement(h, {
                        dataElementId: e.dataElementId,
                        icon: e.icon,
                        key: e.link,
                        label: e.label,
                        link: e.link,
                        textContent: e.textContent
                    }))))
                };
            f.displayName = "Header.MobileFundraiseCarousel";
            let E = e => {
                let {
                    className: t,
                    children: a,
                    variant: l,
                    skipLink: i,
                    navLabel: d,
                    ...o
                } = e, [m, u] = (0, r.useState)(!1);
                (0, r.useEffect)(() => {
                    let e = () => {
                        window.scrollY <= 0 ? u(!1) : m || u(!0)
                    };
                    return "fixed" === l && window.addEventListener("scroll", e), () => window.removeEventListener("scroll", e)
                }, [m, l]);
                let h = n()(t, "hrt-header", `hrt-header--${l||"default"}`, m && "hrt-header--scrolled");
                return r.createElement("header", {
                    className: h,
                    ...o
                }, i && r.createElement(s.C, {
                    as: "a",
                    className: "hrt-header-skip hrt-show-on-focus",
                    href: i.url
                }, i.text), r.createElement(c.W, {
                    className: "hrt-width-full"
                }, r.createElement("nav", {
                    className: "hrt-header-nav",
                    ...d ? {
                        "aria-label": d
                    } : {}
                }, a)))
            };
            E.displayName = "Header";
            let p = Object.assign(E, {
                ManageFundraiser: o,
                MobileDonateCarousel: m,
                MobileDonateCarouselCard: u,
                MobileFundraiseCarousel: f
            })
        },
        918663: function(e, t, a) {
            "use strict";
            a.d(t, {
                e: function() {
                    return s
                }
            });
            var r = a(275271),
                l = a(282187),
                n = a.n(l);
            let s = e => {
                let {
                    className: t,
                    children: a
                } = e, l = n()(t, "hrt-header-center");
                return r.createElement("div", {
                    className: l
                }, a)
            };
            s.displayName = "HeaderCenter"
        },
        397166: function(e, t, a) {
            "use strict";
            a.d(t, {
                Q: function() {
                    return s
                }
            });
            var r = a(275271),
                l = a(282187),
                n = a.n(l);
            let s = e => {
                let {
                    className: t,
                    children: a
                } = e, l = n()(t, "hrt-header-left");
                return r.createElement("div", {
                    className: l
                }, a)
            };
            s.displayName = "HeaderLeft"
        },
        77913: function(e, t, a) {
            "use strict";
            a.d(t, {
                L: function() {
                    return s
                }
            });
            var r = a(275271),
                l = a(282187),
                n = a.n(l);
            let s = e => {
                let {
                    className: t,
                    children: a
                } = e, l = n()(t, "hrt-header-right");
                return r.createElement("div", {
                    className: l
                }, a)
            };
            s.displayName = "HeaderRight"
        },
        499179: function(e, t, a) {
            "use strict";
            a.d(t, {
                V: function() {
                    return m
                }
            });
            var r = a(275271),
                l = a(282187),
                n = a.n(l),
                s = a(567378),
                c = a.n(s),
                i = a(736348);
            let d = ["instagram-circle", "instagram-color", "instagram-fill-color", "instagram-messages-circle", "instagram-reels-circle", "instagram-stories-circle"],
                o = e => {
                    let {
                        iconName: t,
                        ...a
                    } = e;
                    return r.createElement("clipPath", {
                        id: `${t}-clip-path`,
                        ...a
                    })
                },
                m = e => {
                    let t, {
                            className: a,
                            name: l,
                            size: s,
                            ...m
                        } = e,
                        u = {};
                    d.includes(l) && (u.clipPath = `url(#${l}-clip-path)`);
                    let h = n()("hrt-brand-icon", a);
                    switch (l) {
                        case "instagram-circle":
                        case "instagram-messages-circle":
                        case "instagram-reels-circle":
                            t = r.createElement(r.Fragment, null, r.createElement("use", {
                                href: `${c()}#instagram-gradient`,
                                ...u
                            }), r.createElement("defs", null, r.createElement(o, {
                                iconName: l
                            }, r.createElement("circle", {
                                cx: "12",
                                cy: "12",
                                r: "12"
                            }))));
                            break;
                        case "instagram-color":
                            t = r.createElement(r.Fragment, null, r.createElement("use", {
                                href: `${c()}#instagram-gradient`,
                                ...u
                            }), r.createElement("defs", null, r.createElement(o, {
                                iconName: l
                            }, r.createElement("path", {
                                clipRule: "evenodd",
                                d: "M12 2.12c2.68 0 3 0 4.07.06a5.85 5.85 0 0 1 4.15 1.6 5.85 5.85 0 0 1 1.6 4.15c.05 1.05.06 1.39.06 4.07s0 3-.06 4.08a5.88 5.88 0 0 1-1.6 4.15 5.88 5.88 0 0 1-4.15 1.59c-1.05.05-1.39.06-4.07.06s-3 0-4.08-.06a5.92 5.92 0 0 1-4.15-1.59 5.92 5.92 0 0 1-1.59-4.15c-.05-1.08-.06-1.4-.06-4.08s0-3 .06-4.07a5.88 5.88 0 0 1 1.59-4.15 5.88 5.88 0 0 1 4.15-1.6C9 2.13 9.32 2.12 12 2.12Zm0 1.78c-2.64 0-2.95 0-4 .06A4.22 4.22 0 0 0 5 5a4.22 4.22 0 0 0-1 3c0 1-.06 1.35-.06 4s0 2.95.06 4a4.26 4.26 0 0 0 1 3 4.26 4.26 0 0 0 3 1c1 .05 1.35.06 4 .06s2.95 0 4-.06a4.22 4.22 0 0 0 3-1 4.22 4.22 0 0 0 1-3c.05-1 .06-1.35.06-4s0-2.95-.06-4a4.18 4.18 0 0 0-1-3 4.18 4.18 0 0 0-3-1c-1-.09-1.36-.1-4-.1Zm0 11.39A3.29 3.29 0 1 0 8.71 12 3.29 3.29 0 0 0 12 15.29Zm0-8.36A5.08 5.08 0 1 1 6.92 12 5.07 5.07 0 0 1 12 6.93Zm5.28-1.39a1.19 1.19 0 1 1-1.19 1.18 1.18 1.18 0 0 1 1.19-1.18Z",
                                fill: "none"
                            }))));
                            break;
                        case "instagram-fill-color":
                            t = r.createElement(r.Fragment, null, r.createElement("use", {
                                href: `${c()}#instagram-gradient`,
                                ...u
                            }), r.createElement("defs", null, r.createElement(o, {
                                iconName: l
                            }, r.createElement("path", {
                                clipRule: "evenodd",
                                d: "M5.42 0A5.42 5.42 0 0 0 0 5.42v13.16A5.42 5.42 0 0 0 5.42 24h13.16A5.42 5.42 0 0 0 24 18.58V5.42A5.42 5.42 0 0 0 18.58 0Z",
                                fill: "none"
                            }))));
                            break;
                        case "instagram-stories-circle":
                            t = r.createElement(r.Fragment, null, r.createElement("use", {
                                href: `${c()}#instagram-gradient`,
                                ...u
                            }), r.createElement("defs", null, r.createElement(o, {
                                iconName: l
                            }, r.createElement("path", {
                                clipRule: "evenodd",
                                d: "M-5.2-5.2h34.4v34.4H-5.2z M12 0a12 12 0 0 1 12 12 12 12 0 0 1-12 12A12 12 0 0 1 0 12 12 12 0 0 1 12 0Z M-.2-.2v24.4h24.4V-.2Zm12.2 23A10.8 10.8 0 1 1 22.8 12 10.81 10.81 0 0 1 12 22.8Z M2.4 12a9.6 9.6 0 1 1 19.2 0a9.6 9.6 0 1 1 -19.2 0",
                                fill: "none"
                            }))));
                            break;
                        case "mail-app-circle":
                            t = r.createElement(r.Fragment, null, r.createElement("rect", {
                                fill: "url(#mail-app-circle-gradient)",
                                height: "24",
                                rx: "12",
                                width: "24"
                            }), r.createElement("defs", null, r.createElement("linearGradient", {
                                gradientUnits: "userSpaceOnUse",
                                id: "mail-app-circle-gradient",
                                x1: "12",
                                x2: "12",
                                y1: "0",
                                y2: "24"
                            }, r.createElement("stop", {
                                stopColor: "#376EE8"
                            }), r.createElement("stop", {
                                offset: "1",
                                stopColor: "#5DC5F6"
                            }))));
                            break;
                        case "messages-app-circle":
                            t = r.createElement(r.Fragment, null, r.createElement("rect", {
                                fill: "url(#messages-app-circle-gradient)",
                                height: "24",
                                rx: "12",
                                width: "24"
                            }), r.createElement("defs", null, r.createElement("linearGradient", {
                                gradientUnits: "userSpaceOnUse",
                                id: "messages-app-circle-gradient",
                                x1: "12",
                                x2: "12",
                                y1: "3",
                                y2: "21"
                            }, r.createElement("stop", {
                                stopColor: "#50F46A"
                            }), r.createElement("stop", {
                                offset: "1",
                                stopColor: "#13B626"
                            }))));
                            break;
                        case "messenger-circle":
                            t = r.createElement(r.Fragment, null, r.createElement("circle", {
                                cx: "12",
                                cy: "12",
                                fill: "url(#paint0_radial_17176_50572)",
                                r: "12"
                            }), r.createElement("defs", null, r.createElement("radialGradient", {
                                cx: "0",
                                cy: "0",
                                gradientTransform: "translate(5.625 24) rotate(-54.8778) scale(27.0501)",
                                gradientUnits: "userSpaceOnUse",
                                id: "paint0_radial_17176_50572",
                                r: "1"
                            }, r.createElement("stop", {
                                stopColor: "#0495FE"
                            }), r.createElement("stop", {
                                offset: "0.480235",
                                stopColor: "#953BFF"
                            }), r.createElement("stop", {
                                offset: "1",
                                stopColor: "#FF6B69"
                            }))));
                            break;
                        case "messenger-color":
                            t = r.createElement(r.Fragment, null, r.createElement("path", {
                                clipRule: "evenodd",
                                d: "M12 2C6.3667 2 2 6.1264 2 11.7C2 14.6154 3.1948 17.1346 5.14056 18.8746C5.3039 19.0208 5.4025 19.2256 5.4092 19.4448L5.46366 21.2236C5.48106 21.791 6.06714 22.1602 6.58634 21.931L8.5712 21.0548C8.73946 20.9806 8.928 20.9668 9.1053 21.0156C10.0174 21.2664 10.9882 21.4 12 21.4C17.6333 21.4 22 17.2736 22 11.7C22 6.1264 17.6333 2 12 2Z",
                                fill: "url(#paint0_radial_17176_50672)",
                                fillRule: "evenodd"
                            }), r.createElement("defs", null, r.createElement("radialGradient", {
                                cx: "0",
                                cy: "0",
                                gradientTransform: "translate(5.84949 21.893) scale(21.7919 21.7919)",
                                gradientUnits: "userSpaceOnUse",
                                id: "paint0_radial_17176_50672",
                                r: "1"
                            }, r.createElement("stop", {
                                stopColor: "#0099FF"
                            }), r.createElement("stop", {
                                offset: "0.609754",
                                stopColor: "#A033FF"
                            }), r.createElement("stop", {
                                offset: "0.934823",
                                stopColor: "#FF5280"
                            }), r.createElement("stop", {
                                offset: "1",
                                stopColor: "#FF7061"
                            }))))
                    }
                    return r.createElement(i.s, {
                        className: h,
                        href: `${c()}#${l}`,
                        size: s,
                        useProps: u,
                        ...m
                    }, t)
                };
            m.displayName = "BrandIcon"
        },
        646124: function(e, t, a) {
            "use strict";
            a.d(t, {
                x: function() {
                    return s
                }
            });
            var r = a(275271),
                l = a(282187),
                n = a.n(l);
            let s = (0, r.forwardRef)((e, t) => {
                let {
                    alignment: a,
                    as: l,
                    breakWord: s,
                    className: c,
                    color: i = "default",
                    children: d,
                    fontWeight: o,
                    truncateSingleLine: m,
                    uppercase: u,
                    variant: h = "body-md",
                    screenReaderOnly: f,
                    ...E
                } = e, p = (0, r.useRef)(null);
                (0, r.useImperativeHandle)(t, () => p.current);
                let g = n()(c, "hrt-text", {
                    [`hrt-text-${a}`]: a,
                    "hrt-break-word": s,
                    [`hrt-text-${"default-on-strong"===i?"on-strong":"default-strong"===i?"neutral-strong":i}`]: i,
                    [`hrt-font-${o}`]: o,
                    "hrt-truncate-single-line": m,
                    "hrt-text-uppercase": u,
                    [`hrt-text-${h}`]: h,
                    "hrt-sr-only": f
                });
                return r.createElement(l, {
                    className: g,
                    ref: p,
                    ...E
                }, d)
            });
            s.displayName = "Text"
        },
        567378: function(e) {
            e.exports = "/_next/static/images/brand-c61b8c1223bb07e15f9d43f61eb722d3108ecdbecc6f10fb5144c80665a53115.svg"
        }
    }
]);
//# sourceMappingURL=69564-51002b7de19a4609.js.map