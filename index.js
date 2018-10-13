(function(global){

  global.APP = global.APP ? global.APP : {};
  var APP = global.APP;

  APP.timer = {
    start_time: "",
    start: function(){
      this.start_time = performance.now();
    },
    end: function(){
      if(!this.start_time){
        console.log("Start time is not set.");
        return false;
      }
      var end_time = performance.now();
      var time = end_time - this.start_time;
      this.start_time = "";
      return time;
    },
    show: function(arr){
      var display = document.getElementById("display");
      var i;
      var len = arr.length;
      for(i = 0; i < len; i++){
        var mes = document.createElement("p");
        mes.innerHTML = arr[i].message;
        var code = document.createElement("p");
        code.innerHTML = arr[i].code;
        display.appendChild(mes);
        display.appendChild(code);
      }
    },
    hide: function(){
      var display = document.getElementById("display");
      display.innerHTML = "";
    },
    make: function(){
      var Timer = function(){
        var self = this;
        self.start_time = performance.now();
        self.end = function(){
          if(!self.start_time){
            console.log("Start time is not set.");
            return false;
          }
          return performance.now() - self.start_time + " ms";
        };
      };
      return new Timer();
    }

  };

  APP.runCode = function(code, message){
    var timer = new APP.timer.make();
    code();
    var t = timer.end();
    var codestr = JSON.stringify(
                    code.toString()
                      .replace(/.*function.*\n/, "")
                      .replace(/(?!.*\n).*/, "")
                      .replace(/\n/g, "<br>")
                      .replace(/\s/g, "&nbsp;")
                  ).replace(/["]/g,'')
                   .replace(/\\/g, '"');
    return {
      message: message + " " + t,
      code: codestr
    };
  };

  APP.runCodes = function(obj){
    APP.timer.hide();

    var codes = obj.codes,
        prepare = obj.prepare,
        clean = obj.clean,
        len = codes.length,
        results = [],
        result,
        i;
    for(i = 0; i < len; i++){
      if(prepare){
        prepare();
      }
      result = APP.runCode(codes[i].code, (i + 1 + " ") + codes[i].message);
      results.push(result);
      if(clean){
        clean();
      }
    }

    APP.timer.show(results);
  };


  document.getElementById("load_btn").addEventListener(
    "click",
    function(e){

      APP.timer.hide();
      var script = document.createElement("script");

      var src = document.getElementById("select_src").value;
      script.src = "./lib/" + src;
      document.getElementById("js_src").appendChild(script);

      script.remove();
    }
  );


})(window);