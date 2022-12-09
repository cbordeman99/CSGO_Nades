import React from "react";
import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import AppRouter from "./AppRouter";
import "./index.css";
import {
  radarPictures,
  mapIcons,
  mapNames,
  nadeNames,
  nadeIcons,
  iconNames,
  icons,
  assetStructure
} from "./constants/Constants";
import nadeservice from "./services/nadeservice";

function App(props) {
  const [loading, setLoading] = useState(false);
  const [assets, setAssets] = useState([]);

  //nadeservice.saveAllNades(JSON.stringify({ a: "c" }));

  // TODO - Safeguard assets
  useEffect(() => {
    // Loads assets exactly once
    loadAssets();
  }, []);

  // Process assets after promise.all
  const processAssets = (result) => {
    const assets = JSON.parse(JSON.stringify(assetStructure));
    for (let i = 0; i < result.length; i++) {
      let keys = Object.keys(result[i])[0].split(" ");
      if (keys.length === 1) {
        assets[keys[0]] = Object.values(result[i])[0];
      } else {
        assets[keys[0]][keys[1]] = Object.values(result[i])[0];
      }
    }

    return assets;
  };

  const loadAssets = async () => {
    const promises = [];
    // Load Map images (radars)
    mapNames.forEach((mapName) => {
      const promise = new Promise(function (resolve, reject) {
        const img = new Image();
        img.src = radarPictures[mapName];
        const radarKey = `${mapName} Radar`;
        img.onload = resolve({ [radarKey]: img });
        img.onerror = reject();
      });
      promises.push(promise);
    });

    // Load Map images (icons)
    mapNames.forEach((mapName) => {
      const promise = new Promise(function (resolve, reject) {
        const img = new Image();
        img.src = mapIcons[mapName];
        const iconKey = `${mapName} Icon`;
        img.onload = resolve({ [iconKey]: img });
        img.onerror = reject();
      });
      promises.push(promise);
    });

    // Load nade icons
    nadeNames.forEach((nadeName) => {
      const promise = new Promise(function (resolve, reject) {
        const img = new Image();
        img.src = nadeIcons[nadeName];
        img.onload = resolve({ [nadeName]: img });
        img.onerror = reject();
      });
      promises.push(promise);
    });

    // Load icons
    iconNames.forEach((iconName) => {
      const promise = new Promise(function (resolve, reject) {
        const img = new Image();
        img.src = icons[iconName];
        img.onload = resolve({ [iconName]: img });
        img.onerror = reject();
      });
      promises.push(promise);
    });

    let result = await Promise.all(promises);
    result = processAssets(result);
    setAssets(result);
    setLoading(false);
    return;
  };

  return loading ? (
    <div className="Spinner"> LOADING </div>
  ) : (
    <AppRouter assets={assets} />
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
