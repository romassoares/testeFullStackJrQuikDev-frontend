import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Divider,
    Typography,
    TextField,
    Grid,
} from '@material-ui/core'
import Paper from '@material-ui/core/Paper';
import * as api
    from '../api/api'

const useStyles = makeStyles({
    list: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        borderBottom: "none",
        boxShadow: '1px 1px 5px rgba(180,180,180, 0.5)'
    },
    paper: {
        padding: '5px',
        margin: 'center',
    },
    containerCards: {
        display: 'flex',
        flexDirection: 'column'
    },
    square: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'pink',
        margin: '5px',
    },
    titleSquard: {
        color: "#000",
        fontSize: '1em'
    },
    root: {
        '& .MuiTextField-root': {
            margin: '5px',
            width: '25ch',
        },
    },
    img: {
        width: '200px',
        height: 'auto'
    }
});


export default function Index() {
    const classes = useStyles();
    const [elements, setElements] = useState([]);
    const [genres, setGenres] = useState([])
    const [genre, setGenre] = useState([])

    const handleChange = (event) => {
        setGenre(event.target.value);
    };

    const ListGenres = async () => {
        const result = await api.generos()
        setGenres(result.genres)
    }

    const handleList = async () => {
        const resultListMovies = await api.movies()
        const { results } = resultListMovies
        setElements(results)
    }

    const handleSubmit = async e => {
        e.preventDefault()
        const response = await api.seacher(e.target.value)
        const { results } = response
        setElements(results)
    }

    const details = () => {

    }

    useEffect(() => {
        (async function loadData() {
            handleList()
            ListGenres()
        })();
    }, []);

    return (
        <>
            <Paper className={classes.paper}>
                <Grid className={classes.list}>
                    <form noValidate onChange={handleSubmit}>
                        <TextField
                            id="genre"
                            select
                            label="Genre"
                            value={genre}
                            onChange={handleChange}
                            SelectProps={{
                                native: true,
                            }}
                            helperText="Please select genre"
                            variant="outlined"
                        >
                            {
                                (genres) ? ((genres).map((row, index) => (
                                    <option key={row.id} value={row.name}>
                                        {row.name}
                                    </option>
                                ))) : 'indefinido'
                            }
                        </TextField>
                    </form>
                </Grid>
                <Divider />
                <div className={classes.containerCards}>
                    {
                        (elements) ? ((elements).map((row, index) => (
                            <>
                                <div className={classes.square} key={row.id} onClick={details}>
                                    <p>{row.original_title}</p>
                                    <p>{row.overview}</p>
                                    <img className={classes.img} src={'https://image.tmdb.org/t/p/w500' + row.poster_path} />
                                    <p>{row.release_date}</p>
                                </div>
                            </>
                        ))) : (<Typography justify="center">Nenhum filme encontrado!</Typography>)
                    }
                </div>
            </Paper>
        </>
    );
}
