//Ans 1
function stringLength (str) {
    console.log(str.length);
}

//Ans 2
function createCounter() {
    let cont=0;
    return function inside(){
        cont++;
        return cont;
    };
}
const counter=createCounter();
console.log(counter());
