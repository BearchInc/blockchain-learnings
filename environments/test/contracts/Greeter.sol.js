"use strict";

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var factory = function factory(Pudding) {
  // Inherit from Pudding. The dependency on Babel sucks, but it's
  // the easiest way to extend a Babel-based class. Note that the
  // resulting .js file does not have a dependency on Babel.

  var Greeter = (function (_Pudding) {
    _inherits(Greeter, _Pudding);

    function Greeter() {
      _classCallCheck(this, Greeter);

      _get(Object.getPrototypeOf(Greeter.prototype), "constructor", this).apply(this, arguments);
    }

    return Greeter;
  })(Pudding);

  ;

  // Set up specific data for this class.
  Greeter.abi = [{ "constant": false, "inputs": [], "name": "kill", "outputs": [], "type": "function" }, { "constant": true, "inputs": [], "name": "greet", "outputs": [{ "name": "", "type": "string" }], "type": "function" }, { "inputs": [], "type": "constructor" }];
  Greeter.binary = "606060405260008054600160a060020a0319163317905560e7806100236000396000f3606060405260e060020a600035046341c0e1b581146024578063cfae3217146064575b005b60226000543373ffffffffffffffffffffffffffffffffffffffff9081169116141560e55760005473ffffffffffffffffffffffffffffffffffffffff16ff5b600060605260c0604052601160809081527f57656c6c2048656c6c6f2054686572652100000000000000000000000000000060a052602060c0908152601160e081905281906101009060a09080838184600060046012f1505081516effffffffffffffffffffffffffffff1916909152505060405161012081900392509050f35b56";

  if ("0xbdc760d1ee695f6f68935652b69f2cb5e13cfd73" != "") {
    Greeter.address = "0xbdc760d1ee695f6f68935652b69f2cb5e13cfd73";

    // Backward compatibility; Deprecated.
    Greeter.deployed_address = "0xbdc760d1ee695f6f68935652b69f2cb5e13cfd73";
  }

  Greeter.generated_with = "1.0.3";
  Greeter.contract_name = "Greeter";

  return Greeter;
};

// Nicety for Node.
factory.load = factory;

if (typeof module != "undefined") {
  module.exports = factory;
} else {
  // There will only be one version of Pudding in the browser,
  // and we can use that.
  window.Greeter = factory;
}