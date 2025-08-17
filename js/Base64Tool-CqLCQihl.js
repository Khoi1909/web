var p=Object.defineProperty;var v=(a,t,e)=>t in a?p(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e;var r=(a,t,e)=>v(a,typeof t!="symbol"?t+"":t,e);import{g as s}from"./utils-DAAOA82y.js";class f{constructor(t){r(this,"container");this.container=t,this.render(),this.attachEventListeners()}render(){this.container.innerHTML=`
      <div class="tool-container">
        <div class="tool-header">
          <div class="tool-icon">${s("code")}</div>
          <div class="tool-title">
            <h2>Base64 Encoder/Decoder</h2>
            <p>Encode and decode text to/from Base64 format</p>
          </div>
        </div>

        <div class="tool-content">
          <div class="tool-section">
            <div class="section-header">
              <h3>Input</h3>
              <div class="tool-actions">
                <button id="clear-input" class="btn btn-secondary">
                  ${s("trash")} Clear
                </button>
                <button id="paste-input" class="btn btn-secondary">
                  ${s("clipboard")} Paste
                </button>
              </div>
            </div>
            <textarea 
              id="base64-input" 
              placeholder="Enter text to encode or Base64 string to decode..."
              class="tool-textarea"
              rows="6"
            ></textarea>
          </div>

          <div class="tool-actions-center">
            <button id="encode-btn" class="btn btn-primary">
              ${s("lock")} Encode to Base64
            </button>
            <button id="decode-btn" class="btn btn-primary">
              ${s("unlock")} Decode from Base64
            </button>
          </div>

          <div class="tool-section">
            <div class="section-header">
              <h3>Output</h3>
              <div class="tool-actions">
                <button id="copy-output" class="btn btn-secondary">
                  ${s("copy")} Copy
                </button>
                <button id="clear-output" class="btn btn-secondary">
                  ${s("trash")} Clear
                </button>
              </div>
            </div>
            <textarea 
              id="base64-output" 
              placeholder="Result will appear here..."
              class="tool-textarea"
              readonly
              rows="6"
            ></textarea>
          </div>

          <div class="tool-info">
            <div class="info-item">
              <strong>What is Base64?</strong>
              <p>Base64 is a binary-to-text encoding scheme that represents binary data in an ASCII string format.</p>
            </div>
            <div class="info-item">
              <strong>Common uses:</strong>
              <p>Email attachments, data URLs, API tokens, storing binary data in text formats.</p>
            </div>
          </div>
        </div>
      </div>
    `}attachEventListeners(){const t=this.container.querySelector("#base64-input"),e=this.container.querySelector("#base64-output"),i=this.container.querySelector("#encode-btn"),n=this.container.querySelector("#decode-btn"),d=this.container.querySelector("#clear-input"),l=this.container.querySelector("#clear-output"),u=this.container.querySelector("#copy-output"),h=this.container.querySelector("#paste-input");i.addEventListener("click",()=>{const o=t.value.trim();if(!o){this.showError("Please enter text to encode");return}try{const c=btoa(unescape(encodeURIComponent(o)));e.value=c,this.showSuccess("Text encoded successfully")}catch(c){this.showError("Error encoding text: "+c.message)}}),n.addEventListener("click",()=>{const o=t.value.trim();if(!o){this.showError("Please enter Base64 string to decode");return}try{const c=decodeURIComponent(escape(atob(o)));e.value=c,this.showSuccess("Base64 decoded successfully")}catch{this.showError("Invalid Base64 string")}}),d.addEventListener("click",()=>{t.value="",t.focus()}),l.addEventListener("click",()=>{e.value=""}),u.addEventListener("click",async()=>{if(!e.value){this.showError("No output to copy");return}try{await navigator.clipboard.writeText(e.value),this.showSuccess("Copied to clipboard")}catch{this.showError("Failed to copy to clipboard")}}),h.addEventListener("click",async()=>{try{const o=await navigator.clipboard.readText();t.value=o,this.showSuccess("Pasted from clipboard")}catch{this.showError("Failed to paste from clipboard")}}),t.addEventListener("input",()=>{const o=t.value.trim();o&&this.updateButtonSuggestions(o)})}updateButtonSuggestions(t){const e=this.container.querySelector("#encode-btn"),i=this.container.querySelector("#decode-btn");/^[A-Za-z0-9+/]*={0,2}$/.test(t)&&t.length%4===0&&t.length>4?(i.classList.add("btn-suggested"),e.classList.remove("btn-suggested")):(e.classList.add("btn-suggested"),i.classList.remove("btn-suggested"))}showSuccess(t){this.showNotification(t,"success")}showError(t){this.showNotification(t,"error")}showNotification(t,e){const i=this.container.querySelector(".notification");i&&i.remove();const n=document.createElement("div");n.className=`notification notification-${e}`,n.innerHTML=`
      <div class="notification-content">
        <span class="notification-icon">
          ${e==="success"?s("check"):s("alert")}
        </span>
        <span class="notification-message">${t}</span>
      </div>
    `,this.container.insertBefore(n,this.container.firstChild),setTimeout(()=>{n.parentNode&&n.remove()},3e3)}destroy(){}}export{f as Base64Tool};
