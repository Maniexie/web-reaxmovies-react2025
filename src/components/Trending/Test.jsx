import React, { useEffect, useState } from "react";
import { fetchMovies } from "./apiService";

const Movies = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMoviesData = async () => {
            try {
                const moviesData = await fetchMovies();
                setMovies(moviesData);
            } catch (error) {
                console.error("Error fetching movies:", error);
            }
        };

        fetchMoviesData();
    }, []); // Empty dependency array ensures this runs once when the component mounts

    return (
        <div>
            <h1>Popular Movies</h1>
            {movies.length === 0 ? (
                <p>Loading...</p>
            ) : (
                movies.map((movie) => (
                    <div key={movie.id}>
                        <h2>{movie.title}</h2>
                        <p>{movie.overview}</p>
                    </div>
                ))
            )}
        </div>
    );
};

export default Movies;
