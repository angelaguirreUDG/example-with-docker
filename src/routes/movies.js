const { Router } = require('express')
const router = Router()
const _ = require('underscore')

const movies = require('../sample.json')

router.get('/', (req, res) => {
    res.json({data: movies})
})

router.post('/', (req, res) => {
    const id = movies.length + 1
    const { title, director, year } = req.body
    const newMovie = {id, ...req.body };
    if (id && title && director && year) {
        movies.push(newMovie)
        res.json(movies)
    } else {
        res.status(500).json({error: 'There was an error.'})
    }
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { title, director, year } = req.body;
    if (id && title && director && year) {
        _.each(movies, (movie, i) => {
            if (movie.id == id) {
                console.log("entro");
                movie.title = title
                movie.director = director
                movie.year = year
            }
        });
        res.json(movies)
    } else {
        res.status(500).json({error: 'There was an error.'})
    }
})

router.delete('/:id', (req, res) => {
    const {id} = req.params
    if (id) {
        _.each(movies, (movie, i) => {
            if (movie.id == id) {
                movies.splice(i, 1)
            }
        });
        res.json(movies)
    }
})


module.exports = router 