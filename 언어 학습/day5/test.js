gapi.loaded_0(function (_) {
    var window = this;
    var ca, fa, ha, ia, ka, la, ya;
    _.ba = function (a) {
        return function () {
            return _.aa[a].apply(this, arguments)
        }
    };
    _.aa = [];
    ca = function (a) {
        var b = 0;
        return function () {
            return b < a.length ? {done: !1, value: a[b++]} : {done: !0}
        }
    };
    fa = "function" == typeof Object.defineProperties ? Object.defineProperty : function (a, b, c) {
        if (a == Array.prototype || a == Object.prototype) return a;
        a[b] = c.value;
        return a
    };
    ha = function (a) {
        a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
        for (var b = 0; b < a.length; ++b) {
            var c = a[b];
            if (c && c.Math == Math) return c
        }
        throw Error("a");
    };
    ia = ha(this);
    ka = function (a, b) {
        if (b) a:{
            var c = ia;
            a = a.split(".");
            for (var d = 0; d < a.length - 1; d++) {
                var e = a[d];
                if (!(e in c)) break a;
                c = c[e]
            }
            a = a[a.length - 1];
            d = c[a];
            b = b(d);
            b != d && null != b && fa(c, a, {configurable: !0, writable: !0, value: b})
        }
    };
    ka("Symbol", function (a) {
        if (a) return a;
        var b = function (f, h) {
            this.pT = f;
            fa(this, "description", {configurable: !0, writable: !0, value: h})
        };
        b.prototype.toString = function () {
            return this.pT
        };
        var c = "jscomp_symbol_" + (1E9 * Math.random() >>> 0) + "_", d = 0, e = function (f) {
            if (this instanceof e) throw new TypeError("Symbol is not a constructor");
            return new b(c + (f || "") + "_" + d++, f)
        };
        return e
    });
    ka("Symbol.iterator", function (a) {
        if (a) return a;
        a = Symbol("Symbol.iterator");
        for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
            var d = ia[b[c]];
            "function" === typeof d && "function" != typeof d.prototype[a] && fa(d.prototype, a, {
                configurable: !0,
                writable: !0,
                value: function () {
                    return la(ca(this))
                }
            })
        }
        return a
    });
    la = function (a) {
        a = {next: a};
        a[Symbol.iterator] = function () {
            return this
        };
        return a
    };
    _.pa = function (a) {
        var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
        return b ? b.call(a) : {next: ca(a)}
    };
    _.sa = "function" == typeof Object.create ? Object.create : function (a) {
        var b = function () {
        };
        b.prototype = a;
        return new b
    };
    if ("function" == typeof Object.setPrototypeOf) ya = Object.setPrototypeOf; else {
        var za;
        a:{
            var Ba = {a: !0}, Ea = {};
            try {
                Ea.__proto__ = Ba;
                za = Ea.a;
                break a
            } catch (a) {
            }
            za = !1
        }
        ya = za ? function (a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    _.Ha = ya;
    ka("Promise", function (a) {
        function b() {
            this.ef = null
        }

        function c(h) {
            return h instanceof e ? h : new e(function (k) {
                k(h)
            })
        }

        if (a) return a;
        b.prototype.FK = function (h) {
            if (null == this.ef) {
                this.ef = [];
                var k = this;
                this.GK(function () {
                    k.HX()
                })
            }
            this.ef.push(h)
        };
        var d = ia.setTimeout;
        b.prototype.GK = function (h) {
            d(h, 0)
        };
        b.prototype.HX = function () {
            for (; this.ef && this.ef.length;) {
                var h = this.ef;
                this.ef = [];
                for (var k = 0; k < h.length; ++k) {
                    var l = h[k];
                    h[k] = null;
                    try {
                        l()
                    } catch (m) {
                        this.ko(m)
                    }
                }
            }
            this.ef = null
        };
        b.prototype.ko = function (h) {
            this.GK(function () {
                throw h;
            })
        };
        var e = function (h) {
            this.Da = 0;
            this.Re = void 0;
            this.Lp = [];
            this.bP = !1;
            var k = this.dC();
            try {
                h(k.resolve, k.reject)
            } catch (l) {
                k.reject(l)
            }
        };
        e.prototype.dC = function () {
            function h(m) {
                return function (n) {
                    l || (l = !0, m.call(k, n))
                }
            }

            var k = this, l = !1;
            return {resolve: h(this.K3), reject: h(this.dG)}
        };
        e.prototype.K3 = function (h) {
            if (h === this) this.dG(new TypeError("A Promise cannot resolve to itself")); else if (h instanceof e) this.m5(h); else {
                a:switch (typeof h) {
                    case "object":
                        var k = null != h;
                        break a;
                    case "function":
                        k = !0;
                        break a;
                    default:
                        k =
                            !1
                }
                k ? this.J3(h) : this.JM(h)
            }
        };
        e.prototype.J3 = function (h) {
            var k = void 0;
            try {
                k = h.then
            } catch (l) {
                this.dG(l);
                return
            }
            "function" == typeof k ? this.n5(k, h) : this.JM(h)
        };
        e.prototype.dG = function (h) {
            this.iS(2, h)
        };
        e.prototype.JM = function (h) {
            this.iS(1, h)
        };
        e.prototype.iS = function (h, k) {
            if (0 != this.Da) throw Error("b`" + h + "`" + k + "`" + this.Da);
            this.Da = h;
            this.Re = k;
            2 === this.Da && this.Z3();
            this.IX()
        };
        e.prototype.Z3 = function () {
            var h = this;
            d(function () {
                if (h.S1()) {
                    var k = ia.console;
                    "undefined" !== typeof k && k.error(h.Re)
                }
            }, 1)
        };
        e.prototype.S1 =
            function () {
                if (this.bP) return !1;
                var h = ia.CustomEvent, k = ia.Event, l = ia.dispatchEvent;
                if ("undefined" === typeof l) return !0;
                "function" === typeof h ? h = new h("unhandledrejection", {cancelable: !0}) : "function" === typeof k ? h = new k("unhandledrejection", {cancelable: !0}) : (h = ia.document.createEvent("CustomEvent"), h.initCustomEvent("unhandledrejection", !1, !0, h));
                h.promise = this;
                h.reason = this.Re;
                return l(h)
            };
        e.prototype.IX = function () {
            if (null != this.Lp) {
                for (var h = 0; h < this.Lp.length; ++h) f.FK(this.Lp[h]);
                this.Lp = null
            }
        };
        var f =
            new b;
        e.prototype.m5 = function (h) {
            var k = this.dC();
            h.yv(k.resolve, k.reject)
        };
        e.prototype.n5 = function (h, k) {
            var l = this.dC();
            try {
                h.call(k, l.resolve, l.reject)
            } catch (m) {
                l.reject(m)
            }
        };
        e.prototype.then = function (h, k) {
            function l(p, t) {
                return "function" == typeof p ? function (v) {
                    try {
                        m(p(v))
                    } catch (r) {
                        n(r)
                    }
                } : t
            }

            var m, n, q = new e(function (p, t) {
                m = p;
                n = t
            });
            this.yv(l(h, m), l(k, n));
            return q
        };
        e.prototype.catch = function (h) {
            return this.then(void 0, h)
        };
        e.prototype.yv = function (h, k) {
            function l() {
                switch (m.Da) {
                    case 1:
                        h(m.Re);
                        break;
                    case 2:
                        k(m.Re);
                        break;
                    default:
                        throw Error("c`" + m.Da);
                }
            }

            var m = this;
            null == this.Lp ? f.FK(l) : this.Lp.push(l);
            this.bP = !0
        };
        e.resolve = c;
        e.reject = function (h) {
            return new e(function (k, l) {
                l(h)
            })
        };
        e.race = function (h) {
            return new e(function (k, l) {
                for (var m = _.pa(h), n = m.next(); !n.done; n = m.next()) c(n.value).yv(k, l)
            })
        };
        e.all = function (h) {
            var k = _.pa(h), l = k.next();
            return l.done ? c([]) : new e(function (m, n) {
                function q(v) {
                    return function (r) {
                        p[v] = r;
                        t--;
                        0 == t && m(p)
                    }
                }

                var p = [], t = 0;
                do p.push(void 0), t++, c(l.value).yv(q(p.length - 1), n), l = k.next(); while (!l.done)
            })
        };
        return e
    });
    var Ia = function (a, b, c) {
        if (null == a) throw new TypeError("The 'this' value for String.prototype." + c + " must not be null or undefined");
        if (b instanceof RegExp) throw new TypeError("First argument to String.prototype." + c + " must not be a regular expression");
        return a + ""
    };
    ka("String.prototype.startsWith", function (a) {
        return a ? a : function (b, c) {
            var d = Ia(this, b, "startsWith"), e = d.length, f = b.length;
            c = Math.max(0, Math.min(c | 0, d.length));
            for (var h = 0; h < f && c < e;) if (d[c++] != b[h++]) return !1;
            return h >= f
        }
    });
    var La = function (a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    };
    ka("WeakMap", function (a) {
        function b() {
        }

        function c(l) {
            var m = typeof l;
            return "object" === m && null !== l || "function" === m
        }

        function d(l) {
            if (!La(l, f)) {
                var m = new b;
                fa(l, f, {value: m})
            }
        }

        function e(l) {
            var m = Object[l];
            m && (Object[l] = function (n) {
                if (n instanceof b) return n;
                Object.isExtensible(n) && d(n);
                return m(n)
            })
        }

        if (function () {
            if (!a || !Object.seal) return !1;
            try {
                var l = Object.seal({}), m = Object.seal({}), n = new a([[l, 2], [m, 3]]);
                if (2 != n.get(l) || 3 != n.get(m)) return !1;
                n.delete(l);
                n.set(m, 4);
                return !n.has(l) && 4 == n.get(m)
            } catch (q) {
                return !1
            }
        }()) return a;
        var f = "$jscomp_hidden_" + Math.random();
        e("freeze");
        e("preventExtensions");
        e("seal");
        var h = 0, k = function (l) {
            this.Ca = (h += Math.random() + 1).toString();
            if (l) {
                l = _.pa(l);
                for (var m; !(m = l.next()).done;) m = m.value, this.set(m[0], m[1])
            }
        };
        k.prototype.set = function (l, m) {
            if (!c(l)) throw Error("d");
            d(l);
            if (!La(l, f)) throw Error("e`" + l);
            l[f][this.Ca] = m;
            return this
        };
        k.prototype.get = function (l) {
            return c(l) && La(l, f) ? l[f][this.Ca] : void 0
        };
        k.prototype.has = function (l) {
            return c(l) && La(l, f) && La(l[f], this.Ca)
        };
        k.prototype.delete =
            function (l) {
                return c(l) && La(l, f) && La(l[f], this.Ca) ? delete l[f][this.Ca] : !1
            };
        return k
    });
    ka("Map", function (a) {
        if (function () {
            if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
            try {
                var k = Object.seal({x: 4}), l = new a(_.pa([[k, "s"]]));
                if ("s" != l.get(k) || 1 != l.size || l.get({x: 4}) || l.set({x: 4}, "t") != l || 2 != l.size) return !1;
                var m = l.entries(), n = m.next();
                if (n.done || n.value[0] != k || "s" != n.value[1]) return !1;
                n = m.next();
                return n.done || 4 != n.value[0].x || "t" != n.value[1] || !m.next().done ? !1 : !0
            } catch (q) {
                return !1
            }
        }()) return a;
        var b = new WeakMap, c = function (k) {
            this.Pf = {};
            this.tf =
                f();
            this.size = 0;
            if (k) {
                k = _.pa(k);
                for (var l; !(l = k.next()).done;) l = l.value, this.set(l[0], l[1])
            }
        };
        c.prototype.set = function (k, l) {
            k = 0 === k ? 0 : k;
            var m = d(this, k);
            m.list || (m.list = this.Pf[m.id] = []);
            m.Ee ? m.Ee.value = l : (m.Ee = {
                next: this.tf,
                Mj: this.tf.Mj,
                head: this.tf,
                key: k,
                value: l
            }, m.list.push(m.Ee), this.tf.Mj.next = m.Ee, this.tf.Mj = m.Ee, this.size++);
            return this
        };
        c.prototype.delete = function (k) {
            k = d(this, k);
            return k.Ee && k.list ? (k.list.splice(k.index, 1), k.list.length || delete this.Pf[k.id], k.Ee.Mj.next = k.Ee.next, k.Ee.next.Mj =
                k.Ee.Mj, k.Ee.head = null, this.size--, !0) : !1
        };
        c.prototype.clear = function () {
            this.Pf = {};
            this.tf = this.tf.Mj = f();
            this.size = 0
        };
        c.prototype.has = function (k) {
            return !!d(this, k).Ee
        };
        c.prototype.get = function (k) {
            return (k = d(this, k).Ee) && k.value
        };
        c.prototype.entries = function () {
            return e(this, function (k) {
                return [k.key, k.value]
            })
        };
        c.prototype.keys = function () {
            return e(this, function (k) {
                return k.key
            })
        };
        c.prototype.values = function () {
            return e(this, function (k) {
                return k.value
            })
        };
        c.prototype.forEach = function (k, l) {
            for (var m = this.entries(),
                     n; !(n = m.next()).done;) n = n.value, k.call(l, n[1], n[0], this)
        };
        c.prototype[Symbol.iterator] = c.prototype.entries;
        var d = function (k, l) {
            var m = l && typeof l;
            "object" == m || "function" == m ? b.has(l) ? m = b.get(l) : (m = "" + ++h, b.set(l, m)) : m = "p_" + l;
            var n = k.Pf[m];
            if (n && La(k.Pf, m)) for (k = 0; k < n.length; k++) {
                var q = n[k];
                if (l !== l && q.key !== q.key || l === q.key) return {id: m, list: n, index: k, Ee: q}
            }
            return {id: m, list: n, index: -1, Ee: void 0}
        }, e = function (k, l) {
            var m = k.tf;
            return la(function () {
                if (m) {
                    for (; m.head != k.tf;) m = m.Mj;
                    for (; m.next != m.head;) return m =
                        m.next, {done: !1, value: l(m)};
                    m = null
                }
                return {done: !0, value: void 0}
            })
        }, f = function () {
            var k = {};
            return k.Mj = k.next = k.head = k
        }, h = 0;
        return c
    });
    ka("Array.prototype.find", function (a) {
        return a ? a : function (b, c) {
            a:{
                var d = this;
                d instanceof String && (d = String(d));
                for (var e = d.length, f = 0; f < e; f++) {
                    var h = d[f];
                    if (b.call(c, h, f, d)) {
                        b = h;
                        break a
                    }
                }
                b = void 0
            }
            return b
        }
    });
    var Pa = function (a, b) {
        a instanceof String && (a += "");
        var c = 0, d = !1, e = {
            next: function () {
                if (!d && c < a.length) {
                    var f = c++;
                    return {value: b(f, a[f]), done: !1}
                }
                d = !0;
                return {done: !0, value: void 0}
            }
        };
        e[Symbol.iterator] = function () {
            return e
        };
        return e
    };
    ka("Array.prototype.entries", function (a) {
        return a ? a : function () {
            return Pa(this, function (b, c) {
                return [b, c]
            })
        }
    });
    ka("Array.prototype.keys", function (a) {
        return a ? a : function () {
            return Pa(this, function (b) {
                return b
            })
        }
    });
    var Qa = "function" == typeof Object.assign ? Object.assign : function (a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (d) for (var e in d) La(d, e) && (a[e] = d[e])
        }
        return a
    };
    ka("Object.assign", function (a) {
        return a || Qa
    });
    ka("Set", function (a) {
        if (function () {
            if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
            try {
                var c = Object.seal({x: 4}), d = new a(_.pa([c]));
                if (!d.has(c) || 1 != d.size || d.add(c) != d || 1 != d.size || d.add({x: 4}) != d || 2 != d.size) return !1;
                var e = d.entries(), f = e.next();
                if (f.done || f.value[0] != c || f.value[1] != c) return !1;
                f = e.next();
                return f.done || f.value[0] == c || 4 != f.value[0].x || f.value[1] != f.value[0] ? !1 : e.next().done
            } catch (h) {
                return !1
            }
        }()) return a;
        var b = function (c) {
            this.wa = new Map;
            if (c) {
                c =
                    _.pa(c);
                for (var d; !(d = c.next()).done;) this.add(d.value)
            }
            this.size = this.wa.size
        };
        b.prototype.add = function (c) {
            c = 0 === c ? 0 : c;
            this.wa.set(c, c);
            this.size = this.wa.size;
            return this
        };
        b.prototype.delete = function (c) {
            c = this.wa.delete(c);
            this.size = this.wa.size;
            return c
        };
        b.prototype.clear = function () {
            this.wa.clear();
            this.size = 0
        };
        b.prototype.has = function (c) {
            return this.wa.has(c)
        };
        b.prototype.entries = function () {
            return this.wa.entries()
        };
        b.prototype.values = function () {
            return this.wa.values()
        };
        b.prototype.keys = b.prototype.values;
        b.prototype[Symbol.iterator] = b.prototype.values;
        b.prototype.forEach = function (c, d) {
            var e = this;
            this.wa.forEach(function (f) {
                return c.call(d, f, f, e)
            })
        };
        return b
    });
    ka("Number.isFinite", function (a) {
        return a ? a : function (b) {
            return "number" !== typeof b ? !1 : !isNaN(b) && Infinity !== b && -Infinity !== b
        }
    });
    ka("Array.prototype.values", function (a) {
        return a ? a : function () {
            return Pa(this, function (b, c) {
                return c
            })
        }
    });
    ka("Array.from", function (a) {
        return a ? a : function (b, c, d) {
            c = null != c ? c : function (k) {
                return k
            };
            var e = [], f = "undefined" != typeof Symbol && Symbol.iterator && b[Symbol.iterator];
            if ("function" == typeof f) {
                b = f.call(b);
                for (var h = 0; !(f = b.next()).done;) e.push(c.call(d, f.value, h++))
            } else for (f = b.length, h = 0; h < f; h++) e.push(c.call(d, b[h], h));
            return e
        }
    });
    ka("Object.entries", function (a) {
        return a ? a : function (b) {
            var c = [], d;
            for (d in b) La(b, d) && c.push([d, b[d]]);
            return c
        }
    });
    ka("Object.values", function (a) {
        return a ? a : function (b) {
            var c = [], d;
            for (d in b) La(b, d) && c.push(b[d]);
            return c
        }
    });
    ka("Object.is", function (a) {
        return a ? a : function (b, c) {
            return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c
        }
    });
    ka("Array.prototype.includes", function (a) {
        return a ? a : function (b, c) {
            var d = this;
            d instanceof String && (d = String(d));
            var e = d.length;
            c = c || 0;
            for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
                var f = d[c];
                if (f === b || Object.is(f, b)) return !0
            }
            return !1
        }
    });
    ka("String.prototype.includes", function (a) {
        return a ? a : function (b, c) {
            return -1 !== Ia(this, b, "includes").indexOf(b, c || 0)
        }
    });
    ka("Array.prototype.flat", function (a) {
        return a ? a : function (b) {
            b = void 0 === b ? 1 : b;
            for (var c = [], d = 0; d < this.length; d++) {
                var e = this[d];
                Array.isArray(e) && 0 < b ? (e = Array.prototype.flat.call(e, b - 1), c.push.apply(c, e)) : c.push(e)
            }
            return c
        }
    });
    ka("Number.isNaN", function (a) {
        return a ? a : function (b) {
            return "number" === typeof b && isNaN(b)
        }
    });
    ka("Array.prototype.fill", function (a) {
        return a ? a : function (b, c, d) {
            var e = this.length || 0;
            0 > c && (c = Math.max(0, e + c));
            if (null == d || d > e) d = e;
            d = Number(d);
            0 > d && (d = Math.max(0, e + d));
            for (c = Number(c || 0); c < d; c++) this[c] = b;
            return this
        }
    });
    var Ra = function (a) {
        return a ? a : Array.prototype.fill
    };
    ka("Int8Array.prototype.fill", Ra);
    ka("Uint8Array.prototype.fill", Ra);
    ka("Uint8ClampedArray.prototype.fill", Ra);
    ka("Int16Array.prototype.fill", Ra);
    ka("Uint16Array.prototype.fill", Ra);
    ka("Int32Array.prototype.fill", Ra);
    ka("Uint32Array.prototype.fill", Ra);
    ka("Float32Array.prototype.fill", Ra);
    ka("Float64Array.prototype.fill", Ra);
    ka("String.prototype.replaceAll", function (a) {
        return a ? a : function (b, c) {
            if (b instanceof RegExp && !b.global) throw new TypeError("String.prototype.replaceAll called with a non-global RegExp argument.");
            return b instanceof RegExp ? this.replace(b, c) : this.replace(new RegExp(String(b).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08"), "g"), c)
        }
    });
    ka("globalThis", function (a) {
        return a || ia
    });
    ka("Math.imul", function (a) {
        return a ? a : function (b, c) {
            b = Number(b);
            c = Number(c);
            var d = b & 65535, e = c & 65535;
            return d * e + ((b >>> 16 & 65535) * e + d * (c >>> 16 & 65535) << 16 >>> 0) | 0
        }
    });
    ka("String.fromCodePoint", function (a) {
        return a ? a : function (b) {
            for (var c = "", d = 0; d < arguments.length; d++) {
                var e = Number(arguments[d]);
                if (0 > e || 1114111 < e || e !== Math.floor(e)) throw new RangeError("invalid_code_point " + e);
                65535 >= e ? c += String.fromCharCode(e) : (e -= 65536, c += String.fromCharCode(e >>> 10 & 1023 | 55296), c += String.fromCharCode(e & 1023 | 56320))
            }
            return c
        }
    });
    _.Wa = {};
    /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
    _.Xa = _.Xa || {};
    _.Ya = this || self;
    _.$a = "closure_uid_" + (1E9 * Math.random() >>> 0);
    _.u = function (a, b) {
        a = a.split(".");
        var c = _.Ya;
        a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
        for (var d; a.length && (d = a.shift());) a.length || void 0 === b ? c = c[d] && c[d] !== Object.prototype[d] ? c[d] : c[d] = {} : c[d] = b
    };
    _.ab = function (a, b) {
        function c() {
        }

        c.prototype = b.prototype;
        a.H = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a;
        a.Yq = function (d, e, f) {
            for (var h = Array(arguments.length - 2), k = 2; k < arguments.length; k++) h[k - 2] = arguments[k];
            return b.prototype[e].apply(d, h)
        }
    };
    _.bb = window.osapi = window.osapi || {};

    window.___jsl = window.___jsl || {};
    (window.___jsl.cd = window.___jsl.cd || []).push({
        gwidget: {parsetags: "explicit"},
        appsapi: {plus_one_service: "/plus/v1"},
        csi: {rate: .01},
        poshare: {hangoutContactPickerServer: "https://plus.google.com"},
        gappsutil: {
            required_scopes: ["https://www.googleapis.com/auth/plus.me", "https://www.googleapis.com/auth/plus.people.recommended"],
            display_on_page_ready: !1
        },
        appsutil: {
            required_scopes: ["https://www.googleapis.com/auth/plus.me", "https://www.googleapis.com/auth/plus.people.recommended"],
            display_on_page_ready: !1
        },
        "oauth-flow": {
            authUrl: "https://accounts.google.com/o/oauth2/auth",
            proxyUrl: "https://accounts.google.com/o/oauth2/postmessageRelay",
            redirectUri: "postmessage"
        },
        iframes: {
            sharebox: {params: {json: "&"}, url: ":socialhost:/:session_prefix:_/sharebox/dialog"},
            plus: {url: ":socialhost:/:session_prefix:_/widget/render/badge?usegapi=1"},
            ":socialhost:": "https://apis.google.com",
            ":im_socialhost:": "https://plus.googleapis.com",
            domains_suggest: {url: "https://domains.google.com/suggest/flow"},
            card: {
                params: {s: "#", userid: "&"},
                url: ":socialhost:/:session_prefix:_/hovercard/internalcard"
            },
            ":signuphost:": "https://plus.google.com",
            ":gplus_url:": "https://plus.google.com",
            plusone: {url: ":socialhost:/:session_prefix:_/+1/fastbutton?usegapi=1"},
            plus_share: {url: ":socialhost:/:session_prefix:_/+1/sharebutton?plusShare=true&usegapi=1"},
            plus_circle: {url: ":socialhost:/:session_prefix:_/widget/plus/circle?usegapi=1"},
            plus_followers: {url: ":socialhost:/_/im/_/widget/render/plus/followers?usegapi=1"},
            configurator: {url: ":socialhost:/:session_prefix:_/plusbuttonconfigurator?usegapi=1"},
            appcirclepicker: {url: ":socialhost:/:session_prefix:_/widget/render/appcirclepicker"},
            page: {url: ":socialhost:/:session_prefix:_/widget/render/page?usegapi=1"},
            person: {url: ":socialhost:/:session_prefix:_/widget/render/person?usegapi=1"},
            community: {url: ":ctx_socialhost:/:session_prefix::im_prefix:_/widget/render/community?usegapi=1"},
            follow: {url: ":socialhost:/:session_prefix:_/widget/render/follow?usegapi=1"},
            commentcount: {url: ":socialhost:/:session_prefix:_/widget/render/commentcount?usegapi=1"},
            comments: {url: ":socialhost:/:session_prefix:_/widget/render/comments?usegapi=1"},
            blogger: {url: ":socialhost:/:session_prefix:_/widget/render/blogger?usegapi=1"},
            youtube: {url: ":socialhost:/:session_prefix:_/widget/render/youtube?usegapi=1"},
            reportabuse: {url: ":socialhost:/:session_prefix:_/widget/render/reportabuse?usegapi=1"},
            additnow: {url: ":socialhost:/additnow/additnow.html"},
            appfinder: {url: "https://workspace.google.com/:session_prefix:marketplace/appfinder?usegapi=1"},
            ":source:": "1p"
        },
        poclient: {update_session: "google.updateSessionCallback"},
        "googleapis.config": {
            rpc: "/rpc",
            root: "https://content.googleapis.com",
            "root-1p": "https://clients6.google.com",
            useGapiForXd3: !0,
            xd3: "/static/proxy.html",
            auth: {useInterimAuth: !1}
        },
        report: {
            apis: ["iframes\\..*", "gadgets\\..*", "gapi\\.appcirclepicker\\..*", "gapi\\.client\\..*"],
            rate: 1E-4
        },
        client: {perApiBatch: !0}
    });

    /*

 SPDX-License-Identifier: Apache-2.0
*/
    var Bb, Hb, Jb, Kb, Mb;
    _.fb = function (a, b) {
        return _.aa[a] = b
    };
    _.gb = function (a, b) {
        if (Error.captureStackTrace) Error.captureStackTrace(this, _.gb); else {
            var c = Error().stack;
            c && (this.stack = c)
        }
        a && (this.message = String(a));
        void 0 !== b && (this.cause = b);
        this.WQ = !0
    };
    _.ib = function (a, b) {
        return 0 <= (0, _.hb)(a, b)
    };
    _.lb = function (a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    };
    _.mb = function (a, b, c) {
        for (var d in a) b.call(c, a[d], d, a)
    };
    _.nb = function (a, b) {
        for (var c in a) if (a[c] == b) return !0;
        return !1
    };
    _.ob = function () {
        var a = _.Ya.navigator;
        return a && (a = a.userAgent) ? a : ""
    };
    _.qb = function (a) {
        return _.pb(_.ob(), a)
    };
    _.rb = function () {
        return _.qb("Opera")
    };
    _.sb = function () {
        return _.qb("Trident") || _.qb("MSIE")
    };
    _.tb = function () {
        return _.qb("Firefox") || _.qb("FxiOS")
    };
    _.vb = function () {
        return _.qb("Safari") && !(_.ub() || _.qb("Coast") || _.rb() || _.qb("Edge") || _.qb("Edg/") || _.qb("OPR") || _.tb() || _.qb("Silk") || _.qb("Android"))
    };
    _.ub = function () {
        return (_.qb("Chrome") || _.qb("CriOS")) && !_.qb("Edge") || _.qb("Silk")
    };
    _.wb = function () {
        return _.qb("Android") && !(_.ub() || _.tb() || _.rb() || _.qb("Silk"))
    };
    _.zb = function (a, b) {
        if (void 0 !== a.tagName) {
            if ("script" === a.tagName.toLowerCase()) throw Error("q");
            if ("style" === a.tagName.toLowerCase()) throw Error("r");
        }
        a.innerHTML = _.yb(b)
    };
    Bb = function (a) {
        return new _.Ab(function (b) {
            return b.substr(0, a.length + 1).toLowerCase() === a + ":"
        })
    };
    _.Cb = function () {
        return _.qb("iPhone") && !_.qb("iPod") && !_.qb("iPad")
    };
    _.Db = function () {
        return _.Cb() || _.qb("iPad") || _.qb("iPod")
    };
    _.Eb = function (a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    };
    _.D = function (a, b) {
        a.prototype = (0, _.sa)(b.prototype);
        a.prototype.constructor = a;
        if (_.Ha) (0, _.Ha)(a, b); else for (var c in b) if ("prototype" != c) if (Object.defineProperties) {
            var d = Object.getOwnPropertyDescriptor(b, c);
            d && Object.defineProperty(a, c, d)
        } else a[c] = b[c];
        a.H = b.prototype
    };
    _.Fb = function (a) {
        var b = typeof a;
        return "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null"
    };
    _.Gb = function (a) {
        var b = _.Fb(a);
        return "array" == b || "object" == b && "number" == typeof a.length
    };
    Hb = 0;
    _.Ib = function (a) {
        return Object.prototype.hasOwnProperty.call(a, _.$a) && a[_.$a] || (a[_.$a] = ++Hb)
    };
    Jb = function (a, b, c) {
        return a.call.apply(a.bind, arguments)
    };
    Kb = function (a, b, c) {
        if (!a) throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function () {
                var e = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(e, d);
                return a.apply(b, e)
            }
        }
        return function () {
            return a.apply(b, arguments)
        }
    };
    _.J = function (a, b, c) {
        _.J = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? Jb : Kb;
        return _.J.apply(null, arguments)
    };
    Mb = function (a) {
        return a
    };
    _.ab(_.gb, Error);
    _.gb.prototype.name = "CustomError";
    var Nb;
    _.hb = Array.prototype.indexOf ? function (a, b) {
        return Array.prototype.indexOf.call(a, b, void 0)
    } : function (a, b) {
        if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
        for (var c = 0; c < a.length; c++) if (c in a && a[c] === b) return c;
        return -1
    };
    _.Ob = Array.prototype.lastIndexOf ? function (a, b) {
        return Array.prototype.lastIndexOf.call(a, b, a.length - 1)
    } : function (a, b) {
        var c = a.length - 1;
        0 > c && (c = Math.max(0, a.length + c));
        if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.lastIndexOf(b, c);
        for (; 0 <= c; c--) if (c in a && a[c] === b) return c;
        return -1
    };
    _.Pb = Array.prototype.forEach ? function (a, b, c) {
        Array.prototype.forEach.call(a, b, c)
    } : function (a, b, c) {
        for (var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a)
    };
    _.Qb = Array.prototype.map ? function (a, b) {
        return Array.prototype.map.call(a, b, void 0)
    } : function (a, b) {
        for (var c = a.length, d = Array(c), e = "string" === typeof a ? a.split("") : a, f = 0; f < c; f++) f in e && (d[f] = b.call(void 0, e[f], f, a));
        return d
    };
    _.Rb = Array.prototype.some ? function (a, b, c) {
        return Array.prototype.some.call(a, b, c)
    } : function (a, b, c) {
        for (var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++) if (f in e && b.call(c, e[f], f, a)) return !0;
        return !1
    };
    _.Sb = Array.prototype.every ? function (a, b, c) {
        return Array.prototype.every.call(a, b, c)
    } : function (a, b, c) {
        for (var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++) if (f in e && !b.call(c, e[f], f, a)) return !1;
        return !0
    };
    var Tb, Ub = function () {
        if (void 0 === Tb) {
            var a = null, b = _.Ya.trustedTypes;
            if (b && b.createPolicy) try {
                a = b.createPolicy("gapi#html", {createHTML: Mb, createScript: Mb, createScriptURL: Mb})
            } catch (c) {
                _.Ya.console && _.Ya.console.error(c.message)
            }
            Tb = a
        }
        return Tb
    };
    var Xb, Wb;
    _.Yb = function (a, b) {
        this.BS = a === Wb && b || "";
        this.GV = Xb
    };
    _.Yb.prototype.yi = !0;
    _.Yb.prototype.Cg = function () {
        return this.BS
    };
    _.Zb = function (a) {
        return a instanceof _.Yb && a.constructor === _.Yb && a.GV === Xb ? a.BS : "type_error:Const"
    };
    _.$b = function (a) {
        return new _.Yb(Wb, a)
    };
    Xb = {};
    Wb = {};
    var ac;
    _.bc = function (a, b) {
        this.ZF = b === ac ? a : ""
    };
    _.bc.prototype.toString = function () {
        return this.ZF + ""
    };
    _.bc.prototype.yi = !0;
    _.bc.prototype.Cg = function () {
        return this.ZF.toString()
    };
    _.dc = function (a) {
        return _.cc(a).toString()
    };
    _.cc = function (a) {
        if (a instanceof _.bc && a.constructor === _.bc) return a.ZF;
        _.Fb(a);
        return "type_error:TrustedResourceUrl"
    };
    _.hc = function (a) {
        return _.ec(_.Zb(a))
    };
    ac = {};
    _.ec = function (a) {
        var b = Ub();
        a = b ? b.createScriptURL(a) : a;
        return new _.bc(a, ac)
    };
    var nc, oc, pc, qc, rc, sc, mc, uc;
    _.ic = function (a, b) {
        return 0 == a.lastIndexOf(b, 0)
    };
    _.jc = function (a) {
        return /^[\s\xa0]*$/.test(a)
    };
    _.lc = String.prototype.trim ? function (a) {
        return a.trim()
    } : function (a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    };
    _.tc = function (a) {
        if (!mc.test(a)) return a;
        -1 != a.indexOf("&") && (a = a.replace(nc, "&amp;"));
        -1 != a.indexOf("<") && (a = a.replace(oc, "&lt;"));
        -1 != a.indexOf(">") && (a = a.replace(pc, "&gt;"));
        -1 != a.indexOf('"') && (a = a.replace(qc, "&quot;"));
        -1 != a.indexOf("'") && (a = a.replace(rc, "&#39;"));
        -1 != a.indexOf("\x00") && (a = a.replace(sc, "&#0;"));
        return a
    };
    nc = /&/g;
    oc = /</g;
    pc = />/g;
    qc = /"/g;
    rc = /'/g;
    sc = /\x00/g;
    mc = /[\x00&<>"']/;
    _.pb = function (a, b) {
        return -1 != a.indexOf(b)
    };
    _.vc = function (a, b) {
        var c = 0;
        a = (0, _.lc)(String(a)).split(".");
        b = (0, _.lc)(String(b)).split(".");
        for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
            var f = a[e] || "", h = b[e] || "";
            do {
                f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
                h = /(\d*)(\D*)(.*)/.exec(h) || ["", "", "", ""];
                if (0 == f[0].length && 0 == h[0].length) break;
                c = uc(0 == f[1].length ? 0 : parseInt(f[1], 10), 0 == h[1].length ? 0 : parseInt(h[1], 10)) || uc(0 == f[2].length, 0 == h[2].length) || uc(f[2], h[2]);
                f = f[3];
                h = h[3]
            } while (0 == c)
        }
        return c
    };
    uc = function (a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    };
    var zc, Bc, wc;
    _.xc = function (a, b) {
        this.YF = b === wc ? a : ""
    };
    _.xc.prototype.toString = function () {
        return this.YF.toString()
    };
    _.xc.prototype.yi = !0;
    _.xc.prototype.Cg = function () {
        return this.YF.toString()
    };
    _.yc = function (a) {
        if (a instanceof _.xc && a.constructor === _.xc) return a.YF;
        _.Fb(a);
        return "type_error:SafeUrl"
    };
    zc = /^data:(.*);base64,[a-z0-9+\/]+=*$/i;
    Bc = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
    _.Dc = function (a) {
        if (a instanceof _.xc) return a;
        a = "object" == typeof a && a.yi ? a.Cg() : String(a);
        Bc.test(a) ? a = _.Cc(a) : (a = String(a).replace(/(%0A|%0D)/g, ""), a = a.match(zc) ? _.Cc(a) : null);
        return a
    };
    _.Ec = function (a) {
        if (a instanceof _.xc) return a;
        a = "object" == typeof a && a.yi ? a.Cg() : String(a);
        Bc.test(a) || (a = "about:invalid#zClosurez");
        return _.Cc(a)
    };
    wc = {};
    _.Cc = function (a) {
        return new _.xc(a, wc)
    };
    _.Fc = _.Cc("about:invalid#zClosurez");
    _.Gc = {};
    _.Hc = function (a, b) {
        this.XF = b === _.Gc ? a : "";
        this.yi = !0
    };
    _.Hc.prototype.Cg = function () {
        return this.XF
    };
    _.Hc.prototype.toString = function () {
        return this.XF.toString()
    };
    _.Ic = new _.Hc("", _.Gc);
    _.Jc = RegExp("^[-,.\"'%_!#/ a-zA-Z0-9\\[\\]]+$");
    _.Kc = RegExp("\\b(url\\([ \t\n]*)('[ -&(-\\[\\]-~]*'|\"[ !#-\\[\\]-~]*\"|[!#-&*-\\[\\]-~]*)([ \t\n]*\\))", "g");
    _.Lc = RegExp("\\b(calc|cubic-bezier|fit-content|hsl|hsla|linear-gradient|matrix|minmax|radial-gradient|repeat|rgb|rgba|(rotate|scale|translate)(X|Y|Z|3d)?|steps|var)\\([-+*/0-9a-zA-Z.%#\\[\\], ]+\\)", "g");
    _.Nc = {};
    _.Oc = function (a, b) {
        this.WF = b === _.Nc ? a : "";
        this.yi = !0
    };
    _.Oc.prototype.toString = function () {
        return this.WF.toString()
    };
    _.Qc = function (a) {
        a = _.Zb(a);
        return 0 === a.length ? Pc : new _.Oc(a, _.Nc)
    };
    _.Oc.prototype.Cg = function () {
        return this.WF
    };
    var Pc = new _.Oc("", _.Nc);
    var Rc;
    Rc = {};
    _.Sc = function (a, b) {
        this.VF = b === Rc ? a : "";
        this.yi = !0
    };
    _.Sc.prototype.Cg = function () {
        return this.VF.toString()
    };
    _.Sc.prototype.toString = function () {
        return this.VF.toString()
    };
    _.yb = function (a) {
        if (a instanceof _.Sc && a.constructor === _.Sc) return a.VF;
        _.Fb(a);
        return "type_error:SafeHtml"
    };
    _.Uc = function (a) {
        return a instanceof _.Sc ? a : _.Tc(_.tc("object" == typeof a && a.yi ? a.Cg() : String(a)))
    };
    _.Tc = function (a) {
        var b = Ub();
        a = b ? b.createHTML(a) : a;
        return new _.Sc(a, Rc)
    };
    _.Vc = new _.Sc(_.Ya.trustedTypes && _.Ya.trustedTypes.emptyHTML || "", Rc);
    _.Wc = _.Tc("<br>");
    var Xc;
    try {
        new URL("s://g"), Xc = !0
    } catch (a) {
        Xc = !1
    }
    _.Yc = Xc;
    _.Ab = function (a) {
        this.Gi = a
    };
    _.Zc = [Bb("data"), Bb("http"), Bb("https"), Bb("mailto"), Bb("ftp"), new _.Ab(function (a) {
        return /^[^:]*([/?#]|$)/.test(a)
    })];
    var $c = function (a) {
        $c[" "](a);
        return a
    };
    $c[" "] = function () {
    };
    _.ad = function (a, b) {
        try {
            return $c(a[b]), !0
        } catch (c) {
        }
        return !1
    };
    var qd, rd, wd;
    _.bd = _.rb();
    _.cd = _.sb();
    _.dd = _.qb("Edge");
    _.ed = _.dd || _.cd;
    _.fd = _.qb("Gecko") && !(_.pb(_.ob().toLowerCase(), "webkit") && !_.qb("Edge")) && !(_.qb("Trident") || _.qb("MSIE")) && !_.qb("Edge");
    _.gd = _.pb(_.ob().toLowerCase(), "webkit") && !_.qb("Edge");
    _.hd = _.gd && _.qb("Mobile");
    _.id = _.qb("Macintosh");
    _.jd = _.qb("Windows");
    _.kd = _.qb("Linux") || _.qb("CrOS");
    _.ld = _.qb("Android");
    _.md = _.Cb();
    _.nd = _.qb("iPad");
    _.od = _.qb("iPod");
    _.pd = _.Db();
    qd = function () {
        var a = _.Ya.document;
        return a ? a.documentMode : void 0
    };
    a:{
        var sd = "", td = function () {
            var a = _.ob();
            if (_.fd) return /rv:([^\);]+)(\)|;)/.exec(a);
            if (_.dd) return /Edge\/([\d\.]+)/.exec(a);
            if (_.cd) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
            if (_.gd) return /WebKit\/(\S+)/.exec(a);
            if (_.bd) return /(?:Version)[ \/]?(\S+)/.exec(a)
        }();
        td && (sd = td ? td[1] : "");
        if (_.cd) {
            var ud = qd();
            if (null != ud && ud > parseFloat(sd)) {
                rd = String(ud);
                break a
            }
        }
        rd = sd
    }
    _.vd = rd;
    if (_.Ya.document && _.cd) {
        var xd = qd();
        wd = xd ? xd : parseInt(_.vd, 10) || void 0
    } else wd = void 0;
    _.yd = wd;
    try {
        (new self.OffscreenCanvas(0, 0)).getContext("2d")
    } catch (a) {
    }
    _.zd = _.cd || _.gd;
    _.Ad = function (a) {
        var b = !1, c;
        return function () {
            b || (c = a(), b = !0);
            return c
        }
    };
    var Bd, Fd;
    Bd = _.Ad(function () {
        var a = document.createElement("div"), b = document.createElement("div");
        b.appendChild(document.createElement("div"));
        a.appendChild(b);
        b = a.firstChild.firstChild;
        a.innerHTML = _.yb(_.Vc);
        return !b.parentElement
    });
    _.Cd = function (a, b) {
        if (Bd()) for (; a.lastChild;) a.removeChild(a.lastChild);
        a.innerHTML = _.yb(b)
    };
    _.Dd = function (a, b) {
        b = b instanceof _.xc ? b : _.Ec(b);
        a.href = _.yc(b)
    };
    _.Ed = function (a, b, c, d) {
        a = a instanceof _.xc ? a : _.Ec(a);
        b = b || _.Ya;
        c = c instanceof _.Yb ? _.Zb(c) : c || "";
        return void 0 !== d ? b.open(_.yc(a), c, d) : b.open(_.yc(a), c)
    };
    Fd = /^[\w+/_-]+[=]{0,2}$/;
    _.Gd = function (a, b) {
        b = (b || _.Ya).document;
        return b.querySelector ? (a = b.querySelector(a)) && (a = a.nonce || a.getAttribute("nonce")) && Fd.test(a) ? a : "" : ""
    };
    _.Hd = String.prototype.repeat ? function (a, b) {
        return a.repeat(b)
    } : function (a, b) {
        return Array(b + 1).join(a)
    };
    _.Id = 2147483648 * Math.random() | 0;
    var Nd, Rd;
    _.Ld = function (a) {
        return a ? new _.Jd(_.Kd(a)) : Nb || (Nb = new _.Jd)
    };
    _.Md = function (a, b, c, d) {
        a = d || a;
        b = b && "*" != b ? String(b).toUpperCase() : "";
        if (a.querySelectorAll && a.querySelector && (b || c)) return a.querySelectorAll(b + (c ? "." + c : ""));
        if (c && a.getElementsByClassName) {
            a = a.getElementsByClassName(c);
            if (b) {
                d = {};
                for (var e = 0, f = 0, h; h = a[f]; f++) b == h.nodeName && (d[e++] = h);
                d.length = e;
                return d
            }
            return a
        }
        a = a.getElementsByTagName(b || "*");
        if (c) {
            d = {};
            for (f = e = 0; h = a[f]; f++) b = h.className, "function" == typeof b.split && _.ib(b.split(/\s+/), c) && (d[e++] = h);
            d.length = e;
            return d
        }
        return a
    };
    _.Od = function (a, b) {
        _.mb(b, function (c, d) {
            c && "object" == typeof c && c.yi && (c = c.Cg());
            "style" == d ? a.style.cssText = c : "class" == d ? a.className = c : "for" == d ? a.htmlFor = c : Nd.hasOwnProperty(d) ? a.setAttribute(Nd[d], c) : _.ic(d, "aria-") || _.ic(d, "data-") ? a.setAttribute(d, c) : a[d] = c
        })
    };
    Nd = {
        cellpadding: "cellPadding",
        cellspacing: "cellSpacing",
        colspan: "colSpan",
        frameborder: "frameBorder",
        height: "height",
        maxlength: "maxLength",
        nonce: "nonce",
        role: "role",
        rowspan: "rowSpan",
        type: "type",
        usemap: "useMap",
        valign: "vAlign",
        width: "width"
    };
    _.Pd = function (a) {
        return a ? a.parentWindow || a.defaultView : window
    };
    _.Sd = function (a, b) {
        var c = b[1], d = _.Qd(a, String(b[0]));
        c && ("string" === typeof c ? d.className = c : Array.isArray(c) ? d.className = c.join(" ") : _.Od(d, c));
        2 < b.length && Rd(a, d, b, 2);
        return d
    };
    Rd = function (a, b, c, d) {
        function e(k) {
            k && b.appendChild("string" === typeof k ? a.createTextNode(k) : k)
        }

        for (; d < c.length; d++) {
            var f = c[d];
            if (!_.Gb(f) || _.Eb(f) && 0 < f.nodeType) e(f); else {
                a:{
                    if (f && "number" == typeof f.length) {
                        if (_.Eb(f)) {
                            var h = "function" == typeof f.item || "string" == typeof f.item;
                            break a
                        }
                        if ("function" === typeof f) {
                            h = "function" == typeof f.item;
                            break a
                        }
                    }
                    h = !1
                }
                _.Pb(h ? _.lb(f) : f, e)
            }
        }
    };
    _.Ud = function (a) {
        return _.Qd(document, a)
    };
    _.Qd = function (a, b) {
        b = String(b);
        "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
        return a.createElement(b)
    };
    _.Vd = function (a) {
        if (1 != a.nodeType) return !1;
        switch (a.tagName) {
            case "APPLET":
            case "AREA":
            case "BASE":
            case "BR":
            case "COL":
            case "COMMAND":
            case "EMBED":
            case "FRAME":
            case "HR":
            case "IMG":
            case "INPUT":
            case "IFRAME":
            case "ISINDEX":
            case "KEYGEN":
            case "LINK":
            case "NOFRAMES":
            case "NOSCRIPT":
            case "META":
            case "OBJECT":
            case "PARAM":
            case "SCRIPT":
            case "SOURCE":
            case "STYLE":
            case "TRACK":
            case "WBR":
                return !1
        }
        return !0
    };
    _.Wd = function (a, b) {
        Rd(_.Kd(a), a, arguments, 1)
    };
    _.Xd = function (a) {
        for (var b; b = a.firstChild;) a.removeChild(b)
    };
    _.Yd = function (a, b) {
        b.parentNode && b.parentNode.insertBefore(a, b)
    };
    _.Zd = function (a) {
        return a && a.parentNode ? a.parentNode.removeChild(a) : null
    };
    _.$d = function (a) {
        return void 0 != a.children ? a.children : Array.prototype.filter.call(a.childNodes, function (b) {
            return 1 == b.nodeType
        })
    };
    _.ae = function (a) {
        return _.Eb(a) && 1 == a.nodeType
    };
    _.be = function (a, b) {
        if (!a || !b) return !1;
        if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
        if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
        for (; b && a != b;) b = b.parentNode;
        return b == a
    };
    _.Kd = function (a) {
        return 9 == a.nodeType ? a : a.ownerDocument || a.document
    };
    _.ce = function (a, b) {
        if ("textContent" in a) a.textContent = b; else if (3 == a.nodeType) a.data = String(b); else if (a.firstChild && 3 == a.firstChild.nodeType) {
            for (; a.lastChild != a.firstChild;) a.removeChild(a.lastChild);
            a.firstChild.data = String(b)
        } else _.Xd(a), a.appendChild(_.Kd(a).createTextNode(String(b)))
    };
    _.Jd = function (a) {
        this.ub = a || _.Ya.document || document
    };
    _.g = _.Jd.prototype;
    _.g.Fa = _.Ld;
    _.g.aH = _.ba(0);
    _.g.lb = function () {
        return this.ub
    };
    _.g.N = _.ba(1);
    _.g.getElementsByTagName = function (a, b) {
        return (b || this.ub).getElementsByTagName(String(a))
    };
    _.g.na = function (a, b, c) {
        return _.Sd(this.ub, arguments)
    };
    _.g.createElement = function (a) {
        return _.Qd(this.ub, a)
    };
    _.g.createTextNode = function (a) {
        return this.ub.createTextNode(String(a))
    };
    _.g.getWindow = function () {
        var a = this.ub;
        return a.parentWindow || a.defaultView
    };
    _.g.appendChild = function (a, b) {
        a.appendChild(b)
    };
    _.g.append = _.Wd;
    _.g.canHaveChildren = _.Vd;
    _.g.Ud = _.Xd;
    _.g.KO = _.Yd;
    _.g.removeNode = _.Zd;
    _.g.YC = _.$d;
    _.g.isElement = _.ae;
    _.g.contains = _.be;
    _.g.Ei = _.ba(2);
    /*
 gapi.loader.OBJECT_CREATE_TEST_OVERRIDE &&*/
    _.de = window;
    _.ee = document;
    _.fe = _.de.location;
    _.ge = /\[native code\]/;
    _.he = function (a, b, c) {
        return a[b] = a[b] || c
    };
    _.ie = function () {
        var a;
        if ((a = Object.create) && _.ge.test(a)) a = a(null); else {
            a = {};
            for (var b in a) a[b] = void 0
        }
        return a
    };
    _.je = function (a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    };
    _.ke = function (a, b) {
        a = a || {};
        for (var c in a) _.je(a, c) && (b[c] = a[c])
    };
    _.le = _.he(_.de, "gapi", {});
    _.me = function (a, b, c) {
        var d = new RegExp("([#].*&|[#])" + b + "=([^&#]*)", "g");
        b = new RegExp("([?#].*&|[?#])" + b + "=([^&#]*)", "g");
        if (a = a && (d.exec(a) || b.exec(a))) try {
            c = decodeURIComponent(a[2])
        } catch (e) {
        }
        return c
    };
    _.ne = new RegExp(/^/.source + /([a-zA-Z][-+.a-zA-Z0-9]*:)?/.source + /(\/\/[^\/?#]*)?/.source + /([^?#]*)?/.source + /(\?([^#]*))?/.source + /(#((#|[^#])*))?/.source + /$/.source);
    _.oe = new RegExp(/(%([^0-9a-fA-F%]|[0-9a-fA-F]([^0-9a-fA-F%])?)?)*/.source + /%($|[^0-9a-fA-F]|[0-9a-fA-F]($|[^0-9a-fA-F]))/.source, "g");
    _.pe = new RegExp(/\/?\??#?/.source + "(" + /[\/?#]/i.source + "|" + /[\uD800-\uDBFF]/i.source + "|" + /%[c-f][0-9a-f](%[89ab][0-9a-f]){0,2}(%[89ab]?)?/i.source + "|" + /%[0-9a-f]?/i.source + ")$", "i");
    _.re = function (a, b, c) {
        _.qe(a, b, c, "add", "at")
    };
    _.qe = function (a, b, c, d, e) {
        if (a[d + "EventListener"]) a[d + "EventListener"](b, c, !1); else if (a[e + "tachEvent"]) a[e + "tachEvent"]("on" + b, c)
    };
    _.te = {};
    _.te = _.he(_.de, "___jsl", _.ie());
    _.he(_.te, "I", 0);
    _.he(_.te, "hel", 10);
    var ue, ve, we, xe, ye, ze, Ae;
    ue = function (a) {
        var b = window.___jsl = window.___jsl || {};
        b[a] = b[a] || [];
        return b[a]
    };
    ve = function (a) {
        var b = window.___jsl = window.___jsl || {};
        b.cfg = !a && b.cfg || {};
        return b.cfg
    };
    we = function (a) {
        return "object" === typeof a && /\[native code\]/.test(a.push)
    };
    xe = function (a, b, c) {
        if (b && "object" === typeof b) for (var d in b) !Object.prototype.hasOwnProperty.call(b, d) || c && "___goc" === d && "undefined" === typeof b[d] || (a[d] && b[d] && "object" === typeof a[d] && "object" === typeof b[d] && !we(a[d]) && !we(b[d]) ? xe(a[d], b[d]) : b[d] && "object" === typeof b[d] ? (a[d] = we(b[d]) ? [] : {}, xe(a[d], b[d])) : a[d] = b[d])
    };
    ye = function (a) {
        if (a && !/^\s+$/.test(a)) {
            for (; 0 == a.charCodeAt(a.length - 1);) a = a.substring(0, a.length - 1);
            try {
                var b = window.JSON.parse(a)
            } catch (c) {
            }
            if ("object" === typeof b) return b;
            try {
                b = (new Function("return (" + a + "\n)"))()
            } catch (c) {
            }
            if ("object" === typeof b) return b;
            try {
                b = (new Function("return ({" + a + "\n})"))()
            } catch (c) {
            }
            return "object" === typeof b ? b : {}
        }
    };
    ze = function (a, b) {
        var c = {___goc: void 0};
        a.length && a[a.length - 1] && Object.hasOwnProperty.call(a[a.length - 1], "___goc") && "undefined" === typeof a[a.length - 1].___goc && (c = a.pop());
        xe(c, b);
        a.push(c)
    };
    Ae = function (a) {
        ve(!0);
        var b = window.___gcfg, c = ue("cu"), d = window.___gu;
        b && b !== d && (ze(c, b), window.___gu = b);
        b = ue("cu");
        var e = document.scripts || document.getElementsByTagName("script") || [];
        d = [];
        var f = [];
        f.push.apply(f, ue("us"));
        for (var h = 0; h < e.length; ++h) for (var k = e[h], l = 0; l < f.length; ++l) k.src && 0 == k.src.indexOf(f[l]) && d.push(k);
        0 == d.length && 0 < e.length && e[e.length - 1].src && d.push(e[e.length - 1]);
        for (e = 0; e < d.length; ++e) d[e].getAttribute("gapi_processed") || (d[e].setAttribute("gapi_processed", !0), (f = d[e]) ? (h =
            f.nodeType, f = 3 == h || 4 == h ? f.nodeValue : f.textContent || "") : f = void 0, (f = ye(f)) && b.push(f));
        a && ze(c, a);
        d = ue("cd");
        a = 0;
        for (b = d.length; a < b; ++a) xe(ve(), d[a], !0);
        d = ue("ci");
        a = 0;
        for (b = d.length; a < b; ++a) xe(ve(), d[a], !0);
        a = 0;
        for (b = c.length; a < b; ++a) xe(ve(), c[a], !0)
    };
    _.Be = function (a, b) {
        var c = ve();
        if (!a) return c;
        a = a.split("/");
        for (var d = 0, e = a.length; c && "object" === typeof c && d < e; ++d) c = c[a[d]];
        return d === a.length && void 0 !== c ? c : b
    };
    _.Ce = function (a, b) {
        var c;
        if ("string" === typeof a) {
            var d = c = {};
            a = a.split("/");
            for (var e = 0, f = a.length; e < f - 1; ++e) {
                var h = {};
                d = d[a[e]] = h
            }
            d[a[e]] = b
        } else c = a;
        Ae(c)
    };
    var De = function () {
        var a = window.__GOOGLEAPIS;
        a && (a.googleapis && !a["googleapis.config"] && (a["googleapis.config"] = a.googleapis), _.he(_.te, "ci", []).push(a), window.__GOOGLEAPIS = void 0)
    };
    De && De();
    Ae();
    _.u("gapi.config.get", _.Be);
    _.u("gapi.config.update", _.Ce);

    var Ke, Le, Me, Ne, Oe, Pe, Qe, Re, Se, Te, Ue, Ve, We, Xe, Ye, Ze, $e, af, bf, cf, df, ef, ff, gf, hf, jf, kf, lf,
        mf, nf, of, rf, sf;
    Me = void 0;
    Ne = function (a) {
        try {
            return _.Ya.JSON.parse.call(_.Ya.JSON, a)
        } catch (b) {
            return !1
        }
    };
    Oe = function (a) {
        return Object.prototype.toString.call(a)
    };
    Pe = Oe(0);
    Qe = Oe(new Date(0));
    Re = Oe(!0);
    Se = Oe("");
    Te = Oe({});
    Ue = Oe([]);
    Ve = function (a, b) {
        if (b) for (var c = 0, d = b.length; c < d; ++c) if (a === b[c]) throw new TypeError("Converting circular structure to JSON");
        d = typeof a;
        if ("undefined" !== d) {
            c = Array.prototype.slice.call(b || [], 0);
            c[c.length] = a;
            b = [];
            var e = Oe(a);
            if (null != a && "function" === typeof a.toJSON && (Object.prototype.hasOwnProperty.call(a, "toJSON") || (e !== Ue || a.constructor !== Array && a.constructor !== Object) && (e !== Te || a.constructor !== Array && a.constructor !== Object) && e !== Se && e !== Pe && e !== Re && e !== Qe)) return Ve(a.toJSON.call(a), c);
            if (null ==
                a) b[b.length] = "null"; else if (e === Pe) a = Number(a), isNaN(a) || isNaN(a - a) ? a = "null" : -0 === a && 0 > 1 / a && (a = "-0"), b[b.length] = String(a); else if (e === Re) b[b.length] = String(!!Number(a)); else {
                if (e === Qe) return Ve(a.toISOString.call(a), c);
                if (e === Ue && Oe(a.length) === Pe) {
                    b[b.length] = "[";
                    var f = 0;
                    for (d = Number(a.length) >> 0; f < d; ++f) f && (b[b.length] = ","), b[b.length] = Ve(a[f], c) || "null";
                    b[b.length] = "]"
                } else if (e == Se && Oe(a.length) === Pe) {
                    b[b.length] = '"';
                    f = 0;
                    for (c = Number(a.length) >> 0; f < c; ++f) d = String.prototype.charAt.call(a, f),
                        e = String.prototype.charCodeAt.call(a, f), b[b.length] = "\b" === d ? "\\b" : "\f" === d ? "\\f" : "\n" === d ? "\\n" : "\r" === d ? "\\r" : "\t" === d ? "\\t" : "\\" === d || '"' === d ? "\\" + d : 31 >= e ? "\\u" + (e + 65536).toString(16).substr(1) : 32 <= e && 65535 >= e ? d : "\ufffd";
                    b[b.length] = '"'
                } else if ("object" === d) {
                    b[b.length] = "{";
                    d = 0;
                    for (f in a) Object.prototype.hasOwnProperty.call(a, f) && (e = Ve(a[f], c), void 0 !== e && (d++ && (b[b.length] = ","), b[b.length] = Ve(f), b[b.length] = ":", b[b.length] = e));
                    b[b.length] = "}"
                } else return
            }
            return b.join("")
        }
    };
    We = /[\0-\x07\x0b\x0e-\x1f]/;
    Xe = /^([^"]*"([^\\"]|\\.)*")*[^"]*"([^"\\]|\\.)*[\0-\x1f]/;
    Ye = /^([^"]*"([^\\"]|\\.)*")*[^"]*"([^"\\]|\\.)*\\[^\\\/"bfnrtu]/;
    Ze = /^([^"]*"([^\\"]|\\.)*")*[^"]*"([^"\\]|\\.)*\\u([0-9a-fA-F]{0,3}[^0-9a-fA-F])/;
    $e = /"([^\0-\x1f\\"]|\\[\\\/"bfnrt]|\\u[0-9a-fA-F]{4})*"/g;
    af = /-?(0|[1-9][0-9]*)(\.[0-9]+)?([eE][-+]?[0-9]+)?/g;
    bf = /[ \t\n\r]+/g;
    cf = /[^"]:/;
    df = /""/g;
    ef = /true|false|null/g;
    ff = /00/;
    gf = /[\{]([^0\}]|0[^:])/;
    hf = /(^|\[)[,:]|[,:](\]|\}|[,:]|$)/;
    jf = /[^\[,:][\[\{]/;
    kf = /^(\{|\}|\[|\]|,|:|0)+/;
    lf = /\u2028/g;
    mf = /\u2029/g;
    nf = function (a) {
        a = String(a);
        if (We.test(a) || Xe.test(a) || Ye.test(a) || Ze.test(a)) return !1;
        var b = a.replace($e, '""');
        b = b.replace(af, "0");
        b = b.replace(bf, "");
        if (cf.test(b)) return !1;
        b = b.replace(df, "0");
        b = b.replace(ef, "0");
        if (ff.test(b) || gf.test(b) || hf.test(b) || jf.test(b) || !b || (b = b.replace(kf, ""))) return !1;
        a = a.replace(lf, "\\u2028").replace(mf, "\\u2029");
        b = void 0;
        try {
            b = Me ? [Ne(a)] : eval("(function (var_args) {\n  return Array.prototype.slice.call(arguments, 0);\n})(\n" + a + "\n)")
        } catch (c) {
            return !1
        }
        return b && 1 ===
        b.length ? b[0] : !1
    };
    of = function () {
        var a = ((_.Ya.document || {}).scripts || []).length;
        if ((void 0 === Ke || void 0 === Me || Le !== a) && -1 !== Le) {
            Ke = Me = !1;
            Le = -1;
            try {
                try {
                    Me = !!_.Ya.JSON && '{"a":[3,true,"1970-01-01T00:00:00.000Z"]}' === _.Ya.JSON.stringify.call(_.Ya.JSON, {
                        a: [3, !0, new Date(0)],
                        c: function () {
                        }
                    }) && !0 === Ne("true") && 3 === Ne('[{"a":3}]')[0].a
                } catch (b) {
                }
                Ke = Me && !Ne("[00]") && !Ne('"\u0007"') && !Ne('"\\0"') && !Ne('"\\v"')
            } finally {
                Le = a
            }
        }
    };
    _.pf = function (a) {
        if (-1 === Le) return !1;
        of();
        return (Ke ? Ne : nf)(a)
    };
    _.qf = function (a) {
        if (-1 !== Le) return of(), Me ? _.Ya.JSON.stringify.call(_.Ya.JSON, a) : Ve(a)
    };
    rf = !Date.prototype.toISOString || "function" !== typeof Date.prototype.toISOString || "1970-01-01T00:00:00.000Z" !== (new Date(0)).toISOString();
    sf = function () {
        var a = Date.prototype.getUTCFullYear.call(this);
        return [0 > a ? "-" + String(1E6 - a).substr(1) : 9999 >= a ? String(1E4 + a).substr(1) : "+" + String(1E6 + a).substr(1), "-", String(101 + Date.prototype.getUTCMonth.call(this)).substr(1), "-", String(100 + Date.prototype.getUTCDate.call(this)).substr(1), "T", String(100 + Date.prototype.getUTCHours.call(this)).substr(1), ":", String(100 + Date.prototype.getUTCMinutes.call(this)).substr(1), ":", String(100 + Date.prototype.getUTCSeconds.call(this)).substr(1), ".", String(1E3 + Date.prototype.getUTCMilliseconds.call(this)).substr(1),
            "Z"].join("")
    };
    Date.prototype.toISOString = rf ? sf : Date.prototype.toISOString;

    var jg = function () {
        this.blockSize = -1
    };
    var kg = function () {
        this.blockSize = -1;
        this.blockSize = 64;
        this.Gc = [];
        this.HB = [];
        this.QV = [];
        this.Ry = [];
        this.Ry[0] = 128;
        for (var a = 1; a < this.blockSize; ++a) this.Ry[a] = 0;
        this.yA = this.kp = 0;
        this.reset()
    };
    _.ab(kg, jg);
    kg.prototype.reset = function () {
        this.Gc[0] = 1732584193;
        this.Gc[1] = 4023233417;
        this.Gc[2] = 2562383102;
        this.Gc[3] = 271733878;
        this.Gc[4] = 3285377520;
        this.yA = this.kp = 0
    };
    var lg = function (a, b, c) {
        c || (c = 0);
        var d = a.QV;
        if ("string" === typeof b) for (var e = 0; 16 > e; e++) d[e] = b.charCodeAt(c) << 24 | b.charCodeAt(c + 1) << 16 | b.charCodeAt(c + 2) << 8 | b.charCodeAt(c + 3), c += 4; else for (e = 0; 16 > e; e++) d[e] = b[c] << 24 | b[c + 1] << 16 | b[c + 2] << 8 | b[c + 3], c += 4;
        for (e = 16; 80 > e; e++) {
            var f = d[e - 3] ^ d[e - 8] ^ d[e - 14] ^ d[e - 16];
            d[e] = (f << 1 | f >>> 31) & 4294967295
        }
        b = a.Gc[0];
        c = a.Gc[1];
        var h = a.Gc[2], k = a.Gc[3], l = a.Gc[4];
        for (e = 0; 80 > e; e++) {
            if (40 > e) if (20 > e) {
                f = k ^ c & (h ^ k);
                var m = 1518500249
            } else f = c ^ h ^ k, m = 1859775393; else 60 > e ? (f = c & h | k & (c | h),
                m = 2400959708) : (f = c ^ h ^ k, m = 3395469782);
            f = (b << 5 | b >>> 27) + f + l + m + d[e] & 4294967295;
            l = k;
            k = h;
            h = (c << 30 | c >>> 2) & 4294967295;
            c = b;
            b = f
        }
        a.Gc[0] = a.Gc[0] + b & 4294967295;
        a.Gc[1] = a.Gc[1] + c & 4294967295;
        a.Gc[2] = a.Gc[2] + h & 4294967295;
        a.Gc[3] = a.Gc[3] + k & 4294967295;
        a.Gc[4] = a.Gc[4] + l & 4294967295
    };
    kg.prototype.update = function (a, b) {
        if (null != a) {
            void 0 === b && (b = a.length);
            for (var c = b - this.blockSize, d = 0, e = this.HB, f = this.kp; d < b;) {
                if (0 == f) for (; d <= c;) lg(this, a, d), d += this.blockSize;
                if ("string" === typeof a) for (; d < b;) {
                    if (e[f] = a.charCodeAt(d), ++f, ++d, f == this.blockSize) {
                        lg(this, e);
                        f = 0;
                        break
                    }
                } else for (; d < b;) if (e[f] = a[d], ++f, ++d, f == this.blockSize) {
                    lg(this, e);
                    f = 0;
                    break
                }
            }
            this.kp = f;
            this.yA += b
        }
    };
    kg.prototype.digest = function () {
        var a = [], b = 8 * this.yA;
        56 > this.kp ? this.update(this.Ry, 56 - this.kp) : this.update(this.Ry, this.blockSize - (this.kp - 56));
        for (var c = this.blockSize - 1; 56 <= c; c--) this.HB[c] = b & 255, b /= 256;
        lg(this, this.HB);
        for (c = b = 0; 5 > c; c++) for (var d = 24; 0 <= d; d -= 8) a[b] = this.Gc[c] >> d & 255, ++b;
        return a
    };
    _.mg = function () {
        this.yI = new kg
    };
    _.g = _.mg.prototype;
    _.g.reset = function () {
        this.yI.reset()
    };
    _.g.WS = function (a) {
        this.yI.update(a)
    };
    _.g.GL = function () {
        return this.yI.digest()
    };
    _.g.Du = function (a) {
        a = unescape(encodeURIComponent(a));
        for (var b = [], c = 0, d = a.length; c < d; ++c) b.push(a.charCodeAt(c));
        this.WS(b)
    };
    _.g.Xh = function () {
        for (var a = this.GL(), b = "", c = 0; c < a.length; c++) b += "0123456789ABCDEF".charAt(Math.floor(a[c] / 16)) + "0123456789ABCDEF".charAt(a[c] % 16);
        return b
    };

    _.yh = function (a) {
        var b = window.___jsl = window.___jsl || {};
        b.cfg = !a && b.cfg || {};
        return b.cfg
    };
    _.zh = function (a) {
        var b = _.yh();
        if (!a) return b;
        a = a.split("/");
        for (var c = 0, d = a.length; b && "object" === typeof b && c < d; ++c) b = b[a[c]];
        return c === a.length && void 0 !== b ? b : void 0
    };

    var Ah;
    Ah = /^https?:\/\/(?:\w|[\-\.])+\.google\.(?:\w|[\-:\.])+(?:\/[^\?#]*)?\/u\/(\d)\//;
    _.Bh = function (a) {
        var b = _.zh("googleapis.config/sessionIndex");
        "string" === typeof b && 254 < b.length && (b = null);
        null == b && (b = window.__X_GOOG_AUTHUSER);
        "string" === typeof b && 254 < b.length && (b = null);
        if (null == b) {
            var c = window.google;
            c && (b = c.authuser)
        }
        "string" === typeof b && 254 < b.length && (b = null);
        null == b && (a = a || window.location.href, b = _.me(a, "authuser") || null, null == b && (b = (b = a.match(Ah)) ? b[1] : null));
        if (null == b) return null;
        b = String(b);
        254 < b.length && (b = null);
        return b
    };

    var Th, Sh, Zh, $h, Uh, Xh, Vh, ai, Wh;
    _.Yh = function () {
        if (Sh) {
            var a = new _.de.Uint32Array(1);
            Th.getRandomValues(a);
            a = Number("0." + a[0])
        } else a = Uh, a += parseInt(Vh.substr(0, 20), 16), Vh = Wh(Vh), a /= Xh + Math.pow(16, 20);
        return a
    };
    Th = _.de.crypto;
    Sh = !1;
    Zh = 0;
    $h = 0;
    Uh = 1;
    Xh = 0;
    Vh = "";
    ai = function (a) {
        a = a || _.de.event;
        var b = a.screenX + a.clientX << 16;
        b += a.screenY + a.clientY;
        b *= (new Date).getTime() % 1E6;
        Uh = Uh * b % Xh;
        0 < Zh && ++$h == Zh && _.qe(_.de, "mousemove", ai, "remove", "de")
    };
    Wh = function (a) {
        var b = new _.mg;
        b.Du(a);
        return b.Xh()
    };
    Sh = !!Th && "function" == typeof Th.getRandomValues;
    Sh || (Xh = 1E6 * (screen.width * screen.width + screen.height), Vh = Wh(_.ee.cookie + "|" + _.ee.location + "|" + (new Date).getTime() + "|" + Math.random()), Zh = _.zh("random/maxObserveMousemove") || 0, 0 != Zh && _.re(_.de, "mousemove", ai));

    var Wk, Xk, Yk, Zk, $k, al, bl, cl, dl, el, fl, gl, kl, ll, ml, nl, ol, pl, ql, rl;
    _.Vk = function (a, b) {
        if (!a) throw Error(b || "");
    };
    Wk = /&/g;
    Xk = /</g;
    Yk = />/g;
    Zk = /"/g;
    $k = /'/g;
    al = function (a) {
        return String(a).replace(Wk, "&amp;").replace(Xk, "&lt;").replace(Yk, "&gt;").replace(Zk, "&quot;").replace($k, "&#39;")
    };
    bl = /[\ud800-\udbff][\udc00-\udfff]|[^!-~]/g;
    cl = /%([a-f]|[0-9a-fA-F][a-f])/g;
    dl = /^(https?|ftp|file|chrome-extension):$/i;
    el = function (a) {
        a = String(a);
        a = a.replace(bl, function (e) {
            try {
                return encodeURIComponent(e)
            } catch (f) {
                return encodeURIComponent(e.replace(/^[^%]+$/g, "\ufffd"))
            }
        }).replace(_.oe, function (e) {
            return e.replace(/%/g, "%25")
        }).replace(cl, function (e) {
            return e.toUpperCase()
        });
        a = a.match(_.ne) || [];
        var b = _.ie(), c = function (e) {
            return e.replace(/\\/g, "%5C").replace(/\^/g, "%5E").replace(/`/g, "%60").replace(/\{/g, "%7B").replace(/\|/g, "%7C").replace(/\}/g, "%7D")
        }, d = !!(a[1] || "").match(dl);
        b.Yq = c((a[1] || "") + (a[2] || "") + (a[3] ||
            (a[2] && d ? "/" : "")));
        d = function (e) {
            return c(e.replace(/\?/g, "%3F").replace(/#/g, "%23"))
        };
        b.query = a[5] ? [d(a[5])] : [];
        b.ji = a[7] ? [d(a[7])] : [];
        return b
    };
    fl = function (a) {
        return a.Yq + (0 < a.query.length ? "?" + a.query.join("&") : "") + (0 < a.ji.length ? "#" + a.ji.join("&") : "")
    };
    gl = function (a, b) {
        var c = [];
        if (a) for (var d in a) if (_.je(a, d) && null != a[d]) {
            var e = b ? b(a[d]) : a[d];
            c.push(encodeURIComponent(d) + "=" + encodeURIComponent(e))
        }
        return c
    };
    _.hl = function (a, b, c, d) {
        a = el(a);
        a.query.push.apply(a.query, gl(b, d));
        a.ji.push.apply(a.ji, gl(c, d));
        return fl(a)
    };
    _.il = function (a, b) {
        var c = el(b);
        b = c.Yq;
        c.query.length && (b += "?" + c.query.join(""));
        c.ji.length && (b += "#" + c.ji.join(""));
        var d = "";
        2E3 < b.length && (c = b, b = b.substr(0, 2E3), b = b.replace(_.pe, ""), d = c.substr(b.length));
        var e = a.createElement("div");
        a = a.createElement("a");
        c = el(b);
        b = c.Yq;
        c.query.length && (b += "?" + c.query.join(""));
        c.ji.length && (b += "#" + c.ji.join(""));
        _.Dd(a, _.Cc(b));
        e.appendChild(a);
        _.zb(e, _.Tc(e.innerHTML));
        b = String(e.firstChild.href);
        e.parentNode && e.parentNode.removeChild(e);
        c = el(b + d);
        b = c.Yq;
        c.query.length &&
        (b += "?" + c.query.join(""));
        c.ji.length && (b += "#" + c.ji.join(""));
        return b
    };
    _.jl = /^https?:\/\/[^\/%\\?#\s]+\/[^\s]*$/i;
    ll = function (a) {
        for (; a.firstChild;) a.removeChild(a.firstChild)
    };
    ml = /^https?:\/\/(?:\w|[\-\.])+\.google\.(?:\w|[\-:\.])+(?:\/[^\?#]*)?\/b\/(\d{10,21})\//;
    nl = function () {
        var a = _.zh("googleapis.config/sessionDelegate");
        "string" === typeof a && 21 < a.length && (a = null);
        null == a && (a = (a = window.location.href.match(ml)) ? a[1] : null);
        if (null == a) return null;
        a = String(a);
        21 < a.length && (a = null);
        return a
    };
    ol = function () {
        var a = _.te.onl;
        if (!a) {
            a = _.ie();
            _.te.onl = a;
            var b = _.ie();
            a.e = function (c) {
                var d = b[c];
                d && (delete b[c], d())
            };
            a.a = function (c, d) {
                b[c] = d
            };
            a.r = function (c) {
                delete b[c]
            }
        }
        return a
    };
    pl = function (a, b) {
        b = b.onload;
        return "function" === typeof b ? (ol().a(a, b), b) : null
    };
    ql = function (a) {
        _.Vk(/^\w+$/.test(a), "Unsupported id - " + a);
        return 'onload="window.___jsl.onl.e(&#34;' + a + '&#34;)"'
    };
    rl = function (a) {
        ol().r(a)
    };
    var tl, ul, yl;
    _.sl = {
        allowtransparency: "true",
        frameborder: "0",
        hspace: "0",
        marginheight: "0",
        marginwidth: "0",
        scrolling: "no",
        style: "",
        tabindex: "0",
        vspace: "0",
        width: "100%"
    };
    tl = {allowtransparency: !0, onload: !0};
    ul = 0;
    _.vl = function (a, b) {
        var c = 0;
        do var d = b.id || ["I", ul++, "_", (new Date).getTime()].join(""); while (a.getElementById(d) && 5 > ++c);
        _.Vk(5 > c, "Error creating iframe id");
        return d
    };
    _.wl = function (a, b) {
        return a ? b + "/" + a : ""
    };
    _.xl = function (a, b, c, d) {
        var e = {}, f = {};
        a.documentMode && 9 > a.documentMode && (e.hostiemode = a.documentMode);
        _.ke(d.queryParams || {}, e);
        _.ke(d.fragmentParams || {}, f);
        var h = d.pfname;
        var k = _.ie();
        _.zh("iframes/dropLegacyIdParam") || (k.id = c);
        k._gfid = c;
        k.parent = a.location.protocol + "//" + a.location.host;
        c = _.me(a.location.href, "parent");
        h = h || "";
        !h && c && (h = _.me(a.location.href, "_gfid", "") || _.me(a.location.href, "id", ""), h = _.wl(h, _.me(a.location.href, "pfname", "")));
        h || (c = _.pf(_.me(a.location.href, "jcp", ""))) && "object" ==
        typeof c && (h = _.wl(c.id, c.pfname));
        k.pfname = h;
        d.connectWithJsonParam && (h = {}, h.jcp = _.qf(k), k = h);
        h = _.me(b, "rpctoken") || e.rpctoken || f.rpctoken;
        h || (h = d.rpctoken || String(Math.round(1E8 * _.Yh())), k.rpctoken = h);
        d.rpctoken = h;
        _.ke(k, d.connectWithQueryParams ? e : f);
        k = a.location.href;
        a = _.ie();
        (h = _.me(k, "_bsh", _.te.bsh)) && (a._bsh = h);
        (k = _.te.dpo ? _.te.h : _.me(k, "jsh", _.te.h)) && (a.jsh = k);
        d.hintInFragment ? _.ke(a, f) : _.ke(a, e);
        return _.hl(b, e, f, d.paramsSerializer)
    };
    yl = function (a) {
        _.Vk(!a || _.jl.test(a), "Illegal url for new iframe - " + a)
    };
    _.zl = function (a, b, c, d, e) {
        yl(c.src);
        var f, h = pl(d, c), k = h ? ql(d) : "";
        try {
            document.all && (f = a.createElement('<iframe frameborder="' + al(String(c.frameborder)) + '" scrolling="' + al(String(c.scrolling)) + '" ' + k + ' name="' + al(String(c.name)) + '"/>'))
        } catch (m) {
        } finally {
            f || (f = _.Ld(a).na("IFRAME"), h && (f.onload = function () {
                f.onload = null;
                h.call(this)
            }, rl(d)))
        }
        f.setAttribute("ng-non-bindable", "");
        for (var l in c) a = c[l], "style" === l && "object" === typeof a ? _.ke(a, f.style) : tl[l] || f.setAttribute(l, String(a));
        (l = e && e.beforeNode ||
            null) || e && e.dontclear || ll(b);
        b.insertBefore(f, l);
        f = l ? l.previousSibling : b.lastChild;
        c.allowtransparency && (f.allowTransparency = !0);
        return f
    };
    var Al, Dl;
    Al = /^:[\w]+$/;
    _.Bl = /:([a-zA-Z_]+):/g;
    _.Cl = function () {
        var a = _.Bh() || "0", b = nl();
        var c = _.Bh() || a;
        var d = nl(), e = "";
        c && (e += "u/" + encodeURIComponent(String(c)) + "/");
        d && (e += "b/" + encodeURIComponent(String(d)) + "/");
        c = e || null;
        (e = (d = !1 === _.zh("isLoggedIn")) ? "_/im/" : "") && (c = "");
        var f = _.zh("iframes/:socialhost:"), h = _.zh("iframes/:im_socialhost:");
        return kl = {
            socialhost: f,
            ctx_socialhost: d ? h : f,
            session_index: a,
            session_delegate: b,
            session_prefix: c,
            im_prefix: e
        }
    };
    Dl = function (a, b) {
        return _.Cl()[b] || ""
    };
    _.El = function (a) {
        return _.il(_.ee, a.replace(_.Bl, Dl))
    };
    _.Fl = function (a) {
        var b = a;
        Al.test(a) && (b = _.zh("iframes/" + b.substring(1) + "/url"), _.Vk(!!b, "Unknown iframe url config for - " + a));
        return _.El(b)
    };
    _.Gl = function (a, b, c) {
        c = c || {};
        var d = c.attributes || {};
        _.Vk(!(c.allowPost || c.forcePost) || !d.onload, "onload is not supported by post iframe (allowPost or forcePost)");
        a = _.Fl(a);
        d = b.ownerDocument || _.ee;
        var e = _.vl(d, c);
        a = _.xl(d, a, e, c);
        var f = c, h = _.ie();
        _.ke(_.sl, h);
        _.ke(f.attributes, h);
        h.name = h.id = e;
        h.src = a;
        c.eurl = a;
        c = (f = c) || {};
        var k = !!c.allowPost;
        if (c.forcePost || k && 2E3 < a.length) {
            c = el(a);
            h.src = "";
            f.dropDataPostorigin || (h["data-postorigin"] = a);
            a = _.zl(d, b, h, e);
            if (-1 != navigator.userAgent.indexOf("WebKit")) {
                var l =
                    a.contentWindow.document;
                l.open();
                h = l.createElement("div");
                k = {};
                var m = e + "_inner";
                k.name = m;
                k.src = "";
                k.style = "display:none";
                _.zl(d, h, k, m, f)
            }
            h = (f = c.query[0]) ? f.split("&") : [];
            f = [];
            for (k = 0; k < h.length; k++) m = h[k].split("=", 2), f.push([decodeURIComponent(m[0]), decodeURIComponent(m[1])]);
            c.query = [];
            h = fl(c);
            _.Vk(_.jl.test(h), "Invalid URL: " + h);
            c = d.createElement("form");
            c.method = "POST";
            c.target = e;
            c.style.display = "none";
            e = h instanceof _.xc ? h : _.Ec(h);
            c.action = _.yc(e);
            for (e = 0; e < f.length; e++) h = d.createElement("input"),
                h.type = "hidden", h.name = f[e][0], h.value = f[e][1], c.appendChild(h);
            b.appendChild(c);
            c.submit();
            c.parentNode.removeChild(c);
            l && l.close();
            b = a
        } else b = _.zl(d, b, h, e, f);
        return b
    };

    var tf = function () {
        this.ig = window.console
    };
    tf.prototype.log = function (a) {
        this.ig && this.ig.log && this.ig.log(a)
    };
    tf.prototype.error = function (a) {
        this.ig && (this.ig.error ? this.ig.error(a) : this.ig.log && this.ig.log(a))
    };
    tf.prototype.warn = function (a) {
        this.ig && (this.ig.warn ? this.ig.warn(a) : this.ig.log && this.ig.log(a))
    };
    tf.prototype.debug = function () {
    };
    _.uf = new tf;

    _.hg = function (a) {
        if (!a) return "";
        if (/^about:(?:blank|srcdoc)$/.test(a)) return window.origin || "";
        a = a.split("#")[0].split("?")[0];
        a = a.toLowerCase();
        0 == a.indexOf("//") && (a = window.location.protocol + a);
        /^[\w\-]*:\/\//.test(a) || (a = window.location.href);
        var b = a.substring(a.indexOf("://") + 3), c = b.indexOf("/");
        -1 != c && (b = b.substring(0, c));
        c = a.substring(0, a.indexOf("://"));
        if (!c) throw Error("z`" + a);
        if ("http" !== c && "https" !== c && "chrome-extension" !== c && "moz-extension" !== c && "file" !== c && "android-app" !== c && "chrome-search" !==
            c && "chrome-untrusted" !== c && "chrome" !== c && "app" !== c && "devtools" !== c) throw Error("A`" + c);
        a = "";
        var d = b.indexOf(":");
        if (-1 != d) {
            var e = b.substring(d + 1);
            b = b.substring(0, d);
            if ("http" === c && "80" !== e || "https" === c && "443" !== e) a = ":" + e
        }
        return c + "://" + b + a
    };

    _.Rg = _.tb();
    _.Sg = _.Cb() || _.qb("iPod");
    _.Tg = _.qb("iPad");
    _.Ug = _.wb();
    _.Vg = _.ub();
    _.Wg = _.vb() && !_.Db();

    _.ji = function (a, b) {
        return "string" === typeof b ? a.getElementById(b) : b
    };
    _.ki = function (a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function () {
            var d = c.slice();
            d.push.apply(d, arguments);
            return a.apply(this, d)
        }
    };
    _.li = function () {
    };
    _.mi = [];
    _.ni = [];
    _.oi = !1;
    _.pi = function (a) {
        _.mi[_.mi.length] = a;
        if (_.oi) for (var b = 0; b < _.ni.length; b++) a((0, _.J)(_.ni[b].wrap, _.ni[b]))
    };

    _.ej = function (a, b, c, d) {
        for (var e = 0, f = a.length, h; e < f;) {
            var k = e + (f - e >>> 1);
            var l = c ? b.call(void 0, a[k], k, a) : b(d, a[k]);
            0 < l ? e = k + 1 : (f = k, h = !l)
        }
        return h ? e : -e - 1
    };
    _.fj = function (a, b) {
        var c = {}, d;
        for (d in a) b.call(void 0, a[d], d, a) && (c[d] = a[d]);
        return c
    };

    var gj = function (a) {
        this.O = a
    };
    _.g = gj.prototype;
    _.g.value = function () {
        return this.O
    };
    _.g.we = function (a) {
        this.O.width = a;
        return this
    };
    _.g.Pb = function () {
        return this.O.width
    };
    _.g.Bd = function (a) {
        this.O.height = a;
        return this
    };
    _.g.Dc = function () {
        return this.O.height
    };
    _.g.Nh = function (a) {
        this.O.style = a;
        return this
    };
    _.g.getStyle = function () {
        return this.O.style
    };
    _.hj = function (a) {
        this.O = a || {}
    };
    _.g = _.hj.prototype;
    _.g.value = function () {
        return this.O
    };
    _.g.setUrl = function (a) {
        this.O.url = a;
        return this
    };
    _.g.getUrl = function () {
        return this.O.url
    };
    _.g.Nh = function (a) {
        this.O.style = a;
        return this
    };
    _.g.getStyle = function () {
        return this.O.style
    };
    _.g.ve = function (a) {
        this.O.id = a;
        return this
    };
    _.g.getId = function () {
        return this.O.id
    };
    _.g.Hl = function (a) {
        this.O.rpctoken = a;
        return this
    };
    _.ij = function (a, b) {
        a.O.messageHandlers = b;
        return a
    };
    _.jj = function (a, b) {
        a.O.messageHandlersFilter = b;
        return a
    };
    _.hj.prototype.iq = _.ba(4);
    _.hj.prototype.getContext = function () {
        return this.O.context
    };
    _.hj.prototype.Oc = function () {
        return this.O.openerIframe
    };
    _.hj.prototype.Am = function () {
        this.O.attributes = this.O.attributes || {};
        return new gj(this.O.attributes)
    };

    var qj;
    _.kj = function (a, b) {
        for (var c in a) if (!(c in b) || a[c] !== b[c]) return !1;
        for (var d in b) if (!(d in a)) return !1;
        return !0
    };
    _.lj = function (a) {
        var b = {}, c;
        for (c in a) b[c] = a[c];
        return b
    };
    _.mj = function (a) {
        _.Ya.setTimeout(function () {
            throw a;
        }, 0)
    };
    _.nj = function (a) {
        return a
    };
    _.oj = function (a) {
        a.prototype.$goog_Thenable = !0
    };
    _.pj = function (a) {
        if (!a) return !1;
        try {
            return !!a.$goog_Thenable
        } catch (b) {
            return !1
        }
    };
    qj = function (a, b) {
        this.fX = a;
        this.H3 = b;
        this.Cy = 0;
        this.tf = null
    };
    qj.prototype.get = function () {
        if (0 < this.Cy) {
            this.Cy--;
            var a = this.tf;
            this.tf = a.next;
            a.next = null
        } else a = this.fX();
        return a
    };
    qj.prototype.put = function (a) {
        this.H3(a);
        100 > this.Cy && (this.Cy++, a.next = this.tf, this.tf = a)
    };
    var sj, tj, rj;
    _.uj = function (a) {
        a = rj(a);
        "function" !== typeof _.Ya.setImmediate || _.Ya.Window && _.Ya.Window.prototype && !_.qb("Edge") && _.Ya.Window.prototype.setImmediate == _.Ya.setImmediate ? (sj || (sj = tj()), sj(a)) : _.Ya.setImmediate(a)
    };
    tj = function () {
        var a = _.Ya.MessageChannel;
        "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !_.qb("Presto") && (a = function () {
            var e = _.Ud("IFRAME");
            e.style.display = "none";
            document.documentElement.appendChild(e);
            var f = e.contentWindow;
            e = f.document;
            e.open();
            e.close();
            var h = "callImmediate" + Math.random(),
                k = "file:" == f.location.protocol ? "*" : f.location.protocol + "//" + f.location.host;
            e = (0, _.J)(function (l) {
                    if (("*" == k || l.origin == k) && l.data == h) this.port1.onmessage()
                },
                this);
            f.addEventListener("message", e, !1);
            this.port1 = {};
            this.port2 = {
                postMessage: function () {
                    f.postMessage(h, k)
                }
            }
        });
        if ("undefined" !== typeof a && !_.sb()) {
            var b = new a, c = {}, d = c;
            b.port1.onmessage = function () {
                if (void 0 !== c.next) {
                    c = c.next;
                    var e = c.cb;
                    c.cb = null;
                    e()
                }
            };
            return function (e) {
                d.next = {cb: e};
                d = d.next;
                b.port2.postMessage(0)
            }
        }
        return function (e) {
            _.Ya.setTimeout(e, 0)
        }
    };
    rj = _.nj;
    _.pi(function (a) {
        rj = a
    });
    var vj = function () {
        this.OA = this.Jq = null
    };
    vj.prototype.add = function (a, b) {
        var c = wj.get();
        c.set(a, b);
        this.OA ? this.OA.next = c : this.Jq = c;
        this.OA = c
    };
    vj.prototype.remove = function () {
        var a = null;
        this.Jq && (a = this.Jq, this.Jq = this.Jq.next, this.Jq || (this.OA = null), a.next = null);
        return a
    };
    var wj = new qj(function () {
        return new xj
    }, function (a) {
        return a.reset()
    }), xj = function () {
        this.next = this.scope = this.lh = null
    };
    xj.prototype.set = function (a, b) {
        this.lh = a;
        this.scope = b;
        this.next = null
    };
    xj.prototype.reset = function () {
        this.next = this.scope = this.lh = null
    };
    var yj, zj, Aj, Bj, Dj;
    zj = !1;
    Aj = new vj;
    _.Cj = function (a, b) {
        yj || Bj();
        zj || (yj(), zj = !0);
        Aj.add(a, b)
    };
    Bj = function () {
        if (_.Ya.Promise && _.Ya.Promise.resolve) {
            var a = _.Ya.Promise.resolve(void 0);
            yj = function () {
                a.then(Dj)
            }
        } else yj = function () {
            _.uj(Dj)
        }
    };
    Dj = function () {
        for (var a; a = Aj.remove();) {
            try {
                a.lh.call(a.scope)
            } catch (b) {
                _.mj(b)
            }
            wj.put(a)
        }
        zj = !1
    };
    var Gj, Hj, Ij;
    _.Fj = function (a, b) {
        this.Da = 0;
        this.Re = void 0;
        this.to = this.rk = this.Db = null;
        this.lx = this.DC = !1;
        if (a != _.li) try {
            var c = this;
            a.call(b, function (d) {
                Ej(c, 2, d)
            }, function (d) {
                Ej(c, 3, d)
            })
        } catch (d) {
            Ej(this, 3, d)
        }
    };
    Gj = function () {
        this.next = this.context = this.Kp = this.it = this.Wl = null;
        this.Vq = !1
    };
    Gj.prototype.reset = function () {
        this.context = this.Kp = this.it = this.Wl = null;
        this.Vq = !1
    };
    Hj = new qj(function () {
        return new Gj
    }, function (a) {
        a.reset()
    });
    Ij = function (a, b, c) {
        var d = Hj.get();
        d.it = a;
        d.Kp = b;
        d.context = c;
        return d
    };
    _.Jj = function (a) {
        if (a instanceof _.Fj) return a;
        var b = new _.Fj(_.li);
        Ej(b, 2, a);
        return b
    };
    _.Kj = function (a) {
        return new _.Fj(function (b, c) {
            c(a)
        })
    };
    _.Mj = function (a, b, c) {
        Lj(a, b, c, null) || _.Cj(_.ki(b, a))
    };
    _.Nj = function (a) {
        return new _.Fj(function (b, c) {
            var d = a.length, e = [];
            if (d) for (var f = function (m, n) {
                d--;
                e[m] = n;
                0 == d && b(e)
            }, h = function (m) {
                c(m)
            }, k = 0, l; k < a.length; k++) l = a[k], _.Mj(l, _.ki(f, k), h); else b(e)
        })
    };
    _.Pj = function () {
        var a, b, c = new _.Fj(function (d, e) {
            a = d;
            b = e
        });
        return new Oj(c, a, b)
    };
    _.Fj.prototype.then = function (a, b, c) {
        return Vj(this, "function" === typeof a ? a : null, "function" === typeof b ? b : null, c)
    };
    _.oj(_.Fj);
    _.Xj = function (a, b) {
        b = Ij(b, b);
        b.Vq = !0;
        Wj(a, b);
        return a
    };
    _.Fj.prototype.mu = function (a, b) {
        return Vj(this, null, a, b)
    };
    _.Fj.prototype.catch = _.Fj.prototype.mu;
    _.Fj.prototype.cancel = function (a) {
        if (0 == this.Da) {
            var b = new Yj(a);
            _.Cj(function () {
                Zj(this, b)
            }, this)
        }
    };
    var Zj = function (a, b) {
        if (0 == a.Da) if (a.Db) {
            var c = a.Db;
            if (c.rk) {
                for (var d = 0, e = null, f = null, h = c.rk; h && (h.Vq || (d++, h.Wl == a && (e = h), !(e && 1 < d))); h = h.next) e || (f = h);
                e && (0 == c.Da && 1 == d ? Zj(c, b) : (f ? (d = f, d.next == c.to && (c.to = d), d.next = d.next.next) : ak(c), bk(c, e, 3, b)))
            }
            a.Db = null
        } else Ej(a, 3, b)
    }, Wj = function (a, b) {
        a.rk || 2 != a.Da && 3 != a.Da || ck(a);
        a.to ? a.to.next = b : a.rk = b;
        a.to = b
    }, Vj = function (a, b, c, d) {
        var e = Ij(null, null, null);
        e.Wl = new _.Fj(function (f, h) {
            e.it = b ? function (k) {
                try {
                    var l = b.call(d, k);
                    f(l)
                } catch (m) {
                    h(m)
                }
            } : f;
            e.Kp = c ?
                function (k) {
                    try {
                        var l = c.call(d, k);
                        void 0 === l && k instanceof Yj ? h(k) : f(l)
                    } catch (m) {
                        h(m)
                    }
                } : h
        });
        e.Wl.Db = a;
        Wj(a, e);
        return e.Wl
    };
    _.Fj.prototype.Y5 = function (a) {
        this.Da = 0;
        Ej(this, 2, a)
    };
    _.Fj.prototype.Z5 = function (a) {
        this.Da = 0;
        Ej(this, 3, a)
    };
    var Ej = function (a, b, c) {
        0 == a.Da && (a === c && (b = 3, c = new TypeError("Promise cannot resolve to itself")), a.Da = 1, Lj(c, a.Y5, a.Z5, a) || (a.Re = c, a.Da = b, a.Db = null, ck(a), 3 != b || c instanceof Yj || dk(a, c)))
    }, Lj = function (a, b, c, d) {
        if (a instanceof _.Fj) return Wj(a, Ij(b || _.li, c || null, d)), !0;
        if (_.pj(a)) return a.then(b, c, d), !0;
        if (_.Eb(a)) try {
            var e = a.then;
            if ("function" === typeof e) return ek(a, e, b, c, d), !0
        } catch (f) {
            return c.call(d, f), !0
        }
        return !1
    }, ek = function (a, b, c, d, e) {
        var f = !1, h = function (l) {
            f || (f = !0, c.call(e, l))
        }, k = function (l) {
            f ||
            (f = !0, d.call(e, l))
        };
        try {
            b.call(a, h, k)
        } catch (l) {
            k(l)
        }
    }, ck = function (a) {
        a.DC || (a.DC = !0, _.Cj(a.gw, a))
    }, ak = function (a) {
        var b = null;
        a.rk && (b = a.rk, a.rk = b.next, b.next = null);
        a.rk || (a.to = null);
        return b
    };
    _.Fj.prototype.gw = function () {
        for (var a; a = ak(this);) bk(this, a, this.Da, this.Re);
        this.DC = !1
    };
    var bk = function (a, b, c, d) {
        if (3 == c && b.Kp && !b.Vq) for (; a && a.lx; a = a.Db) a.lx = !1;
        if (b.Wl) b.Wl.Db = null, fk(b, c, d); else try {
            b.Vq ? b.it.call(b.context) : fk(b, c, d)
        } catch (e) {
            gk.call(null, e)
        }
        Hj.put(b)
    }, fk = function (a, b, c) {
        2 == b ? a.it.call(a.context, c) : a.Kp && a.Kp.call(a.context, c)
    }, dk = function (a, b) {
        a.lx = !0;
        _.Cj(function () {
            a.lx && gk.call(null, b)
        })
    }, gk = _.mj, Yj = function (a) {
        _.gb.call(this, a);
        this.WQ = !1
    };
    _.ab(Yj, _.gb);
    Yj.prototype.name = "cancel";
    var Oj = function (a, b, c) {
        this.promise = a;
        this.resolve = b;
        this.reject = c
    };

    _.hk = function (a) {
        return new _.Fj(a)
    };

    var pk = function () {
        this.yu = {RQ: ik ? "../" + ik : null, nC: jk, DN: kk, lfa: lk, Jm: mk, dga: nk};
        this.Jf = _.de;
        this.CQ = this.jX;
        this.WX = /MSIE\s*[0-8](\D|$)/.test(window.navigator.userAgent);
        if (this.yu.RQ) {
            this.Jf = this.yu.DN(this.Jf, this.yu.RQ);
            var a = this.Jf.document, b = a.createElement("script");
            b.setAttribute("type", "text/javascript");
            b.text = "window.doPostMsg=function(w,s,o) {window.setTimeout(function(){w.postMessage(s,o);},0);};";
            a.body.appendChild(b);
            this.CQ = this.Jf.doPostMsg
        }
        this.zI = {};
        this.bJ = {};
        a = (0, _.J)(this.TD,
            this);
        _.re(this.Jf, "message", a);
        _.he(_.te, "RPMQ", []).push(a);
        this.Jf != this.Jf.parent && ok(this, this.Jf.parent, this.YE(this.Jf.name), "*")
    };
    pk.prototype.YE = function (a) {
        return '{"h":"' + escape(a) + '"}'
    };
    var qk = function (a) {
        var b = null;
        0 === a.indexOf('{"h":"') && a.indexOf('"}') === a.length - 2 && (b = unescape(a.substring(6, a.length - 2)));
        return b
    }, rk = function (a) {
        if (!/^\s*{/.test(a)) return !1;
        a = _.pf(a);
        return null !== a && "object" === typeof a && !!a.g
    };
    pk.prototype.TD = function (a) {
        var b = String(a.data);
        _.uf.debug("gapix.rpc.receive(" + lk + "): " + (!b || 512 >= b.length ? b : b.substr(0, 512) + "... (" + b.length + " bytes)"));
        var c = 0 !== b.indexOf("!_");
        c || (b = b.substring(2));
        var d = rk(b);
        if (!c && !d) {
            if (!d && (c = qk(b))) {
                if (this.zI[c]) this.zI[c](); else this.bJ[c] = 1;
                return
            }
            var e = a.origin, f = this.yu.nC;
            this.WX ? _.de.setTimeout(function () {
                f(b, e)
            }, 0) : f(b, e)
        }
    };
    pk.prototype.Gb = function (a, b) {
        ".." === a || this.bJ[a] ? (b(), delete this.bJ[a]) : this.zI[a] = b
    };
    var ok = function (a, b, c, d) {
        var e = rk(c) ? "" : "!_";
        _.uf.debug("gapix.rpc.send(" + lk + "): " + (!c || 512 >= c.length ? c : c.substr(0, 512) + "... (" + c.length + " bytes)"));
        a.CQ(b, e + c, d)
    };
    pk.prototype.jX = function (a, b, c) {
        a.postMessage(b, c)
    };
    pk.prototype.send = function (a, b, c) {
        (a = this.yu.DN(this.Jf, a)) && !a.closed && ok(this, a, b, c)
    };
    var sk, tk, uk, vk, wk, xk, yk, ik, lk, zk, Ak, Bk, kk, mk, Dk, Ek, Jk, Kk, Mk, nk, Ok, Nk, Fk, Gk, Pk, jk, Qk, Rk;
    sk = 0;
    tk = [];
    uk = {};
    vk = {};
    wk = _.de.location.href;
    xk = _.me(wk, "rpctoken");
    yk = _.me(wk, "parent") || _.ee.referrer;
    ik = _.me(wk, "rly");
    lk = ik || (_.de !== _.de.top || _.de.opener) && _.de.name || "..";
    zk = null;
    Ak = {};
    Bk = function () {
    };
    _.Ck = {send: Bk, Gb: Bk, YE: Bk};
    kk = function (a, b) {
        "/" == b.charAt(0) && (b = b.substring(1), a = _.de.top);
        if (0 === b.length) return a;
        for (b = b.split("/"); b.length;) {
            var c = b.shift();
            "{" == c.charAt(0) && "}" == c.charAt(c.length - 1) && (c = c.substring(1, c.length - 1));
            if (".." === c) a = a == a.parent ? a.opener : a.parent; else if (".." !== c && a.frames[c]) {
                if (a = a.frames[c], !("postMessage" in a)) throw Error("M");
            } else return null
        }
        return a
    };
    mk = function (a) {
        return (a = uk[a]) && a.xA
    };
    Dk = function (a) {
        if (a.f in {}) return !1;
        var b = a.t, c = uk[a.r];
        a = a.origin;
        return c && (c.xA === b || !c.xA && !b) && (a === c.origin || "*" === c.origin)
    };
    Ek = function (a) {
        var b = a.id.split("/"), c = b[b.length - 1], d = a.origin;
        return function (e) {
            var f = e.origin;
            return e.f == c && (d == f || "*" == d)
        }
    };
    _.Hk = function (a, b, c) {
        a = Fk(a);
        vk[a.name] = {lh: b, Rs: a.Rs, Hq: c || Dk};
        Gk()
    };
    _.Ik = function (a) {
        delete vk[Fk(a).name]
    };
    Jk = {};
    Kk = function (a, b) {
        (a = Jk["_" + a]) && a[1](this) && a[0].call(this, b)
    };
    Mk = function (a) {
        var b = a.c;
        if (!b) return Bk;
        var c = a.r, d = a.g ? "legacy__" : "";
        return function () {
            var e = [].slice.call(arguments, 0);
            e.unshift(c, d + "__cb", null, b);
            _.Lk.apply(null, e)
        }
    };
    nk = function (a) {
        zk = a
    };
    Ok = function (a) {
        Ak[a] || (Ak[a] = _.de.setTimeout(function () {
            Ak[a] = !1;
            Nk(a)
        }, 0))
    };
    Nk = function (a) {
        var b = uk[a];
        if (b && b.ready) {
            var c = b.bG;
            for (b.bG = []; c.length;) _.Ck.send(a, _.qf(c.shift()), b.origin)
        }
    };
    Fk = function (a) {
        return 0 === a.indexOf("legacy__") ? {name: a.substring(8), Rs: !0} : {name: a, Rs: !1}
    };
    Gk = function () {
        for (var a = _.zh("rpc/residenceSec") || 60, b = (new Date).getTime() / 1E3, c, d = 0; c = tk[d]; ++d) {
            var e = c.An;
            if (!e || 0 < a && b - c.timestamp > a) tk.splice(d, 1), --d; else {
                var f = e.s, h = vk[f] || vk["*"];
                if (h) if (tk.splice(d, 1), --d, e.origin = c.origin, c = Mk(e), e.callback = c, h.Hq(e)) {
                    if ("__cb" !== f && !!h.Rs != !!e.g) break;
                    e = h.lh.apply(e, e.a);
                    void 0 !== e && c(e)
                } else _.uf.debug("gapix.rpc.rejected(" + lk + "): " + f)
            }
        }
    };
    Pk = function (a, b, c) {
        tk.push({An: a, origin: b, timestamp: (new Date).getTime() / 1E3});
        c || Gk()
    };
    jk = function (a, b) {
        a = _.pf(a);
        Pk(a, b, !1)
    };
    Qk = function (a) {
        for (; a.length;) Pk(a.shift(), this.origin, !0);
        Gk()
    };
    Rk = function (a) {
        var b = !1;
        a = a.split("|");
        var c = a[0];
        0 <= c.indexOf("/") && (b = !0);
        return {id: c, origin: a[1] || "*", FE: b}
    };
    _.Sk = function (a, b, c, d) {
        var e = Rk(a);
        d && (_.de.frames[e.id] = _.de.frames[e.id] || d);
        a = e.id;
        if (!uk.hasOwnProperty(a)) {
            c = c || null;
            d = e.origin;
            if (".." === a) d = _.hg(yk), c = c || xk; else if (!e.FE) {
                var f = _.ee.getElementById(a);
                f && (f = f.src, d = _.hg(f), c = c || _.me(f, "rpctoken"))
            }
            "*" === e.origin && d || (d = e.origin);
            uk[a] = {
                xA: c, bG: [], origin: d, U3: b, MQ: function () {
                    var h = a;
                    uk[h].ready = 1;
                    Nk(h)
                }
            };
            _.Ck.Gb(a, uk[a].MQ)
        }
        return uk[a].MQ
    };
    _.Lk = function (a, b, c, d) {
        a = a || "..";
        _.Sk(a);
        a = a.split("|", 1)[0];
        var e = b, f = [].slice.call(arguments, 3), h = c, k = lk, l = xk, m = uk[a], n = k, q = Rk(a);
        if (m && ".." !== a) {
            if (q.FE) {
                if (!(l = uk[a].U3)) {
                    l = zk ? zk.substring(1).split("/") : [lk];
                    n = l.length - 1;
                    for (var p = _.de.parent; p !== _.de.top;) {
                        var t = p.parent;
                        if (!n--) {
                            for (var v = null, r = t.frames.length, w = 0; w < r; ++w) t.frames[w] == p && (v = w);
                            l.unshift("{" + v + "}")
                        }
                        p = t
                    }
                    l = "/" + l.join("/")
                }
                n = l
            } else n = k = "..";
            l = m.xA
        }
        h && q ? (m = Dk, q.FE && (m = Ek(q)), Jk["_" + ++sk] = [h, m], h = sk) : h = null;
        f = {
            s: e, f: k, r: n, t: l, c: h,
            a: f
        };
        e = Fk(e);
        f.s = e.name;
        f.g = e.Rs;
        uk[a].bG.push(f);
        Ok(a)
    };
    if ("function" === typeof _.de.postMessage || "object" === typeof _.de.postMessage) _.Ck = new pk, _.Hk("__cb", Kk, function () {
        return !0
    }), _.Hk("_processBatch", Qk, function () {
        return !0
    }), _.Sk("..");

    var Tk;
    Tk = function () {
        function a(k, l) {
            k = window.getComputedStyle(k, "").getPropertyValue(l).match(/^([0-9]+)/);
            return parseInt(k[0], 10)
        }

        for (var b = 0, c = [document.body]; 0 < c.length;) {
            var d = c.shift(), e = d.childNodes;
            if ("undefined" !== typeof d.style) {
                var f = d.style.overflowY;
                f || (f = (f = document.defaultView.getComputedStyle(d, null)) ? f.overflowY : null);
                if ("visible" != f && "inherit" != f && (f = d.style.height, f || (f = (f = document.defaultView.getComputedStyle(d, null)) ? f.height : ""), 0 < f.length && "auto" != f)) continue
            }
            for (d = 0; d < e.length; d++) {
                f = e[d];
                if ("undefined" !== typeof f.offsetTop && "undefined" !== typeof f.offsetHeight) {
                    var h = f.offsetTop + f.offsetHeight + a(f, "margin-bottom");
                    b = Math.max(b, h)
                }
                c.push(f)
            }
        }
        return b + a(document.body, "border-bottom") + a(document.body, "margin-bottom") + a(document.body, "padding-bottom")
    };
    _.Uk = function () {
        var a = 0;
        self.innerHeight ? a = self.innerHeight : document.documentElement && document.documentElement.clientHeight ? a = document.documentElement.clientHeight : document.body && (a = document.body.clientHeight);
        var b = document.body, c = document.documentElement;
        if ("CSS1Compat" === document.compatMode && c.scrollHeight) return c.scrollHeight !== a ? c.scrollHeight : c.offsetHeight;
        if (0 <= navigator.userAgent.indexOf("AppleWebKit")) return Tk();
        if (b && c) {
            var d = c.scrollHeight, e = c.offsetHeight;
            c.clientHeight !== e && (d = b.scrollHeight,
                e = b.offsetHeight);
            return d > a ? d > e ? d : e : d < e ? d : e
        }
    };

    var Hl = function (a, b) {
        return _.ej(a, b, !0)
    }, Il = function (a) {
        var b = function (c) {
            return new (a().Context)(c)
        };
        b.prototype.addOnConnectHandler = function (c, d, e, f) {
            return a().Context.prototype.addOnConnectHandler.apply(this, [c, d, e, f])
        };
        b.prototype.addOnOpenerHandler = function (c, d, e) {
            return a().Context.prototype.addOnOpenerHandler.apply(this, [c, d, e])
        };
        b.prototype.closeSelf = function (c, d, e) {
            return a().Context.prototype.closeSelf.apply(this, [c, d, e])
        };
        b.prototype.connectIframes = function (c, d) {
            a().Context.prototype.connectIframes.apply(this,
                [c, d])
        };
        b.prototype.getFrameName = function () {
            return a().Context.prototype.getFrameName.apply(this)
        };
        b.prototype.getGlobalParam = function (c) {
            a().Context.prototype.getGlobalParam.apply(this, [c])
        };
        b.prototype.getParentIframe = function () {
            return a().Context.prototype.getParentIframe.apply(this)
        };
        b.prototype.getWindow = function () {
            return a().Context.prototype.getWindow.apply(this)
        };
        b.prototype.isDisposed = function () {
            return a().Context.prototype.isDisposed.apply(this)
        };
        b.prototype.open = function (c, d) {
            return a().Context.prototype.open.apply(this,
                [c, d])
        };
        b.prototype.openChild = function (c) {
            return a().Context.prototype.openChild.apply(this, [c])
        };
        b.prototype.ready = function (c, d, e, f) {
            a().Context.prototype.ready.apply(this, [c, d, e, f])
        };
        b.prototype.removeOnConnectHandler = function (c) {
            a().Context.prototype.removeOnConnectHandler.apply(this, [c])
        };
        b.prototype.restyleSelf = function (c, d, e) {
            return a().Context.prototype.restyleSelf.apply(this, [c, d, e])
        };
        b.prototype.setCloseSelfFilter = function (c) {
            a().Context.prototype.setCloseSelfFilter.apply(this, [c])
        };
        b.prototype.setGlobalParam =
            function (c, d) {
                a().Context.prototype.setGlobalParam.apply(this, [c, d])
            };
        b.prototype.setRestyleSelfFilter = function (c) {
            a().Context.prototype.setRestyleSelfFilter.apply(this, [c])
        };
        return b
    }, Jl = function (a) {
        var b = function (c, d, e, f) {
            return new (a().Iframe)(c, d, e, f)
        };
        b.prototype.applyIframesApi = function (c) {
            a().Iframe.prototype.applyIframesApi(c)
        };
        b.prototype.close = function (c, d) {
            return a().Iframe.prototype.close.apply(this, [c, d])
        };
        b.prototype.getContext = function () {
            return a().Iframe.prototype.getContext.apply(this,
                [])
        };
        b.prototype.getFrameName = function () {
            return a().Iframe.prototype.getFrameName.apply(this, [])
        };
        b.prototype.getId = function () {
            return a().Iframe.prototype.getId.apply(this, [])
        };
        b.prototype.getIframeEl = function () {
            return a().Iframe.prototype.getIframeEl.apply(this, [])
        };
        b.prototype.getOrigin = function () {
            return a().Iframe.prototype.getOrigin.apply(this, [])
        };
        b.prototype.getParam = function (c) {
            a().Iframe.prototype.getParam.apply(this, [c])
        };
        b.prototype.getSiteEl = function () {
            return a().Iframe.prototype.getSiteEl.apply(this,
                [])
        };
        b.prototype.getWindow = function () {
            return a().Iframe.prototype.getWindow.apply(this, [])
        };
        b.prototype.isDisposed = function () {
            return a().Iframe.prototype.isDisposed.apply(this, [])
        };
        b.prototype.ping = function (c, d) {
            return a().Iframe.prototype.ping.apply(this, [c, d])
        };
        b.prototype.register = function (c, d, e) {
            a().Iframe.prototype.register.apply(this, [c, d, e])
        };
        b.prototype.registerWasClosed = function (c, d) {
            a().Iframe.prototype.registerWasClosed.apply(this, [c, d])
        };
        b.prototype.registerWasRestyled = function (c, d) {
            a().Iframe.prototype.registerWasRestyled.apply(this,
                [c, d])
        };
        b.prototype.restyle = function (c, d) {
            return a().Iframe.prototype.restyle.apply(this, [c, d])
        };
        b.prototype.send = function (c, d, e, f) {
            return a().Iframe.prototype.send.apply(this, [c, d, e, f])
        };
        b.prototype.setParam = function (c, d) {
            a().Iframe.prototype.setParam.apply(this, [c, d])
        };
        b.prototype.setSiteEl = function (c) {
            a().Iframe.prototype.setSiteEl.apply(this, [c])
        };
        b.prototype.unregister = function (c, d) {
            a().Iframe.prototype.unregister.apply(this, [c, d])
        };
        return b
    }, Kl, Ll, Pl, Rl, Wl, em, fm, hm, lm, mm, sm, um, vm, xm, wm, ym;
    _.hj.prototype.iq = _.fb(4, function (a) {
        this.O.apis = a;
        return this
    });
    Kl = function (a, b) {
        a.O.onload = b
    };
    Ll = function (a) {
        return a.O.rpctoken
    };
    _.Ml = function (a, b) {
        a.O.queryParams = b;
        return a
    };
    _.Nl = function (a, b) {
        a.O.relayOpen = b;
        return a
    };
    _.Ol = function (a, b) {
        a.O.onClose = b;
        return a
    };
    Pl = function (a, b) {
        a.O.controllerData = b
    };
    _.Ql = function (a) {
        a.O.waitForOnload = !0;
        return a
    };
    Rl = function (a) {
        return (a = a.O.timeout) ? a : null
    };
    _.Sl = function (a) {
        return !!a && "object" === typeof a && _.ge.test(a.push)
    };
    _.Tl = function (a) {
        for (var b = 0; b < this.length; b++) if (this[b] === a) return b;
        return -1
    };
    _.Ul = function (a, b, c) {
        if (a) {
            _.Vk(_.Sl(a), "arrayForEach was called with a non array value");
            for (var d = 0; d < a.length; d++) b.call(c, a[d], d)
        }
    };
    _.Vl = function (a, b, c) {
        if (a) if (_.Sl(a)) _.Ul(a, b, c); else {
            _.Vk("object" === typeof a, "objectForEach was called with a non object value");
            c = c || a;
            for (var d in a) _.je(a, d) && void 0 !== a[d] && b.call(c, a[d], d)
        }
    };
    Wl = function (a) {
        this.O = a || {}
    };
    Wl.prototype.value = function () {
        return this.O
    };
    Wl.prototype.getIframe = function () {
        return this.O.iframe
    };
    var Xl = function (a, b) {
        a.O.role = b;
        return a
    }, Yl = function (a, b) {
        a.O.data = b;
        return a
    };
    Wl.prototype.Tj = function (a) {
        this.O.setRpcReady = a;
        return this
    };
    var Zl = function (a) {
        return a.O.setRpcReady
    };
    Wl.prototype.Hl = function (a) {
        this.O.rpctoken = a;
        return this
    };
    var $l = function (a) {
        a.O.selfConnect = !0;
        return a
    }, am = function (a) {
        this.O = a || {}
    };
    am.prototype.value = function () {
        return this.O
    };
    var cm = function (a) {
        var b = new bm;
        b.O.role = a;
        return b
    };
    am.prototype.vN = function () {
        return this.O.role
    };
    am.prototype.xc = function (a) {
        this.O.handler = a;
        return this
    };
    am.prototype.nb = function () {
        return this.O.handler
    };
    var dm = function (a, b) {
        a.O.filter = b;
        return a
    };
    am.prototype.iq = function (a) {
        this.O.apis = a;
        return this
    };
    hm = /^[\w\.\-]*$/;
    _.im = function (a) {
        return a.getOrigin() === a.getContext().getOrigin()
    };
    _.jm = function () {
        return !0
    };
    _.km = function (a) {
        for (var b = _.ie(), c = 0; c < a.length; c++) b[a[c]] = !0;
        return function (d) {
            return !!b[d.Ad]
        }
    };
    lm = function (a, b, c) {
        a = em[a];
        if (!a) return [];
        for (var d = [], e = 0; e < a.length; e++) d.push(_.Jj(a[e].call(c, b, c)));
        return d
    };
    mm = function (a, b, c) {
        return function (d) {
            if (!b.isDisposed()) {
                var e = this.origin, f = b.getOrigin();
                _.Vk(e === f, "Wrong origin " + e + " != " + f);
                e = this.callback;
                d = lm(a, d, b);
                !c && 0 < d.length && _.Nj(d).then(e)
            }
        }
    };
    _.qm = function (a, b, c) {
        _.Vk("_default" != a, "Cannot update default api");
        fm[a] = {map: b, filter: c}
    };
    _.rm = function (a, b, c) {
        _.Vk("_default" != a, "Cannot update default api");
        _.he(fm, a, {map: {}, filter: _.im}).map[b] = c
    };
    sm = function (a, b) {
        _.he(fm, "_default", {map: {}, filter: _.jm}).map[a] = b;
        _.Vl(_.gm.Of, function (c) {
            c.register(a, b, _.jm)
        })
    };
    _.tm = function () {
        return _.gm
    };
    um = /^https?:\/\/[^\/%\\?#\s]+$/i;
    vm = {
        longdesc: !0,
        name: !0,
        src: !0,
        frameborder: !0,
        marginwidth: !0,
        marginheight: !0,
        scrolling: !0,
        align: !0,
        height: !0,
        width: !0,
        id: !0,
        "class": !0,
        title: !0,
        tabindex: !0,
        hspace: !0,
        vspace: !0,
        allowtransparency: !0
    };
    xm = function (a) {
        this.resolve = this.reject = null;
        this.promise = _.hk((0, _.J)(function (b, c) {
            this.resolve = b;
            this.reject = c
        }, this));
        a && (this.promise = wm(this.promise, a))
    };
    wm = function (a, b) {
        return a.then(function (c) {
            try {
                b(c)
            } catch (d) {
            }
            return c
        })
    };
    ym = function (a) {
        this.Rf = a;
        this.Context = Il(a);
        this.Iframe = Jl(a)
    };
    _.g = ym.prototype;
    _.g.CROSS_ORIGIN_IFRAMES_FILTER = function (a) {
        return this.Rf().CROSS_ORIGIN_IFRAMES_FILTER(a)
    };
    _.g.SAME_ORIGIN_IFRAMES_FILTER = function (a) {
        return this.Rf().SAME_ORIGIN_IFRAMES_FILTER(a)
    };
    _.g.create = function (a, b, c) {
        return this.Rf().create(a, b, c)
    };
    _.g.getBeforeOpenStyle = function (a) {
        return this.Rf().getBeforeOpenStyle(a)
    };
    _.g.getContext = function () {
        return this.Rf().getContext()
    };
    _.g.getStyle = function (a) {
        return this.Rf().getStyle(a)
    };
    _.g.makeWhiteListIframesFilter = function (a) {
        return this.Rf().makeWhiteListIframesFilter(a)
    };
    _.g.registerBeforeOpenStyle = function (a, b) {
        return this.Rf().registerBeforeOpenStyle(a, b)
    };
    _.g.registerIframesApi = function (a, b, c) {
        return this.Rf().registerIframesApi(a, b, c)
    };
    _.g.registerIframesApiHandler = function (a, b, c) {
        return this.Rf().registerIframesApiHandler(a, b, c)
    };
    _.g.registerStyle = function (a, b) {
        return this.Rf().registerStyle(a, b)
    };
    var zm = function () {
        this.Ih = []
    };
    zm.prototype.Rf = function (a) {
        return this.Ih.length ? Am(this.Ih[0], a) : void 0
    };
    var Am = function (a, b) {
        b = void 0 === b ? function (c) {
            return new c
        } : b;
        return a.eC ? b(a.eC) : a.instance
    }, Bm = function () {
        zm.apply(this, arguments)
    };
    _.D(Bm, zm);
    var Dm = function (a) {
        var b = Cm.BL, c = a.priority, d = ~Hl(b.Ih, function (e) {
            return e.priority < c ? -1 : 1
        });
        b.Ih.splice(d, 0, a)
    };
    var Cm = new function () {
        var a = this;
        this.BL = new Bm;
        this.instance = new ym(function () {
            return a.BL.Rf()()
        })
    };
    Dm({
        instance: function () {
            return window.gapi.iframes
        }, priority: 1
    });
    _.Em = Cm.instance;
    var Fm, Gm;
    Fm = {height: !0, width: !0};
    Gm = /^(?!-*(?:expression|(?:moz-)?binding))(?:[.#]?-?(?:[_a-z0-9-]+)(?:-[_a-z0-9-]+)*-?|-?(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:[a-z]{1,2}|%)?|!important|)$/i;
    _.Hm = function (a) {
        "number" === typeof a && (a = String(a) + "px");
        return a
    };
    var Im = function () {
        Wl.apply(this, arguments)
    };
    _.D(Im, Wl);
    var bm = function () {
        am.apply(this, arguments)
    };
    _.D(bm, am);
    var Jm = function () {
        _.hj.apply(this, arguments)
    };
    _.D(Jm, _.hj);
    var Km = function (a) {
        Jm.call(this, a)
    };
    _.D(Km, Jm);
    var Lm = function (a, b) {
        a.O.frameName = b;
        return a
    };
    Km.prototype.getFrameName = function () {
        return this.O.frameName
    };
    var Mm = function (a, b) {
        a.O.rpcAddr = b;
        return a
    };
    Km.prototype.Vf = function () {
        return this.O.rpcAddr
    };
    var Nm = function (a, b) {
        a.O.retAddr = b;
        return a
    };
    _.g = Km.prototype;
    _.g.th = function () {
        return this.O.retAddr
    };
    _.g.Ri = function (a) {
        this.O.origin = a;
        return this
    };
    _.g.getOrigin = function () {
        return this.O.origin
    };
    _.g.Tj = function (a) {
        this.O.setRpcReady = a;
        return this
    };
    _.g.mq = function (a) {
        this.O.context = a
    };
    var Om = function (a, b) {
        a.O._rpcReadyFn = b
    };
    Km.prototype.getIframeEl = function () {
        return this.O.iframeEl
    };
    var Pm = function (a, b, c) {
        var d = a.Vf(), e = b.th();
        Nm(Mm(c, a.th() + "/" + b.Vf()), e + "/" + d);
        Lm(c, b.getFrameName()).Ri(b.getOrigin())
    };
    var Rm = function (a, b, c) {
        a.setTimeout(function () {
            b.closed || 5 == c ? Qm(b) : (b.close(), c++, Rm(a, b, c))
        }, 1E3)
    }, Qm = function (a) {
        a.closed || a.document && a.document.body && _.ce(a.document.body, "Please close this window.")
    };
    _.Sm = function (a, b, c, d) {
        this.vg = !1;
        this.kb = a;
        this.pG = b;
        this.Eo = c;
        this.Ia = d;
        this.fR = this.Ia.th();
        this.Ad = this.Ia.getOrigin();
        this.i0 = this.Ia.getIframeEl();
        this.uS = this.Ia.O.where;
        this.Ih = [];
        this.applyIframesApi("_default");
        a = this.Ia.O.apis || [];
        for (b = 0; b < a.length; b++) this.applyIframesApi(a[b]);
        this.kb.Of[c] = this
    };
    _.g = _.Sm.prototype;
    _.g.isDisposed = function () {
        return this.vg
    };
    _.g.Ha = function () {
        if (!this.isDisposed()) {
            for (var a = 0; a < this.Ih.length; a++) this.unregister(this.Ih[a]);
            delete _.gm.Of[this.getFrameName()];
            this.vg = !0
        }
    };
    _.g.getContext = function () {
        return this.kb
    };
    _.g.getOptions = function () {
        return this.Ia
    };
    _.g.Vf = function () {
        return this.pG
    };
    _.g.th = function () {
        return this.fR
    };
    _.g.getFrameName = function () {
        return this.Eo
    };
    _.g.getIframeEl = function () {
        return this.i0
    };
    _.g.getSiteEl = function () {
        return this.uS
    };
    _.g.setSiteEl = function (a) {
        this.uS = a
    };
    _.g.Tj = function () {
        (0, this.Ia.O._rpcReadyFn)()
    };
    _.g.setParam = function (a, b) {
        this.Ia.value()[a] = b
    };
    _.g.getParam = function (a) {
        return this.Ia.value()[a]
    };
    _.g.lc = function () {
        return this.Ia.value()
    };
    _.g.getId = function () {
        return this.Ia.getId()
    };
    _.g.getOrigin = function () {
        return this.Ad
    };
    var Tm = function (a, b) {
        var c = a.kb.getFrameName();
        return a.Eo + ":" + c + ":" + b
    };
    _.g = _.Sm.prototype;
    _.g.register = function (a, b, c) {
        _.Vk(!this.isDisposed(), "Cannot register handler on disposed iframe " + a);
        _.Vk((c || _.im)(this), "Rejecting untrusted message " + a);
        c = Tm(this, a);
        1 == _.he(em, c, []).push(b) && (this.Ih.push(a), _.Hk(c, mm(c, this, "_g_wasClosed" === a)))
    };
    _.g.unregister = function (a, b) {
        var c = Tm(this, a), d = em[c];
        d && (b ? (b = _.Tl.call(d, b), 0 <= b && d.splice(b, 1)) : d.splice(0, d.length), 0 == d.length && (b = _.Tl.call(this.Ih, a), 0 <= b && this.Ih.splice(b, 1), _.Ik(c)))
    };
    _.g.kZ = function () {
        return this.Ih
    };
    _.g.applyIframesApi = function (a) {
        this.tB = this.tB || [];
        if (!(0 <= _.Tl.call(this.tB, a))) {
            this.tB.push(a);
            a = fm[a] || {map: {}};
            for (var b in a.map) _.je(a.map, b) && this.register(b, a.map[b], a.filter)
        }
    };
    _.g.getWindow = function () {
        if (!_.im(this)) return null;
        var a = this.Ia.O._popupWindow;
        if (a) return a;
        var b = this.pG.split("/");
        a = this.getContext().getWindow();
        for (var c = 0; c < b.length && a; c++) {
            var d = b[c];
            a = ".." === d ? a == a.parent ? a.opener : a.parent : a.frames[d]
        }
        return a
    };
    var Um = function (a) {
        var b = {};
        if (a) for (var c in a) _.je(a, c) && _.je(Fm, c) && Gm.test(a[c]) && (b[c] = a[c]);
        return b
    };
    _.g = _.Sm.prototype;
    _.g.close = function (a, b) {
        return Vm(this, "_g_close", a, b)
    };
    _.g.restyle = function (a, b) {
        return Vm(this, "_g_restyle", a, b)
    };
    _.g.Xp = function (a, b) {
        return Vm(this, "_g_restyleDone", a, b)
    };
    _.g.WW = function (a) {
        return this.getContext().closeSelf(a, void 0, this)
    };
    _.g.Q3 = function (a) {
        if (a && "object" === typeof a) return this.getContext().restyleSelf(a, void 0, this)
    };
    _.g.R3 = function (a) {
        var b = this.Ia.O.onRestyle;
        b && b.call(this, a, this);
        a = a && "object" === typeof a ? Um(a) : {};
        (b = this.getIframeEl()) && a && "object" === typeof a && (_.je(a, "height") && (a.height = _.Hm(a.height)), _.je(a, "width") && (a.width = _.Hm(a.width)), _.ke(a, b.style))
    };
    _.g.XW = function (a) {
        var b = this.Ia.O.onClose;
        b && b.call(this, a, this);
        if (b = this.getOptions().O._popupWindow) {
            var c = this.getContext().getWindow().document.getElementById(this.getId());
            c && c.parentNode && c.parentNode.removeChild(c);
            c = this.getContext().getWindow();
            _.hd && _.Wg && c ? (c.focus(), Rm(c, b, 0)) : (b.close(), Qm(b))
        }
        b || (b = this.getIframeEl()) && b.parentNode && b.parentNode.removeChild(b);
        if (b = this.Ia.O.controller) c = {}, c.frameName = this.getFrameName(), Vm(b, "_g_disposeControl", c);
        b = Tm(this, "_g_wasClosed");
        lm(b,
            a, this)
    };
    _.g.registerWasRestyled = function (a, b) {
        this.register("_g_wasRestyled", a, b)
    };
    _.g.registerWasClosed = function (a, b) {
        this.register("_g_wasClosed", a, b)
    };
    _.g.r6 = function () {
        delete this.getContext().Of[this.getFrameName()];
        this.getContext().getWindow().setTimeout((0, _.J)(function () {
            this.Ha()
        }, this), 0)
    };
    _.g.send = function (a, b, c, d) {
        _.Vk(!this.isDisposed(), "Cannot send message to disposed iframe - " + a);
        _.Vk((d || _.im)(this), "Wrong target for message " + a);
        c = new xm(c);
        a = this.kb.getFrameName() + ":" + this.Eo + ":" + a;
        _.Lk(this.pG, a, c.resolve, b);
        return c.promise
    };
    var Vm = function (a, b, c, d) {
        return a.send(b, c, d, _.jm)
    };
    _.g = _.Sm.prototype;
    _.g.Q2 = function (a) {
        return a
    };
    _.g.ping = function (a, b) {
        return Vm(this, "_g_ping", b, a)
    };
    _.g.bX = function (a) {
        a = a && "object" === typeof a ? a : {};
        for (var b = a.rpcAddr, c = (this.Vf() + "/" + b).split("/"), d = this.getContext().getWindow(), e; (e = c.shift()) && d;) d = ".." == e ? d.parent : d.frames[e];
        _.Vk(!!d, "Bad rpc address " + b);
        a._window = d;
        a._parentRpcAddr = this.Vf();
        a._parentRetAddr = this.th();
        this.getContext();
        b = new _.Wm(a);
        this.Y1 && this.Y1(b, a.controllerData);
        this.XB = this.XB || [];
        this.XB.push(b, a.controllerData)
    };
    _.g.oX = function (a) {
        a = (a || {}).frameName;
        for (var b = this.XB || [], c = 0; c < b.length; c++) if (b[c].getFrameName() === a) {
            a = b.splice(c, 1)[0];
            a.Ha();
            this.c2 && this.c2(a);
            return
        }
        _.Vk(!1, "Unknown contolled iframe to dispose - " + a)
    };
    _.g.ZW = function (a) {
        var b = new Km(a);
        a = new Im(b.value());
        if (a.O.selfConnect) var c = this; else (_.Vk(um.test(b.getOrigin()), "Illegal origin for connected iframe - " + b.getOrigin()), c = this.getContext().Of[b.getFrameName()], c) ? Zl(b) && (c.Tj(), Vm(c, "_g_rpcReady")) : (b = Lm(Nm(Mm(new Km, b.Vf()), b.th()).Ri(b.getOrigin()), b.getFrameName()).Tj(Zl(b)).Hl(Ll(b)), c = this.getContext().attach(b.value()));
        b = this.getContext();
        var d = a.O.role;
        a = a.O.data;
        Xm(b);
        d = d || "";
        _.he(b.VB, d, []).push({xi: c, data: a});
        Ym(c, a, b.wF[d])
    };
    _.g.JH = function (a, b) {
        (new Km(b)).O._relayedDepth || (b = {}, $l(Xl(new Im(b), "_opener")), Vm(a, "_g_connect", b))
    };
    _.g.oQ = function (a) {
        var b = this, c = a.O.messageHandlers, d = a.O.messageHandlersFilter, e = a.O.onClose;
        _.Ol(_.jj(_.ij(a, null), null), null);
        return Vm(this, "_g_open", a.value()).then(function (f) {
            var h = new Km(f[0]), k = h.getFrameName();
            f = new Km;
            var l = b.th(), m = h.th();
            Nm(Mm(f, b.Vf() + "/" + h.Vf()), m + "/" + l);
            Lm(f, k);
            f.Ri(h.getOrigin());
            f.iq(h.O.apis);
            f.Hl(Ll(a));
            _.ij(f, c);
            _.jj(f, d);
            _.Ol(f, e);
            (h = b.getContext().Of[k]) || (h = b.getContext().attach(f.value()));
            return h
        })
    };
    _.g.qG = function (a) {
        var b = a.getUrl();
        _.Vk(!b || _.jl.test(b), "Illegal url for new iframe - " + b);
        var c = a.Am().value();
        b = {};
        for (var d in c) _.je(c, d) && _.je(vm, d) && (b[d] = c[d]);
        _.je(c, "style") && (d = c.style, "object" === typeof d && (b.style = Um(d)));
        a.value().attributes = b
    };
    _.g.C2 = function (a) {
        a = new Km(a);
        this.qG(a);
        var b = a.O._relayedDepth || 0;
        a.O._relayedDepth = b + 1;
        a.O.openerIframe = this;
        var c = Ll(a);
        a.Hl(null);
        var d = this;
        return this.getContext().open(a.value()).then(function (e) {
            var f = (new Km(e.lc())).O.apis, h = new Km;
            Pm(e, d, h);
            0 == b && Xl(new Im(h.value()), "_opener");
            h.Tj(!0);
            h.Hl(c);
            Vm(e, "_g_connect", h.value());
            h = new Km;
            Lm(Nm(Mm(h, e.Vf()), e.fR), e.getFrameName()).Ri(e.getOrigin()).iq(f);
            return h.value()
        })
    };
    _.g.P3 = function (a) {
        this.getContext().addOnOpenerHandler(function (b) {
            b.send("_g_wasRestyled", a, void 0, _.jm)
        }, null, _.jm)
    };
    var cn;
    _.Zm = _.ie();
    _.$m = _.ie();
    _.an = function (a, b) {
        _.Zm[a] = b
    };
    _.bn = function (a) {
        return _.Zm[a]
    };
    cn = function (a, b) {
        _.le.load("gapi.iframes.style." + a, b)
    };
    _.dn = function (a, b) {
        _.$m[a] = b
    };
    _.en = function (a) {
        return _.$m[a]
    };
    _.Wm = function (a) {
        a = a || {};
        this.vg = !1;
        this.uQ = _.ie();
        this.Of = _.ie();
        this.Jf = a._window || _.de;
        this.ld = this.Jf.location.href;
        this.vQ = (this.MF = fn(this.ld, "parent")) ? fn(this.ld, "pfname") : "";
        this.Ca = this.MF ? fn(this.ld, "_gfid") || fn(this.ld, "id") : "";
        this.Eo = _.wl(this.Ca, this.vQ);
        this.Ad = _.hg(this.ld);
        if (this.Ca) {
            var b = new Km;
            Mm(b, a._parentRpcAddr || "..");
            Nm(b, a._parentRetAddr || this.Ca);
            b.Ri(_.hg(this.MF || this.ld));
            Lm(b, this.vQ);
            this.Db = this.attach(b.value())
        } else this.Db = null
    };
    _.g = _.Wm.prototype;
    _.g.isDisposed = function () {
        return this.vg
    };
    _.g.Ha = function () {
        if (!this.isDisposed()) {
            for (var a = _.pa(Object.values(this.Of)), b = a.next(); !b.done; b = a.next()) b.value.Ha();
            this.vg = !0
        }
    };
    _.g.getFrameName = function () {
        return this.Eo
    };
    _.g.getOrigin = function () {
        return this.Ad
    };
    _.g.getWindow = function () {
        return this.Jf
    };
    _.g.lb = function () {
        return this.Jf.document
    };
    _.g.setGlobalParam = function (a, b) {
        this.uQ[a] = b
    };
    _.g.getGlobalParam = function (a) {
        return this.uQ[a]
    };
    _.g.attach = function (a) {
        _.Vk(!this.isDisposed(), "Cannot attach iframe in disposed context");
        a = new Km(a);
        a.Vf() || Mm(a, a.getId());
        a.th() || Nm(a, "..");
        a.getOrigin() || a.Ri(_.hg(a.getUrl()));
        a.getFrameName() || Lm(a, _.wl(a.getId(), this.Eo));
        var b = a.getFrameName();
        if (this.Of[b]) return this.Of[b];
        var c = a.Vf(), d = c;
        a.getOrigin() && (d = c + "|" + a.getOrigin());
        var e = a.th(), f = Ll(a);
        f || (f = (f = a.getIframeEl()) && (f.getAttribute("data-postorigin") || f.src) || a.getUrl(), f = _.me(f, "rpctoken"));
        Om(a, _.Sk(d, e, f, a.O._popupWindow));
        d = ((window.gadgets || {}).rpc || {}).setAuthToken;
        f && d && d(c, f);
        var h = new _.Sm(this, c, b, a), k = a.O.messageHandlersFilter;
        _.Vl(a.O.messageHandlers, function (l, m) {
            h.register(m, l, k)
        });
        Zl(a) && h.Tj();
        Vm(h, "_g_rpcReady");
        return h
    };
    _.g.qG = function (a) {
        Lm(a, null);
        var b = a.getId();
        !b || hm.test(b) && !this.getWindow().document.getElementById(b) || (_.uf.log("Ignoring requested iframe ID - " + b), a.ve(null))
    };
    var fn = function (a, b) {
        var c = _.me(a, b);
        c || (c = _.pf(_.me(a, "jcp", ""))[b]);
        return c || ""
    };
    _.Wm.prototype.openChild = function (a) {
        _.Vk(!this.isDisposed(), "Cannot open iframe in disposed context");
        var b = new Km(a);
        gn(this, b);
        var c = b.getFrameName();
        if (c && this.Of[c]) return this.Of[c];
        this.qG(b);
        c = b.getUrl();
        _.Vk(c, "No url for new iframe");
        var d = b.O.queryParams || {};
        d.usegapi = "1";
        _.Ml(b, d);
        d = this.WN && this.WN(c, b);
        d || (d = b.O.where, _.Vk(!!d, "No location for new iframe"), c = _.Gl(c, d, a), b.O.iframeEl = c, d = c.getAttribute("id"));
        Mm(b, d).ve(d);
        b.Ri(_.hg(b.O.eurl || ""));
        this.xP && this.xP(b, b.getIframeEl());
        c = this.attach(a);
        c.JH && c.JH(c, a);
        (a = b.O.onCreate) && a(c);
        b.O.disableRelayOpen || c.applyIframesApi("_open");
        return c
    };
    var hn = function (a, b, c) {
        var d = b.O.canvasUrl;
        if (!d) return c;
        _.Vk(!b.O.allowPost && !b.O.forcePost, "Post is not supported when using canvas url");
        var e = b.getUrl();
        _.Vk(e && _.hg(e) === a.Ad && _.hg(d) === a.Ad, "Wrong origin for canvas or hidden url " + d);
        b.setUrl(d);
        _.Ql(b);
        b.O.canvasUrl = null;
        return function (f) {
            var h = f.getWindow(), k = h.location.hash;
            k = _.Fl(e) + (/#/.test(e) ? k.replace(/^#/, "&") : k);
            h.location.replace(k);
            c && c(f)
        }
    }, jn = function (a, b, c) {
        var d = b.O.relayOpen;
        if (d) {
            var e = a.getParentIframe();
            d instanceof _.Sm ?
                (e = d, _.Nl(b, 0)) : 0 < Number(d) && _.Nl(b, Number(d) - 1);
            if (e) {
                _.Vk(!!e.oQ, "Relaying iframe open is disabled");
                if (d = b.getStyle()) if (d = _.$m[d]) b.mq(a), d(b.value()), b.mq(null);
                b.O.openerIframe = null;
                c.resolve(e.oQ(b));
                return !0
            }
        }
        return !1
    }, kn = function (a, b, c) {
        var d = b.getStyle();
        if (d) if (_.Vk(!!_.bn, "Defer style is disabled, when requesting style " + d), _.Zm[d]) gn(a, b); else return cn(d, function () {
            _.Vk(!!_.Zm[d], "Fail to load style - " + d);
            c.resolve(a.open(b.value()))
        }), !0;
        return !1
    };
    _.Wm.prototype.open = function (a, b) {
        _.Vk(!this.isDisposed(), "Cannot open iframe in disposed context");
        var c = new Km(a);
        b = hn(this, c, b);
        var d = new xm(b);
        (b = c.getUrl()) && c.setUrl(_.Fl(b));
        if (jn(this, c, d) || kn(this, c, d) || jn(this, c, d)) return d.promise;
        if (null != Rl(c)) {
            var e = setTimeout(function () {
                h.getIframeEl().src = "about:blank";
                d.reject({timeout: "Exceeded time limit of :" + Rl(c) + "milliseconds"})
            }, Rl(c)), f = d.resolve;
            d.resolve = function (k) {
                clearTimeout(e);
                f(k)
            }
        }
        c.O.waitForOnload && Kl(c.Am(), function () {
            d.resolve(h)
        });
        var h = this.openChild(a);
        c.O.waitForOnload || d.resolve(h);
        return d.promise
    };
    _.Wm.prototype.getParentIframe = function () {
        return this.Db
    };
    var ln = function (a, b) {
        var c = a.getParentIframe(), d = !0;
        b.filter && (d = b.filter.call(b.xi, b.params));
        return _.Jj(d).then(function (e) {
            return e && c ? (b.tQ && b.tQ.call(a, b.params), e = b.sender ? b.sender(b.params) : Vm(c, b.message, b.params), b.q6 ? e.then(function () {
                return !0
            }) : !0) : !1
        })
    };
    _.g = _.Wm.prototype;
    _.g.closeSelf = function (a, b, c) {
        a = ln(this, {
            sender: function (d) {
                var e = _.gm.getParentIframe();
                _.Vl(_.gm.Of, function (f) {
                    f !== e && Vm(f, "_g_wasClosed", d)
                });
                return Vm(e, "_g_closeMe", d)
            }, message: "_g_closeMe", params: a, xi: c, filter: this.getGlobalParam("onCloseSelfFilter")
        });
        b = new xm(b);
        b.resolve(a);
        return b.promise
    };
    _.g.restyleSelf = function (a, b, c) {
        a = a || {};
        b = new xm(b);
        b.resolve(ln(this, {
            message: "_g_restyleMe",
            params: a,
            xi: c,
            filter: this.getGlobalParam("onRestyleSelfFilter"),
            q6: !0,
            tQ: this.VS
        }));
        return b.promise
    };
    _.g.VS = function (a) {
        "auto" === a.height && (a.height = _.Uk())
    };
    _.g.setCloseSelfFilter = function (a) {
        this.setGlobalParam("onCloseSelfFilter", a)
    };
    _.g.setRestyleSelfFilter = function (a) {
        this.setGlobalParam("onRestyleSelfFilter", a)
    };
    var gn = function (a, b) {
        var c = b.getStyle();
        if (c) {
            b.Nh(null);
            var d = _.Zm[c];
            _.Vk(d, "No such style: " + c);
            b.mq(a);
            d(b.value());
            b.mq(null)
        }
    };
    _.Wm.prototype.ready = function (a, b, c, d) {
        var e = b || {}, f = this.getParentIframe();
        this.addOnOpenerHandler(function (k) {
            _.Vl(e, function (l, m) {
                k.register(m, l, d)
            }, this);
            k !== f && k.send("_ready", h, void 0, d)
        }, void 0, d);
        var h = a || {};
        h.height = h.height || "auto";
        this.VS(h);
        f && f.send("_ready", h, c, _.jm)
    };
    _.Wm.prototype.connectIframes = function (a, b) {
        a = new Im(a);
        var c = new Im(b), d = Zl(a);
        b = a.getIframe();
        var e = c.getIframe();
        if (e) {
            var f = Ll(a), h = new Km;
            Pm(b, e, h);
            Yl(Xl((new Im(h.value())).Hl(f), a.O.role), a.O.data).Tj(d);
            var k = new Km;
            Pm(e, b, k);
            Yl(Xl((new Im(k.value())).Hl(f), c.O.role), c.O.data).Tj(!0);
            Vm(b, "_g_connect", h.value(), function () {
                d || Vm(e, "_g_connect", k.value())
            });
            d && Vm(e, "_g_connect", k.value())
        } else c = {}, Yl(Xl($l(new Im(c)), a.O.role), a.O.data), Vm(b, "_g_connect", c)
    };
    var Xm = function (a) {
        a.VB || (a.VB = _.ie(), a.wF = _.ie())
    };
    _.Wm.prototype.addOnConnectHandler = function (a, b, c, d) {
        Xm(this);
        "object" === typeof a ? (b = new bm(a), c = b.vN() || "") : (b = dm(cm(a).xc(b).iq(c), d), c = a);
        d = this.VB[c] || [];
        a = !1;
        for (var e = 0; e < d.length && !a; e++) Ym(this.Of[d[e].xi.getFrameName()], d[e].data, [b]), a = b.O.runOnce;
        c = _.he(this.wF, c, []);
        a || b.O.dontWait || c.push(b)
    };
    _.Wm.prototype.removeOnConnectHandler = function (a, b) {
        a = _.he(this.wF, a, []);
        if (b) for (var c = !1, d = 0; !c && d < a.length; d++) a[d].nb() === b && (c = !0, a.splice(d, 1)); else a.splice(0, a.length)
    };
    var Ym = function (a, b, c) {
        c = c || [];
        for (var d = 0; d < c.length; d++) {
            var e = c[d];
            if (e && a) {
                var f = e.O.filter || _.im;
                if (a && f(a)) {
                    f = e.O.apis || [];
                    for (var h = 0; h < f.length; h++) a.applyIframesApi(f[h]);
                    e.nb() && e.nb()(a, b);
                    e.O.runOnce && (c.splice(d, 1), --d)
                }
            }
        }
    };
    _.Wm.prototype.addOnOpenerHandler = function (a, b, c) {
        var d = this.addOnConnectHandler;
        a = dm(cm("_opener").xc(a).iq(b), c);
        a.O.runOnce = !0;
        d.call(this, a.value())
    };
    _.Wm.prototype.xP = function (a, b) {
        var c = a.O.controller;
        if (c) {
            _.Vk(c.Ad === a.getOrigin(), "Wrong controller origin " + this.Ad + " !== " + a.getOrigin());
            var d = a.Vf();
            Mm(a, c.Vf());
            Nm(a, c.th());
            var e = new Km;
            Pl(Mm(e, d), a.O.controllerData);
            _.re(b, "load", function () {
                c.send("_g_control", e.value())
            })
        }
    };
    var mn = function (a, b, c) {
        a = a.getWindow();
        var d = a.document, e = c.O.reuseWindow;
        if (e) {
            var f = c.getId();
            if (!f) throw Error("N");
        } else f = _.vl(d, c);
        var h = f, k = c.O.rpcRelayUrl;
        if (k) {
            k = _.El(k);
            h = c.O.fragmentParams || {};
            h.rly = f;
            c.O.fragmentParams = h;
            h = c.O.where || d.body;
            _.Vk(!!h, "Cannot open window in a page with no body");
            var l = {};
            l.src = k;
            l.style = "display:none;";
            l.id = f;
            l.name = f;
            _.zl(d, h, l, f);
            h = f + "_relay"
        }
        b = _.Fl(b);
        var m = _.xl(d, b, f, c.value());
        c.O.eurl = m;
        b = c.O.openAsWindow;
        "string" !== typeof b && (b = void 0);
        c = window.navigator.userAgent ||
            "";
        /Trident|MSIE/i.test(c) && /#/.test(c) && (m = "javascript:window.location.replace(" + _.de.JSON.stringify(m).replace(/#/g, "\\x23") + ")");
        if (e) {
            var n = e;
            setTimeout(function () {
                n.location.replace(m)
            })
        } else n = _.Ed(m, a, h, b);
        return {id: f, lT: n}
    };
    _.Wm.prototype.WN = function (a, b) {
        if (b.O.openAsWindow) {
            a = mn(this, a, b);
            var c = a.id;
            _.Vk(!!a.lT, "Open popup window failed");
            b.O._popupWindow = a.lT
        }
        return c
    };
    em = _.ie();
    fm = _.ie();
    _.gm = new _.Wm;
    sm("_g_rpcReady", _.Sm.prototype.Tj);
    sm("_g_discover", _.Sm.prototype.kZ);
    sm("_g_ping", _.Sm.prototype.Q2);
    sm("_g_close", _.Sm.prototype.WW);
    sm("_g_closeMe", _.Sm.prototype.XW);
    sm("_g_restyle", _.Sm.prototype.Q3);
    sm("_g_restyleMe", _.Sm.prototype.R3);
    sm("_g_wasClosed", _.Sm.prototype.r6);
    _.rm("control", "_g_control", _.Sm.prototype.bX);
    _.rm("control", "_g_disposeControl", _.Sm.prototype.oX);
    var nn = _.gm.getParentIframe();
    nn && nn.register("_g_restyleDone", _.Sm.prototype.P3, _.jm);
    sm("_g_connect", _.Sm.prototype.ZW);
    var on = {};
    on._g_open = _.Sm.prototype.C2;
    _.qm("_open", on, _.jm);
    var pn = {
        Context: _.Wm,
        Iframe: _.Sm,
        SAME_ORIGIN_IFRAMES_FILTER: _.im,
        CROSS_ORIGIN_IFRAMES_FILTER: _.jm,
        makeWhiteListIframesFilter: _.km,
        getContext: _.tm,
        registerIframesApi: _.qm,
        registerIframesApiHandler: _.rm,
        registerStyle: _.an,
        registerBeforeOpenStyle: _.dn,
        getStyle: _.bn,
        getBeforeOpenStyle: _.en,
        create: _.Gl
    };
    Dm({
        instance: function () {
            return pn
        }, priority: 2
    });
    _.rm("gapi.load", "_g_gapi.load", function (a) {
        return new _.Fj(function (b) {
            _.le.load(a && "object" === typeof a && a.features || "", b)
        })
    });

    _.u("gapi.iframes.create", _.Gl);

    _.u("gapi.iframes.registerStyle", _.an);
    _.u("gapi.iframes.registerBeforeOpenStyle", _.dn);
    _.u("gapi.iframes.getStyle", _.bn);
    _.u("gapi.iframes.getBeforeOpenStyle", _.en);
    _.u("gapi.iframes.registerIframesApi", _.qm);
    _.u("gapi.iframes.registerIframesApiHandler", _.rm);
    _.u("gapi.iframes.getContext", _.tm);
    _.u("gapi.iframes.SAME_ORIGIN_IFRAMES_FILTER", _.im);
    _.u("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER", _.jm);
    _.u("gapi.iframes.makeWhiteListIframesFilter", _.km);
    _.u("gapi.iframes.Context", _.Wm);
    _.u("gapi.iframes.Context.prototype.isDisposed", _.Wm.prototype.isDisposed);
    _.u("gapi.iframes.Context.prototype.getWindow", _.Wm.prototype.getWindow);
    _.u("gapi.iframes.Context.prototype.getFrameName", _.Wm.prototype.getFrameName);
    _.u("gapi.iframes.Context.prototype.getGlobalParam", _.Wm.prototype.getGlobalParam);
    _.u("gapi.iframes.Context.prototype.setGlobalParam", _.Wm.prototype.setGlobalParam);
    _.u("gapi.iframes.Context.prototype.open", _.Wm.prototype.open);
    _.u("gapi.iframes.Context.prototype.openChild", _.Wm.prototype.openChild);
    _.u("gapi.iframes.Context.prototype.getParentIframe", _.Wm.prototype.getParentIframe);
    _.u("gapi.iframes.Context.prototype.closeSelf", _.Wm.prototype.closeSelf);
    _.u("gapi.iframes.Context.prototype.restyleSelf", _.Wm.prototype.restyleSelf);
    _.u("gapi.iframes.Context.prototype.setCloseSelfFilter", _.Wm.prototype.setCloseSelfFilter);
    _.u("gapi.iframes.Context.prototype.setRestyleSelfFilter", _.Wm.prototype.setRestyleSelfFilter);
    _.u("gapi.iframes.Context.prototype.addOnConnectHandler", _.Wm.prototype.addOnConnectHandler);
    _.u("gapi.iframes.Context.prototype.removeOnConnectHandler", _.Wm.prototype.removeOnConnectHandler);
    _.u("gapi.iframes.Context.prototype.addOnOpenerHandler", _.Wm.prototype.addOnOpenerHandler);
    _.u("gapi.iframes.Context.prototype.connectIframes", _.Wm.prototype.connectIframes);
    _.u("gapi.iframes.Iframe", _.Sm);
    _.u("gapi.iframes.Iframe.prototype.isDisposed", _.Sm.prototype.isDisposed);
    _.u("gapi.iframes.Iframe.prototype.getContext", _.Sm.prototype.getContext);
    _.u("gapi.iframes.Iframe.prototype.getFrameName", _.Sm.prototype.getFrameName);
    _.u("gapi.iframes.Iframe.prototype.getId", _.Sm.prototype.getId);
    _.u("gapi.iframes.Iframe.prototype.register", _.Sm.prototype.register);
    _.u("gapi.iframes.Iframe.prototype.unregister", _.Sm.prototype.unregister);
    _.u("gapi.iframes.Iframe.prototype.send", _.Sm.prototype.send);
    _.u("gapi.iframes.Iframe.prototype.applyIframesApi", _.Sm.prototype.applyIframesApi);
    _.u("gapi.iframes.Iframe.prototype.getIframeEl", _.Sm.prototype.getIframeEl);
    _.u("gapi.iframes.Iframe.prototype.getSiteEl", _.Sm.prototype.getSiteEl);
    _.u("gapi.iframes.Iframe.prototype.setSiteEl", _.Sm.prototype.setSiteEl);
    _.u("gapi.iframes.Iframe.prototype.getWindow", _.Sm.prototype.getWindow);
    _.u("gapi.iframes.Iframe.prototype.getOrigin", _.Sm.prototype.getOrigin);
    _.u("gapi.iframes.Iframe.prototype.close", _.Sm.prototype.close);
    _.u("gapi.iframes.Iframe.prototype.restyle", _.Sm.prototype.restyle);
    _.u("gapi.iframes.Iframe.prototype.restyleDone", _.Sm.prototype.Xp);
    _.u("gapi.iframes.Iframe.prototype.registerWasRestyled", _.Sm.prototype.registerWasRestyled);
    _.u("gapi.iframes.Iframe.prototype.registerWasClosed", _.Sm.prototype.registerWasClosed);
    _.u("gapi.iframes.Iframe.prototype.getParam", _.Sm.prototype.getParam);
    _.u("gapi.iframes.Iframe.prototype.setParam", _.Sm.prototype.setParam);
    _.u("gapi.iframes.Iframe.prototype.ping", _.Sm.prototype.ping);
    _.u("gapi.iframes.Iframe.prototype.getOpenParams", _.Sm.prototype.lc);

    _.Ee = _.Ee || {};

    _.Ee = _.Ee || {};
    (function () {
        function a(c) {
            var d = "undefined" === typeof c;
            if (null !== b && d) return b;
            var e = {};
            c = c || window.location.href;
            var f = c.indexOf("?"), h = c.indexOf("#");
            c = (-1 === h ? c.substr(f + 1) : [c.substr(f + 1, h - f - 1), "&", c.substr(h + 1)].join("")).split("&");
            f = window.decodeURIComponent ? decodeURIComponent : unescape;
            h = 0;
            for (var k = c.length; h < k; ++h) {
                var l = c[h].indexOf("=");
                if (-1 !== l) {
                    var m = c[h].substring(0, l);
                    l = c[h].substring(l + 1);
                    l = l.replace(/\+/g, " ");
                    try {
                        e[m] = f(l)
                    } catch (n) {
                    }
                }
            }
            d && (b = e);
            return e
        }

        var b = null;
        _.Ee.Dg = a;
        a()
    })();
    _.u("gadgets.util.getUrlParameters", _.Ee.Dg);

    _.ig = window.googleapis && window.googleapis.server || {};

    _.Je = function () {
        var a = window.gadgets && window.gadgets.config && window.gadgets.config.get;
        a && _.Ce(a());
        return {
            register: function (b, c, d) {
                d && d(_.Be())
            }, get: function (b) {
                return _.Be(b)
            }, update: function (b, c) {
                if (c) throw"Config replacement is not supported";
                _.Ce(b)
            }, yd: function () {
            }
        }
    }();
    _.u("gadgets.config.register", _.Je.register);
    _.u("gadgets.config.get", _.Je.get);
    _.u("gadgets.config.init", _.Je.yd);
    _.u("gadgets.config.update", _.Je.update);

    _.u("gadgets.json.stringify", _.qf);
    _.u("gadgets.json.parse", _.pf);

    (function () {
        function a(e, f) {
            if (!(e < c) && d) if (2 === e && d.warn) d.warn(f); else if (3 === e && d.error) try {
                d.error(f)
            } catch (h) {
            } else d.log && d.log(f)
        }

        var b = function (e) {
            a(1, e)
        };
        _.Ge = function (e) {
            a(2, e)
        };
        _.He = function (e) {
            a(3, e)
        };
        _.Ie = function () {
        };
        b.INFO = 1;
        b.WARNING = 2;
        b.NONE = 4;
        var c = 1, d = window.console ? window.console : window.opera ? window.opera.postError : void 0;
        return b
    })();

    _.Ee = _.Ee || {};
    (function () {
        var a = [];
        _.Ee.Cfa = function (b) {
            a.push(b)
        };
        _.Ee.Nfa = function () {
            for (var b = 0, c = a.length; b < c; ++b) a[b]()
        }
    })();

    _.vf = function () {
        var a = _.ee.readyState;
        return "complete" === a || "interactive" === a && -1 == navigator.userAgent.indexOf("MSIE")
    };
    _.wf = function (a) {
        if (_.vf()) a(); else {
            var b = !1, c = function () {
                if (!b) return b = !0, a.apply(this, arguments)
            };
            _.de.addEventListener ? (_.de.addEventListener("load", c, !1), _.de.addEventListener("DOMContentLoaded", c, !1)) : _.de.attachEvent && (_.de.attachEvent("onreadystatechange", function () {
                _.vf() && c.apply(this, arguments)
            }), _.de.attachEvent("onload", c))
        }
    };
    _.xf = function (a, b) {
        var c = _.he(_.te, "watt", _.ie());
        _.he(c, a, b)
    };
    _.me(_.de.location.href, "rpctoken") && _.re(_.ee, "unload", function () {
    });
    var yf = yf || {};
    yf.hR = null;
    yf.OP = null;
    yf.Ax = null;
    yf.frameElement = null;
    yf = yf || {};
    yf.vJ || (yf.vJ = function () {
        function a(f, h, k) {
            "undefined" != typeof window.addEventListener ? window.addEventListener(f, h, k) : "undefined" != typeof window.attachEvent && window.attachEvent("on" + f, h);
            "message" === f && (window.___jsl = window.___jsl || {}, f = window.___jsl, f.RPMQ = f.RPMQ || [], f.RPMQ.push(h))
        }

        function b(f) {
            var h = _.pf(f.data);
            if (h && h.f) {
                _.Ie();
                var k = _.zf.Im(h.f);
                e && ("undefined" !== typeof f.origin ? f.origin !== k : f.domain !== /^.+:\/\/([^:]+).*/.exec(k)[1]) ? _.He("Invalid rpc message origin. " + k + " vs " + (f.origin || "")) :
                    c(h, f.origin)
            }
        }

        var c, d, e = !0;
        return {
            UM: function () {
                return "wpm"
            }, P0: function () {
                return !0
            }, yd: function (f, h) {
                _.Je.register("rpc", null, function (k) {
                    "true" === String((k && k.rpc || {}).disableForceSecure) && (e = !1)
                });
                c = f;
                d = h;
                a("message", b, !1);
                d("..", !0);
                return !0
            }, Gb: function (f) {
                d(f, !0);
                return !0
            }, call: function (f, h, k) {
                var l = _.zf.Im(f), m = _.zf.jK(f);
                l ? window.setTimeout(function () {
                    var n = _.qf(k);
                    _.Ie();
                    m.postMessage(n, l)
                }, 0) : ".." != f && _.He("No relay set (used as window.postMessage targetOrigin), cannot send cross-domain message");
                return !0
            }
        }
    }());
    if (window.gadgets && window.gadgets.rpc) "undefined" != typeof _.zf && _.zf || (_.zf = window.gadgets.rpc, _.zf.config = _.zf.config, _.zf.register = _.zf.register, _.zf.unregister = _.zf.unregister, _.zf.PQ = _.zf.registerDefault, _.zf.US = _.zf.unregisterDefault, _.zf.GM = _.zf.forceParentVerifiable, _.zf.call = _.zf.call, _.zf.js = _.zf.getRelayUrl, _.zf.Ti = _.zf.setRelayUrl, _.zf.Nz = _.zf.setAuthToken, _.zf.Wt = _.zf.setupReceiver, _.zf.wm = _.zf.getAuthToken, _.zf.gG = _.zf.removeReceiver, _.zf.sN = _.zf.getRelayChannel, _.zf.NQ = _.zf.receive,
        _.zf.OQ = _.zf.receiveSameDomain, _.zf.getOrigin = _.zf.getOrigin, _.zf.Im = _.zf.getTargetOrigin, _.zf.jK = _.zf._getTargetWin, _.zf.UV = _.zf._parseSiblingId); else {
        _.zf = function () {
            function a(C, Y) {
                if (!W[C]) {
                    var S = Z;
                    Y || (S = Sa);
                    W[C] = S;
                    Y = K[C] || [];
                    for (var ma = 0; ma < Y.length; ++ma) {
                        var Ca = Y[ma];
                        Ca.t = B[C];
                        S.call(C, Ca.f, Ca)
                    }
                    K[C] = []
                }
            }

            function b() {
                function C() {
                    cb = !0
                }

                qa || ("undefined" != typeof window.addEventListener ? window.addEventListener("unload", C, !1) : "undefined" != typeof window.attachEvent && window.attachEvent("onunload",
                    C), qa = !0)
            }

            function c(C, Y, S, ma, Ca) {
                B[Y] && B[Y] === S || (_.He("Invalid gadgets.rpc token. " + B[Y] + " vs " + S), ra(Y, 2));
                Ca.onunload = function () {
                    G[Y] && !cb && (ra(Y, 1), _.zf.gG(Y))
                };
                b();
                ma = _.pf(decodeURIComponent(ma))
            }

            function d(C, Y) {
                if (C && "string" === typeof C.s && "string" === typeof C.f && C.a instanceof Array) if (B[C.f] && B[C.f] !== C.t && (_.He("Invalid gadgets.rpc token. " + B[C.f] + " vs " + C.t), ra(C.f, 2)), "__ack" === C.s) window.setTimeout(function () {
                    a(C.f, !0)
                }, 0); else {
                    C.c && (C.callback = function (ja) {
                        _.zf.call(C.f, (C.g ? "legacy__" :
                            "") + "__cb", null, C.c, ja)
                    });
                    if (Y) {
                        var S = e(Y);
                        C.origin = Y;
                        var ma = C.r;
                        try {
                            var Ca = e(ma)
                        } catch (ja) {
                        }
                        ma && Ca == S || (ma = Y);
                        C.referer = ma
                    }
                    Y = (r[C.s] || r[""]).apply(C, C.a);
                    C.c && "undefined" !== typeof Y && _.zf.call(C.f, "__cb", null, C.c, Y)
                }
            }

            function e(C) {
                if (!C) return "";
                C = C.split("#")[0].split("?")[0];
                C = C.toLowerCase();
                0 == C.indexOf("//") && (C = window.location.protocol + C);
                -1 == C.indexOf("://") && (C = window.location.protocol + "//" + C);
                var Y = C.substring(C.indexOf("://") + 3), S = Y.indexOf("/");
                -1 != S && (Y = Y.substring(0, S));
                C = C.substring(0,
                    C.indexOf("://"));
                if ("http" !== C && "https" !== C && "chrome-extension" !== C && "file" !== C && "android-app" !== C && "chrome-search" !== C && "chrome-untrusted" !== C && "chrome" !== C && "devtools" !== C) throw Error("s");
                S = "";
                var ma = Y.indexOf(":");
                if (-1 != ma) {
                    var Ca = Y.substring(ma + 1);
                    Y = Y.substring(0, ma);
                    if ("http" === C && "80" !== Ca || "https" === C && "443" !== Ca) S = ":" + Ca
                }
                return C + "://" + Y + S
            }

            function f(C) {
                if ("/" == C.charAt(0)) {
                    var Y = C.indexOf("|");
                    return {id: 0 < Y ? C.substring(1, Y) : C.substring(1), origin: 0 < Y ? C.substring(Y + 1) : null}
                }
                return null
            }

            function h(C) {
                if ("undefined" === typeof C || ".." === C) return window.parent;
                var Y = f(C);
                if (Y) return window.top.frames[Y.id];
                C = String(C);
                return (Y = window.frames[C]) ? Y : (Y = document.getElementById(C)) && Y.contentWindow ? Y.contentWindow : null
            }

            function k(C, Y) {
                if (!0 !== G[C]) {
                    "undefined" === typeof G[C] && (G[C] = 0);
                    var S = h(C);
                    ".." !== C && null == S || !0 !== Z.Gb(C, Y) ? !0 !== G[C] && 10 > G[C]++ ? window.setTimeout(function () {
                        k(C, Y)
                    }, 500) : (W[C] = Sa, G[C] = !0) : G[C] = !0
                }
            }

            function l(C) {
                (C = w[C]) && "/" === C.substring(0, 1) && (C = "/" === C.substring(1, 2) ?
                    document.location.protocol + C : document.location.protocol + "//" + document.location.host + C);
                return C
            }

            function m(C, Y, S) {
                Y && !/http(s)?:\/\/.+/.test(Y) && (0 == Y.indexOf("//") ? Y = window.location.protocol + Y : "/" == Y.charAt(0) ? Y = window.location.protocol + "//" + window.location.host + Y : -1 == Y.indexOf("://") && (Y = window.location.protocol + "//" + Y));
                w[C] = Y;
                "undefined" !== typeof S && (A[C] = !!S)
            }

            function n(C, Y) {
                Y = Y || "";
                B[C] = String(Y);
                k(C, Y)
            }

            function q(C) {
                C = (C.passReferrer || "").split(":", 2);
                I = C[0] || "none";
                U = C[1] || "origin"
            }

            function p(C) {
                "true" ===
                String(C.useLegacyProtocol) && (Z = yf.Ax || Sa, Z.yd(d, a))
            }

            function t(C, Y) {
                function S(ma) {
                    ma = ma && ma.rpc || {};
                    q(ma);
                    var Ca = ma.parentRelayUrl || "";
                    Ca = e(N.parent || Y) + Ca;
                    m("..", Ca, "true" === String(ma.useLegacyProtocol));
                    p(ma);
                    n("..", C)
                }

                !N.parent && Y ? S({}) : _.Je.register("rpc", null, S)
            }

            function v(C, Y, S) {
                if (".." === C) t(S || N.rpctoken || N.ifpctok || "", Y); else a:{
                    var ma = null;
                    if ("/" != C.charAt(0)) {
                        if (!_.Ee) break a;
                        ma = document.getElementById(C);
                        if (!ma) throw Error("t`" + C);
                    }
                    ma = ma && ma.src;
                    Y = Y || e(ma);
                    m(C, Y);
                    Y = _.Ee.Dg(ma);
                    n(C, S ||
                        Y.rpctoken)
                }
            }

            var r = {}, w = {}, A = {}, B = {}, F = 0, x = {}, G = {}, N = {}, W = {}, K = {}, I = null, U = null,
                ea = window.top !== window.self, ua = window.name, ra = function () {
                }, Fa = window.console, Da = Fa && Fa.log && function (C) {
                    Fa.log(C)
                } || function () {
                }, Sa = function () {
                    function C(Y) {
                        return function () {
                            Da(Y + ": call ignored")
                        }
                    }

                    return {
                        UM: function () {
                            return "noop"
                        }, P0: function () {
                            return !0
                        }, yd: C("init"), Gb: C("setup"), call: C("call")
                    }
                }();
            _.Ee && (N = _.Ee.Dg());
            var cb = !1, qa = !1, Z = function () {
                if ("rmr" == N.rpctx) return yf.hR;
                var C = "function" === typeof window.postMessage ?
                    yf.vJ : "object" === typeof window.postMessage ? yf.vJ : window.ActiveXObject ? yf.OP ? yf.OP : yf.Ax : 0 < navigator.userAgent.indexOf("WebKit") ? yf.hR : "Gecko" === navigator.product ? yf.frameElement : yf.Ax;
                C || (C = Sa);
                return C
            }();
            r[""] = function () {
                Da("Unknown RPC service: " + this.s)
            };
            r.__cb = function (C, Y) {
                var S = x[C];
                S && (delete x[C], S.call(this, Y))
            };
            return {
                config: function (C) {
                    "function" === typeof C.nR && (ra = C.nR)
                }, register: function (C, Y) {
                    if ("__cb" === C || "__ack" === C) throw Error("u");
                    if ("" === C) throw Error("v");
                    r[C] = Y
                }, unregister: function (C) {
                    if ("__cb" ===
                        C || "__ack" === C) throw Error("w");
                    if ("" === C) throw Error("x");
                    delete r[C]
                }, PQ: function (C) {
                    r[""] = C
                }, US: function () {
                    delete r[""]
                }, GM: function () {
                }, call: function (C, Y, S, ma) {
                    C = C || "..";
                    var Ca = "..";
                    ".." === C ? Ca = ua : "/" == C.charAt(0) && (Ca = e(window.location.href), Ca = "/" + ua + (Ca ? "|" + Ca : ""));
                    ++F;
                    S && (x[F] = S);
                    var ja = {
                        s: Y,
                        f: Ca,
                        c: S ? F : 0,
                        a: Array.prototype.slice.call(arguments, 3),
                        t: B[C],
                        l: !!A[C]
                    };
                    a:if ("bidir" === I || "c2p" === I && ".." === C || "p2c" === I && ".." !== C) {
                        var ta = window.location.href;
                        var Ja = "?";
                        if ("query" === U) Ja = "#"; else if ("hash" ===
                            U) break a;
                        Ja = ta.lastIndexOf(Ja);
                        Ja = -1 === Ja ? ta.length : Ja;
                        ta = ta.substring(0, Ja)
                    } else ta = null;
                    ta && (ja.r = ta);
                    if (".." === C || null != f(C) || document.getElementById(C)) (ta = W[C]) || null === f(C) || (ta = Z), 0 === Y.indexOf("legacy__") && (ta = Z, ja.s = Y.substring(8), ja.c = ja.c ? ja.c : F), ja.g = !0, ja.r = Ca, ta ? (A[C] && (ta = yf.Ax), !1 === ta.call(C, Ca, ja) && (W[C] = Sa, Z.call(C, Ca, ja))) : K[C] ? K[C].push(ja) : K[C] = [ja]
                }, js: l, Ti: m, Nz: n, Wt: v, wm: function (C) {
                    return B[C]
                }, gG: function (C) {
                    delete w[C];
                    delete A[C];
                    delete B[C];
                    delete G[C];
                    delete W[C]
                }, sN: function () {
                    return Z.UM()
                },
                NQ: function (C, Y) {
                    4 < C.length ? Z.dda(C, d) : c.apply(null, C.concat(Y))
                }, OQ: function (C) {
                    C.a = Array.prototype.slice.call(C.a);
                    window.setTimeout(function () {
                        d(C)
                    }, 0)
                }, getOrigin: e, Im: function (C) {
                    var Y = null, S = l(C);
                    S ? Y = S : (S = f(C)) ? Y = S.origin : ".." == C ? Y = N.parent : (C = document.getElementById(C)) && "iframe" === C.tagName.toLowerCase() && (Y = C.src);
                    return e(Y)
                }, yd: function () {
                    !1 === Z.yd(d, a) && (Z = Sa);
                    ea ? v("..") : _.Je.register("rpc", null, function (C) {
                        C = C.rpc || {};
                        q(C);
                        p(C)
                    })
                }, jK: h, UV: f, B6: "__ack", Aaa: ua || "..", Kaa: 0, Jaa: 1, Iaa: 2
            }
        }();
        _.zf.yd()
    }
    ;_.zf.config({
        nR: function (a) {
            throw Error("y`" + a);
        }
    });
    _.u("gadgets.rpc.config", _.zf.config);
    _.u("gadgets.rpc.register", _.zf.register);
    _.u("gadgets.rpc.unregister", _.zf.unregister);
    _.u("gadgets.rpc.registerDefault", _.zf.PQ);
    _.u("gadgets.rpc.unregisterDefault", _.zf.US);
    _.u("gadgets.rpc.forceParentVerifiable", _.zf.GM);
    _.u("gadgets.rpc.call", _.zf.call);
    _.u("gadgets.rpc.getRelayUrl", _.zf.js);
    _.u("gadgets.rpc.setRelayUrl", _.zf.Ti);
    _.u("gadgets.rpc.setAuthToken", _.zf.Nz);
    _.u("gadgets.rpc.setupReceiver", _.zf.Wt);
    _.u("gadgets.rpc.getAuthToken", _.zf.wm);
    _.u("gadgets.rpc.removeReceiver", _.zf.gG);
    _.u("gadgets.rpc.getRelayChannel", _.zf.sN);
    _.u("gadgets.rpc.receive", _.zf.NQ);
    _.u("gadgets.rpc.receiveSameDomain", _.zf.OQ);
    _.u("gadgets.rpc.getOrigin", _.zf.getOrigin);
    _.u("gadgets.rpc.getTargetOrigin", _.zf.Im);

    _.Ee = _.Ee || {};
    _.Ee.kW = function (a) {
        var b = window;
        "undefined" != typeof b.addEventListener ? b.addEventListener("mousemove", a, !1) : "undefined" != typeof b.attachEvent ? b.attachEvent("onmousemove", a) : _.Ge("cannot attachBrowserEvent: mousemove")
    };
    _.Ee.p3 = function (a) {
        var b = window;
        b.removeEventListener ? b.removeEventListener("mousemove", a, !1) : b.detachEvent ? b.detachEvent("onmousemove", a) : _.Ge("cannot removeBrowserEvent: mousemove")
    };

    _.ng = function () {
        function a(m) {
            var n = new _.mg;
            n.Du(m);
            return n.Xh()
        }

        var b = window.crypto;
        if (b && "function" == typeof b.getRandomValues) return function () {
            var m = new window.Uint32Array(1);
            b.getRandomValues(m);
            return Number("0." + m[0])
        };
        var c = _.Be("random/maxObserveMousemove");
        null == c && (c = -1);
        var d = 0, e = Math.random(), f = 1, h = 1E6 * (screen.width * screen.width + screen.height), k = function (m) {
            m = m || window.event;
            var n = m.screenX + m.clientX << 16;
            n += m.screenY + m.clientY;
            n *= (new Date).getTime() % 1E6;
            f = f * n % h;
            0 < c && ++d == c && _.Ee.p3(k)
        };
        0 != c && _.Ee.kW(k);
        var l = a(document.cookie + "|" + document.location + "|" + (new Date).getTime() + "|" + e);
        return function () {
            var m = f;
            m += parseInt(l.substr(0, 20), 16);
            l = a(l);
            return m / (h + Math.pow(16, 20))
        }
    }();
    _.u("shindig.random", _.ng);

    var og = function (a) {
        return {
            execute: function (b) {
                var c = {
                    method: a.httpMethod || "GET",
                    root: a.root,
                    path: a.url,
                    params: a.urlParams,
                    headers: a.headers,
                    body: a.body
                }, d = window.gapi, e = function () {
                    var f = d.config.get("client/apiKey"), h = d.config.get("client/version");
                    try {
                        var k = d.config.get("googleapis.config/developerKey"), l = d.config.get("client/apiKey", k);
                        d.config.update("client/apiKey", l);
                        d.config.update("client/version", "1.0.0-alpha");
                        var m = d.client;
                        m.request.call(m, c).then(b, b)
                    } finally {
                        d.config.update("client/apiKey",
                            f), d.config.update("client/version", h)
                    }
                };
                d.client ? e() : d.load.call(d, "client", e)
            }
        }
    }, pg = function (a, b) {
        return function (c) {
            var d = {};
            c = c.body;
            var e = _.pf(c), f = {};
            if (e && e.length) for (var h = e.length, k = 0; k < h; ++k) {
                var l = e[k];
                f[l.id] = l
            }
            h = b.length;
            for (k = 0; k < h; ++k) l = b[k].id, d[l] = e && e.length ? f[l] : e;
            a(d, c)
        }
    }, qg = function (a) {
        a.transport = {
            name: "googleapis", execute: function (b, c) {
                for (var d = [], e = b.length, f = 0; f < e; ++f) {
                    var h = b[f], k = h.method, l = String(k).split(".")[0];
                    l = _.Be("googleapis.config/versions/" + k) || _.Be("googleapis.config/versions/" +
                        l) || "v1";
                    d.push({jsonrpc: "2.0", id: h.id, method: k, apiVersion: String(l), params: h.params})
                }
                b = og({
                    httpMethod: "POST",
                    root: a.transport.root,
                    url: "/rpc?pp=0",
                    headers: {"Content-Type": "application/json"},
                    body: d
                });
                b.execute.call(b, pg(c, d))
            }, root: void 0
        }
    }, rg = function (a) {
        var b = this.method, c = this.transport;
        c.execute.call(c, [{method: b, id: b, params: this.rpc}], function (d) {
            d = d[b];
            d.error || (d = d.data || d.result);
            a(d)
        })
    }, tg = function () {
        for (var a = sg, b = a.split("."), c = function (k) {
            k = k || {};
            k.groupId = k.groupId || "@self";
            k.userId =
                k.userId || "@viewer";
            k = {method: a, rpc: k || {}};
            qg(k);
            k.execute = rg;
            return k
        }, d = _.Ya, e = b.length, f = 0; f < e; ++f) {
            var h = d[b[f]] || {};
            f + 1 == e && (h = c);
            d = d[b[f]] = h
        }
        if (1 < b.length && "googleapis" != b[0]) for (b[0] = "googleapis", "delete" == b[b.length - 1] && (b[b.length - 1] = "remove"), d = _.Ya, e = b.length, f = 0; f < e; ++f) h = d[b[f]] || {}, f + 1 == e && (h = c), d = d[b[f]] = h
    }, sg;
    for (sg in _.Be("googleapis.config/methods")) tg();
    _.u("googleapis.newHttpRequest", function (a) {
        return og(a)
    });
    _.u("googleapis.setUrlParameter", function (a, b) {
        if ("trace" !== a) throw Error("B");
        _.Ce("client/trace", b)
    });

});
// Google Inc.