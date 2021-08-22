
import React from 'react';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    Pagination: {
        marginTop: 20,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
    }
});

export function BtnPaginate({ info, pge, handleList }) {
    const classes = useStyles();
    const prevPage = () => {
        if (pge === 1) return;
        const pageNumber = pge - 1;
        handleList(pageNumber);
    };
    const nextPage = () => {
        if (pge === info.total) return;
        const pageNumber = pge + 1;
        handleList(pageNumber);
    };
    return (
        <>
            <Grid container className={classes.Pagination}>
                <Grid item xs={2} style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                    Página {info.pge} de {info.total_pages}
                </Grid>
                <Grid item xs={2} style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <IconButton disabled={pge === 1} aria-label="before" onClick={() => { prevPage() }}>
                        <NavigateBeforeIcon />
                    </IconButton>
                    <IconButton disabled={pge === info.last_page} aria-label="next" onClick={() => { nextPage() }}>
                        <NavigateNextIcon />
                    </IconButton>
                </Grid>
            </Grid>
        </>
    );
}