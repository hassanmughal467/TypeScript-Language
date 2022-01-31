"use strict";
exports.__esModule = true;
var App = /** @class */ (function () {
    function App() {
    }
    App.prototype.test = function () {
        console.warn("Use watch to avoid repeatly compile processes");
    };
    return App;
}());
var x = new App();
x.test();
