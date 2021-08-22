import React from 'react';
import Router from './router/index';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        wordWrap: 'wrap',
        fontFamily: 'sans-serif',
        fontWeight: 'bold'
    }
});

function App() {
    const classes = useStyles();
    return (
        <>
            <div className={classes.root}>
                <Router />
            </div>
        </>
    );
}

export default App;