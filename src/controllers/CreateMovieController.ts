import { FastifyRequest, FastifyReply } from "fastify";
import { CreateMovieService } from "../services/CreateMovieService";

class CreateMovieController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const { titulo, genero, ano } = request.body as { titulo: string; genero: string; ano: number };
        const movieService = new CreateMovieService();
        const movie = await movieService.execute({ titulo, genero, ano });
        reply.send(movie);
    }
}

export { CreateMovieController }