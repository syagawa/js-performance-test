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

})(window);