"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [82630], {
        810418: function(e, t, n) {
            n.d(t, {
                p: function() {
                    return a
                }
            });
            var r = n(710743),
                i = n(600488),
                o = n(600628);
            let a = r.default.create({
                baseURL: i.config.environment.nativeGatewayDomain,
                timeout: 15e3,
                withCredentials: !0
            });
            a.interceptors.response.use(e => e, e => Promise.reject((0, o.te)(e)))
        },
        159133: function(e, t, n) {
            n(893269)
        },
        786425: function(e, t, n) {
            n.d(t, {
                U: function() {
                    return p
                },
                s: function() {
                    return P
                }
            });
            var r = n(552676),
                i = n(275271),
                o = n(712797);
            n(159133);
            var a = n(810418),
                u = n(250444);
            async function s(e) {
                let {
                    campaignUrl: t
                } = e;
                return a.p.get(`/feed/${t}/counts`).then(e => e.data)
            }

            function c() {
                return {
                    references: {
                        counts: {
                            total_photos: 0,
                            total_co_photos: 0,
                            total_community_photos: 0,
                            total_comments: 0,
                            total_updates: 0,
                            total_donations: 0,
                            total_unique_donors: 0,
                            amount_raised_unattributed: 0,
                            number_of_donations_unattributed: 0,
                            campaign_hearts: 0,
                            social_share_total: 0
                        }
                    },
                    meta: {
                        last_updated_at: ""
                    }
                }
            }(0, n(976937).QZ)({
                onRetry: function(e, t) {
                    (0, u.p)().recordCustomEvent({
                        eventName: "RetryingGetCountsRequest",
                        attributes: {
                            campaignRequestUrl: `/feed/${function(e){let[t]=e.split("?");return t.replace(/[^\wÀ-ÖØ-öø-ÿ\\/^()&?|#.%\-+$,=]/g,"")}(t.campaignUrl)}/counts`,
                            app: "campaign"
                        }
                    })
                },
                maxRequestAttempts: 2,
                ignoreRequestErrorAndFallback: c
            })(s);
            var A = n(893269),
                E = n(637469),
                d = n(422562);
            A.ni, A.Uw, o.A6.ACH, A.Fh, A.Uw, o.A6.CREDIT_CARD, A.ni, A.Uw, o.A6.PAYPAL_PAYFAST, A.ni, A.Uw, o.A6.VENMO_PAYFAST, A.ni, A.Uw, o.dx.TIP, o.PX.ACTIVE, o.E_.USD, o.fs.ADYEN, E.DDH.UNKNOWN, d.UtmFromKeys.POSTDONATE_MODAL, o.x6.Default, new Date().toISOString(), new Date().toISOString(), c().references.counts;
            let l = i.createContext(void 0);

            function p(e) {
                let t = { ... function(e) {
                        try {
                            return "string" == typeof e ? JSON.parse(e) : e
                        } catch (e) {
                            console.error(e)
                        }
                    }({
                        donorJourneyNewStateSerialized: e.initialStateSerialized ? ? "{}"
                    }.donorJourneyNewStateSerialized),
                    coorganizerRebrandExperiment: e.coorganizerRebrandExperiment,
                    donateCtaExperiment: e.donateCtaExperiment,
                    donateMonthlyCtaExperiment: e.donateMonthlyCtaExperiment,
                    earlyStateExperiment: e.earlyStateExperiment,
                    emptyStateExperiment: e.emptyStateExperiment,
                    goalBarsRedesignExperiment: e.goalBarsRedesignExperiment,
                    isGqlFundraiserDataEnabled: !!e.isGqlFundraiserDataEnabled,
                    localizedCurrencyExperiment: e.localizedCurrencyExperiment,
                    milestone1MobileExperiment: e.milestone1MobileExperiment,
                    milestoneDesktopExperiment: e.milestoneDesktopExperiment,
                    projectPinkExperiment: e.projectPinkExperiment,
                    recurringNudgeExperiment: e.recurringNudgeExperiment,
                    recurringIsDefaultExperiment: e.recurringIsDefaultExperiment,
                    visitorIpAddress: e.visitorIpAddress,
                    isPartnerWidget: e.isPartnerWidget ? ? !1,
                    additionalPaymentMethodsForPartner: e.additionalPaymentMethodsForPartner ? ? {}
                };
                return (0, r.jsx)(l.Provider, {
                    value: t,
                    children: e.children
                })
            }

            function P() {
                let e = i.useContext(l);
                if (!e) throw Error("useDonorJourneyContext must be used within a DonorJourneyContext Provider");
                return e
            }
            l.displayName = "DonorJourney"
        },
        982630: function(e, t, n) {
            n.d(t, {
                Uj: function() {
                    return r.U
                },
                sE: function() {
                    return r.s
                }
            });
            var r = n(786425);
            n(159133)
        },
        250444: function(e, t, n) {
            n.d(t, {
                p: function() {
                    return a
                }
            });
            var r = n(854259),
                i = n(600488),
                o = n(309770);

            function a() {
                return new u((0, o.j)())
            }
            class u {
                constructor(e) {
                    this.logger = e
                }
                noticeError(e) {
                    let {
                        attributes: t,
                        error: n,
                        expected: o = !1,
                        labels: a
                    } = e;
                    try {
                        i.config.environment.coralogix.isEnabled && r.vy.captureError(n instanceof Error ? n : Error(n), { ...t,
                            expected: o
                        }, a), window ? .newrelic ? .noticeError(n, t)
                    } catch (e) {
                        this.logger.error("Failed to notice error", {
                            cause: e,
                            originalError: n,
                            errorAttributes: t,
                            labels: a
                        })
                    }
                }
                recordCustomEvent(e) {
                    let {
                        attributes: t,
                        eventName: n
                    } = e;
                    t = t || {}, i.config.environment.coralogix.isEnabled && this.logger.info("An event occurred", {
                        payload: { ...t,
                            eventName: n
                        }
                    }), window ? .newrelic ? .addPageAction(n, t)
                }
            }
        },
        712797: function(e, t, n) {
            var r, i, o, a, u, s, c, A, E, d, l, p, P, m, D, f, _, C;
            n.d(t, {
                NK: function() {
                    return c
                },
                PX: function() {
                    return s
                },
                x6: function() {
                    return A
                },
                A6: function() {
                    return r
                },
                fs: function() {
                    return a
                },
                dx: function() {
                    return u
                },
                L2: function() {
                    return E
                },
                E_: function() {
                    return o
                },
                h6: function() {
                    return i
                }
            }), (d = r || (r = {})).ACH = "ACH", d.APPLE_PAY = "APPLE_PAY", d.BRAINTREE = "BRAINTREE", d.CHARIOT = "CHARIOT", d.GIVING_FUND = "GIVING_FUND", d.CREDIT_CARD = "CREDIT_CARD", d.GOOGLE_PAY = "GOOGLE_PAY", d.IDEAL = "IDEAL", d.KLARNA = "KLARNA", d.PAYPAL = "PAYPAL", d.PAYPAL_PAYFAST = "PAYPAL_PAYFAST", d.PLAID_ACH = "PLAID_ACH", d.SAVED_PAYMENT_METHOD = "SAVED_PAYMENT_METHOD", d.SOFORT = "SOFORT", d.VENMO_PAYFAST = "VENMO_PAYFAST", (l = i || (i = {})).CUSTOM = "custom", l.PERCENTAGE = "percentage", (p = o || (o = {})).AUD = "AUD", p.CAD = "CAD", p.CHF = "CHF", p.DKK = "DKK", p.EUR = "EUR", p.GBP = "GBP", p.MXN = "MXN", p.NOK = "NOK", p.SEK = "SEK", p.USD = "USD", (P = a || (a = {})).ADYEN = "adyen", P.BRAINTREE = "braintree", P.PPGF = "ppgf", P.STRIPE = "stripe", (m = u || (u = {})).TIP = "TIP", m.DCF = "DCF", m.PLATFORM = "PLATFORM", (D = s || (s = {})).ACTIVE = "ACTIVE", D.DISABLED = "DISABLED", (f = c || (c = {})).ERROR = "error", f.INFO = "information", f.SUCCESS = "success", (_ = A || (A = {})).Charity = "charity", _.Default = "f", _.GivingFund = "giving-funds", _.GiftCards = "gift-cards", (C = E || (E = {})).CREDIT_CARD = "CREDIT_CARD", C.PAYPAL_PAYFAST = "PAYPAL_PAYFAST", C.PLAID_ACH = "PLAID_ACH"
        }
    }
]);
//# sourceMappingURL=82630-65392e4d53ab895b.js.map