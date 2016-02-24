contract('Greeter', function(accounts) {
	var expectedGreeting = 'Well Hello There!';

	it('greets the sender with a welcome message', function(done) {
		//var Contract = Greeter.deployed();
		var greeter = Greeter.deployed();

		greeter.greet.call().then(function(greeting) {
			assert.equal(expectedGreeting, greeting);
		}).then(done).catch(done);
	});
});
