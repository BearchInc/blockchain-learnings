import 'Thrift';

contract Product is Thrift {
	address public owner;
	uint public price;

	function Product(uint _price) {
		owner = msg.sender;
		price = _price;
	}

	function setPrice(uint newPrice) allow(owner) {
		price = newPrice;
	}
}
