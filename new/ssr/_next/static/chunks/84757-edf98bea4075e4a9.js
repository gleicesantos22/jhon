"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [84757], {
        803773: function(r, t, n) {
            n.d(t, {
                $L: function() {
                    return H
                },
                EO: function() {
                    return s
                },
                FL: function() {
                    return c
                },
                Hn: function() {
                    return f
                },
                KT: function() {
                    return P
                },
                eJ: function() {
                    return T
                },
                fO: function() {
                    return y
                },
                hZ: function() {
                    return O
                },
                kk: function() {
                    return l
                },
                mn: function() {
                    return S
                },
                rx: function() {
                    return i
                },
                tK: function() {
                    return U
                },
                xG: function() {
                    return A
                },
                y4: function() {
                    return M
                },
                yJ: function() {
                    return _
                }
            });
            var e, o, u, i, c, s, a = n(275271),
                N = n(893269),
                E = n(45798),
                D = n(637469);
            n(363456);
            var L = n(799447),
                m = n(252135),
                I = n(690673);

            function A(r, t) {
                return (0, L.cq)(parseFloat(r.toFixed(2)), {
                    currency: t
                }, {
                    maximumFractionDigits: 2,
                    minimumFractionDigits: 2
                })
            }

            function f(r) {
                return r / 100
            }

            function l(r, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                return n ? A(r, t) : A(f(r), t)
            }

            function S(r) {
                return r.processor_total ? Number(r.processor_total) + Number(r.app_total) + Number(r.processor_tax_total) + Number(r.app_tax_total) : 0
            }(e = i || (i = {})).AUD = "AUD", e.CAD = "CAD", e.EUR = "EUR", e.GBP = "GBP", e.ZAR = "ZAR", e.SEK = "SEK", e.DKK = "DKK", e.NOK = "NOK", e.MXN = "MXN", e.USD = "USD", e.SGD = "SGD", e.CHF = "CHF", e.NZD = "NZD";
            let C = {
                    AUD: {
                        mark: "$",
                        country: "AU"
                    },
                    CAD: {
                        mark: "$",
                        country: "CA"
                    },
                    CHF: {
                        mark: "CHF",
                        country: "CH"
                    },
                    DKK: {
                        mark: "kr",
                        country: "DK"
                    },
                    EUR: {
                        mark: "€",
                        country: ""
                    },
                    GBP: {
                        mark: "\xa3",
                        country: "GB"
                    },
                    MXN: {
                        mark: "$",
                        country: "MX"
                    },
                    NOK: {
                        mark: "kr",
                        country: "NO"
                    },
                    SEK: {
                        mark: "kr",
                        country: "SE"
                    },
                    SGD: {
                        mark: "$",
                        country: "SG"
                    },
                    USD: {
                        mark: "$",
                        country: "US"
                    },
                    ZAR: {
                        mark: "R",
                        country: "ZA"
                    },
                    NZD: {
                        mark: "$",
                        country: "NZ"
                    }
                },
                v = {
                    [N.Ec.AUSTRALIA]: {
                        isoCode: "AUD",
                        mark: "$"
                    },
                    [N.Ec.AUSTRIA]: {
                        isoCode: "EUR",
                        mark: "€"
                    },
                    [N.Ec.BELGIUM]: {
                        isoCode: "EUR",
                        mark: "€"
                    },
                    [N.Ec.CANADA]: {
                        isoCode: "CAD",
                        mark: "$"
                    },
                    [N.Ec.DENMARK]: {
                        isoCode: "DKK",
                        mark: "kr"
                    },
                    [N.Ec.FINLAND]: {
                        isoCode: "EUR",
                        mark: "€"
                    },
                    [N.Ec.FRANCE]: {
                        isoCode: "EUR",
                        mark: "€"
                    },
                    [N.Ec.GERMANY]: {
                        isoCode: "EUR",
                        mark: "€"
                    },
                    [N.Ec.IRELAND]: {
                        isoCode: "EUR",
                        mark: "€"
                    },
                    [N.Ec.ITALY]: {
                        isoCode: "EUR",
                        mark: "€"
                    },
                    [N.Ec.LUXEMBOURG]: {
                        isoCode: "EUR",
                        mark: "€"
                    },
                    [N.Ec.NETHERLANDS]: {
                        isoCode: "EUR",
                        mark: "€"
                    },
                    [N.Ec.NEW_ZEALAND]: {
                        isoCode: "NZD",
                        mark: "$"
                    },
                    [N.Ec.NORWAY]: {
                        isoCode: "NOK",
                        mark: "kr"
                    },
                    [N.Ec.PORTUGAL]: {
                        isoCode: "EUR",
                        mark: "€"
                    },
                    [N.Ec.SPAIN]: {
                        isoCode: "EUR",
                        mark: "€"
                    },
                    [N.Ec.SWEDEN]: {
                        isoCode: "SEK",
                        mark: "kr"
                    },
                    [N.Ec.SWITZERLAND]: {
                        isoCode: "CHF",
                        mark: "CHF"
                    },
                    [N.Ec.UNITED_KINGDOM]: {
                        isoCode: "GBP",
                        mark: "\xa3"
                    },
                    [N.Ec.UNITED_STATES]: {
                        isoCode: "USD",
                        mark: "$"
                    },
                    [N.Ec.MEXICO]: {
                        isoCode: "MXN",
                        mark: "$"
                    },
                    SG: {
                        isoCode: "SGD",
                        mark: "$"
                    },
                    ZA: {
                        isoCode: "ZAR",
                        mark: "R"
                    }
                };
            (o = c || (c = {})).ALBANIA = "AL", o.BANGLADESH = "BD", o.BRAZIL = "BR", o.COLOMBIA = "CO", o.DOMINICAN_REPUBLIC = "DO", o.INDIA = "IN", o.PHILIPPINES = "PH", o.UNITED_ARAB_EMIRATES = "AE", (u = s || (s = {})).AED = "AED", u.ALL = "ALL", u.BDT = "BDT", u.BRL = "BRL", u.COP = "COP", u.DOP = "DOP", u.INR = "INR", u.PHP = "PHP";
            let R = {
                    AED: {
                        mark: "AED",
                        country: "AE"
                    },
                    ALL: {
                        mark: "L",
                        country: "AL"
                    },
                    BDT: {
                        mark: "৳",
                        country: "BD"
                    },
                    BRL: {
                        mark: "R$",
                        country: "BR"
                    },
                    COP: {
                        mark: "COL$",
                        country: "CO"
                    },
                    DOP: {
                        mark: "RD$",
                        country: "DO"
                    },
                    INR: {
                        mark: "₹",
                        country: "IN"
                    },
                    PHP: {
                        mark: "₱",
                        country: "PH"
                    }
                },
                O = {
                    AL: {
                        mark: "L",
                        isoCode: "ALL"
                    },
                    BD: {
                        mark: "৳",
                        isoCode: "BDT"
                    },
                    BR: {
                        mark: "R$",
                        isoCode: "BRL"
                    },
                    CO: {
                        mark: "COL$",
                        isoCode: "COP"
                    },
                    DO: {
                        mark: "RD$",
                        isoCode: "DOP"
                    },
                    IN: {
                        mark: "₹",
                        isoCode: "INR"
                    },
                    PH: {
                        mark: "₱",
                        isoCode: "PHP"
                    },
                    AE: {
                        mark: "AED",
                        isoCode: "AED"
                    }
                };

            function H(r) {
                let t = r.toUpperCase();
                return t in i ? C[i[t]].mark : t in s ? R[s[t]].mark : "$"
            }

            function _(r, t) {
                let n = r.toUpperCase(),
                    e = (0, m.hc)(t);
                if (n in i) {
                    let r = new Intl.NumberFormat(e, {
                        style: "currency",
                        currency: n
                    }).formatToParts(1e4).find(r => "group" === r.type);
                    return r ? r.value : ","
                }
                return ","
            }
            let U = r => v[r] ? v[r].isoCode : "USD",
                y = r => {
                    for (let t in v)
                        if (v[t].isoCode === r) return t;
                    return ""
                },
                T = r => Object.values(N.Ec).includes(r);

            function M(r, t) {
                let {
                    locale: n
                } = (0, E.bN)(), e = new I.Z(n).setCurrencyProps({
                    currency: t,
                    currencyDisplay: "symbol"
                }).formatAsCurrency(r);
                return t !== D.NEm.USD && e.startsWith("$") && (e += ` ${t}`), e
            }

            function P(r, t) {
                let {
                    locale: n
                } = (0, E.bN)(), e = (0, a.useMemo)(() => new I.Z(n), [n]), o = n === N.Qv.SPANISH_MX || n === N.Qv.SPANISH_US || n === N.Qv.SPANISH_ES || n === N.Qv.FRENCH_FR, u = String(r).endsWith("0".repeat((() => {
                    let t = r.toString().length;
                    return 5 === t || 4 === t ? 2 : t > 5 ? t - 2 : 0
                })()));
                return !o && r > 999 && u ? e.formatCurrencyByLocale(e.formatWithAbbrev(r, !0, 1), H(t.toString())) : null
            }
        },
        467556: function(r, t, n) {
            n.d(t, {
                $L: function() {
                    return e.$L
                },
                EO: function() {
                    return e.EO
                },
                FL: function() {
                    return e.FL
                },
                Hn: function() {
                    return e.Hn
                },
                KT: function() {
                    return e.KT
                },
                eJ: function() {
                    return e.eJ
                },
                fO: function() {
                    return e.fO
                },
                hZ: function() {
                    return e.hZ
                },
                kk: function() {
                    return e.kk
                },
                mn: function() {
                    return e.mn
                },
                rx: function() {
                    return e.rx
                },
                tK: function() {
                    return e.tK
                },
                xG: function() {
                    return e.xG
                },
                y4: function() {
                    return e.y4
                },
                yJ: function() {
                    return e.yJ
                }
            });
            var e = n(803773)
        },
        799447: function(r, t, n) {
            n.d(t, {
                D4: function() {
                    return o.D4
                },
                Ds: function() {
                    return e.Ds
                },
                GU: function() {
                    return o.GU
                },
                Jo: function() {
                    return e.Jo
                },
                Pj: function() {
                    return e.Pj
                },
                S1: function() {
                    return o.S1
                },
                WU: function() {
                    return o.WU
                },
                cq: function() {
                    return o.cq
                },
                hP: function() {
                    return e.hP
                },
                id: function() {
                    return e.id
                },
                vE: function() {
                    return o.vE
                },
                y8: function() {
                    return o.y8
                }
            });
            var e = n(917417),
                o = n(733386)
        },
        733386: function(r, t, n) {
            n.d(t, {
                D4: function() {
                    return a
                },
                GU: function() {
                    return L
                },
                S1: function() {
                    return s
                },
                WU: function() {
                    return E
                },
                cq: function() {
                    return D
                },
                vE: function() {
                    return m
                },
                y8: function() {
                    return N
                }
            });
            var e = n(800341),
                o = n(803773),
                u = n(252135),
                i = n(799447);
            let c = {
                currencyFormatProps: {
                    currency: "USD"
                },
                formatProps: {
                    maximumFractionDigits: 0,
                    minimumFractionDigits: 0
                },
                locale: e.Qv.ENGLISH_US
            };

            function s(r) {
                let t = (0, u.H9)(r),
                    n = Object.values(e.Qv);
                c.locale = n.includes(t) ? t : e.Qv.ENGLISH_GB
            }

            function a(r) {
                c.currencyFormatProps = r
            }

            function N(r) {
                c.formatProps = r
            }

            function E(r) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.formatProps,
                    n = arguments.length > 2 ? arguments[2] : void 0,
                    e = {
                        useGrouping: !0,
                        ...t
                    },
                    o = n || c.locale;
                return 4 === Math.trunc(Math.abs(r)).toString().length && i.hP.has(o) ? r.toLocaleString((0, u.hc)(o), { ...e,
                    useGrouping: !1
                }) : new Intl.NumberFormat((0, u.hc)(o), e).formatToParts(r).map(r => "group" === r.type ? i.Jo[o] : r.value).join("")
            }

            function D(r, t, n, u, i) {
                let s = {
                    currencyDisplay: "symbol",
                    style: "currency",
                    ...c.currencyFormatProps,
                    ...t
                };
                return function(r, t, n, u) {
                    let i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
                        s = n || c.locale,
                        a = {
                            AUD: "A",
                            CAD: "CA",
                            NOK: "N",
                            MXN: "MX"
                        },
                        N = i && u && a[u] ? a[u] : "";
                    if (u && u in o.EO) {
                        let i = u === o.EO.ALL || u === o.EO.BRL || u === o.EO.AED ? "\xa0" : "";
                        switch (s) {
                            case e.Qv.FRENCH_FR:
                            case e.Qv.FRENCH_BE:
                            case e.Qv.FRENCH_CA:
                            case e.Qv.FRENCH_CH:
                            case e.Qv.FRENCH_LU:
                            case e.Qv.GERMAN_DE:
                            case e.Qv.ITALIAN_IT:
                            case e.Qv.PORTUGUESE_PT:
                            case e.Qv.SPANISH_ES:
                                if (n === e.Qv.GERMAN_DE) {
                                    if (u === o.EO.BDT) return r + "\xa0Tk";
                                    if (u === o.EO.ALL) return r + "\xa0Lek"
                                }
                                return r + "\xa0" + t;
                            default:
                                if (n === e.Qv.SPANISH_US || n === e.Qv.SPANISH_MX) return t + r;
                                if (n === e.Qv.GERMAN_AT || n === e.Qv.GERMAN_CH) {
                                    if (u === o.EO.BDT) return "Tk\xa0" + r;
                                    if (u === o.EO.ALL) return "Lek\xa0" + r;
                                    return t + "\xa0" + r
                                }
                                return t + i + r
                        }
                    }
                    switch (s) {
                        case e.Qv.FRENCH_FR:
                        case e.Qv.FRENCH_BE:
                        case e.Qv.FRENCH_CA:
                        case e.Qv.FRENCH_CH:
                        case e.Qv.FRENCH_LU:
                        case e.Qv.GERMAN_DE:
                        case e.Qv.GERMAN_AT:
                        case e.Qv.GERMAN_CH:
                        case e.Qv.ITALIAN_IT:
                        case e.Qv.SPANISH_ES:
                            if (u === o.rx.CAD && N) return r + "\xa0" + t + "\xa0" + N;
                            if (u === o.rx.NOK && N) return r + "\xa0" + N + "Kr";
                            return r + "\xa0" + N + t;
                        case e.Qv.DUTCH_NL:
                            if (u === o.rx.NOK && N) return r + "\xa0" + N + "Kr";
                            if (u === o.rx.SEK || u === o.rx.NOK || u === o.rx.DKK) return r + "\xa0" + t;
                            return N + t + "\xa0" + r;
                        default:
                            if (u === o.rx.NOK && N) return N + "Kr\xa0" + r;
                            if (u === o.rx.SEK || u === o.rx.NOK || u === o.rx.DKK) return t + "\xa0" + r;
                            return N + t + r
                    }
                }(E(r, n, u), (0, o.$L)(s.currency), u, s.currency, i)
            }

            function L(r) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                    {
                        abbrevNum: o,
                        suffix: s
                    } = (0, i.id)(r, t, n),
                    a = c.formatProps;
                return n > 0 && (a = {
                    maximumFractionDigits: Math.min(n, ("" + r).length),
                    minimumFractionDigits: 0
                }), E(o, a) + function(r) {
                    let t = (0, u.Ye)(c.locale),
                        n = {
                            [e.y4.FRENCH]: {
                                [i.Ds.THOUSAND]: "\xa0k",
                                [i.Ds.MILLION]: "\xa0M",
                                [i.Ds.BILLION]: "\xa0G",
                                [i.Ds.TRILLION]: "\xa0T"
                            },
                            [e.y4.SPANISH]: {
                                [i.Ds.THOUSAND]: "\xa0mil.",
                                [i.Ds.MILLION]: "\xa0M",
                                [i.Ds.BILLION]: "\xa0MM",
                                [i.Ds.TRILLION]: "\xa0B"
                            },
                            [e.y4.GERMAN]: {
                                [i.Ds.THOUSAND]: "\xa0Tsd.",
                                [i.Ds.MILLION]: "\xa0Mio.",
                                [i.Ds.BILLION]: "\xa0Mrd.",
                                [i.Ds.TRILLION]: "\xa0Bio."
                            },
                            [e.y4.DUTCH]: {
                                [i.Ds.THOUSAND]: "K",
                                [i.Ds.MILLION]: "MLN",
                                [i.Ds.BILLION]: "MLD",
                                [i.Ds.TRILLION]: "BLN"
                            },
                            [e.y4.ITALIAN]: {
                                [i.Ds.THOUSAND]: "\xa0mila",
                                [i.Ds.MILLION]: "\xa0mln",
                                [i.Ds.BILLION]: "\xa0mld",
                                [i.Ds.TRILLION]: "\xa0tri"
                            },
                            [e.y4.PORTUGUESE]: {
                                [i.Ds.THOUSAND]: "\xa0mil",
                                [i.Ds.MILLION]: "\xa0mi",
                                [i.Ds.BILLION]: "\xa0bi",
                                [i.Ds.TRILLION]: "\xa0tri"
                            }
                        };
                    return n[t] && n[t][r] || r
                }(s)
            }

            function m(r) {
                let {
                    percentage: t,
                    locale: n,
                    convertToPercent: o = !1,
                    numberFormatProps: u = {
                        maximumFractionDigits: 1,
                        minimumFractionDigits: 0
                    }
                } = r, i = n || c.locale, s = i === e.Qv.GERMAN_AT || i === e.Qv.GERMAN_CH || i === e.Qv.GERMAN_DE || i === e.Qv.FRENCH_FR || i === e.Qv.FRENCH_CA || i === e.Qv.SPANISH_ES || i === e.Qv.SPANISH_MX || i === e.Qv.SPANISH_US, a = o ? Number((100 * Number(t)).toFixed(u.maximumFractionDigits)) : E(Number(t), u, n);
                return s ? `${a}\u00A0%` : `${a}%`
            }
        },
        690673: function(r, t, n) {
            n.d(t, {
                Z: function() {
                    return c
                }
            });
            var e = n(893269),
                o = n(467556),
                u = n(252135),
                i = n(917417);
            class c {
                constructor(r) {
                    let t = (0, u.H9)(r),
                        n = Object.values(e.Qv);
                    this.locale = n.includes(t) ? t : e.Qv.ENGLISH_GB, this.formatProps = {
                        maximumFractionDigits: 0,
                        minimumFractionDigits: 0
                    }
                }
                setCurrencyProps(r) {
                    return this.currencyFormatProps = r, this
                }
                setFormatProps(r) {
                    return this.formatProps = r, this
                }
                formatAsCurrency(r, t, n) {
                    let e = {
                            currency: "usd",
                            currencyDisplay: "symbol",
                            style: "currency",
                            ...this.currencyFormatProps,
                            ...t
                        },
                        u = this.format(r),
                        i = (0, o.$L)(e.currency);
                    return this.formatCurrencyByLocale(u, i, e.currency, n)
                }
                format(r) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.formatProps,
                        n = {
                            useGrouping: !0,
                            ...t
                        };
                    return 4 === Math.trunc(Math.abs(r)).toString().length && i.hP.has(this.locale) ? r.toLocaleString((0, u.hc)(this.locale), { ...n,
                        useGrouping: !1
                    }) : new Intl.NumberFormat((0, u.hc)(this.locale), n).formatToParts(r).map(r => "group" === r.type ? i.Jo[this.locale] : r.value).join("")
                }
                formatWithAbbrev(r) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                        e = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                        {
                            abbrevNum: u,
                            suffix: c
                        } = (0, i.id)(r, t, n),
                        s = this.formatProps;
                    n > 0 && (s = {
                        maximumFractionDigits: Math.min(n, ("" + r).length),
                        minimumFractionDigits: 0
                    });
                    let a = this.format(u, s) + this.getLocalizedSuffix(c);
                    if (!e) return a;
                    let {
                        currency: N
                    } = this.currencyFormatProps || {
                        currency: "usd"
                    }, E = (0, o.$L)(N);
                    return this.formatCurrencyByLocale(a, E)
                }
                formatCurrencyByLocale(r, t, n) {
                    let u = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                        i = {
                            AUD: "A",
                            CAD: "CA",
                            NOK: "N",
                            MXN: "MX"
                        },
                        c = u && n && i[n] ? i[n] : "";
                    switch (this.locale) {
                        case e.Qv.FRENCH_FR:
                        case e.Qv.FRENCH_BE:
                        case e.Qv.FRENCH_CA:
                        case e.Qv.FRENCH_CH:
                        case e.Qv.FRENCH_LU:
                        case e.Qv.GERMAN_DE:
                        case e.Qv.GERMAN_AT:
                        case e.Qv.GERMAN_CH:
                        case e.Qv.ITALIAN_IT:
                        case e.Qv.SPANISH_ES:
                            if (n === o.rx.CAD && c) return r + "\xa0" + t + "\xa0" + c;
                            if (n === o.rx.NOK && c) return r + "\xa0" + c + "Kr";
                            return r + "\xa0" + c + t;
                        case e.Qv.DUTCH_NL:
                            if (n === o.rx.NOK && c) return r + "\xa0" + c + "Kr";
                            if (n === o.rx.SEK || n === o.rx.NOK || n === o.rx.DKK) return r + "\xa0" + t;
                            return c + t + "\xa0" + r;
                        default:
                            if (n === o.rx.NOK && c) return c + "Kr\xa0" + r;
                            if (n === o.rx.SEK || n === o.rx.NOK || n === o.rx.DKK) return t + "\xa0" + r;
                            return c + t + r
                    }
                }
                getSuffixByLanguageCode(r, t) {
                    let n = {
                        [e.y4.FRENCH]: {
                            [i.Ds.THOUSAND]: "\xa0k",
                            [i.Ds.MILLION]: "\xa0M",
                            [i.Ds.BILLION]: "\xa0G",
                            [i.Ds.TRILLION]: "\xa0T"
                        },
                        [e.y4.SPANISH]: {
                            [i.Ds.THOUSAND]: "\xa0mil.",
                            [i.Ds.MILLION]: "\xa0M",
                            [i.Ds.BILLION]: "\xa0MM",
                            [i.Ds.TRILLION]: "\xa0B"
                        },
                        [e.y4.GERMAN]: {
                            [i.Ds.THOUSAND]: "\xa0Tsd.",
                            [i.Ds.MILLION]: "\xa0Mio.",
                            [i.Ds.BILLION]: "\xa0Mrd.",
                            [i.Ds.TRILLION]: "\xa0Bio."
                        },
                        [e.y4.DUTCH]: {
                            [i.Ds.THOUSAND]: "K",
                            [i.Ds.MILLION]: "MLN",
                            [i.Ds.BILLION]: "MLD",
                            [i.Ds.TRILLION]: "BLN"
                        },
                        [e.y4.ITALIAN]: {
                            [i.Ds.THOUSAND]: "\xa0mila",
                            [i.Ds.MILLION]: "\xa0mln",
                            [i.Ds.BILLION]: "\xa0mld",
                            [i.Ds.TRILLION]: "\xa0tri"
                        },
                        [e.y4.PORTUGUESE]: {
                            [i.Ds.THOUSAND]: "\xa0mil",
                            [i.Ds.MILLION]: "\xa0mi",
                            [i.Ds.BILLION]: "\xa0bi",
                            [i.Ds.TRILLION]: "\xa0tri"
                        }
                    };
                    return n[r] && n[r][t] || t
                }
                getSuffixByLocale(r, t) {
                    let n = {};
                    return n[r] && n[this.locale][t] || null
                }
                getLocalizedSuffix(r) {
                    let t = (0, u.Ye)(this.locale),
                        n = this.getSuffixByLanguageCode(t, r);
                    return this.getSuffixByLocale(this.locale, r) || n
                }
            }
        },
        917417: function(r, t, n) {
            n.d(t, {
                Ds: function() {
                    return o
                },
                Jo: function() {
                    return c
                },
                Pj: function() {
                    return i.Z
                },
                hP: function() {
                    return s
                },
                id: function() {
                    return a
                }
            });
            var e, o, u = n(800341),
                i = n(690673);
            let c = {
                    [u.Qv.ENGLISH_US]: ",",
                    [u.Qv.ENGLISH_AU]: ",",
                    [u.Qv.ENGLISH_DK]: ",",
                    [u.Qv.ENGLISH_FI]: ",",
                    [u.Qv.ENGLISH_IE]: ",",
                    [u.Qv.ENGLISH_NO]: ",",
                    [u.Qv.ENGLISH_SE]: ",",
                    [u.Qv.ENGLISH_CA]: ",",
                    [u.Qv.ENGLISH_GB]: ",",
                    [u.Qv.DUTCH_NL]: ".",
                    [u.Qv.DUTCH_BE]: ".",
                    [u.Qv.FRENCH_FR]: " ",
                    [u.Qv.FRENCH_BE]: " ",
                    [u.Qv.FRENCH_CA]: "\xa0",
                    [u.Qv.FRENCH_CH]: "’",
                    [u.Qv.FRENCH_LU]: " ",
                    [u.Qv.GERMAN_DE]: ".",
                    [u.Qv.GERMAN_AT]: "\xa0",
                    [u.Qv.GERMAN_CH]: "’",
                    [u.Qv.ITALIAN_IT]: ".",
                    [u.Qv.PORTUGUESE_PT]: "\xa0",
                    [u.Qv.PORTUGUESE_BR]: ".",
                    [u.Qv.SPANISH_US]: ",",
                    [u.Qv.SPANISH_ES]: ".",
                    [u.Qv.SPANISH_MX]: ","
                },
                s = new Set([u.Qv.SPANISH_ES, u.Qv.SPANISH_MX, u.Qv.SPANISH_US, u.Qv.GERMAN_DE, u.Qv.DUTCH_BE, u.Qv.DUTCH_NL, u.Qv.PORTUGUESE_PT]);
            (e = o || (o = {})).THOUSAND = "K", e.TRILLION = "Tr", e.BILLION = "B", e.MILLION = "M", e.NONE = "";
            let a = function(r) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                    e = Math.min(n, ("" + r).length),
                    o = {
                        abbrevNum: r,
                        suffix: ""
                    },
                    u = Math.pow(10, e || 0);
                return (t || r % 1e3 == 0 && r / 1e3 < 1e3 || r % 1e6 == 0 && r / 1e6 < 1e3 || r % 1e9 == 0 && r / 1e9 < 1e3 || r % 1e12 == 0 && r / 1e12 < 1e3) && (r >= 95e10 ? (o.abbrevNum = Math.round(r / 1e12 * u) / u, o.suffix = "Tr") : r >= 95e7 ? (o.abbrevNum = Math.round(r / 1e9 * u) / u, o.suffix = "B") : r >= 95e4 ? (o.abbrevNum = Math.round(r / 1e6 * u) / u, o.suffix = "M") : r >= 1e3 && (o.abbrevNum = Math.round(r / 1e3 * u) / u, o.suffix = "K")), o
            }
        }
    }
]);
//# sourceMappingURL=84757-edf98bea4075e4a9.js.map