"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4129], {
        604129: function(t, e, i) {
            i.d(e, {
                useDrag: function() {
                    return F
                }
            });
            let r = {
                toVector: (t, e) => (void 0 === t && (t = e), Array.isArray(t) ? t : [t, t]),
                add: (t, e) => [t[0] + e[0], t[1] + e[1]],
                sub: (t, e) => [t[0] - e[0], t[1] - e[1]],
                addTo(t, e) {
                    t[0] += e[0], t[1] += e[1]
                },
                subTo(t, e) {
                    t[0] -= e[0], t[1] -= e[1]
                }
            };

            function n(t, e, i) {
                return 0 === e || Math.abs(e) === 1 / 0 ? Math.pow(t, 5 * i) : t * e * i / (e + i * t)
            }

            function s(t, e, i, r = .15) {
                return 0 === r ? Math.max(e, Math.min(t, i)) : t < e ? -n(e - t, i - e, r) + e : t > i ? +n(t - i, i - e, r) + i : t
            }

            function o(t, e, i) {
                var r;
                return (e = "symbol" == typeof(r = function(t, e) {
                    if ("object" != typeof t || null === t) return t;
                    var i = t[Symbol.toPrimitive];
                    if (void 0 !== i) {
                        var r = i.call(t, e || "default");
                        if ("object" != typeof r) return r;
                        throw TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === e ? String : Number)(t)
                }(e, "string")) ? r : String(r)) in t ? Object.defineProperty(t, e, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = i, t
            }

            function a(t, e) {
                var i = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    })), i.push.apply(i, r)
                }
                return i
            }

            function c(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var i = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? a(Object(i), !0).forEach(function(e) {
                        o(t, e, i[e])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : a(Object(i)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                    })
                }
                return t
            }
            let l = {
                pointer: {
                    start: "down",
                    change: "move",
                    end: "up"
                },
                mouse: {
                    start: "down",
                    change: "move",
                    end: "up"
                },
                touch: {
                    start: "start",
                    change: "move",
                    end: "end"
                },
                gesture: {
                    start: "start",
                    change: "change",
                    end: "end"
                }
            };

            function h(t) {
                return t ? t[0].toUpperCase() + t.slice(1) : ""
            }
            let u = ["enter", "leave"],
                d = ["gotpointercapture", "lostpointercapture"];

            function p(t) {
                return "touches" in t
            }

            function f(t) {
                return p(t) ? "touch" : "pointerType" in t ? t.pointerType : "mouse"
            }

            function m(t) {
                return p(t) ? ("touchend" === t.type || "touchcancel" === t.type ? t.changedTouches : t.targetTouches)[0] : t
            }

            function v(t) {
                let e = m(t);
                return p(t) ? e.identifier : e.pointerId
            }

            function g(t) {
                let e = m(t);
                return [e.clientX, e.clientY]
            }

            function b(t, ...e) {
                return "function" == typeof t ? t(...e) : t
            }

            function y() {}

            function _(t, e) {
                return Object.assign({}, e, t || {})
            }
            class w {
                constructor(t, e, i) {
                    this.ctrl = t, this.args = e, this.key = i, this.state || (this.state = {}, this.computeValues([0, 0]), this.computeInitial(), this.init && this.init(), this.reset())
                }
                get state() {
                    return this.ctrl.state[this.key]
                }
                set state(t) {
                    this.ctrl.state[this.key] = t
                }
                get shared() {
                    return this.ctrl.state.shared
                }
                get eventStore() {
                    return this.ctrl.gestureEventStores[this.key]
                }
                get timeoutStore() {
                    return this.ctrl.gestureTimeoutStores[this.key]
                }
                get config() {
                    return this.ctrl.config[this.key]
                }
                get sharedConfig() {
                    return this.ctrl.config.shared
                }
                get handler() {
                    return this.ctrl.handlers[this.key]
                }
                reset() {
                    let {
                        state: t,
                        shared: e,
                        ingKey: i,
                        args: r
                    } = this;
                    e[i] = t._active = t.active = t._blocked = t._force = !1, t._step = [!1, !1], t.intentional = !1, t._movement = [0, 0], t._distance = [0, 0], t._direction = [0, 0], t._delta = [0, 0], t._bounds = [
                        [-1 / 0, 1 / 0],
                        [-1 / 0, 1 / 0]
                    ], t.args = r, t.axis = void 0, t.memo = void 0, t.elapsedTime = t.timeDelta = 0, t.direction = [0, 0], t.distance = [0, 0], t.overflow = [0, 0], t._movementBound = [!1, !1], t.velocity = [0, 0], t.movement = [0, 0], t.delta = [0, 0], t.timeStamp = 0
                }
                start(t) {
                    let e = this.state,
                        i = this.config;
                    e._active || (this.reset(), this.computeInitial(), e._active = !0, e.target = t.target, e.currentTarget = t.currentTarget, e.lastOffset = i.from ? b(i.from, e) : e.offset, e.offset = e.lastOffset, e.startTime = e.timeStamp = t.timeStamp)
                }
                computeValues(t) {
                    let e = this.state;
                    e._values = t, e.values = this.config.transform(t)
                }
                computeInitial() {
                    let t = this.state;
                    t._initial = t._values, t.initial = t.values
                }
                compute(t) {
                    let {
                        state: e,
                        config: i,
                        shared: n
                    } = this;
                    e.args = this.args;
                    let o = 0;
                    if (t && (e.event = t, i.preventDefault && t.cancelable && e.event.preventDefault(), e.type = t.type, n.touches = this.ctrl.pointerIds.size || this.ctrl.touchIds.size, n.locked = !!document.pointerLockElement, Object.assign(n, function(t) {
                            let e = {};
                            if ("buttons" in t && (e.buttons = t.buttons), "shiftKey" in t) {
                                let {
                                    shiftKey: i,
                                    altKey: r,
                                    metaKey: n,
                                    ctrlKey: s
                                } = t;
                                Object.assign(e, {
                                    shiftKey: i,
                                    altKey: r,
                                    metaKey: n,
                                    ctrlKey: s
                                })
                            }
                            return e
                        }(t)), n.down = n.pressed = n.buttons % 2 == 1 || n.touches > 0, o = t.timeStamp - e.timeStamp, e.timeStamp = t.timeStamp, e.elapsedTime = e.timeStamp - e.startTime), e._active) {
                        let t = e._delta.map(Math.abs);
                        r.addTo(e._distance, t)
                    }
                    this.axisIntent && this.axisIntent(t);
                    let [a, c] = e._movement, [l, h] = i.threshold, {
                        _step: u,
                        values: d
                    } = e;
                    if (i.hasCustomTransform ? (!1 === u[0] && (u[0] = Math.abs(a) >= l && d[0]), !1 === u[1] && (u[1] = Math.abs(c) >= h && d[1])) : (!1 === u[0] && (u[0] = Math.abs(a) >= l && Math.sign(a) * l), !1 === u[1] && (u[1] = Math.abs(c) >= h && Math.sign(c) * h)), e.intentional = !1 !== u[0] || !1 !== u[1], !e.intentional) return;
                    let p = [0, 0];
                    if (i.hasCustomTransform) {
                        let [t, e] = d;
                        p[0] = !1 !== u[0] ? t - u[0] : 0, p[1] = !1 !== u[1] ? e - u[1] : 0
                    } else p[0] = !1 !== u[0] ? a - u[0] : 0, p[1] = !1 !== u[1] ? c - u[1] : 0;
                    this.restrictToAxis && !e._blocked && this.restrictToAxis(p);
                    let f = e.offset,
                        m = e._active && !e._blocked || e.active;
                    m && (e.first = e._active && !e.active, e.last = !e._active && e.active, e.active = n[this.ingKey] = e._active, t && (e.first && ("bounds" in i && (e._bounds = b(i.bounds, e)), this.setup && this.setup()), e.movement = p, this.computeOffset()));
                    let [v, g] = e.offset, [
                        [y, _],
                        [w, k]
                    ] = e._bounds;
                    e.overflow = [v < y ? -1 : v > _ ? 1 : 0, g < w ? -1 : g > k ? 1 : 0], e._movementBound[0] = !!e.overflow[0] && (!1 === e._movementBound[0] ? e._movement[0] : e._movementBound[0]), e._movementBound[1] = !!e.overflow[1] && (!1 === e._movementBound[1] ? e._movement[1] : e._movementBound[1]);
                    let S = e._active && i.rubberband || [0, 0];
                    if (e.offset = function(t, [e, i], [r, n]) {
                            let [
                                [o, a],
                                [c, l]
                            ] = t;
                            return [s(e, o, a, r), s(i, c, l, n)]
                        }(e._bounds, e.offset, S), e.delta = r.sub(e.offset, f), this.computeMovement(), m && (!e.last || o > 32)) {
                        e.delta = r.sub(e.offset, f);
                        let t = e.delta.map(Math.abs);
                        r.addTo(e.distance, t), e.direction = e.delta.map(Math.sign), e._direction = e._delta.map(Math.sign), !e.first && o > 0 && (e.velocity = [t[0] / o, t[1] / o], e.timeDelta = o)
                    }
                }
                emit() {
                    let t = this.state,
                        e = this.shared,
                        i = this.config;
                    if (t._active || this.clean(), (t._blocked || !t.intentional) && !t._force && !i.triggerAllEvents) return;
                    let r = this.handler(c(c(c({}, e), t), {}, {
                        [this.aliasKey]: t.values
                    }));
                    void 0 !== r && (t.memo = r)
                }
                clean() {
                    this.eventStore.clean(), this.timeoutStore.clean()
                }
            }
            class k extends w {
                constructor(...t) {
                    super(...t), o(this, "aliasKey", "xy")
                }
                reset() {
                    super.reset(), this.state.axis = void 0
                }
                init() {
                    this.state.offset = [0, 0], this.state.lastOffset = [0, 0]
                }
                computeOffset() {
                    this.state.offset = r.add(this.state.lastOffset, this.state.movement)
                }
                computeMovement() {
                    this.state.movement = r.sub(this.state.offset, this.state.lastOffset)
                }
                axisIntent(t) {
                    let e = this.state,
                        i = this.config;
                    if (!e.axis && t) {
                        let r = "object" == typeof i.axisThreshold ? i.axisThreshold[f(t)] : i.axisThreshold;
                        e.axis = function([t, e], i) {
                            let r = Math.abs(t),
                                n = Math.abs(e);
                            return r > n && r > i ? "x" : n > r && n > i ? "y" : void 0
                        }(e._movement, r)
                    }
                    e._blocked = (i.lockDirection || !!i.axis) && !e.axis || !!i.axis && i.axis !== e.axis
                }
                restrictToAxis(t) {
                    if (this.config.axis || this.config.lockDirection) switch (this.state.axis) {
                        case "x":
                            t[1] = 0;
                            break;
                        case "y":
                            t[0] = 0
                    }
                }
            }
            let S = t => t,
                T = {
                    enabled: (t = !0) => t,
                    eventOptions: (t, e, i) => c(c({}, i.shared.eventOptions), t),
                    preventDefault: (t = !1) => t,
                    triggerAllEvents: (t = !1) => t,
                    rubberband(t = 0) {
                        switch (t) {
                            case !0:
                                return [.15, .15];
                            case !1:
                                return [0, 0];
                            default:
                                return r.toVector(t)
                        }
                    },
                    from: t => "function" == typeof t ? t : null != t ? r.toVector(t) : void 0,
                    transform(t, e, i) {
                        let r = t || i.shared.transform;
                        return this.hasCustomTransform = !!r, r || S
                    },
                    threshold: t => r.toVector(t, 0)
                },
                x = 0,
                O = c(c({}, T), {}, {
                    axis(t, e, {
                        axis: i
                    }) {
                        if (this.lockDirection = "lock" === i, !this.lockDirection) return i
                    },
                    axisThreshold: (t = x) => t,
                    bounds(t = {}) {
                        if ("function" == typeof t) return e => O.bounds(t(e));
                        if ("current" in t) return () => t.current;
                        if ("function" == typeof HTMLElement && t instanceof HTMLElement) return t;
                        let {
                            left: e = -1 / 0,
                            right: i = 1 / 0,
                            top: r = -1 / 0,
                            bottom: n = 1 / 0
                        } = t;
                        return [
                            [e, i],
                            [r, n]
                        ]
                    }
                }),
                D = {
                    ArrowRight: (t, e = 1) => [t * e, 0],
                    ArrowLeft: (t, e = 1) => [-1 * t * e, 0],
                    ArrowUp: (t, e = 1) => [0, -1 * t * e],
                    ArrowDown: (t, e = 1) => [0, t * e]
                };
            class A extends k {
                constructor(...t) {
                    super(...t), o(this, "ingKey", "dragging")
                }
                reset() {
                    super.reset();
                    let t = this.state;
                    t._pointerId = void 0, t._pointerActive = !1, t._keyboardActive = !1, t._preventScroll = !1, t._delayed = !1, t.swipe = [0, 0], t.tap = !1, t.canceled = !1, t.cancel = this.cancel.bind(this)
                }
                setup() {
                    let t = this.state;
                    if (t._bounds instanceof HTMLElement) {
                        let e = t._bounds.getBoundingClientRect(),
                            i = t.currentTarget.getBoundingClientRect(),
                            r = {
                                left: e.left - i.left + t.offset[0],
                                right: e.right - i.right + t.offset[0],
                                top: e.top - i.top + t.offset[1],
                                bottom: e.bottom - i.bottom + t.offset[1]
                            };
                        t._bounds = O.bounds(r)
                    }
                }
                cancel() {
                    let t = this.state;
                    t.canceled || (t.canceled = !0, t._active = !1, setTimeout(() => {
                        this.compute(), this.emit()
                    }, 0))
                }
                setActive() {
                    this.state._active = this.state._pointerActive || this.state._keyboardActive
                }
                clean() {
                    this.pointerClean(), this.state._pointerActive = !1, this.state._keyboardActive = !1, super.clean()
                }
                pointerDown(t) {
                    let e = this.config,
                        i = this.state;
                    if (null != t.buttons && (Array.isArray(e.pointerButtons) ? !e.pointerButtons.includes(t.buttons) : -1 !== e.pointerButtons && e.pointerButtons !== t.buttons)) return;
                    let r = this.ctrl.setEventIds(t);
                    e.pointerCapture && t.target.setPointerCapture(t.pointerId), r && r.size > 1 && i._pointerActive || (this.start(t), this.setupPointer(t), i._pointerId = v(t), i._pointerActive = !0, this.computeValues(g(t)), this.computeInitial(), e.preventScrollAxis && "mouse" !== f(t) ? (i._active = !1, this.setupScrollPrevention(t)) : e.delay > 0 ? (this.setupDelayTrigger(t), e.triggerAllEvents && (this.compute(t), this.emit())) : this.startPointerDrag(t))
                }
                startPointerDrag(t) {
                    let e = this.state;
                    e._active = !0, e._preventScroll = !0, e._delayed = !1, this.compute(t), this.emit()
                }
                pointerMove(t) {
                    let e = this.state,
                        i = this.config;
                    if (!e._pointerActive) return;
                    let n = v(t);
                    if (void 0 !== e._pointerId && n !== e._pointerId) return;
                    let s = g(t);
                    if (document.pointerLockElement === t.target ? e._delta = [t.movementX, t.movementY] : (e._delta = r.sub(s, e._values), this.computeValues(s)), r.addTo(e._movement, e._delta), this.compute(t), e._delayed && e.intentional) {
                        this.timeoutStore.remove("dragDelay"), e.active = !1, this.startPointerDrag(t);
                        return
                    }
                    if (i.preventScrollAxis && !e._preventScroll) {
                        if (!e.axis) return;
                        if (e.axis === i.preventScrollAxis || "xy" === i.preventScrollAxis) {
                            e._active = !1, this.clean();
                            return
                        }
                        this.timeoutStore.remove("startPointerDrag"), this.startPointerDrag(t);
                        return
                    }
                    this.emit()
                }
                pointerUp(t) {
                    this.ctrl.setEventIds(t);
                    try {
                        this.config.pointerCapture && t.target.hasPointerCapture(t.pointerId) && t.target.releasePointerCapture(t.pointerId)
                    } catch (t) {}
                    let e = this.state,
                        i = this.config;
                    if (!e._active || !e._pointerActive) return;
                    let r = v(t);
                    if (void 0 !== e._pointerId && r !== e._pointerId) return;
                    this.state._pointerActive = !1, this.setActive(), this.compute(t);
                    let [n, s] = e._distance;
                    if (e.tap = n <= i.tapsThreshold && s <= i.tapsThreshold, e.tap && i.filterTaps) e._force = !0;
                    else {
                        let [t, r] = e._delta, [n, s] = e._movement, [o, a] = i.swipe.velocity, [c, l] = i.swipe.distance, h = i.swipe.duration;
                        if (e.elapsedTime < h) {
                            let i = Math.abs(t / e.timeDelta),
                                h = Math.abs(r / e.timeDelta);
                            i > o && Math.abs(n) > c && (e.swipe[0] = Math.sign(t)), h > a && Math.abs(s) > l && (e.swipe[1] = Math.sign(r))
                        }
                    }
                    this.emit()
                }
                pointerClick(t) {
                    !this.state.tap && t.detail > 0 && (t.preventDefault(), t.stopPropagation())
                }
                setupPointer(t) {
                    let e = this.config,
                        i = e.device;
                    e.pointerLock && t.currentTarget.requestPointerLock(), e.pointerCapture || (this.eventStore.add(this.sharedConfig.window, i, "change", this.pointerMove.bind(this)), this.eventStore.add(this.sharedConfig.window, i, "end", this.pointerUp.bind(this)), this.eventStore.add(this.sharedConfig.window, i, "cancel", this.pointerUp.bind(this)))
                }
                pointerClean() {
                    this.config.pointerLock && document.pointerLockElement === this.state.currentTarget && document.exitPointerLock()
                }
                preventScroll(t) {
                    this.state._preventScroll && t.cancelable && t.preventDefault()
                }
                setupScrollPrevention(t) {
                    this.state._preventScroll = !1, "persist" in t && "function" == typeof t.persist && t.persist();
                    let e = this.eventStore.add(this.sharedConfig.window, "touch", "change", this.preventScroll.bind(this), {
                        passive: !1
                    });
                    this.eventStore.add(this.sharedConfig.window, "touch", "end", e), this.eventStore.add(this.sharedConfig.window, "touch", "cancel", e), this.timeoutStore.add("startPointerDrag", this.startPointerDrag.bind(this), this.config.preventScrollDelay, t)
                }
                setupDelayTrigger(t) {
                    this.state._delayed = !0, this.timeoutStore.add("dragDelay", () => {
                        this.state._step = [0, 0], this.startPointerDrag(t)
                    }, this.config.delay)
                }
                keyDown(t) {
                    let e = D[t.key];
                    if (e) {
                        let i = this.state,
                            n = t.shiftKey ? 10 : t.altKey ? .1 : 1;
                        this.start(t), i._delta = e(this.config.keyboardDisplacement, n), i._keyboardActive = !0, r.addTo(i._movement, i._delta), this.compute(t), this.emit()
                    }
                }
                keyUp(t) {
                    t.key in D && (this.state._keyboardActive = !1, this.setActive(), this.compute(t), this.emit())
                }
                bind(t) {
                    let e = this.config.device;
                    t(e, "start", this.pointerDown.bind(this)), this.config.pointerCapture && (t(e, "change", this.pointerMove.bind(this)), t(e, "end", this.pointerUp.bind(this)), t(e, "cancel", this.pointerUp.bind(this)), t("lostPointerCapture", "", this.pointerUp.bind(this))), this.config.keys && (t("key", "down", this.keyDown.bind(this)), t("key", "up", this.keyUp.bind(this))), this.config.filterTaps && t("click", "", this.pointerClick.bind(this), {
                        capture: !0,
                        passive: !1
                    })
                }
            }
            let P = "undefined" != typeof window && window.document && window.document.createElement;

            function E() {
                return P && "ontouchstart" in window
            }
            let M = {
                    isBrowser: P,
                    gesture: function() {
                        try {
                            return "constructor" in GestureEvent
                        } catch (t) {
                            return !1
                        }
                    }(),
                    touch: E(),
                    touchscreen: E() || P && window.navigator.maxTouchPoints > 1,
                    pointer: P && "onpointerdown" in window,
                    pointerLock: P && "exitPointerLock" in window.document
                },
                I = 10,
                C = {
                    mouse: 0,
                    touch: 0,
                    pen: 8
                },
                j = c(c({}, O), {}, {
                    device(t, e, {
                        pointer: {
                            touch: i = !1,
                            lock: r = !1,
                            mouse: n = !1
                        } = {}
                    }) {
                        return (this.pointerLock = r && M.pointerLock, M.touch && i) ? "touch" : this.pointerLock ? "mouse" : M.pointer && !n ? "pointer" : M.touch ? "touch" : "mouse"
                    },
                    preventScrollAxis(t, e, {
                        preventScroll: i
                    }) {
                        if (this.preventScrollDelay = "number" == typeof i ? i : i || void 0 === i && t ? 250 : void 0, M.touchscreen && !1 !== i) return t || (void 0 !== i ? "y" : void 0)
                    },
                    pointerCapture(t, e, {
                        pointer: {
                            capture: i = !0,
                            buttons: r = 1,
                            keys: n = !0
                        } = {}
                    }) {
                        return this.pointerButtons = r, this.keys = n, !this.pointerLock && "pointer" === this.device && i
                    },
                    threshold(t, e, {
                        filterTaps: i = !1,
                        tapsThreshold: n = 3,
                        axis: s
                    }) {
                        let o = r.toVector(t, i ? n : s ? 1 : 0);
                        return this.filterTaps = i, this.tapsThreshold = n, o
                    },
                    swipe({
                        velocity: t = .5,
                        distance: e = 50,
                        duration: i = 250
                    } = {}) {
                        return {
                            velocity: this.transform(r.toVector(t)),
                            distance: this.transform(r.toVector(e)),
                            duration: i
                        }
                    },
                    delay(t = 0) {
                        switch (t) {
                            case !0:
                                return 180;
                            case !1:
                                return 0;
                            default:
                                return t
                        }
                    },
                    axisThreshold: t => t ? c(c({}, C), t) : C,
                    keyboardDisplacement: (t = I) => t
                });
            c(c({}, T), {}, {
                device(t, e, {
                    shared: i,
                    pointer: {
                        touch: r = !1
                    } = {}
                }) {
                    if (i.target && !M.touch && M.gesture) return "gesture";
                    if (M.touch && r) return "touch";
                    if (M.touchscreen) {
                        if (M.pointer) return "pointer";
                        if (M.touch) return "touch"
                    }
                },
                bounds(t, e, {
                    scaleBounds: i = {},
                    angleBounds: r = {}
                }) {
                    let n = t => {
                            let e = _(b(i, t), {
                                min: -1 / 0,
                                max: 1 / 0
                            });
                            return [e.min, e.max]
                        },
                        s = t => {
                            let e = _(b(r, t), {
                                min: -1 / 0,
                                max: 1 / 0
                            });
                            return [e.min, e.max]
                        };
                    return "function" != typeof i && "function" != typeof r ? [n(), s()] : t => [n(t), s(t)]
                },
                threshold(t, e, i) {
                    return this.lockDirection = "lock" === i.axis, r.toVector(t, this.lockDirection ? [.1, 3] : 0)
                },
                modifierKey: t => void 0 === t ? "ctrlKey" : t,
                pinchOnWheel: (t = !0) => t
            }), c(c({}, O), {}, {
                mouseOnly: (t = !0) => t
            }), c(c({}, O), {}, {
                mouseOnly: (t = !0) => t
            });
            let L = new Map,
                K = new Map,
                B = "drag",
                V = A,
                U = j;
            var H = i(275271);
            let z = {
                    target(t) {
                        if (t) return () => "current" in t ? t.current : t
                    },
                    enabled: (t = !0) => t,
                    window: (t = M.isBrowser ? window : void 0) => t,
                    eventOptions: ({
                        passive: t = !0,
                        capture: e = !1
                    } = {}) => ({
                        passive: t,
                        capture: e
                    }),
                    transform: t => t
                },
                N = ["target", "eventOptions", "window", "enabled", "transform"];

            function R(t = {}, e) {
                let i = {};
                for (let [r, n] of Object.entries(e)) switch (typeof n) {
                    case "function":
                        i[r] = n.call(i, t[r], r, t);
                        break;
                    case "object":
                        i[r] = R(t[r], n);
                        break;
                    case "boolean":
                        n && (i[r] = t[r])
                }
                return i
            }
            class X {
                constructor(t, e) {
                    o(this, "_listeners", new Set), this._ctrl = t, this._gestureKey = e
                }
                add(t, e, i, r, n) {
                    let s = this._listeners,
                        o = function(t, e = "") {
                            let i = l[t];
                            return t + (i && i[e] || e)
                        }(e, i),
                        a = c(c({}, this._gestureKey ? this._ctrl.config[this._gestureKey].eventOptions : {}), n);
                    t.addEventListener(o, r, a);
                    let h = () => {
                        t.removeEventListener(o, r, a), s.delete(h)
                    };
                    return s.add(h), h
                }
                clean() {
                    this._listeners.forEach(t => t()), this._listeners.clear()
                }
            }
            class Y {
                constructor() {
                    o(this, "_timeouts", new Map)
                }
                add(t, e, i = 140, ...r) {
                    this.remove(t), this._timeouts.set(t, window.setTimeout(e, i, ...r))
                }
                remove(t) {
                    let e = this._timeouts.get(t);
                    e && window.clearTimeout(e)
                }
                clean() {
                    this._timeouts.forEach(t => void window.clearTimeout(t)), this._timeouts.clear()
                }
            }
            class q {
                constructor(t) {
                    o(this, "gestures", new Set), o(this, "_targetEventStore", new X(this)), o(this, "gestureEventStores", {}), o(this, "gestureTimeoutStores", {}), o(this, "handlers", {}), o(this, "config", {}), o(this, "pointerIds", new Set), o(this, "touchIds", new Set), o(this, "state", {
                        shared: {
                            shiftKey: !1,
                            metaKey: !1,
                            ctrlKey: !1,
                            altKey: !1
                        }
                    }), t.drag && G(this, "drag"), t.wheel && G(this, "wheel"), t.scroll && G(this, "scroll"), t.move && G(this, "move"), t.pinch && G(this, "pinch"), t.hover && G(this, "hover")
                }
                setEventIds(t) {
                    return p(t) ? (this.touchIds = new Set(Array.from(t.touches).filter(e => {
                        var i, r;
                        return e.target === t.currentTarget || (null === (i = t.currentTarget) || void 0 === i || null === (r = i.contains) || void 0 === r ? void 0 : r.call(i, e.target))
                    }).map(t => t.identifier)), this.touchIds) : "pointerId" in t ? ("pointerup" === t.type || "pointercancel" === t.type ? this.pointerIds.delete(t.pointerId) : "pointerdown" === t.type && this.pointerIds.add(t.pointerId), this.pointerIds) : void 0
                }
                applyHandlers(t, e) {
                    this.handlers = t, this.nativeHandlers = e
                }
                applyConfig(t, e) {
                    this.config = function(t, e, i = {}) {
                        let {
                            target: r,
                            eventOptions: n,
                            window: s,
                            enabled: o,
                            transform: a
                        } = t, l = function(t, e) {
                            if (null == t) return {};
                            var i, r, n = function(t, e) {
                                if (null == t) return {};
                                var i, r, n = {},
                                    s = Object.keys(t);
                                for (r = 0; r < s.length; r++) i = s[r], e.indexOf(i) >= 0 || (n[i] = t[i]);
                                return n
                            }(t, e);
                            if (Object.getOwnPropertySymbols) {
                                var s = Object.getOwnPropertySymbols(t);
                                for (r = 0; r < s.length; r++) i = s[r], !(e.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(t, i) && (n[i] = t[i])
                            }
                            return n
                        }(t, N);
                        if (i.shared = R({
                                target: r,
                                eventOptions: n,
                                window: s,
                                enabled: o,
                                transform: a
                            }, z), e) {
                            let t = K.get(e);
                            i[e] = R(c({
                                shared: i.shared
                            }, l), t)
                        } else
                            for (let t in l) {
                                let e = K.get(t);
                                e && (i[t] = R(c({
                                    shared: i.shared
                                }, l[t]), e))
                            }
                        return i
                    }(t, e, this.config)
                }
                clean() {
                    for (let t of (this._targetEventStore.clean(), this.gestures)) this.gestureEventStores[t].clean(), this.gestureTimeoutStores[t].clean()
                }
                effect() {
                    return this.config.shared.target && this.bind(), () => this._targetEventStore.clean()
                }
                bind(...t) {
                    let e;
                    let i = this.config.shared,
                        r = {};
                    if (!i.target || (e = i.target())) {
                        if (i.enabled) {
                            for (let i of this.gestures) {
                                let n = this.config[i],
                                    s = W(r, n.eventOptions, !!e);
                                n.enabled && new(L.get(i))(this, t, i).bind(s)
                            }
                            let n = W(r, i.eventOptions, !!e);
                            for (let e in this.nativeHandlers) n(e, "", i => this.nativeHandlers[e](c(c({}, this.state.shared), {}, {
                                event: i,
                                args: t
                            })), void 0, !0)
                        }
                        for (let t in r) r[t] = function(...t) {
                            return 0 === t.length ? y : 1 === t.length ? t[0] : function() {
                                let e;
                                for (let i of t) e = i.apply(this, arguments) || e;
                                return e
                            }
                        }(...r[t]);
                        if (!e) return r;
                        for (let t in r) {
                            let {
                                device: i,
                                capture: n,
                                passive: s
                            } = function(t) {
                                let e = t.substring(2).toLowerCase(),
                                    i = !!~e.indexOf("passive");
                                i && (e = e.replace("passive", ""));
                                let r = d.includes(e) ? "capturecapture" : "capture",
                                    n = !!~e.indexOf(r);
                                return n && (e = e.replace("capture", "")), {
                                    device: e,
                                    capture: n,
                                    passive: i
                                }
                            }(t);
                            this._targetEventStore.add(e, i, "", r[t], {
                                capture: n,
                                passive: s
                            })
                        }
                    }
                }
            }

            function G(t, e) {
                t.gestures.add(e), t.gestureEventStores[e] = new X(t, e), t.gestureTimeoutStores[e] = new Y
            }
            let W = (t, e, i) => (r, n, s, o = {}, a = !1) => {
                var c, d;
                let p = null !== (c = o.capture) && void 0 !== c ? c : e.capture,
                    f = null !== (d = o.passive) && void 0 !== d ? d : e.passive,
                    m = a ? r : function(t, e = "", i = !1) {
                        let r = l[t],
                            n = r && r[e] || e;
                        return "on" + h(t) + h(n) + (! function(t = !1, e) {
                            return t && !u.includes(e)
                        }(i, n) ? "" : "Capture")
                    }(r, n, p);
                i && f && (m += "Passive"), t[m] = t[m] || [], t[m].push(s)
            };

            function F(t, e) {
                return L.set(B, V), K.set(B, U),
                    function(t, e = {}, i, r) {
                        let n = H.useMemo(() => new q(t), []);
                        if (n.applyHandlers(t, void 0), n.applyConfig(e, i), H.useEffect(n.effect.bind(n)), H.useEffect(() => n.clean.bind(n), []), void 0 === e.target) return n.bind.bind(n)
                    }({
                        drag: t
                    }, e || {}, "drag")
            }
        }
    }
]);
//# sourceMappingURL=4129-8885e89a04001c3f.js.map