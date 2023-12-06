import { FastifyRequest, FastifyReply } from "fastify";
import { DeleteMovieService } from "../services/DeleteMovieService";

class DeleteMovieController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const { id } = request.query as { id: number };
        const deleteMovieService = new DeleteMovieService();
        const movie = await deleteMovieService.execute({ id });
        reply.send(movie);
    }
}

export { DeleteMovieController }