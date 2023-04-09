//모듈별로 개발할 때 사용
const printHello = () => console.log("hello");
exports.printHello = printHello;

exports.printMessage = (message) => {
    console.log(message);
};