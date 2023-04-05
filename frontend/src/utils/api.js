class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;

    this.getUserInfo = this.getUserInfo.bind(this);
    this.getInitialCards = this.getInitialCards.bind(this);
    this.deleteCard = this.deleteCard.bind(this);
    this.setCardLikeStatus = this.setCardLikeStatus.bind(this);
    this.sendAvatarInfo = this.sendAvatarInfo.bind(this);
    this._getResponseData = this._getResponseData.bind(this);
  }

  _getResponseData(res) {
    if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
    return res.json();
  }

  getUserInfo() {
    const token = localStorage.getItem('token');
    return fetch(`${this._baseUrl}/users/me`, {
      headers: {
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }).then((res) => this._getResponseData(res));
  }

  getInitialCards() {
    const token = localStorage.getItem('token');
    return fetch(`${this._baseUrl}/cards`, {
      headers: {
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }).then((res) => this._getResponseData(res));
  }

  sendUserInfo(data) {
    const token = localStorage.getItem('token');
    return fetch(`${this._baseUrl}/users/me`, {
      headers: {
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      method: "PATCH",
      body: JSON.stringify({
        name: data.name,
        about: data.about,
      }),
    }).then((res) => this._getResponseData(res));
  }

  sendNewPostInfo(data) {
    const token = localStorage.getItem('token');
    return fetch(`${this._baseUrl}/cards`, {
      headers: {
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        name: data.name,
        link: data.link,
      }),
    }).then((res) => this._getResponseData(res));
  }

  deleteCard(cardId) {
    const token = localStorage.getItem('token');
    return fetch(`${this._baseUrl}/cards/${cardId}`, {
      headers: {
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      method: "DELETE",
    }).then((res) => this._getResponseData(res));
  }

  setCardLikeStatus(cardId, isAlreadyLiked) {
    const token = localStorage.getItem('token');
    if (isAlreadyLiked) {
      return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
        headers: {
          authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        method: "DELETE",
      }).then((res) => this._getResponseData(res));
    } else {
      return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
        headers: {
          authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        method: "PUT",
      }).then((res) => this._getResponseData(res));
    }
  }

  sendAvatarInfo(url) {
    const token = localStorage.getItem('token');
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      headers: {
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      method: "PATCH",
      body: JSON.stringify({
        avatar: url,
      }),
    }).then((res) => this._getResponseData(res));
  }
};

const api = new Api({
  baseUrl: "http://api.yanabonne.nomoredomains.monster",
});

export default api;
