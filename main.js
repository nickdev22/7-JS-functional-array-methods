// question 1
const itemPrices = items.map(function (item) {
  return item.price;
});

const averagePrice = itemPrices.reduce((a, b) => a + b) / itemPrices.length;

document.querySelector(
  "#answer1"
).innerHTML = `The avergae price is $${averagePrice}`;

// question 2
const costBetween = items.filter(function (item) {
  if (item.price > 14 && item.price < 18) {
    return true;
  }
  return false;
});

const costBetweenTitle = costBetween
  .map(function (item) {
    return `<li>${item.title}</li>`;
  })
  .join("");

document.querySelector("#answer2").innerHTML = `${costBetweenTitle}`;

// question 3
const gbpItem = items.filter(function (item) {
  if (item.currency_code === "GBP") {
    return true;
  }
  return false;
});

const gbpItemTitle = gbpItem.map(function (item) {
  return `${item.title} $${item.price}`;
});

document.querySelector("#answer3").innerHTML = `${gbpItemTitle}`;

// question 4
const woodItems = items.filter(function (item) {
  if (item.materials.includes("wood")) {
    return true;
  }
  return false;
});

const woodItemsTitle = woodItems
  .map(function (item) {
    return `<li>${item.title} is made of wood.</li>`;
  })
  .join("");

document.querySelector("#answer4").innerHTML = `${woodItemsTitle}`;

// question 5
const eightMaterials = items.filter(function (item) {
  if (item.materials.length >= 8) {
    return true;
  }
  return false;
});

const eightMaterialsTitle = eightMaterials
  .map(function (item) {
    const materialList = item.materials
      .map(function (item) {
        return `<li>${item}</li>`;
      })
      .join("");
    return `${item.title} has ${item.materials.length} materials: ${materialList}`;
  })
  .join("");

document.querySelector("#answer5").innerHTML = `${eightMaterialsTitle}`;

// question 6
const sellerMade = items.filter(function (item) {
  if (item.who_made === "i_did") {
    return true;
  }
  return false;
});

document.querySelector(
  "#answer6"
).innerHTML = `${sellerMade.length} were made by their sellers`;
