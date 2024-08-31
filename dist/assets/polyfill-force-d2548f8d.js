import{r as sr}from"./tslib.es6-419af784.js";import{R as fr,L as Oe,a as gr,g as vr,r as mr}from"./index-4e9ec87a.js";function Dr(e,r){for(var n=0;n<r.length;n++){const t=r[n];if(typeof t!="string"&&!Array.isArray(t)){for(const a in t)if(a!=="default"&&!(a in e)){const u=Object.getOwnPropertyDescriptor(t,a);u&&Object.defineProperty(e,a,u.get?u:{enumerable:!0,get:()=>t[a]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var ae={},H={};function Be(e){return Intl.getCanonicalLocales(e)}function dr(e,r){var n=r.zoneNames,t=r.uppercaseLinks,a=e.toUpperCase(),u=n.reduce(function(l,c){return l[c.toUpperCase()]=c,l},{}),i=t[a]||u[a];return i==="Etc/UTC"||i==="Etc/GMT"?"UTC":i}function oe(e){if(typeof e=="symbol")throw TypeError("Cannot convert a Symbol value to a string");return String(e)}function Me(e){if(e===void 0)return NaN;if(e===null)return 0;if(typeof e=="boolean")return e?1:0;if(typeof e=="number")return e;if(typeof e=="symbol"||typeof e=="bigint")throw new TypeError("Cannot convert symbol/bigint to number");return Number(e)}function pr(e){var r=Me(e);if(isNaN(r)||L(r,-0))return 0;if(isFinite(r))return r;var n=Math.floor(Math.abs(r));return r<0&&(n=-n),L(n,-0)?0:n}function yr(e){return isFinite(e)?Math.abs(e)>8.64*1e15?NaN:pr(e):NaN}function ce(e){if(e==null)throw new TypeError("undefined/null cannot be converted to object");return Object(e)}function L(e,r){return Object.is?Object.is(e,r):e===r?e!==0||1/e===1/r:e!==e&&r!==r}function Re(e){return new Array(e)}function _e(e,r){return Object.prototype.hasOwnProperty.call(e,r)}function br(e){if(e===null)return"Null";if(typeof e>"u")return"Undefined";if(typeof e=="function"||typeof e=="object")return"Object";if(typeof e=="number")return"Number";if(typeof e=="boolean")return"Boolean";if(typeof e=="string")return"String";if(typeof e=="symbol")return"Symbol";if(typeof e=="bigint")return"BigInt"}var je=864e5;function z(e,r){return e-Math.floor(e/r)*r}function se(e){return Math.floor(e/je)}function hr(e){return z(se(e)+4,7)}function ke(e){return Date.UTC(e,0)/je}function Fr(e){return Date.UTC(e,0)}function fe(e){return new Date(e).getUTCFullYear()}function Ue(e){return e%4!==0?365:e%100!==0?366:e%400!==0?365:366}function ge(e){return se(e)-ke(fe(e))}function ve(e){return Ue(fe(e))===365?0:1}function ze(e){var r=ge(e),n=ve(e);if(r>=0&&r<31)return 0;if(r<59+n)return 1;if(r<90+n)return 2;if(r<120+n)return 3;if(r<151+n)return 4;if(r<181+n)return 5;if(r<212+n)return 6;if(r<243+n)return 7;if(r<273+n)return 8;if(r<304+n)return 9;if(r<334+n)return 10;if(r<365+n)return 11;throw new Error("Invalid time")}function Er(e){var r=ge(e),n=ze(e),t=ve(e);if(n===0)return r+1;if(n===1)return r-30;if(n===2)return r-58-t;if(n===3)return r-89-t;if(n===4)return r-119-t;if(n===5)return r-150-t;if(n===6)return r-180-t;if(n===7)return r-211-t;if(n===8)return r-242-t;if(n===9)return r-272-t;if(n===10)return r-303-t;if(n===11)return r-333-t;throw new Error("Invalid time")}var Sr=24,Ge=60,$e=60,me=1e3,xe=me*$e,Cr=xe*Ge;function wr(e){return z(Math.floor(e/Cr),Sr)}function Ir(e){return z(Math.floor(e/xe),Ge)}function Nr(e){return z(Math.floor(e/me),$e)}function Or(e){return typeof e=="function"}function Ar(e,r,n){if(!Or(e))return!1;if(n!=null&&n.boundTargetFunction){var t=n==null?void 0:n.boundTargetFunction;return r instanceof t}if(typeof r!="object")return!1;var a=e.prototype;if(typeof a!="object")throw new TypeError("OrdinaryHasInstance called on an object with an invalid prototype property.");return Object.prototype.isPrototypeOf.call(a,r)}function Tr(e){return z(e,me)}function Ye(e){return typeof e>"u"?Object.create(null):ce(e)}function U(e,r,n,t){if(e===void 0)return t;var a=Number(e);if(isNaN(a)||a<r||a>n)throw new RangeError("".concat(a," is outside of range [").concat(r,", ").concat(n,"]"));return Math.floor(a)}function De(e,r,n,t,a){var u=e[r];return U(u,n,t,a)}function F(e,r,n,t,a){if(typeof e!="object")throw new TypeError("Options must be an object");var u=e[r];if(u!==void 0){if(n!=="boolean"&&n!=="string")throw new TypeError("invalid type");if(n==="boolean"&&(u=!!u),n==="string"&&(u=oe(u)),t!==void 0&&!t.filter(function(i){return i==u}).length)throw new RangeError("".concat(u," is not within ").concat(t.join(", ")));return u}return a}function Pr(e){if(typeof e>"u")return Object.create(null);if(typeof e=="object")return e;throw new TypeError("Options must be an object")}function Ze(e,r,n,t,a,u){var i=e[r];if(i===void 0)return u;if(i===!0)return t;var l=!!i;if(l===!1)return a;if(i=oe(i),i==="true"||i==="false")return u;if((n||[]).indexOf(i)===-1)throw new RangeError("Invalid value ".concat(i));return i}var qe=["angle-degree","area-acre","area-hectare","concentr-percent","digital-bit","digital-byte","digital-gigabit","digital-gigabyte","digital-kilobit","digital-kilobyte","digital-megabit","digital-megabyte","digital-petabyte","digital-terabit","digital-terabyte","duration-day","duration-hour","duration-millisecond","duration-minute","duration-month","duration-second","duration-week","duration-year","length-centimeter","length-foot","length-inch","length-kilometer","length-meter","length-mile-scandinavian","length-mile","length-millimeter","length-yard","mass-gram","mass-kilogram","mass-ounce","mass-pound","mass-stone","temperature-celsius","temperature-fahrenheit","volume-fluid-ounce","volume-gallon","volume-liter","volume-milliliter"];function He(e){return e.slice(e.indexOf("-")+1)}var Ve=qe.map(He);function $(e){return Ve.indexOf(e)>-1}function Lr(e,r){var n=r.zoneNamesFromData,t=r.uppercaseLinks,a=e.toUpperCase(),u=new Set,i=new Set;return n.map(function(l){return l.toUpperCase()}).forEach(function(l){return u.add(l)}),Object.keys(t).forEach(function(l){i.add(l.toUpperCase()),u.add(t[l].toUpperCase())}),u.has(a)||i.has(a)}function Br(e){return e.replace(/([a-z])/g,function(r,n){return n.toUpperCase()})}var Mr=/[^A-Z]/;function We(e){return e=Br(e),!(e.length!==3||Mr.test(e))}function Rr(e){return e.replace(/([A-Z])/g,function(r,n){return n.toLowerCase()})}function Ke(e){if(e=Rr(e),$(e))return!0;var r=e.split("-per-");if(r.length!==2)return!1;var n=r[0],t=r[1];return!(!$(n)||!$(t))}function _r(e,r,n,t){if(e===r)return r;if(t===void 0)throw new Error("unsignedRoundingMode is mandatory");if(t==="zero")return r;if(t==="infinity")return n;var a=e-r,u=n-e;if(a<u)return r;if(u<a)return n;if(a!==u)throw new Error("Unexpected error");if(t==="half-zero")return r;if(t==="half-infinity")return n;if(t!=="half-even")throw new Error("Unexpected value for unsignedRoundingMode: ".concat(t));var i=r/(n-r)%2;return i===0?r:n}function jr(e){return e}function Y(e){return Math.floor(Math.log(e)*Math.LOG10E)}function T(e,r){if(typeof e.repeat=="function")return e.repeat(r);for(var n=new Array(r),t=0;t<n.length;t++)n[t]=e;return n.join("")}function Xe(e,r,n,t){e.get(r)||e.set(r,Object.create(null));var a=e.get(r);a[n]=t}function kr(e,r,n){for(var t=0,a=Object.keys(n);t<a.length;t++){var u=a[t];Xe(e,r,u,n[u])}}function Ur(e,r,n){return Je(e,r,n)[n]}function Je(e,r){for(var n=[],t=2;t<arguments.length;t++)n[t-2]=arguments[t];var a=e.get(r);if(!a)throw new TypeError("".concat(r," InternalSlot has not been initialized"));return n.reduce(function(u,i){return u[i]=a[i],u},Object.create(null))}function zr(e){return e.type==="literal"}function Gr(e,r,n){var t=n.value;Object.defineProperty(e,r,{configurable:!0,enumerable:!1,writable:!0,value:t})}function $r(e,r,n){Object.defineProperty(e,r,{configurable:!0,enumerable:!0,writable:!0,value:n})}function de(e,r,n){if(n===void 0&&(n=Error),!e)throw new n(r)}function ue(e,r,n){var t=n.getInternalSlots,a=t(e),u=a.notation,i=a.dataLocaleData,l=a.numberingSystem;switch(u){case"standard":return 0;case"scientific":return r;case"engineering":return Math.floor(r/3)*3;default:{var c=a.compactDisplay,f=a.style,g=a.currencyDisplay,s=void 0;if(f==="currency"&&g!=="name"){var m=i.numbers.currency[l]||i.numbers.currency[i.numbers.nu[0]];s=m.short}else{var v=i.numbers.decimal[l]||i.numbers.decimal[i.numbers.nu[0]];s=c==="long"?v.long:v.short}if(!s)return 0;var o=String(Math.pow(10,r)),d=Object.keys(s);if(o<d[0])return 0;if(o>d[d.length-1])return d[d.length-1].length-1;var p=d.indexOf(o);if(p===-1)return 0;var D=d[p],y=s[D].other;return y==="0"?0:D.length-s[D].other.match(/0+/)[0].length}}}function ie(e,r,n){var t=n,a,u,i;if(e===0)a=T("0",t),u=0,i=0;else{var l=e.toString(),c=l.indexOf("e"),f=l.split("e"),g=f[0],s=f[1],m=g.replace(".","");if(c>=0&&m.length<=t)u=+s,a=m+T("0",t-m.length),i=e;else{u=Y(e);var v=u-t+1,o=Math.round(D(e,v));D(o,t-1)>=10&&(u=u+1,o=Math.floor(o/10)),a=o.toString(),i=D(o,t-1-u)}}var d;if(u>=t-1?(a=a+T("0",u-t+1),d=u+1):u>=0?(a="".concat(a.slice(0,u+1),".").concat(a.slice(u+1)),d=u+1):(a="0.".concat(T("0",-u-1)).concat(a),d=1),a.indexOf(".")>=0&&n>r){for(var p=n-r;p>0&&a[a.length-1]==="0";)a=a.slice(0,-1),p--;a[a.length-1]==="."&&(a=a.slice(0,-1))}return{formattedString:a,roundedNumber:i,integerDigitsCount:d};function D(y,E){return E<0?y*Math.pow(10,-E):y/Math.pow(10,E)}}function Z(e,r,n){var t=n,a=Math.round(e*Math.pow(10,t)),u=a/Math.pow(10,t),i;if(a<1e21)i=a.toString();else{i=a.toString();var l=i.split("e"),c=l[0],f=l[1];i=c.replace(".",""),i=i+T("0",Math.max(+f-i.length+1,0))}var g;if(t!==0){var s=i.length;if(s<=t){var m=T("0",t+1-s);i=m+i,s=t+1}var v=i.slice(0,s-t),o=i.slice(s-t);i="".concat(v,".").concat(o),g=v.length}else g=i.length;for(var d=n-r;d>0&&i[i.length-1]==="0";)i=i.slice(0,-1),d--;return i[i.length-1]==="."&&(i=i.slice(0,-1)),{formattedString:i,roundedNumber:u,integerDigitsCount:g}}function pe(e,r){var n=r<0||L(r,-0);n&&(r=-r);var t,a=e.roundingType;switch(a){case"significantDigits":t=ie(r,e.minimumSignificantDigits,e.maximumSignificantDigits);break;case"fractionDigits":t=Z(r,e.minimumFractionDigits,e.maximumFractionDigits);break;default:t=ie(r,1,2),t.integerDigitsCount>1&&(t=Z(r,0,0));break}r=t.roundedNumber;var u=t.formattedString,i=t.integerDigitsCount,l=e.minimumIntegerDigits;if(i<l){var c=T("0",l-i);u=c+u}return n&&(r=-r),{roundedNumber:r,formattedString:u}}function Qe(e,r,n){var t=n.getInternalSlots;if(r===0)return[0,0];r<0&&(r=-r);var a=Y(r),u=ue(e,a,{getInternalSlots:t});r=u<0?r*Math.pow(10,-u):r/Math.pow(10,u);var i=pe(t(e),r);if(i.roundedNumber===0)return[u,a];var l=Y(i.roundedNumber);return l===a-u?[u,a]:[ue(e,a+1,{getInternalSlots:t}),a+1]}function er(e,r){var n=r.currencyDigitsData;return _e(n,e)?n[e]:2}function rr(e,r,n){var t=n.getInternalSlots,a=t(e),u=a.dataLocaleData.numbers.symbols[a.numberingSystem],i=u.approximatelySign;return r.push({type:"approximatelySign",value:i}),r}var nr=/[\$\+<->\^`\|~\xA2-\xA6\xA8\xA9\xAC\xAE-\xB1\xB4\xB8\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0384\u0385\u03F6\u0482\u058D-\u058F\u0606-\u0608\u060B\u060E\u060F\u06DE\u06E9\u06FD\u06FE\u07F6\u07FE\u07FF\u09F2\u09F3\u09FA\u09FB\u0AF1\u0B70\u0BF3-\u0BFA\u0C7F\u0D4F\u0D79\u0E3F\u0F01-\u0F03\u0F13\u0F15-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE\u0FCF\u0FD5-\u0FD8\u109E\u109F\u1390-\u1399\u166D\u17DB\u1940\u19DE-\u19FF\u1B61-\u1B6A\u1B74-\u1B7C\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2044\u2052\u207A-\u207C\u208A-\u208C\u20A0-\u20BF\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A\u218B\u2190-\u2307\u230C-\u2328\u232B-\u2426\u2440-\u244A\u249C-\u24E9\u2500-\u2767\u2794-\u27C4\u27C7-\u27E5\u27F0-\u2982\u2999-\u29D7\u29DC-\u29FB\u29FE-\u2B73\u2B76-\u2B95\u2B97-\u2BFF\u2CE5-\u2CEA\u2E50\u2E51\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFB\u3004\u3012\u3013\u3020\u3036\u3037\u303E\u303F\u309B\u309C\u3190\u3191\u3196-\u319F\u31C0-\u31E3\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA700-\uA716\uA720\uA721\uA789\uA78A\uA828-\uA82B\uA836-\uA839\uAA77-\uAA79\uAB5B\uAB6A\uAB6B\uFB29\uFBB2-\uFBC1\uFDFC\uFDFD\uFE62\uFE64-\uFE66\uFE69\uFF04\uFF0B\uFF1C-\uFF1E\uFF3E\uFF40\uFF5C\uFF5E\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD]|\uD800[\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC]|\uD802[\uDC77\uDC78\uDEC8]|\uD805\uDF3F|\uD807[\uDFD5-\uDFF1]|\uD81A[\uDF3C-\uDF3F\uDF45]|\uD82F\uDC9C|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDE8\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85\uDE86]|\uD838[\uDD4F\uDEFF]|\uD83B[\uDCAC\uDCB0\uDD2E\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED7\uDEE0-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF73\uDF80-\uDFD8\uDFE0-\uDFEB]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0\uDCB1\uDD00-\uDD78\uDD7A-\uDDCB\uDDCD-\uDE53\uDE60-\uDE6D\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6\uDF00-\uDF92\uDF94-\uDFCA]/,xr={adlm:["𞥐","𞥑","𞥒","𞥓","𞥔","𞥕","𞥖","𞥗","𞥘","𞥙"],ahom:["𑜰","𑜱","𑜲","𑜳","𑜴","𑜵","𑜶","𑜷","𑜸","𑜹"],arab:["٠","١","٢","٣","٤","٥","٦","٧","٨","٩"],arabext:["۰","۱","۲","۳","۴","۵","۶","۷","۸","۹"],bali:["᭐","᭑","᭒","᭓","᭔","᭕","᭖","᭗","᭘","᭙"],beng:["০","১","২","৩","৪","৫","৬","৭","৮","৯"],bhks:["𑱐","𑱑","𑱒","𑱓","𑱔","𑱕","𑱖","𑱗","𑱘","𑱙"],brah:["𑁦","𑁧","𑁨","𑁩","𑁪","𑁫","𑁬","𑁭","𑁮","𑁯"],cakm:["𑄶","𑄷","𑄸","𑄹","𑄺","𑄻","𑄼","𑄽","𑄾","𑄿"],cham:["꩐","꩑","꩒","꩓","꩔","꩕","꩖","꩗","꩘","꩙"],deva:["०","१","२","३","४","५","६","७","८","९"],diak:["𑥐","𑥑","𑥒","𑥓","𑥔","𑥕","𑥖","𑥗","𑥘","𑥙"],fullwide:["０","１","２","３","４","５","６","７","８","９"],gong:["𑶠","𑶡","𑶢","𑶣","𑶤","𑶥","𑶦","𑶧","𑶨","𑶩"],gonm:["𑵐","𑵑","𑵒","𑵓","𑵔","𑵕","𑵖","𑵗","𑵘","𑵙"],gujr:["૦","૧","૨","૩","૪","૫","૬","૭","૮","૯"],guru:["੦","੧","੨","੩","੪","੫","੬","੭","੮","੯"],hanidec:["〇","一","二","三","四","五","六","七","八","九"],hmng:["𖭐","𖭑","𖭒","𖭓","𖭔","𖭕","𖭖","𖭗","𖭘","𖭙"],hmnp:["𞅀","𞅁","𞅂","𞅃","𞅄","𞅅","𞅆","𞅇","𞅈","𞅉"],java:["꧐","꧑","꧒","꧓","꧔","꧕","꧖","꧗","꧘","꧙"],kali:["꤀","꤁","꤂","꤃","꤄","꤅","꤆","꤇","꤈","꤉"],khmr:["០","១","២","៣","៤","៥","៦","៧","៨","៩"],knda:["೦","೧","೨","೩","೪","೫","೬","೭","೮","೯"],lana:["᪀","᪁","᪂","᪃","᪄","᪅","᪆","᪇","᪈","᪉"],lanatham:["᪐","᪑","᪒","᪓","᪔","᪕","᪖","᪗","᪘","᪙"],laoo:["໐","໑","໒","໓","໔","໕","໖","໗","໘","໙"],lepc:["᪐","᪑","᪒","᪓","᪔","᪕","᪖","᪗","᪘","᪙"],limb:["᥆","᥇","᥈","᥉","᥊","᥋","᥌","᥍","᥎","᥏"],mathbold:["𝟎","𝟏","𝟐","𝟑","𝟒","𝟓","𝟔","𝟕","𝟖","𝟗"],mathdbl:["𝟘","𝟙","𝟚","𝟛","𝟜","𝟝","𝟞","𝟟","𝟠","𝟡"],mathmono:["𝟶","𝟷","𝟸","𝟹","𝟺","𝟻","𝟼","𝟽","𝟾","𝟿"],mathsanb:["𝟬","𝟭","𝟮","𝟯","𝟰","𝟱","𝟲","𝟳","𝟴","𝟵"],mathsans:["𝟢","𝟣","𝟤","𝟥","𝟦","𝟧","𝟨","𝟩","𝟪","𝟫"],mlym:["൦","൧","൨","൩","൪","൫","൬","൭","൮","൯"],modi:["𑙐","𑙑","𑙒","𑙓","𑙔","𑙕","𑙖","𑙗","𑙘","𑙙"],mong:["᠐","᠑","᠒","᠓","᠔","᠕","᠖","᠗","᠘","᠙"],mroo:["𖩠","𖩡","𖩢","𖩣","𖩤","𖩥","𖩦","𖩧","𖩨","𖩩"],mtei:["꯰","꯱","꯲","꯳","꯴","꯵","꯶","꯷","꯸","꯹"],mymr:["၀","၁","၂","၃","၄","၅","၆","၇","၈","၉"],mymrshan:["႐","႑","႒","႓","႔","႕","႖","႗","႘","႙"],mymrtlng:["꧰","꧱","꧲","꧳","꧴","꧵","꧶","꧷","꧸","꧹"],newa:["𑑐","𑑑","𑑒","𑑓","𑑔","𑑕","𑑖","𑑗","𑑘","𑑙"],nkoo:["߀","߁","߂","߃","߄","߅","߆","߇","߈","߉"],olck:["᱐","᱑","᱒","᱓","᱔","᱕","᱖","᱗","᱘","᱙"],orya:["୦","୧","୨","୩","୪","୫","୬","୭","୮","୯"],osma:["𐒠","𐒡","𐒢","𐒣","𐒤","𐒥","𐒦","𐒧","𐒨","𐒩"],rohg:["𐴰","𐴱","𐴲","𐴳","𐴴","𐴵","𐴶","𐴷","𐴸","𐴹"],saur:["꣐","꣑","꣒","꣓","꣔","꣕","꣖","꣗","꣘","꣙"],segment:["🯰","🯱","🯲","🯳","🯴","🯵","🯶","🯷","🯸","🯹"],shrd:["𑇐","𑇑","𑇒","𑇓","𑇔","𑇕","𑇖","𑇗","𑇘","𑇙"],sind:["𑋰","𑋱","𑋲","𑋳","𑋴","𑋵","𑋶","𑋷","𑋸","𑋹"],sinh:["෦","෧","෨","෩","෪","෫","෬","෭","෮","෯"],sora:["𑃰","𑃱","𑃲","𑃳","𑃴","𑃵","𑃶","𑃷","𑃸","𑃹"],sund:["᮰","᮱","᮲","᮳","᮴","᮵","᮶","᮷","᮸","᮹"],takr:["𑛀","𑛁","𑛂","𑛃","𑛄","𑛅","𑛆","𑛇","𑛈","𑛉"],talu:["᧐","᧑","᧒","᧓","᧔","᧕","᧖","᧗","᧘","᧙"],tamldec:["௦","௧","௨","௩","௪","௫","௬","௭","௮","௯"],telu:["౦","౧","౨","౩","౪","౫","౬","౭","౮","౯"],thai:["๐","๑","๒","๓","๔","๕","๖","๗","๘","๙"],tibt:["༠","༡","༢","༣","༤","༥","༦","༧","༨","༩"],tirh:["𑓐","𑓑","𑓒","𑓓","𑓔","𑓕","𑓖","𑓗","𑓘","𑓙"],vaii:["ᘠ","ᘡ","ᘢ","ᘣ","ᘤ","ᘥ","ᘦ","ᘧ","ᘨ","ᘩ"],wara:["𑣠","𑣡","𑣢","𑣣","𑣤","𑣥","𑣦","𑣧","𑣨","𑣩"],wcho:["𞋰","𞋱","𞋲","𞋳","𞋴","𞋵","𞋶","𞋷","𞋸","𞋹"]},Yr=new RegExp("^".concat(nr.source)),Zr=new RegExp("".concat(nr.source,"$")),Ae=/[#0](?:[\.,][#0]+)*/g;function tr(e,r,n,t){var a=e.sign,u=e.exponent,i=e.magnitude,l=t.notation,c=t.style,f=t.numberingSystem,g=r.numbers.nu[0],s=null;l==="compact"&&i&&(s=Hr(e,n,r,c,t.compactDisplay,t.currencyDisplay,f));var m;if(c==="currency"&&t.currencyDisplay!=="name"){var v=r.currencies[t.currency];if(v)switch(t.currencyDisplay){case"code":m=t.currency;break;case"symbol":m=v.symbol;break;default:m=v.narrow;break}else m=t.currency}var o;if(s)o=s;else if(c==="decimal"||c==="unit"||c==="currency"&&t.currencyDisplay==="name"){var d=r.numbers.decimal[f]||r.numbers.decimal[g];o=x(d.standard,a)}else if(c==="currency"){var p=r.numbers.currency[f]||r.numbers.currency[g];o=x(p[t.currencySign],a)}else{var D=r.numbers.percent[f]||r.numbers.percent[g];o=x(D,a)}var y=Ae.exec(o)[0];if(o=o.replace(Ae,"{0}").replace(/'(.)'/g,"$1"),c==="currency"&&t.currencyDisplay!=="name"){var p=r.numbers.currency[f]||r.numbers.currency[g],E=p.currencySpacing.afterInsertBetween;E&&!Zr.test(m)&&(o=o.replace("¤{0}","¤".concat(E,"{0}")));var C=p.currencySpacing.beforeInsertBetween;C&&!Yr.test(m)&&(o=o.replace("{0}¤","{0}".concat(C,"¤")))}for(var S=o.split(/({c:[^}]+}|\{0\}|[¤%\-\+])/g),b=[],N=r.numbers.symbols[f]||r.numbers.symbols[g],I=0,A=S;I<A.length;I++){var h=A[I];if(h)switch(h){case"{0}":{b.push.apply(b,qr(N,e,l,u,f,!s&&!!t.useGrouping,y,c));break}case"-":b.push({type:"minusSign",value:N.minusSign});break;case"+":b.push({type:"plusSign",value:N.plusSign});break;case"%":b.push({type:"percentSign",value:N.percentSign});break;case"¤":b.push({type:"currency",value:m});break;default:/^\{c:/.test(h)?b.push({type:"compact",value:h.substring(3,h.length-1)}):b.push({type:"literal",value:h});break}}switch(c){case"currency":if(t.currencyDisplay==="name"){var O=(r.numbers.currency[f]||r.numbers.currency[g]).unitPattern,J=void 0,be=r.currencies[t.currency];be?J=R(n,e.roundedNumber*Math.pow(10,u),be.displayName):J=t.currency;for(var lr=O.split(/(\{[01]\})/g),w=[],Q=0,he=lr;Q<he.length;Q++){var h=he[Q];switch(h){case"{0}":w.push.apply(w,b);break;case"{1}":w.push({type:"currency",value:J});break;default:h&&w.push({type:"literal",value:h});break}}return w}else return b;case"unit":{var ee=t.unit,_=t.unitDisplay,Fe=r.units.simple[ee],O=void 0;if(Fe)O=R(n,e.roundedNumber*Math.pow(10,u),r.units.simple[ee][_]);else{var Ee=ee.split("-per-"),Se=Ee[0],Ce=Ee[1];Fe=r.units.simple[Se];var we=R(n,e.roundedNumber*Math.pow(10,u),r.units.simple[Se][_]),Ie=r.units.simple[Ce].perUnit[_];if(Ie)O=Ie.replace("{0}",we);else{var or=r.units.compound.per[_],cr=R(n,1,r.units.simple[Ce][_]);O=O=or.replace("{0}",we).replace("{1}",cr.replace("{0}",""))}}for(var w=[],re=0,Ne=O.split(/(\s*\{0\}\s*)/);re<Ne.length;re++){var h=Ne[re],j=/^(\s*)\{0\}(\s*)$/.exec(h);j?(j[1]&&w.push({type:"literal",value:j[1]}),w.push.apply(w,b),j[2]&&w.push({type:"literal",value:j[2]})):h&&w.push({type:"unit",value:h})}return w}default:return b}}function qr(e,r,n,t,a,u,i,l){var c=[],f=r.formattedString,g=r.roundedNumber;if(isNaN(g))return[{type:"nan",value:f}];if(!isFinite(g))return[{type:"infinity",value:f}];var s=xr[a];s&&(f=f.replace(/\d/g,function(A){return s[+A]||A}));var m=f.indexOf("."),v,o;if(m>0?(v=f.slice(0,m),o=f.slice(m+1)):v=f,u&&(n!=="compact"||g>=1e4)){var d=l==="currency"&&e.currencyGroup!=null?e.currencyGroup:e.group,p=[],D=i.split(".")[0],y=D.split(","),E=3,C=3;y.length>1&&(E=y[y.length-1].length),y.length>2&&(C=y[y.length-2].length);var S=v.length-E;if(S>0){for(p.push(v.slice(S,S+E)),S-=C;S>0;S-=C)p.push(v.slice(S,S+C));p.push(v.slice(0,S+C))}else p.push(v);for(;p.length>0;){var b=p.pop();c.push({type:"integer",value:b}),p.length>0&&c.push({type:"group",value:d})}}else c.push({type:"integer",value:v});if(o!==void 0){var N=l==="currency"&&e.currencyDecimal!=null?e.currencyDecimal:e.decimal;c.push({type:"decimal",value:N},{type:"fraction",value:o})}if((n==="scientific"||n==="engineering")&&isFinite(g)){c.push({type:"exponentSeparator",value:e.exponential}),t<0&&(c.push({type:"exponentMinusSign",value:e.minusSign}),t=-t);var I=Z(t,0,0);c.push({type:"exponentInteger",value:I.formattedString})}return c}function x(e,r){e.indexOf(";")<0&&(e="".concat(e,";-").concat(e));var n=e.split(";"),t=n[0],a=n[1];switch(r){case 0:return t;case-1:return a;default:return a.indexOf("-")>=0?a.replace(/-/g,"+"):"+".concat(t)}}function Hr(e,r,n,t,a,u,i){var l,c=e.roundedNumber,f=e.sign,g=e.magnitude,s=String(Math.pow(10,g)),m=n.numbers.nu[0],v;if(t==="currency"&&u!=="name"){var o=n.numbers.currency,d=o[i]||o[m],p=(l=d.short)===null||l===void 0?void 0:l[s];if(!p)return null;v=R(r,c,p)}else{var o=n.numbers.decimal,D=o[i]||o[m],y=D[a][s];if(!y)return null;v=R(r,c,y)}return v==="0"?null:(v=x(v,f).replace(/([^\s;\-\+\d¤]+)/g,"{c:$1}").replace(/0+/,"0"),v)}function R(e,r,n){return n[e.select(r)]||n.other}function q(e,r,n){var t,a=n.getInternalSlots,u=a(e),i=u.pl,l=u.dataLocaleData,c=u.numberingSystem,f=l.numbers.symbols[c]||l.numbers.symbols[l.numbers.nu[0]],g=0,s=0,m;if(isNaN(r))m=f.nan;else if(r==Number.POSITIVE_INFINITY||r==Number.NEGATIVE_INFINITY)m=f.infinity;else{if(!L(r,-0)){if(!isFinite(r))throw new Error("Input must be a mathematical value");u.style=="percent"&&(r*=100),t=Qe(e,r,{getInternalSlots:a}),s=t[0],g=t[1],r=s<0?r*Math.pow(10,-s):r/Math.pow(10,s)}var v=pe(u,r);m=v.formattedString,r=v.roundedNumber}var o,d=u.signDisplay;switch(d){case"never":o=0;break;case"auto":L(r,0)||r>0||isNaN(r)?o=0:o=-1;break;case"always":L(r,0)||r>0||isNaN(r)?o=1:o=-1;break;default:r===0||isNaN(r)?o=0:r>0?o=1:o=-1}return tr({roundedNumber:r,formattedString:m,exponent:s,magnitude:g,sign:o},u.dataLocaleData,i,u)}function ye(e,r,n,t){var a=t.getInternalSlots;if(isNaN(r)||isNaN(n))throw new RangeError("Input must be a number");var u=[],i=q(e,r,{getInternalSlots:a}),l=q(e,n,{getInternalSlots:a});if(i===l)return rr(e,i,{getInternalSlots:a});for(var c=0,f=i;c<f.length;c++){var g=f[c];g.source="startRange"}u=u.concat(i);var s=a(e),m=s.dataLocaleData.numbers.symbols[s.numberingSystem];u.push({type:"literal",value:m.rangeSign,source:"shared"});for(var v=0,o=l;v<o.length;v++){var g=o[v];g.source="endRange"}return u=u.concat(l),u}function Vr(e,r,n,t){var a=t.getInternalSlots,u=ye(e,r,n,{getInternalSlots:a});return u.map(function(i){return i.value}).join("")}function Wr(e,r,n,t){var a=t.getInternalSlots,u=ye(e,r,n,{getInternalSlots:a});return u.map(function(i,l){return{type:i.type,value:i.value,source:i.source,result:l.toString()}})}function Kr(e,r,n){for(var t=q(e,r,n),a=Re(0),u=0,i=t;u<i.length;u++){var l=i[u];a.push({type:l.type,value:l.value})}return a}var Xr={ceil:"zero",floor:"infinity",expand:"infinity",trunc:"zero",halfCeil:"half-zero",halfFloor:"half-infinity",halfExpand:"half-infinity",halfTrunc:"half-zero",halfEven:"half-even"},Jr={ceil:"infinity",floor:"zero",expand:"infinity",trunc:"zero",halfCeil:"half-infinity",halfFloor:"half-zero",halfExpand:"half-infinity",halfTrunc:"half-zero",halfEven:"half-even"};function Qr(e,r){return r?Xr[e]:Jr[e]}function ar(e,r,n,t,a){var u=De(r,"minimumIntegerDigits",1,21,1),i=r.minimumFractionDigits,l=r.maximumFractionDigits,c=r.minimumSignificantDigits,f=r.maximumSignificantDigits;e.minimumIntegerDigits=u;var g=F(r,"roundingPriority","string",["auto","morePrecision","lessPrecision"],"auto"),s=c!==void 0||f!==void 0,m=i!==void 0||l!==void 0,v=!0,o=!0;if(g==="auto"&&(v=s,(s||!m&&a==="compact")&&(o=!1)),v&&(s?(c=U(c,1,21,1),f=U(f,c,21,21),e.minimumSignificantDigits=c,e.maximumSignificantDigits=f):(e.minimumSignificantDigits=1,e.maximumSignificantDigits=21)),o)if(m){if(i=U(i,0,20,void 0),l=U(l,0,20,void 0),i===void 0)i=Math.min(n,l);else if(l===void 0)l=Math.max(t,i);else if(i>l)throw new RangeError("Invalid range, ".concat(i," > ").concat(l));e.minimumFractionDigits=i,e.maximumFractionDigits=l}else e.minimumFractionDigits=n,e.maximumFractionDigits=t;v||o?g==="morePrecision"?e.roundingType="morePrecision":g==="lessPrecision"?e.roundingType="lessPrecision":s?e.roundingType="significantDigits":e.roundingType="fractionDigits":(e.roundingType="morePrecision",e.minimumFractionDigits=0,e.maximumFractionDigits=0,e.minimumSignificantDigits=1,e.maximumSignificantDigits=2)}function ur(e,r,n){r===void 0&&(r=Object.create(null));var t=n.getInternalSlots,a=t(e),u=F(r,"style","string",["decimal","percent","currency","unit"],"decimal");a.style=u;var i=F(r,"currency","string",void 0,void 0);if(i!==void 0&&!We(i))throw RangeError("Malformed currency code");if(u==="currency"&&i===void 0)throw TypeError("currency cannot be undefined");var l=F(r,"currencyDisplay","string",["code","symbol","narrowSymbol","name"],"symbol"),c=F(r,"currencySign","string",["standard","accounting"],"standard"),f=F(r,"unit","string",void 0,void 0);if(f!==void 0&&!Ke(f))throw RangeError("Invalid unit argument for Intl.NumberFormat()");if(u==="unit"&&f===void 0)throw TypeError("unit cannot be undefined");var g=F(r,"unitDisplay","string",["short","narrow","long"],"short");u==="currency"&&(a.currency=i.toUpperCase(),a.currencyDisplay=l,a.currencySign=c),u==="unit"&&(a.unit=f,a.unitDisplay=g)}var Te=[1,2,5,10,20,25,50,100,200,250,500,1e3,2e3];function en(e,r,n,t){var a=t.getInternalSlots,u=t.localeData,i=t.availableLocales,l=t.numberingSystemNames,c=t.getDefaultLocale,f=t.currencyDigitsData,g=Be(r),s=Ye(n),m=Object.create(null),v=F(s,"localeMatcher","string",["lookup","best fit"],"best fit");m.localeMatcher=v;var o=F(s,"numberingSystem","string",void 0,void 0);if(o!==void 0&&l.indexOf(o)<0)throw RangeError("Invalid numberingSystems: ".concat(o));m.nu=o;var d=fr(Array.from(i),g,m,["nu"],u,c),p=u[d.dataLocale];de(!!p,"Missing locale data for ".concat(d.dataLocale));var D=a(e);D.locale=d.locale,D.dataLocale=d.dataLocale,D.numberingSystem=d.nu,D.dataLocaleData=p,ur(e,s,{getInternalSlots:a});var y=D.style,E,C;if(y==="currency"){var S=D.currency,b=er(S,{currencyDigitsData:f});E=b,C=b}else E=0,C=y==="percent"?0:3;var N=F(s,"notation","string",["standard","scientific","engineering","compact"],"standard");D.notation=N,ar(D,s,E,C,N);var I=De(s,"roundingIncrement",1,5e3,1);if(Te.indexOf(I)===-1)throw new RangeError("Invalid rounding increment value: ".concat(I,`.
Valid values are `).concat(Te,"."));if(I!==1&&D.roundingType!=="fractionDigits")throw new TypeError("For roundingIncrement > 1 only fractionDigits is a valid roundingType");if(I!==1&&D.maximumFractionDigits!==D.minimumFractionDigits)throw new RangeError("With roundingIncrement > 1, maximumFractionDigits and minimumFractionDigits must be equal.");D.roundingIncrement=I;var A=F(s,"trailingZeroDisplay","string",["auto","stripIfInteger"],"auto");D.trailingZeroDisplay=A;var h=F(s,"compactDisplay","string",["short","long"],"short"),O="auto";return N==="compact"&&(D.compactDisplay=h,O="min2"),D.useGrouping=Ze(s,"useGrouping",["min2","auto","always"],"always",!1,O),D.signDisplay=F(s,"signDisplay","string",["auto","never","always","exceptZero","negative"],"auto"),D.roundingMode=F(s,"roundingMode","string",["ceil","floor","expand","trunc","halfCeil","halfFloor","halfExpand","halfTrunc","halfEven"],"halfExpand"),e}function rn(e){for(var r=[],n=e.indexOf("{"),t=0,a=0,u=e.length;n<e.length&&n>-1;)t=e.indexOf("}",n),de(t>n,"Invalid pattern ".concat(e)),n>a&&r.push({type:"literal",value:e.substring(a,n)}),r.push({type:e.substring(n+1,t),value:void 0}),a=t+1,n=e.indexOf("{",a);return a<u&&r.push({type:"literal",value:e.substring(a,u)}),r}function nn(e,r,n){var t="best fit";return n!==void 0&&(n=ce(n),t=F(n,"localeMatcher","string",["lookup","best fit"],"best fit")),t==="best fit"?Oe(Array.from(e),r):Oe(Array.from(e),r)}(function(e){gr(r,e);function r(){var n=e!==null&&e.apply(this,arguments)||this;return n.type="MISSING_LOCALE_DATA",n}return r})(Error);function tn(e){return e.type==="MISSING_LOCALE_DATA"}var le;(function(e){e.startRange="startRange",e.shared="shared",e.endRange="endRange"})(le||(le={}));const an=Object.freeze(Object.defineProperty({__proto__:null,ApplyUnsignedRoundingMode:_r,ArrayCreate:Re,CanonicalizeLocaleList:Be,CanonicalizeTimeZoneName:dr,CoerceOptionsToObject:Ye,CollapseNumberRange:jr,ComputeExponent:Qe,ComputeExponentForMagnitude:ue,CurrencyDigits:er,DateFromTime:Er,Day:se,DayFromYear:ke,DayWithinYear:ge,DaysInYear:Ue,FormatApproximately:rr,FormatNumericRange:Vr,FormatNumericRangeToParts:Wr,FormatNumericToParts:Kr,FormatNumericToString:pe,GetNumberOption:De,GetOption:F,GetOptionsObject:Pr,GetStringOrBooleanOption:Ze,GetUnsignedRoundingMode:Qr,HasOwnProperty:_e,HourFromTime:wr,InLeapYear:ve,InitializeNumberFormat:en,IsSanctionedSimpleUnitIdentifier:$,IsValidTimeZoneName:Lr,IsWellFormedCurrencyCode:We,IsWellFormedUnitIdentifier:Ke,MinFromTime:Ir,MonthFromTime:ze,OrdinaryHasInstance:Ar,PartitionNumberPattern:q,PartitionNumberRangePattern:ye,PartitionPattern:rn,get RangePatternType(){return le},SANCTIONED_UNITS:qe,SIMPLE_UNITS:Ve,SameValue:L,SecFromTime:Nr,SetNumberFormatDigitOptions:ar,SetNumberFormatUnitOptions:ur,SupportedLocales:nn,TimeClip:yr,TimeFromYear:Fr,ToNumber:Me,ToObject:ce,ToRawFixed:Z,ToRawPrecision:ie,ToString:oe,Type:br,WeekDay:hr,YearFromTime:fe,_formatToParts:tr,createDataProperty:$r,defineProperty:Gr,getInternalSlot:Ur,getMagnitude:Y,getMultiInternalSlots:Je,invariant:de,isLiteralPart:zr,isMissingLocaleDataError:tn,msFromTime:Tr,removeUnitNamespace:He,setInternalSlot:Xe,setMultiInternalSlots:kr},Symbol.toStringTag,{value:"Module"})),V=vr(an);var W={};Object.defineProperty(W,"__esModule",{value:!0});W.InitializePluralRules=void 0;var k=V,un=mr;function ln(e,r,n,t){var a=t.availableLocales,u=t.relevantExtensionKeys,i=t.localeData,l=t.getDefaultLocale,c=t.getInternalSlots,f=(0,k.CanonicalizeLocaleList)(r),g=Object.create(null),s=(0,k.CoerceOptionsToObject)(n),m=c(e);m.initializedPluralRules=!0;var v=(0,k.GetOption)(s,"localeMatcher","string",["best fit","lookup"],"best fit");g.localeMatcher=v,m.type=(0,k.GetOption)(s,"type","string",["cardinal","ordinal"],"cardinal"),(0,k.SetNumberFormatDigitOptions)(m,s,0,3,"standard");var o=(0,un.ResolveLocale)(a,f,g,u,i,l);return m.locale=o.locale,e}W.InitializePluralRules=ln;var K={},X={};Object.defineProperty(X,"__esModule",{value:!0});X.GetOperands=void 0;var B=V;function on(e){(0,B.invariant)(typeof e=="string","GetOperands should have been called with a string");var r=(0,B.ToNumber)(e);(0,B.invariant)(isFinite(r),"n should be finite");var n=e.indexOf("."),t,a,u,i="";n===-1?(t=r,a=0,u=0):(t=e.slice(0,n),i=e.slice(n,e.length),a=(0,B.ToNumber)(i),u=i.length);var l=Math.abs((0,B.ToNumber)(t)),c,f;if(a!==0){var g=i.replace(/0+$/,"");c=g.length,f=(0,B.ToNumber)(g)}else c=0,f=0;return{Number:r,IntegerDigits:l,NumberOfFractionDigits:u,NumberOfFractionDigitsWithoutTrailing:c,FractionDigits:a,FractionDigitsWithoutTrailing:f}}X.GetOperands=on;Object.defineProperty(K,"__esModule",{value:!0});K.ResolvePlural=void 0;var M=V,cn=X;function sn(e,r,n){var t=n.getInternalSlots,a=n.PluralRuleSelect,u=t(e);if((0,M.invariant)((0,M.Type)(u)==="Object","pl has to be an object"),(0,M.invariant)("initializedPluralRules"in u,"pluralrules must be initialized"),(0,M.invariant)((0,M.Type)(r)==="Number","n must be a number"),!isFinite(r))return"other";var i=u.locale,l=u.type,c=(0,M.FormatNumericToString)(u,r),f=c.formattedString,g=(0,cn.GetOperands)(f);return a(i,l,r,g)}K.ResolvePlural=sn;var G={},Pe;function fn(){if(Pe)return G;Pe=1,Object.defineProperty(G,"__esModule",{value:!0});var e=new WeakMap;function r(n){var t=e.get(n);return t||(t=Object.create(null),e.set(n,t)),t}return G.default=r,G}Object.defineProperty(H,"__esModule",{value:!0});H.PluralRules=void 0;var ir=sr,ne=V,gn=W,vn=K,te=ir.__importDefault(fn());function Le(e,r){if(!(e instanceof P))throw new TypeError("Method Intl.PluralRules.prototype.".concat(r," called on incompatible receiver ").concat(String(e)))}function mn(e,r,n,t){var a=t.IntegerDigits,u=t.NumberOfFractionDigits,i=t.FractionDigits;return P.localeData[e].fn(u?"".concat(a,".").concat(i):a,r==="ordinal")}var P=function(){function e(r,n){var t=this&&this instanceof e?this.constructor:void 0;if(!t)throw new TypeError("Intl.PluralRules must be called with 'new'");return(0,gn.InitializePluralRules)(this,r,n,{availableLocales:e.availableLocales,relevantExtensionKeys:e.relevantExtensionKeys,localeData:e.localeData,getDefaultLocale:e.getDefaultLocale,getInternalSlots:te.default})}return e.prototype.resolvedOptions=function(){Le(this,"resolvedOptions");var r=Object.create(null),n=(0,te.default)(this);return r.locale=n.locale,r.type=n.type,["minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits"].forEach(function(t){var a=n[t];a!==void 0&&(r[t]=a)}),r.pluralCategories=ir.__spreadArray([],e.localeData[r.locale].categories[r.type],!0),r},e.prototype.select=function(r){var n=this;Le(n,"select");var t=(0,ne.ToNumber)(r);return(0,vn.ResolvePlural)(n,t,{getInternalSlots:te.default,PluralRuleSelect:mn})},e.prototype.toString=function(){return"[object Intl.PluralRules]"},e.supportedLocalesOf=function(r,n){return(0,ne.SupportedLocales)(e.availableLocales,(0,ne.CanonicalizeLocaleList)(r),n)},e.__addLocaleData=function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];for(var t=0,a=r;t<a.length;t++){var u=a[t],i=u.data,l=u.locale;e.localeData[l]=i,e.availableLocales.add(l),e.__defaultLocale||(e.__defaultLocale=l)}},e.getDefaultLocale=function(){return e.__defaultLocale},e.localeData={},e.availableLocales=new Set,e.__defaultLocale="",e.relevantExtensionKeys=[],e.polyfilled=!0,e}();H.PluralRules=P;try{typeof Symbol<"u"&&Object.defineProperty(P.prototype,Symbol.toStringTag,{value:"Intl.PluralRules",writable:!1,enumerable:!1,configurable:!0});try{Object.defineProperty(P,"length",{value:0,writable:!1,enumerable:!1,configurable:!0})}catch{}Object.defineProperty(P.prototype.constructor,"length",{value:0,writable:!1,enumerable:!1,configurable:!0}),Object.defineProperty(P.supportedLocalesOf,"length",{value:1,writable:!1,enumerable:!1,configurable:!0})}catch{}Object.defineProperty(ae,"__esModule",{value:!0});var Dn=H;Object.defineProperty(Intl,"PluralRules",{value:Dn.PluralRules,writable:!0,enumerable:!1,configurable:!0});const yn=Dr({__proto__:null,default:ae},[ae]);export{yn as p};
