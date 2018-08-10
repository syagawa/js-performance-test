(function(global){

  // for
  var str = "";
  var max = 1000;
  var i;

  console.time("t1");
  for(i = 0; i < max; i++){
    document.getElementById("div1").innerHTML += i + ", ";
  }
  console.timeEnd("t1");


  console.time("t2");
  var str = "";
  for(i = 0; i < max; i++){
    str += i + ", ";
  }

  document.getElementById("div2").innerHTML = str;
  console.timeEnd("t2");

  // style
  console.time("t1");
  for(i = 0; i < max; i++){
    var padding = document.getElementById("div1").style.padding;
    var margin = document.getElementById("div1").style.margin;
  }
  console.timeEnd("t1");


  console.time("t2");
  for(i = 0; i < max; i++){
    var style = document.getElementById("div1").style;
    var padding = style.padding;
    var margin = style.margin;
  }
  console.timeEnd("t2");


})(window);