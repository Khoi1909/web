var v=Object.defineProperty;var h=(o,t,i)=>t in o?v(o,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):o[t]=i;var d=(o,t,i)=>h(o,typeof t!="symbol"?t+"":t,i);import{g as a}from"./utils-DAAOA82y.js";class I{constructor(t){d(this,"container");d(this,"history",[]);this.container=t,this.render(),this.attachEventListeners()}render(){this.container.innerHTML=`
      <div class="tool-container">
        <div class="tool-header">
          <div class="tool-icon">${a("uuid")}</div>
          <div class="tool-title">
            <h2>UUID Generator</h2>
            <p>Generate UUIDs (Universally Unique Identifiers) in multiple versions</p>
          </div>
        </div>

        <div class="tool-content">
          <div class="uuid-generator-section">
            <div class="uuid-types">
              <div class="uuid-type-card">
                <h3>UUID v4 (Random)</h3>
                <p>Cryptographically random UUID</p>
                <div class="uuid-actions">
                  <button id="generate-v4" class="btn btn-primary">
                    ${a("generation")} Generate UUID v4
                  </button>
                  <button id="bulk-generate-v4" class="btn btn-secondary">
                    Generate 10 UUIDs
                  </button>
                </div>
              </div>

              <div class="uuid-type-card">
                <h3>UUID v1 (Timestamp)</h3>
                <p>Time-based UUID with node ID</p>
                <div class="uuid-actions">
                  <button id="generate-v1" class="btn btn-primary">
                    ${a("generation")} Generate UUID v1
                  </button>
                  <button id="bulk-generate-v1" class="btn btn-secondary">
                    Generate 10 UUIDs
                  </button>
                </div>
              </div>
            </div>

            <div class="uuid-output-section">
              <div class="section-header">
                <h3>Generated UUIDs</h3>
                <div class="tool-actions">
                  <button id="copy-all" class="btn btn-secondary">
                    ${a("copy")} Copy All
                  </button>
                  <button id="clear-all" class="btn btn-secondary">
                    ${a("trash")} Clear All
                  </button>
                </div>
              </div>
              <div id="uuid-output" class="uuid-output"></div>
            </div>

            <div class="uuid-tools-section">
              <div class="section-header">
                <h3>UUID Tools</h3>
              </div>
              <div class="uuid-tools">
                <div class="uuid-tool">
                  <label for="uuid-input">Validate/Parse UUID:</label>
                  <div class="input-group">
                    <input 
                      type="text" 
                      id="uuid-input" 
                      placeholder="Paste UUID here to validate..."
                      class="tool-input"
                    />
                    <button id="validate-uuid" class="btn btn-primary">Validate</button>
                    <button id="parse-uuid" class="btn btn-secondary">Parse</button>
                  </div>
                </div>
              </div>
              <div id="uuid-validation" class="uuid-validation"></div>
            </div>
          </div>

          <div class="tool-info">
            <div class="info-item">
              <strong>UUID v1 (Time-based):</strong>
              <p>Contains timestamp and node ID. Can be used to extract creation time but less random.</p>
            </div>
            <div class="info-item">
              <strong>UUID v4 (Random):</strong>
              <p>Cryptographically random. Most commonly used version for general purposes.</p>
            </div>
            <div class="info-item">
              <strong>Format:</strong>
              <p>Standard UUID format: xxxxxxxx-xxxx-Mxxx-Nxxx-xxxxxxxxxxxx (32 hexadecimal digits)</p>
            </div>
          </div>
        </div>
      </div>
    `}attachEventListeners(){this.container.querySelector("#generate-v4")?.addEventListener("click",()=>{this.generateAndDisplay(this.generateUUIDv4(),"v4")}),this.container.querySelector("#generate-v1")?.addEventListener("click",()=>{this.generateAndDisplay(this.generateUUIDv1(),"v1")}),this.container.querySelector("#bulk-generate-v4")?.addEventListener("click",()=>{this.bulkGenerate("v4",10)}),this.container.querySelector("#bulk-generate-v1")?.addEventListener("click",()=>{this.bulkGenerate("v1",10)}),this.container.querySelector("#validate-uuid")?.addEventListener("click",()=>{this.validateUUID()}),this.container.querySelector("#parse-uuid")?.addEventListener("click",()=>{this.parseUUID()}),this.container.querySelector("#copy-all")?.addEventListener("click",()=>{this.copyAllUUIDs()}),this.container.querySelector("#clear-all")?.addEventListener("click",()=>{this.clearAll()}),this.container.querySelector("#uuid-input")?.addEventListener("keypress",t=>{t.key==="Enter"&&this.validateUUID()})}generateUUIDv4(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){const i=Math.random()*16|0;return(t==="x"?i:i&3|8).toString(16)})}generateUUIDv1(){const i=Date.now().toString(16).padStart(12,"0"),e=i.slice(-8),s=i.slice(-12,-8),n="1"+i.slice(-16,-12).padStart(3,"0"),r=Math.random().toString(16).slice(2,6),c=Array.from({length:6},()=>Math.floor(Math.random()*256).toString(16).padStart(2,"0")).join("");return`${e}-${s}-${n}-${r}-${c}`}generateAndDisplay(t,i){this.history.unshift(t),this.displayUUID(t,i),this.showNotification(`UUID ${i} generated successfully`,"success")}bulkGenerate(t,i){const e=[];for(let s=0;s<i;s++){const n=t==="v4"?this.generateUUIDv4():this.generateUUIDv1();e.push(n)}this.history.unshift(...e),this.displayBulkUUIDs(e,t),this.showNotification(`${i} UUID ${t}s generated successfully`,"success")}displayUUID(t,i){const e=this.container.querySelector("#uuid-output"),s=this.createUUIDElement(t,i);e.insertBefore(s,e.firstChild)}displayBulkUUIDs(t,i){const e=this.container.querySelector("#uuid-output");t.reverse().forEach(s=>{const n=this.createUUIDElement(s,i);e.insertBefore(n,e.firstChild)})}createUUIDElement(t,i){const e=document.createElement("div");return e.className="uuid-item",e.innerHTML=`
      <div class="uuid-content">
        <span class="uuid-version">v${i.slice(-1)}</span>
        <code class="uuid-value">${t}</code>
        <div class="uuid-actions">
          <button class="btn-icon copy-uuid" data-uuid="${t}" title="Copy UUID">
            ${a("copy")}
          </button>
        </div>
      </div>
    `,e.querySelector(".copy-uuid")?.addEventListener("click",()=>{this.copyUUID(t)}),e}validateUUID(){const i=this.container.querySelector("#uuid-input").value.trim(),e=this.container.querySelector("#uuid-validation");if(!i){this.showValidation("Please enter a UUID to validate","error",e);return}if(this.isValidUUID(i)){const n=this.getUUIDVersion(i);this.showValidation(`Valid UUID ${n}`,"success",e)}else this.showValidation("Invalid UUID format","error",e)}parseUUID(){const i=this.container.querySelector("#uuid-input").value.trim(),e=this.container.querySelector("#uuid-validation");if(!i){this.showValidation("Please enter a UUID to parse","error",e);return}if(!this.isValidUUID(i)){this.showValidation("Invalid UUID format","error",e);return}const s=this.parseUUIDInfo(i);this.showValidation(`
      <div class="uuid-parse-info">
        <div><strong>Version:</strong> ${s.version}</div>
        <div><strong>Variant:</strong> ${s.variant}</div>
        ${s.timestamp?`<div><strong>Timestamp:</strong> ${s.timestamp}</div>`:""}
        <div><strong>Format:</strong> Standard UUID</div>
      </div>
    `,"info",e)}isValidUUID(t){return/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(t)}getUUIDVersion(t){const i=t.charAt(14);return{1:"v1 (Time-based)",2:"v2 (DCE Security)",3:"v3 (Name-based MD5)",4:"v4 (Random)",5:"v5 (Name-based SHA-1)"}[i]||"Unknown"}parseUUIDInfo(t){const i=t.charAt(14),e=t.charAt(19),s={version:this.getUUIDVersion(t),variant:e>="8"&&e<="b"?"RFC 4122":"Other"};if(i==="1")try{const n=t.replace(/-/g,""),r=parseInt(n.substring(0,8),16),c=parseInt(n.substring(8,12),16),l=parseInt(n.substring(12,16),16)&4095,u=(BigInt(l)*BigInt(Math.pow(2,32))+BigInt(c)*BigInt(65536)+BigInt(r)-BigInt(122192928e9))/BigInt(1e4);s.timestamp=new Date(Number(u)).toISOString()}catch{s.timestamp="Unable to parse"}return s}async copyUUID(t){try{await navigator.clipboard.writeText(t),this.showNotification("UUID copied to clipboard","success")}catch{this.showNotification("Failed to copy UUID","error")}}async copyAllUUIDs(){if(this.history.length===0){this.showNotification("No UUIDs to copy","error");return}try{await navigator.clipboard.writeText(this.history.join(`
`)),this.showNotification(`${this.history.length} UUIDs copied to clipboard`,"success")}catch{this.showNotification("Failed to copy UUIDs","error")}}clearAll(){this.history=[];const t=this.container.querySelector("#uuid-output");t.innerHTML="";const i=this.container.querySelector("#uuid-validation");i.innerHTML="";const e=this.container.querySelector("#uuid-input");e.value="",this.showNotification("All UUIDs cleared","success")}showValidation(t,i,e){e.innerHTML=`
      <div class="validation-message validation-${i}">
        ${i==="success"?a("check"):i==="error"?a("alert"):a("string")} 
        ${t}
      </div>
    `}showNotification(t,i){const e=this.container.querySelector(".notification");e&&e.remove();const s=document.createElement("div");s.className=`notification notification-${i}`,s.innerHTML=`
      <div class="notification-content">
        <span class="notification-icon">
          ${i==="success"?a("check"):a("alert")}
        </span>
        <span class="notification-message">${t}</span>
      </div>
    `,this.container.insertBefore(s,this.container.firstChild),setTimeout(()=>{s.parentNode&&s.remove()},3e3)}destroy(){}}export{I as UUIDTool};
