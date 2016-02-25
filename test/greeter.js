contract('Greeter', function(accounts) {
	var message = 'Well Hello There!';

	it('greets the sender with a welcome message', function(done) {
		Greeter.new(message, {from: accounts[0]}).
			then((contract) => { return contract.greet() }).
			then((greeting) => { assert.equal(message, greeting) }).
			then(done).catch(done);
	});
});
