contract Mortal {
	address owner;

	function Mortal() { owner = msg.sender; }
	function kill() { if (msg.sender == owner) suicide(owner); }
}

contract Greeter is Mortal {
	string msg;

	function Greeter(string _msg) public {
		msg = _msg;
	}

	function greet() constant returns (string) {
		return msg;
	}
}
