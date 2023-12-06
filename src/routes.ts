import {
  FastifyInstance,
  FastifyPluginOptions,
  FastifyRequest,
  FastifyReply,
} from "fastify";
import { CreateMovieController } from "./controllers/CreateMovieController";
import { ListMovieController } from "./controllers/ListMovieController";
import { DeleteMovieController } from "./controllers/DeleteMovieController";


export async function routes(fastiy: FastifyInstance, options: FastifyPluginOptions){
    fastiy.post('/movie', async(request: FastifyRequest, reply: FastifyReply)=> {
      return new CreateMovieController().handle(request, reply);
    });

    fastiy.get('/movies', async(request: FastifyRequest, reply:FastifyReply) => {
      return new ListMovieController().handle(request, reply);
    });

    fastiy.delete('/movie', async(request: FastifyRequest, reply: FastifyReply) => {
      return new DeleteMovieController().handle(request, reply);
    });
}