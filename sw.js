var V="site-mwdpu7dp";
self.addEventListener('install',function(e){e.waitUntil(caches.open(V).then(function(c){return c.addAll(['./','index.html']).catch(function(){})}));self.skipWaiting()});
self.addEventListener('activate',function(e){e.waitUntil(caches.keys().then(function(k){return Promise.all(k.filter(function(x){return x!==V}).map(function(x){return caches.delete(x)}))}).then(function(){return self.clients.claim()}))});
self.addEventListener('fetch',function(e){var r=e.request;if(r.method!=='GET')return;var u=new URL(r.url);if(u.origin!==location.origin||/painel\.html$/.test(u.pathname))return;
if(r.mode==='navigate'){e.respondWith(fetch(r).then(function(res){var copy=res.clone();caches.open(V).then(function(c){c.put(r,copy)});return res}).catch(function(){return caches.match(r).then(function(m){return m||caches.match('index.html')})}));return}
e.respondWith(caches.match(r).then(function(m){return m||fetch(r).then(function(res){if(res.ok){var copy=res.clone();caches.open(V).then(function(c){c.put(r,copy)})}return res})}))});
