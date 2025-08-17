var v=Object.defineProperty;var y=(s,e,t)=>e in s?v(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var c=(s,e,t)=>y(s,typeof e!="symbol"?e+"":e,t);import{g as o}from"./utils-DAAOA82y.js";class S{constructor(e){c(this,"container");this.container=e,this.render(),this.attachEventListeners()}render(){this.container.innerHTML=`
      <div class="tool-container">
        <div class="tool-header">
          <div class="tool-icon">${o("jwt")}</div>
          <div class="tool-title">
            <h2>JWT Decoder</h2>
            <p>Decode and verify JSON Web Tokens</p>
          </div>
        </div>

        <div class="tool-content">
          <div class="tool-section">
            <div class="section-header">
              <h3>JWT Token Input</h3>
              <div class="tool-actions">
                <button id="clear-jwt-input" class="btn btn-secondary">
                  ${o("trash")} Clear
                </button>
                <button id="paste-jwt-input" class="btn btn-secondary">
                  ${o("clipboard")} Paste
                </button>
                <button id="sample-jwt" class="btn btn-secondary">
                  ${o("code")} Sample JWT
                </button>
              </div>
            </div>
            <textarea 
              id="jwt-input" 
              placeholder="Paste your JWT token here (e.g., eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...)"
              class="tool-textarea"
              rows="4"
            ></textarea>
            <div id="jwt-validation" class="jwt-validation"></div>
          </div>

          <div class="jwt-sections">
            <!-- Header Section -->
            <div class="jwt-section">
              <div class="section-header">
                <h3>Header</h3>
                <div class="tool-actions">
                  <button id="copy-header" class="btn btn-secondary">
                    ${o("copy")} Copy
                  </button>
                </div>
              </div>
              <div class="jwt-part-info">
                <span class="jwt-part-label">Algorithm & Token Type</span>
              </div>
              <textarea 
                id="jwt-header" 
                placeholder="Decoded header will appear here..."
                class="tool-textarea jwt-output"
                readonly
                rows="4"
              ></textarea>
            </div>

            <!-- Payload Section -->
            <div class="jwt-section">
              <div class="section-header">
                <h3>Payload</h3>
                <div class="tool-actions">
                  <button id="copy-payload" class="btn btn-secondary">
                    ${o("copy")} Copy
                  </button>
                </div>
              </div>
              <div class="jwt-part-info">
                <span class="jwt-part-label">Data & Claims</span>
              </div>
              <textarea 
                id="jwt-payload" 
                placeholder="Decoded payload will appear here..."
                class="tool-textarea jwt-output"
                readonly
                rows="8"
              ></textarea>
            </div>

            <!-- Signature Section -->
            <div class="jwt-section">
              <div class="section-header">
                <h3>Signature</h3>
                <div class="tool-actions">
                  <button id="copy-signature" class="btn btn-secondary">
                    ${o("copy")} Copy
                  </button>
                </div>
              </div>
              <div class="jwt-part-info">
                <span class="jwt-part-label">Signature (Base64 encoded)</span>
              </div>
              <textarea 
                id="jwt-signature" 
                placeholder="Signature will appear here..."
                class="tool-textarea jwt-output"
                readonly
                rows="3"
              ></textarea>
            </div>
          </div>

          <div class="tool-info">
            <div class="info-item">
              <strong>What is JWT?</strong>
              <p>JSON Web Token (JWT) is a compact, URL-safe means of representing claims between two parties. JWTs consist of three parts: Header, Payload, and Signature.</p>
            </div>
            <div class="info-item">
              <strong>Common JWT Claims:</strong>
              <p><code>iss</code> (issuer), <code>sub</code> (subject), <code>aud</code> (audience), <code>exp</code> (expiration), <code>iat</code> (issued at), <code>nbf</code> (not before)</p>
            </div>
            <div class="info-item">
              <strong>Note:</strong>
              <p>This tool only decodes JWTs. It does not verify signatures as that requires the secret key.</p>
            </div>
          </div>
        </div>
      </div>
    `}attachEventListeners(){const e=this.container.querySelector("#jwt-input"),t=this.container.querySelector("#jwt-header"),i=this.container.querySelector("#jwt-payload"),a=this.container.querySelector("#jwt-signature");this.container.querySelector("#jwt-validation");const n=this.container.querySelector("#clear-jwt-input"),d=this.container.querySelector("#paste-jwt-input"),l=this.container.querySelector("#sample-jwt"),h=this.container.querySelector("#copy-header"),p=this.container.querySelector("#copy-payload"),u=this.container.querySelector("#copy-signature");e.addEventListener("input",()=>{this.decodeJWT(e.value.trim())}),n.addEventListener("click",()=>{e.value="",this.clearOutputs(),e.focus()}),d.addEventListener("click",async()=>{try{const r=await navigator.clipboard.readText();e.value=r,this.decodeJWT(r),this.showSuccess("Pasted from clipboard")}catch{this.showError("Failed to paste from clipboard")}}),l.addEventListener("click",()=>{const r="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyLCJleHAiOjE3MzM5NDgzOTksImF1ZCI6InNhbXBsZS1hdWRpZW5jZSIsImlzcyI6InNhbXBsZS1pc3N1ZXIifQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";e.value=r,this.decodeJWT(r),this.showSuccess("Sample JWT loaded")}),h.addEventListener("click",()=>this.copyToClipboard(t.value,"Header")),p.addEventListener("click",()=>this.copyToClipboard(i.value,"Payload")),u.addEventListener("click",()=>this.copyToClipboard(a.value,"Signature"))}decodeJWT(e){if(!e){this.clearOutputs();return}try{const t=e.split(".");if(t.length!==3){this.showValidationError("Invalid JWT format. JWT must have 3 parts separated by dots."),this.clearOutputs();return}try{const i=this.base64UrlDecode(t[0]),a=JSON.parse(i);this.container.querySelector("#jwt-header").value=JSON.stringify(a,null,2)}catch(i){this.showValidationError("Invalid header: "+i.message);return}try{const i=this.base64UrlDecode(t[1]),a=JSON.parse(i),n=this.enrichPayloadWithDates(a);this.container.querySelector("#jwt-payload").value=JSON.stringify(n,null,2)}catch(i){this.showValidationError("Invalid payload: "+i.message);return}this.container.querySelector("#jwt-signature").value=t[2],this.showValidationSuccess("JWT decoded successfully"),this.checkExpiration(JSON.parse(this.base64UrlDecode(t[1])))}catch(t){this.showValidationError("Failed to decode JWT: "+t.message),this.clearOutputs()}}base64UrlDecode(e){const t=4-e.length%4;t!==4&&(e+="=".repeat(t)),e=e.replace(/-/g,"+").replace(/_/g,"/");try{return decodeURIComponent(escape(atob(e)))}catch{throw new Error("Invalid base64url encoding")}}enrichPayloadWithDates(e){const t={...e};return["exp","iat","nbf"].forEach(a=>{if(e[a]&&typeof e[a]=="number"){const n=new Date(e[a]*1e3);t[`${a}_readable`]=n.toISOString()+" ("+n.toLocaleString()+")"}}),t}checkExpiration(e){if(e.exp){const t=new Date(e.exp*1e3),i=new Date;if(t<i)this.showValidationWarning(`Token expired on ${t.toLocaleString()}`);else{const a=Math.round((t.getTime()-i.getTime())/864e5);a<=7&&this.showValidationWarning(`Token expires in ${a} days (${t.toLocaleString()})`)}}}clearOutputs(){this.container.querySelector("#jwt-header").value="",this.container.querySelector("#jwt-payload").value="",this.container.querySelector("#jwt-signature").value="",this.container.querySelector("#jwt-validation").innerHTML=""}showValidationSuccess(e){const t=this.container.querySelector("#jwt-validation");t.innerHTML=`
      <div class="validation-message validation-success">
        ${o("check")} ${e}
      </div>
    `}showValidationError(e){const t=this.container.querySelector("#jwt-validation");t.innerHTML=`
      <div class="validation-message validation-error">
        ${o("alert")} ${e}
      </div>
    `}showValidationWarning(e){const t=this.container.querySelector("#jwt-validation");t.innerHTML=`
      <div class="validation-message validation-warning">
        ${o("alert")} ${e}
      </div>
    `}async copyToClipboard(e,t){if(!e){this.showError(`No ${t.toLowerCase()} to copy`);return}try{await navigator.clipboard.writeText(e),this.showSuccess(`${t} copied to clipboard`)}catch{this.showError(`Failed to copy ${t.toLowerCase()}`)}}showSuccess(e){this.showNotification(e,"success")}showError(e){this.showNotification(e,"error")}showNotification(e,t){const i=this.container.querySelector(".notification");i&&i.remove();const a=document.createElement("div");a.className=`notification notification-${t}`,a.innerHTML=`
      <div class="notification-content">
        <span class="notification-icon">
          ${t==="success"?o("check"):o("alert")}
        </span>
        <span class="notification-message">${e}</span>
      </div>
    `,this.container.insertBefore(a,this.container.firstChild),setTimeout(()=>{a.parentNode&&a.remove()},3e3)}destroy(){}}export{S as JWTTool};
