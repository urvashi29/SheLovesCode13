function displayData() {
  console.log(document.getElementById("display"));
  document.getElementById("display").style.backgroundColor = "yellow";

  var collection = document.getElementsByClassName("item");
  console.log(collection); //treat like an array
  //   console.log(collection[1].innerHTML);

  var d = document.getElementById("data").value;

  var arr = [];
  for (var i = 0; i < collection.length; i++) {
    console.log(collection[i].innerHTML);
    arr.push(collection[i].innerHTML); //innetText | textContent
    collection[i].style.backgroundColor = "teal";

    // if (collection[i].innerHTML.toLowerCase() === d.toLowerCase()) {
    //   console.log("found");
    //   break;
    // }
  }
  console.log(arr);

  //first element
  document.querySelector(".example").style.backgroundColor = "blue";

  var c = document.querySelectorAll(".example");
  console.log(c); //treat like an array

  window.document.getElementsByTagName("p"); //collection
}

//study
//classlist (adding class and removing using js)

// var obj = {
//   first: "alina",
//   displayName: function () {},
// };
// obj.first;
// obj.displayName();

// BOM
console.log(window);

// window.alert();

var x = 20;
console.log(x);

window.displayData();

// window = {
//     x: 20
//     displayData : function () {

//     },
// screen: {
// }
// }

// window properties
console.log(window.screen);
console.log(window.navigator);
console.log(window.location);
console.log(window.history);

console.log(window.location.href);

// Hoisting
z = 10;//initialize
console.log(z);//use
var z;//declare


//initialization is never hoisted
var j;
console.log(j);//undefined
j = 100;


//ideal
var y = 90;