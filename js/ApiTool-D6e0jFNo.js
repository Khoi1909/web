var p=Object.defineProperty;var h=(c,e,t)=>e in c?p(c,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):c[e]=t;var u=(c,e,t)=>h(c,typeof e!="symbol"?e+"":e,t);import{g as n}from"./utils-DAAOA82y.js";class b{constructor(e){u(this,"container");u(this,"requestHistory",[]);this.container=e,this.render(),this.attachEventListeners()}render(){this.container.innerHTML=`
      <div class="tool-container">
        <div class="tool-header">
          <div class="tool-icon">${n("apiTester")}</div>
          <div class="tool-title">
            <h2>API Tester</h2>
            <p>Test REST APIs with full HTTP method support and response analysis</p>
          </div>
        </div>

        <div class="tool-content">
          <div class="api-request-section">
            <div class="section-header">
              <h3>Request Configuration</h3>
              <div class="tool-actions">
                <button id="send-request" class="btn btn-primary">
                  ${n("api")} Send Request
                </button>
                <button id="clear-request" class="btn btn-secondary">
                  ${n("trash")} Clear
                </button>
              </div>
            </div>

            <div class="request-config">
              <div class="request-line">
                <select id="http-method" class="method-select">
                  <option value="GET">GET</option>
                  <option value="POST">POST</option>
                  <option value="PUT">PUT</option>
                  <option value="PATCH">PATCH</option>
                  <option value="DELETE">DELETE</option>
                  <option value="HEAD">HEAD</option>
                  <option value="OPTIONS">OPTIONS</option>
                </select>
                <input 
                  type="text" 
                  id="api-url" 
                  placeholder="https://api.example.com/endpoint"
                  class="url-input"
                />
              </div>

              <div class="request-tabs">
                <div class="tab-buttons">
                  <button class="tab-btn active" data-tab="headers">Headers</button>
                  <button class="tab-btn" data-tab="body">Body</button>
                  <button class="tab-btn" data-tab="auth">Auth</button>
                  <button class="tab-btn" data-tab="params">Query Params</button>
                </div>

                <div class="tab-content">
                  <div id="headers-tab" class="tab-panel active">
                    <div class="headers-section">
                      <div class="header-controls">
                        <button id="add-header" class="btn btn-secondary">
                          ${n("string")} Add Header
                        </button>
                        <div class="preset-headers">
                          <select id="preset-headers">
                            <option value="">Add preset header...</option>
                            <option value="Content-Type:application/json">Content-Type: JSON</option>
                            <option value="Content-Type:application/xml">Content-Type: XML</option>
                            <option value="Accept:application/json">Accept: JSON</option>
                            <option value="User-Agent:API-Tester/1.0">User-Agent: API Tester</option>
                          </select>
                        </div>
                      </div>
                      <div id="headers-list" class="headers-list">
                        <!-- Dynamic headers will be added here -->
                      </div>
                    </div>
                  </div>

                  <div id="body-tab" class="tab-panel">
                    <div class="body-section">
                      <div class="body-type-selector">
                        <label class="radio-label">
                          <input type="radio" name="body-type" value="none" checked />
                          None
                        </label>
                        <label class="radio-label">
                          <input type="radio" name="body-type" value="json" />
                          JSON
                        </label>
                        <label class="radio-label">
                          <input type="radio" name="body-type" value="xml" />
                          XML
                        </label>
                        <label class="radio-label">
                          <input type="radio" name="body-type" value="form" />
                          Form Data
                        </label>
                        <label class="radio-label">
                          <input type="radio" name="body-type" value="text" />
                          Raw Text
                        </label>
                      </div>
                      <div class="body-content">
                        <textarea 
                          id="request-body" 
                          placeholder="Request body content..."
                          class="tool-textarea"
                          rows="8"
                          style="display: none;"
                        ></textarea>
                        <div id="form-data" class="form-data-section" style="display: none;">
                          <button id="add-form-field" class="btn btn-secondary">Add Field</button>
                          <div id="form-fields" class="form-fields"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div id="auth-tab" class="tab-panel">
                    <div class="auth-section">
                      <div class="auth-type-selector">
                        <label class="radio-label">
                          <input type="radio" name="auth-type" value="none" checked />
                          No Auth
                        </label>
                        <label class="radio-label">
                          <input type="radio" name="auth-type" value="bearer" />
                          Bearer Token
                        </label>
                        <label class="radio-label">
                          <input type="radio" name="auth-type" value="basic" />
                          Basic Auth
                        </label>
                        <label class="radio-label">
                          <input type="radio" name="auth-type" value="apikey" />
                          API Key
                        </label>
                      </div>
                      <div id="auth-config" class="auth-config"></div>
                    </div>
                  </div>

                  <div id="params-tab" class="tab-panel">
                    <div class="params-section">
                      <button id="add-param" class="btn btn-secondary">
                        ${n("string")} Add Parameter
                      </button>
                      <div id="params-list" class="params-list">
                        <!-- Dynamic params will be added here -->
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="api-response-section">
            <div class="section-header">
              <h3>Response</h3>
              <div class="tool-actions">
                <button id="copy-response" class="btn btn-secondary">
                  ${n("copy")} Copy Response
                </button>
                <button id="save-response" class="btn btn-secondary">
                  ${n("clipboard")} Save to File
                </button>
              </div>
            </div>

            <div class="response-container">
              <div id="response-status" class="response-status" style="display: none;">
                <div class="status-info">
                  <span class="status-code"></span>
                  <span class="status-text"></span>
                  <span class="response-time"></span>
                  <span class="response-size"></span>
                </div>
              </div>

              <div class="response-tabs">
                <div class="tab-buttons">
                  <button class="tab-btn active" data-tab="response-body">Body</button>
                  <button class="tab-btn" data-tab="response-headers">Headers</button>
                  <button class="tab-btn" data-tab="response-raw">Raw</button>
                </div>

                <div class="tab-content">
                  <div id="response-body-tab" class="tab-panel active">
                    <div class="response-body-controls">
                      <button id="format-json" class="btn btn-secondary">Format JSON</button>
                      <button id="format-xml" class="btn btn-secondary">Format XML</button>
                    </div>
                    <pre id="response-body" class="response-content">No response yet. Send a request to see results.</pre>
                  </div>

                  <div id="response-headers-tab" class="tab-panel">
                    <pre id="response-headers" class="response-content">No headers yet.</pre>
                  </div>

                  <div id="response-raw-tab" class="tab-panel">
                    <pre id="response-raw" class="response-content">No raw response yet.</pre>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="api-history-section">
            <div class="section-header">
              <h3>Request History</h3>
              <div class="tool-actions">
                <button id="clear-history" class="btn btn-secondary">
                  ${n("trash")} Clear History
                </button>
              </div>
            </div>
            <div id="history-list" class="history-list">
              <div class="history-empty">No requests yet. Send your first API request!</div>
            </div>
          </div>

          <div class="tool-info">
            <div class="info-item">
              <strong>CORS:</strong>
              <p>Browser CORS policies may block some requests. Consider using a CORS proxy for testing.</p>
            </div>
            <div class="info-item">
              <strong>Authentication:</strong>
              <p>Support for Bearer tokens, Basic auth, and API key authentication methods.</p>
            </div>
            <div class="info-item">
              <strong>Response Formats:</strong>
              <p>Automatic formatting for JSON and XML responses with syntax highlighting.</p>
            </div>
          </div>
        </div>
      </div>
    `}attachEventListeners(){this.container.querySelectorAll(".tab-btn").forEach(e=>{e.addEventListener("click",t=>{const s=t.target.getAttribute("data-tab");this.switchTab(e.closest(".request-tabs, .response-tabs"),s)})}),this.container.querySelector("#send-request")?.addEventListener("click",()=>{this.sendRequest()}),this.container.querySelector("#clear-request")?.addEventListener("click",()=>{this.clearRequest()}),this.container.querySelector("#add-header")?.addEventListener("click",()=>{this.addHeader()}),this.container.querySelector("#preset-headers")?.addEventListener("change",e=>{const t=e.target.value;if(t){const[s,a]=t.split(":");this.addHeader(s,a),e.target.value=""}}),this.container.querySelectorAll('input[name="body-type"]').forEach(e=>{e.addEventListener("change",t=>{this.switchBodyType(t.target.value)})}),this.container.querySelectorAll('input[name="auth-type"]').forEach(e=>{e.addEventListener("change",t=>{this.switchAuthType(t.target.value)})}),this.container.querySelector("#add-param")?.addEventListener("click",()=>{this.addParameter()}),this.container.querySelector("#add-form-field")?.addEventListener("click",()=>{this.addFormField()}),this.container.querySelector("#copy-response")?.addEventListener("click",()=>{this.copyResponse()}),this.container.querySelector("#format-json")?.addEventListener("click",()=>{this.formatResponse("json")}),this.container.querySelector("#format-xml")?.addEventListener("click",()=>{this.formatResponse("xml")}),this.container.querySelector("#clear-history")?.addEventListener("click",()=>{this.clearHistory()}),this.container.querySelector("#api-url")?.addEventListener("input",e=>{this.validateUrl(e.target.value)})}switchTab(e,t){e.querySelectorAll(".tab-btn").forEach(s=>{s.classList.remove("active")}),e.querySelector(`[data-tab="${t}"]`)?.classList.add("active"),e.querySelectorAll(".tab-panel").forEach(s=>{s.classList.remove("active")}),e.querySelector(`#${t}-tab, #${t}`)?.classList.add("active")}addHeader(e="",t=""){const s=this.container.querySelector("#headers-list"),a=`header-${Date.now()}`,o=document.createElement("div");o.className="header-item",o.innerHTML=`
      <input type="text" placeholder="Header name" value="${e}" class="header-key" />
      <input type="text" placeholder="Header value" value="${t}" class="header-value" />
      <button class="btn-icon remove-header" data-id="${a}">
        ${n("x")}
      </button>
    `,o.querySelector(".remove-header")?.addEventListener("click",()=>{o.remove()}),s.appendChild(o)}addParameter(){const e=this.container.querySelector("#params-list"),t=`param-${Date.now()}`,s=document.createElement("div");s.className="param-item",s.innerHTML=`
      <input type="text" placeholder="Parameter name" class="param-key" />
      <input type="text" placeholder="Parameter value" class="param-value" />
      <button class="btn-icon remove-param" data-id="${t}">
        ${n("x")}
      </button>
    `,s.querySelector(".remove-param")?.addEventListener("click",()=>{s.remove()}),e.appendChild(s)}addFormField(){const e=this.container.querySelector("#form-fields"),t=`field-${Date.now()}`,s=document.createElement("div");s.className="form-field-item",s.innerHTML=`
      <input type="text" placeholder="Field name" class="field-key" />
      <input type="text" placeholder="Field value" class="field-value" />
      <button class="btn-icon remove-field" data-id="${t}">
        ${n("x")}
      </button>
    `,s.querySelector(".remove-field")?.addEventListener("click",()=>{s.remove()}),e.appendChild(s)}switchBodyType(e){const t=this.container.querySelector("#request-body"),s=this.container.querySelector("#form-data");switch(t.style.display="none",s.style.display="none",e){case"json":t.style.display="block",t.placeholder=`{
  "key": "value"
}`;break;case"xml":t.style.display="block",t.placeholder=`<?xml version="1.0" encoding="UTF-8"?>
<root>
  <key>value</key>
</root>`;break;case"text":t.style.display="block",t.placeholder="Raw text content...";break;case"form":s.style.display="block";break}}switchAuthType(e){const t=this.container.querySelector("#auth-config");switch(e){case"bearer":t.innerHTML=`
          <div class="auth-field">
            <label>Bearer Token:</label>
            <input type="text" id="bearer-token" placeholder="Enter bearer token" class="tool-input" />
          </div>
        `;break;case"basic":t.innerHTML=`
          <div class="auth-field">
            <label>Username:</label>
            <input type="text" id="basic-username" placeholder="Username" class="tool-input" />
          </div>
          <div class="auth-field">
            <label>Password:</label>
            <input type="password" id="basic-password" placeholder="Password" class="tool-input" />
          </div>
        `;break;case"apikey":t.innerHTML=`
          <div class="auth-field">
            <label>API Key:</label>
            <input type="text" id="api-key" placeholder="Enter API key" class="tool-input" />
          </div>
          <div class="auth-field">
            <label>Add to:</label>
            <select id="apikey-location" class="tool-input">
              <option value="header">Header</option>
              <option value="query">Query Parameter</option>
            </select>
          </div>
          <div class="auth-field">
            <label>Key Name:</label>
            <input type="text" id="apikey-name" placeholder="X-API-Key" class="tool-input" />
          </div>
        `;break;default:t.innerHTML='<p class="auth-none">No authentication required.</p>'}}validateUrl(e){const t=this.container.querySelector("#api-url");try{new URL(e),t.classList.remove("invalid"),t.classList.add("valid")}catch{t.classList.remove("valid"),e.length>0&&t.classList.add("invalid")}}async sendRequest(){const e=this.container.querySelector("#http-method").value,t=this.container.querySelector("#api-url").value.trim();if(!t){this.showNotification("Please enter a URL","error");return}try{new URL(t)}catch{this.showNotification("Please enter a valid URL","error");return}const s=Date.now();this.showLoading(!0);try{const a=this.buildRequestConfig(e,t),o=await fetch(t,a),r=Date.now()-s;await this.handleResponse(o,r),this.addToHistory(e,t,o.status,r),this.showNotification("Request completed successfully","success")}catch(a){this.handleError(a),this.addToHistory(e,t)}finally{this.showLoading(!1)}}buildRequestConfig(e,t){const s={method:e,headers:{}};this.container.querySelectorAll(".header-item").forEach(i=>{const r=i.querySelector(".header-key").value.trim(),l=i.querySelector(".header-value").value.trim();r&&l&&(s.headers[r]=l)});const a=this.container.querySelector('input[name="auth-type"]:checked').value;this.addAuthToConfig(s,a);const o=this.container.querySelector('input[name="body-type"]:checked').value;return this.addBodyToConfig(s,o),s}addAuthToConfig(e,t){const s=e.headers;switch(t){case"bearer":const a=this.container.querySelector("#bearer-token")?.value;a&&(s.Authorization=`Bearer ${a}`);break;case"basic":const o=this.container.querySelector("#basic-username")?.value,i=this.container.querySelector("#basic-password")?.value;o&&i&&(s.Authorization=`Basic ${btoa(`${o}:${i}`)}`);break;case"apikey":const r=this.container.querySelector("#api-key")?.value,l=this.container.querySelector("#apikey-name")?.value||"X-API-Key",d=this.container.querySelector("#apikey-location")?.value;r&&d==="header"&&(s[l]=r);break}}addBodyToConfig(e,t){switch(t){case"json":const s=this.container.querySelector("#request-body").value.trim();s&&(e.body=s,e.headers["Content-Type"]="application/json");break;case"xml":const a=this.container.querySelector("#request-body").value.trim();a&&(e.body=a,e.headers["Content-Type"]="application/xml");break;case"text":const o=this.container.querySelector("#request-body").value.trim();o&&(e.body=o,e.headers["Content-Type"]="text/plain");break;case"form":const i=new FormData;this.container.querySelectorAll(".form-field-item").forEach(r=>{const l=r.querySelector(".field-key").value.trim(),d=r.querySelector(".field-value").value.trim();l&&d&&i.append(l,d)}),i.entries().next().value&&(e.body=i);break}}async handleResponse(e,t){const s=await e.text(),a=new Blob([s]).size;this.updateResponseStatus(e.status,e.statusText,t,a),this.updateResponseBody(s,e.headers.get("content-type")||""),this.updateResponseHeaders(e.headers),this.updateResponseRaw(e,s)}updateResponseStatus(e,t,s,a){const o=this.container.querySelector("#response-status"),i=o.querySelector(".status-code"),r=o.querySelector(".status-text"),l=o.querySelector(".response-time"),d=o.querySelector(".response-size");i.textContent=e.toString(),i.className=`status-code ${this.getStatusClass(e)}`,r.textContent=t,l.textContent=`${s}ms`,d.textContent=this.formatBytes(a),o.style.display="block"}updateResponseBody(e,t){const s=this.container.querySelector("#response-body");if(t.includes("application/json"))try{const a=JSON.stringify(JSON.parse(e),null,2);s.textContent=a}catch{s.textContent=e}else s.textContent=e}updateResponseHeaders(e){const t=this.container.querySelector("#response-headers"),s=[];e.forEach((a,o)=>{s.push(`${o}: ${a}`)}),t.textContent=s.join(`
`)}updateResponseRaw(e,t){const s=this.container.querySelector("#response-raw"),a=`HTTP/1.1 ${e.status} ${e.statusText}
${Array.from(e.headers.entries()).map(([o,i])=>`${o}: ${i}`).join(`
`)}

${t}`;s.textContent=a}handleError(e){const t=this.container.querySelector("#response-body");t.textContent=`Error: ${e.message}`;const s=this.container.querySelector("#response-status");s.style.display="none",this.showNotification(`Request failed: ${e.message}`,"error")}addToHistory(e,t,s,a){const o={id:Date.now().toString(),method:e,url:t,timestamp:new Date,status:s,duration:a};this.requestHistory.unshift(o),this.requestHistory.length>50&&(this.requestHistory=this.requestHistory.slice(0,50)),this.updateHistoryDisplay()}updateHistoryDisplay(){const e=this.container.querySelector("#history-list");if(this.requestHistory.length===0){e.innerHTML='<div class="history-empty">No requests yet. Send your first API request!</div>';return}e.innerHTML=this.requestHistory.map(t=>`
      <div class="history-item" data-id="${t.id}">
        <div class="history-method ${t.method.toLowerCase()}">${t.method}</div>
        <div class="history-url">${t.url}</div>
        <div class="history-status ${t.status?this.getStatusClass(t.status):"error"}">
          ${t.status||"Error"}
        </div>
        <div class="history-time">${t.duration||0}ms</div>
        <div class="history-timestamp">${t.timestamp.toLocaleTimeString()}</div>
      </div>
    `).join("")}getStatusClass(e){return e>=200&&e<300?"success":e>=300&&e<400?"redirect":e>=400&&e<500?"client-error":e>=500?"server-error":""}formatBytes(e){if(e===0)return"0 B";const t=1024,s=["B","KB","MB","GB"],a=Math.floor(Math.log(e)/Math.log(t));return parseFloat((e/Math.pow(t,a)).toFixed(2))+" "+s[a]}formatResponse(e){const t=this.container.querySelector("#response-body"),s=t.textContent||"";try{if(e==="json"){const a=JSON.parse(s);t.textContent=JSON.stringify(a,null,2)}else if(e==="xml"){const a=s.replace(/></g,`>
<`);t.textContent=a}}catch{this.showNotification(`Failed to format as ${e.toUpperCase()}`,"error")}}async copyResponse(){const t=this.container.querySelector("#response-body").textContent||"";if(!t||t==="No response yet. Send a request to see results."){this.showNotification("No response to copy","error");return}try{await navigator.clipboard.writeText(t),this.showNotification("Response copied to clipboard","success")}catch{this.showNotification("Failed to copy response","error")}}clearRequest(){this.container.querySelector("#api-url").value="",this.container.querySelector("#http-method").value="GET",this.container.querySelector("#headers-list").innerHTML="",this.container.querySelector("#request-body").value="",this.container.querySelector("#form-fields").innerHTML="",this.container.querySelector("#params-list").innerHTML="",this.container.querySelector('input[name="body-type"][value="none"]').checked=!0,this.switchBodyType("none"),this.container.querySelector('input[name="auth-type"][value="none"]').checked=!0,this.switchAuthType("none"),this.showNotification("Request cleared","success")}clearHistory(){this.requestHistory=[],this.updateHistoryDisplay(),this.showNotification("History cleared","success")}showLoading(e){const t=this.container.querySelector("#send-request");e?(t.disabled=!0,t.textContent="Sending..."):(t.disabled=!1,t.innerHTML=`${n("api")} Send Request`)}showNotification(e,t){const s=this.container.querySelector(".notification");s&&s.remove();const a=document.createElement("div");a.className=`notification notification-${t}`,a.innerHTML=`
      <div class="notification-content">
        <span class="notification-icon">
          ${t==="success"?n("check"):n("alert")}
        </span>
        <span class="notification-message">${e}</span>
      </div>
    `,this.container.insertBefore(a,this.container.firstChild),setTimeout(()=>{a.parentNode&&a.remove()},3e3)}destroy(){}}export{b as ApiTool};
