(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"31Yp":function(e,t,a){"use strict";a("E5k/"),a("pJf4");var A=a("RekA"),r=a("q1tI"),n=a.n(r),i=a("Wbzz"),s=a("vOnD"),l=a("9eSz"),d=a.n(l),c=a("Ntaw"),o=a("Kvkj"),u=s.b.div.withConfig({displayName:"StaffMember__ImgWrapper",componentId:"sc-2v0s81-0"})(["width:100%;margin-bottom:1rem;"]),f=s.b.h3.withConfig({displayName:"StaffMember__Name",componentId:"sc-2v0s81-1"})(["margin-bottom:0.75rem;"]),m=s.b.p.withConfig({displayName:"StaffMember__Email",componentId:"sc-2v0s81-2"})(["margin-bottom:0.5rem;"]),p=s.b.span.withConfig({displayName:"StaffMember__Role",componentId:"sc-2v0s81-3"})(["background:",";padding:0.25rem 0.5rem;border-radius:4px;display:inline-block;margin-bottom:0.5rem;"],c.g),g=function(e){var t=e.margin,a=e.name,A=e.role,r=e.image,i=e.email,s=e.officeHours;return n.a.createElement(o.d,{lg:4,md:6,sm:12,margin:t},n.a.createElement(u,null,n.a.createElement(d.a,{fluid:r.src.childImageSharp.fluid})),n.a.createElement(f,null,a),n.a.createElement(p,null,A),n.a.createElement("br",null),i&&n.a.createElement(m,null,n.a.createElement("a",{href:"mailto:"+i},i)),s&&n.a.createElement("p",null,n.a.createElement("strong",null,"Office hours:"),n.a.createElement("br",null),s))},h=function(){return n.a.createElement(i.StaticQuery,{query:"2417634181",render:function(e){var t=e.allFile.edges[0].node.childrenStaffJson;return n.a.createElement(o.g,{margin:"0.5rem",justify:"start"},t.map((function(e){return n.a.createElement(g,Object.assign({margin:"0.5rem",key:e.name},e))})))},data:A})},b=a("ykIQ"),E=function(){return n.a.createElement(i.StaticQuery,{query:"1586540160",render:function(e){var t=e.allMdx.edges.filter((function(e){return!e.node.frontmatter.hidden}));return n.a.createElement("table",null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"#"),n.a.createElement("th",null,"Name"),n.a.createElement("th",null,"Due date"))),n.a.createElement("tbody",null,t.map((function(e,t){var a=e.node.frontmatter,A=a.title,r=a.path,s=a.due;return n.a.createElement("tr",{key:r},n.a.createElement("td",null,t+1),n.a.createElement("td",null,n.a.createElement(i.Link,{to:r},A)),n.a.createElement("td",null,s?s+", 11:59:59PM":""))}))))},data:b})},w=a("HsEW"),j=a("nsaG"),v=s.b.div.withConfig({displayName:"AdditionalReading__Wrapper",componentId:"sc-6s4hnb-0"})(["margin-top:3rem;"]),B=function(){return n.a.createElement(i.StaticQuery,{query:"1019600994",render:function(e){var t=e.allFile.edges[0].node.childrenAdditionalReadingJson;return n.a.createElement(v,null,n.a.createElement("h3",null,"Additional Reading"),n.a.createElement("ul",null,t.map((function(e){var t=e.title,a=e.author,A=e.url;return n.a.createElement("li",{key:t},n.a.createElement("a",{href:A},t," ",a&&" - "+a))}))))},data:j})},Q=function(){return n.a.createElement(i.StaticQuery,{query:"2846916832",render:function(e){var t=e.allMarkdownRemark.edges,a=e.allFile.edges[0].node.childrenLectureReadingJson;return n.a.createElement(n.a.Fragment,null,n.a.createElement("table",null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"#"),n.a.createElement("th",null,"Name"),n.a.createElement("th",null,"Reading & Resources"))),n.a.createElement("tbody",null,t.map((function(e){var t,A,r=e.node.frontmatter,s=r.title,l=r.path,d=r.number;return r.hidden?null:n.a.createElement("tr",{key:l},n.a.createElement("td",null,d),n.a.createElement("td",null,n.a.createElement(i.Link,{to:l},s)),n.a.createElement("td",null,(t=d,(A=a.filter((function(e){return e.lecture===t})))&&A.length?A.map((function(e){var t=e.name,a=e.url;return n.a.createElement("div",{key:a},n.a.createElement("a",{href:a,target:"_BLANK",rel:"noopener noreferrer"},t))})):null)))})))),n.a.createElement(B,null))},data:w})};a.d(t,"c",(function(){return h})),a.d(t,"a",(function(){return E})),a.d(t,"b",(function(){return Q}))},"3nLz":function(e,t,a){"use strict";a("t+fG")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"9eSz":function(e,t,a){"use strict";a("rzGZ"),a("Dq+y"),a("8npG"),a("YbXK"),a("eMsz"),a("zTTH"),a("3nLz");var A=a("TqRt");t.__esModule=!0,t.default=void 0;var r,n=A(a("PJYZ")),i=A(a("VbXa")),s=A(a("8OQS")),l=A(a("pVnL")),d=A(a("q1tI")),c=A(a("17x9")),o=function(e){var t=(0,l.default)({},e),a=t.resolutions,A=t.sizes,r=t.critical;return a&&(t.fixed=a,delete t.resolutions),A&&(t.fluid=A,delete t.sizes),r&&(t.loading="eager"),t.fluid&&(t.fluid=v([].concat(t.fluid))),t.fixed&&(t.fixed=v([].concat(t.fixed))),t},u=function(e){var t=e.media;return!!t&&(b&&!!window.matchMedia(t).matches)},f=function(e){var t=e.fluid,a=e.fixed;return m(t||a).src},m=function(e){if(b&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(u);if(-1!==t)return e[t]}return e[0]},p=Object.create({}),g=function(e){var t=o(e),a=f(t);return p[a]||!1},h="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,b="undefined"!=typeof window,E=b&&window.IntersectionObserver,w=new WeakMap;function j(e){return e.map((function(e){var t=e.src,a=e.srcSet,A=e.srcSetWebp,r=e.media,n=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},A&&d.default.createElement("source",{type:"image/webp",media:r,srcSet:A,sizes:n}),d.default.createElement("source",{media:r,srcSet:a,sizes:n}))}))}function v(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function B(e){return e.map((function(e){var t=e.src,a=e.media,A=e.tracedSVG;return d.default.createElement("source",{key:t,media:a,srcSet:A})}))}function Q(e){return e.map((function(e){var t=e.src,a=e.media,A=e.base64;return d.default.createElement("source",{key:t,media:a,srcSet:A})}))}function S(e,t){var a=e.srcSet,A=e.srcSetWebp,r=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(r?'media="'+r+'" ':"")+'srcset="'+(t?A:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var x=function(e,t){var a=(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver((function(e){e.forEach((function(e){if(w.has(e.target)){var t=w.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),w.delete(e.target),t())}}))}),{rootMargin:"200px"})),r);return a&&(a.observe(e),w.set(e,t)),function(){a.unobserve(e),w.delete(e)}},D=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",A=e.srcSet?'srcset="'+e.srcSet+'" ':"",r=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',i=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?S(e,!0):"")+S(e)})).join("")+"<img "+d+i+s+a+A+t+n+r+l+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},y=function(e){var t=e.src,a=e.imageVariants,A=e.generateSources,r=e.spreadProps,n=d.default.createElement(R,(0,l.default)({src:t},r));return a.length>1?d.default.createElement("picture",null,A(a),n):n},R=d.default.forwardRef((function(e,t){var a=e.sizes,A=e.srcSet,r=e.src,n=e.style,i=e.onLoad,c=e.onError,o=e.loading,u=e.draggable,f=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return d.default.createElement("img",(0,l.default)({sizes:a,srcSet:A,src:r},f,{onLoad:i,onError:c,ref:t,loading:o,draggable:u,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));R.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var P=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=b&&g(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!h&&E&&!a.isCritical&&!a.seenBefore;var A=a.isCritical||b&&(h||!a.useIOSupport);return a.state={isVisible:A,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,i.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:g(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=x(e,(function(){var e=g(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=o(e),a=f(t),p[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=o(this.props),t=e.title,a=e.alt,A=e.className,r=e.style,n=void 0===r?{}:r,i=e.imgStyle,s=void 0===i?{}:i,c=e.placeholderStyle,u=void 0===c?{}:c,f=e.placeholderClassName,p=e.fluid,g=e.fixed,h=e.backgroundColor,b=e.durationFadeIn,E=e.Tag,w=e.itemProp,v=e.loading,S=e.draggable,x=!1===this.state.fadeIn||this.state.imgLoaded,P=!0===this.state.fadeIn&&!this.state.imgCached,N=(0,l.default)({opacity:x?1:0,transition:P?"opacity "+b+"ms":"none"},s),C="boolean"==typeof h?"lightgray":h,I={transitionDelay:b+"ms"},k=(0,l.default)({opacity:this.state.imgLoaded?0:1},P&&I,{},s,{},u),M={title:t,alt:this.state.isVisible?"":a,style:k,className:f,itemProp:w};if(p){var Y=p,U=m(p);return d.default.createElement(E,{className:(A||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(U.srcSet)},d.default.createElement(E,{style:{width:"100%",paddingBottom:100/U.aspectRatio+"%"}}),C&&d.default.createElement(E,{title:t,style:(0,l.default)({backgroundColor:C,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},P&&I)}),U.base64&&d.default.createElement(y,{src:U.base64,spreadProps:M,imageVariants:Y,generateSources:Q}),U.tracedSVG&&d.default.createElement(y,{src:U.tracedSVG,spreadProps:M,imageVariants:Y,generateSources:B}),this.state.isVisible&&d.default.createElement("picture",null,j(Y),d.default.createElement(R,{alt:a,title:t,sizes:U.sizes,src:U.src,crossOrigin:this.props.crossOrigin,srcSet:U.srcSet,style:N,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:v,draggable:S})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:D((0,l.default)({alt:a,title:t,loading:v},U,{imageVariants:Y}))}}))}if(g){var G=g,T=m(g),J=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:T.width,height:T.height},n);return"inherit"===n.display&&delete J.display,d.default.createElement(E,{className:(A||"")+" gatsby-image-wrapper",style:J,ref:this.handleRef,key:"fixed-"+JSON.stringify(T.srcSet)},C&&d.default.createElement(E,{title:t,style:(0,l.default)({backgroundColor:C,width:T.width,opacity:this.state.imgLoaded?0:1,height:T.height},P&&I)}),T.base64&&d.default.createElement(y,{src:T.base64,spreadProps:M,imageVariants:G,generateSources:Q}),T.tracedSVG&&d.default.createElement(y,{src:T.tracedSVG,spreadProps:M,imageVariants:G,generateSources:B}),this.state.isVisible&&d.default.createElement("picture",null,j(G),d.default.createElement(R,{alt:a,title:t,width:T.width,height:T.height,sizes:T.sizes,src:T.src,crossOrigin:this.props.crossOrigin,srcSet:T.srcSet,style:N,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:v,draggable:S})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:D((0,l.default)({alt:a,title:t,loading:v},T,{imageVariants:G}))}}))}return null},t}(d.default.Component);P.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var N=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),C=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string});P.propTypes={resolutions:N,sizes:C,fixed:c.default.oneOfType([N,c.default.arrayOf(N)]),fluid:c.default.oneOfType([C,c.default.arrayOf(C)]),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var I=P;t.default=I},DYD3:function(e,t,a){"use strict";a.r(t);var A=a("q1tI"),r=a.n(A),n=a("RJaA"),i=a("vrFN"),s=a("31Yp");t.default=function(e){var t=e.location;return r.a.createElement(n.a,{location:t},r.a.createElement(i.a,{title:"Staff",description:"Course staff for CIS 197: JavaScript at the University of Pennsylvania"}),r.a.createElement("h1",null,"Course Staff"),r.a.createElement(s.c,null))}},HsEW:function(e){e.exports=JSON.parse('{"data":{"allMarkdownRemark":{"edges":[{"node":{"fileAbsolutePath":"/Users/jesielviana/Dev/ifpi/new-web-dev/src/markdown/lectures/backbone-js.md","frontmatter":{"path":"/lectures/6-backbone-js","number":-1,"hidden":true,"title":"Backbone.js"}}},{"node":{"fileAbsolutePath":"/Users/jesielviana/Dev/ifpi/new-web-dev/src/markdown/lectures/d3.md","frontmatter":{"path":"/lectures/d3","number":-1,"hidden":true,"title":"Wrap Up"}}},{"node":{"fileAbsolutePath":"/Users/jesielviana/Dev/ifpi/new-web-dev/src/markdown/lectures/web-assembly.md","frontmatter":{"path":"/lectures/14-web-assembly","number":-1,"hidden":true,"title":"Web Assembly"}}},{"node":{"fileAbsolutePath":"/Users/jesielviana/Dev/ifpi/new-web-dev/src/markdown/lectures/react-old.md","frontmatter":{"path":"/lectures/old-react-lecture","number":-1,"hidden":true,"title":"ReactJS"}}},{"node":{"fileAbsolutePath":"/Users/jesielviana/Dev/ifpi/new-web-dev/src/markdown/lectures/0-course-policies.md","frontmatter":{"path":"/lectures/0-course-policies","number":0,"hidden":false,"title":"Course Policies"}}},{"node":{"fileAbsolutePath":"/Users/jesielviana/Dev/ifpi/new-web-dev/src/markdown/lectures/1-js-basics.md","frontmatter":{"path":"/lectures/1-js-basics","number":1,"hidden":false,"title":"JavaScript Basics and Syntax"}}},{"node":{"fileAbsolutePath":"/Users/jesielviana/Dev/ifpi/new-web-dev/src/markdown/lectures/2-callbacks-events-async.md","frontmatter":{"path":"/lectures/2-callbacks-events-async","number":2,"hidden":false,"title":"Callbacks, Events, and Asynchronous Programming"}}},{"node":{"fileAbsolutePath":"/Users/jesielviana/Dev/ifpi/new-web-dev/src/markdown/lectures/3-object-oriented-js.md","frontmatter":{"path":"/lectures/3-object-oriented-js","number":3,"hidden":false,"title":"Object-Oriented JavaScript"}}},{"node":{"fileAbsolutePath":"/Users/jesielviana/Dev/ifpi/new-web-dev/src/markdown/lectures/4-html-css-jquery.md","frontmatter":{"path":"/lectures/4-html-css-jquery","number":4,"hidden":false,"title":"HTML, CSS and jQuery"}}},{"node":{"fileAbsolutePath":"/Users/jesielviana/Dev/ifpi/new-web-dev/src/markdown/lectures/5-js-in-browser.md","frontmatter":{"path":"/lectures/5-js-in-the-browser","number":5,"hidden":false,"title":"JavaScript in the Browser"}}},{"node":{"fileAbsolutePath":"/Users/jesielviana/Dev/ifpi/new-web-dev/src/markdown/lectures/6-servers-in-js.md","frontmatter":{"path":"/lectures/6-servers-in-js","number":6,"hidden":false,"title":"Servers in JavaScript"}}},{"node":{"fileAbsolutePath":"/Users/jesielviana/Dev/ifpi/new-web-dev/src/markdown/lectures/7-socket-io.md","frontmatter":{"path":"/lectures/7-socket-io","number":7,"hidden":false,"title":"Real Time Web Applications"}}},{"node":{"fileAbsolutePath":"/Users/jesielviana/Dev/ifpi/new-web-dev/src/markdown/lectures/8-react.md","frontmatter":{"path":"/lectures/8-react","number":8,"hidden":false,"title":"ReactJS"}}},{"node":{"fileAbsolutePath":"/Users/jesielviana/Dev/ifpi/new-web-dev/src/markdown/lectures/9-redux.md","frontmatter":{"path":"/lectures/9-redux","number":9,"hidden":false,"title":"Redux"}}},{"node":{"fileAbsolutePath":"/Users/jesielviana/Dev/ifpi/new-web-dev/src/markdown/lectures/10-good-react.md","frontmatter":{"path":"/lectures/10-good-react","number":10,"hidden":false,"title":"\\"Good\\" React"}}},{"node":{"fileAbsolutePath":"/Users/jesielviana/Dev/ifpi/new-web-dev/src/markdown/lectures/11-app-from-scratch.md","frontmatter":{"path":"/lectures/11-app-from-scratch","number":11,"hidden":true,"title":"Building an Application from Scratch"}}},{"node":{"fileAbsolutePath":"/Users/jesielviana/Dev/ifpi/new-web-dev/src/markdown/lectures/12-es6.md","frontmatter":{"path":"/lectures/12-es6","number":12,"hidden":true,"title":"ES6"}}},{"node":{"fileAbsolutePath":"/Users/jesielviana/Dev/ifpi/new-web-dev/src/markdown/lectures/13-redux-and-routing.md","frontmatter":{"path":"/lectures/13-redux-and-routing","number":13,"hidden":true,"title":"Advanced Redux + Frontend Routing"}}},{"node":{"fileAbsolutePath":"/Users/jesielviana/Dev/ifpi/new-web-dev/src/markdown/lectures/13-mongo-with-express.md","frontmatter":{"path":"/lectures/13-mongo-with-express","number":13,"hidden":true,"title":"Using MongoDB with Express"}}},{"node":{"fileAbsolutePath":"/Users/jesielviana/Dev/ifpi/new-web-dev/src/markdown/lectures/14-nextjs-gatsbyjs.md","frontmatter":{"path":"/lectures/14-nextjs-gatsbyjs","number":14,"hidden":false,"title":"NextJS and GatsbyJS"}}},{"node":{"fileAbsolutePath":"/Users/jesielviana/Dev/ifpi/new-web-dev/src/markdown/lectures/15-react-native.md","frontmatter":{"path":"/lectures/15-react-native","number":15,"hidden":false,"title":"React Native"}}}]},"allFile":{"edges":[{"node":{"childrenLectureReadingJson":[{"url":"https://drive.google.com/open?id=1DwJdajfsy1oYJrWG3XY80T3I-TNlaJLowbS8kM2m4KY&authuser=0","name":"Syllabus","lecture":0},{"url":"http://eloquentjavascript.net/02_program_structure.html","name":"Eloquent JS, Chapters 1 & 2","lecture":1},{"url":"https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript","name":"[MDN] A re-introduction to JavaScript","lecture":1},{"url":"http://callbackhell.com/","name":"Callback Hell","lecture":2},{"url":"http://eloquentjavascript.net/06_object.html","name":"Eloquent JS, Chapter 6","lecture":3},{"url":"https://www.codecademy.com/tracks/web","name":"Codecademy HTML/CSS track","lecture":4},{"url":"http://getbootstrap.com/","name":"Bootstrap docs","lecture":4},{"url":"https://developer.mozilla.org/en-US/docs/DOM","name":"[MDN] Document Object Model","lecture":4},{"url":"https://developers.google.com/chrome-developer-tools/","name":"Chrome DevTools docs","lecture":4},{"url":"https://api.jquery.com/","name":"jQuery API","lecture":4},{"url":"https://www.jmarshall.com/easy/http/","name":"HTTP Made Really Easy","lecture":6},{"url":"http://expressjs.com/","name":"Express Docs","lecture":6},{"url":"https://facebook.github.io/react/index.html","name":"React Docs","lecture":8},{"url":"http://redux.js.org/","name":"Redux Docs","lecture":8},{"url":"https://github.com/cis197/lecture-examples/tree/master/lec7","name":"Code for todolist example","lecture":8},{"url":"https://chriskiehl.com/article/react-as-an-implementation-detail","name":"React as an Implementation Detail","lecture":9},{"url":"https://github.com/cis197/lecture-examples/tree/master/lec8","name":"Lecture Example","lecture":11}]}}]}}}')},RekA:function(e){e.exports=JSON.parse('{"data":{"allFile":{"edges":[{"node":{"childrenStaffJson":[{"name":"Nihar Patil","role":"Instructor","email":"niharp@seas.upenn.edu","officeHours":"As needed","image":{"src":{"childImageSharp":{"fluid":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAFwABAAMAAAAAAAAAAAAAAAAAAAIDBP/EABYBAQEBAAAAAAAAAAAAAAAAAAEAAv/aAAwDAQACEAMQAAAB3xljHesOYWE0Af/EABsQAAMAAgMAAAAAAAAAAAAAAAECAwASBBMx/9oACAEBAAEFAqOJJKooPcrPtnxkoK65NyTRtVFTr//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQMBAT8BH//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQIBAT8BH//EAB0QAAIBBAMAAAAAAAAAAAAAAAABAhIhMVEiQZH/2gAIAQEABj8CqkaMjj4cos7GtDaFi5//xAAbEAADAAMBAQAAAAAAAAAAAAAAAREhMUFhof/aAAgBAQABPyGJnMRLoxRUt5ItkRXMTPhj01lNld+hhUoGTFRaykp//9oADAMBAAIAAwAAABAL8P8A/8QAGBEAAgMAAAAAAAAAAAAAAAAAABEBEEH/2gAIAQMBAT8QhKtEf//EABcRAQEBAQAAAAAAAAAAAAAAAAARAUH/2gAIAQIBAT8Q21HFf//EABwQAQEAAgMBAQAAAAAAAAAAAAERACExQVFhcf/aAAgBAQABPxCuWgjb6304La9Gw+NmMqmASPmE9pW6HK6ECdLrv8ywcvw4TyoCEXXeDMoSmt5XUoaeanvzP//Z","aspectRatio":1,"src":"/~cis197/static/a401b8218eae4fbf699e45095561fd5a/3ea63/nihar.jpg","srcSet":"/~cis197/static/a401b8218eae4fbf699e45095561fd5a/5b62b/nihar.jpg 150w,\\n/~cis197/static/a401b8218eae4fbf699e45095561fd5a/ae0bd/nihar.jpg 300w,\\n/~cis197/static/a401b8218eae4fbf699e45095561fd5a/3ea63/nihar.jpg 600w,\\n/~cis197/static/a401b8218eae4fbf699e45095561fd5a/a44e2/nihar.jpg 800w","sizes":"(max-width: 600px) 100vw, 600px"}}}}},{"name":"Cameron Cabo","role":"Instructor","email":"ccabo@seas.upenn.edu","officeHours":"Thursday 4:30-6:30 PM in Towne 217","image":{"src":{"childImageSharp":{"fluid":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGQABAAIDAAAAAAAAAAAAAAAAAAMFAgQG/8QAFgEBAQEAAAAAAAAAAAAAAAAAAgAB/9oADAMBAAIQAxAAAAGBZahUKxZc9mMBt//EABwQAAICAgMAAAAAAAAAAAAAAAECAAMEEhEiMv/aAAgBAQABBQI7LAZzH1CdRaVl7l7bvNeRYi//xAAXEQADAQAAAAAAAAAAAAAAAAAAARAh/9oACAEDAQE/AUZf/8QAFhEAAwAAAAAAAAAAAAAAAAAAABAh/9oACAECAQE/ASv/xAAcEAACAgIDAAAAAAAAAAAAAAAAAREhAiIQMpH/2gAIAQEABj8CuPDokaqjZltcOTEhOj//xAAbEAEAAwEBAQEAAAAAAAAAAAABABEhMZFBYf/aAAgBAQABPyEUIp2odWyvFhn0J2VVQcl5JblwGsjS7pQ/IdPs9Hk//9oADAMBAAIAAwAAABD08Pz/xAAYEQEBAAMAAAAAAAAAAAAAAAABABARMf/aAAgBAwEBPxDRFhhzH//EABkRAAIDAQAAAAAAAAAAAAAAAAABEBEhMf/aAAgBAgEBPxBrSg+x/8QAIBABAQACAQQDAQAAAAAAAAAAAREAIUExUWGRcYGh4f/aAAgBAQABPxDTv2kqdqYgzBCdJz9YoKvCD5YKDps9Xse825digFNY/GoQ94luMcAZDAX8J+fzDxUNA2eDxn//2Q==","aspectRatio":1,"src":"/~cis197/static/c073becdd22a94d933f7caedb2aea27e/3ea63/cameron.jpg","srcSet":"/~cis197/static/c073becdd22a94d933f7caedb2aea27e/5b62b/cameron.jpg 150w,\\n/~cis197/static/c073becdd22a94d933f7caedb2aea27e/ae0bd/cameron.jpg 300w,\\n/~cis197/static/c073becdd22a94d933f7caedb2aea27e/3ea63/cameron.jpg 600w,\\n/~cis197/static/c073becdd22a94d933f7caedb2aea27e/96839/cameron.jpg 900w,\\n/~cis197/static/c073becdd22a94d933f7caedb2aea27e/1a0dd/cameron.jpg 1200w,\\n/~cis197/static/c073becdd22a94d933f7caedb2aea27e/d04b9/cameron.jpg 3130w","sizes":"(max-width: 600px) 100vw, 600px"}}}}},{"name":"Taras Bukachevsky","role":"Teaching Assistant","email":"tarasb@seas.upenn.edu","officeHours":"Monday 5-7 PM in Towne 217","image":{"src":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFcklEQVQ4yyWUeVCUZRzH3+kPD1QWxF1YQMUyVExNx0rTSRFBDoUSQgQRN5FFbhB2l4UgWFy55AoFlWNhd7m0XWDVlIQUEjJSyxSP7rFjpmOqmaaZ+ufTg/7xned53+d9Pr/v75hXclTHc6d4P5+UJHDlZDY3bHU8GLEwYWskLmwD29Z6Yjll4Mf7w0yN9fDgwzZxbua7iQvcGTmHuamM/q4G+rsbGextQjqWFkZOwmsU+a/iUXYqDz+y8POn57k73E3wplVEvKKg70wZj+8OcfeqlamRVh5+aOb7CQdfDPdhPlmKvbMGu1nIUoekPRhKfPgGAlZ5cObIPmxN+Zgr06jNCaUkyR9Ho4ZHI+3cHDJxf9TKw2vt4rmDxx8PcE8ENZ8oxm6qxNYxrWoBVO+kJH03ewPXUp+9F0t1Bif0b2KIUlIUvQxt7GZUgatI2fUyx9IimRyo5dtRM48n7AJoxdJYgL3dyHtt06pAMubFU6VNQBW6kXr1G9ibCugsT6I4bjU7VsoI8nVm+zJXItYvwt/Pg9z47Xx7tYMfx21MDZvprNNiazE80XstRqSqfBW5B8OI9l9LfvhGeuvyaCxRE7nFl3MJL/KVJpA7mp0MJfpT6L+crcsVDJws4I/b55n6oBNLg47+VgP2J9AypOKMvZTnJVB4KIpWjQrr0RTKD0egDV/Jz4Zg/infw7+V8fxZeYD/6lMpC36RKs1+/rl3ifsCaBXAwTYD/S1PoVJK3C7R5RD0hyLJjw2iLDEQ7a4VVL+5huYYcTnEjy+yw6gNXcnAoQCupkdg0iXw161+pt5voevdp8AB4XKw7ShSY2mWiBiHXr0b3YEQNKpQcoRaMsP4Th/MvcwA/qxQ8VgXxd9Van4zqvkoM4rbHXqut+rpFkBH+1PYedMxpMvmauzNhViOazlbn88lEelSexnXT2n4tXAnn6ds4ezr65lMDOLe4SAe5Ozhp94Kfhjv4qthE70n9DjaSoUMAiyacsPeyFhvDde6axntqmGsp1bsaxixHudWaTSTSa8yHr2JrzPCGU3ewmD6Ln652cVvN218Leax70Q+jtYSkfI7oo4lSKNnGxjpq+NSZyUXW41c66tnWADtp8uwlibymTZAOI3gD2M8PXEbGEoJZfJYJr9P9PDD5Fl6mqeBRQyeKRLAYqSaqPWcUgfT01DAeGcVNwTwormSIeG0rToPa/JWBlWv0BS+mjMRa/i1IoG2jX5YAjZxXafmvCEFW7Mea/PbT0ZI0rwwg1SlRMW+bXx24TSTjlOMOU5zsU6Hcfs6GoJ9GTy8mdbda/g4O4RvCndTtMKbIwoXjIuUmF5Yjm3HVgYK0nGIn4SkXedJks8sbLoDTF02MdFejikmCN1SN6JdniFlqYyGN/xoiVqHJfIlcn3dUbnNJXPxAgqeVWJ4biHHn/ehw2+ZKIcKKXX5PHTbVvCov5lboo6Va30oUDoR5+5EjGIWb7nPJEo+gzjlXPa4ziZGNpN0TxeyvNwoXOxB8RIvynx9MC5dTP3SJUghMgnj/h18OWalW/06KfKZZD0nJ17uRJLHbPYpZhC7YBYx88XezYkMAdN4u5Hj6UruQjnvLFGS6y0nd5GCCgGVwt0kqg6I+RpqoTpwHUnC2SEvGWrlPNK9XcQ6h8Oec0Sd55HmKSPPy0UA5pMlwDlerhxZqCDBQ0bWogW87aNEqt88G3tBDLfFPOat9CJWPkt8MJckz3mkejkLiLOAziVVrEdEoBxvGdqFrmQK+DQ00d1VnLuS6r0AvWiSdC5yMeOmEq40F5H27HyiRHqx8tkcFI6SBSRZ6cxBhRPJHsKhUkaGcJg9DRLvkhRziJ4/h0S5s8jAVZTCnf8BAB+tmQdyfMwAAAAASUVORK5CYII=","aspectRatio":1,"src":"/~cis197/static/a99efe594cc981c0933467369209c4bb/af53f/taras.png","srcSet":"/~cis197/static/a99efe594cc981c0933467369209c4bb/1e992/taras.png 150w,\\n/~cis197/static/a99efe594cc981c0933467369209c4bb/c1e4b/taras.png 300w,\\n/~cis197/static/a99efe594cc981c0933467369209c4bb/af53f/taras.png 600w,\\n/~cis197/static/a99efe594cc981c0933467369209c4bb/94c0b/taras.png 900w,\\n/~cis197/static/a99efe594cc981c0933467369209c4bb/dd4bc/taras.png 1200w,\\n/~cis197/static/a99efe594cc981c0933467369209c4bb/d788e/taras.png 1487w","sizes":"(max-width: 600px) 100vw, 600px"}}}}},{"name":"Peter Baile Chen","role":"Teaching Assistant","email":"cbaile@seas.upenn.edu","officeHours":"Sunday 3-5 PM in MBA Cafe","image":{"src":{"childImageSharp":{"fluid":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAIDBAX/xAAXAQADAQAAAAAAAAAAAAAAAAAAAgMB/9oADAMBAAIQAxAAAAGUctCPtc9bLaSRAUX/xAAbEAACAwEBAQAAAAAAAAAAAAABAgADERIhIv/aAAgBAQABBQJuTBZCQTnL2N9bC52zx5//xAAXEQADAQAAAAAAAAAAAAAAAAAAAREQ/9oACAEDAQE/AXCjz//EABgRAAIDAAAAAAAAAAAAAAAAAAACARAR/9oACAECAQE/AYUwWv/EAB0QAAEDBQEAAAAAAAAAAAAAAAEAEBECISIxQVH/2gAIAQEABj8CFQ34s4XCu6eDd//EABwQAQACAgMBAAAAAAAAAAAAAAEAESExQVFhgf/aAAgBAQABPyFPZ7iMmi9VLhfpChnkAiIKTGmYcEyR9QGHqDP/2gAMAwEAAgADAAAAEHzI/v/EABkRAAIDAQAAAAAAAAAAAAAAAAABEBExIf/aAAgBAwEBPxCjr0SmY//EABcRAQEBAQAAAAAAAAAAAAAAAAEQETH/2gAIAQIBAT8QJTY7n//EAB4QAQADAQABBQAAAAAAAAAAAAEAESExUUFhcZGx/9oACAEBAAE/EO0foxzhFqPdOfNxAQvlcN5a2l7XN9biP6SwoyuPuyIvRmu0uOa0U/IiK+Z//9k=","aspectRatio":1,"src":"/~cis197/static/e514d37b0d6f3514bba5de30d8627ac4/3ea63/peter.jpg","srcSet":"/~cis197/static/e514d37b0d6f3514bba5de30d8627ac4/5b62b/peter.jpg 150w,\\n/~cis197/static/e514d37b0d6f3514bba5de30d8627ac4/ae0bd/peter.jpg 300w,\\n/~cis197/static/e514d37b0d6f3514bba5de30d8627ac4/3ea63/peter.jpg 600w,\\n/~cis197/static/e514d37b0d6f3514bba5de30d8627ac4/96839/peter.jpg 900w,\\n/~cis197/static/e514d37b0d6f3514bba5de30d8627ac4/1a0dd/peter.jpg 1200w,\\n/~cis197/static/e514d37b0d6f3514bba5de30d8627ac4/5da34/peter.jpg 2880w","sizes":"(max-width: 600px) 100vw, 600px"}}}}},{"name":"Justin Choi","role":"Teaching Boi","email":"juicetin@seas.upenn.edu","officeHours":"Tuesday 8-10 PM in MBA Cafe","image":{"src":{"childImageSharp":{"fluid":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAUEA//EABUBAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIQAxAAAAHfl0Qy8nK5SQ7BP//EABsQAQEBAQADAQAAAAAAAAAAAAECAwAEERIT/9oACAEBAAEFAqfmY1e99pZnDqFS1pPkr+L0Uh//xAAXEQADAQAAAAAAAAAAAAAAAAAAARAS/9oACAEDAQE/ATKv/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAEQEv/aAAgBAgEBPwE07//EABwQAQACAgMBAAAAAAAAAAAAAAEAEQIhEBIxQf/aAAgBAQAGPwJQuPYCuHLLyCbnbG6hv7xpn//EABoQAQACAwEAAAAAAAAAAAAAAAEAESExQRD/2gAIAQEAAT8hW3BoiqMLjhgO4llDpRMYLaPGHBsmcJvrxTUC5//aAAwDAQACAAMAAAAQyMAD/8QAFxEBAAMAAAAAAAAAAAAAAAAAAREgMf/aAAgBAwEBPxCB2l//xAAWEQEBAQAAAAAAAAAAAAAAAAABEDH/2gAIAQIBAT8QFMgZP//EAB0QAQACAgMBAQAAAAAAAAAAAAEAESExQVFhodH/2gAIAQEAAT8Qemaxxb+SnYhut6uLOTqDoCuQrohn2VjvAfCZA8sKabyR5V4tt4Yn5G2TlDP/2Q==","aspectRatio":1,"src":"/~cis197/static/4a447c335c6701d22b6ad0eb18720dfe/3ea63/justin.jpg","srcSet":"/~cis197/static/4a447c335c6701d22b6ad0eb18720dfe/5b62b/justin.jpg 150w,\\n/~cis197/static/4a447c335c6701d22b6ad0eb18720dfe/ae0bd/justin.jpg 300w,\\n/~cis197/static/4a447c335c6701d22b6ad0eb18720dfe/3ea63/justin.jpg 600w,\\n/~cis197/static/4a447c335c6701d22b6ad0eb18720dfe/96839/justin.jpg 900w,\\n/~cis197/static/4a447c335c6701d22b6ad0eb18720dfe/1a0dd/justin.jpg 1200w,\\n/~cis197/static/4a447c335c6701d22b6ad0eb18720dfe/b794f/justin.jpg 1382w","sizes":"(max-width: 600px) 100vw, 600px"}}}}},{"name":"Marta Garcia Ferreiro","role":"Teaching Girl","email":"martagf@seas.upenn.edu","officeHours":"Wednesday 2-5 PM in MBA Cafe","image":{"src":{"childImageSharp":{"fluid":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAUEAgP/xAAWAQEBAQAAAAAAAAAAAAAAAAABAgP/2gAMAwEAAhADEAAAAZtTHoHcmNIl+ZFdAf/EABwQAAICAgMAAAAAAAAAAAAAAAECAAMEEBESFP/aAAgBAQABBQJrCZjoOvEsRIHaseyOxZtf/8QAGBEAAgMAAAAAAAAAAAAAAAAAABEBEBL/2gAIAQMBAT8BTgzf/8QAGBEAAgMAAAAAAAAAAAAAAAAAABEBEBL/2gAIAQIBAT8Bak1f/8QAHhAAAQMEAwAAAAAAAAAAAAAAAAERIQIQEiIygZH/2gAIAQEABj8C2lDKJs1NXQybQcE9HW//xAAbEAEAAwEBAQEAAAAAAAAAAAABABExUSGBwf/aAAgBAQABPyGjQbZ+z1AdByI6QNbvphsrepaBnpkt7Gf/2gAMAwEAAgADAAAAEPvHf//EABcRAAMBAAAAAAAAAAAAAAAAAAEQETH/2gAIAQMBAT8QFCHV/8QAFxEAAwEAAAAAAAAAAAAAAAAAARARMf/aAAgBAgEBPxCgIMX/xAAgEAEAAgEEAgMAAAAAAAAAAAABABExIUFRcWGRgcHR/9oACAEBAAE/EHzy6CidbI69QBtWZW+bJb+yVlGi8PLxKgqEXQq0+gAjbi+X5HINijARcq3uLHU//9k=","aspectRatio":1,"src":"/~cis197/static/462dd7b4e2838f2545c7a46aa0e3475f/3ea63/marta.jpg","srcSet":"/~cis197/static/462dd7b4e2838f2545c7a46aa0e3475f/5b62b/marta.jpg 150w,\\n/~cis197/static/462dd7b4e2838f2545c7a46aa0e3475f/ae0bd/marta.jpg 300w,\\n/~cis197/static/462dd7b4e2838f2545c7a46aa0e3475f/3ea63/marta.jpg 600w,\\n/~cis197/static/462dd7b4e2838f2545c7a46aa0e3475f/96839/marta.jpg 900w,\\n/~cis197/static/462dd7b4e2838f2545c7a46aa0e3475f/8255e/marta.jpg 1024w","sizes":"(max-width: 600px) 100vw, 600px"}}}}}]}}]}}}')},nsaG:function(e){e.exports=JSON.parse('{"data":{"allFile":{"edges":[{"node":{"childrenAdditionalReadingJson":[{"title":"JavaScript: The Good Parts","author":"Douglas Crockford","url":"http://www.amazon.com/JavaScript-Good-Parts-Douglas-Crockford/dp/0596517742"},{"title":"Eloquent JavaScript","author":"Marijn Haverbeke","url":"http://eloquentjavascript.net/"},{"title":"Developing Backbone.js Applications (DBA)","author":"Addy Osmani","url":"http://addyosmani.github.io/backbone-fundamentals"},{"title":"Mozilla Developer Network JS Articles","author":null,"url":"https://developer.mozilla.org/en-US/docs/Web/JavaScript"}]}}]}}}')},"t+fG":function(e,t,a){var A=a("P8UN"),r=a("96qb"),n=a("ap2Z"),i=/"/g,s=function(e,t,a,A){var r=String(n(e)),s="<"+t;return""!==a&&(s+=" "+a+'="'+String(A).replace(i,"&quot;")+'"'),s+">"+r+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(s),A(A.P+A.F*r((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",a)}},ykIQ:function(e){e.exports=JSON.parse('{"data":{"allMdx":{"edges":[{"node":{"fileAbsolutePath":"/Users/jesielviana/Dev/ifpi/new-web-dev/src/markdown/assignments/10-COVID-final-project-specs.mdx","frontmatter":{"path":"/assignments/9","title":"Final Project Specifications","hidden":true,"due":"December 02, 2019"}}},{"node":{"fileAbsolutePath":"/Users/jesielviana/Dev/ifpi/new-web-dev/src/markdown/assignments/9-final-project-specs.mdx","frontmatter":{"path":"/assignments/9","title":"Final Project Specifications","hidden":true,"due":"December 02, 2019"}}},{"node":{"fileAbsolutePath":"/Users/jesielviana/Dev/ifpi/new-web-dev/src/markdown/assignments/1-finger-exercises.mdx","frontmatter":{"path":"/assignments/1","title":"Homework 1: Finger Exercises","hidden":false,"due":"January 29, 2020"}}},{"node":{"fileAbsolutePath":"/Users/jesielviana/Dev/ifpi/new-web-dev/src/markdown/assignments/2-async-events-callbacks.mdx","frontmatter":{"path":"/assignments/2","title":"Homework 2: Async, Events, and Callbacks","hidden":false,"due":"January 29, 2020"}}},{"node":{"fileAbsolutePath":"/Users/jesielviana/Dev/ifpi/new-web-dev/src/markdown/assignments/3-object-oriented-js.mdx","frontmatter":{"path":"/assignments/3","title":"Homework 3: Object Oriented JavaScript","hidden":false,"due":"February 05, 2020"}}},{"node":{"fileAbsolutePath":"/Users/jesielviana/Dev/ifpi/new-web-dev/src/markdown/assignments/4-pokemon-map-builder.mdx","frontmatter":{"path":"/assignments/4","title":"Homework 4: Pokémon Map Builder","hidden":false,"due":"February 12, 2020"}}},{"node":{"fileAbsolutePath":"/Users/jesielviana/Dev/ifpi/new-web-dev/src/markdown/assignments/5-campuswire-lite.mdx","frontmatter":{"path":"/assignments/campuswire-lite","title":"Homework 5: Campuswire Lite","hidden":false,"due":"February 20, 2020"}}},{"node":{"fileAbsolutePath":"/Users/jesielviana/Dev/ifpi/new-web-dev/src/markdown/assignments/6-react-comment-app.mdx","frontmatter":{"path":"/assignments/react-comment-app","title":"Homework 6: React Comment App","hidden":false,"due":"March 03, 2020"}}},{"node":{"fileAbsolutePath":"/Users/jesielviana/Dev/ifpi/new-web-dev/src/markdown/assignments/7-game-of-life.mdx","frontmatter":{"path":"/assignments/7","title":"Homework 7: Conway\'s Game of Life","hidden":true,"due":"March 04, 2020"}}},{"node":{"fileAbsolutePath":"/Users/jesielviana/Dev/ifpi/new-web-dev/src/markdown/assignments/8-reddit-ama-chrome-extension.mdx","frontmatter":{"path":"/assignments/8","title":"Homework 8: Reddit AMA Chrome Extension","hidden":true,"due":"March 11, 2020"}}}]}}}')},zTTH:function(e,t,a){"use strict";var A=a("P8UN"),r=a("Wadk")(6),n="findIndex",i=!0;n in[]&&Array(1)[n]((function(){i=!1})),A(A.P+A.F*i,"Array",{findIndex:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),a("Dq1/")(n)}}]);
//# sourceMappingURL=component---src-pages-staff-js-4658248a9520586fb267.js.map