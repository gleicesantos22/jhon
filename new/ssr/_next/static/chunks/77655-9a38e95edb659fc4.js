"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [77655], {
        77655: function(n, t, e) {
            e.d(t, {
                g: function() {
                    return p
                }
            });
            var r = e(920647),
                a = e(982630),
                i = e(700953),
                o = e(906468),
                u = e(637469),
                s = e(136883),
                d = e(893269),
                c = e(136578);

            function l(n) {
                let {
                    charity: t,
                    deactivated: e,
                    status: r,
                    donationsEnabled: a
                } = n;
                return (t ? .paypalActivationStatus === c.xy.DELETED || t ? .paypalActivationStatus === c.xy.INACTIVE) && t ? .id !== "130054" ? d.c4.CLOSED : e ? d.c4.DEACTIVATED : r !== u.qbd.ACTIVE || a ? r === u.qbd.ACTIVE ? d.c4.ACTIVE : r === u.qbd.REVIEW ? d.c4.IN_REVIEW : d.c4.DELETED : d.c4.CLOSED
            }
            var f = e(712797),
                E = e(191665),
                m = e(497914),
                A = e(467556);

            function p() {
                var n;
                let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    {
                        query: e
                    } = (0, r.useRouter)(),
                    {
                        campaignUrl: p,
                        charitySlug: C
                    } = e,
                    T = (0, a.sE)(),
                    I = T.checkoutEntity ? .type === f.x6.GivingFund,
                    D = I ? T.checkoutEntity ? .slug : `${p}`,
                    M = !!C || !I && !p || I && !T.checkoutEntity ? .slug,
                    {
                        data: S,
                        loading: g,
                        error: y
                    } = (0, u.GRk)({
                        variables: {
                            slug: D,
                            includeWhyToDonateField: !I && t
                        },
                        skip: M
                    }),
                    G = function(n) {
                        let {
                            charitySlug: t,
                            skip: e
                        } = n, {
                            data: r,
                            loading: a,
                            error: i
                        } = (0, u.UB6)({
                            variables: {
                                slug: t
                            },
                            skip: e
                        });
                        if (e) return;
                        let s = function(n) {
                                let t = n ? .charityAggregates ? .totalDonated ? .[0] ? .amount ? ? 0,
                                    e = n ? .charityAggregates ? .totalDonations ? ? 0,
                                    r = n ? .status === u.edO.ACTIVE,
                                    a = n ? .country ? ? m.n.US;
                                return {
                                    beneficiary: null,
                                    business: null,
                                    campaign_photo: {
                                        url: n ? .logo ? .url ? ? ""
                                    },
                                    categoryId: n ? .fundraiserCategory ? E.cr[n.fundraiserCategory] ? ? 0 : 0,
                                    charity: {
                                        city: n ? .city ? ? "",
                                        country: n ? .country,
                                        ein: n ? .ein || "",
                                        id: n ? .id || "",
                                        logo: {
                                            url: n ? .logo ? .url ? ? "",
                                            scaled: {
                                                oneByOne120: n ? .logo ? .scaled ? .oneByOne120 ? ? "",
                                                threeByTwo120: n ? .logo ? .scaled ? .threeByTwo120 ? ? ""
                                            }
                                        },
                                        logoUrl: n ? .logo ? .url ? ? "",
                                        name: n ? .name ? ? "",
                                        npoId: n ? .npoId ? ? null,
                                        paypalActivationStatus: n ? .paypalActivationStatus ? ? c.xy.INACTIVE,
                                        paypalEnrollmentStatus: n ? .paypalEnrollmentStatus ? ? c.hE.UNENROLLED,
                                        slug: n ? .slug,
                                        state: n ? .state ? ? "",
                                        status: n ? .status
                                    },
                                    charityOrganizedd: !0,
                                    commentsEnabled: !1,
                                    createdAt: null,
                                    currentAmount: {
                                        amount: t,
                                        currencyCode: (0, A.tK)(a)
                                    },
                                    deactivated: !r,
                                    defaultSlug: n ? .slug ? ? "",
                                    description: n ? .description ? ? "",
                                    descriptionExcerpt: n ? .description ? ? "",
                                    donationCount: e,
                                    donationsEnabled: r,
                                    enableContact: !0,
                                    fundId: n ? .defaultFundId || "",
                                    goalAmount: {
                                        amount: 0,
                                        currencyCode: (0, A.tK)(a)
                                    },
                                    goalLog: [],
                                    hasGfmOrgDonation: null,
                                    id: n ? .id,
                                    instagramDeepLink: "",
                                    isGfmDotOrgFund: !1,
                                    isLinkedWithMeta: !1,
                                    location: {
                                        city: n ? .city ? ? "",
                                        countryCode: n ? .country ? ? "",
                                        postalCode: n ? .zipCode ? ? "",
                                        statePrefix: n ? .state ? ? ""
                                    },
                                    mediaId: "",
                                    mediaType: u.DDH.UNKNOWN,
                                    organizer: {
                                        firstName: "",
                                        id: "",
                                        lastName: "",
                                        profileUrl: ""
                                    },
                                    paymentProcessor: f.fs.PPGF,
                                    projectType: u.cdz.DIRECT_TO_CHARITY,
                                    smartGoalsOptIn: !1,
                                    state: n ? .state ? .toLowerCase() ? ? "",
                                    status: n ? .status,
                                    title: n ? .name ? ? "",
                                    turnOffDonations: r ? 0 : 1,
                                    url: n ? .slug ? ? "",
                                    verifiedAt: (0, o.i$)(n ? .verifiedAt),
                                    visibleInSearch: n ? .isSeoIndexable ? ? !1
                                }
                            }(r ? .charity),
                            d = l({
                                charity: r ? .charity,
                                status: s ? .status,
                                deactivated: s ? .deactivated,
                                donationsEnabled: s ? .donationsEnabled
                            });
                        return { ...s,
                            amountRaised: s ? .currentAmount.amount,
                            asset: {
                                asset_key: "",
                                fund_id: 0,
                                playbacks: [],
                                title: "",
                                tracks: [],
                                type: "",
                                status: c.l5.READY
                            },
                            beneficiary: {
                                id: null,
                                userId: null,
                                personId: null,
                                firstName: null,
                                lastName: null,
                                profileUrl: "",
                                facebookName: null
                            },
                            error: i,
                            fundraiserStatus: d,
                            isTeamEnabled: !1,
                            isTrending: !1,
                            loading: a,
                            paymentProcessor: s ? .paymentProcessor
                        }
                    }({
                        charitySlug: C,
                        skip: !!p || !C
                    });
                if (G && C) return G;
                let N = (0, i.p)(S ? .fundraiser ? .topDonations ? .edges),
                    L = (0, i.p)(S ? .fundraiser ? .donations ? .edges),
                    R = {
                        mostRecentDonor: S ? .fundraiser ? .mostRecentDonor ? .edges ? .[0] ? .node,
                        topDonor: S ? .fundraiser ? .topDonor ? .edges ? .[0] ? .node,
                        firstDonor: S ? .fundraiser ? .firstDonor ? .edges ? .[0] ? .node
                    },
                    h = (0, o.cr)(S ? .fundraiser),
                    O = l({
                        charity: S ? .fundraiser ? .charity,
                        status: S ? .fundraiser ? .status,
                        deactivated: !!S ? .fundraiser ? .deactivated,
                        donationsEnabled: !!S ? .fundraiser ? .donationsEnabled
                    }),
                    P = !!S ? .fundraiser ? .team && S ? .fundraiser ? .team ? .status === u.vfJ.ACTIVE,
                    B = (0, o.lR)(R, L),
                    U = S ? .fundraiser ? .whyToDonate ? ? "";
                return {
                    asset: (n = S ? .fundraiser ? .assets, n ? .find(n => n.status === u.l5A.READY && !!n ? .playbacks ? .[0] ? .playbackId) || (n && n.length ? n[n.length - 1] : null)),
                    autoFbPostMode: S ? .fundraiser ? .autoFbPostMode,
                    beneficiary: S ? .fundraiser ? .beneficiary,
                    campaign: S ? .fundraiser ? .campaign,
                    categoryId: S ? .fundraiser ? .categoryId || "",
                    charity: S ? .fundraiser ? .charity,
                    charityOrganized: S ? .fundraiser ? .charityOrganized,
                    commentsEnabled: !!S ? .fundraiser ? .commentsEnabled,
                    createdAt: (0, o.i$)(S ? .fundraiser ? .createdAt),
                    currentAmount: S ? .fundraiser ? .currentAmount ? S ? .fundraiser ? .currentAmount : {
                        amount: 0,
                        currencyCode: u.NEm.USD
                    },
                    defaultSlug: S ? .fundraiser ? .defaultSlug ? ? "",
                    description: S ? .fundraiser ? .description ? ? "",
                    donationCount: S ? .fundraiser ? .donationCount || 0,
                    donations: L,
                    donationsEnabled: !!S ? .fundraiser ? .donationsEnabled,
                    donationsEndCursor: S ? .fundraiser ? .donations ? .pageInfo ? .endCursor,
                    enableContact: !!S ? .fundraiser ? .enableContact,
                    error: y,
                    fundId: S ? .fundraiser ? .fundId || "",
                    fundraiserImageUrl: S ? .fundraiser ? .fundraiserImageUrl ? ? "",
                    fundraiserPhoto: S ? .fundraiser ? .fundraiserPhoto,
                    fundraiserStatus: O,
                    fundUrl: S ? .fundraiser ? .fundUrl ? ? "",
                    goalAmount: S ? .fundraiser ? .goalAmount,
                    goalLog: S ? .fundraiser ? .goalLog,
                    hasGfmOrgDonation: !!S ? .fundraiser ? .hasGfmOrgDonation,
                    instagramDeepLink: S ? .fundraiser ? .instagramDeepLink ? ? "",
                    isGfmDotOrgFund: !!S ? .fundraiser ? .isGfmDotOrgFund,
                    isLinkedWithMeta: !!S ? .fundraiser ? .isLinkedWithMeta,
                    isTeam: P,
                    isTeamEnabled: P && S ? .fundraiser ? .team ? .status !== u.vfJ.DELETED,
                    isTrending: function(n) {
                        let {
                            donations: t,
                            fundraiserStatus: e
                        } = n;
                        return e === d.c4.ACTIVE && t.filter(n => 72 >= (0, s.Z)(new Date, new Date(n.createdAt))).length >= 10
                    }({
                        donations: L,
                        fundraiserStatus: O
                    }),
                    loading: g,
                    location: {
                        city: S ? .fundraiser ? .location ? .city ? ? "",
                        countryCode: S ? .fundraiser ? .location ? .countryCode ? ? "",
                        postalCode: S ? .fundraiser ? .location ? .postalCode ? ? "",
                        statePrefix: S ? .fundraiser ? .location ? .statePrefix ? ? ""
                    },
                    mediaId: S ? .fundraiser ? .mediaId ? ? "",
                    median: S ? .fundraiser ? .suggestedDonationStats.medianDonationAmount.amount || 0,
                    mediaType: S ? .fundraiser ? .mediaType,
                    organizer: S ? .fundraiser ? .organizer,
                    partner: S ? .fundraiser ? .partner,
                    paymentProcessor: h,
                    projectType: S ? .fundraiser ? .projectType,
                    publishedAt: (0, o.i$)(S ? .fundraiser ? .publishedAt),
                    photoCropPoints: S ? .fundraiser ? .photoCropPoints,
                    serviceDate: S ? .fundraiser ? .serviceDate,
                    smartGoalsOptIn: S ? .fundraiser ? .smartGoalsOptIn,
                    status: S ? .fundraiser ? .status,
                    team: S ? .fundraiser ? .team,
                    teamMembers: S ? .fundraiser ? .teamMembers || [],
                    title: S ? .fundraiser ? .title ? ? "",
                    topDonations: N,
                    topSupporters: B,
                    visibleInSearch: !!S ? .fundraiser ? .visibleInSearch,
                    whyToDonate: U
                }
            }
        },
        700953: function(n, t, e) {
            e.d(t, {
                p: function() {
                    return a
                }
            });
            var r = e(123529);

            function a(n) {
                return (0, r.t)(n).map(n => ({ ...n,
                    ...n.checkoutId ? {} : {
                        checkoutId: n.id
                    }
                }))
            }
        },
        906468: function(n, t, e) {
            e.d(t, {
                Jf: function() {
                    return d
                },
                cr: function() {
                    return o
                },
                i$: function() {
                    return i
                },
                lR: function() {
                    return s
                },
                qm: function() {
                    return u
                },
                uR: function() {
                    return a
                }
            });
            var r = e(893269);

            function a(n) {
                return n ? r.tR[n] : r.tR.UNKNOWN
            }

            function i(n) {
                return n ? new Date(n).toISOString() : ""
            }

            function o(n) {
                let t = n ? .donationConfiguration ? .paymentProcessor;
                return t !== r._I && t ? r.UG.includes(t) ? r.MX : t ? .toLowerCase() : ""
            }

            function u(n, t, e) {
                return n && e ? e : `${t?.firstName} ${t?.lastName}`.trim()
            }

            function s(n, t) {
                let e = new Set([n ? .mostRecentDonor ? .id, n ? .topDonor ? .id, n ? .firstDonor ? .id]),
                    r = t ? .filter(n => !e.has(n ? .id)).slice(0, 3);
                return { ...n,
                    recentDonations: r
                }
            }

            function d(n) {
                return "object" == typeof n.amount && null !== n.amount ? n : {
                    amount: {
                        amount: n.amount,
                        currencyCode: n.currency
                    },
                    cardLastFour: n.cardLastFour,
                    checkoutId: n.checkout_id ? .toString() || n.donation_id ? .toString() || "",
                    createdAt: n.created_at,
                    currentAmount: n.fundraiser_current_amount || 0,
                    email: n.email,
                    fromLocalStorage: !0,
                    ...n.fund_id ? {
                        fundraiser: {
                            id: n.fund_id ? .toString()
                        }
                    } : {},
                    id: n.checkout_id ? .toString() || n.donation_id ? .toString() || "",
                    isAnonymous: n.is_anonymous,
                    isOffline: n.is_offline,
                    isRecurring: n.is_recurring,
                    name: n.name,
                    paymentMethod: n.paymentMethod,
                    profileUrl: n.profile_url,
                    tipAmount: n.tipAmount,
                    tipMethod: n.tipMethod,
                    verified: n.verified
                }
            }
            e(637469)
        },
        123529: function(n, t, e) {
            e.d(t, {
                t: function() {
                    return r
                }
            });

            function r(n) {
                return n ? n.map(n => n ? .node).filter(n => null != n) : []
            }
        },
        136578: function(n, t, e) {
            var r, a, i, o, u, s;
            e.d(t, {
                hE: function() {
                    return i
                },
                l5: function() {
                    return r
                },
                xy: function() {
                    return a
                }
            }), (o = r || (r = {})).READY = "ready", o.PROCESSING = "processing", o.ERRORED = "errored", o.REVIEW = "review", o.DELETED = "deleted", o.SUSPENDED = "suspended", (u = a || (a = {}))[u.ACTIVE = 1] = "ACTIVE", u[u.DELETED = 2] = "DELETED", u[u.INACTIVE = 0] = "INACTIVE", (s = i || (i = {}))[s.ENROLLED = 1] = "ENROLLED", s[s.UNENROLLED = 0] = "UNENROLLED"
        },
        111593: function(n, t, e) {
            var r, a;
            e.d(t, {
                n: function() {
                    return r
                }
            }), (a = r || (r = {})).US = "US", a.CA = "CA", a.MX = "MX", a.GB = "GB", a.AZ = "AZ", a.AL = "AL", a.AD = "AD", a.AG = "AG", a.AR = "AR", a.AM = "AM", a.AW = "AW", a.AU = "AU", a.AT = "AT", a.BS = "BS", a.BH = "BH", a.BD = "BD", a.BB = "BB", a.BE = "BE", a.BZ = "BZ", a.BM = "BM", a.BO = "BO", a.BA = "BA", a.BW = "BW", a.BR = "BR", a.BN = "BN", a.BG = "BG", a.KH = "KH", a.KY = "KY", a.CL = "CL", a.CM = "CM", a.CO = "CO", a.KM = "KM", a.CR = "CR", a.HR = "HR", a.CY = "CY", a.CZ = "CZ", a.DK = "DK", a.DJ = "DJ", a.DM = "DM", a.DO = "DO", a.EC = "EC", a.EG = "EG", a.SV = "SV", a.GQ = "GQ", a.EE = "EE", a.FJ = "FJ", a.FI = "FI", a.FR = "FR", a.GF = "GF", a.GE = "GE", a.DE = "DE", a.GH = "GH", a.GI = "GI", a.GM = "GM", a.GR = "GR", a.GD = "GD", a.GP = "GP", a.GU = "GU", a.GN = "GN", a.GY = "GY", a.GT = "GT", a.HT = "HT", a.HN = "HN", a.HK = "HK", a.HU = "HU", a.IS = "IS", a.IN = "IN", a.ID = "ID", a.IE = "IE", a.IL = "IL", a.IT = "IT", a.JM = "JM", a.JO = "JO", a.JP = "JP", a.KZ = "KZ", a.KE = "KE", a.KR = "KR", a.XK = "XK", a.KW = "KW", a.KG = "KG", a.LV = "LV", a.LT = "LT", a.LU = "LU", a.MO = "MO", a.MY = "MY", a.MV = "MV", a.MT = "MT", a.MQ = "MQ", a.MU = "MU", a.FM = "FM", a.MD = "MD", a.MN = "MN", a.ME = "ME", a.MA = "MA", a.MZ = "MZ", a.NA = "NA", a.NP = "NP", a.NL = "NL", a.AN = "AN", a.NZ = "NZ", a.NI = "NI", a.NO = "NO", a.OM = "OM", a.PA = "PA", a.PG = "PG", a.PY = "PY", a.PE = "PE", a.PH = "PH", a.PL = "PL", a.PT = "PT", a.PR = "PR", a.QA = "QA", a.RE = "RE", a.RO = "RO", a.RW = "RW", a.KN = "KN", a.LC = "LC", a.VC = "VC", a.SA = "SA", a.RS = "RS", a.SC = "SC", a.SG = "SG", a.SK = "SK", a.SI = "SI", a.LK = "LK", a.ZA = "ZA", a.ES = "ES", a.SE = "SE", a.CH = "CH", a.TW = "TW", a.TZ = "TZ", a.TH = "TH", a.TO = "TO", a.TT = "TT", a.TR = "TR", a.TC = "TC", a.AE = "AE", a.UY = "UY", a.VE = "VE", a.VN = "VN", a.VI = "VI", a.ZW = "ZW", a.UG = "UG", a.LI = "LI", a.GA = "GA", a.DZ = "DZ", a.SR = "SR", a.AO = "AO", a.ZM = "ZM", a.AS = "AS", a.AI = "AI", a.IO = "IO", a.VG = "VG", a.CX = "CX", a.CC = "CC", a.CK = "CK", a.FK = "FK", a.FO = "FO", a.PF = "PF", a.GL = "GL", a.GG = "GG", a.HM = "HM", a.IM = "IM", a.JE = "JE", a.YT = "YT", a.MS = "MS", a.NC = "NC", a.NU = "NU", a.NF = "NF", a.MP = "MP", a.PN = "PN", a.SH = "SH", a.PM = "PM", a.GS = "GS", a.SJ = "SJ", a.TK = "TK", a.UM = "UM", a.WF = "WF", a.BJ = "BJ", a.BT = "BT", a.BF = "BF", a.BI = "BI", a.CV = "CV", a.TD = "TD", a.GW = "GW", a.KI = "KI", a.LA = "LA", a.LS = "LS", a.LR = "LR", a.MG = "MG", a.MW = "MW", a.MH = "MH", a.MR = "MR", a.MC = "MC", a.NR = "NR", a.NE = "NE", a.PW = "PW", a.WS = "WS", a.SM = "SM", a.ST = "ST", a.SN = "SN", a.SL = "SL", a.SB = "SB", a.SZ = "SZ", a.TJ = "TJ", a.TL = "TL", a.TG = "TG", a.TN = "TN", a.TM = "TM", a.TV = "TV", a.UZ = "UZ", a.VU = "VU", a.VA = "VA", a.CG = "CG", a.EH = "EH", a.ML = "ML", a.MM = "MM", a.YE = "YE", a.CF = "CF", a.CD = "CD", a.ER = "ER", a.ET = "ET", a.IQ = "IQ", a.LY = "LY", a.SO = "SO", a.UK = "UK"
        },
        497914: function(n, t, e) {
            e.d(t, {
                n: function() {
                    return r.n
                }
            });
            var r = e(111593)
        }
    }
]);
//# sourceMappingURL=77655-9a38e95edb659fc4.js.map