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
import Popop from './Project/Popop';
import Thx4memeries from './Project/Thx4memeries';
import Pikatsume from './Project/Pikatsume';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/"> <Landing /> </Route>
            <Route path="/about"> <About /> </Route>
            <Route path="/projects"> <Projects /> </Route>
            <Route path="/project"> <Project /> </Route>
            <Route path="/killerkao"> <KillerKao /> </Route>
            <Route path="/popop"> <Popop /> </Route>
            <Route path="/thx4memeries"> <Thx4memeries /> </Route>
            <Route path="/pikatsume"> <Pikatsume /> </Route>
            <Route path="/contact"> <Contact /> </Route>
           
        </Switch>
    );
}

export default Routes;