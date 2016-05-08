var defined = function(identifier) {
   if(typeof identifier !== "string") {
      return false;
   }
   return (typeof global[identifier] === "undefined") ? false : true;
}

var define = function(identifier, value) {
   if((typeof identifier !== "string") || defined(identifier)) {
      return false;
   }
   // to simulate a constant we create a read-only property of "global" object
   Object.defineProperty(global, identifier, {
      value: value,
      writable: false,
   });
   return true;
}

module.exports = {
   defined: defined,
   define: define,
};
