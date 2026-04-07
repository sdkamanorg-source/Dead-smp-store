function buy(item) {
  alert("You selected: " + item);

  // 🔥 Replace this with your payment link
  window.open("https://your-payment-link.com", "_blank");
}

function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth"
  });
}
