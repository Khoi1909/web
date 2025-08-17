const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["js/Base64Tool-CqLCQihl.js","js/utils-DAAOA82y.js","js/JWTTool-BctqftA_.js","js/JsonYamlTool-CIGFv7qK.js","js/CsvJsonTool-KKL3j4Fk.js","js/UUIDTool-Cw-zcgcp.js","js/TimestampTool-Dvk-sk-u.js","js/HashTool-BNjkMjU_.js","js/StringTool-DjStdfGn.js","js/ApiTool-D6e0jFNo.js","js/RegexTool-C_PvQayd.js"])))=>i.map(i=>d[i]);
var C=Object.defineProperty;var L=(i,e,t)=>e in i?C(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var l=(i,e,t)=>L(i,typeof e!="symbol"?e+"":e,t);import{R as I,F as f,g as n}from"./utils-DAAOA82y.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();var a=(i=>(i.ENCODING="encoding",i.CONVERSION="conversion",i.GENERATION="generation",i.STRING="string",i.API="api",i.REGEX="regex",i.CRYPTO="crypto",i.DATETIME="datetime",i.NETWORK="network",i.DEV="dev",i))(a||{}),m=(i=>(i.LIGHT="light",i.DARK="dark",i))(m||{});const A="modulepreload",$=function(i){return"/"+i},w={},p=function(e,t,o){let s=Promise.resolve();if(t&&t.length>0){let b=function(u){return Promise.all(u.map(v=>Promise.resolve(v).then(y=>({status:"fulfilled",value:y}),y=>({status:"rejected",reason:y}))))};document.getElementsByTagName("link");const c=document.querySelector("meta[property=csp-nonce]"),h=c?.nonce||c?.getAttribute("nonce");s=b(t.map(u=>{if(u=$(u),u in w)return;w[u]=!0;const v=u.endsWith(".css"),y=v?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${y}`))return;const g=document.createElement("link");if(g.rel=v?"stylesheet":A,v||(g.as="script"),g.crossOrigin="",g.href=u,h&&g.setAttribute("nonce",h),document.head.appendChild(g),v)return new Promise((E,S)=>{g.addEventListener("load",E),g.addEventListener("error",()=>S(new Error(`Unable to preload CSS for ${u}`)))})}))}function r(c){const h=new Event("vite:preloadError",{cancelable:!0});if(h.payload=c,window.dispatchEvent(h),!h.defaultPrevented)throw c}return s.then(c=>{for(const h of c||[])h.status==="rejected"&&r(h.reason);return e().catch(r)})};class d{static register(e,t){this.toolModules.set(e,t)}static async preloadPopularTools(){const e=this.popularTools.map(async t=>{const o=this.toolModules.get(t);if(o&&!this.preloadedModules.has(t)){const s=o();this.preloadedModules.set(t,s);try{await s,console.log(`✅ Preloaded tool: ${t}`)}catch(r){console.warn(`❌ Failed to preload tool: ${t}`,r)}}});await Promise.allSettled(e)}static async loadTool(e,t){try{let o;if(this.preloadedModules.has(e))o=await this.preloadedModules.get(e);else{const c=this.toolModules.get(e);if(!c)throw new Error(`Tool with ID "${e}" not registered for dynamic loading`);o=await c()}const s=this.getToolClassName(e),r=o[s];if(!r)throw new Error(`Tool class "${s}" not found in module for "${e}"`);return new r(t)}catch(o){throw console.error(`Failed to load tool "${e}":`,o),o}}static getToolClassName(e){return{"base64-encoder":"Base64Tool","jwt-decoder":"JWTTool","json-yaml":"JsonYamlTool","csv-json":"CsvJsonTool","uuid-generator":"UUIDTool","timestamp-converter":"TimestampTool","hash-generator":"HashTool","string-utilities":"StringTool","api-tester":"ApiTool","regex-tester":"RegexTool"}[e]||this.pascalCase(e)+"Tool"}static pascalCase(e){return e.split("-").map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join("")}static has(e){return this.toolModules.has(e)}static getRegisteredIds(){return Array.from(this.toolModules.keys())}}l(d,"toolModules",new Map),l(d,"preloadedModules",new Map),l(d,"popularTools",["base64-encoder","jwt-decoder","json-yaml","uuid-generator"]);function R(){d.register("base64-encoder",()=>p(()=>import("./Base64Tool-CqLCQihl.js"),__vite__mapDeps([0,1]))),d.register("jwt-decoder",()=>p(()=>import("./JWTTool-BctqftA_.js"),__vite__mapDeps([2,1]))),d.register("json-yaml",()=>p(()=>import("./JsonYamlTool-CIGFv7qK.js"),__vite__mapDeps([3,1]))),d.register("csv-json",()=>p(()=>import("./CsvJsonTool-KKL3j4Fk.js"),__vite__mapDeps([4,1]))),d.register("uuid-generator",()=>p(()=>import("./UUIDTool-Cw-zcgcp.js"),__vite__mapDeps([5,1]))),d.register("timestamp-converter",()=>p(()=>import("./TimestampTool-Dvk-sk-u.js"),__vite__mapDeps([6,1]))),d.register("hash-generator",()=>p(()=>import("./HashTool-BNjkMjU_.js"),__vite__mapDeps([7,1]))),d.register("string-utilities",()=>p(()=>import("./StringTool-DjStdfGn.js"),__vite__mapDeps([8,1]))),d.register("api-tester",()=>p(()=>import("./ApiTool-D6e0jFNo.js"),__vite__mapDeps([9,1]))),d.register("regex-tester",()=>p(()=>import("./RegexTool-C_PvQayd.js"),__vite__mapDeps([10,1])))}R();class T{static async discoverTools(){if(this.discoveredTools.length>0)return this.discoveredTools;const e=[{id:"base64-encoder",name:"Base64 Encoder/Decoder",description:"Encode and decode Base64 strings",category:a.ENCODING,icon:"base64",component:"Base64Tool",keywords:["base64","encode","decode","encoding"],featured:!0},{id:"jwt-decoder",name:"JWT Decoder",description:"Decode and verify JWT tokens",category:a.ENCODING,icon:"jwt",component:"JWTTool",keywords:["jwt","token","decode","json web token"],featured:!0},{id:"json-yaml",name:"JSON ↔ YAML Converter",description:"Convert between JSON and YAML formats",category:a.CONVERSION,icon:"json",component:"JsonYamlTool",keywords:["json","yaml","convert","format"],featured:!0},{id:"csv-json",name:"CSV ↔ JSON Converter",description:"Convert between CSV and JSON formats",category:a.CONVERSION,icon:"csv",component:"CsvJsonTool",keywords:["csv","json","convert","data"],featured:!1},{id:"uuid-generator",name:"UUID Generator",description:"Generate UUIDs (v1, v4, v5)",category:a.GENERATION,icon:"uuid",component:"UUIDTool",keywords:["uuid","generate","guid","unique"],featured:!0},{id:"timestamp-converter",name:"Timestamp Converter",description:"Convert timestamps and work with dates",category:a.DATETIME,icon:"timestamp",component:"TimestampTool",keywords:["timestamp","date","time","convert","unix"],featured:!1},{id:"hash-generator",name:"Hash Generator",description:"Generate MD5, SHA1, SHA256 hashes",category:a.CRYPTO,icon:"hash",component:"HashTool",keywords:["hash","md5","sha1","sha256","crypto"],featured:!0},{id:"string-utilities",name:"String Utilities",description:"String manipulation and transformation tools",category:a.STRING,icon:"string",component:"StringTool",keywords:["string","text","transform","utilities"],featured:!1},{id:"api-tester",name:"API Tester",description:"Test REST APIs like Postman",category:a.API,icon:"api",component:"ApiTool",keywords:["api","rest","http","postman","test"],featured:!0},{id:"regex-tester",name:"Regex Tester",description:"Test and debug regular expressions",category:a.REGEX,icon:"regex",component:"RegexTool",keywords:["regex","regexp","pattern","test"],featured:!1}];return this.discoveredTools=e.filter(t=>{const o=d.has(t.id);return o||console.warn(`Tool "${t.id}" not registered in DynamicToolLoader`),o}),this.discoveredTools}static async getToolsByCategory(e){return(await this.discoverTools()).filter(o=>o.category===e)}static async getFeaturedTools(){return(await this.discoverTools()).filter(t=>t.featured)}static async searchTools(e){const t=await this.discoverTools(),o=e.toLowerCase();return t.filter(s=>s.name.toLowerCase().includes(o)||s.description.toLowerCase().includes(o)||s.keywords.some(r=>r.toLowerCase().includes(o)))}static resetCache(){this.discoveredTools=[]}}l(T,"discoveredTools",[]);class F{constructor(){l(this,"currentTool",null);l(this,"searchQuery","");l(this,"themeMode",m.LIGHT);l(this,"sidebarCollapsed",!1);l(this,"tools",[]);l(this,"router");l(this,"initialized",!1);l(this,"listeners",new Map);this.router=new I,this.loadSettings(),this.initializeTools(),this.startBackgroundOptimizations()}async initializeTools(){try{this.tools=await T.discoverTools(),console.log(`🔧 Discovered ${this.tools.length} tools`),this.initialized=!0}catch(e){console.error("Failed to initialize tools:",e),this.tools=[],this.initialized=!0}}async startBackgroundOptimizations(){setTimeout(async()=>{try{await d.preloadPopularTools(),console.log("🚀 Popular tools preloaded for better performance")}catch(e){console.warn("Failed to preload popular tools:",e)}},2e3)}async waitForInitialization(){if(this.initialized)return;let e=0;for(;!this.initialized&&e<50;)await new Promise(t=>setTimeout(t,100)),e++;this.initialized||console.warn("Tool initialization timed out")}initializeRouting(){console.log("🎬 Initializing routing after views are ready..."),this.setupRoutes()}on(e,t){this.listeners.has(e)||this.listeners.set(e,[]),this.listeners.get(e).push(t)}emit(e,t){this.listeners.has(e)&&this.listeners.get(e).forEach(o=>o(t))}toggleTheme(){this.themeMode=this.themeMode===m.LIGHT?m.DARK:m.LIGHT,this.saveSettings(),this.emit("theme-changed",this.themeMode)}getTheme(){return this.themeMode}toggleSidebar(){this.sidebarCollapsed=!this.sidebarCollapsed,this.emit("sidebar-toggled",this.sidebarCollapsed)}isSidebarCollapsed(){return this.sidebarCollapsed}getCurrentTool(){return this.currentTool}getAllTools(){return this.tools}async getFeaturedTools(){return await this.getFavoriteTools()}async getFavoriteTools(){const e=await T.discoverTools(),t=f.getFavorites();return e.filter(o=>t.includes(o.id))}async search(e){this.searchQuery=e;const t=await T.searchTools(e);return this.emit("search-results",t),t}getSearchQuery(){return this.searchQuery}clearSearch(){this.searchQuery="",this.emit("search-cleared")}toggleFavorite(e){const t=f.toggleFavorite(e);return this.emit("favorite-changed",{toolId:e,isFavorite:t}),this.emit("favorites-updated",f.getFavorites()),t}isFavorite(e){return f.isFavorite(e)}getFavoriteCount(){return f.getCount()}clearAllFavorites(){f.clearAll(),this.emit("favorites-cleared"),this.emit("favorites-updated",[])}async getNavigationItems(){const e=Object.values(a),t=[];for(const o of e){const s=await T.getToolsByCategory(o);s.length>0&&t.push({id:o,label:this.getCategoryLabel(o),category:o,tools:s,icon:this.getCategoryIcon(o),expanded:!1})}return t}getCategoryLabel(e){return{[a.ENCODING]:"Encoding",[a.CONVERSION]:"Conversion",[a.GENERATION]:"Generation",[a.STRING]:"String Utils",[a.API]:"API Testing",[a.REGEX]:"Regex",[a.CRYPTO]:"Cryptography",[a.DATETIME]:"Date & Time",[a.NETWORK]:"Network",[a.DEV]:"Development"}[e]}getCategoryIcon(e){return{[a.ENCODING]:n("encoding"),[a.CONVERSION]:n("conversion"),[a.GENERATION]:n("generation"),[a.STRING]:n("string"),[a.API]:n("api"),[a.REGEX]:n("regex"),[a.CRYPTO]:n("crypto"),[a.DATETIME]:n("datetime"),[a.NETWORK]:n("network"),[a.DEV]:n("dev")}[e]}loadSettings(){try{const e=localStorage.getItem("dev-tools-theme");e&&Object.values(m).includes(e)&&(this.themeMode=e);const t=localStorage.getItem("dev-tools-sidebar-collapsed");t!==null&&(this.sidebarCollapsed=JSON.parse(t))}catch(e){console.warn("Failed to load settings from localStorage:",e)}}saveSettings(){try{localStorage.setItem("dev-tools-theme",this.themeMode),localStorage.setItem("dev-tools-sidebar-collapsed",JSON.stringify(this.sidebarCollapsed))}catch(e){console.warn("Failed to save settings to localStorage:",e)}}initializeNavigation(){}goHome(){this.currentTool=null,this.clearSearch(),document.title="Dev Tools Platform - Developer Utilities",this.router.navigate("/"),this.emit("show-home")}openGitHub(){window.open("https://github.com","_blank")}setupRoutes(){console.log("🚀 Setting up routes..."),this.router.addRoute("/",()=>{console.log("🏠 Home route triggered"),this.currentTool=null,this.clearSearch(),document.title="Dev Tools Platform - Developer Utilities",this.emit("show-home")}),this.router.addRoute("/tool/:id",()=>{const t=this.router.getCurrentPath().split("/")[2];console.log("🔧 Tool route triggered for:",t),t?this.selectToolById(t):this.goHome()}),this.router.setNotFoundHandler(()=>{console.log("❌ 404 handler triggered"),this.goHome()}),console.log("✅ Routes registered, initializing router..."),this.router.init()}selectTool(e){this.router.navigate(`/tool/${e}`)}selectToolById(e){const t=this.tools.find(o=>o.id===e);t?(this.currentTool=t,document.title=`${t.name} - Dev Tools Platform`,this.emit("tool-selected",t)):this.goHome()}getRouter(){return this.router}}class M{constructor(e,t){l(this,"controller");l(this,"container");this.controller=e,this.container=t,this.init(),this.bindEvents()}init(){this.container.innerHTML=`
      <header class="app-header">
        <div class="header-left">
          <button class="home-btn" id="home-btn">
            <span class="icon">${n("home")}</span>
            <span class="text">Home</span>
          </button>
        </div>
        
        <div class="header-center">
          <div class="search-container">
            <input 
              type="text" 
              class="search-input" 
              id="search-input"
              placeholder="Search tools..."
              autocomplete="off"
            />
            <button class="search-clear" id="search-clear" style="display: none;">
              <span class="icon">${n("x")}</span>
            </button>
          </div>
          <div class="search-results" id="search-results" style="display: none;"></div>
        </div>
        
        <div class="header-right">
          <button class="github-btn" id="github-btn" title="View on GitHub">
            <span class="icon">${n("github")}</span>
          </button>
          <button class="theme-toggle" id="theme-toggle" title="Toggle theme">
            <span class="icon">${this.controller.getTheme()===m.LIGHT?n("moon"):n("sun")}</span>
          </button>
        </div>
      </header>
    `}bindEvents(){this.container.querySelector("#home-btn")?.addEventListener("click",()=>{this.controller.goHome()});const t=this.container.querySelector("#theme-toggle");t?.addEventListener("click",()=>{t.classList.add("switching"),setTimeout(()=>{t.classList.remove("switching")},400),this.controller.toggleTheme()}),this.container.querySelector("#github-btn")?.addEventListener("click",()=>{this.controller.openGitHub()});const s=this.container.querySelector("#search-input"),r=this.container.querySelector("#search-clear"),c=this.container.querySelector("#search-results");s?.addEventListener("input",async h=>{const b=h.target.value;await this.handleSearch(b,r,c)}),r?.addEventListener("click",()=>{s.value="",this.controller.clearSearch(),r.style.display="none",c.style.display="none"}),this.controller.on("theme-changed",h=>{this.updateThemeIcon(h)}),this.controller.on("search-results",h=>{this.displaySearchResults(h,c)}),this.controller.on("search-cleared",()=>{c.style.display="none"})}async handleSearch(e,t,o){if(e.trim()){t.style.display="block";const s=await this.controller.search(e);this.displaySearchResults(s,o)}else t.style.display="none",o.style.display="none",this.controller.clearSearch()}displaySearchResults(e,t){e.length===0?t.innerHTML='<div class="search-no-results">No tools found</div>':(t.innerHTML=e.map(o=>`
        <div class="search-result-item" data-tool-id="${o.id}">
          <span class="tool-icon">${n(o.icon)}</span>
          <div class="tool-info">
            <div class="tool-name">${o.name}</div>
            <div class="tool-description">${o.description}</div>
          </div>
        </div>
      `).join(""),t.querySelectorAll(".search-result-item").forEach(o=>{o.addEventListener("click",()=>{const s=o.getAttribute("data-tool-id");s&&(this.controller.selectTool(s),t.style.display="none")})})),t.style.display="block"}updateThemeIcon(e){const t=this.container.querySelector("#theme-toggle .icon");t&&(t.innerHTML=e===m.LIGHT?n("moon"):n("sun"))}}class N{constructor(e,t){l(this,"controller");l(this,"container");l(this,"navItems",[]);this.controller=e,this.container=t,this.init(),this.bindEvents()}async init(){this.navItems=await this.controller.getNavigationItems(),this.render()}render(){const e=this.controller.isSidebarCollapsed();this.container.innerHTML=`
      <aside class="sidebar ${e?"collapsed":""}">
        <div class="sidebar-header">
          <button class="sidebar-toggle" id="sidebar-toggle">
            <span class="icon">${e?n("menu"):n("chevronLeft")}</span>
          </button>
          <h2 class="sidebar-title sidebar-content">Dev Tools</h2>
        </div>
        
        <nav class="sidebar-nav">
          ${this.renderNavItems()}
        </nav>
      </aside>
    `}renderNavItems(){const e=this.controller.isSidebarCollapsed();return this.navItems.map(t=>{const o=t.tools.length>0;return`
        <div class="nav-category" data-category="${t.category}">
          <div class="nav-category-header ${o?"clickable":""}" ${o?`data-category="${t.category}"`:""}>
            <span class="category-icon">${t.icon}</span>
            ${e?"":`
              <span class="category-label">${t.label}</span>
              ${o?`<span class="category-arrow ${t.expanded?"expanded":""}">${n("chevronRight")}</span>`:""}
            `}
          </div>
          
          ${!e&&o?`
            <div class="nav-tools ${t.expanded?"expanded":""}">
              ${t.tools.map(s=>`
                <div class="nav-tool" data-tool-id="${s.id}">
                  <span class="tool-icon">${n(s.icon)}</span>
                  <span class="tool-name">${s.name}</span>
                  ${this.renderToolBadges(s)}
                </div>
              `).join("")}
            </div>
          `:""}
          
          ${e&&o?`
            <div class="nav-tooltip">
              <div class="tooltip-content">
                <div class="tooltip-title">${t.label}</div>
                <div class="tooltip-tools">
                  ${t.tools.map(s=>`
                    <div class="tooltip-tool" data-tool-id="${s.id}">
                      ${n(s.icon)} ${s.name}
                      ${this.renderToolBadges(s)}
                    </div>
                  `).join("")}
                </div>
              </div>
            </div>
          `:""}
        </div>
      `}).join("")}renderToolBadges(e){return this.controller.isFavorite(e.id)?`<span class="favorite-badge">${n("heartFilled")}</span>`:""}bindEvents(){this.container.addEventListener("click",e=>{const t=e.target;if(t.closest("#sidebar-toggle")&&this.animateSidebarToggle(),t.closest(".nav-category-header.clickable")){const s=t.closest(".nav-category")?.dataset.category;s&&this.toggleCategory(s)}if(t.closest(".nav-tool")||t.closest(".tooltip-tool")){const s=t.closest("[data-tool-id]")?.dataset.toolId;s&&this.controller.selectTool(s)}}),this.controller.on("sidebar-toggled",()=>{this.render()}),this.controller.on("tool-selected",e=>{this.highlightSelectedTool(e.id)}),this.controller.on("favorite-changed",()=>{this.render()}),this.controller.on("show-home",()=>{this.clearSelection()})}toggleCategory(e){const t=this.navItems.find(o=>o.category===e);if(t){t.expanded=!t.expanded;const o=this.container.querySelector(`[data-category="${e}"]`);if(o){const s=o.querySelector(".nav-tools"),r=o.querySelector(".category-arrow");s&&r&&(t.expanded?(s.classList.add("expanded"),r.classList.add("expanded")):(s.classList.remove("expanded"),r.classList.remove("expanded")))}}}highlightSelectedTool(e){this.container.querySelectorAll(".nav-tool.selected").forEach(o=>{o.classList.remove("selected")});const t=this.container.querySelector(`[data-tool-id="${e}"]`);if(t){t.classList.add("selected");const s=t.closest(".nav-category")?.dataset.category;if(s){const r=this.navItems.find(c=>c.category===s);r&&!r.expanded&&this.toggleCategory(s)}}}clearSelection(){this.container.querySelectorAll(".nav-tool.selected").forEach(e=>{e.classList.remove("selected")})}animateSidebarToggle(){const e=this.container.querySelector(".sidebar"),t=this.controller.isSidebarCollapsed();if(this.controller.toggleSidebar(),t){e.classList.remove("collapsed"),e.classList.add("expanding");const o=e.querySelector("#sidebar-toggle .icon");o&&(o.innerHTML=n("chevronLeft")),setTimeout(()=>{e.classList.remove("expanding")},600)}else e.classList.add("collapsing"),setTimeout(()=>{const o=e.querySelector("#sidebar-toggle .icon");o&&(o.innerHTML=n("menu"))},150),setTimeout(()=>{e.classList.add("collapsed"),e.classList.remove("collapsing")},300)}}class k{constructor(e,t){l(this,"controller");l(this,"container");l(this,"currentTool",null);this.controller=e,this.container=t,this.init(),this.bindEvents()}init(){this.container.innerHTML=`
      <main class="main-content loading">
        <div class="loading-container">
          <div class="loading-spinner"></div>
          <p>Loading...</p>
        </div>
      </main>
    `}bindEvents(){this.controller.on("tool-selected",async e=>{this.container.innerHTML.includes("loading-container")?await this.showTool(e):this.animateContentChange(async()=>await this.showTool(e))}),this.controller.on("show-home",async()=>{this.container.innerHTML.includes("loading-container")?await this.showHome():this.animateContentChange(async()=>await this.showHome())})}animateContentChange(e){this.container.classList.add("slide-out"),setTimeout(()=>{e(),this.container.classList.remove("slide-out"),this.container.classList.add("slide-in"),setTimeout(()=>{this.container.classList.remove("slide-in")},400)},300)}async showHome(){const e=await this.controller.getFavoriteTools(),t=this.controller.getAllTools();this.container.innerHTML=`
      <main class="main-content home">
        <div class="home-header">
          <h1 class="home-title">Developer Tools Platform</h1>
          <p class="home-subtitle">
            A comprehensive collection of utility tools for developers and IT professionals
          </p>
        </div>

        ${e.length>0?`
        <section class="favorite-tools">
          <h2 class="section-title">
            <span class="icon">${n("heartFilled")}</span>
            Your Favorite Tools (${e.length})
          </h2>
          <div class="tools-grid">
            ${e.map(o=>this.renderToolCard(o)).join("")}
          </div>
        </section>
        `:""}

        <section class="all-tools">
          <h2 class="section-title">
            <span class="icon">${n("tools")}</span>
            All Tools (${t.length})
          </h2>
          <div class="tools-grid">
            ${t.map(o=>this.renderToolCard(o)).join("")}
          </div>
        </section>

        <section class="platform-info">
          <div class="info-cards">
            <div class="info-card">
              <div class="info-icon">${n("rocket")}</div>
              <h3>Fast & Efficient</h3>
              <p>All tools run client-side for maximum speed and privacy</p>
            </div>
            <div class="info-card">
              <div class="info-icon">${n("shield")}</div>
              <h3>Privacy First</h3>
              <p>No data is sent to servers - everything stays in your browser</p>
            </div>
            <div class="info-card">
              <div class="info-icon">${n("smartphone")}</div>
              <h3>Responsive Design</h3>
              <p>Works perfectly on desktop, tablet, and mobile devices</p>
            </div>
            <div class="info-card">
              <div class="info-icon">${n("gift")}</div>
              <h3>Completely Free</h3>
              <p>Open source and free to use - no registration required</p>
            </div>
          </div>
        </section>
      </main>
    `,this.bindToolCardEvents()}async showTool(e){this.currentTool&&this.currentTool.destroy&&(this.currentTool.destroy(),this.currentTool=null),this.container.innerHTML=`
      <main class="main-content tool-view">
        <div class="tool-content" id="tool-content">
          <!-- Tool component will be rendered here -->
        </div>
      </main>
    `,await this.renderToolComponent(e)}async renderToolComponent(e){const t=this.container.querySelector("#tool-content");try{t.innerHTML=`
        <div class="tool-loading">
          <div class="loading-spinner"></div>
          <p>Loading ${e.name}...</p>
        </div>
      `,this.currentTool=await d.loadTool(e.id,t)}catch(o){console.error(`Failed to load tool "${e.id}":`,o),t.innerHTML=`
        <div class="tool-error">
          <div class="error-icon">${n("alert")}</div>
          <h3>Failed to load tool</h3>
          <p>The tool "${e.name}" could not be loaded. Please try again.</p>
          <button class="btn btn-primary" onclick="location.reload()">Refresh Page</button>
        </div>
      `}}renderToolCard(e){const t=this.controller.isFavorite(e.id);return`
      <div class="tool-card" data-tool-id="${e.id}">
        <div class="tool-card-header">
          <span class="tool-card-icon">${n(e.icon)}</span>
          <button class="favorite-btn ${t?"active":""}" 
                  data-tool-id="${e.id}" 
                  title="${t?"Remove from favorites":"Add to favorites"}">
            ${t?n("heartFilled"):n("heart")}
          </button>
        </div>
        <div class="tool-card-body">
          <h3 class="tool-card-title">${e.name}</h3>
          <p class="tool-card-description">${e.description}</p>
          <div class="tool-card-category">${this.getCategoryLabel(e.category)}</div>
        </div>
        <div class="tool-card-footer">
          <button class="tool-card-button">Open Tool</button>
        </div>
      </div>
    `}getToolFeatures(e){return{"base64-encoder":["Encode text to Base64","Decode Base64 to text","Handle file encoding","Copy to clipboard functionality"],"jwt-decoder":["Decode JWT header and payload","Verify JWT signature","Pretty print JSON","Token validation"],"json-yaml":["Convert JSON to YAML","Convert YAML to JSON","Syntax highlighting","Error validation"],"uuid-generator":["Generate UUID v1, v4, v5","Bulk generation","Custom namespace support","Copy multiple UUIDs"],"hash-generator":["MD5 hash generation","SHA1, SHA256, SHA512 support","File hash calculation","Compare hashes"],"api-tester":["Send HTTP requests","Multiple request methods","Custom headers support","Response formatting"],"regex-tester":["Test regex patterns","Highlight matches","Group capture support","Common regex library"]}[e]||["Feature-rich implementation","User-friendly interface","Fast performance"]}bindToolCardEvents(){this.container.querySelectorAll(".tool-card").forEach(e=>{e.addEventListener("click",t=>{if(t.target.closest(".favorite-btn"))return;const o=e.getAttribute("data-tool-id");o&&this.controller.selectTool(o)})}),this.container.querySelectorAll(".favorite-btn").forEach(e=>{e.addEventListener("click",async t=>{t.stopPropagation();const s=e.closest(".tool-card")?.getAttribute("data-tool-id");if(s){const r=this.controller.toggleFavorite(s);this.updateAllFavoriteButtons(s,r),await this.refreshFavoriteSection()}})})}isShowingFavorites(){const e=this.container.querySelector(".favorite-tools-section");return e!==null&&e.style.display!=="none"}async refreshFavoriteSection(){const e=this.container.querySelector(".favorite-tools-section"),t=await this.controller.getFavoriteTools();if(t.length>0){const o=`
        <section class="tools-section favorite-tools-section">
          <div class="section-header">
            <h2><i class="fas fa-heart"></i> Your Favorite Tools</h2>
            <p>Quick access to your most-used tools</p>
          </div>
          <div class="tools-grid">
            ${t.map(s=>this.renderToolCard(s)).join("")}
          </div>
        </section>
      `;if(e)e.outerHTML=o;else{const s=this.container.querySelector(".main-content");if(s){const r=s.querySelector(".tools-section");r?r.insertAdjacentHTML("beforebegin",o):s.insertAdjacentHTML("afterbegin",o)}}}else e&&e.remove();t.length>0&&this.bindFavoriteSectionEvents()}bindFavoriteSectionEvents(){const e=this.container.querySelector(".favorite-tools-section");e&&(e.querySelectorAll(".tool-card").forEach(t=>{t.addEventListener("click",o=>{if(o.target.closest(".favorite-btn"))return;const s=t.getAttribute("data-tool-id");s&&this.controller.selectTool(s)})}),e.querySelectorAll(".favorite-btn").forEach(t=>{t.addEventListener("click",async o=>{o.stopPropagation();const r=t.closest(".tool-card")?.getAttribute("data-tool-id");if(r){const c=this.controller.toggleFavorite(r);this.updateAllFavoriteButtons(r,c),await this.refreshFavoriteSection()}})}))}updateAllFavoriteButtons(e,t){this.container.querySelectorAll(`.favorite-btn[data-tool-id="${e}"]`).forEach(s=>{s.innerHTML=t?n("heartFilled"):n("heart"),s.classList.toggle("active",t),s.setAttribute("title",t?"Remove from favorites":"Add to favorites")})}getCategoryLabel(e){return{encoding:"Encoding",conversion:"Conversion",generation:"Generation",string:"String Utils",api:"API Testing",regex:"Regex",crypto:"Cryptography",datetime:"Date & Time",network:"Network",dev:"Development"}[e]||e}}class O{constructor(){l(this,"controller");l(this,"headerView");l(this,"sidebarView");l(this,"mainContentView");this.init()}async init(){this.controller=new F,await this.controller.waitForInitialization(),window.appController=this.controller,this.createAppStructure(),await this.initializeViews(),this.setupTheme(),this.setupGlobalEvents(),this.controller.initializeRouting()}createAppStructure(){document.body.innerHTML=`
      <div class="app">
        <div id="sidebar-container"></div>
        <div class="app-container">
          <div id="header-container"></div>
          <div id="main-container"></div>
        </div>
      </div>
    `}async initializeViews(){const e=document.getElementById("header-container"),t=document.getElementById("sidebar-container"),o=document.getElementById("main-container");this.headerView=new M(this.controller,e),this.sidebarView=new N(this.controller,t),this.mainContentView=new k(this.controller,o)}setupTheme(){this.applyTheme(this.controller.getTheme()),this.controller.on("theme-changed",e=>{this.applyTheme(e)})}applyTheme(e){document.documentElement.classList.add("theme-transitioning"),document.documentElement.setAttribute("data-theme",e),setTimeout(()=>{document.documentElement.classList.remove("theme-transitioning")},300)}setupGlobalEvents(){document.addEventListener("keydown",e=>{if((e.ctrlKey||e.metaKey)&&e.key==="k"){e.preventDefault();const t=document.getElementById("search-input");t&&(t.focus(),t.select())}if(e.key==="Escape"){const t=document.getElementById("search-input");t&&t===document.activeElement?(t.blur(),this.controller.clearSearch()):this.controller.getCurrentTool()&&this.controller.goHome()}(e.ctrlKey||e.metaKey)&&e.key==="/"&&(e.preventDefault(),this.controller.toggleSidebar())}),document.addEventListener("click",e=>{const t=document.querySelector(".search-container"),o=document.getElementById("search-results");t&&o&&!t.contains(e.target)&&(o.style.display="none")}),window.addEventListener("resize",()=>{this.handleResize()}),this.handleResize()}handleResize(){window.innerWidth<=768&&!this.controller.isSidebarCollapsed()&&this.controller.toggleSidebar()}getController(){return this.controller}}document.addEventListener("DOMContentLoaded",()=>{try{const i=new O;console.log("🚀 Dev Tools Platform initialized successfully"),window.devToolsApp=i}catch(i){console.error("❌ Failed to initialize application:",i),document.body.innerHTML=`
      <div style="
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        background-color: #f8fafc;
        color: #1f2937;
      ">
        <div style="text-align: center; max-width: 500px; padding: 40px;">
          <h1 style="font-size: 24px; margin-bottom: 16px; color: #dc2626;">
            ⚠️ Application Error
          </h1>
          <p style="margin-bottom: 24px; color: #6b7280; line-height: 1.6;">
            Failed to load the Developer Tools Platform. Please refresh the page or check the console for more details.
          </p>
          <button 
            onclick="window.location.reload()" 
            style="
              background-color: #1e40af;
              color: white;
              border: none;
              padding: 12px 24px;
              border-radius: 8px;
              font-weight: 600;
              cursor: pointer;
              transition: background-color 0.2s;
            "
            onmouseover="this.style.backgroundColor='#1d4ed8'"
            onmouseout="this.style.backgroundColor='#1e40af'"
          >
            🔄 Reload Page
          </button>
        </div>
      </div>
    `}});window.devToolsUtils={setTheme:i=>{const e=window.devToolsApp;if(e){const t=e.getController();t.getTheme()!==i&&t.toggleTheme()}},selectTool:i=>{const e=window.devToolsApp;e&&e.getController().selectTool(i)},search:i=>{const e=window.devToolsApp;if(e)return e.getController().search(i)},getAllTools:()=>{const i=window.devToolsApp;if(i)return i.getController().getAllTools()}};"serviceWorker"in navigator&&window.addEventListener("load",()=>{console.log("💡 Service Worker support detected - PWA features available")});window.addEventListener("error",i=>{console.error("💥 Uncaught error:",i.error)});window.addEventListener("unhandledrejection",i=>{console.error("💥 Unhandled promise rejection:",i.reason)});
