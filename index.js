(function(global){

  global.APP = global.APP ? global.APP : {};

  console.log(APP);
  console.log("aaa");

  APP.timer = {
    start_time: "",
    start: function(){
      this.start_time = new Date().getTime();
    },
    end: function(){
      var end_time = new Date().getTime();
      var time = end_time - this.start_time;
      return time;
    }
  };

  console.log(APP);


  document.getElementById("load_btn").addEventListener("click", function(e){
    var script = document.createElement("script");

    var src = document.getElementById("select_src").value;
    script.src = "./lib/" + src;
    document.getElementById("js_src").appendChild(script);

    script.remove();
  });



})(window);