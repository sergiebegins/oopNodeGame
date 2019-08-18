import {Initial} from "./component.js";

let obj = new Initial();


obj.createCanvas();
delete obj.ctx;
obj.createCtx();
addEventListener("keydown", function (e) {
    obj.keysDown[e.keyCode] = true;
}, false);

addEventListener("keyup", function (e) {
    delete obj.keysDown[e.keyCode];
}, false);

var main = function () {
    var now = Date.now();
    var delta = now - then;

    obj.update(delta / 1000);
    obj.render();

    then = now;

    // Request to do this again ASAP
    requestAnimationFrame(main);
};

// Cross-browser support for requestAnimationFrame
var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

// Let's play this game!
var then = Date.now();
obj.reset();
main();