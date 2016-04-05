import fetch from 'isomorphic-fetch';
import config from 'config';

export function fetchGalleries() {
  const headers = {
    'Content-Type': 'application/json',
  };

  return fetch(`http://${config.apiUrl}/menu`, {
    method: 'GET',
    headers: headers,
  }).then(res => {
    return res.json();
  });
}

export function fetchImages(gallery) {
  const headers = {
    'Content-Type': 'application/json',
  };

  return fetch(`http://${config.apiUrl}/` + gallery, {
    method: 'GET',
    headers: headers,
  }).then(res => {
    return res.json();
  });
}

