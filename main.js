document.getElementById("pirmasMygtukas").addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementById("intro").style.display = "flex";
  });

  document
  .getElementById("antrasMygtukas")
  .addEventListener("click", function () {
    document.getElementById("work").style.display = "flex";
  });

  document
  .getElementById("treciasMygtukas")
  .addEventListener("click", function () {
    document.getElementById("about").style.display = "flex";
  });

  document
  .getElementById("ketvirtasMygtukas")
  .addEventListener("click", function () {
    document.getElementById("contact").style.display = "flex";
  });