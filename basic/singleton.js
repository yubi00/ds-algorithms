/**
 * Create an example of a JavaScript Singleton.
 * After the first object is created, it will return additional
 * references to itself
 */
//Singletons are used to create an instance of a class if it does not exist or else return the reference of the existing one
//The main purpose is to protect the object and save memory by ensuring that only one gets created per thread
// In this design pattern there would only be one instance of the class .
//This one class could be some kind of resource manager or some global lookup for values
let obj = (function () {
  let objInstance; //private variable
  function create() {
    //private function to create methods and properties
    let _isRunning = false;
    let start = () => {
      _isRunning = true;
    };

    let stop = () => {
      _isRunning = false;
    };

    let currentState = () => {
      return _isRunning;
    };

    return {
      start,
      stop,
      currentState
    };
  }
  return {
    getInstance: () => {
      //check if objecInstance exist
      if (!objInstance) {
        objInstance = create();
      }
      return objInstance;
    }
  };
})();

let obj1 = obj.getInstance();
let obj2 = obj.getInstance();
obj1.start();
console.log(obj1.currentState());

console.log(obj2.currentState());
