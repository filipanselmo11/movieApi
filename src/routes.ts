import {
  FastifyInstance,
  FastifyPluginOptions,
  FastifyRequest,
  FastifyReply,
} from "fastify";
import { CreateMovieController } from "./controllers/CreateMovieController";
import { ListMovieController } from "./controllers/ListMovieController";


export async function routes(fastiy: FastifyInstance, options: FastifyPluginOptions){
    fastiy.post('/movie', async(request: FastifyRequest, reply: FastifyReply)=> {
      return new CreateMovieController().handle(request, reply);
    });

    fastiy.get('/movies', async(request: FastifyRequest, reply:FastifyReply) => {
      return new ListMovieController().handle(request, reply);
    });
}