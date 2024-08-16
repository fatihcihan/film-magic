import { MovieGenre } from "./MovieGenre";

export class Serie {
    id!: number;
    name!: string;
    title!: string;
    tagline!: string;
    first_air_date!: string;
    last_air_date!: string;
    overview!: string;
    vote_average!: number;
    poster_path!: string;
    number_of_seasons!: number;
    popularity!: number;
    vote_count!: number;
    genres!: MovieGenre[];
}