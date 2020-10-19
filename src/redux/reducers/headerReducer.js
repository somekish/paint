const initialState = {
  logo: {
    id: 1,
    src:
      "https://mostaql.hsoubcdn.com/uploads/201639-1469757735-Logo_Image_01.png",
    alt: "logo",
  },
  benefits: [
    {
      id: 1,
      src:
        "https://assets3.insales.ru/assets/1/1938/1386386/1586183440/alarm-clock.png",
      title: "Без выходных с 9.00 до 20.00",
      alt: "benefits",
      width: 70,
    },
    {
      id: 2,
      src:
        "https://assets3.insales.ru/assets/1/1938/1386386/1586183440/placeholder.svg",
      title: "Пункт самовывоза",
      alt: "benefits",
      width: 70,
    },
    {
      id: 3,
      src:
        "https://assets3.insales.ru/assets/1/1938/1386386/1586183440/brush.svg",
      title: "Профессиональные консультации",
      alt: "benefits",
      width: 70,
    },
  ],
  contacts: {
    id: 1,
    src:
      "https://img2.pngio.com/phone-icon-png-phone-icon-transparent-png-2000_2000.png",
    phone: "8 (495)795-76-20",
    email: "kraskivmoskve@yandex.ru",
  },
};

const headerReducer = (state = initialState, action) => {
  return state;
};

export default headerReducer;
