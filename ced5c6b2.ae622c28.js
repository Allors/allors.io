(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{86:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return h}));var r=a(1),i=a(6),n=(a(0),a(94)),o=a(96),c={},s={unversionedId:"Platform/Derivation/Derivation",id:"Platform/Derivation/Derivation",isDocsHomePage:!1,title:"Derivation",description:"Example",source:"@site/docs/Platform/Derivation/Derivation.mdx",permalink:"/docs/Platform/Derivation/Derivation",editUrl:"https://github.com/allors/allors.io/edit/master/docs/Platform/Derivation/Derivation.mdx",sidebar:"Allors",previous:{title:"Overview",permalink:"/docs/Platform/Derivation/Overview"},next:{title:"Demo",permalink:"/docs/Platform/Derivation/Demo"}},l=[{value:"Explaining Domain Example (Class Consistency)",id:"explaining-domain-example-class-consistency",children:[]},{value:"PreDerive Example",id:"prederive-example",children:[]},{value:"Example of Sync",id:"example-of-sync",children:[]},{value:"Example PostDerive",id:"example-postderive",children:[]},{value:"Diagram of Class Consistency",id:"diagram-of-class-consistency",children:[]},{value:"Go over the Derivation process by Class + Code",id:"go-over-the-derivation-process-by-class--code",children:[{value:"Derivation.cs",id:"derivationcs",children:[]},{value:"Cycle.cs",id:"cyclecs",children:[]},{value:"Iteration.cs",id:"iterationcs",children:[]},{value:"Preparation.cs",id:"preparationcs",children:[]},{value:"Graph.cs",id:"graphcs",children:[]},{value:"Node.cs",id:"nodecs",children:[]},{value:"AccumulatedChangeSet.cs",id:"accumulatedchangesetcs",children:[]}]},{value:"Example overflows that go through all Class",id:"example-overflows-that-go-through-all-class",children:[]}],d={rightToc:l};function h(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(n.b)("wrapper",Object(r.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"example"},"Example"),Object(n.b)("h2",{id:"explaining-domain-example-class-consistency"},"Explaining Domain Example (Class Consistency)"),Object(n.b)("img",{alt:"Example Domain",src:Object(o.a)("img/derivation/example-domain.png")}),Object(n.b)("p",null,"We","'","re going to take as an example the game weeding is played with 4 people (each person has a name) each game has a start/end date,, number of skips,, a game type and participating people, each game has leaders,, defenders and ultimately a winning team,, with this information a score is calculated. After each game,the score per person is storedin the scoreboard. . ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://wikipedia.org/wiki/Colour_whist"}),"Click here for more information about the rules of the game")),Object(n.b)("h2",{id:"prederive-example"},"PreDerive Example"),Object(n.b)("p",null,"The PreDerive of game is going to look at which variable depends on each other (dependencies) before they are derived.","'",' In this case, game will add a dependency on the scoreboard to which this game is associated. Important is the order in the "AddDependency" methods, the first object will not be derived until after the second object. In this case, our game (this) will be derived first, and then only the scoreboard (this. ScoreboardWhereGame) to which this game is linked.'),Object(n.b)("pre",null,Object(n.b)("code",Object(r.a)({parentName:"pre"},{className:"language-csharp"}),"")),Object(n.b)("p",null,"Example of Derive"),Object(n.b)("p",null,'This mode of game introduces a variable derivation,checking whether the game\'s start/finish date is legitimate,equates the defenders with the players except the attackers and ins nor insenses the "Sync" methods.'),Object(n.b)("pre",null,Object(n.b)("code",Object(r.a)({parentName:"pre"},{className:"language-csharp"}),"")),Object(n.b)("h2",{id:"example-of-sync"},"Example of Sync"),Object(n.b)("p",null,"This sync method of game checks if a scoreboard exists if it doesn","'","t delete every score in the game if it does make it a player list,, then it goes running over all the scores, delete any player who alreadyhas a score had and delete every score from whichthe player no longeroccurs then it goes running over the created player list and generate scores for players without score.."),Object(n.b)("pre",null,Object(n.b)("code",Object(r.a)({parentName:"pre"},{className:"language-csharp"}),"")),Object(n.b)("h2",{id:""}),Object(n.b)("h2",{id:"example-postderive"},"Example PostDerive"),Object(n.b)("h1",{id:"extended"},"Extended"),Object(n.b)("h2",{id:"diagram-of-class-consistency"},"Diagram of Class Consistency"),Object(n.b)("img",{alt:"Example Diagram",src:Object(o.a)("img/derivation/class-governs-derivation.png")}),Object(n.b)("p",null,"This diagram shows all the class that governs the derivation process."),Object(n.b)("img",{alt:"Example Diagram",src:Object(o.a)("img/derivation/interfaces-derivation-process.png")}),Object(n.b)("p",null,"This diagram shows all the interfaces of the derivation process."),Object(n.b)("h2",{id:"go-over-the-derivation-process-by-class--code"},"Go over the Derivation process by Class + Code"),Object(n.b)("h3",{id:"derivationcs"},"Derivation.cs"),Object(n.b)("img",{alt:"Example Diagram",src:Object(o.a)("img/derivation/derivation-cs.png")}),Object(n.b)("p",null,'The derivation process starts in the Derivation.cs class. This class contains the "Derive" methods that are called to start the derivation process.'),Object(n.b)("pre",null,Object(n.b)("code",Object(r.a)({parentName:"pre"},{className:"language-csharp"}),"")),Object(n.b)("p",null,'The "Derive" methods will create a "CycleCycle object" and there the "Execute" methods of invocation. These methods receive all "Marked objects"" of which we are aware. A "marked object" is an object marked by another object, the result is that this highlighted object will be derived. This will continue to be repeated until all objects are derived. . Once all objects are derived, we return a validation stating that there were problems or not. It is possible to force a Derive even though there are no changes, suppose you still want an object or several objects to be distracted again.'),Object(n.b)("h3",{id:"cyclecs"},"Cycle.cs"),Object(n.b)("img",{alt:"Example Diagram",src:Object(o.a)("img/derivation/cycle-cs.png")}),Object(n.b)("p",null,'The "Cycle" class aims to start the (iteration) and then perform the Post Derives.'),Object(n.b)("pre",null,Object(n.b)("code",Object(r.a)({parentName:"pre"},{className:"language-csharp"}),"")),Object(n.b)("p",null,'The "Execute" methods create an "Iteration object" and then ins nor the "Execute" methods of this object. These methods will receive all objects that can be executed postderive and all highlighted objects. This will continue to repeat until all objects have completed their PreDerives and Derives. After this, we will call all posts of all items that have not been deleted.'),Object(n.b)("h3",{id:"iterationcs"},"Iteration.cs"),Object(n.b)("img",{alt:"Example Diagram",src:Object(o.a)("img/derivation/iteration-cs.png")}),Object(n.b)("p",null,'The "Iteration" class aims to wait until the PreDerives are executed and then perform the Derives.'),Object(n.b)("pre",null,Object(n.b)("code",Object(r.a)({parentName:"pre"},{className:"language-csharp"}),"")),Object(n.b)("p",null,'The "Execute" method is called by the "CCycle"class. If we have received marked objects, we will refer them to the "Graph object"". The "Preparation.Execute()" will be released by the PreDerives.ren This will continue to repeat until all PreDerives are ready. When all the PreDerives are ready,the Derives are carried out.'),Object(n.b)("pre",null,Object(n.b)("code",Object(r.a)({parentName:"pre"},{className:"language-csharp"}),"")),Object(n.b)("p",null,'The "Mark" method is called from a PreDerive of an object. This method will ensure that the object it is given is marked as a parameter if it has not already'),Object(n.b)("p",null,'The "AddDependency" method is also called from a PreDerive of an object. These methods will create the dependency between the received objects.'),Object(n.b)("h3",{id:"preparationcs"},"Preparation.cs"),Object(n.b)("img",{alt:"Example Diagram",src:Object(o.a)("img/derivation/preparation-cs.png")}),Object(n.b)("p",null,'The "Preparation" class aims to perform the prederives.'),Object(n.b)("pre",null,Object(n.b)("code",Object(r.a)({parentName:"pre"},{className:"language-csharp"}),"")),Object(n.b)("p",null,'The constructor will request the "changeSet". The "session. Checkpoint" makes a changeet of a certain point. If there are any derives, the objects are initialized. The "changeObjectIds" variable is a collection of all object id that have changed. A collection is filled with the objects that have been changed and the highlighted objects.'),Object(n.b)("pre",null,Object(n.b)("code",Object(r.a)({parentName:"pre"},{className:"language-csharp"}),"")),Object(n.b)("p",null,'The "Execute" method ensures that all objects are prederived and added to the "Prederived" collection.'),Object(n.b)("h3",{id:"graphcs"},"Graph.cs"),Object(n.b)("img",{alt:"Example Diagram",src:Object(o.a)("img/derivation/graph-cs.png")}),Object(n.b)("p",null,'The "Graph" class aims to create the "DerivationNodes" and to call their "TopologicalDerive" by node.'),Object(n.b)("pre",null,Object(n.b)("code",Object(r.a)({parentName:"pre"},{className:"language-csharp"}),"")),Object(n.b)("p",null,'The "GetOrAddDerivationNode" merthode will look into whether or not the object receiving this method already has a "Node", if not there will be "Node" created, if it will find the correct "Node". In both cases, the Node will be returned.'),Object(n.b)("pre",null,Object(n.b)("code",Object(r.a)({parentName:"pre"},{className:"language-csharp"}),"")),Object(n.b)("p",null,'The "Derive" method is about all "Nodes" loops and for each "Node" the "TopologicalDerive" call.'),Object(n.b)("h3",{id:"nodecs"},"Node.cs"),Object(n.b)("img",{alt:"Example Diagram",src:Object(o.a)("img/derivation/node-cs.png")}),Object(n.b)("p",null,'The "Node" class aims to invoke the "OnDerive" method of its object. This is not done by any order, but take into account "Dependencies".'),Object(n.b)("pre",null,Object(n.b)("code",Object(r.a)({parentName:"pre"},{className:"language-csharp"}),"")),Object(n.b)("p",null,'The "TopologicalDerive" method is the first to look at the fact that the current "Node" has not yet been addressed in order to prevent the same thing from being performed twice. Then it is looked at that there may or may not be "Dependencies", if this is the case we willperform their "TopologicalDerive" before st. Once all "Dependencies" has performed their "TopologicalDerive" we are going to call our own object its "OnDerive" methods. aanroepen.'),Object(n.b)("p",null,'The "TopologicalDerive" method is a variant of a Topological Sort. For more info click ',Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Topological_sorting#Kahn's_algorithm"}),"here."),"."),Object(n.b)("h3",{id:"accumulatedchangesetcs"},"AccumulatedChangeSet.cs"),Object(n.b)("p",null,'The "AccumulatedChangeSet" keeps track of what',"'","s beenadjusted. Every time we do a Derive we can look in this changeset what has been adjusted. Because we can see what has been adjusted, we can prevent a possible course."),Object(n.b)("h2",{id:"example-overflows-that-go-through-all-class"},"Example overflows that go through all Class"),Object(n.b)("p",null,"(dotuml)"))}h.isMDXComponent=!0},94:function(e,t,a){"use strict";a.d(t,"a",(function(){return h})),a.d(t,"b",(function(){return m}));var r=a(0),i=a.n(r);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=i.a.createContext({}),d=function(e){var t=i.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c({},t,{},e)),a},h=function(e){var t=d(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},p=Object(r.forwardRef)((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),h=d(a),p=r,m=h["".concat(o,".").concat(p)]||h[p]||b[p]||n;return a?i.a.createElement(m,c({ref:t},l,{components:a})):i.a.createElement(m,c({ref:t},l))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,o=new Array(n);o[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<n;l++)o[l]=a[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},95:function(e,t,a){"use strict";var r=a(0),i=a(20);t.a=function(){var e=Object(r.useContext)(i.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},96:function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return o}));var r=a(95),i=a(98);function n(){var e=Object(r.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=void 0===t?"/":t,n=e.url;return{withBaseUrl:function(e,t){return function(e,t,a,r){var n=void 0===r?{}:r,o=n.forcePrependBaseUrl,c=void 0!==o&&o,s=n.absolute,l=void 0!==s&&s;if(!a)return a;if(a.startsWith("#"))return a;if(Object(i.b)(a))return a;if(c)return t+a;var d=!a.startsWith(t)?t+a.replace(/^\//,""):a;return l?e+d:d}(n,a,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,n().withBaseUrl)(e,t)}},98:function(e,t,a){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!r(e)}a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return i}))}}]);