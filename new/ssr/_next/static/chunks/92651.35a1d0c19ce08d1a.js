(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [92651], {
        194119: function(e, t, a) {
            "use strict";
            a.d(t, {
                b: function() {
                    return l
                }
            });
            var n = a(275271),
                r = a(282187),
                s = a.n(r);

            function l(e) {
                let {
                    background: t,
                    children: a,
                    className: r,
                    dataViewId: l,
                    isAnimating: i,
                    isOpen: o,
                    sandOverlay: c
                } = e, d = s()(r, "a-overlay", {
                    "a-overlay--animating": i,
                    "a-overlay--open": o,
                    "a-overlay--bg-sand": c || "sand" === t,
                    "a-overlay--bg-gray": "gray" === t
                });
                return n.createElement("div", {
                    className: d,
                    "data-view-id": l
                }, a)
            }
            l.displayName = "Overlay"
        },
        773058: function(e, t, a) {
            "use strict";
            a.d(t, {
                G: function() {
                    return l
                }
            });
            var n = a(275271),
                r = a(282187),
                s = a.n(r);

            function l(e) {
                let {
                    className: t
                } = e, a = s()(t, "a-play-button-icon");
                return n.createElement("svg", {
                    className: a,
                    height: "5em",
                    viewBox: "0 0 80 80",
                    width: "5em",
                    xmlns: "http://www.w3.org/2000/svg"
                }, n.createElement("linearGradient", {
                    id: "a",
                    x1: "82.852%",
                    x2: "21.46%",
                    y1: "13.623%",
                    y2: "88.32%"
                }, n.createElement("stop", {
                    offset: "0",
                    stopOpacity: "0"
                }), n.createElement("stop", {
                    offset: ".50536",
                    stopOpacity: ".15"
                }), n.createElement("stop", {
                    offset: "1",
                    stopOpacity: ".3"
                })), n.createElement("g", {
                    fill: "none",
                    transform: "translate(1 1)"
                }, n.createElement("circle", {
                    cx: "39",
                    cy: "39",
                    fill: "url(#a)",
                    r: "39",
                    stroke: "#fff",
                    strokeWidth: "2"
                }), n.createElement("g", {
                    transform: "translate(31 23)"
                }, n.createElement("path", {
                    d: "m21.7025354 16.1237742-19.3577033 13.7541576c-.4502117.3198872-1.0745002.2142384-1.3943875-.2359733-.1202269-.1692082-.1848196-.3716356-.1848196-.5792071v-27.5083153c0-.5522847.4477153-1 1-1 .2075715 0 .4099989.0645927.5792071.1848196l19.3577033 13.7541576c.4502118.3198873.5558606.9441759.2359733 1.3943876-.0648851.0913198-.1446534.1710881-.2359733.2359733z",
                    fill: "#000"
                }), n.createElement("path", {
                    d: "m21.7025354 16.1237742-19.3577033 13.7541576c-.4502117.3198872-1.0745002.2142384-1.3943875-.2359733-.1202269-.1692082-.1848196-.3716356-.1848196-.5792071v-27.5083153c0-.5522847.4477153-1 1-1 .2075715 0 .4099989.0645927.5792071.1848196l19.3577033 13.7541576c.4502118.3198873.5558606.9441759.2359733 1.3943876-.0648851.0913198-.1446534.1710881-.2359733.2359733z",
                    fill: "#fff"
                }))))
            }
        },
        238917: function(e, t, a) {
            "use strict";
            a.d(t, {
                y: function() {
                    return m
                }
            });
            var n = a(275271),
                r = a(282187),
                s = a.n(r),
                l = a(312802),
                i = a(524430),
                o = a(287808);
            let c = function(e, t) {
                let a = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
                if (e.length <= t) return e;
                let n = e.substring(0, t);
                if (a) {
                    let e = n.lastIndexOf(" ");
                    if (e > 0) {
                        let t = Math.min(n.length, e);
                        return n.substr(0, t)
                    }
                }
                return n
            };

            function d(e) {
                let {
                    asHtml: t = !0,
                    children: a,
                    maxChars: r,
                    trailing: s = n.createElement("span", null, "…")
                } = e, l = r && r < a.length ? s : void 0, i = r ? c(a, r) : a;
                return n.createElement(n.Fragment, null, t ? n.createElement("span", {
                    dangerouslySetInnerHTML: {
                        __html: i
                    }
                }) : n.createElement("span", null, i), l)
            }
            d.displayName = "Truncate";
            let m = e => {
                let {
                    asHtml: t = !0,
                    children: a,
                    className: r,
                    closeText: c,
                    collapseIconName: m,
                    dataElementId: u,
                    expandButtonText: h,
                    maxChars: g,
                    maxCharsDesktop: _,
                    onClick: p,
                    initialExpanded: f
                } = e, x = s()("m-read-more", r), [y, I] = (0, n.useState)(f), [N, v] = (0, n.useState)(g), [b, j] = (0, n.useState)(_), w = e => {
                    I(!y), v(y ? g : void 0), j(_ && y ? _ : void 0), p && p(e)
                };

                function C(e) {
                    return n.createElement(n.Fragment, null, n.createElement(d, {
                        asHtml: t,
                        maxChars: y ? void 0 : e
                    }, a), !y && !!e && e < a.length && n.createElement(l.A, {
                        className: "m-readmore-text",
                        "data-element-id": u,
                        onClick: w
                    }, h))
                }
                return (0, n.useEffect)(() => {
                    f ? (I(!0), v(void 0), j(void 0)) : (I(!1), v(g), j(_))
                }, [f]), n.createElement("div", {
                    className: x
                }, m && y ? n.createElement(i.Y, {
                    as: "button",
                    className: "m-readmore-collapse-button",
                    onClick: w
                }, n.createElement(o.J, {
                    "aria-label": c,
                    className: "m-readmore-collapse-icon",
                    name: m,
                    size: "large"
                })) : void 0, !_ && C(N), _ && n.createElement(n.Fragment, null, n.createElement("span", {
                    className: "hrt-hide-min-lg"
                }, C(N)), n.createElement("span", {
                    className: "hrt-hide-max-lg"
                }, C(b))))
            };
            m.displayName = "ReadMore"
        },
        820422: function(e, t, a) {
            "use strict";
            a.d(t, {
                b: function() {
                    return n.b
                },
                h: function() {
                    return r.h
                }
            });
            var n = a(194119),
                r = a(781998)
        },
        299126: function(e, t, a) {
            "use strict";
            a.d(t, {
                U: function() {
                    return V
                },
                k: function() {
                    return r
                }
            });
            var n, r, s = a(552676),
                l = a(920647),
                i = a(534058),
                o = a(252440),
                c = a(77655),
                d = a(275271),
                m = a(282187),
                u = a.n(m),
                h = a(153280),
                g = a(820422),
                _ = a(464820),
                p = a(893269),
                f = a(783955),
                x = a(906468),
                y = a(991280),
                I = a(612069),
                N = a(170110),
                v = a(253765),
                b = a(287808),
                j = a(238917),
                w = a(758655),
                C = a(842838),
                E = a(570490),
                O = a(185673),
                T = a(637469),
                S = a(363456),
                A = a(67179),
                R = a.n(A),
                k = function(e) {
                    let [t, a] = (0, d.useState)(!1), {
                        author: n,
                        className: r,
                        currentIndex: l,
                        donationAmount: i,
                        media: o,
                        onNextImage: c,
                        onPrevImage: m,
                        text: h,
                        timeCreated: g,
                        totalCount: _
                    } = e, p = u()(r, R().galleryContent);
                    (0, d.useEffect)(() => {
                        a(!1)
                    }, [o]);
                    let f = u()(R().info, {
                            [R().isOpen]: t
                        }),
                        A = u()("hrt-hide-max-lg", R().arrow, {
                            "hrt-disp-none": _ <= 1
                        });
                    return (0, s.jsxs)("div", {
                        className: p,
                        children: [(0, s.jsx)(w.j, {
                            as: "button",
                            buttonLabel: (0, S.t)("Previous image"),
                            className: `${A} ${R().arrowLeft}`,
                            "data-element-id": "btn_content_media_viewer_scroll",
                            onClick: m,
                            size: "medium",
                            children: (0, s.jsx)(b.J, {
                                name: "arrow-left",
                                size: "default"
                            })
                        }), (0, s.jsxs)(E.o, {
                            className: R().inner,
                            onSwipeLeftToRight: m,
                            onSwipeRightToLeft: c,
                            children: [(0, s.jsx)("div", {
                                className: R().image,
                                children: (() => {
                                    if (o.mediaId && (o.mediaType === T.DDH.YOUTUBE || o.mediaType === T.DDH.VIMEO)) {
                                        let e = (0, x.uR)(o.mediaType);
                                        return (0, s.jsx)(C.n, {
                                            mediaId: o.mediaId,
                                            mediaType: e
                                        })
                                    }
                                    return (0, s.jsx)("img", {
                                        alt: (0, S.t)("Fundraiser update image"),
                                        className: R().imageInner,
                                        "data-chromatic": "ignore",
                                        src: o.image.url
                                    })
                                })()
                            }), (0, s.jsxs)("div", {
                                className: f,
                                children: [(0, s.jsxs)(I.b, {
                                    className: u()(`${R().author} hrt-hide-max-lg`, {
                                        [R().isOpenAuthor]: t
                                    }),
                                    children: [(0, s.jsx)(v.s, {
                                        children: (0, s.jsx)(y.q, { ...n.profileImage ? {
                                                kind: "image",
                                                src: n.profileImage
                                            } : {
                                                kind: "donor"
                                            }
                                        })
                                    }), (0, s.jsxs)(N.y, {
                                        children: [(0, s.jsx)(O.v, {
                                            name: n.fullName
                                        }), (0, s.jsxs)("div", {
                                            className: "hrt-text-body-sm",
                                            children: [i ? (0, S.t)("Donated {{amount}}", {
                                                amount: i
                                            }) : n.role, (i || n.role) && g ? (0, s.jsx)("span", {
                                                className: "dot-sep",
                                                children: "•"
                                            }) : void 0, g]
                                        })]
                                    })]
                                }), (0, s.jsx)("div", {
                                    className: R().text,
                                    children: h ? (0, s.jsx)(j.y, {
                                        closeText: (0, S.t)("Show less"),
                                        collapseIconName: "minus",
                                        expandButtonText: (0, S.t)("Show more"),
                                        initialExpanded: t,
                                        maxChars: 75,
                                        maxCharsDesktop: 190,
                                        onClick: () => {
                                            a(!t)
                                        },
                                        children: h
                                    }) : (0, s.jsx)("div", {
                                        className: "hrt-hide-min-lg",
                                        children: g
                                    })
                                }), (0, s.jsxs)("span", {
                                    className: `${R().index} hrt-hide-max-lg hrt-text-body-sm`,
                                    children: [l + 1, "/", _]
                                })]
                            })]
                        }), (0, s.jsx)(w.j, {
                            as: "button",
                            buttonLabel: (0, S.t)("Next image"),
                            className: `${A} ${R().arrowRight}`,
                            "data-element-id": "btn_content_media_viewer_scroll",
                            onClick: c,
                            size: "medium",
                            children: (0, s.jsx)(b.J, {
                                name: "arrow-right",
                                size: "default"
                            })
                        })]
                    })
                },
                D = a(524430),
                P = a(773058),
                B = a(163482),
                M = a.n(B),
                L = function(e) {
                    let {
                        carouselTransform: t,
                        className: a,
                        currentIndex: n,
                        forwardedRef: r,
                        groupIndex: l,
                        images: i,
                        onNextImage: o,
                        onNextImageSet: c,
                        onPrevImage: d,
                        onPrevImageSet: m,
                        onShowImage: h
                    } = e, g = i.length, p = u()(a, M().galleryFooter), f = u()(M().carousel, "hrt-hide-max-lg", {
                        "hrt-disp-none": g <= 1,
                        "m-gallery-carousel-overflow": g > _.mV
                    }), x = u()({
                        "hrt-disp-none": g <= 1
                    });
                    return (0, s.jsxs)("div", {
                        className: p,
                        "data-testid": "gallery-footer",
                        children: [(0, s.jsxs)("div", {
                            className: `${M().nav} hrt-hide-min-lg`,
                            children: [(0, s.jsx)(w.j, {
                                as: "button",
                                buttonLabel: (0, S.t)("Previous image"),
                                className: x,
                                "data-element-id": "btn_content_media_viewer_scroll",
                                onClick: d,
                                size: "large",
                                children: (0, s.jsx)(b.J, {
                                    name: "arrow-left",
                                    size: "default"
                                })
                            }), (0, s.jsxs)("span", {
                                className: `${M().index} hrt-font-bold`,
                                "data-testid": "gallery-footer-index",
                                children: [n + 1, "/", g]
                            }), (0, s.jsx)(w.j, {
                                as: "button",
                                buttonLabel: (0, S.t)("Next image"),
                                className: x,
                                "data-element-id": "btn_content_media_viewer_scroll",
                                onClick: o,
                                size: "large",
                                children: (0, s.jsx)(b.J, {
                                    name: "arrow-right",
                                    size: "default"
                                })
                            })]
                        }), (0, s.jsxs)("div", {
                            className: f,
                            children: [(0, s.jsx)("ol", {
                                className: `${M().carouselSlide} hrt-list-unstyled`,
                                ref: r,
                                style: {
                                    transform: `translateX(${t}px)`
                                },
                                children: i.map((e, t) => {
                                    let a = e.mediaType === T.DDH.VIMEO || e.mediaType === T.DDH.YOUTUBE ? "video" : "photo",
                                        r = u()(M().carouselItem, {
                                            [M().isActive]: n === t
                                        });
                                    return (0, s.jsx)("li", {
                                        className: r,
                                        children: (0, s.jsxs)(D.Y, {
                                            "aria-label": (0, S.t)("Image {{i}} of {{t}}", {
                                                i: t + 1,
                                                t: g
                                            }),
                                            as: "button",
                                            className: M().carouselItemButton,
                                            "data-element-id": "btn_content_media_viewer_scroll",
                                            onClick: () => h(t),
                                            tabIndex: (() => {
                                                let e = l + _.mV;
                                                return t >= l && t <= e ? 0 : -1
                                            })(),
                                            children: [(0, s.jsx)("img", {
                                                alt: (0, S.t)("Fundraiser image"),
                                                className: M().image,
                                                src: e.scaled ? .threeByTwo640 ? ? ""
                                            }), "video" === a && (0, s.jsx)(P.G, {
                                                className: M().carouselPlayButton
                                            })]
                                        })
                                    }, t)
                                })
                            }), g > _.mV && (0, s.jsxs)("div", {
                                className: `${M().carouselArrows} hrt-hide-max-lg`,
                                children: [(0, s.jsx)(w.j, {
                                    as: "button",
                                    buttonLabel: (0, S.t)("Previous 10 images"),
                                    "data-element-id": "btn_content_media_viewer_scroll",
                                    onClick: m,
                                    size: "large",
                                    children: (0, s.jsx)(b.J, {
                                        name: "arrow-left",
                                        size: "default"
                                    })
                                }), (0, s.jsx)(w.j, {
                                    as: "button",
                                    buttonLabel: (0, S.t)("Next 10 images"),
                                    className: "hrt-ml-2",
                                    "data-element-id": "btn_content_media_viewer_scroll",
                                    onClick: c,
                                    size: "large",
                                    children: (0, s.jsx)(b.J, {
                                        name: "arrow-right",
                                        size: "default"
                                    })
                                })]
                            })]
                        })]
                    })
                },
                G = a(273183),
                H = a.n(G);

            function $(e) {
                let {
                    author: t,
                    className: a,
                    donationAmount: n,
                    handleClose: r
                } = e, l = u()(a, H().galleryHeader);
                return (0, s.jsxs)("div", {
                    className: l,
                    children: [(0, s.jsx)(w.j, {
                        as: "button",
                        buttonLabel: (0, S.t)("Close image gallery"),
                        className: `${H().close} hrt-text-on-strong`,
                        "data-autofocus": !0,
                        onClick: r,
                        size: "large",
                        children: (0, s.jsx)(b.J, {
                            name: "close",
                            size: "default"
                        })
                    }), (0, s.jsxs)(I.b, {
                        className: `${H().author} hrt-hide-min-lg hrt-disp-flex hrt-align-center`,
                        children: [(0, s.jsx)(v.s, {
                            children: (0, s.jsx)(y.q, { ...t.profileImage ? {
                                    kind: "image",
                                    src: t.profileImage
                                } : {
                                    kind: "donor"
                                }
                            })
                        }), (0, s.jsxs)(N.y, {
                            children: [(0, s.jsx)(O.v, {
                                className: "hrt-disp-inline",
                                name: t.fullName
                            }), n && (0, s.jsxs)("span", {
                                children: [", ", (0, S.t)("Donated {{amount}}", {
                                    amount: n
                                })]
                            }), !n && t.role && (0, s.jsxs)("span", {
                                children: [", ", t.role]
                            })]
                        })]
                    })]
                })
            }
            var z = a(581492),
                F = a.n(z);
            class U extends d.Component {
                constructor(e) {
                    super(e), this.forwardedRef = d.createRef(), this.handleOnChange = e => {
                        let {
                            onChange: t
                        } = this.props;
                        t && t(e, this.totalNumberOfImages())
                    }, this.onNextImage = () => {
                        let e = this.totalNumberOfImages();
                        e > 1 && (this.props.currentIndex < e - 1 ? this.props.currentIndex >= this.state.currentGroupIndex + _.mV - 1 ? this.onNextImageSet() : this.handleOnChange(this.props.currentIndex + 1) : this.wrapAroundToFirstImage())
                    }, this.onPrevImage = () => {
                        this.totalNumberOfImages() > 1 && (this.props.currentIndex > 0 ? this.props.currentIndex === this.state.currentGroupIndex ? this.onPrevImageSet() : this.handleOnChange(this.props.currentIndex - 1) : this.wrapAroundToLastImage())
                    }, this.onNextImageSet = () => {
                        if (this.state.currentGroupIndex < this.totalNumberOfImages() - _.mV) {
                            let e = this.state.carouselTransform - this.singleCarouselSectionWidth(),
                                t = this.state.currentGroupIndex + _.mV;
                            this.setState(() => ({
                                carouselTransform: e,
                                currentGroupIndex: t
                            }), () => this.handleOnChange(t))
                        } else this.wrapAroundToFirstImage()
                    }, this.onPrevImageSet = () => {
                        if (this.state.currentGroupIndex > 0) {
                            let e = this.state.carouselTransform + this.singleCarouselSectionWidth(),
                                t = this.state.currentGroupIndex - _.mV,
                                a = this.state.currentGroupIndex - 1;
                            this.setState(() => ({
                                carouselTransform: e,
                                currentGroupIndex: t
                            }), () => this.handleOnChange(a))
                        } else this.wrapAroundToLastImage()
                    }, this.onShowImage = e => {
                        e >= this.state.currentGroupIndex + _.mV ? this.onNextImageSet() : this.handleOnChange(e)
                    }, this.wrapAroundToFirstImage = () => {
                        this.setState(() => ({
                            carouselTransform: 0,
                            currentGroupIndex: 0
                        }), () => this.handleOnChange(0))
                    }, this.wrapAroundToLastImage = () => {
                        let e = Math.ceil(this.totalNumberOfImages() / _.mV),
                            t = -1 * (e - 1) * this.singleCarouselSectionWidth(),
                            a = (e - 1) * _.mV,
                            n = this.totalNumberOfImages() - 1;
                        this.setState(() => ({
                            carouselTransform: t,
                            currentGroupIndex: a
                        }), () => this.handleOnChange(n))
                    }, this.state = {
                        carouselTransform: 0,
                        currentGroupIndex: 0
                    }, this.handleKeyDown = this.handleKeyDown.bind(this), this.handleClose = this.handleClose.bind(this)
                }
                handleClose() {
                    this.props.onClose()
                }
                handleKeyDown(e) {
                    e.key === p.R8.ARROW_RIGHT ? (f.mt.push({
                        elementId: "btn_content_media_viewer_scroll",
                        type: "click",
                        viewId: "lb_content_media"
                    }), this.onNextImage()) : e.key === p.R8.ARROW_LEFT && (f.mt.push({
                        elementId: "btn_content_media_viewer_scroll",
                        type: "click",
                        viewId: "lb_content_media"
                    }), this.onPrevImage())
                }
                render() {
                    let {
                        isOpen: e,
                        className: t,
                        currentIndex: a,
                        items: n
                    } = this.props, r = u()(F().gallery, t), l = n.map(e => e.media.image), i = n[a];
                    return n.length > 0 && void 0 !== i && (0, s.jsx)(g.h, {
                        elementId: "portal",
                        children: (0, s.jsx)(g.b, {
                            isAnimating: !1,
                            isOpen: e,
                            children: (0, s.jsx)("div", {
                                className: r,
                                "data-view-id": "lb_content_media",
                                onKeyDown: this.handleKeyDown,
                                tabIndex: 0,
                                children: (0, s.jsx)(h.Y, {
                                    onClickOutside: this.handleClose,
                                    onEscapeKey: this.handleClose,
                                    children: (0, s.jsxs)("div", {
                                        className: F().inner,
                                        children: [(0, s.jsx)($, {
                                            author: i.author,
                                            donationAmount: i.donationAmount,
                                            handleClose: this.handleClose
                                        }), (0, s.jsx)(k, {
                                            author: i.author,
                                            currentIndex: a,
                                            donationAmount: i.donationAmount,
                                            media: i.media,
                                            onNextImage: this.onNextImage,
                                            onPrevImage: this.onPrevImage,
                                            text: i.text,
                                            timeCreated: i.timeCreated,
                                            totalCount: n.length
                                        }), (0, s.jsx)(L, {
                                            carouselTransform: this.state.carouselTransform,
                                            currentIndex: a,
                                            forwardedRef: this.forwardedRef,
                                            groupIndex: this.state.currentGroupIndex,
                                            images: l,
                                            onNextImage: this.onNextImage,
                                            onNextImageSet: this.onNextImageSet,
                                            onPrevImage: this.onPrevImage,
                                            onPrevImageSet: this.onPrevImageSet,
                                            onShowImage: this.onShowImage
                                        })]
                                    })
                                })
                            })
                        })
                    })
                }
                totalNumberOfImages() {
                    return this.props.items.length
                }
                singleCarouselSectionWidth() {
                    let e = Math.floor(((null !== this.forwardedRef.current ? this.forwardedRef.current.clientWidth : 0) + 8) / this.totalNumberOfImages());
                    return _.mV * e
                }
            }
            var Y = a(667385);

            function V(e) {
                let {
                    onClose: t
                } = e, {
                    query: {
                        campaignUrl: a,
                        contentId: n,
                        contentIndex: r,
                        contentType: d
                    },
                    ...m
                } = (0, l.useRouter)(), u = function() {
                    let {
                        updates: e
                    } = (0, i.j)(), {
                        organizer: t
                    } = (0, c.g)(), a = t ? .profileUrl || "", n = {};
                    return e ? .map(e => {
                        n[e.id] = [], e.images && e.images.map((t, r) => {
                            n[e.id].push({
                                author: {
                                    fullName: e.author,
                                    initials: o.Qm(e.author),
                                    profileImage: a,
                                    role: e.authorType
                                },
                                index: r,
                                media: {
                                    image: t,
                                    mediaId: t.mediaId,
                                    mediaType: t.mediaType
                                },
                                text: e.text,
                                timeCreated: e.date
                            })
                        })
                    }), n
                }()[`${n}`], h = r ? parseInt(`${r}`, 10) : 0;
                return (0, s.jsx)(Y.S, {
                    type: "suppress",
                    children: (0, s.jsx)(U, {
                        currentIndex: h,
                        isOpen: !0,
                        items: u ? ? [],
                        onChange: (e, t) => {
                            n && m.push(`/f/${a}/${d}/${n}/gallery/${e}${location.search}`, void 0, {
                                scroll: !1
                            })
                        },
                        onClose: t
                    })
                })
            }(n = r || (r = {})).campaign = "campaign", n.comment = "comment", n.community = "community", n.update = "update"
        },
        192651: function(e, t, a) {
            "use strict";
            a.d(t, {
                Y: function() {
                    return w
                }
            });
            var n = a(552676),
                r = a(282187),
                s = a.n(r),
                l = a(299126),
                i = a(902369),
                o = a(363456),
                c = a(920647),
                d = a(524430),
                m = a(773058),
                u = a(101801),
                h = a(637469),
                g = a(863546),
                _ = a.n(g);

            function p(e) {
                let {
                    additionalImages: t,
                    ariaLabel: a,
                    className: r,
                    id: l,
                    index: g,
                    layout: p,
                    mediaType: f,
                    type: x,
                    url: y
                } = e, I = f === h.DDH.VIMEO || f === h.DDH.YOUTUBE ? "video" : "photo", N = s()(r, _().imageContainer, _().button, {
                    [_().image1by1]: p === i.ll.oneByOne960,
                    [_().image3by2]: p === i.ll.sixteenByNine720
                }), v = (0, c.useRouter)(), b = (0, u.u)(`/${x}/${l}/gallery/${g}`);
                return (0, n.jsxs)(d.Y, {
                    "aria-label": a,
                    as: "button",
                    className: N,
                    "data-additional-images": t,
                    onClick: () => {
                        v.push(b, void 0, {
                            shallow: !0
                        })
                    },
                    children: [(0, n.jsx)("img", {
                        alt: (0, o.t)("Fundraiser update image"),
                        className: _().image,
                        src: y
                    }), "video" === I && (0, n.jsx)(m.G, {
                        className: _().playButton
                    }), t && (0, n.jsx)("div", {
                        className: _().showMore,
                        children: (0, o.t)("See all")
                    })]
                })
            }
            var f = a(106709),
                x = a.n(f);

            function y(e) {
                let {
                    dataElementId: t,
                    images: a,
                    layout: r,
                    totalImages: l,
                    type: c,
                    ugcId: d
                } = e, m = s()(x().collage, "hrt-mt-2", "hrt-list-unstyled", {
                    [x().inline]: "inline" === r,
                    [x().hero]: "hero" === r,
                    [x().solo]: 1 === a.length && "hero" === r,
                    [x().duo]: 2 === a.length && "hero" === r,
                    [x().trio]: a.length > 2 && "hero" === r
                });
                return (0, n.jsx)("ul", {
                    className: m,
                    "data-element-id": t,
                    children: a.slice(0, 3).map((e, t) => (0, n.jsx)("li", {
                        children: (0, n.jsx)(p, { ...e,
                            additionalImages: 2 === t && l > 3,
                            ariaLabel: 2 === t ? (0, o.t)("Image {{imageIndex}} of {{totalImages}}. Click to view all images", {
                                imageIndex: t + 1,
                                totalImages: a.length
                            }) : (0, o.t)("Image {{imageIndex}} of {{totalImages}}", {
                                imageIndex: t + 1,
                                totalImages: a.length
                            }),
                            className: s()({
                                [x().image16by9]: 0 === t
                            }),
                            id: d,
                            index: t,
                            layout: 2 === a.length && "hero" === r ? i.ll.oneByOne960 : i.ll.sixteenByNine720,
                            type: c
                        })
                    }, t))
                })
            }
            var I = a(391800),
                N = a(204634),
                v = a(893269),
                b = a(779783),
                j = a.n(b);

            function w(e) {
                let {
                    className: t,
                    update: a
                } = e, {
                    author: r,
                    authorType: c,
                    date: d,
                    id: m,
                    images: u,
                    text: h
                } = a;
                (0, I.r)(h);
                let g = c !== (0, v.QQ)()[v.vX.TEAM_MEMBER];
                return (0, n.jsxs)("div", {
                    className: s()(t, "update"),
                    children: [(0, n.jsxs)("header", {
                        className: s()(j().updateInfo, "update-info"),
                        children: [(0, n.jsx)("span", {
                            className: "heading-5 hrt-font-bold hrt-mr-1",
                            children: d
                        }), (0, n.jsxs)("span", {
                            className: "hrt-text-supporting hrt-text-body-sm",
                            children: [(0, o.t)("{{article}} by {{- authorName}}", {
                                article: "",
                                authorName: r
                            }), g && (0, n.jsxs)("span", {
                                children: [",", (0, n.jsx)(n.Fragment, {
                                    children: "\xa0"
                                }), (0, n.jsx)("span", {
                                    className: j().name,
                                    children: c
                                })]
                            })]
                        })]
                    }), (0, n.jsxs)("div", {
                        className: s()(j().content, "update-content"),
                        children: [(0, n.jsx)("span", {
                            className: s()({
                                [j().text]: (0, N.Q)(h)
                            }),
                            dangerouslySetInnerHTML: {
                                __html: h
                            }
                        }), !!u ? .length && (0, n.jsx)(y, {
                            images: u,
                            layout: i.Ar.INLINE,
                            totalImages: u ? .length ? ? 0,
                            type: l.k.update,
                            ugcId: m
                        })]
                    })]
                })
            }
        },
        902369: function(e, t, a) {
            "use strict";
            var n, r, s, l, i, o, c, d, m, u, h, g;
            a.d(t, {
                QC: function() {
                    return l
                },
                Ar: function() {
                    return o
                },
                ll: function() {
                    return _
                }
            }), (c = n || (n = {})).BENEFICIARY = "beneficiary", c.ORGANIZER = "organizer", c.TEAM_MEMBER = "team_member", (d = r || (r = {})).COMMENT = "comment", d.DONATE = "donate", d.FACEBOOK = "facebook", d.JOIN = "join", d.MANAGE = "manage", d.PROFILE = "profile", d.RECEIPT = "receipt", d.SHARE = "share", d.START = "start", d.WIDGET = "widget", (m = s || (s = {})).CHARITY_HANDS = "charityHands", m.LENDING_HAND = "lendingHand", (u = l || (l = {})).failure = "failure", u.none = "none", u.success = "success";
            let _ = Object.freeze([].reduce((e, t) => ({ ...e,
                [t]: t
            }), {}));
            (h = i || (i = {})).Adyen = "adyen", h.Braintree = "braintree", h.PPGF = "ppgf", h.Stripe = "stripe", h.StripeIe = "stripe_ie", h.StripeUs = "stripe_us", h.Empty = "", (g = o || (o = {})).INLINE = "inline", g.HERO = "hero"
        },
        534058: function(e, t, a) {
            "use strict";
            a.d(t, {
                j: function() {
                    return u
                }
            });
            var n = a(920647),
                r = a(204634),
                s = a(637469),
                l = a(163450),
                i = a(893269),
                o = a(45798),
                c = a(363456),
                d = a(329721),
                m = a(965690);

            function u() {
                let {
                    query: {
                        campaignUrl: e
                    }
                } = (0, n.useRouter)(), t = `${e}`, a = function() {
                    let {
                        locale: e
                    } = (0, o.bN)();
                    return t => {
                        let {
                            update: a,
                            charity: n,
                            isCharityOrganized: r
                        } = t, s = a ? .text ? a ? .text.replace(/\[email redacted\]/g, c.t("[email redacted]")).replace(/\[phone redacted\]/g, c.t("[phone redacted]")) : "", o = (0, d.l_)(s);
                        return {
                            author: r && n ? .name ? n.name : a ? .author ? .author ? a.author.author : "",
                            authorType: (0, i.QQ)()[a ? .author ? .authorType ? ? ""],
                            date: a ? .createdAt ? (0, l.K)(e, new Date(a.createdAt)) : "",
                            id: a ? .id ? ? "0",
                            images: a ? .photos ? ? [],
                            text: (0, m.hU)(o),
                            userProfileUrl: a ? .author ? .userProfileUrl || ""
                        }
                    }
                }(), {
                    data: u,
                    error: h,
                    fetchMore: g
                } = (0, s.CkK)({
                    variables: {
                        slug: t,
                        limit: 20,
                        offset: 0
                    }
                }), _ = u ? .fundraiser ? .updatesOffsetPagination ? .edges ? .map(e => e ? .node), p = _ ? .map(e => a({
                    update: e,
                    charity: u ? .fundraiser ? .charity,
                    isCharityOrganized: u ? .fundraiser ? .charityOrganized
                }));

                function f() {
                    g({
                        variables: {
                            slug: t,
                            limit: 20,
                            offset: p ? .length
                        }
                    })
                }
                if (h || !u) return {
                    updates: void 0,
                    getMoreUpdates: f
                };
                let x = !u.fundraiser ? .charity && _ ? .some(e => r.Q(e ? .text ? ? ""));
                return {
                    updates: p,
                    rawUpdates: _,
                    getMoreUpdates: f,
                    updatesHaveCompetitorText: x
                }
            }
        },
        570490: function(e, t, a) {
            "use strict";
            a.d(t, {
                o: function() {
                    return i
                }
            });
            var n = a(552676);
            a(275271);
            var r = a(282187),
                s = a.n(r),
                l = a(604129),
                i = function(e) {
                    let {
                        className: t
                    } = e, a = s()("a-gesture", t), r = (0, l.useDrag)(t => {
                        let {
                            down: a,
                            direction: [n],
                            distance: [r]
                        } = t;
                        !a && n > 0 && r > 25 ? e.onSwipeLeftToRight ? .() : !a && n < 0 && r > 25 && e.onSwipeRightToLeft ? .()
                    }, {
                        axis: "x"
                    });
                    return (0, n.jsx)("div", { ...r(),
                        className: a,
                        children: e.children
                    })
                }
        },
        67179: function(e) {
            e.exports = {
                galleryContent: "gallery-content_galleryContent__e70M_",
                inner: "gallery-content_inner___SYi7",
                image: "gallery-content_image__13uIw",
                info: "gallery-content_info___fOJt",
                isOpen: "gallery-content_isOpen__mhP5g",
                author: "gallery-content_author__Z42O8",
                isOpenAuthor: "gallery-content_isOpenAuthor__uq9MF",
                text: "gallery-content_text__9TqNa",
                index: "gallery-content_index__IieYZ",
                arrow: "gallery-content_arrow__j4Mal",
                arrowLeft: "gallery-content_arrowLeft__O6kil",
                arrowRight: "gallery-content_arrowRight__3U3Js",
                imageInner: "gallery-content_imageInner__UdGZy"
            }
        },
        163482: function(e) {
            e.exports = {
                galleryFooter: "gallery-footer_galleryFooter__jkaEQ",
                nav: "gallery-footer_nav__fKEZ8",
                image: "gallery-footer_image__RXRiG",
                index: "gallery-footer_index__sR1uo",
                carousel: "gallery-footer_carousel__OnNoH",
                carouselSlide: "gallery-footer_carouselSlide__Q4Pem",
                carouselItem: "gallery-footer_carouselItem__YmPn9",
                isActive: "gallery-footer_isActive__yClW9",
                carouselItemButton: "gallery-footer_carouselItemButton__UYOb6",
                carouselArrows: "gallery-footer_carouselArrows__RSPcC",
                carouselPlayButton: "gallery-footer_carouselPlayButton__YB9AI"
            }
        },
        273183: function(e) {
            e.exports = {
                galleryHeader: "gallery-header_galleryHeader__zkAxD",
                close: "gallery-header_close__glGvl",
                author: "gallery-header_author__0a04K"
            }
        },
        581492: function(e) {
            e.exports = {
                gallery: "gallery_gallery__17LXi",
                inner: "gallery_inner__0C9Ds"
            }
        },
        863546: function(e) {
            e.exports = {
                imageContainer: "collage-image_imageContainer__a_MB3",
                button: "collage-image_button__0NHSI",
                image1by1: "collage-image_image1by1__YIbzT",
                image3by2: "collage-image_image3by2__Vgxtv",
                image: "collage-image_image__FU7H5",
                showMore: "collage-image_showMore__3A0ks",
                playButton: "collage-image_playButton__QJOkt"
            }
        },
        106709: function(e) {
            e.exports = {
                collage: "collage_collage__4xDk6",
                inline: "collage_inline__OWrKI",
                hero: "collage_hero__agpV1",
                solo: "collage_solo__0fcKb",
                duo: "collage_duo__IcJUH",
                trio: "collage_trio__Bda4q",
                image16by9: "collage_image16by9__MTEFP"
            }
        },
        779783: function(e) {
            e.exports = {
                updateInfo: "update-item_updateInfo__pJPhQ",
                name: "update-item_name__mYCjs",
                content: "update-item_content__ZycFW",
                text: "update-item_text__jnXTM"
            }
        }
    }
]);
//# sourceMappingURL=92651.35a1d0c19ce08d1a.js.map