(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[495],{4618:function(e,n,t){"use strict";var r=t(3823);n.default=void 0;var a,i=(a=t(7378))&&a.__esModule?a:{default:a},s=t(5732),o=t(9826),c=t(8780);var l={};function u(e,n,t,r){if(e&&s.isLocalURL(n)){e.prefetch(n,t,r).catch((function(e){0}));var a=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[n+"%"+t+(a?"%"+a:"")]=!0}}var f=function(e){var n,t=!1!==e.prefetch,a=o.useRouter(),f=i.default.useMemo((function(){var n=s.resolveHref(a,e.href,!0),t=r(n,2),i=t[0],o=t[1];return{href:i,as:e.as?s.resolveHref(a,e.as):o||i}}),[a,e.href,e.as]),p=f.href,d=f.as,h=e.children,m=e.replace,v=e.shallow,g=e.scroll,w=e.locale;"string"===typeof h&&(h=i.default.createElement("a",null,h));var b=(n=i.default.Children.only(h))&&"object"===typeof n&&n.ref,j=c.useIntersection({rootMargin:"200px"}),x=r(j,2),y=x[0],k=x[1],E=i.default.useCallback((function(e){y(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,y]);i.default.useEffect((function(){var e=k&&t&&s.isLocalURL(p),n="undefined"!==typeof w?w:a&&a.locale,r=l[p+"%"+d+(n?"%"+n:"")];e&&!r&&u(a,p,d,{locale:n})}),[d,p,k,w,t,a]);var O={ref:E,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,t,r,a,i,o,c){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&s.isLocalURL(t))&&(e.preventDefault(),null==o&&r.indexOf("#")>=0&&(o=!1),n[a?"replace":"push"](t,r,{shallow:i,locale:c,scroll:o}))}(e,a,p,d,m,v,g,w)},onMouseEnter:function(e){s.isLocalURL(p)&&(n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),u(a,p,d,{priority:!0}))}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var C="undefined"!==typeof w?w:a&&a.locale,N=a&&a.isLocaleDomain&&s.getDomainLocale(d,C,a&&a.locales,a&&a.domainLocales);O.href=N||s.addBasePath(s.addLocale(d,C,a&&a.defaultLocale))}return i.default.cloneElement(n,O)};n.default=f},8780:function(e,n,t){"use strict";var r=t(3823);Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!s,c=a.useRef(),l=a.useState(!1),u=r(l,2),f=u[0],p=u[1],d=a.useCallback((function(e){c.current&&(c.current(),c.current=void 0),t||f||e&&e.tagName&&(c.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=o.get(n);if(t)return t;var r=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return o.set(n,t={id:n,observer:a,elements:r}),t}(t),a=r.id,i=r.observer,s=r.elements;return s.set(e,n),i.observe(e),function(){s.delete(e),i.unobserve(e),0===s.size&&(i.disconnect(),o.delete(a))}}(e,(function(e){return e&&p(e)}),{rootMargin:n}))}),[t,n,f]);return a.useEffect((function(){if(!s&&!f){var e=i.requestIdleCallback((function(){return p(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[f]),[d,f]};var a=t(7378),i=t(6277),s="undefined"!==typeof IntersectionObserver;var o=new Map},8297:function(e,n,t){"use strict";t.r(n);var r=t(6952),a=t(1717),i=t(8742),s=t.n(i),o=t(7378),c=t(6677),l=t(6439),u=t(7018),f=t(4626),p=t(9894),d=t(8038),h=t(4246);function m(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function v(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?m(Object(t),!0).forEach((function(n){(0,a.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}n.default=function(){var e=(0,c.useRouter)(),n=(0,o.useState)({email:"",password:"",name:"",pwCheck:""}),t=n[0],i=n[1],m=function(e){var n=e.target,r=n.value,s=n.name;i(v(v({},t),{},(0,a.Z)({},s,r)))},g=function(){var n=(0,r.Z)(s().mark((function n(r){var a,i,o;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r.preventDefault(),t.password===t.pwCheck){n.next=3;break}return n.abrupt("return",window.alert("\ube44\ubc00\ubc88\ud638\uac00 \ub2e4\ub985\ub2c8\ub2e4."));case 3:if(""!==t.email&&""!==t.password&&""!==t.name){n.next=5;break}return n.abrupt("return",window.alert("\ube48\ud2c8\uc5c6\uc774 \uc791\uc131\ud574\uc8fc\uc2ed\uc2dc\uc624."));case 5:if(!(t.password.length<6)){n.next=7;break}return n.abrupt("return",window.alert("\ube44\ubc00\ubc88\ud638\ub294 \ucd5c\uc18c 6\uc790 \uc774\uc0c1 \uc785\ub2c8\ub2e4."));case 7:return o=(0,u.hJ)(f.db,"users"),n.next=10,(0,u.PL)(o);case 10:if(n.sent.forEach((function(e){a=e.data().name,i=e.data().email})),a!==t.name){n.next=14;break}return n.abrupt("return",window.alert("\uc774\ubbf8 \uc774\ub984\uc774 \uc788\uc2b5\ub2c8\ub2e4."));case 14:if(i!==t.email){n.next=18;break}return n.abrupt("return",window.alert("\uc774\ubbf8 \uc774\uba54\uc77c\uc774 \uc788\uc2b5\ub2c8\ub2e4."));case 18:return e.push("/home"),n.next=21,(0,l.Xb)(f.I,t.email,t.password);case 21:return n.next=23,(0,u.ET)((0,u.hJ)(f.db,"users"),{email:t.email,name:t.name});case 23:return n.abrupt("return",window.alert("\ud68c\uc6d0\uac00\uc785 \uc131\uacf5"));case 24:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return(0,o.useEffect)((function(){var n=localStorage.getItem("token");console.log(n),n&&e.push("/main")}),[]),(0,h.jsxs)(o.Fragment,{children:[(0,h.jsx)(d.default,{children:(0,h.jsx)("title",{children:"chatting"})}),(0,h.jsxs)("div",{className:"login",children:[(0,h.jsxs)("div",{className:"login-left",children:[(0,h.jsx)("img",{src:"/images/smallLogo.png",alt:"login-logo"}),(0,h.jsxs)("div",{className:"login-left-content",children:[(0,h.jsx)("p",{children:"Sign Up"}),(0,h.jsx)("div",{children:"Chat App\uc740 \uc2e4\uc2dc\uac04 \ucc44\ud305 \uae30\ubc18 \ucee4\ubba4\ub2c8\ucf00\uc774\uc158 \ud50c\ub7ab\ud3fc\uc785\ub2c8\ub2e4."}),(0,h.jsx)("div",{children:"\uc5b8\uc81c\ub4e0 \uc6d0\ud558\ub294 \uc2dc\uac04 \ud3b8\uc548\ud55c \uc7a5\uc18c\uc5d0\uc11c \uce5c\uad6c\uc640 \uc18c\ud1b5\ud558\uc138\uc694."}),(0,h.jsx)("div",{children:"\ub2f9\uc2e0\uc774 \uc26c\uc5b4\uac08 \uc218 \uc788\ub294 \uacf5\uac04 \uc18c\ud1b5\ud560 \uc218 \uc788\ub294 \uacf5\uac04 Chat App"})]})]}),(0,h.jsxs)("div",{className:"register-right",children:[(0,h.jsxs)("form",{onSubmit:g,children:[(0,h.jsx)("img",{src:"/images/loginLogo.png",alt:"right-logo"}),(0,h.jsxs)("div",{className:"register-input-container",children:[(0,h.jsx)("div",{className:"input-name",children:"\uc774\uba54\uc77c "}),(0,h.jsx)("input",{placeholder:"Enter Email",type:"email",value:t.email,name:"email",onChange:m})]}),(0,h.jsxs)("div",{className:"register-input-container",children:[(0,h.jsx)("div",{className:"input-name",children:"\ube44\ubc00\ubc88\ud638 "}),(0,h.jsx)("input",{placeholder:"Enter Password",type:"password",value:t.password,name:"password",onChange:m})]}),(0,h.jsxs)("div",{className:"register-input-container",children:[(0,h.jsx)("div",{className:"input-name",children:"\ube44\ubc00\ubc88\ud638 \ud655\uc778 "}),(0,h.jsx)("input",{placeholder:"Check Password",type:"password",value:t.pwCheck,name:"pwCheck",onChange:m})]}),(0,h.jsxs)("div",{className:"register-input-container",children:[(0,h.jsx)("div",{className:"input-name",children:"\uc774\ub984 "}),(0,h.jsx)("input",{placeholder:"Enter Username",type:"name",value:t.name,name:"name",onChange:m})]}),(0,h.jsx)("div",{style:{display:"flex",alignItems:"flex-end",justifyContent:"space-between"},children:(0,h.jsx)("button",{className:"home-button width margin",type:"submit",children:"\ud68c\uc6d0\uac00\uc785"})})]}),(0,h.jsx)(p.default,{href:"/login",children:(0,h.jsx)("a",{className:"input-link",children:"\uc774\ubbf8 \uc544\uc774\ub514\uac00 \uc788\ub2e4\uba74..."})})]})]})]})}},4626:function(e,n,t){"use strict";t.d(n,{db:function(){return o},I:function(){return c}});var r=t(2671),a=t(6439),i=t(7018);var s=function(e){try{return(0,r.Mq)()}catch(n){return(0,r.ZF)(e)}}({apiKey:"AIzaSyBi0xT-wcmJwlW5LTdw5lGUwwTgjdqwqWk",authDomain:"chatting-app-35460.firebaseapp.com",projectId:"chatting-app-35460",storageBucket:"chatting-app-35460.appspot.com",messagingSenderId:"772140384040",appId:"1:772140384040:web:4a8a69e70f8be2af5a1a1d",measurementId:"G-LQ4MXPXYFT"}),o=(0,i.ad)(s),c=(0,a.v0)(s)},6339:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/register",function(){return t(8297)}])},9894:function(e,n,t){e.exports=t(4618)}},function(e){e.O(0,[501,119,829,774,888,179],(function(){return n=6339,e(e.s=n);var n}));var n=e.O();_N_E=n}]);