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
var xe;
function ur() {
  if (xe)
    return D;
  xe = 1;
  var b = X, y = Symbol.for("react.element"), C = Symbol.for("react.fragment"), m = Object.prototype.hasOwnProperty, A = b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, I = { key: !0, ref: !0, __self: !0, __source: !0 };
  function O(E, c, x) {
    var p, h = {}, R = null, N = null;
    x !== void 0 && (R = "" + x), c.key !== void 0 && (R = "" + c.key), c.ref !== void 0 && (N = c.ref);
    for (p in c)
      m.call(c, p) && !I.hasOwnProperty(p) && (h[p] = c[p]);
    if (E && E.defaultProps)
      for (p in c = E.defaultProps, c)
        h[p] === void 0 && (h[p] = c[p]);
    return { $$typeof: y, type: E, key: R, ref: N, props: h, _owner: A.current };
  }
  return D.Fragment = C, D.jsx = O, D.jsxs = O, D;
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
var ke;
function lr() {
  return ke || (ke = 1, process.env.NODE_ENV !== "production" && function() {
    var b = X, y = Symbol.for("react.element"), C = Symbol.for("react.portal"), m = Symbol.for("react.fragment"), A = Symbol.for("react.strict_mode"), I = Symbol.for("react.profiler"), O = Symbol.for("react.provider"), E = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), x = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), R = Symbol.for("react.lazy"), N = Symbol.for("react.offscreen"), Q = Symbol.iterator, Se = "@@iterator";
    function Ce(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = Q && e[Q] || e[Se];
      return typeof r == "function" ? r : null;
    }
    var k = b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function f(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        Oe("error", e, t);
      }
    }
    function Oe(e, r, t) {
      {
        var n = k.ReactDebugCurrentFrame, i = n.getStackAddendum();
        i !== "" && (r += "%s", t = t.concat([i]));
        var s = t.map(function(o) {
          return String(o);
        });
        s.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var Pe = !1, je = !1, De = !1, Fe = !1, Ae = !1, ee;
    ee = Symbol.for("react.module.reference");
    function Ie(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === m || e === I || Ae || e === A || e === x || e === p || Fe || e === N || Pe || je || De || typeof e == "object" && e !== null && (e.$$typeof === R || e.$$typeof === h || e.$$typeof === O || e.$$typeof === E || e.$$typeof === c || e.$$typeof === ee || e.getModuleId !== void 0));
    }
    function Ne(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var i = r.displayName || r.name || "";
      return i !== "" ? t + "(" + i + ")" : t;
    }
    function re(e) {
      return e.displayName || "Context";
    }
    function w(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && f("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case m:
          return "Fragment";
        case C:
          return "Portal";
        case I:
          return "Profiler";
        case A:
          return "StrictMode";
        case x:
          return "Suspense";
        case p:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case E:
            var r = e;
            return re(r) + ".Consumer";
          case O:
            var t = e;
            return re(t._context) + ".Provider";
          case c:
            return Ne(e, e.render, "ForwardRef");
          case h:
            var n = e.displayName || null;
            return n !== null ? n : w(e.type) || "Memo";
          case R: {
            var i = e, s = i._payload, o = i._init;
            try {
              return w(o(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var _ = Object.assign, P = 0, te, ne, ae, oe, ie, se, ue;
    function le() {
    }
    le.__reactDisabledLog = !0;
    function ze() {
      {
        if (P === 0) {
          te = console.log, ne = console.info, ae = console.warn, oe = console.error, ie = console.group, se = console.groupCollapsed, ue = console.groupEnd;
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
        P++;
      }
    }
    function We() {
      {
        if (P--, P === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: _({}, e, {
              value: te
            }),
            info: _({}, e, {
              value: ne
            }),
            warn: _({}, e, {
              value: ae
            }),
            error: _({}, e, {
              value: oe
            }),
            group: _({}, e, {
              value: ie
            }),
            groupCollapsed: _({}, e, {
              value: se
            }),
            groupEnd: _({}, e, {
              value: ue
            })
          });
        }
        P < 0 && f("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var U = k.ReactCurrentDispatcher, V;
    function z(e, r, t) {
      {
        if (V === void 0)
          try {
            throw Error();
          } catch (i) {
            var n = i.stack.trim().match(/\n( *(at )?)/);
            V = n && n[1] || "";
          }
        return `
` + V + e;
      }
    }
    var B = !1, W;
    {
      var $e = typeof WeakMap == "function" ? WeakMap : Map;
      W = new $e();
    }
    function ce(e, r) {
      if (!e || B)
        return "";
      {
        var t = W.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      B = !0;
      var i = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = U.current, U.current = null, ze();
      try {
        if (r) {
          var o = function() {
            throw Error();
          };
          if (Object.defineProperty(o.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(o, []);
            } catch (g) {
              n = g;
            }
            Reflect.construct(e, [], o);
          } else {
            try {
              o.call();
            } catch (g) {
              n = g;
            }
            e.call(o.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (g) {
            n = g;
          }
          e();
        }
      } catch (g) {
        if (g && n && typeof g.stack == "string") {
          for (var a = g.stack.split(`
`), d = n.stack.split(`
`), u = a.length - 1, l = d.length - 1; u >= 1 && l >= 0 && a[u] !== d[l]; )
            l--;
          for (; u >= 1 && l >= 0; u--, l--)
            if (a[u] !== d[l]) {
              if (u !== 1 || l !== 1)
                do
                  if (u--, l--, l < 0 || a[u] !== d[l]) {
                    var v = `
` + a[u].replace(" at new ", " at ");
                    return e.displayName && v.includes("<anonymous>") && (v = v.replace("<anonymous>", e.displayName)), typeof e == "function" && W.set(e, v), v;
                  }
                while (u >= 1 && l >= 0);
              break;
            }
        }
      } finally {
        B = !1, U.current = s, We(), Error.prepareStackTrace = i;
      }
      var S = e ? e.displayName || e.name : "", _e = S ? z(S) : "";
      return typeof e == "function" && W.set(e, _e), _e;
    }
    function Ye(e, r, t) {
      return ce(e, !1);
    }
    function Me(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function $(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ce(e, Me(e));
      if (typeof e == "string")
        return z(e);
      switch (e) {
        case x:
          return z("Suspense");
        case p:
          return z("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case c:
            return Ye(e.render);
          case h:
            return $(e.type, r, t);
          case R: {
            var n = e, i = n._payload, s = n._init;
            try {
              return $(s(i), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var Y = Object.prototype.hasOwnProperty, fe = {}, de = k.ReactDebugCurrentFrame;
    function M(e) {
      if (e) {
        var r = e._owner, t = $(e.type, e._source, r ? r.type : null);
        de.setExtraStackFrame(t);
      } else
        de.setExtraStackFrame(null);
    }
    function Le(e, r, t, n, i) {
      {
        var s = Function.call.bind(Y);
        for (var o in e)
          if (s(e, o)) {
            var a = void 0;
            try {
              if (typeof e[o] != "function") {
                var d = Error((n || "React class") + ": " + t + " type `" + o + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[o] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw d.name = "Invariant Violation", d;
              }
              a = e[o](r, o, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (u) {
              a = u;
            }
            a && !(a instanceof Error) && (M(i), f("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, o, typeof a), M(null)), a instanceof Error && !(a.message in fe) && (fe[a.message] = !0, M(i), f("Failed %s type: %s", t, a.message), M(null));
          }
      }
    }
    var Ue = Array.isArray;
    function q(e) {
      return Ue(e);
    }
    function Ve(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Be(e) {
      try {
        return pe(e), !1;
      } catch {
        return !0;
      }
    }
    function pe(e) {
      return "" + e;
    }
    function ve(e) {
      if (Be(e))
        return f("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ve(e)), pe(e);
    }
    var j = k.ReactCurrentOwner, qe = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, be, he, J;
    J = {};
    function Je(e) {
      if (Y.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Ge(e) {
      if (Y.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function He(e, r) {
      if (typeof e.ref == "string" && j.current && r && j.current.stateNode !== r) {
        var t = w(j.current.type);
        J[t] || (f('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', w(j.current.type), e.ref), J[t] = !0);
      }
    }
    function Ke(e, r) {
      {
        var t = function() {
          be || (be = !0, f("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
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
          he || (he = !0, f("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var Ze = function(e, r, t, n, i, s, o) {
      var a = {
        $$typeof: y,
        type: e,
        key: r,
        ref: t,
        props: o,
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
        value: i
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function Qe(e, r, t, n, i) {
      {
        var s, o = {}, a = null, d = null;
        t !== void 0 && (ve(t), a = "" + t), Ge(r) && (ve(r.key), a = "" + r.key), Je(r) && (d = r.ref, He(r, i));
        for (s in r)
          Y.call(r, s) && !qe.hasOwnProperty(s) && (o[s] = r[s]);
        if (e && e.defaultProps) {
          var u = e.defaultProps;
          for (s in u)
            o[s] === void 0 && (o[s] = u[s]);
        }
        if (a || d) {
          var l = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && Ke(o, l), d && Xe(o, l);
        }
        return Ze(e, a, d, i, n, j.current, o);
      }
    }
    var G = k.ReactCurrentOwner, we = k.ReactDebugCurrentFrame;
    function T(e) {
      if (e) {
        var r = e._owner, t = $(e.type, e._source, r ? r.type : null);
        we.setExtraStackFrame(t);
      } else
        we.setExtraStackFrame(null);
    }
    var H;
    H = !1;
    function K(e) {
      return typeof e == "object" && e !== null && e.$$typeof === y;
    }
    function ge() {
      {
        if (G.current) {
          var e = w(G.current.type);
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
        var r = ge();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function ye(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = rr(r);
        if (me[t])
          return;
        me[t] = !0;
        var n = "";
        e && e._owner && e._owner !== G.current && (n = " It was passed a child from " + w(e._owner.type) + "."), T(e), f('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), T(null);
      }
    }
    function Ee(e, r) {
      {
        if (typeof e != "object")
          return;
        if (q(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            K(n) && ye(n, r);
          }
        else if (K(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var i = Ce(e);
          if (typeof i == "function" && i !== e.entries)
            for (var s = i.call(e), o; !(o = s.next()).done; )
              K(o.value) && ye(o.value, r);
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
        else if (typeof r == "object" && (r.$$typeof === c || r.$$typeof === h))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = w(r);
          Le(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !H) {
          H = !0;
          var i = w(r);
          f("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", i || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && f("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function nr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            T(e), f("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), T(null);
            break;
          }
        }
        e.ref !== null && (T(e), f("Invalid attribute `ref` supplied to `React.Fragment`."), T(null));
      }
    }
    function Re(e, r, t, n, i, s) {
      {
        var o = Ie(e);
        if (!o) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var d = er(i);
          d ? a += d : a += ge();
          var u;
          e === null ? u = "null" : q(e) ? u = "array" : e !== void 0 && e.$$typeof === y ? (u = "<" + (w(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : u = typeof e, f("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", u, a);
        }
        var l = Qe(e, r, t, i, s);
        if (l == null)
          return l;
        if (o) {
          var v = r.children;
          if (v !== void 0)
            if (n)
              if (q(v)) {
                for (var S = 0; S < v.length; S++)
                  Ee(v[S], e);
                Object.freeze && Object.freeze(v);
              } else
                f("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ee(v, e);
        }
        return e === m ? nr(l) : tr(l), l;
      }
    }
    function ar(e, r, t) {
      return Re(e, r, t, !0);
    }
    function or(e, r, t) {
      return Re(e, r, t, !1);
    }
    var ir = or, sr = ar;
    F.Fragment = m, F.jsx = ir, F.jsxs = sr;
  }()), F;
}
(function(b) {
  process.env.NODE_ENV === "production" ? b.exports = ur() : b.exports = lr();
})(Z);
const Te = Z.exports.jsx, L = Z.exports.jsxs, fr = ({
  text: b
}) => {
  const [y, C] = X.useState(0);
  return /* @__PURE__ */ L("div", {
    children: [/* @__PURE__ */ L("div", {
      className: "text",
      children: ["This is test text: ", b]
    }), /* @__PURE__ */ Te("div", {
      className: "card",
      children: /* @__PURE__ */ L("button", {
        onClick: () => C((m) => m + 1),
        children: ["count is ", y]
      })
    }), /* @__PURE__ */ Te("h1", {
      className: "text-3xl font-bold underline border-4 border-red-800",
      children: "TAILWINDS"
    })]
  });
};
const dr = ({
  text: b
}) => /* @__PURE__ */ L("div", {
  className: "text",
  children: ["This is invoice text: ", b]
});
export {
  fr as Helloworld,
  dr as Invoice
};
