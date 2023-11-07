document.getElementById("pirmasMygtukas").addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementById("intro").style.display = "flex";
  document.getElementById("pirmaSekcija").style.display = "none";
  document.getElementById("antraSekcija").style.display = "none";
  document.getElementById("treciaSekcija").style.display = "none";
  document.getElementById("mygtukai").style.display = "none";
});

document
  .getElementById("antrasMygtukas")
  .addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("work").style.display = "flex";
    document.getElementById("pirmaSekcija").style.display = "none";
    document.getElementById("antraSekcija").style.display = "none";
    document.getElementById("treciaSekcija").style.display = "none";
    document.getElementById("mygtukai").style.display = "none";
  });

document
  .getElementById("treciasMygtukas")
  .addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("about").style.display = "flex";
    document.getElementById("pirmaSekcija").style.display = "none";
    document.getElementById("antraSekcija").style.display = "none";
    document.getElementById("treciaSekcija").style.display = "none";
    document.getElementById("mygtukai").style.display = "none";
  });

document
  .getElementById("ketvirtasMygtukas")
  .addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("contact").style.display = "flex";
    document.getElementById("pirmaSekcija").style.display = "none";
    document.getElementById("antraSekcija").style.display = "none";
    document.getElementById("treciaSekcija").style.display = "none";
    document.getElementById("mygtukai").style.display = "none";
  });
