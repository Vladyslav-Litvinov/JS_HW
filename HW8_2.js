let services = {
    "Cтрижка": "60 грн",
    "Cтрижка під машинку": "25 грн",
    "Гоління": "80 грн",
    "Небезпечне гоління": "60 грн",
    "Миття голови": "100 грн",
    "Розбити скло": "1500 грн"
  };
  function price() {
    let totalPrice = 0;
    for (let service in services) {
      totalPrice += parseFloat(services[service]);
    }
    return totalPrice;
  }
  function minPrice() {
    let minPrice = Infinity;
    for (let service in services) {
      if (!isNaN(parseFloat(services[service]))) {
        minPrice = Math.min(minPrice, parseFloat(services[service]));
      }
    }
    return minPrice;
  }
  function maxPrice() {
    let maxPrice = -Infinity;
    for (let service in services) {
      if (!isNaN(parseFloat(services[service]))) {
        maxPrice = Math.max(maxPrice, parseFloat(services[service]));
      }
    }
    if (isNaN(maxPrice)) {
      maxPrice = 0;
    }
    return maxPrice;
  }
  console.log(price());
  console.log(minPrice());
  console.log(maxPrice()); 