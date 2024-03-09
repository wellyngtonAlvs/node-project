import { fastify } from 'fastify'
import { DatabaseMemory } from './database-memory.js'

const server = fastify()

const database = new DatabaseMemory()

server.post('/videos', (request, reply) => {
    const {title, description, duracion} = request.body

    database.create({
        title,
        description,
        duracion,
    })

    return reply.status(201).send()
} )

server.get('/videos', (request) => {
    const search = request.query.search

    const videos = database.list(search)

    return videos
} )

server.put('/videos/:id', (request, reply) => {
    const videoId = request.params.id
    const {title, description, duracion} = request.body

    database.update(videoId, {
        title,
        description,
        duracion,
    })

    return reply.status(204).send()

} )

server.delete('/videos/:id', (request, reply) => {
    const videoId = request.params.id

    database.update(videoId)
    
    return reply.status(204).send()
} )

server.listen({
    port: 3333,
})
