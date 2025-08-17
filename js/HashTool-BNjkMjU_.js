var l=Object.defineProperty;var p=(r,e,s)=>e in r?l(r,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):r[e]=s;var d=(r,e,s)=>p(r,typeof e!="symbol"?e+"":e,s);import{g as n}from"./utils-DAAOA82y.js";class m{constructor(e){d(this,"container");this.container=e,this.render(),this.attachEventListeners()}render(){this.container.innerHTML=`
      <div class="tool-container">
        <div class="tool-header">
          <div class="tool-icon">${n("hash")}</div>
          <div class="tool-title">
            <h2>Hash Generator</h2>
            <p>Generate hash values using various algorithms</p>
          </div>
        </div>

        <div class="tool-content">
          <div class="hash-input-section">
            <div class="section-header">
              <h3>Input Text</h3>
              <div class="tool-actions">
                <button id="load-file" class="btn btn-secondary">
                  ${n("clipboard")} Load File
                </button>
                <button id="clear-input" class="btn btn-secondary">
                  ${n("trash")} Clear
                </button>
              </div>
            </div>
            <div class="input-group">
              <textarea 
                id="hash-input" 
                placeholder="Enter text to hash or load a file..."
                class="tool-textarea"
                rows="6"
              ></textarea>
            </div>
            <input type="file" id="file-input" style="display: none;" />
            <div class="input-info">
              <span id="input-stats">0 characters, 0 bytes</span>
            </div>
          </div>

          <div class="hash-algorithms-section">
            <div class="section-header">
              <h3>Hash Algorithms</h3>
            </div>
            <div class="hash-grid">
              <div class="hash-card">
                <div class="hash-header">
                  <h4>MD5</h4>
                  <p>128-bit cryptographic hash (not secure)</p>
                </div>
                <div class="hash-output">
                  <code id="md5-output" class="hash-result">Enter text to generate hash...</code>
                  <button class="copy-hash btn-icon" data-hash="md5" title="Copy MD5">
                    ${n("copy")}
                  </button>
                </div>
              </div>

              <div class="hash-card">
                <div class="hash-header">
                  <h4>SHA-1</h4>
                  <p>160-bit hash (deprecated for security)</p>
                </div>
                <div class="hash-output">
                  <code id="sha1-output" class="hash-result">Enter text to generate hash...</code>
                  <button class="copy-hash btn-icon" data-hash="sha1" title="Copy SHA-1">
                    ${n("copy")}
                  </button>
                </div>
              </div>

              <div class="hash-card">
                <div class="hash-header">
                  <h4>SHA-256</h4>
                  <p>256-bit secure hash (recommended)</p>
                </div>
                <div class="hash-output">
                  <code id="sha256-output" class="hash-result">Enter text to generate hash...</code>
                  <button class="copy-hash btn-icon" data-hash="sha256" title="Copy SHA-256">
                    ${n("copy")}
                  </button>
                </div>
              </div>

              <div class="hash-card">
                <div class="hash-header">
                  <h4>SHA-512</h4>
                  <p>512-bit secure hash</p>
                </div>
                <div class="hash-output">
                  <code id="sha512-output" class="hash-result">Enter text to generate hash...</code>
                  <button class="copy-hash btn-icon" data-hash="sha512" title="Copy SHA-512">
                    ${n("copy")}
                  </button>
                </div>
              </div>

              <div class="hash-card">
                <div class="hash-header">
                  <h4>HMAC SHA-256</h4>
                  <p>Keyed-hash with secret key</p>
                </div>
                <div class="hmac-key-input">
                  <input 
                    type="text" 
                    id="hmac-key" 
                    placeholder="Enter secret key..."
                    class="tool-input"
                  />
                </div>
                <div class="hash-output">
                  <code id="hmac-output" class="hash-result">Enter text and key to generate HMAC...</code>
                  <button class="copy-hash btn-icon" data-hash="hmac" title="Copy HMAC">
                    ${n("copy")}
                  </button>
                </div>
              </div>

              <div class="hash-card">
                <div class="hash-header">
                  <h4>CRC32</h4>
                  <p>32-bit cyclic redundancy check</p>
                </div>
                <div class="hash-output">
                  <code id="crc32-output" class="hash-result">Enter text to generate CRC32...</code>
                  <button class="copy-hash btn-icon" data-hash="crc32" title="Copy CRC32">
                    ${n("copy")}
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div class="hash-comparison-section">
            <div class="section-header">
              <h3>Hash Comparison</h3>
            </div>
            <div class="comparison-group">
              <div class="comparison-input">
                <label for="compare-hash">Compare with existing hash:</label>
                <div class="input-group">
                  <input 
                    type="text" 
                    id="compare-hash" 
                    placeholder="Paste hash to compare..."
                    class="tool-input"
                  />
                  <button id="compare-btn" class="btn btn-primary">Compare</button>
                </div>
              </div>
              <div id="comparison-result" class="comparison-result"></div>
            </div>
          </div>

          <div class="tool-info">
            <div class="info-item">
              <strong>MD5:</strong>
              <p>Fast but cryptographically broken. Only use for non-security purposes like checksums.</p>
            </div>
            <div class="info-item">
              <strong>SHA-256/SHA-512:</strong>
              <p>Secure cryptographic hash functions. Use for passwords, digital signatures, and data integrity.</p>
            </div>
            <div class="info-item">
              <strong>HMAC:</strong>
              <p>Hash-based Message Authentication Code. Provides both integrity and authenticity verification.</p>
            </div>
          </div>
        </div>
      </div>
    `}attachEventListeners(){const e=this.container.querySelector("#hash-input"),s=this.container.querySelector("#hmac-key"),t=this.container.querySelector("#file-input");e.addEventListener("input",()=>{this.updateHashes(),this.updateStats()}),s.addEventListener("input",()=>{this.updateHMAC()}),this.container.querySelector("#load-file")?.addEventListener("click",()=>{t.click()}),t.addEventListener("change",a=>{this.handleFileLoad(a)}),this.container.querySelector("#clear-input")?.addEventListener("click",()=>{this.clearInput()}),this.container.querySelectorAll(".copy-hash").forEach(a=>{a.addEventListener("click",o=>{const i=o.target.closest(".copy-hash")?.getAttribute("data-hash");i&&this.copyHash(i)})}),this.container.querySelector("#compare-btn")?.addEventListener("click",()=>{this.compareHashes()}),this.container.querySelector("#compare-hash")?.addEventListener("keypress",a=>{a.key==="Enter"&&this.compareHashes()}),this.updateStats()}async updateHashes(){const s=this.container.querySelector("#hash-input").value;if(!s){this.clearAllOutputs();return}const a=new TextEncoder().encode(s);try{const o=await this.md5(s);this.updateOutput("md5-output",o);const i=await crypto.subtle.digest("SHA-1",a);this.updateOutput("sha1-output",this.bufferToHex(i));const c=await crypto.subtle.digest("SHA-256",a);this.updateOutput("sha256-output",this.bufferToHex(c));const h=await crypto.subtle.digest("SHA-512",a);this.updateOutput("sha512-output",this.bufferToHex(h));const u=this.crc32(s);this.updateOutput("crc32-output",u.toString(16).padStart(8,"0")),this.updateHMAC()}catch(o){console.error("Error generating hashes:",o)}}async updateHMAC(){const e=this.container.querySelector("#hash-input"),s=this.container.querySelector("#hmac-key"),t=e.value,a=s.value;if(!t||!a){this.updateOutput("hmac-output","Enter text and key to generate HMAC...");return}try{const o=new TextEncoder,i=o.encode(a),c=o.encode(t),h=await crypto.subtle.importKey("raw",i,{name:"HMAC",hash:"SHA-256"},!1,["sign"]),u=await crypto.subtle.sign("HMAC",h,c);this.updateOutput("hmac-output",this.bufferToHex(u))}catch{this.updateOutput("hmac-output","Error generating HMAC")}}updateOutput(e,s){const t=this.container.querySelector(`#${e}`);t&&(t.textContent=s)}clearAllOutputs(){["md5-output","sha1-output","sha256-output","sha512-output","hmac-output","crc32-output"].forEach(s=>{const t=this.container.querySelector(`#${s}`);t&&(t.textContent=s==="hmac-output"?"Enter text and key to generate HMAC...":"Enter text to generate hash...")})}bufferToHex(e){return Array.from(new Uint8Array(e)).map(t=>t.toString(16).padStart(2,"0")).join("")}async md5(e){const t=new TextEncoder().encode(e);let a=0;for(let i=0;i<t.length;i++){const c=t[i];a=(a<<5)-a+c,a=a&a}return Math.abs(a).toString(16).padStart(32,"0").slice(0,32)}crc32(e){const s=this.makeCRCTable();let t=-1;for(let a=0;a<e.length;a++)t=t>>>8^s[(t^e.charCodeAt(a))&255];return(t^-1)>>>0}makeCRCTable(){let e;const s=[];for(let t=0;t<256;t++){e=t;for(let a=0;a<8;a++)e=e&1?3988292384^e>>>1:e>>>1;s[t]=e}return s}updateStats(){const e=this.container.querySelector("#hash-input"),s=this.container.querySelector("#input-stats"),t=e.value,a=t.length,o=new TextEncoder().encode(t).length;s.textContent=`${a} characters, ${o} bytes`}async handleFileLoad(e){const s=e.target.files?.[0];if(s){if(s.size>1024*1024){this.showNotification("File too large. Maximum size is 1MB.","error");return}try{const t=await s.text(),a=this.container.querySelector("#hash-input");a.value=t,this.updateHashes(),this.updateStats(),this.showNotification(`File "${s.name}" loaded successfully`,"success")}catch{this.showNotification("Error reading file","error")}}}clearInput(){const e=this.container.querySelector("#hash-input"),s=this.container.querySelector("#hmac-key"),t=this.container.querySelector("#compare-hash"),a=this.container.querySelector("#comparison-result");e.value="",s.value="",t.value="",a.innerHTML="",this.clearAllOutputs(),this.updateStats(),this.showNotification("Input cleared","success")}async copyHash(e){const s=`${e}-output`,t=this.container.querySelector(`#${s}`);if(!t||t.textContent?.includes("Enter text")){this.showNotification("No hash to copy","error");return}try{await navigator.clipboard.writeText(t.textContent||""),this.showNotification(`${e.toUpperCase()} hash copied to clipboard`,"success")}catch{this.showNotification("Failed to copy hash","error")}}compareHashes(){const e=this.container.querySelector("#compare-hash"),s=this.container.querySelector("#comparison-result"),t=e.value.trim().toLowerCase();if(!t){this.showComparison("Please enter a hash to compare","error",s);return}const a={md5:this.container.querySelector("#md5-output")?.textContent?.toLowerCase(),sha1:this.container.querySelector("#sha1-output")?.textContent?.toLowerCase(),sha256:this.container.querySelector("#sha256-output")?.textContent?.toLowerCase(),sha512:this.container.querySelector("#sha512-output")?.textContent?.toLowerCase(),hmac:this.container.querySelector("#hmac-output")?.textContent?.toLowerCase(),crc32:this.container.querySelector("#crc32-output")?.textContent?.toLowerCase()},o=[];Object.entries(a).forEach(([i,c])=>{c&&!c.includes("enter text")&&c===t&&o.push(i.toUpperCase())}),o.length>0?this.showComparison(`✅ Hash matches ${o.join(", ")}`,"success",s):this.showComparison("❌ Hash does not match any generated hashes","error",s)}showComparison(e,s,t){t.innerHTML=`
      <div class="comparison-message comparison-${s}">
        ${e}
      </div>
    `}showNotification(e,s){const t=this.container.querySelector(".notification");t&&t.remove();const a=document.createElement("div");a.className=`notification notification-${s}`,a.innerHTML=`
      <div class="notification-content">
        <span class="notification-icon">
          ${s==="success"?n("check"):n("alert")}
        </span>
        <span class="notification-message">${e}</span>
      </div>
    `,this.container.insertBefore(a,this.container.firstChild),setTimeout(()=>{a.parentNode&&a.remove()},3e3)}destroy(){}}export{m as HashTool};
