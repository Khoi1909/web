var h=Object.defineProperty;var b=(c,n,e)=>n in c?h(c,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):c[n]=e;var u=(c,n,e)=>b(c,typeof n!="symbol"?n+"":n,e);import{g as l}from"./utils-DAAOA82y.js";class y{constructor(n){u(this,"container");this.container=n,this.render(),this.attachEventListeners()}render(){this.container.innerHTML=`
      <div class="tool-container">
        <div class="tool-header">
          <div class="tool-icon">${l("stringTool")}</div>
          <div class="tool-title">
            <h2>String Utilities</h2>
            <p>Comprehensive string manipulation and analysis tools</p>
          </div>
        </div>

        <div class="tool-content">
          <div class="string-input-section">
            <div class="section-header">
              <h3>Input Text</h3>
              <div class="tool-actions">
                <button id="paste-text" class="btn btn-secondary">
                  ${l("clipboard")} Paste
                </button>
                <button id="clear-input" class="btn btn-secondary">
                  ${l("trash")} Clear
                </button>
              </div>
            </div>
            <div class="input-group">
              <textarea 
                id="string-input" 
                placeholder="Enter text to manipulate..."
                class="tool-textarea"
                rows="8"
              ></textarea>
            </div>
            <div class="input-stats">
              <div class="stats-grid">
                <div class="stat-item">
                  <span class="stat-label">Characters:</span>
                  <span id="char-count">0</span>
                </div>
                <div class="stat-item">
                  <span class="stat-label">Words:</span>
                  <span id="word-count">0</span>
                </div>
                <div class="stat-item">
                  <span class="stat-label">Lines:</span>
                  <span id="line-count">0</span>
                </div>
                <div class="stat-item">
                  <span class="stat-label">Bytes:</span>
                  <span id="byte-count">0</span>
                </div>
              </div>
            </div>
          </div>

          <div class="string-operations-section">
            <div class="section-header">
              <h3>String Operations</h3>
            </div>
            <div class="operations-grid">
              <div class="operation-category">
                <h4>Case Transformations</h4>
                <div class="operation-buttons">
                  <button class="operation-btn" data-operation="uppercase">UPPERCASE</button>
                  <button class="operation-btn" data-operation="lowercase">lowercase</button>
                  <button class="operation-btn" data-operation="capitalize">Capitalize Words</button>
                  <button class="operation-btn" data-operation="camelcase">camelCase</button>
                  <button class="operation-btn" data-operation="pascalcase">PascalCase</button>
                  <button class="operation-btn" data-operation="snakecase">snake_case</button>
                  <button class="operation-btn" data-operation="kebabcase">kebab-case</button>
                  <button class="operation-btn" data-operation="togglecase">tOGGLE cASE</button>
                </div>
              </div>

              <div class="operation-category">
                <h4>Encoding & Escaping</h4>
                <div class="operation-buttons">
                  <button class="operation-btn" data-operation="urlencode">URL Encode</button>
                  <button class="operation-btn" data-operation="urldecode">URL Decode</button>
                  <button class="operation-btn" data-operation="htmlencode">HTML Encode</button>
                  <button class="operation-btn" data-operation="htmldecode">HTML Decode</button>
                  <button class="operation-btn" data-operation="base64encode">Base64 Encode</button>
                  <button class="operation-btn" data-operation="base64decode">Base64 Decode</button>
                  <button class="operation-btn" data-operation="jsonescape">JSON Escape</button>
                  <button class="operation-btn" data-operation="jsonunescape">JSON Unescape</button>
                </div>
              </div>

              <div class="operation-category">
                <h4>Text Processing</h4>
                <div class="operation-buttons">
                  <button class="operation-btn" data-operation="trim">Trim Whitespace</button>
                  <button class="operation-btn" data-operation="reverse">Reverse Text</button>
                  <button class="operation-btn" data-operation="sort">Sort Lines</button>
                  <button class="operation-btn" data-operation="unique">Unique Lines</button>
                  <button class="operation-btn" data-operation="removelines">Remove Empty Lines</button>
                  <button class="operation-btn" data-operation="addnumbers">Add Line Numbers</button>
                  <button class="operation-btn" data-operation="extractemails">Extract Emails</button>
                  <button class="operation-btn" data-operation="extracturls">Extract URLs</button>
                </div>
              </div>

              <div class="operation-category">
                <h4>Find & Replace</h4>
                <div class="find-replace-controls">
                  <div class="input-group">
                    <input type="text" id="find-text" placeholder="Find text..." class="tool-input" />
                    <input type="text" id="replace-text" placeholder="Replace with..." class="tool-input" />
                  </div>
                  <div class="replace-options">
                    <label class="checkbox-label">
                      <input type="checkbox" id="case-sensitive" />
                      Case sensitive
                    </label>
                    <label class="checkbox-label">
                      <input type="checkbox" id="use-regex" />
                      Use regex
                    </label>
                  </div>
                  <div class="operation-buttons">
                    <button class="operation-btn" data-operation="replace">Replace All</button>
                    <button class="operation-btn" data-operation="highlight">Highlight Matches</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="string-output-section">
            <div class="section-header">
              <h3>Output</h3>
              <div class="tool-actions">
                <button id="copy-output" class="btn btn-primary">
                  ${l("copy")} Copy Result
                </button>
                <button id="use-output" class="btn btn-secondary">
                  Use as Input
                </button>
              </div>
            </div>
            <div class="output-container">
              <textarea 
                id="string-output" 
                placeholder="Results will appear here..."
                class="tool-textarea"
                rows="8"
                readonly
              ></textarea>
            </div>
          </div>

          <div class="string-analysis-section">
            <div class="section-header">
              <h3>Text Analysis</h3>
            </div>
            <div class="analysis-grid">
              <div class="analysis-card">
                <h4>Character Analysis</h4>
                <div id="char-analysis" class="analysis-content">
                  <div class="analysis-item">
                    <span>Letters:</span>
                    <span id="letter-count">0</span>
                  </div>
                  <div class="analysis-item">
                    <span>Numbers:</span>
                    <span id="number-count">0</span>
                  </div>
                  <div class="analysis-item">
                    <span>Spaces:</span>
                    <span id="space-count">0</span>
                  </div>
                  <div class="analysis-item">
                    <span>Special chars:</span>
                    <span id="special-count">0</span>
                  </div>
                </div>
              </div>

              <div class="analysis-card">
                <h4>Pattern Analysis</h4>
                <div id="pattern-analysis" class="analysis-content">
                  <div class="analysis-item">
                    <span>Email addresses:</span>
                    <span id="email-count">0</span>
                  </div>
                  <div class="analysis-item">
                    <span>URLs:</span>
                    <span id="url-count">0</span>
                  </div>
                  <div class="analysis-item">
                    <span>Phone numbers:</span>
                    <span id="phone-count">0</span>
                  </div>
                  <div class="analysis-item">
                    <span>IP addresses:</span>
                    <span id="ip-count">0</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="tool-info">
            <div class="info-item">
              <strong>Case Transformations:</strong>
              <p>Convert text between different naming conventions and cases.</p>
            </div>
            <div class="info-item">
              <strong>Encoding:</strong>
              <p>Encode/decode text for URLs, HTML, Base64, and JSON formats.</p>
            </div>
            <div class="info-item">
              <strong>Text Processing:</strong>
              <p>Manipulate text structure, extract patterns, and analyze content.</p>
            </div>
          </div>
        </div>
      </div>
    `}attachEventListeners(){const n=this.container.querySelector("#string-input");this.container.querySelector("#string-output"),n.addEventListener("input",()=>{this.updateStats(),this.analyzeText()}),this.container.querySelectorAll(".operation-btn").forEach(e=>{e.addEventListener("click",o=>{const t=o.target.getAttribute("data-operation");t&&this.performOperation(t)})}),this.container.querySelector("#paste-text")?.addEventListener("click",()=>{this.pasteText()}),this.container.querySelector("#clear-input")?.addEventListener("click",()=>{this.clearInput()}),this.container.querySelector("#copy-output")?.addEventListener("click",()=>{this.copyOutput()}),this.container.querySelector("#use-output")?.addEventListener("click",()=>{this.useOutputAsInput()}),this.container.querySelector("#find-text")?.addEventListener("keypress",e=>{e.key==="Enter"&&this.performOperation("highlight")}),this.updateStats(),this.analyzeText()}performOperation(n){const e=this.container.querySelector("#string-input"),o=this.container.querySelector("#string-output");let t=e.value;if(!t&&!["replace","highlight"].includes(n)){this.showNotification("Please enter some text first","error");return}let a="";try{switch(n){case"uppercase":a=t.toUpperCase();break;case"lowercase":a=t.toLowerCase();break;case"capitalize":a=t.replace(/\b\w/g,s=>s.toUpperCase());break;case"camelcase":a=t.replace(/(?:^\w|[A-Z]|\b\w)/g,(s,p)=>p===0?s.toLowerCase():s.toUpperCase()).replace(/\s+/g,"");break;case"pascalcase":a=t.replace(/(?:^\w|[A-Z]|\b\w)/g,s=>s.toUpperCase()).replace(/\s+/g,"");break;case"snakecase":a=t.toLowerCase().replace(/\s+/g,"_").replace(/[^\w_]/g,"");break;case"kebabcase":a=t.toLowerCase().replace(/\s+/g,"-").replace(/[^\w-]/g,"");break;case"togglecase":a=t.replace(/[a-zA-Z]/g,s=>s===s.toUpperCase()?s.toLowerCase():s.toUpperCase());break;case"urlencode":a=encodeURIComponent(t);break;case"urldecode":a=decodeURIComponent(t);break;case"htmlencode":a=t.replace(/[&<>"']/g,s=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[s]||s);break;case"htmldecode":a=t.replace(/&(amp|lt|gt|quot|#39);/g,s=>({"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"})[s]||s);break;case"base64encode":a=btoa(t);break;case"base64decode":a=atob(t);break;case"jsonescape":a=JSON.stringify(t).slice(1,-1);break;case"jsonunescape":a=JSON.parse(`"${t}"`);break;case"trim":a=t.trim();break;case"reverse":a=t.split("").reverse().join("");break;case"sort":a=t.split(`
`).sort().join(`
`);break;case"unique":a=[...new Set(t.split(`
`))].join(`
`);break;case"removelines":a=t.split(`
`).filter(s=>s.trim()!=="").join(`
`);break;case"addnumbers":a=t.split(`
`).map((s,p)=>`${p+1}. ${s}`).join(`
`);break;case"extractemails":const i=t.match(/\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g);a=i?i.join(`
`):"No email addresses found";break;case"extracturls":const r=t.match(/https?:\/\/[^\s]+/g);a=r?r.join(`
`):"No URLs found";break;case"replace":a=this.performFindReplace(t);break;case"highlight":a=this.highlightMatches(t);break;default:throw new Error(`Unknown operation: ${n}`)}o.value=a,this.showNotification(`Operation "${n}" completed successfully`,"success")}catch(i){this.showNotification(`Error performing ${n}: ${i}`,"error")}}performFindReplace(n){const e=this.container.querySelector("#find-text").value,o=this.container.querySelector("#replace-text").value,t=this.container.querySelector("#case-sensitive").checked,a=this.container.querySelector("#use-regex").checked;if(!e)throw new Error("Please enter text to find");if(a){const i=t?"g":"gi",r=new RegExp(e,i);return n.replace(r,o)}else{const i=t?"g":"gi",r=new RegExp(e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),i);return n.replace(r,o)}}highlightMatches(n){const e=this.container.querySelector("#find-text").value,o=this.container.querySelector("#case-sensitive").checked,t=this.container.querySelector("#use-regex").checked;if(!e)throw new Error("Please enter text to find");if(t){const a=o?"g":"gi",i=new RegExp(e,a);return n.replace(i,r=>`[MATCH: ${r}]`)}else{const a=o?"g":"gi",i=new RegExp(e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),a);return n.replace(i,r=>`[MATCH: ${r}]`)}}updateStats(){const e=this.container.querySelector("#string-input").value,o=e.length,t=e.trim()?e.trim().split(/\s+/).length:0,a=e.split(`
`).length,i=new TextEncoder().encode(e).length;this.container.querySelector("#char-count").textContent=o.toString(),this.container.querySelector("#word-count").textContent=t.toString(),this.container.querySelector("#line-count").textContent=a.toString(),this.container.querySelector("#byte-count").textContent=i.toString()}analyzeText(){const e=this.container.querySelector("#string-input").value,o=(e.match(/[a-zA-Z]/g)||[]).length,t=(e.match(/[0-9]/g)||[]).length,a=(e.match(/\s/g)||[]).length,i=e.length-o-t-a;this.container.querySelector("#letter-count").textContent=o.toString(),this.container.querySelector("#number-count").textContent=t.toString(),this.container.querySelector("#space-count").textContent=a.toString(),this.container.querySelector("#special-count").textContent=i.toString();const r=(e.match(/\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g)||[]).length,s=(e.match(/https?:\/\/[^\s]+/g)||[]).length,p=(e.match(/\b\d{3}[-.]?\d{3}[-.]?\d{4}\b/g)||[]).length,d=(e.match(/\b(?:[0-9]{1,3}\.){3}[0-9]{1,3}\b/g)||[]).length;this.container.querySelector("#email-count").textContent=r.toString(),this.container.querySelector("#url-count").textContent=s.toString(),this.container.querySelector("#phone-count").textContent=p.toString(),this.container.querySelector("#ip-count").textContent=d.toString()}async pasteText(){try{const n=await navigator.clipboard.readText(),e=this.container.querySelector("#string-input");e.value=n,this.updateStats(),this.analyzeText(),this.showNotification("Text pasted from clipboard","success")}catch{this.showNotification("Failed to paste from clipboard","error")}}clearInput(){const n=this.container.querySelector("#string-input"),e=this.container.querySelector("#string-output"),o=this.container.querySelector("#find-text"),t=this.container.querySelector("#replace-text");n.value="",e.value="",o.value="",t.value="",this.updateStats(),this.analyzeText(),this.showNotification("All fields cleared","success")}async copyOutput(){const n=this.container.querySelector("#string-output");if(!n.value){this.showNotification("No output to copy","error");return}try{await navigator.clipboard.writeText(n.value),this.showNotification("Output copied to clipboard","success")}catch{this.showNotification("Failed to copy output","error")}}useOutputAsInput(){const n=this.container.querySelector("#string-input"),e=this.container.querySelector("#string-output");if(!e.value){this.showNotification("No output to use","error");return}n.value=e.value,e.value="",this.updateStats(),this.analyzeText(),this.showNotification("Output moved to input","success")}showNotification(n,e){const o=this.container.querySelector(".notification");o&&o.remove();const t=document.createElement("div");t.className=`notification notification-${e}`,t.innerHTML=`
      <div class="notification-content">
        <span class="notification-icon">
          ${e==="success"?l("check"):l("alert")}
        </span>
        <span class="notification-message">${n}</span>
      </div>
    `,this.container.insertBefore(t,this.container.firstChild),setTimeout(()=>{t.parentNode&&t.remove()},3e3)}destroy(){}}export{y as StringTool};
