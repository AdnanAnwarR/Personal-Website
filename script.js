document.addEventListener("DOMContentLoaded", function () {
  var hamburger = document.querySelector(".menu-toggle");
  var menu = document.querySelector(".menu");

  const homeMenu = document.querySelector("a[href='#home']");
  const tentangMenu = document.querySelector("a[href='#tentang']");
  const skillsMenu = document.querySelector("a[href='#skill']");
  const portfolioMenu = document.querySelector("a[href='#portfolio']");
  const contactMenu = document.querySelector("a[href='#contact']");

  function setActiveMenu(activeMenu) {
    homeMenu.classList.remove("active");
    tentangMenu.classList.remove("active");
    skillsMenu.classList.remove("active");
    portfolioMenu.classList.remove("active");
    contactMenu.classList.remove("active");

    activeMenu.classList.add("active");
  }

  function scrollToSection(event, sectionId) {
    event.preventDefault();
    setActiveMenu(event.currentTarget);
    const section = document.querySelector(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
  }

  homeMenu.addEventListener("click", (event) =>
    scrollToSection(event, "#home")
  );
  tentangMenu.addEventListener("click", (event) =>
    scrollToSection(event, "#tentang")
  );
  skillsMenu.addEventListener("click", (event) =>
    scrollToSection(event, "#skill")
  );
  portfolioMenu.addEventListener("click", (event) =>
    scrollToSection(event, "#portfolio")
  );
  contactMenu.addEventListener("click", (event) =>
    scrollToSection(event, "#contact")
  );

  hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("active");
    menu.classList.toggle("active");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("tech-stack-btn")
    .addEventListener("click", function (event) {
      event.preventDefault();
      document.getElementById("tech-stack").style.display = "flex";
      document.getElementById("tools").style.display = "none";
      document.getElementById("lihat-detail").style.display = "none";
      document.getElementById("persentase").style.display = "block";
      document.querySelector(".pil1").classList.add("active");
      document.querySelector(".pil2").classList.remove("active");
      document.querySelector(".skill-data").classList.add("active");
      document.querySelector(".skill-data").classList.remove("active");
    });

  document
    .getElementById("tools-btn")
    .addEventListener("click", function (event) {
      event.preventDefault();
      document.getElementById("tech-stack").style.display = "none";
      document.getElementById("tools").style.display = "flex";
      document.getElementById("lihat-detail").style.display = "none";
      document.getElementById("persentase").style.display = "none";
      document.querySelector(".pil2").classList.add("active");
      document.querySelector(".pil1").classList.remove("active");
      document.querySelector(".skill-data").classList.add("active");
    });

  document
    .getElementById("persentase")
    .addEventListener("click", function (event) {
      event.preventDefault();
      document.getElementById("tech-stack").style.display = "none";
      document.getElementById("tools").style.display = "none";
      document.getElementById("lihat-detail").style.display = "block";
      document.getElementById("persentase").style.display = "none";
      document.querySelector(".pil2").style.display = "none";
      document.querySelector(".pil1").style.display = "none";
      document.querySelector(".skill-data").classList.add("active");
    });

  document
    .getElementById("skill-close")
    .addEventListener("click", function (event) {
      event.preventDefault();
      document.getElementById("tech-stack").style.display = "flex";
      document.getElementById("pilihan-skill").style.display = "flex";
      document.getElementById("tools").style.display = "none";
      document.getElementById("persentase").style.display = "block";
      document.getElementById("lihat-detail").style.display = "none";
      document.querySelector(".pil2").style.display = "block";
      document.querySelector(".pil1").style.display = "block";
    });
});
