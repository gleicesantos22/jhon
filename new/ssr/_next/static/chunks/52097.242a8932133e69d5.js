(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [52097], {
        852097: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                Updates: function() {
                    return f
                }
            });
            var a = s(552676),
                n = s(282187),
                d = s.n(n),
                u = s(534058),
                p = s(103010),
                l = s(520820),
                r = s(16552),
                c = s(391800),
                o = s(652751),
                i = s(907356),
                h = s(590839),
                _ = s(795523),
                m = s(363456),
                x = s(192651),
                j = s(968291),
                U = s.n(j);

            function f() {
                let {
                    updates: {
                        count: e
                    }
                } = (0, o.x)(), {
                    updates: t,
                    updatesHaveCompetitorText: s
                } = (0, u.j)(), n = (0, _.a)(_.z.LARGE_UP), j = (0, i.T)(), {
                    openModal: f
                } = (0, p.o)();
                return t && 0 !== t.length ? (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(r.i, {
                        className: d()({
                            "hrt-mt-0": n
                        })
                    }), (0, a.jsxs)(h.I, {
                        className: "p-campaign-updates",
                        trackingId: "updates",
                        children: [(0, a.jsx)("h2", {
                            id: "updates",
                            children: (0, m.t)("Updates ({{totalUpdates}})", {
                                totalUpdates: e
                            })
                        }), (0, a.jsx)(x.Y, {
                            update: t[0]
                        }), t.length > 1 && (0, a.jsx)(l.A, {
                            className: `${U().seeOlderUpdatesButton} hrt-text-body-sm`,
                            "data-element-id": "btn_update_show_more",
                            onClick: () => f("updates"),
                            children: (0, m.t)("See older updates")
                        }), s && !j && (0, a.jsx)(c.m, {})]
                    })]
                }) : null
            }
        },
        968291: function(e) {
            e.exports = {
                seeOlderUpdatesButton: "updates_seeOlderUpdatesButton__avYPp"
            }
        }
    }
]);
//# sourceMappingURL=52097.242a8932133e69d5.js.map