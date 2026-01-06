# Movie-app
A react web application for searching movies using Open Movie Database API.

## Screenshots:
### Homepage:
![Homepage](./app%20screenshots/homepage.png)
### Movie Grid:
![Grid](./app%20screenshots/moviegrid.png)
### Movie Detail Page:
![Detail page](./app%20screenshots/detail.png)

## Tech Stack:
|Aspects|Technology Used|
|---|---|
|Frontend|React.js|
|API to fetch movie data|OMDB|
|Style|TailwindCSS|

## Setup:
- Clone the repository <br>
  ``` git clone https://github.com/CodeByAashik/Movie-app.git ```
- Navigate To the repository <br>
  ``` cd Movie-app ```
- Install the dependencies <br>
  ` npm install `
- Go to OMDB official website and generate an API key by signing up
- Setup `.env` file as: <br>
  `VITE_OMDB_API_KEY=your_OMDB_API_key`
- Spin up the dev server `npm run dev`

And it should work as simple as that. 

## Future Work:
- Implement algorithm to rank best recent movies
- A watchlist
