function star(t, name, rm){ 
    for(let i = 0; i < t; i ++){ //loop for how much stars
      const c = document.getElementById('circle'); 
      const star = document.createElement('div');
      star.classList.add(name);
      star.style.left = Math.random() * 100 + "%";
      star.style.top = Math.random() * 100 + "%";
      c.appendChild(star); // add the  star to element
      setTimeout(() => { // remove the star after 4s
      star.remove(); 
    }, rm);
    }
  }
  // in sit the setInterval : function, how long the for new stars, how much stars, className
  setInterval(star, 2000, 200, 'stars', 4000); 
  setInterval(star, 2000, 1, 'noordstar', 3000);



  const nav = document.querySelector(".nav"),
  searchIcon = document.querySelector("#searchIcon"),
  navOpenBtn = document.querySelector(".navOpenBtn"),
  navCloseBtn = document.querySelector(".navCloseBtn");

searchIcon.addEventListener("click", () => {
  nav.classList.toggle("openSearch");
  nav.classList.remove("openNav");
  if (nav.classList.contains("openSearch")) {
    return searchIcon.classList.replace("uil-search", "uil-times");
  }
  searchIcon.classList.replace("uil-times", "uil-search");
});

navOpenBtn.addEventListener("click", () => {
  nav.classList.add("openNav");
  nav.classList.remove("openSearch");
  searchIcon.classList.replace("uil-times", "uil-search");
});
navCloseBtn.addEventListener("click", () => {
  nav.classList.remove("openNav");
});