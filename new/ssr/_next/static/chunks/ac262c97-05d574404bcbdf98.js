"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [87829], {
        587598: function(e, t, r) {
            r.d(t, {
                Fs: function() {
                    return rH
                },
                N1: function() {
                    return v
                },
                in: function() {
                    return f
                }
            });
            var i, n, o, s, a, u, l, c, d, p, f, g, E, h, I, _, v, y, R, O = r(362950),
                N = r(441868),
                T = r(707213),
                m = r.n(T),
                A = r(383639),
                D = function(e, t) {
                    return (D = Object.setPrototypeOf || ({
                        __proto__: []
                    }) instanceof Array && function(e, t) {
                        e.__proto__ = t
                    } || function(e, t) {
                        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                    })(e, t)
                };

            function S(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Class extends value " + String(t) + " is not a constructor or null");

                function r() {
                    this.constructor = e
                }
                D(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
            }
            var U = function() {
                return (U = Object.assign || function(e) {
                    for (var t, r = 1, i = arguments.length; r < i; r++)
                        for (var n in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                    return e
                }).apply(this, arguments)
            };

            function L(e, t, r, i) {
                return new(r || (r = Promise))(function(n, o) {
                    function s(e) {
                        try {
                            u(i.next(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function a(e) {
                        try {
                            u(i.throw(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function u(e) {
                        var t;
                        e.done ? n(e.value) : ((t = e.value) instanceof r ? t : new r(function(e) {
                            e(t)
                        })).then(s, a)
                    }
                    u((i = i.apply(e, t || [])).next())
                })
            }

            function C(e, t) {
                var r, i, n, o, s = {
                    label: 0,
                    sent: function() {
                        if (1 & n[0]) throw n[1];
                        return n[1]
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
                    return function(u) {
                        return function(a) {
                            if (r) throw TypeError("Generator is already executing.");
                            for (; o && (o = 0, a[0] && (s = 0)), s;) try {
                                if (r = 1, i && (n = 2 & a[0] ? i.return : a[0] ? i.throw || ((n = i.return) && n.call(i), 0) : i.next) && !(n = n.call(i, a[1])).done) return n;
                                switch (i = 0, n && (a = [2 & a[0], n.value]), a[0]) {
                                    case 0:
                                    case 1:
                                        n = a;
                                        break;
                                    case 4:
                                        return s.label++, {
                                            value: a[1],
                                            done: !1
                                        };
                                    case 5:
                                        s.label++, i = a[1], a = [0];
                                        continue;
                                    case 7:
                                        a = s.ops.pop(), s.trys.pop();
                                        continue;
                                    default:
                                        if (!(n = (n = s.trys).length > 0 && n[n.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                            s = 0;
                                            continue
                                        }
                                        if (3 === a[0] && (!n || a[1] > n[0] && a[1] < n[3])) {
                                            s.label = a[1];
                                            break
                                        }
                                        if (6 === a[0] && s.label < n[1]) {
                                            s.label = n[1], n = a;
                                            break
                                        }
                                        if (n && s.label < n[2]) {
                                            s.label = n[2], s.ops.push(a);
                                            break
                                        }
                                        n[2] && s.ops.pop(), s.trys.pop();
                                        continue
                                }
                                a = t.call(e, s)
                            } catch (e) {
                                a = [6, e], i = 0
                            } finally {
                                r = n = 0
                            }
                            if (5 & a[0]) throw a[1];
                            return {
                                value: a[0] ? a[1] : void 0,
                                done: !0
                            }
                        }([a, u])
                    }
                }
            }

            function b(e, t, r) {
                if (r || 2 == arguments.length)
                    for (var i, n = 0, o = t.length; n < o; n++) !i && n in t || (i || (i = Array.prototype.slice.call(t, 0, n)), i[n] = t[n]);
                return e.concat(i || Array.prototype.slice.call(t))
            }
            "function" == typeof SuppressedError && SuppressedError;
            var V = new(function() {
                function e() {}
                return e.prototype.handleError = function(e) {}, e
            }());

            function P(e) {
                for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
                if (!e) return {};
                if ("function" == typeof Object.assign) return Object.assign.apply(Object, b([e], t, !1));
                for (var i = Object(e), n = 0; n < t.length; n++) {
                    var o = t[n];
                    if (null != o)
                        for (var s in o) Object.prototype.hasOwnProperty.call(o, s) && (i[s] = o[s])
                }
                return i
            }

            function F(e, t) {
                var r, i, n;
                return e ? (r = e, i = function(e) {
                    return e[t]
                }, n = {}, r.forEach(function(e) {
                    n[i(e)] = e
                }), n) : {}
            }

            function M() {
                return (0, O.Z)()
            }

            function k(e, t) {
                for (var r = !1, i = Object.keys(e), n = 0; n < i.length; n++)
                    if (t === e[i[n]]) {
                        r = !0;
                        break
                    }
                return r
            }

            function x(e) {
                return Object.keys(e).map(function(t) {
                    return e[t]
                })
            }

            function G(e, t) {
                for (var r, i = 0; i < e.length; i++) {
                    var n = e[i];
                    if (t(n)) {
                        r = n;
                        break
                    }
                }
                return r
            }

            function w(e) {
                for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
                var i = 0;
                return e.replace(/%s/g, function() {
                    var e = t[i++],
                        r = typeof e;
                    return "function" === r ? e() : "string" === r ? e : String(e)
                })
            }
            var B = {
                assign: P,
                currentTimestamp: function() {
                    return Math.round(new Date().getTime())
                },
                isSafeInteger: function(e) {
                    return "number" == typeof e && 9007199254740992 >= Math.abs(e)
                },
                uuid: M,
                isNumber: function(e) {
                    return "number" == typeof e
                }
            };
            (i = f || (f = {}))[i.NOTSET = 0] = "NOTSET", i[i.DEBUG = 1] = "DEBUG", i[i.INFO = 2] = "INFO", i[i.WARNING = 3] = "WARNING", i[i.ERROR = 4] = "ERROR";
            var K = {
                NOTSET: 0,
                DEBUG: 1,
                INFO: 2,
                WARNING: 3,
                ERROR: 4
            };

            function j(e) {
                return "string" != typeof e ? e : ("WARN" === (e = e.toUpperCase()) && (e = "WARNING"), K[e]) ? K[e] : e
            }
            var q = function() {
                    function e() {
                        this.defaultLoggerFacade = new Y, this.loggers = {}
                    }
                    return e.prototype.getLogger = function(e) {
                        return e ? (this.loggers[e] || (this.loggers[e] = new Y({
                            messagePrefix: e
                        })), this.loggers[e]) : this.defaultLoggerFacade
                    }, e
                }(),
                H = function() {
                    function e(e) {
                        void 0 === e && (e = {}), this.logLevel = f.NOTSET, void 0 !== e.logLevel && k(f, e.logLevel) && this.setLogLevel(e.logLevel), this.logToConsole = void 0 === e.logToConsole || !!e.logToConsole, this.prefix = void 0 !== e.prefix ? e.prefix : "[OPTIMIZELY]"
                    }
                    return e.prototype.log = function(e, t) {
                        if (this.shouldLog(e) && this.logToConsole) {
                            var r = "".concat(this.prefix, " - ").concat(this.getLogLevelName(e), " ").concat(this.getTime(), " ").concat(t);
                            this.consoleLog(e, [r])
                        }
                    }, e.prototype.setLogLevel = function(e) {
                        e = j(e), k(f, e) && void 0 !== e ? this.logLevel = e : this.logLevel = f.ERROR
                    }, e.prototype.getTime = function() {
                        return new Date().toISOString()
                    }, e.prototype.shouldLog = function(e) {
                        return e >= this.logLevel
                    }, e.prototype.getLogLevelName = function(e) {
                        switch (e) {
                            case f.DEBUG:
                                return "DEBUG";
                            case f.INFO:
                                return "INFO ";
                            case f.WARNING:
                                return "WARN ";
                            case f.ERROR:
                                return "ERROR";
                            default:
                                return "NOTSET"
                        }
                    }, e.prototype.consoleLog = function(e, t) {
                        switch (e) {
                            case f.DEBUG:
                                console.log.apply(console, t);
                                break;
                            case f.INFO:
                                console.info.apply(console, t);
                                break;
                            case f.WARNING:
                                console.warn.apply(console, t);
                                break;
                            case f.ERROR:
                                console.error.apply(console, t);
                                break;
                            default:
                                console.log.apply(console, t)
                        }
                    }, e
                }(),
                z = f.NOTSET,
                X = null,
                Y = function() {
                    function e(e) {
                        void 0 === e && (e = {}), this.messagePrefix = "", e.messagePrefix && (this.messagePrefix = e.messagePrefix)
                    }
                    return e.prototype.log = function(e, t) {
                        for (var r = [], i = 2; i < arguments.length; i++) r[i - 2] = arguments[i];
                        this.internalLog(j(e), {
                            message: t,
                            splat: r
                        })
                    }, e.prototype.info = function(e) {
                        for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
                        this.namedLog(f.INFO, e, t)
                    }, e.prototype.debug = function(e) {
                        for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
                        this.namedLog(f.DEBUG, e, t)
                    }, e.prototype.warn = function(e) {
                        for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
                        this.namedLog(f.WARNING, e, t)
                    }, e.prototype.error = function(e) {
                        for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
                        this.namedLog(f.ERROR, e, t)
                    }, e.prototype.format = function(e) {
                        return "".concat(this.messagePrefix ? this.messagePrefix + ": " : "").concat(w.apply(void 0, b([e.message], e.splat, !1)))
                    }, e.prototype.internalLog = function(e, t) {
                        X && !(e < z) && (X.log(e, this.format(t)), t.error && t.error instanceof Error && V.handleError(t.error))
                    }, e.prototype.namedLog = function(e, t, r) {
                        if (t instanceof Error) {
                            t = (i = t).message, this.internalLog(e, {
                                error: i,
                                message: t,
                                splat: r
                            });
                            return
                        }
                        if (0 === r.length) {
                            this.internalLog(e, {
                                message: t,
                                splat: r
                            });
                            return
                        }
                        var i, n = r[r.length - 1];
                        n instanceof Error && (i = n, r.splice(-1)), this.internalLog(e, {
                            message: t,
                            error: i,
                            splat: r
                        })
                    }, e
                }(),
                J = new q;

            function W(e) {
                return J.getLogger(e)
            }

            function Q(e) {
                X = e
            }
            var Z = {
                setLogLevel: function(e) {
                    e = j(e), z = k(f, e) && void 0 !== e ? e : f.ERROR
                },
                setLogHandler: Q
            };

            function $(e, t) {
                var r = e.context,
                    i = t.context;
                return r.accountId === i.accountId && r.projectId === i.projectId && r.clientName === i.clientName && r.clientVersion === i.clientVersion && r.revision === i.revision && r.anonymizeIP === i.anonymizeIP && r.botFiltering === i.botFiltering
            }
            var ee = W("EventProcessor"),
                et = function() {
                    function e(e) {
                        var t = e.timeout,
                            r = e.callback;
                        this.timeout = Math.max(t, 0), this.callback = r
                    }
                    return e.prototype.start = function() {
                        this.timeoutId = setTimeout(this.callback, this.timeout)
                    }, e.prototype.refresh = function() {
                        this.stop(), this.start()
                    }, e.prototype.stop = function() {
                        this.timeoutId && clearTimeout(this.timeoutId)
                    }, e
                }(),
                er = function() {
                    function e(e) {
                        var t = e.sink;
                        this.sink = t
                    }
                    return e.prototype.start = function() {
                        return Promise.resolve()
                    }, e.prototype.stop = function() {
                        return Promise.resolve()
                    }, e.prototype.enqueue = function(e) {
                        this.sink([e])
                    }, e
                }(),
                ei = function() {
                    function e(e) {
                        var t = e.flushInterval,
                            r = e.maxQueueSize,
                            i = e.sink,
                            n = e.closingSink,
                            o = e.batchComparator;
                        this.buffer = [], this.maxQueueSize = Math.max(r, 1), this.sink = i, this.closingSink = n, this.batchComparator = o, this.timer = new et({
                            callback: this.flush.bind(this),
                            timeout: t
                        }), this.started = !1
                    }
                    return e.prototype.start = function() {
                        return this.started = !0, Promise.resolve()
                    }, e.prototype.stop = function() {
                        this.started = !1;
                        var e = this.closingSink ? this.closingSink(this.buffer) : this.sink(this.buffer);
                        return this.buffer = [], this.timer.stop(), e
                    }, e.prototype.enqueue = function(e) {
                        if (!this.started) {
                            ee.warn("Queue is stopped, not accepting event");
                            return
                        }
                        var t = this.buffer[0];
                        t && !this.batchComparator(t, e) && this.flush(), 0 === this.buffer.length && this.timer.refresh(), this.buffer.push(e), this.buffer.length >= this.maxQueueSize && this.flush()
                    }, e.prototype.flush = function() {
                        this.sink(this.buffer), this.buffer = [], this.timer.stop()
                    }, e
                }(),
                en = {
                    NOTSET: 0,
                    DEBUG: 1,
                    INFO: 2,
                    WARNING: 3,
                    ERROR: 4
                },
                eo = {
                    BROWSER_ODP_MANAGER_INITIALIZATION_FAILED: "%s: Error initializing Browser ODP Manager.",
                    CONDITION_EVALUATOR_ERROR: "%s: Error evaluating audience condition of type %s: %s",
                    DATAFILE_AND_SDK_KEY_MISSING: "%s: You must provide at least one of sdkKey or datafile. Cannot start Optimizely",
                    EXPERIMENT_KEY_NOT_IN_DATAFILE: "%s: Experiment key %s is not in datafile.",
                    FEATURE_NOT_IN_DATAFILE: "%s: Feature key %s is not in datafile.",
                    FETCH_SEGMENTS_FAILED_NETWORK_ERROR: "%s: Audience segments fetch failed. (network error)",
                    FETCH_SEGMENTS_FAILED_DECODE_ERROR: "%s: Audience segments fetch failed. (decode error)",
                    IMPROPERLY_FORMATTED_EXPERIMENT: "%s: Experiment key %s is improperly formatted.",
                    INVALID_ATTRIBUTES: "%s: Provided attributes are in an invalid format.",
                    INVALID_BUCKETING_ID: "%s: Unable to generate hash for bucketing ID %s: %s",
                    INVALID_DATAFILE: "%s: Datafile is invalid - property %s: %s",
                    INVALID_DATAFILE_MALFORMED: "%s: Datafile is invalid because it is malformed.",
                    INVALID_CONFIG: "%s: Provided Optimizely config is in an invalid format.",
                    INVALID_JSON: "%s: JSON object is not valid.",
                    INVALID_ERROR_HANDLER: '%s: Provided "errorHandler" is in an invalid format.',
                    INVALID_EVENT_DISPATCHER: '%s: Provided "eventDispatcher" is in an invalid format.',
                    INVALID_EVENT_TAGS: "%s: Provided event tags are in an invalid format.",
                    INVALID_EXPERIMENT_KEY: "%s: Experiment key %s is not in datafile. It is either invalid, paused, or archived.",
                    INVALID_EXPERIMENT_ID: "%s: Experiment ID %s is not in datafile.",
                    INVALID_GROUP_ID: "%s: Group ID %s is not in datafile.",
                    INVALID_LOGGER: '%s: Provided "logger" is in an invalid format.',
                    INVALID_ROLLOUT_ID: "%s: Invalid rollout ID %s attached to feature %s",
                    INVALID_USER_ID: "%s: Provided user ID is in an invalid format.",
                    INVALID_USER_PROFILE_SERVICE: "%s: Provided user profile service instance is in an invalid format: %s.",
                    LOCAL_STORAGE_DOES_NOT_EXIST: "Error accessing window localStorage.",
                    MISSING_INTEGRATION_KEY: "%s: Integration key missing from datafile. All integrations should include a key.",
                    NO_DATAFILE_SPECIFIED: "%s: No datafile specified. Cannot start optimizely.",
                    NO_JSON_PROVIDED: "%s: No JSON object to validate against schema.",
                    NO_VARIATION_FOR_EXPERIMENT_KEY: "%s: No variation key %s defined in datafile for experiment %s.",
                    ODP_CONFIG_NOT_AVAILABLE: "%s: ODP is not integrated to the project.",
                    ODP_EVENT_FAILED: "ODP event send failed.",
                    ODP_FETCH_QUALIFIED_SEGMENTS_SEGMENTS_MANAGER_MISSING: "%s: ODP unable to fetch qualified segments (Segments Manager not initialized).",
                    ODP_IDENTIFY_FAILED_EVENT_MANAGER_MISSING: "%s: ODP identify event %s is not dispatched (Event Manager not instantiated).",
                    ODP_INITIALIZATION_FAILED: "%s: ODP failed to initialize.",
                    ODP_INVALID_DATA: "%s: ODP data is not valid",
                    ODP_EVENT_FAILED_ODP_MANAGER_MISSING: "%s: ODP Event failed to send. (ODP Manager not initialized).",
                    ODP_FETCH_QUALIFIED_SEGMENTS_FAILED_ODP_MANAGER_MISSING: "%s: ODP failed to Fetch Qualified Segments. (ODP Manager not initialized).",
                    ODP_IDENTIFY_USER_FAILED_ODP_MANAGER_MISSING: "%s: ODP failed to Identify User. (ODP Manager not initialized).",
                    ODP_IDENTIFY_USER_FAILED_USER_CONTEXT_INITIALIZATION: "%s: ODP failed to Identify User. (Failed during User Context Initialization).",
                    ODP_MANAGER_UPDATE_SETTINGS_FAILED_EVENT_MANAGER_MISSING: "%s: ODP Manager failed to update OdpConfig settings for internal event manager. (Event Manager not initialized).",
                    ODP_MANAGER_UPDATE_SETTINGS_FAILED_SEGMENTS_MANAGER_MISSING: "%s: ODP Manager failed to update OdpConfig settings for internal segments manager. (Segments Manager not initialized).",
                    ODP_NOT_ENABLED: "ODP is not enabled",
                    ODP_NOT_INTEGRATED: "%s: ODP is not integrated",
                    ODP_SEND_EVENT_FAILED_EVENT_MANAGER_MISSING: "%s: ODP send event %s was not dispatched (Event Manager not instantiated).",
                    ODP_SEND_EVENT_FAILED_UID_MISSING: "%s: ODP send event %s was not dispatched (No valid user identifier provided).",
                    ODP_SEND_EVENT_FAILED_VUID_MISSING: "%s: ODP send event %s was not dispatched (Unable to fetch VUID).",
                    ODP_VUID_INITIALIZATION_FAILED: "%s: ODP VUID initialization failed.",
                    ODP_VUID_REGISTRATION_FAILED: "%s: ODP VUID failed to be registered.",
                    ODP_VUID_REGISTRATION_FAILED_EVENT_MANAGER_MISSING: "%s: ODP register vuid failed. (Event Manager not instantiated).",
                    UNDEFINED_ATTRIBUTE: "%s: Provided attribute: %s has an undefined value.",
                    UNRECOGNIZED_ATTRIBUTE: "%s: Unrecognized attribute %s provided. Pruning before sending event to Optimizely.",
                    UNABLE_TO_CAST_VALUE: "%s: Unable to cast value %s to type %s, returning null.",
                    USER_NOT_IN_FORCED_VARIATION: "%s: User %s is not in the forced variation map. Cannot remove their forced variation.",
                    USER_PROFILE_LOOKUP_ERROR: '%s: Error while looking up user profile for user ID "%s": %s.',
                    USER_PROFILE_SAVE_ERROR: '%s: Error while saving user profile for user ID "%s": %s.',
                    VARIABLE_KEY_NOT_IN_DATAFILE: '%s: Variable with key "%s" associated with feature with key "%s" is not in datafile.',
                    VARIATION_ID_NOT_IN_DATAFILE: "%s: No variation ID %s defined in datafile for experiment %s.",
                    VARIATION_ID_NOT_IN_DATAFILE_NO_EXPERIMENT: "%s: Variation ID %s is not in the datafile.",
                    INVALID_INPUT_FORMAT: "%s: Provided %s is in an invalid format.",
                    INVALID_DATAFILE_VERSION: "%s: This version of the JavaScript SDK does not support the given datafile version: %s",
                    INVALID_VARIATION_KEY: "%s: Provided variation key is in an invalid format."
                },
                es = {
                    ACTIVATE_USER: "%s: Activating user %s in experiment %s.",
                    DISPATCH_CONVERSION_EVENT: "%s: Dispatching conversion event to URL %s with params %s.",
                    DISPATCH_IMPRESSION_EVENT: "%s: Dispatching impression event to URL %s with params %s.",
                    DEPRECATED_EVENT_VALUE: "%s: Event value is deprecated in %s call.",
                    EVENT_KEY_NOT_FOUND: "%s: Event key %s is not in datafile.",
                    EXPERIMENT_NOT_RUNNING: "%s: Experiment %s is not running.",
                    FEATURE_ENABLED_FOR_USER: "%s: Feature %s is enabled for user %s.",
                    FEATURE_NOT_ENABLED_FOR_USER: "%s: Feature %s is not enabled for user %s.",
                    FEATURE_HAS_NO_EXPERIMENTS: "%s: Feature %s is not attached to any experiments.",
                    FAILED_TO_PARSE_VALUE: '%s: Failed to parse event value "%s" from event tags.',
                    FAILED_TO_PARSE_REVENUE: '%s: Failed to parse revenue value "%s" from event tags.',
                    FORCED_BUCKETING_FAILED: "%s: Variation key %s is not in datafile. Not activating user %s.",
                    INVALID_OBJECT: "%s: Optimizely object is not valid. Failing %s.",
                    INVALID_CLIENT_ENGINE: "%s: Invalid client engine passed: %s. Defaulting to node-sdk.",
                    INVALID_DEFAULT_DECIDE_OPTIONS: "%s: Provided default decide options is not an array.",
                    INVALID_DECIDE_OPTIONS: "%s: Provided decide options is not an array. Using default decide options.",
                    INVALID_VARIATION_ID: "%s: Bucketed into an invalid variation ID. Returning null.",
                    NOTIFICATION_LISTENER_EXCEPTION: "%s: Notification listener for (%s) threw exception: %s",
                    NO_ROLLOUT_EXISTS: "%s: There is no rollout of feature %s.",
                    NOT_ACTIVATING_USER: "%s: Not activating user %s for experiment %s.",
                    NOT_TRACKING_USER: "%s: Not tracking user %s.",
                    ODP_DISABLED: "ODP Disabled.",
                    ODP_IDENTIFY_FAILED_ODP_DISABLED: "%s: ODP identify event for user %s is not dispatched (ODP disabled).",
                    ODP_IDENTIFY_FAILED_ODP_NOT_INTEGRATED: "%s: ODP identify event %s is not dispatched (ODP not integrated).",
                    ODP_SEND_EVENT_IDENTIFIER_CONVERSION_FAILED: "%s: sendOdpEvent failed to parse through and convert fs_user_id aliases",
                    PARSED_REVENUE_VALUE: '%s: Parsed revenue value "%s" from event tags.',
                    PARSED_NUMERIC_VALUE: '%s: Parsed event value "%s" from event tags.',
                    RETURNING_STORED_VARIATION: '%s: Returning previously activated variation "%s" of experiment "%s" for user "%s" from user profile.',
                    ROLLOUT_HAS_NO_EXPERIMENTS: "%s: Rollout of feature %s has no experiments",
                    SAVED_VARIATION: '%s: Saved variation "%s" of experiment "%s" for user "%s".',
                    SAVED_VARIATION_NOT_FOUND: "%s: User %s was previously bucketed into variation with ID %s for experiment %s, but no matching variation was found.",
                    SHOULD_NOT_DISPATCH_ACTIVATE: '%s: Experiment %s is not in "Running" state. Not activating user.',
                    SKIPPING_JSON_VALIDATION: "%s: Skipping JSON schema validation.",
                    TRACK_EVENT: "%s: Tracking event %s for user %s.",
                    UNRECOGNIZED_DECIDE_OPTION: "%s: Unrecognized decide option %s provided.",
                    USER_ASSIGNED_TO_EXPERIMENT_BUCKET: "%s: Assigned bucket %s to user with bucketing ID %s.",
                    USER_BUCKETED_INTO_EXPERIMENT_IN_GROUP: "%s: User %s is in experiment %s of group %s.",
                    USER_BUCKETED_INTO_TARGETING_RULE: "%s: User %s bucketed into targeting rule %s.",
                    USER_IN_FEATURE_EXPERIMENT: "%s: User %s is in variation %s of experiment %s on the feature %s.",
                    USER_IN_ROLLOUT: "%s: User %s is in rollout of feature %s.",
                    USER_NOT_BUCKETED_INTO_EVERYONE_TARGETING_RULE: "%s: User %s not bucketed into everyone targeting rule due to traffic allocation.",
                    USER_NOT_BUCKETED_INTO_EXPERIMENT_IN_GROUP: "%s: User %s is not in experiment %s of group %s.",
                    USER_NOT_BUCKETED_INTO_ANY_EXPERIMENT_IN_GROUP: "%s: User %s is not in any experiment of group %s.",
                    USER_NOT_BUCKETED_INTO_TARGETING_RULE: "%s User %s not bucketed into targeting rule %s due to traffic allocation. Trying everyone rule.",
                    USER_NOT_IN_FEATURE_EXPERIMENT: "%s: User %s is not in any experiment on the feature %s.",
                    USER_NOT_IN_ROLLOUT: "%s: User %s is not in rollout of feature %s.",
                    USER_FORCED_IN_VARIATION: "%s: User %s is forced in variation %s.",
                    USER_MAPPED_TO_FORCED_VARIATION: "%s: Set variation %s for experiment %s and user %s in the forced variation map.",
                    USER_DOESNT_MEET_CONDITIONS_FOR_TARGETING_RULE: "%s: User %s does not meet conditions for targeting rule %s.",
                    USER_MEETS_CONDITIONS_FOR_TARGETING_RULE: "%s: User %s meets conditions for targeting rule %s.",
                    USER_HAS_VARIATION: "%s: User %s is in variation %s of experiment %s.",
                    USER_HAS_FORCED_DECISION_WITH_RULE_SPECIFIED: "Variation (%s) is mapped to flag (%s), rule (%s) and user (%s) in the forced decision map.",
                    USER_HAS_FORCED_DECISION_WITH_NO_RULE_SPECIFIED: "Variation (%s) is mapped to flag (%s) and user (%s) in the forced decision map.",
                    USER_HAS_FORCED_DECISION_WITH_RULE_SPECIFIED_BUT_INVALID: "Invalid variation is mapped to flag (%s), rule (%s) and user (%s) in the forced decision map.",
                    USER_HAS_FORCED_DECISION_WITH_NO_RULE_SPECIFIED_BUT_INVALID: "Invalid variation is mapped to flag (%s) and user (%s) in the forced decision map.",
                    USER_HAS_FORCED_VARIATION: "%s: Variation %s is mapped to experiment %s and user %s in the forced variation map.",
                    USER_HAS_NO_VARIATION: "%s: User %s is in no variation of experiment %s.",
                    USER_HAS_NO_FORCED_VARIATION: "%s: User %s is not in the forced variation map.",
                    USER_HAS_NO_FORCED_VARIATION_FOR_EXPERIMENT: "%s: No experiment %s mapped to user %s in the forced variation map.",
                    USER_NOT_IN_ANY_EXPERIMENT: "%s: User %s is not in any experiment of group %s.",
                    USER_NOT_IN_EXPERIMENT: "%s: User %s does not meet conditions to be in experiment %s.",
                    USER_RECEIVED_DEFAULT_VARIABLE_VALUE: '%s: User "%s" is not in any variation or rollout rule. Returning default value for variable "%s" of feature flag "%s".',
                    FEATURE_NOT_ENABLED_RETURN_DEFAULT_VARIABLE_VALUE: '%s: Feature "%s" is not enabled for user %s. Returning the default variable value "%s".',
                    VARIABLE_NOT_USED_RETURN_DEFAULT_VARIABLE_VALUE: '%s: Variable "%s" is not used in variation "%s". Returning default value.',
                    USER_RECEIVED_VARIABLE_VALUE: '%s: Got variable value "%s" for variable "%s" of feature flag "%s"',
                    VALID_DATAFILE: "%s: Datafile is valid.",
                    VALID_USER_PROFILE_SERVICE: "%s: Valid user profile service provided.",
                    VARIATION_REMOVED_FOR_USER: "%s: Variation mapped to experiment %s has been removed for user %s.",
                    VARIABLE_REQUESTED_WITH_WRONG_TYPE: '%s: Requested variable type "%s", but variable is of type "%s". Use correct API to retrieve value. Returning None.',
                    VALID_BUCKETING_ID: '%s: BucketingId is valid: "%s"',
                    BUCKETING_ID_NOT_STRING: "%s: BucketingID attribute is not a string. Defaulted to userId",
                    EVALUATING_AUDIENCE: '%s: Starting to evaluate audience "%s" with conditions: %s.',
                    EVALUATING_AUDIENCES_COMBINED: '%s: Evaluating audiences for %s "%s": %s.',
                    AUDIENCE_EVALUATION_RESULT: '%s: Audience "%s" evaluated to %s.',
                    AUDIENCE_EVALUATION_RESULT_COMBINED: "%s: Audiences for %s %s collectively evaluated to %s.",
                    MISSING_ATTRIBUTE_VALUE: '%s: Audience condition %s evaluated to UNKNOWN because no value was passed for user attribute "%s".',
                    UNEXPECTED_CONDITION_VALUE: "%s: Audience condition %s evaluated to UNKNOWN because the condition value is not supported.",
                    UNEXPECTED_TYPE: '%s: Audience condition %s evaluated to UNKNOWN because a value of type "%s" was passed for user attribute "%s".',
                    UNEXPECTED_TYPE_NULL: '%s: Audience condition %s evaluated to UNKNOWN because a null value was passed for user attribute "%s".',
                    UNKNOWN_CONDITION_TYPE: "%s: Audience condition %s has an unknown condition type. You may need to upgrade to a newer release of the Optimizely SDK.",
                    UNKNOWN_MATCH_TYPE: "%s: Audience condition %s uses an unknown match type. You may need to upgrade to a newer release of the Optimizely SDK.",
                    UPDATED_OPTIMIZELY_CONFIG: "%s: Updated Optimizely config to revision %s (project id %s)",
                    OUT_OF_BOUNDS: '%s: Audience condition %s evaluated to UNKNOWN because the number value for user attribute "%s" is not in the range [-2^53, +2^53].',
                    UNABLE_TO_ATTACH_UNLOAD: '%s: unable to bind optimizely.close() to page unload event: "%s"'
                },
                ea = {
                    BOT_FILTERING: "$opt_bot_filtering",
                    BUCKETING_ID: "$opt_bucketing_id",
                    STICKY_BUCKETING_KEY: "$opt_experiment_bucket_map",
                    USER_AGENT: "$opt_user_agent",
                    FORCED_DECISION_NULL_RULE_KEY: "$opt_null_rule_key"
                },
                eu = "javascript-sdk",
                el = "node-sdk",
                ec = "5.3.4",
                ed = {
                    AB_TEST: "ab-test",
                    FEATURE: "feature",
                    FEATURE_TEST: "feature-test",
                    FEATURE_VARIABLE: "feature-variable",
                    ALL_FEATURE_VARIABLES: "all-feature-variables",
                    FLAG: "flag"
                },
                ep = {
                    FEATURE_TEST: "feature-test",
                    ROLLOUT: "rollout",
                    EXPERIMENT: "experiment"
                },
                ef = {
                    RULE: "rule",
                    EXPERIMENT: "experiment"
                },
                eg = {
                    BOOLEAN: "boolean",
                    DOUBLE: "double",
                    INTEGER: "integer",
                    STRING: "string",
                    JSON: "json"
                },
                eE = {
                    V2: "2",
                    V3: "3",
                    V4: "4"
                },
                eh = {
                    SDK_NOT_READY: "Optimizely SDK not configured properly yet.",
                    FLAG_KEY_INVALID: 'No flag was found for key "%s".',
                    VARIABLE_VALUE_INVALID: 'Variable value for key "%s" is invalid or wrong type.'
                };
            (n = g || (g = {})).ACTIVATE = "ACTIVATE:experiment, user_id,attributes, variation, event", n.DECISION = "DECISION:type, userId, attributes, decisionInfo", n.LOG_EVENT = "LOG_EVENT:logEvent", n.OPTIMIZELY_CONFIG_UPDATE = "OPTIMIZELY_CONFIG_UPDATE", n.TRACK = "TRACK:event_key, user_id, attributes, event_tags, event", (o = E || (E = {})).VUID = "vuid", o.FS_USER_ID = "fs_user_id";
            var eI = "fs-user-id",
                e_ = "fullstack";
            (s = h || (h = {})).IDENTIFIED = "identified", s.INITIALIZED = "client_initialized";
            var ev = Object.freeze({
                    __proto__: null,
                    LOG_LEVEL: en,
                    ERROR_MESSAGES: eo,
                    LOG_MESSAGES: es,
                    CONTROL_ATTRIBUTES: ea,
                    JAVASCRIPT_CLIENT_ENGINE: eu,
                    NODE_CLIENT_ENGINE: el,
                    REACT_CLIENT_ENGINE: "react-sdk",
                    REACT_NATIVE_CLIENT_ENGINE: "react-native-sdk",
                    REACT_NATIVE_JS_CLIENT_ENGINE: "react-native-js-sdk",
                    CLIENT_VERSION: ec,
                    DECISION_NOTIFICATION_TYPES: ed,
                    DECISION_SOURCES: ep,
                    AUDIENCE_EVALUATION_TYPES: ef,
                    FEATURE_VARIABLE_TYPES: eg,
                    DATAFILE_VERSIONS: eE,
                    DECISION_MESSAGES: eh,
                    get NOTIFICATION_TYPES() {
                        return g
                    },
                    REQUEST_TIMEOUT_MS: 6e4,
                    REQUEST_TIMEOUT_ODP_SEGMENTS_MS: 1e4,
                    REQUEST_TIMEOUT_ODP_EVENTS_MS: 1e4,
                    get ODP_USER_KEY() {
                        return E
                    },
                    FS_USER_ID_ALIAS: eI,
                    ODP_DEFAULT_EVENT_TYPE: e_,
                    get ODP_EVENT_ACTION() {
                        return h
                    }
                }),
                ey = W("EventProcessor"),
                eR = W("EventProcessor"),
                eO = function() {
                    function e(e) {
                        var t = e.key,
                            r = e.maxValues;
                        this.LS_KEY = t, this.maxValues = void 0 === r ? 1e3 : r
                    }
                    return e.prototype.get = function(e) {
                        return this.getMap()[e] || null
                    }, e.prototype.set = function(e, t) {
                        var r = this.getMap();
                        r[e] = t, this.replace(r)
                    }, e.prototype.remove = function(e) {
                        var t = this.getMap();
                        delete t[e], this.replace(t)
                    }, e.prototype.values = function() {
                        return x(this.getMap())
                    }, e.prototype.clear = function() {
                        this.replace({})
                    }, e.prototype.replace = function(e) {
                        try {
                            "undefined" != typeof window ? window && window.localStorage && localStorage.setItem(this.LS_KEY, JSON.stringify(e)) : localStorage.setItem(this.LS_KEY, JSON.stringify(e)), this.clean()
                        } catch (e) {
                            eR.error(String(e))
                        }
                    }, e.prototype.clean = function() {
                        var e = this.getMap(),
                            t = Object.keys(e),
                            r = t.length - this.maxValues;
                        if (!(r < 1)) {
                            var i = t.map(function(t) {
                                return {
                                    key: t,
                                    value: e[t]
                                }
                            });
                            i.sort(function(e, t) {
                                return e.value.timestamp - t.value.timestamp
                            });
                            for (var n = 0; n < r; n++) delete e[i[n].key];
                            this.replace(e)
                        }
                    }, e.prototype.getMap = function() {
                        try {
                            var e = "undefined" != typeof window ? window && window.localStorage && localStorage.getItem(this.LS_KEY) : localStorage.getItem(this.LS_KEY);
                            if (e) return JSON.parse(e) || {}
                        } catch (e) {
                            eR.error(e)
                        }
                        return {}
                    }, e
                }(),
                eN = W("EventProcessor"),
                eT = function(e) {
                    function t(t) {
                        var r = t.eventDispatcher;
                        return e.call(this, {
                            eventDispatcher: r,
                            store: new eO({
                                maxValues: 100,
                                key: "fs_optly_pending_events"
                            })
                        }) || this
                    }
                    return S(t, e), t
                }(function() {
                    function e(e) {
                        var t = e.eventDispatcher,
                            r = e.store;
                        this.dispatcher = t, this.store = r
                    }
                    return e.prototype.dispatchEvent = function(e, t) {
                        this.send({
                            uuid: M(),
                            timestamp: new Date().getTime(),
                            request: e
                        }, t)
                    }, e.prototype.sendPendingEvents = function() {
                        var e = this,
                            t = this.store.values();
                        eN.debug("Sending %s pending events from previous page", t.length), t.forEach(function(t) {
                            try {
                                e.send(t, function() {})
                            } catch (e) {
                                eN.debug(String(e))
                            }
                        })
                    }, e.prototype.send = function(e, t) {
                        var r = this;
                        this.store.set(e.uuid, e), this.dispatcher.dispatchEvent(e.request, function(i) {
                            r.store.remove(e.uuid), t(i)
                        })
                    }, e
                }()),
                em = "$opt_bot_filtering",
                eA = function() {
                    function e() {
                        this.reqsInFlightCount = 0, this.reqsCompleteResolvers = []
                    }
                    return e.prototype.trackRequest = function(e) {
                        var t = this;
                        this.reqsInFlightCount++;
                        var r = function() {
                            t.reqsInFlightCount--, 0 === t.reqsInFlightCount && (t.reqsCompleteResolvers.forEach(function(e) {
                                return e()
                            }), t.reqsCompleteResolvers = [])
                        };
                        e.then(r, r)
                    }, e.prototype.onRequestsComplete = function() {
                        var e = this;
                        return new Promise(function(t) {
                            0 === e.reqsInFlightCount ? t() : e.reqsCompleteResolvers.push(t)
                        })
                    }, e
                }(),
                eD = W("LogTierV1EventProcessor"),
                eS = function() {
                    function e(e) {
                        var t, r, i, n, o, s, a = e.dispatcher,
                            u = e.closingDispatcher,
                            l = e.flushInterval,
                            c = void 0 === l ? 3e4 : l,
                            d = e.batchSize,
                            p = void 0 === d ? 10 : d,
                            f = e.notificationCenter;
                        this.dispatcher = a, this.closingDispatcher = u, this.notificationCenter = f, this.requestTracker = new eA, (t = c) <= 0 && (ey.warn("Invalid flushInterval ".concat(t, ", defaulting to ").concat(3e4)), t = 3e4), c = t, (r = Math.floor(r = p)) < 1 && (ey.warn("Invalid batchSize ".concat(r, ", defaulting to ").concat(10)), r = 10), p = r = Math.max(1, r), this.queue = (i = p, n = c, o = this.drainQueue.bind(this, !1), s = this.drainQueue.bind(this, !0), i > 1 ? new ei({
                            flushInterval: n,
                            maxQueueSize: i,
                            sink: o,
                            closingSink: s,
                            batchComparator: $
                        }) : new er({
                            sink: o
                        }))
                    }
                    return e.prototype.drainQueue = function(e, t) {
                        var r = this,
                            i = new Promise(function(i) {
                                if (eD.debug("draining queue with %s events", t.length), 0 === t.length) {
                                    i();
                                    return
                                }
                                var n, o, s, a = {
                                    url: "https://logx.optimizely.com/v1/events",
                                    httpVerb: "POST",
                                    params: (n = [], o = t[0], t.forEach(function(e) {
                                        if ("conversion" === e.type || "impression" === e.type) {
                                            var t, r, i, o, s, a, u, l, c, d, p, f, g, E = (t = {
                                                snapshots: [],
                                                visitor_id: e.user.id,
                                                attributes: []
                                            }, e.user.attributes.forEach(function(e) {
                                                t.attributes.push({
                                                    entity_id: e.entityId,
                                                    key: e.key,
                                                    type: "custom",
                                                    value: e.value
                                                })
                                            }), "boolean" == typeof e.context.botFiltering && t.attributes.push({
                                                entity_id: em,
                                                key: em,
                                                type: "custom",
                                                value: e.context.botFiltering
                                            }), t);
                                            "impression" === e.type ? E.snapshots.push((o = e.layer, s = e.experiment, a = e.variation, u = e.ruleKey, l = e.flagKey, c = e.ruleType, d = e.enabled, {
                                                decisions: [{
                                                    campaign_id: p = o ? o.id : null,
                                                    experiment_id: null !== (r = null == s ? void 0 : s.id) && void 0 !== r ? r : "",
                                                    variation_id: null !== (i = null == a ? void 0 : a.id) && void 0 !== i ? i : "",
                                                    metadata: {
                                                        flag_key: l,
                                                        rule_key: u,
                                                        rule_type: c,
                                                        variation_key: a ? a.key : "",
                                                        enabled: d
                                                    }
                                                }],
                                                events: [{
                                                    entity_id: p,
                                                    timestamp: e.timestamp,
                                                    key: "campaign_activated",
                                                    uuid: e.uuid
                                                }]
                                            })) : "conversion" === e.type && E.snapshots.push((f = U({}, e.tags), delete f.revenue, delete f.value, g = {
                                                entity_id: e.event.id,
                                                key: e.event.key,
                                                timestamp: e.timestamp,
                                                uuid: e.uuid
                                            }, e.tags && (g.tags = e.tags), null != e.value && (g.value = e.value), null != e.revenue && (g.revenue = e.revenue), {
                                                events: [g]
                                            })), n.push(E)
                                        }
                                    }), {
                                        client_name: o.context.clientName,
                                        client_version: o.context.clientVersion,
                                        account_id: o.context.accountId,
                                        project_id: o.context.projectId,
                                        revision: o.context.revision,
                                        anonymize_ip: o.context.anonymizeIP,
                                        enrich_decisions: !0,
                                        visitors: n
                                    })
                                };
                                (e && r.closingDispatcher ? r.closingDispatcher : r.dispatcher).dispatchEvent(a, function() {
                                    i()
                                }), (s = r.notificationCenter) && s.sendNotifications(g.LOG_EVENT, a)
                            });
                        return this.requestTracker.trackRequest(i), i
                    }, e.prototype.process = function(e) {
                        this.queue.enqueue(e)
                    }, e.prototype.stop = function() {
                        try {
                            return this.queue.stop(), this.requestTracker.onRequestsComplete()
                        } catch (e) {
                            eD.error('Error stopping EventProcessor: "%s"', Object(e).message, String(e))
                        }
                        return Promise.resolve()
                    }, e.prototype.start = function() {
                        return L(this, void 0, void 0, function() {
                            return C(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, this.queue.start()];
                                    case 1:
                                        return e.sent(), [2]
                                }
                            })
                        })
                    }, e
                }(),
                eU = "CONFIG_VALIDATOR",
                eL = [eE.V2, eE.V3, eE.V4],
                eC = {
                    validate: function(e) {
                        if ("object" == typeof e && null !== e) {
                            var t = e.errorHandler,
                                r = e.eventDispatcher,
                                i = e.logger;
                            if (t && "function" != typeof t.handleError) throw Error(w(eo.INVALID_ERROR_HANDLER, eU));
                            if (r && "function" != typeof r.dispatchEvent) throw Error(w(eo.INVALID_EVENT_DISPATCHER, eU));
                            if (i && "function" != typeof i.log) throw Error(w(eo.INVALID_LOGGER, eU));
                            return !0
                        }
                        throw Error(w(eo.INVALID_CONFIG, eU))
                    },
                    validateDatafile: function(e) {
                        if (!e) throw Error(w(eo.NO_DATAFILE_SPECIFIED, eU));
                        if ("string" == typeof e) try {
                            e = JSON.parse(e)
                        } catch (e) {
                            throw Error(w(eo.INVALID_DATAFILE_MALFORMED, eU))
                        }
                        if ("object" == typeof e && !Array.isArray(e) && null !== e && -1 === eL.indexOf(e.version)) throw Error(w(eo.INVALID_DATAFILE_VERSION, eU, e.version));
                        return e
                    }
                },
                eb = "POST",
                eV = {
                    dispatchEvent: function(e, t) {
                        var r, i = e.params,
                            n = e.url;
                        e.httpVerb === eb ? ((r = new XMLHttpRequest).open(eb, n, !0), r.setRequestHeader("Content-Type", "application/json"), r.onreadystatechange = function() {
                            if (4 === r.readyState && t && "function" == typeof t) try {
                                t({
                                    statusCode: r.status
                                })
                            } catch (e) {}
                        }, r.send(JSON.stringify(i))) : (n += "?wxhr=true", i && (n += "&" + Object.keys(i).map(function(e) {
                            return encodeURIComponent(e) + "=" + encodeURIComponent(i[e])
                        }).join("&")), (r = new XMLHttpRequest).open("GET", n, !0), r.onreadystatechange = function() {
                            if (4 === r.readyState && t && "function" == typeof t) try {
                                t({
                                    statusCode: r.status
                                })
                            } catch (e) {}
                        }, r.send())
                    }
                },
                eP = {
                    dispatchEvent: function(e, t) {
                        var r = e.params,
                            i = e.url,
                            n = new Blob([JSON.stringify(r)], {
                                type: "application/json"
                            });
                        t({
                            statusCode: navigator.sendBeacon(i, n) ? 200 : 500
                        })
                    }
                },
                eF = function() {
                    function e() {}
                    return e.prototype.log = function() {}, e
                }();

            function eM(e) {
                return new H(e)
            }
            var ek = Object.freeze({
                    __proto__: null,
                    NoOpLogger: eF,
                    createLogger: eM,
                    createNoOpLogger: function() {
                        return new eF
                    }
                }),
                ex = {
                    validateEventBatchSize: function(e) {
                        return !!("number" == typeof e && B.isSafeInteger(e)) && e >= 1
                    },
                    validateEventFlushInterval: function(e) {
                        return !!("number" == typeof e && B.isSafeInteger(e)) && e > 0
                    }
                },
                eG = function() {
                    function e(e) {
                        var t = this;
                        this.logger = e.logger, this.errorHandler = e.errorHandler, this.notificationListeners = {}, x(g).forEach(function(e) {
                            t.notificationListeners[e] = []
                        }), this.listenerId = 1
                    }
                    return e.prototype.addNotificationListener = function(e, t) {
                        try {
                            if (!(x(g).indexOf(e) > -1)) return -1;
                            this.notificationListeners[e] || (this.notificationListeners[e] = []);
                            var r = !1;
                            if ((this.notificationListeners[e] || []).forEach(function(e) {
                                    if (e.callback === t) {
                                        r = !0;
                                        return
                                    }
                                }), r) return -1;
                            this.notificationListeners[e].push({
                                id: this.listenerId,
                                callback: t
                            });
                            var i = this.listenerId;
                            return this.listenerId += 1, i
                        } catch (e) {
                            return this.logger.log(en.ERROR, e.message), this.errorHandler.handleError(e), -1
                        }
                    }, e.prototype.removeNotificationListener = function(e) {
                        var t, r, i = this;
                        try {
                            if (Object.keys(this.notificationListeners).some(function(n) {
                                    return (i.notificationListeners[n] || []).every(function(i, o) {
                                        return i.id !== e || (t = o, r = n, !1)
                                    }), void 0 !== t && void 0 !== r
                                }), void 0 !== t && void 0 !== r) return this.notificationListeners[r].splice(t, 1), !0
                        } catch (e) {
                            this.logger.log(en.ERROR, e.message), this.errorHandler.handleError(e)
                        }
                        return !1
                    }, e.prototype.clearAllNotificationListeners = function() {
                        var e = this;
                        try {
                            x(g).forEach(function(t) {
                                e.notificationListeners[t] = []
                            })
                        } catch (e) {
                            this.logger.log(en.ERROR, e.message), this.errorHandler.handleError(e)
                        }
                    }, e.prototype.clearNotificationListeners = function(e) {
                        try {
                            this.notificationListeners[e] = []
                        } catch (e) {
                            this.logger.log(en.ERROR, e.message), this.errorHandler.handleError(e)
                        }
                    }, e.prototype.sendNotifications = function(e, t) {
                        var r = this;
                        try {
                            (this.notificationListeners[e] || []).forEach(function(i) {
                                var n = i.callback;
                                try {
                                    n(t)
                                } catch (t) {
                                    r.logger.log(en.ERROR, es.NOTIFICATION_LISTENER_EXCEPTION, "NOTIFICATION_CENTER", e, t.message)
                                }
                            })
                        } catch (e) {
                            this.logger.log(en.ERROR, e.message), this.errorHandler.handleError(e)
                        }
                    }, e
                }(),
                ew = {
                    createEventProcessor: function() {
                        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                        return new(eS.bind.apply(eS, b([void 0], e, !1)))
                    }
                };
            (a = I || (I = {})).IGNORE_CACHE = "IGNORE_CACHE", a.RESET_CACHE = "RESET_CACHE", (u = _ || (_ = {})).BOOLEAN = "boolean", u.DOUBLE = "double", u.INTEGER = "integer", u.STRING = "string", u.JSON = "json", (l = v || (v = {})).DISABLE_DECISION_EVENT = "DISABLE_DECISION_EVENT", l.ENABLED_FLAGS_ONLY = "ENABLED_FLAGS_ONLY", l.IGNORE_USER_PROFILE_SERVICE = "IGNORE_USER_PROFILE_SERVICE", l.INCLUDE_REASONS = "INCLUDE_REASONS", l.EXCLUDE_VARIABLES = "EXCLUDE_VARIABLES";
            var eB = "Polling intervals below ".concat(30, " seconds are not recommended."),
                eK = [0, 8, 16, 32, 64, 128, 256, 512],
                ej = W("DatafileManager"),
                eq = function() {
                    function e() {
                        this.listeners = {}, this.listenerId = 1
                    }
                    return e.prototype.on = function(e, t) {
                        var r = this;
                        this.listeners[e] || (this.listeners[e] = {});
                        var i = String(this.listenerId);
                        return this.listenerId++, this.listeners[e][i] = t,
                            function() {
                                r.listeners[e] && delete r.listeners[e][i]
                            }
                    }, e.prototype.emit = function(e, t) {
                        var r = this.listeners[e];
                        r && Object.keys(r).forEach(function(e) {
                            (0, r[e])(t)
                        })
                    }, e.prototype.removeAllListeners = function() {
                        this.listeners = {}
                    }, e
                }(),
                eH = function() {
                    function e() {
                        this.errorCount = 0
                    }
                    return e.prototype.getDelay = function() {
                        return 0 === this.errorCount ? 0 : 1e3 * eK[Math.min(eK.length - 1, this.errorCount)] + Math.round(1e3 * Math.random())
                    }, e.prototype.countError = function() {
                        this.errorCount < eK.length - 1 && this.errorCount++
                    }, e.prototype.reset = function() {
                        this.errorCount = 0
                    }, e
                }(),
                ez = function() {
                    function e() {}
                    return e.getNotificationCenter = function(e, t) {
                        var r;
                        if (void 0 === t && (t = W()), !e) {
                            t.log(f.ERROR, "No SDK key provided to getNotificationCenter.");
                            return
                        }
                        return this._notificationCenters.has(e) ? r = this._notificationCenters.get(e) : (r = new eG({
                            logger: t,
                            errorHandler: {
                                handleError: function() {}
                            }
                        }), this._notificationCenters.set(e, r)), r
                    }, e.removeNotificationCenter = function(e) {
                        if (e) {
                            var t = this._notificationCenters.get(e);
                            t && (t.clearAllNotificationListeners(), this._notificationCenters.delete(e))
                        }
                    }, e._notificationCenters = new Map, e
                }(),
                eX = W("DatafileManager");

            function eY(e) {
                return e >= 200 && e < 400
            }
            var eJ = {
                    get: function() {
                        return Promise.resolve(void 0)
                    },
                    set: function() {
                        return Promise.resolve()
                    },
                    contains: function() {
                        return Promise.resolve(!1)
                    },
                    remove: function() {
                        return Promise.resolve(!1)
                    }
                },
                eW = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return S(t, e), t.prototype.makeGetRequest = function(e, t) {
                        var r;
                        return r = new XMLHttpRequest, {
                            responsePromise: new Promise(function(i, n) {
                                r.open("GET", e, !0),
                                    function(e, t) {
                                        Object.keys(e).forEach(function(r) {
                                            var i = e[r];
                                            t.setRequestHeader(r, i)
                                        })
                                    }(t, r), r.onreadystatechange = function() {
                                        if (4 === r.readyState) {
                                            if (0 === r.status) {
                                                n(Error("Request error"));
                                                return
                                            }
                                            var e = function(e) {
                                                var t = e.getAllResponseHeaders();
                                                if (null === t) return {};
                                                var r = t.split("\r\n"),
                                                    i = {};
                                                return r.forEach(function(e) {
                                                    var t = e.indexOf(": ");
                                                    if (t > -1) {
                                                        var r = e.slice(0, t),
                                                            n = e.slice(t + 2);
                                                        n.length > 0 && (i[r] = n)
                                                    }
                                                }), i
                                            }(r);
                                            i({
                                                statusCode: r.status,
                                                body: r.responseText,
                                                headers: e
                                            })
                                        }
                                    }, r.timeout = 6e4, r.ontimeout = function() {
                                        ej.error("Request timed out")
                                    }, r.send()
                            }),
                            abort: function() {
                                r.abort()
                            }
                        }
                    }, t.prototype.getConfigDefaults = function() {
                        return {
                            autoUpdate: !1
                        }
                    }, t
                }(function() {
                    function e(e) {
                        var t = this,
                            r = U(U({}, this.getConfigDefaults()), e),
                            i = r.datafile,
                            n = r.autoUpdate,
                            o = r.sdkKey,
                            s = r.updateInterval,
                            a = r.urlTemplate,
                            u = r.cache;
                        this.cache = void 0 === u ? eJ : u, this.cacheKey = "opt-datafile-" + o, this.sdkKey = o, this.isReadyPromiseSettled = !1, this.readyPromiseResolver = function() {}, this.readyPromiseRejecter = function() {}, this.readyPromise = new Promise(function(e, r) {
                            t.readyPromiseResolver = e, t.readyPromiseRejecter = r
                        }), i ? (this.currentDatafile = i, o || this.resolveReadyPromise()) : this.currentDatafile = "", this.isStarted = !1, this.datafileUrl = w(void 0 === a ? "https://cdn.optimizely.com/datafiles/%s.json" : a, o), this.emitter = new eq, this.autoUpdate = void 0 !== n && n, this.updateInterval = void 0 === s ? 3e5 : s, this.updateInterval < 3e4 && eX.warn(eB), this.currentTimeout = null, this.currentRequest = null, this.backoffController = new eH, this.syncOnCurrentRequestComplete = !1
                    }
                    return e.prototype.get = function() {
                        return this.currentDatafile
                    }, e.prototype.start = function() {
                        this.isStarted || (eX.debug("Datafile manager started"), this.isStarted = !0, this.backoffController.reset(), this.setDatafileFromCacheIfAvailable(), this.syncDatafile())
                    }, e.prototype.stop = function() {
                        return eX.debug("Datafile manager stopped"), this.isStarted = !1, this.currentTimeout && (clearTimeout(this.currentTimeout), this.currentTimeout = null), this.emitter.removeAllListeners(), this.currentRequest && (this.currentRequest.abort(), this.currentRequest = null), Promise.resolve()
                    }, e.prototype.onReady = function() {
                        return this.readyPromise
                    }, e.prototype.on = function(e, t) {
                        return this.emitter.on(e, t)
                    }, e.prototype.onRequestRejected = function(e) {
                        this.isStarted && (this.backoffController.countError(), e instanceof Error ? eX.error("Error fetching datafile: %s", e.message, e) : "string" == typeof e ? eX.error("Error fetching datafile: %s", e) : eX.error("Error fetching datafile"))
                    }, e.prototype.onRequestResolved = function(e) {
                        if (this.isStarted) {
                            void 0 !== e.statusCode && eY(e.statusCode) ? this.backoffController.reset() : this.backoffController.countError(), this.trySavingLastModified(e.headers);
                            var t, r = this.getNextDatafileFromResponse(e);
                            "" !== r && (eX.info("Updating datafile from response"), this.currentDatafile = r, this.cache.set(this.cacheKey, r), this.isReadyPromiseSettled ? (null === (t = ez.getNotificationCenter(this.sdkKey, eX)) || void 0 === t || t.sendNotifications(g.OPTIMIZELY_CONFIG_UPDATE), this.emitter.emit("update", {
                                datafile: r
                            })) : this.resolveReadyPromise())
                        }
                    }, e.prototype.onRequestComplete = function() {
                        this.isStarted && (this.currentRequest = null, this.isReadyPromiseSettled || this.autoUpdate || this.rejectReadyPromise(Error("Failed to become ready")), this.autoUpdate && this.syncOnCurrentRequestComplete && this.syncDatafile(), this.syncOnCurrentRequestComplete = !1)
                    }, e.prototype.syncDatafile = function() {
                        var e = this,
                            t = {};
                        this.lastResponseLastModified && (t["if-modified-since"] = this.lastResponseLastModified), eX.debug("Making datafile request to url %s with headers: %s", this.datafileUrl, function() {
                            return JSON.stringify(t)
                        }), this.currentRequest = this.makeGetRequest(this.datafileUrl, t);
                        var r = function() {
                            e.onRequestComplete()
                        };
                        this.currentRequest.responsePromise.then(function(t) {
                            e.onRequestResolved(t)
                        }, function(t) {
                            e.onRequestRejected(t)
                        }).then(r, r), this.autoUpdate && this.scheduleNextUpdate()
                    }, e.prototype.resolveReadyPromise = function() {
                        this.readyPromiseResolver(), this.isReadyPromiseSettled = !0
                    }, e.prototype.rejectReadyPromise = function(e) {
                        this.readyPromiseRejecter(e), this.isReadyPromiseSettled = !0
                    }, e.prototype.scheduleNextUpdate = function() {
                        var e = this,
                            t = Math.max(this.backoffController.getDelay(), this.updateInterval);
                        eX.debug("Scheduling sync in %s ms", t), this.currentTimeout = setTimeout(function() {
                            e.currentRequest ? e.syncOnCurrentRequestComplete = !0 : e.syncDatafile()
                        }, t)
                    }, e.prototype.getNextDatafileFromResponse = function(e) {
                        return (eX.debug("Response status code: %s", e.statusCode), void 0 === e.statusCode || 304 === e.statusCode) ? "" : eY(e.statusCode) ? e.body : (eX.error("Datafile fetch request failed with status: ".concat(e.statusCode)), "")
                    }, e.prototype.trySavingLastModified = function(e) {
                        var t = e["last-modified"] || e["Last-Modified"];
                        void 0 !== t && (this.lastResponseLastModified = t, eX.debug("Saved last modified header value from response: %s", this.lastResponseLastModified))
                    }, e.prototype.setDatafileFromCacheIfAvailable = function() {
                        var e = this;
                        this.cache.get(this.cacheKey).then(function(t) {
                            e.isStarted && !e.isReadyPromiseSettled && t && (eX.debug("Using datafile from cache"), e.currentDatafile = t, e.resolveReadyPromise())
                        })
                    }, e
                }()),
                eQ = function() {
                    function e(e, t, r, i) {
                        this.apiKey = e, this.apiHost = t, this.pixelUrl = r, this.segmentsToCheck = i
                    }
                    return e.prototype.equals = function(e) {
                        var t, r;
                        return this.apiHost === e.apiHost && this.apiKey === e.apiKey && this.pixelUrl === e.pixelUrl && (t = this.segmentsToCheck, r = e.segmentsToCheck, t.length === r.length && t.every(function(e, t) {
                            return e === r[t]
                        }))
                    }, e
                }(),
                eZ = "Running",
                e$ = "$opt_",
                e0 = "PROJECT_CONFIG",
                e1 = function(e, t) {
                    void 0 === t && (t = null);
                    var r, i, n, o, s = ((o = P({}, e)).audiences = (e.audiences || []).map(function(e) {
                        return P({}, e)
                    }), o.experiments = (e.experiments || []).map(function(e) {
                        return P({}, e)
                    }), o.featureFlags = (e.featureFlags || []).map(function(e) {
                        return P({}, e)
                    }), o.groups = (e.groups || []).map(function(e) {
                        var t = P({}, e);
                        return t.experiments = (e.experiments || []).map(function(e) {
                            return P({}, e)
                        }), t
                    }), o.rollouts = (e.rollouts || []).map(function(e) {
                        var t = P({}, e);
                        return t.experiments = (e.experiments || []).map(function(e) {
                            return P({}, e)
                        }), t
                    }), o.environmentKey = null !== (i = e.environmentKey) && void 0 !== i ? i : "", o.sdkKey = null !== (n = e.sdkKey) && void 0 !== n ? n : "", o);
                    s.__datafileStr = null === t ? JSON.stringify(e) : t, (s.audiences || []).forEach(function(e) {
                        e.conditions = JSON.parse(e.conditions)
                    }), s.audiencesById = F(s.audiences, "id"), P(s.audiencesById, F(s.typedAudiences, "id")), s.attributeKeyMap = F(s.attributes, "key"), s.eventKeyMap = F(s.events, "key"), s.groupIdMap = F(s.groups, "id"), Object.keys(s.groupIdMap || {}).forEach(function(e) {
                        (s.groupIdMap[e].experiments || []).forEach(function(t) {
                            s.experiments.push(P(t, {
                                groupId: e
                            }))
                        })
                    }), s.rolloutIdMap = F(s.rollouts || [], "id"), x(s.rolloutIdMap || {}).forEach(function(e) {
                        (e.experiments || []).forEach(function(e) {
                            s.experiments.push(e), e.variationKeyMap = F(e.variations, "key")
                        })
                    });
                    var a = new Set;
                    Object.keys(s.audiencesById).map(function(e) {
                        return e2(s.audiencesById[e])
                    }).forEach(function(e) {
                        e.forEach(function(e) {
                            a.add(e)
                        })
                    });
                    var u = Array.from(a),
                        l = !1,
                        c = "",
                        d = "",
                        p = "";
                    return s.integrations && (s.integrationKeyMap = F(s.integrations, "key"), s.integrations.forEach(function(e) {
                        if (!("key" in e)) throw Error(w(eo.MISSING_INTEGRATION_KEY, e0));
                        "odp" === e.key && (l = !0, d = d || e.publicKey || "", c = c || e.host || "", p = p || e.pixelUrl || "")
                    })), l ? s.odpIntegrationConfig = {
                        integrated: !0,
                        odpConfig: new eQ(d, c, p, u)
                    } : s.odpIntegrationConfig = {
                        integrated: !1
                    }, s.experimentKeyMap = F(s.experiments, "key"), s.experimentIdMap = F(s.experiments, "id"), s.variationIdMap = {}, s.variationVariableUsageMap = {}, (s.experiments || []).forEach(function(e) {
                        e.variationKeyMap = F(e.variations, "key"), P(s.variationIdMap, F(e.variations, "id")), x(e.variationKeyMap || {}).forEach(function(e) {
                            e.variables && (s.variationVariableUsageMap[e.id] = F(e.variables, "id"))
                        })
                    }), s.experimentFeatureMap = {}, s.featureKeyMap = F(s.featureFlags || [], "key"), x(s.featureKeyMap || {}).forEach(function(e) {
                        e.variables.forEach(function(e) {
                            e.type === eg.STRING && e.subType === eg.JSON && (e.type = eg.JSON, delete e.subType)
                        }), e.variableKeyMap = F(e.variables, "key"), (e.experimentIds || []).forEach(function(t) {
                            s.experimentFeatureMap[t] ? s.experimentFeatureMap[t].push(e.id) : s.experimentFeatureMap[t] = [e.id]
                        })
                    }), s.flagRulesMap = {}, (s.featureFlags || []).forEach(function(e) {
                        var t = [];
                        e.experimentIds.forEach(function(e) {
                            var r = s.experimentIdMap[e];
                            r && t.push(r)
                        });
                        var r = s.rolloutIdMap[e.rolloutId];
                        r && t.push.apply(t, r.experiments), s.flagRulesMap[e.key] = t
                    }), s.flagVariationsMap = {}, Object.keys(r = s.flagRulesMap || {}).map(function(e) {
                        return [e, r[e]]
                    }).forEach(function(e) {
                        var t = e[0],
                            r = e[1],
                            i = [];
                        r.forEach(function(e) {
                            e.variations.forEach(function(e) {
                                G(i, function(t) {
                                    return t.id === e.id
                                }) || i.push(e)
                            })
                        }), s.flagVariationsMap[t] = i
                    }), s
                },
                e2 = function(e) {
                    return e.conditions ? e4(e.conditions) : []
                },
                e4 = function(e) {
                    var t = [];
                    return ["and", "or", "not"].includes(e) ? [] : (Array.isArray(e) ? e.forEach(function(e) {
                        return t.push.apply(t, e4(e))
                    }) : "qualified" === e.match && t.push(e.value), t)
                },
                e3 = function(e, t) {
                    var r = e.experimentIdMap[t];
                    if (!r) throw Error(w(eo.INVALID_EXPERIMENT_ID, e0, t));
                    return r.layerId
                },
                e6 = function(e, t, r) {
                    var i = e.attributeKeyMap[t],
                        n = 0 === t.indexOf(e$);
                    return i ? (n && r.log(en.WARNING, "Attribute %s unexpectedly has reserved prefix %s; using attribute ID instead of reserved attribute name.", t, e$), i.id) : n ? t : (r.log(en.DEBUG, eo.UNRECOGNIZED_ATTRIBUTE, e0, t), null)
                },
                e5 = function(e, t) {
                    var r = e.eventKeyMap[t];
                    return r ? r.id : null
                },
                e9 = function(e, t) {
                    var r = e.experimentKeyMap[t];
                    if (!r) throw Error(w(eo.INVALID_EXPERIMENT_KEY, e0, t));
                    return r.status
                },
                e8 = function(e, t) {
                    var r = e.experimentIdMap[t];
                    if (!r) throw Error(w(eo.INVALID_EXPERIMENT_ID, e0, t));
                    return r.audienceConditions || r.audienceIds
                },
                e7 = function(e, t) {
                    return e.variationIdMap.hasOwnProperty(t) ? e.variationIdMap[t].key : null
                },
                te = function(e, t, r) {
                    var i = e.experimentKeyMap[t];
                    return i.variationKeyMap.hasOwnProperty(r) ? i.variationKeyMap[r].id : null
                },
                tt = function(e, t) {
                    if (e.experimentKeyMap.hasOwnProperty(t)) {
                        var r = e.experimentKeyMap[t];
                        if (r) return r
                    }
                    throw Error(w(eo.EXPERIMENT_KEY_NOT_IN_DATAFILE, e0, t))
                },
                tr = function(e, t) {
                    var r = e.experimentIdMap[t];
                    if (!r) throw Error(w(eo.INVALID_EXPERIMENT_ID, e0, t));
                    return r.trafficAllocation
                },
                ti = function(e, t, r) {
                    if (e.experimentIdMap.hasOwnProperty(t)) {
                        var i = e.experimentIdMap[t];
                        if (i) return i
                    }
                    return r.log(en.ERROR, eo.INVALID_EXPERIMENT_ID, e0, t), null
                },
                tn = function(e, t, r) {
                    return e && G(e.flagVariationsMap[t], function(e) {
                        return e.key === r
                    }) || null
                },
                to = function(e, t, r) {
                    if (e.featureKeyMap.hasOwnProperty(t)) {
                        var i = e.featureKeyMap[t];
                        if (i) return i
                    }
                    return r.log(en.ERROR, eo.FEATURE_NOT_IN_DATAFILE, e0, t), null
                },
                ts = function(e, t, r, i) {
                    var n = e.featureKeyMap[t];
                    return n ? n.variableKeyMap[r] || (i.log(en.ERROR, eo.VARIABLE_KEY_NOT_IN_DATAFILE, e0, r, t), null) : (i.log(en.ERROR, eo.FEATURE_NOT_IN_DATAFILE, e0, t), null)
                },
                ta = function(e, t, r, i) {
                    if (!t || !r) return null;
                    if (!e.variationVariableUsageMap.hasOwnProperty(r.id)) return i.log(en.ERROR, eo.VARIATION_ID_NOT_IN_DATAFILE_NO_EXPERIMENT, e0, r.id), null;
                    var n = e.variationVariableUsageMap[r.id][t.id];
                    return n ? n.value : null
                },
                tu = function(e, t, r) {
                    var i;
                    switch (t) {
                        case eg.BOOLEAN:
                            "true" !== e && "false" !== e ? (r.log(en.ERROR, eo.UNABLE_TO_CAST_VALUE, e0, e, t), i = null) : i = "true" === e;
                            break;
                        case eg.INTEGER:
                            isNaN(i = parseInt(e, 10)) && (r.log(en.ERROR, eo.UNABLE_TO_CAST_VALUE, e0, e, t), i = null);
                            break;
                        case eg.DOUBLE:
                            isNaN(i = parseFloat(e)) && (r.log(en.ERROR, eo.UNABLE_TO_CAST_VALUE, e0, e, t), i = null);
                            break;
                        case eg.JSON:
                            try {
                                i = JSON.parse(e)
                            } catch (n) {
                                r.log(en.ERROR, eo.UNABLE_TO_CAST_VALUE, e0, e, t), i = null
                            }
                            break;
                        default:
                            i = e
                    }
                    return i
                },
                tl = function(e) {
                    return e.__datafileStr
                },
                tc = function(e) {
                    try {
                        t = eC.validateDatafile(e.datafile)
                    } catch (e) {
                        return {
                            configObj: null,
                            error: e
                        }
                    }
                    if (e.jsonSchemaValidator) try {
                        e.jsonSchemaValidator.validate(t), e.logger.log(en.INFO, es.VALID_DATAFILE, e0)
                    } catch (e) {
                        return {
                            configObj: null,
                            error: e
                        }
                    } else e.logger.log(en.INFO, es.SKIPPING_JSON_VALIDATION, e0);
                    var t, r = [t];
                    return "string" == typeof e.datafile && r.push(e.datafile), {
                        configObj: e1.apply(void 0, r),
                        error: null
                    }
                },
                td = function(e) {
                    return !!e.sendFlagDecisions
                },
                tp = function() {
                    function e(e, t) {
                        void 0 === t && (t = 6e4), this.logger = e, this.timeout = t
                    }
                    return e.prototype.makeRequest = function(e, t, r, i) {
                        var n = this,
                            o = new XMLHttpRequest;
                        return {
                            responsePromise: new Promise(function(s, a) {
                                o.open(r, e, !0), n.setHeadersInXhr(t, o), o.onreadystatechange = function() {
                                    if (o.readyState === XMLHttpRequest.DONE) {
                                        if (0 === o.status) {
                                            a(Error("Request error"));
                                            return
                                        }
                                        var e = n.parseHeadersFromXhr(o);
                                        s({
                                            statusCode: o.status,
                                            body: o.responseText,
                                            headers: e
                                        })
                                    }
                                }, o.timeout = n.timeout, o.ontimeout = function() {
                                    n.logger.log(f.WARNING, "Request timed out")
                                }, o.send(i)
                            }),
                            abort: function() {
                                o.abort()
                            }
                        }
                    }, e.prototype.setHeadersInXhr = function(e, t) {
                        Object.keys(e).forEach(function(r) {
                            var i = e[r];
                            "string" == typeof i && t.setRequestHeader(r, i)
                        })
                    }, e.prototype.parseHeadersFromXhr = function(e) {
                        var t = this,
                            r = e.getAllResponseHeaders();
                        if (null === r) return {};
                        var i = r.split("\r\n"),
                            n = {};
                        return i.forEach(function(e) {
                            try {
                                var r = e.indexOf(": ");
                                if (r > -1) {
                                    var i = e.slice(0, r),
                                        o = e.slice(r + 2);
                                    i && o && (n[i] = o)
                                }
                            } catch (r) {
                                t.logger.log(f.WARNING, "Unable to parse & skipped header item '".concat(e, "'"))
                            }
                        }), n
                    }, e
                }(),
                tf = function(e) {
                    var t = e.browserCallback,
                        r = e.nonBrowserCallback;
                    return "undefined" != typeof window ? t(null == window ? void 0 : window.localStorage) : r()
                },
                tg = function() {
                    function e() {
                        this.logger = W()
                    }
                    return e.prototype.contains = function(e) {
                        return L(this, void 0, void 0, function() {
                            var t = this;
                            return C(this, function(r) {
                                return [2, tf({
                                    browserCallback: function(t) {
                                        return (null == t ? void 0 : t.getItem(e)) !== null
                                    },
                                    nonBrowserCallback: function() {
                                        return t.logger.error(eo.LOCAL_STORAGE_DOES_NOT_EXIST), !1
                                    }
                                })]
                            })
                        })
                    }, e.prototype.get = function(e) {
                        return L(this, void 0, void 0, function() {
                            var t = this;
                            return C(this, function(r) {
                                return [2, tf({
                                    browserCallback: function(t) {
                                        return (null == t ? void 0 : t.getItem(e)) || void 0
                                    },
                                    nonBrowserCallback: function() {
                                        t.logger.error(eo.LOCAL_STORAGE_DOES_NOT_EXIST)
                                    }
                                })]
                            })
                        })
                    }, e.prototype.remove = function(e) {
                        return L(this, void 0, void 0, function() {
                            var t = this;
                            return C(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        return [4, this.contains(e)];
                                    case 1:
                                        if (r.sent()) return tf({
                                            browserCallback: function(t) {
                                                null == t || t.removeItem(e)
                                            },
                                            nonBrowserCallback: function() {
                                                t.logger.error(eo.LOCAL_STORAGE_DOES_NOT_EXIST)
                                            }
                                        }), [2, !0];
                                        return [2, !1]
                                }
                            })
                        })
                    }, e.prototype.set = function(e, t) {
                        return L(this, void 0, void 0, function() {
                            var r = this;
                            return C(this, function(i) {
                                return [2, tf({
                                    browserCallback: function(r) {
                                        null == r || r.setItem(e, t)
                                    },
                                    nonBrowserCallback: function() {
                                        r.logger.error(eo.LOCAL_STORAGE_DOES_NOT_EXIST)
                                    }
                                })]
                            })
                        })
                    }, e
                }(),
                tE = function() {
                    function e(e) {
                        void 0 === e && (e = null), this._value = e, this._time = Date.now()
                    }
                    return Object.defineProperty(e.prototype, "value", {
                        get: function() {
                            return this._value
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(e.prototype, "time", {
                        get: function() {
                            return this._time
                        },
                        enumerable: !1,
                        configurable: !0
                    }), e.prototype.is_stale = function(e) {
                        return !(e <= 0) && Date.now() - this._time >= e
                    }, e
                }(),
                th = function() {
                    function e(e) {
                        var t = e.maxSize,
                            r = e.timeout;
                        this._map = new Map;
                        var i = W();
                        i.debug("Provisioning cache with maxSize of ".concat(t)), i.debug("Provisioning cache with timeout of ".concat(r)), this._maxSize = t, this._timeout = r
                    }
                    return Object.defineProperty(e.prototype, "map", {
                        get: function() {
                            return this._map
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(e.prototype, "maxSize", {
                        get: function() {
                            return this._maxSize
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(e.prototype, "timeout", {
                        get: function() {
                            return this._timeout
                        },
                        enumerable: !1,
                        configurable: !0
                    }), e.prototype.lookup = function(e) {
                        if (this._maxSize <= 0) return null;
                        var t = this._map.get(e);
                        return t ? t.is_stale(this._timeout) ? (this._map.delete(e), null) : (this._map.delete(e), this._map.set(e, t), t.value) : null
                    }, e.prototype.save = function(e) {
                        var t = e.key,
                            r = e.value;
                        if (!(this._maxSize <= 0) && (this._map.get(t) && this._map.delete(t), this._map.set(t, new tE(r)), this._map.size > this._maxSize)) {
                            var i = this._map.keys().next().value;
                            this._map.delete(i)
                        }
                    }, e.prototype.reset = function() {
                        this._maxSize <= 0 || this._map.clear()
                    }, e.prototype.peek = function(e) {
                        if (this._maxSize <= 0) return null;
                        var t, r = this._map.get(e);
                        return null !== (t = null == r ? void 0 : r.value) && void 0 !== t ? t : null
                    }, e
                }(),
                tI = {
                    DEFAULT_CAPACITY: 100,
                    DEFAULT_TIMEOUT_SECS: 600
                },
                t_ = function(e) {
                    function t(t) {
                        var r, i;
                        return e.call(this, {
                            maxSize: null !== (r = null == t ? void 0 : t.maxSize) && void 0 !== r ? r : tI.DEFAULT_CAPACITY,
                            timeout: null !== (i = null == t ? void 0 : t.timeout) && void 0 !== i ? i : 1e3 * tI.DEFAULT_TIMEOUT_SECS
                        }) || this
                    }
                    return S(t, e), t
                }(th),
                tv = {
                    DEFAULT_CAPACITY: 1e4,
                    DEFAULT_TIMEOUT_SECS: 600
                };
            S(function(e) {
                var t, r;
                return c.call(this, {
                    maxSize: null !== (t = null == e ? void 0 : e.maxSize) && void 0 !== t ? t : tv.DEFAULT_CAPACITY,
                    timeout: null !== (r = null == e ? void 0 : e.timeout) && void 0 !== r ? r : 1e3 * tv.DEFAULT_TIMEOUT_SECS
                }) || this
            }, c = th);
            var ty = function() {
                function e() {
                    this._keyForVuid = "optimizely-vuid", this._vuid = ""
                }
                return Object.defineProperty(e.prototype, "vuid", {
                    get: function() {
                        return this._vuid
                    },
                    enumerable: !1,
                    configurable: !0
                }), e.instance = function(t) {
                    return L(this, void 0, void 0, function() {
                        return C(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    if (this._instance || (this._instance = new e), this._instance._vuid) return [3, 2];
                                    return [4, this._instance.load(t)];
                                case 1:
                                    r.sent(), r.label = 2;
                                case 2:
                                    return [2, this._instance]
                            }
                        })
                    })
                }, e.prototype.load = function(t) {
                    return L(this, void 0, void 0, function() {
                        var r;
                        return C(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    return [4, t.get(this._keyForVuid)];
                                case 1:
                                    if (!((r = i.sent()) && e.isVuid(r))) return [3, 2];
                                    return this._vuid = r, [3, 4];
                                case 2:
                                    return this._vuid = this.makeVuid(), [4, this.save(this._vuid, t)];
                                case 3:
                                    i.sent(), i.label = 4;
                                case 4:
                                    return [2, this._vuid]
                            }
                        })
                    })
                }, e.prototype.makeVuid = function() {
                    var t = M().replace(/-/g, "").toLowerCase(),
                        r = "".concat(e.vuid_prefix).concat(t);
                    return r.length <= 32 ? r : r.substring(0, 32)
                }, e.prototype.save = function(e, t) {
                    return L(this, void 0, void 0, function() {
                        return C(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return [4, t.set(this._keyForVuid, e)];
                                case 1:
                                    return r.sent(), [2]
                            }
                        })
                    })
                }, e._reset = function() {
                    this._instance._vuid = ""
                }, e.vuid_prefix = "vuid_", e.isVuid = function(t) {
                    return (null == t ? void 0 : t.startsWith(e.vuid_prefix)) || !1
                }, e
            }();

            function tR(e) {
                var t = ["string", "number", "boolean"],
                    r = !1;
                return e.forEach(function(e) {
                    t.includes(typeof e) || null === e || (r = !0)
                }), r
            }
            var tO = function(e, t, r, i) {
                    this.type = e, this.action = t, this.identifiers = null != r ? r : new Map, this.data = null != i ? i : new Map
                },
                tN = function() {};
            (d = y || (y = {}))[d.Running = 0] = "Running", d[d.Stopped = 1] = "Stopped";
            var tT = function() {
                    function e(e) {
                        var t, r, i, n = e.odpIntegrationConfig,
                            o = e.segmentManager,
                            s = e.eventManager,
                            a = e.logger,
                            u = this;
                        this.ready = !1, this.status = y.Stopped, this.segmentManager = o, this.eventManager = s, this.logger = a, this.configPromise = (t = tN, r = tN, {
                            promise: i = new Promise(function(e, i) {
                                t = e, r = i
                            }),
                            resolve: t,
                            reject: r,
                            then: i.then.bind(i)
                        });
                        var l = [this.configPromise];
                        this.isVuidEnabled() && l.push(this.initializeVuid()), this.initPromise = Promise.all(l), this.onReady().then(function() {
                            u.ready = !0, u.isVuidEnabled() && u.status === y.Running && u.registerVuid()
                        }), n && this.updateSettings(n)
                    }
                    return e.prototype.getStatus = function() {
                        return this.status
                    }, e.prototype.start = function() {
                        return L(this, void 0, void 0, function() {
                            return C(this, function(e) {
                                return this.status === y.Running ? [2] : this.odpIntegrationConfig ? this.odpIntegrationConfig.integrated ? (this.status = y.Running, this.segmentManager.updateSettings(this.odpIntegrationConfig.odpConfig), this.eventManager.updateSettings(this.odpIntegrationConfig.odpConfig), this.eventManager.start(), [2, Promise.resolve()]) : [2, Promise.reject(Error("start() called when ODP is not integrated"))] : [2, Promise.reject(Error("cannot start without ODP config"))]
                            })
                        })
                    }, e.prototype.stop = function() {
                        return L(this, void 0, void 0, function() {
                            return C(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        if (this.status === y.Stopped) return [2];
                                        return this.status = y.Stopped, [4, this.eventManager.stop()];
                                    case 1:
                                        return e.sent(), [2]
                                }
                            })
                        })
                    }, e.prototype.onReady = function() {
                        return this.initPromise
                    }, e.prototype.isReady = function() {
                        return this.ready
                    }, e.prototype.updateSettings = function(e) {
                        var t;
                        return this.configPromise.resolve(), !(this.odpIntegrationConfig && (t = this.odpIntegrationConfig).integrated === e.integrated && (!t.integrated || !e.integrated || t.odpConfig.equals(e.odpConfig))) && (this.odpIntegrationConfig = e, e.integrated ? this.status === y.Running ? (this.segmentManager.updateSettings(e.odpConfig), this.eventManager.updateSettings(e.odpConfig)) : this.start() : this.stop(), !0)
                    }, e.prototype.fetchQualifiedSegments = function(e, t) {
                        return void 0 === t && (t = []), L(this, void 0, void 0, function() {
                            return C(this, function(r) {
                                return this.odpIntegrationConfig ? this.odpIntegrationConfig.integrated ? ty.isVuid(e) ? [2, this.segmentManager.fetchQualifiedSegments(E.VUID, e, t)] : [2, this.segmentManager.fetchQualifiedSegments(E.FS_USER_ID, e, t)] : (this.logger.log(f.ERROR, eo.ODP_NOT_INTEGRATED), [2, null]) : (this.logger.log(f.ERROR, eo.ODP_CONFIG_NOT_AVAILABLE), [2, null])
                            })
                        })
                    }, e.prototype.identifyUser = function(e, t) {
                        if (!this.odpIntegrationConfig) {
                            this.logger.log(f.ERROR, eo.ODP_CONFIG_NOT_AVAILABLE);
                            return
                        }
                        if (!this.odpIntegrationConfig.integrated) {
                            this.logger.log(f.INFO, eo.ODP_NOT_INTEGRATED);
                            return
                        }
                        if (e && ty.isVuid(e)) {
                            this.eventManager.identifyUser(void 0, e);
                            return
                        }
                        this.eventManager.identifyUser(e, t)
                    }, e.prototype.sendEvent = function(e) {
                        var t = e.type,
                            r = e.action,
                            i = e.identifiers,
                            n = e.data,
                            o = t;
                        if (("string" != typeof o || "" === o) && (o = "fullstack"), !this.odpIntegrationConfig) {
                            this.logger.log(f.ERROR, eo.ODP_CONFIG_NOT_AVAILABLE);
                            return
                        }
                        if (!this.odpIntegrationConfig.integrated) {
                            this.logger.log(f.ERROR, eo.ODP_NOT_INTEGRATED);
                            return
                        }
                        if (tR(n)) throw Error(eo.ODP_INVALID_DATA);
                        if ("string" != typeof r || "" === r) throw Error("ODP action is not valid (cannot be empty).");
                        this.eventManager.sendEvent(new tO(o, r, i, n))
                    }, e.prototype.initializeVuid = function() {
                        return Promise.resolve()
                    }, e.prototype.registerVuid = function() {
                        if (!this.odpIntegrationConfig) {
                            this.logger.log(f.ERROR, eo.ODP_CONFIG_NOT_AVAILABLE);
                            return
                        }
                        if (!this.odpIntegrationConfig.integrated) {
                            this.logger.log(f.INFO, eo.ODP_NOT_INTEGRATED);
                            return
                        }
                        var e = this.getVuid();
                        if (e) try {
                            this.eventManager.registerVuid(e)
                        } catch (e) {
                            this.logger.log(f.ERROR, eo.ODP_VUID_REGISTRATION_FAILED)
                        }
                    }, e
                }(),
                tm = "ODP event send failed",
                tA = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return S(t, e), t.prototype.shouldSendEvents = function(e) {
                        return e.length <= 1 || (this.getLogger().log(f.ERROR, "".concat("ODP event send failed", " (browser only supports batch size 1)")), !1)
                    }, t.prototype.getPixelApiEndpoint = function(e) {
                        return new URL("v2/zaius.gif", e.pixelUrl).href
                    }, t.prototype.generateRequestData = function(e, t) {
                        var r = this.getPixelApiEndpoint(e),
                            i = e.apiKey,
                            n = t[0],
                            o = new URL(r);
                        return n.identifiers.forEach(function(e, t) {
                            o.searchParams.append(t, e)
                        }), n.data.forEach(function(e, t) {
                            o.searchParams.append(t, e)
                        }), o.searchParams.append("tracker_id", i), o.searchParams.append("event_type", n.type), o.searchParams.append("vdl_action", n.action), {
                            method: "GET",
                            endpoint: o.toString(),
                            headers: {},
                            data: ""
                        }
                    }, t
                }(function() {
                    function e(e, t) {
                        this.requestHandler = e, this.logger = t
                    }
                    return e.prototype.getLogger = function() {
                        return this.logger
                    }, e.prototype.sendEvents = function(e, t) {
                        var r;
                        return L(this, void 0, void 0, function() {
                            var i, n, o, s, a, u, l, c, d;
                            return C(this, function(p) {
                                switch (p.label) {
                                    case 0:
                                        if (i = !1, 0 === t.length) return this.logger.log(f.ERROR, "".concat(tm, " (no events)")), [2, i];
                                        if (!this.shouldSendEvents(t)) return [2, i];
                                        o = (n = this.generateRequestData(e, t)).method, s = n.endpoint, a = n.headers, u = n.data, l = 0, p.label = 1;
                                    case 1:
                                        return p.trys.push([1, 3, , 4]), [4, this.requestHandler.makeRequest(s, a, o, u).responsePromise];
                                    case 2:
                                        return l = null !== (r = p.sent().statusCode) && void 0 !== r ? r : l, [3, 4];
                                    case 3:
                                        return c = p.sent(), d = "network error", c instanceof Error && (d = c.message), this.logger.log(f.ERROR, "".concat(tm, " (").concat(d, ")")), i = !0, [3, 4];
                                    case 4:
                                        return l >= 400 && this.logger.log(f.ERROR, "".concat(tm, " (").concat(l, ")")), l >= 500 && (i = !0), [2, i]
                                }
                            })
                        })
                    }, e
                }()),
                tD = function(e) {
                    "function" == typeof queueMicrotask ? queueMicrotask(e) : setTimeout(e)
                };
            (p = R || (R = {}))[p.Stopped = 0] = "Stopped", p[p.Running = 1] = "Running";
            var tS = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.hasNecessaryIdentifiers = function(e) {
                            return e.identifiers.size >= 0
                        }, t
                    }
                    return S(t, e), t.prototype.initParams = function(e, t, r) {
                        this.queueSize = t || 100, this.batchSize = 1, this.flushInterval = 0, void 0 !== e && 1 !== e && this.getLogger().log(f.WARNING, "ODP event batch size must be 1 in the browser."), void 0 !== r && 0 !== r && this.getLogger().log(f.WARNING, "ODP event flush interval must be 0 in the browser.")
                    }, t.prototype.discardEventsIfNeeded = function() {
                        this.getLogger().log(f.DEBUG, "ODPConfig not ready. Leaving events in queue.")
                    }, t
                }(function() {
                    function e(e) {
                        var t = e.odpConfig,
                            r = e.apiManager,
                            i = e.logger,
                            n = e.clientEngine,
                            o = e.clientVersion,
                            s = e.queueSize,
                            a = e.batchSize,
                            u = e.flushInterval,
                            l = e.userAgentParser,
                            c = e.retries;
                        if (this.status = R.Stopped, this.queue = [], this.apiManager = r, this.logger = i, this.clientEngine = n, this.clientVersion = o, this.initParams(a, s, u), this.status = R.Stopped, this.userAgentParser = l, this.retries = c || 3, l) {
                            var d = l.parseUserAgentInfo(),
                                p = d.os,
                                f = d.device,
                                g = {
                                    os: p.name,
                                    os_version: p.version,
                                    device_type: f.type,
                                    model: f.model
                                };
                            this.userAgentData = new Map(Object.entries(g).filter(function(e) {
                                e[0];
                                var t = e[1];
                                return null != t && void 0 != t
                            }))
                        }
                        t && this.updateSettings(t)
                    }
                    return e.prototype.updateSettings = function(e) {
                        this.odpConfig && this.odpConfig.equals(e) || (this.flush(), this.odpConfig = e)
                    }, e.prototype.flush = function() {
                        this.processQueue(!0)
                    }, e.prototype.start = function() {
                        if (!this.odpConfig) {
                            this.logger.log(f.ERROR, eo.ODP_CONFIG_NOT_AVAILABLE);
                            return
                        }
                        this.status = R.Running, this.batchSize > 1 && this.setNewTimeout()
                    }, e.prototype.stop = function() {
                        return L(this, void 0, void 0, function() {
                            return C(this, function(e) {
                                return this.logger.log(f.DEBUG, "Stop requested."), this.flush(), this.clearCurrentTimeout(), this.status = R.Stopped, this.logger.log(f.DEBUG, "Stopped. Queue Count: %s", this.queue.length), [2]
                            })
                        })
                    }, e.prototype.registerVuid = function(e) {
                        var t = new Map;
                        t.set(E.VUID, e);
                        var r = new tO(e_, h.INITIALIZED, t);
                        this.sendEvent(r)
                    }, e.prototype.identifyUser = function(e, t) {
                        var r = new Map;
                        if (!e && !t) {
                            this.logger.log(f.ERROR, eo.ODP_SEND_EVENT_FAILED_UID_MISSING);
                            return
                        }
                        t && r.set(E.VUID, t), e && r.set(E.FS_USER_ID, e);
                        var i = new tO(e_, h.IDENTIFIED, r);
                        this.sendEvent(i)
                    }, e.prototype.sendEvent = function(e) {
                        tR(e.data) ? this.logger.log(f.ERROR, "Event data found to be invalid.") : (e.data = this.augmentCommonData(e.data), this.enqueue(e))
                    }, e.prototype.enqueue = function(e) {
                        if (this.status === R.Stopped) {
                            this.logger.log(f.WARNING, "Failed to Process ODP Event. ODPEventManager is not running.");
                            return
                        }
                        if (!this.hasNecessaryIdentifiers(e)) {
                            this.logger.log(f.ERROR, "ODP events should have at least one key-value pair in identifiers.");
                            return
                        }
                        if (this.queue.length >= this.queueSize) {
                            this.logger.log(f.WARNING, "Failed to Process ODP Event. Event Queue full. queueSize = %s.", this.queue.length);
                            return
                        }
                        this.queue.push(e), this.processQueue()
                    }, e.prototype.processQueue = function(e) {
                        if (void 0 === e && (e = !1), this.status === R.Running) {
                            if (e)
                                for (this.clearCurrentTimeout(); this.queueContainsItems();) this.makeAndSend1Batch();
                            else if (this.queueHasBatches())
                                for (this.clearCurrentTimeout(); this.queueHasBatches();) this.makeAndSend1Batch();
                            this.batchSize > 1 && this.setNewTimeout()
                        }
                    }, e.prototype.clearCurrentTimeout = function() {
                        clearTimeout(this.timeoutId), this.timeoutId = void 0
                    }, e.prototype.setNewTimeout = function() {
                        var e = this;
                        void 0 === this.timeoutId && (this.timeoutId = setTimeout(function() {
                            return e.processQueue(!0)
                        }, this.flushInterval))
                    }, e.prototype.makeAndSend1Batch = function() {
                        var e = this;
                        if (this.odpConfig) {
                            var t = this.queue.splice(0, this.batchSize),
                                r = this.odpConfig;
                            t.length > 0 && tD(function() {
                                return L(e, void 0, void 0, function() {
                                    var e, i;
                                    return C(this, function(n) {
                                        switch (n.label) {
                                            case 0:
                                                i = 0, n.label = 1;
                                            case 1:
                                                return [4, this.apiManager.sendEvents(r, t)];
                                            case 2:
                                                e = n.sent(), i += 1, n.label = 3;
                                            case 3:
                                                if (e && i < this.retries) return [3, 1];
                                                n.label = 4;
                                            case 4:
                                                return [2]
                                        }
                                    })
                                })
                            })
                        }
                    }, e.prototype.queueHasBatches = function() {
                        return this.queueContainsItems() && this.queue.length % this.batchSize == 0
                    }, e.prototype.queueContainsItems = function() {
                        return this.queue.length > 0
                    }, e.prototype.augmentCommonData = function(e) {
                        var t = new Map(this.userAgentData);
                        return t.set("idempotence_id", M()), t.set("data_source_type", "sdk"), t.set("data_source", this.clientEngine), t.set("data_source_version", this.clientVersion), e.forEach(function(e, r) {
                            return t.set(r, e)
                        }), t
                    }, e.prototype.getLogger = function() {
                        return this.logger
                    }, e.prototype.getQueue = function() {
                        return this.queue
                    }, e
                }()),
                tU = function() {
                    function e(e, t, r, i) {
                        this.odpConfig = i, this._segmentsCache = e, this.odpSegmentApiManager = t, this.logger = r || W("OdpSegmentManager")
                    }
                    return Object.defineProperty(e.prototype, "segmentsCache", {
                        get: function() {
                            return this._segmentsCache
                        },
                        enumerable: !1,
                        configurable: !0
                    }), e.prototype.fetchQualifiedSegments = function(e, t, r) {
                        return L(this, void 0, void 0, function() {
                            var i, n, o, s, a, u;
                            return C(this, function(l) {
                                switch (l.label) {
                                    case 0:
                                        if (!this.odpConfig) return this.logger.log(f.WARNING, eo.ODP_CONFIG_NOT_AVAILABLE), [2, null];
                                        if (!(i = this.odpConfig.segmentsToCheck) || i.length <= 0) return this.logger.log(f.DEBUG, "No segments are used in the project. Returning an empty list."), [2, []];
                                        if (n = this.makeCacheKey(e, t), o = r.includes(I.IGNORE_CACHE), (s = r.includes(I.RESET_CACHE)) && this.reset(), !o && !s) {
                                            if (a = this._segmentsCache.lookup(n)) return this.logger.log(f.DEBUG, 'ODP cache hit. Returning segments from cache "%s".', n), [2, a];
                                            this.logger.log(f.DEBUG, "ODP cache miss.")
                                        }
                                        return this.logger.log(f.DEBUG, "Making a call to ODP server."), [4, this.odpSegmentApiManager.fetchSegments(this.odpConfig.apiKey, this.odpConfig.apiHost, e, t, i)];
                                    case 1:
                                        return (u = l.sent()) && !o && this._segmentsCache.save({
                                            key: n,
                                            value: u
                                        }), [2, u]
                                }
                            })
                        })
                    }, e.prototype.reset = function() {
                        this._segmentsCache.reset()
                    }, e.prototype.makeCacheKey = function(e, t) {
                        return "".concat(e, "-$-").concat(t)
                    }, e.prototype.updateSettings = function(e) {
                        this.odpConfig = e, this.reset()
                    }, e
                }(),
                tL = {
                    $schema: "http://json-schema.org/draft-04/schema#",
                    title: "Project Config JSON Schema",
                    type: "object",
                    properties: {
                        projectId: {
                            type: "string",
                            required: !0
                        },
                        accountId: {
                            type: "string",
                            required: !0
                        },
                        groups: {
                            type: "array",
                            items: {
                                type: "object",
                                properties: {
                                    id: {
                                        type: "string",
                                        required: !0
                                    },
                                    policy: {
                                        type: "string",
                                        required: !0
                                    },
                                    trafficAllocation: {
                                        type: "array",
                                        items: {
                                            type: "object",
                                            properties: {
                                                entityId: {
                                                    type: "string",
                                                    required: !0
                                                },
                                                endOfRange: {
                                                    type: "integer",
                                                    required: !0
                                                }
                                            }
                                        },
                                        required: !0
                                    },
                                    experiments: {
                                        type: "array",
                                        items: {
                                            type: "object",
                                            properties: {
                                                id: {
                                                    type: "string",
                                                    required: !0
                                                },
                                                key: {
                                                    type: "string",
                                                    required: !0
                                                },
                                                status: {
                                                    type: "string",
                                                    required: !0
                                                },
                                                layerId: {
                                                    type: "string",
                                                    required: !0
                                                },
                                                variations: {
                                                    type: "array",
                                                    items: {
                                                        type: "object",
                                                        properties: {
                                                            id: {
                                                                type: "string",
                                                                required: !0
                                                            },
                                                            key: {
                                                                type: "string",
                                                                required: !0
                                                            }
                                                        }
                                                    },
                                                    required: !0
                                                },
                                                trafficAllocation: {
                                                    type: "array",
                                                    items: {
                                                        type: "object",
                                                        properties: {
                                                            entityId: {
                                                                type: "string",
                                                                required: !0
                                                            },
                                                            endOfRange: {
                                                                type: "integer",
                                                                required: !0
                                                            }
                                                        }
                                                    },
                                                    required: !0
                                                },
                                                audienceIds: {
                                                    type: "array",
                                                    items: {
                                                        type: "string"
                                                    },
                                                    required: !0
                                                },
                                                forcedVariations: {
                                                    type: "object",
                                                    required: !0
                                                }
                                            }
                                        },
                                        required: !0
                                    }
                                }
                            },
                            required: !0
                        },
                        experiments: {
                            type: "array",
                            items: {
                                type: "object",
                                properties: {
                                    id: {
                                        type: "string",
                                        required: !0
                                    },
                                    key: {
                                        type: "string",
                                        required: !0
                                    },
                                    status: {
                                        type: "string",
                                        required: !0
                                    },
                                    layerId: {
                                        type: "string",
                                        required: !0
                                    },
                                    variations: {
                                        type: "array",
                                        items: {
                                            type: "object",
                                            properties: {
                                                id: {
                                                    type: "string",
                                                    required: !0
                                                },
                                                key: {
                                                    type: "string",
                                                    required: !0
                                                }
                                            }
                                        },
                                        required: !0
                                    },
                                    trafficAllocation: {
                                        type: "array",
                                        items: {
                                            type: "object",
                                            properties: {
                                                entityId: {
                                                    type: "string",
                                                    required: !0
                                                },
                                                endOfRange: {
                                                    type: "integer",
                                                    required: !0
                                                }
                                            }
                                        },
                                        required: !0
                                    },
                                    audienceIds: {
                                        type: "array",
                                        items: {
                                            type: "string"
                                        },
                                        required: !0
                                    },
                                    forcedVariations: {
                                        type: "object",
                                        required: !0
                                    }
                                }
                            },
                            required: !0
                        },
                        events: {
                            type: "array",
                            items: {
                                type: "object",
                                properties: {
                                    key: {
                                        type: "string",
                                        required: !0
                                    },
                                    experimentIds: {
                                        type: "array",
                                        items: {
                                            type: "string",
                                            required: !0
                                        }
                                    },
                                    id: {
                                        type: "string",
                                        required: !0
                                    }
                                }
                            },
                            required: !0
                        },
                        audiences: {
                            type: "array",
                            items: {
                                type: "object",
                                properties: {
                                    id: {
                                        type: "string",
                                        required: !0
                                    },
                                    name: {
                                        type: "string",
                                        required: !0
                                    },
                                    conditions: {
                                        type: "string",
                                        required: !0
                                    }
                                }
                            },
                            required: !0
                        },
                        attributes: {
                            type: "array",
                            items: {
                                type: "object",
                                properties: {
                                    id: {
                                        type: "string",
                                        required: !0
                                    },
                                    key: {
                                        type: "string",
                                        required: !0
                                    }
                                }
                            },
                            required: !0
                        },
                        version: {
                            type: "string",
                            required: !0
                        },
                        revision: {
                            type: "string",
                            required: !0
                        },
                        integrations: {
                            type: "array",
                            items: {
                                type: "object",
                                properties: {
                                    key: {
                                        type: "string",
                                        required: !0
                                    },
                                    host: {
                                        type: "string"
                                    },
                                    publicKey: {
                                        type: "string"
                                    },
                                    pixelUrl: {
                                        type: "string"
                                    }
                                }
                            }
                        }
                    }
                },
                tC = {
                    $schema: "https://json-schema.org/draft/2019-09/schema",
                    $id: "https://example.com/example.json",
                    title: "ODP Response Schema",
                    type: "object",
                    required: ["data"],
                    properties: {
                        data: {
                            title: "The data Schema",
                            type: "object",
                            required: ["customer"],
                            properties: {
                                customer: {
                                    title: "The customer Schema",
                                    type: "object",
                                    required: [],
                                    properties: {
                                        audiences: {
                                            title: "The audiences Schema",
                                            type: "object",
                                            required: ["edges"],
                                            properties: {
                                                edges: {
                                                    title: "The edges Schema",
                                                    type: "array",
                                                    items: {
                                                        title: "A Schema",
                                                        type: "object",
                                                        required: ["node"],
                                                        properties: {
                                                            node: {
                                                                title: "The node Schema",
                                                                type: "object",
                                                                required: ["name", "state"],
                                                                properties: {
                                                                    name: {
                                                                        title: "The name Schema",
                                                                        type: "string",
                                                                        examples: ["has_email", "has_email_opted_in"]
                                                                    },
                                                                    state: {
                                                                        title: "The state Schema",
                                                                        type: "string",
                                                                        examples: ["qualified"]
                                                                    }
                                                                },
                                                                examples: []
                                                            }
                                                        },
                                                        examples: []
                                                    },
                                                    examples: []
                                                }
                                            },
                                            examples: []
                                        }
                                    },
                                    examples: []
                                }
                            },
                            examples: []
                        },
                        errors: {
                            title: "The errors Schema",
                            type: "array",
                            default: [],
                            items: {
                                title: "A Schema",
                                type: "object",
                                required: ["message", "locations", "extensions"],
                                properties: {
                                    message: {
                                        title: "The message Schema",
                                        type: "string",
                                        examples: ["Exception while fetching data (/customer) : java.lang.RuntimeException: could not resolve _fs_user_id = asdsdaddddd"]
                                    },
                                    locations: {
                                        title: "The locations Schema",
                                        type: "array",
                                        items: {
                                            title: "A Schema",
                                            type: "object",
                                            required: ["line", "column"],
                                            properties: {
                                                line: {
                                                    title: "The line Schema",
                                                    type: "integer",
                                                    examples: [2]
                                                },
                                                column: {
                                                    title: "The column Schema",
                                                    type: "integer",
                                                    examples: [3]
                                                }
                                            },
                                            examples: []
                                        },
                                        examples: []
                                    },
                                    path: {
                                        title: "The path Schema",
                                        type: "array",
                                        items: {
                                            title: "A Schema",
                                            type: "string",
                                            examples: ["customer"]
                                        },
                                        examples: []
                                    },
                                    extensions: {
                                        title: "The extensions Schema",
                                        type: "object",
                                        required: ["classification"],
                                        properties: {
                                            classification: {
                                                title: "The classification Schema",
                                                type: "string",
                                                examples: ["InvalidIdentifierException"]
                                            }
                                        },
                                        examples: []
                                    }
                                },
                                examples: []
                            },
                            examples: []
                        }
                    },
                    examples: []
                },
                tb = [],
                tV = "Audience segments fetch failed",
                tP = function() {
                    function e(e, t) {
                        this.toGraphQLJson = function(e, t, r) {
                            return b(b(['{"query" : "query {customer', "(".concat(e, ' : \\"').concat(t, '\\") '), "{audiences", "(subset: ["], (null == r ? void 0 : r.map(function(e, t) {
                                return '\\"'.concat(e, '\\"').concat(t < r.length - 1 ? "," : "")
                            })) || "", !0), [']) {edges {node {name state}}}}}"}'], !1).join("")
                        }, this.requestHandler = e, this.logger = t
                    }
                    return e.prototype.fetchSegments = function(e, t, r, i, n) {
                        var o, s, a, u;
                        return L(this, void 0, void 0, function() {
                            var l, c, d, p, g, E, h, I;
                            return C(this, function(_) {
                                switch (_.label) {
                                    case 0:
                                        if (!e || !t) return this.logger.log(f.ERROR, "".concat(tV, " (Parameters apiKey or apiHost invalid)")), [2, null];
                                        if ((null == n ? void 0 : n.length) === 0) return [2, tb];
                                        return l = "".concat(t, "/v3/graphql"), c = this.toGraphQLJson(r, i, n), [4, this.querySegments(e, l, r, i, c)];
                                    case 1:
                                        if (!(d = _.sent())) return this.logger.log(f.ERROR, "".concat(tV, " (network error)")), [2, null];
                                        if (!(p = this.parseSegmentsResponseJson(d))) return this.logger.log(f.ERROR, "".concat(tV, " (decode error)")), [2, null];
                                        if ((null === (o = p.errors) || void 0 === o ? void 0 : o.length) > 0) return E = (g = p.errors[0].extensions).code, h = g.classification, "INVALID_IDENTIFIER_EXCEPTION" == E ? this.logger.log(f.ERROR, "".concat(tV, " (invalid identifier)")) : this.logger.log(f.ERROR, "".concat(tV, " (").concat(h, ")")), [2, null];
                                        if (!(I = null === (u = null === (a = null === (s = null == p ? void 0 : p.data) || void 0 === s ? void 0 : s.customer) || void 0 === a ? void 0 : a.audiences) || void 0 === u ? void 0 : u.edges)) return this.logger.log(f.ERROR, "".concat(tV, " (decode error)")), [2, null];
                                        return [2, I.filter(function(e) {
                                            return "qualified" == e.node.state
                                        }).map(function(e) {
                                            return e.node.name
                                        })]
                                }
                            })
                        })
                    }, e.prototype.querySegments = function(e, t, r, i, n) {
                        return L(this, void 0, void 0, function() {
                            var r, i, o, s;
                            return C(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        r = "POST", i = t, o = {
                                            "Content-Type": "application/json",
                                            "x-api-key": e
                                        }, a.label = 1;
                                    case 1:
                                        return a.trys.push([1, 3, , 4]), [4, this.requestHandler.makeRequest(i, o, r, n).responsePromise];
                                    case 2:
                                        return s = a.sent(), [3, 4];
                                    case 3:
                                        return a.sent(), [2, null];
                                    case 4:
                                        return [2, s.body]
                                }
                            })
                        })
                    }, e.prototype.parseSegmentsResponseJson = function(e) {
                        var t = {};
                        try {
                            t = JSON.parse(e)
                        } catch (e) {
                            return null
                        }
                        return ! function(e, t, r) {
                            void 0 === t && (t = tL), void 0 === r && (r = !0);
                            var i = "".concat("JSON_SCHEMA_VALIDATOR", " (").concat(t.title, ")");
                            if ("object" != typeof e || null === e) throw Error(w(eo.NO_JSON_PROVIDED, i));
                            var n = (0, N.validate)(e, t);
                            if (n.valid) return !0;
                            if (!r) return !1;
                            if (Array.isArray(n.errors)) throw Error(w(eo.INVALID_DATAFILE, i, n.errors[0].property, n.errors[0].message));
                            throw Error(w(eo.INVALID_JSON, i))
                        }(t, tC, !1) ? null : t
                    }, e
                }(),
                tF = function(e) {
                    function t(t) {
                        return e.call(this, t) || this
                    }
                    return S(t, e), t.createInstance = function(e) {
                        var r, i, n, o = e.logger,
                            s = e.odpOptions,
                            a = e.odpIntegrationConfig,
                            u = e.clientEngine,
                            l = e.clientVersion;
                        o = o || W(), u = u || eu, l = l || ec;
                        var c = void 0;
                        return (null == a ? void 0 : a.integrated) && (c = a.odpConfig), r = (null == s ? void 0 : s.segmentsRequestHandler) ? s.segmentsRequestHandler : new tp(o, (null == s ? void 0 : s.segmentsApiTimeout) || 1e4), i = (null == s ? void 0 : s.segmentManager) ? s.segmentManager : new tU((null == s ? void 0 : s.segmentsCache) || new t_({
                            maxSize: null == s ? void 0 : s.segmentsCacheSize,
                            timeout: null == s ? void 0 : s.segmentsCacheTimeout
                        }), new tP(r, o), o, c), n = (null == s ? void 0 : s.eventRequestHandler) ? s.eventRequestHandler : new tp(o, (null == s ? void 0 : s.eventApiTimeout) || 1e4), new t({
                            odpIntegrationConfig: a,
                            segmentManager: i,
                            eventManager: (null == s ? void 0 : s.eventManager) ? s.eventManager : new tS({
                                odpConfig: c,
                                apiManager: new tA(n, o),
                                logger: o,
                                clientEngine: u,
                                clientVersion: l,
                                flushInterval: null == s ? void 0 : s.eventFlushInterval,
                                batchSize: null == s ? void 0 : s.eventBatchSize,
                                queueSize: null == s ? void 0 : s.eventQueueSize,
                                userAgentParser: null == s ? void 0 : s.userAgentParser
                            }),
                            logger: o
                        })
                    }, t.prototype.initializeVuid = function() {
                        return L(this, void 0, void 0, function() {
                            var e;
                            return C(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        return [4, ty.instance(t.cache)];
                                    case 1:
                                        return e = r.sent(), this.vuid = e.vuid, [2]
                                }
                            })
                        })
                    }, t.prototype.identifyUser = function(t, r) {
                        if (t && ty.isVuid(t)) {
                            e.prototype.identifyUser.call(this, void 0, t);
                            return
                        }
                        if (t && r && ty.isVuid(r)) {
                            e.prototype.identifyUser.call(this, t, r);
                            return
                        }
                        e.prototype.identifyUser.call(this, t, r || this.vuid)
                    }, t.prototype.sendEvent = function(t) {
                        var r = t.type,
                            i = t.action,
                            n = t.identifiers,
                            o = t.data,
                            s = new Map(n);
                        if (!n.has(E.VUID)) {
                            if (this.vuid) s.set(E.VUID, this.vuid);
                            else throw Error(eo.ODP_SEND_EVENT_FAILED_VUID_MISSING)
                        }
                        e.prototype.sendEvent.call(this, {
                            type: r,
                            action: i,
                            identifiers: s,
                            data: o
                        })
                    }, t.prototype.isVuidEnabled = function() {
                        return !0
                    }, t.prototype.getVuid = function() {
                        return this.vuid
                    }, t.cache = new tg, t
                }(tT);

            function tM(e, t, r) {
                return {
                    variationKey: null,
                    enabled: !1,
                    variables: {},
                    ruleKey: null,
                    flagKey: e,
                    userContext: t,
                    reasons: r
                }
            }
            var tk = function() {
                    function e(e) {
                        var t, r = e.optimizely,
                            i = e.userId,
                            n = e.attributes,
                            o = e.shouldIdentifyUser,
                            s = this;
                        this._qualifiedSegments = null, this.optimizely = r, this.userId = i, this.attributes = null !== (t = U({}, n)) && void 0 !== t ? t : {}, this.forcedDecisionsMap = {}, (void 0 === o || o) && this.optimizely.onReady().then(function(e) {
                            e.success && s.identifyUser()
                        })
                    }
                    return e.prototype.identifyUser = function() {
                        this.optimizely.identifyUser(this.userId)
                    }, e.prototype.setAttribute = function(e, t) {
                        this.attributes[e] = t
                    }, e.prototype.getUserId = function() {
                        return this.userId
                    }, e.prototype.getAttributes = function() {
                        return U({}, this.attributes)
                    }, e.prototype.getOptimizely = function() {
                        return this.optimizely
                    }, Object.defineProperty(e.prototype, "qualifiedSegments", {
                        get: function() {
                            return this._qualifiedSegments
                        },
                        set: function(e) {
                            this._qualifiedSegments = e
                        },
                        enumerable: !1,
                        configurable: !0
                    }), e.prototype.decide = function(e, t) {
                        return void 0 === t && (t = []), this.optimizely.decide(this.cloneUserContext(), e, t)
                    }, e.prototype.decideForKeys = function(e, t) {
                        return void 0 === t && (t = []), this.optimizely.decideForKeys(this.cloneUserContext(), e, t)
                    }, e.prototype.decideAll = function(e) {
                        return void 0 === e && (e = []), this.optimizely.decideAll(this.cloneUserContext(), e)
                    }, e.prototype.trackEvent = function(e, t) {
                        this.optimizely.track(e, this.userId, this.attributes, t)
                    }, e.prototype.setForcedDecision = function(e, t) {
                        var r, i = e.flagKey,
                            n = null !== (r = e.ruleKey) && void 0 !== r ? r : ea.FORCED_DECISION_NULL_RULE_KEY,
                            o = t.variationKey;
                        return this.forcedDecisionsMap[i] || (this.forcedDecisionsMap[i] = {}), this.forcedDecisionsMap[i][n] = {
                            variationKey: o
                        }, !0
                    }, e.prototype.getForcedDecision = function(e) {
                        return this.findForcedDecision(e)
                    }, e.prototype.removeForcedDecision = function(e) {
                        var t, r = null !== (t = e.ruleKey) && void 0 !== t ? t : ea.FORCED_DECISION_NULL_RULE_KEY,
                            i = e.flagKey,
                            n = !1;
                        return this.forcedDecisionsMap.hasOwnProperty(i) && (this.forcedDecisionsMap[i].hasOwnProperty(r) && (delete this.forcedDecisionsMap[i][r], n = !0), 0 === Object.keys(this.forcedDecisionsMap[i]).length && delete this.forcedDecisionsMap[i]), n
                    }, e.prototype.removeAllForcedDecisions = function() {
                        return this.forcedDecisionsMap = {}, !0
                    }, e.prototype.findForcedDecision = function(e) {
                        var t, r = null !== (t = e.ruleKey) && void 0 !== t ? t : ea.FORCED_DECISION_NULL_RULE_KEY,
                            i = e.flagKey;
                        if (this.forcedDecisionsMap.hasOwnProperty(e.flagKey)) {
                            var n = this.forcedDecisionsMap[i];
                            if (n.hasOwnProperty(r)) return {
                                variationKey: n[r].variationKey
                            }
                        }
                        return null
                    }, e.prototype.cloneUserContext = function() {
                        var t = new e({
                            shouldIdentifyUser: !1,
                            optimizely: this.getOptimizely(),
                            userId: this.getUserId(),
                            attributes: this.getAttributes()
                        });
                        return Object.keys(this.forcedDecisionsMap).length > 0 && (t.forcedDecisionsMap = U({}, this.forcedDecisionsMap)), t._qualifiedSegments = this._qualifiedSegments, t
                    }, e.prototype.fetchQualifiedSegments = function(e) {
                        return L(this, void 0, void 0, function() {
                            var t;
                            return C(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        return [4, this.optimizely.fetchQualifiedSegments(this.userId, e)];
                                    case 1:
                                        return t = r.sent(), this.qualifiedSegments = t, [2, null !== t]
                                }
                            })
                        })
                    }, e.prototype.isQualifiedFor = function(e) {
                        return !!this._qualifiedSegments && this._qualifiedSegments.indexOf(e) > -1
                    }, e
                }(),
                tx = ["and", "or", "not"];

            function tG(e, t) {
                if (Array.isArray(e)) {
                    var r = e[0],
                        i = e.slice(1);
                    switch ("string" == typeof r && -1 === tx.indexOf(r) && (r = "or", i = e), r) {
                        case "and":
                            return function(e, t) {
                                var r = !1;
                                if (Array.isArray(e)) {
                                    for (var i = 0; i < e.length; i++) {
                                        var n = tG(e[i], t);
                                        if (!1 === n) return !1;
                                        null === n && (r = !0)
                                    }
                                    return !r || null
                                }
                                return null
                            }(i, t);
                        case "not":
                            return function(e, t) {
                                if (Array.isArray(e) && e.length > 0) {
                                    var r = tG(e[0], t);
                                    return null === r ? null : !r
                                }
                                return null
                            }(i, t);
                        default:
                            return function(e, t) {
                                var r = !1;
                                if (Array.isArray(e)) {
                                    for (var i = 0; i < e.length; i++) {
                                        var n = tG(e[i], t);
                                        if (!0 === n) return !0;
                                        null === n && (r = !0)
                                    }
                                    return !!r && null
                                }
                                return null
                            }(i, t)
                    }
                }
                return t(e)
            }
            var tw = function() {
                    function e(t, r, i) {
                        this.sdkKey = null !== (n = t.sdkKey) && void 0 !== n ? n : "", this.environmentKey = null !== (o = t.environmentKey) && void 0 !== o ? o : "", this.attributes = t.attributes, this.audiences = e.getAudiences(t), this.events = t.events, this.revision = t.revision;
                        var n, o, s = (t.featureFlags || []).reduce(function(e, t) {
                                return e[t.id] = t.variables, e
                            }, {}),
                            a = e.getVariableIdMap(t),
                            u = e.getExperimentsMap(t, s, a, i),
                            l = u.experimentsMapById,
                            c = u.experimentsMapByKey;
                        this.experimentsMap = c, this.featuresMap = e.getFeaturesMap(t, s, l, a), this.datafile = r
                    }
                    return e.prototype.getDatafile = function() {
                        return this.datafile
                    }, e.getAudiences = function(e) {
                        var t = [],
                            r = [];
                        return (e.typedAudiences || []).forEach(function(e) {
                            t.push({
                                id: e.id,
                                conditions: JSON.stringify(e.conditions),
                                name: e.name
                            }), r.push(e.id)
                        }), (e.audiences || []).forEach(function(e) {
                            -1 === r.indexOf(e.id) && "$opt_dummy_audience" != e.id && t.push({
                                id: e.id,
                                conditions: JSON.stringify(e.conditions),
                                name: e.name
                            })
                        }), t
                    }, e.getSerializedAudiences = function(t, r) {
                        var i = "";
                        if (t) {
                            var n = "";
                            t.forEach(function(t) {
                                var o = "";
                                if (t instanceof Array) o = e.getSerializedAudiences(t, r), o = "(".concat(o, ")");
                                else if (tx.indexOf(t) > -1) n = t.toUpperCase();
                                else {
                                    var s = r[t] ? r[t].name : t;
                                    i || "NOT" === n ? (n = "" === n ? "OR" : n, i = "" === i ? "".concat(n, ' "').concat(r[t].name, '"') : i.concat(" ".concat(n, ' "').concat(s, '"'))) : i = '"'.concat(s, '"')
                                }
                                "" !== o && ("" !== i || "NOT" === n ? (n = "" === n ? "OR" : n, i = "" === i ? "".concat(n, " ").concat(o) : i.concat(" ".concat(n, " ").concat(o))) : i = i.concat(o))
                            })
                        }
                        return i
                    }, e.getExperimentAudiences = function(t, r) {
                        return t.audienceConditions ? e.getSerializedAudiences(t.audienceConditions, r.audiencesById) : ""
                    }, e.mergeFeatureVariables = function(e, t, r, i, n) {
                        var o = (e[r] || []).reduce(function(e, t) {
                            return e[t.key] = {
                                id: t.id,
                                key: t.key,
                                type: t.type,
                                value: t.defaultValue
                            }, e
                        }, {});
                        return (i || []).forEach(function(e) {
                            var r = t[e.id],
                                i = {
                                    id: e.id,
                                    key: r.key,
                                    type: r.type,
                                    value: n ? e.value : r.defaultValue
                                };
                            o[r.key] = i
                        }), o
                    }, e.getVariationsMap = function(t, r, i, n) {
                        return t.reduce(function(t, o) {
                            var s = e.mergeFeatureVariables(r, i, n, o.variables, o.featureEnabled);
                            return t[o.key] = {
                                id: o.id,
                                key: o.key,
                                featureEnabled: o.featureEnabled,
                                variablesMap: s
                            }, t
                        }, {})
                    }, e.getVariableIdMap = function(e) {
                        return (e.featureFlags || []).reduce(function(e, t) {
                            return t.variables.forEach(function(t) {
                                e[t.id] = t
                            }), e
                        }, {})
                    }, e.getDeliveryRules = function(t, r, i, n, o) {
                        return n.map(function(n) {
                            return {
                                id: n.id,
                                key: n.key,
                                audiences: e.getExperimentAudiences(n, t),
                                variationsMap: e.getVariationsMap(n.variations, r, o, i)
                            }
                        })
                    }, e.getRolloutExperimentIds = function(e) {
                        var t = [];
                        return (e || []).forEach(function(e) {
                            e.experiments.forEach(function(e) {
                                t.push(e.id)
                            })
                        }), t
                    }, e.getExperimentsMap = function(t, r, i, n) {
                        var o = this.getRolloutExperimentIds(t.rollouts),
                            s = {},
                            a = {};
                        return (t.experiments || []).forEach(function(u) {
                            if (-1 === o.indexOf(u.id)) {
                                var l = t.experimentFeatureMap[u.id],
                                    c = "";
                                l && l.length > 0 && (c = l[0]);
                                var d = e.getVariationsMap(u.variations, r, i, c.toString()),
                                    p = {
                                        id: u.id,
                                        key: u.key,
                                        audiences: e.getExperimentAudiences(u, t),
                                        variationsMap: d
                                    };
                                s[u.id] = p, a[u.key] && n && n.warn("Duplicate experiment keys found in datafile: ".concat(u.key)), a[u.key] = p
                            }
                        }), {
                            experimentsMapById: s,
                            experimentsMapByKey: a
                        }
                    }, e.getExperimentsKeyMap = function(e) {
                        var t = {};
                        for (var r in e) {
                            var i = e[r];
                            t[i.key] = i
                        }
                        return t
                    }, e.getFeaturesMap = function(t, r, i, n) {
                        var o = {};
                        return t.featureFlags.forEach(function(s) {
                            var a = {},
                                u = [];
                            s.experimentIds.forEach(function(e) {
                                var t = i[e];
                                t && (a[t.key] = t), u.push(i[e])
                            });
                            var l = (s.variables || []).reduce(function(e, t) {
                                    return e[t.key] = {
                                        id: t.id,
                                        key: t.key,
                                        type: t.type,
                                        value: t.defaultValue
                                    }, e
                                }, {}),
                                c = [],
                                d = t.rolloutIdMap[s.rolloutId];
                            d && (c = e.getDeliveryRules(t, r, s.id, d.experiments, n)), o[s.key] = {
                                id: s.id,
                                key: s.key,
                                experimentRules: u,
                                deliveryRules: c,
                                experimentsMap: a,
                                variablesMap: l
                            }
                        }), o
                    }, e
                }(),
                tB = W();

            function tK(e, t) {
                return e instanceof Error ? e.message : t || "Unknown error"
            }
            var tj = function() {
                    function e(e) {
                        this.updateListeners = [], this.configObj = null, this.optimizelyConfigObj = null, this.datafileManager = null;
                        try {
                            if (this.jsonSchemaValidator = e.jsonSchemaValidator, !e.datafile && !e.sdkKey) {
                                var t = Error(w(eo.DATAFILE_AND_SDK_KEY_MISSING, "PROJECT_CONFIG_MANAGER"));
                                this.readyPromise = Promise.resolve({
                                    success: !1,
                                    reason: tK(t)
                                }), tB.error(t);
                                return
                            }
                            var r = null;
                            e.datafile && (r = this.handleNewDatafile(e.datafile)), e.sdkKey && e.datafileManager ? (this.datafileManager = e.datafileManager, this.datafileManager.start(), this.readyPromise = this.datafileManager.onReady().then(this.onDatafileManagerReadyFulfill.bind(this), this.onDatafileManagerReadyReject.bind(this)), this.datafileManager.on("update", this.onDatafileManagerUpdate.bind(this))) : this.configObj ? this.readyPromise = Promise.resolve({
                                success: !0
                            }) : this.readyPromise = Promise.resolve({
                                success: !1,
                                reason: tK(r, "Invalid datafile")
                            })
                        } catch (e) {
                            tB.error(e), this.readyPromise = Promise.resolve({
                                success: !1,
                                reason: tK(e, "Error in initialize")
                            })
                        }
                    }
                    return e.prototype.onDatafileManagerReadyFulfill = function() {
                        if (this.datafileManager) {
                            var e = this.handleNewDatafile(this.datafileManager.get());
                            return e ? {
                                success: !1,
                                reason: tK(e)
                            } : {
                                success: !0
                            }
                        }
                        return {
                            success: !1,
                            reason: tK(null, "Datafile manager is not provided")
                        }
                    }, e.prototype.onDatafileManagerReadyReject = function(e) {
                        return {
                            success: !1,
                            reason: tK(e, "Failed to become ready")
                        }
                    }, e.prototype.onDatafileManagerUpdate = function() {
                        this.datafileManager && this.handleNewDatafile(this.datafileManager.get())
                    }, e.prototype.handleNewDatafile = function(e) {
                        var t = this,
                            r = tc({
                                datafile: e,
                                jsonSchemaValidator: this.jsonSchemaValidator,
                                logger: tB
                            }),
                            i = r.configObj,
                            n = r.error;
                        if (n) tB.error(n);
                        else {
                            var o = this.configObj ? this.configObj.revision : "null";
                            i && o !== i.revision && (this.configObj = i, this.optimizelyConfigObj = null, tD(function() {
                                t.updateListeners.forEach(function(e) {
                                    return e(i)
                                })
                            }))
                        }
                        return n
                    }, e.prototype.getConfig = function() {
                        return this.configObj
                    }, e.prototype.getOptimizelyConfig = function() {
                        if (!this.optimizelyConfigObj && this.configObj) this.optimizelyConfigObj = new tw(this.configObj, tl(this.configObj), tB);
                        return this.optimizelyConfigObj
                    }, e.prototype.onReady = function() {
                        return this.readyPromise
                    }, e.prototype.onUpdate = function(e) {
                        var t = this;
                        return this.updateListeners.push(e),
                            function() {
                                var r = t.updateListeners.indexOf(e);
                                r > -1 && t.updateListeners.splice(r, 1)
                            }
                    }, e.prototype.stop = function() {
                        this.datafileManager && this.datafileManager.stop(), this.updateListeners = []
                    }, e
                }(),
                tq = "BUCKETER",
                tH = function(e) {
                    var t = [],
                        r = e.experimentIdMap[e.experimentId].groupId;
                    if (r) {
                        var i = e.groupIdMap[r];
                        if (!i) throw Error(w(eo.INVALID_GROUP_ID, tq, r));
                        if ("random" === i.policy) {
                            var n = tz(i, e.bucketingId, e.userId, e.logger);
                            if (null === n) return e.logger.log(en.INFO, es.USER_NOT_IN_ANY_EXPERIMENT, tq, e.userId, r), t.push([es.USER_NOT_IN_ANY_EXPERIMENT, tq, e.userId, r]), {
                                result: null,
                                reasons: t
                            };
                            if (n !== e.experimentId) return e.logger.log(en.INFO, es.USER_NOT_BUCKETED_INTO_EXPERIMENT_IN_GROUP, tq, e.userId, e.experimentKey, r), t.push([es.USER_NOT_BUCKETED_INTO_EXPERIMENT_IN_GROUP, tq, e.userId, e.experimentKey, r]), {
                                result: null,
                                reasons: t
                            };
                            e.logger.log(en.INFO, es.USER_BUCKETED_INTO_EXPERIMENT_IN_GROUP, tq, e.userId, e.experimentKey, r), t.push([es.USER_BUCKETED_INTO_EXPERIMENT_IN_GROUP, tq, e.userId, e.experimentKey, r])
                        }
                    }
                    var o = tY("".concat(e.bucketingId).concat(e.experimentId));
                    e.logger.log(en.DEBUG, es.USER_ASSIGNED_TO_EXPERIMENT_BUCKET, tq, o, e.userId), t.push([es.USER_ASSIGNED_TO_EXPERIMENT_BUCKET, tq, o, e.userId]);
                    var s = tX(o, e.trafficAllocationConfig);
                    return null === s || e.variationIdMap[s] ? {
                        result: s,
                        reasons: t
                    } : (s && (e.logger.log(en.WARNING, es.INVALID_VARIATION_ID, tq), t.push([es.INVALID_VARIATION_ID, tq])), {
                        result: null,
                        reasons: t
                    })
                },
                tz = function(e, t, r, i) {
                    var n = tY("".concat(t).concat(e.id));
                    return i.log(en.DEBUG, es.USER_ASSIGNED_TO_EXPERIMENT_BUCKET, tq, n, r), tX(n, e.trafficAllocation)
                },
                tX = function(e, t) {
                    for (var r = 0; r < t.length; r++)
                        if (e < t[r].endOfRange) return t[r].entityId;
                    return null
                },
                tY = function(e) {
                    try {
                        var t = m().v3(e, 1);
                        return Math.floor(t / 4294967296 * 1e4)
                    } catch (t) {
                        throw Error(w(eo.INVALID_BUCKETING_ID, tq, e, t.message))
                    }
                },
                tJ = "SEMANTIC VERSION",
                tW = W();

            function tQ(e) {
                return /^\d+$/.test(e)
            }

            function tZ(e) {
                var t = e.indexOf("-"),
                    r = e.indexOf("+");
                return !(t < 0) && (r < 0 || t < r)
            }

            function t$(e) {
                var t = e.indexOf("-"),
                    r = e.indexOf("+");
                return !(r < 0) && (t < 0 || r < t)
            }

            function t0(e) {
                var t = e,
                    r = "";
                if (/\s/.test(e)) return tW.warn(es.UNKNOWN_MATCH_TYPE, tJ, e), null;
                if (tZ(e) ? (t = e.substring(0, e.indexOf("-")), r = e.substring(e.indexOf("-") + 1)) : t$(e) && (t = e.substring(0, e.indexOf("+")), r = e.substring(e.indexOf("+") + 1)), "string" != typeof t || "string" != typeof r) return null;
                var i = t.split(".").length - 1;
                if (i > 2) return tW.warn(es.UNKNOWN_MATCH_TYPE, tJ, e), null;
                var n = t.split(".");
                if (n.length != i + 1) return tW.warn(es.UNKNOWN_MATCH_TYPE, tJ, e), null;
                for (var o = 0; o < n.length; o++)
                    if (!tQ(n[o])) return tW.warn(es.UNKNOWN_MATCH_TYPE, tJ, e), null;
                return r && n.push(r), n
            }
            var t1 = "CUSTOM_ATTRIBUTE_CONDITION_EVALUATOR",
                t2 = W(),
                t4 = "exact",
                t3 = "exists",
                t6 = "semver_eq",
                t5 = "semver_ge",
                t9 = "semver_gt",
                t8 = "semver_le",
                t7 = "semver_lt",
                re = "substring",
                rt = [t4, t3, "gt", "ge", "lt", "le", re, t6, t7, t8, t9, t5],
                rr = {};

            function ri(e) {
                return "string" == typeof e || "boolean" == typeof e || B.isNumber(e)
            }

            function rn(e, t) {
                var r = t.getAttributes(),
                    i = e.value,
                    n = typeof i,
                    o = e.name,
                    s = r[o],
                    a = typeof s;
                return !ri(i) || B.isNumber(i) && !B.isSafeInteger(i) ? (t2.warn(es.UNEXPECTED_CONDITION_VALUE, t1, JSON.stringify(e)), null) : null === s ? (t2.debug(es.UNEXPECTED_TYPE_NULL, t1, JSON.stringify(e), o), null) : ri(s) && n === a ? B.isNumber(s) && !B.isSafeInteger(s) ? (t2.warn(es.OUT_OF_BOUNDS, t1, JSON.stringify(e), o), null) : i === s : (t2.warn(es.UNEXPECTED_TYPE, t1, JSON.stringify(e), a, o), null)
            }

            function ro(e, t) {
                var r = t.getAttributes(),
                    i = e.name,
                    n = r[i],
                    o = typeof n,
                    s = e.value;
                return null !== s && B.isSafeInteger(s) ? null === n ? (t2.debug(es.UNEXPECTED_TYPE_NULL, t1, JSON.stringify(e), i), !1) : B.isNumber(n) ? !!B.isSafeInteger(n) || (t2.warn(es.OUT_OF_BOUNDS, t1, JSON.stringify(e), i), !1) : (t2.warn(es.UNEXPECTED_TYPE, t1, JSON.stringify(e), o, i), !1) : (t2.warn(es.UNEXPECTED_CONDITION_VALUE, t1, JSON.stringify(e)), !1)
            }

            function rs(e, t) {
                var r = t.getAttributes(),
                    i = e.name,
                    n = r[i],
                    o = e.value;
                return "string" != typeof o ? (t2.warn(es.UNEXPECTED_CONDITION_VALUE, t1, JSON.stringify(e)), null) : null === n ? (t2.debug(es.UNEXPECTED_TYPE_NULL, t1, JSON.stringify(e), i), null) : "string" != typeof n ? (t2.warn(es.UNEXPECTED_TYPE, t1, JSON.stringify(e), typeof n, i), null) : function(e, t) {
                    var r = t0(t),
                        i = t0(e);
                    if (!r || !i) return null;
                    for (var n = r.length, o = 0; o < i.length; o++) {
                        if (n <= o) return tZ(e) || t$(e) ? 1 : -1;
                        if (tQ(r[o])) {
                            var s = parseInt(r[o]),
                                a = parseInt(i[o]);
                            if (s > a) return 1;
                            if (s < a) return -1
                        } else {
                            if (r[o] < i[o]) return tZ(e) && !tZ(t) ? 1 : -1;
                            if (r[o] > i[o]) return !tZ(e) && tZ(t) ? -1 : 1
                        }
                    }
                    return tZ(t) && !tZ(e) ? -1 : 0
                }(o, n)
            }
            rr[t4] = rn, rr[t3] = function(e, t) {
                return null != t.getAttributes()[e.name]
            }, rr.gt = function(e, t) {
                var r = t.getAttributes()[e.name],
                    i = e.value;
                return ro(e, t) && null !== i ? r > i : null
            }, rr.ge = function(e, t) {
                var r = t.getAttributes()[e.name],
                    i = e.value;
                return ro(e, t) && null !== i ? r >= i : null
            }, rr.lt = function(e, t) {
                var r = t.getAttributes()[e.name],
                    i = e.value;
                return ro(e, t) && null !== i ? r < i : null
            }, rr.le = function(e, t) {
                var r = t.getAttributes()[e.name],
                    i = e.value;
                return ro(e, t) && null !== i ? r <= i : null
            }, rr[re] = function(e, t) {
                var r = t.getAttributes(),
                    i = e.name,
                    n = r[e.name],
                    o = e.value;
                return "string" != typeof o ? (t2.warn(es.UNEXPECTED_CONDITION_VALUE, t1, JSON.stringify(e)), null) : null === n ? (t2.debug(es.UNEXPECTED_TYPE_NULL, t1, JSON.stringify(e), i), null) : "string" != typeof n ? (t2.warn(es.UNEXPECTED_TYPE, t1, JSON.stringify(e), typeof n, i), null) : -1 !== n.indexOf(o)
            }, rr[t6] = function(e, t) {
                var r = rs(e, t);
                return null === r ? null : 0 === r
            }, rr[t9] = function(e, t) {
                var r = rs(e, t);
                return null === r ? null : r > 0
            }, rr[t5] = function(e, t) {
                var r = rs(e, t);
                return null === r ? null : r >= 0
            }, rr[t7] = function(e, t) {
                var r = rs(e, t);
                return null === r ? null : r < 0
            }, rr[t8] = function(e, t) {
                var r = rs(e, t);
                return null === r ? null : r <= 0
            };
            var ra = Object.freeze({
                    __proto__: null,
                    evaluate: function(e, t) {
                        var r = t.getAttributes(),
                            i = e.match;
                        if (void 0 !== i && -1 === rt.indexOf(i)) return t2.warn(es.UNKNOWN_MATCH_TYPE, t1, JSON.stringify(e)), null;
                        var n = e.name;
                        return r.hasOwnProperty(n) || i == t3 ? (i && rr[i] || rn)(e, t) : (t2.debug(es.MISSING_ATTRIBUTE_VALUE, t1, JSON.stringify(e), n), null)
                    }
                }),
                ru = W(),
                rl = "qualified",
                rc = [rl],
                rd = {};

            function rp(e, t) {
                return t.isQualifiedFor(e.value)
            }
            rd[rl] = rp;
            var rf = Object.freeze({
                    __proto__: null,
                    evaluate: function(e, t) {
                        var r = e.match;
                        return void 0 !== r && -1 === rc.indexOf(r) ? (ru.warn(es.UNKNOWN_MATCH_TYPE, "ODP_SEGMENT_CONDITION_EVALUATOR", JSON.stringify(e)), null) : (r && rd[r] || rp)(e, t)
                    }
                }),
                rg = W(),
                rE = "AUDIENCE_EVALUATOR",
                rh = function() {
                    function e(e) {
                        this.typeToEvaluatorMap = B.assign({}, e, {
                            custom_attribute: ra,
                            third_party_dimension: rf
                        })
                    }
                    return e.prototype.evaluate = function(e, t, r) {
                        var i = this;
                        return !e || 0 === e.length || !!tG(e, function(e) {
                            var n = t[e];
                            if (n) {
                                rg.log(en.DEBUG, es.EVALUATING_AUDIENCE, rE, e, JSON.stringify(n.conditions));
                                var o = tG(n.conditions, i.evaluateConditionWithUserAttributes.bind(i, r)),
                                    s = null === o ? "UNKNOWN" : o.toString().toUpperCase();
                                return rg.log(en.DEBUG, es.AUDIENCE_EVALUATION_RESULT, rE, e, s), o
                            }
                            return null
                        })
                    }, e.prototype.evaluateConditionWithUserAttributes = function(e, t) {
                        var r = this.typeToEvaluatorMap[t.type];
                        if (!r) return rg.log(en.WARNING, es.UNKNOWN_CONDITION_TYPE, rE, JSON.stringify(t)), null;
                        try {
                            return r.evaluate(t, e)
                        } catch (e) {
                            rg.log(en.ERROR, eo.CONDITION_EVALUATOR_ERROR, rE, t.type, e.message)
                        }
                        return null
                    }, e
                }();

            function rI(e) {
                return "string" == typeof e && "" !== e
            }
            var r_ = "DECISION_SERVICE",
                rv = function() {
                    function e(e) {
                        this.audienceEvaluator = new rh(e.UNSTABLE_conditionEvaluators), this.forcedVariationMap = {}, this.logger = e.logger, this.userProfileService = e.userProfileService || null
                    }
                    return e.prototype.getVariation = function(e, t, r, i) {
                        void 0 === i && (i = {});
                        var n = r.getUserId(),
                            o = r.getAttributes(),
                            s = this.getBucketingId(n, o),
                            a = [],
                            u = t.key;
                        if (!this.checkIfExperimentIsActive(e, u)) return this.logger.log(en.INFO, es.EXPERIMENT_NOT_RUNNING, r_, u), a.push([es.EXPERIMENT_NOT_RUNNING, r_, u]), {
                            result: null,
                            reasons: a
                        };
                        var l = this.getForcedVariation(e, u, n);
                        a.push.apply(a, l.reasons);
                        var c = l.result;
                        if (c) return {
                            result: c,
                            reasons: a
                        };
                        var d = this.getWhitelistedVariation(t, n);
                        a.push.apply(a, d.reasons);
                        var p = d.result;
                        if (p) return {
                            result: p.key,
                            reasons: a
                        };
                        var f = i[v.IGNORE_USER_PROFILE_SERVICE],
                            g = this.resolveExperimentBucketMap(n, o);
                        if (!f && (p = this.getStoredVariation(e, t, n, g))) return this.logger.log(en.INFO, es.RETURNING_STORED_VARIATION, r_, p.key, u, n), a.push([es.RETURNING_STORED_VARIATION, r_, p.key, u, n]), {
                            result: p.key,
                            reasons: a
                        };
                        var E = this.checkIfUserIsInAudience(e, t, ef.EXPERIMENT, r, "");
                        if (a.push.apply(a, E.reasons), !E.result) return this.logger.log(en.INFO, es.USER_NOT_IN_EXPERIMENT, r_, n, u), a.push([es.USER_NOT_IN_EXPERIMENT, r_, n, u]), {
                            result: null,
                            reasons: a
                        };
                        var h = tH(this.buildBucketerParams(e, t, s, n));
                        a.push.apply(a, h.reasons);
                        var I = h.result;
                        return (I && (p = e.variationIdMap[I]), p) ? (this.logger.log(en.INFO, es.USER_HAS_VARIATION, r_, n, p.key, u), a.push([es.USER_HAS_VARIATION, r_, n, p.key, u]), f || this.saveUserProfile(t, p, n, g), {
                            result: p.key,
                            reasons: a
                        }) : (this.logger.log(en.DEBUG, es.USER_HAS_NO_VARIATION, r_, n, u), a.push([es.USER_HAS_NO_VARIATION, r_, n, u]), {
                            result: null,
                            reasons: a
                        })
                    }, e.prototype.resolveExperimentBucketMap = function(e, t) {
                        t = t || {};
                        var r = this.getUserProfile(e) || {},
                            i = t[ea.STICKY_BUCKETING_KEY];
                        return B.assign({}, r.experiment_bucket_map, i)
                    }, e.prototype.checkIfExperimentIsActive = function(e, t) {
                        return e9(e, t) === eZ
                    }, e.prototype.getWhitelistedVariation = function(e, t) {
                        var r = [];
                        if (e.forcedVariations && e.forcedVariations.hasOwnProperty(t)) {
                            var i = e.forcedVariations[t];
                            if (e.variationKeyMap.hasOwnProperty(i)) return this.logger.log(en.INFO, es.USER_FORCED_IN_VARIATION, r_, t, i), r.push([es.USER_FORCED_IN_VARIATION, r_, t, i]), {
                                result: e.variationKeyMap[i],
                                reasons: r
                            };
                            this.logger.log(en.ERROR, es.FORCED_BUCKETING_FAILED, r_, i, t), r.push([es.FORCED_BUCKETING_FAILED, r_, i, t])
                        }
                        return {
                            result: null,
                            reasons: r
                        }
                    }, e.prototype.checkIfUserIsInAudience = function(e, t, r, i, n) {
                        var o = [],
                            s = e8(e, t.id),
                            a = e.audiencesById;
                        this.logger.log(en.DEBUG, es.EVALUATING_AUDIENCES_COMBINED, r_, r, n || t.key, JSON.stringify(s)), o.push([es.EVALUATING_AUDIENCES_COMBINED, r_, r, n || t.key, JSON.stringify(s)]);
                        var u = this.audienceEvaluator.evaluate(s, a, i);
                        return this.logger.log(en.INFO, es.AUDIENCE_EVALUATION_RESULT_COMBINED, r_, r, n || t.key, u.toString().toUpperCase()), o.push([es.AUDIENCE_EVALUATION_RESULT_COMBINED, r_, r, n || t.key, u.toString().toUpperCase()]), {
                            result: u,
                            reasons: o
                        }
                    }, e.prototype.buildBucketerParams = function(e, t, r, i) {
                        return {
                            bucketingId: r,
                            experimentId: t.id,
                            experimentKey: t.key,
                            experimentIdMap: e.experimentIdMap,
                            experimentKeyMap: e.experimentKeyMap,
                            groupIdMap: e.groupIdMap,
                            logger: this.logger,
                            trafficAllocationConfig: tr(e, t.id),
                            userId: i,
                            variationIdMap: e.variationIdMap
                        }
                    }, e.prototype.getStoredVariation = function(e, t, r, i) {
                        if (i.hasOwnProperty(t.id)) {
                            var n = i[t.id],
                                o = n.variation_id;
                            if (e.variationIdMap.hasOwnProperty(o)) return e.variationIdMap[n.variation_id];
                            this.logger.log(en.INFO, es.SAVED_VARIATION_NOT_FOUND, r_, r, o, t.key)
                        }
                        return null
                    }, e.prototype.getUserProfile = function(e) {
                        if (!this.userProfileService) return {
                            user_id: e,
                            experiment_bucket_map: {}
                        };
                        try {
                            return this.userProfileService.lookup(e)
                        } catch (t) {
                            this.logger.log(en.ERROR, eo.USER_PROFILE_LOOKUP_ERROR, r_, e, t.message)
                        }
                        return null
                    }, e.prototype.saveUserProfile = function(e, t, r, i) {
                        if (this.userProfileService) try {
                            i[e.id] = {
                                variation_id: t.id
                            }, this.userProfileService.save({
                                user_id: r,
                                experiment_bucket_map: i
                            }), this.logger.log(en.INFO, es.SAVED_VARIATION, r_, t.key, e.key, r)
                        } catch (e) {
                            this.logger.log(en.ERROR, eo.USER_PROFILE_SAVE_ERROR, r_, r, e.message)
                        }
                    }, e.prototype.getVariationForFeature = function(e, t, r, i) {
                        void 0 === i && (i = {});
                        var n = [],
                            o = this.getVariationForFeatureExperiment(e, t, r, i);
                        n.push.apply(n, o.reasons);
                        var s = o.result;
                        if (null !== s.variation) return {
                            result: s,
                            reasons: n
                        };
                        var a = this.getVariationForRollout(e, t, r);
                        n.push.apply(n, a.reasons);
                        var u = a.result,
                            l = r.getUserId();
                        return u.variation ? (this.logger.log(en.DEBUG, es.USER_IN_ROLLOUT, r_, l, t.key), n.push([es.USER_IN_ROLLOUT, r_, l, t.key])) : (this.logger.log(en.DEBUG, es.USER_NOT_IN_ROLLOUT, r_, l, t.key), n.push([es.USER_NOT_IN_ROLLOUT, r_, l, t.key])), {
                            result: u,
                            reasons: n
                        }
                    }, e.prototype.getVariationForFeatureExperiment = function(e, t, r, i) {
                        void 0 === i && (i = {});
                        var n, o, s = [],
                            a = null;
                        if (t.experimentIds.length > 0)
                            for (o = 0; o < t.experimentIds.length; o++) {
                                var u = ti(e, t.experimentIds[o], this.logger);
                                if (u && (n = this.getVariationFromExperimentRule(e, t.key, u, r, i), s.push.apply(s, n.reasons), a = n.result)) {
                                    var l = null;
                                    return (l = u.variationKeyMap[a]) || (l = tn(e, t.key, a)), {
                                        result: {
                                            experiment: u,
                                            variation: l,
                                            decisionSource: ep.FEATURE_TEST
                                        },
                                        reasons: s
                                    }
                                }
                            } else this.logger.log(en.DEBUG, es.FEATURE_HAS_NO_EXPERIMENTS, r_, t.key), s.push([es.FEATURE_HAS_NO_EXPERIMENTS, r_, t.key]);
                        return {
                            result: {
                                experiment: null,
                                variation: null,
                                decisionSource: ep.FEATURE_TEST
                            },
                            reasons: s
                        }
                    }, e.prototype.getVariationForRollout = function(e, t, r) {
                        var i, n, o, s = [];
                        if (!t.rolloutId) return this.logger.log(en.DEBUG, es.NO_ROLLOUT_EXISTS, r_, t.key), s.push([es.NO_ROLLOUT_EXISTS, r_, t.key]), {
                            result: {
                                experiment: null,
                                variation: null,
                                decisionSource: ep.ROLLOUT
                            },
                            reasons: s
                        };
                        var a = e.rolloutIdMap[t.rolloutId];
                        if (!a) return this.logger.log(en.ERROR, eo.INVALID_ROLLOUT_ID, r_, t.rolloutId, t.key), s.push([eo.INVALID_ROLLOUT_ID, r_, t.rolloutId, t.key]), {
                            result: {
                                experiment: null,
                                variation: null,
                                decisionSource: ep.ROLLOUT
                            },
                            reasons: s
                        };
                        var u = a.experiments;
                        if (0 === u.length) return this.logger.log(en.ERROR, es.ROLLOUT_HAS_NO_EXPERIMENTS, r_, t.rolloutId), s.push([es.ROLLOUT_HAS_NO_EXPERIMENTS, r_, t.rolloutId]), {
                            result: {
                                experiment: null,
                                variation: null,
                                decisionSource: ep.ROLLOUT
                            },
                            reasons: s
                        };
                        for (var l = 0; l < u.length;) {
                            if (i = this.getVariationFromDeliveryRule(e, t.key, u, l, r), s.push.apply(s, i.reasons), o = i.result, n = i.skipToEveryoneElse, o) return {
                                result: {
                                    experiment: e.experimentIdMap[u[l].id],
                                    variation: o,
                                    decisionSource: ep.ROLLOUT
                                },
                                reasons: s
                            };
                            l = n ? u.length - 1 : l + 1
                        }
                        return {
                            result: {
                                experiment: null,
                                variation: null,
                                decisionSource: ep.ROLLOUT
                            },
                            reasons: s
                        }
                    }, e.prototype.getBucketingId = function(e, t) {
                        var r = e;
                        return null != t && "object" == typeof t && t.hasOwnProperty(ea.BUCKETING_ID) && ("string" == typeof t[ea.BUCKETING_ID] ? (r = String(t[ea.BUCKETING_ID]), this.logger.log(en.DEBUG, es.VALID_BUCKETING_ID, r_, r)) : this.logger.log(en.WARNING, es.BUCKETING_ID_NOT_STRING, r_)), r
                    }, e.prototype.findValidatedForcedDecision = function(e, t, r, i) {
                        var n, o = [],
                            s = t.getForcedDecision({
                                flagKey: r,
                                ruleKey: i
                            }),
                            a = null,
                            u = t.getUserId();
                        return e && s && ((a = tn(e, r, n = s.variationKey)) ? i ? (this.logger.log(en.INFO, es.USER_HAS_FORCED_DECISION_WITH_RULE_SPECIFIED, n, r, i, u), o.push([es.USER_HAS_FORCED_DECISION_WITH_RULE_SPECIFIED, n, r, i, u])) : (this.logger.log(en.INFO, es.USER_HAS_FORCED_DECISION_WITH_NO_RULE_SPECIFIED, n, r, u), o.push([es.USER_HAS_FORCED_DECISION_WITH_NO_RULE_SPECIFIED, n, r, u])) : i ? (this.logger.log(en.INFO, es.USER_HAS_FORCED_DECISION_WITH_RULE_SPECIFIED_BUT_INVALID, r, i, u), o.push([es.USER_HAS_FORCED_DECISION_WITH_RULE_SPECIFIED_BUT_INVALID, r, i, u])) : (this.logger.log(en.INFO, es.USER_HAS_FORCED_DECISION_WITH_NO_RULE_SPECIFIED_BUT_INVALID, r, u), o.push([es.USER_HAS_FORCED_DECISION_WITH_NO_RULE_SPECIFIED_BUT_INVALID, r, u]))), {
                            result: a,
                            reasons: o
                        }
                    }, e.prototype.removeForcedVariation = function(e, t, r) {
                        if (!e) throw Error(w(eo.INVALID_USER_ID, r_));
                        if (this.forcedVariationMap.hasOwnProperty(e)) delete this.forcedVariationMap[e][t], this.logger.log(en.DEBUG, es.VARIATION_REMOVED_FOR_USER, r_, r, e);
                        else throw Error(w(eo.USER_NOT_IN_FORCED_VARIATION, r_, e))
                    }, e.prototype.setInForcedVariationMap = function(e, t, r) {
                        this.forcedVariationMap.hasOwnProperty(e) || (this.forcedVariationMap[e] = {}), this.forcedVariationMap[e][t] = r, this.logger.log(en.DEBUG, es.USER_MAPPED_TO_FORCED_VARIATION, r_, r, t, e)
                    }, e.prototype.getForcedVariation = function(e, t, r) {
                        var i, n = [],
                            o = this.forcedVariationMap[r];
                        if (!o) return this.logger.log(en.DEBUG, es.USER_HAS_NO_FORCED_VARIATION, r_, r), {
                            result: null,
                            reasons: n
                        };
                        try {
                            var s = tt(e, t);
                            if (!s.hasOwnProperty("id")) return this.logger.log(en.ERROR, eo.IMPROPERLY_FORMATTED_EXPERIMENT, r_, t), n.push([eo.IMPROPERLY_FORMATTED_EXPERIMENT, r_, t]), {
                                result: null,
                                reasons: n
                            };
                            i = s.id
                        } catch (e) {
                            return this.logger.log(en.ERROR, e.message), n.push(e.message), {
                                result: null,
                                reasons: n
                            }
                        }
                        var a = o[i];
                        if (!a) return this.logger.log(en.DEBUG, es.USER_HAS_NO_FORCED_VARIATION_FOR_EXPERIMENT, r_, t, r), {
                            result: null,
                            reasons: n
                        };
                        var u = e7(e, a);
                        return u ? (this.logger.log(en.DEBUG, es.USER_HAS_FORCED_VARIATION, r_, u, t, r), n.push([es.USER_HAS_FORCED_VARIATION, r_, u, t, r])) : this.logger.log(en.DEBUG, es.USER_HAS_NO_FORCED_VARIATION_FOR_EXPERIMENT, r_, t, r), {
                            result: u,
                            reasons: n
                        }
                    }, e.prototype.setForcedVariation = function(e, t, r, i) {
                        if (null != i && !rI(i)) return this.logger.log(en.ERROR, eo.INVALID_VARIATION_KEY, r_), !1;
                        try {
                            var n, o = tt(e, t);
                            if (!o.hasOwnProperty("id")) return this.logger.log(en.ERROR, eo.IMPROPERLY_FORMATTED_EXPERIMENT, r_, t), !1;
                            n = o.id
                        } catch (e) {
                            return this.logger.log(en.ERROR, e.message), !1
                        }
                        if (null == i) try {
                            return this.removeForcedVariation(r, n, t), !0
                        } catch (e) {
                            return this.logger.log(en.ERROR, e.message), !1
                        }
                        var s = te(e, t, i);
                        if (!s) return this.logger.log(en.ERROR, eo.NO_VARIATION_FOR_EXPERIMENT_KEY, r_, i, t), !1;
                        try {
                            return this.setInForcedVariationMap(r, n, s), !0
                        } catch (e) {
                            return this.logger.log(en.ERROR, e.message), !1
                        }
                    }, e.prototype.getVariationFromExperimentRule = function(e, t, r, i, n) {
                        void 0 === n && (n = {});
                        var o = [],
                            s = this.findValidatedForcedDecision(e, i, t, r.key);
                        o.push.apply(o, s.reasons);
                        var a = s.result;
                        if (a) return {
                            result: a.key,
                            reasons: o
                        };
                        var u = this.getVariation(e, r, i, n);
                        return o.push.apply(o, u.reasons), {
                            result: u.result,
                            reasons: o
                        }
                    }, e.prototype.getVariationFromDeliveryRule = function(e, t, r, i, n) {
                        var o, s, a = [],
                            u = !1,
                            l = r[i],
                            c = this.findValidatedForcedDecision(e, n, t, l.key);
                        a.push.apply(a, c.reasons);
                        var d = c.result;
                        if (d) return {
                            result: d,
                            reasons: a,
                            skipToEveryoneElse: u
                        };
                        var p = n.getUserId(),
                            f = n.getAttributes(),
                            g = this.getBucketingId(p, f),
                            E = i === r.length - 1,
                            h = E ? "Everyone Else" : i + 1,
                            I = null,
                            _ = this.checkIfUserIsInAudience(e, l, ef.RULE, n, h);
                        return (a.push.apply(a, _.reasons), _.result) ? (this.logger.log(en.DEBUG, es.USER_MEETS_CONDITIONS_FOR_TARGETING_RULE, r_, p, h), a.push([es.USER_MEETS_CONDITIONS_FOR_TARGETING_RULE, r_, p, h]), s = tH(this.buildBucketerParams(e, l, g, p)), a.push.apply(a, s.reasons), (o = s.result) && (I = e.variationIdMap.hasOwnProperty(o) ? e.variationIdMap[o] : null), I ? (this.logger.log(en.DEBUG, es.USER_BUCKETED_INTO_TARGETING_RULE, r_, p, h), a.push([es.USER_BUCKETED_INTO_TARGETING_RULE, r_, p, h])) : E || (this.logger.log(en.DEBUG, es.USER_NOT_BUCKETED_INTO_TARGETING_RULE, r_, p, h), a.push([es.USER_NOT_BUCKETED_INTO_TARGETING_RULE, r_, p, h]), u = !0)) : (this.logger.log(en.DEBUG, es.USER_DOESNT_MEET_CONDITIONS_FOR_TARGETING_RULE, r_, p, h), a.push([es.USER_DOESNT_MEET_CONDITIONS_FOR_TARGETING_RULE, r_, p, h])), {
                            result: I,
                            reasons: a,
                            skipToEveryoneElse: u
                        }
                    }, e
                }(),
                ry = "EVENT_TAG_UTILS";

            function rR(e, t) {
                var r = e.revenue;
                if (null == r) return null;
                var i = "string" == typeof r ? parseInt(r) : r;
                return isFinite(i) ? (t.log(en.INFO, es.PARSED_REVENUE_VALUE, ry, i), i) : (t.log(en.INFO, es.FAILED_TO_PARSE_REVENUE, ry, r), null)
            }

            function rO(e, t) {
                var r = e.value;
                if (null == r) return null;
                var i = "string" == typeof r ? parseFloat(r) : r;
                return isFinite(i) ? (t.log(en.INFO, es.PARSED_NUMERIC_VALUE, ry, i), i) : (t.log(en.INFO, es.FAILED_TO_PARSE_VALUE, ry, r), null)
            }
            var rN = "ATTRIBUTES_VALIDATOR";

            function rT(e, t) {
                return "string" == typeof e && ("string" == typeof t || "boolean" == typeof t || B.isNumber(t) && B.isSafeInteger(t))
            }
            var rm = "custom",
                rA = "https://logx.optimizely.com/v1/events",
                rD = "POST";

            function rS(e) {
                var t = e.attributes,
                    r = e.userId,
                    i = e.clientEngine,
                    n = e.clientVersion,
                    o = e.configObj,
                    s = e.logger,
                    a = !!o.anonymizeIP && o.anonymizeIP,
                    u = o.botFiltering,
                    l = {
                        account_id: o.accountId,
                        project_id: o.projectId,
                        visitors: [{
                            snapshots: [],
                            visitor_id: r,
                            attributes: []
                        }],
                        revision: o.revision,
                        client_name: i,
                        client_version: n,
                        anonymize_ip: a,
                        enrich_decisions: !0
                    };
                return t && Object.keys(t || {}).forEach(function(e) {
                    var r = t[e];
                    if (rT(e, r)) {
                        var i = e6(o, e, s);
                        i && l.visitors[0].attributes.push({
                            entity_id: i,
                            key: e,
                            type: rm,
                            value: r
                        })
                    }
                }), "boolean" == typeof u && l.visitors[0].attributes.push({
                    entity_id: ea.BOT_FILTERING,
                    key: ea.BOT_FILTERING,
                    type: rm,
                    value: u
                }), l
            }

            function rU(e) {
                var t, r;
                return null !== (r = null === (t = e.experiment) || void 0 === t ? void 0 : t.key) && void 0 !== r ? r : ""
            }

            function rL(e) {
                var t, r;
                return null !== (r = null === (t = e.variation) || void 0 === t ? void 0 : t.key) && void 0 !== r ? r : ""
            }

            function rC(e) {
                var t, r;
                return null !== (r = null === (t = e.variation) || void 0 === t ? void 0 : t.featureEnabled) && void 0 !== r && r
            }

            function rb(e) {
                var t, r;
                return null !== (r = null === (t = e.experiment) || void 0 === t ? void 0 : t.id) && void 0 !== r ? r : null
            }

            function rV(e) {
                var t, r;
                return null !== (r = null === (t = e.variation) || void 0 === t ? void 0 : t.id) && void 0 !== r ? r : null
            }
            var rP = W("EVENT_BUILDER"),
                rF = function(e) {
                    var t = e.configObj,
                        r = e.decisionObj,
                        i = e.userId,
                        n = e.flagKey,
                        o = e.enabled,
                        s = e.userAttributes,
                        a = e.clientEngine,
                        u = e.clientVersion,
                        l = r.decisionSource,
                        c = rU(r),
                        d = rb(r),
                        p = rL(r),
                        f = rV(r),
                        g = null !== d ? e3(t, d) : null;
                    return {
                        type: "impression",
                        timestamp: B.currentTimestamp(),
                        uuid: B.uuid(),
                        user: {
                            id: i,
                            attributes: rk(t, s)
                        },
                        context: {
                            accountId: t.accountId,
                            projectId: t.projectId,
                            revision: t.revision,
                            clientName: a,
                            clientVersion: u,
                            anonymizeIP: t.anonymizeIP || !1,
                            botFiltering: t.botFiltering
                        },
                        layer: {
                            id: g
                        },
                        experiment: {
                            id: d,
                            key: c
                        },
                        variation: {
                            id: f,
                            key: p
                        },
                        ruleKey: c,
                        flagKey: n,
                        ruleType: l,
                        enabled: o
                    }
                },
                rM = function(e) {
                    var t = e.configObj,
                        r = e.userId,
                        i = e.userAttributes,
                        n = e.clientEngine,
                        o = e.clientVersion,
                        s = e.eventKey,
                        a = e.eventTags,
                        u = e5(t, s),
                        l = a ? rR(a, rP) : null,
                        c = a ? rO(a, rP) : null;
                    return {
                        type: "conversion",
                        timestamp: B.currentTimestamp(),
                        uuid: B.uuid(),
                        user: {
                            id: r,
                            attributes: rk(t, i)
                        },
                        context: {
                            accountId: t.accountId,
                            projectId: t.projectId,
                            revision: t.revision,
                            clientName: n,
                            clientVersion: o,
                            anonymizeIP: t.anonymizeIP || !1,
                            botFiltering: t.botFiltering
                        },
                        event: {
                            id: u,
                            key: s
                        },
                        revenue: l,
                        value: c,
                        tags: a
                    }
                };

            function rk(e, t) {
                var r = [];
                return t && Object.keys(t || {}).forEach(function(i) {
                    var n = t[i];
                    if (rT(i, n)) {
                        var o = e6(e, i, rP);
                        o && r.push({
                            entityId: o,
                            key: i,
                            value: n
                        })
                    }
                }), r
            }
            var rx = "USER_PROFILE_SERVICE_VALIDATOR",
                rG = "OPTIMIZELY",
                rw = function() {
                    function e(e) {
                        var t, r = this,
                            i = e.clientEngine;
                        i || (e.logger.log(en.INFO, es.INVALID_CLIENT_ENGINE, rG, i), i = el), this.clientEngine = i, this.clientVersion = e.clientVersion || ec, this.errorHandler = e.errorHandler, this.isOptimizelyConfigValid = e.isValidInstance, this.logger = e.logger, this.odpManager = e.odpManager;
                        var n = null !== (t = e.defaultDecideOptions) && void 0 !== t ? t : [];
                        Array.isArray(n) || (this.logger.log(en.DEBUG, es.INVALID_DEFAULT_DECIDE_OPTIONS, rG), n = []);
                        var o = {};
                        n.forEach(function(e) {
                            v[e] ? o[e] = !0 : r.logger.log(en.WARNING, es.UNRECOGNIZED_DECIDE_OPTION, rG, e)
                        }), this.defaultDecideOptions = o, this.projectConfigManager = new tj({
                            datafile: e.datafile,
                            jsonSchemaValidator: e.jsonSchemaValidator,
                            sdkKey: e.sdkKey,
                            datafileManager: e.datafileManager
                        }), this.disposeOnUpdate = this.projectConfigManager.onUpdate(function(e) {
                            r.logger.log(en.INFO, es.UPDATED_OPTIMIZELY_CONFIG, rG, e.revision, e.projectId), r.notificationCenter.sendNotifications(g.OPTIMIZELY_CONFIG_UPDATE), r.updateOdpSettings()
                        });
                        var s = this.projectConfigManager.onReady(),
                            a = null;
                        if (e.userProfileService) try {
                            (function(e) {
                                if ("object" == typeof e && null !== e) {
                                    if ("function" != typeof e.lookup) throw Error(w(eo.INVALID_USER_PROFILE_SERVICE, rx, "Missing function 'lookup'"));
                                    if ("function" != typeof e.save) throw Error(w(eo.INVALID_USER_PROFILE_SERVICE, rx, "Missing function 'save'"));
                                    return !0
                                }
                                throw Error(w(eo.INVALID_USER_PROFILE_SERVICE, rx))
                            })(e.userProfileService) && (a = e.userProfileService, this.logger.log(en.INFO, es.VALID_USER_PROFILE_SERVICE, rG))
                        } catch (e) {
                            this.logger.log(en.WARNING, e.message)
                        }
                        this.decisionService = new rv({
                            userProfileService: a,
                            logger: this.logger,
                            UNSTABLE_conditionEvaluators: e.UNSTABLE_conditionEvaluators
                        }), this.notificationCenter = e.notificationCenter, this.eventProcessor = e.eventProcessor;
                        var u = this.eventProcessor.start();
                        this.readyPromise = Promise.all([s, u, e.odpManager ? e.odpManager.onReady() : Promise.resolve()]).then(function(e) {
                            return e[0]
                        }), this.readyTimeouts = {}, this.nextReadyTimeoutId = 0
                    }
                    return e.prototype.getProjectConfig = function() {
                        return this.projectConfigManager.getConfig()
                    }, e.prototype.isValidInstance = function() {
                        return this.isOptimizelyConfigValid && !!this.projectConfigManager.getConfig()
                    }, e.prototype.activate = function(e, t, r) {
                        try {
                            if (!this.isValidInstance()) return this.logger.log(en.ERROR, es.INVALID_OBJECT, rG, "activate"), null;
                            if (!this.validateInputs({
                                    experiment_key: e,
                                    user_id: t
                                }, r)) return this.notActivatingExperiment(e, t);
                            var i = this.projectConfigManager.getConfig();
                            if (!i) return null;
                            try {
                                var n = this.getVariation(e, t, r);
                                if (null === n) return this.notActivatingExperiment(e, t);
                                if (e9(i, e) !== eZ) return this.logger.log(en.DEBUG, es.SHOULD_NOT_DISPATCH_ACTIVATE, rG, e), n;
                                var o = tt(i, e),
                                    s = o.variationKeyMap[n],
                                    a = {
                                        experiment: o,
                                        variation: s,
                                        decisionSource: ep.EXPERIMENT
                                    };
                                return this.sendImpressionEvent(a, "", t, !0, r), n
                            } catch (r) {
                                return this.logger.log(en.ERROR, r.message), this.logger.log(en.INFO, es.NOT_ACTIVATING_USER, rG, t, e), this.errorHandler.handleError(r), null
                            }
                        } catch (e) {
                            return this.logger.log(en.ERROR, e.message), this.errorHandler.handleError(e), null
                        }
                    }, e.prototype.sendImpressionEvent = function(e, t, r, i, n) {
                        var o = this.projectConfigManager.getConfig();
                        if (o) {
                            var s = rF({
                                decisionObj: e,
                                flagKey: t,
                                enabled: i,
                                userId: r,
                                userAttributes: n,
                                clientEngine: this.clientEngine,
                                clientVersion: this.clientVersion,
                                configObj: o
                            });
                            this.eventProcessor.process(s), this.emitNotificationCenterActivate(e, t, r, i, n)
                        }
                    }, e.prototype.emitNotificationCenterActivate = function(e, t, r, i, n) {
                        var o, s, a, u, l, c, d, p, f, E, h, I, _, v, y = this.projectConfigManager.getConfig();
                        if (y) {
                            var R = e.decisionSource,
                                O = rU(e),
                                N = rb(e),
                                T = rL(e),
                                m = rV(e);
                            null !== N && "" !== T && (_ = y.experimentIdMap[N]);
                            var A = (s = rS(o = {
                                attributes: n,
                                clientEngine: this.clientEngine,
                                clientVersion: this.clientVersion,
                                configObj: y,
                                experimentId: N,
                                ruleKey: O,
                                flagKey: t,
                                ruleType: R,
                                userId: r,
                                enabled: i,
                                variationId: m,
                                logger: this.logger
                            }), a = o.configObj, u = o.experimentId, l = o.variationId, c = o.ruleKey, d = o.ruleType, p = o.flagKey, f = o.enabled, E = u ? e3(a, u) : null, h = l ? e7(a, l) : null, I = {
                                decisions: [{
                                    campaign_id: E,
                                    experiment_id: u,
                                    variation_id: l,
                                    metadata: {
                                        flag_key: p,
                                        rule_key: c,
                                        rule_type: d,
                                        variation_key: h = h || "",
                                        enabled: f
                                    }
                                }],
                                events: [{
                                    entity_id: E,
                                    timestamp: B.currentTimestamp(),
                                    key: "campaign_activated",
                                    uuid: B.uuid()
                                }]
                            }, s.visitors[0].snapshots.push(I), {
                                httpVerb: rD,
                                url: rA,
                                params: s
                            });
                            _ && _.variationKeyMap && "" !== T && (v = _.variationKeyMap[T]), this.notificationCenter.sendNotifications(g.ACTIVATE, {
                                experiment: _,
                                userId: r,
                                attributes: n,
                                variation: v,
                                logEvent: A
                            })
                        }
                    }, e.prototype.track = function(e, t, r, i) {
                        try {
                            if (!this.isValidInstance()) {
                                this.logger.log(en.ERROR, es.INVALID_OBJECT, rG, "track");
                                return
                            }
                            if (!this.validateInputs({
                                    user_id: t,
                                    event_key: e
                                }, r, i)) return;
                            var n = this.projectConfigManager.getConfig();
                            if (!n) return;
                            if (!n.eventKeyMap.hasOwnProperty(e)) {
                                this.logger.log(en.WARNING, es.EVENT_KEY_NOT_FOUND, rG, e), this.logger.log(en.WARNING, es.NOT_TRACKING_USER, rG, t);
                                return
                            }
                            i = this.filterEmptyValues(i);
                            var o = rM({
                                eventKey: e,
                                eventTags: i,
                                userId: t,
                                userAttributes: r,
                                clientEngine: this.clientEngine,
                                clientVersion: this.clientVersion,
                                configObj: n
                            });
                            this.logger.log(en.INFO, es.TRACK_EVENT, rG, e, t), this.eventProcessor.process(o), this.emitNotificationCenterTrack(e, t, r, i)
                        } catch (e) {
                            this.logger.log(en.ERROR, e.message), this.errorHandler.handleError(e), this.logger.log(en.ERROR, es.NOT_TRACKING_USER, rG, t)
                        }
                    }, e.prototype.emitNotificationCenterTrack = function(e, t, r, i) {
                        try {
                            var n, o, s, a = this.projectConfigManager.getConfig();
                            if (!a) return;
                            var u = (n = {
                                attributes: r,
                                clientEngine: this.clientEngine,
                                clientVersion: this.clientVersion,
                                configObj: a,
                                eventKey: e,
                                eventTags: i,
                                logger: this.logger,
                                userId: t
                            }, o = rS(n), s = function(e, t, r, i) {
                                var n = {
                                        events: []
                                    },
                                    o = {
                                        entity_id: e5(e, t),
                                        timestamp: B.currentTimestamp(),
                                        uuid: B.uuid(),
                                        key: t
                                    };
                                if (i) {
                                    var s = rR(i, r);
                                    null !== s && (o.revenue = s);
                                    var a = rO(i, r);
                                    null !== a && (o.value = a), o.tags = i
                                }
                                return n.events.push(o), n
                            }(n.configObj, n.eventKey, n.logger, n.eventTags), o.visitors[0].snapshots = [s], {
                                httpVerb: rD,
                                url: rA,
                                params: o
                            });
                            this.notificationCenter.sendNotifications(g.TRACK, {
                                eventKey: e,
                                userId: t,
                                attributes: r,
                                eventTags: i,
                                logEvent: u
                            })
                        } catch (e) {
                            this.logger.log(en.ERROR, e.message), this.errorHandler.handleError(e)
                        }
                    }, e.prototype.getVariation = function(e, t, r) {
                        try {
                            if (!this.isValidInstance()) return this.logger.log(en.ERROR, es.INVALID_OBJECT, rG, "getVariation"), null;
                            try {
                                if (!this.validateInputs({
                                        experiment_key: e,
                                        user_id: t
                                    }, r)) return null;
                                var i, n = this.projectConfigManager.getConfig();
                                if (!n) return null;
                                var o = n.experimentKeyMap[e];
                                if (!o) return this.logger.log(en.DEBUG, eo.INVALID_EXPERIMENT_KEY, rG, e), null;
                                var s = this.decisionService.getVariation(n, o, this.createInternalUserContext(t, r)).result,
                                    a = (i = o.id, n.experimentFeatureMap.hasOwnProperty(i)) ? ed.FEATURE_TEST : ed.AB_TEST;
                                return this.notificationCenter.sendNotifications(g.DECISION, {
                                    type: a,
                                    userId: t,
                                    attributes: r || {},
                                    decisionInfo: {
                                        experimentKey: e,
                                        variationKey: s
                                    }
                                }), s
                            } catch (e) {
                                return this.logger.log(en.ERROR, e.message), this.errorHandler.handleError(e), null
                            }
                        } catch (e) {
                            return this.logger.log(en.ERROR, e.message), this.errorHandler.handleError(e), null
                        }
                    }, e.prototype.setForcedVariation = function(e, t, r) {
                        if (!this.validateInputs({
                                experiment_key: e,
                                user_id: t
                            })) return !1;
                        var i = this.projectConfigManager.getConfig();
                        if (!i) return !1;
                        try {
                            return this.decisionService.setForcedVariation(i, e, t, r)
                        } catch (e) {
                            return this.logger.log(en.ERROR, e.message), this.errorHandler.handleError(e), !1
                        }
                    }, e.prototype.getForcedVariation = function(e, t) {
                        if (!this.validateInputs({
                                experiment_key: e,
                                user_id: t
                            })) return null;
                        var r = this.projectConfigManager.getConfig();
                        if (!r) return null;
                        try {
                            return this.decisionService.getForcedVariation(r, e, t).result
                        } catch (e) {
                            return this.logger.log(en.ERROR, e.message), this.errorHandler.handleError(e), null
                        }
                    }, e.prototype.validateInputs = function(e, t, r) {
                        try {
                            if (e.hasOwnProperty("user_id")) {
                                var i = e.user_id;
                                if ("string" != typeof i || null === i || "undefined" === i) throw Error(w(eo.INVALID_INPUT_FORMAT, rG, "user_id"));
                                delete e.user_id
                            }
                            return Object.keys(e).forEach(function(t) {
                                if (!rI(e[t])) throw Error(w(eo.INVALID_INPUT_FORMAT, rG, t))
                            }), t && function(e) {
                                if ("object" == typeof e && !Array.isArray(e) && null !== e) return Object.keys(e).forEach(function(t) {
                                    if (void 0 === e[t]) throw Error(w(eo.UNDEFINED_ATTRIBUTE, rN, t))
                                });
                                throw Error(w(eo.INVALID_ATTRIBUTES, rN))
                            }(t), r && function(e) {
                                if ("object" != typeof e || Array.isArray(e) || null === e) throw Error(w(eo.INVALID_EVENT_TAGS, "EVENT_TAGS_VALIDATOR"))
                            }(r), !0
                        } catch (e) {
                            return this.logger.log(en.ERROR, e.message), this.errorHandler.handleError(e), !1
                        }
                    }, e.prototype.notActivatingExperiment = function(e, t) {
                        return this.logger.log(en.INFO, es.NOT_ACTIVATING_USER, rG, t, e), null
                    }, e.prototype.filterEmptyValues = function(e) {
                        for (var t in e) e.hasOwnProperty(t) && (null === e[t] || void 0 === e[t]) && delete e[t];
                        return e
                    }, e.prototype.isFeatureEnabled = function(e, t, r) {
                        try {
                            if (!this.isValidInstance()) return this.logger.log(en.ERROR, es.INVALID_OBJECT, rG, "isFeatureEnabled"), !1;
                            if (!this.validateInputs({
                                    feature_key: e,
                                    user_id: t
                                }, r)) return !1;
                            var i = this.projectConfigManager.getConfig();
                            if (!i) return !1;
                            var n = to(i, e, this.logger);
                            if (!n) return !1;
                            var o = {},
                                s = this.createInternalUserContext(t, r),
                                a = this.decisionService.getVariationForFeature(i, n, s).result,
                                u = a.decisionSource,
                                l = rU(a),
                                c = rL(a),
                                d = rC(a);
                            u === ep.FEATURE_TEST && (o = {
                                experimentKey: l,
                                variationKey: c
                            }), (u === ep.FEATURE_TEST || u === ep.ROLLOUT && td(i)) && this.sendImpressionEvent(a, n.key, t, d, r), !0 === d ? this.logger.log(en.INFO, es.FEATURE_ENABLED_FOR_USER, rG, e, t) : (this.logger.log(en.INFO, es.FEATURE_NOT_ENABLED_FOR_USER, rG, e, t), d = !1);
                            var p = {
                                featureKey: e,
                                featureEnabled: d,
                                source: a.decisionSource,
                                sourceInfo: o
                            };
                            return this.notificationCenter.sendNotifications(g.DECISION, {
                                type: ed.FEATURE,
                                userId: t,
                                attributes: r || {},
                                decisionInfo: p
                            }), d
                        } catch (e) {
                            return this.logger.log(en.ERROR, e.message), this.errorHandler.handleError(e), !1
                        }
                    }, e.prototype.getEnabledFeatures = function(e, t) {
                        var r = this;
                        try {
                            var i = [];
                            if (!this.isValidInstance()) return this.logger.log(en.ERROR, es.INVALID_OBJECT, rG, "getEnabledFeatures"), i;
                            if (!this.validateInputs({
                                    user_id: e
                                })) return i;
                            var n = this.projectConfigManager.getConfig();
                            if (!n) return i;
                            return x(n.featureKeyMap).forEach(function(n) {
                                r.isFeatureEnabled(n.key, e, t) && i.push(n.key)
                            }), i
                        } catch (e) {
                            return this.logger.log(en.ERROR, e.message), this.errorHandler.handleError(e), []
                        }
                    }, e.prototype.getFeatureVariable = function(e, t, r, i) {
                        try {
                            if (!this.isValidInstance()) return this.logger.log(en.ERROR, es.INVALID_OBJECT, rG, "getFeatureVariable"), null;
                            return this.getFeatureVariableForType(e, t, null, r, i)
                        } catch (e) {
                            return this.logger.log(en.ERROR, e.message), this.errorHandler.handleError(e), null
                        }
                    }, e.prototype.getFeatureVariableForType = function(e, t, r, i, n) {
                        if (!this.validateInputs({
                                feature_key: e,
                                variable_key: t,
                                user_id: i
                            }, n)) return null;
                        var o = this.projectConfigManager.getConfig();
                        if (!o) return null;
                        var s = to(o, e, this.logger);
                        if (!s) return null;
                        var a = ts(o, e, t, this.logger);
                        if (!a) return null;
                        if (r && a.type !== r) return this.logger.log(en.WARNING, es.VARIABLE_REQUESTED_WITH_WRONG_TYPE, rG, r, a.type), null;
                        var u = this.createInternalUserContext(i, n),
                            l = this.decisionService.getVariationForFeature(o, s, u).result,
                            c = rC(l),
                            d = this.getFeatureVariableValueFromVariation(e, c, l.variation, a, i),
                            p = {};
                        return l.decisionSource === ep.FEATURE_TEST && null !== l.experiment && null !== l.variation && (p = {
                            experimentKey: l.experiment.key,
                            variationKey: l.variation.key
                        }), this.notificationCenter.sendNotifications(g.DECISION, {
                            type: ed.FEATURE_VARIABLE,
                            userId: i,
                            attributes: n || {},
                            decisionInfo: {
                                featureKey: e,
                                featureEnabled: c,
                                source: l.decisionSource,
                                variableKey: t,
                                variableValue: d,
                                variableType: a.type,
                                sourceInfo: p
                            }
                        }), d
                    }, e.prototype.getFeatureVariableValueFromVariation = function(e, t, r, i, n) {
                        var o = this.projectConfigManager.getConfig();
                        if (!o) return null;
                        var s = i.defaultValue;
                        if (null !== r) {
                            var a = ta(o, i, r, this.logger);
                            null !== a ? t ? (s = a, this.logger.log(en.INFO, es.USER_RECEIVED_VARIABLE_VALUE, rG, s, i.key, e)) : this.logger.log(en.INFO, es.FEATURE_NOT_ENABLED_RETURN_DEFAULT_VARIABLE_VALUE, rG, e, n, s) : this.logger.log(en.INFO, es.VARIABLE_NOT_USED_RETURN_DEFAULT_VARIABLE_VALUE, rG, i.key, r.key)
                        } else this.logger.log(en.INFO, es.USER_RECEIVED_DEFAULT_VARIABLE_VALUE, rG, n, i.key, e);
                        return tu(s, i.type, this.logger)
                    }, e.prototype.getFeatureVariableBoolean = function(e, t, r, i) {
                        try {
                            if (!this.isValidInstance()) return this.logger.log(en.ERROR, es.INVALID_OBJECT, rG, "getFeatureVariableBoolean"), null;
                            return this.getFeatureVariableForType(e, t, eg.BOOLEAN, r, i)
                        } catch (e) {
                            return this.logger.log(en.ERROR, e.message), this.errorHandler.handleError(e), null
                        }
                    }, e.prototype.getFeatureVariableDouble = function(e, t, r, i) {
                        try {
                            if (!this.isValidInstance()) return this.logger.log(en.ERROR, es.INVALID_OBJECT, rG, "getFeatureVariableDouble"), null;
                            return this.getFeatureVariableForType(e, t, eg.DOUBLE, r, i)
                        } catch (e) {
                            return this.logger.log(en.ERROR, e.message), this.errorHandler.handleError(e), null
                        }
                    }, e.prototype.getFeatureVariableInteger = function(e, t, r, i) {
                        try {
                            if (!this.isValidInstance()) return this.logger.log(en.ERROR, es.INVALID_OBJECT, rG, "getFeatureVariableInteger"), null;
                            return this.getFeatureVariableForType(e, t, eg.INTEGER, r, i)
                        } catch (e) {
                            return this.logger.log(en.ERROR, e.message), this.errorHandler.handleError(e), null
                        }
                    }, e.prototype.getFeatureVariableString = function(e, t, r, i) {
                        try {
                            if (!this.isValidInstance()) return this.logger.log(en.ERROR, es.INVALID_OBJECT, rG, "getFeatureVariableString"), null;
                            return this.getFeatureVariableForType(e, t, eg.STRING, r, i)
                        } catch (e) {
                            return this.logger.log(en.ERROR, e.message), this.errorHandler.handleError(e), null
                        }
                    }, e.prototype.getFeatureVariableJSON = function(e, t, r, i) {
                        try {
                            if (!this.isValidInstance()) return this.logger.log(en.ERROR, es.INVALID_OBJECT, rG, "getFeatureVariableJSON"), null;
                            return this.getFeatureVariableForType(e, t, eg.JSON, r, i)
                        } catch (e) {
                            return this.logger.log(en.ERROR, e.message), this.errorHandler.handleError(e), null
                        }
                    }, e.prototype.getAllFeatureVariables = function(e, t, r) {
                        var i = this;
                        try {
                            if (!this.isValidInstance()) return this.logger.log(en.ERROR, es.INVALID_OBJECT, rG, "getAllFeatureVariables"), null;
                            if (!this.validateInputs({
                                    feature_key: e,
                                    user_id: t
                                }, r)) return null;
                            var n = this.projectConfigManager.getConfig();
                            if (!n) return null;
                            var o = to(n, e, this.logger);
                            if (!o) return null;
                            var s = this.createInternalUserContext(t, r),
                                a = this.decisionService.getVariationForFeature(n, o, s).result,
                                u = rC(a),
                                l = {};
                            o.variables.forEach(function(r) {
                                l[r.key] = i.getFeatureVariableValueFromVariation(e, u, a.variation, r, t)
                            });
                            var c = {};
                            return a.decisionSource === ep.FEATURE_TEST && null !== a.experiment && null !== a.variation && (c = {
                                experimentKey: a.experiment.key,
                                variationKey: a.variation.key
                            }), this.notificationCenter.sendNotifications(g.DECISION, {
                                type: ed.ALL_FEATURE_VARIABLES,
                                userId: t,
                                attributes: r || {},
                                decisionInfo: {
                                    featureKey: e,
                                    featureEnabled: u,
                                    source: a.decisionSource,
                                    variableValues: l,
                                    sourceInfo: c
                                }
                            }), l
                        } catch (e) {
                            return this.logger.log(en.ERROR, e.message), this.errorHandler.handleError(e), null
                        }
                    }, e.prototype.getOptimizelyConfig = function() {
                        try {
                            if (!this.projectConfigManager.getConfig()) return null;
                            return this.projectConfigManager.getOptimizelyConfig()
                        } catch (e) {
                            return this.logger.log(en.ERROR, e.message), this.errorHandler.handleError(e), null
                        }
                    }, e.prototype.close = function() {
                        var e, t = this;
                        try {
                            this.odpManager && this.odpManager.stop(), this.notificationCenter.clearAllNotificationListeners();
                            var r = null === (e = this.projectConfigManager.getConfig()) || void 0 === e ? void 0 : e.sdkKey;
                            r && ez.removeNotificationCenter(r);
                            var i = this.eventProcessor.stop();
                            return this.disposeOnUpdate && (this.disposeOnUpdate(), this.disposeOnUpdate = null), this.projectConfigManager && this.projectConfigManager.stop(), Object.keys(this.readyTimeouts).forEach(function(e) {
                                var r = t.readyTimeouts[e];
                                clearTimeout(r.readyTimeout), r.onClose()
                            }), this.readyTimeouts = {}, i.then(function() {
                                return {
                                    success: !0
                                }
                            }, function(e) {
                                return {
                                    success: !1,
                                    reason: String(e)
                                }
                            })
                        } catch (e) {
                            return this.logger.log(en.ERROR, e.message), this.errorHandler.handleError(e), Promise.resolve({
                                success: !1,
                                reason: String(e)
                            })
                        }
                    }, e.prototype.onReady = function(e) {
                        var t, r, i = this;
                        "object" == typeof e && null !== e && void 0 !== e.timeout && (t = e.timeout), B.isSafeInteger(t) || (t = 3e4);
                        var n = new Promise(function(e) {
                                r = e
                            }),
                            o = this.nextReadyTimeoutId;
                        this.nextReadyTimeoutId++;
                        var s = setTimeout(function() {
                            delete i.readyTimeouts[o], r({
                                success: !1,
                                reason: w("onReady timeout expired after %s ms", t)
                            })
                        }, t);
                        return this.readyTimeouts[o] = {
                            readyTimeout: s,
                            onClose: function() {
                                r({
                                    success: !1,
                                    reason: "Instance closed"
                                })
                            }
                        }, this.readyPromise.then(function() {
                            clearTimeout(s), delete i.readyTimeouts[o], r({
                                success: !0
                            })
                        }), Promise.race([this.readyPromise, n])
                    }, e.prototype.createUserContext = function(e, t) {
                        var r, i = null != e ? e : null === (r = this.odpManager) || void 0 === r ? void 0 : r.getVuid();
                        return void 0 !== i && this.validateInputs({
                            user_id: i
                        }, t) ? new tk({
                            optimizely: this,
                            userId: i,
                            attributes: t,
                            shouldIdentifyUser: !0
                        }) : null
                    }, e.prototype.createInternalUserContext = function(e, t) {
                        return new tk({
                            optimizely: this,
                            userId: e,
                            attributes: t,
                            shouldIdentifyUser: !1
                        })
                    }, e.prototype.decide = function(e, t, r) {
                        var i, n, o, s, a, u = this;
                        void 0 === r && (r = []);
                        var l = e.getUserId(),
                            c = e.getAttributes(),
                            d = this.projectConfigManager.getConfig(),
                            p = [];
                        if (!this.isValidInstance() || !d) return this.logger.log(en.INFO, es.INVALID_OBJECT, rG, "decide"), tM(t, e, [eh.SDK_NOT_READY]);
                        var f = d.featureKeyMap[t];
                        if (!f) return this.logger.log(en.ERROR, eo.FEATURE_NOT_IN_DATAFILE, rG, t), tM(t, e, [w(eh.FLAG_KEY_INVALID, t)]);
                        var E = this.getAllDecideOptions(r),
                            h = this.decisionService.findValidatedForcedDecision(d, e, t);
                        p.push.apply(p, h.reasons);
                        var I = h.result;
                        if (I) a = {
                            experiment: null,
                            variation: I,
                            decisionSource: ep.FEATURE_TEST
                        };
                        else {
                            var _ = this.decisionService.getVariationForFeature(d, f, e, E);
                            p.push.apply(p, _.reasons), a = _.result
                        }
                        var y = a.decisionSource,
                            R = null !== (n = null === (i = a.experiment) || void 0 === i ? void 0 : i.key) && void 0 !== n ? n : null,
                            O = null !== (s = null === (o = a.variation) || void 0 === o ? void 0 : o.key) && void 0 !== s ? s : null,
                            N = rC(a);
                        !0 === N ? this.logger.log(en.INFO, es.FEATURE_ENABLED_FOR_USER, rG, t, l) : this.logger.log(en.INFO, es.FEATURE_NOT_ENABLED_FOR_USER, rG, t, l);
                        var T = {},
                            m = !1;
                        E[v.EXCLUDE_VARIABLES] || f.variables.forEach(function(e) {
                            T[e.key] = u.getFeatureVariableValueFromVariation(t, N, a.variation, e, l)
                        }), !E[v.DISABLE_DECISION_EVENT] && (y === ep.FEATURE_TEST || y === ep.ROLLOUT && td(d)) && (this.sendImpressionEvent(a, t, l, N, c), m = !0);
                        var A = E[v.INCLUDE_REASONS],
                            D = [];
                        A && (D = p.map(function(e) {
                            return w.apply(void 0, b([e[0]], e.slice(1), !1))
                        }));
                        var S = {
                            flagKey: t,
                            enabled: N,
                            variationKey: O,
                            ruleKey: R,
                            variables: T,
                            reasons: D,
                            decisionEventDispatched: m
                        };
                        return this.notificationCenter.sendNotifications(g.DECISION, {
                            type: ed.FLAG,
                            userId: l,
                            attributes: c,
                            decisionInfo: S
                        }), {
                            variationKey: O,
                            enabled: N,
                            variables: T,
                            ruleKey: R,
                            flagKey: t,
                            userContext: e,
                            reasons: D
                        }
                    }, e.prototype.getAllDecideOptions = function(e) {
                        var t = this,
                            r = U({}, this.defaultDecideOptions);
                        return Array.isArray(e) ? e.forEach(function(e) {
                            v[e] ? r[e] = !0 : t.logger.log(en.WARNING, es.UNRECOGNIZED_DECIDE_OPTION, rG, e)
                        }) : this.logger.log(en.DEBUG, es.INVALID_DECIDE_OPTIONS, rG), r
                    }, e.prototype.decideForKeys = function(e, t, r) {
                        var i = this;
                        void 0 === r && (r = []);
                        var n = {};
                        if (!this.isValidInstance()) return this.logger.log(en.ERROR, es.INVALID_OBJECT, rG, "decideForKeys"), n;
                        if (0 === t.length) return n;
                        var o = this.getAllDecideOptions(r);
                        return t.forEach(function(t) {
                            var s = i.decide(e, t, r);
                            (!o[v.ENABLED_FLAGS_ONLY] || s.enabled) && (n[t] = s)
                        }), n
                    }, e.prototype.decideAll = function(e, t) {
                        void 0 === t && (t = []);
                        var r = this.projectConfigManager.getConfig();
                        if (!this.isValidInstance() || !r) return this.logger.log(en.ERROR, es.INVALID_OBJECT, rG, "decideAll"), {};
                        var i = Object.keys(r.featureKeyMap);
                        return this.decideForKeys(e, i, t)
                    }, e.prototype.updateOdpSettings = function() {
                        var e = this.projectConfigManager.getConfig();
                        e && this.odpManager && this.odpManager.updateSettings(e.odpIntegrationConfig)
                    }, e.prototype.sendOdpEvent = function(e, t, r, i) {
                        if (!this.odpManager) {
                            this.logger.error(eo.ODP_EVENT_FAILED_ODP_MANAGER_MISSING);
                            return
                        }
                        var n = null != t ? t : e_,
                            o = new Map(r);
                        if (r && r.size > 0) try {
                            r.forEach(function(e, t) {
                                (eI === t.toLowerCase() || E.FS_USER_ID === t.toLowerCase()) && (o.delete(t), o.set(E.FS_USER_ID, e))
                            })
                        } catch (e) {
                            this.logger.warn(es.ODP_SEND_EVENT_IDENTIFIER_CONVERSION_FAILED)
                        }
                        try {
                            var s = new tO(n, e, o, i);
                            this.odpManager.sendEvent(s)
                        } catch (e) {
                            this.logger.error(eo.ODP_EVENT_FAILED, e)
                        }
                    }, e.prototype.isOdpIntegrated = function() {
                        var e, t, r;
                        return null !== (r = null === (t = null === (e = this.projectConfigManager.getConfig()) || void 0 === e ? void 0 : e.odpIntegrationConfig) || void 0 === t ? void 0 : t.integrated) && void 0 !== r && r
                    }, e.prototype.identifyUser = function(e) {
                        this.odpManager && this.isOdpIntegrated() && this.odpManager.identifyUser(e)
                    }, e.prototype.fetchQualifiedSegments = function(e, t) {
                        return L(this, void 0, void 0, function() {
                            return C(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        if (!this.odpManager) return [2, null];
                                        return [4, this.odpManager.fetchQualifiedSegments(e, t)];
                                    case 1:
                                        return [2, r.sent()]
                                }
                            })
                        })
                    }, e.prototype.getVuid = function() {
                        var e;
                        if (!this.odpManager) {
                            null === (e = this.logger) || void 0 === e || e.error("Unable to get VUID - ODP Manager is not instantiated yet.");
                            return
                        }
                        if (!this.odpManager.isVuidEnabled()) {
                            this.logger.log(en.WARNING, "getVuid() unavailable for this platform", rG);
                            return
                        }
                        return this.odpManager.getVuid()
                    }, e
                }(),
                rB = {
                    parseUserAgentInfo: function() {
                        var e = new A.UAParser().getResult();
                        return {
                            os: e.os,
                            device: e.device
                        }
                    }
                },
                rK = Object.freeze({
                    __proto__: null,
                    get LogLevel() {
                        return f
                    },
                    getLogger: W,
                    setLogHandler: Q,
                    LOG_LEVEL: en,
                    createLogger: eM
                }),
                rj = W();
            Z.setLogHandler(eM()), Z.setLogLevel(f.INFO);
            var rq = !1,
                rH = function(e) {
                    var t;
                    try {
                        var r, i = !1;
                        e.errorHandler && (V = e.errorHandler), e.logger && (Z.setLogHandler(e.logger), Z.setLogLevel(f.NOTSET)), void 0 !== e.logLevel && Z.setLogLevel(e.logLevel);
                        try {
                            eC.validate(e), i = !0
                        } catch (e) {
                            rj.error(e)
                        }
                        var n = void 0;
                        null == e.eventDispatcher ? (n = new eT({
                            eventDispatcher: eV
                        }), rq || (n.sendPendingEvents(), rq = !0)) : n = e.eventDispatcher;
                        var o = e.closingEventDispatcher;
                        !e.eventDispatcher && !o && window.navigator && "sendBeacon" in window.navigator && (o = eP);
                        var s = e.eventBatchSize,
                            a = e.eventFlushInterval;
                        ex.validateEventBatchSize(e.eventBatchSize) || (rj.warn("Invalid eventBatchSize %s, defaulting to %s", e.eventBatchSize, 10), s = 10), ex.validateEventFlushInterval(e.eventFlushInterval) || (rj.warn("Invalid eventFlushInterval %s, defaulting to %s", e.eventFlushInterval, 1e3), a = 1e3);
                        var u = V,
                            l = (r = {
                                logger: rj,
                                errorHandler: u
                            }, new eG(r)),
                            c = {
                                dispatcher: n,
                                closingDispatcher: o,
                                flushInterval: a,
                                batchSize: s,
                                maxQueueSize: e.eventMaxQueueSize || 1e4,
                                notificationCenter: l
                            },
                            d = (null === (t = e.odpOptions) || void 0 === t ? void 0 : t.disabled) === !0;
                        d && rj.info(es.ODP_DISABLED);
                        var p = e.clientEngine,
                            g = e.clientVersion,
                            E = U(U({
                                clientEngine: eu
                            }, e), {
                                eventProcessor: ew.createEventProcessor(c),
                                logger: rj,
                                errorHandler: u,
                                datafileManager: e.sdkKey ? function(e, t, r, i) {
                                    var n = {
                                        sdkKey: e
                                    };
                                    if ((void 0 === i || "object" == typeof i && null !== i) && B.assign(n, i), r) {
                                        var o = tc({
                                                datafile: r,
                                                jsonSchemaValidator: void 0,
                                                logger: t
                                            }),
                                            s = o.configObj,
                                            a = o.error;
                                        a && t.error(a), s && (n.datafile = tl(s))
                                    }
                                    return new eW(n)
                                }(e.sdkKey, rj, e.datafile, e.datafileOptions) : void 0,
                                notificationCenter: l,
                                isValidInstance: i,
                                odpManager: d ? void 0 : tF.createInstance({
                                    logger: rj,
                                    odpOptions: e.odpOptions,
                                    clientEngine: p,
                                    clientVersion: g
                                })
                            }),
                            h = new rw(E);
                        try {
                            if ("function" == typeof window.addEventListener) {
                                var I = "onpagehide" in window ? "pagehide" : "unload";
                                window.addEventListener(I, function() {
                                    h.close()
                                }, !1)
                            }
                        } catch (e) {
                            rj.error(es.UNABLE_TO_ATTACH_UNLOAD, "INDEX_BROWSER", e.message)
                        }
                        return h
                    } catch (e) {
                        return rj.error(e), null
                    }
                },
                rz = Z.setLogHandler,
                rX = Z.setLogLevel;
            U(U({}, rK), {
                logging: ek,
                errorHandler: {
                    handleError: function() {}
                },
                eventDispatcher: eV,
                sendBeaconEventDispatcher: eP,
                enums: ev,
                setLogger: rz,
                setLogLevel: rX,
                createInstance: rH,
                __internalResetRetryState: function() {
                    rq = !1
                },
                OptimizelyDecideOption: v,
                getUserAgentParser: function() {
                    return rB
                }
            })
        }
    }
]);
//# sourceMappingURL=ac262c97-05d574404bcbdf98.js.map