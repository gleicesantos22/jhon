"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6351], {
        991280: function(e, a, t) {
            t.d(a, {
                q: function() {
                    return N
                }
            });
            var r = t(275271),
                l = t(282187),
                n = t.n(l);
            let s = e => {
                let {
                    className: a,
                    activityIcon: t,
                    src: l,
                    alt: s,
                    fallbackKind: c = "default",
                    size: m = "large",
                    firstInitial: i,
                    color: o,
                    surface: d,
                    ...u
                } = e, v = n()("hrt-activity-avatar", `hrt-activity-avatar--${m}`, a);
                return r.createElement("div", {
                    className: v,
                    ...u
                }, r.createElement("div", {
                    className: "hrt-activity-avatar--user"
                }, l ? r.createElement("img", {
                    alt: s || "",
                    className: "hrt-activity-avatar--image",
                    src: l
                }) : r.createElement(N, {
                    className: v,
                    color: o,
                    firstInitial: i,
                    kind: c,
                    size: m,
                    surface: d
                })), r.createElement("div", {
                    className: "hrt-activity-avatar--icon"
                }, t))
            };
            var c = t(287808);
            let m = e => {
                    let {
                        className: a,
                        size: t = "large",
                        ...l
                    } = e, s = n()("hrt-charity-avatar", a);
                    return r.createElement("div", {
                        className: s,
                        ...l
                    }, r.createElement(c.J, {
                        name: "bank",
                        size: "default"
                    }))
                },
                i = e => {
                    let {
                        className: a,
                        firstInitial: t,
                        iconName: l,
                        size: s = "large",
                        ...m
                    } = e, i = n()("hrt-default-avatar", a);
                    return r.createElement("div", {
                        className: i,
                        ...m
                    }, t ? r.createElement("span", {
                        className: "hrt-avatar-initial"
                    }, t) : r.createElement(c.J, {
                        name: null != l ? l : "avatar",
                        size: "default"
                    }))
                },
                o = e => {
                    let {
                        className: a,
                        size: t = "large",
                        ...l
                    } = e, s = n()("hrt-donor-avatar", a);
                    return r.createElement("div", {
                        className: s,
                        ...l
                    }, r.createElement(c.J, {
                        name: "donor",
                        size: "default"
                    }))
                },
                d = e => {
                    let {
                        alt: a,
                        className: t,
                        fallbackKind: l = "default",
                        size: s = "large",
                        src: c,
                        ...m
                    } = e, i = n()("hrt-image-avatar", t);
                    if (c) return r.createElement("div", {
                        className: i,
                        ...m
                    }, r.createElement("img", {
                        alt: a || "",
                        src: c
                    }));
                    switch (l) {
                        case "donor":
                        case "charity":
                        case "team":
                            return r.createElement(N, {
                                className: i,
                                ...m,
                                kind: l,
                                size: s
                            });
                        default:
                            return r.createElement(N, {
                                className: i,
                                ...m,
                                kind: "default",
                                size: s
                            })
                    }
                },
                u = e => {
                    let {
                        alt: a,
                        className: t,
                        fallbackKind: l = "charity",
                        size: s = "large",
                        src: c,
                        objectFit: m = "contain",
                        ...i
                    } = e, o = n()("hrt-logo-avatar", t), d = n()("hrt-logo-avatar-image", {
                        [`hrt-logo-avatar-image--${m}`]: m,
                        [`hrt-logo-avatar-image--${s}`]: s
                    });
                    if (c) return r.createElement("div", {
                        className: o,
                        ...i
                    }, r.createElement("img", {
                        alt: a || "",
                        className: d,
                        src: c
                    }));
                    switch (l) {
                        case "donor":
                        case "charity":
                        case "team":
                            return r.createElement(N, {
                                className: t,
                                ...i,
                                kind: l,
                                size: s
                            });
                        default:
                            return r.createElement(N, {
                                className: t,
                                ...i,
                                kind: "default",
                                size: s
                            })
                    }
                };
            u.displayName = "LogoAvatar";
            var v = t(499179);
            let h = e => {
                    let {
                        className: a,
                        firstInitial: t,
                        brandIconName: l,
                        size: s = "large",
                        ...c
                    } = e, m = n()("hrt-brand-avatar", a);
                    return r.createElement("div", {
                        className: m,
                        ...c
                    }, r.createElement(v.V, {
                        className: m,
                        name: null != l ? l : "gofundme-circle",
                        size: {
                            xxxlarge: "large",
                            xxlarge: "large",
                            xlarge: "large",
                            large: "large",
                            medium: "medium",
                            small: "default",
                            xsmall: "small"
                        }[s]
                    }))
                },
                E = e => {
                    let {
                        className: a,
                        size: t = "large",
                        ...l
                    } = e, s = n()("hrt-team-avatar", a);
                    return r.createElement("div", {
                        className: s,
                        ...l
                    }, r.createElement(c.J, {
                        name: "team",
                        size: "default"
                    }))
                },
                f = e => {
                    let {
                        className: a,
                        src: t,
                        alt: l,
                        fallbackKind: s = "default",
                        size: c = "large",
                        firstInitial: m,
                        color: i,
                        surface: o,
                        ...d
                    } = e, u = n()("hrt-verified-avatar", `hrt-verified-avatar--${c}`, a);
                    return r.createElement("div", {
                        className: u,
                        ...d
                    }, r.createElement("div", {
                        className: "hrt-verified-avatar--user"
                    }, t ? r.createElement("img", {
                        alt: l || "",
                        className: "hrt-verified-avatar--image",
                        src: t
                    }) : r.createElement(N, {
                        className: u,
                        color: i,
                        firstInitial: m,
                        kind: s,
                        size: c,
                        surface: o
                    })), r.createElement("div", {
                        className: "hrt-verified-avatar--icon"
                    }, r.createElement(v.V, {
                        name: "verified-color",
                        size: "default"
                    })))
                },
                N = e => {
                    let {
                        className: a,
                        color: t = "neutral",
                        kind: l = "default",
                        size: c = "large",
                        ...v
                    } = e, N = n()("hrt-avatar", `hrt-avatar--${c}`, "logo" !== l && `hrt-avatar--${t}`, v.surface && `hrt-avatar--surface-${v.surface}`, a);
                    switch (l) {
                        case "image":
                            return r.createElement(d, {
                                className: N,
                                color: t,
                                size: c,
                                ...v
                            });
                        case "donor":
                            return r.createElement(o, {
                                className: N,
                                color: t,
                                size: c,
                                ...v
                            });
                        case "charity":
                            return r.createElement(m, {
                                className: N,
                                color: t,
                                size: c,
                                ...v
                            });
                        case "team":
                            return r.createElement(E, {
                                className: N,
                                color: t,
                                size: c,
                                ...v
                            });
                        case "logo":
                            return r.createElement(u, {
                                className: N,
                                color: t,
                                size: "xsmall" === c ? "small" : c,
                                ...v
                            });
                        case "social":
                            return r.createElement(h, {
                                className: N,
                                size: "xxxlarge" === c || "xxlarge" === c || "xlarge" === c ? "large" : c,
                                ...v
                            });
                        case "activity":
                            return r.createElement(s, {
                                className: N,
                                color: t,
                                size: "xsmall" === c ? "small" : c,
                                ...v
                            });
                        case "verified":
                            return r.createElement(f, {
                                className: N,
                                color: t,
                                size: "xsmall" === c ? "small" : c,
                                ...v
                            });
                        default:
                            return r.createElement(i, {
                                className: N,
                                color: t,
                                size: c,
                                ...v
                            })
                    }
                };
            N.displayName = "Avatar"
        },
        632113: function(e, a, t) {
            t.d(a, {
                e: function() {
                    return m
                }
            });
            var r = t(275271),
                l = t(282187),
                n = t.n(l),
                s = t(934821),
                c = t(8108);
            let m = e => {
                let {
                    buttonAvatar: a,
                    buttonClassName: t,
                    buttonTitle: l,
                    buttonDataAttrs: m,
                    titleWrapperDataAttrs: i,
                    children: o,
                    className: d,
                    menuTitle: u,
                    menuTitleIcon: v,
                    multiColumn: h,
                    onClose: E,
                    onOpen: f,
                    position: N
                } = e, [p, g] = (0, r.useState)(!1), b = (0, r.useRef)(null), y = (0, r.useId)(), [w] = (0, r.useState)(`${y}-dropdown`), [z] = (0, r.useState)(`${y}-menu`), x = (0, r.useCallback)(() => {
                    g(e => (e && (null == E || E()), !1))
                }, [E]), k = () => {
                    g(e => (e || null == f || f(), !0))
                }, $ = () => {
                    p ? x() : k()
                };
                (0, r.useEffect)(() => {
                    let e = b.current,
                        a = a => {
                            "Tab" !== a.key || e && e.contains(document.activeElement) || x()
                        };
                    return document.addEventListener("keyup", a), () => {
                        document.removeEventListener("keyup", a)
                    }
                }, [x]);
                let I = n()(d, "hrt-header-dropdown"),
                    L = n()("hrt-header-dropdown-content", `hrt-header-dropdown-content--${N}`, {
                        "hrt-header-dropdown-content--multi-column": h
                    }, {
                        "hrt-header-dropdown-content--open": p
                    }),
                    R = n()("hrt-header-dropdown-caret", {
                        "hrt-header-dropdown-caret--open": p
                    }),
                    C = n()(t, "hrt-header-dropdown-button");
                return (0, c.O)(b, x), r.createElement("div", {
                    className: I,
                    onKeyDown: e => {
                        var a, t;
                        "Escape" === e.key && p && (x(), null === (t = null === (a = b.current) || void 0 === a ? void 0 : a.querySelector(".hrt-header-dropdown-button")) || void 0 === t || t.focus())
                    },
                    onMouseEnter: () => {
                        k()
                    },
                    onMouseLeave: () => {
                        x()
                    },
                    ref: b
                }, r.createElement(s.C, {
                    "aria-controls": w,
                    "aria-expanded": p,
                    "aria-haspopup": "true",
                    as: "button",
                    className: C,
                    ...m,
                    onClick: e => {
                        $()
                    }
                }, a, r.createElement("span", {
                    className: "hrt-header-dropdown-title-wrapper",
                    ...i
                }, l), r.createElement("div", {
                    className: R
                })), r.createElement("div", {
                    className: L,
                    id: w
                }, u && r.createElement("div", {
                    className: "hrt-header-dropdown-title"
                }, v, r.createElement("p", {
                    className: "hrt-text-legend hrt-mb-0",
                    id: z
                }, u)), r.createElement("ul", {
                    "aria-labelledby": u ? z : void 0,
                    className: "hrt-list-unstyled"
                }, o)))
            };
            m.displayName = "HeaderDropdown"
        },
        409758: function(e, a, t) {
            t.d(a, {
                g: function() {
                    return s
                }
            });
            var r = t(275271),
                l = t(282187),
                n = t.n(l);
            let s = (0, r.forwardRef)((e, a) => {
                let {
                    align: t,
                    as: l,
                    avatar: s,
                    className: c,
                    description: m,
                    hasComment: i,
                    label: o,
                    leadingIcon: d,
                    title: u,
                    trailingIcon: v,
                    ...h
                } = e, E = (0, r.useRef)(null);
                (0, r.useImperativeHandle)(a, () => E.current);
                let f = n()(c, "hrt-base-list-item", t && "top" === t && `hrt-base-list-item--${t}-align`),
                    N = r.createElement(r.Fragment, null, d, s, r.createElement("div", {
                        className: "hrt-base-list-item-copy"
                    }, o && r.createElement("span", {
                        className: "hrt-base-list-item-label"
                    }, o), r.createElement("span", {
                        className: n()("hrt-base-list-item-title", i && "hrt-font-bold")
                    }, u), m && r.createElement("div", {
                        className: "hrt-base-list-item-description"
                    }, m)), v);
                return r.createElement("li", null, r.createElement(l, {
                    className: f,
                    ref: E,
                    ..."button" === l ? {
                        type: "button"
                    } : null,
                    ...h
                }, N))
            });
            s.displayName = "BaseListItem"
        },
        179206: function(e, a, t) {
            t.d(a, {
                p: function() {
                    return m
                }
            });
            var r = t(275271),
                l = t(282187),
                n = t.n(l),
                s = t(287808),
                c = t(409758);
            let m = (0, r.forwardRef)((e, a) => {
                let {
                    className: t,
                    hasTrailingIcon: l,
                    size: m,
                    ...i
                } = e, o = (0, r.useRef)(null);
                (0, r.useImperativeHandle)(a, () => o.current);
                let d = n()(t, `hrt-base-list-item--${m}-size`);
                return r.createElement(c.g, {
                    className: d,
                    ref: o,
                    ...i,
                    ...l ? {
                        trailingIcon: r.createElement(s.J, {
                            className: "hrt-ml-1",
                            name: "chevron-right",
                            size: "small"
                        })
                    } : null,
                    align: "center"
                })
            });
            m.displayName = "NavListItem"
        },
        519427: function(e, a, t) {
            t.d(a, {
                l: function() {
                    return i
                }
            });
            var r = t(275271),
                l = t(282187),
                n = t.n(l),
                s = t(183433),
                c = t(758655),
                m = t(287808);
            let i = (0, r.forwardRef)((e, a) => {
                let {
                    className: t,
                    children: l,
                    icon: i,
                    closeButtonLabel: o,
                    hideCloseIcon: d = !1,
                    onClose: u,
                    isOpen: v = !0,
                    ...h
                } = e, [E, f] = (0, r.useState)(v), N = (0, r.useRef)(null);
                (0, r.useImperativeHandle)(a, () => N.current);
                let p = n()(t, "hrt-global-promo-banner");
                return (0, r.useEffect)(() => {
                    f(v)
                }, [v]), r.createElement("div", {
                    "aria-hidden": !E,
                    className: "hrt-global-promo-banner-wrapper"
                }, r.createElement(s.j, {
                    className: "hrt-max-width-full",
                    isOpen: E,
                    role: "status",
                    ...h
                }, r.createElement("div", {
                    className: p
                }, r.createElement("div", {
                    className: "hrt-global-promo-banner--container"
                }, i && r.createElement("div", {
                    className: "hrt-promo-banner-icon"
                }, i), r.createElement("div", {
                    className: "hrt-global-promo-banner--content"
                }, l)), r.createElement("div", {
                    className: "hrt-global-promo-banner--icon"
                }, !d && o ? r.createElement(c.j, {
                    as: E ? "button" : "span",
                    buttonLabel: o,
                    className: "",
                    onClick: () => {
                        f(!1), u && u()
                    },
                    size: "small",
                    variant: "default"
                }, r.createElement(m.J, {
                    name: "close",
                    size: "small"
                })) : null))))
            });
            i.displayName = "GlobalPromoBanner"
        }
    }
]);
//# sourceMappingURL=6351-20d2252c4c9840e0.js.map