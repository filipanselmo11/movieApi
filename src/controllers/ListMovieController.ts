import { FastifyRequest, FastifyReply } from "fastify";
import { ListMovieService } from "../services/ListMovieService";

class ListMovieController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const listMovieService = new ListMovieService();
        const movies = await listMovieService.execute();
        reply.send(movies);
    }
}

export { ListMovieController}