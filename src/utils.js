function getRandom(min, max) {
   //return Math.round((Math.random() * 100000)) % (max + 1)
   var random = Math.random();
   if (this.randomSeed)
      random = (random + this.randomSeed) / 2
   if (min >= max)
      error('Bad range for random number generator');
   return Math.floor(Math.random() * (max - min + 1)) + min;
}

function range(start, end, step) {

}

function charRange(start, end) {
   var ret = [];
   for (var i = start.charCodeAt(); i <= end.charCodeAt(); i++)
      ret.push(String.fromCharCode(i));
   return ret;
}

function filter(lst, test) {
   var ret = [];
   for (x in lst) {
      if (test(lst[x]))
         ret.push(lst[x]);
   }
   return ret;
}
function map(lst, f) {
   var ret = [];
   for (x in lst)
      ret.push(f(lst[x]));
   return ret;
}

function _Utils(randomSeed) {
   if (randomSeed == undefined)
      this.randomSeed = null;
   else {
      while (randomSeed > 1)
         randomSeed /= 10;
      this.randomSeed = randomSeed;
   }
}

function isStr(str) {
   return typeof str == 'string' || str instanceof String;
}

_Utils.prototype.getRandom = getRandom;
_Utils.prototype.range = range;
_Utils.prototype.charRange = charRange;
_Utils.prototype.filter = filter;
_Utils.prototype.map = map;
_Utils.prototype.isStr = isStr;

var Utils = new _Utils(); //TODO: we can't pass stuff this way

(function () {
   var root = this;
   var _ = new Object();
   var isNode = false;
   if (typeof module !== 'undefined' && module.exports) {
      //module.exports.Utils = Utils;
      module.exports = Utils;
      root.Utils = Utils;
      isNode = true;
   }
   else
      root.Utils = Utils;
})();