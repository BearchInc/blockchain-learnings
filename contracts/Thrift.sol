contract Thrift {
	modifier allow(address owner) {
		if (msg.sender != owner) throw;
		_
	}
}
