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

    console.time("function call before");
    func1();
    console.timeEnd("function call before");

    console.time("function call after");
    func2();
    console.timeEnd("function call after");
  };
  functionCall();
})(window);