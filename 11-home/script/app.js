let x = +prompt("Son kiriting");
let y = +prompt("Son kiriting");

function calculator() {
     if(x > y) {
          document.write("winner")
     }
     else if (x < y) {
          document.write("losser");
     }
     else if(x == y) {
          document.write("tieer")
     }
     else {
          document.write("error")
     }
}
calculator()