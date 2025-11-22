const images = {
  projects: ["images/projects/proj1.jpg","images/projects/proj2.jpg","images/projects/proj3.jpg"],
  creative: ["images/creative/creat1.jpg","images/creative/creat2.jpg","images/creative/creat3.jpg"],
  about: ["images/about/about1.jpg","images/about/about2.jpg","images/about/about3.jpg"]
};

document.querySelectorAll(".landing-section").forEach(section => {
  const type = section.getAttribute("data-type");
  const overlay = section.querySelector(".overlay");

  section.addEventListener("mouseenter", () => {
    if (images[type]) {
      const randomImg = images[type][Math.floor(Math.random() * images[type].length)];
      overlay.style.opacity = 0;
      setTimeout(() => {
        overlay.style.backgroundImage = `url(${randomImg})`;
        overlay.style.opacity = 1;
      }, 200);
    }
  });

  section.addEventListener("mouseleave", () => {
    overlay.style.opacity = 0;
  });
});
