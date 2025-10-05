(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3949], {
        844197: function(t, e, a) {
            "use strict";
            a.d(e, {
                $: function() {
                    return n.$
                },
                k: function() {
                    return r.k
                }
            });
            var n = a(380480),
                r = a(708349)
        },
        3949: function(t, e, a) {
            "use strict";
            a.r(e), a.d(e, {
                DonationSuggestionCard: function() {
                    return b
                },
                SuggestionCard: function() {
                    return k
                }
            });
            var n = a(552676);
            a(275271);
            var r = a(183314),
                s = a.n(r),
                o = a(282187),
                i = a.n(o),
                d = a(768022),
                c = a(77655),
                l = a(103010),
                u = a(850322),
                h = a(251556),
                g = a(844197),
                m = a(101801),
                f = a(781776),
                _ = a(893269),
                p = a(363456),
                x = a(783955),
                y = a(273916),
                j = a(817741),
                v = a.n(j);

            function k(t) {
                let {
                    className: e,
                    children: a,
                    dataElementId: r,
                    donateURL: o,
                    title: c
                } = t, l = i()(e, v().card, v().backgroundImage), h = (0, d.x)(), m = (0, u._O)(), f = (0, p.t)("Donate");
                return (0, n.jsxs)("div", {
                    className: l,
                    children: [(0, n.jsx)("div", {
                        className: v().content,
                        children: (0, n.jsxs)("div", {
                            children: [(0, n.jsxs)("div", {
                                children: [(0, n.jsx)("h2", {
                                    className: v().header,
                                    children: c
                                }), a]
                            }), h && (0, n.jsx)(s(), {
                                href: o,
                                legacyBehavior: !0,
                                children: (0, n.jsx)(g.k, {
                                    as: "a",
                                    className: "hrt-hide-max-lg hrt-mr-0 hrt-ml-0 hrt-mt-2 hrt-surface-feature-strong hrt-text-supporting-on-selected-strong",
                                    "data-element-id": r,
                                    href: o,
                                    onClick: () => m("fundraiser story", f, o),
                                    variant: "default",
                                    children: f
                                })
                            })]
                        })
                    }), h && (0, n.jsx)(s(), {
                        href: o,
                        legacyBehavior: !0,
                        children: (0, n.jsx)(g.k, {
                            as: "a",
                            className: "hrt-hide-min-lg hrt-mt-2 hrt-surface-feature-strong hrt-text-supporting-on-selected-strong",
                            "data-element-id": r,
                            href: o,
                            onClick: () => m("fundraiser story", f, o),
                            variant: "default",
                            children: f
                        })
                    })]
                })
            }

            function b(t) {
                let {
                    displaySuggestedDonationForGoal: e,
                    suggestedDonationAmount: {
                        raw: a,
                        formatted: r
                    }
                } = t, {
                    donations: o
                } = (0, f.b)(), {
                    charity: i,
                    charityOrganized: j,
                    organizer: v,
                    fundraiserStatus: b
                } = (0, c.g)(), N = v ? .firstName ? ? "", D = b === _.c4.ACTIVE, C = (0, d.x)(), I = (0, u._O)(), A = (0, u.tp)(), {
                    openModal: S
                } = (0, l.o)(), E = (0, p.t)("Donate"), O = {
                    amt: a.toString()
                }, z = (0, m.u)("/donate", {
                    additionalParams: {
                        source: "btn_goal_card_donate",
                        ...O
                    }
                }), P = (0, m.u)("/donate", {
                    additionalParams: {
                        source: "btn_story_donate"
                    }
                }), R = (0, m.u)("/donate", {
                    additionalParams: {
                        source: "btn_empty_state_card_donate",
                        ...O
                    }
                });
                return D ? o ? .length ? e ? (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(k, {
                        dataElementId: "goal_card",
                        donateURL: z,
                        title: (0, p.t)("Give {{suggestedDonationAmount}} to help get this fundraiser to its goal", {
                            suggestedDonationAmount: r
                        })
                    }), (0, n.jsx)(g.$, {
                        className: "hrt-hide-min-lg",
                        type: "horizontal"
                    })]
                }) : (0, n.jsxs)("div", {
                    className: "hrt-disp-flex",
                    children: [C && (0, n.jsx)(s(), {
                        href: P,
                        prefetch: !1,
                        legacyBehavior: !0,
                        children: (0, n.jsx)(g.k, {
                            as: "a",
                            "data-element-id": "btn_story_donate",
                            href: P,
                            layout: "full",
                            onClick: () => {
                                I("fundraiser story", E, P), x.mt.push({
                                    algoliaInsights: {
                                        eventName: "campaign_click_on_donate_button",
                                        method: "convertedObjectIDsAfterSearch"
                                    }
                                })
                            },
                            variant: "default",
                            children: E
                        })
                    }), (0, n.jsx)(g.k, {
                        as: "button",
                        className: "hrt-ml-2",
                        "data-element-id": "btn_story_share",
                        layout: "full",
                        onClick: () => {
                            (0, h.$h)({
                                platform: h.Os.AMPLITUDE,
                                data: {
                                    campaignShare: y.X.STORY
                                }
                            }), A("fundraiser story", "Share"), S("share", {
                                source: "fundraiser story"
                            })
                        },
                        variant: "default",
                        children: (0, p.t)("Share")
                    })]
                }) : (0, n.jsx)(k, {
                    dataElementId: "empty_state_card",
                    donateURL: R,
                    title: (0, p.t)("Give {{suggestedDonationAmount}} and be a founding donor", {
                        suggestedDonationAmount: r
                    }),
                    children: (0, n.jsx)("p", {
                        className: "hrt-mb-0 hrt-mt-half",
                        children: j && i ? (0, p.t)("Your donation is the start of the journey to success for {{charityName}}. Your early support inspires others to donate.", {
                            charityName: i.name
                        }) : (0, p.t)("Your donation starts {{- organizer}}’s journey to success by inspiring others to help.", {
                            organizer: N
                        })
                    })
                }) : null
            }
        },
        817741: function(t) {
            t.exports = {
                card: "donation-suggestion-card_card__WNQJD",
                header: "donation-suggestion-card_header__7Jg24",
                content: "donation-suggestion-card_content__a6R_8",
                backgroundImage: "donation-suggestion-card_backgroundImage__4vJZk"
            }
        }
    }
]);
//# sourceMappingURL=3949.b6e9e981b99baf17.js.map