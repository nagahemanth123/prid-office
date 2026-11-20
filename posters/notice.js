/* "New posters" pop-up for the PRID back office. Include with
   <script src="[../]posters/notice.js" data-base="[../]" defer></script>
   Desktop: a card in the bottom-right corner. Phone: a highlighted bottom sheet over a dimmed page.
   Shows once per browser until closed or opened; bump KEY for the next batch. */
(function () {
  var KEY = 'prid-notice-posters-ny2027';
  try { if (localStorage.getItem(KEY)) return; } catch (e) {}
  var me = document.currentScript;
  var base = (me && me.getAttribute('data-base')) || '';
  if (/\/posters\/(index\.html)?$/.test(location.pathname)) return;

  var css = '' +
    '.prid-sc{position:fixed;inset:0;z-index:9998;background:rgba(23,23,26,.5);opacity:0;transition:opacity .25s ease;display:none}' +
    '.prid-nt{position:fixed;z-index:9999;right:20px;bottom:20px;width:380px;max-width:calc(100vw - 32px);background:#fff;color:#17171A;' +
    'border:1px solid #E1E4E4;border-top:4px solid #0A6B4A;border-radius:12px;box-shadow:0 12px 32px rgba(23,23,26,.18),0 2px 6px rgba(23,23,26,.08);' +
    'font:400 15px/1.45 "Geist",system-ui,-apple-system,"Segoe UI",sans-serif;padding:16px 16px 18px;' +
    'opacity:0;transform:translateY(14px);transition:opacity .25s ease,transform .3s cubic-bezier(.2,.7,.3,1)}' +
    '.prid-nt.on,.prid-sc.on{opacity:1}.prid-nt.on{transform:none}' +
    '.prid-nt .pics{display:flex;gap:8px;float:left;margin-right:14px}' +
    '.prid-nt .pics img{display:block;width:58px;height:78px;object-fit:cover;border-radius:6px;background:#F4F5F5;box-shadow:0 1px 3px rgba(23,23,26,.18)}' +
    '.prid-nt .pics img+img{display:none}' +
    '.prid-nt .t{display:inline-flex;align-items:center;gap:6px;background:#E2F2EA;color:#07573C;font-size:12px;font-weight:600;padding:3px 9px;border-radius:999px}' +
    '.prid-nt .t i{width:7px;height:7px;border-radius:50%;background:#0A6B4A;animation:pridp 1.6s ease-in-out infinite}' +
    '@keyframes pridp{50%{opacity:.25}}' +
    '.prid-nt .tx{overflow:hidden}' +
    '.prid-nt b{display:block;font-size:17px;font-weight:600;letter-spacing:-.01em;margin-top:7px;padding-right:30px;line-height:1.3}' +
    '.prid-nt p{margin:3px 0 0;color:#44444A}' +
    '.prid-nt a.prid-go{display:inline-flex;align-items:center;justify-content:center;gap:8px;min-height:44px;margin-top:12px;padding:0 18px;border-radius:8px;background:#0A6B4A;color:#fff;font-weight:600;text-decoration:none;clear:both}' +
    '.prid-nt a.prid-go:hover{background:#07573C}' +
    '.prid-nt button{position:absolute;top:8px;right:8px;width:44px;height:44px;border:0;background:none;color:#66666B;border-radius:8px;cursor:pointer;display:grid;place-items:center}' +
    '.prid-nt button:hover{color:#17171A;background:#F4F5F5}' +
    '.prid-nt :focus-visible{outline:2px solid #0A6B4A;outline-offset:2px}' +
    /* phone: highlighted bottom sheet */
    '@media (max-width:600px){' +
      '.prid-sc{display:block}' +
      '.prid-nt{left:0;right:0;bottom:0;width:auto;max-width:none;border:0;border-top:5px solid #0A6B4A;border-radius:18px 18px 0 0;' +
      'padding:22px 20px calc(20px + env(safe-area-inset-bottom,0px));transform:translateY(100%);box-shadow:0 -10px 40px rgba(23,23,26,.3)}' +
      '.prid-nt.on{transform:none}' +
      '.prid-nt .tx{overflow:visible}.prid-nt .pics{float:none;margin:0 0 16px;justify-content:center;gap:12px}' +
      '.prid-nt .pics img{width:auto;height:150px;max-width:44vw;object-fit:contain;border-radius:8px}' +
      '.prid-nt .pics img+img{display:block}' +
      '.prid-nt .t{font-size:13px}' +
      '.prid-nt b{font-size:22px;margin-top:10px}' +
      '.prid-nt p{font-size:16px}' +
      '.prid-nt a.prid-go{display:flex;width:100%;min-height:52px;font-size:17px;margin-top:18px;border-radius:10px}' +
    '}' +
    '@media (prefers-reduced-motion:reduce){.prid-nt,.prid-sc{transition:none}.prid-nt .t i{animation:none}}';

  function seen() { try { localStorage.setItem(KEY, String(Date.now())); } catch (e) {} }

  function show() {
    var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);
    var sc = document.createElement('div'); sc.className = 'prid-sc';
    var box = document.createElement('aside');
    box.className = 'prid-nt'; box.setAttribute('role', 'dialog'); box.setAttribute('aria-label', 'New posters');
    box.innerHTML =
      '<div class="pics"><img src="' + base + 'posters/thumbs/A-magazine.jpg" alt=""><img src="' + base + 'posters/thumbs/B-magazine.jpg" alt=""></div>' +
      '<div class="tx"><span class="t"><i></i>New</span>' +
      '<b>New Year 2027 posters are ready</b>' +
      '<p>2 designs for newspaper and magazine, waiting to download.</p>' +
      '<a class="prid-go" href="' + base + 'posters/index.html">View and download' +
      '<svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M4 10h12M11 5l5 5-5 5"/></svg></a></div>' +
      '<button type="button" aria-label="Close"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M5 5l10 10M15 5L5 15"/></svg></button>';
    document.body.appendChild(sc); document.body.appendChild(box);
    function close() {
      seen(); box.classList.remove('on'); sc.classList.remove('on');
      setTimeout(function () { box.remove(); sc.remove(); }, 320);
    }
    box.querySelector('a.prid-go').addEventListener('click', seen);
    box.querySelector('button').addEventListener('click', close);
    sc.addEventListener('click', close);
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && box.isConnected) close(); });
    requestAnimationFrame(function () { requestAnimationFrame(function () { box.classList.add('on'); sc.classList.add('on'); }); });
  }
  if (document.readyState === 'complete') setTimeout(show, 700);
  else window.addEventListener('load', function () { setTimeout(show, 700); });
})();
