function findProductPrice(products, name) {
  // Your code here
  let result = -1;
  let left = 0;
  let right = products.length - 1;
  while (left <= right) {
    let mid = Math.ceil((left + right) / 2);
    if (products[mid].name < name) {
      left = mid + 1;
    } else if (products[mid].name > name) {
      right = mid - 1;
    } else {
      result = products[mid].price;
      return result;
    }
  }
  return result;
}

// Test case
const products = [
  { name: "Apple", price: 1.2 },
  { name: "Banana", price: 0.8 },
  { name: "Cherry", price: 2.5 },
];

console.log(findProductPrice(products, "Banana")); // Output: 0.8
console.log(findProductPrice(products, "Durian")); // Output: -1
