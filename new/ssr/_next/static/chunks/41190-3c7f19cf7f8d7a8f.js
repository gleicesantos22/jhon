(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [41190], {
        455518: function(e, t, n) {
            "use strict";
            n.d(t, {
                J: function() {
                    return r.J
                },
                r: function() {
                    return i.r
                }
            });
            var r = n(287808),
                i = n(527795)
        },
        570733: function(e, t, n) {
            "use strict";
            n.d(t, {
                C: function() {
                    return i.C
                },
                J: function() {
                    return r.J
                }
            });
            var r = n(287808),
                i = n(934821)
        },
        31896: function(e, t, n) {
            "use strict";
            n.d(t, {
                JO: function() {
                    return r.J
                },
                jH: function() {
                    return i.j
                },
                nv: function() {
                    return l.n
                }
            });
            var r = n(287808),
                i = n(758655),
                l = n(5847)
        },
        695405: function(e, t, n) {
            "use strict";
            n.d(t, {
                A: function() {
                    return i.A
                },
                J: function() {
                    return r.J
                }
            });
            var r = n(287808),
                i = n(312802)
        },
        299794: function(e, t, n) {
            "use strict";
            n.d(t, {
                k: function() {
                    return r.k
                }
            });
            var r = n(708349)
        },
        46849: function(e, t, n) {
            "use strict";
            n.d(t, {
                d: function() {
                    return i
                },
                v: function() {
                    return l
                }
            });
            var r = n(600488);
            let i = !!(0, r.yv)(),
                l = (0, r.kc)(e => {
                    let {
                        environment: t
                    } = e;
                    return {
                        algolia: {
                            appId: "E7PHE9BB38",
                            charitiesHitIndex: "production" === t.host ? "charities_feed" : "charities_staging_feed",
                            fundsHitIndex: "production" === t.host ? "prod_funds_feed_replica_1" : "test01_funds_feed_replica_1",
                            queryIndex: "production" === t.host ? "prod_funds_query_suggestions" : "gfm-test01_funds_var_3_query_suggestions",
                            searchApiKey: "113bf60bccbbcc611baacee9a82a1cf9"
                        }
                    }
                })
        },
        30310: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SuggestionsRenderModes: function() {
                    return i
                },
                default: function() {
                    return er
                }
            });
            var r, i, l = n(552676),
                a = n(275271),
                o = n(282187),
                s = n.n(o),
                c = n(742588),
                u = n(438677),
                d = n(128973),
                f = n(28555),
                m = n(900411),
                _ = n(560352),
                h = n(287808),
                p = n(380480),
                g = n(758655),
                y = n(502802),
                E = n(928059),
                b = n(878105),
                v = n(893269),
                N = n(45798),
                x = n(363456),
                A = n(1450),
                I = n.n(A),
                j = n(656467);
            let R = e => {
                let {
                    hits: t
                } = (0, f.O)(), [n, r] = (0, a.useState)([]), {
                    countryCode: i
                } = (0, N.bN)();
                return (0, a.useEffect)(() => {
                    let n, l = null,
                        a = null,
                        o = t.map(e => (0, j.f)(e, i));
                    o.forEach(e => {
                        if (e.major_city && e.city !== e.major_city) {
                            let t = e._highlightResult ? .major_city;
                            l = (0, j.f)({ ...e,
                                city: e.major_city,
                                _highlightResult: { ...e._highlightResult,
                                    city: e._highlightResult ? .major_city
                                }
                            }, i), a = t.matchLevel
                        }
                    }), n = l && "full" === a ? [l, ...o.slice(0, 4)] : l && "partial" === a ? [...o.slice(0, 1), l, ...o.slice(2, 5)] : l ? [...o.slice(0, 4), l] : o;
                    let s = I()(n, e => e.local_description);
                    r(s), e && e(s)
                }, [t]), {
                    hits: n
                }
            };
            var O = n(695405),
                T = n(923425),
                S = n.n(T);
            let C = e => {
                let {
                    children: t,
                    dataElementId: n,
                    dataLocationFilter: r,
                    iconName: i,
                    onClick: a
                } = e;
                return (0, l.jsx)(O.A, {
                    className: S().txtButton,
                    "data-element-id": n,
                    "data-location-filter": r,
                    onClick: a,
                    children: (0, l.jsxs)("li", {
                        className: S().listItem,
                        children: [(0, l.jsx)(O.J, {
                            name: i,
                            size: "small"
                        }), (0, l.jsx)("span", {
                            className: S().txt,
                            children: t
                        })]
                    })
                })
            };
            var L = n(543771),
                k = n.n(L);
            let P = e => {
                let {
                    children: t
                } = e;
                return (0, l.jsx)("ul", {
                    className: k().list,
                    children: t
                })
            };
            var F = n(53032),
                M = n(141772),
                q = n(600563);
            let w = "location-filter-recent",
                $ = e => !!Array.isArray(e) && !(e.length > 2) && e.every(e => "string" == typeof e.description && "number" == typeof e.lat && "number" == typeof e.lng),
                J = () => {
                    (0, q.e8)(w)
                },
                Y = () => {
                    let e = (0, q.le)(w) || "[]";
                    try {
                        let t = JSON.parse(e);
                        if ($(t)) return t;
                        J()
                    } catch (e) {
                        console.error(e)
                    }
                    return []
                },
                U = e => {
                    if (!e) return;
                    let t = Y(),
                        n = t.findIndex(t => t.description === e.description && Math.abs(t.lat - e.lat) < Number.EPSILON && Math.abs(t.lng - e.lng) < Number.EPSILON); - 1 !== n && t.splice(n, 1), t.splice(0, 0, e);
                    let r = t.slice(0, 2);
                    try {
                        let e = JSON.stringify(r);
                        (0, q.D$)(w, e)
                    } catch (e) {
                        console.error(e)
                    }
                },
                D = e => {
                    let {
                        className: t,
                        onSuggestionClicked: n
                    } = e, {
                        data: r = [],
                        isLoading: i
                    } = (0, F.Z)("nearby-locations", () => (0, M.a)(3)), [o, s] = (0, a.useState)([]), {
                        countryCode: c
                    } = (0, N.bN)();
                    return ((0, a.useEffect)(() => {
                        s(Y())
                    }, []), i) ? null : (0, l.jsxs)("div", {
                        className: t,
                        children: [!!r.length && (0, l.jsxs)("div", {
                            className: o.length > 0 ? "hrt-mb-3" : "hrt-mb-2",
                            children: [(0, l.jsx)("h3", {
                                className: "hrt-mb-1 hrt-ml-2",
                                children: (0, x.t)("Near you")
                            }), (0, l.jsx)(P, {
                                children: r.map((e, t) => {
                                    let r = (0, E.Z)(e, c);
                                    return (0, l.jsx)(C, {
                                        dataElementId: "nearby_city",
                                        dataLocationFilter: r.description,
                                        iconName: "location",
                                        onClick: () => n(r),
                                        children: r.description
                                    }, `nearby-${t}`)
                                })
                            })]
                        }), o.length > 0 && (0, l.jsxs)("div", {
                            children: [(0, l.jsx)("h3", {
                                className: "hrt-mb-1 hrt-ml-2",
                                children: (0, x.t)("Recent")
                            }), (0, l.jsx)(P, {
                                children: o.map((e, t) => (0, l.jsx)(C, {
                                    dataElementId: "recent_search_result",
                                    dataLocationFilter: e.description,
                                    iconName: "clock",
                                    onClick: () => n(e),
                                    children: e.description
                                }, `recent-${t}`))
                            })]
                        })]
                    })
                };
            var Q = n(980176),
                H = n.n(Q);
            let B = e => {
                let {
                    locationSearchTerm: t,
                    className: n,
                    onHitsChange: r,
                    onSuggestionClicked: i
                } = e, {
                    countryCode: a
                } = (0, N.bN)(), {
                    hits: o
                } = R(r);
                return (0, l.jsx)("div", {
                    className: n,
                    children: o.length ? (0, l.jsx)(P, {
                        children: o.map((e, t) => {
                            let n = (0, E.Z)(e, a);
                            return (0, l.jsx)(C, {
                                iconName: "search",
                                onClick: () => i(n),
                                children: (0, l.jsx)("span", {
                                    className: H().autoCompleteText,
                                    dangerouslySetInnerHTML: {
                                        __html: n.__html
                                    }
                                })
                            }, t)
                        })
                    }) : (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)("div", {
                            className: "hrt-pl-2",
                            children: (0, l.jsx)("p", {
                                className: H().noResultsText,
                                children: (0, l.jsxs)(x.cC, {
                                    children: ["We couldn’t find results for ", (0, l.jsx)("strong", {
                                        children: {
                                            locationSearchTerm: t
                                        }
                                    })]
                                })
                            })
                        }), (0, l.jsx)(D, {
                            className: "hrt-mt-3 hrt-mb-2",
                            onSuggestionClicked: i
                        })]
                    })
                })
            };
            var G = n(786763),
                z = n.n(G),
                V = n(962810),
                Z = n(31896),
                K = n(783955),
                W = n(901234),
                X = n.n(W);
            let ee = e => {
                let {
                    id: t,
                    onReset: n,
                    onInputFocus: r,
                    autoFocus: i = !1
                } = e, {
                    refine: o,
                    clear: u
                } = (0, V.l)(), [d, f] = (0, a.useReducer)(() => !0, !1), m = (0, a.useCallback)(z()(e => {
                    o(e)
                }, y.Je), []);
                return (0, l.jsx)(c.gN, {
                    name: t,
                    children: e => {
                        let {
                            input: a
                        } = e;
                        return (0, l.jsxs)(l.Fragment, {
                            children: [(0, l.jsx)("label", {
                                className: s()("hrt-text-body-md", "hrt-text-supporting", "hrt-mb-3", "hrt-disp-block"),
                                htmlFor: t,
                                children: (0, x.t)("Search for any city or zip code worldwide")
                            }), (0, l.jsx)(Z.nv, {
                                autoFocus: i,
                                className: X().filterInput,
                                icon: (0, l.jsx)(Z.JO, {
                                    name: "search",
                                    size: "small"
                                }),
                                id: t,
                                label: "",
                                onChange: e => {
                                    a.onChange(e), m(e.target.value), !d && e.target.value ? .trim().length > 0 && (K.mt.push({
                                        type: "search_location_filter_user_input"
                                    }), f())
                                },
                                onFocus: r,
                                placeholder: (0, x.t)("City or zip code"),
                                tag: a.value ? .trim().length > 0 ? (0, l.jsx)(Z.jH, {
                                    as: "button",
                                    buttonLabel: "Clear Input",
                                    onClick: () => {
                                        n(), u()
                                    },
                                    size: "small",
                                    children: (0, l.jsx)(Z.JO, {
                                        name: "delete",
                                        size: "small"
                                    })
                                }) : void 0,
                                value: a.value
                            })]
                        })
                    }
                })
            };
            var et = n(29437),
                en = n.n(et);
            (r = i || (i = {}))[r.INLINE = 0] = "INLINE", r[r.POPOVER = 1] = "POPOVER";
            let er = e => {
                let {
                    activeLocationFilter: t,
                    onClose: n,
                    setActiveLocationFilter: r,
                    suggestionsRenderMode: i = 0,
                    showHeader: o = !0,
                    isStandaloneModal: A = !0,
                    setIsLocationInputFocused: I = () => null,
                    autoFocus: j = !1
                } = e, [R, O] = (0, a.useState)(!1), [T, S] = (0, a.useState)(null), [C, L] = (0, a.useState)("0"), k = (0, a.useRef)(null), P = (0, a.useRef)(null), [F, M] = (0, a.useState)(!1), {
                    refs: q
                } = (0, m.YF)({
                    middleware: [(0, _.dp)({
                        apply(e) {
                            let {
                                rects: t
                            } = e;
                            L(`${t.reference.width}px`)
                        }
                    })]
                }), {
                    countryCode: w
                } = (0, N.bN)();
                return (0, a.useEffect)(() => {
                    if (!k.current) return;
                    let e = () => {
                        (k.current ? .scrollTop || 0) > 0 ? M(!0) : M(!1)
                    };
                    return k.current.addEventListener("scroll", e), () => {
                        k.current && k.current.removeEventListener("scroll", e)
                    }
                }, [k.current]), (0, l.jsxs)(u.p, {
                    indexName: v.aC,
                    searchClient: b.Ec,
                    children: [(0, l.jsx)(d.T, { ...y.kP
                    }), (0, l.jsx)("div", {
                        className: s()(en().container, {
                            [en().standaloneModal]: A
                        }),
                        ref: k,
                        children: (0, l.jsx)(c.l0, {
                            initialValues: {
                                location: t ? .description ? ? "",
                                locFilter: null
                            },
                            mutators: {
                                setLocationValue: (e, t, n) => {
                                    let [r] = e, {
                                        changeValue: i
                                    } = n;
                                    i(t, "location", () => r)
                                },
                                setLocFilter: (e, t, n) => {
                                    let [r] = e, {
                                        changeValue: i
                                    } = n;
                                    i(t, "locFilter", () => r)
                                }
                            },
                            onSubmit: e => {
                                if (!e.location || !e.locFilter && !T) return {};
                                let t = e.locFilter || (0, E.Z)(T, w);
                                r(t), t && (U(t), O(!1), n ? .())
                            },
                            children: function(e) {
                                let a, {
                                        form: s,
                                        handleSubmit: u,
                                        values: d
                                    } = e,
                                    {
                                        results: m
                                    } = (0, f.O)(),
                                    _ = e => {
                                        s.mutators.setLocationValue(e.description), s.mutators.setLocFilter(e), s.submit()
                                    };
                                return (0, l.jsx)(l.Fragment, {
                                    children: (0, l.jsxs)("div", {
                                        className: "hrt-position-relative",
                                        onBlur: e => {
                                            e.relatedTarget === e.currentTarget || e.currentTarget.contains(e.relatedTarget) || (O(!1), I(!1))
                                        },
                                        ref: q.setReference,
                                        tabIndex: -1,
                                        children: [(0, l.jsxs)("form", {
                                            className: en().form,
                                            onSubmit: u,
                                            ref: P,
                                            children: [o && (0, l.jsxs)("div", {
                                                className: "hrt-disp-flex hrt-align-center hrt-justify-between hrt-font-bold hrt-position-relative",
                                                children: [(0, l.jsx)("h3", {
                                                    className: en().title,
                                                    children: (0, x.t)("Location")
                                                }), n && (0, l.jsx)(g.j, {
                                                    as: "button",
                                                    buttonLabel: "close location filter",
                                                    className: en().close,
                                                    onClick: n,
                                                    size: "large",
                                                    children: (0, l.jsx)(h.J, {
                                                        name: "close",
                                                        size: "default"
                                                    })
                                                })]
                                            }), (0, l.jsx)(ee, {
                                                autoFocus: j,
                                                id: "location",
                                                onInputFocus: () => {
                                                    O(!0), I(!0)
                                                },
                                                onReset: () => {
                                                    s.mutators.setLocationValue(null), r(null)
                                                }
                                            }), (0, l.jsx)(c.gN, {
                                                component: "input",
                                                name: "locFilter",
                                                type: "hidden"
                                            }), F && (0, l.jsx)(p.$, {
                                                className: en().rule,
                                                type: "horizontal"
                                            })]
                                        }), (0, l.jsx)("div", {
                                            className: en().content,
                                            children: (a = (0, l.jsx)(D, {
                                                className: "hrt-mt-3 hrt-mb-2",
                                                onSuggestionClicked: _
                                            }), (m ? .query !== "" && d ? .location !== t ? .description && (a = (0, l.jsx)(B, {
                                                className: "hrt-mt-2 hrt-mb-1",
                                                locationSearchTerm: d.location,
                                                onHitsChange: e => S(e.length ? e[0] : null),
                                                onSuggestionClicked: _
                                            })), 0 === i) ? a : 1 === i && R ? (0, l.jsx)("div", {
                                                className: en().popoverContainer,
                                                ref: q.setFloating,
                                                style: {
                                                    width: C
                                                },
                                                children: a
                                            }) : null)
                                        })]
                                    })
                                })
                            }
                        })
                    })]
                })
            }
        },
        502802: function(e, t, n) {
            "use strict";
            var r, i, l, a, o, s, c;
            n.d(t, {
                Eu: function() {
                    return x
                },
                Fm: function() {
                    return v
                },
                Iq: function() {
                    return y
                },
                Iu: function() {
                    return d
                },
                J: function() {
                    return O
                },
                Je: function() {
                    return E
                },
                M: function() {
                    return u
                },
                Oe: function() {
                    return I
                },
                Op: function() {
                    return A
                },
                QUERY_PARAMS: function() {
                    return l
                },
                _P: function() {
                    return R
                },
                aW: function() {
                    return N
                },
                au: function() {
                    return p
                },
                by: function() {
                    return h
                },
                dl: function() {
                    return _
                },
                gz: function() {
                    return j
                },
                i2: function() {
                    return f
                },
                if: function() {
                    return i
                },
                kP: function() {
                    return T
                },
                ni: function() {
                    return m
                },
                qf: function() {
                    return b
                },
                rC: function() {
                    return g
                },
                x_: function() {
                    return a
                }
            });
            let u = ["fundname", "username", "bene_name", "amount_to_goal"],
                d = [...u, "objectID", "thumb_img_url", "url"],
                f = ["jusobot", ".com", ".net", ".site", ".io"],
                m = 80467,
                _ = 100,
                h = "word",
                p = 6,
                g = 9,
                y = 48,
                E = 350,
                b = 500,
                v = 512,
                N = 3,
                x = "status=1 AND custom_complete=1 AND has_redirect_url!=1",
                A = 100,
                I = 56,
                j = 80,
                R = "search_fundraisers_by_time_period";
            (r || (r = {})).SEARCH = "search", (o = i || (i = {}))[o.Trending = 0] = "Trending", o[o.Nearby = 1] = "Nearby", o[o.Nonprofits = 2] = "Nonprofits", (s = l || (l = {})).CATEGORY = "c", s.CHARITY_ID = "charity_id", s.CLOSE_TO_GOAL = "close-to-goal", s.COLLECTION = "collection", s.GOAL_PROGRESS = "goal-progress", s.GUIDE = "guide", s.LOCATION_DESCRIPTION = "location-description", s.LOCATION_LAT = "location-lat", s.LOCATION_LNG = "location-lng", s.NEAR_YOU = "near-you", s.NONPROFITS = "nonprofits", s.PARTNER = "partner", s.QUERY = "q", s.TIME_PERIOD = "time-period", (c = a || (a = {})).ALMOST_THERE = "1", c.NEEDS_MOMENTUM = "2", c.JUST_GETTING_STARTED = "3";
            let O = {
                    1: "goal_progress:0.8 TO 0.999",
                    2: "goal_progress:0.2 TO 0.8",
                    3: "goal_progress<0.2"
                },
                T = {
                    aroundLatLngViaIP: !0,
                    distinct: !0,
                    aroundRadius: "all",
                    hitsPerPage: 5,
                    ranking: ["typo", "words", "filters", "proximity", "attribute", "exact", "custom", "geo"]
                }
        },
        928059: function(e, t, n) {
            "use strict";
            var r = n(656467);
            t.Z = (e, t) => {
                let {
                    local_description: n,
                    _geoloc: i
                } = e, {
                    lat: l,
                    lng: a
                } = i, o = (0, r.f)(e, t);
                return {
                    description: n || o.local_description,
                    __html: o.__html,
                    lat: l,
                    lng: a
                }
            }
        },
        480543: function(e, t, n) {
            "use strict";
            n.d(t, {
                C: function() {
                    return i
                }
            });
            var r = n(363456);
            let i = () => [{
                id: "17",
                key: "education",
                name: (0, r.t)("Education"),
                dataElementId: "btn_filter_category_education"
            }, {
                id: "3",
                key: "animals",
                name: (0, r.t)("Animals"),
                dataElementId: "btn_filter_category_animals"
            }, {
                id: "342",
                key: "environment",
                name: (0, r.t)("Environment"),
                dataElementId: "btn_filter_category_environment"
            }, {
                id: "5",
                key: "business",
                name: (0, r.t)("Business"),
                dataElementId: "btn_filter_category_business"
            }, {
                id: "11",
                key: "medical",
                name: (0, r.t)("Medical"),
                dataElementId: "btn_filter_category_medical"
            }, {
                id: "9",
                key: "funeral",
                name: (0, r.t)("Funeral"),
                dataElementId: "btn_filter_category_funeral"
            }, {
                id: "2",
                key: "emergency",
                name: (0, r.t)("Emergency"),
                dataElementId: "btn_filter_category_emergency"
            }, {
                id: "7",
                key: "community",
                name: (0, r.t)("Community"),
                dataElementId: "btn_filter_category_community"
            }, {
                id: "19",
                key: "competition",
                name: (0, r.t)("Competition"),
                dataElementId: "btn_filter_category_competition"
            }, {
                id: "8",
                key: "creative",
                name: (0, r.t)("Creative"),
                dataElementId: "btn_filter_category_creative"
            }, {
                id: "6",
                key: "event",
                name: (0, r.t)("Event"),
                dataElementId: "btn_filter_category_event"
            }, {
                id: "12",
                key: "faith",
                name: (0, r.t)("Faith"),
                dataElementId: "btn_filter_category_faith"
            }, {
                id: "4",
                key: "family",
                name: (0, r.t)("Family"),
                dataElementId: "btn_filter_category_family"
            }, {
                id: "16",
                key: "sports",
                name: (0, r.t)("Sports"),
                dataElementId: "btn_filter_category_sports"
            }, {
                id: "10",
                key: "travel",
                name: (0, r.t)("Travel"),
                dataElementId: "btn_filter_category_travel"
            }, {
                id: "18",
                key: "volunteer",
                name: (0, r.t)("Volunteer"),
                dataElementId: "btn_filter_category_volunteer"
            }, {
                id: "20",
                key: "wishes",
                name: (0, r.t)("Wishes"),
                dataElementId: "btn_filter_category_wishes"
            }, {
                id: "15",
                key: "other",
                name: (0, r.t)("Other"),
                dataElementId: "btn_filter_category_other"
            }]
        },
        894425: function(e, t, n) {
            "use strict";
            n.d(t, {
                cL: function() {
                    return i
                },
                f: function() {
                    return g
                },
                y: function() {
                    return m
                },
                gZ: function() {
                    return A
                },
                VU: function() {
                    return y
                },
                hV: function() {
                    return b
                },
                Sd: function() {
                    return E
                },
                $I: function() {
                    return v
                },
                Pe: function() {
                    return N
                },
                cJ: function() {
                    return h
                },
                Sn: function() {
                    return x
                },
                o2: function() {
                    return p
                },
                iF: function() {
                    return _
                },
                JD: function() {
                    return f
                }
            });
            var r, i, l = n(805662),
                a = n(502802),
                o = n(783955),
                s = n(480543),
                c = n(275271),
                u = n(920647),
                d = n(45798),
                f = () => {
                    let {
                        locale: e
                    } = (0, d.bN)(), t = (0, u.useRouter)(), {
                        [a.QUERY_PARAMS.QUERY]: n
                    } = t.query, r = v(t) > 0 || "" !== n ? "srp" : "empty state";
                    (0, c.useEffect)(() => {
                        let t = () => {
                            o.mt.getPlatform("Amplitude").setData({
                                languageUI: e,
                                basePage: "nextjs",
                                searchState: r
                            }), o.mt.push({
                                type: "mp_page_view",
                                viewId: "pg_srp"
                            })
                        };
                        return window.addEventListener("load", t), () => {
                            window.removeEventListener("load", t)
                        }
                    }, [])
                };
            (r = i || (i = {}))[r.EMPTY = 0] = "EMPTY", r[r.INLINE = 1] = "INLINE", r[r.STACKED = 2] = "STACKED";
            let m = (0, l.cn)(0),
                _ = (0, l.cn)(a.if.Trending),
                h = e => "" === e || e.length > a.Fm || a.i2.some(t => e.includes(t)),
                p = e => Object.entries(e).filter(e => {
                    let [t, n] = e;
                    return void 0 !== n
                }).reduce((e, t) => {
                    let [n, r] = t;
                    return { ...e,
                        [n]: r
                    }
                }, {}),
                g = e => "string" == typeof e ? [e] : e,
                y = e => {
                    let t = new Set((0, s.C)().map(e => e.id));
                    if (e) {
                        if (Array.isArray(e)) {
                            let n = e.reduce((e, n) => (t.has(n) && (e = 0 === e.length ? `category_id=${n}` : `${e} OR category_id=${n}`), e), "");
                            if (n.length > 0) return ` AND (${n})`
                        } else if (t.has(e)) return ` AND category_id=${e}`
                    }
                    return ""
                },
                E = e => {
                    let t = new Set(Object.values(a.x_).map(e => e));
                    if (e) {
                        if (!Array.isArray(e)) return ` AND ${a.J[e]}`; {
                            let n = e.filter(e => t.has(e)).map(e => `${a.J[e]}`).join(" OR ");
                            if (n.length > 0) return ` AND (${n})`
                        }
                    }
                    return ""
                },
                b = e => {
                    let {
                        CATEGORY: t,
                        CHARITY_ID: n,
                        CLOSE_TO_GOAL: r,
                        COLLECTION: i,
                        GOAL_PROGRESS: l,
                        LOCATION_DESCRIPTION: o,
                        LOCATION_LAT: c,
                        LOCATION_LNG: u,
                        NEAR_YOU: d,
                        NONPROFITS: f,
                        PARTNER: m,
                        TIME_PERIOD: _
                    } = a.QUERY_PARAMS, h = (0, s.C)();
                    return p({
                        [t]: g(e.query[t]) ? .filter(e => h.map(e => {
                            let {
                                id: t
                            } = e;
                            return t
                        }).includes(e)),
                        [n]: e.query[n],
                        [r]: e.query[r],
                        [i]: e.query[i],
                        [l]: g(e.query[l]) ? .filter(e => Object.values(a.x_).map(e => e).includes(e)),
                        [o]: e.query[o],
                        [c]: e.query[c],
                        [u]: e.query[u],
                        [d]: e.query[d],
                        [f]: e.query[f],
                        [m]: e.query[m],
                        [_]: e.query[_]
                    })
                },
                v = e => {
                    let {
                        CATEGORY: t,
                        CHARITY_ID: n,
                        CLOSE_TO_GOAL: r,
                        COLLECTION: i,
                        GOAL_PROGRESS: l,
                        LOCATION_DESCRIPTION: o,
                        LOCATION_LAT: s,
                        LOCATION_LNG: c,
                        NEAR_YOU: u,
                        NONPROFITS: d,
                        PARTNER: f,
                        TIME_PERIOD: m
                    } = a.QUERY_PARAMS, _ = b(e);
                    return (_[t] || []).length + (_[n] ? 1 : 0) + (_[r] ? 1 : 0) + (_[i] ? 1 : 0) + (_[l] || []).length + (_[o] || _[s] || _[c] ? 1 : 0) + (_[u] ? 1 : 0) + (_[d] ? 1 : 0) + (_[f] ? 1 : 0) + (_[m] ? 1 : 0)
                },
                N = e => {
                    let {
                        CATEGORY: t,
                        CLOSE_TO_GOAL: n,
                        GOAL_PROGRESS: r,
                        LOCATION_DESCRIPTION: i,
                        LOCATION_LAT: l,
                        LOCATION_LNG: o,
                        NEAR_YOU: s,
                        NONPROFITS: c,
                        TIME_PERIOD: u
                    } = a.QUERY_PARAMS, d = b(e);
                    return (d[t] || []).length + (d[n] ? 1 : 0) + (d[r] || []).length + (d[i] || d[l] || d[o] ? 1 : 0) + (d[s] ? 1 : 0) + (d[c] ? 1 : 0) + (d[u] ? 1 : 0)
                },
                x = () => document.activeElement instanceof HTMLElement && document.activeElement.blur(),
                A = (e, t, n) => {
                    let r = { ...b(e),
                            ...n
                        },
                        i = [];
                    r[a.QUERY_PARAMS.NEAR_YOU] && i.push("near you"), (g(r[a.QUERY_PARAMS.CATEGORY]) || []).length > 0 && i.push("fund type"), r[a.QUERY_PARAMS.CLOSE_TO_GOAL] && i.push("close to goal"), o.mt.getPlatform("Amplitude").setData({
                        languageUI: t,
                        basePage: "nextjs",
                        searchState: "srp",
                        filterType: i.length > 0 ? i.join(", ") : void 0
                    }), o.mt.push({
                        type: "mp_page_view",
                        viewId: "pg_srp"
                    })
                }
        },
        656467: function(e, t, n) {
            "use strict";
            n.d(t, {
                f: function() {
                    return r
                }
            });
            let r = (e, t) => {
                let {
                    city: n,
                    country: r,
                    state: i,
                    state_prefix: l,
                    _highlightResult: a
                } = e, o = {
                    city: n,
                    country: r,
                    state: i,
                    state_prefix: l
                };
                ["city", "country", "state", "state_prefix"].forEach(e => {
                    a && a[e] ? .fullyHighlighted !== void 0 && (o[e] = a[e].value)
                }), a ? .state.fullyHighlighted && (o.state_prefix = `<strong>${l}</strong>`);
                let [s, c, u, d] = [o.city, o.country, o.state, o.state_prefix].map(e => e.replaceAll("mark>", "strong>"));
                return t === e.iso ? { ...e,
                    local_description: `${n}, ${l||i}`,
                    __html: `${s}, ${d||u}`
                } : { ...e,
                    local_description: `${n}, ${r}`,
                    __html: `${s}, ${c}`
                }
            }
        },
        131852: function(e, t, n) {
            "use strict";
            n.d(t, {
                k3: function() {
                    return f
                },
                ph: function() {
                    return _
                },
                qL: function() {
                    return m
                }
            });
            var r = n(920647),
                i = n(502802),
                l = n(894425),
                a = n(736422);
            let {
                LOCATION_DESCRIPTION: o,
                LOCATION_LAT: s,
                LOCATION_LNG: c,
                NEAR_YOU: u
            } = i.QUERY_PARAMS, d = e => Array.isArray(e) ? e[0] : e, f = (e, t, n) => {
                let r = d(t),
                    i = d(n),
                    l = d(e);
                if (!l || !r || !i) return null;
                let a = parseFloat(r),
                    o = parseFloat(i);
                return "string" != typeof l || isNaN(a) || isNaN(o) ? null : {
                    description: l,
                    lat: a,
                    lng: o
                }
            }, m = e => ({
                [i.QUERY_PARAMS.LOCATION_DESCRIPTION]: e ? .description,
                [i.QUERY_PARAMS.LOCATION_LAT]: e ? .lat.toString() ? ? void 0,
                [i.QUERY_PARAMS.LOCATION_LNG]: e ? .lng.toString() ? ? void 0
            }), _ = () => {
                let e = (0, r.useRouter)(),
                    t = (0, a.JT)();
                return {
                    activeLocationFilter: f(e.query[o], e.query[s], e.query[c]),
                    setActiveLocationFilter: n => {
                        e.replace({
                            pathname: t,
                            query: (0, l.o2)({ ...e.query,
                                ...m(n),
                                [u]: void 0
                            })
                        })
                    }
                }
            }
        },
        141772: function(e, t, n) {
            "use strict";
            n.d(t, {
                a: function() {
                    return i
                }
            });
            var r = n(600488);
            let i = async e => {
                let t = await fetch(`${r.config.environment.nativeGatewayDomain}/nearby-cities/`, {
                        method: "GET",
                        headers: {
                            Accept: "application/json"
                        }
                    }),
                    {
                        hits: n
                    } = await t.json();
                return e ? n.slice(0, e) : n
            }
        },
        878105: function(e, t, n) {
            "use strict";
            n.d(t, {
                $8: function() {
                    return h
                },
                Ec: function() {
                    return f
                },
                Sn: function() {
                    return m
                },
                uA: function() {
                    return d
                }
            });
            var r = n(675123),
                i = n.n(r),
                l = n(666170),
                a = n(3879),
                o = n(46849),
                s = n(502802),
                c = n(893269);
            let u = i()(c.Qh, c.Yi),
                d = { ...u,
                    search: e => e.every(e => {
                        let {
                            params: t
                        } = e;
                        return !t ? .query && !t ? .aroundLatLngViaIP && !t ? .aroundLatLng && t ? .filters === s.Eu
                    }) ? Promise.resolve({
                        results: e.map(() => ({
                            hits: [],
                            nbHits: 0,
                            nbPages: 0,
                            page: 0,
                            processingTimeMS: 0,
                            hitsPerPage: 0,
                            exhaustiveNbHits: !1,
                            query: "",
                            params: ""
                        }))
                    }) : u.search(e)
                },
                f = i()(c.Qh, c.M_),
                m = i()(c.Qh, o.v.algolia.searchApiKey),
                _ = (0, l.Z)(),
                h = () => (0, a.a)({
                    cache: _,
                    showPrevious: !1
                })
        },
        980176: function(e) {
            e.exports = {
                autoCompleteText: "location-filter-autocomplete_autoCompleteText__RNd46",
                noResultsText: "location-filter-autocomplete_noResultsText__9n84_"
            }
        },
        901234: function(e) {
            e.exports = {
                filterInput: "location-filter-input_filterInput__YZm_f"
            }
        },
        923425: function(e) {
            e.exports = {
                listItem: "location-filter-list-item_listItem__zqrzF",
                txtButton: "location-filter-list-item_txtButton__dZeTf",
                txt: "location-filter-list-item_txt__787AB"
            }
        },
        543771: function(e) {
            e.exports = {
                list: "location-filter-list_list__Rks9f"
            }
        },
        29437: function(e) {
            e.exports = {
                popoverContainer: "location-filter_popoverContainer__2bSH7",
                title: "location-filter_title__mM0C4",
                container: "location-filter_container__a646Z",
                standaloneModal: "location-filter_standaloneModal__0F6NV",
                close: "location-filter_close__BFAEK",
                form: "location-filter_form__jKani",
                formBottomBorder: "location-filter_formBottomBorder__OQTJ5",
                rule: "location-filter_rule__m2lOq"
            }
        },
        340332: function(e) {
            e.exports = "/_next/static/images/fallback-logo-9d08facb012e650c9f587b4707089a3bbb44d3dfd6d4f75751bb756776ef158f.svg"
        }
    }
]);
//# sourceMappingURL=41190-3c7f19cf7f8d7a8f.js.map