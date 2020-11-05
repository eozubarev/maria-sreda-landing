/* myLib */
(function() {
    window.myLib = {};
  
    window.myLib.body = document.querySelector("body");
  
    window.myLib.closestAttr = function(item, attr) {
      var node = item;
  
      while (node) {
        var attrValue = node.getAttribute(attr);
        if (attrValue) {
          return attrValue;
        }
    
        node = node.parentElement;
      }
  
      return null;
    };
  
    window.myLib.closestItemByClass = function(item, className) {
      var node = item;
  
      while (node) {
        if (node.classList.contains(className)) {
          return node;
        }
  
        node = node.parentElement;
      }
  
      return null;
    };
  
    window.myLib.toggleScroll = function() {
      myLib.body.classList.toggle("no-scroll");
    };
  })();
  
  /* myLib */
  
  /* header */
  (function() {
    if (window.matchMedia("(max-width: 1300px)").matches) {
      return;
    }
  
    var headerPage = document.querySelector(".header-page");
  
    window.addEventListener("scroll", function() {
      if (window.pageYOffset > 0) {
        headerPage.classList.add("--scrolled-header");
      } else {
        headerPage.classList.remove("--scrolled-header");
      }
    });
  })();
  /* header */

  /* popup */
(function() {
    var showPopup = function(target) {
      target.classList.add("is-active");
    };
  
    var closePopup = function(target) {
      target.classList.remove("is-active");
    };
  
    myLib.body.addEventListener("click", function(e) {
      var target = e.target;
      var popupClass = myLib.closestAttr(target, "data-popup");
  
      if (popupClass === null) {
        return;
      }
  
      e.preventDefault();
      var popup = document.querySelector("." + popupClass);
  
      if (popup) {
        showPopup(popup);
        myLib.toggleScroll();
      }
    });
  
    myLib.body.addEventListener("click", function(e) {
      var target = e.target;
  
      if (
        target.classList.contains("popup-close") ||
        target.classList.contains("popup__inner")
      ) {
        var popup = myLib.closestItemByClass(target, "popup");
  
        closePopup(popup);
        myLib.toggleScroll();
      }
    });
  
    myLib.body.addEventListener("keydown", function(e) {
      if (e.keyCode !== 27) {
        return;
      }
  
      var popup = document.querySelector(".popup.is-active");
  
      if (popup) {
        closePopup(popup);
        myLib.toggleScroll();
      }
    });
  })();
  
  /* popup */

  /* Animation */

  const animItems = document.querySelectorAll('._anim-items');
  if(animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll() {
      for(let index = 0; index < animItems.length; index++) {
        const animItem = animItems[index];
        const animItemHeight = animItem.offsetHeight;
        const animItemOffset = offset(animItem).top;
        const animStart = 4;
       
  
        let animItemPoint = window.innerHeight - animItemHeight / animStart;
  
        if (animItemHeight > window.innerHeight) {
          animItemPoint = window.innerHeight - window.innerHeight / animStart;
        }
  
        if ((pageYOffset > animItemOffset - animItemPoint) &&  pageYOffset < (animItemOffset + animItemHeight)) {
          animItem.classList.add('_active');
        } else {
          if (!animItem.classList.contains('_anim-no-hide')) {
            animItem.classList.remove('_active');
          }
        }
      }
    }
    function offset(el) {
      const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }

    setTimeout(() => {
      animOnScroll();
    }, 450);
}

  /* Animation */

/* header scroll */
$header = $('.header-page')

$(window).scroll(function() {
    if ($(this).scrollTop() > 1){
    $header.addClass("--scrolled-header");
    }
    else{
    $header.removeClass("--scrolled-header");
    }
    });
/* header scroll */