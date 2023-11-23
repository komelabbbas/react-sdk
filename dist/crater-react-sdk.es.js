import * as dr from "react";
import Oe, { useState as Se } from "react";
var je = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(o) {
  (function() {
    var v = {}.hasOwnProperty;
    function p() {
      for (var h = [], C = 0; C < arguments.length; C++) {
        var m = arguments[C];
        if (!!m) {
          var _ = typeof m;
          if (_ === "string" || _ === "number")
            h.push(m);
          else if (Array.isArray(m)) {
            if (m.length) {
              var R = p.apply(null, m);
              R && h.push(R);
            }
          } else if (_ === "object") {
            if (m.toString !== Object.prototype.toString && !m.toString.toString().includes("[native code]")) {
              h.push(m.toString());
              continue;
            }
            for (var d in m)
              v.call(m, d) && m[d] && h.push(d);
          }
        }
      }
      return h.join(" ");
    }
    o.exports ? (p.default = p, o.exports = p) : window.classNames = p;
  })();
})(je);
const pr = je.exports;
var Q = { exports: {} }, I = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Te;
function vr() {
  if (Te)
    return I;
  Te = 1;
  var o = Oe, v = Symbol.for("react.element"), p = Symbol.for("react.fragment"), h = Object.prototype.hasOwnProperty, C = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, m = { key: !0, ref: !0, __self: !0, __source: !0 };
  function _(R, d, j) {
    var y, w = {}, O = null, M = null;
    j !== void 0 && (O = "" + j), d.key !== void 0 && (O = "" + d.key), d.ref !== void 0 && (M = d.ref);
    for (y in d)
      h.call(d, y) && !m.hasOwnProperty(y) && (w[y] = d[y]);
    if (R && R.defaultProps)
      for (y in d = R.defaultProps, d)
        w[y] === void 0 && (w[y] = d[y]);
    return { $$typeof: v, type: R, key: O, ref: M, props: w, _owner: C.current };
  }
  return I.Fragment = p, I.jsx = _, I.jsxs = _, I;
}
var $ = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pe;
function mr() {
  return Pe || (Pe = 1, process.env.NODE_ENV !== "production" && function() {
    var o = Oe, v = Symbol.for("react.element"), p = Symbol.for("react.portal"), h = Symbol.for("react.fragment"), C = Symbol.for("react.strict_mode"), m = Symbol.for("react.profiler"), _ = Symbol.for("react.provider"), R = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), j = Symbol.for("react.suspense"), y = Symbol.for("react.suspense_list"), w = Symbol.for("react.memo"), O = Symbol.for("react.lazy"), M = Symbol.for("react.offscreen"), ee = Symbol.iterator, ke = "@@iterator";
    function Ne(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = ee && e[ee] || e[ke];
      return typeof r == "function" ? r : null;
    }
    var k = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function g(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        Ae("error", e, t);
      }
    }
    function Ae(e, r, t) {
      {
        var n = k.ReactDebugCurrentFrame, s = n.getStackAddendum();
        s !== "" && (r += "%s", t = t.concat([s]));
        var l = t.map(function(i) {
          return String(i);
        });
        l.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, l);
      }
    }
    var De = !1, Fe = !1, Ie = !1, $e = !1, Me = !1, re;
    re = Symbol.for("react.module.reference");
    function We(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === h || e === m || Me || e === C || e === j || e === y || $e || e === M || De || Fe || Ie || typeof e == "object" && e !== null && (e.$$typeof === O || e.$$typeof === w || e.$$typeof === _ || e.$$typeof === R || e.$$typeof === d || e.$$typeof === re || e.getModuleId !== void 0));
    }
    function Ye(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var s = r.displayName || r.name || "";
      return s !== "" ? t + "(" + s + ")" : t;
    }
    function te(e) {
      return e.displayName || "Context";
    }
    function T(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && g("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case h:
          return "Fragment";
        case p:
          return "Portal";
        case m:
          return "Profiler";
        case C:
          return "StrictMode";
        case j:
          return "Suspense";
        case y:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case R:
            var r = e;
            return te(r) + ".Consumer";
          case _:
            var t = e;
            return te(t._context) + ".Provider";
          case d:
            return Ye(e, e.render, "ForwardRef");
          case w:
            var n = e.displayName || null;
            return n !== null ? n : T(e.type) || "Memo";
          case O: {
            var s = e, l = s._payload, i = s._init;
            try {
              return T(i(l));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var S = Object.assign, D = 0, ne, ae, ie, oe, se, le, ue;
    function ce() {
    }
    ce.__reactDisabledLog = !0;
    function Ue() {
      {
        if (D === 0) {
          ne = console.log, ae = console.info, ie = console.warn, oe = console.error, se = console.group, le = console.groupCollapsed, ue = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: ce,
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
        D++;
      }
    }
    function Le() {
      {
        if (D--, D === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: S({}, e, {
              value: ne
            }),
            info: S({}, e, {
              value: ae
            }),
            warn: S({}, e, {
              value: ie
            }),
            error: S({}, e, {
              value: oe
            }),
            group: S({}, e, {
              value: se
            }),
            groupCollapsed: S({}, e, {
              value: le
            }),
            groupEnd: S({}, e, {
              value: ue
            })
          });
        }
        D < 0 && g("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var B = k.ReactCurrentDispatcher, q;
    function W(e, r, t) {
      {
        if (q === void 0)
          try {
            throw Error();
          } catch (s) {
            var n = s.stack.trim().match(/\n( *(at )?)/);
            q = n && n[1] || "";
          }
        return `
` + q + e;
      }
    }
    var z = !1, Y;
    {
      var Ve = typeof WeakMap == "function" ? WeakMap : Map;
      Y = new Ve();
    }
    function fe(e, r) {
      if (!e || z)
        return "";
      {
        var t = Y.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      z = !0;
      var s = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var l;
      l = B.current, B.current = null, Ue();
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
            } catch (P) {
              n = P;
            }
            Reflect.construct(e, [], i);
          } else {
            try {
              i.call();
            } catch (P) {
              n = P;
            }
            e.call(i.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (P) {
            n = P;
          }
          e();
        }
      } catch (P) {
        if (P && n && typeof P.stack == "string") {
          for (var a = P.stack.split(`
`), b = n.stack.split(`
`), u = a.length - 1, f = b.length - 1; u >= 1 && f >= 0 && a[u] !== b[f]; )
            f--;
          for (; u >= 1 && f >= 0; u--, f--)
            if (a[u] !== b[f]) {
              if (u !== 1 || f !== 1)
                do
                  if (u--, f--, f < 0 || a[u] !== b[f]) {
                    var E = `
` + a[u].replace(" at new ", " at ");
                    return e.displayName && E.includes("<anonymous>") && (E = E.replace("<anonymous>", e.displayName)), typeof e == "function" && Y.set(e, E), E;
                  }
                while (u >= 1 && f >= 0);
              break;
            }
        }
      } finally {
        z = !1, B.current = l, Le(), Error.prepareStackTrace = s;
      }
      var A = e ? e.displayName || e.name : "", we = A ? W(A) : "";
      return typeof e == "function" && Y.set(e, we), we;
    }
    function Be(e, r, t) {
      return fe(e, !1);
    }
    function qe(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function U(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return fe(e, qe(e));
      if (typeof e == "string")
        return W(e);
      switch (e) {
        case j:
          return W("Suspense");
        case y:
          return W("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case d:
            return Be(e.render);
          case w:
            return U(e.type, r, t);
          case O: {
            var n = e, s = n._payload, l = n._init;
            try {
              return U(l(s), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var L = Object.prototype.hasOwnProperty, de = {}, pe = k.ReactDebugCurrentFrame;
    function V(e) {
      if (e) {
        var r = e._owner, t = U(e.type, e._source, r ? r.type : null);
        pe.setExtraStackFrame(t);
      } else
        pe.setExtraStackFrame(null);
    }
    function ze(e, r, t, n, s) {
      {
        var l = Function.call.bind(L);
        for (var i in e)
          if (l(e, i)) {
            var a = void 0;
            try {
              if (typeof e[i] != "function") {
                var b = Error((n || "React class") + ": " + t + " type `" + i + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[i] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw b.name = "Invariant Violation", b;
              }
              a = e[i](r, i, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (u) {
              a = u;
            }
            a && !(a instanceof Error) && (V(s), g("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, i, typeof a), V(null)), a instanceof Error && !(a.message in de) && (de[a.message] = !0, V(s), g("Failed %s type: %s", t, a.message), V(null));
          }
      }
    }
    var Je = Array.isArray;
    function J(e) {
      return Je(e);
    }
    function Ge(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function He(e) {
      try {
        return ve(e), !1;
      } catch {
        return !0;
      }
    }
    function ve(e) {
      return "" + e;
    }
    function me(e) {
      if (He(e))
        return g("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ge(e)), ve(e);
    }
    var F = k.ReactCurrentOwner, Ke = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, he, ge, G;
    G = {};
    function Xe(e) {
      if (L.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Ze(e) {
      if (L.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Qe(e, r) {
      if (typeof e.ref == "string" && F.current && r && F.current.stateNode !== r) {
        var t = T(F.current.type);
        G[t] || (g('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', T(F.current.type), e.ref), G[t] = !0);
      }
    }
    function er(e, r) {
      {
        var t = function() {
          he || (he = !0, g("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function rr(e, r) {
      {
        var t = function() {
          ge || (ge = !0, g("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var tr = function(e, r, t, n, s, l, i) {
      var a = {
        $$typeof: v,
        type: e,
        key: r,
        ref: t,
        props: i,
        _owner: l
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
        value: s
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function nr(e, r, t, n, s) {
      {
        var l, i = {}, a = null, b = null;
        t !== void 0 && (me(t), a = "" + t), Ze(r) && (me(r.key), a = "" + r.key), Xe(r) && (b = r.ref, Qe(r, s));
        for (l in r)
          L.call(r, l) && !Ke.hasOwnProperty(l) && (i[l] = r[l]);
        if (e && e.defaultProps) {
          var u = e.defaultProps;
          for (l in u)
            i[l] === void 0 && (i[l] = u[l]);
        }
        if (a || b) {
          var f = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && er(i, f), b && rr(i, f);
        }
        return tr(e, a, b, s, n, F.current, i);
      }
    }
    var H = k.ReactCurrentOwner, be = k.ReactDebugCurrentFrame;
    function N(e) {
      if (e) {
        var r = e._owner, t = U(e.type, e._source, r ? r.type : null);
        be.setExtraStackFrame(t);
      } else
        be.setExtraStackFrame(null);
    }
    var K;
    K = !1;
    function X(e) {
      return typeof e == "object" && e !== null && e.$$typeof === v;
    }
    function ye() {
      {
        if (H.current) {
          var e = T(H.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function ar(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
          return `

Check your code at ` + r + ":" + t + ".";
        }
        return "";
      }
    }
    var xe = {};
    function ir(e) {
      {
        var r = ye();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Ee(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = ir(r);
        if (xe[t])
          return;
        xe[t] = !0;
        var n = "";
        e && e._owner && e._owner !== H.current && (n = " It was passed a child from " + T(e._owner.type) + "."), N(e), g('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), N(null);
      }
    }
    function Re(e, r) {
      {
        if (typeof e != "object")
          return;
        if (J(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            X(n) && Ee(n, r);
          }
        else if (X(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var s = Ne(e);
          if (typeof s == "function" && s !== e.entries)
            for (var l = s.call(e), i; !(i = l.next()).done; )
              X(i.value) && Ee(i.value, r);
        }
      }
    }
    function or(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === d || r.$$typeof === w))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = T(r);
          ze(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !K) {
          K = !0;
          var s = T(r);
          g("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", s || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && g("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function sr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            N(e), g("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), N(null);
            break;
          }
        }
        e.ref !== null && (N(e), g("Invalid attribute `ref` supplied to `React.Fragment`."), N(null));
      }
    }
    function _e(e, r, t, n, s, l) {
      {
        var i = We(e);
        if (!i) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var b = ar(s);
          b ? a += b : a += ye();
          var u;
          e === null ? u = "null" : J(e) ? u = "array" : e !== void 0 && e.$$typeof === v ? (u = "<" + (T(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : u = typeof e, g("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", u, a);
        }
        var f = nr(e, r, t, s, l);
        if (f == null)
          return f;
        if (i) {
          var E = r.children;
          if (E !== void 0)
            if (n)
              if (J(E)) {
                for (var A = 0; A < E.length; A++)
                  Re(E[A], e);
                Object.freeze && Object.freeze(E);
              } else
                g("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Re(E, e);
        }
        return e === h ? sr(f) : or(f), f;
      }
    }
    function lr(e, r, t) {
      return _e(e, r, t, !0);
    }
    function ur(e, r, t) {
      return _e(e, r, t, !1);
    }
    var cr = ur, fr = lr;
    $.Fragment = h, $.jsx = cr, $.jsxs = fr;
  }()), $;
}
(function(o) {
  process.env.NODE_ENV === "production" ? o.exports = vr() : o.exports = mr();
})(Q);
const c = Q.exports.jsx, x = Q.exports.jsxs, hr = ({
  text: o
}) => {
  const [v, p] = Se(50);
  return /* @__PURE__ */ x("div", {
    children: [/* @__PURE__ */ x("div", {
      className: "text",
      children: ["This is test text: ", o]
    }), /* @__PURE__ */ c("div", {
      className: "card",
      children: /* @__PURE__ */ x("button", {
        onClick: () => p((h) => h + 1),
        children: ["world is ", v]
      })
    }), /* @__PURE__ */ c("h1", {
      className: "text-3xl font-bold underline border-4 border-red-800",
      children: "Test"
    })]
  });
}, gr = () => /* @__PURE__ */ c("div", {
  children: "BaseInput"
}), Rr = () => {
  const [o, v] = Se(0);
  return /* @__PURE__ */ x("div", {
    className: pr(["border-2", {
      "bg-red-100": !0
    }]),
    children: [/* @__PURE__ */ x("button", {
      type: "button",
      onClick: () => v((p) => p + 1),
      children: ["invoice count is: ", o]
    }), /* @__PURE__ */ c(hr, {
      text: "sdf"
    }), /* @__PURE__ */ c(gr, {}), /* @__PURE__ */ c("div", {
      children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque repellat placeat eius illum impedit facere rem hic at culpa reiciendis consequatur, id dolor esse perferendis reprehenderit enim recusandae, natus similique."
    })]
  });
};
function br({
  title: o,
  titleId: v,
  ...p
}, h) {
  return /* @__PURE__ */ x("svg", {
    ...Object.assign({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      "aria-hidden": "true",
      ref: h,
      "aria-labelledby": v
    }, p),
    children: [o ? /* @__PURE__ */ c("title", {
      id: v,
      children: o
    }) : null, /* @__PURE__ */ c("path", {
      fillRule: "evenodd",
      d: "M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z",
      clipRule: "evenodd"
    })]
  });
}
const yr = dr.forwardRef(br), xr = yr, Ce = [{
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
function Z(...o) {
  return o.filter(Boolean).join(" ");
}
function _r() {
  return /* @__PURE__ */ c("div", {
    className: "bg-white py-24 sm:py-32",
    children: /* @__PURE__ */ x("div", {
      className: "mx-auto max-w-7xl px-6 lg:px-8",
      children: [/* @__PURE__ */ x("div", {
        className: "mx-auto max-w-4xl text-center",
        children: [/* @__PURE__ */ c("h2", {
          className: "text-base font-semibold leading-7 text-indigo-600",
          children: "Pricing"
        }), /* @__PURE__ */ c("p", {
          className: "mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl",
          children: "Pricing plans for teams of\xA0all\xA0sizes"
        })]
      }), /* @__PURE__ */ c("p", {
        className: "mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600",
        children: "Distinctio et nulla eum soluta et neque labore quibusdam. Saepe et quasi iusto modi velit ut non voluptas in. Explicabo id ut laborum."
      }), /* @__PURE__ */ c("div", {
        className: "isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3",
        children: Ce.map((o, v) => /* @__PURE__ */ x("div", {
          className: Z(o.mostPopular ? "lg:z-10 lg:rounded-b-none" : "lg:mt-8", v === 0 ? "lg:rounded-r-none" : "", v === Ce.length - 1 ? "lg:rounded-l-none" : "", "flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-200 xl:p-10"),
          children: [/* @__PURE__ */ x("div", {
            children: [/* @__PURE__ */ x("div", {
              className: "flex items-center justify-between gap-x-4",
              children: [/* @__PURE__ */ c("h3", {
                id: o.id,
                className: Z(o.mostPopular ? "text-indigo-600" : "text-gray-900", "text-lg font-semibold leading-8"),
                children: o.name
              }), o.mostPopular ? /* @__PURE__ */ c("p", {
                className: "rounded-full bg-indigo-600/10 px-2.5 py-1 text-xs font-semibold leading-5 text-indigo-600",
                children: "Most popular"
              }) : null]
            }), /* @__PURE__ */ c("p", {
              className: "mt-4 text-sm leading-6 text-gray-600",
              children: o.description
            }), /* @__PURE__ */ x("p", {
              className: "mt-6 flex items-baseline gap-x-1",
              children: [/* @__PURE__ */ c("span", {
                className: "text-4xl font-bold tracking-tight text-gray-900",
                children: o.priceMonthly
              }), /* @__PURE__ */ c("span", {
                className: "text-sm font-semibold leading-6 text-gray-600",
                children: "/month"
              })]
            }), /* @__PURE__ */ c("ul", {
              role: "list",
              className: "mt-8 space-y-3 text-sm leading-6 text-gray-600",
              children: o.features.map((p) => /* @__PURE__ */ x("li", {
                className: "flex gap-x-3",
                children: [/* @__PURE__ */ c(xr, {
                  className: "h-6 w-5 flex-none text-indigo-600",
                  "aria-hidden": "true"
                }), p]
              }, p))
            })]
          }), /* @__PURE__ */ c("a", {
            href: o.href,
            "aria-describedby": o.id,
            className: Z(o.mostPopular ? "bg-indigo-600 text-white shadow-sm hover:bg-indigo-500" : "text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300", "mt-8 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"),
            children: "Buy plan"
          })]
        }, o.id))
      })]
    })
  });
}
export {
  Rr as InvoiceCreate,
  _r as InvoiceTable
};
