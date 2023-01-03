const priceCheck = (productNames, productPrices, productSold, soldPrice) => {
  let errors = 0;
  const productsPricesDict = {};

  productNames.forEach((prodName, i) => {
    productsPricesDict[prodName] = productPrices[i];
  });

  productSold.forEach((prodSoldName, i) => {
    const correctPrice = productsPricesDict[prodSoldName];

    if (correctPrice !== soldPrice[i]) {
      errors++;
    }
  });

  return errors;
};

module.exports = priceCheck;
