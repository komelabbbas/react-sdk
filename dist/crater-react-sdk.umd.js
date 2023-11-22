(function(_,x){typeof exports=="object"&&typeof module<"u"?x(exports,require("react")):typeof define=="function"&&define.amd?define(["exports","react"],x):(_=typeof globalThis<"u"?globalThis:_||self,x(_["@crater/react-sdk"]={},_.React))})(this,function(_,x){"use strict";const B=(f=>f&&typeof f=="object"&&"default"in f?f:{default:f})(x);var J={exports:{}},j={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var re;function Pe(){if(re)return j;re=1;var f=B.default,m=Symbol.for("react.element"),D=Symbol.for("react.fragment"),E=Object.prototype.hasOwnProperty,W=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Y={key:!0,ref:!0,__self:!0,__source:!0};function F(R,c,C){var p,g={},T=null,N=null;C!==void 0&&(T=""+C),c.key!==void 0&&(T=""+c.key),c.ref!==void 0&&(N=c.ref);for(p in c)E.call(c,p)&&!Y.hasOwnProperty(p)&&(g[p]=c[p]);if(R&&R.defaultProps)for(p in c=R.defaultProps,c)g[p]===void 0&&(g[p]=c[p]);return{$$typeof:m,type:R,key:T,ref:N,props:g,_owner:W.current}}return j.Fragment=D,j.jsx=F,j.jsxs=F,j}var k={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var te;function xe(){return te||(te=1,process.env.NODE_ENV!=="production"&&function(){var f=B.default,m=Symbol.for("react.element"),D=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),W=Symbol.for("react.strict_mode"),Y=Symbol.for("react.profiler"),F=Symbol.for("react.provider"),R=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),C=Symbol.for("react.suspense"),p=Symbol.for("react.suspense_list"),g=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),N=Symbol.for("react.offscreen"),ne=Symbol.iterator,Fe="@@iterator";function Ae(e){if(e===null||typeof e!="object")return null;var r=ne&&e[ne]||e[Fe];return typeof r=="function"?r:null}var S=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function d(e){{for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];Ie("error",e,t)}}function Ie(e,r,t){{var n=S.ReactDebugCurrentFrame,o=n.getStackAddendum();o!==""&&(r+="%s",t=t.concat([o]));var u=t.map(function(i){return String(i)});u.unshift("Warning: "+r),Function.prototype.apply.call(console[e],console,u)}}var $e=!1,We=!1,Ye=!1,Ne=!1,Le=!1,ae;ae=Symbol.for("react.module.reference");function Me(e){return!!(typeof e=="string"||typeof e=="function"||e===E||e===Y||Le||e===W||e===C||e===p||Ne||e===N||$e||We||Ye||typeof e=="object"&&e!==null&&(e.$$typeof===T||e.$$typeof===g||e.$$typeof===F||e.$$typeof===R||e.$$typeof===c||e.$$typeof===ae||e.getModuleId!==void 0))}function Ve(e,r,t){var n=e.displayName;if(n)return n;var o=r.displayName||r.name||"";return o!==""?t+"("+o+")":t}function ie(e){return e.displayName||"Context"}function b(e){if(e==null)return null;if(typeof e.tag=="number"&&d("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case E:return"Fragment";case D:return"Portal";case Y:return"Profiler";case W:return"StrictMode";case C:return"Suspense";case p:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case R:var r=e;return ie(r)+".Consumer";case F:var t=e;return ie(t._context)+".Provider";case c:return Ve(e,e.render,"ForwardRef");case g:var n=e.displayName||null;return n!==null?n:b(e.type)||"Memo";case T:{var o=e,u=o._payload,i=o._init;try{return b(i(u))}catch{return null}}}return null}var O=Object.assign,A=0,oe,ue,se,le,fe,ce,de;function ve(){}ve.__reactDisabledLog=!0;function Ue(){{if(A===0){oe=console.log,ue=console.info,se=console.warn,le=console.error,fe=console.group,ce=console.groupCollapsed,de=console.groupEnd;var e={configurable:!0,enumerable:!0,value:ve,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}A++}}function qe(){{if(A--,A===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:O({},e,{value:oe}),info:O({},e,{value:ue}),warn:O({},e,{value:se}),error:O({},e,{value:le}),group:O({},e,{value:fe}),groupCollapsed:O({},e,{value:ce}),groupEnd:O({},e,{value:de})})}A<0&&d("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var G=S.ReactCurrentDispatcher,z;function L(e,r,t){{if(z===void 0)try{throw Error()}catch(o){var n=o.stack.trim().match(/\n( *(at )?)/);z=n&&n[1]||""}return`
`+z+e}}var H=!1,M;{var Be=typeof WeakMap=="function"?WeakMap:Map;M=new Be}function pe(e,r){if(!e||H)return"";{var t=M.get(e);if(t!==void 0)return t}var n;H=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var u;u=G.current,G.current=null,Ue();try{if(r){var i=function(){throw Error()};if(Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(y){n=y}Reflect.construct(e,[],i)}else{try{i.call()}catch(y){n=y}e.call(i.prototype)}}else{try{throw Error()}catch(y){n=y}e()}}catch(y){if(y&&n&&typeof y.stack=="string"){for(var a=y.stack.split(`
`),v=n.stack.split(`
`),s=a.length-1,l=v.length-1;s>=1&&l>=0&&a[s]!==v[l];)l--;for(;s>=1&&l>=0;s--,l--)if(a[s]!==v[l]){if(s!==1||l!==1)do if(s--,l--,l<0||a[s]!==v[l]){var h=`
`+a[s].replace(" at new "," at ");return e.displayName&&h.includes("<anonymous>")&&(h=h.replace("<anonymous>",e.displayName)),typeof e=="function"&&M.set(e,h),h}while(s>=1&&l>=0);break}}}finally{H=!1,G.current=u,qe(),Error.prepareStackTrace=o}var P=e?e.displayName||e.name:"",we=P?L(P):"";return typeof e=="function"&&M.set(e,we),we}function Je(e,r,t){return pe(e,!1)}function Ge(e){var r=e.prototype;return!!(r&&r.isReactComponent)}function V(e,r,t){if(e==null)return"";if(typeof e=="function")return pe(e,Ge(e));if(typeof e=="string")return L(e);switch(e){case C:return L("Suspense");case p:return L("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case c:return Je(e.render);case g:return V(e.type,r,t);case T:{var n=e,o=n._payload,u=n._init;try{return V(u(o),r,t)}catch{}}}return""}var U=Object.prototype.hasOwnProperty,he={},ge=S.ReactDebugCurrentFrame;function q(e){if(e){var r=e._owner,t=V(e.type,e._source,r?r.type:null);ge.setExtraStackFrame(t)}else ge.setExtraStackFrame(null)}function ze(e,r,t,n,o){{var u=Function.call.bind(U);for(var i in e)if(u(e,i)){var a=void 0;try{if(typeof e[i]!="function"){var v=Error((n||"React class")+": "+t+" type `"+i+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[i]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw v.name="Invariant Violation",v}a=e[i](r,i,n,t,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(s){a=s}a&&!(a instanceof Error)&&(q(o),d("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",n||"React class",t,i,typeof a),q(null)),a instanceof Error&&!(a.message in he)&&(he[a.message]=!0,q(o),d("Failed %s type: %s",t,a.message),q(null))}}}var He=Array.isArray;function K(e){return He(e)}function Ke(e){{var r=typeof Symbol=="function"&&Symbol.toStringTag,t=r&&e[Symbol.toStringTag]||e.constructor.name||"Object";return t}}function Xe(e){try{return be(e),!1}catch{return!0}}function be(e){return""+e}function ye(e){if(Xe(e))return d("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",Ke(e)),be(e)}var I=S.ReactCurrentOwner,Ze={key:!0,ref:!0,__self:!0,__source:!0},_e,Ee,X;X={};function Qe(e){if(U.call(e,"ref")){var r=Object.getOwnPropertyDescriptor(e,"ref").get;if(r&&r.isReactWarning)return!1}return e.ref!==void 0}function er(e){if(U.call(e,"key")){var r=Object.getOwnPropertyDescriptor(e,"key").get;if(r&&r.isReactWarning)return!1}return e.key!==void 0}function rr(e,r){if(typeof e.ref=="string"&&I.current&&r&&I.current.stateNode!==r){var t=b(I.current.type);X[t]||(d('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',b(I.current.type),e.ref),X[t]=!0)}}function tr(e,r){{var t=function(){_e||(_e=!0,d("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"key",{get:t,configurable:!0})}}function nr(e,r){{var t=function(){Ee||(Ee=!0,d("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"ref",{get:t,configurable:!0})}}var ar=function(e,r,t,n,o,u,i){var a={$$typeof:m,type:e,key:r,ref:t,props:i,_owner:u};return a._store={},Object.defineProperty(a._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(a,"_self",{configurable:!1,enumerable:!1,writable:!1,value:n}),Object.defineProperty(a,"_source",{configurable:!1,enumerable:!1,writable:!1,value:o}),Object.freeze&&(Object.freeze(a.props),Object.freeze(a)),a};function ir(e,r,t,n,o){{var u,i={},a=null,v=null;t!==void 0&&(ye(t),a=""+t),er(r)&&(ye(r.key),a=""+r.key),Qe(r)&&(v=r.ref,rr(r,o));for(u in r)U.call(r,u)&&!Ze.hasOwnProperty(u)&&(i[u]=r[u]);if(e&&e.defaultProps){var s=e.defaultProps;for(u in s)i[u]===void 0&&(i[u]=s[u])}if(a||v){var l=typeof e=="function"?e.displayName||e.name||"Unknown":e;a&&tr(i,l),v&&nr(i,l)}return ar(e,a,v,o,n,I.current,i)}}var Z=S.ReactCurrentOwner,me=S.ReactDebugCurrentFrame;function w(e){if(e){var r=e._owner,t=V(e.type,e._source,r?r.type:null);me.setExtraStackFrame(t)}else me.setExtraStackFrame(null)}var Q;Q=!1;function ee(e){return typeof e=="object"&&e!==null&&e.$$typeof===m}function Re(){{if(Z.current){var e=b(Z.current.type);if(e)return`

Check the render method of \``+e+"`."}return""}}function or(e){{if(e!==void 0){var r=e.fileName.replace(/^.*[\\\/]/,""),t=e.lineNumber;return`

Check your code at `+r+":"+t+"."}return""}}var Te={};function ur(e){{var r=Re();if(!r){var t=typeof e=="string"?e:e.displayName||e.name;t&&(r=`

Check the top-level render call using <`+t+">.")}return r}}function Oe(e,r){{if(!e._store||e._store.validated||e.key!=null)return;e._store.validated=!0;var t=ur(r);if(Te[t])return;Te[t]=!0;var n="";e&&e._owner&&e._owner!==Z.current&&(n=" It was passed a child from "+b(e._owner.type)+"."),w(e),d('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',t,n),w(null)}}function Ce(e,r){{if(typeof e!="object")return;if(K(e))for(var t=0;t<e.length;t++){var n=e[t];ee(n)&&Oe(n,r)}else if(ee(e))e._store&&(e._store.validated=!0);else if(e){var o=Ae(e);if(typeof o=="function"&&o!==e.entries)for(var u=o.call(e),i;!(i=u.next()).done;)ee(i.value)&&Oe(i.value,r)}}}function sr(e){{var r=e.type;if(r==null||typeof r=="string")return;var t;if(typeof r=="function")t=r.propTypes;else if(typeof r=="object"&&(r.$$typeof===c||r.$$typeof===g))t=r.propTypes;else return;if(t){var n=b(r);ze(t,e.props,"prop",n,e)}else if(r.PropTypes!==void 0&&!Q){Q=!0;var o=b(r);d("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",o||"Unknown")}typeof r.getDefaultProps=="function"&&!r.getDefaultProps.isReactClassApproved&&d("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function lr(e){{for(var r=Object.keys(e.props),t=0;t<r.length;t++){var n=r[t];if(n!=="children"&&n!=="key"){w(e),d("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",n),w(null);break}}e.ref!==null&&(w(e),d("Invalid attribute `ref` supplied to `React.Fragment`."),w(null))}}function Se(e,r,t,n,o,u){{var i=Me(e);if(!i){var a="";(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(a+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var v=or(o);v?a+=v:a+=Re();var s;e===null?s="null":K(e)?s="array":e!==void 0&&e.$$typeof===m?(s="<"+(b(e.type)||"Unknown")+" />",a=" Did you accidentally export a JSX literal instead of a component?"):s=typeof e,d("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",s,a)}var l=ir(e,r,t,o,u);if(l==null)return l;if(i){var h=r.children;if(h!==void 0)if(n)if(K(h)){for(var P=0;P<h.length;P++)Ce(h[P],e);Object.freeze&&Object.freeze(h)}else d("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else Ce(h,e)}return e===E?lr(l):sr(l),l}}function fr(e,r,t){return Se(e,r,t,!0)}function cr(e,r,t){return Se(e,r,t,!1)}var dr=cr,vr=fr;k.Fragment=E,k.jsx=dr,k.jsxs=vr}()),k}(function(f){process.env.NODE_ENV==="production"?f.exports=Pe():f.exports=xe()})(J);const je=J.exports.jsx,$=J.exports.jsxs,ke=({text:f})=>{const[m,D]=B.default.useState(0);return $("div",{children:[$("div",{className:"text",children:["This is test text: ",f]}),je("div",{className:"card",children:$("button",{onClick:()=>D(E=>E+1),children:["count is ",m]})})]})},hr="",De=({text:f})=>$("div",{className:"text",children:["This is invoice text: ",f]});_.Helloworld=ke,_.Invoice=De,Object.defineProperties(_,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
