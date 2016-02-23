contract('Greeter', function(accounts) {
  it("should assert true", function(done) {
    var greeter = Greeter.at(Greeter.deployed_address);
    assert.isTrue(true);
    done();
  });
});
