const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const progressBar = entry.target.querySelector(".progress-bar");
    if (entry.isIntersecting) {
      progressBar.classList.add("progress-bar-animation");
      return;
    }
    progressBar.classList.remove("progress-bar-animation");
  });
});

observer.observe(document.querySelector(".progress"));