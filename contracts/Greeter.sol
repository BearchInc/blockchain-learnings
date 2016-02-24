contract Mortal {
	address owner;

	function Mortal() { owner = msg.sender; }
	function kill() { if (msg.sender == owner) suicide(owner); }
}

contract Greeter is Mortal {
	function Greeter() public {}

	function greet() constant returns (string) {
		return 'Well Hello There!';
	}
}
