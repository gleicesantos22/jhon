(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [54272], {
        800908: function(e, t, r) {
            "use strict";
            r.d(t, {
                c: function() {
                    return o
                }
            });
            var n = r(275271),
                a = r(282187),
                i = r.n(a),
                s = r(524430);
            let o = (0, n.forwardRef)((e, t) => {
                let {
                    buttonLabel: r,
                    className: a,
                    children: o,
                    circle: l,
                    disabled: c,
                    size: u,
                    variant: d,
                    ...f
                } = e, h = (0, n.useRef)(null);
                (0, n.useImperativeHandle)(t, () => h.current);
                let m = i()(a, "hrt-secondary-icon-button", `hrt-secondary-icon-button--${u}`, l && "hrt-secondary-icon-button--circle", `hrt-secondary-icon-button--${d||"default"}`, c && "hrt-base-button--disabled");
                return n.createElement(s.Y, {
                    "aria-label": r,
                    className: m,
                    disabled: "button" === f.as && c,
                    ref: h,
                    ..."button" !== f.as && c ? {
                        "aria-disabled": c
                    } : null,
                    ...f,
                    ..."a" === f.as && c ? {
                        href: ""
                    } : null
                }, o)
            });
            o.displayName = "SecondaryIconButton"
        },
        693821: function(e, t, r) {
            "use strict";
            r.d(t, {
                J: function() {
                    return n.J
                },
                c: function() {
                    return a.c
                }
            });
            var n = r(287808),
                a = r(800908)
        },
        254272: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                Reactions: function() {
                    return eo
                }
            });
            var n, a, i, s, o = r(552676),
                l = r(363456),
                c = r(693821),
                u = r(275271),
                d = r(637469);

            function f(e) {
                let {
                    ariaLabel: t,
                    children: r,
                    fontSize: n
                } = e;
                return (0, o.jsx)("span", {
                    "aria-label": t,
                    role: "img",
                    style: {
                        fontSize: n
                    },
                    children: r
                })
            }

            function h(e) {
                return ({
                    [d.sXQ.SENDING_LOVE]: (0, l.t)("Sending love"),
                    [d.sXQ.SYMPATHIES]: (0, l.t)("Sympathies"),
                    [d.sXQ.HOPE]: (0, l.t)("Hope"),
                    [d.sXQ.INSPIRING]: (0, l.t)("Inspiring"),
                    [d.sXQ.CARE]: (0, l.t)("Care"),
                    [d.sXQ.SUPPORTING_YOU]: (0, l.t)("Supporting you")
                })[e] ? ? ""
            }
            var m = r(616868),
                p = r.n(m);

            function x(e) {
                let {
                    size: t,
                    type: r,
                    ...n
                } = e, a = e => {
                    switch (e) {
                        case "LARGE":
                            return "2rem";
                        case "MEDIUM":
                            return "1.5rem";
                        default:
                            return "1rem"
                    }
                };
                switch (r) {
                    case d.sXQ.SENDING_LOVE:
                        return (0, o.jsx)(f, { ...n,
                            ariaLabel: h(d.sXQ.SENDING_LOVE),
                            fontSize: a(t),
                            children: "\uD83D\uDC9A"
                        });
                    case d.sXQ.SYMPATHIES:
                        return (0, o.jsx)(f, { ...n,
                            ariaLabel: h(d.sXQ.SYMPATHIES),
                            fontSize: a(t),
                            children: "\uD83D\uDC90"
                        });
                    case d.sXQ.HOPE:
                        return (0, o.jsx)(f, { ...n,
                            ariaLabel: h(d.sXQ.HOPE),
                            fontSize: a(t),
                            children: "\uD83D\uDE4F"
                        });
                    case d.sXQ.CARE:
                        return (0, o.jsx)(f, { ...n,
                            ariaLabel: h(d.sXQ.CARE),
                            fontSize: a(t),
                            children: "❤️‍\uD83E\uDE79"
                        });
                    case d.sXQ.SUPPORTING_YOU:
                        return (0, o.jsx)(f, { ...n,
                            ariaLabel: h(d.sXQ.SUPPORTING_YOU),
                            fontSize: a(t),
                            children: "\uD83D\uDC4F"
                        });
                    case d.sXQ.INSPIRING:
                        return (0, o.jsx)(f, { ...n,
                            ariaLabel: h(d.sXQ.INSPIRING),
                            fontSize: a(t),
                            children: (0, o.jsx)("span", {
                                className: p().sparkleEmojiFont,
                                children: "✨"
                            })
                        });
                    default:
                        return (0, o.jsx)(o.Fragment, {})
                }
            }(n = i || (i = {})).SMALL = "SMALL", n.MEDIUM = "MEDIUM", n.LARGE = "LARGE";
            var j = r(77655);
            let v = "reactions-modal-alert";

            function g(e, t, r) {
                document.dispatchEvent(new CustomEvent(e, {
                    detail: {
                        type: t,
                        message: r
                    }
                }))
            }
            var y = r(937627),
                R = r(24352),
                S = r(4205),
                E = r(920647);

            function b() {
                let [e] = u.useState(!1), t = (0, E.useRouter)(), {
                    data: r
                } = (0, d.Ps7)({
                    ssr: !1,
                    variables: {
                        slug: t.query.campaignUrl
                    }
                }), n = u.useMemo(() => [...r ? .fundraiser ? .reactionsSummary.availableReactions ? ? []].sort((e, t) => t.total - e.total), [r]);
                if (!r ? .fundraiser ? .reactionsSummary) return {
                    allowsReactions: !1,
                    availableReactions: [],
                    sortedReactions: [],
                    totalReactions: 0
                };
                let {
                    reactionsSummary: {
                        availableReactions: a,
                        totalReactions: i
                    }
                } = r.fundraiser;
                return {
                    allowsReactions: a.length > 0,
                    availableReactions: a,
                    hasFetched: e,
                    sortedReactions: n,
                    totalReactions: i
                }
            }
            var N = r(565569);
            let w = "reaction",
                _ = u.createContext(null);

            function I() {
                let e = u.useContext(_);
                if (!e) throw Error("useReactionsContext must be used within a ReactionsProvider");
                return e
            }

            function L(e) {
                let {
                    children: t
                } = e, {
                    getStoredReaction: r,
                    storeReaction: n,
                    removeStoredReaction: a
                } = {
                    getStoredReaction: () => {
                        let e = (0, N.St)(w);
                        if (e) try {
                            return JSON.parse(e)
                        } catch (e) {}
                        return null
                    },
                    storeReaction: e => {
                        (0, N.D9)(w, JSON.stringify(e))
                    },
                    removeStoredReaction: () => {
                        (0, N.lD)(w)
                    }
                }, [s] = (0, d.Os4)({
                    refetchQueries: ["GetReactionsSummary", "GetUserReactions"]
                }), {
                    fundId: c
                } = (0, j.g)(), {
                    isLoggedIn: f
                } = (0, R.jY)(), [h, m] = u.useState(null), [p, v] = u.useState(!1), E = (0, S.Ad)(), [I, L] = u.useState(!1), [M, G] = u.useState(!1), {
                    totalReactions: C
                } = b(), P = () => {
                    v(e => (e || O(), !e))
                }, k = e => {
                    E.setModal({
                        isOpen: !0,
                        title: (0, l.t)("Show your support & build momentum for this fundraiser"),
                        referrer: S.PW.campaignReaction,
                        subHeaderContent: (0, o.jsx)(x, {
                            "data-chromatic": "ignore",
                            size: i.LARGE,
                            type: e ? ? d.sXQ.SENDING_LOVE
                        })
                    })
                }, O = () => {
                    m(null)
                }, A = e => {
                    if (m(e), !f) {
                        P(), k(e.reactionValue), n(e);
                        return
                    }
                    s({
                        variables: {
                            input: {
                                fundId: String(c),
                                reactionOptionId: e.id
                            }
                        },
                        onError: () => {
                            g(y.v, "error", (0, l.t)("Your reaction couldn’t be added. Please try again."))
                        }
                    }), a()
                };
                return u.useEffect(() => {
                    if (f) {
                        let e = r();
                        e && (G(!0), A(e))
                    }
                }, [f, h]), u.useEffect(() => {
                    0 === C && L(!1)
                }, [C]), (0, o.jsx)(_.Provider, {
                    value: {
                        onReactionSelected: A,
                        resetReactionSelection: O,
                        selection: h,
                        showReactionOptionsList: p,
                        showReactionSummaryModal: I,
                        toggleReactionOptionsList: P,
                        toggleReactionSignInModal: k,
                        toggleReactionSummaryModal: () => {
                            L(e => !e)
                        },
                        savingStoredReaction: M
                    },
                    children: t
                })
            }

            function M() {
                let {
                    toggleReactionOptionsList: e
                } = I();
                return (0, o.jsx)(c.c, {
                    as: "button",
                    buttonLabel: (0, l.t)("Show your support for this GoFundMe"),
                    circle: !0,
                    "data-tracking-id": "display reactions",
                    onClick: e,
                    size: "large",
                    children: (0, o.jsx)(c.J, {
                        name: "add-reaction",
                        size: "default"
                    })
                })
            }
            var G = r(618158);

            function C(e) {
                let {
                    viewId: t,
                    when: r
                } = e, {
                    hasFetched: n
                } = b(), a = (0, G.Ke)();
                u.useEffect(() => {
                    n && r && a("Component Viewed", G.Bs.Other, {
                        page_url: window.location.href,
                        surface: "fundraiser",
                        tracking_id: t
                    })
                }, [n, r])
            }
            var P = r(282187),
                k = r.n(P),
                O = r(912172),
                A = r(770762),
                D = r(41928);

            function F(e) {
                let {
                    children: t,
                    options: r
                } = e, n = (0, A.useReducedMotion)(), a = (0, A.useSpring)({
                    config: A.config.stiff,
                    from: {
                        opacity: 0,
                        transform: "translateY(100%)"
                    },
                    immediate: n ? ? !1,
                    to: {
                        opacity: 1,
                        transform: "translateY(0%)"
                    },
                    ...r
                });
                return (0, o.jsx)(A.animated.div, {
                    style: a,
                    children: t
                })
            }
            let Q = {
                Appear: function(e) {
                    let {
                        children: t
                    } = e, r = (0, A.useReducedMotion)(), n = (0, A.useSpring)({
                        config: {
                            tension: 500,
                            friction: 12
                        },
                        from: {
                            transform: "scale(50%)"
                        },
                        immediate: r ? ? !1,
                        to: {
                            transform: "scale(100%)"
                        }
                    });
                    return (0, o.jsx)(A.animated.div, {
                        style: n,
                        children: t
                    })
                },
                FadeIn: function(e) {
                    let {
                        children: t
                    } = e, r = (0, A.useReducedMotion)(), n = (0, A.useSpring)({
                        from: {
                            opacity: 0
                        },
                        immediate: r ? ? !1,
                        to: {
                            opacity: 1
                        }
                    });
                    return (0, o.jsx)(A.animated.span, {
                        style: n,
                        children: t
                    })
                },
                FloatOut: function(e) {
                    let {
                        children: t,
                        onRest: r,
                        start: n
                    } = e, a = (0, A.useReducedMotion)(), [i, s] = (0, A.useSpring)(() => ({
                        config: {
                            duration: 2e3
                        },
                        from: {
                            transform: "translateY(0%)"
                        },
                        onRest: r
                    })), [l, c] = (0, A.useSpring)(() => ({
                        config: {
                            duration: 1e3
                        },
                        from: {
                            opacity: 1
                        }
                    })), d = () => {
                        s.start({
                            immediate: a || D.G6,
                            transform: "translateY(-400px)"
                        }), c.start({
                            delay: 1e3,
                            immediate: a || D.G6,
                            opacity: 0
                        })
                    };
                    return u.useEffect(() => {
                        n && d()
                    }, [d]), (0, o.jsx)(A.animated.div, {
                        onClick: d,
                        style: { ...l,
                            ...i
                        },
                        children: t
                    })
                },
                GrowOnHover: function(e) {
                    let {
                        children: t,
                        done: r
                    } = e, n = (0, A.useReducedMotion)(), [a, i] = (0, A.useSpring)(() => ({
                        config: {
                            duration: 100
                        },
                        from: {
                            transform: "scale(100%)",
                            transformOrigin: "bottom"
                        },
                        immediate: n ? ? !1
                    }));
                    return (0, o.jsx)(A.animated.div, {
                        onMouseEnter: () => !r && i.start({
                            to: {
                                transform: "scale(135%)"
                            }
                        }),
                        onMouseLeave: () => !r && i.start({
                            to: {
                                transform: "scale(100%)"
                            }
                        }),
                        style: a,
                        children: t
                    })
                },
                SlideUpList: function(e) {
                    let {
                        children: t,
                        onRest: r
                    } = e;
                    return (0, o.jsx)(o.Fragment, {
                        children: u.Children.map(t, (e, t) => (0, o.jsx)(F, {
                            options: {
                                delay: 50 * t,
                                onRest: r
                            },
                            children: e
                        }, t))
                    })
                }
            };
            var T = r(76694),
                U = r(736422),
                X = r(593418),
                V = r.n(X);

            function H(e) {
                let {
                    aligned: t,
                    children: r
                } = e, n = (0, U.ac)(U.zP.SMALL_ONLY), [a, i] = u.useState(0), s = (0, T.R)(e => {
                    e && i(e.getBoundingClientRect().width)
                }, []);
                return (0, o.jsx)("div", {
                    className: `${V().hoverTag} hrt-surface-neutral-strong hrt-position-fixed hrt-pl-1 hrt-pr-1 hrt-rounded-full hrt-text-on-strong hrt-text-body-sm`,
                    ref: s,
                    style: {
                        left: function() {
                            let e = `calc(50% - ${a/2}px)`;
                            if (!n) return e;
                            switch (t) {
                                case "LEFT":
                                    return "-12px";
                                case "RIGHT":
                                    return `${-a+48}px`;
                                default:
                                    return e
                            }
                        }()
                    },
                    children: r
                })
            }

            function Y(e) {
                let {
                    index: t,
                    length: r,
                    reaction: n
                } = e, {
                    isLoggedIn: a
                } = (0, R.jY)(), {
                    onReactionSelected: l,
                    selection: c,
                    toggleReactionOptionsList: d
                } = I(), [f, m] = u.useState(!1), p = c ? .reactionValue === n.reactionValue;
                return (0, o.jsx)("span", {
                    style: {
                        opacity: null === c || p ? "1" : "0"
                    },
                    children: (0, o.jsxs)(Q.FloatOut, {
                        onRest: () => {
                            a && d()
                        },
                        children: [(f || p) && (0, o.jsx)(Q.FadeIn, {
                            children: (0, o.jsx)(H, {
                                aligned: 0 === t ? s.LEFT : t === r - 1 ? s.RIGHT : s.CENTER,
                                children: h(n.reactionValue)
                            })
                        }), (0, o.jsx)(Q.GrowOnHover, {
                            done: !!c,
                            children: (0, o.jsx)("button", {
                                "data-tracking-id": `reaction added: ${n.reactionValue}`,
                                onClick: () => l(n),
                                onMouseEnter: () => m(!0),
                                onMouseLeave: () => m(!1),
                                style: {
                                    background: "transparent"
                                },
                                children: (0, o.jsx)(x, {
                                    size: i.LARGE,
                                    type: n.reactionValue
                                })
                            })
                        })]
                    })
                })
            }(a = s || (s = {})).LEFT = "LEFT", a.CENTER = "CENTER", a.RIGHT = "RIGHT";
            var z = r(238703),
                $ = r.n(z);

            function B() {
                let {
                    selection: e,
                    showReactionOptionsList: t,
                    toggleReactionOptionsList: r
                } = I(), {
                    availableReactions: n
                } = b(), [a, i] = u.useState(!0), s = u.useRef(null);
                return ((0, O.h)(s, r, [t]), u.useEffect(() => {
                    t && i(!0)
                }, [t]), t) ? (0, o.jsx)("div", {
                    className: k()($().optionsList, {
                        [$().shadow]: !e,
                        [$().overflowHidden]: a,
                        "hrt-surface-default": !e
                    }, "hrt-align-center hrt-disp-flex hrt-justify-around hrt-position-absolute hrt-pl-2 hrt-pr-2"),
                    ref: s,
                    children: (0, o.jsx)(Q.SlideUpList, {
                        onRest: () => i(!1),
                        children: n.map((e, t, r) => (0, o.jsx)("span", {
                            className: "hrt-pl-1 hrt-pr-1",
                            children: (0, o.jsx)(Y, {
                                index: t,
                                length: r.length,
                                reaction: e
                            })
                        }, e.id))
                    })
                }) : null
            }
            var J = r(9834),
                q = r(823780),
                W = r(923247),
                K = r(991280),
                Z = r(934821),
                ee = r(885599),
                et = r.n(ee);

            function er(e) {
                let {
                    includeRemoveButton: t,
                    reaction: r
                } = e, [n, a] = u.useState(!1), {
                    personName: s,
                    reactionOptionId: c,
                    reactionValue: f
                } = r, {
                    removeReaction: h
                } = function(e) {
                    let {
                        fundId: t
                    } = (0, j.g)(), [r] = (0, d.d6Z)({
                        variables: {
                            input: {
                                reactionOptionId: e,
                                fundId: `${t}`
                            }
                        },
                        refetchQueries: ["GetAllReactions", "GetReactionsSummary", "GetUserReactions"]
                    });
                    return {
                        removeReaction: r
                    }
                }(c), m = () => {
                    g(v, "error", (0, l.t)("Your reaction couldn’t be removed. Please try again.")), a(!1)
                };
                return (0, o.jsxs)("li", {
                    className: "hrt-disp-flex hrt-align-center",
                    children: [(0, o.jsxs)("div", {
                        className: "hrt-disp-flex hrt-align-end",
                        children: [(0, o.jsx)(K.q, {
                            kind: "default"
                        }), (0, o.jsx)("span", {
                            className: `${et().reactionAvatar} hrt-surface-neutral-extra-subtle hrt-disp-flex hrt-justify-center hrt-rounded-full`,
                            children: (0, o.jsx)(x, {
                                size: i.SMALL,
                                type: f
                            })
                        })]
                    }), (0, o.jsx)("div", {
                        className: "hrt-pl-1 hrt-width-full",
                        children: (s || "").replace(/&amp;/g, "&")
                    }), t && (0, o.jsx)(Z.C, {
                        as: "button",
                        className: "hrt-px-1",
                        "data-tracking-id": "remove reactions",
                        disabled: n,
                        onClick: () => {
                            a(!0), h({
                                onError: m
                            })
                        },
                        pending: n,
                        children: (0, l.t)("Remove")
                    })]
                })
            }

            function en(e) {
                let {
                    reactions: t,
                    userReactions: r
                } = e, n = new Set(r.map(e => e.id)), a = t.filter(e => !n.has(e.id));
                return (0, o.jsxs)("ul", {
                    className: `${et().reactionsList} hrt-list-unstyled hrt-disp-flex  hrt-flex-dir-column`,
                    children: [r.map(e => (0, o.jsx)(er, {
                        reaction: e,
                        includeRemoveButton: !0
                    }, e.id)), a.map(e => (0, o.jsx)(er, {
                        reaction: e
                    }, e.id))]
                })
            }

            function ea() {
                let {
                    showReactionSummaryModal: e,
                    toggleReactionSummaryModal: t
                } = I(), {
                    totalReactions: r
                } = b(), {
                    fetchMoreReactions: n,
                    hasFetchedAllReactions: a,
                    reactions: i
                } = function(e) {
                    let t = (0, E.useRouter)(),
                        r = `${t.query.campaignUrl}`,
                        {
                            data: n,
                            fetchMore: a
                        } = (0, d.rWi)({
                            fetchPolicy: "network-only",
                            onError: () => {
                                g(v, "error", (0, l.t)("We were unable to load all reactions. Please try again."))
                            },
                            skip: e ? .skip,
                            variables: {
                                first: 10,
                                slug: r
                            }
                        });
                    if (!n ? .fundraiser ? .allReactions) return {
                        reactions: []
                    };
                    let {
                        edges: i,
                        pageInfo: s
                    } = n.fundraiser.allReactions, o = {
                        id: "",
                        personName: "",
                        reactionOptionId: "",
                        reactionValue: d.sXQ.CARE
                    };
                    return {
                        fetchMoreReactions: () => a({
                            variables: {
                                after: s.endCursor
                            }
                        }),
                        hasFetchedAllReactions: !s.hasNextPage,
                        reactions: i ? .filter(e => e ? .node ? .personName !== null).map(e => e ? .node ? ? o) ? ? []
                    }
                }({
                    skip: !e
                }), {
                    userReactions: s
                } = function(e) {
                    let {
                        isLoggedIn: t
                    } = (0, R.jY)(), r = (0, E.useRouter)(), n = `${r.query.campaignUrl}`, {
                        data: a
                    } = (0, d.wN4)({
                        fetchPolicy: "network-only",
                        onError: () => {
                            g(v, "error", (0, l.t)("We were unable to load all reactions. Please try again."))
                        },
                        skip: !t || e ? .skip,
                        variables: {
                            slug: n
                        }
                    });
                    return a ? .viewer ? .reactionsForFundraiser ? {
                        userReactions: a.viewer.reactionsForFundraiser
                    } : {
                        userReactions: []
                    }
                }({
                    skip: !e
                });
                return C({
                    viewId: "reactions_list",
                    when: e
                }), (0, G.XP)({
                    trackingId: e ? "reactions modal" : ""
                }), (0, o.jsx)(q.R, {
                    dataTestId: "reaction-summary-modal",
                    heading: (0, o.jsx)("h2", {
                        className: "hrt-mb-0",
                        children: (0, l.t)("{{count}} reaction", {
                            count: r,
                            defaultValue_plural: "{{count}} reactions"
                        })
                    }),
                    isOpen: e,
                    onClose: t,
                    subHeading: (0, o.jsx)("div", {
                        children: (0, l.t)("Join the community and show your support on this GoFundMe.")
                    }),
                    children: n && !!i && (0, o.jsxs)(W._, {
                        ajaxOnScroll: n,
                        buttonText: (0, l.t)("Show more"),
                        itemCount: r,
                        maxItems: 10,
                        showMore: !a,
                        children: [(0, o.jsx)("div", {
                            "data-view-id": J.vc.campaign.dataViewId,
                            children: (0, o.jsx)(y.Y, {
                                overrideDisplayEvent: v
                            })
                        }), (0, o.jsx)(en, {
                            reactions: i,
                            userReactions: s
                        })]
                    })
                })
            }
            var ei = r(96841);

            function es() {
                let {
                    sortedReactions: e,
                    totalReactions: t
                } = b(), {
                    selection: r,
                    toggleReactionSummaryModal: n,
                    savingStoredReaction: a
                } = I(), [s, l] = u.useState(!1);
                return (0, o.jsxs)(ei.C, {
                    "aria-label": `${t} reactions`,
                    as: "button",
                    className: k()(et().reactionsButton, "hrt-align-center hrt-disp-flex hrt-rounded-full"),
                    "data-tracking-id": "view reactions",
                    onClick: n,
                    children: [e.map(e => e.total > 0 && (0, o.jsx)("div", {
                        className: et().lrPadding,
                        children: e.reactionValue === r ? .reactionValue ? (0, o.jsx)(o.Fragment, {
                            children: (0, o.jsxs)("div", {
                                style: {
                                    position: "relative"
                                },
                                children: [(0, o.jsx)(Q.Appear, {
                                    children: (0, o.jsx)(x, {
                                        size: i.MEDIUM,
                                        type: e.reactionValue
                                    })
                                }), a && !s && (0, o.jsx)("div", {
                                    style: {
                                        position: "absolute",
                                        top: 0,
                                        left: 0
                                    },
                                    children: (0, o.jsx)(Q.FloatOut, {
                                        onRest: () => l(!0),
                                        start: a,
                                        children: (0, o.jsx)(Q.Appear, {
                                            children: (0, o.jsx)(x, {
                                                size: i.MEDIUM,
                                                type: e.reactionValue
                                            })
                                        })
                                    })
                                })]
                            })
                        }) : (0, o.jsx)(x, {
                            size: i.MEDIUM,
                            type: e.reactionValue
                        })
                    }, e.reactionValue)), (0, o.jsx)("div", {
                        className: `${et().lrPadding} hrt-underline`,
                        children: t
                    })]
                })
            }

            function eo(e) {
                let {
                    label: t
                } = e, {
                    allowsReactions: r
                } = b();
                return (C({
                    viewId: "reactions_enabled",
                    when: r
                }), r) ? (0, o.jsx)(L, {
                    children: (0, o.jsx)(el, {
                        label: t
                    })
                }) : null
            }

            function el(e) {
                let {
                    label: t
                } = e, {
                    toggleReactionOptionsList: r
                } = I(), {
                    totalReactions: n
                } = b(), a = n > 0;
                return (0, o.jsxs)("div", {
                    className: "hrt-position-relative hrt-pt-4",
                    children: [(0, o.jsxs)("div", {
                        className: "hrt-disp-flex hrt-align-center",
                        children: [(0, o.jsx)("span", {
                            id: "add-reaction",
                            style: {
                                paddingRight: "4px"
                            },
                            children: (0, o.jsx)(M, {})
                        }), a ? (0, o.jsx)(es, {}) : (0, o.jsx)("label", {
                            htmlFor: "add-reaction",
                            onClick: r,
                            children: t ? ? (0, l.t)("Show your support for this GoFundMe")
                        })]
                    }), (0, o.jsx)(B, {}), a && (0, o.jsx)(ea, {})]
                })
            }
        },
        912172: function(e, t, r) {
            "use strict";
            r.d(t, {
                h: function() {
                    return a
                }
            });
            var n = r(275271);

            function a(e, t, r) {
                n.useEffect(() => {
                    function r(r) {
                        e.current ? .contains(r.target) || t()
                    }
                    return e.current && document.addEventListener("mousedown", r), () => {
                        document.removeEventListener("mousedown", r)
                    }
                }, r)
            }
        },
        593418: function(e) {
            e.exports = {
                hoverTag: "hover-tag_hoverTag__uNW3t"
            }
        },
        238703: function(e) {
            e.exports = {
                optionsList: "reaction-options-list_optionsList__UA_d8",
                overflowHidden: "reaction-options-list_overflowHidden__fjTzK",
                shadow: "reaction-options-list_shadow__vUb_1"
            }
        },
        885599: function(e) {
            e.exports = {
                reactionAvatar: "reaction-summary-modal_reactionAvatar__C1Qyq",
                reactionsList: "reaction-summary-modal_reactionsList__tjvmU",
                lrPadding: "reaction-summary-modal_lrPadding__Dkk2s",
                reactionsButton: "reaction-summary-modal_reactionsButton__brzPG"
            }
        },
        616868: function(e) {
            e.exports = {
                sparkleEmojiFont: "reactions_sparkleEmojiFont__GGoSA"
            }
        }
    }
]);
//# sourceMappingURL=54272.1f581c3d196312f3.js.map