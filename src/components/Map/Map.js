import React, { useEffect, useRef, useState } from "react";
import Player from "../Player/Player";
// import mapsData from "./mapsData";
import "./map.css";
import { useParams } from "react-router-dom";

const Map = () => {
    const { mapName } = useParams();
    const mapRef = useRef();
    const [currentMap, setCurrentMap] = useState("");

    useEffect(() => {
        setCurrentMap(mapName);
    }, [mapName]);

    return (
        <div ref={mapRef} className={`map pixel-art ${currentMap}`}>
            <Player />
        </div>
    );
};

export default Map;
