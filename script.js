let no = document.querySelector(".none");

no.onmouseover= ()=>{
    no.style.position = "absolute";
    no.style.top = Math.floor(Math.random()*90+3 ) + "%";
    no.style.left = Math.floor(Math.random()*90+3 ) + "%";
}