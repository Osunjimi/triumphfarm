
document.addEventListener('DOMContentLoaded', function(){
  const ham = document.getElementById('hamburgerBtn');
  const sidebar = document.getElementById('siteSidebar');
  const overlay = document.getElementById('sideOverlay');
  ham && ham.addEventListener('click', ()=> { sidebar.classList.add('open'); overlay.style.display='block'; });
  overlay && overlay.addEventListener('click', ()=> { sidebar.classList.remove('open'); overlay.style.display='none'; });
  const closeBtn = document.getElementById('sideCloseBtn');
  closeBtn && closeBtn.addEventListener('click', ()=> { sidebar.classList.remove('open'); overlay.style.display='none'; });

  function attachRecaptcha(formId, action) {
    const form = document.getElementById(formId);
    if(!form || !window.grecaptcha) return;
    form.addEventListener('submit', function(e){
      e.preventDefault();
      grecaptcha.ready(function(){ grecaptcha.execute('6Lf54hksAAAAAEaV2tW3OBFB_BZDG2ZBqMG76Bh', {action:action}).then(function(token){
        let input = form.querySelector('input[name="g-recaptcha-response"]');
        if(!input){ input = document.createElement('input'); input.type='hidden'; input.name='g-recaptcha-response'; form.appendChild(input); }
        input.value = token;
        form.submit();
      }); });
    });
  }
  attachRecaptcha('contactForm','contact');
  attachRecaptcha('consultForm','consult');
});
