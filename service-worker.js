!function(){"use strict";const e=["client/Row.37b284b2.js","client/Pagination.46801f81.js","client/DataAttrToggler.893ac2ed.js","client/installation.29f875b7.js","client/button.3048fc7b.js","client/template.d804c3ea.js","client/layout.3fe78196.js","client/html-elements.149ea38e.js","client/spacing.db6e7b6e.js","client/wrapper.79c60986.js","client/index.76539033.js","client/typography.729152e9.js","client/index.61121de5.js","client/color.ca6eae14.js","client/index.bbf5aa55.js","client/float.85158ac3.js","client/index.73115323.js","client/index.34570d45.js","client/client.6b5d45c8.js","client/container.efa7adbd.js","client/misc.2df2c41d.js","client/client.8849145a.js","client/list.264e6e32.js","client/form.dcac2485.js","client/visibility.2500a18f.js","client/config.2a4eecd6.js","client/importation.eee30e27.js","client/column.54bf4300.js"].concat(["service-worker-index.html",".DS_Store","assets/android-chrome-192x192.png","assets/android-chrome-512x512.png","assets/apple-touch-icon.png","assets/browserconfig.xml","assets/favicon-16x16.png","assets/favicon-32x32.png","assets/favicon.ico","assets/mstile-150x150.png","assets/safari-pinned-tab.svg","assets/site.webmanifest","global.css","logo-inverted.svg","logo.svg","orange.jpg"]),t=new Set(e);self.addEventListener("install",t=>{t.waitUntil(caches.open("cache1587394620215").then(t=>t.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const t of e)"cache1587394620215"!==t&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const s=new URL(e.request.url);s.protocol.startsWith("http")&&(s.hostname===self.location.hostname&&s.port!==self.location.port||(s.host===self.location.host&&t.has(s.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1587394620215").then(async t=>{try{const s=await fetch(e.request);return t.put(e.request,s.clone()),s}catch(s){const n=await t.match(e.request);if(n)return n;throw s}}))))})}();
