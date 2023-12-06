import prismaClient from "../prisma";

interface CreateMovieProps {
    titulo: string;
    genero: string;
    ano: number;
}

class CreateMovieService {
    async execute({ titulo, genero, ano }: CreateMovieProps) {
        if (!titulo || !genero || !ano) {
            throw new Error("Preencha todos os campos");
        }

        const movie = await prismaClient.movie.create({
            data: {
                titulo,
                genero,
                ano,
            },
        });

        return movie;
    }
}


export { CreateMovieService}