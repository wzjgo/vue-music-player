const STORAGE_KEY = 'musics';

export default {

  fetchFromBe() {
    var myHeaders = new Headers();

    var myInit = {
      method: 'GET',
      headers: myHeaders,
      cache: 'default'
    };
    let origin = window.location.origin
    return fetch(`http://ddqb1zpk.bq.cloudappl.com/api/musics`, myInit)
      .then(resp => {
        let musics = resp.json()
        return musics
      })
  },
  fetch(key = STORAGE_KEY) {
    return JSON.parse(window.localStorage.getItem(key) || '[]');
  },
  save(items, key = STORAGE_KEY) {
    //window.localStorage.setItem(key, JSON.stringify(items));
  }
}
