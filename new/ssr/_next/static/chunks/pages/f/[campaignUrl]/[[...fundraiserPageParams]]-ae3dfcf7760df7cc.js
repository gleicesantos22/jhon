(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [29133], {
        867060: function(e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/f/[campaignUrl]/[[...fundraiserPageParams]]", function() {
                return n(842015)
            }])
        },
        32206: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return a
                }
            });
            var r = n(275271);
            class a extends r.Component {
                constructor(e) {
                    super(e), this.state = {
                        on: this.getOn({
                            on: this.props.defaultOn
                        })
                    }, this.getToggleProps = this.getToggleProps.bind(this), this.getOn = this.getOn.bind(this), this.toggle = this.toggle.bind(this)
                }
                getOn() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.state;
                    return void 0 !== this.props.on ? this.props.on : e.on
                }
                toggle() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : !this.state.on,
                        t = e !== this.getOn() ? () => {
                            this.props.toggleCallBack && this.props.toggleCallBack(e)
                        } : void 0;
                    this.setState({
                        on: e
                    }, t)
                }
                getToggleProps() {
                    return {
                        on: this.getOn(),
                        setOff: () => {
                            this.toggle(!1)
                        },
                        setOn: () => {
                            this.toggle(!0)
                        },
                        toggle: () => {
                            this.toggle()
                        }
                    }
                }
                render() {
                    let {
                        children: e
                    } = this.props;
                    return e ? e(this.getToggleProps()) : void 0
                }
            }
            a.defaultProps = {
                defaultOn: !1
            }
        },
        312802: function(e, t, n) {
            "use strict";
            n.d(t, {
                A: function() {
                    return s
                }
            });
            var r = n(275271),
                a = n(282187),
                i = n.n(a),
                o = n(825040);
            let s = (0, r.forwardRef)((e, t) => {
                let {
                    className: n,
                    children: a,
                    color: s = "gray-dark",
                    disabled: l,
                    pending: c,
                    pendingAltText: d,
                    variant: u = "underlined",
                    ...m
                } = e, h = (0, r.useRef)(null);
                (0, r.useImperativeHandle)(t, () => h.current);
                let f = i()(n, "hrt-text-button", `hrt-text-button--${s}`, `hrt-text-button--${u}`, {
                    "hrt-text-button--pending": c
                });
                return r.createElement("button", {
                    className: f,
                    disabled: l || c,
                    ref: h,
                    ...m
                }, "string" == typeof a ? r.createElement("span", null, a) : a, c && r.createElement(o.x, {
                    altText: d,
                    className: "hrt-position-absolute",
                    color: "gray"
                }))
            });
            s.displayName = "TextButton"
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
                i = n.n(a);
            let o = e => {
                let {
                    className: t,
                    gutterPull: n,
                    type: a
                } = e, o = i()(t, "hrt-rule", `hrt-rule--${a}`, {
                    "hrt-rule--pull": n && "horizontal" === a
                });
                return r.createElement("div", {
                    className: o
                })
            };
            o.displayName = "Rule"
        },
        224252: function(e, t, n) {
            "use strict";
            n.d(t, {
                $: function() {
                    return s
                }
            });
            var r = n(275271),
                a = n(282187),
                i = n.n(a),
                o = n(380480);
            let s = e => {
                let {
                    className: t,
                    children: n,
                    ...a
                } = e, s = i()(t, "hrt-footer");
                return r.createElement("footer", {
                    className: s,
                    ...a
                }, n.map((e, t) => r.createElement(r.Fragment, {
                    key: t
                }, r.createElement(o.$, {
                    className: "hrt-mt-0 hrt-mb-0",
                    type: "horizontal"
                }), e)))
            };
            s.displayName = "Footer"
        },
        296379: function(e, t, n) {
            "use strict";
            n.d(t, {
                P: function() {
                    return o
                }
            });
            var r = n(275271),
                a = n(282187),
                i = n.n(a);
            let o = e => {
                let {
                    className: t,
                    children: n
                } = e, a = i()(t, "hrt-footer-legal");
                return r.createElement("div", {
                    className: a
                }, n)
            };
            o.displayName = "FooterLegal"
        },
        541940: function(e, t, n) {
            "use strict";
            n.d(t, {
                c: function() {
                    return h
                }
            });
            var r = n(275271),
                a = n(282187),
                i = n.n(a),
                o = n(954589),
                s = n(646124);
            let l = (0, r.forwardRef)((e, t) => {
                let {
                    className: n,
                    children: a,
                    title: i
                } = e;
                return r.createElement("div", {
                    className: n,
                    ref: t
                }, r.createElement(s.x, {
                    as: "h3",
                    className: "hrt-footer-list-header",
                    fontWeight: "bold",
                    variant: "body-md"
                }, i), r.createElement("ul", {
                    className: "hrt-list-unstyled"
                }, a))
            });
            l.displayName = "FooterMain.Column";
            var c = n(934821),
                d = n(287808);
            let u = (0, r.forwardRef)((e, t) => {
                let {
                    className: n,
                    children: a,
                    title: o
                } = e, s = (0, r.useRef)(null), l = i()(n, "hrt-footer-resources"), [u, m] = (0, r.useState)(!1), h = Math.ceil(r.Children.count(a) / 4);
                return r.createElement("div", {
                    className: l,
                    onKeyDown: e => {
                        var t;
                        "Escape" === e.key && (m(!1), null === (t = s.current) || void 0 === t || t.focus())
                    },
                    ref: t
                }, r.createElement(c.C, {
                    "aria-controls": "footer-resources-list",
                    "aria-expanded": u,
                    "aria-haspopup": "true",
                    as: "button",
                    className: "hrt-footer-resources-button",
                    onClick: () => m(!u),
                    ref: s
                }, o, r.createElement(d.J, {
                    className: "hrt-ml-1",
                    name: u ? "chevron-up" : "chevron-down",
                    size: "small"
                })), r.createElement("ul", {
                    "aria-hidden": !u,
                    className: i()(u && "hrt-footer-resources-list--expanded", "hrt-footer-resources-list hrt-list-unstyled"),
                    id: "footer-resources-list",
                    style: {
                        gridTemplateRows: `repeat(${h}, auto)`,
                        visibility: u ? "visible" : "hidden"
                    }
                }, a))
            });
            u.displayName = "FooterMain.MoreResources";
            let m = e => {
                let {
                    className: t,
                    children: n
                } = e, a = i()(t, "hrt-footer-main");
                return r.createElement(o.W, null, r.createElement("div", {
                    className: a
                }, n))
            };
            m.displayName = "FooterMain";
            let h = Object.assign(m, {
                Column: l,
                MoreResources: u
            })
        },
        217834: function(e, t, n) {
            "use strict";
            n.d(t, {
                k: function() {
                    return s
                }
            });
            var r = n(275271),
                a = n(282187),
                i = n.n(a),
                o = n(954589);
            let s = e => {
                let {
                    className: t,
                    children: n
                } = e, a = i()(t, "hrt-footer-secondary");
                return r.createElement(o.W, null, r.createElement("div", {
                    className: a
                }, n))
            };
            s.displayName = "FooterSecondary"
        },
        296279: function(e, t, n) {
            "use strict";
            n.d(t, {
                w: function() {
                    return o
                }
            });
            var r = n(275271),
                a = n(282187),
                i = n.n(a);
            let o = e => {
                let {
                    className: t,
                    children: n
                } = e, a = i()(t, "hrt-footer-social");
                return r.createElement("div", {
                    className: a
                }, n)
            };
            o.displayName = "FooterSocial"
        },
        285628: function(e, t, n) {
            "use strict";
            n.d(t, {
                V: function() {
                    return s
                }
            });
            var r = n(275271),
                a = n(691109),
                i = n.n(a),
                o = n(736348);
            let s = e => {
                let {
                    name: t,
                    ...n
                } = e;
                return r.createElement(o.s, {
                    href: `${i()}#${t}`,
                    ...n
                })
            };
            s.displayName = "CircleFlag"
        },
        672897: function(e, t, n) {
            "use strict";
            n.d(t, {
                O: function() {
                    return s
                }
            });
            var r = n(275271),
                a = n(282187),
                i = n.n(a),
                o = n(524430);
            let s = (0, r.forwardRef)((e, t) => {
                let {
                    children: n,
                    className: a,
                    index: s,
                    isActive: l = !1,
                    superScript: c,
                    tabStyle: d = "underline",
                    ...u
                } = e, m = (0, r.useId)(), h = i()(a, "hrt-tab", `hrt-tab--${d}`, {
                    "hrt-tab--active": l
                });
                return r.createElement(o.Y, {
                    className: h,
                    id: `${m}-tab-${s}`,
                    ref: t,
                    tabIndex: l ? 0 : -1,
                    ...u
                }, r.createElement("span", {
                    className: "hrt-tab-title"
                }, n), c && r.createElement("span", {
                    className: "hrt-tab-superscript"
                }, c))
            });
            s.displayName = "Tab"
        },
        738450: function(e, t, n) {
            "use strict";
            n.d(t, {
                U: function() {
                    return a.U
                },
                b: function() {
                    return r.b
                }
            });
            var r = n(936956),
                a = n(19008)
        },
        264751: function(e, t, n) {
            "use strict";
            n.d(t, {
                q: function() {
                    return r.q
                }
            });
            var r = n(991280)
        },
        530821: function(e, t, n) {
            "use strict";
            n.d(t, {
                b3: function() {
                    return a.b
                },
                qE: function() {
                    return r.q
                },
                rU: function() {
                    return s.r
                },
                sG: function() {
                    return o.s
                },
                yn: function() {
                    return i.y
                }
            });
            var r = n(991280),
                a = n(612069),
                i = n(170110),
                o = n(253765),
                s = n(527795)
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
        665232: function(e, t, n) {
            "use strict";
            n.d(t, {
                Av: function() {
                    return o.A
                },
                JO: function() {
                    return r.J
                },
                kq: function() {
                    return i.k
                },
                xg: function() {
                    return a.x
                }
            });
            var r = n(287808),
                a = n(825040),
                i = n(708349),
                o = n(312802)
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
        844759: function(e, t, n) {
            "use strict";
            n.d(t, {
                U: function() {
                    return a.U
                },
                r: function() {
                    return r.r
                }
            });
            var r = n(527795),
                a = n(92964)
        },
        51495: function(e, t, n) {
            "use strict";
            n.d(t, {
                fe: function() {
                    return a.f
                },
                mz: function() {
                    return i.m
                },
                u_: function() {
                    return r.u
                },
                xB: function() {
                    return o.x
                }
            });
            var r = n(474364),
                a = n(138934),
                i = n(448004),
                o = n(4328)
        },
        788050: function(e, t, n) {
            "use strict";
            n.d(t, {
                h: function() {
                    return r.h
                }
            });
            var r = n(781998)
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
        403348: function(e, t, n) {
            "use strict";
            n.d(t, {
                $: function() {
                    return r.$
                }
            });
            var r = n(380480)
        },
        96841: function(e, t, n) {
            "use strict";
            n.d(t, {
                C: function() {
                    return r.C
                }
            });
            var r = n(934821)
        },
        520820: function(e, t, n) {
            "use strict";
            n.d(t, {
                A: function() {
                    return r.A
                }
            });
            var r = n(312802)
        },
        913849: function(e, t, n) {
            "use strict";
            n.d(t, {
                n: function() {
                    return r.n
                }
            });
            var r = n(842838)
        },
        254579: function(e, t, n) {
            "use strict";
            n.d(t, {
                _: function() {
                    return r._
                }
            });
            var r = n(274175)
        },
        842015: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                __N_SSP: function() {
                    return l
                },
                default: function() {
                    return c
                }
            });
            var r = n(552676);
            n(275271);
            var a = n(982630),
                i = n(665477),
                o = n(689687),
                s = n(612822),
                l = !0;

            function c(e) {
                return (0, s.v)(), (0, r.jsx)(s.C, {
                    searchQueryId: e.searchQueryId
                })
            }
            c.getLayout = function(e) {
                return (0, r.jsx)(i.d, {
                    children: (0, r.jsx)(a.Uj, {
                        coorganizerRebrandExperiment: e.props.coorganizerRebrandExperiment,
                        donateCtaExperiment: e.props.donateCtaExperiment,
                        earlyStateExperiment: e.props.earlyStateExperiment,
                        emptyStateExperiment: e.props.emptyStateExperiment,
                        goalBarsRedesignExperiment: e.props.goalBarsRedesignExperiment,
                        initialStateSerialized: e.props.donorJourneyNewStateSerialized,
                        milestone1MobileExperiment: e.props.milestone1MobileExperiment,
                        milestoneDesktopExperiment: e.props.milestoneDesktopExperiment,
                        projectPinkExperiment: e.props.projectPinkExperiment,
                        recurringIsDefaultExperiment: e.props.recurringIsDefaultExperiment,
                        recurringNudgeExperiment: e.props.recurringNudgeExperiment,
                        children: (0, r.jsx)(o.e, {
                            children: e
                        })
                    })
                })
            }
        },
        634111: function(e, t, n) {
            "use strict";
            n.d(t, {
                AC: function() {
                    return c
                },
                I1: function() {
                    return d
                },
                QK: function() {
                    return u
                },
                aQ: function() {
                    return s
                },
                ee: function() {
                    return m
                },
                j4: function() {
                    return h
                }
            });
            var r, a, i = n(923509);
            (r = a || (a = {})).DONOR = "Donor", r.ORGANIZER = "Organizer", r.SUPPORTER = "Supporter";
            let o = {
                    o: "organizer",
                    d: "donor",
                    s: "supporter"
                },
                s = {
                    Organizer: "o",
                    Donor: "d",
                    Supporter: "s"
                };
            i.m.CopyLink, i.m.Email, i.m.Facebook, i.m.General, i.m.Instagram, i.m.InstagramStory, i.m.Linkedin, i.m.Messenger, i.m.More, i.m.Nextdoor, i.m.QrCode, i.m.Sms, i.m.Twitter, i.m.WhatsApp;
            let l = {
                    cl: i.m.CopyLink,
                    e: i.m.Email,
                    fb: i.m.Facebook,
                    fm: i.m.Messenger,
                    m: i.m.More,
                    ig: i.m.Instagram,
                    igs: i.m.InstagramStory,
                    li: i.m.Linkedin,
                    nd: i.m.Nextdoor,
                    sms: i.m.Sms,
                    wa: i.m.WhatsApp,
                    qr: i.m.QrCode,
                    x: i.m.Twitter
                },
                c = {
                    [i.m.CopyLink]: "cl",
                    [i.m.Email]: "e",
                    [i.m.Facebook]: "fb",
                    [i.m.General]: "igs",
                    [i.m.Messenger]: "fm",
                    [i.m.More]: "m",
                    [i.m.Instagram]: "ig",
                    [i.m.InstagramStory]: "igs",
                    [i.m.Linkedin]: "li",
                    [i.m.Nextdoor]: "nd",
                    [i.m.Sms]: "sms",
                    [i.m.WhatsApp]: "wa",
                    [i.m.QrCode]: "qr",
                    [i.m.Twitter]: "x"
                };

            function d(e) {
                return e in o
            }

            function u(e) {
                return e in l
            }

            function m(e) {
                return e in s
            }

            function h(e) {
                return e in c
            }
        },
        823780: function(e, t, n) {
            "use strict";
            n.d(t, {
                R: function() {
                    return d
                }
            });
            var r = n(552676);
            n(275271);
            var a = n(282187),
                i = n.n(a),
                o = n(51495),
                s = n(363456),
                l = n(851634),
                c = n.n(l);

            function d(e) {
                let {
                    children: t,
                    dataTestId: n,
                    dataViewId: a,
                    footer: l,
                    heading: d,
                    isOpen: u,
                    onClose: m,
                    subHeading: h,
                    willClickOutsideClose: f = !0
                } = e;
                if (!u) return null;
                let p = i()(c().headerTitleRow, {
                    "hrt-justify-end": d
                });
                return (0, r.jsxs)(o.u_, {
                    className: c().modal,
                    "data-testid": n,
                    "data-view-id": a,
                    hasMaxHeight: !0,
                    onClose: m,
                    willClickOutsideClose: f,
                    fullHeightOnMobile: !0,
                    children: [(0, r.jsx)(o.xB, {
                        children: (0, r.jsxs)("div", {
                            className: c().header,
                            children: [(0, r.jsxs)("div", {
                                className: p,
                                children: [d && (0, r.jsx)("div", {
                                    className: c().headerTitle,
                                    children: d
                                }), (0, r.jsx)(o.xB.CloseButton, {
                                    as: "button",
                                    buttonLabel: (0, s.t)("Close dialog")
                                })]
                            }), h]
                        })
                    }), (0, r.jsx)(o.fe, {
                        children: t
                    }), l && (0, r.jsx)(o.mz, {
                        className: "hrt-pt-2 hrt-pb-2",
                        children: l
                    })]
                })
            }
        },
        16552: function(e, t, n) {
            "use strict";
            n.d(t, {
                i: function() {
                    return c
                }
            });
            var r = n(552676),
                a = n(282187),
                i = n.n(a),
                o = n(403348),
                s = n(442212),
                l = n.n(s);
            let c = e => {
                let {
                    className: t
                } = e;
                return (0, r.jsx)(o.$, {
                    className: i()(l().divider, t),
                    type: "horizontal"
                })
            }
        },
        923247: function(e, t, n) {
            "use strict";
            n.d(t, {
                _: function() {
                    return m
                }
            });
            var r = n(552676),
                a = n(275271),
                i = n(282187),
                o = n.n(i),
                s = n(650863),
                l = n(665232),
                c = n(993723),
                d = n.n(c);
            class u extends a.Component {
                render() {
                    let {
                        dataElementId: e,
                        children: t,
                        header: n,
                        headerId: a,
                        includeShowMoreButton: i,
                        itemCount: c,
                        buttonText: u,
                        onFilter: m,
                        className: h,
                        showMore: f,
                        showCount: p
                    } = this.props, g = o()(h, "o-expansion-list-wrapper"), x = !1 !== p && c && c > 0 ? `(${c})` : void 0;
                    return (0, r.jsxs)("div", {
                        className: g,
                        children: [n && (0, r.jsx)(r.Fragment, {
                            children: (0, r.jsxs)("div", {
                                className: d().header,
                                children: [(0, r.jsxs)("h2", {
                                    id: a,
                                    children: [n, " ", x]
                                }), m && (0, r.jsxs)(l.Av, {
                                    className: d().filter,
                                    onClick: m,
                                    children: [(0, r.jsx)(l.JO, {
                                        className: h,
                                        name: "sort",
                                        size: "default"
                                    }), "Relevancy"]
                                })]
                            })
                        }), t, f && (i ? (0, r.jsx)(l.kq, {
                            as: "button",
                            className: "hrt-mt-3",
                            "data-element-id": e,
                            layout: "full-for-mobile",
                            onClick: this.handleShowMoreClick,
                            size: "medium",
                            variant: "default",
                            children: u
                        }) : (0, r.jsx)(s.df, {
                            onChange: this.handleScrollIntersection,
                            threshold: .1,
                            children: (0, r.jsx)("div", {
                                className: "hrt-disp-flex hrt-justify-center hrt-mt-4 hrt-mb-4",
                                children: (0, r.jsx)(l.xg, {
                                    color: "green",
                                    size: "large"
                                })
                            })
                        }))]
                    })
                }
                constructor(...e) {
                    super(...e), this.state = {
                        scrollTimeoutId: 0
                    }, this.handleScrollIntersection = e => {
                        e && this.props.ajaxOnScroll && this.props.ajaxOnScroll()
                    }, this.handleShowMoreClick = e => {
                        let {
                            onClick: t
                        } = this.props, n = document.documentElement.scrollTop;
                        t && t(e), window.clearTimeout(this.state.scrollTimeoutId);
                        let r = window.setTimeout(() => {
                            window.scrollTo(0, n)
                        }, 0);
                        this.setState({
                            scrollTimeoutId: r
                        })
                    }
                }
            }
            var m = u
        },
        82823: function(e, t, n) {
            "use strict";
            n.d(t, {
                _: function() {
                    return i
                }
            });
            var r = n(637469),
                a = n(41928);

            function i(e) {
                return !(!(0, a.s2)() || !e || [r.l5A.REVIEW, r.l5A.DELETED, r.l5A.SUSPENDED].includes(e))
            }
        },
        937627: function(e, t, n) {
            "use strict";
            n.d(t, {
                Y: function() {
                    return d
                },
                v: function() {
                    return c
                }
            });
            var r = n(552676),
                a = n(275271),
                i = n(738450),
                o = n(893269),
                s = n(363456),
                l = n(712797);
            let c = "display-alert";

            function d(e) {
                let {
                    overrideDisplayEvent: t
                } = e, [n, d] = a.useState(), u = n ? .type === l.NK.SUCCESS, m = t ? ? c;
                return a.useEffect(() => {
                    function e(e) {
                        d(e.detail)
                    }
                    return document.addEventListener(m, e), () => {
                        document.removeEventListener(m, e)
                    }
                }, []), (0, r.jsxs)(r.Fragment, {
                    children: [n && u && (0, r.jsx)(i.U, {
                        title: n.message
                    }), n && !u && (0, r.jsx)(i.b, {
                        closeButtonLabel: (0, s.t)("close"),
                        onClose: () => d(void 0),
                        title: n.message,
                        variant: o.FI[n.type]
                    }), (0, r.jsx)("div", {
                        id: "alert-portal"
                    })]
                })
            }
        },
        408274: function(e, t, n) {
            "use strict";
            n.d(t, {
                c: function() {
                    return M
                }
            });
            var r = n(552676),
                a = n(275271),
                i = n(183314),
                o = n.n(i),
                s = n(282187),
                l = n.n(s),
                c = n(982630),
                d = n(77655),
                u = n(447427),
                m = n(991280),
                h = n(727002),
                f = n(499179),
                p = n(287808),
                g = n(527795),
                x = n(198034),
                v = n(934821),
                _ = n(312802),
                b = n(381544),
                y = n(771813),
                j = n(736422),
                N = n(152968),
                C = n(710007),
                k = n(637469),
                w = n(974159),
                E = n(526792),
                I = n(363456),
                S = n(309578),
                D = n(877422),
                R = n(144764),
                A = n.n(R);

            function T(e) {
                let {
                    avatar: t,
                    index: n,
                    link: i
                } = e, s = (0, w.nw)(), {
                    isTeamCampaignWithActiveTeamMembers: l
                } = (0, b.s)(), c = (0, a.createElement)(m.q, { ...t,
                    key: `avatar-${n}`
                });
                return 0 === n && i && s && !l ? (0, r.jsx)(o(), {
                    href: i,
                    legacyBehavior: !0,
                    children: (0, r.jsx)(g.r, {
                        "data-tracking-id": "fundraiser top: click CO photo",
                        href: i,
                        variant: "implied",
                        children: c
                    })
                }) : c
            }

            function M(e) {
                let {
                    className: t,
                    isActive: n = !0,
                    showShortenedCopyBylinesVariantA: i = !1,
                    showShortenedCopyBylinesVariantB: s = !1
                } = e, [R, M] = (0, a.useState)(!1), {
                    coorganizerRebrandExperiment: O
                } = (0, c.sE)(), P = (0, w.nw)(), {
                    fundId: F,
                    charity: L,
                    charityOrganized: z,
                    organizer: U
                } = (0, d.g)(), $ = (0, u.q)({
                    organizer: U,
                    charity: L,
                    charityOrganized: !!z
                }), {
                    organizerProfileLink: B
                } = (0, E.V)(F), {
                    isTeamCampaignWithActiveTeamMembers: G
                } = (0, b.s)(), H = i || s, V = (0, D.E)(!0, H), q = function(e, t) {
                    let {
                        charity: n,
                        charityOrganized: r,
                        partner: a,
                        team: i,
                        teamMembers: o,
                        organizer: s
                    } = (0, d.g)(), l = s ? .profileUrl, c = n ? .logo ? .url.includes("guidestar.org") ? n ? .logo ? .url : n ? .logo ? .scaled ? .oneByOne120, {
                        isTeamCampaignWithActiveTeamMembers: u
                    } = (0, b.s)(), {
                        designatedRecipient: m
                    } = (0, S._)(a), h = [];
                    return u && i ? .teamPicUrl && !e && h.push({
                        kind: "image",
                        src: i.teamPicUrl
                    }), r || h.push({
                        kind: l ? "image" : "default",
                        ...l ? {
                            src: l
                        } : null
                    }), n && h.push({
                        kind: c ? "image" : "default",
                        ...c ? {
                            src: c
                        } : null
                    }), e && !t && o.forEach(e => {
                        let t = e ? .profileUrl;
                        e.role === k.k_p.TEAM_MEMBER && h.push({
                            kind: t ? "image" : "default",
                            ...t ? {
                                src: t
                            } : null
                        })
                    }), m && h.push({
                        kind: "image",
                        src: m ? .logoURL
                    }), t && u && h.length < 2 && h.push({
                        kind: "team"
                    }), h
                }(O, H), Z = function() {
                    let {
                        charity: e
                    } = (0, d.g)(), t = function() {
                        let {
                            latitude: e,
                            longitude: t
                        } = (0, j.MV)(), n = {
                            latMin: 32.5343,
                            latMax: 42.0095,
                            lonMin: -124.4096,
                            lonMax: -114.1308
                        };
                        if (!e || !t) return !1;
                        let r = parseFloat(e),
                            a = parseFloat(t);
                        return !(isNaN(r) || isNaN(a)) && r >= n.latMin && r <= n.latMax && a >= n.lonMin && a <= n.lonMax
                    }(), [{
                        enabled: n
                    }] = (0, y.rm)(N.R_), [{
                        enabled: r
                    }] = (0, y.rm)(N.pp), a = !!e ? .verifiedAt && "0000-00-00 00:00:00" !== e.verifiedAt, i = e ? .allowsFundraiserCreation;
                    return n && t && (!a && r || a && !i)
                }(), Q = O ? (0, I.t)("Co-organized", {
                    ns: "fundraiser"
                }) : (0, I.t)("Team fundraiser", {
                    ns: "fundraiser"
                }), K = P && !z && B && !G, Y = e => {
                    e.stopPropagation();
                    let t = document.querySelector(".p-campaign-members");
                    t ? .scrollIntoView({
                        behavior: "smooth"
                    })
                };
                return (0, r.jsx)("div", {
                    className: l()(t, "m-campaign-byline", {
                        "m-campaign-byline--teams": G
                    }),
                    children: (0, r.jsxs)("div", {
                        className: "hrt-align-center hrt-disp-flex",
                        children: [q && !H && (0, r.jsx)(h.J, {
                            className: "hrt-mr-2",
                            maxAvatars: 3,
                            surface: "default",
                            children: q.slice(0, 3).map((e, t) => (0, r.jsx)(T, {
                                avatar: e,
                                index: t,
                                link: z ? void 0 : B
                            }, `avatar-${t}`))
                        }), q && H && (0, r.jsx)("div", {
                            className: l()("hrt-position-relative hrt-mr-2", {
                                [A().avatarStackContainer]: q.length > 1
                            }),
                            children: q.map((e, t) => (0, r.jsx)(a.Fragment, {
                                children: (0, r.jsx)(C.$, {
                                    condition: !z && H,
                                    parent: e => {
                                        let {
                                            children: t
                                        } = e;
                                        return (0, r.jsx)("button", {
                                            className: A().avatarButton,
                                            onClick: Y,
                                            children: t
                                        })
                                    },
                                    children: (0, a.createElement)(m.q, {
                                        className: l()(A().heroMediaAvatar, {
                                            [A().frontAvatar]: 0 === t && q.length > 1,
                                            "hrt-position-absolute": 0 === t && q.length > 1
                                        }),
                                        ...e,
                                        key: `avatar-${t}`,
                                        size: "small"
                                    })
                                })
                            }, t))
                        }), (0, r.jsx)("div", {
                            className: "m-campaign-byline-description",
                            children: (0, r.jsxs)(C.$, {
                                condition: !z && H,
                                fallback: e => {
                                    let {
                                        children: t
                                    } = e;
                                    return (0, r.jsx)(r.Fragment, {
                                        children: t
                                    })
                                },
                                parent: e => {
                                    let {
                                        children: t
                                    } = e;
                                    return (0, r.jsx)(_.A, {
                                        className: "hrt-no-underline hrt-text-left hrt-disp-inline",
                                        "data-tracking-id": "campaign byline: scroll to organizers",
                                        onClick: Y,
                                        tabIndex: n ? 0 : -1,
                                        children: t
                                    })
                                },
                                children: [G && !H && (0, r.jsxs)("div", {
                                    className: A().avatarContainer,
                                    children: [(0, r.jsx)(m.q, {
                                        className: A().teamAvatar,
                                        kind: "team",
                                        size: "small"
                                    }), Q]
                                }), L ? .status !== k.edO.ACTIVE || H ? K && "string" == typeof V ? (0, r.jsxs)(r.Fragment, {
                                    children: [(0, r.jsx)(o(), {
                                        href: B,
                                        legacyBehavior: !0,
                                        children: (0, r.jsx)(g.r, {
                                            className: "hrt-font-bold",
                                            "data-tracking-id": "fundraiser top: click CO name",
                                            href: B,
                                            variant: "implied",
                                            children: $
                                        })
                                    }), V.replace($, "")]
                                }) : V : (0, r.jsx)("span", {
                                    dangerouslySetInnerHTML: {
                                        __html: V
                                    }
                                }), !!L && (0, r.jsxs)(r.Fragment, {
                                    children: [(0, r.jsxs)("span", {
                                        children: [(0, r.jsx)(r.Fragment, {
                                            children: "\xa0"
                                        }), (0, r.jsx)(f.V, {
                                            className: l()(A().verifiedIcon, "hrt-ml-half hrt-mb-half"),
                                            name: "verified-color",
                                            size: "small"
                                        })]
                                    }), !z && Z && (0, r.jsx)("span", {
                                        children: (0, r.jsx)(x.J, {
                                            bubblePosition: "top",
                                            button: (0, r.jsx)(v.C, {
                                                as: "button",
                                                className: l()({
                                                    [A().popoverButton]: !H,
                                                    [A().popoverButtonHeroMedia]: H,
                                                    "hrt-p-0 hrt-ml-half": H
                                                }),
                                                "data-testid": "disclosure-for-california-visitors",
                                                children: (0, r.jsx)(p.J, { ...s && {
                                                        className: "hrt-text-on-strong"
                                                    },
                                                    name: "info",
                                                    size: H ? "small" : "default"
                                                })
                                            }),
                                            dismissButton: "icon",
                                            ...H && {
                                                onClick: e => {
                                                    e.stopPropagation(), M(!R)
                                                }
                                            },
                                            ...H && {
                                                setShow: R
                                            },
                                            children: (0, I.t)("{{charityName}} has not reviewed or approved this fundraiser", {
                                                charityName: L ? .name,
                                                interpolation: {
                                                    escapeValue: !1
                                                }
                                            })
                                        })
                                    })]
                                })]
                            })
                        })]
                    })
                })
            }
        },
        877422: function(e, t, n) {
            "use strict";
            n.d(t, {
                E: function() {
                    return w
                }
            });
            var r = n(77655),
                a = n(46936),
                i = n(447427),
                o = n(381544),
                s = n(637469),
                l = n(309578),
                c = n(206415),
                d = n(552676),
                u = n(600488),
                m = n(363456);
            let h = e => (0, d.jsx)("strong", {
                    children: e
                }),
                f = function(e, t, n) {
                    let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                    return r && n ? (0, d.jsxs)(m.cC, {
                        ns: "fundraiser",
                        children: [(0, d.jsx)("strong", {
                            children: {
                                organizerFullName: e
                            }
                        }), " for\xa0", (0, d.jsx)("a", {
                            className: "hrt-font-bold hrt-no-underline",
                            href: `${u.config.environment.canonicalDomain}/charity/${n}`,
                            onClick: e => e.stopPropagation(),
                            children: {
                                charityName: t
                            }
                        })]
                    }) : (0, d.jsxs)(m.cC, {
                        ns: "fundraiser",
                        children: [(0, d.jsx)("strong", {
                            children: {
                                organizerFullName: e
                            }
                        }), " for ", (0, d.jsx)("strong", {
                            children: {
                                charityName: t
                            }
                        })]
                    })
                },
                p = (e, t) => (0, d.jsxs)(m.cC, {
                    ns: "fundraiser",
                    children: [(0, d.jsx)("strong", {
                        children: {
                            organizerFullName: e
                        }
                    }), " for ", (0, d.jsx)("strong", {
                        children: {
                            beneficiaryFullName: t
                        }
                    })]
                }),
                g = (e, t) => (0, d.jsx)(m.cC, {
                    ns: "fundraiser",
                    children: (0, d.jsxs)("strong", {
                        children: [{
                            organizerFullName: e
                        }, " and ", {
                            teamMemberFullName: t
                        }]
                    })
                }),
                x = (e, t) => (0, d.jsx)(m.cC, {
                    ns: "fundraiser",
                    children: (0, d.jsxs)("strong", {
                        children: [{
                            organizerFullName: e
                        }, " and ", {
                            teamMembersCount: t
                        }, " others"]
                    })
                }),
                v = function(e, t, n, r) {
                    let a = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
                    return a && r ? (0, d.jsxs)(m.cC, {
                        ns: "fundraiser",
                        children: [(0, d.jsxs)("strong", {
                            children: [{
                                organizerFullName: t
                            }, " and ", {
                                teamMemberFullName: n
                            }]
                        }), "\xa0for", " ", (0, d.jsx)("a", {
                            className: "hrt-font-bold hrt-no-underline",
                            href: `${u.config.environment.canonicalDomain}/charity/${r}`,
                            onClick: e => e.stopPropagation(),
                            children: {
                                charityName: e
                            }
                        })]
                    }) : (0, d.jsxs)(m.cC, {
                        ns: "fundraiser",
                        children: [(0, d.jsxs)("strong", {
                            children: [{
                                organizerFullName: t
                            }, " and ", {
                                teamMemberFullName: n
                            }]
                        }), "\xa0for ", (0, d.jsx)("strong", {
                            children: {
                                charityName: e
                            }
                        })]
                    })
                },
                _ = (e, t, n) => (0, d.jsxs)(m.cC, {
                    ns: "fundraiser",
                    children: [(0, d.jsxs)("strong", {
                        children: [{
                            organizerFullName: t
                        }, " and ", {
                            teamMemberFullName: n
                        }]
                    }), "\xa0for ", (0, d.jsx)("strong", {
                        children: {
                            beneficiaryFullName: e
                        }
                    })]
                }),
                b = function(e, t, n, r) {
                    let a = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
                    return a && r ? (0, d.jsxs)(m.cC, {
                        ns: "fundraiser",
                        children: [(0, d.jsxs)("strong", {
                            children: [{
                                organizerFullName: t
                            }, " and ", {
                                teamMembersCount: n
                            }, " others"]
                        }), "\xa0for", " ", (0, d.jsx)("a", {
                            className: "hrt-font-bold hrt-no-underline",
                            href: `${u.config.environment.canonicalDomain}/charity/${r}`,
                            onClick: e => e.stopPropagation(),
                            children: {
                                charityName: e
                            }
                        })]
                    }) : (0, d.jsxs)(m.cC, {
                        ns: "fundraiser",
                        children: [(0, d.jsxs)("strong", {
                            children: [{
                                organizerFullName: t
                            }, " and ", {
                                teamMembersCount: n
                            }, " others"]
                        }), "\xa0for ", (0, d.jsx)("strong", {
                            children: {
                                charityName: e
                            }
                        })]
                    })
                },
                y = (e, t, n) => (0, d.jsxs)(m.cC, {
                    ns: "fundraiser",
                    children: [(0, d.jsxs)("strong", {
                        children: [{
                            organizerFullName: t
                        }, " and ", {
                            teamMembersCount: n
                        }, " others"]
                    }), "\xa0for ", (0, d.jsx)("strong", {
                        children: {
                            beneficiaryFullName: e
                        }
                    })]
                }),
                j = function(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
                        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "",
                        a = arguments.length > 4 ? arguments[4] : void 0,
                        i = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
                    return n ? b(n, e, t, a, i) : r ? y(r, e, t) : x(e, t)
                },
                N = function(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
                        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "",
                        a = arguments.length > 4 ? arguments[4] : void 0,
                        i = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
                    return t ? n ? v(n, e, t, a, i) : r ? _(r, e, t) : g(e, t) : j(e, 1, n, r, a, i)
                },
                C = e => {
                    let {
                        organizerFullName: t,
                        charityFullName: n = "",
                        beneficiaryFullName: r = "",
                        charitySlug: a,
                        shouldLinkToCharity: i = !1
                    } = e;
                    return r ? p(t, r) : n ? f(t, n, a, i) : h(t)
                },
                k = function(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    return n && t ? (0, d.jsx)("a", {
                        className: "hrt-font-bold hrt-no-underline",
                        href: `${u.config.environment.canonicalDomain}/charity/${t}`,
                        onClick: e => e.stopPropagation(),
                        children: e
                    }) : (0, d.jsx)("strong", {
                        children: e
                    })
                };

            function w() {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    {
                        isTeamCampaignWithActiveTeamMembers: n
                    } = (0, o.s)(),
                    {
                        beneficiary: d,
                        charity: u,
                        charityOrganized: m,
                        partner: h,
                        teamMembers: f,
                        organizer: p
                    } = (0, r.g)(),
                    g = (0, i.q)({
                        charity: u,
                        charityOrganized: !!m,
                        organizer: p
                    }),
                    x = (0, a.L)(d),
                    v = u ? .name,
                    _ = u ? .slug || void 0,
                    b = e && u ? .status === s.edO.ACTIVE,
                    {
                        designatedRecipient: y
                    } = (0, l._)(h),
                    w = f.filter(e => e.status === s.u2d.ACTIVE && e.role === s.k_p.TEAM_MEMBER),
                    E = t && !y;
                if (m && v) return E ? k(v, _, b) : (0, c.Qs)(v, _, b);
                if (!n) return E ? C({
                    organizerFullName: g,
                    charityFullName: v,
                    beneficiaryFullName: x,
                    charitySlug: _,
                    shouldLinkToCharity: b
                }) : (0, c.Pj)({
                    organizerFullName: g,
                    charityFullName: v,
                    beneficiaryFullName: x,
                    charitySlug: _,
                    shouldLinkToCharity: b,
                    designatedRecipientName: y ? .name || ""
                });
                if (1 === w.length) {
                    let e = w[0],
                        t = `${e.firstName} ${e.lastName}`.trim();
                    return E ? N(g, t, v, x, _, b) : (0, c.zv)(g, t, v, x, _, b)
                }
                return E ? j(g, w.length, v, x, _, b) : (0, c.yl)(g, w.length, v, x, _, b)
            }
        },
        636384: function(e, t, n) {
            "use strict";
            n.d(t, {
                J: function() {
                    return X
                },
                T: function() {
                    return x
                }
            });
            var r = n(552676),
                a = n(282187),
                i = n.n(a),
                o = n(982630),
                s = n(77655),
                l = n(264751),
                c = n(103010),
                d = n(299794),
                u = n(275271),
                m = n(183314),
                h = n.n(m),
                f = n(530821),
                p = n(381544),
                g = n(974159);

            function x(e) {
                let {
                    children: t,
                    meta: n,
                    person: a
                } = e, i = (0, g.nw)(), {
                    isTeamCampaignWithActiveTeamMembers: o
                } = (0, p.s)(), s = n ? .city && n ? .statePrefix && !n.city.endsWith(`, ${n.statePrefix}`) ? `${n.city}, ${n.statePrefix}` : n ? .city, l = (0, r.jsx)(f.qE, { ...a.profileImage ? {
                        kind: "image",
                        src: a.profileImage
                    } : {
                        kind: "default"
                    }
                }), c = a.profileLink && i && !o ? (0, r.jsx)(h(), {
                    href: a.profileLink,
                    legacyBehavior: !0,
                    children: (0, r.jsx)(f.rU, {
                        "data-tracking-id": "fundraiser organizer: clicks CO photo",
                        href: a.profileLink,
                        variant: "implied",
                        children: l
                    })
                }) : l;
                return (0, r.jsxs)(f.b3, {
                    children: [(0, r.jsx)(f.sG, {
                        children: c
                    }), (0, r.jsxs)(f.yn, {
                        children: [t, n ? .roleString && (0, r.jsx)("div", {
                            className: "hrt-text-body-sm",
                            children: n ? .roleString
                        }), s && (0, r.jsx)("div", {
                            className: "hrt-text-body-sm",
                            children: s
                        })]
                    })]
                })
            }
            var v = n(185673),
                _ = n(363456),
                b = n(923440),
                y = n.n(b),
                j = function(e) {
                    let {
                        className: t,
                        teamMembers: n
                    } = e, {
                        openModal: a
                    } = (0, c.o)(), o = i()(t, y().campaignMembersTeam), s = n ? n.length : 0, l = n ? n.slice(0, 4).map((e, t) => (0, r.jsx)(x, {
                        meta: e.meta,
                        person: e.person,
                        children: (0, r.jsx)(v.v, {
                            className: "hrt-font-bold",
                            name: e.person.fullName,
                            profileLink: e.person.profileLink,
                            role: e.person.role,
                            showRole: !!e.person.role,
                            source: "fundraiser organizer",
                            target: "CO"
                        })
                    }, `teamMember-${t}`)) : [];
                    return (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)("div", {
                            className: o,
                            children: l
                        }), s > 4 && (0, r.jsx)(d.k, {
                            as: "button",
                            className: "hrt-mt-3",
                            "data-element-id": "btn_team_see-all",
                            layout: "full-for-mobile",
                            onClick: () => a("team"),
                            size: "medium",
                            variant: "default",
                            children: (0, _.t)("See all")
                        })]
                    })
                },
                N = n(590839),
                C = n(920647),
                k = n(695484),
                w = n(668261),
                E = n(68480),
                I = n(991280),
                S = n(612069),
                D = n(170110),
                R = n(253765),
                A = n(287808),
                T = n(312802),
                M = n(936956),
                O = n(708349),
                P = n(164703),
                F = n(934821);

            function L(e) {
                let {
                    className: t,
                    onChatClick: n,
                    onEmailClick: a,
                    isChatError: i,
                    onCloseChatError: o
                } = e, {
                    variation: s
                } = (0, w.t)();
                return (0, r.jsxs)("div", {
                    className: t,
                    children: [s === w.j.variations.contact_chat_only ? (0, r.jsxs)(O.k, {
                        as: "button",
                        "data-tracking-id": "contact organizer: chat",
                        onClick: n,
                        size: "medium",
                        variant: "default",
                        children: [(0, _.t)("Message"), (0, r.jsx)(P.V, {
                            className: "hrt-ml-1",
                            color: "accent-purple",
                            size: "small",
                            children: (0, _.t)("New")
                        })]
                    }) : s === w.j.variations.contact_chat_email ? (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsxs)(O.k, {
                            as: "button",
                            "data-tracking-id": "contact organizer: chat",
                            onClick: n,
                            size: "medium",
                            variant: "default",
                            children: [(0, _.t)("Message"), (0, r.jsx)(P.V, {
                                className: "hrt-ml-1",
                                color: "accent-purple",
                                size: "small",
                                children: (0, _.t)("New")
                            })]
                        }), (0, r.jsx)(F.C, {
                            as: "button",
                            className: "hrt-ml-1 hrt-px-1",
                            "data-tracking-id": "contact organizer: email",
                            onClick: a,
                            variant: "default",
                            children: (0, _.t)("Contact form", {
                                ns: "fundraiser"
                            })
                        })]
                    }) : (0, r.jsx)(O.k, {
                        as: "button",
                        "data-testid": "contact-organizer",
                        "data-tracking-id": "contact organizer",
                        onClick: a,
                        size: "medium",
                        variant: "default",
                        children: (0, _.t)("Contact")
                    }), i && (0, r.jsx)(M.b, {
                        className: "hrt-mt-2",
                        closeButtonLabel: (0, _.t)("Close"),
                        onClose: o,
                        overlayContent: !1,
                        title: (0, _.t)("Unable to start direct messaging at this time.  Please try again later or contact support if you need help.", {
                            ns: "fundraiser"
                        }),
                        variant: "negative"
                    })]
                })
            }
            var z = n(703916),
                U = n(132922);
            let $ = n.n(U)()(() => Promise.all([n.e(89882), n.e(57891)]).then(n.bind(n, 857891)).then(e => e.PartnerDesignatedRecipientModal), {
                loadableGenerated: {
                    webpack: () => [857891]
                }
            });
            var B = n(940625),
                G = n(702253),
                H = n(217945),
                V = n(309578),
                q = n(24352),
                Z = n(631562),
                Q = n.n(Z);

            function K(e) {
                let t = (0, C.useRouter)(),
                    {
                        className: n,
                        organizer: a,
                        beneficiary: o,
                        charity: l,
                        charityOrganized: d
                    } = e,
                    [m, h] = (0, u.useState)(!1),
                    f = o || l || void 0,
                    g = !!o || !!l,
                    b = i()(n, Q().campaignMembersMain, {
                        [Q().hasBeneficiary]: g,
                        [Q().charityOrganized]: d
                    }),
                    y = !!l,
                    {
                        enableContact: j,
                        partner: N
                    } = (0, s.g)(),
                    {
                        designatedRecipient: M
                    } = (0, V._)(N),
                    [O, P] = (0, u.useState)(!1),
                    F = M ? .name,
                    U = (0, H.n)(),
                    Z = (0, k.f)(),
                    {
                        openModal: K
                    } = (0, c.o)(),
                    {
                        openChatContactModal: Y,
                        isChatClientReady: W,
                        isChatClientConnected: J
                    } = (0, E.t)(),
                    {
                        isLoggedIn: X,
                        isValidating: ee
                    } = (0, q.jY)(),
                    {
                        isChatEnabled: et
                    } = (0, w.t)(),
                    en = "1" === t.query.show_chat,
                    [er, ea, ei] = (0, G.k)(!1),
                    eo = async () => {
                        if (X && Z ? .personRolesForFundraiser.isOrganizer) {
                            t.push("/messages/primary");
                            return
                        }
                        await Y() || ea()
                    };
                (0, u.useEffect)(() => {
                    if (en && et && W) {
                        if (X && !ee && J) eo();
                        else if (!ee && !X) {
                            let e = encodeURIComponent(t.asPath);
                            t.push(`/sign-in?redirect=${e}`)
                        }
                    }
                }, [en, et, X, ee, W, J]);
                let {
                    isTeamCampaignWithActiveTeamMembers: es
                } = (0, p.s)();
                return (0, r.jsxs)("div", {
                    className: b,
                    children: [a && !d && (0, r.jsxs)("div", {
                        className: Q().organizer,
                        children: [(0, r.jsx)(x, {
                            meta: a.meta,
                            person: a.person,
                            children: (0, r.jsx)(v.v, {
                                className: "hrt-font-bold",
                                isHyperlinkEnabled: U && !es,
                                name: a.person.fullName,
                                profileLink: a.person.profileLink,
                                role: a.person.role,
                                showRole: !!a.person.role,
                                source: "fundraiser organizer",
                                target: "CO"
                            })
                        }), (f || M) && (0, r.jsx)(A.J, {
                            className: i()("hrt-hide-max-lg", Q().arrow),
                            name: "arrow-right",
                            size: "default"
                        })]
                    }), o ? (0, r.jsx)("div", {
                        className: Q().mainBeneficiary,
                        children: (0, r.jsx)(x, {
                            meta: o.meta,
                            person: o.person,
                            children: (0, r.jsx)(v.v, {
                                className: "hrt-font-bold",
                                name: o.person.fullName,
                                profileLink: o.person.profileLink,
                                role: o.person.role,
                                showRole: !!o.person.role
                            })
                        })
                    }) : l ? (0, r.jsxs)("div", {
                        className: Q().beneficiary,
                        children: [(0, r.jsxs)(S.b, {
                            children: [(0, r.jsx)(R.s, {
                                children: (0, r.jsx)(I.q, { ...l.organization.profileImage ? {
                                        kind: "image",
                                        src: l.organization.profileImage
                                    } : {
                                        kind: "donor"
                                    }
                                })
                            }), (0, r.jsxs)(D.y, {
                                children: [(0, r.jsxs)("div", {
                                    className: "hrt-disp-flex hrt-align-center",
                                    children: [(0, r.jsx)(v.v, {
                                        className: "hrt-font-bold",
                                        isOrganization: !0,
                                        name: l.organization.name,
                                        profileLink: l.organization.profileLink
                                    }), (0, r.jsx)(r.Fragment, {
                                        children: "\xa0"
                                    }), (0, r.jsx)(A.J, {
                                        className: "hrt-text-brand",
                                        name: "checkmark-fill",
                                        size: "small"
                                    })]
                                }), (0, r.jsxs)("div", {
                                    className: "hrt-text-body-sm",
                                    children: [(0, r.jsx)("div", {
                                        children: l.meta.roleString
                                    }), (0, r.jsx)("div", {
                                        children: l.meta.title
                                    })]
                                })]
                            })]
                        }), y && (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)(T.A, {
                                className: "hrt-text-body-sm hrt-ml-7",
                                "data-element-id": "btn_charity_learn-more",
                                onClick: () => h(!0),
                                children: (0, _.t)("Learn more")
                            }), (0, r.jsx)(z.P, {
                                charity: l,
                                isOpen: m,
                                onClose: () => h(!1)
                            })]
                        })]
                    }) : M ? (0, r.jsx)(() => (0, r.jsxs)("div", {
                        className: Q().mainBeneficiary,
                        children: [(0, r.jsxs)(S.b, {
                            children: [(0, r.jsx)(R.s, {
                                children: (0, r.jsx)(I.q, {
                                    kind: "image",
                                    src: M ? .logoURL
                                })
                            }), (0, r.jsxs)(D.y, {
                                children: [(0, r.jsx)(v.v, {
                                    className: "hrt-font-bold",
                                    name: F
                                }), (0, r.jsx)("div", {
                                    className: "hrt-text-body-sm",
                                    children: (0, r.jsxs)(_.cC, {
                                        children: ["Beneficiary via", " ", (0, r.jsx)("span", {
                                            className: Q().hasPartnerDesignatedRecipient,
                                            onClick: () => P(!0),
                                            children: {
                                                recipientName: F
                                            }
                                        })]
                                    })
                                })]
                            })]
                        }), O && (0, r.jsx)($, {
                            onClose: () => P(!1)
                        })]
                    }), {}) : void 0, j && !!a && (0, r.jsx)(B.q, {
                        children: (0, r.jsx)(L, {
                            className: i()(Q().contact, "hrt-ml-7", {
                                [Q().hasBeneContact]: g,
                                [Q().charityOrganizedContact]: d
                            }),
                            isChatError: er,
                            onChatClick: eo,
                            onCloseChatError: () => ei(),
                            onEmailClick: () => K("contact")
                        })
                    })]
                })
            }
            var Y = n(111405),
                W = n(860737),
                J = n.n(W);

            function X(e) {
                let {
                    className: t,
                    isTeamCampaignWithTeamMembers: n,
                    organizer: a,
                    beneficiary: c,
                    charity: d,
                    teamList: u
                } = e, {
                    coorganizerRebrandExperiment: m
                } = (0, o.sE)(), h = function(e) {
                    let {
                        beneficiary: t,
                        isTeamEnabled: n,
                        team: r,
                        teamMembers: a,
                        organizer: i
                    } = (0, s.g)(), o = (0, Y.J)({
                        isTeamEnabled: n,
                        teamMembers: a
                    }), l = i ? .firstName ? ? "";
                    if (!o) return t ? (0, _.t)("Organizer and beneficiary") : (0, _.t)("Organizer");
                    let c = a.length;
                    return e ? (0, _.t)("Co-organizers ({{count}})", {
                        count: c
                    }) : r ? .name && "Fundraising Team" !== r.name && "Fundraiser Team" !== r.name && "" !== r.name ? (0, _.t)("Fundraising team: {{- name}} ({{count}})", {
                        count: c,
                        name: r.name
                    }) : (0, _.t)("Fundraising team ({{count}})", {
                        count: c,
                        name: l
                    })
                }(m), {
                    charityOrganized: f,
                    team: p
                } = (0, s.g)(), g = p ? .teamPicUrl ? {
                    kind: "image",
                    src: p.teamPicUrl
                } : void 0;
                return (0, r.jsxs)(N.I, {
                    className: i()(t, "o-campaign-members"),
                    "data-testid": "campaign-members",
                    id: "campaign-members",
                    trackingId: "organizer",
                    children: [(0, r.jsxs)("h2", {
                        className: i()(t, "hrt-disp-flex hrt-align-center", "hrt-mb-1", J().campaignMembersHeader),
                        children: [g && (0, r.jsx)(l.q, { ...g,
                            className: i()("hrt-mr-2", J().campaignMembersHeaderAvatar)
                        }), (0, r.jsx)("div", {
                            className: J().campaignMembersHeaderTitle,
                            children: h
                        })]
                    }), (0, r.jsx)(K, {
                        beneficiary: c,
                        charity: d,
                        charityOrganized: !!f,
                        className: "hrt-mt-3 hrt-mb-5",
                        organizer: a
                    }), n && (0, r.jsx)(j, {
                        className: "hrt-mt-4",
                        teamMembers: u
                    })]
                })
            }
        },
        678218: function(e, t, n) {
            "use strict";
            n.d(t, {
                l: function() {
                    return l
                }
            });
            var r = n(552676),
                a = n(282187),
                i = n.n(a),
                o = n(77655),
                s = n(590839);

            function l(e) {
                let {
                    className: t,
                    wrapperClassName: n = ""
                } = e, {
                    title: a
                } = (0, o.g)();
                return (0, r.jsx)("header", {
                    className: i()("p-campaign-header", n),
                    children: (0, r.jsx)(s.I, {
                        trackingId: "title",
                        children: (0, r.jsx)("h1", {
                            className: i()(t, "hrt-mb-0 p-campaign-title"),
                            children: a
                        })
                    })
                })
            }
        },
        357771: function(e, t, n) {
            "use strict";
            n.d(t, {
                o: function() {
                    return s
                }
            });
            var r = n(920647),
                a = n(77655),
                i = n(663560),
                o = n(893269);

            function s() {
                let {
                    query: e
                } = (0, r.useRouter)(), {
                    fundraiserStatus: t,
                    isTeamEnabled: n
                } = (0, a.g)(), s = t === o.c4.ACTIVE, {
                    isPreviewMode: l
                } = (0, i.x)();
                return !!e ? .teamInvite && s && !!n && !l
            }
        },
        612822: function(e, t, n) {
            "use strict";
            n.d(t, {
                C: function() {
                    return rc
                },
                v: function() {
                    return rd
                }
            });
            var r = n(552676),
                a = n(275271),
                i = n(132922),
                o = n.n(i),
                s = n(920647),
                l = n(282187),
                c = n.n(l),
                d = n(650863),
                u = n(9834),
                m = n(189774),
                h = n(209994),
                f = n(673474),
                p = n(661416);
            let g = o()(() => n.e(7391).then(n.bind(n, 107391)).then(e => e.ErrorModal), {
                loadableGenerated: {
                    webpack: () => [107391]
                }
            });
            var x = n(558085),
                v = n(363456);
            let _ = o()(() => Promise.all([n.e(89850), n.e(9480)]).then(n.bind(n, 409480)).then(e => e.DonationProtectionModal), {
                loadableGenerated: {
                    webpack: () => [409480]
                }
            });

            function b(e) {
                let [t, n] = a.useState(!1);
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsxs)(x.V, {
                        color: "accent-blue",
                        "data-tracking-id": "donation protected pill",
                        onClick: () => {
                            n(!0)
                        },
                        style: {
                            cursor: "pointer"
                        },
                        ...e,
                        children: [(0, r.jsx)(x.J, {
                            name: "gofundme-giving-guarantee",
                            size: "small",
                            style: {
                                marginRight: "calc(1rem * 1/4)"
                            }
                        }), (0, v.t)("Donation protected")]
                    }), (0, r.jsx)(_, {
                        closeModal: () => n(!1),
                        isOpen: t
                    })]
                })
            }
            let y = o()(() => Promise.all([n.e(30153), n.e(54272)]).then(n.bind(n, 254272)).then(e => e.Reactions), {
                loadableGenerated: {
                    webpack: () => [254272]
                }
            });
            var j = n(982630),
                N = n(77655),
                C = n(126500),
                k = n(736422),
                w = n(283249);
            let E = {
                key: "fe-ssr-campaign-donate-cta-experiment",
                variations: {
                    control: "control",
                    var1_lend_a_hand: "var1_lend_a_hand",
                    var2_i_want_to_help: "var2_i_want_to_help",
                    var3_change_lives: "var3_change_lives",
                    var4_click_to_help: "var4_click_to_help",
                    var5_make_an_impact: "var5_make_an_impact"
                }
            };

            function I() {
                let {
                    location: e
                } = (0, N.g)(), t = e ? .countryCode ? .toUpperCase() || "", {
                    donateCtaExperiment: n
                } = (0, j.sE)(), r = (0, C.f)(), [{
                    variationKey: a
                }] = (0, w.z)(E.key, void 0, {
                    overrideAttributes: {
                        countryCode: r,
                        fundCountryCode: t
                    }
                }), i = n || a, {
                    variations: o
                } = E, s = {
                    [o.var1_lend_a_hand]: (0, v.t)("Lend a Hand"),
                    [o.var2_i_want_to_help]: (0, v.t)("I Want to Help"),
                    [o.var3_change_lives]: (0, v.t)("Change Lives"),
                    [o.var4_click_to_help]: (0, v.t)("Click to Help"),
                    [o.var5_make_an_impact]: (0, v.t)("Make an Impact")
                };
                (0, k.Yl)({
                    experimentKey: E.key,
                    amplitudeNamespace: "cp_experiments",
                    overrides: {
                        overrideAttributes: {
                            countryCode: r,
                            fundCountryCode: t
                        }
                    }
                });
                let l = !!i;
                return {
                    isEnabled: l,
                    isVariant: !!i && i !== o.control,
                    ctaText: l ? s[i] : "",
                    ...i ? {
                        variation: i
                    } : {}
                }
            }
            var S = n(768022),
                D = n(695484),
                R = n(893269),
                A = n(114081);

            function T() {
                let e = (0, D.f)(),
                    t = e ? .personRolesForFundraiser,
                    n = (0, A.Z)(),
                    {
                        fundraiserStatus: r
                    } = (0, N.g)(),
                    a = !!(n || t && (t.isBene || t.isDonor || t.isOrganizer || t.isTeamMember));
                return r === R.c4.ACTIVE || r === R.c4.CLOSED || a
            }
            var M = n(251556),
                O = n(927511),
                P = n(273916),
                F = n(722557),
                L = n.n(F);

            function z() {
                let e = (0, S.x)(),
                    t = T(),
                    {
                        ctaText: n
                    } = I(),
                    {
                        isRecurringDefaultEnabled: a
                    } = (0, p.q)();
                return (0, r.jsxs)("div", {
                    className: c()(L().container, {
                        [L().shareOnly]: !e
                    }),
                    children: [t && (0, r.jsx)("div", {
                        className: c()(L().shareButton, "cta-clips-gray"),
                        "data-element-id": "btn_share_sticky",
                        children: (0, r.jsx)(P.T, {
                            onClick: () => {
                                (0, M.$h)({
                                    platform: M.Os.AMPLITUDE,
                                    data: {
                                        campaignShare: P.X.STICKY
                                    }
                                })
                            },
                            placement: "fundraiser sticky footer",
                            children: (0, v.t)("Share")
                        })
                    }), e && (0, r.jsx)("div", {
                        className: c()(L().donateButton, {
                            [L().withMargin]: t
                        }),
                        "data-element-id": "btn_donate_sticky",
                        children: (0, r.jsx)(O.H, {
                            placement: "fundraiser sticky footer",
                            source: "btn_donate_sticky",
                            children: n || (a ? (0, v.t)("Donate monthly") : (0, v.t)("Donate"))
                        })
                    })]
                })
            }
            let U = o()(() => n.e(7039).then(n.bind(n, 807039)).then(e => e.TaxDeductible), {
                loadableGenerated: {
                    webpack: () => [807039]
                }
            });
            var $ = n(322043),
                B = n(103010),
                G = n(907942),
                H = n(565569);
            let V = ["share", "donations", "topdonations", "team", "warning", "gallery"];
            var q = n(697568),
                Z = n(357759);
            let Q = o()(() => Promise.all([n.e(17418), n.e(19205), n.e(35671), n.e(89787), n.e(87392)]).then(n.bind(n, 187392)).then(e => e.ChatModalController), {
                    loadableGenerated: {
                        webpack: () => [187392]
                    },
                    ssr: !1
                }),
                K = o()(() => Promise.all([n.e(17418), n.e(19205), n.e(35671), n.e(89787), n.e(51858)]).then(n.bind(n, 151858)).then(e => e.FloatingUserChat), {
                    loadableGenerated: {
                        webpack: () => [151858]
                    },
                    ssr: !1
                });
            var Y = n(668261),
                W = n(68480),
                J = n(771813),
                X = n(954589),
                ee = n(287808),
                et = n(527795),
                en = n(934821),
                er = n(906468),
                ea = n(913849);
            let ei = o()(() => Promise.all([n.e(41670), n.e(85080), n.e(28450), n.e(7446)]).then(n.bind(n, 707446)).then(e => e.GFMClips), {
                loadableGenerated: {
                    webpack: () => [707446]
                }
            });
            var eo = n(82823),
                es = n(652751),
                el = n(637469),
                ec = n(891577),
                ed = n(590839),
                eu = n(175279),
                em = n(355925),
                eh = n.n(em);
            let ef = o()(() => Promise.all([n.e(21731), n.e(15336), n.e(66179)]).then(n.bind(n, 66179)).then(e => e.HeroMediaViewer), {
                loadableGenerated: {
                    webpack: () => [66179]
                }
            });

            function ep() {
                let {
                    asset: e,
                    fundraiserPhoto: t,
                    mediaType: n,
                    mediaId: i,
                    photoCropPoints: o,
                    fundId: s
                } = (0, N.g)(), l = i && (n === el.DDH.YOUTUBE || n === el.DDH.VIMEO), {
                    showVariantA: d,
                    showVariantB: u
                } = (0, m.F)(), f = d || u, {
                    showVariantA: p
                } = (0, h.J)(), {
                    hasMounted: g
                } = (0, eu.s)(), x = function(e) {
                    let {
                        imageUrl: t,
                        fundId: n,
                        photoCropPoints: r,
                        skip: i
                    } = e, [o] = (0, el.A63)();
                    return (0, a.useEffect)(() => {
                        if (!r && t && n && !i) try {
                            o({
                                variables: {
                                    fundraiserId: n,
                                    imageUrl: t
                                }
                            })
                        } catch (e) {}
                    }, [r, t, n]), r
                }({
                    imageUrl: t ? .scaled ? .fourByThree1200 || t ? .url,
                    photoCropPoints: o,
                    fundId: s,
                    skip: !f || l
                }), _ = (0, k.ac)(k.zP.SMALL_ONLY), b = T(), {
                    comments: {
                        formattedCount: y
                    },
                    donations: {
                        formattedCount: j
                    }
                } = (0, es.x)(), C = c()("p-campaign-collage hrt-position-relative", eh().heroMediaViewerContainer, {
                    "hrt-hide-max-md": !f,
                    "hrt-hide-min-md": !p,
                    [eh().desktopHeroMediaViewer]: p
                });
                if (!f && !p || f && !_ && !p || p && _ && !f) {
                    if (g && i && (n === el.DDH.YOUTUBE || n === el.DDH.VIMEO)) return (0, r.jsx)(ed.I, {
                        className: "p-campaign-collage hrt-surface-informative-subtle hrt-text-informative-strong p-campaign-collage--video",
                        trackingId: "hero",
                        children: (0, r.jsx)(ea.n, {
                            mediaId: i,
                            mediaType: (0, er.uR)(n)
                        })
                    });
                    if (g && n === el.DDH.GFM_MUX_CLIPS && e) return (0, r.jsx)(ed.I, {
                        className: "p-campaign-collage hrt-surface-informative-subtle hrt-text-informative-strong p-campaign-collage--clips",
                        trackingId: "hero",
                        children: (0, r.jsx)("div", {
                            className: (0, eo._)(e ? .status) ? "clips-scroll-snap" : "clips-no-snap",
                            children: (0, r.jsx)(ei, {
                                asset: e,
                                commentCount: `${y}`,
                                donationCount: j,
                                showActiveContent: b
                            })
                        })
                    })
                }
                if (t) {
                    let e = t.scaled ? .sixteenByNine270 ? ? "",
                        a = x ? .portraitX || x ? .landscapeX || 50,
                        o = x ? .portraitY || x ? .landscapeY || 50,
                        s = `${a}% ${o}%`;
                    return (0, r.jsxs)(r.Fragment, {
                        children: [(d || u || p) && (0, r.jsx)(ed.I, {
                            className: C,
                            trackingId: "hero",
                            children: (0, r.jsx)(ef, {
                                isVideo: l,
                                mainPhotoFormatted: t,
                                mediaId: i,
                                mediaType: n,
                                objectPosition: s
                            })
                        }), (0, r.jsx)(ed.I, {
                            className: c()("p-campaign-collage hrt-text-informative-strong", {
                                "hrt-surface-informative-subtle": !!e,
                                "hrt-surface-neutral-subtle": !e,
                                "hrt-hide-max-md": f,
                                "hrt-hide-min-md": p
                            }),
                            trackingId: "hero",
                            children: e ? (0, r.jsx)("picture", {
                                className: eh().image,
                                children: (0, r.jsx)("img", {
                                    alt: (0, v.t)("Main fundraiser photo"),
                                    height: 405,
                                    src: e,
                                    width: 720
                                })
                            }) : (0, r.jsx)("figure", {
                                "aria-label": (0, v.t)("Main fundraiser placeholder photo"),
                                className: eh().image,
                                children: (0, r.jsx)(ec.Z, {
                                    className: c()(eh().imagePlaceholder, "hrt-position-absolute"),
                                    iconProps: {
                                        className: eh().imagePlaceholderIcon
                                    }
                                })
                            })
                        })]
                    })
                }
                return null
            }
            var eg = n(16552),
                ex = n(721876),
                ev = n(177970),
                e_ = n(847380),
                eb = n(312802),
                ey = n(5969),
                ej = n(314140),
                eN = n(39293),
                eC = n(940625),
                ek = n(710007),
                ew = n(45798),
                eE = n(252135),
                eI = n(799447),
                eS = n(67640),
                eD = n.n(eS);
            let eR = e => {
                let {
                    animated: t = !0,
                    className: n,
                    isMediumDesktopViewMilestoneVariantA: i,
                    placement: o = "fundraiser sticky footer"
                } = e, {
                    currentAmount: s,
                    fundUrl: l,
                    goalAmount: d,
                    organizer: u,
                    topSupporters: m
                } = (0, N.g)(), {
                    donation: h,
                    hasDonation: f
                } = (0, G.V)({
                    campaignUrl: l
                }), g = f ? h : m.mostRecentDonor, x = g ? .isAnonymous, {
                    isRecurringDefaultEnabled: _
                } = (0, p.q)(), b = (0, ey.A)(ex.EMPTY_STATE_EXPERIMENT.variations.donor_badge_high, u ? .firstName ? ? ""), {
                    locale: y
                } = (0, ew.bN)(), j = new eI.Pj((0, eE.BR)(y)), C = (0, eN.x)(), k = (0, es.x)(), w = j.formatWithAbbrev(k.goal.value, !0, 1), E = k.raised.value > 0, {
                    openModal: I
                } = (0, B.o)(), D = T(), R = (0, S.x)(), A = Math.ceil((s ? .amount || 0) / (d ? .amount || 0) * 100), M = k.donations.count >= 1e3 ? k.donations.formattedCount : x ? k.donations.count : k.donations.count - 1, [F, L] = (0, a.useState)(!t);
                return (0, a.useEffect)(() => {
                    let e = setTimeout(() => L(!0), 1500);
                    return () => clearTimeout(e)
                }, []), (0, r.jsxs)(ev.r, {
                    as: "div",
                    className: n,
                    columns: i ? 2 : void 0,
                    children: [E ? (0, r.jsxs)("div", {
                        className: c()("hrt-align-center", eD().contentContainer, eD().hasMoneyContainer),
                        children: [(0, r.jsx)(e_._, {
                            animated: t,
                            className: "hrt-mr-2",
                            ...C && {
                                onClick: () => I("goalLog")
                            },
                            progress: F ? A : 0,
                            showPercentage: A < 100,
                            size: "medium",
                            variant: "green"
                        }), (0, r.jsxs)("div", {
                            children: [(0, r.jsxs)("h2", {
                                className: "hrt-text-body-lg hrt-font-bold hrt-mb-0",
                                children: [(0, r.jsxs)(v.cC, {
                                    children: [(0, r.jsx)("span", {
                                        children: {
                                            raised: k.raised.formattedValue
                                        }
                                    }), (0, r.jsx)(r.Fragment, {
                                        children: " "
                                    }), "raised ", (0, r.jsx)("span", {
                                        className: "hrt-text-supporting hrt-font-regular",
                                        children: "of"
                                    })]
                                }), "\xa0", (0, r.jsx)(eC.q, {
                                    children: (0, r.jsx)(ek.$, {
                                        condition: C,
                                        parent: e => {
                                            let {
                                                children: t
                                            } = e;
                                            return (0, r.jsx)(eb.A, {
                                                className: "hrt-text-supporting hrt-font-regular",
                                                "data-tracking-id": "fundraiser goal clicked",
                                                onClick: () => I("goalLog"),
                                                children: t
                                            })
                                        },
                                        children: (0, r.jsx)("span", {
                                            className: "hrt-text-supporting hrt-font-regular",
                                            children: w
                                        })
                                    })
                                })]
                            }), 2 !== k.donations.count || x ? 1 !== k.donations.count || x ? 1 === k.donations.count && x ? (0, r.jsx)("span", {
                                className: "hrt-text-body-sm hrt-mb-0 hrt-flex-wrap",
                                children: (0, v.t)("1 person donated")
                            }) : (0, r.jsxs)(eb.A, {
                                className: c()("hrt-text-body-sm hrt-disp-inline hrt-align-center hrt-mb-0 hrt-no-underline hrt-text-left", [eD().donors]),
                                "data-testid": "donation-overview-cta",
                                onClick: () => {
                                    let e = document.getElementById("donations");
                                    return e && k.donations.count < 5 ? e.scrollIntoView({
                                        behavior: "smooth"
                                    }) : I("allDonations")
                                },
                                children: [x ? (0, v.t)("{{donorCount}} people donated", {
                                    donorCount: M
                                }) : (0, v.t)("{{donorName}} + {{donorCount}} others donated", {
                                    donorName: g ? .name,
                                    donorCount: M
                                }), (0, r.jsx)(ee.J, {
                                    name: "chevron-right",
                                    size: "small"
                                })]
                            }) : (0, r.jsx)("span", {
                                className: "hrt-text-body-sm hrt-mb-0 hrt-flex-wrap",
                                children: (0, v.t)("{{donorName}} has donated", {
                                    donorName: g ? .name
                                })
                            }) : (0, r.jsx)("div", {
                                className: "hrt-text-body-sm hrt-mb-0 hrt-flex-wrap",
                                children: (0, v.t)("{{donorName}} + others donated", {
                                    donorName: g ? .name
                                })
                            })]
                        })]
                    }) : (0, r.jsx)("div", {
                        className: c()(eD().contentContainer, eD().emptyStateContainer),
                        children: b && (0, r.jsx)(ej.N, {
                            className: "hrt-ml-2",
                            variantConfig: b,
                            isEnabledOverride: !0
                        })
                    }), (0, r.jsxs)("div", {
                        className: eD().footerContainer,
                        children: [D && (0, r.jsx)("div", {
                            className: eD().shareButton,
                            "data-element-id": "btn_share_update",
                            children: (0, r.jsx)(P.T, {
                                className: eD().buttons,
                                placement: o,
                                children: (0, v.t)("Share")
                            })
                        }), R && (0, r.jsx)("div", {
                            className: eD().donateButton,
                            "data-element-id": "btn_donate_update",
                            children: (0, r.jsx)(O.H, {
                                className: eD().buttons,
                                placement: o,
                                source: "btn_donate_update",
                                children: _ ? (0, v.t)("Donate monthly") : (0, v.t)("Donate")
                            })
                        })]
                    })]
                })
            };

            function eA(e) {
                let {
                    experimentKey: t,
                    options: n,
                    overrides: r
                } = e;
                return (0, w.z)(t, n, r), null
            }
            var eT = n(788050);
            let eM = ["co", "statsuser", "team_member", "donor", "beneficiary"];

            function eO(e) {
                let {
                    authenticatedUserRoles: t = [],
                    campaignStatus: n
                } = e;
                return n !== R.c4.DELETED && (![R.c4.DEACTIVATED, R.c4.IN_REVIEW].includes(n) || !!t.some(e => eM.includes(e)))
            }
            var eP = n(24352),
                eF = n(186176),
                eL = n.n(eF);

            function ez(e) {
                let {
                    children: t,
                    isMediumDesktopViewMilestoneVariantA: n,
                    on: i,
                    viewId: o,
                    delayMs: s
                } = e, [l, d] = a.useState(!s && i), {
                    data: u
                } = (0, eP.jY)(), {
                    fundraiserStatus: m
                } = (0, N.g)(), h = eO({
                    authenticatedUserRoles: u ? .roles,
                    campaignStatus: m
                });
                a.useEffect(() => {
                    if (s && i) {
                        let e = setTimeout(() => {
                            d(!0)
                        }, s);
                        return () => clearTimeout(e)
                    }
                    if (s && !i) {
                        d(!1);
                        return
                    }
                    d(i)
                }, [i, s]);
                let f = s ? l : i;
                return (0, r.jsx)(eT.h, {
                    elementId: "sticky-portal",
                    children: (0, r.jsx)(ed.I, {
                        "aria-hidden": !(f && h),
                        className: eL().stickyCta,
                        "data-chromatic": "ignore",
                        "data-testid": "floating-sticky-footer",
                        "data-view-id": o,
                        id: "sticky-cta",
                        trackingId: "sticky footer",
                        children: (0, r.jsx)("div", {
                            className: c()(eL().outer, "cta-clips-gray", {
                                [eL().isOpen]: f
                            }),
                            children: (0, r.jsx)("div", {
                                className: c()(eL().inner, {
                                    "hrt-pr-3 hrt-pl-3": n
                                }),
                                children: l && t
                            })
                        })
                    })
                })
            }
            var eU = n(749446),
                e$ = n(912663),
                eB = n(408274),
                eG = n(76694),
                eH = n(520820),
                eV = n(391800),
                eq = n(907356),
                eZ = n(204634),
                eQ = n(667385),
                eK = n(657439),
                eY = n(663560),
                eW = n(874036),
                eJ = n.n(eW);

            function eX() {
                let {
                    description: e
                } = (0, N.g)(), t = (0, eK.F)(e) || "", n = (0, eq.T)(), {
                    doNotTruncateDescription: i,
                    maxInitialDescriptionHeight: o,
                    isTruncated: s,
                    setIsTruncatedBasedOnDescriptionHeight: l,
                    styleIframes: d
                } = function() {
                    let {
                        isPreviewMode: e
                    } = (0, eY.x)(), [t, n] = a.useState(!e);
                    return {
                        doNotTruncateDescription: function() {
                            n(!1)
                        },
                        maxInitialDescriptionHeight: 240,
                        isTruncated: t,
                        setIsTruncatedBasedOnDescriptionHeight: function(e) {
                            e && e.scrollHeight <= 360 && n(!1)
                        },
                        styleIframes: function(e) {
                            if (e) {
                                let t = e.querySelectorAll("iframe"),
                                    n = e.querySelector(".iframe-wrapper");
                                t ? .length && !n && t.forEach(e => {
                                    let t = document.createElement("div");
                                    t.setAttribute("style", "padding-top: 56.25%; position: relative;"), t.setAttribute("class", "iframe-wrapper"), e.replaceWith(t), e.removeAttribute("style"), e.setAttribute("style", "height: 100%; position: absolute; top: 0; width: 100%"), t.appendChild(e)
                                })
                            }
                        }
                    }
                }(), u = (0, eG.R)(e => {
                    d(e), l(e)
                }, [s]);
                return (0, eV.r)(t), (0, a.useEffect)(() => {
                    let e = () => {
                        s && i()
                    };
                    return document.addEventListener("expandCampaignDescription", e), () => {
                        document.removeEventListener("expandCampaignDescription", e)
                    }
                }, [i]), (0, r.jsxs)(eQ.S, {
                    type: "suppress",
                    children: [(0, r.jsxs)(ed.I, {
                        className: eJ().campaignDescription,
                        trackingId: "story",
                        children: [(0, r.jsx)("div", {
                            className: c()(eJ().content, "hrt-mt-3", {
                                [eJ().isOpen]: !s,
                                [eJ().disableUserSelect]: (0, eZ.Q)(t)
                            }),
                            dangerouslySetInnerHTML: {
                                __html: t
                            },
                            "data-testid": "campaign-description",
                            ref: u,
                            style: s ? {
                                maxHeight: `${o}px`
                            } : void 0
                        }), s && (0, r.jsx)(eH.A, {
                            "data-element-id": "btn_story_read-more",
                            "data-tracking-id": "fundraiser: read more",
                            onClick: i,
                            children: (0, v.t)("Read more")
                        })]
                    }), n && (0, r.jsx)(eV.m, {})]
                })
            }
            var e0 = n(344286),
                e2 = n(42405),
                e1 = n(781776);

            function e7() {
                let {
                    openModal: e
                } = (0, B.o)(), {
                    donations: {
                        count: t,
                        formattedCount: n
                    }
                } = (0, es.x)();
                if (!t) return null;
                let a = `(${n})`;
                return t <= 5 ? (0, r.jsx)(r.Fragment, {
                    children: a
                }) : (0, r.jsx)(eH.A, {
                    className: "hrt-text-heading-md hrt-disp-inline",
                    "data-element-id": "btn_donations",
                    onClick: () => e("allDonations"),
                    children: a
                })
            }

            function e3(e) {
                let {
                    currentUserDonation: t,
                    showActiveContent: n
                } = e, {
                    openModal: a
                } = (0, B.o)(), {
                    fundraiserStatus: i
                } = (0, N.g)(), o = i === R.c4.ACTIVE, {
                    donations: s
                } = (0, e1.b)(), {
                    donations: {
                        count: l,
                        formattedCount: c
                    }
                } = (0, es.x)();
                return l && c && n && void 0 !== s ? (0, r.jsx)(eQ.S, {
                    type: "suppress",
                    children: (0, r.jsxs)("div", {
                        className: "p-campaign-donations hrt-hide-min-lg",
                        children: [(0, r.jsx)(eg.i, {}), (0, r.jsxs)("div", {
                            className: "hrt-disp-flex hrt-justify-between hrt-mb-3",
                            children: [(0, r.jsxs)("h2", {
                                className: "hrt-mb-0",
                                "data-testid": "donations-heading",
                                id: "donations",
                                children: [(0, v.t)("Donations"), "\xa0", (0, r.jsx)(e7, {})]
                            }), l >= 10 && (0, r.jsxs)(e0.k, {
                                as: "button",
                                "data-element-id": "btn_donate_topdonations",
                                "data-tracking-id": "donations see top",
                                onClick: () => a("topDonations"),
                                size: "small",
                                variant: "default",
                                children: [(0, r.jsx)(e0.J, {
                                    className: "o-campaign-sidebar-top-donations-icon hrt-mr-1",
                                    name: "star",
                                    size: "small"
                                }), (0, v.t)("See top")]
                            })]
                        }), (0, r.jsx)("div", {
                            className: "p-campaign-metadata-indicator",
                            children: (0, r.jsx)(e2.mJ, {})
                        }), !!l && (0, r.jsx)(e2.a$, {
                            currentUserDonation: t
                        }), o && (0, r.jsx)(e2.yx, {}), l > 5 && (0, r.jsx)(e0.k, {
                            as: "button",
                            className: "hrt-mt-3 hrt-max-width-full hrt-hide-min-lg",
                            "data-element-id": "btn_donate_moredonations",
                            "data-tracking-id": "donations see all",
                            layout: "full-for-mobile",
                            onClick: () => a("allDonations"),
                            size: "medium",
                            variant: "default",
                            children: (0, v.t)("See all")
                        })]
                    })
                }) : null
            }
            var e5 = n(825446),
                e6 = n.n(e5),
                e4 = n(704394),
                e8 = n.n(e4),
                e9 = n(634111),
                te = n(932123),
                tt = n(447427),
                tn = n(315230);
            let tr = ["donate", "donating", "donated", "donation", "donates", "donations"],
                ta = (e, t, n) => ! function(e, t) {
                    let n = [R.Qv.ENGLISH_US, R.Qv.ENGLISH_AU, R.Qv.ENGLISH_DK, R.Qv.ENGLISH_FI, R.Qv.ENGLISH_IE, R.Qv.ENGLISH_NO, R.Qv.ENGLISH_SE, R.Qv.ENGLISH_CA, R.Qv.ENGLISH_GB];
                    if (!e || !n.includes(t)) return !1;
                    let r = e.toLowerCase().replace(/-/g, " ").split(/\s+/).map(e => e.replace(/[.,!?;:()'"]/g, ""));
                    return !tr.some(e => r.includes(e))
                }(e, t) ? `${e}, organized by ${n}` : `Donate to ${e}, organized by ${n}`;
            var ti = n(78344),
                to = n(655561),
                ts = n(600488),
                tl = n(801760),
                tc = n(526827);

            function td(e) {
                let [t, n] = e.split("?");
                return {
                    path: t,
                    searchParams: n
                }
            }
            var tu = n(46936),
                tm = n(965690);

            function th(e) {
                let {
                    hasSensitiveQueryParams: t
                } = e, {
                    locale: n
                } = (0, ew.bN)(), a = (0, te.e)(), i = function() {
                    let {
                        charity: e,
                        charityOrganized: t,
                        title: n,
                        beneficiary: r,
                        description: a,
                        organizer: i
                    } = (0, N.g)(), o = (0, eK.F)(a) || "", s = (0, tt.q)({
                        charity: e,
                        charityOrganized: !!t,
                        organizer: i
                    }), l = (0, tu.L)(r) || s, c = (0, tm.Ch)(o.replace(/<br[^>]*>/gi, "\n").replace(/&amp;/g, "&")), d = (0, v.t)("… {{- userName}} needs your support for {{- campaignTitle}}", {
                        campaignTitle: n,
                        userName: s
                    }), u = c.substring(0, Math.max(61, 158 - d.length)) + d;
                    return c ? u : (0, v.t)("{{- userName}} needs your help today! {{- campaignTitle}}", {
                        campaignTitle: n,
                        userName: l
                    })
                }(), {
                    charity: o,
                    charityOrganized: l,
                    fundraiserPhoto: c,
                    categoryId: d,
                    title: u,
                    location: {
                        countryCode: m
                    },
                    organizer: h,
                    visibleInSearch: f,
                    fundUrl: p
                } = (0, N.g)(), g = (0, tc._s)(d), x = (0, tt.q)({
                    charity: o,
                    charityOrganized: !!l,
                    organizer: h
                }), _ = !f, b = (0, tn.w)(), y = (0, s.useRouter)(), {
                    showPoster: j
                } = (0, tl.W)({
                    fundSlug: p,
                    fundCountryCode: m
                }), {
                    path: C
                } = td(y.asPath), k = `${ts.config.environment.canonicalDomain}${C}`, w = function(e) {
                    let [, , t] = e.slice(1).split("/");
                    return !!t && R.kc.includes(t.toLowerCase())
                }(C), E = c ? .url || ts.config.defaultFundraiserHeroImage, I = c ? .scaled ? .sixteenByNine720 || ts.config.defaultFundraiserHeroImage, S = `${k}?lang=${n}`;
                if (y.query.v && (S += `&v=${y.query.v}`), j && Array.isArray(y.query.fundraiserPageParams) && y.query.fundraiserPageParams.length) {
                    let [e, t] = y.query.fundraiserPageParams;
                    if ((0, e9.I1)(t) && (0, e9.QK)(e)) {
                        let n = `${ts.config.environment.sharingAssetsDomain}/${y.query.campaignUrl}/${e}/${t}?v=${y.query.v}`;
                        E = n, I = n, _ = !0
                    }
                }
                return (0, r.jsxs)(ti.h, {
                    description: i,
                    noIndex: _ || !!t,
                    title: b,
                    url: k,
                    children: [c ? .scaled ? .sixteenByNine720 && (0, r.jsxs)(e6(), {
                        children: [(0, r.jsx)("link", {
                            as: "image",
                            fetchpriorty: "high",
                            href: c.scaled.sixteenByNine720,
                            rel: "preload"
                        }), w && (0, r.jsx)("meta", {
                            content: "noindex, nofollow",
                            "data-testid": "no-index-no-follow-meta",
                            name: "robots"
                        })]
                    }), (0, r.jsx)(e8(), {
                        id: "grecaptcha-js",
                        src: "https://www.google.com/recaptcha/enterprise.js"
                    }), (0, r.jsx)(to.FZ, {
                        appId: ts.config.facebook.appId,
                        pages: ts.config.facebook.pages
                    }), (0, r.jsx)(to.AB, {
                        description: i,
                        image: E,
                        locale: n,
                        title: ta(u, n, x),
                        url: S
                    }), (0, r.jsx)(to.Od, {
                        beneficiary: a ? .person.fullName,
                        beneficiaryType: a ? .person.as || "self",
                        category: g.name,
                        organizer: x
                    }), (0, r.jsx)(to.iA, {
                        description: i,
                        image: I,
                        title: ta(u, n, x)
                    })]
                })
            }
            var tf = n(636384);
            let tp = o()(() => Promise.all([n.e(57077), n.e(17078), n.e(42588), n.e(23732), n.e(80198), n.e(54075)]).then(n.bind(n, 83694)).then(e => e.ContactOrganizerModal), {
                    loadableGenerated: {
                        webpack: () => [83694]
                    }
                }),
                tg = o()(() => Promise.all([n.e(96849), n.e(58452)]).then(n.bind(n, 758452)).then(e => e.OrganizerInviteHandoverWithErrorBoundary), {
                    loadableGenerated: {
                        webpack: () => [758452]
                    }
                }),
                tx = o()(() => n.e(39698).then(n.bind(n, 639698)).then(e => e.CampaignShareSheet), {
                    loadableGenerated: {
                        webpack: () => [639698]
                    }
                });
            var tv = n(226398),
                t_ = n(300938),
                tb = n(702253),
                ty = n(794157),
                tj = n.n(ty);
            let tN = "fe-leaderboard-nudges-enabled",
                tC = {
                    control: "control",
                    variant_a: "variant_a",
                    variant_b: "variant_b"
                };
            var tk = n(618158),
                tw = n(552471),
                tE = n(758655),
                tI = n(101801),
                tS = n(295731),
                tD = n(646108),
                tR = n.n(tD);
            let tA = "/nextassets/shared/leaderboard/themes";

            function tT(e) {
                let {
                    type: t,
                    themeFolder: n
                } = e;
                return function(e) {
                    switch (e) {
                        case "trophy":
                        case "connection":
                        case "donations":
                        case "handout":
                        case "donor":
                        case "handshake":
                            return !0;
                        default:
                            return !1
                    }
                }(t) && n && (0, r.jsxs)("div", {
                    className: tR().container,
                    children: [(0, r.jsx)(tM, {
                        themeFolder: n,
                        type: t
                    }), (0, r.jsx)(tO, {
                        themeFolder: n
                    })]
                })
            }

            function tM(e) {
                let {
                    themeFolder: t,
                    type: n
                } = e;
                return (0, r.jsx)("img", {
                    alt: "trophy",
                    className: tR().icon,
                    src: `${tA}/${t}/leaderboard-nudge/icon/${n}.svg`
                })
            }

            function tO(e) {
                let {
                    themeFolder: t
                } = e;
                return (0, r.jsx)("img", {
                    alt: "background_trophy",
                    className: tR().background,
                    src: `${tA}/${t}/leaderboard-nudge/background.svg`
                })
            }
            var tP = n(267966),
                tF = n.n(tP);
            let tL = {};

            function tz(e) {
                let {
                    text: t,
                    type: n,
                    scrollRef: a,
                    hideNudge: i = () => tL
                } = e, o = (0, tS.z)(), s = (0, tI.u)("/donate", {
                    additionalParams: {
                        source: "leaderboard_nudge"
                    }
                }), l = `leaderboard nudge: ${a?"see rankings":"donate now"}`, d = o.nudges.getLeaderboardNudgeStyles, u = o.nudges.getLeaderboardNudgeLink, m = o.nudges.themeFolder;
                return (0, r.jsx)("div", {
                    className: tF().leaderboardNudgeContainer,
                    children: (0, r.jsxs)(tw.$, {
                        className: c()(tF().leaderboardNudge, d),
                        "data-testid": "leaderboard-nudge-base",
                        style: d,
                        variant: "neutral",
                        children: [(0, r.jsx)(tE.j, {
                            as: "button",
                            buttonLabel: (0, v.t)("close"),
                            className: tF().closeButton,
                            "data-tracking-id": "leaderboard nudge: close",
                            onClick: i,
                            size: "small",
                            children: (0, r.jsx)(ee.J, {
                                name: "close",
                                size: "small",
                                style: {
                                    width: "40%",
                                    height: "auto"
                                }
                            })
                        }), (0, r.jsx)(tT, {
                            themeFolder: m,
                            type: n
                        }), (0, r.jsx)("div", {
                            className: tF().nudgeText,
                            children: t
                        }), (0, r.jsx)("a", {
                            className: c()(tF().leaderboardNudgeLink, u),
                            "data-tracking-id": l,
                            href: a ? void 0 : s,
                            onClick: e => {
                                a && (e.preventDefault(), a.current ? .scrollIntoView({
                                    behavior: "smooth"
                                }))
                            },
                            role: "link",
                            tabIndex: 0,
                            children: a ? (0, v.t)("See rankings") : (0, v.t)("Donate now")
                        })]
                    })
                })
            }

            function tU(e, t) {
                return "string" == typeof e && e.length > 0 && e.length <= (t || 7)
            }
            let t$ = {};

            function tB(e) {
                let {
                    firstName: t,
                    amount: n,
                    currencyCode: a,
                    scrollRef: i,
                    hideNudge: o = () => t$,
                    variation: s
                } = e, l = function(e) {
                    let {
                        firstName: t,
                        amount: n,
                        variation: r
                    } = e, a = tU(t);
                    switch (!0) {
                        case a && r && r === tC.variant_b:
                            return (0, v.t)("Help {{- firstName}} climb - only {{- amount}} to the next spot!", {
                                amount: n,
                                firstName: t
                            });
                        case !a && r && r === tC.variant_b:
                            return (0, v.t)("Help this fundraiser climb - only {{- amount}} to the next spot!", {
                                amount: n
                            });
                        case a && (!r || r === tC.variant_a):
                            return (0, v.t)("Donate {{- amount}} to help {{- firstName}} climb the board!", {
                                amount: n,
                                firstName: t
                            });
                        case !a && (!r || r === tC.variant_a):
                        default:
                            return (0, v.t)("Donating {{- amount}} helps this fundraiser climb the board.", {
                                amount: n
                            })
                    }
                }({
                    firstName: t,
                    amount: (0, eI.cq)(Math.trunc(n), {
                        currency: a || "USD"
                    }, {
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0
                    }),
                    variation: s
                }), {
                    ref: c
                } = (0, tk.w3)({
                    triggerOnce: !0,
                    trackingId: `leaderboard nudge: view close to next position ${s||""}`
                });
                return (0, r.jsx)("div", {
                    "data-testid": "close-to-next-position-nudge",
                    ref: c,
                    children: (0, r.jsx)(tz, {
                        hideNudge: o,
                        scrollRef: i,
                        text: l,
                        type: "handout"
                    })
                })
            }
            let tG = {};

            function tH(e) {
                let {
                    firstName: t,
                    scrollRef: n,
                    hideNudge: a = () => tG
                } = e, i = tU(t) ? (0, v.t)("Keep {{- firstName}} in 1st place with your donation.", {
                    firstName: t
                }) : (0, v.t)("Keep this fundraiser in 1st place with your donation."), {
                    ref: o
                } = (0, tk.w3)({
                    triggerOnce: !0,
                    trackingId: "leaderboard nudge: view first place"
                });
                return (0, r.jsx)("div", {
                    "data-testid": "first-place-nudge",
                    ref: o,
                    children: (0, r.jsx)(tz, {
                        hideNudge: a,
                        scrollRef: n,
                        text: i,
                        type: "trophy"
                    })
                })
            }
            let tV = {};

            function tq(e) {
                let {
                    firstName: t,
                    scrollRef: n,
                    hideNudge: a = () => tV
                } = e, i = tU(t) ? (0, v.t)("Help {{- firstName}} climb the leaderboard, donate today!", {
                    firstName: t
                }) : (0, v.t)("Help this fundraiser climb the leaderboard, donate today!"), {
                    ref: o
                } = (0, tk.w3)({
                    triggerOnce: !0,
                    trackingId: "leaderboard nudge: view generic"
                });
                return (0, r.jsx)("div", {
                    "data-testid": "generic-nudge",
                    ref: o,
                    children: (0, r.jsx)(tz, {
                        hideNudge: a,
                        scrollRef: n,
                        text: i,
                        type: "handshake"
                    })
                })
            }
            let tZ = {};

            function tQ(e) {
                let {
                    firstName: t,
                    amount: n,
                    rank: a,
                    currencyCode: i,
                    scrollRef: o,
                    hideNudge: s = () => tZ,
                    variation: l
                } = e, c = function(e) {
                    let {
                        firstName: t,
                        amount: n,
                        rank: r,
                        variation: a
                    } = e, i = r ? function(e) {
                        let t = e % 100,
                            n = t >= 11 && t <= 13 ? "th" : ["th", "st", "nd", "rd"][e % 10] || "th";
                        return `${e}${n}`
                    }(r - 1) : void 0, o = tU(t);
                    switch (!0) {
                        case o && a && a === tC.variant_b:
                            return (0, v.t)("Almost there! {{- firstName}} is {{- amount}} from {{- nextPosition}} place!", {
                                firstName: t,
                                amount: n,
                                nextPosition: i
                            });
                        case !o && a && a === tC.variant_b:
                            return (0, v.t)("Almost there! This fundraiser is {{- amount}} from {{- nextPosition}} place!", {
                                amount: n,
                                nextPosition: i
                            });
                        case o && (!a || a === tC.variant_a):
                            return (0, v.t)("Donate {{- amount}} to help {{- firstName}} reach {{- nextPosition}} place!", {
                                amount: n,
                                firstName: t,
                                nextPosition: i
                            });
                        case !o && (!a || a === tC.variant_a):
                        default:
                            return (0, v.t)("Donate {{- amount}} to help this fundraiser reach {{- nextPosition}} place!", {
                                amount: n,
                                nextPosition: i
                            })
                    }
                }({
                    firstName: t,
                    amount: (0, eI.cq)(Math.trunc(n), {
                        currency: i || "USD"
                    }, {
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0
                    }),
                    rank: a,
                    variation: l
                }), {
                    ref: d
                } = (0, tk.w3)({
                    triggerOnce: !0,
                    trackingId: `leaderboard nudge: view reach next place ${l||""}`
                });
                return (0, r.jsx)("div", {
                    "data-testid": "get-to-x-position-nudge",
                    ref: d,
                    children: (0, r.jsx)(tz, {
                        hideNudge: s,
                        scrollRef: o,
                        text: c,
                        type: "handout"
                    })
                })
            }
            let tK = {};

            function tY(e) {
                let {
                    firstName: t,
                    scrollRef: n,
                    hideNudge: a = () => tK
                } = e, i = tU(t) ? (0, v.t)("Make the first donation to {{- firstName}}’s fundraiser!", {
                    firstName: t
                }) : (0, v.t)("Make the first donation to this fundraiser!"), {
                    ref: o
                } = (0, tk.w3)({
                    triggerOnce: !0,
                    trackingId: "leaderboard nudge: view inactive"
                });
                return (0, r.jsx)("div", {
                    "data-testid": "inactive-nudge",
                    ref: o,
                    children: (0, r.jsx)(tz, {
                        hideNudge: a,
                        scrollRef: n,
                        text: i,
                        type: "donor"
                    })
                })
            }
            let tW = {};

            function tJ(e) {
                let {
                    firstName: t,
                    scrollRef: n,
                    hideNudge: a = () => tW
                } = e, i = tU(t, 6) ? (0, v.t)("{{- firstName}}’s fundraiser is in a tie. Break it with your donation!", {
                    firstName: t
                }) : (0, v.t)("This fundraiser is in a tie, and your donation can break it!"), {
                    ref: o
                } = (0, tk.w3)({
                    triggerOnce: !0,
                    trackingId: "leaderboard nudge: view tie breaker"
                });
                return (0, r.jsx)("div", {
                    "data-testid": "tie-breaker-nudge",
                    ref: o,
                    children: (0, r.jsx)(tz, {
                        hideNudge: a,
                        scrollRef: n,
                        text: i,
                        type: "connection"
                    })
                })
            }
            let tX = {};

            function t0(e) {
                let {
                    firstName: t,
                    amount: n,
                    currencyCode: a,
                    scrollRef: i,
                    hideNudge: o = () => tX,
                    variation: s
                } = e, l = function(e) {
                    let {
                        firstName: t,
                        formattedAmount: n,
                        variation: r
                    } = e, a = tU(t);
                    switch (!0) {
                        case a && r && r === tC.variant_b:
                            return (0, v.t)("{{- firstName}} is only {{- amount}} away from the Top 10!", {
                                firstName: t,
                                amount: n
                            });
                        case !a && r && r === tC.variant_b:
                            return (0, v.t)("This fundraiser is only {{- amount}} away from the Top 10!", {
                                amount: n
                            });
                        case !a && (!r || r === tC.variant_a):
                            return (0, v.t)("Donate {{- amount}}+ to put this fundraiser in the Top 10!", {
                                amount: n
                            });
                        case a && (!r || r === tC.variant_a):
                        default:
                            return (0, v.t)("Donate {{- amount}}+ to put {{- firstName}} in the Top 10!", {
                                amount: n,
                                firstName: t
                            })
                    }
                }({
                    firstName: t,
                    formattedAmount: (0, eI.cq)(Math.trunc(n), {
                        currency: a || "USD"
                    }, {
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0
                    }),
                    variation: s
                }), {
                    ref: c
                } = (0, tk.w3)({
                    triggerOnce: !0,
                    trackingId: `leaderboard nudge: view top ten in reach ${s||""}`
                });
                return (0, r.jsx)("div", {
                    "data-testid": "top-ten-in-reach-nudge",
                    ref: c,
                    children: (0, r.jsx)(tz, {
                        hideNudge: o,
                        scrollRef: i,
                        text: l,
                        type: "donations"
                    })
                })
            }

            function t2(e, t) {
                return isNaN(e) || e < 0 ? t : Math.ceil(e + t)
            }

            function t1(e) {
                let {
                    leaderboardRef: t,
                    theme: n
                } = e, {
                    enabled: i,
                    variationKey: o
                } = function(e) {
                    let {
                        experimentName: t,
                        cookieOverrideKey: n,
                        overrideAttributes: r = {},
                        variations: a = {}
                    } = e, i = n ? tj().get(n) : void 0, [o, s] = (0, w.z)(t, void 0, {
                        overrideAttributes: r
                    });
                    if ("1" === i) return {
                        enabled: !0,
                        variationKey: void 0
                    };
                    let l = !a || 0 === Object.keys(a).length || !!o.variationKey && (a[o.variationKey] ? ? !1);
                    return {
                        enabled: s && o.enabled && l,
                        variationKey: o ? .variationKey ? ? void 0
                    }
                }({
                    experimentName: tN,
                    cookieOverrideKey: tN,
                    variations: {
                        [tC.control]: !1,
                        [tC.variant_a]: !0,
                        [tC.variant_b]: !0
                    }
                }), s = (0, tv.n3)(), l = Number(s ? .data ? .currentFundId), c = function(e) {
                    let {
                        data: t
                    } = e, n = t ? .entries.find(e => e.id === t ? .currentFundId);
                    if (n ? .rank !== void 0) {
                        let e = n.rank <= 1,
                            r = n.rank <= 10,
                            a = (t ? .entries.filter(e => e.amountRaised === n.amountRaised).length ? ? 0) > 1,
                            i = t ? .entries.find(e => e.rank === n.rank - 1),
                            o = void 0 !== i ? i.amountRaised - n.amountRaised : void 0,
                            s = r || t ? .tenthFundraiser === void 0 ? void 0 : t.tenthFundraiser.amountRaised - n.amountRaised;
                        return {
                            firstName: n.firstName || void 0,
                            rank: n.rank,
                            currencyCode: n.currencyCode,
                            inFirst: e,
                            inTop10: r,
                            inTie: a,
                            gapToNext: o,
                            gapToTop10: s,
                            amountRaised: n.amountRaised
                        }
                    }
                }(s), d = (0, a.useRef)(), u = o && o === tC.variant_b ? void 0 : t, [m, h, f] = (0, tb.k)(!0);
                return (0, a.useEffect)(() => {
                    l && d.current !== l && (d.current = l, h())
                }, [l]), i && c && m && (0, r.jsx)(t_.$, {
                    themeStr: n,
                    children: (0, r.jsx)("div", {
                        "data-testid": "leaderboard-nudge",
                        children: function(e) {
                            let {
                                firstName: t,
                                rank: n,
                                currencyCode: a,
                                amountRaised: i,
                                inTie: o,
                                inFirst: s,
                                inTop10: l,
                                gapToNext: c,
                                gapToTop10: d,
                                scrollRef: u,
                                hideNudge: m,
                                variationKey: h
                            } = e;
                            switch (!0) {
                                case 0 === i:
                                    return (0, r.jsx)(tY, {
                                        firstName: t,
                                        hideNudge: m,
                                        scrollRef: u
                                    });
                                case o:
                                    return (0, r.jsx)(tJ, {
                                        firstName: t,
                                        hideNudge: m,
                                        scrollRef: u
                                    });
                                case s:
                                    return (0, r.jsx)(tH, {
                                        firstName: t,
                                        hideNudge: m,
                                        scrollRef: u
                                    });
                                case l && void 0 !== c && c <= 195:
                                    return (0, r.jsx)(tQ, {
                                        amount: t2(c, 5),
                                        currencyCode: a,
                                        firstName: t,
                                        hideNudge: m,
                                        rank: n,
                                        scrollRef: u,
                                        variation: h
                                    });
                                case l && void 0 !== c && c > 195:
                                    return (0, r.jsx)(tq, {
                                        firstName: t,
                                        hideNudge: m,
                                        scrollRef: u
                                    });
                                case !l && void 0 !== d && d <= 195:
                                    return (0, r.jsx)(t0, {
                                        amount: t2(d, 5),
                                        currencyCode: a,
                                        firstName: t,
                                        hideNudge: m,
                                        scrollRef: u,
                                        variation: h
                                    });
                                case !l && void 0 !== d && d > 195 && void 0 !== c && c < 195:
                                    return (0, r.jsx)(tB, {
                                        amount: t2(c, 5),
                                        currencyCode: a,
                                        firstName: t,
                                        hideNudge: m,
                                        scrollRef: u,
                                        variation: h
                                    });
                                default:
                                    return (0, r.jsx)(tq, {
                                        firstName: t,
                                        hideNudge: m,
                                        scrollRef: u
                                    })
                            }
                        }({ ...c,
                            scrollRef: u,
                            hideNudge: f,
                            variationKey: o
                        })
                    })
                })
            }
            var t7 = n(856792),
                t3 = n.n(t7);

            function t5(e) {
                let {
                    banner: t,
                    children: n,
                    isLeaderboardNudgeEnabled: a,
                    isMiletsoneDesktopExperimentActive: i,
                    leaderboardRef: o,
                    leaderboardThemeStr: s
                } = e;
                return (0, r.jsx)(eQ.S, {
                    type: "suppress",
                    children: (0, r.jsxs)("div", {
                        className: "p-campaign-sidebar",
                        children: [a && (0, r.jsx)(t1, {
                            leaderboardRef: o,
                            theme: s
                        }), (0, r.jsxs)("aside", {
                            className: c()(t3().sidebar, "o-campaign-sidebar", {
                                [t3().sidebarMilestoneDesktop]: i
                            }),
                            children: [t, (0, r.jsx)("div", {
                                className: t3().wrapper,
                                children: n
                            })]
                        })]
                    })
                })
            }
            var t6 = n(407156);
            let t4 = o()(() => Promise.all([n.e(84715), n.e(63735)]).then(n.bind(n, 663735)).then(e => e.Comments), {
                    loadableGenerated: {
                        webpack: () => [663735]
                    }
                }),
                t8 = o()(() => Promise.all([n.e(7104), n.e(43220)]).then(n.bind(n, 243220)).then(e => e.CompetitorWarning), {
                    loadableGenerated: {
                        webpack: () => [243220]
                    }
                }),
                t9 = o()(() => Promise.all([n.e(79696), n.e(3949)]).then(n.bind(n, 3949)).then(e => e.DonationSuggestionCard), {
                    loadableGenerated: {
                        webpack: () => [3949]
                    }
                });
            var ne = n(365718),
                nt = n(672897),
                nn = n(702077),
                nr = n(823780),
                na = n(923247),
                ni = n(457382);

            function no() {
                let e = (0, s.useRouter)(),
                    {
                        charity: t,
                        charityOrganized: n,
                        beneficiary: i,
                        organizer: o
                    } = (0, N.g)(),
                    l = (0, tu.L)(i),
                    c = (0, tt.q)({
                        charity: t,
                        charityOrganized: !!n,
                        organizer: o
                    }),
                    {
                        donations: {
                            count: d
                        }
                    } = (0, es.x)(),
                    {
                        areAllDonationsFetched: u,
                        donations: m,
                        getMoreDonations: h
                    } = (0, e1.b)({
                        shouldFetch: !0
                    }),
                    {
                        averageTopDonation: f,
                        topDonations: p
                    } = (0, ne.L)(),
                    g = (0, S.x)(),
                    {
                        openModal: x,
                        closeModal: _,
                        isModalOpen: b
                    } = (0, B.o)(),
                    {
                        ctaText: y
                    } = I(),
                    j = b("allDonations"),
                    C = b("topDonations"),
                    k = {
                        placement: C ? "Top Donations List" : "Recent Donations List",
                        promptUrl: `/f/${e.query.campaignUrl}/donate?source=btn_donations_message`
                    };
                return (0, tk.XP)({
                    trackingId: j ? "donations see all" : "donations see top"
                }), (0, a.useEffect)(() => {
                    (0, M.SB)(j ? "lb_donation_list" : "lb_donation_top")
                }, []), (0, r.jsx)(nr.R, {
                    dataTestId: "donations-modal",
                    dataViewId: j ? "lb_donation_list" : "lb_donation_top",
                    footer: g && (0, r.jsx)("div", {
                        "data-element-id": "btn_donations_donate",
                        id: "donations-modal-cta",
                        children: (0, r.jsx)(O.H, {
                            placement: C ? "top donations modal" : "donations modal",
                            source: "btn_donations_donate",
                            children: y || (0, v.t)("Donate now")
                        })
                    }),
                    heading: (0, r.jsx)("h2", {
                        className: "hrt-mb-0",
                        children: (0, v.t)("Donations ({{totalDonationCount}})", {
                            totalDonationCount: d
                        })
                    }),
                    isOpen: !0,
                    onClose: _,
                    subHeading: (0, r.jsxs)(r.Fragment, {
                        children: [m.length >= 10 && (0, r.jsx)("div", {
                            className: "hrt-mt-1",
                            children: (0, r.jsxs)(nn.t, {
                                activeIndex: j ? 0 : 1,
                                children: [(0, r.jsx)(nt.O, {
                                    as: "button",
                                    index: 0,
                                    isActive: j,
                                    onClick: () => x("allDonations"),
                                    tabStyle: "pill",
                                    children: (0, v.t)("Newest")
                                }), (0, r.jsx)(nt.O, {
                                    as: "button",
                                    index: 1,
                                    isActive: C,
                                    onClick: () => x("topDonations"),
                                    tabStyle: "pill",
                                    children: (0, v.t)("Top")
                                })]
                            })
                        }), C && g && f.formattedValue && (0, r.jsx)("div", {
                            className: "hrt-mt-2",
                            children: (0, v.t)("Be a top donor for {{- beneOrOrganizerName}} with {{- averageTopDonation}} or more.", {
                                beneOrOrganizerName: n && t ? t.name : l || c,
                                averageTopDonation: f.formattedValue
                            })
                        })]
                    }),
                    willClickOutsideClose: !1,
                    children: (0, r.jsxs)(ed.I, {
                        trackingId: "donations-modal",
                        children: [C && p && (0, r.jsx)(ni.b, {
                            donationPromptProps: k,
                            includeDonationPrompts: g,
                            items: p
                        }), j && (0, r.jsx)(na._, {
                            ajaxOnScroll: h,
                            buttonText: (0, v.t)("Show more"),
                            dataElementId: "btn_donate_moredonations",
                            itemCount: m.length,
                            maxItems: d,
                            showMore: !u,
                            children: (0, r.jsx)(ni.b, {
                                donationPromptProps: k,
                                includeDonationPrompts: g,
                                items: m
                            })
                        }), (u || p) && (0, r.jsxs)("div", {
                            className: "hrt-mb-1 hrt-mt-4",
                            children: [(0, v.t)("That’s all the donors. "), (0, r.jsx)(eb.A, {
                                onClick: _,
                                children: (0, v.t)("Close")
                            })]
                        })]
                    })
                })
            }
            var ns = n(11541);
            let nl = o()(() => Promise.all([n.e(13370), n.e(10485)]).then(n.bind(n, 710485)).then(e => e.GoalHistoryModal), {
                    loadableGenerated: {
                        webpack: () => [710485]
                    }
                }),
                nc = o()(() => n.e(37927).then(n.bind(n, 237927)).then(e => e.InReviewBanner), {
                    loadableGenerated: {
                        webpack: () => [237927]
                    }
                });
            var nd = n(237447),
                nu = n(487222),
                nm = n(498998),
                nh = n.n(nm);

            function nf() {
                let [e, t] = a.useState(), {
                    serviceDate: n
                } = (0, N.g)(), {
                    locale: i
                } = (0, ew.bN)(), o = "https://d25oniaj7o2jcw.cloudfront.net";
                return (a.useEffect(() => {
                    if (n) {
                        let e = new Date(n),
                            a = (0, nu.WU)(i, "PPP")(e),
                            o = (0, nd.Z)(e, new Date);
                        0 === o ? t((0, r.jsxs)(v.cC, {
                            children: [(0, r.jsx)("strong", {
                                children: "Today"
                            }), " is the service", (0, r.jsx)("br", {}), {
                                dateFormatted: a
                            }]
                        })) : 1 === o ? t((0, r.jsxs)(v.cC, {
                            children: [(0, r.jsxs)("strong", {
                                children: [{
                                    daysFromNow: o
                                }, " day"]
                            }), " until service", (0, r.jsx)("br", {}), {
                                dateFormatted: a
                            }]
                        })) : o > 1 && t((0, r.jsxs)(v.cC, {
                            children: [(0, r.jsxs)("strong", {
                                children: [{
                                    daysFromNow: o
                                }, " days"]
                            }), " until service", (0, r.jsx)("br", {}), {
                                dateFormatted: a
                            }]
                        }))
                    }
                }, [n]), e) ? (0, r.jsxs)("div", {
                    className: nh().mmeServiceBanner,
                    "data-chromatic": "ignore",
                    children: [(0, r.jsx)("div", {
                        className: nh().text,
                        "data-testid": "banner",
                        children: e
                    }), (0, r.jsx)("img", {
                        alt: (0, v.t)("Illustration of flowers"),
                        src: `${o}/lilly.png`,
                        srcSet: `${o}/lilly.png 1x, ${o}/lilly@2x.png 2x, ${o}/lilly@3x.png 3x`
                    })]
                }) : null
            }
            let np = o()(() => Promise.all([n.e(42444), n.e(51823)]).then(n.bind(n, 651823)).then(e => e.PartnerBanner), {
                loadableGenerated: {
                    webpack: () => [651823]
                }
            });
            var ng = n(500301),
                nx = n(274419),
                nv = n.n(nx);

            function n_() {
                let e = (0, S.x)(),
                    t = T(),
                    {
                        ctaText: n
                    } = I(),
                    {
                        isRecurringDefaultEnabled: a
                    } = (0, p.q)();
                return t ? (0, r.jsxs)(ed.I, {
                    className: nv().container,
                    trackingId: "ctas",
                    children: [(0, r.jsx)("div", {
                        className: nv().shareButton,
                        "data-element-id": "btn_share",
                        children: (0, r.jsx)(P.T, {
                            onClick: () => {
                                (0, M.$h)({
                                    platform: M.Os.AMPLITUDE,
                                    data: {
                                        campaignShare: P.X.MAIN
                                    }
                                })
                            },
                            placement: "fundraiser sidebar",
                            children: (0, v.t)("Share")
                        })
                    }), e && (0, r.jsx)("div", {
                        className: nv().donateButton,
                        "data-element-id": "btn_donate",
                        children: (0, r.jsx)(O.H, {
                            placement: "fundraiser sidebar",
                            source: "btn_donate",
                            children: n || (a ? (0, v.t)("Donate monthly") : (0, v.t)("Donate now"))
                        })
                    })]
                }) : null
            }
            let nb = o()(() => Promise.all([n.e(32006), n.e(17440)]).then(n.bind(n, 317440)).then(e => e.StatusMessage), {
                    loadableGenerated: {
                        webpack: () => [317440]
                    }
                }),
                ny = o()(() => Promise.all([n.e(54897), n.e(9931)]).then(n.bind(n, 209931)).then(e => e.TeamMembers), {
                    loadableGenerated: {
                        webpack: () => [209931]
                    }
                }),
                nj = o()(() => Promise.all([n.e(32827), n.e(4129), n.e(92651), n.e(52097)]).then(n.bind(n, 852097)).then(e => e.Updates), {
                    loadableGenerated: {
                        webpack: () => [852097]
                    }
                }),
                nN = o()(() => Promise.all([n.e(32827), n.e(4129), n.e(92651), n.e(82142)]).then(n.bind(n, 882142)).then(e => e.UpdatesModal), {
                    loadableGenerated: {
                        webpack: () => [882142]
                    }
                });
            var nC = n(29257),
                nk = n(252440),
                nw = n(233619);
            let nE = (e, t) => {
                let {
                    data: n,
                    error: r,
                    loading: a
                } = (0, el.fdL)({
                    variables: {
                        slug: e,
                        codes: null
                    },
                    ...{ ...t,
                        ssr: !1
                    }
                }), i = n ? .fundraiser ? .collections, o = !!i ? .length;
                return !n || r || a ? {
                    isCollectionsAllowed: !1
                } : {
                    isCollectionsAllowed: o
                }
            };
            var nI = n(647512),
                nS = n(311499),
                nD = n(138035),
                nR = n(632878),
                nA = n(381260),
                nT = n(14428),
                nM = n(309578),
                nO = n(600563),
                nP = n(147695);

            function nF() {
                let {
                    openModal: e
                } = (0, B.o)(), {
                    donations: {
                        count: t
                    }
                } = (0, es.x)(), n = (0, k.ac)(k.zP.X_LARGE_ONLY);
                return t >= 10 ? (0, r.jsxs)("div", {
                    className: "hrt-disp-flex hrt-justify-between hrt-mt-3",
                    children: [(0, r.jsx)(e0.k, {
                        as: "button",
                        className: "hrt-width-full hrt-mr-2",
                        "data-element-id": "btn_donate_moredonations",
                        "data-tracking-id": "donations see all",
                        onClick: () => e("allDonations"),
                        size: "medium",
                        variant: "default",
                        children: (0, v.t)("See all")
                    }), (0, r.jsxs)(e0.k, {
                        as: "button",
                        className: "hrt-width-full",
                        "data-element-id": "btn_donate_topdonations",
                        "data-tracking-id": "donations see top",
                        onClick: () => e("topDonations"),
                        size: "medium",
                        variant: "default",
                        children: [n && (0, r.jsx)(e0.J, {
                            className: "hrt-mr-1",
                            name: "star",
                            size: "small"
                        }), (0, v.t)("See top")]
                    })]
                }) : t > 5 ? (0, r.jsx)("div", {
                    className: "hrt-disp-flex hrt-justify-center hrt-mt-3",
                    children: (0, r.jsx)(e0.k, {
                        as: "button",
                        className: "hrt-width-full",
                        "data-element-id": "btn_donate_moredonations",
                        onClick: () => e("allDonations"),
                        size: "medium",
                        variant: "default",
                        children: (0, v.t)("See all")
                    })
                }) : null
            }
            var nL = n(776058),
                nz = n(136883),
                nU = n(163450),
                n$ = n(795523);

            function nB(e) {
                let {
                    className: t
                } = e, n = (0, n$.a)(n$.z.LARGE_UP), {
                    createdAt: i,
                    publishedAt: o
                } = (0, N.g)(), s = new Date, l = new Date(o || i), {
                    locale: d
                } = (0, ew.bN)(), u = (0, nU.K)(d, l), m = (0, nu.BK)({
                    locale: d,
                    addSuffix: !0
                })(l), [h, f] = a.useState(u);
                return a.useEffect(() => {
                    if (1 > (0, nz.Z)(s, l)) {
                        f((0, v.t)("Just now"));
                        return
                    }
                    if (n) {
                        if (7 >= (0, nL.Z)(s, l)) {
                            f((0, v.t)("Created {{timeAgo}}", {
                                timeAgo: m
                            }));
                            return
                        }
                        f((0, v.t)("Created {{localizedDate}}", {
                            localizedDate: u
                        }))
                    }
                    if (!n) {
                        if (7 >= (0, nL.Z)(s, l)) {
                            f(m);
                            return
                        }
                        f(u)
                    }
                }, [n]), (0, r.jsx)("span", {
                    className: c()(t, "a-created-date"),
                    suppressHydrationWarning: !0,
                    children: h
                })
            }
            let nG = o()(() => n.e(78333).then(n.bind(n, 278333)).then(e => e.PartnerDesignatedRecipientBanner), {
                loadableGenerated: {
                    webpack: () => [278333]
                }
            });
            var nH = n(678218),
                nV = n(875020),
                nq = n(1567),
                nZ = n.n(nq);

            function nQ(e) {
                let {
                    items: t
                } = e, {
                    categoryId: n
                } = (0, N.g)();
                return (0, tc._s)(n) ? (0, r.jsx)(eQ.S, {
                    type: "suppress",
                    children: (0, r.jsx)(nV.R, {
                        className: nZ().dateAndCategory,
                        items: t
                    })
                }) : null
            }
            var nK = n(357771);
            let nY = o()(() => Promise.all([n.e(95022), n.e(23893)]).then(n.bind(n, 323893)), {
                loadableGenerated: {
                    webpack: () => [323893]
                }
            });
            var nW = n(80015);
            let nJ = o()(() => Promise.all([n.e(95718), n.e(49378)]).then(n.bind(n, 649378)), {
                loadableGenerated: {
                    webpack: () => [649378]
                }
            });
            var nX = n(910257),
                n0 = n.n(nX);

            function n2(e) {
                let {
                    children: t,
                    on: n,
                    position: a,
                    viewId: i
                } = e, {
                    data: o
                } = (0, eP.jY)(), {
                    fundraiserStatus: s
                } = (0, N.g)(), l = eO({
                    authenticatedUserRoles: o ? .roles,
                    campaignStatus: s
                });
                return (0, r.jsx)(eT.h, {
                    elementId: "sticky-portal",
                    children: (0, r.jsx)(ed.I, {
                        "aria-hidden": !(n && l),
                        className: n0().stickyCta,
                        "data-chromatic": "ignore",
                        "data-view-id": i,
                        id: "sticky-cta",
                        trackingId: "sticky footer",
                        children: (0, r.jsx)("div", {
                            className: c()(n0().inner, "cta-clips-gray", {
                                [n0().isOpen]: n,
                                [n0().top]: "top" === a,
                                [n0().topOpen]: "top" === a && n,
                                [n0().bottom]: "bottom" === a,
                                [n0().bottomOpen]: "bottom" === a && n
                            }),
                            children: t
                        })
                    })
                })
            }
            var n1 = n(329721),
                n7 = n(198955),
                n3 = n(689665),
                n5 = n(435494);
            let n6 = {
                CA: "Region 1",
                HI: "Region 1",
                NV: "Region 1",
                CO: "Region 2",
                ID: "Region 2",
                OR: "Region 2",
                WA: "Region 2",
                AK: "Region 2",
                AZ: "Region 3",
                TX: "Region 3",
                NM: "Region 3",
                MN: "Region 4",
                KS: "Region 4",
                OK: "Region 4",
                MO: "Region 4",
                WI: "Region 5a",
                MI: "Region 5a",
                IN: "Region 5a",
                IL: "Region 5b",
                OH: "Region 5b",
                WV: "Region 5b",
                AR: "Region 6",
                KY: "Region 6",
                TN: "Region 6",
                NC: "Region 6",
                SC: "Region 6",
                FL: "Region 7a",
                GA: "Region 7b",
                AL: "Region 7b",
                MS: "Region 7b",
                LA: "Region 7b",
                PA: "Region 8",
                VA: "Region 8",
                MD: "Region 8",
                DC: "Region 8",
                DE: "Region 8",
                MA: "Region 9a",
                CT: "Region 9a",
                VT: "Region 9a",
                RI: "Region 9a",
                NH: "Region 9a",
                ME: "Region 9a",
                NY: "Region 9b",
                NJ: "Region 9b",
                ND: "Region 10",
                SD: "Region 10",
                NE: "Region 10",
                IA: "Region 10",
                WY: "Region 10",
                MT: "Region 10",
                UT: "Region 10"
            };
            var n4 = n(931439);

            function n8() {
                let {
                    currentAmount: e,
                    goalAmount: t,
                    median: n
                } = (0, N.g)(), r = (t ? .amount || 0) - (e ? .amount || 0);
                return !!(n && r > 0 && r / n <= 5)
            }
            var n9 = n(230992),
                re = n(850322),
                rt = n(21406),
                rn = n(286290),
                rr = n(937125),
                ra = n(177868),
                ri = n.n(ra);
            let ro = o()(() => Promise.all([n.e(34105), n.e(89861)]).then(n.bind(n, 189861)).then(e => e.AiCoachingBanner), {
                    loadableGenerated: {
                        webpack: () => [189861]
                    }
                }),
                rs = o()(() => Promise.all([n.e(85557), n.e(10106)]).then(n.bind(n, 310106)).then(e => e.Leaderboard), {
                    loadableGenerated: {
                        webpack: () => [310106]
                    },
                    ssr: !1
                }),
                rl = o()(() => Promise.all([n.e(82340), n.e(86208), n.e(547)]).then(n.bind(n, 757873)).then(e => e.ImageGallery), {
                    loadableGenerated: {
                        webpack: () => [757873]
                    }
                });

            function rc(e) {
                (0, nR.q)();
                let t = (0, s.useRouter)(),
                    {
                        locale: n
                    } = (0, ew.bN)(),
                    {
                        campaignUrl: i,
                        lang: o,
                        ...l
                    } = t.query,
                    x = (0, S.x)(),
                    {
                        beneficiary: _,
                        campaign: j,
                        categoryId: C,
                        charity: w,
                        commentsEnabled: E,
                        currentAmount: I,
                        donationCount: A,
                        fundraiserStatus: O,
                        isGfmDotOrgFund: P,
                        location: F,
                        mediaType: L,
                        partner: ea,
                        publishedAt: ei,
                        fundId: eo,
                        fundUrl: es
                    } = (0, N.g)(),
                    ec = (0, tc._s)(C),
                    eu = D.f() ? .personRolesForFundraiser,
                    em = (0, $.h)(),
                    eh = T(),
                    ef = function() {
                        let {
                            query: e
                        } = (0, s.useRouter)(), {
                            hasDonation: t,
                            donation: n
                        } = (0, G.V)({
                            campaignUrl: `${e.campaignUrl}`
                        }), r = (0, nw.s)(), {
                            locale: a
                        } = (0, ew.bN)();
                        if (t) return function(e, t, n) {
                            let r = e.isAnonymous ? (0, v.t)("Anonymous") : e.name;
                            return {
                                amountFormatted: t.formatAsCurrency(e.amount.amount),
                                donor: {
                                    fullName: r,
                                    initials: e.isAnonymous ? "" : (0, nk.Qm)(r),
                                    profileImage: void 0
                                },
                                offlineDonation: !1,
                                timeAgo: (0, nu.BK)({
                                    locale: n
                                })(new Date(e.createdAt)),
                                topSupporterType: nC.ti.YOUR_DONATION
                            }
                        }(n, r, a)
                    }(),
                    ex = n8(),
                    {
                        donations: ev
                    } = (0, e1.b)(),
                    e_ = function() {
                        let e = (0, nK.o)(),
                            t = function() {
                                let {
                                    query: e
                                } = (0, s.useRouter)(), {
                                    fundraiserStatus: t
                                } = (0, N.g)(), {
                                    hasDonation: n,
                                    donation: r
                                } = (0, G.V)({
                                    campaignUrl: `${e.campaignUrl}`
                                });
                                return n && !!r.checkoutId && (t === R.c4.ACTIVE || t === R.c4.CLOSED)
                            }();
                        return e || t
                    }(),
                    eb = function() {
                        let {
                            donations: e
                        } = (0, e1.b)(), t = n8(), n = function() {
                            let {
                                median: e
                            } = (0, N.g)(), t = 5 * Math.round(e / 5);
                            return n4.HO.includes(t) ? t + 5 : t
                        }(), r = (0, nw.s)(), a = e && e.length && t ? n : 20, i = r.formatAsCurrency(a);
                        return {
                            raw: a,
                            formatted: i
                        }
                    }(),
                    [ey, ej] = (0, a.useState)(!1),
                    eN = (0, nW.p)().isCoBeneOrTeamMember || ey,
                    eE = L === el.DDH.GFM_MUX_CLIPS,
                    eI = (0, k.xG)(),
                    [eS, eD] = (0, a.useState)(!1),
                    [eT, eM] = (0, a.useState)(eE),
                    [eO, eF] = (0, a.useState)(!1),
                    [eL, eG] = (0, a.useState)(!1),
                    {
                        enabled: eH,
                        collectionsIntroText: eV
                    } = (0, t6.ph)(),
                    {
                        closeModal: eq,
                        isModalOpen: eZ
                    } = (0, B.o)(),
                    {
                        isChatModalOpen: eQ
                    } = (0, W.t)(),
                    {
                        isChatEnabled: eK
                    } = (0, Y.t)(),
                    eY = eZ("goalLog"),
                    [eW, eJ, e0] = (0, tb.k)(!1),
                    e7 = (0, k.ac)(k.zP.MEDIUM_DOWN),
                    e5 = (0, k.ac)(k.zP.SMALL_ONLY),
                    e6 = (0, k.ac)(k.zP.LARGE_UP),
                    {
                        isCollectionsAllowed: e4
                    } = nE(`${i}`, {
                        skip: !eH
                    }),
                    e8 = (0, nS.EJ)(n).localeSegment,
                    e9 = eo ? Number(eo) : 0,
                    {
                        enableUgcGallery: te,
                        galleryImages: tt
                    } = (0, nA.x)({
                        fundId: e9,
                        slug: es
                    }),
                    {
                        showEmptyState: tn,
                        tileAmounts: tr
                    } = (0, eU.w)(),
                    ta = void 0 !== l.organizer_invite_url || ey,
                    {
                        isEnabled: ti,
                        themeStr: to
                    } = (0, e$.QE)({
                        partnerId: ea ? .id,
                        campaignId: j ? .id
                    }),
                    tl = (0, tk.Ke)(),
                    {
                        designatedRecipient: tu
                    } = (0, nM._)(ea),
                    {
                        shouldTrackRecurringIsDefaultExperiment: tm
                    } = (0, p.q)(),
                    {
                        shouldTrackExposure: tv,
                        themeStr: t_
                    } = (0, f.E)(),
                    ty = tv ? t_ : to,
                    {
                        shouldTrackExposure: tj,
                        showVariantA: tN,
                        showVariantB: tC
                    } = (0, m.F)(),
                    tw = (tN || tC) && e5,
                    tE = tN && e5,
                    tI = tC && e5,
                    [tS, tD] = (0, a.useState)(!1),
                    {
                        showVariantA: tR,
                        shouldTrackExposure: tA
                    } = (0, h.J)(),
                    [tT, tM] = (0, a.useState)(!1),
                    tO = tR && e7 && !e5,
                    tP = (0, a.useRef)(null);
                ! function() {
                    let e = (0, s.useRouter)(),
                        {
                            donations: t
                        } = (0, N.g)(),
                        {
                            donation: n
                        } = (0, G.V)({
                            campaignUrl: `${e.query.campaignUrl}`
                        }),
                        r = `donation.${e.query.campaignUrl}`;
                    a.useEffect(() => {
                        let a = a => {
                            t.some(e => e.checkoutId === n.checkoutId) && function(e) {
                                let {
                                    url: t,
                                    campaignUrl: n
                                } = e;
                                if (t.startsWith(`/f/${n}`)) {
                                    let e = t.split("/").at(3);
                                    if (!e || V.includes(e)) return !1
                                }
                                return !0
                            }({
                                url: a,
                                campaignUrl: `${e.query.campaignUrl}`
                            }) && (0, H.lD)(r)
                        };
                        return e.events.on("routeChangeStart", a), () => {
                            e.events.off("routeChangeStart", a)
                        }
                    }, [e, n.checkoutId])
                }(),
                function() {
                    let e = (0, s.useRouter)(),
                        t = e.query.campaignUrl,
                        n = `${t}.amount.current_amount`,
                        r = `${t}.amount.goal_amount`,
                        i = `${t}.amount.currentAmount`,
                        o = `${t}.amount.goalAmount`,
                        l = `${t}.amount.ts`,
                        c = new Date,
                        d = (0, H.St)(l),
                        u = () => {
                            (0, H.lD)(n), (0, H.lD)(r), (0, H.lD)(i), (0, H.lD)(o), (0, H.lD)(l)
                        };
                    (0, a.useEffect)(() => {
                        if (!d || d && (0, q.Z)(c, (0, Z.Z)(d)) > 3) {
                            u();
                            return
                        }
                        return e.events.on("routeChangeStart", u), () => {
                            e.events.off("routeChangeStart", u)
                        }
                    })
                }(),
                function() {
                    let {
                        data: e
                    } = (0, eP.jY)(), {
                        beneficiary: t,
                        organizer: n
                    } = (0, N.g)(), r = {
                        isCO: e ? .user_id === n ? .id,
                        isBene: e ? .user_id === t ? .userId
                    };
                    (0, a.useEffect)(() => {
                        e && (0, M.$Y)(r)
                    }, [e])
                }(),
                function(e) {
                    let t = (0, s.useRouter)(),
                        {
                            data: n
                        } = (0, eP.jY)(),
                        r = (0, n3.z)(n),
                        i = (0, n7.S)(),
                        {
                            title: o,
                            categoryId: l,
                            location: c
                        } = (0, N.g)(),
                        d = c.city && c.statePrefix && !c.city.endsWith(`, ${c.statePrefix}`) ? `${c.city}, ${c.statePrefix}` : c.city,
                        u = (0, tc.RK)(),
                        m = ["Campaign"],
                        {
                            path: h,
                            searchParams: f
                        } = td(t.asPath),
                        p = function(e) {
                            let {
                                searchParams: t,
                                paramToRemove: n
                            } = e, r = new URLSearchParams(t);
                            return r.delete(n), r
                        }({
                            searchParams: (0, n5.y)(Object.fromEntries(new URLSearchParams(f))),
                            paramToRemove: "qid"
                        });
                    l && u[l] ? m.push(u[l].keyname) : m.push("No-Category"), m.push(n6[i.campaignState] || "No-Region"), a.useEffect(() => {
                        (0, M.$h)({
                            platform: M.Os.CHARTBEAT,
                            data: {
                                sections: m.join(","),
                                title: `${o}${d}`
                            }
                        }), (0, M.$h)({
                            platform: M.Os.AMPLITUDE,
                            data: {
                                partner: t.query.partner,
                                ...i
                            }
                        }), i && e && ((0, M.$h)({
                            platform: M.Os.ALGOLIA,
                            data: {
                                fundId: i.campaignId,
                                index: ts.config.algolia.hitIndex,
                                queryId: e
                            }
                        }), t.replace({
                            pathname: h,
                            query: p.toString()
                        }, void 0, {
                            shallow: !0
                        })), !n || !n.user_id || r && r.user_id && r.person_id && r.person_id === n.person_id && r.user_id === n.user_id || (n.person_id && (0, M.$h)({
                            platform: M.Os.GOOGLEANALYTICS,
                            data: {
                                personId: n.person_id
                            }
                        }), (0, M.$h)({
                            platform: M.Os.MAGRITTE,
                            data: {
                                personId: n.person_id,
                                userId: n.user_id
                            }
                        }))
                    }, [n])
                }(e.searchQueryId),
                function() {
                    let {
                        campaignUrl: e,
                        modal: t,
                        ...n
                    } = (0, s.useRouter)().query, {
                        title: r,
                        serviceDate: i,
                        fundId: o,
                        mediaType: l
                    } = (0, N.g)(), {
                        data: c,
                        isLoading: d
                    } = (0, eP.jY)(), m = (0, tk.HO)(), h = (0, N.g)(), f = (0, n9.J)(), p = (0, rn.De)(h, f), {
                        canShareToNative: g
                    } = (0, rr.I)(), [x, v] = a.useState(!1), _ = {
                        fundraiser_is_in_smart_goals: (0, R.$c)(h ? .smartGoalsOptIn),
                        payment_processor: (0, re.fp)(h.paymentProcessor)
                    }, b = (0, re.es)(p, _), y = () => {
                        let e = {
                            page_referrer: document.referrer,
                            ...t ? {
                                behind_modal: `${t}`.toLowerCase()
                            } : {}
                        };
                        m(tk.sU.ViewDetail, b, e)
                    };
                    a.useEffect(() => {
                        x && y()
                    }, [x]), a.useEffect(() => {
                        var t;
                        d || (0, M.SB)(u.vc.campaign.dataViewId, {
                            fundId: o,
                            fundName: r,
                            fundUrl: `/f/${e}`,
                            behindModal: (t = `/f/${e}`).match(/\/f\/.*\/error.*/g) ? "Campaign_Error" : t.match("/donationsPaused") ? "Donation_Paused" : t.match(/\/f\/.*\/.*\/.*\/gallery/) ? "Gallery" : t.match(/\/f\/.*\/team.*/g) ? "Team" : t.match(/\/f\/.*\/thankyou.*/g) ? "Post_Donate" : t.match(/\/f\/.*\/share.*/g) ? "Share" : t.match(/\/f\/.*\/donations.*/g) || t.match(/\/f\/.*\/(donations|topdonations).*/g) ? "Donation" : "",
                            userId: c ? .user_id ? ? 0,
                            nativeSharing: g,
                            serviceDate: !!i,
                            mediatype: (0, er.uR)(l),
                            ...(0, rt.Z)(n)
                        })
                    }, [d, c]), a.useEffect(() => {
                        v(!1)
                    }, [e]), a.useEffect(() => {
                        y()
                    }, [e])
                }(),
                function() {
                    let e = (0, s.useRouter)();
                    a.useEffect(() => {
                        e.query ? .preview === "1" && (0, n1.LU)("__next")
                    }, [])
                }(), (0, nP.qx)(i, l.attribution_id), (0, nT.Y)(), (0, a.useEffect)(() => {
                    (tN || tC) && setTimeout(() => {
                        tD(!0)
                    }, 200)
                }, [tN, tC]), (0, a.useEffect)(() => {
                    if (!F.countryCode || !eu) return;
                    let e = [],
                        t = !!(0, H.St)(`donation.${i}`);
                    (eu ? .isDonor || t) && e.push("donor"), eu ? .isOrganizer && e.push("organizer"), eu ? .isBene && e.push("beneficiary"), eu ? .isTeamMember && e.push("co-organizer"), (0, nD.wp)({
                        fund_amount_raised: I ? .amount || 0,
                        fund_category: ec.keyname ? .toLowerCase(),
                        fund_country: F.countryCode,
                        fund_donation_count: A,
                        fund_has_bene: !!_,
                        fund_id: e9,
                        fund_published_at: ei,
                        fund_user_roles: e.join(",")
                    })
                }, [I ? .amount, ec, i, A, F.countryCode, _, e9, ei, eu]), (0, a.useEffect)(() => {
                    eY && (eF(!0), e0())
                }, [eY]), (0, a.useEffect)(() => {
                    if (eO && eW) {
                        let e = document.getElementById("updates");
                        e && e.scrollIntoView({
                            behavior: "smooth"
                        })
                    }
                }, [eO, eW]), (0, a.useEffect)(() => {
                    "update" === l.contentType && l.contentId && tM(!0)
                }, [l.contentType, l.contentId]), (0, a.useEffect)(() => {
                    tv && tl("Component Viewed", tk.Bs.Other, {
                        tracking_id: "pink campaign page",
                        surface: "fundraiser",
                        page_url: window.location.href
                    })
                }, [tv, tl]);
                let tF = l ? .aiCoach === "true";
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsxs)("main", {
                        children: [(0, r.jsxs)(eC.q, {
                            children: [tm && (0, r.jsx)(eA, {
                                experimentKey: p.g.name
                            }), tj && e5 && (0, r.jsx)(eA, {
                                experimentKey: m.J.name
                            }), tv && (0, r.jsx)(eA, {
                                experimentKey: f.b.name
                            }), tA && !e5 && (0, r.jsx)(eA, {
                                experimentKey: h.Y.name
                            })]
                        }), (0, r.jsxs)(X.W, {
                            className: `${ri().campaign} t-campaign-page-template-content`,
                            children: [eK && eQ && (e7 ? (0, r.jsx)(Q, {}) : (0, r.jsx)(K, {
                                viewId: u.vc.campaign.dataViewId
                            })), (eZ("allDonations") || eZ("topDonations")) && (0, r.jsx)(eC.q, {
                                children: (0, r.jsx)(ed.I, {
                                    trackingId: "donations-modal",
                                    children: (0, r.jsx)(no, {})
                                })
                            }), eZ("team") && (0, r.jsx)(ny, {}), eZ("donationsPaused") && (0, r.jsx)(ns.E, {}), eZ("warning") && (0, r.jsx)(t8, {}), eZ("share") && (0, r.jsx)(eC.q, {
                                children: (0, r.jsx)(tx, {})
                            }), eZ("updates") && !tT && (0, r.jsx)(nN, {}), eZ("error") && (0, r.jsx)(g, {}), eZ("contact") && (0, r.jsx)(tp, {}), eY && (0, r.jsx)(nl, {
                                onViewUpdates: function() {
                                    eq(), setTimeout(eJ, 100)
                                }
                            }), (0, r.jsx)(th, {
                                hasSensitiveQueryParams: !!(l ? .teamInvite || l ? .d)
                            }), tF && (0, r.jsx)(ro, {}), eN && (0, r.jsx)(nJ, {}), ta && (0, r.jsx)(tg, {
                                hasClaimed: ey,
                                onFundraiserClaimed: () => ej(!0)
                            }), e_ && !eN && (0, r.jsx)(nY, {}), tw || tO ? (0, r.jsx)(ez, {
                                delayMs: tO ? 800 : void 0,
                                isMediumDesktopViewMilestoneVariantA: tO,
                                on: eT || tE || tO,
                                viewId: u.vc.campaign.dataViewId,
                                children: (0, r.jsx)(eR, {
                                    animated: !tI,
                                    isMediumDesktopViewMilestoneVariantA: tO
                                })
                            }) : (0, r.jsx)(n2, {
                                on: eT && !tw && !tO,
                                position: "bottom",
                                viewId: u.vc.campaign.dataViewId,
                                children: (0, r.jsx)(z, {})
                            }), (0, r.jsxs)("div", {
                                className: c()("p-campaign", {
                                    clips: eE,
                                    earlyStateTiles: tn && tr,
                                    heroMediaViewer: tw,
                                    animateCampaign: tw && tS,
                                    isLoading: (tN || tC) && !tS
                                }),
                                "data-view-id": u.vc.campaign.dataViewId,
                                children: [(0, r.jsx)(np, {}), e7 && (0, r.jsxs)(r.Fragment, {
                                    children: [(O === R.c4.CLOSED || O === R.c4.DEACTIVATED) && (0, r.jsx)(nb, {}), (0, r.jsx)(nf, {}), (0, r.jsx)("div", {
                                        className: c()(ri().leaderboardNudgeMobile, "hrt-align-center", "hrt-disp-grid"),
                                        children: ti && (0, r.jsx)(t1, {
                                            leaderboardRef: tP,
                                            theme: ty
                                        })
                                    }), !tw && !tO && (0, r.jsx)(ng.A, {}), !eE && (0, r.jsx)("div", {
                                        className: ri().shareAndDonate,
                                        children: (0, r.jsx)(ek.$, {
                                            condition: !tw,
                                            parent: e => {
                                                let {
                                                    children: t
                                                } = e;
                                                return (0, r.jsx)(d.df, {
                                                    onChange: e => eM(!e),
                                                    children: t
                                                })
                                            },
                                            children: !tw && !tO && (0, r.jsx)(n_, {})
                                        })
                                    })]
                                }), !e7 && (0, r.jsxs)(t5, {
                                    banner: (0, r.jsx)(nf, {}),
                                    isLeaderboardNudgeEnabled: ti,
                                    isMiletsoneDesktopExperimentActive: tR && e6,
                                    leaderboardRef: tP,
                                    leaderboardThemeStr: ty,
                                    children: [(0, r.jsx)(ng.A, {}), (0, r.jsx)("div", {
                                        className: `${ri().shareAndDonate} hrt-mb-2`,
                                        children: (0, r.jsx)(n_, {})
                                    }), (O === R.c4.CLOSED || O === R.c4.DEACTIVATED) && (0, r.jsx)(nb, {}), (0, r.jsx)(e2.mJ, {}), ev && (0, r.jsx)(e2.a$, {
                                        currentUserDonation: ef
                                    }), x && (0, r.jsx)(e2.yx, {}), (0, r.jsx)(nF, {})]
                                }), (0, r.jsxs)(ek.$, {
                                    condition: tw,
                                    parent: e => {
                                        let {
                                            children: t
                                        } = e;
                                        return (0, r.jsx)(d.df, {
                                            onChange: e => eM(!e),
                                            children: t
                                        })
                                    },
                                    children: [(0, r.jsx)(ep, {}), tI && (0, r.jsx)("div", {
                                        className: ri().donationOverview,
                                        "data-testid": "static-donation-overview",
                                        children: (0, r.jsx)(eR, {
                                            className: "hrt-mt-2 hrt-mb-2"
                                        })
                                    })]
                                }), (0, r.jsx)(nH.l, {
                                    className: c()({
                                        "hrt-hide-max-md": tN || tC,
                                        [ri().milestone1MobileHideTitle]: tN || tC
                                    }),
                                    wrapperClassName: tN || tC ? "hrt-hide-max-md" : ""
                                }), (0, r.jsx)(ed.I, {
                                    className: c()("p-campaign-byline", {
                                        "hrt-hide-max-md": tN || tC
                                    }),
                                    trackingId: "byline",
                                    children: (0, r.jsx)(eB.c, {
                                        showShortenedCopyBylinesVariantA: tR && !e5
                                    })
                                }), (0, r.jsxs)("div", {
                                    className: "p-campaign-description",
                                    children: [(0, r.jsx)(eg.i, {
                                        className: c()("hrt-mb-0 hrt-mt-0", {
                                            "hrt-hide-max-md": tN
                                        })
                                    }), tu && (0, r.jsxs)(r.Fragment, {
                                        children: [(0, r.jsx)(nG, {}), (0, r.jsx)(eg.i, {
                                            className: "hrt-mt-0 hrt-mb-0"
                                        })]
                                    }), O === R.c4.IN_REVIEW && (0, r.jsx)(nc, {}), (0, r.jsx)(eX, {}), (0, r.jsx)(J.bt, {
                                        feature: "reactions_endpoints",
                                        children: e => e ? (0, r.jsx)(y, {
                                            label: (0, v.t)("Show your support for this GoFundMe")
                                        }) : null
                                    }), (0, r.jsx)(e2.KY, {}), te && tt.length > 0 && (0, r.jsx)("div", {
                                        className: c()({
                                            "hrt-hide-max-md": tN || tC,
                                            "hrt-hide-min-md": tR
                                        }),
                                        children: (0, r.jsx)(rl, {
                                            galleryImages: tt
                                        })
                                    })]
                                }), (0, r.jsxs)(d.df, {
                                    className: "p-campaign-content",
                                    onChange: e => {
                                        var t;
                                        let n;
                                        n = {
                                            showComments: (t = {
                                                inView: e,
                                                showComments: eS,
                                                showActiveContent: eh
                                            }).showComments,
                                            shouldUpdateShowComments: !1
                                        }, t.inView && !t.showComments && t.showActiveContent && (n = {
                                            showComments: !0,
                                            shouldUpdateShowComments: !0
                                        }), n.shouldUpdateShowComments && eD(n.showComments), t.inView && eF(!0)
                                    },
                                    children: [eh && eO && (0, r.jsx)(nj, {}), (0, r.jsx)("div", {
                                        className: "p-campaign-content--mobile-buttons hrt-hide-min-lg",
                                        children: (0, r.jsx)(t9, {
                                            displaySuggestedDonationForGoal: ex,
                                            suggestedDonationAmount: eb
                                        })
                                    }), (0, r.jsx)(e3, {
                                        currentUserDonation: ef,
                                        showActiveContent: eh
                                    }), (0, r.jsxs)("div", {
                                        className: "hrt-hide-max-lg",
                                        children: [(0, r.jsx)(t9, {
                                            displaySuggestedDonationForGoal: ex,
                                            suggestedDonationAmount: eb
                                        }), (0, r.jsx)(eg.i, {})]
                                    }), (0, r.jsx)("div", {
                                        ref: tP,
                                        children: ti && tP.current && (0, r.jsx)(ed.I, {
                                            trackingId: "leaderboard",
                                            children: (0, r.jsx)(rs, {
                                                currentFundraiserId: eo,
                                                themeStr: ty
                                            })
                                        })
                                    }), em && (0, r.jsxs)("div", {
                                        className: "p-campaign-members",
                                        children: [(0, r.jsx)(eg.i, {
                                            className: "hrt-hide-min-lg"
                                        }), (0, r.jsx)(tf.J, { ...em,
                                            organizer: em.organizer
                                        })]
                                    }), (0, r.jsx)(d.df, {
                                        onChange: e => {
                                            e && eG(!0)
                                        },
                                        triggerOnce: !0
                                    }), eS && E && (0, r.jsx)(t4, {}), (0, r.jsxs)(r.Fragment, {
                                        children: [(0, r.jsx)(eg.i, {
                                            className: "hrt-mt-0 hrt-mb-0"
                                        }), (0, r.jsx)(nQ, {
                                            items: [(0, r.jsx)(nB, {
                                                className: "m-campaign-byline-created hrt-mr-1"
                                            }, 0), (0, r.jsx)(et.r, {
                                                className: "hrt-disp-flex hrt-align-center hrt-mx-1",
                                                href: `${e8}${ec.href}`,
                                                children: ec.name
                                            }, 1), (0, r.jsx)("div", {
                                                className: "hrt-ml-1",
                                                children: w || P ? (0, r.jsx)(U, {}) : (0, r.jsx)(b, {})
                                            }, 2)]
                                        }), (0, r.jsx)(eg.i, {
                                            className: "hrt-mt-0 hrt-mb-0"
                                        })]
                                    })]
                                }), eh && (0, r.jsx)("div", {
                                    className: "p-campaign-report-button",
                                    children: (0, r.jsxs)(en.C, {
                                        as: "a",
                                        className: "hrt-px-1",
                                        "data-element-id": "btn_report",
                                        href: `${eI}/articles/203604694`,
                                        onClick: () => {
                                            (0, nO.D$)("reportCampaignUrl", `${i}`)
                                        },
                                        children: [(0, r.jsx)(ee.J, {
                                            className: "hrt-mr-1",
                                            name: "flag",
                                            size: "default"
                                        }), (0, v.t)("Report fundraiser")]
                                    })
                                })]
                            })]
                        })]
                    }), (0, r.jsx)(ed.I, {
                        trackingId: "brand-value",
                        children: (0, r.jsx)(nI.o, {
                            className: ri().valueProposition,
                            isPPGF: !!w
                        })
                    }), e4 && (0, r.jsx)(eC.q, {
                        children: (0, r.jsx)(ed.I, {
                            trackingId: "collections",
                            children: (0, r.jsx)(t6.nW, {
                                className: `${ri().collections} hrt-mt-0`,
                                introText: eV,
                                shouldStartDataFetch: eL,
                                theme: t6.pe.DARK
                            })
                        })
                    }), e.children]
                })
            }

            function rd() {
                let e = (0, s.useRouter)(),
                    {
                        campaignUrl: t,
                        fundraiserPageParams: n
                    } = e.query,
                    {
                        searchParams: r
                    } = td(e.asPath);
                (0, a.useEffect)(() => {
                    Array.isArray(n) && n.length && e.replace({
                        pathname: `/f/${t}`,
                        query: r
                    }, void 0, {
                        shallow: !0
                    })
                }, [])
            }
        },
        703916: function(e, t, n) {
            "use strict";
            n.d(t, {
                P: function() {
                    return m
                }
            });
            var r = n(552676),
                a = n(893269),
                i = n(132922),
                o = n.n(i);
            let s = o()(() => n.e(43874).then(n.bind(n, 543874)).then(e => e.AUCharityModal), {
                    loadableGenerated: {
                        webpack: () => [543874]
                    }
                }),
                l = o()(() => n.e(97414).then(n.bind(n, 897414)).then(e => e.CACharityModal), {
                    loadableGenerated: {
                        webpack: () => [897414]
                    }
                }),
                c = o()(() => n.e(47336).then(n.bind(n, 447336)).then(e => e.IECharityModal), {
                    loadableGenerated: {
                        webpack: () => [447336]
                    }
                }),
                d = o()(() => n.e(36869).then(n.bind(n, 636869)).then(e => e.UKCharityModal), {
                    loadableGenerated: {
                        webpack: () => [636869]
                    }
                }),
                u = o()(() => n.e(72602).then(n.bind(n, 372602)).then(e => e.USCharityModal), {
                    loadableGenerated: {
                        webpack: () => [372602]
                    }
                });

            function m(e) {
                let {
                    charity: t
                } = e, n = function(e) {
                    switch (e) {
                        case a.b2.CA:
                            return l;
                        case a.b2.AU:
                            return s;
                        case a.b2.GB:
                            return d;
                        case a.b2.IE:
                            return c;
                        case a.b2.US:
                            return u;
                        default:
                            return null
                    }
                }(t.meta.country);
                return n ? (0, r.jsx)(n, { ...e
                }) : null
            }
        },
        407156: function(e, t, n) {
            "use strict";
            n.d(t, {
                pe: function() {
                    return l.pe
                },
                nW: function() {
                    return c
                },
                ph: function() {
                    return s
                }
            });
            var r = n(132922),
                a = n.n(r),
                i = n(771813),
                o = n(363456);
            let s = () => {
                let [{
                    enabled: e
                }, t] = (0, i.rm)("fe-ssr-cp-collections"), n = (0, o.t)("More ways to make a difference. Find fundraisers inspired by what you care about.");
                return t ? {
                    enabled: e,
                    collectionsIntroText: n
                } : {
                    enabled: !1,
                    collectionsIntroText: n
                }
            };
            var l = n(806347);
            let c = a()(() => Promise.all([n.e(89341), n.e(411), n.e(5911), n.e(36520)]).then(n.bind(n, 5911)).then(e => e.Collections), {
                loadableGenerated: {
                    webpack: () => [5911]
                }
            })
        },
        391800: function(e, t, n) {
            "use strict";
            n.d(t, {
                m: function() {
                    return p
                },
                r: function() {
                    return b
                }
            });
            var r = n(552676),
                a = n(275271),
                i = n(282187),
                o = n.n(i),
                s = n(77655),
                l = n(455518),
                c = n(144334),
                d = n(363456),
                u = n(24352),
                m = n(783955),
                h = n(304098),
                f = n.n(h);

            function p(e) {
                let {
                    className: t
                } = e, {
                    title: n,
                    fundId: i,
                    fundUrl: h,
                    defaultSlug: p
                } = (0, s.g)(), g = h || p, {
                    data: x
                } = (0, u.jY)(), v = (0, c.N)();
                return a.useEffect(() => {
                    m.mt.push({
                        fundId: i ? Number(i) : 0,
                        fundName: n,
                        fundUrl: g,
                        type: "mp_page_view",
                        userId: x ? .user_id || 0,
                        viewId: "msg_guarantee"
                    })
                }, []), (0, r.jsxs)("div", {
                    className: o()(t, f().bannerContainer, "hrt-mt-3"),
                    "data-testid": "competitor-banner",
                    children: [(0, r.jsxs)("h4", {
                        className: "hrt-mb-0 hrt-disp-flex",
                        children: [(0, r.jsx)(l.J, {
                            className: "hrt-mr-half",
                            name: "info",
                            size: "default"
                        }), (0, r.jsx)(r.Fragment, {
                            children: "\xa0"
                        }), (0, d.t)("GoFundMe Giving Guarantee")]
                    }), (0, r.jsx)("p", {
                        className: "hrt-mb-0 hrt-mt-1",
                        children: (0, r.jsxs)(d.cC, {
                            children: ["This fundraiser mentions donating through another platform, but please know that only donations made on GoFundMe are protected by the ", (0, r.jsx)(l.r, {
                                href: v,
                                children: "GoFundMe Giving Guarantee."
                            })]
                        })
                    })]
                })
            }
            var g = n(920647),
                x = n(9834),
                v = n(103010);
            let _ = e => {
                Array.from(document.querySelectorAll("[data-competitor=competitor-link]")).forEach(t => {
                    t.classList.contains("text-no-underline") || (t.classList.add("text-no-underline"), t.classList.add(f().competitorLink), t.addEventListener("click", e))
                })
            };

            function b(e) {
                let t = (0, g.useRouter)(),
                    {
                        openModal: n
                    } = (0, v.o)(),
                    r = a.useCallback(e => {
                        e.stopPropagation(), e.preventDefault(), m.mt.push({
                            elementId: "btn_payment_external",
                            type: "mp_page_click",
                            viewId: x.vc.campaign.dataViewId
                        }, e), n("warning")
                    }, [t.query.campaignUrl]);
                a.useEffect(() => {
                    e && r && _(r)
                }, [e, r])
            }
        },
        927511: function(e, t, n) {
            "use strict";
            n.d(t, {
                H: function() {
                    return p
                }
            });
            var r = n(552676);
            n(275271);
            var a = n(183314),
                i = n.n(a),
                o = n(282187),
                s = n.n(o),
                l = n(673474),
                c = n(850322),
                d = n(835481),
                u = n(101801),
                m = n(783955),
                h = n(855982),
                f = n.n(h);

            function p(e) {
                let {
                    additionalParams: t,
                    className: n,
                    children: a,
                    source: o,
                    placement: h = ""
                } = e, p = (0, u.u)("/donate", {
                    additionalParams: { ...t,
                        ...o ? {
                            source: o
                        } : {}
                    }
                }), {
                    showVariant: g
                } = (0, l.E)(), x = (0, c._O)();
                return (0, r.jsx)(i(), {
                    href: decodeURIComponent(p),
                    prefetch: !1,
                    legacyBehavior: !0,
                    children: (0, r.jsx)(d.K, {
                        as: "a",
                        className: s()(n, {
                            [f().projectPink]: g
                        }),
                        "data-tracking-id": g && "campaign page pink donation button",
                        href: p,
                        layout: "full",
                        onClick: e => {
                            x(h, `${e.currentTarget.textContent}`, e.currentTarget.href), m.mt.push({
                                algoliaInsights: {
                                    eventName: "campaign_click_on_donate_button",
                                    method: "convertedObjectIDsAfterSearch"
                                }
                            })
                        },
                        variant: "default-on-strong",
                        children: a
                    })
                })
            }
        },
        11541: function(e, t, n) {
            "use strict";
            n.d(t, {
                E: function() {
                    return a
                }
            });
            var r = n(132922);
            let a = n.n(r)()(() => n.e(56707).then(n.bind(n, 956707)).then(e => e.DonationsPaused), {
                loadableGenerated: {
                    webpack: () => [956707]
                }
            })
        },
        850691: function(e, t, n) {
            "use strict";
            n.d(t, {
                M: function() {
                    return d
                }
            });
            var r = n(552676),
                a = n(275271),
                i = n(770762),
                o = n(92851),
                s = n.n(o);

            function l(e) {
                let {
                    children: t,
                    options: n
                } = e, o = (0, i.useReducedMotion)(), [s, l] = a.useState(!0), c = (0, i.useSpring)({
                    config: {
                        duration: 400,
                        easing: i.easings.easeInSine
                    },
                    immediate: o ? ? !1,
                    onRest: () => {
                        n ? .to && "object" == typeof n.to && "opacity" in n.to && 0 === n.to.opacity && l(!1)
                    },
                    ...n
                });
                return s ? (0, r.jsx)(i.animated.div, {
                    style: c,
                    children: t
                }) : null
            }

            function c(e) {
                let {
                    children: t,
                    initialDelay: n = 0,
                    cascadeDelay: i = 0,
                    animateOut: o = !1
                } = e;
                if (!t) return null;
                let s = a.Children.toArray(t).length;
                return (0, r.jsx)(r.Fragment, {
                    children: a.Children.map(t, (e, t) => e ? (0, r.jsx)(l, {
                        "data-chromatic-ignore": "ignore",
                        options: {
                            delay: n + i * (s - 1 - t),
                            from: o ? {
                                transform: "translateY(0)",
                                opacity: 1,
                                height: "69px",
                                padding: "0px 0px 12px 0px"
                            } : {
                                transform: "translateY(-10px)",
                                opacity: 0,
                                height: "0px",
                                padding: "0px 0px 0px 0px"
                            },
                            to: o ? {
                                transform: "translateY(-20px)",
                                opacity: 0,
                                height: "0px",
                                padding: "0px 0px 0px 0px"
                            } : {
                                transform: "translateY(0)",
                                opacity: 1,
                                height: "69px",
                                padding: "0px 0px 12px 0px"
                            }
                        },
                        children: e
                    }) : null)
                })
            }

            function d(e) {
                let {
                    isTrending: t,
                    listItems: n,
                    shouldAnimate: a
                } = e;
                if (!n) return null;
                let i = n.length,
                    o = i <= 5 ? 0 : i < 8 && !t ? i % 5 : 3;
                return o ? (0, r.jsx)(r.Fragment, {
                    children: a && (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(c, {
                            cascadeDelay: 3e3,
                            initialDelay: 800,
                            children: n.slice(0, o).map((e, t) => (0, r.jsx)("li", {
                                "data-testid": "animated-donation-list-item",
                                children: e
                            }, t))
                        }), n.slice(o, -o).map((e, t) => (0, r.jsx)("li", {
                            className: s().animatedDonationListItem,
                            "data-testid": "animated-donation-list-item",
                            children: e
                        }, t)), (0, r.jsx)(c, {
                            cascadeDelay: 3e3,
                            initialDelay: 800,
                            animateOut: !0,
                            children: n.slice(-o).map((e, t) => (0, r.jsx)("li", {
                                "data-testid": "animated-donation-list-item",
                                children: e
                            }, `out-${t}`))
                        })]
                    })
                }) : (0, r.jsxs)(r.Fragment, {
                    children: [a && (0, r.jsx)(c, {
                        cascadeDelay: 3e3,
                        initialDelay: 800,
                        children: n.slice(0, 3).map((e, t) => (0, r.jsx)("li", {
                            "data-testid": "animated-donation-list-item",
                            children: e
                        }, t))
                    }), n.slice(3).map((e, t) => (0, r.jsx)("li", {
                        className: s().animatedDonationListItem,
                        "data-testid": "animated-donation-list-item",
                        children: e
                    }, t + 3))]
                })
            }
        },
        457382: function(e, t, n) {
            "use strict";
            n.d(t, {
                b: function() {
                    return D
                }
            });
            var r = n(552676),
                a = n(275271),
                i = n(920647),
                o = n(282187),
                s = n.n(o),
                l = n(650863),
                c = n(222672),
                d = n(381544),
                u = n(710007),
                m = n(702253),
                h = n(217945),
                f = n(894359),
                p = n(183314),
                g = n.n(p),
                x = n(850322),
                v = n(287808),
                _ = n(527795),
                b = n(552471),
                y = n(63773),
                j = n(363456),
                N = n(799447),
                C = n(307888),
                k = n.n(C);

            function w(e) {
                let {
                    amount: t = 0,
                    bleedWidth: n,
                    className: a,
                    currency: i,
                    placement: o,
                    promptUrl: l,
                    type: c
                } = e, d = (0, x._O)(), u = "narrow" === n, m = t > 0 && !!c, h = t && i ? (0, N.cq)(t, {
                    currency: i
                }, {
                    maximumFractionDigits: 0,
                    minimumFractionDigits: 0
                }) : "";
                return (0, r.jsx)(g(), {
                    href: l,
                    legacyBehavior: !0,
                    passHref: !0,
                    children: (0, r.jsx)(_.r, {
                        className: s()(k().promptLink, a, "hrt-disp-block", {
                            [k().narrowBleed]: u
                        }),
                        "data-element-id": "btn_donations_message",
                        "data-testid": "donation-prompt",
                        href: l,
                        onClick: () => {
                            o && (t ? d(o, `Donate ${t}`, l, { ...o.includes("money box") && {
                                    is_trending: "top" === c
                                },
                                preset_donation_amount: t
                            }) : d(o, "Donate now", l))
                        },
                        unstyled: !0,
                        children: (0, r.jsx)(b.$, {
                            className: s()(k().callout, {
                                [k().narrow]: u
                            }),
                            variant: m ? "tip" : "neutral",
                            ...m && {
                                icon: (0, r.jsx)(y.w, {
                                    className: k().spotIcon,
                                    color: "tip",
                                    "data-testid": "donation-prompt-spot-icon",
                                    size: "large",
                                    children: (0, r.jsx)(v.J, {
                                        name: "lightbulb",
                                        size: "default"
                                    })
                                })
                            },
                            children: "common" === c ? (0, r.jsxs)(j.cC, {
                                children: [{
                                    formattedAmount: h
                                }, " is a popular donation amount on GoFundMe.", (0, r.jsxs)("div", {
                                    className: s()(k().cta, "hrt-font-bold", "hrt-mt-1"),
                                    children: ["Donate ", {
                                        formattedAmount: h
                                    }]
                                })]
                            }) : "top" === c ? (0, r.jsxs)(j.cC, {
                                children: ["Join the top donors for this fundraiser by giving ", {
                                    formattedAmount: h
                                }, " or more.", (0, r.jsxs)("div", {
                                    className: s()(k().cta, "hrt-font-bold", "hrt-mt-1"),
                                    children: ["Donate ", {
                                        formattedAmount: h
                                    }]
                                })]
                            }) : (0, r.jsxs)(j.cC, {
                                children: ["Join this list. ", (0, r.jsx)("span", {
                                    className: k().cta,
                                    children: "Donate now."
                                })]
                            })
                        })
                    })
                })
            }
            var E = n(850691),
                I = n(92851),
                S = n.n(I);

            function D(e) {
                let {
                    className: t,
                    donationPromptProps: n,
                    includeDonationPrompts: o,
                    items: p,
                    shouldAnimateDonations: g
                } = e, x = (0, i.useRouter)(), v = (0, h.n)(), {
                    isTeamCampaignWithActiveTeamMembers: _
                } = (0, d.s)(), b = (0, f.t)(), y = e => e ? .map((e, t) => r.jsx(c.Z, {
                    isHyperlinkEnabled: v && !_,
                    ...e
                }, t)), [j, N] = (0, a.useState)(() => y(p)), [C, k] = (0, m.k)();
                return ((0, a.useEffect)(() => {
                    let e = y(p),
                        t = `/f/${x.query.campaignUrl}/donate?source=btn_donations_message`;
                    e && o ? N(function(e, t) {
                        let {
                            trailing: n = !0
                        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, a = [...e];
                        for (let e = 4; e < a.length - 3; e += 15) a.splice(e, 0, (0, r.jsx)(w, { ...t
                        }));
                        return n && a.push((0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)(w, { ...t
                            }), (0, r.jsx)("div", {
                                className: "hrt-p-2"
                            })]
                        })), a
                    }(e, n || {
                        promptUrl: t
                    })) : N(e)
                }, [o, p]), j ? .length) ? (0, r.jsx)(u.$, {
                    condition: !!g,
                    parent: e => {
                        let {
                            children: t
                        } = e;
                        return (0, r.jsx)(l.df, {
                            onChange: e => e && b && k(),
                            threshold: 1,
                            children: t
                        })
                    },
                    children: (0, r.jsx)("ul", {
                        className: s()("hrt-list-unstyled o-donation-list", t),
                        "data-testid": "donation-list",
                        children: g ? (0, r.jsx)(E.M, {
                            "data-testid": "animated-donation-list",
                            listItems: j,
                            shouldAnimate: C
                        }) : j.map((e, t) => (0, r.jsx)("li", {
                            className: S().donationListItem,
                            "data-testid": "donation-list-item",
                            children: e
                        }, t))
                    })
                }) : null
            }
        },
        222672: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return w
                }
            });
            var r = n(552676),
                a = n(275271),
                i = n(183314),
                o = n.n(i),
                s = n(282187),
                l = n.n(s),
                c = n(991280),
                d = n(612069),
                u = n(170110),
                m = n(253765),
                h = n(527795),
                f = n(875020),
                p = n(164703),
                g = n(558085),
                x = n(363456),
                v = n(476525),
                _ = n.n(v);

            function b() {
                return (0, r.jsxs)(g.V, {
                    className: "hrt-ml-1",
                    color: "positive",
                    size: "small",
                    children: [(0, r.jsx)(g.J, {
                        className: l()("hrt-mr-half", _().icon),
                        name: "sprout",
                        size: "small"
                    }), (0, x.t)("1st donor", {
                        ns: "fundraiser"
                    })]
                })
            }
            var y = n(749446),
                j = n(29257),
                N = n(185673),
                C = n(110531),
                k = n.n(C);

            function w(e) {
                let {
                    isDonorBadge: t
                } = (0, y.w)(), {
                    amountFormatted: n,
                    className: i,
                    donor: s,
                    firstDonation: g,
                    isHyperlinkEnabled: v = !1,
                    offlineDonation: _,
                    recurringDonation: C,
                    timeAgo: w,
                    topSupporterType: E
                } = e, I = l()(i, "m-donation hrt-align-center"), S = (() => {
                    switch (E) {
                        case j.ti.YOUR_DONATION:
                            return (0, x.t)("Your donation");
                        case j.ti.MOST_RECENT_DONOR:
                            return (0, x.t)("Recent donation");
                        case j.ti.TOP_DONOR:
                            return (0, x.t)("Top donation");
                        case j.ti.FIRST_DONOR:
                            return (0, x.t)("First donation");
                        default:
                            return w
                    }
                })(), D = E ? (0, r.jsx)("span", {
                    className: k().topSupporterText,
                    children: S
                }) : w, R = (0, r.jsx)(c.q, { ...s.profileImage ? {
                        kind: "image",
                        src: s.profileImage
                    } : {
                        kind: "donor"
                    }
                });
                return (0, r.jsxs)(d.b, {
                    className: I,
                    "data-testid": "donation",
                    children: [(0, r.jsx)(m.s, {
                        children: v && s.profileLink ? (0, r.jsx)(o(), {
                            href: s.profileLink,
                            legacyBehavior: !0,
                            children: (0, r.jsx)(h.r, {
                                "data-tracking-id": "fundraiser donor: clicks donor avatar",
                                href: s.profileLink,
                                children: R
                            })
                        }) : R
                    }), (0, r.jsxs)(u.y, {
                        className: k().donationContent,
                        children: [(0, r.jsx)(N.v, {
                            isHyperlinkEnabled: v,
                            name: s.fullName,
                            profileLink: s.profileLink,
                            role: s.role,
                            source: "fundraiser donor",
                            target: "donor"
                        }), (0, r.jsx)(f.R, {
                            className: k().donationList,
                            items: [(0, r.jsxs)(a.Fragment, {
                                children: [(0, r.jsx)("span", {
                                    className: "hrt-font-bold",
                                    children: n
                                }), C && (0, r.jsx)(p.V, {
                                    className: "hrt-ml-1",
                                    color: "positive",
                                    size: "small",
                                    children: (0, x.t)("Monthly")
                                }), t && g && (0, r.jsx)(b, {}), _ && (0, r.jsxs)("span", {
                                    className: "hrt-text-supporting",
                                    children: [(0, r.jsx)(r.Fragment, {
                                        children: "\xa0"
                                    }), "(", (0, x.t)("Offline"), ")"]
                                })]
                            }, 0), (0, r.jsx)("span", {
                                suppressHydrationWarning: !0,
                                children: D
                            }, 1)]
                        })]
                    })]
                })
            }
        },
        42405: function(e, t, n) {
            "use strict";
            n.d(t, {
                ZK: function() {
                    return i.Z
                },
                a$: function() {
                    return C
                },
                yx: function() {
                    return k
                },
                KY: function() {
                    return h
                },
                mJ: function() {
                    return N
                }
            });
            var r = n(132922),
                a = n.n(r),
                i = n(222672);
            n(457382);
            var o = n(552676),
                s = n(77655),
                l = n(287808),
                c = n(63773),
                d = n(646124),
                u = n(736422),
                m = n(363456);

            function h() {
                let {
                    region: e,
                    isLoading: t
                } = (0, u.MV)(), {
                    location: n
                } = (0, s.g)();
                return !(e && n.statePrefix === e) || t ? null : (0, o.jsxs)("div", {
                    className: "hrt-disp-flex hrt-align-center hrt-mt-4",
                    children: [(0, o.jsx)(c.w, {
                        color: "neutral",
                        size: "large",
                        children: (0, o.jsx)(l.J, {
                            name: "location",
                            size: "default"
                        })
                    }), (0, o.jsx)(d.x, {
                        as: "span",
                        className: "hrt-ml-2",
                        fontWeight: "regular",
                        children: (0, m.t)("This fundraiser is located near you")
                    })]
                })
            }
            n(249738);
            var f = n(920647),
                p = n(53032),
                g = n(810418),
                x = n(233619),
                v = n(652751),
                _ = n(29257),
                b = n(136883),
                y = n(893269);
            async function j(e) {
                return (await g.p.get(e)).data
            }

            function N() {
                let e = (0, f.useRouter)(),
                    t = function() {
                        let {
                            donations: e,
                            fundraiserStatus: t
                        } = (0, s.g)();
                        return t === y.c4.ACTIVE && e.filter(e => 72 >= (0, b.Z)(new Date, new Date(e.createdAt))).length >= 10
                    }(),
                    {
                        uniqueDonors: n
                    } = (0, v.x)(),
                    {
                        data: r
                    } = (0, p.Z)(t ? `/feed/${e.query.campaignUrl}/velocity?type=${_.Sm.RECENT_DONATIONS}` : null, j),
                    a = r ? .references.velocity.recent_donations.total,
                    i = !!a && !!n.count && a <= n.count || 0 === n.count,
                    u = (0, x.s)();
                if (a && a > 10) {
                    let e = (0, m.t)("{{- recentDonorsStr}} person just donated", {
                        count: i ? a : n.count,
                        defaultValue_plural: "{{- recentDonorsStr}} people just donated",
                        recentDonorsStr: i ? u.formatWithAbbrev(a, !0, 1) : n.formattedCount
                    });
                    return (0, o.jsxs)("div", {
                        className: "hrt-disp-flex hrt-align-center hrt-mb-3",
                        children: [(0, o.jsx)(c.w, {
                            color: "feature",
                            size: "large",
                            children: (0, o.jsx)(l.J, {
                                name: "growth",
                                size: "default"
                            })
                        }), (0, o.jsx)(d.x, {
                            as: "span",
                            className: "hrt-ml-2",
                            color: "feature",
                            fontWeight: "bold",
                            children: e
                        })]
                    })
                }
                return null
            }
            let C = a()(() => Promise.all([n.e(14879), n.e(83074)]).then(n.bind(n, 383074)).then(e => e.DonorList), {
                    loadableGenerated: {
                        webpack: () => [383074]
                    }
                }),
                k = a()(() => n.e(72472).then(n.bind(n, 772472)).then(e => e.EarlySupporterCallout), {
                    loadableGenerated: {
                        webpack: () => [772472]
                    }
                })
        },
        317804: function(e, t, n) {
            "use strict";
            n.d(t, {
                q: function() {
                    return x
                }
            });
            var r = n(552676),
                a = n(275271),
                i = n(183314),
                o = n.n(i),
                s = n(282187),
                l = n.n(s),
                c = n(650863),
                d = n(437526),
                u = n(42405),
                m = n(101801),
                h = n(29257),
                f = n(850691),
                p = n(874704),
                g = n.n(p);

            function x(e) {
                let {
                    currentUserDonation: t,
                    recentDonations: n,
                    topSupporters: i
                } = e, s = !t, p = (0, m.u)("/donations"), x = (0, m.u)("/topdonations"), v = e => e ? .map((e, t) => r.jsx(u.ZK, { ...e
                }, t)), [_, b] = a.useState(!1), [y, j] = a.useState(() => v(n));
                a.useEffect(() => {
                    j(v(n))
                }, [n]);
                let N = [t && (0, r.jsx)(d.r, {
                    "data-element-id": "btn_flair_your",
                    href: "/donations",
                    unstyled: !0,
                    children: (0, r.jsx)(u.ZK, { ...t,
                        topSupporterType: h.ti.YOUR_DONATION
                    })
                }), s && p && (0, r.jsx)(o(), {
                    href: p,
                    scroll: !1,
                    legacyBehavior: !0,
                    children: (0, r.jsx)(d.r, {
                        "data-element-id": "btn_flair_recent",
                        href: p,
                        unstyled: !0,
                        children: (0, r.jsx)(u.ZK, { ...i.mostRecentDonor,
                            topSupporterType: h.ti.MOST_RECENT_DONOR
                        })
                    })
                }), x && (0, r.jsx)(o(), {
                    href: x,
                    scroll: !1,
                    legacyBehavior: !0,
                    children: (0, r.jsx)(d.r, {
                        "data-element-id": "btn_flair_top",
                        href: x,
                        unstyled: !0,
                        children: (0, r.jsx)(u.ZK, { ...i.topDonor,
                            topSupporterType: h.ti.TOP_DONOR
                        })
                    })
                }), p && (0, r.jsx)(o(), {
                    href: p,
                    scroll: !1,
                    legacyBehavior: !0,
                    children: (0, r.jsx)(d.r, {
                        "data-element-id": "btn_flair_first",
                        href: p,
                        unstyled: !0,
                        children: (0, r.jsx)(u.ZK, { ...i.firstDonor,
                            topSupporterType: h.ti.FIRST_DONOR
                        })
                    })
                })].filter(Boolean).concat(y ? ? []);
                return (0, r.jsx)(c.df, {
                    onChange: e => e && b(!0),
                    threshold: 1,
                    children: (0, r.jsx)("ul", {
                        className: l()("hrt-list-unstyled", g().animatedDonationList),
                        "data-testid": "animated-top-supporters-list",
                        children: (0, r.jsx)(f.M, {
                            isTrending: !0,
                            listItems: N,
                            shouldAnimate: _
                        })
                    })
                })
            }
        },
        249738: function(e, t, n) {
            "use strict";
            n.d(t, {
                c: function() {
                    return m
                }
            });
            var r = n(552676),
                a = n(183314),
                i = n.n(a),
                o = n(437526),
                s = n(42405),
                l = n(101801),
                c = n(29257),
                d = n(874704),
                u = n.n(d);

            function m(e) {
                let {
                    currentUserDonation: t,
                    topSupporters: n
                } = e, a = !t, d = (0, l.u)("/donations"), m = (0, l.u)("/topdonations");
                return (0, r.jsxs)("ul", {
                    className: "hrt-list-unstyled o-donation-list",
                    "data-testid": "top-supporters-list",
                    children: [t && (0, r.jsx)("li", {
                        className: u().donationListItem,
                        children: (0, r.jsx)(o.r, {
                            "data-element-id": "btn_flair_your",
                            href: "/donations",
                            unstyled: !0,
                            children: (0, r.jsx)(s.ZK, { ...t,
                                topSupporterType: c.ti.YOUR_DONATION
                            })
                        })
                    }, 0), a && d && (0, r.jsx)("li", {
                        className: u().donationListItem,
                        children: (0, r.jsx)(i(), {
                            href: d,
                            scroll: !1,
                            legacyBehavior: !0,
                            children: (0, r.jsx)(o.r, {
                                "data-element-id": "btn_flair_recent",
                                href: d,
                                unstyled: !0,
                                children: (0, r.jsx)(s.ZK, { ...n.mostRecentDonor,
                                    topSupporterType: c.ti.MOST_RECENT_DONOR
                                })
                            })
                        })
                    }, 1), m && (0, r.jsx)("li", {
                        className: u().donationListItem,
                        children: (0, r.jsx)(i(), {
                            href: m,
                            scroll: !1,
                            legacyBehavior: !0,
                            children: (0, r.jsx)(o.r, {
                                "data-element-id": "btn_flair_top",
                                href: m,
                                unstyled: !0,
                                children: (0, r.jsx)(s.ZK, { ...n.topDonor,
                                    topSupporterType: c.ti.TOP_DONOR
                                })
                            })
                        })
                    }, 2), d && (0, r.jsx)("li", {
                        className: u().donationListItem,
                        children: (0, r.jsx)(i(), {
                            href: d,
                            scroll: !1,
                            legacyBehavior: !0,
                            children: (0, r.jsx)(o.r, {
                                "data-element-id": "btn_flair_first",
                                href: d,
                                unstyled: !0,
                                children: (0, r.jsx)(s.ZK, { ...n.firstDonor,
                                    topSupporterType: c.ti.FIRST_DONOR
                                })
                            })
                        })
                    }, 3)]
                })
            }
            n(317804)
        },
        273916: function(e, t, n) {
            "use strict";
            n.d(t, {
                X: function() {
                    return a
                },
                T: function() {
                    return f
                }
            });
            var r, a, i = n(552676);
            n(275271);
            var o = n(282187),
                s = n.n(o),
                l = n(673474),
                c = n(103010),
                d = n(850322),
                u = n(835481),
                m = n(817231),
                h = n.n(m);

            function f(e) {
                let {
                    children: t,
                    className: n,
                    onClick: r,
                    placement: a
                } = e, o = (0, d.tp)(), {
                    openModal: m
                } = (0, c.o)(), {
                    showVariant: f
                } = (0, l.E)();
                return (0, i.jsx)(u.K, {
                    as: "button",
                    className: s()(n, {
                        [h().projectPink]: f
                    }),
                    layout: "full",
                    onClick: () => {
                        r ? .(), o(a, "Share"), m("share", {
                            source: a
                        })
                    },
                    variant: "default",
                    children: t
                })
            }(r = a || (a = {})).MAIN = "main_share", r.STORY = "story_share", r.STICKY = "sticky_share"
        },
        315230: function(e, t, n) {
            "use strict";
            n.d(t, {
                w: function() {
                    return s
                }
            });
            var r = n(77655),
                a = n(46936),
                i = n(447427),
                o = n(363456);

            function s() {
                let {
                    charity: e,
                    charityOrganized: t,
                    title: n,
                    beneficiary: s,
                    organizer: l
                } = (0, r.g)(), c = (0, i.q)({
                    charity: e,
                    charityOrganized: !!t,
                    organizer: l
                }), d = (0, a.L)(s), u = d || c;
                return e && t && e ? .name && (u = e.name), d ? (0, o.t)("Fundraiser for {{- userName}} by {{- organizer}} : {{- campaignTitle}}", {
                    userName: u,
                    organizer: c,
                    campaignTitle: n
                }) : (0, o.t)("Fundraiser by {{- userName}} : {{- campaignTitle}}", {
                    userName: u,
                    campaignTitle: n
                })
            }
        },
        907356: function(e, t, n) {
            "use strict";
            n.d(t, {
                T: function() {
                    return o
                }
            });
            var r = n(77655),
                a = n(204634),
                i = n(657439);

            function o() {
                let {
                    charity: e,
                    description: t
                } = (0, r.g)(), n = (0, i.F)(t) || "";
                return !e && (0, a.Q)(n)
            }
        },
        781776: function(e, t, n) {
            "use strict";
            n.d(t, {
                b: function() {
                    return g
                }
            });
            var r = n(920647),
                a = n(59914),
                i = n(632693),
                o = n(77655),
                s = n(45798),
                l = n(363456),
                c = n(487222),
                d = n(602086),
                u = n(252440),
                m = n(233619),
                h = n(931439),
                f = n(700953),
                p = n(637469);

            function g() {
                let {
                    shouldFetch: e = !1
                } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = (0, r.useRouter)(), n = function() {
                    let {
                        locale: e
                    } = (0, s.bN)(), t = (0, m.s)(), {
                        topSupporters: n
                    } = (0, o.g)(), r = n ? .firstDonor ? .id;
                    return n => ({
                        amountFormatted: t.formatAsCurrency(n.amount.amount ? ? 0),
                        donor: {
                            fullName: n.isAnonymous ? (0, l.t)("Anonymous") : n.name,
                            initials: n.isAnonymous ? "" : (0, u.Qm)(n.name),
                            profileImage: n.isAnonymous ? void 0 : n.profileUrl,
                            profileLink: (0, d.p)(n.donorProfile)
                        },
                        firstDonation: n.id === r || n.checkoutId === r,
                        offlineDonation: n.isOffline ? ? !1,
                        recurringDonation: n.isRecurring ? ? !1,
                        timeAgo: n.createdAt ? (0, c.BK)({
                            locale: e
                        })(new Date(n.createdAt)) : ""
                    })
                }(), {
                    donations: g,
                    donationsEndCursor: x
                } = (0, o.g)(), v = (0, i.n)({
                    campaignUrl: `${t.query.campaignUrl}`
                }), {
                    areAllDonationsFetched: _,
                    donations: b = [],
                    getMoreDonations: y
                } = function() {
                    let {
                        endCursor: e,
                        offset: t = 0,
                        sort: n,
                        shouldFetch: a = !1
                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, {
                        query: i
                    } = (0, r.useRouter)(), o = i.campaignUrl, s = n ? h.zo[n] : void 0, {
                        data: l,
                        error: c,
                        fetchMore: d
                    } = (0, p.prw)({
                        variables: {
                            slug: o,
                            ...e ? {
                                before: e
                            } : {},
                            last: t,
                            order: s
                        },
                        skip: !a
                    }), u = (0, f.p)(l ? .fundraiser ? .donations ? .edges), m = l ? .fundraiser ? .donations ? .pageInfo;

                    function g() {
                        m ? .hasPreviousPage && d({
                            variables: {
                                slug: o,
                                before: m ? .endCursor,
                                last: 20
                            }
                        })
                    }
                    return c || !l ? {
                        donations: void 0,
                        getMoreDonations: g
                    } : {
                        areAllDonationsFetched: !m ? .hasPreviousPage,
                        donations: u,
                        getMoreDonations: g
                    }
                }({ ...x ? {
                        endCursor: x
                    } : {},
                    offset: g ? .length,
                    shouldFetch: e
                });
                return {
                    areAllDonationsFetched: _,
                    donations: [g, v.allDonations, b].flat().sort((e, t) => (0, a.Z)(new Date(e.createdAt), new Date(t.createdAt))).filter((e, t, n) => !!e.isOffline || t === n.findIndex(t => String(t.checkoutId) === String(e.checkoutId))).map(n),
                    getMoreDonations: y
                }
            }
        },
        80015: function(e, t, n) {
            "use strict";
            n.d(t, {
                p: function() {
                    return i
                }
            });
            var r = n(695484),
                a = n(663560);

            function i() {
                let {
                    isPreviewMode: e
                } = (0, a.x)(), t = (0, r.f)(), n = !!t ? .personRolesForFundraiser ? .isBene, i = !!t ? .personRolesForFundraiser ? .isTeamMember, o = !!t ? .personRolesForFundraiser ? .isOrganizer;
                return {
                    isCoBeneOrTeamMember: !e && (o || i || n)
                }
            }
        },
        381544: function(e, t, n) {
            "use strict";
            n.d(t, {
                s: function() {
                    return i
                }
            });
            var r = n(77655),
                a = n(637469);

            function i() {
                let {
                    teamMembers: e
                } = (0, r.g)(), {
                    isTeamEnabled: t
                } = (0, r.g)(), n = e.some(e => e.role === a.k_p.TEAM_MEMBER);
                return {
                    isTeamCampaignWithActiveTeamMembers: t && n
                }
            }
        },
        29257: function(e, t, n) {
            "use strict";
            var r, a, i, o, s, l, c, d;
            n.d(t, {
                Sm: function() {
                    return a
                },
                ti: function() {
                    return r
                },
                uU: function() {
                    return o
                }
            }), (s = r || (r = {})).YOUR_DONATION = "your_donation", s.MOST_RECENT_DONOR = "most_recent_donor", s.TOP_DONOR = "top_donor", s.FIRST_DONOR = "first_donor", (l = a || (a = {})).RECENT_DONATIONS = "recent_donations", l.RECENT_VIEWS = "recent_views", (c = i || (i = {})).PENDING = "pending", c.SUCCESS = "success", c.ERROR = "error", c.DEFAULT = "default", (d = o || (o = {})).CO = "co", d.TEAM_MEMBER = "team_member", d.STATSUSER = "statsuser", d.CHARITY = "charity"
        },
        835613: function(e, t, n) {
            "use strict";
            n.d(t, {
                I: function() {
                    return s
                }
            });
            var r = n(363456),
                a = n(487222),
                i = n(602086),
                o = n(252440);
            let s = (e, t, n, s) => e.map(e => {
                let l = e.isAnonymous ? (0, r.t)("Anonymous") : e.name,
                    c = e.id === s,
                    d = {
                        fullName: l,
                        initials: e.isAnonymous ? "" : (0, o.Qm)(l),
                        profileImage: e ? .profileUrl ? .includes("gfm_donor.gif") || e.isAnonymous ? void 0 : e.profileUrl
                    },
                    u = (0, i.p)(e.donorProfile);
                return e.donorProfile && (d.profile = {
                    id: e.donorProfile.id,
                    slug: e.donorProfile.slug,
                    mode: e.donorProfile.mode,
                    status: e.donorProfile.status
                }), u && (d.profileLink = u), {
                    amountFormatted: t.formatAsCurrency(e.amount.amount),
                    donor: d,
                    firstDonation: c,
                    offlineDonation: e.isOffline,
                    profileUrl: e.profileUrl,
                    recurringDonation: e.isRecurring,
                    timeAgo: (0, a.BK)({
                        locale: n
                    })(new Date(e.createdAt))
                }
            })
        },
        204634: function(e, t, n) {
            "use strict";
            n.d(t, {
                Q: function() {
                    return i
                }
            });
            let r = ["cash.app|cash.me|cashapp|cash app|cashtag", "\\$(?!\\d)(?=[\\w]*[a-zA-Z])\\w{1,20}(?!\\w)", "venmo", "paypal|pay pal", "facebook fundraiser|facebook.com/donate", "leetchi", "betterplace", "produzzionedalbasso|produzzione dal basso", "justgiving"].map(e => `(${e})`).join("|"),
                a = RegExp(`(${r})`, "i"),
                i = e => a.test(e);
            n(363456)
        },
        9834: function(e, t, n) {
            "use strict";
            n.d(t, {
                dW: function() {
                    return o
                },
                vc: function() {
                    return s
                }
            });
            var r = n(600488);
            let a = "gofundme.com" === r.config.environment.domain;
            r.config.environment.domain;
            let i = "gfm-dev.com" === r.config.environment.domain || "gfm-dev01.com" === r.config.environment.domain,
                o = !!a,
                s = (0, r.kc)(e => {
                    let {
                        environment: t
                    } = e;
                    return {
                        campaign: {
                            dataViewId: "pg_donate_index",
                            reCaptcha: {
                                invisibleSiteKey: a || i ? "6LdRSOIUAAAAACEGtT2MgSZzB7Y97gitstHArN8P" : "6LfQGuEUAAAAAEaGSwh5H21xxcu_sOeaIhSHDutu"
                            },
                            getStatsWidgetUrl: e => `https://happiness.${t.domain}/index.php?route=statswidget_v2%2FwidgetForFund&url=${e}`
                        }
                    }
                })
        },
        661416: function(e, t, n) {
            "use strict";
            n.d(t, {
                g: function() {
                    return a
                },
                q: function() {
                    return i
                }
            });
            var r = n(982630);
            let a = {
                name: "fe-ssr-campaign-recurring-is-default",
                variations: {
                    control: "control",
                    recurring_is_default: "recurring_is_default"
                }
            };

            function i() {
                let {
                    recurringIsDefaultExperiment: e
                } = (0, r.sE)(), t = e === a.variations.recurring_is_default;
                return {
                    shouldTrackRecurringIsDefaultExperiment: !!e,
                    isRecurringDefaultEnabled: t
                }
            }
        },
        632693: function(e, t, n) {
            "use strict";
            n.d(t, {
                n: function() {
                    return s
                }
            });
            var r = n(275271),
                a = n(665477),
                i = n(906468),
                o = n(565569);

            function s(e) {
                let t = `all-donations.${e.campaignUrl}`,
                    [n, s] = r.useState(!1),
                    [l, c] = r.useState([]),
                    {
                        getAllDonationsDataFallback: d
                    } = (0, a.j)();
                return r.useEffect(() => {
                    let e = (0, o.St)(t);
                    if (e || (e = d()), e) try {
                        let t = JSON.parse(e).map(i.Jf);
                        c(t), s(t.length > 0);
                        return
                    } catch (e) {}
                }, []), {
                    hasDonations: n,
                    allDonations: l
                }
            }
        },
        932123: function(e, t, n) {
            "use strict";
            n.d(t, {
                e: function() {
                    return s
                }
            });
            var r = n(77655),
                a = n(46936),
                i = n(893269),
                o = n(252440);

            function s() {
                let {
                    beneficiary: e,
                    charity: t
                } = (0, r.g)(), n = (0, a.L)(e), s = (0, o.Qm)(n), l = !!t;
                if (e || l) return {
                    meta: {
                        roleString: (0, i.QQ)()[i.vX.BENEFICIARY]
                    },
                    person: {
                        as: l ? i.Mf.charity : i.Mf.person,
                        fullName: l ? t.name : n,
                        initials: s,
                        profileImage: l ? t.logo ? .url || "" : e ? .profileUrl || ""
                    }
                }
            }
        },
        768022: function(e, t, n) {
            "use strict";
            n.d(t, {
                x: function() {
                    return i
                }
            });
            var r = n(893269),
                a = n(77655);

            function i() {
                let {
                    donationsEnabled: e,
                    fundraiserStatus: t
                } = (0, a.g)(), n = t === r.c4.ACTIVE;
                return e && n
            }
        },
        322043: function(e, t, n) {
            "use strict";
            n.d(t, {
                h: function() {
                    return u
                }
            });
            var r = n(77655),
                a = n(111405),
                i = n(893269),
                o = n(363456),
                s = n(252440),
                l = n(932123),
                c = n(760253),
                d = n(538727);

            function u() {
                let e = (0, d.c)(),
                    t = (0, c.U)(),
                    {
                        charity: n,
                        isTeamEnabled: u,
                        teamMembers: m
                    } = (0, r.g)(),
                    h = (0, a.J)({
                        isTeamEnabled: u,
                        teamMembers: m
                    }),
                    f = (0, l.e)(),
                    p = n ? .logo ? .scaled ? .oneByOne120 || n ? .logo ? .url;
                return {
                    beneficiary: f,
                    charity: function() {
                        let e;
                        if (n) {
                            let t;
                            switch (n.country) {
                                case i.b2.US:
                                    t = (0, o.t)("Donations are typically 100% tax deductible in the US.");
                                    break;
                                case i.b2.CA:
                                    t = (0, o.t)("Donations are typically tax deductible in Canada.");
                                    break;
                                case i.b2.AU:
                                    t = (0, o.t)("Donations are typically tax deductible in Australia.");
                                    break;
                                case i.b2.IE:
                                    t = (0, o.t)("Donations are typically tax deductible in Ireland.");
                                    break;
                                case i.b2.IT:
                                    t = (0, o.t)("Donations are typically tax deductible in Italy.");
                                    break;
                                case i.b2.ES:
                                    t = (0, o.t)("Donations are typically tax deductible in Spain.");
                                    break;
                                case i.b2.GB:
                                    t = (0, o.t)("Donations eligible for Gift Aid.")
                            }
                            e = {
                                meta: {
                                    city: `${n.city}, ${n.state}`,
                                    country: n.country,
                                    ein: Number(n.ein),
                                    roleString: (0, o.t)("Registered nonprofit"),
                                    title: t
                                },
                                organization: {
                                    initials: n.name ? (0, s.Qm)(n.name) : "",
                                    name: n.name,
                                    profileImage: p
                                }
                            }
                        }
                        return e
                    }(),
                    isTeamCampaignWithTeamMembers: h,
                    organizer: t,
                    teamList: e
                }
            }
        },
        695484: function(e, t, n) {
            "use strict";
            n.d(t, {
                f: function() {
                    return o
                }
            });
            var r = n(920647),
                a = n(637469);
            let i = {
                __typename: "User",
                id: "",
                attributionInfo: {
                    __typename: "AttributionInfo",
                    teamMemberId: null
                },
                personRolesForFundraiser: {
                    __typename: "PersonRolesForFundraiser",
                    isBene: !1,
                    isDonor: !1,
                    isOrganizer: !1,
                    isTeamMember: !1
                }
            };

            function o() {
                let {
                    query: {
                        campaignUrl: e
                    }
                } = (0, r.useRouter)(), {
                    data: t,
                    loading: n,
                    error: o
                } = (0, a.SxG)({
                    variables: {
                        slug: e
                    }
                });
                return !t ? .viewer || o || n ? i : t ? .viewer
            }
        },
        663560: function(e, t, n) {
            "use strict";
            n.d(t, {
                x: function() {
                    return a
                }
            });
            var r = n(920647);

            function a() {
                let e = (0, r.useRouter)();
                return {
                    isPreviewMode: e.query ? .preview === "1"
                }
            }
        },
        907942: function(e, t, n) {
            "use strict";
            n.d(t, {
                V: function() {
                    return l
                }
            });
            var r = n(275271),
                a = n(665477),
                i = n(637469),
                o = n(565569);
            let s = {
                amount: {
                    amount: 0,
                    currencyCode: i.NEm.USD
                },
                checkoutId: "0",
                createdAt: "",
                id: "0",
                email: "",
                isAnonymous: !1,
                isOffline: !1,
                name: "",
                profileUrl: ""
            };

            function l(e) {
                let t = `donation.${e.campaignUrl}`,
                    [n, i] = r.useState({
                        hasDonation: !1,
                        donation: s
                    }),
                    {
                        getCheckoutDonationDataFallback: l
                    } = (0, a.j)();
                return r.useEffect(() => {
                    let e = (0, o.St)(t);
                    if (e || (e = l()), e) try {
                        let t = JSON.parse(e);
                        i({
                            hasDonation: t.amount.amount > 0,
                            donation: t
                        })
                    } catch (e) {}
                }, []), n
            }
        },
        760253: function(e, t, n) {
            "use strict";
            n.d(t, {
                U: function() {
                    return l
                }
            });
            var r = n(447427),
                a = n(893269),
                i = n(526792),
                o = n(252440),
                s = n(77655);

            function l() {
                let {
                    fundId: e,
                    charity: t,
                    charityOrganized: n,
                    location: l,
                    organizer: c
                } = (0, s.g)(), d = (0, r.q)({
                    charity: t,
                    charityOrganized: !!n,
                    organizer: c
                }), u = c ? .profileUrl || "", {
                    organizerProfileLink: m
                } = (0, i.V)(e), h = (0, o.Qm)(d), f = {
                    as: a.Mf.person,
                    fullName: d,
                    initials: h,
                    profileImage: u,
                    profileLink: m
                };
                return {
                    meta: {
                        city: l.city,
                        statePrefix: l.statePrefix,
                        roleString: (0, a.QQ)()[a.vX.ORGANIZER]
                    },
                    person: f
                }
            }
        },
        689665: function(e, t, n) {
            "use strict";
            n.d(t, {
                z: function() {
                    return a
                }
            });
            var r = n(275271);

            function a(e) {
                let t = r.useRef();
                return r.useEffect(() => {
                    t.current = e
                }, [e]), t.current
            }
        },
        76694: function(e, t, n) {
            "use strict";
            n.d(t, {
                R: function() {
                    return a
                }
            });
            var r = n(275271);

            function a(e, t) {
                return r.useCallback(t => {
                    e(t)
                }, t)
            }
        },
        538727: function(e, t, n) {
            "use strict";
            n.d(t, {
                c: function() {
                    return c
                }
            });
            var r = n(982630),
                a = n(77655),
                i = n(111405),
                o = n(893269),
                s = n(637469),
                l = n(252440);

            function c() {
                let {
                    isTeamEnabled: e,
                    teamMembers: t
                } = (0, a.g)(), n = (0, i.J)({
                    isTeamEnabled: e,
                    teamMembers: t
                }), {
                    coorganizerRebrandExperiment: c
                } = (0, r.sE)();
                if (n) return t.filter(e => e.role === s.k_p.TEAM_MEMBER).sort((e, t) => (e.firstName || "").toUpperCase() < (t.firstName || "").toUpperCase() ? -1 : (e.firstName || "").toUpperCase() > (t.firstName || "").toUpperCase() ? 1 : 0).sort((e, t) => (t.amountRaised || 0) - (e.amountRaised || 0)).map(e => ({
                    meta: {
                        roleString: (0, o.QQ)(c)[o.vX.TEAM_MEMBER]
                    },
                    person: {
                        fullName: `${e.firstName} ${e.lastName}`,
                        initials: (0, l.Qm)(`${e.firstName} ${e.lastName}`),
                        profileImage: e.profileUrl
                    }
                }))
            }
        },
        365718: function(e, t, n) {
            "use strict";
            n.d(t, {
                L: function() {
                    return d
                }
            });
            var r = n(275271),
                a = n(931439),
                i = n(233619),
                o = n(652751),
                s = n(835613),
                l = n(45798),
                c = n(77655);

            function d() {
                let {
                    topDonations: e,
                    topSupporters: t
                } = (0, c.g)(), {
                    donations: {
                        count: n
                    }
                } = (0, o.x)(), d = (0, i.s)(), {
                    locale: u
                } = (0, l.bN)(), m = n >= 50 && n < 150 ? 25 : n >= 150 ? 100 : 10, h = r.useMemo(() => e ? (0, s.I)(e.slice(0, m), d, u, t ? .firstDonor ? .id) : null, [e, u, d, m]);
                return {
                    averageTopDonation: r.useMemo(() => {
                        let t = e ? .every(e => e.isOffline);
                        if (!e || t) return {
                            value: 0,
                            formattedValue: ""
                        };
                        let n = e.filter(e => !e.isOffline),
                            r = 5 * Math.ceil(n.slice(0, m).map(e => e.amount.amount).reduce((e, t) => e + t, 0) / Math.min(n.length, m) / 5),
                            i = a.HO.includes(r) ? r + 5 : r;
                        return {
                            value: i,
                            formattedValue: d.formatAsCurrency(i)
                        }
                    }, [e, m]),
                    topDonations: h
                }
            }
        },
        689687: function(e, t, n) {
            "use strict";
            n.d(t, {
                e: function() {
                    return C
                }
            });
            var r = n(552676),
                a = n(275271),
                i = n(920647),
                o = n(282187),
                s = n.n(o),
                l = n(9834),
                c = n(189774),
                d = n(77655),
                u = n(96841),
                m = n(937627),
                h = n(173032),
                f = n(603263),
                p = n(590839),
                g = n(736422),
                x = n(314885),
                v = n(114081),
                _ = n(669163),
                b = n(329721),
                y = n(600563),
                j = n(959343),
                N = n.n(j);

            function C(e) {
                let {
                    fundId: t
                } = (0, d.g)(), {
                    data: n
                } = (0, x.R)(), o = (0, v.Z)(), j = (0, i.useRouter)(), C = (0, b.ML)() && "1" !== (0, y.le)("hide-stats"), [k, w] = a.useState(C), E = (0, g.ac)(g.zP.SMALL_ONLY), {
                    showVariantA: I,
                    showVariantB: S
                } = (0, c.F)(), D = (I || S) && E, {
                    campaignUrl: R
                } = j.query;
                return (0, r.jsxs)("div", {
                    className: N().campaignPageLayout,
                    "data-tracking-fundraiser-id": t,
                    "data-tracking-surface": "fundraiser_page",
                    children: [(0, r.jsx)("div", {
                        id: "portal"
                    }), (0, r.jsxs)("div", {
                        className: s()("t-campaign-page-template", {
                            "t-campaign-page-template--stats": o,
                            "t-campaign-page-template--stats-hide-widget": o && !k
                        }),
                        children: [(0, r.jsx)("div", {
                            className: "t-campaign-page-template-top",
                            "data-tracking-namespace": "header",
                            "data-view-id": l.vc.campaign.dataViewId,
                            children: (0, r.jsx)(f.yR, {
                                authenticatedPerson: n,
                                className: s()(N().header, "t-campaign-page-header"),
                                redirectPath: `/f/${R}`,
                                searchPageType: "campaign"
                            })
                        }), (0, r.jsx)("div", {
                            className: "t-campaign-page-template-alert",
                            "data-view-id": l.vc.campaign.dataViewId,
                            children: (0, r.jsx)(m.Y, {})
                        }), (0, r.jsx)("div", {
                            id: "sticky-portal"
                        }), e.children, (0, r.jsx)(p.I, {
                            trackingId: "footer",
                            children: (0, r.jsx)(h.q, {
                                className: s()({
                                    [N().footer]: !D,
                                    [N().footerWithHeroMediaViewer]: D
                                }),
                                onLocaleChange: e => {
                                    let {
                                        locale: t
                                    } = e;
                                    (0, _.$)(t), j.reload()
                                }
                            })
                        })]
                    }), o && (0, r.jsxs)("div", {
                        className: s()("t-campaign-page-stats-widget", "hrt-hide-max-lg", {
                            "t-campaign-page-stats-widget-hide-widget": !k
                        }),
                        children: [(0, r.jsx)(u.C, {
                            as: "button",
                            onClick: function() {
                                w(e => ((0, y.D$)("hide-stats", e ? "1" : "0"), !e))
                            },
                            children: k ? "Hide Widget" : "Show Widget"
                        }), k && (0, r.jsx)("iframe", {
                            className: "stats-widget",
                            "data-testid": "stats-widget",
                            height: "1000px",
                            src: l.vc.campaign.getStatsWidgetUrl(`${R}`),
                            width: "350px"
                        })]
                    })]
                })
            }
        },
        163450: function(e, t, n) {
            "use strict";
            n.d(t, {
                K: function() {
                    return s
                }
            });
            var r = n(254206),
                a = n(723490),
                i = n(363456),
                o = n(487222);

            function s(e, t) {
                return (0, r.Z)(t) ? (0, i.t)("Today") : (0, a.Z)(t) ? (0, i.t)("Yesterday") : (0, o.WU)(e, "PPP")(t)
            }
        },
        46936: function(e, t, n) {
            "use strict";

            function r(e) {
                return e ? .facebookName ? e.facebookName : e ? .firstName ? `${e.firstName} ${e.lastName}`.trim() : ""
            }
            n.d(t, {
                L: function() {
                    return r
                }
            })
        },
        111405: function(e, t, n) {
            "use strict";
            n.d(t, {
                J: function() {
                    return a
                }
            });
            var r = n(637469);

            function a(e) {
                let {
                    isTeamEnabled: t,
                    teamMembers: n
                } = e, a = n ? .filter(e => e.role === r.k_p.TEAM_MEMBER);
                return t && a ? .length > 0
            }
        },
        447427: function(e, t, n) {
            "use strict";

            function r(e) {
                let {
                    organizer: t,
                    charity: n,
                    charityOrganized: r
                } = e;
                return r && n ? n.name : `${t?.firstName||""} ${t?.lastName||""}`.trim()
            }
            n.d(t, {
                q: function() {
                    return r
                }
            })
        },
        68480: function(e, t, n) {
            "use strict";
            n.d(t, {
                t: function() {
                    return f
                }
            });
            var r = n(920647),
                a = n(77655),
                i = n(21406),
                o = n(457120),
                s = n(539566),
                l = n(333739),
                c = n(254579),
                d = n(736422),
                u = n(24352),
                m = n(647126);
            let h = e => Object.values(s.PY).includes(e.pathname);

            function f() {
                let {
                    client: e
                } = (0, o.T5)(), t = (0, d.JT)(), n = (0, r.useRouter)(), { ...f
                } = n.query, {
                    sendFundraiserOrganizerChatRequest: p,
                    isClientReady: g,
                    isClientConnected: x
                } = (0, m.O)(), {
                    fundId: v
                } = (0, a.g)(), {
                    isLoggedIn: _,
                    isValidating: b,
                    error: y
                } = (0, u.jY)(), j = _ && !b && !y && h(n) && "string" == typeof n.query.chat_id && !!l.z1(n.query.chat_id) ? .startsWith("!members"), N = function(e, n) {
                    let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        a = { ...f
                        };
                    e && e.forEach(e => {
                        delete a[e]
                    }), n && (a.chat_id = n), r && (a.show_chat = "1");
                    let o = new URLSearchParams((0, i.Z)(a)).toString();
                    return `${t}${o?`?${o}`:""}`
                }, C = async () => {
                    if (!b && !_ || y) {
                        let e = encodeURIComponent(N(["campaignUrl"], void 0, !0));
                        return await n.push(`/sign-in?redirect=${e}`), !1
                    }
                    if (!e) return !1;
                    try {
                        if (!await (0, l.Z3)(e)) return !1;
                        let t = await (n.pathname === s.PY.CAMPAIGN ? p(v.toString()) : null);
                        if (!t) return !1;
                        let r = t && (0, l.qB)(t);
                        if (!r) return !1;
                        let a = N(["campaignUrl"], r);
                        return await n.push(a, void 0, {
                            shallow: !0
                        }), !0
                    } catch (e) {
                        return !1
                    }
                };

                function k() {
                    let e = N(["campaignUrl", "chat_id"]);
                    n.push(e, void 0, {
                        shallow: !0
                    })
                }
                return {
                    isChatClientReady: g,
                    isChatClientConnected: x,
                    isChatModalOpen: j,
                    isLoading: b,
                    openChatContactModal: C,
                    closeChatContactModal: (0, c._)(() => {
                        k()
                    }),
                    closeChatContactSticky: k
                }
            }
        },
        647126: function(e, t, n) {
            "use strict";
            n.d(t, {
                O: function() {
                    return s
                }
            });
            var r = n(457120),
                a = n(622386),
                i = n(637469),
                o = n(383956);

            function s() {
                let {
                    client: e,
                    personChatLogin: t
                } = (0, r.T5)(), {
                    clientSignIn: n
                } = (0, o.X)(), [s] = (0, i.Zgu)(), [l] = (0, i.wkH)();
                return {
                    sendChatRequest: async e => {
                        await s({
                            variables: {
                                profileId: e
                            },
                            onError: e => {
                                console.log("Error", e)
                            },
                            onCompleted: e => {
                                console.log("Success", e)
                            }
                        })
                    },
                    sendFundraiserOrganizerChatRequest: async t => {
                        if (t) try {
                            let e = await l({
                                variables: {
                                    fundraiserId: t
                                }
                            });
                            return e.data ? .sendFundraiserOrganizerChatRequest ? .channelId
                        } catch (n) {
                            throw (0, a.j)({
                                errorMessage: "Error fetching channelId for fundraiser organizer chat request",
                                newRelicAttributes: {
                                    source: "graphql",
                                    request: "sendFundraiserOrganizerChatRequest",
                                    userID: e ? .userID,
                                    data: JSON.stringify({
                                        fundraiserId: t
                                    })
                                }
                            }), n
                        }
                    },
                    connectIfNotConnected: async () => {
                        e && t && !e.userID && await n(e, t.chatUserId, t.chatLoginToken)
                    },
                    isClientReady: !!e,
                    isClientConnected: e && !!e.userID,
                    client: e
                }
            }
        },
        539566: function(e, t, n) {
            "use strict";
            var r, a, i, o, s, l, c, d, u, m, h, f;
            n.d(t, {
                P: function() {
                    return l
                },
                PY: function() {
                    return c
                },
                Z2: function() {
                    return r
                },
                eX: function() {
                    return s
                },
                sC: function() {
                    return o
                }
            }), (d = r || (r = {})).PRIMARY = "primary", d.ARCHIVED = "archived", (u = a || (a = {})).PENDING = "pending", u.MEMBER = "member", u.REJECTED = "rejected", (m = i || (i = {})).OWNER = "owner", m.MEMBER = "member", (h = o || (o = {})).INVITE_RECEIVED = "invited", h.INVITE_SENT = "sent", h.INVITE_INITIATED = "initiated", h.ACCEPTED = "accepted", (f = s || (s = {})).ARCHIVE = "archive", f.BLOCK = "block", f.REPORT = "report", f.UNBLOCK = "unblock", f.UNARCHIVE = "unarchive", (l || (l = {})).REPORT = "report", (c || (c = {})).CAMPAIGN = "/f/[campaignUrl]/[[...fundraiserPageParams]]"
        },
        333739: function(e, t, n) {
            "use strict";
            n.d(t, {
                B1: function() {
                    return f
                },
                Fk: function() {
                    return i
                },
                HU: function() {
                    return l
                },
                UW: function() {
                    return m
                },
                WU: function() {
                    return h
                },
                Z3: function() {
                    return c
                },
                au: function() {
                    return a
                },
                dT: function() {
                    return p
                },
                mF: function() {
                    return s
                },
                p9: function() {
                    return u
                },
                qB: function() {
                    return x
                },
                uk: function() {
                    return o
                },
                z1: function() {
                    return g
                }
            });
            var r = n(622386);
            let a = (e, t) => e.filter(e => e.user_id !== t),
                i = e => e[0] || void 0,
                o = (e, t) => e.find(e => e.user_id === t),
                s = e => e.data ? .invitor_actor_id === e._client.userID,
                l = e => !!e ? .archived_at,
                c = async e => {
                    try {
                        await e.queryChannels({
                            members: {
                                $in: [e ? .userID || ""]
                            }
                        }, void 0, {
                            limit: 1
                        })
                    } catch (n) {
                        let t = n instanceof Error ? n.message : "Could not query channels";
                        return (0, r.j)({
                            errorMessage: t,
                            newRelicAttributes: {
                                source: "stream",
                                request: "queryChannels",
                                userID: e ? .userID
                            }
                        }), !1
                    }
                    return !0
                },
                d = async function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = [];
                    try {
                        n = await e.queryChannels({
                            members: {
                                $in: [e ? .userID || ""]
                            },
                            ...t
                        })
                    } catch (n) {
                        (0, r.j)({
                            errorMessage: "Cannot find channels",
                            newRelicAttributes: {
                                source: "stream",
                                request: "queryChannels",
                                userID: e ? .userID,
                                data: JSON.stringify(t)
                            }
                        })
                    }
                    return n
                },
                u = async (e, t) => {
                    let n = await d(e, {
                        id: t
                    });
                    return n.length > 0 ? n[0] : null
                },
                m = async function(e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                        n = await d(e, {
                            type: "messaging",
                            archived: t
                        });
                    return n.length > 0 ? n[0] : null
                },
                h = async function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    try {
                        t ? await e.unarchive() : await e.archive()
                    } catch (e) {
                        throw (0, r.j)({
                            errorMessage: `Error ${t?"unarchiving":"archiving"} conversation`,
                            newRelicAttributes: {
                                source: "stream",
                                request: t ? "unarchiveChannel" : "archiveChannel"
                            }
                        }), e
                    }
                },
                f = async function(e, t, n) {
                    let a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                        i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
                    if (n) try {
                        i ? (await e.unBlockUser(n), await t.unmute(), await t.unarchive()) : (await e.blockUser(n), await t.show(), await t.mute()), a || await t.archive()
                    } catch (e) {
                        throw (0, r.j)({
                            errorMessage: i ? "Error unblocking user" : "Error blocking user",
                            newRelicAttributes: {
                                source: "stream",
                                request: i ? "unBlockUser" : "blockUser"
                            }
                        }), e
                    }
                },
                p = async (e, t) => {
                    try {
                        await e.flagMessage(t)
                    } catch (e) {
                        throw (0, r.j)({
                            errorMessage: "Error flagging message",
                            newRelicAttributes: {
                                source: "stream",
                                request: "flagMessage"
                            }
                        }), e
                    }
                },
                g = e => {
                    let t = null;
                    try {
                        e && (t = atob(e))
                    } catch (e) {
                        return null
                    }
                    return t
                },
                x = e => {
                    let t = null;
                    try {
                        e && (t = btoa(e))
                    } catch (e) {
                        return null
                    }
                    return t
                }
        },
        647512: function(e, t, n) {
            "use strict";
            n.d(t, {
                o: function() {
                    return b
                }
            });
            var r = n(552676),
                a = n(282187),
                i = n.n(a),
                o = n(954589),
                s = n(177970),
                l = n(984905),
                c = n(363456),
                d = n(92964),
                u = n(844759),
                m = n(144334);

            function h(e) {
                let {
                    isCrisis: t,
                    isPPGF: n
                } = e, a = (0, m.N)();
                return (0, r.jsx)(u.U, {
                    description: n ? (0, r.jsx)(c.cC, {
                        children: "Our Trust & Safety team works around the clock to keep our community safe"
                    }) : t ? (0, r.jsxs)(c.cC, {
                        children: ["You’re covered by the", " ", (0, r.jsx)(u.r, {
                            href: a,
                            rel: "nofollow",
                            children: "GoFundMe Giving Guarantee"
                        }), "—the first and only donor protection guarantee."]
                    }) : (0, r.jsxs)(c.cC, {
                        children: ["Your donation is protected by the", " ", (0, r.jsx)(u.r, {
                            href: a,
                            rel: "nofollow",
                            children: "GoFundMe Giving Guarantee"
                        })]
                    }),
                    icon: n ? "trust-and-safety" : "gofundme-giving-guarantee",
                    title: (0, c.t)("Trusted")
                })
            }

            function f(e) {
                let {
                    isPPGF: t
                } = e;
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)("li", {
                        children: (0, r.jsx)(d.U, {
                            description: (0, c.t)("Every fundraiser on this page has been verified by our Trust & Safety experts."),
                            icon: "verified",
                            title: "Verified"
                        })
                    }), (0, r.jsx)("li", {
                        children: (0, r.jsx)(d.U, {
                            description: (0, c.t)("Your donation goes right to the people and communities affected by this event."),
                            icon: "mobile-notifications",
                            title: (0, c.t)("Powerful")
                        })
                    }), (0, r.jsx)("li", {
                        children: (0, r.jsx)(h, {
                            isCrisis: !0,
                            isPPGF: t
                        })
                    })]
                })
            }

            function p(e) {
                let {
                    isPPGF: t
                } = e;
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)("li", {
                        children: (0, r.jsx)(d.U, {
                            description: (0, c.t)("Every fundraiser on this page has been verified by our Trust & Safety experts."),
                            icon: "verified",
                            title: "Verified"
                        })
                    }), (0, r.jsx)("li", {
                        children: (0, r.jsx)(d.U, {
                            description: (0, c.t)("Your donation helps the people and communities affected by this event."),
                            icon: "mobile-notifications",
                            title: (0, c.t)("Powerful")
                        })
                    }), (0, r.jsx)("li", {
                        children: (0, r.jsx)(h, {
                            isCrisis: !0,
                            isPPGF: t
                        })
                    })]
                })
            }

            function g(e) {
                let {
                    isPPGF: t
                } = e;
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)("li", {
                        children: (0, r.jsx)(d.U, {
                            description: (0, c.t)("Donate quickly and easily"),
                            icon: "send-help",
                            title: (0, c.t)("Easy")
                        })
                    }), (0, r.jsx)("li", {
                        children: (0, r.jsx)(d.U, {
                            description: (0, c.t)("Send help right to the people and causes you care about"),
                            icon: "mobile-notifications",
                            title: (0, c.t)("Powerful")
                        })
                    }), (0, r.jsx)("li", {
                        children: (0, r.jsx)(h, {
                            isCrisis: !1,
                            isPPGF: t
                        })
                    })]
                })
            }

            function x() {
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)("li", {
                        children: (0, r.jsx)(d.U, {
                            description: (0, c.t)("Start fundraising in just a few steps"),
                            icon: "checklist",
                            title: (0, c.t)("Easy")
                        })
                    }), (0, r.jsx)("li", {
                        children: (0, r.jsx)(d.U, {
                            description: (0, c.t)("Connect with your community and amplify your cause"),
                            icon: "mobile-notifications",
                            title: (0, c.t)("Powerful")
                        })
                    }), (0, r.jsx)("li", {
                        children: (0, r.jsx)(d.U, {
                            description: (0, c.t)("Chosen by over 100 million donors worldwide"),
                            icon: "gofundme-giving-guarantee",
                            title: (0, c.t)("Trusted")
                        })
                    })]
                })
            }
            var v = n(765252),
                _ = n.n(v);

            function b(e) {
                let {
                    className: t,
                    isPPGF: n,
                    showHeading: a = !0,
                    variant: d = "donors",
                    ...u
                } = e, m = i()(_().brandValuePropositions, t);
                return (0, r.jsx)(l.$, {
                    bg: "neutral-subtle",
                    className: m,
                    ...u,
                    children: (0, r.jsxs)(o.W, {
                        children: [a && (0, r.jsx)("h2", {
                            className: "hrt-text-heading-sm hrt-mb-6",
                            children: d.includes("crisis") ? (0, c.t)("A verified, powerful, and trusted way to help people in crisis") : (0, c.t)("Your easy, powerful, and trusted home for help")
                        }), (0, r.jsxs)(s.r, {
                            as: "ul",
                            columnGap: 3,
                            columns: 3,
                            rowGap: 4,
                            desktopColumnsOnly: !0,
                            children: ["donors" === d && (0, r.jsx)(g, {
                                isPPGF: n
                            }), "organizers" === d && (0, r.jsx)(x, {}), "crisis-supported" === d && (0, r.jsx)(f, {
                                isPPGF: n
                            }), "crisis-unsupported" === d && (0, r.jsx)(p, {
                                isPPGF: n
                            })]
                        })]
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
                    return l
                },
                pe: function() {
                    return s
                },
                qr: function() {
                    return d
                }
            });
            var r, a, i, o, s, l, c = n(637469);
            (r = o || (o = {})).NEARBY = "NEARBY", r.TRENDING_CITY = "TRENDING_CITY";
            let d = { ...o,
                ...c.ylh
            };
            (a = s || (s = {})).DARK = "dark", a.LIGHT = "light", (i = l || (l = {})).FEATURED = "featured", i.INLINE = "inline", i.REGULAR = "regular"
        },
        78344: function(e, t, n) {
            "use strict";
            n.d(t, {
                h: function() {
                    return s
                }
            });
            var r = n(552676);
            n(275271);
            var a = n(825446),
                i = n.n(a),
                o = n(655561),
                s = function(e) {
                    let {
                        children: t,
                        description: n,
                        noIndex: a,
                        noFollow: s,
                        title: l,
                        url: c
                    } = e, d = function(e, t) {
                        let n = [];
                        if (e && n.push("noindex"), t && n.push("nofollow"), 0 !== n.length) return n.join(", ")
                    }(a, s);
                    return (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsxs)(i(), {
                            children: [(0, r.jsx)("title", {
                                children: l
                            }), (0, r.jsx)("meta", {
                                content: n,
                                name: "description"
                            }), d && (0, r.jsx)("meta", {
                                content: d,
                                name: "robots"
                            })]
                        }), !!c && !a && (0, r.jsx)(o.yL, {
                            url: c
                        }), t]
                    })
                }
        },
        891577: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return s
                }
            });
            var r = n(552676),
                a = n(282187),
                i = n.n(a),
                o = n(634284);

            function s(e) {
                let {
                    className: t,
                    iconProps: n
                } = e;
                return (0, r.jsx)("div", {
                    className: i()("hrt-align-center hrt-disp-flex hrt-justify-center", t),
                    children: (0, r.jsx)(o.J, {
                        name: "photo",
                        size: "default",
                        ...n
                    })
                })
            }
        },
        655561: function(e, t, n) {
            "use strict";
            n.d(t, {
                yL: function() {
                    return o
                },
                FZ: function() {
                    return s
                },
                Od: function() {
                    return l
                },
                AB: function() {
                    return u
                },
                iA: function() {
                    return m
                }
            });
            var r = n(552676),
                a = n(825446),
                i = n.n(a),
                o = function(e) {
                    let {
                        url: t
                    } = e;
                    return (0, r.jsx)(i(), {
                        children: (0, r.jsx)("link", {
                            href: t,
                            rel: "canonical"
                        }, "canonical")
                    })
                },
                s = function(e) {
                    let {
                        appId: t,
                        pages: n
                    } = e;
                    return (0, r.jsxs)(i(), {
                        children: [(0, r.jsx)("meta", {
                            content: t,
                            property: "fb:app_id"
                        }, "fb:app_id"), n.map((e, t) => (0, r.jsx)("meta", {
                            content: e,
                            property: "fb:pages"
                        }, t))]
                    })
                },
                l = function(e) {
                    let {
                        category: t,
                        organizer: n,
                        beneficiary: a,
                        beneficiaryType: o
                    } = e;
                    return (0, r.jsxs)(i(), {
                        children: [(0, r.jsx)("meta", {
                            content: t,
                            name: "nextdoor:category"
                        }, "nextdoor:category"), (0, r.jsx)("meta", {
                            content: n,
                            name: "nextdoor:organizer"
                        }, "nextdoor:organizer"), (0, r.jsx)("meta", {
                            content: a,
                            name: "nextdoor:beneficiary"
                        }, "nextdoor:beneficiary"), (0, r.jsx)("meta", {
                            content: o,
                            name: "nextdoor:beneficiary-type"
                        }, "nextdoor:beneficiary-type")]
                    })
                },
                c = n(893269);
            let d = {
                en_AU: "en_GB",
                en_DK: "en_GB",
                en_FI: "en_GB",
                en_IE: "en_GB",
                en_NO: "en_GB",
                en_SE: "en_GB",
                en_CA: "en_US",
                nl_BE: "nl_NL",
                fr_BE: "fr_FR",
                fr_CH: "fr_FR",
                fr_LU: "fr_FR",
                de_AT: "de_DE",
                de_CH: "de_DE",
                es_US: "es_LA",
                es_MX: "es_LA"
            };
            var u = function(e) {
                    let {
                        description: t,
                        image: n,
                        locale: a = c.Qv.ENGLISH_US,
                        title: o,
                        url: s
                    } = e, l = function(e, t, n, r, a) {
                        let i = [];
                        if (e && i.push({
                                content: e,
                                property: "og:description"
                            }), t && (i.push({
                                content: t,
                                name: "image",
                                property: "og:image"
                            }), i.push({
                                content: t,
                                property: "og:image:secure_url"
                            })), n) {
                            let e = d[n] || n;
                            i.push({
                                content: e,
                                property: "og:locale"
                            });
                            let t = new Set;
                            Object.values(c.Qv).forEach(e => {
                                d[e] && t.add(d[e])
                            }), t.forEach(t => {
                                t !== e && i.push({
                                    content: t,
                                    property: "og:locale:alternate"
                                })
                            })
                        }
                        return i.push({
                            content: "gofundme.com",
                            property: "og:site_name"
                        }), r && i.push({
                            content: r,
                            property: "og:title"
                        }), i.push({
                            content: "gofundme:campaign",
                            property: "og:type"
                        }), a && i.push({
                            content: a,
                            property: "og:url"
                        }), i
                    }(t, n, a, o, s);
                    return (0, r.jsx)(i(), {
                        children: l.map((e, t) => (0, r.jsx)("meta", {
                            content: e.content,
                            name: e.name,
                            property: e.property
                        }, t))
                    })
                },
                m = function(e) {
                    let {
                        description: t,
                        image: n,
                        title: a
                    } = e;
                    return (0, r.jsxs)(i(), {
                        children: [(0, r.jsx)("meta", {
                            content: "summary_large_image",
                            name: "twitter:card"
                        }, "twitter:card"), (0, r.jsx)("meta", {
                            content: "@gofundme",
                            name: "twitter:site"
                        }, "twitter:site"), (0, r.jsx)("meta", {
                            content: n,
                            name: "twitter:image"
                        }, "twitter:image"), (0, r.jsx)("meta", {
                            content: a,
                            name: "twitter:title"
                        }, "twitter:title"), t && (0, r.jsx)("meta", {
                            content: t,
                            name: "twitter:description"
                        }, "twitter:description")]
                    })
                }
        },
        185673: function(e, t, n) {
            "use strict";
            n.d(t, {
                v: function() {
                    return u
                }
            });
            var r = n(552676),
                a = n(183314),
                i = n.n(a),
                o = n(282187),
                s = n.n(o),
                l = n(437526),
                c = n(893269),
                d = n(363456);

            function u(e) {
                let {
                    className: t,
                    isCoorganizersRebrandEnabled: n,
                    isHyperlinkEnabled: a,
                    isOrganization: o,
                    name: u,
                    profileLink: m,
                    role: h,
                    showRole: f,
                    source: p,
                    target: g
                } = e, x = (0, c.QQ)(n);
                return m && o ? (0, r.jsx)(i(), {
                    className: s()("hrt-pr-2", t),
                    href: m,
                    legacyBehavior: !0,
                    children: u
                }) : m && !o && a ? (0, r.jsx)(i(), {
                    href: m,
                    legacyBehavior: !0,
                    children: (0, r.jsx)(l.r, {
                        className: s()("hrt-pr-2", t),
                        "data-tracking-id": p && g ? `${p}: clicks ${g} name` : void 0,
                        href: m,
                        variant: "implied",
                        children: u
                    })
                }) : u && f && h ? (0, r.jsxs)("div", {
                    className: t,
                    children: [u, " (", x[h], ")"]
                }) : u ? (0, r.jsx)("div", {
                    className: t,
                    children: u
                }) : (0, r.jsx)("div", {
                    className: t,
                    children: (0, d.t)("Anonymous")
                })
            }
        },
        923509: function(e, t, n) {
            "use strict";
            var r, a;
            n.d(t, {
                E: function() {
                    return i
                },
                m: function() {
                    return r
                }
            }), (a = r || (r = {})).CopyLink = "CopyLink", a.Email = "Email", a.Facebook = "Facebook", a.General = "General", a.Instagram = "Instagram", a.InstagramStory = "InstagramStory", a.Linkedin = "Linkedin", a.Messenger = "Messenger", a.More = "More", a.Nextdoor = "Nextdoor", a.QrCode = "QrCode", a.Sms = "Sms", a.Twitter = "Twitter", a.WhatsApp = "WhatsApp";
            let i = 3e3
        },
        632878: function(e, t, n) {
            "use strict";
            n.d(t, {
                q: function() {
                    return a
                }
            });
            var r = n(360105);

            function a() {
                r.C ? .initialize()
            }
        },
        381260: function(e, t, n) {
            "use strict";
            n.d(t, {
                x: function() {
                    return s
                }
            });
            var r = n(275271),
                a = n(637469),
                i = n(18129),
                o = n(283249);

            function s(e) {
                let {
                    fundId: t,
                    onSuccess: n,
                    slug: s
                } = e, {
                    variables: {
                        enableUgcGallery: l,
                        maxGalleryImagesLimit: c,
                        twoStepGalleryUpload: d
                    }
                } = function(e) {
                    let {
                        fundId: t
                    } = e, n = {
                        overrideAttributes: {
                            $opt_bucketing_id: `${t??""}`,
                            fundId: t
                        }
                    }, r = {
                        bucketing_key: "fundraiser_id",
                        bucketing_key_value: `${t??""}`
                    }, [a] = (0, o.z)("amp12_additional_ugc_from_organizers", void 0, n, r);
                    return {
                        isAmp12UgcGalleryExperimentEnabled: a.enabled,
                        variables: a.variables,
                        variation: a.enabled && a.variationKey ? a.variationKey : null
                    }
                }({
                    fundId: t
                }), {
                    data: u,
                    loading: m,
                    refetch: h
                } = (0, a._IF)({
                    variables: {
                        slug: s,
                        first: c || i.Q
                    },
                    skip: !l
                }), f = (0, r.useMemo)(() => (u ? .fundraiser ? .galleryImages ? .edges || []).filter(e => !!e).map(e => {
                    let {
                        node: t
                    } = e;
                    return { ...t
                    }
                }), [u]), p = async () => {
                    await h(), n ? .()
                }, {
                    addGalleryImages: g,
                    clearError: x,
                    deleteGalleryImage: v,
                    error: _,
                    isUploading: b,
                    loadingForImageId: y,
                    numOfPendingFileUploads: j
                } = (0, i.c)({
                    fundId: t,
                    maxGalleryImagesLimit: c,
                    numOfExistingGalleryImages: f.length,
                    onAddGalleryImagesSuccess: p,
                    onDeleteGalleryImageSuccess: h,
                    slug: s
                });
                return {
                    addGalleryImages: g,
                    clearError: x,
                    deleteGalleryImage: v,
                    enableUgcGallery: l,
                    twoStepGalleryUpload: d,
                    error: _,
                    galleryImages: f,
                    loading: m || b,
                    loadingForImageId: y,
                    maxGalleryImagesLimit: c,
                    numOfPendingFileUploads: j
                }
            }
        },
        14428: function(e, t, n) {
            "use strict";
            n.d(t, {
                Y: function() {
                    return i
                }
            });
            var r = n(920647),
                a = n(283249);

            function i() {
                let e = (0, r.useRouter)(),
                    [t] = (0, a.z)("fe-ssr-campaign-amp18-postersv2_1", void 0, {
                        overrideAttributes: {
                            includeUserInAmp18: "1" === e.query.amp18
                        }
                    });
                return {
                    isAmp18PostersV21ExperimentEnabled: t.enabled,
                    variation: t.enabled && t.variationKey ? t.variationKey : null
                }
            }
        },
        152968: function(e, t, n) {
            "use strict";
            var r;
            n.d(t, {
                R_: function() {
                    return i
                },
                T3: function() {
                    return l
                },
                XJ: function() {
                    return a
                },
                pp: function() {
                    return o
                },
                zB: function() {
                    return s
                }
            }), (r || (r = {})).NEW_ADA_CHAT_ID = "new_adachat_id";
            let a = {
                    name: "new_adachat_id"
                },
                i = "show-disclosure-for-california-visitors",
                o = "show-disclosure-for-non-verified-npos",
                s = "https://docs.gofundme.com/",
                l = "https://charitydocs.gofundme.com/"
        },
        813096: function(e, t, n) {
            "use strict";
            n.d(t, {
                D: function() {
                    return a
                },
                R: function() {
                    return r
                }
            });
            let r = {
                    name: "fe-ssr-campaign-profile-hyperlinks",
                    variations: {
                        control: "off",
                        treatment: "on"
                    }
                },
                a = "fundraiser_profile_hyperlinks_enabled"
        },
        974159: function(e, t, n) {
            "use strict";
            n.d(t, {
                nw: function() {
                    return r.n
                }
            });
            var r = n(217945);
            n(813096)
        },
        217945: function(e, t, n) {
            "use strict";
            n.d(t, {
                n: function() {
                    return s
                }
            });
            var r = n(794157),
                a = n.n(r),
                i = n(283249),
                o = n(813096);

            function s() {
                let e = a().get(o.D),
                    [t, n] = (0, i.z)(o.R.name);
                return "1" === e || n && t.enabled && t.variationKey === o.R.variations.treatment
            }
        },
        309578: function(e, t, n) {
            "use strict";
            n.d(t, {
                _: function() {
                    return a
                }
            });
            var r = n(771813);
            let a = e => {
                let [t, n] = (0, r.rm)("fe-ssr-campaign-partner-designated-recipients");
                return {
                    designatedRecipient: t.enabled && n && e ? .designatedRecipient && e ? .code === "atlashealth" ? e ? .designatedRecipient : null
                }
            }
        },
        526792: function(e, t, n) {
            "use strict";
            n.d(t, {
                V: function() {
                    return s
                }
            });
            var r = n(275271),
                a = n(602086),
                i = n(637469),
                o = n(974159);

            function s(e) {
                let {
                    organizerProfile: t,
                    isProfileLoading: n,
                    isExperimentEnabled: s
                } = function(e) {
                    let t = (0, o.nw)(),
                        {
                            data: n,
                            loading: r,
                            error: a
                        } = (0, i.OWd)({
                            variables: {
                                fundId: e
                            },
                            skip: !t,
                            fetchPolicy: "cache-first"
                        });
                    return {
                        organizerProfile: n ? .fundraiserByFundId ? .organizer ? .profile,
                        isProfileLoading: r,
                        profileError: a,
                        isExperimentEnabled: t
                    }
                }(e);
                return {
                    organizerProfileLink: (0, r.useMemo)(() => {
                        if (s && t) return (0, a.p)(t)
                    }, [t, s]),
                    isProfileLoading: n,
                    isExperimentEnabled: s,
                    hasProfileData: !!t
                }
            }
        },
        801760: function(e, t, n) {
            "use strict";
            n.d(t, {
                W: function() {
                    return c
                }
            });
            var r = n(45798),
                a = n(637469),
                i = n(283249),
                o = n(893269);
            let s = {
                    [o.Qv.ENGLISH_US]: !0,
                    [o.Qv.ENGLISH_AU]: !0,
                    [o.Qv.ENGLISH_DK]: !0,
                    [o.Qv.ENGLISH_FI]: !0,
                    [o.Qv.ENGLISH_IE]: !0,
                    [o.Qv.ENGLISH_NO]: !0,
                    [o.Qv.ENGLISH_SE]: !0,
                    [o.Qv.ENGLISH_CA]: !0,
                    [o.Qv.ENGLISH_GB]: !0
                },
                l = {
                    US: !0,
                    AU: !0,
                    DK: !0,
                    FI: !0,
                    IE: !0,
                    NO: !0,
                    SE: !0,
                    CA: !0,
                    GB: !0
                };

            function c(e) {
                let {
                    fundCountryCode: t,
                    fundSlug: n
                } = e, {
                    locale: o
                } = (0, r.bN)(), [{
                    enabled: c
                }] = (0, i.z)("image_sharing_frontend", void 0, {
                    overrideAttributes: {
                        fundCountryCode: t,
                        locale: o
                    }
                }), {
                    data: d,
                    loading: u,
                    error: m
                } = (0, a.w2x)({
                    variables: {
                        slug: n
                    },
                    skip: !c
                }), h = function(e) {
                    let {
                        error: t,
                        fundCountryCode: n,
                        isPosterSharingEnabledByOrganizer: r,
                        locale: a,
                        posterSharingFeatureFlagEnabled: i
                    } = e;
                    return s[a] ? l[n] ? i ? r ? t ? "network request error" : void 0 : "feature disabled by organizer" : "feature flag turned off" : `feature not available for fund country ${n}` : `feature not available for ${a}`
                }({
                    error: m,
                    fundCountryCode: t,
                    isPosterSharingEnabledByOrganizer: d ? .fundraiser ? .posterSharingEnabled,
                    locale: o,
                    posterSharingFeatureFlagEnabled: c
                }), f = d ? .fundraiser ? .posterSharingEnabled || !1;
                return {
                    isPosterSharingLoading: u,
                    isPosterSharingEnabledByOrganizer: f,
                    sharedPosterError: u ? void 0 : h,
                    showPoster: c && f
                }
            }
        },
        18129: function(e, t, n) {
            "use strict";
            n.d(t, {
                Q: function() {
                    return m
                },
                c: function() {
                    return h
                }
            });
            var r = n(275271),
                a = n(920647),
                i = n(769675),
                o = n(893269),
                s = n(637469),
                l = n(363456),
                c = n(943214),
                d = n(832101),
                u = n(722009);
            let m = 5;

            function h(e) {
                let {
                    fundId: t,
                    maxGalleryImagesLimit: n,
                    numOfExistingGalleryImages: h,
                    onAddGalleryImagesSuccess: f,
                    onDeleteGalleryImageSuccess: p,
                    slug: g
                } = e, [x] = (0, s.IYX)(), v = (0, i.x)(), {
                    pathname: _
                } = (0, a.useRouter)(), [b, y] = (0, r.useState)(null), [j, N] = (0, r.useState)(0), [C, k] = (0, r.useState)(null), w = (0, c.q)(), E = n || m;
                return {
                    addGalleryImages: (0, r.useCallback)(async e => {
                        async function n(e) {
                            let n, r, a;
                            if (!t) return w.recordCustomEvent({
                                attributes: {
                                    fundraiserSlug: g,
                                    error: "Missing fund ID",
                                    pagePathName: _
                                },
                                eventName: "UgcGalleryHandledError"
                            }), Promise.reject(Error("Missing fund ID"));
                            if (e.size > o.B1) return w.recordCustomEvent({
                                attributes: {
                                    fundraiserSlug: g,
                                    error: "File size exceeds 20MB limit",
                                    pagePathName: _
                                },
                                eventName: "UgcGalleryHandledError"
                            }), Promise.reject(Error("File size exceeds 20MB limit"));
                            try {
                                a = await (0, u.jM)(e)
                            } catch (e) {
                                return w.recordCustomEvent({
                                    attributes: {
                                        fundraiserSlug: g,
                                        error: "Failed to scrub image metadata",
                                        pagePathName: _
                                    },
                                    eventName: "UgcGalleryHandledError"
                                }), Promise.reject(Error("Failed to scrub image metadata"))
                            }
                            try {
                                n = await (0, d.mD)(g)
                            } catch (e) {
                                return w.recordCustomEvent({
                                    attributes: {
                                        fundraiserSlug: g,
                                        endpoint: `/${g}/upload_destination`,
                                        error: "CO upload destination failed",
                                        pagePathName: _
                                    },
                                    eventName: "UgcGalleryHandledError"
                                }), Promise.reject()
                            }
                            try {
                                r = await (0, d.cF)({ ...n.data,
                                    image: a
                                })
                            } catch (e) {
                                return w.recordCustomEvent({
                                    attributes: {
                                        fundraiserSlug: g,
                                        endpoint: "/uploads",
                                        error: "CO uploads failed",
                                        pagePathName: _
                                    },
                                    eventName: "UgcGalleryHandledError"
                                }), Promise.reject()
                            }
                            try {
                                let e = r.data.url;
                                if ((await v.mutate({
                                        mutation: s.n0C,
                                        variables: {
                                            id: String(t),
                                            input: {
                                                mediaUrl: e
                                            }
                                        }
                                    })).errors) return w.recordCustomEvent({
                                    attributes: {
                                        fundraiserSlug: g,
                                        endpoint: "FundraiserGalleryImagesCreateMutation",
                                        error: "GQL create request failed",
                                        pagePathName: _
                                    },
                                    eventName: "UgcGalleryHandledError"
                                }), Promise.reject()
                            } catch (e) {
                                return w.recordCustomEvent({
                                    attributes: {
                                        fundraiserSlug: g,
                                        endpoint: "FundraiserGalleryImagesCreateMutation",
                                        error: "GQL create request failed (error in catch block)",
                                        pagePathName: _
                                    },
                                    eventName: "UgcGalleryHandledError"
                                }), Promise.reject()
                            }
                            return Promise.resolve()
                        }
                        let r = e.slice(0, E - h);
                        y(null), N(r.length), r.length < e.length && (w.recordCustomEvent({
                            attributes: {
                                fundraiserSlug: g,
                                error: `attempt to add more UGC images than max (${E}) allowed`,
                                pagePathName: _
                            },
                            eventName: "UgcGalleryHandledError"
                        }), y({
                            title: (0, l.t)("You’ve added the maximum number of images"),
                            description: (0, l.t)("Please delete an image to upload more.")
                        }));
                        let a = await Promise.allSettled(r.map(n)),
                            i = a.some(e => {
                                let {
                                    status: t
                                } = e;
                                return "rejected" === t
                            }),
                            c = a.some(e => "rejected" === e.status && e.reason instanceof Error && "File size exceeds 20MB limit" === e.reason.message);
                        i && (c ? y({
                            title: (0, l.t)("We are unable to upload some of your photos."),
                            description: (0, l.t)("Please try again and make sure every image is no larger than 20 MB.")
                        }) : y({
                            title: (0, l.t)("Some images couldn’t be uploaded. Please try again.")
                        })), await f ? .(), N(0)
                    }, [t, g, h]),
                    clearError: () => y(null),
                    deleteGalleryImage: (0, r.useCallback)(async e => {
                        let {
                            id: n
                        } = e;
                        if (t && n) {
                            k(n);
                            try {
                                await x({
                                    variables: {
                                        id: String(t),
                                        input: {
                                            photoId: n
                                        }
                                    }
                                })
                            } catch (e) {
                                y({
                                    title: (0, l.t)("Some images couldn’t be deleted. Please try again.")
                                }), w.recordCustomEvent({
                                    attributes: {
                                        fundraiserSlug: g,
                                        endpoint: "FundraiserGalleryImagesDeleteMutation",
                                        error: "GQL delete failed",
                                        pagePathName: _
                                    },
                                    eventName: "UgcGalleryHandledError"
                                })
                            }
                            await p ? .(), k(null)
                        }
                    }, [t]),
                    error: b,
                    isUploading: j > 0,
                    loadingForImageId: C,
                    numOfPendingFileUploads: j
                }
            }
        },
        114081: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return i
                }
            });
            var r = n(29257),
                a = n(24352);

            function i() {
                let {
                    data: e
                } = (0, a.jY)();
                return e ? .roles.includes(r.uU.STATSUSER)
            }
        },
        869649: function(e, t, n) {
            "use strict";
            n.d(t, {
                iZ: function() {
                    return M
                },
                pC: function() {
                    return $
                },
                HQ: function() {
                    return U
                },
                WU: function() {
                    return P
                },
                RA: function() {
                    return z
                },
                iS: function() {
                    return L
                },
                BK: function() {
                    return F
                }
            });
            var r = n(131524),
                a = n(479140),
                i = n(941118),
                o = n(117142),
                s = n(632631),
                l = n(518957),
                c = n(893269),
                d = n(902529),
                u = n(267778),
                m = n(291727),
                h = n(428900),
                f = n(136478),
                p = n(88781),
                g = n(9405),
                x = n(843862),
                v = n(229235),
                _ = n(631986),
                b = n(601497),
                y = n(390450),
                j = n(218847),
                N = n(741027);
            let C = {
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
            var k = (e, t, n) => {
                let r;
                let a = n ? .addSuffix ? C[e].withPreposition : C[e].standalone;
                return (r = "string" == typeof a ? a : 1 === t ? a.one : a.other.replace("{{count}}", String(t)), n ? .addSuffix) ? n.comparison && n.comparison > 0 ? "in " + r : "vor " + r : r
            };
            let w = {
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
                let a = w[e];
                if (r = "string" == typeof a ? a : 1 === t ? a.one : a.other.replace("{{count}}", t.toString()), null != n && n.addSuffix) {
                    if (n.comparison && n.comparison > 0) return "in " + r;
                    if (a !== w.xSeconds) return r + " ago"
                }
                return r
            };
            let I = {
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
                S = {
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
            var D = (e, t, n) => {
                let r;
                let a = S[e];
                return (r = "string" == typeof a ? a : 1 === t ? a.one : a.other.replace("{{count}}", String(t)), n ? .addSuffix) ? n.comparison && n.comparison > 0 ? "dans " + r : "il y a " + r : r
            };
            let R = {
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
                A = {
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
            var T = (e, t, n) => {
                let r;
                let a = A[e];
                return (r = "string" == typeof a ? a : 1 === t ? a.one : a.other.replace("{{count}}", String(t)), n ? .addSuffix) ? n.comparison && n.comparison > 0 ? "over " + r : r + " geleden" : r
            };
            d.Z.formatDistance = k, u.Z.formatDistance = k, m.Z.formatDistance = E, h.Z.formatDistance = E, f.Z.formatDistance = E, p.Z.formatDistance = E, g.Z.formatDistance = E, x.Z.formatDistance = (e, t, n) => {
                let r;
                let a = I[e];
                return (r = "string" == typeof a ? a : 1 === t ? a.one : a.other.replace("{{count}}", t.toString()), n ? .addSuffix) ? n.comparison && n.comparison > 0 ? "en " + r : "hace " + r : r
            }, v.Z.formatDistance = D, _.Z.formatDistance = D, b.Z.formatDistance = D, y.Z.formatDistance = (e, t, n) => {
                let r;
                let a = R[e];
                return (r = "string" == typeof a ? a : 1 === t ? a.one : a.other.replace("{{count}}", t.toString()), n ? .addSuffix) ? n.comparison && n.comparison > 0 ? "tra " + r : r + " fa" : r
            }, j.Z.formatDistance = T, N.Z.formatDistance = T;
            let M = "yyyy-MM-dd",
                O = {
                    [c.Qv.GERMAN_DE]: d.Z,
                    [c.Qv.GERMAN_AT]: u.Z,
                    [c.Qv.GERMAN_CH]: d.Z,
                    [c.Qv.ENGLISH_AU]: m.Z,
                    [c.Qv.ENGLISH_CA]: h.Z,
                    [c.Qv.ENGLISH_GB]: f.Z,
                    [c.Qv.ENGLISH_IE]: p.Z,
                    [c.Qv.ENGLISH_US]: g.Z,
                    [c.Qv.ENGLISH_DK]: g.Z,
                    [c.Qv.ENGLISH_FI]: g.Z,
                    [c.Qv.ENGLISH_NO]: g.Z,
                    [c.Qv.ENGLISH_SE]: g.Z,
                    [c.Qv.SPANISH_ES]: x.Z,
                    [c.Qv.SPANISH_US]: x.Z,
                    [c.Qv.SPANISH_MX]: x.Z,
                    [c.Qv.FRENCH_FR]: v.Z,
                    [c.Qv.FRENCH_CA]: _.Z,
                    [c.Qv.FRENCH_CH]: b.Z,
                    [c.Qv.FRENCH_LU]: v.Z,
                    [c.Qv.FRENCH_BE]: v.Z,
                    [c.Qv.ITALIAN_IT]: y.Z,
                    [c.Qv.DUTCH_NL]: j.Z,
                    [c.Qv.DUTCH_BE]: N.Z,
                    [c.Qv.PORTUGUESE_PT]: s.Z,
                    [c.Qv.PORTUGUESE_BR]: l.Z
                };

            function P(e, t) {
                return n => (0, i.Z)({
                    locale: O[e] ? ? g.Z
                }, t)(n)
            }

            function F(e) {
                let {
                    addSuffix: t = !1,
                    locale: n
                } = e;
                return (0, o.Z)({
                    addSuffix: t,
                    locale: O[n] ? ? g.Z
                }, new Date)
            }

            function L(e, t) {
                return new Date((0, r.Z)(e)).toLocaleDateString(t, {
                    month: "short",
                    day: "numeric"
                })
            }

            function z(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "short";
                return new Date((0, r.Z)(e)).toLocaleDateString(t, {
                    year: "numeric",
                    month: n,
                    day: "numeric"
                })
            }

            function U(e) {
                let t = e ? new Date(e).toISOString().slice(0, 19).replace("T", " ") : "";
                return e ? (0, a.Z)(new Date(t), M) : e || ""
            }

            function $(e) {
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
        937125: function(e, t, n) {
            "use strict";
            n.d(t, {
                I: function() {
                    return o
                }
            });
            var r, a = n(771813),
                i = n(41928);

            function o(e) {
                let t = (0, i.s2)(),
                    n = function() {
                        if ("undefined" == typeof navigator) return !1;
                        let e = new Blob(["test"], {
                                type: "application/json"
                            }),
                            t = [new File([e], "test-share.png", {
                                type: e.type
                            })];
                        return navigator.canShare && navigator.canShare({
                            files: t
                        })
                    }(),
                    [{
                        enabled: o
                    }] = (0, a.rm)("instagram_sharing"),
                    [{
                        enabled: s
                    }] = (0, a.rm)(r.NEXT_DOOR_SHARE_SHEET_OPTION, {}, {
                        overrideAttributes: { ...e ? {
                                fundCountryCode: e.toUpperCase()
                            } : {}
                        }
                    });
                return {
                    canShareToNextdoor: s,
                    canShareToInstagram: t && o && n,
                    canShareToNative: t && n
                }
            }(r || (r = {})).NEXT_DOOR_SHARE_SHEET_OPTION = "nextdoor_share_sheet_option"
        },
        602086: function(e, t, n) {
            "use strict";
            n.d(t, {
                p: function() {
                    return a
                }
            });
            var r = n(637469);

            function a(e) {
                if (!(e && e.status === r.Yaz.ACTIVE && e.mode === r.E3j.PUBLIC)) return;
                let t = e.slug || e.id;
                if (t) return `/u/${t}`
            }
        },
        722009: function(e, t, n) {
            "use strict";

            function r(e, t) {
                return new Promise((n, r) => {
                    e.toBlob(e => {
                        e ? n(e) : r(null)
                    }, t)
                })
            }

            function a(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
                return r(e, n).then(e => {
                    let r = n.split("/")[1];
                    return new File([e], `${t}_${new Date().getTime()}.${r}`, {
                        type: n
                    })
                })
            }

            function i(e) {
                return new Promise((t, n) => {
                    let r = new Image,
                        a = new FileReader;
                    a.onload = () => {
                        r.onload = () => {
                            let a = document.createElement("canvas");
                            a.width = r.width, a.height = r.height;
                            let i = a.getContext("2d");
                            if (!i) return n(Error("Failed to get canvas context"));
                            i.drawImage(r, 0, 0), a.toBlob(r => {
                                if (!r) return n(Error("Canvas failed to export blob"));
                                t(new File([r], e.name, {
                                    type: e.type,
                                    lastModified: Date.now()
                                }))
                            }, e.type)
                        }, r.onerror = n, r.src = a.result
                    }, a.onerror = n, a.readAsDataURL(e)
                })
            }
            n.d(t, {
                jM: function() {
                    return i
                },
                pp: function() {
                    return a
                },
                y7: function() {
                    return r
                }
            })
        },
        252440: function(e, t, n) {
            "use strict";

            function r(e) {
                let {
                    first_name: t,
                    last_name: n
                } = e;
                return [t, n].filter(e => e).map(e => e ? .trim()).join(" ")
            }

            function a(e) {
                let t = e.toUpperCase().replace(/[^A-Z\s]/g, "").split(" ").map(e => e.charAt(0));
                return 1 === t.length ? t[0] : t[0] + t[t.length - 1]
            }

            function i(e) {
                if (!e) return "";
                let t = e.trim().split(" ");
                if (1 === t.length) return t[0];
                let n = t[0].charAt(0).toUpperCase() + t[0].slice(1).toLowerCase(),
                    r = t[t.length - 1].charAt(0).toUpperCase();
                return `${n} ${r}.`
            }
            n.d(t, {
                Pp: function() {
                    return r
                },
                Qm: function() {
                    return a
                },
                T8: function() {
                    return i
                }
            })
        },
        206415: function(e, t, n) {
            "use strict";
            n.d(t, {
                Qs: function() {
                    return v
                },
                Ee: function() {
                    return _
                },
                kb: function() {
                    return b
                },
                Pj: function() {
                    return x
                },
                yl: function() {
                    return p
                },
                zv: function() {
                    return g
                }
            });
            var r = n(363456),
                a = n(600488);
            let i = e => (0, r.t)("{{- organizerFullName}} is organizing this fundraiser.", {
                    organizerFullName: e
                }),
                o = (e, t) => (0, r.t)("{{- organizerFullName}} is organizing this fundraiser to pay medical bills at {{- designatedRecipientName}}.", {
                    organizerFullName: e,
                    designatedRecipientName: t
                }),
                s = function(e, t, n) {
                    let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                    return i && n ? (0, r.t)("{{- organizerFullName}} is organizing this fundraiser to benefit {{-tag}}{{- charityName}}{{-tagCloser}}.", {
                        charityName: t,
                        organizerFullName: e,
                        tag: `<a href='${a.config.environment.canonicalDomain}/charity/${n}'>`,
                        tagCloser: "</a>"
                    }) : (0, r.t)("{{- organizerFullName}} is organizing this fundraiser to benefit {{- charityName}}.", {
                        charityName: t,
                        organizerFullName: e
                    })
                },
                l = (e, t) => (0, r.t)("{{- organizerFullName}} is organizing this fundraiser on behalf of {{- beneficiaryFullName}}.", {
                    beneficiaryFullName: t,
                    organizerFullName: e
                }),
                c = (e, t) => (0, r.t)("{{- organizerFullName}} and {{- teamMemberFullName}} are organizing this fundraiser.", {
                    organizerFullName: e,
                    teamMemberFullName: t
                }),
                d = (e, t) => (0, r.t)("{{- organizerFullName}} and {{count}} other are organizing this fundraiser.", {
                    count: t,
                    defaultValue_plural: "{{- organizerFullName}} and {{count}} others are organizing this fundraiser.",
                    organizerFullName: e
                }),
                u = function(e, t, n, i) {
                    let o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
                    return o && i ? (0, r.t)("{{- organizerFullName}} and {{- teamMemberFullName}} are organizing this fundraiser to benefit {{- charityName}}.", {
                        charityName: `<a href='${a.config.environment.canonicalDomain}/charity/${i}'>${e}</a>`,
                        organizerFullName: t,
                        teamMemberFullName: n
                    }) : (0, r.t)("{{- organizerFullName}} and {{- teamMemberFullName}} are organizing this fundraiser to benefit {{- charityName}}.", {
                        charityName: e,
                        organizerFullName: t,
                        teamMemberFullName: n
                    })
                },
                m = (e, t, n) => (0, r.t)("{{- organizerFullName}} and {{- teamMemberFullName}} are organizing this fundraiser on behalf of {{- beneficiaryFullName}}.", {
                    beneficiaryFullName: e,
                    organizerFullName: t,
                    teamMemberFullName: n
                }),
                h = function(e, t, n, i) {
                    let o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
                    return o && i ? (0, r.t)("{{- organizerFullName}} and {{count}} other are organizing this fundraiser to benefit {{- charityName}}.", {
                        charityName: `<a href='${a.config.environment.canonicalDomain}/charity/${i}'>${e}</a>`,
                        count: n,
                        defaultValue_plural: "{{- organizerFullName}} and {{count}} others are organizing this fundraiser to benefit {{- charityName}}.",
                        organizerFullName: t
                    }) : (0, r.t)("{{- organizerFullName}} and {{count}} other are organizing this fundraiser to benefit {{- charityName}}.", {
                        charityName: e,
                        count: n,
                        defaultValue_plural: "{{- organizerFullName}} and {{count}} others are organizing this fundraiser to benefit {{- charityName}}.",
                        organizerFullName: t
                    })
                },
                f = (e, t, n) => (0, r.t)("{{- organizerFullName}} and {{count}} other are organizing this fundraiser on behalf of {{- beneficiaryFullName}}.", {
                    beneficiaryFullName: e,
                    count: n,
                    defaultValue_plural: "{{- organizerFullName}} and {{count}} others are organizing this fundraiser on behalf of {{- beneficiaryFullName}}.",
                    organizerFullName: t
                }),
                p = function(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
                        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "",
                        a = arguments.length > 4 ? arguments[4] : void 0,
                        i = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
                    return n ? h(n, e, t, a, i) : r ? f(r, e, t) : d(e, t)
                },
                g = function(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
                        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "",
                        a = arguments.length > 4 ? arguments[4] : void 0,
                        i = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
                    return t ? n ? u(n, e, t, a, i) : r ? m(r, e, t) : c(e, t) : p(e, 1, n, r, a, i)
                },
                x = e => {
                    let {
                        organizerFullName: t,
                        charityFullName: n = "",
                        beneficiaryFullName: r = "",
                        charitySlug: a,
                        shouldLinkToCharity: c = !1,
                        designatedRecipientName: d = ""
                    } = e;
                    return d ? o(t, d) : r ? l(t, r) : n ? s(t, n, a, c) : i(t)
                },
                v = function(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    return n && t ? (0, r.t)("This fundraiser is organized by {{-tag}}{{- charityName}}{{-tagCloser}}.", {
                        charityName: e,
                        tag: `<a href='${a.config.environment.canonicalDomain}/charity/${t}'>`,
                        tagCloser: "</a>"
                    }) : (0, r.t)("This fundraiser is organized by {{- charityName}}.", {
                        charityName: e
                    })
                },
                _ = e => (0, r.t)("Your donation benefits {{- charityName}}", {
                    charityName: e
                }),
                b = () => (0, r.t)("There was a problem. Please try again later. If the problem persists, contact our support team.")
        },
        355925: function(e) {
            e.exports = {
                image: "campaign-hero_image__587ZT",
                imagePlaceholder: "campaign-hero_imagePlaceholder__TxJRH",
                imagePlaceholderIcon: "campaign-hero_imagePlaceholderIcon__LKpev",
                heroMediaViewerContainer: "campaign-hero_heroMediaViewerContainer__YZyTk",
                heroMediaViewerTransformPosition: "campaign-hero_heroMediaViewerTransformPosition__DH_hi",
                desktopHeroMediaViewer: "campaign-hero_desktopHeroMediaViewer__yt4BM"
            }
        },
        923440: function(e) {
            e.exports = {
                campaignMembersTeam: "campaign-members-team_campaignMembersTeam__L_gwA"
            }
        },
        851634: function(e) {
            e.exports = {
                modal: "campaign-modal_modal__tTota",
                header: "campaign-modal_header__RTzYQ",
                subHeader: "campaign-modal_subHeader__tFxw4",
                headerTitleRow: "campaign-modal_headerTitleRow___zIp0",
                headerTitle: "campaign-modal_headerTitle__ZKG_K"
            }
        },
        442212: function(e) {
            e.exports = {
                divider: "divider_divider__omN05"
            }
        },
        67640: function(e) {
            e.exports = {
                contentContainer: "donation-overview_contentContainer__3MofE",
                emptyStateContainer: "donation-overview_emptyStateContainer__saOuo",
                hasMoneyContainer: "donation-overview_hasMoneyContainer__cwUeW",
                footerContainer: "donation-overview_footerContainer__w67U_",
                donateButton: "donation-overview_donateButton__mVUL_",
                shareButton: "donation-overview_shareButton__NG3kf",
                buttons: "donation-overview_buttons__ACZXK",
                donors: "donation-overview_donors__12kuh"
            }
        },
        993723: function(e) {
            e.exports = {
                header: "expansion-list-wrapper_header__1J886",
                filter: "expansion-list-wrapper_filter__f0Kqj"
            }
        },
        476525: function(e) {
            e.exports = {
                icon: "first-donor-tag_icon__eUbq8"
            }
        },
        186176: function(e) {
            e.exports = {
                stickyCta: "floating-sticky_stickyCta__IDvim",
                outer: "floating-sticky_outer__CBJ4F",
                inner: "floating-sticky_inner__bgxpV",
                isOpen: "floating-sticky_isOpen__Qmc6P",
                ctaClipsGray: "floating-sticky_ctaClipsGray__FA6Xo"
            }
        },
        144764: function(e) {
            e.exports = {
                avatarContainer: "campaign-byline_avatarContainer__90zak",
                teamAvatar: "campaign-byline_teamAvatar__U0EZK",
                charityCheckmark: "campaign-byline_charityCheckmark__4kMtP",
                popoverButton: "campaign-byline_popoverButton__Evyjt",
                frontAvatar: "campaign-byline_frontAvatar__Go_sL",
                avatarStackContainer: "campaign-byline_avatarStackContainer__XGz8c",
                verifiedIcon: "campaign-byline_verifiedIcon__xQ5V6",
                heroMediaAvatar: "campaign-byline_heroMediaAvatar__UW0CP",
                avatarButton: "campaign-byline_avatarButton__OZdAb"
            }
        },
        874036: function(e) {
            e.exports = {
                disableUserSelect: "campaign-description_disableUserSelect__xaYaO",
                campaignDescription: "campaign-description_campaignDescription__6P_RU",
                header: "campaign-description_header__3tiFF",
                content: "campaign-description_content__C1C_5",
                isOpen: "campaign-description_isOpen__4cQeG"
            }
        },
        631562: function(e) {
            e.exports = {
                campaignMembersMain: "campaign-members-main_campaignMembersMain__mmNDj",
                hasBeneficiary: "campaign-members-main_hasBeneficiary__Q_wnu",
                charityOrganized: "campaign-members-main_charityOrganized__qdExo",
                organizer: "campaign-members-main_organizer__NRaa5",
                beneficiary: "campaign-members-main_beneficiary__pA6vB",
                contact: "campaign-members-main_contact__xHCnO",
                hasBeneContact: "campaign-members-main_hasBeneContact__FONnT",
                hasPartnerDesignatedRecipient: "campaign-members-main_hasPartnerDesignatedRecipient__t2_gO",
                arrow: "campaign-members-main_arrow__NO3t3"
            }
        },
        860737: function(e) {
            e.exports = {
                campaignMembersHeader: "campaign-members_campaignMembersHeader__S99vj",
                campaignMembersHeaderTitle: "campaign-members_campaignMembersHeaderTitle__2iegQ"
            }
        },
        177868: function(e) {
            e.exports = {
                campaign: "campaign-page_campaign__SFW7x",
                valueProposition: "campaign-page_valueProposition__u_sxv",
                referrals: "campaign-page_referrals__tE6NK",
                collections: "campaign-page_collections__ZmRpO",
                shareAndDonate: "campaign-page_shareAndDonate__qRlrx",
                donationTiles: "campaign-page_donationTiles__YgMB5",
                leaderboardNudgeMobile: "campaign-page_leaderboardNudgeMobile__aMd_Y",
                donationOverview: "campaign-page_donationOverview__oqY_2"
            }
        },
        1567: function(e) {
            e.exports = {
                dateAndCategory: "date-and-category_dateAndCategory__m56MT"
            }
        },
        267966: function(e) {
            e.exports = {
                leaderboardNudgeContainer: "leaderboard-nudge-base_leaderboardNudgeContainer__mVhLh",
                slideBounceDown: "leaderboard-nudge-base_slideBounceDown__HWwRW",
                leaderboardNudge: "leaderboard-nudge-base_leaderboardNudge__0aZrZ",
                leaderboardNudgeLink: "leaderboard-nudge-base_leaderboardNudgeLink__CmA4_",
                closeButton: "leaderboard-nudge-base_closeButton__uKt2U",
                nudgeText: "leaderboard-nudge-base_nudgeText__4DIuO"
            }
        },
        646108: function(e) {
            e.exports = {
                container: "nudge-icon_container__7bgGe",
                background: "nudge-icon_background__RO_NM",
                icon: "nudge-icon_icon__j68FT",
                slideLeftIn: "nudge-icon_slideLeftIn__wxa1Z",
                iconDesktop: "nudge-icon_iconDesktop__VWq8C",
                iconMobile: "nudge-icon_iconMobile__N5M0n"
            }
        },
        910257: function(e) {
            e.exports = {
                stickyCta: "sticky_stickyCta__dBfjV",
                inner: "sticky_inner__AM7EH",
                top: "sticky_top__2anFj",
                bottom: "sticky_bottom__ma5tm",
                isOpen: "sticky_isOpen__bpg5W",
                topOpen: "sticky_topOpen__obsk6",
                bottomOpen: "sticky_bottomOpen__ty4KA",
                ctaClipsGray: "sticky_ctaClipsGray__x0_Mz"
            }
        },
        856792: function(e) {
            e.exports = {
                sidebar: "campaign-sidebar_sidebar__2TEAT",
                sidebarMilestoneDesktop: "campaign-sidebar_sidebarMilestoneDesktop__To4kj",
                wrapper: "campaign-sidebar_wrapper__Ay4Wk"
            }
        },
        304098: function(e) {
            e.exports = {
                bannerContainer: "competitor-banner_bannerContainer__FuSHi",
                competitorLink: "competitor-banner_competitorLink__yn8QL"
            }
        },
        855982: function(e) {
            e.exports = {
                projectPink: "donate-button_projectPink__JX39j"
            }
        },
        92851: function(e) {
            e.exports = {
                donationListItem: "donation-list_donationListItem__EoNQQ",
                animatedDonationList: "donation-list_animatedDonationList__ofVTe",
                animatedDonationListItem: "donation-list_animatedDonationListItem__FIj6d"
            }
        },
        307888: function(e) {
            e.exports = {
                promptLink: "donation-prompt_promptLink__zhzam",
                narrowBleed: "donation-prompt_narrowBleed__QmQnT",
                callout: "donation-prompt_callout__XylpG",
                narrow: "donation-prompt_narrow__cSzry",
                cta: "donation-prompt_cta__BuhhY"
            }
        },
        110531: function(e) {
            e.exports = {
                donationContent: "donation_donationContent__EYB39",
                donationList: "donation_donationList__fa1FT",
                topSupporterText: "donation_topSupporterText__1PWw_"
            }
        },
        874704: function(e) {
            e.exports = {
                animatedDonationList: "top-supporters-list_animatedDonationList__Oo3jo",
                donationListItem: "top-supporters-list_donationListItem__5zK2d"
            }
        },
        498998: function(e) {
            e.exports = {
                mmeServiceBanner: "mme-service-banner_mmeServiceBanner__dYRN3",
                text: "mme-service-banner_text__PB6hs"
            }
        },
        274419: function(e) {
            e.exports = {
                container: "share-and-donate_container__vOMFv",
                donateButton: "share-and-donate_donateButton__4RQJS",
                shareButton: "share-and-donate_shareButton__XjLFP"
            }
        },
        817231: function(e) {
            e.exports = {
                projectPink: "share-button_projectPink__9nqZ1"
            }
        },
        722557: function(e) {
            e.exports = {
                container: "donate-and-share-buttons_container__PcL7s",
                shareOnly: "donate-and-share-buttons_shareOnly__R_mFH",
                donateButton: "donate-and-share-buttons_donateButton__HiGZu",
                shareButton: "donate-and-share-buttons_shareButton__psota"
            }
        },
        959343: function(e) {
            e.exports = {
                footer: "page-campaign-layout_footer__KTsOX",
                footerWithHeroMediaViewer: "page-campaign-layout_footerWithHeroMediaViewer__OJSwg",
                campaignPageLayout: "page-campaign-layout_campaignPageLayout__ZK9_s"
            }
        },
        765252: function(e) {
            e.exports = {
                brandValuePropositions: "brand-value-propositions_brandValuePropositions__ZcSfv"
            }
        },
        36130: function(e, t, n) {
            ! function(e, t) {
                "use strict";
                var n = function(e) {
                    if (e && e.__esModule) return e;
                    var t = Object.create(null);
                    return e && Object.keys(e).forEach(function(n) {
                        if ("default" !== n) {
                            var r = Object.getOwnPropertyDescriptor(e, n);
                            Object.defineProperty(t, n, r.get ? r : {
                                enumerable: !0,
                                get: function() {
                                    return e[n]
                                }
                            })
                        }
                    }), t.default = e, Object.freeze(t)
                }(t);

                function r(e, t) {
                    return (r = Object.setPrototypeOf || function(e, t) {
                        return e.__proto__ = t, e
                    })(e, t)
                }
                var a = {
                        error: null
                    },
                    i = function(e) {
                        function t() {
                            for (var t, n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                            return (t = e.call.apply(e, [this].concat(r)) || this).state = a, t.resetErrorBoundary = function() {
                                for (var e, n = arguments.length, r = Array(n), a = 0; a < n; a++) r[a] = arguments[a];
                                null == t.props.onReset || (e = t.props).onReset.apply(e, r), t.reset()
                            }, t
                        }
                        t.prototype = Object.create(e.prototype), t.prototype.constructor = t, r(t, e), t.getDerivedStateFromError = function(e) {
                            return {
                                error: e
                            }
                        };
                        var i = t.prototype;
                        return i.reset = function() {
                            this.setState(a)
                        }, i.componentDidCatch = function(e, t) {
                            var n, r;
                            null == (n = (r = this.props).onError) || n.call(r, e, t)
                        }, i.componentDidUpdate = function(e, t) {
                            var n, r, a, i, o = this.state.error,
                                s = this.props.resetKeys;
                            null !== o && null !== t.error && (void 0 === (n = e.resetKeys) && (n = []), void 0 === (r = s) && (r = []), n.length !== r.length || n.some(function(e, t) {
                                return !Object.is(e, r[t])
                            })) && (null == (a = (i = this.props).onResetKeysChange) || a.call(i, e.resetKeys, s), this.reset())
                        }, i.render = function() {
                            var e = this.state.error,
                                t = this.props,
                                r = t.fallbackRender,
                                a = t.FallbackComponent,
                                i = t.fallback;
                            if (null !== e) {
                                var o = {
                                    error: e,
                                    resetErrorBoundary: this.resetErrorBoundary
                                };
                                if (n.isValidElement(i)) return i;
                                if ("function" == typeof r) return r(o);
                                if (a) return n.createElement(a, o);
                                throw Error("react-error-boundary requires either a fallback, fallbackRender, or FallbackComponent prop")
                            }
                            return this.props.children
                        }, t
                    }(n.Component);
                e.ErrorBoundary = i, e.useErrorHandler = function(e) {
                    var t = n.useState(null),
                        r = t[0],
                        a = t[1];
                    if (null != e) throw e;
                    if (null != r) throw r;
                    return a
                }, e.withErrorBoundary = function(e, t) {
                    var r = function(r) {
                            return n.createElement(i, t, n.createElement(e, r))
                        },
                        a = e.displayName || e.name || "Unknown";
                    return r.displayName = "withErrorBoundary(" + a + ")", r
                }, Object.defineProperty(e, "__esModule", {
                    value: !0
                })
            }(t, n(275271))
        },
        691109: function(e) {
            e.exports = "/_next/static/images/country-d6a0d18f5e48e13fd6b1a3663c737ac1d3ed7988addd69d9371f53be7c90229b.svg"
        }
    },
    function(e) {
        e.O(0, [87829, 33349, 83314, 69564, 98494, 79140, 58923, 6351, 24316, 73042, 70762, 50196, 58108, 20207, 84757, 9431, 3263, 73032, 82630, 77655, 73193, 77496, 48460, 17275, 92888, 49774, 40179], function() {
            return e(e.s = 867060)
        }), _N_E = e.O()
    }
]);
//# sourceMappingURL=[[...fundraiserPageParams]]-ae3dfcf7760df7cc.js.map