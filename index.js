(function(global){

  // for
  var str = "";
  var max = 1000;
  var i;

  console.time("for before");
  for(i = 0; i < max; i++){
    document.getElementById("div1").innerHTML += i + ", ";
  }
  console.timeEnd("for before");

  console.time("for after");
  var str = "";
  for(i = 0; i < max; i++){
    str += i + ", ";
  }

  document.getElementById("div2").innerHTML = str;
  console.timeEnd("for after");


  // style
  console.time("style before");
  for(i = 0; i < max; i++){
    var padding = document.getElementById("div1").style.padding;
    var margin = document.getElementById("div1").style.margin;
  }
  console.timeEnd("style before");

  console.time("style after");
  for(i = 0; i < max; i++){
    var style = document.getElementById("div1").style;
    var padding = style.padding;
    var margin = style.margin;
  }
  console.timeEnd("style after");


  // array length cash

  var arr = [];
  var i;
  for(i = 0; i < max; i++){
    arr.push(i);
  }


  console.time("array length cach before");
  var arr1 = [];
  for(i = 0; i < arr.length; i++){
    arr1.push(Math.random());
  }
  console.timeEnd("array length cach before");


  console.time("array length cach after");
  var arr2 = [];
  var len = arr.length;
  for(i = 0; i < len; i++){
    arr2.push(Math.random());
  }

  console.timeEnd("array length cach after");


  // function call

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


  // new Object
  var max = 1000;
  var i;
  console.time("new Object or Literal before");
  for(i = 0; i < max; i++){
    var obj = new Object();
  }
  console.timeEnd("new Object or Literal before");

  console.time("new Object or Literal after");
  for(i = 0; i < max; i++){
    var obj = {};
  }
  console.timeEnd("new Object or Literal after");


  // loop expansion
  var max = 100;
  var i;
  var j = 0;
  console.time("loop expansion before");
  while(i--){
    j++;
  }
  console.timeEnd("loop expansion before");


  console.time("loop expansion after");
  num = 0;
  j = 0;
  j++; j++; j++; j++; j++; j++; j++; j++; j++; j++;
  j++; j++; j++; j++; j++; j++; j++; j++; j++; j++;
  j++; j++; j++; j++; j++; j++; j++; j++; j++; j++;
  j++; j++; j++; j++; j++; j++; j++; j++; j++; j++;
  j++; j++; j++; j++; j++; j++; j++; j++; j++; j++;
  j++; j++; j++; j++; j++; j++; j++; j++; j++; j++;
  j++; j++; j++; j++; j++; j++; j++; j++; j++; j++;
  j++; j++; j++; j++; j++; j++; j++; j++; j++; j++;
  j++; j++; j++; j++; j++; j++; j++; j++; j++; j++;
  j++; j++; j++; j++; j++; j++; j++; j++; j++; j++;
  console.timeEnd("loop expansion after")


  // global local cash
  var max = 1000;
  var i;
  console.time("global local cash before");
  for(i = 0; i < max; i++){
    window.var1 = "var1";
  }
  console.timeEnd("global local cash before");

  console.time("global local cash after");
  var g = window;
  for(i = 0; i < max; i++){
    g.var2 = "var2";
  }
  console.timeEnd("global local cash after");

  // logical operators
  var tru = true;
  var fal = false;
  var max = 1000;
  var i;
  console.time("logical operators before");
  for(i = 0; i < max; i++){
    (function(){
      return tru && fal;
    })();
  }
  console.timeEnd("logical operators before");

  console.time("logical operators after");
  for(i = 0; i < max; i++){
    (function(){
      return fal && tru;
    })();
  }
  console.timeEnd("logical operators after");




})(window);