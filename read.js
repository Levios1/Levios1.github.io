function read(n) {
    var moreText = document.getElementById("more-"+n);
    var btnText = document.getElementById("readBtn-"+n);
  
    if (moreText.style.display === "none") {
        btnText.innerHTML = "Weniger Anzeigen"; 
        moreText.style.display = "inline";
    } else {
        btnText.innerHTML = "Mehr Anzeigen"; 
        moreText.style.display = "none";
    }
  }