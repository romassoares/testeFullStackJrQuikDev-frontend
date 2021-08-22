import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Divider,
    Grid,
} from '@material-ui/core'
import Paper from '@material-ui/core/Paper';
import * as api
    from '../api/api'
import { Link, useParams } from 'react-router-dom';

const useStyles = makeStyles({
    containerCards: {
        display: 'flex',
        flexDirection: 'column',
        padding: '10px',
        lineHeight: '30px'
    },
    img: {
        width: '200px',
        height: 'auto'
    }
});


export default function Index() {
    const classes = useStyles();
    const [movie, setMovie] = useState([])
    const param = useParams()

    const details = async () => {
        const { movie_id } = param
        const result = await api.details(movie_id)
        setMovie(result)
    }

    useEffect(() => {
        (async function loadData() {
            details()
        })();
    }, []);

    return (
        <>
            <Paper className={classes.paper}>
                <Grid className={classes.list}>
                    <Link to="/">Home</Link>
                </Grid>
                <Divider />
                <div className={classes.containerCards}>
                    <div>Original language -  {movie.original_language}</div>
                    <div>Original title - {movie.original_title}</div>
                    <div>Overview - {movie.overview}</div>
                    <div>Popularity - {movie.popularity}</div>
                    <div>Release date - {movie.release_date}</div>
                    <div>Status - {movie.status}</div>
                    <div>Tagline - {movie.tagline}</div>
                    <div>Vote average - {movie.vote_average}</div>
                    <div>Vote count - {movie.vote_count}</div>
                    <img className={classes.img} src={'https://image.tmdb.org/t/p/w500' + movie.poster_path} />

                </div>
            </Paper>
        </>
    );
}
