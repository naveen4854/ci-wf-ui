import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import {
    ComposableMap,
    ZoomableGroup,
    Geographies,
    Geography
} from "react-simple-maps";
import chroma from 'chroma-js';

const geoPaths = ["/world.json", "/ch.json"];

const getRandomInt = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min + 1) + min);

const colorScale = chroma.brewer.Oranges.slice(1);
const scl = chroma
    .scale(["#FFF", "#FF5419", "#000"])
    .mode("lch")
    .colors(8);

const temp = new Array(180);
const colors = temp.map(d => colorScale[getRandomInt(0, colorScale.length - 1)]);


const SimpleMap: React.FC = () => {

    const [state, setState] = useState({
        detail: false,
        paths: geoPaths[0],
        center: [0, 0],
        zoom: 1
    })

    const switchPaths = () => {
        const { detail } = state;
        setState({
            paths: detail ? geoPaths[0] : geoPaths[1],
            center: detail ? [0, 0] : [8, 47],
            zoom: detail ? 1 : 60,
            detail: !detail
        });
    };

    return (
        <React.Fragment>
            {"Click on the map!"}

            <ComposableMap style={{ width: "100%", height: "auto" }}>
                <Geographies geography={state.paths} disableOptimization>
                    {(geos: any, proj: any) =>
                        geos.map((geo: any, i: any) => (
                            <Geography
                                key={
                                    (geo.properties.ISO_A3 || geo.properties.GID_1) + i
                                }
                                cacheId={
                                    (geo.properties.ISO_A3 || geo.properties.GID_1) + i
                                }
                                geography={geo}
                                projection={proj}
                                onClick={switchPaths}
                                style={{
                                    default: {
                                        fill: colors[i],
                                        outline: "none"
                                    },
                                    hover: {
                                        outline: "none"
                                    },
                                    pressed: {
                                        outline: "none"
                                    }
                                }}
                            />
                        ))
                    }
                </Geographies>
            </ComposableMap>
        </React.Fragment>
    );
}

export default SimpleMap;
