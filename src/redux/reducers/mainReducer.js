const UPDATE_SEARCH_VAL = "UPDATE_SEARCH_VAL";

const initialState = {
  nav: [
    {
      id: 1,
      src: "kraski_amali_vnutr",
      title: "КРАСКИ И ЭМАЛИ ДЛЯ ВНУТРЕННИХ РАБОТ",
    },
    {
      id: 2,
      src: "kraski_amali_naruzh",
      title: "КРАСКИ И ЭМАЛИ ДЛЯ НАРУЖНЫХ РАБОТ",
    },
    {
      id: 3,
      src: "antiseptili_propitki",
      title: "АНТИСЕПТИКИ И ПРОПИТКИ ДЛЯ ДЕРЕВА",
    },
    { id: 4, src: "klei_germetiki", title: "КЛЕИ,ГЕРМЕТИКИ,ГИДРОИЗОЛЯЦИЯ" },
    {
      id: 5,
      src: "kraski_amali_universal",
      title: "КРАСКИ,ЭМАЛИ УНИВЕРСАЛЬНЫЕ",
    },
    { id: 6, src: "shtukaturki", title: "ШТУКАТУРКИ" },
    {
      id: 7,
      src: "rastvoriteli",
      title: "РАСТВОРИТЕЛИ, ОЧИСТИТЕЛИ, СПЕЦСРЕДСТВА",
    },
    { id: 8, src: "prom_pokritiya", title: "ПРОМЫШЛЕННЫЕ ПОКРЫТИЯ" },
    { id: 9, src: "vse_tovary", title: "ВСЕ ТОВАРЫ" },
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
};

const mainReducer = (state = initialState, action) => {
  let newState = { ...state };
  newState.content = { ...state.content };
  newState.content.searchBox = { ...state.content.searchBox };
  newState.content.searchBox.value = [...state.content.searchBox.value];

  if (action.type === "UPDATE_SEARCH_VAL") {
    newState.content.searchBox.value = action.searchMessage;
  }
  debugger;
  return newState;
};

export const updateSearchActionCreator = (text) => {
  return { type: UPDATE_SEARCH_VAL, searchMessage: text };
};

export default mainReducer;
