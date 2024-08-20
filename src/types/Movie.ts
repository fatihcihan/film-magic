import { MovieGenre } from "./MovieGenre";

export class Movie {
    id!: number;
    title!: string;
    overview!: string;
    poster_path!: string;
    backdrop_path!: string;
    vote_average!: number;
    homepage!: string;
    release_date!: string;
    tagline!: string;
    vote_count!: number;
    budget!: number;
    runtime!: number;
    revenue!: number;
    genres!: MovieGenre[];
}