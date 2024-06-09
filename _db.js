let movies = [
    {id:'1', title: 'The Godfather', website: ['Netflix','AZMovies','SolarMovie','WatchFree']},
    {id:'2', title: 'The Shawshank Redemption', website: ['Netflix', 'WatchFree','Freevee','Vudu']},
    {id:'3', title: 'The Dark Knight', website: ['SolarMovie', 'YouTube', 'WatchFree','YesMovies','Vudu']},
    {id:'4', title: '12 Angry Men', website: ['Netflix','WatchFree','Freevee', 'YesMovies']},
    {id:'5', title: 'Schindlers List', website: ['AZMovies', 'SolarMovie', 'WatchFree']},
    {id:'6', title: 'The Lord of the Rings: The Return of the King', website: ['Netflix','SolarMovie', 'WatchFree']}
]

let authors = [
    {id: '1', name: 'Maria', verified: true},
    {id: '2', name: 'Elli', verified: false},
    {id: '3', name: 'Peaches', verified: true},
]

let reviews = [
    {id: '1', rating: 9, content:'lorem ipsum', author_id: '1', movie_id: '2'},
    {id: '2', rating: 10, content:'lorem ipsum', author_id: '2', movie_id: '1'},
    {id: '3', rating: 7, content:'lorem ipsum', author_id: '3', movie_id: '3'},
    {id: '4', rating: 5, content:'lorem ipsum', author_id: '2', movie_id: '4'},
    {id: '5', rating: 8, content:'lorem ipsum', author_id: '2', movie_id: '5'},
    {id: '6', rating: 7, content:'lorem ipsum', author_id: '1', movie_id: '2'},
    {id: '7', rating: 10, content:'lorem ipsum', author_id: '3', movie_id: '1'}
]

export default { movies, authors, reviews}