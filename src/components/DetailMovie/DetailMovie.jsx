import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { API_URL } from '../../services/api/apiURL';
import { axiosInstance } from '../../services/api/axiosInstance';

const DetailMovie = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [trailer, setTrailer] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axiosInstance.get(API_URL.getMovieId(id), {
                    params: {
                        api_key: import.meta.env.VITE_APP_TMDB_API_KEY,
                    },
                });
                const responseTrailer = await axiosInstance.get(API_URL.getMovieTrailer(id), {
                    params: {
                        api_key: import.meta.env.VITE_APP_TMDB_API_KEY,
                    },
                });

                // Menyimpan trailer pertama, jika ada
                if (responseTrailer.data.results.length > 0) {
                    setTrailer(responseTrailer.data.results[0]);
                } else {
                    setTrailer(null);
                }

                setMovie(response.data);
                setLoading(false);
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        };

        fetchData();
    }, [id]);

    if (loading) return <p>Loading...</p>;
    if (!movie) return <p>Movie not found</p>;

    const posterUrl = movie.poster_path
        ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
        : 'https://via.placeholder.com/500x750?text=No+Image';

    const trailerUrl = trailer ? `https://www.youtube.com/embed/${trailer.key}` : null;

    return (
        <div className="bg-gray-100">
            <div className="flex gap-5">
                {/* Bagian Trailer */}
                <div className="p-5">
                    {trailerUrl && (
                        <div className="flex flex-col justify-center items-center">
                            <iframe
                                width="1280"
                                height="720"
                                src={trailerUrl}
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className='flex justify-center item items-center'
                            ></iframe>
                        </div>
                    )}
                </div>

                {/* Bagian Poster dan Info */}
                <div className="p-5 flex flex-col mx-auto justify-center items-center">
                    <img
                        src={posterUrl}
                        alt={movie.title}
                        // className="object-cover rounded-md mb-4"
                        className="w-56 h-80 object-cover rounded-md"
                    />
                    <h2 className="text-3xl font-bold">{movie.title}</h2>
                </div>
            </div>
            <p className='bg-amber-400 text-amber-400 mt-2'>===</p>
            <div className="p-5 flex flex-col">
                <h2 className="text-3xl font-bold">{movie.title}</h2>
                <p className="mt-2 text-lg"><strong>Release Date:</strong> {movie.release_date}</p>
                {/* <p className="mt-2 text-lg"><strong>Rating:</strong> {movie.vote_average}</p> */}
                <p className="mt-2 text-lg"><strong>Movie Langueage</strong> : {movie.original_language}</p>
                <p className="mt-2 text-lg"><strong>Rating</strong> : ⭐⭐⭐⭐ ( {movie.vote_average}/ 10 ) </p>
                <p className="mt-2 text-lg"><strong>Description</strong> : {movie.overview}</p>
            </div>
        </div>
    );
};

export default DetailMovie;
