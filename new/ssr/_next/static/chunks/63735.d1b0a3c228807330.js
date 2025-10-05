(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [63735], {
        590446: function(t, e, n) {
            "use strict";
            n.d(e, {
                G: function() {
                    return m
                }
            });
            var a = n(275271),
                o = n(282187),
                s = n.n(o),
                r = n(409758);
            let m = (0, a.forwardRef)((t, e) => {
                let {
                    amount: n,
                    comment: o,
                    superlative: m,
                    timestamp: i,
                    timestampDisplay: l,
                    ...c
                } = t, u = (0, a.useRef)(null);
                (0, a.useImperativeHandle)(e, () => u.current);
                let d = a.createElement(a.Fragment, null, n && (m || l) && a.createElement("span", {
                    className: "hrt-donation-list-item-content"
                }, a.createElement("span", {
                    className: s()("hrt-donation-list-item-amount", !o && "hrt-font-bold")
                }, n), m ? a.createElement("span", {
                    className: "hrt-donation-list-item-data"
                }, m) : a.createElement("time", {
                    className: "hrt-donation-list-item-data",
                    ...i && {
                        dateTime: i
                    },
                    suppressHydrationWarning: !0
                }, l)), o && a.createElement("div", {
                    className: "hrt-donation-list-item-comment"
                }, o));
                return a.createElement(r.g, {
                    ref: u,
                    ...c,
                    align: "top",
                    description: d,
                    hasComment: !!o
                })
            });
            m.displayName = "DonationListItem"
        },
        663735: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                Comments: function() {
                    return k
                }
            });
            var a = n(552676),
                o = n(282187),
                s = n.n(o),
                r = n(991280),
                m = n(590446),
                i = n(16552),
                l = n(923247),
                c = n(590839),
                u = n(363456),
                d = n(9834),
                p = n(77655),
                h = n(652751),
                f = n(637469),
                g = n(783955),
                I = n(233619),
                N = n(45798),
                x = n(487222),
                _ = n(252440),
                b = n(965690),
                w = n(923795),
                v = n.n(w);

            function k() {
                let {
                    comments: t,
                    getMoreComments: e,
                    showMore: n,
                    totalComments: o
                } = function() {
                    let {
                        fundUrl: t,
                        defaultSlug: e
                    } = (0, p.g)(), {
                        comments: {
                            count: n
                        }
                    } = (0, h.x)(), a = t || e, o = function() {
                        let t = (0, I.s)(),
                            {
                                locale: e
                            } = (0, N.bN)();
                        return function(n) {
                            if (!n) return {};
                            let a = n.donation ? .name;
                            return {
                                author: {
                                    fullName: a.length > 35 ? `${(0,b.$G)(a,35,!1)}...` : a,
                                    initials: a ? (0, _.Qm)(n.donation.name) : "",
                                    profileImage: n.authorProfilePhoto ? ? ""
                                },
                                donationAmountFormatted: t.formatAsCurrency(n.donation.amount.amount),
                                commentImages: n.photos,
                                text: n.text,
                                timeAgo: n.createdAt ? (0, x.BK)({
                                    locale: e
                                })(new Date(n.createdAt)) : "",
                                ugcId: Number(n.id)
                            }
                        }
                    }(), {
                        data: s,
                        error: r,
                        fetchMore: m
                    } = (0, f.P4s)({
                        variables: {
                            last: 10,
                            slug: `${a}`
                        }
                    }), i = s ? .fundraiser ? .comments ? .edges ? .map(t => o(t ? .node)), l = s ? .fundraiser ? .comments ? .pageInfo ? .hasPreviousPage;

                    function c() {
                        g.mt.trackEvent({
                            elementId: "btn_comments_paginate",
                            type: "mp_page_click",
                            viewId: d.vc.campaign.dataViewId
                        }), l && m({
                            variables: {
                                before: s ? .fundraiser ? .comments ? .pageInfo ? .endCursor,
                                last: 10,
                                slug: `${a}`
                            }
                        })
                    }
                    return r || !i ? .length ? {
                        comments: [],
                        showMore: !1,
                        getMoreComments: c
                    } : {
                        comments: i,
                        getMoreComments: c,
                        showMore: l,
                        totalComments: n
                    }
                }();
                return t.length ? (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(i.i, {}), (0, a.jsx)("div", {
                        className: "p-campaign-comments",
                        children: (0, a.jsx)(c.I, {
                            trackingId: "support",
                            children: (0, a.jsxs)(l._, {
                                buttonText: (0, u.t)("Show more"),
                                header: (0, u.t)("Words of support"),
                                headerId: "comments",
                                includeShowMoreButton: !0,
                                itemCount: o,
                                maxItems: 10,
                                onClick: e,
                                showCount: !0,
                                showMore: n,
                                children: [(0, a.jsx)("p", {
                                    className: v().subtitle,
                                    children: (0, u.t)("Please donate to share words of support.")
                                }), (0, a.jsx)("ul", {
                                    className: "hrt-list-unstyled",
                                    children: t.map((t, e) => (0, a.jsx)(m.G, {
                                        amount: t.donationAmountFormatted,
                                        as: "span",
                                        avatar: (0, a.jsx)(r.q, { ...t.author.profileImage ? {
                                                kind: "image",
                                                src: t.author.profileImage
                                            } : {
                                                kind: "donor"
                                            },
                                            className: "hrt-mr-2",
                                            size: "large"
                                        }),
                                        className: s()(v().commentsListItem, "hrt-break-word"),
                                        comment: t.text,
                                        "data-testid": "comment",
                                        timestampDisplay: t.timeAgo,
                                        title: t.author.fullName
                                    }, t.ugcId))
                                })]
                            })
                        })
                    })]
                }) : null
            }
        },
        923795: function(t) {
            t.exports = {
                commentsListItem: "comments_commentsListItem__Nsxrs",
                subtitle: "comments_subtitle__ptoXJ"
            }
        }
    }
]);
//# sourceMappingURL=63735.d1b0a3c228807330.js.map