contract('Product', (accounts) => {
  var price = 20
  , owner = accounts[0]

  it("properly sets the product data upon creation", () => {
    return Product.new(price, { from: owner }).then((contract) => {
      return Promise.all([contract.owner.call(), contract.price.call()]).then((data) => {
        assert.equal(data[0], owner)
        assert.equal(data[1], price)
      })
    })
  })

  it("only allows the owner to set the product's price", () => {
    var newPrice = 30

    return Product.new(price, { from: owner }).then((contract) => {
      contract.setPrice(newPrice).
        then(contract.price.call).
        then((contractPrice) => assert.equal(contractPrice, newPrice))
    })
  })
})
