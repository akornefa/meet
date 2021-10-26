(this.webpackJsonpmeet=this.webpackJsonpmeet||[]).push([[0],{42:function(e,t,n){},43:function(e,t,n){},63:function(e,t,n){},65:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(34),s=n.n(o),i=(n(41),n(42),n(6)),c=n(10),u=n(8),l=n(7),d=(n(43),n(24)),h=n(14),f=n(0),p=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={showDetails:!1},e.handleButton=function(){e.setState((function(e){return{showDetails:!e.showDetails}}))},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this,t=this.props.event;return Object(f.jsx)(h.a,{children:Object(f.jsxs)(h.a.Body,{children:[Object(f.jsxs)("div",{className:"basicInfo",children:[Object(f.jsxs)(h.a.Header,{className:"dateTime",children:[t.start.dateTime," ",t.start.timeZone]}),Object(f.jsx)(h.a.Title,{className:"summary",children:t.summary}),Object(f.jsx)(h.a.Text,{className:"location",children:t.location})]}),!1===this.state.showDetails&&Object(f.jsx)(d.a,{variant:"outline-dark",type:"submit",className:"detailsButton",onClick:function(){return e.handleButton()},children:"Show More"}),!0===this.state.showDetails&&Object(f.jsxs)("div",{children:[Object(f.jsx)("p",{className:"eventDescription",children:t.description}),Object(f.jsx)(d.a,{variant:"outline-dark",type:"submit",className:"detailsButton",onClick:function(){return e.handleButton()},children:"Show Less"})]})]})})}}]),n}(a.Component),v=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var e=this.props.events;return Object(f.jsx)("ul",{className:"EventList",children:e.map((function(e){return Object(f.jsx)("li",{className:"event",children:Object(f.jsx)(p,{event:e})},e.id)}))})}}]),n}(a.Component),m=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).getStyle=function(){return{color:a.color}},a.color=null,a}return Object(c.a)(n,[{key:"render",value:function(){return Object(f.jsx)("div",{className:"Alert",children:Object(f.jsx)("p",{style:this.getStyle(),children:this.props.text})})}}]),n}(a.Component),j=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).color="blue",a}return n}(m),b=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).color="red",a}return n}(m),g=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).color="orange",a}return n}(m),w=n(13),y=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:"",suggestions:[],showSuggestions:void 0,infoText:""},e.handleInputChanged=function(t){var n=t.target.value;e.setState({showSuggestions:!0});var a=e.props.locations.filter((function(e){return e.toUpperCase().indexOf(n.toUpperCase())>-1}));if(0!==a.length)return e.setState({query:n,suggestions:a,infoText:""});e.setState({query:n,infoText:"We can not find the city you are looking for. Please try another city"})},e.handleItemClicked=function(t){e.setState({query:t,showSuggestions:!1}),e.props.updateEvents(t)},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this;return Object(f.jsxs)(w.a,{className:"CitySearch",children:[Object(f.jsx)(j,{text:this.state.infoText}),Object(f.jsx)(w.a.Text,{children:"Search by city: "}),Object(f.jsx)("input",{type:"text",className:"city",value:this.state.query,onChange:this.handleInputChanged,onFocus:function(){e.setState({showSuggestions:!0})}}),Object(f.jsxs)("ul",{className:"suggestions",style:this.state.showSuggestions?{}:{display:"none"},children:[this.state.suggestions.map((function(t){return Object(f.jsx)("li",{onClick:function(){return e.handleItemClicked(t)},children:t},t)})),Object(f.jsx)("li",{onClick:function(){return e.handleItemClicked("all")},children:Object(f.jsx)("b",{children:"See all cities"})})]})]})}}]),n}(a.Component),x=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={eventsDisplayed:32,errorText:""},e.handleInputChanged=function(t){var n=+t.target.value;n<=0||n>=51?e.setState({errorText:"only numbers 1 through 50 are valid",eventsDisplayed:""}):(e.setState({eventsDisplayed:n,errorText:""}),e.props.updateEvents(e.props.currentCity,n))},e}return Object(c.a)(n,[{key:"render",value:function(){return Object(f.jsxs)(w.a,{children:[Object(f.jsx)(w.a.Text,{children:"Number of Events: "}),Object(f.jsx)("input",{type:"text",value:this.state.eventsDisplayed,onChange:this.handleInputChanged,className:"eventsNumber"}),Object(f.jsx)(b,{text:this.state.errorText})]})}}]),n}(a.Component),O=n(12),k=n.n(O),S=n(16),T=n(36),C=[{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-20T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"}],N=n(22),Z=n.n(N),D=n(17),E=n.n(D),I=function(e){var t=e.map((function(e){return e.location}));return Object(T.a)(new Set(t))},W=function(){var e=Object(S.a)(k.a.mark((function e(t){var n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then((function(e){return e.json()})).catch((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),B=function(){if(window.history.pushState&&window.location.pathname){var e=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState("","",e)}else e=window.location.protocol+"//"+window.location.host,window.history.pushState("","",e)},A=function(){var e=Object(S.a)(k.a.mark((function e(){var t,n,a,r,o,s;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(E.a.start(),!window.location.href.startsWith("http://localhost")){e.next=4;break}return E.a.done(),e.abrupt("return",C);case 4:if(navigator.onLine){e.next=10;break}return t=localStorage.getItem("lastEvents"),n=localStorage.getItem("lastEvents"),E.a.done(),e.abrupt("return",n?JSON.parse(t).events:[]);case 10:return e.next=12,q();case 12:if(!(a=e.sent)){e.next=22;break}return B(),r="https://gxjnl48r53.execute-api.us-east-2.amazonaws.com/dev/api/get-events/"+a,e.next=18,Z.a.get(r);case 18:return(o=e.sent).data&&(s=I(o.data.events),localStorage.setItem("lastEvents",JSON.stringify(o.data)),localStorage.setItem("locations",JSON.stringify(s))),E.a.done(),e.abrupt("return",o.data.events);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),M=function(){var e=Object(S.a)(k.a.mark((function e(t){var n,a,r;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURIComponent(t),e.next=3,fetch("https://gxjnl48r53.execute-api.us-east-2.amazonaws.com/dev/api/token/"+n).then((function(e){return e.json()})).catch((function(e){return e}));case 3:return a=e.sent,(r=a.access_token)&&localStorage.setItem("access_token",r),e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),q=function(){var e=Object(S.a)(k.a.mark((function e(){var t,n,a,r,o,s;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token"),e.t0=t,!e.t0){e.next=6;break}return e.next=5,W(t);case 5:e.t0=e.sent;case 6:if(n=e.t0,t&&!n.error){e.next=21;break}return e.next=10,localStorage.removeItem("access_token");case 10:return a=new URLSearchParams(window.location.search),e.next=13,a.get("code");case 13:if(r=e.sent){e.next=20;break}return e.next=17,Z.a.get("https://gxjnl48r53.execute-api.us-east-2.amazonaws.com/dev/api/get-auth-url");case 17:return o=e.sent,s=o.data.authUrl,e.abrupt("return",window.location.href=s);case 20:return e.abrupt("return",r&&M(r));case 21:return e.abrupt("return",t);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),L=(n(63),n(35)),J=n(19),U=n(20),R=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={events:[],locations:[],eventsDisplayed:32,currentCity:"all"},e.updateEvents=function(t,n){A().then((function(a){var r="all"===t?a:a.filter((function(e){return e.location===t}));e.setState({events:r.slice(0,n),eventsDisplayed:n})}))},e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.mounted=!0,A().then((function(t){e.mounted&&e.setState({events:t.slice(0,e.state.eventsDisplayed),locations:I(t)})}))}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){return Object(f.jsxs)(L.a,{className:"App ",children:[Object(f.jsx)(J.a,{className:"justify-content-md-center",children:Object(f.jsxs)(U.a,{md:6,children:[navigator.onLine?Object(f.jsx)(g,{text:" "}):Object(f.jsx)(g,{text:"You are offline!"}),Object(f.jsx)(y,{locations:this.state.locations,updateEvents:this.updateEvents})]})}),Object(f.jsx)(J.a,{className:"justify-content-md-center",children:Object(f.jsx)(U.a,{md:6,children:Object(f.jsx)(x,{eventsDisplayed:this.state.eventsDisplayed,updateEvents:this.updateEvents,currentCity:this.state.currentCity})})}),Object(f.jsx)(J.a,{className:"justify-content-md-center",children:Object(f.jsx)(U.a,{md:6,children:Object(f.jsx)(v,{events:this.state.events})})})]})}}]),n}(a.Component),F=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function z(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var H=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,66)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),o(e),s(e)}))},Y=n(23);Y.config("9b6e42f049fc4873a5038f79847c25af").install(),s.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(R,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/meet",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/meet","/service-worker.js");F?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):z(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):z(t,e)}))}}(),H(),Y.config("9b6e42f049fc4873a5038f79847c25af").install()}},[[65,1,2]]]);
//# sourceMappingURL=main.f5019fc7.chunk.js.map