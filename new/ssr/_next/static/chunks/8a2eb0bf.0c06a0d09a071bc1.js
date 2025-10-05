"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [50445], {
        955288: function(e, t, r) {
            r.r(t), r.d(t, {
                default: function() {
                    return tz
                }
            }), "undefined" != typeof globalThis && (globalThis.regeneratorRuntime = void 0);
            var n, i, o, s, a, c, u, d, l, g, p, v, m, f, h, y, S, _, P, b, I, C, A, w, E, T, k, D = {
                    _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                    encode: function(e) {
                        try {
                            if (window.btoa && window.atob) return window.btoa(unescape(encodeURIComponent(e)))
                        } catch (e) {
                            console.error("Error encoding cookie values into Base64:" + e)
                        }
                        return this._encode(e)
                    },
                    _encode: function(e) {
                        var t, r, n, i, o, s, a, c = "",
                            u = 0;
                        for (e = O.encode(e); u < e.length;) t = e.charCodeAt(u++), r = e.charCodeAt(u++), n = e.charCodeAt(u++), i = t >> 2, o = (3 & t) << 4 | r >> 4, s = (15 & r) << 2 | n >> 6, a = 63 & n, isNaN(r) ? s = a = 64 : isNaN(n) && (a = 64), c = c + D._keyStr.charAt(i) + D._keyStr.charAt(o) + D._keyStr.charAt(s) + D._keyStr.charAt(a);
                        return c
                    },
                    decode: function(e) {
                        try {
                            if (window.btoa && window.atob) return decodeURIComponent(escape(window.atob(e)))
                        } catch (e) {}
                        return D._decode(e)
                    },
                    _decode: function(e) {
                        var t, r, n, i, o, s, a, c = "",
                            u = 0;
                        for (e = e.replace(/[^A-Za-z0-9\+\/\=]/g, ""); u < e.length;) i = D._keyStr.indexOf(e.charAt(u++)), o = D._keyStr.indexOf(e.charAt(u++)), s = D._keyStr.indexOf(e.charAt(u++)), a = D._keyStr.indexOf(e.charAt(u++)), t = i << 2 | o >> 4, r = (15 & o) << 4 | s >> 2, n = (3 & s) << 6 | a, c += String.fromCharCode(t), 64 !== s && (c += String.fromCharCode(r)), 64 !== a && (c += String.fromCharCode(n));
                        return O.decode(c)
                    }
                },
                O = {
                    encode: function(e) {
                        for (var t, r = "", n = 0; n < e.length; n++) 128 > (t = e.charCodeAt(n)) ? r += String.fromCharCode(t) : 127 < t && 2048 > t ? r += String.fromCharCode(192 | t >> 6) + String.fromCharCode(128 | 63 & t) : r += String.fromCharCode(224 | t >> 12) + String.fromCharCode(128 | 63 & t >> 6) + String.fromCharCode(128 | 63 & t);
                        return r
                    },
                    decode: function(e) {
                        for (var t = "", r = 0, n = 0, i = 0; r < e.length;) 128 > (n = e.charCodeAt(r)) ? (t += String.fromCharCode(n), r++) : 191 < n && 224 > n ? (t += String.fromCharCode((31 & n) << 6 | 63 & e.charCodeAt(r + 1)), r += 2) : (t += String.fromCharCode((15 & n) << 12 | (63 & e.charCodeAt(r + 1)) << 6 | 63 & e.charCodeAt(r + 2)), r += 3);
                        return t
                    }
                },
                U = {
                    forEach: function(e, t) {
                        if (null == this) throw TypeError(" this is null or not defined");
                        var r, n, i, o = Object(this),
                            s = o.length >>> 0;
                        if ("function" != typeof e) throw TypeError(e + " is not a function");
                        for (1 < arguments.length && (r = t), n = 0; n < s;) n in o && (i = o[n], e.call(r, i, n, o)), n++
                    },
                    map: function(e, t) {
                        if (null === this) throw TypeError(" this is null or not defined");
                        var r, n, i, o, s, a = Object(this),
                            c = a.length >>> 0;
                        if ("function" != typeof e) throw TypeError(e + " is not a function");
                        for (1 < arguments.length && (r = t), n = Array(c), i = 0; i < c;) i in a && (o = a[i], s = e.call(r, o, i, a), n[i] = s), i++;
                        return n
                    },
                    filter: function(e) {
                        if (void 0 === this || null === this) throw TypeError();
                        var t = Object(this),
                            r = t.length >>> 0;
                        if ("function" != typeof e) throw TypeError();
                        for (var n = [], i = 2 <= arguments.length ? arguments[1] : void 0, o = 0; o < r; o++)
                            if (o in t) {
                                var s = t[o];
                                e.call(i, s, o, t) && n.push(s)
                            }
                        return n
                    },
                    isArray: function(e) {
                        return "[object Array]" === Object.prototype.toString.call(e)
                    },
                    Base64: D
                };

            function L(e) {
                return (L = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function M(e, t, r) {
                var n;
                return n = function(e, t) {
                    if ("object" !== L(e) || null === e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                        var n = r.call(e, t || "default");
                        if ("object" !== L(n)) return n;
                        throw TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(t, "string"), (t = "symbol" === L(n) ? n : String(n)) in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }
            var N, F = {
                    SessionStart: 1,
                    SessionEnd: 2,
                    PageView: 3,
                    PageEvent: 4,
                    CrashReport: 5,
                    OptOut: 6,
                    AppStateTransition: 10,
                    Profile: 14,
                    Commerce: 16,
                    Media: 20,
                    UserAttributeChange: 17,
                    UserIdentityChange: 18
                },
                R = (M(N = {}, F.Commerce, 1), M(N, F.UserIdentityChange, 1), N),
                V = {
                    Unknown: 0,
                    Navigation: 1,
                    Location: 2,
                    Search: 3,
                    Transaction: 4,
                    UserContent: 5,
                    UserPreference: 6,
                    Social: 7,
                    Other: 8,
                    Media: 9,
                    getName: function(e) {
                        return e === V.Unknown ? "Unknown" : e === V.Navigation ? "Navigation" : e === V.Location ? "Location" : e === V.Search ? "Search" : e === V.Transaction ? "Transaction" : e === V.UserContent ? "User Content" : e === V.UserPreference ? "User Preference" : e === V.Social ? "Social" : e === H.ProductAddToCart ? "Product Added to Cart" : e === H.ProductAddToWishlist ? "Product Added to Wishlist" : e === H.ProductCheckout ? "Product Checkout" : e === H.ProductCheckoutOption ? "Product Checkout Options" : e === H.ProductClick ? "Product Click" : e === H.ProductImpression ? "Product Impression" : e === H.ProductPurchase ? "Product Purchased" : e === H.ProductRefund ? "Product Refunded" : e === H.ProductRemoveFromCart ? "Product Removed From Cart" : e === H.ProductRemoveFromWishlist ? "Product Removed from Wishlist" : e === H.ProductViewDetail ? "Product View Details" : e === H.PromotionClick ? "Promotion Click" : e === H.PromotionView ? "Promotion View" : "Other"
                    }
                },
                H = {
                    ProductAddToCart: 10,
                    ProductRemoveFromCart: 11,
                    ProductCheckout: 12,
                    ProductCheckoutOption: 13,
                    ProductClick: 14,
                    ProductViewDetail: 15,
                    ProductPurchase: 16,
                    ProductRefund: 17,
                    PromotionView: 18,
                    PromotionClick: 19,
                    ProductAddToWishlist: 20,
                    ProductRemoveFromWishlist: 21,
                    ProductImpression: 22
                },
                K = {
                    Other: 0,
                    CustomerId: 1,
                    Facebook: 2,
                    Twitter: 3,
                    Google: 4,
                    Microsoft: 5,
                    Yahoo: 6,
                    Email: 7,
                    FacebookCustomAudienceId: 9,
                    Other2: 10,
                    Other3: 11,
                    Other4: 12,
                    Other5: 13,
                    Other6: 14,
                    Other7: 15,
                    Other8: 16,
                    Other9: 17,
                    Other10: 18,
                    MobileNumber: 19,
                    PhoneNumber2: 20,
                    PhoneNumber3: 21
                };
            K.isValid = function(e) {
                if ("number" == typeof e) {
                    for (var t in K)
                        if (K.hasOwnProperty(t) && K[t] === e) return !0
                }
                return !1
            }, K.getName = function(e) {
                return e === window.mParticle.IdentityType.CustomerId ? "Customer ID" : e === window.mParticle.IdentityType.Facebook ? "Facebook ID" : e === window.mParticle.IdentityType.Twitter ? "Twitter ID" : e === window.mParticle.IdentityType.Google ? "Google ID" : e === window.mParticle.IdentityType.Microsoft ? "Microsoft ID" : e === window.mParticle.IdentityType.Yahoo ? "Yahoo ID" : e === window.mParticle.IdentityType.Email ? "Email" : e === window.mParticle.IdentityType.FacebookCustomAudienceId ? "Facebook App User ID" : "Other ID"
            }, K.getIdentityType = function(e) {
                return "other" === e ? K.Other : "customerid" === e ? K.CustomerId : "facebook" === e ? K.Facebook : "twitter" === e ? K.Twitter : "google" === e ? K.Google : "microsoft" === e ? K.Microsoft : "yahoo" === e ? K.Yahoo : "email" === e ? K.Email : "facebookcustomaudienceid" === e ? K.FacebookCustomAudienceId : "other2" === e ? K.Other2 : "other3" === e ? K.Other3 : "other4" === e ? K.Other4 : "other5" === e ? K.Other5 : "other6" === e ? K.Other6 : "other7" === e ? K.Other7 : "other8" === e ? K.Other8 : "other9" === e ? K.Other9 : "other10" === e ? K.Other10 : "mobile_number" === e ? K.MobileNumber : "phone_number_2" === e ? K.PhoneNumber2 : !("phone_number_3" != e) && K.PhoneNumber3
            }, K.getIdentityName = function(e) {
                return e === K.Other ? "other" : e === K.CustomerId ? "customerid" : e === K.Facebook ? "facebook" : e === K.Twitter ? "twitter" : e === K.Google ? "google" : e === K.Microsoft ? "microsoft" : e === K.Yahoo ? "yahoo" : e === K.Email ? "email" : e === K.FacebookCustomAudienceId ? "facebookcustomaudienceid" : e === K.Other2 ? "other2" : e === K.Other3 ? "other3" : e === K.Other4 ? "other4" : e === K.Other5 ? "other5" : e === K.Other6 ? "other6" : e === K.Other7 ? "other7" : e === K.Other8 ? "other8" : e === K.Other9 ? "other9" : e === K.Other10 ? "other10" : e === K.MobileNumber ? "mobile_number" : e === K.PhoneNumber2 ? "phone_number_2" : e === K.PhoneNumber3 ? "phone_number_3" : void 0
            };
            var x = {
                Unknown: 0,
                AddToCart: 1,
                RemoveFromCart: 2,
                Checkout: 3,
                CheckoutOption: 4,
                Click: 5,
                ViewDetail: 6,
                Purchase: 7,
                Refund: 8,
                AddToWishlist: 9,
                RemoveFromWishlist: 10
            };
            x.getName = function(e) {
                return e === x.AddToCart ? "Add to Cart" : e === x.RemoveFromCart ? "Remove from Cart" : e === x.Checkout ? "Checkout" : e === x.CheckoutOption ? "Checkout Option" : e === x.Click ? "Click" : e === x.ViewDetail ? "View Detail" : e === x.Purchase ? "Purchase" : e === x.Refund ? "Refund" : e === x.AddToWishlist ? "Add to Wishlist" : e === x.RemoveFromWishlist ? "Remove from Wishlist" : "Unknown"
            }, x.getExpansionName = function(e) {
                return e === x.AddToCart ? "add_to_cart" : e === x.RemoveFromCart ? "remove_from_cart" : e === x.Checkout ? "checkout" : e === x.CheckoutOption ? "checkout_option" : e === x.Click ? "click" : e === x.ViewDetail ? "view_detail" : e === x.Purchase ? "purchase" : e === x.Refund ? "refund" : e === x.AddToWishlist ? "add_to_wishlist" : e === x.RemoveFromWishlist ? "remove_from_wishlist" : "unknown"
            };
            var q = {
                Unknown: 0,
                PromotionView: 1,
                PromotionClick: 2
            };
            q.getName = function(e) {
                return e === q.PromotionView ? "view" : e === q.PromotionClick ? "click" : "unknown"
            }, q.getExpansionName = function(e) {
                return e === q.PromotionView ? "view" : e === q.PromotionClick ? "click" : "unknown"
            };
            var j = {
                    MessageType: F,
                    EventType: V,
                    CommerceEventType: H,
                    IdentityType: K,
                    ProfileMessageType: {
                        Logout: 3
                    },
                    ApplicationTransitionType: {
                        AppInit: 1
                    },
                    ProductActionType: x,
                    PromotionActionType: q,
                    TriggerUploadType: R,
                    Environment: {
                        Production: "production",
                        Development: "development"
                    }
                },
                B = {
                    sdkVersion: "2.26.4",
                    sdkVendor: "mparticle",
                    platform: "web",
                    Messages: {
                        DeprecationMessages: {
                            MethodIsDeprecatedPostfix: "is a deprecated method and will be removed in future releases",
                            AlternativeMethodPrefix: "Please use the alternate method:"
                        },
                        ErrorMessages: {
                            NoToken: "A token must be specified.",
                            EventNameInvalidType: "Event name must be a valid string value.",
                            EventDataInvalidType: "Event data must be a valid object hash.",
                            LoggingDisabled: "Event logging is currently disabled.",
                            CookieParseError: "Could not parse cookie",
                            EventEmpty: "Event object is null or undefined, cancelling send",
                            APIRequestEmpty: "APIRequest is null or undefined, cancelling send",
                            NoEventType: "Event type must be specified.",
                            TransactionIdRequired: "Transaction ID is required",
                            TransactionRequired: "A transaction attributes object is required",
                            PromotionIdRequired: "Promotion ID is required",
                            BadAttribute: "Attribute value cannot be object or array",
                            BadKey: "Key value cannot be object or array",
                            BadLogPurchase: "Transaction attributes and a product are both required to log a purchase, https://docs.mparticle.com/?javascript#measuring-transactions",
                            AudienceAPINotEnabled: "Your workspace is not enabled to retrieve user audiences."
                        },
                        InformationMessages: {
                            CookieSearch: "Searching for cookie",
                            CookieFound: "Cookie found, parsing values",
                            CookieNotFound: "Cookies not found",
                            CookieSet: "Setting cookie",
                            CookieSync: "Performing cookie sync",
                            SendBegin: "Starting to send event",
                            SendIdentityBegin: "Starting to send event to identity server",
                            SendWindowsPhone: "Sending event to Windows Phone container",
                            SendIOS: "Calling iOS path: ",
                            SendAndroid: "Calling Android JS interface method: ",
                            SendHttp: "Sending event to mParticle HTTP service",
                            SendAliasHttp: "Sending alias request to mParticle HTTP service",
                            SendIdentityHttp: "Sending event to mParticle HTTP service",
                            StartingNewSession: "Starting new Session",
                            StartingLogEvent: "Starting to log event",
                            StartingLogOptOut: "Starting to log user opt in/out",
                            StartingEndSession: "Starting to end session",
                            StartingInitialization: "Starting to initialize",
                            StartingLogCommerceEvent: "Starting to log commerce event",
                            StartingAliasRequest: "Starting to Alias MPIDs",
                            LoadingConfig: "Loading configuration options",
                            AbandonLogEvent: "Cannot log event, logging disabled or developer token not set",
                            AbandonAliasUsers: "Cannot Alias Users, logging disabled or developer token not set",
                            AbandonStartSession: "Cannot start session, logging disabled or developer token not set",
                            AbandonEndSession: "Cannot end session, logging disabled or developer token not set",
                            NoSessionToEnd: "Cannot end session, no active session found"
                        },
                        ValidationMessages: {
                            ModifyIdentityRequestUserIdentitiesPresent: "identityRequests to modify require userIdentities to be present. Request not sent to server. Please fix and try again",
                            IdentityRequesetInvalidKey: "There is an invalid key on your identityRequest object. It can only contain a `userIdentities` object and a `onUserAlias` function. Request not sent to server. Please fix and try again.",
                            OnUserAliasType: "The onUserAlias value must be a function.",
                            UserIdentities: "The userIdentities key must be an object with keys of identityTypes and values of strings. Request not sent to server. Please fix and try again.",
                            UserIdentitiesInvalidKey: "There is an invalid identity key on your `userIdentities` object within the identityRequest. Request not sent to server. Please fix and try again.",
                            UserIdentitiesInvalidValues: "All user identity values must be strings or null. Request not sent to server. Please fix and try again.",
                            AliasMissingMpid: "Alias Request must contain both a destinationMpid and a sourceMpid",
                            AliasNonUniqueMpid: "Alias Request's destinationMpid and sourceMpid must be unique",
                            AliasMissingTime: "Alias Request must have both a startTime and an endTime",
                            AliasStartBeforeEndTime: "Alias Request's endTime must be later than its startTime"
                        }
                    },
                    NativeSdkPaths: {
                        LogEvent: "logEvent",
                        SetUserTag: "setUserTag",
                        RemoveUserTag: "removeUserTag",
                        SetUserAttribute: "setUserAttribute",
                        RemoveUserAttribute: "removeUserAttribute",
                        SetSessionAttribute: "setSessionAttribute",
                        AddToCart: "addToCart",
                        RemoveFromCart: "removeFromCart",
                        ClearCart: "clearCart",
                        LogOut: "logOut",
                        SetUserAttributeList: "setUserAttributeList",
                        RemoveAllUserAttributes: "removeAllUserAttributes",
                        GetUserAttributesLists: "getUserAttributesLists",
                        GetAllUserAttributes: "getAllUserAttributes",
                        Identify: "identify",
                        Logout: "logout",
                        Login: "login",
                        Modify: "modify",
                        Alias: "aliasUsers",
                        Upload: "upload"
                    },
                    StorageNames: {
                        localStorageName: "mprtcl-api",
                        localStorageNameV3: "mprtcl-v3",
                        cookieName: "mprtcl-api",
                        cookieNameV2: "mprtcl-v2",
                        cookieNameV3: "mprtcl-v3",
                        localStorageNameV4: "mprtcl-v4",
                        localStorageProductsV4: "mprtcl-prodv4",
                        cookieNameV4: "mprtcl-v4",
                        currentStorageName: "mprtcl-v4",
                        currentStorageProductsName: "mprtcl-prodv4"
                    },
                    DefaultConfig: {
                        cookieDomain: null,
                        cookieExpiration: 365,
                        logLevel: null,
                        timeout: 300,
                        sessionTimeout: 30,
                        maxProducts: 20,
                        forwarderStatsTimeout: 5e3,
                        integrationDelayTimeout: 5e3,
                        maxCookieSize: 3e3,
                        aliasMaxWindow: 90,
                        uploadInterval: 0
                    },
                    DefaultBaseUrls: {
                        v1SecureServiceUrl: "jssdks.mparticle.com/v1/JS/",
                        v2SecureServiceUrl: "jssdks.mparticle.com/v2/JS/",
                        v3SecureServiceUrl: "jssdks.mparticle.com/v3/JS/",
                        configUrl: "jssdkcdns.mparticle.com/JS/v2/",
                        identityUrl: "identity.mparticle.com/v1/",
                        aliasUrl: "jssdks.mparticle.com/v1/identity/",
                        userAudienceUrl: "nativesdks.mparticle.com/v1/"
                    },
                    Base64CookieKeys: {
                        csm: 1,
                        sa: 1,
                        ss: 1,
                        ua: 1,
                        ui: 1,
                        csd: 1,
                        ia: 1,
                        con: 1
                    },
                    SDKv2NonMPIDCookieKeys: {
                        gs: 1,
                        cu: 1,
                        l: 1,
                        globalSettings: 1,
                        currentUserMPID: 1
                    },
                    HTTPCodes: {
                        noHttpCoverage: -1,
                        activeIdentityRequest: -2,
                        activeSession: -3,
                        validationIssue: -4,
                        nativeIdentityRequest: -5,
                        loggingDisabledOrMissingAPIKey: -6,
                        tooManyRequests: 429
                    },
                    FeatureFlags: {
                        ReportBatching: "reportBatching",
                        EventBatchingIntervalMillis: "eventBatchingIntervalMillis",
                        OfflineStorage: "offlineStorage",
                        DirectUrlRouting: "directURLRouting",
                        CacheIdentity: "cacheIdentity",
                        AudienceAPI: "audienceAPI"
                    },
                    DefaultInstance: "default_instance",
                    CCPAPurpose: "data_sale_opt_out",
                    IdentityMethods: {
                        Modify: "modify",
                        Logout: "logout",
                        Login: "login",
                        Identify: "identify"
                    }
                },
                W = function(e, t) {
                    return (W = Object.setPrototypeOf || ({
                        __proto__: []
                    }) instanceof Array && function(e, t) {
                        e.__proto__ = t
                    } || function(e, t) {
                        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                    })(e, t)
                };

            function z(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Class extends value " + String(t) + " is not a constructor or null");

                function r() {
                    this.constructor = e
                }
                W(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
            }
            var J = function() {
                return (J = Object.assign || function(e) {
                    for (var t, r = 1, n = arguments.length; r < n; r++)
                        for (var i in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e
                }).apply(this, arguments)
            };

            function Q(e, t, r, n) {
                return new(r || (r = Promise))(function(i, o) {
                    function s(e) {
                        try {
                            c(n.next(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function a(e) {
                        try {
                            c(n.throw(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function c(e) {
                        var t;
                        e.done ? i(e.value) : ((t = e.value) instanceof r ? t : new r(function(e) {
                            e(t)
                        })).then(s, a)
                    }
                    c((n = n.apply(e, t || [])).next())
                })
            }

            function G(e, t) {
                var r, n, i, o, s = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function a(a) {
                    return function(c) {
                        return function(a) {
                            if (r) throw TypeError("Generator is already executing.");
                            for (; o && (o = 0, a[0] && (s = 0)), s;) try {
                                if (r = 1, n && (i = 2 & a[0] ? n.return : a[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, a[1])).done) return i;
                                switch (n = 0, i && (a = [2 & a[0], i.value]), a[0]) {
                                    case 0:
                                    case 1:
                                        i = a;
                                        break;
                                    case 4:
                                        return s.label++, {
                                            value: a[1],
                                            done: !1
                                        };
                                    case 5:
                                        s.label++, n = a[1], a = [0];
                                        continue;
                                    case 7:
                                        a = s.ops.pop(), s.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = (i = s.trys).length > 0 && i[i.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                            s = 0;
                                            continue
                                        }
                                        if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
                                            s.label = a[1];
                                            break
                                        }
                                        if (6 === a[0] && s.label < i[1]) {
                                            s.label = i[1], i = a;
                                            break
                                        }
                                        if (i && s.label < i[2]) {
                                            s.label = i[2], s.ops.push(a);
                                            break
                                        }
                                        i[2] && s.ops.pop(), s.trys.pop();
                                        continue
                                }
                                a = t.call(e, s)
                            } catch (e) {
                                a = [6, e], n = 0
                            } finally {
                                r = i = 0
                            }
                            if (5 & a[0]) throw a[1];
                            return {
                                value: a[0] ? a[1] : void 0,
                                done: !0
                            }
                        }([a, c])
                    }
                }
            }
            "function" == typeof SuppressedError && SuppressedError, (n = A || (A = {}))[n.Unknown = 0] = "Unknown", n[n.AddToCart = 1] = "AddToCart", n[n.RemoveFromCart = 2] = "RemoveFromCart", n[n.Checkout = 3] = "Checkout", n[n.CheckoutOption = 4] = "CheckoutOption", n[n.Click = 5] = "Click", n[n.ViewDetail = 6] = "ViewDetail", n[n.Purchase = 7] = "Purchase", n[n.Refund = 8] = "Refund", n[n.AddToWishlist = 9] = "AddToWishlist", n[n.RemoveFromWishlist = 10] = "RemoveFromWishlist";
            var Y = {};
            Object.defineProperty(Y, "__esModule", {
                value: !0
            }), (i = Y.ApplicationInformationOsEnum || (Y.ApplicationInformationOsEnum = {})).unknown = "Unknown", i.iOS = "IOS", i.android = "Android", i.windowsPhone = "WindowsPhone", i.mobileWeb = "MobileWeb", i.unityIOS = "UnityIOS", i.unityAndroid = "UnityAndroid", i.desktop = "Desktop", i.tvOS = "TVOS", i.roku = "Roku", i.outOfBand = "OutOfBand", i.alexa = "Alexa", i.smartTV = "SmartTV", i.fireTV = "FireTV", i.xbox = "Xbox", (Y.ApplicationStateTransitionEventEventTypeEnum || (Y.ApplicationStateTransitionEventEventTypeEnum = {})).applicationStateTransition = "application_state_transition", (o = Y.ApplicationStateTransitionEventDataApplicationTransitionTypeEnum || (Y.ApplicationStateTransitionEventDataApplicationTransitionTypeEnum = {})).applicationInitialized = "application_initialized", o.applicationExit = "application_exit", o.applicationBackground = "application_background", o.applicationForeground = "application_foreground", (s = Y.BatchEnvironmentEnum || (Y.BatchEnvironmentEnum = {})).unknown = "unknown", s.development = "development", s.production = "production", (Y.BreadcrumbEventEventTypeEnum || (Y.BreadcrumbEventEventTypeEnum = {})).breadcrumb = "breadcrumb", (Y.CommerceEventEventTypeEnum || (Y.CommerceEventEventTypeEnum = {})).commerceEvent = "commerce_event", (a = Y.CommerceEventDataCustomEventTypeEnum || (Y.CommerceEventDataCustomEventTypeEnum = {})).addToCart = "add_to_cart", a.removeFromCart = "remove_from_cart", a.checkout = "checkout", a.checkoutOption = "checkout_option", a.click = "click", a.viewDetail = "view_detail", a.purchase = "purchase", a.refund = "refund", a.promotionView = "promotion_view", a.promotionClick = "promotion_click", a.addToWishlist = "add_to_wishlist", a.removeFromWishlist = "remove_from_wishlist", a.impression = "impression", (Y.CrashReportEventEventTypeEnum || (Y.CrashReportEventEventTypeEnum = {})).crashReport = "crash_report", (Y.CustomEventEventTypeEnum || (Y.CustomEventEventTypeEnum = {})).customEvent = "custom_event", (c = Y.CustomEventDataCustomEventTypeEnum || (Y.CustomEventDataCustomEventTypeEnum = {})).navigation = "navigation", c.location = "location", c.search = "search", c.transaction = "transaction", c.userContent = "user_content", c.userPreference = "user_preference", c.social = "social", c.media = "media", c.other = "other", c.unknown = "unknown", (u = Y.DeviceCurrentStateDeviceOrientationEnum || (Y.DeviceCurrentStateDeviceOrientationEnum = {})).portrait = "portrait", u.portraitUpsideDown = "portrait_upside_down", u.landscape = "landscape", u.landscapeLeft = "LandscapeLeft", u.landscapeRight = "LandscapeRight", u.faceUp = "FaceUp", u.faceDown = "FaceDown", u.square = "Square", (d = Y.DeviceCurrentStateStatusBarOrientationEnum || (Y.DeviceCurrentStateStatusBarOrientationEnum = {})).portrait = "portrait", d.portraitUpsideDown = "portrait_upside_down", d.landscape = "landscape", d.landscapeLeft = "LandscapeLeft", d.landscapeRight = "LandscapeRight", d.faceUp = "FaceUp", d.faceDown = "FaceDown", d.square = "Square", (l = Y.DeviceInformationPlatformEnum || (Y.DeviceInformationPlatformEnum = {})).iOS = "iOS", l.android = "Android", l.web = "web", l.desktop = "desktop", l.tvOS = "tvOS", l.roku = "roku", l.outOfBand = "out_of_band", l.smartTV = "smart_tv", l.xbox = "xbox", (g = Y.EventTypeEnum || (Y.EventTypeEnum = {})).unknown = "unknown", g.sessionStart = "session_start", g.sessionEnd = "session_end", g.screenView = "screen_view", g.customEvent = "custom_event", g.crashReport = "crash_report", g.optOut = "opt_out", g.firstRun = "first_run", g.preAttribution = "pre_attribution", g.pushRegistration = "push_registration", g.applicationStateTransition = "application_state_transition", g.pushMessage = "push_message", g.networkPerformance = "network_performance", g.breadcrumb = "breadcrumb", g.profile = "profile", g.pushReaction = "push_reaction", g.commerceEvent = "commerce_event", g.userAttributeChange = "user_attribute_change", g.userIdentityChange = "user_identity_change", g.uninstall = "uninstall", g.validationResult = "validation_result", (p = Y.IdentityTypeEnum || (Y.IdentityTypeEnum = {})).other = "other", p.customerId = "customer_id", p.facebook = "facebook", p.twitter = "twitter", p.google = "google", p.microsoft = "microsoft", p.yahoo = "yahoo", p.email = "email", p.alias = "alias", p.facebookCustomAudienceId = "facebook_custom_audience_id", p.otherId2 = "other_id_2", p.otherId3 = "other_id_3", p.otherId4 = "other_id_4", p.otherId5 = "other_id_5", p.otherId6 = "other_id_6", p.otherId7 = "other_id_7", p.otherId8 = "other_id_8", p.otherId9 = "other_id_9", p.otherId10 = "other_id_10", p.mobileNumber = "mobile_number", p.phoneNumber2 = "phone_number_2", p.phoneNumber3 = "phone_number_3", (Y.NetworkPerformanceEventEventTypeEnum || (Y.NetworkPerformanceEventEventTypeEnum = {})).networkPerformance = "network_performance", (Y.OptOutEventEnum || (Y.OptOutEventEnum = {})).optOut = "opt_out", (v = Y.ProductActionActionEnum || (Y.ProductActionActionEnum = {})).unknown = "unknown", v.addToCart = "add_to_cart", v.removeFromCart = "remove_from_cart", v.checkout = "checkout", v.checkoutOption = "checkout_option", v.click = "click", v.viewDetail = "view_detail", v.purchase = "purchase", v.refund = "refund", v.addToWishlist = "add_to_wishlist", v.removeFromWishlist = "remove_from_wish_list", (Y.ProfileEventEventTypeEnum || (Y.ProfileEventEventTypeEnum = {})).profile = "profile", (m = Y.ProfileEventDataProfileEventTypeEnum || (Y.ProfileEventDataProfileEventTypeEnum = {})).signup = "signup", m.login = "login", m.logout = "logout", m.update = "update", m.delete = "delete", (f = Y.PromotionActionActionEnum || (Y.PromotionActionActionEnum = {})).view = "view", f.click = "click", (Y.PushMessageEventEventTypeEnum || (Y.PushMessageEventEventTypeEnum = {})).pushMessage = "push_message", (h = Y.PushMessageEventDataPushMessageTypeEnum || (Y.PushMessageEventDataPushMessageTypeEnum = {})).sent = "sent", h.received = "received", h.action = "action", (y = Y.PushMessageEventDataApplicationStateEnum || (Y.PushMessageEventDataApplicationStateEnum = {})).notRunning = "not_running", y.background = "background", y.foreground = "foreground", (S = Y.PushMessageEventDataPushMessageBehaviorEnum || (Y.PushMessageEventDataPushMessageBehaviorEnum = {})).received = "Received", S.directOpen = "DirectOpen", S.read = "Read", S.influencedOpen = "InfluencedOpen", S.displayed = "Displayed", (Y.PushRegistrationEventEventTypeEnum || (Y.PushRegistrationEventEventTypeEnum = {})).pushRegistration = "push_registration", (Y.SessionEndEventEventTypeEnum || (Y.SessionEndEventEventTypeEnum = {})).sessionEnd = "session_end", (Y.SessionStartEventEventTypeEnum || (Y.SessionStartEventEventTypeEnum = {})).sessionStart = "session_start", (_ = Y.SourceInformationChannelEnum || (Y.SourceInformationChannelEnum = {})).native = "native", _.javascript = "javascript", _.pixel = "pixel", _.desktop = "desktop", _.partner = "partner", _.serverToServer = "server_to_server", (Y.UserAttributeChangeEventEventTypeEnum || (Y.UserAttributeChangeEventEventTypeEnum = {})).userAttributeChange = "user_attribute_change", (Y.UserIdentityChangeEventEventTypeEnum || (Y.UserIdentityChangeEventEventTypeEnum = {})).userIdentityChange = "user_identity_change";
            var X = B.Messages,
                $ = function(e, t) {
                    var r = 0;
                    if (Array.prototype.indexOf) return 0 <= e.indexOf(t, 0);
                    for (var n = e.length; r < n; r++)
                        if (r in e && e[r] === t) return !0;
                    return !1
                },
                Z = function(e, t) {
                    if (t && e) {
                        for (var r in e)
                            if (e.hasOwnProperty(r) && r.toLowerCase() === t.toLowerCase()) return r
                    }
                    return null
                },
                ee = function(e, t) {
                    var r = [e, X.DeprecationMessages.MethodIsDeprecatedPostfix];
                    return t && (r.push(t), r.push(X.DeprecationMessages.MethodIsDeprecatedPostfix)), r.join(" ")
                };

            function et(e) {
                var t = 0;
                if (null == e) return 0;
                if (e = e.toString().toLowerCase(), Array.prototype.reduce) return e.split("").reduce(function(e, t) {
                    return (e = (e << 5) - e + t.charCodeAt(0)) & e
                }, 0);
                if (0 === e.length) return t;
                for (var r = 0; r < e.length; r++) t = (t << 5) - t + e.charCodeAt(r), t &= t;
                return t
            }
            var er = function() {
                    var e, t;
                    return window.crypto && window.crypto.getRandomValues && (e = window.crypto.getRandomValues(new Uint8Array(1))), e ? (t ^ e[0] % 16 >> t / 4).toString(16) : (t ^ 16 * Math.random() >> t / 4).toString(16)
                },
                en = function(e) {
                    return void 0 === e && (e = ""), e ? er() : "".concat(1e7, "-").concat(1e3, "-").concat(4e3, "-").concat(8e3, "-").concat(1e11).replace(/[018]/g, en)
                },
                ei = function(e) {
                    var t = Object.prototype.toString.call(e);
                    return "[object Object]" === t || "[object Error]" === t
                },
                eo = function(e) {
                    if (isNaN(e) || !isFinite(e)) return 0;
                    var t = parseFloat(e);
                    return isNaN(t) ? 0 : t
                },
                es = function(e) {
                    return ep(e) ? e : null
                },
                ea = function(e) {
                    return decodeURIComponent(e.replace(/\+/g, " "))
                },
                ec = function(e) {
                    return 0 === e.indexOf('"') && (e = e.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\")), e
                },
                eu = function(e) {
                    return "string" == typeof e
                },
                ed = function(e) {
                    return "number" == typeof e
                },
                el = function(e) {
                    return "function" == typeof e
                },
                eg = function(e) {
                    return ed(e) || eu(e) || "boolean" == typeof e
                },
                ep = function(e) {
                    return eu(e) || ed(e)
                },
                ev = function(e) {
                    return null == e || !(Object.keys(e) || e).length
                };

            function em(e, t, r) {
                if (!e || !t || 1 > t.length) return null;
                for (var n, i, o, s = r.Identity.getCurrentUser(), a = [], c = null, u = 0; u < t.length; u++)
                    if (o = t[u]) {
                        c = o;
                        var d = ef(o);
                        d && a.push(d)
                    }
                if (!c) return null;
                var l = null;
                ev(c.ConsentState) ? ev(s) || (l = s.getConsentState()) : l = c.ConsentState;
                var g = {
                    source_request_id: r._Helpers.generateUniqueId(),
                    mpid: e,
                    timestamp_unixtime_ms: new Date().getTime(),
                    environment: c.Debug ? Y.BatchEnvironmentEnum.development : Y.BatchEnvironmentEnum.production,
                    events: a,
                    mp_deviceid: c.DeviceId,
                    sdk_version: c.SDKVersion,
                    application_info: {
                        application_version: c.AppVersion,
                        application_name: c.AppName,
                        package: c.Package,
                        sideloaded_kits_count: r._Store.sideloadedKitsCount
                    },
                    device_info: {
                        platform: Y.DeviceInformationPlatformEnum.web,
                        screen_width: window.screen.width,
                        screen_height: window.screen.height
                    },
                    user_attributes: c.UserAttributes,
                    user_identities: function(e) {
                        if (!e || !e.length) return null;
                        for (var t, r = {}, n = 0; n < e.length; n++) switch ((t = e[n]).Type) {
                            case j.IdentityType.CustomerId:
                                r.customer_id = t.Identity;
                                break;
                            case j.IdentityType.Email:
                                r.email = t.Identity;
                                break;
                            case j.IdentityType.Facebook:
                                r.facebook = t.Identity;
                                break;
                            case j.IdentityType.FacebookCustomAudienceId:
                                r.facebook_custom_audience_id = t.Identity;
                                break;
                            case j.IdentityType.Google:
                                r.google = t.Identity;
                                break;
                            case j.IdentityType.Microsoft:
                                r.microsoft = t.Identity;
                                break;
                            case j.IdentityType.Other:
                                r.other = t.Identity;
                                break;
                            case j.IdentityType.Other2:
                                r.other_id_2 = t.Identity;
                                break;
                            case j.IdentityType.Other3:
                                r.other_id_3 = t.Identity;
                                break;
                            case j.IdentityType.Other4:
                                r.other_id_4 = t.Identity;
                                break;
                            case j.IdentityType.Other5:
                                r.other_id_5 = t.Identity;
                                break;
                            case j.IdentityType.Other6:
                                r.other_id_6 = t.Identity;
                                break;
                            case j.IdentityType.Other7:
                                r.other_id_7 = t.Identity;
                                break;
                            case j.IdentityType.Other8:
                                r.other_id_8 = t.Identity;
                                break;
                            case j.IdentityType.Other9:
                                r.other_id_9 = t.Identity;
                                break;
                            case j.IdentityType.Other10:
                                r.other_id_10 = t.Identity;
                                break;
                            case j.IdentityType.MobileNumber:
                                r.mobile_number = t.Identity;
                                break;
                            case j.IdentityType.PhoneNumber2:
                                r.phone_number_2 = t.Identity;
                                break;
                            case j.IdentityType.PhoneNumber3:
                                r.phone_number_3 = t.Identity
                        }
                        return r
                    }(c.UserIdentities),
                    consent_state: ev(n = l) ? null : {
                        gdpr: function(e) {
                            if (!e) return null;
                            var t = {};
                            for (var r in e) e.hasOwnProperty(r) && (t[r] = {
                                consented: e[r].Consented,
                                hardware_id: e[r].HardwareId,
                                document: e[r].ConsentDocument,
                                timestamp_unixtime_ms: e[r].Timestamp,
                                location: e[r].Location
                            });
                            return t
                        }(n.getGDPRConsentState()),
                        ccpa: (i = n.getCCPAConsentState()) ? {
                            data_sale_opt_out: {
                                consented: i.Consented,
                                hardware_id: i.HardwareId,
                                document: i.ConsentDocument,
                                timestamp_unixtime_ms: i.Timestamp,
                                location: i.Location
                            }
                        } : null
                    },
                    integration_attributes: c.IntegrationAttributes
                };
                return c.DataPlan && c.DataPlan.PlanId && (g.context = {
                    data_plan: {
                        plan_id: c.DataPlan.PlanId,
                        plan_version: c.DataPlan.PlanVersion || void 0
                    }
                }), g
            }

            function ef(e) {
                var t, r, n, i, o, s, a, c, u, d, l, g, p, v, m, f, h, y;
                if (!e) return null;
                switch (e.EventDataType) {
                    case j.MessageType.AppStateTransition:
                        return t = ey(e), r = Object.assign(r = {
                            application_transition_type: Y.ApplicationStateTransitionEventDataApplicationTransitionTypeEnum.applicationInitialized,
                            is_first_run: e.IsFirstRun,
                            is_upgrade: !1,
                            launch_referral: e.LaunchReferral
                        }, t), {
                            event_type: Y.EventTypeEnum.applicationStateTransition,
                            data: r
                        };
                    case j.MessageType.Commerce:
                        return function(e) {
                            var t, r = ey(e),
                                n = {
                                    custom_flags: e.CustomFlags,
                                    product_action: e.ProductAction ? {
                                        action: (t = e.ProductAction.ProductActionType) ? t === A.AddToCart ? Y.ProductActionActionEnum.addToCart : t === A.AddToWishlist ? Y.ProductActionActionEnum.addToWishlist : t === A.Checkout ? Y.ProductActionActionEnum.checkout : t === A.CheckoutOption ? Y.ProductActionActionEnum.checkoutOption : t === A.Click ? Y.ProductActionActionEnum.click : t === A.Purchase ? Y.ProductActionActionEnum.purchase : t === A.Refund ? Y.ProductActionActionEnum.refund : t === A.RemoveFromCart ? Y.ProductActionActionEnum.removeFromCart : t === A.RemoveFromWishlist ? Y.ProductActionActionEnum.removeFromWishlist : t === A.ViewDetail ? Y.ProductActionActionEnum.viewDetail : Y.ProductActionActionEnum.unknown : Y.ProductActionActionEnum.unknown,
                                        checkout_step: e.ProductAction.CheckoutStep,
                                        checkout_options: e.ProductAction.CheckoutOptions,
                                        transaction_id: e.ProductAction.TransactionId,
                                        affiliation: e.ProductAction.Affiliation,
                                        total_amount: e.ProductAction.TotalAmount,
                                        tax_amount: e.ProductAction.TaxAmount,
                                        shipping_amount: e.ProductAction.ShippingAmount,
                                        coupon_code: e.ProductAction.CouponCode,
                                        products: eh(e.ProductAction.ProductList)
                                    } : null,
                                    promotion_action: e.PromotionAction ? {
                                        action: e.PromotionAction.PromotionActionType,
                                        promotions: function(e) {
                                            if (!e || !e.length) return null;
                                            for (var t = [], r = 0; r < e.length; r++) {
                                                var n = e[r],
                                                    i = {
                                                        id: n.Id,
                                                        name: n.Name,
                                                        creative: n.Creative,
                                                        position: n.Position
                                                    };
                                                t.push(i)
                                            }
                                            return t
                                        }(e.PromotionAction.PromotionList)
                                    } : null,
                                    product_impressions: function(e) {
                                        if (!e.ProductImpressions) return null;
                                        for (var t = [], r = 0, n = e.ProductImpressions; r < n.length; r++) {
                                            var i = n[r],
                                                o = {
                                                    product_impression_list: i.ProductImpressionList,
                                                    products: eh(i.ProductList)
                                                };
                                            t.push(o)
                                        }
                                        return t
                                    }(e),
                                    shopping_cart: e.ShoppingCart && e.ShoppingCart.ProductList && e.ShoppingCart.ProductList.length ? {
                                        products: eh(e.ShoppingCart.ProductList)
                                    } : null,
                                    currency_code: e.CurrencyCode
                                };
                            return n = Object.assign(n, r), {
                                event_type: Y.EventTypeEnum.commerceEvent,
                                data: n
                            }
                        }(e);
                    case j.MessageType.CrashReport:
                        return n = ey(e), i = Object.assign(i = {
                            message: e.EventName
                        }, n), {
                            event_type: Y.EventTypeEnum.crashReport,
                            data: i
                        };
                    case j.MessageType.OptOut:
                        return o = ey(e), s = Object.assign(s = {
                            is_opted_out: e.OptOut
                        }, o), {
                            event_type: Y.EventTypeEnum.optOut,
                            data: s
                        };
                    case j.MessageType.PageEvent:
                        return c = ey(e), u = Object.assign(u = {
                            custom_event_type: (a = e.EventCategory) === j.EventType.Other ? Y.CustomEventDataCustomEventTypeEnum.other : a === j.EventType.Location ? Y.CustomEventDataCustomEventTypeEnum.location : a === j.EventType.Navigation ? Y.CustomEventDataCustomEventTypeEnum.navigation : a === j.EventType.Search ? Y.CustomEventDataCustomEventTypeEnum.search : a === j.EventType.Social ? Y.CustomEventDataCustomEventTypeEnum.social : a === j.EventType.Transaction ? Y.CustomEventDataCustomEventTypeEnum.transaction : a === j.EventType.UserContent ? Y.CustomEventDataCustomEventTypeEnum.userContent : a === j.EventType.UserPreference ? Y.CustomEventDataCustomEventTypeEnum.userPreference : a === j.EventType.Media ? Y.CustomEventDataCustomEventTypeEnum.media : a === j.CommerceEventType.ProductAddToCart ? Y.CommerceEventDataCustomEventTypeEnum.addToCart : a === j.CommerceEventType.ProductAddToWishlist ? Y.CommerceEventDataCustomEventTypeEnum.addToWishlist : a === j.CommerceEventType.ProductCheckout ? Y.CommerceEventDataCustomEventTypeEnum.checkout : a === j.CommerceEventType.ProductCheckoutOption ? Y.CommerceEventDataCustomEventTypeEnum.checkoutOption : a === j.CommerceEventType.ProductClick ? Y.CommerceEventDataCustomEventTypeEnum.click : a === j.CommerceEventType.ProductImpression ? Y.CommerceEventDataCustomEventTypeEnum.impression : a === j.CommerceEventType.ProductPurchase ? Y.CommerceEventDataCustomEventTypeEnum.purchase : a === j.CommerceEventType.ProductRefund ? Y.CommerceEventDataCustomEventTypeEnum.refund : a === j.CommerceEventType.ProductRemoveFromCart ? Y.CommerceEventDataCustomEventTypeEnum.removeFromCart : a === j.CommerceEventType.ProductRemoveFromWishlist ? Y.CommerceEventDataCustomEventTypeEnum.removeFromWishlist : a === j.CommerceEventType.ProductViewDetail ? Y.CommerceEventDataCustomEventTypeEnum.viewDetail : a === j.CommerceEventType.PromotionClick ? Y.CommerceEventDataCustomEventTypeEnum.promotionClick : a === j.CommerceEventType.PromotionView ? Y.CommerceEventDataCustomEventTypeEnum.promotionView : Y.CustomEventDataCustomEventTypeEnum.unknown,
                            custom_flags: e.CustomFlags,
                            event_name: e.EventName
                        }, c), {
                            event_type: Y.EventTypeEnum.customEvent,
                            data: u
                        };
                    case j.MessageType.PageView:
                        return d = ey(e), l = Object.assign(l = {
                            custom_flags: e.CustomFlags,
                            screen_name: e.EventName
                        }, d), {
                            event_type: Y.EventTypeEnum.screenView,
                            data: l
                        };
                    case j.MessageType.Profile:
                        break;
                    case j.MessageType.SessionEnd:
                        return g = ey(e), p = Object.assign(p = {
                            session_duration_ms: e.SessionLength
                        }, g), {
                            event_type: Y.EventTypeEnum.sessionEnd,
                            data: p
                        };
                    case j.MessageType.SessionStart:
                        return v = Object.assign(v = {}, ey(e)), {
                            event_type: Y.EventTypeEnum.sessionStart,
                            data: v
                        };
                    case j.MessageType.UserAttributeChange:
                        return m = ey(e), f = {
                            user_attribute_name: e.UserAttributeChanges.UserAttributeName,
                            new: e.UserAttributeChanges.New,
                            old: e.UserAttributeChanges.Old,
                            deleted: e.UserAttributeChanges.Deleted,
                            is_new_attribute: e.UserAttributeChanges.IsNewAttribute
                        }, f = J(J({}, f), m), {
                            event_type: Y.EventTypeEnum.userAttributeChange,
                            data: f
                        };
                    case j.MessageType.UserIdentityChange:
                        return h = ey(e), y = Object.assign(y = {
                            new: {
                                identity_type: eS(e.UserIdentityChanges.New.IdentityType),
                                identity: e.UserIdentityChanges.New.Identity || null,
                                timestamp_unixtime_ms: e.Timestamp,
                                created_this_batch: e.UserIdentityChanges.New.CreatedThisBatch
                            },
                            old: {
                                identity_type: eS(e.UserIdentityChanges.Old.IdentityType),
                                identity: e.UserIdentityChanges.Old.Identity || null,
                                timestamp_unixtime_ms: e.Timestamp,
                                created_this_batch: e.UserIdentityChanges.Old.CreatedThisBatch
                            }
                        }, h), {
                            event_type: Y.EventTypeEnum.userIdentityChange,
                            data: y
                        }
                }
                return null
            }

            function eh(e) {
                if (!e || !e.length) return null;
                for (var t = [], r = 0; r < e.length; r++) {
                    var n = e[r],
                        i = {
                            id: n.Sku,
                            name: n.Name,
                            brand: n.Brand,
                            category: n.Category,
                            variant: n.Variant,
                            total_product_amount: n.TotalAmount,
                            position: n.Position,
                            price: n.Price,
                            quantity: n.Quantity,
                            coupon_code: n.CouponCode,
                            custom_attributes: n.Attributes
                        };
                    t.push(i)
                }
                return t
            }

            function ey(e) {
                var t;
                return {
                    timestamp_unixtime_ms: e.Timestamp,
                    session_uuid: e.SessionId,
                    session_start_unixtime_ms: e.SessionStartDate,
                    custom_attributes: e.EventAttributes,
                    location: (t = e.Location) && Object.keys(t).length ? {
                        latitude: t.lat,
                        longitude: t.lng
                    } : null,
                    source_message_id: e.SourceMessageId
                }
            }

            function eS(e) {
                return e === w.other ? Y.IdentityTypeEnum.other : e === w.customerId ? Y.IdentityTypeEnum.customerId : e === w.facebook ? Y.IdentityTypeEnum.facebook : e === w.twitter ? Y.IdentityTypeEnum.twitter : e === w.google ? Y.IdentityTypeEnum.google : e === w.microsoft ? Y.IdentityTypeEnum.microsoft : e === w.yahoo ? Y.IdentityTypeEnum.yahoo : e === w.email ? Y.IdentityTypeEnum.email : e === w.alias ? Y.IdentityTypeEnum.alias : e === w.facebookCustomAudienceId ? Y.IdentityTypeEnum.facebookCustomAudienceId : e === w.otherId2 ? Y.IdentityTypeEnum.otherId2 : e === w.otherId3 ? Y.IdentityTypeEnum.otherId3 : e === w.otherId4 ? Y.IdentityTypeEnum.otherId4 : e === w.otherId5 ? Y.IdentityTypeEnum.otherId5 : e === w.otherId6 ? Y.IdentityTypeEnum.otherId6 : e === w.otherId7 ? Y.IdentityTypeEnum.otherId7 : e === w.otherId8 ? Y.IdentityTypeEnum.otherId8 : e === w.otherId9 ? Y.IdentityTypeEnum.otherId9 : e === w.otherId10 ? Y.IdentityTypeEnum.otherId10 : e === w.mobileNumber ? Y.IdentityTypeEnum.mobileNumber : e === w.phoneNumber2 ? Y.IdentityTypeEnum.phoneNumber2 : e === w.phoneNumber3 ? Y.IdentityTypeEnum.phoneNumber3 : void 0
            }(P = w || (w = {})).other = "other", P.customerId = "customerid", P.facebook = "facebook", P.twitter = "twitter", P.google = "google", P.microsoft = "microsoft", P.yahoo = "yahoo", P.email = "email", P.alias = "alias", P.facebookCustomAudienceId = "facebookcustomaudienceid", P.otherId2 = "other2", P.otherId3 = "other3", P.otherId4 = "other4", P.otherId5 = "other5", P.otherId6 = "other6", P.otherId7 = "other7", P.otherId8 = "other8", P.otherId9 = "other9", P.otherId10 = "other10", P.mobileNumber = "mobile_number", P.phoneNumber2 = "phone_number_2", P.phoneNumber3 = "phone_number_3";
            var e_ = function() {
                    function e(e, t, r) {
                        this._storageKey = e, this.storageObject = t, this.logger = (null == r ? void 0 : r.logger) || {
                            verbose: function() {},
                            warning: function() {},
                            error: function() {}
                        }, this.contents = this.retrieve()
                    }
                    return e.prototype.store = function(e) {
                        this.contents = e;
                        var t = ev(e) ? "" : JSON.stringify(e);
                        try {
                            this.storageObject.setItem(this._storageKey, t), this.logger.verbose("Saving item to Storage: ".concat(t))
                        } catch (e) {
                            this.logger.error("Cannot Save items to Storage: ".concat(t)), this.logger.error(e)
                        }
                    }, e.prototype.retrieve = function() {
                        var e = this.storageObject.getItem(this._storageKey);
                        return this.contents = e ? JSON.parse(e) : null, this.logger.verbose("Retrieving item from Storage: ".concat(e)), this.contents
                    }, e.prototype.purge = function() {
                        this.logger.verbose("Purging Storage"), this.contents = null, this.storageObject.removeItem(this._storageKey)
                    }, e
                }(),
                eP = function(e) {
                    function t(t, r) {
                        return e.call(this, t, window.localStorage, r) || this
                    }
                    return z(t, e), t
                }(e_),
                eb = function(e) {
                    function t(t, r) {
                        return e.call(this, t, window.sessionStorage, r) || this
                    }
                    return z(t, e), t
                }(e_),
                eI = function(e) {
                    this.url = e
                },
                eC = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return z(t, e), t.prototype.upload = function(e, t) {
                        return Q(this, void 0, void 0, function() {
                            return G(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        return [4, fetch(t || this.url, e)];
                                    case 1:
                                        return [2, r.sent()]
                                }
                            })
                        })
                    }, t
                }(eI),
                eA = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return z(t, e), t.prototype.upload = function(e) {
                        return Q(this, void 0, void 0, function() {
                            return G(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return [4, this.makeRequest(this.url, e.body)];
                                    case 1:
                                        return [2, t.sent()]
                                }
                            })
                        })
                    }, t.prototype.makeRequest = function(e, t) {
                        return Q(this, void 0, void 0, function() {
                            var r;
                            return G(this, function() {
                                return r = new XMLHttpRequest, [2, new Promise(function(n, i) {
                                    r.onreadystatechange = function() {
                                        4 !== r.readyState || (200 <= r.status && 300 > r.status ? n(r) : i(r))
                                    }, r.open("post", e), r.send(t)
                                })]
                            })
                        })
                    }, t
                }(eI),
                ew = function() {
                    function e(t, r) {
                        this.offlineStorageEnabled = !1, this.mpInstance = t, this.uploadIntervalMillis = r, this.batchingEnabled = r >= e.MINIMUM_INTERVAL_MILLIS, this.uploadIntervalMillis < e.MINIMUM_INTERVAL_MILLIS && (this.uploadIntervalMillis = e.MINIMUM_INTERVAL_MILLIS), this.eventsQueuedForProcessing = [], this.batchesQueuedForProcessing = [], this.offlineStorageEnabled = this.isOfflineStorageAvailable(), this.offlineStorageEnabled && (this.eventVault = new eb("".concat(t._Store.storageName, "-events"), {
                            logger: t.Logger
                        }), this.batchVault = new eP("".concat(t._Store.storageName, "-batches"), {
                            logger: t.Logger
                        }), (n = this.eventsQueuedForProcessing).push.apply(n, this.eventVault.retrieve()));
                        var n, i = this.mpInstance._Store,
                            o = i.SDKConfig,
                            s = i.devToken,
                            a = this.mpInstance._Helpers.createServiceUrl(o.v3SecureServiceUrl, s);
                        this.uploadUrl = "".concat(a, "/events"), this.uploader = window.fetch ? new eC(this.uploadUrl) : new eA(this.uploadUrl), this.triggerUploadInterval(!0, !1), this.addEventListeners()
                    }
                    return e.prototype.isOfflineStorageAvailable = function() {
                        var e = this.mpInstance,
                            t = e._Helpers.getFeatureFlag,
                            r = e._Store.deviceId;
                        return parseInt(t(B.FeatureFlags.OfflineStorage), 10) >= (r ? Math.abs(et(r) % 100) + 1 : 100)
                    }, e.prototype.addEventListeners = function() {
                        var e = this;
                        document.addEventListener("visibilitychange", function() {
                            e.prepareAndUpload(!1, e.isBeaconAvailable())
                        }), window.addEventListener("beforeunload", function() {
                            e.prepareAndUpload(!1, e.isBeaconAvailable())
                        }), window.addEventListener("pagehide", function() {
                            e.prepareAndUpload(!1, e.isBeaconAvailable())
                        })
                    }, e.prototype.isBeaconAvailable = function() {
                        return !!navigator.sendBeacon
                    }, e.prototype.triggerUploadInterval = function(e, t) {
                        var r = this;
                        void 0 === e && (e = !1), void 0 === t && (t = !1), setTimeout(function() {
                            r.prepareAndUpload(e, t)
                        }, this.uploadIntervalMillis)
                    }, e.prototype.queueEvent = function(e) {
                        ev(e) || (this.eventsQueuedForProcessing.push(e), this.offlineStorageEnabled && this.eventVault && this.eventVault.store(this.eventsQueuedForProcessing), this.mpInstance.Logger.verbose("Queuing event: ".concat(JSON.stringify(e))), this.mpInstance.Logger.verbose("Queued event count: ".concat(this.eventsQueuedForProcessing.length)), (!this.batchingEnabled || j.TriggerUploadType[e.EventDataType]) && this.prepareAndUpload(!1, !1))
                    }, e.createNewBatches = function(e, t, r) {
                        if (!t || !e || !e.length) return null;
                        for (var n, i = [], o = new Map, s = 0; s < e.length; s++) {
                            if (!(n = e[s]).MPID) {
                                var a = t.getMPID();
                                n.MPID = a
                            }
                            var c = o.get(n.MPID);
                            c || (c = []), c.push(n), o.set(n.MPID, c)
                        }
                        for (var u = 0, d = Array.from(o.entries()); u < d.length; u++) {
                            for (var l = d[u], a = l[0], g = l[1], p = new Map, v = 0; v < g.length; v++) {
                                var n = g[v],
                                    c = p.get(n.SessionId);
                                c || (c = []), c.push(n), p.set(n.SessionId, c)
                            }
                            for (var m = 0, f = Array.from(p.entries()); m < f.length; m++) {
                                var h = em(a, f[m][1], r),
                                    y = r._Store.SDKConfig.onCreateBatch;
                                y && ((h = y(h)) ? h.modified = !0 : r.Logger.warning("Skiping batch upload because no batch was returned from onCreateBatch callback")), h && i.push(h)
                            }
                        }
                        return i
                    }, e.prototype.prepareAndUpload = function(t, r) {
                        return Q(this, void 0, void 0, function() {
                            var n, i, o, s, a, c, u, d;
                            return G(this, function(l) {
                                switch (l.label) {
                                    case 0:
                                        return n = this.mpInstance.Identity.getCurrentUser(), i = this.eventsQueuedForProcessing, this.eventsQueuedForProcessing = [], this.offlineStorageEnabled && this.eventVault && this.eventVault.store([]), o = [], ev(i) || (o = e.createNewBatches(i, n, this.mpInstance)), this.offlineStorageEnabled && this.batchVault && ((c = this.batchesQueuedForProcessing).unshift.apply(c, this.batchVault.retrieve()), this.batchVault.purge()), ev(o) || (u = this.batchesQueuedForProcessing).push.apply(u, o), s = this.batchesQueuedForProcessing, this.batchesQueuedForProcessing = [], [4, this.uploadBatches(this.mpInstance.Logger, s, r)];
                                    case 1:
                                        return ev(a = l.sent()) || (d = this.batchesQueuedForProcessing).unshift.apply(d, a), !r && this.offlineStorageEnabled && this.batchVault && (this.batchVault.store(this.batchesQueuedForProcessing), this.batchesQueuedForProcessing = []), t && this.triggerUploadInterval(t, !1), [2]
                                }
                            })
                        })
                    }, e.prototype.uploadBatches = function(t, r, n) {
                        return Q(this, void 0, void 0, function() {
                            var i, o, s, a, c, u;
                            return G(this, function(d) {
                                switch (d.label) {
                                    case 0:
                                        if (i = r.filter(function(e) {
                                                return !ev(e.events)
                                            }), ev(i)) return [2, null];
                                        t.verbose("Uploading batches: ".concat(JSON.stringify(i))), t.verbose("Batch count: ".concat(i.length)), o = 0, d.label = 1;
                                    case 1:
                                        return o < i.length ? (s = {
                                            method: "POST",
                                            headers: {
                                                Accept: e.CONTENT_TYPE,
                                                "Content-Type": "text/plain;charset=UTF-8"
                                            },
                                            body: JSON.stringify(i[o])
                                        }, n && this.isBeaconAvailable()) ? (a = new Blob([s.body], {
                                            type: "text/plain;charset=UTF-8"
                                        }), navigator.sendBeacon(this.uploadUrl, a), [3, 5]) : [3, 2] : [3, 6];
                                    case 2:
                                        return d.trys.push([2, 4, , 5]), [4, this.uploader.upload(s)];
                                    case 3:
                                        if (200 <= (c = d.sent()).status && 300 > c.status) t.verbose("Upload success for request ID: ".concat(i[o].source_request_id));
                                        else {
                                            if (500 <= c.status || 429 === c.status) return t.error("HTTP error status ".concat(c.status, " received")), [2, i.slice(o, i.length)];
                                            if (401 <= c.status) return t.error("HTTP error status ".concat(c.status, " while uploading - please verify your API key.")), [2, null];
                                            throw console.error("HTTP error status ".concat(c.status, " while uploading events."), c), Error("Uncaught HTTP Error ".concat(c.status, ".  Batch upload will be re-attempted."))
                                        }
                                        return [3, 5];
                                    case 4:
                                        return u = d.sent(), t.error("Error sending event to mParticle servers. ".concat(u)), [2, i.slice(o, i.length)];
                                    case 5:
                                        return o++, [3, 1];
                                    case 6:
                                        return [2, null]
                                }
                            })
                        })
                    }, e.CONTENT_TYPE = "text/plain;charset=UTF-8", e.MINIMUM_INTERVAL_MILLIS = 500, e
                }();

            function eE(e, t) {
                this.uploader = null;
                var r = this;
                this.queueEventForBatchUpload = function(t) {
                    if (!this.uploader) {
                        var r = eo(e._Helpers.getFeatureFlag(B.FeatureFlags.EventBatchingIntervalMillis));
                        this.uploader = new ew(e, r)
                    }
                    this.uploader.queueEvent(t), e._Persistence.update()
                }, this.processQueuedEvents = function() {
                    var t, n = e.Identity.getCurrentUser();
                    if (n && (t = n.getMPID()), e._Store.eventQueue.length && t) {
                        var i = e._Store.eventQueue;
                        e._Store.eventQueue = [], this.appendUserInfoToEvents(n, i), i.forEach(function(e) {
                            r.sendEventToServer(e)
                        })
                    }
                }, this.appendUserInfoToEvents = function(t, r) {
                    r.forEach(function(r) {
                        r.MPID || e._ServerModel.appendUserInfo(t, r)
                    })
                }, this.sendEventToServer = function(r, n) {
                    var i = e._Helpers.extend({
                        shouldUploadEvent: !0
                    }, n);
                    if (e._Store.webviewBridgeEnabled) return void e._NativeSdkHelpers.sendToNative(B.NativeSdkPaths.LogEvent, JSON.stringify(r));
                    var o, s = e.Identity.getCurrentUser();
                    return (s && (o = s.getMPID()), e._Store.requireDelay = e._Helpers.isDelayedByIntegration(e._preInit.integrationDelays, e._Store.integrationDelayTimeoutStart, Date.now()), o && !e._Store.requireDelay && e._Store.configurationLoaded) ? void(this.processQueuedEvents(), ev(r) || (i.shouldUploadEvent && this.queueEventForBatchUpload(r), r.EventName !== j.MessageType.AppStateTransition && (t && t.kitBlockingEnabled && (r = t.createBlockedEvent(r)), r && e._Forwarders.sendEventToForwarders(r)))) : (e.Logger.verbose("Event was added to eventQueue. eventQueue will be processed once a valid MPID is returned or there is no more integration imposed delay."), void e._Store.eventQueue.push(r))
                }, this.sendBatchForwardingStatsToServer = function(t, r) {
                    var n, i;
                    try {
                        n = e._Helpers.createServiceUrl(e._Store.SDKConfig.v2SecureServiceUrl, e._Store.devToken), i = {
                            uuid: e._Helpers.generateUniqueId(),
                            data: t
                        }, r && (r.open("post", n + "/Forwarding"), r.send(JSON.stringify(i)))
                    } catch (t) {
                        e.Logger.error("Error sending forwarding stats to mParticle servers.")
                    }
                }, this.sendSingleForwardingStatsToServer = function(t) {
                    var r;
                    try {
                        var n = e._Helpers.createXHR(function() {
                            4 === n.readyState && 202 === n.status && e.Logger.verbose("Successfully sent  " + n.statusText + " from server")
                        });
                        r = e._Helpers.createServiceUrl(e._Store.SDKConfig.v1SecureServiceUrl, e._Store.devToken), n && (n.open("post", r + "/Forwarding"), n.send(JSON.stringify(t)))
                    } catch (t) {
                        e.Logger.error("Error sending forwarding stats to mParticle servers.")
                    }
                }, this.prepareForwardingStats = function(t, n) {
                    var i, o = e._Forwarders.getForwarderStatsQueue();
                    t && t.isVisible && (i = {
                        mid: t.id,
                        esid: t.eventSubscriptionId,
                        n: n.EventName,
                        attrs: n.EventAttributes,
                        sdk: n.SDKVersion,
                        dt: n.EventDataType,
                        et: n.EventCategory,
                        dbg: n.Debug,
                        ct: n.Timestamp,
                        eec: n.ExpandedEventCount,
                        dp: n.DataPlan
                    }, e._Helpers.getFeatureFlag(B.FeatureFlags.ReportBatching) ? (o.push(i), e._Forwarders.setForwarderStatsQueue(o)) : r.sendSingleForwardingStatsToServer(i))
                }
            }
            var eT = B.IdentityMethods.Modify,
                ek = {
                    isNumber: ed,
                    isFunction: el,
                    isStringOrNumber: ep,
                    isValidAttributeValue: function(e) {
                        return void 0 !== e && !ei(e) && !Array.isArray(e)
                    },
                    isValidKeyValue: function(e) {
                        return !(!e || ei(e) || Array.isArray(e) || this.isFunction(e))
                    },
                    validateIdentities: function(e, t) {
                        var r = {
                            userIdentities: 1,
                            onUserAlias: 1,
                            copyUserAttributes: 1
                        };
                        if (e) {
                            if (t === eT && (ei(e.userIdentities) && !Object.keys(e.userIdentities).length || !ei(e.userIdentities))) return {
                                valid: !1,
                                error: B.Messages.ValidationMessages.ModifyIdentityRequestUserIdentitiesPresent
                            };
                            for (var n in e)
                                if (e.hasOwnProperty(n)) {
                                    if (!r[n]) return {
                                        valid: !1,
                                        error: B.Messages.ValidationMessages.IdentityRequesetInvalidKey
                                    };
                                    if ("onUserAlias" === n && !ek.isFunction(e[n])) return {
                                        valid: !1,
                                        error: B.Messages.ValidationMessages.OnUserAliasType
                                    }
                                }
                            if (0 === Object.keys(e).length) return {
                                valid: !0
                            };
                            if (void 0 === e.userIdentities || null !== e.userIdentities && !ei(e.userIdentities)) return {
                                valid: !1,
                                error: B.Messages.ValidationMessages.UserIdentities
                            };
                            if (ei(e.userIdentities) && Object.keys(e.userIdentities).length) {
                                for (var i in e.userIdentities)
                                    if (e.userIdentities.hasOwnProperty(i)) {
                                        if (!1 === j.IdentityType.getIdentityType(i)) return {
                                            valid: !1,
                                            error: B.Messages.ValidationMessages.UserIdentitiesInvalidKey
                                        };
                                        if ("string" != typeof e.userIdentities[i] && null !== e.userIdentities[i]) return {
                                            valid: !1,
                                            error: B.Messages.ValidationMessages.UserIdentitiesInvalidValues
                                        }
                                    }
                            }
                        }
                        return {
                            valid: !0
                        }
                    }
                },
                eD = function() {
                    function e() {}
                    return e.hashEventType = function(e) {
                        return et(e)
                    }, e.hashEventName = function(e, t) {
                        return et(t + e)
                    }, e.hashEventAttributeKey = function(e, t, r) {
                        return et(e + t + r)
                    }, e.hashUserAttribute = function(e) {
                        return et(e)
                    }, e.hashUserIdentity = function(e) {
                        return e
                    }, e.hashConsentPurpose = function(e, t) {
                        return et(e + t)
                    }, e.hashAttributeConditionalForwarding = function(e) {
                        return et(e).toString()
                    }, e.hashConsentPurposeConditionalForwarding = function(e, t) {
                        return this.hashConsentPurpose(e, t).toString()
                    }, e
                }(),
                eO = B.StorageNames;

            function eU(e) {
                var t = this;
                this.canLog = function() {
                    return !!(e._Store.isEnabled && (e._Store.devToken || e._Store.webviewBridgeEnabled))
                }, this.getFeatureFlag = function(t) {
                    return e._Store.SDKConfig.flags.hasOwnProperty(t) ? e._Store.SDKConfig.flags[t] : null
                }, this.invokeCallback = function(r, n, i, o, s) {
                    r || e.Logger.warning("There is no callback provided");
                    try {
                        t.Validators.isFunction(r) && r({
                            httpCode: n,
                            body: i,
                            getUser: function() {
                                return o || e.Identity.getCurrentUser()
                            },
                            getPreviousUser: function() {
                                if (!s) {
                                    var t = e.Identity.getUsers(),
                                        r = t.shift(),
                                        n = o || e.Identity.getCurrentUser();
                                    return r && n && r.getMPID() === n.getMPID() && (r = t.shift()), r || null
                                }
                                return e.Identity.getUser(s)
                            }
                        })
                    } catch (t) {
                        e.Logger.error("There was an error with your callback: " + t)
                    }
                }, this.invokeAliasCallback = function(r, n, i) {
                    r || e.Logger.warning("There is no callback provided");
                    try {
                        if (t.Validators.isFunction(r)) {
                            var o = {
                                httpCode: n
                            };
                            i && (o.message = i), r(o)
                        }
                    } catch (t) {
                        e.Logger.error("There was an error with your callback: " + t)
                    }
                }, this.extend = function() {
                    var e, r, n, i, o, s, a = arguments[0] || {},
                        c = 1,
                        u = arguments.length,
                        d = !1,
                        l = {
                            hasOwn: Object.prototype.hasOwnProperty,
                            class2type: {},
                            type: function(e) {
                                return null == e ? e + "" : l.class2type[Object.prototype.toString.call(e)] || "object"
                            },
                            isPlainObject: function(e) {
                                if (!e || "object" !== l.type(e) || e.nodeType || l.isWindow(e)) return !1;
                                try {
                                    if (e.constructor && !l.hasOwn.call(e, "constructor") && !l.hasOwn.call(e.constructor.prototype, "isPrototypeOf")) return !1
                                } catch (e) {
                                    return !1
                                }
                                for (var t in e);
                                return void 0 === t || l.hasOwn.call(e, t)
                            },
                            isArray: Array.isArray || function(e) {
                                return "array" === l.type(e)
                            },
                            isFunction: function(e) {
                                return "function" === l.type(e)
                            },
                            isWindow: function(e) {
                                return null != e && e == e.window
                            }
                        };
                    for ("boolean" == typeof a && (d = a, a = arguments[1] || {}, c = 2), "object" === L(a) || l.isFunction(a) || (a = {}), u === c && (a = this, --c); c < u; c++)
                        if (null != (e = arguments[c]))
                            for (r in e) n = a[r], a !== (i = e[r]) && (d && i && (l.isPlainObject(i) || (o = l.isArray(i))) ? (o ? (o = !1, s = n && l.isArray(n) ? n : []) : s = n && l.isPlainObject(n) ? n : {}, a[r] = t.extend(d, s, i)) : void 0 !== i && (a[r] = i));
                    return a
                }, this.createServiceUrl = function(t, r) {
                    var n, i = window.mParticle && e._Store.SDKConfig.forceHttps ? "https://" : window.location.protocol + "//";
                    return n = e._Store.SDKConfig.forceHttps ? "https://" + t : i + t, r && (n += r), n
                }, this.createXHR = function(t) {
                    var r;
                    try {
                        r = new window.XMLHttpRequest
                    } catch (t) {
                        e.Logger.error("Error creating XMLHttpRequest object.")
                    }
                    if (r && t && "withCredentials" in r) r.onreadystatechange = t;
                    else if (void 0 !== window.XDomainRequest) {
                        e.Logger.verbose("Creating XDomainRequest object");
                        try {
                            (r = new window.XDomainRequest).onload = t
                        } catch (t) {
                            e.Logger.error("Error creating XDomainRequest object")
                        }
                    }
                    return r
                }, this.filterUserIdentities = function(e, r) {
                    var n = [];
                    if (e && Object.keys(e).length) {
                        for (var i in e)
                            if (e.hasOwnProperty(i)) {
                                var o = j.IdentityType.getIdentityType(i);
                                if (!t.inArray(r, o)) {
                                    var s = {
                                        Type: o,
                                        Identity: e[i]
                                    };
                                    o === j.IdentityType.CustomerId ? n.unshift(s) : n.push(s)
                                }
                            }
                    }
                    return n
                }, this.filterUserIdentitiesForForwarders = function(e, r) {
                    var n = {};
                    if (e && Object.keys(e).length) {
                        for (var i in e)
                            if (e.hasOwnProperty(i)) {
                                var o = eD.hashUserIdentity(j.IdentityType.getIdentityType(i));
                                t.inArray(r, o) || (n[i] = e[i])
                            }
                    }
                    return n
                }, this.filterUserAttributes = function(e, r) {
                    var n = {};
                    if (e && Object.keys(e).length) {
                        for (var i in e)
                            if (e.hasOwnProperty(i)) {
                                var o = eD.hashUserAttribute(i);
                                t.inArray(r, o) || (n[i] = e[i])
                            }
                    }
                    return n
                }, this.isFilteredUserAttribute = function(e, r) {
                    var n = eD.hashUserAttribute(e);
                    return r && t.inArray(r, n)
                }, this.isEventType = function(e) {
                    for (var t in j.EventType)
                        if (j.EventType.hasOwnProperty(t) && j.EventType[t] === e) return !0;
                    return !1
                }, this.sanitizeAttributes = function(r, n) {
                    if (!r || !t.isObject(r)) return null;
                    var i = {};
                    for (var o in r) r.hasOwnProperty(o) && t.Validators.isValidAttributeValue(r[o]) ? i[o] = r[o] : e.Logger.warning("For '" + n + "', the corresponding attribute value of '" + o + "' must be a string, number, boolean, or null.");
                    return i
                }, this.isDelayedByIntegration = function(t, r, n) {
                    if (n - r > e._Store.SDKConfig.integrationDelayTimeout) return !1;
                    for (var i in t)
                        if (!0 === t[i]) return !0;
                    return !1
                }, this.createMainStorageName = function(e) {
                    return e ? eO.currentStorageName + "_" + e : eO.currentStorageName
                }, this.createProductStorageName = function(e) {
                    return e ? eO.currentStorageProductsName + "_" + e : eO.currentStorageProductsName
                }, this.converted = ec, this.findKeyInObject = Z, this.parseNumber = eo, this.inArray = $, this.isObject = ei, this.decoded = ea, this.parseStringOrNumber = es, this.generateHash = et, this.generateUniqueId = en, this.Validators = ek
            }
            var eL = B.Messages,
                eM = "mParticleAndroid",
                eN = "mParticle";

            function eF(e) {
                var t = this;
                this.initializeSessionAttributes = function(e) {
                    var r = B.NativeSdkPaths.SetSessionAttribute,
                        n = JSON.stringify({
                            key: "$src_env",
                            value: "webview"
                        }),
                        i = JSON.stringify({
                            key: "$src_key",
                            value: e
                        });
                    t.sendToNative(r, n), e && t.sendToNative(r, i)
                }, this.isBridgeV2Available = function(e) {
                    if (!e) return !1;
                    var t = eN + "_" + e + "_v2";
                    return !!(window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.hasOwnProperty(t)) || !!(window.mParticle && window.mParticle.uiwebviewBridgeName && window.mParticle.uiwebviewBridgeName === t) || !!window.hasOwnProperty(eM + "_" + e + "_v2")
                }, this.isWebviewEnabled = function(r, n) {
                    return e._Store.bridgeV2Available = t.isBridgeV2Available(r), e._Store.bridgeV1Available = t.isBridgeV1Available(), 2 === n ? e._Store.bridgeV2Available : !(window.mParticle && window.mParticle.uiwebviewBridgeName && window.mParticle.uiwebviewBridgeName !== eN + "_" + r + "_v2") && 2 > n && (e._Store.bridgeV2Available || e._Store.bridgeV1Available)
                }, this.isBridgeV1Available = function() {
                    return !!(e._Store.SDKConfig.useNativeSdk || window.mParticleAndroid || e._Store.SDKConfig.isIOS)
                }, this.sendToNative = function(r, n) {
                    return e._Store.bridgeV2Available && 2 === e._Store.SDKConfig.minWebviewBridgeVersion ? void t.sendViaBridgeV2(r, n, e._Store.SDKConfig.requiredWebviewBridgeName) : e._Store.bridgeV2Available && 2 > e._Store.SDKConfig.minWebviewBridgeVersion ? void t.sendViaBridgeV2(r, n, e._Store.SDKConfig.requiredWebviewBridgeName) : e._Store.bridgeV1Available && 2 > e._Store.SDKConfig.minWebviewBridgeVersion ? void t.sendViaBridgeV1(r, n) : void 0
                }, this.sendViaBridgeV1 = function(r, n) {
                    window.mParticleAndroid && window.mParticleAndroid.hasOwnProperty(r) ? (e.Logger.verbose(eL.InformationMessages.SendAndroid + r), window.mParticleAndroid[r](n)) : e._Store.SDKConfig.isIOS && (e.Logger.verbose(eL.InformationMessages.SendIOS + r), t.sendViaIframeToIOS(r, n))
                }, this.sendViaIframeToIOS = function(e, t) {
                    var r = document.createElement("IFRAME");
                    r.setAttribute("src", "mp-sdk://" + e + "/" + encodeURIComponent(t)), document.documentElement.appendChild(r), r.parentNode.removeChild(r)
                }, this.sendViaBridgeV2 = function(r, n, i) {
                    if (i) {
                        var o, s, a = window[eM + "_" + i + "_v2"],
                            c = eN + "_" + i + "_v2";
                        return window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers[c] && (o = window.webkit.messageHandlers[c]), e.uiwebviewBridgeName === c && (s = e[c]), a && a.hasOwnProperty(r) ? (e.Logger.verbose(eL.InformationMessages.SendAndroid + r), void a[r](n)) : void(o ? (e.Logger.verbose(eL.InformationMessages.SendIOS + r), o.postMessage(JSON.stringify({
                            path: r,
                            value: n ? JSON.parse(n) : null
                        }))) : s && (e.Logger.verbose(eL.InformationMessages.SendIOS + r), t.sendViaIframeToIOS(r, n)))
                    }
                }
            }
            var eR = B.Messages;

            function eV(e) {
                var t = this;
                this.attemptCookieSync = function(r, n, i) {
                    var o, s, a, c;
                    n && !e._Store.webviewBridgeEnabled && e._Store.pixelConfigurations.forEach(function(u) {
                        c = !1, u.filteringConsentRuleValues && u.filteringConsentRuleValues.values && u.filteringConsentRuleValues.values.length && (c = !0), o = {
                            moduleId: u.moduleId,
                            frequencyCap: u.frequencyCap,
                            pixelUrl: t.replaceAmp(u.pixelUrl),
                            redirectUrl: u.redirectUrl ? t.replaceAmp(u.redirectUrl) : null,
                            filteringConsentRuleValues: u.filteringConsentRuleValues
                        }, a = t.replaceMPID(o.pixelUrl, n) + encodeURIComponent(o.redirectUrl ? t.replaceMPID(o.redirectUrl, n) : "");
                        var d = e._Persistence.getPersistence();
                        return r && r !== n ? void(d && d[n] && (d[n].csd || (d[n].csd = {}), t.performCookieSync(a, o.moduleId, n, d[n].csd, o.filteringConsentRuleValues, i, c))) : void(d[n] && (d[n].csd || (d[n].csd = {}), (s = d[n].csd[o.moduleId.toString()] ? d[n].csd[o.moduleId.toString()] : null) ? new Date().getTime() > new Date(s).getTime() + 60 * o.frequencyCap * 144e4 && t.performCookieSync(a, o.moduleId, n, d[n].csd, o.filteringConsentRuleValues, i, c) : t.performCookieSync(a, o.moduleId, n, d[n].csd, o.filteringConsentRuleValues, i, c)))
                    })
                }, this.replaceMPID = function(e, t) {
                    return e.replace("%%mpid%%", t)
                }, this.replaceAmp = function(e) {
                    return e.replace(/&amp;/g, "&")
                }, this.performCookieSync = function(t, r, n, i, o, s, a) {
                    if (!(a && s) && e._Consent.isEnabledForUserConsent(o, e.Identity.getCurrentUser())) {
                        var c = document.createElement("img");
                        e.Logger.verbose(eR.InformationMessages.CookieSync), c.onload = function() {
                            i[r.toString()] = new Date().getTime(), e._Persistence.saveUserCookieSyncDatesToPersistence(n, i)
                        }, c.src = t
                    }
                }
            }
            var eH = B.Messages;

            function eK(e) {
                var t = this;
                this.initialize = function() {
                    if (e._Store.sessionId) {
                        var r = 6e4 * e._Store.SDKConfig.sessionTimeout;
                        if (new Date > new Date(e._Store.dateLastEventSent.getTime() + r)) t.endSession(), t.startNewSession();
                        else {
                            var n = e._Persistence.getPersistence();
                            n && !n.cu && (e.Identity.identify(e._Store.SDKConfig.identifyRequest, e._Store.SDKConfig.identityCallback), e._Store.identifyCalled = !0, e._Store.SDKConfig.identityCallback = null)
                        }
                    } else t.startNewSession()
                }, this.getSession = function() {
                    return e.Logger.warning(ee("SessionManager.getSession()", "SessionManager.getSessionId()")), this.getSessionId()
                }, this.getSessionId = function() {
                    return e._Store.sessionId
                }, this.startNewSession = function() {
                    if (e.Logger.verbose(eH.InformationMessages.StartingNewSession), e._Helpers.canLog()) {
                        e._Store.sessionId = e._Helpers.generateUniqueId().toUpperCase();
                        var r = e.Identity.getCurrentUser(),
                            n = r ? r.getMPID() : null;
                        if (n && (e._Store.currentSessionMPIDs = [n]), !e._Store.sessionStartDate) {
                            var i = new Date;
                            e._Store.sessionStartDate = i, e._Store.dateLastEventSent = i
                        }
                        t.setSessionTimer(), e._Store.identifyCalled || (e.Identity.identify(e._Store.SDKConfig.identifyRequest, e._Store.SDKConfig.identityCallback), e._Store.identifyCalled = !0, e._Store.SDKConfig.identityCallback = null), e._Events.logEvent({
                            messageType: j.MessageType.SessionStart
                        })
                    } else e.Logger.verbose(eH.InformationMessages.AbandonStartSession)
                }, this.endSession = function(r) {
                    if (e.Logger.verbose(eH.InformationMessages.StartingEndSession), r) return e._Events.logEvent({
                        messageType: j.MessageType.SessionEnd
                    }), void e._Store.nullifySession();
                    if (!e._Helpers.canLog()) return void e.Logger.verbose(eH.InformationMessages.AbandonEndSession);
                    var n, i, o = e._Persistence.getPersistence();
                    if (!o || o.gs && !o.gs.sid) return void e.Logger.verbose(eH.InformationMessages.NoSessionToEnd);
                    o.gs.sid && e._Store.sessionId !== o.gs.sid && (e._Store.sessionId = o.gs.sid), (null === (n = null == o ? void 0 : o.gs) || void 0 === n ? void 0 : n.les) && (i = 6e4 * e._Store.SDKConfig.sessionTimeout, new Date().getTime() - o.gs.les < i ? t.setSessionTimer() : (e._Events.logEvent({
                        messageType: j.MessageType.SessionEnd
                    }), e._Store.sessionStartDate = null, e._Store.nullifySession()))
                }, this.setSessionTimer = function() {
                    var r = 6e4 * e._Store.SDKConfig.sessionTimeout;
                    e._Store.globalTimer = window.setTimeout(function() {
                        t.endSession()
                    }, r)
                }, this.resetSessionTimer = function() {
                    e._Store.webviewBridgeEnabled || (e._Store.sessionId || t.startNewSession(), t.clearSessionTimeout(), t.setSessionTimer()), t.startNewSessionIfNeeded()
                }, this.clearSessionTimeout = function() {
                    clearTimeout(e._Store.globalTimer)
                }, this.startNewSessionIfNeeded = function() {
                    if (!e._Store.webviewBridgeEnabled) {
                        var r = e._Persistence.getPersistence();
                        !e._Store.sessionId && r && (r.sid ? e._Store.sessionId = r.sid : t.startNewSession())
                    }
                }
            }
            var ex = B.Messages;

            function eq(e) {
                var t = this;
                this.convertTransactionAttributesToProductAction = function(e, t) {
                    e.hasOwnProperty("Id") && (t.TransactionId = e.Id), e.hasOwnProperty("Affiliation") && (t.Affiliation = e.Affiliation), e.hasOwnProperty("CouponCode") && (t.CouponCode = e.CouponCode), e.hasOwnProperty("Revenue") && (t.TotalAmount = this.sanitizeAmount(e.Revenue, "Revenue")), e.hasOwnProperty("Shipping") && (t.ShippingAmount = this.sanitizeAmount(e.Shipping, "Shipping")), e.hasOwnProperty("Tax") && (t.TaxAmount = this.sanitizeAmount(e.Tax, "Tax")), e.hasOwnProperty("Step") && (t.CheckoutStep = e.Step), e.hasOwnProperty("Option") && (t.CheckoutOptions = e.Option)
                }, this.getProductActionEventName = function(e) {
                    switch (e) {
                        case j.ProductActionType.AddToCart:
                            return "AddToCart";
                        case j.ProductActionType.AddToWishlist:
                            return "AddToWishlist";
                        case j.ProductActionType.Checkout:
                            return "Checkout";
                        case j.ProductActionType.CheckoutOption:
                            return "CheckoutOption";
                        case j.ProductActionType.Click:
                            return "Click";
                        case j.ProductActionType.Purchase:
                            return "Purchase";
                        case j.ProductActionType.Refund:
                            return "Refund";
                        case j.ProductActionType.RemoveFromCart:
                            return "RemoveFromCart";
                        case j.ProductActionType.RemoveFromWishlist:
                            return "RemoveFromWishlist";
                        case j.ProductActionType.ViewDetail:
                            return "ViewDetail";
                        case j.ProductActionType.Unknown:
                        default:
                            return "Unknown"
                    }
                }, this.getPromotionActionEventName = function(e) {
                    return e === j.PromotionActionType.PromotionClick ? "PromotionClick" : e === j.PromotionActionType.PromotionView ? "PromotionView" : "Unknown"
                }, this.convertProductActionToEventType = function(t) {
                    return t === j.ProductActionType.AddToCart ? j.CommerceEventType.ProductAddToCart : t === j.ProductActionType.AddToWishlist ? j.CommerceEventType.ProductAddToWishlist : t === j.ProductActionType.Checkout ? j.CommerceEventType.ProductCheckout : t === j.ProductActionType.CheckoutOption ? j.CommerceEventType.ProductCheckoutOption : t === j.ProductActionType.Click ? j.CommerceEventType.ProductClick : t === j.ProductActionType.Purchase ? j.CommerceEventType.ProductPurchase : t === j.ProductActionType.Refund ? j.CommerceEventType.ProductRefund : t === j.ProductActionType.RemoveFromCart ? j.CommerceEventType.ProductRemoveFromCart : t === j.ProductActionType.RemoveFromWishlist ? j.CommerceEventType.ProductRemoveFromWishlist : t === j.ProductActionType.Unknown ? j.EventType.Unknown : t === j.ProductActionType.ViewDetail ? j.CommerceEventType.ProductViewDetail : (e.Logger.error("Could not convert product action type " + t + " to event type"), null)
                }, this.convertPromotionActionToEventType = function(t) {
                    return t === j.PromotionActionType.PromotionClick ? j.CommerceEventType.PromotionClick : t === j.PromotionActionType.PromotionView ? j.CommerceEventType.PromotionView : (e.Logger.error("Could not convert promotion action type " + t + " to event type"), null)
                }, this.generateExpandedEcommerceName = function(e, t) {
                    return "eCommerce - " + e + " - " + (t ? "Total" : "Item")
                }, this.extractProductAttributes = function(e, t) {
                    t.CouponCode && (e["Coupon Code"] = t.CouponCode), t.Brand && (e.Brand = t.Brand), t.Category && (e.Category = t.Category), t.Name && (e.Name = t.Name), t.Sku && (e.Id = t.Sku), t.Price && (e["Item Price"] = t.Price), t.Quantity && (e.Quantity = t.Quantity), t.Position && (e.Position = t.Position), t.Variant && (e.Variant = t.Variant), e["Total Product Amount"] = t.TotalAmount || 0
                }, this.extractTransactionId = function(e, t) {
                    t.TransactionId && (e["Transaction Id"] = t.TransactionId)
                }, this.extractActionAttributes = function(e, r) {
                    t.extractTransactionId(e, r), r.Affiliation && (e.Affiliation = r.Affiliation), r.CouponCode && (e["Coupon Code"] = r.CouponCode), r.TotalAmount && (e["Total Amount"] = r.TotalAmount), r.ShippingAmount && (e["Shipping Amount"] = r.ShippingAmount), r.TaxAmount && (e["Tax Amount"] = r.TaxAmount), r.CheckoutOptions && (e["Checkout Options"] = r.CheckoutOptions), r.CheckoutStep && (e["Checkout Step"] = r.CheckoutStep)
                }, this.extractPromotionAttributes = function(e, t) {
                    t.Id && (e.Id = t.Id), t.Creative && (e.Creative = t.Creative), t.Name && (e.Name = t.Name), t.Position && (e.Position = t.Position)
                }, this.buildProductList = function(e, t) {
                    return t ? Array.isArray(t) ? t : [t] : e.ShoppingCart.ProductList
                }, this.createProduct = function(t, r, n, i, o, s, a, c, u, d) {
                    return (d = e._Helpers.sanitizeAttributes(d, t), "string" != typeof t) ? (e.Logger.error("Name is required when creating a product"), null) : e._Helpers.Validators.isStringOrNumber(r) ? e._Helpers.Validators.isStringOrNumber(n) ? (n = e._Helpers.parseNumber(n), c && !e._Helpers.Validators.isNumber(c) && (e.Logger.error("Position must be a number, it will be set to null."), c = null), {
                        Name: t,
                        Sku: r,
                        Price: n,
                        Quantity: i = e._Helpers.Validators.isStringOrNumber(i) ? e._Helpers.parseNumber(i) : 1,
                        Brand: a,
                        Variant: o,
                        Category: s,
                        Position: c,
                        CouponCode: u,
                        TotalAmount: i * n,
                        Attributes: d
                    }) : (e.Logger.error("Price is required when creating a product, and must be a string or a number"), null) : (e.Logger.error("SKU is required when creating a product, and must be a string or a number"), null)
                }, this.createPromotion = function(t, r, n, i) {
                    return e._Helpers.Validators.isStringOrNumber(t) ? {
                        Id: t,
                        Creative: r,
                        Name: n,
                        Position: i
                    } : (e.Logger.error(ex.ErrorMessages.PromotionIdRequired), null)
                }, this.createImpression = function(t, r) {
                    return "string" == typeof t ? r ? {
                        Name: t,
                        Product: r
                    } : (e.Logger.error("Product is required when creating an impression."), null) : (e.Logger.error("Name is required when creating an impression."), null)
                }, this.createTransactionAttributes = function(t, r, n, i, o, s) {
                    return e._Helpers.Validators.isStringOrNumber(t) ? {
                        Id: t,
                        Affiliation: r,
                        CouponCode: n,
                        Revenue: i,
                        Shipping: o,
                        Tax: s
                    } : (e.Logger.error(ex.ErrorMessages.TransactionIdRequired), null)
                }, this.expandProductImpression = function(r) {
                    var n = [];
                    return r.ProductImpressions && r.ProductImpressions.forEach(function(i) {
                        i.ProductList && i.ProductList.forEach(function(o) {
                            var s = e._Helpers.extend(!1, {}, r.EventAttributes);
                            if (o.Attributes)
                                for (var a in o.Attributes) s[a] = o.Attributes[a];
                            t.extractProductAttributes(s, o), i.ProductImpressionList && (s["Product Impression List"] = i.ProductImpressionList);
                            var c = e._ServerModel.createEventObject({
                                messageType: j.MessageType.PageEvent,
                                name: t.generateExpandedEcommerceName("Impression"),
                                data: s,
                                eventType: j.EventType.Transaction
                            });
                            n.push(c)
                        })
                    }), n
                }, this.expandCommerceEvent = function(e) {
                    return e ? t.expandProductAction(e).concat(t.expandPromotionAction(e)).concat(t.expandProductImpression(e)) : null
                }, this.expandPromotionAction = function(r) {
                    var n = [];
                    return r.PromotionAction && r.PromotionAction.PromotionList.forEach(function(i) {
                        var o = e._Helpers.extend(!1, {}, r.EventAttributes);
                        t.extractPromotionAttributes(o, i);
                        var s = e._ServerModel.createEventObject({
                            messageType: j.MessageType.PageEvent,
                            name: t.generateExpandedEcommerceName(j.PromotionActionType.getExpansionName(r.PromotionAction.PromotionActionType)),
                            data: o,
                            eventType: j.EventType.Transaction
                        });
                        n.push(s)
                    }), n
                }, this.expandProductAction = function(r) {
                    var n = [];
                    if (!r.ProductAction) return n;
                    var i = !1;
                    if (r.ProductAction.ProductActionType === j.ProductActionType.Purchase || r.ProductAction.ProductActionType === j.ProductActionType.Refund) {
                        var o = e._Helpers.extend(!1, {}, r.EventAttributes);
                        o["Product Count"] = r.ProductAction.ProductList ? r.ProductAction.ProductList.length : 0, t.extractActionAttributes(o, r.ProductAction), r.CurrencyCode && (o["Currency Code"] = r.CurrencyCode);
                        var s = e._ServerModel.createEventObject({
                            messageType: j.MessageType.PageEvent,
                            name: t.generateExpandedEcommerceName(j.ProductActionType.getExpansionName(r.ProductAction.ProductActionType), !0),
                            data: o,
                            eventType: j.EventType.Transaction
                        });
                        n.push(s)
                    } else i = !0;
                    var a = r.ProductAction.ProductList;
                    return a && a.forEach(function(o) {
                        var s = e._Helpers.extend(!1, r.EventAttributes, o.Attributes);
                        i ? t.extractActionAttributes(s, r.ProductAction) : t.extractTransactionId(s, r.ProductAction), t.extractProductAttributes(s, o);
                        var a = e._ServerModel.createEventObject({
                            messageType: j.MessageType.PageEvent,
                            name: t.generateExpandedEcommerceName(j.ProductActionType.getExpansionName(r.ProductAction.ProductActionType)),
                            data: s,
                            eventType: j.EventType.Transaction
                        });
                        n.push(a)
                    }), n
                }, this.createCommerceEventObject = function(t) {
                    var r;
                    return (e.Logger.verbose(ex.InformationMessages.StartingLogCommerceEvent), e._Helpers.canLog()) ? ((r = e._ServerModel.createEventObject({
                        messageType: j.MessageType.Commerce
                    })).EventName = "eCommerce - ", r.CurrencyCode = e._Store.currencyCode, r.ShoppingCart = [], r.CustomFlags = t, r) : (e.Logger.verbose(ex.InformationMessages.AbandonLogEvent), null)
                }, this.sanitizeAmount = function(t, r) {
                    if (!e._Helpers.Validators.isStringOrNumber(t)) {
                        var n = [r, "must be of type number. A", L(t), "was passed. Converting to 0"].join(" ");
                        return e.Logger.warning(n), 0
                    }
                    return e._Helpers.parseNumber(t)
                }
            }

            function ej(e, t, r) {
                var n = this,
                    i = t._Helpers,
                    o = i.createMainStorageName,
                    s = i.createProductStorageName,
                    a = t._NativeSdkHelpers.isWebviewEnabled,
                    c = {
                        isEnabled: !0,
                        sessionAttributes: {},
                        currentSessionMPIDs: [],
                        consentState: null,
                        sessionId: null,
                        isFirstRun: null,
                        clientId: null,
                        deviceId: null,
                        devToken: null,
                        serverSettings: {},
                        dateLastEventSent: null,
                        sessionStartDate: null,
                        currentPosition: null,
                        isTracking: !1,
                        watchPositionId: null,
                        cartProducts: [],
                        eventQueue: [],
                        currencyCode: null,
                        globalTimer: null,
                        context: null,
                        configurationLoaded: !1,
                        identityCallInFlight: !1,
                        SDKConfig: {},
                        nonCurrentUserMPIDs: {},
                        identifyCalled: !1,
                        isLoggedIn: !1,
                        cookieSyncDates: {},
                        integrationAttributes: {},
                        requireDelay: !0,
                        isLocalStorageAvailable: null,
                        storageName: null,
                        prodStorageName: null,
                        activeForwarders: [],
                        kits: {},
                        sideloadedKits: [],
                        configuredForwarders: [],
                        pixelConfigurations: [],
                        wrapperSDKInfo: {
                            name: "none",
                            version: null,
                            isInfoSet: !1
                        },
                        persistenceData: {
                            cu: null,
                            gs: {
                                sid: null,
                                ie: null,
                                sa: null,
                                ss: null,
                                dt: null,
                                av: null,
                                cgid: null,
                                das: null,
                                ia: null,
                                c: null,
                                csm: null,
                                les: null,
                                ssd: null
                            },
                            l: null
                        }
                    };
                for (var u in c) this[u] = c[u];
                if (this.devToken = r || null, this.integrationDelayTimeoutStart = Date.now(), this.SDKConfig = function(e) {
                        var t = {};
                        for (var r in B.DefaultConfig) B.DefaultConfig.hasOwnProperty(r) && (t[r] = B.DefaultConfig[r]);
                        if (e)
                            for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
                        for (var r in B.DefaultBaseUrls) t[r] = B.DefaultBaseUrls[r];
                        return t
                    }(e), e) {
                    e.hasOwnProperty("flags") || (this.SDKConfig.flags = {}), this.SDKConfig.flags = eB(e), e.deviceId && (this.deviceId = e.deviceId), this.SDKConfig.isDevelopmentMode = !!e.hasOwnProperty("isDevelopmentMode") && "false" !== (l = e.isDevelopmentMode) && "0" !== l && !!l;
                    var d, l, g = (d = this.SDKConfig.flags, r ? d.directURLRouting ? function(e, t) {
                        var r = B.DefaultBaseUrls,
                            n = {},
                            i = t.split("-"),
                            o = 1 >= i.length ? "us1" : i[0];
                        for (var s in r) {
                            if ("configUrl" == s) {
                                n[s] = e[s] || r[s];
                                continue
                            }
                            if (e.hasOwnProperty(s)) n[s] = e[s];
                            else {
                                var a = r[s].split(".");
                                n[s] = (function(e, t, r) {
                                    if (r || 2 == arguments.length)
                                        for (var n, i = 0, o = t.length; i < o; i++) !n && i in t || (n || (n = Array.prototype.slice.call(t, 0, i)), n[i] = t[i]);
                                    return e.concat(n || Array.prototype.slice.call(t))
                                })([a[0], o], a.slice(1), !0).join(".")
                            }
                        }
                        return n
                    }(e, r) : function(e) {
                        var t = B.DefaultBaseUrls,
                            r = {};
                        for (var n in t) r[n] = e[n] || t[n];
                        return r
                    }(e) : {});
                    for (var p in g) this.SDKConfig[p] = g[p];
                    if (e.hasOwnProperty("logLevel") && (this.SDKConfig.logLevel = e.logLevel), this.SDKConfig.useNativeSdk = !!e.useNativeSdk, this.SDKConfig.kits = e.kits || {}, this.SDKConfig.sideloadedKits = e.sideloadedKits || [], this.SDKConfig.isIOS = e.hasOwnProperty("isIOS") ? e.isIOS : !!(window.mParticle && window.mParticle.isIOS) && window.mParticle.isIOS, this.SDKConfig.useCookieStorage = !!e.hasOwnProperty("useCookieStorage") && e.useCookieStorage, this.SDKConfig.maxProducts = e.hasOwnProperty("maxProducts") ? e.maxProducts : B.DefaultConfig.maxProducts, this.SDKConfig.maxCookieSize = e.hasOwnProperty("maxCookieSize") ? e.maxCookieSize : B.DefaultConfig.maxCookieSize, e.hasOwnProperty("appName") && (this.SDKConfig.appName = e.appName), e.hasOwnProperty("package") && (this.SDKConfig.package = e.package), this.SDKConfig.integrationDelayTimeout = e.hasOwnProperty("integrationDelayTimeout") ? e.integrationDelayTimeout : B.DefaultConfig.integrationDelayTimeout, e.hasOwnProperty("identifyRequest") && (this.SDKConfig.identifyRequest = e.identifyRequest), e.hasOwnProperty("identityCallback")) {
                        var v = e.identityCallback;
                        t._Helpers.Validators.isFunction(v) ? this.SDKConfig.identityCallback = e.identityCallback : t.Logger.warning("The optional callback must be a function. You tried entering a(n) " + L(v) + " . Callback not set. Please set your callback again.")
                    }
                    if (e.hasOwnProperty("appVersion") && (this.SDKConfig.appVersion = e.appVersion), e.hasOwnProperty("appName") && (this.SDKConfig.appName = e.appName), e.hasOwnProperty("sessionTimeout") && (this.SDKConfig.sessionTimeout = e.sessionTimeout), e.hasOwnProperty("dataPlan")) {
                        this.SDKConfig.dataPlan = {
                            PlanVersion: null,
                            PlanId: null
                        };
                        var m, f = e.dataPlan;
                        f.planId && ((m = f.planId) === (ep(m) ? m.toString().toLowerCase().replace(/[^0-9a-zA-Z]+/g, "_") : "") ? this.SDKConfig.dataPlan.PlanId = f.planId : t.Logger.error("Your data plan id must be a string and match the data plan slug format (i.e. under_case_slug)")), f.planVersion && (ed(f.planVersion) ? this.SDKConfig.dataPlan.PlanVersion = f.planVersion : t.Logger.error("Your data plan version must be a number"))
                    } else this.SDKConfig.dataPlan = {};
                    if (this.SDKConfig.forceHttps = !e.hasOwnProperty("forceHttps") || e.forceHttps, this.SDKConfig.customFlags = e.customFlags || {}, this.SDKConfig.minWebviewBridgeVersion = e.hasOwnProperty("minWebviewBridgeVersion") ? e.minWebviewBridgeVersion : 1, this.SDKConfig.aliasMaxWindow = e.hasOwnProperty("aliasMaxWindow") ? e.aliasMaxWindow : B.DefaultConfig.aliasMaxWindow, e.hasOwnProperty("dataPlanOptions")) {
                        var h = e.dataPlanOptions;
                        h.hasOwnProperty("dataPlanVersion") && h.hasOwnProperty("blockUserAttributes") && h.hasOwnProperty("blockEventAttributes") && h.hasOwnProperty("blockEvents") && h.hasOwnProperty("blockUserIdentities") || t.Logger.error('Ensure your config.dataPlanOptions object has the following keys: a "dataPlanVersion" object, and "blockUserAttributes", "blockEventAttributes", "blockEvents", "blockUserIdentities" booleans')
                    }
                    e.hasOwnProperty("onCreateBatch") && ("function" == typeof e.onCreateBatch ? this.SDKConfig.onCreateBatch = e.onCreateBatch : (t.Logger.error("config.onCreateBatch must be a function"), this.SDKConfig.onCreateBatch = void 0))
                }
                this.hasInvalidIdentifyRequest = function() {
                    var e = n.SDKConfig.identifyRequest;
                    return ei(e) && ei(e.userIdentities) && ev(e.userIdentities) || !e
                }, this.getDeviceId = function() {
                    return n.deviceId
                }, this.setDeviceId = function(e) {
                    n.deviceId = e, n.persistenceData.gs.das = e, t._Persistence.update()
                }, this.getFirstSeenTime = function(e) {
                    return e && n.persistenceData && n.persistenceData[e] && n.persistenceData[e].fst ? n.persistenceData[e].fst : null
                }, this.setFirstSeenTime = function(e, r) {
                    if (e) {
                        var i = r || new Date().getTime();
                        n.persistenceData && (n.persistenceData[e] || (n.persistenceData[e] = {}), n.persistenceData[e].fst || (n.persistenceData[e].fst = i, t._Persistence.savePersistence(n.persistenceData)))
                    }
                }, this.getLastSeenTime = function(e) {
                    if (!e) return null;
                    var r = t.Identity.getCurrentUser();
                    return e === (null == r ? void 0 : r.getMPID()) ? new Date().getTime() : n.persistenceData && n.persistenceData[e] && n.persistenceData[e].lst ? n.persistenceData[e].lst : null
                }, this.setLastSeenTime = function(e, r) {
                    if (e) {
                        var i = r || new Date().getTime();
                        n.persistenceData && (n.persistenceData[e] || (n.persistenceData[e] = {}), n.persistenceData[e].lst || (n.persistenceData[e].lst = i, t._Persistence.savePersistence(n.persistenceData)))
                    }
                }, this.nullifySession = function() {
                    n.sessionId = null, n.dateLastEventSent = null, n.sessionAttributes = {}, t._Persistence.update()
                }, this.processConfig = function(e) {
                    var r = e.workspaceToken,
                        i = e.requiredWebviewBridgeName;
                    n.SDKConfig.flags = eB(e), r ? n.SDKConfig.workspaceToken = r : t.Logger.warning("You should have a workspaceToken on your config object for security purposes."), n.storageName = o(r), n.prodStorageName = s(r), n.SDKConfig.requiredWebviewBridgeName = i || r, n.webviewBridgeEnabled = a(n.SDKConfig.requiredWebviewBridgeName, n.SDKConfig.minWebviewBridgeVersion), n.configurationLoaded = !0
                }
            }

            function eB(e) {
                var t = {},
                    r = B.FeatureFlags,
                    n = r.ReportBatching,
                    i = r.EventBatchingIntervalMillis,
                    o = r.OfflineStorage,
                    s = r.DirectUrlRouting,
                    a = r.CacheIdentity,
                    c = r.AudienceAPI;
                return e.flags ? (t[n] = e.flags[n] || !1, t[i] = eo(e.flags[i]) || B.DefaultConfig.uploadInterval, t[o] = e.flags[o] || "0", t[s] = "True" === e.flags[s], t[a] = "True" === e.flags[a], t[c] = "True" === e.flags[c], t) : {}
            }

            function eW(e) {
                var t = this,
                    r = e.logLevel || "warning";
                this.logger = e.hasOwnProperty("logger") ? e.logger : new ez, this.verbose = function(e) {
                    "none" !== r && t.logger.verbose && "verbose" === r && t.logger.verbose(e)
                }, this.warning = function(e) {
                    "none" !== r && t.logger.warning && ("verbose" === r || "warning" === r) && t.logger.warning(e)
                }, this.error = function(e) {
                    "none" !== r && t.logger.error && t.logger.error(e)
                }, this.setLogLevel = function(e) {
                    r = e
                }
            }

            function ez() {
                this.verbose = function(e) {
                    console && console.info && console.info(e)
                }, this.error = function(e) {
                    console && console.error && console.error(e)
                }, this.warning = function(e) {
                    console && console.warn && console.warn(e)
                }
            }
            var eJ = U.Base64,
                eQ = B.Messages,
                eG = B.Base64CookieKeys,
                eY = B.SDKv2NonMPIDCookieKeys,
                eX = B.StorageNames;

            function e$(e) {
                function t(t) {
                    var r = e._Store;
                    return t.gs.sid = r.sessionId, t.gs.ie = r.isEnabled, t.gs.sa = r.sessionAttributes, t.gs.ss = r.serverSettings, t.gs.dt = r.devToken, t.gs.les = r.dateLastEventSent ? r.dateLastEventSent.getTime() : null, t.gs.av = r.SDKConfig.appVersion, t.gs.cgid = r.clientId, t.gs.das = r.deviceId, t.gs.c = r.context, t.gs.ssd = r.sessionStartDate ? r.sessionStartDate.getTime() : 0, t.gs.ia = r.integrationAttributes, t
                }

                function r(e) {
                    localStorage.removeItem(e)
                }

                function n(e, t, r) {
                    return i.encodePersistence(JSON.stringify(e)) + ";expires=" + t + ";path=/" + r
                }
                var i = this;
                this.useLocalStorage = function() {
                    return !e._Store.SDKConfig.useCookieStorage && e._Store.isLocalStorageAvailable
                }, this.initializeStorage = function() {
                    try {
                        var t, r, n = i.getLocalStorage(),
                            o = i.getCookie();
                        n || o ? e._Store.isFirstRun = !1 : (e._Store.isFirstRun = !0, e._Store.mpid = 0), e._Store.isLocalStorageAvailable || (e._Store.SDKConfig.useCookieStorage = !0), e._Store.isLocalStorageAvailable ? (t = window.localStorage, e._Store.SDKConfig.useCookieStorage ? (n ? (r = o ? e._Helpers.extend(!1, n, o) : n, t.removeItem(e._Store.storageName)) : o && (r = o), i.storeDataInMemory(r)) : o ? (r = n ? e._Helpers.extend(!1, n, o) : o, i.storeDataInMemory(r), i.expireCookies(e._Store.storageName)) : i.storeDataInMemory(n)) : i.storeDataInMemory(o);
                        try {
                            if (e._Store.isLocalStorageAvailable) {
                                var s = localStorage.getItem(e._Store.prodStorageName);
                                if (s) var a = JSON.parse(eJ.decode(s));
                                e._Store.mpid && i.storeProductsInMemory(a, e._Store.mpid)
                            }
                        } catch (t) {
                            e._Store.isLocalStorageAvailable && localStorage.removeItem(e._Store.prodStorageName), e._Store.cartProducts = [], e.Logger.error("Error loading products in initialization: " + t)
                        }
                        for (var c in r) r.hasOwnProperty(c) && (eY[c] || (e._Store.nonCurrentUserMPIDs[c] = r[c]));
                        i.update()
                    } catch (t) {
                        i.useLocalStorage() && e._Store.isLocalStorageAvailable ? localStorage.removeItem(e._Store.storageName) : i.expireCookies(e._Store.storageName), e.Logger.error("Error initializing storage: " + t)
                    }
                }, this.update = function() {
                    e._Store.webviewBridgeEnabled || (e._Store.SDKConfig.useCookieStorage && i.setCookie(), i.setLocalStorage())
                }, this.storeProductsInMemory = function(t, r) {
                    if (t) try {
                        e._Store.cartProducts = t[r] && t[r].cp ? t[r].cp : []
                    } catch (t) {
                        e.Logger.error(eQ.ErrorMessages.CookieParseError)
                    }
                }, this.storeDataInMemory = function(t, r) {
                    try {
                        t ? (e._Store.mpid = r || t.cu || 0, t.gs = t.gs || {}, e._Store.sessionId = t.gs.sid || e._Store.sessionId, e._Store.isEnabled = void 0 === t.gs.ie ? e._Store.isEnabled : t.gs.ie, e._Store.sessionAttributes = t.gs.sa || e._Store.sessionAttributes, e._Store.serverSettings = t.gs.ss || e._Store.serverSettings, e._Store.devToken = e._Store.devToken || t.gs.dt, e._Store.SDKConfig.appVersion = e._Store.SDKConfig.appVersion || t.gs.av, e._Store.clientId = t.gs.cgid || e._Store.clientId || e._Helpers.generateUniqueId(), e._Store.deviceId = e._Store.deviceId || t.gs.das || e._Helpers.generateUniqueId(), e._Store.integrationAttributes = t.gs.ia || {}, e._Store.context = t.gs.c || e._Store.context, e._Store.currentSessionMPIDs = t.gs.csm || e._Store.currentSessionMPIDs, e._Store.isLoggedIn = !0 === t.l, t.gs.les && (e._Store.dateLastEventSent = new Date(t.gs.les)), e._Store.sessionStartDate = t.gs.ssd ? new Date(t.gs.ssd) : new Date, t = r ? t[r] : t[t.cu]) : (e.Logger.verbose(eQ.InformationMessages.CookieNotFound), e._Store.clientId = e._Store.clientId || e._Helpers.generateUniqueId(), e._Store.deviceId = e._Store.deviceId || e._Helpers.generateUniqueId())
                    } catch (t) {
                        e.Logger.error(eQ.ErrorMessages.CookieParseError)
                    }
                }, this.determineLocalStorageAvailability = function(e) {
                    var t;
                    window.mParticle && window.mParticle._forceNoLocalStorage && (e = void 0);
                    try {
                        return e.setItem("mparticle", "test"), t = "test" === e.getItem("mparticle"), e.removeItem("mparticle"), t && e
                    } catch (e) {
                        return !1
                    }
                }, this.getUserProductsFromLS = function(t) {
                    if (!e._Store.isLocalStorageAvailable) return [];
                    var r, n, i = localStorage.getItem(e._Store.prodStorageName);
                    if (i && (r = eJ.decode(i)), !t) return [];
                    try {
                        return r && (n = JSON.parse(r)), r && n[t] && n[t].cp && Array.isArray(n[t].cp) ? n[t].cp : []
                    } catch (e) {
                        return []
                    }
                }, this.getAllUserProductsFromLS = function() {
                    var t, r, n = localStorage.getItem(e._Store.prodStorageName);
                    n && (t = eJ.decode(n));
                    try {
                        r = JSON.parse(t)
                    } catch (e) {
                        r = {}
                    }
                    return r
                }, this.setLocalStorage = function() {
                    if (e._Store.isLocalStorageAvailable) {
                        var r = e._Store.storageName,
                            n = i.getAllUserProductsFromLS(),
                            o = i.getLocalStorage() || {},
                            s = e.Identity.getCurrentUser(),
                            a = s ? s.getMPID() : null,
                            c = {
                                cp: n[a] ? n[a].cp : []
                            };
                        if (a) {
                            (n = n || {})[a] = c;
                            try {
                                window.localStorage.setItem(encodeURIComponent(e._Store.prodStorageName), eJ.encode(JSON.stringify(n)))
                            } catch (t) {
                                e.Logger.error("Error with setting products on localStorage.")
                            }
                        }
                        if (!e._Store.SDKConfig.useCookieStorage) {
                            o.gs = o.gs || {}, o.l = e._Store.isLoggedIn ? 1 : 0, e._Store.sessionId && (o.gs.csm = e._Store.currentSessionMPIDs), o.gs.ie = e._Store.isEnabled, a && (o.cu = a), Object.keys(e._Store.nonCurrentUserMPIDs).length && (o = e._Helpers.extend({}, o, e._Store.nonCurrentUserMPIDs), e._Store.nonCurrentUserMPIDs = {}), o = t(o);
                            try {
                                window.localStorage.setItem(encodeURIComponent(r), i.encodePersistence(JSON.stringify(o)))
                            } catch (t) {
                                e.Logger.error("Error with setting localStorage item.")
                            }
                        }
                    }
                }, this.getLocalStorage = function() {
                    if (!e._Store.isLocalStorageAvailable) return null;
                    var t, r = e._Store.storageName,
                        n = i.decodePersistence(window.localStorage.getItem(r)),
                        o = {};
                    if (n)
                        for (t in n = JSON.parse(n)) n.hasOwnProperty(t) && (o[t] = n[t]);
                    return Object.keys(o).length ? o : null
                }, this.expireCookies = function(e) {
                    var t, r, n, o = new Date;
                    r = "" === (n = i.getCookieDomain()) ? "" : ";domain=" + n, o.setTime(o.getTime() - 864e5), t = "; expires=" + o.toUTCString(), document.cookie = e + "=" + t + "; path=/" + r
                }, this.getCookie = function() {
                    var t, r, n, o, s, a = window.document.cookie.split("; "),
                        c = e._Store.storageName,
                        u = c ? void 0 : {};
                    for (e.Logger.verbose(eQ.InformationMessages.CookieSearch), t = 0, r = a.length; t < r; t++) {
                        try {
                            o = (n = a[t].split("=")).shift(), s = n.join("=")
                        } catch (t) {
                            e.Logger.verbose("Unable to parse cookie: " + o + ". Skipping.")
                        }
                        if (c && c === o) {
                            u = e._Helpers.converted(s);
                            break
                        }
                        c || (u[o] = e._Helpers.converted(s))
                    }
                    return u ? (e.Logger.verbose(eQ.InformationMessages.CookieFound), JSON.parse(i.decodePersistence(u))) : null
                }, this.setCookie = function() {
                    var r, n = e.Identity.getCurrentUser();
                    n && (r = n.getMPID());
                    var o, s, a, c = new Date,
                        u = e._Store.storageName,
                        d = i.getCookie() || {},
                        l = new Date(c.getTime() + 24 * e._Store.SDKConfig.cookieExpiration * 36e5).toGMTString();
                    s = "" === (o = i.getCookieDomain()) ? "" : ";domain=" + o, d.gs = d.gs || {}, e._Store.sessionId && (d.gs.csm = e._Store.currentSessionMPIDs), r && (d.cu = r), d.l = e._Store.isLoggedIn ? 1 : 0, d = t(d), Object.keys(e._Store.nonCurrentUserMPIDs).length && (d = e._Helpers.extend({}, d, e._Store.nonCurrentUserMPIDs), e._Store.nonCurrentUserMPIDs = {}), a = i.reduceAndEncodePersistence(d, l, s, e._Store.SDKConfig.maxCookieSize), e.Logger.verbose(eQ.InformationMessages.CookieSet), window.document.cookie = encodeURIComponent(u) + "=" + a
                }, this.reduceAndEncodePersistence = function(t, r, i, o) {
                    var s, a = t.gs.csm ? t.gs.csm : [];
                    if (a.length) {
                        var c = {};
                        for (var u in t) t.hasOwnProperty(u) && (eY[u] || u === t.cu || (c[u] = 1));
                        if (Object.keys(c).length)
                            for (var d in c)(s = n(t, r, i)).length > o && c.hasOwnProperty(d) && -1 === a.indexOf(d) && delete t[d];
                        for (var l, g = 0; g < a.length && (s = n(t, r, i)).length > o; g++) t[l = a[g]] ? (e.Logger.verbose("Size of new encoded cookie is larger than maxCookieSize setting of " + o + ". Removing from cookie the earliest logged in MPID containing: " + JSON.stringify(t[l], 0, 2)), delete t[l]) : e.Logger.error("Unable to save MPID data to cookies because the resulting encoded cookie is larger than the maxCookieSize setting of " + o + ". We recommend using a maxCookieSize of 1500.")
                    } else
                        for (var p in t) t.hasOwnProperty(p) && (s = n(t, r, i)).length > o && !eY[p] && p !== t.cu && delete t[p];
                    return s
                }, this.findPrevCookiesBasedOnUI = function(t) {
                    var r, n = e._Persistence.getPersistence();
                    if (t) {
                        for (var o in t.userIdentities)
                            if (n && Object.keys(n).length) {
                                for (var s in n)
                                    if (n[s].mpid) {
                                        var a = n[s].ui;
                                        for (var c in a)
                                            if (o === c && t.userIdentities[o] === a[c]) {
                                                r = s;
                                                break
                                            }
                                    }
                            }
                    }
                    r && i.storeDataInMemory(n, r)
                }, this.encodePersistence = function(t) {
                    for (var r in (t = JSON.parse(t)).gs) t.gs.hasOwnProperty(r) && (eG[r] ? t.gs[r] && (Array.isArray(t.gs[r]) && t.gs[r].length || e._Helpers.isObject(t.gs[r]) && Object.keys(t.gs[r]).length) ? t.gs[r] = eJ.encode(JSON.stringify(t.gs[r])) : delete t.gs[r] : "ie" === r ? t.gs[r] = t.gs[r] ? 1 : 0 : t.gs[r] || delete t.gs[r]);
                    for (var n in t)
                        if (t.hasOwnProperty(n) && !eY[n])
                            for (r in t[n]) t[n].hasOwnProperty(r) && eG[r] && (e._Helpers.isObject(t[n][r]) && Object.keys(t[n][r]).length ? t[n][r] = eJ.encode(JSON.stringify(t[n][r])) : delete t[n][r]);
                    return JSON.stringify(t).replace(/\"/g, "'").replace(/,/g, "|")
                }, this.decodePersistence = function(t) {
                    try {
                        if (t) {
                            if (t = JSON.parse(t.replace(/\'/g, '"').replace(/\|/g, ",")), e._Helpers.isObject(t) && Object.keys(t).length) {
                                for (var r in t.gs) t.gs.hasOwnProperty(r) && (eG[r] ? t.gs[r] = JSON.parse(eJ.decode(t.gs[r])) : "ie" === r && (t.gs[r] = !!t.gs[r]));
                                for (var n in t)
                                    if (t.hasOwnProperty(n)) {
                                        if (eY[n]) "l" === n && (t[n] = !!t[n]);
                                        else
                                            for (r in t[n]) t[n].hasOwnProperty(r) && eG[r] && t[n][r].length && (t[n][r] = JSON.parse(eJ.decode(t[n][r])))
                                    }
                            }
                            return JSON.stringify(t)
                        }
                    } catch (t) {
                        e.Logger.error("Problem with decoding cookie", t)
                    }
                }, this.getCookieDomain = function() {
                    if (e._Store.SDKConfig.cookieDomain) return e._Store.SDKConfig.cookieDomain;
                    var t = i.getDomain(document, location.hostname);
                    return "" === t ? "" : "." + t
                }, this.getDomain = function(e, t) {
                    var r, n, i = t.split(".");
                    for (r = i.length - 1; 0 <= r; r--)
                        if (n = i.slice(r).join("."), e.cookie = "mptest=cookie;domain=." + n + ";", -1 < e.cookie.indexOf("mptest=cookie")) return e.cookie = "mptest=;domain=." + n + ";expires=Thu, 01 Jan 1970 00:00:01 GMT;", n;
                    return ""
                }, this.getUserIdentities = function(e) {
                    var t = i.getPersistence();
                    return t && t[e] && t[e].ui ? t[e].ui : {}
                }, this.getAllUserAttributes = function(e) {
                    var t = i.getPersistence();
                    return t && t[e] && t[e].ua ? t[e].ua : {}
                }, this.getCartProducts = function(t) {
                    var r, n = localStorage.getItem(e._Store.prodStorageName);
                    return n && (r = JSON.parse(eJ.decode(n))) && r[t] && r[t].cp ? r[t].cp : []
                }, this.setCartProducts = function(t) {
                    if (e._Store.isLocalStorageAvailable) try {
                        window.localStorage.setItem(encodeURIComponent(e._Store.prodStorageName), eJ.encode(JSON.stringify(t)))
                    } catch (t) {
                        e.Logger.error("Error with setting products on localStorage.")
                    }
                }, this.saveUserIdentitiesToPersistence = function(e, t) {
                    if (t) {
                        var r = i.getPersistence();
                        r && (r[e] ? r[e].ui = t : r[e] = {
                            ui: t
                        }, i.savePersistence(r))
                    }
                }, this.saveUserAttributesToPersistence = function(e, t) {
                    var r = i.getPersistence();
                    t && (r && (r[e] ? r[e].ui = t : r[e] = {
                        ui: t
                    }), i.savePersistence(r))
                }, this.saveUserCookieSyncDatesToPersistence = function(e, t) {
                    if (t) {
                        var r = i.getPersistence();
                        r && (r[e] ? r[e].csd = t : r[e] = {
                            csd: t
                        }), i.savePersistence(r)
                    }
                }, this.saveUserConsentStateToCookies = function(t, r) {
                    if (r || null === r) {
                        var n = i.getPersistence();
                        n && (n[t] ? n[t].con = e._Consent.ConsentSerialization.toMinifiedJsonObject(r) : n[t] = {
                            con: e._Consent.ConsentSerialization.toMinifiedJsonObject(r)
                        }, i.savePersistence(n))
                    }
                }, this.savePersistence = function(t) {
                    var r, n = i.encodePersistence(JSON.stringify(t)),
                        o = new Date,
                        s = e._Store.storageName,
                        a = new Date(o.getTime() + 24 * e._Store.SDKConfig.cookieExpiration * 36e5).toGMTString(),
                        c = i.getCookieDomain();
                    if (r = "" === c ? "" : ";domain=" + c, e._Store.SDKConfig.useCookieStorage) {
                        var u = i.reduceAndEncodePersistence(t, a, r, e._Store.SDKConfig.maxCookieSize);
                        window.document.cookie = encodeURIComponent(s) + "=" + u
                    } else e._Store.isLocalStorageAvailable && localStorage.setItem(e._Store.storageName, n)
                }, this.getPersistence = function() {
                    return this.useLocalStorage() ? this.getLocalStorage() : this.getCookie()
                }, this.getConsentState = function(t) {
                    var r = i.getPersistence();
                    return r && r[t] && r[t].con ? e._Consent.ConsentSerialization.fromMinifiedJsonObject(r[t].con) : null
                }, this.getFirstSeenTime = function(e) {
                    if (!e) return null;
                    var t = i.getPersistence();
                    return t && t[e] && t[e].fst ? t[e].fst : null
                }, this.setFirstSeenTime = function(e, t) {
                    if (e) {
                        t || (t = new Date().getTime());
                        var r = i.getPersistence();
                        r && (r[e] || (r[e] = {}), r[e].fst || (r[e].fst = t, i.savePersistence(r)))
                    }
                }, this.getLastSeenTime = function(t) {
                    if (!t) return null;
                    if (t === e.Identity.getCurrentUser().getMPID()) return new Date().getTime();
                    var r = i.getPersistence();
                    return r && r[t] && r[t].lst ? r[t].lst : null
                }, this.setLastSeenTime = function(e, t) {
                    if (e) {
                        t || (t = new Date().getTime());
                        var r = i.getPersistence();
                        r && r[e] && (r[e].lst = t, i.savePersistence(r))
                    }
                }, this.getDeviceId = function() {
                    return e._Store.deviceId
                }, this.setDeviceId = function(t) {
                    e._Store.deviceId = t, i.update()
                }, this.resetPersistence = function() {
                    r(eX.localStorageName), r(eX.localStorageNameV3), r(eX.localStorageNameV4), r(e._Store.prodStorageName), r(e._Store.storageName), r(eX.localStorageProductsV4), i.expireCookies(eX.cookieName), i.expireCookies(eX.cookieNameV2), i.expireCookies(eX.cookieNameV3), i.expireCookies(eX.cookieNameV4), i.expireCookies(e._Store.prodStorageName), i.expireCookies(e._Store.storageName), mParticle._isTestEnv && (r(e._Helpers.createMainStorageName("abcdef")), i.expireCookies(e._Helpers.createMainStorageName("abcdef")), r(e._Helpers.createProductStorageName("abcdef")))
                }, this.forwardingStatsBatches = {
                    uploadsTable: {},
                    forwardingStatsEventQueue: []
                }
            }
            var eZ = B.Messages;

            function e0(e) {
                var t = this;
                this.logEvent = function(t, r) {
                    if (e.Logger.verbose(eZ.InformationMessages.StartingLogEvent + ": " + t.name), e._Helpers.canLog()) {
                        var n = e._ServerModel.createEventObject(t);
                        e._APIClient.sendEventToServer(n, r)
                    } else e.Logger.verbose(eZ.InformationMessages.AbandonLogEvent)
                }, this.startTracking = function(t) {
                    function r(t, r) {
                        if (t) try {
                            r ? t(r) : t()
                        } catch (t) {
                            e.Logger.error("Error invoking the callback passed to startTrackingLocation."), e.Logger.error(t)
                        }
                    }
                    if (e._Store.isTracking) {
                        var n = {
                            coords: {
                                latitude: e._Store.currentPosition.lat,
                                longitude: e._Store.currentPosition.lng
                            }
                        };
                        r(t, n)
                    } else "geolocation" in navigator && (e._Store.watchPositionId = navigator.geolocation.watchPosition(function(n) {
                        e._Store.currentPosition = {
                            lat: n.coords.latitude,
                            lng: n.coords.longitude
                        }, r(t, n), t = null, e._Store.isTracking = !0
                    }, function() {
                        r(t), t = null, e._Store.isTracking = !1
                    }))
                }, this.stopTracking = function() {
                    e._Store.isTracking && (navigator.geolocation.clearWatch(e._Store.watchPositionId), e._Store.currentPosition = null, e._Store.isTracking = !1)
                }, this.logOptOut = function() {
                    e.Logger.verbose(eZ.InformationMessages.StartingLogOptOut);
                    var t = e._ServerModel.createEventObject({
                        messageType: j.MessageType.OptOut,
                        eventType: j.EventType.Other
                    });
                    e._APIClient.sendEventToServer(t)
                }, this.logAST = function() {
                    t.logEvent({
                        messageType: j.MessageType.AppStateTransition
                    })
                }, this.logCheckoutEvent = function(r, n, i, o) {
                    var s = e._Ecommerce.createCommerceEventObject(o);
                    s && (s.EventName += e._Ecommerce.getProductActionEventName(j.ProductActionType.Checkout), s.EventCategory = j.CommerceEventType.ProductCheckout, s.ProductAction = {
                        ProductActionType: j.ProductActionType.Checkout,
                        CheckoutStep: r,
                        CheckoutOptions: n,
                        ProductList: []
                    }, t.logCommerceEvent(s, i))
                }, this.logProductActionEvent = function(r, n, i, o, s, a) {
                    var c = e._Ecommerce.createCommerceEventObject(o),
                        u = Array.isArray(n) ? n : [n];
                    u.forEach(function(t) {
                        t.TotalAmount && (t.TotalAmount = e._Ecommerce.sanitizeAmount(t.TotalAmount, "TotalAmount")), t.Position && (t.Position = e._Ecommerce.sanitizeAmount(t.Position, "Position")), t.Price && (t.Price = e._Ecommerce.sanitizeAmount(t.Price, "Price")), t.Quantity && (t.Quantity = e._Ecommerce.sanitizeAmount(t.Quantity, "Quantity"))
                    }), c && (c.EventCategory = e._Ecommerce.convertProductActionToEventType(r), c.EventName += e._Ecommerce.getProductActionEventName(r), c.ProductAction = {
                        ProductActionType: r,
                        ProductList: u
                    }, e._Helpers.isObject(s) && e._Ecommerce.convertTransactionAttributesToProductAction(s, c.ProductAction), t.logCommerceEvent(c, i, a))
                }, this.logPurchaseEvent = function(r, n, i, o) {
                    var s = e._Ecommerce.createCommerceEventObject(o);
                    s && (s.EventName += e._Ecommerce.getProductActionEventName(j.ProductActionType.Purchase), s.EventCategory = j.CommerceEventType.ProductPurchase, s.ProductAction = {
                        ProductActionType: j.ProductActionType.Purchase
                    }, s.ProductAction.ProductList = e._Ecommerce.buildProductList(s, n), e._Ecommerce.convertTransactionAttributesToProductAction(r, s.ProductAction), t.logCommerceEvent(s, i))
                }, this.logRefundEvent = function(r, n, i, o) {
                    if (!r) return void e.Logger.error(eZ.ErrorMessages.TransactionRequired);
                    var s = e._Ecommerce.createCommerceEventObject(o);
                    s && (s.EventName += e._Ecommerce.getProductActionEventName(j.ProductActionType.Refund), s.EventCategory = j.CommerceEventType.ProductRefund, s.ProductAction = {
                        ProductActionType: j.ProductActionType.Refund
                    }, s.ProductAction.ProductList = e._Ecommerce.buildProductList(s, n), e._Ecommerce.convertTransactionAttributesToProductAction(r, s.ProductAction), t.logCommerceEvent(s, i))
                }, this.logPromotionEvent = function(r, n, i, o, s) {
                    var a = e._Ecommerce.createCommerceEventObject(o);
                    a && (a.EventName += e._Ecommerce.getPromotionActionEventName(r), a.EventCategory = e._Ecommerce.convertPromotionActionToEventType(r), a.PromotionAction = {
                        PromotionActionType: r,
                        PromotionList: Array.isArray(n) ? n : [n]
                    }, t.logCommerceEvent(a, i, s))
                }, this.logImpressionEvent = function(r, n, i, o) {
                    var s = e._Ecommerce.createCommerceEventObject(i);
                    s && (s.EventName += "Impression", s.EventCategory = j.CommerceEventType.ProductImpression, Array.isArray(r) || (r = [r]), s.ProductImpressions = [], r.forEach(function(e) {
                        s.ProductImpressions.push({
                            ProductImpressionList: e.Name,
                            ProductList: Array.isArray(e.Product) ? e.Product : [e.Product]
                        })
                    }), t.logCommerceEvent(s, n, o))
                }, this.logCommerceEvent = function(t, r, n) {
                    return e.Logger.verbose(eZ.InformationMessages.StartingLogCommerceEvent), t.ProductAction && null === t.EventCategory ? void e.Logger.error("Commerce event not sent.  The mParticle.ProductActionType you passed was invalid. Re-check your code.") : void(r = e._Helpers.sanitizeAttributes(r, t.EventName), e._Helpers.canLog() ? (e._Store.webviewBridgeEnabled && (t.ShoppingCart = {}), r && (t.EventAttributes = r), e._APIClient.sendEventToServer(t, n), e._Persistence.update()) : e.Logger.verbose(eZ.InformationMessages.AbandonLogEvent))
                }, this.addEventHandler = function(r, n, i, o, s) {
                    var a, c, u = [],
                        d = function(r) {
                            e.Logger.verbose("DOM event triggered, handling event"), t.logEvent({
                                messageType: j.MessageType.PageEvent,
                                name: "function" == typeof i ? i(a) : i,
                                data: "function" == typeof o ? o(a) : o,
                                eventType: s || j.EventType.Other
                            }), (a.href && "_blank" !== a.target || a.submit) && (r.preventDefault ? r.preventDefault() : r.returnValue = !1, setTimeout(function() {
                                a.href ? window.location.href = a.href : a.submit && a.submit()
                            }, e._Store.SDKConfig.timeout))
                        };
                    if (!n) return void e.Logger.error("Can't bind event, selector is required");
                    if ("string" == typeof n ? u = document.querySelectorAll(n) : n.nodeType && (u = [n]), u.length)
                        for (e.Logger.verbose("Found " + u.length + " element" + (1 < u.length ? "s" : "") + ", attaching event handlers"), c = 0; c < u.length; c++)(a = u[c]).addEventListener ? a.addEventListener(r, d, !1) : a.attachEvent ? a.attachEvent("on" + r, d) : a["on" + r] = d;
                    else e.Logger.verbose("No elements found")
                }
            }

            function e1(e, t, r, n) {
                var i = this;
                return {
                    getUserIdentities: function() {
                        var i = {},
                            o = r._Persistence.getUserIdentities(e);
                        for (var s in o)
                            if (o.hasOwnProperty(s)) {
                                var a = j.IdentityType.getIdentityName(r._Helpers.parseNumber(s));
                                n && (!n || n.isIdentityBlocked(a)) || (i[a] = o[s])
                            }
                        return {
                            userIdentities: i = r._Helpers.filterUserIdentitiesForForwarders(i, t.userIdentityFilters)
                        }
                    },
                    getMPID: function() {
                        return e
                    },
                    getUserAttributesLists: function(e) {
                        var t, o = {};
                        for (var s in t = i.getAllUserAttributes()) t.hasOwnProperty(s) && Array.isArray(t[s]) && (n && (!n || n.isAttributeKeyBlocked(s)) || (o[s] = t[s].slice()));
                        return r._Helpers.filterUserAttributes(o, e.userAttributeFilters)
                    },
                    getAllUserAttributes: function() {
                        var i = {},
                            o = r._Persistence.getAllUserAttributes(e);
                        if (o)
                            for (var s in o) o.hasOwnProperty(s) && (n && (!n || n.isAttributeKeyBlocked(s)) || (Array.isArray(o[s]) ? i[s] = o[s].slice() : i[s] = o[s]));
                        return r._Helpers.filterUserAttributes(i, t.userAttributeFilters)
                    }
                }
            }
            var e2 = B.IdentityMethods,
                e4 = e2.Modify,
                e3 = e2.Identify,
                e6 = e2.Login,
                e5 = e2.Logout;

            function e8(e, t) {
                var r = this,
                    n = {
                        setUserAttribute: "setUserAttribute",
                        removeUserAttribute: "removeUserAttribute"
                    };
                this.initForwarders = function(t, n) {
                    var i = e.Identity.getCurrentUser();
                    !e._Store.webviewBridgeEnabled && e._Store.configuredForwarders && (e._Store.configuredForwarders.sort(function(e, t) {
                        return e.settings.PriorityValue = e.settings.PriorityValue || 0, t.settings.PriorityValue = t.settings.PriorityValue || 0, -1 * (e.settings.PriorityValue - t.settings.PriorityValue)
                    }), e._Store.activeForwarders = e._Store.configuredForwarders.filter(function(o) {
                        if (!e._Consent.isEnabledForUserConsent(o.filteringConsentRuleValues, i) || !r.isEnabledForUserAttributes(o.filteringUserAttributeValue, i) || !r.isEnabledForUnknownUser(o.excludeAnonymousUser, i)) return !1;
                        var s = e._Helpers.filterUserIdentities(t, o.userIdentityFilters),
                            a = e._Helpers.filterUserAttributes(i ? i.getAllUserAttributes() : {}, o.userAttributeFilters);
                        return o.initialized || (o.logger = e.Logger, o.init(o.settings, n, !1, null, a, s, e._Store.SDKConfig.appVersion, e._Store.SDKConfig.appName, e._Store.SDKConfig.customFlags, e._Store.clientId), o.initialized = !0), !0
                    }))
                }, this.isEnabledForUserAttributes = function(t, r) {
                    if (!t || !e._Helpers.isObject(t) || !Object.keys(t).length) return !0;
                    if (!r) return !1;
                    o = r.getAllUserAttributes();
                    var n, i, o, s = !1;
                    try {
                        if (o && e._Helpers.isObject(o) && Object.keys(o).length) {
                            for (var a in o)
                                if (o.hasOwnProperty(a) && (n = eD.hashAttributeConditionalForwarding(a), i = eD.hashAttributeConditionalForwarding(o[a]), n === t.userAttributeName && i === t.userAttributeValue)) {
                                    s = !0;
                                    break
                                }
                        }
                        return !t || t.includeOnMatch === s
                    } catch (e) {
                        return !0
                    }
                }, this.isEnabledForUnknownUser = function(e, t) {
                    return !!(t && t.isLoggedIn() || !e)
                }, this.applyToForwarders = function(t, r) {
                    e._Store.activeForwarders.length && e._Store.activeForwarders.forEach(function(n) {
                        if (n[t]) try {
                            var i = n[t](r);
                            i && e.Logger.verbose(i)
                        } catch (t) {
                            e.Logger.verbose(t)
                        }
                    })
                }, this.sendEventToForwarders = function(t) {
                    var r, n, i, o = function(t, r) {
                            t.UserIdentities && t.UserIdentities.length && t.UserIdentities.forEach(function(n, i) {
                                e._Helpers.inArray(r, eD.hashUserIdentity(n.Type)) && (t.UserIdentities.splice(i, 1), 0 < i && i--)
                            })
                        },
                        s = function(t, r) {
                            var n;
                            if (r)
                                for (var i in t.EventAttributes) t.EventAttributes.hasOwnProperty(i) && (n = eD.hashEventAttributeKey(t.EventCategory, t.EventName, i), e._Helpers.inArray(r, n) && delete t.EventAttributes[i])
                        },
                        a = function(t, r) {
                            return !!(t && t.length && e._Helpers.inArray(t, r))
                        },
                        c = [j.MessageType.PageEvent, j.MessageType.PageView, j.MessageType.Commerce];
                    if (!e._Store.webviewBridgeEnabled && e._Store.activeForwarders) {
                        n = eD.hashEventName(t.EventName, t.EventCategory), i = eD.hashEventType(t.EventCategory);
                        for (var u = 0; u < e._Store.activeForwarders.length; u++) {
                            if (-1 < c.indexOf(t.EventDataType) && e._Store.activeForwarders[u].filteringEventAttributeValue && e._Store.activeForwarders[u].filteringEventAttributeValue.eventAttributeName && e._Store.activeForwarders[u].filteringEventAttributeValue.eventAttributeValue) {
                                var d, l = null;
                                if (t.EventAttributes) {
                                    for (var g in t.EventAttributes)
                                        if ((d = eD.hashAttributeConditionalForwarding(g)) === e._Store.activeForwarders[u].filteringEventAttributeValue.eventAttributeName && (l = {
                                                name: d,
                                                value: eD.hashAttributeConditionalForwarding(t.EventAttributes[g])
                                            }), l) break
                                }
                                var p = null !== l && l.value === e._Store.activeForwarders[u].filteringEventAttributeValue.eventAttributeValue;
                                if (!(!0 === e._Store.activeForwarders[u].filteringEventAttributeValue.includeOnMatch ? p : !p)) continue
                            }
                            if (r = {}, r = e._Helpers.extend(!0, r, t), !(t.EventDataType === j.MessageType.PageEvent && (a(e._Store.activeForwarders[u].eventNameFilters, n) || a(e._Store.activeForwarders[u].eventTypeFilters, i)))) {
                                if (t.EventDataType === j.MessageType.Commerce && a(e._Store.activeForwarders[u].eventTypeFilters, i) || t.EventDataType === j.MessageType.PageView && a(e._Store.activeForwarders[u].screenNameFilters, n)) continue;
                                if (r.EventAttributes && (t.EventDataType === j.MessageType.PageEvent ? s(r, e._Store.activeForwarders[u].attributeFilters) : t.EventDataType === j.MessageType.PageView && s(r, e._Store.activeForwarders[u].screenAttributeFilters)), o(r, e._Store.activeForwarders[u].userIdentityFilters), r.UserAttributes = e._Helpers.filterUserAttributes(r.UserAttributes, e._Store.activeForwarders[u].userAttributeFilters), e._Store.activeForwarders[u].process) {
                                    e.Logger.verbose("Sending message to forwarder: " + e._Store.activeForwarders[u].name);
                                    var v = e._Store.activeForwarders[u].process(r);
                                    v && e.Logger.verbose(v)
                                }
                            }
                        }
                    }
                }, this.handleForwarderUserAttributes = function(r, i, o) {
                    t && t.isAttributeKeyBlocked(i) || !e._Store.activeForwarders.length || e._Store.activeForwarders.forEach(function(t) {
                        var s;
                        if (t[r] && !e._Helpers.isFilteredUserAttribute(i, t.userAttributeFilters)) try {
                            r === n.setUserAttribute ? s = t.setUserAttribute(i, o) : r === n.removeUserAttribute && (s = t.removeUserAttribute(i)), s && e.Logger.verbose(s)
                        } catch (t) {
                            e.Logger.error(t)
                        }
                    })
                }, this.setForwarderUserIdentities = function(t) {
                    e._Store.activeForwarders.forEach(function(r) {
                        var n = e._Helpers.filterUserIdentities(t, r.userIdentityFilters);
                        r.setUserIdentity && n.forEach(function(t) {
                            var n = r.setUserIdentity(t.Identity, t.Type);
                            n && e.Logger.verbose(n)
                        })
                    })
                }, this.setForwarderOnUserIdentified = function(r) {
                    e._Store.activeForwarders.forEach(function(n) {
                        var i = e1(r.getMPID(), n, e, t);
                        if (n.onUserIdentified) {
                            var o = n.onUserIdentified(i);
                            o && e.Logger.verbose(o)
                        }
                    })
                }, this.setForwarderOnIdentityComplete = function(r, n) {
                    var i;
                    e._Store.activeForwarders.forEach(function(o) {
                        var s = e1(r.getMPID(), o, e, t),
                            a = s.getUserIdentities();
                        n === e3 ? o.onIdentifyComplete && (i = o.onIdentifyComplete(s, a)) && e.Logger.verbose(i) : n === e6 ? o.onLoginComplete && (i = o.onLoginComplete(s, a)) && e.Logger.verbose(i) : n === e5 ? o.onLogoutComplete && (i = o.onLogoutComplete(s, a)) && e.Logger.verbose(i) : n === e4 && o.onModifyComplete && (i = o.onModifyComplete(s, a)) && e.Logger.verbose(i)
                    })
                }, this.getForwarderStatsQueue = function() {
                    return e._Persistence.forwardingStatsBatches.forwardingStatsEventQueue
                }, this.setForwarderStatsQueue = function(t) {
                    e._Persistence.forwardingStatsBatches.forwardingStatsEventQueue = t
                }, this.processForwarders = function(t, n) {
                    t ? (this.processUIEnabledKits(t), this.processSideloadedKits(t), r.initForwarders(e._Store.SDKConfig.identifyRequest.userIdentities, n)) : e.Logger.warning("No config was passed. Cannot process forwarders")
                }, this.processUIEnabledKits = function(t) {
                    var n = this.returnKitConstructors();
                    try {
                        Array.isArray(t.kitConfigs) && t.kitConfigs.length && t.kitConfigs.forEach(function(e) {
                            r.configureUIEnabledKit(e, n)
                        })
                    } catch (t) {
                        e.Logger.error("MP Kits not configured propertly. Kits may not be initialized. " + t)
                    }
                }, this.returnKitConstructors = function() {
                    var t = {};
                    return ev(e._Store.SDKConfig.kits) ? ev(e._preInit.forwarderConstructors) || e._preInit.forwarderConstructors.forEach(function(e) {
                        e.suffix ? t["".concat(e.name, "-").concat(e.suffix)] = e : t[e.name] = e
                    }) : t = e._Store.SDKConfig.kits, t
                }, this.configureUIEnabledKit = function(t, r) {
                    var n = null;
                    for (var i in r) {
                        var o = void 0;
                        if (t.suffix && (o = "".concat(t.name, "-").concat(t.suffix)), (i === o || i === t.name) && (t.isDebug === e._Store.SDKConfig.isDevelopmentMode || t.isSandbox === e._Store.SDKConfig.isDevelopmentMode)) {
                            n = this.returnConfiguredKit(r[i], t), e._Store.configuredForwarders.push(n);
                            break
                        }
                    }
                }, this.processSideloadedKits = function(t) {
                    try {
                        if (Array.isArray(t.sideloadedKits)) {
                            var n = {
                                    kits: {}
                                },
                                i = t.sideloadedKits;
                            for (var o in i.forEach(function(e) {
                                    try {
                                        e.kitInstance.register(n);
                                        var t = e.kitInstance.name;
                                        n.kits[t].filters = e.filterDictionary
                                    } catch (t) {
                                        console.error("Error registering sideloaded kit " + e.kitInstance.name)
                                    }
                                }), n.kits) {
                                var s = n.kits[o];
                                r.configureSideloadedKit(s)
                            }
                            if (!ev(n.kits)) {
                                var a = Object.keys(n.kits);
                                e._Store.sideloadedKitsCount = a.length
                            }
                        }
                    } catch (t) {
                        e.Logger.error("Sideloaded Kits not configured propertly. Kits may not be initialized. " + t)
                    }
                }, this.configureSideloadedKit = function(t) {
                    e._Store.configuredForwarders.push(this.returnConfiguredKit(t, t.filters))
                }, this.returnConfiguredKit = function(e) {
                    var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                        r = new e.constructor;
                    return r.id = t.moduleId, r.isSandbox = t.isDebug || t.isSandbox, r.hasSandbox = "true" === t.hasDebugString, r.isVisible = t.isVisible || !0, r.settings = t.settings || {}, r.eventNameFilters = t.eventNameFilters || [], r.eventTypeFilters = t.eventTypeFilters || [], r.attributeFilters = t.attributeFilters || [], r.screenNameFilters = t.screenNameFilters || [], r.screenAttributeFilters = t.screenAttributeFilters || [], r.userIdentityFilters = t.userIdentityFilters || [], r.userAttributeFilters = t.userAttributeFilters || [], r.filteringEventAttributeValue = t.filteringEventAttributeValue || {}, r.filteringUserAttributeValue = t.filteringUserAttributeValue || {}, r.eventSubscriptionId = t.eventSubscriptionId || null, r.filteringConsentRuleValues = t.filteringConsentRuleValues || {}, r.excludeAnonymousUser = t.excludeAnonymousUser || !1, r
                }, this.configurePixel = function(t) {
                    (t.isDebug === e._Store.SDKConfig.isDevelopmentMode || t.isProduction !== e._Store.SDKConfig.isDevelopmentMode) && e._Store.pixelConfigurations.push(t)
                }, this.processPixelConfigs = function(t) {
                    try {
                        ev(t.pixelConfigs) || t.pixelConfigs.forEach(function(e) {
                            r.configurePixel(e)
                        })
                    } catch (t) {
                        e.Logger.error("Cookie Sync configs not configured propertly. Cookie Sync may not be initialized. " + t)
                    }
                }
            }
            var e7 = j.MessageType,
                e9 = j.ApplicationTransitionType;

            function te(e) {
                return e ? e.map(function(e) {
                    return {
                        id: es(e.Sku),
                        nm: es(e.Name),
                        pr: eo(e.Price),
                        qt: eo(e.Quantity),
                        br: es(e.Brand),
                        va: es(e.Variant),
                        ca: es(e.Category),
                        ps: eo(e.Position),
                        cc: es(e.CouponCode),
                        tpa: eo(e.TotalAmount),
                        attrs: e.Attributes
                    }
                }) : []
            }

            function tt(e) {
                var t = this;
                this.appendUserInfo = function(t, r) {
                    if (r) {
                        if (!t) return r.MPID = null, r.ConsentState = null, r.UserAttributes = null, void(r.UserIdentities = null);
                        if (!(r.MPID && r.MPID === t.getMPID())) {
                            r.MPID = t.getMPID(), r.ConsentState = t.getConsentState(), r.UserAttributes = t.getAllUserAttributes();
                            var n = t.getUserIdentities().userIdentities,
                                i = {};
                            for (var o in n) {
                                var s = j.IdentityType.getIdentityType(o);
                                !1 !== s && (i[s] = n[o])
                            }
                            var a = [];
                            if (e._Helpers.isObject(i) && Object.keys(i).length)
                                for (var c in i) {
                                    var u = {};
                                    u.Identity = i[c], u.Type = e._Helpers.parseNumber(c), a.push(u)
                                }
                            r.UserIdentities = a
                        }
                    }
                }, this.convertToConsentStateV2DTO = function(e) {
                    if (!e) return null;
                    var t = {},
                        r = e.getGDPRConsentState();
                    if (r) {
                        var n = {};
                        for (var i in t.gdpr = n, r)
                            if (r.hasOwnProperty(i)) {
                                var o = r[i];
                                t.gdpr[i] = {}, "boolean" == typeof o.Consented && (n[i].c = o.Consented), "number" == typeof o.Timestamp && (n[i].ts = o.Timestamp), "string" == typeof o.ConsentDocument && (n[i].d = o.ConsentDocument), "string" == typeof o.Location && (n[i].l = o.Location), "string" == typeof o.HardwareId && (n[i].h = o.HardwareId)
                            }
                    }
                    var s = e.getCCPAConsentState();
                    return s && (t.ccpa = {
                        data_sale_opt_out: {
                            c: s.Consented,
                            ts: s.Timestamp,
                            d: s.ConsentDocument,
                            l: s.Location,
                            h: s.HardwareId
                        }
                    }), t
                }, this.createEventObject = function(r, n) {
                    var i = {},
                        o = {},
                        s = r.messageType === j.MessageType.OptOut ? !e._Store.isEnabled : null;
                    if (e._Store.sessionId || r.messageType === j.MessageType.OptOut || e._Store.webviewBridgeEnabled) {
                        o = r.hasOwnProperty("toEventAPIObject") ? r.toEventAPIObject() : {
                            EventName: r.name || r.messageType,
                            EventCategory: r.eventType,
                            EventAttributes: e._Helpers.sanitizeAttributes(r.data, r.name),
                            SourceMessageId: r.sourceMessageId || e._Helpers.generateUniqueId(),
                            EventDataType: r.messageType,
                            CustomFlags: r.customFlags || {},
                            UserAttributeChanges: r.userAttributeChanges,
                            UserIdentityChanges: r.userIdentityChanges
                        }, r.messageType !== j.MessageType.SessionEnd && (e._Store.dateLastEventSent = new Date), i = {
                            Store: e._Store.serverSettings,
                            SDKVersion: B.sdkVersion,
                            SessionId: e._Store.sessionId,
                            SessionStartDate: e._Store.sessionStartDate ? e._Store.sessionStartDate.getTime() : 0,
                            Debug: e._Store.SDKConfig.isDevelopmentMode,
                            Location: e._Store.currentPosition,
                            OptOut: s,
                            ExpandedEventCount: 0,
                            AppVersion: e.getAppVersion(),
                            AppName: e.getAppName(),
                            Package: e._Store.SDKConfig.package,
                            ClientGeneratedId: e._Store.clientId,
                            DeviceId: e._Store.deviceId,
                            IntegrationAttributes: e._Store.integrationAttributes,
                            CurrencyCode: e._Store.currencyCode,
                            DataPlan: e._Store.SDKConfig.dataPlan ? e._Store.SDKConfig.dataPlan : {}
                        }, o.EventDataType === e7.AppStateTransition && (o.IsFirstRun = e._Store.isFirstRun, o.LaunchReferral = window.location.href || null), o.CurrencyCode = e._Store.currencyCode;
                        var a = n || e.Identity.getCurrentUser();
                        return t.appendUserInfo(a, o), r.messageType === j.MessageType.SessionEnd && (o.SessionLength = e._Store.dateLastEventSent.getTime() - e._Store.sessionStartDate.getTime(), o.currentSessionMPIDs = e._Store.currentSessionMPIDs, o.EventAttributes = e._Store.sessionAttributes, e._Store.currentSessionMPIDs = [], e._Store.sessionStartDate = null), i.Timestamp = e._Store.dateLastEventSent.getTime(), e._Helpers.extend({}, o, i)
                    }
                    return null
                }, this.convertEventToV2DTO = function(r) {
                    var n = {
                        n: r.EventName,
                        et: r.EventCategory,
                        ua: r.UserAttributes,
                        ui: r.UserIdentities,
                        ia: r.IntegrationAttributes,
                        str: r.Store,
                        attrs: r.EventAttributes,
                        sdk: r.SDKVersion,
                        sid: r.SessionId,
                        sl: r.SessionLength,
                        ssd: r.SessionStartDate,
                        dt: r.EventDataType,
                        dbg: r.Debug,
                        ct: r.Timestamp,
                        lc: r.Location,
                        o: r.OptOut,
                        eec: r.ExpandedEventCount,
                        av: r.AppVersion,
                        cgid: r.ClientGeneratedId,
                        das: r.DeviceId,
                        mpid: r.MPID,
                        smpids: r.currentSessionMPIDs
                    };
                    r.DataPlan && r.DataPlan.PlanId && (n.dp_id = r.DataPlan.PlanId, r.DataPlan.PlanVersion && (n.dp_v = r.DataPlan.PlanVersion));
                    var i = t.convertToConsentStateV2DTO(r.ConsentState);
                    return i && (n.con = i), r.EventDataType === e7.AppStateTransition && (n.fr = r.IsFirstRun, n.iu = !1, n.at = e9.AppInit, n.lr = r.LaunchReferral, n.attrs = null), r.CustomFlags && function(e, t) {
                        var r = [];
                        for (var n in t.flags = {}, e.CustomFlags) r = [], e.CustomFlags.hasOwnProperty(n) && (Array.isArray(e.CustomFlags[n]) ? e.CustomFlags[n].forEach(function(e) {
                            eg(e) && r.push(e.toString())
                        }) : eg(e.CustomFlags[n]) && r.push(e.CustomFlags[n].toString()), r.length && (t.flags[n] = r))
                    }(r, n), r.EventDataType === e7.Commerce ? (n.cu = r.CurrencyCode, r.ShoppingCart && (n.sc = {
                        pl: te(r.ShoppingCart.ProductList)
                    }), r.ProductAction ? n.pd = {
                        an: r.ProductAction.ProductActionType,
                        cs: e._Helpers.parseNumber(r.ProductAction.CheckoutStep),
                        co: r.ProductAction.CheckoutOptions,
                        pl: te(r.ProductAction.ProductList),
                        ti: r.ProductAction.TransactionId,
                        ta: r.ProductAction.Affiliation,
                        tcc: r.ProductAction.CouponCode,
                        tr: e._Helpers.parseNumber(r.ProductAction.TotalAmount),
                        ts: e._Helpers.parseNumber(r.ProductAction.ShippingAmount),
                        tt: e._Helpers.parseNumber(r.ProductAction.TaxAmount)
                    } : r.PromotionAction ? n.pm = {
                        an: r.PromotionAction.PromotionActionType,
                        pl: r.PromotionAction.PromotionList.map(function(e) {
                            return {
                                id: e.Id,
                                nm: e.Name,
                                cr: e.Creative,
                                ps: e.Position ? e.Position : 0
                            }
                        })
                    } : r.ProductImpressions && (n.pi = r.ProductImpressions.map(function(e) {
                        return {
                            pil: e.ProductImpressionList,
                            pl: te(e.ProductList)
                        }
                    }))) : r.EventDataType === e7.Profile && (n.pet = r.ProfileMessageType), n
                }
            }

            function tr(e) {
                this.startForwardingStatsTimer = function() {
                    mParticle._forwardingStatsTimer = setInterval(function() {
                        ! function() {
                            var t = e._Forwarders.getForwarderStatsQueue(),
                                r = e._Persistence.forwardingStatsBatches.uploadsTable,
                                n = Date.now();
                            for (var i in t.length && (r[n] = {
                                    uploading: !1,
                                    data: t
                                }, e._Forwarders.setForwarderStatsQueue([])), r) ! function(t) {
                                if (r.hasOwnProperty(t) && !1 === r[t].uploading) {
                                    var n = function() {
                                            4 === i.readyState && (200 === i.status || 202 === i.status ? (e.Logger.verbose("Successfully sent  " + i.statusText + " from server"), delete r[t]) : "4" === i.status.toString()[0] ? 429 !== i.status && delete r[t] : r[t].uploading = !1)
                                        },
                                        i = e._Helpers.createXHR(n),
                                        o = r[t].data;
                                    r[t].uploading = !0, e._APIClient.sendBatchForwardingStatsToServer(o, i)
                                }
                            }(i)
                        }()
                    }, e._Store.SDKConfig.forwarderStatsTimeout)
                }
            }
            var tn = B.IdentityMethods,
                ti = tn.Identify,
                to = tn.Modify,
                ts = tn.Login,
                ta = tn.Logout,
                tc = function(e, t, r, n, i) {
                    if (!i) {
                        var o = new Date().getTime(),
                            s = o + 864e5;
                        n.getAllResponseHeaders().includes("x-mp-max-age") && (s = o + 1e3 * eo(n.getResponseHeader("x-mp-max-age"))), e === ts || e === ti ? tu(e, t, s, r, n) : (e === to || e === ta) && r.purge()
                    }
                },
                tu = function(e, t, r, n, i) {
                    var o = n.retrieve() || {},
                        s = et(td(e, t)),
                        a = JSON.parse(i.responseText),
                        c = a.mpid,
                        u = a.is_logged_in;
                    o[s] = {
                        responseText: JSON.stringify({
                            mpid: c,
                            is_logged_in: u
                        }),
                        status: i.status,
                        expireTimestamp: r
                    }, n.store(o)
                },
                td = function(e, t) {
                    var r = "".concat(e, ":").concat("device_application_stamp", "=").concat(t.device_application_stamp, ";"),
                        n = Object.keys(t).length,
                        i = "";
                    if (n) {
                        var o = [];
                        for (var s in t)
                            if ("device_application_stamp" === s) continue;
                            else o[j.IdentityType.getIdentityType(s)] = t[s];
                        i = o.reduce(function(e, t, r) {
                            var n = j.IdentityType.getIdentityName(r);
                            return "".concat(e).concat(n, "=").concat(t, ";")
                        }, r)
                    }
                    return i
                },
                tl = function(e, t, r) {
                    var n = null == r ? void 0 : r.retrieve();
                    if (!n) return !1;
                    var i = et(td(e, t));
                    return !!n.hasOwnProperty(i) && !(n[i].expireTimestamp < new Date().getTime())
                },
                tg = function(e, t, r) {
                    var n = et(td(e, t)),
                        i = r.retrieve();
                    return i ? i[n] : null
                },
                tp = function(e, t) {
                    var r = {};
                    if (ei(null == e ? void 0 : e.userIdentities))
                        for (var n in e.userIdentities) r[n] = e.userIdentities[n];
                    return r.device_application_stamp = t, r
                },
                tv = function(e) {
                    var t = e.retrieve() || {},
                        r = new Date().getTime();
                    for (var n in t) t[n].expireTimestamp < r && delete t[n];
                    e.store(t)
                },
                tm = function(e, t, r, n, i, o, s) {
                    return !!tl(s, e, t) && (r(tg(s, e, t), n, i, o, s, e, !0), !0)
                },
                tf = function() {
                    function e(e, t, r) {
                        this.url = "", this.logger = r, this.url = "https://".concat(e).concat(t, "/audience"), this.userAudienceAPI = window.fetch ? new eC(this.url) : new eA(this.url)
                    }
                    return e.prototype.sendGetUserAudienceRequest = function(e, t) {
                        return Q(this, void 0, void 0, function() {
                            var r, n, i, o, s, a;
                            return G(this, function(c) {
                                switch (c.label) {
                                    case 0:
                                        this.logger.verbose("Fetching user audiences from server"), r = {
                                            method: "GET",
                                            headers: {
                                                Accept: "*/*"
                                            }
                                        }, n = "".concat(this.url, "?mpid=").concat(e), c.label = 1;
                                    case 1:
                                        return c.trys.push([1, 6, , 7]), [4, this.userAudienceAPI.upload(r, n)];
                                    case 2:
                                        return 200 <= (i = c.sent()).status && 300 > i.status ? (this.logger.verbose("User Audiences successfully received"), [4, i.json()]) : [3, 4];
                                    case 3:
                                        s = {
                                            currentAudienceMemberships: null == (o = c.sent()) ? void 0 : o.audience_memberships
                                        };
                                        try {
                                            t(s)
                                        } catch (e) {
                                            throw Error("Error invoking callback on user audience response.")
                                        }
                                        return [3, 5];
                                    case 4:
                                        if (401 === i.status) throw Error("`HTTP error status ${userAudiencePromise.status} while retrieving User Audiences - please verify your API key.`");
                                        if (403 === i.status) throw Error("`HTTP error status ${userAudiencePromise.status} while retrieving User Audiences - please verify your workspace is enabled for audiences.`");
                                        throw Error("Uncaught HTTP Error ".concat(i.status, "."));
                                    case 5:
                                        return [3, 7];
                                    case 6:
                                        return a = c.sent(), this.logger.error("Error retrieving audiences. ".concat(a)), [3, 7];
                                    case 7:
                                        return [2]
                                }
                            })
                        })
                    }, e
                }(),
                th = B.Messages,
                ty = B.HTTPCodes,
                tS = B.FeatureFlags,
                t_ = th.ErrorMessages,
                tP = B.IdentityMethods,
                tb = tP.Identify,
                tI = tP.Modify,
                tC = tP.Login,
                tA = tP.Logout;

            function tw(e) {
                var t = this;
                this.idCache = null, this.audienceManager = null, this.checkIdentitySwap = function(t, r, n) {
                    if (t && r && t !== r) {
                        var i = e._Persistence.getPersistence();
                        i && (i.cu = r, i.gs.csm = n, e._Persistence.savePersistence(i))
                    }
                }, this.IdentityRequest = {
                    preProcessIdentityRequest: function(t, r, n) {
                        e.Logger.verbose(th.InformationMessages.StartingLogEvent + ": " + n);
                        var i = e._Helpers.Validators.validateIdentities(t, n);
                        if (!i.valid) return e.Logger.error("ERROR: " + i.error), {
                            valid: !1,
                            error: i.error
                        };
                        if (r && !e._Helpers.Validators.isFunction(r)) {
                            var o = "The optional callback must be a function. You tried entering a(n) " + L(r);
                            return e.Logger.error(o), {
                                valid: !1,
                                error: o
                            }
                        }
                        return {
                            valid: !0
                        }
                    },
                    createIdentityRequest: function(t, r, n, i, o, s, a) {
                        return {
                            client_sdk: {
                                platform: r,
                                sdk_vendor: n,
                                sdk_version: i
                            },
                            context: s,
                            environment: e._Store.SDKConfig.isDevelopmentMode ? "development" : "production",
                            request_id: e._Helpers.generateUniqueId(),
                            request_timestamp_ms: new Date().getTime(),
                            previous_mpid: a || null,
                            known_identities: tp(t, o)
                        }
                    },
                    createModifyIdentityRequest: function(t, r, n, i, o, s) {
                        return {
                            client_sdk: {
                                platform: n,
                                sdk_vendor: i,
                                sdk_version: o
                            },
                            context: s,
                            environment: e._Store.SDKConfig.isDevelopmentMode ? "development" : "production",
                            request_id: e._Helpers.generateUniqueId(),
                            request_timestamp_ms: new Date().getTime(),
                            identity_changes: this.createIdentityChanges(t, r)
                        }
                    },
                    createIdentityChanges: function(t, r) {
                        var n, i = [];
                        if (r && e._Helpers.isObject(r) && t && e._Helpers.isObject(t))
                            for (n in r) i.push({
                                old_value: t[n] || null,
                                new_value: r[n],
                                identity_type: n
                            });
                        return i
                    },
                    combineUserIdentities: function(t, r) {
                        var n = {},
                            i = e._Helpers.extend(t, r);
                        for (var o in i) {
                            var s = j.IdentityType.getIdentityType(o);
                            !1 !== s && 0 <= s && (n[j.IdentityType.getIdentityType(o)] = i[o])
                        }
                        return n
                    },
                    createAliasNetworkRequest: function(t) {
                        return {
                            request_id: e._Helpers.generateUniqueId(),
                            request_type: "alias",
                            environment: e._Store.SDKConfig.isDevelopmentMode ? "development" : "production",
                            api_key: e._Store.devToken,
                            data: {
                                destination_mpid: t.destinationMpid,
                                source_mpid: t.sourceMpid,
                                start_unixtime_ms: t.startTime,
                                end_unixtime_ms: t.endTime,
                                scope: t.scope,
                                device_application_stamp: e._Store.deviceId
                            }
                        }
                    },
                    convertAliasToNative: function(e) {
                        return {
                            DestinationMpid: e.destinationMpid,
                            SourceMpid: e.sourceMpid,
                            StartUnixtimeMs: e.startTime,
                            EndUnixtimeMs: e.endTime
                        }
                    },
                    convertToNative: function(e) {
                        var t = [];
                        if (e && e.userIdentities) {
                            for (var r in e.userIdentities) e.userIdentities.hasOwnProperty(r) && t.push({
                                Type: j.IdentityType.getIdentityType(r),
                                Identity: e.userIdentities[r]
                            });
                            return {
                                UserIdentities: t
                            }
                        }
                    }
                }, this.IdentityAPI = {
                    HTTPCodes: ty,
                    identify: function(r, n) {
                        var i, o = e.Identity.getCurrentUser(),
                            s = e._Identity.IdentityRequest.preProcessIdentityRequest(r, n, tb);
                        if (o && (i = o.getMPID()), s.valid) {
                            var a = e._Identity.IdentityRequest.createIdentityRequest(r, B.platform, B.sdkVendor, B.sdkVersion, e._Store.deviceId, e._Store.context, i);
                            if (e._Helpers.getFeatureFlag(B.FeatureFlags.CacheIdentity) && tm(a.known_identities, t.idCache, t.parseIdentityResponse, i, n, r, tb)) return;
                            e._Helpers.canLog() ? e._Store.webviewBridgeEnabled ? (e._NativeSdkHelpers.sendToNative(B.NativeSdkPaths.Identify, JSON.stringify(e._Identity.IdentityRequest.convertToNative(r))), e._Helpers.invokeCallback(n, ty.nativeIdentityRequest, "Identify request sent to native sdk")) : e._IdentityAPIClient.sendIdentityRequest(a, tb, n, r, t.parseIdentityResponse, i, a.known_identities) : (e._Helpers.invokeCallback(n, ty.loggingDisabledOrMissingAPIKey, th.InformationMessages.AbandonLogEvent), e.Logger.verbose(th.InformationMessages.AbandonLogEvent))
                        } else e._Helpers.invokeCallback(n, ty.validationIssue, s.error), e.Logger.verbose(s)
                    },
                    logout: function(r, n) {
                        var i, o = e.Identity.getCurrentUser(),
                            s = e._Identity.IdentityRequest.preProcessIdentityRequest(r, n, tA);
                        if (o && (i = o.getMPID()), s.valid) {
                            var a, c = e._Identity.IdentityRequest.createIdentityRequest(r, B.platform, B.sdkVendor, B.sdkVersion, e._Store.deviceId, e._Store.context, i);
                            e._Helpers.canLog() ? e._Store.webviewBridgeEnabled ? (e._NativeSdkHelpers.sendToNative(B.NativeSdkPaths.Logout, JSON.stringify(e._Identity.IdentityRequest.convertToNative(r))), e._Helpers.invokeCallback(n, ty.nativeIdentityRequest, "Logout request sent to native sdk")) : (e._IdentityAPIClient.sendIdentityRequest(c, tA, n, r, t.parseIdentityResponse, i), (a = e._ServerModel.createEventObject({
                                messageType: j.MessageType.Profile
                            })).ProfileMessageType = j.ProfileMessageType.Logout, e._Store.activeForwarders.length && e._Store.activeForwarders.forEach(function(e) {
                                e.logOut && e.logOut(a)
                            })) : (e._Helpers.invokeCallback(n, ty.loggingDisabledOrMissingAPIKey, th.InformationMessages.AbandonLogEvent), e.Logger.verbose(th.InformationMessages.AbandonLogEvent))
                        } else e._Helpers.invokeCallback(n, ty.validationIssue, s.error), e.Logger.verbose(s)
                    },
                    login: function(r, n) {
                        var i, o = e.Identity.getCurrentUser(),
                            s = e._Identity.IdentityRequest.preProcessIdentityRequest(r, n, tC);
                        if (o && (i = o.getMPID()), s.valid) {
                            var a = e._Identity.IdentityRequest.createIdentityRequest(r, B.platform, B.sdkVendor, B.sdkVersion, e._Store.deviceId, e._Store.context, i);
                            if (e._Helpers.getFeatureFlag(B.FeatureFlags.CacheIdentity) && tm(a.known_identities, t.idCache, t.parseIdentityResponse, i, n, r, tC)) return;
                            e._Helpers.canLog() ? e._Store.webviewBridgeEnabled ? (e._NativeSdkHelpers.sendToNative(B.NativeSdkPaths.Login, JSON.stringify(e._Identity.IdentityRequest.convertToNative(r))), e._Helpers.invokeCallback(n, ty.nativeIdentityRequest, "Login request sent to native sdk")) : e._IdentityAPIClient.sendIdentityRequest(a, tC, n, r, t.parseIdentityResponse, i, a.known_identities) : (e._Helpers.invokeCallback(n, ty.loggingDisabledOrMissingAPIKey, th.InformationMessages.AbandonLogEvent), e.Logger.verbose(th.InformationMessages.AbandonLogEvent))
                        } else e._Helpers.invokeCallback(n, ty.validationIssue, s.error), e.Logger.verbose(s)
                    },
                    modify: function(r, n) {
                        var i, o = e.Identity.getCurrentUser(),
                            s = e._Identity.IdentityRequest.preProcessIdentityRequest(r, n, tI);
                        o && (i = o.getMPID());
                        var a = r && r.userIdentities ? r.userIdentities : {};
                        if (s.valid) {
                            var c = e._Identity.IdentityRequest.createModifyIdentityRequest(o ? o.getUserIdentities().userIdentities : {}, a, B.platform, B.sdkVendor, B.sdkVersion, e._Store.context);
                            e._Helpers.canLog() ? e._Store.webviewBridgeEnabled ? (e._NativeSdkHelpers.sendToNative(B.NativeSdkPaths.Modify, JSON.stringify(e._Identity.IdentityRequest.convertToNative(r))), e._Helpers.invokeCallback(n, ty.nativeIdentityRequest, "Modify request sent to native sdk")) : e._IdentityAPIClient.sendIdentityRequest(c, tI, n, r, t.parseIdentityResponse, i, c.known_identities) : (e._Helpers.invokeCallback(n, ty.loggingDisabledOrMissingAPIKey, th.InformationMessages.AbandonLogEvent), e.Logger.verbose(th.InformationMessages.AbandonLogEvent))
                        } else e._Helpers.invokeCallback(n, ty.validationIssue, s.error), e.Logger.verbose(s)
                    },
                    getCurrentUser: function() {
                        var r;
                        return e._Store ? (r = e._Store.mpid) ? (r = e._Store.mpid.slice(), t.mParticleUser(r, e._Store.isLoggedIn)) : e._Store.webviewBridgeEnabled ? t.mParticleUser() : null : null
                    },
                    getUser: function(r) {
                        var n = e._Persistence.getPersistence();
                        return n && n[r] && !B.SDKv2NonMPIDCookieKeys.hasOwnProperty(r) ? t.mParticleUser(r) : null
                    },
                    getUsers: function() {
                        var r = e._Persistence.getPersistence(),
                            n = [];
                        if (r)
                            for (var i in r) B.SDKv2NonMPIDCookieKeys.hasOwnProperty(i) || n.push(t.mParticleUser(i));
                        return n.sort(function(e, t) {
                            return (e.getLastSeenTime() || 0) > (t.getLastSeenTime() || 0) ? -1 : 1
                        }), n
                    },
                    aliasUsers: function(t, r) {
                        var n;
                        if (t.destinationMpid && t.sourceMpid || (n = th.ValidationMessages.AliasMissingMpid), t.destinationMpid === t.sourceMpid && (n = th.ValidationMessages.AliasNonUniqueMpid), t.startTime && t.endTime || (n = th.ValidationMessages.AliasMissingTime), t.startTime > t.endTime && (n = th.ValidationMessages.AliasStartBeforeEndTime), n) return e.Logger.warning(n), void e._Helpers.invokeAliasCallback(r, ty.validationIssue, n);
                        if (e._Helpers.canLog()) {
                            if (e._Store.webviewBridgeEnabled) e._NativeSdkHelpers.sendToNative(B.NativeSdkPaths.Alias, JSON.stringify(e._Identity.IdentityRequest.convertAliasToNative(t))), e._Helpers.invokeAliasCallback(r, ty.nativeIdentityRequest, "Alias request sent to native sdk");
                            else {
                                e.Logger.verbose(th.InformationMessages.StartingAliasRequest + ": " + t.sourceMpid + " -> " + t.destinationMpid);
                                var i = e._Identity.IdentityRequest.createAliasNetworkRequest(t);
                                e._IdentityAPIClient.sendAliasRequest(i, r)
                            }
                        } else e._Helpers.invokeAliasCallback(r, ty.loggingDisabledOrMissingAPIKey, th.InformationMessages.AbandonAliasUsers), e.Logger.verbose(th.InformationMessages.AbandonAliasUsers)
                    },
                    createAliasRequest: function(t, r) {
                        try {
                            if (!r || !t) return e.Logger.error("'destinationUser' and 'sourceUser' must both be present"), null;
                            var n = t.getFirstSeenTime();
                            n || e.Identity.getUsers().forEach(function(e) {
                                e.getFirstSeenTime() && (!n || e.getFirstSeenTime() < n) && (n = e.getFirstSeenTime())
                            });
                            var i = new Date().getTime() - 24 * e._Store.SDKConfig.aliasMaxWindow * 36e5,
                                o = t.getLastSeenTime() || new Date().getTime();
                            return n < i && (n = i, o < n && e.Logger.warning("Source User has not been seen in the last " + e._Store.SDKConfig.maxAliasWindow + " days, Alias Request will likely fail")), {
                                destinationMpid: r.getMPID(),
                                sourceMpid: t.getMPID(),
                                startTime: n,
                                endTime: o
                            }
                        } catch (t) {
                            return e.Logger.error("There was a problem with creating an alias request: " + t), null
                        }
                    }
                }, this.mParticleUser = function(t, r) {
                    var n = this;
                    return {
                        getUserIdentities: function() {
                            var r = {},
                                n = e._Persistence.getUserIdentities(t);
                            for (var i in n) n.hasOwnProperty(i) && (r[j.IdentityType.getIdentityName(e._Helpers.parseNumber(i))] = n[i]);
                            return {
                                userIdentities: r
                            }
                        },
                        getMPID: function() {
                            return t
                        },
                        setUserTag: function(t) {
                            return e._Helpers.Validators.isValidKeyValue(t) ? void this.setUserAttribute(t, null) : void e.Logger.error(th.ErrorMessages.BadKey)
                        },
                        removeUserTag: function(t) {
                            return e._Helpers.Validators.isValidKeyValue(t) ? void this.removeUserAttribute(t) : void e.Logger.error(th.ErrorMessages.BadKey)
                        },
                        setUserAttribute: function(r, i) {
                            var o, s, a, c;
                            if (e._SessionManager.resetSessionTimer(), e._Helpers.canLog()) {
                                if (!e._Helpers.Validators.isValidAttributeValue(i)) return void e.Logger.error(th.ErrorMessages.BadAttribute);
                                if (!e._Helpers.Validators.isValidKeyValue(r)) return void e.Logger.error(th.ErrorMessages.BadKey);
                                if (e._Store.webviewBridgeEnabled) e._NativeSdkHelpers.sendToNative(B.NativeSdkPaths.SetUserAttribute, JSON.stringify({
                                    key: r,
                                    value: i
                                }));
                                else {
                                    o = e._Persistence.getPersistence(), s = this.getAllUserAttributes();
                                    var u = e._Helpers.findKeyInObject(s, r);
                                    u ? (c = !1, a = s[u], delete s[u]) : c = !0, s[r] = i, o && o[t] && (o[t].ua = s, e._Persistence.savePersistence(o, t)), n.sendUserAttributeChangeEvent(r, i, a, c, !1, this), e._Forwarders.initForwarders(n.IdentityAPI.getCurrentUser().getUserIdentities(), e._APIClient.prepareForwardingStats), e._Forwarders.handleForwarderUserAttributes("setUserAttribute", r, i)
                                }
                            }
                        },
                        setUserAttributes: function(t) {
                            if (e._SessionManager.resetSessionTimer(), e._Helpers.isObject(t)) {
                                if (e._Helpers.canLog())
                                    for (var r in t) t.hasOwnProperty(r) && this.setUserAttribute(r, t[r])
                            } else e.Logger.error("Must pass an object into setUserAttributes. You passed a " + L(t))
                        },
                        removeUserAttribute: function(r) {
                            var i, o;
                            if (e._SessionManager.resetSessionTimer(), !e._Helpers.Validators.isValidKeyValue(r)) return void e.Logger.error(th.ErrorMessages.BadKey);
                            if (e._Store.webviewBridgeEnabled) e._NativeSdkHelpers.sendToNative(B.NativeSdkPaths.RemoveUserAttribute, JSON.stringify({
                                key: r,
                                value: null
                            }));
                            else {
                                i = e._Persistence.getPersistence(), o = this.getAllUserAttributes();
                                var s = e._Helpers.findKeyInObject(o, r);
                                s && (r = s);
                                var a = o[r] ? o[r].toString() : null;
                                delete o[r], i && i[t] && (i[t].ua = o, e._Persistence.savePersistence(i, t)), n.sendUserAttributeChangeEvent(r, null, a, !1, !0, this), e._Forwarders.initForwarders(n.IdentityAPI.getCurrentUser().getUserIdentities(), e._APIClient.prepareForwardingStats), e._Forwarders.handleForwarderUserAttributes("removeUserAttribute", r, null)
                            }
                        },
                        setUserAttributeList: function(r, i) {
                            if (e._SessionManager.resetSessionTimer(), !e._Helpers.Validators.isValidKeyValue(r)) return void e.Logger.error(th.ErrorMessages.BadKey);
                            if (!Array.isArray(i)) return void e.Logger.error("The value you passed in to setUserAttributeList must be an array. You passed in a " + ("undefined" == typeof value ? "undefined" : L(value)));
                            var o, s, a, c, u, d = i.slice();
                            if (e._Store.webviewBridgeEnabled) e._NativeSdkHelpers.sendToNative(B.NativeSdkPaths.SetUserAttributeList, JSON.stringify({
                                key: r,
                                value: d
                            }));
                            else {
                                o = e._Persistence.getPersistence(), s = this.getAllUserAttributes();
                                var l = e._Helpers.findKeyInObject(s, r);
                                if (l ? (c = !1, a = s[l], delete s[l]) : c = !0, s[r] = d, o && o[t] && (o[t].ua = s, e._Persistence.savePersistence(o, t)), a && Array.isArray(a)) {
                                    if (i.length !== a.length) u = !0;
                                    else
                                        for (var g = 0; g < i.length; g++)
                                            if (a[g] !== i[g]) {
                                                u = !0;
                                                break
                                            }
                                } else u = !0;
                                u && n.sendUserAttributeChangeEvent(r, i, a, c, !1, this), e._Forwarders.initForwarders(n.IdentityAPI.getCurrentUser().getUserIdentities(), e._APIClient.prepareForwardingStats), e._Forwarders.handleForwarderUserAttributes("setUserAttribute", r, d)
                            }
                        },
                        removeAllUserAttributes: function() {
                            var t;
                            if (e._SessionManager.resetSessionTimer(), e._Store.webviewBridgeEnabled) e._NativeSdkHelpers.sendToNative(B.NativeSdkPaths.RemoveAllUserAttributes);
                            else if (t = this.getAllUserAttributes(), e._Forwarders.initForwarders(n.IdentityAPI.getCurrentUser().getUserIdentities(), e._APIClient.prepareForwardingStats), t)
                                for (var r in t) t.hasOwnProperty(r) && e._Forwarders.handleForwarderUserAttributes("removeUserAttribute", r, null), this.removeUserAttribute(r)
                        },
                        getUserAttributesLists: function() {
                            var e, t = {};
                            for (var r in e = this.getAllUserAttributes()) e.hasOwnProperty(r) && Array.isArray(e[r]) && (t[r] = e[r].slice());
                            return t
                        },
                        getAllUserAttributes: function() {
                            var r = {},
                                n = e._Persistence.getAllUserAttributes(t);
                            if (n)
                                for (var i in n) n.hasOwnProperty(i) && (r[i] = Array.isArray(n[i]) ? n[i].slice() : n[i]);
                            return r
                        },
                        getCart: function() {
                            return e.Logger.warning("Deprecated function Identity.getCurrentUser().getCart() will be removed in future releases"), n.mParticleUserCart(t)
                        },
                        getConsentState: function() {
                            return e._Persistence.getConsentState(t)
                        },
                        setConsentState: function(r) {
                            e._Persistence.saveUserConsentStateToCookies(t, r), e._Forwarders.initForwarders(this.getUserIdentities().userIdentities, e._APIClient.prepareForwardingStats), e._CookieSyncManager.attemptCookieSync(null, this.getMPID())
                        },
                        isLoggedIn: function() {
                            return r
                        },
                        getLastSeenTime: function() {
                            return e._Persistence.getLastSeenTime(t)
                        },
                        getFirstSeenTime: function() {
                            return e._Persistence.getFirstSeenTime(t)
                        },
                        getUserAudiences: function(r) {
                            return e._Helpers.getFeatureFlag(tS.AudienceAPI) ? void(null === n.audienceManager && (n.audienceManager = new tf(e._Store.SDKConfig.userAudienceUrl, e._Store.devToken, e.Logger, t)), n.audienceManager.sendGetUserAudienceRequest(t, r)) : void e.Logger.error(t_.AudienceAPINotEnabled)
                        }
                    }
                }, this.mParticleUserCart = function(t) {
                    return {
                        add: function(r, n) {
                            var i, o, s;
                            e.Logger.warning("Deprecated function Identity.getCurrentUser().getCart().add() will be removed in future releases"), ((s = Array.isArray(r) ? r.slice() : [r]).forEach(function(t) {
                                t.Attributes = e._Helpers.sanitizeAttributes(t.Attributes)
                            }), e._Store.webviewBridgeEnabled) ? e._NativeSdkHelpers.sendToNative(B.NativeSdkPaths.AddToCart, JSON.stringify(s)) : (e._SessionManager.resetSessionTimer(), o = (o = e._Persistence.getUserProductsFromLS(t)).concat(s), !0 === n && e._Events.logProductActionEvent(j.ProductActionType.AddToCart, s), o.length > e._Store.SDKConfig.maxProducts && (e.Logger.verbose("The cart contains " + o.length + " items. Only " + e._Store.SDKConfig.maxProducts + " can currently be saved in cookies."), o = o.slice(-e._Store.SDKConfig.maxProducts)), (i = e._Persistence.getAllUserProductsFromLS())[t].cp = o, e._Persistence.setCartProducts(i))
                        },
                        remove: function(r, n) {
                            e.Logger.warning("Deprecated function Identity.getCurrentUser().getCart().remove() will be removed in future releases");
                            var i, o, s = -1,
                                a = null;
                            e._Store.webviewBridgeEnabled ? e._NativeSdkHelpers.sendToNative(B.NativeSdkPaths.RemoveFromCart, JSON.stringify(r)) : (e._SessionManager.resetSessionTimer(), (o = e._Persistence.getUserProductsFromLS(t)) && (o.forEach(function(e, t) {
                                e.Sku === r.Sku && (s = t, a = e)
                            }), -1 < s && (o.splice(s, 1), !0 === n && e._Events.logProductActionEvent(j.ProductActionType.RemoveFromCart, a))), (i = e._Persistence.getAllUserProductsFromLS())[t].cp = o, e._Persistence.setCartProducts(i))
                        },
                        clear: function() {
                            var r;
                            e.Logger.warning("Deprecated function Identity.getCurrentUser().getCart().clear() will be removed in future releases"), e._Store.webviewBridgeEnabled ? e._NativeSdkHelpers.sendToNative(B.NativeSdkPaths.ClearCart) : (e._SessionManager.resetSessionTimer(), (r = e._Persistence.getAllUserProductsFromLS()) && r[t] && r[t].cp && (r[t].cp = [], r[t].cp = [], e._Persistence.setCartProducts(r)))
                        },
                        getCartProducts: function() {
                            return e.Logger.warning("Deprecated function Identity.getCurrentUser().getCart().getCartProducts() will be removed in future releases"), e._Persistence.getCartProducts(t)
                        }
                    }
                }, this.parseIdentityResponse = function(r, n, i, o, s, a, c) {
                    var u, d, l, g, p = e.Identity.getUser(n),
                        v = {},
                        m = p ? p.getUserIdentities().userIdentities : {},
                        f = e._Helpers.extend({}, m);
                    e._Store.identityCallInFlight = !1;
                    try {
                        if (e.Logger.verbose('Parsing "' + s + '" identity response from server'), r.responseText && (l = JSON.parse(r.responseText)).hasOwnProperty("is_logged_in") && (e._Store.isLoggedIn = l.is_logged_in), (!p || p.getMPID() && l.mpid && l.mpid !== p.getMPID()) && (e._Store.mpid = l.mpid, p && e._Persistence.setLastSeenTime(n), e._Persistence.getFirstSeenTime(l.mpid) || (d = !0), e._Persistence.setFirstSeenTime(l.mpid)), 200 === r.status) {
                            if (e._Helpers.getFeatureFlag(B.FeatureFlags.CacheIdentity) && tc(s, a, t.idCache, r, c), s === tI) v = e._Identity.IdentityRequest.combineUserIdentities(m, o.userIdentities), e._Persistence.saveUserIdentitiesToPersistence(n, v);
                            else {
                                var h = t.IdentityAPI.getUser(l.mpid),
                                    y = h ? h.getUserIdentities().userIdentities : {},
                                    S = e._Helpers.extend({}, y);
                                e.Logger.verbose("Successfully parsed Identity Response"), s === tb && p && l.mpid === p.getMPID() && e._Persistence.setFirstSeenTime(l.mpid), g = e._Store.currentSessionMPIDs.indexOf(l.mpid), e._Store.sessionId && l.mpid && n !== l.mpid && 0 > g && e._Store.currentSessionMPIDs.push(l.mpid), -1 < g && (e._Store.currentSessionMPIDs = e._Store.currentSessionMPIDs.slice(0, g).concat(e._Store.currentSessionMPIDs.slice(g + 1, e._Store.currentSessionMPIDs.length)), e._Store.currentSessionMPIDs.push(l.mpid)), e._CookieSyncManager.attemptCookieSync(n, l.mpid, d), t.checkIdentitySwap(n, l.mpid, e._Store.currentSessionMPIDs), o && o.userIdentities && Object.keys(o.userIdentities).length && (v = t.IdentityRequest.combineUserIdentities(y, o.userIdentities)), e._Persistence.saveUserIdentitiesToPersistence(l.mpid, v), e._Persistence.update(), e._Persistence.findPrevCookiesBasedOnUI(o), e._Store.context = l.context || e._Store.context
                            }
                            if (u = e.Identity.getCurrentUser(), o && o.onUserAlias && e._Helpers.Validators.isFunction(o.onUserAlias)) try {
                                e.Logger.warning("Deprecated function onUserAlias will be removed in future releases"), o.onUserAlias(p, u)
                            } catch (t) {
                                e.Logger.error("There was an error with your onUserAlias function - " + t)
                            }
                            var _ = e._Persistence.getPersistence();
                            u && (e._Persistence.storeDataInMemory(_, u.getMPID()), p && u.getMPID() === p.getMPID() && p.isLoggedIn() === u.isLoggedIn() || e._Forwarders.initForwarders(u.getUserIdentities().userIdentities, e._APIClient.prepareForwardingStats), e._Forwarders.setForwarderUserIdentities(u.getUserIdentities().userIdentities), e._Forwarders.setForwarderOnIdentityComplete(u, s), e._Forwarders.setForwarderOnUserIdentified(u));
                            var P = {};
                            for (var b in v) P[j.IdentityType.getIdentityName(e._Helpers.parseNumber(b))] = v[b];
                            t.sendUserIdentityChangeEvent(P, s, l.mpid, s === tI ? f : S)
                        }
                        i ? 0 === r.status ? e._Helpers.invokeCallback(i, ty.noHttpCoverage, l || null, u) : e._Helpers.invokeCallback(i, r.status, l || null, u) : l && l.errors && l.errors.length && e.Logger.error("Received HTTP response code of " + r.status + " - " + l.errors[0].message), e._APIClient.processQueuedEvents()
                    } catch (t) {
                        i && e._Helpers.invokeCallback(i, r.status, l || null), e.Logger.error("Error parsing JSON response from Identity server: " + t)
                    }
                }, this.sendUserIdentityChangeEvent = function(r, n, i, o) {
                    var s, a;
                    if (i || n === tI) {
                        for (var c in s = this.IdentityAPI.getUser(i), r)
                            if (o[c] !== r[c]) {
                                var u = !o[c];
                                a = t.createUserIdentityChange(c, r[c], o[c], u, s), e._APIClient.sendEventToServer(a)
                            }
                    }
                }, this.createUserIdentityChange = function(t, r, n, i, o) {
                    return e._ServerModel.createEventObject({
                        messageType: j.MessageType.UserIdentityChange,
                        userIdentityChanges: {
                            New: {
                                IdentityType: t,
                                Identity: r,
                                CreatedThisBatch: i
                            },
                            Old: {
                                IdentityType: t,
                                Identity: n,
                                CreatedThisBatch: !1
                            }
                        },
                        userInMemory: o
                    })
                }, this.sendUserAttributeChangeEvent = function(r, n, i, o, s, a) {
                    var c = t.createUserAttributeChange(r, n, i, o, s, a);
                    c && e._APIClient.sendEventToServer(c)
                }, this.createUserAttributeChange = function(t, r, n, i, o, s) {
                    var a;
                    return void 0 === n && (n = null), r !== n && (a = e._ServerModel.createEventObject({
                        messageType: j.MessageType.UserAttributeChange,
                        userAttributeChanges: {
                            UserAttributeName: t,
                            New: r,
                            Old: n,
                            Deleted: o,
                            IsNewAttribute: i
                        }
                    }, s)), a
                }
            }
            var tE = B.CCPAPurpose;

            function tT(e) {
                var t = this;
                this.isEnabledForUserConsent = function(e, t) {
                    if (!e || !e.values || !e.values.length) return !0;
                    if (!t) return !1;
                    var r = {},
                        n = t.getConsentState();
                    if (n) {
                        var i = n.getGDPRConsentState();
                        if (i)
                            for (var o in i) i.hasOwnProperty(o) && (r[eD.hashConsentPurposeConditionalForwarding("1", o)] = i[o].Consented);
                        var s = n.getCCPAConsentState();
                        s && (r[eD.hashConsentPurposeConditionalForwarding("2", tE)] = s.Consented)
                    }
                    var a = e.values.some(function(e) {
                        var t = e.consentPurpose,
                            n = e.hasConsented;
                        return !!r.hasOwnProperty(t) && r[t] === n
                    });
                    return e.includeOnMatch === a
                }, this.createPrivacyConsent = function(t, r, n, i, o) {
                    return "boolean" == typeof t ? r && isNaN(r) ? (e.Logger.error("Timestamp must be a valid number when constructing a Consent object."), null) : n && "string" != typeof n ? (e.Logger.error("Document must be a valid string when constructing a Consent object."), null) : i && "string" != typeof i ? (e.Logger.error("Location must be a valid string when constructing a Consent object."), null) : o && "string" != typeof o ? (e.Logger.error("Hardware ID must be a valid string when constructing a Consent object."), null) : {
                        Consented: t,
                        Timestamp: r || Date.now(),
                        ConsentDocument: n,
                        Location: i,
                        HardwareId: o
                    } : (e.Logger.error("Consented boolean is required when constructing a Consent object."), null)
                }, this.ConsentSerialization = {
                    toMinifiedJsonObject: function(e) {
                        var t, r = {};
                        if (e) {
                            var n = e.getGDPRConsentState();
                            if (n) {
                                for (var i in r.gdpr = {}, n)
                                    if (n.hasOwnProperty(i)) {
                                        var o = n[i];
                                        r.gdpr[i] = {}, "boolean" == typeof o.Consented && (r.gdpr[i].c = o.Consented), "number" == typeof o.Timestamp && (r.gdpr[i].ts = o.Timestamp), "string" == typeof o.ConsentDocument && (r.gdpr[i].d = o.ConsentDocument), "string" == typeof o.Location && (r.gdpr[i].l = o.Location), "string" == typeof o.HardwareId && (r.gdpr[i].h = o.HardwareId)
                                    }
                            }
                            var s = e.getCCPAConsentState();
                            s && (r.ccpa = ((t = {})[tE] = {}, t), "boolean" == typeof s.Consented && (r.ccpa[tE].c = s.Consented), "number" == typeof s.Timestamp && (r.ccpa[tE].ts = s.Timestamp), "string" == typeof s.ConsentDocument && (r.ccpa[tE].d = s.ConsentDocument), "string" == typeof s.Location && (r.ccpa[tE].l = s.Location), "string" == typeof s.HardwareId && (r.ccpa[tE].h = s.HardwareId))
                        }
                        return r
                    },
                    fromMinifiedJsonObject: function(e) {
                        var r = t.createConsentState();
                        if (e.gdpr) {
                            for (var n in e.gdpr)
                                if (e.gdpr.hasOwnProperty(n)) {
                                    var i = t.createPrivacyConsent(e.gdpr[n].c, e.gdpr[n].ts, e.gdpr[n].d, e.gdpr[n].l, e.gdpr[n].h);
                                    r.addGDPRConsentState(n, i)
                                }
                        }
                        if (e.ccpa && e.ccpa.hasOwnProperty(tE)) {
                            var o = t.createPrivacyConsent(e.ccpa[tE].c, e.ccpa[tE].ts, e.ccpa[tE].d, e.ccpa[tE].l, e.ccpa[tE].h);
                            r.setCCPAConsentState(o)
                        }
                        return r
                    }
                }, this.createConsentState = function(r) {
                    function n(e) {
                        if ("string" != typeof e) return null;
                        var t = e.trim();
                        return t.length ? t.toLowerCase() : null
                    }

                    function i() {
                        return delete s[tE], this
                    }
                    var o = {},
                        s = {};
                    if (r) {
                        var a = t.createConsentState();
                        return a.setGDPRConsentState(r.getGDPRConsentState()), a.setCCPAConsentState(r.getCCPAConsentState()), a
                    }
                    return {
                        setGDPRConsentState: function(e) {
                            if (e) {
                                if (ei(e))
                                    for (var t in o = {}, e) e.hasOwnProperty(t) && this.addGDPRConsentState(t, e[t])
                            } else o = {};
                            return this
                        },
                        addGDPRConsentState: function(r, i) {
                            var s = n(r);
                            if (!s) return e.Logger.error("Purpose must be a string."), this;
                            if (!ei(i)) return e.Logger.error("Invoked with a bad or empty consent object."), this;
                            var a = t.createPrivacyConsent(i.Consented, i.Timestamp, i.ConsentDocument, i.Location, i.HardwareId);
                            return a && (o[s] = a), this
                        },
                        setCCPAConsentState: function(r) {
                            if (!ei(r)) return e.Logger.error("Invoked with a bad or empty CCPA consent object."), this;
                            var n = t.createPrivacyConsent(r.Consented, r.Timestamp, r.ConsentDocument, r.Location, r.HardwareId);
                            return n && (s[tE] = n), this
                        },
                        getCCPAConsentState: function() {
                            return s[tE]
                        },
                        getGDPRConsentState: function() {
                            return Object.assign({}, o)
                        },
                        removeGDPRConsentState: function(e) {
                            var t = n(e);
                            return t && delete o[t], this
                        },
                        removeCCPAState: function() {
                            return e.Logger.warning("removeCCPAState is deprecated and will be removed in a future release; use removeCCPAConsentState instead"), i()
                        },
                        removeCCPAConsentState: i
                    }
                }
            }
            var tk = {
                    ScreenView: "screen_view",
                    CustomEvent: "custom_event",
                    UserAttributes: "user_attributes",
                    UserIdentities: "user_identities",
                    ProductAction: "product_action",
                    PromotionAction: "promotion_action",
                    ProductImpression: "product_impression"
                },
                tD = function() {
                    function e(e, t) {
                        var r, n, i, o, s, a, c, u, d, l, g, p, v, m, f, h = this;
                        if (this.dataPlanMatchLookups = {}, this.blockEvents = !1, this.blockEventAttributes = !1, this.blockUserAttributes = !1, this.blockUserIdentities = !1, this.kitBlockingEnabled = !1, e && !e.document) return void(this.kitBlockingEnabled = !1);
                        this.kitBlockingEnabled = !0, this.mpInstance = t, this.blockEvents = null === (i = null === (n = null === (r = null == e ? void 0 : e.document) || void 0 === r ? void 0 : r.dtpn) || void 0 === n ? void 0 : n.blok) || void 0 === i ? void 0 : i.ev, this.blockEventAttributes = null === (a = null === (s = null === (o = null == e ? void 0 : e.document) || void 0 === o ? void 0 : o.dtpn) || void 0 === s ? void 0 : s.blok) || void 0 === a ? void 0 : a.ea, this.blockUserAttributes = null === (d = null === (u = null === (c = null == e ? void 0 : e.document) || void 0 === c ? void 0 : c.dtpn) || void 0 === u ? void 0 : u.blok) || void 0 === d ? void 0 : d.ua, this.blockUserIdentities = null === (p = null === (g = null === (l = null == e ? void 0 : e.document) || void 0 === l ? void 0 : l.dtpn) || void 0 === g ? void 0 : g.blok) || void 0 === p ? void 0 : p.id;
                        var y = null === (f = null === (m = null === (v = null == e ? void 0 : e.document) || void 0 === v ? void 0 : v.dtpn) || void 0 === m ? void 0 : m.vers) || void 0 === f ? void 0 : f.version_document,
                            S = null == y ? void 0 : y.data_points;
                        if (y) try {
                            0 < (null == S ? void 0 : S.length) && S.forEach(function(e) {
                                return h.addToMatchLookups(e)
                            })
                        } catch (e) {
                            this.mpInstance.Logger.error("There was an issue with the data plan: " + e)
                        }
                    }
                    return e.prototype.addToMatchLookups = function(e) {
                        if (!e.match || !e.validator) return void this.mpInstance.Logger.warning("Data Plan Point is not valid' + ".concat(e));
                        var t, r, n, i = this.generateMatchKey(e.match),
                            o = this.getPlannedProperties(e.match.type, e.validator);
                        this.dataPlanMatchLookups[i] = o, ((null === (t = null == e ? void 0 : e.match) || void 0 === t ? void 0 : t.type) === tk.ProductImpression || (null === (r = null == e ? void 0 : e.match) || void 0 === r ? void 0 : r.type) === tk.ProductAction || (null === (n = null == e ? void 0 : e.match) || void 0 === n ? void 0 : n.type) === tk.PromotionAction) && (i = this.generateProductAttributeMatchKey(e.match), o = this.getProductProperties(e.match.type, e.validator), this.dataPlanMatchLookups[i] = o)
                    }, e.prototype.generateMatchKey = function(e) {
                        var t = e.criteria || "";
                        switch (e.type) {
                            case tk.CustomEvent:
                                return [tk.CustomEvent, t.custom_event_type, t.event_name].join(":");
                            case tk.ScreenView:
                                return [tk.ScreenView, "", t.screen_name].join(":");
                            case tk.ProductAction:
                            case tk.PromotionAction:
                            case tk.ProductImpression:
                                return [e.type, t.action].join(":");
                            case tk.UserIdentities:
                            case tk.UserAttributes:
                                return [e.type].join(":");
                            default:
                                return null
                        }
                    }, e.prototype.generateProductAttributeMatchKey = function(e) {
                        var t = e.criteria || "";
                        switch (e.type) {
                            case tk.ProductAction:
                            case tk.PromotionAction:
                                return [e.type, t.action, "ProductAttributes"].join(":");
                            case tk.ProductImpression:
                                return [e.type, "ProductAttributes"].join(":");
                            default:
                                return null
                        }
                    }, e.prototype.getPlannedProperties = function(e, t) {
                        var r, n, i, o, s, a, c, u, d, l;
                        switch (e) {
                            case tk.CustomEvent:
                            case tk.ScreenView:
                            case tk.ProductAction:
                            case tk.PromotionAction:
                            case tk.ProductImpression:
                                if (d = null === (o = null === (i = null === (n = null === (r = null == t ? void 0 : t.definition) || void 0 === r ? void 0 : r.properties) || void 0 === n ? void 0 : n.data) || void 0 === i ? void 0 : i.properties) || void 0 === o ? void 0 : o.custom_attributes) {
                                    if (!0 === d.additionalProperties || void 0 === d.additionalProperties) return !0;
                                    for (var g = {}, p = 0, v = Object.keys(d.properties); p < v.length; p++) g[v[p]] = !0;
                                    return g
                                }
                                return !1 !== (null === (c = null === (a = null === (s = null == t ? void 0 : t.definition) || void 0 === s ? void 0 : s.properties) || void 0 === a ? void 0 : a.data) || void 0 === c ? void 0 : c.additionalProperties) || {};
                            case tk.UserAttributes:
                            case tk.UserIdentities:
                                if (!0 === (l = null === (u = null == t ? void 0 : t.definition) || void 0 === u ? void 0 : u.additionalProperties) || void 0 === l) return !0;
                                for (var g = {}, m = t.definition.properties, f = 0, h = Object.keys(m); f < h.length; f++) g[h[f]] = !0;
                                return g;
                            default:
                                return null
                        }
                    }, e.prototype.getProductProperties = function(e, t) {
                        var r, n, i, o, s, a, c, u, d, l, g, p, v, m, f, h, y, S, _, P;
                        switch (e) {
                            case tk.ProductImpression:
                                if (!1 === (null == (P = null === (l = null === (d = null === (u = null === (c = null === (a = null === (s = null === (o = null === (i = null === (n = null === (r = null == t ? void 0 : t.definition) || void 0 === r ? void 0 : r.properties) || void 0 === n ? void 0 : n.data) || void 0 === i ? void 0 : i.properties) || void 0 === o ? void 0 : o.product_impressions) || void 0 === s ? void 0 : s.items) || void 0 === a ? void 0 : a.properties) || void 0 === c ? void 0 : c.products) || void 0 === u ? void 0 : u.items) || void 0 === d ? void 0 : d.properties) || void 0 === l ? void 0 : l.custom_attributes) ? void 0 : P.additionalProperties)) {
                                    for (var b = {}, I = 0, C = Object.keys(null == P ? void 0 : P.properties); I < C.length; I++) b[C[I]] = !0;
                                    return b
                                }
                                return !0;
                            case tk.ProductAction:
                            case tk.PromotionAction:
                                if ((P = null === (_ = null === (S = null === (y = null === (h = null === (f = null === (m = null === (v = null === (p = null === (g = null == t ? void 0 : t.definition) || void 0 === g ? void 0 : g.properties) || void 0 === p ? void 0 : p.data) || void 0 === v ? void 0 : v.properties) || void 0 === m ? void 0 : m.product_action) || void 0 === f ? void 0 : f.properties) || void 0 === h ? void 0 : h.products) || void 0 === y ? void 0 : y.items) || void 0 === S ? void 0 : S.properties) || void 0 === _ ? void 0 : _.custom_attributes) && !1 === P.additionalProperties) {
                                    for (var b = {}, A = 0, w = Object.keys(null == P ? void 0 : P.properties); A < w.length; A++) b[w[A]] = !0;
                                    return b
                                }
                                return !0;
                            default:
                                return null
                        }
                    }, e.prototype.getMatchKey = function(e) {
                        switch (e.event_type) {
                            case Y.EventTypeEnum.screenView:
                                return e.data ? ["screen_view", "", e.data.screen_name].join(":") : null;
                            case Y.EventTypeEnum.commerceEvent:
                                var t = [];
                                if (e && e.data) {
                                    var r = e.data,
                                        n = r.product_action,
                                        i = r.product_impressions,
                                        o = r.promotion_action;
                                    n ? (t.push(tk.ProductAction), t.push(n.action)) : o ? (t.push(tk.PromotionAction), t.push(o.action)) : i && t.push(tk.ProductImpression)
                                }
                                return t.join(":");
                            case Y.EventTypeEnum.customEvent:
                                return e.data ? ["custom_event", e.data.custom_event_type, e.data.event_name].join(":") : null;
                            default:
                                return null
                        }
                    }, e.prototype.getProductAttributeMatchKey = function(e) {
                        if (e.event_type === Y.EventTypeEnum.commerceEvent) {
                            var t = [],
                                r = e.data,
                                n = r.product_action,
                                i = r.product_impressions,
                                o = r.promotion_action;
                            return n ? (t.push(tk.ProductAction), t.push(n.action), t.push("ProductAttributes")) : o ? (t.push(tk.PromotionAction), t.push(o.action), t.push("ProductAttributes")) : i && (t.push(tk.ProductImpression), t.push("ProductAttributes")), t.join(":")
                        }
                        return null
                    }, e.prototype.createBlockedEvent = function(e) {
                        try {
                            return e && (e = this.transformEventAndEventAttributes(e)), e && e.EventDataType === j.MessageType.Commerce && (e = this.transformProductAttributes(e)), e && (e = this.transformUserAttributes(e), e = this.transformUserIdentities(e)), e
                        } catch (t) {
                            return e
                        }
                    }, e.prototype.transformEventAndEventAttributes = function(e) {
                        var t = J({}, e),
                            r = ef(t),
                            n = this.getMatchKey(r),
                            i = this.dataPlanMatchLookups[n];
                        if (this.blockEvents && !i) return null;
                        if (this.blockEventAttributes) {
                            if (!0 === i) return t;
                            if (i)
                                for (var o, s = 0, a = Object.keys(t.EventAttributes); s < a.length; s++) i[o = a[s]] || delete t.EventAttributes[o]
                        }
                        return t
                    }, e.prototype.transformProductAttributes = function(e) {
                        function t(e, t) {
                            t.forEach(function(t) {
                                for (var r, n = 0, i = Object.keys(t.Attributes); n < i.length; n++) e[r = i[n]] || delete t.Attributes[r]
                            })
                        }
                        var r, n = J({}, e),
                            i = ef(n),
                            o = this.getProductAttributeMatchKey(i),
                            s = this.dataPlanMatchLookups[o];
                        if (this.blockEvents && !s) return null;
                        if (this.blockEventAttributes) {
                            if (!0 === s) return n;
                            if (s) switch (e.EventCategory) {
                                case j.CommerceEventType.ProductImpression:
                                    n.ProductImpressions.forEach(function(e) {
                                        t(s, null == e ? void 0 : e.ProductList)
                                    });
                                    break;
                                case j.CommerceEventType.ProductPurchase:
                                    t(s, null === (r = n.ProductAction) || void 0 === r ? void 0 : r.ProductList);
                                    break;
                                default:
                                    this.mpInstance.Logger.warning("Product Not Supported ")
                            }
                        }
                        return n
                    }, e.prototype.transformUserAttributes = function(e) {
                        var t = J({}, e);
                        if (this.blockUserAttributes) {
                            var r = this.dataPlanMatchLookups.user_attributes;
                            if (this.mpInstance._Helpers.isObject(r))
                                for (var n, i = 0, o = Object.keys(t.UserAttributes); i < o.length; i++) r[n = o[i]] || delete t.UserAttributes[n]
                        }
                        return t
                    }, e.prototype.isAttributeKeyBlocked = function(e) {
                        if (!this.blockUserAttributes) return !1;
                        if (this.blockUserAttributes) {
                            var t = this.dataPlanMatchLookups.user_attributes;
                            if (!0 === t) return !1;
                            if (!t[e]) return !0
                        }
                        return !1
                    }, e.prototype.isIdentityBlocked = function(e) {
                        if (!this.blockUserIdentities) return !1;
                        if (this.blockUserIdentities) {
                            var t = this.dataPlanMatchLookups.user_identities;
                            if (!0 === t) return !1;
                            if (!t[e]) return !0
                        }
                        return !1
                    }, e.prototype.transformUserIdentities = function(e) {
                        var t, r = this,
                            n = J({}, e);
                        if (this.blockUserIdentities) {
                            var i = this.dataPlanMatchLookups.user_identities;
                            this.mpInstance._Helpers.isObject(i) && (null === (t = null == n ? void 0 : n.UserIdentities) || void 0 === t ? void 0 : t.length) && n.UserIdentities.forEach(function(e, t) {
                                i[j.IdentityType.getIdentityName(r.mpInstance._Helpers.parseNumber(e.Type))] || n.UserIdentities.splice(t, 1)
                            })
                        }
                        return n
                    }, e
                }();

            function tO() {
                this.getSDKConfiguration = function(e, t, r, n) {
                    var i;
                    try {
                        var o = n._Helpers.createXHR(function() {
                            4 === o.readyState && (200 === o.status ? (t = n._Helpers.extend({}, t, JSON.parse(o.responseText)), r(e, t, n), n.Logger.verbose("Successfully received configuration from server")) : (r(e, t, n), n.Logger.verbose("Issue with receiving configuration from server, received HTTP Code of " + o.status)))
                        });
                        i = "https://" + n._Store.SDKConfig.configUrl + e + "/config?env=" + (t.isDevelopmentMode ? "1" : "0");
                        var s = t.dataPlan;
                        s && (s.planId && (i = i + "&plan_id=" + s.planId || ""), s.planVersion && (i = i + "&plan_version=" + s.planVersion || "")), o && (o.open("get", i), o.send(null))
                    } catch (i) {
                        r(e, t, n), n.Logger.error("Error getting forwarder configuration from mParticle servers.")
                    }
                }
            }
            var tU = B.HTTPCodes,
                tL = B.Messages,
                tM = B.IdentityMethods.Modify;

            function tN(e) {
                this.sendAliasRequest = function(t, r) {
                    var n;
                    if (e.Logger.verbose(tL.InformationMessages.SendAliasHttp), n = e._Helpers.createXHR(function() {
                            if (4 === n.readyState) {
                                if (e.Logger.verbose("Received " + n.statusText + " from server"), 200 !== n.status && 202 !== n.status && n.responseText) {
                                    var t = JSON.parse(n.responseText);
                                    if (t.hasOwnProperty("message")) {
                                        var i = t.message;
                                        return void e._Helpers.invokeAliasCallback(r, n.status, i)
                                    }
                                }
                                e._Helpers.invokeAliasCallback(r, n.status)
                            }
                        })) try {
                        n.open("post", e._Helpers.createServiceUrl(e._Store.SDKConfig.aliasUrl, e._Store.devToken) + "/Alias"), n.send(JSON.stringify(t))
                    } catch (t) {
                        e._Helpers.invokeAliasCallback(r, tU.noHttpCoverage, t), e.Logger.error("Error sending alias request to mParticle servers. " + t)
                    }
                }, this.sendIdentityRequest = function(t, r, n, i, o, s, a) {
                    var c, u;
                    if (e.Logger.verbose(tL.InformationMessages.SendIdentityBegin), !t) return void e.Logger.error(tL.ErrorMessages.APIRequestEmpty);
                    if (e.Logger.verbose(tL.InformationMessages.SendIdentityHttp), c = e._Helpers.createXHR(function() {
                            4 === c.readyState && (e.Logger.verbose("Received " + c.statusText + " from server"), o(c, u, n, i, r, a, !1))
                        })) try {
                        e._Store.identityCallInFlight ? e._Helpers.invokeCallback(n, tU.activeIdentityRequest, "There is currently an Identity request processing. Please wait for this to return before requesting again") : (u = s || null, r === tM ? c.open("post", e._Helpers.createServiceUrl(e._Store.SDKConfig.identityUrl) + s + "/" + r) : c.open("post", e._Helpers.createServiceUrl(e._Store.SDKConfig.identityUrl) + r), c.setRequestHeader("Content-Type", "application/json"), c.setRequestHeader("x-mp-key", e._Store.devToken), e._Store.identityCallInFlight = !0, c.send(JSON.stringify(t)))
                    } catch (t) {
                        e._Store.identityCallInFlight = !1, e._Helpers.invokeCallback(n, tU.noHttpCoverage, t), e.Logger.error("Error sending identity request to servers with status code " + c.status + " - " + t)
                    }
                }
            }
            var tF = B.Messages,
                tR = B.HTTPCodes,
                tV = B.FeatureFlags.ReportBatching,
                tH = tF.InformationMessages.StartingInitialization;

            function tK(e) {
                var t = this;
                this._instanceName = e, this._NativeSdkHelpers = new eF(this), this._SessionManager = new eK(this), this._Persistence = new e$(this), this._Helpers = new eU(this), this._Events = new e0(this), this._CookieSyncManager = new eV(this), this._ServerModel = new tt(this), this._Ecommerce = new eq(this), this._ForwardingStatsUploader = new tr(this), this._Consent = new tT(this), this._IdentityAPIClient = new tN(this), this._preInit = {
                    readyQueue: [],
                    integrationDelays: {},
                    forwarderConstructors: []
                }, this.IdentityType = j.IdentityType, this.EventType = j.EventType, this.CommerceEventType = j.CommerceEventType, this.PromotionType = j.PromotionActionType, this.ProductActionType = j.ProductActionType, this._Identity = new tw(this), this.Identity = this._Identity.IdentityAPI, this.generateHash = this._Helpers.generateHash, this.getDeviceId = this._Persistence.getDeviceId, "undefined" != typeof window && window.mParticle && window.mParticle.config && window.mParticle.config.hasOwnProperty("rq") && (this._preInit.readyQueue = window.mParticle.config.rq), this.init = function(e, t) {
                    return t || console.warn("You did not pass a config object to init(). mParticle will not initialize properly"),
                        function(e, t, r) {
                            e.Logger = new eW(r), e._Store = new ej(r, e, t), window.mParticle.Store = e._Store, e.Logger.verbose(tH);
                            try {
                                e._Store.isLocalStorageAvailable = e._Persistence.determineLocalStorageAvailability(window.localStorage)
                            } catch (t) {
                                e.Logger.warning("localStorage is not available, using cookies if available"), e._Store.isLocalStorageAvailable = !1
                            }
                        }(this, e, t), t ? void(!t.hasOwnProperty("requestConfig") || t.requestConfig ? new tO().getSDKConfiguration(e, t, tx, this) : tx(e, t, this)) : void console.error("No config available on the window, please pass a config object to mParticle.init()")
                }, this.setLogLevel = function(e) {
                    t.Logger.setLogLevel(e)
                }, this.reset = function(e) {
                    try {
                        e._Persistence.resetPersistence(), e._Store && delete e._Store
                    } catch (e) {
                        console.error("Cannot reset mParticle", e)
                    }
                }, this._resetForTests = function(e, t, r) {
                    r._Store && delete r._Store, r._Store = new ej(e, r), r._Store.isLocalStorageAvailable = r._Persistence.determineLocalStorageAvailability(window.localStorage), r._Events.stopTracking(), t || r._Persistence.resetPersistence(), r._Persistence.forwardingStatsBatches.uploadsTable = {}, r._Persistence.forwardingStatsBatches.forwardingStatsEventQueue = [], r._preInit = {
                        readyQueue: [],
                        pixelConfigurations: [],
                        integrationDelays: {},
                        forwarderConstructors: [],
                        isDevelopmentMode: !1
                    }
                }, this.ready = function(e) {
                    t.isInitialized() && "function" == typeof e ? e() : t._preInit.readyQueue.push(e)
                }, this.getEnvironment = function() {
                    return t._Store.SDKConfig.isDevelopmentMode ? j.Environment.Development : j.Environment.Production
                }, this.getVersion = function() {
                    return B.sdkVersion
                }, this.setAppVersion = function(e) {
                    tq(function() {
                        t.setAppVersion(e)
                    }, t) || (t._Store.SDKConfig.appVersion = e, t._Persistence.update())
                }, this.setDeviceId = function(e) {
                    tq(function() {
                        t.setDeviceId(e)
                    }, t) || this._Store.setDeviceId(e)
                }, this.isInitialized = function() {
                    return !!t._Store && t._Store.isInitialized
                }, this.getAppName = function() {
                    return t._Store.SDKConfig.appName
                }, this.setAppName = function(e) {
                    tq(function() {
                        t.setAppName(e)
                    }, t) || (t._Store.SDKConfig.appName = e)
                }, this.getAppVersion = function() {
                    return t._Store.SDKConfig.appVersion
                }, this.stopTrackingLocation = function() {
                    t._SessionManager.resetSessionTimer(), t._Events.stopTracking()
                }, this.startTrackingLocation = function(e) {
                    el(e) || t.Logger.warning("Warning: Location tracking is triggered, but not including a callback into the `startTrackingLocation` may result in events logged too quickly and not being associated with a location."), t._SessionManager.resetSessionTimer(), t._Events.startTracking(e)
                }, this.setPosition = function(e, r) {
                    tq(function() {
                        t.setPosition(e, r)
                    }, t) || (t._SessionManager.resetSessionTimer(), "number" == typeof e && "number" == typeof r ? t._Store.currentPosition = {
                        lat: e,
                        lng: r
                    } : t.Logger.error("Position latitude and/or longitude must both be of type number"))
                }, this.startNewSession = function() {
                    t._SessionManager.startNewSession()
                }, this.endSession = function() {
                    t._SessionManager.endSession(!0)
                }, this.logBaseEvent = function(e, r) {
                    if (!tq(function() {
                            t.logBaseEvent(e, r)
                        }, t)) return (t._SessionManager.resetSessionTimer(), "string" != typeof e.name) ? void t.Logger.error(tF.ErrorMessages.EventNameInvalidType) : (e.eventType || (e.eventType = j.EventType.Unknown), t._Helpers.canLog() ? void t._Events.logEvent(e, r) : void t.Logger.error(tF.ErrorMessages.LoggingDisabled))
                }, this.logEvent = function(e, r, n, i, o) {
                    if (!tq(function() {
                            t.logEvent(e, r, n, i, o)
                        }, t)) return (t._SessionManager.resetSessionTimer(), "string" != typeof e) ? void t.Logger.error(tF.ErrorMessages.EventNameInvalidType) : (r || (r = j.EventType.Unknown), t._Helpers.isEventType(r) ? t._Helpers.canLog() ? void t._Events.logEvent({
                        messageType: j.MessageType.PageEvent,
                        name: e,
                        data: n,
                        eventType: r,
                        customFlags: i
                    }, o) : void t.Logger.error(tF.ErrorMessages.LoggingDisabled) : void t.Logger.error("Invalid event type: " + r + ", must be one of: \n" + JSON.stringify(j.EventType)))
                }, this.logError = function(e, r) {
                    if (!tq(function() {
                            t.logError(e, r)
                        }, t) && (t._SessionManager.resetSessionTimer(), e)) {
                        "string" == typeof e && (e = {
                            message: e
                        });
                        var n = {
                            m: e.message ? e.message : e,
                            s: "Error",
                            t: e.stack || null
                        };
                        if (r) {
                            var i = t._Helpers.sanitizeAttributes(r, n.m);
                            for (var o in i) n[o] = i[o]
                        }
                        t._Events.logEvent({
                            messageType: j.MessageType.CrashReport,
                            name: e.name ? e.name : "Error",
                            data: n,
                            eventType: j.EventType.Other
                        })
                    }
                }, this.logLink = function(e, r, n, i) {
                    t._Events.addEventHandler("click", e, r, i, n)
                }, this.logForm = function(e, r, n, i) {
                    t._Events.addEventHandler("submit", e, r, i, n)
                }, this.logPageView = function(e, r, n, i) {
                    if (!tq(function() {
                            t.logPageView(e, r, n, i)
                        }, t)) {
                        if (t._SessionManager.resetSessionTimer(), t._Helpers.canLog()) {
                            if (t._Helpers.Validators.isStringOrNumber(e) || (e = "PageView"), r) {
                                if (!t._Helpers.isObject(r)) return void t.Logger.error("The attributes argument must be an object. A " + L(r) + " was entered. Please correct and retry.")
                            } else r = {
                                hostname: window.location.hostname,
                                title: window.document.title
                            };
                            if (n && !t._Helpers.isObject(n)) return void t.Logger.error("The customFlags argument must be an object. A " + L(n) + " was entered. Please correct and retry.")
                        }
                        t._Events.logEvent({
                            messageType: j.MessageType.PageView,
                            name: e,
                            data: r,
                            eventType: j.EventType.Unknown,
                            customFlags: n
                        }, i)
                    }
                }, this.upload = function() {
                    t._Helpers.canLog() && (t._Store.webviewBridgeEnabled ? t._NativeSdkHelpers.sendToNative(B.NativeSdkPaths.Upload) : t._APIClient.uploader.prepareAndUpload(!1, !1))
                }, this.Consent = {
                    createCCPAConsent: t._Consent.createPrivacyConsent,
                    createGDPRConsent: t._Consent.createPrivacyConsent,
                    createConsentState: t._Consent.createConsentState
                }, this.eCommerce = {
                    Cart: {
                        add: function(e, r) {
                            t.Logger.warning("Deprecated function eCommerce.Cart.add() will be removed in future releases");
                            var n, i = t.Identity.getCurrentUser();
                            i && (n = i.getMPID()), t._Identity.mParticleUserCart(n).add(e, r)
                        },
                        remove: function(e, r) {
                            t.Logger.warning("Deprecated function eCommerce.Cart.remove() will be removed in future releases");
                            var n, i = t.Identity.getCurrentUser();
                            i && (n = i.getMPID()), t._Identity.mParticleUserCart(n).remove(e, r)
                        },
                        clear: function() {
                            t.Logger.warning("Deprecated function eCommerce.Cart.clear() will be removed in future releases");
                            var e, r = t.Identity.getCurrentUser();
                            r && (e = r.getMPID()), t._Identity.mParticleUserCart(e).clear()
                        }
                    },
                    setCurrencyCode: function(e) {
                        return tq(function() {
                            t.eCommerce.setCurrencyCode(e)
                        }, t) ? void 0 : "string" == typeof e ? void(t._SessionManager.resetSessionTimer(), t._Store.currencyCode = e) : void t.Logger.error("Code must be a string")
                    },
                    createProduct: function(e, r, n, i, o, s, a, c, u, d) {
                        return t._Ecommerce.createProduct(e, r, n, i, o, s, a, c, u, d)
                    },
                    createPromotion: function(e, r, n, i) {
                        return t._Ecommerce.createPromotion(e, r, n, i)
                    },
                    createImpression: function(e, r) {
                        return t._Ecommerce.createImpression(e, r)
                    },
                    createTransactionAttributes: function(e, r, n, i, o, s) {
                        return t._Ecommerce.createTransactionAttributes(e, r, n, i, o, s)
                    },
                    logCheckout: function(e, r, n, i) {
                        return t.Logger.warning("mParticle.logCheckout is deprecated, please use mParticle.logProductAction instead"), t._Store.isInitialized ? void(t._SessionManager.resetSessionTimer(), t._Events.logCheckoutEvent(e, r, n, i)) : void t.ready(function() {
                            t.eCommerce.logCheckout(e, r, n, i)
                        })
                    },
                    logProductAction: function(e, r, n, i, o, s) {
                        tq(function() {
                            t.eCommerce.logProductAction(e, r, n, i, o, s)
                        }, t) || (t._SessionManager.resetSessionTimer(), t._Events.logProductActionEvent(e, r, n, i, o, s))
                    },
                    logPurchase: function(e, r, n, i, o) {
                        return t.Logger.warning("mParticle.logPurchase is deprecated, please use mParticle.logProductAction instead"), t._Store.isInitialized ? e && r ? void(t._SessionManager.resetSessionTimer(), t._Events.logPurchaseEvent(e, r, i, o)) : void t.Logger.error(tF.ErrorMessages.BadLogPurchase) : void t.ready(function() {
                            t.eCommerce.logPurchase(e, r, n, i, o)
                        })
                    },
                    logPromotion: function(e, r, n, i, o) {
                        tq(function() {
                            t.eCommerce.logPromotion(e, r, n, i, o)
                        }, t) || (t._SessionManager.resetSessionTimer(), t._Events.logPromotionEvent(e, r, n, i, o))
                    },
                    logImpression: function(e, r, n, i) {
                        tq(function() {
                            t.eCommerce.logImpression(e, r, n, i)
                        }, t) || (t._SessionManager.resetSessionTimer(), t._Events.logImpressionEvent(e, r, n, i))
                    },
                    logRefund: function(e, r, n, i, o) {
                        return t.Logger.warning("mParticle.logRefund is deprecated, please use mParticle.logProductAction instead"), t._Store.isInitialized ? void(t._SessionManager.resetSessionTimer(), t._Events.logRefundEvent(e, r, i, o)) : void t.ready(function() {
                            t.eCommerce.logRefund(e, r, n, i, o)
                        })
                    },
                    expandCommerceEvent: function(e) {
                        return t._Ecommerce.expandCommerceEvent(e)
                    }
                }, this.setSessionAttribute = function(e, r) {
                    if (!tq(function() {
                            t.setSessionAttribute(e, r)
                        }, t) && t._Helpers.canLog()) {
                        if (!t._Helpers.Validators.isValidAttributeValue(r)) return void t.Logger.error(tF.ErrorMessages.BadAttribute);
                        if (!t._Helpers.Validators.isValidKeyValue(e)) return void t.Logger.error(tF.ErrorMessages.BadKey);
                        if (t._Store.webviewBridgeEnabled) t._NativeSdkHelpers.sendToNative(B.NativeSdkPaths.SetSessionAttribute, JSON.stringify({
                            key: e,
                            value: r
                        }));
                        else {
                            var n = t._Helpers.findKeyInObject(t._Store.sessionAttributes, e);
                            n && (e = n), t._Store.sessionAttributes[e] = r, t._Persistence.update(), t._Forwarders.applyToForwarders("setSessionAttribute", [e, r])
                        }
                    }
                }, this.setOptOut = function(e) {
                    tq(function() {
                        t.setOptOut(e)
                    }, t) || (t._SessionManager.resetSessionTimer(), t._Store.isEnabled = !e, t._Events.logOptOut(), t._Persistence.update(), t._Store.activeForwarders.length && t._Store.activeForwarders.forEach(function(r) {
                        if (r.setOptOut) {
                            var n = r.setOptOut(e);
                            n && t.Logger.verbose(n)
                        }
                    }))
                }, this.setIntegrationAttribute = function(e, r) {
                    if (!tq(function() {
                            t.setIntegrationAttribute(e, r)
                        }, t)) {
                        if ("number" != typeof e) return void t.Logger.error("integrationId must be a number");
                        if (null === r) t._Store.integrationAttributes[e] = {};
                        else {
                            if (!t._Helpers.isObject(r)) return void t.Logger.error("Attrs must be an object with keys and values. You entered a " + L(r));
                            if (0 === Object.keys(r).length) t._Store.integrationAttributes[e] = {};
                            else
                                for (var n in r)
                                    if ("string" != typeof n) {
                                        t.Logger.error("Keys must be strings, you entered a " + L(n));
                                        continue
                                    } else if ("string" == typeof r[n]) t._Helpers.isObject(t._Store.integrationAttributes[e]) || (t._Store.integrationAttributes[e] = {}), t._Store.integrationAttributes[e][n] = r[n];
                            else {
                                t.Logger.error("Values for integration attributes must be strings. You entered a " + L(r[n]));
                                continue
                            }
                        }
                        t._Persistence.update()
                    }
                }, this.getIntegrationAttributes = function(e) {
                    return t._Store.integrationAttributes[e] ? t._Store.integrationAttributes[e] : {}
                }, this.addForwarder = function(e) {
                    t._preInit.forwarderConstructors.push(e)
                }, this.configurePixel = function(e) {
                    t._Forwarders.configurePixel(e)
                }, this._getActiveForwarders = function() {
                    return t._Store.activeForwarders
                }, this._getIntegrationDelays = function() {
                    return t._preInit.integrationDelays
                }, this._setIntegrationDelay = function(e, r) {
                    if (t._preInit.integrationDelays[e] = r, !0 !== r) {
                        var n = Object.keys(t._preInit.integrationDelays);
                        0 !== n.length && (n.some(function(e) {
                            return !0 === t._preInit.integrationDelays[e]
                        }) || t._APIClient.processQueuedEvents())
                    }
                }, this._setWrapperSDKInfo = function(e, r) {
                    tq(function() {
                        t._setWrapperSDKInfo(e, r)
                    }, t) || void 0 !== t._Store.wrapperSDKInfo && t._Store.wrapperSDKInfo.isInfoSet || (t._Store.wrapperSDKInfo = {
                        name: e,
                        version: r,
                        isInfoSet: !0
                    })
                }
            }

            function tx(e, t, r) {
                var n = (t.dataPlanOptions && (r.Logger.verbose("Customer provided data plan found"), o = {
                    document: {
                        dtpn: {
                            vers: (a = t.dataPlanOptions).dataPlanVersion,
                            blok: {
                                ev: a.blockEvents,
                                ea: a.blockEventAttributes,
                                ua: a.blockUserAttributes,
                                id: a.blockUserIdentities
                            }
                        }
                    }
                }), o || (t.dataPlan && t.dataPlan.document ? t.dataPlan.document.error_message ? s = t.dataPlan.document.error_message : (r.Logger.verbose("Data plan found from mParticle.js"), o = t.dataPlan) : t.dataPlanResult && (t.dataPlanResult.error_message ? s = t.dataPlanResult.error_message : (r.Logger.verbose("Data plan found from /config"), o = {
                    document: t.dataPlanResult
                }))), s && r.Logger.error(s), o && (i = new tD(o, r)), i);
                if (r._APIClient = new eE(r, n), r._Forwarders = new e8(r, n), r._Store.processConfig(t), r._Identity.idCache = new eP("".concat(r._Store.storageName, "-id-cache"), {
                        logger: r.Logger
                    }), tv(r._Identity.idCache), r._Store.webviewBridgeEnabled) r._NativeSdkHelpers.initializeSessionAttributes(e);
                else {
                    r._Persistence.initializeStorage();
                    var i, o, s, a, c = r.Identity.getCurrentUser(),
                        u = c ? c.getMPID() : null,
                        d = c ? c.getUserIdentities().userIdentities : {};
                    r._Store.SDKConfig.identifyRequest = r._Store.hasInvalidIdentifyRequest() ? {
                        userIdentities: d
                    } : r._Store.SDKConfig.identifyRequest, r._Helpers.getFeatureFlag(tV) && r._ForwardingStatsUploader.startForwardingStatsTimer(), r._Forwarders.processForwarders(t, r._APIClient.prepareForwardingStats), r._Forwarders.processPixelConfigs(t), r._SessionManager.initialize(), r._Events.logAST(), !r._Store.identifyCalled && r._Store.SDKConfig.identityCallback && c && u && r._Store.SDKConfig.identityCallback({
                        httpCode: tR.activeSession,
                        getUser: function() {
                            return r._Identity.mParticleUser(u)
                        },
                        getPreviousUser: function() {
                            var e = r.Identity.getUsers(),
                                t = e.shift(),
                                n = t.getMPID();
                            return t && n === u && (t = e.shift()), t || null
                        },
                        body: {
                            mpid: u,
                            is_logged_in: r._Store.isLoggedIn,
                            matched_identities: d,
                            context: null,
                            is_ephemeral: !1
                        }
                    })
                }
                r._Store.isInitialized = !0;
                try {
                    r._preInit.readyQueue = function(e) {
                        if (!ev(e)) return e.forEach(function(e) {
                            el(e) ? e() : Array.isArray(e) && function(e) {
                                var t = e.splice(0, 1)[0];
                                if (mParticle[e[0]]) mParticle[t].apply(this, e);
                                else {
                                    var r = t.split(".");
                                    try {
                                        for (var n = mParticle, i = 0; i < r.length; i++) n = n[r[i]];
                                        n.apply(this, e)
                                    } catch (e) {
                                        throw Error("Unable to compute proper mParticle function " + e)
                                    }
                                }
                            }(e)
                        }), []
                    }(r._preInit.readyQueue)
                } catch (e) {
                    r.Logger.error(e)
                }
                r._Store.isFirstRun && (r._Store.isFirstRun = !1)
            }

            function tq(e, t) {
                return !t.isInitialized() && (t.ready(function() {
                    e()
                }), !0)
            }
            var tj = function() {
                    return null
                },
                tB = function() {
                    function e() {}
                    return e.prototype.getMPInstance = function() {
                        return {
                            _Helpers: {
                                sanitizeAttributes: window.mParticle.getInstance()._Helpers.sanitizeAttributes,
                                generateHash: function() {
                                    return "mockHash"
                                },
                                generateUniqueId: function() {
                                    return "mockId"
                                },
                                extend: window.mParticle.getInstance()._Helpers.extend,
                                createServiceUrl: tj,
                                parseNumber: tj,
                                isObject: tj,
                                Validators: null
                            },
                            _resetForTests: tj,
                            _APIClient: null,
                            MPSideloadedKit: null,
                            _Consent: null,
                            _Events: null,
                            _Forwarders: null,
                            _NativeSdkHelpers: null,
                            _Persistence: null,
                            _preInit: null,
                            Consent: null,
                            _ServerModel: null,
                            _SessionManager: null,
                            _Store: {
                                sessionId: "mockSessionId",
                                sideloadedKits: [],
                                devToken: "test_dev_token",
                                isFirstRun: !0,
                                isEnabled: !0,
                                sessionAttributes: {},
                                currentSessionMPIDs: [],
                                consentState: null,
                                clientId: null,
                                deviceId: null,
                                serverSettings: {},
                                dateLastEventSent: null,
                                sessionStartDate: null,
                                currentPosition: null,
                                isTracking: !1,
                                watchPositionId: null,
                                cartProducts: [],
                                eventQueue: [],
                                currencyCode: null,
                                globalTimer: null,
                                context: null,
                                configurationLoaded: !1,
                                identityCallInFlight: !1,
                                nonCurrentUserMPIDs: {},
                                identifyCalled: !1,
                                isLoggedIn: !1,
                                cookieSyncDates: {},
                                integrationAttributes: {},
                                requireDelay: !0,
                                isLocalStorageAvailable: null,
                                integrationDelayTimeoutStart: null,
                                storageName: null,
                                prodStorageName: null,
                                activeForwarders: [],
                                kits: {},
                                configuredForwarders: [],
                                pixelConfigurations: [],
                                wrapperSDKInfo: {
                                    name: "none",
                                    version: null,
                                    isInfoSet: !1
                                },
                                SDKConfig: {
                                    isDevelopmentMode: !1,
                                    onCreateBatch: tj
                                }
                            },
                            config: null,
                            eCommerce: null,
                            Identity: {
                                getCurrentUser: tj,
                                IdentityAPI: {},
                                identify: tj,
                                login: tj,
                                logout: tj,
                                modify: tj
                            },
                            Logger: {
                                verbose: tj,
                                error: tj,
                                warning: tj
                            },
                            ProductActionType: null,
                            ServerModel: null,
                            addForwarder: tj,
                            generateHash: tj,
                            getAppVersion: tj,
                            getAppName: tj,
                            getInstance: tj,
                            getDeviceId: tj,
                            init: tj,
                            logBaseEvent: tj,
                            logEvent: tj,
                            logLevel: "none",
                            setPosition: tj,
                            upload: tj
                        }
                    }, e.prototype.createSDKEventFunction = function(e) {
                        return new tt(this.getMPInstance()).createEventObject(e)
                    }, e.prototype.returnBatch = function(e) {
                        var t = this,
                            r = this.getMPInstance();
                        return em("0", Array.isArray(e) ? e.map(function(e) {
                            return t.createSDKEventFunction(e)
                        }) : [this.createSDKEventFunction(e)], r)
                    }, e
                }();
            (b = E || (E = {}))[b.Unknown = 0] = "Unknown", b[b.Navigation = 1] = "Navigation", b[b.Location = 2] = "Location", b[b.Search = 3] = "Search", b[b.Transaction = 4] = "Transaction", b[b.UserContent = 5] = "UserContent", b[b.UserPreference = 6] = "UserPreference", b[b.Social = 7] = "Social", b[b.Other = 8] = "Other", b[b.Media = 9] = "Media", (I = T || (T = {}))[I.SessionStart = 1] = "SessionStart", I[I.SessionEnd = 2] = "SessionEnd", I[I.PageView = 3] = "PageView", I[I.PageEvent = 4] = "PageEvent", I[I.CrashReport = 5] = "CrashReport", I[I.OptOut = 6] = "OptOut", I[I.AppStateTransition = 10] = "AppStateTransition", I[I.Profile = 14] = "Profile", I[I.Commerce = 16] = "Commerce", I[I.UserAttributeChange = 17] = "UserAttributeChange", I[I.UserIdentityChange = 18] = "UserIdentityChange", I[I.Media = 20] = "Media", (C = k || (k = {}))[C.Other = 0] = "Other", C[C.CustomerId = 1] = "CustomerId", C[C.Facebook = 2] = "Facebook", C[C.Twitter = 3] = "Twitter", C[C.Google = 4] = "Google", C[C.Microsoft = 5] = "Microsoft", C[C.Yahoo = 6] = "Yahoo", C[C.Email = 7] = "Email", C[C.FacebookCustomAudienceId = 9] = "FacebookCustomAudienceId", C[C.Other2 = 10] = "Other2", C[C.Other3 = 11] = "Other3", C[C.Other4 = 12] = "Other4", C[C.Other5 = 13] = "Other5", C[C.Other6 = 14] = "Other6", C[C.Other7 = 15] = "Other7", C[C.Other8 = 16] = "Other8", C[C.Other9 = 17] = "Other9", C[C.Other10 = 18] = "Other10", C[C.MobileNumber = 19] = "MobileNumber", C[C.PhoneNumber2 = 20] = "PhoneNumber2", C[C.PhoneNumber3 = 21] = "PhoneNumber3";
            var tW = function() {
                function e(e) {
                    this.filterDictionary = {
                        eventTypeFilters: [],
                        eventNameFilters: [],
                        screenNameFilters: [],
                        screenAttributeFilters: [],
                        userIdentityFilters: [],
                        userAttributeFilters: [],
                        attributeFilters: [],
                        consentRegulationFilters: [],
                        consentRegulationPurposeFilters: [],
                        messageTypeFilters: [],
                        messageTypeStateFilters: [],
                        filteringEventAttributeValue: {},
                        filteringUserAttributeValue: {},
                        filteringConsentRuleValues: {}
                    }, this.kitInstance = e
                }
                return e.prototype.addEventTypeFilter = function(e) {
                    var t = eD.hashEventType(e);
                    this.filterDictionary.eventTypeFilters.push(t)
                }, e.prototype.addEventNameFilter = function(e, t) {
                    var r = eD.hashEventName(t, e);
                    this.filterDictionary.eventNameFilters.push(r)
                }, e.prototype.addEventAttributeFilter = function(e, t, r) {
                    var n = eD.hashEventAttributeKey(e, t, r);
                    this.filterDictionary.attributeFilters.push(n)
                }, e.prototype.addScreenNameFilter = function(e) {
                    var t = eD.hashEventName(e, E.Unknown);
                    this.filterDictionary.screenNameFilters.push(t)
                }, e.prototype.addScreenAttributeFilter = function(e, t) {
                    var r = eD.hashEventAttributeKey(E.Unknown, e, t);
                    this.filterDictionary.screenAttributeFilters.push(r)
                }, e.prototype.addUserIdentityFilter = function(e) {
                    var t = eD.hashUserIdentity(e);
                    this.filterDictionary.userIdentityFilters.push(t)
                }, e.prototype.addUserAttributeFilter = function(e) {
                    var t = eD.hashUserAttribute(e);
                    this.filterDictionary.userAttributeFilters.push(t)
                }, e
            }();
            Array.prototype.forEach || (Array.prototype.forEach = U.forEach), Array.prototype.map || (Array.prototype.map = U.map), Array.prototype.filter || (Array.prototype.filter = U.filter), Array.isArray || (Array.prototype.isArray = U.isArray);
            var tz = new function() {
                var e = this;
                this.Store = {}, this._instances = {}, this.IdentityType = j.IdentityType, this.EventType = j.EventType, this.CommerceEventType = j.CommerceEventType, this.PromotionType = j.PromotionActionType, this.ProductActionType = j.ProductActionType, this.MPSideloadedKit = tW, "undefined" != typeof window && (this.isIOS = !!(window.mParticle && window.mParticle.isIOS) && window.mParticle.isIOS, this.config = window.mParticle && window.mParticle.config ? window.mParticle.config : {}), this.init = function(t, r, n) {
                    !r && window.mParticle && window.mParticle.config && (console.warn("You did not pass a config object to mParticle.init(). Attempting to use the window.mParticle.config if it exists. Please note that in a future release, this may not work and mParticle will not initialize properly"), r = window.mParticle ? window.mParticle.config : {}), n = (n && 0 !== n.length ? n : B.DefaultInstance).toLowerCase();
                    var i = e._instances[n];
                    void 0 === i && (i = new tK(t), e._instances[n] = i), i.init(t, r, n)
                }, this.getInstance = function(t) {
                    var r;
                    return t ? (r = e._instances[t.toLowerCase()]) || (console.log("You tried to initialize an instance named " + t + ". This instance does not exist. Check your instance name or initialize a new instance with this name before calling it."), null) : (t = B.DefaultInstance, (r = e._instances[t]) || (r = new tK(t), e._instances[B.DefaultInstance] = r), r)
                }, this.getDeviceId = function() {
                    return e.getInstance().getDeviceId()
                }, this.setDeviceId = function(t) {
                    return e.getInstance().setDeviceId(t)
                }, this.isInitialized = function() {
                    return e.getInstance().isInitialized()
                }, this.startNewSession = function() {
                    e.getInstance().startNewSession()
                }, this.endSession = function() {
                    e.getInstance().endSession()
                }, this.setLogLevel = function(t) {
                    e.getInstance().setLogLevel(t)
                }, this.ready = function(t) {
                    e.getInstance().ready(t)
                }, this.setAppVersion = function(t) {
                    e.getInstance().setAppVersion(t)
                }, this.getAppName = function() {
                    return e.getInstance().getAppName()
                }, this.setAppName = function(t) {
                    e.getInstance().setAppName(t)
                }, this.getAppVersion = function() {
                    return e.getInstance().getAppVersion()
                }, this.getEnvironment = function() {
                    return e.getInstance().getEnvironment()
                }, this.stopTrackingLocation = function() {
                    e.getInstance().stopTrackingLocation()
                }, this.startTrackingLocation = function(t) {
                    e.getInstance().startTrackingLocation(t)
                }, this.setPosition = function(t, r) {
                    e.getInstance().setPosition(t, r)
                }, this.startNewSession = function() {
                    e.getInstance().startNewSession()
                }, this.endSession = function() {
                    e.getInstance().endSession()
                }, this.logBaseEvent = function(t, r) {
                    e.getInstance().logBaseEvent(t, r)
                }, this.logEvent = function(t, r, n, i, o) {
                    e.getInstance().logEvent(t, r, n, i, o)
                }, this.logError = function(t, r) {
                    e.getInstance().logError(t, r)
                }, this.logLink = function(t, r, n, i) {
                    e.getInstance().logLink(t, r, n, i)
                }, this.logForm = function(t, r, n, i) {
                    e.getInstance().logForm(t, r, n, i)
                }, this.logPageView = function(t, r, n, i) {
                    e.getInstance().logPageView(t, r, n, i)
                }, this.upload = function() {
                    e.getInstance().upload()
                }, this.eCommerce = {
                    Cart: {
                        add: function(t, r) {
                            e.getInstance().eCommerce.Cart.add(t, r)
                        },
                        remove: function(t, r) {
                            e.getInstance().eCommerce.Cart.remove(t, r)
                        },
                        clear: function() {
                            e.getInstance().eCommerce.Cart.clear()
                        }
                    },
                    setCurrencyCode: function(t) {
                        e.getInstance().eCommerce.setCurrencyCode(t)
                    },
                    createProduct: function(t, r, n, i, o, s, a, c, u, d) {
                        return e.getInstance().eCommerce.createProduct(t, r, n, i, o, s, a, c, u, d)
                    },
                    createPromotion: function(t, r, n, i) {
                        return e.getInstance().eCommerce.createPromotion(t, r, n, i)
                    },
                    createImpression: function(t, r) {
                        return e.getInstance().eCommerce.createImpression(t, r)
                    },
                    createTransactionAttributes: function(t, r, n, i, o, s) {
                        return e.getInstance().eCommerce.createTransactionAttributes(t, r, n, i, o, s)
                    },
                    logCheckout: function(t, r, n, i) {
                        e.getInstance().eCommerce.logCheckout(t, r, n, i)
                    },
                    logProductAction: function(t, r, n, i, o, s) {
                        e.getInstance().eCommerce.logProductAction(t, r, n, i, o, s)
                    },
                    logPurchase: function(t, r, n, i, o) {
                        e.getInstance().eCommerce.logPurchase(t, r, n, i, o)
                    },
                    logPromotion: function(t, r, n, i, o) {
                        e.getInstance().eCommerce.logPromotion(t, r, n, i, o)
                    },
                    logImpression: function(t, r, n, i) {
                        e.getInstance().eCommerce.logImpression(t, r, n, i)
                    },
                    logRefund: function(t, r, n, i, o) {
                        e.getInstance().eCommerce.logRefund(t, r, n, i, o)
                    },
                    expandCommerceEvent: function(t) {
                        return e.getInstance().eCommerce.expandCommerceEvent(t)
                    }
                }, this.setSessionAttribute = function(t, r) {
                    e.getInstance().setSessionAttribute(t, r)
                }, this.setOptOut = function(t) {
                    e.getInstance().setOptOut(t)
                }, this.setIntegrationAttribute = function(t, r) {
                    e.getInstance().setIntegrationAttribute(t, r)
                }, this.getIntegrationAttributes = function(t) {
                    return e.getInstance().getIntegrationAttributes(t)
                }, this.Identity = {
                    HTTPCodes: B.HTTPCodes,
                    aliasUsers: function(t, r) {
                        e.getInstance().Identity.aliasUsers(t, r)
                    },
                    createAliasRequest: function(t, r) {
                        return e.getInstance().Identity.createAliasRequest(t, r)
                    },
                    getCurrentUser: function() {
                        return e.getInstance().Identity.getCurrentUser()
                    },
                    getUser: function(t) {
                        return e.getInstance().Identity.getUser(t)
                    },
                    getUsers: function() {
                        return e.getInstance().Identity.getUsers()
                    },
                    identify: function(t, r) {
                        e.getInstance().Identity.identify(t, r)
                    },
                    login: function(t, r) {
                        e.getInstance().Identity.login(t, r)
                    },
                    logout: function(t, r) {
                        e.getInstance().Identity.logout(t, r)
                    },
                    modify: function(t, r) {
                        e.getInstance().Identity.modify(t, r)
                    }
                }, this.sessionManager = {
                    getSession: function() {
                        return e.getInstance()._SessionManager.getSession()
                    }
                }, this.Consent = {
                    createConsentState: function() {
                        return e.getInstance().Consent.createConsentState()
                    },
                    createGDPRConsent: function(t, r, n, i, o) {
                        return e.getInstance().Consent.createGDPRConsent(t, r, n, i, o)
                    },
                    createCCPAConsent: function(t, r, n, i, o) {
                        return e.getInstance().Consent.createGDPRConsent(t, r, n, i, o)
                    }
                }, this.reset = function() {
                    e.getInstance().reset(e.getInstance())
                }, this._resetForTests = function(t, r) {
                    "boolean" == typeof r ? e.getInstance()._resetForTests(t, r, e.getInstance()) : e.getInstance()._resetForTests(t, !1, e.getInstance())
                }, this.configurePixel = function(t) {
                    e.getInstance().configurePixel(t)
                }, this._setIntegrationDelay = function(t, r) {
                    e.getInstance()._setIntegrationDelay(t, r)
                }, this._getIntegrationDelays = function() {
                    return e.getInstance()._getIntegrationDelays()
                }, this.getVersion = function() {
                    return e.getInstance().getVersion()
                }, this.generateHash = function(t) {
                    return e.getInstance().generateHash(t)
                }, this.addForwarder = function(t) {
                    e.getInstance().addForwarder(t)
                }, this._getActiveForwarders = function() {
                    return e.getInstance()._getActiveForwarders()
                }, this._setWrapperSDKInfo = function(t, r) {
                    e.getInstance()._setWrapperSDKInfo(t, r)
                }
            };
            "undefined" != typeof window && (window.mParticle = tz, window.mParticle._BatchValidator = new tB)
        }
    }
]);
//# sourceMappingURL=8a2eb0bf.0c06a0d09a071bc1.js.map