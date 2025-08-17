var f=Object.defineProperty;var S=(h,e,t)=>e in h?f(h,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):h[e]=t;var m=(h,e,t)=>S(h,typeof e!="symbol"?e+"":e,t);import{g as d}from"./utils-DAAOA82y.js";class w{constructor(e){m(this,"container");this.container=e,this.render(),this.attachEventListeners()}render(){this.container.innerHTML=`
      <div class="tool-container">
        <div class="tool-header">
          <div class="tool-icon">${d("csv")}</div>
          <div class="tool-title">
            <h2>CSV ↔ JSON Converter</h2>
            <p>Convert between CSV and JSON formats with customizable options</p>
          </div>
        </div>

        <div class="tool-content">
          <div class="converter-layout">
            <div class="converter-panel">
              <div class="panel-header">
                <span>CSV Input</span>
                <div class="panel-actions">
                  <button id="load-csv-file" class="btn-icon" title="Load CSV file">
                    ${d("clipboard")}
                  </button>
                  <button id="paste-csv" class="btn-icon" title="Paste CSV">
                    ${d("clipboard")}
                  </button>
                  <button id="clear-csv" class="btn-icon" title="Clear CSV">
                    ${d("trash")}
                  </button>
                </div>
              </div>
              <textarea 
                id="csv-input" 
                class="converter-input"
                placeholder="Paste CSV data here or load a file...&#10;&#10;Example:&#10;name,age,city&#10;John,25,New York&#10;Jane,30,London"
              ></textarea>
              <div class="input-validation" id="csv-validation"></div>
            </div>

            <div class="converter-arrows">
              <button id="csv-to-json" class="arrow-button" title="Convert CSV to JSON">
                ${d("chevronRight")}
              </button>
              <button id="json-to-csv" class="arrow-button" title="Convert JSON to CSV">
                ${d("chevronLeft")}
              </button>
            </div>

            <div class="converter-panel">
              <div class="panel-header">
                <span>JSON Output</span>
                <div class="panel-actions">
                  <button id="format-json" class="btn-icon" title="Format JSON">
                    ${d("code")}
                  </button>
                  <button id="minify-json" class="btn-icon" title="Minify JSON">
                    ${d("string")}
                  </button>
                  <button id="copy-json" class="btn-icon" title="Copy JSON">
                    ${d("copy")}
                  </button>
                  <button id="save-json" class="btn-icon" title="Save JSON file">
                    ${d("clipboard")}
                  </button>
                </div>
              </div>
              <textarea 
                id="json-output" 
                class="converter-output"
                placeholder="JSON output will appear here..."
                readonly
              ></textarea>
              <div class="output-validation" id="json-validation"></div>
            </div>
          </div>

          <div class="converter-options">
            <div class="section-header">
              <h3>Conversion Options</h3>
            </div>
            
            <div class="options-grid">
              <div class="option-group">
                <h4>CSV Options</h4>
                <div class="option-controls">
                  <div class="option-item">
                    <label for="csv-delimiter">Delimiter:</label>
                    <select id="csv-delimiter" class="tool-input">
                      <option value=",">Comma (,)</option>
                      <option value=";">Semicolon (;)</option>
                      <option value="	">Tab (\\t)</option>
                      <option value="|">Pipe (|)</option>
                      <option value="custom">Custom</option>
                    </select>
                    <input 
                      type="text" 
                      id="custom-delimiter" 
                      placeholder="Enter delimiter"
                      class="tool-input"
                      style="display: none; width: 100px;"
                      maxlength="5"
                    />
                  </div>
                  
                  <div class="option-item">
                    <label for="quote-char">Quote Character:</label>
                    <select id="quote-char" class="tool-input">
                      <option value='"'>Double Quote (")</option>
                      <option value="'">Single Quote (')</option>
                      <option value="">None</option>
                    </select>
                  </div>
                  
                  <div class="option-item">
                    <label class="checkbox-label">
                      <input type="checkbox" id="has-headers" checked />
                      First row contains headers
                    </label>
                  </div>
                  
                  <div class="option-item">
                    <label class="checkbox-label">
                      <input type="checkbox" id="trim-whitespace" checked />
                      Trim whitespace
                    </label>
                  </div>
                </div>
              </div>

              <div class="option-group">
                <h4>JSON Options</h4>
                <div class="option-controls">
                  <div class="option-item">
                    <label for="json-format">Output Format:</label>
                    <select id="json-format" class="tool-input">
                      <option value="array">Array of Objects</option>
                      <option value="object">Object with Arrays</option>
                      <option value="rows">Array of Arrays</option>
                    </select>
                  </div>
                  
                  <div class="option-item">
                    <label for="json-indent">Indentation:</label>
                    <select id="json-indent" class="tool-input">
                      <option value="2">2 spaces</option>
                      <option value="4">4 spaces</option>
                      <option value="	">Tab</option>
                      <option value="0">Minified</option>
                    </select>
                  </div>
                  
                  <div class="option-item">
                    <label class="checkbox-label">
                      <input type="checkbox" id="convert-types" checked />
                      Auto-convert data types
                    </label>
                  </div>
                  
                  <div class="option-item">
                    <label class="checkbox-label">
                      <input type="checkbox" id="sort-keys" />
                      Sort object keys
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="conversion-preview">
            <div class="section-header">
              <h3>Data Preview</h3>
            </div>
            <div class="preview-container">
              <div class="preview-table" id="preview-table">
                <div class="preview-empty">Load CSV data to see preview</div>
              </div>
            </div>
          </div>

          <div class="conversion-stats">
            <div class="section-header">
              <h3>Statistics</h3>
            </div>
            <div class="stats-grid">
              <div class="stat-card">
                <div class="stat-label">Rows</div>
                <div class="stat-value" id="row-count">0</div>
              </div>
              <div class="stat-card">
                <div class="stat-label">Columns</div>
                <div class="stat-value" id="column-count">0</div>
              </div>
              <div class="stat-card">
                <div class="stat-label">CSV Size</div>
                <div class="stat-value" id="csv-size">0 B</div>
              </div>
              <div class="stat-card">
                <div class="stat-label">JSON Size</div>
                <div class="stat-value" id="json-size">0 B</div>
              </div>
            </div>
          </div>

          <div class="sample-data">
            <div class="section-header">
              <h3>Sample Data</h3>
            </div>
            <div class="sample-buttons">
              <button id="load-sample-users" class="btn btn-secondary">Load Users Sample</button>
              <button id="load-sample-products" class="btn btn-secondary">Load Products Sample</button>
              <button id="load-sample-sales" class="btn btn-secondary">Load Sales Sample</button>
            </div>
          </div>

          <input type="file" id="csv-file-input" accept=".csv,.txt" style="display: none;" />

          <div class="tool-info">
            <div class="info-item">
              <strong>CSV Format:</strong>
              <p>Supports various delimiters, quoted fields, and custom escape characters.</p>
            </div>
            <div class="info-item">
              <strong>JSON Formats:</strong>
              <p>Generate different JSON structures: array of objects, object with arrays, or raw arrays.</p>
            </div>
            <div class="info-item">
              <strong>Data Types:</strong>
              <p>Automatically detects and converts numbers, booleans, and null values when enabled.</p>
            </div>
          </div>
        </div>
      </div>
    `}attachEventListeners(){const e=this.container.querySelector("#csv-input");this.container.querySelector("#json-output");const t=this.container.querySelector("#csv-file-input");e.addEventListener("input",()=>{this.updatePreview(),this.updateStats()}),this.container.querySelector("#csv-to-json")?.addEventListener("click",()=>{this.convertCsvToJson()}),this.container.querySelector("#json-to-csv")?.addEventListener("click",()=>{this.convertJsonToCsv()}),this.container.querySelector("#load-csv-file")?.addEventListener("click",()=>{t.click()}),t.addEventListener("change",o=>{this.handleFileLoad(o)}),this.container.querySelector("#paste-csv")?.addEventListener("click",()=>{this.pasteFromClipboard()}),this.container.querySelector("#clear-csv")?.addEventListener("click",()=>{this.clearCsv()}),this.container.querySelector("#copy-json")?.addEventListener("click",()=>{this.copyJson()}),this.container.querySelector("#format-json")?.addEventListener("click",()=>{this.formatJson()}),this.container.querySelector("#minify-json")?.addEventListener("click",()=>{this.minifyJson()}),this.container.querySelector("#save-json")?.addEventListener("click",()=>{this.saveJsonFile()}),this.container.querySelector("#csv-delimiter")?.addEventListener("change",o=>{const s=o.target.value,i=this.container.querySelector("#custom-delimiter");i.style.display=s==="custom"?"inline-block":"none",this.updatePreview()}),this.container.querySelector("#custom-delimiter")?.addEventListener("input",()=>{this.updatePreview()}),this.container.querySelectorAll("#has-headers, #trim-whitespace, #convert-types, #sort-keys").forEach(o=>{o.addEventListener("change",()=>{this.updatePreview()})}),this.container.querySelector("#load-sample-users")?.addEventListener("click",()=>{this.loadSampleData("users")}),this.container.querySelector("#load-sample-products")?.addEventListener("click",()=>{this.loadSampleData("products")}),this.container.querySelector("#load-sample-sales")?.addEventListener("click",()=>{this.loadSampleData("sales")}),this.updatePreview(),this.updateStats()}getCsvOptions(){const e=this.container.querySelector("#csv-delimiter"),t=this.container.querySelector("#custom-delimiter"),o=this.container.querySelector("#quote-char").value,s=this.container.querySelector("#has-headers").checked,i=this.container.querySelector("#trim-whitespace").checked;let n=e.value;return n==="custom"?n=t.value||",":n==="	"&&(n="	"),{delimiter:n,hasHeaders:s,quoteChar:o,escapeChar:"\\",trimWhitespace:i}}parseCsv(e,t){if(!e.trim())return[];const o=e.split(`
`).filter(i=>i.trim()),s=[];for(let i=0;i<o.length;i++){const n=o[i],a=this.parseCsvLine(n,t);a.length>0&&s.push(a)}return s}parseCsvLine(e,t){const o=[];let s="",i=!1,n=0;for(;n<e.length;){const a=e[n],c=e[n+1];a===t.quoteChar&&!i?i=!0:a===t.quoteChar&&i?c===t.quoteChar?(s+=t.quoteChar,n++):i=!1:a===t.delimiter&&!i?(o.push(t.trimWhitespace?s.trim():s),s=""):s+=a,n++}return o.push(t.trimWhitespace?s.trim():s),o}convertCsvToJson(){const e=this.container.querySelector("#csv-input"),t=this.container.querySelector("#json-output"),o=e.value.trim();if(!o){this.showValidation("Please enter CSV data","error","csv-validation");return}try{const s=this.getCsvOptions(),i=this.parseCsv(o,s);if(i.length===0)throw new Error("No valid CSV data found");const n=this.container.querySelector("#json-format").value,a=this.container.querySelector("#convert-types").checked,c=this.container.querySelector("#sort-keys").checked;let r=this.convertToJsonFormat(i,s,n,a);c&&Array.isArray(r)&&r.length>0&&typeof r[0]=="object"&&(r=r.map(v=>this.sortObjectKeys(v)));const l=this.getJsonIndent(),u=JSON.stringify(r,null,l);t.value=u,this.showValidation("CSV converted to JSON successfully","success","csv-validation"),this.updateStats()}catch(s){this.showValidation(`Error: ${s.message}`,"error","csv-validation"),t.value=""}}convertToJsonFormat(e,t,o,s){if(e.length===0)return[];const i=t.hasHeaders?e[0]:e[0].map((a,c)=>`column_${c+1}`),n=t.hasHeaders?e.slice(1):e;switch(o){case"array":return n.map(r=>{const l={};return i.forEach((u,v)=>{const p=r[v]||"";l[u]=s?this.convertValue(p):p}),l});case"object":const a={};return i.forEach((r,l)=>{a[r]=n.map(u=>{const v=u[l]||"";return s?this.convertValue(v):v})}),a;case"rows":const c=(t.hasHeaders,e);return s?c.map(r=>r.map(l=>this.convertValue(l))):c;default:return e}}convertValue(e){if(e==="")return"";if(e.toLowerCase()==="null")return null;if(e.toLowerCase()==="true")return!0;if(e.toLowerCase()==="false")return!1;const t=Number(e);return!isNaN(t)&&e.trim()!==""?t:e}convertJsonToCsv(){const e=this.container.querySelector("#json-output"),t=this.container.querySelector("#csv-input"),o=e.value.trim();if(!o){this.showValidation("Please convert CSV to JSON first or enter JSON data","error","json-validation");return}try{const s=JSON.parse(o),i=this.getCsvOptions(),n=this.convertJsonToCsvString(s,i);t.value=n,this.showValidation("JSON converted to CSV successfully","success","json-validation"),this.updatePreview(),this.updateStats()}catch(s){this.showValidation(`Error: ${s.message}`,"error","json-validation")}}convertJsonToCsvString(e,t){if(!Array.isArray(e)||e.length===0)throw new Error("JSON must be an array of objects");const o=e[0];let s=[],i=[];if(Array.isArray(o))i=e,t.hasHeaders&&(s=o.map((a,c)=>`column_${c+1}`));else if(typeof o=="object"&&o!==null)s=Object.keys(o),i=e.map(a=>s.map(c=>String(a[c]||"")));else throw new Error("Unsupported JSON format for CSV conversion");const n=[];return t.hasHeaders&&s.length>0&&n.push(this.formatCsvLine(s,t)),i.forEach(a=>{n.push(this.formatCsvLine(a,t))}),n.join(`
`)}formatCsvLine(e,t){return e.map(o=>{const s=String(o);if((s.includes(t.delimiter)||s.includes(`
`)||s.includes("\r")||t.quoteChar&&s.includes(t.quoteChar))&&t.quoteChar){const n=s.replace(new RegExp(t.quoteChar,"g"),t.quoteChar+t.quoteChar);return t.quoteChar+n+t.quoteChar}return s}).join(t.delimiter)}updatePreview(){const e=this.container.querySelector("#csv-input"),t=this.container.querySelector("#preview-table"),o=e.value.trim();if(!o){t.innerHTML='<div class="preview-empty">Load CSV data to see preview</div>';return}try{const s=this.getCsvOptions(),i=this.parseCsv(o,s);if(i.length===0){t.innerHTML='<div class="preview-empty">No valid CSV data</div>';return}const n=Math.min(10,i.length),a=s.hasHeaders?i[0]:i[0].map((l,u)=>`Col ${u+1}`),c=s.hasHeaders?i.slice(1,n+1):i.slice(0,n);let r='<table class="preview-table-element"><thead><tr>';a.forEach(l=>{r+=`<th>${this.escapeHtml(l)}</th>`}),r+="</tr></thead><tbody>",c.forEach(l=>{r+="<tr>",a.forEach((u,v)=>{const p=l[v]||"";r+=`<td>${this.escapeHtml(p)}</td>`}),r+="</tr>"}),r+="</tbody></table>",i.length>n&&(r+=`<div class="preview-note">Showing first ${n} rows of ${i.length}</div>`),t.innerHTML=r}catch(s){t.innerHTML=`<div class="preview-error">Error parsing CSV: ${s.message}</div>`}}updateStats(){const e=this.container.querySelector("#csv-input"),t=this.container.querySelector("#json-output"),o=e.value,s=t.value,i=new Blob([o]).size,n=new Blob([s]).size;this.container.querySelector("#csv-size").textContent=this.formatBytes(i),this.container.querySelector("#json-size").textContent=this.formatBytes(n);try{const a=this.getCsvOptions(),c=this.parseCsv(o,a),r=Math.max(0,c.length-(a.hasHeaders?1:0)),l=c.length>0?c[0].length:0;this.container.querySelector("#row-count").textContent=r.toString(),this.container.querySelector("#column-count").textContent=l.toString()}catch{this.container.querySelector("#row-count").textContent="0",this.container.querySelector("#column-count").textContent="0"}}getJsonIndent(){const e=this.container.querySelector("#json-indent").value;return e==="0"?0:e==="	"?"	":parseInt(e,10)}sortObjectKeys(e){if(typeof e!="object"||e===null)return e;const t={};return Object.keys(e).sort().forEach(o=>{t[o]=e[o]}),t}async handleFileLoad(e){const t=e.target.files?.[0];if(t){if(t.size>5*1024*1024){this.showNotification("File too large. Maximum size is 5MB.","error");return}try{const o=await t.text(),s=this.container.querySelector("#csv-input");s.value=o,this.updatePreview(),this.updateStats(),this.showNotification(`File "${t.name}" loaded successfully`,"success")}catch{this.showNotification("Error reading file","error")}}}async pasteFromClipboard(){try{const e=await navigator.clipboard.readText(),t=this.container.querySelector("#csv-input");t.value=e,this.updatePreview(),this.updateStats(),this.showNotification("Text pasted from clipboard","success")}catch{this.showNotification("Failed to paste from clipboard","error")}}clearCsv(){const e=this.container.querySelector("#csv-input"),t=this.container.querySelector("#json-output");e.value="",t.value="",this.updatePreview(),this.updateStats(),this.showNotification("Data cleared","success")}async copyJson(){const t=this.container.querySelector("#json-output").value;if(!t){this.showNotification("No JSON data to copy","error");return}try{await navigator.clipboard.writeText(t),this.showNotification("JSON copied to clipboard","success")}catch{this.showNotification("Failed to copy JSON","error")}}formatJson(){const e=this.container.querySelector("#json-output"),t=e.value;if(!t){this.showNotification("No JSON data to format","error");return}try{const o=JSON.parse(t),s=JSON.stringify(o,null,2);e.value=s,this.showNotification("JSON formatted","success"),this.updateStats()}catch{this.showNotification("Invalid JSON format","error")}}minifyJson(){const e=this.container.querySelector("#json-output"),t=e.value;if(!t){this.showNotification("No JSON data to minify","error");return}try{const o=JSON.parse(t),s=JSON.stringify(o);e.value=s,this.showNotification("JSON minified","success"),this.updateStats()}catch{this.showNotification("Invalid JSON format","error")}}saveJsonFile(){const t=this.container.querySelector("#json-output").value;if(!t){this.showNotification("No JSON data to save","error");return}const o=new Blob([t],{type:"application/json"}),s=URL.createObjectURL(o),i=document.createElement("a");i.href=s,i.download="converted_data.json",document.body.appendChild(i),i.click(),document.body.removeChild(i),URL.revokeObjectURL(s),this.showNotification("JSON file saved","success")}loadSampleData(e){const t=this.container.querySelector("#csv-input");let o="";switch(e){case"users":o=`name,age,email,city,country
John Doe,28,john@example.com,New York,USA
Jane Smith,32,jane@example.com,London,UK
Mike Johnson,25,mike@example.com,Toronto,Canada
Sarah Wilson,29,sarah@example.com,Sydney,Australia
David Brown,35,david@example.com,Berlin,Germany`;break;case"products":o=`id,name,price,category,inStock
1,Laptop,999.99,Electronics,true
2,Coffee Mug,12.50,Kitchen,true
3,Notebook,5.99,Office,false
4,Smartphone,599.00,Electronics,true
5,Desk Chair,149.99,Furniture,true`;break;case"sales":o=`date,product,quantity,revenue,salesperson
2024-01-15,Laptop,2,1999.98,John
2024-01-16,Coffee Mug,5,62.50,Jane
2024-01-17,Smartphone,1,599.00,Mike
2024-01-18,Desk Chair,3,449.97,Sarah
2024-01-19,Notebook,10,59.90,David`;break}t.value=o,this.updatePreview(),this.updateStats(),this.showNotification(`${e} sample data loaded`,"success")}formatBytes(e){if(e===0)return"0 B";const t=1024,o=["B","KB","MB","GB"],s=Math.floor(Math.log(e)/Math.log(t));return parseFloat((e/Math.pow(t,s)).toFixed(2))+" "+o[s]}escapeHtml(e){const t=document.createElement("div");return t.textContent=e,t.innerHTML}showValidation(e,t,o){const s=this.container.querySelector(`#${o}`);s.innerHTML=`
      <div class="validation-message validation-${t}">
        ${t==="success"?d("check"):d("alert")} 
        ${e}
      </div>
    `}showNotification(e,t){const o=this.container.querySelector(".notification");o&&o.remove();const s=document.createElement("div");s.className=`notification notification-${t}`,s.innerHTML=`
      <div class="notification-content">
        <span class="notification-icon">
          ${t==="success"?d("check"):d("alert")}
        </span>
        <span class="notification-message">${e}</span>
      </div>
    `,this.container.insertBefore(s,this.container.firstChild),setTimeout(()=>{s.parentNode&&s.remove()},3e3)}destroy(){}}export{w as CsvJsonTool};
