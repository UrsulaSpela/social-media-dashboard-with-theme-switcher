// var body = document.querySelector("body");
// var light = document.querySelectorAll(".light")

// goLight = function() { // Creates a function called goLight that adds the 'dark' class to the body
//     body.className = "";
//   },
//   goDark = function() { // Creates a function called goDark that removes the 'dark' class from the body
//     body.className = "";
//     body.classList.add("dark");
//   }

//   document.querySelector(".switch").addEventListener("click", goDark, false); // Tells the first button to run the goLight function when clicked

// // document.querySelector(".switch").addEventListener("click", goDark, false); // Tells the second button to run the goDark function when clicked


// var x = document.querySelectorAll(".light")
// console.log(x);


function darkmode() {
    var element = document.body;
    element.classList.toggle("dark");
 }