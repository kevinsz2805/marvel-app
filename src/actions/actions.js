import * as types from './actionTypes';

function api() {
  return 'https://gateway.marvel.com:443/v1/public/characters?apikey=a61854b19bc167f88435779e1dc4c200&hash=340ace023ca8750b03a3d527a0563380&ts=1&orderBy=name';
}

export function recieveCharacters(json) {
  return { type: types.RECIEVE_CHARACTERS, characters: json.data.results };
}

export function fetchCharacters() {
  return dispatch => {
    return fetch(api(), {
      method: 'GET',
      mode: 'cors',
      params: {
        apikey: 'a61854b19bc167f88435779e1dc4c200',
        ts: '1',
        hash: '340ace023ca8750b03a3d527a0563380'
      },
      headers: {
        Accept: '*/*'
      }
    })
      .then(response => response.json())
      .then(json => dispatch(recieveCharacters(json)))
      .catch(err => {
        dispatch({ type: 'FETCH_CHARACTERS_REJECTED', payload: err });
      });
  };
}

export function recieveCharactersComics(json) {
  //console.log('json', json);
  return { type: types.RECIEVE_CHARACTERS_COMICS, comics: json.data.results };
}

export function fetchCharactersComics(id) {
  return dispatch => {
    return fetch(
      `https://gateway.marvel.com:443/v1/public/characters/${id}/comics?apikey=a61854b19bc167f88435779e1dc4c200&hash=340ace023ca8750b03a3d527a0563380&ts=1&orderBy=issueNumber`,
      {
        method: 'GET',
        mode: 'cors',
        params: {
          apikey: 'a61854b19bc167f88435779e1dc4c200',
          ts: '1',
          hash: '340ace023ca8750b03a3d527a0563380'
        },
        headers: {
          Accept: '*/*'
        }
      }
    )
      .then(response => response.json())
      .then(json => dispatch(recieveCharactersComics(json)))
      .catch(err => {
        dispatch({ type: 'FETCH_CHARACTERS_COMICS_REJECTED', payload: err });
      });
  };
}

export function recieveCharactersStories(json) {
  //console.log('json', json);
  return { type: types.RECIEVE_CHARACTERS_STORIES, stories: json.data.results };
}

export function fetchCharactersStories(id) {
  return dispatch => {
    return fetch(
      `https://gateway.marvel.com:443/v1/public/characters/${id}/stories?apikey=a61854b19bc167f88435779e1dc4c200&hash=340ace023ca8750b03a3d527a0563380&ts=1`,
      {
        method: 'GET',
        mode: 'cors',
        params: {
          apikey: 'a61854b19bc167f88435779e1dc4c200',
          ts: '1',
          hash: '340ace023ca8750b03a3d527a0563380'
        },
        headers: {
          Accept: '*/*'
        }
      }
    )
      .then(response => response.json())
      .then(json => dispatch(recieveCharactersStories(json)))
      .catch(err => {
        dispatch({ type: 'FETCH_CHARACTERS_COMICS_REJECTED', payload: err });
      });
  };
}
