import React from "react";
import { Route, Routes } from "react-router-dom";

import { Home, PageNotFound}  from "./pages";
import SeasonDetailsList from "./pages/seasonDeatilsList";

//Routes component containing routes for the whole application
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/season/:year" element={<SeasonDetailsList/>}></Route>
      <Route path="*" element={<PageNotFound/>}></Route>
    </Routes>
  );
}

export default AppRoutes;
