(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function t(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerpolicy&&(o.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?o.credentials="include":s.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=t(s);fetch(s.href,o)}})();const H={};function Wt(i){H.context=i}const qt=(i,e)=>i===e,Ge={equals:qt};let vt=_t;const M=1,fe=2,gt={owned:null,cleanups:null,context:null,owner:null};var E=null;let L=null,w=null,j=null,P=null,Ke=0;function Gt(i,e){const t=w,n=E,s=i.length===0,o=s?gt:{owned:null,cleanups:null,context:null,owner:e||n},r=s?i:()=>i(()=>re(()=>Ve(o)));E=o,w=null;try{return le(r,!0)}finally{w=t,E=n}}function Qt(i,e){e=e?Object.assign({},Ge,e):Ge;const t={value:i,observers:null,observerSlots:null,comparator:e.equals||void 0},n=s=>(typeof s=="function"&&(s=s(t.value)),yt(t,s));return[ei.bind(t),n]}function te(i,e,t){const n=mt(i,e,!1,M);me(n)}function Yt(i,e,t){vt=ni;const n=mt(i,e,!1,M);n.user=!0,P?P.push(n):me(n)}function re(i){const e=w;w=null;try{return i()}finally{w=e}}function Zt(i){Yt(()=>re(i))}function Xt(){return E}function ei(){const i=L;if(this.sources&&(this.state||i))if(this.state===M||i)me(this);else{const e=j;j=null,le(()=>ve(this),!1),j=e}if(w){const e=this.observers?this.observers.length:0;w.sources?(w.sources.push(this),w.sourceSlots.push(e)):(w.sources=[this],w.sourceSlots=[e]),this.observers?(this.observers.push(w),this.observerSlots.push(w.sources.length-1)):(this.observers=[w],this.observerSlots=[w.sources.length-1])}return this.value}function yt(i,e,t){let n=i.value;return(!i.comparator||!i.comparator(n,e))&&(i.value=e,i.observers&&i.observers.length&&le(()=>{for(let s=0;s<i.observers.length;s+=1){const o=i.observers[s],r=L&&L.running;r&&L.disposed.has(o),(r&&!o.tState||!r&&!o.state)&&(o.pure?j.push(o):P.push(o),o.observers&&$t(o)),r||(o.state=M)}if(j.length>1e6)throw j=[],new Error},!1)),e}function me(i){if(!i.fn)return;Ve(i);const e=E,t=w,n=Ke;w=E=i,ti(i,i.value,n),w=t,E=e}function ti(i,e,t){let n;try{n=i.fn(e)}catch(s){i.pure&&(i.state=M),bt(s)}(!i.updatedAt||i.updatedAt<=t)&&(i.updatedAt!=null&&"observers"in i?yt(i,n):i.value=n,i.updatedAt=t)}function mt(i,e,t,n=M,s){const o={fn:i,state:n,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:e,owner:E,context:null,pure:t};return E===null||E!==gt&&(E.owned?E.owned.push(o):E.owned=[o]),o}function pe(i){const e=L;if(i.state===0||e)return;if(i.state===fe||e)return ve(i);if(i.suspense&&re(i.suspense.inFallback))return i.suspense.effects.push(i);const t=[i];for(;(i=i.owner)&&(!i.updatedAt||i.updatedAt<Ke);)(i.state||e)&&t.push(i);for(let n=t.length-1;n>=0;n--)if(i=t[n],i.state===M||e)me(i);else if(i.state===fe||e){const s=j;j=null,le(()=>ve(i,t[0]),!1),j=s}}function le(i,e){if(j)return i();let t=!1;e||(j=[]),P?t=!0:P=[],Ke++;try{const n=i();return ii(t),n}catch(n){j||(P=null),bt(n)}}function ii(i){if(j&&(_t(j),j=null),i)return;const e=P;P=null,e.length&&le(()=>vt(e),!1)}function _t(i){for(let e=0;e<i.length;e++)pe(i[e])}function ni(i){let e,t=0;for(e=0;e<i.length;e++){const n=i[e];n.user?i[t++]=n:pe(n)}for(H.context&&Wt(),e=0;e<t;e++)pe(i[e])}function ve(i,e){const t=L;i.state=0;for(let n=0;n<i.sources.length;n+=1){const s=i.sources[n];s.sources&&(s.state===M||t?s!==e&&pe(s):(s.state===fe||t)&&ve(s,e))}}function $t(i){const e=L;for(let t=0;t<i.observers.length;t+=1){const n=i.observers[t];(!n.state||e)&&(n.state=fe,n.pure?j.push(n):P.push(n),n.observers&&$t(n))}}function Ve(i){let e;if(i.sources)for(;i.sources.length;){const t=i.sources.pop(),n=i.sourceSlots.pop(),s=t.observers;if(s&&s.length){const o=s.pop(),r=t.observerSlots.pop();n<s.length&&(o.sourceSlots[r]=n,s[n]=o,t.observerSlots[n]=r)}}if(i.owned){for(e=0;e<i.owned.length;e++)Ve(i.owned[e]);i.owned=null}if(i.cleanups){for(e=0;e<i.cleanups.length;e++)i.cleanups[e]();i.cleanups=null}i.state=0,i.context=null}function si(i){return i instanceof Error||typeof i=="string"?i:new Error("Unknown error")}function bt(i){throw i=si(i),i}function wt(i,e){return re(()=>i(e||{}))}function oi(i,e,t){let n=t.length,s=e.length,o=n,r=0,l=0,c=e[s-1].nextSibling,a=null;for(;r<s||l<o;){if(e[r]===t[l]){r++,l++;continue}for(;e[s-1]===t[o-1];)s--,o--;if(s===r){const u=o<n?l?t[l-1].nextSibling:t[o-l]:c;for(;l<o;)i.insertBefore(t[l++],u)}else if(o===l)for(;r<s;)(!a||!a.has(e[r]))&&e[r].remove(),r++;else if(e[r]===t[o-1]&&t[l]===e[s-1]){const u=e[--s].nextSibling;i.insertBefore(t[l++],e[r++].nextSibling),i.insertBefore(t[--o],u),e[s]=t[o]}else{if(!a){a=new Map;let h=l;for(;h<o;)a.set(t[h],h++)}const u=a.get(e[r]);if(u!=null)if(l<u&&u<o){let h=r,d=1,f;for(;++h<s&&h<o&&!((f=a.get(e[h]))==null||f!==u+d);)d++;if(d>u-l){const p=e[r];for(;l<u;)i.insertBefore(t[l++],p)}else i.replaceChild(t[l++],e[r++])}else r++;else e[r++].remove()}}}const Qe="_$DX_DELEGATE";function ri(i,e,t,n={}){let s;return Gt(o=>{s=o,e===document?i():kt(e,i(),e.firstChild?null:void 0,t)},n.owner),()=>{s(),e.textContent=""}}function At(i,e,t){const n=document.createElement("template");n.innerHTML=i;let s=n.content.firstChild;return t&&(s=s.firstChild),s}function li(i,e=window.document){const t=e[Qe]||(e[Qe]=new Set);for(let n=0,s=i.length;n<s;n++){const o=i[n];t.has(o)||(t.add(o),e.addEventListener(o,ci))}}function ai(i,e,t){t==null?i.removeAttribute(e):i.setAttribute(e,t)}function X(i,e){e==null?i.removeAttribute("class"):i.className=e}function kt(i,e,t,n){if(t!==void 0&&!n&&(n=[]),typeof e!="function")return ge(i,e,n,t);te(s=>ge(i,e(),s,t),n)}function ci(i){const e=`$$${i.type}`;let t=i.composedPath&&i.composedPath()[0]||i.target;for(i.target!==t&&Object.defineProperty(i,"target",{configurable:!0,value:t}),Object.defineProperty(i,"currentTarget",{configurable:!0,get(){return t||document}}),H.registry&&!H.done&&(H.done=!0,document.querySelectorAll("[id^=pl-]").forEach(n=>n.remove()));t!==null;){const n=t[e];if(n&&!t.disabled){const s=t[`${e}Data`];if(s!==void 0?n.call(t,s,i):n.call(t,i),i.cancelBubble)return}t=t.host&&t.host!==t&&t.host instanceof Node?t.host:t.parentNode}}function ge(i,e,t,n,s){for(H.context&&!t&&(t=[...i.childNodes]);typeof t=="function";)t=t();if(e===t)return t;const o=typeof e,r=n!==void 0;if(i=r&&t[0]&&t[0].parentNode||i,o==="string"||o==="number"){if(H.context)return t;if(o==="number"&&(e=e.toString()),r){let l=t[0];l&&l.nodeType===3?l.data=e:l=document.createTextNode(e),t=K(i,t,n,l)}else t!==""&&typeof t=="string"?t=i.firstChild.data=e:t=i.textContent=e}else if(e==null||o==="boolean"){if(H.context)return t;t=K(i,t,n)}else{if(o==="function")return te(()=>{let l=e();for(;typeof l=="function";)l=l();t=ge(i,l,t,n)}),()=>t;if(Array.isArray(e)){const l=[],c=t&&Array.isArray(t);if(Be(l,e,t,s))return te(()=>t=ge(i,l,t,n,!0)),()=>t;if(H.context){if(!l.length)return t;for(let a=0;a<l.length;a++)if(l[a].parentNode)return t=l}if(l.length===0){if(t=K(i,t,n),r)return t}else c?t.length===0?Ye(i,l,n):oi(i,t,l):(t&&K(i),Ye(i,l));t=l}else if(e instanceof Node){if(H.context&&e.parentNode)return t=r?[e]:e;if(Array.isArray(t)){if(r)return t=K(i,t,n,e);K(i,t,null,e)}else t==null||t===""||!i.firstChild?i.appendChild(e):i.replaceChild(e,i.firstChild);t=e}}return t}function Be(i,e,t,n){let s=!1;for(let o=0,r=e.length;o<r;o++){let l=e[o],c=t&&t[o];if(l instanceof Node)i.push(l);else if(!(l==null||l===!0||l===!1))if(Array.isArray(l))s=Be(i,l,c)||s;else if(typeof l=="function")if(n){for(;typeof l=="function";)l=l();s=Be(i,Array.isArray(l)?l:[l],Array.isArray(c)?c:[c])||s}else i.push(l),s=!0;else{const a=String(l);c&&c.nodeType===3&&c.data===a?i.push(c):i.push(document.createTextNode(a))}}return s}function Ye(i,e,t=null){for(let n=0,s=e.length;n<s;n++)i.insertBefore(e[n],t)}function K(i,e,t,n){if(t===void 0)return i.textContent="";const s=n||document.createTextNode("");if(e.length){let o=!1;for(let r=e.length-1;r>=0;r--){const l=e[r];if(s!==l){const c=l.parentNode===i;!o&&!r?c?i.replaceChild(s,l):i.insertBefore(s,t):c&&l.remove()}else o=!0}}else i.insertBefore(s,t);return[s]}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Fe=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Je=Symbol(),Ze=new Map;class xt{constructor(e,t){if(this._$cssResult$=!0,t!==Je)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){let e=Ze.get(this.cssText);return Fe&&e===void 0&&(Ze.set(this.cssText,e=new CSSStyleSheet),e.replaceSync(this.cssText)),e}toString(){return this.cssText}}const di=i=>new xt(typeof i=="string"?i:i+"",Je),_e=(i,...e)=>{const t=i.length===1?i[0]:e.reduce((n,s,o)=>n+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+i[o+1],i[0]);return new xt(t,Je)},hi=(i,e)=>{Fe?i.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{const n=document.createElement("style"),s=window.litNonce;s!==void 0&&n.setAttribute("nonce",s),n.textContent=t.cssText,i.appendChild(n)})},Xe=Fe?i=>i:i=>i instanceof CSSStyleSheet?(e=>{let t="";for(const n of e.cssRules)t+=n.cssText;return di(t)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ke;const et=window.trustedTypes,ui=et?et.emptyScript:"",tt=window.reactiveElementPolyfillSupport,Le={toAttribute(i,e){switch(e){case Boolean:i=i?ui:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,e){let t=i;switch(e){case Boolean:t=i!==null;break;case Number:t=i===null?null:Number(i);break;case Object:case Array:try{t=JSON.parse(i)}catch{t=null}}return t}},jt=(i,e)=>e!==i&&(e==e||i==i),xe={attribute:!0,type:String,converter:Le,reflect:!1,hasChanged:jt};class V extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(e){var t;(t=this.l)!==null&&t!==void 0||(this.l=[]),this.l.push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,n)=>{const s=this._$Eh(n,t);s!==void 0&&(this._$Eu.set(s,n),e.push(s))}),e}static createProperty(e,t=xe){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const n=typeof e=="symbol"?Symbol():"__"+e,s=this.getPropertyDescriptor(e,n,t);s!==void 0&&Object.defineProperty(this.prototype,e,s)}}static getPropertyDescriptor(e,t,n){return{get(){return this[t]},set(s){const o=this[e];this[t]=s,this.requestUpdate(e,o,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||xe}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),this.elementProperties=new Map(e.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,n=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of n)this.createProperty(s,t[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const s of n)t.unshift(Xe(s))}else e!==void 0&&t.push(Xe(e));return t}static _$Eh(e,t){const n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}o(){var e;this._$Ep=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Em(),this.requestUpdate(),(e=this.constructor.l)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,n;((t=this._$Eg)!==null&&t!==void 0?t:this._$Eg=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((n=e.hostConnected)===null||n===void 0||n.call(e))}removeController(e){var t;(t=this._$Eg)===null||t===void 0||t.splice(this._$Eg.indexOf(e)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Et.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return hi(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$Eg)===null||e===void 0||e.forEach(t=>{var n;return(n=t.hostConnected)===null||n===void 0?void 0:n.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$Eg)===null||e===void 0||e.forEach(t=>{var n;return(n=t.hostDisconnected)===null||n===void 0?void 0:n.call(t)})}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ES(e,t,n=xe){var s,o;const r=this.constructor._$Eh(e,n);if(r!==void 0&&n.reflect===!0){const l=((o=(s=n.converter)===null||s===void 0?void 0:s.toAttribute)!==null&&o!==void 0?o:Le.toAttribute)(t,n.type);this._$Ei=e,l==null?this.removeAttribute(r):this.setAttribute(r,l),this._$Ei=null}}_$AK(e,t){var n,s,o;const r=this.constructor,l=r._$Eu.get(e);if(l!==void 0&&this._$Ei!==l){const c=r.getPropertyOptions(l),a=c.converter,u=(o=(s=(n=a)===null||n===void 0?void 0:n.fromAttribute)!==null&&s!==void 0?s:typeof a=="function"?a:null)!==null&&o!==void 0?o:Le.fromAttribute;this._$Ei=l,this[l]=u(t,c.type),this._$Ei=null}}requestUpdate(e,t,n){let s=!0;e!==void 0&&(((n=n||this.constructor.getPropertyOptions(e)).hasChanged||jt)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),n.reflect===!0&&this._$Ei!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,n))):s=!1),!this.isUpdatePending&&s&&(this._$Ep=this._$E_())}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach((s,o)=>this[o]=s),this._$Et=void 0);let t=!1;const n=this._$AL;try{t=this.shouldUpdate(n),t?(this.willUpdate(n),(e=this._$Eg)===null||e===void 0||e.forEach(s=>{var o;return(o=s.hostUpdate)===null||o===void 0?void 0:o.call(s)}),this.update(n)):this._$EU()}catch(s){throw t=!1,this._$EU(),s}t&&this._$AE(n)}willUpdate(e){}_$AE(e){var t;(t=this._$Eg)===null||t===void 0||t.forEach(n=>{var s;return(s=n.hostUpdated)===null||s===void 0?void 0:s.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,n)=>this._$ES(n,this[n],t)),this._$EC=void 0),this._$EU()}updated(e){}firstUpdated(e){}}V.finalized=!0,V.elementProperties=new Map,V.elementStyles=[],V.shadowRootOptions={mode:"open"},tt?.({ReactiveElement:V}),((ke=globalThis.reactiveElementVersions)!==null&&ke!==void 0?ke:globalThis.reactiveElementVersions=[]).push("1.3.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var je;const J=globalThis.trustedTypes,it=J?J.createPolicy("lit-html",{createHTML:i=>i}):void 0,O=`lit$${(Math.random()+"").slice(9)}$`,We="?"+O,fi=`<${We}>`,W=document,ie=(i="")=>W.createComment(i),ne=i=>i===null||typeof i!="object"&&typeof i!="function",Et=Array.isArray,St=i=>{var e;return Et(i)||typeof((e=i)===null||e===void 0?void 0:e[Symbol.iterator])=="function"},Q=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,nt=/-->/g,st=/>/g,R=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,ot=/'/g,rt=/"/g,Ct=/^(?:script|style|textarea|title)$/i,pi=i=>(e,...t)=>({_$litType$:i,strings:e,values:t}),x=pi(1),S=Symbol.for("lit-noChange"),y=Symbol.for("lit-nothing"),lt=new WeakMap,vi=(i,e,t)=>{var n,s;const o=(n=t?.renderBefore)!==null&&n!==void 0?n:e;let r=o._$litPart$;if(r===void 0){const l=(s=t?.renderBefore)!==null&&s!==void 0?s:null;o._$litPart$=r=new G(e.insertBefore(ie(),l),l,void 0,t??{})}return r._$AI(i),r},F=W.createTreeWalker(W,129,null,!1),Ht=(i,e)=>{const t=i.length-1,n=[];let s,o=e===2?"<svg>":"",r=Q;for(let c=0;c<t;c++){const a=i[c];let u,h,d=-1,f=0;for(;f<a.length&&(r.lastIndex=f,h=r.exec(a),h!==null);)f=r.lastIndex,r===Q?h[1]==="!--"?r=nt:h[1]!==void 0?r=st:h[2]!==void 0?(Ct.test(h[2])&&(s=RegExp("</"+h[2],"g")),r=R):h[3]!==void 0&&(r=R):r===R?h[0]===">"?(r=s??Q,d=-1):h[1]===void 0?d=-2:(d=r.lastIndex-h[2].length,u=h[1],r=h[3]===void 0?R:h[3]==='"'?rt:ot):r===rt||r===ot?r=R:r===nt||r===st?r=Q:(r=R,s=void 0);const p=r===R&&i[c+1].startsWith("/>")?" ":"";o+=r===Q?a+fi:d>=0?(n.push(u),a.slice(0,d)+"$lit$"+a.slice(d)+O+p):a+O+(d===-2?(n.push(void 0),c):p)}const l=o+(i[t]||"<?>")+(e===2?"</svg>":"");if(!Array.isArray(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return[it!==void 0?it.createHTML(l):l,n]};class se{constructor({strings:e,_$litType$:t},n){let s;this.parts=[];let o=0,r=0;const l=e.length-1,c=this.parts,[a,u]=Ht(e,t);if(this.el=se.createElement(a,n),F.currentNode=this.el.content,t===2){const h=this.el.content,d=h.firstChild;d.remove(),h.append(...d.childNodes)}for(;(s=F.nextNode())!==null&&c.length<l;){if(s.nodeType===1){if(s.hasAttributes()){const h=[];for(const d of s.getAttributeNames())if(d.endsWith("$lit$")||d.startsWith(O)){const f=u[r++];if(h.push(d),f!==void 0){const p=s.getAttribute(f.toLowerCase()+"$lit$").split(O),g=/([.?@])?(.*)/.exec(f);c.push({type:1,index:o,name:g[2],strings:p,ctor:g[1]==="."?Ot:g[1]==="?"?Pt:g[1]==="@"?Ut:ae})}else c.push({type:6,index:o})}for(const d of h)s.removeAttribute(d)}if(Ct.test(s.tagName)){const h=s.textContent.split(O),d=h.length-1;if(d>0){s.textContent=J?J.emptyScript:"";for(let f=0;f<d;f++)s.append(h[f],ie()),F.nextNode(),c.push({type:2,index:++o});s.append(h[d],ie())}}}else if(s.nodeType===8)if(s.data===We)c.push({type:2,index:o});else{let h=-1;for(;(h=s.data.indexOf(O,h+1))!==-1;)c.push({type:7,index:o}),h+=O.length-1}o++}}static createElement(e,t){const n=W.createElement("template");return n.innerHTML=e,n}}function I(i,e,t=i,n){var s,o,r,l;if(e===S)return e;let c=n!==void 0?(s=t._$Cl)===null||s===void 0?void 0:s[n]:t._$Cu;const a=ne(e)?void 0:e._$litDirective$;return c?.constructor!==a&&((o=c?._$AO)===null||o===void 0||o.call(c,!1),a===void 0?c=void 0:(c=new a(i),c._$AT(i,t,n)),n!==void 0?((r=(l=t)._$Cl)!==null&&r!==void 0?r:l._$Cl=[])[n]=c:t._$Cu=c),c!==void 0&&(e=I(i,c._$AS(i,e.values),c,n)),e}class Tt{constructor(e,t){this.v=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(e){var t;const{el:{content:n},parts:s}=this._$AD,o=((t=e?.creationScope)!==null&&t!==void 0?t:W).importNode(n,!0);F.currentNode=o;let r=F.nextNode(),l=0,c=0,a=s[0];for(;a!==void 0;){if(l===a.index){let u;a.type===2?u=new G(r,r.nextSibling,this,e):a.type===1?u=new a.ctor(r,a.name,a.strings,this,e):a.type===6&&(u=new Mt(r,this,e)),this.v.push(u),a=s[++c]}l!==a?.index&&(r=F.nextNode(),l++)}return o}m(e){let t=0;for(const n of this.v)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}}class G{constructor(e,t,n,s){var o;this.type=2,this._$AH=y,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=s,this._$Cg=(o=s?.isConnected)===null||o===void 0||o}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cg}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=I(this,e,t),ne(e)?e===y||e==null||e===""?(this._$AH!==y&&this._$AR(),this._$AH=y):e!==this._$AH&&e!==S&&this.$(e):e._$litType$!==void 0?this.T(e):e.nodeType!==void 0?this.k(e):St(e)?this.S(e):this.$(e)}A(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}k(e){this._$AH!==e&&(this._$AR(),this._$AH=this.A(e))}$(e){this._$AH!==y&&ne(this._$AH)?this._$AA.nextSibling.data=e:this.k(W.createTextNode(e)),this._$AH=e}T(e){var t;const{values:n,_$litType$:s}=e,o=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=se.createElement(s.h,this.options)),s);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===o)this._$AH.m(n);else{const r=new Tt(o,this),l=r.p(this.options);r.m(n),this.k(l),this._$AH=r}}_$AC(e){let t=lt.get(e.strings);return t===void 0&&lt.set(e.strings,t=new se(e)),t}S(e){Et(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let n,s=0;for(const o of e)s===t.length?t.push(n=new G(this.A(ie()),this.A(ie()),this,this.options)):n=t[s],n._$AI(o),s++;s<t.length&&(this._$AR(n&&n._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var n;for((n=this._$AP)===null||n===void 0||n.call(this,!1,!0,t);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var t;this._$AM===void 0&&(this._$Cg=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}}class ae{constructor(e,t,n,s,o){this.type=1,this._$AH=y,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=o,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=y}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,n,s){const o=this.strings;let r=!1;if(o===void 0)e=I(this,e,t,0),r=!ne(e)||e!==this._$AH&&e!==S,r&&(this._$AH=e);else{const l=e;let c,a;for(e=o[0],c=0;c<o.length-1;c++)a=I(this,l[n+c],t,c),a===S&&(a=this._$AH[c]),r||(r=!ne(a)||a!==this._$AH[c]),a===y?e=y:e!==y&&(e+=(a??"")+o[c+1]),this._$AH[c]=a}r&&!s&&this.C(e)}C(e){e===y?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Ot extends ae{constructor(){super(...arguments),this.type=3}C(e){this.element[this.name]=e===y?void 0:e}}const gi=J?J.emptyScript:"";class Pt extends ae{constructor(){super(...arguments),this.type=4}C(e){e&&e!==y?this.element.setAttribute(this.name,gi):this.element.removeAttribute(this.name)}}class Ut extends ae{constructor(e,t,n,s,o){super(e,t,n,s,o),this.type=5}_$AI(e,t=this){var n;if((e=(n=I(this,e,t,0))!==null&&n!==void 0?n:y)===S)return;const s=this._$AH,o=e===y&&s!==y||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,r=e!==y&&(s===y||o);o&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,n;typeof this._$AH=="function"?this._$AH.call((n=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&n!==void 0?n:this.element,e):this._$AH.handleEvent(e)}}class Mt{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){I(this,e)}}const yi={P:"$lit$",L:O,V:We,I:1,N:Ht,R:Tt,D:St,j:I,H:G,O:ae,F:Pt,B:Ut,W:Ot,Z:Mt},at=window.litHtmlPolyfillSupport;at?.(se,G),((je=globalThis.litHtmlVersions)!==null&&je!==void 0?je:globalThis.litHtmlVersions=[]).push("2.2.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ee,Se;class U extends V{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var e,t;const n=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=n.firstChild),n}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Dt=vi(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!1)}render(){return S}}U.finalized=!0,U._$litElement$=!0,(Ee=globalThis.litElementHydrateSupport)===null||Ee===void 0||Ee.call(globalThis,{LitElement:U});const ct=globalThis.litElementPolyfillSupport;ct?.({LitElement:U});((Se=globalThis.litElementVersions)!==null&&Se!==void 0?Se:globalThis.litElementVersions=[]).push("3.2.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $e=i=>e=>typeof e=="function"?((t,n)=>(window.customElements.define(t,n),n))(i,e):((t,n)=>{const{kind:s,elements:o}=n;return{kind:s,elements:o,finisher(r){window.customElements.define(t,r)}}})(i,e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const mi=(i,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(t){t.createProperty(e.key,i)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,i)}};function b(i){return(e,t)=>t!==void 0?((n,s,o)=>{s.constructor.createProperty(o,n)})(i,e,t):mi(i,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function N(i){return b({...i,state:!0})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ce;((Ce=window.HTMLSlotElement)===null||Ce===void 0?void 0:Ce.prototype.assignedElements)!=null;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const C={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},ce=i=>(...e)=>({_$litDirective$:i,values:e});class de{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{H:_i}=yi,Nt=i=>i.strings===void 0,dt=()=>document.createComment(""),Y=(i,e,t)=>{var n;const s=i._$AA.parentNode,o=e===void 0?i._$AB:e._$AA;if(t===void 0){const r=s.insertBefore(dt(),o),l=s.insertBefore(dt(),o);t=new _i(r,l,i,i.options)}else{const r=t._$AB.nextSibling,l=t._$AM,c=l!==i;if(c){let a;(n=t._$AQ)===null||n===void 0||n.call(t,i),t._$AM=i,t._$AP!==void 0&&(a=i._$AU)!==l._$AU&&t._$AP(a)}if(r!==o||c){let a=t._$AA;for(;a!==r;){const u=a.nextSibling;s.insertBefore(a,o),a=u}}}return t},B=(i,e,t=i)=>(i._$AI(e,t),i),$i={},Rt=(i,e=$i)=>i._$AH=e,bi=i=>i._$AH,He=i=>{var e;(e=i._$AP)===null||e===void 0||e.call(i,!1,!0);let t=i._$AA;const n=i._$AB.nextSibling;for(;t!==n;){const s=t.nextSibling;t.remove(),t=s}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ht=(i,e,t)=>{const n=new Map;for(let s=e;s<=t;s++)n.set(i[s],s);return n},wi=ce(class extends de{constructor(i){if(super(i),i.type!==C.CHILD)throw Error("repeat() can only be used in text expressions")}dt(i,e,t){let n;t===void 0?t=e:e!==void 0&&(n=e);const s=[],o=[];let r=0;for(const l of i)s[r]=n?n(l,r):r,o[r]=t(l,r),r++;return{values:o,keys:s}}render(i,e,t){return this.dt(i,e,t).values}update(i,[e,t,n]){var s;const o=bi(i),{values:r,keys:l}=this.dt(e,t,n);if(!Array.isArray(o))return this.ut=l,r;const c=(s=this.ut)!==null&&s!==void 0?s:this.ut=[],a=[];let u,h,d=0,f=o.length-1,p=0,g=r.length-1;for(;d<=f&&p<=g;)if(o[d]===null)d++;else if(o[f]===null)f--;else if(c[d]===l[p])a[p]=B(o[d],r[p]),d++,p++;else if(c[f]===l[g])a[g]=B(o[f],r[g]),f--,g--;else if(c[d]===l[g])a[g]=B(o[d],r[g]),Y(i,a[g+1],o[d]),d++,g--;else if(c[f]===l[p])a[p]=B(o[f],r[p]),Y(i,o[d],o[f]),f--,p++;else if(u===void 0&&(u=ht(l,p,g),h=ht(c,d,f)),u.has(c[d]))if(u.has(c[f])){const T=h.get(l[p]),Ae=T!==void 0?o[T]:null;if(Ae===null){const qe=Y(i,o[d]);B(qe,r[p]),a[p]=qe}else a[p]=B(Ae,r[p]),Y(i,o[d],Ae),o[T]=null;p++}else He(o[f]),f--;else He(o[d]),d++;for(;p<=g;){const T=Y(i,a[g+1]);B(T,r[p]),a[p++]=T}for(;d<=f;){const T=o[d++];T!==null&&He(T)}return this.ut=l,Rt(i,a),S}});/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ai=ce(class extends de{constructor(i){if(super(i),i.type!==C.PROPERTY&&i.type!==C.ATTRIBUTE&&i.type!==C.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!Nt(i))throw Error("`live` bindings can only contain a single expression")}render(i){return i}update(i,[e]){if(e===S||e===y)return e;const t=i.element,n=i.name;if(i.type===C.PROPERTY){if(e===t[n])return S}else if(i.type===C.BOOLEAN_ATTRIBUTE){if(!!e===t.hasAttribute(n))return S}else if(i.type===C.ATTRIBUTE&&t.getAttribute(n)===e+"")return S;return Rt(i),e}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ee=(i,e)=>{var t,n;const s=i._$AN;if(s===void 0)return!1;for(const o of s)(n=(t=o)._$AO)===null||n===void 0||n.call(t,e,!1),ee(o,e);return!0},ye=i=>{let e,t;do{if((e=i._$AM)===void 0)break;t=e._$AN,t.delete(i),i=e}while(t?.size===0)},Bt=i=>{for(let e;e=i._$AM;i=e){let t=e._$AN;if(t===void 0)e._$AN=t=new Set;else if(t.has(i))break;t.add(i),ji(e)}};function ki(i){this._$AN!==void 0?(ye(this),this._$AM=i,Bt(this)):this._$AM=i}function xi(i,e=!1,t=0){const n=this._$AH,s=this._$AN;if(s!==void 0&&s.size!==0)if(e)if(Array.isArray(n))for(let o=t;o<n.length;o++)ee(n[o],!1),ye(n[o]);else n!=null&&(ee(n,!1),ye(n));else ee(this,i)}const ji=i=>{var e,t,n,s;i.type==C.CHILD&&((e=(n=i)._$AP)!==null&&e!==void 0||(n._$AP=xi),(t=(s=i)._$AQ)!==null&&t!==void 0||(s._$AQ=ki))};class Ei extends de{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,n){super._$AT(e,t,n),Bt(this),this.isConnected=e._$AU}_$AO(e,t=!0){var n,s;e!==this.isConnected&&(this.isConnected=e,e?(n=this.reconnected)===null||n===void 0||n.call(this):(s=this.disconnected)===null||s===void 0||s.call(this)),t&&(ee(this,e),ye(this))}setValue(e){if(Nt(this._$Ct))this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Lt=()=>new Si;class Si{}const Te=new WeakMap,It=ce(class extends Ei{render(i){return y}update(i,[e]){var t;const n=e!==this.U;return n&&this.U!==void 0&&this.ot(void 0),(n||this.rt!==this.lt)&&(this.U=e,this.ht=(t=i.options)===null||t===void 0?void 0:t.host,this.ot(this.lt=i.element)),y}ot(i){typeof this.U=="function"?(Te.get(this.U)!==void 0&&this.U.call(this.ht,void 0),Te.set(this.U,i),i!==void 0&&this.U.call(this.ht,i)):this.U.value=i}get rt(){var i;return typeof this.U=="function"?Te.get(this.U):(i=this.U)===null||i===void 0?void 0:i.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ie=ce(class extends de{constructor(i){var e;if(super(i),i.type!==C.ATTRIBUTE||i.name!=="class"||((e=i.strings)===null||e===void 0?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(i){return" "+Object.keys(i).filter(e=>i[e]).join(" ")+" "}update(i,[e]){var t,n;if(this.et===void 0){this.et=new Set,i.strings!==void 0&&(this.st=new Set(i.strings.join(" ").split(/\s/).filter(o=>o!=="")));for(const o in e)e[o]&&!(!((t=this.st)===null||t===void 0)&&t.has(o))&&this.et.add(o);return this.render(e)}const s=i.element.classList;this.et.forEach(o=>{o in e||(s.remove(o),this.et.delete(o))});for(const o in e){const r=!!e[o];r===this.et.has(o)||((n=this.st)===null||n===void 0?void 0:n.has(o))||(r?(s.add(o),this.et.add(o)):(s.remove(o),this.et.delete(o)))}return S}});/*!
 * hotkeys-js v3.8.7
 * A simple micro-library for defining and dispatching keyboard shortcuts. It has no dependencies.
 * 
 * Copyright (c) 2021 kenny wong <wowohoo@qq.com>
 * http://jaywcjlove.github.io/hotkeys
 * 
 * Licensed under the MIT license.
 */var Oe=typeof navigator<"u"?navigator.userAgent.toLowerCase().indexOf("firefox")>0:!1;function Pe(i,e,t){i.addEventListener?i.addEventListener(e,t,!1):i.attachEvent&&i.attachEvent("on".concat(e),function(){t(window.event)})}function Dt(i,e){for(var t=e.slice(0,e.length-1),n=0;n<t.length;n++)t[n]=i[t[n].toLowerCase()];return t}function zt(i){typeof i!="string"&&(i=""),i=i.replace(/\s/g,"");for(var e=i.split(","),t=e.lastIndexOf("");t>=0;)e[t-1]+=",",e.splice(t,1),t=e.lastIndexOf("");return e}function Ci(i,e){for(var t=i.length>=e.length?i:e,n=i.length>=e.length?e:i,s=!0,o=0;o<t.length;o++)n.indexOf(t[o])===-1&&(s=!1);return s}var Kt={backspace:8,tab:9,clear:12,enter:13,return:13,esc:27,escape:27,space:32,left:37,up:38,right:39,down:40,del:46,delete:46,ins:45,insert:45,home:36,end:35,pageup:33,pagedown:34,capslock:20,num_0:96,num_1:97,num_2:98,num_3:99,num_4:100,num_5:101,num_6:102,num_7:103,num_8:104,num_9:105,num_multiply:106,num_add:107,num_enter:108,num_subtract:109,num_decimal:110,num_divide:111,"\u21EA":20,",":188,".":190,"/":191,"`":192,"-":Oe?173:189,"=":Oe?61:187,";":Oe?59:186,"'":222,"[":219,"]":221,"\\":220},D={"\u21E7":16,shift:16,"\u2325":18,alt:18,option:18,"\u2303":17,ctrl:17,control:17,"\u2318":91,cmd:91,command:91},ut={16:"shiftKey",18:"altKey",17:"ctrlKey",91:"metaKey",shiftKey:16,ctrlKey:17,altKey:18,metaKey:91},k={16:!1,18:!1,17:!1,91:!1},A={};for(var ue=1;ue<20;ue++)Kt["f".concat(ue)]=111+ue;var v=[],Vt="all",Ft=[],be=function(e){return Kt[e.toLowerCase()]||D[e.toLowerCase()]||e.toUpperCase().charCodeAt(0)};function Jt(i){Vt=i||"all"}function oe(){return Vt||"all"}function Hi(){return v.slice(0)}function Ti(i){var e=i.target||i.srcElement,t=e.tagName,n=!0;return(e.isContentEditable||(t==="INPUT"||t==="TEXTAREA"||t==="SELECT")&&!e.readOnly)&&(n=!1),n}function Oi(i){return typeof i=="string"&&(i=be(i)),v.indexOf(i)!==-1}function Pi(i,e){var t,n;i||(i=oe());for(var s in A)if(Object.prototype.hasOwnProperty.call(A,s))for(t=A[s],n=0;n<t.length;)t[n].scope===i?t.splice(n,1):n++;oe()===i&&Jt(e||"all")}function Ui(i){var e=i.keyCode||i.which||i.charCode,t=v.indexOf(e);if(t>=0&&v.splice(t,1),i.key&&i.key.toLowerCase()==="meta"&&v.splice(0,v.length),(e===93||e===224)&&(e=91),e in k){k[e]=!1;for(var n in D)D[n]===e&&(_[n]=!1)}}function Mi(i){if(!i)Object.keys(A).forEach(function(r){return delete A[r]});else if(Array.isArray(i))i.forEach(function(r){r.key&&Ue(r)});else if(typeof i=="object")i.key&&Ue(i);else if(typeof i=="string"){for(var e=arguments.length,t=new Array(e>1?e-1:0),n=1;n<e;n++)t[n-1]=arguments[n];var s=t[0],o=t[1];typeof s=="function"&&(o=s,s=""),Ue({key:i,scope:s,method:o,splitKey:"+"})}}var Ue=function(e){var t=e.key,n=e.scope,s=e.method,o=e.splitKey,r=o===void 0?"+":o,l=zt(t);l.forEach(function(c){var a=c.split(r),u=a.length,h=a[u-1],d=h==="*"?"*":be(h);if(!!A[d]){n||(n=oe());var f=u>1?Dt(D,a):[];A[d]=A[d].map(function(p){var g=s?p.method===s:!0;return g&&p.scope===n&&Ci(p.mods,f)?{}:p})}})};function ft(i,e,t){var n;if(e.scope===t||e.scope==="all"){n=e.mods.length>0;for(var s in k)Object.prototype.hasOwnProperty.call(k,s)&&(!k[s]&&e.mods.indexOf(+s)>-1||k[s]&&e.mods.indexOf(+s)===-1)&&(n=!1);(e.mods.length===0&&!k[16]&&!k[18]&&!k[17]&&!k[91]||n||e.shortcut==="*")&&e.method(i,e)===!1&&(i.preventDefault?i.preventDefault():i.returnValue=!1,i.stopPropagation&&i.stopPropagation(),i.cancelBubble&&(i.cancelBubble=!0))}}function pt(i){var e=A["*"],t=i.keyCode||i.which||i.charCode;if(!!_.filter.call(this,i)){if((t===93||t===224)&&(t=91),v.indexOf(t)===-1&&t!==229&&v.push(t),["ctrlKey","altKey","shiftKey","metaKey"].forEach(function(f){var p=ut[f];i[f]&&v.indexOf(p)===-1?v.push(p):!i[f]&&v.indexOf(p)>-1?v.splice(v.indexOf(p),1):f==="metaKey"&&i[f]&&v.length===3&&(i.ctrlKey||i.shiftKey||i.altKey||(v=v.slice(v.indexOf(p))))}),t in k){k[t]=!0;for(var n in D)D[n]===t&&(_[n]=!0);if(!e)return}for(var s in k)Object.prototype.hasOwnProperty.call(k,s)&&(k[s]=i[ut[s]]);i.getModifierState&&!(i.altKey&&!i.ctrlKey)&&i.getModifierState("AltGraph")&&(v.indexOf(17)===-1&&v.push(17),v.indexOf(18)===-1&&v.push(18),k[17]=!0,k[18]=!0);var o=oe();if(e)for(var r=0;r<e.length;r++)e[r].scope===o&&(i.type==="keydown"&&e[r].keydown||i.type==="keyup"&&e[r].keyup)&&ft(i,e[r],o);if(t in A){for(var l=0;l<A[t].length;l++)if((i.type==="keydown"&&A[t][l].keydown||i.type==="keyup"&&A[t][l].keyup)&&A[t][l].key){for(var c=A[t][l],a=c.splitKey,u=c.key.split(a),h=[],d=0;d<u.length;d++)h.push(be(u[d]));h.sort().join("")===v.sort().join("")&&ft(i,c,o)}}}}function Ni(i){return Ft.indexOf(i)>-1}function _(i,e,t){v=[];var n=zt(i),s=[],o="all",r=document,l=0,c=!1,a=!0,u="+";for(t===void 0&&typeof e=="function"&&(t=e),Object.prototype.toString.call(e)==="[object Object]"&&(e.scope&&(o=e.scope),e.element&&(r=e.element),e.keyup&&(c=e.keyup),e.keydown!==void 0&&(a=e.keydown),typeof e.splitKey=="string"&&(u=e.splitKey)),typeof e=="string"&&(o=e);l<n.length;l++)i=n[l].split(u),s=[],i.length>1&&(s=Dt(D,i)),i=i[i.length-1],i=i==="*"?"*":be(i),i in A||(A[i]=[]),A[i].push({keyup:c,keydown:a,scope:o,mods:s,shortcut:n[l],method:t,key:n[l],splitKey:u});typeof r<"u"&&!Ni(r)&&window&&(Ft.push(r),Pe(r,"keydown",function(h){pt(h)}),Pe(window,"focus",function(){v=[]}),Pe(r,"keyup",function(h){pt(h),Ui(h)}))}var Me={setScope:Jt,getScope:oe,deleteScope:Pi,getPressedKeyCodes:Hi,isPressed:Oi,filter:Ti,unbind:Mi};for(var Ne in Me)Object.prototype.hasOwnProperty.call(Me,Ne)&&(_[Ne]=Me[Ne]);if(typeof window<"u"){var Ri=window.hotkeys;_.noConflict=function(i){return i&&window.hotkeys===_&&(window.hotkeys=Ri),_},window.hotkeys=_}var he=globalThis&&globalThis.__decorate||function(i,e,t,n){var s=arguments.length,o=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var l=i.length-1;l>=0;l--)(r=i[l])&&(o=(s<3?r(o):s>3?r(e,t,o):r(e,t))||o);return s>3&&o&&Object.defineProperty(e,t,o),o};let z=class extends U{constructor(){super(...arguments),this.placeholder="",this.hideBreadcrumbs=!1,this.breadcrumbHome="Home",this.breadcrumbs=[],this._inputRef=Lt()}render(){let e="";if(!this.hideBreadcrumbs){const t=[];for(const n of this.breadcrumbs)t.push(x`<button
            tabindex="-1"
            @click=${()=>this.selectParent(n)}
            class="breadcrumb"
          >
            ${n}
          </button>`);e=x`<div class="breadcrumb-list">
        <button
          tabindex="-1"
          @click=${()=>this.selectParent()}
          class="breadcrumb"
        >
          ${this.breadcrumbHome}
        </button>
        ${t}
      </div>`}return x`
      ${e}
      <div part="ninja-input-wrapper" class="search-wrapper">
        <input
          part="ninja-input"
          type="text"
          id="search"
          spellcheck="false"
          autocomplete="off"
          @input="${this._handleInput}"
          ${It(this._inputRef)}
          placeholder="${this.placeholder}"
          class="search"
        />
      </div>
    `}setSearch(e){this._inputRef.value&&(this._inputRef.value.value=e)}focusSearch(){requestAnimationFrame(()=>this._inputRef.value.focus())}_handleInput(e){const t=e.target;this.dispatchEvent(new CustomEvent("change",{detail:{search:t.value},bubbles:!1,composed:!1}))}selectParent(e){this.dispatchEvent(new CustomEvent("setParent",{detail:{parent:e},bubbles:!0,composed:!0}))}firstUpdated(){this.focusSearch()}_close(){this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0}))}};z.styles=_e`
    :host {
      flex: 1;
      position: relative;
    }
    .search {
      padding: 1.25em;
      flex-grow: 1;
      flex-shrink: 0;
      margin: 0px;
      border: none;
      appearance: none;
      font-size: 1.125em;
      background: transparent;
      caret-color: var(--ninja-accent-color);
      color: var(--ninja-text-color);
      outline: none;
      font-family: var(--ninja-font-family);
    }
    .search::placeholder {
      color: var(--ninja-placeholder-color);
    }
    .breadcrumb-list {
      padding: 1em 4em 0 1em;
      display: flex;
      flex-direction: row;
      align-items: stretch;
      justify-content: flex-start;
      flex: initial;
    }

    .breadcrumb {
      background: var(--ninja-secondary-background-color);
      text-align: center;
      line-height: 1.2em;
      border-radius: var(--ninja-key-border-radius);
      border: 0;
      cursor: pointer;
      padding: 0.1em 0.5em;
      color: var(--ninja-secondary-text-color);
      margin-right: 0.5em;
      outline: none;
      font-family: var(--ninja-font-family);
    }

    .search-wrapper {
      display: flex;
      border-bottom: var(--ninja-separate-border);
    }
  `;he([b()],z.prototype,"placeholder",void 0);he([b({type:Boolean})],z.prototype,"hideBreadcrumbs",void 0);he([b()],z.prototype,"breadcrumbHome",void 0);he([b({type:Array})],z.prototype,"breadcrumbs",void 0);z=he([$e("ninja-header")],z);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class De extends de{constructor(e){if(super(e),this.it=y,e.type!==C.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===y||e==null)return this.ft=void 0,this.it=e;if(e===S)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this.ft;this.it=e;const t=[e];return t.raw=t,this.ft={_$litType$:this.constructor.resultType,strings:t,values:[]}}}De.directiveName="unsafeHTML",De.resultType=1;const Bi=ce(De);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*Li(i,e){const t=typeof e=="function";if(i!==void 0){let n=-1;for(const s of i)n>-1&&(yield t?e(n):e),n++,yield s}}/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function Ii(i,e,t,n){var s=arguments.length,o=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var l=i.length-1;l>=0;l--)(r=i[l])&&(o=(s<3?r(o):s>3?r(e,t,o):r(e,t))||o);return s>3&&o&&Object.defineProperty(e,t,o),o}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */const Di=_e`:host{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}`;/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let ze=class extends U{render(){return x`<span><slot></slot></span>`}};ze.styles=[Di];ze=Ii([$e("mwc-icon")],ze);var we=globalThis&&globalThis.__decorate||function(i,e,t,n){var s=arguments.length,o=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var l=i.length-1;l>=0;l--)(r=i[l])&&(o=(s<3?r(o):s>3?r(e,t,o):r(e,t))||o);return s>3&&o&&Object.defineProperty(e,t,o),o};let q=class extends U{constructor(){super(),this.selected=!1,this.hotKeysJoinedView=!0,this.addEventListener("click",this.click)}ensureInView(){requestAnimationFrame(()=>this.scrollIntoView({block:"nearest"}))}click(){this.dispatchEvent(new CustomEvent("actionsSelected",{detail:this.action,bubbles:!0,composed:!0}))}updated(e){e.has("selected")&&this.selected&&this.ensureInView()}render(){let e;this.action.mdIcon?e=x`<mwc-icon part="ninja-icon" class="ninja-icon"
        >${this.action.mdIcon}</mwc-icon
      >`:this.action.icon&&(e=Bi(this.action.icon||""));let t;this.action.hotkey&&(this.hotKeysJoinedView?t=this.action.hotkey.split(",").map(s=>{const o=s.split("+"),r=x`${Li(o.map(l=>x`<kbd>${l}</kbd>`),"+")}`;return x`<div class="ninja-hotkey ninja-hotkeys">
            ${r}
          </div>`}):t=this.action.hotkey.split(",").map(s=>{const r=s.split("+").map(l=>x`<kbd class="ninja-hotkey">${l}</kbd>`);return x`<kbd class="ninja-hotkeys">${r}</kbd>`}));const n={selected:this.selected,"ninja-action":!0};return x`
      <div
        class="ninja-action"
        part="ninja-action ${this.selected?"ninja-selected":""}"
        class=${Ie(n)}
      >
        ${e}
        <div class="ninja-title">${this.action.title}</div>
        ${t}
      </div>
    `}};q.styles=_e`
    :host {
      display: flex;
      width: 100%;
    }
    .ninja-action {
      padding: 0.75em 1em;
      display: flex;
      border-left: 2px solid transparent;
      align-items: center;
      justify-content: start;
      outline: none;
      transition: color 0s ease 0s;
      width: 100%;
    }
    .ninja-action.selected {
      cursor: pointer;
      color: var(--ninja-selected-text-color);
      background-color: var(--ninja-selected-background);
      border-left: 2px solid var(--ninja-accent-color);
      outline: none;
    }
    .ninja-action.selected .ninja-icon {
      color: var(--ninja-selected-text-color);
    }
    .ninja-icon {
      font-size: var(--ninja-icon-size);
      max-width: var(--ninja-icon-size);
      max-height: var(--ninja-icon-size);
      margin-right: 1em;
      color: var(--ninja-icon-color);
      margin-right: 1em;
      position: relative;
    }

    .ninja-title {
      flex-shrink: 0.01;
      margin-right: 0.5em;
      flex-grow: 1;
      font-size: 0.8125em;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .ninja-hotkeys {
      flex-shrink: 0;
      width: min-content;
      display: flex;
    }

    .ninja-hotkeys kbd {
      font-family: inherit;
    }
    .ninja-hotkey {
      background: var(--ninja-secondary-background-color);
      padding: 0.06em 0.25em;
      border-radius: var(--ninja-key-border-radius);
      text-transform: capitalize;
      color: var(--ninja-secondary-text-color);
      font-size: 0.75em;
      font-family: inherit;
    }

    .ninja-hotkey + .ninja-hotkey {
      margin-left: 0.5em;
    }
    .ninja-hotkeys + .ninja-hotkeys {
      margin-left: 1em;
    }
  `;we([b({type:Object})],q.prototype,"action",void 0);we([b({type:Boolean})],q.prototype,"selected",void 0);we([b({type:Boolean})],q.prototype,"hotKeysJoinedView",void 0);q=we([$e("ninja-action")],q);const zi=x` <div class="modal-footer" slot="footer">
  <span class="help">
    <svg
      version="1.0"
      class="ninja-examplekey"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1280 1280"
    >
      <path
        d="M1013 376c0 73.4-.4 113.3-1.1 120.2a159.9 159.9 0 0 1-90.2 127.3c-20 9.6-36.7 14-59.2 15.5-7.1.5-121.9.9-255 1h-242l95.5-95.5 95.5-95.5-38.3-38.2-38.2-38.3-160 160c-88 88-160 160.4-160 161 0 .6 72 73 160 161l160 160 38.2-38.3 38.3-38.2-95.5-95.5-95.5-95.5h251.1c252.9 0 259.8-.1 281.4-3.6 72.1-11.8 136.9-54.1 178.5-116.4 8.6-12.9 22.6-40.5 28-55.4 4.4-12 10.7-36.1 13.1-50.6 1.6-9.6 1.8-21 2.1-132.8l.4-122.2H1013v110z"
      />
    </svg>

    to select
  </span>
  <span class="help">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="ninja-examplekey"
      viewBox="0 0 24 24"
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path
        d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"
      />
    </svg>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="ninja-examplekey"
      viewBox="0 0 24 24"
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z" />
    </svg>
    to navigate
  </span>
  <span class="help">
    <span class="ninja-examplekey esc">esc</span>
    to close
  </span>
  <span class="help">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="ninja-examplekey backspace"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fill-rule="evenodd"
        d="M6.707 4.879A3 3 0 018.828 4H15a3 3 0 013 3v6a3 3 0 01-3 3H8.828a3 3 0 01-2.12-.879l-4.415-4.414a1 1 0 010-1.414l4.414-4.414zm4 2.414a1 1 0 00-1.414 1.414L10.586 10l-1.293 1.293a1 1 0 101.414 1.414L12 11.414l1.293 1.293a1 1 0 001.414-1.414L13.414 10l1.293-1.293a1 1 0 00-1.414-1.414L12 8.586l-1.293-1.293z"
        clip-rule="evenodd"
      />
    </svg>
    move to parent
  </span>
</div>`,Ki=_e`
  :host {
    --ninja-width: 640px;
    --ninja-backdrop-filter: none;
    --ninja-overflow-background: rgba(255, 255, 255, 0.5);
    --ninja-text-color: rgb(60, 65, 73);
    --ninja-font-size: 16px;
    --ninja-top: 20%;

    --ninja-key-border-radius: 0.25em;
    --ninja-accent-color: rgb(110, 94, 210);
    --ninja-secondary-background-color: rgb(239, 241, 244);
    --ninja-secondary-text-color: rgb(107, 111, 118);

    --ninja-selected-background: rgb(248, 249, 251);

    --ninja-icon-color: var(--ninja-secondary-text-color);
    --ninja-icon-size: 1.2em;
    --ninja-separate-border: 1px solid var(--ninja-secondary-background-color);

    --ninja-modal-background: #fff;
    --ninja-modal-shadow: rgb(0 0 0 / 50%) 0px 16px 70px;

    --ninja-actions-height: 300px;
    --ninja-group-text-color: rgb(144, 149, 157);

    --ninja-footer-background: rgba(242, 242, 242, 0.4);

    --ninja-placeholder-color: #8e8e8e;

    font-size: var(--ninja-font-size);

    --ninja-z-index: 1;
  }

  :host(.dark) {
    --ninja-backdrop-filter: none;
    --ninja-overflow-background: rgba(0, 0, 0, 0.7);
    --ninja-text-color: #7d7d7d;

    --ninja-modal-background: rgba(17, 17, 17, 0.85);
    --ninja-accent-color: rgb(110, 94, 210);
    --ninja-secondary-background-color: rgba(51, 51, 51, 0.44);
    --ninja-secondary-text-color: #888;

    --ninja-selected-text-color: #eaeaea;
    --ninja-selected-background: rgba(51, 51, 51, 0.44);

    --ninja-icon-color: var(--ninja-secondary-text-color);
    --ninja-separate-border: 1px solid var(--ninja-secondary-background-color);

    --ninja-modal-shadow: 0 16px 70px rgba(0, 0, 0, 0.2);

    --ninja-group-text-color: rgb(144, 149, 157);

    --ninja-footer-background: rgba(30, 30, 30, 85%);
  }

  .modal {
    display: none;
    position: fixed;
    z-index: var(--ninja-z-index);
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background: var(--ninja-overflow-background);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-backdrop-filter: var(--ninja-backdrop-filter);
    backdrop-filter: var(--ninja-backdrop-filter);
    text-align: left;
    color: var(--ninja-text-color);
    font-family: var(--ninja-font-family);
  }
  .modal.visible {
    display: block;
  }

  .modal-content {
    position: relative;
    top: var(--ninja-top);
    margin: auto;
    padding: 0;
    display: flex;
    flex-direction: column;
    flex-shrink: 1;
    -webkit-box-flex: 1;
    flex-grow: 1;
    min-width: 0px;
    will-change: transform;
    background: var(--ninja-modal-background);
    border-radius: 0.5em;
    box-shadow: var(--ninja-modal-shadow);
    max-width: var(--ninja-width);
    overflow: hidden;
  }

  .bump {
    animation: zoom-in-zoom-out 0.2s ease;
  }

  @keyframes zoom-in-zoom-out {
    0% {
      transform: scale(0.99);
    }
    50% {
      transform: scale(1.01, 1.01);
    }
    100% {
      transform: scale(1, 1);
    }
  }

  .ninja-github {
    color: var(--ninja-keys-text-color);
    font-weight: normal;
    text-decoration: none;
  }

  .actions-list {
    max-height: var(--ninja-actions-height);
    overflow: auto;
    scroll-behavior: smooth;
    position: relative;
    margin: 0;
    padding: 0.5em 0;
    list-style: none;
    scroll-behavior: smooth;
  }

  .group-header {
    height: 1.375em;
    line-height: 1.375em;
    padding-left: 1.25em;
    padding-top: 0.5em;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    font-size: 0.75em;
    line-height: 1em;
    color: var(--ninja-group-text-color);
    margin: 1px 0;
  }

  .modal-footer {
    background: var(--ninja-footer-background);
    padding: 0.5em 1em;
    display: flex;
    /* font-size: 0.75em; */
    border-top: var(--ninja-separate-border);
    color: var(--ninja-secondary-text-color);
  }

  .modal-footer .help {
    display: flex;
    margin-right: 1em;
    align-items: center;
    font-size: 0.75em;
  }

  .ninja-examplekey {
    background: var(--ninja-secondary-background-color);
    padding: 0.06em 0.25em;
    border-radius: var(--ninja-key-border-radius);
    color: var(--ninja-secondary-text-color);
    width: 1em;
    height: 1em;
    margin-right: 0.5em;
    font-size: 1.25em;
    fill: currentColor;
  }
  .ninja-examplekey.esc {
    width: auto;
    height: auto;
    font-size: 1.1em;
  }
  .ninja-examplekey.backspace {
    opacity: 0.7;
  }
`;var $=globalThis&&globalThis.__decorate||function(i,e,t,n){var s=arguments.length,o=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var l=i.length-1;l>=0;l--)(r=i[l])&&(o=(s<3?r(o):s>3?r(e,t,o):r(e,t))||o);return s>3&&o&&Object.defineProperty(e,t,o),o};let m=class extends U{constructor(){super(...arguments),this.placeholder="Type a command or search...",this.disableHotkeys=!1,this.hideBreadcrumbs=!1,this.openHotkey="cmd+k,ctrl+k",this.navigationUpHotkey="up,shift+tab",this.navigationDownHotkey="down,tab",this.closeHotkey="esc",this.goBackHotkey="backspace",this.selectHotkey="enter",this.hotKeysJoinedView=!1,this.noAutoLoadMdIcons=!1,this.data=[],this.visible=!1,this._bump=!0,this._actionMatches=[],this._search="",this._flatData=[],this._headerRef=Lt()}open(e={}){this._bump=!0,this.visible=!0,this._headerRef.value.focusSearch(),this._actionMatches.length>0&&(this._selected=this._actionMatches[0]),this.setParent(e.parent)}close(){this._bump=!1,this.visible=!1}setParent(e){e?this._currentRoot=e:this._currentRoot=void 0,this._selected=void 0,this._search="",this._headerRef.value.setSearch("")}get breadcrumbs(){var e;const t=[];let n=(e=this._selected)===null||e===void 0?void 0:e.parent;if(n)for(t.push(n);n;){const s=this._flatData.find(o=>o.id===n);s?.parent&&t.push(s.parent),n=s?s.parent:void 0}return t.reverse()}connectedCallback(){super.connectedCallback(),this.noAutoLoadMdIcons||document.fonts.load("24px Material Icons","apps").then(()=>{}),this._registerInternalHotkeys()}disconnectedCallback(){super.disconnectedCallback(),this._unregisterInternalHotkeys()}_flattern(e,t){let n=[];return e||(e=[]),e.map(s=>{const o=s.children&&s.children.some(l=>typeof l=="string"),r={...s,parent:s.parent||t};return o||(r.children&&r.children.length&&(t=s.id,n=[...n,...r.children]),r.children=r.children?r.children.map(l=>l.id):[]),r}).concat(n.length?this._flattern(n,t):n)}update(e){e.has("data")&&!this.disableHotkeys&&(this._flatData=this._flattern(this.data),this._flatData.filter(t=>!!t.hotkey).forEach(t=>{_(t.hotkey,n=>{n.preventDefault(),t.handler&&t.handler(t)})})),super.update(e)}_registerInternalHotkeys(){this.openHotkey&&_(this.openHotkey,e=>{e.preventDefault(),this.visible?this.close():this.open()}),this.selectHotkey&&_(this.selectHotkey,e=>{!this.visible||(e.preventDefault(),this._actionSelected(this._actionMatches[this._selectedIndex]))}),this.goBackHotkey&&_(this.goBackHotkey,e=>{!this.visible||this._search||(e.preventDefault(),this._goBack())}),this.navigationDownHotkey&&_(this.navigationDownHotkey,e=>{!this.visible||(e.preventDefault(),this._selectedIndex>=this._actionMatches.length-1?this._selected=this._actionMatches[0]:this._selected=this._actionMatches[this._selectedIndex+1])}),this.navigationUpHotkey&&_(this.navigationUpHotkey,e=>{!this.visible||(e.preventDefault(),this._selectedIndex===0?this._selected=this._actionMatches[this._actionMatches.length-1]:this._selected=this._actionMatches[this._selectedIndex-1])}),this.closeHotkey&&_(this.closeHotkey,()=>{!this.visible||this.close()})}_unregisterInternalHotkeys(){this.openHotkey&&_.unbind(this.openHotkey),this.selectHotkey&&_.unbind(this.selectHotkey),this.goBackHotkey&&_.unbind(this.goBackHotkey),this.navigationDownHotkey&&_.unbind(this.navigationDownHotkey),this.navigationUpHotkey&&_.unbind(this.navigationUpHotkey),this.closeHotkey&&_.unbind(this.closeHotkey)}_actionFocused(e,t){this._selected=e,t.target.ensureInView()}_onTransitionEnd(){this._bump=!1}_goBack(){const e=this.breadcrumbs.length>1?this.breadcrumbs[this.breadcrumbs.length-2]:void 0;this.setParent(e)}render(){const e={bump:this._bump,"modal-content":!0},t={visible:this.visible,modal:!0},s=this._flatData.filter(l=>{var c;const a=new RegExp(this._search,"gi"),u=l.title.match(a)||((c=l.keywords)===null||c===void 0?void 0:c.match(a));return(!this._currentRoot&&this._search||l.parent===this._currentRoot)&&u}).reduce((l,c)=>l.set(c.section,[...l.get(c.section)||[],c]),new Map);this._actionMatches=[...s.values()].flat(),this._actionMatches.length>0&&this._selectedIndex===-1&&(this._selected=this._actionMatches[0]),this._actionMatches.length===0&&(this._selected=void 0);const o=l=>x` ${wi(l,c=>c.id,c=>{var a;return x`<ninja-action
            exportparts="ninja-action,ninja-selected,ninja-icon"
            .selected=${Ai(c.id===((a=this._selected)===null||a===void 0?void 0:a.id))}
            .hotKeysJoinedView=${this.hotKeysJoinedView}
            @mouseover=${u=>this._actionFocused(c,u)}
            @actionsSelected=${u=>this._actionSelected(u.detail)}
            .action=${c}
          ></ninja-action>`})}`,r=[];return s.forEach((l,c)=>{const a=c?x`<div class="group-header">${c}</div>`:void 0;r.push(x`${a}${o(l)}`)}),x`
      <div @click=${this._overlayClick} class=${Ie(t)}>
        <div class=${Ie(e)} @animationend=${this._onTransitionEnd}>
          <ninja-header
            exportparts="ninja-input,ninja-input-wrapper"
            ${It(this._headerRef)}
            .placeholder=${this.placeholder}
            .hideBreadcrumbs=${this.hideBreadcrumbs}
            .breadcrumbs=${this.breadcrumbs}
            @change=${this._handleInput}
            @setParent=${l=>this.setParent(l.detail.parent)}
            @close=${this.close}
          >
          </ninja-header>
          <div class="modal-body">
            <div class="actions-list" part="actions-list">${r}</div>
          </div>
          <slot name="footer"> ${zi} </slot>
        </div>
      </div>
    `}get _selectedIndex(){return this._selected?this._actionMatches.indexOf(this._selected):-1}_actionSelected(e){var t;if(this.dispatchEvent(new CustomEvent("selected",{detail:{search:this._search,action:e},bubbles:!0,composed:!0})),!!e){if(e.children&&((t=e.children)===null||t===void 0?void 0:t.length)>0&&(this._currentRoot=e.id,this._search=""),this._headerRef.value.setSearch(""),this._headerRef.value.focusSearch(),e.handler){const n=e.handler(e);n?.keepOpen||this.close()}this._bump=!0}}async _handleInput(e){this._search=e.detail.search,await this.updateComplete,this.dispatchEvent(new CustomEvent("change",{detail:{search:this._search,actions:this._actionMatches},bubbles:!0,composed:!0}))}_overlayClick(e){var t;!((t=e.target)===null||t===void 0)&&t.classList.contains("modal")&&this.close()}};m.styles=[Ki];$([b({type:String})],m.prototype,"placeholder",void 0);$([b({type:Boolean})],m.prototype,"disableHotkeys",void 0);$([b({type:Boolean})],m.prototype,"hideBreadcrumbs",void 0);$([b()],m.prototype,"openHotkey",void 0);$([b()],m.prototype,"navigationUpHotkey",void 0);$([b()],m.prototype,"navigationDownHotkey",void 0);$([b()],m.prototype,"closeHotkey",void 0);$([b()],m.prototype,"goBackHotkey",void 0);$([b()],m.prototype,"selectHotkey",void 0);$([b({type:Boolean})],m.prototype,"hotKeysJoinedView",void 0);$([b({type:Boolean})],m.prototype,"noAutoLoadMdIcons",void 0);$([b({type:Array,hasChanged(){return!0}})],m.prototype,"data",void 0);$([N()],m.prototype,"visible",void 0);$([N()],m.prototype,"_bump",void 0);$([N()],m.prototype,"_actionMatches",void 0);$([N()],m.prototype,"_search",void 0);$([N()],m.prototype,"_currentRoot",void 0);$([N()],m.prototype,"_flatData",void 0);$([N()],m.prototype,"breadcrumbs",null);$([N()],m.prototype,"_selected",void 0);m=$([$e("ninja-keys")],m);const Vi=At("<ninja-keys></ninja-keys>"),Fi=i=>(()=>{const e=re(()=>document.importNode(Vi,!0));return e._$owner=Xt(),te(t=>{const n=i.hotkeys,s=i.placeholder,o=i.disableHotkeys,r=i.hideBreadcrumbs,l=i.openHotkey,c=i.navigationUpHotkey,a=i.navigationDownHotkey,u=i.closeHotkey,h=i.goBackHotkey,d=i.selectHotkey,f=i.hotKeysJoinedView,p=i.noAutoLoadMdIcons,g=i.isDark?"dark":"light";return n!==t._v$&&(e.data=t._v$=n),s!==t._v$2&&(e.placeholder=t._v$2=s),o!==t._v$3&&(e.disablehotkeys=t._v$3=o),r!==t._v$4&&(e.hidebreadcrumbs=t._v$4=r),l!==t._v$5&&(e.openhotkey=t._v$5=l),c!==t._v$6&&(e.navigationuphotkey=t._v$6=c),a!==t._v$7&&(e.navigationdownhotkey=t._v$7=a),u!==t._v$8&&(e.closehotkey=t._v$8=u),h!==t._v$9&&(e.gobackhotkey=t._v$9=h),d!==t._v$10&&(e.selecthotkey=t._v$10=d),f!==t._v$11&&(e.hotkeysjoinedview=t._v$11=f),p!==t._v$12&&(e.noautoloadmdicons=t._v$12=p),g!==t._v$13&&X(e,t._v$13=g),t},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0,_v$7:void 0,_v$8:void 0,_v$9:void 0,_v$10:void 0,_v$11:void 0,_v$12:void 0,_v$13:void 0}),e})(),Ji=Fi;function Wi(){let i;return Zt(()=>{i=document.querySelector("ninja-keys")}),{open:s=>{i?.open(s?{parent:s}:void 0)},close:()=>{i?.close()},setParent:s=>{i?.setParent(s)}}}const qi="/solid-ninja-keys/assets/logo.123b04bc.svg",Gi="_App_1kcgw_1",Qi="_logo_1kcgw_5",Yi="_header_1kcgw_11",Zi="_link_1kcgw_25",Z={App:Gi,logo:Qi,"logo-spin":"_logo-spin_1kcgw_1",header:Yi,"dark-mode":"_dark-mode_1kcgw_20",link:Zi},Xi=At('<div><header><img alt="logo"><p>Press <kbd>cmd</kbd>+<kbd>k</kbd> (macOS) or <kbd>ctrl</kbd>+<kbd>k</kbd> (Linux/Windows), or click the Solid logo.</p><a href="https://github.com/wobsoriano/solid-ninja-keys" target="_blank" rel="noopener noreferrer">solid-ninja-keys</a></header></div>');function Re(i){window.open(i,"_blank")?.focus()}const en=()=>{const[i,e]=Qt(!1),{open:t}=Wi(),n=[{id:"GitHub",title:"GitHub",hotkey:"cmd+h",handler:()=>{Re("https://github.com/wobsoriano/solid-ninja-keys")}},{id:"Contact",title:"Contact",hotkey:"cmd+c",handler:()=>{Re("mailto:sorianorobertc@gmail.com")}},{id:"Twitter",title:"Twitter",hotkey:"cmd+t",handler:()=>{Re("https://twitter.com/wobsoriano")}},{id:"Theme",title:"Change theme...",mdIcon:"desktop_windows",children:[{id:"Light Theme",title:"Change theme to Light",mdIcon:"light_mode",handler:()=>{e(!1)}},{id:"Dark Theme",title:"Change theme to Dark",mdIcon:"dark_mode",keywords:"lol",handler:()=>{e(!0)}}]}];return(()=>{const s=Xi.cloneNode(!0),o=s.firstChild,r=o.firstChild,l=r.nextSibling,c=l.nextSibling;return r.$$click=()=>t(),ai(r,"src",qi),kt(s,wt(Ji,{get isDark(){return i()},hotkeys:n}),null),te(a=>{const u=Z.App,h=`${Z.header} ${i()?Z["dark-mode"]:""}`,d=Z.logo,f=Z.link;return u!==a._v$&&X(s,a._v$=u),h!==a._v$2&&X(o,a._v$2=h),d!==a._v$3&&X(r,a._v$3=d),f!==a._v$4&&X(c,a._v$4=f),a},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0}),s})()};li(["click"]);ri(()=>wt(en,{}),document.getElementById("root"));
