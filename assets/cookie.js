
// Cookie notice (simple)
window.addEventListener('load', function(){
  try{
    if(!localStorage.getItem('tf_cookie')){
      var bar = document.createElement('div');
      bar.id = 'tf_cookie_bar';
      bar.style.position='fixed';
      bar.style.left='0';
      bar.style.right='0';
      bar.style.bottom='0';
      bar.style.background='#254a25';
      bar.style.color='#fff';
      bar.style.padding='12px';
      bar.style.textAlign='center';
      bar.style.zIndex='99999';
      bar.innerHTML = 'We use cookies for site functionality. <button id="tf_accept">OK</button>';
      document.body.appendChild(bar);
      document.getElementById('tf_accept').onclick = function(){ localStorage.setItem('tf_cookie','1'); document.getElementById('tf_cookie_bar').remove(); };
    }
  }catch(e){}
});
