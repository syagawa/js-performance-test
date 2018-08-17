
(function(global){


  document.getElementById("load_btn").addEventListener("click", function(e){
    var script = document.createElement("script");
    script.src = "./lib/domDirectOrVariable.js";
    document.getElementById("js_src").appendChild(script);
  });

  // dom style
  var domStyle = function(){
    var i,
        max = 1000;
    console.time("dom style before");
    for(i = 0; i < max; i++){
      var padding = document.getElementById("div1").style.padding;
      var margin = document.getElementById("div1").style.margin;
    }
    console.timeEnd("dom style before");

    console.time("dom style after");
    for(i = 0; i < max; i++){
      var style = document.getElementById("div2").style;
      var padding = style.padding;
      var margin = style.margin;
    }
    console.timeEnd("dom style after");

    document.getElementById("div1").style = "";
    document.getElementById("div1").style = "";

  };


  // dom class or id
  var domClassOrId = function(){
    var max = 1000;
    var i;

    console.time("dom class or id before");
    for(i = 0; i < max; i++){
      document.getElementsByClassName("div1")[0].innerHTML += i + ", ";
    }
    console.timeEnd("dom class or id before");

    console.time("dom class or id after");
    for(i = 0; i < max; i++){
      document.getElementById("div2").innerHTML += i + ", ";
    }
    console.timeEnd("dom class or id after");

    document.getElementsByClassName("div1")[0].innerHTML = "";
    document.getElementById("div2").innerHTML = "";

  };


  // dom createDocumentFragment
  var domCreateDocumentFragment = function(){
    var max = 10000;
    var i;

    console.time("dom createDocumentFragment before");
    for(i = 0; i < max; i++){
      var p = document.createElement("p");
      p.textContent = i + ",";
      document.getElementById("div1").appendChild(p);
    }
    console.timeEnd("dom createDocumentFragment before");

    console.time("dom createDocumentFragment after");
    var docFlag = document.createDocumentFragment();
    for(i = 0; i < max; i++){
      var p = document.createElement("p");
      p.textContent = i + ",";
      docFlag.appendChild(p);
    }
    document.getElementById("div2").appendChild(docFlag);
    console.timeEnd("dom createDocumentFragment after");

    document.getElementById("div1").innerHTML = "";
    document.getElementById("div2").innerHTML = "";
  };

  // dom clonenode
  var domCloneNode = function(){

    var max = 10000;
    var i;

    console.time("dom clonenode before");
    for(i = 0; i < max; i++){
      var p = document.createElement("p");
      p.textContent = i + ",";
      document.getElementById("div1").appendChild(p);
    }
    console.timeEnd("dom clonenode before");

    console.time("dom clonenode after");
    var clone = document.getElementById("div2").cloneNode(true);
    for(i = 0; i < max; i++){
      var p = document.createElement("p");
      p.textContent = i + ",";
      clone.appendChild(p);
    }
    document.getElementById("div2").parentNode.appendChild(clone);
    console.timeEnd("dom clonenode after");

    document.getElementById("div1").innerHTML = "";
    document.getElementById("div2").innerHTML = "";

  };

  // array length cash
  var arrayLengthCash = function(){
    var arr = [],
        i,
        max = 1000;

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
  };


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


  // new Object
  var newObject = function(){
    var max = 1000,
        i;
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
  };


  // loop expansion
  var loopExpansion = function(){
    var max = 100,
        i,
        j = 0;

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
    console.timeEnd("loop expansion after");
  };

  // global local cash
  var globalLocalCash = function(){
    var max = 1000,
        i;

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
  };

  // logical operators
  var logicalOperators = function(){
    var tru = true,
        fal = false,
        max = 1000,
        i;
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
  };

  // function scope
  var functionScope = function(){
    var max = 1000,
        i;

    console.time("function scope before");
    for(i = 0; i < max; i++){
      (function(){
        var j = i;
      })();
    }
    console.timeEnd("function scope before");

    console.time("function scope after");
    for(i = 0; i < max; i++){
      var j = i;
    }
    console.timeEnd("function scope after");
  };

  // try catch
  var tryCatch = function(){
    var max = 1000,
        i;
    console.time("try catch before");
    for(i = 0; i < max; i++){
      (function(){
        try{
          var j = i;
        }catch(e){
          
        }
      })();
    }
    console.timeEnd("try catch before");

    console.time("try catch after");
    for(i = 0; i < max; i++){
      var j = i;
    }
    console.timeEnd("try catch after");
  };


})(window);