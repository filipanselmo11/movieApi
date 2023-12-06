import prismaClient from "../prisma";

interface DeleteMovieProps {
    id: number;
}

class DeleteMovieService {
    async execute({ id }: DeleteMovieProps) {
        if (!id) {
            throw new Error("Erro");
        }

        const findMovie = await prismaClient.movie.findFirst({
            where:{
                id: id,
            },
        });

        if (!findMovie) {
            throw new Error("Filme não encontrado");
        }

        await prismaClient.movie.delete({
            where:{
                id: findMovie.id,
            },
        });

        return {
            message: "Filme deletado com sucesso"
        }
    }
}

export { DeleteMovieService };