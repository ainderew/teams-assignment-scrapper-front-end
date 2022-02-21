import React from "react";
import Styles from "./main.module.scss"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//components
import COMPONENT_BOTTOM_BAR from "../../components/bottom-bar/bottom_bar.component";

//pages
import PAGE_ASSIGNMENT from "../assignments/assignments.page";





const PAGE_MAIN = ( )=>{
    return(
        <Router>
            <Routes>
                <Route path="/" element={< PAGE_ASSIGNMENT />} />
            </Routes>
            <COMPONENT_BOTTOM_BAR />
        </Router>
    )
}

export default PAGE_MAIN;