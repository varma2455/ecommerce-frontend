document.querySelector(".primary").addEventListener("click", () => {
    document.body.style.transition = "opacity 0.6s ease";
    document.body.style.opacity = "0";
  
    setTimeout(() => {
      // redirect later
      alert("Entering ShopEase 🚀");
      document.body.style.opacity = "1";
    }, 600);
  });
  
  document.querySelector(".secondary").addEventListener("click", () => {
    alert("Redirect to Sign In 🔐");
  });