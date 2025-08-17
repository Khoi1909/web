var h=Object.defineProperty;var b=(d,t,e)=>t in d?h(d,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):d[t]=e;var p=(d,t,e)=>b(d,typeof t!="symbol"?t+"":t,e);import{g as c}from"./utils-DAAOA82y.js";class T{constructor(t){p(this,"container");p(this,"updateInterval",null);this.container=t,this.render(),this.attachEventListeners(),this.startLiveClock()}render(){this.container.innerHTML=`
      <div class="tool-container">
        <div class="tool-header">
          <div class="tool-icon">${c("timestamp")}</div>
          <div class="tool-title">
            <h2>Timestamp Converter</h2>
            <p>Convert between Unix timestamps, ISO dates, and human-readable formats</p>
          </div>
        </div>

        <div class="tool-content">
          <div class="current-time-section">
            <div class="section-header">
              <h3>Current Time</h3>
              <div class="tool-actions">
                <button id="refresh-time" class="btn btn-secondary">
                  ${c("generation")} Refresh
                </button>
              </div>
            </div>
            <div class="current-time-display">
              <div class="time-card">
                <div class="time-label">Unix Timestamp</div>
                <div class="time-value" id="current-unix">0</div>
                <button class="copy-time-btn" data-value="current-unix" title="Copy Unix timestamp">
                  ${c("copy")}
                </button>
              </div>
              <div class="time-card">
                <div class="time-label">ISO 8601</div>
                <div class="time-value" id="current-iso">-</div>
                <button class="copy-time-btn" data-value="current-iso" title="Copy ISO date">
                  ${c("copy")}
                </button>
              </div>
              <div class="time-card">
                <div class="time-label">Local Time</div>
                <div class="time-value" id="current-local">-</div>
                <button class="copy-time-btn" data-value="current-local" title="Copy local time">
                  ${c("copy")}
                </button>
              </div>
              <div class="time-card">
                <div class="time-label">UTC Time</div>
                <div class="time-value" id="current-utc">-</div>
                <button class="copy-time-btn" data-value="current-utc" title="Copy UTC time">
                  ${c("copy")}
                </button>
              </div>
            </div>
          </div>

          <div class="converter-section">
            <div class="section-header">
              <h3>Convert Timestamp</h3>
            </div>
            
            <div class="converter-tabs">
              <div class="tab-buttons">
                <button class="tab-btn active" data-tab="to-human">To Human Readable</button>
                <button class="tab-btn" data-tab="to-timestamp">To Timestamp</button>
                <button class="tab-btn" data-tab="batch-convert">Batch Convert</button>
              </div>

              <div class="tab-content">
                <div id="to-human-tab" class="tab-panel active">
                  <div class="input-section">
                    <label for="timestamp-input">Enter Unix Timestamp:</label>
                    <div class="input-group">
                      <input 
                        type="text" 
                        id="timestamp-input" 
                        placeholder="1234567890"
                        class="tool-input"
                      />
                      <select id="timestamp-unit" class="tool-input">
                        <option value="seconds">Seconds</option>
                        <option value="milliseconds">Milliseconds</option>
                        <option value="microseconds">Microseconds</option>
                      </select>
                      <button id="convert-to-human" class="btn btn-primary">Convert</button>
                    </div>
                    <div class="quick-actions">
                      <button id="use-current-timestamp" class="btn btn-secondary">Use Current</button>
                      <button id="paste-timestamp" class="btn btn-secondary">Paste</button>
                    </div>
                  </div>
                  <div class="output-section">
                    <div id="human-readable-output" class="conversion-output">
                      <div class="output-empty">Enter a timestamp to see conversion</div>
                    </div>
                  </div>
                </div>

                <div id="to-timestamp-tab" class="tab-panel">
                  <div class="input-section">
                    <label for="date-input">Enter Date/Time:</label>
                    <div class="date-input-options">
                      <div class="input-method">
                        <label class="radio-label">
                          <input type="radio" name="date-method" value="picker" checked />
                          Date Picker
                        </label>
                        <div class="date-picker-inputs">
                          <input type="datetime-local" id="datetime-picker" class="tool-input" />
                        </div>
                      </div>
                      <div class="input-method">
                        <label class="radio-label">
                          <input type="radio" name="date-method" value="text" />
                          Text Input
                        </label>
                        <div class="text-input-container">
                          <input 
                            type="text" 
                            id="date-text-input" 
                            placeholder="2024-01-01 12:00:00 or ISO format"
                            class="tool-input"
                            disabled
                          />
                          <div class="date-format-hints">
                            <small>Supported formats: ISO 8601, YYYY-MM-DD HH:mm:ss, MM/DD/YYYY, etc.</small>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="timezone-selector">
                      <label for="timezone-select">Timezone:</label>
                      <select id="timezone-select" class="tool-input">
                        <option value="local">Local Time</option>
                        <option value="UTC">UTC</option>
                        <option value="America/New_York">New York (EST/EDT)</option>
                        <option value="America/Los_Angeles">Los Angeles (PST/PDT)</option>
                        <option value="Europe/London">London (GMT/BST)</option>
                        <option value="Europe/Paris">Paris (CET/CEST)</option>
                        <option value="Asia/Tokyo">Tokyo (JST)</option>
                        <option value="Asia/Shanghai">Shanghai (CST)</option>
                        <option value="Australia/Sydney">Sydney (AEST/AEDT)</option>
                      </select>
                    </div>
                    <div class="convert-actions">
                      <button id="convert-to-timestamp" class="btn btn-primary">Convert to Timestamp</button>
                      <button id="use-current-time" class="btn btn-secondary">Use Current Time</button>
                    </div>
                  </div>
                  <div class="output-section">
                    <div id="timestamp-output" class="conversion-output">
                      <div class="output-empty">Select a date/time to see timestamp</div>
                    </div>
                  </div>
                </div>

                <div id="batch-convert-tab" class="tab-panel">
                  <div class="batch-input-section">
                    <label for="batch-input">Enter multiple timestamps (one per line):</label>
                    <textarea 
                      id="batch-input" 
                      placeholder="1234567890&#10;1640995200&#10;1672531200"
                      class="tool-textarea"
                      rows="6"
                    ></textarea>
                    <div class="batch-options">
                      <select id="batch-unit" class="tool-input">
                        <option value="seconds">Seconds</option>
                        <option value="milliseconds">Milliseconds</option>
                      </select>
                      <button id="batch-convert" class="btn btn-primary">Convert All</button>
                      <button id="clear-batch" class="btn btn-secondary">Clear</button>
                    </div>
                  </div>
                  <div class="batch-output-section">
                    <div class="section-header">
                      <h4>Batch Results</h4>
                      <div class="tool-actions">
                        <button id="copy-batch-results" class="btn btn-secondary">
                          ${c("copy")} Copy Results
                        </button>
                        <button id="export-batch-csv" class="btn btn-secondary">
                          Export CSV
                        </button>
                      </div>
                    </div>
                    <div id="batch-results" class="batch-results">
                      <div class="output-empty">Enter timestamps to see batch conversion</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="time-utilities-section">
            <div class="section-header">
              <h3>Time Utilities</h3>
            </div>
            
            <div class="utilities-grid">
              <div class="utility-card">
                <h4>Time Difference Calculator</h4>
                <div class="time-diff-inputs">
                  <div class="input-group">
                    <label>Start Time:</label>
                    <input type="datetime-local" id="start-time" class="tool-input" />
                  </div>
                  <div class="input-group">
                    <label>End Time:</label>
                    <input type="datetime-local" id="end-time" class="tool-input" />
                  </div>
                  <button id="calculate-diff" class="btn btn-primary">Calculate Difference</button>
                </div>
                <div id="time-diff-result" class="utility-result"></div>
              </div>

              <div class="utility-card">
                <h4>Add/Subtract Time</h4>
                <div class="time-math-inputs">
                  <div class="input-group">
                    <label>Base Time:</label>
                    <input type="datetime-local" id="base-time" class="tool-input" />
                  </div>
                  <div class="input-group">
                    <label>Operation:</label>
                    <select id="time-operation" class="tool-input">
                      <option value="add">Add</option>
                      <option value="subtract">Subtract</option>
                    </select>
                  </div>
                  <div class="input-group">
                    <label>Amount:</label>
                    <input type="number" id="time-amount" class="tool-input" placeholder="0" />
                    <select id="time-unit" class="tool-input">
                      <option value="seconds">Seconds</option>
                      <option value="minutes">Minutes</option>
                      <option value="hours">Hours</option>
                      <option value="days">Days</option>
                      <option value="weeks">Weeks</option>
                      <option value="months">Months</option>
                      <option value="years">Years</option>
                    </select>
                  </div>
                  <button id="calculate-time-math" class="btn btn-primary">Calculate</button>
                </div>
                <div id="time-math-result" class="utility-result"></div>
              </div>
            </div>
          </div>

          <div class="timezone-converter-section">
            <div class="section-header">
              <h3>Timezone Converter</h3>
            </div>
            <div class="timezone-converter">
              <div class="timezone-input">
                <label>Input Time & Timezone:</label>
                <div class="input-group">
                  <input type="datetime-local" id="tz-input-time" class="tool-input" />
                  <select id="tz-input-zone" class="tool-input">
                    <option value="local">Local Time</option>
                    <option value="UTC">UTC</option>
                    <option value="America/New_York">New York</option>
                    <option value="America/Los_Angeles">Los Angeles</option>
                    <option value="Europe/London">London</option>
                    <option value="Europe/Paris">Paris</option>
                    <option value="Asia/Tokyo">Tokyo</option>
                    <option value="Asia/Shanghai">Shanghai</option>
                    <option value="Australia/Sydney">Sydney</option>
                  </select>
                </div>
              </div>
              <div class="timezone-outputs" id="timezone-outputs">
                <div class="output-empty">Select a time to see timezone conversions</div>
              </div>
            </div>
          </div>

          <div class="tool-info">
            <div class="info-item">
              <strong>Unix Timestamp:</strong>
              <p>Number of seconds since January 1, 1970 00:00:00 UTC (Unix Epoch).</p>
            </div>
            <div class="info-item">
              <strong>ISO 8601:</strong>
              <p>International standard for date and time representation (YYYY-MM-DDTHH:mm:ss.sssZ).</p>
            </div>
            <div class="info-item">
              <strong>Timezone Support:</strong>
              <p>Supports major timezones with automatic DST handling where applicable.</p>
            </div>
          </div>
        </div>
      </div>
    `}attachEventListeners(){this.container.querySelectorAll(".tab-btn").forEach(t=>{t.addEventListener("click",e=>{const s=e.target.getAttribute("data-tab");this.switchTab(s)})}),this.container.querySelector("#refresh-time")?.addEventListener("click",()=>{this.updateCurrentTime()}),this.container.querySelectorAll(".copy-time-btn").forEach(t=>{t.addEventListener("click",e=>{const s=e.target.getAttribute("data-value");this.copyCurrentTime(s)})}),this.container.querySelector("#convert-to-human")?.addEventListener("click",()=>{this.convertToHuman()}),this.container.querySelector("#use-current-timestamp")?.addEventListener("click",()=>{const t=Math.floor(Date.now()/1e3);this.container.querySelector("#timestamp-input").value=t.toString(),this.convertToHuman()}),this.container.querySelector("#paste-timestamp")?.addEventListener("click",()=>{this.pasteTimestamp()}),this.container.querySelector("#convert-to-timestamp")?.addEventListener("click",()=>{this.convertToTimestamp()}),this.container.querySelector("#use-current-time")?.addEventListener("click",()=>{this.setCurrentDateTime()}),this.container.querySelectorAll('input[name="date-method"]').forEach(t=>{t.addEventListener("change",e=>{this.switchDateInputMethod(e.target.value)})}),this.container.querySelector("#batch-convert")?.addEventListener("click",()=>{this.batchConvert()}),this.container.querySelector("#clear-batch")?.addEventListener("click",()=>{this.clearBatch()}),this.container.querySelector("#copy-batch-results")?.addEventListener("click",()=>{this.copyBatchResults()}),this.container.querySelector("#export-batch-csv")?.addEventListener("click",()=>{this.exportBatchCsv()}),this.container.querySelector("#calculate-diff")?.addEventListener("click",()=>{this.calculateTimeDifference()}),this.container.querySelector("#calculate-time-math")?.addEventListener("click",()=>{this.calculateTimeMath()}),this.container.querySelector("#tz-input-time")?.addEventListener("change",()=>{this.updateTimezoneConversions()}),this.container.querySelector("#tz-input-zone")?.addEventListener("change",()=>{this.updateTimezoneConversions()}),this.container.querySelector("#timestamp-input")?.addEventListener("input",()=>{this.convertToHuman()}),this.updateCurrentTime()}startLiveClock(){this.updateInterval=window.setInterval(()=>{this.updateCurrentTime()},1e3)}updateCurrentTime(){const t=new Date,e=Math.floor(t.getTime()/1e3),s=t.toISOString(),i=t.toLocaleString(),a=t.toUTCString();this.container.querySelector("#current-unix").textContent=e.toString(),this.container.querySelector("#current-iso").textContent=s,this.container.querySelector("#current-local").textContent=i,this.container.querySelector("#current-utc").textContent=a}switchTab(t){this.container.querySelectorAll(".tab-btn").forEach(e=>{e.classList.remove("active")}),this.container.querySelector(`[data-tab="${t}"]`)?.classList.add("active"),this.container.querySelectorAll(".tab-panel").forEach(e=>{e.classList.remove("active")}),this.container.querySelector(`#${t}-tab`)?.classList.add("active")}convertToHuman(){const t=this.container.querySelector("#timestamp-input"),e=this.container.querySelector("#timestamp-unit").value,s=this.container.querySelector("#human-readable-output"),i=t.value.trim();if(!i){s.innerHTML='<div class="output-empty">Enter a timestamp to see conversion</div>';return}try{let a=parseFloat(i);switch(e){case"seconds":a*=1e3;break;case"milliseconds":break;case"microseconds":a/=1e3;break}const o=new Date(a);if(isNaN(o.getTime()))throw new Error("Invalid timestamp");const n=this.formatTimestampResult(o);this.displayHumanReadableResult(n)}catch(a){s.innerHTML=`<div class="output-error">Error: ${a.message}</div>`}}formatTimestampResult(t){const e=Math.floor(t.getTime()/1e3),s=t.toISOString(),i=t.toUTCString(),a=t.toLocaleString(),o=this.getRelativeTime(t);return{unix:e,iso:s,utc:i,local:a,relative:o}}displayHumanReadableResult(t){const e=this.container.querySelector("#human-readable-output");e.innerHTML=`
      <div class="conversion-result">
        <div class="result-item">
          <div class="result-label">Unix Timestamp:</div>
          <div class="result-value">${t.unix}</div>
          <button class="copy-result-btn" data-value="${t.unix}" title="Copy">
            ${c("copy")}
          </button>
        </div>
        <div class="result-item">
          <div class="result-label">ISO 8601:</div>
          <div class="result-value">${t.iso}</div>
          <button class="copy-result-btn" data-value="${t.iso}" title="Copy">
            ${c("copy")}
          </button>
        </div>
        <div class="result-item">
          <div class="result-label">Local Time:</div>
          <div class="result-value">${t.local}</div>
          <button class="copy-result-btn" data-value="${t.local}" title="Copy">
            ${c("copy")}
          </button>
        </div>
        <div class="result-item">
          <div class="result-label">UTC Time:</div>
          <div class="result-value">${t.utc}</div>
          <button class="copy-result-btn" data-value="${t.utc}" title="Copy">
            ${c("copy")}
          </button>
        </div>
        <div class="result-item">
          <div class="result-label">Relative Time:</div>
          <div class="result-value">${t.relative}</div>
        </div>
      </div>
    `,e.querySelectorAll(".copy-result-btn").forEach(s=>{s.addEventListener("click",i=>{const a=i.target.getAttribute("data-value");this.copyToClipboard(a)})})}convertToTimestamp(){const t=this.container.querySelector('input[name="date-method"]:checked').value,e=this.container.querySelector("#timezone-select").value,s=this.container.querySelector("#timestamp-output");try{let i;if(t==="picker"){const o=this.container.querySelector("#datetime-picker").value;if(!o){s.innerHTML='<div class="output-empty">Select a date/time to see timestamp</div>';return}i=new Date(o)}else{const o=this.container.querySelector("#date-text-input").value.trim();if(!o){s.innerHTML='<div class="output-empty">Enter a date/time to see timestamp</div>';return}i=new Date(o)}if(isNaN(i.getTime()))throw new Error("Invalid date/time format");e!=="local"&&e!=="UTC"&&console.warn("Advanced timezone conversion not implemented in this demo");const a=this.formatTimestampResult(i);this.displayTimestampResult(a)}catch(i){s.innerHTML=`<div class="output-error">Error: ${i.message}</div>`}}displayTimestampResult(t){const e=this.container.querySelector("#timestamp-output");e.innerHTML=`
      <div class="conversion-result">
        <div class="result-item featured">
          <div class="result-label">Unix Timestamp (seconds):</div>
          <div class="result-value timestamp-value">${t.unix}</div>
          <button class="copy-result-btn" data-value="${t.unix}" title="Copy">
            ${c("copy")}
          </button>
        </div>
        <div class="result-item">
          <div class="result-label">Milliseconds:</div>
          <div class="result-value">${t.unix*1e3}</div>
          <button class="copy-result-btn" data-value="${t.unix*1e3}" title="Copy">
            ${c("copy")}
          </button>
        </div>
        <div class="result-item">
          <div class="result-label">ISO 8601:</div>
          <div class="result-value">${t.iso}</div>
          <button class="copy-result-btn" data-value="${t.iso}" title="Copy">
            ${c("copy")}
          </button>
        </div>
      </div>
    `,e.querySelectorAll(".copy-result-btn").forEach(s=>{s.addEventListener("click",i=>{const a=i.target.getAttribute("data-value");this.copyToClipboard(a)})})}switchDateInputMethod(t){const e=this.container.querySelector("#datetime-picker"),s=this.container.querySelector("#date-text-input");t==="picker"?(e.disabled=!1,s.disabled=!0):(e.disabled=!0,s.disabled=!1)}setCurrentDateTime(){const t=new Date,e=new Date(t.getTime()-t.getTimezoneOffset()*6e4).toISOString().slice(0,16);this.container.querySelector("#datetime-picker").value=e,this.convertToTimestamp()}batchConvert(){const t=this.container.querySelector("#batch-input"),e=this.container.querySelector("#batch-unit").value,s=this.container.querySelector("#batch-results"),i=t.value.trim().split(`
`).filter(o=>o.trim());if(i.length===0){s.innerHTML='<div class="output-empty">Enter timestamps to see batch conversion</div>';return}const a=[];i.forEach(o=>{try{let n=parseFloat(o.trim());e==="seconds"&&(n*=1e3);const r=new Date(n);if(isNaN(r.getTime()))throw new Error("Invalid timestamp");a.push({input:o.trim(),result:this.formatTimestampResult(r)})}catch(n){a.push({input:o.trim(),error:n.message})}}),this.displayBatchResults(a)}displayBatchResults(t){const e=this.container.querySelector("#batch-results"),s=`
      <table class="batch-results-table">
        <thead>
          <tr>
            <th>Input</th>
            <th>Local Time</th>
            <th>ISO 8601</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          ${t.map(i=>i.error?`
                <tr class="error-row">
                  <td>${i.input}</td>
                  <td colspan="2">Error: ${i.error}</td>
                  <td><span class="status-error">Failed</span></td>
                </tr>
              `:i.result?`
                <tr>
                  <td>${i.input}</td>
                  <td>${i.result.local}</td>
                  <td>${i.result.iso}</td>
                  <td><span class="status-success">Success</span></td>
                </tr>
              `:"").join("")}
        </tbody>
      </table>
    `;e.innerHTML=s}calculateTimeDifference(){const t=this.container.querySelector("#start-time").value,e=this.container.querySelector("#end-time").value,s=this.container.querySelector("#time-diff-result");if(!t||!e){s.innerHTML='<div class="utility-empty">Select both start and end times</div>';return}const i=new Date(t),a=new Date(e),o=Math.abs(a.getTime()-i.getTime()),n=Math.floor(o/1e3),r=Math.floor(n/60),l=Math.floor(r/60),u=Math.floor(l/24);s.innerHTML=`
      <div class="time-diff-display">
        <div class="diff-item"><strong>${o}</strong> milliseconds</div>
        <div class="diff-item"><strong>${n}</strong> seconds</div>
        <div class="diff-item"><strong>${r}</strong> minutes</div>
        <div class="diff-item"><strong>${l}</strong> hours</div>
        <div class="diff-item"><strong>${u}</strong> days</div>
        <div class="diff-formatted">
          <strong>Formatted:</strong> ${u}d ${l%24}h ${r%60}m ${n%60}s
        </div>
      </div>
    `}calculateTimeMath(){const t=this.container.querySelector("#base-time").value,e=this.container.querySelector("#time-operation").value,s=parseInt(this.container.querySelector("#time-amount").value)||0,i=this.container.querySelector("#time-unit").value,a=this.container.querySelector("#time-math-result");if(!t){a.innerHTML='<div class="utility-empty">Select a base time</div>';return}const o=new Date(t);let n=1;switch(i){case"seconds":n=1e3;break;case"minutes":n=60*1e3;break;case"hours":n=3600*1e3;break;case"days":n=1440*60*1e3;break;case"weeks":n=10080*60*1e3;break;case"months":n=720*60*60*1e3;break;case"years":n=365*24*60*60*1e3;break}const r=s*n*(e==="add"?1:-1),l=new Date(o.getTime()+r);a.innerHTML=`
      <div class="time-math-display">
        <div class="math-result">
          <strong>Result:</strong> ${l.toLocaleString()}
        </div>
        <div class="math-details">
          <div><strong>ISO:</strong> ${l.toISOString()}</div>
          <div><strong>Unix:</strong> ${Math.floor(l.getTime()/1e3)}</div>
        </div>
      </div>
    `}updateTimezoneConversions(){const t=this.container.querySelector("#tz-input-time").value;this.container.querySelector("#tz-input-zone").value;const e=this.container.querySelector("#timezone-outputs");if(!t){e.innerHTML='<div class="output-empty">Select a time to see timezone conversions</div>';return}const s=new Date(t),a=[{name:"UTC",value:"UTC"},{name:"New York",value:"America/New_York"},{name:"Los Angeles",value:"America/Los_Angeles"},{name:"London",value:"Europe/London"},{name:"Paris",value:"Europe/Paris"},{name:"Tokyo",value:"Asia/Tokyo"},{name:"Shanghai",value:"Asia/Shanghai"},{name:"Sydney",value:"Australia/Sydney"}].map(o=>{try{const n=new Intl.DateTimeFormat("en-US",{timeZone:o.value,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1}).format(s);return{name:o.name,time:n,zone:o.value}}catch{return{name:o.name,time:"Not supported",zone:o.value}}});e.innerHTML=`
      <div class="timezone-conversions">
        ${a.map(o=>`
          <div class="timezone-item">
            <div class="timezone-name">${o.name}</div>
            <div class="timezone-time">${o.time}</div>
          </div>
        `).join("")}
      </div>
    `}getRelativeTime(t){const s=new Date().getTime()-t.getTime(),i=Math.abs(s),a=Math.floor(i/1e3),o=Math.floor(a/60),n=Math.floor(o/60),r=Math.floor(n/24),l=Math.floor(r/30),u=Math.floor(r/365),v=s>0?"":"in ",m=s>0?" ago":"";return u>0?`${v}${u} year${u!==1?"s":""}${m}`:l>0?`${v}${l} month${l!==1?"s":""}${m}`:r>0?`${v}${r} day${r!==1?"s":""}${m}`:n>0?`${v}${n} hour${n!==1?"s":""}${m}`:o>0?`${v}${o} minute${o!==1?"s":""}${m}`:a>30?`${v}${a} second${a!==1?"s":""}${m}`:"just now"}async copyCurrentTime(t){const s=this.container.querySelector(`#${t}`).textContent||"";try{await navigator.clipboard.writeText(s),this.showNotification("Time copied to clipboard","success")}catch{this.showNotification("Failed to copy time","error")}}async copyToClipboard(t){try{await navigator.clipboard.writeText(t),this.showNotification("Value copied to clipboard","success")}catch{this.showNotification("Failed to copy value","error")}}async pasteTimestamp(){try{const t=await navigator.clipboard.readText();this.container.querySelector("#timestamp-input").value=t.trim(),this.convertToHuman(),this.showNotification("Timestamp pasted","success")}catch{this.showNotification("Failed to paste timestamp","error")}}clearBatch(){this.container.querySelector("#batch-input").value="",this.container.querySelector("#batch-results").innerHTML='<div class="output-empty">Enter timestamps to see batch conversion</div>',this.showNotification("Batch input cleared","success")}async copyBatchResults(){const t=this.container.querySelector(".batch-results-table");if(!t){this.showNotification("No batch results to copy","error");return}const s=Array.from(t.querySelectorAll("tbody tr")).map(i=>Array.from(i.querySelectorAll("td")).map(o=>o.textContent?.trim()).join("	")).join(`
`);try{await navigator.clipboard.writeText(s),this.showNotification("Batch results copied to clipboard","success")}catch{this.showNotification("Failed to copy batch results","error")}}exportBatchCsv(){const t=this.container.querySelector(".batch-results-table");if(!t){this.showNotification("No batch results to export","error");return}const e=Array.from(t.querySelectorAll("thead th")).map(r=>r.textContent?.trim()).join(","),s=Array.from(t.querySelectorAll("tbody tr")).map(r=>Array.from(r.querySelectorAll("td")).map(u=>`"${(u.textContent?.trim()||"").replace(/"/g,'""')}"`).join(",")),i=[e,...s].join(`
`),a=new Blob([i],{type:"text/csv"}),o=URL.createObjectURL(a),n=document.createElement("a");n.href=o,n.download="timestamp_conversions.csv",document.body.appendChild(n),n.click(),document.body.removeChild(n),URL.revokeObjectURL(o),this.showNotification("CSV file exported","success")}showNotification(t,e){const s=this.container.querySelector(".notification");s&&s.remove();const i=document.createElement("div");i.className=`notification notification-${e}`,i.innerHTML=`
      <div class="notification-content">
        <span class="notification-icon">
          ${e==="success"?c("check"):c("alert")}
        </span>
        <span class="notification-message">${t}</span>
      </div>
    `,this.container.insertBefore(i,this.container.firstChild),setTimeout(()=>{i.parentNode&&i.remove()},3e3)}destroy(){this.updateInterval&&clearInterval(this.updateInterval)}}export{T as TimestampTool};
