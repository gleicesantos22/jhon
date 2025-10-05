"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [17566], {
        312802: function(e, t, r) {
            r.d(t, {
                A: function() {
                    return c
                }
            });
            var n = r(275271),
                i = r(282187),
                o = r.n(i),
                a = r(825040);
            let c = (0, n.forwardRef)((e, t) => {
                let {
                    className: r,
                    children: i,
                    color: c = "gray-dark",
                    disabled: u,
                    pending: s,
                    pendingAltText: l,
                    variant: f = "underlined",
                    ...d
                } = e, p = (0, n.useRef)(null);
                (0, n.useImperativeHandle)(t, () => p.current);
                let h = o()(r, "hrt-text-button", `hrt-text-button--${c}`, `hrt-text-button--${f}`, {
                    "hrt-text-button--pending": s
                });
                return n.createElement("button", {
                    className: h,
                    disabled: u || s,
                    ref: p,
                    ...d
                }, "string" == typeof i ? n.createElement("span", null, i) : i, s && n.createElement(a.x, {
                    altText: l,
                    className: "hrt-position-absolute",
                    color: "gray"
                }))
            });
            c.displayName = "TextButton"
        },
        648829: function(e) {
            var t = String.prototype.replace,
                r = /%20/g,
                n = "RFC3986";
            e.exports = {
                default: n,
                formatters: {
                    RFC1738: function(e) {
                        return t.call(e, r, "+")
                    },
                    RFC3986: function(e) {
                        return String(e)
                    }
                },
                RFC1738: "RFC1738",
                RFC3986: n
            }
        },
        189327: function(e, t, r) {
            var n = r(314263),
                i = r(59086),
                o = r(648829);
            e.exports = {
                formats: o,
                parse: i,
                stringify: n
            }
        },
        59086: function(e, t, r) {
            var n = r(588424),
                i = Object.prototype.hasOwnProperty,
                o = Array.isArray,
                a = {
                    allowDots: !1,
                    allowPrototypes: !1,
                    arrayLimit: 20,
                    charset: "utf-8",
                    charsetSentinel: !1,
                    comma: !1,
                    decoder: n.decode,
                    delimiter: "&",
                    depth: 5,
                    ignoreQueryPrefix: !1,
                    interpretNumericEntities: !1,
                    parameterLimit: 1e3,
                    parseArrays: !0,
                    plainObjects: !1,
                    strictNullHandling: !1
                },
                c = function(e, t) {
                    return e && "string" == typeof e && t.comma && e.indexOf(",") > -1 ? e.split(",") : e
                },
                u = function(e, t) {
                    var r = {},
                        u = t.ignoreQueryPrefix ? e.replace(/^\?/, "") : e,
                        s = t.parameterLimit === 1 / 0 ? void 0 : t.parameterLimit,
                        l = u.split(t.delimiter, s),
                        f = -1,
                        d = t.charset;
                    if (t.charsetSentinel)
                        for (p = 0; p < l.length; ++p) 0 === l[p].indexOf("utf8=") && ("utf8=%E2%9C%93" === l[p] ? d = "utf-8" : "utf8=%26%2310003%3B" === l[p] && (d = "iso-8859-1"), f = p, p = l.length);
                    for (p = 0; p < l.length; ++p)
                        if (p !== f) {
                            var p, h, y, g = l[p],
                                m = g.indexOf("]="),
                                v = -1 === m ? g.indexOf("=") : m + 1; - 1 === v ? (h = t.decoder(g, a.decoder, d, "key"), y = t.strictNullHandling ? null : "") : (h = t.decoder(g.slice(0, v), a.decoder, d, "key"), y = n.maybeMap(c(g.slice(v + 1), t), function(e) {
                                return t.decoder(e, a.decoder, d, "value")
                            })), y && t.interpretNumericEntities && "iso-8859-1" === d && (y = y.replace(/&#(\d+);/g, function(e, t) {
                                return String.fromCharCode(parseInt(t, 10))
                            })), g.indexOf("[]=") > -1 && (y = o(y) ? [y] : y), i.call(r, h) ? r[h] = n.combine(r[h], y) : r[h] = y
                        }
                    return r
                },
                s = function(e, t, r, n) {
                    for (var i = n ? t : c(t, r), o = e.length - 1; o >= 0; --o) {
                        var a, u = e[o];
                        if ("[]" === u && r.parseArrays) a = [].concat(i);
                        else {
                            a = r.plainObjects ? Object.create(null) : {};
                            var s = "[" === u.charAt(0) && "]" === u.charAt(u.length - 1) ? u.slice(1, -1) : u,
                                l = parseInt(s, 10);
                            r.parseArrays || "" !== s ? !isNaN(l) && u !== s && String(l) === s && l >= 0 && r.parseArrays && l <= r.arrayLimit ? (a = [])[l] = i : "__proto__" !== s && (a[s] = i) : a = {
                                0: i
                            }
                        }
                        i = a
                    }
                    return i
                },
                l = function(e, t, r, n) {
                    if (e) {
                        var o = r.allowDots ? e.replace(/\.([^.[]+)/g, "[$1]") : e,
                            a = /(\[[^[\]]*])/g,
                            c = r.depth > 0 && /(\[[^[\]]*])/.exec(o),
                            u = c ? o.slice(0, c.index) : o,
                            l = [];
                        if (u) {
                            if (!r.plainObjects && i.call(Object.prototype, u) && !r.allowPrototypes) return;
                            l.push(u)
                        }
                        for (var f = 0; r.depth > 0 && null !== (c = a.exec(o)) && f < r.depth;) {
                            if (f += 1, !r.plainObjects && i.call(Object.prototype, c[1].slice(1, -1)) && !r.allowPrototypes) return;
                            l.push(c[1])
                        }
                        return c && l.push("[" + o.slice(c.index) + "]"), s(l, t, r, n)
                    }
                },
                f = function(e) {
                    if (!e) return a;
                    if (null !== e.decoder && void 0 !== e.decoder && "function" != typeof e.decoder) throw TypeError("Decoder has to be a function.");
                    if (void 0 !== e.charset && "utf-8" !== e.charset && "iso-8859-1" !== e.charset) throw TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
                    var t = void 0 === e.charset ? a.charset : e.charset;
                    return {
                        allowDots: void 0 === e.allowDots ? a.allowDots : !!e.allowDots,
                        allowPrototypes: "boolean" == typeof e.allowPrototypes ? e.allowPrototypes : a.allowPrototypes,
                        arrayLimit: "number" == typeof e.arrayLimit ? e.arrayLimit : a.arrayLimit,
                        charset: t,
                        charsetSentinel: "boolean" == typeof e.charsetSentinel ? e.charsetSentinel : a.charsetSentinel,
                        comma: "boolean" == typeof e.comma ? e.comma : a.comma,
                        decoder: "function" == typeof e.decoder ? e.decoder : a.decoder,
                        delimiter: "string" == typeof e.delimiter || n.isRegExp(e.delimiter) ? e.delimiter : a.delimiter,
                        depth: "number" == typeof e.depth || !1 === e.depth ? +e.depth : a.depth,
                        ignoreQueryPrefix: !0 === e.ignoreQueryPrefix,
                        interpretNumericEntities: "boolean" == typeof e.interpretNumericEntities ? e.interpretNumericEntities : a.interpretNumericEntities,
                        parameterLimit: "number" == typeof e.parameterLimit ? e.parameterLimit : a.parameterLimit,
                        parseArrays: !1 !== e.parseArrays,
                        plainObjects: "boolean" == typeof e.plainObjects ? e.plainObjects : a.plainObjects,
                        strictNullHandling: "boolean" == typeof e.strictNullHandling ? e.strictNullHandling : a.strictNullHandling
                    }
                };
            e.exports = function(e, t) {
                var r = f(t);
                if ("" === e || null == e) return r.plainObjects ? Object.create(null) : {};
                for (var i = "string" == typeof e ? u(e, r) : e, o = r.plainObjects ? Object.create(null) : {}, a = Object.keys(i), c = 0; c < a.length; ++c) {
                    var s = a[c],
                        d = l(s, i[s], r, "string" == typeof e);
                    o = n.merge(o, d, r)
                }
                return n.compact(o)
            }
        },
        314263: function(e, t, r) {
            var n = r(588424),
                i = r(648829),
                o = Object.prototype.hasOwnProperty,
                a = {
                    brackets: function(e) {
                        return e + "[]"
                    },
                    comma: "comma",
                    indices: function(e, t) {
                        return e + "[" + t + "]"
                    },
                    repeat: function(e) {
                        return e
                    }
                },
                c = Array.isArray,
                u = String.prototype.split,
                s = Array.prototype.push,
                l = function(e, t) {
                    s.apply(e, c(t) ? t : [t])
                },
                f = Date.prototype.toISOString,
                d = i.default,
                p = {
                    addQueryPrefix: !1,
                    allowDots: !1,
                    charset: "utf-8",
                    charsetSentinel: !1,
                    delimiter: "&",
                    encode: !0,
                    encoder: n.encode,
                    encodeValuesOnly: !1,
                    format: d,
                    formatter: i.formatters[d],
                    indices: !1,
                    serializeDate: function(e) {
                        return f.call(e)
                    },
                    skipNulls: !1,
                    strictNullHandling: !1
                },
                h = function e(t, r, i, o, a, s, f, d, h, y, g, m, v, b) {
                    var S, O, j = t;
                    if ("function" == typeof f ? j = f(r, j) : j instanceof Date ? j = y(j) : "comma" === i && c(j) && (j = n.maybeMap(j, function(e) {
                            return e instanceof Date ? y(e) : e
                        })), null === j) {
                        if (o) return s && !v ? s(r, p.encoder, b, "key", g) : r;
                        j = ""
                    }
                    if ("string" == typeof(S = j) || "number" == typeof S || "boolean" == typeof S || "symbol" == typeof S || "bigint" == typeof S || n.isBuffer(j)) {
                        if (s) {
                            var w = v ? r : s(r, p.encoder, b, "key", g);
                            if ("comma" === i && v) {
                                for (var P = u.call(String(j), ","), T = "", x = 0; x < P.length; ++x) T += (0 === x ? "" : ",") + m(s(P[x], p.encoder, b, "value", g));
                                return [m(w) + "=" + T]
                            }
                            return [m(w) + "=" + m(s(j, p.encoder, b, "value", g))]
                        }
                        return [m(r) + "=" + m(String(j))]
                    }
                    var E = [];
                    if (void 0 === j) return E;
                    if ("comma" === i && c(j)) O = [{
                        value: j.length > 0 ? j.join(",") || null : void 0
                    }];
                    else if (c(f)) O = f;
                    else {
                        var R = Object.keys(j);
                        O = d ? R.sort(d) : R
                    }
                    for (var I = 0; I < O.length; ++I) {
                        var _ = O[I],
                            k = "object" == typeof _ && void 0 !== _.value ? _.value : j[_];
                        a && null === k || l(E, e(k, c(j) ? "function" == typeof i ? i(r, _) : r : r + (h ? "." + _ : "[" + _ + "]"), i, o, a, s, f, d, h, y, g, m, v, b))
                    }
                    return E
                },
                y = function(e) {
                    if (!e) return p;
                    if (null !== e.encoder && void 0 !== e.encoder && "function" != typeof e.encoder) throw TypeError("Encoder has to be a function.");
                    var t = e.charset || p.charset;
                    if (void 0 !== e.charset && "utf-8" !== e.charset && "iso-8859-1" !== e.charset) throw TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
                    var r = i.default;
                    if (void 0 !== e.format) {
                        if (!o.call(i.formatters, e.format)) throw TypeError("Unknown format option provided.");
                        r = e.format
                    }
                    var n = i.formatters[r],
                        a = p.filter;
                    return ("function" == typeof e.filter || c(e.filter)) && (a = e.filter), {
                        addQueryPrefix: "boolean" == typeof e.addQueryPrefix ? e.addQueryPrefix : p.addQueryPrefix,
                        allowDots: void 0 === e.allowDots ? p.allowDots : !!e.allowDots,
                        charset: t,
                        charsetSentinel: "boolean" == typeof e.charsetSentinel ? e.charsetSentinel : p.charsetSentinel,
                        delimiter: void 0 === e.delimiter ? p.delimiter : e.delimiter,
                        encode: "boolean" == typeof e.encode ? e.encode : p.encode,
                        encoder: "function" == typeof e.encoder ? e.encoder : p.encoder,
                        encodeValuesOnly: "boolean" == typeof e.encodeValuesOnly ? e.encodeValuesOnly : p.encodeValuesOnly,
                        filter: a,
                        format: r,
                        formatter: n,
                        serializeDate: "function" == typeof e.serializeDate ? e.serializeDate : p.serializeDate,
                        skipNulls: "boolean" == typeof e.skipNulls ? e.skipNulls : p.skipNulls,
                        sort: "function" == typeof e.sort ? e.sort : null,
                        strictNullHandling: "boolean" == typeof e.strictNullHandling ? e.strictNullHandling : p.strictNullHandling
                    }
                };
            e.exports = function(e, t) {
                var r, n, i = e,
                    o = y(t);
                "function" == typeof o.filter ? i = (0, o.filter)("", i) : c(o.filter) && (r = o.filter);
                var u = [];
                if ("object" != typeof i || null === i) return "";
                n = t && t.arrayFormat in a ? t.arrayFormat : t && "indices" in t ? t.indices ? "indices" : "repeat" : "indices";
                var s = a[n];
                r || (r = Object.keys(i)), o.sort && r.sort(o.sort);
                for (var f = 0; f < r.length; ++f) {
                    var d = r[f];
                    o.skipNulls && null === i[d] || l(u, h(i[d], d, s, o.strictNullHandling, o.skipNulls, o.encode ? o.encoder : null, o.filter, o.sort, o.allowDots, o.serializeDate, o.format, o.formatter, o.encodeValuesOnly, o.charset))
                }
                var p = u.join(o.delimiter),
                    g = !0 === o.addQueryPrefix ? "?" : "";
                return o.charsetSentinel && ("iso-8859-1" === o.charset ? g += "utf8=%26%2310003%3B&" : g += "utf8=%E2%9C%93&"), p.length > 0 ? g + p : ""
            }
        },
        588424: function(e, t, r) {
            var n = r(648829),
                i = Object.prototype.hasOwnProperty,
                o = Array.isArray,
                a = function() {
                    for (var e = [], t = 0; t < 256; ++t) e.push("%" + ((t < 16 ? "0" : "") + t.toString(16)).toUpperCase());
                    return e
                }(),
                c = function(e) {
                    for (; e.length > 1;) {
                        var t = e.pop(),
                            r = t.obj[t.prop];
                        if (o(r)) {
                            for (var n = [], i = 0; i < r.length; ++i) void 0 !== r[i] && n.push(r[i]);
                            t.obj[t.prop] = n
                        }
                    }
                },
                u = function(e, t) {
                    for (var r = t && t.plainObjects ? Object.create(null) : {}, n = 0; n < e.length; ++n) void 0 !== e[n] && (r[n] = e[n]);
                    return r
                };
            e.exports = {
                arrayToObject: u,
                assign: function(e, t) {
                    return Object.keys(t).reduce(function(e, r) {
                        return e[r] = t[r], e
                    }, e)
                },
                combine: function(e, t) {
                    return [].concat(e, t)
                },
                compact: function(e) {
                    for (var t = [{
                            obj: {
                                o: e
                            },
                            prop: "o"
                        }], r = [], n = 0; n < t.length; ++n)
                        for (var i = t[n], o = i.obj[i.prop], a = Object.keys(o), u = 0; u < a.length; ++u) {
                            var s = a[u],
                                l = o[s];
                            "object" == typeof l && null !== l && -1 === r.indexOf(l) && (t.push({
                                obj: o,
                                prop: s
                            }), r.push(l))
                        }
                    return c(t), e
                },
                decode: function(e, t, r) {
                    var n = e.replace(/\+/g, " ");
                    if ("iso-8859-1" === r) return n.replace(/%[0-9a-f]{2}/gi, unescape);
                    try {
                        return decodeURIComponent(n)
                    } catch (e) {
                        return n
                    }
                },
                encode: function(e, t, r, i, o) {
                    if (0 === e.length) return e;
                    var c = e;
                    if ("symbol" == typeof e ? c = Symbol.prototype.toString.call(e) : "string" != typeof e && (c = String(e)), "iso-8859-1" === r) return escape(c).replace(/%u[0-9a-f]{4}/gi, function(e) {
                        return "%26%23" + parseInt(e.slice(2), 16) + "%3B"
                    });
                    for (var u = "", s = 0; s < c.length; ++s) {
                        var l = c.charCodeAt(s);
                        if (45 === l || 46 === l || 95 === l || 126 === l || l >= 48 && l <= 57 || l >= 65 && l <= 90 || l >= 97 && l <= 122 || o === n.RFC1738 && (40 === l || 41 === l)) {
                            u += c.charAt(s);
                            continue
                        }
                        if (l < 128) {
                            u += a[l];
                            continue
                        }
                        if (l < 2048) {
                            u += a[192 | l >> 6] + a[128 | 63 & l];
                            continue
                        }
                        if (l < 55296 || l >= 57344) {
                            u += a[224 | l >> 12] + a[128 | l >> 6 & 63] + a[128 | 63 & l];
                            continue
                        }
                        s += 1, u += a[240 | (l = 65536 + ((1023 & l) << 10 | 1023 & c.charCodeAt(s))) >> 18] + a[128 | l >> 12 & 63] + a[128 | l >> 6 & 63] + a[128 | 63 & l]
                    }
                    return u
                },
                isBuffer: function(e) {
                    return !!e && "object" == typeof e && !!(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e))
                },
                isRegExp: function(e) {
                    return "[object RegExp]" === Object.prototype.toString.call(e)
                },
                maybeMap: function(e, t) {
                    if (o(e)) {
                        for (var r = [], n = 0; n < e.length; n += 1) r.push(t(e[n]));
                        return r
                    }
                    return t(e)
                },
                merge: function e(t, r, n) {
                    if (!r) return t;
                    if ("object" != typeof r) {
                        if (o(t)) t.push(r);
                        else {
                            if (!t || "object" != typeof t) return [t, r];
                            (n && (n.plainObjects || n.allowPrototypes) || !i.call(Object.prototype, r)) && (t[r] = !0)
                        }
                        return t
                    }
                    if (!t || "object" != typeof t) return [t].concat(r);
                    var a = t;
                    return (o(t) && !o(r) && (a = u(t, n)), o(t) && o(r)) ? (r.forEach(function(r, o) {
                        if (i.call(t, o)) {
                            var a = t[o];
                            a && "object" == typeof a && r && "object" == typeof r ? t[o] = e(a, r, n) : t.push(r)
                        } else t[o] = r
                    }), t) : Object.keys(r).reduce(function(t, o) {
                        var a = r[o];
                        return i.call(t, o) ? t[o] = e(t[o], a, n) : t[o] = a, t
                    }, a)
                }
            }
        },
        953707: function(e, t, r) {
            r.d(t, {
                _: function() {
                    return n
                }
            });

            function n(e, t) {
                if (void 0 === e || "function" != typeof e) throw Error("The render function is not valid (received type ".concat(Object.prototype.toString.call(e).slice(8, -1), ").\n\n").concat(t))
            }
        },
        958216: function(e, t, r) {
            r.d(t, {
                HV: function() {
                    return c
                },
                KN: function() {
                    return u
                }
            });
            var n = r(202186);

            function i(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function o(e) {
                return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function a(e) {
                var t, r = e.index,
                    n = e.widgetType,
                    a = (e.methodName, e.args),
                    c = e.instantSearchInstance;
                if (1 === a.length && "object" === o(a[0])) return [a[0]];
                var u = function(e) {
                        if (Array.isArray(e)) return e
                    }(t = a[0].split(":")) || function(e, t) {
                        var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                        if (null != r) {
                            var n, i, o, a, c = [],
                                u = !0,
                                s = !1;
                            try {
                                for (o = (r = r.call(e)).next; !(u = (n = o.call(r)).done) && (c.push(n.value), 2 !== c.length); u = !0);
                            } catch (e) {
                                s = !0, i = e
                            } finally {
                                try {
                                    if (!u && null != r.return && (a = r.return(), Object(a) !== a)) return
                                } finally {
                                    if (s) throw i
                                }
                            }
                            return c
                        }
                    }(t, 2) || function(e, t) {
                        if (e) {
                            if ("string" == typeof e) return i(e, 2);
                            var r = Object.prototype.toString.call(e).slice(8, -1);
                            if ("Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r) return Array.from(e);
                            if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return i(e, 2)
                        }
                    }(t, 2) || function() {
                        throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }(),
                    s = u[0],
                    l = u[1],
                    f = a[1],
                    d = a[2];
                if (!f || ("click" === s || "conversion" === s) && !d) return [];
                var p = Array.isArray(f) ? f : [f];
                if (0 === p.length) return [];
                var h = p[0].__queryID,
                    y = function(e) {
                        for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 20, r = [], n = 0; n < Math.ceil(e.length / t); n++) r.push(e.slice(n * t, (n + 1) * t));
                        return r
                    }(p),
                    g = y.map(function(e) {
                        return e.map(function(e) {
                            return e.objectID
                        })
                    }),
                    m = y.map(function(e) {
                        return e.map(function(e) {
                            return e.__position
                        })
                    });
                return "view" === s ? "idle" !== c.status ? [] : y.map(function(e, t) {
                    return {
                        insightsMethod: "viewedObjectIDs",
                        widgetType: n,
                        eventType: s,
                        payload: {
                            eventName: d || "Hits Viewed",
                            index: r,
                            objectIDs: g[t]
                        },
                        hits: e,
                        eventModifier: l
                    }
                }) : "click" === s ? y.map(function(e, t) {
                    return {
                        insightsMethod: "clickedObjectIDsAfterSearch",
                        widgetType: n,
                        eventType: s,
                        payload: {
                            eventName: d || "Hit Clicked",
                            index: r,
                            queryID: h,
                            objectIDs: g[t],
                            positions: m[t]
                        },
                        hits: e,
                        eventModifier: l
                    }
                }) : "conversion" === s ? y.map(function(e, t) {
                    return {
                        insightsMethod: "convertedObjectIDsAfterSearch",
                        widgetType: n,
                        eventType: s,
                        payload: {
                            eventName: d || "Hit Converted",
                            index: r,
                            queryID: h,
                            objectIDs: g[t]
                        },
                        hits: e,
                        eventModifier: l
                    }
                }) : []
            }

            function c(e) {
                var t = e.instantSearchInstance,
                    r = e.index,
                    n = e.widgetType,
                    i = {},
                    o = void 0;
                return function() {
                    for (var e = arguments.length, c = Array(e), u = 0; u < e; u++) c[u] = arguments[u];
                    a({
                        widgetType: n,
                        index: r,
                        methodName: "sendEvent",
                        args: c,
                        instantSearchInstance: t
                    }).forEach(function(e) {
                        "click" === e.eventType && "internal" === e.eventModifier && i[e.eventType] || (i[e.eventType] = !0, t.sendEventToInsights(e))
                    }), clearTimeout(o), o = setTimeout(function() {
                        i = {}
                    }, 0)
                }
            }

            function u(e) {
                var t = e.index,
                    r = e.widgetType,
                    i = e.instantSearchInstance;
                return function() {
                    for (var e = arguments.length, o = Array(e), c = 0; c < e; c++) o[c] = arguments[c];
                    var u = a({
                        widgetType: r,
                        index: t,
                        methodName: "bindEvent",
                        args: o,
                        instantSearchInstance: i
                    });
                    return u.length ? "data-insights-event=".concat((0, n.a)(u)) : ""
                }
            }
        },
        887710: function(e, t, r) {
            r.d(t, {
                K: function() {
                    return n
                }
            });

            function n() {
                for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                var n = t.map(function(e) {
                    var t;
                    return ["https://www.algolia.com/doc/api-reference/widgets/", e.name, "/js/", void 0 !== (t = e.connector) && t ? "#connector" : ""].join("")
                }).join(", ");
                return function(e) {
                    return [e, "See documentation: ".concat(n)].filter(Boolean).join("\n\n")
                }
            }
        },
        96242: function(e, t, r) {
            r.d(t, {
                Rn: function() {
                    return f
                },
                dg: function() {
                    return l
                },
                mY: function() {
                    return p
                }
            });
            var n = r(906823),
                i = r(918466);

            function o(e) {
                return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function a() {
                return (a = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }).apply(this, arguments)
            }

            function c(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function u(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? c(Object(r), !0).forEach(function(t) {
                        s(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : c(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }

            function s(e, t, r) {
                var n;
                return (n = function(e, t) {
                    if ("object" !== o(e) || null === e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                        var n = r.call(e, t || "default");
                        if ("object" !== o(n)) return n;
                        throw TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(t, "string"), (t = "symbol" === o(n) ? n : String(n)) in e) ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }
            var l = {
                    highlightPreTag: "__ais-highlight__",
                    highlightPostTag: "__/ais-highlight__"
                },
                f = {
                    highlightPreTag: "<mark>",
                    highlightPostTag: "</mark>"
                };

            function d(e) {
                var t;
                return (0, i.P)(e) && "string" != typeof e.value ? Object.keys(e).reduce(function(t, r) {
                    return u(u({}, t), {}, s({}, r, d(e[r])))
                }, {}) : Array.isArray(e) ? e.map(d) : u(u({}, e), {}, {
                    value: (t = e.value, (0, n.Y)(t).replace(RegExp(l.highlightPreTag, "g"), f.highlightPreTag).replace(RegExp(l.highlightPostTag, "g"), f.highlightPostTag))
                })
            }

            function p(e) {
                return void 0 === e.__escaped && ((e = e.map(function(e) {
                    var t = a({}, (function(e) {
                        if (null == e) throw TypeError("Cannot destructure " + e)
                    }(e), e));
                    return t._highlightResult && (t._highlightResult = d(t._highlightResult)), t._snippetResult && (t._snippetResult = d(t._snippetResult)), t
                })).__escaped = !0), e
            }
        },
        906823: function(e, t, r) {
            r.d(t, {
                A: function() {
                    return l
                },
                Y: function() {
                    return a
                }
            });
            var n = {
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#39;"
                },
                i = /[&<>"']/g,
                o = RegExp(i.source);

            function a(e) {
                return e && o.test(e) ? e.replace(i, function(e) {
                    return n[e]
                }) : e
            }
            var c = {
                    "&amp;": "&",
                    "&lt;": "<",
                    "&gt;": ">",
                    "&quot;": '"',
                    "&#39;": "'"
                },
                u = /&(amp|quot|lt|gt|#39);/g,
                s = RegExp(u.source);

            function l(e) {
                return e && s.test(e) ? e.replace(u, function(e) {
                    return c[e]
                }) : e
            }
        },
        243769: function(e, t, r) {
            function n(e) {
                return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function i(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function o(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? i(Object(r), !0).forEach(function(t) {
                        var i, o;
                        i = t, o = r[t], (i = function(e) {
                            var t = function(e, t) {
                                if ("object" !== n(e) || null === e) return e;
                                var r = e[Symbol.toPrimitive];
                                if (void 0 !== r) {
                                    var i = r.call(e, t || "default");
                                    if ("object" !== n(i)) return i;
                                    throw TypeError("@@toPrimitive must return a primitive value.")
                                }
                                return ("string" === t ? String : Number)(e)
                            }(e, "string");
                            return "symbol" === n(t) ? t : String(t)
                        }(i)) in e ? Object.defineProperty(e, i, {
                            value: o,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[i] = o
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : i(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }

            function a(e, t, r) {
                return e.map(function(e, n) {
                    return o(o({}, e), {}, {
                        __position: r * t + n + 1
                    })
                })
            }
            r.d(t, {
                x: function() {
                    return a
                }
            })
        },
        73987: function(e, t, r) {
            function n(e) {
                return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function i(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function o(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? i(Object(r), !0).forEach(function(t) {
                        var i, o;
                        i = t, o = r[t], (i = function(e) {
                            var t = function(e, t) {
                                if ("object" !== n(e) || null === e) return e;
                                var r = e[Symbol.toPrimitive];
                                if (void 0 !== r) {
                                    var i = r.call(e, t || "default");
                                    if ("object" !== n(i)) return i;
                                    throw TypeError("@@toPrimitive must return a primitive value.")
                                }
                                return ("string" === t ? String : Number)(e)
                            }(e, "string");
                            return "symbol" === n(t) ? t : String(t)
                        }(i)) in e ? Object.defineProperty(e, i, {
                            value: o,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[i] = o
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : i(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }

            function a(e, t) {
                return t ? e.map(function(e) {
                    return o(o({}, e), {}, {
                        __queryID: t
                    })
                }) : e
            }
            r.d(t, {
                I: function() {
                    return a
                }
            })
        },
        701776: function(e, t, r) {
            function n(e) {
                return e !== Object(e)
            }
            r.d(t, {
                X: function() {
                    return function e(t, r) {
                        if (t === r) return !0;
                        if (n(t) || n(r) || "function" == typeof t || "function" == typeof r) return t === r;
                        if (Object.keys(t).length !== Object.keys(r).length) return !1;
                        for (var i = 0, o = Object.keys(t); i < o.length; i++) {
                            var a = o[i];
                            if (!(a in r) || !e(t[a], r[a])) return !1
                        }
                        return !0
                    }
                }
            })
        },
        485919: function(e, t, r) {
            r.d(t, {
                J: function() {
                    return n
                }
            });

            function n(e) {
                return "ais.index" === e.$$type
            }
        },
        918466: function(e, t, r) {
            function n(e) {
                return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function i(e) {
                if (!("object" === n(e) && null !== e) || "[object Object]" !== (null === e ? void 0 === e ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(e))) return !1;
                if (null === Object.getPrototypeOf(e)) return !0;
                for (var t = e; null !== Object.getPrototypeOf(t);) t = Object.getPrototypeOf(t);
                return Object.getPrototypeOf(e) === t
            }
            r.d(t, {
                P: function() {
                    return i
                }
            })
        },
        105195: function(e, t, r) {
            function n(e) {
                return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }
            r.d(t, {
                Z: function() {
                    return s
                }
            });
            var i = ["facets", "disjunctiveFacets", "facetsRefinements", "facetsExcludes", "disjunctiveFacetsRefinements", "numericRefinements", "tagRefinements", "hierarchicalFacets", "hierarchicalFacetsRefinements", "ruleContexts"];

            function o(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function a(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? o(Object(r), !0).forEach(function(t) {
                        var i, o;
                        i = t, o = r[t], (i = function(e) {
                            var t = function(e, t) {
                                if ("object" !== n(e) || null === e) return e;
                                var r = e[Symbol.toPrimitive];
                                if (void 0 !== r) {
                                    var i = r.call(e, t || "default");
                                    if ("object" !== n(i)) return i;
                                    throw TypeError("@@toPrimitive must return a primitive value.")
                                }
                                return ("string" === t ? String : Number)(e)
                            }(e, "string");
                            return "symbol" === n(t) ? t : String(t)
                        }(i)) in e ? Object.defineProperty(e, i, {
                            value: o,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[i] = o
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : o(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }
            var c = function(e, t) {
                    t.facets, t.disjunctiveFacets, t.facetsRefinements, t.facetsExcludes, t.disjunctiveFacetsRefinements, t.numericRefinements, t.tagRefinements, t.hierarchicalFacets, t.hierarchicalFacetsRefinements, t.ruleContexts;
                    var r = function(e, t) {
                        if (null == e) return {};
                        var r, n, i = function(e, t) {
                            if (null == e) return {};
                            var r, n, i = {},
                                o = Object.keys(e);
                            for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) >= 0 || (i[r] = e[r]);
                            return i
                        }(e, t);
                        if (Object.getOwnPropertySymbols) {
                            var o = Object.getOwnPropertySymbols(e);
                            for (n = 0; n < o.length; n++) r = o[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r])
                        }
                        return i
                    }(t, i);
                    return e.setQueryParameters(r)
                },
                u = function(e, t) {
                    var r = [].concat(e.ruleContexts).concat(t.ruleContexts).filter(Boolean).filter(function(e, t, r) {
                        return r.indexOf(e) === t
                    });
                    return r.length > 0 ? e.setQueryParameters({
                        ruleContexts: r
                    }) : e
                },
                s = function() {
                    for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                    return t.reduce(function(e, t) {
                        var r, n, i, o, s, l, f, d;
                        return c((d = u((n = (r = e.setQueryParameters({
                            hierarchicalFacetsRefinements: a(a({}, e.hierarchicalFacetsRefinements), t.hierarchicalFacetsRefinements)
                        })).setQueryParameters({
                            hierarchicalFacets: t.hierarchicalFacets.reduce(function(e, t) {
                                var r = function(e, t) {
                                    if (!Array.isArray(e)) return -1;
                                    for (var r = 0; r < e.length; r++)
                                        if (t(e[r])) return r;
                                    return -1
                                }(e, function(e) {
                                    return e.name === t.name
                                });
                                if (-1 === r) return e.concat(t);
                                var n = e.slice();
                                return n.splice(r, 1, t), n
                            }, r.hierarchicalFacets)
                        }), f = (l = (s = (o = (i = t.tagRefinements.reduce(function(e, t) {
                            return e.addTagRefinement(t)
                        }, n)).setQueryParameters({
                            numericRefinements: a(a({}, i.numericRefinements), t.numericRefinements)
                        })).setQueryParameters({
                            disjunctiveFacetsRefinements: a(a({}, o.disjunctiveFacetsRefinements), t.disjunctiveFacetsRefinements)
                        })).setQueryParameters({
                            facetsExcludes: a(a({}, s.facetsExcludes), t.facetsExcludes)
                        })).setQueryParameters({
                            facetsRefinements: a(a({}, l.facetsRefinements), t.facetsRefinements)
                        }), t.disjunctiveFacets.reduce(function(e, t) {
                            return e.addDisjunctiveFacet(t)
                        }, f)), t), t.facets.reduce(function(e, t) {
                            return e.addFacet(t)
                        }, d)), t)
                    })
                }
        },
        104167: function(e, t, r) {
            r.d(t, {
                Z: function() {
                    return n
                }
            });

            function n() {}
        },
        68165: function(e, t, r) {
            r.d(t, {
                U: function() {
                    return n
                }
            });

            function n(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                        fallback: function() {}
                    },
                    r = t.fallback;
                return "undefined" == typeof window ? r() : e({
                    window: window
                })
            }
        },
        202186: function(e, t, r) {
            r.d(t, {
                a: function() {
                    return n
                }
            });

            function n(e) {
                return btoa(encodeURIComponent(JSON.stringify(e)))
            }
        },
        128973: function(e, t, r) {
            r.d(t, {
                T: function() {
                    return i
                }
            });
            var n = r(358620);

            function i(e) {
                return (0, n.l)(e, {
                    $$widgetType: "ais.configure"
                }), null
            }
        },
        438677: function(e, t, r) {
            r.d(t, {
                p: function() {
                    return eQ
                }
            });
            var n = r(275271),
                i = r(399894),
                o = r(774951),
                a = r(3698),
                c = r(454479);

            function u(e) {
                return (u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }
            var s = r(68165),
                l = r(104167);

            function f(e) {
                return (f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function d(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function p(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? d(Object(r), !0).forEach(function(t) {
                        var n, i;
                        n = t, i = r[t], (n = function(e) {
                            var t = function(e, t) {
                                if ("object" !== f(e) || null === e) return e;
                                var r = e[Symbol.toPrimitive];
                                if (void 0 !== r) {
                                    var n = r.call(e, t || "default");
                                    if ("object" !== f(n)) return n;
                                    throw TypeError("@@toPrimitive must return a primitive value.")
                                }
                                return ("string" === t ? String : Number)(e)
                            }(e, "string");
                            return "symbol" === f(t) ? t : String(t)
                        }(n)) in e ? Object.defineProperty(e, n, {
                            value: i,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[n] = i
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : d(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }

            function h(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var n, i, o, a, c = [],
                            u = !0,
                            s = !1;
                        try {
                            if (o = (r = r.call(e)).next, 0 === t) {
                                if (Object(r) !== r) return;
                                u = !1
                            } else
                                for (; !(u = (n = o.call(r)).done) && (c.push(n.value), c.length !== t); u = !0);
                        } catch (e) {
                            s = !0, i = e
                        } finally {
                            try {
                                if (!u && null != r.return && (a = r.return(), Object(a) !== a)) return
                            } finally {
                                if (s) throw i
                            }
                        }
                        return c
                    }
                }(e, t) || y(e, t) || function() {
                    throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function y(e, t) {
                if (e) {
                    if ("string" == typeof e) return g(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    if ("Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r) return Array.from(e);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return g(e, t)
                }
            }

            function g(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
                return n
            }
            var m = "2.6.0",
                v = "https://cdn.jsdelivr.net/npm/search-insights@".concat(m, "/dist/search-insights.min.js");

            function b(e) {
                var t = h((e.version || "").split(".").map(Number), 2),
                    r = t[0],
                    n = t[1];
                return r >= 3 || 2 === r && n >= 6 || 1 === r && n >= 10
            }

            function S(e, t, r) {
                var n = t.getHelper();
                return {
                    uiState: r,
                    helper: n,
                    parent: t,
                    instantSearchInstance: e,
                    state: n.state,
                    renderState: e.renderState,
                    templatesConfig: e.templatesConfig,
                    createURL: t.createURL,
                    scopedResults: [],
                    searchMetadata: {
                        isSearchStalled: "stalled" === e.status
                    },
                    status: e.status,
                    error: e.error
                }
            }

            function O(e, t) {
                var r = t.getResults(),
                    n = t.getHelper();
                return {
                    helper: n,
                    parent: t,
                    instantSearchInstance: e,
                    results: r,
                    scopedResults: t.getScopedResults(),
                    state: r ? r._state : n.state,
                    renderState: e.renderState,
                    templatesConfig: e.templatesConfig,
                    createURL: t.createURL,
                    searchMetadata: {
                        isSearchStalled: "stalled" === e.status
                    },
                    status: e.status,
                    error: e.error
                }
            }
            var j = r(189327);

            function w(e) {
                return (w = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function P(e, t, r) {
                return (t = T(t)) in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }

            function T(e) {
                var t = function(e, t) {
                    if ("object" !== w(e) || null === e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                        var n = r.call(e, t || "default");
                        if ("object" !== w(n)) return n;
                        throw TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" === w(t) ? t : String(t)
            }
            var x = function(e) {
                    e && (window.document.title = e)
                },
                E = function() {
                    var e;

                    function t(e) {
                        var r = this,
                            n = e.windowTitle,
                            i = e.writeDelay,
                            o = e.createURL,
                            a = e.parseURL,
                            c = e.getLocation,
                            u = e.start,
                            l = e.dispose,
                            f = e.push;
                        ! function(e, t) {
                            if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                        }(this, t), P(this, "$$type", "ais.browser"), P(this, "windowTitle", void 0), P(this, "writeDelay", void 0), P(this, "_createURL", void 0), P(this, "parseURL", void 0), P(this, "getLocation", void 0), P(this, "writeTimer", void 0), P(this, "_onPopState", void 0), P(this, "inPopState", !1), P(this, "isDisposed", !1), P(this, "latestAcknowledgedHistory", 0), P(this, "_start", void 0), P(this, "_dispose", void 0), P(this, "_push", void 0), this.windowTitle = n, this.writeTimer = void 0, this.writeDelay = void 0 === i ? 400 : i, this._createURL = o, this.parseURL = a, this.getLocation = c, this._start = u, this._dispose = l, this._push = f, (0, s.U)(function(e) {
                            var t = e.window;
                            x(r.windowTitle && r.windowTitle(r.read())), r.latestAcknowledgedHistory = t.history.length
                        })
                    }
                    return e = [{
                            key: "read",
                            value: function() {
                                return this.parseURL({
                                    qsModule: j,
                                    location: this.getLocation()
                                })
                            }
                        }, {
                            key: "write",
                            value: function(e) {
                                var t = this;
                                (0, s.U)(function(r) {
                                    var n = r.window,
                                        i = t.createURL(e),
                                        o = t.windowTitle && t.windowTitle(e);
                                    t.writeTimer && clearTimeout(t.writeTimer), t.writeTimer = setTimeout(function() {
                                        x(o), t.shouldWrite(i) && (t._push ? t._push(i) : n.history.pushState(e, o || "", i), t.latestAcknowledgedHistory = n.history.length), t.inPopState = !1, t.writeTimer = void 0
                                    }, t.writeDelay)
                                })
                            }
                        }, {
                            key: "onUpdate",
                            value: function(e) {
                                var t = this;
                                this._start && this._start(function() {
                                    e(t.read())
                                }), this._onPopState = function() {
                                    t.writeTimer && (clearTimeout(t.writeTimer), t.writeTimer = void 0), t.inPopState = !0, e(t.read())
                                }, (0, s.U)(function(e) {
                                    e.window.addEventListener("popstate", t._onPopState)
                                })
                            }
                        }, {
                            key: "createURL",
                            value: function(e) {
                                return this._createURL({
                                    qsModule: j,
                                    routeState: e,
                                    location: this.getLocation()
                                })
                            }
                        }, {
                            key: "dispose",
                            value: function() {
                                var e = this;
                                this._dispose && this._dispose(), this.isDisposed = !0, (0, s.U)(function(t) {
                                    var r = t.window;
                                    e._onPopState && r.removeEventListener("popstate", e._onPopState)
                                }), this.writeTimer && clearTimeout(this.writeTimer), this.write({})
                            }
                        }, {
                            key: "start",
                            value: function() {
                                this.isDisposed = !1
                            }
                        }, {
                            key: "shouldWrite",
                            value: function(e) {
                                var t = this;
                                return (0, s.U)(function(r) {
                                    var n = r.window,
                                        i = !(t.isDisposed && t.latestAcknowledgedHistory !== n.history.length);
                                    return !t.inPopState && i && e !== n.location.href
                                })
                            }
                        }],
                        function(e, t) {
                            for (var r = 0; r < t.length; r++) {
                                var n = t[r];
                                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, T(n.key), n)
                            }
                        }(t.prototype, e), Object.defineProperty(t, "prototype", {
                            writable: !1
                        }), t
                }();

            function R(e) {
                return (R = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }
            var I = ["configure"];

            function _(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function k(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? _(Object(r), !0).forEach(function(t) {
                        A(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : _(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }

            function A(e, t, r) {
                var n;
                return (n = function(e, t) {
                    if ("object" !== R(e) || null === e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                        var n = r.call(e, t || "default");
                        if ("object" !== R(n)) return n;
                        throw TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(t, "string"), (t = "symbol" === R(n) ? n : String(n)) in e) ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }

            function D(e) {
                return e.configure,
                    function(e, t) {
                        if (null == e) return {};
                        var r, n, i = function(e, t) {
                            if (null == e) return {};
                            var r, n, i = {},
                                o = Object.keys(e);
                            for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) >= 0 || (i[r] = e[r]);
                            return i
                        }(e, t);
                        if (Object.getOwnPropertySymbols) {
                            var o = Object.getOwnPropertySymbols(e);
                            for (n = 0; n < o.length; n++) r = o[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r])
                        }
                        return i
                    }(e, I)
            }
            var C = r(701776);

            function N(e) {
                return (N = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function U(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function W(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? U(Object(r), !0).forEach(function(t) {
                        $(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : U(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }

            function $(e, t, r) {
                var n;
                return (n = function(e, t) {
                    if ("object" !== N(e) || null === e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                        var n = r.call(e, t || "default");
                        if ("object" !== N(n)) return n;
                        throw TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(t, "string"), (t = "symbol" === N(n) ? n : String(n)) in e) ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }
            var H = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = e.router,
                        r = void 0 === t ? function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                t = e.createURL,
                                r = void 0 === t ? function(e) {
                                    var t = e.qsModule,
                                        r = e.routeState,
                                        n = e.location,
                                        i = n.protocol,
                                        o = n.hostname,
                                        a = n.port,
                                        c = void 0 === a ? "" : a,
                                        u = n.pathname,
                                        s = n.hash,
                                        l = t.stringify(r),
                                        f = "" === c ? "" : ":".concat(c);
                                    return l ? "".concat(i, "//").concat(o).concat(f).concat(u, "?").concat(l).concat(s) : "".concat(i, "//").concat(o).concat(f).concat(u).concat(s)
                                } : t,
                                n = e.parseURL,
                                i = e.writeDelay,
                                o = e.windowTitle,
                                a = e.getLocation;
                            return new E({
                                createURL: r,
                                parseURL: void 0 === n ? function(e) {
                                    var t = e.qsModule,
                                        r = e.location;
                                    return t.parse(r.search.slice(1), {
                                        arrayLimit: 99
                                    })
                                } : n,
                                writeDelay: void 0 === i ? 400 : i,
                                windowTitle: o,
                                getLocation: void 0 === a ? function() {
                                    return (0, s.U)(function(e) {
                                        return e.window.location
                                    }, {
                                        fallback: function() {
                                            throw Error("You need to provide `getLocation` to the `history` router in environments where `window` does not exist.")
                                        }
                                    })
                                } : a,
                                start: e.start,
                                dispose: e.dispose,
                                push: e.push
                            })
                        }() : t,
                        n = e.stateMapping,
                        i = void 0 === n ? {
                            $$type: "ais.simple",
                            stateToRoute: function(e) {
                                return Object.keys(e).reduce(function(t, r) {
                                    return k(k({}, t), {}, A({}, r, D(e[r])))
                                }, {})
                            },
                            routeToState: function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                return Object.keys(e).reduce(function(t, r) {
                                    return k(k({}, t), {}, A({}, r, D(e[r])))
                                }, {})
                            }
                        } : n,
                        o = e.$$internal,
                        a = void 0 !== o && o;
                    return function(e) {
                        var t = e.instantSearchInstance;
                        t._createURL = function(e) {
                            var n = Object.keys(e).reduce(function(t, r) {
                                    return W(W({}, t), {}, $({}, r, e[r]))
                                }, t.mainIndex.getWidgetUiState({})),
                                o = i.stateToRoute(n);
                            return r.createURL(o)
                        };
                        var n = void 0,
                            o = t._initialUiState;
                        return {
                            $$type: "ais.router({router:".concat(r.$$type || "__unknown__", ", stateMapping:").concat(i.$$type || "__unknown__", "})"),
                            $$internal: a,
                            onStateChange: function(e) {
                                var t = e.uiState,
                                    o = i.stateToRoute(t);
                                void 0 !== n && (0, C.X)(n, o) || (r.write(o), n = o)
                            },
                            subscribe: function() {
                                t._initialUiState = W(W({}, o), i.routeToState(r.read())), r.onUpdate(function(e) {
                                    t.setUiState(i.routeToState(e))
                                })
                            },
                            started: function() {
                                var e;
                                null === (e = r.start) || void 0 === e || e.call(r)
                            },
                            unsubscribe: function() {
                                r.dispose()
                            }
                        }
                    }
                },
                L = r(887710),
                F = r(485919),
                M = r(105195);

            function q(e) {
                return (q = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }
            var Q = ["initialSearchParameters"];

            function Z(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function J(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Z(Object(r), !0).forEach(function(t) {
                        B(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Z(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }

            function B(e, t, r) {
                var n;
                return (n = function(e, t) {
                    if ("object" !== q(e) || null === e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                        var n = r.call(e, t || "default");
                        if ("object" !== q(n)) return n;
                        throw TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(t, "string"), (t = "symbol" === q(n) ? n : String(n)) in e) ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }

            function V(e) {
                return function(e) {
                    if (Array.isArray(e)) return z(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e) return z(e, void 0);
                        var r = Object.prototype.toString.call(e).slice(8, -1);
                        if ("Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r) return Array.from(e);
                        if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return z(e, void 0)
                    }
                }(e) || function() {
                    throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function z(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
                return n
            }
            var K = (0, L.K)({
                name: "index-widget"
            });

            function X(e, t) {
                var r = t.state,
                    n = t.isPageReset,
                    i = t._uiState;
                r !== e.state && (e.state = r, e.emit("change", {
                    state: e.state,
                    results: e.lastResults,
                    isPageReset: n,
                    _uiState: i
                }))
            }

            function Y(e, t) {
                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                return e.reduce(function(e, r) {
                    return !(0, F.J)(r) && (r.getWidgetUiState || r.getWidgetState) ? r.getWidgetUiState ? r.getWidgetUiState(e, t) : r.getWidgetState(e, t) : e
                }, r)
            }

            function G(e, t) {
                var r = t.initialSearchParameters,
                    n = function(e, t) {
                        if (null == e) return {};
                        var r, n, i = function(e, t) {
                            if (null == e) return {};
                            var r, n, i = {},
                                o = Object.keys(e);
                            for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) >= 0 || (i[r] = e[r]);
                            return i
                        }(e, t);
                        if (Object.getOwnPropertySymbols) {
                            var o = Object.getOwnPropertySymbols(e);
                            for (n = 0; n < o.length; n++) r = o[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r])
                        }
                        return i
                    }(t, Q);
                return e.filter(function(e) {
                    return !(0, F.J)(e)
                }).reduce(function(e, t) {
                    return t.getWidgetSearchParameters ? t.getWidgetSearchParameters(e, n) : e
                }, r)
            }
            var ee = function(e) {
                if (void 0 === e || void 0 === e.indexName) throw Error(K("The `indexName` option is required."));
                var t = e.indexName,
                    r = e.indexId,
                    n = void 0 === r ? t : r,
                    i = [],
                    o = {},
                    a = null,
                    u = null,
                    s = null,
                    l = null,
                    f = null;
                return {
                    $$type: "ais.index",
                    $$widgetType: "ais.index",
                    getIndexName: function() {
                        return t
                    },
                    getIndexId: function() {
                        return n
                    },
                    getHelper: function() {
                        return s
                    },
                    getResults: function() {
                        var e;
                        return null !== (e = l) && void 0 !== e && e.lastResults ? (l.lastResults._state = s.state, l.lastResults) : null
                    },
                    getPreviousState: function() {
                        return f
                    },
                    getScopedResults: function() {
                        var e = this.getParent();
                        return function e(t) {
                            return t.filter(F.J).reduce(function(t, r) {
                                return t.concat.apply(t, [{
                                    indexId: r.getIndexId(),
                                    results: r.getResults(),
                                    helper: r.getHelper()
                                }].concat(V(e(r.getWidgets()))))
                            }, [])
                        }(e ? e.getWidgets() : [this])
                    },
                    getParent: function() {
                        return u
                    },
                    createURL: function(e) {
                        return a._createURL(B({}, n, Y(i, {
                            searchParameters: e,
                            helper: s
                        })))
                    },
                    getWidgets: function() {
                        return i
                    },
                    addWidgets: function(e) {
                        var t = this;
                        if (!Array.isArray(e)) throw Error(K("The `addWidgets` method expects an array of widgets."));
                        if (e.some(function(e) {
                                return "function" != typeof e.init && "function" != typeof e.render
                            })) throw Error(K("The widget definition expects a `render` and/or an `init` method."));
                        return i = i.concat(e), a && e.length && (X(s, {
                            state: G(i, {
                                uiState: o,
                                initialSearchParameters: s.state
                            }),
                            _uiState: o
                        }), e.forEach(function(e) {
                            e.getRenderState && et({
                                renderState: e.getRenderState(a.renderState[t.getIndexId()] || {}, S(a, t, a._initialUiState)),
                                instantSearchInstance: a,
                                parent: t
                            })
                        }), e.forEach(function(e) {
                            e.init && e.init(S(a, t, a._initialUiState))
                        }), a.scheduleSearch()), this
                    },
                    removeWidgets: function(e) {
                        var t = this;
                        if (!Array.isArray(e)) throw Error(K("The `removeWidgets` method expects an array of widgets."));
                        if (e.some(function(e) {
                                return "function" != typeof e.dispose
                            })) throw Error(K("The widget definition expects a `dispose` method."));
                        if (i = i.filter(function(t) {
                                return -1 === e.indexOf(t)
                            }), a && e.length) {
                            var r = e.reduce(function(e, r) {
                                return r.dispose({
                                    helper: s,
                                    state: e,
                                    parent: t
                                }) || e
                            }, s.state);
                            o = Y(i, {
                                searchParameters: r,
                                helper: s
                            }), s.setState(G(i, {
                                uiState: o,
                                initialSearchParameters: r
                            })), i.length && a.scheduleSearch()
                        }
                        return this
                    },
                    init: function(e) {
                        var r, d = this,
                            p = e.instantSearchInstance,
                            h = e.parent,
                            y = e.uiState;
                        if (null === s) {
                            a = p, u = h, o = y[n] || {};
                            var g = p.mainHelper,
                                m = G(i, {
                                    uiState: o,
                                    initialSearchParameters: new c.SearchParameters({
                                        index: t
                                    })
                                });
                            (s = c({}, m.index, m)).search = function() {
                                return p.onStateChange ? (p.onStateChange({
                                    uiState: p.mainIndex.getWidgetUiState({}),
                                    setUiState: function(e) {
                                        return p.setUiState(e, !1)
                                    }
                                }), g) : g.search()
                            }, s.searchWithoutTriggeringOnStateChange = function() {
                                return g.search()
                            }, s.searchForFacetValues = function(e, t, r, n) {
                                var i = s.state.setQueryParameters(n);
                                return g.searchForFacetValues(e, t, r, i)
                            }, l = g.derive(function() {
                                return M.Z.apply(void 0, V(function(e) {
                                    for (var t = e.getParent(), r = [e.getHelper().state]; null !== t;) r = [t.getHelper().state].concat(r), t = t.getParent();
                                    return r
                                }(d)))
                            });
                            var v = null === (r = p._initialResults) || void 0 === r ? void 0 : r[this.getIndexId()];
                            if (v) {
                                var b = new c.SearchResults(new c.SearchParameters(v.state), v.results);
                                l.lastResults = b, s.lastResults = b
                            }
                            s.on("change", function(e) {
                                e.isPageReset && function e(t) {
                                    var r = t.filter(F.J);
                                    0 !== r.length && r.forEach(function(t) {
                                        var r = t.getHelper();
                                        X(r, {
                                            state: r.state.resetPage(),
                                            isPageReset: !0
                                        }), e(t.getWidgets())
                                    })
                                }(i)
                            }), l.on("search", function() {
                                p.scheduleStalledRender()
                            }), l.on("result", function(e) {
                                var t = e.results;
                                p.scheduleRender(), s.lastResults = t, f = null == t ? void 0 : t._state
                            }), i.forEach(function(e) {
                                e.getRenderState && et({
                                    renderState: e.getRenderState(p.renderState[d.getIndexId()] || {}, S(p, d, y)),
                                    instantSearchInstance: p,
                                    parent: d
                                })
                            }), i.forEach(function(e) {
                                e.init && e.init(S(p, d, y))
                            }), s.on("change", function(e) {
                                var t = e.state,
                                    r = e._uiState;
                                o = Y(i, {
                                    searchParameters: t,
                                    helper: s
                                }, r || {}), p.onStateChange || p.onInternalStateChange()
                            }), v && p.scheduleRender()
                        }
                    },
                    render: function(e) {
                        var t = this,
                            r = e.instantSearchInstance;
                        "error" === r.status && !r.mainHelper.hasPendingRequests() && f && s.setState(f);
                        var n = this.getResults() ? i : i.filter(F.J);
                        n.forEach(function(e) {
                            e.getRenderState && et({
                                renderState: e.getRenderState(r.renderState[t.getIndexId()] || {}, O(r, t)),
                                instantSearchInstance: r,
                                parent: t
                            })
                        }), n.forEach(function(e) {
                            e.render && e.render(O(r, t))
                        })
                    },
                    dispose: function() {
                        var e, t, r = this;
                        i.forEach(function(e) {
                            e.dispose && e.dispose({
                                helper: s,
                                state: s.state,
                                parent: r
                            })
                        }), a = null, u = null, null === (e = s) || void 0 === e || e.removeAllListeners(), s = null, null === (t = l) || void 0 === t || t.detach(), l = null
                    },
                    getWidgetUiState: function(e) {
                        return i.filter(F.J).reduce(function(e, t) {
                            return t.getWidgetUiState(e)
                        }, J(J({}, e), {}, B({}, n, J(J({}, e[n]), o))))
                    },
                    getWidgetState: function(e) {
                        return this.getWidgetUiState(e)
                    },
                    getWidgetSearchParameters: function(e, t) {
                        var r = t.uiState;
                        return G(i, {
                            uiState: r,
                            initialSearchParameters: e
                        })
                    },
                    refreshUiState: function() {
                        o = Y(i, {
                            searchParameters: this.getHelper().state,
                            helper: this.getHelper()
                        }, o)
                    },
                    setIndexUiState: function(e) {
                        var t = "function" == typeof e ? e(o) : e;
                        a.setUiState(function(e) {
                            return J(J({}, e), {}, B({}, n, t))
                        })
                    }
                }
            };

            function et(e) {
                var t = e.renderState,
                    r = e.instantSearchInstance,
                    n = e.parent,
                    i = n ? n.getIndexId() : r.mainIndex.getIndexId();
                r.renderState = J(J({}, r.renderState), {}, B({}, i, J(J({}, r.renderState[i]), t)))
            }
            var er = function(e) {
                return function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        r = t.descendantName,
                        n = t.modifierName;
                    return "".concat("ais", "-").concat(e).concat(r ? "-".concat(r) : "").concat(n ? "--".concat(n) : "")
                }
            };

            function en(e, t) {
                return (Array.isArray(t) ? t : t.split(".")).reduce(function(e, t) {
                    return e && e[t]
                }, e)
            }
            var ei = r(96242),
                eo = er("Highlight");

            function ea(e) {
                var t = ei.Rn.highlightPreTag,
                    r = ei.Rn.highlightPostTag;
                return e.map(function(e) {
                    return e.isHighlighted ? t + e.value + r : e.value
                }).join("")
            }
            var ec = r(906823),
                eu = new RegExp(/\w/i);

            function es(e) {
                return (es = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function el(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function ef(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? el(Object(r), !0).forEach(function(t) {
                        var n, i;
                        n = t, i = r[t], (n = function(e) {
                            var t = function(e, t) {
                                if ("object" !== es(e) || null === e) return e;
                                var r = e[Symbol.toPrimitive];
                                if (void 0 !== r) {
                                    var n = r.call(e, t || "default");
                                    if ("object" !== es(n)) return n;
                                    throw TypeError("@@toPrimitive must return a primitive value.")
                                }
                                return ("string" === t ? String : Number)(e)
                            }(e, "string");
                            return "symbol" === es(t) ? t : String(t)
                        }(n)) in e ? Object.defineProperty(e, n, {
                            value: i,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[n] = i
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : el(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }

            function ed(e) {
                return e.some(function(e) {
                    return e.isHighlighted
                }) ? e.map(function(t, r) {
                    var n, i, o, a, c;
                    return ef(ef({}, t), {}, {
                        isHighlighted: (o = e[r], a = (null === (n = e[r + 1]) || void 0 === n ? void 0 : n.isHighlighted) || !0, c = (null === (i = e[r - 1]) || void 0 === i ? void 0 : i.isHighlighted) || !0, eu.test((0, ec.A)(o.value)) || c !== a ? !o.isHighlighted : !c)
                    })
                }) : e.map(function(e) {
                    return ef(ef({}, e), {}, {
                        isHighlighted: !1
                    })
                })
            }

            function ep(e) {
                var t = ei.Rn.highlightPostTag,
                    r = ei.Rn.highlightPreTag,
                    n = e.split(r),
                    i = n.shift(),
                    o = i ? [{
                        value: i,
                        isHighlighted: !1
                    }] : [];
                return n.forEach(function(e) {
                    var r = e.split(t);
                    o.push({
                        value: r[0],
                        isHighlighted: !0
                    }), "" !== r[1] && o.push({
                        value: r[1],
                        isHighlighted: !1
                    })
                }), o
            }
            var eh = er("ReverseHighlight"),
                ey = er("Snippet"),
                eg = er("ReverseSnippet"),
                em = r(202186);

            function ev(e) {
                return (ev = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function eb(e) {
                return (eb = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function eS(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function eO(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? eS(Object(r), !0).forEach(function(t) {
                        var n, i;
                        n = t, i = r[t], (n = function(e) {
                            var t = function(e, t) {
                                if ("object" !== eb(e) || null === e) return e;
                                var r = e[Symbol.toPrimitive];
                                if (void 0 !== r) {
                                    var n = r.call(e, t || "default");
                                    if ("object" !== eb(n)) return n;
                                    throw TypeError("@@toPrimitive must return a primitive value.")
                                }
                                return ("string" === t ? String : Number)(e)
                            }(e, "string");
                            return "symbol" === eb(t) ? t : String(t)
                        }(n)) in e ? Object.defineProperty(e, n, {
                            value: i,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[n] = i
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : eS(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }
            var ej = Promise.resolve();

            function ew(e) {
                var t = null,
                    r = !1,
                    n = function() {
                        for (var n = arguments.length, i = Array(n), o = 0; o < n; o++) i[o] = arguments[o];
                        null === t && (t = ej.then(function() {
                            if (t = null, r) {
                                r = !1;
                                return
                            }
                            e.apply(void 0, i)
                        }))
                    };
                return n.wait = function() {
                    if (null === t) throw Error("The deferred function should be called before calling `wait()`");
                    return t
                }, n.cancel = function() {
                    null !== t && (r = !0)
                }, n
            }

            function eP(e, t) {
                var r = e[t.getIndexId()] || {};
                t.getHelper().setState(t.getWidgetSearchParameters(t.getHelper().state, {
                    uiState: r
                })), t.getWidgets().filter(F.J).forEach(function(t) {
                    return eP(e, t)
                })
            }

            function eT(e) {
                return (eT = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function ex(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function eE(e, t) {
                return (eE = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function eR(e) {
                if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function eI(e) {
                return (eI = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function e_(e, t, r) {
                return (t = ek(t)) in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }

            function ek(e) {
                var t = function(e, t) {
                    if ("object" !== eT(e) || null === e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                        var n = r.call(e, t || "default");
                        if ("object" !== eT(n)) return n;
                        throw TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" === eT(t) ? t : String(t)
            }
            var eA = (0, L.K)({
                name: "instantsearch"
            });

            function eD() {
                return "#"
            }
            var eC = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), Object.defineProperty(e, "prototype", {
                            writable: !1
                        }), t && eE(e, t)
                    }(i, e);
                    var t, r, n = (t = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                        } catch (e) {
                            return !1
                        }
                    }(), function() {
                        var e, r = eI(i);
                        return e = t ? Reflect.construct(r, arguments, eI(this).constructor) : r.apply(this, arguments),
                            function(e, t) {
                                if (t && ("object" === eT(t) || "function" == typeof t)) return t;
                                if (void 0 !== t) throw TypeError("Derived constructors may only return object or undefined");
                                return eR(e)
                            }(this, e)
                    });

                    function i(e) {
                        ! function(e, t) {
                            if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                        }(this, i), e_(eR(t = n.call(this)), "client", void 0), e_(eR(t), "indexName", void 0), e_(eR(t), "insightsClient", void 0), e_(eR(t), "onStateChange", null), e_(eR(t), "helper", void 0), e_(eR(t), "mainHelper", void 0), e_(eR(t), "mainIndex", void 0), e_(eR(t), "started", void 0), e_(eR(t), "templatesConfig", void 0), e_(eR(t), "renderState", {}), e_(eR(t), "_stalledSearchDelay", void 0), e_(eR(t), "_searchStalledTimer", void 0), e_(eR(t), "_initialUiState", void 0), e_(eR(t), "_initialResults", void 0), e_(eR(t), "_createURL", void 0), e_(eR(t), "_searchFunction", void 0), e_(eR(t), "_mainHelperSearch", void 0), e_(eR(t), "middleware", []), e_(eR(t), "sendEventToInsights", void 0), e_(eR(t), "status", "idle"), e_(eR(t), "error", void 0), e_(eR(t), "scheduleSearch", ew(function() {
                            t.started && t.mainHelper.search()
                        })), e_(eR(t), "scheduleRender", ew(function() {
                            var e, r = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                            !(null !== (e = t.mainHelper) && void 0 !== e && e.hasPendingRequests()) && (clearTimeout(t._searchStalledTimer), t._searchStalledTimer = null, r && (t.status = "idle", t.error = void 0)), t.mainIndex.render({
                                instantSearchInstance: eR(t)
                            }), t.emit("render")
                        })), e_(eR(t), "onInternalStateChange", ew(function() {
                            var e = t.mainIndex.getWidgetUiState({});
                            t.middleware.forEach(function(t) {
                                t.instance.onStateChange({
                                    uiState: e
                                })
                            })
                        })), t.setMaxListeners(100);
                        var t, r = e.indexName,
                            o = void 0 === r ? "" : r,
                            a = e.numberLocale,
                            c = e.initialUiState,
                            f = e.routing,
                            d = void 0 === f ? null : f,
                            O = e.insights,
                            j = void 0 !== O && O,
                            w = e.searchFunction,
                            P = e.stalledSearchDelay,
                            T = e.searchClient,
                            x = void 0 === T ? null : T,
                            E = e.insightsClient,
                            R = void 0 === E ? null : E,
                            I = e.onStateChange;
                        if (null === x) throw Error(eA("The `searchClient` option is required."));
                        if ("function" != typeof x.search) throw Error("The `searchClient` must implement a `search` method.\n\nSee: https://www.algolia.com/doc/guides/building-search-ui/going-further/backend-search/in-depth/backend-instantsearch/js/");
                        if ("function" == typeof x.addAlgoliaAgent && x.addAlgoliaAgent("instantsearch.js (".concat("4.56.0", ")")), R && "function" != typeof R) throw Error(eA("The `insightsClient` option should be a function."));
                        if (t.client = x, t.insightsClient = R, t.indexName = o, t.helper = null, t.mainHelper = null, t.mainIndex = ee({
                                indexName: o
                            }), t.onStateChange = void 0 === I ? null : I, t.started = !1, t.templatesConfig = {
                                helpers: {
                                    formatNumber: function(e, t) {
                                        return Number(t(e)).toLocaleString(a)
                                    },
                                    highlight: function(e, t) {
                                        try {
                                            var r, n, i, o, a, c, u, s, l, f = JSON.parse(e);
                                            return t((n = (r = eO(eO({}, f), {}, {
                                                hit: this
                                            })).attribute, i = r.highlightedTagName, o = void 0 === i ? "mark" : i, a = r.hit, c = r.cssClasses, u = void 0 === c ? {} : c, s = (en(a._highlightResult, n) || {}).value, l = eo({
                                                descendantName: "highlighted"
                                            }) + (u.highlighted ? " ".concat(u.highlighted) : ""), (void 0 === s ? "" : s).replace(RegExp(ei.Rn.highlightPreTag, "g"), "<".concat(o, ' class="').concat(l, '">')).replace(RegExp(ei.Rn.highlightPostTag, "g"), "</".concat(o, ">"))))
                                        } catch (e) {
                                            throw Error('\nThe highlight helper expects a JSON object of the format:\n{ "attribute": "name", "highlightedTagName": "mark" }')
                                        }
                                    },
                                    reverseHighlight: function(e, t) {
                                        try {
                                            var r, n, i, o, a, c, u, s, l, f = JSON.parse(e);
                                            return t((n = (r = eO(eO({}, f), {}, {
                                                hit: this
                                            })).attribute, i = r.highlightedTagName, o = void 0 === i ? "mark" : i, a = r.hit, c = r.cssClasses, u = void 0 === c ? {} : c, s = (en(a._highlightResult, n) || {}).value, l = eh({
                                                descendantName: "highlighted"
                                            }) + (u.highlighted ? " ".concat(u.highlighted) : ""), ea(ed(ep(void 0 === s ? "" : s))).replace(RegExp(ei.Rn.highlightPreTag, "g"), "<".concat(o, ' class="').concat(l, '">')).replace(RegExp(ei.Rn.highlightPostTag, "g"), "</".concat(o, ">"))))
                                        } catch (e) {
                                            throw Error('\n  The reverseHighlight helper expects a JSON object of the format:\n  { "attribute": "name", "highlightedTagName": "mark" }')
                                        }
                                    },
                                    snippet: function(e, t) {
                                        try {
                                            var r, n, i, o, a, c, u, s, l, f = JSON.parse(e);
                                            return t((n = (r = eO(eO({}, f), {}, {
                                                hit: this
                                            })).attribute, i = r.highlightedTagName, o = void 0 === i ? "mark" : i, a = r.hit, c = r.cssClasses, u = void 0 === c ? {} : c, s = (en(a._snippetResult, n) || {}).value, l = ey({
                                                descendantName: "highlighted"
                                            }) + (u.highlighted ? " ".concat(u.highlighted) : ""), (void 0 === s ? "" : s).replace(RegExp(ei.Rn.highlightPreTag, "g"), "<".concat(o, ' class="').concat(l, '">')).replace(RegExp(ei.Rn.highlightPostTag, "g"), "</".concat(o, ">"))))
                                        } catch (e) {
                                            throw Error('\nThe snippet helper expects a JSON object of the format:\n{ "attribute": "name", "highlightedTagName": "mark" }')
                                        }
                                    },
                                    reverseSnippet: function(e, t) {
                                        try {
                                            var r, n, i, o, a, c, u, s, l, f = JSON.parse(e);
                                            return t((n = (r = eO(eO({}, f), {}, {
                                                hit: this
                                            })).attribute, i = r.highlightedTagName, o = void 0 === i ? "mark" : i, a = r.hit, c = r.cssClasses, u = void 0 === c ? {} : c, s = (en(a._snippetResult, n) || {}).value, l = eg({
                                                descendantName: "highlighted"
                                            }) + (u.highlighted ? " ".concat(u.highlighted) : ""), ea(ed(ep(void 0 === s ? "" : s))).replace(RegExp(ei.Rn.highlightPreTag, "g"), "<".concat(o, ' class="').concat(l, '">')).replace(RegExp(ei.Rn.highlightPostTag, "g"), "</".concat(o, ">"))))
                                        } catch (e) {
                                            throw Error('\n  The reverseSnippet helper expects a JSON object of the format:\n  { "attribute": "name", "highlightedTagName": "mark" }')
                                        }
                                    },
                                    insights: function(e, t) {
                                        try {
                                            var r, n = JSON.parse(e),
                                                i = n.method,
                                                o = n.payload;
                                            return t((r = eO({
                                                objectIDs: [this.objectID]
                                            }, o), function(e) {
                                                var t, r = e.method,
                                                    n = e.payload;
                                                if ("object" !== ev(n)) throw Error("The insights helper expects the payload to be an object.");
                                                try {
                                                    t = (0, em.a)(n)
                                                } catch (e) {
                                                    throw Error("Could not JSON serialize the payload object.")
                                                }
                                                return 'data-insights-method="'.concat(r, '" data-insights-payload="').concat(t, '"')
                                            }({
                                                method: i,
                                                payload: r
                                            })))
                                        } catch (e) {
                                            throw Error('\nThe insights helper expects a JSON object of the format:\n{ "method": "method-name", "payload": { "eventName": "name of the event" } }')
                                        }
                                    }
                                },
                                compileOptions: {}
                            }, t._stalledSearchDelay = void 0 === P ? 200 : P, t._searchStalledTimer = null, t._createURL = eD, t._initialUiState = void 0 === c ? {} : c, t._initialResults = null, w && (t._searchFunction = w), t.sendEventToInsights = l.Z, d) {
                            var _ = "boolean" == typeof d ? {} : d;
                            _.$$internal = !0, t.use(H(_))
                        }
                        if (j) {
                            var k = "boolean" == typeof j ? {} : j;
                            k.$$internal = !0, t.use(function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                    t = e.insightsClient,
                                    r = e.insightsInitParams,
                                    n = e.onEvent,
                                    i = e.$$internal,
                                    o = void 0 !== i && i,
                                    a = t;
                                t || null === t || (0, s.U)(function(e) {
                                    var t = e.window,
                                        r = t.AlgoliaAnalyticsObject || "aa";
                                    "string" == typeof r && (a = t[r]), a || (t.AlgoliaAnalyticsObject = r, t[r] || (t[r] = function() {
                                        t[r].queue || (t[r].queue = []);
                                        for (var e = arguments.length, n = Array(e), i = 0; i < e; i++) n[i] = arguments[i];
                                        t[r].queue.push(n)
                                    }, t[r].version = m, t[r].shouldAddScript = !0), a = t[r])
                                });
                                var c = a || l.Z;
                                return function(e) {
                                    var t, i, a = e.instantSearchInstance,
                                        s = a.middleware.filter(function(e) {
                                            return "ais.insights" === e.instance.$$type && e.instance.$$internal
                                        }).map(function(e) {
                                            return e.creator
                                        });
                                    a.unuse.apply(a, function(e) {
                                        if (Array.isArray(e)) return g(e)
                                    }(s) || function(e) {
                                        if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                                    }(s) || y(s) || function() {
                                        throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                    }());
                                    var f = h(function(e) {
                                            if (!e.transporter) return [e.applicationID, e.apiKey];
                                            var t = e.transporter,
                                                r = t.headers,
                                                n = t.queryParameters,
                                                i = "x-algolia-application-id",
                                                o = "x-algolia-api-key";
                                            return [r[i] || n[i], r[o] || n[o]]
                                        }(a.client), 2),
                                        d = f[0],
                                        m = f[1],
                                        S = void 0,
                                        O = void 0;
                                    if (Array.isArray(c.queue)) {
                                        var j = function(e, t) {
                                            for (var r, n = 0; n < e.length; n++)
                                                if (t(r = e[n], n, e)) return r
                                        }(c.queue.slice().reverse(), function(e) {
                                            return "setUserToken" === h(e, 1)[0]
                                        }) || [];
                                        S = h(j, 2)[1]
                                    }
                                    return c("getUserToken", null, function(e, t) {
                                        O = t
                                    }), (r || !b(c)) && c("init", p({
                                        appId: d,
                                        apiKey: m,
                                        partial: !0
                                    }, r)), {
                                        $$type: "ais.insights",
                                        $$internal: o,
                                        onStateChange: function() {},
                                        subscribe: function() {
                                            if (c.shouldAddScript) {
                                                var e = "[insights middleware]: could not load search-insights.js. Please load it manually following https://alg.li/insights-init";
                                                try {
                                                    var t = document.createElement("script");
                                                    t.async = !0, t.src = v, t.onerror = function() {
                                                        a.emit("error", Error(e))
                                                    }, document.body.appendChild(t), c.shouldAddScript = !1
                                                } catch (t) {
                                                    c.shouldAddScript = !1, a.emit("error", Error(e))
                                                }
                                            }
                                        },
                                        started: function() {
                                            c("addAlgoliaAgent", "insights-middleware"), t = {
                                                userToken: (i = a.helper).state.userToken,
                                                clickAnalytics: i.state.clickAnalytics
                                            }, i.overrideStateWithoutTriggeringChangeEvent(p(p({}, i.state), {}, {
                                                clickAnalytics: !0
                                            })), o || a.scheduleSearch();
                                            var e = function(e) {
                                                    if (e) {
                                                        var t = i.state.userToken;
                                                        i.overrideStateWithoutTriggeringChangeEvent(p(p({}, i.state), {}, {
                                                            userToken: e
                                                        })), t && t !== e && a.scheduleSearch()
                                                    }
                                                },
                                                r = function(e) {
                                                    if (("undefined" == typeof document ? "undefined" : u(document)) === "object" && "string" == typeof document.cookie)
                                                        for (var t = "".concat(e, "="), r = document.cookie.split(";"), n = 0; n < r.length; n++) {
                                                            for (var i = r[n];
                                                                " " === i.charAt(0);) i = i.substring(1);
                                                            if (0 === i.indexOf(t)) return i.substring(t.length, i.length)
                                                        }
                                                }("_ALGOLIA");
                                            r && e(r), O ? (e(O), c("setUserToken", O)) : S && (e(S), c("setUserToken", S)), c("onUserTokenChange", e, {
                                                immediate: !0
                                            });
                                            var s = c;
                                            b(c) && (s = function(e, t) {
                                                return c(e, t, {
                                                    headers: {
                                                        "X-Algolia-Application-Id": d,
                                                        "X-Algolia-API-Key": m
                                                    }
                                                })
                                            }), a.sendEventToInsights = function(e) {
                                                n ? n(e, s) : e.insightsMethod && (e.payload.algoliaSource = ["instantsearch"], "internal" === e.eventModifier && e.payload.algoliaSource.push("instantsearch-internal"), s(e.insightsMethod, e.payload))
                                            }
                                        },
                                        unsubscribe: function() {
                                            c("onUserTokenChange", void 0), a.sendEventToInsights = l.Z, i && t && (i.overrideStateWithoutTriggeringChangeEvent(p(p({}, i.state), t)), a.scheduleSearch())
                                        }
                                    }
                                }
                            }(k))
                        }
                        return (0, s.U)(function(e) {
                            var t, r;
                            return (null === (t = e.window.navigator) || void 0 === t ? void 0 : null === (r = t.userAgent) || void 0 === r ? void 0 : r.indexOf("Algolia Crawler")) > -1
                        }, {
                            fallback: function() {
                                return !1
                            }
                        }) && t.use(function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                t = e.$$internal,
                                r = void 0 !== t && t;
                            return function(e) {
                                var t = e.instantSearchInstance,
                                    n = {
                                        widgets: []
                                    },
                                    i = document.createElement("meta"),
                                    o = document.querySelector("head");
                                return i.name = "instantsearch:widgets", {
                                    $$type: "ais.metadata",
                                    $$internal: r,
                                    onStateChange: function() {},
                                    subscribe: function() {
                                        setTimeout(function() {
                                            var e = t.client;
                                            n.ua = e.transporter && e.transporter.userAgent ? e.transporter.userAgent.value : e._ua,
                                                function e(t, r, n) {
                                                    var i = S(r, r.mainIndex, r._initialUiState);
                                                    t.forEach(function(t) {
                                                        var o = {};
                                                        if (t.getWidgetRenderState) {
                                                            var a = t.getWidgetRenderState(i);
                                                            a && a.widgetParams && (o = a.widgetParams)
                                                        }
                                                        var c = Object.keys(o).filter(function(e) {
                                                            return void 0 !== o[e]
                                                        });
                                                        n.widgets.push({
                                                            type: t.$$type,
                                                            widgetType: t.$$widgetType,
                                                            params: c
                                                        }), "ais.index" === t.$$type && e(t.getWidgets(), r, n)
                                                    })
                                                }(t.mainIndex.getWidgets(), t, n), t.middleware.forEach(function(e) {
                                                    return n.widgets.push({
                                                        middleware: !0,
                                                        type: e.instance.$$type,
                                                        internal: e.instance.$$internal
                                                    })
                                                }), i.content = JSON.stringify(n), o.appendChild(i)
                                        }, 0)
                                    },
                                    started: function() {},
                                    unsubscribe: function() {
                                        i.remove()
                                    }
                                }
                            }
                        }({
                            $$internal: !0
                        })), t
                    }
                    return r = [{
                            key: "_isSearchStalled",
                            get: function() {
                                return "stalled" === this.status
                            }
                        }, {
                            key: "use",
                            value: function() {
                                for (var e = this, t = arguments.length, r = Array(t), n = 0; n < t; n++) r[n] = arguments[n];
                                var i = r.map(function(t) {
                                    var r = function(e) {
                                        for (var t = 1; t < arguments.length; t++) {
                                            var r = null != arguments[t] ? arguments[t] : {};
                                            t % 2 ? ex(Object(r), !0).forEach(function(t) {
                                                e_(e, t, r[t])
                                            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ex(Object(r)).forEach(function(t) {
                                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                                            })
                                        }
                                        return e
                                    }({
                                        $$type: "__unknown__",
                                        $$internal: !1,
                                        subscribe: l.Z,
                                        started: l.Z,
                                        unsubscribe: l.Z,
                                        onStateChange: l.Z
                                    }, t({
                                        instantSearchInstance: e
                                    }));
                                    return e.middleware.push({
                                        creator: t,
                                        instance: r
                                    }), r
                                });
                                return this.started && i.forEach(function(e) {
                                    e.subscribe(), e.started()
                                }), this
                            }
                        }, {
                            key: "unuse",
                            value: function() {
                                for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                                return this.middleware.filter(function(e) {
                                    return t.includes(e.creator)
                                }).forEach(function(e) {
                                    return e.instance.unsubscribe()
                                }), this.middleware = this.middleware.filter(function(e) {
                                    return !t.includes(e.creator)
                                }), this
                            }
                        }, {
                            key: "EXPERIMENTAL_use",
                            value: function() {
                                return this.use.apply(this, arguments)
                            }
                        }, {
                            key: "addWidget",
                            value: function(e) {
                                return this.addWidgets([e])
                            }
                        }, {
                            key: "addWidgets",
                            value: function(e) {
                                if (!Array.isArray(e)) throw Error(eA("The `addWidgets` method expects an array of widgets. Please use `addWidget`."));
                                if (e.some(function(e) {
                                        return "function" != typeof e.init && "function" != typeof e.render
                                    })) throw Error(eA("The widget definition expects a `render` and/or an `init` method."));
                                return this.mainIndex.addWidgets(e), this
                            }
                        }, {
                            key: "removeWidget",
                            value: function(e) {
                                return this.removeWidgets([e])
                            }
                        }, {
                            key: "removeWidgets",
                            value: function(e) {
                                if (!Array.isArray(e)) throw Error(eA("The `removeWidgets` method expects an array of widgets. Please use `removeWidget`."));
                                if (e.some(function(e) {
                                        return "function" != typeof e.dispose
                                    })) throw Error(eA("The widget definition expects a `dispose` method."));
                                return this.mainIndex.removeWidgets(e), this
                            }
                        }, {
                            key: "start",
                            value: function() {
                                var e = this;
                                if (this.started) throw Error(eA("The `start` method has already been called once."));
                                var t = this.mainHelper || c(this.client, this.indexName);
                                if (t.search = function() {
                                        return e.status = "loading", e.scheduleRender(!1), t.searchOnlyWithDerivedHelpers()
                                    }, this._searchFunction) {
                                    var r = {
                                        search: function() {
                                            return new Promise(l.Z)
                                        }
                                    };
                                    this._mainHelperSearch = t.search.bind(t), t.search = function() {
                                        var n = e.mainIndex.getHelper(),
                                            i = c(r, n.state.index, n.state);
                                        return i.once("search", function(t) {
                                            var r = t.state;
                                            n.overrideStateWithoutTriggeringChangeEvent(r), e._mainHelperSearch()
                                        }), i.on("change", function(e) {
                                            var t = e.state;
                                            n.setState(t)
                                        }), e._searchFunction(i), t
                                    }
                                }
                                if (t.on("error", function(t) {
                                        var r = t.error;
                                        if (!(r instanceof Error)) {
                                            var n = r;
                                            r = Object.keys(n).reduce(function(e, t) {
                                                return e[t] = n[t], e
                                            }, Error(n.message))
                                        }
                                        r.error = r, e.error = r, e.status = "error", e.scheduleRender(!1), e.emit("error", r)
                                    }), this.mainHelper = t, this.middleware.forEach(function(e) {
                                        e.instance.subscribe()
                                    }), this.mainIndex.init({
                                        instantSearchInstance: this,
                                        parent: null,
                                        uiState: this._initialUiState
                                    }), this._initialResults) {
                                    var n = this.scheduleSearch;
                                    this.scheduleSearch = ew(l.Z), ew(function() {
                                        e.scheduleSearch = n
                                    })()
                                } else this.mainIndex.getWidgets().length > 0 && this.scheduleSearch();
                                this.helper = this.mainIndex.getHelper(), this.started = !0, this.middleware.forEach(function(e) {
                                    e.instance.started()
                                })
                            }
                        }, {
                            key: "dispose",
                            value: function() {
                                var e;
                                this.scheduleSearch.cancel(), this.scheduleRender.cancel(), clearTimeout(this._searchStalledTimer), this.removeWidgets(this.mainIndex.getWidgets()), this.mainIndex.dispose(), this.started = !1, this.removeAllListeners(), null === (e = this.mainHelper) || void 0 === e || e.removeAllListeners(), this.mainHelper = null, this.helper = null, this.middleware.forEach(function(e) {
                                    e.instance.unsubscribe()
                                })
                            }
                        }, {
                            key: "scheduleStalledRender",
                            value: function() {
                                var e = this;
                                this._searchStalledTimer || (this._searchStalledTimer = setTimeout(function() {
                                    e.status = "stalled", e.scheduleRender()
                                }, this._stalledSearchDelay))
                            }
                        }, {
                            key: "setUiState",
                            value: function(e) {
                                var t = this,
                                    r = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                                if (!this.mainHelper) throw Error(eA("The `start` method needs to be called before `setUiState`."));
                                this.mainIndex.refreshUiState();
                                var n = "function" == typeof e ? e(this.mainIndex.getWidgetUiState({})) : e;
                                this.onStateChange && r ? this.onStateChange({
                                    uiState: n,
                                    setUiState: function(e) {
                                        eP("function" == typeof e ? e(n) : e, t.mainIndex), t.scheduleSearch(), t.onInternalStateChange()
                                    }
                                }) : (eP(n, this.mainIndex), this.scheduleSearch(), this.onInternalStateChange())
                            }
                        }, {
                            key: "getUiState",
                            value: function() {
                                return this.started && this.mainIndex.refreshUiState(), this.mainIndex.getWidgetUiState({})
                            }
                        }, {
                            key: "createURL",
                            value: function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                if (!this.started) throw Error(eA("The `start` method needs to be called before `createURL`."));
                                return this._createURL(e)
                            }
                        }, {
                            key: "refresh",
                            value: function() {
                                if (!this.mainHelper) throw Error(eA("The `start` method needs to be called before `refresh`."));
                                this.mainHelper.clearCache().search()
                            }
                        }],
                        function(e, t) {
                            for (var r = 0; r < t.length; r++) {
                                var n = t[r];
                                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, ek(n.key), n)
                            }
                        }(i.prototype, r), Object.defineProperty(i, "prototype", {
                            writable: !1
                        }), i
                }(a),
                eN = r(504060),
                eU = r(105052),
                eW = (0, n.createContext)(null),
                e$ = "6.38.1";

            function eH(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
                return n
            }
            var eL = ["react (".concat(n.version, ")"), "react-instantsearch (".concat(e$, ")"), "react-instantsearch-hooks (".concat(e$, ")")],
                eF = "react-instantsearch-server (".concat(e$, ")");

            function eM(e, t) {
                "function" == typeof e.addAlgoliaAgent && t.filter(Boolean).forEach(function(t) {
                    e.addAlgoliaAgent(t)
                })
            }
            var eq = ["children"];

            function eQ(e) {
                var t = e.children,
                    r = function(e) {
                        var t = (function(e) {
                                if (Array.isArray(e)) return e
                            }(s = (0, n.useReducer)(function(e) {
                                return e + 1
                            }, 0)) || function(e, t) {
                                var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                                if (null != r) {
                                    var n, i, o, a, c = [],
                                        u = !0,
                                        s = !1;
                                    try {
                                        for (o = (r = r.call(e)).next; !(u = (n = o.call(r)).done) && (c.push(n.value), 2 !== c.length); u = !0);
                                    } catch (e) {
                                        s = !0, i = e
                                    } finally {
                                        try {
                                            if (!u && null != r.return && (a = r.return(), Object(a) !== a)) return
                                        } finally {
                                            if (s) throw i
                                        }
                                    }
                                    return c
                                }
                            }(s, 2) || function(e, t) {
                                if (e) {
                                    if ("string" == typeof e) return eH(e, 2);
                                    var r = Object.prototype.toString.call(e).slice(8, -1);
                                    if ("Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r) return Array.from(e);
                                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return eH(e, 2)
                                }
                            }(s, 2) || function() {
                                throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                            }())[1],
                            r = (0, eU.a)(),
                            i = (0, n.useContext)(eW),
                            o = null == i ? void 0 : i.initialResults,
                            a = (0, n.useRef)(e),
                            c = (0, n.useRef)(null);
                        if (i && (c = i.ssrSearchRef), null === c.current) {
                            var u = new eC(e);
                            u._schedule = function(e) {
                                u._schedule.queue.push(e), clearTimeout(u._schedule.timer), u._schedule.timer = setTimeout(function() {
                                    u._schedule.queue.forEach(function(e) {
                                        e()
                                    }), u._schedule.queue = []
                                }, 0)
                            }, u._schedule.queue = [], (r || o) && (u._initialResults = o || {}), eM(e.searchClient, [].concat(eL, [r && eF])), (r || o) && u.start(), r && r.notifyServer({
                                search: u
                            }), e.routing, c.current = u
                        }
                        var s, l, f = c.current,
                            d = a.current;
                        d.indexName !== e.indexName && (f.helper.setIndex(e.indexName || "").search(), a.current = e), d.searchClient !== e.searchClient && (eM(e.searchClient, [].concat(eL, [r && eF])), f.mainHelper.setClient(e.searchClient).search(), a.current = e), d.onStateChange !== e.onStateChange && (f.onStateChange = e.onStateChange, a.current = e), d.searchFunction !== e.searchFunction && (f._searchFunction = e.searchFunction, a.current = e), d.stalledSearchDelay !== e.stalledSearchDelay && (f._stalledSearchDelay = null !== (l = e.stalledSearchDelay) && void 0 !== l ? l : 200, a.current = e);
                        var p = (0, n.useRef)(null);
                        return (0, eN.useSyncExternalStore)((0, n.useCallback)(function() {
                            var e = c.current;
                            return null === p.current ? e.started || (e.start(), t()) : (clearTimeout(p.current), e._preventWidgetCleanup = !1),
                                function() {
                                    clearTimeout(e._schedule.timer), p.current = setTimeout(function() {
                                        e.dispose()
                                    }), e._preventWidgetCleanup = !0
                                }
                        }, [t]), function() {
                            return c.current
                        }, function() {
                            return c.current
                        })
                    }(function(e, t) {
                        if (null == e) return {};
                        var r, n, i = function(e, t) {
                            if (null == e) return {};
                            var r, n, i = {},
                                o = Object.keys(e);
                            for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) >= 0 || (i[r] = e[r]);
                            return i
                        }(e, t);
                        if (Object.getOwnPropertySymbols) {
                            var o = Object.getOwnPropertySymbols(e);
                            for (n = 0; n < o.length; n++) r = o[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r])
                        }
                        return i
                    }(e, eq));
                return r.started ? n.createElement(o.Z.Provider, {
                    value: r
                }, n.createElement(i.Z.Provider, {
                    value: r.mainIndex
                }, t)) : null
            }
        },
        358620: function(e, t, r) {
            r.d(t, {
                l: function() {
                    return g
                }
            });
            var n = r(454479),
                i = r(887710),
                o = r(104167),
                a = r(918466),
                c = r(105195);

            function u(e) {
                return (u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function s(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function l(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? s(Object(r), !0).forEach(function(t) {
                        f(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : s(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }

            function f(e, t, r) {
                var n;
                return (n = function(e, t) {
                    if ("object" !== u(e) || null === e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                        var n = r.call(e, t || "default");
                        if ("object" !== u(n)) return n;
                        throw TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(t, "string"), (t = "symbol" === u(n) ? n : String(n)) in e) ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }
            var d = (0, i.K)({
                name: "configure",
                connector: !0
            });

            function p(e, t) {
                return e.setQueryParameters(Object.keys(t.searchParameters).reduce(function(e, t) {
                    return l(l({}, e), {}, f({}, t, void 0))
                }, {}))
            }
            var h = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o.Z,
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.Z;
                    return function(r) {
                        if (!r || !(0, a.P)(r.searchParameters)) throw Error(d("The `searchParameters` option expects an object."));
                        var i = {};
                        return {
                            $$type: "ais.configure",
                            init: function(t) {
                                var r = t.instantSearchInstance;
                                e(l(l({}, this.getWidgetRenderState(t)), {}, {
                                    instantSearchInstance: r
                                }), !0)
                            },
                            render: function(t) {
                                var r = t.instantSearchInstance;
                                e(l(l({}, this.getWidgetRenderState(t)), {}, {
                                    instantSearchInstance: r
                                }), !1)
                            },
                            dispose: function(e) {
                                var n = e.state;
                                return t(), p(n, r)
                            },
                            getRenderState: function(e, t) {
                                var r, i = this.getWidgetRenderState(t);
                                return l(l({}, e), {}, {
                                    configure: l(l({}, i), {}, {
                                        widgetParams: l(l({}, i.widgetParams), {}, {
                                            searchParameters: (0, c.Z)(new n.SearchParameters(null === (r = e.configure) || void 0 === r ? void 0 : r.widgetParams.searchParameters), new n.SearchParameters(i.widgetParams.searchParameters)).getQueryParams()
                                        })
                                    })
                                })
                            },
                            getWidgetRenderState: function(e) {
                                var t = e.helper;
                                return i.refine || (i.refine = function(e) {
                                    var i = p(t.state, r),
                                        o = (0, c.Z)(i, new n.SearchParameters(e));
                                    r.searchParameters = e, t.setState(o).search()
                                }), {
                                    refine: i.refine,
                                    widgetParams: r
                                }
                            },
                            getWidgetSearchParameters: function(e, t) {
                                var i = t.uiState;
                                return (0, c.Z)(e, new n.SearchParameters(l(l({}, i.configure), r.searchParameters)))
                            },
                            getWidgetUiState: function(e) {
                                return l(l({}, e), {}, {
                                    configure: l(l({}, e.configure), r.searchParameters)
                                })
                            }
                        }
                    }
                },
                y = r(757852);

            function g(e, t) {
                return (0, y.B)(h, {
                    searchParameters: e
                }, t)
            }
        },
        3879: function(e, t, r) {
            r.d(t, {
                a: function() {
                    return x
                }
            });
            var n = r(887710),
                i = r(701776),
                o = r(104167),
                a = r(953707),
                c = r(958216),
                u = r(96242),
                s = r(243769),
                l = r(73987),
                f = r(485919);

            function d(e) {
                return (d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }
            var p = ["page"],
                h = ["clickAnalytics", "userToken"];

            function y(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function g(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? y(Object(r), !0).forEach(function(t) {
                        m(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : y(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }

            function m(e, t, r) {
                var n;
                return (n = function(e, t) {
                    if ("object" !== d(e) || null === e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                        var n = r.call(e, t || "default");
                        if ("object" !== d(n)) return n;
                        throw TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(t, "string"), (t = "symbol" === d(n) ? n : String(n)) in e) ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }

            function v(e) {
                return function(e) {
                    if (Array.isArray(e)) return b(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e) return b(e, void 0);
                        var r = Object.prototype.toString.call(e).slice(8, -1);
                        if ("Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r) return Array.from(e);
                        if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return b(e, void 0)
                    }
                }(e) || function() {
                    throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function b(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function S(e, t) {
                if (null == e) return {};
                var r, n, i = function(e, t) {
                    if (null == e) return {};
                    var r, n, i = {},
                        o = Object.keys(e);
                    for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) >= 0 || (i[r] = e[r]);
                    return i
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < o.length; n++) r = o[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r])
                }
                return i
            }
            var O = (0, n.K)({
                name: "infinite-hits",
                connector: !0
            });

            function j(e) {
                var t = e || {};
                return t.page, S(t, p)
            }

            function w(e) {
                var t = e || {};
                return t.clickAnalytics, t.userToken, S(t, h)
            }
            var P = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.Z;
                    return (0, a._)(e, O()),
                        function(r) {
                            var n, o, a, d, p, h, y = r || {},
                                b = y.escapeHTML,
                                S = void 0 === b || b,
                                O = y.transformItems,
                                P = void 0 === O ? function(e) {
                                    return e
                                } : O,
                                T = y.cache,
                                x = void 0 === T ? (n = null, o = null, {
                                    read: function(e) {
                                        var t = e.state;
                                        return (0, i.X)(o, j(t)) ? n : null
                                    },
                                    write: function(e) {
                                        var t = e.state,
                                            r = e.hits;
                                        o = j(t), n = r
                                    }
                                }) : T,
                                E = function(e, t) {
                                    var r = e.page,
                                        n = void 0 === r ? 0 : r,
                                        i = Object.keys(t).map(Number);
                                    return 0 === i.length ? n : Math.min.apply(Math, [n].concat(v(i)))
                                },
                                R = function(e, t) {
                                    var r = e.page,
                                        n = void 0 === r ? 0 : r,
                                        i = Object.keys(t).map(Number);
                                    return 0 === i.length ? n : Math.max.apply(Math, [n].concat(v(i)))
                                };
                            return {
                                $$type: "ais.infiniteHits",
                                init: function(t) {
                                    e(g(g({}, this.getWidgetRenderState(t)), {}, {
                                        instantSearchInstance: t.instantSearchInstance
                                    }), !0)
                                },
                                render: function(t) {
                                    var r = t.instantSearchInstance,
                                        n = this.getWidgetRenderState(t);
                                    e(g(g({}, n), {}, {
                                        instantSearchInstance: r
                                    }), !1), p("view:internal", n.currentPageHits)
                                },
                                getRenderState: function(e, t) {
                                    return g(g({}, e), {}, {
                                        infiniteHits: this.getWidgetRenderState(t)
                                    })
                                },
                                getWidgetRenderState: function(e) {
                                    var t = e.results,
                                        n = e.helper,
                                        i = e.parent,
                                        o = e.state,
                                        y = e.instantSearchInstance,
                                        m = [],
                                        v = i.getPreviousState() || o,
                                        b = x.read({
                                            state: w(v)
                                        }) || {};
                                    if (t) {
                                        var O, j, T, I, _ = v.page,
                                            k = void 0 === _ ? 0 : _;
                                        S && t.hits.length > 0 && (t.hits = (0, u.mY)(t.hits));
                                        var A = (0, s.x)(t.hits, t.page, t.hitsPerPage),
                                            D = P((0, l.I)(A, t.queryID), {
                                                results: t
                                            }),
                                            C = !1;
                                        ! function e(t, r) {
                                            r(t), t.getWidgets().forEach(function(t) {
                                                (0, f.J)(t) && e(t, r)
                                            })
                                        }(y.mainIndex, function(e) {
                                            !C && e.getWidgets().some(function(e) {
                                                return "ais.dynamicWidgets" === e.$$type
                                            }) && (C = !0)
                                        });
                                        var N = !(null !== (j = t.disjunctiveFacets) && void 0 !== j && j.length) && !(null !== (T = t.facets) && void 0 !== T && T.length) && !(null !== (I = t.hierarchicalFacets) && void 0 !== I && I.length);
                                        void 0 !== b[k] || t.__isArtificial || "idle" !== y.status || C && N || (b[k] = D, x.write({
                                            state: w(v),
                                            hits: b
                                        })), m = D, O = 0 === E(v, b)
                                    } else a = function() {
                                        n.overrideStateWithoutTriggeringChangeEvent(g(g({}, n.state), {}, {
                                            page: E(n.state, x.read({
                                                state: w(n.state)
                                            }) || {}) - 1
                                        })).searchWithoutTriggeringOnStateChange()
                                    }, d = function() {
                                        n.setPage(R(n.state, x.read({
                                            state: w(n.state)
                                        }) || {}) + 1).search()
                                    }, p = (0, c.HV)({
                                        instantSearchInstance: y,
                                        index: n.getIndex(),
                                        widgetType: this.$$type
                                    }), h = (0, c.KN)({
                                        index: n.getIndex(),
                                        widgetType: this.$$type,
                                        instantSearchInstance: y
                                    }), O = void 0 === v.page || 0 === E(v, b);
                                    var U = Object.keys(b).map(Number).sort(function(e, t) {
                                            return e - t
                                        }).reduce(function(e, t) {
                                            return e.concat(b[t])
                                        }, []),
                                        W = !t || t.nbPages <= R(v, b) + 1;
                                    return {
                                        hits: U,
                                        currentPageHits: m,
                                        sendEvent: p,
                                        bindEvent: h,
                                        results: t,
                                        showPrevious: a,
                                        showMore: d,
                                        isFirstPage: O,
                                        isLastPage: W,
                                        widgetParams: r
                                    }
                                },
                                dispose: function(e) {
                                    var r = e.state;
                                    t();
                                    var n = r.setQueryParameter("page", void 0);
                                    return S ? n.setQueryParameters(Object.keys(u.dg).reduce(function(e, t) {
                                        return g(g({}, e), {}, m({}, t, void 0))
                                    }, {})) : n
                                },
                                getWidgetUiState: function(e, t) {
                                    var r = t.searchParameters.page || 0;
                                    return r ? g(g({}, e), {}, {
                                        page: r + 1
                                    }) : e
                                },
                                getWidgetSearchParameters: function(e, t) {
                                    var r = t.uiState,
                                        n = e;
                                    S && (n = e.setQueryParameters(u.dg));
                                    var i = r.page ? r.page - 1 : 0;
                                    return n.setQueryParameter("page", i)
                                }
                            }
                        }
                },
                T = r(757852);

            function x(e, t) {
                return (0, T.B)(P, e, t)
            }
        },
        757852: function(e, t, r) {
            r.d(t, {
                B: function() {
                    return O
                }
            });
            var n = r(275271);

            function i(e) {
                return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }
            var o = Object.prototype.hasOwnProperty;

            function a(e, t, r) {
                var n, c;
                if (null != r && r(e, t) || e === t) return !0;
                if (e && t && (n = e.constructor) === t.constructor) {
                    if (n === Date) return e.getTime() === t.getTime();
                    if (n === RegExp) return e.toString() === t.toString();
                    if (n === Array) {
                        if ((c = e.length) === t.length)
                            for (; c-- && a(e[c], t[c], r););
                        return -1 === c
                    }
                    if (!n || "object" === i(e)) {
                        for (n in c = 0, e)
                            if (o.call(e, n) && ++c && !o.call(t, n) || !(n in t) || !a(e[n], t[n], r)) return !1;
                        return Object.keys(t).length === c
                    }
                }
                return e != e && t != t
            }
            var c = r(128099),
                u = r(410061),
                s = r(533559),
                l = r(105052);

            function f(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function d(e) {
                var t, r = function(e) {
                        if (Array.isArray(e)) return e
                    }(t = (0, n.useState)(function() {
                        return e
                    })) || function(e, t) {
                        var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                        if (null != r) {
                            var n, i, o, a, c = [],
                                u = !0,
                                s = !1;
                            try {
                                for (o = (r = r.call(e)).next; !(u = (n = o.call(r)).done) && (c.push(n.value), 2 !== c.length); u = !0);
                            } catch (e) {
                                s = !0, i = e
                            } finally {
                                try {
                                    if (!u && null != r.return && (a = r.return(), Object(a) !== a)) return
                                } finally {
                                    if (s) throw i
                                }
                            }
                            return c
                        }
                    }(t, 2) || function(e, t) {
                        if (e) {
                            if ("string" == typeof e) return f(e, 2);
                            var r = Object.prototype.toString.call(e).slice(8, -1);
                            if ("Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r) return Array.from(e);
                            if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return f(e, 2)
                        }
                    }(t, 2) || function() {
                        throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }(),
                    i = r[0],
                    o = r[1];
                return a(i, e) || o(e), i
            }
            var p = r(272164);

            function h(e) {
                return (h = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }
            var y = ["instantSearchInstance", "widgetParams"],
                g = ["widgetParams"];

            function m(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function v(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function b(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? v(Object(r), !0).forEach(function(t) {
                        var n, i;
                        n = t, i = r[t], (n = function(e) {
                            var t = function(e, t) {
                                if ("object" !== h(e) || null === e) return e;
                                var r = e[Symbol.toPrimitive];
                                if (void 0 !== r) {
                                    var n = r.call(e, t || "default");
                                    if ("object" !== h(n)) return n;
                                    throw TypeError("@@toPrimitive must return a primitive value.")
                                }
                                return ("string" === t ? String : Number)(e)
                            }(e, "string");
                            return "symbol" === h(t) ? t : String(t)
                        }(n)) in e ? Object.defineProperty(e, n, {
                            value: i,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[n] = i
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : v(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }

            function S(e, t) {
                if (null == e) return {};
                var r, n, i = function(e, t) {
                    if (null == e) return {};
                    var r, n, i = {},
                        o = Object.keys(e);
                    for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) >= 0 || (i[r] = e[r]);
                    return i
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < o.length; n++) r = o[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r])
                }
                return i
            }

            function O(e) {
                var t, r, i, o, f, h, v, O, j, w, P, T = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    x = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    E = (0, l.a)(),
                    R = (0, s.z)(),
                    I = (0, u.a)(),
                    _ = d(T),
                    k = d(x),
                    A = (0, n.useRef)(!0),
                    D = (0, n.useRef)(null),
                    C = (0, n.useMemo)(function() {
                        return b(b({}, e(function(e, t) {
                            if (t) {
                                A.current = !0;
                                return
                            }
                            if (A.current) {
                                e.instantSearchInstance, e.widgetParams;
                                var r = S(e, y);
                                a(r, D.current, function(e, t) {
                                    return (null == e ? void 0 : e.constructor) === Function && (null == t ? void 0 : t.constructor) === Function
                                }) || (W(r), D.current = r)
                            }
                        }, function() {
                            A.current = !1
                        })(_)), k)
                    }, [e, _, k]),
                    N = function(e) {
                        if (Array.isArray(e)) return e
                    }(t = (0, n.useState)(function() {
                        if (C.getWidgetRenderState) {
                            var e, t = I.getHelper(),
                                r = I.getWidgetUiState({})[I.getIndexId()];
                            t.state = (null === (e = C.getWidgetSearchParameters) || void 0 === e ? void 0 : e.call(C, t.state, {
                                uiState: r
                            })) || t.state;
                            var n = (0, c.E)(I),
                                i = n.results,
                                o = n.scopedResults,
                                a = C.getWidgetRenderState({
                                    helper: t,
                                    parent: I,
                                    instantSearchInstance: R,
                                    results: i,
                                    scopedResults: o,
                                    state: t.state,
                                    renderState: R.renderState,
                                    templatesConfig: R.templatesConfig,
                                    createURL: I.createURL,
                                    searchMetadata: {
                                        isSearchStalled: "stalled" === R.status
                                    },
                                    status: R.status,
                                    error: R.error
                                });
                            return a.widgetParams, S(a, g)
                        }
                        return {}
                    })) || function(e, t) {
                        var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                        if (null != r) {
                            var n, i, o, a, c = [],
                                u = !0,
                                s = !1;
                            try {
                                for (o = (r = r.call(e)).next; !(u = (n = o.call(r)).done) && (c.push(n.value), 2 !== c.length); u = !0);
                            } catch (e) {
                                s = !0, i = e
                            } finally {
                                try {
                                    if (!u && null != r.return && (a = r.return(), Object(a) !== a)) return
                                } finally {
                                    if (s) throw i
                                }
                            }
                            return c
                        }
                    }(t, 2) || function(e, t) {
                        if (e) {
                            if ("string" == typeof e) return m(e, 2);
                            var r = Object.prototype.toString.call(e).slice(8, -1);
                            if ("Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r) return Array.from(e);
                            if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return m(e, 2)
                        }
                    }(t, 2) || function() {
                        throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }(),
                    U = N[0],
                    W = N[1];
                return i = (r = {
                    widget: C,
                    parentIndex: I,
                    props: _,
                    shouldSsr: !!E
                }).widget, o = r.parentIndex, f = r.props, h = r.shouldSsr, v = (0, n.useRef)(f), (0, n.useEffect)(function() {
                    v.current = f
                }, [f]), O = (0, n.useRef)(i), (0, n.useEffect)(function() {
                    O.current = i
                }, [i]), j = (0, n.useRef)(null), w = h && !o.getWidgets().includes(i), P = (0, s.z)(), (0, p.L)(function() {
                    var e = O.current;
                    return j.current ? (clearTimeout(j.current), a(f, v.current) || (o.removeWidgets([e]), o.addWidgets([i]))) : w || o.addWidgets([i]),
                        function() {
                            j.current = setTimeout(function() {
                                P._schedule(function() {
                                    P._preventWidgetCleanup || o.removeWidgets([e])
                                })
                            })
                        }
                }, [o, i, w, P, f]), w && o.addWidgets([i]), U
            }
        },
        399894: function(e, t, r) {
            r.d(t, {
                Z: function() {
                    return n
                }
            });
            var n = (0, r(275271).createContext)(null)
        },
        774951: function(e, t, r) {
            r.d(t, {
                Z: function() {
                    return n
                }
            });
            var n = (0, r(275271).createContext)(null)
        },
        128099: function(e, t, r) {
            r.d(t, {
                E: function() {
                    return u
                }
            });
            var n = r(454479);

            function i(e) {
                var t, r, i;
                return new n.SearchResults(e, [{
                    query: null !== (t = e.query) && void 0 !== t ? t : "",
                    page: null !== (r = e.page) && void 0 !== r ? r : 0,
                    hitsPerPage: null !== (i = e.hitsPerPage) && void 0 !== i ? i : 20,
                    hits: [],
                    nbHits: 0,
                    nbPages: 0,
                    params: "",
                    exhaustiveNbHits: !0,
                    exhaustiveFacetsCount: !0,
                    processingTimeMS: 0,
                    index: e.index
                }], {
                    __isArtificial: !0
                })
            }

            function o(e) {
                return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function a(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function c(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? a(Object(r), !0).forEach(function(t) {
                        var n, i;
                        n = t, i = r[t], (n = function(e) {
                            var t = function(e, t) {
                                if ("object" !== o(e) || null === e) return e;
                                var r = e[Symbol.toPrimitive];
                                if (void 0 !== r) {
                                    var n = r.call(e, t || "default");
                                    if ("object" !== o(n)) return n;
                                    throw TypeError("@@toPrimitive must return a primitive value.")
                                }
                                return ("string" === t ? String : Number)(e)
                            }(e, "string");
                            return "symbol" === o(t) ? t : String(t)
                        }(n)) in e ? Object.defineProperty(e, n, {
                            value: i,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[n] = i
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : a(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }

            function u(e) {
                var t = e.getHelper(),
                    r = e.getResults() || i(t.state),
                    n = e.getScopedResults().map(function(t) {
                        var n = t.indexId === e.getIndexId() ? r : i(t.helper.state);
                        return c(c({}, t), {}, {
                            results: t.results || n
                        })
                    });
                return {
                    results: r,
                    scopedResults: n
                }
            }
        },
        709679: function(e, t, r) {
            r.d(t, {
                k: function() {
                    return n
                }
            });

            function n(e, t) {
                if (!e) throw Error("Invariant failed")
            }
        },
        410061: function(e, t, r) {
            r.d(t, {
                a: function() {
                    return a
                }
            });
            var n = r(275271),
                i = r(709679),
                o = r(399894);

            function a() {
                var e = (0, n.useContext)(o.Z);
                return (0, i.k)(null !== e, "The <Index> component must be used within <InstantSearch>."), e
            }
        },
        533559: function(e, t, r) {
            r.d(t, {
                z: function() {
                    return a
                }
            });
            var n = r(275271),
                i = r(709679),
                o = r(774951);

            function a() {
                var e = (0, n.useContext)(o.Z);
                return (0, i.k)(null !== e, "Hooks must be used inside the <InstantSearch> component.\n\nThey are not compatible with the `react-instantsearch-core` and `react-instantsearch-dom` packages, so make sure to use the <InstantSearch> component from `react-instantsearch-hooks`."), e
            }
        },
        105052: function(e, t, r) {
            r.d(t, {
                a: function() {
                    return o
                }
            });
            var n = r(275271),
                i = (0, n.createContext)(null);

            function o() {
                return (0, n.useContext)(i)
            }
        },
        272164: function(e, t, r) {
            r.d(t, {
                L: function() {
                    return i
                }
            });
            var n = r(275271),
                i = "undefined" != typeof window ? n.useLayoutEffect : n.useEffect
        }
    }
]);
//# sourceMappingURL=17566-fb43fbaf0ecb03f8.js.map