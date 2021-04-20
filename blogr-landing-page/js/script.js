$(document).click(function(e) {
  var target = e.target;
  $('.dropdown-content').each(function() {
    var $this = $(this);
    var dropdown = $this.prev('.dropbtn');
    if (dropdown[0] == target) $(this).toggle();
    else $(this).hide();
  });
});

const btn=document.querySelector(".btn--menu"),btnIcon=document.querySelector(".menu-icon"),nav=document.querySelector(".navigation-list"),navItems=document.querySelectorAll(".navigation-list-item"),backdrop=document.querySelector(".backdrop");function toggleMenu(){nav.classList.toggle("navigation-list-hidden"),backdrop.classList.toggle("backdrop--hidden"),document.body.classList.toggle("disable-scroll"),nav.classList.contains("navigation-list-hidden")?(btnIcon.src="/img/icon-hamburger.svg",btn.setAttribute("aria-expanded","false")):(btnIcon.src="/img/icon-close.svg",btn.setAttribute("aria-expanded","true")),navItems.forEach((e,t)=>{e.style.animation?e.style.animation="":e.style.animation=`fadeInLeftNav .4s ease backwards ${t/7+.2}s`})}btn.addEventListener("click",toggleMenu),backdrop.addEventListener("click",toggleMenu);