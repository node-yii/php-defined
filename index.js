var defined = function(identifier) {
   return (typeof identifier === "undefined") ? false : true;
}

module.exports = defined;
