import React, { useState, useEffect } from 'react';
import './App.css';

import {
    ComposableMap,
    Geographies,
    Geography,
    ZoomableGroup,
    Point
} from "react-simple-maps";
import chroma from 'chroma-js';
import { geoPath } from "d3-geo";
import ReactTooltip from "react-tooltip";
// import { geoTimes } from "d3-geo-projection";

const geoPaths = ["/world.json", "/ch.json"];

const getRandomInt = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min + 1) + min);

const colorScale = chroma.brewer.Oranges.slice(1);

const colors: Array<any> = [];
for (let i = 0; i < 180; i++) {
    let aa = colorScale[getRandomInt(0, colorScale.length - 1)];
    colors.push(aa);
};


interface IMyComponentState {
    onCountrySelected: Function
}

const SimpleMap: React.FC<IMyComponentState> = ({ onCountrySelected }) => {
    const [content, setContent] = useState("");

    const [state, setState] = useState({
        detail: false,
        paths: geoPaths[0],
        center: [0, 0] as Point,
        zoom: 1,
        countrySelected: ''
    })

    // const projection = () => {
    //     return geoTimes()
    //         .translate([100, 100])
    //         .scale(160)
    // }

    const switchPaths = (e: any, geography: any, c: any) => {
        // const path = geoPath().projection(projection())
        // const centroid = projection().invert(path.centroid(geography))
        const { detail } = state;
        console.log(geography, 'click');
        setState({
            paths: geoPaths[0],
            center: [0, 0] as Point,
            // center: detail ? [0, 0] as Point : [8, 47] as Point,
            zoom: detail ? 1 : 1,
            detail: !detail,
            countrySelected: geography.properties.ISO_A2
        });

        if (onCountrySelected) {
            onCountrySelected(geography.properties.NAME)
            setContent(`${geography.properties.NAME}`)
        }
    };

    const rounded = (num: any) => {
        if (num > 1000000000) {
            return Math.round(num / 100000000) / 10 + "Bn";
        } else if (num > 1000000) {
            return Math.round(num / 100000) / 10 + "M";
        } else {
            return Math.round(num / 100) / 10 + "K";
        }
    };

    // const colors = ["red", "blue", "green", "black", "yellow"];
    const handleCountryClick = (event: any) => {
        // event.preventDefault();
        // event.persist();
        console.log(event);
    };
    useEffect(() => {
        ReactTooltip.rebuild();
    }, [content])
    return (
        <React.Fragment>
            <ComposableMap data-tip={content} showCenter={false} style={{ width: "100%", height: "auto" }}>
                <ZoomableGroup center={state.center} zoom={1}>
                    <Geographies geography={state.paths} disableOptimization>
                        {({ geographies }: any) =>
                            geographies.map((geo: any, i: any) => {
                                // console.log(geo)
                                return (
                                    <Geography
                                        key={
                                            (geo.properties.ISO_A3 || geo.properties.GID_1) + i
                                        }
                                        cacheId={
                                            (geo.properties.ISO_A3 || geo.properties.GID_1) + i
                                        }
                                        geography={geo}
                                        // projection={proj}
                                        onMouseUp={(e) => switchPaths(e, geo, undefined)}
                                        onMouseEnter={() => {
                                            const { NAME, POP_EST } = geo.properties;
                                            // console.log(setTooltipContent, `${NAME}`, 'enter')
                                            setContent(`${NAME}`);
                                        }}
                                        onMouseLeave={() => {
                                            setContent("");
                                        }}
                                        style={{
                                            default: {
                                                fill: state.countrySelected === geo.properties.ISO_A2 ? 'green' : colors[i],
                                                outline: "none"
                                            },
                                            hover: {
                                                fill: 'green',
                                                outline: "none"
                                            },
                                            pressed: {
                                                outline: "none"
                                            }
                                        }}
                                    />
                                )
                            })
                        }
                    </Geographies>
                </ZoomableGroup>
            </ComposableMap>
            <ReactTooltip getContent={(dataTip: string) => <a>{dataTip} aaa</a>}>{content}</ReactTooltip>
        </React.Fragment >
    );
}

export default React.memo(SimpleMap);
