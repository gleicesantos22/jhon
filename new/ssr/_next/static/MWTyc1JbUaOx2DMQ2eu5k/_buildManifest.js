self.__BUILD_MANIFEST = function(a, s, e, c, t, n, i, r, d, f, u, g, o, _, p, h, l, b, m, k, j, S, U, y, v, I, E, C, A, L, N, T, B, x, D, F, H, w, P, M, G, K, O, R, X, q, z, J, Q, V, W, Y, Z, $, aa, as, ae, ac, at, an, ai, ar, ad, af, au, ag, ao, a_, ap, ah, al, ab, am, ak, aj, aS, aU, ay, av, aI, aE, aC, aA, aL, aN, aT, aB, ax, aD, aF, aH, aw, aP, aM, aG, aK, aO, aR, aX, aq, az, aJ, aQ, aV, aW, aY, aZ, a$, a1, a6, a7, a9, a4, a3, a5, a8, a2, a0, sa, ss, se, sc, st, sn, si, sr, sd, sf, su, sg, so, s_, sp, sh, sl, sb, sm, sk, sj, sS, sU, sy, sv, sI, sE, sC, sA, sL, sN, sT, sB, sx, sD, sF, sH, sw, sP, sM, sG, sK, sO, sR, sX, sq, sz, sJ, sQ, sV, sW, sY, sZ, s$, s1, s6, s7, s9, s4, s3, s5, s8, s2, s0, ea, es, ee, ec, et, en, ei, er, ed, ef, eu, eg, eo, e_, ep, eh, el, eb, em, ek, ej, eS, eU, ey, ev, eI) {
    return {
        __rewrites: {
            afterFiles: [{
                has: r,
                source: si,
                destination: "/:nextInternalLocale/home"
            }, {
                has: r,
                source: "/:nextInternalLocale(en_US|de_AT|de_CH|de_DE|en_AU|en_CA|en_DK|en_FI|en_GB|en_IE|en_NO|en_SE|es_ES|es_US|es_MX|fr_BE|fr_CA|fr_CH|fr_FR|fr_LU|it_IT|nl_BE|nl_NL|pt_PT)/search",
                destination: "/:nextInternalLocale/s"
            }, {
                has: r,
                source: "/:nextInternalLocale(en_US|de_AT|de_CH|de_DE|en_AU|en_CA|en_DK|en_FI|en_GB|en_IE|en_NO|en_SE|es_ES|es_US|es_MX|fr_BE|fr_CA|fr_CH|fr_FR|fr_LU|it_IT|nl_BE|nl_NL|pt_PT)/donations/:donationId(.*(?:%2F|/(?!.*(?:share|embed).*)).*)",
                destination: "/:nextInternalLocale/donations/fixDonation"
            }, {
                has: r,
                source: "/:nextInternalLocale(en_US|de_AT|de_CH|de_DE|en_AU|en_CA|en_DK|en_FI|en_GB|en_IE|en_NO|en_SE|es_ES|es_US|es_MX|fr_BE|fr_CA|fr_CH|fr_FR|fr_LU|it_IT|nl_BE|nl_NL|pt_PT)/contact/suggest",
                destination: r
            }, {
                has: r,
                source: "/:nextInternalLocale(en_US|de_AT|de_CH|de_DE|en_AU|en_CA|en_DK|en_FI|en_GB|en_IE|en_NO|en_SE|es_ES|es_US|es_MX|fr_BE|fr_CA|fr_CH|fr_FR|fr_LU|it_IT|nl_BE|nl_NL|pt_PT)/create/fundraiser/charity/:path*",
                destination: "/:nextInternalLocale/create/fundraiser/:path*"
            }, {
                has: r,
                source: "/:nextInternalLocale(en_US|de_AT|de_CH|de_DE|en_AU|en_CA|en_DK|en_FI|en_GB|en_IE|en_NO|en_SE|es_ES|es_US|es_MX|fr_BE|fr_CA|fr_CH|fr_FR|fr_LU|it_IT|nl_BE|nl_NL|pt_PT)/create/fundraiser/npo/media/:path*",
                destination: "/:nextInternalLocale/create/fundraiser/media/:path*"
            }, {
                has: r,
                source: "/:nextInternalLocale(en_US|de_AT|de_CH|de_DE|en_AU|en_CA|en_DK|en_FI|en_GB|en_IE|en_NO|en_SE|es_ES|es_US|es_MX|fr_BE|fr_CA|fr_CH|fr_FR|fr_LU|it_IT|nl_BE|nl_NL|pt_PT)/create/fundraiser/npo/story/:path*",
                destination: "/:nextInternalLocale/create/fundraiser/story/:path*"
            }, {
                has: r,
                source: "/:nextInternalLocale(en_US|de_AT|de_CH|de_DE|en_AU|en_CA|en_DK|en_FI|en_GB|en_IE|en_NO|en_SE|es_ES|es_US|es_MX|fr_BE|fr_CA|fr_CH|fr_FR|fr_LU|it_IT|nl_BE|nl_NL|pt_PT)/create/fundraiser/npo/agreement/:path*",
                destination: "/:nextInternalLocale/create/fundraiser/agreement/:path*"
            }, {
                has: r,
                source: "/:nextInternalLocale(en_US|de_AT|de_CH|de_DE|en_AU|en_CA|en_DK|en_FI|en_GB|en_IE|en_NO|en_SE|es_ES|es_US|es_MX|fr_BE|fr_CA|fr_CH|fr_FR|fr_LU|it_IT|nl_BE|nl_NL|pt_PT)/f/:campaignUrl/stream-goal-bar",
                destination: "/:nextInternalLocale/nextassets/twitch-overlays/goal-bar/index.html"
            }, {
                has: r,
                source: "/:nextInternalLocale(en_US|de_AT|de_CH|de_DE|en_AU|en_CA|en_DK|en_FI|en_GB|en_IE|en_NO|en_SE|es_ES|es_US|es_MX|fr_BE|fr_CA|fr_CH|fr_FR|fr_LU|it_IT|nl_BE|nl_NL|pt_PT)/f/:campaignUrl/stream-qr-code",
                destination: "/:nextInternalLocale/nextassets/twitch-overlays/qr-code/index.html"
            }, {
                has: r,
                source: "/:nextInternalLocale(en_US|de_AT|de_CH|de_DE|en_AU|en_CA|en_DK|en_FI|en_GB|en_IE|en_NO|en_SE|es_ES|es_US|es_MX|fr_BE|fr_CA|fr_CH|fr_FR|fr_LU|it_IT|nl_BE|nl_NL|pt_PT)/f/:campaignUrl/stream-notifications-box",
                destination: "/:nextInternalLocale/nextassets/twitch-overlays/notifications-box/index.html"
            }, {
                has: r,
                source: "/:nextInternalLocale(en_US|de_AT|de_CH|de_DE|en_AU|en_CA|en_DK|en_FI|en_GB|en_IE|en_NO|en_SE|es_ES|es_US|es_MX|fr_BE|fr_CA|fr_CH|fr_FR|fr_LU|it_IT|nl_BE|nl_NL|pt_PT)/f/:campaignUrl/donations",
                destination: "/:nextInternalLocale/f/:campaignUrl?modal=donations&tab=all"
            }, {
                has: r,
                source: "/:nextInternalLocale(en_US|de_AT|de_CH|de_DE|en_AU|en_CA|en_DK|en_FI|en_GB|en_IE|en_NO|en_SE|es_ES|es_US|es_MX|fr_BE|fr_CA|fr_CH|fr_FR|fr_LU|it_IT|nl_BE|nl_NL|pt_PT)/f/:campaignUrl/topdonations",
                destination: "/:nextInternalLocale/f/:campaignUrl?modal=donations&tab=top"
            }, {
                has: r,
                source: "/:nextInternalLocale(en_US|de_AT|de_CH|de_DE|en_AU|en_CA|en_DK|en_FI|en_GB|en_IE|en_NO|en_SE|es_ES|es_US|es_MX|fr_BE|fr_CA|fr_CH|fr_FR|fr_LU|it_IT|nl_BE|nl_NL|pt_PT)/f/:campaignUrl/team",
                destination: "/:nextInternalLocale/f/:campaignUrl?modal=team"
            }, {
                has: r,
                source: "/:nextInternalLocale(en_US|de_AT|de_CH|de_DE|en_AU|en_CA|en_DK|en_FI|en_GB|en_IE|en_NO|en_SE|es_ES|es_US|es_MX|fr_BE|fr_CA|fr_CH|fr_FR|fr_LU|it_IT|nl_BE|nl_NL|pt_PT)/f/:campaignUrl/donations/paused",
                destination: "/:nextInternalLocale/f/:campaignUrl?modal=donationsPaused"
            }, {
                has: r,
                source: "/:nextInternalLocale(en_US|de_AT|de_CH|de_DE|en_AU|en_CA|en_DK|en_FI|en_GB|en_IE|en_NO|en_SE|es_ES|es_US|es_MX|fr_BE|fr_CA|fr_CH|fr_FR|fr_LU|it_IT|nl_BE|nl_NL|pt_PT)/f/:campaignUrl/warning",
                destination: "/:nextInternalLocale/f/:campaignUrl?modal=warning"
            }, {
                has: r,
                source: "/:nextInternalLocale(en_US|de_AT|de_CH|de_DE|en_AU|en_CA|en_DK|en_FI|en_GB|en_IE|en_NO|en_SE|es_ES|es_US|es_MX|fr_BE|fr_CA|fr_CH|fr_FR|fr_LU|it_IT|nl_BE|nl_NL|pt_PT)/f/:campaignUrl/share",
                destination: sr
            }, {
                has: r,
                source: "/:nextInternalLocale(en_US|de_AT|de_CH|de_DE|en_AU|en_CA|en_DK|en_FI|en_GB|en_IE|en_NO|en_SE|es_ES|es_US|es_MX|fr_BE|fr_CA|fr_CH|fr_FR|fr_LU|it_IT|nl_BE|nl_NL|pt_PT)/f/:campaignUrl/share/instagram/select/:path*",
                destination: sr
            }, {
                has: [{
                    type: "query",
                    key: "error",
                    value: "1"
                }],
                source: "/:nextInternalLocale(en_US|de_AT|de_CH|de_DE|en_AU|en_CA|en_DK|en_FI|en_GB|en_IE|en_NO|en_SE|es_ES|es_US|es_MX|fr_BE|fr_CA|fr_CH|fr_FR|fr_LU|it_IT|nl_BE|nl_NL|pt_PT)/f/:campaignUrl",
                destination: "/:nextInternalLocale/f/:campaignUrl?modal=error"
            }, {
                has: r,
                source: "/:nextInternalLocale(en_US|de_AT|de_CH|de_DE|en_AU|en_CA|en_DK|en_FI|en_GB|en_IE|en_NO|en_SE|es_ES|es_US|es_MX|fr_BE|fr_CA|fr_CH|fr_FR|fr_LU|it_IT|nl_BE|nl_NL|pt_PT)/unsubscribe",
                destination: "/:nextInternalLocale/notifications/unsubscribe"
            }, {
                has: r,
                source: "/:nextInternalLocale(en_US|de_AT|de_CH|de_DE|en_AU|en_CA|en_DK|en_FI|en_GB|en_IE|en_NO|en_SE|es_ES|es_US|es_MX|fr_BE|fr_CA|fr_CH|fr_FR|fr_LU|it_IT|nl_BE|nl_NL|pt_PT)/aws/s3/partner/dev",
                destination: r
            }, {
                has: r,
                source: "/:nextInternalLocale(en_US|de_AT|de_CH|de_DE|en_AU|en_CA|en_DK|en_FI|en_GB|en_IE|en_NO|en_SE|es_ES|es_US|es_MX|fr_BE|fr_CA|fr_CH|fr_FR|fr_LU|it_IT|nl_BE|nl_NL|pt_PT)/aws/s3/partner/test",
                destination: r
            }, {
                has: r,
                source: "/:nextInternalLocale(en_US|de_AT|de_CH|de_DE|en_AU|en_CA|en_DK|en_FI|en_GB|en_IE|en_NO|en_SE|es_ES|es_US|es_MX|fr_BE|fr_CA|fr_CH|fr_FR|fr_LU|it_IT|nl_BE|nl_NL|pt_PT)/aws/s3/partner/production",
                destination: r
            }, {
                has: r,
                source: "/en_US/de-at",
                destination: "/de_AT/home"
            }, {
                has: r,
                source: "/en_US/de-at/discover",
                destination: "/de_AT/discover"
            }, {
                has: r,
                source: "/en_US/de-at/discover/:categoryName",
                destination: "/de_AT/discover/:categoryName"
            }, {
                has: r,
                source: "/en_US/de-ch",
                destination: "/de_CH/home"
            }, {
                has: r,
                source: "/en_US/de-ch/discover",
                destination: "/de_CH/discover"
            }, {
                has: r,
                source: "/en_US/de-ch/discover/:categoryName",
                destination: "/de_CH/discover/:categoryName"
            }, {
                has: r,
                source: "/en_US/de-de",
                destination: "/de_DE/home"
            }, {
                has: r,
                source: "/en_US/de-de/discover",
                destination: "/de_DE/discover"
            }, {
                has: r,
                source: "/en_US/de-de/discover/:categoryName",
                destination: "/de_DE/discover/:categoryName"
            }, {
                has: r,
                source: "/en_US/en-au",
                destination: "/en_AU/home"
            }, {
                has: r,
                source: "/en_US/en-au/discover",
                destination: "/en_AU/discover"
            }, {
                has: r,
                source: "/en_US/en-au/discover/:categoryName",
                destination: "/en_AU/discover/:categoryName"
            }, {
                has: r,
                source: "/en_US/en-ca",
                destination: "/en_CA/home"
            }, {
                has: r,
                source: "/en_US/en-ca/discover",
                destination: "/en_CA/discover"
            }, {
                has: r,
                source: "/en_US/en-ca/discover/:categoryName",
                destination: "/en_CA/discover/:categoryName"
            }, {
                has: r,
                source: "/en_US/en-dk",
                destination: "/en_DK/home"
            }, {
                has: r,
                source: "/en_US/en-dk/discover",
                destination: "/en_DK/discover"
            }, {
                has: r,
                source: "/en_US/en-dk/discover/:categoryName",
                destination: "/en_DK/discover/:categoryName"
            }, {
                has: r,
                source: "/en_US/en-fi",
                destination: "/en_FI/home"
            }, {
                has: r,
                source: "/en_US/en-fi/discover",
                destination: "/en_FI/discover"
            }, {
                has: r,
                source: "/en_US/en-fi/discover/:categoryName",
                destination: "/en_FI/discover/:categoryName"
            }, {
                has: r,
                source: "/en_US/en-gb",
                destination: "/en_GB/home"
            }, {
                has: r,
                source: "/en_US/en-gb/discover",
                destination: "/en_GB/discover"
            }, {
                has: r,
                source: "/en_US/en-gb/discover/:categoryName",
                destination: "/en_GB/discover/:categoryName"
            }, {
                has: r,
                source: "/en_US/en-ie",
                destination: "/en_IE/home"
            }, {
                has: r,
                source: "/en_US/en-ie/discover",
                destination: "/en_IE/discover"
            }, {
                has: r,
                source: "/en_US/en-ie/discover/:categoryName",
                destination: "/en_IE/discover/:categoryName"
            }, {
                has: r,
                source: "/en_US/en-no",
                destination: "/en_NO/home"
            }, {
                has: r,
                source: "/en_US/en-no/discover",
                destination: "/en_NO/discover"
            }, {
                has: r,
                source: "/en_US/en-no/discover/:categoryName",
                destination: "/en_NO/discover/:categoryName"
            }, {
                has: r,
                source: "/en_US/en-se",
                destination: "/en_SE/home"
            }, {
                has: r,
                source: "/en_US/en-se/discover",
                destination: "/en_SE/discover"
            }, {
                has: r,
                source: "/en_US/en-se/discover/:categoryName",
                destination: "/en_SE/discover/:categoryName"
            }, {
                has: r,
                source: "/en_US/es-es",
                destination: "/es_ES/home"
            }, {
                has: r,
                source: "/en_US/es-es/discover",
                destination: "/es_ES/discover"
            }, {
                has: r,
                source: "/en_US/es-es/discover/:categoryName",
                destination: "/es_ES/discover/:categoryName"
            }, {
                has: r,
                source: "/en_US/es-us",
                destination: "/es_US/home"
            }, {
                has: r,
                source: "/en_US/es-us/discover",
                destination: "/es_US/discover"
            }, {
                has: r,
                source: "/en_US/es-us/discover/:categoryName",
                destination: "/es_US/discover/:categoryName"
            }, {
                has: r,
                source: "/en_US/es-mx",
                destination: "/es_MX/home"
            }, {
                has: r,
                source: "/en_US/es-mx/discover",
                destination: "/es_MX/discover"
            }, {
                has: r,
                source: "/en_US/es-mx/discover/:categoryName",
                destination: "/es_MX/discover/:categoryName"
            }, {
                has: r,
                source: "/en_US/fr-be",
                destination: "/fr_BE/home"
            }, {
                has: r,
                source: "/en_US/fr-be/discover",
                destination: "/fr_BE/discover"
            }, {
                has: r,
                source: "/en_US/fr-be/discover/:categoryName",
                destination: "/fr_BE/discover/:categoryName"
            }, {
                has: r,
                source: "/en_US/fr-ca",
                destination: "/fr_CA/home"
            }, {
                has: r,
                source: "/en_US/fr-ca/discover",
                destination: "/fr_CA/discover"
            }, {
                has: r,
                source: "/en_US/fr-ca/discover/:categoryName",
                destination: "/fr_CA/discover/:categoryName"
            }, {
                has: r,
                source: "/en_US/fr-ch",
                destination: "/fr_CH/home"
            }, {
                has: r,
                source: "/en_US/fr-ch/discover",
                destination: "/fr_CH/discover"
            }, {
                has: r,
                source: "/en_US/fr-ch/discover/:categoryName",
                destination: "/fr_CH/discover/:categoryName"
            }, {
                has: r,
                source: "/en_US/fr-fr",
                destination: "/fr_FR/home"
            }, {
                has: r,
                source: "/en_US/fr-fr/discover",
                destination: "/fr_FR/discover"
            }, {
                has: r,
                source: "/en_US/fr-fr/discover/:categoryName",
                destination: "/fr_FR/discover/:categoryName"
            }, {
                has: r,
                source: "/en_US/fr-lu",
                destination: "/fr_LU/home"
            }, {
                has: r,
                source: "/en_US/fr-lu/discover",
                destination: "/fr_LU/discover"
            }, {
                has: r,
                source: "/en_US/fr-lu/discover/:categoryName",
                destination: "/fr_LU/discover/:categoryName"
            }, {
                has: r,
                source: "/en_US/it-it",
                destination: "/it_IT/home"
            }, {
                has: r,
                source: "/en_US/it-it/discover",
                destination: "/it_IT/discover"
            }, {
                has: r,
                source: "/en_US/it-it/discover/:categoryName",
                destination: "/it_IT/discover/:categoryName"
            }, {
                has: r,
                source: "/en_US/nl-be",
                destination: "/nl_BE/home"
            }, {
                has: r,
                source: "/en_US/nl-be/discover",
                destination: "/nl_BE/discover"
            }, {
                has: r,
                source: "/en_US/nl-be/discover/:categoryName",
                destination: "/nl_BE/discover/:categoryName"
            }, {
                has: r,
                source: "/en_US/nl-nl",
                destination: "/nl_NL/home"
            }, {
                has: r,
                source: "/en_US/nl-nl/discover",
                destination: "/nl_NL/discover"
            }, {
                has: r,
                source: "/en_US/nl-nl/discover/:categoryName",
                destination: "/nl_NL/discover/:categoryName"
            }, {
                has: r,
                source: "/en_US/pt-pt",
                destination: "/pt_PT/home"
            }, {
                has: r,
                source: "/en_US/pt-pt/discover",
                destination: "/pt_PT/discover"
            }, {
                has: r,
                source: "/en_US/pt-pt/discover/:categoryName",
                destination: "/pt_PT/discover/:categoryName"
            }, {
                has: r,
                source: "/:nextInternalLocale(en_US|de_AT|de_CH|de_DE|en_AU|en_CA|en_DK|en_FI|en_GB|en_IE|en_NO|en_SE|es_ES|es_US|es_MX|fr_BE|fr_CA|fr_CH|fr_FR|fr_LU|it_IT|nl_BE|nl_NL|pt_PT)/:locale(\\w{2}-\\w{2})",
                destination: "/:nextInternalLocale/home?urlLocale=:locale"
            }],
            beforeFiles: [{
                has: [{
                    type: an,
                    value: ai
                }],
                source: si,
                destination: "/:nextInternalLocale/partners/"
            }, {
                has: [{
                    type: an,
                    value: ai
                }],
                source: "/:nextInternalLocale(en_US|de_AT|de_CH|de_DE|en_AU|en_CA|en_DK|en_FI|en_GB|en_IE|en_NO|en_SE|es_ES|es_US|es_MX|fr_BE|fr_CA|fr_CH|fr_FR|fr_LU|it_IT|nl_BE|nl_NL|pt_PT)/account/:path*",
                destination: "/:nextInternalLocale/partners/account/:path*"
            }, {
                has: [{
                    type: an,
                    value: ai
                }],
                source: "/:nextInternalLocale(en_US|de_AT|de_CH|de_DE|en_AU|en_CA|en_DK|en_FI|en_GB|en_IE|en_NO|en_SE|es_ES|es_US|es_MX|fr_BE|fr_CA|fr_CH|fr_FR|fr_LU|it_IT|nl_BE|nl_NL|pt_PT)/admin/:path*",
                destination: "/:nextInternalLocale/partners/admin/:path*"
            }, {
                has: [{
                    type: an,
                    value: ai
                }],
                source: "/:nextInternalLocale(en_US|de_AT|de_CH|de_DE|en_AU|en_CA|en_DK|en_FI|en_GB|en_IE|en_NO|en_SE|es_ES|es_US|es_MX|fr_BE|fr_CA|fr_CH|fr_FR|fr_LU|it_IT|nl_BE|nl_NL|pt_PT)/collections/:path*",
                destination: "/:nextInternalLocale/partners/collections/:path*"
            }, {
                has: [{
                    type: an,
                    value: ai
                }],
                source: "/:nextInternalLocale(en_US|de_AT|de_CH|de_DE|en_AU|en_CA|en_DK|en_FI|en_GB|en_IE|en_NO|en_SE|es_ES|es_US|es_MX|fr_BE|fr_CA|fr_CH|fr_FR|fr_LU|it_IT|nl_BE|nl_NL|pt_PT)/dashboard/:path*",
                destination: "/:nextInternalLocale/partners/dashboard/:path*"
            }, {
                has: [{
                    type: an,
                    value: ai
                }],
                source: "/:nextInternalLocale(en_US|de_AT|de_CH|de_DE|en_AU|en_CA|en_DK|en_FI|en_GB|en_IE|en_NO|en_SE|es_ES|es_US|es_MX|fr_BE|fr_CA|fr_CH|fr_FR|fr_LU|it_IT|nl_BE|nl_NL|pt_PT)/fundraisers/:path*",
                destination: "/:nextInternalLocale/partners/fundraisers/:path*"
            }],
            fallback: []
        },
        "/404": [e, a, s, t, i, d, f, g, j, v, c, n, u, p, S, C, A, "static/css/d1aab9025b822b07.css", "static/chunks/pages/404-40ee3fe78ed2a013.js"],
        "/_error": [e, a, s, d, f, n, u, p, sd, "static/chunks/pages/_error-63131ce1d4561f4c.js"],
        "/account/connect/[...provider]": ["static/chunks/pages/account/connect/[...provider]-c8ac6ce0f68a1410.js"],
        "/account/giving-funds/[id]": [e, a, s, d, f, L, n, u, p, "static/css/eb0c6ac2a42b8554.css", "static/chunks/pages/account/giving-funds/[id]-3a46c952b0c8aeca.js"],
        "/account/impact": [e, a, s, t, i, d, f, g, B, D, sf, c, n, u, p, P, su, sg, "static/css/a0851db2a186421a.css", "static/chunks/pages/account/impact-3642921c0b6487c2.js"],
        "/account/impact/[fundraiserSlug]": [e, a, s, t, i, d, f, o, g, _, B, D, sf, c, n, u, p, P, so, s_, "static/chunks/68917-7bec889550f79815.js", su, sg, "static/css/5e3653cdb8f5c36d.css", "static/chunks/pages/account/impact/[fundraiserSlug]-fe8196a98a59b0e8.js"],
        "/account/notifications": [e, ar, a, s, d, f, av, n, u, p, aI, "static/css/6b8bdde1c8d5c646.css", "static/chunks/pages/account/notifications-ccc6a75f19d1db5f.js"],
        "/account/profile": [e, ar, a, s, d, f, o, _, B, D, sp, n, u, p, P, "static/css/d34d17a1a4bb4b24.css", "static/chunks/pages/account/profile-8ceddcf5d79d14c7.js"],
        "/auth": [U, y, Y, Z, "static/chunks/pages/auth-8f3f853e10797e97.js"],
        "/campaign/[campaignId]/leaderboard": [a, a_, c, aE, sh, sl, "static/chunks/pages/campaign/[campaignId]/leaderboard-57d60d6df0a616c6.js"],
        "/campaign/[campaignId]/register": [e, a, s, d, f, o, _, $, ad, c, n, u, p, ap, sb, "static/css/21978081c019c0a1.css", "static/chunks/pages/campaign/[campaignId]/register-40ce7c0282537bb2.js"],
        "/campaign/[campaignId]/startfundraising": [U, o, _, y, "static/chunks/31535-84ff7c65285e1946.js", sb, "static/css/e45b8b6105f16d5b.css", "static/chunks/pages/campaign/[campaignId]/startfundraising-156d416af7febe4e.js"],
        "/causes/[causeSlug]": [e, a, s, t, i, d, f, g, L, "static/chunks/90381-dfeeeef74cef8d89.js", c, n, u, p, O, "static/css/d1494183b11b105a.css", "static/chunks/pages/causes/[causeSlug]-6e26032ae924df76.js"],
        "/charity/claim": ["static/chunks/pages/charity/claim-f8f9aba120007a18.js"],
        "/charity/claim/existing-claim": [e, M, a, s, x, n, h, l, G, aC, sm, "static/chunks/pages/charity/claim/existing-claim-2ef9c341b92fb57b.js"],
        "/charity/claim/existing-claim/[charityId]": [e, M, a, s, x, n, h, l, G, aC, sm, "static/chunks/pages/charity/claim/existing-claim/[charityId]-b601fa8616730b60.js"],
        "/charity/claim/id-verification": [e, M, a, s, t, o, _, b, x, $, ad, n, h, l, G, sk, sj, "static/chunks/pages/charity/claim/id-verification-4a72798201d32a8c.js"],
        "/charity/claim/id-verification/[charityId]": [e, M, a, s, t, o, _, b, x, $, ad, n, h, l, G, sk, sj, "static/chunks/pages/charity/claim/id-verification/[charityId]-4732c9356b2ef37b.js"],
        "/charity/claim/loading": ["static/css/32055dc77d9271c4.css", "static/chunks/pages/charity/claim/loading-5b60a1a5160586e4.js"],
        "/charity/claim/review": [e, M, a, s, x, sS, c, n, h, l, G, sU, "static/chunks/pages/charity/claim/review-9cd69a376d94d527.js"],
        "/charity/claim/review/[charityId]": [e, M, a, s, x, sS, c, n, h, l, G, sU, "static/chunks/pages/charity/claim/review/[charityId]-2276321bee864587.js"],
        "/charity/claim/search": [e, M, a, s, x, n, h, l, G, "static/css/df79f60227025ae5.css", "static/chunks/pages/charity/claim/search-a9b4588759b756d3.js"],
        "/charity/claim/success": [e, M, a, s, x, n, h, l, G, aC, sy, "static/chunks/pages/charity/claim/success-4012ac52abc60055.js"],
        "/charity/claim/success/[charityId]": [e, M, a, s, x, n, h, l, G, aC, sy, "static/chunks/pages/charity/claim/success/[charityId]-1ded3ba993a1e80e.js"],
        "/charity/claim/verification-pending": [e, M, a, s, x, sv, n, h, l, G, sI, "static/chunks/pages/charity/claim/verification-pending-5b1cc80a9d772948.js"],
        "/charity/claim/verification-pending/[charityId]": [e, M, a, s, x, sv, n, h, l, G, sI, "static/chunks/pages/charity/claim/verification-pending/[charityId]-c507ced0fd595329.js"],
        "/charity/claim/verify-email": [e, U, M, a, s, y, x, n, h, l, G, sE, sC, "static/chunks/pages/charity/claim/verify-email-06e49e4f1905d7c1.js"],
        "/charity/claim/verify-email/[charityId]": [e, U, M, a, s, y, x, n, h, l, G, sE, sC, "static/chunks/pages/charity/claim/verify-email/[charityId]-66815f65fa2a088f.js"],
        "/charity/[charitySlug]": [e, a, s, t, i, d, f, g, aa, aV, c, n, u, p, aW, "static/css/c9382fcb28d39118.css", "static/chunks/pages/charity/[charitySlug]-4e5d377d1b208d55.js"],
        "/charity/[charitySlug]/dashboard": [e, a, s, t, i, d, f, o, _, aV, sA, c, n, u, p, aY, aW, sL, "static/css/1c728c7d759050dc.css", "static/chunks/pages/charity/[charitySlug]/dashboard-d7d8d0d62f53174e.js"],
        "/charity/[charitySlug]/donate": [U, af, ah, a, s, t, i, d, o, _, b, y, L, K, R, al, sN, c, N, H, X, O, au, ap, aZ, sT, "static/chunks/pages/charity/[charitySlug]/donate-2645ccd8432025fc.js"],
        "/charity/[charitySlug]/donate/thankyou": [e, a, s, d, f, n, u, "static/css/1bfcce251f4dee91.css", "static/chunks/pages/charity/[charitySlug]/donate/thankyou-87ced522c7850b04.js"],
        "/charity/[charitySlug]/edit": [e, a, s, d, f, o, _, E, ab, n, u, p, aA, "static/css/4d46b93c521fdfa4.css", "static/chunks/pages/charity/[charitySlug]/edit-842bcae498d114bf.js"],
        "/charity/[charitySlug]/edit/admins": [e, a, s, d, f, o, _, E, ab, n, u, p, aA, "static/css/9278e9045a3014dd.css", "static/chunks/pages/charity/[charitySlug]/edit/admins-65b55dc1f6433509.js"],
        "/charity/[charitySlug]/edit/brand-kit": [e, a, s, d, f, o, _, E, B, D, ab, n, u, p, P, aA, "static/css/bf3f7976ded89b57.css", "static/chunks/pages/charity/[charitySlug]/edit/brand-kit-d4bfe9733d9bb2f4.js"],
        "/charity/[charitySlug]/edit/settings": [e, a, s, d, f, o, _, E, ab, n, u, p, aA, "static/css/fe2951960e4f06d9.css", "static/chunks/pages/charity/[charitySlug]/edit/settings-1486542b53f285b4.js"],
        "/charity-sign-up": [a, o, _, "static/chunks/76665-7c034374c6f42869.js", "static/css/70601741c38faeb9.css", "static/chunks/pages/charity-sign-up-fd504023fde30456.js"],
        "/communities/[communitySlug]": [e, U, a, s, t, i, d, f, g, y, R, "static/chunks/48185-791e4c1a44d69af6.js", c, n, u, a$, "static/css/9d5e34ed9e4392d6.css", "static/chunks/pages/communities/[communitySlug]-57caa6637b78b84b.js"],
        "/contact/suggest/[form]": [e, a, s, d, f, o, _, E, n, u, p, "static/chunks/6631-53fc65092a7de1ef.js", "static/css/ceb4a3e207022591.css", "static/chunks/pages/contact/suggest/[form]-dac5268819044a45.js"],
        "/create/fundraiser": ["static/chunks/pages/create/fundraiser-791b979b60662205.js"],
        "/create/fundraiser/agreement/[campaignUrl]": [e, a, s, t, i, g, b, sB, c, h, l, k, m, w, sx, sD, "static/chunks/pages/create/fundraiser/agreement/[campaignUrl]-abf751337f6a209b.js"],
        "/create/fundraiser/category": [e, a, s, t, i, o, g, _, b, z, sF, c, h, l, k, m, sH, sw, "static/chunks/pages/create/fundraiser/category-32031ac895ba7a98.js"],
        "/create/fundraiser/category/[campaignUrl]": [e, a, s, t, i, o, g, _, b, z, sF, c, h, l, k, m, sH, sw, "static/chunks/pages/create/fundraiser/category/[campaignUrl]-92a16f0dfd30425c.js"],
        "/create/fundraiser/chat": [e, a, s, t, i, o, g, _, E, B, D, a1, sP, c, h, l, k, m, P, a6, am, aL, sM, sG, "static/chunks/pages/create/fundraiser/chat-a4483c3cca18c8c9.js"],
        "/create/fundraiser/chat/[campaignUrl]": [e, a, s, t, i, o, g, _, E, B, D, a1, sP, c, h, l, k, m, P, a6, am, aL, sM, sG, "static/chunks/pages/create/fundraiser/chat/[campaignUrl]-da5336a2031727a4.js"],
        "/create/fundraiser/confirm/[campaignUrl]": [e, a, s, t, i, o, g, _, b, $, ad, a7, c, h, l, k, m, w, a9, "static/css/382687f8b5dd202e.css", "static/chunks/pages/create/fundraiser/confirm/[campaignUrl]-abff76cc6426f656.js"],
        "/create/fundraiser/drafts": [e, a, s, t, i, g, c, h, l, k, m, w, "static/css/320697391d59c412.css", "static/chunks/pages/create/fundraiser/drafts-7ba2a568d43e1e70.js"],
        "/create/fundraiser/error": [t, i, g, c, k, m, sK, sO, "static/chunks/pages/create/fundraiser/error-3d0a83d8d04603bb.js"],
        "/create/fundraiser/error/[campaignUrl]": [t, i, g, c, k, m, sK, sO, "static/chunks/pages/create/fundraiser/error/[campaignUrl]-1dcd456728692cfc.js"],
        "/create/fundraiser/goal": [e, U, a, s, t, i, o, g, _, y, L, z, c, h, l, k, m, w, aL, sR, sX, "static/chunks/pages/create/fundraiser/goal-10556be60a272f85.js"],
        "/create/fundraiser/goal/[campaignUrl]": [e, U, a, s, t, i, o, g, _, y, L, z, c, h, l, k, m, w, aL, sR, sX, "static/chunks/pages/create/fundraiser/goal/[campaignUrl]-5f5a1810cfd1aee0.js"],
        "/create/fundraiser/media": [e, a, s, t, i, g, c, h, l, k, m, "static/css/b75e398902f875f3.css", "static/chunks/pages/create/fundraiser/media-112ad1b1c67a2de9.js"],
        "/create/fundraiser/media/[campaignUrl]": [e, a, s, t, i, o, g, _, B, D, "static/chunks/44530-3d5009abfa1c5d76.js", c, h, l, k, m, P, w, a6, am, "static/css/dd9e49f26922ca05.css", "static/chunks/pages/create/fundraiser/media/[campaignUrl]-b9171fc35de33f0e.js"],
        "/create/fundraiser/npo/details": [e, a, s, t, i, o, g, _, z, c, h, l, k, m, w, sq, sz, "static/chunks/pages/create/fundraiser/npo/details-11043e08f14c5901.js"],
        "/create/fundraiser/npo/details/[campaignUrl]": [e, a, s, t, i, o, g, _, z, c, h, l, k, m, w, sq, sz, "static/chunks/pages/create/fundraiser/npo/details/[campaignUrl]-97ad12c89ace7649.js"],
        "/create/fundraiser/partner/draft": [t, i, g, c, k, m, a4, "static/chunks/pages/create/fundraiser/partner/draft-34f23b66ef8dbd18.js"],
        "/create/fundraiser/partner/review/[campaignUrl]": [e, aN, a, s, t, i, o, g, _, b, B, D, z, ak, aT, aB, "static/chunks/35315-7e2b658256a69f3b.js", c, h, l, k, m, P, w, ax, aD, a3, "static/css/faad4ed1285cf217.css", "static/chunks/pages/create/fundraiser/partner/review/[campaignUrl]-440f709677eeb216.js"],
        "/create/fundraiser/review/[campaignUrl]": [e, ar, aN, a, s, t, i, o, g, _, b, B, D, z, ak, aT, aB, "static/chunks/84126-b2ddaa6129032f73.js", c, h, l, k, m, P, am, ax, aD, a3, "static/css/8f4989fd4e88cc0d.css", "static/chunks/pages/create/fundraiser/review/[campaignUrl]-e4094324081687cf.js"],
        "/create/fundraiser/start/[takeoverType]": [e, a, s, t, i, g, L, sJ, c, h, l, k, m, sQ, sV, "static/chunks/pages/create/fundraiser/start/[takeoverType]-6baf743bd6f66fb9.js"],
        "/create/fundraiser/start/[takeoverType]/[campaignUrl]": [e, a, s, t, i, g, L, sJ, c, h, l, k, m, sQ, sV, "static/chunks/pages/create/fundraiser/start/[takeoverType]/[campaignUrl]-4cc3bb94a4ddeb10.js"],
        "/create/fundraiser/story/[campaignUrl]": [e, aN, a, s, t, i, o, g, _, b, L, B, D, ak, aT, aB, "static/chunks/88905-0830044b39bdfcc4.js", c, h, l, k, m, P, w, ax, aD, "static/css/cfd28b97e3b4d536.css", "static/chunks/pages/create/fundraiser/story/[campaignUrl]-60f83d9d7bc4a49d.js"],
        "/create/fundraiser/template/search": [e, a, s, t, i, g, x, ag, c, h, l, k, m, aF, aH, "static/chunks/pages/create/fundraiser/template/search-f10dc917662cfbae.js"],
        "/create/fundraiser/template/search/draft": [e, a, s, t, i, g, x, ag, c, h, l, k, m, aF, aH, "static/chunks/pages/create/fundraiser/template/search/draft-bc52b816e92b289a.js"],
        "/create/fundraiser/template/search/draft/[campaignUrl]": [e, a, s, t, i, g, x, ag, c, h, l, k, m, aF, aH, "static/chunks/pages/create/fundraiser/template/search/draft/[campaignUrl]-b8a52d502dddfbe6.js"],
        "/create/fundraiser/template/search/[moment]": [e, a, s, t, i, g, x, ag, c, h, l, k, m, aF, aH, "static/chunks/pages/create/fundraiser/template/search/[moment]-deaf956110766cef.js"],
        "/create/fundraiser/template/[charityId]/agreement/[campaignUrl]": [e, a, s, t, i, g, b, sB, c, h, l, k, m, w, sx, sD, "static/chunks/pages/create/fundraiser/template/[charityId]/agreement/[campaignUrl]-0d7b69126c18baae.js"],
        "/create/fundraiser/template/[charityId]/date-of-birth": [e, a, s, t, i, o, g, _, b, c, h, l, k, m, "static/css/ec4fef7f6751b923.css", "static/chunks/pages/create/fundraiser/template/[charityId]/date-of-birth-dfef51673ead0af4.js"],
        "/create/fundraiser/template/[charityId]/draft": [t, i, g, c, k, m, sW, a4, "static/chunks/pages/create/fundraiser/template/[charityId]/draft-3efd844d72bd0770.js"],
        "/create/fundraiser/template/[charityId]/draft/[campaignUrl]": [t, i, g, c, k, m, sW, a4, "static/chunks/pages/create/fundraiser/template/[charityId]/draft/[campaignUrl]-519bfedb8d84ba34.js"],
        "/create/fundraiser/template/[charityId]/moment": [e, a, s, t, i, g, sY, c, h, l, k, m, sZ, s$, "static/chunks/pages/create/fundraiser/template/[charityId]/moment-b91222ce969ba7e6.js"],
        "/create/fundraiser/template/[charityId]/moment/[campaignUrl]": [e, a, s, t, i, g, sY, c, h, l, k, m, sZ, s$, "static/chunks/pages/create/fundraiser/template/[charityId]/moment/[campaignUrl]-2cc89fad88f16f2a.js"],
        "/create/fundraiser/template/[charityId]/review/[campaignUrl]": [e, U, aN, a, s, t, i, o, g, _, b, y, B, D, z, ak, aT, aB, "static/chunks/94993-8f1b996bf6ce41d0.js", c, h, l, k, m, ax, aD, a3, "static/chunks/71118-a6a673800467f86d.js", "static/css/3f09cc3a4e357513.css", "static/chunks/pages/create/fundraiser/template/[charityId]/review/[campaignUrl]-edd1837a0f6cd04a.js"],
        "/create/fundraiser/title/[campaignUrl]": [e, U, a, s, t, i, o, g, _, b, y, c, h, l, k, m, w, "static/css/614e1f4f93ccc55b.css", "static/chunks/pages/create/fundraiser/title/[campaignUrl]-adc7bceb8f057232.js"],
        "/create/fundraiser/types": [e, a, s, t, i, o, g, _, b, x, ag, c, h, l, k, m, w, s1, s6, "static/chunks/pages/create/fundraiser/types-f3ee40238b306dab.js"],
        "/create/fundraiser/types/[campaignUrl]": [e, a, s, t, i, o, g, _, b, x, ag, c, h, l, k, m, w, s1, s6, "static/chunks/pages/create/fundraiser/types/[campaignUrl]-509aef67c32f33f9.js"],
        "/create/fundraiser/under-review/[campaignUrl]": [t, i, g, c, k, m, "static/css/86ad0fbf57f1267c.css", "static/chunks/pages/create/fundraiser/under-review/[campaignUrl]-03fde1bd6b91aa55.js"],
        "/create/fundraiser/urgent/ukraine": [e, a, s, t, i, g, c, h, l, k, m, "static/css/c1fabe1b7bd52c73.css", "static/chunks/pages/create/fundraiser/urgent/ukraine-0e19f6f848073600.js"],
        "/create/fundraiser/[campaignUrl]": ["static/chunks/pages/create/fundraiser/[campaignUrl]-fd072b1ce75c7029.js"],
        "/discover": [e, a, s, d, f, Q, as, a5, c, n, u, p, s7, "static/css/c64e03370400983a.css", "static/chunks/pages/discover-a347e0b46642aed3.js"],
        "/discover/[categoryName]": [e, a, s, d, f, Q, as, a5, c, n, u, p, s7, "static/css/2af7c07aff00baf0.css", "static/chunks/pages/discover/[categoryName]-fbba32fb534a751f.js"],
        "/donations": [e, a, s, t, i, d, f, g, c, n, u, p, "static/css/f4f8f508f2242365.css", "static/chunks/pages/donations-e6a6fd7aaee2c5c6.js"],
        "/donations/fixDonation": ["static/chunks/pages/donations/fixDonation-7d6d21e5a01a9417.js"],
        "/donations/[signedDonationId]": [e, a, s, d, f, o, _, E, K, c, n, u, p, "static/css/13a4da1277bad81a.css", "static/chunks/pages/donations/[signedDonationId]-f54db3b5c39d66bf.js"],
        "/f/[campaignUrl]/donate": [U, af, ah, a, s, t, i, d, o, _, b, y, L, K, R, al, sN, c, N, H, X, O, au, ap, aZ, sT, "static/chunks/pages/f/[campaignUrl]/donate-0e11335a92661d3a.js"],
        "/f/[campaignUrl]/donate/submitting/[paymentMethodType]": [af, t, i, K, c, N, H, X, au, "static/css/e11e4a1cc7e15007.css", "static/chunks/pages/f/[campaignUrl]/donate/submitting/[paymentMethodType]-0bdb3d014c8a52ba.js"],
        "/f/[campaignUrl]/donate/thankyou/comment": [a, s, E, B, K, s9, "static/chunks/50897-ec4c67c6e576fc98.js", N, "static/css/631c5d2105205316.css", "static/chunks/pages/f/[campaignUrl]/donate/thankyou/comment-9661178b363c56c4.js"],
        "/f/[campaignUrl]/donate/thankyou/share": [U, a, s, t, i, g, y, L, s9, c, N, H, X, aZ, "static/css/372c5959df904430.css", "static/chunks/pages/f/[campaignUrl]/donate/thankyou/share-d1aabf1767dd6728.js"],
        "/f/[campaignUrl]/donations/paused": [e, U, a, s, t, i, d, f, g, y, L, R, aj, aw, c, n, u, p, N, H, X, O, aS, aE, "static/css/ff80a35d35e4e2d7.css", "static/chunks/pages/f/[campaignUrl]/donations/paused-0781ee5e0506e99f.js"],
        "/f/[campaignUrl]/leaderboard": [a, a_, c, aE, sh, sl, "static/chunks/pages/f/[campaignUrl]/leaderboard-6de0ee6c67ccb350.js"],
        "/f/[campaignUrl]/print": [c, N, H, "static/css/cb4184d1e93b9930.css", "static/chunks/pages/f/[campaignUrl]/print-06eac142b19d7cce.js"],
        "/f/[campaignUrl]/qr": [q, c, N, H, "static/chunks/pages/f/[campaignUrl]/qr-cb41a416240e78f6.js"],
        "/f/[campaignUrl]/share/embed": [e, U, a, s, t, i, d, f, g, E, y, L, R, ab, aj, aw, c, n, u, p, N, H, X, O, aS, "static/css/78f75df9d84aba0f.css", "static/chunks/pages/f/[campaignUrl]/share/embed-a0cdd184361fe9a6.js"],
        "/f/[campaignUrl]/widget/partner/error": [N, s4, "static/chunks/pages/f/[campaignUrl]/widget/partner/error-b99121f06c291a0a.js"],
        "/f/[campaignUrl]/widget/partner/[type]": [L, c, O, "static/css/c039a225abca1098.css", "static/chunks/pages/f/[campaignUrl]/widget/partner/[type]-4239603915f09e10.js"],
        "/f/[campaignUrl]/widget/partner/[type]/donate": [U, af, ah, a, t, i, d, o, _, b, y, L, K, al, "static/chunks/33348-c7429cb6fcc2be70.js", c, N, H, X, au, ap, "static/chunks/57083-97eec5bd5deda2db.js", "static/css/67b45da08517aaa7.css", "static/chunks/pages/f/[campaignUrl]/widget/partner/[type]/donate-706ae488a24ba63d.js"],
        "/f/[campaignUrl]/widget/partner/[type]/receipt": [c, N, H, "static/chunks/74358-f149371bf6b1c1dc.js", "static/css/582668638d691610.css", "static/chunks/pages/f/[campaignUrl]/widget/partner/[type]/receipt-eca9575e888fe687.js"],
        "/f/[campaignUrl]/widget/[...type]": [U, a, y, L, R, c, N, H, O, aS, "static/css/45ba04c7868acca6.css", "static/chunks/pages/f/[campaignUrl]/widget/[...type]-35cd3e224f8c9152.js"],
        "/f/[campaignUrl]/[contentType]/[contentId]/gallery/[contentIndex]": [e, U, a, s, t, i, d, f, g, y, L, aU, R, aj, aw, "static/chunks/35702-e51aabe5cd05db2f.js", c, n, u, p, N, H, X, O, aS, "static/css/05729c9a322e8168.css", "static/chunks/pages/f/[campaignUrl]/[contentType]/[contentId]/gallery/[contentIndex]-c853134d2f84c020.js"],
        "/f/[campaignUrl]/[[...fundraiserPageParams]]": [e, U, a, s, t, i, d, f, g, y, L, R, aj, aw, c, n, u, p, N, H, X, O, aS, aE, "static/css/e0fc4648e5f7436a.css", "static/chunks/pages/f/[campaignUrl]/[[...fundraiserPageParams]]-ae3dfcf7760df7cc.js"],
        "/forgot-password": [e, U, y, Y, Z, "static/chunks/pages/forgot-password-30d30b13187047ca.js"],
        "/fundraisers": [e, a, s, t, i, d, f, o, g, _, aV, sA, c, n, u, p, h, aY, aW, sL, "static/css/f6f89a530f681bd6.css", "static/chunks/pages/fundraisers-904503f070ba206a.js"],
        "/gift-cards/accept": [U, a, y, c, "static/chunks/52666-9c5b6fb553c0a088.js", "static/css/5ab6927cbcf897be.css", "static/chunks/pages/gift-cards/accept-ff612d54a63207a8.js"],
        "/gift-cards/send": [e, U, af, ah, a, s, t, i, d, f, o, _, b, E, y, L, K, al, c, n, u, N, H, X, au, "static/css/ed131b6fe38e7975.css", "static/chunks/pages/gift-cards/send-d0312e79504a2916.js"],
        "/giving-funds": [e, U, a, s, d, f, o, _, y, j, L, aa, Q, as, aP, c, n, u, ay, aM, aG, s3, "static/css/7b3d1c00b3b82e54.css", "static/chunks/pages/giving-funds-ed3ea808df85cff6.js"],
        "/giving-funds/contribution-success": [e, a, s, d, f, n, u, s3, "static/css/24046065a716c478.css", "static/chunks/pages/giving-funds/contribution-success-b74459ca6918c539.js"],
        "/giving-funds/daf-to-daf": ["static/chunks/pages/giving-funds/daf-to-daf-aa6f6c8b44690e67.js"],
        "/giving-funds/onboarding": [e, a, s, d, f, n, u, aG, "static/css/041d14da7b7ac83d.css", "static/chunks/pages/giving-funds/onboarding-68da346ceca78f8f.js"],
        "/giving-funds/s": [e, a, s, d, f, o, _, j, L, aa, Q, as, a_, aP, "static/chunks/28286-6a7a7df977916a8b.js", c, n, u, ay, aM, aG, s5, "static/css/593e526ebb8879b0.css", "static/chunks/pages/giving-funds/s-615fea0b0ec79bfc.js"],
        "/giving-funds/s/add-favorites": [e, a, s, d, f, o, _, j, aa, Q, as, a_, aP, n, u, ay, aM, aG, s5, "static/css/1bdf8375aa4beea3.css", "static/chunks/pages/giving-funds/s/add-favorites-b3cd6d54e58511c7.js"],
        "/giving-funds/s/local": [e, a, s, d, f, o, _, j, aa, Q, as, aP, n, u, ay, aM, "static/css/27d46cb33f333cda.css", "static/chunks/pages/giving-funds/s/local-8c5cfee0b3ac075a.js"],
        "/giving-funds/[id]/activity": [e, a, s, t, i, d, f, g, c, n, u, a8, "static/css/7cd4071336c9e34b.css", "static/chunks/pages/giving-funds/[id]/activity-f0c1dc564bb040a8.js"],
        "/giving-funds/[id]/contribute": [e, U, af, ah, a, s, t, i, o, _, b, y, L, K, al, aK, "static/chunks/82095-43db62f772a414df.js", c, N, H, X, au, ap, aO, "static/css/c298d3df2d16bfe2.css", "static/chunks/pages/giving-funds/[id]/contribute-b25a36aa38462fb8.js"],
        "/giving-funds/[id]/contribute-stocks": [a, s, o, _, aK, aO, "static/css/e3398f4d6a2cf36b.css", "static/chunks/pages/giving-funds/[id]/contribute-stocks-c895f2f6c7a70d1d.js"],
        "/giving-funds/[id]/contribution/[transactionId]": [e, a, s, t, i, d, f, g, c, n, u, a8, "static/css/68b42df658c8bbcd.css", "static/chunks/pages/giving-funds/[id]/contribution/[transactionId]-89a6c7d2d8088994.js"],
        "/giving-funds/[id]/daf-to-daf": [s, aK, aO, "static/css/8568672f055a6f5a.css", "static/chunks/pages/giving-funds/[id]/daf-to-daf-1d3f2050e90dec5c.js"],
        "/giving-funds/[id]/donation/[transactionId]": [e, a, s, t, i, d, f, g, c, n, u, a8, "static/css/628d11002b8ce5fc.css", "static/chunks/pages/giving-funds/[id]/donation/[transactionId]-4f1157c40d6e5205.js"],
        "/giving-funds/[id]/favorites": [e, a, s, d, f, aa, n, u, "static/css/fd1969f1a958116e.css", "static/chunks/pages/giving-funds/[id]/favorites-452378e1208122b9.js"],
        "/giving-funds/[id]/get-tax-summary": [e, a, s, d, f, n, u, "static/css/247f510b2e239358.css", "static/chunks/pages/giving-funds/[id]/get-tax-summary-1b7dcaf64e859245.js"],
        "/giving-funds/[id]/invest": [e, a, s, d, f, n, u, "static/css/44fd8bcfcd4b88c0.css", "static/chunks/pages/giving-funds/[id]/invest-0a777f78eca90032.js"],
        "/giving-funds/[id]/investment-activity": [e, a, s, t, i, d, f, g, n, u, "static/css/f03475e76c6de0e1.css", "static/chunks/pages/giving-funds/[id]/investment-activity-580bb5fd6562d655.js"],
        "/giving-funds/[id]/payment-methods": [e, s, aK, aO, "static/css/754dcc7d1aa6b966.css", "static/chunks/pages/giving-funds/[id]/payment-methods-4226a20b0fcddfb1.js"],
        "/giving-funds/[id]/portfolio": [e, a, s, d, f, n, u, "static/css/bf3142c7c54eb5d9.css", "static/chunks/pages/giving-funds/[id]/portfolio-bd3518264674bbe2.js"],
        "/giving-funds/[id]/portfolio/[portfolioId]": [e, a, s, d, f, ak, "static/chunks/35026-3eecea5324552457.js", n, u, "static/css/4d1aad2a00460fc3.css", "static/chunks/pages/giving-funds/[id]/portfolio/[portfolioId]-c82c372f68926097.js"],
        "/giving-funds/[id]/set-goals": [e, a, s, d, f, n, u, "static/css/59852cbe0bd515c9.css", "static/chunks/pages/giving-funds/[id]/set-goals-17459e31b7d6fc83.js"],
        "/home": [e, a, s, t, i, d, f, g, j, a5, c, n, u, p, S, C, "static/css/9e01b77b2fb07071.css", "static/chunks/pages/home-f670a107bde63880.js"],
        "/manage/[campaignSlug]": [e, U, a, s, t, i, d, f, o, g, _, b, E, y, j, v, q, R, ae, "static/chunks/6709-191b403a56361297.js", c, n, u, p, S, I, F, ac, s8, "static/css/e12f868450cc5899.css", "static/chunks/pages/manage/[campaignSlug]-8c914c8cff96e381.js"],
        "/manage/[campaignSlug]/accept-team-invite": [e, a, s, d, f, n, u, p, sd, "static/chunks/pages/manage/[campaignSlug]/accept-team-invite-2d5ec2079056123b.js"],
        "/manage/[campaignSlug]/activity": [e, a, s, t, i, d, f, g, E, j, L, v, q, aR, s2, c, n, u, p, S, I, C, A, T, s0, aX, ea, es, "static/css/446ea1b5db812364.css", "static/chunks/pages/manage/[campaignSlug]/activity-7901edeb5e5d6d64.js"],
        "/manage/[campaignSlug]/activity/scheduled-shares": [e, a, s, t, i, d, f, g, j, v, c, n, u, p, S, I, C, A, T, ee, "static/css/cfb8ffbcd2abbf58.css", "static/chunks/pages/manage/[campaignSlug]/activity/scheduled-shares-95b550f58fde968c.js"],
        "/manage/[campaignSlug]/activity/share-history": [e, a, s, t, i, d, f, g, E, j, L, v, q, aR, "static/chunks/18601-a3bd7c16187ce653.js", c, n, u, p, S, I, C, A, T, s0, aX, ea, "static/css/11de866f6540c8cd.css", "static/chunks/pages/manage/[campaignSlug]/activity/share-history-33e123f3bea2b2e2.js"],
        "/manage/[campaignSlug]/donations": [e, a, s, t, i, d, f, o, g, _, b, E, j, v, q, aU, ae, aq, c, n, u, p, S, I, F, ac, ec, et, "static/css/47296e506f5e448a.css", "static/chunks/pages/manage/[campaignSlug]/donations-3568c5612e8fd5fe.js"],
        "/manage/[campaignSlug]/donors/donations": [e, a, s, t, i, d, f, o, g, _, b, E, j, v, q, aU, ae, aq, c, n, u, p, S, I, F, ac, ec, et, "static/css/01a3e283b67677b9.css", "static/chunks/pages/manage/[campaignSlug]/donors/donations-0f01c655cd3ea37d.js"],
        "/manage/[campaignSlug]/donors/[...contacts]": [e, a, s, t, i, d, f, o, g, j, v, q, aR, ae, c, n, u, p, S, I, C, A, T, F, aX, ac, "static/css/14f8b7a6f1f7ee02.css", "static/chunks/pages/manage/[campaignSlug]/donors/[...contacts]-56ac750f295eb87b.js"],
        "/manage/[campaignSlug]/edit": [e, "static/chunks/f18585be-9c5ef0a1a30db516.js", a, s, t, i, d, f, o, g, _, b, j, v, B, D, aj, "static/chunks/70734-72c8a4822f5a058a.js", "static/css/000175129287fb2d.css", "static/chunks/21556-504e4eb0108055d7.js", "static/chunks/96863-24c756c582f40259.js", c, n, u, S, I, am, a2, "static/chunks/518-1af13979ca990ed4.js", "static/css/cc10800814895417.css", "static/chunks/pages/manage/[campaignSlug]/edit-003d0a3a7f790c08.js"],
        "/manage/[campaignSlug]/edit/settings": [e, a, s, t, i, d, f, g, j, v, "static/chunks/25471-0883e3ecc529eafd.js", c, n, u, p, S, I, C, A, T, a2, "static/css/3ebbfad187710b0c.css", "static/chunks/pages/manage/[campaignSlug]/edit/settings-dffeea77b5b84604.js"],
        "/manage/[campaignSlug]/edit/team": [e, a, s, t, i, d, f, o, g, _, j, v, B, D, sp, c, n, u, p, S, I, C, A, T, a2, "static/css/c3a4a5f93cd0f651.css", "static/chunks/pages/manage/[campaignSlug]/edit/team-de658367bc3914f7.js"],
        "/manage/[campaignSlug]/fundraiser": [e, a, s, t, i, d, f, o, g, _, j, v, "static/chunks/28484-dc760c1b7ae76912.js", c, n, u, p, S, I, C, A, T, s8, ee, "static/css/e2979475b5cd90e3.css", "static/chunks/pages/manage/[campaignSlug]/fundraiser-a43c659fd3b3f253.js"],
        "/manage/[campaignSlug]/fundraiser/updates": [e, a, s, t, i, d, f, o, g, _, b, E, j, v, B, D, aU, aq, c, n, u, p, S, I, "static/css/9d5bd21d5ba7a44e.css", "static/chunks/pages/manage/[campaignSlug]/fundraiser/updates-7a078ee03caf0537.js"],
        "/manage/[campaignSlug]/post-publish": ["static/css/12647f0b01ea2fdb.css", "static/chunks/pages/manage/[campaignSlug]/post-publish-075a53b02802e731.js"],
        "/manage/[campaignSlug]/supporters/[[...tab]]": [e, a, s, t, i, d, f, g, j, v, aR, s2, c, n, u, p, S, I, C, A, T, so, aX, s_, es, "static/css/db764974589679c9.css", "static/chunks/pages/manage/[campaignSlug]/supporters/[[...tab]]-eb639d410e20ef71.js"],
        "/manage/[campaignSlug]/tasks/[taskCategory]": [e, a, s, t, i, d, f, g, j, v, c, n, u, p, S, I, C, A, T, "static/css/a9c3b4245f8d89b1.css", "static/chunks/pages/manage/[campaignSlug]/tasks/[taskCategory]-8b67677fcb8bb868.js"],
        "/manage/[campaignSlug]/transfers": [e, a, s, t, i, d, f, o, g, _, j, v, q, ae, "static/chunks/72362-fa6465ff70206864.js", c, n, u, p, S, I, C, A, T, F, ac, "static/css/de1e60a562953bd9.css", "static/chunks/pages/manage/[campaignSlug]/transfers-508347178a0cf77e.js"],
        "/manage/[campaignSlug]/transfers/activity": [e, a, s, t, i, d, f, g, j, v, q, ae, c, n, u, p, S, I, C, A, T, F, ac, "static/css/191876e3501faac7.css", "static/chunks/pages/manage/[campaignSlug]/transfers/activity-dc697355f0e5b794.js"],
        "/manage/[campaignSlug]/transfers/beneficiary/accept": [a, t, o, _, b, $, ad, a7, en, c, a9, ei, er, "static/chunks/pages/manage/[campaignSlug]/transfers/beneficiary/accept-d5aad203d5cf5f9f.js"],
        "/manage/[campaignSlug]/transfers/beneficiary/decline": [a, t, o, _, b, $, ad, a7, en, c, a9, ei, er, "static/chunks/pages/manage/[campaignSlug]/transfers/beneficiary/decline-899a47e5ca7c3956.js"],
        "/manage/[campaignSlug]/transfers/confirm-details": [a, t, i, o, _, b, $, "static/chunks/91192-69dfab2419ae1d23.js", "static/css/f539a3a207c83956.css", "static/chunks/pages/manage/[campaignSlug]/transfers/confirm-details-01a2439ace542e11.js"],
        "/manage/[campaignSlug]/transfers/kyc": [e, a, s, t, i, d, f, o, g, _, j, v, ed, c, n, u, p, S, I, C, A, T, F, az, ef, "static/chunks/pages/manage/[campaignSlug]/transfers/kyc-d8b22b926d57556b.js"],
        "/manage/[campaignSlug]/transfers/kyc/name": [e, a, s, t, i, d, f, o, g, _, j, v, ed, c, n, u, p, S, I, C, A, T, F, az, ef, "static/chunks/pages/manage/[campaignSlug]/transfers/kyc/name-f07f99b01a02142d.js"],
        "/manage/[campaignSlug]/transfers/kyc-confirm": [e, a, s, t, i, d, f, o, g, _, j, v, "static/chunks/93586-99df67f0e555803a.js", c, n, u, p, S, I, C, A, T, F, az, "static/css/fd788b6fd9a3b159.css", "static/chunks/pages/manage/[campaignSlug]/transfers/kyc-confirm-058554be12148dbc.js"],
        "/manage/[campaignSlug]/transfers/kyc-org": [e, a, s, t, i, d, f, o, g, _, j, v, eu, c, n, u, p, S, I, C, A, T, F, az, "static/css/0f264de44724a2f8.css", "static/chunks/pages/manage/[campaignSlug]/transfers/kyc-org-461ba52bd85f2357.js"],
        "/manage/[campaignSlug]/transfers/link-bank/manual": [e, a, s, t, i, d, f, o, g, _, j, v, eg, c, n, u, p, S, I, C, A, T, F, eo, aJ, "static/chunks/pages/manage/[campaignSlug]/transfers/link-bank/manual-d1167ba4cef16927.js"],
        "/manage/[campaignSlug]/transfers/link-bank/review": [e, a, s, t, i, d, f, o, g, _, j, v, eg, c, n, u, p, S, I, C, A, T, F, eo, "static/css/43a0a453ce901e52.css", "static/chunks/pages/manage/[campaignSlug]/transfers/link-bank/review-34631f574fb41373.js"],
        "/manage/[campaignSlug]/transfers/link-bank/sign-in": [e, a, s, t, i, d, f, g, j, v, c, n, u, p, S, I, C, A, T, F, e_, aJ, "static/chunks/pages/manage/[campaignSlug]/transfers/link-bank/sign-in-2224c4a466e2984d.js"],
        "/manage/[campaignSlug]/transfers/partner-intro": [e, a, s, t, i, d, f, o, g, _, j, v, eu, c, n, u, p, S, I, C, A, T, F, "static/css/bc0b946463dc02eb.css", "static/chunks/pages/manage/[campaignSlug]/transfers/partner-intro-af37d8284018d4e9.js"],
        "/manage/[campaignSlug]/transfers/redirect": [e, a, s, t, i, d, f, g, j, v, c, n, u, p, S, I, C, A, T, F, e_, aJ, "static/chunks/pages/manage/[campaignSlug]/transfers/redirect-1965837b595e5c2c.js"],
        "/manage/[campaignSlug]/transfers/setup/pending": [e, a, s, t, i, d, f, g, j, v, c, n, u, p, S, I, C, A, T, F, aJ, "static/chunks/pages/manage/[campaignSlug]/transfers/setup/pending-a812f833ac7bbf6b.js"],
        "/manage/[campaignSlug]/transition": [e, a, s, t, i, d, f, g, b, j, v, c, n, u, p, m, S, I, C, A, T, "static/css/3a50cceb5d7f2905.css", "static/chunks/pages/manage/[campaignSlug]/transition-7f7985e6f1ef0958.js"],
        "/manage/[campaignSlug]/updates": [e, a, s, t, i, d, f, o, g, _, b, E, j, v, B, D, q, aU, ae, aq, c, n, u, p, S, I, F, ac, "static/css/b021a3cd85fb98ce.css", "static/chunks/pages/manage/[campaignSlug]/updates-bdef307d83073ada.js"],
        "/messages": [e, ep, a, s, d, f, eh, n, u, el, eb, em, "static/chunks/pages/messages-e52b2822fb048491.js"],
        "/messages/[tab]": [e, ep, a, s, d, f, eh, n, u, el, eb, em, "static/chunks/pages/messages/[tab]-fc2a799b4216370a.js"],
        "/notifications/subscribe": [e, ar, a, s, d, f, av, n, u, p, aI, a0, sa, "static/chunks/pages/notifications/subscribe-a410465344ba6ad8.js"],
        "/notifications/unsubscribe": [e, ar, a, s, d, f, av, n, u, p, aI, a0, sa, "static/chunks/pages/notifications/unsubscribe-b034840129ce244a.js"],
        "/oauth/consent": [U, y, Y, Z, "static/chunks/pages/oauth/consent-b62d981fb596c94c.js"],
        "/partners": [a, J, "static/css/dc2f12dc1d73bc70.css", "static/chunks/pages/partners-7fcc8eda5fbb0913.js"],
        "/partners/404": ["static/css/d11c836f6b1070cc.css", "static/chunks/pages/partners/404-e141f4f02b863638.js"],
        "/partners/account": [a, t, i, o, _, b, V, "static/chunks/34096-58fb9ad34c10cd03.js", J, W, aY, "static/css/0b4b08a332bc6f83.css", "static/chunks/pages/partners/account-1b983f109b2274df.js"],
        "/partners/admin": [a, t, o, _, b, V, J, W, "static/css/b5824001fee45fe7.css", "static/chunks/pages/partners/admin-4cc8b577f6ef2c76.js"],
        "/partners/admin/collections": [a, t, o, _, b, E, V, J, W, ek, "static/css/d23936f157a5e0f2.css", "static/chunks/pages/partners/admin/collections-90a42b58bf3773f5.js"],
        "/partners/admin/partner/[id]": [a, t, o, _, b, E, V, J, W, "static/css/353d3b076c46dab5.css", "static/chunks/pages/partners/admin/partner/[id]-50cee16e61265d3f.js"],
        "/partners/claim/fundraiser": [e, a, s, d, f, n, u, p, "static/css/42688c730249689d.css", "static/chunks/pages/partners/claim/fundraiser-a0b2b9ff02f3c057.js"],
        "/partners/collections": [a, t, o, _, b, E, V, J, W, ek, "static/css/c969d6c47b96683e.css", "static/chunks/pages/partners/collections-9ae370fbdae97f62.js"],
        "/partners/collections/[cid]": [a, t, o, _, b, E, V, c, J, W, ej, "static/css/4dead07d0b3f6257.css", "static/chunks/pages/partners/collections/[cid]-312380fbdd509ca4.js"],
        "/partners/create/[partnerSlug]": ["static/chunks/pages/partners/create/[partnerSlug]-f4b4f1c5ea9d8810.js"],
        "/partners/dashboard": [a, t, i, o, _, b, V, eS, c, J, W, eU, "static/css/c05355e787f8b31b.css", "static/chunks/pages/partners/dashboard-3e15acafa9ff4079.js"],
        "/partners/fundraisers": [a, t, i, o, _, b, V, eS, c, J, W, ej, eU, "static/css/831277bf3616e3b4.css", "static/chunks/pages/partners/fundraisers-32ebf3a75fdde58a.js"],
        "/partners/landing-page-builder": ["static/chunks/pages/partners/landing-page-builder-e4f02d8e9859fe09.js"],
        "/partners/widgets/fundraiser/[shortUrlCode]/[widgetType]": [N, s4, "static/chunks/pages/partners/widgets/fundraiser/[shortUrlCode]/[widgetType]-1787abe9f6206c74.js"],
        "/partners/[partnerSlug]": [e, a, s, d, f, Q, "static/chunks/8794-c86de03d6cbcd546.js", c, n, u, p, "static/css/e3b430f36186c2d5.css", "static/chunks/pages/partners/[partnerSlug]-4360bf55ec35e035.js"],
        "/s": [e, a, s, t, i, d, f, o, g, _, j, aa, Q, as, a_, "static/chunks/86162-3d4674b33f23d6b2.js", c, n, u, p, S, C, ay, "static/css/c784de385f512072.css", "static/chunks/pages/s-38eb3f499429ea37.js"],
        "/sign-in": [U, a, y, K, N, Y, ey, Z, "static/chunks/pages/sign-in-ab05c2ecc7852742.js"],
        "/sign-in/[campaignUrl]": [U, a, y, K, N, Y, ey, Z, "static/chunks/pages/sign-in/[campaignUrl]-a90b96638b2731a0.js"],
        "/sign-out": [e, a, s, d, f, n, u, p, "static/css/8ad38a375e69e4db.css", "static/chunks/pages/sign-out-f73a766b9c0f3028.js"],
        "/sign-up": [U, y, K, N, Y, ev, Z, "static/chunks/pages/sign-up-a8aa6274ac4b0ff4.js"],
        "/sign-up/[campaignUrl]": [U, y, K, N, Y, ev, Z, "static/chunks/pages/sign-up/[campaignUrl]-7196e163d15de30c.js"],
        "/u/profile": ["static/chunks/pages/u/profile-85c2fc7667881656.js"],
        "/u/profile/edit": [e, a, s, d, f, E, B, D, a1, n, u, p, P, at, eI, "static/css/755732115db21c92.css", "static/chunks/pages/u/profile/edit-bca624d2a2bf5e93.js"],
        "/u/profile/edit/list": [e, a, s, d, f, o, _, E, ss, n, u, p, at, se, "static/css/df8437e67780fd63.css", "static/chunks/pages/u/profile/edit/list-e6cd825deeb7dad3.js"],
        "/u/profile/notifications": [e, a, s, t, i, d, f, g, n, u, p, at, ao, aQ, "static/css/89b1d6069d6010bc.css", "static/chunks/pages/u/profile/notifications-c8133e1526fb4ef2.js"],
        "/u/profile/onboarding": [B, D, c, P, "static/css/053df4dc5ee7251e.css", "static/chunks/pages/u/profile/onboarding-d6655cf90cea6ea0.js"],
        "/u/[profileId]": [e, U, a, s, t, i, d, f, o, g, _, E, y, B, D, R, ss, "static/chunks/57653-6d090e80d8afc2e5.js", c, n, u, p, P, O, a$, se, eI, "static/css/905a064739f5f440.css", "static/chunks/pages/u/[profileId]-a3b57b9dd8881030.js"],
        "/u/[profileId]/activity": [e, U, a, s, t, i, d, f, g, y, R, "static/chunks/20943-de035df0c8d17e93.js", c, n, u, p, ao, a$, "static/css/11bcfe97c2df98ec.css", "static/chunks/pages/u/[profileId]/activity-e2aae9af85cafea0.js"],
        "/u/[profileId]/followers": [e, a, s, d, f, sc, n, u, p, at, ao, aQ, st, sn, "static/chunks/pages/u/[profileId]/followers-aae47dd4991fc78a.js"],
        "/u/[profileId]/following": [e, a, s, d, f, sc, n, u, p, at, ao, aQ, st, sn, "static/chunks/pages/u/[profileId]/following-02acffe2347497a3.js"],
        "/u/[profileId]/foryou": [e, a, s, d, f, sc, n, u, p, at, ao, aQ, st, sn, "static/chunks/pages/u/[profileId]/foryou-1caaf985c79e47a7.js"],
        "/u/[profileId]/highlights": [e, a, s, d, f, o, _, E, ss, c, n, u, p, O, at, ao, se, "static/css/7643f386f5e38d51.css", "static/chunks/pages/u/[profileId]/highlights-bacc16374dc1df87.js"],
        "/unsubscribe": [e, ar, a, s, d, f, av, n, u, p, aI, a0, sa, "static/chunks/pages/unsubscribe-183a4a41e85f2480.js"],
        sortedPages: ["/404", "/_app", "/_error", "/account/connect/[...provider]", "/account/giving-funds/[id]", "/account/impact", "/account/impact/[fundraiserSlug]", "/account/notifications", "/account/profile", "/auth", "/campaign/[campaignId]/leaderboard", "/campaign/[campaignId]/register", "/campaign/[campaignId]/startfundraising", "/causes/[causeSlug]", "/charity/claim", "/charity/claim/existing-claim", "/charity/claim/existing-claim/[charityId]", "/charity/claim/id-verification", "/charity/claim/id-verification/[charityId]", "/charity/claim/loading", "/charity/claim/review", "/charity/claim/review/[charityId]", "/charity/claim/search", "/charity/claim/success", "/charity/claim/success/[charityId]", "/charity/claim/verification-pending", "/charity/claim/verification-pending/[charityId]", "/charity/claim/verify-email", "/charity/claim/verify-email/[charityId]", "/charity/[charitySlug]", "/charity/[charitySlug]/dashboard", "/charity/[charitySlug]/donate", "/charity/[charitySlug]/donate/thankyou", "/charity/[charitySlug]/edit", "/charity/[charitySlug]/edit/admins", "/charity/[charitySlug]/edit/brand-kit", "/charity/[charitySlug]/edit/settings", "/charity-sign-up", "/communities/[communitySlug]", "/contact/suggest/[form]", "/create/fundraiser", "/create/fundraiser/agreement/[campaignUrl]", "/create/fundraiser/category", "/create/fundraiser/category/[campaignUrl]", "/create/fundraiser/chat", "/create/fundraiser/chat/[campaignUrl]", "/create/fundraiser/confirm/[campaignUrl]", "/create/fundraiser/drafts", "/create/fundraiser/error", "/create/fundraiser/error/[campaignUrl]", "/create/fundraiser/goal", "/create/fundraiser/goal/[campaignUrl]", "/create/fundraiser/media", "/create/fundraiser/media/[campaignUrl]", "/create/fundraiser/npo/details", "/create/fundraiser/npo/details/[campaignUrl]", "/create/fundraiser/partner/draft", "/create/fundraiser/partner/review/[campaignUrl]", "/create/fundraiser/review/[campaignUrl]", "/create/fundraiser/start/[takeoverType]", "/create/fundraiser/start/[takeoverType]/[campaignUrl]", "/create/fundraiser/story/[campaignUrl]", "/create/fundraiser/template/search", "/create/fundraiser/template/search/draft", "/create/fundraiser/template/search/draft/[campaignUrl]", "/create/fundraiser/template/search/[moment]", "/create/fundraiser/template/[charityId]/agreement/[campaignUrl]", "/create/fundraiser/template/[charityId]/date-of-birth", "/create/fundraiser/template/[charityId]/draft", "/create/fundraiser/template/[charityId]/draft/[campaignUrl]", "/create/fundraiser/template/[charityId]/moment", "/create/fundraiser/template/[charityId]/moment/[campaignUrl]", "/create/fundraiser/template/[charityId]/review/[campaignUrl]", "/create/fundraiser/title/[campaignUrl]", "/create/fundraiser/types", "/create/fundraiser/types/[campaignUrl]", "/create/fundraiser/under-review/[campaignUrl]", "/create/fundraiser/urgent/ukraine", "/create/fundraiser/[campaignUrl]", "/discover", "/discover/[categoryName]", "/donations", "/donations/fixDonation", "/donations/[signedDonationId]", "/f/[campaignUrl]/donate", "/f/[campaignUrl]/donate/submitting/[paymentMethodType]", "/f/[campaignUrl]/donate/thankyou/comment", "/f/[campaignUrl]/donate/thankyou/share", "/f/[campaignUrl]/donations/paused", "/f/[campaignUrl]/leaderboard", "/f/[campaignUrl]/print", "/f/[campaignUrl]/qr", "/f/[campaignUrl]/share/embed", "/f/[campaignUrl]/widget/partner/error", "/f/[campaignUrl]/widget/partner/[type]", "/f/[campaignUrl]/widget/partner/[type]/donate", "/f/[campaignUrl]/widget/partner/[type]/receipt", "/f/[campaignUrl]/widget/[...type]", "/f/[campaignUrl]/[contentType]/[contentId]/gallery/[contentIndex]", "/f/[campaignUrl]/[[...fundraiserPageParams]]", "/forgot-password", "/fundraisers", "/gift-cards/accept", "/gift-cards/send", "/giving-funds", "/giving-funds/contribution-success", "/giving-funds/daf-to-daf", "/giving-funds/onboarding", "/giving-funds/s", "/giving-funds/s/add-favorites", "/giving-funds/s/local", "/giving-funds/[id]/activity", "/giving-funds/[id]/contribute", "/giving-funds/[id]/contribute-stocks", "/giving-funds/[id]/contribution/[transactionId]", "/giving-funds/[id]/daf-to-daf", "/giving-funds/[id]/donation/[transactionId]", "/giving-funds/[id]/favorites", "/giving-funds/[id]/get-tax-summary", "/giving-funds/[id]/invest", "/giving-funds/[id]/investment-activity", "/giving-funds/[id]/payment-methods", "/giving-funds/[id]/portfolio", "/giving-funds/[id]/portfolio/[portfolioId]", "/giving-funds/[id]/set-goals", "/home", "/manage/[campaignSlug]", "/manage/[campaignSlug]/accept-team-invite", "/manage/[campaignSlug]/activity", "/manage/[campaignSlug]/activity/scheduled-shares", "/manage/[campaignSlug]/activity/share-history", "/manage/[campaignSlug]/donations", "/manage/[campaignSlug]/donors/donations", "/manage/[campaignSlug]/donors/[...contacts]", "/manage/[campaignSlug]/edit", "/manage/[campaignSlug]/edit/settings", "/manage/[campaignSlug]/edit/team", "/manage/[campaignSlug]/fundraiser", "/manage/[campaignSlug]/fundraiser/updates", "/manage/[campaignSlug]/post-publish", "/manage/[campaignSlug]/supporters/[[...tab]]", "/manage/[campaignSlug]/tasks/[taskCategory]", "/manage/[campaignSlug]/transfers", "/manage/[campaignSlug]/transfers/activity", "/manage/[campaignSlug]/transfers/beneficiary/accept", "/manage/[campaignSlug]/transfers/beneficiary/decline", "/manage/[campaignSlug]/transfers/confirm-details", "/manage/[campaignSlug]/transfers/kyc", "/manage/[campaignSlug]/transfers/kyc/name", "/manage/[campaignSlug]/transfers/kyc-confirm", "/manage/[campaignSlug]/transfers/kyc-org", "/manage/[campaignSlug]/transfers/link-bank/manual", "/manage/[campaignSlug]/transfers/link-bank/review", "/manage/[campaignSlug]/transfers/link-bank/sign-in", "/manage/[campaignSlug]/transfers/partner-intro", "/manage/[campaignSlug]/transfers/redirect", "/manage/[campaignSlug]/transfers/setup/pending", "/manage/[campaignSlug]/transition", "/manage/[campaignSlug]/updates", "/messages", "/messages/[tab]", "/notifications/subscribe", "/notifications/unsubscribe", "/oauth/consent", "/partners", "/partners/404", "/partners/account", "/partners/admin", "/partners/admin/collections", "/partners/admin/partner/[id]", "/partners/claim/fundraiser", "/partners/collections", "/partners/collections/[cid]", "/partners/create/[partnerSlug]", "/partners/dashboard", "/partners/fundraisers", "/partners/landing-page-builder", "/partners/widgets/fundraiser/[shortUrlCode]/[widgetType]", "/partners/[partnerSlug]", "/s", "/sign-in", "/sign-in/[campaignUrl]", "/sign-out", "/sign-up", "/sign-up/[campaignUrl]", "/u/profile", "/u/profile/edit", "/u/profile/edit/list", "/u/profile/notifications", "/u/profile/onboarding", "/u/[profileId]", "/u/[profileId]/activity", "/u/[profileId]/followers", "/u/[profileId]/following", "/u/[profileId]/foryou", "/u/[profileId]/highlights", "/unsubscribe"]
    }
}("static/chunks/83314-800723dddd505e32.js", "static/chunks/69564-51002b7de19a4609.js", "static/chunks/ac262c97-05d574404bcbdf98.js", "static/chunks/84757-edf98bea4075e4a9.js", "static/chunks/98494-9100319476033567.js", "static/chunks/9431-ca9da96464efd605.js", "static/chunks/79140-bed13ef8334e82f5.js", void 0, "static/chunks/58923-56d6a65888a7853d.js", "static/chunks/6351-20d2252c4c9840e0.js", "static/chunks/3263-ed69a0d8476528d3.js", "static/chunks/24316-80a0823d1ac42965.js", "static/chunks/17078-05f42f21a2ddfa37.js", "static/chunks/42588-d040ce6d509650f2.js", "static/chunks/73032-1c0454a184a497b0.js", "static/chunks/31676-28a9f63d4c8f1f3f.js", "static/chunks/54341-30ebbdb4dc376b89.js", "static/chunks/23732-0aa8f9e4535316bd.js", "static/chunks/83070-ebeb7f873d72925e.js", "static/chunks/55288-c5dfda7fd61850d8.js", "static/chunks/411-b6900581075fe4c5.js", "static/chunks/5911-4fd120555023588e.js", "static/chunks/7f2d235d-4e9f44bf9f88e281.js", "static/chunks/73042-c6a32713e731e3f4.js", "static/chunks/22790-b79b6e551e136d25.js", "static/chunks/86208-64bd6e516febca09.js", "static/chunks/80198-1745024d54463407.js", "static/css/e8725aab2d45b544.css", "static/chunks/12118-c7761dba257b41bb.js", "static/chunks/70762-6547cdafe4e20986.js", "static/chunks/82630-65392e4d53ab895b.js", "static/chunks/33885-0ee0d9126832904f.js", "static/chunks/91387-3bbfacb9839ebfb8.js", "static/chunks/36912-8a4f456f71dccaaf.js", "static/chunks/72277-fac83a4e38b6ea44.js", "static/chunks/82802-238e7e34e8edeb77.js", "static/chunks/77655-9a38e95edb659fc4.js", "static/chunks/66389-0eda35731472cde1.js", "static/chunks/6669-41b2bedd7ae74a06.js", "static/chunks/bc619335-c8650e9076d54ce0.js", "static/chunks/96751-997162ea284e6a5d.js", "static/chunks/32521-09b3fe2135089dd9.js", "static/chunks/77496-a73f09da0990c455.js", "static/chunks/50196-102d5bee5b3806f0.js", "static/chunks/73193-50069d27a0209f4d.js", "static/chunks/69706-1c3724b28f942d2e.js", "static/chunks/41001-0a834c2a49ee767d.js", "static/chunks/41091-75c6765795967016.js", "static/chunks/42802-e1ab6d4f21cc75b7.js", "static/chunks/66799-59b7e42131448c76.js", "static/chunks/42-68a5753cd6e1f67a.js", "static/chunks/16276-3241ae148244262e.js", "static/css/8cda6d34ec76a60f.css", "static/chunks/87402-9f5e8348ba42cc8a.js", "static/chunks/1450-e9ef4acb6759dbcd.js", "static/chunks/17566-fb43fbaf0ecb03f8.js", "static/chunks/79823-953e207fb33db101.js", "static/chunks/26705-3ec838641f6afc63.js", "static/chunks/87371-9b667a2429b950e2.js", "host", "partner.*", "static/chunks/991f21bb-6f7ad89428a01d56.js", "static/chunks/74124-764297bbbf1ffed4.js", "static/chunks/f20718fe-42bf203816f795dc.js", "static/chunks/97470-3aaa7b0fc3711d5a.js", "static/chunks/75119-569b03a3eaa34094.js", "static/chunks/36496-295faf010145ca67.js", "static/chunks/55063-bf2bfd02f44655ea.js", "static/chunks/70672-1376c9d8c7667e65.js", "static/chunks/86d1942f-85997a2451ea10b0.js", "static/chunks/10154-165b60774770c36b.js", "static/chunks/56451-0281106bbb934b1e.js", "static/chunks/29193-bb835563c9b677c8.js", "static/chunks/31223-49166922bbd191d8.js", "static/chunks/58108-d153b2ae4a3cd5ed.js", "static/chunks/48460-ed81c8cc88935cdd.js", "static/chunks/4129-8885e89a04001c3f.js", "static/chunks/41190-3c7f19cf7f8d7a8f.js", "static/chunks/60639-4ee16a0fa6564fa5.js", "static/chunks/59889-431603d6a7092b12.js", "static/chunks/17275-a2bcc2b7ea7f2608.js", "static/chunks/19868-8f4e730b5a42c312.js", "static/chunks/16279-a2f4ae861ea7ee27.js", "static/chunks/37897-a9757da2792bd251.js", "static/chunks/ac363f47-801e164f6a26345b.js", "static/chunks/89919-d982c5fae5ed6398.js", "static/chunks/59684-c689bde6853403f3.js", "static/css/b1e13b3a83ba5d67.css", "static/chunks/77658-ed2d60dbf34acb8b.js", "static/chunks/54429-168d1327458e7d25.js", "static/css/019fb27ce039f4ec.css", "static/chunks/20207-bb76ac2886e39912.js", "static/chunks/44739-768f1409dd2f9907.js", "static/chunks/67229-220b1a222be640d0.js", "static/chunks/33204-48b8eef938f2d5fb.js", "static/chunks/63338-86340e63a857f3a9.js", "static/chunks/2473-6ea73765515c4450.js", "static/chunks/43452-dea1e6cada06a5a8.js", "static/chunks/34405-e8c0a86335e6f7f0.js", "static/chunks/66833-bfb8c0ea6a5ed78a.js", "static/chunks/11986-a5a5dea17f5de795.js", "static/css/310942103b525d79.css", "static/chunks/54381-3b97bfc5dbe164e0.js", "static/chunks/21757-36ab974d21f16a28.js", "static/chunks/55005-cb2d041f0af496c4.js", "static/chunks/38943-ee293bb90736c8dd.js", "static/chunks/15880-2818451f81277dc7.js", "static/chunks/5770-51c18ae79a1625ca.js", "static/chunks/98660-5c362c7208580b44.js", "static/chunks/54136-4b42787d9b7fed9f.js", "static/chunks/96106-0e0d16f56abe0a0e.js", "static/chunks/48869-7e7e28e05728cfac.js", "static/css/dd1d9ac7f996943f.css", "static/chunks/89527-964d28bc25670da8.js", "static/chunks/30628-83d150245eab0675.js", "static/chunks/16343-387331a442869d99.js", "static/chunks/89034-e93d82d42ae34d47.js", "static/chunks/90206-8180e2a6503a8e86.js", "static/css/d797ece8e2196cc8.css", "static/chunks/21871-72d3f2e8172733c3.js", "static/chunks/12967-01116b47731dd998.js", "static/chunks/18054-d26509164db08c34.js", "static/chunks/42906-0f10593fe5ea15c5.js", "static/css/9d33941d11e7d267.css", "/:nextInternalLocale(en_US|de_AT|de_CH|de_DE|en_AU|en_CA|en_DK|en_FI|en_GB|en_IE|en_NO|en_SE|es_ES|es_US|es_MX|fr_BE|fr_CA|fr_CH|fr_FR|fr_LU|it_IT|nl_BE|nl_NL|pt_PT)", "/:nextInternalLocale/f/:campaignUrl?modal=share", "static/css/2134d2e89dcbe911.css", "static/chunks/88355-b286e8a8ec608515.js", "static/css/d59e46fff0dd9243.css", "static/chunks/63476-fd7010bd40011c00.js", "static/chunks/80039-763acf449f4e5618.js", "static/chunks/76739-ce745cbbdaadeb0e.js", "static/chunks/15222-e46134fb57fbc3fd.js", "static/chunks/10106-eb7e9571855d3d9c.js", "static/css/ddeeec7b17dd54f2.css", "static/chunks/59188-28e3c30d77fcae99.js", "static/css/19d3b36e6357216d.css", "static/chunks/51925-9035e80a77f9ed40.js", "static/css/580938dad660cf72.css", "static/chunks/73822-38c179c8312fc3fd.js", "static/css/5f3405af0decd06a.css", "static/css/c0b26ecbb4695d5a.css", "static/chunks/76708-dd22310157b72a9b.js", "static/css/76177877afce92ed.css", "static/chunks/73647-70130684f776563b.js", "static/css/ea7bc0f96bed5516.css", "static/chunks/88238-5f3568abfb7e69a2.js", "static/chunks/74471-5c229223eaaab608.js", "static/chunks/494-dab75b95043d0f80.js", "static/css/0fd0e184653adcbb.css", "static/chunks/46591-be53696b842a45e4.js", "static/chunks/30098-2e6675d5fd6637f6.js", "static/css/5ea8785754bd8427.css", "static/chunks/29680-d5a6cf1be0dbde28.js", "static/chunks/5818-7d12e2ef0f1119db.js", "static/css/66212978616451c4.css", "static/chunks/57035-90044c42e3148e26.js", "static/css/9d3c1142179de455.css", "static/chunks/98818-13b612186c479bf0.js", "static/chunks/32982-20f7de8bc0f0ba56.js", "static/css/7eb4f028484d93e3.css", "static/chunks/6611-1dca74436af0de22.js", "static/css/2c34d3de4af6846d.css", "static/chunks/94528-d63110806f6e00a9.js", "static/css/f76a6460f26e697f.css", "static/chunks/61699-1e3e1cdba6031806.js", "static/chunks/29035-3bbd974516c35379.js", "static/css/ff542b6686ccea99.css", "static/chunks/47572-b08ebedfb551a0e1.js", "static/chunks/94485-b4a0fa9cfb9fb1e0.js", "static/chunks/57290-88ad234257cf8dcf.js", "static/css/3dfec1f8cc9240d9.css", "static/chunks/31231-0a31ca67a41a1546.js", "static/css/06a18af468759ac3.css", "static/chunks/58674-3a31329ccd2aff19.js", "static/chunks/12301-fd9668779c462e6f.js", "static/css/7a9484e844bd2519.css", "static/chunks/72000-8f0fefdcbd1901a8.js", "static/chunks/72114-d81c9bbcae43dd22.js", "static/chunks/31471-9fa1a9d92c81d980.js", "static/chunks/90707-548da99e35e71caa.js", "static/chunks/94370-3ec3ea80e3011bc9.js", "static/chunks/87936-59687262743a9951.js", "static/chunks/4222-f94ae5a9dfe56dce.js", "static/chunks/55163-8d638a8f3987b404.js", "static/css/701ebebbb157636a.css", "static/chunks/15693-8475842242fce73a.js", "static/chunks/93536-fdb6764b0f694800.js", "static/chunks/45293-505ad579b5b263b7.js", "static/css/8390205b2a268fca.css", "static/chunks/58237-219ceb0745db9369.js", "static/css/571f86e454e5b2bd.css", "static/chunks/30597-984288ba7e481c56.js", "static/chunks/65274-63b924b48924f06d.js", "static/chunks/75868-9b4e24e2c429c05c.js", "static/chunks/83331-604a63ca4f67bab7.js", "static/chunks/1b25d643-c83ed7d4ae21c3e6.js", "static/chunks/35671-593710e673e3eef7.js", "static/chunks/89787-268c2bb5cfe0bdce.js", "static/chunks/52312-ad546b573c0eb8bb.js", "static/css/99f463580b78a08a.css", "static/chunks/69524-a426f57564b0a2a1.js", "static/chunks/18445-c7f0b5d27b895e52.js", "static/chunks/58447-c35ac1e32fbfc5c3.js", "static/chunks/3364-14058695c308dd9f.js", "static/chunks/25860-74e92031dc76210a.js", "static/chunks/66808-188af9f170e1611f.js", "static/chunks/82675-61a92151c3c589a2.js"), self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB();