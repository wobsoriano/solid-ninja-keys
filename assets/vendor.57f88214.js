const ce={},Kt=(i,e)=>i===e,Ge={equals:Kt};let vt=yt;const X={},I=1,de=2,gt={owned:null,cleanups:null,context:null,owner:null};var k=null;let se=null,$=null,Q=null,E=null,T=null,Ie=0;function Vt(i,e){const t=$,n=k,s=i.length===0?gt:{owned:null,cleanups:null,context:null,owner:e||n};k=s,$=null;try{return Ke(()=>i(()=>Ve(s)),!0)}finally{$=t,k=n}}function Pi(i,e){e=e?Object.assign({},Ge,e):Ge;const t={value:i,observers:null,observerSlots:null,pending:X,comparator:e.equals||void 0},n=s=>(typeof s=="function"&&(s=s(t.pending!==X?t.pending:t.value)),De(t,s));return[Wt.bind(t),n]}function Ue(i,e,t){const n=mt(i,e,!1,I);ve(n)}function Jt(i,e,t){vt=Qt;const n=mt(i,e,!1,I);n.user=!0,T?T.push(n):queueMicrotask(()=>ve(n))}function Ft(i){if(Q)return i();let e;const t=Q=[];try{e=i()}finally{Q=null}return Ke(()=>{for(let n=0;n<t.length;n+=1){const s=t[n];if(s.pending!==X){const o=s.pending;s.pending=X,De(s,o)}}},!1),e}function ze(i){let e,t=$;return $=null,e=i(),$=t,e}function Ui(i){Jt(()=>ze(i))}function Mi(){return k}function Wt(){const i=se;if(this.sources&&(this.state||i)){const e=E;E=null,this.state===I||i?ve(this):ue(this),E=e}if($){const e=this.observers?this.observers.length:0;$.sources?($.sources.push(this),$.sourceSlots.push(e)):($.sources=[this],$.sourceSlots=[e]),this.observers?(this.observers.push($),this.observerSlots.push($.sources.length-1)):(this.observers=[$],this.observerSlots=[$.sources.length-1])}return this.value}function De(i,e,t){if(i.comparator&&i.comparator(i.value,e))return e;if(Q)return i.pending===X&&Q.push(i),i.pending=e,e;let n=!1;return i.value=e,i.observers&&i.observers.length&&Ke(()=>{for(let s=0;s<i.observers.length;s+=1){const o=i.observers[s];n&&se.disposed.has(o),(n&&!o.tState||!n&&!o.state)&&(o.pure?E.push(o):T.push(o),o.observers&&_t(o)),n||(o.state=I)}if(E.length>1e6)throw E=[],new Error},!1),e}function ve(i){if(!i.fn)return;Ve(i);const e=k,t=$,n=Ie;$=k=i,qt(i,i.value,n),$=t,k=e}function qt(i,e,t){let n;try{n=i.fn(e)}catch(s){bt(s)}(!i.updatedAt||i.updatedAt<=t)&&(i.observers&&i.observers.length?De(i,n):i.value=n,i.updatedAt=t)}function mt(i,e,t,n=I,s){const o={fn:i,state:n,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:e,owner:k,context:null,pure:t};return k===null||k!==gt&&(k.owned?k.owned.push(o):k.owned=[o]),o}function Y(i){const e=se;if(i.state===0||e)return;if(i.state===de||e)return ue(i);if(i.suspense&&ze(i.suspense.inFallback))return i.suspense.effects.push(i);const t=[i];for(;(i=i.owner)&&(!i.updatedAt||i.updatedAt<Ie);)(i.state||e)&&t.push(i);for(let n=t.length-1;n>=0;n--)if(i=t[n],i.state===I||e)ve(i);else if(i.state===de||e){const s=E;E=null,ue(i,t[0]),E=s}}function Ke(i,e){if(E)return i();let t=!1;e||(E=[]),T?t=!0:T=[],Ie++;try{return i()}catch(n){bt(n)}finally{Gt(t)}}function Gt(i){E&&(yt(E),E=null),!i&&(T.length?Ft(()=>{vt(T),T=null}):T=null)}function yt(i){for(let e=0;e<i.length;e++)Y(i[e])}function Qt(i){let e,t=0;for(e=0;e<i.length;e++){const s=i[e];s.user?i[t++]=s:Y(s)}const n=i.length;for(e=0;e<t;e++)Y(i[e]);for(e=n;e<i.length;e++)Y(i[e])}function ue(i,e){const t=se;i.state=0;for(let n=0;n<i.sources.length;n+=1){const s=i.sources[n];s.sources&&(s.state===I||t?s!==e&&Y(s):(s.state===de||t)&&ue(s,e))}}function _t(i){const e=se;for(let t=0;t<i.observers.length;t+=1){const n=i.observers[t];(!n.state||e)&&(n.state=de,n.pure?E.push(n):T.push(n),n.observers&&_t(n))}}function Ve(i){let e;if(i.sources)for(;i.sources.length;){const t=i.sources.pop(),n=i.sourceSlots.pop(),s=t.observers;if(s&&s.length){const o=s.pop(),r=t.observerSlots.pop();n<s.length&&(o.sourceSlots[r]=n,s[n]=o,t.observerSlots[n]=r)}}if(i.owned){for(e=0;e<i.owned.length;e++)Ve(i.owned[e]);i.owned=null}if(i.cleanups){for(e=0;e<i.cleanups.length;e++)i.cleanups[e]();i.cleanups=null}i.state=0,i.context=null}function bt(i){throw i}function Ni(i,e){return ze(()=>i(e))}function Yt(i,e,t){let n=t.length,s=e.length,o=n,r=0,l=0,a=e[s-1].nextSibling,c=null;for(;r<s||l<o;){if(e[r]===t[l]){r++,l++;continue}for(;e[s-1]===t[o-1];)s--,o--;if(s===r){const u=o<n?l?t[l-1].nextSibling:t[o-l]:a;for(;l<o;)i.insertBefore(t[l++],u)}else if(o===l)for(;r<s;)(!c||!c.has(e[r]))&&e[r].remove(),r++;else if(e[r]===t[o-1]&&t[l]===e[s-1]){const u=e[--s].nextSibling;i.insertBefore(t[l++],e[r++].nextSibling),i.insertBefore(t[--o],u),e[s]=t[o]}else{if(!c){c=new Map;let d=l;for(;d<o;)c.set(t[d],d++)}const u=c.get(e[r]);if(u!=null)if(l<u&&u<o){let d=r,h=1,f;for(;++d<s&&d<o&&!((f=c.get(e[d]))==null||f!==u+h);)h++;if(h>u-l){const p=e[r];for(;l<u;)i.insertBefore(t[l++],p)}else i.replaceChild(t[l++],e[r++])}else r++;else e[r++].remove()}}}const Qe="_$DX_DELEGATE";function Ri(i,e,t){let n;return Vt(s=>{n=s,e===document?i():Zt(e,i(),e.firstChild?null:void 0,t)}),()=>{n(),e.textContent=""}}function Bi(i,e,t){const n=document.createElement("template");n.innerHTML=i;let s=n.content.firstChild;return t&&(s=s.firstChild),s}function Li(i,e=window.document){const t=e[Qe]||(e[Qe]=new Set);for(let n=0,s=i.length;n<s;n++){const o=i[n];t.has(o)||(t.add(o),e.addEventListener(o,Xt))}}function Ii(i,e,t){t==null?i.removeAttribute(e):i.setAttribute(e,t)}function Zt(i,e,t,n){if(t!==void 0&&!n&&(n=[]),typeof e!="function")return fe(i,e,n,t);Ue(s=>fe(i,e(),s,t),n)}function Xt(i){const e=`$$${i.type}`;let t=i.composedPath&&i.composedPath()[0]||i.target;for(i.target!==t&&Object.defineProperty(i,"target",{configurable:!0,value:t}),Object.defineProperty(i,"currentTarget",{configurable:!0,get(){return t||document}});t!==null;){const n=t[e];if(n&&!t.disabled){const s=t[`${e}Data`];if(s!==void 0?n(s,i):n(i),i.cancelBubble)return}t=t.host&&t.host!==t&&t.host instanceof Node?t.host:t.parentNode}}function fe(i,e,t,n,s){for(ce.context&&!t&&(t=[...i.childNodes]);typeof t=="function";)t=t();if(e===t)return t;const o=typeof e,r=n!==void 0;if(i=r&&t[0]&&t[0].parentNode||i,o==="string"||o==="number")if(o==="number"&&(e=e.toString()),r){let l=t[0];l&&l.nodeType===3?l.data=e:l=document.createTextNode(e),t=z(i,t,n,l)}else t!==""&&typeof t=="string"?t=i.firstChild.data=e:t=i.textContent=e;else if(e==null||o==="boolean"){if(ce.context)return t;t=z(i,t,n)}else{if(o==="function")return Ue(()=>{let l=e();for(;typeof l=="function";)l=l();t=fe(i,l,t,n)}),()=>t;if(Array.isArray(e)){const l=[];if(Me(l,e,s))return Ue(()=>t=fe(i,l,t,n,!0)),()=>t;if(ce.context){for(let a=0;a<l.length;a++)if(l[a].parentNode)return t=l}if(l.length===0){if(t=z(i,t,n),r)return t}else Array.isArray(t)?t.length===0?Ye(i,l,n):Yt(i,t,l):(t&&z(i),Ye(i,l));t=l}else if(e instanceof Node){if(ce.context&&e.parentNode)return t=r?[e]:e;if(Array.isArray(t)){if(r)return t=z(i,t,n,e);z(i,t,null,e)}else t==null||t===""||!i.firstChild?i.appendChild(e):i.replaceChild(e,i.firstChild);t=e}}return t}function Me(i,e,t){let n=!1;for(let s=0,o=e.length;s<o;s++){let r=e[s],l;if(r instanceof Node)i.push(r);else if(!(r==null||r===!0||r===!1))if(Array.isArray(r))n=Me(i,r)||n;else if((l=typeof r)=="string")i.push(document.createTextNode(r));else if(l==="function")if(t){for(;typeof r=="function";)r=r();n=Me(i,Array.isArray(r)?r:[r])||n}else i.push(r),n=!0;else i.push(document.createTextNode(r.toString()))}return n}function Ye(i,e,t){for(let n=0,s=e.length;n<s;n++)i.insertBefore(e[n],t)}function z(i,e,t,n){if(t===void 0)return i.textContent="";const s=n||document.createTextNode("");if(e.length){let o=!1;for(let r=e.length-1;r>=0;r--){const l=e[r];if(s!==l){const a=l.parentNode===i;!o&&!r?a?i.replaceChild(s,l):i.insertBefore(s,t):a&&l.remove()}else o=!0}}else i.insertBefore(s,t);return[s]}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Je=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Fe=Symbol(),Ze=new Map;class $t{constructor(e,t){if(this._$cssResult$=!0,t!==Fe)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){let e=Ze.get(this.cssText);return Je&&e===void 0&&(Ze.set(this.cssText,e=new CSSStyleSheet),e.replaceSync(this.cssText)),e}toString(){return this.cssText}}const ei=i=>new $t(typeof i=="string"?i:i+"",Fe),ge=(i,...e)=>{const t=i.length===1?i[0]:e.reduce((n,s,o)=>n+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+i[o+1],i[0]);return new $t(t,Fe)},ti=(i,e)=>{Je?i.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{const n=document.createElement("style"),s=window.litNonce;s!==void 0&&n.setAttribute("nonce",s),n.textContent=t.cssText,i.appendChild(n)})},Xe=Je?i=>i:i=>i instanceof CSSStyleSheet?(e=>{let t="";for(const n of e.cssRules)t+=n.cssText;return ei(t)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var $e;const et=window.trustedTypes,ii=et?et.emptyScript:"",tt=window.reactiveElementPolyfillSupport,Ne={toAttribute(i,e){switch(e){case Boolean:i=i?ii:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,e){let t=i;switch(e){case Boolean:t=i!==null;break;case Number:t=i===null?null:Number(i);break;case Object:case Array:try{t=JSON.parse(i)}catch{t=null}}return t}},wt=(i,e)=>e!==i&&(e==e||i==i),we={attribute:!0,type:String,converter:Ne,reflect:!1,hasChanged:wt};class D extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(e){var t;(t=this.l)!==null&&t!==void 0||(this.l=[]),this.l.push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,n)=>{const s=this._$Eh(n,t);s!==void 0&&(this._$Eu.set(s,n),e.push(s))}),e}static createProperty(e,t=we){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const n=typeof e=="symbol"?Symbol():"__"+e,s=this.getPropertyDescriptor(e,n,t);s!==void 0&&Object.defineProperty(this.prototype,e,s)}}static getPropertyDescriptor(e,t,n){return{get(){return this[t]},set(s){const o=this[e];this[t]=s,this.requestUpdate(e,o,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||we}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),this.elementProperties=new Map(e.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,n=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of n)this.createProperty(s,t[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const s of n)t.unshift(Xe(s))}else e!==void 0&&t.push(Xe(e));return t}static _$Eh(e,t){const n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}o(){var e;this._$Ep=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Em(),this.requestUpdate(),(e=this.constructor.l)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,n;((t=this._$Eg)!==null&&t!==void 0?t:this._$Eg=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((n=e.hostConnected)===null||n===void 0||n.call(e))}removeController(e){var t;(t=this._$Eg)===null||t===void 0||t.splice(this._$Eg.indexOf(e)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Et.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return ti(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$Eg)===null||e===void 0||e.forEach(t=>{var n;return(n=t.hostConnected)===null||n===void 0?void 0:n.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$Eg)===null||e===void 0||e.forEach(t=>{var n;return(n=t.hostDisconnected)===null||n===void 0?void 0:n.call(t)})}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ES(e,t,n=we){var s,o;const r=this.constructor._$Eh(e,n);if(r!==void 0&&n.reflect===!0){const l=((o=(s=n.converter)===null||s===void 0?void 0:s.toAttribute)!==null&&o!==void 0?o:Ne.toAttribute)(t,n.type);this._$Ei=e,l==null?this.removeAttribute(r):this.setAttribute(r,l),this._$Ei=null}}_$AK(e,t){var n,s,o;const r=this.constructor,l=r._$Eu.get(e);if(l!==void 0&&this._$Ei!==l){const a=r.getPropertyOptions(l),c=a.converter,u=(o=(s=(n=c)===null||n===void 0?void 0:n.fromAttribute)!==null&&s!==void 0?s:typeof c=="function"?c:null)!==null&&o!==void 0?o:Ne.fromAttribute;this._$Ei=l,this[l]=u(t,a.type),this._$Ei=null}}requestUpdate(e,t,n){let s=!0;e!==void 0&&(((n=n||this.constructor.getPropertyOptions(e)).hasChanged||wt)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),n.reflect===!0&&this._$Ei!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,n))):s=!1),!this.isUpdatePending&&s&&(this._$Ep=this._$E_())}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach((s,o)=>this[o]=s),this._$Et=void 0);let t=!1;const n=this._$AL;try{t=this.shouldUpdate(n),t?(this.willUpdate(n),(e=this._$Eg)===null||e===void 0||e.forEach(s=>{var o;return(o=s.hostUpdate)===null||o===void 0?void 0:o.call(s)}),this.update(n)):this._$EU()}catch(s){throw t=!1,this._$EU(),s}t&&this._$AE(n)}willUpdate(e){}_$AE(e){var t;(t=this._$Eg)===null||t===void 0||t.forEach(n=>{var s;return(s=n.hostUpdated)===null||s===void 0?void 0:s.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,n)=>this._$ES(n,this[n],t)),this._$EC=void 0),this._$EU()}updated(e){}firstUpdated(e){}}D.finalized=!0,D.elementProperties=new Map,D.elementStyles=[],D.shadowRootOptions={mode:"open"},tt?.({ReactiveElement:D}),(($e=globalThis.reactiveElementVersions)!==null&&$e!==void 0?$e:globalThis.reactiveElementVersions=[]).push("1.3.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ae;const V=globalThis.trustedTypes,it=V?V.createPolicy("lit-html",{createHTML:i=>i}):void 0,O=`lit$${(Math.random()+"").slice(9)}$`,We="?"+O,ni=`<${We}>`,J=document,ee=(i="")=>J.createComment(i),te=i=>i===null||typeof i!="object"&&typeof i!="function",At=Array.isArray,xt=i=>{var e;return At(i)||typeof((e=i)===null||e===void 0?void 0:e[Symbol.iterator])=="function"},q=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,nt=/-->/g,st=/>/g,M=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,ot=/'/g,rt=/"/g,Et=/^(?:script|style|textarea|title)$/i,si=i=>(e,...t)=>({_$litType$:i,strings:e,values:t}),j=si(1),S=Symbol.for("lit-noChange"),g=Symbol.for("lit-nothing"),lt=new WeakMap,oi=(i,e,t)=>{var n,s;const o=(n=t?.renderBefore)!==null&&n!==void 0?n:e;let r=o._$litPart$;if(r===void 0){const l=(s=t?.renderBefore)!==null&&s!==void 0?s:null;o._$litPart$=r=new W(e.insertBefore(ee(),l),l,void 0,t??{})}return r._$AI(i),r},K=J.createTreeWalker(J,129,null,!1),jt=(i,e)=>{const t=i.length-1,n=[];let s,o=e===2?"<svg>":"",r=q;for(let a=0;a<t;a++){const c=i[a];let u,d,h=-1,f=0;for(;f<c.length&&(r.lastIndex=f,d=r.exec(c),d!==null);)f=r.lastIndex,r===q?d[1]==="!--"?r=nt:d[1]!==void 0?r=st:d[2]!==void 0?(Et.test(d[2])&&(s=RegExp("</"+d[2],"g")),r=M):d[3]!==void 0&&(r=M):r===M?d[0]===">"?(r=s??q,h=-1):d[1]===void 0?h=-2:(h=r.lastIndex-d[2].length,u=d[1],r=d[3]===void 0?M:d[3]==='"'?rt:ot):r===rt||r===ot?r=M:r===nt||r===st?r=q:(r=M,s=void 0);const p=r===M&&i[a+1].startsWith("/>")?" ":"";o+=r===q?c+ni:h>=0?(n.push(u),c.slice(0,h)+"$lit$"+c.slice(h)+O+p):c+O+(h===-2?(n.push(void 0),a):p)}const l=o+(i[t]||"<?>")+(e===2?"</svg>":"");if(!Array.isArray(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return[it!==void 0?it.createHTML(l):l,n]};class ie{constructor({strings:e,_$litType$:t},n){let s;this.parts=[];let o=0,r=0;const l=e.length-1,a=this.parts,[c,u]=jt(e,t);if(this.el=ie.createElement(c,n),K.currentNode=this.el.content,t===2){const d=this.el.content,h=d.firstChild;h.remove(),d.append(...h.childNodes)}for(;(s=K.nextNode())!==null&&a.length<l;){if(s.nodeType===1){if(s.hasAttributes()){const d=[];for(const h of s.getAttributeNames())if(h.endsWith("$lit$")||h.startsWith(O)){const f=u[r++];if(d.push(h),f!==void 0){const p=s.getAttribute(f.toLowerCase()+"$lit$").split(O),_=/([.?@])?(.*)/.exec(f);a.push({type:1,index:o,name:_[2],strings:p,ctor:_[1]==="."?St:_[1]==="?"?Ct:_[1]==="@"?Tt:oe})}else a.push({type:6,index:o})}for(const h of d)s.removeAttribute(h)}if(Et.test(s.tagName)){const d=s.textContent.split(O),h=d.length-1;if(h>0){s.textContent=V?V.emptyScript:"";for(let f=0;f<h;f++)s.append(d[f],ee()),K.nextNode(),a.push({type:2,index:++o});s.append(d[h],ee())}}}else if(s.nodeType===8)if(s.data===We)a.push({type:2,index:o});else{let d=-1;for(;(d=s.data.indexOf(O,d+1))!==-1;)a.push({type:7,index:o}),d+=O.length-1}o++}}static createElement(e,t){const n=J.createElement("template");return n.innerHTML=e,n}}function R(i,e,t=i,n){var s,o,r,l;if(e===S)return e;let a=n!==void 0?(s=t._$Cl)===null||s===void 0?void 0:s[n]:t._$Cu;const c=te(e)?void 0:e._$litDirective$;return a?.constructor!==c&&((o=a?._$AO)===null||o===void 0||o.call(a,!1),c===void 0?a=void 0:(a=new c(i),a._$AT(i,t,n)),n!==void 0?((r=(l=t)._$Cl)!==null&&r!==void 0?r:l._$Cl=[])[n]=a:t._$Cu=a),a!==void 0&&(e=R(i,a._$AS(i,e.values),a,n)),e}class kt{constructor(e,t){this.v=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(e){var t;const{el:{content:n},parts:s}=this._$AD,o=((t=e?.creationScope)!==null&&t!==void 0?t:J).importNode(n,!0);K.currentNode=o;let r=K.nextNode(),l=0,a=0,c=s[0];for(;c!==void 0;){if(l===c.index){let u;c.type===2?u=new W(r,r.nextSibling,this,e):c.type===1?u=new c.ctor(r,c.name,c.strings,this,e):c.type===6&&(u=new Ht(r,this,e)),this.v.push(u),c=s[++a]}l!==c?.index&&(r=K.nextNode(),l++)}return o}m(e){let t=0;for(const n of this.v)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}}class W{constructor(e,t,n,s){var o;this.type=2,this._$AH=g,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=s,this._$Cg=(o=s?.isConnected)===null||o===void 0||o}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cg}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=R(this,e,t),te(e)?e===g||e==null||e===""?(this._$AH!==g&&this._$AR(),this._$AH=g):e!==this._$AH&&e!==S&&this.$(e):e._$litType$!==void 0?this.T(e):e.nodeType!==void 0?this.k(e):xt(e)?this.S(e):this.$(e)}A(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}k(e){this._$AH!==e&&(this._$AR(),this._$AH=this.A(e))}$(e){this._$AH!==g&&te(this._$AH)?this._$AA.nextSibling.data=e:this.k(J.createTextNode(e)),this._$AH=e}T(e){var t;const{values:n,_$litType$:s}=e,o=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=ie.createElement(s.h,this.options)),s);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===o)this._$AH.m(n);else{const r=new kt(o,this),l=r.p(this.options);r.m(n),this.k(l),this._$AH=r}}_$AC(e){let t=lt.get(e.strings);return t===void 0&&lt.set(e.strings,t=new ie(e)),t}S(e){At(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let n,s=0;for(const o of e)s===t.length?t.push(n=new W(this.A(ee()),this.A(ee()),this,this.options)):n=t[s],n._$AI(o),s++;s<t.length&&(this._$AR(n&&n._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var n;for((n=this._$AP)===null||n===void 0||n.call(this,!1,!0,t);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var t;this._$AM===void 0&&(this._$Cg=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}}class oe{constructor(e,t,n,s,o){this.type=1,this._$AH=g,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=o,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=g}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,n,s){const o=this.strings;let r=!1;if(o===void 0)e=R(this,e,t,0),r=!te(e)||e!==this._$AH&&e!==S,r&&(this._$AH=e);else{const l=e;let a,c;for(e=o[0],a=0;a<o.length-1;a++)c=R(this,l[n+a],t,a),c===S&&(c=this._$AH[a]),r||(r=!te(c)||c!==this._$AH[a]),c===g?e=g:e!==g&&(e+=(c??"")+o[a+1]),this._$AH[a]=c}r&&!s&&this.C(e)}C(e){e===g?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class St extends oe{constructor(){super(...arguments),this.type=3}C(e){this.element[this.name]=e===g?void 0:e}}const ri=V?V.emptyScript:"";class Ct extends oe{constructor(){super(...arguments),this.type=4}C(e){e&&e!==g?this.element.setAttribute(this.name,ri):this.element.removeAttribute(this.name)}}class Tt extends oe{constructor(e,t,n,s,o){super(e,t,n,s,o),this.type=5}_$AI(e,t=this){var n;if((e=(n=R(this,e,t,0))!==null&&n!==void 0?n:g)===S)return;const s=this._$AH,o=e===g&&s!==g||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,r=e!==g&&(s===g||o);o&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,n;typeof this._$AH=="function"?this._$AH.call((n=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&n!==void 0?n:this.element,e):this._$AH.handleEvent(e)}}class Ht{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){R(this,e)}}const li={P:"$lit$",L:O,V:We,I:1,N:jt,R:kt,D:xt,j:R,H:W,O:oe,F:Ct,B:Tt,W:St,Z:Ht},at=window.litHtmlPolyfillSupport;at?.(ie,W),((Ae=globalThis.litHtmlVersions)!==null&&Ae!==void 0?Ae:globalThis.litHtmlVersions=[]).push("2.2.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var xe,Ee;class P extends D{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var e,t;const n=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=n.firstChild),n}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Dt=oi(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!1)}render(){return S}}P.finalized=!0,P._$litElement$=!0,(xe=globalThis.litElementHydrateSupport)===null||xe===void 0||xe.call(globalThis,{LitElement:P});const ct=globalThis.litElementPolyfillSupport;ct?.({LitElement:P});((Ee=globalThis.litElementVersions)!==null&&Ee!==void 0?Ee:globalThis.litElementVersions=[]).push("3.2.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const me=i=>e=>typeof e=="function"?((t,n)=>(window.customElements.define(t,n),n))(i,e):((t,n)=>{const{kind:s,elements:o}=n;return{kind:s,elements:o,finisher(r){window.customElements.define(t,r)}}})(i,e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ai=(i,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(t){t.createProperty(e.key,i)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,i)}};function b(i){return(e,t)=>t!==void 0?((n,s,o)=>{s.constructor.createProperty(o,n)})(i,e,t):ai(i,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function U(i){return b({...i,state:!0})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var je;((je=window.HTMLSlotElement)===null||je===void 0?void 0:je.prototype.assignedElements)!=null;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const C={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},re=i=>(...e)=>({_$litDirective$:i,values:e});class le{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{H:ci}=li,Ot=i=>i.strings===void 0,ht=()=>document.createComment(""),G=(i,e,t)=>{var n;const s=i._$AA.parentNode,o=e===void 0?i._$AB:e._$AA;if(t===void 0){const r=s.insertBefore(ht(),o),l=s.insertBefore(ht(),o);t=new ci(r,l,i,i.options)}else{const r=t._$AB.nextSibling,l=t._$AM,a=l!==i;if(a){let c;(n=t._$AQ)===null||n===void 0||n.call(t,i),t._$AM=i,t._$AP!==void 0&&(c=i._$AU)!==l._$AU&&t._$AP(c)}if(r!==o||a){let c=t._$AA;for(;c!==r;){const u=c.nextSibling;s.insertBefore(c,o),c=u}}}return t},N=(i,e,t=i)=>(i._$AI(e,t),i),hi={},Pt=(i,e=hi)=>i._$AH=e,di=i=>i._$AH,ke=i=>{var e;(e=i._$AP)===null||e===void 0||e.call(i,!1,!0);let t=i._$AA;const n=i._$AB.nextSibling;for(;t!==n;){const s=t.nextSibling;t.remove(),t=s}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const dt=(i,e,t)=>{const n=new Map;for(let s=e;s<=t;s++)n.set(i[s],s);return n},ui=re(class extends le{constructor(i){if(super(i),i.type!==C.CHILD)throw Error("repeat() can only be used in text expressions")}dt(i,e,t){let n;t===void 0?t=e:e!==void 0&&(n=e);const s=[],o=[];let r=0;for(const l of i)s[r]=n?n(l,r):r,o[r]=t(l,r),r++;return{values:o,keys:s}}render(i,e,t){return this.dt(i,e,t).values}update(i,[e,t,n]){var s;const o=di(i),{values:r,keys:l}=this.dt(e,t,n);if(!Array.isArray(o))return this.ut=l,r;const a=(s=this.ut)!==null&&s!==void 0?s:this.ut=[],c=[];let u,d,h=0,f=o.length-1,p=0,_=r.length-1;for(;h<=f&&p<=_;)if(o[h]===null)h++;else if(o[f]===null)f--;else if(a[h]===l[p])c[p]=N(o[h],r[p]),h++,p++;else if(a[f]===l[_])c[_]=N(o[f],r[_]),f--,_--;else if(a[h]===l[_])c[_]=N(o[h],r[_]),G(i,c[_+1],o[h]),h++,_--;else if(a[f]===l[p])c[p]=N(o[f],r[p]),G(i,o[h],o[f]),f--,p++;else if(u===void 0&&(u=dt(l,p,_),d=dt(a,h,f)),u.has(a[h]))if(u.has(a[f])){const H=d.get(l[p]),be=H!==void 0?o[H]:null;if(be===null){const qe=G(i,o[h]);N(qe,r[p]),c[p]=qe}else c[p]=N(be,r[p]),G(i,o[h],be),o[H]=null;p++}else ke(o[f]),f--;else ke(o[h]),h++;for(;p<=_;){const H=G(i,c[_+1]);N(H,r[p]),c[p++]=H}for(;h<=f;){const H=o[h++];H!==null&&ke(H)}return this.ut=l,Pt(i,c),S}});/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const fi=re(class extends le{constructor(i){if(super(i),i.type!==C.PROPERTY&&i.type!==C.ATTRIBUTE&&i.type!==C.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!Ot(i))throw Error("`live` bindings can only contain a single expression")}render(i){return i}update(i,[e]){if(e===S||e===g)return e;const t=i.element,n=i.name;if(i.type===C.PROPERTY){if(e===t[n])return S}else if(i.type===C.BOOLEAN_ATTRIBUTE){if(!!e===t.hasAttribute(n))return S}else if(i.type===C.ATTRIBUTE&&t.getAttribute(n)===e+"")return S;return Pt(i),e}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Z=(i,e)=>{var t,n;const s=i._$AN;if(s===void 0)return!1;for(const o of s)(n=(t=o)._$AO)===null||n===void 0||n.call(t,e,!1),Z(o,e);return!0},pe=i=>{let e,t;do{if((e=i._$AM)===void 0)break;t=e._$AN,t.delete(i),i=e}while(t?.size===0)},Ut=i=>{for(let e;e=i._$AM;i=e){let t=e._$AN;if(t===void 0)e._$AN=t=new Set;else if(t.has(i))break;t.add(i),gi(e)}};function pi(i){this._$AN!==void 0?(pe(this),this._$AM=i,Ut(this)):this._$AM=i}function vi(i,e=!1,t=0){const n=this._$AH,s=this._$AN;if(s!==void 0&&s.size!==0)if(e)if(Array.isArray(n))for(let o=t;o<n.length;o++)Z(n[o],!1),pe(n[o]);else n!=null&&(Z(n,!1),pe(n));else Z(this,i)}const gi=i=>{var e,t,n,s;i.type==C.CHILD&&((e=(n=i)._$AP)!==null&&e!==void 0||(n._$AP=vi),(t=(s=i)._$AQ)!==null&&t!==void 0||(s._$AQ=pi))};class mi extends le{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,n){super._$AT(e,t,n),Ut(this),this.isConnected=e._$AU}_$AO(e,t=!0){var n,s;e!==this.isConnected&&(this.isConnected=e,e?(n=this.reconnected)===null||n===void 0||n.call(this):(s=this.disconnected)===null||s===void 0||s.call(this)),t&&(Z(this,e),pe(this))}setValue(e){if(Ot(this._$Ct))this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Mt=()=>new yi;class yi{}const Se=new WeakMap,Nt=re(class extends mi{render(i){return g}update(i,[e]){var t;const n=e!==this.U;return n&&this.U!==void 0&&this.ot(void 0),(n||this.rt!==this.lt)&&(this.U=e,this.ht=(t=i.options)===null||t===void 0?void 0:t.host,this.ot(this.lt=i.element)),g}ot(i){typeof this.U=="function"?(Se.get(this.U)!==void 0&&this.U.call(this.ht,void 0),Se.set(this.U,i),i!==void 0&&this.U.call(this.ht,i)):this.U.value=i}get rt(){var i;return typeof this.U=="function"?Se.get(this.U):(i=this.U)===null||i===void 0?void 0:i.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Re=re(class extends le{constructor(i){var e;if(super(i),i.type!==C.ATTRIBUTE||i.name!=="class"||((e=i.strings)===null||e===void 0?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(i){return" "+Object.keys(i).filter(e=>i[e]).join(" ")+" "}update(i,[e]){var t,n;if(this.et===void 0){this.et=new Set,i.strings!==void 0&&(this.st=new Set(i.strings.join(" ").split(/\s/).filter(o=>o!=="")));for(const o in e)e[o]&&!(!((t=this.st)===null||t===void 0)&&t.has(o))&&this.et.add(o);return this.render(e)}const s=i.element.classList;this.et.forEach(o=>{o in e||(s.remove(o),this.et.delete(o))});for(const o in e){const r=!!e[o];r===this.et.has(o)||((n=this.st)===null||n===void 0?void 0:n.has(o))||(r?(s.add(o),this.et.add(o)):(s.remove(o),this.et.delete(o)))}return S}});/*!
 * hotkeys-js v3.8.7
 * A simple micro-library for defining and dispatching keyboard shortcuts. It has no dependencies.
 * 
 * Copyright (c) 2021 kenny wong <wowohoo@qq.com>
 * http://jaywcjlove.github.io/hotkeys
 * 
 * Licensed under the MIT license.
 */var Ce=typeof navigator<"u"?navigator.userAgent.toLowerCase().indexOf("firefox")>0:!1;function Te(i,e,t){i.addEventListener?i.addEventListener(e,t,!1):i.attachEvent&&i.attachEvent("on".concat(e),function(){t(window.event)})}function Rt(i,e){for(var t=e.slice(0,e.length-1),n=0;n<t.length;n++)t[n]=i[t[n].toLowerCase()];return t}function Bt(i){typeof i!="string"&&(i=""),i=i.replace(/\s/g,"");for(var e=i.split(","),t=e.lastIndexOf("");t>=0;)e[t-1]+=",",e.splice(t,1),t=e.lastIndexOf("");return e}function _i(i,e){for(var t=i.length>=e.length?i:e,n=i.length>=e.length?e:i,s=!0,o=0;o<t.length;o++)n.indexOf(t[o])===-1&&(s=!1);return s}var Lt={backspace:8,tab:9,clear:12,enter:13,return:13,esc:27,escape:27,space:32,left:37,up:38,right:39,down:40,del:46,delete:46,ins:45,insert:45,home:36,end:35,pageup:33,pagedown:34,capslock:20,num_0:96,num_1:97,num_2:98,num_3:99,num_4:100,num_5:101,num_6:102,num_7:103,num_8:104,num_9:105,num_multiply:106,num_add:107,num_enter:108,num_subtract:109,num_decimal:110,num_divide:111,"\u21EA":20,",":188,".":190,"/":191,"`":192,"-":Ce?173:189,"=":Ce?61:187,";":Ce?59:186,"'":222,"[":219,"]":221,"\\":220},B={"\u21E7":16,shift:16,"\u2325":18,alt:18,option:18,"\u2303":17,ctrl:17,control:17,"\u2318":91,cmd:91,command:91},ut={16:"shiftKey",18:"altKey",17:"ctrlKey",91:"metaKey",shiftKey:16,ctrlKey:17,altKey:18,metaKey:91},A={16:!1,18:!1,17:!1,91:!1},w={};for(var he=1;he<20;he++)Lt["f".concat(he)]=111+he;var v=[],It="all",zt=[],ye=function(e){return Lt[e.toLowerCase()]||B[e.toLowerCase()]||e.toUpperCase().charCodeAt(0)};function Dt(i){It=i||"all"}function ne(){return It||"all"}function bi(){return v.slice(0)}function $i(i){var e=i.target||i.srcElement,t=e.tagName,n=!0;return(e.isContentEditable||(t==="INPUT"||t==="TEXTAREA"||t==="SELECT")&&!e.readOnly)&&(n=!1),n}function wi(i){return typeof i=="string"&&(i=ye(i)),v.indexOf(i)!==-1}function Ai(i,e){var t,n;i||(i=ne());for(var s in w)if(Object.prototype.hasOwnProperty.call(w,s))for(t=w[s],n=0;n<t.length;)t[n].scope===i?t.splice(n,1):n++;ne()===i&&Dt(e||"all")}function xi(i){var e=i.keyCode||i.which||i.charCode,t=v.indexOf(e);if(t>=0&&v.splice(t,1),i.key&&i.key.toLowerCase()==="meta"&&v.splice(0,v.length),(e===93||e===224)&&(e=91),e in A){A[e]=!1;for(var n in B)B[n]===e&&(x[n]=!1)}}function Ei(i){if(!i)Object.keys(w).forEach(function(r){return delete w[r]});else if(Array.isArray(i))i.forEach(function(r){r.key&&He(r)});else if(typeof i=="object")i.key&&He(i);else if(typeof i=="string"){for(var e=arguments.length,t=new Array(e>1?e-1:0),n=1;n<e;n++)t[n-1]=arguments[n];var s=t[0],o=t[1];typeof s=="function"&&(o=s,s=""),He({key:i,scope:s,method:o,splitKey:"+"})}}var He=function(e){var t=e.key,n=e.scope,s=e.method,o=e.splitKey,r=o===void 0?"+":o,l=Bt(t);l.forEach(function(a){var c=a.split(r),u=c.length,d=c[u-1],h=d==="*"?"*":ye(d);if(!!w[h]){n||(n=ne());var f=u>1?Rt(B,c):[];w[h]=w[h].map(function(p){var _=s?p.method===s:!0;return _&&p.scope===n&&_i(p.mods,f)?{}:p})}})};function ft(i,e,t){var n;if(e.scope===t||e.scope==="all"){n=e.mods.length>0;for(var s in A)Object.prototype.hasOwnProperty.call(A,s)&&(!A[s]&&e.mods.indexOf(+s)>-1||A[s]&&e.mods.indexOf(+s)===-1)&&(n=!1);(e.mods.length===0&&!A[16]&&!A[18]&&!A[17]&&!A[91]||n||e.shortcut==="*")&&e.method(i,e)===!1&&(i.preventDefault?i.preventDefault():i.returnValue=!1,i.stopPropagation&&i.stopPropagation(),i.cancelBubble&&(i.cancelBubble=!0))}}function pt(i){var e=w["*"],t=i.keyCode||i.which||i.charCode;if(!!x.filter.call(this,i)){if((t===93||t===224)&&(t=91),v.indexOf(t)===-1&&t!==229&&v.push(t),["ctrlKey","altKey","shiftKey","metaKey"].forEach(function(f){var p=ut[f];i[f]&&v.indexOf(p)===-1?v.push(p):!i[f]&&v.indexOf(p)>-1?v.splice(v.indexOf(p),1):f==="metaKey"&&i[f]&&v.length===3&&(i.ctrlKey||i.shiftKey||i.altKey||(v=v.slice(v.indexOf(p))))}),t in A){A[t]=!0;for(var n in B)B[n]===t&&(x[n]=!0);if(!e)return}for(var s in A)Object.prototype.hasOwnProperty.call(A,s)&&(A[s]=i[ut[s]]);i.getModifierState&&!(i.altKey&&!i.ctrlKey)&&i.getModifierState("AltGraph")&&(v.indexOf(17)===-1&&v.push(17),v.indexOf(18)===-1&&v.push(18),A[17]=!0,A[18]=!0);var o=ne();if(e)for(var r=0;r<e.length;r++)e[r].scope===o&&(i.type==="keydown"&&e[r].keydown||i.type==="keyup"&&e[r].keyup)&&ft(i,e[r],o);if(t in w){for(var l=0;l<w[t].length;l++)if((i.type==="keydown"&&w[t][l].keydown||i.type==="keyup"&&w[t][l].keyup)&&w[t][l].key){for(var a=w[t][l],c=a.splitKey,u=a.key.split(c),d=[],h=0;h<u.length;h++)d.push(ye(u[h]));d.sort().join("")===v.sort().join("")&&ft(i,a,o)}}}}function ji(i){return zt.indexOf(i)>-1}function x(i,e,t){v=[];var n=Bt(i),s=[],o="all",r=document,l=0,a=!1,c=!0,u="+";for(t===void 0&&typeof e=="function"&&(t=e),Object.prototype.toString.call(e)==="[object Object]"&&(e.scope&&(o=e.scope),e.element&&(r=e.element),e.keyup&&(a=e.keyup),e.keydown!==void 0&&(c=e.keydown),typeof e.splitKey=="string"&&(u=e.splitKey)),typeof e=="string"&&(o=e);l<n.length;l++)i=n[l].split(u),s=[],i.length>1&&(s=Rt(B,i)),i=i[i.length-1],i=i==="*"?"*":ye(i),i in w||(w[i]=[]),w[i].push({keyup:a,keydown:c,scope:o,mods:s,shortcut:n[l],method:t,key:n[l],splitKey:u});typeof r<"u"&&!ji(r)&&window&&(zt.push(r),Te(r,"keydown",function(d){pt(d)}),Te(window,"focus",function(){v=[]}),Te(r,"keyup",function(d){pt(d),xi(d)}))}var Oe={setScope:Dt,getScope:ne,deleteScope:Ai,getPressedKeyCodes:bi,isPressed:wi,filter:$i,unbind:Ei};for(var Pe in Oe)Object.prototype.hasOwnProperty.call(Oe,Pe)&&(x[Pe]=Oe[Pe]);if(typeof window<"u"){var ki=window.hotkeys;x.noConflict=function(i){return i&&window.hotkeys===x&&(window.hotkeys=ki),x},window.hotkeys=x}var ae=globalThis&&globalThis.__decorate||function(i,e,t,n){var s=arguments.length,o=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var l=i.length-1;l>=0;l--)(r=i[l])&&(o=(s<3?r(o):s>3?r(e,t,o):r(e,t))||o);return s>3&&o&&Object.defineProperty(e,t,o),o};let L=class extends P{constructor(){super(...arguments);this.placeholder="",this.hideBreadcrumbs=!1,this.breadcrumbHome="Home",this.breadcrumbs=[],this._inputRef=Mt()}render(){let e="";if(!this.hideBreadcrumbs){const t=[];for(const n of this.breadcrumbs)t.push(j`<button
            tabindex="-1"
            @click=${()=>this.selectParent(n)}
            class="breadcrumb"
          >
            ${n}
          </button>`);e=j`<div class="breadcrumb-list">
        <button
          tabindex="-1"
          @click=${()=>this.selectParent()}
          class="breadcrumb"
        >
          ${this.breadcrumbHome}
        </button>
        ${t}
      </div>`}return j`
      ${e}
      <div part="ninja-input-wrapper" class="search-wrapper">
        <input
          part="ninja-input"
          type="text"
          id="search"
          spellcheck="false"
          autocomplete="off"
          @input="${this._handleInput}"
          ${Nt(this._inputRef)}
          placeholder="${this.placeholder}"
          class="search"
        />
      </div>
    `}setSearch(e){this._inputRef.value&&(this._inputRef.value.value=e)}focusSearch(){requestAnimationFrame(()=>this._inputRef.value.focus())}_handleInput(e){const t=e.target;this.dispatchEvent(new CustomEvent("change",{detail:{search:t.value},bubbles:!1,composed:!1}))}selectParent(e){this.dispatchEvent(new CustomEvent("setParent",{detail:{parent:e},bubbles:!0,composed:!0}))}firstUpdated(){this.focusSearch()}_close(){this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0}))}};L.styles=ge`
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
    }

    .search-wrapper {
      display: flex;
      border-bottom: var(--ninja-separate-border);
    }
  `;ae([b()],L.prototype,"placeholder",void 0);ae([b({type:Boolean})],L.prototype,"hideBreadcrumbs",void 0);ae([b()],L.prototype,"breadcrumbHome",void 0);ae([b({type:Array})],L.prototype,"breadcrumbs",void 0);L=ae([me("ninja-header")],L);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Be extends le{constructor(e){if(super(e),this.it=g,e.type!==C.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===g||e==null)return this.ft=void 0,this.it=e;if(e===S)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this.ft;this.it=e;const t=[e];return t.raw=t,this.ft={_$litType$:this.constructor.resultType,strings:t,values:[]}}}Be.directiveName="unsafeHTML",Be.resultType=1;const Si=re(Be);/*! *****************************************************************************
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
***************************************************************************** */function Ci(i,e,t,n){var s=arguments.length,o=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var l=i.length-1;l>=0;l--)(r=i[l])&&(o=(s<3?r(o):s>3?r(e,t,o):r(e,t))||o);return s>3&&o&&Object.defineProperty(e,t,o),o}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */const Ti=ge`:host{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}`;/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let Le=class extends P{render(){return j`<span><slot></slot></span>`}};Le.styles=[Ti];Le=Ci([me("mwc-icon")],Le);var _e=globalThis&&globalThis.__decorate||function(i,e,t,n){var s=arguments.length,o=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var l=i.length-1;l>=0;l--)(r=i[l])&&(o=(s<3?r(o):s>3?r(e,t,o):r(e,t))||o);return s>3&&o&&Object.defineProperty(e,t,o),o};let F=class extends P{constructor(){super();this.selected=!1,this.hotKeysJoinedView=!1,this.addEventListener("click",this.click)}ensureInView(){requestAnimationFrame(()=>this.scrollIntoView({block:"nearest"}))}click(){this.dispatchEvent(new CustomEvent("actionsSelected",{detail:this.action,bubbles:!0,composed:!0}))}updated(e){e.has("selected")&&this.selected&&this.ensureInView()}render(){let e;this.action.mdIcon?e=j`<mwc-icon part="ninja-icon" class="ninja-icon">${this.action.mdIcon}</mwc-icon>`:this.action.icon&&(e=Si(this.action.icon||""));let t;this.action.hotkey&&(this.hotKeysJoinedView?t=j`<div class="ninja-hotkey">${this.action.hotkey}</div>`:t=this.action.hotkey.split("+").map(s=>j`<div class="ninja-hotkey">${s}</div>`));const n={selected:this.selected,"ninja-action":!0};return j`
      <div class="ninja-action" part="ninja-action ${this.selected?"ninja-selected":""}" class=${Re(n)}>
        ${e}
        <div class="ninja-title">${this.action.title}</div>
        ${t}
      </div>
    `}};F.styles=ge`
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
      margin-left: 0.5em;
      flex-shrink: 0;
      width: min-content;
    }

    .ninja-hotkey {
      background: var(--ninja-secondary-background-color);
      padding: 0.06em 0.25em;
      border-radius: var(--ninja-key-border-radius);
      text-transform: capitalize;
      color: var(--ninja-secondary-text-color);
      font-size: 0.75em;
      margin-left: 0.5em;
    }
  `;_e([b({type:Object})],F.prototype,"action",void 0);_e([b({type:Boolean})],F.prototype,"selected",void 0);_e([b({type:Boolean})],F.prototype,"hotKeysJoinedView",void 0);F=_e([me("ninja-action")],F);const Hi=j` <div class="modal-footer" slot="footer">
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
</div>`,Oi=ge`
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
    z-index: 1;
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
`;var y=globalThis&&globalThis.__decorate||function(i,e,t,n){var s=arguments.length,o=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var l=i.length-1;l>=0;l--)(r=i[l])&&(o=(s<3?r(o):s>3?r(e,t,o):r(e,t))||o);return s>3&&o&&Object.defineProperty(e,t,o),o};let m=class extends P{constructor(){super(...arguments);this.placeholder="Type a command or search...",this.disableHotkeys=!1,this.hideBreadcrumbs=!1,this.openHotkey="cmd+k,ctrl+k",this.navigationUpHotkey="up,shift+tab",this.navigationDownHotkey="down,tab",this.closeHotkey="esc",this.goBackHotkey="backspace",this.selectHotkey="enter",this.hotKeysJoinedView=!1,this.noAutoLoadMdIcons=!1,this.data=[],this.visible=!1,this._bump=!0,this._actionMatches=[],this._search="",this._flatData=[],this._headerRef=Mt()}open(e={}){this._bump=!0,this.visible=!0,this._headerRef.value.focusSearch(),this._actionMatches.length>0&&(this._selected=this._actionMatches[0]),this.setParent(e.parent)}close(){this._bump=!1,this.visible=!1}setParent(e){e?this._currentRoot=e:this._currentRoot=void 0,this._selected=void 0,this._search="",this._headerRef.value.setSearch("")}get breadcrumbs(){var e;const t=[];let n=(e=this._selected)===null||e===void 0?void 0:e.parent;if(n)for(t.push(n);n;){const s=this._flatData.find(o=>o.id===n);s?.parent&&t.push(s.parent),n=s?s.parent:void 0}return t.reverse()}connectedCallback(){super.connectedCallback(),this.noAutoLoadMdIcons||document.fonts.load("24px Material Icons","apps").then(()=>{}),this._registerInternalHotkeys()}_flattern(e,t){let n=[];return e||(e=[]),e.map(s=>{const o=s.children&&s.children.some(l=>typeof l=="string"),r={...s,parent:s.parent||t};return o||(r.children&&r.children.length&&(t=s.id,n=[...n,...r.children]),r.children=r.children?r.children.map(l=>l.id):[]),r}).concat(n.length?this._flattern(n,t):n)}update(e){e.has("data")&&!this.disableHotkeys&&(this._flatData=this._flattern(this.data),this._flatData.filter(t=>!!t.hotkey).forEach(t=>{x(t.hotkey,n=>{n.preventDefault(),t.handler&&t.handler(t)})})),super.update(e)}_registerInternalHotkeys(){this.openHotkey&&x(this.openHotkey,e=>{e.preventDefault(),this.visible?this.close():this.open()}),this.selectHotkey&&x(this.selectHotkey,e=>{!this.visible||(e.preventDefault(),this._actionSelected(this._actionMatches[this._selectedIndex]))}),this.goBackHotkey&&x(this.goBackHotkey,e=>{!this.visible||this._search||(e.preventDefault(),this._goBack())}),this.navigationDownHotkey&&x(this.navigationDownHotkey,e=>{!this.visible||(e.preventDefault(),this._selectedIndex>=this._actionMatches.length-1?this._selected=this._actionMatches[0]:this._selected=this._actionMatches[this._selectedIndex+1])}),this.navigationUpHotkey&&x(this.navigationUpHotkey,e=>{!this.visible||(e.preventDefault(),this._selectedIndex===0?this._selected=this._actionMatches[this._actionMatches.length-1]:this._selected=this._actionMatches[this._selectedIndex-1])}),this.closeHotkey&&x(this.closeHotkey,()=>{!this.visible||this.close()})}_actionFocused(e,t){this._selected=e,t.target.ensureInView()}_onTransitionEnd(){this._bump=!1}_goBack(){const e=this.breadcrumbs.length>1?this.breadcrumbs[this.breadcrumbs.length-2]:void 0;this.setParent(e)}render(){const e={bump:this._bump,"modal-content":!0},t={visible:this.visible,modal:!0},s=this._flatData.filter(l=>{var a;const c=new RegExp(this._search,"gi"),u=l.title.match(c)||((a=l.keywords)===null||a===void 0?void 0:a.match(c));return(!this._currentRoot&&this._search||l.parent===this._currentRoot)&&u}).reduce((l,a)=>l.set(a.section,[...l.get(a.section)||[],a]),new Map);this._actionMatches=[...s.values()].flat(),this._actionMatches.length>0&&this._selectedIndex===-1&&(this._selected=this._actionMatches[0]),this._actionMatches.length===0&&(this._selected=void 0);const o=l=>j` ${ui(l,a=>a.id,a=>{var c;return j`<ninja-action
            exportparts="ninja-action,ninja-selected,ninja-icon"
            .selected=${fi(a.id===((c=this._selected)===null||c===void 0?void 0:c.id))}
            .hotKeysJoinedView=${this.hotKeysJoinedView}
            @mouseover=${u=>this._actionFocused(a,u)}
            @actionsSelected=${u=>this._actionSelected(u.detail)}
            .action=${a}
          ></ninja-action>`})}`,r=[];return s.forEach((l,a)=>{const c=a?j`<div class="group-header">${a}</div>`:void 0;r.push(j`${c}${o(l)}`)}),j`
      <div @click=${this._overlayClick} class=${Re(t)}>
        <div class=${Re(e)} @animationend=${this._onTransitionEnd}>
          <ninja-header
            exportparts="ninja-input,ninja-input-wrapper"
            ${Nt(this._headerRef)}
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
          <slot name="footer"> ${Hi} </slot>
        </div>
      </div>
    `}get _selectedIndex(){return this._selected?this._actionMatches.indexOf(this._selected):-1}_actionSelected(e){var t;if(this.dispatchEvent(new CustomEvent("selected",{detail:{search:this._search,action:e},bubbles:!0,composed:!0})),!!e){if(e.children&&((t=e.children)===null||t===void 0?void 0:t.length)>0&&(this._currentRoot=e.id,this._search=""),this._headerRef.value.setSearch(""),this._headerRef.value.focusSearch(),e.handler){const n=e.handler(e);n?.keepOpen||this.close()}this._bump=!0}}async _handleInput(e){this._search=e.detail.search,await this.updateComplete,this.dispatchEvent(new CustomEvent("change",{detail:{search:this._search,actions:this._actionMatches},bubbles:!0,composed:!0}))}_overlayClick(e){var t;!((t=e.target)===null||t===void 0)&&t.classList.contains("modal")&&this.close()}};m.styles=[Oi];y([b({type:String})],m.prototype,"placeholder",void 0);y([b({type:Boolean})],m.prototype,"disableHotkeys",void 0);y([b({type:Boolean})],m.prototype,"hideBreadcrumbs",void 0);y([b()],m.prototype,"openHotkey",void 0);y([b()],m.prototype,"navigationUpHotkey",void 0);y([b()],m.prototype,"navigationDownHotkey",void 0);y([b()],m.prototype,"closeHotkey",void 0);y([b()],m.prototype,"goBackHotkey",void 0);y([b()],m.prototype,"selectHotkey",void 0);y([b({type:Boolean})],m.prototype,"hotKeysJoinedView",void 0);y([b({type:Boolean})],m.prototype,"noAutoLoadMdIcons",void 0);y([b({type:Array,hasChanged(){return!0}})],m.prototype,"data",void 0);y([U()],m.prototype,"visible",void 0);y([U()],m.prototype,"_bump",void 0);y([U()],m.prototype,"_actionMatches",void 0);y([U()],m.prototype,"_search",void 0);y([U()],m.prototype,"_currentRoot",void 0);y([U()],m.prototype,"_flatData",void 0);y([U()],m.prototype,"breadcrumbs",null);y([U()],m.prototype,"_selected",void 0);m=y([me("ninja-keys")],m);export{Pi as a,Ni as b,Ue as c,Li as d,Mi as g,Zt as i,Ui as o,Ri as r,Ii as s,Bi as t};
