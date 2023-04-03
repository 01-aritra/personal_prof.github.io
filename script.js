$(document).ready(function() {
    $(window).scroll(function() {
      if ($(window).scrollTop() > 100) { /* Adjust 100 to be the desired distance from the top of the page */
        $('.fixed-header').css('top', '-' + ($(window).scrollTop() - 100) + 'px');
      } else {
        $('.fixed-header').css('top', '0');
      }
    });
  });
			document.querySelectorAll('a[href^="#"]').forEach(anchor => {
				anchor.addEventListener('click', function (e) {
					e.preventDefault();
		
					document.querySelector(this.getAttribute('href')).scrollIntoView({
						behavior: 'smooth'
					});
				});
			});
            const parentMenuItems = document.querySelectorAll('.submenu > li');

parentMenuItems.forEach(parentItem => {
  parentItem.addEventListener('mouseover', () => {
    parentItem.querySelector('.main-menu').style.display = 'block';
  });
  
  parentItem.addEventListener('mouseout', () => {
    parentItem.querySelector('.main-menu').style.display = 'none';
  });
});
function showNotes() {
    document.getElementById("notes").style.display = "block";
  }
  
  function hideNotes() {
    document.getElementById("notes").style.display = "none";
  }