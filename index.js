import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

// db
import db from './_db.js'
// types
import { typeDefs } from "./schema.js"


const resolvers = {
    Query: {
        movies() {
            return db.movies
        },
        movie(_,args) {
            return db.movies.find((movie) => movie.id === args.id)
        },
        authors() {
            return db.authors
        },
        author(_,args) {
            return db.authors.find((author) => author.id === args.id)
        },
        reviews() {
            return db.reviews 
        }, 
        review(_,args) {
            return db.reviews.find((review) => review.id === args.id)
        }
     },
     Movie: {
        reviews(parent) {
            return db.reviews.filter((r) => r.movie_id === parent.id)
        }
     },
     Author: {
        reviews(parent) {
            return db.reviews.filter((r) => r.author_id === parent.id)
        }
     },
     Review: {
        author(parent) {
            return db.authors.find((a) => a.id === parent.author_id)
        },
        movie(parent) {
            return db.movies.find((g) => g.id === parent.movie_id)
        }
     },
     Mutation: {
        deleteMovie(_, args) {
            db.movies = db.movies.filter((g) => g.id !== args.id)
            return db.movies
        },
        addMovie(_,args) {
            let movie = {
                ...args.movie,
                id: Math.floor(Math.random()* 10000).toString()
            }
            db.movies.push(movie)

            return movie
        },
        updateMovie(_, args) {
            db.movies = db.movies.map((g) => {
                if (g.id === args.id) {
                    return {...g, ...args.edits}
                }
                return g
            })
            return db.movies.find((g) => g.id === args.id)
        }
     }

}




// server setup
const server = new ApolloServer({
    typeDefs, 
    resolvers
})


const {url} = await startStandaloneServer(server, {
    listen: {port: 4000}
})

console.log('Server ready at port', {url})



