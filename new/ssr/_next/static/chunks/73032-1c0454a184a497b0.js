(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [73032], {
        173032: function(e, t, a) {
            "use strict";
            a.d(t, {
                q: function() {
                    return M
                }
            });
            var n = a(552676),
                s = a(275271),
                r = a(282187),
                l = a.n(r),
                i = a(499179),
                o = a(224252),
                c = a(296379),
                d = a(541940),
                u = a(217834),
                _ = a(296279),
                m = a(527795),
                f = a(179206),
                g = a(934821),
                h = a(758655),
                p = a(646124),
                E = a(893269),
                v = a(45798),
                S = a(736422),
                I = a(144334),
                N = a(363456),
                x = a(252135),
                b = a(311499),
                G = a(132922),
                L = a.n(G),
                Q = a(650863),
                H = a(285628),
                k = a(708349),
                C = a(32206),
                A = a(832921),
                j = a.n(A);
            let w = L()(() => Promise.all([a.e(17078), a.e(42588), a.e(97308)]).then(a.bind(a, 997308)).then(e => e.LocalePickerModal), {
                loadableGenerated: {
                    webpack: () => [997308]
                },
                ssr: !1
            });
            var F = function(e) {
                let {
                    ref: t,
                    inView: a
                } = (0, Q.YD)({
                    threshold: 0
                }), {
                    locale: r,
                    onLocaleChange: l
                } = e, i = (0, E.YO)(), [o, c] = (0, s.useState)(), [d, u] = (0, s.useState)(), [_, m] = (0, s.useState)();
                (0, s.useEffect)(() => {
                    c((0, x.BR)(r))
                }, [r]), (0, s.useEffect)(() => {
                    m((0, x.Wu)(o)), u((0, x.Ye)(o))
                }, [o]);
                let f = (e, t) => {
                        let a = ("country" === e ? i : (0, E.Pw)()).find(e => e.value === t);
                        return a ? .text || f(e, "country" === e ? E.Ec.UNITED_STATES : E.y4.ENGLISH)
                    },
                    g = _ ? _.toLowerCase() : null,
                    h = _ && f("country", _),
                    p = d && f("language", d);
                return _ && d && (0, n.jsx)(C.Z, {
                    children: e => {
                        let {
                            on: s,
                            setOn: r,
                            setOff: i
                        } = e;
                        return (0, n.jsxs)(n.Fragment, {
                            children: [(0, n.jsxs)(k.k, {
                                "aria-label": (0, N.t)("Choose your language - {{country}}\xb7{{language}}", {
                                    country: h,
                                    language: p
                                }),
                                as: "button",
                                className: j().localePickerButton,
                                "data-element-id": "footer-language-picker",
                                onClick: r,
                                ref: t,
                                size: "small",
                                title: (0, N.t)("Choose your language"),
                                variant: "default",
                                children: [g && (0, n.jsx)(H.V, {
                                    className: "hrt-mr-1",
                                    name: g,
                                    size: "small"
                                }), h, (0, n.jsx)("span", {
                                    className: "hrt-mr-1 hrt-ml-1",
                                    children: "\xb7"
                                }), p]
                            }), (a || s) && (0, n.jsx)(w, {
                                className: "m-locale-picker-modal",
                                countryCode: _,
                                isOpen: s,
                                languageCode: d,
                                onClose: i,
                                onLocaleChange: l
                            })]
                        })
                    }
                }) || null
            };
            let $ = e => [{
                    dataElementId: "btn_nav_discover",
                    link: "/discover",
                    text: (0, N.t)("Categories")
                }, {
                    dataElementId: "btn_nav_crisis_relief",
                    forCountries: [E.Ec.UNITED_STATES],
                    link: `${e}/c/act`,
                    text: (0, N.t)("Crisis relief")
                }, {
                    dataElementId: "btn_nav_causes",
                    forCountries: [E.Ec.UNITED_STATES],
                    link: `${e}/c/cause`,
                    text: (0, N.t)("Social Impact Funds")
                }, {
                    dataElementId: "btn_nav_supporter_space",
                    forLocales: [E.Qv.ENGLISH_US],
                    link: `${e}/c/supporter-space`,
                    text: (0, N.t)("Supporter Space")
                }, {
                    dataElementId: "btn_nav_donate_nonprofits",
                    forLocales: [E.Qv.ENGLISH_US, E.Qv.SPANISH_US],
                    link: "/s?nonprofits=1",
                    text: (0, N.t)("Nonprofits")
                }],
                U = e => {
                    let {
                        localeSegment: t,
                        countryCode: a
                    } = e;
                    return [{
                        dataElementId: "btn_nav_start",
                        link: `${t}/c/start`,
                        text: (0, N.t)("How to start a GoFundMe")
                    }, {
                        dataElementId: "btn_nav_start_fundraising_categories",
                        forLocales: [E.Qv.ENGLISH_AU, E.Qv.ENGLISH_CA, E.Qv.ENGLISH_IE, E.Qv.ENGLISH_GB, E.Qv.ENGLISH_US, E.Qv.SPANISH_US],
                        link: `${t}/c/start/fundraising-categories`,
                        text: (0, N.t)("Fundraising categories")
                    }, {
                        dataElementId: "btn_nav_team_fundraising",
                        link: `${t}/c/fundraising-tips/team`,
                        text: (0, N.t)("Team fundraising")
                    }, {
                        dataElementId: "btn_nav_blog",
                        link: `${t}/c/blog`,
                        text: (0, N.t)("Fundraising Blog")
                    }, {
                        dataElementId: "btn_nav_start_charity_fundraising",
                        forLocales: [E.Qv.ENGLISH_AU, E.Qv.ENGLISH_CA, E.Qv.ENGLISH_IE, E.Qv.ENGLISH_GB, E.Qv.ENGLISH_US, E.Qv.SPANISH_US],
                        link: "/es-us" === t ? `${t}/c/start/organizacion-benefica` : `${t}/start/charity-fundraising`,
                        text: (0, N.t)("Charity fundraising")
                    }, {
                        dataElementId: "btn_nav_charity",
                        forLocales: [E.Qv.ENGLISH_AU, E.Qv.ENGLISH_CA, E.Qv.ENGLISH_IE, E.Qv.ENGLISH_GB, E.Qv.ENGLISH_US],
                        link: `${t}/c/charity-fundraising`,
                        text: "US" === a ? (0, N.t)("Sign up as a nonprofit") : (0, N.t)("Sign up as a charity")
                    }, {
                        forLocales: [E.Qv.ENGLISH_GB],
                        link: `${t}/c/act/workplace-partnerships-business-fundraising`,
                        text: (0, N.t)("Corporate fundraising")
                    }, {
                        forLocales: [E.Qv.ENGLISH_GB],
                        link: `${t}/c/act/gofundme-event-partner`,
                        text: (0, N.t)("Event fundraising")
                    }]
                },
                y = e => {
                    let {
                        gfmGuaranteeUrl: t,
                        helpCenterLocale: a,
                        localeSegment: n,
                        supportUrlPrefix: s
                    } = e;
                    return [{
                        dataElementId: "btn_nav_how_it_works",
                        link: `${n}/c/how-it-works`,
                        text: (0, N.t)("How GoFundMe works")
                    }, {
                        dataElementId: "btn_nav_gfm_guarantee",
                        link: t,
                        text: (0, N.t)("GoFundMe Giving Guarantee")
                    }, {
                        dataElementId: "btn_nav_supported_countries",
                        link: `${s}/articles/360001972748`,
                        text: (0, N.t)("Supported countries")
                    }, {
                        dataElementId: "btn_nav_pricing",
                        link: `${n}/c/pricing`,
                        text: "/de-de" === n ? "Geb\xfchren" : (0, N.t)("Pricing")
                    }, {
                        dataElementId: "btn_nav_support_gofundme_com",
                        link: s,
                        text: "/de-de" === n ? "Hilfe-Center und Kundensupport" : (0, N.t)("Help Center")
                    }, {
                        dataElementId: "btn_nav_about_gfm",
                        link: `${n}/c/about-us`,
                        text: (0, N.t)("About GoFundMe")
                    }, {
                        dataElementId: "btn_nav_newsroom",
                        link: `${n}/c/press`,
                        text: "de-de" === a ? "Pressestelle und Impressum" : "en-us" === a ? (0, N.t)("Newsroom") : (0, N.t)("Press Center")
                    }, {
                        dataElementId: "btn_nav_careers",
                        link: `${n}/c/careers`,
                        text: (0, N.t)("Careers")
                    }, {
                        dataElementId: "btn_nav_gfm_org",
                        forCountries: [E.Ec.UNITED_STATES],
                        link: "https://www.gofundme.org",
                        text: "GoFundMe.org"
                    }, {
                        dataElementId: "btn_nav_gfm_org",
                        forCountries: [E.Ec.UNITED_KINGDOM],
                        link: "https://gofundme.org.uk/",
                        text: "GoFundMe.org"
                    }, {
                        dataElementId: "btn_nav_gfm_partnerships",
                        forLocales: [E.Qv.ENGLISH_US],
                        link: `${n}/c/partnerships`,
                        text: "GoFundMe Partnerships"
                    }, {
                        dataElementId: "btn_nav_gfm_pro",
                        forLocales: [E.Qv.ENGLISH_US],
                        link: "https://pro.gofundme.com",
                        text: "GoFundMe Pro for nonprofits"
                    }]
                },
                T = e => [{
                    link: `${e}/c/fundraising-tips`,
                    text: (0, N.t)("Fundraising tips")
                }, {
                    link: `${e}/c/fundraising-ideas`,
                    text: (0, N.t)("Fundraising ideas")
                }, {
                    forLocales: [E.Qv.DUTCH_NL, E.Qv.ENGLISH_AU, E.Qv.ENGLISH_CA, E.Qv.ENGLISH_IE, E.Qv.ENGLISH_GB, E.Qv.ENGLISH_US, E.Qv.FRENCH_CA, E.Qv.FRENCH_FR, E.Qv.GERMAN_DE, E.Qv.ITALIAN_IT],
                    link: `${e}/c/blog/emergency-rental-assistance`,
                    text: (0, N.t)("Rent assistance")
                }, {
                    forLocales: [E.Qv.DUTCH_NL, E.Qv.ENGLISH_AU, E.Qv.ENGLISH_CA, E.Qv.ENGLISH_IE, E.Qv.ENGLISH_GB, E.Qv.ENGLISH_US, E.Qv.FRENCH_CA, E.Qv.FRENCH_FR, E.Qv.GERMAN_DE, E.Qv.ITALIAN_IT, E.Qv.PORTUGUESE_PT],
                    link: `${e}/c/blog/charity-fundraising-sites`,
                    text: (0, N.t)("Fundraising sites")
                }, {
                    link: `${e}/c/fundraising-ideas/team`,
                    text: (0, N.t)("Team fundraising ideas"),
                    forLocales: [E.Qv.ENGLISH_AU, E.Qv.ENGLISH_CA, E.Qv.ENGLISH_GB, E.Qv.ENGLISH_US]
                }, {
                    link: `${e}/c/crowdfunding`,
                    text: (0, N.t)("What is crowdfunding?")
                }, {
                    link: `${e}/c/why-gofundme`,
                    text: (0, N.t)("Why GoFundMe")
                }, {
                    link: `${e}/c/questions`,
                    text: (0, N.t)("Common questions")
                }, {
                    link: `${e}/c/success`,
                    text: (0, N.t)("Success stories")
                }, {
                    forLocales: [E.Qv.DUTCH_NL, E.Qv.ENGLISH_AU, E.Qv.ENGLISH_CA, E.Qv.ENGLISH_IE, E.Qv.ENGLISH_GB, E.Qv.ENGLISH_US, E.Qv.FRENCH_FR, E.Qv.GERMAN_DE, E.Qv.ITALIAN_IT, E.Qv.PORTUGUESE_PT],
                    link: `${e}/c/blog/how-to-get-help-with-bills`,
                    text: (0, N.t)("Help with bills")
                }, {
                    link: `${e}/c/blog/pay-medical-bills`,
                    text: (0, N.t)("Help with medical bills")
                }, {
                    link: `${e}/c/fundraising-ideas/college`,
                    text: (0, N.t)("Fundraising ideas for college"),
                    forLocales: [E.Qv.ENGLISH_US]
                }, {
                    link: `${e}/c/fundraising-ideas/schools`,
                    text: (0, N.t)("School fundraising ideas")
                }, {
                    forLocales: [E.Qv.DUTCH_NL, E.Qv.ENGLISH_AU, E.Qv.ENGLISH_CA, E.Qv.ENGLISH_IE, E.Qv.ENGLISH_GB, E.Qv.ENGLISH_US, E.Qv.FRENCH_CA, E.Qv.FRENCH_FR, E.Qv.GERMAN_DE, E.Qv.PORTUGUESE_PT, E.Qv.SPANISH_ES, E.Qv.SPANISH_MX, E.Qv.SPANISH_US],
                    link: `${e}/c/blog/service-dog-fundraising`,
                    text: (0, N.t)("How to get a service dog")
                }, {
                    link: `${e}/c/blog/top-crowdfunding-sites`,
                    text: (0, N.t)("Crowdfunding sites")
                }, {
                    link: `${e}/c/blog/financial-help-for-veterans`,
                    text: (0, N.t)("Help for veterans"),
                    forLocales: [E.Qv.ENGLISH_AU, E.Qv.ENGLISH_CA, E.Qv.ENGLISH_IE, E.Qv.ENGLISH_GB, E.Qv.ENGLISH_US]
                }];
            var P = a(258894),
                R = a.n(P),
                M = function(e) {
                    let {
                        className: t,
                        onLocaleChange: a
                    } = e, [r, G] = (0, s.useState)(!1), [L, Q] = (0, s.useState)(!1), {
                        countryCode: H,
                        locale: k
                    } = (0, v.bN)(), C = (0, S.xG)(), A = H === E.Ec.UNITED_STATES, j = (0, x.Ye)(k).replace("en", ""), [w, P] = (0, s.useState)(""), [M, D] = (0, s.useState)("en-us"), B = e => {
                        let {
                            forCountries: t
                        } = e;
                        return !t || t.includes(H)
                    }, z = e => {
                        let {
                            forLocales: t
                        } = e;
                        return !t || t.includes(k)
                    }, O = (0, I.N)();
                    (0, s.useEffect)(() => {
                        P((0, b.EJ)(k).localeSegment), D((0, x.O6)(k))
                    }, [k]), (0, s.useEffect)(() => {
                        navigator.userAgent.match(/Android/i) ? Q(!0) : navigator.userAgent.match(/iPhone|iPad|iPod/i) ? G(!0) : (G(!0), Q(!0))
                    }, []);
                    let Y = l()(t, R().defaultFooter, "shared-default-footer");
                    return (0, n.jsxs)(o.$, {
                        className: Y,
                        "data-tracking-namespace": "footer",
                        children: [(0, n.jsxs)(d.c, {
                            children: [(0, n.jsx)(p.x, {
                                as: "h2",
                                screenReaderOnly: !0,
                                children: (0, N.t)("Secondary menu")
                            }), (0, n.jsx)(d.c.Column, {
                                title: (0, N.t)("Donate"),
                                children: $(w).filter(B).filter(z).map(e => {
                                    let {
                                        link: t,
                                        text: a,
                                        dataElementId: s
                                    } = e;
                                    return (0, n.jsx)(f.p, {
                                        as: "a",
                                        "data-element-id": s,
                                        href: t ? ? "",
                                        size: "condensed",
                                        title: a
                                    }, a)
                                })
                            }), (0, n.jsx)(d.c.Column, {
                                title: (0, N.t)("Fundraise"),
                                children: U({
                                    localeSegment: w,
                                    countryCode: H
                                }).filter(z).filter(B).map(e => {
                                    let {
                                        link: t,
                                        text: a,
                                        dataElementId: s
                                    } = e;
                                    return (0, n.jsx)(f.p, {
                                        as: "a",
                                        "data-element-id": s,
                                        href: t ? ? "",
                                        size: "condensed",
                                        title: a
                                    }, a)
                                })
                            }), (0, n.jsx)(d.c.Column, {
                                className: k !== E.Qv.FRENCH_FR ? "hrt-footer-multicolumn" : "",
                                title: (0, N.t)("About"),
                                children: y({
                                    gfmGuaranteeUrl: O,
                                    helpCenterLocale: M,
                                    localeSegment: w,
                                    supportUrlPrefix: C
                                }).filter(B).filter(z).map(e => {
                                    let {
                                        link: t,
                                        text: a,
                                        dataElementId: s
                                    } = e;
                                    return (0, n.jsx)(f.p, {
                                        as: "a",
                                        "data-element-id": s,
                                        href: t ? ? "",
                                        size: "condensed",
                                        title: a
                                    }, a)
                                })
                            }), k === E.Qv.FRENCH_FR && (0, n.jsxs)("div", {
                                className: "hrt-px-1",
                                children: [(0, n.jsx)("img", {
                                    alt: "",
                                    height: 64,
                                    src: "/nextassets/shared/logo-ifp.png",
                                    width: 64
                                }), (0, n.jsx)("p", {
                                    className: "hrt-text-body-sm hrt-mt-1",
                                    children: "GoFundMe Ireland Limited est immatricul\xe9e \xe0 l’ORIAS en tant qu’Interm\xe9diaire en Financement Participatif (IFP) sous le num\xe9ro d’immatriculation 24000751."
                                })]
                            }), (0, n.jsx)(d.c.MoreResources, {
                                title: (0, N.t)("More resources"),
                                children: T(w).filter(z).map(e => {
                                    let {
                                        link: t,
                                        text: a,
                                        dataElementId: s
                                    } = e;
                                    return (0, n.jsx)(f.p, {
                                        as: "a",
                                        "data-element-id": s,
                                        href: t ? ? "",
                                        size: "condensed",
                                        title: a
                                    }, a)
                                })
                            })]
                        }), (0, n.jsxs)(u.k, {
                            className: "hrt-footer-secondary--default-areas",
                            children: [(0, n.jsx)("div", {
                                className: "shared-default-footer-locale",
                                children: (0, n.jsx)(F, {
                                    locale: k,
                                    onLocaleChange: a
                                })
                            }), (0, n.jsxs)(_.w, {
                                children: [(0, n.jsx)(h.j, {
                                    as: "a",
                                    buttonLabel: "Facebook",
                                    href: "https://www.facebook.com/gofundme",
                                    size: "medium",
                                    children: (0, n.jsx)(i.V, {
                                        name: "facebook",
                                        size: "large"
                                    })
                                }), (0, n.jsx)(h.j, {
                                    as: "a",
                                    buttonLabel: "YouTube",
                                    href: "https://www.youtube.com/user/gofundme",
                                    size: "medium",
                                    children: (0, n.jsx)(i.V, {
                                        name: "youtube",
                                        size: "large"
                                    })
                                }), (0, n.jsx)(h.j, {
                                    as: "a",
                                    buttonLabel: "Twitter",
                                    href: "https://twitter.com/gofundme",
                                    size: "medium",
                                    children: (0, n.jsx)(i.V, {
                                        name: "x",
                                        size: "default"
                                    })
                                }), (0, n.jsx)(h.j, {
                                    as: "a",
                                    buttonLabel: "Instagram",
                                    href: "https://www.instagram.com/gofundme/",
                                    size: "medium",
                                    children: (0, n.jsx)(i.V, {
                                        name: "instagram",
                                        size: "large"
                                    })
                                })]
                            }), (0, n.jsxs)(c.P, {
                                children: [(0, n.jsxs)("span", {
                                    className: "shared-default-footer-legal-date hrt-text-supporting hrt-mx-1",
                                    "data-chromatic": "ignore",
                                    children: ["\xa9 2010-", new Date().getFullYear(), (0, n.jsx)(n.Fragment, {
                                        children: " "
                                    }), "GoFundMe"]
                                }), (0, n.jsx)(g.C, {
                                    as: "a",
                                    className: "hrt-footer-legal-item hrt-text-left",
                                    href: `${w}/c/terms`,
                                    children: (0, N.t)("Terms")
                                }), (0, n.jsx)(g.C, {
                                    as: "a",
                                    className: "hrt-footer-legal-item hrt-text-left",
                                    href: `${w}/c/privacy`,
                                    children: (0, N.t)("Privacy Notice")
                                }), (0, n.jsx)(g.C, {
                                    as: "a",
                                    className: "hrt-footer-legal-item hrt-text-left",
                                    href: `${w}/c/legal`,
                                    children: (0, N.t)("Legal")
                                }), A && (0, n.jsx)(g.C, {
                                    as: "a",
                                    className: "hrt-footer-legal-item hrt-text-left",
                                    href: `${w}/c/accessibility-statement`,
                                    children: (0, N.t)("Accessibility Statement")
                                }), (0, n.jsx)(g.C, {
                                    as: "a",
                                    className: "hrt-footer-legal-item hrt-text-left",
                                    href: `${w}/c/gofundme-cookie-policy`,
                                    children: (0, N.t)("Cookie Policy")
                                }), (0, n.jsx)(g.C, {
                                    as: "button",
                                    className: "hrt-footer-legal-item hrt-text-left transcend-consent-link",
                                    onClick: () => window.transcend ? .showConsentManager(),
                                    children: (0, N.t)("Manage Cookie Preferences")
                                }), (0, n.jsxs)(g.C, {
                                    as: "a",
                                    className: "hrt-footer-legal-item hrt-text-left",
                                    href: `${w}/c/opt-out-rights`,
                                    children: [(0, N.t)("Your Privacy Choices"), (0, n.jsx)("img", {
                                        alt: "",
                                        className: "hrt-ml-1",
                                        height: "14",
                                        src: "/nextassets/shared/privacy-pill.png",
                                        width: "29"
                                    })]
                                })]
                            }), (0, n.jsxs)("div", {
                                className: "shared-default-footer-stores",
                                children: [L && (0, n.jsx)(m.r, {
                                    className: "shared-default-footer-store-button shared-default-footer-store-button--google",
                                    "data-gfm-analytics-element": "btn_mobiledashboard_nativeappupsell_getapp_android",
                                    "data-testid": "android-upsell-btn",
                                    href: "https://play.google.com/store/apps/details?id=com.GoFundMe.GoFundMe&referrer=utm_source%3Dgofundme%26utm_medium%3Dpublic_web_mobileapp",
                                    style: {
                                        backgroundImage: `url(${(0,b.bT)(b.kn.Google,j)})`
                                    },
                                    unstyled: !0,
                                    children: (0, N.t)("Get it on Google Play")
                                }), r && (0, n.jsx)(m.r, {
                                    className: `shared-default-footer-store-button shared-default-footer-store-button--apple shared-default-footer-store-button--${j}`,
                                    "data-gfm-analytics-element": "btn_mobiledashboard_nativeappupsell_getapp_iphone",
                                    "data-testid": "apple-upsell-btn",
                                    href: "https://itunes.apple.com/app/apple-store/id734130700?pt=2179020&ct=gofundme_public_web_mobileapp&mt=8",
                                    style: {
                                        backgroundImage: `url(${(0,b.bT)(b.kn.Apple,j)})`
                                    },
                                    unstyled: !0,
                                    children: (0, N.t)("Available on the App Store")
                                })]
                            })]
                        })]
                    })
                }
        },
        258894: function(e) {
            e.exports = {
                defaultFooter: "default-footer_defaultFooter__ISvRD"
            }
        },
        832921: function(e) {
            e.exports = {
                localePickerButton: "locale-picker_localePickerButton__WsmkM"
            }
        }
    }
]);
//# sourceMappingURL=73032-1c0454a184a497b0.js.map