import React from "react";

import {
 BrowserRouter,
 Routes,
 Route
} from "react-router-dom";
import { Dashboard } from "../Dashboard";
import { Repository } from "../Repository";



export const RoutesApp = () => {
 
 return (
<BrowserRouter>
<Routes>
<Route path="/" element={<Dashboard />} ></Route>
<Route path="/repository/*" element={<Repository />} ></Route>
</Routes>
</BrowserRouter>
)
 

}