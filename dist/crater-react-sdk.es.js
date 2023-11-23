import * as cr from "react";
import Q from "react";
var ee = { exports: {} }, A = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pe;
function fr() {
  if (Pe)
    return A;
  Pe = 1;
  var l = Q, m = Symbol.for("react.element"), y = Symbol.for("react.fragment"), x = Object.prototype.hasOwnProperty, I = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, $ = { key: !0, ref: !0, __self: !0, __source: !0 };
  function k(w, d, C) {
    var g, E = {}, T = null, M = null;
    C !== void 0 && (T = "" + C), d.key !== void 0 && (T = "" + d.key), d.ref !== void 0 && (M = d.ref);
    for (g in d)
      x.call(d, g) && !$.hasOwnProperty(g) && (E[g] = d[g]);
    if (w && w.defaultProps)
      for (g in d = w.defaultProps, d)
        E[g] === void 0 && (E[g] = d[g]);
    return { $$typeof: m, type: w, key: T, ref: M, props: E, _owner: I.current };
  }
  return A.Fragment = y, A.jsx = k, A.jsxs = k, A;
}
var F = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ce;
function dr() {
  return Ce || (Ce = 1, process.env.NODE_ENV !== "production" && function() {
    var l = Q, m = Symbol.for("react.element"), y = Symbol.for("react.portal"), x = Symbol.for("react.fragment"), I = Symbol.for("react.strict_mode"), $ = Symbol.for("react.profiler"), k = Symbol.for("react.provider"), w = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), C = Symbol.for("react.suspense"), g = Symbol.for("react.suspense_list"), E = Symbol.for("react.memo"), T = Symbol.for("react.lazy"), M = Symbol.for("react.offscreen"), re = Symbol.iterator, Se = "@@iterator";
    function je(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = re && e[re] || e[Se];
      return typeof r == "function" ? r : null;
    }
    var O = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function v(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        ke("error", e, t);
      }
    }
    function ke(e, r, t) {
      {
        var n = O.ReactDebugCurrentFrame, o = n.getStackAddendum();
        o !== "" && (r += "%s", t = t.concat([o]));
        var s = t.map(function(i) {
          return String(i);
        });
        s.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var Ne = !1, De = !1, Ae = !1, Fe = !1, Ie = !1, te;
    te = Symbol.for("react.module.reference");
    function $e(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === x || e === $ || Ie || e === I || e === C || e === g || Fe || e === M || Ne || De || Ae || typeof e == "object" && e !== null && (e.$$typeof === T || e.$$typeof === E || e.$$typeof === k || e.$$typeof === w || e.$$typeof === d || e.$$typeof === te || e.getModuleId !== void 0));
    }
    function Me(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var o = r.displayName || r.name || "";
      return o !== "" ? t + "(" + o + ")" : t;
    }
    function ne(e) {
      return e.displayName || "Context";
    }
    function R(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && v("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case x:
          return "Fragment";
        case y:
          return "Portal";
        case $:
          return "Profiler";
        case I:
          return "StrictMode";
        case C:
          return "Suspense";
        case g:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case w:
            var r = e;
            return ne(r) + ".Consumer";
          case k:
            var t = e;
            return ne(t._context) + ".Provider";
          case d:
            return Me(e, e.render, "ForwardRef");
          case E:
            var n = e.displayName || null;
            return n !== null ? n : R(e.type) || "Memo";
          case T: {
            var o = e, s = o._payload, i = o._init;
            try {
              return R(i(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var P = Object.assign, N = 0, ae, ie, oe, se, le, ue, ce;
    function fe() {
    }
    fe.__reactDisabledLog = !0;
    function We() {
      {
        if (N === 0) {
          ae = console.log, ie = console.info, oe = console.warn, se = console.error, le = console.group, ue = console.groupCollapsed, ce = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: fe,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        N++;
      }
    }
    function Ye() {
      {
        if (N--, N === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: P({}, e, {
              value: ae
            }),
            info: P({}, e, {
              value: ie
            }),
            warn: P({}, e, {
              value: oe
            }),
            error: P({}, e, {
              value: se
            }),
            group: P({}, e, {
              value: le
            }),
            groupCollapsed: P({}, e, {
              value: ue
            }),
            groupEnd: P({}, e, {
              value: ce
            })
          });
        }
        N < 0 && v("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var B = O.ReactCurrentDispatcher, q;
    function W(e, r, t) {
      {
        if (q === void 0)
          try {
            throw Error();
          } catch (o) {
            var n = o.stack.trim().match(/\n( *(at )?)/);
            q = n && n[1] || "";
          }
        return `
` + q + e;
      }
    }
    var z = !1, Y;
    {
      var Ue = typeof WeakMap == "function" ? WeakMap : Map;
      Y = new Ue();
    }
    function de(e, r) {
      if (!e || z)
        return "";
      {
        var t = Y.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      z = !0;
      var o = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = B.current, B.current = null, We();
      try {
        if (r) {
          var i = function() {
            throw Error();
          };
          if (Object.defineProperty(i.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(i, []);
            } catch (_) {
              n = _;
            }
            Reflect.construct(e, [], i);
          } else {
            try {
              i.call();
            } catch (_) {
              n = _;
            }
            e.call(i.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (_) {
            n = _;
          }
          e();
        }
      } catch (_) {
        if (_ && n && typeof _.stack == "string") {
          for (var a = _.stack.split(`
`), p = n.stack.split(`
`), u = a.length - 1, c = p.length - 1; u >= 1 && c >= 0 && a[u] !== p[c]; )
            c--;
          for (; u >= 1 && c >= 0; u--, c--)
            if (a[u] !== p[c]) {
              if (u !== 1 || c !== 1)
                do
                  if (u--, c--, c < 0 || a[u] !== p[c]) {
                    var h = `
` + a[u].replace(" at new ", " at ");
                    return e.displayName && h.includes("<anonymous>") && (h = h.replace("<anonymous>", e.displayName)), typeof e == "function" && Y.set(e, h), h;
                  }
                while (u >= 1 && c >= 0);
              break;
            }
        }
      } finally {
        z = !1, B.current = s, Ye(), Error.prepareStackTrace = o;
      }
      var j = e ? e.displayName || e.name : "", Te = j ? W(j) : "";
      return typeof e == "function" && Y.set(e, Te), Te;
    }
    function Le(e, r, t) {
      return de(e, !1);
    }
    function Ve(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function U(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return de(e, Ve(e));
      if (typeof e == "string")
        return W(e);
      switch (e) {
        case C:
          return W("Suspense");
        case g:
          return W("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case d:
            return Le(e.render);
          case E:
            return U(e.type, r, t);
          case T: {
            var n = e, o = n._payload, s = n._init;
            try {
              return U(s(o), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var L = Object.prototype.hasOwnProperty, ve = {}, pe = O.ReactDebugCurrentFrame;
    function V(e) {
      if (e) {
        var r = e._owner, t = U(e.type, e._source, r ? r.type : null);
        pe.setExtraStackFrame(t);
      } else
        pe.setExtraStackFrame(null);
    }
    function Be(e, r, t, n, o) {
      {
        var s = Function.call.bind(L);
        for (var i in e)
          if (s(e, i)) {
            var a = void 0;
            try {
              if (typeof e[i] != "function") {
                var p = Error((n || "React class") + ": " + t + " type `" + i + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[i] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw p.name = "Invariant Violation", p;
              }
              a = e[i](r, i, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (u) {
              a = u;
            }
            a && !(a instanceof Error) && (V(o), v("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, i, typeof a), V(null)), a instanceof Error && !(a.message in ve) && (ve[a.message] = !0, V(o), v("Failed %s type: %s", t, a.message), V(null));
          }
      }
    }
    var qe = Array.isArray;
    function J(e) {
      return qe(e);
    }
    function ze(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Je(e) {
      try {
        return me(e), !1;
      } catch {
        return !0;
      }
    }
    function me(e) {
      return "" + e;
    }
    function ge(e) {
      if (Je(e))
        return v("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ze(e)), me(e);
    }
    var D = O.ReactCurrentOwner, Ge = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, he, be, G;
    G = {};
    function He(e) {
      if (L.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Ke(e) {
      if (L.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Xe(e, r) {
      if (typeof e.ref == "string" && D.current && r && D.current.stateNode !== r) {
        var t = R(D.current.type);
        G[t] || (v('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', R(D.current.type), e.ref), G[t] = !0);
      }
    }
    function Ze(e, r) {
      {
        var t = function() {
          he || (he = !0, v("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function Qe(e, r) {
      {
        var t = function() {
          be || (be = !0, v("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var er = function(e, r, t, n, o, s, i) {
      var a = {
        $$typeof: m,
        type: e,
        key: r,
        ref: t,
        props: i,
        _owner: s
      };
      return a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(a, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(a, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: o
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function rr(e, r, t, n, o) {
      {
        var s, i = {}, a = null, p = null;
        t !== void 0 && (ge(t), a = "" + t), Ke(r) && (ge(r.key), a = "" + r.key), He(r) && (p = r.ref, Xe(r, o));
        for (s in r)
          L.call(r, s) && !Ge.hasOwnProperty(s) && (i[s] = r[s]);
        if (e && e.defaultProps) {
          var u = e.defaultProps;
          for (s in u)
            i[s] === void 0 && (i[s] = u[s]);
        }
        if (a || p) {
          var c = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && Ze(i, c), p && Qe(i, c);
        }
        return er(e, a, p, o, n, D.current, i);
      }
    }
    var H = O.ReactCurrentOwner, ye = O.ReactDebugCurrentFrame;
    function S(e) {
      if (e) {
        var r = e._owner, t = U(e.type, e._source, r ? r.type : null);
        ye.setExtraStackFrame(t);
      } else
        ye.setExtraStackFrame(null);
    }
    var K;
    K = !1;
    function X(e) {
      return typeof e == "object" && e !== null && e.$$typeof === m;
    }
    function xe() {
      {
        if (H.current) {
          var e = R(H.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function tr(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
          return `

Check your code at ` + r + ":" + t + ".";
        }
        return "";
      }
    }
    var Ee = {};
    function nr(e) {
      {
        var r = xe();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Re(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = nr(r);
        if (Ee[t])
          return;
        Ee[t] = !0;
        var n = "";
        e && e._owner && e._owner !== H.current && (n = " It was passed a child from " + R(e._owner.type) + "."), S(e), v('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), S(null);
      }
    }
    function _e(e, r) {
      {
        if (typeof e != "object")
          return;
        if (J(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            X(n) && Re(n, r);
          }
        else if (X(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var o = je(e);
          if (typeof o == "function" && o !== e.entries)
            for (var s = o.call(e), i; !(i = s.next()).done; )
              X(i.value) && Re(i.value, r);
        }
      }
    }
    function ar(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === d || r.$$typeof === E))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = R(r);
          Be(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !K) {
          K = !0;
          var o = R(r);
          v("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", o || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && v("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ir(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            S(e), v("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), S(null);
            break;
          }
        }
        e.ref !== null && (S(e), v("Invalid attribute `ref` supplied to `React.Fragment`."), S(null));
      }
    }
    function we(e, r, t, n, o, s) {
      {
        var i = $e(e);
        if (!i) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var p = tr(o);
          p ? a += p : a += xe();
          var u;
          e === null ? u = "null" : J(e) ? u = "array" : e !== void 0 && e.$$typeof === m ? (u = "<" + (R(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : u = typeof e, v("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", u, a);
        }
        var c = rr(e, r, t, o, s);
        if (c == null)
          return c;
        if (i) {
          var h = r.children;
          if (h !== void 0)
            if (n)
              if (J(h)) {
                for (var j = 0; j < h.length; j++)
                  _e(h[j], e);
                Object.freeze && Object.freeze(h);
              } else
                v("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              _e(h, e);
        }
        return e === x ? ir(c) : ar(c), c;
      }
    }
    function or(e, r, t) {
      return we(e, r, t, !0);
    }
    function sr(e, r, t) {
      return we(e, r, t, !1);
    }
    var lr = sr, ur = or;
    F.Fragment = x, F.jsx = lr, F.jsxs = ur;
  }()), F;
}
(function(l) {
  process.env.NODE_ENV === "production" ? l.exports = fr() : l.exports = dr();
})(ee);
const f = ee.exports.jsx, b = ee.exports.jsxs, hr = ({
  text: l
}) => {
  const [m, y] = Q.useState(0);
  return /* @__PURE__ */ b("div", {
    children: [/* @__PURE__ */ b("div", {
      className: "text",
      children: ["This is test text: ", l]
    }), /* @__PURE__ */ f("div", {
      className: "card",
      children: /* @__PURE__ */ b("button", {
        onClick: () => y((x) => x + 1),
        children: ["count is ", m]
      })
    }), /* @__PURE__ */ f("h1", {
      className: "text-3xl font-bold underline border-4 border-red-800",
      children: "Test"
    })]
  });
};
function vr({
  title: l,
  titleId: m,
  ...y
}, x) {
  return /* @__PURE__ */ b("svg", {
    ...Object.assign({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      "aria-hidden": "true",
      ref: x,
      "aria-labelledby": m
    }, y),
    children: [l ? /* @__PURE__ */ f("title", {
      id: m,
      children: l
    }) : null, /* @__PURE__ */ f("path", {
      fillRule: "evenodd",
      d: "M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z",
      clipRule: "evenodd"
    })]
  });
}
const pr = cr.forwardRef(vr), mr = pr, Oe = [{
  name: "Freelancer",
  id: "tier-freelancer",
  href: "#",
  priceMonthly: "$24",
  description: "The essentials to provide your best work for clients.",
  features: ["5 products", "Up to 1,000 subscribers", "Basic analytics", "48-hour support response time"],
  mostPopular: !1
}, {
  name: "Startup",
  id: "tier-startup",
  href: "#",
  priceMonthly: "$32",
  description: "A plan that scales with your rapidly growing business.",
  features: ["25 products", "Up to 10,000 subscribers", "Advanced analytics", "24-hour support response time", "Marketing automations"],
  mostPopular: !0
}, {
  name: "Enterprise",
  id: "tier-enterprise",
  href: "#",
  priceMonthly: "$48",
  description: "Dedicated support and infrastructure for your company.",
  features: ["Unlimited products", "Unlimited subscribers", "Advanced analytics", "1-hour, dedicated support response time", "Marketing automations"],
  mostPopular: !1
}];
function Z(...l) {
  return l.filter(Boolean).join(" ");
}
function br() {
  return /* @__PURE__ */ f("div", {
    className: "bg-white py-24 sm:py-32",
    children: /* @__PURE__ */ b("div", {
      className: "mx-auto max-w-7xl px-6 lg:px-8",
      children: [/* @__PURE__ */ b("div", {
        className: "mx-auto max-w-4xl text-center",
        children: [/* @__PURE__ */ f("h2", {
          className: "text-base font-semibold leading-7 text-indigo-600",
          children: "Pricing"
        }), /* @__PURE__ */ f("p", {
          className: "mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl",
          children: "Pricing plans for teams of\xA0all\xA0sizes"
        })]
      }), /* @__PURE__ */ f("p", {
        className: "mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600",
        children: "Distinctio et nulla eum soluta et neque labore quibusdam. Saepe et quasi iusto modi velit ut non voluptas in. Explicabo id ut laborum."
      }), /* @__PURE__ */ f("div", {
        className: "isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3",
        children: Oe.map((l, m) => /* @__PURE__ */ b("div", {
          className: Z(l.mostPopular ? "lg:z-10 lg:rounded-b-none" : "lg:mt-8", m === 0 ? "lg:rounded-r-none" : "", m === Oe.length - 1 ? "lg:rounded-l-none" : "", "flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-200 xl:p-10"),
          children: [/* @__PURE__ */ b("div", {
            children: [/* @__PURE__ */ b("div", {
              className: "flex items-center justify-between gap-x-4",
              children: [/* @__PURE__ */ f("h3", {
                id: l.id,
                className: Z(l.mostPopular ? "text-indigo-600" : "text-gray-900", "text-lg font-semibold leading-8"),
                children: l.name
              }), l.mostPopular ? /* @__PURE__ */ f("p", {
                className: "rounded-full bg-indigo-600/10 px-2.5 py-1 text-xs font-semibold leading-5 text-indigo-600",
                children: "Most popular"
              }) : null]
            }), /* @__PURE__ */ f("p", {
              className: "mt-4 text-sm leading-6 text-gray-600",
              children: l.description
            }), /* @__PURE__ */ b("p", {
              className: "mt-6 flex items-baseline gap-x-1",
              children: [/* @__PURE__ */ f("span", {
                className: "text-4xl font-bold tracking-tight text-gray-900",
                children: l.priceMonthly
              }), /* @__PURE__ */ f("span", {
                className: "text-sm font-semibold leading-6 text-gray-600",
                children: "/month"
              })]
            }), /* @__PURE__ */ f("ul", {
              role: "list",
              className: "mt-8 space-y-3 text-sm leading-6 text-gray-600",
              children: l.features.map((y) => /* @__PURE__ */ b("li", {
                className: "flex gap-x-3",
                children: [/* @__PURE__ */ f(mr, {
                  className: "h-6 w-5 flex-none text-indigo-600",
                  "aria-hidden": "true"
                }), y]
              }, y))
            })]
          }), /* @__PURE__ */ f("a", {
            href: l.href,
            "aria-describedby": l.id,
            className: Z(l.mostPopular ? "bg-indigo-600 text-white shadow-sm hover:bg-indigo-500" : "text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300", "mt-8 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"),
            children: "Buy plan"
          })]
        }, l.id))
      })]
    })
  });
}
export {
  hr as Helloworld,
  br as InvoiceTable
};
