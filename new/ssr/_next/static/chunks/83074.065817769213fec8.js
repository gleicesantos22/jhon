(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [83074], {
        383074: function(n, o, t) {
            "use strict";
            t.r(o), t.d(o, {
                DonorList: function() {
                    return g
                }
            });
            var e = t(552676),
                r = t(275271),
                i = t(233619),
                s = t(45798),
                a = t(77655),
                c = t(103010),
                u = t(781776),
                l = t(835613),
                D = t(590839),
                d = t(457382),
                f = t(249738),
                p = t(317804),
                m = t(357235),
                I = t.n(m);

            function g(n) {
                let {
                    currentUserDonation: o
                } = n, t = (0, i.s)(), {
                    locale: m
                } = (0, s.bN)(), {
                    isTrending: g,
                    topSupporters: h
                } = (0, a.g)(), k = (0, r.useMemo)(() => {
                    let n = n => {
                            if (!n) return null;
                            let o = (0, l.I)([n], t, m);
                            return { ...o[0],
                                donor: { ...o[0].donor,
                                    profileImage: o[0].donor.profileImage || void 0
                                },
                                recurringDonation: o[0].recurringDonation || void 0,
                                offlineDonation: o[0].offlineDonation || !1
                            }
                        },
                        o = n(h ? .mostRecentDonor),
                        e = n(h ? .topDonor),
                        r = n(h ? .firstDonor);
                    return o && e && r ? {
                        mostRecentDonor: o,
                        topDonor: e,
                        firstDonor: r
                    } : null
                }, [h ? .mostRecentDonor, h ? .topDonor, h ? .firstDonor, t, m]), {
                    donations: x
                } = (0, u.b)(), [_, j] = (0, r.useState)(!1), {
                    isAnyModalOpen: b
                } = (0, c.o)(), L = b(), N = x.length > 4 && !_, v = h ? .recentDonations && (0, l.I)(h.recentDonations, t, m);
                return ((0, r.useEffect)(() => {
                    L && j(!0)
                }, [L]), g && k) ? N ? (0, e.jsx)(D.I, {
                    trackingId: "donations",
                    children: (0, e.jsx)(p.q, {
                        currentUserDonation: o,
                        recentDonations: v,
                        topSupporters: k
                    })
                }) : (0, e.jsx)(D.I, {
                    trackingId: "donations",
                    children: (0, e.jsx)(f.c, {
                        currentUserDonation: o,
                        topSupporters: k
                    })
                }) : (0, e.jsx)(D.I, {
                    trackingId: "donations",
                    children: (0, e.jsx)(d.b, {
                        className: I().animatedDonationList,
                        items: x.slice(0, 8),
                        shouldAnimateDonations: N
                    })
                })
            }
        },
        357235: function(n) {
            n.exports = {
                animatedDonationList: "donor-list_animatedDonationList__DVU6K"
            }
        }
    }
]);
//# sourceMappingURL=83074.065817769213fec8.js.map