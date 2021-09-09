import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Footer, Header } from './layout';
import { Home, About, Contact, Edit } from './pages';
import './index.css';

function App() {
    return(
        <>
            <Header />
            <Switch>
                <Route exact path="/"><Home /></Route>
                <Route path="/contact"><Contact /></Route>
                <Route exact path="/about"><About /></Route>
                <Route path="/about/:username"><Edit /></Route>
            </Switch>
            <Footer />
        </>
    )
}

export default App;
