import React, { useState, useEffect } from 'react';
import axios from './axios';
import requests from './requests';

function Row({ title, fetchUrl }) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return requests;
        }
        fetchData();
    }, [fetchUrl]);

    return (
        <div className="row">
            <h2>{title}</h2>

            <div className="">
                {/* {several row_poster(s)} */}

                {movies.map()}
            </div>

        </div>
    )
}

export default Row

