import * as types from "./actionTypes";

const apiUrl = "https://gateway.marvel.com:443/v1/public/characters";
const apiUrlComics = "https://gateway.marvel.com:443/v1/public";

export function recieveCharacters(json) {
  return { type: types.RECIEVE_CHARACTERS, characters: json.data.results };
}

export function fetchCharacters() {
  return dispatch => {
    return fetch(
      apiUrl +
        "?apikey=a61854b19bc167f88435779e1dc4c200&hash=340ace023ca8750b03a3d527a0563380&ts=1&orderBy=name&limit=100",
      {
        method: "GET",
        mode: "cors",
        params: {
          apikey: "a61854b19bc167f88435779e1dc4c200",
          ts: "1",
          hash: "340ace023ca8750b03a3d527a0563380"
        },
        headers: {
          Accept: "*/*"
        }
      }
    )
      .then(response => response.json())
      .then(json => dispatch(recieveCharacters(json)))
      .catch(err => {
        dispatch({ type: "FETCH_CHARACTERS_REJECTED", payload: err });
      });
  };
}

export function recieveCharactersComics(json) {
  return { type: types.RECIEVE_CHARACTERS_COMICS, comics: json.data.results };
}

export function fetchCharactersComics(id) {
  return dispatch => {
    return fetch(
      apiUrl +
        `/${id}/comics?apikey=a61854b19bc167f88435779e1dc4c200&hash=340ace023ca8750b03a3d527a0563380&ts=1&orderBy=issueNumber&limit=20`,
      {
        method: "GET",
        mode: "cors",
        params: {
          apikey: "a61854b19bc167f88435779e1dc4c200",
          ts: "1",
          hash: "340ace023ca8750b03a3d527a0563380"
        },
        headers: {
          Accept: "*/*"
        }
      }
    )
      .then(response => response.json())
      .then(json => dispatch(recieveCharactersComics(json)))
      .catch(err => {
        dispatch({ type: "FETCH_CHARACTERS_COMICS_REJECTED", payload: err });
      });
  };
}

export function recieveCharactersStories(json) {
  return { type: types.RECIEVE_CHARACTERS_STORIES, stories: json.data.results };
}

export function fetchCharactersStories(id) {
  return dispatch => {
    return fetch(
      apiUrl +
        `/${id}/stories?apikey=a61854b19bc167f88435779e1dc4c200&hash=340ace023ca8750b03a3d527a0563380&ts=1&limit=50`,
      {
        method: "GET",
        mode: "cors",
        params: {
          apikey: "a61854b19bc167f88435779e1dc4c200",
          ts: "1",
          hash: "340ace023ca8750b03a3d527a0563380"
        },
        headers: {
          Accept: "*/*"
        }
      }
    )
      .then(response => response.json())
      .then(json => dispatch(recieveCharactersStories(json)))
      .catch(err => {
        dispatch({ type: "FETCH_CHARACTERS_COMICS_REJECTED", payload: err });
      });
  };
}

export function recieveAllComics(json) {
  return { type: types.RECIEVE_ALL_COMICS, allComics: json.data.results };
}

export function fetchAllComics() {
  return dispatch => {
    return fetch(
      apiUrlComics +
        `/comics?apikey=a61854b19bc167f88435779e1dc4c200&hash=340ace023ca8750b03a3d527a0563380&ts=1&limit=100`,
      {
        method: "GET",
        mode: "cors",
        params: {
          apikey: "a61854b19bc167f88435779e1dc4c200",
          ts: "1",
          hash: "340ace023ca8750b03a3d527a0563380"
        },
        headers: {
          Accept: "*/*"
        }
      }
    )
      .then(response => response.json())
      .then(json => dispatch(recieveAllComics(json)))
      .catch(err => {
        dispatch({ type: "FETCH_ALL_COMICS_REJECTED", payload: err });
      });
  };
}
