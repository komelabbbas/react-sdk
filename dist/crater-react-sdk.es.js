import X from "react";
var Z = { exports: {} }, D = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Oe;
function sr() {
  if (Oe)
    return D;
  Oe = 1;
  var h = X, _ = Symbol.for("react.element"), w = Symbol.for("react.fragment"), m = Object.prototype.hasOwnProperty, A = h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, I = { key: !0, ref: !0, __self: !0, __source: !0 };
  function P(y, f, O) {
    var v, b = {}, R = null, $ = null;
    O !== void 0 && (R = "" + O), f.key !== void 0 && (R = "" + f.key), f.ref !== void 0 && ($ = f.ref);
    for (v in f)
      m.call(f, v) && !I.hasOwnProperty(v) && (b[v] = f[v]);
    if (y && y.defaultProps)
      for (v in f = y.defaultProps, f)
        b[v] === void 0 && (b[v] = f[v]);
    return { $$typeof: _, type: y, key: R, ref: $, props: b, _owner: A.current };
  }
  return D.Fragment = w, D.jsx = P, D.jsxs = P, D;
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
function lr() {
  return Ce || (Ce = 1, process.env.NODE_ENV !== "production" && function() {
    var h = X, _ = Symbol.for("react.element"), w = Symbol.for("react.portal"), m = Symbol.for("react.fragment"), A = Symbol.for("react.strict_mode"), I = Symbol.for("react.profiler"), P = Symbol.for("react.provider"), y = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), O = Symbol.for("react.suspense"), v = Symbol.for("react.suspense_list"), b = Symbol.for("react.memo"), R = Symbol.for("react.lazy"), $ = Symbol.for("react.offscreen"), Q = Symbol.iterator, Se = "@@iterator";
    function we(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = Q && e[Q] || e[Se];
      return typeof r == "function" ? r : null;
    }
    var C = h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function c(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        Pe("error", e, t);
      }
    }
    function Pe(e, r, t) {
      {
        var n = C.ReactDebugCurrentFrame, o = n.getStackAddendum();
        o !== "" && (r += "%s", t = t.concat([o]));
        var u = t.map(function(i) {
          return String(i);
        });
        u.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, u);
      }
    }
    var je = !1, ke = !1, De = !1, Fe = !1, Ae = !1, ee;
    ee = Symbol.for("react.module.reference");
    function Ie(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === m || e === I || Ae || e === A || e === O || e === v || Fe || e === $ || je || ke || De || typeof e == "object" && e !== null && (e.$$typeof === R || e.$$typeof === b || e.$$typeof === P || e.$$typeof === y || e.$$typeof === f || e.$$typeof === ee || e.getModuleId !== void 0));
    }
    function $e(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var o = r.displayName || r.name || "";
      return o !== "" ? t + "(" + o + ")" : t;
    }
    function re(e) {
      return e.displayName || "Context";
    }
    function g(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && c("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case m:
          return "Fragment";
        case w:
          return "Portal";
        case I:
          return "Profiler";
        case A:
          return "StrictMode";
        case O:
          return "Suspense";
        case v:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case y:
            var r = e;
            return re(r) + ".Consumer";
          case P:
            var t = e;
            return re(t._context) + ".Provider";
          case f:
            return $e(e, e.render, "ForwardRef");
          case b:
            var n = e.displayName || null;
            return n !== null ? n : g(e.type) || "Memo";
          case R: {
            var o = e, u = o._payload, i = o._init;
            try {
              return g(i(u));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var T = Object.assign, j = 0, te, ne, ae, ie, oe, ue, se;
    function le() {
    }
    le.__reactDisabledLog = !0;
    function We() {
      {
        if (j === 0) {
          te = console.log, ne = console.info, ae = console.warn, ie = console.error, oe = console.group, ue = console.groupCollapsed, se = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: le,
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
        j++;
      }
    }
    function Ye() {
      {
        if (j--, j === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: T({}, e, {
              value: te
            }),
            info: T({}, e, {
              value: ne
            }),
            warn: T({}, e, {
              value: ae
            }),
            error: T({}, e, {
              value: ie
            }),
            group: T({}, e, {
              value: oe
            }),
            groupCollapsed: T({}, e, {
              value: ue
            }),
            groupEnd: T({}, e, {
              value: se
            })
          });
        }
        j < 0 && c("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var U = C.ReactCurrentDispatcher, B;
    function W(e, r, t) {
      {
        if (B === void 0)
          try {
            throw Error();
          } catch (o) {
            var n = o.stack.trim().match(/\n( *(at )?)/);
            B = n && n[1] || "";
          }
        return `
` + B + e;
      }
    }
    var q = !1, Y;
    {
      var Ne = typeof WeakMap == "function" ? WeakMap : Map;
      Y = new Ne();
    }
    function fe(e, r) {
      if (!e || q)
        return "";
      {
        var t = Y.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      q = !0;
      var o = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var u;
      u = U.current, U.current = null, We();
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
            } catch (E) {
              n = E;
            }
            Reflect.construct(e, [], i);
          } else {
            try {
              i.call();
            } catch (E) {
              n = E;
            }
            e.call(i.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (E) {
            n = E;
          }
          e();
        }
      } catch (E) {
        if (E && n && typeof E.stack == "string") {
          for (var a = E.stack.split(`
`), d = n.stack.split(`
`), s = a.length - 1, l = d.length - 1; s >= 1 && l >= 0 && a[s] !== d[l]; )
            l--;
          for (; s >= 1 && l >= 0; s--, l--)
            if (a[s] !== d[l]) {
              if (s !== 1 || l !== 1)
                do
                  if (s--, l--, l < 0 || a[s] !== d[l]) {
                    var p = `
` + a[s].replace(" at new ", " at ");
                    return e.displayName && p.includes("<anonymous>") && (p = p.replace("<anonymous>", e.displayName)), typeof e == "function" && Y.set(e, p), p;
                  }
                while (s >= 1 && l >= 0);
              break;
            }
        }
      } finally {
        q = !1, U.current = u, Ye(), Error.prepareStackTrace = o;
      }
      var S = e ? e.displayName || e.name : "", Te = S ? W(S) : "";
      return typeof e == "function" && Y.set(e, Te), Te;
    }
    function Le(e, r, t) {
      return fe(e, !1);
    }
    function Ve(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function N(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return fe(e, Ve(e));
      if (typeof e == "string")
        return W(e);
      switch (e) {
        case O:
          return W("Suspense");
        case v:
          return W("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case f:
            return Le(e.render);
          case b:
            return N(e.type, r, t);
          case R: {
            var n = e, o = n._payload, u = n._init;
            try {
              return N(u(o), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var L = Object.prototype.hasOwnProperty, ce = {}, de = C.ReactDebugCurrentFrame;
    function V(e) {
      if (e) {
        var r = e._owner, t = N(e.type, e._source, r ? r.type : null);
        de.setExtraStackFrame(t);
      } else
        de.setExtraStackFrame(null);
    }
    function Me(e, r, t, n, o) {
      {
        var u = Function.call.bind(L);
        for (var i in e)
          if (u(e, i)) {
            var a = void 0;
            try {
              if (typeof e[i] != "function") {
                var d = Error((n || "React class") + ": " + t + " type `" + i + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[i] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw d.name = "Invariant Violation", d;
              }
              a = e[i](r, i, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (s) {
              a = s;
            }
            a && !(a instanceof Error) && (V(o), c("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, i, typeof a), V(null)), a instanceof Error && !(a.message in ce) && (ce[a.message] = !0, V(o), c("Failed %s type: %s", t, a.message), V(null));
          }
      }
    }
    var Ue = Array.isArray;
    function J(e) {
      return Ue(e);
    }
    function Be(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function qe(e) {
      try {
        return ve(e), !1;
      } catch {
        return !0;
      }
    }
    function ve(e) {
      return "" + e;
    }
    function pe(e) {
      if (qe(e))
        return c("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Be(e)), ve(e);
    }
    var k = C.ReactCurrentOwner, Je = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, he, be, G;
    G = {};
    function Ge(e) {
      if (L.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function ze(e) {
      if (L.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function He(e, r) {
      if (typeof e.ref == "string" && k.current && r && k.current.stateNode !== r) {
        var t = g(k.current.type);
        G[t] || (c('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', g(k.current.type), e.ref), G[t] = !0);
      }
    }
    function Ke(e, r) {
      {
        var t = function() {
          he || (he = !0, c("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function Xe(e, r) {
      {
        var t = function() {
          be || (be = !0, c("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var Ze = function(e, r, t, n, o, u, i) {
      var a = {
        $$typeof: _,
        type: e,
        key: r,
        ref: t,
        props: i,
        _owner: u
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
    function Qe(e, r, t, n, o) {
      {
        var u, i = {}, a = null, d = null;
        t !== void 0 && (pe(t), a = "" + t), ze(r) && (pe(r.key), a = "" + r.key), Ge(r) && (d = r.ref, He(r, o));
        for (u in r)
          L.call(r, u) && !Je.hasOwnProperty(u) && (i[u] = r[u]);
        if (e && e.defaultProps) {
          var s = e.defaultProps;
          for (u in s)
            i[u] === void 0 && (i[u] = s[u]);
        }
        if (a || d) {
          var l = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && Ke(i, l), d && Xe(i, l);
        }
        return Ze(e, a, d, o, n, k.current, i);
      }
    }
    var z = C.ReactCurrentOwner, ge = C.ReactDebugCurrentFrame;
    function x(e) {
      if (e) {
        var r = e._owner, t = N(e.type, e._source, r ? r.type : null);
        ge.setExtraStackFrame(t);
      } else
        ge.setExtraStackFrame(null);
    }
    var H;
    H = !1;
    function K(e) {
      return typeof e == "object" && e !== null && e.$$typeof === _;
    }
    function Ee() {
      {
        if (z.current) {
          var e = g(z.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function er(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
          return `

Check your code at ` + r + ":" + t + ".";
        }
        return "";
      }
    }
    var me = {};
    function rr(e) {
      {
        var r = Ee();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function _e(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = rr(r);
        if (me[t])
          return;
        me[t] = !0;
        var n = "";
        e && e._owner && e._owner !== z.current && (n = " It was passed a child from " + g(e._owner.type) + "."), x(e), c('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), x(null);
      }
    }
    function ye(e, r) {
      {
        if (typeof e != "object")
          return;
        if (J(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            K(n) && _e(n, r);
          }
        else if (K(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var o = we(e);
          if (typeof o == "function" && o !== e.entries)
            for (var u = o.call(e), i; !(i = u.next()).done; )
              K(i.value) && _e(i.value, r);
        }
      }
    }
    function tr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === f || r.$$typeof === b))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = g(r);
          Me(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !H) {
          H = !0;
          var o = g(r);
          c("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", o || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && c("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function nr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            x(e), c("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), x(null);
            break;
          }
        }
        e.ref !== null && (x(e), c("Invalid attribute `ref` supplied to `React.Fragment`."), x(null));
      }
    }
    function Re(e, r, t, n, o, u) {
      {
        var i = Ie(e);
        if (!i) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var d = er(o);
          d ? a += d : a += Ee();
          var s;
          e === null ? s = "null" : J(e) ? s = "array" : e !== void 0 && e.$$typeof === _ ? (s = "<" + (g(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : s = typeof e, c("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", s, a);
        }
        var l = Qe(e, r, t, o, u);
        if (l == null)
          return l;
        if (i) {
          var p = r.children;
          if (p !== void 0)
            if (n)
              if (J(p)) {
                for (var S = 0; S < p.length; S++)
                  ye(p[S], e);
                Object.freeze && Object.freeze(p);
              } else
                c("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ye(p, e);
        }
        return e === m ? nr(l) : tr(l), l;
      }
    }
    function ar(e, r, t) {
      return Re(e, r, t, !0);
    }
    function ir(e, r, t) {
      return Re(e, r, t, !1);
    }
    var or = ir, ur = ar;
    F.Fragment = m, F.jsx = or, F.jsxs = ur;
  }()), F;
}
(function(h) {
  process.env.NODE_ENV === "production" ? h.exports = sr() : h.exports = lr();
})(Z);
const xe = Z.exports.jsx, M = Z.exports.jsxs, cr = ({
  text: h
}) => {
  const [_, w] = X.useState(0);
  return /* @__PURE__ */ M("div", {
    children: [/* @__PURE__ */ M("div", {
      className: "text",
      children: ["This is test text: ", h]
    }), /* @__PURE__ */ xe("div", {
      className: "card",
      children: /* @__PURE__ */ M("button", {
        onClick: () => w((m) => m + 1),
        children: ["count is ", _]
      })
    }), /* @__PURE__ */ xe("h1", {
      className: "text-3xl font-bold underline border-4 border-red-800",
      children: "Abbas1"
    })]
  });
}, dr = ({
  text: h
}) => /* @__PURE__ */ M("div", {
  className: "text",
  children: ["This is invoice text: ", h]
});
export {
  cr as Helloworld,
  dr as Invoice
};
