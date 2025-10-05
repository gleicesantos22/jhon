"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [73193], {
        437526: function(e, n, r) {
            r.d(n, {
                r: function() {
                    return t.r
                }
            });
            var t = r(527795)
        },
        931439: function(e, n, r) {
            r.d(n, {
                UF: function() {
                    return _
                },
                zo: function() {
                    return d
                },
                Y2: function() {
                    return m
                },
                HO: function() {
                    return f
                },
                Qb: function() {
                    return l
                }
            });
            var t, a, i, o, u = r(637469),
                s = r(712797),
                c = r(497914);
            (t = i || (i = {}))[t.DELETED = 0] = "DELETED", t[t.ACTIVE = 1] = "ACTIVE", (a = o || (o = {}))[a.DELETED = 0] = "DELETED", a[a.ACTIVE = 1] = "ACTIVE", i.DELETED, i.ACTIVE, o.DELETED, o.ACTIVE, u.BEz.MAIN, u.BEz.DESCRIPTION, u.BEz.UPDATE, u.BEz.FACEBOOK_SLIDESHOW, u.BEz.CONTENT, u.BEz.TEAM, u.BEz.PROFILE, u.BEz.GALLERY;
            let d = {
                    recent: u.Jzs.CREATED_AT,
                    highest: u.Jzs.AMOUNT
                },
                f = [40, 130, 170, 260, 400, 420, 440, 1300, 1700, 2600, 4e3, 4400, 4440, 6660, 13e3, 17e3, 26e3, 44400, 44440],
                l = {
                    [s.E_.AUD]: "$",
                    [s.E_.CAD]: "$",
                    [s.E_.EUR]: "€",
                    [s.E_.GBP]: "\xa3",
                    [s.E_.MXN]: "$",
                    [s.E_.USD]: "$"
                },
                _ = c.n.US,
                m = [63, 105, 197]
        },
        665477: function(e, n, r) {
            r.d(n, {
                d: function() {
                    return f
                },
                j: function() {
                    return l
                }
            });
            var t = r(552676),
                a = r(275271),
                i = r(637469),
                o = r(712797);
            let u = {
                    amount: {
                        amount: 0,
                        currencyCode: i.NEm.USD
                    },
                    checkoutId: "0",
                    createdAt: new Date().toISOString(),
                    currency: "",
                    donationId: 0,
                    email: "",
                    isAnonymous: !1,
                    id: "",
                    isOffline: !1,
                    name: "",
                    profileUrl: "",
                    tipAmount: 0,
                    cardLastFour: "",
                    paymentMethod: o.A6.CREDIT_CARD,
                    personId: 0
                },
                s = {
                    hasCheckoutData: !1,
                    guestCheckout: {
                        email: "",
                        firstName: "",
                        hasSavedPaymentMethod: !1,
                        lastName: ""
                    }
                },
                c = [],
                d = a.createContext(null);

            function f(e) {
                let [n, r] = a.useState(s), [i, o] = a.useState(u), [f, l] = a.useState(c);
                return (0, t.jsx)(d.Provider, {
                    value: {
                        getCheckoutDonationDataFallback: () => JSON.stringify(i),
                        setCheckoutDonationDataFallback: e => {
                            o(e)
                        },
                        getGuestCheckoutDataFallback: () => n,
                        setGuestCheckoutDataFallback: e => {
                            r(e)
                        },
                        getAllDonationsDataFallback: () => JSON.stringify(f),
                        setAllDonationsDataFallback: e => {
                            l(e)
                        }
                    },
                    children: e.children
                })
            }

            function l() {
                let e = a.useContext(d);
                if (!e) throw Error("useCheckoutDonationContext must be used within a CheckoutDonationContext Provider");
                return e
            }
            d.displayName = "CheckoutDonation"
        },
        721876: function(e, n, r) {
            r.d(n, {
                EMPTY_STATE_EXPERIMENT: function() {
                    return l
                },
                IW: function() {
                    return f
                },
                JZ: function() {
                    return s
                },
                Nd: function() {
                    return d
                },
                Oc: function() {
                    return o
                },
                Pl: function() {
                    return t
                },
                fK: function() {
                    return m
                },
                kW: function() {
                    return a
                },
                m4: function() {
                    return c
                },
                m_: function() {
                    return u
                },
                w5: function() {
                    return _
                },
                yV: function() {
                    return i
                }
            });
            let t = {
                    name: "localized_currency",
                    variations: {
                        control: "control",
                        variant_1: "variant_1",
                        variant_2: "variant_2"
                    }
                },
                a = 20,
                i = 10,
                o = 1,
                u = {
                    name: "recurring_donations_non_us",
                    variations: {
                        CONTROL: "control",
                        VARIANT: "variant"
                    }
                },
                s = {
                    name: "recurring_donations_upsell",
                    variations: {
                        CONTROL: "control",
                        AGGRESSIVE_LOW: "aggressive_low",
                        AGGRESSIVE_HIGH: "aggressive_high"
                    }
                },
                c = "default_values",
                d = {
                    recent: 1,
                    most_recent: 2,
                    top: 3,
                    become_top: 4,
                    suggested: 5,
                    icon: 6
                },
                f = {
                    yellow: 1,
                    green: 2,
                    purple: 3
                },
                l = {
                    name: "fe-ssr-campaign-empty-state",
                    variations: {
                        control: "control",
                        checkmark_high: "checkmark_high",
                        checkmark_low: "checkmark_low",
                        checkmark_none: "checkmark_none",
                        donor_badge_high: "donor_badge_high",
                        donor_badge_low: "donor_badge_low",
                        donor_badge_none: "donor_badge_none",
                        nurture_high: "nurture_high",
                        nurture_low: "nurture_low",
                        nurture_none: "nurture_none",
                        reaction_ripple_high: "reaction_ripple_high",
                        reaction_ripple_low: "reaction_ripple_low",
                        reaction_ripple_none: "reaction_ripple_none"
                    }
                },
                _ = {
                    name: "fe-ssr-campaign-early-state",
                    variations: {
                        control: "control",
                        early_state: "early_state"
                    }
                },
                m = {
                    name: "donation_upsell",
                    variations: {
                        control: "control",
                        overall_nudge: "overall_nudge",
                        overall_recognition: "overall_recognition"
                    }
                }
        },
        230992: function(e, n, r) {
            r.d(n, {
                J: function() {
                    return i
                }
            });
            var t = r(920647),
                a = r(637469);

            function i() {
                let {
                    query: {
                        campaignUrl: e
                    }
                } = (0, t.useRouter)(), {
                    data: n
                } = function(e) {
                    let {
                        error: n,
                        data: r,
                        loading: t
                    } = (0, a.eTP)({
                        variables: {
                            slug: e.fundraiserSlug
                        },
                        skip: e.skip
                    });
                    return {
                        error: n,
                        data: {
                            total_photos: r ? .fundraiser ? .photoCounts ? .photos || 0,
                            total_co_photos: r ? .fundraiser ? .photoCounts ? .coPhotos || 0,
                            total_community_photos: r ? .fundraiser ? .photoCounts ? .communityPhotos || 0,
                            total_comments: r ? .fundraiser ? .commentCount || 0,
                            total_updates: r ? .fundraiser ? .updateCount || 0,
                            total_donations: r ? .fundraiser ? .donationCount || 0,
                            total_unique_donors: r ? .fundraiser ? .uniqueDonorCount || 0,
                            amount_raised_unattributed: r ? .fundraiser ? .unattributedDonationCounts ? .amountRaisedUnattributedNumber || 0,
                            number_of_donations_unattributed: r ? .fundraiser ? .unattributedDonationCounts ? .numberOfDonationsUnattributed || 0,
                            campaign_hearts: r ? .fundraiser ? .heartCount || 0,
                            social_share_total: r ? .fundraiser ? .socialShareCount || 0
                        },
                        loading: t
                    }
                }({
                    fundraiserSlug: e || "",
                    skip: !e
                });
                return n
            }
        },
        126500: function(e, n, r) {
            r.d(n, {
                f: function() {
                    return o
                }
            });
            var t = r(931439),
                a = r(45798),
                i = r(497914);

            function o() {
                let {
                    countryCodeFromIP: e
                } = (0, a.bN)();
                return e ? .length === 2 ? i.n[e] : t.UF
            }
        },
        850322: function(e, n, r) {
            r.d(n, {
                fp: function() {
                    return _
                },
                es: function() {
                    return s
                },
                QS: function() {
                    return d
                },
                _O: function() {
                    return l
                },
                Iy: function() {
                    return c
                },
                tp: function() {
                    return f
                }
            });
            var t = r(230992),
                a = r(77655),
                i = r(618158),
                o = r(712797),
                u = r(286290);

            function s(e) {
                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return {
                    name: e.fundraiser_name,
                    category: e.fundraiser_category,
                    sku: `${e.fundraiser_id}`,
                    attributes: { ...e,
                        ...n
                    }
                }
            }

            function c() {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    n = (0, i.Ke)(),
                    r = (0, a.g)(),
                    o = (0, t.J)();
                return function(t, a) {
                    let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    n(t, a, { ...(0, u.De)(r, e ? o : void 0),
                        ...i
                    })
                }
            }

            function d(e) {
                let {
                    counts: n,
                    fundraiser: r,
                    ...t
                } = e;
                return { ...t,
                    ...(0, u.De)(r, n)
                }
            }

            function f() {
                let e = (0, i.Ke)(),
                    n = (0, a.g)(),
                    r = (0, t.J)();
                return (t, a) => {
                    e("Share CTA Clicked", i.Bs.Navigation, d({
                        placement: t,
                        text: a,
                        fundraiser: n,
                        counts: r
                    }))
                }
            }

            function l() {
                let e = c(!0),
                    n = (0, a.g)();
                return function(r, t, a) {
                    let o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                    e("Donate CTA Clicked", i.Bs.Navigation, {
                        link_url: a,
                        payment_processor: n.paymentProcessor ? .toLowerCase(),
                        placement: r,
                        text: t,
                        ...o
                    })
                }
            }

            function _(e) {
                switch (e) {
                    case o.fs.ADYEN:
                        return "adyen";
                    case o.fs.BRAINTREE:
                        return "braintree";
                    case o.fs.PPGF:
                        return "paypal giving fund";
                    case o.fs.STRIPE:
                        return "stripe";
                    default:
                        return
                }
            }
        },
        286290: function(e, n, r) {
            r.d(n, {
                De: function() {
                    return m
                },
                PV: function() {
                    return _
                },
                Qv: function() {
                    return l
                },
                dL: function() {
                    return h
                }
            });
            var t = r(275271),
                a = r(479140),
                i = r(893269),
                o = r(618158),
                u = r(637469),
                s = r(526827),
                c = r(657439);

            function d(e) {
                switch (e) {
                    case u.DDH.FACEBOOK_AWS:
                    case u.DDH.PHOTO_AWS:
                    case u.DDH.PHOTO_RACK:
                    case u.DDH.FACEBOOK_ONLY:
                    case u.DDH.FACEBOOK_PAGE_AWS:
                    case u.DDH.FACEBOOK_PAGE_RACK:
                    case u.DDH.FACEBOOK_RACK:
                    case u.DDH.PHOTO_GFMPRO:
                        return "photo";
                    case u.DDH.GFM_MUX_CLIPS:
                        return "clip";
                    case u.DDH.VIMEO:
                    case u.DDH.YOUTUBE:
                        return "video";
                    case u.DDH.UNKNOWN:
                        return "unknown"
                }
            }

            function f(e) {
                return e === u.qbd.ACTIVE ? "published" : "disabled"
            }

            function l(e) {
                let {
                    fundraiser_type_id: n,
                    fundraiser_type: r
                } = e.projectType === u.cdz.GIVING_FUND ? o.xq.GIVING_FUND : e.charity ? o.xq.CHARITY : e.beneficiary ? o.xq.SOMEONE_ELSE : o.xq.PERSONAL, t = e.publishedAt ? (0, a.Z)(new Date(e.publishedAt), "yyyy-MM-dd") : void 0;
                return {
                    fundraiser_amount_raised: e.currentAmount.amount,
                    fundraiser_category_id: Number(e.categoryId),
                    fundraiser_category: (0, s._s)(e.categoryId).keyname.toLowerCase(),
                    fundraiser_charity_id: Number(e.charity ? .id) || 0,
                    fundraiser_charity_name: e.charity ? .name || "",
                    fundraiser_country: e ? .location ? .countryCode || "",
                    fundraiser_created_date: t,
                    fundraiser_currency: e.goalAmount.currencyCode,
                    fundraiser_goal_amount: e.goalAmount.amount,
                    fundraiser_has_donations_enabled: e.donationsEnabled,
                    fundraiser_has_gfmorg_donation: e.hasGfmOrgDonation,
                    fundraiser_has_team: e.teamMembers ? .length > 1,
                    fundraiser_id: Number(e.fundId),
                    fundraiser_media_type: e.mediaType ? d(e.mediaType) : "unknown",
                    fundraiser_name: e.title,
                    fundraiser_partner_id: Number(e ? .partner ? .id) || void 0,
                    fundraiser_status: f(e.status),
                    fundraiser_story_char_count: e.description.length,
                    fundraiser_title_char_count: e.title.length,
                    fundraiser_type_id: n,
                    fundraiser_type: r,
                    fundraiser_us_vs_intl_flag: e ? .location ? .countryCode === "US" ? "us" : "international",
                    fundraiser_zip: e ? .location ? .postalCode || ""
                }
            }

            function _(e) {
                return (0, t.useMemo)(() => l(e), [e])
            }

            function m(e, n) {
                let {
                    fundraiser_type_id: r,
                    fundraiser_type: t
                } = e ? .projectType === u.cdz.GIVING_FUND ? o.xq.GIVING_FUND : e.charity ? o.xq.CHARITY : e.beneficiary ? o.xq.SOMEONE_ELSE : o.xq.PERSONAL, i = e.publishedAt ? (0, a.Z)(new Date(e.publishedAt), "yyyy-MM-dd") : void 0;
                return {
                    fundraiser_amount_raised: e.currentAmount ? .amount || 0,
                    fundraiser_category_id: e.categoryId ? Number(e.categoryId) : 0,
                    fundraiser_category: (0, s._s)(e.categoryId).keyname.toLowerCase(),
                    fundraiser_charity_id: e.charity ? .id ? Number(e.charity.id) : 0,
                    fundraiser_charity_name: e.charity ? .name || "",
                    fundraiser_country: e ? .location ? .countryCode || void 0,
                    fundraiser_created_date: i,
                    fundraiser_currency: e.currentAmount ? .currencyCode,
                    fundraiser_goal_amount: e.goalAmount ? .amount || 0,
                    fundraiser_has_donations_enabled: e.donationsEnabled,
                    fundraiser_has_gfmorg_donation: e.hasGfmOrgDonation,
                    fundraiser_has_team: !!(e.teamMembers && e.teamMembers.length > 1),
                    fundraiser_id: e.fundId ? Number(e.fundId) : 0,
                    fundraiser_media_type: e.mediaType ? d(e.mediaType) : "unknown",
                    fundraiser_name: e.title,
                    ...n ? {
                        fundraiser_num_comments: n.total_comments,
                        fundraiser_num_donations: n.total_donations,
                        fundraiser_num_updates: n.total_updates
                    } : {},
                    fundraiser_partner_id: e.partner ? .id ? Number(e.partner.id) : void 0,
                    fundraiser_status: f(e.status),
                    fundraiser_story_char_count: c.F(e ? .description) ? .length || 0,
                    fundraiser_title_char_count: (e.title || "").length,
                    fundraiser_type_id: r,
                    fundraiser_type: t,
                    fundraiser_us_vs_intl_flag: e ? .location ? .countryCode === "US" ? "us" : "international",
                    fundraiser_zip: e ? .location ? .postalCode
                }
            }

            function h(e) {
                let n = e.createdAt ? (0, a.Z)(new Date(e.createdAt), "yyyy-MM-dd") : void 0,
                    {
                        fundraiser_type_id: r,
                        fundraiser_type: t
                    } = e.projectType === i.Zp.GIVING_FUND ? o.xq.GIVING_FUND : e.beneficiary ? .fullName ? o.xq.SOMEONE_ELSE : e.charityName ? o.xq.CHARITY : o.xq.PERSONAL;
                return {
                    fundraiser_amount_raised: e.currentAmount,
                    fundraiser_category_id: Number(e.categoryId),
                    fundraiser_category: (0, s.n3)(Number(e.categoryId), e.url).keyname.toLowerCase(),
                    fundraiser_charity_id: Number(e.charityId),
                    fundraiser_charity_name: e.charityName,
                    fundraiser_country: e.country,
                    fundraiser_created_date: n,
                    fundraiser_currency: e.currencyCode,
                    fundraiser_goal_amount: e.goalAmount,
                    fundraiser_has_donations_enabled: e.hasDonationsEnabled,
                    fundraiser_has_gfmorg_donation: e.hasGfmOrgDonation,
                    fundraiser_has_team: e.hasTeam,
                    fundraiser_id: Number(e.fundId),
                    fundraiser_media_type: d(e.mediaType),
                    fundraiser_name: e.name,
                    fundraiser_num_donations: e.donationCount,
                    fundraiser_partner_id: e.partnerId,
                    fundraiser_status: 1 === e.status ? "published" : "disabled",
                    fundraiser_story_char_count: e.description.length,
                    fundraiser_title_char_count: e.name.length,
                    fundraiser_type_id: r,
                    fundraiser_type: t,
                    fundraiser_us_vs_intl_flag: e ? .country === "US" ? "us" : "international",
                    fundraiser_zip: e.zip
                }
            }
        },
        526827: function(e, n, r) {
            r.d(n, {
                RK: function() {
                    return a
                },
                n3: function() {
                    return i
                },
                _s: function() {
                    return o
                }
            });
            var t = r(363456);
            let a = () => ({
                    10: {
                        href: "/discover/travel-fundraiser",
                        keyname: "Travel",
                        name: (0, t.t)("Travel")
                    },
                    11: {
                        href: "/discover/medical-fundraiser",
                        keyname: "Medical",
                        name: (0, t.t)("Medical")
                    },
                    12: {
                        href: "/discover/faith-fundraiser",
                        keyname: "Faith",
                        name: (0, t.t)("Faith")
                    },
                    13: {
                        href: "/discover/charity-fundraiser",
                        keyname: "Charity",
                        name: (0, t.t)("Non-Profits & Charities")
                    },
                    14: {
                        href: "/discover/newlywed-fundraiser",
                        keyname: "Newlyweds",
                        name: (0, t.t)("Newlyweds")
                    },
                    15: {
                        href: "/discover",
                        keyname: "Other",
                        name: (0, t.t)("Other")
                    },
                    16: {
                        href: "/discover/sports-fundraiser",
                        keyname: "Sports",
                        name: (0, t.t)("Sports")
                    },
                    17: {
                        href: "/discover/education-fundraiser",
                        keyname: "Education",
                        name: (0, t.t)("Education")
                    },
                    18: {
                        href: "/discover/volunteer-fundraiser",
                        keyname: "Volunteer",
                        name: (0, t.t)("Volunteer")
                    },
                    19: {
                        href: "/discover/competition-fundraiser",
                        keyname: "Competitions",
                        name: (0, t.t)("Competitions")
                    },
                    2: {
                        href: "/discover/emergency-fundraiser",
                        keyname: "Emergencies",
                        name: (0, t.t)("Emergencies")
                    },
                    20: {
                        href: "/discover/wishes-fundraiser",
                        keyname: "Wishes",
                        name: (0, t.t)("Wishes")
                    },
                    3: {
                        href: "/discover/animal-fundraiser",
                        keyname: "Animals",
                        name: (0, t.t)("Animals")
                    },
                    342: {
                        href: "/discover/environment-fundraiser",
                        keyname: "Environment",
                        name: (0, t.t)("Environment")
                    },
                    344: {
                        href: "/discover/financial-emergency-fundraiser",
                        keyname: "Bills",
                        name: (0, t.t)("Rent, Food & Monthly Bills")
                    },
                    4: {
                        href: "/discover/family-fundraiser",
                        keyname: "Family",
                        name: (0, t.t)("Family")
                    },
                    5: {
                        href: "/discover/business-fundraiser",
                        keyname: "Business",
                        name: (0, t.t)("Business")
                    },
                    6: {
                        href: "/discover/event-fundraiser",
                        keyname: "Events",
                        name: (0, t.t)("Events")
                    },
                    7: {
                        href: "/discover/community-fundraiser",
                        keyname: "Community",
                        name: (0, t.t)("Community")
                    },
                    8: {
                        href: "/discover/creative-fundraiser",
                        keyname: "Creative",
                        name: (0, t.t)("Creative")
                    },
                    9: {
                        href: "/discover/memorial-fundraiser",
                        keyname: "Memorials",
                        name: (0, t.t)("Funerals & Memorials")
                    }
                }),
                i = (e, n) => {
                    let r = a();
                    if (void 0 === e) return console.error(`Unexpected undefined value. Variable: id, campaign url: ${n}`), r["15"];
                    let i = r[e.toString()] ? r[e.toString()] : r[15];
                    return { ...i,
                        name: (0, t.t)(i.name)
                    }
                },
                o = e => {
                    let n = a(),
                        r = n[e] ? n[e] : n["15"];
                    return { ...r,
                        name: (0, t.t)(r.name)
                    }
                }
        },
        657439: function(e, n, r) {
            r.d(n, {
                F: function() {
                    return a
                }
            });
            var t = r(363456);

            function a(e) {
                if (!e) return e;
                let n = e.replace(/\[email redacted\]/g, (0, t.t)("[email redacted]")).replace(/\[phone redacted\]/g, (0, t.t)("[phone redacted]")).replace(/alt=(?:'|")[^'"]*(?:'|")/g, 'alt=""');
                return (n = n.replace(/<img\s+[^>]*src=["']https:\/\/i\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)\/0\.jpg["'][^>]*>/gi, (e, n) => `<iframe media_type="0" media_id="${n}" class="youtube-replace" title="${(0,t.t)("YouTube video player")}" style="margin-bottom:20px;width:560px;height:315px;" src="https://www.youtube-nocookie.com/embed/${n}/?rel=0" frameborder="0" allowfullscreen="1"></iframe>`)).replace(/(<iframe[^>]*src=["'])([^"']*)(youtube\.com)([^"']*)(["'][^>]*>)/gi, "$1$2youtube-nocookie.com$4$5")
            }
        },
        565569: function(e, n, r) {
            r.d(n, {
                St: function() {
                    return i
                },
                lD: function() {
                    return u
                },
                D9: function() {
                    return o
                }
            });
            var t = r(600488),
                a = r(329721);

            function i(e) {
                try {
                    return sessionStorage.getItem(e)
                } catch (n) {
                    return !(0, t.yv)() && (0, a.ML)() && console.log(`${e} cannot be retrieved from session storage`, n), null
                }
            }

            function o(e, n) {
                try {
                    return sessionStorage.setItem(e, n), !0
                } catch (n) {
                    return !(0, t.yv)() && (0, a.ML)() && console.log(`${e} cannot be set in session storage`, n), !1
                }
            }

            function u(e) {
                try {
                    return sessionStorage.removeItem(e), !0
                } catch (n) {
                    return !(0, t.yv)() && (0, a.ML)() && console.log(`${e} cannot be removed from session storage`, n), !1
                }
            }
        },
        146857: function(e, n, r) {
            r.d(n, {
                GO: function() {
                    return t
                },
                f1: function() {
                    return a
                }
            });
            let t = "sl:",
                a = "attribution-"
        },
        147695: function(e, n, r) {
            r.d(n, {
                GO: function() {
                    return t.GO
                },
                $p: function() {
                    return u.$p
                },
                bC: function() {
                    return o
                },
                Ec: function() {
                    return i.E
                },
                qx: function() {
                    return s
                }
            });
            var t = r(146857);
            r(74462);
            var a = r(275271),
                i = r(259457);

            function o(e) {
                let {
                    campaignSlug: n,
                    getShareUrl: r
                } = e, [t, o] = (0, a.useState)(""), {
                    isLoading: u
                } = (0, i.E)({
                    campaignSlug: n
                });
                return (0, a.useEffect)(() => {
                    u || r().then(o)
                }, [u]), t
            }
            var u = r(795057);
            let s = (e, n) => {
                e && n && (0, u.GD)(`${e}`, `${n}`)
            }
        },
        74462: function(e, n, r) {
            r.d(n, {
                V: function() {
                    return a
                }
            });
            var t = r(637469);
            let a = e => {
                let [n, r] = (0, t.wSA)(e);
                return [(e, r, t, a, i) => n({
                    variables: {
                        input: {
                            fundSlug: e,
                            checkoutId: r,
                            email: t,
                            analyticsId: a
                        }
                    },
                    ...i
                }), r]
            }
        },
        259457: function(e, n, r) {
            r.d(n, {
                E: function() {
                    return c
                }
            });
            var t = r(53032),
                a = r(618158),
                i = r(24352),
                o = r(146857),
                u = r(74462),
                s = r(795057);
            let c = function(e) {
                let {
                    campaignSlug: n,
                    checkoutId: r,
                    email: c
                } = e, d = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], [f] = (0, u.V)(), {
                    isValidating: l,
                    isLoading: _
                } = (0, i.jY)(), [m, h] = (0, s.yb)(n), y = r || m, g = c || h, p = (0, a.lO)(), E = p && !d && !_ && !l, {
                    data: v,
                    isLoading: D
                } = (0, t.Z)(E ? [n, "getSmartLinkId"] : null, async () => {
                    let e = await f(n, y, g, p).catch(() => void 0);
                    if (e ? .data ? .createSmartLink ? .attributionID) return `${o.GO}${e.data.createSmartLink.attributionID}`
                });
                return v ? {
                    attribution_id: v,
                    isLoading: D
                } : {
                    isLoading: _ || D || !p
                }
            }
        },
        795057: function(e, n, r) {
            r.d(n, {
                $p: function() {
                    return s
                },
                GD: function() {
                    return l
                },
                yb: function() {
                    return d
                }
            });
            var t = r(329721),
                a = r(600563),
                i = r(565569),
                o = r(146857);
            let u = e => `${o.f1}${e}`,
                s = (e, n) => f(n) ? n : (0, t.ML)() && e ? c(e) : null,
                c = e => {
                    let n = u(e);
                    return (0, a.le)(n)
                },
                d = e => {
                    try {
                        let n = (0, i.St)("guestCheckout"),
                            r = (0, i.St)(`donation.${e}`),
                            t = JSON.parse(r || "{}") ? .checkout_id,
                            a = JSON.parse(r || "{}") ? .checkoutId,
                            o = JSON.parse(n || "{}") ? .email;
                        return [t ? t + "" : a ? a + "" : void 0, o ? o + "" : void 0]
                    } catch {}
                    return []
                },
                f = e => {
                    let n = RegExp(`^${o.GO}`);
                    return e && n.test(e)
                },
                l = (e, n) => {
                    let r = f(n),
                        i = u(e);
                    r && (0, t.ML)() && (0, a.D$)(i, n)
                }
        }
    }
]);
//# sourceMappingURL=73193-50069d27a0209f4d.js.map