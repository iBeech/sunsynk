import{_ as e,c as s,o as n,Q as a}from"./chunks/framework.24343ae2.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"reference/definitions.md","lastUpdated":1679258214000}'),t={name:"reference/definitions.md"},o=a(`<h2 id="sensor-definitions" tabindex="-1">Sensor definitions <a class="header-anchor" href="#sensor-definitions" aria-label="Permalink to &quot;Sensor definitions&quot;">​</a></h2><p>The sensor definition includes the modbus register number (or several registers), the name of the sensor, the unit and other optional parameters. For example:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">Sensor(183, &quot;Battery voltage&quot;, VOLT, 0.01),</span></span>
<span class="line"><span style="color:#A6ACCD;">Sensor(184, &quot;Battery SOC&quot;, &quot;%&quot;),</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>The last parameter in the battery sensor definition is a factor, in this case a value of 1 in the register represents 0.01V. When the factor is negative for normal sensors it indicates that the number in the register is Signed</p><p>When you add the <em>Battery voltage</em> sensor to your configuration you can use any of the following formats</p><div class="language-yaml"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">battery_voltage</span></span>
<span class="line"><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Battery Voltage</span></span>
<span class="line"><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">BATTERY_voltage</span></span>
<span class="line"></span></code></pre></div><p>In the logs you will typically see the first format (no space and all lower case)</p><h2 id="single-phase-inverter-sensor-definitions" tabindex="-1">Single Phase Inverter Sensor Definitions <a class="header-anchor" href="#single-phase-inverter-sensor-definitions" aria-label="Permalink to &quot;Single Phase Inverter Sensor Definitions&quot;">​</a></h2><p>These definitions apply to the single phase inverters. In the Home Assistant addon these are selected with the following configuration:</p><div class="language-yaml"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F07178;">SENSOR_DEFINITIONS</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">single-phase</span></span>
<span class="line"></span></code></pre></div><p>These definitions can be view online at <a href="https://github.com/kellerza/sunsynk/blob/main/sunsynk/definitions.py" target="_blank" rel="noreferrer">https://github.com/kellerza/sunsynk/blob/main/sunsynk/definitions.py</a></p><h2 id="three-phase-inverter-sensor-definitions" tabindex="-1">Three Phase Inverter Sensor Definitions <a class="header-anchor" href="#three-phase-inverter-sensor-definitions" aria-label="Permalink to &quot;Three Phase Inverter Sensor Definitions&quot;">​</a></h2><p>These definitions apply to the three phase inverters. In the Home Assistant addon these are selected with the following configuration:</p><div class="language-yaml"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F07178;">SENSOR_DEFINITIONS</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">three-phase</span></span>
<span class="line"></span></code></pre></div><p>These definitions can be view online at <a href="https://github.com/kellerza/sunsynk/blob/main/sunsynk/definitions3ph.py" target="_blank" rel="noreferrer">https://github.com/kellerza/sunsynk/blob/main/sunsynk/definitions3ph.py</a></p>`,15),i=[o];function l(r,p,c,h,d,y){return n(),s("div",null,i)}const g=e(t,[["render",l]]);export{u as __pageData,g as default};
