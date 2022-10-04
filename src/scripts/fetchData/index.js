import axios from 'axios';

async function getDataFilm(id) {
    const film = await axios.get(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}`, {
        headers: getHeaders(),

    }).then(res => res.data)
        .then(res => res)
        .catch(res => console.error(res));

    const screen = await axios.get(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}/images`, {
        headers: getHeaders(),

        params: {
            type: 'SCREENSHOT',
            page: 1,
        },
    }).then(res => res.data)
        .then(res => res.items)
        .catch(res => console.error(res));

    const similars = await axios.get(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}/similars`, {
        headers: getHeaders(),

    }).then(res => res.data)
        .then(res => res.items)
        .catch(res => console.error(res));


    return {film, screen, similars};
}

async function getDataSequels(id) {
    return await axios.get(`https://kinopoiskapiunofficial.tech/api/v2.1/films/${id}/sequels_and_prequels`, {
        headers: getHeaders(),
    }).then(res => res.data)
        .then(res => res)
        .catch(res => console.error(res));
}

async function getDataFilms(params) {
    return await axios.get(`https://kinopoiskapiunofficial.tech/api/v2.2/films`, {
        headers: getHeaders(),
        params: {...params}
    }).then(res => res)
        .catch(res => console.error(res));
}

function getHeaders() {
    return {
        'X-API-KEY': process.env.REACT_APP_KINOPOISK_API_UNOFFICIAL_KEY_2,
        'Content-Type': 'application/json',
    };
}

export { getDataFilm, getDataSequels, getDataFilms };
