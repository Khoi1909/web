var y=Object.defineProperty;var p=(a,t,s)=>t in a?y(a,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[t]=s;var h=(a,t,s)=>p(a,typeof t!="symbol"?t+"":t,s);import{g as o}from"./utils-DAAOA82y.js";class S{constructor(t){h(this,"container");this.container=t,this.render(),this.attachEventListeners()}render(){this.container.innerHTML=`
      <div class="tool-container">
        <div class="tool-header">
          <div class="tool-icon">${o("json")}</div>
          <div class="tool-title">
            <h2>JSON ↔ YAML Converter</h2>
            <p>Convert between JSON and YAML formats with validation</p>
          </div>
        </div>

        <div class="tool-content">
          <div class="converter-layout">
            <!-- JSON Section -->
            <div class="converter-section">
              <div class="section-header">
                <h3>JSON</h3>
                <div class="tool-actions">
                  <button id="json-to-yaml" class="btn btn-primary">
                    ${o("conversion")} Convert to YAML
                  </button>
                  <button id="paste-json" class="btn btn-secondary">
                    ${o("clipboard")} Paste
                  </button>
                  <button id="clear-json" class="btn btn-secondary">
                    ${o("trash")} Clear
                  </button>
                </div>
              </div>
              <textarea 
                id="json-input" 
                placeholder='{"name": "example", "items": [1, 2, 3]}'
                class="tool-textarea converter-textarea"
                rows="12"
              ></textarea>
              <div class="format-actions">
                <button id="format-json" class="btn btn-secondary">Format JSON</button>
                <button id="minify-json" class="btn btn-secondary">Minify JSON</button>
                <button id="copy-json" class="btn btn-secondary">${o("copy")} Copy</button>
              </div>
            </div>

            <!-- YAML Section -->
            <div class="converter-section">
              <div class="section-header">
                <h3>YAML</h3>
                <div class="tool-actions">
                  <button id="yaml-to-json" class="btn btn-primary">
                    ${o("conversion")} Convert to JSON
                  </button>
                  <button id="paste-yaml" class="btn btn-secondary">
                    ${o("clipboard")} Paste
                  </button>
                  <button id="clear-yaml" class="btn btn-secondary">
                    ${o("trash")} Clear
                  </button>
                </div>
              </div>
              <textarea 
                id="yaml-input" 
                placeholder="name: example
items:
  - 1
  - 2
  - 3"
                class="tool-textarea converter-textarea"
                rows="12"
              ></textarea>
              <div class="format-actions">
                <button id="validate-yaml" class="btn btn-secondary">Validate YAML</button>
                <button id="copy-yaml" class="btn btn-secondary">${o("copy")} Copy</button>
              </div>
            </div>
          </div>

          <div id="conversion-status" class="conversion-status"></div>

          <div class="tool-info">
            <div class="info-item">
              <strong>JSON (JavaScript Object Notation):</strong>
              <p>Lightweight data interchange format, easy for humans to read and write.</p>
            </div>
            <div class="info-item">
              <strong>YAML (YAML Ain't Markup Language):</strong>
              <p>Human-readable data serialization standard, commonly used for configuration files.</p>
            </div>
          </div>
        </div>
      </div>
    `}attachEventListeners(){const t=this.container.querySelector("#json-input"),s=this.container.querySelector("#yaml-input"),e=this.container.querySelector("#conversion-status");this.container.querySelector("#json-to-yaml")?.addEventListener("click",()=>{this.convertJsonToYaml(t.value,s,e)}),this.container.querySelector("#yaml-to-json")?.addEventListener("click",()=>{this.convertYamlToJson(s.value,t,e)}),this.container.querySelector("#format-json")?.addEventListener("click",()=>{this.formatJson(t,e)}),this.container.querySelector("#minify-json")?.addEventListener("click",()=>{this.minifyJson(t,e)}),this.container.querySelector("#validate-yaml")?.addEventListener("click",()=>{this.validateYaml(s.value,e)}),this.setupCopyPasteClear()}convertJsonToYaml(t,s,e){if(!t.trim()){this.showStatus("Please enter JSON to convert","error",e);return}try{const n=JSON.parse(t),i=this.jsonToYaml(n);s.value=i,this.showStatus("Successfully converted JSON to YAML","success",e)}catch(n){this.showStatus("Invalid JSON: "+n.message,"error",e)}}convertYamlToJson(t,s,e){if(!t.trim()){this.showStatus("Please enter YAML to convert","error",e);return}try{const n=this.yamlToJson(t);s.value=JSON.stringify(n,null,2),this.showStatus("Successfully converted YAML to JSON","success",e)}catch(n){this.showStatus("Invalid YAML: "+n.message,"error",e)}}formatJson(t,s){try{const e=JSON.parse(t.value);t.value=JSON.stringify(e,null,2),this.showStatus("JSON formatted successfully","success",s)}catch(e){this.showStatus("Invalid JSON: "+e.message,"error",s)}}minifyJson(t,s){try{const e=JSON.parse(t.value);t.value=JSON.stringify(e),this.showStatus("JSON minified successfully","success",s)}catch(e){this.showStatus("Invalid JSON: "+e.message,"error",s)}}validateYaml(t,s){try{this.yamlToJson(t),this.showStatus("YAML is valid","success",s)}catch(e){this.showStatus("Invalid YAML: "+e.message,"error",s)}}yamlToJson(t){const s=t.split(`
`).filter(e=>e.trim()&&!e.trim().startsWith("#"));return this.parseYamlLines(s)}parseYamlLines(t){const s={};let e=0;for(;e<t.length;){const n=t[e],i=n.length-n.trimStart().length,r=n.trim();if(r.includes(":")){const[c,...m]=r.split(":"),u=m.join(":").trim();if(u)s[c.trim()]=this.parseValue(u);else{const d=this.getNextIndent(t,e+1);if(d>i){const l=this.extractIndentedLines(t,e+1,d);l.length>0&&l[0].trim().startsWith("-")?s[c.trim()]=this.parseYamlArray(l):s[c.trim()]=this.parseYamlLines(l),e+=l.length}}}e++}return s}parseValue(t){return t=t.trim(),t==="true"?!0:t==="false"?!1:t==="null"||t==="~"?null:/^-?\d+$/.test(t)?parseInt(t):/^-?\d*\.\d+$/.test(t)?parseFloat(t):t.startsWith('"')&&t.endsWith('"')||t.startsWith("'")&&t.endsWith("'")?t.slice(1,-1):t}parseYamlArray(t){return t.filter(s=>s.trim().startsWith("-")).map(s=>{const e=s.trim().substring(1).trim();return this.parseValue(e)})}getNextIndent(t,s){for(let e=s;e<t.length;e++){const n=t[e];if(n.trim())return n.length-n.trimStart().length}return 0}extractIndentedLines(t,s,e){const n=[];for(let i=s;i<t.length;i++){const r=t[i],c=r.length-r.trimStart().length;if(r.trim()&&c<e)break;c>=e&&n.push(r.substring(e))}return n}jsonToYaml(t,s=0){const e="  ".repeat(s);if(t===null)return"null";if(typeof t=="boolean"||typeof t=="number")return t.toString();if(typeof t=="string")return t;if(Array.isArray(t))return t.length===0?"[]":t.map(n=>`${e}- ${this.jsonToYaml(n,s+1)}`).join(`
`);if(typeof t=="object"){const n=Object.keys(t);return n.length===0?"{}":n.map(i=>{const r=t[i];return typeof r=="object"&&r!==null&&!Array.isArray(r)?`${e}${i}:
${this.jsonToYaml(r,s+1)}`:Array.isArray(r)?r.length===0?`${e}${i}: []`:`${e}${i}:
${this.jsonToYaml(r,s+1)}`:`${e}${i}: ${this.jsonToYaml(r,s)}`}).join(`
`)}return String(t)}setupCopyPasteClear(){this.container.querySelector("#copy-json")?.addEventListener("click",()=>{const t=this.container.querySelector("#json-input");this.copyToClipboard(t.value,"JSON")}),this.container.querySelector("#copy-yaml")?.addEventListener("click",()=>{const t=this.container.querySelector("#yaml-input");this.copyToClipboard(t.value,"YAML")}),this.container.querySelector("#paste-json")?.addEventListener("click",()=>{const t=this.container.querySelector("#json-input");this.pasteFromClipboard(t,"JSON")}),this.container.querySelector("#paste-yaml")?.addEventListener("click",()=>{const t=this.container.querySelector("#yaml-input");this.pasteFromClipboard(t,"YAML")}),this.container.querySelector("#clear-json")?.addEventListener("click",()=>{this.container.querySelector("#json-input").value=""}),this.container.querySelector("#clear-yaml")?.addEventListener("click",()=>{this.container.querySelector("#yaml-input").value=""})}async copyToClipboard(t,s){if(!t.trim()){this.showNotification(`No ${s} to copy`,"error");return}try{await navigator.clipboard.writeText(t),this.showNotification(`${s} copied to clipboard`,"success")}catch{this.showNotification(`Failed to copy ${s}`,"error")}}async pasteFromClipboard(t,s){try{const e=await navigator.clipboard.readText();t.value=e,this.showNotification(`${s} pasted from clipboard`,"success")}catch{this.showNotification(`Failed to paste ${s}`,"error")}}showStatus(t,s,e){e.innerHTML=`
      <div class="status-message status-${s}">
        ${s==="success"?o("check"):o("alert")} ${t}
      </div>
    `}showNotification(t,s){const e=this.container.querySelector(".notification");e&&e.remove();const n=document.createElement("div");n.className=`notification notification-${s}`,n.innerHTML=`
      <div class="notification-content">
        <span class="notification-icon">
          ${s==="success"?o("check"):o("alert")}
        </span>
        <span class="notification-message">${t}</span>
      </div>
    `,this.container.insertBefore(n,this.container.firstChild),setTimeout(()=>{n.parentNode&&n.remove()},3e3)}destroy(){}}export{S as JsonYamlTool};
