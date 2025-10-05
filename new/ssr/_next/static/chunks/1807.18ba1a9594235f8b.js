"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1807], {
        101807: function(e, t) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = {
                    Denied: "denied",
                    Granted: "granted"
                },
                o = ["ad_storage", "ad_user_data", "ad_personalization", "analytics_storage"];

            function r(e) {
                this.common = e || {}
            }

            function i() {
                this.customDataLayerName = null, this.consentMappings = [], this.consentPayloadDefaults = {}, this.consentPayloadAsString = "", this.consentHandler = new r(this)
            }
            r.prototype.getUserConsentState = function() {
                var e = {};
                if (mParticle.Identity && mParticle.Identity.getCurrentUser) {
                    if (!mParticle.Identity.getCurrentUser()) return {};
                    var t = mParticle.Identity.getCurrentUser().getConsentState();
                    t && t.getGDPRConsentState && (e = t.getGDPRConsentState())
                }
                return e
            }, r.prototype.getEventConsentState = function(e) {
                return e && e.getGDPRConsentState ? e.getGDPRConsentState() : {}
            }, r.prototype.getConsentSettings = function() {
                var e = {},
                    t = {
                        ad_user_data: "defaultAdUserDataConsentWeb",
                        ad_personalization: "defaultAdPersonalizationConsentWeb",
                        ad_storage: "defaultAdStorageConsentWeb",
                        analytics_storage: "defaultAnalyticsStorageConsentWeb"
                    },
                    o = this.common.settings;
                return Object.keys(t).forEach(function(r) {
                    var i = t[r],
                        a = o[i];
                    a && i && (e[r] = n[a])
                }), e
            }, r.prototype.generateConsentStatePayloadFromMappings = function(e, t) {
                if (!t) return {};
                for (var r = this.common.cloneObject(this.common.consentPayloadDefaults), i = 0; i <= t.length - 1; i++) {
                    var a = t[i],
                        s = a.map,
                        c = a.value;
                    e[s] && -1 !== o.indexOf(c) && (r[c] = e[s].Consented ? n.Granted : n.Denied)
                }
                return r
            }, i.prototype.buildMPID = function(e, t) {
                var n = "";
                return e && e.hasOwnProperty("MPID") ? n = e.MPID : t && t.hasOwnProperty("getMPID") && (n = t.getMPID()), n
            }, i.prototype.buildUserAttributes = function(e, t) {
                var n = {};
                return e && e.hasOwnProperty("UserAttributes") ? n = e.UserAttributes : t && t.hasOwnProperty("getAllUserAttributes") && (n = t.getAllUserAttributes()), n
            }, i.prototype.buildUserIdentities = function(e, t) {
                var n = {};
                return e.hasOwnProperty("UserIdentities") ? e.UserIdentities.forEach(function(e) {
                    n[mParticle.IdentityType.getIdentityName(e.Type)] = e.Identity
                }) : t.hasOwnProperty("getUserIdentities") && t.getUserIdentities().userIdentities && (n = t.getUserIdentities().userIdentities), n
            }, i.prototype.buildConsentObject = function(e) {
                var t = {},
                    n = e.ConsentState || mParticle.Identity.getCurrentUser().getConsentState();
                return n && n.getGDPRConsentState && n.getGDPRConsentState() && (t = n.getGDPRConsentState()), {
                    gdpr: t
                }
            }, i.prototype.send = function(e) {
                var t = {},
                    n = {},
                    o = e || {},
                    r = o.event || {},
                    i = o.user || {},
                    a = r.EventName || "Custom Event",
                    s = {
                        mpid: this.buildMPID(r, i),
                        consent_state: this.buildConsentObject(r),
                        attributes: this.buildUserAttributes(r, i),
                        identities: this.buildUserIdentities(r, i)
                    },
                    c = {
                        name: a,
                        type: o.eventType || "custom_event",
                        attributes: r.EventAttributes || {}
                    };
                if (t.event = a, n = {
                        device_application_stamp: r.DeviceId || mParticle.getDeviceId() || "",
                        user: s,
                        event: c
                    }, t.mp_data = n, o.eventPayload)
                    for (var u in o.eventPayload) o.eventPayload.hasOwnProperty(u) && (t[u] = o.eventPayload[u]);
                window[this.customDataLayerName].push(t)
            }, i.prototype.sendConsent = function(e, t) {
                var n = this.customDataLayerName;
                ! function() {
                    window[n].push(arguments)
                }("consent", e, t)
            }, i.prototype.cloneObject = function(e) {
                return JSON.parse(JSON.stringify(e))
            }, i.prototype.isEmpty = function(e) {
                return null == e || !(Object.keys(e) || e).length
            };
            var a = {
                    AddToCart: 10,
                    Click: 14,
                    Checkout: 12,
                    CheckoutOption: 13,
                    Impression: 22,
                    Purchase: 16,
                    Refund: 17,
                    RemoveFromCart: 11,
                    ViewDetail: 15
                },
                s = {
                    PromotionClick: 19,
                    PromotionView: 18
                };

            function c(e) {
                this.common = e || {}
            }

            function u(e) {
                return e.split(/(?=[A-Z])/).join("_").toLowerCase()
            }

            function d(e) {
                var t = [];
                return e.forEach(function(e) {
                    t.push(function(e) {
                        var t = {};
                        for (var n in e) "Sku" === n ? t.id = e.Sku : t[u(n)] = e[n];
                        return t
                    }(e))
                }), t
            }

            function l(e) {
                var t = [];
                return e.forEach(function(e) {
                    t.push(function(e) {
                        var t = {};
                        for (var n in e) t[u(n)] = e[n];
                        return t
                    }(e))
                }), t
            }

            function m(e) {
                this.common = e || {}
            }

            function p(e) {
                this.common = e || {}
            }
            c.prototype.buildAddToCart = function(e) {
                return {
                    event: e,
                    eventType: "commerce_event",
                    eventPayload: {
                        ecommerce: {
                            currencyCode: e.CurrencyCode || "USD",
                            add: {
                                products: d(e.ProductAction.ProductList)
                            }
                        }
                    }
                }
            }, c.prototype.buildCheckout = function(e) {
                return {
                    event: e,
                    eventType: "commerce_event",
                    eventPayload: {
                        ecommerce: {
                            checkout: {
                                actionField: {
                                    step: e.ProductAction.CheckoutStep,
                                    option: e.ProductAction.CheckoutOptions
                                },
                                products: d(e.ProductAction.ProductList)
                            }
                        }
                    }
                }
            }, c.prototype.buildCheckoutOption = function(e) {
                return {
                    event: e,
                    eventType: "commerce_event",
                    eventPayload: {
                        ecommerce: {
                            checkout_option: {
                                actionField: {
                                    step: e.ProductAction.CheckoutStep,
                                    option: e.ProductAction.CheckoutOptions
                                },
                                products: d(e.ProductAction.ProductList)
                            }
                        }
                    }
                }
            }, c.prototype.buildRemoveFromCart = function(e) {
                return {
                    event: e,
                    eventType: "commerce_event",
                    eventPayload: {
                        ecommerce: {
                            currencyCode: e.CurrencyCode || "USD",
                            remove: {
                                products: d(e.ProductAction.ProductList)
                            }
                        }
                    }
                }
            }, c.prototype.buildImpression = function(e, t) {
                return {
                    event: e,
                    eventType: "commerce_event",
                    eventPayload: {
                        ecommerce: {
                            currencyCode: e.CurrencyCode || "USD",
                            impressions: d(t.ProductList)
                        }
                    }
                }
            }, c.prototype.buildProductClick = function(e) {
                var t = {};
                return e.EventAttributes && e.EventAttributes.hasOwnProperty("list") && (t.list = e.EventAttributes.list), {
                    event: e,
                    eventType: "commerce_event",
                    eventPayload: {
                        ecommerce: {
                            click: {
                                actionField: t,
                                products: d(e.ProductAction.ProductList)
                            }
                        }
                    }
                }
            }, c.prototype.buildProductViewDetail = function(e) {
                var t = {};
                return e.EventAttributes && e.EventAttributes.hasOwnProperty("list") && (t.list = e.EventAttributes.list), {
                    event: e,
                    eventType: "commerce_event",
                    eventPayload: {
                        ecommerce: {
                            detail: {
                                actionField: t,
                                products: d(e.ProductAction.ProductList)
                            }
                        }
                    }
                }
            }, c.prototype.buildPromoClick = function(e) {
                return {
                    event: e,
                    eventType: "commerce_event",
                    eventPayload: {
                        ecommerce: {
                            promoClick: {
                                promotions: l(e.PromotionAction.PromotionList)
                            }
                        }
                    }
                }
            }, c.prototype.buildPromoView = function(e) {
                return {
                    event: e,
                    eventType: "commerce_event",
                    eventPayload: {
                        ecommerce: {
                            promoView: {
                                promotions: l(e.PromotionAction.PromotionList)
                            }
                        }
                    }
                }
            }, c.prototype.buildPurchase = function(e) {
                var t = e.ProductAction;
                return {
                    event: e,
                    eventType: "commerce_event",
                    eventPayload: {
                        ecommerce: {
                            purchase: {
                                actionField: {
                                    id: t.TransactionId || "",
                                    affiliation: t.Affiliation || "",
                                    revenue: t.TotalAmount || "",
                                    tax: t.TaxAmount || "",
                                    shipping: t.ShippingAmount || "",
                                    coupon: t.CouponCode || ""
                                },
                                products: d(t.ProductList)
                            }
                        }
                    }
                }
            }, c.prototype.buildRefund = function(e) {
                return {
                    event: e,
                    eventType: "commerce_event",
                    eventPayload: {
                        ecommerce: {
                            refund: {
                                actionField: {
                                    id: e.ProductAction.TransactionId || ""
                                },
                                products: d(e.ProductAction.ProductList)
                            }
                        }
                    }
                }
            }, c.prototype.logCommerceEvent = function(e) {
                var t = this;
                switch (e.EventCategory) {
                    case a.AddToCart:
                        var e = t.buildAddToCart(e);
                        break;
                    case a.Checkout:
                        var e = t.buildCheckout(e);
                        break;
                    case a.CheckoutOption:
                        var e = t.buildCheckoutOption(e);
                        break;
                    case a.Click:
                        var e = t.buildProductClick(e);
                        break;
                    case a.Impression:
                        try {
                            e.ProductImpressions.forEach(function(n) {
                                var o = t.buildImpression(e, n);
                                t.common.send(o)
                            })
                        } catch (e) {
                            return console.log("error logging impressions", e), !1
                        }
                        return !0;
                    case a.Purchase:
                        var e = t.buildPurchase(e);
                        break;
                    case a.Refund:
                        var e = t.buildRefund(e);
                        break;
                    case a.RemoveFromCart:
                        var e = t.buildRemoveFromCart(e);
                        break;
                    case a.ViewDetail:
                        var e = t.buildProductViewDetail(e);
                        break;
                    case s.PromotionClick:
                        var e = t.buildPromoClick(e);
                        break;
                    case s.PromotionView:
                        var e = t.buildPromoView(e);
                        break;
                    default:
                        return console.error("Unknown Commerce Type", e), !1
                }
                return t.common.send(e), !0
            }, m.prototype.maybeSendConsentUpdateToGoogle = function(e) {
                if (this.common.consentPayloadAsString && this.common.consentMappings) {
                    var t = this.common.consentHandler.getEventConsentState(e.ConsentState);
                    if (!this.common.isEmpty(t)) {
                        var n = this.common.consentHandler.generateConsentStatePayloadFromMappings(t, this.common.consentMappings),
                            o = JSON.stringify(n);
                        o !== this.common.consentPayloadAsString && (this.common.sendConsent("update", n), this.common.consentPayloadAsString = o)
                    }
                }
            }, m.prototype.logEvent = function(e) {
                return this.maybeSendConsentUpdateToGoogle(e), this.common.send({
                    event: e
                }), !0
            }, m.prototype.logError = function() {}, m.prototype.logPageView = function(e) {
                return this.maybeSendConsentUpdateToGoogle(e), this.common.send({
                    event: e,
                    eventType: "screen_view"
                }), !0
            }, p.prototype.onUserIdentified = function(e) {
                this.common.send({
                    event: {
                        EventName: "User Identified"
                    },
                    user: e
                })
            }, p.prototype.onIdentifyComplete = function(e, t) {
                this.common.send({
                    event: {
                        EventName: "Identify Complete"
                    },
                    user: e
                })
            }, p.prototype.onLoginComplete = function(e, t) {
                this.common.send({
                    event: {
                        EventName: "Login Complete"
                    },
                    user: e
                })
            }, p.prototype.onLogoutComplete = function(e, t) {
                this.common.send({
                    event: {
                        EventName: "Logout Complete"
                    },
                    user: e
                })
            }, p.prototype.onModifyComplete = function(e, t) {
                this.common.send({
                    event: {
                        EventName: "Modify Complete"
                    },
                    user: e
                })
            }, p.prototype.onSetUserIdentity = function(e, t, n) {};
            var f = {
                    name: "GoogleTagManager",
                    moduleId: 140,
                    initForwarder: function(e, t, n, o, r, i, a, s) {
                        s.settings = e, s.settings.consentMappingWeb ? s.consentMappings = JSON.parse(s.settings.consentMappingWeb.replace(/&quot;/g, '"')) : (s.consentMappings = [], s.consentPayloadDefaults = {}, s.consentPayloadAsString = "");
                        var c, u, d, l, m, p, f, y, v = (c = e.containerId || "").trim().match(/^[a-zA-Z0-9-_]+$/) ? c.trim() : "";
                        if (!v) return console.error("Container ID is not valid and is required for Google Tag Manager Integration"), !1;
                        var g = "True" === e.includeContainer,
                            h = (u = e.dataLayerName || "").trim().match(/^[a-zA-Z0-9-_]+$/) ? u.trim() : "";
                        if (!h) return console.error("DataLayer Name is not valid. Please check that you have entered it correctly."), !1;
                        var C = (d = e.previewUrl || "").trim().match(/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/gm) ? d.trim() : "";
                        !C && e.previewUrl && console.warn("Invalid previewUrl detected. Please check that you have entered it correctly."), s.customDataLayerName = h, window[s.customDataLayerName] = window[s.customDataLayerName] || [], t || !g || (l = s.customDataLayerName, f = "https://www.googletagmanager.com/gtm.js", m = {}, y = !(p = (C || "").split("?"))[1] || p.length > 2 ? {} : (p[1].split("&").forEach(function(e) {
                            var t = e.split("=");
                            m[t[0]] = t[1]
                        }), m), C && y.id === v ? f += "?" + (C || "").split("?")[1] + "&l=" + l : f += "?id=" + v, function(e, t) {
                            window[t].push({
                                "gtm.start": new Date().getTime(),
                                event: "gtm.js"
                            });
                            var n = document.createElement("script");
                            n.type = "text/javascript", n.async = !0, n.src = e, (document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0]).appendChild(n)
                        }(f += "&l=" + l, l)), s.consentPayloadDefaults = s.consentHandler.getConsentSettings();
                        var P = s.consentHandler.getUserConsentState(),
                            w = s.consentHandler.generateConsentStatePayloadFromMappings(P, s.consentMappings);
                        s.isEmpty(w) || (s.consentPayloadAsString = JSON.stringify(w), s.sendConsent("default", w))
                    }
                },
                y = {
                    onSessionStart: function(e) {},
                    onSessionEnd: function(e) {}
                };

            function v(e) {
                this.common = {}
            }
            v.prototype.onRemoveUserAttribute = function(e, t) {
                this.common.send({
                    event: {
                        EventName: "Remove User Attribute"
                    },
                    options: {
                        key: e
                    }
                })
            }, v.prototype.onSetUserAttribute = function(e, t, n) {
                this.common.send({
                    event: {
                        EventName: "Set User Attribute"
                    },
                    options: {
                        key: e,
                        value: t
                    }
                })
            }, v.prototype.onConsentStateUpdated = function(e, t, n) {
                this.common.send({
                    event: {
                        EventName: "Consent State Update"
                    },
                    options: {
                        old_state: e,
                        new_state: t
                    }
                })
            };
            var g = f.name,
                h = f.moduleId,
                C = {
                    SessionStart: 1,
                    SessionEnd: 2,
                    PageView: 3,
                    PageEvent: 4,
                    CrashReport: 5,
                    Commerce: 16,
                    Media: 20
                },
                P = function() {
                    var e, t, n = this,
                        o = !1,
                        r = [];

                    function a(e) {
                        var i = !1;
                        if (!o) return r.push(e), "Can't send to forwarder " + g + ", not initialized. Event added to queue.";
                        try {
                            if (e.EventDataType === C.SessionStart ? i = function(e) {
                                    try {
                                        return y.onSessionStart(e), !0
                                    } catch (e) {
                                        return {
                                            error: "Error starting session on forwarder " + g + "; " + e
                                        }
                                    }
                                }(e) : e.EventDataType === C.SessionEnd ? i = function(e) {
                                    try {
                                        return y.onSessionEnd(e), !0
                                    } catch (e) {
                                        return {
                                            error: "Error ending session on forwarder " + g + "; " + e
                                        }
                                    }
                                }(e) : e.EventDataType === C.CrashReport ? i = function(e) {
                                    try {
                                        return n.eventHandler.logError(e), !0
                                    } catch (e) {
                                        return {
                                            error: "Error logging error on forwarder " + g + "; " + e
                                        }
                                    }
                                }(e) : e.EventDataType === C.PageView ? i = function(e) {
                                    try {
                                        return n.eventHandler.logPageView(e), !0
                                    } catch (e) {
                                        return {
                                            error: "Error logging page view on forwarder " + g + "; " + e
                                        }
                                    }
                                }(e) : e.EventDataType === C.Commerce ? i = function(e) {
                                    try {
                                        return n.commerceHandler.logCommerceEvent(e), !0
                                    } catch (e) {
                                        return {
                                            error: "Error logging purchase event on forwarder " + g + "; " + e
                                        }
                                    }
                                }(e) : e.EventDataType === C.PageEvent ? i = s(e) : e.EventDataType === C.Media && (i = s(e)), !0 === i && t) return t(n, e), "Successfully sent to " + g;
                            return "Error logging event or event type not supported on forwarder " + g
                        } catch (e) {
                            return "Failed to send to " + g + " " + e
                        }
                    }

                    function s(e) {
                        try {
                            return n.eventHandler.logEvent(e), !0
                        } catch (e) {
                            return {
                                error: "Error logging event on forwarder " + g + "; " + e
                            }
                        }
                    }
                    n.name = f.name, n.moduleId = f.moduleId, n.common = new i, this.init = function(i, s, u, d, l, y, h, C, P, w) {
                        e = i, t = window.mParticle.isTestEnvironment ? function() {} : s;
                        try {
                            f.initForwarder(i, u, l, y, a, r, o, n.common, h, C, P, w), n.eventHandler = new m(n.common), n.identityHandler = new p(n.common), n.userAttributeHandler = new v(n.common), n.commerceHandler = new c(n.common), o = !0
                        } catch (e) {
                            console.log("Failed to initialize " + g + " - " + e)
                        }
                    }, this.process = a, this.setUserAttribute = function(t, r) {
                        if (!o) return "Can't set user attribute on forwarder " + g + ", not initialized";
                        try {
                            return n.userAttributeHandler.onSetUserAttribute(t, r, e), "Successfully set user attribute on forwarder " + g
                        } catch (e) {
                            return "Error setting user attribute on forwarder " + g + "; " + e
                        }
                    }, this.removeUserAttribute = function(t) {
                        if (!o) return "Can't remove user attribute on forwarder " + g + ", not initialized";
                        try {
                            return n.userAttributeHandler.onRemoveUserAttribute(t, e), "Successfully removed user attribute on forwarder " + g
                        } catch (e) {
                            return "Error removing user attribute on forwarder " + g + "; " + e
                        }
                    }, this.onUserIdentified = function(e) {
                        if (!o) return "Can't set new user identities on forwader  " + g + ", not initialized";
                        try {
                            return n.identityHandler.onUserIdentified(e), "Successfully called onUserIdentified on forwarder " + g
                        } catch (e) {
                            return {
                                error: "Error calling onUserIdentified on forwarder " + g + "; " + e
                            }
                        }
                    }, this.setUserIdentity = function(t, r) {
                        if (!o) return "Can't call setUserIdentity on forwarder " + g + ", not initialized";
                        try {
                            return n.identityHandler.onSetUserIdentity(e, t, r), "Successfully set user Identity on forwarder " + g
                        } catch (e) {
                            return "Error removing user attribute on forwarder " + g + "; " + e
                        }
                    }, this.onIdentifyComplete = function(e, t) {
                        if (!o) return "Can't call onIdentifyCompleted on forwader  " + g + ", not initialized";
                        try {
                            return n.identityHandler.onIdentifyComplete(e, t), "Successfully called onIdentifyComplete on forwarder " + g
                        } catch (e) {
                            return {
                                error: "Error calling onIdentifyComplete on forwarder " + g + "; " + e
                            }
                        }
                    }, this.onLoginComplete = function(e, t) {
                        if (!o) return "Can't call onLoginComplete on forwader  " + g + ", not initialized";
                        try {
                            return n.identityHandler.onLoginComplete(e, t), "Successfully called onLoginComplete on forwarder " + g
                        } catch (e) {
                            return {
                                error: "Error calling onLoginComplete on forwarder " + g + "; " + e
                            }
                        }
                    }, this.onLogoutComplete = function(e, t) {
                        if (!o) return "Can't call onLogoutComplete on forwader  " + g + ", not initialized";
                        try {
                            return n.identityHandler.onLogoutComplete(e, t), "Successfully called onLogoutComplete on forwarder " + g
                        } catch (e) {
                            return {
                                error: "Error calling onLogoutComplete on forwarder " + g + "; " + e
                            }
                        }
                    }, this.onModifyComplete = function(e, t) {
                        if (!o) return "Can't call onModifyComplete on forwader  " + g + ", not initialized";
                        try {
                            return n.identityHandler.onModifyComplete(e, t), "Successfully called onModifyComplete on forwarder " + g
                        } catch (e) {
                            return {
                                error: "Error calling onModifyComplete on forwarder " + g + "; " + e
                            }
                        }
                    }, this.setOptOut = function(e) {
                        if (!o) return "Can't call setOptOut on forwader  " + g + ", not initialized";
                        try {
                            return n.initialization.setOptOut(e), "Successfully called setOptOut on forwarder " + g
                        } catch (e) {
                            return {
                                error: "Error calling setOptOut on forwarder " + g + "; " + e
                            }
                        }
                    }
                };

            function w(e) {
                return null != e && "object" == typeof e && !1 === Array.isArray(e)
            }
            window && window.mParticle && window.mParticle.addForwarder && window.mParticle.addForwarder({
                name: g,
                constructor: P,
                getId: function() {
                    return h
                }
            });
            var b = {
                    register: function(e) {
                        if (!e) {
                            console.log("You must pass a config object to register the kit " + g);
                            return
                        }
                        if (!w(e)) {
                            console.log("'config' must be an object. You passed in a " + typeof e);
                            return
                        }
                        w(e.kits) || (e.kits = {}), e.kits[g] = {
                            constructor: P
                        }, console.log("Successfully registered " + g + " to your mParticle configuration")
                    }
                },
                S = b.register;
            t.default = b, t.register = S
        }
    }
]);
//# sourceMappingURL=1807.18ba1a9594235f8b.js.map