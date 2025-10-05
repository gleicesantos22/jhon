(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [51823], {
        651823: function(e, n, a) {
            "use strict";
            a.r(n), a.d(n, {
                PartnerBanner: function() {
                    return l
                }
            });
            var r = a(552676),
                t = a(77655),
                i = a(363456),
                o = a(468290),
                s = a.n(o);

            function l() {
                let {
                    partner: e
                } = (0, t.g)();
                return e ? .name !== void 0 && e ? .allowCobranding ? (0, r.jsxs)("div", {
                    className: s().partnerBanner,
                    children: [e ? .logoUrl && (0, r.jsx)("img", {
                        alt: (0, i.t)("Logo for {{partnerName}}", {
                            partnerName: e.name,
                            interpolation: {
                                escapeValue: !1
                            }
                        }),
                        className: s().image,
                        "data-chromatic": "ignore",
                        src: e ? .logoUrl
                    }), (0, r.jsx)("p", {
                        className: s().text,
                        children: (0, i.t)("In association with {{partnerName}}", {
                            partnerName: e.name,
                            interpolation: {
                                escapeValue: !1
                            }
                        })
                    })]
                }) : null
            }
        },
        468290: function(e) {
            e.exports = {
                partnerBanner: "partner-banner_partnerBanner__MJ9Ax",
                image: "partner-banner_image__sdP11",
                text: "partner-banner_text__GKTD_"
            }
        }
    }
]);
//# sourceMappingURL=51823.8cfd67ed59851b36.js.map