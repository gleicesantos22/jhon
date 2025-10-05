"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [30578], {
        130578: function(e, t) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = function() {},
                r = {
                    pages: {},
                    events: {}
                },
                o = {
                    events: {}
                },
                i = {
                    arrayToObject: function(e, t) {
                        return e.reduce(function(e, n) {
                            return e[n[t]] = n, e
                        }, {})
                    },
                    loadScript: function(e, t) {
                        var n = document.createElement("script");
                        n.type = "text/javascript", n.onload = t, n.src = e, document.head.appendChild(n)
                    },
                    getUserId: function(e) {
                        var t, n = window.mParticle.Identity.getCurrentUser().getUserIdentities().userIdentities;
                        switch (e) {
                            case "customerId":
                                t = n.customerid;
                                break;
                            case "email":
                                t = n.email;
                                break;
                            case "mpid":
                                t = window.mParticle.Identity.getCurrentUser().getMPID();
                                break;
                            case "other":
                                t = n.other;
                                break;
                            case "other2":
                                t = n.other2;
                                break;
                            case "other3":
                                t = n.other3;
                                break;
                            case "other4":
                                t = n.other4;
                                break;
                            case "deviceApplicationStamp":
                                t = window.mParticle.getDeviceId();
                                break;
                            default:
                                t = null
                        }
                        return t || (t = window.mParticle.getDeviceId()), t
                    }
                };

            function a(e) {
                this.common = e || {}
            }

            function l(e) {
                this.common = e || {}
            }

            function s(e) {
                this.common = e || {}
            }

            function u() {
                var e, t = {},
                    n = {};
                if (window.optimizely) {
                    for (var o in (e = window.optimizely.get("data")).events) t[e.events[o].apiName] = 1;
                    for (var i in e.pages) n[e.pages[i].apiName] = 1;
                    r.events = t, r.pages = n
                }
            }

            function c() {
                var e, t = {};
                if (window.optimizelyDatafile) {
                    for (var n in e = i.arrayToObject(window.optimizelyDatafile.events, "id")) t[e[n].key] = 1;
                    o.events = t
                }
            }
            a.prototype.logCommerceEvent = function(e) {
                var t = this;
                mParticle.eCommerce.expandCommerceEvent(e).forEach(function(n) {
                    if (!t.common.useFullStack && r.events[n.EventName]) {
                        var a = {
                            type: "event",
                            eventName: e.EventName,
                            tags: {}
                        };
                        if (a.tags = n.EventAttributes || {}, e.EventCategory === mParticle.CommerceEventType.ProductPurchase || e.EventCategory === mParticle.CommerceEventType.ProductRefund ? n.EventName.indexOf("Total") > -1 ? (e.CustomFlags && e.CustomFlags["Optimizely.EventName"] ? a.eventName = e.CustomFlags["Optimizely.EventName"] : a.eventName = n.EventName, n.EventAttributes && n.EventAttributes["Total Amount"] && (a.tags.revenue = 100 * n.EventAttributes["Total Amount"])) : (a.eventName = n.EventName, a.tags.revenue && delete a.tags.revenue, a.tags.Revenue && delete a.tags.Revenue) : (a.eventName = n.EventName, e.CustomFlags && e.CustomFlags["Optimizely.EventName"] && (a.eventName = e.CustomFlags["Optimizely.EventName"])), r.events[a.eventName]) {
                            var l = {};
                            for (var s in a) l[s] = a[s];
                            window.optimizely.push(l)
                        }
                    }
                    if (t.common.useFullStack && window.optimizelyClientInstance && (o.events[n.EventName] || o.events[e.CustomFlags["OptimizelyFullStack.EventName"]])) {
                        var u, c = n.EventName,
                            m = t.common.userAttributes,
                            d = {};
                        d = n.EventAttributes || {}, window.mParticle && window.mParticle.Identity && (u = i.getUserId(t.common.userIdField)), e.EventCategory === mParticle.CommerceEventType.ProductPurchase || e.EventCategory === mParticle.CommerceEventType.ProductRefund ? n.EventName.indexOf("Total") > -1 ? (c = e.CustomFlags && e.CustomFlags["OptimizelyFullStack.EventName"] ? e.CustomFlags["OptimizelyFullStack.EventName"] : n.EventName, n.EventAttributes && n.EventAttributes["Total Amount"] && (d.revenue = 100 * n.EventAttributes["Total Amount"])) : (e.CustomFlags && e.CustomFlags["OptimizelyFullStack.EventName"] && (c = e.CustomFlags["OptimizelyFullStack.EventName"]), d.revenue && delete d.revenue) : (c = n.EventName, e.CustomFlags && e.CustomFlags["OptimizelyFullStack.EventName"] && (c = e.CustomFlags["OptimizelyFullStack.EventName"])), window.optimizelyClientInstance.track(c, u, m, d)
                    }
                })
            }, l.prototype.logEvent = function(e) {
                if (!this.common.useFullStack && r.events[e.EventName]) {
                    var t = {
                        type: "event",
                        eventName: e.EventName
                    };
                    e.EventAttributes && (t.tags = e.EventAttributes), e.CustomFlags && e.CustomFlags["Optimizely.Value"] && (t.tags.value = e.CustomFlags["Optimizely.Value"]), window.optimizely.push(t)
                }
                if (this.common.useFullStack && window.optimizelyClientInstance && o.events[e.EventName]) {
                    var n, a = e.EventName,
                        l = this.common.userAttributes,
                        s = {};
                    window.mParticle && window.mParticle.Identity && (n = i.getUserId(this.common.userIdField)), e.EventAttributes && (s = e.EventAttributes), e.CustomFlags && e.CustomFlags["OptimizelyFullStack.Value"] && (s.value = e.CustomFlags["OptimizelyFullStack.Value"]), window.optimizelyClientInstance.track(a, n, l, s)
                }
            }, l.prototype.logPageView = function(e) {
                if (!this.common.useFullStack && r.pages[e.EventName]) {
                    var t = {
                        type: "page",
                        pageName: e.EventName
                    };
                    e.EventAttributes && (t.tags = e.EventAttributes), window.optimizely.push(t)
                }
            }, s.prototype.onIdentifyComplete = function(e, t) {}, s.prototype.onLoginComplete = function(e, t) {}, s.prototype.onLogoutComplete = function(e, t) {}, s.prototype.onModifyComplete = function(e, t) {}, s.prototype.onUserIdentified = function(e, t) {}, s.prototype.onSetUserIdentity = function(e, t, n) {};
            var m = {
                    name: "Optimizely",
                    moduleId: 54,
                    initForwarder: function(e, t, n, r, o, a, l, s, m, d, f, p) {
                        if (s.useFullStack = "True" === e.useFullStack, t) s.useFullStack || u(), s.useFullStack && (s.userIdField = e.userIdField, s.userAttributes = n, c());
                        else {
                            if (window.optimizely || s.useFullStack) u();
                            else {
                                var y = document.createElement("script");
                                y.type = "text/javascript", y.async = !0, y.src = "https://cdn.optimizely.com/js/" + e.projectId + ".js", (document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0]).appendChild(y), y.onload = function() {
                                    if (u(), window.optimizely && a.length > 0) {
                                        for (var e = 0; e < a.length; e++) o(a[e]);
                                        a = []
                                    }
                                }
                            }
                            if (!window.optimizelyClientInstance && s.useFullStack) {
                                s.userIdField = e.userIdField, s.userAttributes = n;
                                var v = function() {};
                                f && f["OptimizelyFullStack.ErrorHandler"] && (v = f["OptimizelyFullStack.ErrorHandler"]);
                                var w = function() {
                                    window.optimizelyClientInstance = window.optimizelySdk.createInstance({
                                        datafile: window.optimizelyDatafile,
                                        errorHandler: {
                                            handleError: v
                                        }
                                    }), window.optimizelyClientInstance.onReady().then(function() {
                                        c()
                                    })
                                };
                                i.loadScript("https://unpkg.com/@optimizely/optimizely-sdk@3.5.0/dist/optimizely.browser.umd.min.js", function() {
                                    i.loadScript("https://cdn.optimizely.com/datafiles/" + e.projectId + ".json/tag.js", w)
                                })
                            } else s.userIdField = e.userIdField, s.userAttributes = n, c()
                        }
                    }
                },
                d = {
                    onSessionStart: function(e) {},
                    onSessionEnd: function(e) {}
                };

            function f(e) {
                this.common = e || {}
            }
            f.prototype.onRemoveUserAttribute = function(e) {
                if (!this.common.useFullStack && window.optimizely) {
                    var t = {};
                    t[e] = null, window.optimizely.push({
                        type: "user",
                        attributes: t
                    })
                }
                this.common.useFullStack && window.optimizelyClientInstance && this.common.userAttributes[e] && delete this.common.userAttributes[e]
            }, f.prototype.onSetUserAttribute = function(e, t) {
                if (!this.common.useFullStack && window.optimizely) {
                    var n = {};
                    n[e] = t, window.optimizely.push({
                        type: "user",
                        attributes: n
                    })
                }
                this.common.useFullStack && window.optimizelyClientInstance && (this.common.userAttributes[e] = t)
            };
            var p = m.name,
                y = m.moduleId,
                v = {
                    SessionStart: 1,
                    SessionEnd: 2,
                    PageView: 3,
                    PageEvent: 4,
                    CrashReport: 5,
                    Commerce: 16,
                    Media: 20
                },
                w = function() {
                    var e, t, r = this,
                        o = !1,
                        i = [];

                    function u(e) {
                        var n = !1;
                        if (!o) return i.push(e), "Can't send to forwarder " + p + ", not initialized. Event added to queue.";
                        try {
                            if (e.EventDataType === v.SessionStart ? n = function(e) {
                                    try {
                                        return d.onSessionStart(e), !0
                                    } catch (e) {
                                        return {
                                            error: "Error starting session on forwarder " + p + "; " + e
                                        }
                                    }
                                }(e) : e.EventDataType === v.SessionEnd ? n = function(e) {
                                    try {
                                        return d.onSessionEnd(e), !0
                                    } catch (e) {
                                        return {
                                            error: "Error ending session on forwarder " + p + "; " + e
                                        }
                                    }
                                }(e) : e.EventDataType === v.CrashReport ? n = function(e) {
                                    try {
                                        return r.eventHandler.logError(e), !0
                                    } catch (e) {
                                        return {
                                            error: "Error logging error on forwarder " + p + "; " + e
                                        }
                                    }
                                }(e) : e.EventDataType === v.PageView ? n = function(e) {
                                    try {
                                        return r.eventHandler.logPageView(e), !0
                                    } catch (e) {
                                        return {
                                            error: "Error logging page view on forwarder " + p + "; " + e
                                        }
                                    }
                                }(e) : e.EventDataType === v.Commerce ? n = function(e) {
                                    try {
                                        return r.commerceHandler.logCommerceEvent(e), !0
                                    } catch (e) {
                                        return {
                                            error: "Error logging purchase event on forwarder " + p + "; " + e
                                        }
                                    }
                                }(e) : e.EventDataType === v.PageEvent ? n = c(e) : e.EventDataType === v.Media && (n = c(e)), !0 === n && t) return t(r, e), "Successfully sent to " + p;
                            return "Error logging event or event type not supported on forwarder " + p
                        } catch (e) {
                            return "Failed to send to " + p + " " + e
                        }
                    }

                    function c(e) {
                        try {
                            return r.eventHandler.logEvent(e), !0
                        } catch (e) {
                            return {
                                error: "Error logging event on forwarder " + p + "; " + e
                            }
                        }
                    }
                    r.name = m.name, r.moduleId = m.moduleId, r.common = new n, this.init = function(n, c, d, y, v, w, g, E, C, h) {
                        e = n, t = window.mParticle.isTestEnvironment ? function() {} : c;
                        try {
                            m.initForwarder(n, d, v, w, u, i, o, r.common, g, E, C, h), r.eventHandler = new l(r.common), r.identityHandler = new s(r.common), r.userAttributeHandler = new f(r.common), r.commerceHandler = new a(r.common), o = !0
                        } catch (e) {
                            console.log("Failed to initialize " + p + " - " + e)
                        }
                    }, this.process = u, this.setUserAttribute = function(t, n) {
                        if (!o) return "Can't set user attribute on forwarder " + p + ", not initialized";
                        try {
                            return r.userAttributeHandler.onSetUserAttribute(t, n, e), "Successfully set user attribute on forwarder " + p
                        } catch (e) {
                            return "Error setting user attribute on forwarder " + p + "; " + e
                        }
                    }, this.removeUserAttribute = function(t) {
                        if (!o) return "Can't remove user attribute on forwarder " + p + ", not initialized";
                        try {
                            return r.userAttributeHandler.onRemoveUserAttribute(t, e), "Successfully removed user attribute on forwarder " + p
                        } catch (e) {
                            return "Error removing user attribute on forwarder " + p + "; " + e
                        }
                    }, this.onUserIdentified = function(e) {
                        if (!o) return "Can't set new user identities on forwader  " + p + ", not initialized";
                        try {
                            return r.identityHandler.onUserIdentified(e), "Successfully called onUserIdentified on forwarder " + p
                        } catch (e) {
                            return {
                                error: "Error calling onUserIdentified on forwarder " + p + "; " + e
                            }
                        }
                    }, this.setUserIdentity = function(t, n) {
                        if (!o) return "Can't call setUserIdentity on forwarder " + p + ", not initialized";
                        try {
                            return r.identityHandler.onSetUserIdentity(e, t, n), "Successfully set user Identity on forwarder " + p
                        } catch (e) {
                            return "Error removing user attribute on forwarder " + p + "; " + e
                        }
                    }, this.onIdentifyComplete = function(e, t) {
                        if (!o) return "Can't call onIdentifyCompleted on forwader  " + p + ", not initialized";
                        try {
                            return r.identityHandler.onIdentifyComplete(e, t), "Successfully called onIdentifyComplete on forwarder " + p
                        } catch (e) {
                            return {
                                error: "Error calling onIdentifyComplete on forwarder " + p + "; " + e
                            }
                        }
                    }, this.onLoginComplete = function(e, t) {
                        if (!o) return "Can't call onLoginComplete on forwader  " + p + ", not initialized";
                        try {
                            return r.identityHandler.onLoginComplete(e, t), "Successfully called onLoginComplete on forwarder " + p
                        } catch (e) {
                            return {
                                error: "Error calling onLoginComplete on forwarder " + p + "; " + e
                            }
                        }
                    }, this.onLogoutComplete = function(e, t) {
                        if (!o) return "Can't call onLogoutComplete on forwader  " + p + ", not initialized";
                        try {
                            return r.identityHandler.onLogoutComplete(e, t), "Successfully called onLogoutComplete on forwarder " + p
                        } catch (e) {
                            return {
                                error: "Error calling onLogoutComplete on forwarder " + p + "; " + e
                            }
                        }
                    }, this.onModifyComplete = function(e, t) {
                        if (!o) return "Can't call onModifyComplete on forwader  " + p + ", not initialized";
                        try {
                            return r.identityHandler.onModifyComplete(e, t), "Successfully called onModifyComplete on forwarder " + p
                        } catch (e) {
                            return {
                                error: "Error calling onModifyComplete on forwarder " + p + "; " + e
                            }
                        }
                    }, this.setOptOut = function(e) {
                        if (!o) return "Can't call setOptOut on forwader  " + p + ", not initialized";
                        try {
                            return r.initialization.setOptOut(e), "Successfully called setOptOut on forwarder " + p
                        } catch (e) {
                            return {
                                error: "Error calling setOptOut on forwarder " + p + "; " + e
                            }
                        }
                    }
                };

            function g(e) {
                return null != e && "object" == typeof e && !1 === Array.isArray(e)
            }
            window && window.mParticle && window.mParticle.addForwarder && window.mParticle.addForwarder({
                name: p,
                constructor: w,
                getId: function() {
                    return y
                }
            });
            var E = {
                    register: function(e) {
                        if (!e) {
                            console.log("You must pass a config object to register the kit " + p);
                            return
                        }
                        if (!g(e)) {
                            console.log("'config' must be an object. You passed in a " + typeof e);
                            return
                        }
                        g(e.kits) || (e.kits = {}), e.kits[p] = {
                            constructor: w
                        }, console.log("Successfully registered " + p + " to your mParticle configuration")
                    }
                },
                C = E.register;
            t.default = E, t.register = C
        }
    }
]);
//# sourceMappingURL=30578.bdb161a988dab150.js.map