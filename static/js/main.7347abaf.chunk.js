(this.webpackJsonpmeet=this.webpackJsonpmeet||[]).push([[0],{33:function(e,t,n){},34:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),s=n(26),o=n.n(s),i=(n(33),n(4)),c=n(5),u=n(7),l=n(6),d=(n(34),n(0)),h=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={showDetails:!1},e.handleButton=function(){e.setState((function(e){return{showDetails:!e.showDetails}}))},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this,t=this.props.event;return Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{className:"basicInfo",children:[Object(d.jsxs)("p",{className:"dateTime",children:[t.start.dateTime," ",t.start.timeZone]}),Object(d.jsx)("h2",{className:"summary",children:t.summary}),Object(d.jsx)("p",{className:"location",children:t.location})]}),!1===this.state.showDetails&&Object(d.jsx)("button",{type:"submit",className:"detailsButton",onClick:function(){return e.handleButton()},children:"Show More"}),!0===this.state.showDetails&&Object(d.jsxs)("div",{children:[Object(d.jsx)("p",{className:"eventDescription",children:t.description}),Object(d.jsx)("button",{type:"submit",className:"detailsButton",onClick:function(){return e.handleButton()},children:"Show Less"})]})]})}}]),n}(a.Component),p=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var e=this.props.events;return Object(d.jsx)("ul",{className:"EventList",children:e.map((function(e){return Object(d.jsx)("li",{children:Object(d.jsx)(h,{event:e})},e.id)}))})}}]),n}(a.Component),m=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={query:"",suggestions:[],showSuggestions:void 0},e.handleInputChanged=function(t){var n=t.target.value,a=e.props.locations.filter((function(e){return e.toUpperCase().indexOf(n.toUpperCase())>-1}));e.setState({query:n,suggestions:a})},e.handleItemClicked=function(t){e.setState({query:t,showSuggestions:!1}),e.props.updateEvents(t)},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this;return Object(d.jsxs)("div",{className:"CitySearch",children:[Object(d.jsx)("input",{type:"text",className:"city",value:this.state.query,onChange:this.handleInputChanged,onFocus:function(){e.setState({showSuggestions:!0})}}),Object(d.jsxs)("ul",{className:"suggestions",style:this.state.showSuggestions?{}:{display:"none"},children:[this.state.suggestions.map((function(t){return Object(d.jsx)("li",{onClick:function(){return e.handleItemClicked(t)},children:t},t)})),Object(d.jsx)("li",{onClick:function(){return e.handleItemClicked("all")},children:Object(d.jsx)("b",{children:"See all cities"})})]})]})}}]),n}(a.Component),f=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={eventsDisplayed:32},e.handleInputChanged=function(t){var n=+t.target.value;e.setState({eventsDisplayed:n}),e.props.updateEvents(e.props.currentCity,n)},e}return Object(c.a)(n,[{key:"render",value:function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("p",{children:"Number of Events: "}),Object(d.jsx)("input",{type:"text",value:this.state.eventsDisplayed,onChange:this.handleInputChanged,className:"eventsNumber"})]})}}]),n}(a.Component),v=n(8),j=n.n(v),b=n(12),g=n(28),w=[{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-20T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"}],y=n(17),x=n.n(y),O=n(13),k=n.n(O),S=function(e){var t=e.map((function(e){return e.location}));return Object(g.a)(new Set(t))},C=function(){var e=Object(b.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then((function(e){return e.json()})).catch((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),T=function(){if(window.history.pushState&&window.location.pathname){var e=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState("","",e)}else e=window.location.protocol+"//"+window.location.host,window.history.pushState("","",e)},Z=function(){var e=Object(b.a)(j.a.mark((function e(){var t,n,a,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(k.a.start(),!window.location.href.startsWith("http://localhost")){e.next=4;break}return k.a.done(),e.abrupt("return",w);case 4:return e.next=6,I();case 6:if(!(t=e.sent)){e.next=16;break}return T(),n="https://gxjnl48r53.execute-api.us-east-2.amazonaws.com/dev/api/get-events/"+t,e.next=12,x.a.get(n);case 12:return(a=e.sent).data&&(r=S(a.data.events),localStorage.setItem("lastEvents",JSON.stringify(a.data)),localStorage.setItem("locations",JSON.stringify(r))),k.a.done(),e.abrupt("return",a.data.events);case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),D=function(){var e=Object(b.a)(j.a.mark((function e(t){var n,a,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURIComponent(t),e.next=3,fetch("https://gxjnl48r53.execute-api.us-east-2.amazonaws.com/dev/api/token/"+n).then((function(e){return e.json()})).catch((function(e){return e}));case 3:return a=e.sent,(r=a.access_token)&&localStorage.setItem("access_token",r),e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=Object(b.a)(j.a.mark((function e(){var t,n,a,r,s,o;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token"),e.t0=t,!e.t0){e.next=6;break}return e.next=5,C(t);case 5:e.t0=e.sent;case 6:if(n=e.t0,t&&!n.error){e.next=21;break}return e.next=10,localStorage.removeItem("access_token");case 10:return a=new URLSearchParams(window.location.search),e.next=13,a.get("code");case 13:if(r=e.sent){e.next=20;break}return e.next=17,x.a.get("https://gxjnl48r53.execute-api.us-east-2.amazonaws.com/dev/api/get-auth-url");case 17:return s=e.sent,o=s.data.authUrl,e.abrupt("return",window.location.href=o);case 20:return e.abrupt("return",r&&D(r));case 21:return e.abrupt("return",t);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),N=(n(55),n(27)),B=n(14),E=n(15),M=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={events:[],locations:[],eventsDisplayed:32,currentCity:"all"},e.updateEvents=function(t,n){Z().then((function(a){var r="all"===t?a:a.filter((function(e){return e.location===t}));e.setState({events:r.slice(0,n),eventsDisplayed:n})}))},e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.mounted=!0,Z().then((function(t){e.mounted&&e.setState({events:t.slice(0,e.state.eventsDisplayed),locations:S(t)})}))}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){return Object(d.jsx)(N.a,{children:Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(B.a,{children:Object(d.jsx)(E.a,{md:6,children:Object(d.jsx)(m,{locations:this.state.locations,updateEvents:this.updateEvents})})}),Object(d.jsx)(B.a,{children:Object(d.jsx)(E.a,{md:6,children:Object(d.jsx)(f,{eventsDisplayed:this.state.eventsDisplayed,updateEvents:this.updateEvents,currentCity:this.state.currentCity})})}),Object(d.jsx)(B.a,{children:Object(d.jsx)(E.a,{md:6,children:Object(d.jsx)(p,{events:this.state.events})})})]})})}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,57)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),a(e),r(e),s(e),o(e)}))};o.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(M,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),q()}},[[56,1,2]]]);
//# sourceMappingURL=main.7347abaf.chunk.js.map