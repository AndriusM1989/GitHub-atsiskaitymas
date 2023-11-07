document.getElementById("mygtukai").addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementById("pirmaSekcija").style.display = "none";
  document.getElementById("antraSekcija").style.display = "none";
  document.getElementById("treciaSekcija").style.display = "none";
  document.getElementById("mygtukai").style.display = "none";
  if (e.target.id == "pirmasMygtukas") {
    document.getElementById("intro").style.display = "flex";
    document.querySelector("#intro>div>img").addEventListener("click", () => {
      document.getElementById("intro").style.display = "none";
      document.getElementById("pirmaSekcija").style.display = "flex";
      document.getElementById("antraSekcija").style.display = "flex";
      document.getElementById("treciaSekcija").style.display = "flex";
      document.getElementById("mygtukai").style.display = "flex";
    });
  } else if (e.target.id == "antrasMygtukas") {
    document.getElementById("work").style.display = "flex";
    document.querySelector("#work>div>img").addEventListener("click", () => {
      document.getElementById("work").style.display = "none";
      document.getElementById("pirmaSekcija").style.display = "flex";
      document.getElementById("antraSekcija").style.display = "flex";
      document.getElementById("treciaSekcija").style.display = "flex";
      document.getElementById("mygtukai").style.display = "flex";
    });
  } else if (e.target.id == "treciasMygtukas") {
    document.getElementById("about").style.display = "flex";
    document.querySelector("#about>div>img").addEventListener("click", () => {
      document.getElementById("about").style.display = "none";
      document.getElementById("pirmaSekcija").style.display = "flex";
      document.getElementById("antraSekcija").style.display = "flex";
      document.getElementById("treciaSekcija").style.display = "flex";
      document.getElementById("mygtukai").style.display = "flex";
    });
  } else if (e.target.id == "ketvirtasMygtukas"){
    document.getElementById("contact").style.display = "flex";
    document.querySelector("#contact>div>img").addEventListener("click", () => {
      document.getElementById("contact").style.display = "none";
      document.getElementById("pirmaSekcija").style.display = "flex";
      document.getElementById("antraSekcija").style.display = "flex";
      document.getElementById("treciaSekcija").style.display = "flex";
      document.getElementById("mygtukai").style.display = "flex";
    });
  } else {
    console.log("Kažkas sugedo");
  }
})

