function contact(str) {

    let juft="" ;

    let toq ="";

    for (let i = 0; i < str.length; i++) {

        if (i % 2 === 0) {

            juft += str[i];

        } 
        else {

            toq += str[i];
        }
    }

    return juft + toq;

}

let result = contact("vsdagbsb");

console.log(result)