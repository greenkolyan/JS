    const basket = {
      goods: [
        {
          id_product: 123,
          product_name: "Ноутбук",
          price: 45600,
          quantity: 10
        },
        {
          id_product: 456,
          product_name: "Мышка",
          price: 1000,
          quantity: 10
        },
        {
          id_product: 234,
          product_name: "Клавиатура",
          price: 3000,
          quantity: 10
        }
      ],
      countBasketPrice() {
        return this.goods.reduce((totalPrice, cartItem) => totalPrice += cartItem.price, 0);
      }
    };

    console.log(basket.countBasketPrice());