var d=Object.defineProperty;var h=(c,t,e)=>t in c?d(c,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):c[t]=e;var l=(c,t,e)=>h(c,typeof t!="symbol"?t+"":t,e);import{g as n}from"./utils-DAAOA82y.js";class v{constructor(t){l(this,"container");l(this,"regexHistory",[]);this.container=t,this.render(),this.attachEventListeners()}render(){this.container.innerHTML=`
      <div class="tool-container">
        <div class="tool-header">
          <div class="tool-icon">${n("regexTool")}</div>
          <div class="tool-title">
            <h2>Regex Tester</h2>
            <p>Test and debug regular expressions with real-time matching and explanations</p>
          </div>
        </div>

        <div class="tool-content">
          <div class="regex-input-section">
            <div class="section-header">
              <h3>Regular Expression</h3>
              <div class="tool-actions">
                <button id="clear-regex" class="btn btn-secondary">
                  ${n("trash")} Clear
                </button>
              </div>
            </div>

            <div class="regex-input-container">
              <div class="regex-input-wrapper">
                <span class="regex-delimiter">/</span>
                <input 
                  type="text" 
                  id="regex-pattern" 
                  placeholder="Enter your regex pattern..."
                  class="regex-input"
                />
                <span class="regex-delimiter">/</span>
                <input 
                  type="text" 
                  id="regex-flags" 
                  placeholder="flags"
                  class="regex-flags"
                  maxlength="10"
                />
              </div>
              <div class="regex-validation" id="regex-validation"></div>
            </div>

            <div class="regex-flags-helper">
              <span class="flags-label">Common flags:</span>
              <div class="flag-buttons">
                <button class="flag-btn" data-flag="g" title="Global - find all matches">g</button>
                <button class="flag-btn" data-flag="i" title="Ignore case">i</button>
                <button class="flag-btn" data-flag="m" title="Multiline">m</button>
                <button class="flag-btn" data-flag="s" title="Dot matches newline">s</button>
                <button class="flag-btn" data-flag="u" title="Unicode">u</button>
                <button class="flag-btn" data-flag="y" title="Sticky">y</button>
              </div>
            </div>

            <div class="regex-presets">
              <label for="regex-presets">Quick patterns:</label>
              <select id="regex-presets" class="tool-input">
                <option value="">Select a common pattern...</option>
                <option value="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}">Email Address</option>
                <option value="https?://(www.)?[-a-zA-Z0-9@:%._+~#=]{1,256}.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)">URL</option>
                <option value="^+?[1-9]d{1,14}$">Phone Number</option>
                <option value="^(?:[0-9]{1,3}.){3}[0-9]{1,3}$">IP Address (IPv4)</option>
                <option value="^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$">Hex Color</option>
                <option value="^d{4}-d{2}-d{2}$">Date (YYYY-MM-DD)</option>
                <option value="^(?=.*[a-z])(?=.*[A-Z])(?=.*d)[a-zA-Zd@$!%*?&]{8,}$">Strong Password</option>
                <option value="^[a-zA-Z0-9_-]+$">Username/Slug</option>
                <option value="^d+(.d{1,2})?$">Price/Decimal</option>
                <option value="^[A-Z]{2}[0-9]{2}[A-Z0-9]{4}[0-9]{7}([A-Z0-9]?){0,16}$">IBAN</option>
              </select>
            </div>
          </div>

          <div class="test-string-section">
            <div class="section-header">
              <h3>Test String</h3>
              <div class="tool-actions">
                <button id="paste-text" class="btn btn-secondary">
                  ${n("clipboard")} Paste
                </button>
                <button id="clear-text" class="btn btn-secondary">
                  ${n("trash")} Clear
                </button>
              </div>
            </div>
            <div class="test-input-container">
              <textarea 
                id="test-string" 
                placeholder="Enter test string to match against..."
                class="tool-textarea"
                rows="8"
              ></textarea>
              <div class="string-stats">
                <span id="string-length">0 characters</span>
                <span id="line-count">1 line</span>
              </div>
            </div>
          </div>

          <div class="results-section">
            <div class="section-header">
              <h3>Results</h3>
              <div class="tool-actions">
                <button id="copy-matches" class="btn btn-secondary">
                  ${n("copy")} Copy Matches
                </button>
                <button id="export-results" class="btn btn-secondary">
                  ${n("clipboard")} Export
                </button>
              </div>
            </div>

            <div class="results-container">
              <div class="results-summary" id="results-summary">
                <div class="summary-item">
                  <span class="summary-label">Matches:</span>
                  <span id="match-count" class="summary-value">0</span>
                </div>
                <div class="summary-item">
                  <span class="summary-label">Groups:</span>
                  <span id="group-count" class="summary-value">0</span>
                </div>
                <div class="summary-item">
                  <span class="summary-label">Execution Time:</span>
                  <span id="exec-time" class="summary-value">0ms</span>
                </div>
              </div>

              <div class="results-tabs">
                <div class="tab-buttons">
                  <button class="tab-btn active" data-tab="matches">Matches</button>
                  <button class="tab-btn" data-tab="groups">Groups</button>
                  <button class="tab-btn" data-tab="replace">Replace</button>
                  <button class="tab-btn" data-tab="explanation">Explanation</button>
                </div>

                <div class="tab-content">
                  <div id="matches-tab" class="tab-panel active">
                    <div id="matches-list" class="matches-list">
                      <div class="no-matches">Enter a regex pattern and test string to see matches</div>
                    </div>
                  </div>

                  <div id="groups-tab" class="tab-panel">
                    <div id="groups-list" class="groups-list">
                      <div class="no-groups">No capturing groups found</div>
                    </div>
                  </div>

                  <div id="replace-tab" class="tab-panel">
                    <div class="replace-section">
                      <div class="replace-input">
                        <label for="replace-string">Replacement string:</label>
                        <input 
                          type="text" 
                          id="replace-string" 
                          placeholder="$1, $2, etc. for groups"
                          class="tool-input"
                        />
                        <button id="perform-replace" class="btn btn-primary">Replace</button>
                      </div>
                      <div class="replace-result">
                        <label>Result:</label>
                        <textarea 
                          id="replace-output" 
                          readonly
                          class="tool-textarea"
                          rows="6"
                          placeholder="Replacement result will appear here..."
                        ></textarea>
                      </div>
                    </div>
                  </div>

                  <div id="explanation-tab" class="tab-panel">
                    <div id="regex-explanation" class="regex-explanation">
                      <div class="no-explanation">Enter a regex pattern to see explanation</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="regex-history-section">
            <div class="section-header">
              <h3>Pattern History</h3>
              <div class="tool-actions">
                <button id="clear-history" class="btn btn-secondary">
                  ${n("trash")} Clear History
                </button>
              </div>
            </div>
            <div id="history-list" class="history-list">
              <div class="history-empty">No patterns in history</div>
            </div>
          </div>

          <div class="regex-cheatsheet">
            <div class="section-header">
              <h3>Quick Reference</h3>
            </div>
            <div class="cheatsheet-grid">
              <div class="cheatsheet-category">
                <h4>Character Classes</h4>
                <div class="cheatsheet-items">
                  <div class="cheatsheet-item"><code>.</code> Any character except newline</div>
                  <div class="cheatsheet-item"><code>\\d</code> Digit (0-9)</div>
                  <div class="cheatsheet-item"><code>\\w</code> Word character (a-z, A-Z, 0-9, _)</div>
                  <div class="cheatsheet-item"><code>\\s</code> Whitespace</div>
                  <div class="cheatsheet-item"><code>[abc]</code> Any of a, b, or c</div>
                  <div class="cheatsheet-item"><code>[^abc]</code> Not a, b, or c</div>
                </div>
              </div>

              <div class="cheatsheet-category">
                <h4>Quantifiers</h4>
                <div class="cheatsheet-items">
                  <div class="cheatsheet-item"><code>*</code> 0 or more</div>
                  <div class="cheatsheet-item"><code>+</code> 1 or more</div>
                  <div class="cheatsheet-item"><code>?</code> 0 or 1</div>
                  <div class="cheatsheet-item"><code>{3}</code> Exactly 3</div>
                  <div class="cheatsheet-item"><code>{3,}</code> 3 or more</div>
                  <div class="cheatsheet-item"><code>{3,5}</code> 3 to 5</div>
                </div>
              </div>

              <div class="cheatsheet-category">
                <h4>Anchors</h4>
                <div class="cheatsheet-items">
                  <div class="cheatsheet-item"><code>^</code> Start of string</div>
                  <div class="cheatsheet-item"><code>$</code> End of string</div>
                  <div class="cheatsheet-item"><code>\\b</code> Word boundary</div>
                  <div class="cheatsheet-item"><code>\\B</code> Not word boundary</div>
                </div>
              </div>

              <div class="cheatsheet-category">
                <h4>Groups</h4>
                <div class="cheatsheet-items">
                  <div class="cheatsheet-item"><code>(abc)</code> Capturing group</div>
                  <div class="cheatsheet-item"><code>(?:abc)</code> Non-capturing group</div>
                  <div class="cheatsheet-item"><code>(?=abc)</code> Positive lookahead</div>
                  <div class="cheatsheet-item"><code>(?!abc)</code> Negative lookahead</div>
                </div>
              </div>
            </div>
          </div>

          <div class="tool-info">
            <div class="info-item">
              <strong>JavaScript Regex:</strong>
              <p>This tool uses JavaScript's RegExp engine. Some features may differ from other languages.</p>
            </div>
            <div class="info-item">
              <strong>Performance:</strong>
              <p>Complex patterns on large strings may take time to process. Use with caution.</p>
            </div>
            <div class="info-item">
              <strong>Groups:</strong>
              <p>Use $1, $2, etc. in replacement strings to reference capturing groups.</p>
            </div>
          </div>
        </div>
      </div>
    `}attachEventListeners(){const t=this.container.querySelector("#regex-pattern"),e=this.container.querySelector("#regex-flags"),a=this.container.querySelector("#test-string");t.addEventListener("input",()=>{this.testRegex(),this.addToHistory(t.value)}),e.addEventListener("input",()=>{this.testRegex()}),a.addEventListener("input",()=>{this.testRegex(),this.updateStringStats()}),this.container.querySelectorAll(".tab-btn").forEach(s=>{s.addEventListener("click",i=>{const r=i.target.getAttribute("data-tab");this.switchTab(r)})}),this.container.querySelectorAll(".flag-btn").forEach(s=>{s.addEventListener("click",i=>{const r=i.target.getAttribute("data-flag");this.toggleFlag(r)})}),this.container.querySelector("#regex-presets")?.addEventListener("change",s=>{const i=s.target.value;i&&(t.value=i,this.testRegex(),this.addToHistory(i),s.target.value="")}),this.container.querySelector("#clear-regex")?.addEventListener("click",()=>{this.clearRegex()}),this.container.querySelector("#paste-text")?.addEventListener("click",()=>{this.pasteText()}),this.container.querySelector("#clear-text")?.addEventListener("click",()=>{this.clearText()}),this.container.querySelector("#copy-matches")?.addEventListener("click",()=>{this.copyMatches()}),this.container.querySelector("#perform-replace")?.addEventListener("click",()=>{this.performReplace()}),this.container.querySelector("#replace-string")?.addEventListener("input",()=>{this.performReplace()}),this.container.querySelector("#clear-history")?.addEventListener("click",()=>{this.clearHistory()}),this.updateStringStats()}testRegex(){const t=this.container.querySelector("#regex-pattern").value,e=this.container.querySelector("#regex-flags").value,a=this.container.querySelector("#test-string").value;if(!t){this.clearResults();return}const s=performance.now();try{const i=new RegExp(t,e);this.validateRegex(!0);const r=this.findMatches(i,a),o=performance.now();this.updateResults(r,o-s),this.generateExplanation(t)}catch(i){this.validateRegex(!1,i.message),this.clearResults()}}validateRegex(t,e){const a=this.container.querySelector("#regex-validation"),s=this.container.querySelector("#regex-pattern");t?(a.innerHTML=`
        <div class="validation-message validation-success">
          ${n("check")} Valid regex pattern
        </div>
      `,s.classList.remove("invalid"),s.classList.add("valid")):(a.innerHTML=`
        <div class="validation-message validation-error">
          ${n("alert")} ${e||"Invalid regex pattern"}
        </div>
      `,s.classList.remove("valid"),s.classList.add("invalid"))}findMatches(t,e){const a=[];if(t.global){let s;for(;(s=t.exec(e))!==null;)a.push({match:s[0],index:s.index,groups:Array.from(s).slice(1)}),s.index===t.lastIndex&&t.lastIndex++}else{const s=t.exec(e);s&&a.push({match:s[0],index:s.index,groups:Array.from(s).slice(1)})}return a}updateResults(t,e){this.container.querySelector("#match-count").textContent=t.length.toString(),this.container.querySelector("#group-count").textContent=t.reduce((a,s)=>a+s.groups.length,0).toString(),this.container.querySelector("#exec-time").textContent=`${e.toFixed(2)}ms`,this.updateMatchesList(t),this.updateGroupsList(t)}updateMatchesList(t){const e=this.container.querySelector("#matches-list");if(t.length===0){e.innerHTML='<div class="no-matches">No matches found</div>';return}e.innerHTML=t.map((a,s)=>`
      <div class="match-item">
        <div class="match-header">
          <span class="match-number">Match ${s+1}</span>
          <span class="match-position">Position: ${a.index}</span>
          <span class="match-length">Length: ${a.match.length}</span>
        </div>
        <div class="match-content">
          <code class="match-text">${this.escapeHtml(a.match)}</code>
        </div>
      </div>
    `).join("")}updateGroupsList(t){const e=this.container.querySelector("#groups-list"),a=t.flatMap((s,i)=>s.groups.map((r,o)=>({matchIndex:i+1,groupIndex:o+1,value:r})));if(a.length===0){e.innerHTML='<div class="no-groups">No capturing groups found</div>';return}e.innerHTML=a.map(s=>`
      <div class="group-item">
        <div class="group-header">
          <span class="group-reference">$${s.groupIndex}</span>
          <span class="group-match">Match ${s.matchIndex}</span>
        </div>
        <div class="group-content">
          <code class="group-text">${this.escapeHtml(s.value||"")}</code>
        </div>
      </div>
    `).join("")}performReplace(){const t=this.container.querySelector("#regex-pattern").value,e=this.container.querySelector("#regex-flags").value,a=this.container.querySelector("#test-string").value,s=this.container.querySelector("#replace-string").value,i=this.container.querySelector("#replace-output");if(!t||!a){i.value="";return}try{const r=new RegExp(t,e),o=a.replace(r,s);i.value=o}catch(r){i.value=`Error: ${r.message}`}}generateExplanation(t){const e=this.container.querySelector("#regex-explanation"),s=[{pattern:/\\\d/,explanation:"\\d matches any digit (0-9)"},{pattern:/\\\w/,explanation:"\\w matches any word character (a-z, A-Z, 0-9, _)"},{pattern:/\\\s/,explanation:"\\s matches any whitespace character"},{pattern:/\./,explanation:". matches any character except newline"},{pattern:/\*/,explanation:"* matches 0 or more of the preceding element"},{pattern:/\+/,explanation:"+ matches 1 or more of the preceding element"},{pattern:/\?/,explanation:"? matches 0 or 1 of the preceding element"},{pattern:/\^/,explanation:"^ matches the start of the string"},{pattern:/\$/,explanation:"$ matches the end of the string"},{pattern:/\[.*?\]/,explanation:"Character class [] matches any character inside"},{pattern:/\(.*?\)/,explanation:"Group () captures the matched text"},{pattern:/\{\\d+\}/,explanation:"{n} matches exactly n occurrences"},{pattern:/\{\\d+,\}/,explanation:"{n,} matches n or more occurrences"},{pattern:/\{\\d+,\\d+\}/,explanation:"{n,m} matches between n and m occurrences"}].filter(i=>i.pattern.test(t)).map(i=>`<div class="explanation-item">${i.explanation}</div>`).join("");s?e.innerHTML=`
        <div class="explanation-content">
          <h4>Pattern Breakdown:</h4>
          ${s}
        </div>
      `:e.innerHTML=`
        <div class="explanation-content">
          <p>Enter a regex pattern to see detailed explanation of its components.</p>
        </div>
      `}switchTab(t){this.container.querySelectorAll(".tab-btn").forEach(e=>{e.classList.remove("active")}),this.container.querySelector(`[data-tab="${t}"]`)?.classList.add("active"),this.container.querySelectorAll(".tab-panel").forEach(e=>{e.classList.remove("active")}),this.container.querySelector(`#${t}-tab`)?.classList.add("active")}toggleFlag(t){const e=this.container.querySelector("#regex-flags"),a=e.value;a.includes(t)?e.value=a.replace(t,""):e.value=a+t,this.testRegex()}addToHistory(t){!t||this.regexHistory.includes(t)||(this.regexHistory.unshift(t),this.regexHistory.length>20&&(this.regexHistory=this.regexHistory.slice(0,20)),this.updateHistoryDisplay())}updateHistoryDisplay(){const t=this.container.querySelector("#history-list");if(this.regexHistory.length===0){t.innerHTML='<div class="history-empty">No patterns in history</div>';return}t.innerHTML=this.regexHistory.map(e=>`
      <div class="history-item" data-pattern="${this.escapeHtml(e)}">
        <code class="history-pattern">${this.escapeHtml(e)}</code>
        <button class="btn-icon use-pattern" title="Use this pattern">
          ${n("chevronRight")}
        </button>
      </div>
    `).join(""),this.container.querySelectorAll(".use-pattern").forEach(e=>{e.addEventListener("click",a=>{const s=a.target.closest(".history-item")?.getAttribute("data-pattern")||"";this.container.querySelector("#regex-pattern").value=s,this.testRegex()})})}updateStringStats(){const t=this.container.querySelector("#test-string").value,e=t.length,a=t.split(`
`).length;this.container.querySelector("#string-length").textContent=`${e} characters`,this.container.querySelector("#line-count").textContent=`${a} line${a!==1?"s":""}`}clearResults(){this.container.querySelector("#match-count").textContent="0",this.container.querySelector("#group-count").textContent="0",this.container.querySelector("#exec-time").textContent="0ms",this.container.querySelector("#matches-list").innerHTML='<div class="no-matches">Enter a regex pattern and test string to see matches</div>',this.container.querySelector("#groups-list").innerHTML='<div class="no-groups">No capturing groups found</div>',this.container.querySelector("#replace-output").value=""}clearRegex(){this.container.querySelector("#regex-pattern").value="",this.container.querySelector("#regex-flags").value="",this.container.querySelector("#regex-validation").innerHTML="",this.clearResults(),this.showNotification("Regex cleared","success")}clearText(){this.container.querySelector("#test-string").value="",this.updateStringStats(),this.testRegex(),this.showNotification("Test string cleared","success")}async pasteText(){try{const t=await navigator.clipboard.readText();this.container.querySelector("#test-string").value=t,this.updateStringStats(),this.testRegex(),this.showNotification("Text pasted from clipboard","success")}catch{this.showNotification("Failed to paste from clipboard","error")}}async copyMatches(){const e=this.container.querySelector("#matches-list").querySelectorAll(".match-text");if(e.length===0){this.showNotification("No matches to copy","error");return}const a=Array.from(e).map(s=>s.textContent).join(`
`);try{await navigator.clipboard.writeText(a),this.showNotification("Matches copied to clipboard","success")}catch{this.showNotification("Failed to copy matches","error")}}clearHistory(){this.regexHistory=[],this.updateHistoryDisplay(),this.showNotification("History cleared","success")}escapeHtml(t){const e=document.createElement("div");return e.textContent=t,e.innerHTML}showNotification(t,e){const a=this.container.querySelector(".notification");a&&a.remove();const s=document.createElement("div");s.className=`notification notification-${e}`,s.innerHTML=`
      <div class="notification-content">
        <span class="notification-icon">
          ${e==="success"?n("check"):n("alert")}
        </span>
        <span class="notification-message">${t}</span>
      </div>
    `,this.container.insertBefore(s,this.container.firstChild),setTimeout(()=>{s.parentNode&&s.remove()},3e3)}destroy(){}}export{v as RegexTool};
