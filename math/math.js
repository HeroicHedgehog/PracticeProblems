var a = 42;
var b = 126;
var c = 5;

const math1 = () => {
    let math = (a + b) / c;
    console.log(math.toFixed(2));
}
math1 ()

const math2 = () => {
    let math = (a + b) / c;
    let mathAnswer = (Math.round(math * 100))/100;
    console.log(mathAnswer);
}
math2 ()