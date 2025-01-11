onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
};

window.onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
    const messageTimeout = setTimeout(() => {
      document.querySelector(".birthday-message").classList.add("visible");
      clearTimeout(messageTimeout);
    }, 6000); 
  }, 1000);
};

onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded"); // Start animations
    clearTimeout(c);
  }, 1000);
};

