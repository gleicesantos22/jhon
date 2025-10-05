(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [42802], {
        3698: function(e) {
            function t() {
                this._events = this._events || {}, this._maxListeners = this._maxListeners || void 0
            }

            function r(e) {
                return "function" == typeof e
            }

            function n(e) {
                return "object" == typeof e && null !== e
            }
            e.exports = t, t.prototype._events = void 0, t.prototype._maxListeners = void 0, t.defaultMaxListeners = 10, t.prototype.setMaxListeners = function(e) {
                if ("number" != typeof e || e < 0 || isNaN(e)) throw TypeError("n must be a positive number");
                return this._maxListeners = e, this
            }, t.prototype.emit = function(e) {
                var t, i, s, a, c, u;
                if (this._events || (this._events = {}), "error" === e && (!this._events.error || n(this._events.error) && !this._events.error.length)) {
                    if (t = arguments[1], t instanceof Error) throw t;
                    var o = Error('Uncaught, unspecified "error" event. (' + t + ")");
                    throw o.context = t, o
                }
                if (void 0 === (i = this._events[e])) return !1;
                if (r(i)) switch (arguments.length) {
                    case 1:
                        i.call(this);
                        break;
                    case 2:
                        i.call(this, arguments[1]);
                        break;
                    case 3:
                        i.call(this, arguments[1], arguments[2]);
                        break;
                    default:
                        a = Array.prototype.slice.call(arguments, 1), i.apply(this, a)
                } else if (n(i))
                    for (c = 0, a = Array.prototype.slice.call(arguments, 1), s = (u = i.slice()).length; c < s; c++) u[c].apply(this, a);
                return !0
            }, t.prototype.addListener = function(e, i) {
                var s;
                if (!r(i)) throw TypeError("listener must be a function");
                return this._events || (this._events = {}), this._events.newListener && this.emit("newListener", e, r(i.listener) ? i.listener : i), this._events[e] ? n(this._events[e]) ? this._events[e].push(i) : this._events[e] = [this._events[e], i] : this._events[e] = i, n(this._events[e]) && !this._events[e].warned && (s = void 0 === this._maxListeners ? t.defaultMaxListeners : this._maxListeners) && s > 0 && this._events[e].length > s && (this._events[e].warned = !0, console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.", this._events[e].length), "function" == typeof console.trace && console.trace()), this
            }, t.prototype.on = t.prototype.addListener, t.prototype.once = function(e, t) {
                if (!r(t)) throw TypeError("listener must be a function");
                var n = !1;

                function i() {
                    this.removeListener(e, i), n || (n = !0, t.apply(this, arguments))
                }
                return i.listener = t, this.on(e, i), this
            }, t.prototype.removeListener = function(e, t) {
                var i, s, a, c;
                if (!r(t)) throw TypeError("listener must be a function");
                if (!this._events || !this._events[e]) return this;
                if (a = (i = this._events[e]).length, s = -1, i === t || r(i.listener) && i.listener === t) delete this._events[e], this._events.removeListener && this.emit("removeListener", e, t);
                else if (n(i)) {
                    for (c = a; c-- > 0;)
                        if (i[c] === t || i[c].listener && i[c].listener === t) {
                            s = c;
                            break
                        }
                    if (s < 0) return this;
                    1 === i.length ? (i.length = 0, delete this._events[e]) : i.splice(s, 1), this._events.removeListener && this.emit("removeListener", e, t)
                }
                return this
            }, t.prototype.removeAllListeners = function(e) {
                var t, n;
                if (!this._events) return this;
                if (!this._events.removeListener) return 0 == arguments.length ? this._events = {} : this._events[e] && delete this._events[e], this;
                if (0 == arguments.length) {
                    for (t in this._events) "removeListener" !== t && this.removeAllListeners(t);
                    return this.removeAllListeners("removeListener"), this._events = {}, this
                }
                if (r(n = this._events[e])) this.removeListener(e, n);
                else if (n)
                    for (; n.length;) this.removeListener(e, n[n.length - 1]);
                return delete this._events[e], this
            }, t.prototype.listeners = function(e) {
                return this._events && this._events[e] ? r(this._events[e]) ? [this._events[e]] : this._events[e].slice() : []
            }, t.prototype.listenerCount = function(e) {
                if (this._events) {
                    var t = this._events[e];
                    if (r(t)) return 1;
                    if (t) return t.length
                }
                return 0
            }, t.listenerCount = function(e, t) {
                return e.listenerCount(t)
            }
        },
        454479: function(e, t, r) {
            "use strict";
            var n = r(935528),
                i = r(724105),
                s = r(800348);

            function a(e, t, r) {
                return new n(e, t, r)
            }
            a.version = r(149243), a.AlgoliaSearchHelper = n, a.SearchParameters = i, a.SearchResults = s, e.exports = a
        },
        855920: function(e, t, r) {
            "use strict";
            var n = r(3698);

            function i(e, t) {
                this.main = e, this.fn = t, this.lastResults = null
            }
            r(5926)(i, n), i.prototype.detach = function() {
                this.removeAllListeners(), this.main.detachDerivedHelper(this)
            }, i.prototype.getModifiedState = function(e) {
                return this.fn(e)
            }, e.exports = i
        },
        719062: function(e, t, r) {
            "use strict";
            var n = r(954873),
                i = r(982904),
                s = r(606009),
                a = {
                    addRefinement: function(e, t, r) {
                        if (a.isRefined(e, t, r)) return e;
                        var i = "" + r,
                            s = e[t] ? e[t].concat(i) : [i],
                            c = {};
                        return c[t] = s, n({}, c, e)
                    },
                    removeRefinement: function(e, t, r) {
                        if (void 0 === r) return a.clearRefinement(e, function(e, r) {
                            return t === r
                        });
                        var n = "" + r;
                        return a.clearRefinement(e, function(e, r) {
                            return t === r && n === e
                        })
                    },
                    toggleRefinement: function(e, t, r) {
                        if (void 0 === r) throw Error("toggleRefinement should be used with a value");
                        return a.isRefined(e, t, r) ? a.removeRefinement(e, t, r) : a.addRefinement(e, t, r)
                    },
                    clearRefinement: function(e, t, r) {
                        if (void 0 === t) return i(e) ? {} : e;
                        if ("string" == typeof t) return s(e, [t]);
                        if ("function" == typeof t) {
                            var n = !1,
                                a = Object.keys(e).reduce(function(i, s) {
                                    var a = e[s] || [],
                                        c = a.filter(function(e) {
                                            return !t(e, s, r)
                                        });
                                    return c.length !== a.length && (n = !0), i[s] = c, i
                                }, {});
                            return n ? a : e
                        }
                    },
                    isRefined: function(e, t, r) {
                        var n = !!e[t] && e[t].length > 0;
                        return void 0 !== r && n ? -1 !== e[t].indexOf("" + r) : n
                    }
                };
            e.exports = a
        },
        724105: function(e, t, r) {
            "use strict";
            var n = r(954873),
                i = r(634346),
                s = r(50188),
                a = r(661390),
                c = r(982904),
                u = r(606009),
                o = r(963687),
                f = r(945174),
                h = r(719062);

            function l(e, t) {
                return Array.isArray(e) && Array.isArray(t) ? e.length === t.length && e.every(function(e, r) {
                    return l(t[r], e)
                }) : e === t
            }

            function m(e) {
                var t = e ? m._parseNumbers(e) : {};
                void 0 === t.userToken || f(t.userToken) || console.warn("[algoliasearch-helper] The `userToken` parameter is invalid. This can lead to wrong analytics.\n  - Format: [a-zA-Z0-9_-]{1,64}"), this.facets = t.facets || [], this.disjunctiveFacets = t.disjunctiveFacets || [], this.hierarchicalFacets = t.hierarchicalFacets || [], this.facetsRefinements = t.facetsRefinements || {}, this.facetsExcludes = t.facetsExcludes || {}, this.disjunctiveFacetsRefinements = t.disjunctiveFacetsRefinements || {}, this.numericRefinements = t.numericRefinements || {}, this.tagRefinements = t.tagRefinements || [], this.hierarchicalFacetsRefinements = t.hierarchicalFacetsRefinements || {};
                var r = this;
                Object.keys(t).forEach(function(e) {
                    var n = -1 !== m.PARAMETERS.indexOf(e),
                        i = void 0 !== t[e];
                    !n && i && (r[e] = t[e])
                })
            }
            m.PARAMETERS = Object.keys(new m), m._parseNumbers = function(e) {
                if (e instanceof m) return e;
                var t = {};
                if (["aroundPrecision", "aroundRadius", "getRankingInfo", "minWordSizefor2Typos", "minWordSizefor1Typo", "page", "maxValuesPerFacet", "distinct", "minimumAroundRadius", "hitsPerPage", "minProximity"].forEach(function(r) {
                        var n = e[r];
                        if ("string" == typeof n) {
                            var i = parseFloat(n);
                            t[r] = isNaN(i) ? n : i
                        }
                    }), Array.isArray(e.insideBoundingBox) && (t.insideBoundingBox = e.insideBoundingBox.map(function(e) {
                        return Array.isArray(e) ? e.map(function(e) {
                            return parseFloat(e)
                        }) : e
                    })), e.numericRefinements) {
                    var r = {};
                    Object.keys(e.numericRefinements).forEach(function(t) {
                        var n = e.numericRefinements[t] || {};
                        r[t] = {}, Object.keys(n).forEach(function(e) {
                            var i = n[e].map(function(e) {
                                return Array.isArray(e) ? e.map(function(e) {
                                    return "string" == typeof e ? parseFloat(e) : e
                                }) : "string" == typeof e ? parseFloat(e) : e
                            });
                            r[t][e] = i
                        })
                    }), t.numericRefinements = r
                }
                return a({}, e, t)
            }, m.make = function(e) {
                var t = new m(e);
                return (e.hierarchicalFacets || []).forEach(function(e) {
                    if (e.rootPath) {
                        var r = t.getHierarchicalRefinement(e.name);
                        r.length > 0 && 0 !== r[0].indexOf(e.rootPath) && (t = t.clearRefinements(e.name)), 0 === (r = t.getHierarchicalRefinement(e.name)).length && (t = t.toggleHierarchicalFacetRefinement(e.name, e.rootPath))
                    }
                }), t
            }, m.validate = function(e, t) {
                var r = t || {};
                return e.tagFilters && r.tagRefinements && r.tagRefinements.length > 0 ? Error("[Tags] Cannot switch from the managed tag API to the advanced API. It is probably an error, if it is really what you want, you should first clear the tags with clearTags method.") : e.tagRefinements.length > 0 && r.tagFilters ? Error("[Tags] Cannot switch from the advanced tag API to the managed API. It is probably an error, if it is not, you should first clear the tags with clearTags method.") : e.numericFilters && r.numericRefinements && c(r.numericRefinements) ? Error("[Numeric filters] Can't switch from the advanced to the managed API. It is probably an error, if this is really what you want, you have to first clear the numeric filters.") : c(e.numericRefinements) && r.numericFilters ? Error("[Numeric filters] Can't switch from the managed API to the advanced. It is probably an error, if this is really what you want, you have to first clear the numeric filters.") : null
            }, m.prototype = {
                constructor: m,
                clearRefinements: function(e) {
                    var t = {
                        numericRefinements: this._clearNumericRefinements(e),
                        facetsRefinements: h.clearRefinement(this.facetsRefinements, e, "conjunctiveFacet"),
                        facetsExcludes: h.clearRefinement(this.facetsExcludes, e, "exclude"),
                        disjunctiveFacetsRefinements: h.clearRefinement(this.disjunctiveFacetsRefinements, e, "disjunctiveFacet"),
                        hierarchicalFacetsRefinements: h.clearRefinement(this.hierarchicalFacetsRefinements, e, "hierarchicalFacet")
                    };
                    return t.numericRefinements === this.numericRefinements && t.facetsRefinements === this.facetsRefinements && t.facetsExcludes === this.facetsExcludes && t.disjunctiveFacetsRefinements === this.disjunctiveFacetsRefinements && t.hierarchicalFacetsRefinements === this.hierarchicalFacetsRefinements ? this : this.setQueryParameters(t)
                },
                clearTags: function() {
                    return void 0 === this.tagFilters && 0 === this.tagRefinements.length ? this : this.setQueryParameters({
                        tagFilters: void 0,
                        tagRefinements: []
                    })
                },
                setIndex: function(e) {
                    return e === this.index ? this : this.setQueryParameters({
                        index: e
                    })
                },
                setQuery: function(e) {
                    return e === this.query ? this : this.setQueryParameters({
                        query: e
                    })
                },
                setPage: function(e) {
                    return e === this.page ? this : this.setQueryParameters({
                        page: e
                    })
                },
                setFacets: function(e) {
                    return this.setQueryParameters({
                        facets: e
                    })
                },
                setDisjunctiveFacets: function(e) {
                    return this.setQueryParameters({
                        disjunctiveFacets: e
                    })
                },
                setHitsPerPage: function(e) {
                    return this.hitsPerPage === e ? this : this.setQueryParameters({
                        hitsPerPage: e
                    })
                },
                setTypoTolerance: function(e) {
                    return this.typoTolerance === e ? this : this.setQueryParameters({
                        typoTolerance: e
                    })
                },
                addNumericRefinement: function(e, t, r) {
                    var n = o(r);
                    if (this.isNumericRefined(e, t, n)) return this;
                    var i = a({}, this.numericRefinements);
                    return i[e] = a({}, i[e]), i[e][t] ? (i[e][t] = i[e][t].slice(), i[e][t].push(n)) : i[e][t] = [n], this.setQueryParameters({
                        numericRefinements: i
                    })
                },
                getConjunctiveRefinements: function(e) {
                    return this.isConjunctiveFacet(e) && this.facetsRefinements[e] || []
                },
                getDisjunctiveRefinements: function(e) {
                    return this.isDisjunctiveFacet(e) && this.disjunctiveFacetsRefinements[e] || []
                },
                getHierarchicalRefinement: function(e) {
                    return this.hierarchicalFacetsRefinements[e] || []
                },
                getExcludeRefinements: function(e) {
                    return this.isConjunctiveFacet(e) && this.facetsExcludes[e] || []
                },
                removeNumericRefinement: function(e, t, r) {
                    return void 0 !== r ? this.isNumericRefined(e, t, r) ? this.setQueryParameters({
                        numericRefinements: this._clearNumericRefinements(function(n, i) {
                            return i === e && n.op === t && l(n.val, o(r))
                        })
                    }) : this : void 0 !== t ? this.isNumericRefined(e, t) ? this.setQueryParameters({
                        numericRefinements: this._clearNumericRefinements(function(r, n) {
                            return n === e && r.op === t
                        })
                    }) : this : this.isNumericRefined(e) ? this.setQueryParameters({
                        numericRefinements: this._clearNumericRefinements(function(t, r) {
                            return r === e
                        })
                    }) : this
                },
                getNumericRefinements: function(e) {
                    return this.numericRefinements[e] || {}
                },
                getNumericRefinement: function(e, t) {
                    return this.numericRefinements[e] && this.numericRefinements[e][t]
                },
                _clearNumericRefinements: function(e) {
                    if (void 0 === e) return c(this.numericRefinements) ? {} : this.numericRefinements;
                    if ("string" == typeof e) return u(this.numericRefinements, [e]);
                    if ("function" == typeof e) {
                        var t = !1,
                            r = this.numericRefinements,
                            n = Object.keys(r).reduce(function(n, i) {
                                var s = r[i],
                                    a = {};
                                return Object.keys(s = s || {}).forEach(function(r) {
                                    var n = s[r] || [],
                                        c = [];
                                    n.forEach(function(t) {
                                        e({
                                            val: t,
                                            op: r
                                        }, i, "numeric") || c.push(t)
                                    }), c.length !== n.length && (t = !0), a[r] = c
                                }), n[i] = a, n
                            }, {});
                        return t ? n : this.numericRefinements
                    }
                },
                addFacet: function(e) {
                    return this.isConjunctiveFacet(e) ? this : this.setQueryParameters({
                        facets: this.facets.concat([e])
                    })
                },
                addDisjunctiveFacet: function(e) {
                    return this.isDisjunctiveFacet(e) ? this : this.setQueryParameters({
                        disjunctiveFacets: this.disjunctiveFacets.concat([e])
                    })
                },
                addHierarchicalFacet: function(e) {
                    if (this.isHierarchicalFacet(e.name)) throw Error("Cannot declare two hierarchical facets with the same name: `" + e.name + "`");
                    return this.setQueryParameters({
                        hierarchicalFacets: this.hierarchicalFacets.concat([e])
                    })
                },
                addFacetRefinement: function(e, t) {
                    if (!this.isConjunctiveFacet(e)) throw Error(e + " is not defined in the facets attribute of the helper configuration");
                    return h.isRefined(this.facetsRefinements, e, t) ? this : this.setQueryParameters({
                        facetsRefinements: h.addRefinement(this.facetsRefinements, e, t)
                    })
                },
                addExcludeRefinement: function(e, t) {
                    if (!this.isConjunctiveFacet(e)) throw Error(e + " is not defined in the facets attribute of the helper configuration");
                    return h.isRefined(this.facetsExcludes, e, t) ? this : this.setQueryParameters({
                        facetsExcludes: h.addRefinement(this.facetsExcludes, e, t)
                    })
                },
                addDisjunctiveFacetRefinement: function(e, t) {
                    if (!this.isDisjunctiveFacet(e)) throw Error(e + " is not defined in the disjunctiveFacets attribute of the helper configuration");
                    return h.isRefined(this.disjunctiveFacetsRefinements, e, t) ? this : this.setQueryParameters({
                        disjunctiveFacetsRefinements: h.addRefinement(this.disjunctiveFacetsRefinements, e, t)
                    })
                },
                addTagRefinement: function(e) {
                    if (this.isTagRefined(e)) return this;
                    var t = {
                        tagRefinements: this.tagRefinements.concat(e)
                    };
                    return this.setQueryParameters(t)
                },
                removeFacet: function(e) {
                    return this.isConjunctiveFacet(e) ? this.clearRefinements(e).setQueryParameters({
                        facets: this.facets.filter(function(t) {
                            return t !== e
                        })
                    }) : this
                },
                removeDisjunctiveFacet: function(e) {
                    return this.isDisjunctiveFacet(e) ? this.clearRefinements(e).setQueryParameters({
                        disjunctiveFacets: this.disjunctiveFacets.filter(function(t) {
                            return t !== e
                        })
                    }) : this
                },
                removeHierarchicalFacet: function(e) {
                    return this.isHierarchicalFacet(e) ? this.clearRefinements(e).setQueryParameters({
                        hierarchicalFacets: this.hierarchicalFacets.filter(function(t) {
                            return t.name !== e
                        })
                    }) : this
                },
                removeFacetRefinement: function(e, t) {
                    if (!this.isConjunctiveFacet(e)) throw Error(e + " is not defined in the facets attribute of the helper configuration");
                    return h.isRefined(this.facetsRefinements, e, t) ? this.setQueryParameters({
                        facetsRefinements: h.removeRefinement(this.facetsRefinements, e, t)
                    }) : this
                },
                removeExcludeRefinement: function(e, t) {
                    if (!this.isConjunctiveFacet(e)) throw Error(e + " is not defined in the facets attribute of the helper configuration");
                    return h.isRefined(this.facetsExcludes, e, t) ? this.setQueryParameters({
                        facetsExcludes: h.removeRefinement(this.facetsExcludes, e, t)
                    }) : this
                },
                removeDisjunctiveFacetRefinement: function(e, t) {
                    if (!this.isDisjunctiveFacet(e)) throw Error(e + " is not defined in the disjunctiveFacets attribute of the helper configuration");
                    return h.isRefined(this.disjunctiveFacetsRefinements, e, t) ? this.setQueryParameters({
                        disjunctiveFacetsRefinements: h.removeRefinement(this.disjunctiveFacetsRefinements, e, t)
                    }) : this
                },
                removeTagRefinement: function(e) {
                    if (!this.isTagRefined(e)) return this;
                    var t = {
                        tagRefinements: this.tagRefinements.filter(function(t) {
                            return t !== e
                        })
                    };
                    return this.setQueryParameters(t)
                },
                toggleRefinement: function(e, t) {
                    return this.toggleFacetRefinement(e, t)
                },
                toggleFacetRefinement: function(e, t) {
                    if (this.isHierarchicalFacet(e)) return this.toggleHierarchicalFacetRefinement(e, t);
                    if (this.isConjunctiveFacet(e)) return this.toggleConjunctiveFacetRefinement(e, t);
                    if (this.isDisjunctiveFacet(e)) return this.toggleDisjunctiveFacetRefinement(e, t);
                    throw Error("Cannot refine the undeclared facet " + e + "; it should be added to the helper options facets, disjunctiveFacets or hierarchicalFacets")
                },
                toggleConjunctiveFacetRefinement: function(e, t) {
                    if (!this.isConjunctiveFacet(e)) throw Error(e + " is not defined in the facets attribute of the helper configuration");
                    return this.setQueryParameters({
                        facetsRefinements: h.toggleRefinement(this.facetsRefinements, e, t)
                    })
                },
                toggleExcludeFacetRefinement: function(e, t) {
                    if (!this.isConjunctiveFacet(e)) throw Error(e + " is not defined in the facets attribute of the helper configuration");
                    return this.setQueryParameters({
                        facetsExcludes: h.toggleRefinement(this.facetsExcludes, e, t)
                    })
                },
                toggleDisjunctiveFacetRefinement: function(e, t) {
                    if (!this.isDisjunctiveFacet(e)) throw Error(e + " is not defined in the disjunctiveFacets attribute of the helper configuration");
                    return this.setQueryParameters({
                        disjunctiveFacetsRefinements: h.toggleRefinement(this.disjunctiveFacetsRefinements, e, t)
                    })
                },
                toggleHierarchicalFacetRefinement: function(e, t) {
                    if (!this.isHierarchicalFacet(e)) throw Error(e + " is not defined in the hierarchicalFacets attribute of the helper configuration");
                    var r = this._getHierarchicalFacetSeparator(this.getHierarchicalFacetByName(e)),
                        i = {};
                    return void 0 !== this.hierarchicalFacetsRefinements[e] && this.hierarchicalFacetsRefinements[e].length > 0 && (this.hierarchicalFacetsRefinements[e][0] === t || 0 === this.hierarchicalFacetsRefinements[e][0].indexOf(t + r)) ? -1 === t.indexOf(r) ? i[e] = [] : i[e] = [t.slice(0, t.lastIndexOf(r))] : i[e] = [t], this.setQueryParameters({
                        hierarchicalFacetsRefinements: n({}, i, this.hierarchicalFacetsRefinements)
                    })
                },
                addHierarchicalFacetRefinement: function(e, t) {
                    if (this.isHierarchicalFacetRefined(e)) throw Error(e + " is already refined.");
                    if (!this.isHierarchicalFacet(e)) throw Error(e + " is not defined in the hierarchicalFacets attribute of the helper configuration.");
                    var r = {};
                    return r[e] = [t], this.setQueryParameters({
                        hierarchicalFacetsRefinements: n({}, r, this.hierarchicalFacetsRefinements)
                    })
                },
                removeHierarchicalFacetRefinement: function(e) {
                    if (!this.isHierarchicalFacetRefined(e)) return this;
                    var t = {};
                    return t[e] = [], this.setQueryParameters({
                        hierarchicalFacetsRefinements: n({}, t, this.hierarchicalFacetsRefinements)
                    })
                },
                toggleTagRefinement: function(e) {
                    return this.isTagRefined(e) ? this.removeTagRefinement(e) : this.addTagRefinement(e)
                },
                isDisjunctiveFacet: function(e) {
                    return this.disjunctiveFacets.indexOf(e) > -1
                },
                isHierarchicalFacet: function(e) {
                    return void 0 !== this.getHierarchicalFacetByName(e)
                },
                isConjunctiveFacet: function(e) {
                    return this.facets.indexOf(e) > -1
                },
                isFacetRefined: function(e, t) {
                    return !!this.isConjunctiveFacet(e) && h.isRefined(this.facetsRefinements, e, t)
                },
                isExcludeRefined: function(e, t) {
                    return !!this.isConjunctiveFacet(e) && h.isRefined(this.facetsExcludes, e, t)
                },
                isDisjunctiveFacetRefined: function(e, t) {
                    return !!this.isDisjunctiveFacet(e) && h.isRefined(this.disjunctiveFacetsRefinements, e, t)
                },
                isHierarchicalFacetRefined: function(e, t) {
                    if (!this.isHierarchicalFacet(e)) return !1;
                    var r = this.getHierarchicalRefinement(e);
                    return t ? -1 !== r.indexOf(t) : r.length > 0
                },
                isNumericRefined: function(e, t, r) {
                    if (void 0 === r && void 0 === t) return !!this.numericRefinements[e];
                    var n = this.numericRefinements[e] && void 0 !== this.numericRefinements[e][t];
                    if (void 0 === r || !n) return n;
                    var s = o(r),
                        a = void 0 !== i(this.numericRefinements[e][t], function(e) {
                            return l(e, s)
                        });
                    return n && a
                },
                isTagRefined: function(e) {
                    return -1 !== this.tagRefinements.indexOf(e)
                },
                getRefinedDisjunctiveFacets: function() {
                    var e = this,
                        t = s(Object.keys(this.numericRefinements).filter(function(t) {
                            return Object.keys(e.numericRefinements[t]).length > 0
                        }), this.disjunctiveFacets);
                    return Object.keys(this.disjunctiveFacetsRefinements).filter(function(t) {
                        return e.disjunctiveFacetsRefinements[t].length > 0
                    }).concat(t).concat(this.getRefinedHierarchicalFacets()).sort()
                },
                getRefinedHierarchicalFacets: function() {
                    var e = this;
                    return s(this.hierarchicalFacets.map(function(e) {
                        return e.name
                    }), Object.keys(this.hierarchicalFacetsRefinements).filter(function(t) {
                        return e.hierarchicalFacetsRefinements[t].length > 0
                    })).sort()
                },
                getUnrefinedDisjunctiveFacets: function() {
                    var e = this.getRefinedDisjunctiveFacets();
                    return this.disjunctiveFacets.filter(function(t) {
                        return -1 === e.indexOf(t)
                    })
                },
                managedParameters: ["index", "facets", "disjunctiveFacets", "facetsRefinements", "hierarchicalFacets", "facetsExcludes", "disjunctiveFacetsRefinements", "numericRefinements", "tagRefinements", "hierarchicalFacetsRefinements"],
                getQueryParams: function() {
                    var e = this.managedParameters,
                        t = {},
                        r = this;
                    return Object.keys(this).forEach(function(n) {
                        var i = r[n]; - 1 === e.indexOf(n) && void 0 !== i && (t[n] = i)
                    }), t
                },
                setQueryParameter: function(e, t) {
                    if (this[e] === t) return this;
                    var r = {};
                    return r[e] = t, this.setQueryParameters(r)
                },
                setQueryParameters: function(e) {
                    if (!e) return this;
                    var t = m.validate(this, e);
                    if (t) throw t;
                    var r = this,
                        n = m._parseNumbers(e),
                        i = Object.keys(this).reduce(function(e, t) {
                            return e[t] = r[t], e
                        }, {}),
                        s = Object.keys(n).reduce(function(e, t) {
                            var r = void 0 !== e[t],
                                i = void 0 !== n[t];
                            return r && !i ? u(e, [t]) : (i && (e[t] = n[t]), e)
                        }, i);
                    return new this.constructor(s)
                },
                resetPage: function() {
                    return void 0 === this.page ? this : this.setPage(0)
                },
                _getHierarchicalFacetSortBy: function(e) {
                    return e.sortBy || ["isRefined:desc", "name:asc"]
                },
                _getHierarchicalFacetSeparator: function(e) {
                    return e.separator || " > "
                },
                _getHierarchicalRootPath: function(e) {
                    return e.rootPath || null
                },
                _getHierarchicalShowParentLevel: function(e) {
                    return "boolean" != typeof e.showParentLevel || e.showParentLevel
                },
                getHierarchicalFacetByName: function(e) {
                    return i(this.hierarchicalFacets, function(t) {
                        return t.name === e
                    })
                },
                getHierarchicalFacetBreadcrumb: function(e) {
                    if (!this.isHierarchicalFacet(e)) return [];
                    var t = this.getHierarchicalRefinement(e)[0];
                    if (!t) return [];
                    var r = this._getHierarchicalFacetSeparator(this.getHierarchicalFacetByName(e));
                    return t.split(r).map(function(e) {
                        return e.trim()
                    })
                },
                toString: function() {
                    return JSON.stringify(this, null, 2)
                }
            }, e.exports = m
        },
        475626: function(e, t, r) {
            "use strict";
            e.exports = function(e) {
                return function(t, r) {
                    var n = e.hierarchicalFacets[r],
                        o = e.hierarchicalFacetsRefinements[n.name] && e.hierarchicalFacetsRefinements[n.name][0] || "",
                        f = e._getHierarchicalFacetSeparator(n),
                        h = e._getHierarchicalRootPath(n),
                        l = e._getHierarchicalShowParentLevel(n),
                        m = s(e._getHierarchicalFacetSortBy(n)),
                        d = t.every(function(e) {
                            return e.exhaustive
                        }),
                        p = t;
                    return h && (p = t.slice(h.split(f).length)), p.reduce(function(e, t, r) {
                        var n = e;
                        if (r > 0) {
                            var s = 0;
                            for (n = e; s < r;) n = i(n && Array.isArray(n.data) ? n.data : [], function(e) {
                                return e.isRefined
                            }), s++
                        }
                        if (n) {
                            var d = Object.keys(t.data).map(function(e) {
                                return [e, t.data[e]]
                            }).filter(function(e) {
                                var t, r;
                                return t = e[0], r = n.path || h, (!h || 0 === t.indexOf(h) && h !== t) && (!h && -1 === t.indexOf(f) || h && t.split(f).length - h.split(f).length == 1 || -1 === t.indexOf(f) && -1 === o.indexOf(f) || 0 === o.indexOf(t) || 0 === t.indexOf(r + f) && (l || 0 === t.indexOf(o)))
                            });
                            n.data = a(d.map(function(e) {
                                var r, n, i, s, a = e[0];
                                return r = e[1], n = u(o), i = t.exhaustive, {
                                    name: (s = a.split(f))[s.length - 1].trim(),
                                    path: a,
                                    escapedValue: c(a),
                                    count: r,
                                    isRefined: n === a || 0 === n.indexOf(a + f),
                                    exhaustive: i,
                                    data: null
                                }
                            }), m[0], m[1])
                        }
                        return e
                    }, {
                        name: e.hierarchicalFacets[r].name,
                        count: null,
                        isRefined: !0,
                        path: null,
                        escapedValue: null,
                        exhaustive: d,
                        data: null
                    })
                }
            };
            var n = r(157972),
                i = r(634346),
                s = r(330369),
                a = r(450081),
                c = n.escapeFacetValue,
                u = n.unescapeFacetValue
        },
        800348: function(e, t, r) {
            "use strict";
            var n = r(7032),
                i = r(954873),
                s = r(157972),
                a = r(634346),
                c = r(918871),
                u = r(330369),
                o = r(661390),
                f = r(450081),
                h = s.escapeFacetValue,
                l = s.unescapeFacetValue,
                m = r(475626);

            function d(e) {
                var t = {};
                return e.forEach(function(e, r) {
                    t[e] = r
                }), t
            }

            function p(e, t, r) {
                t && t[r] && (e.stats = t[r])
            }

            function v(e, t, r) {
                var s = t[0];
                this._rawResults = t;
                var u = this;
                Object.keys(s).forEach(function(e) {
                    u[e] = s[e]
                }), Object.keys(r || {}).forEach(function(e) {
                    u[e] = r[e]
                }), this.processingTimeMS = t.reduce(function(e, t) {
                    return void 0 === t.processingTimeMS ? e : e + t.processingTimeMS
                }, 0), this.disjunctiveFacets = [], this.hierarchicalFacets = e.hierarchicalFacets.map(function() {
                    return []
                }), this.facets = [];
                var f = e.getRefinedDisjunctiveFacets(),
                    h = d(e.facets),
                    v = d(e.disjunctiveFacets),
                    g = 1,
                    y = s.facets || {};
                Object.keys(y).forEach(function(t) {
                    var r = y[t],
                        n = a(e.hierarchicalFacets, function(e) {
                            return (e.attributes || []).indexOf(t) > -1
                        });
                    if (n) {
                        var i = n.attributes.indexOf(t),
                            o = c(e.hierarchicalFacets, function(e) {
                                return e.name === n.name
                            });
                        u.hierarchicalFacets[o][i] = {
                            attribute: t,
                            data: r,
                            exhaustive: s.exhaustiveFacetsCount
                        }
                    } else {
                        var f, l = -1 !== e.disjunctiveFacets.indexOf(t),
                            m = -1 !== e.facets.indexOf(t);
                        l && (f = v[t], u.disjunctiveFacets[f] = {
                            name: t,
                            data: r,
                            exhaustive: s.exhaustiveFacetsCount
                        }, p(u.disjunctiveFacets[f], s.facets_stats, t)), m && (f = h[t], u.facets[f] = {
                            name: t,
                            data: r,
                            exhaustive: s.exhaustiveFacetsCount
                        }, p(u.facets[f], s.facets_stats, t))
                    }
                }), this.hierarchicalFacets = n(this.hierarchicalFacets), f.forEach(function(r) {
                    var n = t[g],
                        a = n && n.facets ? n.facets : {},
                        f = e.getHierarchicalFacetByName(r);
                    Object.keys(a).forEach(function(t) {
                        var r, h = a[t];
                        if (f) {
                            r = c(e.hierarchicalFacets, function(e) {
                                return e.name === f.name
                            });
                            var m = c(u.hierarchicalFacets[r], function(e) {
                                return e.attribute === t
                            });
                            if (-1 === m) return;
                            u.hierarchicalFacets[r][m].data = o({}, u.hierarchicalFacets[r][m].data, h)
                        } else {
                            r = v[t];
                            var d = s.facets && s.facets[t] || {};
                            u.disjunctiveFacets[r] = {
                                name: t,
                                data: i({}, h, d),
                                exhaustive: n.exhaustiveFacetsCount
                            }, p(u.disjunctiveFacets[r], n.facets_stats, t), e.disjunctiveFacetsRefinements[t] && e.disjunctiveFacetsRefinements[t].forEach(function(n) {
                                !u.disjunctiveFacets[r].data[n] && e.disjunctiveFacetsRefinements[t].indexOf(l(n)) > -1 && (u.disjunctiveFacets[r].data[n] = 0)
                            })
                        }
                    }), g++
                }), e.getRefinedHierarchicalFacets().forEach(function(r) {
                    var n = e.getHierarchicalFacetByName(r),
                        s = e._getHierarchicalFacetSeparator(n),
                        a = e.getHierarchicalRefinement(r);
                    0 === a.length || a[0].split(s).length < 2 || t.slice(g).forEach(function(t) {
                        var r = t && t.facets ? t.facets : {};
                        Object.keys(r).forEach(function(t) {
                            var o = r[t],
                                f = c(e.hierarchicalFacets, function(e) {
                                    return e.name === n.name
                                }),
                                h = c(u.hierarchicalFacets[f], function(e) {
                                    return e.attribute === t
                                });
                            if (-1 !== h) {
                                var l = {};
                                if (a.length > 0) {
                                    var m = a[0].split(s)[0];
                                    l[m] = u.hierarchicalFacets[f][h].data[m]
                                }
                                u.hierarchicalFacets[f][h].data = i(l, o, u.hierarchicalFacets[f][h].data)
                            }
                        }), g++
                    })
                }), Object.keys(e.facetsExcludes).forEach(function(t) {
                    var r = e.facetsExcludes[t],
                        n = h[t];
                    u.facets[n] = {
                        name: t,
                        data: y[t],
                        exhaustive: s.exhaustiveFacetsCount
                    }, r.forEach(function(e) {
                        u.facets[n] = u.facets[n] || {
                            name: t
                        }, u.facets[n].data = u.facets[n].data || {}, u.facets[n].data[e] = 0
                    })
                }), this.hierarchicalFacets = this.hierarchicalFacets.map(m(e)), this.facets = n(this.facets), this.disjunctiveFacets = n(this.disjunctiveFacets), this._state = e
            }

            function g(e, t) {
                var r = a(e, function(e) {
                    return e.name === t
                });
                return r && r.stats
            }

            function y(e, t, r, n, i) {
                var s = a(i, function(e) {
                        return e.name === r
                    }),
                    c = s && s.data && s.data[n] ? s.data[n] : 0;
                return {
                    type: t,
                    attributeName: r,
                    name: n,
                    count: c,
                    exhaustive: s && s.exhaustive || !1
                }
            }
            v.prototype.getFacetByName = function(e) {
                function t(t) {
                    return t.name === e
                }
                return a(this.facets, t) || a(this.disjunctiveFacets, t) || a(this.hierarchicalFacets, t)
            }, v.DEFAULT_SORT = ["isRefined:desc", "count:desc", "name:asc"], v.prototype.getFacetValues = function(e, t) {
                var r, n = function(e, t) {
                    function r(e) {
                        return e.name === t
                    }
                    if (e._state.isConjunctiveFacet(t)) {
                        var n = a(e.facets, r);
                        return n ? Object.keys(n.data).map(function(r) {
                            var i = h(r);
                            return {
                                name: r,
                                escapedValue: i,
                                count: n.data[r],
                                isRefined: e._state.isFacetRefined(t, i),
                                isExcluded: e._state.isExcludeRefined(t, r)
                            }
                        }) : []
                    }
                    if (e._state.isDisjunctiveFacet(t)) {
                        var i = a(e.disjunctiveFacets, r);
                        return i ? Object.keys(i.data).map(function(r) {
                            var n = h(r);
                            return {
                                name: r,
                                escapedValue: n,
                                count: i.data[r],
                                isRefined: e._state.isDisjunctiveFacetRefined(t, n)
                            }
                        }) : []
                    }
                    if (e._state.isHierarchicalFacet(t)) {
                        var s = a(e.hierarchicalFacets, r);
                        if (!s) return s;
                        var c = e._state.getHierarchicalFacetByName(t),
                            u = e._state._getHierarchicalFacetSeparator(c),
                            o = l(e._state.getHierarchicalRefinement(t)[0] || "");
                        0 === o.indexOf(c.rootPath) && (o = o.replace(c.rootPath + u, ""));
                        var f = o.split(u);
                        return f.unshift(t),
                            function e(t, r, n) {
                                t.isRefined = t.name === r[n], t.data && t.data.forEach(function(t) {
                                    e(t, r, n + 1)
                                })
                            }(s, f, 0), s
                    }
                }(this, e);
                if (n) {
                    var s = i({}, t, {
                            sortBy: v.DEFAULT_SORT,
                            facetOrdering: !(t && t.sortBy)
                        }),
                        c = this;
                    return r = Array.isArray(n) ? [e] : c._state.getHierarchicalFacetByName(n.name).attributes,
                        function e(t, r, n, s) {
                            if (s = s || 0, Array.isArray(r)) return t(r, n[s]);
                            if (!r.data || 0 === r.data.length) return r;
                            var a = r.data.map(function(r) {
                                return e(t, r, n, s + 1)
                            });
                            return i({
                                data: t(a, n[s])
                            }, r)
                        }(function(e, t) {
                            if (s.facetOrdering) {
                                var r, n, i, a, o, h, l = c.renderingContent && c.renderingContent.facetOrdering && c.renderingContent.facetOrdering.values && c.renderingContent.facetOrdering.values[t];
                                if (l) return i = [], a = [], o = (l.order || []).reduce(function(e, t, r) {
                                    return e[t] = r, e
                                }, {}), e.forEach(function(e) {
                                    var t = e.path || e.name;
                                    void 0 !== o[t] ? i[o[t]] = e : a.push(e)
                                }), i = i.filter(function(e) {
                                    return e
                                }), "hidden" === (h = l.sortRemainingBy) ? i : (n = "alpha" === h ? [
                                    ["path", "name"],
                                    ["asc", "asc"]
                                ] : [
                                    ["count"],
                                    ["desc"]
                                ], i.concat(f(a, n[0], n[1])))
                            }
                            if (Array.isArray(s.sortBy)) {
                                var m = u(s.sortBy, v.DEFAULT_SORT);
                                return f(e, m[0], m[1])
                            }
                            if ("function" == typeof s.sortBy) return r = s.sortBy, e.sort(r);
                            throw Error("options.sortBy is optional but if defined it must be either an array of string (predicates) or a sorting function")
                        }, n, r)
                }
            }, v.prototype.getFacetStats = function(e) {
                return this._state.isConjunctiveFacet(e) ? g(this.facets, e) : this._state.isDisjunctiveFacet(e) ? g(this.disjunctiveFacets, e) : void 0
            }, v.prototype.getRefinements = function() {
                var e = this._state,
                    t = this,
                    r = [];
                return Object.keys(e.facetsRefinements).forEach(function(n) {
                    e.facetsRefinements[n].forEach(function(i) {
                        r.push(y(e, "facet", n, i, t.facets))
                    })
                }), Object.keys(e.facetsExcludes).forEach(function(n) {
                    e.facetsExcludes[n].forEach(function(i) {
                        r.push(y(e, "exclude", n, i, t.facets))
                    })
                }), Object.keys(e.disjunctiveFacetsRefinements).forEach(function(n) {
                    e.disjunctiveFacetsRefinements[n].forEach(function(i) {
                        r.push(y(e, "disjunctive", n, i, t.disjunctiveFacets))
                    })
                }), Object.keys(e.hierarchicalFacetsRefinements).forEach(function(n) {
                    e.hierarchicalFacetsRefinements[n].forEach(function(i) {
                        var s, c, u, o, f, h, l, m;
                        r.push((s = t.hierarchicalFacets, c = e.getHierarchicalFacetByName(n), u = e._getHierarchicalFacetSeparator(c), o = i.split(u), f = a(s, function(e) {
                            return e.name === n
                        }), l = (h = o.reduce(function(e, t) {
                            var r = e && a(e.data, function(e) {
                                return e.name === t
                            });
                            return void 0 !== r ? r : e
                        }, f)) && h.count || 0, m = h && h.exhaustive || !1, {
                            type: "hierarchical",
                            attributeName: n,
                            name: h && h.path || "",
                            count: l,
                            exhaustive: m
                        }))
                    })
                }), Object.keys(e.numericRefinements).forEach(function(t) {
                    var n = e.numericRefinements[t];
                    Object.keys(n).forEach(function(e) {
                        n[e].forEach(function(n) {
                            r.push({
                                type: "numeric",
                                attributeName: t,
                                name: n,
                                numericValue: n,
                                operator: e
                            })
                        })
                    })
                }), e.tagRefinements.forEach(function(e) {
                    r.push({
                        type: "tag",
                        attributeName: "_tags",
                        name: e
                    })
                }), r
            }, e.exports = v
        },
        935528: function(e, t, r) {
            "use strict";
            var n = r(3698),
                i = r(855920),
                s = r(157972).escapeFacetValue,
                a = r(5926),
                c = r(661390),
                u = r(982904),
                o = r(606009),
                f = r(950706),
                h = r(724105),
                l = r(800348),
                m = r(149243);

            function d(e, t, r) {
                "function" == typeof e.addAlgoliaAgent && e.addAlgoliaAgent("JS Helper (" + m + ")"), this.setClient(e);
                var n = r || {};
                n.index = t, this.state = h.make(n), this.lastResults = null, this._queryId = 0, this._lastQueryIdReceived = -1, this.derivedHelpers = [], this._currentNbQueries = 0
            }

            function p(e) {
                if (e < 0) throw Error("Page requested below 0.");
                return this._change({
                    state: this.state.setPage(e),
                    isPageReset: !1
                }), this
            }

            function v() {
                return this.state.page
            }
            a(d, n), d.prototype.search = function() {
                return this._search({
                    onlyWithDerivedHelpers: !1
                }), this
            }, d.prototype.searchOnlyWithDerivedHelpers = function() {
                return this._search({
                    onlyWithDerivedHelpers: !0
                }), this
            }, d.prototype.getQuery = function() {
                var e = this.state;
                return f._getHitsSearchParams(e)
            }, d.prototype.searchOnce = function(e, t) {
                var r = e ? this.state.setQueryParameters(e) : this.state,
                    n = f._getQueries(r.index, r),
                    i = this;
                if (this._currentNbQueries++, this.emit("searchOnce", {
                        state: r
                    }), t) {
                    this.client.search(n).then(function(e) {
                        i._currentNbQueries--, 0 === i._currentNbQueries && i.emit("searchQueueEmpty"), t(null, new l(r, e.results), r)
                    }).catch(function(e) {
                        i._currentNbQueries--, 0 === i._currentNbQueries && i.emit("searchQueueEmpty"), t(e, null, r)
                    });
                    return
                }
                return this.client.search(n).then(function(e) {
                    return i._currentNbQueries--, 0 === i._currentNbQueries && i.emit("searchQueueEmpty"), {
                        content: new l(r, e.results),
                        state: r,
                        _originalResponse: e
                    }
                }, function(e) {
                    throw i._currentNbQueries--, 0 === i._currentNbQueries && i.emit("searchQueueEmpty"), e
                })
            }, d.prototype.findAnswers = function(e) {
                console.warn("[algoliasearch-helper] answers is no longer supported");
                var t = this.state,
                    r = this.derivedHelpers[0];
                if (!r) return Promise.resolve([]);
                var n = r.getModifiedState(t),
                    i = c({
                        attributesForPrediction: e.attributesForPrediction,
                        nbHits: e.nbHits
                    }, {
                        params: o(f._getHitsSearchParams(n), ["attributesToSnippet", "hitsPerPage", "restrictSearchableAttributes", "snippetEllipsisText"])
                    }),
                    s = "search for answers was called, but this client does not have a function client.initIndex(index).findAnswers";
                if ("function" != typeof this.client.initIndex) throw Error(s);
                var a = this.client.initIndex(n.index);
                if ("function" != typeof a.findAnswers) throw Error(s);
                return a.findAnswers(n.query, e.queryLanguages, i)
            }, d.prototype.searchForFacetValues = function(e, t, r, n) {
                var i, a = "function" == typeof this.client.searchForFacetValues,
                    c = "function" == typeof this.client.initIndex;
                if (!a && !c && "function" != typeof this.client.search) throw Error("search for facet values (searchable) was called, but this client does not have a function client.searchForFacetValues or client.initIndex(index).searchForFacetValues");
                var u = this.state.setQueryParameters(n || {}),
                    o = u.isDisjunctiveFacet(e),
                    h = f.getSearchForFacetQuery(e, t, r, u);
                this._currentNbQueries++;
                var l = this;
                return a ? i = this.client.searchForFacetValues([{
                    indexName: u.index,
                    params: h
                }]) : c ? i = this.client.initIndex(u.index).searchForFacetValues(h) : (delete h.facetName, i = this.client.search([{
                    type: "facet",
                    facet: e,
                    indexName: u.index,
                    params: h
                }]).then(function(e) {
                    return e.results[0]
                })), this.emit("searchForFacetValues", {
                    state: u,
                    facet: e,
                    query: t
                }), i.then(function(t) {
                    return l._currentNbQueries--, 0 === l._currentNbQueries && l.emit("searchQueueEmpty"), (t = Array.isArray(t) ? t[0] : t).facetHits.forEach(function(t) {
                        t.escapedValue = s(t.value), t.isRefined = o ? u.isDisjunctiveFacetRefined(e, t.escapedValue) : u.isFacetRefined(e, t.escapedValue)
                    }), t
                }, function(e) {
                    throw l._currentNbQueries--, 0 === l._currentNbQueries && l.emit("searchQueueEmpty"), e
                })
            }, d.prototype.setQuery = function(e) {
                return this._change({
                    state: this.state.resetPage().setQuery(e),
                    isPageReset: !0
                }), this
            }, d.prototype.clearRefinements = function(e) {
                return this._change({
                    state: this.state.resetPage().clearRefinements(e),
                    isPageReset: !0
                }), this
            }, d.prototype.clearTags = function() {
                return this._change({
                    state: this.state.resetPage().clearTags(),
                    isPageReset: !0
                }), this
            }, d.prototype.addDisjunctiveFacetRefinement = function(e, t) {
                return this._change({
                    state: this.state.resetPage().addDisjunctiveFacetRefinement(e, t),
                    isPageReset: !0
                }), this
            }, d.prototype.addDisjunctiveRefine = function() {
                return this.addDisjunctiveFacetRefinement.apply(this, arguments)
            }, d.prototype.addHierarchicalFacetRefinement = function(e, t) {
                return this._change({
                    state: this.state.resetPage().addHierarchicalFacetRefinement(e, t),
                    isPageReset: !0
                }), this
            }, d.prototype.addNumericRefinement = function(e, t, r) {
                return this._change({
                    state: this.state.resetPage().addNumericRefinement(e, t, r),
                    isPageReset: !0
                }), this
            }, d.prototype.addFacetRefinement = function(e, t) {
                return this._change({
                    state: this.state.resetPage().addFacetRefinement(e, t),
                    isPageReset: !0
                }), this
            }, d.prototype.addRefine = function() {
                return this.addFacetRefinement.apply(this, arguments)
            }, d.prototype.addFacetExclusion = function(e, t) {
                return this._change({
                    state: this.state.resetPage().addExcludeRefinement(e, t),
                    isPageReset: !0
                }), this
            }, d.prototype.addExclude = function() {
                return this.addFacetExclusion.apply(this, arguments)
            }, d.prototype.addTag = function(e) {
                return this._change({
                    state: this.state.resetPage().addTagRefinement(e),
                    isPageReset: !0
                }), this
            }, d.prototype.removeNumericRefinement = function(e, t, r) {
                return this._change({
                    state: this.state.resetPage().removeNumericRefinement(e, t, r),
                    isPageReset: !0
                }), this
            }, d.prototype.removeDisjunctiveFacetRefinement = function(e, t) {
                return this._change({
                    state: this.state.resetPage().removeDisjunctiveFacetRefinement(e, t),
                    isPageReset: !0
                }), this
            }, d.prototype.removeDisjunctiveRefine = function() {
                return this.removeDisjunctiveFacetRefinement.apply(this, arguments)
            }, d.prototype.removeHierarchicalFacetRefinement = function(e) {
                return this._change({
                    state: this.state.resetPage().removeHierarchicalFacetRefinement(e),
                    isPageReset: !0
                }), this
            }, d.prototype.removeFacetRefinement = function(e, t) {
                return this._change({
                    state: this.state.resetPage().removeFacetRefinement(e, t),
                    isPageReset: !0
                }), this
            }, d.prototype.removeRefine = function() {
                return this.removeFacetRefinement.apply(this, arguments)
            }, d.prototype.removeFacetExclusion = function(e, t) {
                return this._change({
                    state: this.state.resetPage().removeExcludeRefinement(e, t),
                    isPageReset: !0
                }), this
            }, d.prototype.removeExclude = function() {
                return this.removeFacetExclusion.apply(this, arguments)
            }, d.prototype.removeTag = function(e) {
                return this._change({
                    state: this.state.resetPage().removeTagRefinement(e),
                    isPageReset: !0
                }), this
            }, d.prototype.toggleFacetExclusion = function(e, t) {
                return this._change({
                    state: this.state.resetPage().toggleExcludeFacetRefinement(e, t),
                    isPageReset: !0
                }), this
            }, d.prototype.toggleExclude = function() {
                return this.toggleFacetExclusion.apply(this, arguments)
            }, d.prototype.toggleRefinement = function(e, t) {
                return this.toggleFacetRefinement(e, t)
            }, d.prototype.toggleFacetRefinement = function(e, t) {
                return this._change({
                    state: this.state.resetPage().toggleFacetRefinement(e, t),
                    isPageReset: !0
                }), this
            }, d.prototype.toggleRefine = function() {
                return this.toggleFacetRefinement.apply(this, arguments)
            }, d.prototype.toggleTag = function(e) {
                return this._change({
                    state: this.state.resetPage().toggleTagRefinement(e),
                    isPageReset: !0
                }), this
            }, d.prototype.nextPage = function() {
                var e = this.state.page || 0;
                return this.setPage(e + 1)
            }, d.prototype.previousPage = function() {
                var e = this.state.page || 0;
                return this.setPage(e - 1)
            }, d.prototype.setCurrentPage = p, d.prototype.setPage = p, d.prototype.setIndex = function(e) {
                return this._change({
                    state: this.state.resetPage().setIndex(e),
                    isPageReset: !0
                }), this
            }, d.prototype.setQueryParameter = function(e, t) {
                return this._change({
                    state: this.state.resetPage().setQueryParameter(e, t),
                    isPageReset: !0
                }), this
            }, d.prototype.setState = function(e) {
                return this._change({
                    state: h.make(e),
                    isPageReset: !1
                }), this
            }, d.prototype.overrideStateWithoutTriggeringChangeEvent = function(e) {
                return this.state = new h(e), this
            }, d.prototype.hasRefinements = function(e) {
                return !!u(this.state.getNumericRefinements(e)) || (this.state.isConjunctiveFacet(e) ? this.state.isFacetRefined(e) : this.state.isDisjunctiveFacet(e) ? this.state.isDisjunctiveFacetRefined(e) : !!this.state.isHierarchicalFacet(e) && this.state.isHierarchicalFacetRefined(e))
            }, d.prototype.isExcluded = function(e, t) {
                return this.state.isExcludeRefined(e, t)
            }, d.prototype.isDisjunctiveRefined = function(e, t) {
                return this.state.isDisjunctiveFacetRefined(e, t)
            }, d.prototype.hasTag = function(e) {
                return this.state.isTagRefined(e)
            }, d.prototype.isTagRefined = function() {
                return this.hasTagRefinements.apply(this, arguments)
            }, d.prototype.getIndex = function() {
                return this.state.index
            }, d.prototype.getCurrentPage = v, d.prototype.getPage = v, d.prototype.getTags = function() {
                return this.state.tagRefinements
            }, d.prototype.getRefinements = function(e) {
                var t = [];
                this.state.isConjunctiveFacet(e) ? (this.state.getConjunctiveRefinements(e).forEach(function(e) {
                    t.push({
                        value: e,
                        type: "conjunctive"
                    })
                }), this.state.getExcludeRefinements(e).forEach(function(e) {
                    t.push({
                        value: e,
                        type: "exclude"
                    })
                })) : this.state.isDisjunctiveFacet(e) && this.state.getDisjunctiveRefinements(e).forEach(function(e) {
                    t.push({
                        value: e,
                        type: "disjunctive"
                    })
                });
                var r = this.state.getNumericRefinements(e);
                return Object.keys(r).forEach(function(e) {
                    var n = r[e];
                    t.push({
                        value: n,
                        operator: e,
                        type: "numeric"
                    })
                }), t
            }, d.prototype.getNumericRefinement = function(e, t) {
                return this.state.getNumericRefinement(e, t)
            }, d.prototype.getHierarchicalFacetBreadcrumb = function(e) {
                return this.state.getHierarchicalFacetBreadcrumb(e)
            }, d.prototype._search = function(e) {
                var t = this.state,
                    r = [],
                    n = [];
                e.onlyWithDerivedHelpers || (n = f._getQueries(t.index, t), r.push({
                    state: t,
                    queriesCount: n.length,
                    helper: this
                }), this.emit("search", {
                    state: t,
                    results: this.lastResults
                }));
                var i = this.derivedHelpers.map(function(e) {
                        var n = e.getModifiedState(t),
                            i = n.index ? f._getQueries(n.index, n) : [];
                        return r.push({
                            state: n,
                            queriesCount: i.length,
                            helper: e
                        }), e.emit("search", {
                            state: n,
                            results: e.lastResults
                        }), i
                    }),
                    s = Array.prototype.concat.apply(n, i),
                    a = this._queryId++;
                if (this._currentNbQueries++, !s.length) return Promise.resolve({
                    results: []
                }).then(this._dispatchAlgoliaResponse.bind(this, r, a));
                try {
                    this.client.search(s).then(this._dispatchAlgoliaResponse.bind(this, r, a)).catch(this._dispatchAlgoliaError.bind(this, a))
                } catch (e) {
                    this.emit("error", {
                        error: e
                    })
                }
            }, d.prototype._dispatchAlgoliaResponse = function(e, t, r) {
                if (!(t < this._lastQueryIdReceived)) {
                    this._currentNbQueries -= t - this._lastQueryIdReceived, this._lastQueryIdReceived = t, 0 === this._currentNbQueries && this.emit("searchQueueEmpty");
                    var n = r.results.slice();
                    e.forEach(function(e) {
                        var t = e.state,
                            r = e.queriesCount,
                            i = e.helper,
                            s = n.splice(0, r);
                        if (!t.index) {
                            i.emit("result", {
                                results: null,
                                state: t
                            });
                            return
                        }
                        i.lastResults = new l(t, s), i.emit("result", {
                            results: i.lastResults,
                            state: t
                        })
                    })
                }
            }, d.prototype._dispatchAlgoliaError = function(e, t) {
                e < this._lastQueryIdReceived || (this._currentNbQueries -= e - this._lastQueryIdReceived, this._lastQueryIdReceived = e, this.emit("error", {
                    error: t
                }), 0 === this._currentNbQueries && this.emit("searchQueueEmpty"))
            }, d.prototype.containsRefinement = function(e, t, r, n) {
                return e || 0 !== t.length || 0 !== r.length || 0 !== n.length
            }, d.prototype._hasDisjunctiveRefinements = function(e) {
                return this.state.disjunctiveRefinements[e] && this.state.disjunctiveRefinements[e].length > 0
            }, d.prototype._change = function(e) {
                var t = e.state,
                    r = e.isPageReset;
                t !== this.state && (this.state = t, this.emit("change", {
                    state: this.state,
                    results: this.lastResults,
                    isPageReset: r
                }))
            }, d.prototype.clearCache = function() {
                return this.client.clearCache && this.client.clearCache(), this
            }, d.prototype.setClient = function(e) {
                return this.client === e || ("function" == typeof e.addAlgoliaAgent && e.addAlgoliaAgent("JS Helper (" + m + ")"), this.client = e), this
            }, d.prototype.getClient = function() {
                return this.client
            }, d.prototype.derive = function(e) {
                var t = new i(this, e);
                return this.derivedHelpers.push(t), t
            }, d.prototype.detachDerivedHelper = function(e) {
                var t = this.derivedHelpers.indexOf(e);
                if (-1 === t) throw Error("Derived helper already detached");
                this.derivedHelpers.splice(t, 1)
            }, d.prototype.hasPendingRequests = function() {
                return this._currentNbQueries > 0
            }, e.exports = d
        },
        7032: function(e) {
            "use strict";
            e.exports = function(e) {
                return Array.isArray(e) ? e.filter(Boolean) : []
            }
        },
        954873: function(e) {
            "use strict";
            e.exports = function() {
                var e = Array.prototype.slice.call(arguments);
                return e.reduceRight(function(e, t) {
                    return Object.keys(Object(t)).forEach(function(r) {
                        void 0 !== t[r] && (void 0 !== e[r] && delete e[r], e[r] = t[r])
                    }), e
                }, {})
            }
        },
        157972: function(e) {
            "use strict";
            e.exports = {
                escapeFacetValue: function(e) {
                    return "string" != typeof e ? e : String(e).replace(/^-/, "\\-")
                },
                unescapeFacetValue: function(e) {
                    return "string" != typeof e ? e : e.replace(/^\\-/, "-")
                }
            }
        },
        634346: function(e) {
            "use strict";
            e.exports = function(e, t) {
                if (Array.isArray(e)) {
                    for (var r = 0; r < e.length; r++)
                        if (t(e[r])) return e[r]
                }
            }
        },
        918871: function(e) {
            "use strict";
            e.exports = function(e, t) {
                if (!Array.isArray(e)) return -1;
                for (var r = 0; r < e.length; r++)
                    if (t(e[r])) return r;
                return -1
            }
        },
        330369: function(e, t, r) {
            "use strict";
            var n = r(634346);
            e.exports = function(e, t) {
                var r = (t || []).map(function(e) {
                    return e.split(":")
                });
                return e.reduce(function(e, t) {
                    var i = t.split(":"),
                        s = n(r, function(e) {
                            return e[0] === i[0]
                        });
                    return i.length > 1 || !s ? (e[0].push(i[0]), e[1].push(i[1])) : (e[0].push(s[0]), e[1].push(s[1])), e
                }, [
                    [],
                    []
                ])
            }
        },
        5926: function(e) {
            "use strict";
            e.exports = function(e, t) {
                e.prototype = Object.create(t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                })
            }
        },
        50188: function(e) {
            "use strict";
            e.exports = function(e, t) {
                return e.filter(function(r, n) {
                    return t.indexOf(r) > -1 && e.indexOf(r) === n
                })
            }
        },
        661390: function(e) {
            "use strict";

            function t(e) {
                return "function" == typeof e || Array.isArray(e) || "[object Object]" === Object.prototype.toString.call(e)
            }
            e.exports = function(e) {
                t(e) || (e = {});
                for (var r = 1, n = arguments.length; r < n; r++) {
                    var i = arguments[r];
                    t(i) && function e(r, n) {
                        if (r === n) return r;
                        for (var i in n)
                            if (Object.prototype.hasOwnProperty.call(n, i) && "__proto__" !== i && "constructor" !== i) {
                                var s = n[i],
                                    a = r[i];
                                (void 0 === a || void 0 !== s) && (t(a) && t(s) ? r[i] = e(a, s) : r[i] = "object" == typeof s && null !== s ? e(Array.isArray(s) ? [] : {}, s) : s)
                            }
                        return r
                    }(e, i)
                }
                return e
            }
        },
        982904: function(e) {
            "use strict";
            e.exports = function(e) {
                return e && Object.keys(e).length > 0
            }
        },
        606009: function(e) {
            "use strict";
            e.exports = function(e, t) {
                if (null === e) return {};
                var r, n, i = {},
                    s = Object.keys(e);
                for (n = 0; n < s.length; n++) r = s[n], t.indexOf(r) >= 0 || (i[r] = e[r]);
                return i
            }
        },
        450081: function(e) {
            "use strict";
            e.exports = function(e, t, r) {
                if (!Array.isArray(e)) return [];
                Array.isArray(r) || (r = []);
                var n = e.map(function(e, r) {
                    return {
                        criteria: t.map(function(t) {
                            return e[t]
                        }),
                        index: r,
                        value: e
                    }
                });
                return n.sort(function(e, t) {
                    for (var n = -1; ++n < e.criteria.length;) {
                        var i = function(e, t) {
                            if (e !== t) {
                                var r = void 0 !== e,
                                    n = null === e,
                                    i = void 0 !== t,
                                    s = null === t;
                                if (!s && e > t || n && i || !r) return 1;
                                if (!n && e < t || s && r || !i) return -1
                            }
                            return 0
                        }(e.criteria[n], t.criteria[n]);
                        if (i) {
                            if (n >= r.length) return i;
                            if ("desc" === r[n]) return -i;
                            return i
                        }
                    }
                    return e.index - t.index
                }), n.map(function(e) {
                    return e.value
                })
            }
        },
        963687: function(e) {
            "use strict";
            e.exports = function e(t) {
                if ("number" == typeof t) return t;
                if ("string" == typeof t) return parseFloat(t);
                if (Array.isArray(t)) return t.map(e);
                throw Error("The value should be a number, a parsable string or an array of those.")
            }
        },
        950706: function(e, t, r) {
            "use strict";
            var n = r(661390);

            function i(e) {
                return Object.keys(e).sort().reduce(function(t, r) {
                    return t[r] = e[r], t
                }, {})
            }
            var s = {
                _getQueries: function(e, t) {
                    var r = [];
                    return r.push({
                        indexName: e,
                        params: s._getHitsSearchParams(t)
                    }), t.getRefinedDisjunctiveFacets().forEach(function(n) {
                        r.push({
                            indexName: e,
                            params: s._getDisjunctiveFacetSearchParams(t, n)
                        })
                    }), t.getRefinedHierarchicalFacets().forEach(function(n) {
                        var i = t.getHierarchicalFacetByName(n),
                            a = t.getHierarchicalRefinement(n),
                            c = t._getHierarchicalFacetSeparator(i);
                        if (a.length > 0 && a[0].split(c).length > 1) {
                            var u = a[0].split(c).slice(0, -1).reduce(function(e, t, r) {
                                return e.concat({
                                    attribute: i.attributes[r],
                                    value: 0 === r ? t : [e[e.length - 1].value, t].join(c)
                                })
                            }, []);
                            u.forEach(function(n, a) {
                                var c = s._getDisjunctiveFacetSearchParams(t, n.attribute, 0 === a);

                                function o(e) {
                                    return i.attributes.some(function(t) {
                                        return t === e.split(":")[0]
                                    })
                                }
                                var f = (c.facetFilters || []).reduce(function(e, t) {
                                        if (Array.isArray(t)) {
                                            var r = t.filter(function(e) {
                                                return !o(e)
                                            });
                                            r.length > 0 && e.push(r)
                                        }
                                        return "string" != typeof t || o(t) || e.push(t), e
                                    }, []),
                                    h = u[a - 1];
                                a > 0 ? c.facetFilters = f.concat(h.attribute + ":" + h.value) : c.facetFilters = f.length > 0 ? f : void 0, r.push({
                                    indexName: e,
                                    params: c
                                })
                            })
                        }
                    }), r
                },
                _getHitsSearchParams: function(e) {
                    var t = e.facets.concat(e.disjunctiveFacets).concat(s._getHitsHierarchicalFacetsAttributes(e)).sort(),
                        r = s._getFacetFilters(e),
                        a = s._getNumericFilters(e),
                        c = s._getTagFilters(e),
                        u = {
                            facets: t.indexOf("*") > -1 ? ["*"] : t,
                            tagFilters: c
                        };
                    return r.length > 0 && (u.facetFilters = r), a.length > 0 && (u.numericFilters = a), i(n({}, e.getQueryParams(), u))
                },
                _getDisjunctiveFacetSearchParams: function(e, t, r) {
                    var a = s._getFacetFilters(e, t, r),
                        c = s._getNumericFilters(e, t),
                        u = s._getTagFilters(e),
                        o = {
                            hitsPerPage: 0,
                            page: 0,
                            analytics: !1,
                            clickAnalytics: !1
                        };
                    u.length > 0 && (o.tagFilters = u);
                    var f = e.getHierarchicalFacetByName(t);
                    return f ? o.facets = s._getDisjunctiveHierarchicalFacetAttribute(e, f, r) : o.facets = t, c.length > 0 && (o.numericFilters = c), a.length > 0 && (o.facetFilters = a), i(n({}, e.getQueryParams(), o))
                },
                _getNumericFilters: function(e, t) {
                    if (e.numericFilters) return e.numericFilters;
                    var r = [];
                    return Object.keys(e.numericRefinements).forEach(function(n) {
                        var i = e.numericRefinements[n] || {};
                        Object.keys(i).forEach(function(e) {
                            var s = i[e] || [];
                            t !== n && s.forEach(function(t) {
                                if (Array.isArray(t)) {
                                    var i = t.map(function(t) {
                                        return n + e + t
                                    });
                                    r.push(i)
                                } else r.push(n + e + t)
                            })
                        })
                    }), r
                },
                _getTagFilters: function(e) {
                    return e.tagFilters ? e.tagFilters : e.tagRefinements.join(",")
                },
                _getFacetFilters: function(e, t, r) {
                    var n = [],
                        i = e.facetsRefinements || {};
                    Object.keys(i).sort().forEach(function(e) {
                        (i[e] || []).sort().forEach(function(t) {
                            n.push(e + ":" + t)
                        })
                    });
                    var s = e.facetsExcludes || {};
                    Object.keys(s).sort().forEach(function(e) {
                        (s[e] || []).sort().forEach(function(t) {
                            n.push(e + ":-" + t)
                        })
                    });
                    var a = e.disjunctiveFacetsRefinements || {};
                    Object.keys(a).sort().forEach(function(e) {
                        var r = a[e] || [];
                        if (e !== t && r && 0 !== r.length) {
                            var i = [];
                            r.sort().forEach(function(t) {
                                i.push(e + ":" + t)
                            }), n.push(i)
                        }
                    });
                    var c = e.hierarchicalFacetsRefinements || {};
                    return Object.keys(c).sort().forEach(function(i) {
                        var s, a, u = (c[i] || [])[0];
                        if (void 0 !== u) {
                            var o = e.getHierarchicalFacetByName(i),
                                f = e._getHierarchicalFacetSeparator(o),
                                h = e._getHierarchicalRootPath(o);
                            if (t === i) {
                                if (-1 === u.indexOf(f) || !h && !0 === r || h && h.split(f).length === u.split(f).length) return;
                                h ? (a = h.split(f).length - 1, u = h) : (a = u.split(f).length - 2, u = u.slice(0, u.lastIndexOf(f))), s = o.attributes[a]
                            } else a = u.split(f).length - 1, s = o.attributes[a];
                            s && n.push([s + ":" + u])
                        }
                    }), n
                },
                _getHitsHierarchicalFacetsAttributes: function(e) {
                    return e.hierarchicalFacets.reduce(function(t, r) {
                        var n = e.getHierarchicalRefinement(r.name)[0];
                        if (!n) return t.push(r.attributes[0]), t;
                        var i = e._getHierarchicalFacetSeparator(r),
                            s = n.split(i).length,
                            a = r.attributes.slice(0, s + 1);
                        return t.concat(a)
                    }, [])
                },
                _getDisjunctiveHierarchicalFacetAttribute: function(e, t, r) {
                    var n = e._getHierarchicalFacetSeparator(t);
                    if (!0 === r) {
                        var i = e._getHierarchicalRootPath(t),
                            s = 0;
                        return i && (s = i.split(n).length), [t.attributes[s]]
                    }
                    var a = (e.getHierarchicalRefinement(t.name)[0] || "").split(n).length - 1;
                    return t.attributes.slice(0, a + 1)
                },
                getSearchForFacetQuery: function(e, t, r, a) {
                    var c = a.isDisjunctiveFacet(e) ? a.clearRefinements(e) : a,
                        u = {
                            facetQuery: t,
                            facetName: e
                        };
                    return "number" == typeof r && (u.maxFacetHits = r), i(n({}, s._getHitsSearchParams(c), u))
                }
            };
            e.exports = s
        },
        945174: function(e) {
            "use strict";
            e.exports = function(e) {
                return null !== e && /^[a-zA-Z0-9_-]{1,64}$/.test(e)
            }
        },
        149243: function(e) {
            "use strict";
            e.exports = "3.14.0"
        },
        675123: function(e) {
            var t;
            t = function() {
                "use strict";

                function e(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter(function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })), r.push.apply(r, n)
                    }
                    return r
                }

                function t(t) {
                    for (var r = 1; r < arguments.length; r++) {
                        var n = null != arguments[r] ? arguments[r] : {};
                        r % 2 ? e(Object(n), !0).forEach(function(e) {
                            var r;
                            r = n[e], e in t ? Object.defineProperty(t, e, {
                                value: r,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : t[e] = r
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : e(Object(n)).forEach(function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                        })
                    }
                    return t
                }

                function r(e, t) {
                    return function(e) {
                        if (Array.isArray(e)) return e
                    }(e) || function(e, t) {
                        if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) {
                            var r = [],
                                n = !0,
                                i = !1,
                                s = void 0;
                            try {
                                for (var a, c = e[Symbol.iterator](); !(n = (a = c.next()).done) && (r.push(a.value), !t || r.length !== t); n = !0);
                            } catch (e) {
                                i = !0, s = e
                            } finally {
                                try {
                                    n || null == c.return || c.return()
                                } finally {
                                    if (i) throw s
                                }
                            }
                            return r
                        }
                    }(e, t) || function() {
                        throw TypeError("Invalid attempt to destructure non-iterable instance")
                    }()
                }

                function n(e) {
                    return function(e) {
                        if (Array.isArray(e)) {
                            for (var t = 0, r = Array(e.length); t < e.length; t++) r[t] = e[t];
                            return r
                        }
                    }(e) || function(e) {
                        if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
                    }(e) || function() {
                        throw TypeError("Invalid attempt to spread non-iterable instance")
                    }()
                }

                function i() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                            serializable: !0
                        },
                        t = {};
                    return {
                        get: function(r, n) {
                            var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                                    miss: function() {
                                        return Promise.resolve()
                                    }
                                },
                                s = JSON.stringify(r);
                            if (s in t) return Promise.resolve(e.serializable ? JSON.parse(t[s]) : t[s]);
                            var a = n(),
                                c = i && i.miss || function() {
                                    return Promise.resolve()
                                };
                            return a.then(function(e) {
                                return c(e)
                            }).then(function() {
                                return a
                            })
                        },
                        set: function(r, n) {
                            return t[JSON.stringify(r)] = e.serializable ? JSON.stringify(n) : n, Promise.resolve(n)
                        },
                        delete: function(e) {
                            return delete t[JSON.stringify(e)], Promise.resolve()
                        },
                        clear: function() {
                            return t = {}, Promise.resolve()
                        }
                    }
                }

                function s(e, t) {
                    return t && Object.keys(t).forEach(function(r) {
                        e[r] = t[r](e)
                    }), e
                }

                function a(e) {
                    for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
                    var i = 0;
                    return e.replace(/%s/g, function() {
                        return encodeURIComponent(r[i++])
                    })
                }
                var c = {
                    WithinQueryParameters: 0,
                    WithinHeaders: 1
                };

                function u(e, t) {
                    var r = e || {},
                        n = r.data || {};
                    return Object.keys(r).forEach(function(e) {
                        -1 === ["timeout", "headers", "queryParameters", "data", "cacheable"].indexOf(e) && (n[e] = r[e])
                    }), {
                        data: Object.entries(n).length > 0 ? n : void 0,
                        timeout: r.timeout || t,
                        headers: r.headers || {},
                        queryParameters: r.queryParameters || {},
                        cacheable: r.cacheable
                    }
                }
                var o = {
                    Read: 1,
                    Write: 2,
                    Any: 3
                };

                function f(e) {
                    var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
                    return t(t({}, e), {}, {
                        status: r,
                        lastUpdate: Date.now()
                    })
                }

                function h(e) {
                    return "string" == typeof e ? {
                        protocol: "https",
                        url: e,
                        accept: o.Any
                    } : {
                        protocol: e.protocol || "https",
                        url: e.url,
                        accept: e.accept || o.Any
                    }
                }
                var l = "POST";

                function m(e, r, i, s) {
                    var a, c, u, o = [],
                        l = function(e, r) {
                            if ("GET" !== e.method && (void 0 !== e.data || void 0 !== r.data)) return JSON.stringify(Array.isArray(e.data) ? e.data : t(t({}, e.data), r.data))
                        }(i, s),
                        m = (a = t(t({}, e.headers), s.headers), c = {}, Object.keys(a).forEach(function(e) {
                            var t = a[e];
                            c[e.toLowerCase()] = t
                        }), c),
                        g = i.method,
                        y = "GET" !== i.method ? {} : t(t({}, i.data), s.data),
                        R = t(t(t({
                            "x-algolia-agent": e.userAgent.value
                        }, e.queryParameters), y), s.queryParameters),
                        F = 0,
                        b = function t(r, n) {
                            var a, c, u, h = r.pop();
                            if (void 0 === h) throw {
                                name: "RetryError",
                                message: "Unreachable hosts - your application id may be incorrect. If the error persists, contact support@algolia.com.",
                                transporterStackTrace: p(o)
                            };
                            var y = {
                                    data: l,
                                    headers: m,
                                    method: g,
                                    url: (a = i.path, c = d(R), u = "".concat(h.protocol, "://").concat(h.url, "/").concat("/" === a.charAt(0) ? a.substr(1) : a), c.length && (u += "?".concat(c)), u),
                                    connectTimeout: n(F, e.timeouts.connect),
                                    responseTimeout: n(F, s.timeout)
                                },
                                b = function(e) {
                                    var t = {
                                        request: y,
                                        response: e,
                                        host: h,
                                        triesLeft: r.length
                                    };
                                    return o.push(t), t
                                },
                                j = {
                                    onSuccess: function(e) {
                                        return function(e) {
                                            try {
                                                return JSON.parse(e.content)
                                            } catch (t) {
                                                throw {
                                                    name: "DeserializationError",
                                                    message: t.message,
                                                    response: e
                                                }
                                            }
                                        }(e)
                                    },
                                    onRetry: function(i) {
                                        var s = b(i);
                                        return i.isTimedOut && F++, Promise.all([e.logger.info("Retryable failure", v(s)), e.hostsCache.set(h, f(h, i.isTimedOut ? 3 : 2))]).then(function() {
                                            return t(r, n)
                                        })
                                    },
                                    onFail: function(e) {
                                        throw b(e),
                                            function(e, t) {
                                                var r = e.content,
                                                    n = e.status,
                                                    i = r;
                                                try {
                                                    i = JSON.parse(r).message
                                                } catch (e) {}
                                                return {
                                                    name: "ApiError",
                                                    message: i,
                                                    status: n,
                                                    transporterStackTrace: t
                                                }
                                            }(e, p(o))
                                    }
                                };
                            return e.requester.send(y).then(function(e) {
                                var t, r, n;
                                return (t = e.status, e.isTimedOut || (r = e.isTimedOut, n = e.status, !r && 0 == ~~n) || 2 != ~~(t / 100) && 4 != ~~(t / 100)) ? j.onRetry(e) : 2 == ~~(e.status / 100) ? j.onSuccess(e) : j.onFail(e)
                            })
                        };
                    return (u = e.hostsCache, Promise.all(r.map(function(e) {
                        return u.get(e, function() {
                            return Promise.resolve(f(e))
                        })
                    })).then(function(e) {
                        var t = e.filter(function(e) {
                                return 1 === e.status || Date.now() - e.lastUpdate > 12e4
                            }),
                            i = e.filter(function(e) {
                                return 3 === e.status && Date.now() - e.lastUpdate <= 12e4
                            }),
                            s = [].concat(n(t), n(i));
                        return {
                            getTimeout: function(e, t) {
                                return (0 === i.length && 0 === e ? 1 : i.length + 3 + e) * t
                            },
                            statelessHosts: s.length > 0 ? s.map(function(e) {
                                return h(e)
                            }) : r
                        }
                    })).then(function(e) {
                        return b(n(e.statelessHosts).reverse(), e.getTimeout)
                    })
                }

                function d(e) {
                    return Object.keys(e).map(function(t) {
                        var r;
                        return a("%s=%s", t, (r = e[t], "[object Object]" === Object.prototype.toString.call(r) || "[object Array]" === Object.prototype.toString.call(r) ? JSON.stringify(e[t]) : e[t]))
                    }).join("&")
                }

                function p(e) {
                    return e.map(function(e) {
                        return v(e)
                    })
                }

                function v(e) {
                    var r = e.request.headers["x-algolia-api-key"] ? {
                        "x-algolia-api-key": "*****"
                    } : {};
                    return t(t({}, e), {}, {
                        request: t(t({}, e.request), {}, {
                            headers: t(t({}, e.request.headers), r)
                        })
                    })
                }
                var g = function(e) {
                        var n, i, a, f, l, d, p, v, g, y, R, F, b, j = e.appId,
                            P = (n = void 0 !== e.authMode ? e.authMode : c.WithinHeaders, i = {
                                "x-algolia-api-key": e.apiKey,
                                "x-algolia-application-id": j
                            }, {
                                headers: function() {
                                    return n === c.WithinHeaders ? i : {}
                                },
                                queryParameters: function() {
                                    return n === c.WithinQueryParameters ? i : {}
                                }
                            }),
                            _ = (f = (a = t(t({
                                hosts: [{
                                    url: "".concat(j, "-dsn.algolia.net"),
                                    accept: o.Read
                                }, {
                                    url: "".concat(j, ".algolia.net"),
                                    accept: o.Write
                                }].concat(function(e) {
                                    for (var t = e.length - 1; t > 0; t--) {
                                        var r = Math.floor(Math.random() * (t + 1)),
                                            n = e[t];
                                        e[t] = e[r], e[r] = n
                                    }
                                    return e
                                }([{
                                    url: "".concat(j, "-1.algolianet.com")
                                }, {
                                    url: "".concat(j, "-2.algolianet.com")
                                }, {
                                    url: "".concat(j, "-3.algolianet.com")
                                }]))
                            }, e), {}, {
                                headers: t(t(t({}, P.headers()), {
                                    "content-type": "application/x-www-form-urlencoded"
                                }), e.headers),
                                queryParameters: t(t({}, P.queryParameters()), e.queryParameters)
                            })).hostsCache, l = a.logger, d = a.requester, p = a.requestsCache, v = a.responsesCache, g = a.timeouts, y = a.userAgent, R = a.hosts, F = a.queryParameters, b = {
                                hostsCache: f,
                                logger: l,
                                requester: d,
                                requestsCache: p,
                                responsesCache: v,
                                timeouts: g,
                                userAgent: y,
                                headers: a.headers,
                                queryParameters: F,
                                hosts: R.map(function(e) {
                                    return h(e)
                                }),
                                read: function(e, t) {
                                    var n = u(t, b.timeouts.read),
                                        i = function() {
                                            return m(b, b.hosts.filter(function(e) {
                                                return 0 != (e.accept & o.Read)
                                            }), e, n)
                                        };
                                    if (!0 !== (void 0 !== n.cacheable ? n.cacheable : e.cacheable)) return i();
                                    var s = {
                                        request: e,
                                        mappedRequestOptions: n,
                                        transporter: {
                                            queryParameters: b.queryParameters,
                                            headers: b.headers
                                        }
                                    };
                                    return b.responsesCache.get(s, function() {
                                        return b.requestsCache.get(s, function() {
                                            return b.requestsCache.set(s, i()).then(function(e) {
                                                return Promise.all([b.requestsCache.delete(s), e])
                                            }, function(e) {
                                                return Promise.all([b.requestsCache.delete(s), Promise.reject(e)])
                                            }).then(function(e) {
                                                var t = r(e, 2);
                                                return t[0], t[1]
                                            })
                                        })
                                    }, {
                                        miss: function(e) {
                                            return b.responsesCache.set(s, e)
                                        }
                                    })
                                },
                                write: function(e, t) {
                                    return m(b, b.hosts.filter(function(e) {
                                        return 0 != (e.accept & o.Write)
                                    }), e, u(t, b.timeouts.write))
                                }
                            });
                        return s({
                            transporter: _,
                            appId: j,
                            addAlgoliaAgent: function(e, t) {
                                _.userAgent.add({
                                    segment: e,
                                    version: t
                                })
                            },
                            clearCache: function() {
                                return Promise.all([_.requestsCache.clear(), _.responsesCache.clear()]).then(function() {})
                            }
                        }, e.methods)
                    },
                    y = function(e) {
                        return function(t, r) {
                            return "GET" === t.method ? e.transporter.read(t, r) : e.transporter.write(t, r)
                        }
                    },
                    R = function(e) {
                        return function(t) {
                            var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            return s({
                                transporter: e.transporter,
                                appId: e.appId,
                                indexName: t
                            }, r.methods)
                        }
                    },
                    F = function(e) {
                        return function(r, n) {
                            var i = r.map(function(e) {
                                return t(t({}, e), {}, {
                                    params: d(e.params || {})
                                })
                            });
                            return e.transporter.read({
                                method: l,
                                path: "1/indexes/*/queries",
                                data: {
                                    requests: i
                                },
                                cacheable: !0
                            }, n)
                        }
                    },
                    b = function(e) {
                        return function(r, n) {
                            return Promise.all(r.map(function(r) {
                                var i = r.params,
                                    s = i.facetName,
                                    a = i.facetQuery,
                                    c = function(e, t) {
                                        if (null == e) return {};
                                        var r, n, i = function(e, t) {
                                            if (null == e) return {};
                                            var r, n, i = {},
                                                s = Object.keys(e);
                                            for (n = 0; n < s.length; n++) r = s[n], t.indexOf(r) >= 0 || (i[r] = e[r]);
                                            return i
                                        }(e, t);
                                        if (Object.getOwnPropertySymbols) {
                                            var s = Object.getOwnPropertySymbols(e);
                                            for (n = 0; n < s.length; n++) r = s[n], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r])
                                        }
                                        return i
                                    }(i, ["facetName", "facetQuery"]);
                                return R(e)(r.indexName, {
                                    methods: {
                                        searchForFacetValues: _
                                    }
                                }).searchForFacetValues(s, a, t(t({}, n), c))
                            }))
                        }
                    },
                    j = function(e) {
                        return function(t, r, n) {
                            return e.transporter.read({
                                method: l,
                                path: a("1/answers/%s/prediction", e.indexName),
                                data: {
                                    query: t,
                                    queryLanguages: r
                                },
                                cacheable: !0
                            }, n)
                        }
                    },
                    P = function(e) {
                        return function(t, r) {
                            return e.transporter.read({
                                method: l,
                                path: a("1/indexes/%s/query", e.indexName),
                                data: {
                                    query: t
                                },
                                cacheable: !0
                            }, r)
                        }
                    },
                    _ = function(e) {
                        return function(t, r, n) {
                            return e.transporter.read({
                                method: l,
                                path: a("1/indexes/%s/facets/%s/query", e.indexName, t),
                                data: {
                                    facetQuery: r
                                },
                                cacheable: !0
                            }, n)
                        }
                    };

                function x(e, s, a) {
                    var u, o, f, h, l, m;
                    return g(t(t(t({}, {
                        appId: e,
                        apiKey: s,
                        timeouts: {
                            connect: 1,
                            read: 2,
                            write: 30
                        },
                        requester: {
                            send: function(e) {
                                return new Promise(function(t) {
                                    var r = new XMLHttpRequest;
                                    r.open(e.method, e.url, !0), Object.keys(e.headers).forEach(function(t) {
                                        return r.setRequestHeader(t, e.headers[t])
                                    });
                                    var n, i = function(e, n) {
                                            return setTimeout(function() {
                                                r.abort(), t({
                                                    status: 0,
                                                    content: n,
                                                    isTimedOut: !0
                                                })
                                            }, 1e3 * e)
                                        },
                                        s = i(e.connectTimeout, "Connection timeout");
                                    r.onreadystatechange = function() {
                                        r.readyState > r.OPENED && void 0 === n && (clearTimeout(s), n = i(e.responseTimeout, "Socket timeout"))
                                    }, r.onerror = function() {
                                        0 === r.status && (clearTimeout(s), clearTimeout(n), t({
                                            content: r.responseText || "Network request failed",
                                            status: r.status,
                                            isTimedOut: !1
                                        }))
                                    }, r.onload = function() {
                                        clearTimeout(s), clearTimeout(n), t({
                                            content: r.responseText,
                                            status: r.status,
                                            isTimedOut: !1
                                        })
                                    }, r.send(e.data)
                                })
                            }
                        },
                        logger: {
                            debug: function(e, t) {
                                return Promise.resolve()
                            },
                            info: function(e, t) {
                                return Promise.resolve()
                            },
                            error: function(e, t) {
                                return console.error(e, t), Promise.resolve()
                            }
                        },
                        responsesCache: i(),
                        requestsCache: i({
                            serializable: !1
                        }),
                        hostsCache: function e(t) {
                            var i = n(t.caches),
                                s = i.shift();
                            return void 0 === s ? {
                                get: function(e, t) {
                                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                                        miss: function() {
                                            return Promise.resolve()
                                        }
                                    };
                                    return t().then(function(e) {
                                        return Promise.all([e, n.miss(e)])
                                    }).then(function(e) {
                                        return r(e, 1)[0]
                                    })
                                },
                                set: function(e, t) {
                                    return Promise.resolve(t)
                                },
                                delete: function(e) {
                                    return Promise.resolve()
                                },
                                clear: function() {
                                    return Promise.resolve()
                                }
                            } : {
                                get: function(t, r) {
                                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                                        miss: function() {
                                            return Promise.resolve()
                                        }
                                    };
                                    return s.get(t, r, n).catch(function() {
                                        return e({
                                            caches: i
                                        }).get(t, r, n)
                                    })
                                },
                                set: function(t, r) {
                                    return s.set(t, r).catch(function() {
                                        return e({
                                            caches: i
                                        }).set(t, r)
                                    })
                                },
                                delete: function(t) {
                                    return s.delete(t).catch(function() {
                                        return e({
                                            caches: i
                                        }).delete(t)
                                    })
                                },
                                clear: function() {
                                    return s.clear().catch(function() {
                                        return e({
                                            caches: i
                                        }).clear()
                                    })
                                }
                            }
                        }({
                            caches: [(u = {
                                key: "".concat("4.17.0", "-").concat(e)
                            }, f = "algoliasearch-client-js-".concat(u.key), h = function() {
                                return void 0 === o && (o = u.localStorage || window.localStorage), o
                            }, l = function() {
                                return JSON.parse(h().getItem(f) || "{}")
                            }, {
                                get: function(e, t) {
                                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                                        miss: function() {
                                            return Promise.resolve()
                                        }
                                    };
                                    return Promise.resolve().then(function() {
                                        var r = JSON.stringify(e),
                                            n = l()[r];
                                        return Promise.all([n || t(), void 0 !== n])
                                    }).then(function(e) {
                                        var t = r(e, 2),
                                            i = t[0];
                                        return Promise.all([i, t[1] || n.miss(i)])
                                    }).then(function(e) {
                                        return r(e, 1)[0]
                                    })
                                },
                                set: function(e, t) {
                                    return Promise.resolve().then(function() {
                                        var r = l();
                                        return r[JSON.stringify(e)] = t, h().setItem(f, JSON.stringify(r)), t
                                    })
                                },
                                delete: function(e) {
                                    return Promise.resolve().then(function() {
                                        var t = l();
                                        delete t[JSON.stringify(e)], h().setItem(f, JSON.stringify(t))
                                    })
                                },
                                clear: function() {
                                    return Promise.resolve().then(function() {
                                        h().removeItem(f)
                                    })
                                }
                            }), i()]
                        }),
                        userAgent: (m = {
                            value: "Algolia for JavaScript (".concat("4.17.0", ")"),
                            add: function(e) {
                                var t = "; ".concat(e.segment).concat(void 0 !== e.version ? " (".concat(e.version, ")") : "");
                                return -1 === m.value.indexOf(t) && (m.value = "".concat(m.value).concat(t)), m
                            }
                        }).add({
                            segment: "Browser",
                            version: "lite"
                        }),
                        authMode: c.WithinQueryParameters
                    }), a), {}, {
                        methods: {
                            search: F,
                            searchForFacetValues: b,
                            multipleQueries: F,
                            multipleSearchForFacetValues: b,
                            customRequest: y,
                            initIndex: function(e) {
                                return function(t) {
                                    return R(e)(t, {
                                        methods: {
                                            search: P,
                                            searchForFacetValues: _,
                                            findAnswers: j
                                        }
                                    })
                                }
                            }
                        }
                    }))
                }
                return x.version = "4.17.0", x
            }, e.exports = t()
        },
        380480: function(e, t, r) {
            "use strict";
            r.d(t, {
                $: function() {
                    return a
                }
            });
            var n = r(275271),
                i = r(282187),
                s = r.n(i);
            let a = e => {
                let {
                    className: t,
                    gutterPull: r,
                    type: i
                } = e, a = s()(t, "hrt-rule", `hrt-rule--${i}`, {
                    "hrt-rule--pull": r && "horizontal" === i
                });
                return n.createElement("div", {
                    className: a
                })
            };
            a.displayName = "Rule"
        }
    }
]);
//# sourceMappingURL=42802-e1ab6d4f21cc75b7.js.map