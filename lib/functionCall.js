(function(global){
  // function call
  var functionCall = function(){
    var func1 = function () {
      var func = function (n){
        return n * n;
      }
      var i = 100000;
      var sum = 0;
      while(i--){
        sum += func(i);
      }
    };

    var func2 = function () {
      var i = 100000;
      var sum = 0;
      while(i--){
        sum += i * i;
      }
    };

    APP.timer.start();
    // console.time("function call before");
    func1();
    // console.timeEnd("function call before");
    var a = "function call before " + APP.timer.end() + "ms";

    APP.timer.start();
    // console.time("function call after");
    func2();
    // console.timeEnd("function call after");
    var b = "function call after " + APP.timer.end() + "ms";
    APP.timer.show([a,b]);
  };
  functionCall();
})(window);