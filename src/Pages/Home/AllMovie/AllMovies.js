import React, { useEffect, useState } from 'react';
import AllMovie from './AllMovie';
import MovieModal from '../MovieModal/MovieModal';

const AllMovies = () => {
    const [movies, setMovies] = useState([]);
    const [show, setShow] = useState(false);
    const [details, setDetails] = useState([]);


    useEffect(() => {
        fetch('https://api.tvmaze.com/search/shows?q=all')
            .then(res => res.json())
            .then(data => setMovies(data))
    }, [])
    return (
        <div className='mt-5'>
            <div className='row g-2'>
                {
                    movies.map(movie => <AllMovie
                        setShow={setShow}
                        setDetails={setDetails}
                        movie={movie}
                    ></AllMovie>)
                }
            </div>
            {
                <MovieModal
                    show={show}
                    details={details}
                    setShow={setShow}
                ></MovieModal>
            }
        </div >
    );
};

export default AllMovies;