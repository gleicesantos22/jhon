(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [77496], {
        377496: function(e, r, t) {
            "use strict";
            t.d(r, {
                B: function() {
                    return c
                }
            });
            var a = t(552676),
                i = t(282187),
                o = t.n(i),
                n = t(363456),
                l = t(765419),
                s = t.n(l);
            let d = {
                green: {
                    stroke: "#02a95c",
                    stop: "#019953",
                    pulse: "#cef3bd"
                },
                yellow: {
                    stroke: "#f9db74",
                    stop: "#f7933f",
                    pulse: "#f9db74"
                },
                pink: {
                    stroke: "#971e54",
                    stop: "#742245",
                    pulse: "#971e54"
                }
            };

            function c(e) {
                let {
                    amountRaised: r,
                    color: t = "green",
                    goal: i,
                    id: l,
                    showText: c,
                    heightAndWidth: g = 80,
                    innerBgColor: _ = "#fff",
                    innerTextColor: k = "#6F6F6F",
                    svgStyles: f
                } = e, m = `${l}_line`, x = `${l}_bg_gradient`, b = `${l}_rotated_gradient`, p = `${l}_linear_gradient_stroke`, h = `${l}_rotated_gradient_stroke`, G = "#f4f2ec", S = d[t], u = S.stroke, R = S.stop, j = S.pulse, $ = 0 === r ? 0 : r >= i ? Math.round(r / i * 100) : Math.min(Math.max(Math.round(r / i * 100), 1), 99), y = 0 === r ? 1 : r <= i ? 226 * $ / 100 : 226 + Math.min(226, ($ - 100) * 226 / 100), P = y > 207 ? "210, 226" : `${y}, 226`, F = $ >= 100, w = $ <= 300 ? $ / 100 * 360 - 360 : (Math.floor($ % 100) + 200) / 100 * 360 - 360;
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)("style", {
                        children: `
                    @media (prefers-reduced-motion: no-preference) {
                        #${m} {animation: ${m}_s_da 1160ms linear normal forwards}
                        @keyframes ${m}_s_da { 
                            0% {stroke-dasharray: 0, 226; animation-timing-function: cubic-bezier(0.30, 0.01, 0.00, 1.00)} 
                            100% {stroke-dasharray: ${P}}
                        } 

                        #${x} {animation: ${x}_rotate 3667ms linear normal forwards}
                        @keyframes ${x}_rotate { 
                            0% {transform: translate(500px,500px) rotate(0deg)} 
                            22.716117% {transform: translate(500px,500px) rotate(0deg);animation-timing-function: cubic-bezier(0.3,0.01,0,1)} 
                            63.621489% {transform: translate(500px,500px) rotate(${w}deg)} 
                            100% {transform: translate(500px,500px) rotate(${w}deg)} 
                        } 

                        #${b} {animation: ${b}__tr 3667ms linear normal forwards}
                        @keyframes ${b}__tr { 
                            0% {transform: translate(500px,500px) rotate(0deg)} 
                            22.716117% {transform: translate(500px,500px) rotate(0deg);animation-timing-function: cubic-bezier(0.3,0.01,0,1)} 
                            63.621489% {transform: translate(500px,500px) rotate(${w}deg)} 
                            100% {transform: translate(500px,500px) rotate(${w}deg)} 
                        } 
                    }
                    @media (prefers-reduced-motion: reduce) {
                        #${m} {animation: ${m}_s_da 0s linear normal forwards}
                        @keyframes ${m}_s_da { 
                            0% {stroke-dasharray: 0, 226; animation-timing-function: cubic-bezier(0.30, 0.01, 0.00, 1.00)} 
                            100% {stroke-dasharray: ${P}}
                        } 

                        #${x} {animation: ${x}_rotate 0s linear normal forwards}
                        @keyframes ${x}_rotate { 
                            0% {transform: translate(500px,500px) rotate(0deg)} 
                            22.716117% {transform: translate(500px,500px) rotate(0deg);animation-timing-function: cubic-bezier(0.3,0.01,0,1)} 
                            63.621489% {transform: translate(500px,500px) rotate(${w}deg)} 
                            100% {transform: translate(500px,500px) rotate(${w}deg)} 
                        } 

                        #${b} {animation: ${b}__tr 0s linear normal forwards}
                        @keyframes ${b}__tr { 
                            0% {transform: translate(500px,500px) rotate(0deg)} 
                            22.716117% {transform: translate(500px,500px) rotate(0deg);animation-timing-function: cubic-bezier(0.3,0.01,0,1)} 
                            63.621489% {transform: translate(500px,500px) rotate(${w}deg)} 
                            100% {transform: translate(500px,500px) rotate(${w}deg)} 
                        } 
                    }
                `
                    }), (0, a.jsxs)("svg", {
                        height: g,
                        role: "img",
                        shapeRendering: "geometricPrecision",
                        style: {
                            backgroundColor: "transparent",
                            ...f
                        },
                        textRendering: "geometricPrecision",
                        viewBox: F ? "230 230 540 540" : "-40 -40 80 80",
                        width: g,
                        children: [(0, a.jsx)("title", {
                            children: (0, n.t)("{{roundedPercentage}} percent of goal raised", {
                                roundedPercentage: $
                            })
                        }), F ? (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsxs)("defs", {
                                children: [(0, a.jsxs)("linearGradient", {
                                    gradientTransform: "matrix(-181.878482 453.229443 -453.229443 -181.878482 44.736239 -242.529089)",
                                    gradientUnits: "userSpaceOnUse",
                                    id: p,
                                    spreadMethod: "pad",
                                    x1: "0",
                                    x2: "1",
                                    y1: "0",
                                    y2: "0",
                                    children: [(0, a.jsx)("stop", {
                                        className: o()(s().bgGradientStroke0, {
                                            [s()[t]]: "green" !== t
                                        }),
                                        offset: "0%",
                                        stopColor: R
                                    }), (0, a.jsx)("stop", {
                                        className: o()(s().bgGradientStroke1, {
                                            [s()[t]]: "green" !== t
                                        }),
                                        offset: "50%",
                                        stopColor: R
                                    }), (0, a.jsx)("stop", {
                                        className: o()(s().bgGradientStroke2, {
                                            [s()[t]]: "green" !== t
                                        }),
                                        offset: "100%",
                                        stopColor: R
                                    })]
                                }), (0, a.jsxs)("linearGradient", {
                                    gradientTransform: "matrix(91.477002 482.312 -482.312 91.477002 33.523 -232.312)",
                                    gradientUnits: "userSpaceOnUse",
                                    id: h,
                                    spreadMethod: "pad",
                                    x1: "0",
                                    x2: "1",
                                    y1: "0",
                                    y2: "0",
                                    children: [(0, a.jsx)("stop", {
                                        className: o()(s().gradientRotatedStroke0, {
                                            [s()[t]]: "green" !== t
                                        }),
                                        offset: "0%",
                                        stopColor: R
                                    }), (0, a.jsx)("stop", {
                                        className: o()(s().gradientRotatedStroke1, {
                                            [s()[t]]: "green" !== t
                                        }),
                                        offset: "50%",
                                        stopColor: R
                                    }), (0, a.jsx)("stop", {
                                        className: o()(s().gradientRotatedStroke2, {
                                            [s()[t]]: "green" !== t
                                        }),
                                        offset: "100%",
                                        stopColor: R
                                    })]
                                })]
                            }), (0, a.jsxs)("g", {
                                children: [(0, a.jsx)("g", {
                                    className: s().firstCircle,
                                    transform: "translate(500,500) scale(0,0)",
                                    children: (0, a.jsx)("ellipse", {
                                        fill: j,
                                        rx: "251.153954",
                                        ry: "251.153954",
                                        strokeWidth: "0",
                                        transform: "translate(0,0)"
                                    })
                                }), (0, a.jsx)("g", {
                                    className: s().secondCircle,
                                    transform: "translate(500,500) scale(0,0)",
                                    children: (0, a.jsx)("ellipse", {
                                        fill: _,
                                        rx: "251.153954",
                                        ry: "251.153954",
                                        strokeWidth: "0",
                                        transform: "translate(0,0)"
                                    })
                                })]
                            }), (0, a.jsx)("g", {
                                transform: "matrix(.957 0 0 0.957 500 500)",
                                children: (0, a.jsx)("path", {
                                    d: "M0,-250c-138.071,0-250,111.929-250,250s111.928,250,250,250s250-111.929,250-250-111.929-250-250-250-250,111.929-250,250",
                                    fill: "none",
                                    fillRule: "evenodd",
                                    paintOrder: "stroke fill markers",
                                    stroke: G,
                                    strokeMiterlimit: "10",
                                    strokeWidth: "60"
                                })
                            }), (0, a.jsx)("g", {
                                id: x,
                                transform: "translate(500,500) rotate(0)",
                                children: (0, a.jsx)("g", {
                                    transform: "scale(0.957,0.957) translate(0,0)",
                                    children: (0, a.jsx)("path", {
                                        className: s().bgGradientPath,
                                        d: "M-250,0c0-138.071,111.929-250,250-250s250,111.929,250,250-111.928,250-250,250-250-111.929-250-250s111.929-250,250-250",
                                        fill: "none",
                                        fillRule: "evenodd",
                                        paintOrder: "stroke fill markers",
                                        stroke: `url(#${p})`,
                                        strokeDasharray: "0,0,0,1963.78",
                                        strokeDashoffset: "-381.844342",
                                        strokeLinecap: "round",
                                        strokeWidth: "60"
                                    })
                                })
                            }), (0, a.jsx)("g", {
                                id: b,
                                transform: "translate(500,500) rotate(0)",
                                children: (0, a.jsx)("g", {
                                    transform: "scale(0.957,0.957) translate(0,0)",
                                    children: (0, a.jsx)("g", {
                                        className: s().gradientRotatedG,
                                        opacity: "0",
                                        transform: "translate(-125 0)",
                                        children: (0, a.jsx)("path", {
                                            className: s().gradientRotatedPathB,
                                            d: "M125,-250c-138.071,0-250,111.928-250,250s111.929,250,250,250",
                                            fill: "none",
                                            fillRule: "evenodd",
                                            paintOrder: "stroke fill markers",
                                            stroke: `url(#${h})`,
                                            strokeDasharray: "0,785.51,0,0",
                                            strokeLinecap: "round",
                                            strokeWidth: "60"
                                        })
                                    })
                                })
                            })]
                        }) : (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)("g", {
                                children: (0, a.jsx)("path", {
                                    d: "M 0 -36 A 36 36 0 1 1 0 36 A 36 36 0 1 1 0 -36",
                                    fill: "none",
                                    stroke: G,
                                    strokeWidth: "8"
                                })
                            }), (0, a.jsx)("g", {
                                children: (0, a.jsx)("path", {
                                    d: "M 0 -36 A 36 36 0 1 1 0 36 A 36 36 0 1 1 0 -36",
                                    fill: "none",
                                    id: m,
                                    stroke: u,
                                    strokeLinecap: "round",
                                    strokeWidth: "8",
                                    style: {
                                        transition: "stroke-dasharray 1160ms ease-out"
                                    }
                                })
                            })]
                        }), c && (0, a.jsx)("text", {
                            alignmentBaseline: "middle",
                            className: o()(s().text, {
                                [s().gradientText]: F
                            }),
                            dominantBaseline: "middle",
                            fill: k,
                            textAnchor: "middle",
                            x: F ? 500 : 1,
                            y: F ? 510 : 1,
                            children: $ > 9e3 ? ">9000%" : `${$}%`
                        })]
                    })]
                })
            }
        },
        765419: function(e) {
            e.exports = {
                firstCircle: "circle-goal-bar_firstCircle__yscts",
                firstPulsate: "circle-goal-bar_firstPulsate__3zAtn",
                secondCircle: "circle-goal-bar_secondCircle__jAlUt",
                secondPulsate: "circle-goal-bar_secondPulsate__BDFoX",
                bgGradientStroke0: "circle-goal-bar_bgGradientStroke0__LeaYg",
                bgGradientStroke0Fill: "circle-goal-bar_bgGradientStroke0Fill__oKRaV",
                yellow: "circle-goal-bar_yellow__Ze_pF",
                bgGradientStroke0FillYellow: "circle-goal-bar_bgGradientStroke0FillYellow__3VETW",
                pink: "circle-goal-bar_pink__OrgJx",
                bgGradientStroke0FillPink: "circle-goal-bar_bgGradientStroke0FillPink__MxCnu",
                bgGradientStroke1: "circle-goal-bar_bgGradientStroke1__NYTPQ",
                bgGradientStroke1Fill: "circle-goal-bar_bgGradientStroke1Fill___p3Ix",
                bgGradientStroke1FillYellow: "circle-goal-bar_bgGradientStroke1FillYellow__7iQ54",
                bgGradientStroke1FillPink: "circle-goal-bar_bgGradientStroke1FillPink__6FdfX",
                bgGradientStroke2: "circle-goal-bar_bgGradientStroke2__uGGif",
                bgGradientStroke2Fill: "circle-goal-bar_bgGradientStroke2Fill__V1Yyf",
                bgGradientStroke2FillYellow: "circle-goal-bar_bgGradientStroke2FillYellow__74HTU",
                bgGradientStroke2FillPink: "circle-goal-bar_bgGradientStroke2FillPink__3w9PB",
                bgGradientPath: "circle-goal-bar_bgGradientPath__fCxmC",
                bgGradientPathStroke: "circle-goal-bar_bgGradientPathStroke__DC2Gv",
                gradientRotatedG: "circle-goal-bar_gradientRotatedG__hnkcS",
                gradientRotatedGOpacity: "circle-goal-bar_gradientRotatedGOpacity__6v5SJ",
                gradientRotatedPathB: "circle-goal-bar_gradientRotatedPathB__FPj24",
                gradientRotatedPathBDashArray: "circle-goal-bar_gradientRotatedPathBDashArray__YtnSg",
                gradientRotatedStroke0: "circle-goal-bar_gradientRotatedStroke0__mW7Es",
                gradientRotatedStroke0Gradient: "circle-goal-bar_gradientRotatedStroke0Gradient__AzWx_",
                gradientRotatedStroke0GradientYellow: "circle-goal-bar_gradientRotatedStroke0GradientYellow__mewLm",
                gradientRotatedStroke0GradientPink: "circle-goal-bar_gradientRotatedStroke0GradientPink__scVzi",
                gradientRotatedStroke1: "circle-goal-bar_gradientRotatedStroke1__5M0jH",
                gradientRotatedStroke1Gradient: "circle-goal-bar_gradientRotatedStroke1Gradient__F_x1W",
                gradientRotatedStroke1GradientYellow: "circle-goal-bar_gradientRotatedStroke1GradientYellow__CKYG6",
                gradientRotatedStroke1GradientPink: "circle-goal-bar_gradientRotatedStroke1GradientPink__v2_TG",
                gradientRotatedStroke2: "circle-goal-bar_gradientRotatedStroke2__qPj3N",
                gradientRotatedStroke2Gradient: "circle-goal-bar_gradientRotatedStroke2Gradient___nYAd",
                gradientRotatedStroke2GradientYellow: "circle-goal-bar_gradientRotatedStroke2GradientYellow__MRF_p",
                gradientRotatedStroke2GradientPink: "circle-goal-bar_gradientRotatedStroke2GradientPink__9EbMs",
                text: "circle-goal-bar_text__kksyP",
                "text-fade-in": "circle-goal-bar_text-fade-in__gVVLV",
                gradientText: "circle-goal-bar_gradientText__O1MjR"
            }
        }
    }
]);
//# sourceMappingURL=77496-a73f09da0990c455.js.map