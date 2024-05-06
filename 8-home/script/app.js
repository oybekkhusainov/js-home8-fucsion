let a = +prompt("A son kiriting");

let b = +prompt("B son kiriting");

let c = +prompt("C son kiritng");

let arr = [];

arr.push(a);

arr.push(b);

arr.push(c);

function yigim() {

     for(let i = 0; i <= c; i++) {

          if(arr[i] > c) {

              return  a + b;

          }

          else {

               console.log("xato")

          }
     }
}

let result = yigim();

console.log(result);