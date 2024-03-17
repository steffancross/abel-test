import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Collection from "../features/collection/Collection";
import Landing from "../features/landing/Landing";
import { me } from "./store";

const AppRoutes = () => {
  return (
    <div className="base">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/collections" element={<Collection />} />
        <Route path="/collections/:symbol" element={<Collection />} />
        <Route path="*" element={<Landing />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
