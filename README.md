# CinemaClub

This is a movie site. I'm making this simple website using React and the API.
I use kinopoiskapiunofficial https://kinopoiskapiunofficial.tech/. If you want to use or see my site on your localhost, you need a rep clone and configure API

You need to make a few steps 
1. Make `git clone` in you directory
2. cd in you directory
3. `npm install` or  `yarn install`
4. `npm start`

After these steps you will get the CinemaClub homepage in your browser

## API
You now have a home page without movies. To be able to use the search and watch movie pages, you need to configure the API.
1. You need to register https://kinopoiskapiunofficial.tech/
2. Get an API key
3. Create a `.env.local` file in your directory.
4. Make a variable in .`env.local` `REACT_APP_KINOPOISK_API_UNOFFICIAL_KEY = your key`
   I am using several variables `REACT_APP_KINOPOISK_API_UNOFFICIAL_KEY_2` and `_1` and `_3` and `_4` in `.env.local` file

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run lint:fix`

Fix eslint in js and jsx files