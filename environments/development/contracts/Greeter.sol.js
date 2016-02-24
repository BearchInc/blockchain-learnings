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
  Greeter.abi = [{ "constant": false, "inputs": [], "name": "kill", "outputs": [], "type": "function" }, { "constant": true, "inputs": [], "name": "greet", "outputs": [{ "name": "", "type": "string" }], "type": "function" }, { "inputs": [{ "name": "_greeting", "type": "string" }], "type": "constructor" }];
  Greeter.binary = "606060405260405161023e38038061023e8339810160405280510160008054600160a060020a031916331790558060016000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10609f57805160ff19168380011785555b50608e9291505b8082111560cc57600081558301607d565b50505061016e806100d06000396000f35b828001600101855582156076579182015b82811115607657825182600050559160200191906001019060b0565b509056606060405260e060020a600035046341c0e1b58114610026578063cfae321714610068575b005b6100246000543373ffffffffffffffffffffffffffffffffffffffff908116911614156101375760005473ffffffffffffffffffffffffffffffffffffffff16ff5b6100c9600060609081526001805460a06020601f6002600019610100868816150201909416939093049283018190040281016040526080828152929190828280156101645780601f1061013957610100808354040283529160200191610164565b60405180806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600302600f01f150905090810190601f1680156101295780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b565b820191906000526020600020905b81548152906001019060200180831161014757829003601f168201915b505050505090509056";

  if ("0x4a5d663b2f05a12f91631d648d0e88aedbac0ef6" != "") {
    Greeter.address = "0x4a5d663b2f05a12f91631d648d0e88aedbac0ef6";

    // Backward compatibility; Deprecated.
    Greeter.deployed_address = "0x4a5d663b2f05a12f91631d648d0e88aedbac0ef6";
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