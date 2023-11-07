document
  .getElementById("pirmasMygtukas")
  .addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("intro").style.display = "flex";
    e.target.reset();
  });

  document
  .getElementById("antrasMygtukas")
  .addEventListener("click", function () {
    document.getElementById("work").style.display = "flex";
    e.target.reset();
  });

  document
  .getElementById("treciasMygtukas")
  .addEventListener("click", function () {
    document.getElementById("about").style.display = "flex";
    e.target.reset();
  });

  document
  .getElementById("ketvirtasMygtukas")
  .addEventListener("click", function () {
    document.getElementById("contact").style.display = "flex";
    e.target.reset();
  });
