
(function(){
  var key="room404-counter",base=40400,start=Date.UTC(2026,7,20);
  var days=Math.max(0,Math.floor((Date.now()-start)/86400000));
  var natural=base+days*3;
  var saved=parseInt(localStorage.getItem(key)||"",10);
  var next=Number.isFinite(saved)?Math.max(saved+1,natural):natural;
  localStorage.setItem(key,String(next));
  document.querySelectorAll("[data-visitor-counter]").forEach(function(el){
    el.textContent=String(next).padStart(6,"0");
  });
})();
