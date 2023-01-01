// Practicing closures

// https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/get-started/apB.md#appendix-b-practice-practice-practice

function range(start,end) {

    function rangeResult(s, e) {
      let rangeArray = [];

      if (e < s) {
        return rangeArray;
      }
      
      for (let i = s; i <= e; i++){
        rangeArray.push(i)
      }

      return rangeArray;
    }
  
    if(!!end || end == 0){
      return rangeResult(start, end);
    } else {
      return function rangeEnd(ending) {        
        return rangeResult(start, ending);
      }
      
    }
}

range(3,3);    // [3]
range(3,8);    // [3,4,5,6,7,8]
range(3,0);    // []

var start3 = range(3);
var start4 = range(4);

start3(3);     // [3]
start3(8);     // [3,4,5,6,7,8]
start3(0);     // []

start4(6);     // [4,5,6]


// console.log('result:', start4(6))
