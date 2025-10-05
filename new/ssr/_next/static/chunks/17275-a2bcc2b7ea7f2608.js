(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [17275], {
        634284: function(e, r, t) {
            "use strict";
            t.d(r, {
                J: function() {
                    return n.J
                }
            });
            var n = t(287808)
        },
        558085: function(e, r, t) {
            "use strict";
            t.d(r, {
                J: function() {
                    return n.J
                },
                V: function() {
                    return a.V
                }
            });
            var n = t(287808),
                a = t(164703)
        },
        546782: function(e, r, t) {
            "use strict";
            t.d(r, {
                h: function() {
                    return l
                }
            });
            var n = t(552676);
            t(275271);
            var a = t(282187),
                s = t.n(a),
                o = t(936956),
                u = t(954589),
                i = t(312802),
                d = t(363456);

            function l(e) {
                let {
                    children: r,
                    className: t,
                    cta: a,
                    onClose: l,
                    onReset: c = () => window.location.reload()
                } = e;
                return (0, n.jsx)(u.W, {
                    className: s()(t, "hrt-mb-2"),
                    children: (0, n.jsx)(o.b, {
                        closeButtonLabel: (0, d.t)("Close alert"),
                        isOpen: !0,
                        onClose: l,
                        overlayContent: !1,
                        title: (0, n.jsxs)("p", {
                            className: "hrt-mb-0",
                            children: [r || (0, d.t)("We’re sorry. Something went wrong."), (0, n.jsx)(n.Fragment, {
                                children: " "
                            }), a || (0, n.jsx)(i.A, {
                                onClick: c,
                                children: (0, d.t)("Please try again.")
                            })]
                        }),
                        variant: "negative"
                    })
                })
            }
        },
        667385: function(e, r, t) {
            "use strict";
            t.d(r, {
                S: function() {
                    return i
                }
            });
            var n = t(552676);
            t(275271);
            var a = t(36130),
                s = t(546782),
                o = t(943214);
            let u = e => {
                let {
                    resetErrorBoundary: r
                } = e;
                return (0, n.jsx)(s.h, {
                    onReset: r
                })
            };
            var i = function(e) {
                let {
                    children: r,
                    type: t = "alert",
                    onReset: s = () => window.location.reload(),
                    onError: i
                } = e, d = (0, o.q)();
                return (0, n.jsx)(a.ErrorBoundary, {
                    FallbackComponent: {
                        alert: u,
                        suppress: () => null
                    }[t],
                    onError: function(e) {
                        d.noticeError({
                            error: e
                        }), i ? .(e)
                    },
                    onReset: s,
                    children: r
                })
            }
        },
        226398: function(e, r, t) {
            "use strict";
            t.d(r, {
                xe: function() {
                    return c
                },
                n3: function() {
                    return f
                }
            });
            var n = t(275271),
                a = t(454412),
                s = t(637469),
                o = t(702253);
            let u = (0, t(805662).cn)(void 0);

            function i(e) {
                let {
                    id: r,
                    rank: t,
                    fundraiserEdge: n
                } = e, a = n ? .organizer;
                if (n && a) return {
                    id: `${r}`,
                    rank: t,
                    firstName: a.firstName,
                    userFullName: `${a.firstName} ${a.lastName}`,
                    entityName: n.title,
                    amountRaised: n.currentAmount.amount,
                    currencyCode: n.currentAmount.currencyCode,
                    imageUrl: a.profileUrl,
                    donorCount: n.uniqueDonorCount || 0,
                    slug: n.slug
                }
            }

            function d(e) {
                return e ? .fundraiserByFundId ? .collection ? .fundraisersPaginated ? .edges ? .length ? {
                    size: e ? .fundraiserByFundId ? .collection.size || 0,
                    entries: e.fundraiserByFundId.collection.fundraisersPaginated.edges.map((e, r) => i({
                        id: e ? .node ? .id,
                        rank: r + 1,
                        fundraiserEdge: e ? .node ? .fundraiser
                    })).filter(Boolean)
                } : {
                    size: 0,
                    entries: []
                }
            }

            function l(e) {
                return e ? .fundraiserByFundId ? .collection ? .fundraiserRank ? .length ? {
                    size: e ? .fundraiserByFundId ? .collection ? .fundraiserRank ? .length || 0,
                    entries: e ? .fundraiserByFundId ? .collection ? .fundraiserRank.map((e, r) => i({
                        id: e ? .fundraiser ? .id,
                        rank: e ? .rank || r + 1,
                        fundraiserEdge: e ? .fundraiser
                    })).filter(Boolean)
                } : {
                    size: 0,
                    entries: []
                }
            }

            function c(e) {
                let {
                    fundId: r,
                    order: t,
                    skip: i,
                    options: c = {
                        fetchPolicy: "no-cache",
                        context: {
                            retryPolicy: {
                                shouldRetry: !0,
                                maxAttempts: 2,
                                shouldLogError: !0
                            }
                        }
                    }
                } = e, [f, g, h] = (0, o.k)(), [b, m, k] = (0, o.k)(), p = t ? ? s.Liq.AMOUNT, {
                    data: F,
                    error: C,
                    fetchMore: v,
                    loading: x,
                    previousData: B
                } = (0, s.B7w)({
                    notifyOnNetworkStatusChange: !0,
                    variables: {
                        fundId: r,
                        last: 10,
                        order: p,
                        rankDirection: s.SrV.DESC,
                        rankOrder: s.bDQ.AMOUNT,
                        rankWindowSize: 1
                    },
                    ssr: !1,
                    fetchPolicy: c.fetchPolicy,
                    context: c.context,
                    skip: i || !r
                }), [w, y] = (0, a.KO)(u);
                if ((0, n.useEffect)(() => {
                        if (F && (void 0 === w || w.currentFundId !== r)) {
                            let e = d(F) ? ? [],
                                t = e.entries ? .find(e => 10 === e.rank);
                            y({ ...l(F),
                                currentFundId: r,
                                tenthFundraiser: t
                            })
                        }
                    }, [F, w]), !F ? .fundraiserByFundId ? .collection ? .fundraisersPaginated ? .edges ? .length) return {
                    data: {
                        size: 0,
                        entries: []
                    },
                    error: C,
                    loading: x,
                    previousData: B
                };
                let I = F.fundraiserByFundId.collection.fundraisersPaginated.pageInfo,
                    N = async () => {
                        if (!b && !f && I ? .hasPreviousPage) {
                            m(), h();
                            try {
                                await v({
                                    variables: {
                                        fundId: r,
                                        last: 10,
                                        order: p,
                                        before: I.endCursor,
                                        rankDirection: s.SrV.DESC,
                                        rankOrder: s.bDQ.AMOUNT,
                                        rankWindowSize: 1
                                    },
                                    updateQuery: (e, r) => {
                                        let {
                                            fetchMoreResult: t
                                        } = r, n = e.fundraiserByFundId, a = t ? .fundraiserByFundId;
                                        if (!n ? .collection || !a ? .collection ? .fundraisersPaginated) return e;
                                        let s = n.collection.fundraisersPaginated,
                                            o = a.collection.fundraisersPaginated,
                                            u = s.edges || [],
                                            i = (o.edges || []).map(e => e ? .node ? .rank ? { ...e,
                                                node: { ...e.node,
                                                    rank: e.node.rank + u.length + 1
                                                }
                                            } : e);
                                        return { ...e,
                                            fundraiserByFundId: { ...n,
                                                id: n.id,
                                                collection: { ...n.collection,
                                                    fundraisersPaginated: { ...s,
                                                        edges: [...u, ...i],
                                                        pageInfo: o.pageInfo
                                                    }
                                                }
                                            }
                                        }
                                    }
                                })
                            } catch (e) {
                                g()
                            } finally {
                                k()
                            }
                        }
                    };
                return {
                    data: d(F) ? ? [],
                    currentFundraiserSurrounding: l(F) ? ? [],
                    error: C,
                    fetchMoreLeaderboardData: N,
                    hasFetchedAllData: !I.hasPreviousPage,
                    hasFetchMoreError: f,
                    loading: x,
                    previousData: B
                }
            }

            function f() {
                let [e] = (0, a.KO)(u);
                return {
                    data: e
                }
            }
        },
        300938: function(e, r, t) {
            "use strict";
            t.d(r, {
                $: function() {
                    return i
                },
                N: function() {
                    return o
                }
            });
            var n = t(552676),
                a = t(275271),
                s = t(898902);
            let o = (0, a.createContext)(s.n.DEFAULT),
                u = e => e && s.n[e] || s.n.DEFAULT,
                i = e => {
                    let {
                        children: r,
                        themeStr: t
                    } = e;
                    return (0, n.jsx)(o.Provider, {
                        value: u(t),
                        children: r
                    })
                }
        },
        295731: function(e, r, t) {
            "use strict";
            t.d(r, {
                z: function() {
                    return s
                }
            });
            var n = t(275271),
                a = t(300938);
            let s = () => (0, n.useContext)(a.N)
        },
        898902: function(e, r, t) {
            "use strict";
            t.d(r, {
                n: function() {
                    return E
                }
            });
            var n = t(552676),
                a = t(282187),
                s = t.n(a),
                o = t(236280),
                u = t.n(o);
            let i = e => {
                    let {
                        src: r,
                        alt: t
                    } = e;
                    return (0, n.jsx)("img", {
                        alt: t,
                        className: s()("hrt-disp-inline-flex", u().badge),
                        src: r
                    })
                },
                d = () => (0, n.jsx)(i, {
                    alt: "1st",
                    src: "/nextassets/shared/leaderboard/themes/breast-cancer-awareness/desktop/first-place-badge.svg"
                }),
                l = () => (0, n.jsx)(i, {
                    alt: "2nd",
                    src: "/nextassets/shared/leaderboard/themes/breast-cancer-awareness/desktop/second-place-badge.svg"
                }),
                c = () => (0, n.jsx)(i, {
                    alt: "3rd",
                    src: "/nextassets/shared/leaderboard/themes/breast-cancer-awareness/desktop/third-place-badge.svg"
                }),
                f = () => (0, n.jsx)(i, {
                    alt: "1st",
                    src: "/nextassets/shared/leaderboard/themes/breast-cancer-awareness/mobile/first-place-badge.svg"
                }),
                g = () => (0, n.jsx)(i, {
                    alt: "2nd",
                    src: "/nextassets/shared/leaderboard/themes/breast-cancer-awareness/mobile/second-place-badge.svg"
                }),
                h = () => (0, n.jsx)(i, {
                    alt: "3rd",
                    src: "/nextassets/shared/leaderboard/themes/breast-cancer-awareness/mobile/third-place-badge.svg"
                }),
                b = e => {
                    switch (e) {
                        case 1:
                            return (0, n.jsx)(d, {});
                        case 2:
                            return (0, n.jsx)(l, {});
                        case 3:
                            return (0, n.jsx)(c, {});
                        default:
                            return null
                    }
                },
                m = e => {
                    switch (e) {
                        case 1:
                            return (0, n.jsx)(f, {});
                        case 2:
                            return (0, n.jsx)(g, {});
                        case 3:
                            return (0, n.jsx)(h, {});
                        default:
                            return null
                    }
                };

            function k(e) {
                switch (e) {
                    case 1:
                    case 2:
                    case 3:
                        return "hrt-surface-accent-pink-subtle";
                    default:
                        return
                }
            }

            function p(e) {
                switch (e) {
                    case 1:
                    case 2:
                    case 3:
                        return "hrt-surface-accent-pink-subtle";
                    default:
                        return
                }
            }
            var F = t(44053),
                C = t.n(F);
            let v = e => {
                    let {
                        src: r,
                        alt: t
                    } = e;
                    return (0, n.jsx)("img", {
                        alt: t,
                        className: s()("hrt-disp-inline-flex", C().badge),
                        src: r
                    })
                },
                x = () => (0, n.jsx)(v, {
                    alt: "1st",
                    src: "/nextassets/shared/leaderboard/desktop/first-place-badge.svg"
                }),
                B = () => (0, n.jsx)(v, {
                    alt: "2nd",
                    src: "/nextassets/shared/leaderboard/desktop/second-place-badge.svg"
                }),
                w = () => (0, n.jsx)(v, {
                    alt: "3rd",
                    src: "/nextassets/shared/leaderboard/desktop/third-place-badge.svg"
                }),
                y = () => (0, n.jsx)(v, {
                    alt: "1st",
                    src: "/nextassets/shared/leaderboard/mobile/first-place-badge.svg"
                }),
                I = () => (0, n.jsx)(v, {
                    alt: "2nd",
                    src: "/nextassets/shared/leaderboard/mobile/second-place-badge.svg"
                }),
                N = () => (0, n.jsx)(v, {
                    alt: "3rd",
                    src: "/nextassets/shared/leaderboard/mobile/third-place-badge.svg"
                }),
                R = e => {
                    switch (e) {
                        case 1:
                            return (0, n.jsx)(x, {});
                        case 2:
                            return (0, n.jsx)(B, {});
                        case 3:
                            return (0, n.jsx)(w, {});
                        default:
                            return null
                    }
                },
                j = e => {
                    switch (e) {
                        case 1:
                            return (0, n.jsx)(y, {});
                        case 2:
                            return (0, n.jsx)(I, {});
                        case 3:
                            return (0, n.jsx)(N, {});
                        default:
                            return null
                    }
                };

            function L(e) {
                switch (e) {
                    case 1:
                        return "hrt-surface-positive-subtle";
                    case 2:
                        return "hrt-surface-informative-subtle";
                    case 3:
                        return "hrt-surface-tip-subtle";
                    default:
                        return
                }
            }

            function D(e) {
                switch (e) {
                    case 1:
                        return "hrt-surface-positive-subtle";
                    case 2:
                        return "hrt-surface-informative-subtle";
                    case 3:
                        return "hrt-surface-tip-subtle";
                    default:
                        return
                }
            }
            let E = {
                DEFAULT: {
                    name: "Default GoFundMe",
                    iframe: {
                        containerClasses: ""
                    },
                    globalConfig: {
                        isEmbedded: !1
                    },
                    leaderboard: {
                        getIsCurrentFundraiserColor: function(e, r) {
                            if (r) return "neutral";
                            switch (e) {
                                case 1:
                                    return "positive";
                                case 2:
                                    return "informative";
                                case 3:
                                    return "tip";
                                default:
                                    return "neutral"
                            }
                        },
                        noImageAvatar: {
                            containerClasses: "hrt-surface-neutral-subtle"
                        },
                        leaderboardMain: {
                            container: "",
                            heading: ""
                        },
                        mobile: {
                            getBadgeForRankMobile: j,
                            getClassesByRankForMobileListItem: function(e, r) {
                                switch (!0) {
                                    case 1 === e:
                                        return "hrt-surface-positive-subtle";
                                    case 2 === e:
                                        return "hrt-surface-informative-subtle";
                                    case 3 === e:
                                        return "hrt-surface-tip-subtle";
                                    default:
                                        return "hrt-surface-neutral-subtle"
                                }
                            },
                            getListItemRankBelowTopBackground: function(e) {
                                return e ? "hrt-surface-neutral-medium" : ""
                            }
                        },
                        desktop: {
                            getBadgeForRankDesktop: R,
                            getClassesByRankForTopFundraiserCard: L,
                            topFundraiserCard: {
                                userFullNameClasses: "hrt-font-bold",
                                entityNameClasses: "",
                                getClassesByRank: L,
                                amountRaised: "hrt-font-bold hrt-mt-1"
                            },
                            listItem: {
                                getListItemBackgroundForDesktopForCurrentFundraiser: function(e) {
                                    return e < 4 ? "" : "hrt-surface-neutral-subtle"
                                }
                            }
                        },
                        config: {
                            showRosterSeeAll: !0,
                            allowFundraiserNavigation: !0,
                            showThisFundraiserTag: !0
                        }
                    },
                    nudges: {
                        themeFolder: "default",
                        getLeaderboardNudgeStyles: {
                            backgroundColor: "var(--hrt-color-surface-brand-subtle)",
                            color: "var(--hrt-color-border-neutral-strong)"
                        },
                        getLeaderboardNudgeLink: {
                            color: "var(--hrt-color-border-neutral-strong)"
                        }
                    }
                },
                BCA: {
                    name: "Breast Cancer Awareness",
                    iframe: {
                        containerClasses: ""
                    },
                    globalConfig: {
                        isEmbedded: !1
                    },
                    leaderboard: {
                        getIsCurrentFundraiserColor: function(e, r) {
                            return "accent-pink"
                        },
                        noImageAvatar: {
                            containerClasses: "hrt-surface-accent-pink-medium"
                        },
                        mobile: {
                            getBadgeForRankMobile: m,
                            getClassesByRankForMobileListItem: function(e, r) {
                                return r ? "hrt-surface-accent-pink-strong" : ""
                            },
                            getListItemRankBelowTopBackground: function(e) {
                                return e ? "hrt-surface-neutral-subtle" : ""
                            }
                        },
                        desktop: {
                            getBadgeForRankDesktop: b,
                            getClassesByRankForTopFundraiserCard: p,
                            topFundraiserCard: {
                                userFullNameClasses: "hrt-font-bold hrt-text-accent-pink-strong-on-medium",
                                entityNameClasses: "hrt-text-accent-pink-strong-on-medium",
                                getClassesByRank: p,
                                amountRaised: "hrt-font-bold hrt-mt-1 hrt-text-accent-pink-strong-on-medium"
                            },
                            listItem: {
                                getListItemBackgroundForDesktopForCurrentFundraiser: function(e) {
                                    return ""
                                }
                            }
                        },
                        leaderboardMain: {
                            container: "hrt-m-auto",
                            heading: "hrt-text-center"
                        },
                        config: {
                            showRosterSeeAll: !1,
                            allowFundraiserNavigation: !1,
                            showThisFundraiserTag: !1
                        }
                    },
                    nudges: {
                        themeFolder: "breast-cancer-awareness",
                        getLeaderboardNudgeStyles: {
                            backgroundColor: "var(--hrt-color-surface-accent-pink-subtle)",
                            color: "var(--hrt-color-text-accent-pink-strong-on-medium)"
                        },
                        getLeaderboardNudgeLink: {
                            color: "var(--hrt-color-text-accent-pink-strong-on-medium)"
                        }
                    }
                },
                EMBED: {
                    name: "embedded",
                    iframe: {
                        containerClasses: "hrt-pt-6"
                    },
                    globalConfig: {
                        isEmbedded: !0
                    },
                    leaderboard: {
                        getIsCurrentFundraiserColor: function(e, r) {
                            if (r) return "neutral";
                            switch (e) {
                                case 1:
                                    return "positive";
                                case 2:
                                    return "informative";
                                case 3:
                                    return "tip";
                                default:
                                    return "neutral"
                            }
                        },
                        noImageAvatar: {
                            containerClasses: "hrt-surface-neutral-subtle"
                        },
                        leaderboardMain: {
                            container: "",
                            heading: ""
                        },
                        mobile: {
                            getBadgeForRankMobile: j,
                            getClassesByRankForMobileListItem: function(e, r) {
                                switch (!0) {
                                    case 1 === e:
                                        return "hrt-surface-positive-subtle";
                                    case 2 === e:
                                        return "hrt-surface-informative-subtle";
                                    case 3 === e:
                                        return "hrt-surface-tip-subtle";
                                    default:
                                        return "hrt-surface-neutral-subtle"
                                }
                            },
                            getListItemRankBelowTopBackground: function(e) {
                                return e ? "hrt-surface-neutral-medium" : ""
                            }
                        },
                        desktop: {
                            getBadgeForRankDesktop: R,
                            getClassesByRankForTopFundraiserCard: D,
                            topFundraiserCard: {
                                userFullNameClasses: "hrt-font-bold",
                                entityNameClasses: "",
                                getClassesByRank: D,
                                amountRaised: "hrt-font-bold hrt-mt-1"
                            },
                            listItem: {
                                getListItemBackgroundForDesktopForCurrentFundraiser: function(e) {
                                    return e < 4 ? "" : "hrt-surface-neutral-subtle"
                                }
                            }
                        },
                        config: {
                            showRosterSeeAll: !1,
                            allowFundraiserNavigation: !1,
                            showThisFundraiserTag: !1
                        }
                    },
                    nudges: {
                        themeFolder: "default",
                        getLeaderboardNudgeStyles: {
                            backgroundColor: "var(--hrt-color-surface-brand-subtle)",
                            color: "var(--hrt-color-border-neutral-strong)"
                        },
                        getLeaderboardNudgeLink: {
                            color: "var(--hrt-color-border-neutral-strong)"
                        }
                    }
                },
                BCA_FUNDRAISER: {
                    name: "Breast Cancer Awareness Fundraiser Theme",
                    iframe: {
                        containerClasses: ""
                    },
                    globalConfig: {
                        isEmbedded: !1
                    },
                    leaderboard: {
                        getIsCurrentFundraiserColor: function(e, r) {
                            return "accent-pink"
                        },
                        noImageAvatar: {
                            containerClasses: "hrt-surface-accent-pink-medium"
                        },
                        mobile: {
                            getBadgeForRankMobile: m,
                            getClassesByRankForMobileListItem: function(e, r) {
                                return r ? "hrt-surface-accent-pink-strong" : ""
                            },
                            getListItemRankBelowTopBackground: function(e) {
                                return e ? "hrt-surface-neutral-subtle" : ""
                            }
                        },
                        desktop: {
                            getBadgeForRankDesktop: b,
                            getClassesByRankForTopFundraiserCard: k,
                            topFundraiserCard: {
                                userFullNameClasses: "hrt-font-bold hrt-text-accent-pink-strong-on-medium",
                                entityNameClasses: "hrt-text-accent-pink-strong-on-medium",
                                getClassesByRank: k,
                                amountRaised: "hrt-font-bold hrt-mt-1 hrt-text-accent-pink-strong-on-medium"
                            },
                            listItem: {
                                getListItemBackgroundForDesktopForCurrentFundraiser: function(e) {
                                    return ""
                                }
                            }
                        },
                        leaderboardMain: {
                            container: "hrt-m-auto",
                            heading: "hrt-text-center"
                        },
                        config: {
                            showRosterSeeAll: !0,
                            allowFundraiserNavigation: !0,
                            showThisFundraiserTag: !0
                        }
                    },
                    nudges: {
                        themeFolder: "breast-cancer-awareness",
                        getLeaderboardNudgeStyles: {
                            backgroundColor: "var(--hrt-color-surface-accent-pink-subtle)",
                            color: "var(--hrt-color-text-accent-pink-strong-on-medium)"
                        },
                        getLeaderboardNudgeLink: {
                            color: "var(--hrt-color-text-accent-pink-strong-on-medium)"
                        }
                    }
                },
                HIDDEN: {
                    name: "HIDDEN THEME"
                }
            }
        },
        702253: function(e, r, t) {
            "use strict";
            t.d(r, {
                k: function() {
                    return a
                }
            });
            var n = t(275271);

            function a() {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    [r, t] = (0, n.useState)(e);
                return [r, (0, n.useCallback)(() => {
                    t(!0)
                }, []), (0, n.useCallback)(() => {
                    t(!1)
                }, []), (0, n.useCallback)(() => {
                    t(e => !e)
                }, [])]
            }
        },
        943214: function(e, r, t) {
            "use strict";
            t.d(r, {
                q: function() {
                    return s
                }
            });
            var n = t(275271),
                a = t(933587);

            function s() {
                return (0, n.useMemo)(() => (0, a.p)(), [])
            }
        },
        236280: function(e) {
            e.exports = {
                badge: "badges_badge__98R7N"
            }
        },
        44053: function(e) {
            e.exports = {
                badge: "badges_badge___aBmu"
            }
        }
    }
]);
//# sourceMappingURL=17275-a2bcc2b7ea7f2608.js.map