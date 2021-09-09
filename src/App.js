import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Footer, Header } from './layout';
import { Home, About, Contact } from './pages';
import './index.css';

function App() {
    return(
        <>
            <Header />
            <Switch>
                <Route exact path="/"><Home /></Route>
                <Route path="/contact"><Contact /></Route>
                <Route path="/about"><About /></Route>
            </Switch>
            <Footer />
        </>
    )
}

export default App;
