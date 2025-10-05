"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [50196], {
        556934: function(e, t, r) {
            r.d(t, {
                K: function() {
                    return o
                }
            });
            var a = r(275271),
                l = r(282187),
                n = r.n(l),
                s = r(825040),
                i = r(524430);
            let o = (0, a.forwardRef)((e, t) => {
                let {
                    className: r,
                    children: l,
                    disabled: o,
                    layout: c = "inline",
                    pending: h,
                    pendingAltText: d,
                    size: m = "large",
                    variant: u = "default",
                    ...g
                } = e, p = (0, a.useRef)(null);
                (0, a.useImperativeHandle)(t, () => p.current);
                let f = n()(r, "hrt-primary-button", `hrt-primary-button--${c}`, `hrt-primary-button--${m}`, `hrt-primary-button--${u}`, {
                    "hrt-primary-button--disabled hrt-base-button--disabled": o,
                    "hrt-primary-button--disabled hrt-base-button--disabled hrt-base-button--pending": h
                });
                return a.createElement(i.Y, {
                    className: f,
                    ref: p,
                    ..."button" !== g.as && (o || h) ? {
                        "aria-disabled": o || h
                    } : null,
                    ...g,
                    ..."a" === g.as && (o || h) ? {
                        href: ""
                    } : null,
                    disabled: "button" === g.as && (o || h)
                }, h && a.createElement(s.x, {
                    altText: d,
                    className: "hrt-position-absolute",
                    color: "default-on-strong" === u ? "black" : "gray"
                }), "string" == typeof l ? a.createElement("span", null, l) : l)
            });
            o.displayName = "PrimaryButton"
        },
        847380: function(e, t, r) {
            r.d(t, {
                _: function() {
                    return M
                }
            });
            var a = r(275271),
                l = r(282187),
                n = r.n(l);
            let s = e => 1 - Math.pow(1 - e, 1.8),
                i = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 180,
                        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 12,
                        a = r / (2 * Math.sqrt(1 * t)),
                        l = Math.sqrt(t / 1);
                    return Math.max(300, Math.min(2e3, 1e3 * (a >= 1 ? 4 / (a * l) : 4 / (l * Math.sqrt(1 - a * a))) * Math.sqrt(Math.abs(e) / 100)))
                },
                o = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        [r, l] = (0, a.useState)(t ? 0 : e);
                    return (0, a.useEffect)(() => {
                        let a;
                        if (t) {
                            let t = i(Math.abs(e - r)),
                                n = Date.now(),
                                o = () => {
                                    let i = Math.min((Date.now() - n) / t, 1);
                                    l(r + (e - r) * s(i)), i < 1 && (a = requestAnimationFrame(o))
                                };
                            a = requestAnimationFrame(o)
                        } else l(e);
                        return () => {
                            a && cancelAnimationFrame(a)
                        }
                    }, [e, t, r]), r
                },
                c = e => {
                    let {
                        direction: t,
                        position: r,
                        strokeWidth: a,
                        arcSize: l = 2
                    } = e, n = "top" === r, s = "start" === t, i = s ? l : -l, o = n ? -l : l;
                    return `M 50 ${n?l:a-l}
          l 0 ${o}
          l ${i} 0
          a ${l} ${l} 0 0 ${s?n?0:1:n?1:0} ${-i} ${-o}
          Z`
                },
                h = e => `M 50 0
          l 0 ${e}
          l 1 0
          l 0 -${e}
          Z`,
                d = e => {
                    switch (e) {
                        case "green":
                        default:
                            return "#acf86c";
                        case "blue":
                            return "#a7e3e3"
                    }
                },
                m = (e, t, r) => {
                    if (e) switch (t) {
                        case "xlarge":
                            return Math.floor(.13636 * r);
                        case "large":
                            return Math.floor(.16667 * r);
                        case "medium":
                            return Math.floor(.18182 * r);
                        case "small":
                        default:
                            return Math.floor(.25 * r);
                        case "xsmall":
                            return Math.floor(.28571 * r)
                    }
                    switch (t) {
                        case "xlarge":
                            return Math.floor(.1 * r);
                        case "large":
                            return Math.floor(.11538 * r);
                        case "medium":
                            return Math.floor(.125 * r);
                        case "small":
                        default:
                            return Math.floor(.15 * r);
                        case "xsmall":
                            return Math.floor(.16667 * r)
                    }
                },
                u = () => {
                    if ("undefined" == typeof navigator) return !1;
                    let e = navigator.userAgent,
                        t = /iP(hone|ad|od)/i.test(e),
                        r = /AppleWebKit/i.test(e),
                        a = /Macintosh/i.test(e),
                        l = /Safari/i.test(e) && !/Chrome|Chromium|Edg/i.test(e),
                        n = /CriOS|FxiOS|EdgiOS/i.test(e);
                    return t && r || a && l || n
                },
                g = "1" === new URLSearchParams(window.location.search).get("pcWorkaround") || !0 === window.__PC_WORKAROUND__,
                p = new Map,
                f = e => {
                    let t = e.replace("#", ""),
                        r = parseInt(3 === t.length ? t.split("").map(e => e + e).join("") : t, 16);
                    return {
                        r: r >> 16 & 255,
                        g: r >> 8 & 255,
                        b: 255 & r
                    }
                },
                b = (e, t, r) => e + (t - e) * r,
                E = (e, t, r) => {
                    let a = f(e),
                        l = f(t),
                        n = Math.round(b(a.r, l.r, r)),
                        s = Math.round(b(a.g, l.g, r)),
                        i = Math.round(b(a.b, l.b, r));
                    return `rgb(${n}, ${s}, ${i})`
                },
                k = function(e, t) {
                    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100,
                        a = `${e}-${t}-${r}`,
                        l = p.get(a);
                    if (l) return l;
                    if ("undefined" == typeof document) return "";
                    let n = document.createElement("canvas");
                    n.width = 2 * r, n.height = 2 * r;
                    let s = n.getContext("2d");
                    if (!s) return "";
                    let i = 2 * r / 2,
                        o = 2 * r / 2,
                        c = 2 * r / 2;
                    for (let r = 0; r < 360; r++) {
                        let a = r / 360;
                        s.beginPath(), s.moveTo(i, o), s.arc(i, o, c, (r - .5) * Math.PI / 180, (r + .5) * Math.PI / 180), s.closePath(), s.fillStyle = E(e, t, a), s.fill()
                    }
                    let h = n.toDataURL("image/png", 1);
                    return p.set(a, h), h
                },
                w = e => {
                    let {
                        progress: t,
                        size: r,
                        variant: l = "green",
                        isInner: n = !1,
                        onStrong: s = !1,
                        gradientId: i,
                        svgProps: o = {},
                        overrideWorkaround: c = null
                    } = e, h = (0, a.useMemo)(() => null !== c ? c : u() || g, [c]), d = (0, a.useMemo)(() => h ? () => {
                        let e = m(n, r, 100),
                            c = Math.PI * (100 - e),
                            h = t >= 100,
                            d = t % 100,
                            u = h ? void 0 : `${c*d/100} ${c}`,
                            g = h ? d / 100 * 360 : -((100 - d) / 100 * 90),
                            p = `${i}-cap`,
                            f = {
                                start: "green" === l ? "#acf86c" : "#a7e3e3",
                                end: "green" === l ? "#4a9d44" : "#4893bf"
                            };
                        return a.createElement("svg", {
                            viewBox: "0 0 100 100",
                            ...o
                        }, a.createElement("defs", null, a.createElement("pattern", {
                            height: "100",
                            id: i,
                            patternUnits: "userSpaceOnUse",
                            width: "100",
                            x: "0",
                            y: "0"
                        }, a.createElement("image", {
                            height: "100",
                            href: k(f.start, f.end, 100),
                            preserveAspectRatio: "none",
                            transform: `rotate(${g} 50 50)`,
                            width: "100",
                            x: "0",
                            y: "0"
                        }))), a.createElement("circle", {
                            cx: 50,
                            cy: 50,
                            fill: "none",
                            r: 50 - e / 2,
                            stroke: s ? "var(--hrt-color-surface-unfilled-on-strong)" : "var(--hrt-color-surface-unfilled-subtle)",
                            strokeWidth: e
                        }), a.createElement("circle", {
                            cx: 50,
                            cy: 50,
                            fill: "none",
                            r: 50 - e / 2,
                            stroke: `url(#${i})`,
                            strokeDasharray: u,
                            strokeDashoffset: 0,
                            strokeLinecap: "butt",
                            strokeWidth: e,
                            transform: "rotate(-90 50 50)"
                        }), h && d > 0 && a.createElement("g", {
                            transform: `rotate(${d/100*360} 50 50)`
                        }, a.createElement("mask", {
                            height: "100",
                            id: p,
                            maskContentUnits: "userSpaceOnUse",
                            maskUnits: "userSpaceOnUse",
                            width: "100",
                            x: "0",
                            y: "0"
                        }, a.createElement("rect", {
                            fill: "black",
                            height: "100",
                            width: "100",
                            x: "0",
                            y: "0"
                        }), a.createElement("circle", {
                            cx: 50,
                            cy: 50,
                            fill: "white",
                            r: 50
                        }), a.createElement("circle", {
                            cx: 50,
                            cy: 50,
                            fill: "black",
                            r: 50 - e
                        })), a.createElement("g", {
                            transform: "translate(50 50)"
                        }, a.createElement("g", {
                            transform: `translate(0, -${50-e/2})`
                        }, a.createElement("circle", {
                            cx: 0,
                            cy: 0,
                            fill: f.end,
                            mask: `url(#${p})`,
                            r: e / 2
                        })))))
                    } : () => null, [h, t, r, l, n, s, i, o]);
                    return {
                        shouldUseWorkaround: h,
                        renderWorkaround: d
                    }
                },
                x = e => {
                    let {
                        progress: t,
                        size: r,
                        variant: l,
                        onStrong: s,
                        isInner: i = !1,
                        ...o
                    } = e, u = (0, a.useId)(), g = `hrt-clip-${u}`, p = `hrt-gradient-${u}`, f = t % 100, b = m(i, r, 100), E = Math.PI * (100 - b), k = (100 - f) / 100 * E, x = t >= 100, y = d(l), {
                        shouldUseWorkaround: $,
                        renderWorkaround: v
                    } = w({
                        progress: t,
                        size: r,
                        variant: l,
                        isInner: i,
                        onStrong: s,
                        gradientId: p,
                        svgProps: o
                    });
                    return $ ? v() : a.createElement("svg", {
                        viewBox: "0 0 100 100",
                        ...o
                    }, a.createElement("circle", {
                        cx: 50,
                        cy: 50,
                        fill: "none",
                        r: 50 - b / 2,
                        stroke: s ? "var(--hrt-color-surface-unfilled-on-strong)" : "var(--hrt-color-surface-unfilled-subtle)",
                        strokeWidth: b
                    }), a.createElement("defs", null, a.createElement("mask", {
                        id: g
                    }, a.createElement("rect", {
                        fill: "black",
                        height: "100",
                        width: "100",
                        x: "0",
                        y: "0"
                    }), a.createElement("circle", {
                        cx: 50,
                        cy: 50,
                        fill: "none",
                        r: 50 - b / 2,
                        stroke: "white",
                        strokeDasharray: E,
                        strokeDashoffset: k,
                        strokeWidth: b,
                        transform: "rotate(-90 50 50)"
                    }), a.createElement("circle", {
                        cx: 50,
                        cy: 50,
                        fill: "none",
                        opacity: x ? 1 : 0,
                        r: 50 - b / 2,
                        stroke: "white",
                        strokeDasharray: E,
                        strokeDashoffset: 0,
                        strokeWidth: b,
                        transform: "rotate(-90 50 50)"
                    }), a.createElement("g", null, a.createElement("g", {
                        opacity: f <= 0 || x ? 0 : 1
                    }, a.createElement("path", {
                        d: c({
                            direction: "start",
                            position: "top",
                            strokeWidth: b
                        }),
                        fill: "black",
                        stroke: "black",
                        strokeWidth: .3
                    }), a.createElement("path", {
                        d: c({
                            direction: "start",
                            position: "bottom",
                            strokeWidth: b
                        }),
                        fill: "black",
                        stroke: "black",
                        strokeWidth: .3
                    })), a.createElement("g", {
                        opacity: x ? 0 : 1,
                        transform: `rotate(${f/100*360} 50 50)`
                    }, a.createElement("path", {
                        d: c({
                            direction: "end",
                            position: "top",
                            strokeWidth: b
                        }),
                        fill: "black",
                        stroke: "black",
                        strokeWidth: .3
                    }), a.createElement("path", {
                        d: c({
                            direction: "end",
                            position: "bottom",
                            strokeWidth: b
                        }),
                        fill: "black",
                        stroke: "black",
                        strokeWidth: .3
                    }), a.createElement("path", {
                        d: h(b),
                        fill: "black"
                    }))))), a.createElement("foreignObject", {
                        height: "100",
                        mask: `url(#${g})`,
                        width: "100",
                        x: "0",
                        y: "0"
                    }, a.createElement("div", {
                        className: n()("hrt-progress-circle-gradient", `hrt-progress-circle-gradient--${l}`),
                        style: {
                            transform: x ? `rotate(${f/100*360}deg)` : `rotate(${-((100-f)/100*90)}deg)`
                        }
                    })), a.createElement("g", {
                        opacity: x ? 1 : 0,
                        transform: x ? `rotate(${f/100*360} 50 50)` : void 0
                    }, a.createElement("path", {
                        d: c({
                            direction: "end",
                            position: "top",
                            strokeWidth: b
                        }),
                        fill: y,
                        stroke: y,
                        strokeWidth: .3
                    }), a.createElement("path", {
                        d: c({
                            direction: "end",
                            position: "bottom",
                            strokeWidth: b
                        }),
                        fill: y,
                        stroke: y,
                        strokeWidth: .3
                    }), a.createElement("path", {
                        d: h(b),
                        fill: y
                    })))
                },
                y = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    if (t) switch (e) {
                        case "xlarge":
                            return {
                                width: 64,
                                height: 64,
                                padding: "4px"
                            };
                        case "large":
                            return {
                                width: 48,
                                height: 48,
                                padding: "4px"
                            };
                        default:
                            return {
                                width: 28,
                                height: 28,
                                padding: "2px"
                            }
                    } else switch (e) {
                        case "xlarge":
                            return {
                                width: 96,
                                height: 96,
                                padding: "4px"
                            };
                        case "large":
                            return {
                                width: 80,
                                height: 80,
                                padding: "4px"
                            };
                        case "medium":
                            return {
                                width: 48,
                                height: 48,
                                padding: "2px"
                            };
                        case "small":
                        default:
                            return {
                                width: 28,
                                height: 28,
                                padding: "2px"
                            };
                        case "xsmall":
                            return {
                                width: 16,
                                height: 16,
                                padding: "1px"
                            }
                    }
                },
                $ = (e, t, r) => t ? t.replace("{progress}", e.toString()) : `${r?"Outer":"Progress"}: ${e}%`,
                v = e => {
                    switch (e) {
                        case "xlarge":
                            return "8px";
                        case "large":
                            return "6px";
                        case "medium":
                            return "4px";
                        default:
                            return "0px"
                    }
                },
                M = e => {
                    let {
                        progress: t,
                        size: r,
                        variant: l,
                        raised: s,
                        onStrong: i,
                        animated: c = !1,
                        showPercentage: h = !0,
                        innerCircle: d,
                        image: m,
                        className: u,
                        "aria-label": g,
                        "aria-labelledby": p,
                        "aria-describedby": f,
                        outerProgressText: b,
                        innerProgressText: E,
                        isInner: k = !1,
                        ...w
                    } = e, N = Math.max(0, t > 100 ? 100 + t % 100 : t), P = Math.max(0, t), W = o(N, c), S = o(P, c), I = c ? W : N, D = n()(u, "hrt-progress-circle", `hrt-progress-circle--${r}`, {
                        "hrt-progress-circle--on-strong": i
                    }), O = n()("hrt-progress-circle-wrapper", {
                        "hrt-progress-circle-wrapper--raised": s
                    }), _ = g || $(P, b, !!d), C = null == u ? void 0 : u.includes("hrt-progress-circle-nested");
                    return a.createElement("div", {
                        className: O
                    }, a.createElement("div", {
                        className: D,
                        ...!C && {
                            role: "progressbar",
                            "aria-valuenow": P,
                            "aria-valuemin": 0,
                            "aria-valuemax": 100,
                            "aria-label": p ? void 0 : _,
                            "aria-labelledby": p,
                            "aria-describedby": f
                        },
                        ...w
                    }, a.createElement(x, {
                        "aria-hidden": "true",
                        className: "hrt-progress-circle-svg",
                        isInner: k,
                        onStrong: i,
                        progress: I <= 2 ? 2 : I,
                        size: r,
                        variant: l
                    }), a.createElement("div", {
                        className: "hrt-progress-circle-inner"
                    }, (() => {
                        if (m && d && ("small" === r || "xsmall" === r)) return a.createElement(a.Fragment, null, a.createElement(M, {
                            animated: c,
                            className: "hrt-progress-circle-nested",
                            isInner: !0,
                            progress: d.progress,
                            showPercentage: !1,
                            size: r,
                            variant: "blue"
                        }), a.createElement("span", {
                            className: "hrt-sr-only"
                        }, "Inner progress: ", d.progress, "%"));
                        if (m) {
                            let e = y(r);
                            return a.createElement("img", {
                                alt: m.alt,
                                className: "hrt-progress-circle-image",
                                height: e.height,
                                src: m.src,
                                style: {
                                    padding: e.padding
                                },
                                width: e.width
                            })
                        }
                        if (d) {
                            let e = d.image && ("medium" === r || "large" === r || "xlarge" === r);
                            return a.createElement(a.Fragment, null, a.createElement(M, {
                                animated: c,
                                className: "hrt-progress-circle-nested",
                                isInner: !0,
                                progress: d.progress,
                                showPercentage: !1,
                                size: r,
                                variant: "blue"
                            }), e && d.image && (() => {
                                let e = y(r, !0);
                                return a.createElement("img", {
                                    alt: d.image.alt,
                                    className: "hrt-progress-circle-inner-image",
                                    height: e.height,
                                    src: d.image.src,
                                    style: {
                                        padding: e.padding
                                    },
                                    width: e.width
                                })
                            })(), a.createElement("span", {
                                className: "hrt-sr-only"
                            }, E ? E.replace("{progress}", d.progress.toString()) : `Inner progress: ${d.progress}%`))
                        }
                        return h && "small" !== r && "xsmall" !== r ? a.createElement("div", {
                            style: {
                                marginLeft: v(r)
                            }
                        }, c ? Math.round(S) : P, a.createElement("sup", null, "%")) : C || m ? null : a.createElement("span", {
                            className: "hrt-sr-only"
                        }, P, "% complete")
                    })())))
                };
            M.displayName = "ProgressCircle"
        }
    }
]);
//# sourceMappingURL=50196-102d5bee5b3806f0.js.map