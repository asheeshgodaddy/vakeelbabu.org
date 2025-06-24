
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const msg = document.getElementById("msg");

  form?.addEventListener("submit", e => {
    e.preventDefault();
    msg.textContent = "Submitting...";
    fetch("https://script.google.com/macros/s/AKfycbzW2oy5GICZhxarQfj01qpdHJNdexpGTezKTlniRkaPF1q4yi-Bv7_Nh7_7p2-c9uur/exec", {
      method: "POST",
      body: new FormData(form)
    })
    .then(r => r.text())
    .then(text => {
      msg.textContent = text === "SUCCESS" ? "Form submitted successfully!" : text;
      if (text === "SUCCESS") form.reset();
    })
    .catch(err => {
      msg.textContent = "Error submitting form. Try again.";
      console.error(err);
    });
  });
});
