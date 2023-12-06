import prismaClient from "../prisma"

class ListMovieService {
    async execute() {
        const movies = await prismaClient.movie.findMany();
        return movies;
    }
}

export { ListMovieService }