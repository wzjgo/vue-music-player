const STORAGE_KEY = 'musics';

export default {

  fetchFromBe() {
    debugger
    var myHeaders = new Headers();

    var myInit = {
      method: 'GET',
      headers: myHeaders,
      cache: 'default'
    };
    return fetch(' http://127.0.0.1:8081/musics', myInit)
      .then(resp => {
        return resp.json()
      })
  },
  fetch(key = STORAGE_KEY) {
    return JSON.parse(window.localStorage.getItem(key) || '[]');
  },
  save(items, key = STORAGE_KEY) {
    window.localStorage.setItem(key, JSON.stringify(items));
  }
}
