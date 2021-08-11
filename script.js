document.addEventListener("scroll", function () {
    //addEventListener will call the function each time the event scroll occurs in document.
    const navtwo = document.querySelector(".nav-two"); //for adding sticky
    const navone = document.querySelector(".nav-one"); //for removing sticky
    //const navbarHeight = navbar.offsetTop;
    //const navbarHeight = 200;
        
    //element.getBoundingClientRect().bottom -> gives bottom y coord of square around element
    //giving us bottom y coord of topads and storing it in navbarTopPosition
    const navoneBottomPosition = Math.abs(navone.getBoundingClientRect().bottom);
        
    /*const distanceFromTop = Math.abs(
      document.body.getBoundingClientRect().top
    );*/

    var distanceFromTop = window.scrollY;
    
    if (distanceFromTop >= navoneBottomPosition) {
        navtwo.classList.add("fixed-top");
    }
    else {
        navtwo.classList.remove("fixed-top");
    }
  });