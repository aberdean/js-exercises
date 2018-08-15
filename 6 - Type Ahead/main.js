/** Endpoint to fetch US cities, states, and population */
const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const places = [];

/** Fetch data */
fetch(endpoint).then(res => res.json())
               .then(data => places.push(...data));

/** Find places */
const find = (input, places) => {
  return places.filter(place => {
    const re = new RegExp(input, 'gi');
    return place.city.match(re) || place.state.match(re);
});
}

/** Show places that match the search term the user entered in the box */
const showMatches = (e) => {
  /** Find matches */
  const matches = find(e.target.value, places);
  const html = matches.map(place => {
    const re = new RegExp(e.target.value, 'gi');
    /** Highlight the search term */
    const cityName = place.city.replace(re, `<span class="hl">${e.target.value}</span>`);
    const stateName = place.state.replace(re, `<span class="hl">${e.target.value}</span>`);
    /** Format the population number */
    const population = Number(place.population).toLocaleString();
    return `
        <li>
          <span class="name">${cityName}, ${stateName}</span>
          <span class="population">${population}</span>
        </li>
    `;
  }).join('');
  suggestions.innerHTML = html;
}

/** Select HTML elements */
const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

/** Listen for user input */
searchInput.addEventListener('keyup', showMatches);
