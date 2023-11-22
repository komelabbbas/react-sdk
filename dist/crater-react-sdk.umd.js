(function(m,O){typeof exports=="object"&&typeof module<"u"?O(exports,require("react")):typeof define=="function"&&define.amd?define(["exports","react"],O):(m=typeof globalThis<"u"?globalThis:m||self,O(m["@crater/react-sdk"]={},m.React))})(this,function(m,O){"use strict";const q=(c=>c&&typeof c=="object"&&"default"in c?c:{default:c})(O);var B={exports:{}},j={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var re;function Oe(){if(re)return j;re=1;var c=q.default,_=Symbol.for("react.element"),D=Symbol.for("react.fragment"),y=Object.prototype.hasOwnProperty,z=c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,W={key:!0,ref:!0,__self:!0,__source:!0};function F(E,f,k){var v,h={},R=null,$=null;k!==void 0&&(R=""+k),f.key!==void 0&&(R=""+f.key),f.ref!==void 0&&($=f.ref);for(v in f)y.call(f,v)&&!W.hasOwnProperty(v)&&(h[v]=f[v]);if(E&&E.defaultProps)for(v in f=E.defaultProps,f)h[v]===void 0&&(h[v]=f[v]);return{$$typeof:_,type:E,key:R,ref:$,props:h,_owner:z.current}}return j.Fragment=D,j.jsx=F,j.jsxs=F,j}var P={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var te;function je(){return te||(te=1,process.env.NODE_ENV!=="production"&&function(){var c=q.default,_=Symbol.for("react.element"),D=Symbol.for("react.portal"),y=Symbol.for("react.fragment"),z=Symbol.for("react.strict_mode"),W=Symbol.for("react.profiler"),F=Symbol.for("react.provider"),E=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),v=Symbol.for("react.suspense_list"),h=Symbol.for("react.memo"),R=Symbol.for("react.lazy"),$=Symbol.for("react.offscreen"),ae=Symbol.iterator,Fe="@@iterator";function Ae(e){if(e===null||typeof e!="object")return null;var r=ae&&e[ae]||e[Fe];return typeof r=="function"?r:null}var T=c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function d(e){{for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];Ie("error",e,t)}}function Ie(e,r,t){{var n=T.ReactDebugCurrentFrame,i=n.getStackAddendum();i!==""&&(r+="%s",t=t.concat([i]));var s=t.map(function(o){return String(o)});s.unshift("Warning: "+r),Function.prototype.apply.call(console[e],console,s)}}var Ne=!1,ze=!1,We=!1,$e=!1,Me=!1,oe;oe=Symbol.for("react.module.reference");function Ye(e){return!!(typeof e=="string"||typeof e=="function"||e===y||e===W||Me||e===z||e===k||e===v||$e||e===$||Ne||ze||We||typeof e=="object"&&e!==null&&(e.$$typeof===R||e.$$typeof===h||e.$$typeof===F||e.$$typeof===E||e.$$typeof===f||e.$$typeof===oe||e.getModuleId!==void 0))}function Le(e,r,t){var n=e.displayName;if(n)return n;var i=r.displayName||r.name||"";return i!==""?t+"("+i+")":t}function ie(e){return e.displayName||"Context"}function w(e){if(e==null)return null;if(typeof e.tag=="number"&&d("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case y:return"Fragment";case D:return"Portal";case W:return"Profiler";case z:return"StrictMode";case k:return"Suspense";case v:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case E:var r=e;return ie(r)+".Consumer";case F:var t=e;return ie(t._context)+".Provider";case f:return Le(e,e.render,"ForwardRef");case h:var n=e.displayName||null;return n!==null?n:w(e.type)||"Memo";case R:{var i=e,s=i._payload,o=i._init;try{return w(o(s))}catch{return null}}}return null}var x=Object.assign,A=0,se,ue,le,ce,fe,de,pe;function ve(){}ve.__reactDisabledLog=!0;function Ue(){{if(A===0){se=console.log,ue=console.info,le=console.warn,ce=console.error,fe=console.group,de=console.groupCollapsed,pe=console.groupEnd;var e={configurable:!0,enumerable:!0,value:ve,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}A++}}function Ve(){{if(A--,A===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:x({},e,{value:se}),info:x({},e,{value:ue}),warn:x({},e,{value:le}),error:x({},e,{value:ce}),group:x({},e,{value:fe}),groupCollapsed:x({},e,{value:de}),groupEnd:x({},e,{value:pe})})}A<0&&d("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var J=T.ReactCurrentDispatcher,G;function M(e,r,t){{if(G===void 0)try{throw Error()}catch(i){var n=i.stack.trim().match(/\n( *(at )?)/);G=n&&n[1]||""}return`
`+G+e}}var H=!1,Y;{var qe=typeof WeakMap=="function"?WeakMap:Map;Y=new qe}function be(e,r){if(!e||H)return"";{var t=Y.get(e);if(t!==void 0)return t}var n;H=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var s;s=J.current,J.current=null,Ue();try{if(r){var o=function(){throw Error()};if(Object.defineProperty(o.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(o,[])}catch(g){n=g}Reflect.construct(e,[],o)}else{try{o.call()}catch(g){n=g}e.call(o.prototype)}}else{try{throw Error()}catch(g){n=g}e()}}catch(g){if(g&&n&&typeof g.stack=="string"){for(var a=g.stack.split(`
`),p=n.stack.split(`
`),u=a.length-1,l=p.length-1;u>=1&&l>=0&&a[u]!==p[l];)l--;for(;u>=1&&l>=0;u--,l--)if(a[u]!==p[l]){if(u!==1||l!==1)do if(u--,l--,l<0||a[u]!==p[l]){var b=`
`+a[u].replace(" at new "," at ");return e.displayName&&b.includes("<anonymous>")&&(b=b.replace("<anonymous>",e.displayName)),typeof e=="function"&&Y.set(e,b),b}while(u>=1&&l>=0);break}}}finally{H=!1,J.current=s,Ve(),Error.prepareStackTrace=i}var C=e?e.displayName||e.name:"",Ce=C?M(C):"";return typeof e=="function"&&Y.set(e,Ce),Ce}function Be(e,r,t){return be(e,!1)}function Je(e){var r=e.prototype;return!!(r&&r.isReactComponent)}function L(e,r,t){if(e==null)return"";if(typeof e=="function")return be(e,Je(e));if(typeof e=="string")return M(e);switch(e){case k:return M("Suspense");case v:return M("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case f:return Be(e.render);case h:return L(e.type,r,t);case R:{var n=e,i=n._payload,s=n._init;try{return L(s(i),r,t)}catch{}}}return""}var U=Object.prototype.hasOwnProperty,he={},we=T.ReactDebugCurrentFrame;function V(e){if(e){var r=e._owner,t=L(e.type,e._source,r?r.type:null);we.setExtraStackFrame(t)}else we.setExtraStackFrame(null)}function Ge(e,r,t,n,i){{var s=Function.call.bind(U);for(var o in e)if(s(e,o)){var a=void 0;try{if(typeof e[o]!="function"){var p=Error((n||"React class")+": "+t+" type `"+o+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[o]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw p.name="Invariant Violation",p}a=e[o](r,o,n,t,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(u){a=u}a&&!(a instanceof Error)&&(V(i),d("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",n||"React class",t,o,typeof a),V(null)),a instanceof Error&&!(a.message in he)&&(he[a.message]=!0,V(i),d("Failed %s type: %s",t,a.message),V(null))}}}var He=Array.isArray;function K(e){return He(e)}function Ke(e){{var r=typeof Symbol=="function"&&Symbol.toStringTag,t=r&&e[Symbol.toStringTag]||e.constructor.name||"Object";return t}}function Xe(e){try{return ge(e),!1}catch{return!0}}function ge(e){return""+e}function me(e){if(Xe(e))return d("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",Ke(e)),ge(e)}var I=T.ReactCurrentOwner,Ze={key:!0,ref:!0,__self:!0,__source:!0},ye,_e,X;X={};function Qe(e){if(U.call(e,"ref")){var r=Object.getOwnPropertyDescriptor(e,"ref").get;if(r&&r.isReactWarning)return!1}return e.ref!==void 0}function er(e){if(U.call(e,"key")){var r=Object.getOwnPropertyDescriptor(e,"key").get;if(r&&r.isReactWarning)return!1}return e.key!==void 0}function rr(e,r){if(typeof e.ref=="string"&&I.current&&r&&I.current.stateNode!==r){var t=w(I.current.type);X[t]||(d('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',w(I.current.type),e.ref),X[t]=!0)}}function tr(e,r){{var t=function(){ye||(ye=!0,d("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"key",{get:t,configurable:!0})}}function nr(e,r){{var t=function(){_e||(_e=!0,d("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"ref",{get:t,configurable:!0})}}var ar=function(e,r,t,n,i,s,o){var a={$$typeof:_,type:e,key:r,ref:t,props:o,_owner:s};return a._store={},Object.defineProperty(a._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(a,"_self",{configurable:!1,enumerable:!1,writable:!1,value:n}),Object.defineProperty(a,"_source",{configurable:!1,enumerable:!1,writable:!1,value:i}),Object.freeze&&(Object.freeze(a.props),Object.freeze(a)),a};function or(e,r,t,n,i){{var s,o={},a=null,p=null;t!==void 0&&(me(t),a=""+t),er(r)&&(me(r.key),a=""+r.key),Qe(r)&&(p=r.ref,rr(r,i));for(s in r)U.call(r,s)&&!Ze.hasOwnProperty(s)&&(o[s]=r[s]);if(e&&e.defaultProps){var u=e.defaultProps;for(s in u)o[s]===void 0&&(o[s]=u[s])}if(a||p){var l=typeof e=="function"?e.displayName||e.name||"Unknown":e;a&&tr(o,l),p&&nr(o,l)}return ar(e,a,p,i,n,I.current,o)}}var Z=T.ReactCurrentOwner,Ee=T.ReactDebugCurrentFrame;function S(e){if(e){var r=e._owner,t=L(e.type,e._source,r?r.type:null);Ee.setExtraStackFrame(t)}else Ee.setExtraStackFrame(null)}var Q;Q=!1;function ee(e){return typeof e=="object"&&e!==null&&e.$$typeof===_}function Re(){{if(Z.current){var e=w(Z.current.type);if(e)return`

Check the render method of \``+e+"`."}return""}}function ir(e){{if(e!==void 0){var r=e.fileName.replace(/^.*[\\\/]/,""),t=e.lineNumber;return`

Check your code at `+r+":"+t+"."}return""}}var xe={};function sr(e){{var r=Re();if(!r){var t=typeof e=="string"?e:e.displayName||e.name;t&&(r=`

Check the top-level render call using <`+t+">.")}return r}}function ke(e,r){{if(!e._store||e._store.validated||e.key!=null)return;e._store.validated=!0;var t=sr(r);if(xe[t])return;xe[t]=!0;var n="";e&&e._owner&&e._owner!==Z.current&&(n=" It was passed a child from "+w(e._owner.type)+"."),S(e),d('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',t,n),S(null)}}function Te(e,r){{if(typeof e!="object")return;if(K(e))for(var t=0;t<e.length;t++){var n=e[t];ee(n)&&ke(n,r)}else if(ee(e))e._store&&(e._store.validated=!0);else if(e){var i=Ae(e);if(typeof i=="function"&&i!==e.entries)for(var s=i.call(e),o;!(o=s.next()).done;)ee(o.value)&&ke(o.value,r)}}}function ur(e){{var r=e.type;if(r==null||typeof r=="string")return;var t;if(typeof r=="function")t=r.propTypes;else if(typeof r=="object"&&(r.$$typeof===f||r.$$typeof===h))t=r.propTypes;else return;if(t){var n=w(r);Ge(t,e.props,"prop",n,e)}else if(r.PropTypes!==void 0&&!Q){Q=!0;var i=w(r);d("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",i||"Unknown")}typeof r.getDefaultProps=="function"&&!r.getDefaultProps.isReactClassApproved&&d("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function lr(e){{for(var r=Object.keys(e.props),t=0;t<r.length;t++){var n=r[t];if(n!=="children"&&n!=="key"){S(e),d("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",n),S(null);break}}e.ref!==null&&(S(e),d("Invalid attribute `ref` supplied to `React.Fragment`."),S(null))}}function Se(e,r,t,n,i,s){{var o=Ye(e);if(!o){var a="";(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(a+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var p=ir(i);p?a+=p:a+=Re();var u;e===null?u="null":K(e)?u="array":e!==void 0&&e.$$typeof===_?(u="<"+(w(e.type)||"Unknown")+" />",a=" Did you accidentally export a JSX literal instead of a component?"):u=typeof e,d("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",u,a)}var l=or(e,r,t,i,s);if(l==null)return l;if(o){var b=r.children;if(b!==void 0)if(n)if(K(b)){for(var C=0;C<b.length;C++)Te(b[C],e);Object.freeze&&Object.freeze(b)}else d("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else Te(b,e)}return e===y?lr(l):ur(l),l}}function cr(e,r,t){return Se(e,r,t,!0)}function fr(e,r,t){return Se(e,r,t,!1)}var dr=fr,pr=cr;P.Fragment=y,P.jsx=dr,P.jsxs=pr}()),P}(function(c){process.env.NODE_ENV==="production"?c.exports=Oe():c.exports=je()})(B);const ne=B.exports.jsx,N=B.exports.jsxs,Pe=({text:c})=>{const[_,D]=q.default.useState(0);return N("div",{children:[N("div",{className:"text",children:["This is test text: ",c]}),ne("div",{className:"card",children:N("button",{onClick:()=>D(y=>y+1),children:["count is ",_]})}),ne("h1",{className:"text-3xl font-bold underline border-4 border-red-800",children:"TAILWINDS"})]})},br=`*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}:before,:after{--tw-content: ""}html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]{display:none}*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.border{border-width:1px}.border-4{border-width:4px}.border-red-800{--tw-border-opacity: 1;border-color:rgb(153 27 27 / var(--tw-border-opacity))}.text-3xl{font-size:1.875rem;line-height:2.25rem}.font-bold{font-weight:700}.underline{text-decoration-line:underline}
`,De=({text:c})=>N("div",{className:"text",children:["This is invoice text: ",c]});m.Helloworld=Pe,m.Invoice=De,Object.defineProperties(m,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
