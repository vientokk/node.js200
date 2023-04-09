//모듈별로 개발할 때 사용
//exports.받는쪽호출할함수이름 으로 하면 됨.
//120_require.js 에서 확인.

const printHello = () => console.log("hello");
exports.printHello = printHello;

exports.printMessage = (message) => {
    console.log(message);
};