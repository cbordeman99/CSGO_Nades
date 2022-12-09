import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MapOverview from "./components/map/MapOverview";
import Header from "./components/header/Header";
import SubmitNade from "./components/submitnade/SubmitNade";
import HomePage from "./components/header/HomePage";
import NadeGroupList from "./components/nade/NadeGroupList";

export default function AppRouter(props) {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/Maps"
          element={<MapOverview mapName="" assets={props.assets} />}
        />
        <Route path="/SubmitNade" element={<SubmitNade />} />
        <Route path="/Test" element={<NadeGroupList />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}
