function home() {
    location.href='home.html'
}

function about() {
    location.href='about us.html'
}

function contact() {
    location.href='contact us.html'
}

function review() {
    location.href='review page.html'
}

function order() {
    location.href='orders.html'
}

// About us

const age = document.querySelectorAll("[age]")

age.forEach(element => {
    element.innerHTML = element.innerHTML.replace(45, new Date().getFullYear() - 1973)
});

// Review page

function review_update() {
    const para = document.createElement("p");
    const node = document.createTextNode("This is new.");
    para.appendChild(node);

    const element = document.querySelector("[review-adder]");
    element.appendChild(para);
}

function review_now() {
    document.getElementById("review-adder").style.display = "inline";

    // var x = document.getElementById("review-adder");
    // if (x.style.display === "none") {
    //   x.style.display = "inline";
    // } else {
    //   x.style.display = "none";
    // }

    document.getElementById("review-button").style.display = "none";
    
  }
  

  
  
