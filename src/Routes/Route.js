import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
 
import ListPoke  from "../Component/ListPoke/ListPoke";

function Routess() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={
                    <ListPoke/>
                }/>
            </Routes>
        </BrowserRouter>
    )
}

export default Routess;