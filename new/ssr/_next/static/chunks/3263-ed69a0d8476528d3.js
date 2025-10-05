(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3263], {
        172956: function(e, t, n) {
            "use strict";
            n.d(t, {
                h: function() {
                    return a.h
                }
            });
            var a = n(39827)
        },
        523673: function(e, t, n) {
            "use strict";
            n.d(t, {
                JO: function() {
                    return r.J
                },
                eD: function() {
                    return a.e
                },
                pu: function() {
                    return i.p
                },
                wp: function() {
                    return s.w
                }
            });
            var a = n(632113),
                r = n(287808),
                i = n(179206),
                s = n(63773)
        },
        388873: function(e, t, n) {
            "use strict";
            n.d(t, {
                C9: function() {
                    return r.C
                },
                JO: function() {
                    return a.J
                },
                jH: function() {
                    return i.j
                }
            });
            var a = n(287808),
                r = n(934821),
                i = n(758655)
        },
        181141: function(e, t, n) {
            "use strict";
            n.d(t, {
                V: function() {
                    return r.V
                },
                k: function() {
                    return a.k
                }
            });
            var a = n(708349),
                r = n(164703)
        },
        940625: function(e, t, n) {
            "use strict";
            n.d(t, {
                q: function() {
                    return i
                }
            });
            var a = n(552676);
            n(275271);
            var r = n(175279);
            let i = e => {
                let {
                    children: t
                } = e, {
                    hasMounted: n
                } = (0, r.s)();
                return n ? (0, a.jsx)(a.Fragment, {
                    children: t
                }) : null
            }
        },
        482758: function(e, t, n) {
            "use strict";
            n.d(t, {
                U: function() {
                    return u
                }
            });
            var a = n(552676),
                r = n(523673),
                i = n(311499),
                s = n(45798),
                o = n(363456),
                d = n(566005);

            function u() {
                let {
                    countryCode: e,
                    locale: t
                } = (0, s.bN)(), {
                    localeSegment: n
                } = (0, i.EJ)(t);
                return (0, a.jsx)(r.eD, {
                    buttonClassName: "hrt-ml-1",
                    buttonTitle: (0, o.t)("Donate"),
                    className: "hrt-hide-max-lg",
                    menuTitle: "en_US" === t || "es_US" === t ? (0, o.t)("Discover fundraisers and nonprofits to support") : (0, o.t)("Discover fundraisers to support"),
                    menuTitleIcon: (0, a.jsx)(r.wp, {
                        color: "neutral",
                        size: "large",
                        children: (0, a.jsx)(r.JO, {
                            name: "donor",
                            size: "default"
                        })
                    }),
                    position: "left",
                    multiColumn: !0,
                    children: (0, d.QU)(n).filter(t => {
                        let {
                            forCountries: n
                        } = t;
                        return !n || n.includes(e)
                    }).filter(e => {
                        let {
                            forLocales: n
                        } = e;
                        return !n || n.includes(t)
                    }).map(e => {
                        let {
                            link: t,
                            text: n,
                            description: i,
                            dataElementId: s
                        } = e;
                        return (0, a.jsx)(r.pu, {
                            as: "a",
                            "data-element-id": s,
                            description: i,
                            href: t ? ? "",
                            size: "body",
                            title: n
                        }, n)
                    })
                })
            }
        },
        460520: function(e, t, n) {
            "use strict";
            n.d(t, {
                q: function() {
                    return u
                }
            });
            var a = n(552676),
                r = n(523673),
                i = n(311499),
                s = n(45798),
                o = n(363456),
                d = n(566005);

            function u() {
                let {
                    locale: e,
                    countryCode: t
                } = (0, s.bN)(), {
                    localeSegment: n
                } = (0, i.EJ)(e);
                return (0, a.jsx)(r.eD, {
                    buttonClassName: "hrt-ml-1",
                    buttonTitle: (0, o.t)("Fundraise"),
                    className: "hrt-hide-max-lg",
                    menuTitle: (0, o.t)("Start fundraising, tips, and resources"),
                    menuTitleIcon: (0, a.jsx)(r.wp, {
                        color: "neutral",
                        size: "large",
                        children: (0, a.jsx)(r.JO, {
                            name: "donations",
                            size: "default"
                        })
                    }),
                    position: "left",
                    multiColumn: !0,
                    children: (0, d.I7)({
                        localeSegment: n,
                        countryCode: t
                    }).filter(t => {
                        let {
                            forLocales: n
                        } = t;
                        return !n || n.includes(e)
                    }).filter(e => {
                        let {
                            forCountries: n
                        } = e;
                        return !n || n.includes(t)
                    }).map(e => {
                        let {
                            link: t,
                            text: n,
                            description: i,
                            dataElementId: s
                        } = e;
                        return (0, a.jsx)(r.pu, {
                            as: "a",
                            "data-element-id": s,
                            description: i,
                            href: t ? ? "",
                            size: "body",
                            title: n
                        }, n)
                    })
                })
            }
        },
        566005: function(e, t, n) {
            "use strict";
            n.d(t, {
                Er: function() {
                    return o
                },
                I7: function() {
                    return s
                },
                QU: function() {
                    return i
                }
            });
            var a = n(893269),
                r = n(363456);
            let i = e => [{
                    dataElementId: "btn_nav_discover",
                    description: (0, r.t)("Browse fundraisers by category"),
                    link: "/discover",
                    text: (0, r.t)("Categories")
                }, {
                    dataElementId: "btn_nav_crisis_relief",
                    description: (0, r.t)("Donate to verified relief"),
                    forCountries: [a.Ec.UNITED_STATES],
                    link: `${e}/c/act`,
                    text: (0, r.t)("Crisis relief")
                }, {
                    dataElementId: "btn_nav_causes",
                    description: (0, r.t)("Direct support for urgent needs"),
                    forCountries: [a.Ec.UNITED_STATES],
                    link: `${e}/c/cause`,
                    text: (0, r.t)("Social Impact Funds")
                }, {
                    dataElementId: "btn_nav_supporter_space",
                    description: (0, r.t)("Inspiration, FAQs, and where to give"),
                    forLocales: [a.Qv.ENGLISH_US],
                    link: `${e}/c/supporter-space`,
                    text: (0, r.t)("Supporter Space")
                }, {
                    dataElementId: "btn_nav_donate_nonprofits",
                    description: (0, r.t)("Give to tax-deductible organizations"),
                    forLocales: [a.Qv.ENGLISH_US, a.Qv.SPANISH_US],
                    link: "/s?nonprofits=1",
                    text: (0, r.t)("Nonprofits")
                }],
                s = e => {
                    let {
                        countryCode: t,
                        localeSegment: n
                    } = e;
                    return [{
                        dataElementId: "btn_nav_start",
                        description: (0, r.t)("Step-by-step help, examples, and more"),
                        link: `${n}/c/start`,
                        text: (0, r.t)("How to start a GoFundMe")
                    }, {
                        dataElementId: "btn_nav_start_fundraising_categories",
                        description: (0, r.t)("Find the right category for you"),
                        forLocales: [a.Qv.ENGLISH_AU, a.Qv.ENGLISH_CA, a.Qv.ENGLISH_IE, a.Qv.ENGLISH_GB, a.Qv.ENGLISH_US, a.Qv.SPANISH_US],
                        isDesktopOnly: !0,
                        link: `${n}/c/start/fundraising-categories`,
                        text: (0, r.t)("Fundraising categories")
                    }, {
                        dataElementId: "btn_nav_team_fundraising",
                        description: (0, r.t)("Fundraise together with a team"),
                        link: `${n}/c/fundraising-tips/team`,
                        text: (0, r.t)("Team fundraising")
                    }, {
                        dataElementId: "btn_nav_blog",
                        description: (0, r.t)("Resources, tips, and more"),
                        link: `${n}/c/blog`,
                        text: (0, r.t)("Fundraising Blog")
                    }, {
                        dataElementId: "btn_nav_fundraising_tips",
                        description: (0, r.t)("The ultimate fundraising tips guide"),
                        link: `${n}/c/fundraising-tips`,
                        text: (0, r.t)("Fundraising tips")
                    }, {
                        dataElementId: "btn_nav_fundraising_ideas",
                        description: (0, r.t)("Ideas to spark your creativity"),
                        link: `${n}/c/fundraising-ideas`,
                        text: (0, r.t)("Fundraising ideas")
                    }, {
                        dataElementId: "btn_nav_start_charity_fundraising",
                        description: (0, r.t)("Fundraise for a charity"),
                        forLocales: [a.Qv.ENGLISH_AU, a.Qv.ENGLISH_CA, a.Qv.ENGLISH_IE, a.Qv.ENGLISH_GB, a.Qv.ENGLISH_US, a.Qv.SPANISH_US],
                        link: "/es-us" === n ? `${n}/c/start/organizacion-benefica` : `${n}/start/charity-fundraising`,
                        text: (0, r.t)("Charity fundraising")
                    }, {
                        dataElementId: "btn_nav_charity",
                        description: "US" === t ? (0, r.t)("Claim your nonprofit") : (0, r.t)("Claim your charity"),
                        forLocales: [a.Qv.ENGLISH_AU, a.Qv.ENGLISH_CA, a.Qv.ENGLISH_IE, a.Qv.ENGLISH_GB, a.Qv.ENGLISH_US],
                        link: `${n}/c/charity-fundraising`,
                        text: "US" === t ? (0, r.t)("Sign up as a nonprofit") : (0, r.t)("Sign up as a charity")
                    }]
                },
                o = e => {
                    let {
                        gfmGuaranteeUrl: t,
                        helpCenterLocale: n,
                        localeSegment: i,
                        supportUrlPrefix: s
                    } = e;
                    return [{
                        dataElementId: "btn_nav_how_it_works",
                        link: `${i}/c/how-it-works`,
                        text: (0, r.t)("How GoFundMe works")
                    }, {
                        dataElementId: "btn_nav_gfm_guarantee",
                        link: t,
                        text: (0, r.t)("GoFundMe Giving Guarantee")
                    }, {
                        dataElementId: "btn_nav_supported_countries",
                        link: `${s}/articles/360001972748`,
                        text: (0, r.t)("Supported countries")
                    }, {
                        dataElementId: "btn_nav_pricing",
                        link: `${i}/c/pricing`,
                        text: "/de-de" === i ? "Geb\xfchren" : (0, r.t)("Pricing")
                    }, {
                        dataElementId: "btn_nav_support_gofundme_com",
                        isDesktopOnly: !0,
                        link: s,
                        text: "/de-de" === i ? "Hilfe-Center und Kundensupport" : (0, r.t)("Help Center")
                    }, {
                        dataElementId: "btn_nav_about_gfm",
                        link: `${i}/c/about-us`,
                        text: (0, r.t)("About GoFundMe")
                    }, {
                        dataElementId: "btn_nav_newsroom",
                        link: `${i}/c/press`,
                        text: "de-de" === n ? "Pressestelle und Impressum" : "en-us" === n ? (0, r.t)("Newsroom") : (0, r.t)("Press Center")
                    }, {
                        dataElementId: "btn_nav_careers",
                        link: `${i}/c/careers`,
                        text: (0, r.t)("Careers")
                    }, {
                        dataElementId: "btn_nav_gfm_org",
                        forCountries: [a.Ec.UNITED_STATES],
                        link: "https://www.gofundme.org",
                        text: "GoFundMe.org"
                    }, {
                        dataElementId: "btn_nav_gfm_org",
                        forCountries: [a.Ec.UNITED_KINGDOM],
                        link: "https://gofundme.org.uk/",
                        text: "GoFundMe.org"
                    }, {
                        dataElementId: "btn_nav_gfm_partnerships",
                        forLocales: [a.Qv.ENGLISH_US],
                        link: `${i}/c/partnerships`,
                        text: "GoFundMe Partnerships"
                    }]
                }
        },
        87345: function(e, t, n) {
            "use strict";
            n.d(t, {
                D: function() {
                    return a
                },
                n: function() {
                    return r
                }
            });
            let a = (0, n(805662).cn)(!1),
                r = 60
        },
        745385: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                HOMEPAGE_EMERGENCY_BANNER_EXPERIMENT: function() {
                    return u
                },
                HomepageEmergencyBanner: function() {
                    return h
                },
                useHomepageEmergencyBanner: function() {
                    return l
                }
            });
            var a = n(552676),
                r = n(183314),
                i = n.n(r),
                s = n(181141),
                o = n(771813),
                d = n(45798);
            let u = {
                name: "homepage_emergency_banner",
                variations: {
                    OFF: "off",
                    ON: "on"
                }
            };

            function l() {
                let {
                    countryCodeFromIP: e,
                    countryCode: t,
                    locale: n
                } = (0, d.bN)(), [a, r] = (0, o.rm)(u.name, void 0, {
                    overrideAttributes: {
                        countryCode: e || t,
                        locale: n
                    }
                }), i = a.variables || {};
                return {
                    banner: i.banner ? .[n] || {},
                    isClientReady: r,
                    isEnabled: r && a.enabled,
                    variation: a.variationKey
                }
            }
            var c = n(512385),
                f = n.n(c);

            function h() {
                let {
                    banner: e,
                    isClientReady: t,
                    isEnabled: n
                } = l();
                return n && t && Object.keys(e).length ? (0, a.jsxs)("aside", {
                    className: f().banner,
                    "data-tracking-namespace": "emergency banner",
                    role: "status",
                    children: [e.tagText && (0, a.jsx)("div", {
                        className: "hrt-mb-2",
                        children: (0, a.jsx)(s.V, {
                            color: "negative",
                            children: (0, a.jsx)("span", {
                                className: "hrt-ml-half",
                                children: e.tagText
                            })
                        })
                    }), e.title && (0, a.jsx)("h2", {
                        className: "hrt-mb-half",
                        children: e.title
                    }), e.title && (0, a.jsx)("p", {
                        children: e.description
                    }), e.ctaUrl && (0, a.jsx)("div", {
                        children: (0, a.jsx)(i(), {
                            href: e.ctaUrl,
                            legacyBehavior: !0,
                            children: (0, a.jsx)(s.k, {
                                as: "a",
                                "data-tracking-id": "donate now",
                                href: e.ctaUrl,
                                size: "small",
                                variant: "on-negative",
                                children: e.ctaText
                            })
                        })
                    })]
                }) : null
            }
        },
        603263: function(e, t, n) {
            "use strict";
            n.d(t, {
                yR: function() {
                    return eb
                }
            });
            var a = n(552676),
                r = n(275271),
                i = n(132922),
                s = n.n(i),
                o = n(920647),
                d = n(282187),
                u = n.n(d),
                l = n(454412),
                c = n(172956),
                f = n(183314),
                h = n.n(f),
                m = n(805662),
                g = n(918663),
                p = n(397166),
                _ = n(77913),
                v = n(287808),
                b = n(708349),
                x = n(164703),
                E = n(934821),
                j = n(758655),
                N = n(183652),
                y = n(380439),
                k = n(618158),
                I = n(525690),
                S = n(387280),
                C = n(637469),
                w = n(24352);
            let G = () => {
                let {
                    isLoggedIn: e
                } = (0, w.jY)(), {
                    data: t,
                    error: n,
                    loading: a
                } = (0, C.UrQ)({
                    skip: !e,
                    ssr: !1
                });
                return {
                    unseenProfileNotificationCount: (0, r.useMemo)(() => n ? 0 : t ? .viewer ? .unseenNotificationCount ? ? 0, [t, n]),
                    isUnseenProfileNotificationCountLoading: a,
                    error: n
                }
            };
            var F = n(363456),
                O = n(87345),
                H = n(523673),
                P = n(311499),
                L = n(45798),
                T = n(736422),
                U = n(144334),
                $ = n(252135),
                A = n(566005);

            function z() {
                let {
                    locale: e,
                    countryCode: t
                } = (0, L.bN)(), {
                    localeSegment: n
                } = (0, P.EJ)(e), r = (0, T.xG)(), i = (0, $.O6)(e), s = (0, U.N)();
                return (0, a.jsx)(H.eD, {
                    buttonTitle: (0, F.t)("About"),
                    className: "hrt-hide-max-lg",
                    menuTitle: (0, F.t)("How it works, pricing, and more"),
                    menuTitleIcon: (0, a.jsx)(H.wp, {
                        color: "neutral",
                        size: "large",
                        children: (0, a.jsx)(H.JO, {
                            name: "info",
                            size: "default"
                        })
                    }),
                    position: "right",
                    multiColumn: !0,
                    children: (0, A.Er)({
                        gfmGuaranteeUrl: s,
                        helpCenterLocale: i,
                        localeSegment: n,
                        supportUrlPrefix: r
                    }).filter(e => {
                        let {
                            forCountries: n
                        } = e;
                        return !n || n.includes(t)
                    }).filter(t => {
                        let {
                            forLocales: n
                        } = t;
                        return !n || n.includes(e)
                    }).map(e => {
                        let {
                            link: t,
                            text: n,
                            dataElementId: r
                        } = e;
                        return (0, a.jsx)(H.pu, {
                            as: "a",
                            "data-element-id": r,
                            href: t ? ? "",
                            size: "body",
                            title: n
                        }, n)
                    })
                })
            }
            var Q = n(668261),
                D = n(991280),
                M = n(632113),
                B = n(179206),
                R = n(646124),
                J = n(893269),
                Y = n(313749),
                q = n(446287),
                K = n.n(q);

            function V(e) {
                let {
                    hasFunds: t,
                    identity: n,
                    isCharityUser: r,
                    notificationCount: i,
                    onSignOut: s,
                    susiPaths: o
                } = e, d = (0, S.z)(), u = (0, k.Om)(), l = (0, Y.N)(), {
                    isChatEnabled: c
                } = (0, Q.t)(), {
                    countryCodeFromIP: f
                } = (0, L.bN)(), h = "US" === f;
                return (0, a.jsxs)(M.e, {
                    buttonAvatar: (0, a.jsxs)("div", {
                        className: "hrt-position-relative",
                        children: [(0, a.jsx)(D.q, {
                            fallbackKind: "default",
                            kind: "image",
                            src: n.profileLink
                        }), i && (0, a.jsx)("span", {
                            className: K().accountNotificationIndicator
                        }), (0, a.jsx)(R.x, {
                            as: "span",
                            screenReaderOnly: !0,
                            children: i ? (0, F.t)("account menu, contains new notifications") : (0, F.t)("account menu")
                        })]
                    }),
                    buttonClassName: "hrt-ml-1",
                    buttonTitle: n.firstName ? ? "",
                    className: "hrt-hide-max-lg",
                    position: "right",
                    titleWrapperDataAttrs: {
                        "data-masking": "mask"
                    },
                    children: [(0, a.jsx)(B.p, {
                        as: "a",
                        "data-element-id": "btn_navmenu_profile",
                        href: "/u/profile",
                        size: "body",
                        title: (0, a.jsx)(a.Fragment, {
                            children: i ? (0, a.jsxs)("span", {
                                className: "hrt-disp-flex hrt-position-relative",
                                children: [(0, F.t)("Profile"), (0, a.jsx)("span", {
                                    className: K().accountNotificationCount,
                                    children: i
                                }), (0, a.jsx)(R.x, {
                                    as: "span",
                                    screenReaderOnly: !0,
                                    children: (0, F.t)("new notifications")
                                })]
                            }) : (0, F.t)("Profile")
                        })
                    }), r && (0, a.jsx)(B.p, {
                        as: "a",
                        "data-element-id": "btn_nav_charity_activity",
                        href: l && h ? J.qb : "/fundraisers",
                        size: "body",
                        title: (0, a.jsx)(a.Fragment, {
                            children: l && h ? (0, F.t)("GoFundMe Pro") : l ? (0, F.t)("Charity dashboard") : (0, a.jsxs)(a.Fragment, {
                                children: [(0, F.t)("Charity activity"), (0, a.jsx)(x.V, {
                                    className: "hrt-ml-1",
                                    color: "accent-purple",
                                    size: "small",
                                    children: "BETA"
                                })]
                            })
                        })
                    }), t && (0, a.jsx)(B.p, {
                        as: "a",
                        "data-element-id": "btn_nav_manage",
                        href: "/fundraisers",
                        size: "body",
                        title: (0, F.t)("Your fundraisers")
                    }), d && (0, a.jsx)(B.p, {
                        as: "a",
                        "data-element-id": "btn_nav_your_giving_fund",
                        "data-tracking-id": "your giving fund",
                        href: "/giving-funds",
                        size: "body",
                        title: (0, F.t)("Your Giving Fund")
                    }), (0, a.jsx)(B.p, {
                        as: "a",
                        "data-element-id": "btn_navmenu_my-impact",
                        href: "/account/impact",
                        size: "body",
                        title: (0, F.t)("Your impact")
                    }), c && (0, a.jsx)(B.p, {
                        as: "a",
                        "data-element-id": "btn_nav_messages",
                        "data-tracking-id": "messages menu",
                        href: "/messages/primary",
                        size: "body",
                        title: (0, F.t)("Messages")
                    }), (0, a.jsx)(B.p, {
                        as: "a",
                        "data-element-id": "btn_nav_settings",
                        href: "/account/profile",
                        size: "body",
                        title: (0, a.jsx)(a.Fragment, {
                            children: l ? (0, F.t)("Account settings") : (0, F.t)("Settings")
                        })
                    }), !l && (0, a.jsx)(B.p, {
                        as: "a",
                        "data-element-id": "btn_nav_start_a_gofundme",
                        href: "/create/fundraiser?fresh=true",
                        onClick: e => u(e.currentTarget.textContent, "top nav", e.currentTarget.href),
                        size: "body",
                        title: (0, F.t)("Start a GoFundMe")
                    }), (0, a.jsx)(B.p, {
                        as: "a",
                        "data-element-id": "btn_nav_sign_out",
                        href: o.signOutPath,
                        onClick: s,
                        size: "body",
                        title: (0, F.t)("Sign out")
                    })]
                })
            }
            var W = n(482758),
                X = n(460520),
                Z = n(630542),
                ee = n.n(Z);

            function et(e) {
                let {
                    hasFunds: t,
                    headerLeft: n,
                    identity: r,
                    isCharityUser: i,
                    isFixedScroll: s,
                    onSignOut: o,
                    susiPaths: d
                } = e, c = !!r, f = (0, k.Om)(), [m, C] = (0, l.KO)(O.D), w = (0, S.z)(), H = (0, I.O)(c), {
                    error: P,
                    unseenProfileNotificationCount: L,
                    isUnseenProfileNotificationCountLoading: T
                } = G();
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsxs)(p.Q, {
                        children: [!!n && n, !n && (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)(N.H, {}), (0, a.jsx)(W.U, {}), (0, a.jsx)(X.q, {}), w && (0, a.jsxs)(E.C, {
                                as: "a",
                                className: u()(ee()["shared-default-header-giving-funds-button"], "hrt-hide-max-lg hrt-ml-1"),
                                "data-element-id": "btn_nav_giving_fund",
                                "data-tracking-id": "giving funds",
                                href: H,
                                children: [(0, F.t)("Giving Funds"), (0, a.jsx)(x.V, {
                                    className: "hrt-ml-half",
                                    color: "accent-purple",
                                    size: "small",
                                    children: (0, F.t)("New")
                                })]
                            })]
                        })]
                    }), (0, a.jsx)(g.e, {
                        children: (0, a.jsx)(y.O, {
                            "data-tracking-id": "gofundme logo"
                        })
                    }), (0, a.jsxs)(_.L, {
                        className: "hrt-hide-max-lg",
                        children: [(0, a.jsx)(z, {}), c ? (0, a.jsx)(V, {
                            hasFunds: t,
                            identity: r,
                            isCharityUser: i,
                            notificationCount: !(L > 0) || P || T ? "" : L ? .toString(),
                            onSignOut: o,
                            susiPaths: d
                        }) : (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)(h(), {
                                href: d.signInPath,
                                legacyBehavior: !0,
                                children: (0, a.jsx)(E.C, {
                                    as: "a",
                                    className: "hrt-ml-1",
                                    "data-element-id": "btn_nav_sign_in",
                                    href: d.signInPath,
                                    children: (0, F.t)("Sign in")
                                })
                            }), (0, a.jsx)(b.k, {
                                as: "a",
                                className: s ? u()(ee()["shared-default-header-sign-up-button"], "hrt-ml-2") : "hrt-ml-2 hrt-rounded-full",
                                "data-element-id": "btn_nav_sign_up",
                                "data-tracking-id": "start fundraiser from header",
                                href: "/create/fundraiser",
                                layout: "inline",
                                onClick: e => f(e.currentTarget.textContent, "top nav", e.currentTarget.href),
                                size: "small",
                                variant: "default",
                                children: (0, F.t)("Start a GoFundMe")
                            })]
                        })]
                    }), (0, a.jsx)(_.L, {
                        className: "hrt-hide-min-lg",
                        children: (0, a.jsx)(j.j, {
                            "aria-controls": "dh-mobile-menu-us",
                            "aria-expanded": m,
                            as: "button",
                            buttonLabel: !(L > 0) || P || T ? (0, F.t)("menu") : (0, F.t)("menu, contains new notifications"),
                            "data-tracking-id": "open nav",
                            onClick: () => {
                                C(!0)
                            },
                            size: "medium",
                            children: (0, a.jsxs)(a.Fragment, {
                                children: [(0, a.jsx)(v.J, {
                                    name: "menu",
                                    size: "default"
                                }), L > 0 && !P && !T && (0, a.jsx)("span", {
                                    className: ee()["shared-default-header-notifications"]
                                })]
                            })
                        })
                    })]
                })
            }(0, m.cn)(!1);
            var en = n(314885),
                ea = n(884339),
                er = n(517670);
            let ei = () => {
                let {
                    data: e,
                    isLoggedIn: t
                } = (0, w.jY)(), n = (0, er.g)(), {
                    data: a,
                    error: i,
                    loading: s
                } = (0, C.$nb)({
                    skip: !n || !t || !e ? .email_verified,
                    ssr: !1
                });
                return {
                    unclaimedFundraisers: (0, r.useMemo)(() => i ? [] : a ? .viewer ? .claimableFundraisers ? ? [], [a, i]),
                    loading: n && s,
                    error: i
                }
            };
            var es = n(940625),
                eo = n(745385),
                ed = n(794157),
                eu = n.n(ed),
                el = n(519427),
                ec = n(771813),
                ef = n(579402),
                eh = n.n(ef);

            function em() {
                let e = "sitewide-banner-closed",
                    t = (0, r.useRef)(null),
                    [n, i] = (0, r.useState)(!1),
                    {
                        isEnabled: s,
                        banner: d
                    } = function() {
                        let e = (0, o.useRouter)().asPath,
                            {
                                countryCodeFromIP: t,
                                countryCode: n,
                                locale: a
                            } = (0, L.bN)(),
                            [r, i] = (0, ec.rm)("shared_sitewide_banner", void 0, {
                                overrideAttributes: {
                                    countryCode: t || n,
                                    locale: a,
                                    url: e
                                }
                            });
                        return {
                            isClientReady: i,
                            isEnabled: i && r.enabled,
                            banner: r.variables ? .banner || {},
                            variation: r.variationKey
                        }
                    }(),
                    {
                        ref: u
                    } = (0, k.w3)({
                        trackingId: `${d.id}: sitewide banner`
                    }),
                    l = s && d.id,
                    c = (0, k.Ke)(),
                    f = () => {
                        eu().set(e, d.id, {
                            expires: 30
                        }), i(!1)
                    };
                return ((0, r.useEffect)(() => {
                    l && eu().get(e) !== d.id && (document.documentElement.style.setProperty("--hero-padding-top", "160px"), i(!0))
                }, [t.current, l, n]), (0, r.useEffect)(() => {
                    t.current && (n ? (t.current.style.height = t.current.scrollHeight + "px", t.current.addEventListener("transitionend", () => {
                        t.current && (t.current.style.height = "auto")
                    }, {
                        once: !0
                    })) : t.current.style.height = "")
                }, [n]), l) ? (0, a.jsxs)(el.l, {
                    "aria-hidden": !n,
                    closeButtonLabel: (0, F.t)("Close"),
                    hideCloseIcon: !1,
                    icon: (0, a.jsx)(v.J, {
                        name: "donor",
                        size: "default"
                    }),
                    isOpen: n,
                    onClose: function() {
                        c("Button Clicked", k.Bs.Other, {
                            tracking_id: `header: ${d.id}: sitewide banner close`,
                            page_url: window.location.href
                        }), f()
                    },
                    ref: t,
                    children: [(0, a.jsxs)("span", {
                        children: [d.text, " ", (0, a.jsx)(h(), {
                            className: eh().cta,
                            "data-tracking-id": `header: ${d.id}: sitewide banner donate`,
                            href: d.cta_url,
                            onClick: f,
                            tabIndex: n ? 0 : -1,
                            target: "_blank",
                            children: d.cta_text
                        })]
                    }), n && (0, a.jsx)("div", {
                        ref: u
                    })]
                }) : null
            }
            let eg = e => {
                    let t = {
                        signInPath: "/sign-in",
                        signOutPath: "/sign-out"
                    };
                    return e.length > 0 && (t.signInPath = `/sign-in?redirect=${e}`), t
                },
                ep = s()(() => Promise.all([n.e(77486), n.e(98494), n.e(79140), n.e(24316), n.e(72546)]).then(n.bind(n, 872546)).then(e => e.Menu), {
                    loadableGenerated: {
                        webpack: () => [872546]
                    },
                    ssr: !1
                }),
                e_ = s()(() => Promise.resolve().then(n.bind(n, 745385)).then(e => e.HomepageEmergencyBanner), {
                    loadableGenerated: {
                        webpack: () => [745385]
                    },
                    ssr: !1
                }),
                ev = s()(() => Promise.all([n.e(96202), n.e(71259)]).then(n.bind(n, 671259)).then(e => e.HomepagePromoBanner), {
                    loadableGenerated: {
                        webpack: () => [671259]
                    },
                    ssr: !1
                });
            var eb = function(e) {
                let {
                    authenticatedPerson: t,
                    className: n,
                    headerLeft: i,
                    isFixedScroll: s,
                    onSignOut: d,
                    redirectPath: f,
                    susiPaths: h,
                    useProvidedIdentity: m
                } = e, g = h || eg(f || ""), [p, _] = (0, r.useState)(void 0), {
                    data: v
                } = (0, en.R)(), {
                    data: b
                } = (0, ea.x)(!!p), {
                    unclaimedFundraisers: x
                } = ei(), E = b && b ? .length > 0 || x ? .length > 0, j = v ? .roles ? .includes("charity") ? ? !1, [N, y] = (0, l.KO)(O.D), {
                    isEnabled: k,
                    variation: I
                } = (0, eo.useHomepageEmergencyBanner)(), S = "/home" === (0, o.useRouter)().pathname, C = S && k && I === eo.HOMEPAGE_EMERGENCY_BANNER_EXPERIMENT.variations.ON;
                return (0, r.useEffect)(() => {
                    if (m) return _(t);
                    _(v)
                }, [t, v]), (0, r.useEffect)(() => {
                    y(!1)
                }, []), (0, a.jsxs)(a.Fragment, {
                    children: [!C && (0, a.jsx)(es.q, {
                        children: (0, a.jsx)(em, {})
                    }), N && (0, a.jsx)(ep, {
                        hasFunds: !!E,
                        identity: p,
                        isCharityUser: j,
                        onSignOut: d,
                        susiPaths: g
                    }), (0, a.jsx)(c.h, {
                        className: u()(n, ee()["shared-default-header"]),
                        "data-tracking-namespace": "header",
                        navLabel: (0, F.t)("Main menu"),
                        skipLink: {
                            text: (0, F.t)("Skip to content"),
                            url: "#skipnav"
                        },
                        variant: s ? "fixed" : "default",
                        children: (0, a.jsx)(et, {
                            hasFunds: !!E,
                            headerLeft: i,
                            identity: p,
                            isCharityUser: j,
                            isFixedScroll: s,
                            onSignOut: d,
                            susiPaths: g
                        })
                    }), (0, a.jsx)("div", {
                        id: "skipnav"
                    }), S && (0, a.jsx)(es.q, {
                        children: C ? (0, a.jsx)(e_, {}) : (0, a.jsx)(ev, {})
                    })]
                })
            }
        },
        183652: function(e, t, n) {
            "use strict";
            n.d(t, {
                H: function() {
                    return f
                }
            });
            var a = n(552676),
                r = n(275271),
                i = n(183314),
                s = n.n(i),
                o = n(388873),
                d = n(45798),
                u = n(387280),
                l = n(363456),
                c = n(783955),
                f = function(e) {
                    let {
                        searchPageType: t
                    } = e, {
                        locale: n
                    } = (0, d.bN)(), i = (0, u.z)(), f = () => {
                        c.mt.getPlatform("Amplitude").setData({
                            languageUI: n,
                            basePage: "nextjs",
                            searchState: "empty state"
                        }), c.mt.push({
                            type: "mp_page_view",
                            viewId: "pg_srp",
                            userPath: t
                        })
                    };
                    return (0, r.useEffect)(() => {
                        try {
                            c.mt.getPlatform("Amplitude")
                        } catch (e) {
                            console.error("Missing Amplitude - global search")
                        }
                    }, []), (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(s(), {
                            href: "/s",
                            legacyBehavior: !0,
                            children: (0, a.jsx)(o.jH, {
                                as: "a",
                                buttonLabel: (0, l.t)("Search"),
                                className: i ? "" : "hrt-hide-min-md",
                                "data-element-id": "btn_nav_search_icon",
                                href: "/s",
                                onClick: f,
                                size: "medium",
                                children: (0, a.jsx)(o.JO, {
                                    name: "search",
                                    size: "default"
                                })
                            })
                        }), !i && (0, a.jsx)(s(), {
                            href: "/s",
                            legacyBehavior: !0,
                            children: (0, a.jsxs)(o.C9, {
                                "aria-label": (0, l.t)("Search"),
                                as: "a",
                                className: "hrt-hide-max-md",
                                "data-element-id": "btn_nav_search_icon",
                                href: "/s",
                                onClick: f,
                                children: [(0, a.jsx)(o.JO, {
                                    className: "hrt-mr-1",
                                    name: "search",
                                    size: "small"
                                }), (0, l.t)("Search")]
                            })
                        })]
                    })
                }
        },
        380439: function(e, t, n) {
            "use strict";
            n.d(t, {
                O: function() {
                    return u
                }
            });
            var a = n(552676),
                r = n(275271),
                i = n(183314),
                s = n.n(i),
                o = n(896938),
                d = n(527795),
                u = r.forwardRef(function(e, t) {
                    let {
                        className: n,
                        locale: r,
                        ...i
                    } = e, u = r ? `/${r}` : "/";
                    return (0, a.jsx)(s(), {
                        href: u,
                        legacyBehavior: !0,
                        children: (0, a.jsx)(d.r, {
                            "aria-label": "GoFundMe.com",
                            className: n,
                            href: u,
                            ref: t,
                            ...i,
                            children: (0, a.jsx)(o.b, {
                                className: "hrt-disp-block",
                                variant: "general"
                            })
                        })
                    })
                })
        },
        311499: function(e, t, n) {
            "use strict";
            n.d(t, {
                EJ: function() {
                    return d
                },
                bT: function() {
                    return o
                },
                kn: function() {
                    return r
                }
            });
            var a, r, i = n(893269),
                s = n(252135);
            (a = r || (r = {})).Apple = "app", a.Google = "play";
            let o = (e, t) => {
                    let n = t ? "-" + t : "",
                        a = "-v2";
                    return ["fr", "de", "it", "nl", "pt"].includes(t) && "play" === e && (a = ""), `https://d25oniaj7o2jcw.cloudfront.net/img-${e}-store${n}${a}.png`
                },
                d = e => {
                    e === i.Qv.PORTUGUESE_BR && (e = i.Qv.PORTUGUESE_PT);
                    let t = (0, s.hc)(e || "en-us").toLowerCase();
                    return {
                        localeSegment: t && "en-us" !== t ? `/${t}` : "",
                        bcp47Locale: t
                    }
                }
        },
        835147: function(e, t, n) {
            "use strict";
            n.d(t, {
                t: function() {
                    return r
                }
            });
            var a = n(600488);
            let r = `${a.config.environment.canonicalDomain}/c/givingfunds`
        },
        884339: function(e, t, n) {
            "use strict";
            n.d(t, {
                x: function() {
                    return i
                }
            });
            var a = n(53032),
                r = n(832101);

            function i(e) {
                return (0, a.Z)(e ? ["getCOFunds"] : null, () => (0, r.Hw)().then(e => {
                    let {
                        data: t
                    } = e;
                    return t
                }), {
                    shouldRetryOnError: !1
                })
            }
        },
        525690: function(e, t, n) {
            "use strict";
            n.d(t, {
                O: function() {
                    return s
                }
            });
            var a = n(600488),
                r = n(835147),
                i = n(637469);

            function s(e) {
                let {
                    data: t
                } = (0, i.viF)({
                    skip: !e,
                    ssr: !1
                });
                return Number(t ? .viewer ? .givingFunds ? .length) > 0 || !(0, a.yv)() ? "/giving-funds" : r.t
            }
        },
        144334: function(e, t, n) {
            "use strict";
            n.d(t, {
                N: function() {
                    return i
                }
            });
            var a = n(311499),
                r = n(45798);

            function i() {
                let {
                    locale: e
                } = (0, r.bN)(), {
                    localeSegment: t
                } = (0, a.EJ)(e);
                return `https://www.gofundme.com${t}/c/safety/gofundme-guarantee`
            }
        },
        387280: function(e, t, n) {
            "use strict";
            n.d(t, {
                z: function() {
                    return o
                }
            });
            var a = n(771813),
                r = n(45798),
                i = n(24352),
                s = n(175279);

            function o() {
                let {
                    data: e
                } = (0, i.jY)(), {
                    hasMounted: t
                } = (0, s.s)(), {
                    distinctId: n,
                    countryCodeFromIP: o
                } = (0, r.bN)(), d = String(e ? .person_id), [u] = (0, a.rm)("daf_giving_fund_navigation", {
                    decideOptions: [a.N1.DISABLE_DECISION_EVENT]
                }, {
                    overrideAttributes: {
                        personId: d,
                        os: "desktop",
                        countryCode: o
                    }
                });
                return !!["cypress", "giving-funds-cookie-override"].includes(String(n)) || !!t && u.enabled
            }
        },
        517670: function(e, t, n) {
            "use strict";
            n.d(t, {
                Y: function() {
                    return r
                },
                g: function() {
                    return i
                }
            });
            var a = n(771813);
            let r = {
                    name: "fe-unclaimed-fundraisers",
                    variations: {
                        on: "on",
                        off: "off"
                    }
                },
                i = () => {
                    let [e, t] = (0, a.rm)(r.name);
                    return !!(e.enabled && t)
                }
        },
        832101: function(e, t, n) {
            "use strict";
            n.d(t, {
                Hw: function() {
                    return c
                },
                cF: function() {
                    return l
                },
                mD: function() {
                    return u
                }
            });
            var a = n(704373),
                r = n(600488),
                i = n(600628),
                s = n(175090);
            n(139956);
            let o = r.config.environment.coServiceDomain,
                d = `${o}/funds`,
                u = e => {
                    let t = `${d}/${(0,s.D)(e)}/upload_destination`;
                    return i.eN.get(t)
                },
                l = e => {
                    let t;
                    let n = new FormData;
                    Object.keys(e).forEach(t => {
                        let a = e[t];
                        if (a) {
                            let e = "number" == typeof a ? a.toString() : a;
                            n.set(t, e)
                        }
                    }), e.image && n.set("image", e.image, e.image.name), e.locale && (t = {
                        headers: {
                            "Accept-Language": e.locale
                        }
                    });
                    let a = `${o}/uploads`;
                    return i.eN.post(a, n, t)
                },
                c = e => {
                    let t = `${d}`;
                    return i.eN.get(t, (0, a.T)(e))
                }
        },
        446287: function(e) {
            e.exports = {
                accountNotificationIndicator: "account_accountNotificationIndicator__IGvdL",
                accountNotificationCount: "account_accountNotificationCount__rryBM"
            }
        },
        630542: function(e) {
            e.exports = {
                "shared-default-header": "default-header_shared-default-header__Nebuq",
                "shared-default-header-giving-funds-button": "default-header_shared-default-header-giving-funds-button__FWP_C",
                "shared-default-header-individuals-dropdown": "default-header_shared-default-header-individuals-dropdown__hqpAQ",
                "shared-default-header-person": "default-header_shared-default-header-person__gbs0b",
                "shared-default-header-sign-up-button": "default-header_shared-default-header-sign-up-button__xQ4v9",
                "shared-default-header-notifications": "default-header_shared-default-header-notifications__PCbA3"
            }
        },
        512385: function(e) {
            e.exports = {
                banner: "homepage-emergency-banner_banner__YcA13"
            }
        },
        579402: function(e) {
            e.exports = {
                cta: "sitewide-banner_cta__OSogR"
            }
        }
    }
]);
//# sourceMappingURL=3263-ed69a0d8476528d3.js.map