import searchReducer from "./search_reducer";

let store = {
  _state: {
    header: {
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
    },
    main: {
      nav: [
        { id: 1, src: "", title: "КРАСКИ И ЭМАЛИ ДЛЯ ВНУТРЕННИХ РАБОТ" },
        { id: 2, src: "", title: "КРАСКИ И ЭМАЛИ ДЛЯ НАРУЖНЫХ РАБОТ" },
        { id: 3, src: "", title: "АНТИСЕПТИКИ И ПРОПИТКИ ДЛЯ ДЕРЕВА" },
        { id: 4, src: "", title: "КЛЕИ,ГЕРМЕТИКИ,ГИДРОИЗОЛЯЦИЯ" },
        { id: 5, src: "", title: "КРАСКИ,ЭМАЛИ УНИВЕРСАЛЬНЫЕ" },
        { id: 6, src: "", title: "ШТУКАТУРКИ" },
        { id: 7, src: "", title: "РАСТВОРИТЕЛИ, ОЧИСТИТЕЛИ, СПЕЦСРЕДСТВА" },
        { id: 8, src: "", title: "ПРОМЫШЛЕННЫЕ ПОКРЫТИЯ" },
      ],
      content: {
        searchBox: {
          placeholder: "Поиск",
          value: "",
        },
        promo: [
          {
            id: 1,
            src:
              "https://static-ru.insales.ru/files/1/1819/10110747/original/%D0%91%D0%B0%D0%BD%D0%BD%D0%B5%D1%80_%D0%B2%D0%B5%D1%80%D0%B5%D1%81.jpg",
            alt: "promo1",
          },
        ],
        benefits: [
          {
            id: 1,
            src:
              "https://static-ru.insales.ru/files/1/25/4341785/original/benefit-1.png",
            title: "Быстрая доставка",
            alt: "pics",
          },
          {
            id: 2,
            src:
              "https://static-ru.insales.ru/files/1/26/4341786/original/benefit-2.png",
            title: "Выгодные акции",
            alt: "pics",
          },
          {
            id: 3,
            src:
              "https://static-ru.insales.ru/files/1/27/4341787/original/benefit-3.png",
            title: "Гарантия качества",
            alt: "pics",
          },
        ],
        companies: [
          {
            id: 1,
            src:
              "https://static-ru.insales.ru/images/collections/1/7126/1899478/medium_finncolor.jpg",
            title: "FINNCOLOR",
            alt: "componies",
          },
          {
            id: 2,
            src:
              "https://static-ru.insales.ru/images/collections/1/7130/1899482/medium_logo-tikkurila.png",
            title: "TIKKURILLA",
            alt: "componies",
          },
          {
            id: 3,
            src:
              "https://static-ru.insales.ru/images/collections/1/7128/1899480/medium_teks.jpg",
            title: "TEKC",
            alt: "componies",
          },
          {
            id: 4,
            src:
              "https://static-ru.insales.ru/images/collections/1/7129/1899481/medium_belinka.png",
            title: "BELINKA",
            alt: "componies",
          },
          {
            id: 5,
            src:
              "https://static-ru.insales.ru/images/collections/1/7131/1899483/medium_518.jpg",
            title: "DECOTECH",
            alt: "componies",
          },
        ],
        menu: [
          { id: "1", title: "Информация" },
          { id: "2", title: "Компания" },
          { id: "3", title: "Помощь покупателю" },
        ],
      },
    },
    footer: [
      { id: 1, title: "Информация" },
      { id: 2, title: "Контакты" },
      { id: 3, title: "Адрес пункта самовывоза" },
      { id: 4, title: "Гарантии" },
      { id: 5, title: "О компании" },
      { id: 6, title: "Продажа юр. лицам" },
      { id: 7, title: "Оплата" },
      { id: 8, title: "Доставка" },
      { id: 9, title: "Обмен и возврат" },
    ],
  },
  getState() {
    return this._state;
  },
  _callSubscriber() {
    console.log("go hard");
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    this._state.main.content.searchBox = searchReducer(
      this._state.main.content.searchBox,
      action
    );
    this._callSubscriber(this._state);
  },
};
window.store = store;
export default store;
