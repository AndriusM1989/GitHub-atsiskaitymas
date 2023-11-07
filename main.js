document.getElementById("pirmasMygtukas").addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementById("intro").style.display = "flex";
  document.getElementById("pirmaSekcija").style.display = "none";
  document.getElementById("antraSekcija").style.display = "none";
  document.getElementById("treciaSekcija").style.display = "none";
  document.getElementById("mygtukai").style.display = "none";
  document.querySelector("#intro>div>img").addEventListener('click', () => {
    document.getElementById("intro").style.display = "none";
    document.getElementById("pirmaSekcija").style.display = "flex";
    document.getElementById("antraSekcija").style.display = "flex";
    document.getElementById("treciaSekcija").style.display = "flex";
    document.getElementById("mygtukai").style.display = "flex";
  })
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
    document.querySelector("#work>div>img").addEventListener('click', () => {
      document.getElementById("work").style.display = "none";
      document.getElementById("pirmaSekcija").style.display = "flex";
      document.getElementById("antraSekcija").style.display = "flex";
      document.getElementById("treciaSekcija").style.display = "flex";
      document.getElementById("mygtukai").style.display = "flex";
    })
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
    document.querySelector("#about>div>img").addEventListener('click', () => {
      document.getElementById("about").style.display = "none";
      document.getElementById("pirmaSekcija").style.display = "flex";
      document.getElementById("antraSekcija").style.display = "flex";
      document.getElementById("treciaSekcija").style.display = "flex";
      document.getElementById("mygtukai").style.display = "flex";
    })
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
    document.querySelector("#contact>div>img").addEventListener('click', () => {
      document.getElementById("contact").style.display = "none";
      document.getElementById("pirmaSekcija").style.display = "flex";
      document.getElementById("antraSekcija").style.display = "flex";
      document.getElementById("treciaSekcija").style.display = "flex";
      document.getElementById("mygtukai").style.display = "flex";
    })
  });
