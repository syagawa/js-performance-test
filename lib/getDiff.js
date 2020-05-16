(function(global){

  const APP = global.APP;

  const title = "getDiff";

  const getDiffFunc = function(){

    const code1 = {
      code: function(){
        const arr1 = [];
        const arr2 = [];
        const max = 10000;

        for(let i = 0; i < max; i++){
          arr1.push(i);
          arr2.push(i + max);
        }

        let counter = 0;
        const set2 = new Set(arr2);
        const diff = arr1.filter((elm) => {
          counter++;
          return !set2.has(elm);
        });
        // console.log(diff);
        // console.log(counter);
      },
      message: title + " Array.filter & Set.has"
    };

    const code2 = {
      code: function(){
        const arr1 = [];
        const arr2 = [];
        const max = 10000;

        for(let i = 0; i < max; i++){
          arr1.push(i);
          arr2.push(i + max);
        }

        let counter = 0;
        const diff = arr1.filter((elm) => {
          counter++;
          return !arr2.includes(elm);
        });
        // console.log(diff);
        // console.log(counter);
      },
      message: title + " Array.filter & Array.includes"
    };


    const code3 = {
      code: function(){
        const arr1 = [];
        const arr2 = [];
        const max = 10000;

        for(let i = 0; i < max; i++){
          arr1.push(i);
          arr2.push(i + max);
        }

        let counter = 0;
        const diff = arr1.filter((elm) => {
          counter++;
          return arr2.indexOf(elm) < 0;
        });
        // console.log(diff);
        // console.log(counter);
      },
      message: title + " Array.filter & Array.indexOf"
    };

    const code4 = {
      code: function(){
        const arr1 = [];
        const arr2 = [];
        const max = 10000;

        for(let i = 0; i < max; i++){
          arr1.push(i);
          arr2.push(i + max);
        }

        let counter = 0;
        const diff = [];
        for(let i = 0; i < arr1.length; i++){
          const a1 = arr1[i];
          if(arr2.indexOf(a1) < 0){
            diff.push(a1);
          }
          counter++
        }
        // console.log(diff);
        // console.log(counter);
      },
      message: title + " for & Array.indexOf"
    };


    const code5 = {
      code: function(){
        const arr1 = [];
        const arr2 = [];
        const max = 10000;

        for(let i = 0; i < max; i++){
          arr1.push(i);
          arr2.push(i + max);
        }

        let counter = 0;
        const diff = [];
        for(let i = 0; i < arr1.length; i++){
          const a1 = arr1[i];
          let exists = false;
          for(let j = 0; j < arr2.length; j++){
            counter++
            const a2 = arr2[j];
            if(a2 === a1){
              exists = true;
              break;
            }
          }
          if(!exists){
            diff.push(a1);
          }
        }
        // console.log(diff);
        // console.log(counter);
      },
      message: title + " for x 2"
    };

    const code6 = {
      code: function(){
        const arr1 = [];
        const arr2 = [];
        const max = 10000;

        for(let i = 0; i < max; i++){
          arr1.push(i);
          arr2.push(i + max);
        }

        let counter = 0;
        const o2 ={};
        for(let i = 0; i < arr2.length; i++){
          o2[arr2[i]] = true;
          counter++;
        }
        const diff = arr1.filter((elm) => {
          counter++;
          return !o2[elm];
        });
        // console.log(diff);
        // console.log(counter);
      },
      message: title + " Array.filter & Object"
    };


    APP.runCodes({codes:[code1, code2, code3, code4, code5, code6]});

  };
  getDiffFunc();
})(window);