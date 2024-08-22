class ThirdPartyApi {
  constructor({ urlBase, api_key }) {
    this._urlBase = urlBase;
    this._api_key = api_key;
    this._date = new Date();

    //Codigo para dar formato a fecha actual
    this._currentDate = `${this._date.getFullYear()}-${
      this._date.getMonth() + 1
    }-${this._date.getDate()}`;

    //Codigo para dar formato 7 días atrás de la fecha actual
    let date2 = new Date(this._date);
    date2.setDate(date2.getDate() - 7);
    this._sevenDaysAgo = `${date2.getFullYear()}-${
      date2.getMonth() + 1
    }-${date2.getDate()}`;
  }

  getCards(topic) {
    return fetch(
      `${this._urlBase}?q=${topic}&from=${this._sevenDaysAgo}&to=${this._currentDate}&sortBy=popularity&apiKey=${this._api_key}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      }
    );
  }
}

const api = new ThirdPartyApi({
  urlBase: 'https://news.desarrollointerno.com/v2/everything',
  api_key: '73f5c381034b4392ac1b980d04a0c9d2',
});

export default api;
