var data = require('../products.json');

function getItems (input) {
  return input.items
}
var filteredBrand = []
function getItemsByBrand (input, brandName) {
  for (var i = 0; i < input.length; i++) {
    if (input[i].product.brand === brandName) {
      filteredBrand.push(input[i])
      // console.log(data.items[i])
    }
  }
  return filteredBrand
}
console.log(getItemsByBrand(getItems(data), 'Nikon'))
// getItemsByBrand(getItems(data), 'Canon')
