import React from 'react';
import { 
    Route,
    Switch } 
    from 'react-router-dom';
import Landing from './Landing';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';
import Project from './Project';
import KillerKao from './Project/KillerKao';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/"> <Landing /> </Route>
            <Route path="/about"> <About /> </Route>
            <Route path="/projects"> <Projects /> </Route>
            <Route path="/project"> <Project /> </Route>
            <Route path="/killerkao"> <KillerKao /> </Route>
            <Route path="/contact"> <Contact /> </Route>
           
        </Switch>
    );
}

export default Routes;